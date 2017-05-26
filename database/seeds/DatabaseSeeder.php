<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    private $table = [
        'users',
        'roles',
        'role_user',
        'sensors',
        'sensor_raws',
        'telegram_tokens',
        'bus_watch_lists',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->cleanDb();

        // Users and Roles
        $this->call('UserSeeder');
        $this->call('RoleSeeder');
        $this->call('UserRoleSeeder');
        $this->call('WatchListSeeder');

        // Sensors
//        $this->call('SensorSeeder');
//        $this->call('SensorRawDataSeeder');
    }

    public function cleanDb()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        foreach ($this->table as $tableName) {
            DB::table($tableName)
              ->truncate();
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
    }
}
