<?php

namespace eien\Policies;

use eien\BusWatchList;
use eien\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BusWatchListPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the busWatchList.
     *
     * @param  \eien\User $user
     * @param  \eien\BusWatchList $busWatchList
     * @return mixed
     */
    public function view(User $user, BusWatchList $busWatchList)
    {
        //
    }

    /**
     * Determine whether the user can create busWatchLists.
     *
     * @param  \eien\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the busWatchList.
     *
     * @param  \eien\User $user
     * @param  \eien\BusWatchList $busWatchList
     * @return mixed
     */
    public function update(User $user, BusWatchList $busWatchList)
    {
        //
    }

    /**
     * Determine whether the user can delete the busWatchList.
     *
     * @param  \eien\User $user
     * @param  \eien\BusWatchList $busWatchList
     * @return mixed
     */
    public function delete(User $user, BusWatchList $busWatchList)
    {
        return $user->id === $busWatchList->user_id;
    }

    /**
     * Generic catch all policy because >time
     *
     * @param \eien\User $user
     * @param \eien\BusWatchList $busWatchList
     * @return bool
     */
    public function edit(User $user, BusWatchList $busWatchList)
    {
        return $user->id === $busWatchList->user_id;
    }
}
