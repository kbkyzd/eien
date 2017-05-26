window._ = require('lodash');

// Materialize is incompatible with jQuery > 3.x
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
require('materialize-css/dist/js/materialize');

require('materialize-clockpicker/dist/js/materialize.clockpicker');

// Vue and plugins
window.Vue = require('vue');
window.VeeValidate = require('vee-validate');

window.axios = require('axios');
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
};

// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

