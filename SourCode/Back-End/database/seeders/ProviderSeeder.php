<?php

namespace Database\Seeders;

use App\Models\Provider;
use Illuminate\Database\Eloquent\Model;
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
        $provider->user_id='1';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='2';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='3';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='4';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='5';
        $provider->price_per_hour='15000';
        $provider->status_id='1';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='6';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='7';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='8';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='9';
        $provider->price_per_hour='15000';
        $provider->status_id='2';
        $provider->save();

        $provider=new Provider();
        $provider->user_id='10';
        $provider->price_per_hour='15000';
        $provider->status_id='1';
        $provider->save();


    }
}
