<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{

    public function getAll(){
        $id = Auth::id();

        $data = DB::table('providers')->join('providers_services','id','=','provider_id')
                                            ->join('services','service_id','=','services.id')
                                            ->select('providers.id','providers.price_per_hour','providers.user_id','services.service')
                                            ->where('user_id','=',$id)->get();
//        dd($data);
        return response()->json($data);
    }

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
        $provider->name = $request->name;
        $services = json_decode($request->service_id);
        $provider->save();
        $provider->services()->sync($services);
        return response()->json($request->all());
    }

    public function findById($id){
        return Provider::findOrFail($id);
    }
}
