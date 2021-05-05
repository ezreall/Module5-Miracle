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
        $user->password = bcrypt($params['password']);
        $user->save();

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
            ], Response::HTTP_BAD_REQUEST);
        }
        $user = Auth::user();

        return response()->json([
            'status' => 'successfully',
            'user' => $user,
            'token' => $token
        ], Response::HTTP_OK);

//        return response()->json(['token' => $token], Response::HTTP_OK);
    }

    public function user(Request $request)
    {
        $user = Auth::user();

        if ($user) {
            return response($user, Response::HTTP_OK);
        }

        return response()->json(['user' => $user], Response::HTTP_BAD_REQUEST );
    }

    /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request) {
//        $this->validate($request, ['token' => 'required']);
//        try {
//            JWTAuth::invalidate($request->bearerToken());
//            return response()->json(['status' => 'success', 'message'=>'You have successfully logged out.'], Response::HTTP_OK);
//        } catch (JWTException $e) {
//            return response()->json(['status' => 'error', 'message'=>'Failed to logout, please try again.'], Response::HTTP_BAD_REQUEST);
//        }
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
