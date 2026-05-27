<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            'address' => 'Hann Mariste 2, Keur Ngor – près de la salle de Gym Diba, en face du Bon Choix',
            'email' => 'contact@cml-sst.com',
            'phone' => '76 810 90 72',
            'whatsapp' => '221768109072',
            'hours' => 'Lun – Sam : 8h00 – 18h00',
            'footer_tagline' => 'Nous unissons la médecine du travail et les soins cliniques pour offrir une approche globale de la santé.',
            'about_image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/ChatGPT-Image-2-nov.-2025-21_03_59.jpg',
        ];

        foreach ($settings as $key => $value) {
            SiteSetting::create([
                'key' => $key,
                'value' => $value,
            ]);
        }
    }
}
