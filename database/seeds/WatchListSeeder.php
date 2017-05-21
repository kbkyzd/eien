<?php

use eien\BusWatchList;
use eien\Helpers\Cached;
use eien\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class WatchListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        $userIds = User::pluck('id');
        $cached = new Cached();

        $busStopIds = $cached->getAsJson('bus-stops');
        $stopServices = $cached->getAsArray('bus-stops-services');

        $stops = [];

        foreach ($busStopIds as $stopId) {
            $stops[] = $stopId->no;
        }


        foreach (range(1, 30) as $inx) {
            BusWatchList::create([
                'user_id'     => $faker->randomElement($userIds->all()),
                'bus_stop_id' => $faker->randomElement($stops),
                'name'        => $faker->address,
                'description' => $faker->sentence(),
            ]);
        }

        foreach (BusWatchList::all() as $inx) {
            $currStopId = $inx->bus_stop_id;
            $inx->bus_service = $this->getRandService($currStopId, $stopServices);
            $inx->save();
        }
    }

    public function getRandService($stopInx, $obj)
    {
        $collection = collect($obj["$stopInx"]);

        return $collection->random();
    }
}
