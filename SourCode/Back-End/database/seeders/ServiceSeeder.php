<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service = new Service();
        $service->name = 'Ra mắt người nhà';
        $service->save();

        $service = new Service();
        $service->name = 'Đi chơi chung';
        $service->save();

        $service = new Service();
        $service->name = 'Tham dự sinh nhật';
        $service->save();
    }
}
