<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Stat;
use Illuminate\Http\JsonResponse;

class StatController extends Controller
{
    public function index(): JsonResponse
    {
        $stats = Stat::orderBy('order')->get();

        return response()->json($stats);
    }
}
