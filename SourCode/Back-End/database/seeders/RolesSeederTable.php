<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class RolesSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role();
        $role->name = "user";
        $role->save();

        $role = new Role();
        $role->name = "dev";
        $role->save();

        $role = new Role();
        $role->name = "admin";
        $role->save();
    }
}
