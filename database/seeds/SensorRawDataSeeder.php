<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use eien\SensorRaw;
use eien\Sensor;

class SensorRawDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        // Get "actual" existing IDs
        $sensorIds = Sensor::pluck('id');

        foreach (range(1, 100) as $inx) {
            SensorRaw::create([
                'sensor_id' => $faker->randomElement($sensorIds->all()),
                'raw_values' => $faker->numberBetween(20, 50),
            ]);
        }
    }
}
