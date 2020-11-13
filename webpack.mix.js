const mix = require('laravel-mix')

mix
  .js('resources/modules/main/main.js', 'public/js')
  .postCss('resources/css/tailwind.css', 'public/css/tailwind.css', [
    require('tailwindcss')
  ]).sourceMaps()
