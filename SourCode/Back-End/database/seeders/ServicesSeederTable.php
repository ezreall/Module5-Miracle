<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServicesSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service = new Service();
        $service->service = "Ra mắt người nhà/ bạn bè";
        $service->save();

        $service = new Service();
        $service->service = "Du lịch cùng nhóm bạn";
        $service->save();

        $service = new Service();
        $service->service = "Đi chơi chung";
        $service->save();

        $service = new Service();
        $service->service = "Tham dự sinh nhật";
        $service->save();

        $service = new Service();
        $service->service = "Trò chuyện offline / online";
        $service->save();

        $service = new Service();
        $service->service = "Đi chơi tết";
        $service->save();

        $service = new Service();
        $service->service = "Đi chơi ngày lễ";
        $service->save();

        $service = new Service();
        $service->service = "Nắm tay/Nhìn mắt";
        $service->save();

        $service = new Service();
        $service->service = "Ôm";
        $service->save();

        $service = new Service();
        $service->service = "Hôn";
        $service->save();

        $service = new Service();
        $service->service = "Nhõng nhẽo";
        $service->save();

        $service = new Service();
        $service->service = "Cử chỉ thân mật";
        $service->save();

        $service = new Service();
        $service->service = "Nói lời yêu";
        $service->save();
    }
}
