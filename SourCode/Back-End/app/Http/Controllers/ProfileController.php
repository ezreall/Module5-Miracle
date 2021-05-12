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

    public function getAll(){

        $profiles=Profile::join('providers','profiles.provider_id','=','providers.id')->orderBy('provider_id', 'DESC')->skip(0)->take(12)->get();
        $profile=Profile::join('providers','profiles.provider_id','=','providers.id')->orderBy('provider_id', 'DESC')->skip(12)->take(4)->get();
        return response()->json([$profiles,$profile]);
    }
    function getById($id){
         $profile=Profile::findOrFail($id);
      return response()->json($profile);

    }

    public function search(Request $request)

    {
//        dd($request);
        if (!empty($request->get('renters'))) {
            $profile = Profile::join(
                'requests','profiles.provider_id','=','requests.provider_id')
                ->where('date_of_birth',$request->get('old'))
                ->orWhere('gender', $request->get('gender'))
                ->orWhere('city', $request->get('city'))
            ->orWhere('profiles.provider_id',$request->get('increased'))
                ->get();
        }else{
            $profile = DB::table('profiles')
                ->where('date_of_birth', $request->get('old'))
                ->orWhere('gender', $request->get('gender'))
                ->orWhere('city', $request->get('city'))
                ->get();
        }

            return response()->json($profile);
//
        }

    }

