webpackJsonp([1],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(37);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', __webpack_require__(40));

Vue.use(window.VeeValidate);

var app = new Vue({
  el: '#app'
});

/*
 * Initializations
 */
$(function () {
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(4);

// Materialize is incompatible with jQuery > 3.x
window.$ = window.jQuery = __webpack_require__(1);

__webpack_require__(38);

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = __webpack_require__(6);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(3);

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

window.VeeValidate = __webpack_require__(5);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Materialize v0.98.2 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (true) {
    jQuery = $ = __webpack_require__(1);
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */;// Custom Easing
jQuery.extend( jQuery.easing,
{
  easeInOutMaterial: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return c/4*((t-=2)*t*t + 2) + b;
  }
});;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));
;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),"function"==g&&__webpack_require__(13)?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return hc}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));
;// Required for Meteor package, the use of window prevents export by Meteor
(function(window){
  if(window.Package){
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);


/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function(window) {
  var lastTime = 0,
    vendors = ['webkit', 'moz'],
    requestAnimationFrame = window.requestAnimationFrame,
    cancelAnimationFrame = window.cancelAnimationFrame,
    i = vendors.length;

  // try to un-prefix existing raf
  while (--i >= 0 && !requestAnimationFrame) {
    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
  }

  // polyfill with setTimeout fallback
  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback) {
      var now = +Date.now(),
        nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function() {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    cancelAnimationFrame = clearTimeout;
  }

  // export to window
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
}(window));


/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
Materialize.objectSelectorString = function(obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g,'');
};


// Unique Random ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function(hash) {
  return hash.replace( /(:|\.|\[|\]|,|=)/g, "\\$1" );
};

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};


/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = (Date.now || function () {
  return new Date().getTime();
});


/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
Materialize.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};


// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
  Vel = jQuery.Velocity;
} else if ($) {
  Vel = $.Velocity;
} else {
  Vel = Velocity;
}
;(function ($) {
  $.fn.collapsible = function(options, methodParam) {
    var defaults = {
      accordion: undefined,
      onOpen: undefined,
      onClose: undefined
    };

    var methodName = options;
    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      /****************
      Helper Functions
      ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');

        // Close previously open accordion elements.
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).each(function() {
          if ($(this).is(':visible')) {
            $(this).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete:
                function() {
                  $(this).css('height', '');
                  execCallbacks($(this).siblings('.collapsible-header'));
                }
            });
          }
        });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else {
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
      }

      // Open collapsible. object: .collapsible-header
      function collapsibleOpen(object, noToggle) {
        if (!noToggle) {
          object.toggleClass('active');
        }

        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
          accordionOpen(object);
        } else { // Handle Expandables
          expandableOpen(object);
        }

        execCallbacks(object);
      }

      // Handle callbacks
      function execCallbacks(object) {
        if (object.hasClass('active')) {
          if (typeof(options.onOpen) === "function") {
            options.onOpen.call(this, object.parent());
          }
        } else {
          if (typeof(options.onClose) === "function") {
            options.onClose.call(this, object.parent());
          }
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }


      // Turn off any existing event handlers
      function removeEventHandlers() {
        $this.off('click.collapse', '> li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/


      // Methods
      if (methodName === 'destroy') {
        removeEventHandlers();
        return;
      } else if (methodParam >= 0 &&
          methodParam < $panel_headers.length) {
        var $curr_header = $panel_headers.eq(methodParam);
        if ($curr_header.length &&
            (methodName === 'open' ||
            (methodName === 'close' &&
            $curr_header.hasClass('active')))) {
          collapsibleOpen($curr_header);
        }
        return;
      }


      removeEventHandlers();


      // Add click handler to only direct collapsible header children
      $this.on('click.collapse', '> li > .collapsible-header', function(e) {
        var element = $(e.target);

        if (isChildrenOfPanelHeader(element)) {
          element = getPanelHeader(element);
        }

        collapsibleOpen(element);
      });


      // Open first active
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        collapsibleOpen($panel_headers.filter('.active').first(), true);

      } else { // Handle Expandables
        $panel_headers.filter('.active').each(function() {
          collapsibleOpen($(this), true);
        });
      }

    });
  };

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}( jQuery ));;(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === "open") {
      this.each(function() {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === "close") {
      this.each(function() {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function(){
      var origin = $(this);
      var curr_options = $.extend({}, defaults, options);
      var isFocused = false;

      // Dropdown menu
      var activates = $("#"+ origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined)
          curr_options.inDuration = origin.data('induration');
        if (origin.data('outduration') !== undefined)
          curr_options.outDuration = origin.data('outduration');
        if (origin.data('constrainwidth') !== undefined)
          curr_options.constrainWidth = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined)
          curr_options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined)
          curr_options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined)
          curr_options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined)
          curr_options.alignment = origin.data('alignment');
        if (origin.data('stoppropagation') !== undefined)
          curr_options.stopPropagation = origin.data('stoppropagation');
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        // Constrain width
        if (curr_options.constrainWidth === true) {
          activates.css('width', origin.outerWidth());

        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = curr_options.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        // Below Origin
        var verticalOffset = 0;
        if (curr_options.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }


        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';

        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = curr_options.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        }
        else if (currAlignment === 'right') {
          var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
          gutterSpacing = -curr_options.gutter;
          leftPosition =  offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });


        // Show dropdown
        activates.stop(true, true).css('opacity', 0)
          .slideDown({
            queue: false,
            duration: curr_options.inDuration,
            easing: 'easeOutCubic',
            complete: function() {
              $(this).css('height', '');
            }
          })
          .animate( {opacity: 1}, {queue: false, duration: curr_options.inDuration, easing: 'easeOutSine'});

        // Add click close handler to document
        setTimeout(function() {
          $(document).bind('click.'+ activates.attr('id'), function (e) {
            hideDropdown();
            $(document).unbind('click.'+ activates.attr('id'));
          });
        }, 0);
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(curr_options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        $(document).unbind('click.'+ activates.attr('id'));
        setTimeout(function() { activates.css('max-height', ''); }, curr_options.outDuration);
      }

      // Hover
      if (curr_options.hover) {
        var open = false;
        origin.unbind('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function(e){ // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function(e){
          // If hover on origin then to something other than dropdown content, then close
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if(!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function(e){ // Mouse out
          var toEl = e.toElement || e.relatedTarget;
          if(!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.unbind('click.' + origin.attr('id'));
        origin.bind('click.'+origin.attr('id'), function(e){
          if (!isFocused) {
            if ( origin[0] == e.currentTarget &&
                 !origin.hasClass('active') &&
                 ($(e.target).closest('.dropdown-content').length === 0)) {
              e.preventDefault(); // Prevents button click from moving window
              if (curr_options.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            }
            // If origin is clicked and menu is open, close menu
            else if (origin.hasClass('active')) {
              hideDropdown();
              $(document).unbind('click.'+ activates.attr('id'));
            }
          }
        });

      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function(e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);


    });
  }; // End dropdown plugin

  $(document).ready(function(){
    $('.dropdown-button').dropdown();
  });
}( jQuery ));
;(function($) {
  var _stack = 0,
  _lastID = 0,
  _generateID = function() {
    _lastID++;
    return 'materialize-modal-overlay-' + _lastID;
  };

  var methods = {
    init : function(options) {
      var defaults = {
        opacity: 0.5,
        inDuration: 350,
        outDuration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        startingTop: '4%',
        endingTop: '10%'
      };

      // Override defaults
      options = $.extend(defaults, options);

      return this.each(function() {
        var $modal = $(this);
        var modal_id = $(this).attr("id") || '#' + $(this).data('target');

        var closeModal = function() {
          var overlayID = $modal.data('overlay-id');
          var $overlay = $('#' + overlayID);
          $modal.removeClass('open');

          // Enable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $modal.find('.modal-close').off('click.close');
          $(document).off('keyup.modal' + overlayID);

          $overlay.velocity( { opacity: 0}, {duration: options.outDuration, queue: false, ease: "easeOutQuart"});


          // Define Bottom Sheet animation
          var exitVelocityOptions = {
            duration: options.outDuration,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function() {
              $(this).css({display:"none"});

              // Call complete callback
              if (typeof(options.complete) === "function") {
                options.complete.call(this, $modal);
              }
              $overlay.remove();
              _stack--;
            }
          };
          if ($modal.hasClass('bottom-sheet')) {
            $modal.velocity({bottom: "-100%", opacity: 0}, exitVelocityOptions);
          }
          else {
            $modal.velocity(
              { top: options.startingTop, opacity: 0, scaleX: 0.7},
              exitVelocityOptions
            );
          }
        };

        var openModal = function($trigger) {
          var $body = $('body');
          var oldWidth = $body.innerWidth();
          $body.css('overflow', 'hidden');
          $body.width(oldWidth);

          if ($modal.hasClass('open')) {
            return;
          }

          var overlayID = _generateID();
          var $overlay = $('<div class="modal-overlay"></div>');
          lStack = (++_stack);

          // Store a reference of the overlay
          $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
          $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
          $modal.addClass('open');

          $("body").append($overlay);

          if (options.dismissible) {
            $overlay.click(function() {
              closeModal();
            });
            // Return on ESC
            $(document).on('keyup.modal' + overlayID, function(e) {
              if (e.keyCode === 27) {   // ESC key
                closeModal();
              }
            });
          }

          $modal.find(".modal-close").on('click.close', function(e) {
            closeModal();
          });

          $overlay.css({ display : "block", opacity : 0 });

          $modal.css({
            display : "block",
            opacity: 0
          });

          $overlay.velocity({opacity: options.opacity}, {duration: options.inDuration, queue: false, ease: "easeOutCubic"});
          $modal.data('associated-overlay', $overlay[0]);

          // Define Bottom Sheet animation
          var enterVelocityOptions = {
            duration: options.inDuration,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function() {
              if (typeof(options.ready) === "function") {
                options.ready.call(this, $modal, $trigger);
              }
            }
          };
          if ($modal.hasClass('bottom-sheet')) {
            $modal.velocity({bottom: "0", opacity: 1}, enterVelocityOptions);
          }
          else {
            $.Velocity.hook($modal, "scaleX", 0.7);
            $modal.css({ top: options.startingTop });
            $modal.velocity({top: options.endingTop, opacity: 1, scaleX: '1'}, enterVelocityOptions);
          }

        };

        // Reset handlers
        $(document).off('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]');
        $(this).off('openModal');
        $(this).off('closeModal');

        // Close Handlers
        $(document).on('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]', function(e) {
          options.startingTop = ($(this).offset().top - $(window).scrollTop()) /1.15;
          openModal($(this));
          e.preventDefault();
        }); // done set on click

        $(this).on('openModal', function() {
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          openModal();
        });

        $(this).on('closeModal', function() {
          closeModal();
        });
      }); // done return
    },
    open : function() {
      $(this).trigger('openModal');
    },
    close : function() {
      $(this).trigger('closeModal');
    }
  };

  $.fn.modal = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.modal' );
    }
  };
})(jQuery);
;(function ($) {

  $.fn.materialbox = function () {

    return this.each(function() {

      if ($(this).hasClass('initialized')) {
        return;
      }

      $(this).addClass('initialized');

      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;
      var ancestorsChanged;
      var ancestor;
      var originInlineStyles = origin.attr('style');
      origin.wrap(placeholder);


      origin.on('click', function(){
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();


        // If already modal, return to original
        if (doneAnimating === false) {
          returnToOriginal();
          return false;
        }
        else if (overlayActive && doneAnimating===true) {
          returnToOriginal();
          return false;
        }


        // Set states
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;

        // Set positioning for placeholder
        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        });

        // Find ancestor with overflow: hidden; and remove it
        ancestorsChanged = undefined;
        ancestor = placeholder[0].parentNode;
        var count = 0;
        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);
          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');
            if (ancestorsChanged === undefined) {
              ancestorsChanged = curr;
            }
            else {
              ancestorsChanged = ancestorsChanged.add(curr);
            }
          }
          ancestor = ancestor.parentNode;
        }

        // Set css on origin
        origin.css({
          position: 'absolute',
          'z-index': 1000,
          'will-change': 'left, top, width, height'
        })
        .data('width', originalWidth)
        .data('height', originalHeight);

        // Add overlay
        var overlay = $('<div id="materialbox-overlay"></div>')
          .css({
            opacity: 0
          })
          .click(function(){
            if (doneAnimating === true)
            returnToOriginal();
          });

        // Put before in origin image to preserve z-index layering.
        origin.before(overlay);

        // Set dimensions if needed
        var overlayOffset = overlay[0].getBoundingClientRect();
        overlay.css({
          width: windowWidth,
          height: windowHeight,
          left: -1 * overlayOffset.left,
          top: -1 * overlayOffset.top
        })

        // Animate Overlay
        overlay.velocity({opacity: 1},
                           {duration: inDuration, queue: false, easing: 'easeOutQuad'} );

        // Add and animate caption if it exists
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div>');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({ "display": "inline" });
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});
        }

        // Resize Image
        var ratio = 0;
        var widthPercent = originalWidth / windowWidth;
        var heightPercent = originalHeight / windowHeight;
        var newWidth = 0;
        var newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = windowWidth * 0.9;
          newHeight = windowWidth * 0.9 * ratio;
        }
        else {
          ratio = originalWidth / originalHeight;
          newWidth = (windowHeight * 0.9) * ratio;
          newHeight = windowHeight * 0.9;
        }

        // Animate image + set z-index
        if(origin.hasClass('responsive-img')) {
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,
            complete: function(){
              origin.css({left: 0, top: 0})
              .velocity(
                {
                  height: newHeight,
                  width: newWidth,
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },
                {
                  duration: inDuration,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function(){doneAnimating = true;}
                }
              );
            } // End Complete
          }); // End Velocity
        }
        else {
          origin.css('left', 0)
          .css('top', 0)
          .velocity(
            {
              height: newHeight,
              width: newWidth,
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },
            {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad',
              complete: function(){doneAnimating = true;}
            }
            ); // End Velocity
        }

      }); // End origin on click


      // Return on scroll
      $(window).scroll(function() {
        if (overlayActive) {
          returnToOriginal();
        }
      });

      // Return on ESC
      $(document).keyup(function(e) {

        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key
          if (overlayActive) {
            returnToOriginal();
          }
        }
      });


      // This function returns the modaled image to the original spot
      function returnToOriginal() {

        doneAnimating = false;

        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.data('width');
        var originalHeight = origin.data('height');

        origin.velocity("stop", true);
        $('#materialbox-overlay').velocity("stop", true);
        $('.materialbox-caption').velocity("stop", true);


        $('#materialbox-overlay').velocity({opacity: 0}, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function(){
            // Remove Overlay
            overlayActive = false;
            $(this).remove();
          }
        });

        // Resize Image
        origin.velocity(
          {
            width: originalWidth,
            height: originalHeight,
            left: 0,
            top: 0
          },
          {
            duration: outDuration,
            queue: false, easing: 'easeOutQuad',
            complete: function() {
              placeholder.css({
                height: '',
                width: '',
                position: '',
                top: '',
                left: ''
              });

              origin.removeAttr('style');
              origin.attr('style', originInlineStyles);

              // Remove class
              origin.removeClass('active');
              doneAnimating = true;

              // Remove overflow overrides on ancestors
              if (ancestorsChanged) {
                ancestorsChanged.css('overflow', '');
              }
            }
          }
        );

        // Remove Caption + reset css settings on image
        $('.materialbox-caption').velocity({opacity: 0}, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function(){
            $(this).remove();
          }
        });

      }
    });
  };

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

}( jQuery ));
;(function ($) {

  $.fn.parallax = function () {
    var window_width = $(window).width();
    // Parallax Scripts
    return this.each(function(i) {
      var $this = $(this);
      $this.addClass('parallax');

      function updateParallax(initial) {
        var container_height;
        if (window_width < 601) {
          container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
        }
        else {
          container_height = ($this.height() > 0) ? $this.height() : 500;
        }
        var $img = $this.children("img").first();
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round((parallax_dist * percentScrolled));

        if (initial) {
          $img.css('display', 'block');
        }
        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
        }

      }

      // Wait for image load
      $this.children("img").one("load", function() {
        updateParallax(true);
      }).each(function() {
        if (this.complete) $(this).trigger("load");
      });

      $(window).scroll(function() {
        window_width = $(window).width();
        updateParallax(false);
      });

      $(window).resize(function() {
        window_width = $(window).width();
        updateParallax(false);
      });

    });

  };
}( jQuery ));
;(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        onShow: null,
        swipeable: false,
        responsiveThreshold: Infinity, // breakpoint for swipeable
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function(i) {

      var uniqueNamespace = namespace+i;

      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $this = $(this),
          window_width = $(window).width();

      var $active, $content, $links = $this.find('li.tab a'),
          $tabs_width = $this.width(),
          $tabs_content = $(),
          $tabs_wrapper,
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
          $indicator,
          index = prev_index = 0,
          clicked = false,
          clickedTimeout,
          transition = 300;


      // Finds right attribute for indicator based on active tab.
      // el: jQuery Object
      var calcRightPos = function(el) {
        return Math.ceil($tabs_width - el.position().left - el.outerWidth() - $this.scrollLeft());
      };

      // Finds left attribute for indicator based on active tab.
      // el: jQuery Object
      var calcLeftPos = function(el) {
        return Math.floor(el.position().left + $this.scrollLeft());
      };

      // Animates Indicator to active tab.
      // prev_index: Number
      var animateIndicator = function(prev_index) {
        if ((index - prev_index) >= 0) {
          $indicator.velocity({"right": calcRightPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": calcLeftPos($active) }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});

        } else {
          $indicator.velocity({"left": calcLeftPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"right": calcRightPos($active) }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});
        }
      };

      // Change swipeable according to responsive threshold
      if (options.swipeable) {
        if (window_width > options.responsiveThreshold) {
          options.swipeable = false;
        }
      }


      // If the location.hash matches one of the links, use that as the active tab.
      $active = $($links.filter('[href="'+location.hash+'"]'));

      // If no match is found, use the first link or any with class 'active' as the initial active tab.
      if ($active.length === 0) {
        $active = $(this).find('li.tab a.active').first();
      }
      if ($active.length === 0) {
        $active = $(this).find('li.tab a').first();
      }

      $active.addClass('active');
      index = $links.index($active);
      if (index < 0) {
        index = 0;
      }

      if ($active[0] !== undefined) {
        $content = $($active[0].hash);
        $content.addClass('active');
      }

      // append indicator then set indicator width to tab width
      if (!$this.find('.indicator').length) {
        $this.append('<div class="indicator"></div>');
      }
      $indicator = $this.find('.indicator');

      // we make sure that the indicator is at the end of the tabs
      $this.append($indicator);

      if ($this.is(":visible")) {
        // $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
        // $indicator.css({"left": index * $tab_width});
        setTimeout(function() {
          $indicator.css({"right": calcRightPos($active) });
          $indicator.css({"left": calcLeftPos($active) });
        }, 0);
      }
      $(window).off('resize.tabs-'+uniqueNamespace).on('resize.tabs-'+uniqueNamespace, function () {
        $tabs_width = $this.width();
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
        if (index < 0) {
          index = 0;
        }
        if ($tab_width !== 0 && $tabs_width !== 0) {
          $indicator.css({"right": calcRightPos($active) });
          $indicator.css({"left": calcLeftPos($active) });
        }
      });

      // Initialize Tabs Content.
      if (options.swipeable) {
        // TODO: Duplicate calls with swipeable? handle multiple div wrapping.
        $links.each(function () {
          var $curr_content = $(Materialize.escapeHash(this.hash));
          $curr_content.addClass('carousel-item');
          $tabs_content = $tabs_content.add($curr_content);
        });
        $tabs_wrapper = $tabs_content.wrapAll('<div class="tabs-content carousel"></div>');
        $tabs_content.css('display', '');
        $('.tabs-content.carousel').carousel({
          fullWidth: true,
          noWrap: true,
          onCycleTo: function(item) {
            if (!clicked) {
              var prev_index = index;
              index = $tabs_wrapper.index(item);
              $active = $links.eq(index);
              animateIndicator(prev_index);
            }
          },
        });
      } else {
        // Hide the remaining content
        $links.not($active).each(function () {
          $(Materialize.escapeHash(this.hash)).hide();
        });
      }


      // Bind the click event handler
      $this.off('click.tabs').on('click.tabs', 'a', function(e) {
        if ($(this).parent().hasClass('disabled')) {
          e.preventDefault();
          return;
        }

        // Act as regular link if target attribute is specified.
        if (!!$(this).attr("target")) {
          return;
        }

        clicked = true;
        $tabs_width = $this.width();
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

        // Make the old tab inactive.
        $active.removeClass('active');
        var $oldContent = $content

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(Materialize.escapeHash(this.hash));
        $links = $this.find('li.tab a');
        var activeRect = $active.position();

        // Make the tab active.
        $active.addClass('active');
        prev_index = index;
        index = $links.index($(this));
        if (index < 0) {
          index = 0;
        }
        // Change url to current tab
        // window.location.hash = $active.attr('href');

        // Swap content
        if (options.swipeable) {
          if ($tabs_content.length) {
            $tabs_content.carousel('set', index);
          }
        } else {
          if ($content !== undefined) {
            $content.show();
            $content.addClass('active');
            if (typeof(options.onShow) === "function") {
              options.onShow.call(this, $content);
            }
          }

          if ($oldContent !== undefined &&
              !$oldContent.is($content)) {
            $oldContent.hide();
            $oldContent.removeClass('active');
          }
        }

        // Reset clicked state
        clickedTimeout = setTimeout(function(){ clicked = false; }, transition);

        // Update indicator
        animateIndicator(prev_index);

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    },
    select_tab : function( id ) {
      this.find('a[href="#' + id + '"]').trigger('click');
    }
  };

  $.fn.tabs = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tabs' );
    }
  };

  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
}( jQuery ));
;(function ($) {
    $.fn.tooltip = function (options) {
      var timeout = null,
      margin = 5;

      // Defaults
      var defaults = {
        delay: 350,
        tooltip: '',
        position: 'bottom',
        html: false
      };

      // Remove tooltip from the activator
      if (options === "remove") {
        this.each(function() {
          $('#' + $(this).attr('data-tooltip-id')).remove();
          $(this).off('mouseenter.tooltip mouseleave.tooltip');
        });
        return false;
      }

      options = $.extend(defaults, options);

      return this.each(function() {
        var tooltipId = Materialize.guid();
        var origin = $(this);

        // Destroy old tooltip
        if (origin.attr('data-tooltip-id')) {
          $('#' + origin.attr('data-tooltip-id')).remove();
        }

        origin.attr('data-tooltip-id', tooltipId);

        // Get attributes.
        var allowHtml,
            tooltipDelay,
            tooltipPosition,
            tooltipText,
            tooltipEl,
            backdrop;
        var setAttributes = function() {
          allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
          tooltipDelay = origin.attr('data-delay');
          tooltipDelay = (tooltipDelay === undefined || tooltipDelay === '') ?
              options.delay : tooltipDelay;
          tooltipPosition = origin.attr('data-position');
          tooltipPosition = (tooltipPosition === undefined || tooltipPosition === '') ?
              options.position : tooltipPosition;
          tooltipText = origin.attr('data-tooltip');
          tooltipText = (tooltipText === undefined || tooltipText === '') ?
              options.tooltip : tooltipText;
        };
        setAttributes();

        var renderTooltipEl = function() {
          var tooltip = $('<div class="material-tooltip"></div>');

          // Create Text span
          if (allowHtml) {
            tooltipText = $('<span></span>').html(tooltipText);
          } else{
            tooltipText = $('<span></span>').text(tooltipText);
          }

          // Create tooltip
          tooltip.append(tooltipText)
            .appendTo($('body'))
            .attr('id', tooltipId);

          // Create backdrop
          backdrop = $('<div class="backdrop"></div>');
          backdrop.appendTo(tooltip);
          return tooltip;
        };
        tooltipEl = renderTooltipEl();

        // Destroy previously binded events
        origin.off('mouseenter.tooltip mouseleave.tooltip');
        // Mouse In
        var started = false, timeoutRef;
        origin.on({'mouseenter.tooltip': function(e) {
          var showTooltip = function() {
            setAttributes();
            started = true;
            tooltipEl.velocity('stop');
            backdrop.velocity('stop');
            tooltipEl.css({ visibility: 'visible', left: '0px', top: '0px' });

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();
            var tooltipHeight = tooltipEl.outerHeight();
            var tooltipWidth = tooltipEl.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var backdropOffsetWidth = backdrop[0].offsetWidth;
            var backdropOffsetHeight = backdrop[0].offsetHeight;
            var scaleXFactor = 8;
            var scaleYFactor = 8;
            var scaleFactor = 0;
            var targetTop, targetLeft, newCoordinates;

            if (tooltipPosition === "top") {
              // Top Position
              targetTop = origin.offset().top - tooltipHeight - margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '-10px';
              backdrop.css({
                bottom: 0,
                left: 0,
                borderRadius: '14px 14px 0 0',
                transformOrigin: '50% 100%',
                marginTop: tooltipHeight,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }
            // Left Position
            else if (tooltipPosition === "left") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft =  origin.offset().left - tooltipWidth - margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '-10px';
              backdrop.css({
                top: '-7px',
                right: 0,
                width: '14px',
                height: '14px',
                borderRadius: '14px 0 0 14px',
                transformOrigin: '95% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: tooltipWidth
              });
            }
            // Right Position
            else if (tooltipPosition === "right") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft = origin.offset().left + originWidth + margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '+10px';
              backdrop.css({
                top: '-7px',
                left: 0,
                width: '14px',
                height: '14px',
                borderRadius: '0 14px 14px 0',
                transformOrigin: '5% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: '0px'
              });
            }
            else {
              // Bottom Position
              targetTop = origin.offset().top + origin.outerHeight() + margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '+10px';
              backdrop.css({
                top: 0,
                left: 0,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }

            // Set tooptip css placement
            tooltipEl.css({
              top: newCoordinates.y,
              left: newCoordinates.x
            });

            // Calculate Scale to fill
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdropOffsetWidth);
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdropOffsetHeight);
            scaleFactor = Math.max(scaleXFactor, scaleYFactor);

            tooltipEl.velocity({ translateY: tooltipVerticalMovement, translateX: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});
            backdrop.css({ visibility: 'visible' })
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
              .velocity({scaleX: scaleFactor, scaleY: scaleFactor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});
          };

          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

        // Mouse Out
        },
        'mouseleave.tooltip': function(){
          // Reset State
          started = false;
          clearTimeout(timeoutRef);

          // Animate back
          setTimeout(function() {
            if (started !== true) {
              tooltipEl.velocity({
                opacity: 0, translateY: 0, translateX: 0}, { duration: 225, queue: false});
              backdrop.velocity({opacity: 0, scaleX: 1, scaleY: 1}, {
                duration:225,
                queue: false,
                complete: function(){
                  backdrop.css({ visibility: 'hidden' });
                  tooltipEl.css({ visibility: 'hidden' });
                  started = false;}
              });
            }
          },225);
        }
        });
    });
  };

  var repositionWithinScreen = function(x, y, width, height) {
    var newX = x;
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return {x: newX, y: newY};
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));
;/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);
;Materialize.toast = function (message, displayLength, className, completeCallback) {
  className = className || "";

  var container = document.getElementById('toast-container');

  // Create toast container if it does not exist
  if (container === null) {
    // create notification container
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  // Select and append toast
  var newToast = createToast(message);

  // only append toast if message is not undefined
  if(message){
    container.appendChild(newToast);
  }

  newToast.style.opacity = 0;

  // Animate toast in
  Vel(newToast, {translateY: '-35px',  opacity: 1 }, {duration: 300,
    easing: 'easeOutCubic',
    queue: false});

  // Allows timer to be pause while being panned
  var timeLeft = displayLength;
  var counterInterval;
  if (timeLeft != null)  {
    counterInterval = setInterval (function(){
      if (newToast.parentNode === null)
        window.clearInterval(counterInterval);

      // If toast is not being dragged, decrease its time remaining
      if (!newToast.classList.contains('panning')) {
        timeLeft -= 20;
      }

      if (timeLeft <= 0) {
        // Animate toast out
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,
            easing: 'easeOutExpo',
            queue: false,
            complete: function(){
              // Call the optional callback
              if(typeof(completeCallback) === "function")
                completeCallback();
              // Remove toast after it times out
              this[0].parentNode.removeChild(this[0]);
            }
          });
        window.clearInterval(counterInterval);
      }
    }, 20);
  }



  function createToast(html) {

    // Create toast
    var toast = document.createElement('div');
    toast.classList.add('toast');
    if (className) {
      var classes = className.split(' ');

      for (var i = 0, count = classes.length; i < count; i++) {
        toast.classList.add(classes[i]);
      }
    }
  // If type of parameter is HTML Element
    if ( typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName==="string"
) {
      toast.appendChild(html);
    }
    else if (html instanceof jQuery) {
      // Check if it is jQuery object
      toast.appendChild(html[0]);
    }
    else {
      // Insert as text;
      toast.innerHTML = html;
    }
    // Bind hammer
    var hammerHandler = new Hammer(toast, {prevent_default: false});
    hammerHandler.on('pan', function(e) {
      var deltaX = e.deltaX;
      var activationDistance = 80;

      // Change toast state
      if (!toast.classList.contains('panning')){
        toast.classList.add('panning');
      }

      var opacityPercent = 1-Math.abs(deltaX / activationDistance);
      if (opacityPercent < 0)
        opacityPercent = 0;

      Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});

    });

    hammerHandler.on('panend', function(e) {
      var deltaX = e.deltaX;
      var activationDistance = 80;

      // If toast dragged past activation point
      if (Math.abs(deltaX) > activationDistance) {
        Vel(toast, {marginTop: '-40px'}, { duration: 375,
          easing: 'easeOutExpo',
          queue: false,
          complete: function(){
            if(typeof(completeCallback) === "function") {
              completeCallback();
            }
            toast.parentNode.removeChild(toast);
          }
        });

      } else {
        toast.classList.remove('panning');
        // Put toast back into original position
        Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
          easing: 'easeOutExpo',
          queue: false
        });

      }
    });

    return toast;
  }
};
;(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true
      };
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menuId = $this.attr('data-activates');
        var menu = $("#"+ menuId);

        // Set to width
        if (options.menuWidth != 300) {
          menu.css('width', options.menuWidth);
        }

        // Add Touch Area
        var $dragTarget = $('.drag-target[data-sidenav="' + menuId + '"]');
        if (options.draggable) {
          // Regenerate dragTarget
          if ($dragTarget.length) {
            $dragTarget.remove();
          }

          $dragTarget = $('<div class="drag-target"></div>').attr('data-sidenav', menuId);
          $('body').append($dragTarget);
        } else {
          $dragTarget = $();
        }

        if (options.edge == 'left') {
          menu.css('transform', 'translateX(-100%)');
          $dragTarget.css({'left': 0}); // Add Touch Area
        }
        else {
          menu.addClass('right-aligned') // Change text-alignment to right
            .css('transform', 'translateX(100%)');
          $dragTarget.css({'right': 0}); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu.hasClass('fixed')) {
            if (window.innerWidth > 992) {
              menu.css('transform', 'translateX(0)');
            }
          }

        // Window resize to reset on large screens fixed
        if (menu.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').length !== 0 && menuOut) {
                removeMenu(true);
              }
              else {
                // menu.removeAttr('style');
                menu.css('transform', 'translateX(0%)');
                // menu.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left') {
                menu.css('transform', 'translateX(-100%)');
              } else {
                menu.css('transform', 'translateX(100%)');
              }

            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu.on("click.itemclick", "a:not(.collapsible-header)", function(){
            removeMenu();
          });
        }

        var removeMenu = function(restoreNav) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200,
              queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $dragTarget.css({width: '', right: '', left: '0'});
            menu.velocity(
              {'translateX': '-100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            $dragTarget.css({width: '', right: '0', left: ''});
            menu.velocity(
              {'translateX': '100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }
              });
          }
        };



        // Touch Event
        var panning = false;
        var menuOut = false;

        if (options.draggable) {
          $dragTarget.on('click', function(){
            if (menuOut) {
              removeMenu();
            }
          });

          $dragTarget.hammer({
            prevent_default: false
          }).bind('pan', function(e) {

            if (e.gesture.pointerType == "touch") {

              var direction = e.gesture.direction;
              var x = e.gesture.center.x;
              var y = e.gesture.center.y;
              var velocityX = e.gesture.velocityX;

              // Disable Scrolling
              var $body = $('body');
              var $overlay = $('#sidenav-overlay');
              var oldWidth = $body.innerWidth();
              $body.css('overflow', 'hidden');
              $body.width(oldWidth);

              // If overlay does not exist, create one and if it is clicked, close menu
              if ($overlay.length === 0) {
                $overlay = $('<div id="sidenav-overlay"></div>');
                $overlay.css('opacity', 0).click( function(){
                  removeMenu();
                });
                $('body').append($overlay);
              }

              // Keep within boundaries
              if (options.edge === 'left') {
                if (x > options.menuWidth) { x = options.menuWidth; }
                else if (x < 0) { x = 0; }
              }

              if (options.edge === 'left') {
                // Left Direction
                if (x < (options.menuWidth / 2)) { menuOut = false; }
                // Right Direction
                else if (x >= (options.menuWidth / 2)) { menuOut = true; }
                menu.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');
              }
              else {
                // Left Direction
                if (x < (window.innerWidth - options.menuWidth / 2)) {
                  menuOut = true;
                }
                // Right Direction
                else if (x >= (window.innerWidth - options.menuWidth / 2)) {
                 menuOut = false;
               }
                var rightPos = (x - options.menuWidth / 2);
                if (rightPos < 0) {
                  rightPos = 0;
                }

                menu.css('transform', 'translateX(' + rightPos + 'px)');
              }


              // Percentage overlay
              var overlayPerc;
              if (options.edge === 'left') {
                overlayPerc = x / options.menuWidth;
                $overlay.velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
              }
              else {
                overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                $overlay.velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
              }
            }

          }).bind('panend', function(e) {

            if (e.gesture.pointerType == "touch") {
              var $overlay = $('#sidenav-overlay');
              var velocityX = e.gesture.velocityX;
              var x = e.gesture.center.x;
              var leftPos = x - options.menuWidth;
              var rightPos = x - options.menuWidth / 2;
              if (leftPos > 0 ) {
                leftPos = 0;
              }
              if (rightPos < 0) {
                rightPos = 0;
              }
              panning = false;

              if (options.edge === 'left') {
                // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
                if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                  // Return menu to open
                  if (leftPos !== 0) {
                    menu.velocity({'translateX': [0, leftPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                  }

                  $overlay.velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                  $dragTarget.css({width: '50%', right: 0, left: ''});
                  menuOut = true;
                }
                else if (!menuOut || velocityX > 0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });
                  // Slide menu closed
                  menu.velocity({'translateX': [-1 * options.menuWidth - 10, leftPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                  $overlay.velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      $(this).remove();
                    }});
                  $dragTarget.css({width: '10px', right: '', left: 0});
                }
              }
              else {
                if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                  // Return menu to open
                  if (rightPos !== 0) {
                    menu.velocity({'translateX': [0, rightPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                  }

                  $overlay.velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                  $dragTarget.css({width: '50%', right: '', left: 0});
                  menuOut = true;
                }
                else if (!menuOut || velocityX < -0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });

                  // Slide menu closed
                  menu.velocity({'translateX': [options.menuWidth + 10, rightPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                  $overlay.velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      $(this).remove();
                    }});
                  $dragTarget.css({width: '10px', right: 0, left: ''});
                }
              }

            }
          });
        }

        $this.off('click.sidenav').on('click.sidenav', function() {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          }
          else {

            // Disable Scrolling
            var $body = $('body');
            var $overlay = $('<div id="sidenav-overlay"></div>');
            var oldWidth = $body.innerWidth();
            $body.css('overflow', 'hidden');
            $body.width(oldWidth);

            // Push current drag target on top of DOM tree
            $('body').append($dragTarget);

            if (options.edge === 'left') {
              $dragTarget.css({width: '50%', right: 0, left: ''});
              menu.velocity({'translateX': [0, -1 * options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else {
              $dragTarget.css({width: '50%', right: '', left: 0});
              menu.velocity({'translateX': [0, options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }

            $overlay.css('opacity', 0)
            .click(function(){
              menuOut = false;
              panning = false;
              removeMenu();
              $overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function() {
                  $(this).remove();
                } });

            });
            $('body').append($overlay);
            $overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
              complete: function () {
                menuOut = true;
                panning = false;
              }
            });
          }

          return false;
        });
      });


    },
    destroy: function () {
      var $overlay = $('#sidenav-overlay');
      var $dragTarget = $('.drag-target[data-sidenav="' + $(this).attr('data-activates') + '"]');
      $overlay.trigger('click');
      $dragTarget.remove();
      $(this).off('click');
      $overlay.remove();
    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {
      $('#sidenav-overlay').trigger('click');
    }
  };


  $.fn.sideNav = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );
    }
  }; // Plugin end
}( jQuery ));
;/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var unique_id = 1;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			if (element.height() > 0) {
				var elTop = element.offset().top,
					elLeft = element.offset().left,
					elRight = elLeft + element.width(),
					elBottom = elTop + element.height();

				var isIntersect = !(elLeft > right ||
					elRight < left ||
					elTop > bottom ||
					elBottom < top);

				if (isIntersect) {
					hits.push(element);
				}
			}
		});

		return hits;
	}


	/**
	 * Called when the user scrolls the window
	 */
	function onScroll(scrollOffset) {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
		var intersections = findElements(top+offset.top + scrollOffset || 200, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {

			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}


	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
        throttle : number -> scrollspy throttling. Default: 100 ms
        offsetTop : number -> offset from top. Default: 0
        offsetRight : number -> offset from right. Default: 0
        offsetBottom : number -> offset from bottom. Default: 0
        offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
	  var defaults = {
			throttle: 100,
			scrollOffset: 200 // offset - 200 allows elements near bottom of page to scroll
    };
    options = $.extend(defaults, options);

		var visible = [];
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
			$(element).data("scrollSpy:id", i);
			// Smooth scroll to section
		  $('a[href="#' + $(element).attr('id') + '"]').click(function(e) {
		    e.preventDefault();
		    var offset = $(Materialize.escapeHash(this.hash)).offset().top + 1;
	    	$('html, body').animate({ scrollTop: offset - options.scrollOffset }, {duration: 400, queue: false, easing: 'easeOutCubic'});
		  });
		});

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = Materialize.throttle(function() {
			onScroll(options.scrollOffset);
		}, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);


		selector.on('scrollSpy:enter', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			var $this = $(this);

			if (visible[0]) {
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
					visible.unshift($(this));
				}
				else {
					visible.push($(this));
				}
			}
			else {
				visible.push($(this));
			}


			$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
		});
		selector.on('scrollSpy:exit', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			if (visible[0]) {
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
				var $this = $(this);
				visible = $.grep(visible, function(value) {
	        return value.attr('id') != $this.attr('id');
	      });
	      if (visible[0]) { // Check if empty
					$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
	      }
			}
		});

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', Materialize.throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);
;(function ($) {
  $(document).ready(function() {

    // Function to update labels of text fields
    Materialize.updateTextFields = function() {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {
        var $this = $(this);
        if ($(element).val().length > 0 || element.autofocus || $this.attr('placeholder') !== undefined) {
          $this.siblings('label').addClass('active');
        } else if ($(element)[0].validity) {
          $this.siblings('label').toggleClass('active', $(element)[0].validity.badInput === true);
        } else {
          $this.siblings('label').removeClass('active');
        }
      });
    };

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function(e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, .prefix').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this);
      var selector = ".prefix";

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        selector += ", label";
      }

      $inputElement.siblings(selector).removeClass('active');

      validate_field($inputElement);
    });

    window.validate_field = function(object) {
      var hasLength = object.attr('data-length') !== undefined;
      var lenAttr = parseInt(object.attr('data-length'));
      var len = object.val().length;

      if (object.val().length === 0 && object[0].validity.badInput === false) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      }
      else {
        if (object.hasClass('validate')) {
          // Check for character counter attributes
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
            object.removeClass('invalid');
            object.addClass('valid');
          }
          else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    };

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup.radio', radio_checkbox, function(e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === 9) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function(e) {

          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');
      var lineHeight = $textarea.css('line-height');

      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }
      if (lineHeight) { hiddenDiv.css('line-height', lineHeight); }

      if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal")
                 .css('white-space', "pre");
      }

      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);


      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      }
      else {
        hiddenDiv.css('width', $(window).width()/2);
      }

      /**
       * Resize if the new height is greater than the
       * original height of the textarea
       */
      if ($textarea.data("original-height") <= hiddenDiv.height()) {
        $textarea.css('height', hiddenDiv.height());
      } else if ($textarea.val().length < $textarea.data("previous-length")) {
        /**
         * In case the new height is less than original height, it
         * means the textarea has less text than before
         * So we set the height to the original one
         */
        $textarea.css('height', $textarea.data("original-height"));
      }
      $textarea.data("previous-length", $textarea.val().length);
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      /**
       * Instead of resizing textarea on document load,
       * store the original height and the original length
       */
      $textarea.data("original-height", $textarea.height());
      $textarea.data("previous-length", $textarea.val().length);
    });

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files      = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]';
    var range_mousedown = false;
    var left;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var showRangeBubble = function(thumb) {
      var paddingLeft = parseInt(thumb.parent().css('padding-left'));
      var marginLeft = (-7 + paddingLeft) + 'px';
      thumb.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: marginLeft}, { duration: 300, easing: 'easeOutExpo' });
    };

    var calcRangeOffset = function(range) {
      var width = range.width() - 15;
      var max = parseFloat(range.attr('max'));
      var min = parseFloat(range.attr('min'));
      var percent = (parseFloat(range.val()) - min) / (max - min);
      return percent * width;
    }

    var range_wrapper = '.range-field';
    $(document).on('change', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');
      thumb.find('.value').html($(this).val());

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      var offsetLeft = calcRangeOffset($(this));
      thumb.addClass('active').css('left', offsetLeft);
    });

    $(document).on('mousedown touchstart', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');

      // If thumb indicator does not exist yet, create it
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).after(thumb);
      }

      // Set indicator value
      thumb.find('.value').html($(this).val());

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      if (e.type !== 'input') {
        var offsetLeft = calcRangeOffset($(this));
        thumb.addClass('active').css('left', offsetLeft);
      }
    });

    $(document).on('mouseup touchend', range_wrapper, function() {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on('input mousemove touchmove', range_wrapper, function(e) {
      var thumb = $(this).children('.thumb');
      var left;
      var input = $(this).find(range_type);

      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          showRangeBubble(thumb);
        }

        var offsetLeft = calcRangeOffset(input);
        thumb.addClass('active').css('left', offsetLeft);
        thumb.find('.value').html(thumb.siblings(range_type).val());
      }
    });

    $(document).on('mouseout touchleave', range_wrapper, function() {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');
        var paddingLeft = parseInt($(this).css('padding-left'));
        var marginLeft = (7 + paddingLeft) + 'px';

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: marginLeft}, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });

    /**************************
     * Auto complete plugin  *
     *************************/
    $.fn.autocomplete = function (options) {
      // Defaults
      var defaults = {
        data: {},
        limit: Infinity,
        onAutocomplete: null,
        minLength: 1
      };

      options = $.extend(defaults, options);

      return this.each(function() {
        var $input = $(this);
        var data = options.data,
            count = 0,
            activeIndex = -1,
            oldVal,
            $inputDiv = $input.closest('.input-field'); // Div to append on

        // Check if data isn't empty
        if (!$.isEmptyObject(data)) {
          var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');
          var $oldAutocomplete;

          // Append autocomplete element.
          // Prevent double structure init.
          if ($inputDiv.length) {
            $oldAutocomplete = $inputDiv.children('.autocomplete-content.dropdown-content').first();
            if (!$oldAutocomplete.length) {
              $inputDiv.append($autocomplete); // Set ul in body
            }
          } else {
            $oldAutocomplete = $input.next('.autocomplete-content.dropdown-content');
            if (!$oldAutocomplete.length) {
              $input.after($autocomplete);
            }
          }
          if ($oldAutocomplete.length) {
            $autocomplete = $oldAutocomplete;
          }

          // Highlight partial match.
          var highlight = function(string, $el) {
            var img = $el.find('img');
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                matchEnd = matchStart + string.length - 1,
                beforeMatch = $el.text().slice(0, matchStart),
                matchText = $el.text().slice(matchStart, matchEnd + 1),
                afterMatch = $el.text().slice(matchEnd + 1);
            $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
            if (img.length) {
              $el.prepend(img);
            }
          };

          // Reset current element position
          var resetCurrentElement = function() {
            activeIndex = -1;
            $autocomplete.find('.active').removeClass('active');
          }

          // Remove autocomplete elements
          var removeAutocomplete = function() {
            $autocomplete.empty();
            resetCurrentElement();
            oldVal = undefined;
          };

          $input.off('blur.autocomplete').on('blur.autocomplete', function() {
            removeAutocomplete();
          });

          // Perform search
          $input.off('keyup.autocomplete focus.autocomplete').on('keyup.autocomplete focus.autocomplete', function (e) {
            // Reset count.
            count = 0;
            var val = $input.val().toLowerCase();

            // Don't capture enter or arrow key usage.
            if (e.which === 13 ||
                e.which === 38 ||
                e.which === 40) {
              return;
            }


            // Check if the input isn't empty
            if (oldVal !== val) {
              removeAutocomplete();

              if (val.length >= options.minLength) {
                for(var key in data) {
                  if (data.hasOwnProperty(key) &&
                      key.toLowerCase().indexOf(val) !== -1 &&
                      key.toLowerCase() !== val) {
                    // Break if past limit
                    if (count >= options.limit) {
                      break;
                    }

                    var autocompleteOption = $('<li></li>');
                    if (!!data[key]) {
                      autocompleteOption.append('<img src="'+ data[key] +'" class="right circle"><span>'+ key +'</span>');
                    } else {
                      autocompleteOption.append('<span>'+ key +'</span>');
                    }

                    $autocomplete.append(autocompleteOption);
                    highlight(val, autocompleteOption);
                    count++;
                  }
                }
              }
            }

            // Update oldVal
            oldVal = val;
          });

          $input.off('keydown.autocomplete').on('keydown.autocomplete', function (e) {
            // Arrow keys and enter key usage
            var keyCode = e.which,
                liElement,
                numItems = $autocomplete.children('li').length,
                $active = $autocomplete.children('.active').first();

            // select element on Enter
            if (keyCode === 13 && activeIndex >= 0) {
              liElement = $autocomplete.children('li').eq(activeIndex);
              if (liElement.length) {
                liElement.trigger('mousedown.autocomplete');
                e.preventDefault();
              }
              return;
            }

            // Capture up and down key
            if ( keyCode === 38 || keyCode === 40 ) {
              e.preventDefault();

              if (keyCode === 38 &&
                  activeIndex > 0) {
                activeIndex--;
              }

              if (keyCode === 40 &&
                  activeIndex < (numItems - 1)) {
                activeIndex++;
              }

              $active.removeClass('active');
              if (activeIndex >= 0) {
                $autocomplete.children('li').eq(activeIndex).addClass('active');
              }
            }
          });

          // Set input value
          $autocomplete.on('mousedown.autocomplete touchstart.autocomplete', 'li', function () {
            var text = $(this).text().trim();
            $input.val(text);
            $input.trigger('change');
            removeAutocomplete();

            // Handle onAutocomplete callback.
            if (typeof(options.onAutocomplete) === "function") {
              options.onAutocomplete.call(this, text);
            }
          });
        }
      });
    };

  }); // End of $(document).ready

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function(){
      var $select = $(this);

      if ($select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      var multiple = $select.attr('multiple') ? true : false,
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt

      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-'+lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if(callback === 'destroy') {
        $select.data('select-id', null).removeClass('initialized');
        return;
      }

      var uniqueID = Materialize.guid();
      $select.data('select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),
          valuesSelected = [],
          optionsHover = false;

      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";

      // Function that renders and appends the option taking into
      // account type and possible image icon.
      var appendOptionWithIcon = function(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';
        var optgroupClass = (type === 'optgroup-option') ? 'optgroup-option ' : '';
        var multipleCheckbox = multiple ? '<input type="checkbox"' + disabledClass + '/><label></label>' : '';

        // add icons
        var icon_url = option.data('icon');
        var classes = option.attr('class');
        if (!!icon_url) {
          var classString = '';
          if (!!classes) classString = ' class="' + classes + '"';

          // Check for multiple type.
          options.append($('<li class="' + disabledClass + optgroupClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span>' + multipleCheckbox + option.html() + '</span></li>'));
          return true;
        }

        // Check for multiple type.
        options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + multipleCheckbox + option.html() + '</span></li>'));
      };

      /* Create dropdown structure. */
      if (selectChildren.length) {
        selectChildren.each(function() {
          if ($(this).is('option')) {
            // Direct descendant option.
            if (multiple) {
              appendOptionWithIcon($select, $(this), 'multiple');

            } else {
              appendOptionWithIcon($select, $(this));
            }
          } else if ($(this).is('optgroup')) {
            // Optgroup.
            var selectOptions = $(this).children('option');
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

            selectOptions.each(function() {
              appendOptionWithIcon($select, $(this), 'optgroup-option');
            });
          }
        });
      }

      options.find('li:not(.optgroup)').each(function (i) {
        $(this).click(function (e) {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            var selected = true;

            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });
              selected = toggleEntryFromArray(valuesSelected, i, $select);
              $newSelect.trigger('focus');
            } else {
              options.find('li').removeClass('active');
              $(this).toggleClass('active');
              $newSelect.val($(this).text());
            }

            activateOption(options, $(this));
            $select.find('option').eq(i).prop('selected', selected);
            // Trigger onchange() event
            $select.trigger('change');
            if (typeof callback !== 'undefined') callback();
          }

          e.stopPropagation();
        });
      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<span class="caret">&#9660;</span>');
      if ($select.is(':disabled'))
        dropdownIcon.addClass('disabled');

      // escape double quotes
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $newSelect.after(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({'hover': false});
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on({
        'focus': function (){
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close');
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus']);
            var label = $(this).val();
            if (multiple && label.indexOf(',') >= 0) {
              label = label.split(',')[0];
            }

            var selectedOption = options.find('li').filter(function() {
              return $(this).text().toLowerCase() === label.toLowerCase();
            })[0];
            activateOption(options, selectedOption, true);
          }
        },
        'click': function (e){
          e.stopPropagation();
        }
      });

      $newSelect.on('blur', function() {
        if (!multiple) {
          $(this).trigger('close');
        }
        options.find('li.selected').removeClass('selected');
      });

      options.hover(function() {
        optionsHover = true;
      }, function () {
        optionsHover = false;
      });

      $(window).on({
        'click': function () {
          multiple && (optionsHover || $newSelect.trigger('close'));
        }
      });

      // Add initial multiple selections.
      if (multiple) {
        $select.find("option:selected:not(:disabled)").each(function () {
          var index = $(this).index();

          toggleEntryFromArray(valuesSelected, index, $select);
          options.find("li").eq(index).find(":checkbox").prop("checked", true);
        });
      }

      /**
       * Make option as selected and scroll to selected position
       * @param {jQuery} collection  Select options jQuery element
       * @param {Element} newOption  element of the new option
       * @param {Boolean} firstActivation  If on first activation of select
       */
      var activateOption = function(collection, newOption, firstActivation) {
        if (newOption) {
          collection.find('li.selected').removeClass('selected');
          var option = $(newOption);
          option.addClass('selected');
          if (!multiple || !!firstActivation) {
            options.scrollTo(option);
          }
        }
      };

      // Allow user to search by typing
      // this array is cleared after 1 second
      var filterQuery = [],
          onKeyDown = function(e){
            // TAB - switch to another input
            if(e.which == 9){
              $newSelect.trigger('close');
              return;
            }

            // ARROW DOWN WHEN SELECT IS CLOSED - open select options
            if(e.which == 40 && !options.is(':visible')){
              $newSelect.trigger('open');
              return;
            }

            // ENTER WHEN SELECT IS CLOSED - submit form
            if(e.which == 13 && !options.is(':visible')){
              return;
            }

            e.preventDefault();

            // CASE WHEN USER TYPE LETTERS
            var letter = String.fromCharCode(e.which).toLowerCase(),
                nonLetters = [9,13,27,38,40];
            if (letter && (nonLetters.indexOf(e.which) === -1)) {
              filterQuery.push(letter);

              var string = filterQuery.join(''),
                  newOption = options.find('li').filter(function() {
                    return $(this).text().toLowerCase().indexOf(string) === 0;
                  })[0];

              if (newOption) {
                activateOption(options, newOption);
              }
            }

            // ENTER - select option and close when select options are opened
            if (e.which == 13) {
              var activeOption = options.find('li.selected:not(.disabled)')[0];
              if(activeOption){
                $(activeOption).trigger('click');
                if (!multiple) {
                  $newSelect.trigger('close');
                }
              }
            }

            // ARROW DOWN - move to next not disabled option
            if (e.which == 40) {
              if (options.find('li.selected').length) {
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];
              } else {
                newOption = options.find('li:not(.disabled)')[0];
              }
              activateOption(options, newOption);
            }

            // ESC - close options
            if (e.which == 27) {
              $newSelect.trigger('close');
            }

            // ARROW UP - move to previous not disabled option
            if (e.which == 38) {
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
              if(newOption)
                activateOption(options, newOption);
            }

            // Automaticaly clean filter query so user can search again by starting letters
            setTimeout(function(){ filterQuery = []; }, 1000);
          };

      $newSelect.on('keydown', onKeyDown);
    });

    function toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
          notAdded = index === -1;

      if (notAdded) {
        entriesArray.push(entryIndex);
      } else {
        entriesArray.splice(index, 1);
      }

      select.siblings('ul.dropdown-content').find('li:not(.optgroup)').eq(entryIndex).toggleClass('active');

      // use notAdded instead of true (to detect if the option is selected or not)
      select.find('option').eq(entryIndex).prop('selected', notAdded);
      setValueToInput(entriesArray, select);

      return notAdded;
    }

    function setValueToInput(entriesArray, select) {
      var value = '';

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text();

        i === 0 ? value += text : value += ', ' + text;
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text();
      }

      select.siblings('input.select-dropdown').val(value);
    }
  };

}( jQuery ));
;(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        indicators: true,
        height: 400,
        transition: 500,
        interval: 6000
      };
      options = $.extend(defaults, options);

      return this.each(function() {

        // For each slider, we want to keep track of
        // which slide is active and its associated content
        var $this = $(this);
        var $slider = $this.find('ul.slides').first();
        var $slides = $slider.find('> li');
        var $active_index = $slider.find('.active').index();
        var $active, $indicators, $interval;
        if ($active_index != -1) { $active = $slides.eq($active_index); }

        // Transitions the caption depending on alignment
        function captionTransition(caption, duration) {
          if (caption.hasClass("center-align")) {
            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("right-align")) {
            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("left-align")) {
            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
          }
        }

        // This function will transition the slide to any index of the next slide
        function moveToSlide(index) {
          // Wrap around indices.
          if (index >= $slides.length) index = 0;
          else if (index < 0) index = $slides.length -1;

          $active_index = $slider.find('.active').index();

          // Only do if index changes
          if ($active_index != index) {
            $active = $slides.eq($active_index);
            $caption = $active.find('.caption');

            $active.removeClass('active');
            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
                              complete: function() {
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                              } });
            captionTransition($caption, options.transition);


            // Update indicators
            if (options.indicators) {
              $indicators.eq($active_index).removeClass('active');
            }

            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).addClass('active');


            // Update indicators
            if (options.indicators) {
              $indicators.eq(index).addClass('active');
            }
          }
        }

        // Set height of slider
        // If fullscreen, do nothing
        if (!$this.hasClass('fullscreen')) {
          if (options.indicators) {
            // Add height if indicators are present
            $this.height(options.height + 40);
          }
          else {
            $this.height(options.height);
          }
          $slider.height(options.height);
        }


        // Set initial positions of captions
        $slides.find('.caption').each(function () {
          captionTransition($(this), 0);
        });

        // Move img src into background-image
        $slides.find('img').each(function () {
          var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          if ($(this).attr('src') !== placeholderBase64) {
            $(this).css('background-image', 'url(' + $(this).attr('src') + ')' );
            $(this).attr('src', placeholderBase64);
          }
        });

        // dynamically add indicators
        if (options.indicators) {
          $indicators = $('<ul class="indicators"></ul>');
          $slides.each(function( index ) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Handle clicks on indicators
            $indicator.click(function () {
              var $parent = $slider.parent();
              var curr_index = $parent.find($(this)).index();
              moveToSlide(curr_index);

              // reset interval
              clearInterval($interval);
              $interval = setInterval(
                function(){
                  $active_index = $slider.find('.active').index();
                  if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                  else $active_index += 1;

                  moveToSlide($active_index);

                }, options.transition + options.interval
              );
            });
            $indicators.append($indicator);
          });
          $this.append($indicators);
          $indicators = $this.find('ul.indicators').find('li.indicator-item');
        }

        if ($active) {
          $active.show();
        }
        else {
          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

          $active_index = 0;
          $active = $slides.eq($active_index);

          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).addClass('active');
          }
        }

        // Adjust height to current slide
        $active.find('img').each(function() {
          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
        });

        // auto scroll
        $interval = setInterval(
          function(){
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index + 1);

          }, options.transition + options.interval
        );


        // HammerJS, Swipe navigation

        // Touch Event
        var panning = false;
        var swipeLeft = false;
        var swipeRight = false;

        $this.hammer({
            prevent_default: false
        }).bind('pan', function(e) {
          if (e.gesture.pointerType === "touch") {

            // reset interval
            clearInterval($interval);

            var direction = e.gesture.direction;
            var x = e.gesture.deltaX;
            var velocityX = e.gesture.velocityX;
            var velocityY = e.gesture.velocityY;

            $curr_slide = $slider.find('.active');
            if (Math.abs(velocityX) > Math.abs(velocityY)) {
              $curr_slide.velocity({ translateX: x
                  }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }

            // Swipe Left
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
              swipeRight = true;
            }
            // Swipe Right
            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
              swipeLeft = true;
            }

            // Make Slide Behind active slide visible
            var next_slide;
            if (swipeLeft) {
              next_slide = $curr_slide.next();
              if (next_slide.length === 0) {
                next_slide = $slides.first();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            if (swipeRight) {
              next_slide = $curr_slide.prev();
              if (next_slide.length === 0) {
                next_slide = $slides.last();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }


          }

        }).bind('panend', function(e) {
          if (e.gesture.pointerType === "touch") {

            $curr_slide = $slider.find('.active');
            panning = false;
            curr_index = $slider.find('.active').index();

            if (!swipeRight && !swipeLeft || $slides.length <=1) {
              // Return to original spot
              $curr_slide.velocity({ translateX: 0
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else if (swipeLeft) {
              moveToSlide(curr_index + 1);
              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            else if (swipeRight) {
              moveToSlide(curr_index - 1);
              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            swipeLeft = false;
            swipeRight = false;

            // Restart interval
            clearInterval($interval);
            $interval = setInterval(
              function(){
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);

              }, options.transition + options.interval
            );
          }
        });

        $this.on('sliderPause', function() {
          clearInterval($interval);
        });

        $this.on('sliderStart', function() {
          clearInterval($interval);
          $interval = setInterval(
            function(){
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
              else $active_index += 1;

              moveToSlide($active_index);

            }, options.transition + options.interval
          );
        });

        $this.on('sliderNext', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);
        });

        $this.on('sliderPrev', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index - 1);
        });

      });



    },
    pause : function() {
      $(this).trigger('sliderPause');
    },
    start : function() {
      $(this).trigger('sliderStart');
    },
    next : function() {
      $(this).trigger('sliderNext');
    },
    prev : function() {
      $(this).trigger('sliderPrev');
    }
  };


  $.fn.slider = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
    }
  }; // Plugin end
}( jQuery ));
;(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }
    });

  });
}( jQuery ));;(function ($) {
  var materialChipsDefaults = {
    data: [],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {},
  };

  $(document).ready(function() {
    // Handle removal of static chips.
    $(document).on('click', '.chip .close', function(e){
      var $chips = $(this).closest('.chips');
      if ($chips.attr('data-initialized')) {
        return;
      }
      $(this).closest('.chip').remove();
    });
  });

  $.fn.material_chip = function (options) {
    var self = this;
    this.$el = $(this);
    this.$document = $(document);
    this.SELS = {
      CHIPS: '.chips',
      CHIP: '.chip',
      INPUT: 'input',
      DELETE: '.material-icons',
      SELECTED_CHIP: '.selected',
    };

    if ('data' === options) {
      return this.$el.data('chips');
    }

    var curr_options = $.extend({}, materialChipsDefaults, options);
    self.hasAutocomplete = !$.isEmptyObject(curr_options.autocompleteOptions.data);

    // Initialize
    this.init = function() {
      var i = 0;
      var chips;
      self.$el.each(function(){
        var $chips = $(this);
        var chipId = Materialize.guid();
        self.chipId = chipId;

        if (!curr_options.data || !(curr_options.data instanceof Array)) {
          curr_options.data = [];
        }
        $chips.data('chips', curr_options.data);
        $chips.attr('data-index', i);
        $chips.attr('data-initialized', true);

        if (!$chips.hasClass(self.SELS.CHIPS)) {
          $chips.addClass('chips');
        }

        self.chips($chips, chipId);
        i++;
      });
    };

    this.handleEvents = function() {
      var SELS = self.SELS;

      self.$document.off('click.chips-focus', SELS.CHIPS).on('click.chips-focus', SELS.CHIPS, function(e){
        $(e.target).find(SELS.INPUT).focus();
      });

      self.$document.off('click.chips-select', SELS.CHIP).on('click.chips-select', SELS.CHIP, function(e){
        var $chip = $(e.target);
        if ($chip.length) {
          var wasSelected = $chip.hasClass('selected');
          var $chips = $chip.closest(SELS.CHIPS);
          $(SELS.CHIP).removeClass('selected');

          if (!wasSelected) {
            self.selectChip($chip.index(), $chips);
          }
        }
      });

      self.$document.off('keydown.chips').on('keydown.chips', function(e){
        if ($(e.target).is('input, textarea')) {
          return;
        }

        // delete
        var $chip = self.$document.find(SELS.CHIP + SELS.SELECTED_CHIP);
        var $chips = $chip.closest(SELS.CHIPS);
        var length = $chip.siblings(SELS.CHIP).length;
        var index;

        if (!$chip.length) {
          return;
        }

        if (e.which === 8 || e.which === 46) {
          e.preventDefault();

          index = $chip.index();
          self.deleteChip(index, $chips);

          var selectIndex = null;
          if ((index + 1) < length) {
            selectIndex = index;
          } else if (index === length || (index + 1) === length) {
            selectIndex = length - 1;
          }

          if (selectIndex < 0) selectIndex = null;

          if (null !== selectIndex) {
            self.selectChip(selectIndex, $chips);
          }
          if (!length) $chips.find('input').focus();

        // left
        } else if (e.which === 37) {
          index = $chip.index() - 1;
          if (index < 0) {
            return;
          }
          $(SELS.CHIP).removeClass('selected');
          self.selectChip(index, $chips);

        // right
        } else if (e.which === 39) {
          index = $chip.index() + 1;
          $(SELS.CHIP).removeClass('selected');
          if (index > length) {
            $chips.find('input').focus();
            return;
          }
          self.selectChip(index, $chips);
        }
      });

      self.$document.off('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.addClass('focus');
        $currChips.siblings('label, .prefix').addClass('active');
        $(SELS.CHIP).removeClass('selected');
      });

      self.$document.off('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.removeClass('focus');

        // Remove active if empty
        if (!$currChips.data('chips').length) {
          $currChips.siblings('label').removeClass('active');
        }
        $currChips.siblings('.prefix').removeClass('active');
      });

      self.$document.off('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT).on('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var chipsLength = $chips.children(SELS.CHIP).length;

        // enter
        if (13 === e.which) {
          // Override enter if autocompleting.
          if (self.hasAutocomplete &&
              $chips.find('.autocomplete-content.dropdown-content').length &&
              $chips.find('.autocomplete-content.dropdown-content').children().length) {
            return;
          }

          e.preventDefault();
          self.addChip({tag: $target.val()}, $chips);
          $target.val('');
          return;
        }

        // delete or left
        if ((8 === e.keyCode || 37 === e.keyCode) && '' === $target.val() && chipsLength) {
          e.preventDefault();
          self.selectChip(chipsLength - 1, $chips);
          $target.blur();
          return;
        }
      });

      // Click on delete icon in chip.
      self.$document.off('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE).on('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE, function(e) {
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var $chip = $target.closest(SELS.CHIP);
        e.stopPropagation();
        self.deleteChip($chip.index(), $chips);
        $chips.find('input').focus();
      });
    };

    this.chips = function($chips, chipId) {
      $chips.empty();
      $chips.data('chips').forEach(function(elem){
        $chips.append(self.renderChip(elem));
      });
      $chips.append($('<input id="' + chipId +'" class="input" placeholder="">'));
      self.setPlaceholder($chips);

      // Set for attribute for label
      var label = $chips.next('label');
      if (label.length) {
        label.attr('for', chipId);

        if ($chips.data('chips').length) {
          label.addClass('active');
        }
      }

      // Setup autocomplete if needed.
      var input = $('#' + chipId);
      if (self.hasAutocomplete) {
        curr_options.autocompleteOptions.onAutocomplete = function(val) {
          self.addChip({tag: val}, $chips);
          input.val('');
          input.focus();
        }
        input.autocomplete(curr_options.autocompleteOptions);
      }
    };

    /**
     * Render chip jQuery element.
     * @param {Object} elem
     * @return {jQuery}
     */
    this.renderChip = function(elem) {
      if (!elem.tag) return;

      var $renderedChip = $('<div class="chip"></div>');
      $renderedChip.text(elem.tag);
      $renderedChip.append($('<i class="material-icons close">close</i>'));
      return $renderedChip;
    };

    this.setPlaceholder = function($chips) {
      if ($chips.data('chips').length && curr_options.placeholder) {
        $chips.find('input').prop('placeholder', curr_options.placeholder);

      } else if (!$chips.data('chips').length && curr_options.secondaryPlaceholder) {
        $chips.find('input').prop('placeholder', curr_options.secondaryPlaceholder);
      }
    };

    this.isValid = function($chips, elem) {
      var chips = $chips.data('chips');
      var exists = false;
      for (var i=0; i < chips.length; i++) {
        if (chips[i].tag === elem.tag) {
            exists = true;
            return;
        }
      }
      return '' !== elem.tag && !exists;
    };

    this.addChip = function(elem, $chips) {
      if (!self.isValid($chips, elem)) {
        return;
      }
      var $renderedChip = self.renderChip(elem);
      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        newData.push(oldData[i]);
      }
      newData.push(elem);

      $chips.data('chips', newData);
      $renderedChip.insertBefore($chips.find('input'));
      $chips.trigger('chip.add', elem);
      self.setPlaceholder($chips);
    };

    this.deleteChip = function(chipIndex, $chips) {
      var chip = $chips.data('chips')[chipIndex];
      $chips.find('.chip').eq(chipIndex).remove();

      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        if (i !== chipIndex) {
          newData.push(oldData[i]);
        }
      }

      $chips.data('chips', newData);
      $chips.trigger('chip.delete', chip);
      self.setPlaceholder($chips);
    };

    this.selectChip = function(chipIndex, $chips) {
      var $chip = $chips.find('.chip').eq(chipIndex);
      if ($chip && false === $chip.hasClass('selected')) {
        $chip.addClass('selected');
        $chips.trigger('chip.select', $chips.data('chips')[chipIndex]);
      }
    };

    this.getChipsElement = function(index, $chips) {
      return $chips.eq(index);
    };

    // init
    this.init();

    this.handleEvents();
  };
}( jQuery ));
;(function ($) {
  $.fn.pushpin = function (options) {
    // Defaults
    var defaults = {
      top: 0,
      bottom: Infinity,
      offset: 0
    };

    // Remove pushpin event and classes
    if (options === "remove") {
      this.each(function () {
        if (id = $(this).data('pushpin-id')) {
          $(window).off('scroll.' + id);
          $(this).removeData('pushpin-id').removeClass('pin-top pinned pin-bottom').removeAttr('style');
        }
      });
      return false;
    }

    options = $.extend(defaults, options);


    $index = 0;
    return this.each(function() {
      var $uniqueId = Materialize.guid(),
          $this = $(this),
          $original_offset = $(this).offset().top;

      function removePinClasses(object) {
        object.removeClass('pin-top');
        object.removeClass('pinned');
        object.removeClass('pin-bottom');
      }

      function updateElements(objects, scrolled) {
        objects.each(function () {
          // Add position fixed (because its between top and bottom)
          if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
            removePinClasses($(this));
            $(this).css('top', options.offset);
            $(this).addClass('pinned');
          }

          // Add pin-top (when scrolled position is above top)
          if (scrolled < options.top && !$(this).hasClass('pin-top')) {
            removePinClasses($(this));
            $(this).css('top', 0);
            $(this).addClass('pin-top');
          }

          // Add pin-bottom (when scrolled position is below bottom)
          if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
            removePinClasses($(this));
            $(this).addClass('pin-bottom');
            $(this).css('top', options.bottom - $original_offset);
          }
        });
      }

      $(this).data('pushpin-id', $uniqueId);
      updateElements($this, $(window).scrollTop());
      $(window).on('scroll.' + $uniqueId, function () {
        var $scrolled = $(window).scrollTop() + options.offset;
        updateElements($this, $scrolled);
      });

    });

  };
}( jQuery ));;(function ($) {
  $(document).ready(function() {

    // jQuery reverse
    $.fn.reverse = [].reverse;

    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
      var $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
      var $this = $(this);
      closeFABMenu($this);
    });

    // Toggle-on-click behaviour.
    $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function(e) {
      var $this = $(this);
      var $menu = $this.parent();
      if ($menu.hasClass('active')) {
        closeFABMenu($menu);
      } else {
        openFABMenu($menu);
      }
    });

    // Toolbar transition behaviour.
    $(document).on('click.fabToolbar', '.fixed-action-btn.toolbar > a', function(e) {
      var $this = $(this);
      var $menu = $this.parent();
      FABtoToolbar($menu);
    });

  });

  $.fn.extend({
    openFAB: function() {
      openFABMenu($(this));
    },
    closeFAB: function() {
      closeFABMenu($(this));
    },
    openToolbar: function() {
      FABtoToolbar($(this));
    },
    closeToolbar: function() {
      toolbarToFAB($(this));
    }
  });


  var openFABMenu = function (btn) {
    var $this = btn;
    if ($this.hasClass('active') === false) {

      // Get direction option
      var horizontal = $this.hasClass('horizontal');
      var offsetY, offsetX;

      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }

      $this.addClass('active');
      $this.find('ul .btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
        { duration: 0 });

      var time = 0;
      $this.find('ul .btn-floating').reverse().each( function () {
        $(this).velocity(
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},
          { duration: 80, delay: time });
        time += 40;
      });
    }
  };

  var closeFABMenu = function (btn) {
    var $this = btn;
    // Get direction option
    var horizontal = $this.hasClass('horizontal');
    var offsetY, offsetX;

    if (horizontal === true) {
      offsetX = 40;
    } else {
      offsetY = 40;
    }

    $this.removeClass('active');
    var time = 0;
    $this.find('ul .btn-floating').velocity("stop", true);
    $this.find('ul .btn-floating').velocity(
      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
      { duration: 80 }
    );
  };


  /**
   * Transform FAB into toolbar
   * @param  {Object}  object jQuery object
   */
  var FABtoToolbar = function(btn) {
    if (btn.attr('data-open') === "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnRect = btn[0].getBoundingClientRect();
    var anchor = btn.find('> a').first();
    var menu = btn.find('> ul').first();
    var backdrop = $('<div class="fab-backdrop"></div>');
    var fabColor = anchor.css('background-color');
    anchor.append(backdrop);

    offsetX = btnRect.left - (windowWidth / 2) + (btnRect.width / 2);
    offsetY = windowHeight - btnRect.bottom;
    scaleFactor = windowWidth / backdrop.width();
    btn.attr('data-origin-bottom', btnRect.bottom);
    btn.attr('data-origin-left', btnRect.left);
    btn.attr('data-origin-width', btnRect.width);

    // Set initial state
    btn.addClass('active');
    btn.attr('data-open', true);
    btn.css({
      'text-align': 'center',
      width: '100%',
      bottom: 0,
      left: 0,
      transform: 'translateX(' + offsetX + 'px)',
      transition: 'none'
    });
    anchor.css({
      transform: 'translateY(' + -offsetY + 'px)',
      transition: 'none'
    });
    backdrop.css({
      'background-color': fabColor
    });


    setTimeout(function() {
      btn.css({
        transform: '',
        transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
      });
      anchor.css({
        overflow: 'visible',
        transform: '',
        transition: 'transform .2s'
      });

      setTimeout(function() {
        btn.css({
          overflow: 'hidden',
          'background-color': fabColor
        });
        backdrop.css({
          transform: 'scale(' + scaleFactor + ')',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
        menu.find('> li > a').css({
          opacity: 1
        });

        // Scroll to close.
        $(window).on('scroll.fabToolbarClose', function() {
          toolbarToFAB(btn);
          $(window).off('scroll.fabToolbarClose');
          $(document).off('click.fabToolbarClose');
        });

        $(document).on('click.fabToolbarClose', function(e) {
          if (!$(e.target).closest(menu).length) {
            toolbarToFAB(btn);
            $(window).off('scroll.fabToolbarClose');
            $(document).off('click.fabToolbarClose');
          }
        });
      }, 100);
    }, 0);
  };

  /**
   * Transform toolbar back into FAB
   * @param  {Object}  object jQuery object
   */
  var toolbarToFAB = function(btn) {
    if (btn.attr('data-open') !== "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnWidth = btn.attr('data-origin-width');
    var btnBottom = btn.attr('data-origin-bottom');
    var btnLeft = btn.attr('data-origin-left');
    var anchor = btn.find('> .btn-floating').first();
    var menu = btn.find('> ul').first();
    var backdrop = btn.find('.fab-backdrop');
    var fabColor = anchor.css('background-color');

    offsetX = btnLeft - (windowWidth / 2) + (btnWidth / 2);
    offsetY = windowHeight - btnBottom;
    scaleFactor = windowWidth / backdrop.width();


    // Hide backdrop
    btn.removeClass('active');
    btn.attr('data-open', false);
    btn.css({
      'background-color': 'transparent',
      transition: 'none'
    });
    anchor.css({
      transition: 'none'
    });
    backdrop.css({
      transform: 'scale(0)',
      'background-color': fabColor
    });
    menu.find('> li > a').css({
      opacity: ''
    });

    setTimeout(function() {
      backdrop.remove();

      // Set initial state.
      btn.css({
        'text-align': '',
        width: '',
        bottom: '',
        left: '',
        overflow: '',
        'background-color': '',
        transform: 'translate3d(' + -offsetX + 'px,0,0)'
      });
      anchor.css({
        overflow: '',
        transform: 'translate3d(0,' + offsetY + 'px,0)'
      });

      setTimeout(function() {
        btn.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s'
        });
        anchor.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
      }, 20);
    }, 200);
  };


}( jQuery ));
;(function ($) {
  // Image transition function
  Materialize.fadeInImage = function(selectorOrEl) {
    var element;
    if (typeof(selectorOrEl) === 'string') {
      element = $(selectorOrEl);
    } else if (typeof(selectorOrEl) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    element.css({opacity: 0});
    $(element).velocity({opacity: 1}, {
      duration: 650,
      queue: false,
      easing: 'easeOutSine'
    });
    $(element).velocity({opacity: 1}, {
      duration: 1300,
      queue: false,
      easing: 'swing',
      step: function(now, fx) {
        fx.start = 100;
        var grayscale_setting = now/100;
        var brightness_setting = 150 - (100 - now)/1.75;

        if (brightness_setting < 100) {
          brightness_setting = 100;
        }
        if (now >= 0) {
          $(this).css({
              "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",
              "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"
          });
        }
      }
    });
  };

  // Horizontal staggered list
  Materialize.showStaggeredList = function(selectorOrEl) {
    var element;
    if (typeof(selectorOrEl) === 'string') {
      element = $(selectorOrEl);
    } else if (typeof(selectorOrEl) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    var time = 0;
    element.find('li').velocity(
        { translateX: "-100px"},
        { duration: 0 });

    element.find('li').each(function() {
      $(this).velocity(
        { opacity: "1", translateX: "0"},
        { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });
  };


  $(document).ready(function() {
    // Hardcoded .staggered-list scrollFire
    // var staggeredListOptions = [];
    // $('ul.staggered-list').each(function (i) {

    //   var label = 'scrollFire-' + i;
    //   $(this).addClass(label);
    //   staggeredListOptions.push(
    //     {selector: 'ul.staggered-list.' + label,
    //      offset: 200,
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
    // });
    // scrollFire(staggeredListOptions);

    // HammerJS, Swipe navigation

    // Touch Event
    var swipeLeft = false;
    var swipeRight = false;


    // Dismissible Collections
    $('.dismissable').each(function() {
      $(this).hammer({
        prevent_default: false
      }).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $this.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
            swipeLeft = true;
          }

          // Swipe Right
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).bind('panend', function(e) {
        // Reset if collection is moved back into original position
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
          swipeRight = false;
          swipeLeft = false;
        }

        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) { fullWidth = $this.innerWidth(); }
            else { fullWidth = -1 * $this.innerWidth(); }

            $this.velocity({ translateX: fullWidth,
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:
              function() {
                $this.css('border', 'none');
                $this.velocity({ height: 0, padding: 0,
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:
                    function() { $this.remove(); }
                  });
              }
            });
          }
          else {
            $this.velocity({ translateX: 0,
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });

    });


    // time = 0
    // // Vertical Staggered list
    // $('ul.staggered-list.vertical li').velocity(
    //     { translateY: "100px"},
    //     { duration: 0 });

    // $('ul.staggered-list.vertical li').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", translateY: "0"},
    //     { duration: 800, delay: time, easing: [60, 25] });
    //   time += 120;
    // });

    // // Fade in and Scale
    // $('.fade-in.scale').velocity(
    //     { scaleX: .4, scaleY: .4, translateX: -600},
    //     { duration: 0});
    // $('.fade-in').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
    //     { duration: 800, easing: [60, 10] });
    // });
  });
}( jQuery ));
;(function($) {

  var scrollFireEventsHandled = false;

  // Input: Array of JSON objects {selector, offset, callback}
  Materialize.scrollFire = function(options) {
    var onScroll = function() {
      var windowScroll = window.pageYOffset + window.innerHeight;

      for (var i = 0 ; i < options.length; i++) {
        // Get options from each line
        var value = options[i];
        var selector = value.selector,
            offset = value.offset,
            callback = value.callback;

        var currentElement = document.querySelector(selector);
        if ( currentElement !== null) {
          var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

          if (windowScroll > (elementOffset + offset)) {
            if (value.done !== true) {
              if (typeof(callback) === 'function') {
                callback.call(this, currentElement);
              } else if (typeof(callback) === 'string') {
                var callbackFunc = new Function(callback);
                callbackFunc(currentElement);
              }
              value.done = true;
            }
          }
        }
      }
    };


    var throttledScroll = Materialize.throttle(function() {
      onScroll();
    }, options.throttle || 100);

    if (!scrollFireEventsHandled) {
      window.addEventListener("scroll", throttledScroll);
      window.addEventListener("resize", throttledScroll);
      scrollFireEventsHandled = true;
    }

    // perform a scan once, after current execution context, and after dom is ready
    setTimeout(throttledScroll, 0);
  };

})(jQuery);
;/*!
 * pickadate.js v3.5.0, 2014/04/13
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( true )
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__))

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('jquery') )

    // Browser globals.
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root with a holder and then prepare it.
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) P.$root.html( createWrappedComponent() )
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root element’s jQuery object.
                    // * Workaround for iOS8 to bring the picker’s root into view.
                    P.$root.eq(0).focus()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$root.children()[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight ).close()
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                    // The focus is triggered *after* the close has completed - causing it
                    // to open again. So unbind and rebind the event at the next tick.
                    P.$root.off( 'focus.toOpen' ).eq(0).focus()
                    setTimeout( function() {
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )
                    }, 0 )
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // Remove the tabindex.
            attr('tabindex', -1).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // On focus/click, focus onto the root to open it up.
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {
                    event.preventDefault()
                    P.$root.eq(0).focus()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

        P.$root.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                // When something within the root is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the root so that users can click away
                            // from elements focused within the picker.
                            P.$root.eq(0).focus()
                        }
                    }
                }
            }).

            // Add/remove the “target” class on focus and blur.
            on({
                focus: function() {
                    $ELEMENT.addClass( CLASSES.target )
                },
                blur: function() {
                    $ELEMENT.removeClass( CLASSES.target )
                }
            }).

            // Open the picker and adjust the root “focused” state
            on( 'focus.toOpen', handleFocusToOpenEvent ).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$root.eq(0).focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear().close( true )
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$root

        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })


        // Insert the hidden input as specified in the settings.
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )
        else $ELEMENT.after( P._hidden )
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on “escape”.
        if ( keycode == 27 ) {
            P.close()
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Separated for IE
    function handleFocusToOpenEvent( event ) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // If it’s a focus event, add the “focused” class to the root.
        if ( event.type == 'focus' ) {
            P.$root.addClass( CLASSES.focused )
        }

        // And then finally open the picker.
        P.open()
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));


;/*!
 * Date picker for pickadate.js v3.5.0
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( true )
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, { format: formatString })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || !options.nav ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        var word = string.match( /\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn

        // Materialize modified
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        //Materialize modified
        createMonthLabel = function(override) {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

             // Materialize modified
            if (override == "short_months") {
              monthsCollection = settings.monthsShort;
            }

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths  && override == undefined) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth + ' browser-default',
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // Materialize modified
            if (override == "short_months")
                if (selectedObject != null)
                return _.node( 'div', monthsCollection[ selectedObject.month ] );
                else return _.node( 'div', monthsCollection[ viewsetObject.month ] );

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        // Materialize modified
        createYearLabel = function(override) {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                if ( settings.selectYears  && override == undefined ) {
                    return _.node( 'select',
                        _.group({
                            min: lowestYear,
                            max: highestYear,
                            i: 1,
                            node: 'option',
                            item: function( loopedYear ) {
                                return [

                                    // The looped year and no classes.
                                    loopedYear, 0,

                                    // Set the value and selected index.
                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                                ]
                            }
                        }),
                        settings.klass.selectYear + ' browser-default',
                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'
                    )
                }
            }

            // Materialize modified
            if (override == "raw")
                return _.node( 'div', focusedYear )

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


        // Materialize modified
        createDayLabel = function() {
                if (selectedObject != null)
                    return _.node( 'div', selectedObject.date)
                else return _.node( 'div', nowObject.date)
            }
        createWeekdayLabel = function() {
            var display_day;

            if (selectedObject != null)
                display_day = selectedObject.day;
            else
                display_day = nowObject.day;
            var weekday = settings.weekdaysFull[ display_day ]
            return weekday
        }


    // Create and return the entire calendar.
return _.node(
        // Date presentation View
        'div',
            _.node(
                'div',
                createWeekdayLabel(),
                "picker__weekday-display"
            )+
            _.node(
                // Div for short Month
                'div',
                createMonthLabel("short_months"),
                settings.klass.month_display
            )+
            _.node(
                // Div for Day
                'div',
                createDayLabel() ,
                settings.klass.day_display
            )+
            _.node(
                // Div for Year
                'div',
                createYearLabel("raw") ,
                settings.klass.year_display
            ),
        settings.klass.date_display
    )+
    // Calendar container
    _.node('div',
        _.node('div',
        ( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    )
    , settings.klass.calendar_container) // end calendar

     +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, "btn-flat picker__today",
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, "btn-flat picker__clear",
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, "btn-flat picker__close",
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Materialize modified
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',


            // Materialize Added klasses
            date_display: prefix + 'date-display',
            day_display: prefix + 'day-display',
            month_display: prefix + 'month-display',
            year_display: prefix + 'year-display',
            calendar_container: prefix + 'calendar-container',
            // end



            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));


;(function ($) {

  $.fn.characterCounter = function(){
    return this.each(function(){
      var $input = $(this);
      var $counterElement = $input.parent().find('span[class="character-counter"]');

      // character counter has already been added appended to the parent container
      if ($counterElement.length) {
        return;
      }

      var itHasLengthAttribute = $input.attr('data-length') !== undefined;

      if(itHasLengthAttribute){
        $input.on('input', updateCounter);
        $input.on('focus', updateCounter);
        $input.on('blur', removeCounterElement);

        addCounterElement($input);
      }

    });
  };

  function updateCounter(){
    var maxLength     = +$(this).attr('data-length'),
    actualLength      = +$(this).val().length,
    isValidLength     = actualLength <= maxLength;

    $(this).parent().find('span[class="character-counter"]')
                    .html( actualLength + '/' + maxLength);

    addInputStyle(isValidLength, $(this));
  }

  function addCounterElement($input) {
    var $counterElement = $input.parent().find('span[class="character-counter"]');

    if ($counterElement.length) {
      return;
    }

    $counterElement = $('<span/>')
                        .addClass('character-counter')
                        .css('float','right')
                        .css('font-size','12px')
                        .css('height', 1);

    $input.parent().append($counterElement);
  }

  function removeCounterElement(){
    $(this).parent().find('span[class="character-counter"]').html('');
  }

  function addInputStyle(isValidLength, $input){
    var inputHasInvalidClass = $input.hasClass('invalid');
    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('invalid');
    }
    else if(!isValidLength && !inputHasInvalidClass){
      $input.removeClass('valid');
      $input.addClass('invalid');
    }
  }

  $(document).ready(function(){
    $('input, textarea').characterCounter();
  });

}( jQuery ));
;(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        duration: 200, // ms
        dist: -100, // zoom scale TODO: make this more intuitive as an option
        shift: 0, // spacing for center image
        padding: 0, // Padding between non center items
        fullWidth: false, // Change to full width styles
        indicators: false, // Toggle indicators
        noWrap: false, // Don't wrap around and cycle through items.
        onCycleTo: null // Callback for when a new slide is cycled to.
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function(i) {

        var uniqueNamespace = namespace+i;
        var images, item_width, item_height, offset, center, pressed, dim, count,
            reference, referenceY, amplitude, target, velocity, scrolling,
            xform, frame, timestamp, ticker, dragged, vertical_dragged;
        var $indicators = $('<ul class="indicators"></ul>');
        var scrollingTimeout = null;


        // Initialize
        var view = $(this);
        var showIndicators = view.attr('data-indicators') || options.indicators;


        // Options
        var setCarouselHeight = function() {
          var firstImage = view.find('.carousel-item img').first();
          if (firstImage.length) {
            if (firstImage.prop('complete')) {
              view.css('height', firstImage.height());
            } else {
              firstImage.on('load', function(){
                view.css('height', $(this).height());
              });
            }
          } else {
            var imageHeight = view.find('.carousel-item').first().height();
            view.css('height', imageHeight);
          }
        };

        if (options.fullWidth) {
          options.dist = 0;
          setCarouselHeight();

          // Offset fixed items when indicators.
          if (showIndicators) {
            view.find('.carousel-fixed-item').addClass('with-indicators');
          }
        }


        // Don't double initialize.
        if (view.hasClass('initialized')) {
          // Recalculate variables
          $(window).trigger('resize');

          // Redraw carousel.
          $(this).trigger('carouselNext', [0.000001]);
          return true;
        }


        view.addClass('initialized');
        pressed = false;
        offset = target = 0;
        images = [];
        item_width = view.find('.carousel-item').first().innerWidth();
        item_height = view.find('.carousel-item').first().innerHeight();
        dim = item_width * 2 + options.padding;

        view.find('.carousel-item').each(function (i) {
          images.push($(this)[0]);
          if (showIndicators) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Add active to first by default.
            if (i === 0) {
              $indicator.addClass('active');
            }

            // Handle clicks on indicators.
            $indicator.click(function (e) {
              e.stopPropagation();

              var index = $(this).index();
              cycleTo(index);
            });
            $indicators.append($indicator);
          }
        });

        if (showIndicators) {
          view.append($indicators);
        }
        count = images.length;


        function setupEvents() {
          if (typeof window.ontouchstart !== 'undefined') {
            view[0].addEventListener('touchstart', tap);
            view[0].addEventListener('touchmove', drag);
            view[0].addEventListener('touchend', release);
          }
          view[0].addEventListener('mousedown', tap);
          view[0].addEventListener('mousemove', drag);
          view[0].addEventListener('mouseup', release);
          view[0].addEventListener('mouseleave', release);
          view[0].addEventListener('click', click);
        }

        function xpos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientX;
          }

          // mouse event
          return e.clientX;
        }

        function ypos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientY;
          }

          // mouse event
          return e.clientY;
        }

        function wrap(x) {
          return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;
        }

        function scroll(x) {
          // Track scrolling state
          scrolling = true;
          if (!view.hasClass('scrolling')) {
            view.addClass('scrolling');
          }
          if (scrollingTimeout != null) {
            window.clearTimeout(scrollingTimeout);
          }
          scrollingTimeout = window.setTimeout(function() {
            scrolling = false;
            view.removeClass('scrolling');
          }, options.duration);

          // Start actual scroll
          var i, half, delta, dir, tween, el, alignment, xTranslation;
          var lastCenter = center;

          offset = (typeof x === 'number') ? x : offset;
          center = Math.floor((offset + dim / 2) / dim);
          delta = offset - center * dim;
          dir = (delta < 0) ? 1 : -1;
          tween = -dir * delta * 2 / dim;
          half = count >> 1;

          if (!options.fullWidth) {
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';
            alignment += 'translateY(' + (view[0].clientHeight - item_height) / 2 + 'px)';
          } else {
            alignment = 'translateX(0)';
          }

          // Set indicator active
          if (showIndicators) {
            var diff = (center % count);
            var activeIndicator = $indicators.find('.indicator-item.active');
            if (activeIndicator.index() !== diff) {
              activeIndicator.removeClass('active');
              $indicators.find('.indicator-item').eq(diff).addClass('active');
            }
          }

          // center
          // Don't show wrapped items.
          if (!options.noWrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];

            // Add active class to center item.
            if (!$(el).hasClass('active')) {
              view.find('.carousel-item').removeClass('active');
              $(el).addClass('active');
            }
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween * i) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          for (i = 1; i <= half; ++i) {
            // right side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 + tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);
            }
            // Don't show wrapped items.
            if (!options.noWrap || center + i < count) {
              el = images[wrap(center + i)];
              el.style[xform] = alignment +
                ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }


            // left side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 - tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);
            }
            // Don't show wrapped items.
            if (!options.noWrap || center - i >= 0) {
              el = images[wrap(center - i)];
              el.style[xform] = alignment +
                ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
          }

          // center
          // Don't show wrapped items.
          if (!options.noWrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          // onCycleTo callback
          if (lastCenter !== center &&
              typeof(options.onCycleTo) === "function") {
            var $curr_item = view.find('.carousel-item').eq(wrap(center));
            options.onCycleTo.call(this, $curr_item, dragged);
          }
        }

        function track() {
          var now, elapsed, delta, v;

          now = Date.now();
          elapsed = now - timestamp;
          timestamp = now;
          delta = offset - frame;
          frame = offset;

          v = 1000 * delta / (1 + elapsed);
          velocity = 0.8 * v + 0.2 * velocity;
        }

        function autoScroll() {
          var elapsed, delta;

          if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = amplitude * Math.exp(-elapsed / options.duration);
            if (delta > 2 || delta < -2) {
                scroll(target - delta);
                requestAnimationFrame(autoScroll);
            } else {
                scroll(target);
            }
          }
        }

        function click(e) {
          // Disable clicks if carousel was dragged.
          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
            return false;

          } else if (!options.fullWidth) {
            var clickedIndex = $(e.target).closest('.carousel-item').index();
            var diff = (center % count) - clickedIndex;

            // Disable clicks if carousel was shifted by click
            if (diff !== 0) {
              e.preventDefault();
              e.stopPropagation();
            }
            cycleTo(clickedIndex);
          }
        }

        function cycleTo(n) {
          var diff = (center % count) - n;

          // Account for wraparound.
          if (!options.noWrap) {
            if (diff < 0) {
              if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }

            } else if (diff > 0) {
              if (Math.abs(diff - count) < diff) { diff -= count; }
            }
          }

          // Call prev or next accordingly.
          if (diff < 0) {
            view.trigger('carouselNext', [Math.abs(diff)]);

          } else if (diff > 0) {
            view.trigger('carouselPrev', [diff]);
          }
        }

        function tap(e) {
          e.preventDefault();
          pressed = true;
          dragged = false;
          vertical_dragged = false;
          reference = xpos(e);
          referenceY = ypos(e);

          velocity = amplitude = 0;
          frame = offset;
          timestamp = Date.now();
          clearInterval(ticker);
          ticker = setInterval(track, 100);
        }

        function drag(e) {
          var x, delta, deltaY;
          if (pressed) {
            x = xpos(e);
            y = ypos(e);
            delta = reference - x;
            deltaY = Math.abs(referenceY - y);
            if (deltaY < 30 && !vertical_dragged) {
              // If vertical scrolling don't allow dragging.
              if (delta > 2 || delta < -2) {
                dragged = true;
                reference = x;
                scroll(offset + delta);
              }

            } else if (dragged) {
              // If dragging don't allow vertical scroll.
              e.preventDefault();
              e.stopPropagation();
              return false;

            } else {
              // Vertical scrolling.
              vertical_dragged = true;
            }
          }

          if (dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }

        function release(e) {
          if (pressed) {
            pressed = false;
          } else {
            return;
          }

          clearInterval(ticker);
          target = offset;
          if (velocity > 10 || velocity < -10) {
            amplitude = 0.9 * velocity;
            target = offset + amplitude;
          }
          target = Math.round(target / dim) * dim;

          // No wrap of items.
          if (options.noWrap) {
            if (target >= dim * (count - 1)) {
              target = dim * (count - 1);
            } else if (target < 0) {
              target = 0;
            }
          }
          amplitude = target - offset;
          timestamp = Date.now();
          requestAnimationFrame(autoScroll);

          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
          }
          return false;
        }

        xform = 'transform';
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
          var e = prefix + 'Transform';
          if (typeof document.body.style[e] !== 'undefined') {
            xform = e;
            return false;
          }
          return true;
        });


        $(window).off('resize.carousel-'+uniqueNamespace).on('resize.carousel-'+uniqueNamespace, function() {
          if (options.fullWidth) {
            item_width = view.find('.carousel-item').first().innerWidth();
            item_height = view.find('.carousel-item').first().innerHeight();
            dim = item_width * 2 + options.padding;
            offset = center * 2 * item_width;
            target = offset;
          } else {
            scroll();
          }
        });

        setupEvents();
        scroll(offset);

        $(this).on('carouselNext', function(e, n) {
          if (n === undefined) {
            n = 1;
          }
          target = (dim * Math.round(offset / dim)) + (dim * n);
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselPrev', function(e, n) {
          if (n === undefined) {
            n = 1;
          }
          target = (dim * Math.round(offset / dim)) - (dim * n);
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselSet', function(e, n) {
          if (n === undefined) {
            n = 0;
          }
          cycleTo(n);
        });

      });



    },
    next : function(n) {
      $(this).trigger('carouselNext', [n]);
    },
    prev : function(n) {
      $(this).trigger('carouselPrev', [n]);
    },
    set : function(n) {
      $(this).trigger('carouselSet', [n]);
    }
  };


    $.fn.carousel = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );
      }
    }; // Plugin end
}( jQuery ));;(function ($) {

  var methods = {
  init: function (options) {
    return this.each(function() {
    var origin = $('#'+$(this).attr('data-activates'));
    var screen = $('body');

    // Creating tap target
    var tapTargetEl = $(this);
    var tapTargetWrapper = tapTargetEl.parent('.tap-target-wrapper');
    var tapTargetWave = tapTargetWrapper.find('.tap-target-wave');
    var tapTargetOriginEl = tapTargetWrapper.find('.tap-target-origin');
    var tapTargetContentEl = tapTargetEl.find('.tap-target-content');

    // Creating wrapper
    if (!tapTargetWrapper.length) {
      tapTargetWrapper = tapTargetEl.wrap($('<div class="tap-target-wrapper"></div>')).parent();
    }

    // Creating content
    if (!tapTargetContentEl.length) {
      tapTargetContentEl = $('<div class="tap-target-content"></div>');
      tapTargetEl.append(tapTargetContentEl);
    }

    // Creating foreground wave
    if (!tapTargetWave.length) {
      tapTargetWave = $('<div class="tap-target-wave"></div>');

      // Creating origin
      if (!tapTargetOriginEl.length) {
        tapTargetOriginEl = origin.clone(true, true);
        tapTargetOriginEl.addClass('tap-target-origin');
        tapTargetOriginEl.removeAttr('id');
        tapTargetOriginEl.removeAttr('style');
        tapTargetWave.append(tapTargetOriginEl);
      }

      tapTargetWrapper.append(tapTargetWave);
    }

    // Open
    var openTapTarget = function() {
      if (tapTargetWrapper.is('.open')) {
        return;
      }

      // Adding open class
      tapTargetWrapper.addClass('open');

      setTimeout(function() {
        tapTargetOriginEl.off('click.tapTarget').on('click.tapTarget', function(e) {
          closeTapTarget();
          tapTargetOriginEl.off('click.tapTarget');
        });

        $(document).off('click.tapTarget').on('click.tapTarget', function(e) {
          closeTapTarget();
          $(document).off('click.tapTarget');
        });

        var throttledCalc = Materialize.throttle(function() {
          calculateTapTarget();
        }, 200);
        $(window).off('resize.tapTarget').on('resize.tapTarget', throttledCalc);
      }, 0);
    };

    // Close
    var closeTapTarget = function(){
      if (!tapTargetWrapper.is('.open')) {
        return;
      }

      tapTargetWrapper.removeClass('open');
      tapTargetOriginEl.off('click.tapTarget')
      $(document).off('click.tapTarget');
      $(window).off('resize.tapTarget');
    };

    // Pre calculate
    var calculateTapTarget = function() {
      // Element or parent is fixed position?
      var isFixed = origin.css('position') === 'fixed';
      if (!isFixed) {
        var parents = origin.parents();
        for(var i = 0; i < parents.length; i++) {
          isFixed = $(parents[i]).css('position') == 'fixed';
          if (isFixed) {
            break;
          }
        }
      }

      // Calculating origin
      var originWidth = origin.outerWidth();
      var originHeight = origin.outerHeight();
      var originTop = isFixed ? origin.offset().top - $(document).scrollTop() : origin.offset().top;
      var originLeft = isFixed ? origin.offset().left - $(document).scrollLeft() : origin.offset().left;

      // Calculating screen
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var centerX = windowWidth / 2;
      var centerY = windowHeight / 2;
      var isLeft = originLeft <= centerX;
      var isRight = originLeft > centerX;
      var isTop = originTop <= centerY;
      var isBottom = originTop > centerY;
      var isCenterX = originLeft >= windowWidth*0.25 && originLeft <= windowWidth*0.75;
      var isCenterY = originTop >= windowHeight*0.25 && originTop <= windowHeight*0.75;

      // Calculating tap target
      var tapTargetWidth = tapTargetEl.outerWidth();
      var tapTargetHeight = tapTargetEl.outerHeight();
      var tapTargetTop = originTop + originHeight/2 - tapTargetHeight/2;
      var tapTargetLeft = originLeft + originWidth/2 - tapTargetWidth/2;
      var tapTargetPosition = isFixed ? 'fixed' : 'absolute';

      // Calculating content
      var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth/2 + originWidth;
      var tapTargetTextHeight = tapTargetHeight/2;
      var tapTargetTextTop = isTop ? tapTargetHeight/2 : 0;
      var tapTargetTextBottom = 0;
      var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth/2 - originWidth : 0;
      var tapTargetTextRight = 0;
      var tapTargetTextPadding = originWidth;
      var tapTargetTextAlign = isBottom ? 'bottom' : 'top';

      // Calculating wave
      var tapTargetWaveWidth = originWidth > originHeight ? originWidth*2 : originWidth*2;
      var tapTargetWaveHeight = tapTargetWaveWidth;
      var tapTargetWaveTop = tapTargetHeight/2 - tapTargetWaveHeight/2;
      var tapTargetWaveLeft = tapTargetWidth/2 - tapTargetWaveWidth/2;

      // Setting tap target
      var tapTargetWrapperCssObj = {};
      tapTargetWrapperCssObj.top = isTop ? tapTargetTop : '';
      tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth : '';
      tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight : '';
      tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft : '';
      tapTargetWrapperCssObj.position = tapTargetPosition;
      tapTargetWrapper.css(tapTargetWrapperCssObj);

      // Setting content
      tapTargetContentEl.css({
        width: tapTargetTextWidth,
        height: tapTargetTextHeight,
        top: tapTargetTextTop,
        right: tapTargetTextRight,
        bottom: tapTargetTextBottom,
        left: tapTargetTextLeft,
        padding: tapTargetTextPadding,
        verticalAlign: tapTargetTextAlign
      });

      // Setting wave
      tapTargetWave.css({
        top: tapTargetWaveTop,
        left: tapTargetWaveLeft,
        width: tapTargetWaveWidth,
        height: tapTargetWaveHeight
      });
    }

    if (options == 'open') {
      calculateTapTarget();
      openTapTarget();
    }

    if (options == 'close')
      closeTapTarget();
    });
  },
  open: function() {},
  close: function() {}
  };

  $.fn.tapTarget = function(methodOrOptions) {
  if (methods[methodOrOptions] || typeof methodOrOptions === 'object')
    return methods.init.apply( this, arguments );

  $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tap-target' );
  };

}( jQuery ));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(41)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\amatsuka\\Documents\\Projects\\FYPJ\\eien\\resources\\assets\\js\\components\\Example.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Example.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46774f4e", Component.options)
  } else {
    hotAPI.reload("data-v-46774f4e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Example Component")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    I'm an example component!\n                ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46774f4e", module.exports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
__webpack_require__(16);
module.exports = __webpack_require__(17);


/***/ })

},[44]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3M/YWIxNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvbWluaW1hbC5zY3NzPzhiMTciLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWxpemUtY3NzL2Rpc3QvanMvbWF0ZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlP2U2MGEiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsInVzZSIsIndpbmRvdyIsIlZlZVZhbGlkYXRlIiwiYXBwIiwiZWwiLCIkIiwic2lkZU5hdiIsInBhcmFsbGF4IiwiXyIsImpRdWVyeSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7O0FBTUEsbUJBQUFBLENBQVEsRUFBUjs7QUFFQTs7Ozs7O0FBTUFDLElBQUlDLFNBQUosQ0FBYyxTQUFkLEVBQXlCLG1CQUFBRixDQUFRLEVBQVIsQ0FBekI7O0FBRUFDLElBQUlFLEdBQUosQ0FBUUMsT0FBT0MsV0FBZjs7QUFFQSxJQUFNQyxNQUFNLElBQUlMLEdBQUosQ0FBUTtBQUNoQk0sTUFBSTtBQURZLENBQVIsQ0FBWjs7QUFJQTs7O0FBR0FDLEVBQUUsWUFBVztBQUNUQSxJQUFF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QUc7QUFDSCxDQUFDLGFBQWE7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gscUJBQXFCLFdBQVcsR0FBRyx1RUFBdUU7O0FBRTFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFX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Q0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixzQ0FBc0M7QUFDM0QsdUJBQXVCLDBDQUEwQztBQUNqRSx1QkFBdUIsMENBQTBDOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxRUFBcUUsR0FBRyx1Q0FBdUM7QUFDckk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiw4REFBOEQsR0FBRyxnQkFBZ0I7QUFDM0c7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUcsRUFBRTs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixXQUFXLEVBQUU7QUFDN0Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixlQUFlO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLOztBQUVMO0FBQ0EsQ0FBQyxhQUFhO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7O0FBSWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7OztBQUliO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7Ozs7QUFJTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUUsc0JBQXNCO0FBQzNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QixxQkFBcUIsUUFBUTtBQUM3QixxQkFBcUIsUUFBUTtBQUM3QixxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLHFGQUFxRjs7QUFFcEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjs7OztBQUlBO0FBQ0E7OztBQUdBLENBQUM7OztBQUdELENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xELHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLGFBQWE7QUFDekQ7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLDJDQUEyQyxnQ0FBZ0MsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLGFBQWE7O0FBRXhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw0QkFBNEI7O0FBRXhEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4Qyw0QkFBNEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELDRCQUE0QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsaURBQWlELHFCQUFxQjtBQUN0RSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUE0QztBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUVBQXlFLDRDQUE0QztBQUNySDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxnREFBZ0QsdUJBQXVCO0FBQ3ZFO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULE9BQU87Ozs7QUFJUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOLENBQUMsYUFBYTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7O0FDeG1RRDtBQUNBO0FBQ0Esd0JBQXFKO0FBQ3JKO0FBQ0Esd0JBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7OztBQzNCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbERBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ2V4YW1wbGUnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvRXhhbXBsZS52dWUnKSk7XG5cblZ1ZS51c2Uod2luZG93LlZlZVZhbGlkYXRlKTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbn0pO1xuXG4vKlxuICogSW5pdGlhbGl6YXRpb25zXG4gKi9cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmJ1dHRvbi1jb2xsYXBzZScpLnNpZGVOYXYoKTtcbiAgICAkKCcucGFyYWxsYXgnKS5wYXJhbGxheCgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvbWluaW1hbC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5FeGFtcGxlIENvbXBvbmVudDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBFeGFtcGxlLnZ1ZT82M2M5MWYwZSIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8vIE1hdGVyaWFsaXplIGlzIGluY29tcGF0aWJsZSB3aXRoIGpRdWVyeSA+IDMueFxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnbWF0ZXJpYWxpemUtY3NzL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMnKTtcblxucmVxdWlyZSgnbWF0ZXJpYWxpemUtY3NzL2Rpc3QvanMvbWF0ZXJpYWxpemUnKTtcblxuLyoqXG4gKiBWdWUgaXMgYSBtb2Rlcm4gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyBpbnRlcmFjdGl2ZSB3ZWIgaW50ZXJmYWNlc1xuICogdXNpbmcgcmVhY3RpdmUgZGF0YSBiaW5kaW5nIGFuZCByZXVzYWJsZSBjb21wb25lbnRzLiBWdWUncyBBUEkgaXMgY2xlYW5cbiAqIGFuZCBzaW1wbGUsIGxlYXZpbmcgeW91IHRvIGZvY3VzIG9uIGJ1aWxkaW5nIHlvdXIgbmV4dCBncmVhdCBwcm9qZWN0LlxuICovXG5cbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAgICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxufTtcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cbndpbmRvdy5WZWVWYWxpZGF0ZSA9IHJlcXVpcmUoJ3ZlZS12YWxpZGF0ZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCIvKiFcbiAqIE1hdGVyaWFsaXplIHYwLjk4LjIgKGh0dHA6Ly9tYXRlcmlhbGl6ZWNzcy5jb20pXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1IE1hdGVyaWFsaXplXG4gKiBNSVQgTGljZW5zZSAoaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0RvZ2ZhbG8vbWF0ZXJpYWxpemUvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbi8vIENoZWNrIGZvciBqUXVlcnkuXG5pZiAodHlwZW9mKGpRdWVyeSkgPT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBqUXVlcnk7XG4gIC8vIENoZWNrIGlmIHJlcXVpcmUgaXMgYSBkZWZpbmVkIGZ1bmN0aW9uLlxuICBpZiAodHlwZW9mKHJlcXVpcmUpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgalF1ZXJ5ID0gJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAvLyBFbHNlIHVzZSB0aGUgZG9sbGFyIHNpZ24gYWxpYXMuXG4gIH0gZWxzZSB7XG4gICAgalF1ZXJ5ID0gJDtcbiAgfVxufVxuOy8qXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjMgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXG4gKlxuICogVXNlcyB0aGUgYnVpbHQgaW4gZWFzaW5nIGNhcGFiaWxpdGllcyBhZGRlZCBJbiBqUXVlcnkgMS4xXG4gKiB0byBvZmZlciBtdWx0aXBsZSBlYXNpbmcgb3B0aW9uc1xuICpcbiAqIFRFUk1TIE9GIFVTRSAtIGpRdWVyeSBFYXNpbmdcbiAqXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMDggR2VvcmdlIE1jR2lubGV5IFNtaXRoXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2ZcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0XG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFsc1xuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTllcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxuICogIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRFxuICogQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAqICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiovXG5cbi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnSW5uSW5nIHZhbHVlLCBjOiBjaGFuZ2UgSW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5qUXVlcnkuZWFzaW5nWydqc3dpbmcnXSA9IGpRdWVyeS5lYXNpbmdbJ3N3aW5nJ107XG5cbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5lYXNpbmcsXG57XG5cdGRlZjogJ2Vhc2VPdXRRdWFkJyxcblx0c3dpbmc6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0Ly9hbGVydChqUXVlcnkuZWFzaW5nLmRlZmF1bHQpO1xuXHRcdHJldHVybiBqUXVlcnkuZWFzaW5nW2pRdWVyeS5lYXNpbmcuZGVmXSh4LCB0LCBiLCBjLCBkKTtcblx0fSxcblx0ZWFzZUluUXVhZDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyoodC89ZCkqdCArIGI7XG5cdH0sXG5cdGVhc2VPdXRRdWFkOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAtYyAqKHQvPWQpKih0LTIpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0UXVhZDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCArIGI7XG5cdFx0cmV0dXJuIC1jLzIgKiAoKC0tdCkqKHQtMikgLSAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbkN1YmljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjKih0Lz1kKSp0KnQgKyBiO1xuXHR9LFxuXHRlYXNlT3V0Q3ViaWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMqKCh0PXQvZC0xKSp0KnQgKyAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQgKyBiO1xuXHRcdHJldHVybiBjLzIqKCh0LT0yKSp0KnQgKyAyKSArIGI7XG5cdH0sXG5cdGVhc2VJblF1YXJ0OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjKih0Lz1kKSp0KnQqdCArIGI7XG5cdH0sXG5cdGVhc2VPdXRRdWFydDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gLWMgKiAoKHQ9dC9kLTEpKnQqdCp0IC0gMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQgKyBiO1xuXHRcdHJldHVybiAtYy8yICogKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcblx0fSxcblx0ZWFzZUluUXVpbnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQqdCp0KnQgKyBiO1xuXHR9LFxuXHRlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMqKCh0PXQvZC0xKSp0KnQqdCp0ICsgMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRRdWludDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQqdCArIGI7XG5cdFx0cmV0dXJuIGMvMiooKHQtPTIpKnQqdCp0KnQgKyAyKSArIGI7XG5cdH0sXG5cdGVhc2VJblNpbmU6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIC1jICogTWF0aC5jb3ModC9kICogKE1hdGguUEkvMikpICsgYyArIGI7XG5cdH0sXG5cdGVhc2VPdXRTaW5lOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjICogTWF0aC5zaW4odC9kICogKE1hdGguUEkvMikpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0U2luZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gLWMvMiAqIChNYXRoLmNvcyhNYXRoLlBJKnQvZCkgLSAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbkV4cG86IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICh0PT0wKSA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodC9kIC0gMSkpICsgYjtcblx0fSxcblx0ZWFzZU91dEV4cG86IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICh0PT1kKSA/IGIrYyA6IGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQvZCkgKyAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKHQ9PTApIHJldHVybiBiO1xuXHRcdGlmICh0PT1kKSByZXR1cm4gYitjO1xuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcblx0XHRyZXR1cm4gYy8yICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xuXHR9LFxuXHRlYXNlSW5DaXJjOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0Lz1kKSp0KSAtIDEpICsgYjtcblx0fSxcblx0ZWFzZU91dENpcmM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0PXQvZC0xKSp0KSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIC1jLzIgKiAoTWF0aC5zcXJ0KDEgLSB0KnQpIC0gMSkgKyBiO1xuXHRcdHJldHVybiBjLzIgKiAoTWF0aC5zcXJ0KDEgLSAodC09MikqdCkgKyAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbkVsYXN0aWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0dmFyIHM9MS43MDE1ODt2YXIgcD0wO3ZhciBhPWM7XG5cdFx0aWYgKHQ9PTApIHJldHVybiBiOyAgaWYgKCh0Lz1kKT09MSkgcmV0dXJuIGIrYzsgIGlmICghcCkgcD1kKi4zO1xuXHRcdGlmIChhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyB2YXIgcz1wLzQ7IH1cblx0XHRlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcblx0XHRyZXR1cm4gLShhKk1hdGgucG93KDIsMTAqKHQtPTEpKSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSkgKyBiO1xuXHR9LFxuXHRlYXNlT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHR2YXIgcz0xLjcwMTU4O3ZhciBwPTA7dmFyIGE9Yztcblx0XHRpZiAodD09MCkgcmV0dXJuIGI7ICBpZiAoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYgKCFwKSBwPWQqLjM7XG5cdFx0aWYgKGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHZhciBzPXAvNDsgfVxuXHRcdGVsc2UgdmFyIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luIChjL2EpO1xuXHRcdHJldHVybiBhKk1hdGgucG93KDIsLTEwKnQpICogTWF0aC5zaW4oICh0KmQtcykqKDIqTWF0aC5QSSkvcCApICsgYyArIGI7XG5cdH0sXG5cdGVhc2VJbk91dEVsYXN0aWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0dmFyIHM9MS43MDE1ODt2YXIgcD0wO3ZhciBhPWM7XG5cdFx0aWYgKHQ9PTApIHJldHVybiBiOyAgaWYgKCh0Lz1kLzIpPT0yKSByZXR1cm4gYitjOyAgaWYgKCFwKSBwPWQqKC4zKjEuNSk7XG5cdFx0aWYgKGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHZhciBzPXAvNDsgfVxuXHRcdGVsc2UgdmFyIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luIChjL2EpO1xuXHRcdGlmICh0IDwgMSkgcmV0dXJuIC0uNSooYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcblx0XHRyZXR1cm4gYSpNYXRoLnBvdygyLC0xMCoodC09MSkpICogTWF0aC5zaW4oICh0KmQtcykqKDIqTWF0aC5QSSkvcCApKi41ICsgYyArIGI7XG5cdH0sXG5cdGVhc2VJbkJhY2s6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkLCBzKSB7XG5cdFx0aWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcblx0XHRyZXR1cm4gYyoodC89ZCkqdCooKHMrMSkqdCAtIHMpICsgYjtcblx0fSxcblx0ZWFzZU91dEJhY2s6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkLCBzKSB7XG5cdFx0aWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcblx0XHRyZXR1cm4gYyooKHQ9dC9kLTEpKnQqKChzKzEpKnQgKyBzKSArIDEpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0QmFjazogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQsIHMpIHtcblx0XHRpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqKHQqdCooKChzKj0oMS41MjUpKSsxKSp0IC0gcykpICsgYjtcblx0XHRyZXR1cm4gYy8yKigodC09MikqdCooKChzKj0oMS41MjUpKSsxKSp0ICsgcykgKyAyKSArIGI7XG5cdH0sXG5cdGVhc2VJbkJvdW5jZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyAtIGpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZSAoeCwgZC10LCAwLCBjLCBkKSArIGI7XG5cdH0sXG5cdGVhc2VPdXRCb3VuY2U6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKCh0Lz1kKSA8ICgxLzIuNzUpKSB7XG5cdFx0XHRyZXR1cm4gYyooNy41NjI1KnQqdCkgKyBiO1xuXHRcdH0gZWxzZSBpZiAodCA8ICgyLzIuNzUpKSB7XG5cdFx0XHRyZXR1cm4gYyooNy41NjI1Kih0LT0oMS41LzIuNzUpKSp0ICsgLjc1KSArIGI7XG5cdFx0fSBlbHNlIGlmICh0IDwgKDIuNS8yLjc1KSkge1xuXHRcdFx0cmV0dXJuIGMqKDcuNTYyNSoodC09KDIuMjUvMi43NSkpKnQgKyAuOTM3NSkgKyBiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gYyooNy41NjI1Kih0LT0oMi42MjUvMi43NSkpKnQgKyAuOTg0Mzc1KSArIGI7XG5cdFx0fVxuXHR9LFxuXHRlYXNlSW5PdXRCb3VuY2U6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKHQgPCBkLzIpIHJldHVybiBqUXVlcnkuZWFzaW5nLmVhc2VJbkJvdW5jZSAoeCwgdCoyLCAwLCBjLCBkKSAqIC41ICsgYjtcblx0XHRyZXR1cm4galF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlICh4LCB0KjItZCwgMCwgYywgZCkgKiAuNSArIGMqLjUgKyBiO1xuXHR9XG59KTtcblxuLypcbiAqXG4gKiBURVJNUyBPRiBVU0UgLSBFQVNJTkcgRVFVQVRJT05TXG4gKlxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCDCqSAyMDAxIFJvYmVydCBQZW5uZXJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZlxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3RcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgYXV0aG9yIG5vciB0aGUgbmFtZXMgb2YgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2VcbiAqIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gKiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEXG4gKiBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKlxuICovOy8vIEN1c3RvbSBFYXNpbmdcbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5lYXNpbmcsXG57XG4gIGVhc2VJbk91dE1hdGVyaWFsOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcbiAgICByZXR1cm4gYy80KigodC09MikqdCp0ICsgMikgKyBiO1xuICB9XG59KTs7LyohIFZlbG9jaXR5SlMub3JnICgxLjIuMykuIChDKSAyMDE0IEp1bGlhbiBTaGFwaXJvLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqL1xuLyohIFZlbG9jaXR5SlMub3JnIGpRdWVyeSBTaGltICgxLjAuMSkuIChDKSAyMDE0IFRoZSBqUXVlcnkgRm91bmRhdGlvbi4gTUlUIEBsaWNlbnNlOiBlbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UuICovXG4vKiEgTm90ZSB0aGF0IHRoaXMgaGFzIGJlZW4gbW9kaWZpZWQgYnkgTWF0ZXJpYWxpemUgdG8gY29uZmlybSB0aGF0IFZlbG9jaXR5IGlzIG5vdCBhbHJlYWR5IGJlaW5nIGltcG9ydGVkLiAqL1xualF1ZXJ5LlZlbG9jaXR5P2NvbnNvbGUubG9nKFwiVmVsb2NpdHkgaXMgYWxyZWFkeSBsb2FkZWQuIFlvdSBtYXkgYmUgbmVlZGxlc3NseSBpbXBvcnRpbmcgVmVsb2NpdHkgYWdhaW47IG5vdGUgdGhhdCBNYXRlcmlhbGl6ZSBpbmNsdWRlcyBWZWxvY2l0eS5cIik6KCFmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3ZhciB0PWUubGVuZ3RoLGE9ci50eXBlKGUpO3JldHVyblwiZnVuY3Rpb25cIj09PWF8fHIuaXNXaW5kb3coZSk/ITE6MT09PWUubm9kZVR5cGUmJnQ/ITA6XCJhcnJheVwiPT09YXx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlfWlmKCFlLmpRdWVyeSl7dmFyIHI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IHIuZm4uaW5pdChlLHQpfTtyLmlzV2luZG93PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT1lLndpbmRvd30sci50eXBlPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW2kuY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9LHIuaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cImFycmF5XCI9PT1yLnR5cGUoZSl9LHIuaXNQbGFpbk9iamVjdD1mdW5jdGlvbihlKXt2YXIgdDtpZighZXx8XCJvYmplY3RcIiE9PXIudHlwZShlKXx8ZS5ub2RlVHlwZXx8ci5pc1dpbmRvdyhlKSlyZXR1cm4hMTt0cnl7aWYoZS5jb25zdHJ1Y3RvciYmIW8uY2FsbChlLFwiY29uc3RydWN0b3JcIikmJiFvLmNhbGwoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGEpe3JldHVybiExfWZvcih0IGluIGUpO3JldHVybiB2b2lkIDA9PT10fHxvLmNhbGwoZSx0KX0sci5lYWNoPWZ1bmN0aW9uKGUscixhKXt2YXIgbixvPTAsaT1lLmxlbmd0aCxzPXQoZSk7aWYoYSl7aWYocylmb3IoO2k+byYmKG49ci5hcHBseShlW29dLGEpLG4hPT0hMSk7bysrKTtlbHNlIGZvcihvIGluIGUpaWYobj1yLmFwcGx5KGVbb10sYSksbj09PSExKWJyZWFrfWVsc2UgaWYocylmb3IoO2k+byYmKG49ci5jYWxsKGVbb10sbyxlW29dKSxuIT09ITEpO28rKyk7ZWxzZSBmb3IobyBpbiBlKWlmKG49ci5jYWxsKGVbb10sbyxlW29dKSxuPT09ITEpYnJlYWs7cmV0dXJuIGV9LHIuZGF0YT1mdW5jdGlvbihlLHQsbil7aWYodm9pZCAwPT09bil7dmFyIG89ZVtyLmV4cGFuZG9dLGk9byYmYVtvXTtpZih2b2lkIDA9PT10KXJldHVybiBpO2lmKGkmJnQgaW4gaSlyZXR1cm4gaVt0XX1lbHNlIGlmKHZvaWQgMCE9PXQpe3ZhciBvPWVbci5leHBhbmRvXXx8KGVbci5leHBhbmRvXT0rK3IudXVpZCk7cmV0dXJuIGFbb109YVtvXXx8e30sYVtvXVt0XT1uLG59fSxyLnJlbW92ZURhdGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj1lW3IuZXhwYW5kb10sbz1uJiZhW25dO28mJnIuZWFjaCh0LGZ1bmN0aW9uKGUsdCl7ZGVsZXRlIG9bdF19KX0sci5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LGEsbixvLGkscz1hcmd1bWVudHNbMF18fHt9LGw9MSx1PWFyZ3VtZW50cy5sZW5ndGgsYz0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBzJiYoYz1zLHM9YXJndW1lbnRzW2xdfHx7fSxsKyspLFwib2JqZWN0XCIhPXR5cGVvZiBzJiZcImZ1bmN0aW9uXCIhPT1yLnR5cGUocykmJihzPXt9KSxsPT09dSYmKHM9dGhpcyxsLS0pO3U+bDtsKyspaWYobnVsbCE9KG89YXJndW1lbnRzW2xdKSlmb3IobiBpbiBvKWU9c1tuXSxhPW9bbl0scyE9PWEmJihjJiZhJiYoci5pc1BsYWluT2JqZWN0KGEpfHwodD1yLmlzQXJyYXkoYSkpKT8odD8odD0hMSxpPWUmJnIuaXNBcnJheShlKT9lOltdKTppPWUmJnIuaXNQbGFpbk9iamVjdChlKT9lOnt9LHNbbl09ci5leHRlbmQoYyxpLGEpKTp2b2lkIDAhPT1hJiYoc1tuXT1hKSk7cmV0dXJuIHN9LHIucXVldWU9ZnVuY3Rpb24oZSxhLG4pe2Z1bmN0aW9uIG8oZSxyKXt2YXIgYT1yfHxbXTtyZXR1cm4gbnVsbCE9ZSYmKHQoT2JqZWN0KGUpKT8hZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9K3QubGVuZ3RoLGE9MCxuPWUubGVuZ3RoO3I+YTspZVtuKytdPXRbYSsrXTtpZihyIT09cilmb3IoO3ZvaWQgMCE9PXRbYV07KWVbbisrXT10W2ErK107cmV0dXJuIGUubGVuZ3RoPW4sZX0oYSxcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6W10ucHVzaC5jYWxsKGEsZSkpLGF9aWYoZSl7YT0oYXx8XCJmeFwiKStcInF1ZXVlXCI7dmFyIGk9ci5kYXRhKGUsYSk7cmV0dXJuIG4/KCFpfHxyLmlzQXJyYXkobik/aT1yLmRhdGEoZSxhLG8obikpOmkucHVzaChuKSxpKTppfHxbXX19LHIuZGVxdWV1ZT1mdW5jdGlvbihlLHQpe3IuZWFjaChlLm5vZGVUeXBlP1tlXTplLGZ1bmN0aW9uKGUsYSl7dD10fHxcImZ4XCI7dmFyIG49ci5xdWV1ZShhLHQpLG89bi5zaGlmdCgpO1wiaW5wcm9ncmVzc1wiPT09byYmKG89bi5zaGlmdCgpKSxvJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxvLmNhbGwoYSxmdW5jdGlvbigpe3IuZGVxdWV1ZShhLHQpfSkpfSl9LHIuZm49ci5wcm90b3R5cGU9e2luaXQ6ZnVuY3Rpb24oZSl7aWYoZS5ub2RlVHlwZSlyZXR1cm4gdGhpc1swXT1lLHRoaXM7dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgRE9NIG5vZGUuXCIpfSxvZmZzZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdD90aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOnt0b3A6MCxsZWZ0OjB9O3JldHVybnt0b3A6dC50b3ArKGUucGFnZVlPZmZzZXR8fGRvY3VtZW50LnNjcm9sbFRvcHx8MCktKGRvY3VtZW50LmNsaWVudFRvcHx8MCksbGVmdDp0LmxlZnQrKGUucGFnZVhPZmZzZXR8fGRvY3VtZW50LnNjcm9sbExlZnR8fDApLShkb2N1bWVudC5jbGllbnRMZWZ0fHwwKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2Zvcih2YXIgZT10aGlzLm9mZnNldFBhcmVudHx8ZG9jdW1lbnQ7ZSYmXCJodG1sXCI9PT0hZS5ub2RlVHlwZS50b0xvd2VyQ2FzZSYmXCJzdGF0aWNcIj09PWUuc3R5bGUucG9zaXRpb247KWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fGRvY3VtZW50fXZhciB0PXRoaXNbMF0sZT1lLmFwcGx5KHQpLGE9dGhpcy5vZmZzZXQoKSxuPS9eKD86Ym9keXxodG1sKSQvaS50ZXN0KGUubm9kZU5hbWUpP3t0b3A6MCxsZWZ0OjB9OnIoZSkub2Zmc2V0KCk7cmV0dXJuIGEudG9wLT1wYXJzZUZsb2F0KHQuc3R5bGUubWFyZ2luVG9wKXx8MCxhLmxlZnQtPXBhcnNlRmxvYXQodC5zdHlsZS5tYXJnaW5MZWZ0KXx8MCxlLnN0eWxlJiYobi50b3ArPXBhcnNlRmxvYXQoZS5zdHlsZS5ib3JkZXJUb3BXaWR0aCl8fDAsbi5sZWZ0Kz1wYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKXx8MCkse3RvcDphLnRvcC1uLnRvcCxsZWZ0OmEubGVmdC1uLmxlZnR9fX07dmFyIGE9e307ci5leHBhbmRvPVwidmVsb2NpdHlcIisobmV3IERhdGUpLmdldFRpbWUoKSxyLnV1aWQ9MDtmb3IodmFyIG49e30sbz1uLmhhc093blByb3BlcnR5LGk9bi50b1N0cmluZyxzPVwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxsPTA7bDxzLmxlbmd0aDtsKyspbltcIltvYmplY3QgXCIrc1tsXStcIl1cIl09c1tsXS50b0xvd2VyQ2FzZSgpO3IuZm4uaW5pdC5wcm90b3R5cGU9ci5mbixlLlZlbG9jaXR5PXtVdGlsaXRpZXM6cn19fSh3aW5kb3cpLGZ1bmN0aW9uKGUpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTplKCl9KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxyLGEpe2Z1bmN0aW9uIG4oZSl7Zm9yKHZhciB0PS0xLHI9ZT9lLmxlbmd0aDowLGE9W107Kyt0PHI7KXt2YXIgbj1lW3RdO24mJmEucHVzaChuKX1yZXR1cm4gYX1mdW5jdGlvbiBvKGUpe3JldHVybiBtLmlzV3JhcHBlZChlKT9lPVtdLnNsaWNlLmNhbGwoZSk6bS5pc05vZGUoZSkmJihlPVtlXSksZX1mdW5jdGlvbiBpKGUpe3ZhciB0PWYuZGF0YShlLFwidmVsb2NpdHlcIik7cmV0dXJuIG51bGw9PT10P2E6dH1mdW5jdGlvbiBzKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5yb3VuZCh0KmUpKigxL2UpfX1mdW5jdGlvbiBsKGUscixhLG4pe2Z1bmN0aW9uIG8oZSx0KXtyZXR1cm4gMS0zKnQrMyplfWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gMyp0LTYqZX1mdW5jdGlvbiBzKGUpe3JldHVybiAzKmV9ZnVuY3Rpb24gbChlLHQscil7cmV0dXJuKChvKHQscikqZStpKHQscikpKmUrcyh0KSkqZX1mdW5jdGlvbiB1KGUsdCxyKXtyZXR1cm4gMypvKHQscikqZSplKzIqaSh0LHIpKmUrcyh0KX1mdW5jdGlvbiBjKHQscil7Zm9yKHZhciBuPTA7bT5uOysrbil7dmFyIG89dShyLGUsYSk7aWYoMD09PW8pcmV0dXJuIHI7dmFyIGk9bChyLGUsYSktdDtyLT1pL299cmV0dXJuIHJ9ZnVuY3Rpb24gcCgpe2Zvcih2YXIgdD0wO2I+dDsrK3Qpd1t0XT1sKHQqeCxlLGEpfWZ1bmN0aW9uIGYodCxyLG4pe3ZhciBvLGkscz0wO2RvIGk9cisobi1yKS8yLG89bChpLGUsYSktdCxvPjA/bj1pOnI9aTt3aGlsZShNYXRoLmFicyhvKT5oJiYrK3M8dik7cmV0dXJuIGl9ZnVuY3Rpb24gZCh0KXtmb3IodmFyIHI9MCxuPTEsbz1iLTE7biE9byYmd1tuXTw9dDsrK24pcis9eDstLW47dmFyIGk9KHQtd1tuXSkvKHdbbisxXS13W25dKSxzPXIraSp4LGw9dShzLGUsYSk7cmV0dXJuIGw+PXk/Yyh0LHMpOjA9PWw/czpmKHQscixyK3gpfWZ1bmN0aW9uIGcoKXtWPSEwLChlIT1yfHxhIT1uKSYmcCgpfXZhciBtPTQseT0uMDAxLGg9MWUtNyx2PTEwLGI9MTEseD0xLyhiLTEpLFM9XCJGbG9hdDMyQXJyYXlcImluIHQ7aWYoNCE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciBQPTA7ND5QOysrUClpZihcIm51bWJlclwiIT10eXBlb2YgYXJndW1lbnRzW1BdfHxpc05hTihhcmd1bWVudHNbUF0pfHwhaXNGaW5pdGUoYXJndW1lbnRzW1BdKSlyZXR1cm4hMTtlPU1hdGgubWluKGUsMSksYT1NYXRoLm1pbihhLDEpLGU9TWF0aC5tYXgoZSwwKSxhPU1hdGgubWF4KGEsMCk7dmFyIHc9Uz9uZXcgRmxvYXQzMkFycmF5KGIpOm5ldyBBcnJheShiKSxWPSExLEM9ZnVuY3Rpb24odCl7cmV0dXJuIFZ8fGcoKSxlPT09ciYmYT09PW4/dDowPT09dD8wOjE9PT10PzE6bChkKHQpLHIsbil9O0MuZ2V0Q29udHJvbFBvaW50cz1mdW5jdGlvbigpe3JldHVyblt7eDplLHk6cn0se3g6YSx5Om59XX07dmFyIFQ9XCJnZW5lcmF0ZUJlemllcihcIitbZSxyLGEsbl0rXCIpXCI7cmV0dXJuIEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gVH0sQ31mdW5jdGlvbiB1KGUsdCl7dmFyIHI9ZTtyZXR1cm4gbS5pc1N0cmluZyhlKT9iLkVhc2luZ3NbZV18fChyPSExKTpyPW0uaXNBcnJheShlKSYmMT09PWUubGVuZ3RoP3MuYXBwbHkobnVsbCxlKTptLmlzQXJyYXkoZSkmJjI9PT1lLmxlbmd0aD94LmFwcGx5KG51bGwsZS5jb25jYXQoW3RdKSk6bS5pc0FycmF5KGUpJiY0PT09ZS5sZW5ndGg/bC5hcHBseShudWxsLGUpOiExLHI9PT0hMSYmKHI9Yi5FYXNpbmdzW2IuZGVmYXVsdHMuZWFzaW5nXT9iLmRlZmF1bHRzLmVhc2luZzp2KSxyfWZ1bmN0aW9uIGMoZSl7aWYoZSl7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCkscj1iLlN0YXRlLmNhbGxzLmxlbmd0aDtyPjFlNCYmKGIuU3RhdGUuY2FsbHM9bihiLlN0YXRlLmNhbGxzKSk7Zm9yKHZhciBvPTA7cj5vO28rKylpZihiLlN0YXRlLmNhbGxzW29dKXt2YXIgcz1iLlN0YXRlLmNhbGxzW29dLGw9c1swXSx1PXNbMl0sZD1zWzNdLGc9ISFkLHk9bnVsbDtkfHwoZD1iLlN0YXRlLmNhbGxzW29dWzNdPXQtMTYpO2Zvcih2YXIgaD1NYXRoLm1pbigodC1kKS91LmR1cmF0aW9uLDEpLHY9MCx4PWwubGVuZ3RoO3g+djt2Kyspe3ZhciBQPWxbdl0sVj1QLmVsZW1lbnQ7aWYoaShWKSl7dmFyIEM9ITE7aWYodS5kaXNwbGF5IT09YSYmbnVsbCE9PXUuZGlzcGxheSYmXCJub25lXCIhPT11LmRpc3BsYXkpe2lmKFwiZmxleFwiPT09dS5kaXNwbGF5KXt2YXIgVD1bXCItd2Via2l0LWJveFwiLFwiLW1vei1ib3hcIixcIi1tcy1mbGV4Ym94XCIsXCItd2Via2l0LWZsZXhcIl07Zi5lYWNoKFQsZnVuY3Rpb24oZSx0KXtTLnNldFByb3BlcnR5VmFsdWUoVixcImRpc3BsYXlcIix0KX0pfVMuc2V0UHJvcGVydHlWYWx1ZShWLFwiZGlzcGxheVwiLHUuZGlzcGxheSl9dS52aXNpYmlsaXR5IT09YSYmXCJoaWRkZW5cIiE9PXUudmlzaWJpbGl0eSYmUy5zZXRQcm9wZXJ0eVZhbHVlKFYsXCJ2aXNpYmlsaXR5XCIsdS52aXNpYmlsaXR5KTtmb3IodmFyIGsgaW4gUClpZihcImVsZW1lbnRcIiE9PWspe3ZhciBBLEY9UFtrXSxqPW0uaXNTdHJpbmcoRi5lYXNpbmcpP2IuRWFzaW5nc1tGLmVhc2luZ106Ri5lYXNpbmc7aWYoMT09PWgpQT1GLmVuZFZhbHVlO2Vsc2V7dmFyIEU9Ri5lbmRWYWx1ZS1GLnN0YXJ0VmFsdWU7aWYoQT1GLnN0YXJ0VmFsdWUrRSpqKGgsdSxFKSwhZyYmQT09PUYuY3VycmVudFZhbHVlKWNvbnRpbnVlfWlmKEYuY3VycmVudFZhbHVlPUEsXCJ0d2VlblwiPT09ayl5PUE7ZWxzZXtpZihTLkhvb2tzLnJlZ2lzdGVyZWRba10pe3ZhciBIPVMuSG9va3MuZ2V0Um9vdChrKSxOPWkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXTtOJiYoRi5yb290UHJvcGVydHlWYWx1ZT1OKX12YXIgTD1TLnNldFByb3BlcnR5VmFsdWUoVixrLEYuY3VycmVudFZhbHVlKygwPT09cGFyc2VGbG9hdChBKT9cIlwiOkYudW5pdFR5cGUpLEYucm9vdFByb3BlcnR5VmFsdWUsRi5zY3JvbGxEYXRhKTtTLkhvb2tzLnJlZ2lzdGVyZWRba10mJihpKFYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSF09Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0hdP1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtIXShcImV4dHJhY3RcIixudWxsLExbMV0pOkxbMV0pLFwidHJhbnNmb3JtXCI9PT1MWzBdJiYoQz0hMCl9fXUubW9iaWxlSEEmJmkoVikudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9PT1hJiYoaShWKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD1cIigwcHgsIDBweCwgMHB4KVwiLEM9ITApLEMmJlMuZmx1c2hUcmFuc2Zvcm1DYWNoZShWKX19dS5kaXNwbGF5IT09YSYmXCJub25lXCIhPT11LmRpc3BsYXkmJihiLlN0YXRlLmNhbGxzW29dWzJdLmRpc3BsYXk9ITEpLHUudmlzaWJpbGl0eSE9PWEmJlwiaGlkZGVuXCIhPT11LnZpc2liaWxpdHkmJihiLlN0YXRlLmNhbGxzW29dWzJdLnZpc2liaWxpdHk9ITEpLHUucHJvZ3Jlc3MmJnUucHJvZ3Jlc3MuY2FsbChzWzFdLHNbMV0saCxNYXRoLm1heCgwLGQrdS5kdXJhdGlvbi10KSxkLHkpLDE9PT1oJiZwKG8pfX1iLlN0YXRlLmlzVGlja2luZyYmdyhjKX1mdW5jdGlvbiBwKGUsdCl7aWYoIWIuU3RhdGUuY2FsbHNbZV0pcmV0dXJuITE7Zm9yKHZhciByPWIuU3RhdGUuY2FsbHNbZV1bMF0sbj1iLlN0YXRlLmNhbGxzW2VdWzFdLG89Yi5TdGF0ZS5jYWxsc1tlXVsyXSxzPWIuU3RhdGUuY2FsbHNbZV1bNF0sbD0hMSx1PTAsYz1yLmxlbmd0aDtjPnU7dSsrKXt2YXIgcD1yW3VdLmVsZW1lbnQ7aWYodHx8by5sb29wfHwoXCJub25lXCI9PT1vLmRpc3BsYXkmJlMuc2V0UHJvcGVydHlWYWx1ZShwLFwiZGlzcGxheVwiLG8uZGlzcGxheSksXCJoaWRkZW5cIj09PW8udmlzaWJpbGl0eSYmUy5zZXRQcm9wZXJ0eVZhbHVlKHAsXCJ2aXNpYmlsaXR5XCIsby52aXNpYmlsaXR5KSksby5sb29wIT09ITAmJihmLnF1ZXVlKHApWzFdPT09YXx8IS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdChmLnF1ZXVlKHApWzFdKSkmJmkocCkpe2kocCkuaXNBbmltYXRpbmc9ITEsaShwKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlPXt9O3ZhciBkPSExO2YuZWFjaChTLkxpc3RzLnRyYW5zZm9ybXMzRCxmdW5jdGlvbihlLHQpe3ZhciByPS9ec2NhbGUvLnRlc3QodCk/MTowLG49aShwKS50cmFuc2Zvcm1DYWNoZVt0XTtpKHApLnRyYW5zZm9ybUNhY2hlW3RdIT09YSYmbmV3IFJlZ0V4cChcIl5cXFxcKFwiK3IrXCJbXi5dXCIpLnRlc3QobikmJihkPSEwLGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlW3RdKX0pLG8ubW9iaWxlSEEmJihkPSEwLGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSxkJiZTLmZsdXNoVHJhbnNmb3JtQ2FjaGUocCksUy5WYWx1ZXMucmVtb3ZlQ2xhc3MocCxcInZlbG9jaXR5LWFuaW1hdGluZ1wiKX1pZighdCYmby5jb21wbGV0ZSYmIW8ubG9vcCYmdT09PWMtMSl0cnl7by5jb21wbGV0ZS5jYWxsKG4sbil9Y2F0Y2goZyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGd9LDEpfXMmJm8ubG9vcCE9PSEwJiZzKG4pLGkocCkmJm8ubG9vcD09PSEwJiYhdCYmKGYuZWFjaChpKHApLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihlLHQpey9ecm90YXRlLy50ZXN0KGUpJiYzNjA9PT1wYXJzZUZsb2F0KHQuZW5kVmFsdWUpJiYodC5lbmRWYWx1ZT0wLHQuc3RhcnRWYWx1ZT0zNjApLC9eYmFja2dyb3VuZFBvc2l0aW9uLy50ZXN0KGUpJiYxMDA9PT1wYXJzZUZsb2F0KHQuZW5kVmFsdWUpJiZcIiVcIj09PXQudW5pdFR5cGUmJih0LmVuZFZhbHVlPTAsdC5zdGFydFZhbHVlPTEwMCl9KSxiKHAsXCJyZXZlcnNlXCIse2xvb3A6ITAsZGVsYXk6by5kZWxheX0pKSxvLnF1ZXVlIT09ITEmJmYuZGVxdWV1ZShwLG8ucXVldWUpfWIuU3RhdGUuY2FsbHNbZV09ITE7Zm9yKHZhciBtPTAseT1iLlN0YXRlLmNhbGxzLmxlbmd0aDt5Pm07bSsrKWlmKGIuU3RhdGUuY2FsbHNbbV0hPT0hMSl7bD0hMDticmVha31sPT09ITEmJihiLlN0YXRlLmlzVGlja2luZz0hMSxkZWxldGUgYi5TdGF0ZS5jYWxscyxiLlN0YXRlLmNhbGxzPVtdKX12YXIgZixkPWZ1bmN0aW9uKCl7aWYoci5kb2N1bWVudE1vZGUpcmV0dXJuIHIuZG9jdW1lbnRNb2RlO2Zvcih2YXIgZT03O2U+NDtlLS0pe3ZhciB0PXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZih0LmlubmVySFRNTD1cIjwhLS1baWYgSUUgXCIrZStcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiLHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpLmxlbmd0aClyZXR1cm4gdD1udWxsLGV9cmV0dXJuIGF9KCksZz1mdW5jdGlvbigpe3ZhciBlPTA7cmV0dXJuIHQud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7dmFyIHIsYT0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gcj1NYXRoLm1heCgwLDE2LShhLWUpKSxlPWErcixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChhK3IpfSxyKX19KCksbT17aXNTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX0saXNOb2RlOmZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLm5vZGVUeXBlfSxpc05vZGVMaXN0OmZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiYvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKSYmZS5sZW5ndGghPT1hJiYoMD09PWUubGVuZ3RofHxcIm9iamVjdFwiPT10eXBlb2YgZVswXSYmZVswXS5ub2RlVHlwZT4wKX0saXNXcmFwcGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlJiYoZS5qcXVlcnl8fHQuWmVwdG8mJnQuWmVwdG8uemVwdG8uaXNaKGUpKX0saXNTVkc6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuU1ZHRWxlbWVudCYmZSBpbnN0YW5jZW9mIHQuU1ZHRWxlbWVudH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH19LHk9ITE7aWYoZS5mbiYmZS5mbi5qcXVlcnk/KGY9ZSx5PSEwKTpmPXQuVmVsb2NpdHkuVXRpbGl0aWVzLDg+PWQmJiF5KXRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO2lmKDc+PWQpcmV0dXJuIHZvaWQoalF1ZXJ5LmZuLnZlbG9jaXR5PWpRdWVyeS5mbi5hbmltYXRlKTt2YXIgaD00MDAsdj1cInN3aW5nXCIsYj17U3RhdGU6e2lzTW9iaWxlOi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0FuZHJvaWQ6L0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzR2luZ2VyYnJlYWQ6L0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNDaHJvbWU6dC5jaHJvbWUsaXNGaXJlZm94Oi9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxwcmVmaXhFbGVtZW50OnIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwcmVmaXhNYXRjaGVzOnt9LHNjcm9sbEFuY2hvcjpudWxsLHNjcm9sbFByb3BlcnR5TGVmdDpudWxsLHNjcm9sbFByb3BlcnR5VG9wOm51bGwsaXNUaWNraW5nOiExLGNhbGxzOltdfSxDU1M6e30sVXRpbGl0aWVzOmYsUmVkaXJlY3RzOnt9LEVhc2luZ3M6e30sUHJvbWlzZTp0LlByb21pc2UsZGVmYXVsdHM6e3F1ZXVlOlwiXCIsZHVyYXRpb246aCxlYXNpbmc6dixiZWdpbjphLGNvbXBsZXRlOmEscHJvZ3Jlc3M6YSxkaXNwbGF5OmEsdmlzaWJpbGl0eTphLGxvb3A6ITEsZGVsYXk6ITEsbW9iaWxlSEE6ITAsX2NhY2hlVmFsdWVzOiEwfSxpbml0OmZ1bmN0aW9uKGUpe2YuZGF0YShlLFwidmVsb2NpdHlcIix7aXNTVkc6bS5pc1NWRyhlKSxpc0FuaW1hdGluZzohMSxjb21wdXRlZFN0eWxlOm51bGwsdHdlZW5zQ29udGFpbmVyOm51bGwscm9vdFByb3BlcnR5VmFsdWVDYWNoZTp7fSx0cmFuc2Zvcm1DYWNoZTp7fX0pfSxob29rOm51bGwsbW9jazohMSx2ZXJzaW9uOnttYWpvcjoxLG1pbm9yOjIscGF0Y2g6Mn0sZGVidWc6ITF9O3QucGFnZVlPZmZzZXQhPT1hPyhiLlN0YXRlLnNjcm9sbEFuY2hvcj10LGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwicGFnZVhPZmZzZXRcIixiLlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwicGFnZVlPZmZzZXRcIik6KGIuU3RhdGUuc2Nyb2xsQW5jaG9yPXIuZG9jdW1lbnRFbGVtZW50fHxyLmJvZHkucGFyZW50Tm9kZXx8ci5ib2R5LGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwic2Nyb2xsTGVmdFwiLGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJzY3JvbGxUb3BcIik7dmFyIHg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3JldHVybi1lLnRlbnNpb24qZS54LWUuZnJpY3Rpb24qZS52fWZ1bmN0aW9uIHQodCxyLGEpe3ZhciBuPXt4OnQueCthLmR4KnIsdjp0LnYrYS5kdipyLHRlbnNpb246dC50ZW5zaW9uLGZyaWN0aW9uOnQuZnJpY3Rpb259O3JldHVybntkeDpuLnYsZHY6ZShuKX19ZnVuY3Rpb24gcihyLGEpe3ZhciBuPXtkeDpyLnYsZHY6ZShyKX0sbz10KHIsLjUqYSxuKSxpPXQociwuNSphLG8pLHM9dChyLGEsaSksbD0xLzYqKG4uZHgrMiooby5keCtpLmR4KStzLmR4KSx1PTEvNioobi5kdisyKihvLmR2K2kuZHYpK3MuZHYpO3JldHVybiByLng9ci54K2wqYSxyLnY9ci52K3UqYSxyfXJldHVybiBmdW5jdGlvbiBhKGUsdCxuKXt2YXIgbyxpLHMsbD17eDotMSx2OjAsdGVuc2lvbjpudWxsLGZyaWN0aW9uOm51bGx9LHU9WzBdLGM9MCxwPTFlLTQsZj0uMDE2O2ZvcihlPXBhcnNlRmxvYXQoZSl8fDUwMCx0PXBhcnNlRmxvYXQodCl8fDIwLG49bnx8bnVsbCxsLnRlbnNpb249ZSxsLmZyaWN0aW9uPXQsbz1udWxsIT09bixvPyhjPWEoZSx0KSxpPWMvbipmKTppPWY7cz1yKHN8fGwsaSksdS5wdXNoKDErcy54KSxjKz0xNixNYXRoLmFicyhzLngpPnAmJk1hdGguYWJzKHMudik+cDspO3JldHVybiBvP2Z1bmN0aW9uKGUpe3JldHVybiB1W2UqKHUubGVuZ3RoLTEpfDBdfTpjfX0oKTtiLkVhc2luZ3M9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxzcHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuIDEtTWF0aC5jb3MoNC41KmUqTWF0aC5QSSkqTWF0aC5leHAoNiotZSl9fSxmLmVhY2goW1tcImVhc2VcIixbLjI1LC4xLC4yNSwxXV0sW1wiZWFzZS1pblwiLFsuNDIsMCwxLDFdXSxbXCJlYXNlLW91dFwiLFswLDAsLjU4LDFdXSxbXCJlYXNlLWluLW91dFwiLFsuNDIsMCwuNTgsMV1dLFtcImVhc2VJblNpbmVcIixbLjQ3LDAsLjc0NSwuNzE1XV0sW1wiZWFzZU91dFNpbmVcIixbLjM5LC41NzUsLjU2NSwxXV0sW1wiZWFzZUluT3V0U2luZVwiLFsuNDQ1LC4wNSwuNTUsLjk1XV0sW1wiZWFzZUluUXVhZFwiLFsuNTUsLjA4NSwuNjgsLjUzXV0sW1wiZWFzZU91dFF1YWRcIixbLjI1LC40NiwuNDUsLjk0XV0sW1wiZWFzZUluT3V0UXVhZFwiLFsuNDU1LC4wMywuNTE1LC45NTVdXSxbXCJlYXNlSW5DdWJpY1wiLFsuNTUsLjA1NSwuNjc1LC4xOV1dLFtcImVhc2VPdXRDdWJpY1wiLFsuMjE1LC42MSwuMzU1LDFdXSxbXCJlYXNlSW5PdXRDdWJpY1wiLFsuNjQ1LC4wNDUsLjM1NSwxXV0sW1wiZWFzZUluUXVhcnRcIixbLjg5NSwuMDMsLjY4NSwuMjJdXSxbXCJlYXNlT3V0UXVhcnRcIixbLjE2NSwuODQsLjQ0LDFdXSxbXCJlYXNlSW5PdXRRdWFydFwiLFsuNzcsMCwuMTc1LDFdXSxbXCJlYXNlSW5RdWludFwiLFsuNzU1LC4wNSwuODU1LC4wNl1dLFtcImVhc2VPdXRRdWludFwiLFsuMjMsMSwuMzIsMV1dLFtcImVhc2VJbk91dFF1aW50XCIsWy44NiwwLC4wNywxXV0sW1wiZWFzZUluRXhwb1wiLFsuOTUsLjA1LC43OTUsLjAzNV1dLFtcImVhc2VPdXRFeHBvXCIsWy4xOSwxLC4yMiwxXV0sW1wiZWFzZUluT3V0RXhwb1wiLFsxLDAsMCwxXV0sW1wiZWFzZUluQ2lyY1wiLFsuNiwuMDQsLjk4LC4zMzVdXSxbXCJlYXNlT3V0Q2lyY1wiLFsuMDc1LC44MiwuMTY1LDFdXSxbXCJlYXNlSW5PdXRDaXJjXCIsWy43ODUsLjEzNSwuMTUsLjg2XV1dLGZ1bmN0aW9uKGUsdCl7Yi5FYXNpbmdzW3RbMF1dPWwuYXBwbHkobnVsbCx0WzFdKX0pO3ZhciBTPWIuQ1NTPXtSZWdFeDp7aXNIZXg6L14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLHZhbHVlVW53cmFwOi9eW0Etel0rXFwoKC4qKVxcKSQvaSx3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOi9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/Lyx2YWx1ZVNwbGl0Oi8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2dpfSxMaXN0czp7Y29sb3JzOltcImZpbGxcIixcInN0cm9rZVwiLFwic3RvcENvbG9yXCIsXCJjb2xvclwiLFwiYmFja2dyb3VuZENvbG9yXCIsXCJib3JkZXJDb2xvclwiLFwiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJMZWZ0Q29sb3JcIixcIm91dGxpbmVDb2xvclwiXSx0cmFuc2Zvcm1zQmFzZTpbXCJ0cmFuc2xhdGVYXCIsXCJ0cmFuc2xhdGVZXCIsXCJzY2FsZVwiLFwic2NhbGVYXCIsXCJzY2FsZVlcIixcInNrZXdYXCIsXCJza2V3WVwiLFwicm90YXRlWlwiXSx0cmFuc2Zvcm1zM0Q6W1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIixcInRyYW5zbGF0ZVpcIixcInNjYWxlWlwiLFwicm90YXRlWFwiLFwicm90YXRlWVwiXX0sSG9va3M6e3RlbXBsYXRlczp7dGV4dFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1clwiLFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sYm94U2hhZG93OltcIkNvbG9yIFggWSBCbHVyIFNwcmVhZFwiLFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLGNsaXA6W1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsXCIwcHggMHB4IDBweCAwcHhcIl0sYmFja2dyb3VuZFBvc2l0aW9uOltcIlggWVwiLFwiMCUgMCVcIl0sdHJhbnNmb3JtT3JpZ2luOltcIlggWSBaXCIsXCI1MCUgNTAlIDBweFwiXSxwZXJzcGVjdGl2ZU9yaWdpbjpbXCJYIFlcIixcIjUwJSA1MCVcIl19LHJlZ2lzdGVyZWQ6e30scmVnaXN0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPFMuTGlzdHMuY29sb3JzLmxlbmd0aDtlKyspe3ZhciB0PVwiY29sb3JcIj09PVMuTGlzdHMuY29sb3JzW2VdP1wiMCAwIDAgMVwiOlwiMjU1IDI1NSAyNTUgMVwiO1MuSG9va3MudGVtcGxhdGVzW1MuTGlzdHMuY29sb3JzW2VdXT1bXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLHRdfXZhciByLGEsbjtpZihkKWZvcihyIGluIFMuSG9va3MudGVtcGxhdGVzKXthPVMuSG9va3MudGVtcGxhdGVzW3JdLG49YVswXS5zcGxpdChcIiBcIik7dmFyIG89YVsxXS5tYXRjaChTLlJlZ0V4LnZhbHVlU3BsaXQpO1wiQ29sb3JcIj09PW5bMF0mJihuLnB1c2gobi5zaGlmdCgpKSxvLnB1c2goby5zaGlmdCgpKSxTLkhvb2tzLnRlbXBsYXRlc1tyXT1bbi5qb2luKFwiIFwiKSxvLmpvaW4oXCIgXCIpXSl9Zm9yKHIgaW4gUy5Ib29rcy50ZW1wbGF0ZXMpe2E9Uy5Ib29rcy50ZW1wbGF0ZXNbcl0sbj1hWzBdLnNwbGl0KFwiIFwiKTtmb3IodmFyIGUgaW4gbil7dmFyIGk9cituW2VdLHM9ZTtTLkhvb2tzLnJlZ2lzdGVyZWRbaV09W3Isc119fX0sZ2V0Um9vdDpmdW5jdGlvbihlKXt2YXIgdD1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07cmV0dXJuIHQ/dFswXTplfSxjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuUmVnRXgudmFsdWVVbndyYXAudGVzdCh0KSYmKHQ9dC5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXSksUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUodCkmJih0PVMuSG9va3MudGVtcGxhdGVzW2VdWzFdKSx0fSxleHRyYWN0VmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYocil7dmFyIGE9clswXSxuPXJbMV07cmV0dXJuIHQ9Uy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGEsdCksdC50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdClbbl19cmV0dXJuIHR9LGluamVjdFZhbHVlOmZ1bmN0aW9uKGUsdCxyKXt2YXIgYT1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYoYSl7dmFyIG4sbyxpPWFbMF0scz1hWzFdO3JldHVybiByPVMuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShpLHIpLG49ci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCksbltzXT10LG89bi5qb2luKFwiIFwiKX1yZXR1cm4gcn19LE5vcm1hbGl6YXRpb25zOntyZWdpc3RlcmVkOntjbGlwOmZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwiY2xpcFwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgYTtyZXR1cm4gUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3Qocik/YT1yOihhPXIudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKSxhPWE/YVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKTpyKSxhO2Nhc2VcImluamVjdFwiOnJldHVyblwicmVjdChcIityK1wiKVwifX0sYmx1cjpmdW5jdGlvbihlLHQscil7c3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gYi5TdGF0ZS5pc0ZpcmVmb3g/XCJmaWx0ZXJcIjpcIi13ZWJraXQtZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhPXBhcnNlRmxvYXQocik7aWYoIWEmJjAhPT1hKXt2YXIgbj1yLnRvU3RyaW5nKCkubWF0Y2goL2JsdXJcXCgoWzAtOV0rW0Etel0rKVxcKS9pKTthPW4/blsxXTowfXJldHVybiBhO2Nhc2VcImluamVjdFwiOnJldHVybiBwYXJzZUZsb2F0KHIpP1wiYmx1cihcIityK1wiKVwiOlwibm9uZVwifX0sb3BhY2l0eTpmdW5jdGlvbihlLHQscil7aWYoOD49ZClzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwiZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhPXIudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7cmV0dXJuIHI9YT9hWzFdLzEwMDoxO2Nhc2VcImluamVjdFwiOnJldHVybiB0LnN0eWxlLnpvb209MSxwYXJzZUZsb2F0KHIpPj0xP1wiXCI6XCJhbHBoYShvcGFjaXR5PVwiK3BhcnNlSW50KDEwMCpwYXJzZUZsb2F0KHIpLDEwKStcIilcIn1lbHNlIHN3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJvcGFjaXR5XCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiByO2Nhc2VcImluamVjdFwiOnJldHVybiByfX19LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7OT49ZHx8Yi5TdGF0ZS5pc0dpbmdlcmJyZWFkfHwoUy5MaXN0cy50cmFuc2Zvcm1zQmFzZT1TLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdChTLkxpc3RzLnRyYW5zZm9ybXMzRCkpO2Zvcih2YXIgZT0wO2U8Uy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7ZSsrKSFmdW5jdGlvbigpe3ZhciB0PVMuTGlzdHMudHJhbnNmb3Jtc0Jhc2VbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdPWZ1bmN0aW9uKGUscixuKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwidHJhbnNmb3JtXCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBpKHIpPT09YXx8aShyKS50cmFuc2Zvcm1DYWNoZVt0XT09PWE/L15zY2FsZS9pLnRlc3QodCk/MTowOmkocikudHJhbnNmb3JtQ2FjaGVbdF0ucmVwbGFjZSgvWygpXS9nLFwiXCIpO2Nhc2VcImluamVjdFwiOnZhciBvPSExO3N3aXRjaCh0LnN1YnN0cigwLHQubGVuZ3RoLTEpKXtjYXNlXCJ0cmFuc2xhdGVcIjpvPSEvKCV8cHh8ZW18cmVtfHZ3fHZofFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJzY2FsXCI6Y2FzZVwic2NhbGVcIjpiLlN0YXRlLmlzQW5kcm9pZCYmaShyKS50cmFuc2Zvcm1DYWNoZVt0XT09PWEmJjE+biYmKG49MSksbz0hLyhcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZVwic2tld1wiOm89IS8oZGVnfFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJyb3RhdGVcIjpvPSEvKGRlZ3xcXGQpJC9pLnRlc3Qobil9cmV0dXJuIG98fChpKHIpLnRyYW5zZm9ybUNhY2hlW3RdPVwiKFwiK24rXCIpXCIpLGkocikudHJhbnNmb3JtQ2FjaGVbdF19fX0oKTtmb3IodmFyIGU9MDtlPFMuTGlzdHMuY29sb3JzLmxlbmd0aDtlKyspIWZ1bmN0aW9uKCl7dmFyIHQ9Uy5MaXN0cy5jb2xvcnNbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdPWZ1bmN0aW9uKGUscixuKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVybiB0O2Nhc2VcImV4dHJhY3RcIjp2YXIgbztpZihTLlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChuKSlvPW47ZWxzZXt2YXIgaSxzPXtibGFjazpcInJnYigwLCAwLCAwKVwiLGJsdWU6XCJyZ2IoMCwgMCwgMjU1KVwiLGdyYXk6XCJyZ2IoMTI4LCAxMjgsIDEyOClcIixncmVlbjpcInJnYigwLCAxMjgsIDApXCIscmVkOlwicmdiKDI1NSwgMCwgMClcIix3aGl0ZTpcInJnYigyNTUsIDI1NSwgMjU1KVwifTsvXltBLXpdKyQvaS50ZXN0KG4pP2k9c1tuXSE9PWE/c1tuXTpzLmJsYWNrOlMuUmVnRXguaXNIZXgudGVzdChuKT9pPVwicmdiKFwiK1MuVmFsdWVzLmhleFRvUmdiKG4pLmpvaW4oXCIgXCIpK1wiKVwiOi9ecmdiYT9cXCgvaS50ZXN0KG4pfHwoaT1zLmJsYWNrKSxvPShpfHxuKS50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpfXJldHVybiA4Pj1kfHwzIT09by5zcGxpdChcIiBcIikubGVuZ3RofHwobys9XCIgMVwiKSxvO2Nhc2VcImluamVjdFwiOnJldHVybiA4Pj1kPzQ9PT1uLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihuPW4uc3BsaXQoL1xccysvKS5zbGljZSgwLDMpLmpvaW4oXCIgXCIpKTozPT09bi5zcGxpdChcIiBcIikubGVuZ3RoJiYobis9XCIgMVwiKSwoOD49ZD9cInJnYlwiOlwicmdiYVwiKStcIihcIituLnJlcGxhY2UoL1xccysvZyxcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZyxcIlwiKStcIilcIn19fSgpfX0sTmFtZXM6e2NhbWVsQ2FzZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9KX0sU1ZHQXR0cmlidXRlOmZ1bmN0aW9uKGUpe3ZhciB0PVwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuKGR8fGIuU3RhdGUuaXNBbmRyb2lkJiYhYi5TdGF0ZS5pc0Nocm9tZSkmJih0Kz1cInx0cmFuc2Zvcm1cIiksbmV3IFJlZ0V4cChcIl4oXCIrdCtcIikkXCIsXCJpXCIpLnRlc3QoZSl9LHByZWZpeENoZWNrOmZ1bmN0aW9uKGUpe2lmKGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXSlyZXR1cm5bYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdLCEwXTtmb3IodmFyIHQ9W1wiXCIsXCJXZWJraXRcIixcIk1velwiLFwibXNcIixcIk9cIl0scj0wLGE9dC5sZW5ndGg7YT5yO3IrKyl7dmFyIG47aWYobj0wPT09cj9lOnRbcl0rZS5yZXBsYWNlKC9eXFx3LyxmdW5jdGlvbihlKXtyZXR1cm4gZS50b1VwcGVyQ2FzZSgpfSksbS5pc1N0cmluZyhiLlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbbl0pKXJldHVybiBiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV09bixbbiwhMF19cmV0dXJuW2UsITFdfX0sVmFsdWVzOntoZXhUb1JnYjpmdW5jdGlvbihlKXt2YXIgdCxyPS9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksYT0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pO3JldHVybiBlPWUucmVwbGFjZShyLGZ1bmN0aW9uKGUsdCxyLGEpe3JldHVybiB0K3QrcityK2ErYX0pLHQ9YS5leGVjKGUpLHQ/W3BhcnNlSW50KHRbMV0sMTYpLHBhcnNlSW50KHRbMl0sMTYpLHBhcnNlSW50KHRbM10sMTYpXTpbMCwwLDBdfSxpc0NTU051bGxWYWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gMD09ZXx8L14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QoZSl9LGdldFVuaXRUeXBlOmZ1bmN0aW9uKGUpe3JldHVybi9eKHJvdGF0ZXxza2V3KS9pLnRlc3QoZSk/XCJkZWdcIjovKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGUpP1wiXCI6XCJweFwifSxnZXREaXNwbGF5VHlwZTpmdW5jdGlvbihlKXt2YXIgdD1lJiZlLnRhZ05hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO3JldHVybi9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdCh0KT9cImlubGluZVwiOi9eKGxpKSQvaS50ZXN0KHQpP1wibGlzdC1pdGVtXCI6L14odHIpJC9pLnRlc3QodCk/XCJ0YWJsZS1yb3dcIjovXih0YWJsZSkkL2kudGVzdCh0KT9cInRhYmxlXCI6L14odGJvZHkpJC9pLnRlc3QodCk/XCJ0YWJsZS1yb3ctZ3JvdXBcIjpcImJsb2NrXCJ9LGFkZENsYXNzOmZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuYWRkKHQpOmUuY2xhc3NOYW1lKz0oZS5jbGFzc05hbWUubGVuZ3RoP1wiIFwiOlwiXCIpK3R9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QucmVtb3ZlKHQpOmUuY2xhc3NOYW1lPWUuY2xhc3NOYW1lLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrdC5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXHN8JClcIixcImdpXCIpLFwiIFwiKX19LGdldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSxyLG4sbyl7ZnVuY3Rpb24gcyhlLHIpe2Z1bmN0aW9uIG4oKXt1JiZTLnNldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIixcIm5vbmVcIil9dmFyIGw9MDtpZig4Pj1kKWw9Zi5jc3MoZSxyKTtlbHNle3ZhciB1PSExO2lmKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KHIpJiYwPT09Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJkaXNwbGF5XCIpJiYodT0hMCxTLnNldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIixTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShlKSkpLCFvKXtpZihcImhlaWdodFwiPT09ciYmXCJib3JkZXItYm94XCIhPT1TLmdldFByb3BlcnR5VmFsdWUoZSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBjPWUub2Zmc2V0SGVpZ2h0LShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyVG9wV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcImJvcmRlckJvdHRvbVdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nVG9wXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nQm90dG9tXCIpKXx8MCk7cmV0dXJuIG4oKSxjfWlmKFwid2lkdGhcIj09PXImJlwiYm9yZGVyLWJveFwiIT09Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgcD1lLm9mZnNldFdpZHRoLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyTGVmdFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJSaWdodFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nTGVmdFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwicGFkZGluZ1JpZ2h0XCIpKXx8MCk7cmV0dXJuIG4oKSxwfX12YXIgZztnPWkoZSk9PT1hP3QuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpOmkoZSkuY29tcHV0ZWRTdHlsZT9pKGUpLmNvbXB1dGVkU3R5bGU6aShlKS5jb21wdXRlZFN0eWxlPXQuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLFwiYm9yZGVyQ29sb3JcIj09PXImJihyPVwiYm9yZGVyVG9wQ29sb3JcIiksbD05PT09ZCYmXCJmaWx0ZXJcIj09PXI/Zy5nZXRQcm9wZXJ0eVZhbHVlKHIpOmdbcl0sKFwiXCI9PT1sfHxudWxsPT09bCkmJihsPWUuc3R5bGVbcl0pLG4oKX1pZihcImF1dG9cIj09PWwmJi9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChyKSl7dmFyIG09cyhlLFwicG9zaXRpb25cIik7KFwiZml4ZWRcIj09PW18fFwiYWJzb2x1dGVcIj09PW0mJi90b3B8bGVmdC9pLnRlc3QocikpJiYobD1mKGUpLnBvc2l0aW9uKClbcl0rXCJweFwiKX1yZXR1cm4gbH12YXIgbDtpZihTLkhvb2tzLnJlZ2lzdGVyZWRbcl0pe3ZhciB1PXIsYz1TLkhvb2tzLmdldFJvb3QodSk7bj09PWEmJihuPVMuZ2V0UHJvcGVydHlWYWx1ZShlLFMuTmFtZXMucHJlZml4Q2hlY2soYylbMF0pKSxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10mJihuPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImV4dHJhY3RcIixlLG4pKSxsPVMuSG9va3MuZXh0cmFjdFZhbHVlKHUsbil9ZWxzZSBpZihTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0pe3ZhciBwLGc7cD1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsZSksXCJ0cmFuc2Zvcm1cIiE9PXAmJihnPXMoZSxTLk5hbWVzLnByZWZpeENoZWNrKHApWzBdKSxTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShnKSYmUy5Ib29rcy50ZW1wbGF0ZXNbcl0mJihnPVMuSG9va3MudGVtcGxhdGVzW3JdWzFdKSksbD1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJleHRyYWN0XCIsZSxnKX1pZighL15bXFxkLV0vLnRlc3QobCkpaWYoaShlKSYmaShlKS5pc1NWRyYmUy5OYW1lcy5TVkdBdHRyaWJ1dGUocikpaWYoL14oaGVpZ2h0fHdpZHRoKSQvaS50ZXN0KHIpKXRyeXtsPWUuZ2V0QkJveCgpW3JdfWNhdGNoKG0pe2w9MH1lbHNlIGw9ZS5nZXRBdHRyaWJ1dGUocik7ZWxzZSBsPXMoZSxTLk5hbWVzLnByZWZpeENoZWNrKHIpWzBdKTtyZXR1cm4gUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUobCkmJihsPTApLGIuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiR2V0IFwiK3IrXCI6IFwiK2wpLGx9LHNldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSxyLGEsbixvKXt2YXIgcz1yO2lmKFwic2Nyb2xsXCI9PT1yKW8uY29udGFpbmVyP28uY29udGFpbmVyW1wic2Nyb2xsXCIrby5kaXJlY3Rpb25dPWE6XCJMZWZ0XCI9PT1vLmRpcmVjdGlvbj90LnNjcm9sbFRvKGEsby5hbHRlcm5hdGVWYWx1ZSk6dC5zY3JvbGxUbyhvLmFsdGVybmF0ZVZhbHVlLGEpO2Vsc2UgaWYoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdJiZcInRyYW5zZm9ybVwiPT09Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLGUpKVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImluamVjdFwiLGUsYSkscz1cInRyYW5zZm9ybVwiLGE9aShlKS50cmFuc2Zvcm1DYWNoZVtyXTtlbHNle2lmKFMuSG9va3MucmVnaXN0ZXJlZFtyXSl7dmFyIGw9cix1PVMuSG9va3MuZ2V0Um9vdChyKTtuPW58fFMuZ2V0UHJvcGVydHlWYWx1ZShlLHUpLGE9Uy5Ib29rcy5pbmplY3RWYWx1ZShsLGEsbikscj11fWlmKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSYmKGE9Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiaW5qZWN0XCIsZSxhKSxyPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIixlKSkscz1TLk5hbWVzLnByZWZpeENoZWNrKHIpWzBdLDg+PWQpdHJ5e2Uuc3R5bGVbc109YX1jYXRjaChjKXtiLmRlYnVnJiZjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIrYStcIl0gZm9yIFtcIitzK1wiXVwiKX1lbHNlIGkoZSkmJmkoZSkuaXNTVkcmJlMuTmFtZXMuU1ZHQXR0cmlidXRlKHIpP2Uuc2V0QXR0cmlidXRlKHIsYSk6ZS5zdHlsZVtzXT1hO2IuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiU2V0IFwiK3IrXCIgKFwiK3MrXCIpOiBcIithKX1yZXR1cm5bcyxhXX0sZmx1c2hUcmFuc2Zvcm1DYWNoZTpmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe3JldHVybiBwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLHQpKX12YXIgcj1cIlwiO2lmKChkfHxiLlN0YXRlLmlzQW5kcm9pZCYmIWIuU3RhdGUuaXNDaHJvbWUpJiZpKGUpLmlzU1ZHKXt2YXIgYT17dHJhbnNsYXRlOlt0KFwidHJhbnNsYXRlWFwiKSx0KFwidHJhbnNsYXRlWVwiKV0sc2tld1g6W3QoXCJza2V3WFwiKV0sc2tld1k6W3QoXCJza2V3WVwiKV0sc2NhbGU6MSE9PXQoXCJzY2FsZVwiKT9bdChcInNjYWxlXCIpLHQoXCJzY2FsZVwiKV06W3QoXCJzY2FsZVhcIiksdChcInNjYWxlWVwiKV0scm90YXRlOlt0KFwicm90YXRlWlwiKSwwLDBdfTtmLmVhY2goaShlKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihlKXsvXnRyYW5zbGF0ZS9pLnRlc3QoZSk/ZT1cInRyYW5zbGF0ZVwiOi9ec2NhbGUvaS50ZXN0KGUpP2U9XCJzY2FsZVwiOi9ecm90YXRlL2kudGVzdChlKSYmKGU9XCJyb3RhdGVcIiksYVtlXSYmKHIrPWUrXCIoXCIrYVtlXS5qb2luKFwiIFwiKStcIikgXCIsZGVsZXRlIGFbZV0pfSl9ZWxzZXt2YXIgbixvO2YuZWFjaChpKGUpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKHQpe3JldHVybiBuPWkoZSkudHJhbnNmb3JtQ2FjaGVbdF0sXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiPT09dD8obz1uLCEwKTooOT09PWQmJlwicm90YXRlWlwiPT09dCYmKHQ9XCJyb3RhdGVcIiksdm9pZChyKz10K24rXCIgXCIpKX0pLG8mJihyPVwicGVyc3BlY3RpdmVcIitvK1wiIFwiK3IpfVMuc2V0UHJvcGVydHlWYWx1ZShlLFwidHJhbnNmb3JtXCIscil9fTtTLkhvb2tzLnJlZ2lzdGVyKCksUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLGIuaG9vaz1mdW5jdGlvbihlLHQscil7dmFyIG49YTtyZXR1cm4gZT1vKGUpLGYuZWFjaChlLGZ1bmN0aW9uKGUsbyl7aWYoaShvKT09PWEmJmIuaW5pdChvKSxyPT09YSluPT09YSYmKG49Yi5DU1MuZ2V0UHJvcGVydHlWYWx1ZShvLHQpKTtlbHNle3ZhciBzPWIuQ1NTLnNldFByb3BlcnR5VmFsdWUobyx0LHIpO1widHJhbnNmb3JtXCI9PT1zWzBdJiZiLkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKG8pLG49c319KSxufTt2YXIgUD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gcz9rLnByb21pc2V8fG51bGw6bH1mdW5jdGlvbiBuKCl7ZnVuY3Rpb24gZShlKXtmdW5jdGlvbiBwKGUsdCl7dmFyIHI9YSxuPWEsaT1hO3JldHVybiBtLmlzQXJyYXkoZSk/KHI9ZVswXSwhbS5pc0FycmF5KGVbMV0pJiYvXltcXGQtXS8udGVzdChlWzFdKXx8bS5pc0Z1bmN0aW9uKGVbMV0pfHxTLlJlZ0V4LmlzSGV4LnRlc3QoZVsxXSk/aT1lWzFdOihtLmlzU3RyaW5nKGVbMV0pJiYhUy5SZWdFeC5pc0hleC50ZXN0KGVbMV0pfHxtLmlzQXJyYXkoZVsxXSkpJiYobj10P2VbMV06dShlWzFdLHMuZHVyYXRpb24pLGVbMl0hPT1hJiYoaT1lWzJdKSkpOnI9ZSx0fHwobj1ufHxzLmVhc2luZyksbS5pc0Z1bmN0aW9uKHIpJiYocj1yLmNhbGwobyxWLHcpKSxtLmlzRnVuY3Rpb24oaSkmJihpPWkuY2FsbChvLFYsdykpLFtyfHwwLG4saV19ZnVuY3Rpb24gZChlLHQpe3ZhciByLGE7cmV0dXJuIGE9KHR8fFwiMFwiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWyVBLXpdKyQvLGZ1bmN0aW9uKGUpe3JldHVybiByPWUsXCJcIn0pLHJ8fChyPVMuVmFsdWVzLmdldFVuaXRUeXBlKGUpKSxbYSxyXX1mdW5jdGlvbiBoKCl7dmFyIGU9e215UGFyZW50Om8ucGFyZW50Tm9kZXx8ci5ib2R5LHBvc2l0aW9uOlMuZ2V0UHJvcGVydHlWYWx1ZShvLFwicG9zaXRpb25cIiksZm9udFNpemU6Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sXCJmb250U2l6ZVwiKX0sYT1lLnBvc2l0aW9uPT09TC5sYXN0UG9zaXRpb24mJmUubXlQYXJlbnQ9PT1MLmxhc3RQYXJlbnQsbj1lLmZvbnRTaXplPT09TC5sYXN0Rm9udFNpemU7TC5sYXN0UGFyZW50PWUubXlQYXJlbnQsTC5sYXN0UG9zaXRpb249ZS5wb3NpdGlvbixMLmxhc3RGb250U2l6ZT1lLmZvbnRTaXplO3ZhciBzPTEwMCxsPXt9O2lmKG4mJmEpbC5lbVRvUHg9TC5sYXN0RW1Ub1B4LGwucGVyY2VudFRvUHhXaWR0aD1MLmxhc3RQZXJjZW50VG9QeFdpZHRoLGwucGVyY2VudFRvUHhIZWlnaHQ9TC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ7ZWxzZXt2YXIgdT1pKG8pLmlzU1ZHP3IuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInJlY3RcIik6ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IuaW5pdCh1KSxlLm15UGFyZW50LmFwcGVuZENoaWxkKHUpLGYuZWFjaChbXCJvdmVyZmxvd1wiLFwib3ZlcmZsb3dYXCIsXCJvdmVyZmxvd1lcIl0sZnVuY3Rpb24oZSx0KXtiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsdCxcImhpZGRlblwiKX0pLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcInBvc2l0aW9uXCIsZS5wb3NpdGlvbiksYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LFwiZm9udFNpemVcIixlLmZvbnRTaXplKSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJib3hTaXppbmdcIixcImNvbnRlbnQtYm94XCIpLGYuZWFjaChbXCJtaW5XaWR0aFwiLFwibWF4V2lkdGhcIixcIndpZHRoXCIsXCJtaW5IZWlnaHRcIixcIm1heEhlaWdodFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGUsdCl7Yi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LHQscytcIiVcIil9KSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJwYWRkaW5nTGVmdFwiLHMrXCJlbVwiKSxsLnBlcmNlbnRUb1B4V2lkdGg9TC5sYXN0UGVyY2VudFRvUHhXaWR0aD0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSxcIndpZHRoXCIsbnVsbCwhMCkpfHwxKS9zLGwucGVyY2VudFRvUHhIZWlnaHQ9TC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ9KHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsXCJoZWlnaHRcIixudWxsLCEwKSl8fDEpL3MsbC5lbVRvUHg9TC5sYXN0RW1Ub1B4PShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LFwicGFkZGluZ0xlZnRcIikpfHwxKS9zLGUubXlQYXJlbnQucmVtb3ZlQ2hpbGQodSl9cmV0dXJuIG51bGw9PT1MLnJlbVRvUHgmJihMLnJlbVRvUHg9cGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoci5ib2R5LFwiZm9udFNpemVcIikpfHwxNiksbnVsbD09PUwudndUb1B4JiYoTC52d1RvUHg9cGFyc2VGbG9hdCh0LmlubmVyV2lkdGgpLzEwMCxMLnZoVG9QeD1wYXJzZUZsb2F0KHQuaW5uZXJIZWlnaHQpLzEwMCksbC5yZW1Ub1B4PUwucmVtVG9QeCxsLnZ3VG9QeD1MLnZ3VG9QeCxsLnZoVG9QeD1MLnZoVG9QeCxiLmRlYnVnPj0xJiZjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIitKU09OLnN0cmluZ2lmeShsKSxvKSxsfWlmKHMuYmVnaW4mJjA9PT1WKXRyeXtzLmJlZ2luLmNhbGwoZyxnKX1jYXRjaCh4KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgeH0sMSl9aWYoXCJzY3JvbGxcIj09PUEpe3ZhciBQLEMsVCxGPS9eeCQvaS50ZXN0KHMuYXhpcyk/XCJMZWZ0XCI6XCJUb3BcIixqPXBhcnNlRmxvYXQocy5vZmZzZXQpfHwwO3MuY29udGFpbmVyP20uaXNXcmFwcGVkKHMuY29udGFpbmVyKXx8bS5pc05vZGUocy5jb250YWluZXIpPyhzLmNvbnRhaW5lcj1zLmNvbnRhaW5lclswXXx8cy5jb250YWluZXIsUD1zLmNvbnRhaW5lcltcInNjcm9sbFwiK0ZdLFQ9UCtmKG8pLnBvc2l0aW9uKClbRi50b0xvd2VyQ2FzZSgpXStqKTpzLmNvbnRhaW5lcj1udWxsOihQPWIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiK0ZdXSxDPWIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiKyhcIkxlZnRcIj09PUY/XCJUb3BcIjpcIkxlZnRcIildXSxUPWYobykub2Zmc2V0KClbRi50b0xvd2VyQ2FzZSgpXStqKSxsPXtzY3JvbGw6e3Jvb3RQcm9wZXJ0eVZhbHVlOiExLHN0YXJ0VmFsdWU6UCxjdXJyZW50VmFsdWU6UCxlbmRWYWx1ZTpULHVuaXRUeXBlOlwiXCIsZWFzaW5nOnMuZWFzaW5nLHNjcm9sbERhdGE6e2NvbnRhaW5lcjpzLmNvbnRhaW5lcixkaXJlY3Rpb246RixhbHRlcm5hdGVWYWx1ZTpDfX0sZWxlbWVudDpvfSxiLmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoc2Nyb2xsKTogXCIsbC5zY3JvbGwsbyl9ZWxzZSBpZihcInJldmVyc2VcIj09PUEpe2lmKCFpKG8pLnR3ZWVuc0NvbnRhaW5lcilyZXR1cm4gdm9pZCBmLmRlcXVldWUobyxzLnF1ZXVlKTtcIm5vbmVcIj09PWkobykub3B0cy5kaXNwbGF5JiYoaShvKS5vcHRzLmRpc3BsYXk9XCJhdXRvXCIpLFwiaGlkZGVuXCI9PT1pKG8pLm9wdHMudmlzaWJpbGl0eSYmKGkobykub3B0cy52aXNpYmlsaXR5PVwidmlzaWJsZVwiKSxpKG8pLm9wdHMubG9vcD0hMSxpKG8pLm9wdHMuYmVnaW49bnVsbCxpKG8pLm9wdHMuY29tcGxldGU9bnVsbCx2LmVhc2luZ3x8ZGVsZXRlIHMuZWFzaW5nLHYuZHVyYXRpb258fGRlbGV0ZSBzLmR1cmF0aW9uLHM9Zi5leHRlbmQoe30saShvKS5vcHRzLHMpO3ZhciBFPWYuZXh0ZW5kKCEwLHt9LGkobykudHdlZW5zQ29udGFpbmVyKTtmb3IodmFyIEggaW4gRSlpZihcImVsZW1lbnRcIiE9PUgpe3ZhciBOPUVbSF0uc3RhcnRWYWx1ZTtFW0hdLnN0YXJ0VmFsdWU9RVtIXS5jdXJyZW50VmFsdWU9RVtIXS5lbmRWYWx1ZSxFW0hdLmVuZFZhbHVlPU4sbS5pc0VtcHR5T2JqZWN0KHYpfHwoRVtIXS5lYXNpbmc9cy5lYXNpbmcpLGIuZGVidWcmJmNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiK0grXCIpOiBcIitKU09OLnN0cmluZ2lmeShFW0hdKSxvKX1sPUV9ZWxzZSBpZihcInN0YXJ0XCI9PT1BKXt2YXIgRTtpKG8pLnR3ZWVuc0NvbnRhaW5lciYmaShvKS5pc0FuaW1hdGluZz09PSEwJiYoRT1pKG8pLnR3ZWVuc0NvbnRhaW5lciksZi5lYWNoKHksZnVuY3Rpb24oZSx0KXtpZihSZWdFeHAoXCJeXCIrUy5MaXN0cy5jb2xvcnMuam9pbihcIiR8XlwiKStcIiRcIikudGVzdChlKSl7dmFyIHI9cCh0LCEwKSxuPXJbMF0sbz1yWzFdLGk9clsyXTtpZihTLlJlZ0V4LmlzSGV4LnRlc3Qobikpe2Zvcih2YXIgcz1bXCJSZWRcIixcIkdyZWVuXCIsXCJCbHVlXCJdLGw9Uy5WYWx1ZXMuaGV4VG9SZ2IobiksdT1pP1MuVmFsdWVzLmhleFRvUmdiKGkpOmEsYz0wO2M8cy5sZW5ndGg7YysrKXt2YXIgZj1bbFtjXV07byYmZi5wdXNoKG8pLHUhPT1hJiZmLnB1c2godVtjXSkseVtlK3NbY11dPWZ9ZGVsZXRlIHlbZV19fX0pO2Zvcih2YXIgeiBpbiB5KXt2YXIgTz1wKHlbel0pLHE9T1swXSwkPU9bMV0sTT1PWzJdO3o9Uy5OYW1lcy5jYW1lbENhc2Uoeik7dmFyIEk9Uy5Ib29rcy5nZXRSb290KHopLEI9ITE7aWYoaShvKS5pc1NWR3x8XCJ0d2VlblwiPT09SXx8Uy5OYW1lcy5wcmVmaXhDaGVjayhJKVsxXSE9PSExfHxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSV0hPT1hKXsocy5kaXNwbGF5IT09YSYmbnVsbCE9PXMuZGlzcGxheSYmXCJub25lXCIhPT1zLmRpc3BsYXl8fHMudmlzaWJpbGl0eSE9PWEmJlwiaGlkZGVuXCIhPT1zLnZpc2liaWxpdHkpJiYvb3BhY2l0eXxmaWx0ZXIvLnRlc3QoeikmJiFNJiYwIT09cSYmKE09MCkscy5fY2FjaGVWYWx1ZXMmJkUmJkVbel0/KE09PT1hJiYoTT1FW3pdLmVuZFZhbHVlK0Vbel0udW5pdFR5cGUpLEI9aShvKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ldKTpTLkhvb2tzLnJlZ2lzdGVyZWRbel0/TT09PWE/KEI9Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sSSksTT1TLmdldFByb3BlcnR5VmFsdWUobyx6LEIpKTpCPVMuSG9va3MudGVtcGxhdGVzW0ldWzFdOk09PT1hJiYoTT1TLmdldFByb3BlcnR5VmFsdWUobyx6KSk7dmFyIFcsRyxZLEQ9ITE7aWYoVz1kKHosTSksTT1XWzBdLFk9V1sxXSxXPWQoeixxKSxxPVdbMF0ucmVwbGFjZSgvXihbKy1cXC8qXSk9LyxmdW5jdGlvbihlLHQpe3JldHVybiBEPXQsXCJcIn0pLEc9V1sxXSxNPXBhcnNlRmxvYXQoTSl8fDAscT1wYXJzZUZsb2F0KHEpfHwwLFwiJVwiPT09RyYmKC9eKGZvbnRTaXplfGxpbmVIZWlnaHQpJC8udGVzdCh6KT8ocS89MTAwLEc9XCJlbVwiKTovXnNjYWxlLy50ZXN0KHopPyhxLz0xMDAsRz1cIlwiKTovKFJlZHxHcmVlbnxCbHVlKSQvaS50ZXN0KHopJiYocT1xLzEwMCoyNTUsRz1cIlwiKSksL1tcXC8qXS8udGVzdChEKSlHPVk7ZWxzZSBpZihZIT09RyYmMCE9PU0paWYoMD09PXEpRz1ZO2Vsc2V7bj1ufHxoKCk7dmFyIFE9L21hcmdpbnxwYWRkaW5nfGxlZnR8cmlnaHR8d2lkdGh8dGV4dHx3b3JkfGxldHRlci9pLnRlc3Qoeil8fC9YJC8udGVzdCh6KXx8XCJ4XCI9PT16P1wieFwiOlwieVwiO3N3aXRjaChZKXtjYXNlXCIlXCI6TSo9XCJ4XCI9PT1RP24ucGVyY2VudFRvUHhXaWR0aDpuLnBlcmNlbnRUb1B4SGVpZ2h0O2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpNKj1uW1krXCJUb1B4XCJdfXN3aXRjaChHKXtjYXNlXCIlXCI6TSo9MS8oXCJ4XCI9PT1RP24ucGVyY2VudFRvUHhXaWR0aDpuLnBlcmNlbnRUb1B4SGVpZ2h0KTticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6TSo9MS9uW0crXCJUb1B4XCJdfX1zd2l0Y2goRCl7Y2FzZVwiK1wiOnE9TStxO2JyZWFrO2Nhc2VcIi1cIjpxPU0tcTticmVhaztjYXNlXCIqXCI6cT1NKnE7YnJlYWs7Y2FzZVwiL1wiOnE9TS9xfWxbel09e3Jvb3RQcm9wZXJ0eVZhbHVlOkIsc3RhcnRWYWx1ZTpNLGN1cnJlbnRWYWx1ZTpNLGVuZFZhbHVlOnEsdW5pdFR5cGU6RyxlYXNpbmc6JH0sYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKFwiK3orXCIpOiBcIitKU09OLnN0cmluZ2lmeShsW3pdKSxvKX1lbHNlIGIuZGVidWcmJmNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiK0krXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKX1sLmVsZW1lbnQ9b31sLmVsZW1lbnQmJihTLlZhbHVlcy5hZGRDbGFzcyhvLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpLFIucHVzaChsKSxcIlwiPT09cy5xdWV1ZSYmKGkobykudHdlZW5zQ29udGFpbmVyPWwsaShvKS5vcHRzPXMpLGkobykuaXNBbmltYXRpbmc9ITAsVj09PXctMT8oYi5TdGF0ZS5jYWxscy5wdXNoKFtSLGcscyxudWxsLGsucmVzb2x2ZXJdKSxiLlN0YXRlLmlzVGlja2luZz09PSExJiYoYi5TdGF0ZS5pc1RpY2tpbmc9ITAsYygpKSk6VisrKX12YXIgbixvPXRoaXMscz1mLmV4dGVuZCh7fSxiLmRlZmF1bHRzLHYpLGw9e307c3dpdGNoKGkobyk9PT1hJiZiLmluaXQobykscGFyc2VGbG9hdChzLmRlbGF5KSYmcy5xdWV1ZSE9PSExJiZmLnF1ZXVlKG8scy5xdWV1ZSxmdW5jdGlvbihlKXtiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsaShvKS5kZWxheVRpbWVyPXtzZXRUaW1lb3V0OnNldFRpbWVvdXQoZSxwYXJzZUZsb2F0KHMuZGVsYXkpKSxuZXh0OmV9fSkscy5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImZhc3RcIjpzLmR1cmF0aW9uPTIwMDticmVhaztjYXNlXCJub3JtYWxcIjpzLmR1cmF0aW9uPWg7YnJlYWs7Y2FzZVwic2xvd1wiOnMuZHVyYXRpb249NjAwO2JyZWFrO2RlZmF1bHQ6cy5kdXJhdGlvbj1wYXJzZUZsb2F0KHMuZHVyYXRpb24pfHwxfWIubW9jayE9PSExJiYoYi5tb2NrPT09ITA/cy5kdXJhdGlvbj1zLmRlbGF5PTE6KHMuZHVyYXRpb24qPXBhcnNlRmxvYXQoYi5tb2NrKXx8MSxzLmRlbGF5Kj1wYXJzZUZsb2F0KGIubW9jayl8fDEpKSxzLmVhc2luZz11KHMuZWFzaW5nLHMuZHVyYXRpb24pLHMuYmVnaW4mJiFtLmlzRnVuY3Rpb24ocy5iZWdpbikmJihzLmJlZ2luPW51bGwpLHMucHJvZ3Jlc3MmJiFtLmlzRnVuY3Rpb24ocy5wcm9ncmVzcykmJihzLnByb2dyZXNzPW51bGwpLHMuY29tcGxldGUmJiFtLmlzRnVuY3Rpb24ocy5jb21wbGV0ZSkmJihzLmNvbXBsZXRlPW51bGwpLHMuZGlzcGxheSE9PWEmJm51bGwhPT1zLmRpc3BsYXkmJihzLmRpc3BsYXk9cy5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcImF1dG9cIj09PXMuZGlzcGxheSYmKHMuZGlzcGxheT1iLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUobykpKSxzLnZpc2liaWxpdHkhPT1hJiZudWxsIT09cy52aXNpYmlsaXR5JiYocy52aXNpYmlsaXR5PXMudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLHMubW9iaWxlSEE9cy5tb2JpbGVIQSYmYi5TdGF0ZS5pc01vYmlsZSYmIWIuU3RhdGUuaXNHaW5nZXJicmVhZCxzLnF1ZXVlPT09ITE/cy5kZWxheT9zZXRUaW1lb3V0KGUscy5kZWxheSk6ZSgpOmYucXVldWUobyxzLnF1ZXVlLGZ1bmN0aW9uKHQscil7cmV0dXJuIHI9PT0hMD8oay5wcm9taXNlJiZrLnJlc29sdmVyKGcpLCEwKTooYi52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLHZvaWQgZSh0KSl9KSxcIlwiIT09cy5xdWV1ZSYmXCJmeFwiIT09cy5xdWV1ZXx8XCJpbnByb2dyZXNzXCI9PT1mLnF1ZXVlKG8pWzBdfHxmLmRlcXVldWUobyl9dmFyIHMsbCxkLGcseSx2LHg9YXJndW1lbnRzWzBdJiYoYXJndW1lbnRzWzBdLnB8fGYuaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykmJiFhcmd1bWVudHNbMF0ucHJvcGVydGllcy5uYW1lc3x8bS5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpO2lmKG0uaXNXcmFwcGVkKHRoaXMpPyhzPSExLGQ9MCxnPXRoaXMsbD10aGlzKToocz0hMCxkPTEsZz14P2FyZ3VtZW50c1swXS5lbGVtZW50c3x8YXJndW1lbnRzWzBdLmU6YXJndW1lbnRzWzBdKSxnPW8oZykpe3g/KHk9YXJndW1lbnRzWzBdLnByb3BlcnRpZXN8fGFyZ3VtZW50c1swXS5wLHY9YXJndW1lbnRzWzBdLm9wdGlvbnN8fGFyZ3VtZW50c1swXS5vKTooeT1hcmd1bWVudHNbZF0sdj1hcmd1bWVudHNbZCsxXSk7dmFyIHc9Zy5sZW5ndGgsVj0wO2lmKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdCh5KSYmIWYuaXNQbGFpbk9iamVjdCh2KSl7dmFyIEM9ZCsxO3Y9e307Zm9yKHZhciBUPUM7VDxhcmd1bWVudHMubGVuZ3RoO1QrKyltLmlzQXJyYXkoYXJndW1lbnRzW1RdKXx8IS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW1RdKSYmIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tUXSk/bS5pc1N0cmluZyhhcmd1bWVudHNbVF0pfHxtLmlzQXJyYXkoYXJndW1lbnRzW1RdKT92LmVhc2luZz1hcmd1bWVudHNbVF06bS5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tUXSkmJih2LmNvbXBsZXRlPWFyZ3VtZW50c1tUXSk6di5kdXJhdGlvbj1hcmd1bWVudHNbVF19dmFyIGs9e3Byb21pc2U6bnVsbCxyZXNvbHZlcjpudWxsLHJlamVjdGVyOm51bGx9O3MmJmIuUHJvbWlzZSYmKGsucHJvbWlzZT1uZXcgYi5Qcm9taXNlKGZ1bmN0aW9uKGUsdCl7ay5yZXNvbHZlcj1lLGsucmVqZWN0ZXI9dH0pKTt2YXIgQTtzd2l0Y2goeSl7Y2FzZVwic2Nyb2xsXCI6QT1cInNjcm9sbFwiO2JyZWFrO2Nhc2VcInJldmVyc2VcIjpBPVwicmV2ZXJzZVwiO2JyZWFrO2Nhc2VcImZpbmlzaFwiOmNhc2VcInN0b3BcIjpmLmVhY2goZyxmdW5jdGlvbihlLHQpe2kodCkmJmkodCkuZGVsYXlUaW1lciYmKGNsZWFyVGltZW91dChpKHQpLmRlbGF5VGltZXIuc2V0VGltZW91dCksaSh0KS5kZWxheVRpbWVyLm5leHQmJmkodCkuZGVsYXlUaW1lci5uZXh0KCksZGVsZXRlIGkodCkuZGVsYXlUaW1lcil9KTt2YXIgRj1bXTtyZXR1cm4gZi5lYWNoKGIuU3RhdGUuY2FsbHMsZnVuY3Rpb24oZSx0KXt0JiZmLmVhY2godFsxXSxmdW5jdGlvbihyLG4pe3ZhciBvPXY9PT1hP1wiXCI6djtyZXR1cm4gbz09PSEwfHx0WzJdLnF1ZXVlPT09b3x8dj09PWEmJnRbMl0ucXVldWU9PT0hMT92b2lkIGYuZWFjaChnLGZ1bmN0aW9uKHIsYSl7YT09PW4mJigodj09PSEwfHxtLmlzU3RyaW5nKHYpKSYmKGYuZWFjaChmLnF1ZXVlKGEsbS5pc1N0cmluZyh2KT92OlwiXCIpLGZ1bmN0aW9uKGUsdCl7XG5tLmlzRnVuY3Rpb24odCkmJnQobnVsbCwhMCl9KSxmLnF1ZXVlKGEsbS5pc1N0cmluZyh2KT92OlwiXCIsW10pKSxcInN0b3BcIj09PXk/KGkoYSkmJmkoYSkudHdlZW5zQ29udGFpbmVyJiZvIT09ITEmJmYuZWFjaChpKGEpLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihlLHQpe3QuZW5kVmFsdWU9dC5jdXJyZW50VmFsdWV9KSxGLnB1c2goZSkpOlwiZmluaXNoXCI9PT15JiYodFsyXS5kdXJhdGlvbj0xKSl9KTohMH0pfSksXCJzdG9wXCI9PT15JiYoZi5lYWNoKEYsZnVuY3Rpb24oZSx0KXtwKHQsITApfSksay5wcm9taXNlJiZrLnJlc29sdmVyKGcpKSxlKCk7ZGVmYXVsdDppZighZi5pc1BsYWluT2JqZWN0KHkpfHxtLmlzRW1wdHlPYmplY3QoeSkpe2lmKG0uaXNTdHJpbmcoeSkmJmIuUmVkaXJlY3RzW3ldKXt2YXIgaj1mLmV4dGVuZCh7fSx2KSxFPWouZHVyYXRpb24sSD1qLmRlbGF5fHwwO3JldHVybiBqLmJhY2t3YXJkcz09PSEwJiYoZz1mLmV4dGVuZCghMCxbXSxnKS5yZXZlcnNlKCkpLGYuZWFjaChnLGZ1bmN0aW9uKGUsdCl7cGFyc2VGbG9hdChqLnN0YWdnZXIpP2ouZGVsYXk9SCtwYXJzZUZsb2F0KGouc3RhZ2dlcikqZTptLmlzRnVuY3Rpb24oai5zdGFnZ2VyKSYmKGouZGVsYXk9SCtqLnN0YWdnZXIuY2FsbCh0LGUsdykpLGouZHJhZyYmKGouZHVyYXRpb249cGFyc2VGbG9hdChFKXx8KC9eKGNhbGxvdXR8dHJhbnNpdGlvbikvLnRlc3QoeSk/MWUzOmgpLGouZHVyYXRpb249TWF0aC5tYXgoai5kdXJhdGlvbiooai5iYWNrd2FyZHM/MS1lL3c6KGUrMSkvdyksLjc1KmouZHVyYXRpb24sMjAwKSksYi5SZWRpcmVjdHNbeV0uY2FsbCh0LHQsanx8e30sZSx3LGcsay5wcm9taXNlP2s6YSl9KSxlKCl9dmFyIE49XCJWZWxvY2l0eTogRmlyc3QgYXJndW1lbnQgKFwiK3krXCIpIHdhcyBub3QgYSBwcm9wZXJ0eSBtYXAsIGEga25vd24gYWN0aW9uLCBvciBhIHJlZ2lzdGVyZWQgcmVkaXJlY3QuIEFib3J0aW5nLlwiO3JldHVybiBrLnByb21pc2U/ay5yZWplY3RlcihuZXcgRXJyb3IoTikpOmNvbnNvbGUubG9nKE4pLGUoKX1BPVwic3RhcnRcIn12YXIgTD17bGFzdFBhcmVudDpudWxsLGxhc3RQb3NpdGlvbjpudWxsLGxhc3RGb250U2l6ZTpudWxsLGxhc3RQZXJjZW50VG9QeFdpZHRoOm51bGwsbGFzdFBlcmNlbnRUb1B4SGVpZ2h0Om51bGwsbGFzdEVtVG9QeDpudWxsLHJlbVRvUHg6bnVsbCx2d1RvUHg6bnVsbCx2aFRvUHg6bnVsbH0sUj1bXTtmLmVhY2goZyxmdW5jdGlvbihlLHQpe20uaXNOb2RlKHQpJiZuLmNhbGwodCl9KTt2YXIgeixqPWYuZXh0ZW5kKHt9LGIuZGVmYXVsdHMsdik7aWYoai5sb29wPXBhcnNlSW50KGoubG9vcCksej0yKmoubG9vcC0xLGoubG9vcClmb3IodmFyIE89MDt6Pk87TysrKXt2YXIgcT17ZGVsYXk6ai5kZWxheSxwcm9ncmVzczpqLnByb2dyZXNzfTtPPT09ei0xJiYocS5kaXNwbGF5PWouZGlzcGxheSxxLnZpc2liaWxpdHk9ai52aXNpYmlsaXR5LHEuY29tcGxldGU9ai5jb21wbGV0ZSksUChnLFwicmV2ZXJzZVwiLHEpfXJldHVybiBlKCl9fTtiPWYuZXh0ZW5kKFAsYiksYi5hbmltYXRlPVA7dmFyIHc9dC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGc7cmV0dXJuIGIuU3RhdGUuaXNNb2JpbGV8fHIuaGlkZGVuPT09YXx8ci5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7ci5oaWRkZW4/KHc9ZnVuY3Rpb24oZSl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKCEwKX0sMTYpfSxjKCkpOnc9dC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGd9KSxlLlZlbG9jaXR5PWIsZSE9PXQmJihlLmZuLnZlbG9jaXR5PVAsZS5mbi52ZWxvY2l0eS5kZWZhdWx0cz1iLmRlZmF1bHRzKSxmLmVhY2goW1wiRG93blwiLFwiVXBcIl0sZnVuY3Rpb24oZSx0KXtiLlJlZGlyZWN0c1tcInNsaWRlXCIrdF09ZnVuY3Rpb24oZSxyLG4sbyxpLHMpe3ZhciBsPWYuZXh0ZW5kKHt9LHIpLHU9bC5iZWdpbixjPWwuY29tcGxldGUscD17aGVpZ2h0OlwiXCIsbWFyZ2luVG9wOlwiXCIsbWFyZ2luQm90dG9tOlwiXCIscGFkZGluZ1RvcDpcIlwiLHBhZGRpbmdCb3R0b206XCJcIn0sZD17fTtsLmRpc3BsYXk9PT1hJiYobC5kaXNwbGF5PVwiRG93blwiPT09dD9cImlubGluZVwiPT09Yi5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGUpP1wiaW5saW5lLWJsb2NrXCI6XCJibG9ja1wiOlwibm9uZVwiKSxsLmJlZ2luPWZ1bmN0aW9uKCl7dSYmdS5jYWxsKGksaSk7Zm9yKHZhciByIGluIHApe2Rbcl09ZS5zdHlsZVtyXTt2YXIgYT1iLkNTUy5nZXRQcm9wZXJ0eVZhbHVlKGUscik7cFtyXT1cIkRvd25cIj09PXQ/W2EsMF06WzAsYV19ZC5vdmVyZmxvdz1lLnN0eWxlLm92ZXJmbG93LGUuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIn0sbC5jb21wbGV0ZT1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiBkKWUuc3R5bGVbdF09ZFt0XTtjJiZjLmNhbGwoaSxpKSxzJiZzLnJlc29sdmVyKGkpfSxiKGUscCxsKX19KSxmLmVhY2goW1wiSW5cIixcIk91dFwiXSxmdW5jdGlvbihlLHQpe2IuUmVkaXJlY3RzW1wiZmFkZVwiK3RdPWZ1bmN0aW9uKGUscixuLG8saSxzKXt2YXIgbD1mLmV4dGVuZCh7fSxyKSx1PXtvcGFjaXR5OlwiSW5cIj09PXQ/MTowfSxjPWwuY29tcGxldGU7bC5jb21wbGV0ZT1uIT09by0xP2wuYmVnaW49bnVsbDpmdW5jdGlvbigpe2MmJmMuY2FsbChpLGkpLHMmJnMucmVzb2x2ZXIoaSl9LGwuZGlzcGxheT09PWEmJihsLmRpc3BsYXk9XCJJblwiPT09dD9cImF1dG9cIjpcIm5vbmVcIiksYih0aGlzLHUsbCl9fSksYn0od2luZG93LmpRdWVyeXx8d2luZG93LlplcHRvfHx3aW5kb3csd2luZG93LGRvY3VtZW50KX0pKTtcbjshZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gayhhLGIsYyl7cmV0dXJuIHNldFRpbWVvdXQocShhLGMpLGIpfWZ1bmN0aW9uIGwoYSxiLGMpe3JldHVybiBBcnJheS5pc0FycmF5KGEpPyhtKGEsY1tiXSxjKSwhMCk6ITF9ZnVuY3Rpb24gbShhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gbihhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfWZ1bmN0aW9uIG8oYSxiKXtyZXR1cm4gbihhLGIsITApfWZ1bmN0aW9uIHAoYSxiLGMpe3ZhciBlLGQ9Yi5wcm90b3R5cGU7ZT1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGQpLGUuY29uc3RydWN0b3I9YSxlLl9zdXBlcj1kLGMmJm4oZSxjKX1mdW5jdGlvbiBxKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiByKGEsYil7cmV0dXJuIHR5cGVvZiBhPT1nP2EuYXBwbHkoYj9iWzBdfHxkOmQsYik6YX1mdW5jdGlvbiBzKGEsYil7cmV0dXJuIGE9PT1kP2I6YX1mdW5jdGlvbiB0KGEsYixjKXttKHgoYiksZnVuY3Rpb24oYil7YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiB1KGEsYixjKXttKHgoYiksZnVuY3Rpb24oYil7YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiB2KGEsYil7Zm9yKDthOyl7aWYoYT09YilyZXR1cm4hMDthPWEucGFyZW50Tm9kZX1yZXR1cm4hMX1mdW5jdGlvbiB3KGEsYil7cmV0dXJuIGEuaW5kZXhPZihiKT4tMX1mdW5jdGlvbiB4KGEpe3JldHVybiBhLnRyaW0oKS5zcGxpdCgvXFxzKy9nKX1mdW5jdGlvbiB5KGEsYixjKXtpZihhLmluZGV4T2YmJiFjKXJldHVybiBhLmluZGV4T2YoYik7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDspe2lmKGMmJmFbZF1bY109PWJ8fCFjJiZhW2RdPT09YilyZXR1cm4gZDtkKyt9cmV0dXJuLTF9ZnVuY3Rpb24geihhKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwwKX1mdW5jdGlvbiBBKGEsYixjKXtmb3IodmFyIGQ9W10sZT1bXSxmPTA7ZjxhLmxlbmd0aDspe3ZhciBnPWI/YVtmXVtiXTphW2ZdO3koZSxnKTwwJiZkLnB1c2goYVtmXSksZVtmXT1nLGYrK31yZXR1cm4gYyYmKGQ9Yj9kLnNvcnQoZnVuY3Rpb24oYSxjKXtyZXR1cm4gYVtiXT5jW2JdfSk6ZC5zb3J0KCkpLGR9ZnVuY3Rpb24gQihhLGIpe2Zvcih2YXIgYyxmLGc9YlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksaD0wO2g8ZS5sZW5ndGg7KXtpZihjPWVbaF0sZj1jP2MrZzpiLGYgaW4gYSlyZXR1cm4gZjtoKyt9cmV0dXJuIGR9ZnVuY3Rpb24gRCgpe3JldHVybiBDKyt9ZnVuY3Rpb24gRShhKXt2YXIgYj1hLm93bmVyRG9jdW1lbnQ7cmV0dXJuIGIuZGVmYXVsdFZpZXd8fGIucGFyZW50V2luZG93fWZ1bmN0aW9uIGFiKGEsYil7dmFyIGM9dGhpczt0aGlzLm1hbmFnZXI9YSx0aGlzLmNhbGxiYWNrPWIsdGhpcy5lbGVtZW50PWEuZWxlbWVudCx0aGlzLnRhcmdldD1hLm9wdGlvbnMuaW5wdXRUYXJnZXQsdGhpcy5kb21IYW5kbGVyPWZ1bmN0aW9uKGIpe3IoYS5vcHRpb25zLmVuYWJsZSxbYV0pJiZjLmhhbmRsZXIoYil9LHRoaXMuaW5pdCgpfWZ1bmN0aW9uIGJiKGEpe3ZhciBiLGM9YS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIGI9Yz9jOkg/d2I6ST9FYjpHP0diOnJiLG5ldyBiKGEsY2IpfWZ1bmN0aW9uIGNiKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJzLmxlbmd0aCxlPWMuY2hhbmdlZFBvaW50ZXJzLmxlbmd0aCxmPWImTyYmMD09PWQtZSxnPWImKFF8UikmJjA9PT1kLWU7Yy5pc0ZpcnN0PSEhZixjLmlzRmluYWw9ISFnLGYmJihhLnNlc3Npb249e30pLGMuZXZlbnRUeXBlPWIsZGIoYSxjKSxhLmVtaXQoXCJoYW1tZXIuaW5wdXRcIixjKSxhLnJlY29nbml6ZShjKSxhLnNlc3Npb24ucHJldklucHV0PWN9ZnVuY3Rpb24gZGIoYSxiKXt2YXIgYz1hLnNlc3Npb24sZD1iLnBvaW50ZXJzLGU9ZC5sZW5ndGg7Yy5maXJzdElucHV0fHwoYy5maXJzdElucHV0PWdiKGIpKSxlPjEmJiFjLmZpcnN0TXVsdGlwbGU/Yy5maXJzdE11bHRpcGxlPWdiKGIpOjE9PT1lJiYoYy5maXJzdE11bHRpcGxlPSExKTt2YXIgZj1jLmZpcnN0SW5wdXQsZz1jLmZpcnN0TXVsdGlwbGUsaD1nP2cuY2VudGVyOmYuY2VudGVyLGk9Yi5jZW50ZXI9aGIoZCk7Yi50aW1lU3RhbXA9aigpLGIuZGVsdGFUaW1lPWIudGltZVN0YW1wLWYudGltZVN0YW1wLGIuYW5nbGU9bGIoaCxpKSxiLmRpc3RhbmNlPWtiKGgsaSksZWIoYyxiKSxiLm9mZnNldERpcmVjdGlvbj1qYihiLmRlbHRhWCxiLmRlbHRhWSksYi5zY2FsZT1nP25iKGcucG9pbnRlcnMsZCk6MSxiLnJvdGF0aW9uPWc/bWIoZy5wb2ludGVycyxkKTowLGZiKGMsYik7dmFyIGs9YS5lbGVtZW50O3YoYi5zcmNFdmVudC50YXJnZXQsaykmJihrPWIuc3JjRXZlbnQudGFyZ2V0KSxiLnRhcmdldD1rfWZ1bmN0aW9uIGViKGEsYil7dmFyIGM9Yi5jZW50ZXIsZD1hLm9mZnNldERlbHRhfHx7fSxlPWEucHJldkRlbHRhfHx7fSxmPWEucHJldklucHV0fHx7fTsoYi5ldmVudFR5cGU9PT1PfHxmLmV2ZW50VHlwZT09PVEpJiYoZT1hLnByZXZEZWx0YT17eDpmLmRlbHRhWHx8MCx5OmYuZGVsdGFZfHwwfSxkPWEub2Zmc2V0RGVsdGE9e3g6Yy54LHk6Yy55fSksYi5kZWx0YVg9ZS54KyhjLngtZC54KSxiLmRlbHRhWT1lLnkrKGMueS1kLnkpfWZ1bmN0aW9uIGZiKGEsYil7dmFyIGYsZyxoLGosYz1hLmxhc3RJbnRlcnZhbHx8YixlPWIudGltZVN0YW1wLWMudGltZVN0YW1wO2lmKGIuZXZlbnRUeXBlIT1SJiYoZT5OfHxjLnZlbG9jaXR5PT09ZCkpe3ZhciBrPWMuZGVsdGFYLWIuZGVsdGFYLGw9Yy5kZWx0YVktYi5kZWx0YVksbT1pYihlLGssbCk7Zz1tLngsaD1tLnksZj1pKG0ueCk+aShtLnkpP20ueDptLnksaj1qYihrLGwpLGEubGFzdEludGVydmFsPWJ9ZWxzZSBmPWMudmVsb2NpdHksZz1jLnZlbG9jaXR5WCxoPWMudmVsb2NpdHlZLGo9Yy5kaXJlY3Rpb247Yi52ZWxvY2l0eT1mLGIudmVsb2NpdHlYPWcsYi52ZWxvY2l0eVk9aCxiLmRpcmVjdGlvbj1qfWZ1bmN0aW9uIGdiKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLnBvaW50ZXJzLmxlbmd0aDspYltjXT17Y2xpZW50WDpoKGEucG9pbnRlcnNbY10uY2xpZW50WCksY2xpZW50WTpoKGEucG9pbnRlcnNbY10uY2xpZW50WSl9LGMrKztyZXR1cm57dGltZVN0YW1wOmooKSxwb2ludGVyczpiLGNlbnRlcjpoYihiKSxkZWx0YVg6YS5kZWx0YVgsZGVsdGFZOmEuZGVsdGFZfX1mdW5jdGlvbiBoYihhKXt2YXIgYj1hLmxlbmd0aDtpZigxPT09YilyZXR1cm57eDpoKGFbMF0uY2xpZW50WCkseTpoKGFbMF0uY2xpZW50WSl9O2Zvcih2YXIgYz0wLGQ9MCxlPTA7Yj5lOyljKz1hW2VdLmNsaWVudFgsZCs9YVtlXS5jbGllbnRZLGUrKztyZXR1cm57eDpoKGMvYikseTpoKGQvYil9fWZ1bmN0aW9uIGliKGEsYixjKXtyZXR1cm57eDpiL2F8fDAseTpjL2F8fDB9fWZ1bmN0aW9uIGpiKGEsYil7cmV0dXJuIGE9PT1iP1M6aShhKT49aShiKT9hPjA/VDpVOmI+MD9WOld9ZnVuY3Rpb24ga2IoYSxiLGMpe2N8fChjPSQpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQqZCtlKmUpfWZ1bmN0aW9uIGxiKGEsYixjKXtjfHwoYz0kKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIDE4MCpNYXRoLmF0YW4yKGUsZCkvTWF0aC5QSX1mdW5jdGlvbiBtYihhLGIpe3JldHVybiBsYihiWzFdLGJbMF0sXyktbGIoYVsxXSxhWzBdLF8pfWZ1bmN0aW9uIG5iKGEsYil7cmV0dXJuIGtiKGJbMF0sYlsxXSxfKS9rYihhWzBdLGFbMV0sXyl9ZnVuY3Rpb24gcmIoKXt0aGlzLmV2RWw9cGIsdGhpcy5ldldpbj1xYix0aGlzLmFsbG93PSEwLHRoaXMucHJlc3NlZD0hMSxhYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gd2IoKXt0aGlzLmV2RWw9dWIsdGhpcy5ldldpbj12YixhYi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5zdG9yZT10aGlzLm1hbmFnZXIuc2Vzc2lvbi5wb2ludGVyRXZlbnRzPVtdfWZ1bmN0aW9uIEFiKCl7dGhpcy5ldlRhcmdldD15Yix0aGlzLmV2V2luPXpiLHRoaXMuc3RhcnRlZD0hMSxhYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gQmIoYSxiKXt2YXIgYz16KGEudG91Y2hlcyksZD16KGEuY2hhbmdlZFRvdWNoZXMpO3JldHVybiBiJihRfFIpJiYoYz1BKGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gRWIoKXt0aGlzLmV2VGFyZ2V0PURiLHRoaXMudGFyZ2V0SWRzPXt9LGFiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBGYihhLGIpe3ZhciBjPXooYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKE98UCkmJjE9PT1jLmxlbmd0aClyZXR1cm4gZFtjWzBdLmlkZW50aWZpZXJdPSEwLFtjLGNdO3ZhciBlLGYsZz16KGEuY2hhbmdlZFRvdWNoZXMpLGg9W10saT10aGlzLnRhcmdldDtpZihmPWMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiB2KGEudGFyZ2V0LGkpfSksYj09PU8pZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoUXxSKSYmZGVsZXRlIGRbZ1tlXS5pZGVudGlmaWVyXSxlKys7cmV0dXJuIGgubGVuZ3RoP1tBKGYuY29uY2F0KGgpLFwiaWRlbnRpZmllclwiLCEwKSxoXTp2b2lkIDB9ZnVuY3Rpb24gR2IoKXthYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9cSh0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgRWIodGhpcy5tYW5hZ2VyLGEpLHRoaXMubW91c2U9bmV3IHJiKHRoaXMubWFuYWdlcixhKX1mdW5jdGlvbiBQYihhLGIpe3RoaXMubWFuYWdlcj1hLHRoaXMuc2V0KGIpfWZ1bmN0aW9uIFFiKGEpe2lmKHcoYSxNYikpcmV0dXJuIE1iO3ZhciBiPXcoYSxOYiksYz13KGEsT2IpO3JldHVybiBiJiZjP05iK1wiIFwiK09iOmJ8fGM/Yj9OYjpPYjp3KGEsTGIpP0xiOktifWZ1bmN0aW9uIFliKGEpe3RoaXMuaWQ9RCgpLHRoaXMubWFuYWdlcj1udWxsLHRoaXMub3B0aW9ucz1vKGF8fHt9LHRoaXMuZGVmYXVsdHMpLHRoaXMub3B0aW9ucy5lbmFibGU9cyh0aGlzLm9wdGlvbnMuZW5hYmxlLCEwKSx0aGlzLnN0YXRlPVJiLHRoaXMuc2ltdWx0YW5lb3VzPXt9LHRoaXMucmVxdWlyZUZhaWw9W119ZnVuY3Rpb24gWmIoYSl7cmV0dXJuIGEmV2I/XCJjYW5jZWxcIjphJlViP1wiZW5kXCI6YSZUYj9cIm1vdmVcIjphJlNiP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uICRiKGEpe3JldHVybiBhPT1XP1wiZG93blwiOmE9PVY/XCJ1cFwiOmE9PVQ/XCJsZWZ0XCI6YT09VT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBfYihhLGIpe3ZhciBjPWIubWFuYWdlcjtyZXR1cm4gYz9jLmdldChhKTphfWZ1bmN0aW9uIGFjKCl7WWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGJjKCl7YWMuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFg9bnVsbCx0aGlzLnBZPW51bGx9ZnVuY3Rpb24gY2MoKXthYy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZGMoKXtZYi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsfWZ1bmN0aW9uIGVjKCl7YWMuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGZjKCl7YWMuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGdjKCl7WWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFRpbWU9ITEsdGhpcy5wQ2VudGVyPSExLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLmNvdW50PTB9ZnVuY3Rpb24gaGMoYSxiKXtyZXR1cm4gYj1ifHx7fSxiLnJlY29nbml6ZXJzPXMoYi5yZWNvZ25pemVycyxoYy5kZWZhdWx0cy5wcmVzZXQpLG5ldyBrYyhhLGIpfWZ1bmN0aW9uIGtjKGEsYil7Yj1ifHx7fSx0aGlzLm9wdGlvbnM9byhiLGhjLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXQ9dGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0fHxhLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMucmVjb2duaXplcnM9W10sdGhpcy5lbGVtZW50PWEsdGhpcy5pbnB1dD1iYih0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBQYih0aGlzLHRoaXMub3B0aW9ucy50b3VjaEFjdGlvbiksbGModGhpcywhMCksbShiLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWRkKG5ldyBhWzBdKGFbMV0pKTthWzJdJiZiLnJlY29nbml6ZVdpdGgoYVsyXSksYVszXSYmYi5yZXF1aXJlRmFpbHVyZShhWzNdKX0sdGhpcyl9ZnVuY3Rpb24gbGMoYSxiKXt2YXIgYz1hLmVsZW1lbnQ7bShhLm9wdGlvbnMuY3NzUHJvcHMsZnVuY3Rpb24oYSxkKXtjLnN0eWxlW0IoYy5zdHlsZSxkKV09Yj9hOlwiXCJ9KX1mdW5jdGlvbiBtYyhhLGMpe3ZhciBkPWIuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtkLmluaXRFdmVudChhLCEwLCEwKSxkLmdlc3R1cmU9YyxjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpfXZhciBlPVtcIlwiLFwid2Via2l0XCIsXCJtb3pcIixcIk1TXCIsXCJtc1wiLFwib1wiXSxmPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxnPVwiZnVuY3Rpb25cIixoPU1hdGgucm91bmQsaT1NYXRoLmFicyxqPURhdGUubm93LEM9MSxGPS9tb2JpbGV8dGFibGV0fGlwKGFkfGhvbmV8b2QpfGFuZHJvaWQvaSxHPVwib250b3VjaHN0YXJ0XCJpbiBhLEg9QihhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCxJPUcmJkYudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxKPVwidG91Y2hcIixLPVwicGVuXCIsTD1cIm1vdXNlXCIsTT1cImtpbmVjdFwiLE49MjUsTz0xLFA9MixRPTQsUj04LFM9MSxUPTIsVT00LFY9OCxXPTE2LFg9VHxVLFk9VnxXLFo9WHxZLCQ9W1wieFwiLFwieVwiXSxfPVtcImNsaWVudFhcIixcImNsaWVudFlcIl07YWIucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZ0KHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZ0KHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZ0KEUodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJnUodGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJnUodGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJnUoRSh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBvYj17bW91c2Vkb3duOk8sbW91c2Vtb3ZlOlAsbW91c2V1cDpRfSxwYj1cIm1vdXNlZG93blwiLHFiPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtwKHJiLGFiLHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPW9iW2EudHlwZV07YiZPJiYwPT09YS5idXR0b24mJih0aGlzLnByZXNzZWQ9ITApLGImUCYmMSE9PWEud2hpY2gmJihiPVEpLHRoaXMucHJlc3NlZCYmdGhpcy5hbGxvdyYmKGImUSYmKHRoaXMucHJlc3NlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6W2FdLGNoYW5nZWRQb2ludGVyczpbYV0scG9pbnRlclR5cGU6TCxzcmNFdmVudDphfSkpfX0pO3ZhciBzYj17cG9pbnRlcmRvd246Tyxwb2ludGVybW92ZTpQLHBvaW50ZXJ1cDpRLHBvaW50ZXJjYW5jZWw6Uixwb2ludGVyb3V0OlJ9LHRiPXsyOkosMzpLLDQ6TCw1Ok19LHViPVwicG9pbnRlcmRvd25cIix2Yj1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmKHViPVwiTVNQb2ludGVyRG93blwiLHZiPVwiTVNQb2ludGVyTW92ZSBNU1BvaW50ZXJVcCBNU1BvaW50ZXJDYW5jZWxcIikscCh3YixhYix7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0b3JlLGM9ITEsZD1hLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIixcIlwiKSxlPXNiW2RdLGY9dGJbYS5wb2ludGVyVHlwZV18fGEucG9pbnRlclR5cGUsZz1mPT1KLGg9eShiLGEucG9pbnRlcklkLFwicG9pbnRlcklkXCIpO2UmTyYmKDA9PT1hLmJ1dHRvbnx8Zyk/MD5oJiYoYi5wdXNoKGEpLGg9Yi5sZW5ndGgtMSk6ZSYoUXxSKSYmKGM9ITApLDA+aHx8KGJbaF09YSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixlLHtwb2ludGVyczpiLGNoYW5nZWRQb2ludGVyczpbYV0scG9pbnRlclR5cGU6ZixzcmNFdmVudDphfSksYyYmYi5zcGxpY2UoaCwxKSl9fSk7dmFyIHhiPXt0b3VjaHN0YXJ0Ok8sdG91Y2htb3ZlOlAsdG91Y2hlbmQ6USx0b3VjaGNhbmNlbDpSfSx5Yj1cInRvdWNoc3RhcnRcIix6Yj1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7cChBYixhYix7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj14YlthLnR5cGVdO2lmKGI9PT1PJiYodGhpcy5zdGFydGVkPSEwKSx0aGlzLnN0YXJ0ZWQpe3ZhciBjPUJiLmNhbGwodGhpcyxhLGIpO2ImKFF8UikmJjA9PT1jWzBdLmxlbmd0aC1jWzFdLmxlbmd0aCYmKHRoaXMuc3RhcnRlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTpKLHNyY0V2ZW50OmF9KX19fSk7dmFyIENiPXt0b3VjaHN0YXJ0Ok8sdG91Y2htb3ZlOlAsdG91Y2hlbmQ6USx0b3VjaGNhbmNlbDpSfSxEYj1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7cChFYixhYix7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1DYlthLnR5cGVdLGM9RmIuY2FsbCh0aGlzLGEsYik7YyYmdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTpKLHNyY0V2ZW50OmF9KX19KSxwKEdiLGFiLHtoYW5kbGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJUeXBlPT1KLGU9Yy5wb2ludGVyVHlwZT09TDtpZihkKXRoaXMubW91c2UuYWxsb3c9ITE7ZWxzZSBpZihlJiYhdGhpcy5tb3VzZS5hbGxvdylyZXR1cm47YiYoUXxSKSYmKHRoaXMubW91c2UuYWxsb3c9ITApLHRoaXMuY2FsbGJhY2soYSxiLGMpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy50b3VjaC5kZXN0cm95KCksdGhpcy5tb3VzZS5kZXN0cm95KCl9fSk7dmFyIEhiPUIoZi5zdHlsZSxcInRvdWNoQWN0aW9uXCIpLEliPUhiIT09ZCxKYj1cImNvbXB1dGVcIixLYj1cImF1dG9cIixMYj1cIm1hbmlwdWxhdGlvblwiLE1iPVwibm9uZVwiLE5iPVwicGFuLXhcIixPYj1cInBhbi15XCI7UGIucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7YT09SmImJihhPXRoaXMuY29tcHV0ZSgpKSxJYiYmKHRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlW0hiXT1hKSx0aGlzLmFjdGlvbnM9YS50b0xvd2VyQ2FzZSgpLnRyaW0oKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zZXQodGhpcy5tYW5hZ2VyLm9wdGlvbnMudG91Y2hBY3Rpb24pfSxjb21wdXRlOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIG0odGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGIpe3IoYi5vcHRpb25zLmVuYWJsZSxbYl0pJiYoYT1hLmNvbmNhdChiLmdldFRvdWNoQWN0aW9uKCkpKX0pLFFiKGEuam9pbihcIiBcIikpfSxwcmV2ZW50RGVmYXVsdHM6ZnVuY3Rpb24oYSl7aWYoIUliKXt2YXIgYj1hLnNyY0V2ZW50LGM9YS5vZmZzZXREaXJlY3Rpb247aWYodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKXJldHVybiBiLnByZXZlbnREZWZhdWx0KCksdm9pZCAwO3ZhciBkPXRoaXMuYWN0aW9ucyxlPXcoZCxNYiksZj13KGQsT2IpLGc9dyhkLE5iKTtyZXR1cm4gZXx8ZiYmYyZYfHxnJiZjJlk/dGhpcy5wcmV2ZW50U3JjKGIpOnZvaWQgMH19LHByZXZlbnRTcmM6ZnVuY3Rpb24oYSl7dGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkPSEwLGEucHJldmVudERlZmF1bHQoKX19O3ZhciBSYj0xLFNiPTIsVGI9NCxVYj04LFZiPVViLFdiPTE2LFhiPTMyO1liLnByb3RvdHlwZT17ZGVmYXVsdHM6e30sc2V0OmZ1bmN0aW9uKGEpe3JldHVybiBuKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGwoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1fYihhLHRoaXMpLGJbYS5pZF18fChiW2EuaWRdPWEsYS5yZWNvZ25pemVXaXRoKHRoaXMpKSx0aGlzfSxkcm9wUmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtyZXR1cm4gbChhLFwiZHJvcFJlY29nbml6ZVdpdGhcIix0aGlzKT90aGlzOihhPV9iKGEsdGhpcyksZGVsZXRlIHRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdLHRoaXMpfSxyZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihsKGEsXCJyZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVxdWlyZUZhaWw7cmV0dXJuIGE9X2IoYSx0aGlzKSwtMT09PXkoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYobChhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1fYihhLHRoaXMpO3ZhciBiPXkodGhpcy5yZXF1aXJlRmFpbCxhKTtyZXR1cm4gYj4tMSYmdGhpcy5yZXF1aXJlRmFpbC5zcGxpY2UoYiwxKSx0aGlzfSxoYXNSZXF1aXJlRmFpbHVyZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg+MH0sY2FuUmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtyZXR1cm4hIXRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdfSxlbWl0OmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGQoZCl7Yi5tYW5hZ2VyLmVtaXQoYi5vcHRpb25zLmV2ZW50KyhkP1piKGMpOlwiXCIpLGEpfXZhciBiPXRoaXMsYz10aGlzLnN0YXRlO1ViPmMmJmQoITApLGQoKSxjPj1VYiYmZCghMCl9LHRyeUVtaXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2FuRW1pdCgpP3RoaXMuZW1pdChhKToodGhpcy5zdGF0ZT1YYix2b2lkIDApfSxjYW5FbWl0OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aDspe2lmKCEodGhpcy5yZXF1aXJlRmFpbFthXS5zdGF0ZSYoWGJ8UmIpKSlyZXR1cm4hMTthKyt9cmV0dXJuITB9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj1uKHt9LGEpO3JldHVybiByKHRoaXMub3B0aW9ucy5lbmFibGUsW3RoaXMsYl0pPyh0aGlzLnN0YXRlJihWYnxXYnxYYikmJih0aGlzLnN0YXRlPVJiKSx0aGlzLnN0YXRlPXRoaXMucHJvY2VzcyhiKSx0aGlzLnN0YXRlJihTYnxUYnxVYnxXYikmJnRoaXMudHJ5RW1pdChiKSx2b2lkIDApOih0aGlzLnJlc2V0KCksdGhpcy5zdGF0ZT1YYix2b2lkIDApfSxwcm9jZXNzOmZ1bmN0aW9uKCl7fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe30scmVzZXQ6ZnVuY3Rpb24oKXt9fSxwKGFjLFliLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKFNifFRiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJlJ8fCFlKT9ifFdiOmR8fGU/YyZRP2J8VWI6YiZTYj9ifFRiOlNiOlhifX0pLHAoYmMsYWMse2RlZmF1bHRzOntldmVudDpcInBhblwiLHRocmVzaG9sZDoxMCxwb2ludGVyczoxLGRpcmVjdGlvbjpafSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5kaXJlY3Rpb24sYj1bXTtyZXR1cm4gYSZYJiZiLnB1c2goT2IpLGEmWSYmYi5wdXNoKE5iKSxifSxkaXJlY3Rpb25UZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPSEwLGQ9YS5kaXN0YW5jZSxlPWEuZGlyZWN0aW9uLGY9YS5kZWx0YVgsZz1hLmRlbHRhWTtyZXR1cm4gZSZiLmRpcmVjdGlvbnx8KGIuZGlyZWN0aW9uJlg/KGU9MD09PWY/UzowPmY/VDpVLGM9ZiE9dGhpcy5wWCxkPU1hdGguYWJzKGEuZGVsdGFYKSk6KGU9MD09PWc/UzowPmc/VjpXLGM9ZyE9dGhpcy5wWSxkPU1hdGguYWJzKGEuZGVsdGFZKSkpLGEuZGlyZWN0aW9uPWUsYyYmZD5iLnRocmVzaG9sZCYmZSZiLmRpcmVjdGlvbn0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGFjLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJlNifHwhKHRoaXMuc3RhdGUmU2IpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj0kYihhLmRpcmVjdGlvbik7YiYmdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSksdGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSl9fSkscChjYyxhYyx7ZGVmYXVsdHM6e2V2ZW50OlwicGluY2hcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltNYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnNjYWxlLTEpPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmU2IpfSxlbWl0OmZ1bmN0aW9uKGEpe2lmKHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpLDEhPT1hLnNjYWxlKXt2YXIgYj1hLnNjYWxlPDE/XCJpblwiOlwib3V0XCI7dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSl9fX0pLHAoZGMsWWIse2RlZmF1bHRzOntldmVudDpcInByZXNzXCIscG9pbnRlcnM6MSx0aW1lOjUwMCx0aHJlc2hvbGQ6NX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bS2JdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZT1hLmRlbHRhVGltZT5iLnRpbWU7aWYodGhpcy5faW5wdXQ9YSwhZHx8IWN8fGEuZXZlbnRUeXBlJihRfFIpJiYhZSl0aGlzLnJlc2V0KCk7ZWxzZSBpZihhLmV2ZW50VHlwZSZPKXRoaXMucmVzZXQoKSx0aGlzLl90aW1lcj1rKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1WYix0aGlzLnRyeUVtaXQoKX0sYi50aW1lLHRoaXMpO2Vsc2UgaWYoYS5ldmVudFR5cGUmUSlyZXR1cm4gVmI7cmV0dXJuIFhifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PVZiJiYoYSYmYS5ldmVudFR5cGUmUT90aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrXCJ1cFwiLGEpOih0aGlzLl9pbnB1dC50aW1lU3RhbXA9aigpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpKX19KSxwKGVjLGFjLHtkZWZhdWx0czp7ZXZlbnQ6XCJyb3RhdGVcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltNYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnJvdGF0aW9uKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJlNiKX19KSxwKGZjLGFjLHtkZWZhdWx0czp7ZXZlbnQ6XCJzd2lwZVwiLHRocmVzaG9sZDoxMCx2ZWxvY2l0eTouNjUsZGlyZWN0aW9uOlh8WSxwb2ludGVyczoxfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybiBiYy5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGMsYj10aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBiJihYfFkpP2M9YS52ZWxvY2l0eTpiJlg/Yz1hLnZlbG9jaXR5WDpiJlkmJihjPWEudmVsb2NpdHlZKSx0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJmImYS5kaXJlY3Rpb24mJmEuZGlzdGFuY2U+dGhpcy5vcHRpb25zLnRocmVzaG9sZCYmaShjKT50aGlzLm9wdGlvbnMudmVsb2NpdHkmJmEuZXZlbnRUeXBlJlF9LGVtaXQ6ZnVuY3Rpb24oYSl7dmFyIGI9JGIoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCxhKX19KSxwKGdjLFliLHtkZWZhdWx0czp7ZXZlbnQ6XCJ0YXBcIixwb2ludGVyczoxLHRhcHM6MSxpbnRlcnZhbDozMDAsdGltZToyNTAsdGhyZXNob2xkOjIscG9zVGhyZXNob2xkOjEwfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltMYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxlPWEuZGVsdGFUaW1lPGIudGltZTtpZih0aGlzLnJlc2V0KCksYS5ldmVudFR5cGUmTyYmMD09PXRoaXMuY291bnQpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZihkJiZlJiZjKXtpZihhLmV2ZW50VHlwZSE9USlyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO3ZhciBmPXRoaXMucFRpbWU/YS50aW1lU3RhbXAtdGhpcy5wVGltZTxiLmludGVydmFsOiEwLGc9IXRoaXMucENlbnRlcnx8a2IodGhpcy5wQ2VudGVyLGEuY2VudGVyKTxiLnBvc1RocmVzaG9sZDt0aGlzLnBUaW1lPWEudGltZVN0YW1wLHRoaXMucENlbnRlcj1hLmNlbnRlcixnJiZmP3RoaXMuY291bnQrPTE6dGhpcy5jb3VudD0xLHRoaXMuX2lucHV0PWE7dmFyIGg9dGhpcy5jb3VudCViLnRhcHM7aWYoMD09PWgpcmV0dXJuIHRoaXMuaGFzUmVxdWlyZUZhaWx1cmVzKCk/KHRoaXMuX3RpbWVyPWsoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPVZiLHRoaXMudHJ5RW1pdCgpfSxiLmludGVydmFsLHRoaXMpLFNiKTpWYn1yZXR1cm4gWGJ9LGZhaWxUaW1lb3V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RpbWVyPWsoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPVhifSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwsdGhpcyksWGJ9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbigpe3RoaXMuc3RhdGU9PVZiJiYodGhpcy5faW5wdXQudGFwQ291bnQ9dGhpcy5jb3VudCx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKX19KSxoYy5WRVJTSU9OPVwiMi4wLjRcIixoYy5kZWZhdWx0cz17ZG9tRXZlbnRzOiExLHRvdWNoQWN0aW9uOkpiLGVuYWJsZTohMCxpbnB1dFRhcmdldDpudWxsLGlucHV0Q2xhc3M6bnVsbCxwcmVzZXQ6W1tlYyx7ZW5hYmxlOiExfV0sW2NjLHtlbmFibGU6ITF9LFtcInJvdGF0ZVwiXV0sW2ZjLHtkaXJlY3Rpb246WH1dLFtiYyx7ZGlyZWN0aW9uOlh9LFtcInN3aXBlXCJdXSxbZ2NdLFtnYyx7ZXZlbnQ6XCJkb3VibGV0YXBcIix0YXBzOjJ9LFtcInRhcFwiXV0sW2RjXV0sY3NzUHJvcHM6e3VzZXJTZWxlY3Q6XCJkZWZhdWx0XCIsdG91Y2hTZWxlY3Q6XCJub25lXCIsdG91Y2hDYWxsb3V0Olwibm9uZVwiLGNvbnRlbnRab29taW5nOlwibm9uZVwiLHVzZXJEcmFnOlwibm9uZVwiLHRhcEhpZ2hsaWdodENvbG9yOlwicmdiYSgwLDAsMCwwKVwifX07dmFyIGljPTEsamM9MjtrYy5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXtyZXR1cm4gbih0aGlzLm9wdGlvbnMsYSksYS50b3VjaEFjdGlvbiYmdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhLmlucHV0VGFyZ2V0JiYodGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5pbnB1dC50YXJnZXQ9YS5pbnB1dFRhcmdldCx0aGlzLmlucHV0LmluaXQoKSksdGhpc30sc3RvcDpmdW5jdGlvbihhKXt0aGlzLnNlc3Npb24uc3RvcHBlZD1hP2pjOmljfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zZXNzaW9uO2lmKCFiLnN0b3BwZWQpe3RoaXMudG91Y2hBY3Rpb24ucHJldmVudERlZmF1bHRzKGEpO3ZhciBjLGQ9dGhpcy5yZWNvZ25pemVycyxlPWIuY3VyUmVjb2duaXplcjsoIWV8fGUmJmUuc3RhdGUmVmIpJiYoZT1iLmN1clJlY29nbml6ZXI9bnVsbCk7Zm9yKHZhciBmPTA7ZjxkLmxlbmd0aDspYz1kW2ZdLGIuc3RvcHBlZD09PWpjfHxlJiZjIT1lJiYhYy5jYW5SZWNvZ25pemVXaXRoKGUpP2MucmVzZXQoKTpjLnJlY29nbml6ZShhKSwhZSYmYy5zdGF0ZSYoU2J8VGJ8VWIpJiYoZT1iLmN1clJlY29nbml6ZXI9YyksZisrfX0sZ2V0OmZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBZYilyZXR1cm4gYTtmb3IodmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS5vcHRpb25zLmV2ZW50PT1hKXJldHVybiBiW2NdO3JldHVybiBudWxsfSxhZGQ6ZnVuY3Rpb24oYSl7aWYobChhLFwiYWRkXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiYmdGhpcy5yZW1vdmUoYiksdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLGEubWFuYWdlcj10aGlzLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGwoYSxcInJlbW92ZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVjb2duaXplcnM7cmV0dXJuIGE9dGhpcy5nZXQoYSksYi5zcGxpY2UoeShiLGEpLDEpLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30sb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBtKHgoYSksZnVuY3Rpb24oYSl7Y1thXT1jW2FdfHxbXSxjW2FdLnB1c2goYil9KSx0aGlzfSxvZmY6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBtKHgoYSksZnVuY3Rpb24oYSl7Yj9jW2FdLnNwbGljZSh5KGNbYV0sYiksMSk6ZGVsZXRlIGNbYV19KSx0aGlzfSxlbWl0OmZ1bmN0aW9uKGEsYil7dGhpcy5vcHRpb25zLmRvbUV2ZW50cyYmbWMoYSxiKTt2YXIgYz10aGlzLmhhbmRsZXJzW2FdJiZ0aGlzLmhhbmRsZXJzW2FdLnNsaWNlKCk7aWYoYyYmYy5sZW5ndGgpe2IudHlwZT1hLGIucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtiLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCl9O2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7KWNbZF0oYiksZCsrfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudCYmbGModGhpcywhMSksdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5lbGVtZW50PW51bGx9fSxuKGhjLHtJTlBVVF9TVEFSVDpPLElOUFVUX01PVkU6UCxJTlBVVF9FTkQ6USxJTlBVVF9DQU5DRUw6UixTVEFURV9QT1NTSUJMRTpSYixTVEFURV9CRUdBTjpTYixTVEFURV9DSEFOR0VEOlRiLFNUQVRFX0VOREVEOlViLFNUQVRFX1JFQ09HTklaRUQ6VmIsU1RBVEVfQ0FOQ0VMTEVEOldiLFNUQVRFX0ZBSUxFRDpYYixESVJFQ1RJT05fTk9ORTpTLERJUkVDVElPTl9MRUZUOlQsRElSRUNUSU9OX1JJR0hUOlUsRElSRUNUSU9OX1VQOlYsRElSRUNUSU9OX0RPV046VyxESVJFQ1RJT05fSE9SSVpPTlRBTDpYLERJUkVDVElPTl9WRVJUSUNBTDpZLERJUkVDVElPTl9BTEw6WixNYW5hZ2VyOmtjLElucHV0OmFiLFRvdWNoQWN0aW9uOlBiLFRvdWNoSW5wdXQ6RWIsTW91c2VJbnB1dDpyYixQb2ludGVyRXZlbnRJbnB1dDp3YixUb3VjaE1vdXNlSW5wdXQ6R2IsU2luZ2xlVG91Y2hJbnB1dDpBYixSZWNvZ25pemVyOlliLEF0dHJSZWNvZ25pemVyOmFjLFRhcDpnYyxQYW46YmMsU3dpcGU6ZmMsUGluY2g6Y2MsUm90YXRlOmVjLFByZXNzOmRjLG9uOnQsb2ZmOnUsZWFjaDptLG1lcmdlOm8sZXh0ZW5kOm4saW5oZXJpdDpwLGJpbmRGbjpxLHByZWZpeGVkOkJ9KSx0eXBlb2YgZGVmaW5lPT1nJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBoY30pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWhjOmFbY109aGN9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKTs7KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeScsICdoYW1tZXJqcyddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCdoYW1tZXJqcycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSwgSGFtbWVyKTtcbiAgICB9XG59KGZ1bmN0aW9uKCQsIEhhbW1lcikge1xuICAgIGZ1bmN0aW9uIGhhbW1lcmlmeShlbCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICAgIGlmKCEkZWwuZGF0YShcImhhbW1lclwiKSkge1xuICAgICAgICAgICAgJGVsLmRhdGEoXCJoYW1tZXJcIiwgbmV3IEhhbW1lcigkZWxbMF0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQuZm4uaGFtbWVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaGFtbWVyaWZ5KHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gZXh0ZW5kIHRoZSBlbWl0IG1ldGhvZCB0byBhbHNvIHRyaWdnZXIgalF1ZXJ5IGV2ZW50c1xuICAgIEhhbW1lci5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0ID0gKGZ1bmN0aW9uKG9yaWdpbmFsRW1pdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odHlwZSwgZGF0YSkge1xuICAgICAgICAgICAgb3JpZ2luYWxFbWl0LmNhbGwodGhpcywgdHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBnZXN0dXJlOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KShIYW1tZXIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCk7XG59KSk7XG47Ly8gUmVxdWlyZWQgZm9yIE1ldGVvciBwYWNrYWdlLCB0aGUgdXNlIG9mIHdpbmRvdyBwcmV2ZW50cyBleHBvcnQgYnkgTWV0ZW9yXG4oZnVuY3Rpb24od2luZG93KXtcbiAgaWYod2luZG93LlBhY2thZ2Upe1xuICAgIE1hdGVyaWFsaXplID0ge307XG4gIH0gZWxzZSB7XG4gICAgd2luZG93Lk1hdGVyaWFsaXplID0ge307XG4gIH1cbn0pKHdpbmRvdyk7XG5cblxuLypcbiAqIHJhZi5qc1xuICogaHR0cHM6Ly9naXRodWIuY29tL25ncnltYW4vcmFmLmpzXG4gKlxuICogb3JpZ2luYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlclxuICogaW5zcGlyZWQgZnJvbSBwYXVsX2lyaXNoIGdpc3QgYW5kIHBvc3RcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgbmdyeW1hblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24od2luZG93KSB7XG4gIHZhciBsYXN0VGltZSA9IDAsXG4gICAgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddLFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUsXG4gICAgaSA9IHZlbmRvcnMubGVuZ3RoO1xuXG4gIC8vIHRyeSB0byB1bi1wcmVmaXggZXhpc3RpbmcgcmFmXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgfVxuXG4gIC8vIHBvbHlmaWxsIHdpdGggc2V0VGltZW91dCBmYWxsYmFja1xuICAvLyBoZWF2aWx5IGluc3BpcmVkIGZyb20gQGRhcml1cyBnaXN0IG1vZDogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEjY29tbWVudC04Mzc5NDVcbiAgaWYgKCFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIWNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHZhciBub3cgPSArRGF0ZS5ub3coKSxcbiAgICAgICAgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xuICAgICAgfSwgbmV4dFRpbWUgLSBub3cpO1xuICAgIH07XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IGNsZWFyVGltZW91dDtcbiAgfVxuXG4gIC8vIGV4cG9ydCB0byB3aW5kb3dcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG59KHdpbmRvdykpO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgYXBwcm94aW1hdGVkIHNlbGVjdG9yIHN0cmluZyBmb3IgYSBqUXVlcnkgb2JqZWN0XG4gKiBAcGFyYW0ge2pRdWVyeX0gb2JqICBqUXVlcnkgb2JqZWN0IHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIHRhZ1N0ciA9IG9iai5wcm9wKCd0YWdOYW1lJykgfHwgJyc7XG4gIHZhciBpZFN0ciA9IG9iai5hdHRyKCdpZCcpIHx8ICcnO1xuICB2YXIgY2xhc3NTdHIgPSBvYmouYXR0cignY2xhc3MnKSB8fCAnJztcbiAgcmV0dXJuICh0YWdTdHIgKyBpZFN0ciArIGNsYXNzU3RyKS5yZXBsYWNlKC9cXHMvZywnJyk7XG59O1xuXG5cbi8vIFVuaXF1ZSBSYW5kb20gSURcbk1hdGVyaWFsaXplLmd1aWQgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHM0KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnN1YnN0cmluZygxKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICB9O1xufSkoKTtcblxuLyoqXG4gKiBFc2NhcGVzIGhhc2ggZnJvbSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICBTdHJpbmcgcmV0dXJuZWQgZnJvbSB0aGlzLmhhc2hcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk1hdGVyaWFsaXplLmVzY2FwZUhhc2ggPSBmdW5jdGlvbihoYXNoKSB7XG4gIHJldHVybiBoYXNoLnJlcGxhY2UoIC8oOnxcXC58XFxbfFxcXXwsfD0pL2csIFwiXFxcXCQxXCIgKTtcbn07XG5cbk1hdGVyaWFsaXplLmVsZW1lbnRPclBhcmVudElzRml4ZWQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICB2YXIgJGNoZWNrRWxlbWVudHMgPSAkZWxlbWVudC5hZGQoJGVsZW1lbnQucGFyZW50cygpKTtcbiAgICB2YXIgaXNGaXhlZCA9IGZhbHNlO1xuICAgICRjaGVja0VsZW1lbnRzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCQodGhpcykuY3NzKFwicG9zaXRpb25cIikgPT09IFwiZml4ZWRcIikge1xuICAgICAgICAgICAgaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaXNGaXhlZDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGltZSBpbiBtc1xuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHR5cGUge2Z1bmN0aW9ufVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgZ2V0VGltZSA9IChEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn0pO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gKiBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAqIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAqIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gKiBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvbWFzdGVyL0xJQ0VOU0VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNcbiAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuTWF0ZXJpYWxpemUudGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBnZXRUaW1lKCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdyA9IGdldFRpbWUoKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8vIFZlbG9jaXR5IGhhcyBjb25mbGljdHMgd2hlbiBsb2FkZWQgd2l0aCBqUXVlcnksIHRoaXMgd2lsbCBjaGVjayBmb3IgaXRcbi8vIEZpcnN0LCBjaGVjayBpZiBpbiBub0NvbmZsaWN0IG1vZGVcbnZhciBWZWw7XG5pZiAoalF1ZXJ5KSB7XG4gIFZlbCA9IGpRdWVyeS5WZWxvY2l0eTtcbn0gZWxzZSBpZiAoJCkge1xuICBWZWwgPSAkLlZlbG9jaXR5O1xufSBlbHNlIHtcbiAgVmVsID0gVmVsb2NpdHk7XG59XG47KGZ1bmN0aW9uICgkKSB7XG4gICQuZm4uY29sbGFwc2libGUgPSBmdW5jdGlvbihvcHRpb25zLCBtZXRob2RQYXJhbSkge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGFjY29yZGlvbjogdW5kZWZpbmVkLFxuICAgICAgb25PcGVuOiB1bmRlZmluZWQsXG4gICAgICBvbkNsb3NlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgdmFyIG1ldGhvZE5hbWUgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgIHZhciAkcGFuZWxfaGVhZGVycyA9ICQodGhpcykuZmluZCgnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcblxuICAgICAgdmFyIGNvbGxhcHNpYmxlX3R5cGUgPSAkdGhpcy5kYXRhKFwiY29sbGFwc2libGVcIik7XG5cbiAgICAgIC8qKioqKioqKioqKioqKioqXG4gICAgICBIZWxwZXIgRnVuY3Rpb25zXG4gICAgICAqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvLyBBY2NvcmRpb24gT3BlblxuICAgICAgZnVuY3Rpb24gYWNjb3JkaW9uT3BlbihvYmplY3QpIHtcbiAgICAgICAgJHBhbmVsX2hlYWRlcnMgPSAkdGhpcy5maW5kKCc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqZWN0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuc2xpZGVEb3duKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbigpIHskKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO319KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlVXAoeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHBhbmVsX2hlYWRlcnMubm90KG9iamVjdCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAvLyBDbG9zZSBwcmV2aW91c2x5IG9wZW4gYWNjb3JkaW9uIGVsZW1lbnRzLlxuICAgICAgICAkcGFuZWxfaGVhZGVycy5ub3Qob2JqZWN0KS5wYXJlbnQoKS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2xpZGVVcCh7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIixcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb21wbGV0ZTpcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgICAgICAgICAgICAgICBleGVjQ2FsbGJhY2tzKCQodGhpcykuc2libGluZ3MoJy5jb2xsYXBzaWJsZS1oZWFkZXInKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRXhwYW5kYWJsZSBPcGVuXG4gICAgICBmdW5jdGlvbiBleHBhbmRhYmxlT3BlbihvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlRG93bih7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuc2xpZGVVcCh7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3BlbiBjb2xsYXBzaWJsZS4gb2JqZWN0OiAuY29sbGFwc2libGUtaGVhZGVyXG4gICAgICBmdW5jdGlvbiBjb2xsYXBzaWJsZU9wZW4ob2JqZWN0LCBub1RvZ2dsZSkge1xuICAgICAgICBpZiAoIW5vVG9nZ2xlKSB7XG4gICAgICAgICAgb2JqZWN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFjY29yZGlvbiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSBcImFjY29yZGlvblwiIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IHVuZGVmaW5lZCkgeyAvLyBIYW5kbGUgQWNjb3JkaW9uXG4gICAgICAgICAgYWNjb3JkaW9uT3BlbihvYmplY3QpO1xuICAgICAgICB9IGVsc2UgeyAvLyBIYW5kbGUgRXhwYW5kYWJsZXNcbiAgICAgICAgICBleHBhbmRhYmxlT3BlbihvYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhlY0NhbGxiYWNrcyhvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgY2FsbGJhY2tzXG4gICAgICBmdW5jdGlvbiBleGVjQ2FsbGJhY2tzKG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbk9wZW4pID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMub25PcGVuLmNhbGwodGhpcywgb2JqZWN0LnBhcmVudCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uQ2xvc2UpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIG9iamVjdC5wYXJlbnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgaWYgb2JqZWN0IGlzIGNoaWxkcmVuIG9mIHBhbmVsIGhlYWRlclxuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IEpxdWVyeSBvYmplY3RcbiAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgaXQgaXMgY2hpbGRyZW5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gaXNDaGlsZHJlbk9mUGFuZWxIZWFkZXIob2JqZWN0KSB7XG5cbiAgICAgICAgdmFyIHBhbmVsSGVhZGVyID0gZ2V0UGFuZWxIZWFkZXIob2JqZWN0KTtcblxuICAgICAgICByZXR1cm4gcGFuZWxIZWFkZXIubGVuZ3RoID4gMDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgcGFuZWwgaGVhZGVyIGZyb20gYSBjaGlsZHJlbiBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdCBKcXVlcnkgb2JqZWN0XG4gICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhbmVsIGhlYWRlciBvYmplY3RcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0UGFuZWxIZWFkZXIob2JqZWN0KSB7XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdC5jbG9zZXN0KCdsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgIH1cblxuXG4gICAgICAvLyBUdXJuIG9mZiBhbnkgZXhpc3RpbmcgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgICR0aGlzLm9mZignY2xpY2suY29sbGFwc2UnLCAnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgIH1cblxuICAgICAgLyoqKioqICBFbmQgSGVscGVyIEZ1bmN0aW9ucyAgKioqKiovXG5cblxuICAgICAgLy8gTWV0aG9kc1xuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdkZXN0cm95Jykge1xuICAgICAgICByZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kUGFyYW0gPj0gMCAmJlxuICAgICAgICAgIG1ldGhvZFBhcmFtIDwgJHBhbmVsX2hlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciAkY3Vycl9oZWFkZXIgPSAkcGFuZWxfaGVhZGVycy5lcShtZXRob2RQYXJhbSk7XG4gICAgICAgIGlmICgkY3Vycl9oZWFkZXIubGVuZ3RoICYmXG4gICAgICAgICAgICAobWV0aG9kTmFtZSA9PT0gJ29wZW4nIHx8XG4gICAgICAgICAgICAobWV0aG9kTmFtZSA9PT0gJ2Nsb3NlJyAmJlxuICAgICAgICAgICAgJGN1cnJfaGVhZGVyLmhhc0NsYXNzKCdhY3RpdmUnKSkpKSB7XG4gICAgICAgICAgY29sbGFwc2libGVPcGVuKCRjdXJyX2hlYWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cbiAgICAgIHJlbW92ZUV2ZW50SGFuZGxlcnMoKTtcblxuXG4gICAgICAvLyBBZGQgY2xpY2sgaGFuZGxlciB0byBvbmx5IGRpcmVjdCBjb2xsYXBzaWJsZSBoZWFkZXIgY2hpbGRyZW5cbiAgICAgICR0aGlzLm9uKCdjbGljay5jb2xsYXBzZScsICc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGUudGFyZ2V0KTtcblxuICAgICAgICBpZiAoaXNDaGlsZHJlbk9mUGFuZWxIZWFkZXIoZWxlbWVudCkpIHtcbiAgICAgICAgICBlbGVtZW50ID0gZ2V0UGFuZWxIZWFkZXIoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsYXBzaWJsZU9wZW4oZWxlbWVudCk7XG4gICAgICB9KTtcblxuXG4gICAgICAvLyBPcGVuIGZpcnN0IGFjdGl2ZVxuICAgICAgaWYgKG9wdGlvbnMuYWNjb3JkaW9uIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IFwiYWNjb3JkaW9uXCIgfHwgY29sbGFwc2libGVfdHlwZSA9PT0gdW5kZWZpbmVkKSB7IC8vIEhhbmRsZSBBY2NvcmRpb25cbiAgICAgICAgY29sbGFwc2libGVPcGVuKCRwYW5lbF9oZWFkZXJzLmZpbHRlcignLmFjdGl2ZScpLmZpcnN0KCksIHRydWUpO1xuXG4gICAgICB9IGVsc2UgeyAvLyBIYW5kbGUgRXhwYW5kYWJsZXNcbiAgICAgICAgJHBhbmVsX2hlYWRlcnMuZmlsdGVyKCcuYWN0aXZlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb2xsYXBzaWJsZU9wZW4oJCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcuY29sbGFwc2libGUnKS5jb2xsYXBzaWJsZSgpO1xuICB9KTtcbn0oIGpRdWVyeSApKTs7KGZ1bmN0aW9uICgkKSB7XG5cbiAgLy8gQWRkIHBvc2liaWxpdHkgdG8gc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAvLyB1c2VmdWxsIGZvciBzZWxlY3QgZm9yIGV4YW1wbGVcbiAgJC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAkKHRoaXMpLnNjcm9sbFRvcCgkKHRoaXMpLnNjcm9sbFRvcCgpIC0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKGVsZW0pLm9mZnNldCgpLnRvcCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgJC5mbi5kcm9wZG93biA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgaW5EdXJhdGlvbjogMzAwLFxuICAgICAgb3V0RHVyYXRpb246IDIyNSxcbiAgICAgIGNvbnN0cmFpbldpZHRoOiB0cnVlLCAvLyBDb25zdHJhaW5zIHdpZHRoIG9mIGRyb3Bkb3duIHRvIHRoZSBhY3RpdmF0b3JcbiAgICAgIGhvdmVyOiBmYWxzZSxcbiAgICAgIGd1dHRlcjogMCwgLy8gU3BhY2luZyBmcm9tIGVkZ2VcbiAgICAgIGJlbG93T3JpZ2luOiBmYWxzZSxcbiAgICAgIGFsaWdubWVudDogJ2xlZnQnLFxuICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBPcGVuIGRyb3Bkb3duLlxuICAgIGlmIChvcHRpb25zID09PSBcIm9wZW5cIikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ29wZW4nKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENsb3NlIGRyb3Bkb3duLlxuICAgIGlmIChvcHRpb25zID09PSBcImNsb3NlXCIpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcbiAgICAgIHZhciBjdXJyX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBEcm9wZG93biBtZW51XG4gICAgICB2YXIgYWN0aXZhdGVzID0gJChcIiNcIisgb3JpZ2luLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykpO1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKCkge1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2luZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5pbkR1cmF0aW9uID0gb3JpZ2luLmRhdGEoJ2luZHVyYXRpb24nKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdvdXRkdXJhdGlvbicpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLm91dER1cmF0aW9uID0gb3JpZ2luLmRhdGEoJ291dGR1cmF0aW9uJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnY29uc3RyYWlud2lkdGgnKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5jb25zdHJhaW5XaWR0aCA9IG9yaWdpbi5kYXRhKCdjb25zdHJhaW53aWR0aCcpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2hvdmVyJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuaG92ZXIgPSBvcmlnaW4uZGF0YSgnaG92ZXInKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdndXR0ZXInKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5ndXR0ZXIgPSBvcmlnaW4uZGF0YSgnZ3V0dGVyJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnYmVsb3dvcmlnaW4nKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5iZWxvd09yaWdpbiA9IG9yaWdpbi5kYXRhKCdiZWxvd29yaWdpbicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmFsaWdubWVudCA9IG9yaWdpbi5kYXRhKCdhbGlnbm1lbnQnKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdzdG9wcHJvcGFnYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24gPSBvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU9wdGlvbnMoKTtcblxuICAgICAgLy8gQXR0YWNoIGRyb3Bkb3duIHRvIGl0cyBhY3RpdmF0b3JcbiAgICAgIG9yaWdpbi5hZnRlcihhY3RpdmF0ZXMpO1xuXG4gICAgICAvKlxuICAgICAgICBIZWxwZXIgZnVuY3Rpb24gdG8gcG9zaXRpb24gYW5kIHJlc2l6ZSBkcm9wZG93bi5cbiAgICAgICAgVXNlZCBpbiBob3ZlciBhbmQgY2xpY2sgaGFuZGxlci5cbiAgICAgICovXG4gICAgICBmdW5jdGlvbiBwbGFjZURyb3Bkb3duKGV2ZW50VHlwZSkge1xuICAgICAgICAvLyBDaGVjayBmb3Igc2ltdWx0YW5lb3VzIGZvY3VzIGFuZCBjbGljayBldmVudHMuXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaHRtbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgdXBkYXRlT3B0aW9ucygpO1xuXG4gICAgICAgIC8vIFNldCBEcm9wZG93biBzdGF0ZVxuICAgICAgICBhY3RpdmF0ZXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBvcmlnaW4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIENvbnN0cmFpbiB3aWR0aFxuICAgICAgICBpZiAoY3Vycl9vcHRpb25zLmNvbnN0cmFpbldpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgYWN0aXZhdGVzLmNzcygnd2lkdGgnLCBvcmlnaW4ub3V0ZXJXaWR0aCgpKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ3doaXRlLXNwYWNlJywgJ25vd3JhcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT2Zmc2NyZWVuIGRldGVjdGlvblxuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgb3JpZ2luSGVpZ2h0ID0gb3JpZ2luLmlubmVySGVpZ2h0KCk7XG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIHZhciBvZmZzZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgY3VyckFsaWdubWVudCA9IGN1cnJfb3B0aW9ucy5hbGlnbm1lbnQ7XG4gICAgICAgIHZhciBndXR0ZXJTcGFjaW5nID0gMDtcbiAgICAgICAgdmFyIGxlZnRQb3NpdGlvbiA9IDA7XG5cbiAgICAgICAgLy8gQmVsb3cgT3JpZ2luXG4gICAgICAgIHZhciB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIGlmIChjdXJyX29wdGlvbnMuYmVsb3dPcmlnaW4gPT09IHRydWUpIHtcbiAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IG9yaWdpbkhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBzY3JvbGxpbmcgcG9zaXRpb25lZCBjb250YWluZXIuXG4gICAgICAgIHZhciBzY3JvbGxZT2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIHNjcm9sbFhPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgd3JhcHBlciA9IG9yaWdpbi5wYXJlbnQoKTtcbiAgICAgICAgaWYgKCF3cmFwcGVyLmlzKCdib2R5JykpIHtcbiAgICAgICAgICBpZiAod3JhcHBlclswXS5zY3JvbGxIZWlnaHQgPiB3cmFwcGVyWzBdLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgc2Nyb2xsWU9mZnNldCA9IHdyYXBwZXJbMF0uc2Nyb2xsVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod3JhcHBlclswXS5zY3JvbGxXaWR0aCA+IHdyYXBwZXJbMF0uY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIHNjcm9sbFhPZmZzZXQgPSB3cmFwcGVyWzBdLnNjcm9sbExlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAob2Zmc2V0TGVmdCArIGFjdGl2YXRlcy5pbm5lcldpZHRoKCkgPiAkKHdpbmRvdykud2lkdGgoKSkge1xuICAgICAgICAgIC8vIERyb3Bkb3duIGdvZXMgcGFzdCBzY3JlZW4gb24gcmlnaHQsIGZvcmNlIHJpZ2h0IGFsaWdubWVudFxuICAgICAgICAgIGN1cnJBbGlnbm1lbnQgPSAncmlnaHQnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0TGVmdCAtIGFjdGl2YXRlcy5pbm5lcldpZHRoKCkgKyBvcmlnaW4uaW5uZXJXaWR0aCgpIDwgMCkge1xuICAgICAgICAgIC8vIERyb3Bkb3duIGdvZXMgcGFzdCBzY3JlZW4gb24gbGVmdCwgZm9yY2UgbGVmdCBhbGlnbm1lbnRcbiAgICAgICAgICBjdXJyQWxpZ25tZW50ID0gJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICAgIC8vIFZlcnRpY2FsIGJvdHRvbSBvZmZzY3JlZW4gZGV0ZWN0aW9uXG4gICAgICAgIGlmIChvZmZzZXRUb3AgKyBhY3RpdmF0ZXMuaW5uZXJIZWlnaHQoKSA+IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgIC8vIElmIGdvaW5nIHVwd2FyZHMgc3RpbGwgZ29lcyBvZmZzY3JlZW4sIGp1c3QgY3JvcCBoZWlnaHQgb2YgZHJvcGRvd24uXG4gICAgICAgICAgaWYgKG9mZnNldFRvcCArIG9yaWdpbkhlaWdodCAtIGFjdGl2YXRlcy5pbm5lckhlaWdodCgpIDwgMCkge1xuICAgICAgICAgICAgdmFyIGFkanVzdGVkSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gb2Zmc2V0VG9wIC0gdmVydGljYWxPZmZzZXQ7XG4gICAgICAgICAgICBhY3RpdmF0ZXMuY3NzKCdtYXgtaGVpZ2h0JywgYWRqdXN0ZWRIZWlnaHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGbG93IHVwd2FyZHMuXG4gICAgICAgICAgICBpZiAoIXZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ICs9IG9yaWdpbkhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0IC09IGFjdGl2YXRlcy5pbm5lckhlaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBlZGdlIGFsaWdubWVudFxuICAgICAgICBpZiAoY3VyckFsaWdubWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgZ3V0dGVyU3BhY2luZyA9IGN1cnJfb3B0aW9ucy5ndXR0ZXI7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gb3JpZ2luLnBvc2l0aW9uKCkubGVmdCArIGd1dHRlclNwYWNpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VyckFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHZhciBvZmZzZXRSaWdodCA9IG9yaWdpbi5wb3NpdGlvbigpLmxlZnQgKyBvcmlnaW4ub3V0ZXJXaWR0aCgpIC0gYWN0aXZhdGVzLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICBndXR0ZXJTcGFjaW5nID0gLWN1cnJfb3B0aW9ucy5ndXR0ZXI7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gIG9mZnNldFJpZ2h0ICsgZ3V0dGVyU3BhY2luZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvc2l0aW9uIGRyb3Bkb3duXG4gICAgICAgIGFjdGl2YXRlcy5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogb3JpZ2luLnBvc2l0aW9uKCkudG9wICsgdmVydGljYWxPZmZzZXQgKyBzY3JvbGxZT2Zmc2V0LFxuICAgICAgICAgIGxlZnQ6IGxlZnRQb3NpdGlvbiArIHNjcm9sbFhPZmZzZXRcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBTaG93IGRyb3Bkb3duXG4gICAgICAgIGFjdGl2YXRlcy5zdG9wKHRydWUsIHRydWUpLmNzcygnb3BhY2l0eScsIDApXG4gICAgICAgICAgLnNsaWRlRG93bih7XG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogY3Vycl9vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmFuaW1hdGUoIHtvcGFjaXR5OiAxfSwge3F1ZXVlOiBmYWxzZSwgZHVyYXRpb246IGN1cnJfb3B0aW9ucy5pbkR1cmF0aW9uLCBlYXNpbmc6ICdlYXNlT3V0U2luZSd9KTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgY2xvc2UgaGFuZGxlciB0byBkb2N1bWVudFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNpbXVsdGFuZW91cyBmb2N1cyBhbmQgY2xpY2sgZXZlbnRzLlxuICAgICAgICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZhdGVzLmZhZGVPdXQoY3Vycl9vcHRpb25zLm91dER1cmF0aW9uKTtcbiAgICAgICAgYWN0aXZhdGVzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgb3JpZ2luLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdjbGljay4nKyBhY3RpdmF0ZXMuYXR0cignaWQnKSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGFjdGl2YXRlcy5jc3MoJ21heC1oZWlnaHQnLCAnJyk7IH0sIGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIEhvdmVyXG4gICAgICBpZiAoY3Vycl9vcHRpb25zLmhvdmVyKSB7XG4gICAgICAgIHZhciBvcGVuID0gZmFsc2U7XG4gICAgICAgIG9yaWdpbi51bmJpbmQoJ2NsaWNrLicgKyBvcmlnaW4uYXR0cignaWQnKSk7XG4gICAgICAgIC8vIEhvdmVyIGhhbmRsZXIgdG8gc2hvdyBkcm9wZG93blxuICAgICAgICBvcmlnaW4ub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKXsgLy8gTW91c2Ugb3ZlclxuICAgICAgICAgIGlmIChvcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcGxhY2VEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgLy8gSWYgaG92ZXIgb24gb3JpZ2luIHRoZW4gdG8gc29tZXRoaW5nIG90aGVyIHRoYW4gZHJvcGRvd24gY29udGVudCwgdGhlbiBjbG9zZVxuICAgICAgICAgIHZhciB0b0VsID0gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0OyAvLyBhZGRlZCBicm93c2VyIGNvbXBhdGliaWxpdHkgZm9yIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAgaWYoISQodG9FbCkuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5pcyhhY3RpdmF0ZXMpKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWN0aXZhdGVzLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7IC8vIE1vdXNlIG91dFxuICAgICAgICAgIHZhciB0b0VsID0gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0O1xuICAgICAgICAgIGlmKCEkKHRvRWwpLmNsb3Nlc3QoJy5kcm9wZG93bi1idXR0b24nKS5pcyhvcmlnaW4pKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xpY2tcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENsaWNrIGhhbmRsZXIgdG8gc2hvdyBkcm9wZG93blxuICAgICAgICBvcmlnaW4udW5iaW5kKCdjbGljay4nICsgb3JpZ2luLmF0dHIoJ2lkJykpO1xuICAgICAgICBvcmlnaW4uYmluZCgnY2xpY2suJytvcmlnaW4uYXR0cignaWQnKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgaWYgKCFpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIGlmICggb3JpZ2luWzBdID09IGUuY3VycmVudFRhcmdldCAmJlxuICAgICAgICAgICAgICAgICAhb3JpZ2luLmhhc0NsYXNzKCdhY3RpdmUnKSAmJlxuICAgICAgICAgICAgICAgICAoJChlLnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudHMgYnV0dG9uIGNsaWNrIGZyb20gbW92aW5nIHdpbmRvd1xuICAgICAgICAgICAgICBpZiAoY3Vycl9vcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGxhY2VEcm9wZG93bignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG9yaWdpbiBpcyBjbGlja2VkIGFuZCBtZW51IGlzIG9wZW4sIGNsb3NlIG1lbnVcbiAgICAgICAgICAgIGVsc2UgaWYgKG9yaWdpbi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH0gLy8gRW5kIGVsc2VcblxuICAgICAgLy8gTGlzdGVuIHRvIG9wZW4gYW5kIGNsb3NlIGV2ZW50IC0gdXNlZnVsIGZvciBzZWxlY3QgY29tcG9uZW50XG4gICAgICBvcmlnaW4ub24oJ29wZW4nLCBmdW5jdGlvbihlLCBldmVudFR5cGUpIHtcbiAgICAgICAgcGxhY2VEcm9wZG93bihldmVudFR5cGUpO1xuICAgICAgfSk7XG4gICAgICBvcmlnaW4ub24oJ2Nsb3NlJywgaGlkZURyb3Bkb3duKTtcblxuXG4gICAgfSk7XG4gIH07IC8vIEVuZCBkcm9wZG93biBwbHVnaW5cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5kcm9wZG93bi1idXR0b24nKS5kcm9wZG93bigpO1xuICB9KTtcbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24oJCkge1xuICB2YXIgX3N0YWNrID0gMCxcbiAgX2xhc3RJRCA9IDAsXG4gIF9nZW5lcmF0ZUlEID0gZnVuY3Rpb24oKSB7XG4gICAgX2xhc3RJRCsrO1xuICAgIHJldHVybiAnbWF0ZXJpYWxpemUtbW9kYWwtb3ZlcmxheS0nICsgX2xhc3RJRDtcbiAgfTtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIGluRHVyYXRpb246IDM1MCxcbiAgICAgICAgb3V0RHVyYXRpb246IDI1MCxcbiAgICAgICAgcmVhZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlzbWlzc2libGU6IHRydWUsXG4gICAgICAgIHN0YXJ0aW5nVG9wOiAnNCUnLFxuICAgICAgICBlbmRpbmdUb3A6ICcxMCUnXG4gICAgICB9O1xuXG4gICAgICAvLyBPdmVycmlkZSBkZWZhdWx0c1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRtb2RhbCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBtb2RhbF9pZCA9ICQodGhpcykuYXR0cihcImlkXCIpIHx8ICcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XG5cbiAgICAgICAgdmFyIGNsb3NlTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgb3ZlcmxheUlEID0gJG1vZGFsLmRhdGEoJ292ZXJsYXktaWQnKTtcbiAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjJyArIG92ZXJsYXlJRCk7XG4gICAgICAgICAgJG1vZGFsLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAvLyBFbmFibGUgc2Nyb2xsaW5nXG4gICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRtb2RhbC5maW5kKCcubW9kYWwtY2xvc2UnKS5vZmYoJ2NsaWNrLmNsb3NlJyk7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cC5tb2RhbCcgKyBvdmVybGF5SUQpO1xuXG4gICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoIHsgb3BhY2l0eTogMH0sIHtkdXJhdGlvbjogb3B0aW9ucy5vdXREdXJhdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNlOiBcImVhc2VPdXRRdWFydFwifSk7XG5cblxuICAgICAgICAgIC8vIERlZmluZSBCb3R0b20gU2hlZXQgYW5pbWF0aW9uXG4gICAgICAgICAgdmFyIGV4aXRWZWxvY2l0eU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZU91dEN1YmljXCIsXG4gICAgICAgICAgICAvLyBIYW5kbGUgbW9kYWwgcmVhZHkgY2FsbGJhY2tcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KTtcblxuICAgICAgICAgICAgICAvLyBDYWxsIGNvbXBsZXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5jb21wbGV0ZSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29tcGxldGUuY2FsbCh0aGlzLCAkbW9kYWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICRvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICBfc3RhY2stLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoJ2JvdHRvbS1zaGVldCcpKSB7XG4gICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoe2JvdHRvbTogXCItMTAwJVwiLCBvcGFjaXR5OiAwfSwgZXhpdFZlbG9jaXR5T3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KFxuICAgICAgICAgICAgICB7IHRvcDogb3B0aW9ucy5zdGFydGluZ1RvcCwgb3BhY2l0eTogMCwgc2NhbGVYOiAwLjd9LFxuICAgICAgICAgICAgICBleGl0VmVsb2NpdHlPcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3Blbk1vZGFsID0gZnVuY3Rpb24oJHRyaWdnZXIpIHtcbiAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgaWYgKCRtb2RhbC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG92ZXJsYXlJRCA9IF9nZW5lcmF0ZUlEKCk7XG4gICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICBsU3RhY2sgPSAoKytfc3RhY2spO1xuXG4gICAgICAgICAgLy8gU3RvcmUgYSByZWZlcmVuY2Ugb2YgdGhlIG92ZXJsYXlcbiAgICAgICAgICAkb3ZlcmxheS5hdHRyKCdpZCcsIG92ZXJsYXlJRCkuY3NzKCd6LWluZGV4JywgMTAwMCArIGxTdGFjayAqIDIpO1xuICAgICAgICAgICRtb2RhbC5kYXRhKCdvdmVybGF5LWlkJywgb3ZlcmxheUlEKS5jc3MoJ3otaW5kZXgnLCAxMDAwICsgbFN0YWNrICogMiArIDEpO1xuICAgICAgICAgICRtb2RhbC5hZGRDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgJChcImJvZHlcIikuYXBwZW5kKCRvdmVybGF5KTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLmRpc21pc3NpYmxlKSB7XG4gICAgICAgICAgICAkb3ZlcmxheS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gb24gRVNDXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAubW9kYWwnICsgb3ZlcmxheUlELCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7ICAgLy8gRVNDIGtleVxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJG1vZGFsLmZpbmQoXCIubW9kYWwtY2xvc2VcIikub24oJ2NsaWNrLmNsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJG92ZXJsYXkuY3NzKHsgZGlzcGxheSA6IFwiYmxvY2tcIiwgb3BhY2l0eSA6IDAgfSk7XG5cbiAgICAgICAgICAkbW9kYWwuY3NzKHtcbiAgICAgICAgICAgIGRpc3BsYXkgOiBcImJsb2NrXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogb3B0aW9ucy5vcGFjaXR5fSwge2R1cmF0aW9uOiBvcHRpb25zLmluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIn0pO1xuICAgICAgICAgICRtb2RhbC5kYXRhKCdhc3NvY2lhdGVkLW92ZXJsYXknLCAkb3ZlcmxheVswXSk7XG5cbiAgICAgICAgICAvLyBEZWZpbmUgQm90dG9tIFNoZWV0IGFuaW1hdGlvblxuICAgICAgICAgIHZhciBlbnRlclZlbG9jaXR5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VPdXRDdWJpY1wiLFxuICAgICAgICAgICAgLy8gSGFuZGxlIG1vZGFsIHJlYWR5IGNhbGxiYWNrXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5yZWFkeSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVhZHkuY2FsbCh0aGlzLCAkbW9kYWwsICR0cmlnZ2VyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKCRtb2RhbC5oYXNDbGFzcygnYm90dG9tLXNoZWV0JykpIHtcbiAgICAgICAgICAgICRtb2RhbC52ZWxvY2l0eSh7Ym90dG9tOiBcIjBcIiwgb3BhY2l0eTogMX0sIGVudGVyVmVsb2NpdHlPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkLlZlbG9jaXR5Lmhvb2soJG1vZGFsLCBcInNjYWxlWFwiLCAwLjcpO1xuICAgICAgICAgICAgJG1vZGFsLmNzcyh7IHRvcDogb3B0aW9ucy5zdGFydGluZ1RvcCB9KTtcbiAgICAgICAgICAgICRtb2RhbC52ZWxvY2l0eSh7dG9wOiBvcHRpb25zLmVuZGluZ1RvcCwgb3BhY2l0eTogMSwgc2NhbGVYOiAnMSd9LCBlbnRlclZlbG9jaXR5T3B0aW9ucyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVzZXQgaGFuZGxlcnNcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5tb2RhbFRyaWdnZXInLCAnYVtocmVmPVwiIycgKyBtb2RhbF9pZCArICdcIl0sIFtkYXRhLXRhcmdldD1cIicgKyBtb2RhbF9pZCArICdcIl0nKTtcbiAgICAgICAgJCh0aGlzKS5vZmYoJ29wZW5Nb2RhbCcpO1xuICAgICAgICAkKHRoaXMpLm9mZignY2xvc2VNb2RhbCcpO1xuXG4gICAgICAgIC8vIENsb3NlIEhhbmRsZXJzXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5tb2RhbFRyaWdnZXInLCAnYVtocmVmPVwiIycgKyBtb2RhbF9pZCArICdcIl0sIFtkYXRhLXRhcmdldD1cIicgKyBtb2RhbF9pZCArICdcIl0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdGFydGluZ1RvcCA9ICgkKHRoaXMpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKSkgLzEuMTU7XG4gICAgICAgICAgb3Blbk1vZGFsKCQodGhpcykpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7IC8vIGRvbmUgc2V0IG9uIGNsaWNrXG5cbiAgICAgICAgJCh0aGlzKS5vbignb3Blbk1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIG1vZGFsX2lkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSB8fCAnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpO1xuICAgICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjbG9zZU1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBkb25lIHJldHVyblxuICAgIH0sXG4gICAgb3BlbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuTW9kYWwnKTtcbiAgICB9LFxuICAgIGNsb3NlIDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlTW9kYWwnKTtcbiAgICB9XG4gIH07XG5cbiAgJC5mbi5tb2RhbCA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xuICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xuICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kT3JPcHRpb25zICkge1xuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5tb2RhbCcgKTtcbiAgICB9XG4gIH07XG59KShqUXVlcnkpO1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gICQuZm4ubWF0ZXJpYWxib3ggPSBmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG5cbiAgICAgIHZhciBvdmVybGF5QWN0aXZlID0gZmFsc2U7XG4gICAgICB2YXIgZG9uZUFuaW1hdGluZyA9IHRydWU7XG4gICAgICB2YXIgaW5EdXJhdGlvbiA9IDI3NTtcbiAgICAgIHZhciBvdXREdXJhdGlvbiA9IDIwMDtcbiAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gJCgnPGRpdj48L2Rpdj4nKS5hZGRDbGFzcygnbWF0ZXJpYWwtcGxhY2Vob2xkZXInKTtcbiAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gMDtcbiAgICAgIHZhciBvcmlnaW5hbEhlaWdodCA9IDA7XG4gICAgICB2YXIgYW5jZXN0b3JzQ2hhbmdlZDtcbiAgICAgIHZhciBhbmNlc3RvcjtcbiAgICAgIHZhciBvcmlnaW5JbmxpbmVTdHlsZXMgPSBvcmlnaW4uYXR0cignc3R5bGUnKTtcbiAgICAgIG9yaWdpbi53cmFwKHBsYWNlaG9sZGVyKTtcblxuXG4gICAgICBvcmlnaW4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IG9yaWdpbi53aWR0aCgpO1xuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSBvcmlnaW4uaGVpZ2h0KCk7XG5cblxuICAgICAgICAvLyBJZiBhbHJlYWR5IG1vZGFsLCByZXR1cm4gdG8gb3JpZ2luYWxcbiAgICAgICAgaWYgKGRvbmVBbmltYXRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvdmVybGF5QWN0aXZlICYmIGRvbmVBbmltYXRpbmc9PT10cnVlKSB7XG4gICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gU2V0IHN0YXRlc1xuICAgICAgICBkb25lQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIG9yaWdpbi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXlBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNldCBwb3NpdGlvbmluZyBmb3IgcGxhY2Vob2xkZXJcbiAgICAgICAgcGxhY2Vob2xkZXIuY3NzKHtcbiAgICAgICAgICB3aWR0aDogcGxhY2Vob2xkZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGFjZWhvbGRlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmluZCBhbmNlc3RvciB3aXRoIG92ZXJmbG93OiBoaWRkZW47IGFuZCByZW1vdmUgaXRcbiAgICAgICAgYW5jZXN0b3JzQ2hhbmdlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYW5jZXN0b3IgPSBwbGFjZWhvbGRlclswXS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoYW5jZXN0b3IgIT09IG51bGwgJiYgISQoYW5jZXN0b3IpLmlzKGRvY3VtZW50KSkge1xuICAgICAgICAgIHZhciBjdXJyID0gJChhbmNlc3Rvcik7XG4gICAgICAgICAgaWYgKGN1cnIuY3NzKCdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHtcbiAgICAgICAgICAgIGN1cnIuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICBpZiAoYW5jZXN0b3JzQ2hhbmdlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGFuY2VzdG9yc0NoYW5nZWQgPSBjdXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGFuY2VzdG9yc0NoYW5nZWQgPSBhbmNlc3RvcnNDaGFuZ2VkLmFkZChjdXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGNzcyBvbiBvcmlnaW5cbiAgICAgICAgb3JpZ2luLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgJ3otaW5kZXgnOiAxMDAwLFxuICAgICAgICAgICd3aWxsLWNoYW5nZSc6ICdsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQnXG4gICAgICAgIH0pXG4gICAgICAgIC5kYXRhKCd3aWR0aCcsIG9yaWdpbmFsV2lkdGgpXG4gICAgICAgIC5kYXRhKCdoZWlnaHQnLCBvcmlnaW5hbEhlaWdodCk7XG5cbiAgICAgICAgLy8gQWRkIG92ZXJsYXlcbiAgICAgICAgdmFyIG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwibWF0ZXJpYWxib3gtb3ZlcmxheVwiPjwvZGl2PicpXG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb25lQW5pbWF0aW5nID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFB1dCBiZWZvcmUgaW4gb3JpZ2luIGltYWdlIHRvIHByZXNlcnZlIHotaW5kZXggbGF5ZXJpbmcuXG4gICAgICAgIG9yaWdpbi5iZWZvcmUob3ZlcmxheSk7XG5cbiAgICAgICAgLy8gU2V0IGRpbWVuc2lvbnMgaWYgbmVlZGVkXG4gICAgICAgIHZhciBvdmVybGF5T2Zmc2V0ID0gb3ZlcmxheVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgb3ZlcmxheS5jc3Moe1xuICAgICAgICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHdpbmRvd0hlaWdodCxcbiAgICAgICAgICBsZWZ0OiAtMSAqIG92ZXJsYXlPZmZzZXQubGVmdCxcbiAgICAgICAgICB0b3A6IC0xICogb3ZlcmxheU9mZnNldC50b3BcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBBbmltYXRlIE92ZXJsYXlcbiAgICAgICAgb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHVyYXRpb246IGluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSApO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgYW5pbWF0ZSBjYXB0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2NhcHRpb24nKSAhPT0gXCJcIikge1xuICAgICAgICAgIHZhciAkcGhvdG9fY2FwdGlvbiA9ICQoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbGJveC1jYXB0aW9uXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgJHBob3RvX2NhcHRpb24udGV4dChvcmlnaW4uZGF0YSgnY2FwdGlvbicpKTtcbiAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwaG90b19jYXB0aW9uKTtcbiAgICAgICAgICAkcGhvdG9fY2FwdGlvbi5jc3MoeyBcImRpc3BsYXlcIjogXCJpbmxpbmVcIiB9KTtcbiAgICAgICAgICAkcGhvdG9fY2FwdGlvbi52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogaW5EdXJhdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2l6ZSBJbWFnZVxuICAgICAgICB2YXIgcmF0aW8gPSAwO1xuICAgICAgICB2YXIgd2lkdGhQZXJjZW50ID0gb3JpZ2luYWxXaWR0aCAvIHdpbmRvd1dpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0UGVyY2VudCA9IG9yaWdpbmFsSGVpZ2h0IC8gd2luZG93SGVpZ2h0O1xuICAgICAgICB2YXIgbmV3V2lkdGggPSAwO1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gMDtcblxuICAgICAgICBpZiAod2lkdGhQZXJjZW50ID4gaGVpZ2h0UGVyY2VudCkge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxIZWlnaHQgLyBvcmlnaW5hbFdpZHRoO1xuICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93V2lkdGggKiAwLjk7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93V2lkdGggKiAwLjkgKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByYXRpbyA9IG9yaWdpbmFsV2lkdGggLyBvcmlnaW5hbEhlaWdodDtcbiAgICAgICAgICBuZXdXaWR0aCA9ICh3aW5kb3dIZWlnaHQgKiAwLjkpICogcmF0aW87XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93SGVpZ2h0ICogMC45O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5pbWF0ZSBpbWFnZSArIHNldCB6LWluZGV4XG4gICAgICAgIGlmKG9yaWdpbi5oYXNDbGFzcygncmVzcG9uc2l2ZS1pbWcnKSkge1xuICAgICAgICAgIG9yaWdpbi52ZWxvY2l0eSh7J21heC13aWR0aCc6IG5ld1dpZHRoLCAnd2lkdGgnOiBvcmlnaW5hbFdpZHRofSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgb3JpZ2luLmNzcyh7bGVmdDogMCwgdG9wOiAwfSlcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgICAgICAgICAgICAgbGVmdDogJChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpICsgd2luZG93V2lkdGgvMiAtIG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpLm9mZnNldCgpLmxlZnQgLSBuZXdXaWR0aC8yLFxuICAgICAgICAgICAgICAgICAgdG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIHdpbmRvd0hlaWdodC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkudG9wIC0gbmV3SGVpZ2h0LyAyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogaW5EdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe2RvbmVBbmltYXRpbmcgPSB0cnVlO31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IC8vIEVuZCBDb21wbGV0ZVxuICAgICAgICAgIH0pOyAvLyBFbmQgVmVsb2NpdHlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvcmlnaW4uY3NzKCdsZWZ0JywgMClcbiAgICAgICAgICAuY3NzKCd0b3AnLCAwKVxuICAgICAgICAgIC52ZWxvY2l0eShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXG4gICAgICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgICAgICAgICAgbGVmdDogJChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpICsgd2luZG93V2lkdGgvMiAtIG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpLm9mZnNldCgpLmxlZnQgLSBuZXdXaWR0aC8yLFxuICAgICAgICAgICAgICB0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgd2luZG93SGVpZ2h0LzIgLSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKS5vZmZzZXQoKS50b3AgLSBuZXdIZWlnaHQvIDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBpbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7ZG9uZUFuaW1hdGluZyA9IHRydWU7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTsgLy8gRW5kIFZlbG9jaXR5XG4gICAgICAgIH1cblxuICAgICAgfSk7IC8vIEVuZCBvcmlnaW4gb24gY2xpY2tcblxuXG4gICAgICAvLyBSZXR1cm4gb24gc2Nyb2xsXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICAgIHJldHVyblRvT3JpZ2luYWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJldHVybiBvbiBFU0NcbiAgICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiBkb25lQW5pbWF0aW5nID09PSB0cnVlKSB7ICAgLy8gRVNDIGtleVxuICAgICAgICAgIGlmIChvdmVybGF5QWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIG1vZGFsZWQgaW1hZ2UgdG8gdGhlIG9yaWdpbmFsIHNwb3RcbiAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JpZ2luYWwoKSB7XG5cbiAgICAgICAgZG9uZUFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBvcmlnaW4uZGF0YSgnd2lkdGgnKTtcbiAgICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gb3JpZ2luLmRhdGEoJ2hlaWdodCcpO1xuXG4gICAgICAgIG9yaWdpbi52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgICAgICQoJyNtYXRlcmlhbGJveC1vdmVybGF5JykudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgICAgICAkKCcubWF0ZXJpYWxib3gtY2FwdGlvbicpLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcblxuXG4gICAgICAgICQoJyNtYXRlcmlhbGJveC1vdmVybGF5JykudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IG91dER1cmF0aW9uLCAvLyBEZWxheSBwcmV2ZW50cyBhbmltYXRpb24gb3ZlcmxhcHBpbmdcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBPdmVybGF5XG4gICAgICAgICAgICBvdmVybGF5QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzaXplIEltYWdlXG4gICAgICAgIG9yaWdpbi52ZWxvY2l0eShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogb3JpZ2luYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogb3JpZ2luYWxIZWlnaHQsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkdXJhdGlvbjogb3V0RHVyYXRpb24sXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuY3NzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBvcmlnaW4ucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgb3JpZ2luLmF0dHIoJ3N0eWxlJywgb3JpZ2luSW5saW5lU3R5bGVzKTtcblxuICAgICAgICAgICAgICAvLyBSZW1vdmUgY2xhc3NcbiAgICAgICAgICAgICAgb3JpZ2luLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgZG9uZUFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIG92ZXJmbG93IG92ZXJyaWRlcyBvbiBhbmNlc3RvcnNcbiAgICAgICAgICAgICAgaWYgKGFuY2VzdG9yc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBhbmNlc3RvcnNDaGFuZ2VkLmNzcygnb3ZlcmZsb3cnLCAnJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIENhcHRpb24gKyByZXNldCBjc3Mgc2V0dGluZ3Mgb24gaW1hZ2VcbiAgICAgICAgJCgnLm1hdGVyaWFsYm94LWNhcHRpb24nKS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogb3V0RHVyYXRpb24sIC8vIERlbGF5IHByZXZlbnRzIGFuaW1hdGlvbiBvdmVybGFwcGluZ1xuICAgICAgICAgIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcubWF0ZXJpYWxib3hlZCcpLm1hdGVyaWFsYm94KCk7XG4gIH0pO1xuXG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgJC5mbi5wYXJhbGxheCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gUGFyYWxsYXggU2NyaXB0c1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLmFkZENsYXNzKCdwYXJhbGxheCcpO1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVQYXJhbGxheChpbml0aWFsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICBpZiAod2luZG93X3dpZHRoIDwgNjAxKSB7XG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICgkdGhpcy5oZWlnaHQoKSA+IDApID8gJHRoaXMuaGVpZ2h0KCkgOiAkdGhpcy5jaGlsZHJlbihcImltZ1wiKS5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXJfaGVpZ2h0ID0gKCR0aGlzLmhlaWdodCgpID4gMCkgPyAkdGhpcy5oZWlnaHQoKSA6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgJGltZyA9ICR0aGlzLmNoaWxkcmVuKFwiaW1nXCIpLmZpcnN0KCk7XG4gICAgICAgIHZhciBpbWdfaGVpZ2h0ID0gJGltZy5oZWlnaHQoKTtcbiAgICAgICAgdmFyIHBhcmFsbGF4X2Rpc3QgPSBpbWdfaGVpZ2h0IC0gY29udGFpbmVyX2hlaWdodDtcbiAgICAgICAgdmFyIGJvdHRvbSA9ICR0aGlzLm9mZnNldCgpLnRvcCArIGNvbnRhaW5lcl9oZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSAkdGhpcy5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciB3aW5kb3dCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQ7XG4gICAgICAgIHZhciBwZXJjZW50U2Nyb2xsZWQgPSAod2luZG93Qm90dG9tIC0gdG9wKSAvIChjb250YWluZXJfaGVpZ2h0ICsgd2luZG93SGVpZ2h0KTtcbiAgICAgICAgdmFyIHBhcmFsbGF4ID0gTWF0aC5yb3VuZCgocGFyYWxsYXhfZGlzdCAqIHBlcmNlbnRTY3JvbGxlZCkpO1xuXG4gICAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgICAgJGltZy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJvdHRvbSA+IHNjcm9sbFRvcCkgJiYgKHRvcCA8IChzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQpKSkge1xuICAgICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNEKC01MCUsXCIgKyBwYXJhbGxheCArIFwicHgsIDApXCIpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgaW1hZ2UgbG9hZFxuICAgICAgJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikub25lKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgodHJ1ZSk7XG4gICAgICB9KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZSkgJCh0aGlzKS50cmlnZ2VyKFwibG9hZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICB1cGRhdGVQYXJhbGxheChmYWxzZSk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH07XG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgaW5pdCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgb25TaG93OiBudWxsLFxuICAgICAgICBzd2lwZWFibGU6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlVGhyZXNob2xkOiBJbmZpbml0eSwgLy8gYnJlYWtwb2ludCBmb3Igc3dpcGVhYmxlXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBNYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZygkKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgIHZhciB1bmlxdWVOYW1lc3BhY2UgPSBuYW1lc3BhY2UraTtcblxuICAgICAgLy8gRm9yIGVhY2ggc2V0IG9mIHRhYnMsIHdlIHdhbnQgdG8ga2VlcCB0cmFjayBvZlxuICAgICAgLy8gd2hpY2ggdGFiIGlzIGFjdGl2ZSBhbmQgaXRzIGFzc29jaWF0ZWQgY29udGVudFxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgdmFyICRhY3RpdmUsICRjb250ZW50LCAkbGlua3MgPSAkdGhpcy5maW5kKCdsaS50YWIgYScpLFxuICAgICAgICAgICR0YWJzX3dpZHRoID0gJHRoaXMud2lkdGgoKSxcbiAgICAgICAgICAkdGFic19jb250ZW50ID0gJCgpLFxuICAgICAgICAgICR0YWJzX3dyYXBwZXIsXG4gICAgICAgICAgJHRhYl93aWR0aCA9IE1hdGgubWF4KCR0YWJzX3dpZHRoLCAkdGhpc1swXS5zY3JvbGxXaWR0aCkgLyAkbGlua3MubGVuZ3RoLFxuICAgICAgICAgICRpbmRpY2F0b3IsXG4gICAgICAgICAgaW5kZXggPSBwcmV2X2luZGV4ID0gMCxcbiAgICAgICAgICBjbGlja2VkID0gZmFsc2UsXG4gICAgICAgICAgY2xpY2tlZFRpbWVvdXQsXG4gICAgICAgICAgdHJhbnNpdGlvbiA9IDMwMDtcblxuXG4gICAgICAvLyBGaW5kcyByaWdodCBhdHRyaWJ1dGUgZm9yIGluZGljYXRvciBiYXNlZCBvbiBhY3RpdmUgdGFiLlxuICAgICAgLy8gZWw6IGpRdWVyeSBPYmplY3RcbiAgICAgIHZhciBjYWxjUmlnaHRQb3MgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCR0YWJzX3dpZHRoIC0gZWwucG9zaXRpb24oKS5sZWZ0IC0gZWwub3V0ZXJXaWR0aCgpIC0gJHRoaXMuc2Nyb2xsTGVmdCgpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEZpbmRzIGxlZnQgYXR0cmlidXRlIGZvciBpbmRpY2F0b3IgYmFzZWQgb24gYWN0aXZlIHRhYi5cbiAgICAgIC8vIGVsOiBqUXVlcnkgT2JqZWN0XG4gICAgICB2YXIgY2FsY0xlZnRQb3MgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihlbC5wb3NpdGlvbigpLmxlZnQgKyAkdGhpcy5zY3JvbGxMZWZ0KCkpO1xuICAgICAgfTtcblxuICAgICAgLy8gQW5pbWF0ZXMgSW5kaWNhdG9yIHRvIGFjdGl2ZSB0YWIuXG4gICAgICAvLyBwcmV2X2luZGV4OiBOdW1iZXJcbiAgICAgIHZhciBhbmltYXRlSW5kaWNhdG9yID0gZnVuY3Rpb24ocHJldl9pbmRleCkge1xuICAgICAgICBpZiAoKGluZGV4IC0gcHJldl9pbmRleCkgPj0gMCkge1xuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wicmlnaHRcIjogY2FsY1JpZ2h0UG9zKCRhY3RpdmUpIH0sIHsgZHVyYXRpb246IHRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJsZWZ0XCI6IGNhbGNMZWZ0UG9zKCRhY3RpdmUpIH0sIHtkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGRlbGF5OiA5MH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJsZWZ0XCI6IGNhbGNMZWZ0UG9zKCRhY3RpdmUpIH0sIHsgZHVyYXRpb246IHRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSwge2R1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgZGVsYXk6IDkwfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIENoYW5nZSBzd2lwZWFibGUgYWNjb3JkaW5nIHRvIHJlc3BvbnNpdmUgdGhyZXNob2xkXG4gICAgICBpZiAob3B0aW9ucy5zd2lwZWFibGUpIHtcbiAgICAgICAgaWYgKHdpbmRvd193aWR0aCA+IG9wdGlvbnMucmVzcG9uc2l2ZVRocmVzaG9sZCkge1xuICAgICAgICAgIG9wdGlvbnMuc3dpcGVhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBJZiB0aGUgbG9jYXRpb24uaGFzaCBtYXRjaGVzIG9uZSBvZiB0aGUgbGlua3MsIHVzZSB0aGF0IGFzIHRoZSBhY3RpdmUgdGFiLlxuICAgICAgJGFjdGl2ZSA9ICQoJGxpbmtzLmZpbHRlcignW2hyZWY9XCInK2xvY2F0aW9uLmhhc2grJ1wiXScpKTtcblxuICAgICAgLy8gSWYgbm8gbWF0Y2ggaXMgZm91bmQsIHVzZSB0aGUgZmlyc3QgbGluayBvciBhbnkgd2l0aCBjbGFzcyAnYWN0aXZlJyBhcyB0aGUgaW5pdGlhbCBhY3RpdmUgdGFiLlxuICAgICAgaWYgKCRhY3RpdmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICRhY3RpdmUgPSAkKHRoaXMpLmZpbmQoJ2xpLnRhYiBhLmFjdGl2ZScpLmZpcnN0KCk7XG4gICAgICB9XG4gICAgICBpZiAoJGFjdGl2ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJGFjdGl2ZSA9ICQodGhpcykuZmluZCgnbGkudGFiIGEnKS5maXJzdCgpO1xuICAgICAgfVxuXG4gICAgICAkYWN0aXZlLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIGluZGV4ID0gJGxpbmtzLmluZGV4KCRhY3RpdmUpO1xuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICgkYWN0aXZlWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJGNvbnRlbnQgPSAkKCRhY3RpdmVbMF0uaGFzaCk7XG4gICAgICAgICRjb250ZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwZW5kIGluZGljYXRvciB0aGVuIHNldCBpbmRpY2F0b3Igd2lkdGggdG8gdGFiIHdpZHRoXG4gICAgICBpZiAoISR0aGlzLmZpbmQoJy5pbmRpY2F0b3InKS5sZW5ndGgpIHtcbiAgICAgICAgJHRoaXMuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+Jyk7XG4gICAgICB9XG4gICAgICAkaW5kaWNhdG9yID0gJHRoaXMuZmluZCgnLmluZGljYXRvcicpO1xuXG4gICAgICAvLyB3ZSBtYWtlIHN1cmUgdGhhdCB0aGUgaW5kaWNhdG9yIGlzIGF0IHRoZSBlbmQgb2YgdGhlIHRhYnNcbiAgICAgICR0aGlzLmFwcGVuZCgkaW5kaWNhdG9yKTtcblxuICAgICAgaWYgKCR0aGlzLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICAgLy8gJGluZGljYXRvci5jc3Moe1wicmlnaHRcIjogJHRhYnNfd2lkdGggLSAoKGluZGV4ICsgMSkgKiAkdGFiX3dpZHRoKX0pO1xuICAgICAgICAvLyAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGluZGV4ICogJHRhYl93aWR0aH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRpbmRpY2F0b3IuY3NzKHtcInJpZ2h0XCI6IGNhbGNSaWdodFBvcygkYWN0aXZlKSB9KTtcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGNhbGNMZWZ0UG9zKCRhY3RpdmUpIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS50YWJzLScrdW5pcXVlTmFtZXNwYWNlKS5vbigncmVzaXplLnRhYnMtJyt1bmlxdWVOYW1lc3BhY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpO1xuICAgICAgICAkdGFiX3dpZHRoID0gTWF0aC5tYXgoJHRhYnNfd2lkdGgsICR0aGlzWzBdLnNjcm9sbFdpZHRoKSAvICRsaW5rcy5sZW5ndGg7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YWJfd2lkdGggIT09IDAgJiYgJHRhYnNfd2lkdGggIT09IDApIHtcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSk7XG4gICAgICAgICAgJGluZGljYXRvci5jc3Moe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEluaXRpYWxpemUgVGFicyBDb250ZW50LlxuICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XG4gICAgICAgIC8vIFRPRE86IER1cGxpY2F0ZSBjYWxscyB3aXRoIHN3aXBlYWJsZT8gaGFuZGxlIG11bHRpcGxlIGRpdiB3cmFwcGluZy5cbiAgICAgICAgJGxpbmtzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkY3Vycl9jb250ZW50ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpO1xuICAgICAgICAgICRjdXJyX2NvbnRlbnQuYWRkQ2xhc3MoJ2Nhcm91c2VsLWl0ZW0nKTtcbiAgICAgICAgICAkdGFic19jb250ZW50ID0gJHRhYnNfY29udGVudC5hZGQoJGN1cnJfY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkdGFic193cmFwcGVyID0gJHRhYnNfY29udGVudC53cmFwQWxsKCc8ZGl2IGNsYXNzPVwidGFicy1jb250ZW50IGNhcm91c2VsXCI+PC9kaXY+Jyk7XG4gICAgICAgICR0YWJzX2NvbnRlbnQuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAkKCcudGFicy1jb250ZW50LmNhcm91c2VsJykuY2Fyb3VzZWwoe1xuICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgb25DeWNsZVRvOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHByZXZfaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgaW5kZXggPSAkdGFic193cmFwcGVyLmluZGV4KGl0ZW0pO1xuICAgICAgICAgICAgICAkYWN0aXZlID0gJGxpbmtzLmVxKGluZGV4KTtcbiAgICAgICAgICAgICAgYW5pbWF0ZUluZGljYXRvcihwcmV2X2luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhpZGUgdGhlIHJlbWFpbmluZyBjb250ZW50XG4gICAgICAgICRsaW5rcy5ub3QoJGFjdGl2ZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuICAgICAgLy8gQmluZCB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlclxuICAgICAgJHRoaXMub2ZmKCdjbGljay50YWJzJykub24oJ2NsaWNrLnRhYnMnLCAnYScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWN0IGFzIHJlZ3VsYXIgbGluayBpZiB0YXJnZXQgYXR0cmlidXRlIGlzIHNwZWNpZmllZC5cbiAgICAgICAgaWYgKCEhJCh0aGlzKS5hdHRyKFwidGFyZ2V0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xpY2tlZCA9IHRydWU7XG4gICAgICAgICR0YWJzX3dpZHRoID0gJHRoaXMud2lkdGgoKTtcbiAgICAgICAgJHRhYl93aWR0aCA9IE1hdGgubWF4KCR0YWJzX3dpZHRoLCAkdGhpc1swXS5zY3JvbGxXaWR0aCkgLyAkbGlua3MubGVuZ3RoO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIG9sZCB0YWIgaW5hY3RpdmUuXG4gICAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB2YXIgJG9sZENvbnRlbnQgPSAkY29udGVudFxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFyaWFibGVzIHdpdGggdGhlIG5ldyBsaW5rIGFuZCBjb250ZW50XG4gICAgICAgICRhY3RpdmUgPSAkKHRoaXMpO1xuICAgICAgICAkY29udGVudCA9ICQoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKTtcbiAgICAgICAgJGxpbmtzID0gJHRoaXMuZmluZCgnbGkudGFiIGEnKTtcbiAgICAgICAgdmFyIGFjdGl2ZVJlY3QgPSAkYWN0aXZlLnBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgdGFiIGFjdGl2ZS5cbiAgICAgICAgJGFjdGl2ZS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHByZXZfaW5kZXggPSBpbmRleDtcbiAgICAgICAgaW5kZXggPSAkbGlua3MuaW5kZXgoJCh0aGlzKSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hhbmdlIHVybCB0byBjdXJyZW50IHRhYlxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICRhY3RpdmUuYXR0cignaHJlZicpO1xuXG4gICAgICAgIC8vIFN3YXAgY29udGVudFxuICAgICAgICBpZiAob3B0aW9ucy5zd2lwZWFibGUpIHtcbiAgICAgICAgICBpZiAoJHRhYnNfY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICR0YWJzX2NvbnRlbnQuY2Fyb3VzZWwoJ3NldCcsIGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCRjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICRjb250ZW50LnNob3coKTtcbiAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vblNob3cpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5vblNob3cuY2FsbCh0aGlzLCAkY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCRvbGRDb250ZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgISRvbGRDb250ZW50LmlzKCRjb250ZW50KSkge1xuICAgICAgICAgICAgJG9sZENvbnRlbnQuaGlkZSgpO1xuICAgICAgICAgICAgJG9sZENvbnRlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IGNsaWNrZWQgc3RhdGVcbiAgICAgICAgY2xpY2tlZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGNsaWNrZWQgPSBmYWxzZTsgfSwgdHJhbnNpdGlvbik7XG5cbiAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvclxuICAgICAgICBhbmltYXRlSW5kaWNhdG9yKHByZXZfaW5kZXgpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGFuY2hvcidzIGRlZmF1bHQgY2xpY2sgYWN0aW9uXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgfSxcbiAgICBzZWxlY3RfdGFiIDogZnVuY3Rpb24oIGlkICkge1xuICAgICAgdGhpcy5maW5kKCdhW2hyZWY9XCIjJyArIGlkICsgJ1wiXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9O1xuXG4gICQuZm4udGFicyA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xuICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xuICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kT3JPcHRpb25zICkge1xuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50YWJzJyApO1xuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJ3VsLnRhYnMnKS50YWJzKCk7XG4gIH0pO1xufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAgICQuZm4udG9vbHRpcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgdGltZW91dCA9IG51bGwsXG4gICAgICBtYXJnaW4gPSA1O1xuXG4gICAgICAvLyBEZWZhdWx0c1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBkZWxheTogMzUwLFxuICAgICAgICB0b29sdGlwOiAnJyxcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICBodG1sOiBmYWxzZVxuICAgICAgfTtcblxuICAgICAgLy8gUmVtb3ZlIHRvb2x0aXAgZnJvbSB0aGUgYWN0aXZhdG9yXG4gICAgICBpZiAob3B0aW9ucyA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcpKS5yZW1vdmUoKTtcbiAgICAgICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG9vbHRpcElkID0gTWF0ZXJpYWxpemUuZ3VpZCgpO1xuICAgICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcblxuICAgICAgICAvLyBEZXN0cm95IG9sZCB0b29sdGlwXG4gICAgICAgIGlmIChvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJykpIHtcbiAgICAgICAgICAkKCcjJyArIG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJywgdG9vbHRpcElkKTtcblxuICAgICAgICAvLyBHZXQgYXR0cmlidXRlcy5cbiAgICAgICAgdmFyIGFsbG93SHRtbCxcbiAgICAgICAgICAgIHRvb2x0aXBEZWxheSxcbiAgICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbixcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0LFxuICAgICAgICAgICAgdG9vbHRpcEVsLFxuICAgICAgICAgICAgYmFja2Ryb3A7XG4gICAgICAgIHZhciBzZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYWxsb3dIdG1sID0gb3JpZ2luLmF0dHIoJ2RhdGEtaHRtbCcpID8gb3JpZ2luLmF0dHIoJ2RhdGEtaHRtbCcpID09PSAndHJ1ZScgOiBvcHRpb25zLmh0bWw7XG4gICAgICAgICAgdG9vbHRpcERlbGF5ID0gb3JpZ2luLmF0dHIoJ2RhdGEtZGVsYXknKTtcbiAgICAgICAgICB0b29sdGlwRGVsYXkgPSAodG9vbHRpcERlbGF5ID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcERlbGF5ID09PSAnJykgP1xuICAgICAgICAgICAgICBvcHRpb25zLmRlbGF5IDogdG9vbHRpcERlbGF5O1xuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9IG9yaWdpbi5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uID0gKHRvb2x0aXBQb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBQb3NpdGlvbiA9PT0gJycpID9cbiAgICAgICAgICAgICAgb3B0aW9ucy5wb3NpdGlvbiA6IHRvb2x0aXBQb3NpdGlvbjtcbiAgICAgICAgICB0b29sdGlwVGV4dCA9IG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAnKTtcbiAgICAgICAgICB0b29sdGlwVGV4dCA9ICh0b29sdGlwVGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBUZXh0ID09PSAnJykgP1xuICAgICAgICAgICAgICBvcHRpb25zLnRvb2x0aXAgOiB0b29sdGlwVGV4dDtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0QXR0cmlidXRlcygpO1xuXG4gICAgICAgIHZhciByZW5kZXJUb29sdGlwRWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdG9vbHRpcCA9ICQoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbC10b29sdGlwXCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAvLyBDcmVhdGUgVGV4dCBzcGFuXG4gICAgICAgICAgaWYgKGFsbG93SHRtbCkge1xuICAgICAgICAgICAgdG9vbHRpcFRleHQgPSAkKCc8c3Bhbj48L3NwYW4+JykuaHRtbCh0b29sdGlwVGV4dCk7XG4gICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdG9vbHRpcFRleHQgPSAkKCc8c3Bhbj48L3NwYW4+JykudGV4dCh0b29sdGlwVGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ3JlYXRlIHRvb2x0aXBcbiAgICAgICAgICB0b29sdGlwLmFwcGVuZCh0b29sdGlwVGV4dClcbiAgICAgICAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpXG4gICAgICAgICAgICAuYXR0cignaWQnLCB0b29sdGlwSWQpO1xuXG4gICAgICAgICAgLy8gQ3JlYXRlIGJhY2tkcm9wXG4gICAgICAgICAgYmFja2Ryb3AgPSAkKCc8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICAgICAgICBiYWNrZHJvcC5hcHBlbmRUbyh0b29sdGlwKTtcbiAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgfTtcbiAgICAgICAgdG9vbHRpcEVsID0gcmVuZGVyVG9vbHRpcEVsKCk7XG5cbiAgICAgICAgLy8gRGVzdHJveSBwcmV2aW91c2x5IGJpbmRlZCBldmVudHNcbiAgICAgICAgb3JpZ2luLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xuICAgICAgICAvLyBNb3VzZSBJblxuICAgICAgICB2YXIgc3RhcnRlZCA9IGZhbHNlLCB0aW1lb3V0UmVmO1xuICAgICAgICBvcmlnaW4ub24oeydtb3VzZWVudGVyLnRvb2x0aXAnOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdmFyIHNob3dUb29sdGlwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSgnc3RvcCcpO1xuICAgICAgICAgICAgYmFja2Ryb3AudmVsb2NpdHkoJ3N0b3AnKTtcbiAgICAgICAgICAgIHRvb2x0aXBFbC5jc3MoeyB2aXNpYmlsaXR5OiAndmlzaWJsZScsIGxlZnQ6ICcwcHgnLCB0b3A6ICcwcHgnIH0pO1xuXG4gICAgICAgICAgICAvLyBUb29sdGlwIHBvc2l0aW9uaW5nXG4gICAgICAgICAgICB2YXIgb3JpZ2luV2lkdGggPSBvcmlnaW4ub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHRvb2x0aXBIZWlnaHQgPSB0b29sdGlwRWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB0b29sdGlwV2lkdGggPSB0b29sdGlwRWwub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJzBweCc7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICcwcHgnO1xuICAgICAgICAgICAgdmFyIGJhY2tkcm9wT2Zmc2V0V2lkdGggPSBiYWNrZHJvcFswXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcE9mZnNldEhlaWdodCA9IGJhY2tkcm9wWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHZhciBzY2FsZVhGYWN0b3IgPSA4O1xuICAgICAgICAgICAgdmFyIHNjYWxlWUZhY3RvciA9IDg7XG4gICAgICAgICAgICB2YXIgc2NhbGVGYWN0b3IgPSAwO1xuICAgICAgICAgICAgdmFyIHRhcmdldFRvcCwgdGFyZ2V0TGVmdCwgbmV3Q29vcmRpbmF0ZXM7XG5cbiAgICAgICAgICAgIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwidG9wXCIpIHtcbiAgICAgICAgICAgICAgLy8gVG9wIFBvc2l0aW9uXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSB0b29sdGlwSGVpZ2h0IC0gbWFyZ2luO1xuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aC8yIC0gdG9vbHRpcFdpZHRoLzI7XG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XG4gICAgICAgICAgICAgIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJy0xMHB4JztcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDE0cHggMCAwJyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICh0b29sdGlwV2lkdGgvMikgLSAoYmFja2Ryb3BPZmZzZXRXaWR0aC8yKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExlZnQgUG9zaXRpb25cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0VG9wID0gb3JpZ2luLm9mZnNldCgpLnRvcCArIG9yaWdpbkhlaWdodC8yIC0gdG9vbHRpcEhlaWdodC8yO1xuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIG9yaWdpbi5vZmZzZXQoKS5sZWZ0IC0gdG9vbHRpcFdpZHRoIC0gbWFyZ2luO1xuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuXG4gICAgICAgICAgICAgIHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQgPSAnLTEwcHgnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTRweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTRweCAwIDAgMTRweCcsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnOTUlIDUwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LzIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdG9vbHRpcFdpZHRoXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmlnaHQgUG9zaXRpb25cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRvb2x0aXBIZWlnaHQvMjtcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGggKyBtYXJnaW47XG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XG5cbiAgICAgICAgICAgICAgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICcrMTBweCc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgdG9wOiAnLTdweCcsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE0cHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE0cHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzAgMTRweCAxNHB4IDAnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUlIDUwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LzIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQm90dG9tIFBvc2l0aW9uXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW4ub3V0ZXJIZWlnaHQoKSArIG1hcmdpbjtcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRvb2x0aXBXaWR0aC8yO1xuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuICAgICAgICAgICAgICB0b29sdGlwVmVydGljYWxNb3ZlbWVudCA9ICcrMTBweCc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogKHRvb2x0aXBXaWR0aC8yKSAtIChiYWNrZHJvcE9mZnNldFdpZHRoLzIpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdG9vcHRpcCBjc3MgcGxhY2VtZW50XG4gICAgICAgICAgICB0b29sdGlwRWwuY3NzKHtcbiAgICAgICAgICAgICAgdG9wOiBuZXdDb29yZGluYXRlcy55LFxuICAgICAgICAgICAgICBsZWZ0OiBuZXdDb29yZGluYXRlcy54XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIFNjYWxlIHRvIGZpbGxcbiAgICAgICAgICAgIHNjYWxlWEZhY3RvciA9IE1hdGguU1FSVDIgKiB0b29sdGlwV2lkdGggLyBwYXJzZUludChiYWNrZHJvcE9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgIHNjYWxlWUZhY3RvciA9IE1hdGguU1FSVDIgKiB0b29sdGlwSGVpZ2h0IC8gcGFyc2VJbnQoYmFja2Ryb3BPZmZzZXRIZWlnaHQpO1xuICAgICAgICAgICAgc2NhbGVGYWN0b3IgPSBNYXRoLm1heChzY2FsZVhGYWN0b3IsIHNjYWxlWUZhY3Rvcik7XG5cbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVk6IHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50LCB0cmFuc2xhdGVYOiB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50fSwgeyBkdXJhdGlvbjogMzUwLCBxdWV1ZTogZmFsc2UgfSlcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiAzMDAsIGRlbGF5OiA1MCwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICBiYWNrZHJvcC5jc3MoeyB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSlcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjogNTUsIGRlbGF5OiAwLCBxdWV1ZTogZmFsc2V9KVxuICAgICAgICAgICAgICAudmVsb2NpdHkoe3NjYWxlWDogc2NhbGVGYWN0b3IsIHNjYWxlWTogc2NhbGVGYWN0b3J9LCB7ZHVyYXRpb246IDMwMCwgZGVsYXk6IDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCd9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGltZW91dFJlZiA9IHNldFRpbWVvdXQoc2hvd1Rvb2x0aXAsIHRvb2x0aXBEZWxheSk7IC8vIEVuZCBJbnRlcnZhbFxuXG4gICAgICAgIC8vIE1vdXNlIE91dFxuICAgICAgICB9LFxuICAgICAgICAnbW91c2VsZWF2ZS50b29sdGlwJzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBSZXNldCBTdGF0ZVxuICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZik7XG5cbiAgICAgICAgICAvLyBBbmltYXRlIGJhY2tcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdG9vbHRpcEVsLnZlbG9jaXR5KHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiAwLCB0cmFuc2xhdGVYOiAwfSwgeyBkdXJhdGlvbjogMjI1LCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgYmFja2Ryb3AudmVsb2NpdHkoe29wYWNpdHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxfSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOjIyNSxcbiAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcC5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbC5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTt9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sMjI1KTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwb3NpdGlvbldpdGhpblNjcmVlbiA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgbmV3WCA9IHg7XG4gICAgdmFyIG5ld1kgPSB5O1xuXG4gICAgaWYgKG5ld1ggPCAwKSB7XG4gICAgICBuZXdYID0gNDtcbiAgICB9IGVsc2UgaWYgKG5ld1ggKyB3aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICBuZXdYIC09IG5ld1ggKyB3aWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgbmV3WSA9IDQ7XG4gICAgfSBlbHNlIGlmIChuZXdZICsgaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0ICsgJCh3aW5kb3cpLnNjcm9sbFRvcCkge1xuICAgICAgbmV3WSAtPSBuZXdZICsgaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB7eDogbmV3WCwgeTogbmV3WX07XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgJCgnLnRvb2x0aXBwZWQnKS50b29sdGlwKCk7XG4gICB9KTtcbn0oIGpRdWVyeSApKTtcbjsvKiFcbiAqIFdhdmVzIHYwLjYuNFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuOyhmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgV2F2ZXMgPSBXYXZlcyB8fCB7fTtcbiAgICB2YXIgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuXG4gICAgLy8gRmluZCBleGFjdCBwb3NpdGlvbiBvZiBlbGVtZW50XG4gICAgZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtKSB7XG4gICAgICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KGVsZW0pIHtcbiAgICAgICAgdmFyIGRvY0VsZW0sIHdpbixcbiAgICAgICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9LFxuICAgICAgICAgICAgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cbiAgICAgICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0U3R5bGUob2JqKSB7XG4gICAgICAgIHZhciBzdHlsZSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGEgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gKGEgKyAnOicgKyBvYmpbYV0gKyAnOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHZhciBFZmZlY3QgPSB7XG5cbiAgICAgICAgLy8gRWZmZWN0IGRlbGF5XG4gICAgICAgIGR1cmF0aW9uOiA3NTAsXG5cbiAgICAgICAgc2hvdzogZnVuY3Rpb24oZSwgZWxlbWVudCkge1xuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIHJpZ2h0IGNsaWNrXG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnQgfHwgdGhpcztcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHJpcHBsZVxuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9ICd3YXZlcy1yaXBwbGUnO1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQocmlwcGxlKTtcblxuICAgICAgICAgICAgLy8gR2V0IGNsaWNrIGNvb3JkaW5hdGUgYW5kIGVsZW1lbnQgd2l0ZGhcbiAgICAgICAgICAgIHZhciBwb3MgICAgICAgICA9IG9mZnNldChlbCk7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVZICAgPSAoZS5wYWdlWSAtIHBvcy50b3ApO1xuICAgICAgICAgICAgdmFyIHJlbGF0aXZlWCAgID0gKGUucGFnZVggLSBwb3MubGVmdCk7XG4gICAgICAgICAgICB2YXIgc2NhbGUgICAgICAgPSAnc2NhbGUoJysoKGVsLmNsaWVudFdpZHRoIC8gMTAwKSAqIDEwKSsnKSc7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQgZm9yIHRvdWNoIGRldmljZXNcbiAgICAgICAgICAgIGlmICgndG91Y2hlcycgaW4gZSkge1xuICAgICAgICAgICAgICByZWxhdGl2ZVkgICA9IChlLnRvdWNoZXNbMF0ucGFnZVkgLSBwb3MudG9wKTtcbiAgICAgICAgICAgICAgcmVsYXRpdmVYICAgPSAoZS50b3VjaGVzWzBdLnBhZ2VYIC0gcG9zLmxlZnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBdHRhY2ggZGF0YSB0byBlbGVtZW50XG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnLCBzY2FsZSk7XG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCByZWxhdGl2ZVgpO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgcmVsYXRpdmVZKTtcblxuICAgICAgICAgICAgLy8gU2V0IHJpcHBsZSBwb3NpdGlvblxuICAgICAgICAgICAgdmFyIHJpcHBsZVN0eWxlID0ge1xuICAgICAgICAgICAgICAgICd0b3AnOiByZWxhdGl2ZVkrJ3B4JyxcbiAgICAgICAgICAgICAgICAnbGVmdCc6IHJlbGF0aXZlWCsncHgnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByaXBwbGUuY2xhc3NOYW1lID0gcmlwcGxlLmNsYXNzTmFtZSArICcgd2F2ZXMtbm90cmFuc2l0aW9uJztcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NOYW1lID0gcmlwcGxlLmNsYXNzTmFtZS5yZXBsYWNlKCd3YXZlcy1ub3RyYW5zaXRpb24nLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIFNjYWxlIHRoZSByaXBwbGVcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZS50cmFuc2Zvcm0gPSBzY2FsZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlLm9wYWNpdHkgICA9ICcxJztcblxuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbiddID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zaXRpb24tZHVyYXRpb24nXSAgICA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNpdGlvbi1kdXJhdGlvbiddICAgICAgPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSAgICAgICAgID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcblxuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gICAgPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gICAgICAgICA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcblxuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUocmlwcGxlU3R5bGUpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBUb3VjaEhhbmRsZXIudG91Y2h1cChlKTtcblxuICAgICAgICAgICAgdmFyIGVsID0gdGhpcztcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGVsLmNsaWVudFdpZHRoICogMS40O1xuXG4gICAgICAgICAgICAvLyBHZXQgZmlyc3QgcmlwcGxlXG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gbnVsbDtcbiAgICAgICAgICAgIHZhciByaXBwbGVzID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F2ZXMtcmlwcGxlJyk7XG4gICAgICAgICAgICBpZiAocmlwcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmlwcGxlID0gcmlwcGxlc1tyaXBwbGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVggICA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xuICAgICAgICAgICAgdmFyIHJlbGF0aXZlWSAgID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XG4gICAgICAgICAgICB2YXIgc2NhbGUgICAgICAgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJyk7XG5cbiAgICAgICAgICAgIC8vIEdldCBkZWxheSBiZWV0d2VlbiBtb3VzZWRvd24gYW5kIG1vdXNlIGxlYXZlXG4gICAgICAgICAgICB2YXIgZGlmZiA9IERhdGUubm93KCkgLSBOdW1iZXIocmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS1ob2xkJykpO1xuICAgICAgICAgICAgdmFyIGRlbGF5ID0gMzUwIC0gZGlmZjtcblxuICAgICAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xuICAgICAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmFkZSBvdXQgcmlwcGxlIGFmdGVyIGRlbGF5XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSsncHgnLFxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IHJlbGF0aXZlWCsncHgnLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcwJyxcblxuICAgICAgICAgICAgICAgICAgICAvLyBEdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgICAgICctby10cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShzdHlsZSkpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgRWZmZWN0LmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBMaXR0bGUgaGFjayB0byBtYWtlIDxpbnB1dD4gY2FuIHBlcmZvcm0gd2F2ZXMgZWZmZWN0XG4gICAgICAgIHdyYXBJbnB1dDogZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgZWxlbWVudHMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50c1thXTtcblxuICAgICAgICAgICAgICAgIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaW5wdXQgYWxyZWFkeSBoYXZlIHBhcmVudCBqdXN0IHBhc3MgdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2knICYmIHBhcmVudC5jbGFzc05hbWUuaW5kZXhPZignd2F2ZXMtZWZmZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGNsYXNzIGFuZCBzdHlsZSB0byB0aGUgc3BlY2lmaWVkIHBhcmVudFxuICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUgKyAnIHdhdmVzLWlucHV0LXdyYXBwZXInO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50U3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50U3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZWxlbWVudFN0eWxlKTtcblxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAnd2F2ZXMtYnV0dG9uLWlucHV0JztcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGFzIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQod3JhcHBlciwgZWwpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIG1vdXNlZG93biBldmVudCBmb3IgNTAwbXMgZHVyaW5nIGFuZCBhZnRlciB0b3VjaFxuICAgICAqL1xuICAgIHZhciBUb3VjaEhhbmRsZXIgPSB7XG4gICAgICAgIC8qIHVzZXMgYW4gaW50ZWdlciByYXRoZXIgdGhhbiBib29sIHNvIHRoZXJlJ3Mgbm8gaXNzdWVzIHdpdGhcbiAgICAgICAgICogbmVlZGluZyB0byBjbGVhciB0aW1lb3V0cyBpZiBhbm90aGVyIHRvdWNoIGV2ZW50IG9jY3VycmVkXG4gICAgICAgICAqIHdpdGhpbiB0aGUgNTAwbXMuIENhbm5vdCBtb3VzZXVwIGJldHdlZW4gdG91Y2hzdGFydCBhbmRcbiAgICAgICAgICogdG91Y2hlbmQsIG5vciBpbiB0aGUgNTAwbXMgYWZ0ZXIgdG91Y2hlbmQuICovXG4gICAgICAgIHRvdWNoZXM6IDAsXG4gICAgICAgIGFsbG93RXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBhbGxvdyA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzICs9IDE7IC8vcHVzaFxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgLT0gMTsgLy9wb3AgYWZ0ZXIgNTAwbXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgVG91Y2hIYW5kbGVyLnRvdWNoZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFsbG93O1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaHVwOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBUb3VjaEhhbmRsZXIuYWxsb3dFdmVudChlKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIERlbGVnYXRlZCBjbGljayBoYW5kbGVyIGZvciAud2F2ZXMtZWZmZWN0IGVsZW1lbnQuXG4gICAgICogcmV0dXJucyBudWxsIHdoZW4gLndhdmVzLWVmZmVjdCBlbGVtZW50IG5vdCBpbiBcImNsaWNrIHRyZWVcIlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFdhdmVzRWZmZWN0RWxlbWVudChlKSB7XG4gICAgICAgIGlmIChUb3VjaEhhbmRsZXIuYWxsb3dFdmVudChlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG4gICAgICAgIHdoaWxlICh0YXJnZXQucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkgJiYgdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCd3YXZlcy1lZmZlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3YXZlcy1lZmZlY3QnKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1YmJsZSB0aGUgY2xpY2sgYW5kIHNob3cgZWZmZWN0IGlmIC53YXZlcy1lZmZlY3QgZWxlbSB3YXMgZm91bmRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG93RWZmZWN0KGUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBnZXRXYXZlc0VmZmVjdEVsZW1lbnQoZSk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIEVmZmVjdC5zaG93KGUsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgV2F2ZXMuZGlzcGxheUVmZmVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgaWYgKCdkdXJhdGlvbicgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgRWZmZWN0LmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vV3JhcCBpbnB1dCBpbnNpZGUgPGk+IHRhZ1xuICAgICAgICBFZmZlY3Qud3JhcElucHV0KCQkKCcud2F2ZXMtZWZmZWN0JykpO1xuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggV2F2ZXMgdG8gYW4gaW5wdXQgZWxlbWVudCAob3IgYW55IGVsZW1lbnQgd2hpY2ggZG9lc24ndFxuICAgICAqIGJ1YmJsZSBtb3VzZXVwL21vdXNlZG93biBldmVudHMpLlxuICAgICAqICAgSW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoIGR5bmFtaWNhbGx5IGxvYWRlZCBmb3Jtcy9pbnB1dHMsIG9yXG4gICAgICogd2hlcmUgdGhlIHVzZXIgZG9lc24ndCB3YW50IGEgZGVsZWdhdGVkIGNsaWNrIGhhbmRsZXIuXG4gICAgICovXG4gICAgV2F2ZXMuYXR0YWNoID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAvL0ZVVFVSRTogYXV0b21hdGljYWxseSBhZGQgd2F2ZXMgY2xhc3NlcyBhbmQgYWxsb3cgdXNlcnNcbiAgICAgICAgLy8gdG8gc3BlY2lmeSB0aGVtIHdpdGggYW4gb3B0aW9ucyBwYXJhbT8gRWcuIGxpZ2h0L2NsYXNzaWMvYnV0dG9uXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgRWZmZWN0LndyYXBJbnB1dChbZWxlbWVudF0pO1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuV2F2ZXMgPSBXYXZlcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgV2F2ZXMuZGlzcGxheUVmZmVjdCgpO1xuICAgIH0sIGZhbHNlKTtcblxufSkod2luZG93KTtcbjtNYXRlcmlhbGl6ZS50b2FzdCA9IGZ1bmN0aW9uIChtZXNzYWdlLCBkaXNwbGF5TGVuZ3RoLCBjbGFzc05hbWUsIGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XG5cbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1jb250YWluZXInKTtcblxuICAvLyBDcmVhdGUgdG9hc3QgY29udGFpbmVyIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gIGlmIChjb250YWluZXIgPT09IG51bGwpIHtcbiAgICAvLyBjcmVhdGUgbm90aWZpY2F0aW9uIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZCA9ICd0b2FzdC1jb250YWluZXInO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIFNlbGVjdCBhbmQgYXBwZW5kIHRvYXN0XG4gIHZhciBuZXdUb2FzdCA9IGNyZWF0ZVRvYXN0KG1lc3NhZ2UpO1xuXG4gIC8vIG9ubHkgYXBwZW5kIHRvYXN0IGlmIG1lc3NhZ2UgaXMgbm90IHVuZGVmaW5lZFxuICBpZihtZXNzYWdlKXtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9hc3QpO1xuICB9XG5cbiAgbmV3VG9hc3Quc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgLy8gQW5pbWF0ZSB0b2FzdCBpblxuICBWZWwobmV3VG9hc3QsIHt0cmFuc2xhdGVZOiAnLTM1cHgnLCAgb3BhY2l0eTogMSB9LCB7ZHVyYXRpb246IDMwMCxcbiAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgIHF1ZXVlOiBmYWxzZX0pO1xuXG4gIC8vIEFsbG93cyB0aW1lciB0byBiZSBwYXVzZSB3aGlsZSBiZWluZyBwYW5uZWRcbiAgdmFyIHRpbWVMZWZ0ID0gZGlzcGxheUxlbmd0aDtcbiAgdmFyIGNvdW50ZXJJbnRlcnZhbDtcbiAgaWYgKHRpbWVMZWZ0ICE9IG51bGwpICB7XG4gICAgY291bnRlckludGVydmFsID0gc2V0SW50ZXJ2YWwgKGZ1bmN0aW9uKCl7XG4gICAgICBpZiAobmV3VG9hc3QucGFyZW50Tm9kZSA9PT0gbnVsbClcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoY291bnRlckludGVydmFsKTtcblxuICAgICAgLy8gSWYgdG9hc3QgaXMgbm90IGJlaW5nIGRyYWdnZWQsIGRlY3JlYXNlIGl0cyB0aW1lIHJlbWFpbmluZ1xuICAgICAgaWYgKCFuZXdUb2FzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bhbm5pbmcnKSkge1xuICAgICAgICB0aW1lTGVmdCAtPSAyMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgLy8gQW5pbWF0ZSB0b2FzdCBvdXRcbiAgICAgICAgVmVsKG5ld1RvYXN0LCB7XCJvcGFjaXR5XCI6IDAsIG1hcmdpblRvcDogJy00MHB4J30sIHsgZHVyYXRpb246IDM3NSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBvcHRpb25hbCBjYWxsYmFja1xuICAgICAgICAgICAgICBpZih0eXBlb2YoY29tcGxldGVDYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIC8vIFJlbW92ZSB0b2FzdCBhZnRlciBpdCB0aW1lcyBvdXRcbiAgICAgICAgICAgICAgdGhpc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChjb3VudGVySW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIDIwKTtcbiAgfVxuXG5cblxuICBmdW5jdGlvbiBjcmVhdGVUb2FzdChodG1sKSB7XG5cbiAgICAvLyBDcmVhdGUgdG9hc3RcbiAgICB2YXIgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKCd0b2FzdCcpO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBjb3VudCA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgLy8gSWYgdHlwZSBvZiBwYXJhbWV0ZXIgaXMgSFRNTCBFbGVtZW50XG4gICAgaWYgKCB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBodG1sIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiBodG1sICYmIHR5cGVvZiBodG1sID09PSBcIm9iamVjdFwiICYmIGh0bWwgIT09IG51bGwgJiYgaHRtbC5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2YgaHRtbC5ub2RlTmFtZT09PVwic3RyaW5nXCJcbikge1xuICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQoaHRtbCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGh0bWwgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGpRdWVyeSBvYmplY3RcbiAgICAgIHRvYXN0LmFwcGVuZENoaWxkKGh0bWxbMF0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIEluc2VydCBhcyB0ZXh0O1xuICAgICAgdG9hc3QuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gICAgLy8gQmluZCBoYW1tZXJcbiAgICB2YXIgaGFtbWVySGFuZGxlciA9IG5ldyBIYW1tZXIodG9hc3QsIHtwcmV2ZW50X2RlZmF1bHQ6IGZhbHNlfSk7XG4gICAgaGFtbWVySGFuZGxlci5vbigncGFuJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgICAgdmFyIGFjdGl2YXRpb25EaXN0YW5jZSA9IDgwO1xuXG4gICAgICAvLyBDaGFuZ2UgdG9hc3Qgc3RhdGVcbiAgICAgIGlmICghdG9hc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYW5uaW5nJykpe1xuICAgICAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKCdwYW5uaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcGFjaXR5UGVyY2VudCA9IDEtTWF0aC5hYnMoZGVsdGFYIC8gYWN0aXZhdGlvbkRpc3RhbmNlKTtcbiAgICAgIGlmIChvcGFjaXR5UGVyY2VudCA8IDApXG4gICAgICAgIG9wYWNpdHlQZXJjZW50ID0gMDtcblxuICAgICAgVmVsKHRvYXN0LCB7bGVmdDogZGVsdGFYLCBvcGFjaXR5OiBvcGFjaXR5UGVyY2VudCB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuXG4gICAgfSk7XG5cbiAgICBoYW1tZXJIYW5kbGVyLm9uKCdwYW5lbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgZGVsdGFYID0gZS5kZWx0YVg7XG4gICAgICB2YXIgYWN0aXZhdGlvbkRpc3RhbmNlID0gODA7XG5cbiAgICAgIC8vIElmIHRvYXN0IGRyYWdnZWQgcGFzdCBhY3RpdmF0aW9uIHBvaW50XG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IGFjdGl2YXRpb25EaXN0YW5jZSkge1xuICAgICAgICBWZWwodG9hc3QsIHttYXJnaW5Ub3A6ICctNDBweCd9LCB7IGR1cmF0aW9uOiAzNzUsXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjb21wbGV0ZUNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvYXN0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9hc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Bhbm5pbmcnKTtcbiAgICAgICAgLy8gUHV0IHRvYXN0IGJhY2sgaW50byBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICBWZWwodG9hc3QsIHsgbGVmdDogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuICAgICAgICAgIHF1ZXVlOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvYXN0O1xuICB9XG59O1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIGluaXQgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG1lbnVXaWR0aDogMzAwLFxuICAgICAgICBlZGdlOiAnbGVmdCcsXG4gICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICQodGhpcykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbWVudUlkID0gJHRoaXMuYXR0cignZGF0YS1hY3RpdmF0ZXMnKTtcbiAgICAgICAgdmFyIG1lbnUgPSAkKFwiI1wiKyBtZW51SWQpO1xuXG4gICAgICAgIC8vIFNldCB0byB3aWR0aFxuICAgICAgICBpZiAob3B0aW9ucy5tZW51V2lkdGggIT0gMzAwKSB7XG4gICAgICAgICAgbWVudS5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIFRvdWNoIEFyZWFcbiAgICAgICAgdmFyICRkcmFnVGFyZ2V0ID0gJCgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicgKyBtZW51SWQgKyAnXCJdJyk7XG4gICAgICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZSkge1xuICAgICAgICAgIC8vIFJlZ2VuZXJhdGUgZHJhZ1RhcmdldFxuICAgICAgICAgIGlmICgkZHJhZ1RhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICRkcmFnVGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRkcmFnVGFyZ2V0ID0gJCgnPGRpdiBjbGFzcz1cImRyYWctdGFyZ2V0XCI+PC9kaXY+JykuYXR0cignZGF0YS1zaWRlbmF2JywgbWVudUlkKTtcbiAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRkcmFnVGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZHJhZ1RhcmdldCA9ICQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKC0xMDAlKScpO1xuICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7J2xlZnQnOiAwfSk7IC8vIEFkZCBUb3VjaCBBcmVhXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbWVudS5hZGRDbGFzcygncmlnaHQtYWxpZ25lZCcpIC8vIENoYW5nZSB0ZXh0LWFsaWdubWVudCB0byByaWdodFxuICAgICAgICAgICAgLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMTAwJSknKTtcbiAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeydyaWdodCc6IDB9KTsgLy8gQWRkIFRvdWNoIEFyZWFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGZpeGVkIHNpZGVuYXYsIGJyaW5nIG1lbnUgb3V0XG4gICAgICAgIGlmIChtZW51Lmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcbiAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDApJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIC8vIFdpbmRvdyByZXNpemUgdG8gcmVzZXQgb24gbGFyZ2Ugc2NyZWVucyBmaXhlZFxuICAgICAgICBpZiAobWVudS5oYXNDbGFzcygnZml4ZWQnKSkge1xuICAgICAgICAgICQod2luZG93KS5yZXNpemUoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XG4gICAgICAgICAgICAgIC8vIENsb3NlIG1lbnUgaWYgd2luZG93IGlzIHJlc2l6ZWQgYmlnZ2VyIHRoYW4gOTkyIGFuZCB1c2VyIGhhcyBmaXhlZCBzaWRlbmF2XG4gICAgICAgICAgICAgIGlmICgkKCcjc2lkZW5hdi1vdmVybGF5JykubGVuZ3RoICE9PSAwICYmIG1lbnVPdXQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZW51KHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICAgICAgLy8gbWVudS5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZW51T3V0ID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgtMTAwJSknKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMTAwJSknKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNsb3NlT25DbGljaywgdGhlbiBhZGQgY2xvc2UgZXZlbnQgZm9yIGFsbCBhIHRhZ3MgaW4gc2lkZSBzaWRlTmF2XG4gICAgICAgIGlmIChvcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1lbnUub24oXCJjbGljay5pdGVtY2xpY2tcIiwgXCJhOm5vdCguY29sbGFwc2libGUtaGVhZGVyKVwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlbW92ZU1lbnUgPSBmdW5jdGlvbihyZXN0b3JlTmF2KSB7XG4gICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAvLyBSZWVuYWJsZSBzY3JvbGxpbmdcbiAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJCgnI3NpZGVuYXYtb3ZlcmxheScpLnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge2R1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHBoYW50b20gZGl2XG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnJywgcmlnaHQ6ICcnLCBsZWZ0OiAnMCd9KTtcbiAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoXG4gICAgICAgICAgICAgIHsndHJhbnNsYXRlWCc6ICctMTAwJSd9LFxuICAgICAgICAgICAgICB7IGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3RvcmVOYXYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBGaXhlZCBzaWRlbmF2XG4gICAgICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVzZXQgcGhhbnRvbSBkaXZcbiAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICcnLCByaWdodDogJzAnLCBsZWZ0OiAnJ30pO1xuICAgICAgICAgICAgbWVudS52ZWxvY2l0eShcbiAgICAgICAgICAgICAgeyd0cmFuc2xhdGVYJzogJzEwMCUnfSxcbiAgICAgICAgICAgICAgeyBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlTmF2ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgRml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG5cbiAgICAgICAgLy8gVG91Y2ggRXZlbnRcbiAgICAgICAgdmFyIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1lbnVPdXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAkZHJhZ1RhcmdldC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKG1lbnVPdXQpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJGRyYWdUYXJnZXQuaGFtbWVyKHtcbiAgICAgICAgICAgIHByZXZlbnRfZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICB9KS5iaW5kKCdwYW4nLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT0gXCJ0b3VjaFwiKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XG4gICAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmNlbnRlci54O1xuICAgICAgICAgICAgICB2YXIgeSA9IGUuZ2VzdHVyZS5jZW50ZXIueTtcbiAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XG5cbiAgICAgICAgICAgICAgLy8gRGlzYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgIHZhciBvbGRXaWR0aCA9ICRib2R5LmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgICAgIC8vIElmIG92ZXJsYXkgZG9lcyBub3QgZXhpc3QsIGNyZWF0ZSBvbmUgYW5kIGlmIGl0IGlzIGNsaWNrZWQsIGNsb3NlIG1lbnVcbiAgICAgICAgICAgICAgaWYgKCRvdmVybGF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRvdmVybGF5ID0gJCgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICRvdmVybGF5LmNzcygnb3BhY2l0eScsIDApLmNsaWNrKCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJG92ZXJsYXkpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gS2VlcCB3aXRoaW4gYm91bmRhcmllc1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IG9wdGlvbnMubWVudVdpZHRoKSB7IHggPSBvcHRpb25zLm1lbnVXaWR0aDsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPCAwKSB7IHggPSAwOyB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh4IDwgKG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHsgbWVudU91dCA9IGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA+PSAob3B0aW9ucy5tZW51V2lkdGggLyAyKSkgeyBtZW51T3V0ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKHggLSBvcHRpb25zLm1lbnVXaWR0aCkgKyAncHgpJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoeCA8ICh3aW5kb3cuaW5uZXJXaWR0aCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSaWdodCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID49ICh3aW5kb3cuaW5uZXJXaWR0aCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHtcbiAgICAgICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByaWdodFBvcyA9ICh4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocmlnaHRQb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgICByaWdodFBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyByaWdodFBvcyArICdweCknKTtcbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgLy8gUGVyY2VudGFnZSBvdmVybGF5XG4gICAgICAgICAgICAgIHZhciBvdmVybGF5UGVyYztcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSB4IC8gb3B0aW9ucy5tZW51V2lkdGg7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IG92ZXJsYXlQZXJjIH0sIHtkdXJhdGlvbjogMTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSBNYXRoLmFicygoeCAtIHdpbmRvdy5pbm5lcldpZHRoKSAvIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogb3ZlcmxheVBlcmMgfSwge2R1cmF0aW9uOiAxMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSkuYmluZCgncGFuZW5kJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09IFwidG91Y2hcIikge1xuICAgICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuICAgICAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5jZW50ZXIueDtcbiAgICAgICAgICAgICAgdmFyIGxlZnRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGg7XG4gICAgICAgICAgICAgIHZhciByaWdodFBvcyA9IHggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDI7XG4gICAgICAgICAgICAgIGlmIChsZWZ0UG9zID4gMCApIHtcbiAgICAgICAgICAgICAgICBsZWZ0UG9zID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocmlnaHRQb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRQb3MgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB2ZWxvY2l0eVggPD0gMC4zIHRoZW4gdGhlIHVzZXIgaXMgZmxpbmdpbmcgdGhlIG1lbnUgY2xvc2VkIHNvIGlnbm9yZSBtZW51T3V0XG4gICAgICAgICAgICAgICAgaWYgKChtZW51T3V0ICYmIHZlbG9jaXR5WCA8PSAwLjMpIHx8IHZlbG9jaXR5WCA8IC0wLjUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBtZW51IHRvIG9wZW5cbiAgICAgICAgICAgICAgICAgIGlmIChsZWZ0UG9zICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWzAsIGxlZnRQb3NdfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAxIH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnNTAlJywgcmlnaHQ6IDAsIGxlZnQ6ICcnfSk7XG4gICAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIW1lbnVPdXQgfHwgdmVsb2NpdHlYID4gMC4zKSB7XG4gICAgICAgICAgICAgICAgICAvLyBFbmFibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgLy8gU2xpZGUgbWVudSBjbG9zZWRcbiAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWy0xICogb3B0aW9ucy5tZW51V2lkdGggLSAxMCwgbGVmdFBvc119LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAwIH0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnMTBweCcsIHJpZ2h0OiAnJywgbGVmdDogMH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKG1lbnVPdXQgJiYgdmVsb2NpdHlYID49IC0wLjMpIHx8IHZlbG9jaXR5WCA+IDAuNSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxuICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWzAsIHJpZ2h0UG9zXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMSB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzUwJScsIHJpZ2h0OiAnJywgbGVmdDogMH0pO1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFtZW51T3V0IHx8IHZlbG9jaXR5WCA8IC0wLjMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFNsaWRlIG1lbnUgY2xvc2VkXG4gICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFtvcHRpb25zLm1lbnVXaWR0aCArIDEwLCByaWdodFBvc119LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAwIH0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnMTBweCcsIHJpZ2h0OiAwLCBsZWZ0OiAnJ30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkdGhpcy5vZmYoJ2NsaWNrLnNpZGVuYXYnKS5vbignY2xpY2suc2lkZW5hdicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChtZW51T3V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICRib2R5LndpZHRoKG9sZFdpZHRoKTtcblxuICAgICAgICAgICAgLy8gUHVzaCBjdXJyZW50IGRyYWcgdGFyZ2V0IG9uIHRvcCBvZiBET00gdHJlZVxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkZHJhZ1RhcmdldCk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnNTAlJywgcmlnaHQ6IDAsIGxlZnQ6ICcnfSk7XG4gICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWzAsIC0xICogb3B0aW9ucy5tZW51V2lkdGhdfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzUwJScsIHJpZ2h0OiAnJywgbGVmdDogMH0pO1xuICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCBvcHRpb25zLm1lbnVXaWR0aF19LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJG92ZXJsYXkuY3NzKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkb3ZlcmxheSk7XG4gICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuXG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICB2YXIgJGRyYWdUYXJnZXQgPSAkKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJyArICQodGhpcykuYXR0cignZGF0YS1hY3RpdmF0ZXMnKSArICdcIl0nKTtcbiAgICAgICRvdmVybGF5LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAkZHJhZ1RhcmdldC5yZW1vdmUoKTtcbiAgICAgICQodGhpcykub2ZmKCdjbGljaycpO1xuICAgICAgJG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfSxcbiAgICBzaG93IDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSxcbiAgICBoaWRlIDogZnVuY3Rpb24oKSB7XG4gICAgICAkKCcjc2lkZW5hdi1vdmVybGF5JykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH07XG5cblxuICAkLmZuLnNpZGVOYXYgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcbiAgICBpZiAoIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSApIHtcbiAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc2lkZU5hdicgKTtcbiAgICB9XG4gIH07IC8vIFBsdWdpbiBlbmRcbn0oIGpRdWVyeSApKTtcbjsvKipcbiAqIEV4dGVuZCBqcXVlcnkgd2l0aCBhIHNjcm9sbHNweSBwbHVnaW4uXG4gKiBUaGlzIHdhdGNoZXMgdGhlIHdpbmRvdyBzY3JvbGwgYW5kIGZpcmVzIGV2ZW50cyB3aGVuIGVsZW1lbnRzIGFyZSBzY3JvbGxlZCBpbnRvIHZpZXdwb3J0LlxuICpcbiAqIHRocm90dGxlKCkgYW5kIGdldFRpbWUoKSB0YWtlbiBmcm9tIFVuZGVyc2NvcmUuanNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICpcbiAqIEBhdXRob3IgQ29weXJpZ2h0IDIwMTMgSm9obiBTbWFydFxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS90aGVzbWFydC9qcXVlcnktc2Nyb2xsc3B5L21hc3Rlci9MSUNFTlNFXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVzbWFydFxuICogQHZlcnNpb24gMC4xLjJcbiAqL1xuKGZ1bmN0aW9uKCQpIHtcblxuXHR2YXIgaldpbmRvdyA9ICQod2luZG93KTtcblx0dmFyIGVsZW1lbnRzID0gW107XG5cdHZhciBlbGVtZW50c0luVmlldyA9IFtdO1xuXHR2YXIgaXNTcHlpbmcgPSBmYWxzZTtcblx0dmFyIHRpY2tzID0gMDtcblx0dmFyIHVuaXF1ZV9pZCA9IDE7XG5cdHZhciBvZmZzZXQgPSB7XG5cdFx0dG9wIDogMCxcblx0XHRyaWdodCA6IDAsXG5cdFx0Ym90dG9tIDogMCxcblx0XHRsZWZ0IDogMCxcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGVsZW1lbnRzIHRoYXQgYXJlIHdpdGhpbiB0aGUgYm91bmRhcnlcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRvcFxuXHQgKiBAcGFyYW0ge251bWJlcn0gcmlnaHRcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbGVmdFxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9XHRcdEEgY29sbGVjdGlvbiBvZiBlbGVtZW50c1xuXHQgKi9cblx0ZnVuY3Rpb24gZmluZEVsZW1lbnRzKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkge1xuXHRcdHZhciBoaXRzID0gJCgpO1xuXHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0aWYgKGVsZW1lbnQuaGVpZ2h0KCkgPiAwKSB7XG5cdFx0XHRcdHZhciBlbFRvcCA9IGVsZW1lbnQub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdGVsTGVmdCA9IGVsZW1lbnQub2Zmc2V0KCkubGVmdCxcblx0XHRcdFx0XHRlbFJpZ2h0ID0gZWxMZWZ0ICsgZWxlbWVudC53aWR0aCgpLFxuXHRcdFx0XHRcdGVsQm90dG9tID0gZWxUb3AgKyBlbGVtZW50LmhlaWdodCgpO1xuXG5cdFx0XHRcdHZhciBpc0ludGVyc2VjdCA9ICEoZWxMZWZ0ID4gcmlnaHQgfHxcblx0XHRcdFx0XHRlbFJpZ2h0IDwgbGVmdCB8fFxuXHRcdFx0XHRcdGVsVG9wID4gYm90dG9tIHx8XG5cdFx0XHRcdFx0ZWxCb3R0b20gPCB0b3ApO1xuXG5cdFx0XHRcdGlmIChpc0ludGVyc2VjdCkge1xuXHRcdFx0XHRcdGhpdHMucHVzaChlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGhpdHM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRoZSB3aW5kb3dcblx0ICovXG5cdGZ1bmN0aW9uIG9uU2Nyb2xsKHNjcm9sbE9mZnNldCkge1xuXHRcdC8vIHVuaXF1ZSB0aWNrIGlkXG5cdFx0Kyt0aWNrcztcblxuXHRcdC8vIHZpZXdwb3J0IHJlY3RhbmdsZVxuXHRcdHZhciB0b3AgPSBqV2luZG93LnNjcm9sbFRvcCgpLFxuXHRcdFx0bGVmdCA9IGpXaW5kb3cuc2Nyb2xsTGVmdCgpLFxuXHRcdFx0cmlnaHQgPSBsZWZ0ICsgaldpbmRvdy53aWR0aCgpLFxuXHRcdFx0Ym90dG9tID0gdG9wICsgaldpbmRvdy5oZWlnaHQoKTtcblxuXHRcdC8vIGRldGVybWluZSB3aGljaCBlbGVtZW50cyBhcmUgaW4gdmlld1xuXHRcdHZhciBpbnRlcnNlY3Rpb25zID0gZmluZEVsZW1lbnRzKHRvcCtvZmZzZXQudG9wICsgc2Nyb2xsT2Zmc2V0IHx8IDIwMCwgcmlnaHQrb2Zmc2V0LnJpZ2h0LCBib3R0b20rb2Zmc2V0LmJvdHRvbSwgbGVmdCtvZmZzZXQubGVmdCk7XG5cdFx0JC5lYWNoKGludGVyc2VjdGlvbnMsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblxuXHRcdFx0dmFyIGxhc3RUaWNrID0gZWxlbWVudC5kYXRhKCdzY3JvbGxTcHk6dGlja3MnKTtcblx0XHRcdGlmICh0eXBlb2YgbGFzdFRpY2sgIT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gZW50ZXJlZCBpbnRvIHZpZXdcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VySGFuZGxlcignc2Nyb2xsU3B5OmVudGVyJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHVwZGF0ZSB0aWNrIGlkXG5cdFx0XHRlbGVtZW50LmRhdGEoJ3Njcm9sbFNweTp0aWNrcycsIHRpY2tzKTtcblx0XHR9KTtcblxuXHRcdC8vIGRldGVybWluZSB3aGljaCBlbGVtZW50cyBhcmUgbm8gbG9uZ2VyIGluIHZpZXdcblx0XHQkLmVhY2goZWxlbWVudHNJblZpZXcsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdHZhciBsYXN0VGljayA9IGVsZW1lbnQuZGF0YSgnc2Nyb2xsU3B5OnRpY2tzJyk7XG5cdFx0XHRpZiAodHlwZW9mIGxhc3RUaWNrID09ICdudW1iZXInICYmIGxhc3RUaWNrICE9PSB0aWNrcykge1xuXHRcdFx0XHQvLyBleGl0ZWQgZnJvbSB2aWV3XG5cdFx0XHRcdGVsZW1lbnQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbFNweTpleGl0Jyk7XG5cdFx0XHRcdGVsZW1lbnQuZGF0YSgnc2Nyb2xsU3B5OnRpY2tzJywgbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyByZW1lbWJlciBlbGVtZW50cyBpbiB2aWV3IGZvciBuZXh0IHRpY2tcblx0XHRlbGVtZW50c0luVmlldyA9IGludGVyc2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcblx0Ki9cblx0ZnVuY3Rpb24gb25XaW5TaXplKCkge1xuXHRcdGpXaW5kb3cudHJpZ2dlcignc2Nyb2xsU3B5OndpblNpemUnKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEVuYWJsZXMgU2Nyb2xsU3B5IHVzaW5nIGEgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtqUXVlcnl8c3RyaW5nfSBzZWxlY3RvciAgVGhlIGVsZW1lbnRzIGNvbGxlY3Rpb24sIG9yIGEgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXHRPcHRpb25hbC5cbiAgICAgICAgdGhyb3R0bGUgOiBudW1iZXIgLT4gc2Nyb2xsc3B5IHRocm90dGxpbmcuIERlZmF1bHQ6IDEwMCBtc1xuICAgICAgICBvZmZzZXRUb3AgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gdG9wLiBEZWZhdWx0OiAwXG4gICAgICAgIG9mZnNldFJpZ2h0IDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHJpZ2h0LiBEZWZhdWx0OiAwXG4gICAgICAgIG9mZnNldEJvdHRvbSA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSBib3R0b20uIERlZmF1bHQ6IDBcbiAgICAgICAgb2Zmc2V0TGVmdCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSBsZWZ0LiBEZWZhdWx0OiAwXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl9XG5cdCAqL1xuXHQkLnNjcm9sbFNweSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBvcHRpb25zKSB7XG5cdCAgdmFyIGRlZmF1bHRzID0ge1xuXHRcdFx0dGhyb3R0bGU6IDEwMCxcblx0XHRcdHNjcm9sbE9mZnNldDogMjAwIC8vIG9mZnNldCAtIDIwMCBhbGxvd3MgZWxlbWVudHMgbmVhciBib3R0b20gb2YgcGFnZSB0byBzY3JvbGxcbiAgICB9O1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0XHR2YXIgdmlzaWJsZSA9IFtdO1xuXHRcdHNlbGVjdG9yID0gJChzZWxlY3Rvcik7XG5cdFx0c2VsZWN0b3IuZWFjaChmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50cy5wdXNoKCQoZWxlbWVudCkpO1xuXHRcdFx0JChlbGVtZW50KS5kYXRhKFwic2Nyb2xsU3B5OmlkXCIsIGkpO1xuXHRcdFx0Ly8gU21vb3RoIHNjcm9sbCB0byBzZWN0aW9uXG5cdFx0ICAkKCdhW2hyZWY9XCIjJyArICQoZWxlbWVudCkuYXR0cignaWQnKSArICdcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0ICAgIGUucHJldmVudERlZmF1bHQoKTtcblx0XHQgICAgdmFyIG9mZnNldCA9ICQoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKS5vZmZzZXQoKS50b3AgKyAxO1xuXHQgICAgXHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogb2Zmc2V0IC0gb3B0aW9ucy5zY3JvbGxPZmZzZXQgfSwge2R1cmF0aW9uOiA0MDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dEN1YmljJ30pO1xuXHRcdCAgfSk7XG5cdFx0fSk7XG5cblx0XHRvZmZzZXQudG9wID0gb3B0aW9ucy5vZmZzZXRUb3AgfHwgMDtcblx0XHRvZmZzZXQucmlnaHQgPSBvcHRpb25zLm9mZnNldFJpZ2h0IHx8IDA7XG5cdFx0b2Zmc2V0LmJvdHRvbSA9IG9wdGlvbnMub2Zmc2V0Qm90dG9tIHx8IDA7XG5cdFx0b2Zmc2V0LmxlZnQgPSBvcHRpb25zLm9mZnNldExlZnQgfHwgMDtcblxuXHRcdHZhciB0aHJvdHRsZWRTY3JvbGwgPSBNYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpIHtcblx0XHRcdG9uU2Nyb2xsKG9wdGlvbnMuc2Nyb2xsT2Zmc2V0KTtcblx0XHR9LCBvcHRpb25zLnRocm90dGxlIHx8IDEwMCk7XG5cdFx0dmFyIHJlYWR5U2Nyb2xsID0gZnVuY3Rpb24oKXtcblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KHRocm90dGxlZFNjcm9sbCk7XG5cdFx0fTtcblxuXHRcdGlmICghaXNTcHlpbmcpIHtcblx0XHRcdGpXaW5kb3cub24oJ3Njcm9sbCcsIHJlYWR5U2Nyb2xsKTtcblx0XHRcdGpXaW5kb3cub24oJ3Jlc2l6ZScsIHJlYWR5U2Nyb2xsKTtcblx0XHRcdGlzU3B5aW5nID0gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBwZXJmb3JtIGEgc2NhbiBvbmNlLCBhZnRlciBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0LCBhbmQgYWZ0ZXIgZG9tIGlzIHJlYWR5XG5cdFx0c2V0VGltZW91dChyZWFkeVNjcm9sbCwgMCk7XG5cblxuXHRcdHNlbGVjdG9yLm9uKCdzY3JvbGxTcHk6ZW50ZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdHZpc2libGUgPSAkLmdyZXAodmlzaWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcblx0ICAgICAgcmV0dXJuIHZhbHVlLmhlaWdodCgpICE9IDA7XG5cdCAgICB9KTtcblxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0aWYgKHZpc2libGVbMF0pIHtcblx0XHRcdFx0JCgnYVtocmVmPVwiIycgKyB2aXNpYmxlWzBdLmF0dHIoJ2lkJykgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRpZiAoJHRoaXMuZGF0YSgnc2Nyb2xsU3B5OmlkJykgPCB2aXNpYmxlWzBdLmRhdGEoJ3Njcm9sbFNweTppZCcpKSB7XG5cdFx0XHRcdFx0dmlzaWJsZS51bnNoaWZ0KCQodGhpcykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHZpc2libGUucHVzaCgkKHRoaXMpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHZpc2libGUucHVzaCgkKHRoaXMpKTtcblx0XHRcdH1cblxuXG5cdFx0XHQkKCdhW2hyZWY9XCIjJyArIHZpc2libGVbMF0uYXR0cignaWQnKSArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0fSk7XG5cdFx0c2VsZWN0b3Iub24oJ3Njcm9sbFNweTpleGl0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2aXNpYmxlID0gJC5ncmVwKHZpc2libGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdCAgICAgIHJldHVybiB2YWx1ZS5oZWlnaHQoKSAhPSAwO1xuXHQgICAgfSk7XG5cblx0XHRcdGlmICh2aXNpYmxlWzBdKSB7XG5cdFx0XHRcdCQoJ2FbaHJlZj1cIiMnICsgdmlzaWJsZVswXS5hdHRyKCdpZCcpICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0dmlzaWJsZSA9ICQuZ3JlcCh2aXNpYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICAgIHJldHVybiB2YWx1ZS5hdHRyKCdpZCcpICE9ICR0aGlzLmF0dHIoJ2lkJyk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBpZiAodmlzaWJsZVswXSkgeyAvLyBDaGVjayBpZiBlbXB0eVxuXHRcdFx0XHRcdCQoJ2FbaHJlZj1cIiMnICsgdmlzaWJsZVswXS5hdHRyKCdpZCcpICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0ICAgICAgfVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHNlbGVjdG9yO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBMaXN0ZW4gZm9yIHdpbmRvdyByZXNpemUgZXZlbnRzXG5cdCAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1x0XHRcdFx0XHRcdE9wdGlvbmFsLiBTZXQgeyB0aHJvdHRsZTogbnVtYmVyIH0gdG8gY2hhbmdlIHRocm90dGxpbmcuIERlZmF1bHQ6IDEwMCBtc1xuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fVx0XHQkKHdpbmRvdylcblx0ICovXG5cdCQud2luU2l6ZVNweSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHQkLndpblNpemVTcHkgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGpXaW5kb3c7IH07IC8vIGxvY2sgZnJvbSBtdWx0aXBsZSBjYWxsc1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcblx0XHRcdHRocm90dGxlOiAxMDBcblx0XHR9O1xuXHRcdHJldHVybiBqV2luZG93Lm9uKCdyZXNpemUnLCBNYXRlcmlhbGl6ZS50aHJvdHRsZShvbldpblNpemUsIG9wdGlvbnMudGhyb3R0bGUgfHwgMTAwKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEVuYWJsZXMgU2Nyb2xsU3B5IG9uIGEgY29sbGVjdGlvbiBvZiBlbGVtZW50c1xuXHQgKiBlLmcuICQoJy5zY3JvbGxTcHknKS5zY3JvbGxTcHkoKVxuXHQgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcdE9wdGlvbmFsLlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRocm90dGxlIDogbnVtYmVyIC0+IHNjcm9sbHNweSB0aHJvdHRsaW5nLiBEZWZhdWx0OiAxMDAgbXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXRUb3AgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gdG9wLiBEZWZhdWx0OiAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0UmlnaHQgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gcmlnaHQuIERlZmF1bHQ6IDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXRCb3R0b20gOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gYm90dG9tLiBEZWZhdWx0OiAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0TGVmdCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSBsZWZ0LiBEZWZhdWx0OiAwXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl9XG5cdCAqL1xuXHQkLmZuLnNjcm9sbFNweSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gJC5zY3JvbGxTcHkoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH07XG5cbn0pKGpRdWVyeSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGxhYmVscyBvZiB0ZXh0IGZpZWxkc1xuICAgIE1hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbnB1dF9zZWxlY3RvciA9ICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWEnO1xuICAgICAgJChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICBpZiAoJChlbGVtZW50KS52YWwoKS5sZW5ndGggPiAwIHx8IGVsZW1lbnQuYXV0b2ZvY3VzIHx8ICR0aGlzLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICgkKGVsZW1lbnQpWzBdLnZhbGlkaXR5KSB7XG4gICAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScsICQoZWxlbWVudClbMF0udmFsaWRpdHkuYmFkSW5wdXQgPT09IHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFRleHQgYmFzZWQgaW5wdXRzXG4gICAgdmFyIGlucHV0X3NlbGVjdG9yID0gJ2lucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYSc7XG5cbiAgICAvLyBBZGQgYWN0aXZlIGlmIGZvcm0gYXV0byBjb21wbGV0ZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYoJCh0aGlzKS52YWwoKS5sZW5ndGggIT09IDAgfHwgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICB2YWxpZGF0ZV9maWVsZCgkKHRoaXMpKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhY3RpdmUgaWYgaW5wdXQgZWxlbWVudCBoYXMgYmVlbiBwcmUtcG9wdWxhdGVkIG9uIGRvY3VtZW50IHJlYWR5XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICBNYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBIVE1MIERPTSBGT1JNIFJFU0VUIGhhbmRsaW5nXG4gICAgJChkb2N1bWVudCkub24oJ3Jlc2V0JywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGZvcm1SZXNldCA9ICQoZS50YXJnZXQpO1xuICAgICAgaWYgKGZvcm1SZXNldC5pcygnZm9ybScpKSB7XG4gICAgICAgIGZvcm1SZXNldC5maW5kKGlucHV0X3NlbGVjdG9yKS5yZW1vdmVDbGFzcygndmFsaWQnKS5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCQodGhpcykuYXR0cigndmFsdWUnKSA9PT0gJycpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzZXQgc2VsZWN0XG4gICAgICAgIGZvcm1SZXNldC5maW5kKCdzZWxlY3QuaW5pdGlhbGl6ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcmVzZXRfdGV4dCA9IGZvcm1SZXNldC5maW5kKCdvcHRpb25bc2VsZWN0ZWRdJykudGV4dCgpO1xuICAgICAgICAgIGZvcm1SZXNldC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudmFsKHJlc2V0X3RleHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBhY3RpdmUgd2hlbiBlbGVtZW50IGhhcyBmb2N1c1xuICAgICQoZG9jdW1lbnQpLm9uKCdmb2N1cycsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCwgLnByZWZpeCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdibHVyJywgaW5wdXRfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaW5wdXRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgIHZhciBzZWxlY3RvciA9IFwiLnByZWZpeFwiO1xuXG4gICAgICBpZiAoJGlucHV0RWxlbWVudC52YWwoKS5sZW5ndGggPT09IDAgJiYgJGlucHV0RWxlbWVudFswXS52YWxpZGl0eS5iYWRJbnB1dCAhPT0gdHJ1ZSAmJiAkaW5wdXRFbGVtZW50LmF0dHIoJ3BsYWNlaG9sZGVyJykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3RvciArPSBcIiwgbGFiZWxcIjtcbiAgICAgIH1cblxuICAgICAgJGlucHV0RWxlbWVudC5zaWJsaW5ncyhzZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICB2YWxpZGF0ZV9maWVsZCgkaW5wdXRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy52YWxpZGF0ZV9maWVsZCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgdmFyIGhhc0xlbmd0aCA9IG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpICE9PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgbGVuQXR0ciA9IHBhcnNlSW50KG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcbiAgICAgIHZhciBsZW4gPSBvYmplY3QudmFsKCkubGVuZ3RoO1xuXG4gICAgICBpZiAob2JqZWN0LnZhbCgpLmxlbmd0aCA9PT0gMCAmJiBvYmplY3RbMF0udmFsaWRpdHkuYmFkSW5wdXQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ3ZhbGlkYXRlJykpIHtcbiAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIGNoYXJhY3RlciBjb3VudGVyIGF0dHJpYnV0ZXNcbiAgICAgICAgICBpZiAoKG9iamVjdC5pcygnOnZhbGlkJykgJiYgaGFzTGVuZ3RoICYmIChsZW4gPD0gbGVuQXR0cikpIHx8IChvYmplY3QuaXMoJzp2YWxpZCcpICYmICFoYXNMZW5ndGgpKSB7XG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICBvYmplY3QuYWRkQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmFkaW8gYW5kIENoZWNrYm94IGZvY3VzIGNsYXNzXG4gICAgdmFyIHJhZGlvX2NoZWNrYm94ID0gJ2lucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XSc7XG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwLnJhZGlvJywgcmFkaW9fY2hlY2tib3gsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIFRBQiwgY2hlY2sgaWYgdGFiYmluZyB0byByYWRpbyBvciBjaGVja2JveC5cbiAgICAgIGlmIChlLndoaWNoID09PSA5KSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RhYmJlZCcpO1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5vbmUoJ2JsdXInLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0YWJiZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRleHRhcmVhIEF1dG8gUmVzaXplXG4gICAgdmFyIGhpZGRlbkRpdiA9ICQoJy5oaWRkZW5kaXYnKS5maXJzdCgpO1xuICAgIGlmICghaGlkZGVuRGl2Lmxlbmd0aCkge1xuICAgICAgaGlkZGVuRGl2ID0gJCgnPGRpdiBjbGFzcz1cImhpZGRlbmRpdiBjb21tb25cIj48L2Rpdj4nKTtcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoaGlkZGVuRGl2KTtcbiAgICB9XG4gICAgdmFyIHRleHRfYXJlYV9zZWxlY3RvciA9ICcubWF0ZXJpYWxpemUtdGV4dGFyZWEnO1xuXG4gICAgZnVuY3Rpb24gdGV4dGFyZWFBdXRvUmVzaXplKCR0ZXh0YXJlYSkge1xuICAgICAgLy8gU2V0IGZvbnQgcHJvcGVydGllcyBvZiBoaWRkZW5EaXZcblxuICAgICAgdmFyIGZvbnRGYW1pbHkgPSAkdGV4dGFyZWEuY3NzKCdmb250LWZhbWlseScpO1xuICAgICAgdmFyIGZvbnRTaXplID0gJHRleHRhcmVhLmNzcygnZm9udC1zaXplJyk7XG4gICAgICB2YXIgbGluZUhlaWdodCA9ICR0ZXh0YXJlYS5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XG5cbiAgICAgIGlmIChmb250U2l6ZSkgeyBoaWRkZW5EaXYuY3NzKCdmb250LXNpemUnLCBmb250U2l6ZSk7IH1cbiAgICAgIGlmIChmb250RmFtaWx5KSB7IGhpZGRlbkRpdi5jc3MoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSk7IH1cbiAgICAgIGlmIChsaW5lSGVpZ2h0KSB7IGhpZGRlbkRpdi5jc3MoJ2xpbmUtaGVpZ2h0JywgbGluZUhlaWdodCk7IH1cblxuICAgICAgaWYgKCR0ZXh0YXJlYS5hdHRyKCd3cmFwJykgPT09IFwib2ZmXCIpIHtcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnb3ZlcmZsb3ctd3JhcCcsIFwibm9ybWFsXCIpXG4gICAgICAgICAgICAgICAgIC5jc3MoJ3doaXRlLXNwYWNlJywgXCJwcmVcIik7XG4gICAgICB9XG5cbiAgICAgIGhpZGRlbkRpdi50ZXh0KCR0ZXh0YXJlYS52YWwoKSArICdcXG4nKTtcbiAgICAgIHZhciBjb250ZW50ID0gaGlkZGVuRGl2Lmh0bWwoKS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKTtcbiAgICAgIGhpZGRlbkRpdi5odG1sKGNvbnRlbnQpO1xuXG5cbiAgICAgIC8vIFdoZW4gdGV4dGFyZWEgaXMgaGlkZGVuLCB3aWR0aCBnb2VzIGNyYXp5LlxuICAgICAgLy8gQXBwcm94aW1hdGUgd2l0aCBoYWxmIG9mIHdpbmRvdyBzaXplXG5cbiAgICAgIGlmICgkdGV4dGFyZWEuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCAkdGV4dGFyZWEud2lkdGgoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCAkKHdpbmRvdykud2lkdGgoKS8yKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXNpemUgaWYgdGhlIG5ldyBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAgICogb3JpZ2luYWwgaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYVxuICAgICAgICovXG4gICAgICBpZiAoJHRleHRhcmVhLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIikgPD0gaGlkZGVuRGl2LmhlaWdodCgpKSB7XG4gICAgICAgICR0ZXh0YXJlYS5jc3MoJ2hlaWdodCcsIGhpZGRlbkRpdi5oZWlnaHQoKSk7XG4gICAgICB9IGVsc2UgaWYgKCR0ZXh0YXJlYS52YWwoKS5sZW5ndGggPCAkdGV4dGFyZWEuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSW4gY2FzZSB0aGUgbmV3IGhlaWdodCBpcyBsZXNzIHRoYW4gb3JpZ2luYWwgaGVpZ2h0LCBpdFxuICAgICAgICAgKiBtZWFucyB0aGUgdGV4dGFyZWEgaGFzIGxlc3MgdGV4dCB0aGFuIGJlZm9yZVxuICAgICAgICAgKiBTbyB3ZSBzZXQgdGhlIGhlaWdodCB0byB0aGUgb3JpZ2luYWwgb25lXG4gICAgICAgICAqL1xuICAgICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCAkdGV4dGFyZWEuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiKSk7XG4gICAgICB9XG4gICAgICAkdGV4dGFyZWEuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiLCAkdGV4dGFyZWEudmFsKCkubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAkKHRleHRfYXJlYV9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRleHRhcmVhID0gJCh0aGlzKTtcbiAgICAgIC8qKlxuICAgICAgICogSW5zdGVhZCBvZiByZXNpemluZyB0ZXh0YXJlYSBvbiBkb2N1bWVudCBsb2FkLFxuICAgICAgICogc3RvcmUgdGhlIG9yaWdpbmFsIGhlaWdodCBhbmQgdGhlIG9yaWdpbmFsIGxlbmd0aFxuICAgICAgICovXG4gICAgICAkdGV4dGFyZWEuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiLCAkdGV4dGFyZWEuaGVpZ2h0KCkpO1xuICAgICAgJHRleHRhcmVhLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIiwgJHRleHRhcmVhLnZhbCgpLmxlbmd0aCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2tleXVwIGtleWRvd24gYXV0b3Jlc2l6ZScsIHRleHRfYXJlYV9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgdGV4dGFyZWFBdXRvUmVzaXplKCQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgLy8gRmlsZSBJbnB1dCBQYXRoXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuZmlsZS1maWVsZCBpbnB1dFt0eXBlPVwiZmlsZVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmaWxlX2ZpZWxkID0gJCh0aGlzKS5jbG9zZXN0KCcuZmlsZS1maWVsZCcpO1xuICAgICAgdmFyIHBhdGhfaW5wdXQgPSBmaWxlX2ZpZWxkLmZpbmQoJ2lucHV0LmZpbGUtcGF0aCcpO1xuICAgICAgdmFyIGZpbGVzICAgICAgPSAkKHRoaXMpWzBdLmZpbGVzO1xuICAgICAgdmFyIGZpbGVfbmFtZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZV9uYW1lcy5wdXNoKGZpbGVzW2ldLm5hbWUpO1xuICAgICAgfVxuICAgICAgcGF0aF9pbnB1dC52YWwoZmlsZV9uYW1lcy5qb2luKFwiLCBcIikpO1xuICAgICAgcGF0aF9pbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcblxuICAgIC8qKioqKioqKioqKioqKioqXG4gICAgKiAgUmFuZ2UgSW5wdXQgICpcbiAgICAqKioqKioqKioqKioqKioqL1xuXG4gICAgdmFyIHJhbmdlX3R5cGUgPSAnaW5wdXRbdHlwZT1yYW5nZV0nO1xuICAgIHZhciByYW5nZV9tb3VzZWRvd24gPSBmYWxzZTtcbiAgICB2YXIgbGVmdDtcblxuICAgICQocmFuZ2VfdHlwZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICAkKHRoaXMpLmFmdGVyKHRodW1iKTtcbiAgICB9KTtcblxuICAgIHZhciBzaG93UmFuZ2VCdWJibGUgPSBmdW5jdGlvbih0aHVtYikge1xuICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQodGh1bWIucGFyZW50KCkuY3NzKCdwYWRkaW5nLWxlZnQnKSk7XG4gICAgICB2YXIgbWFyZ2luTGVmdCA9ICgtNyArIHBhZGRpbmdMZWZ0KSArICdweCc7XG4gICAgICB0aHVtYi52ZWxvY2l0eSh7IGhlaWdodDogXCIzMHB4XCIsIHdpZHRoOiBcIjMwcHhcIiwgdG9wOiBcIi0zMHB4XCIsIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnR9LCB7IGR1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGNSYW5nZU9mZnNldCA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICB2YXIgd2lkdGggPSByYW5nZS53aWR0aCgpIC0gMTU7XG4gICAgICB2YXIgbWF4ID0gcGFyc2VGbG9hdChyYW5nZS5hdHRyKCdtYXgnKSk7XG4gICAgICB2YXIgbWluID0gcGFyc2VGbG9hdChyYW5nZS5hdHRyKCdtaW4nKSk7XG4gICAgICB2YXIgcGVyY2VudCA9IChwYXJzZUZsb2F0KHJhbmdlLnZhbCgpKSAtIG1pbikgLyAobWF4IC0gbWluKTtcbiAgICAgIHJldHVybiBwZXJjZW50ICogd2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIHJhbmdlX3dyYXBwZXIgPSAnLnJhbmdlLWZpZWxkJztcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgcmFuZ2VfdHlwZSwgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5zaWJsaW5ncygnLnRodW1iJyk7XG4gICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKCQodGhpcykudmFsKCkpO1xuXG4gICAgICBpZiAoIXRodW1iLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBzaG93UmFuZ2VCdWJibGUodGh1bWIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0TGVmdCA9IGNhbGNSYW5nZU9mZnNldCgkKHRoaXMpKTtcbiAgICAgIHRodW1iLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0KTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsIHJhbmdlX3R5cGUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuc2libGluZ3MoJy50aHVtYicpO1xuXG4gICAgICAvLyBJZiB0aHVtYiBpbmRpY2F0b3IgZG9lcyBub3QgZXhpc3QgeWV0LCBjcmVhdGUgaXRcbiAgICAgIGlmICh0aHVtYi5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aHVtYiA9ICQoJzxzcGFuIGNsYXNzPVwidGh1bWJcIj48c3BhbiBjbGFzcz1cInZhbHVlXCI+PC9zcGFuPjwvc3Bhbj4nKTtcbiAgICAgICAgJCh0aGlzKS5hZnRlcih0aHVtYik7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBpbmRpY2F0b3IgdmFsdWVcbiAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwoJCh0aGlzKS52YWwoKSk7XG5cbiAgICAgIHJhbmdlX21vdXNlZG93biA9IHRydWU7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgaWYgKCF0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgc2hvd1JhbmdlQnViYmxlKHRodW1iKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudHlwZSAhPT0gJ2lucHV0Jykge1xuICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGNhbGNSYW5nZU9mZnNldCgkKHRoaXMpKTtcbiAgICAgICAgdGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIG9mZnNldExlZnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNldXAgdG91Y2hlbmQnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbigpIHtcbiAgICAgIHJhbmdlX21vdXNlZG93biA9IGZhbHNlO1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignaW5wdXQgbW91c2Vtb3ZlIHRvdWNobW92ZScsIHJhbmdlX3dyYXBwZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuY2hpbGRyZW4oJy50aHVtYicpO1xuICAgICAgdmFyIGxlZnQ7XG4gICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLmZpbmQocmFuZ2VfdHlwZSk7XG5cbiAgICAgIGlmIChyYW5nZV9tb3VzZWRvd24pIHtcbiAgICAgICAgaWYgKCF0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBzaG93UmFuZ2VCdWJibGUodGh1bWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoaW5wdXQpO1xuICAgICAgICB0aHVtYi5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCk7XG4gICAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwodGh1bWIuc2libGluZ3MocmFuZ2VfdHlwZSkudmFsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlb3V0IHRvdWNobGVhdmUnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghcmFuZ2VfbW91c2Vkb3duKSB7XG5cbiAgICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5jaGlsZHJlbignLnRodW1iJyk7XG4gICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhcnNlSW50KCQodGhpcykuY3NzKCdwYWRkaW5nLWxlZnQnKSk7XG4gICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gKDcgKyBwYWRkaW5nTGVmdCkgKyAncHgnO1xuXG4gICAgICAgIGlmICh0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICB0aHVtYi52ZWxvY2l0eSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCB0b3A6ICcxMHB4JywgbWFyZ2luTGVmdDogbWFyZ2luTGVmdH0sIHsgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHVtYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBBdXRvIGNvbXBsZXRlIHBsdWdpbiAgKlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICQuZm4uYXV0b2NvbXBsZXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIC8vIERlZmF1bHRzXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBsaW1pdDogSW5maW5pdHksXG4gICAgICAgIG9uQXV0b2NvbXBsZXRlOiBudWxsLFxuICAgICAgICBtaW5MZW5ndGg6IDFcbiAgICAgIH07XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIGNvdW50ID0gMCxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gLTEsXG4gICAgICAgICAgICBvbGRWYWwsXG4gICAgICAgICAgICAkaW5wdXREaXYgPSAkaW5wdXQuY2xvc2VzdCgnLmlucHV0LWZpZWxkJyk7IC8vIERpdiB0byBhcHBlbmQgb25cblxuICAgICAgICAvLyBDaGVjayBpZiBkYXRhIGlzbid0IGVtcHR5XG4gICAgICAgIGlmICghJC5pc0VtcHR5T2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgdmFyICRhdXRvY29tcGxldGUgPSAkKCc8dWwgY2xhc3M9XCJhdXRvY29tcGxldGUtY29udGVudCBkcm9wZG93bi1jb250ZW50XCI+PC91bD4nKTtcbiAgICAgICAgICB2YXIgJG9sZEF1dG9jb21wbGV0ZTtcblxuICAgICAgICAgIC8vIEFwcGVuZCBhdXRvY29tcGxldGUgZWxlbWVudC5cbiAgICAgICAgICAvLyBQcmV2ZW50IGRvdWJsZSBzdHJ1Y3R1cmUgaW5pdC5cbiAgICAgICAgICBpZiAoJGlucHV0RGl2Lmxlbmd0aCkge1xuICAgICAgICAgICAgJG9sZEF1dG9jb21wbGV0ZSA9ICRpbnB1dERpdi5jaGlsZHJlbignLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnQnKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYgKCEkb2xkQXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAkaW5wdXREaXYuYXBwZW5kKCRhdXRvY29tcGxldGUpOyAvLyBTZXQgdWwgaW4gYm9keVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkb2xkQXV0b2NvbXBsZXRlID0gJGlucHV0Lm5leHQoJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoISRvbGRBdXRvY29tcGxldGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICRpbnB1dC5hZnRlcigkYXV0b2NvbXBsZXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRvbGRBdXRvY29tcGxldGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAkYXV0b2NvbXBsZXRlID0gJG9sZEF1dG9jb21wbGV0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBIaWdobGlnaHQgcGFydGlhbCBtYXRjaC5cbiAgICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gZnVuY3Rpb24oc3RyaW5nLCAkZWwpIHtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkZWwuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICB2YXIgbWF0Y2hTdGFydCA9ICRlbC50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiXCIgKyBzdHJpbmcudG9Mb3dlckNhc2UoKSArIFwiXCIpLFxuICAgICAgICAgICAgICAgIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIHN0cmluZy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGJlZm9yZU1hdGNoID0gJGVsLnRleHQoKS5zbGljZSgwLCBtYXRjaFN0YXJ0KSxcbiAgICAgICAgICAgICAgICBtYXRjaFRleHQgPSAkZWwudGV4dCgpLnNsaWNlKG1hdGNoU3RhcnQsIG1hdGNoRW5kICsgMSksXG4gICAgICAgICAgICAgICAgYWZ0ZXJNYXRjaCA9ICRlbC50ZXh0KCkuc2xpY2UobWF0Y2hFbmQgKyAxKTtcbiAgICAgICAgICAgICRlbC5odG1sKFwiPHNwYW4+XCIgKyBiZWZvcmVNYXRjaCArIFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+XCIgKyBtYXRjaFRleHQgKyBcIjwvc3Bhbj5cIiArIGFmdGVyTWF0Y2ggKyBcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgICBpZiAoaW1nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAkZWwucHJlcGVuZChpbWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBSZXNldCBjdXJyZW50IGVsZW1lbnQgcG9zaXRpb25cbiAgICAgICAgICB2YXIgcmVzZXRDdXJyZW50RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgICAgICRhdXRvY29tcGxldGUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgYXV0b2NvbXBsZXRlIGVsZW1lbnRzXG4gICAgICAgICAgdmFyIHJlbW92ZUF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5lbXB0eSgpO1xuICAgICAgICAgICAgcmVzZXRDdXJyZW50RWxlbWVudCgpO1xuICAgICAgICAgICAgb2xkVmFsID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAkaW5wdXQub2ZmKCdibHVyLmF1dG9jb21wbGV0ZScpLm9uKCdibHVyLmF1dG9jb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBQZXJmb3JtIHNlYXJjaFxuICAgICAgICAgICRpbnB1dC5vZmYoJ2tleXVwLmF1dG9jb21wbGV0ZSBmb2N1cy5hdXRvY29tcGxldGUnKS5vbigna2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBjb3VudC5cbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciB2YWwgPSAkaW5wdXQudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgY2FwdHVyZSBlbnRlciBvciBhcnJvdyBrZXkgdXNhZ2UuXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHxcbiAgICAgICAgICAgICAgICBlLndoaWNoID09PSAzOCB8fFxuICAgICAgICAgICAgICAgIGUud2hpY2ggPT09IDQwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgaW5wdXQgaXNuJ3QgZW1wdHlcbiAgICAgICAgICAgIGlmIChvbGRWYWwgIT09IHZhbCkge1xuICAgICAgICAgICAgICByZW1vdmVBdXRvY29tcGxldGUoKTtcblxuICAgICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+PSBvcHRpb25zLm1pbkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAga2V5LnRvTG93ZXJDYXNlKCkgIT09IHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBCcmVhayBpZiBwYXN0IGxpbWl0XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlT3B0aW9uID0gJCgnPGxpPjwvbGk+Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoJzxpbWcgc3JjPVwiJysgZGF0YVtrZXldICsnXCIgY2xhc3M9XCJyaWdodCBjaXJjbGVcIj48c3Bhbj4nKyBrZXkgKyc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlT3B0aW9uLmFwcGVuZCgnPHNwYW4+Jysga2V5ICsnPC9zcGFuPicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5hcHBlbmQoYXV0b2NvbXBsZXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0KHZhbCwgYXV0b2NvbXBsZXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIG9sZFZhbFxuICAgICAgICAgICAgb2xkVmFsID0gdmFsO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJGlucHV0Lm9mZigna2V5ZG93bi5hdXRvY29tcGxldGUnKS5vbigna2V5ZG93bi5hdXRvY29tcGxldGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gQXJyb3cga2V5cyBhbmQgZW50ZXIga2V5IHVzYWdlXG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IGUud2hpY2gsXG4gICAgICAgICAgICAgICAgbGlFbGVtZW50LFxuICAgICAgICAgICAgICAgIG51bUl0ZW1zID0gJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignbGknKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJy5hY3RpdmUnKS5maXJzdCgpO1xuXG4gICAgICAgICAgICAvLyBzZWxlY3QgZWxlbWVudCBvbiBFbnRlclxuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDEzICYmIGFjdGl2ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgbGlFbGVtZW50ID0gJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignbGknKS5lcShhY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgIGlmIChsaUVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGlFbGVtZW50LnRyaWdnZXIoJ21vdXNlZG93bi5hdXRvY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXB0dXJlIHVwIGFuZCBkb3duIGtleVxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAzOCB8fCBrZXlDb2RlID09PSA0MCApIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAzOCAmJlxuICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXgtLTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSA0MCAmJlxuICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPCAobnVtSXRlbXMgLSAxKSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAkYXV0b2NvbXBsZXRlLmNoaWxkcmVuKCdsaScpLmVxKGFjdGl2ZUluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFNldCBpbnB1dCB2YWx1ZVxuICAgICAgICAgICRhdXRvY29tcGxldGUub24oJ21vdXNlZG93bi5hdXRvY29tcGxldGUgdG91Y2hzdGFydC5hdXRvY29tcGxldGUnLCAnbGknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgICRpbnB1dC52YWwodGV4dCk7XG4gICAgICAgICAgICAkaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICByZW1vdmVBdXRvY29tcGxldGUoKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIG9uQXV0b2NvbXBsZXRlIGNhbGxiYWNrLlxuICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uQXV0b2NvbXBsZXRlKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMub25BdXRvY29tcGxldGUuY2FsbCh0aGlzLCB0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICB9KTsgLy8gRW5kIG9mICQoZG9jdW1lbnQpLnJlYWR5XG5cbiAgLyoqKioqKioqKioqKioqKioqKipcbiAgICogIFNlbGVjdCBQbHVnaW4gICpcbiAgICoqKioqKioqKioqKioqKioqKi9cbiAgJC5mbi5tYXRlcmlhbF9zZWxlY3QgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCRzZWxlY3QuaGFzQ2xhc3MoJ2Jyb3dzZXItZGVmYXVsdCcpKSB7XG4gICAgICAgIHJldHVybjsgLy8gQ29udGludWUgdG8gbmV4dCAocmV0dXJuIGZhbHNlIGJyZWFrcyBvdXQgb2YgZW50aXJlIGxvb3ApXG4gICAgICB9XG5cbiAgICAgIHZhciBtdWx0aXBsZSA9ICRzZWxlY3QuYXR0cignbXVsdGlwbGUnKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICBsYXN0SUQgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdC1pZCcpOyAvLyBUZWFyIGRvd24gc3RydWN0dXJlIGlmIFNlbGVjdCBuZWVkcyB0byBiZSByZWJ1aWx0XG5cbiAgICAgIGlmIChsYXN0SUQpIHtcbiAgICAgICAgJHNlbGVjdC5wYXJlbnQoKS5maW5kKCdzcGFuLmNhcmV0JykucmVtb3ZlKCk7XG4gICAgICAgICRzZWxlY3QucGFyZW50KCkuZmluZCgnaW5wdXQnKS5yZW1vdmUoKTtcblxuICAgICAgICAkc2VsZWN0LnVud3JhcCgpO1xuICAgICAgICAkKCd1bCNzZWxlY3Qtb3B0aW9ucy0nK2xhc3RJRCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGRlc3Ryb3lpbmcgdGhlIHNlbGVjdCwgcmVtb3ZlIHRoZSBzZWxlbGN0LWlkIGFuZCByZXNldCBpdCB0byBpdCdzIHVuaW5pdGlhbGl6ZWQgc3RhdGUuXG4gICAgICBpZihjYWxsYmFjayA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgICRzZWxlY3QuZGF0YSgnc2VsZWN0LWlkJywgbnVsbCkucmVtb3ZlQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHVuaXF1ZUlEID0gTWF0ZXJpYWxpemUuZ3VpZCgpO1xuICAgICAgJHNlbGVjdC5kYXRhKCdzZWxlY3QtaWQnLCB1bmlxdWVJRCk7XG4gICAgICB2YXIgd3JhcHBlciA9ICQoJzxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcHBlclwiPjwvZGl2PicpO1xuICAgICAgd3JhcHBlci5hZGRDbGFzcygkc2VsZWN0LmF0dHIoJ2NsYXNzJykpO1xuICAgICAgdmFyIG9wdGlvbnMgPSAkKCc8dWwgaWQ9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKydcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcgKyAobXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duJyA6ICcnKSArICdcIj48L3VsPicpLFxuICAgICAgICAgIHNlbGVjdENoaWxkcmVuID0gJHNlbGVjdC5jaGlsZHJlbignb3B0aW9uLCBvcHRncm91cCcpLFxuICAgICAgICAgIHZhbHVlc1NlbGVjdGVkID0gW10sXG4gICAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XG5cbiAgICAgIHZhciBsYWJlbCA9ICRzZWxlY3QuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuaHRtbCgpIHx8ICRzZWxlY3QuZmluZCgnb3B0aW9uOmZpcnN0JykuaHRtbCgpIHx8IFwiXCI7XG5cbiAgICAgIC8vIEZ1bmN0aW9uIHRoYXQgcmVuZGVycyBhbmQgYXBwZW5kcyB0aGUgb3B0aW9uIHRha2luZyBpbnRvXG4gICAgICAvLyBhY2NvdW50IHR5cGUgYW5kIHBvc3NpYmxlIGltYWdlIGljb24uXG4gICAgICB2YXIgYXBwZW5kT3B0aW9uV2l0aEljb24gPSBmdW5jdGlvbihzZWxlY3QsIG9wdGlvbiwgdHlwZSkge1xuICAgICAgICAvLyBBZGQgZGlzYWJsZWQgYXR0ciBpZiBkaXNhYmxlZFxuICAgICAgICB2YXIgZGlzYWJsZWRDbGFzcyA9IChvcHRpb24uaXMoJzpkaXNhYmxlZCcpKSA/ICdkaXNhYmxlZCAnIDogJyc7XG4gICAgICAgIHZhciBvcHRncm91cENsYXNzID0gKHR5cGUgPT09ICdvcHRncm91cC1vcHRpb24nKSA/ICdvcHRncm91cC1vcHRpb24gJyA6ICcnO1xuICAgICAgICB2YXIgbXVsdGlwbGVDaGVja2JveCA9IG11bHRpcGxlID8gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIicgKyBkaXNhYmxlZENsYXNzICsgJy8+PGxhYmVsPjwvbGFiZWw+JyA6ICcnO1xuXG4gICAgICAgIC8vIGFkZCBpY29uc1xuICAgICAgICB2YXIgaWNvbl91cmwgPSBvcHRpb24uZGF0YSgnaWNvbicpO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IG9wdGlvbi5hdHRyKCdjbGFzcycpO1xuICAgICAgICBpZiAoISFpY29uX3VybCkge1xuICAgICAgICAgIHZhciBjbGFzc1N0cmluZyA9ICcnO1xuICAgICAgICAgIGlmICghIWNsYXNzZXMpIGNsYXNzU3RyaW5nID0gJyBjbGFzcz1cIicgKyBjbGFzc2VzICsgJ1wiJztcblxuICAgICAgICAgIC8vIENoZWNrIGZvciBtdWx0aXBsZSB0eXBlLlxuICAgICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIicgKyBkaXNhYmxlZENsYXNzICsgb3B0Z3JvdXBDbGFzcyArICdcIj48aW1nIGFsdD1cIlwiIHNyYz1cIicgKyBpY29uX3VybCArICdcIicgKyBjbGFzc1N0cmluZyArICc+PHNwYW4+JyArIG11bHRpcGxlQ2hlY2tib3ggKyBvcHRpb24uaHRtbCgpICsgJzwvc3Bhbj48L2xpPicpKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBtdWx0aXBsZSB0eXBlLlxuICAgICAgICBvcHRpb25zLmFwcGVuZCgkKCc8bGkgY2xhc3M9XCInICsgZGlzYWJsZWRDbGFzcyArIG9wdGdyb3VwQ2xhc3MgKyAnXCI+PHNwYW4+JyArIG11bHRpcGxlQ2hlY2tib3ggKyBvcHRpb24uaHRtbCgpICsgJzwvc3Bhbj48L2xpPicpKTtcbiAgICAgIH07XG5cbiAgICAgIC8qIENyZWF0ZSBkcm9wZG93biBzdHJ1Y3R1cmUuICovXG4gICAgICBpZiAoc2VsZWN0Q2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHNlbGVjdENoaWxkcmVuLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJ29wdGlvbicpKSB7XG4gICAgICAgICAgICAvLyBEaXJlY3QgZGVzY2VuZGFudCBvcHRpb24uXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgYXBwZW5kT3B0aW9uV2l0aEljb24oJHNlbGVjdCwgJCh0aGlzKSwgJ211bHRpcGxlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFwcGVuZE9wdGlvbldpdGhJY29uKCRzZWxlY3QsICQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICAgICAgLy8gT3B0Z3JvdXAuXG4gICAgICAgICAgICB2YXIgc2VsZWN0T3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwib3B0Z3JvdXBcIj48c3Bhbj4nICsgJCh0aGlzKS5hdHRyKCdsYWJlbCcpICsgJzwvc3Bhbj48L2xpPicpKTtcblxuICAgICAgICAgICAgc2VsZWN0T3B0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpLCAnb3B0Z3JvdXAtb3B0aW9uJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb3B0aW9uIGVsZW1lbnQgaXMgZGlzYWJsZWRcbiAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgISQodGhpcykuaGFzQ2xhc3MoJ29wdGdyb3VwJykpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCB0aGlzKS5wcm9wKCdjaGVja2VkJywgZnVuY3Rpb24oaSwgdikgeyByZXR1cm4gIXY7IH0pO1xuICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRvZ2dsZUVudHJ5RnJvbUFycmF5KHZhbHVlc1NlbGVjdGVkLCBpLCAkc2VsZWN0KTtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudmFsKCQodGhpcykudGV4dCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgJCh0aGlzKSk7XG4gICAgICAgICAgICAkc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGkpLnByb3AoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBvbmNoYW5nZSgpIGV2ZW50XG4gICAgICAgICAgICAkc2VsZWN0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ3VuZGVmaW5lZCcpIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gV3JhcCBFbGVtZW50c1xuICAgICAgJHNlbGVjdC53cmFwKHdyYXBwZXIpO1xuICAgICAgLy8gQWRkIFNlbGVjdCBEaXNwbGF5IEVsZW1lbnRcbiAgICAgIHZhciBkcm9wZG93bkljb24gPSAkKCc8c3BhbiBjbGFzcz1cImNhcmV0XCI+JiM5NjYwOzwvc3Bhbj4nKTtcbiAgICAgIGlmICgkc2VsZWN0LmlzKCc6ZGlzYWJsZWQnKSlcbiAgICAgICAgZHJvcGRvd25JY29uLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG4gICAgICAvLyBlc2NhcGUgZG91YmxlIHF1b3Rlc1xuICAgICAgdmFyIHNhbml0aXplZExhYmVsSHRtbCA9IGxhYmVsLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuICAgICAgdmFyICRuZXdTZWxlY3QgPSAkKCc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlbGVjdC1kcm9wZG93blwiIHJlYWRvbmx5PVwidHJ1ZVwiICcgKyAoKCRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpKSA/ICdkaXNhYmxlZCcgOiAnJykgKyAnIGRhdGEtYWN0aXZhdGVzPVwic2VsZWN0LW9wdGlvbnMtJyArIHVuaXF1ZUlEICsnXCIgdmFsdWU9XCInKyBzYW5pdGl6ZWRMYWJlbEh0bWwgKydcIi8+Jyk7XG4gICAgICAkc2VsZWN0LmJlZm9yZSgkbmV3U2VsZWN0KTtcbiAgICAgICRuZXdTZWxlY3QuYmVmb3JlKGRyb3Bkb3duSWNvbik7XG5cbiAgICAgICRuZXdTZWxlY3QuYWZ0ZXIob3B0aW9ucyk7XG4gICAgICAvLyBDaGVjayBpZiBzZWN0aW9uIGVsZW1lbnQgaXMgZGlzYWJsZWRcbiAgICAgIGlmICghJHNlbGVjdC5pcygnOmRpc2FibGVkJykpIHtcbiAgICAgICAgJG5ld1NlbGVjdC5kcm9wZG93bih7J2hvdmVyJzogZmFsc2V9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29weSB0YWJpbmRleFxuICAgICAgaWYgKCRzZWxlY3QuYXR0cigndGFiaW5kZXgnKSkge1xuICAgICAgICAkKCRuZXdTZWxlY3RbMF0pLmF0dHIoJ3RhYmluZGV4JywgJHNlbGVjdC5hdHRyKCd0YWJpbmRleCcpKTtcbiAgICAgIH1cblxuICAgICAgJHNlbGVjdC5hZGRDbGFzcygnaW5pdGlhbGl6ZWQnKTtcblxuICAgICAgJG5ld1NlbGVjdC5vbih7XG4gICAgICAgICdmb2N1cyc6IGZ1bmN0aW9uICgpe1xuICAgICAgICAgIGlmICgkKCd1bC5zZWxlY3QtZHJvcGRvd24nKS5ub3Qob3B0aW9uc1swXSkuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICQoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghb3B0aW9ucy5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJywgWydmb2N1cyddKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBpZiAobXVsdGlwbGUgJiYgbGFiZWwuaW5kZXhPZignLCcpID49IDApIHtcbiAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zcGxpdCgnLCcpWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKSA9PT0gbGFiZWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgc2VsZWN0ZWRPcHRpb24sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKGUpe1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkbmV3U2VsZWN0Lm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIG9wdGlvbnMuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgIG9wdGlvbnNIb3ZlciA9IHRydWU7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9wdGlvbnNIb3ZlciA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KS5vbih7XG4gICAgICAgICdjbGljayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBtdWx0aXBsZSAmJiAob3B0aW9uc0hvdmVyIHx8ICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgaW5pdGlhbCBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICRzZWxlY3QuZmluZChcIm9wdGlvbjpzZWxlY3RlZDpub3QoOmRpc2FibGVkKVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG5cbiAgICAgICAgICB0b2dnbGVFbnRyeUZyb21BcnJheSh2YWx1ZXNTZWxlY3RlZCwgaW5kZXgsICRzZWxlY3QpO1xuICAgICAgICAgIG9wdGlvbnMuZmluZChcImxpXCIpLmVxKGluZGV4KS5maW5kKFwiOmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNYWtlIG9wdGlvbiBhcyBzZWxlY3RlZCBhbmQgc2Nyb2xsIHRvIHNlbGVjdGVkIHBvc2l0aW9uXG4gICAgICAgKiBAcGFyYW0ge2pRdWVyeX0gY29sbGVjdGlvbiAgU2VsZWN0IG9wdGlvbnMgalF1ZXJ5IGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3T3B0aW9uICBlbGVtZW50IG9mIHRoZSBuZXcgb3B0aW9uXG4gICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpcnN0QWN0aXZhdGlvbiAgSWYgb24gZmlyc3QgYWN0aXZhdGlvbiBvZiBzZWxlY3RcbiAgICAgICAqL1xuICAgICAgdmFyIGFjdGl2YXRlT3B0aW9uID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgbmV3T3B0aW9uLCBmaXJzdEFjdGl2YXRpb24pIHtcbiAgICAgICAgaWYgKG5ld09wdGlvbikge1xuICAgICAgICAgIGNvbGxlY3Rpb24uZmluZCgnbGkuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB2YXIgb3B0aW9uID0gJChuZXdPcHRpb24pO1xuICAgICAgICAgIG9wdGlvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBpZiAoIW11bHRpcGxlIHx8ICEhZmlyc3RBY3RpdmF0aW9uKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjcm9sbFRvKG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBBbGxvdyB1c2VyIHRvIHNlYXJjaCBieSB0eXBpbmdcbiAgICAgIC8vIHRoaXMgYXJyYXkgaXMgY2xlYXJlZCBhZnRlciAxIHNlY29uZFxuICAgICAgdmFyIGZpbHRlclF1ZXJ5ID0gW10sXG4gICAgICAgICAgb25LZXlEb3duID0gZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAvLyBUQUIgLSBzd2l0Y2ggdG8gYW5vdGhlciBpbnB1dFxuICAgICAgICAgICAgaWYoZS53aGljaCA9PSA5KXtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFSUk9XIERPV04gV0hFTiBTRUxFQ1QgSVMgQ0xPU0VEIC0gb3BlbiBzZWxlY3Qgb3B0aW9uc1xuICAgICAgICAgICAgaWYoZS53aGljaCA9PSA0MCAmJiAhb3B0aW9ucy5pcygnOnZpc2libGUnKSl7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignb3BlbicpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVOVEVSIFdIRU4gU0VMRUNUIElTIENMT1NFRCAtIHN1Ym1pdCBmb3JtXG4gICAgICAgICAgICBpZihlLndoaWNoID09IDEzICYmICFvcHRpb25zLmlzKCc6dmlzaWJsZScpKXtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIENBU0UgV0hFTiBVU0VSIFRZUEUgTEVUVEVSU1xuICAgICAgICAgICAgdmFyIGxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBub25MZXR0ZXJzID0gWzksMTMsMjcsMzgsNDBdO1xuICAgICAgICAgICAgaWYgKGxldHRlciAmJiAobm9uTGV0dGVycy5pbmRleE9mKGUud2hpY2gpID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyUXVlcnkucHVzaChsZXR0ZXIpO1xuXG4gICAgICAgICAgICAgIHZhciBzdHJpbmcgPSBmaWx0ZXJRdWVyeS5qb2luKCcnKSxcbiAgICAgICAgICAgICAgICAgIG5ld09wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGknKS5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyaW5nKSA9PT0gMDtcbiAgICAgICAgICAgICAgICAgIH0pWzBdO1xuXG4gICAgICAgICAgICAgIGlmIChuZXdPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVOVEVSIC0gc2VsZWN0IG9wdGlvbiBhbmQgY2xvc2Ugd2hlbiBzZWxlY3Qgb3B0aW9ucyBhcmUgb3BlbmVkXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAxMykge1xuICAgICAgICAgICAgICB2YXIgYWN0aXZlT3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZDpub3QoLmRpc2FibGVkKScpWzBdO1xuICAgICAgICAgICAgICBpZihhY3RpdmVPcHRpb24pe1xuICAgICAgICAgICAgICAgICQoYWN0aXZlT3B0aW9uKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQVJST1cgRE9XTiAtIG1vdmUgdG8gbmV4dCBub3QgZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSA0MCkge1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld09wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5uZXh0KCdsaTpub3QoLmRpc2FibGVkKScpWzBdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld09wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGk6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFU0MgLSBjbG9zZSBvcHRpb25zXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAyNykge1xuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFSUk9XIFVQIC0gbW92ZSB0byBwcmV2aW91cyBub3QgZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAzOCkge1xuICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykucHJldignbGk6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICAgICAgaWYobmV3T3B0aW9uKVxuICAgICAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsIG5ld09wdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEF1dG9tYXRpY2FseSBjbGVhbiBmaWx0ZXIgcXVlcnkgc28gdXNlciBjYW4gc2VhcmNoIGFnYWluIGJ5IHN0YXJ0aW5nIGxldHRlcnNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgZmlsdGVyUXVlcnkgPSBbXTsgfSwgMTAwMCk7XG4gICAgICAgICAgfTtcblxuICAgICAgJG5ld1NlbGVjdC5vbigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVFbnRyeUZyb21BcnJheShlbnRyaWVzQXJyYXksIGVudHJ5SW5kZXgsIHNlbGVjdCkge1xuICAgICAgdmFyIGluZGV4ID0gZW50cmllc0FycmF5LmluZGV4T2YoZW50cnlJbmRleCksXG4gICAgICAgICAgbm90QWRkZWQgPSBpbmRleCA9PT0gLTE7XG5cbiAgICAgIGlmIChub3RBZGRlZCkge1xuICAgICAgICBlbnRyaWVzQXJyYXkucHVzaChlbnRyeUluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJpZXNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3Quc2libGluZ3MoJ3VsLmRyb3Bkb3duLWNvbnRlbnQnKS5maW5kKCdsaTpub3QoLm9wdGdyb3VwKScpLmVxKGVudHJ5SW5kZXgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgLy8gdXNlIG5vdEFkZGVkIGluc3RlYWQgb2YgdHJ1ZSAodG8gZGV0ZWN0IGlmIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQgb3Igbm90KVxuICAgICAgc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGVudHJ5SW5kZXgpLnByb3AoJ3NlbGVjdGVkJywgbm90QWRkZWQpO1xuICAgICAgc2V0VmFsdWVUb0lucHV0KGVudHJpZXNBcnJheSwgc2VsZWN0KTtcblxuICAgICAgcmV0dXJuIG5vdEFkZGVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFZhbHVlVG9JbnB1dChlbnRyaWVzQXJyYXksIHNlbGVjdCkge1xuICAgICAgdmFyIHZhbHVlID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBjb3VudCA9IGVudHJpZXNBcnJheS5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGVudHJpZXNBcnJheVtpXSkudGV4dCgpO1xuXG4gICAgICAgIGkgPT09IDAgPyB2YWx1ZSArPSB0ZXh0IDogdmFsdWUgKz0gJywgJyArIHRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSBzZWxlY3QuZmluZCgnb3B0aW9uOmRpc2FibGVkJykuZXEoMCkudGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3Quc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnZhbCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG5cbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBpbmRpY2F0b3JzOiB0cnVlLFxuICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgdHJhbnNpdGlvbjogNTAwLFxuICAgICAgICBpbnRlcnZhbDogNjAwMFxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gRm9yIGVhY2ggc2xpZGVyLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2ZcbiAgICAgICAgLy8gd2hpY2ggc2xpZGUgaXMgYWN0aXZlIGFuZCBpdHMgYXNzb2NpYXRlZCBjb250ZW50XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciAkc2xpZGVyID0gJHRoaXMuZmluZCgndWwuc2xpZGVzJykuZmlyc3QoKTtcbiAgICAgICAgdmFyICRzbGlkZXMgPSAkc2xpZGVyLmZpbmQoJz4gbGknKTtcbiAgICAgICAgdmFyICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICB2YXIgJGFjdGl2ZSwgJGluZGljYXRvcnMsICRpbnRlcnZhbDtcbiAgICAgICAgaWYgKCRhY3RpdmVfaW5kZXggIT0gLTEpIHsgJGFjdGl2ZSA9ICRzbGlkZXMuZXEoJGFjdGl2ZV9pbmRleCk7IH1cblxuICAgICAgICAvLyBUcmFuc2l0aW9ucyB0aGUgY2FwdGlvbiBkZXBlbmRpbmcgb24gYWxpZ25tZW50XG4gICAgICAgIGZ1bmN0aW9uIGNhcHRpb25UcmFuc2l0aW9uKGNhcHRpb24sIGR1cmF0aW9uKSB7XG4gICAgICAgICAgaWYgKGNhcHRpb24uaGFzQ2xhc3MoXCJjZW50ZXItYWxpZ25cIikpIHtcbiAgICAgICAgICAgIGNhcHRpb24udmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVk6IC0xMDB9LCB7ZHVyYXRpb246IGR1cmF0aW9uLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2FwdGlvbi5oYXNDbGFzcyhcInJpZ2h0LWFsaWduXCIpKSB7XG4gICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAxMDB9LCB7ZHVyYXRpb246IGR1cmF0aW9uLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2FwdGlvbi5oYXNDbGFzcyhcImxlZnQtYWxpZ25cIikpIHtcbiAgICAgICAgICAgIGNhcHRpb24udmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IC0xMDB9LCB7ZHVyYXRpb246IGR1cmF0aW9uLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgdHJhbnNpdGlvbiB0aGUgc2xpZGUgdG8gYW55IGluZGV4IG9mIHRoZSBuZXh0IHNsaWRlXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVUb1NsaWRlKGluZGV4KSB7XG4gICAgICAgICAgLy8gV3JhcCBhcm91bmQgaW5kaWNlcy5cbiAgICAgICAgICBpZiAoaW5kZXggPj0gJHNsaWRlcy5sZW5ndGgpIGluZGV4ID0gMDtcbiAgICAgICAgICBlbHNlIGlmIChpbmRleCA8IDApIGluZGV4ID0gJHNsaWRlcy5sZW5ndGggLTE7XG5cbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcblxuICAgICAgICAgIC8vIE9ubHkgZG8gaWYgaW5kZXggY2hhbmdlc1xuICAgICAgICAgIGlmICgkYWN0aXZlX2luZGV4ICE9IGluZGV4KSB7XG4gICAgICAgICAgICAkYWN0aXZlID0gJHNsaWRlcy5lcSgkYWN0aXZlX2luZGV4KTtcbiAgICAgICAgICAgICRjYXB0aW9uID0gJGFjdGl2ZS5maW5kKCcuY2FwdGlvbicpO1xuXG4gICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICRhY3RpdmUudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZXMubm90KCcuYWN0aXZlJykudmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDB9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIGNhcHRpb25UcmFuc2l0aW9uKCRjYXB0aW9uLCBvcHRpb25zLnRyYW5zaXRpb24pO1xuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAgICRpbmRpY2F0b3JzLmVxKCRhY3RpdmVfaW5kZXgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNsaWRlcy5lcShpbmRleCkudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLmZpbmQoJy5jYXB0aW9uJykudmVsb2NpdHkoe29wYWNpdHk6IDEsIHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgZGVsYXk6IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yc1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBoZWlnaHQgb2Ygc2xpZGVyXG4gICAgICAgIC8vIElmIGZ1bGxzY3JlZW4sIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCEkdGhpcy5oYXNDbGFzcygnZnVsbHNjcmVlbicpKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgLy8gQWRkIGhlaWdodCBpZiBpbmRpY2F0b3JzIGFyZSBwcmVzZW50XG4gICAgICAgICAgICAkdGhpcy5oZWlnaHQob3B0aW9ucy5oZWlnaHQgKyA0MCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJHRoaXMuaGVpZ2h0KG9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNsaWRlci5oZWlnaHQob3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBTZXQgaW5pdGlhbCBwb3NpdGlvbnMgb2YgY2FwdGlvbnNcbiAgICAgICAgJHNsaWRlcy5maW5kKCcuY2FwdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhcHRpb25UcmFuc2l0aW9uKCQodGhpcyksIDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNb3ZlIGltZyBzcmMgaW50byBiYWNrZ3JvdW5kLWltYWdlXG4gICAgICAgICRzbGlkZXMuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHBsYWNlaG9sZGVyQmFzZTY0ID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3NyYycpICE9PSBwbGFjZWhvbGRlckJhc2U2NCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyAkKHRoaXMpLmF0dHIoJ3NyYycpICsgJyknICk7XG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsIHBsYWNlaG9sZGVyQmFzZTY0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGR5bmFtaWNhbGx5IGFkZCBpbmRpY2F0b3JzXG4gICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAkaW5kaWNhdG9ycyA9ICQoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpO1xuICAgICAgICAgICRzbGlkZXMuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgICAgICAgICB2YXIgJGluZGljYXRvciA9ICQoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGNsaWNrcyBvbiBpbmRpY2F0b3JzXG4gICAgICAgICAgICAkaW5kaWNhdG9yLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkc2xpZGVyLnBhcmVudCgpO1xuICAgICAgICAgICAgICB2YXIgY3Vycl9pbmRleCA9ICRwYXJlbnQuZmluZCgkKHRoaXMpKS5pbmRleCgpO1xuICAgICAgICAgICAgICBtb3ZlVG9TbGlkZShjdXJyX2luZGV4KTtcblxuICAgICAgICAgICAgICAvLyByZXNldCBpbnRlcnZhbFxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgIGlmICgkc2xpZGVzLmxlbmd0aCA9PSAkYWN0aXZlX2luZGV4ICsgMSkgJGFjdGl2ZV9pbmRleCA9IDA7IC8vIGxvb3AgdG8gc3RhcnRcbiAgICAgICAgICAgICAgICAgIGVsc2UgJGFjdGl2ZV9pbmRleCArPSAxO1xuXG4gICAgICAgICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4KTtcblxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMudHJhbnNpdGlvbiArIG9wdGlvbnMuaW50ZXJ2YWxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGluZGljYXRvcnMuYXBwZW5kKCRpbmRpY2F0b3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICR0aGlzLmFwcGVuZCgkaW5kaWNhdG9ycyk7XG4gICAgICAgICAgJGluZGljYXRvcnMgPSAkdGhpcy5maW5kKCd1bC5pbmRpY2F0b3JzJykuZmluZCgnbGkuaW5kaWNhdG9yLWl0ZW0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWN0aXZlKSB7XG4gICAgICAgICAgJGFjdGl2ZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgJHNsaWRlcy5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuXG4gICAgICAgICAgJGFjdGl2ZV9pbmRleCA9IDA7XG4gICAgICAgICAgJGFjdGl2ZSA9ICRzbGlkZXMuZXEoJGFjdGl2ZV9pbmRleCk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yc1xuICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgICRpbmRpY2F0b3JzLmVxKCRhY3RpdmVfaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGp1c3QgaGVpZ2h0IHRvIGN1cnJlbnQgc2xpZGVcbiAgICAgICAgJGFjdGl2ZS5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRhY3RpdmUuZmluZCgnLmNhcHRpb24nKS52ZWxvY2l0eSh7b3BhY2l0eTogMSwgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMH0sIHtkdXJhdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhdXRvIHNjcm9sbFxuICAgICAgICAkaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4ICsgMSk7XG5cbiAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICk7XG5cblxuICAgICAgICAvLyBIYW1tZXJKUywgU3dpcGUgbmF2aWdhdGlvblxuXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50XG4gICAgICAgIHZhciBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBzd2lwZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHN3aXBlUmlnaHQgPSBmYWxzZTtcblxuICAgICAgICAkdGhpcy5oYW1tZXIoe1xuICAgICAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxuICAgICAgICB9KS5iaW5kKCdwYW4nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGludGVydmFsXG4gICAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLmdlc3R1cmUuZGlyZWN0aW9uO1xuICAgICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuZGVsdGFYO1xuICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XG4gICAgICAgICAgICB2YXIgdmVsb2NpdHlZID0gZS5nZXN0dXJlLnZlbG9jaXR5WTtcblxuICAgICAgICAgICAgJGN1cnJfc2xpZGUgPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2ZWxvY2l0eVgpID4gTWF0aC5hYnModmVsb2NpdHlZKSkge1xuICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IHhcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN3aXBlIExlZnRcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDQgJiYgKHggPiAoJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYIDwgLTAuNjUpKSB7XG4gICAgICAgICAgICAgIHN3aXBlUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3dpcGUgUmlnaHRcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMiAmJiAoeCA8ICgtMSAqICR0aGlzLmlubmVyV2lkdGgoKSAvIDIpIHx8IHZlbG9jaXR5WCA+IDAuNjUpKSB7XG4gICAgICAgICAgICAgIHN3aXBlTGVmdCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1ha2UgU2xpZGUgQmVoaW5kIGFjdGl2ZSBzbGlkZSB2aXNpYmxlXG4gICAgICAgICAgICB2YXIgbmV4dF9zbGlkZTtcbiAgICAgICAgICAgIGlmIChzd2lwZUxlZnQpIHtcbiAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRjdXJyX3NsaWRlLm5leHQoKTtcbiAgICAgICAgICAgICAgaWYgKG5leHRfc2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRzbGlkZXMuZmlyc3QoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXh0X3NsaWRlLnZlbG9jaXR5KHsgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3dpcGVSaWdodCkge1xuICAgICAgICAgICAgICBuZXh0X3NsaWRlID0gJGN1cnJfc2xpZGUucHJldigpO1xuICAgICAgICAgICAgICBpZiAobmV4dF9zbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXh0X3NsaWRlID0gJHNsaWRlcy5sYXN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV4dF9zbGlkZS52ZWxvY2l0eSh7IG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSkuYmluZCgncGFuZW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xuXG4gICAgICAgICAgICAkY3Vycl9zbGlkZSA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpO1xuICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgY3Vycl9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG5cbiAgICAgICAgICAgIGlmICghc3dpcGVSaWdodCAmJiAhc3dpcGVMZWZ0IHx8ICRzbGlkZXMubGVuZ3RoIDw9MSkge1xuICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gb3JpZ2luYWwgc3BvdFxuICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDBcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3dpcGVMZWZ0KSB7XG4gICAgICAgICAgICAgIG1vdmVUb1NsaWRlKGN1cnJfaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6IC0xICogJHRoaXMuaW5uZXJXaWR0aCgpIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDB9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN3aXBlUmlnaHQpIHtcbiAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoY3Vycl9pbmRleCAtIDEpO1xuICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDogJHRoaXMuaW5uZXJXaWR0aCgpIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDB9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgc3dpcGVSaWdodCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBSZXN0YXJ0IGludGVydmFsXG4gICAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG4gICAgICAgICAgICAkaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICBpZiAoJHNsaWRlcy5sZW5ndGggPT0gJGFjdGl2ZV9pbmRleCArIDEpICRhY3RpdmVfaW5kZXggPSAwOyAvLyBsb29wIHRvIHN0YXJ0XG4gICAgICAgICAgICAgICAgZWxzZSAkYWN0aXZlX2luZGV4ICs9IDE7XG5cbiAgICAgICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4KTtcblxuICAgICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMub24oJ3NsaWRlclBhdXNlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5vbignc2xpZGVyU3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG4gICAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgaWYgKCRzbGlkZXMubGVuZ3RoID09ICRhY3RpdmVfaW5kZXggKyAxKSAkYWN0aXZlX2luZGV4ID0gMDsgLy8gbG9vcCB0byBzdGFydFxuICAgICAgICAgICAgICBlbHNlICRhY3RpdmVfaW5kZXggKz0gMTtcblxuICAgICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4KTtcblxuICAgICAgICAgICAgfSwgb3B0aW9ucy50cmFuc2l0aW9uICsgb3B0aW9ucy5pbnRlcnZhbFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm9uKCdzbGlkZXJOZXh0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCArIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5vbignc2xpZGVyUHJldicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggLSAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuXG5cblxuICAgIH0sXG4gICAgcGF1c2UgOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyUGF1c2UnKTtcbiAgICB9LFxuICAgIHN0YXJ0IDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3NsaWRlclN0YXJ0Jyk7XG4gICAgfSxcbiAgICBuZXh0IDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3NsaWRlck5leHQnKTtcbiAgICB9LFxuICAgIHByZXYgOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyUHJldicpO1xuICAgIH1cbiAgfTtcblxuXG4gICQuZm4uc2xpZGVyID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRvb2x0aXAnICk7XG4gICAgfVxuICB9OyAvLyBQbHVnaW4gZW5kXG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmNhcmQnLCAnLmNhcmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCQodGhpcykuZmluZCgnPiAuY2FyZC1yZXZlYWwnKS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKCQoJy5jYXJkLXJldmVhbCAuY2FyZC10aXRsZScpKSB8fCAkKGUudGFyZ2V0KS5pcygkKCcuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGUgaScpKSkge1xuICAgICAgICAgIC8vIE1ha2UgUmV2ZWFsIGFuaW1hdGUgZG93biBhbmQgZGlzcGxheSBub25lXG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcuY2FyZC1yZXZlYWwnKS52ZWxvY2l0eShcbiAgICAgICAgICAgIHt0cmFuc2xhdGVZOiAwfSwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMjI1LFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7ICQodGhpcykuY3NzKHsgZGlzcGxheTogJ25vbmUnfSk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmlzKCQoJy5jYXJkIC5hY3RpdmF0b3InKSkgfHxcbiAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkuaXMoJCgnLmNhcmQgLmFjdGl2YXRvciBpJykpICkge1xuICAgICAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jYXJkJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5jYXJkLXJldmVhbCcpLmNzcyh7IGRpc3BsYXk6ICdibG9jayd9KS52ZWxvY2l0eShcInN0b3BcIiwgZmFsc2UpLnZlbG9jaXR5KHt0cmFuc2xhdGVZOiAnLTEwMCUnfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCd9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xufSggalF1ZXJ5ICkpOzsoZnVuY3Rpb24gKCQpIHtcbiAgdmFyIG1hdGVyaWFsQ2hpcHNEZWZhdWx0cyA9IHtcbiAgICBkYXRhOiBbXSxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6ICcnLFxuICAgIGF1dG9jb21wbGV0ZU9wdGlvbnM6IHt9LFxuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEhhbmRsZSByZW1vdmFsIG9mIHN0YXRpYyBjaGlwcy5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoaXAgLmNsb3NlJywgZnVuY3Rpb24oZSl7XG4gICAgICB2YXIgJGNoaXBzID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hpcHMnKTtcbiAgICAgIGlmICgkY2hpcHMuYXR0cignZGF0YS1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoaXAnKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgJC5mbi5tYXRlcmlhbF9jaGlwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy4kZWwgPSAkKHRoaXMpO1xuICAgIHRoaXMuJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gICAgdGhpcy5TRUxTID0ge1xuICAgICAgQ0hJUFM6ICcuY2hpcHMnLFxuICAgICAgQ0hJUDogJy5jaGlwJyxcbiAgICAgIElOUFVUOiAnaW5wdXQnLFxuICAgICAgREVMRVRFOiAnLm1hdGVyaWFsLWljb25zJyxcbiAgICAgIFNFTEVDVEVEX0NISVA6ICcuc2VsZWN0ZWQnLFxuICAgIH07XG5cbiAgICBpZiAoJ2RhdGEnID09PSBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWwuZGF0YSgnY2hpcHMnKTtcbiAgICB9XG5cbiAgICB2YXIgY3Vycl9vcHRpb25zID0gJC5leHRlbmQoe30sIG1hdGVyaWFsQ2hpcHNEZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgc2VsZi5oYXNBdXRvY29tcGxldGUgPSAhJC5pc0VtcHR5T2JqZWN0KGN1cnJfb3B0aW9ucy5hdXRvY29tcGxldGVPcHRpb25zLmRhdGEpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZVxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGNoaXBzO1xuICAgICAgc2VsZi4kZWwuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgJGNoaXBzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGNoaXBJZCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcbiAgICAgICAgc2VsZi5jaGlwSWQgPSBjaGlwSWQ7XG5cbiAgICAgICAgaWYgKCFjdXJyX29wdGlvbnMuZGF0YSB8fCAhKGN1cnJfb3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgY3Vycl9vcHRpb25zLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAkY2hpcHMuZGF0YSgnY2hpcHMnLCBjdXJyX29wdGlvbnMuZGF0YSk7XG4gICAgICAgICRjaGlwcy5hdHRyKCdkYXRhLWluZGV4JywgaSk7XG4gICAgICAgICRjaGlwcy5hdHRyKCdkYXRhLWluaXRpYWxpemVkJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKCEkY2hpcHMuaGFzQ2xhc3Moc2VsZi5TRUxTLkNISVBTKSkge1xuICAgICAgICAgICRjaGlwcy5hZGRDbGFzcygnY2hpcHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuY2hpcHMoJGNoaXBzLCBjaGlwSWQpO1xuICAgICAgICBpKys7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBTRUxTID0gc2VsZi5TRUxTO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2NsaWNrLmNoaXBzLWZvY3VzJywgU0VMUy5DSElQUykub24oJ2NsaWNrLmNoaXBzLWZvY3VzJywgU0VMUy5DSElQUywgZnVuY3Rpb24oZSl7XG4gICAgICAgICQoZS50YXJnZXQpLmZpbmQoU0VMUy5JTlBVVCkuZm9jdXMoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2NsaWNrLmNoaXBzLXNlbGVjdCcsIFNFTFMuQ0hJUCkub24oJ2NsaWNrLmNoaXBzLXNlbGVjdCcsIFNFTFMuQ0hJUCwgZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciAkY2hpcCA9ICQoZS50YXJnZXQpO1xuICAgICAgICBpZiAoJGNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHdhc1NlbGVjdGVkID0gJGNoaXAuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgdmFyICRjaGlwcyA9ICRjaGlwLmNsb3Nlc3QoU0VMUy5DSElQUyk7XG4gICAgICAgICAgJChTRUxTLkNISVApLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgaWYgKCF3YXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RDaGlwKCRjaGlwLmluZGV4KCksICRjaGlwcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdrZXlkb3duLmNoaXBzJykub24oJ2tleWRvd24uY2hpcHMnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKCdpbnB1dCwgdGV4dGFyZWEnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlbGV0ZVxuICAgICAgICB2YXIgJGNoaXAgPSBzZWxmLiRkb2N1bWVudC5maW5kKFNFTFMuQ0hJUCArIFNFTFMuU0VMRUNURURfQ0hJUCk7XG4gICAgICAgIHZhciAkY2hpcHMgPSAkY2hpcC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gJGNoaXAuc2libGluZ3MoU0VMUy5DSElQKS5sZW5ndGg7XG4gICAgICAgIHZhciBpbmRleDtcblxuICAgICAgICBpZiAoISRjaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLndoaWNoID09PSA4IHx8IGUud2hpY2ggPT09IDQ2KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaW5kZXggPSAkY2hpcC5pbmRleCgpO1xuICAgICAgICAgIHNlbGYuZGVsZXRlQ2hpcChpbmRleCwgJGNoaXBzKTtcblxuICAgICAgICAgIHZhciBzZWxlY3RJbmRleCA9IG51bGw7XG4gICAgICAgICAgaWYgKChpbmRleCArIDEpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RJbmRleCA9IGluZGV4O1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGxlbmd0aCB8fCAoaW5kZXggKyAxKSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RJbmRleCA9IGxlbmd0aCAtIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGVjdEluZGV4IDwgMCkgc2VsZWN0SW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgaWYgKG51bGwgIT09IHNlbGVjdEluZGV4KSB7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoc2VsZWN0SW5kZXgsICRjaGlwcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbGVuZ3RoKSAkY2hpcHMuZmluZCgnaW5wdXQnKS5mb2N1cygpO1xuXG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSAzNykge1xuICAgICAgICAgIGluZGV4ID0gJGNoaXAuaW5kZXgoKSAtIDE7XG4gICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkKFNFTFMuQ0hJUCkucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZi5zZWxlY3RDaGlwKGluZGV4LCAkY2hpcHMpO1xuXG4gICAgICAgIC8vIHJpZ2h0XG4gICAgICAgIH0gZWxzZSBpZiAoZS53aGljaCA9PT0gMzkpIHtcbiAgICAgICAgICBpbmRleCA9ICRjaGlwLmluZGV4KCkgKyAxO1xuICAgICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBpZiAoaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICRjaGlwcy5maW5kKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChpbmRleCwgJGNoaXBzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZignZm9jdXNpbi5jaGlwcycsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVUKS5vbignZm9jdXNpbi5jaGlwcycsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVULCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICRjdXJyQ2hpcHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICAkY3VyckNoaXBzLmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgICAkY3VyckNoaXBzLnNpYmxpbmdzKCdsYWJlbCwgLnByZWZpeCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJChTRUxTLkNISVApLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZignZm9jdXNvdXQuY2hpcHMnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCkub24oJ2ZvY3Vzb3V0LmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgJGN1cnJDaGlwcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoU0VMUy5DSElQUyk7XG4gICAgICAgICRjdXJyQ2hpcHMucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBpZiBlbXB0eVxuICAgICAgICBpZiAoISRjdXJyQ2hpcHMuZGF0YSgnY2hpcHMnKS5sZW5ndGgpIHtcbiAgICAgICAgICAkY3VyckNoaXBzLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICAkY3VyckNoaXBzLnNpYmxpbmdzKCcucHJlZml4JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZigna2V5ZG93bi5jaGlwcy1hZGQnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCkub24oJ2tleWRvd24uY2hpcHMtYWRkJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuICAgICAgICB2YXIgJGNoaXBzID0gJHRhcmdldC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICB2YXIgY2hpcHNMZW5ndGggPSAkY2hpcHMuY2hpbGRyZW4oU0VMUy5DSElQKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgaWYgKDEzID09PSBlLndoaWNoKSB7XG4gICAgICAgICAgLy8gT3ZlcnJpZGUgZW50ZXIgaWYgYXV0b2NvbXBsZXRpbmcuXG4gICAgICAgICAgaWYgKHNlbGYuaGFzQXV0b2NvbXBsZXRlICYmXG4gICAgICAgICAgICAgICRjaGlwcy5maW5kKCcuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudCcpLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAkY2hpcHMuZmluZCgnLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnQnKS5jaGlsZHJlbigpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLmFkZENoaXAoe3RhZzogJHRhcmdldC52YWwoKX0sICRjaGlwcyk7XG4gICAgICAgICAgJHRhcmdldC52YWwoJycpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlbGV0ZSBvciBsZWZ0XG4gICAgICAgIGlmICgoOCA9PT0gZS5rZXlDb2RlIHx8IDM3ID09PSBlLmtleUNvZGUpICYmICcnID09PSAkdGFyZ2V0LnZhbCgpICYmIGNoaXBzTGVuZ3RoKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChjaGlwc0xlbmd0aCAtIDEsICRjaGlwcyk7XG4gICAgICAgICAgJHRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2xpY2sgb24gZGVsZXRlIGljb24gaW4gY2hpcC5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZignY2xpY2suY2hpcHMtZGVsZXRlJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuREVMRVRFKS5vbignY2xpY2suY2hpcHMtZGVsZXRlJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuREVMRVRFLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICAgIHZhciAkY2hpcHMgPSAkdGFyZ2V0LmNsb3Nlc3QoU0VMUy5DSElQUyk7XG4gICAgICAgIHZhciAkY2hpcCA9ICR0YXJnZXQuY2xvc2VzdChTRUxTLkNISVApO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBzZWxmLmRlbGV0ZUNoaXAoJGNoaXAuaW5kZXgoKSwgJGNoaXBzKTtcbiAgICAgICAgJGNoaXBzLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmNoaXBzID0gZnVuY3Rpb24oJGNoaXBzLCBjaGlwSWQpIHtcbiAgICAgICRjaGlwcy5lbXB0eSgpO1xuICAgICAgJGNoaXBzLmRhdGEoJ2NoaXBzJykuZm9yRWFjaChmdW5jdGlvbihlbGVtKXtcbiAgICAgICAgJGNoaXBzLmFwcGVuZChzZWxmLnJlbmRlckNoaXAoZWxlbSkpO1xuICAgICAgfSk7XG4gICAgICAkY2hpcHMuYXBwZW5kKCQoJzxpbnB1dCBpZD1cIicgKyBjaGlwSWQgKydcIiBjbGFzcz1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJcIj4nKSk7XG4gICAgICBzZWxmLnNldFBsYWNlaG9sZGVyKCRjaGlwcyk7XG5cbiAgICAgIC8vIFNldCBmb3IgYXR0cmlidXRlIGZvciBsYWJlbFxuICAgICAgdmFyIGxhYmVsID0gJGNoaXBzLm5leHQoJ2xhYmVsJyk7XG4gICAgICBpZiAobGFiZWwubGVuZ3RoKSB7XG4gICAgICAgIGxhYmVsLmF0dHIoJ2ZvcicsIGNoaXBJZCk7XG5cbiAgICAgICAgaWYgKCRjaGlwcy5kYXRhKCdjaGlwcycpLmxlbmd0aCkge1xuICAgICAgICAgIGxhYmVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCBhdXRvY29tcGxldGUgaWYgbmVlZGVkLlxuICAgICAgdmFyIGlucHV0ID0gJCgnIycgKyBjaGlwSWQpO1xuICAgICAgaWYgKHNlbGYuaGFzQXV0b2NvbXBsZXRlKSB7XG4gICAgICAgIGN1cnJfb3B0aW9ucy5hdXRvY29tcGxldGVPcHRpb25zLm9uQXV0b2NvbXBsZXRlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgc2VsZi5hZGRDaGlwKHt0YWc6IHZhbH0sICRjaGlwcyk7XG4gICAgICAgICAgaW5wdXQudmFsKCcnKTtcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LmF1dG9jb21wbGV0ZShjdXJyX29wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBjaGlwIGpRdWVyeSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtXG4gICAgICogQHJldHVybiB7alF1ZXJ5fVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyQ2hpcCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgIGlmICghZWxlbS50YWcpIHJldHVybjtcblxuICAgICAgdmFyICRyZW5kZXJlZENoaXAgPSAkKCc8ZGl2IGNsYXNzPVwiY2hpcFwiPjwvZGl2PicpO1xuICAgICAgJHJlbmRlcmVkQ2hpcC50ZXh0KGVsZW0udGFnKTtcbiAgICAgICRyZW5kZXJlZENoaXAuYXBwZW5kKCQoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2xvc2VcIj5jbG9zZTwvaT4nKSk7XG4gICAgICByZXR1cm4gJHJlbmRlcmVkQ2hpcDtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uKCRjaGlwcykge1xuICAgICAgaWYgKCRjaGlwcy5kYXRhKCdjaGlwcycpLmxlbmd0aCAmJiBjdXJyX29wdGlvbnMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgJGNoaXBzLmZpbmQoJ2lucHV0JykucHJvcCgncGxhY2Vob2xkZXInLCBjdXJyX29wdGlvbnMucGxhY2Vob2xkZXIpO1xuXG4gICAgICB9IGVsc2UgaWYgKCEkY2hpcHMuZGF0YSgnY2hpcHMnKS5sZW5ndGggJiYgY3Vycl9vcHRpb25zLnNlY29uZGFyeVBsYWNlaG9sZGVyKSB7XG4gICAgICAgICRjaGlwcy5maW5kKCdpbnB1dCcpLnByb3AoJ3BsYWNlaG9sZGVyJywgY3Vycl9vcHRpb25zLnNlY29uZGFyeVBsYWNlaG9sZGVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5pc1ZhbGlkID0gZnVuY3Rpb24oJGNoaXBzLCBlbGVtKSB7XG4gICAgICB2YXIgY2hpcHMgPSAkY2hpcHMuZGF0YSgnY2hpcHMnKTtcbiAgICAgIHZhciBleGlzdHMgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIGk9MDsgaSA8IGNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlwc1tpXS50YWcgPT09IGVsZW0udGFnKSB7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJycgIT09IGVsZW0udGFnICYmICFleGlzdHM7XG4gICAgfTtcblxuICAgIHRoaXMuYWRkQ2hpcCA9IGZ1bmN0aW9uKGVsZW0sICRjaGlwcykge1xuICAgICAgaWYgKCFzZWxmLmlzVmFsaWQoJGNoaXBzLCBlbGVtKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgJHJlbmRlcmVkQ2hpcCA9IHNlbGYucmVuZGVyQ2hpcChlbGVtKTtcbiAgICAgIHZhciBuZXdEYXRhID0gW107XG4gICAgICB2YXIgb2xkRGF0YSA9ICRjaGlwcy5kYXRhKCdjaGlwcycpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld0RhdGEucHVzaChvbGREYXRhW2ldKTtcbiAgICAgIH1cbiAgICAgIG5ld0RhdGEucHVzaChlbGVtKTtcblxuICAgICAgJGNoaXBzLmRhdGEoJ2NoaXBzJywgbmV3RGF0YSk7XG4gICAgICAkcmVuZGVyZWRDaGlwLmluc2VydEJlZm9yZSgkY2hpcHMuZmluZCgnaW5wdXQnKSk7XG4gICAgICAkY2hpcHMudHJpZ2dlcignY2hpcC5hZGQnLCBlbGVtKTtcbiAgICAgIHNlbGYuc2V0UGxhY2Vob2xkZXIoJGNoaXBzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVDaGlwID0gZnVuY3Rpb24oY2hpcEluZGV4LCAkY2hpcHMpIHtcbiAgICAgIHZhciBjaGlwID0gJGNoaXBzLmRhdGEoJ2NoaXBzJylbY2hpcEluZGV4XTtcbiAgICAgICRjaGlwcy5maW5kKCcuY2hpcCcpLmVxKGNoaXBJbmRleCkucmVtb3ZlKCk7XG5cbiAgICAgIHZhciBuZXdEYXRhID0gW107XG4gICAgICB2YXIgb2xkRGF0YSA9ICRjaGlwcy5kYXRhKCdjaGlwcycpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpICE9PSBjaGlwSW5kZXgpIHtcbiAgICAgICAgICBuZXdEYXRhLnB1c2gob2xkRGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGNoaXBzLmRhdGEoJ2NoaXBzJywgbmV3RGF0YSk7XG4gICAgICAkY2hpcHMudHJpZ2dlcignY2hpcC5kZWxldGUnLCBjaGlwKTtcbiAgICAgIHNlbGYuc2V0UGxhY2Vob2xkZXIoJGNoaXBzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZWxlY3RDaGlwID0gZnVuY3Rpb24oY2hpcEluZGV4LCAkY2hpcHMpIHtcbiAgICAgIHZhciAkY2hpcCA9ICRjaGlwcy5maW5kKCcuY2hpcCcpLmVxKGNoaXBJbmRleCk7XG4gICAgICBpZiAoJGNoaXAgJiYgZmFsc2UgPT09ICRjaGlwLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICRjaGlwLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAkY2hpcHMudHJpZ2dlcignY2hpcC5zZWxlY3QnLCAkY2hpcHMuZGF0YSgnY2hpcHMnKVtjaGlwSW5kZXhdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDaGlwc0VsZW1lbnQgPSBmdW5jdGlvbihpbmRleCwgJGNoaXBzKSB7XG4gICAgICByZXR1cm4gJGNoaXBzLmVxKGluZGV4KTtcbiAgICB9O1xuXG4gICAgLy8gaW5pdFxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5oYW5kbGVFdmVudHMoKTtcbiAgfTtcbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJC5mbi5wdXNocGluID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogSW5maW5pdHksXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlIHB1c2hwaW4gZXZlbnQgYW5kIGNsYXNzZXNcbiAgICBpZiAob3B0aW9ucyA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlkID0gJCh0aGlzKS5kYXRhKCdwdXNocGluLWlkJykpIHtcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuJyArIGlkKTtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZURhdGEoJ3B1c2hwaW4taWQnKS5yZW1vdmVDbGFzcygncGluLXRvcCBwaW5uZWQgcGluLWJvdHRvbScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cblxuICAgICRpbmRleCA9IDA7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdW5pcXVlSWQgPSBNYXRlcmlhbGl6ZS5ndWlkKCksXG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICRvcmlnaW5hbF9vZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlUGluQ2xhc3NlcyhvYmplY3QpIHtcbiAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdwaW4tdG9wJyk7XG4gICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygncGlubmVkJyk7XG4gICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygncGluLWJvdHRvbScpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50cyhvYmplY3RzLCBzY3JvbGxlZCkge1xuICAgICAgICBvYmplY3RzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEFkZCBwb3NpdGlvbiBmaXhlZCAoYmVjYXVzZSBpdHMgYmV0d2VlbiB0b3AgYW5kIGJvdHRvbSlcbiAgICAgICAgICBpZiAob3B0aW9ucy50b3AgPD0gc2Nyb2xsZWQgJiYgb3B0aW9ucy5ib3R0b20gPj0gc2Nyb2xsZWQgJiYgISQodGhpcykuaGFzQ2xhc3MoJ3Bpbm5lZCcpKSB7XG4gICAgICAgICAgICByZW1vdmVQaW5DbGFzc2VzKCQodGhpcykpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIG9wdGlvbnMub2Zmc2V0KTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Bpbm5lZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBwaW4tdG9wICh3aGVuIHNjcm9sbGVkIHBvc2l0aW9uIGlzIGFib3ZlIHRvcClcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPCBvcHRpb25zLnRvcCAmJiAhJCh0aGlzKS5oYXNDbGFzcygncGluLXRvcCcpKSB7XG4gICAgICAgICAgICByZW1vdmVQaW5DbGFzc2VzKCQodGhpcykpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIDApO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGluLXRvcCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBwaW4tYm90dG9tICh3aGVuIHNjcm9sbGVkIHBvc2l0aW9uIGlzIGJlbG93IGJvdHRvbSlcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPiBvcHRpb25zLmJvdHRvbSAmJiAhJCh0aGlzKS5oYXNDbGFzcygncGluLWJvdHRvbScpKSB7XG4gICAgICAgICAgICByZW1vdmVQaW5DbGFzc2VzKCQodGhpcykpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGluLWJvdHRvbScpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIG9wdGlvbnMuYm90dG9tIC0gJG9yaWdpbmFsX29mZnNldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS5kYXRhKCdwdXNocGluLWlkJywgJHVuaXF1ZUlkKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzKCR0aGlzLCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwuJyArICR1bmlxdWVJZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgb3B0aW9ucy5vZmZzZXQ7XG4gICAgICAgIHVwZGF0ZUVsZW1lbnRzKCR0aGlzLCAkc2Nyb2xsZWQpO1xuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9O1xufSggalF1ZXJ5ICkpOzsoZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBqUXVlcnkgcmV2ZXJzZVxuICAgICQuZm4ucmV2ZXJzZSA9IFtdLnJldmVyc2U7XG5cbiAgICAvLyBIb3ZlciBiZWhhdmlvdXI6IG1ha2Ugc3VyZSB0aGlzIGRvZXNuJ3Qgd29yayBvbiAuY2xpY2stdG8tdG9nZ2xlIEZBQnMhXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlZW50ZXIuZml4ZWRBY3Rpb25CdG4nLCAnLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhciknLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgb3BlbkZBQk1lbnUoJHRoaXMpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWxlYXZlLmZpeGVkQWN0aW9uQnRuJywgJy5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNsb3NlRkFCTWVudSgkdGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBUb2dnbGUtb24tY2xpY2sgYmVoYXZpb3VyLlxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5mYWJDbGlja1RvZ2dsZScsICcuZml4ZWQtYWN0aW9uLWJ0bi5jbGljay10by10b2dnbGUgPiBhJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHZhciAkbWVudSA9ICR0aGlzLnBhcmVudCgpO1xuICAgICAgaWYgKCRtZW51Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBjbG9zZUZBQk1lbnUoJG1lbnUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlbkZBQk1lbnUoJG1lbnUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVG9vbGJhciB0cmFuc2l0aW9uIGJlaGF2aW91ci5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suZmFiVG9vbGJhcicsICcuZml4ZWQtYWN0aW9uLWJ0bi50b29sYmFyID4gYScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICB2YXIgJG1lbnUgPSAkdGhpcy5wYXJlbnQoKTtcbiAgICAgIEZBQnRvVG9vbGJhcigkbWVudSk7XG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgJC5mbi5leHRlbmQoe1xuICAgIG9wZW5GQUI6IGZ1bmN0aW9uKCkge1xuICAgICAgb3BlbkZBQk1lbnUoJCh0aGlzKSk7XG4gICAgfSxcbiAgICBjbG9zZUZBQjogZnVuY3Rpb24oKSB7XG4gICAgICBjbG9zZUZBQk1lbnUoJCh0aGlzKSk7XG4gICAgfSxcbiAgICBvcGVuVG9vbGJhcjogZnVuY3Rpb24oKSB7XG4gICAgICBGQUJ0b1Rvb2xiYXIoJCh0aGlzKSk7XG4gICAgfSxcbiAgICBjbG9zZVRvb2xiYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdG9vbGJhclRvRkFCKCQodGhpcykpO1xuICAgIH1cbiAgfSk7XG5cblxuICB2YXIgb3BlbkZBQk1lbnUgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgdmFyICR0aGlzID0gYnRuO1xuICAgIGlmICgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykgPT09IGZhbHNlKSB7XG5cbiAgICAgIC8vIEdldCBkaXJlY3Rpb24gb3B0aW9uXG4gICAgICB2YXIgaG9yaXpvbnRhbCA9ICR0aGlzLmhhc0NsYXNzKCdob3Jpem9udGFsJyk7XG4gICAgICB2YXIgb2Zmc2V0WSwgb2Zmc2V0WDtcblxuICAgICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgb2Zmc2V0WCA9IDQwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0WSA9IDQwO1xuICAgICAgfVxuXG4gICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkdGhpcy5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJykudmVsb2NpdHkoXG4gICAgICAgIHsgc2NhbGVZOiBcIi40XCIsIHNjYWxlWDogXCIuNFwiLCB0cmFuc2xhdGVZOiBvZmZzZXRZICsgJ3B4JywgdHJhbnNsYXRlWDogb2Zmc2V0WCArICdweCd9LFxuICAgICAgICB7IGR1cmF0aW9uOiAwIH0pO1xuXG4gICAgICB2YXIgdGltZSA9IDA7XG4gICAgICAkdGhpcy5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJykucmV2ZXJzZSgpLmVhY2goIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS52ZWxvY2l0eShcbiAgICAgICAgICB7IG9wYWNpdHk6IFwiMVwiLCBzY2FsZVg6IFwiMVwiLCBzY2FsZVk6IFwiMVwiLCB0cmFuc2xhdGVZOiBcIjBcIiwgdHJhbnNsYXRlWDogJzAnfSxcbiAgICAgICAgICB7IGR1cmF0aW9uOiA4MCwgZGVsYXk6IHRpbWUgfSk7XG4gICAgICAgIHRpbWUgKz0gNDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNsb3NlRkFCTWVudSA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICB2YXIgJHRoaXMgPSBidG47XG4gICAgLy8gR2V0IGRpcmVjdGlvbiBvcHRpb25cbiAgICB2YXIgaG9yaXpvbnRhbCA9ICR0aGlzLmhhc0NsYXNzKCdob3Jpem9udGFsJyk7XG4gICAgdmFyIG9mZnNldFksIG9mZnNldFg7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgb2Zmc2V0WCA9IDQwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRZID0gNDA7XG4gICAgfVxuXG4gICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHZhciB0aW1lID0gMDtcbiAgICAkdGhpcy5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJykudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eShcbiAgICAgIHsgb3BhY2l0eTogXCIwXCIsIHNjYWxlWDogXCIuNFwiLCBzY2FsZVk6IFwiLjRcIiwgdHJhbnNsYXRlWTogb2Zmc2V0WSArICdweCcsIHRyYW5zbGF0ZVg6IG9mZnNldFggKyAncHgnfSxcbiAgICAgIHsgZHVyYXRpb246IDgwIH1cbiAgICApO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBGQUIgaW50byB0b29sYmFyXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9iamVjdCBqUXVlcnkgb2JqZWN0XG4gICAqL1xuICB2YXIgRkFCdG9Ub29sYmFyID0gZnVuY3Rpb24oYnRuKSB7XG4gICAgaWYgKGJ0bi5hdHRyKCdkYXRhLW9wZW4nKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0WCwgb2Zmc2V0WSwgc2NhbGVGYWN0b3I7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgYnRuUmVjdCA9IGJ0blswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgYW5jaG9yID0gYnRuLmZpbmQoJz4gYScpLmZpcnN0KCk7XG4gICAgdmFyIG1lbnUgPSBidG4uZmluZCgnPiB1bCcpLmZpcnN0KCk7XG4gICAgdmFyIGJhY2tkcm9wID0gJCgnPGRpdiBjbGFzcz1cImZhYi1iYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgIHZhciBmYWJDb2xvciA9IGFuY2hvci5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICBhbmNob3IuYXBwZW5kKGJhY2tkcm9wKTtcblxuICAgIG9mZnNldFggPSBidG5SZWN0LmxlZnQgLSAod2luZG93V2lkdGggLyAyKSArIChidG5SZWN0LndpZHRoIC8gMik7XG4gICAgb2Zmc2V0WSA9IHdpbmRvd0hlaWdodCAtIGJ0blJlY3QuYm90dG9tO1xuICAgIHNjYWxlRmFjdG9yID0gd2luZG93V2lkdGggLyBiYWNrZHJvcC53aWR0aCgpO1xuICAgIGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1ib3R0b20nLCBidG5SZWN0LmJvdHRvbSk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLWxlZnQnLCBidG5SZWN0LmxlZnQpO1xuICAgIGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi13aWR0aCcsIGJ0blJlY3Qud2lkdGgpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgc3RhdGVcbiAgICBidG4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGJ0bi5hdHRyKCdkYXRhLW9wZW4nLCB0cnVlKTtcbiAgICBidG4uY3NzKHtcbiAgICAgICd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArIG9mZnNldFggKyAncHgpJyxcbiAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgIH0pO1xuICAgIGFuY2hvci5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgnICsgLW9mZnNldFkgKyAncHgpJyxcbiAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgIH0pO1xuICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXG4gICAgfSk7XG5cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBidG4uY3NzKHtcbiAgICAgICAgdHJhbnNmb3JtOiAnJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSwgYmFja2dyb3VuZC1jb2xvciAwcyBsaW5lYXIgLjJzJ1xuICAgICAgfSk7XG4gICAgICBhbmNob3IuY3NzKHtcbiAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMnXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgYnRuLmNzcyh7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICAgICAgfSk7XG4gICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoJyArIHNjYWxlRmFjdG9yICsgJyknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCknXG4gICAgICAgIH0pO1xuICAgICAgICBtZW51LmZpbmQoJz4gbGkgPiBhJykuY3NzKHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNjcm9sbCB0byBjbG9zZS5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwuZmFiVG9vbGJhckNsb3NlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdG9vbGJhclRvRkFCKGJ0bik7XG4gICAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLmZhYlRvb2xiYXJDbG9zZScpO1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2suZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KG1lbnUpLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9vbGJhclRvRkFCKGJ0bik7XG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLmZhYlRvb2xiYXJDbG9zZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdG9vbGJhciBiYWNrIGludG8gRkFCXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9iamVjdCBqUXVlcnkgb2JqZWN0XG4gICAqL1xuICB2YXIgdG9vbGJhclRvRkFCID0gZnVuY3Rpb24oYnRuKSB7XG4gICAgaWYgKGJ0bi5hdHRyKCdkYXRhLW9wZW4nKSAhPT0gXCJ0cnVlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0WCwgb2Zmc2V0WSwgc2NhbGVGYWN0b3I7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgYnRuV2lkdGggPSBidG4uYXR0cignZGF0YS1vcmlnaW4td2lkdGgnKTtcbiAgICB2YXIgYnRuQm90dG9tID0gYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLWJvdHRvbScpO1xuICAgIHZhciBidG5MZWZ0ID0gYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLWxlZnQnKTtcbiAgICB2YXIgYW5jaG9yID0gYnRuLmZpbmQoJz4gLmJ0bi1mbG9hdGluZycpLmZpcnN0KCk7XG4gICAgdmFyIG1lbnUgPSBidG4uZmluZCgnPiB1bCcpLmZpcnN0KCk7XG4gICAgdmFyIGJhY2tkcm9wID0gYnRuLmZpbmQoJy5mYWItYmFja2Ryb3AnKTtcbiAgICB2YXIgZmFiQ29sb3IgPSBhbmNob3IuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG5cbiAgICBvZmZzZXRYID0gYnRuTGVmdCAtICh3aW5kb3dXaWR0aCAvIDIpICsgKGJ0bldpZHRoIC8gMik7XG4gICAgb2Zmc2V0WSA9IHdpbmRvd0hlaWdodCAtIGJ0bkJvdHRvbTtcbiAgICBzY2FsZUZhY3RvciA9IHdpbmRvd1dpZHRoIC8gYmFja2Ryb3Aud2lkdGgoKTtcblxuXG4gICAgLy8gSGlkZSBiYWNrZHJvcFxuICAgIGJ0bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3BlbicsIGZhbHNlKTtcbiAgICBidG4uY3NzKHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgIH0pO1xuICAgIGFuY2hvci5jc3Moe1xuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICB9KTtcbiAgICBtZW51LmZpbmQoJz4gbGkgPiBhJykuY3NzKHtcbiAgICAgIG9wYWNpdHk6ICcnXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgYmFja2Ryb3AucmVtb3ZlKCk7XG5cbiAgICAgIC8vIFNldCBpbml0aWFsIHN0YXRlLlxuICAgICAgYnRuLmNzcyh7XG4gICAgICAgICd0ZXh0LWFsaWduJzogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgYm90dG9tOiAnJyxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIC1vZmZzZXRYICsgJ3B4LDAsMCknXG4gICAgICB9KTtcbiAgICAgIGFuY2hvci5jc3Moe1xuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsJyArIG9mZnNldFkgKyAncHgsMCknXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgYnRuLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycydcbiAgICAgICAgfSk7XG4gICAgICAgIGFuY2hvci5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKSdcbiAgICAgICAgfSk7XG4gICAgICB9LCAyMCk7XG4gICAgfSwgMjAwKTtcbiAgfTtcblxuXG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gIC8vIEltYWdlIHRyYW5zaXRpb24gZnVuY3Rpb25cbiAgTWF0ZXJpYWxpemUuZmFkZUluSW1hZ2UgPSBmdW5jdGlvbihzZWxlY3Rvck9yRWwpIHtcbiAgICB2YXIgZWxlbWVudDtcbiAgICBpZiAodHlwZW9mKHNlbGVjdG9yT3JFbCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbGVtZW50ID0gJChzZWxlY3Rvck9yRWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHNlbGVjdG9yT3JFbCkgPT09ICdvYmplY3QnKSB7XG4gICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQuY3NzKHtvcGFjaXR5OiAwfSk7XG4gICAgJChlbGVtZW50KS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtcbiAgICAgIGR1cmF0aW9uOiA2NTAsXG4gICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICBlYXNpbmc6ICdlYXNlT3V0U2luZSdcbiAgICB9KTtcbiAgICAkKGVsZW1lbnQpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge1xuICAgICAgZHVyYXRpb246IDEzMDAsXG4gICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICBlYXNpbmc6ICdzd2luZycsXG4gICAgICBzdGVwOiBmdW5jdGlvbihub3csIGZ4KSB7XG4gICAgICAgIGZ4LnN0YXJ0ID0gMTAwO1xuICAgICAgICB2YXIgZ3JheXNjYWxlX3NldHRpbmcgPSBub3cvMTAwO1xuICAgICAgICB2YXIgYnJpZ2h0bmVzc19zZXR0aW5nID0gMTUwIC0gKDEwMCAtIG5vdykvMS43NTtcblxuICAgICAgICBpZiAoYnJpZ2h0bmVzc19zZXR0aW5nIDwgMTAwKSB7XG4gICAgICAgICAgYnJpZ2h0bmVzc19zZXR0aW5nID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub3cgPj0gMCkge1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICAgXCItd2Via2l0LWZpbHRlclwiOiBcImdyYXlzY2FsZShcIitncmF5c2NhbGVfc2V0dGluZytcIilcIiArIFwiYnJpZ2h0bmVzcyhcIiticmlnaHRuZXNzX3NldHRpbmcrXCIlKVwiLFxuICAgICAgICAgICAgICBcImZpbHRlclwiOiBcImdyYXlzY2FsZShcIitncmF5c2NhbGVfc2V0dGluZytcIilcIiArIFwiYnJpZ2h0bmVzcyhcIiticmlnaHRuZXNzX3NldHRpbmcrXCIlKVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBIb3Jpem9udGFsIHN0YWdnZXJlZCBsaXN0XG4gIE1hdGVyaWFsaXplLnNob3dTdGFnZ2VyZWRMaXN0ID0gZnVuY3Rpb24oc2VsZWN0b3JPckVsKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudCA9ICQoc2VsZWN0b3JPckVsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnb2JqZWN0Jykge1xuICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZSA9IDA7XG4gICAgZWxlbWVudC5maW5kKCdsaScpLnZlbG9jaXR5KFxuICAgICAgICB7IHRyYW5zbGF0ZVg6IFwiLTEwMHB4XCJ9LFxuICAgICAgICB7IGR1cmF0aW9uOiAwIH0pO1xuXG4gICAgZWxlbWVudC5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnZlbG9jaXR5KFxuICAgICAgICB7IG9wYWNpdHk6IFwiMVwiLCB0cmFuc2xhdGVYOiBcIjBcIn0sXG4gICAgICAgIHsgZHVyYXRpb246IDgwMCwgZGVsYXk6IHRpbWUsIGVhc2luZzogWzYwLCAxMF0gfSk7XG4gICAgICB0aW1lICs9IDEyMDtcbiAgICB9KTtcbiAgfTtcblxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEhhcmRjb2RlZCAuc3RhZ2dlcmVkLWxpc3Qgc2Nyb2xsRmlyZVxuICAgIC8vIHZhciBzdGFnZ2VyZWRMaXN0T3B0aW9ucyA9IFtdO1xuICAgIC8vICQoJ3VsLnN0YWdnZXJlZC1saXN0JykuZWFjaChmdW5jdGlvbiAoaSkge1xuXG4gICAgLy8gICB2YXIgbGFiZWwgPSAnc2Nyb2xsRmlyZS0nICsgaTtcbiAgICAvLyAgICQodGhpcykuYWRkQ2xhc3MobGFiZWwpO1xuICAgIC8vICAgc3RhZ2dlcmVkTGlzdE9wdGlvbnMucHVzaChcbiAgICAvLyAgICAge3NlbGVjdG9yOiAndWwuc3RhZ2dlcmVkLWxpc3QuJyArIGxhYmVsLFxuICAgIC8vICAgICAgb2Zmc2V0OiAyMDAsXG4gICAgLy8gICAgICBjYWxsYmFjazogJ3Nob3dTdGFnZ2VyZWRMaXN0KFwidWwuc3RhZ2dlcmVkLWxpc3QuJyArIGxhYmVsICsgJ1wiKSd9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBzY3JvbGxGaXJlKHN0YWdnZXJlZExpc3RPcHRpb25zKTtcblxuICAgIC8vIEhhbW1lckpTLCBTd2lwZSBuYXZpZ2F0aW9uXG5cbiAgICAvLyBUb3VjaCBFdmVudFxuICAgIHZhciBzd2lwZUxlZnQgPSBmYWxzZTtcbiAgICB2YXIgc3dpcGVSaWdodCA9IGZhbHNlO1xuXG5cbiAgICAvLyBEaXNtaXNzaWJsZSBDb2xsZWN0aW9uc1xuICAgICQoJy5kaXNtaXNzYWJsZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLmhhbW1lcih7XG4gICAgICAgIHByZXZlbnRfZGVmYXVsdDogZmFsc2VcbiAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZS5nZXN0dXJlLmRpcmVjdGlvbjtcbiAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5kZWx0YVg7XG4gICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XG5cbiAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IHhcbiAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcblxuICAgICAgICAgIC8vIFN3aXBlIExlZnRcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSA0ICYmICh4ID4gKCR0aGlzLmlubmVyV2lkdGgoKSAvIDIpIHx8IHZlbG9jaXR5WCA8IC0wLjc1KSkge1xuICAgICAgICAgICAgc3dpcGVMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTd2lwZSBSaWdodFxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDIgJiYgKHggPCAoLTEgKiAkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPiAwLjc1KSkge1xuICAgICAgICAgICAgc3dpcGVSaWdodCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5iaW5kKCdwYW5lbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIFJlc2V0IGlmIGNvbGxlY3Rpb24gaXMgbW92ZWQgYmFjayBpbnRvIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIGlmIChNYXRoLmFicyhlLmdlc3R1cmUuZGVsdGFYKSA8ICgkKHRoaXMpLmlubmVyV2lkdGgoKSAvIDIpKSB7XG4gICAgICAgICAgc3dpcGVSaWdodCA9IGZhbHNlO1xuICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoc3dpcGVMZWZ0IHx8IHN3aXBlUmlnaHQpIHtcbiAgICAgICAgICAgIHZhciBmdWxsV2lkdGg7XG4gICAgICAgICAgICBpZiAoc3dpcGVMZWZ0KSB7IGZ1bGxXaWR0aCA9ICR0aGlzLmlubmVyV2lkdGgoKTsgfVxuICAgICAgICAgICAgZWxzZSB7IGZ1bGxXaWR0aCA9IC0xICogJHRoaXMuaW5uZXJXaWR0aCgpOyB9XG5cbiAgICAgICAgICAgICR0aGlzLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogZnVsbFdpZHRoLFxuICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDEwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGNvbXBsZXRlOlxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5jc3MoJ2JvcmRlcicsICdub25lJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMudmVsb2NpdHkoeyBoZWlnaHQ6IDAsIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGNvbXBsZXRlOlxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgJHRoaXMucmVtb3ZlKCk7IH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDAsXG4gICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMTAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzd2lwZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBzd2lwZVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuICAgIC8vIHRpbWUgPSAwXG4gICAgLy8gLy8gVmVydGljYWwgU3RhZ2dlcmVkIGxpc3RcbiAgICAvLyAkKCd1bC5zdGFnZ2VyZWQtbGlzdC52ZXJ0aWNhbCBsaScpLnZlbG9jaXR5KFxuICAgIC8vICAgICB7IHRyYW5zbGF0ZVk6IFwiMTAwcHhcIn0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDAgfSk7XG5cbiAgICAvLyAkKCd1bC5zdGFnZ2VyZWQtbGlzdC52ZXJ0aWNhbCBsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAkKHRoaXMpLnZlbG9jaXR5KFxuICAgIC8vICAgICB7IG9wYWNpdHk6IFwiMVwiLCB0cmFuc2xhdGVZOiBcIjBcIn0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDgwMCwgZGVsYXk6IHRpbWUsIGVhc2luZzogWzYwLCAyNV0gfSk7XG4gICAgLy8gICB0aW1lICs9IDEyMDtcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIEZhZGUgaW4gYW5kIFNjYWxlXG4gICAgLy8gJCgnLmZhZGUtaW4uc2NhbGUnKS52ZWxvY2l0eShcbiAgICAvLyAgICAgeyBzY2FsZVg6IC40LCBzY2FsZVk6IC40LCB0cmFuc2xhdGVYOiAtNjAwfSxcbiAgICAvLyAgICAgeyBkdXJhdGlvbjogMH0pO1xuICAgIC8vICQoJy5mYWRlLWluJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAvLyAgICQodGhpcykudmVsb2NpdHkoXG4gICAgLy8gICAgIHsgb3BhY2l0eTogXCIxXCIsIHNjYWxlWDogMSwgc2NhbGVZOiAxLCB0cmFuc2xhdGVYOiAwfSxcbiAgICAvLyAgICAgeyBkdXJhdGlvbjogODAwLCBlYXNpbmc6IFs2MCwgMTBdIH0pO1xuICAgIC8vIH0pO1xuICB9KTtcbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24oJCkge1xuXG4gIHZhciBzY3JvbGxGaXJlRXZlbnRzSGFuZGxlZCA9IGZhbHNlO1xuXG4gIC8vIElucHV0OiBBcnJheSBvZiBKU09OIG9iamVjdHMge3NlbGVjdG9yLCBvZmZzZXQsIGNhbGxiYWNrfVxuICBNYXRlcmlhbGl6ZS5zY3JvbGxGaXJlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBvblNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgb3B0aW9ucyBmcm9tIGVhY2ggbGluZVxuICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb25zW2ldO1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSB2YWx1ZS5zZWxlY3RvcixcbiAgICAgICAgICAgIG9mZnNldCA9IHZhbHVlLm9mZnNldCxcbiAgICAgICAgICAgIGNhbGxiYWNrID0gdmFsdWUuY2FsbGJhY2s7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGlmICggY3VycmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9IGN1cnJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGwgPiAoZWxlbWVudE9mZnNldCArIG9mZnNldCkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5kb25lICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBjdXJyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tGdW5jID0gbmV3IEZ1bmN0aW9uKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMoY3VycmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhbHVlLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cblxuICAgIHZhciB0aHJvdHRsZWRTY3JvbGwgPSBNYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpIHtcbiAgICAgIG9uU2Nyb2xsKCk7XG4gICAgfSwgb3B0aW9ucy50aHJvdHRsZSB8fCAxMDApO1xuXG4gICAgaWYgKCFzY3JvbGxGaXJlRXZlbnRzSGFuZGxlZCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhyb3R0bGVkU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRocm90dGxlZFNjcm9sbCk7XG4gICAgICBzY3JvbGxGaXJlRXZlbnRzSGFuZGxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gcGVyZm9ybSBhIHNjYW4gb25jZSwgYWZ0ZXIgY3VycmVudCBleGVjdXRpb24gY29udGV4dCwgYW5kIGFmdGVyIGRvbSBpcyByZWFkeVxuICAgIHNldFRpbWVvdXQodGhyb3R0bGVkU2Nyb2xsLCAwKTtcbiAgfTtcblxufSkoalF1ZXJ5KTtcbjsvKiFcbiAqIHBpY2thZGF0ZS5qcyB2My41LjAsIDIwMTQvMDQvMTNcbiAqIEJ5IEFtc3VsLCBodHRwOi8vYW1zdWwuY2FcbiAqIEhvc3RlZCBvbiBodHRwOi8vYW1zdWwuZ2l0aHViLmlvL3BpY2thZGF0ZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKi9cblxuKGZ1bmN0aW9uICggZmFjdG9yeSApIHtcblxuICAgIC8vIEFNRC5cbiAgICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kIClcbiAgICAgICAgZGVmaW5lKCAncGlja2VyJywgWydqcXVlcnknXSwgZmFjdG9yeSApXG5cbiAgICAvLyBOb2RlLmpzL2Jyb3dzZXJpZnkuXG4gICAgZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnIClcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCByZXF1aXJlKCdqcXVlcnknKSApXG5cbiAgICAvLyBCcm93c2VyIGdsb2JhbHMuXG4gICAgZWxzZSB0aGlzLlBpY2tlciA9IGZhY3RvcnkoIGpRdWVyeSApXG5cbn0oZnVuY3Rpb24oICQgKSB7XG5cbnZhciAkd2luZG93ID0gJCggd2luZG93IClcbnZhciAkZG9jdW1lbnQgPSAkKCBkb2N1bWVudCApXG52YXIgJGh0bWwgPSAkKCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgKVxuXG5cbi8qKlxuICogVGhlIHBpY2tlciBjb25zdHJ1Y3RvciB0aGF0IGNyZWF0ZXMgYSBibGFuayBwaWNrZXIuXG4gKi9cbmZ1bmN0aW9uIFBpY2tlckNvbnN0cnVjdG9yKCBFTEVNRU5ULCBOQU1FLCBDT01QT05FTlQsIE9QVElPTlMgKSB7XG5cbiAgICAvLyBJZiB0aGVyZeKAmXMgbm8gZWxlbWVudCwgcmV0dXJuIHRoZSBwaWNrZXIgY29uc3RydWN0b3IuXG4gICAgaWYgKCAhRUxFTUVOVCApIHJldHVybiBQaWNrZXJDb25zdHJ1Y3RvclxuXG5cbiAgICB2YXJcbiAgICAgICAgSVNfREVGQVVMVF9USEVNRSA9IGZhbHNlLFxuXG5cbiAgICAgICAgLy8gVGhlIHN0YXRlIG9mIHRoZSBwaWNrZXIuXG4gICAgICAgIFNUQVRFID0ge1xuICAgICAgICAgICAgaWQ6IEVMRU1FTlQuaWQgfHwgJ1AnICsgTWF0aC5hYnMoIH5+KE1hdGgucmFuZG9tKCkgKiBuZXcgRGF0ZSgpKSApXG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdHMgYW5kIG9wdGlvbnMgcGFzc2VkLlxuICAgICAgICBTRVRUSU5HUyA9IENPTVBPTkVOVCA/ICQuZXh0ZW5kKCB0cnVlLCB7fSwgQ09NUE9ORU5ULmRlZmF1bHRzLCBPUFRJT05TICkgOiBPUFRJT05TIHx8IHt9LFxuXG5cbiAgICAgICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHQgY2xhc3NlcyB3aXRoIHRoZSBzZXR0aW5ncyBjbGFzc2VzLlxuICAgICAgICBDTEFTU0VTID0gJC5leHRlbmQoIHt9LCBQaWNrZXJDb25zdHJ1Y3Rvci5rbGFzc2VzKCksIFNFVFRJTkdTLmtsYXNzICksXG5cblxuICAgICAgICAvLyBUaGUgZWxlbWVudCBub2RlIHdyYXBwZXIgaW50byBhIGpRdWVyeSBvYmplY3QuXG4gICAgICAgICRFTEVNRU5UID0gJCggRUxFTUVOVCApLFxuXG5cbiAgICAgICAgLy8gUHNldWRvIHBpY2tlciBjb25zdHJ1Y3Rvci5cbiAgICAgICAgUGlja2VySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KClcbiAgICAgICAgfSxcblxuXG4gICAgICAgIC8vIFRoZSBwaWNrZXIgcHJvdG90eXBlLlxuICAgICAgICBQID0gUGlja2VySW5zdGFuY2UucHJvdG90eXBlID0ge1xuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcjogUGlja2VySW5zdGFuY2UsXG5cbiAgICAgICAgICAgICRub2RlOiAkRUxFTUVOVCxcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluaXRpYWxpemUgZXZlcnl0aGluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBzdGFydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGlmICggU1RBVEUgJiYgU1RBVEUuc3RhcnQgKSByZXR1cm4gUFxuXG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHBpY2tlciBzdGF0ZXMuXG4gICAgICAgICAgICAgICAgU1RBVEUubWV0aG9kcyA9IHt9XG4gICAgICAgICAgICAgICAgU1RBVEUuc3RhcnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgU1RBVEUub3BlbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgU1RBVEUudHlwZSA9IEVMRU1FTlQudHlwZVxuXG5cbiAgICAgICAgICAgICAgICAvLyBDb25maXJtIGZvY3VzIHN0YXRlLCBjb252ZXJ0IGludG8gdGV4dCBpbnB1dCB0byByZW1vdmUgVUEgc3R5bGluZ3MsXG4gICAgICAgICAgICAgICAgLy8gYW5kIHNldCBhcyByZWFkb25seSB0byBwcmV2ZW50IGtleWJvYXJkIHBvcHVwLlxuICAgICAgICAgICAgICAgIEVMRU1FTlQuYXV0b2ZvY3VzID0gRUxFTUVOVCA9PSBnZXRBY3RpdmVFbGVtZW50KClcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnJlYWRPbmx5ID0gIVNFVFRJTkdTLmVkaXRhYmxlXG4gICAgICAgICAgICAgICAgRUxFTUVOVC5pZCA9IEVMRU1FTlQuaWQgfHwgU1RBVEUuaWRcbiAgICAgICAgICAgICAgICBpZiAoIEVMRU1FTlQudHlwZSAhPSAndGV4dCcgKSB7XG4gICAgICAgICAgICAgICAgICAgIEVMRU1FTlQudHlwZSA9ICd0ZXh0J1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBpY2tlciBjb21wb25lbnQgd2l0aCB0aGUgc2V0dGluZ3MuXG4gICAgICAgICAgICAgICAgUC5jb21wb25lbnQgPSBuZXcgQ09NUE9ORU5UKFAsIFNFVFRJTkdTKVxuXG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHBpY2tlciByb290IHdpdGggYSBob2xkZXIgYW5kIHRoZW4gcHJlcGFyZSBpdC5cbiAgICAgICAgICAgICAgICBQLiRyb290ID0gJCggUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCdkaXYnLCBjcmVhdGVXcmFwcGVkQ29tcG9uZW50KCksIENMQVNTRVMucGlja2VyLCAnaWQ9XCInICsgRUxFTUVOVC5pZCArICdfcm9vdFwiIHRhYmluZGV4PVwiMFwiJykgKVxuICAgICAgICAgICAgICAgIHByZXBhcmVFbGVtZW50Um9vdCgpXG5cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGZvcm1hdCBmb3IgdGhlIGhpZGRlbiBpbnB1dCBlbGVtZW50LCBjcmVhdGUgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgaWYgKCBTRVRUSU5HUy5mb3JtYXRTdWJtaXQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVFbGVtZW50SGlkZGVuKClcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnQoKVxuXG5cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGhlIHJvb3QgYXMgc3BlY2lmaWVkIGluIHRoZSBzZXR0aW5ncy5cbiAgICAgICAgICAgICAgICBpZiAoIFNFVFRJTkdTLmNvbnRhaW5lciApICQoIFNFVFRJTkdTLmNvbnRhaW5lciApLmFwcGVuZCggUC4kcm9vdCApXG4gICAgICAgICAgICAgICAgZWxzZSAkRUxFTUVOVC5hZnRlciggUC4kcm9vdCApXG5cblxuICAgICAgICAgICAgICAgIC8vIEJpbmQgdGhlIGRlZmF1bHQgY29tcG9uZW50IGFuZCBzZXR0aW5ncyBldmVudHMuXG4gICAgICAgICAgICAgICAgUC5vbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBQLmNvbXBvbmVudC5vblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IFAuY29tcG9uZW50Lm9uUmVuZGVyLFxuICAgICAgICAgICAgICAgICAgICBzdG9wOiBQLmNvbXBvbmVudC5vblN0b3AsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IFAuY29tcG9uZW50Lm9uT3BlbixcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IFAuY29tcG9uZW50Lm9uQ2xvc2UsXG4gICAgICAgICAgICAgICAgICAgIHNldDogUC5jb21wb25lbnQub25TZXRcbiAgICAgICAgICAgICAgICB9KS5vbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBTRVRUSU5HUy5vblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IFNFVFRJTkdTLm9uUmVuZGVyLFxuICAgICAgICAgICAgICAgICAgICBzdG9wOiBTRVRUSU5HUy5vblN0b3AsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IFNFVFRJTkdTLm9uT3BlbixcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IFNFVFRJTkdTLm9uQ2xvc2UsXG4gICAgICAgICAgICAgICAgICAgIHNldDogU0VUVElOR1Mub25TZXRcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAvLyBPbmNlIHdl4oCZcmUgYWxsIHNldCwgY2hlY2sgdGhlIHRoZW1lIGluIHVzZS5cbiAgICAgICAgICAgICAgICBJU19ERUZBVUxUX1RIRU1FID0gaXNVc2luZ0RlZmF1bHRUaGVtZSggUC4kcm9vdC5jaGlsZHJlbigpWyAwIF0gKVxuXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYXV0b2ZvY3VzLCBvcGVuIHRoZSBwaWNrZXIuXG4gICAgICAgICAgICAgICAgaWYgKCBFTEVNRU5ULmF1dG9mb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5vcGVuKClcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgcXVldWVkIHRoZSDigJxzdGFydOKAnSBhbmQg4oCccmVuZGVy4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAnc3RhcnQnICkudHJpZ2dlciggJ3JlbmRlcicgKVxuICAgICAgICAgICAgfSwgLy9zdGFydFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVuZGVyIGEgbmV3IHBpY2tlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCBlbnRpcmVDb21wb25lbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYSBuZXcgY29tcG9uZW50IGhvbGRlciBpbiB0aGUgcm9vdCBvciBib3guXG4gICAgICAgICAgICAgICAgaWYgKCBlbnRpcmVDb21wb25lbnQgKSBQLiRyb290Lmh0bWwoIGNyZWF0ZVdyYXBwZWRDb21wb25lbnQoKSApXG4gICAgICAgICAgICAgICAgZWxzZSBQLiRyb290LmZpbmQoICcuJyArIENMQVNTRVMuYm94ICkuaHRtbCggUC5jb21wb25lbnQubm9kZXMoIFNUQVRFLm9wZW4gKSApXG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBxdWV1ZWQg4oCccmVuZGVy4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAncmVuZGVyJyApXG4gICAgICAgICAgICB9LCAvL3JlbmRlclxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVzdHJveSBldmVyeXRoaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFscmVhZHkgc3RvcHBlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBpZiAoICFTVEFURS5zdGFydCApIHJldHVybiBQXG5cbiAgICAgICAgICAgICAgICAvLyBUaGVuIGNsb3NlIHRoZSBwaWNrZXIuXG4gICAgICAgICAgICAgICAgUC5jbG9zZSgpXG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGhpZGRlbiBmaWVsZC5cbiAgICAgICAgICAgICAgICBpZiAoIFAuX2hpZGRlbiApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5faGlkZGVuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIFAuX2hpZGRlbiApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSByb290LlxuICAgICAgICAgICAgICAgIFAuJHJvb3QucmVtb3ZlKClcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaW5wdXQgY2xhc3MsIHJlbW92ZSB0aGUgc3RvcmVkIGRhdGEsIGFuZCB1bmJpbmRcbiAgICAgICAgICAgICAgICAvLyB0aGUgZXZlbnRzIChhZnRlciBhIHRpY2sgZm9yIElFIC0gc2VlIGBQLmNsb3NlYCkuXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQucmVtb3ZlQ2xhc3MoIENMQVNTRVMuaW5wdXQgKS5yZW1vdmVEYXRhKCBOQU1FIClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJEVMRU1FTlQub2ZmKCAnLicgKyBTVEFURS5pZCApXG4gICAgICAgICAgICAgICAgfSwgMClcblxuICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGVsZW1lbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnR5cGUgPSBTVEFURS50eXBlXG4gICAgICAgICAgICAgICAgRUxFTUVOVC5yZWFkT25seSA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBxdWV1ZWQg4oCcc3RvcOKAnSBldmVudHMuXG4gICAgICAgICAgICAgICAgUC50cmlnZ2VyKCAnc3RvcCcgKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHBpY2tlciBzdGF0ZXMuXG4gICAgICAgICAgICAgICAgU1RBVEUubWV0aG9kcyA9IHt9XG4gICAgICAgICAgICAgICAgU1RBVEUuc3RhcnQgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBcbiAgICAgICAgICAgIH0sIC8vc3RvcFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3BlbiB1cCB0aGUgcGlja2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBkb250R2l2ZUZvY3VzICkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFscmVhZHkgb3BlbiwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIFNUQVRFLm9wZW4gKSByZXR1cm4gUFxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSDigJxhY3RpdmXigJ0gY2xhc3MuXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQuYWRkQ2xhc3MoIENMQVNTRVMuYWN0aXZlIClcbiAgICAgICAgICAgICAgICBhcmlhKCBFTEVNRU5ULCAnZXhwYW5kZWQnLCB0cnVlIClcblxuICAgICAgICAgICAgICAgIC8vICogQSBGaXJlZm94IGJ1Zywgd2hlbiBgaHRtbGAgaGFzIGBvdmVyZmxvdzpoaWRkZW5gLCByZXN1bHRzIGluXG4gICAgICAgICAgICAgICAgLy8gICBraWxsaW5nIHRyYW5zaXRpb25zIDooLiBTbyBhZGQgdGhlIOKAnG9wZW5lZOKAnSBzdGF0ZSBvbiB0aGUgbmV4dCB0aWNrLlxuICAgICAgICAgICAgICAgIC8vICAgQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MjUyODlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIOKAnG9wZW5lZOKAnSBjbGFzcyB0byB0aGUgcGlja2VyIHJvb3QuXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QuYWRkQ2xhc3MoIENMQVNTRVMub3BlbmVkIClcbiAgICAgICAgICAgICAgICAgICAgYXJpYSggUC4kcm9vdFswXSwgJ2hpZGRlbicsIGZhbHNlIClcblxuICAgICAgICAgICAgICAgIH0sIDAgKVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0byBnaXZlIGZvY3VzLCBiaW5kIHRoZSBlbGVtZW50IGFuZCBkb2MgZXZlbnRzLlxuICAgICAgICAgICAgICAgIGlmICggZG9udEdpdmVGb2N1cyAhPT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGl0IGFzIG9wZW4uXG4gICAgICAgICAgICAgICAgICAgIFNUQVRFLm9wZW4gPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgcGFnZSBmcm9tIHNjcm9sbGluZy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBJU19ERUZBVUxUX1RIRU1FICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzKCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyApLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcyggJ3BhZGRpbmctcmlnaHQnLCAnKz0nICsgZ2V0U2Nyb2xsYmFyV2lkdGgoKSApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGZvY3VzIHRvIHRoZSByb290IGVsZW1lbnTigJlzIGpRdWVyeSBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgIC8vICogV29ya2Fyb3VuZCBmb3IgaU9TOCB0byBicmluZyB0aGUgcGlja2Vy4oCZcyByb290IGludG8gdmlldy5cbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5lcSgwKS5mb2N1cygpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmluZCB0aGUgZG9jdW1lbnQgZXZlbnRzLlxuICAgICAgICAgICAgICAgICAgICAkZG9jdW1lbnQub24oICdjbGljay4nICsgU1RBVEUuaWQgKyAnIGZvY3VzaW4uJyArIFNUQVRFLmlkLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBvZiB0aGUgZXZlbnQgaXMgbm90IHRoZSBlbGVtZW50LCBjbG9zZSB0aGUgcGlja2VyIHBpY2tlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICogRG9u4oCZdCB3b3JyeSBhYm91dCBjbGlja3Mgb3IgZm9jdXNpbnMgb24gdGhlIHJvb3QgYmVjYXVzZSB0aG9zZSBkb27igJl0IGJ1YmJsZSB1cC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgQWxzbywgZm9yIEZpcmVmb3gsIGEgY2xpY2sgb24gYW4gYG9wdGlvbmAgZWxlbWVudCBidWJibGVzIHVwIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRvIHRoZSBkb2MuIFNvIG1ha2Ugc3VyZSB0aGUgdGFyZ2V0IHdhc24ndCB0aGUgZG9jLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBJbiBGaXJlZm94IHN0b3BQcm9wYWdhdGlvbigpIGRvZXNu4oCZdCBwcmV2ZW50IHJpZ2h0LWNsaWNrIGV2ZW50cyBmcm9tIGJ1YmJsaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3aGljaCBjYXVzZXMgdGhlIHBpY2tlciB0byB1bmV4cGVjdGVkbHkgY2xvc2Ugd2hlbiByaWdodC1jbGlja2luZyBpdC4gU28gbWFrZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBzdXJlIHRoZSBldmVudCB3YXNu4oCZdCBhIHJpZ2h0LWNsaWNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXQgIT0gRUxFTUVOVCAmJiB0YXJnZXQgIT0gZG9jdW1lbnQgJiYgZXZlbnQud2hpY2ggIT0gMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgd2FzIHRoZSBob2xkZXIgdGhhdCBjb3ZlcnMgdGhlIHNjcmVlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZSBlbGVtZW50IGZvY3VzZWQgdG8gbWFpbnRhaW4gdGFiaW5kZXguXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5jbG9zZSggdGFyZ2V0ID09PSBQLiRyb290LmNoaWxkcmVuKClbMF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pLm9uKCAna2V5ZG93bi4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCBldmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBrZXljb2RlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWNvZGUgPSBldmVudC5rZXlDb2RlLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNsYXRlIHRoYXQgdG8gYSBzZWxlY3Rpb24gY2hhbmdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWNvZGVUb01vdmUgPSBQLmNvbXBvbmVudC5rZXlbIGtleWNvZGUgXSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdyYWIgdGhlIHRhcmdldC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXRcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiBlc2NhcGUsIGNsb3NlIHRoZSBwaWNrZXIgYW5kIGdpdmUgZm9jdXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGtleWNvZGUgPT0gMjcgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBrZXkgbW92ZW1lbnQgb3Ig4oCcZW50ZXLigJ0ga2V5cHJlc3Mgb24gdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0ID09IFAuJHJvb3RbMF0gJiYgKCBrZXljb2RlVG9Nb3ZlIHx8IGtleWNvZGUgPT0gMTMgKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIHRvIHN0b3AgcGFnZSBtb3ZlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBrZXkgbW92ZW1lbnQgYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgga2V5Y29kZVRvTW92ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBQLmNvbXBvbmVudC5rZXkuZ28sIFAsIFsgUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBrZXljb2RlVG9Nb3ZlICkgXSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24g4oCcZW50ZXLigJ0sIGlmIHRoZSBoaWdobGlnaHRlZCBpdGVtIGlzbuKAmXQgZGlzYWJsZWQsIHNldCB0aGUgdmFsdWUgYW5kIGNsb3NlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhUC4kcm9vdC5maW5kKCAnLicgKyBDTEFTU0VTLmhpZ2hsaWdodGVkICkuaGFzQ2xhc3MoIENMQVNTRVMuZGlzYWJsZWQgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5zZXQoICdzZWxlY3QnLCBQLmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCApLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyB3aXRoaW4gdGhlIHJvb3QgYW5kIOKAnGVudGVy4oCdIGlzIHByZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiBhbmQgdHJpZ2dlciBhIGNsaWNrIG9uIHRoZSB0YXJnZXQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAkLmNvbnRhaW5zKCBQLiRyb290WzBdLCB0YXJnZXQgKSAmJiBrZXljb2RlID09IDEzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxvcGVu4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAnb3BlbicgKVxuICAgICAgICAgICAgfSwgLy9vcGVuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbG9zZSB0aGUgcGlja2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZ2l2ZUZvY3VzICkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBnaXZlIGZvY3VzLCBkbyBpdCBiZWZvcmUgY2hhbmdpbmcgc3RhdGVzLlxuICAgICAgICAgICAgICAgIGlmICggZ2l2ZUZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAuLi4uYWggeWVzISBJdCB3b3VsZOKAmXZlIGJlZW4gaW5jb21wbGV0ZSB3aXRob3V0IGEgY3Jhenkgd29ya2Fyb3VuZCBmb3IgSUUgOnxcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZvY3VzIGlzIHRyaWdnZXJlZCAqYWZ0ZXIqIHRoZSBjbG9zZSBoYXMgY29tcGxldGVkIC0gY2F1c2luZyBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBvcGVuIGFnYWluLiBTbyB1bmJpbmQgYW5kIHJlYmluZCB0aGUgZXZlbnQgYXQgdGhlIG5leHQgdGljay5cbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5vZmYoICdmb2N1cy50b09wZW4nICkuZXEoMCkuZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFAuJHJvb3Qub24oICdmb2N1cy50b09wZW4nLCBoYW5kbGVGb2N1c1RvT3BlbkV2ZW50IClcbiAgICAgICAgICAgICAgICAgICAgfSwgMCApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSDigJxhY3RpdmXigJ0gY2xhc3MuXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQucmVtb3ZlQ2xhc3MoIENMQVNTRVMuYWN0aXZlIClcbiAgICAgICAgICAgICAgICBhcmlhKCBFTEVNRU5ULCAnZXhwYW5kZWQnLCBmYWxzZSApXG5cbiAgICAgICAgICAgICAgICAvLyAqIEEgRmlyZWZveCBidWcsIHdoZW4gYGh0bWxgIGhhcyBgb3ZlcmZsb3c6aGlkZGVuYCwgcmVzdWx0cyBpblxuICAgICAgICAgICAgICAgIC8vICAga2lsbGluZyB0cmFuc2l0aW9ucyA6KC4gU28gcmVtb3ZlIHRoZSDigJxvcGVuZWTigJ0gc3RhdGUgb24gdGhlIG5leHQgdGljay5cbiAgICAgICAgICAgICAgICAvLyAgIEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjI1Mjg5XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSDigJxvcGVuZWTigJ0gYW5kIOKAnGZvY3VzZWTigJ0gY2xhc3MgZnJvbSB0aGUgcGlja2VyIHJvb3QuXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QucmVtb3ZlQ2xhc3MoIENMQVNTRVMub3BlbmVkICsgJyAnICsgQ0xBU1NFUy5mb2N1c2VkIClcbiAgICAgICAgICAgICAgICAgICAgYXJpYSggUC4kcm9vdFswXSwgJ2hpZGRlbicsIHRydWUgKVxuXG4gICAgICAgICAgICAgICAgfSwgMCApXG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBjbG9zZWQsIGRvIG5vdGhpbmcgbW9yZS5cbiAgICAgICAgICAgICAgICBpZiAoICFTVEFURS5vcGVuICkgcmV0dXJuIFBcblxuICAgICAgICAgICAgICAgIC8vIFNldCBpdCBhcyBjbG9zZWQuXG4gICAgICAgICAgICAgICAgU1RBVEUub3BlbiA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgcGFnZSB0byBzY3JvbGwuXG4gICAgICAgICAgICAgICAgaWYgKCBJU19ERUZBVUxUX1RIRU1FICkge1xuICAgICAgICAgICAgICAgICAgICAkaHRtbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcyggJ292ZXJmbG93JywgJycgKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcyggJ3BhZGRpbmctcmlnaHQnLCAnLT0nICsgZ2V0U2Nyb2xsYmFyV2lkdGgoKSApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBkb2N1bWVudCBldmVudHMuXG4gICAgICAgICAgICAgICAgJGRvY3VtZW50Lm9mZiggJy4nICsgU1RBVEUuaWQgKVxuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcXVldWVkIOKAnGNsb3Nl4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAnY2xvc2UnIClcbiAgICAgICAgICAgIH0sIC8vY2xvc2VcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENsZWFyIHRoZSB2YWx1ZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQLnNldCggJ2NsZWFyJywgbnVsbCwgb3B0aW9ucyApXG4gICAgICAgICAgICB9LCAvL2NsZWFyXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXQgc29tZXRoaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24oIHRoaW5nLCB2YWx1ZSwgb3B0aW9ucyApIHtcblxuICAgICAgICAgICAgICAgIHZhciB0aGluZ0l0ZW0sIHRoaW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nSXNPYmplY3QgPSAkLmlzUGxhaW5PYmplY3QoIHRoaW5nICksXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0ID0gdGhpbmdJc09iamVjdCA/IHRoaW5nIDoge31cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIHVzYWJsZSBvcHRpb25zLlxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB0aGluZ0lzT2JqZWN0ICYmICQuaXNQbGFpbk9iamVjdCggdmFsdWUgKSA/IHZhbHVlIDogb3B0aW9ucyB8fCB7fVxuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGluZyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGhpbmcgaXNu4oCZdCBhbiBvYmplY3QsIG1ha2UgaXQgb25lLlxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGluZ0lzT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdPYmplY3RbIHRoaW5nIF0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR28gdGhyb3VnaCB0aGUgdGhpbmdzIG9mIGl0ZW1zIHRvIHNldC5cbiAgICAgICAgICAgICAgICAgICAgZm9yICggdGhpbmdJdGVtIGluIHRoaW5nT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHcmFiIHRoZSB2YWx1ZSBvZiB0aGUgdGhpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGluZ1ZhbHVlID0gdGhpbmdPYmplY3RbIHRoaW5nSXRlbSBdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0LCBpZiB0aGUgaXRlbSBleGlzdHMgYW5kIHRoZXJl4oCZcyBhIHZhbHVlLCBzZXQgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaW5nSXRlbSBpbiBQLmNvbXBvbmVudC5pdGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpbmdWYWx1ZSA9PT0gdW5kZWZpbmVkICkgdGhpbmdWYWx1ZSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudC5zZXQoIHRoaW5nSXRlbSwgdGhpbmdWYWx1ZSwgb3B0aW9ucyApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZW4sIGNoZWNrIHRvIHVwZGF0ZSB0aGUgZWxlbWVudCB2YWx1ZSBhbmQgYnJvYWRjYXN0IGEgY2hhbmdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ0l0ZW0gPT0gJ3NlbGVjdCcgfHwgdGhpbmdJdGVtID09ICdjbGVhcicgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJEVMRU1FTlQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCggdGhpbmdJdGVtID09ICdjbGVhcicgPyAnJyA6IFAuZ2V0KCB0aGluZ0l0ZW0sIFNFVFRJTkdTLmZvcm1hdCApICkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIoICdjaGFuZ2UnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciBhIG5ldyBwaWNrZXIuXG4gICAgICAgICAgICAgICAgICAgIFAucmVuZGVyKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBtZXRob2QgaXNu4oCZdCBtdXRlZCwgdHJpZ2dlciBxdWV1ZWQg4oCcc2V04oCdIGV2ZW50cyBhbmQgcGFzcyB0aGUgYHRoaW5nT2JqZWN0YC5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5tdXRlZCA/IFAgOiBQLnRyaWdnZXIoICdzZXQnLCB0aGluZ09iamVjdCApXG4gICAgICAgICAgICB9LCAvL3NldFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHNvbWV0aGluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCB0aGluZywgZm9ybWF0ICkge1xuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJl4oCZcyBzb21ldGhpbmcgdG8gZ2V0LlxuICAgICAgICAgICAgICAgIHRoaW5nID0gdGhpbmcgfHwgJ3ZhbHVlJ1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBwaWNrZXIgc3RhdGUgZXhpc3RzLCByZXR1cm4gdGhhdC5cbiAgICAgICAgICAgICAgICBpZiAoIFNUQVRFWyB0aGluZyBdICE9IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVEFURVsgdGhpbmcgXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgc3VibWlzc2lvbiB2YWx1ZSwgaWYgdGhhdC5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nID09ICd2YWx1ZVN1Ym1pdCcgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggUC5faGlkZGVuICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFAuX2hpZGRlbi52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaW5nID0gJ3ZhbHVlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgdmFsdWUsIGlmIHRoYXQuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGluZyA9PSAndmFsdWUnICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRUxFTUVOVC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGEgY29tcG9uZW50IGl0ZW0gZXhpc3RzLCByZXR1cm4gdGhhdC5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nIGluIFAuY29tcG9uZW50Lml0ZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvcm1hdCA9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGluZ1ZhbHVlID0gUC5jb21wb25lbnQuZ2V0KCB0aGluZyApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpbmdWYWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudC5mb3JtYXRzLnRvU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBmb3JtYXQsIHRoaW5nVmFsdWUgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQLmNvbXBvbmVudC5nZXQoIHRoaW5nIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAvL2dldFxuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBCaW5kIGV2ZW50cyBvbiB0aGUgdGhpbmdzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbjogZnVuY3Rpb24oIHRoaW5nLCBtZXRob2QsIGludGVybmFsICkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoaW5nTmFtZSwgdGhpbmdNZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nSXNPYmplY3QgPSAkLmlzUGxhaW5PYmplY3QoIHRoaW5nICksXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0ID0gdGhpbmdJc09iamVjdCA/IHRoaW5nIDoge31cblxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRoaW5nIGlzbuKAmXQgYW4gb2JqZWN0LCBtYWtlIGl0IG9uZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpbmdJc09iamVjdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0WyB0aGluZyBdID0gbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSB0aGluZ3MgdG8gYmluZCB0by5cbiAgICAgICAgICAgICAgICAgICAgZm9yICggdGhpbmdOYW1lIGluIHRoaW5nT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHcmFiIHRoZSBtZXRob2Qgb2YgdGhlIHRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdNZXRob2QgPSB0aGluZ09iamVjdFsgdGhpbmdOYW1lIF1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgd2FzIGFuIGludGVybmFsIGJpbmRpbmcsIHByZWZpeCBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaW50ZXJuYWwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdOYW1lID0gJ18nICsgdGhpbmdOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGhpbmcgbWV0aG9kcyBjb2xsZWN0aW9uIGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNUQVRFLm1ldGhvZHNbIHRoaW5nTmFtZSBdID0gU1RBVEUubWV0aG9kc1sgdGhpbmdOYW1lIF0gfHwgW11cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBtZXRob2QgdG8gdGhlIHJlbGF0aXZlIG1ldGhvZCBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBVEUubWV0aG9kc1sgdGhpbmdOYW1lIF0ucHVzaCggdGhpbmdNZXRob2QgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBcbiAgICAgICAgICAgIH0sIC8vb25cblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVW5iaW5kIGV2ZW50cyBvbiB0aGUgdGhpbmdzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvZmY6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBpLCB0aGluZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwLCBuYW1lc0NvdW50ID0gbmFtZXMubGVuZ3RoOyBpIDwgbmFtZXNDb3VudDsgaSArPSAxICkge1xuICAgICAgICAgICAgICAgICAgICB0aGluZ05hbWUgPSBuYW1lc1tpXVxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaW5nTmFtZSBpbiBTVEFURS5tZXRob2RzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIFNUQVRFLm1ldGhvZHNbdGhpbmdOYW1lXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBQXG4gICAgICAgICAgICB9LFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyZSBvZmYgbWV0aG9kIGV2ZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oIG5hbWUsIGRhdGEgKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90cmlnZ2VyID0gZnVuY3Rpb24oIG5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2RMaXN0ID0gU1RBVEUubWV0aG9kc1sgbmFtZSBdXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWV0aG9kTGlzdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZExpc3QubWFwKCBmdW5jdGlvbiggbWV0aG9kICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggbWV0aG9kLCBQLCBbIGRhdGEgXSApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90cmlnZ2VyKCAnXycgKyBuYW1lIClcbiAgICAgICAgICAgICAgICBfdHJpZ2dlciggbmFtZSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBcbiAgICAgICAgICAgIH0gLy90cmlnZ2VyXG4gICAgICAgIH0gLy9QaWNrZXJJbnN0YW5jZS5wcm90b3R5cGVcblxuXG4gICAgLyoqXG4gICAgICogV3JhcCB0aGUgcGlja2VyIGhvbGRlciBjb21wb25lbnRzIHRvZ2V0aGVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZWRDb21wb25lbnQoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgcGlja2VyIHdyYXBwZXIgaG9sZGVyXG4gICAgICAgIHJldHVybiBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoICdkaXYnLFxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgd3JhcHBlciBub2RlXG4gICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoICdkaXYnLFxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcGlja2VyIGZyYW1lXG4gICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcblxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgYm94IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb21wb25lbnRzIG5vZGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgUC5jb21wb25lbnQubm9kZXMoIFNUQVRFLm9wZW4gKSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHBpY2tlciBib3ggY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIENMQVNTRVMuYm94XG4gICAgICAgICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUGlja2VyIHdyYXAgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgQ0xBU1NFUy53cmFwXG4gICAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICAgIC8vIFBpY2tlciBmcmFtZSBjbGFzc1xuICAgICAgICAgICAgICAgIENMQVNTRVMuZnJhbWVcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIC8vIFBpY2tlciBob2xkZXIgY2xhc3NcbiAgICAgICAgICAgIENMQVNTRVMuaG9sZGVyXG4gICAgICAgICkgLy9lbmRyZXR1cm5cbiAgICB9IC8vY3JlYXRlV3JhcHBlZENvbXBvbmVudFxuXG5cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGhlIGlucHV0IGVsZW1lbnQgd2l0aCBhbGwgYmluZGluZ3MuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJlcGFyZUVsZW1lbnQoKSB7XG5cbiAgICAgICAgJEVMRU1FTlQuXG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBwaWNrZXIgZGF0YSBieSBjb21wb25lbnQgbmFtZS5cbiAgICAgICAgICAgIGRhdGEoTkFNRSwgUCkuXG5cbiAgICAgICAgICAgIC8vIEFkZCB0aGUg4oCcaW5wdXTigJ0gY2xhc3MgbmFtZS5cbiAgICAgICAgICAgIGFkZENsYXNzKENMQVNTRVMuaW5wdXQpLlxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRhYmluZGV4LlxuICAgICAgICAgICAgYXR0cigndGFiaW5kZXgnLCAtMSkuXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGBkYXRhLXZhbHVlYCwgdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgIHZhbCggJEVMRU1FTlQuZGF0YSgndmFsdWUnKSA/XG4gICAgICAgICAgICAgICAgUC5nZXQoJ3NlbGVjdCcsIFNFVFRJTkdTLmZvcm1hdCkgOlxuICAgICAgICAgICAgICAgIEVMRU1FTlQudmFsdWVcbiAgICAgICAgICAgIClcblxuXG4gICAgICAgIC8vIE9ubHkgYmluZCBrZXlkb3duIGV2ZW50cyBpZiB0aGUgZWxlbWVudCBpc27igJl0IGVkaXRhYmxlLlxuICAgICAgICBpZiAoICFTRVRUSU5HUy5lZGl0YWJsZSApIHtcblxuICAgICAgICAgICAgJEVMRU1FTlQuXG5cbiAgICAgICAgICAgICAgICAvLyBPbiBmb2N1cy9jbGljaywgZm9jdXMgb250byB0aGUgcm9vdCB0byBvcGVuIGl0IHVwLlxuICAgICAgICAgICAgICAgIG9uKCAnZm9jdXMuJyArIFNUQVRFLmlkICsgJyBjbGljay4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcbiAgICAgICAgICAgICAgICB9KS5cblxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBrZXlib2FyZCBldmVudCBiYXNlZCBvbiB0aGUgcGlja2VyIGJlaW5nIG9wZW5lZCBvciBub3QuXG4gICAgICAgICAgICAgICAgb24oICdrZXlkb3duLicgKyBTVEFURS5pZCwgaGFuZGxlS2V5ZG93bkV2ZW50IClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBhcmlhIGF0dHJpYnV0ZXMuXG4gICAgICAgIGFyaWEoRUxFTUVOVCwge1xuICAgICAgICAgICAgaGFzcG9wdXA6IHRydWUsXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXG4gICAgICAgICAgICBvd25zOiBFTEVNRU5ULmlkICsgJ19yb290J1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aGUgcm9vdCBwaWNrZXIgZWxlbWVudCB3aXRoIGFsbCBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcmVwYXJlRWxlbWVudFJvb3QoKSB7XG5cbiAgICAgICAgUC4kcm9vdC5cblxuICAgICAgICAgICAgb24oe1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGlPUzguXG4gICAgICAgICAgICAgICAga2V5ZG93bjogaGFuZGxlS2V5ZG93bkV2ZW50LFxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzb21ldGhpbmcgd2l0aGluIHRoZSByb290IGlzIGZvY3VzZWQsIHN0b3AgZnJvbSBidWJibGluZ1xuICAgICAgICAgICAgICAgIC8vIHRvIHRoZSBkb2MgYW5kIHJlbW92ZSB0aGUg4oCcZm9jdXNlZOKAnSBzdGF0ZSBmcm9tIHRoZSByb290LlxuICAgICAgICAgICAgICAgIGZvY3VzaW46IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5yZW1vdmVDbGFzcyggQ0xBU1NFUy5mb2N1c2VkIClcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzb21ldGhpbmcgd2l0aGluIHRoZSByb290IGhvbGRlciBpcyBjbGlja2VkLCBzdG9wIGl0XG4gICAgICAgICAgICAgICAgLy8gZnJvbSBidWJibGluZyB0byB0aGUgZG9jLlxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24gY2xpY2snOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFyZ2V0IGlzbuKAmXQgdGhlIHJvb3QgaG9sZGVyIHNvIGl0IGNhbiBidWJibGUgdXAuXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0ICE9IFAuJHJvb3QuY2hpbGRyZW4oKVsgMCBdICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqIEZvciBtb3VzZWRvd24gZXZlbnRzLCBjYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uIGluIG9yZGVyIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHByZXZlbnQgY2FzZXMgd2hlcmUgZm9jdXMgaXMgc2hpZnRlZCBvbnRvIGV4dGVybmFsIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdoZW4gdXNpbmcgdGhpbmdzIGxpa2UgalF1ZXJ5IG1vYmlsZSBvciBNYWduaWZpY1BvcHVwIChyZWY6ICMyNDkgJiAjMTIwKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgQWxzbywgZm9yIEZpcmVmb3gsIGRvbuKAmXQgcHJldmVudCBhY3Rpb24gb24gdGhlIGBvcHRpb25gIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicgJiYgISQoIHRhcmdldCApLmlzKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb3B0aW9uJyApKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZS1mb2N1cyBvbnRvIHRoZSByb290IHNvIHRoYXQgdXNlcnMgY2FuIGNsaWNrIGF3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGVsZW1lbnRzIGZvY3VzZWQgd2l0aGluIHRoZSBwaWNrZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5lcSgwKS5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5cblxuICAgICAgICAgICAgLy8gQWRkL3JlbW92ZSB0aGUg4oCcdGFyZ2V04oCdIGNsYXNzIG9uIGZvY3VzIGFuZCBibHVyLlxuICAgICAgICAgICAgb24oe1xuICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJEVMRU1FTlQuYWRkQ2xhc3MoIENMQVNTRVMudGFyZ2V0IClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5yZW1vdmVDbGFzcyggQ0xBU1NFUy50YXJnZXQgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLlxuXG4gICAgICAgICAgICAvLyBPcGVuIHRoZSBwaWNrZXIgYW5kIGFkanVzdCB0aGUgcm9vdCDigJxmb2N1c2Vk4oCdIHN0YXRlXG4gICAgICAgICAgICBvbiggJ2ZvY3VzLnRvT3BlbicsIGhhbmRsZUZvY3VzVG9PcGVuRXZlbnQgKS5cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmXigJlzIGEgY2xpY2sgb24gYW4gYWN0aW9uYWJsZSBlbGVtZW50LCBjYXJyeSBvdXQgdGhlIGFjdGlvbnMuXG4gICAgICAgICAgICBvbiggJ2NsaWNrJywgJ1tkYXRhLXBpY2tdLCBbZGF0YS1uYXZdLCBbZGF0YS1jbGVhcl0sIFtkYXRhLWNsb3NlXScsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKCB0aGlzICksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkdGFyZ2V0LmRhdGEoKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGlzYWJsZWQgPSAkdGFyZ2V0Lmhhc0NsYXNzKCBDTEFTU0VTLm5hdkRpc2FibGVkICkgfHwgJHRhcmdldC5oYXNDbGFzcyggQ0xBU1NFUy5kaXNhYmxlZCApLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vICogRm9yIElFLCBub24tZm9jdXNhYmxlIGVsZW1lbnRzIGNhbiBiZSBhY3RpdmUgZWxlbWVudHMgYXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAvLyAgIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjg0NTYxKS5cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGdldEFjdGl2ZUVsZW1lbnQoKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudCAmJiAoIGFjdGl2ZUVsZW1lbnQudHlwZSB8fCBhY3RpdmVFbGVtZW50LmhyZWYgKVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGRpc2FibGVkIG9yIG5vdGhpbmcgaW5zaWRlIGlzIGFjdGl2ZWx5IGZvY3VzZWQsIHJlLWZvY3VzIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0RGlzYWJsZWQgfHwgYWN0aXZlRWxlbWVudCAmJiAhJC5jb250YWlucyggUC4kcm9vdFswXSwgYWN0aXZlRWxlbWVudCApICkge1xuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBzb21ldGhpbmcgaXMgc3VwZXJmaWNpYWxseSBjaGFuZ2VkLCB1cGRhdGUgdGhlIGBoaWdobGlnaHRgIGJhc2VkIG9uIHRoZSBgbmF2YC5cbiAgICAgICAgICAgICAgICBpZiAoICF0YXJnZXREaXNhYmxlZCAmJiB0YXJnZXREYXRhLm5hdiApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5zZXQoICdoaWdobGlnaHQnLCBQLmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCwgeyBuYXY6IHRhcmdldERhdGEubmF2IH0gKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBwaWNrZWQsIHNldCBgc2VsZWN0YCB0aGVuIGNsb3NlIHdpdGggZm9jdXMuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICF0YXJnZXREaXNhYmxlZCAmJiAncGljaycgaW4gdGFyZ2V0RGF0YSApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5zZXQoICdzZWxlY3QnLCB0YXJnZXREYXRhLnBpY2sgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGEg4oCcY2xlYXLigJ0gYnV0dG9uIGlzIHByZXNzZWQsIGVtcHR5IHRoZSB2YWx1ZXMgYW5kIGNsb3NlIHdpdGggZm9jdXMuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldERhdGEuY2xlYXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuY2xlYXIoKS5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldERhdGEuY2xvc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkgLy9QLiRyb290XG5cbiAgICAgICAgYXJpYSggUC4kcm9vdFswXSwgJ2hpZGRlbicsIHRydWUgKVxuICAgIH1cblxuXG4gICAgIC8qKlxuICAgICAgKiBQcmVwYXJlIHRoZSBoaWRkZW4gaW5wdXQgZWxlbWVudCBhbG9uZyB3aXRoIGFsbCBiaW5kaW5ncy5cbiAgICAgICovXG4gICAgZnVuY3Rpb24gcHJlcGFyZUVsZW1lbnRIaWRkZW4oKSB7XG5cbiAgICAgICAgdmFyIG5hbWVcblxuICAgICAgICBpZiAoIFNFVFRJTkdTLmhpZGRlbk5hbWUgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBuYW1lID0gRUxFTUVOVC5uYW1lXG4gICAgICAgICAgICBFTEVNRU5ULm5hbWUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmFtZSA9IFtcbiAgICAgICAgICAgICAgICB0eXBlb2YgU0VUVElOR1MuaGlkZGVuUHJlZml4ID09ICdzdHJpbmcnID8gU0VUVElOR1MuaGlkZGVuUHJlZml4IDogJycsXG4gICAgICAgICAgICAgICAgdHlwZW9mIFNFVFRJTkdTLmhpZGRlblN1ZmZpeCA9PSAnc3RyaW5nJyA/IFNFVFRJTkdTLmhpZGRlblN1ZmZpeCA6ICdfc3VibWl0J1xuICAgICAgICAgICAgXVxuICAgICAgICAgICAgbmFtZSA9IG5hbWVbMF0gKyBFTEVNRU5ULm5hbWUgKyBuYW1lWzFdXG4gICAgICAgIH1cblxuICAgICAgICBQLl9oaWRkZW4gPSAkKFxuICAgICAgICAgICAgJzxpbnB1dCAnICtcbiAgICAgICAgICAgICd0eXBlPWhpZGRlbiAnICtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBuYW1lIHVzaW5nIHRoZSBvcmlnaW5hbCBpbnB1dOKAmXMgd2l0aCBhIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICAgICAgJ25hbWU9XCInICsgbmFtZSArICdcIicgK1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSB2YWx1ZSwgc2V0IHRoZSBoaWRkZW4gdmFsdWUgYXMgd2VsbC5cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAkRUxFTUVOVC5kYXRhKCd2YWx1ZScpIHx8IEVMRU1FTlQudmFsdWUgP1xuICAgICAgICAgICAgICAgICAgICAnIHZhbHVlPVwiJyArIFAuZ2V0KCdzZWxlY3QnLCBTRVRUSU5HUy5mb3JtYXRTdWJtaXQpICsgJ1wiJyA6XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApICtcbiAgICAgICAgICAgICc+J1xuICAgICAgICApWzBdXG5cbiAgICAgICAgJEVMRU1FTlQuXG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBjaGFuZ2VzLCB1cGRhdGUgdGhlIGhpZGRlbiBpbnB1dCB3aXRoIHRoZSBjb3JyZWN0IGZvcm1hdC5cbiAgICAgICAgICAgIG9uKCdjaGFuZ2UuJyArIFNUQVRFLmlkLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBQLl9oaWRkZW4udmFsdWUgPSBFTEVNRU5ULnZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgUC5nZXQoJ3NlbGVjdCcsIFNFVFRJTkdTLmZvcm1hdFN1Ym1pdCkgOlxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIEluc2VydCB0aGUgaGlkZGVuIGlucHV0IGFzIHNwZWNpZmllZCBpbiB0aGUgc2V0dGluZ3MuXG4gICAgICAgIGlmICggU0VUVElOR1MuY29udGFpbmVyICkgJCggU0VUVElOR1MuY29udGFpbmVyICkuYXBwZW5kKCBQLl9oaWRkZW4gKVxuICAgICAgICBlbHNlICRFTEVNRU5ULmFmdGVyKCBQLl9oaWRkZW4gKVxuICAgIH1cblxuXG4gICAgLy8gRm9yIGlPUzguXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5ZG93bkV2ZW50KCBldmVudCApIHtcblxuICAgICAgICB2YXIga2V5Y29kZSA9IGV2ZW50LmtleUNvZGUsXG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIG9uZSBvZiB0aGUgZGVsZXRlIGtleXMgd2FzIHByZXNzZWQuXG4gICAgICAgICAgICBpc0tleWNvZGVEZWxldGUgPSAvXig4fDQ2KSQvLnRlc3Qoa2V5Y29kZSlcblxuICAgICAgICAvLyBGb3Igc29tZSByZWFzb24gSUUgY2xlYXJzIHRoZSBpbnB1dCB2YWx1ZSBvbiDigJxlc2NhcGXigJ0uXG4gICAgICAgIGlmICgga2V5Y29kZSA9PSAyNyApIHtcbiAgICAgICAgICAgIFAuY2xvc2UoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBgc3BhY2VgIG9yIGBkZWxldGVgIHdhcyBwcmVzc2VkIG9yIHRoZSBwaWNrZXIgaXMgY2xvc2VkIHdpdGggYSBrZXkgbW92ZW1lbnQuXG4gICAgICAgIGlmICgga2V5Y29kZSA9PSAzMiB8fCBpc0tleWNvZGVEZWxldGUgfHwgIVNUQVRFLm9wZW4gJiYgUC5jb21wb25lbnQua2V5W2tleWNvZGVdICkge1xuXG4gICAgICAgICAgICAvLyBQcmV2ZW50IGl0IGZyb20gbW92aW5nIHRoZSBwYWdlIGFuZCBidWJibGluZyB0byBkb2MuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAvLyBJZiBgZGVsZXRlYCB3YXMgcHJlc3NlZCwgY2xlYXIgdGhlIHZhbHVlcyBhbmQgY2xvc2UgdGhlIHBpY2tlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBvcGVuIHRoZSBwaWNrZXIuXG4gICAgICAgICAgICBpZiAoIGlzS2V5Y29kZURlbGV0ZSApIHsgUC5jbGVhcigpLmNsb3NlKCkgfVxuICAgICAgICAgICAgZWxzZSB7IFAub3BlbigpIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gU2VwYXJhdGVkIGZvciBJRVxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvY3VzVG9PcGVuRXZlbnQoIGV2ZW50ICkge1xuXG4gICAgICAgIC8vIFN0b3AgdGhlIGV2ZW50IGZyb20gcHJvcGFnYXRpbmcgdG8gdGhlIGRvYy5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAvLyBJZiBpdOKAmXMgYSBmb2N1cyBldmVudCwgYWRkIHRoZSDigJxmb2N1c2Vk4oCdIGNsYXNzIHRvIHRoZSByb290LlxuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgPT0gJ2ZvY3VzJyApIHtcbiAgICAgICAgICAgIFAuJHJvb3QuYWRkQ2xhc3MoIENMQVNTRVMuZm9jdXNlZCApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmQgdGhlbiBmaW5hbGx5IG9wZW4gdGhlIHBpY2tlci5cbiAgICAgICAgUC5vcGVuKClcbiAgICB9XG5cblxuICAgIC8vIFJldHVybiBhIG5ldyBwaWNrZXIgaW5zdGFuY2UuXG4gICAgcmV0dXJuIG5ldyBQaWNrZXJJbnN0YW5jZSgpXG59IC8vUGlja2VyQ29uc3RydWN0b3JcblxuXG5cbi8qKlxuICogVGhlIGRlZmF1bHQgY2xhc3NlcyBhbmQgcHJlZml4IHRvIHVzZSBmb3IgdGhlIEhUTUwgY2xhc3Nlcy5cbiAqL1xuUGlja2VyQ29uc3RydWN0b3Iua2xhc3NlcyA9IGZ1bmN0aW9uKCBwcmVmaXggKSB7XG4gICAgcHJlZml4ID0gcHJlZml4IHx8ICdwaWNrZXInXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBwaWNrZXI6IHByZWZpeCxcbiAgICAgICAgb3BlbmVkOiBwcmVmaXggKyAnLS1vcGVuZWQnLFxuICAgICAgICBmb2N1c2VkOiBwcmVmaXggKyAnLS1mb2N1c2VkJyxcblxuICAgICAgICBpbnB1dDogcHJlZml4ICsgJ19faW5wdXQnLFxuICAgICAgICBhY3RpdmU6IHByZWZpeCArICdfX2lucHV0LS1hY3RpdmUnLFxuICAgICAgICB0YXJnZXQ6IHByZWZpeCArICdfX2lucHV0LS10YXJnZXQnLFxuXG4gICAgICAgIGhvbGRlcjogcHJlZml4ICsgJ19faG9sZGVyJyxcblxuICAgICAgICBmcmFtZTogcHJlZml4ICsgJ19fZnJhbWUnLFxuICAgICAgICB3cmFwOiBwcmVmaXggKyAnX193cmFwJyxcblxuICAgICAgICBib3g6IHByZWZpeCArICdfX2JveCdcbiAgICB9XG59IC8vUGlja2VyQ29uc3RydWN0b3Iua2xhc3Nlc1xuXG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZGVmYXVsdCB0aGVtZSBpcyBiZWluZyB1c2VkLlxuICovXG5mdW5jdGlvbiBpc1VzaW5nRGVmYXVsdFRoZW1lKCBlbGVtZW50ICkge1xuXG4gICAgdmFyIHRoZW1lLFxuICAgICAgICBwcm9wID0gJ3Bvc2l0aW9uJ1xuXG4gICAgLy8gRm9yIElFLlxuICAgIGlmICggZWxlbWVudC5jdXJyZW50U3R5bGUgKSB7XG4gICAgICAgIHRoZW1lID0gZWxlbWVudC5jdXJyZW50U3R5bGVbcHJvcF1cbiAgICB9XG5cbiAgICAvLyBGb3Igbm9ybWFsIGJyb3dzZXJzLlxuICAgIGVsc2UgaWYgKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSApIHtcbiAgICAgICAgdGhlbWUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtZW50IClbcHJvcF1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhlbWUgPT0gJ2ZpeGVkJ1xufVxuXG5cblxuLyoqXG4gKiBHZXQgdGhlIHdpZHRoIG9mIHRoZSBicm93c2Vy4oCZcyBzY3JvbGxiYXIuXG4gKiBUYWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vVm9ka2FCZWFycy9SZW1vZGFsL2Jsb2IvbWFzdGVyL3NyYy9qcXVlcnkucmVtb2RhbC5qc1xuICovXG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcblxuICAgIGlmICggJGh0bWwuaGVpZ2h0KCkgPD0gJHdpbmRvdy5oZWlnaHQoKSApIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICB2YXIgJG91dGVyID0gJCggJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDoxMDBweFwiIC8+JyApLlxuICAgICAgICBhcHBlbmRUbyggJ2JvZHknIClcblxuICAgIC8vIEdldCB0aGUgd2lkdGggd2l0aG91dCBzY3JvbGxiYXJzLlxuICAgIHZhciB3aWR0aFdpdGhvdXRTY3JvbGwgPSAkb3V0ZXJbMF0ub2Zmc2V0V2lkdGhcblxuICAgIC8vIEZvcmNlIGFkZGluZyBzY3JvbGxiYXJzLlxuICAgICRvdXRlci5jc3MoICdvdmVyZmxvdycsICdzY3JvbGwnIClcblxuICAgIC8vIEFkZCB0aGUgaW5uZXIgZGl2LlxuICAgIHZhciAkaW5uZXIgPSAkKCAnPGRpdiBzdHlsZT1cIndpZHRoOjEwMCVcIiAvPicgKS5hcHBlbmRUbyggJG91dGVyIClcblxuICAgIC8vIEdldCB0aGUgd2lkdGggd2l0aCBzY3JvbGxiYXJzLlxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSAkaW5uZXJbMF0ub2Zmc2V0V2lkdGhcblxuICAgIC8vIFJlbW92ZSB0aGUgZGl2cy5cbiAgICAkb3V0ZXIucmVtb3ZlKClcblxuICAgIC8vIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB3aWR0aHMuXG4gICAgcmV0dXJuIHdpZHRoV2l0aG91dFNjcm9sbCAtIHdpZHRoV2l0aFNjcm9sbFxufVxuXG5cblxuLyoqXG4gKiBQaWNrZXJDb25zdHJ1Y3RvciBoZWxwZXIgbWV0aG9kcy5cbiAqL1xuUGlja2VyQ29uc3RydWN0b3IuXyA9IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGdyb3VwIG9mIG5vZGVzLiBFeHBlY3RzOlxuICAgICAqIGBcbiAgICAgICAge1xuICAgICAgICAgICAgbWluOiAgICB7SW50ZWdlcn0sXG4gICAgICAgICAgICBtYXg6ICAgIHtJbnRlZ2VyfSxcbiAgICAgICAgICAgIGk6ICAgICAge0ludGVnZXJ9LFxuICAgICAgICAgICAgbm9kZTogICB7U3RyaW5nfSxcbiAgICAgICAgICAgIGl0ZW06ICAge0Z1bmN0aW9ufVxuICAgICAgICB9XG4gICAgICogYFxuICAgICAqL1xuICAgIGdyb3VwOiBmdW5jdGlvbiggZ3JvdXBPYmplY3QgKSB7XG5cbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBTY29wZSBmb3IgdGhlIGxvb3BlZCBvYmplY3RcbiAgICAgICAgICAgIGxvb3BPYmplY3RTY29wZSxcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBub2RlcyBsaXN0XG4gICAgICAgICAgICBub2Rlc0xpc3QgPSAnJyxcblxuICAgICAgICAgICAgLy8gVGhlIGNvdW50ZXIgc3RhcnRzIGZyb20gdGhlIGBtaW5gXG4gICAgICAgICAgICBjb3VudGVyID0gUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBncm91cE9iamVjdC5taW4sIGdyb3VwT2JqZWN0IClcblxuXG4gICAgICAgIC8vIExvb3AgZnJvbSB0aGUgYG1pbmAgdG8gYG1heGAsIGluY3JlbWVudGluZyBieSBgaWBcbiAgICAgICAgZm9yICggOyBjb3VudGVyIDw9IFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggZ3JvdXBPYmplY3QubWF4LCBncm91cE9iamVjdCwgWyBjb3VudGVyIF0gKTsgY291bnRlciArPSBncm91cE9iamVjdC5pICkge1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBgaXRlbWAgZnVuY3Rpb24gd2l0aGluIHNjb3BlIG9mIHRoZSBvYmplY3RcbiAgICAgICAgICAgIGxvb3BPYmplY3RTY29wZSA9IFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggZ3JvdXBPYmplY3QuaXRlbSwgZ3JvdXBPYmplY3QsIFsgY291bnRlciBdIClcblxuICAgICAgICAgICAgLy8gU3BsaWNlIHRoZSBzdWJncm91cCBhbmQgY3JlYXRlIG5vZGVzIG91dCBvZiB0aGUgc3ViIG5vZGVzXG4gICAgICAgICAgICBub2Rlc0xpc3QgKz0gUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKFxuICAgICAgICAgICAgICAgIGdyb3VwT2JqZWN0Lm5vZGUsXG4gICAgICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlWyAwIF0sICAgLy8gdGhlIG5vZGVcbiAgICAgICAgICAgICAgICBsb29wT2JqZWN0U2NvcGVbIDEgXSwgICAvLyB0aGUgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGxvb3BPYmplY3RTY29wZVsgMiBdICAgIC8vIHRoZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gdGhlIGxpc3Qgb2Ygbm9kZXNcbiAgICAgICAgcmV0dXJuIG5vZGVzTGlzdFxuICAgIH0sIC8vZ3JvdXBcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZG9tIG5vZGUgc3RyaW5nXG4gICAgICovXG4gICAgbm9kZTogZnVuY3Rpb24oIHdyYXBwZXIsIGl0ZW0sIGtsYXNzLCBhdHRyaWJ1dGUgKSB7XG5cbiAgICAgICAgLy8gSWYgdGhlIGl0ZW0gaXMgZmFsc2UteSwganVzdCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nXG4gICAgICAgIGlmICggIWl0ZW0gKSByZXR1cm4gJydcblxuICAgICAgICAvLyBJZiB0aGUgaXRlbSBpcyBhbiBhcnJheSwgZG8gYSBqb2luXG4gICAgICAgIGl0ZW0gPSAkLmlzQXJyYXkoIGl0ZW0gKSA/IGl0ZW0uam9pbiggJycgKSA6IGl0ZW1cblxuICAgICAgICAvLyBDaGVjayBmb3IgdGhlIGNsYXNzXG4gICAgICAgIGtsYXNzID0ga2xhc3MgPyAnIGNsYXNzPVwiJyArIGtsYXNzICsgJ1wiJyA6ICcnXG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGFueSBhdHRyaWJ1dGVzXG4gICAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZSA/ICcgJyArIGF0dHJpYnV0ZSA6ICcnXG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSB3cmFwcGVkIGl0ZW1cbiAgICAgICAgcmV0dXJuICc8JyArIHdyYXBwZXIgKyBrbGFzcyArIGF0dHJpYnV0ZSArICc+JyArIGl0ZW0gKyAnPC8nICsgd3JhcHBlciArICc+J1xuICAgIH0sIC8vbm9kZVxuXG5cbiAgICAvKipcbiAgICAgKiBMZWFkIG51bWJlcnMgYmVsb3cgMTAgd2l0aCBhIHplcm8uXG4gICAgICovXG4gICAgbGVhZDogZnVuY3Rpb24oIG51bWJlciApIHtcbiAgICAgICAgcmV0dXJuICggbnVtYmVyIDwgMTAgPyAnMCc6ICcnICkgKyBudW1iZXJcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGEgZnVuY3Rpb24gb3RoZXJ3aXNlIHJldHVybiB0aGUgdmFsdWUuXG4gICAgICovXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSwgYXJncyApIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nID8gY2FsbGJhY2suYXBwbHkoIHNjb3BlLCBhcmdzIHx8IFtdICkgOiBjYWxsYmFja1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBzZWNvbmQgY2hhcmFjdGVyIGlzIGEgZGlnaXQsIGxlbmd0aCBpcyAyIG90aGVyd2lzZSAxLlxuICAgICAqL1xuICAgIGRpZ2l0czogZnVuY3Rpb24oIHN0cmluZyApIHtcbiAgICAgICAgcmV0dXJuICggL1xcZC8gKS50ZXN0KCBzdHJpbmdbIDEgXSApID8gMiA6IDFcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBUZWxsIGlmIHNvbWV0aGluZyBpcyBhIGRhdGUgb2JqZWN0LlxuICAgICAqL1xuICAgIGlzRGF0ZTogZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCggdmFsdWUgKS5pbmRleE9mKCAnRGF0ZScgKSA+IC0xICYmIHRoaXMuaXNJbnRlZ2VyKCB2YWx1ZS5nZXREYXRlKCkgKVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRlbGwgaWYgc29tZXRoaW5nIGlzIGFuIGludGVnZXIuXG4gICAgICovXG4gICAgaXNJbnRlZ2VyOiBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKCB2YWx1ZSApLmluZGV4T2YoICdOdW1iZXInICkgPiAtMSAmJiB2YWx1ZSAlIDEgPT09IDBcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgQVJJQSBhdHRyaWJ1dGUgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBhcmlhQXR0cjogYXJpYUF0dHJcbn0gLy9QaWNrZXJDb25zdHJ1Y3Rvci5fXG5cblxuXG4vKipcbiAqIEV4dGVuZCB0aGUgcGlja2VyIHdpdGggYSBjb21wb25lbnQgYW5kIGRlZmF1bHRzLlxuICovXG5QaWNrZXJDb25zdHJ1Y3Rvci5leHRlbmQgPSBmdW5jdGlvbiggbmFtZSwgQ29tcG9uZW50ICkge1xuXG4gICAgLy8gRXh0ZW5kIGpRdWVyeS5cbiAgICAkLmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggb3B0aW9ucywgYWN0aW9uICkge1xuXG4gICAgICAgIC8vIEdyYWIgdGhlIGNvbXBvbmVudCBkYXRhLlxuICAgICAgICB2YXIgY29tcG9uZW50RGF0YSA9IHRoaXMuZGF0YSggbmFtZSApXG5cbiAgICAgICAgLy8gSWYgdGhlIHBpY2tlciBpcyByZXF1ZXN0ZWQsIHJldHVybiB0aGUgZGF0YSBvYmplY3QuXG4gICAgICAgIGlmICggb3B0aW9ucyA9PSAncGlja2VyJyApIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnREYXRhXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgY29tcG9uZW50IGRhdGEgZXhpc3RzIGFuZCBgb3B0aW9uc2AgaXMgYSBzdHJpbmcsIGNhcnJ5IG91dCB0aGUgYWN0aW9uLlxuICAgICAgICBpZiAoIGNvbXBvbmVudERhdGEgJiYgdHlwZW9mIG9wdGlvbnMgPT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICByZXR1cm4gUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBjb21wb25lbnREYXRhWyBvcHRpb25zIF0sIGNvbXBvbmVudERhdGEsIFsgYWN0aW9uIF0gKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggZWFjaCBtYXRjaGVkIGVsZW1lbnQgYW5kIGlmIHRoZSBjb21wb25lbnRcbiAgICAgICAgLy8gZG9lc27igJl0IGV4aXN0LCBjcmVhdGUgYSBuZXcgcGlja2VyIHVzaW5nIGB0aGlzYCBlbGVtZW50XG4gICAgICAgIC8vIGFuZCBtZXJnaW5nIHRoZSBkZWZhdWx0cyBhbmQgb3B0aW9ucyB3aXRoIGEgZGVlcCBjb3B5LlxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoIHRoaXMgKVxuICAgICAgICAgICAgaWYgKCAhJHRoaXMuZGF0YSggbmFtZSApICkge1xuICAgICAgICAgICAgICAgIG5ldyBQaWNrZXJDb25zdHJ1Y3RvciggdGhpcywgbmFtZSwgQ29tcG9uZW50LCBvcHRpb25zIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzLlxuICAgICQuZm5bIG5hbWUgXS5kZWZhdWx0cyA9IENvbXBvbmVudC5kZWZhdWx0c1xufSAvL1BpY2tlckNvbnN0cnVjdG9yLmV4dGVuZFxuXG5cblxuZnVuY3Rpb24gYXJpYShlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoYXR0cmlidXRlKSApIHtcbiAgICAgICAgZm9yICggdmFyIGtleSBpbiBhdHRyaWJ1dGUgKSB7XG4gICAgICAgICAgICBhcmlhU2V0KGVsZW1lbnQsIGtleSwgYXR0cmlidXRlW2tleV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFyaWFTZXQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSlcbiAgICB9XG59XG5mdW5jdGlvbiBhcmlhU2V0KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgKGF0dHJpYnV0ZSA9PSAncm9sZScgPyAnJyA6ICdhcmlhLScpICsgYXR0cmlidXRlLFxuICAgICAgICB2YWx1ZVxuICAgIClcbn1cbmZ1bmN0aW9uIGFyaWFBdHRyKGF0dHJpYnV0ZSwgZGF0YSkge1xuICAgIGlmICggISQuaXNQbGFpbk9iamVjdChhdHRyaWJ1dGUpICkge1xuICAgICAgICBhdHRyaWJ1dGUgPSB7IGF0dHJpYnV0ZTogZGF0YSB9XG4gICAgfVxuICAgIGRhdGEgPSAnJ1xuICAgIGZvciAoIHZhciBrZXkgaW4gYXR0cmlidXRlICkge1xuICAgICAgICB2YXIgYXR0ciA9IChrZXkgPT0gJ3JvbGUnID8gJycgOiAnYXJpYS0nKSArIGtleSxcbiAgICAgICAgICAgIGF0dHJWYWwgPSBhdHRyaWJ1dGVba2V5XVxuICAgICAgICBkYXRhICs9IGF0dHJWYWwgPT0gbnVsbCA/ICcnIDogYXR0ciArICc9XCInICsgYXR0cmlidXRlW2tleV0gKyAnXCInXG4gICAgfVxuICAgIHJldHVybiBkYXRhXG59XG5cbi8vIElFOCBidWcgdGhyb3dzIGFuIGVycm9yIGZvciBhY3RpdmVFbGVtZW50cyB3aXRoaW4gaWZyYW1lcy5cbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICB9IGNhdGNoICggZXJyICkgeyB9XG59XG5cblxuXG4vLyBFeHBvc2UgdGhlIHBpY2tlciBjb25zdHJ1Y3Rvci5cbnJldHVybiBQaWNrZXJDb25zdHJ1Y3RvclxuXG5cbn0pKTtcblxuXG47LyohXG4gKiBEYXRlIHBpY2tlciBmb3IgcGlja2FkYXRlLmpzIHYzLjUuMFxuICogaHR0cDovL2Ftc3VsLmdpdGh1Yi5pby9waWNrYWRhdGUuanMvZGF0ZS5odG1cbiAqL1xuXG4oZnVuY3Rpb24gKCBmYWN0b3J5ICkge1xuXG4gICAgLy8gQU1ELlxuICAgIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKVxuICAgICAgICBkZWZpbmUoIFsncGlja2VyJywgJ2pxdWVyeSddLCBmYWN0b3J5IClcblxuICAgIC8vIE5vZGUuanMvYnJvd3NlcmlmeS5cbiAgICBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgKVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoIHJlcXVpcmUoJy4vcGlja2VyLmpzJyksIHJlcXVpcmUoJ2pxdWVyeScpIClcblxuICAgIC8vIEJyb3dzZXIgZ2xvYmFscy5cbiAgICBlbHNlIGZhY3RvcnkoIFBpY2tlciwgalF1ZXJ5IClcblxufShmdW5jdGlvbiggUGlja2VyLCAkICkge1xuXG5cbi8qKlxuICogR2xvYmFscyBhbmQgY29uc3RhbnRzXG4gKi9cbnZhciBEQVlTX0lOX1dFRUsgPSA3LFxuICAgIFdFRUtTX0lOX0NBTEVOREFSID0gNixcbiAgICBfID0gUGlja2VyLl9cblxuXG5cbi8qKlxuICogVGhlIGRhdGUgcGlja2VyIGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIERhdGVQaWNrZXIoIHBpY2tlciwgc2V0dGluZ3MgKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBlbGVtZW50ID0gcGlja2VyLiRub2RlWyAwIF0sXG4gICAgICAgIGVsZW1lbnRWYWx1ZSA9IGVsZW1lbnQudmFsdWUsXG4gICAgICAgIGVsZW1lbnREYXRhVmFsdWUgPSBwaWNrZXIuJG5vZGUuZGF0YSggJ3ZhbHVlJyApLFxuICAgICAgICB2YWx1ZVN0cmluZyA9IGVsZW1lbnREYXRhVmFsdWUgfHwgZWxlbWVudFZhbHVlLFxuICAgICAgICBmb3JtYXRTdHJpbmcgPSBlbGVtZW50RGF0YVZhbHVlID8gc2V0dGluZ3MuZm9ybWF0U3VibWl0IDogc2V0dGluZ3MuZm9ybWF0LFxuICAgICAgICBpc1JUTCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jdXJyZW50U3R5bGUgP1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIElFLlxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3VycmVudFN0eWxlLmRpcmVjdGlvbiA9PSAncnRsJyA6XG5cbiAgICAgICAgICAgICAgICAvLyBGb3Igbm9ybWFsIGJyb3dzZXJzLlxuICAgICAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUoIHBpY2tlci4kcm9vdFswXSApLmRpcmVjdGlvbiA9PSAncnRsJ1xuICAgICAgICB9XG5cbiAgICBjYWxlbmRhci5zZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgY2FsZW5kYXIuJG5vZGUgPSBwaWNrZXIuJG5vZGVcblxuICAgIC8vIFRoZSBxdWV1ZSBvZiBtZXRob2RzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGJ1aWxkIGl0ZW0gb2JqZWN0cy5cbiAgICBjYWxlbmRhci5xdWV1ZSA9IHtcbiAgICAgICAgbWluOiAnbWVhc3VyZSBjcmVhdGUnLFxuICAgICAgICBtYXg6ICdtZWFzdXJlIGNyZWF0ZScsXG4gICAgICAgIG5vdzogJ25vdyBjcmVhdGUnLFxuICAgICAgICBzZWxlY3Q6ICdwYXJzZSBjcmVhdGUgdmFsaWRhdGUnLFxuICAgICAgICBoaWdobGlnaHQ6ICdwYXJzZSBuYXZpZ2F0ZSBjcmVhdGUgdmFsaWRhdGUnLFxuICAgICAgICB2aWV3OiAncGFyc2UgY3JlYXRlIHZhbGlkYXRlIHZpZXdzZXQnLFxuICAgICAgICBkaXNhYmxlOiAnZGVhY3RpdmF0ZScsXG4gICAgICAgIGVuYWJsZTogJ2FjdGl2YXRlJ1xuICAgIH1cblxuICAgIC8vIFRoZSBjb21wb25lbnQncyBpdGVtIG9iamVjdC5cbiAgICBjYWxlbmRhci5pdGVtID0ge31cblxuICAgIGNhbGVuZGFyLml0ZW0uY2xlYXIgPSBudWxsXG4gICAgY2FsZW5kYXIuaXRlbS5kaXNhYmxlID0gKCBzZXR0aW5ncy5kaXNhYmxlIHx8IFtdICkuc2xpY2UoIDAgKVxuICAgIGNhbGVuZGFyLml0ZW0uZW5hYmxlID0gLShmdW5jdGlvbiggY29sbGVjdGlvbkRpc2FibGVkICkge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbkRpc2FibGVkWyAwIF0gPT09IHRydWUgPyBjb2xsZWN0aW9uRGlzYWJsZWQuc2hpZnQoKSA6IC0xXG4gICAgfSkoIGNhbGVuZGFyLml0ZW0uZGlzYWJsZSApXG5cbiAgICBjYWxlbmRhci5cbiAgICAgICAgc2V0KCAnbWluJywgc2V0dGluZ3MubWluICkuXG4gICAgICAgIHNldCggJ21heCcsIHNldHRpbmdzLm1heCApLlxuICAgICAgICBzZXQoICdub3cnIClcblxuICAgIC8vIFdoZW4gdGhlcmXigJlzIGEgdmFsdWUsIHNldCB0aGUgYHNlbGVjdGAsIHdoaWNoIGluIHR1cm5cbiAgICAvLyBhbHNvIHNldHMgdGhlIGBoaWdobGlnaHRgIGFuZCBgdmlld2AuXG4gICAgaWYgKCB2YWx1ZVN0cmluZyApIHtcbiAgICAgICAgY2FsZW5kYXIuc2V0KCAnc2VsZWN0JywgdmFsdWVTdHJpbmcsIHsgZm9ybWF0OiBmb3JtYXRTdHJpbmcgfSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZeKAmXMgbm8gdmFsdWUsIGRlZmF1bHQgdG8gaGlnaGxpZ2h0aW5nIOKAnHRvZGF54oCdLlxuICAgIGVsc2Uge1xuICAgICAgICBjYWxlbmRhci5cbiAgICAgICAgICAgIHNldCggJ3NlbGVjdCcsIG51bGwgKS5cbiAgICAgICAgICAgIHNldCggJ2hpZ2hsaWdodCcsIGNhbGVuZGFyLml0ZW0ubm93IClcbiAgICB9XG5cblxuICAgIC8vIFRoZSBrZXljb2RlIHRvIG1vdmVtZW50IG1hcHBpbmcuXG4gICAgY2FsZW5kYXIua2V5ID0ge1xuICAgICAgICA0MDogNywgLy8gRG93blxuICAgICAgICAzODogLTcsIC8vIFVwXG4gICAgICAgIDM5OiBmdW5jdGlvbigpIHsgcmV0dXJuIGlzUlRMKCkgPyAtMSA6IDEgfSwgLy8gUmlnaHRcbiAgICAgICAgMzc6IGZ1bmN0aW9uKCkgeyByZXR1cm4gaXNSVEwoKSA/IDEgOiAtMSB9LCAvLyBMZWZ0XG4gICAgICAgIGdvOiBmdW5jdGlvbiggdGltZUNoYW5nZSApIHtcbiAgICAgICAgICAgIHZhciBoaWdobGlnaHRlZE9iamVjdCA9IGNhbGVuZGFyLml0ZW0uaGlnaGxpZ2h0LFxuICAgICAgICAgICAgICAgIHRhcmdldERhdGUgPSBuZXcgRGF0ZSggaGlnaGxpZ2h0ZWRPYmplY3QueWVhciwgaGlnaGxpZ2h0ZWRPYmplY3QubW9udGgsIGhpZ2hsaWdodGVkT2JqZWN0LmRhdGUgKyB0aW1lQ2hhbmdlIClcbiAgICAgICAgICAgIGNhbGVuZGFyLnNldChcbiAgICAgICAgICAgICAgICAnaGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRlLFxuICAgICAgICAgICAgICAgIHsgaW50ZXJ2YWw6IHRpbWVDaGFuZ2UgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBCaW5kIHNvbWUgcGlja2VyIGV2ZW50cy5cbiAgICBwaWNrZXIuXG4gICAgICAgIG9uKCAncmVuZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0TW9udGggKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoIHZhbHVlICkge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXIuc2V0KCAnaGlnaGxpZ2h0JywgWyBwaWNrZXIuZ2V0KCAndmlldycgKS55ZWFyLCB2YWx1ZSwgcGlja2VyLmdldCggJ2hpZ2hsaWdodCcgKS5kYXRlIF0gKVxuICAgICAgICAgICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0TW9udGggKS50cmlnZ2VyKCAnZm9jdXMnIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGlja2VyLiRyb290LmZpbmQoICcuJyArIHNldHRpbmdzLmtsYXNzLnNlbGVjdFllYXIgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoIHZhbHVlICkge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXIuc2V0KCAnaGlnaGxpZ2h0JywgWyB2YWx1ZSwgcGlja2VyLmdldCggJ3ZpZXcnICkubW9udGgsIHBpY2tlci5nZXQoICdoaWdobGlnaHQnICkuZGF0ZSBdIClcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyLiRyb290LmZpbmQoICcuJyArIHNldHRpbmdzLmtsYXNzLnNlbGVjdFllYXIgKS50cmlnZ2VyKCAnZm9jdXMnIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAxICkuXG4gICAgICAgIG9uKCAnb3BlbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGluY2x1ZGVUb2RheSA9ICcnXG4gICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmRpc2FibGVkKCBjYWxlbmRhci5nZXQoJ25vdycpICkgKSB7XG4gICAgICAgICAgICAgICAgaW5jbHVkZVRvZGF5ID0gJzpub3QoLicgKyBzZXR0aW5ncy5rbGFzcy5idXR0b25Ub2RheSArICcpJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGlja2VyLiRyb290LmZpbmQoICdidXR0b24nICsgaW5jbHVkZVRvZGF5ICsgJywgc2VsZWN0JyApLmF0dHIoICdkaXNhYmxlZCcsIGZhbHNlIClcbiAgICAgICAgfSwgMSApLlxuICAgICAgICBvbiggJ2Nsb3NlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJ2J1dHRvbiwgc2VsZWN0JyApLmF0dHIoICdkaXNhYmxlZCcsIHRydWUgKVxuICAgICAgICB9LCAxIClcblxufSAvL0RhdGVQaWNrZXJcblxuXG4vKipcbiAqIFNldCBhIGRhdGVwaWNrZXIgaXRlbSBvYmplY3QuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGNhbGVuZGFySXRlbSA9IGNhbGVuZGFyLml0ZW1cblxuICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBgbnVsbGAganVzdCBzZXQgaXQgaW1tZWRpYXRlbHkuXG4gICAgaWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcbiAgICAgICAgaWYgKCB0eXBlID09ICdjbGVhcicgKSB0eXBlID0gJ3NlbGVjdCdcbiAgICAgICAgY2FsZW5kYXJJdGVtWyB0eXBlIF0gPSB2YWx1ZVxuICAgICAgICByZXR1cm4gY2FsZW5kYXJcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCB0aGUgcXVldWUgb2YgbWV0aG9kcywgYW5kIGludm9rZSB0aGUgZnVuY3Rpb25zLlxuICAgIC8vIFVwZGF0ZSB0aGlzIGFzIHRoZSB0aW1lIHVuaXQsIGFuZCBzZXQgdGhlIGZpbmFsIHZhbHVlIGFzIHRoaXMgaXRlbS5cbiAgICAvLyAqIEluIHRoZSBjYXNlIG9mIGBlbmFibGVgLCBrZWVwIHRoZSBxdWV1ZSBidXQgc2V0IGBkaXNhYmxlYCBpbnN0ZWFkLlxuICAgIC8vICAgQW5kIGluIHRoZSBjYXNlIG9mIGBmbGlwYCwga2VlcCB0aGUgcXVldWUgYnV0IHNldCBgZW5hYmxlYCBpbnN0ZWFkLlxuICAgIGNhbGVuZGFySXRlbVsgKCB0eXBlID09ICdlbmFibGUnID8gJ2Rpc2FibGUnIDogdHlwZSA9PSAnZmxpcCcgPyAnZW5hYmxlJyA6IHR5cGUgKSBdID0gY2FsZW5kYXIucXVldWVbIHR5cGUgXS5zcGxpdCggJyAnICkubWFwKCBmdW5jdGlvbiggbWV0aG9kICkge1xuICAgICAgICB2YWx1ZSA9IGNhbGVuZGFyWyBtZXRob2QgXSggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKVxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9KS5wb3AoKVxuXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBjYXNjYWRlIHRocm91Z2ggbW9yZSB1cGRhdGVzLlxuICAgIGlmICggdHlwZSA9PSAnc2VsZWN0JyApIHtcbiAgICAgICAgY2FsZW5kYXIuc2V0KCAnaGlnaGxpZ2h0JywgY2FsZW5kYXJJdGVtLnNlbGVjdCwgb3B0aW9ucyApXG4gICAgfVxuICAgIGVsc2UgaWYgKCB0eXBlID09ICdoaWdobGlnaHQnICkge1xuICAgICAgICBjYWxlbmRhci5zZXQoICd2aWV3JywgY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCwgb3B0aW9ucyApXG4gICAgfVxuICAgIGVsc2UgaWYgKCB0eXBlLm1hdGNoKCAvXihmbGlwfG1pbnxtYXh8ZGlzYWJsZXxlbmFibGUpJC8gKSApIHtcbiAgICAgICAgaWYgKCBjYWxlbmRhckl0ZW0uc2VsZWN0ICYmIGNhbGVuZGFyLmRpc2FibGVkKCBjYWxlbmRhckl0ZW0uc2VsZWN0ICkgKSB7XG4gICAgICAgICAgICBjYWxlbmRhci5zZXQoICdzZWxlY3QnLCBjYWxlbmRhckl0ZW0uc2VsZWN0LCBvcHRpb25zIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGNhbGVuZGFySXRlbS5oaWdobGlnaHQgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGNhbGVuZGFySXRlbS5oaWdobGlnaHQgKSApIHtcbiAgICAgICAgICAgIGNhbGVuZGFyLnNldCggJ2hpZ2hsaWdodCcsIGNhbGVuZGFySXRlbS5oaWdobGlnaHQsIG9wdGlvbnMgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGVuZGFyXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuc2V0XG5cblxuLyoqXG4gKiBHZXQgYSBkYXRlcGlja2VyIGl0ZW0gb2JqZWN0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiggdHlwZSApIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtWyB0eXBlIF1cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5nZXRcblxuXG4vKipcbiAqIENyZWF0ZSBhIHBpY2tlciBkYXRlIG9iamVjdC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xuXG4gICAgdmFyIGlzSW5maW5pdGVWYWx1ZSxcbiAgICAgICAgY2FsZW5kYXIgPSB0aGlzXG5cbiAgICAvLyBJZiB0aGVyZeKAmXMgbm8gdmFsdWUsIHVzZSB0aGUgdHlwZSBhcyB0aGUgdmFsdWUuXG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdHlwZSA6IHZhbHVlXG5cblxuICAgIC8vIElmIGl04oCZcyBpbmZpbml0eSwgdXBkYXRlIHRoZSB2YWx1ZS5cbiAgICBpZiAoIHZhbHVlID09IC1JbmZpbml0eSB8fCB2YWx1ZSA9PSBJbmZpbml0eSApIHtcbiAgICAgICAgaXNJbmZpbml0ZVZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICAvLyBJZiBpdOKAmXMgYW4gb2JqZWN0LCB1c2UgdGhlIG5hdGl2ZSBkYXRlIG9iamVjdC5cbiAgICBlbHNlIGlmICggJC5pc1BsYWluT2JqZWN0KCB2YWx1ZSApICYmIF8uaXNJbnRlZ2VyKCB2YWx1ZS5waWNrICkgKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUub2JqXG4gICAgfVxuXG4gICAgLy8gSWYgaXTigJlzIGFuIGFycmF5LCBjb252ZXJ0IGl0IGludG8gYSBkYXRlIGFuZCBtYWtlIHN1cmVcbiAgICAvLyB0aGF0IGl04oCZcyBhIHZhbGlkIGRhdGUg4oCTIG90aGVyd2lzZSBkZWZhdWx0IHRvIHRvZGF5LlxuICAgIGVsc2UgaWYgKCAkLmlzQXJyYXkoIHZhbHVlICkgKSB7XG4gICAgICAgIHZhbHVlID0gbmV3IERhdGUoIHZhbHVlWyAwIF0sIHZhbHVlWyAxIF0sIHZhbHVlWyAyIF0gKVxuICAgICAgICB2YWx1ZSA9IF8uaXNEYXRlKCB2YWx1ZSApID8gdmFsdWUgOiBjYWxlbmRhci5jcmVhdGUoKS5vYmpcbiAgICB9XG5cbiAgICAvLyBJZiBpdOKAmXMgYSBudW1iZXIgb3IgZGF0ZSBvYmplY3QsIG1ha2UgYSBub3JtYWxpemVkIGRhdGUuXG4gICAgZWxzZSBpZiAoIF8uaXNJbnRlZ2VyKCB2YWx1ZSApIHx8IF8uaXNEYXRlKCB2YWx1ZSApICkge1xuICAgICAgICB2YWx1ZSA9IGNhbGVuZGFyLm5vcm1hbGl6ZSggbmV3IERhdGUoIHZhbHVlICksIG9wdGlvbnMgKVxuICAgIH1cblxuICAgIC8vIElmIGl04oCZcyBhIGxpdGVyYWwgdHJ1ZSBvciBhbnkgb3RoZXIgY2FzZSwgc2V0IGl0IHRvIG5vdy5cbiAgICBlbHNlIC8qaWYgKCB2YWx1ZSA9PT0gdHJ1ZSApKi8ge1xuICAgICAgICB2YWx1ZSA9IGNhbGVuZGFyLm5vdyggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgY29tcGlsZWQgb2JqZWN0LlxuICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBtb250aDogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGU6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZS5nZXREYXRlKCksXG4gICAgICAgIGRheTogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldERheSgpLFxuICAgICAgICBvYmo6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZSxcbiAgICAgICAgcGljazogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldFRpbWUoKVxuICAgIH1cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5jcmVhdGVcblxuXG4vKipcbiAqIENyZWF0ZSBhIHJhbmdlIGxpbWl0IG9iamVjdCB1c2luZyBhbiBhcnJheSwgZGF0ZSBvYmplY3QsXG4gKiBsaXRlcmFsIOKAnHRydWXigJ0sIG9yIGludGVnZXIgcmVsYXRpdmUgdG8gYW5vdGhlciB0aW1lLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5jcmVhdGVSYW5nZSA9IGZ1bmN0aW9uKCBmcm9tLCB0byApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGNyZWF0ZURhdGUgPSBmdW5jdGlvbiggZGF0ZSApIHtcbiAgICAgICAgICAgIGlmICggZGF0ZSA9PT0gdHJ1ZSB8fCAkLmlzQXJyYXkoIGRhdGUgKSB8fCBfLmlzRGF0ZSggZGF0ZSApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxlbmRhci5jcmVhdGUoIGRhdGUgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGVcbiAgICAgICAgfVxuXG4gICAgLy8gQ3JlYXRlIG9iamVjdHMgaWYgcG9zc2libGUuXG4gICAgaWYgKCAhXy5pc0ludGVnZXIoIGZyb20gKSApIHtcbiAgICAgICAgZnJvbSA9IGNyZWF0ZURhdGUoIGZyb20gKVxuICAgIH1cbiAgICBpZiAoICFfLmlzSW50ZWdlciggdG8gKSApIHtcbiAgICAgICAgdG8gPSBjcmVhdGVEYXRlKCB0byApXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHJlbGF0aXZlIGRhdGVzLlxuICAgIGlmICggXy5pc0ludGVnZXIoIGZyb20gKSAmJiAkLmlzUGxhaW5PYmplY3QoIHRvICkgKSB7XG4gICAgICAgIGZyb20gPSBbIHRvLnllYXIsIHRvLm1vbnRoLCB0by5kYXRlICsgZnJvbSBdO1xuICAgIH1cbiAgICBlbHNlIGlmICggXy5pc0ludGVnZXIoIHRvICkgJiYgJC5pc1BsYWluT2JqZWN0KCBmcm9tICkgKSB7XG4gICAgICAgIHRvID0gWyBmcm9tLnllYXIsIGZyb20ubW9udGgsIGZyb20uZGF0ZSArIHRvIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbTogY3JlYXRlRGF0ZSggZnJvbSApLFxuICAgICAgICB0bzogY3JlYXRlRGF0ZSggdG8gKVxuICAgIH1cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5jcmVhdGVSYW5nZVxuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBkYXRlIHVuaXQgZmFsbHMgd2l0aGluIGEgZGF0ZSByYW5nZSBvYmplY3QuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLndpdGhpblJhbmdlID0gZnVuY3Rpb24oIHJhbmdlLCBkYXRlVW5pdCApIHtcbiAgICByYW5nZSA9IHRoaXMuY3JlYXRlUmFuZ2UocmFuZ2UuZnJvbSwgcmFuZ2UudG8pXG4gICAgcmV0dXJuIGRhdGVVbml0LnBpY2sgPj0gcmFuZ2UuZnJvbS5waWNrICYmIGRhdGVVbml0LnBpY2sgPD0gcmFuZ2UudG8ucGlja1xufVxuXG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIGRhdGUgcmFuZ2Ugb2JqZWN0cyBvdmVybGFwLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5vdmVybGFwUmFuZ2VzID0gZnVuY3Rpb24oIG9uZSwgdHdvICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpc1xuXG4gICAgLy8gQ29udmVydCB0aGUgcmFuZ2VzIGludG8gY29tcGFyYWJsZSBkYXRlcy5cbiAgICBvbmUgPSBjYWxlbmRhci5jcmVhdGVSYW5nZSggb25lLmZyb20sIG9uZS50byApXG4gICAgdHdvID0gY2FsZW5kYXIuY3JlYXRlUmFuZ2UoIHR3by5mcm9tLCB0d28udG8gKVxuXG4gICAgcmV0dXJuIGNhbGVuZGFyLndpdGhpblJhbmdlKCBvbmUsIHR3by5mcm9tICkgfHwgY2FsZW5kYXIud2l0aGluUmFuZ2UoIG9uZSwgdHdvLnRvICkgfHxcbiAgICAgICAgY2FsZW5kYXIud2l0aGluUmFuZ2UoIHR3bywgb25lLmZyb20gKSB8fCBjYWxlbmRhci53aXRoaW5SYW5nZSggdHdvLCBvbmUudG8gKVxufVxuXG5cbi8qKlxuICogR2V0IHRoZSBkYXRlIHRvZGF5LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5ub3cgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XG4gICAgdmFsdWUgPSBuZXcgRGF0ZSgpXG4gICAgaWYgKCBvcHRpb25zICYmIG9wdGlvbnMucmVsICkge1xuICAgICAgICB2YWx1ZS5zZXREYXRlKCB2YWx1ZS5nZXREYXRlKCkgKyBvcHRpb25zLnJlbCApXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSggdmFsdWUsIG9wdGlvbnMgKVxufVxuXG5cbi8qKlxuICogTmF2aWdhdGUgdG8gbmV4dC9wcmV2IG1vbnRoLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5uYXZpZ2F0ZSA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApIHtcblxuICAgIHZhciB0YXJnZXREYXRlT2JqZWN0LFxuICAgICAgICB0YXJnZXRZZWFyLFxuICAgICAgICB0YXJnZXRNb250aCxcbiAgICAgICAgdGFyZ2V0RGF0ZSxcbiAgICAgICAgaXNUYXJnZXRBcnJheSA9ICQuaXNBcnJheSggdmFsdWUgKSxcbiAgICAgICAgaXNUYXJnZXRPYmplY3QgPSAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICksXG4gICAgICAgIHZpZXdzZXRPYmplY3QgPSB0aGlzLml0ZW0udmlldy8qLFxuICAgICAgICBzYWZldHkgPSAxMDAqL1xuXG5cbiAgICBpZiAoIGlzVGFyZ2V0QXJyYXkgfHwgaXNUYXJnZXRPYmplY3QgKSB7XG5cbiAgICAgICAgaWYgKCBpc1RhcmdldE9iamVjdCApIHtcbiAgICAgICAgICAgIHRhcmdldFllYXIgPSB2YWx1ZS55ZWFyXG4gICAgICAgICAgICB0YXJnZXRNb250aCA9IHZhbHVlLm1vbnRoXG4gICAgICAgICAgICB0YXJnZXREYXRlID0gdmFsdWUuZGF0ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0WWVhciA9ICt2YWx1ZVswXVxuICAgICAgICAgICAgdGFyZ2V0TW9udGggPSArdmFsdWVbMV1cbiAgICAgICAgICAgIHRhcmdldERhdGUgPSArdmFsdWVbMl1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdl4oCZcmUgbmF2aWdhdGluZyBtb250aHMgYnV0IHRoZSB2aWV3IGlzIGluIGEgZGlmZmVyZW50XG4gICAgICAgIC8vIG1vbnRoLCBuYXZpZ2F0ZSB0byB0aGUgdmlld+KAmXMgeWVhciBhbmQgbW9udGguXG4gICAgICAgIGlmICggb3B0aW9ucyAmJiBvcHRpb25zLm5hdiAmJiB2aWV3c2V0T2JqZWN0ICYmIHZpZXdzZXRPYmplY3QubW9udGggIT09IHRhcmdldE1vbnRoICkge1xuICAgICAgICAgICAgdGFyZ2V0WWVhciA9IHZpZXdzZXRPYmplY3QueWVhclxuICAgICAgICAgICAgdGFyZ2V0TW9udGggPSB2aWV3c2V0T2JqZWN0Lm1vbnRoXG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaWd1cmUgb3V0IHRoZSBleHBlY3RlZCB0YXJnZXQgeWVhciBhbmQgbW9udGguXG4gICAgICAgIHRhcmdldERhdGVPYmplY3QgPSBuZXcgRGF0ZSggdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGggKyAoIG9wdGlvbnMgJiYgb3B0aW9ucy5uYXYgPyBvcHRpb25zLm5hdiA6IDAgKSwgMSApXG4gICAgICAgIHRhcmdldFllYXIgPSB0YXJnZXREYXRlT2JqZWN0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgdGFyZ2V0TW9udGggPSB0YXJnZXREYXRlT2JqZWN0LmdldE1vbnRoKClcblxuICAgICAgICAvLyBJZiB0aGUgbW9udGggd2XigJlyZSBnb2luZyB0byBkb2VzbuKAmXQgaGF2ZSBlbm91Z2ggZGF5cyxcbiAgICAgICAgLy8ga2VlcCBkZWNyZWFzaW5nIHRoZSBkYXRlIHVudGlsIHdlIHJlYWNoIHRoZSBtb250aOKAmXMgbGFzdCBkYXRlLlxuICAgICAgICB3aGlsZSAoIC8qc2FmZXR5ICYmKi8gbmV3IERhdGUoIHRhcmdldFllYXIsIHRhcmdldE1vbnRoLCB0YXJnZXREYXRlICkuZ2V0TW9udGgoKSAhPT0gdGFyZ2V0TW9udGggKSB7XG4gICAgICAgICAgICB0YXJnZXREYXRlIC09IDFcbiAgICAgICAgICAgIC8qc2FmZXR5IC09IDFcbiAgICAgICAgICAgIGlmICggIXNhZmV0eSApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnRmVsbCBpbnRvIGFuIGluZmluaXRlIGxvb3Agd2hpbGUgbmF2aWdhdGluZyB0byAnICsgbmV3IERhdGUoIHRhcmdldFllYXIsIHRhcmdldE1vbnRoLCB0YXJnZXREYXRlICkgKyAnLidcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBbIHRhcmdldFllYXIsIHRhcmdldE1vbnRoLCB0YXJnZXREYXRlIF1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5uYXZpZ2F0ZVxuXG5cbi8qKlxuICogTm9ybWFsaXplIGEgZGF0ZSBieSBzZXR0aW5nIHRoZSBob3VycyB0byBtaWRuaWdodC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24oIHZhbHVlLyosIG9wdGlvbnMqLyApIHtcbiAgICB2YWx1ZS5zZXRIb3VycyggMCwgMCwgMCwgMCApXG4gICAgcmV0dXJuIHZhbHVlXG59XG5cblxuLyoqXG4gKiBNZWFzdXJlIHRoZSByYW5nZSBvZiBkYXRlcy5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUubWVhc3VyZSA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZS8qLCBvcHRpb25zKi8gKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzXG5cbiAgICAvLyBJZiBpdOKAmXMgYW55dGhpbmcgZmFsc2UteSwgcmVtb3ZlIHRoZSBsaW1pdHMuXG4gICAgaWYgKCAhdmFsdWUgKSB7XG4gICAgICAgIHZhbHVlID0gdHlwZSA9PSAnbWluJyA/IC1JbmZpbml0eSA6IEluZmluaXR5XG4gICAgfVxuXG4gICAgLy8gSWYgaXTigJlzIGEgc3RyaW5nLCBwYXJzZSBpdC5cbiAgICBlbHNlIGlmICggdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnICkge1xuICAgICAgICB2YWx1ZSA9IGNhbGVuZGFyLnBhcnNlKCB0eXBlLCB2YWx1ZSApXG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBhbiBpbnRlZ2VyLCBnZXQgYSBkYXRlIHJlbGF0aXZlIHRvIHRvZGF5LlxuICAgIGVsc2UgaWYgKCBfLmlzSW50ZWdlciggdmFsdWUgKSApIHtcbiAgICAgICAgdmFsdWUgPSBjYWxlbmRhci5ub3coIHR5cGUsIHZhbHVlLCB7IHJlbDogdmFsdWUgfSApXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG59IC8vL0RhdGVQaWNrZXIucHJvdG90eXBlLm1lYXN1cmVcblxuXG4vKipcbiAqIENyZWF0ZSBhIHZpZXdzZXQgb2JqZWN0IGJhc2VkIG9uIG5hdmlnYXRpb24uXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLnZpZXdzZXQgPSBmdW5jdGlvbiggdHlwZSwgZGF0ZU9iamVjdC8qLCBvcHRpb25zKi8gKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFsgZGF0ZU9iamVjdC55ZWFyLCBkYXRlT2JqZWN0Lm1vbnRoLCAxIF0pXG59XG5cblxuLyoqXG4gKiBWYWxpZGF0ZSBhIGRhdGUgYXMgZW5hYmxlZCBhbmQgc2hpZnQgaWYgbmVlZGVkLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlT2JqZWN0LCBvcHRpb25zICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcblxuICAgICAgICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBkYXRlLlxuICAgICAgICBvcmlnaW5hbERhdGVPYmplY3QgPSBkYXRlT2JqZWN0LFxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGFuIGludGVydmFsLlxuICAgICAgICBpbnRlcnZhbCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnZhbCA/IG9wdGlvbnMuaW50ZXJ2YWwgOiAxLFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYWxlbmRhciBlbmFibGVkIGRhdGVzIGFyZSBpbnZlcnRlZC5cbiAgICAgICAgaXNGbGlwcGVkQmFzZSA9IGNhbGVuZGFyLml0ZW0uZW5hYmxlID09PSAtMSxcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFueSBlbmFibGVkIGRhdGVzIGFmdGVyL2JlZm9yZSBub3cuXG4gICAgICAgIGhhc0VuYWJsZWRCZWZvcmVUYXJnZXQsIGhhc0VuYWJsZWRBZnRlclRhcmdldCxcblxuICAgICAgICAvLyBUaGUgbWluICYgbWF4IGxpbWl0cy5cbiAgICAgICAgbWluTGltaXRPYmplY3QgPSBjYWxlbmRhci5pdGVtLm1pbixcbiAgICAgICAgbWF4TGltaXRPYmplY3QgPSBjYWxlbmRhci5pdGVtLm1heCxcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZeKAmXZlIHJlYWNoZWQgdGhlIGxpbWl0IGR1cmluZyBzaGlmdGluZy5cbiAgICAgICAgcmVhY2hlZE1pbiwgcmVhY2hlZE1heCxcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FsZW5kYXIgaXMgaW52ZXJ0ZWQgYW5kIGF0IGxlYXN0IG9uZSB3ZWVrZGF5IGlzIGVuYWJsZWQuXG4gICAgICAgIGhhc0VuYWJsZWRXZWVrZGF5cyA9IGlzRmxpcHBlZEJhc2UgJiYgY2FsZW5kYXIuaXRlbS5kaXNhYmxlLmZpbHRlciggZnVuY3Rpb24oIHZhbHVlICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZeKAmXMgYSBkYXRlLCBjaGVjayB3aGVyZSBpdCBpcyByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgaWYgKCAkLmlzQXJyYXkoIHZhbHVlICkgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGVUaW1lID0gY2FsZW5kYXIuY3JlYXRlKCB2YWx1ZSApLnBpY2tcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGVUaW1lIDwgZGF0ZU9iamVjdC5waWNrICkgaGFzRW5hYmxlZEJlZm9yZVRhcmdldCA9IHRydWVcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggZGF0ZVRpbWUgPiBkYXRlT2JqZWN0LnBpY2sgKSBoYXNFbmFibGVkQWZ0ZXJUYXJnZXQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiBvbmx5IGludGVnZXJzIGZvciBlbmFibGVkIHdlZWtkYXlzLlxuICAgICAgICAgICAgcmV0dXJuIF8uaXNJbnRlZ2VyKCB2YWx1ZSApXG4gICAgICAgIH0pLmxlbmd0aC8qLFxuXG4gICAgICAgIHNhZmV0eSA9IDEwMCovXG5cblxuXG4gICAgLy8gQ2FzZXMgdG8gdmFsaWRhdGUgZm9yOlxuICAgIC8vIFsxXSBOb3QgaW52ZXJ0ZWQgYW5kIGRhdGUgZGlzYWJsZWQuXG4gICAgLy8gWzJdIEludmVydGVkIGFuZCBzb21lIGRhdGVzIGVuYWJsZWQuXG4gICAgLy8gWzNdIE5vdCBpbnZlcnRlZCBhbmQgb3V0IG9mIHJhbmdlLlxuICAgIC8vXG4gICAgLy8gQ2FzZXMgdG8gKipub3QqKiB2YWxpZGF0ZSBmb3I6XG4gICAgLy8g4oCiIE5hdmlnYXRpbmcgbW9udGhzLlxuICAgIC8vIOKAoiBOb3QgaW52ZXJ0ZWQgYW5kIGRhdGUgZW5hYmxlZC5cbiAgICAvLyDigKIgSW52ZXJ0ZWQgYW5kIGFsbCBkYXRlcyBkaXNhYmxlZC5cbiAgICAvLyDigKIgLi5hbmQgYW55dGhpbmcgZWxzZS5cbiAgICBpZiAoICFvcHRpb25zIHx8ICFvcHRpb25zLm5hdiApIGlmIChcbiAgICAgICAgLyogMSAqLyAoICFpc0ZsaXBwZWRCYXNlICYmIGNhbGVuZGFyLmRpc2FibGVkKCBkYXRlT2JqZWN0ICkgKSB8fFxuICAgICAgICAvKiAyICovICggaXNGbGlwcGVkQmFzZSAmJiBjYWxlbmRhci5kaXNhYmxlZCggZGF0ZU9iamVjdCApICYmICggaGFzRW5hYmxlZFdlZWtkYXlzIHx8IGhhc0VuYWJsZWRCZWZvcmVUYXJnZXQgfHwgaGFzRW5hYmxlZEFmdGVyVGFyZ2V0ICkgKSB8fFxuICAgICAgICAvKiAzICovICggIWlzRmxpcHBlZEJhc2UgJiYgKGRhdGVPYmplY3QucGljayA8PSBtaW5MaW1pdE9iamVjdC5waWNrIHx8IGRhdGVPYmplY3QucGljayA+PSBtYXhMaW1pdE9iamVjdC5waWNrKSApXG4gICAgKSB7XG5cblxuICAgICAgICAvLyBXaGVuIGludmVydGVkLCBmbGlwIHRoZSBkaXJlY3Rpb24gaWYgdGhlcmUgYXJlbuKAmXQgYW55IGVuYWJsZWQgd2Vla2RheXNcbiAgICAgICAgLy8gYW5kIHRoZXJlIGFyZSBubyBlbmFibGVkIGRhdGVzIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGludGVydmFsLlxuICAgICAgICBpZiAoIGlzRmxpcHBlZEJhc2UgJiYgIWhhc0VuYWJsZWRXZWVrZGF5cyAmJiAoICggIWhhc0VuYWJsZWRBZnRlclRhcmdldCAmJiBpbnRlcnZhbCA+IDAgKSB8fCAoICFoYXNFbmFibGVkQmVmb3JlVGFyZ2V0ICYmIGludGVydmFsIDwgMCApICkgKSB7XG4gICAgICAgICAgICBpbnRlcnZhbCAqPSAtMVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBLZWVwIGxvb3BpbmcgdW50aWwgd2UgcmVhY2ggYW4gZW5hYmxlZCBkYXRlLlxuICAgICAgICB3aGlsZSAoIC8qc2FmZXR5ICYmKi8gY2FsZW5kYXIuZGlzYWJsZWQoIGRhdGVPYmplY3QgKSApIHtcblxuICAgICAgICAgICAgLypzYWZldHkgLT0gMVxuICAgICAgICAgICAgaWYgKCAhc2FmZXR5ICkge1xuICAgICAgICAgICAgICAgIHRocm93ICdGZWxsIGludG8gYW4gaW5maW5pdGUgbG9vcCB3aGlsZSB2YWxpZGF0aW5nICcgKyBkYXRlT2JqZWN0Lm9iaiArICcuJ1xuICAgICAgICAgICAgfSovXG5cblxuICAgICAgICAgICAgLy8gSWYgd2XigJl2ZSBsb29wZWQgaW50byB0aGUgbmV4dC9wcmV2IG1vbnRoIHdpdGggYSBsYXJnZSBpbnRlcnZhbCwgcmV0dXJuIHRvIHRoZSBvcmlnaW5hbCBkYXRlIGFuZCBmbGF0dGVuIHRoZSBpbnRlcnZhbC5cbiAgICAgICAgICAgIGlmICggTWF0aC5hYnMoIGludGVydmFsICkgPiAxICYmICggZGF0ZU9iamVjdC5tb250aCA8IG9yaWdpbmFsRGF0ZU9iamVjdC5tb250aCB8fCBkYXRlT2JqZWN0Lm1vbnRoID4gb3JpZ2luYWxEYXRlT2JqZWN0Lm1vbnRoICkgKSB7XG4gICAgICAgICAgICAgICAgZGF0ZU9iamVjdCA9IG9yaWdpbmFsRGF0ZU9iamVjdFxuICAgICAgICAgICAgICAgIGludGVydmFsID0gaW50ZXJ2YWwgPiAwID8gMSA6IC0xXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gSWYgd2XigJl2ZSByZWFjaGVkIHRoZSBtaW4vbWF4IGxpbWl0LCByZXZlcnNlIHRoZSBkaXJlY3Rpb24sIGZsYXR0ZW4gdGhlIGludGVydmFsIGFuZCBzZXQgaXQgdG8gdGhlIGxpbWl0LlxuICAgICAgICAgICAgaWYgKCBkYXRlT2JqZWN0LnBpY2sgPD0gbWluTGltaXRPYmplY3QucGljayApIHtcbiAgICAgICAgICAgICAgICByZWFjaGVkTWluID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGludGVydmFsID0gMVxuICAgICAgICAgICAgICAgIGRhdGVPYmplY3QgPSBjYWxlbmRhci5jcmVhdGUoW1xuICAgICAgICAgICAgICAgICAgICBtaW5MaW1pdE9iamVjdC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBtaW5MaW1pdE9iamVjdC5tb250aCxcbiAgICAgICAgICAgICAgICAgICAgbWluTGltaXRPYmplY3QuZGF0ZSArIChkYXRlT2JqZWN0LnBpY2sgPT09IG1pbkxpbWl0T2JqZWN0LnBpY2sgPyAwIDogLTEpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBkYXRlT2JqZWN0LnBpY2sgPj0gbWF4TGltaXRPYmplY3QucGljayApIHtcbiAgICAgICAgICAgICAgICByZWFjaGVkTWF4ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGludGVydmFsID0gLTFcbiAgICAgICAgICAgICAgICBkYXRlT2JqZWN0ID0gY2FsZW5kYXIuY3JlYXRlKFtcbiAgICAgICAgICAgICAgICAgICAgbWF4TGltaXRPYmplY3QueWVhcixcbiAgICAgICAgICAgICAgICAgICAgbWF4TGltaXRPYmplY3QubW9udGgsXG4gICAgICAgICAgICAgICAgICAgIG1heExpbWl0T2JqZWN0LmRhdGUgKyAoZGF0ZU9iamVjdC5waWNrID09PSBtYXhMaW1pdE9iamVjdC5waWNrID8gMCA6IDEpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBJZiB3ZeKAmXZlIHJlYWNoZWQgYm90aCBsaW1pdHMsIGp1c3QgYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxuICAgICAgICAgICAgaWYgKCByZWFjaGVkTWluICYmIHJlYWNoZWRNYXggKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBjcmVhdGUgdGhlIHNoaWZ0ZWQgZGF0ZSB1c2luZyB0aGUgaW50ZXJ2YWwgYW5kIGtlZXAgbG9vcGluZy5cbiAgICAgICAgICAgIGRhdGVPYmplY3QgPSBjYWxlbmRhci5jcmVhdGUoWyBkYXRlT2JqZWN0LnllYXIsIGRhdGVPYmplY3QubW9udGgsIGRhdGVPYmplY3QuZGF0ZSArIGludGVydmFsIF0pXG4gICAgICAgIH1cblxuICAgIH0gLy9lbmRpZlxuXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRhdGUgb2JqZWN0IHNldHRsZWQgb24uXG4gICAgcmV0dXJuIGRhdGVPYmplY3Rcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS52YWxpZGF0ZVxuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGRpc2FibGVkLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5kaXNhYmxlZCA9IGZ1bmN0aW9uKCBkYXRlVG9WZXJpZnkgKSB7XG5cbiAgICB2YXJcbiAgICAgICAgY2FsZW5kYXIgPSB0aGlzLFxuXG4gICAgICAgIC8vIEZpbHRlciB0aHJvdWdoIHRoZSBkaXNhYmxlZCBkYXRlcyB0byBjaGVjayBpZiB0aGlzIGlzIG9uZS5cbiAgICAgICAgaXNEaXNhYmxlZE1hdGNoID0gY2FsZW5kYXIuaXRlbS5kaXNhYmxlLmZpbHRlciggZnVuY3Rpb24oIGRhdGVUb0Rpc2FibGUgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkYXRlIGlzIGEgbnVtYmVyLCBtYXRjaCB0aGUgd2Vla2RheSB3aXRoIDBpbmRleCBhbmQgYGZpcnN0RGF5YCBjaGVjay5cbiAgICAgICAgICAgIGlmICggXy5pc0ludGVnZXIoIGRhdGVUb0Rpc2FibGUgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZVRvVmVyaWZ5LmRheSA9PT0gKCBjYWxlbmRhci5zZXR0aW5ncy5maXJzdERheSA/IGRhdGVUb0Rpc2FibGUgOiBkYXRlVG9EaXNhYmxlIC0gMSApICUgN1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdOKAmXMgYW4gYXJyYXkgb3IgYSBuYXRpdmUgSlMgZGF0ZSwgY3JlYXRlIGFuZCBtYXRjaCB0aGUgZXhhY3QgZGF0ZS5cbiAgICAgICAgICAgIGlmICggJC5pc0FycmF5KCBkYXRlVG9EaXNhYmxlICkgfHwgXy5pc0RhdGUoIGRhdGVUb0Rpc2FibGUgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZVRvVmVyaWZ5LnBpY2sgPT09IGNhbGVuZGFyLmNyZWF0ZSggZGF0ZVRvRGlzYWJsZSApLnBpY2tcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFuIG9iamVjdCwgbWF0Y2ggYSBkYXRlIHdpdGhpbiB0aGUg4oCcZnJvbeKAnSBhbmQg4oCcdG/igJ0gcmFuZ2UuXG4gICAgICAgICAgICBpZiAoICQuaXNQbGFpbk9iamVjdCggZGF0ZVRvRGlzYWJsZSApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxlbmRhci53aXRoaW5SYW5nZSggZGF0ZVRvRGlzYWJsZSwgZGF0ZVRvVmVyaWZ5IClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIC8vIElmIHRoaXMgZGF0ZSBtYXRjaGVzIGEgZGlzYWJsZWQgZGF0ZSwgY29uZmlybSBpdOKAmXMgbm90IGludmVydGVkLlxuICAgIGlzRGlzYWJsZWRNYXRjaCA9IGlzRGlzYWJsZWRNYXRjaC5sZW5ndGggJiYgIWlzRGlzYWJsZWRNYXRjaC5maWx0ZXIoZnVuY3Rpb24oIGRhdGVUb0Rpc2FibGUgKSB7XG4gICAgICAgIHJldHVybiAkLmlzQXJyYXkoIGRhdGVUb0Rpc2FibGUgKSAmJiBkYXRlVG9EaXNhYmxlWzNdID09ICdpbnZlcnRlZCcgfHxcbiAgICAgICAgICAgICQuaXNQbGFpbk9iamVjdCggZGF0ZVRvRGlzYWJsZSApICYmIGRhdGVUb0Rpc2FibGUuaW52ZXJ0ZWRcbiAgICB9KS5sZW5ndGhcblxuICAgIC8vIENoZWNrIHRoZSBjYWxlbmRhciDigJxlbmFibGVk4oCdIGZsYWcgYW5kIHJlc3BlY3RpdmVseSBmbGlwIHRoZVxuICAgIC8vIGRpc2FibGVkIHN0YXRlLiBUaGVuIGFsc28gY2hlY2sgaWYgaXTigJlzIGJleW9uZCB0aGUgbWluL21heCBsaW1pdHMuXG4gICAgcmV0dXJuIGNhbGVuZGFyLml0ZW0uZW5hYmxlID09PSAtMSA/ICFpc0Rpc2FibGVkTWF0Y2ggOiBpc0Rpc2FibGVkTWF0Y2ggfHxcbiAgICAgICAgZGF0ZVRvVmVyaWZ5LnBpY2sgPCBjYWxlbmRhci5pdGVtLm1pbi5waWNrIHx8XG4gICAgICAgIGRhdGVUb1ZlcmlmeS5waWNrID4gY2FsZW5kYXIuaXRlbS5tYXgucGlja1xuXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuZGlzYWJsZWRcblxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGludG8gYSB1c2FibGUgdHlwZS5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBwYXJzaW5nT2JqZWN0ID0ge31cblxuICAgIC8vIElmIGl04oCZcyBhbHJlYWR5IHBhcnNlZCwgd2XigJlyZSBnb29kLlxuICAgIGlmICggIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJyApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCBhIGAuZm9ybWF0YCB0byBwYXJzZSB0aGUgdmFsdWUgd2l0aC5cbiAgICBpZiAoICEoIG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JtYXQgKSApIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSBjYWxlbmRhci5zZXR0aW5ncy5mb3JtYXRcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRoZSBmb3JtYXQgaW50byBhbiBhcnJheSBhbmQgdGhlbiBtYXAgdGhyb3VnaCBpdC5cbiAgICBjYWxlbmRhci5mb3JtYXRzLnRvQXJyYXkoIG9wdGlvbnMuZm9ybWF0ICkubWFwKCBmdW5jdGlvbiggbGFiZWwgKSB7XG5cbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBHcmFiIHRoZSBmb3JtYXR0aW5nIGxhYmVsLlxuICAgICAgICAgICAgZm9ybWF0dGluZ0xhYmVsID0gY2FsZW5kYXIuZm9ybWF0c1sgbGFiZWwgXSxcblxuICAgICAgICAgICAgLy8gVGhlIGZvcm1hdCBsZW5ndGggaXMgZnJvbSB0aGUgZm9ybWF0dGluZyBsYWJlbCBmdW5jdGlvbiBvciB0aGVcbiAgICAgICAgICAgIC8vIGxhYmVsIGxlbmd0aCB3aXRob3V0IHRoZSBlc2NhcGluZyBleGNsYW1hdGlvbiAoISkgbWFyay5cbiAgICAgICAgICAgIGZvcm1hdExlbmd0aCA9IGZvcm1hdHRpbmdMYWJlbCA/IF8udHJpZ2dlciggZm9ybWF0dGluZ0xhYmVsLCBjYWxlbmRhciwgWyB2YWx1ZSwgcGFyc2luZ09iamVjdCBdICkgOiBsYWJlbC5yZXBsYWNlKCAvXiEvLCAnJyApLmxlbmd0aFxuXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSBmb3JtYXQgbGFiZWwsIHNwbGl0IHRoZSB2YWx1ZSB1cCB0byB0aGUgZm9ybWF0IGxlbmd0aC5cbiAgICAgICAgLy8gVGhlbiBhZGQgaXQgdG8gdGhlIHBhcnNpbmcgb2JqZWN0IHdpdGggYXBwcm9wcmlhdGUgbGFiZWwuXG4gICAgICAgIGlmICggZm9ybWF0dGluZ0xhYmVsICkge1xuICAgICAgICAgICAgcGFyc2luZ09iamVjdFsgbGFiZWwgXSA9IHZhbHVlLnN1YnN0ciggMCwgZm9ybWF0TGVuZ3RoIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgYXMgdGhlIHN1YnN0cmluZyBmcm9tIGZvcm1hdCBsZW5ndGggdG8gZW5kLlxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0ciggZm9ybWF0TGVuZ3RoIClcbiAgICB9KVxuXG4gICAgLy8gQ29tcGVuc2F0ZSBmb3IgbW9udGggMGluZGV4LlxuICAgIHJldHVybiBbXG4gICAgICAgIHBhcnNpbmdPYmplY3QueXl5eSB8fCBwYXJzaW5nT2JqZWN0Lnl5LFxuICAgICAgICArKCBwYXJzaW5nT2JqZWN0Lm1tIHx8IHBhcnNpbmdPYmplY3QubSApIC0gMSxcbiAgICAgICAgcGFyc2luZ09iamVjdC5kZCB8fCBwYXJzaW5nT2JqZWN0LmRcbiAgICBdXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUucGFyc2VcblxuXG4vKipcbiAqIFZhcmlvdXMgZm9ybWF0cyB0byBkaXNwbGF5IHRoZSBvYmplY3QgaW4uXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmZvcm1hdHMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZCBpbiBhIGNvbGxlY3Rpb24uXG4gICAgZnVuY3Rpb24gZ2V0V29yZExlbmd0aEZyb21Db2xsZWN0aW9uKCBzdHJpbmcsIGNvbGxlY3Rpb24sIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgLy8gR3JhYiB0aGUgZmlyc3Qgd29yZCBmcm9tIHRoZSBzdHJpbmcuXG4gICAgICAgIHZhciB3b3JkID0gc3RyaW5nLm1hdGNoKCAvXFx3Ky8gKVsgMCBdXG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBtb250aCBpbmRleCwgYWRkIGl0IHRvIHRoZSBkYXRlIG9iamVjdFxuICAgICAgICBpZiAoICFkYXRlT2JqZWN0Lm1tICYmICFkYXRlT2JqZWN0Lm0gKSB7XG4gICAgICAgICAgICBkYXRlT2JqZWN0Lm0gPSBjb2xsZWN0aW9uLmluZGV4T2YoIHdvcmQgKSArIDFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSB3b3JkLlxuICAgICAgICByZXR1cm4gd29yZC5sZW5ndGhcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZCBpbiBhIHN0cmluZy5cbiAgICBmdW5jdGlvbiBnZXRGaXJzdFdvcmRMZW5ndGgoIHN0cmluZyApIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5tYXRjaCggL1xcdysvIClbIDAgXS5sZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgc3RyaW5nLCB0aGVuIGdldCB0aGUgZGlnaXRzIGxlbmd0aC5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIGRhdGUuXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gXy5kaWdpdHMoIHN0cmluZyApIDogZGF0ZU9iamVjdC5kYXRlXG4gICAgICAgIH0sXG4gICAgICAgIGRkOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDIuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBkYXRlIHdpdGggYSBsZWFkaW5nIHplcm8uXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gMiA6IF8ubGVhZCggZGF0ZU9iamVjdC5kYXRlIClcbiAgICAgICAgfSxcbiAgICAgICAgZGRkOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSBmaXJzdCB3b3JkLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2hvcnQgc2VsZWN0ZWQgd2Vla2RheS5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBnZXRGaXJzdFdvcmRMZW5ndGgoIHN0cmluZyApIDogdGhpcy5zZXR0aW5ncy53ZWVrZGF5c1Nob3J0WyBkYXRlT2JqZWN0LmRheSBdXG4gICAgICAgIH0sXG4gICAgICAgIGRkZGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIGZpcnN0IHdvcmQuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBmdWxsIHNlbGVjdGVkIHdlZWtkYXkuXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gZ2V0Rmlyc3RXb3JkTGVuZ3RoKCBzdHJpbmcgKSA6IHRoaXMuc2V0dGluZ3Mud2Vla2RheXNGdWxsWyBkYXRlT2JqZWN0LmRheSBdXG4gICAgICAgIH0sXG4gICAgICAgIG06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIGRpZ2l0c1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgbW9udGggd2l0aCAwaW5kZXggY29tcGVuc2F0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IF8uZGlnaXRzKCBzdHJpbmcgKSA6IGRhdGVPYmplY3QubW9udGggKyAxXG4gICAgICAgIH0sXG4gICAgICAgIG1tOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDIuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBtb250aCB3aXRoIDBpbmRleCBhbmQgbGVhZGluZyB6ZXJvLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IDIgOiBfLmxlYWQoIGRhdGVPYmplY3QubW9udGggKyAxIClcbiAgICAgICAgfSxcbiAgICAgICAgbW1tOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuc2V0dGluZ3MubW9udGhzU2hvcnRcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgZ2V0IGxlbmd0aCBvZiB0aGUgcmVsZXZhbnQgbW9udGggZnJvbSB0aGUgc2hvcnRcbiAgICAgICAgICAgIC8vIG1vbnRocyBjb2xsZWN0aW9uLiBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBtb250aCBmcm9tIHRoYXQgY29sbGVjdGlvbi5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBnZXRXb3JkTGVuZ3RoRnJvbUNvbGxlY3Rpb24oIHN0cmluZywgY29sbGVjdGlvbiwgZGF0ZU9iamVjdCApIDogY29sbGVjdGlvblsgZGF0ZU9iamVjdC5tb250aCBdXG4gICAgICAgIH0sXG4gICAgICAgIG1tbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5tb250aHNGdWxsXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIGdldCBsZW5ndGggb2YgdGhlIHJlbGV2YW50IG1vbnRoIGZyb20gdGhlIGZ1bGxcbiAgICAgICAgICAgIC8vIG1vbnRocyBjb2xsZWN0aW9uLiBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBtb250aCBmcm9tIHRoYXQgY29sbGVjdGlvbi5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBnZXRXb3JkTGVuZ3RoRnJvbUNvbGxlY3Rpb24oIHN0cmluZywgY29sbGVjdGlvbiwgZGF0ZU9iamVjdCApIDogY29sbGVjdGlvblsgZGF0ZU9iamVjdC5tb250aCBdXG4gICAgICAgIH0sXG4gICAgICAgIHl5OiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDIuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCB5ZWFyIGJ5IHNsaWNpbmcgb3V0IHRoZSBmaXJzdCAyIGRpZ2l0cy5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyAyIDogKCAnJyArIGRhdGVPYmplY3QueWVhciApLnNsaWNlKCAyIClcbiAgICAgICAgfSxcbiAgICAgICAgeXl5eTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiB0aGUgbGVuZ3RoIGlzIGFsd2F5cyA0LlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgeWVhci5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyA0IDogZGF0ZU9iamVjdC55ZWFyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IGJ5IHNwbGl0dGluZyB0aGUgZm9ybWF0dGluZyBzdHJpbmcgcGFzc2VkLlxuICAgICAgICB0b0FycmF5OiBmdW5jdGlvbiggZm9ybWF0U3RyaW5nICkgeyByZXR1cm4gZm9ybWF0U3RyaW5nLnNwbGl0KCAvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyApIH0sXG5cbiAgICAgICAgLy8gRm9ybWF0IGFuIG9iamVjdCBpbnRvIGEgc3RyaW5nIHVzaW5nIHRoZSBmb3JtYXR0aW5nIG9wdGlvbnMuXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoIGZvcm1hdFN0cmluZywgaXRlbU9iamVjdCApIHtcbiAgICAgICAgICAgIHZhciBjYWxlbmRhciA9IHRoaXNcbiAgICAgICAgICAgIHJldHVybiBjYWxlbmRhci5mb3JtYXRzLnRvQXJyYXkoIGZvcm1hdFN0cmluZyApLm1hcCggZnVuY3Rpb24oIGxhYmVsICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyaWdnZXIoIGNhbGVuZGFyLmZvcm1hdHNbIGxhYmVsIF0sIGNhbGVuZGFyLCBbIDAsIGl0ZW1PYmplY3QgXSApIHx8IGxhYmVsLnJlcGxhY2UoIC9eIS8sICcnIClcbiAgICAgICAgICAgIH0pLmpvaW4oICcnIClcbiAgICAgICAgfVxuICAgIH1cbn0pKCkgLy9EYXRlUGlja2VyLnByb3RvdHlwZS5mb3JtYXRzXG5cblxuXG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIGRhdGUgdW5pdHMgYXJlIHRoZSBleGFjdC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuaXNEYXRlRXhhY3QgPSBmdW5jdGlvbiggb25lLCB0d28gKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzXG5cbiAgICAvLyBXaGVuIHdl4oCZcmUgd29ya2luZyB3aXRoIHdlZWtkYXlzLCBkbyBhIGRpcmVjdCBjb21wYXJpc29uLlxuICAgIGlmIChcbiAgICAgICAgKCBfLmlzSW50ZWdlciggb25lICkgJiYgXy5pc0ludGVnZXIoIHR3byApICkgfHxcbiAgICAgICAgKCB0eXBlb2Ygb25lID09ICdib29sZWFuJyAmJiB0eXBlb2YgdHdvID09ICdib29sZWFuJyApXG4gICAgICkge1xuICAgICAgICByZXR1cm4gb25lID09PSB0d29cbiAgICB9XG5cbiAgICAvLyBXaGVuIHdl4oCZcmUgd29ya2luZyB3aXRoIGRhdGUgcmVwcmVzZW50YXRpb25zLCBjb21wYXJlIHRoZSDigJxwaWNr4oCdIHZhbHVlLlxuICAgIGlmIChcbiAgICAgICAgKCBfLmlzRGF0ZSggb25lICkgfHwgJC5pc0FycmF5KCBvbmUgKSApICYmXG4gICAgICAgICggXy5pc0RhdGUoIHR3byApIHx8ICQuaXNBcnJheSggdHdvICkgKVxuICAgICkge1xuICAgICAgICByZXR1cm4gY2FsZW5kYXIuY3JlYXRlKCBvbmUgKS5waWNrID09PSBjYWxlbmRhci5jcmVhdGUoIHR3byApLnBpY2tcbiAgICB9XG5cbiAgICAvLyBXaGVuIHdl4oCZcmUgd29ya2luZyB3aXRoIHJhbmdlIG9iamVjdHMsIGNvbXBhcmUgdGhlIOKAnGZyb23igJ0gYW5kIOKAnHRv4oCdLlxuICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCBvbmUgKSAmJiAkLmlzUGxhaW5PYmplY3QoIHR3byApICkge1xuICAgICAgICByZXR1cm4gY2FsZW5kYXIuaXNEYXRlRXhhY3QoIG9uZS5mcm9tLCB0d28uZnJvbSApICYmIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBvbmUudG8sIHR3by50byApXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG59XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZSB1bml0cyBvdmVybGFwLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5pc0RhdGVPdmVybGFwID0gZnVuY3Rpb24oIG9uZSwgdHdvICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgZmlyc3REYXkgPSBjYWxlbmRhci5zZXR0aW5ncy5maXJzdERheSA/IDEgOiAwXG5cbiAgICAvLyBXaGVuIHdl4oCZcmUgd29ya2luZyB3aXRoIGEgd2Vla2RheSBpbmRleCwgY29tcGFyZSB0aGUgZGF5cy5cbiAgICBpZiAoIF8uaXNJbnRlZ2VyKCBvbmUgKSAmJiAoIF8uaXNEYXRlKCB0d28gKSB8fCAkLmlzQXJyYXkoIHR3byApICkgKSB7XG4gICAgICAgIG9uZSA9IG9uZSAlIDcgKyBmaXJzdERheVxuICAgICAgICByZXR1cm4gb25lID09PSBjYWxlbmRhci5jcmVhdGUoIHR3byApLmRheSArIDFcbiAgICB9XG4gICAgaWYgKCBfLmlzSW50ZWdlciggdHdvICkgJiYgKCBfLmlzRGF0ZSggb25lICkgfHwgJC5pc0FycmF5KCBvbmUgKSApICkge1xuICAgICAgICB0d28gPSB0d28gJSA3ICsgZmlyc3REYXlcbiAgICAgICAgcmV0dXJuIHR3byA9PT0gY2FsZW5kYXIuY3JlYXRlKCBvbmUgKS5kYXkgKyAxXG4gICAgfVxuXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCByYW5nZSBvYmplY3RzLCBjaGVjayBpZiB0aGUgcmFuZ2VzIG92ZXJsYXAuXG4gICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIG9uZSApICYmICQuaXNQbGFpbk9iamVjdCggdHdvICkgKSB7XG4gICAgICAgIHJldHVybiBjYWxlbmRhci5vdmVybGFwUmFuZ2VzKCBvbmUsIHR3byApXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG59XG5cblxuLyoqXG4gKiBGbGlwIHRoZSDigJxlbmFibGVk4oCdIHN0YXRlLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5mbGlwRW5hYmxlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdmFyIGl0ZW1PYmplY3QgPSB0aGlzLml0ZW1cbiAgICBpdGVtT2JqZWN0LmVuYWJsZSA9IHZhbCB8fCAoaXRlbU9iamVjdC5lbmFibGUgPT0gLTEgPyAxIDogLTEpXG59XG5cblxuLyoqXG4gKiBNYXJrIGEgY29sbGVjdGlvbiBvZiBkYXRlcyBhcyDigJxkaXNhYmxlZOKAnS5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlc1RvRGlzYWJsZSApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBjYWxlbmRhci5pdGVtLmRpc2FibGUuc2xpY2UoMClcblxuXG4gICAgLy8gSWYgd2XigJlyZSBmbGlwcGluZywgdGhhdOKAmXMgYWxsIHdlIG5lZWQgdG8gZG8uXG4gICAgaWYgKCBkYXRlc1RvRGlzYWJsZSA9PSAnZmxpcCcgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoKVxuICAgIH1cblxuICAgIGVsc2UgaWYgKCBkYXRlc1RvRGlzYWJsZSA9PT0gZmFsc2UgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoMSlcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IFtdXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoIGRhdGVzVG9EaXNhYmxlID09PSB0cnVlICkge1xuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKC0xKVxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCB0aGUgZGF0ZXMgdG8gZGlzYWJsZS5cbiAgICBlbHNlIHtcblxuICAgICAgICBkYXRlc1RvRGlzYWJsZS5tYXAoZnVuY3Rpb24oIHVuaXRUb0Rpc2FibGUgKSB7XG5cbiAgICAgICAgICAgIHZhciBtYXRjaEZvdW5kXG5cbiAgICAgICAgICAgIC8vIFdoZW4gd2UgaGF2ZSBkaXNhYmxlZCBpdGVtcywgY2hlY2sgZm9yIG1hdGNoZXMuXG4gICAgICAgICAgICAvLyBJZiBzb21ldGhpbmcgaXMgbWF0Y2hlZCwgaW1tZWRpYXRlbHkgYnJlYWsgb3V0LlxuICAgICAgICAgICAgZm9yICggdmFyIGluZGV4ID0gMDsgaW5kZXggPCBkaXNhYmxlZEl0ZW1zLmxlbmd0aDsgaW5kZXggKz0gMSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCB1bml0VG9EaXNhYmxlLCBkaXNhYmxlZEl0ZW1zW2luZGV4XSApICkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgbm90aGluZyB3YXMgZm91bmQsIGFkZCB0aGUgdmFsaWRhdGVkIHVuaXQgdG8gdGhlIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICBpZiAoICFtYXRjaEZvdW5kICkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgXy5pc0ludGVnZXIoIHVuaXRUb0Rpc2FibGUgKSB8fFxuICAgICAgICAgICAgICAgICAgICBfLmlzRGF0ZSggdW5pdFRvRGlzYWJsZSApIHx8XG4gICAgICAgICAgICAgICAgICAgICQuaXNBcnJheSggdW5pdFRvRGlzYWJsZSApIHx8XG4gICAgICAgICAgICAgICAgICAgICggJC5pc1BsYWluT2JqZWN0KCB1bml0VG9EaXNhYmxlICkgJiYgdW5pdFRvRGlzYWJsZS5mcm9tICYmIHVuaXRUb0Rpc2FibGUudG8gKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZEl0ZW1zLnB1c2goIHVuaXRUb0Rpc2FibGUgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIHVwZGF0ZWQgY29sbGVjdGlvbi5cbiAgICByZXR1cm4gZGlzYWJsZWRJdGVtc1xufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmRlYWN0aXZhdGVcblxuXG4vKipcbiAqIE1hcmsgYSBjb2xsZWN0aW9uIG9mIGRhdGVzIGFzIOKAnGVuYWJsZWTigJ0uXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oIHR5cGUsIGRhdGVzVG9FbmFibGUgKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gY2FsZW5kYXIuaXRlbS5kaXNhYmxlLFxuICAgICAgICBkaXNhYmxlZEl0ZW1zQ291bnQgPSBkaXNhYmxlZEl0ZW1zLmxlbmd0aFxuXG4gICAgLy8gSWYgd2XigJlyZSBmbGlwcGluZywgdGhhdOKAmXMgYWxsIHdlIG5lZWQgdG8gZG8uXG4gICAgaWYgKCBkYXRlc1RvRW5hYmxlID09ICdmbGlwJyApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgpXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoIGRhdGVzVG9FbmFibGUgPT09IHRydWUgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoMSlcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IFtdXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoIGRhdGVzVG9FbmFibGUgPT09IGZhbHNlICkge1xuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKC0xKVxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCB0aGUgZGlzYWJsZWQgZGF0ZXMuXG4gICAgZWxzZSB7XG5cbiAgICAgICAgZGF0ZXNUb0VuYWJsZS5tYXAoZnVuY3Rpb24oIHVuaXRUb0VuYWJsZSApIHtcblxuICAgICAgICAgICAgdmFyIG1hdGNoRm91bmQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRVbml0LFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGlzRXhhY3RSYW5nZVxuXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSBkaXNhYmxlZCBpdGVtcyBhbmQgdHJ5IHRvIGZpbmQgYSBtYXRjaC5cbiAgICAgICAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBkaXNhYmxlZEl0ZW1zQ291bnQ7IGluZGV4ICs9IDEgKSB7XG5cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFVuaXQgPSBkaXNhYmxlZEl0ZW1zW2luZGV4XVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBhbiBleGFjdCBtYXRjaCBpcyBmb3VuZCwgcmVtb3ZlIGl0IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5pc0RhdGVFeGFjdCggZGlzYWJsZWRVbml0LCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGb3VuZCA9IGRpc2FibGVkSXRlbXNbaW5kZXhdID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpc0V4YWN0UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBhbiBvdmVybGFwcGVkIG1hdGNoIGlzIGZvdW5kLCBhZGQgdGhlIOKAnGludmVydGVk4oCdIHN0YXRlIHRvIGl0LlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBjYWxlbmRhci5pc0RhdGVPdmVybGFwKCBkaXNhYmxlZFVuaXQsIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICQuaXNQbGFpbk9iamVjdCggdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0VG9FbmFibGUuaW52ZXJ0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gdW5pdFRvRW5hYmxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICQuaXNBcnJheSggdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gdW5pdFRvRW5hYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFtYXRjaEZvdW5kWzNdICkgbWF0Y2hGb3VuZC5wdXNoKCAnaW52ZXJ0ZWQnIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5pc0RhdGUoIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hGb3VuZCA9IFsgdW5pdFRvRW5hYmxlLmdldEZ1bGxZZWFyKCksIHVuaXRUb0VuYWJsZS5nZXRNb250aCgpLCB1bml0VG9FbmFibGUuZ2V0RGF0ZSgpLCAnaW52ZXJ0ZWQnIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgYSBtYXRjaCB3YXMgZm91bmQsIHJlbW92ZSBhIHByZXZpb3VzIGR1cGxpY2F0ZSBlbnRyeS5cbiAgICAgICAgICAgIGlmICggbWF0Y2hGb3VuZCApIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBkaXNhYmxlZEl0ZW1zQ291bnQ7IGluZGV4ICs9IDEgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5pc0RhdGVFeGFjdCggZGlzYWJsZWRJdGVtc1tpbmRleF0sIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZEl0ZW1zW2luZGV4XSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEluIHRoZSBldmVudCB0aGF0IHdl4oCZcmUgZGVhbGluZyB3aXRoIGFuIGV4YWN0IHJhbmdlIG9mIGRhdGVzLFxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlIGFyZSBubyDigJxpbnZlcnRlZOKAnSBkYXRlcyBiZWNhdXNlIG9mIGl0LlxuICAgICAgICAgICAgaWYgKCBpc0V4YWN0UmFuZ2UgKSBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZGlzYWJsZWRJdGVtc0NvdW50OyBpbmRleCArPSAxICkge1xuICAgICAgICAgICAgICAgIGlmICggY2FsZW5kYXIuaXNEYXRlT3ZlcmxhcCggZGlzYWJsZWRJdGVtc1tpbmRleF0sIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZEl0ZW1zW2luZGV4XSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBzdGlsbCBtYXRjaGVkLCBhZGQgaXQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAgICAgICAgICAgIGlmICggbWF0Y2hGb3VuZCApIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZEl0ZW1zLnB1c2goIG1hdGNoRm91bmQgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgdXBkYXRlZCBjb2xsZWN0aW9uLlxuICAgIHJldHVybiBkaXNhYmxlZEl0ZW1zLmZpbHRlcihmdW5jdGlvbiggdmFsICkgeyByZXR1cm4gdmFsICE9IG51bGwgfSlcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5hY3RpdmF0ZVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZvciB0aGUgbm9kZXMgaW4gdGhlIHBpY2tlci5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUubm9kZXMgPSBmdW5jdGlvbiggaXNPcGVuICkge1xuXG4gICAgdmFyXG4gICAgICAgIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgc2V0dGluZ3MgPSBjYWxlbmRhci5zZXR0aW5ncyxcbiAgICAgICAgY2FsZW5kYXJJdGVtID0gY2FsZW5kYXIuaXRlbSxcbiAgICAgICAgbm93T2JqZWN0ID0gY2FsZW5kYXJJdGVtLm5vdyxcbiAgICAgICAgc2VsZWN0ZWRPYmplY3QgPSBjYWxlbmRhckl0ZW0uc2VsZWN0LFxuICAgICAgICBoaWdobGlnaHRlZE9iamVjdCA9IGNhbGVuZGFySXRlbS5oaWdobGlnaHQsXG4gICAgICAgIHZpZXdzZXRPYmplY3QgPSBjYWxlbmRhckl0ZW0udmlldyxcbiAgICAgICAgZGlzYWJsZWRDb2xsZWN0aW9uID0gY2FsZW5kYXJJdGVtLmRpc2FibGUsXG4gICAgICAgIG1pbkxpbWl0T2JqZWN0ID0gY2FsZW5kYXJJdGVtLm1pbixcbiAgICAgICAgbWF4TGltaXRPYmplY3QgPSBjYWxlbmRhckl0ZW0ubWF4LFxuXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBjYWxlbmRhciB0YWJsZSBoZWFkIHVzaW5nIGEgY29weSBvZiB3ZWVrZGF5IGxhYmVscyBjb2xsZWN0aW9uLlxuICAgICAgICAvLyAqIFdlIGRvIGEgY29weSBzbyB3ZSBkb24ndCBtdXRhdGUgdGhlIG9yaWdpbmFsIGFycmF5LlxuICAgICAgICB0YWJsZUhlYWQgPSAoZnVuY3Rpb24oIGNvbGxlY3Rpb24sIGZ1bGxDb2xsZWN0aW9uICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IHNob3VsZCBiZSBNb25kYXksIG1vdmUgU3VuZGF5IHRvIHRoZSBlbmQuXG4gICAgICAgICAgICBpZiAoIHNldHRpbmdzLmZpcnN0RGF5ICkge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaCggY29sbGVjdGlvbi5zaGlmdCgpIClcbiAgICAgICAgICAgICAgICBmdWxsQ29sbGVjdGlvbi5wdXNoKCBmdWxsQ29sbGVjdGlvbi5zaGlmdCgpIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gdGhlIHRhYmxlIGhlYWQgZ3JvdXAuXG4gICAgICAgICAgICByZXR1cm4gXy5ub2RlKFxuICAgICAgICAgICAgICAgICd0aGVhZCcsXG4gICAgICAgICAgICAgICAgXy5ub2RlKFxuICAgICAgICAgICAgICAgICAgICAndHInLFxuICAgICAgICAgICAgICAgICAgICBfLmdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogREFZU19JTl9XRUVLIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiAndGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIGNvdW50ZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvblsgY291bnRlciBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzcy53ZWVrZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Njb3BlPWNvbCB0aXRsZT1cIicgKyBmdWxsQ29sbGVjdGlvblsgY291bnRlciBdICsgJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIC8vZW5kcmV0dXJuXG5cbiAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgfSkoICggc2V0dGluZ3Muc2hvd1dlZWtkYXlzRnVsbCA/IHNldHRpbmdzLndlZWtkYXlzRnVsbCA6IHNldHRpbmdzLndlZWtkYXlzTGV0dGVyICkuc2xpY2UoIDAgKSwgc2V0dGluZ3Mud2Vla2RheXNGdWxsLnNsaWNlKCAwICkgKSwgLy90YWJsZUhlYWRcblxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbmF2IGZvciBuZXh0L3ByZXYgbW9udGguXG4gICAgICAgIGNyZWF0ZU1vbnRoTmF2ID0gZnVuY3Rpb24oIG5leHQgKSB7XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBjcmVhdGVkIG1vbnRoIHRhZy5cbiAgICAgICAgICAgIHJldHVybiBfLm5vZGUoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzWyAnbmF2JyArICggbmV4dCA/ICdOZXh0JyA6ICdQcmV2JyApIF0gKyAoXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGZvY3VzZWQgbW9udGggaXMgb3V0c2lkZSB0aGUgcmFuZ2UsIGRpc2FibGVkIHRoZSBidXR0b24uXG4gICAgICAgICAgICAgICAgICAgICggbmV4dCAmJiB2aWV3c2V0T2JqZWN0LnllYXIgPj0gbWF4TGltaXRPYmplY3QueWVhciAmJiB2aWV3c2V0T2JqZWN0Lm1vbnRoID49IG1heExpbWl0T2JqZWN0Lm1vbnRoICkgfHxcbiAgICAgICAgICAgICAgICAgICAgKCAhbmV4dCAmJiB2aWV3c2V0T2JqZWN0LnllYXIgPD0gbWluTGltaXRPYmplY3QueWVhciAmJiB2aWV3c2V0T2JqZWN0Lm1vbnRoIDw9IG1pbkxpbWl0T2JqZWN0Lm1vbnRoICkgP1xuICAgICAgICAgICAgICAgICAgICAnICcgKyBzZXR0aW5ncy5rbGFzcy5uYXZEaXNhYmxlZCA6ICcnXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAnZGF0YS1uYXY9JyArICggbmV4dCB8fCAtMSApICsgJyAnICtcbiAgICAgICAgICAgICAgICBfLmFyaWFBdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCArICdfdGFibGUnXG4gICAgICAgICAgICAgICAgfSkgKyAnICcgK1xuICAgICAgICAgICAgICAgICd0aXRsZT1cIicgKyAobmV4dCA/IHNldHRpbmdzLmxhYmVsTW9udGhOZXh0IDogc2V0dGluZ3MubGFiZWxNb250aFByZXYgKSArICdcIidcbiAgICAgICAgICAgICkgLy9lbmRyZXR1cm5cbiAgICAgICAgfSwgLy9jcmVhdGVNb250aE5hdlxuXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBtb250aCBsYWJlbC5cbiAgICAgICAgLy9NYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICBjcmVhdGVNb250aExhYmVsID0gZnVuY3Rpb24ob3ZlcnJpZGUpIHtcblxuICAgICAgICAgICAgdmFyIG1vbnRoc0NvbGxlY3Rpb24gPSBzZXR0aW5ncy5zaG93TW9udGhzU2hvcnQgPyBzZXR0aW5ncy5tb250aHNTaG9ydCA6IHNldHRpbmdzLm1vbnRoc0Z1bGxcblxuICAgICAgICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgPT0gXCJzaG9ydF9tb250aHNcIikge1xuICAgICAgICAgICAgICBtb250aHNDb2xsZWN0aW9uID0gc2V0dGluZ3MubW9udGhzU2hvcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb250aHMgdG8gc2VsZWN0LCBhZGQgYSBkcm9wZG93biBtZW51LlxuICAgICAgICAgICAgaWYgKCBzZXR0aW5ncy5zZWxlY3RNb250aHMgICYmIG92ZXJyaWRlID09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKCBsb29wZWRNb250aCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGxvb3BlZCBtb250aCBhbmQgbm8gY2xhc3Nlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhzQ29sbGVjdGlvblsgbG9vcGVkTW9udGggXSwgMCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGFuZCBzZWxlY3RlZCBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlPScgKyBsb29wZWRNb250aCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggdmlld3NldE9iamVjdC5tb250aCA9PSBsb29wZWRNb250aCA/ICcgc2VsZWN0ZWQnIDogJycgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHZpZXdzZXRPYmplY3QueWVhciA9PSBtaW5MaW1pdE9iamVjdC55ZWFyICYmIGxvb3BlZE1vbnRoIDwgbWluTGltaXRPYmplY3QubW9udGggKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggdmlld3NldE9iamVjdC55ZWFyID09IG1heExpbWl0T2JqZWN0LnllYXIgJiYgbG9vcGVkTW9udGggPiBtYXhMaW1pdE9iamVjdC5tb250aCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgZGlzYWJsZWQnIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLnNlbGVjdE1vbnRoICsgJyBicm93c2VyLWRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICAoIGlzT3BlbiA/ICcnIDogJ2Rpc2FibGVkJyApICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCArICdfdGFibGUnIH0pICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlPVwiJyArIHNldHRpbmdzLmxhYmVsTW9udGhTZWxlY3QgKyAnXCInXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlID09IFwic2hvcnRfbW9udGhzXCIpXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ2RpdicsIG1vbnRoc0NvbGxlY3Rpb25bIHNlbGVjdGVkT2JqZWN0Lm1vbnRoIF0gKTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBfLm5vZGUoICdkaXYnLCBtb250aHNDb2xsZWN0aW9uWyB2aWV3c2V0T2JqZWN0Lm1vbnRoIF0gKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIG5lZWQgZm9yIGEgbW9udGggc2VsZWN0b3JcbiAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBtb250aHNDb2xsZWN0aW9uWyB2aWV3c2V0T2JqZWN0Lm1vbnRoIF0sIHNldHRpbmdzLmtsYXNzLm1vbnRoIClcbiAgICAgICAgfSwgLy9jcmVhdGVNb250aExhYmVsXG5cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHllYXIgbGFiZWwuXG4gICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgIGNyZWF0ZVllYXJMYWJlbCA9IGZ1bmN0aW9uKG92ZXJyaWRlKSB7XG5cbiAgICAgICAgICAgIHZhciBmb2N1c2VkWWVhciA9IHZpZXdzZXRPYmplY3QueWVhcixcblxuICAgICAgICAgICAgLy8gSWYgeWVhcnMgc2VsZWN0b3IgaXMgc2V0IHRvIGEgbGl0ZXJhbCBcInRydWVcIiwgc2V0IGl0IHRvIDUuIE90aGVyd2lzZVxuICAgICAgICAgICAgLy8gZGl2aWRlIGluIGhhbGYgdG8gZ2V0IGhhbGYgYmVmb3JlIGFuZCBoYWxmIGFmdGVyIGZvY3VzZWQgeWVhci5cbiAgICAgICAgICAgIG51bWJlclllYXJzID0gc2V0dGluZ3Muc2VsZWN0WWVhcnMgPT09IHRydWUgPyA1IDogfn4oIHNldHRpbmdzLnNlbGVjdFllYXJzIC8gMiApXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSB5ZWFycyB0byBzZWxlY3QsIGFkZCBhIGRyb3Bkb3duIG1lbnUuXG4gICAgICAgICAgICBpZiAoIG51bWJlclllYXJzICkge1xuXG4gICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICAgIG1pblllYXIgPSBtaW5MaW1pdE9iamVjdC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBtYXhZZWFyID0gbWF4TGltaXRPYmplY3QueWVhcixcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0WWVhciA9IGZvY3VzZWRZZWFyIC0gbnVtYmVyWWVhcnMsXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RZZWFyID0gZm9jdXNlZFllYXIgKyBudW1iZXJZZWFyc1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG1pbiB5ZWFyIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbG93ZXN0IHllYXIsIGluY3JlYXNlIHRoZSBoaWdoZXN0IHllYXJcbiAgICAgICAgICAgICAgICAvLyBieSB0aGUgZGlmZmVyZW5jZSBhbmQgc2V0IHRoZSBsb3dlc3QgeWVhciB0byB0aGUgbWluIHllYXIuXG4gICAgICAgICAgICAgICAgaWYgKCBtaW5ZZWFyID4gbG93ZXN0WWVhciApIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFllYXIgKz0gbWluWWVhciAtIGxvd2VzdFllYXJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0WWVhciA9IG1pblllYXJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbWF4IHllYXIgaXMgbGVzcyB0aGFuIHRoZSBoaWdoZXN0IHllYXIsIGRlY3JlYXNlIHRoZSBsb3dlc3QgeWVhclxuICAgICAgICAgICAgICAgIC8vIGJ5IHRoZSBsb3dlciBvZiB0aGUgdHdvOiBhdmFpbGFibGUgYW5kIG5lZWRlZCB5ZWFycy4gVGhlbiBzZXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gaGlnaGVzdCB5ZWFyIHRvIHRoZSBtYXggeWVhci5cbiAgICAgICAgICAgICAgICBpZiAoIG1heFllYXIgPCBoaWdoZXN0WWVhciApIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZhaWxhYmxlWWVhcnMgPSBsb3dlc3RZZWFyIC0gbWluWWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRlZFllYXJzID0gaGlnaGVzdFllYXIgLSBtYXhZZWFyXG5cbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0WWVhciAtPSBhdmFpbGFibGVZZWFycyA+IG5lZWRlZFllYXJzID8gbmVlZGVkWWVhcnMgOiBhdmFpbGFibGVZZWFyc1xuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0WWVhciA9IG1heFllYXJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHNldHRpbmdzLnNlbGVjdFllYXJzICAmJiBvdmVycmlkZSA9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXy5ncm91cCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBsb3dlc3RZZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogaGlnaGVzdFllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiggbG9vcGVkWWVhciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGxvb3BlZCB5ZWFyIGFuZCBubyBjbGFzc2VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcGVkWWVhciwgMCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZSBhbmQgc2VsZWN0ZWQgaW5kZXguXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWU9JyArIGxvb3BlZFllYXIgKyAoIGZvY3VzZWRZZWFyID09IGxvb3BlZFllYXIgPyAnIHNlbGVjdGVkJyA6ICcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3Muc2VsZWN0WWVhciArICcgYnJvd3Nlci1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICggaXNPcGVuID8gJycgOiAnZGlzYWJsZWQnICkgKyAnICcgKyBfLmFyaWFBdHRyKHsgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZScgfSkgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlPVwiJyArIHNldHRpbmdzLmxhYmVsWWVhclNlbGVjdCArICdcIidcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSA9PSBcInJhd1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBmb2N1c2VkWWVhciApXG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBqdXN0IHJldHVybiB0aGUgeWVhciBmb2N1c2VkXG4gICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2JywgZm9jdXNlZFllYXIsIHNldHRpbmdzLmtsYXNzLnllYXIgKVxuICAgICAgICB9IC8vY3JlYXRlWWVhckxhYmVsXG5cblxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICBjcmVhdGVEYXlMYWJlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9iamVjdCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2Jywgc2VsZWN0ZWRPYmplY3QuZGF0ZSlcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBfLm5vZGUoICdkaXYnLCBub3dPYmplY3QuZGF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgY3JlYXRlV2Vla2RheUxhYmVsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZGlzcGxheV9kYXk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE9iamVjdCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlfZGF5ID0gc2VsZWN0ZWRPYmplY3QuZGF5O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRpc3BsYXlfZGF5ID0gbm93T2JqZWN0LmRheTtcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gc2V0dGluZ3Mud2Vla2RheXNGdWxsWyBkaXNwbGF5X2RheSBdXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheVxuICAgICAgICB9XG5cblxuICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHRoZSBlbnRpcmUgY2FsZW5kYXIuXG5yZXR1cm4gXy5ub2RlKFxuICAgICAgICAvLyBEYXRlIHByZXNlbnRhdGlvbiBWaWV3XG4gICAgICAgICdkaXYnLFxuICAgICAgICAgICAgXy5ub2RlKFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVdlZWtkYXlMYWJlbCgpLFxuICAgICAgICAgICAgICAgIFwicGlja2VyX193ZWVrZGF5LWRpc3BsYXlcIlxuICAgICAgICAgICAgKStcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAvLyBEaXYgZm9yIHNob3J0IE1vbnRoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgY3JlYXRlTW9udGhMYWJlbChcInNob3J0X21vbnRoc1wiKSxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzcy5tb250aF9kaXNwbGF5XG4gICAgICAgICAgICApK1xuICAgICAgICAgICAgXy5ub2RlKFxuICAgICAgICAgICAgICAgIC8vIERpdiBmb3IgRGF5XG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF5TGFiZWwoKSAsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3MuZGF5X2Rpc3BsYXlcbiAgICAgICAgICAgICkrXG4gICAgICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAgICAgLy8gRGl2IGZvciBZZWFyXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgY3JlYXRlWWVhckxhYmVsKFwicmF3XCIpICxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzcy55ZWFyX2Rpc3BsYXlcbiAgICAgICAgICAgICksXG4gICAgICAgIHNldHRpbmdzLmtsYXNzLmRhdGVfZGlzcGxheVxuICAgICkrXG4gICAgLy8gQ2FsZW5kYXIgY29udGFpbmVyXG4gICAgXy5ub2RlKCdkaXYnLFxuICAgICAgICBfLm5vZGUoJ2RpdicsXG4gICAgICAgICggc2V0dGluZ3Muc2VsZWN0WWVhcnMgPyAgY3JlYXRlTW9udGhMYWJlbCgpICsgY3JlYXRlWWVhckxhYmVsKCkgOiBjcmVhdGVNb250aExhYmVsKCkgKyBjcmVhdGVZZWFyTGFiZWwoKSApICtcbiAgICAgICAgY3JlYXRlTW9udGhOYXYoKSArIGNyZWF0ZU1vbnRoTmF2KCAxICksXG4gICAgICAgIHNldHRpbmdzLmtsYXNzLmhlYWRlclxuICAgICkgKyBfLm5vZGUoXG4gICAgICAgICd0YWJsZScsXG4gICAgICAgIHRhYmxlSGVhZCArXG4gICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICBfLmdyb3VwKHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiBXRUVLU19JTl9DQUxFTkRBUiAtIDEsXG4gICAgICAgICAgICAgICAgaTogMSxcbiAgICAgICAgICAgICAgICBub2RlOiAndHInLFxuICAgICAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKCByb3dDb3VudGVyICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IGFuZCB0aGUgbW9udGggc3RhcnRzIG9uIFN1bmRheSwgc2hpZnQgdGhlIGRhdGUgYmFjayBhIHdlZWsuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaGlmdERhdGVCeSA9IHNldHRpbmdzLmZpcnN0RGF5ICYmIGNhbGVuZGFyLmNyZWF0ZShbIHZpZXdzZXRPYmplY3QueWVhciwgdmlld3NldE9iamVjdC5tb250aCwgMSBdKS5kYXkgPT09IDAgPyAtNyA6IDBcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5ncm91cCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBEQVlTX0lOX1dFRUsgKiByb3dDb3VudGVyIC0gdmlld3NldE9iamVjdC5kYXkgKyBzaGlmdERhdGVCeSArIDEsIC8vIEFkZCAxIGZvciB3ZWVrZGF5IDBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbiArIERBWVNfSU5fV0VFSyAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiggdGFyZ2V0RGF0ZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSB0aW1lIGRhdGUgZnJvbSBhIHJlbGF0aXZlIGRhdGUgdG8gYSB0YXJnZXQgZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IGNhbGVuZGFyLmNyZWF0ZShbIHZpZXdzZXRPYmplY3QueWVhciwgdmlld3NldE9iamVjdC5tb250aCwgdGFyZ2V0RGF0ZSArICggc2V0dGluZ3MuZmlyc3REYXkgPyAxIDogMCApIF0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBzZWxlY3RlZE9iamVjdCAmJiBzZWxlY3RlZE9iamVjdC5waWNrID09IHRhcmdldERhdGUucGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlnaGxpZ2h0ZWQgPSBoaWdobGlnaHRlZE9iamVjdCAmJiBoaWdobGlnaHRlZE9iamVjdC5waWNrID09IHRhcmdldERhdGUucGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQgPSBkaXNhYmxlZENvbGxlY3Rpb24gJiYgY2FsZW5kYXIuZGlzYWJsZWQoIHRhcmdldERhdGUgKSB8fCB0YXJnZXREYXRlLnBpY2sgPCBtaW5MaW1pdE9iamVjdC5waWNrIHx8IHRhcmdldERhdGUucGljayA+IG1heExpbWl0T2JqZWN0LnBpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gXy50cmlnZ2VyKCBjYWxlbmRhci5mb3JtYXRzLnRvU3RyaW5nLCBjYWxlbmRhciwgWyBzZXR0aW5ncy5mb3JtYXQsIHRhcmdldERhdGUgXSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCBrbGFzc2VzICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYGluZm9jdXNgIG9yIGBvdXRmb2N1c2AgY2xhc3NlcyBiYXNlZCBvbiBtb250aCBpbiB2aWV3LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHZpZXdzZXRPYmplY3QubW9udGggPT0gdGFyZ2V0RGF0ZS5tb250aCA/IHNldHRpbmdzLmtsYXNzLmluZm9jdXMgOiBzZXR0aW5ncy5rbGFzcy5vdXRmb2N1cyApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgdG9kYXlgIGNsYXNzIGlmIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBub3dPYmplY3QucGljayA9PSB0YXJnZXREYXRlLnBpY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHNldHRpbmdzLmtsYXNzLm5vdyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGBzZWxlY3RlZGAgY2xhc3MgaWYgc29tZXRoaW5nJ3Mgc2VsZWN0ZWQgYW5kIHRoZSB0aW1lIG1hdGNoZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNTZWxlY3RlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzZXMucHVzaCggc2V0dGluZ3Mua2xhc3Muc2VsZWN0ZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgaGlnaGxpZ2h0ZWRgIGNsYXNzIGlmIHNvbWV0aGluZydzIGhpZ2hsaWdodGVkIGFuZCB0aGUgdGltZSBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzSGlnaGxpZ2h0ZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHNldHRpbmdzLmtsYXNzLmhpZ2hsaWdodGVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYGRpc2FibGVkYCBjbGFzcyBpZiBzb21ldGhpbmcncyBkaXNhYmxlZCBhbmQgdGhlIG9iamVjdCBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzRGlzYWJsZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHNldHRpbmdzLmtsYXNzLmRpc2FibGVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrbGFzc2VzLmpvaW4oICcgJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoWyBzZXR0aW5ncy5rbGFzcy5kYXkgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtcGljaz0nICsgdGFyZ2V0RGF0ZS5waWNrICsgJyAnICsgXy5hcmlhQXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6ICdncmlkY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmb3JtYXR0ZWREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZCAmJiBjYWxlbmRhci4kbm9kZS52YWwoKSA9PT0gZm9ybWF0dGVkRGF0ZSA/IHRydWUgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVkZXNjZW5kYW50OiBpc0hpZ2hsaWdodGVkID8gdHJ1ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5hcmlhQXR0cih7IHJvbGU6ICdwcmVzZW50YXRpb24nIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gLy9lbmRyZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdIC8vZW5kcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgc2V0dGluZ3Mua2xhc3MudGFibGUsXG4gICAgICAgICdpZD1cIicgKyBjYWxlbmRhci4kbm9kZVswXS5pZCArICdfdGFibGUnICsgJ1wiICcgKyBfLmFyaWFBdHRyKHtcbiAgICAgICAgICAgIHJvbGU6ICdncmlkJyxcbiAgICAgICAgICAgIGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCxcbiAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlXG4gICAgICAgIH0pXG4gICAgKVxuICAgICwgc2V0dGluZ3Mua2xhc3MuY2FsZW5kYXJfY29udGFpbmVyKSAvLyBlbmQgY2FsZW5kYXJcblxuICAgICArXG5cbiAgICAvLyAqIEZvciBGaXJlZm94IGZvcm1zIHRvIHN1Ym1pdCwgbWFrZSBzdXJlIHRvIHNldCB0aGUgYnV0dG9uc+KAmSBgdHlwZWAgYXR0cmlidXRlcyBhcyDigJxidXR0b27igJ0uXG4gICAgXy5ub2RlKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgXy5ub2RlKCAnYnV0dG9uJywgc2V0dGluZ3MudG9kYXksIFwiYnRuLWZsYXQgcGlja2VyX190b2RheVwiLFxuICAgICAgICAgICAgJ3R5cGU9YnV0dG9uIGRhdGEtcGljaz0nICsgbm93T2JqZWN0LnBpY2sgK1xuICAgICAgICAgICAgKCBpc09wZW4gJiYgIWNhbGVuZGFyLmRpc2FibGVkKG5vd09iamVjdCkgPyAnJyA6ICcgZGlzYWJsZWQnICkgKyAnICcgK1xuICAgICAgICAgICAgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCB9KSApICtcbiAgICAgICAgXy5ub2RlKCAnYnV0dG9uJywgc2V0dGluZ3MuY2xlYXIsIFwiYnRuLWZsYXQgcGlja2VyX19jbGVhclwiLFxuICAgICAgICAgICAgJ3R5cGU9YnV0dG9uIGRhdGEtY2xlYXI9MScgK1xuICAgICAgICAgICAgKCBpc09wZW4gPyAnJyA6ICcgZGlzYWJsZWQnICkgKyAnICcgK1xuICAgICAgICAgICAgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCB9KSApICtcbiAgICAgICAgXy5ub2RlKCdidXR0b24nLCBzZXR0aW5ncy5jbG9zZSwgXCJidG4tZmxhdCBwaWNrZXJfX2Nsb3NlXCIsXG4gICAgICAgICAgICAndHlwZT1idXR0b24gZGF0YS1jbG9zZT10cnVlICcgK1xuICAgICAgICAgICAgKCBpc09wZW4gPyAnJyA6ICcgZGlzYWJsZWQnICkgKyAnICcgK1xuICAgICAgICAgICAgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCB9KSApLFxuICAgICAgICBzZXR0aW5ncy5rbGFzcy5mb290ZXJcbiAgICApIC8vZW5kcmV0dXJuXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUubm9kZXNcblxuXG5cblxuLyoqXG4gKiBUaGUgZGF0ZSBwaWNrZXIgZGVmYXVsdHMuXG4gKi9cbkRhdGVQaWNrZXIuZGVmYXVsdHMgPSAoZnVuY3Rpb24oIHByZWZpeCApIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLy8gVGhlIHRpdGxlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG1vbnRoIG5hdiBidXR0b25zXG4gICAgICAgIGxhYmVsTW9udGhOZXh0OiAnTmV4dCBtb250aCcsXG4gICAgICAgIGxhYmVsTW9udGhQcmV2OiAnUHJldmlvdXMgbW9udGgnLFxuXG4gICAgICAgIC8vIFRoZSB0aXRsZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBkcm9wZG93biBzZWxlY3RvcnNcbiAgICAgICAgbGFiZWxNb250aFNlbGVjdDogJ1NlbGVjdCBhIG1vbnRoJyxcbiAgICAgICAgbGFiZWxZZWFyU2VsZWN0OiAnU2VsZWN0IGEgeWVhcicsXG5cbiAgICAgICAgLy8gTW9udGhzIGFuZCB3ZWVrZGF5c1xuICAgICAgICBtb250aHNGdWxsOiBbICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJyBdLFxuICAgICAgICBtb250aHNTaG9ydDogWyAnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnIF0sXG4gICAgICAgIHdlZWtkYXlzRnVsbDogWyAnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknIF0sXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6IFsgJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcgXSxcblxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICB3ZWVrZGF5c0xldHRlcjogWyAnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUycgXSxcblxuICAgICAgICAvLyBUb2RheSBhbmQgY2xlYXJcbiAgICAgICAgdG9kYXk6ICdUb2RheScsXG4gICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcblxuICAgICAgICAvLyBUaGUgZm9ybWF0IHRvIHNob3cgb24gdGhlIGBpbnB1dGAgZWxlbWVudFxuICAgICAgICBmb3JtYXQ6ICdkIG1tbW0sIHl5eXknLFxuXG4gICAgICAgIC8vIENsYXNzZXNcbiAgICAgICAga2xhc3M6IHtcblxuICAgICAgICAgICAgdGFibGU6IHByZWZpeCArICd0YWJsZScsXG5cbiAgICAgICAgICAgIGhlYWRlcjogcHJlZml4ICsgJ2hlYWRlcicsXG5cblxuICAgICAgICAgICAgLy8gTWF0ZXJpYWxpemUgQWRkZWQga2xhc3Nlc1xuICAgICAgICAgICAgZGF0ZV9kaXNwbGF5OiBwcmVmaXggKyAnZGF0ZS1kaXNwbGF5JyxcbiAgICAgICAgICAgIGRheV9kaXNwbGF5OiBwcmVmaXggKyAnZGF5LWRpc3BsYXknLFxuICAgICAgICAgICAgbW9udGhfZGlzcGxheTogcHJlZml4ICsgJ21vbnRoLWRpc3BsYXknLFxuICAgICAgICAgICAgeWVhcl9kaXNwbGF5OiBwcmVmaXggKyAneWVhci1kaXNwbGF5JyxcbiAgICAgICAgICAgIGNhbGVuZGFyX2NvbnRhaW5lcjogcHJlZml4ICsgJ2NhbGVuZGFyLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAvLyBlbmRcblxuXG5cbiAgICAgICAgICAgIG5hdlByZXY6IHByZWZpeCArICduYXYtLXByZXYnLFxuICAgICAgICAgICAgbmF2TmV4dDogcHJlZml4ICsgJ25hdi0tbmV4dCcsXG4gICAgICAgICAgICBuYXZEaXNhYmxlZDogcHJlZml4ICsgJ25hdi0tZGlzYWJsZWQnLFxuXG4gICAgICAgICAgICBtb250aDogcHJlZml4ICsgJ21vbnRoJyxcbiAgICAgICAgICAgIHllYXI6IHByZWZpeCArICd5ZWFyJyxcblxuICAgICAgICAgICAgc2VsZWN0TW9udGg6IHByZWZpeCArICdzZWxlY3QtLW1vbnRoJyxcbiAgICAgICAgICAgIHNlbGVjdFllYXI6IHByZWZpeCArICdzZWxlY3QtLXllYXInLFxuXG4gICAgICAgICAgICB3ZWVrZGF5czogcHJlZml4ICsgJ3dlZWtkYXknLFxuXG4gICAgICAgICAgICBkYXk6IHByZWZpeCArICdkYXknLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHByZWZpeCArICdkYXktLWRpc2FibGVkJyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBwcmVmaXggKyAnZGF5LS1zZWxlY3RlZCcsXG4gICAgICAgICAgICBoaWdobGlnaHRlZDogcHJlZml4ICsgJ2RheS0taGlnaGxpZ2h0ZWQnLFxuICAgICAgICAgICAgbm93OiBwcmVmaXggKyAnZGF5LS10b2RheScsXG4gICAgICAgICAgICBpbmZvY3VzOiBwcmVmaXggKyAnZGF5LS1pbmZvY3VzJyxcbiAgICAgICAgICAgIG91dGZvY3VzOiBwcmVmaXggKyAnZGF5LS1vdXRmb2N1cycsXG5cbiAgICAgICAgICAgIGZvb3RlcjogcHJlZml4ICsgJ2Zvb3RlcicsXG5cbiAgICAgICAgICAgIGJ1dHRvbkNsZWFyOiBwcmVmaXggKyAnYnV0dG9uLS1jbGVhcicsXG4gICAgICAgICAgICBidXR0b25Ub2RheTogcHJlZml4ICsgJ2J1dHRvbi0tdG9kYXknLFxuICAgICAgICAgICAgYnV0dG9uQ2xvc2U6IHByZWZpeCArICdidXR0b24tLWNsb3NlJ1xuICAgICAgICB9XG4gICAgfVxufSkoIFBpY2tlci5rbGFzc2VzKCkucGlja2VyICsgJ19fJyApXG5cblxuXG5cblxuLyoqXG4gKiBFeHRlbmQgdGhlIHBpY2tlciB0byBhZGQgdGhlIGRhdGUgcGlja2VyLlxuICovXG5QaWNrZXIuZXh0ZW5kKCAncGlja2FkYXRlJywgRGF0ZVBpY2tlciApXG5cblxufSkpO1xuXG5cbjsoZnVuY3Rpb24gKCQpIHtcblxuICAkLmZuLmNoYXJhY3RlckNvdW50ZXIgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgdmFyICRjb3VudGVyRWxlbWVudCA9ICRpbnB1dC5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKTtcblxuICAgICAgLy8gY2hhcmFjdGVyIGNvdW50ZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCBhcHBlbmRlZCB0byB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAgaWYgKCRjb3VudGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRIYXNMZW5ndGhBdHRyaWJ1dGUgPSAkaW5wdXQuYXR0cignZGF0YS1sZW5ndGgnKSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgICBpZihpdEhhc0xlbmd0aEF0dHJpYnV0ZSl7XG4gICAgICAgICRpbnB1dC5vbignaW5wdXQnLCB1cGRhdGVDb3VudGVyKTtcbiAgICAgICAgJGlucHV0Lm9uKCdmb2N1cycsIHVwZGF0ZUNvdW50ZXIpO1xuICAgICAgICAkaW5wdXQub24oJ2JsdXInLCByZW1vdmVDb3VudGVyRWxlbWVudCk7XG5cbiAgICAgICAgYWRkQ291bnRlckVsZW1lbnQoJGlucHV0KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKXtcbiAgICB2YXIgbWF4TGVuZ3RoICAgICA9ICskKHRoaXMpLmF0dHIoJ2RhdGEtbGVuZ3RoJyksXG4gICAgYWN0dWFsTGVuZ3RoICAgICAgPSArJCh0aGlzKS52YWwoKS5sZW5ndGgsXG4gICAgaXNWYWxpZExlbmd0aCAgICAgPSBhY3R1YWxMZW5ndGggPD0gbWF4TGVuZ3RoO1xuXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKVxuICAgICAgICAgICAgICAgICAgICAuaHRtbCggYWN0dWFsTGVuZ3RoICsgJy8nICsgbWF4TGVuZ3RoKTtcblxuICAgIGFkZElucHV0U3R5bGUoaXNWYWxpZExlbmd0aCwgJCh0aGlzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb3VudGVyRWxlbWVudCgkaW5wdXQpIHtcbiAgICB2YXIgJGNvdW50ZXJFbGVtZW50ID0gJGlucHV0LnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpO1xuXG4gICAgaWYgKCRjb3VudGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkY291bnRlckVsZW1lbnQgPSAkKCc8c3Bhbi8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY2hhcmFjdGVyLWNvdW50ZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnZmxvYXQnLCdyaWdodCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdmb250LXNpemUnLCcxMnB4JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ2hlaWdodCcsIDEpO1xuXG4gICAgJGlucHV0LnBhcmVudCgpLmFwcGVuZCgkY291bnRlckVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ291bnRlckVsZW1lbnQoKXtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpLmh0bWwoJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSW5wdXRTdHlsZShpc1ZhbGlkTGVuZ3RoLCAkaW5wdXQpe1xuICAgIHZhciBpbnB1dEhhc0ludmFsaWRDbGFzcyA9ICRpbnB1dC5oYXNDbGFzcygnaW52YWxpZCcpO1xuICAgIGlmIChpc1ZhbGlkTGVuZ3RoICYmIGlucHV0SGFzSW52YWxpZENsYXNzKSB7XG4gICAgICAkaW5wdXQucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICB9XG4gICAgZWxzZSBpZighaXNWYWxpZExlbmd0aCAmJiAhaW5wdXRIYXNJbnZhbGlkQ2xhc3Mpe1xuICAgICAgJGlucHV0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgJGlucHV0LmFkZENsYXNzKCdpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCdpbnB1dCwgdGV4dGFyZWEnKS5jaGFyYWN0ZXJDb3VudGVyKCk7XG4gIH0pO1xuXG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG5cbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBkdXJhdGlvbjogMjAwLCAvLyBtc1xuICAgICAgICBkaXN0OiAtMTAwLCAvLyB6b29tIHNjYWxlIFRPRE86IG1ha2UgdGhpcyBtb3JlIGludHVpdGl2ZSBhcyBhbiBvcHRpb25cbiAgICAgICAgc2hpZnQ6IDAsIC8vIHNwYWNpbmcgZm9yIGNlbnRlciBpbWFnZVxuICAgICAgICBwYWRkaW5nOiAwLCAvLyBQYWRkaW5nIGJldHdlZW4gbm9uIGNlbnRlciBpdGVtc1xuICAgICAgICBmdWxsV2lkdGg6IGZhbHNlLCAvLyBDaGFuZ2UgdG8gZnVsbCB3aWR0aCBzdHlsZXNcbiAgICAgICAgaW5kaWNhdG9yczogZmFsc2UsIC8vIFRvZ2dsZSBpbmRpY2F0b3JzXG4gICAgICAgIG5vV3JhcDogZmFsc2UsIC8vIERvbid0IHdyYXAgYXJvdW5kIGFuZCBjeWNsZSB0aHJvdWdoIGl0ZW1zLlxuICAgICAgICBvbkN5Y2xlVG86IG51bGwgLy8gQ2FsbGJhY2sgZm9yIHdoZW4gYSBuZXcgc2xpZGUgaXMgY3ljbGVkIHRvLlxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICB2YXIgbmFtZXNwYWNlID0gTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcoJCh0aGlzKSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB1bmlxdWVOYW1lc3BhY2UgPSBuYW1lc3BhY2UraTtcbiAgICAgICAgdmFyIGltYWdlcywgaXRlbV93aWR0aCwgaXRlbV9oZWlnaHQsIG9mZnNldCwgY2VudGVyLCBwcmVzc2VkLCBkaW0sIGNvdW50LFxuICAgICAgICAgICAgcmVmZXJlbmNlLCByZWZlcmVuY2VZLCBhbXBsaXR1ZGUsIHRhcmdldCwgdmVsb2NpdHksIHNjcm9sbGluZyxcbiAgICAgICAgICAgIHhmb3JtLCBmcmFtZSwgdGltZXN0YW1wLCB0aWNrZXIsIGRyYWdnZWQsIHZlcnRpY2FsX2RyYWdnZWQ7XG4gICAgICAgIHZhciAkaW5kaWNhdG9ycyA9ICQoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpO1xuICAgICAgICB2YXIgc2Nyb2xsaW5nVGltZW91dCA9IG51bGw7XG5cblxuICAgICAgICAvLyBJbml0aWFsaXplXG4gICAgICAgIHZhciB2aWV3ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIHNob3dJbmRpY2F0b3JzID0gdmlldy5hdHRyKCdkYXRhLWluZGljYXRvcnMnKSB8fCBvcHRpb25zLmluZGljYXRvcnM7XG5cblxuICAgICAgICAvLyBPcHRpb25zXG4gICAgICAgIHZhciBzZXRDYXJvdXNlbEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBmaXJzdEltYWdlID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbSBpbWcnKS5maXJzdCgpO1xuICAgICAgICAgIGlmIChmaXJzdEltYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0SW1hZ2UucHJvcCgnY29tcGxldGUnKSkge1xuICAgICAgICAgICAgICB2aWV3LmNzcygnaGVpZ2h0JywgZmlyc3RJbWFnZS5oZWlnaHQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaXJzdEltYWdlLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2aWV3LmNzcygnaGVpZ2h0JywgJCh0aGlzKS5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZpZXcuY3NzKCdoZWlnaHQnLCBpbWFnZUhlaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgIG9wdGlvbnMuZGlzdCA9IDA7XG4gICAgICAgICAgc2V0Q2Fyb3VzZWxIZWlnaHQoKTtcblxuICAgICAgICAgIC8vIE9mZnNldCBmaXhlZCBpdGVtcyB3aGVuIGluZGljYXRvcnMuXG4gICAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICB2aWV3LmZpbmQoJy5jYXJvdXNlbC1maXhlZC1pdGVtJykuYWRkQ2xhc3MoJ3dpdGgtaW5kaWNhdG9ycycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gRG9uJ3QgZG91YmxlIGluaXRpYWxpemUuXG4gICAgICAgIGlmICh2aWV3Lmhhc0NsYXNzKCdpbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgLy8gUmVjYWxjdWxhdGUgdmFyaWFibGVzXG4gICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuXG4gICAgICAgICAgLy8gUmVkcmF3IGNhcm91c2VsLlxuICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2Fyb3VzZWxOZXh0JywgWzAuMDAwMDAxXSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZpZXcuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgIHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0ID0gMDtcbiAgICAgICAgaW1hZ2VzID0gW107XG4gICAgICAgIGl0ZW1fd2lkdGggPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XG4gICAgICAgIGl0ZW1faGVpZ2h0ID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgZGltID0gaXRlbV93aWR0aCAqIDIgKyBvcHRpb25zLnBhZGRpbmc7XG5cbiAgICAgICAgdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICBpbWFnZXMucHVzaCgkKHRoaXMpWzBdKTtcbiAgICAgICAgICBpZiAoc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICAgIHZhciAkaW5kaWNhdG9yID0gJCgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpO1xuXG4gICAgICAgICAgICAvLyBBZGQgYWN0aXZlIHRvIGZpcnN0IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAkaW5kaWNhdG9yLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIGNsaWNrcyBvbiBpbmRpY2F0b3JzLlxuICAgICAgICAgICAgJGluZGljYXRvci5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgY3ljbGVUbyhpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRpbmRpY2F0b3JzLmFwcGVuZCgkaW5kaWNhdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgIHZpZXcuYXBwZW5kKCRpbmRpY2F0b3JzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCA9IGltYWdlcy5sZW5ndGg7XG5cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cEV2ZW50cygpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0YXApO1xuICAgICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnKTtcbiAgICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCByZWxlYXNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0YXApO1xuICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVsZWFzZSk7XG4gICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVsZWFzZSk7XG4gICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHhwb3MoZSkge1xuICAgICAgICAgIC8vIHRvdWNoIGV2ZW50XG4gICAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG1vdXNlIGV2ZW50XG4gICAgICAgICAgcmV0dXJuIGUuY2xpZW50WDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHlwb3MoZSkge1xuICAgICAgICAgIC8vIHRvdWNoIGV2ZW50XG4gICAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG1vdXNlIGV2ZW50XG4gICAgICAgICAgcmV0dXJuIGUuY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdyYXAoeCkge1xuICAgICAgICAgIHJldHVybiAoeCA+PSBjb3VudCkgPyAoeCAlIGNvdW50KSA6ICh4IDwgMCkgPyB3cmFwKGNvdW50ICsgKHggJSBjb3VudCkpIDogeDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCh4KSB7XG4gICAgICAgICAgLy8gVHJhY2sgc2Nyb2xsaW5nIHN0YXRlXG4gICAgICAgICAgc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoIXZpZXcuaGFzQ2xhc3MoJ3Njcm9sbGluZycpKSB7XG4gICAgICAgICAgICB2aWV3LmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNjcm9sbGluZ1RpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChzY3JvbGxpbmdUaW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2Nyb2xsaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB2aWV3LnJlbW92ZUNsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgICB9LCBvcHRpb25zLmR1cmF0aW9uKTtcblxuICAgICAgICAgIC8vIFN0YXJ0IGFjdHVhbCBzY3JvbGxcbiAgICAgICAgICB2YXIgaSwgaGFsZiwgZGVsdGEsIGRpciwgdHdlZW4sIGVsLCBhbGlnbm1lbnQsIHhUcmFuc2xhdGlvbjtcbiAgICAgICAgICB2YXIgbGFzdENlbnRlciA9IGNlbnRlcjtcblxuICAgICAgICAgIG9mZnNldCA9ICh0eXBlb2YgeCA9PT0gJ251bWJlcicpID8geCA6IG9mZnNldDtcbiAgICAgICAgICBjZW50ZXIgPSBNYXRoLmZsb29yKChvZmZzZXQgKyBkaW0gLyAyKSAvIGRpbSk7XG4gICAgICAgICAgZGVsdGEgPSBvZmZzZXQgLSBjZW50ZXIgKiBkaW07XG4gICAgICAgICAgZGlyID0gKGRlbHRhIDwgMCkgPyAxIDogLTE7XG4gICAgICAgICAgdHdlZW4gPSAtZGlyICogZGVsdGEgKiAyIC8gZGltO1xuICAgICAgICAgIGhhbGYgPSBjb3VudCA+PiAxO1xuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgYWxpZ25tZW50ID0gJ3RyYW5zbGF0ZVgoJyArICh2aWV3WzBdLmNsaWVudFdpZHRoIC0gaXRlbV93aWR0aCkgLyAyICsgJ3B4KSAnO1xuICAgICAgICAgICAgYWxpZ25tZW50ICs9ICd0cmFuc2xhdGVZKCcgKyAodmlld1swXS5jbGllbnRIZWlnaHQgLSBpdGVtX2hlaWdodCkgLyAyICsgJ3B4KSc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsaWdubWVudCA9ICd0cmFuc2xhdGVYKDApJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZXQgaW5kaWNhdG9yIGFjdGl2ZVxuICAgICAgICAgIGlmIChzaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgICAgdmFyIGRpZmYgPSAoY2VudGVyICUgY291bnQpO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUluZGljYXRvciA9ICRpbmRpY2F0b3JzLmZpbmQoJy5pbmRpY2F0b3ItaXRlbS5hY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVJbmRpY2F0b3IuaW5kZXgoKSAhPT0gZGlmZikge1xuICAgICAgICAgICAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5maW5kKCcuaW5kaWNhdG9yLWl0ZW0nKS5lcShkaWZmKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2VudGVyXG4gICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgIGlmICghb3B0aW9ucy5ub1dyYXAgfHwgKGNlbnRlciA+PSAwICYmIGNlbnRlciA8IGNvdW50KSkge1xuICAgICAgICAgICAgZWwgPSBpbWFnZXNbd3JhcChjZW50ZXIpXTtcblxuICAgICAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byBjZW50ZXIgaXRlbS5cbiAgICAgICAgICAgIGlmICghJChlbCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgIHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICQoZWwpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLnN0eWxlW3hmb3JtXSA9IGFsaWdubWVudCArXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKC1kZWx0YSAvIDIpICsgJ3B4KScgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArIChkaXIgKiBvcHRpb25zLnNoaWZ0ICogdHdlZW4gKiBpKSArICdweCknICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyAob3B0aW9ucy5kaXN0ICogdHdlZW4pICsgJ3B4KSc7XG4gICAgICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7IHR3ZWVuZWRPcGFjaXR5ID0gMTsgfVxuICAgICAgICAgICAgZWxzZSB7IHR3ZWVuZWRPcGFjaXR5ID0gMSAtIDAuMiAqIHR3ZWVuOyB9XG4gICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGhhbGY7ICsraSkge1xuICAgICAgICAgICAgLy8gcmlnaHQgc2lkZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdDtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAoaSA9PT0gaGFsZiAmJiBkZWx0YSA8IDApID8gMSAtIHR3ZWVuIDogMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdCAqIChpICogMiArIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogKGkgKiAyICsgdHdlZW4gKiBkaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCB8fCBjZW50ZXIgKyBpIDwgY291bnQpIHtcbiAgICAgICAgICAgICAgZWwgPSBpbWFnZXNbd3JhcChjZW50ZXIgKyBpKV07XG4gICAgICAgICAgICAgIGVsLnN0eWxlW3hmb3JtXSA9IGFsaWdubWVudCArXG4gICAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAob3B0aW9ucy5zaGlmdCArIChkaW0gKiBpIC0gZGVsdGEpIC8gMikgKyAncHgpJyArXG4gICAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyB6VHJhbnNsYXRpb24gKyAncHgpJztcbiAgICAgICAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gLWk7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0d2VlbmVkT3BhY2l0eTtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gbGVmdCBzaWRlXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gb3B0aW9ucy5kaXN0O1xuICAgICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IChpID09PSBoYWxmICYmIGRlbHRhID4gMCkgPyAxIC0gdHdlZW4gOiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gb3B0aW9ucy5kaXN0ICogKGkgKiAyIC0gdHdlZW4gKiBkaXIpO1xuICAgICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IDEgLSAwLjIgKiAoaSAqIDIgLSB0d2VlbiAqIGRpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMubm9XcmFwIHx8IGNlbnRlciAtIGkgPj0gMCkge1xuICAgICAgICAgICAgICBlbCA9IGltYWdlc1t3cmFwKGNlbnRlciAtIGkpXTtcbiAgICAgICAgICAgICAgZWwuc3R5bGVbeGZvcm1dID0gYWxpZ25tZW50ICtcbiAgICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArICgtb3B0aW9ucy5zaGlmdCArICgtZGltICogaSAtIGRlbHRhKSAvIDIpICsgJ3B4KScgK1xuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWignICsgelRyYW5zbGF0aW9uICsgJ3B4KSc7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IC1pO1xuICAgICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNlbnRlclxuICAgICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cbiAgICAgICAgICBpZiAoIW9wdGlvbnMubm9XcmFwIHx8IChjZW50ZXIgPj0gMCAmJiBjZW50ZXIgPCBjb3VudCkpIHtcbiAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyKV07XG4gICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArICgtZGVsdGEgLyAyKSArICdweCknICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoZGlyICogb3B0aW9ucy5zaGlmdCAqIHR3ZWVuKSArICdweCknICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyAob3B0aW9ucy5kaXN0ICogdHdlZW4pICsgJ3B4KSc7XG4gICAgICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7IHR3ZWVuZWRPcGFjaXR5ID0gMTsgfVxuICAgICAgICAgICAgZWxzZSB7IHR3ZWVuZWRPcGFjaXR5ID0gMSAtIDAuMiAqIHR3ZWVuOyB9XG4gICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBvbkN5Y2xlVG8gY2FsbGJhY2tcbiAgICAgICAgICBpZiAobGFzdENlbnRlciAhPT0gY2VudGVyICYmXG4gICAgICAgICAgICAgIHR5cGVvZihvcHRpb25zLm9uQ3ljbGVUbykgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyICRjdXJyX2l0ZW0gPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZXEod3JhcChjZW50ZXIpKTtcbiAgICAgICAgICAgIG9wdGlvbnMub25DeWNsZVRvLmNhbGwodGhpcywgJGN1cnJfaXRlbSwgZHJhZ2dlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhY2soKSB7XG4gICAgICAgICAgdmFyIG5vdywgZWxhcHNlZCwgZGVsdGEsIHY7XG5cbiAgICAgICAgICBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIGVsYXBzZWQgPSBub3cgLSB0aW1lc3RhbXA7XG4gICAgICAgICAgdGltZXN0YW1wID0gbm93O1xuICAgICAgICAgIGRlbHRhID0gb2Zmc2V0IC0gZnJhbWU7XG4gICAgICAgICAgZnJhbWUgPSBvZmZzZXQ7XG5cbiAgICAgICAgICB2ID0gMTAwMCAqIGRlbHRhIC8gKDEgKyBlbGFwc2VkKTtcbiAgICAgICAgICB2ZWxvY2l0eSA9IDAuOCAqIHYgKyAwLjIgKiB2ZWxvY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGF1dG9TY3JvbGwoKSB7XG4gICAgICAgICAgdmFyIGVsYXBzZWQsIGRlbHRhO1xuXG4gICAgICAgICAgaWYgKGFtcGxpdHVkZSkge1xuICAgICAgICAgICAgZWxhcHNlZCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG4gICAgICAgICAgICBkZWx0YSA9IGFtcGxpdHVkZSAqIE1hdGguZXhwKC1lbGFwc2VkIC8gb3B0aW9ucy5kdXJhdGlvbik7XG4gICAgICAgICAgICBpZiAoZGVsdGEgPiAyIHx8IGRlbHRhIDwgLTIpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwodGFyZ2V0IC0gZGVsdGEpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xpY2soZSkge1xuICAgICAgICAgIC8vIERpc2FibGUgY2xpY2tzIGlmIGNhcm91c2VsIHdhcyBkcmFnZ2VkLlxuICAgICAgICAgIGlmIChkcmFnZ2VkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgfSBlbHNlIGlmICghb3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIHZhciBjbGlja2VkSW5kZXggPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2Fyb3VzZWwtaXRlbScpLmluZGV4KCk7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IChjZW50ZXIgJSBjb3VudCkgLSBjbGlja2VkSW5kZXg7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgY2xpY2tzIGlmIGNhcm91c2VsIHdhcyBzaGlmdGVkIGJ5IGNsaWNrXG4gICAgICAgICAgICBpZiAoZGlmZiAhPT0gMCkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjeWNsZVRvKGNsaWNrZWRJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3ljbGVUbyhuKSB7XG4gICAgICAgICAgdmFyIGRpZmYgPSAoY2VudGVyICUgY291bnQpIC0gbjtcblxuICAgICAgICAgIC8vIEFjY291bnQgZm9yIHdyYXBhcm91bmQuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCkge1xuICAgICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmICsgY291bnQpIDwgTWF0aC5hYnMoZGlmZikpIHsgZGlmZiArPSBjb3VudDsgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmIC0gY291bnQpIDwgZGlmZikgeyBkaWZmIC09IGNvdW50OyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbCBwcmV2IG9yIG5leHQgYWNjb3JkaW5nbHkuXG4gICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgICAgICB2aWV3LnRyaWdnZXIoJ2Nhcm91c2VsTmV4dCcsIFtNYXRoLmFicyhkaWZmKV0pO1xuXG4gICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgdmlldy50cmlnZ2VyKCdjYXJvdXNlbFByZXYnLCBbZGlmZl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRhcChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgICB2ZXJ0aWNhbF9kcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgICAgcmVmZXJlbmNlID0geHBvcyhlKTtcbiAgICAgICAgICByZWZlcmVuY2VZID0geXBvcyhlKTtcblxuICAgICAgICAgIHZlbG9jaXR5ID0gYW1wbGl0dWRlID0gMDtcbiAgICAgICAgICBmcmFtZSA9IG9mZnNldDtcbiAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGlja2VyKTtcbiAgICAgICAgICB0aWNrZXIgPSBzZXRJbnRlcnZhbCh0cmFjaywgMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgICAgIHZhciB4LCBkZWx0YSwgZGVsdGFZO1xuICAgICAgICAgIGlmIChwcmVzc2VkKSB7XG4gICAgICAgICAgICB4ID0geHBvcyhlKTtcbiAgICAgICAgICAgIHkgPSB5cG9zKGUpO1xuICAgICAgICAgICAgZGVsdGEgPSByZWZlcmVuY2UgLSB4O1xuICAgICAgICAgICAgZGVsdGFZID0gTWF0aC5hYnMocmVmZXJlbmNlWSAtIHkpO1xuICAgICAgICAgICAgaWYgKGRlbHRhWSA8IDMwICYmICF2ZXJ0aWNhbF9kcmFnZ2VkKSB7XG4gICAgICAgICAgICAgIC8vIElmIHZlcnRpY2FsIHNjcm9sbGluZyBkb24ndCBhbGxvdyBkcmFnZ2luZy5cbiAgICAgICAgICAgICAgaWYgKGRlbHRhID4gMiB8fCBkZWx0YSA8IC0yKSB7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlID0geDtcbiAgICAgICAgICAgICAgICBzY3JvbGwob2Zmc2V0ICsgZGVsdGEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgICAgICAvLyBJZiBkcmFnZ2luZyBkb24ndCBhbGxvdyB2ZXJ0aWNhbCBzY3JvbGwuXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBzY3JvbGxpbmcuXG4gICAgICAgICAgICAgIHZlcnRpY2FsX2RyYWdnZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkcmFnZ2VkKSB7XG4gICAgICAgICAgICAvLyBJZiBkcmFnZ2luZyBkb24ndCBhbGxvdyB2ZXJ0aWNhbCBzY3JvbGwuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbGVhc2UoZSkge1xuICAgICAgICAgIGlmIChwcmVzc2VkKSB7XG4gICAgICAgICAgICBwcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjbGVhckludGVydmFsKHRpY2tlcik7XG4gICAgICAgICAgdGFyZ2V0ID0gb2Zmc2V0O1xuICAgICAgICAgIGlmICh2ZWxvY2l0eSA+IDEwIHx8IHZlbG9jaXR5IDwgLTEwKSB7XG4gICAgICAgICAgICBhbXBsaXR1ZGUgPSAwLjkgKiB2ZWxvY2l0eTtcbiAgICAgICAgICAgIHRhcmdldCA9IG9mZnNldCArIGFtcGxpdHVkZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0ID0gTWF0aC5yb3VuZCh0YXJnZXQgLyBkaW0pICogZGltO1xuXG4gICAgICAgICAgLy8gTm8gd3JhcCBvZiBpdGVtcy5cbiAgICAgICAgICBpZiAob3B0aW9ucy5ub1dyYXApIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPj0gZGltICogKGNvdW50IC0gMSkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gZGltICogKGNvdW50IC0gMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA8IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYW1wbGl0dWRlID0gdGFyZ2V0IC0gb2Zmc2V0O1xuICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9TY3JvbGwpO1xuXG4gICAgICAgICAgaWYgKGRyYWdnZWQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhmb3JtID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgIFsnd2Via2l0JywgJ01veicsICdPJywgJ21zJ10uZXZlcnkoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICAgIHZhciBlID0gcHJlZml4ICsgJ1RyYW5zZm9ybSc7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW2VdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgeGZvcm0gPSBlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuY2Fyb3VzZWwtJyt1bmlxdWVOYW1lc3BhY2UpLm9uKCdyZXNpemUuY2Fyb3VzZWwtJyt1bmlxdWVOYW1lc3BhY2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgaXRlbV93aWR0aCA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5maXJzdCgpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGl0ZW1faGVpZ2h0ID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGRpbSA9IGl0ZW1fd2lkdGggKiAyICsgb3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgb2Zmc2V0ID0gY2VudGVyICogMiAqIGl0ZW1fd2lkdGg7XG4gICAgICAgICAgICB0YXJnZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0dXBFdmVudHMoKTtcbiAgICAgICAgc2Nyb2xsKG9mZnNldCk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2Fyb3VzZWxOZXh0JywgZnVuY3Rpb24oZSwgbikge1xuICAgICAgICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG4gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQgPSAoZGltICogTWF0aC5yb3VuZChvZmZzZXQgLyBkaW0pKSArIChkaW0gKiBuKTtcbiAgICAgICAgICBpZiAob2Zmc2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGFtcGxpdHVkZSA9IHRhcmdldCAtIG9mZnNldDtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjYXJvdXNlbFByZXYnLCBmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IChkaW0gKiBNYXRoLnJvdW5kKG9mZnNldCAvIGRpbSkpIC0gKGRpbSAqIG4pO1xuICAgICAgICAgIGlmIChvZmZzZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgYW1wbGl0dWRlID0gdGFyZ2V0IC0gb2Zmc2V0O1xuICAgICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvU2Nyb2xsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQodGhpcykub24oJ2Nhcm91c2VsU2V0JywgZnVuY3Rpb24oZSwgbikge1xuICAgICAgICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjeWNsZVRvKG4pO1xuICAgICAgICB9KTtcblxuICAgICAgfSk7XG5cblxuXG4gICAgfSxcbiAgICBuZXh0IDogZnVuY3Rpb24obikge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbE5leHQnLCBbbl0pO1xuICAgIH0sXG4gICAgcHJldiA6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2Fyb3VzZWxQcmV2JywgW25dKTtcbiAgICB9LFxuICAgIHNldCA6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2Fyb3VzZWxTZXQnLCBbbl0pO1xuICAgIH1cbiAgfTtcblxuXG4gICAgJC5mbi5jYXJvdXNlbCA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xuICAgICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcbiAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kT3JPcHRpb25zICkge1xuICAgICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmNhcm91c2VsJyApO1xuICAgICAgfVxuICAgIH07IC8vIFBsdWdpbiBlbmRcbn0oIGpRdWVyeSApKTs7KGZ1bmN0aW9uICgkKSB7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgb3JpZ2luID0gJCgnIycrJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2YXRlcycpKTtcbiAgICB2YXIgc2NyZWVuID0gJCgnYm9keScpO1xuXG4gICAgLy8gQ3JlYXRpbmcgdGFwIHRhcmdldFxuICAgIHZhciB0YXBUYXJnZXRFbCA9ICQodGhpcyk7XG4gICAgdmFyIHRhcFRhcmdldFdyYXBwZXIgPSB0YXBUYXJnZXRFbC5wYXJlbnQoJy50YXAtdGFyZ2V0LXdyYXBwZXInKTtcbiAgICB2YXIgdGFwVGFyZ2V0V2F2ZSA9IHRhcFRhcmdldFdyYXBwZXIuZmluZCgnLnRhcC10YXJnZXQtd2F2ZScpO1xuICAgIHZhciB0YXBUYXJnZXRPcmlnaW5FbCA9IHRhcFRhcmdldFdyYXBwZXIuZmluZCgnLnRhcC10YXJnZXQtb3JpZ2luJyk7XG4gICAgdmFyIHRhcFRhcmdldENvbnRlbnRFbCA9IHRhcFRhcmdldEVsLmZpbmQoJy50YXAtdGFyZ2V0LWNvbnRlbnQnKTtcblxuICAgIC8vIENyZWF0aW5nIHdyYXBwZXJcbiAgICBpZiAoIXRhcFRhcmdldFdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyID0gdGFwVGFyZ2V0RWwud3JhcCgkKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC13cmFwcGVyXCI+PC9kaXY+JykpLnBhcmVudCgpO1xuICAgIH1cblxuICAgIC8vIENyZWF0aW5nIGNvbnRlbnRcbiAgICBpZiAoIXRhcFRhcmdldENvbnRlbnRFbC5sZW5ndGgpIHtcbiAgICAgIHRhcFRhcmdldENvbnRlbnRFbCA9ICQoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LWNvbnRlbnRcIj48L2Rpdj4nKTtcbiAgICAgIHRhcFRhcmdldEVsLmFwcGVuZCh0YXBUYXJnZXRDb250ZW50RWwpO1xuICAgIH1cblxuICAgIC8vIENyZWF0aW5nIGZvcmVncm91bmQgd2F2ZVxuICAgIGlmICghdGFwVGFyZ2V0V2F2ZS5sZW5ndGgpIHtcbiAgICAgIHRhcFRhcmdldFdhdmUgPSAkKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC13YXZlXCI+PC9kaXY+Jyk7XG5cbiAgICAgIC8vIENyZWF0aW5nIG9yaWdpblxuICAgICAgaWYgKCF0YXBUYXJnZXRPcmlnaW5FbC5sZW5ndGgpIHtcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwgPSBvcmlnaW4uY2xvbmUodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLmFkZENsYXNzKCd0YXAtdGFyZ2V0LW9yaWdpbicpO1xuICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbC5yZW1vdmVBdHRyKCdpZCcpO1xuICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICB0YXBUYXJnZXRXYXZlLmFwcGVuZCh0YXBUYXJnZXRPcmlnaW5FbCk7XG4gICAgICB9XG5cbiAgICAgIHRhcFRhcmdldFdyYXBwZXIuYXBwZW5kKHRhcFRhcmdldFdhdmUpO1xuICAgIH1cblxuICAgIC8vIE9wZW5cbiAgICB2YXIgb3BlblRhcFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRhcFRhcmdldFdyYXBwZXIuaXMoJy5vcGVuJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgb3BlbiBjbGFzc1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlci5hZGRDbGFzcygnb3BlbicpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbC5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpLm9uKCdjbGljay50YXBUYXJnZXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgY2xvc2VUYXBUYXJnZXQoKTtcbiAgICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbC5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpLm9uKCdjbGljay50YXBUYXJnZXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgY2xvc2VUYXBUYXJnZXQoKTtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdGhyb3R0bGVkQ2FsYyA9IE1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGN1bGF0ZVRhcFRhcmdldCgpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUudGFwVGFyZ2V0Jykub24oJ3Jlc2l6ZS50YXBUYXJnZXQnLCB0aHJvdHRsZWRDYWxjKTtcbiAgICAgIH0sIDApO1xuICAgIH07XG5cbiAgICAvLyBDbG9zZVxuICAgIHZhciBjbG9zZVRhcFRhcmdldCA9IGZ1bmN0aW9uKCl7XG4gICAgICBpZiAoIXRhcFRhcmdldFdyYXBwZXIuaXMoJy5vcGVuJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0YXBUYXJnZXRXcmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICB0YXBUYXJnZXRPcmlnaW5FbC5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpXG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpO1xuICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnRhcFRhcmdldCcpO1xuICAgIH07XG5cbiAgICAvLyBQcmUgY2FsY3VsYXRlXG4gICAgdmFyIGNhbGN1bGF0ZVRhcFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gRWxlbWVudCBvciBwYXJlbnQgaXMgZml4ZWQgcG9zaXRpb24/XG4gICAgICB2YXIgaXNGaXhlZCA9IG9yaWdpbi5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCc7XG4gICAgICBpZiAoIWlzRml4ZWQpIHtcbiAgICAgICAgdmFyIHBhcmVudHMgPSBvcmlnaW4ucGFyZW50cygpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlzRml4ZWQgPSAkKHBhcmVudHNbaV0pLmNzcygncG9zaXRpb24nKSA9PSAnZml4ZWQnO1xuICAgICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgb3JpZ2luXG4gICAgICB2YXIgb3JpZ2luV2lkdGggPSBvcmlnaW4ub3V0ZXJXaWR0aCgpO1xuICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIG9yaWdpblRvcCA9IGlzRml4ZWQgPyBvcmlnaW4ub2Zmc2V0KCkudG9wIC0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgOiBvcmlnaW4ub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG9yaWdpbkxlZnQgPSBpc0ZpeGVkID8gb3JpZ2luLm9mZnNldCgpLmxlZnQgLSAkKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkgOiBvcmlnaW4ub2Zmc2V0KCkubGVmdDtcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgc2NyZWVuXG4gICAgICB2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICB2YXIgY2VudGVyWCA9IHdpbmRvd1dpZHRoIC8gMjtcbiAgICAgIHZhciBjZW50ZXJZID0gd2luZG93SGVpZ2h0IC8gMjtcbiAgICAgIHZhciBpc0xlZnQgPSBvcmlnaW5MZWZ0IDw9IGNlbnRlclg7XG4gICAgICB2YXIgaXNSaWdodCA9IG9yaWdpbkxlZnQgPiBjZW50ZXJYO1xuICAgICAgdmFyIGlzVG9wID0gb3JpZ2luVG9wIDw9IGNlbnRlclk7XG4gICAgICB2YXIgaXNCb3R0b20gPSBvcmlnaW5Ub3AgPiBjZW50ZXJZO1xuICAgICAgdmFyIGlzQ2VudGVyWCA9IG9yaWdpbkxlZnQgPj0gd2luZG93V2lkdGgqMC4yNSAmJiBvcmlnaW5MZWZ0IDw9IHdpbmRvd1dpZHRoKjAuNzU7XG4gICAgICB2YXIgaXNDZW50ZXJZID0gb3JpZ2luVG9wID49IHdpbmRvd0hlaWdodCowLjI1ICYmIG9yaWdpblRvcCA8PSB3aW5kb3dIZWlnaHQqMC43NTtcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgdGFwIHRhcmdldFxuICAgICAgdmFyIHRhcFRhcmdldFdpZHRoID0gdGFwVGFyZ2V0RWwub3V0ZXJXaWR0aCgpO1xuICAgICAgdmFyIHRhcFRhcmdldEhlaWdodCA9IHRhcFRhcmdldEVsLm91dGVySGVpZ2h0KCk7XG4gICAgICB2YXIgdGFwVGFyZ2V0VG9wID0gb3JpZ2luVG9wICsgb3JpZ2luSGVpZ2h0LzIgLSB0YXBUYXJnZXRIZWlnaHQvMjtcbiAgICAgIHZhciB0YXBUYXJnZXRMZWZ0ID0gb3JpZ2luTGVmdCArIG9yaWdpbldpZHRoLzIgLSB0YXBUYXJnZXRXaWR0aC8yO1xuICAgICAgdmFyIHRhcFRhcmdldFBvc2l0aW9uID0gaXNGaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuXG4gICAgICAvLyBDYWxjdWxhdGluZyBjb250ZW50XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dFdpZHRoID0gaXNDZW50ZXJYID8gdGFwVGFyZ2V0V2lkdGggOiB0YXBUYXJnZXRXaWR0aC8yICsgb3JpZ2luV2lkdGg7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dEhlaWdodCA9IHRhcFRhcmdldEhlaWdodC8yO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRUb3AgPSBpc1RvcCA/IHRhcFRhcmdldEhlaWdodC8yIDogMDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0Qm90dG9tID0gMDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0TGVmdCA9IGlzTGVmdCAmJiAhaXNDZW50ZXJYID8gdGFwVGFyZ2V0V2lkdGgvMiAtIG9yaWdpbldpZHRoIDogMDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0UmlnaHQgPSAwO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRQYWRkaW5nID0gb3JpZ2luV2lkdGg7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dEFsaWduID0gaXNCb3R0b20gPyAnYm90dG9tJyA6ICd0b3AnO1xuXG4gICAgICAvLyBDYWxjdWxhdGluZyB3YXZlXG4gICAgICB2YXIgdGFwVGFyZ2V0V2F2ZVdpZHRoID0gb3JpZ2luV2lkdGggPiBvcmlnaW5IZWlnaHQgPyBvcmlnaW5XaWR0aCoyIDogb3JpZ2luV2lkdGgqMjtcbiAgICAgIHZhciB0YXBUYXJnZXRXYXZlSGVpZ2h0ID0gdGFwVGFyZ2V0V2F2ZVdpZHRoO1xuICAgICAgdmFyIHRhcFRhcmdldFdhdmVUb3AgPSB0YXBUYXJnZXRIZWlnaHQvMiAtIHRhcFRhcmdldFdhdmVIZWlnaHQvMjtcbiAgICAgIHZhciB0YXBUYXJnZXRXYXZlTGVmdCA9IHRhcFRhcmdldFdpZHRoLzIgLSB0YXBUYXJnZXRXYXZlV2lkdGgvMjtcblxuICAgICAgLy8gU2V0dGluZyB0YXAgdGFyZ2V0XG4gICAgICB2YXIgdGFwVGFyZ2V0V3JhcHBlckNzc09iaiA9IHt9O1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai50b3AgPSBpc1RvcCA/IHRhcFRhcmdldFRvcCA6ICcnO1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5yaWdodCA9IGlzUmlnaHQgPyB3aW5kb3dXaWR0aCAtIHRhcFRhcmdldExlZnQgLSB0YXBUYXJnZXRXaWR0aCA6ICcnO1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5ib3R0b20gPSBpc0JvdHRvbSA/IHdpbmRvd0hlaWdodCAtIHRhcFRhcmdldFRvcCAtIHRhcFRhcmdldEhlaWdodCA6ICcnO1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5sZWZ0ID0gaXNMZWZ0ID8gdGFwVGFyZ2V0TGVmdCA6ICcnO1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5wb3NpdGlvbiA9IHRhcFRhcmdldFBvc2l0aW9uO1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlci5jc3ModGFwVGFyZ2V0V3JhcHBlckNzc09iaik7XG5cbiAgICAgIC8vIFNldHRpbmcgY29udGVudFxuICAgICAgdGFwVGFyZ2V0Q29udGVudEVsLmNzcyh7XG4gICAgICAgIHdpZHRoOiB0YXBUYXJnZXRUZXh0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFwVGFyZ2V0VGV4dEhlaWdodCxcbiAgICAgICAgdG9wOiB0YXBUYXJnZXRUZXh0VG9wLFxuICAgICAgICByaWdodDogdGFwVGFyZ2V0VGV4dFJpZ2h0LFxuICAgICAgICBib3R0b206IHRhcFRhcmdldFRleHRCb3R0b20sXG4gICAgICAgIGxlZnQ6IHRhcFRhcmdldFRleHRMZWZ0LFxuICAgICAgICBwYWRkaW5nOiB0YXBUYXJnZXRUZXh0UGFkZGluZyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogdGFwVGFyZ2V0VGV4dEFsaWduXG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0dGluZyB3YXZlXG4gICAgICB0YXBUYXJnZXRXYXZlLmNzcyh7XG4gICAgICAgIHRvcDogdGFwVGFyZ2V0V2F2ZVRvcCxcbiAgICAgICAgbGVmdDogdGFwVGFyZ2V0V2F2ZUxlZnQsXG4gICAgICAgIHdpZHRoOiB0YXBUYXJnZXRXYXZlV2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFwVGFyZ2V0V2F2ZUhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgPT0gJ29wZW4nKSB7XG4gICAgICBjYWxjdWxhdGVUYXBUYXJnZXQoKTtcbiAgICAgIG9wZW5UYXBUYXJnZXQoKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyA9PSAnY2xvc2UnKVxuICAgICAgY2xvc2VUYXBUYXJnZXQoKTtcbiAgICB9KTtcbiAgfSxcbiAgb3BlbjogZnVuY3Rpb24oKSB7fSxcbiAgY2xvc2U6IGZ1bmN0aW9uKCkge31cbiAgfTtcblxuICAkLmZuLnRhcFRhcmdldCA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xuICBpZiAobWV0aG9kc1ttZXRob2RPck9wdGlvbnNdIHx8IHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnKVxuICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXG4gICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50YXAtdGFyZ2V0JyApO1xuICB9O1xuXG59KCBqUXVlcnkgKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWxpemUtY3NzL2Rpc3QvanMvbWF0ZXJpYWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0V4YW1wbGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00Njc3NGY0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FeGFtcGxlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW1hdHN1a2FcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXEZZUEpcXFxcZWllblxcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRXhhbXBsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBFeGFtcGxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00Njc3NGY0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ2Nzc0ZjRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gdGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMuY29tcHV0ZWQgfHwgbnVsbClcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gICAgb3B0aW9ucy5jb21wdXRlZCA9IGNvbXB1dGVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJFeGFtcGxlIENvbXBvbmVudFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00Njc3NGY0ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ2Nzc0ZjRlXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=