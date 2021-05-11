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
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('provider_id');
            $table->unsignedBigInteger('status_id');
<<<<<<< HEAD:SourCode/Back-End/database/migrations/2021_05_05_083024_create_requests_table.php
            $table->string('message');
            $table->string('address');
            $table->time('start_time');
            $table->integer('time');
=======
>>>>>>> dev:Database/migrations/2021_05_11_074403_create_requests_table.php
            $table->date('date');
            $table->integer('time');
            $table->time('start_time');
            $table->string('address');
            $table->string('message');
            $table->integer('money_amount');
            $table->foreign('provider_id')->references('id')->on('providers');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('status_id')->references('id')->on('request_statuses');
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
