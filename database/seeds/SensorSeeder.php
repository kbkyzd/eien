<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use eien\Sensor;

class SensorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 5) as $inx) {
            Sensor::create([
                'sensor_name' => $faker->company
            ]);
        }
    }
}
