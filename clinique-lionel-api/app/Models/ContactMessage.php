<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = ['nom', 'prenom', 'telephone', 'email', 'type', 'message', 'lu'];
}
