<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StatResource\Pages;
use App\Models\Stat;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class StatResource extends Resource
{
    protected static ?string $model = Stat::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar';

    protected static ?string $navigationLabel = 'Statistiques';

    protected static ?string $pluralLabel = 'Statistiques';

    protected static ?string $label = 'Statistique';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('label')
                    ->label('Libellé')
                    ->required()
                    ->maxLength(100),
                Forms\Components\TextInput::make('end_value')
                    ->label('Valeur finale')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('suffix')
                    ->label('Suffixe (ex: +, %, k)')
                    ->maxLength(10)
                    ->nullable(),
                Forms\Components\TextInput::make('icon')
                    ->label('Icône (nom React Icons)')
                    ->required()
                    ->maxLength(100),
                Forms\Components\TextInput::make('order')
                    ->label('Ordre d\'affichage')
                    ->numeric()
                    ->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('label')
                    ->label('Libellé')
                    ->searchable(),
                Tables\Columns\TextColumn::make('end_value')
                    ->label('Valeur'),
                Tables\Columns\TextColumn::make('suffix')
                    ->label('Suffixe'),
                Tables\Columns\TextColumn::make('icon')
                    ->label('Icône'),
                Tables\Columns\TextColumn::make('order')
                    ->label('Ordre')
                    ->sortable(),
            ])
            ->defaultSort('order')
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStats::route('/'),
            'create' => Pages\CreateStat::route('/create'),
            'edit' => Pages\EditStat::route('/{record}/edit'),
        ];
    }
}
