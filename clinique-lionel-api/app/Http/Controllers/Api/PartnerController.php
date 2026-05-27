<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\JsonResponse;

class PartnerController extends Controller
{
    public function index(): JsonResponse
    {
        $partners = Partner::where('active', true)
            ->orderBy('order')
            ->get(['name']);

        return response()->json($partners);
    }
}
