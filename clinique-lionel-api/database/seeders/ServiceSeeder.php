<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Médecine générale',
                'description' => 'Consultations médicales générales pour le diagnostic et le traitement des maladies courantes. Notre équipe de médecins généralistes vous accueille pour tous vos besoins de santé quotidiens.',
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/medecine-generale.jpg',
                'order' => 0,
                'active' => true,
            ],
            [
                'title' => 'Soins infirmiers',
                'description' => 'Prise en charge infirmière de qualité : injections, pansements, suivi des traitements et accompagnement des patients. Nos infirmiers diplômés assurent votre confort et votre sécurité.',
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/soins-infirmiers.jpg',
                'order' => 1,
                'active' => true,
            ],
            [
                'title' => 'Imagerie médicale',
                'description' => 'Services d\'imagerie médicale modernes pour un diagnostic précis : radiographies, échographies et autres examens d\'imagerie réalisés par des spécialistes qualifiés.',
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/imagerie-medicale.jpg',
                'order' => 2,
                'active' => true,
            ],
            [
                'title' => 'Santé au travail',
                'description' => 'Services de médecine du travail pour les entreprises : visites médicales d\'embauche et périodiques, suivi de la santé des employés, prévention des risques professionnels.',
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/sante-travail.jpg',
                'order' => 3,
                'active' => true,
            ],
            [
                'title' => 'Préventions',
                'description' => 'Programmes de prévention médicale pour protéger votre santé : vaccinations, bilans de santé complets, dépistages précoces et conseils personnalisés pour un mode de vie sain.',
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/prevention.jpg',
                'order' => 4,
                'active' => true,
            ],
            [
                'title' => 'Formations',
                'description' => 'Formations médicales et para-médicales pour les professionnels de santé et les entreprises : gestes de premiers secours, sensibilisation aux risques sanitaires en milieu professionnel.',
                'image_url' => 'https://clinique-lionel.com/wp-content/uploads/2025/11/formations.jpg',
                'order' => 5,
                'active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
