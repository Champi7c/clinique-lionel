<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin user for Filament panel
        User::create([
            'name' => 'Admin CML',
            'email' => 'admin@cml-sst.com',
            'password' => bcrypt('CML@2025!'),
        ]);

        $this->call([
            HeroSlideSeeder::class,
            ServiceSeeder::class,
            StatSeeder::class,
            PartnerSeeder::class,
            SiteSettingSeeder::class,
        ]);
    }
}
