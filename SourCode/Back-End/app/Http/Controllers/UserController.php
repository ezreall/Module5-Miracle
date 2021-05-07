<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\RegisterFormRequest;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
class UserController extends Controller
{
    public function register(RegisterFormRequest $request)
    {
        $params = $request->only('email', 'name', 'password','phone');
        $user = new User();
        $user->email = $params['email'];
        $user->name = $params['name'];
        $user->phone = $params['phone'];
//        $user->status_id = 2;
//        $user->role_id = 3;
        $user->password = bcrypt($params['password']);
        $user->save();
//        MailController::sendSignupEmail($user->name,$user->email);

        return response()->json($user, Response::HTTP_OK);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!($token = JWTAuth::attempt($credentials))) {
            return response()->json([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ]);
        }
        $user = Auth::user();
        return response()->json([
            'status' => 'successfully',
            'user' => $user,
            'token' => $token
        ]);

    }

    public function user(Request $request)
    {
        $user = Auth::user();

        if ($user) {
            return response()->json($user);
        }

        return response()->json(['user' => $user], Response::HTTP_BAD_REQUEST );
    }


    public function logout(Request $request) {

        try {
            JWTAuth::invalidate($request->bearerToken());
            return response()->json(['status' => 'success', 'message' => 'logout successfully']);
        }catch (JWTException $e){
            return response()->json(['status' => 'error', 'message' => 'Sorry, the user cannot be logout'], 500);
        }
    }

    public function refresh()
    {
        return response(JWTAuth::getToken(), Response::HTTP_OK);
    }
}
