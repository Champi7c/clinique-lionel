#!/bin/sh
set -e

cd /var/www/html

echo "==> Attente de MySQL..."
until mysql -h db -u "${DB_USERNAME:-clinique}" -p"${DB_PASSWORD:-cml_secret_2024}" "${DB_DATABASE:-clinique_lionel}" -e "SELECT 1" > /dev/null 2>&1; do
  sleep 2
done
echo "==> MySQL prêt."

echo "==> Mise en cache de la config Laravel..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "==> Migrations..."
php artisan migrate --force

echo "==> Seeders (si tables vides)..."
php artisan db:seed --force 2>/dev/null || echo "Seeders ignorés (données existantes)."

echo "==> Permissions storage..."
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

echo "==> Démarrage de Supervisor (Nginx + PHP-FPM)..."
exec supervisord -c /etc/supervisord.conf
