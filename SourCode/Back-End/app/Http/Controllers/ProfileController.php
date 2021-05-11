<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __construct()
    {

    }

    public function getAll(){

        $profiles=Profile::skip(0)->take(12)->get();
        $profile=Profile::skip(12)->take(20)->get();
        return response()->json([$profiles,$profile]);
    }
    function getById($id){
         $profile=Profile::findOrFail($id);
      return response()->json($profile);

    }

//    public function search(){
//
//        $profile=Profile::w
//
//    }

}
