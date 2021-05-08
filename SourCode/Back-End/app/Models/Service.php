<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
<<<<<<< HEAD
=======
    protected $table = 'services';

    public function providers(){
        return $this->belongsToMany(Provider::class,'providers_services','service_id','provider_id');
    }
>>>>>>> 6bddaa08f63127a70354dac607d9e66e72b3e675
}
