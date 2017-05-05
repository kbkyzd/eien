<?php

namespace eien\Notifications;

use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;

/**
 * A queued version of the password reset notification.
 * @package eien\Notifications
 */
class ResetPassword extends ResetPasswordNotification implements ShouldQueue
{
    use Queueable;
}
