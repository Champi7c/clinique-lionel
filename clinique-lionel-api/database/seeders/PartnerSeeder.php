<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{
    public function run(): void
    {
        $partners = [
            'B CONSTRUCTION',
            'ABS',
            'AFRICA MANAGEMENT',
            'AGEROUTE',
            'AGS GROUP SARL',
            'AMSA ASSURANCES',
            'AREZKI',
            'AZUR ENERGY',
            'BOTO SA',
            'CABINET ABX',
            'CARITAS',
            'CCC COMPAGNY',
            'CDE',
            'CEREEQ',
            'COSELEC',
            'CRBC',
            'DIAMA TECHNOLOGY',
            'EIFFAGE',
            'ENIKON',
            'EPHATA',
            'ETIS SENEGAL',
            'FAMI SENEGAL',
            'FONDASOL',
            'GCA GLOBAL CONSTRUCTION',
            'HERTZ',
            'HUMANIS INTERIM',
            'ICA',
            'ICS',
            'IDC',
            'IPM FADIOU',
            'KOB LOGISTICS',
            'LGSC',
            'LOCASEN',
            'MCI',
            'MSC',
            'NAYE VISION',
            'OLEA ASSURANCES',
            'RENOV INDUSTRY',
            'RMO ENERGY',
            'SALAM TRANSPORT',
            'SANY',
            'SDV VOYAGE',
            'SELOV',
            'SEN INTERIM',
            'SENAC',
            'SENECAR TOUR',
            'SGS',
            'SUNU MINES',
            'TTI',
        ];

        foreach ($partners as $index => $name) {
            Partner::create([
                'name' => $name,
                'order' => $index,
                'active' => true,
            ]);
        }
    }
}
