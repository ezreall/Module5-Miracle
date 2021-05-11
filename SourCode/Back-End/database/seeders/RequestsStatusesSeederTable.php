<?php

namespace Database\Seeders;

use App\Models\RequestStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class RequestsStatusesSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = new RequestStatus();
        $status->name = "Đang tiến hành";
        $status->save();

        $status = new RequestStatus();
        $status->name = "Chấp thuận";
        $status->save();

        $status = new RequestStatus();
        $status->name = "Hủy bỏ";
        $status->save();
    }
}
