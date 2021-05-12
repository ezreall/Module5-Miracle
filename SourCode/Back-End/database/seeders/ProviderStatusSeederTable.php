<?php

namespace Database\Seeders;

use App\Models\ProviderStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class ProviderStatusSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = new ProviderStatus();
        $status->name = "Đang sẵn sàng";
        $status->save();

        $status = new ProviderStatus();
        $status->name = "Đang bận";
        $status->save();

        $status = new ProviderStatus();
        $status->name = "Không sẵn sàng";
        $status->save();
    }
}
