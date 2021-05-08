<?php

namespace App\Http\Controllers;

use App\Mail\SignupEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public static function sendSignupEmail($name,$email){
        $data = [
            'name' => $name
            ];
        Mail::to($email)->send(new SignupEmail($data));
    }
}
