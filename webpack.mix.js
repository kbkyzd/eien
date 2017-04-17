const {mix} = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

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
