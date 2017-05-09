/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

Vue.use(window.VeeValidate);

const app = new Vue({
    el: '#app',
});

var swap = function() {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

/**
 * Initializations
 */
$(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('img[data-alt-src]').each(function() {
        new Image().src = $(this).data('alt-src');
    }).hover(swap, swap);
});
