<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use Validator;

class AuthController extends Controller
{
  /**
  * Create user
  *
  * @param  [string] name
  * @param  [string] email
  * @param  [string] password
  * @param  [string] password_confirmation
  * @return [string] message
  */
  public function register(Request $request)
  {
    $request->validate([
      'name' => 'required|string',
      'email' => 'required|string|email|unique:users',
      'password' => 'required|string|',
      'c_password'=>'required|same:password',
    ]);

    $user = new User([
      'name' => $request->name,
      'email' => $request->email,
      'password' => bcrypt($request->password)
    ]);
    if($user->save()){
      $user = $user->fresh();
    $tokenResult = $user->createToken('Personal Access Token');
    $token = $tokenResult->token;
    // if ($request->remember_me)
      $token->expires_at = Carbon::now()->addMinutes(5); //convert to utc
    $token->save();
      return response()->json([
      'status'=> 'success',  
      'userData'=>$user,
      'access_token' => $tokenResult->accessToken,
      'token_type' => 'Bearer',
      'expires_at' => Carbon::parse(
        $tokenResult->token->expires_at
      )->toDateTimeString()
      ], 201);
    }else{
      return response()->json(['status'=>'failed', 'error'=>'Provide proper details']);
    }
  }


  /**
  * Login user and create token
  *
  * @param  [string] email
  * @param  [string] password
  * @param  [boolean] remember_me
  * @return [string] access_token
  * @return [string] token_type
  * @return [string] expires_at
  */
  public function login(Request $request)
  {
    // return $request;
    $request->validate([
      'email' => 'required|string|email',
      'password' => 'required|string',
      'remember_me' => 'boolean'
    ]);
    $credentials = request(['email', 'password']);
    if(!Auth::attempt($credentials))
      return response()->json([
        'status'=> 'failed',
        'message' => 'Unauthorized'
      ], 401);
    $user = $request->user();
    $tokenResult = $user->createToken('Personal Access Token');
    $token = $tokenResult->token;
    if ($request->remember_me)
      $token->expires_at = Carbon::now()->addMinutes(5); //convert to utc
    $token->save();
    return response()->json([
      'status'=> 'success',  
      'userData'=>$user,
      'access_token' => $tokenResult->accessToken,
      'token_type' => 'Bearer',
      'expires_at' => Carbon::parse(
        $tokenResult->token->expires_at
      )->toDateTimeString()
        
    ]);
  }
  
  /**
  * Get the authenticated User
  *
  * @return [json] user object
  */
  public function user(Request $request)
  {
    return response()->json(['status'=>'success', 'user'=>$request->user()]);
  }


  /**
  * Logout user (Revoke the token)
  *
  * @return [string] message
  */
  public function logout(Request $request)
  {
    $request->user()->token()->revoke();
    return response()->json([
      'status'=>'success',
      'message' => 'Successfully logged out'
    ]);
  }
}