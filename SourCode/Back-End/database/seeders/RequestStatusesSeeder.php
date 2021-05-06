<?php

namespace Database\Seeders;

use App\Models\RequestStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class RequestStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = new RequestStatus();
        $status->name = "processing";
        $status->save();

        $status = new RequestStatus();
        $status->name = "approve";
        $status->save();

        $status = new RequestStatus();
        $status->name = "cancle";
        $status->save();

    }
}
