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
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;


class ProviderController extends Controller
{
    public function __construct()
    {

    }


    public function getAll(): \Illuminate\Http\JsonResponse
    {
        $profiles = Profile::all();

        return response()->json($profiles);
    }

    function findById($id): \Illuminate\Http\JsonResponse
    {
        $provider = Provider::findOrFail($id);
        return response()->json($provider);
    }

//    function getProvider($id)
//    {
//        $provider = DB::table('providers')->where('id','=',$id);
//    }

    function getProviderInfor($id)
    {
        $providerInfor = DB::table('users')->join('profiles','users.id','=','profiles.user_id')
            ->join('providers','users.id','=','providers.user_id')
            ->join('provider_statuses','providers.status_id','=','provider_statuses.id')
            ->select('users.id','profiles.*','providers.price_per_hour','providers.id')->where('users.id','=',$id)->get();
        return response()->json($providerInfor);
    }
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
//        return response()->json($request->get('service_id'));
        DB::beginTransaction();
        try {
//            $provider = new Provider();
//            $provider->user_id = Auth::id();
//            $provider->price_per_hour = $request->price_per_hour;
////            $services = json_decode($request->service_id);
//            $provider->save();
//            $provider->services()->sync($services);
            $eloquent = DB::table('providers')->orderBy('id','desc')->first();


            $profile = new Profile();
            $profile->fill($request->all());

                 $profile->provider_id = $eloquent->id;

//             }
            $profile->date_join = Auth::user()->created_at;
            $path = $this->updateFile($request,'avatar','profile');
            $profile->avatar = $path;
            $profile->save();

            if ($request->hasFile('image')) {
                foreach ($request->file('image') as $image) {
                    $imageProfile = new ProfileImage();
                    $imageProfile->profile_id = $profile->id;
                    $data = $this->updateImage($image,'image');
                    $imageProfile->image = $data;
                    $imageProfile->save();

                }
            }

            DB::commit();
            return response()->json($request->all());

        }catch (\Exception $e){
            DB::rollBack();
            return response()->json($e->getMessage());

        }


    }


    function updateImage($image, $nameFolder)
    {
            return $image->store($nameFolder, 'public');

    }

        function updateFile($request, $key, $nameFolder)
        {
            return $request->file($key)->store($nameFolder, 'public');

        }


}
