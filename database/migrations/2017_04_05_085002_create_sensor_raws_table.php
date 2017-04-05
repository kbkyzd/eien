<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSensorRawsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sensor_raws', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->integer('sensor_id')->unsigned();
            $table->foreign('sensor_id')->references('id')->on('sensors');
            $table->float('raw_values');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sensor_raws');
    }
}
