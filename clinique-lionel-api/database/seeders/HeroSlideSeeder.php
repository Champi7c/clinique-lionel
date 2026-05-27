<?php

namespace Database\Seeders;

use App\Models\HeroSlide;
use Illuminate\Database\Seeder;

class HeroSlideSeeder extends Seeder
{
    public function run(): void
    {
        $slides = [
            [
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/ChatGPT-Image-2-nov.-2025-21_03_59.jpg',
                'title' => 'Excellence médicale au service de votre santé',
                'subtitle' => 'Cabinet Médical Lionel — soins cliniques et médecine du travail pour particuliers et entreprises.',
                'cta_label' => 'Nous contacter',
                'order' => 0,
                'active' => true,
            ],
            [
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/ChatGPT-Image-2-nov.-2025-21_03_59.jpg',
                'title' => 'Votre santé, notre priorité',
                'subtitle' => 'Des professionnels de santé dévoués pour vous accompagner à chaque étape.',
                'cta_label' => 'Découvrir nos services',
                'order' => 1,
                'active' => true,
            ],
        ];

        foreach ($slides as $slide) {
            HeroSlide::create($slide);
        }
    }
}
