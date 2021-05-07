<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;
    protected $table = 'requests';
    protected $fillable = [
        'status',
        'message',
        'start_time',
        'time',
        'date',
        'money_amount',
        'provider_id',
        'user_id',
        'address',
        'status_id',
    ];

    public function provider(){
        return $this->belongsTo(Provider::class,'provider_id');
    }
}
