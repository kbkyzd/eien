<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace eien\Acl{
/**
 * eien\Acl\Permission
 *
 * @property int $id
 * @property int $inherit_id
 * @property string $name
 * @property array $slug
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\eien\Acl\Role[] $roles
 * @property-read \Illuminate\Database\Eloquent\Collection|\eien\User[] $users
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Permission whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Permission whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Permission whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Permission whereInheritId($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Permission whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Permission whereSlug($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Permission whereUpdatedAt($value)
 */
	class Permission extends \Eloquent {}
}

namespace eien\Acl{
/**
 * eien\Acl\Role
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\eien\Acl\Permission[] $permissions
 * @property-read \Illuminate\Database\Eloquent\Collection|\eien\User[] $users
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Role whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Role whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Role whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Role whereSlug($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Acl\Role whereUpdatedAt($value)
 */
	class Role extends \Eloquent {}
}

namespace eien{
/**
 * eien\Sensor
 *
 * @property int $id
 * @property string $sensor_name
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\eien\Sensor whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Sensor whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Sensor whereSensorName($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\Sensor whereUpdatedAt($value)
 */
	class Sensor extends \Eloquent {}
}

namespace eien{
/**
 * eien\SensorRaw
 *
 * @property int $id
 * @property int $sensor_id
 * @property float $raw_values
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\eien\SensorRaw whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\SensorRaw whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\SensorRaw whereRawValues($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\SensorRaw whereSensorId($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\SensorRaw whereUpdatedAt($value)
 */
	class SensorRaw extends \Eloquent {}
}

namespace eien{
/**
 * eien\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $username
 * @property string $password
 * @property string $api_token
 * @property string $twofa_secret
 * @property string $remember_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\eien\Acl\Permission[] $permissions
 * @property-read \Illuminate\Database\Eloquent\Collection|\eien\Acl\Role[] $roles
 * @method static \Illuminate\Database\Query\Builder|\eien\User role($role, $column = null)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereApiToken($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereEmail($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User wherePassword($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereRememberToken($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereTwofaSecret($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\eien\User whereUsername($value)
 */
	class User extends \Eloquent {}
}

