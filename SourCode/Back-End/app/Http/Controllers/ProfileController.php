<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Provider;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function __construct()
    {

    }

    public function getAll()
    {

        $profiles = Profile::join('providers', 'profiles.provider_id', '=', 'providers.id')->orderBy('provider_id', 'DESC')->skip(0)->take(12)->get();
        $profile = Profile::join('providers', 'profiles.provider_id', '=', 'providers.id')->orderBy('provider_id', 'DESC')->skip(12)->take(4)->get();
        return response()->json([$profiles, $profile]);
    }

    function getList() {
        $id = auth()->id();
        $list = DB::table('providers')
            ->join('profiles','providers.id','=','profiles.provider_id')
            ->select('providers.price_per_hour','profiles.*')->where('providers.user_id','<>',$id)->get();
        return response()->json($list);
    }


    function  demo(){
        $profiles=Provider::
            join('profiles','providers.id','=','profiles.provider_id')
            ->join('providers_services','providers.id','=','providers_services.provider_id')
            ->join('services','services.id','=','providers_services.service_id')
            ->orderBy('providers.id', 'DESC')->skip(0)->take(3)->get();
        return response()->json($profiles);

    }



    function getById($id){
         $profile=Profile::findOrFail($id);
      return response()->json($profile);

    }

    public function search(Request $request)
    {
            $profile = DB::table('profiles')->join('providers', 'profiles.provider_id', '=', 'providers.id')
                ->Where('gender',"LIKE", $request->get('gender'))
                ->Where('city',"LIKE", $request->get('city'))
                ->get();

        return response()->json($profile);
    }
    function searchName(Request $request){
        $profiles = DB::table('profiles')->join('providers', 'profiles.provider_id', '=', 'providers.id')
            ->Where('name', $request->get('name'))->get();
        return response()->json($profiles);
    }
}

