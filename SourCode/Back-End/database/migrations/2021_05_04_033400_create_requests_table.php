<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('renter_id');
            $table->unsignedBigInteger('provider_id');
            $table->string('status');
            $table->string('message');
            $table->date('start_time');
            $table->integer('time');
            $table->date('date');
            $table->integer('money_amount');
            $table->foreign('provider_id')->references('id')->on('profiles');
            $table->foreign('renter_id')->references('id')->on('renters');
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
        Schema::dropIfExists('requests');
    }
}
