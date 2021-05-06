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

        return response()->json([$profiles]);
    }
    function getById($id){
         $profile=Profile::findOrFail($id);
      return response()->json($profile);

    }

}
