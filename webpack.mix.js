const {mix} = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'materialize-css', 'axios', 'vee-validate', 'lodash'])

   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/minimal.scss', 'public/css')
   // For js code that can't be bundled
   .combine('resources/assets/js/legacy/*', 'public/js/legacy.js')
   // Fonts
   .copyDirectory('resources/assets/img', 'public/img');

// In Production config
if (mix.config.inProduction) {
    mix.version();
} else {
    mix.sourceMaps();
}

// Config
mix.disableNotifications();

mix.browserSync({
    proxy: '127.0.0.1:8000',
    notify: false,
});
