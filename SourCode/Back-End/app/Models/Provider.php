<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;
<<<<<<< HEAD
=======

    protected $fillable = [
        'user_id',
        'price_per_hour',
        'status_id',
    ];

    public function users(){
        return $this->hasMany(User::class,'user_id');
    }

    public function providerStatus(){
        return $this->hasMany(ProviderStatus::class,'provider_id');
    }

    public function services(){
        return $this->belongsToMany(Service::class,'providers_services','provider_id','service_id');
    }

    public function profiles(){
        return $this->hasMany(Profile::class,'profile_id');
    }

    public function requests(){
        return $this->hasMany(Request::class,'provider_id');
    }



>>>>>>> 6bddaa08f63127a70354dac607d9e66e72b3e675
}
