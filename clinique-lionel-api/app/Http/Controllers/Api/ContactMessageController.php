<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactMessageController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom'       => 'required|string|max:100',
            'prenom'    => 'nullable|string|max:100',
            'telephone' => 'nullable|string|max:30',
            'email'     => 'required|email|max:150',
            'type'      => 'nullable|string|max:50',
            'message'   => 'required|string|max:3000',
        ]);

        $msg = ContactMessage::create($validated);

        return response()->json(['message' => 'Message envoyé avec succès.', 'id' => $msg->id], 201);
    }
}
