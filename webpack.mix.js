const {mix} = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'materialize-css', 'axios', 'vee-validate', 'lodash'])
   // Styles (Fonts are included and resolved by webpack)
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/minimal.scss', 'public/css')
   // For js code that can't be bundled by webpack
   .combine('resources/assets/js/legacy/*', 'public/js/legacy.js')
   // Images
   .copyDirectory('resources/assets/img', 'public/img');

/**
 * General Config
 */
if (mix.config.inProduction) {
    mix.version();
} else {
    mix.sourceMaps();
}

mix.disableNotifications();

mix.browserSync({
    proxy: '127.0.0.1:8000',
    notify: false,
});
