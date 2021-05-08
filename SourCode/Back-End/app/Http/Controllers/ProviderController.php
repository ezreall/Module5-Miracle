<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\ProfileImage;
use App\Models\Provider;
use App\Models\ProviderStatus;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class ProviderController extends Controller
{
    public function __construct()
    {

    }

    public function getAll(): \Illuminate\Http\JsonResponse
    {
        $service = Service::all();

        return response()->json($service);
    }



    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {
            $provider = new Provider();
            $provider->user_id = Auth::id();
            $provider->price_per_hour = $request->price_per_hour;
            $services = $request->service_id;
            $provider->save();
            $provider->services()->sync($services);
            $profile = new Profile();
            $profile->fill($request->all());
            $profile->provider_id =  $provider->id;
            $profile->date_join = Auth::user()->created_at;
            $profile->save();
            $image = new ProfileImage();
            $image->profile_id = $profile->id;
            $image->name = $request->name;
            $image->save();
            DB::commit();
            return response()->json('oke');

        }catch (\Exception $e){
            DB::rollBack();
            return response()->json($e->getMessage());

        }

    }


}
