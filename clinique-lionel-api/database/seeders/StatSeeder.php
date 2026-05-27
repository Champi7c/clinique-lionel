<?php

namespace Database\Seeders;

use App\Models\Stat;
use Illuminate\Database\Seeder;

class StatSeeder extends Seeder
{
    public function run(): void
    {
        $stats = [
            [
                'label' => 'Produits',
                'end_value' => 150,
                'suffix' => '+',
                'icon' => 'FaBoxOpen',
                'order' => 0,
            ],
            [
                'label' => 'Patients',
                'end_value' => 2000,
                'suffix' => '+',
                'icon' => 'FaUsers',
                'order' => 1,
            ],
            [
                'label' => 'Médecins',
                'end_value' => 12,
                'suffix' => '+',
                'icon' => 'FaUserMd',
                'order' => 2,
            ],
            [
                'label' => 'Entreprises',
                'end_value' => 80,
                'suffix' => '+',
                'icon' => 'FaBuilding',
                'order' => 3,
            ],
        ];

        foreach ($stats as $stat) {
            Stat::create($stat);
        }
    }
}
