<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $profile= new Profile();
        $profile->provider_id='1';
        $profile->name='huyen';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->provider_id='2';
        $profile->name='thao';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->face_book='abcd';
        $profile->height='177';
        $profile->weight='50';
        $profile->required="khong gi ca";
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='3';
        $profile->name = 'vu';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='4';
        $profile->name = 'phong';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='5';
        $profile->name = 'phuong';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='6';
        $profile->name = 'hey';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='7';
        $profile->name = 'hi';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='8';
        $profile->name = 'hmm';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='9';
        $profile->name = 'asdf';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->provider_id='10';
        $profile->name = 'asdf';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->required="khong gi ca";
        $profile->face_book='abcd';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        /*$profile = new Profile();
        $profile->id='5';
        $profile->provider_id='2';
        $profile->name = 'asdfsd';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();

        $profile = new Profile();
        $profile->id='4';
        $profile->provider_id='2';
        $profile->name = 'asdfsadfasdf';
        $profile->date_of_birth = '20';
        $profile->gender = 'nu';
        $profile->city = 'hanoi';
        $profile->country = 'vietnam';
        $profile->height = '177';
        $profile->weight = '50';
        $profile->hobby = 'abc';
        $profile->description = 'rat thich gi do';
        $profile->date_join = 'khong';
        $profile->voice = 'de tinh';
        $profile->save();*/
    }
}
