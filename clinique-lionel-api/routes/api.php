<?php

use App\Http\Controllers\Api\HeroSlideController;
use App\Http\Controllers\Api\PartnerController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SiteSettingController;
use App\Http\Controllers\Api\StatController;
use App\Http\Controllers\Api\ContactMessageController;
use Illuminate\Support\Facades\Route;

Route::get('/hero-slides', [HeroSlideController::class, 'index']);
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/stats', [StatController::class, 'index']);
Route::get('/partners', [PartnerController::class, 'index']);
Route::get('/settings', [SiteSettingController::class, 'index']);
Route::post('/contact', [ContactMessageController::class, 'store']);
