<?php

namespace eien\Helpers;

use Illuminate\Support\Facades\Cache;

/**
 * Various aesthetics for use in the footer
 * @package eien\Helpers
 */
class Version
{
    public function revision()
    {
        return Cache::remember('version:current-revision', 60, function () {
            return trim(shell_exec('git rev-list --count HEAD'));
        });
    }

    public function hash()
    {
        return Cache::remember('version:current-hash', 60, function () {
            return shell_exec('git rev-parse --short HEAD');
        });
    }

    public function isClean()
    {
        return Cache::remember('version:current-state', 60, function () {
            $porcelain = shell_exec('git status --porcelain');

            if ($porcelain) {
                return false;
            }

            return true;
        });
    }
}