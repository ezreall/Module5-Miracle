<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $fillable = [
        'avatar',
        'name',
        'date_of_birth',
        'height',
        'weight',
        'gender',
        'city',
        'country',
        'hobby',
        'description',
        'required',
        'face_book',
        'voice',

    ];

    public function provider(){
        return $this->belongsTo(Provider::class,'provider_id');
    }

    public function profileImages(){
        return $this->hasMany(Profile::class,'profile_id');
    }
}
