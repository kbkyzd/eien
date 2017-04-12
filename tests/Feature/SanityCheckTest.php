<?php

namespace Tests\Feature;

use eien\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

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
                         ->get('/home')
                         ->assertSee($user->name);
    }

    /** @test */
    public function it_denies_access_to_api()
    {
        $response = $this->json('POST', '/api/v1/testing/123', ['api_token' => 'ssO24DvUdYuDMa6fPYx4sblU7zmpTfdzsVk6pG6Cakp4uKUkFU8VpMiYjvZ9']);

        $response->assertStatus(401)
                 ->assertExactJson([
                     'error' => "Unauthenticated.",
                 ]);
    }

    /** @test */
    public function it_allows_access_to_api()
    {
        $user = User::findOrFail(1);
        $response = $this->json('POST', '/api/v1/testing/123', ['api_token' => $user->api_token]);

        $response->assertStatus(200);
    }
}
