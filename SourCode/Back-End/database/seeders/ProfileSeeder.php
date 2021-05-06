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
        $profile->id='1';
        $profile->provider_id='2';
        $profile->name='huyen';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->required='akjdbfjkasf';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='2';
        $profile->provider_id='2';
        $profile->name='thang';
        $profile->avatar='asdfjbsdfjbsdfsfdjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->required='akjdbfjkasf';

        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->face_book='asdasdasd';
        $profile->description='rat thich gi do';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='3';
        $profile->provider_id='2';
        $profile->name='phong';
        $profile->avatar='asdfasfdsadfsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->required='akjdbfjkasf';

        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='4';
        $profile->provider_id='2';
        $profile->name='huy';
        $profile->avatar='asdfjdsfbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->required='akjdbfjkasf';

        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='5';
        $profile->provider_id='2';
        $profile->name='nguyen';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->required='akjdbfjkasf';

        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='6';
        $profile->provider_id='2';
        $profile->name='Hai';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->required='akjdbfjkasf';

        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='7';
        $profile->provider_id='2';
        $profile->name='Linh';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->required='akjdbfjkasf';

        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='8';
        $profile->provider_id='2';
        $profile->name='huyen';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->required='akjdbfjkasf';

        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();


        $profile= new Profile();
        $profile->id='9';
        $profile->provider_id='2';
        $profile->name='Khanh';
        $profile->required='akjdbfjkasf';

        $profile->avatar='asdfjbsdfsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->face_book='asdasdasd';
        $profile->description='rat thich gi do';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();


        $profile= new Profile();
        $profile->id='10';
        $profile->provider_id='2';
        $profile->name='huyenHuy';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->required='akjdbfjkasf';

        $profile->weight='50';
        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='11';
        $profile->provider_id='2';
        $profile->name='huyenLinh';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->required='akjdbfjkasf';

        $profile->hobby='abc';
        $profile->description='rat thich gi do';
        $profile->face_book='asdasdasd';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();

        $profile= new Profile();
        $profile->id='12';
        $profile->provider_id='2';
        $profile->name='huyenHoa';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->required='akjdbfjkasf';

        $profile->face_book='asdasdasd';
        $profile->description='rat thich gi do';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();


        $profile= new Profile();
        $profile->id='13';
        $profile->provider_id='2';
        $profile->name='huyenKhanh';
        $profile->avatar='asdfjbsdfjbjsdfbjsdf';
        $profile->date_of_birth='20';
        $profile->gender='nu';
        $profile->city='hanoi';
        $profile->required='akjdbfjkasf';

        $profile->country='vietnam';
        $profile->height='177';
        $profile->weight='50';
        $profile->hobby='abc';
        $profile->face_book='asdasdasd';
        $profile->description='rat thich gi do';
        $profile->date_join='khong';
        $profile->voice='de tinh';
        $profile->save();



    }
}
