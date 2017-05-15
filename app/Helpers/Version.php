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
        return Cache::remember('app-current-revision', 60, function () {
            return trim(shell_exec('git rev-list --count HEAD'));
        });
    }

    public function hash()
    {
        return Cache::remember('app-current-hash', 60, function () {
            return shell_exec('git rev-parse --short HEAD');
        });
    }
}