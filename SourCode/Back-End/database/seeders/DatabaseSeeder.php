<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
//        $this->call(ProfileSeeder::class);
//        $this->call(ProviderSeeder::class);
        $this->call(ProviderStatusSeederTable::class);
        $this->call(RolesSeederTable::class);
        $this->call(ServiceSeeder::class);
        $this->call(StatusesSeederTable::class);
        $this->call(RequestStatusesSeeder::class);
    }
}
