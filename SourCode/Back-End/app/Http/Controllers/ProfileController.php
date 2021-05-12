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

    function getById($id)
    {
        $profile = Profile::findOrFail($id);
        return response()->json($profile);

    }

    public function search(Request $request)
    {
//        dd($request);
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

