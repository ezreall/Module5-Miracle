<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    public function providers(){
        return $this->belongsToMany(Provider::class,'providers_services','service_id','provider_id');
    }
}
