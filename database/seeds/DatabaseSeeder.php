<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    private $table = [
        'users',
        'sensors',
        'sensor_raws',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->cleanDb();

        $this->call('UserSeeder');
        $this->call('SensorSeeder');
        $this->call('SensorRawDataSeeder');
    }

    public function cleanDb()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        foreach ($this->table as $tableName) {
            DB::table($tableName)->truncate();
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
    }
}
