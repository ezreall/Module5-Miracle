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

//    public function getInforService(){
//        $id = Auth::id();
//        $serviceInfo = DB::table('providers')->join('providers_services','id','=','provider.id')
//                                                    ->join('services','service.id','=','service.id')
//                                                    ->select('providers.id','providers.price_per_hour','services.service')->where('user.id','=',$id);
//
//        dd($serviceInfo);
//        return response()->json($serviceInfo);
//
//    }

    function getProviderInfor($id)
    {
        $providerInfor = DB::table('users')
            ->join('providers','users.id','=','providers.user_id')
            ->join('profiles','providers.id','=','profiles.provider_id')
            ->join('provider_statuses','providers.status_id','=','provider_statuses.id')
            ->select('users.id','profiles.*','providers.price_per_hour','providers.id')->where('providers.id','=',$id)->get();

        return response()->json($providerInfor);
    }
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {

        $eloquent = DB::table('providers')->orderBy('id','desc')->first();

//        $id = Auth::id();
//            $checkIdProvider = Provider::where('user_id',$checkId)->exists() ;
            $checkIdProfile = Profile::where('provider_id',$eloquent->id)->exists();
            if ($checkIdProfile){
                return response()->json([
                    'status'=>'error'
                ]);
            }
        DB::beginTransaction();
        try {

            $profile = new Profile();
            $profile->fill($request->all());
            $profile->provider_id = $eloquent->id;

//            if ($profile->provider_id == $checkIdProfile){
//                    return response()->json('oke');
//                }

            $profile->date_join = Auth::user()->created_at;
            if ($request->hasFile('avatar')){
                $paths = $this->updateFile($request,'avatar','profile');
                $profile->avatar = $paths;
                $profile->save();
            }


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
            return response()->json([
                'status'=>'success'
            ]);

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
