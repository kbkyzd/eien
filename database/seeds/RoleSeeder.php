<?php

use Illuminate\Database\Seeder;
use eien\Acl\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name' => 'Super User',
            'slug' => 'root',
            'description' => 'Full access.',
        ]);

        Role::create([
            'name' => 'Moderator',
            'slug' => 'mod',
            'description' => 'Perform administrative duties.',
        ]);

        Role::create([
            'name' => 'User',
            'slug' => 'aka-chan',
            'description' => 'Default user role.',
        ]);
    }
}
