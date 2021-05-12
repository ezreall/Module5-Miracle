<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{

    public function getMyService(){
        $id = Auth::id();

        $data = DB::table('providers')->join('providers_services','providers.id','=','provider_id')
                                            ->join('services','service_id','=','services.id')
                                            ->select('providers.id','providers.price_per_hour','providers.user_id','services.service')
                                            ->where('user_id','=',$id)->get();
//        dd($data);
        return response()->json($data);
    }

    public function getAllService(){
        $services = Service::skip(0)->take(7)->get();
        $test = Service::skip(7)->take(2)->get();
        $tests = Service::skip(9)->take(5)->get();
        return response()->json([$services,$test,$tests]);
    }


//    function getAllService()
//    {
//        $services = Service::all();
//        return response()->json($services);
//    }

//    function getProviderInfor($id)
//    {
//        $providerInfor = DB::table('users')->join('profiles','users.id','=','profiles.user_id')
//            ->join('providers','users.id','=','providers.user_id')
//            ->join('provider_statuses','providers.status_id','=','provider_statuses.id')
//            ->select('users.id','profiles.*','providers.price_per_hour')->where('users.id','=',$id)->get();
//
//        return response()->json($providerInfor);
//
//    }

    public function store(Request $request){
        $checkId = Auth::id();
        $data = Provider::where('user_id',$checkId)->exists();
//        dd($data);
        if ($data){
            return response()->json([
                'messenger'=>'error'
            ]);
        }


        $provider = new Provider();
        $provider->user_id = Auth::id();
        $provider->price_per_hour = $request->price_per_hour;
        $services = json_decode($request->service_id);
        $provider->save();
        $provider->services()->sync($services);
        return response()->json($request->all());
    }


    public function update(Request $request,$id){
        $provider = $this->findById($id);
        $provider->user_id = Auth::id();
        $provider->price_per_hour = $request->price_per_hour;
//        $services = json_decode($request->service_id);
        $provider->save();
//        $provider->services()->sync($services);
        return response()->json($request->all());
    }

    public function findById($id){
        return Provider::findOrFail($id);
    }
}
