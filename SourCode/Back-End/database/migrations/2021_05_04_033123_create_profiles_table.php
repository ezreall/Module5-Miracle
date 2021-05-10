<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('avatar')->default('1');
            $table->string('name');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->string('city');
            $table->string('country');
            $table->string('height');
            $table->string('weight');
            $table->string('hobby');
            $table->string('description');
            $table->string('required');
            $table->string('face_book');
            $table->string('date_join');
            $table->string('voice');
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('profiles');
    }
}
