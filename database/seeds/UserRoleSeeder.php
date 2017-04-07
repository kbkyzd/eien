<?php

use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Give the 1st user root privileges
        DB::table('role_user')->insert([
            'role_id' => 1,
            'user_id' => 1,
        ]);

        // Give 2nd user mod privileges
        DB::table('role_user')->insert([
            'role_id' => 2,
            'user_id' => 2,
        ]);
    }
}
