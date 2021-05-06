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

        $profile=Profile::all();
        return response()->json([$profile]);
    }

}
