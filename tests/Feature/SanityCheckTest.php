<?php

namespace Tests\Feature;

use eien\User;
use Tests\TestCase;

class SanityCheckTest extends TestCase
{
    /**
     * @test
     * A basic sanity check.
     *
     * @return void
     */
    public function it_actually_works()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test */
    public function it_logs_me_in_and_redirects_me_to_home_and_shows_my_username()
    {
        $user = User::findOrFail(1);

        $response = $this->actingAs($user)
                         ->get('/user/profile')
                         ->assertSee($user->name);
    }

    /** @test */
    public function it_denies_access_to_api()
    {
        $response = $this->json('GET', '/api/v1/bus/raw/fake', ['api_token' => 'xaxaxa']);

        $response->assertStatus(401)
                 ->assertExactJson([
                     'error' => "Unauthenticated.",
                 ]);
    }
}
