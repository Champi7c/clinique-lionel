FROM php:8.2-fpm-alpine

# ── Dépendances système ─────────────────────────────────────────
RUN apk add --no-cache \
    nginx \
    supervisor \
    mysql-client \
    libpng-dev \
    libzip-dev \
    libxml2-dev \
    oniguruma-dev \
    icu-dev \
    curl \
    unzip \
    git

# ── Extensions PHP ──────────────────────────────────────────────
RUN docker-php-ext-configure intl \
 && docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    intl \
    zip \
    opcache

# ── OPcache production ──────────────────────────────────────────
RUN echo "opcache.enable=1" >> /usr/local/etc/php/conf.d/opcache.ini \
 && echo "opcache.memory_consumption=128" >> /usr/local/etc/php/conf.d/opcache.ini \
 && echo "opcache.validate_timestamps=0" >> /usr/local/etc/php/conf.d/opcache.ini

# ── Composer ───────────────────────────────────────────────────
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# ── Dépendances PHP (sans dev) ──────────────────────────────────
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# ── Code source ─────────────────────────────────────────────────
COPY . .

# ── Finaliser Composer (scripts post-install) ───────────────────
RUN composer dump-autoload --optimize --no-dev

# ── Permissions ─────────────────────────────────────────────────
RUN chown -R www-data:www-data /var/www/html \
 && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# ── Configs Nginx + Supervisor ──────────────────────────────────
COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisord.conf

# ── Entrypoint ──────────────────────────────────────────────────
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
