<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name ='Huyen';
        $user->email ="huyen@gmail.com";
        $user->phone="982872336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='Hung';
        $user->email ="hung@gmail.com";
        $user->phone="9812872336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='hai';
        $user->email ="hai@gmail.com";
        $user->phone="9822336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='thang';
        $user->email ="thang@gmail.com";
        $user->phone="12172336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='Minh';
        $user->email ="minh@gmail.com";
        $user->phone="54872336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='Khoai';
        $user->email ="khoai@gmail.com";
        $user->phone="21872336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='Linh';
        $user->email ="linh@gmail.com";
        $user->phone="12872336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='Manh';
        $user->email ="manh@gmail.com";
        $user->phone="12872336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='Thuan';
        $user->email ="thuan@gmail.com";
        $user->phone="91272336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

        $user = new User();
        $user->name ='Ty';
        $user->email ="ty@gmail.com";
        $user->phone="91272336";
        $user->password = bcrypt(123456);
        $user->status_id =1;
        $user->role_id = 1;
        $user->save();

    }
}
