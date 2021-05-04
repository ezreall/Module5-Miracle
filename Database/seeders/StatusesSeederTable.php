<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class StatusesSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status =new Status();
        $status->name ='register';
        $status->save();

        $status =new Status();
        $status->name ='active';
        $status->save();

        $status =new Status();
        $status->name ='vip';
        $status->save();

        $status =new Status();
        $status->name ='locked';
        $status->save();
    }
}
