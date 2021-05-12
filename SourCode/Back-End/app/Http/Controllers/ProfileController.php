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

        $profiles=Profile::join('providers','profiles.provider_id','=','providers.id')
            ->orderBy('provider_id', 'DESC')->skip(0)->take(12)->get();
        $profile=Profile::join('providers','profiles.provider_id','=','providers.id')
            ->orderBy('provider_id', 'DESC')->skip(12)->take(4)->get();
        return response()->json([$profiles,$profile]);
    }

    function  demo(){
//        $profiles=DB::table('provider_info')->orderBy('provider_id','desc')->get();
        $profiles=Provider::
            join('profiles','providers.id','=','profiles.provider_id')
            ->join('providers_services','providers.id','=','providers_services.provider_id')
            ->join('services','services.id','=','providers_services.service_id')
            ->orderBy('providers.id', 'DESC')->skip(0)->take(3)->get();
        return response()->json($profiles);

    }

    function getList() {
        $id = auth()->id();
        $list = DB::table('providers')
            ->join('profiles','providers.id','=','profiles.provider_id')
            ->select('providers.price_per_hour','profiles.*')->where('providers.user_id','<>',$id)->get();
        return response()->json($list);
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

