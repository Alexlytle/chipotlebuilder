let mix = require('laravel-mix');
mix.js('assets/src/app.js', 'dist').setPublicPath('dist');
mix.sass('assets/src/app.scss', 'dist').vue();