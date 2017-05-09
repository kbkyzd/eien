<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use eien\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        User::create([
            'name' => 'amatsuka',
            'email' => 'amatsuka@amatsuka.amatsuka',
            'username' => 'amatsuka',
            'password' => bcrypt('kappa'),
            'api_token' => str_random(60)
        ]);

        User::create([
            'name' => 'tamaki',
            'email' => 'tamaki@tamaki.tamaki',
            'username' => 'tamaki',
            'password' => bcrypt('kappa'),
            'api_token' => str_random(60)
        ]);

        User::create([
            'name' => 'chihiro',
            'email' => 'chihiro',
            'username' => 'chihiro',
            'password' => bcrypt('kappa'),
            'api_token' => str_random(60)
        ]);

        foreach (range(1, 9) as $inx) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'username' => $faker->userName,
                'password' => bcrypt('kappa')
            ]);
        }
    }
}
