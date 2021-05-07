<?php

namespace Database\Seeders;

use App\Models\RenterStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class RenterStatusSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = new RenterStatus();
        $status->name="Processing";
        $status->save();

        $status = new RenterStatus();
        $status->name="Cancel";
        $status->save();

        $status = new RenterStatus();
        $status->name="Approved";
        $status->save();
    }
}
