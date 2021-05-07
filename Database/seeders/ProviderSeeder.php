<?php

namespace Database\Seeders;

use App\Models\Provider;
use Illuminate\Database\Seeder;

class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $provider=new Provider();
        $provider->id='2';
        $provider->user_id='1';
        $provider->price_per_hour='2';
        $provider->status_id='2';
        $provider->save();


    }
}
