<?php

namespace Tests\Feature;

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
}
