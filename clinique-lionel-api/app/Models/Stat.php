<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{
    protected $fillable = [
        'label',
        'end_value',
        'suffix',
        'icon',
        'order',
    ];

    protected $casts = [
        'end_value' => 'integer',
        'order' => 'integer',
    ];
}
