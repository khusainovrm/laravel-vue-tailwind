const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js');
mix.postCss('resources/css/tailwind.css', 'public/css/tailwind.css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);
