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
        $status->name="Processing";
        $status->save();

        $status = new RequestStatus();
        $status->name="Acceptance";
        $status->save();

        $status = new RequestStatus();
        $status->name="Cancel";
        $status->save();
    }
}
