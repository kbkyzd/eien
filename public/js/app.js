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

var swap = function swap() {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
};

/**
 * Initializations
 */
$(function () {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('img[data-alt-src]').each(function () {
        new Image().src = $(this).data('alt-src');
    }).hover(swap, swap);
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

// Vue and plugins
window.Vue = __webpack_require__(6);
window.VeeValidate = __webpack_require__(5);

window.axios = __webpack_require__(3);
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3M/YWIxNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvbWluaW1hbC5zY3NzPzhiMTciLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWxpemUtY3NzL2Rpc3QvanMvbWF0ZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlP2U2MGEiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsInVzZSIsIndpbmRvdyIsIlZlZVZhbGlkYXRlIiwiYXBwIiwiZWwiLCJzd2FwIiwiJHRoaXMiLCIkIiwibmV3U291cmNlIiwiZGF0YSIsImF0dHIiLCJzaWRlTmF2IiwicGFyYWxsYXgiLCJlYWNoIiwiSW1hZ2UiLCJzcmMiLCJob3ZlciIsIl8iLCJqUXVlcnkiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIkxhcmF2ZWwiLCJjc3JmVG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7OztBQU1BLG1CQUFBQSxDQUFRLEVBQVI7O0FBRUE7Ozs7OztBQU1BQyxJQUFJQyxTQUFKLENBQWMsU0FBZCxFQUF5QixtQkFBQUYsQ0FBUSxFQUFSLENBQXpCOztBQUVBQyxJQUFJRSxHQUFKLENBQVFDLE9BQU9DLFdBQWY7O0FBRUEsSUFBTUMsTUFBTSxJQUFJTCxH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O0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTyxFQUFFO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSwwQkFBMEIsV0FBVztBQUNyQyw0QkFBNEIsMERBQTBEOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRCxtQ0FBbUMsV0FBVyxHQUFHLDBEQUEwRDtBQUMzRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsaUJBQWlCLEVBQUU7O0FBRWxFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHNDQUFzQztBQUMzRCx1QkFBdUIsMENBQTBDO0FBQ2pFLHVCQUF1QiwwQ0FBMEM7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFxRSxHQUFHLHVDQUF1QztBQUNySTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDhEQUE4RCxHQUFHLGdCQUFnQjtBQUMzRztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtB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QzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7Ozs7QUFJYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOzs7O0FBSWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFFQUFxRSxzQkFBc0I7QUFDM0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxrQkFBa0I7QUFDbEI7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCLHFCQUFxQixRQUFRO0FBQzdCLHFCQUFxQixRQUFRO0FBQzdCLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLGVBQWUscUZBQXFGOztBQUVwRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCOzs7O0FBSUE7QUFDQTs7O0FBR0EsQ0FBQzs7O0FBR0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1QkFBdUI7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RDs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsMkNBQTJDLGdDQUFnQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsYUFBYTs7QUFFeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7QUFLRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDhCQUE4QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDRCQUE0Qjs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLDRCQUE0QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsNEJBQTRCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxnQ0FBZ0MsNENBQTRDO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx5RUFBeUUsNENBQTRDO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLGdEQUFnRCx1QkFBdUI7QUFDdkU7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQzs7O0FBR0QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDO0FBQ0QsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsT0FBTzs7OztBQUlQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ04sQ0FBQyxhQUFhOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUN4bVFEO0FBQ0E7QUFDQSx3QkFBcUo7QUFDcko7QUFDQSx3QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBLENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuVnVlLmNvbXBvbmVudCgnZXhhbXBsZScsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9FeGFtcGxlLnZ1ZScpKTtcblxuVnVlLnVzZSh3aW5kb3cuVmVlVmFsaWRhdGUpO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxufSk7XG5cbnZhciBzd2FwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICB2YXIgbmV3U291cmNlID0gJHRoaXMuZGF0YSgnYWx0LXNyYycpO1xuICAgICR0aGlzLmRhdGEoJ2FsdC1zcmMnLCAkdGhpcy5hdHRyKCdzcmMnKSk7XG4gICAgJHRoaXMuYXR0cignc3JjJywgbmV3U291cmNlKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXphdGlvbnNcbiAqL1xuJChmdW5jdGlvbigpIHtcbiAgICAkKCcuYnV0dG9uLWNvbGxhcHNlJykuc2lkZU5hdigpO1xuICAgICQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KCk7XG5cbiAgICAkKCdpbWdbZGF0YS1hbHQtc3JjXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIG5ldyBJbWFnZSgpLnNyYyA9ICQodGhpcykuZGF0YSgnYWx0LXNyYycpO1xuICAgIH0pLmhvdmVyKHN3YXAsIHN3YXApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvbWluaW1hbC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5FeGFtcGxlIENvbXBvbmVudDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gYW4gZXhhbXBsZSBjb21wb25lbnQhXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBFeGFtcGxlLnZ1ZT82M2M5MWYwZSIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8vIE1hdGVyaWFsaXplIGlzIGluY29tcGF0aWJsZSB3aXRoIGpRdWVyeSA+IDMueFxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnbWF0ZXJpYWxpemUtY3NzL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMnKTtcbnJlcXVpcmUoJ21hdGVyaWFsaXplLWNzcy9kaXN0L2pzL21hdGVyaWFsaXplJyk7XG5cbi8vIFZ1ZSBhbmQgcGx1Z2luc1xud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xud2luZG93LlZlZVZhbGlkYXRlID0gcmVxdWlyZSgndmVlLXZhbGlkYXRlJyk7XG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG59O1xuXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIi8qIVxuICogTWF0ZXJpYWxpemUgdjAuOTguMiAoaHR0cDovL21hdGVyaWFsaXplY3NzLmNvbSlcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUgTWF0ZXJpYWxpemVcbiAqIE1JVCBMaWNlbnNlIChodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuLy8gQ2hlY2sgZm9yIGpRdWVyeS5cbmlmICh0eXBlb2YoalF1ZXJ5KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGpRdWVyeTtcbiAgLy8gQ2hlY2sgaWYgcmVxdWlyZSBpcyBhIGRlZmluZWQgZnVuY3Rpb24uXG4gIGlmICh0eXBlb2YocmVxdWlyZSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBqUXVlcnkgPSAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gIC8vIEVsc2UgdXNlIHRoZSBkb2xsYXIgc2lnbiBhbGlhcy5cbiAgfSBlbHNlIHtcbiAgICBqUXVlcnkgPSAkO1xuICB9XG59XG47LypcbiAqIGpRdWVyeSBFYXNpbmcgdjEuMyAtIGh0dHA6Ly9nc2dkLmNvLnVrL3NhbmRib3gvanF1ZXJ5L2Vhc2luZy9cbiAqXG4gKiBVc2VzIHRoZSBidWlsdCBpbiBlYXNpbmcgY2FwYWJpbGl0aWVzIGFkZGVkIEluIGpRdWVyeSAxLjFcbiAqIHRvIG9mZmVyIG11bHRpcGxlIGVhc2luZyBvcHRpb25zXG4gKlxuICogVEVSTVMgT0YgVVNFIC0galF1ZXJ5IEVhc2luZ1xuICpcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAwOCBHZW9yZ2UgTWNHaW5sZXkgU21pdGhcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZlxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3RcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgYXV0aG9yIG5vciB0aGUgbmFtZXMgb2YgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2VcbiAqIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gKiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEXG4gKiBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKlxuKi9cblxuLy8gdDogY3VycmVudCB0aW1lLCBiOiBiZWdJbm5JbmcgdmFsdWUsIGM6IGNoYW5nZSBJbiB2YWx1ZSwgZDogZHVyYXRpb25cbmpRdWVyeS5lYXNpbmdbJ2pzd2luZyddID0galF1ZXJ5LmVhc2luZ1snc3dpbmcnXTtcblxualF1ZXJ5LmV4dGVuZCggalF1ZXJ5LmVhc2luZyxcbntcblx0ZGVmOiAnZWFzZU91dFF1YWQnLFxuXHRzd2luZzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHQvL2FsZXJ0KGpRdWVyeS5lYXNpbmcuZGVmYXVsdCk7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYXNpbmdbalF1ZXJ5LmVhc2luZy5kZWZdKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRlYXNlSW5RdWFkOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjKih0Lz1kKSp0ICsgYjtcblx0fSxcblx0ZWFzZU91dFF1YWQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIC1jICoodC89ZCkqKHQtMikgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcblx0XHRyZXR1cm4gLWMvMiAqICgoLS10KSoodC0yKSAtIDEpICsgYjtcblx0fSxcblx0ZWFzZUluQ3ViaWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQqdCArIGI7XG5cdH0sXG5cdGVhc2VPdXRDdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyooKHQ9dC9kLTEpKnQqdCArIDEpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCArIGI7XG5cdFx0cmV0dXJuIGMvMiooKHQtPTIpKnQqdCArIDIpICsgYjtcblx0fSxcblx0ZWFzZUluUXVhcnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQqdCp0ICsgYjtcblx0fSxcblx0ZWFzZU91dFF1YXJ0OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAtYyAqICgodD10L2QtMSkqdCp0KnQgLSAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XG5cdFx0cmV0dXJuIC1jLzIgKiAoKHQtPTIpKnQqdCp0IC0gMikgKyBiO1xuXHR9LFxuXHRlYXNlSW5RdWludDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyoodC89ZCkqdCp0KnQqdCArIGI7XG5cdH0sXG5cdGVhc2VPdXRRdWludDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyooKHQ9dC9kLTEpKnQqdCp0KnQgKyAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCp0ICsgYjtcblx0XHRyZXR1cm4gYy8yKigodC09MikqdCp0KnQqdCArIDIpICsgYjtcblx0fSxcblx0ZWFzZUluU2luZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gLWMgKiBNYXRoLmNvcyh0L2QgKiAoTWF0aC5QSS8yKSkgKyBjICsgYjtcblx0fSxcblx0ZWFzZU91dFNpbmU6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMgKiBNYXRoLnNpbih0L2QgKiAoTWF0aC5QSS8yKSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAtYy8yICogKE1hdGguY29zKE1hdGguUEkqdC9kKSAtIDEpICsgYjtcblx0fSxcblx0ZWFzZUluRXhwbzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gKHQ9PTApID8gYiA6IGMgKiBNYXRoLnBvdygyLCAxMCAqICh0L2QgLSAxKSkgKyBiO1xuXHR9LFxuXHRlYXNlT3V0RXhwbzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gKHQ9PWQpID8gYitjIDogYyAqICgtTWF0aC5wb3coMiwgLTEwICogdC9kKSArIDEpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAodD09MCkgcmV0dXJuIGI7XG5cdFx0aWYgKHQ9PWQpIHJldHVybiBiK2M7XG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xuXHRcdHJldHVybiBjLzIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XG5cdH0sXG5cdGVhc2VJbkNpcmM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQvPWQpKnQpIC0gMSkgKyBiO1xuXHR9LFxuXHRlYXNlT3V0Q2lyYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gKHQ9dC9kLTEpKnQpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gLWMvMiAqIChNYXRoLnNxcnQoMSAtIHQqdCkgLSAxKSArIGI7XG5cdFx0cmV0dXJuIGMvMiAqIChNYXRoLnNxcnQoMSAtICh0LT0yKSp0KSArIDEpICsgYjtcblx0fSxcblx0ZWFzZUluRWxhc3RpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHR2YXIgcz0xLjcwMTU4O3ZhciBwPTA7dmFyIGE9Yztcblx0XHRpZiAodD09MCkgcmV0dXJuIGI7ICBpZiAoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYgKCFwKSBwPWQqLjM7XG5cdFx0aWYgKGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHZhciBzPXAvNDsgfVxuXHRcdGVsc2UgdmFyIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luIChjL2EpO1xuXHRcdHJldHVybiAtKGEqTWF0aC5wb3coMiwxMCoodC09MSkpICogTWF0aC5zaW4oICh0KmQtcykqKDIqTWF0aC5QSSkvcCApKSArIGI7XG5cdH0sXG5cdGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHZhciBzPTEuNzAxNTg7dmFyIHA9MDt2YXIgYT1jO1xuXHRcdGlmICh0PT0wKSByZXR1cm4gYjsgIGlmICgodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCouMztcblx0XHRpZiAoYSA8IE1hdGguYWJzKGMpKSB7IGE9YzsgdmFyIHM9cC80OyB9XG5cdFx0ZWxzZSB2YXIgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4gKGMvYSk7XG5cdFx0cmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqdCkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkgKyBjICsgYjtcblx0fSxcblx0ZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHR2YXIgcz0xLjcwMTU4O3ZhciBwPTA7dmFyIGE9Yztcblx0XHRpZiAodD09MCkgcmV0dXJuIGI7ICBpZiAoKHQvPWQvMik9PTIpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCooLjMqMS41KTtcblx0XHRpZiAoYSA8IE1hdGguYWJzKGMpKSB7IGE9YzsgdmFyIHM9cC80OyB9XG5cdFx0ZWxzZSB2YXIgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4gKGMvYSk7XG5cdFx0aWYgKHQgPCAxKSByZXR1cm4gLS41KihhKk1hdGgucG93KDIsMTAqKHQtPTEpKSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSkgKyBiO1xuXHRcdHJldHVybiBhKk1hdGgucG93KDIsLTEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkqLjUgKyBjICsgYjtcblx0fSxcblx0ZWFzZUluQmFjazogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQsIHMpIHtcblx0XHRpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuXHRcdHJldHVybiBjKih0Lz1kKSp0KigocysxKSp0IC0gcykgKyBiO1xuXHR9LFxuXHRlYXNlT3V0QmFjazogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQsIHMpIHtcblx0XHRpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuXHRcdHJldHVybiBjKigodD10L2QtMSkqdCooKHMrMSkqdCArIHMpICsgMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCwgcykge1xuXHRcdGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMioodCp0KigoKHMqPSgxLjUyNSkpKzEpKnQgLSBzKSkgKyBiO1xuXHRcdHJldHVybiBjLzIqKCh0LT0yKSp0KigoKHMqPSgxLjUyNSkpKzEpKnQgKyBzKSArIDIpICsgYjtcblx0fSxcblx0ZWFzZUluQm91bmNlOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjIC0galF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlICh4LCBkLXQsIDAsIGMsIGQpICsgYjtcblx0fSxcblx0ZWFzZU91dEJvdW5jZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAoKHQvPWQpIDwgKDEvMi43NSkpIHtcblx0XHRcdHJldHVybiBjKig3LjU2MjUqdCp0KSArIGI7XG5cdFx0fSBlbHNlIGlmICh0IDwgKDIvMi43NSkpIHtcblx0XHRcdHJldHVybiBjKig3LjU2MjUqKHQtPSgxLjUvMi43NSkpKnQgKyAuNzUpICsgYjtcblx0XHR9IGVsc2UgaWYgKHQgPCAoMi41LzIuNzUpKSB7XG5cdFx0XHRyZXR1cm4gYyooNy41NjI1Kih0LT0oMi4yNS8yLjc1KSkqdCArIC45Mzc1KSArIGI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjYyNS8yLjc1KSkqdCArIC45ODQzNzUpICsgYjtcblx0XHR9XG5cdH0sXG5cdGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAodCA8IGQvMikgcmV0dXJuIGpRdWVyeS5lYXNpbmcuZWFzZUluQm91bmNlICh4LCB0KjIsIDAsIGMsIGQpICogLjUgKyBiO1xuXHRcdHJldHVybiBqUXVlcnkuZWFzaW5nLmVhc2VPdXRCb3VuY2UgKHgsIHQqMi1kLCAwLCBjLCBkKSAqIC41ICsgYyouNSArIGI7XG5cdH1cbn0pO1xuXG4vKlxuICpcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMDEgUm9iZXJ0IFBlbm5lclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdFxuICogb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHNcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZVxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZXG4gKiBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAqICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEVcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRURcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRURcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKi87Ly8gQ3VzdG9tIEVhc2luZ1xualF1ZXJ5LmV4dGVuZCggalF1ZXJ5LmVhc2luZyxcbntcbiAgZWFzZUluT3V0TWF0ZXJpYWw6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQgKyBiO1xuICAgIHJldHVybiBjLzQqKCh0LT0yKSp0KnQgKyAyKSArIGI7XG4gIH1cbn0pOzsvKiEgVmVsb2NpdHlKUy5vcmcgKDEuMi4zKS4gKEMpIDIwMTQgSnVsaWFuIFNoYXBpcm8uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlICovXG4vKiEgVmVsb2NpdHlKUy5vcmcgalF1ZXJ5IFNoaW0gKDEuMC4xKS4gKEMpIDIwMTQgVGhlIGpRdWVyeSBGb3VuZGF0aW9uLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS4gKi9cbi8qISBOb3RlIHRoYXQgdGhpcyBoYXMgYmVlbiBtb2RpZmllZCBieSBNYXRlcmlhbGl6ZSB0byBjb25maXJtIHRoYXQgVmVsb2NpdHkgaXMgbm90IGFscmVhZHkgYmVpbmcgaW1wb3J0ZWQuICovXG5qUXVlcnkuVmVsb2NpdHk/Y29uc29sZS5sb2coXCJWZWxvY2l0eSBpcyBhbHJlYWR5IGxvYWRlZC4gWW91IG1heSBiZSBuZWVkbGVzc2x5IGltcG9ydGluZyBWZWxvY2l0eSBhZ2Fpbjsgbm90ZSB0aGF0IE1hdGVyaWFsaXplIGluY2x1ZGVzIFZlbG9jaXR5LlwiKTooIWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7dmFyIHQ9ZS5sZW5ndGgsYT1yLnR5cGUoZSk7cmV0dXJuXCJmdW5jdGlvblwiPT09YXx8ci5pc1dpbmRvdyhlKT8hMToxPT09ZS5ub2RlVHlwZSYmdD8hMDpcImFycmF5XCI9PT1hfHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+MCYmdC0xIGluIGV9aWYoIWUualF1ZXJ5KXt2YXIgcj1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgci5mbi5pbml0KGUsdCl9O3IuaXNXaW5kb3c9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PWUud2luZG93fSxyLnR5cGU9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25baS5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX0sci5pc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiYXJyYXlcIj09PXIudHlwZShlKX0sci5pc1BsYWluT2JqZWN0PWZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFlfHxcIm9iamVjdFwiIT09ci50eXBlKGUpfHxlLm5vZGVUeXBlfHxyLmlzV2luZG93KGUpKXJldHVybiExO3RyeXtpZihlLmNvbnN0cnVjdG9yJiYhby5jYWxsKGUsXCJjb25zdHJ1Y3RvclwiKSYmIW8uY2FsbChlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2goYSl7cmV0dXJuITF9Zm9yKHQgaW4gZSk7cmV0dXJuIHZvaWQgMD09PXR8fG8uY2FsbChlLHQpfSxyLmVhY2g9ZnVuY3Rpb24oZSxyLGEpe3ZhciBuLG89MCxpPWUubGVuZ3RoLHM9dChlKTtpZihhKXtpZihzKWZvcig7aT5vJiYobj1yLmFwcGx5KGVbb10sYSksbiE9PSExKTtvKyspO2Vsc2UgZm9yKG8gaW4gZSlpZihuPXIuYXBwbHkoZVtvXSxhKSxuPT09ITEpYnJlYWt9ZWxzZSBpZihzKWZvcig7aT5vJiYobj1yLmNhbGwoZVtvXSxvLGVbb10pLG4hPT0hMSk7bysrKTtlbHNlIGZvcihvIGluIGUpaWYobj1yLmNhbGwoZVtvXSxvLGVbb10pLG49PT0hMSlicmVhaztyZXR1cm4gZX0sci5kYXRhPWZ1bmN0aW9uKGUsdCxuKXtpZih2b2lkIDA9PT1uKXt2YXIgbz1lW3IuZXhwYW5kb10saT1vJiZhW29dO2lmKHZvaWQgMD09PXQpcmV0dXJuIGk7aWYoaSYmdCBpbiBpKXJldHVybiBpW3RdfWVsc2UgaWYodm9pZCAwIT09dCl7dmFyIG89ZVtyLmV4cGFuZG9dfHwoZVtyLmV4cGFuZG9dPSsrci51dWlkKTtyZXR1cm4gYVtvXT1hW29dfHx7fSxhW29dW3RdPW4sbn19LHIucmVtb3ZlRGF0YT1mdW5jdGlvbihlLHQpe3ZhciBuPWVbci5leHBhbmRvXSxvPW4mJmFbbl07byYmci5lYWNoKHQsZnVuY3Rpb24oZSx0KXtkZWxldGUgb1t0XX0pfSxyLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsYSxuLG8saSxzPWFyZ3VtZW50c1swXXx8e30sbD0xLHU9YXJndW1lbnRzLmxlbmd0aCxjPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIHMmJihjPXMscz1hcmd1bWVudHNbbF18fHt9LGwrKyksXCJvYmplY3RcIiE9dHlwZW9mIHMmJlwiZnVuY3Rpb25cIiE9PXIudHlwZShzKSYmKHM9e30pLGw9PT11JiYocz10aGlzLGwtLSk7dT5sO2wrKylpZihudWxsIT0obz1hcmd1bWVudHNbbF0pKWZvcihuIGluIG8pZT1zW25dLGE9b1tuXSxzIT09YSYmKGMmJmEmJihyLmlzUGxhaW5PYmplY3QoYSl8fCh0PXIuaXNBcnJheShhKSkpPyh0Pyh0PSExLGk9ZSYmci5pc0FycmF5KGUpP2U6W10pOmk9ZSYmci5pc1BsYWluT2JqZWN0KGUpP2U6e30sc1tuXT1yLmV4dGVuZChjLGksYSkpOnZvaWQgMCE9PWEmJihzW25dPWEpKTtyZXR1cm4gc30sci5xdWV1ZT1mdW5jdGlvbihlLGEsbil7ZnVuY3Rpb24gbyhlLHIpe3ZhciBhPXJ8fFtdO3JldHVybiBudWxsIT1lJiYodChPYmplY3QoZSkpPyFmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0rdC5sZW5ndGgsYT0wLG49ZS5sZW5ndGg7cj5hOyllW24rK109dFthKytdO2lmKHIhPT1yKWZvcig7dm9pZCAwIT09dFthXTspZVtuKytdPXRbYSsrXTtyZXR1cm4gZS5sZW5ndGg9bixlfShhLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpbXS5wdXNoLmNhbGwoYSxlKSksYX1pZihlKXthPShhfHxcImZ4XCIpK1wicXVldWVcIjt2YXIgaT1yLmRhdGEoZSxhKTtyZXR1cm4gbj8oIWl8fHIuaXNBcnJheShuKT9pPXIuZGF0YShlLGEsbyhuKSk6aS5wdXNoKG4pLGkpOml8fFtdfX0sci5kZXF1ZXVlPWZ1bmN0aW9uKGUsdCl7ci5lYWNoKGUubm9kZVR5cGU/W2VdOmUsZnVuY3Rpb24oZSxhKXt0PXR8fFwiZnhcIjt2YXIgbj1yLnF1ZXVlKGEsdCksbz1uLnNoaWZ0KCk7XCJpbnByb2dyZXNzXCI9PT1vJiYobz1uLnNoaWZ0KCkpLG8mJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLG8uY2FsbChhLGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKGEsdCl9KSl9KX0sci5mbj1yLnByb3RvdHlwZT17aW5pdDpmdW5jdGlvbihlKXtpZihlLm5vZGVUeXBlKXJldHVybiB0aGlzWzBdPWUsdGhpczt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBET00gbm9kZS5cIil9LG9mZnNldDpmdW5jdGlvbigpe3ZhciB0PXRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3RoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6e3RvcDowLGxlZnQ6MH07cmV0dXJue3RvcDp0LnRvcCsoZS5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsVG9wfHwwKS0oZG9jdW1lbnQuY2xpZW50VG9wfHwwKSxsZWZ0OnQubGVmdCsoZS5wYWdlWE9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsTGVmdHx8MCktKGRvY3VtZW50LmNsaWVudExlZnR8fDApfX0scG9zaXRpb246ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7Zm9yKHZhciBlPXRoaXMub2Zmc2V0UGFyZW50fHxkb2N1bWVudDtlJiZcImh0bWxcIj09PSFlLm5vZGVUeXBlLnRvTG93ZXJDYXNlJiZcInN0YXRpY1wiPT09ZS5zdHlsZS5wb3NpdGlvbjspZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8ZG9jdW1lbnR9dmFyIHQ9dGhpc1swXSxlPWUuYXBwbHkodCksYT10aGlzLm9mZnNldCgpLG49L14oPzpib2R5fGh0bWwpJC9pLnRlc3QoZS5ub2RlTmFtZSk/e3RvcDowLGxlZnQ6MH06cihlKS5vZmZzZXQoKTtyZXR1cm4gYS50b3AtPXBhcnNlRmxvYXQodC5zdHlsZS5tYXJnaW5Ub3ApfHwwLGEubGVmdC09cGFyc2VGbG9hdCh0LnN0eWxlLm1hcmdpbkxlZnQpfHwwLGUuc3R5bGUmJihuLnRvcCs9cGFyc2VGbG9hdChlLnN0eWxlLmJvcmRlclRvcFdpZHRoKXx8MCxuLmxlZnQrPXBhcnNlRmxvYXQoZS5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpfHwwKSx7dG9wOmEudG9wLW4udG9wLGxlZnQ6YS5sZWZ0LW4ubGVmdH19fTt2YXIgYT17fTtyLmV4cGFuZG89XCJ2ZWxvY2l0eVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLHIudXVpZD0wO2Zvcih2YXIgbj17fSxvPW4uaGFzT3duUHJvcGVydHksaT1uLnRvU3RyaW5nLHM9XCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGw9MDtsPHMubGVuZ3RoO2wrKyluW1wiW29iamVjdCBcIitzW2xdK1wiXVwiXT1zW2xdLnRvTG93ZXJDYXNlKCk7ci5mbi5pbml0LnByb3RvdHlwZT1yLmZuLGUuVmVsb2NpdHk9e1V0aWxpdGllczpyfX19KHdpbmRvdyksZnVuY3Rpb24oZSl7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOmUoKX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSx0LHIsYSl7ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9LTEscj1lP2UubGVuZ3RoOjAsYT1bXTsrK3Q8cjspe3ZhciBuPWVbdF07biYmYS5wdXNoKG4pfXJldHVybiBhfWZ1bmN0aW9uIG8oZSl7cmV0dXJuIG0uaXNXcmFwcGVkKGUpP2U9W10uc2xpY2UuY2FsbChlKTptLmlzTm9kZShlKSYmKGU9W2VdKSxlfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9Zi5kYXRhKGUsXCJ2ZWxvY2l0eVwiKTtyZXR1cm4gbnVsbD09PXQ/YTp0fWZ1bmN0aW9uIHMoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnJvdW5kKHQqZSkqKDEvZSl9fWZ1bmN0aW9uIGwoZSxyLGEsbil7ZnVuY3Rpb24gbyhlLHQpe3JldHVybiAxLTMqdCszKmV9ZnVuY3Rpb24gaShlLHQpe3JldHVybiAzKnQtNiplfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIDMqZX1mdW5jdGlvbiBsKGUsdCxyKXtyZXR1cm4oKG8odCxyKSplK2kodCxyKSkqZStzKHQpKSplfWZ1bmN0aW9uIHUoZSx0LHIpe3JldHVybiAzKm8odCxyKSplKmUrMippKHQscikqZStzKHQpfWZ1bmN0aW9uIGModCxyKXtmb3IodmFyIG49MDttPm47KytuKXt2YXIgbz11KHIsZSxhKTtpZigwPT09bylyZXR1cm4gcjt2YXIgaT1sKHIsZSxhKS10O3ItPWkvb31yZXR1cm4gcn1mdW5jdGlvbiBwKCl7Zm9yKHZhciB0PTA7Yj50OysrdCl3W3RdPWwodCp4LGUsYSl9ZnVuY3Rpb24gZih0LHIsbil7dmFyIG8saSxzPTA7ZG8gaT1yKyhuLXIpLzIsbz1sKGksZSxhKS10LG8+MD9uPWk6cj1pO3doaWxlKE1hdGguYWJzKG8pPmgmJisrczx2KTtyZXR1cm4gaX1mdW5jdGlvbiBkKHQpe2Zvcih2YXIgcj0wLG49MSxvPWItMTtuIT1vJiZ3W25dPD10OysrbilyKz14Oy0tbjt2YXIgaT0odC13W25dKS8od1tuKzFdLXdbbl0pLHM9citpKngsbD11KHMsZSxhKTtyZXR1cm4gbD49eT9jKHQscyk6MD09bD9zOmYodCxyLHIreCl9ZnVuY3Rpb24gZygpe1Y9ITAsKGUhPXJ8fGEhPW4pJiZwKCl9dmFyIG09NCx5PS4wMDEsaD0xZS03LHY9MTAsYj0xMSx4PTEvKGItMSksUz1cIkZsb2F0MzJBcnJheVwiaW4gdDtpZig0IT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIFA9MDs0PlA7KytQKWlmKFwibnVtYmVyXCIhPXR5cGVvZiBhcmd1bWVudHNbUF18fGlzTmFOKGFyZ3VtZW50c1tQXSl8fCFpc0Zpbml0ZShhcmd1bWVudHNbUF0pKXJldHVybiExO2U9TWF0aC5taW4oZSwxKSxhPU1hdGgubWluKGEsMSksZT1NYXRoLm1heChlLDApLGE9TWF0aC5tYXgoYSwwKTt2YXIgdz1TP25ldyBGbG9hdDMyQXJyYXkoYik6bmV3IEFycmF5KGIpLFY9ITEsQz1mdW5jdGlvbih0KXtyZXR1cm4gVnx8ZygpLGU9PT1yJiZhPT09bj90OjA9PT10PzA6MT09PXQ/MTpsKGQodCkscixuKX07Qy5nZXRDb250cm9sUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW3t4OmUseTpyfSx7eDphLHk6bn1dfTt2YXIgVD1cImdlbmVyYXRlQmV6aWVyKFwiK1tlLHIsYSxuXStcIilcIjtyZXR1cm4gQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBUfSxDfWZ1bmN0aW9uIHUoZSx0KXt2YXIgcj1lO3JldHVybiBtLmlzU3RyaW5nKGUpP2IuRWFzaW5nc1tlXXx8KHI9ITEpOnI9bS5pc0FycmF5KGUpJiYxPT09ZS5sZW5ndGg/cy5hcHBseShudWxsLGUpOm0uaXNBcnJheShlKSYmMj09PWUubGVuZ3RoP3guYXBwbHkobnVsbCxlLmNvbmNhdChbdF0pKTptLmlzQXJyYXkoZSkmJjQ9PT1lLmxlbmd0aD9sLmFwcGx5KG51bGwsZSk6ITEscj09PSExJiYocj1iLkVhc2luZ3NbYi5kZWZhdWx0cy5lYXNpbmddP2IuZGVmYXVsdHMuZWFzaW5nOnYpLHJ9ZnVuY3Rpb24gYyhlKXtpZihlKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxyPWIuU3RhdGUuY2FsbHMubGVuZ3RoO3I+MWU0JiYoYi5TdGF0ZS5jYWxscz1uKGIuU3RhdGUuY2FsbHMpKTtmb3IodmFyIG89MDtyPm87bysrKWlmKGIuU3RhdGUuY2FsbHNbb10pe3ZhciBzPWIuU3RhdGUuY2FsbHNbb10sbD1zWzBdLHU9c1syXSxkPXNbM10sZz0hIWQseT1udWxsO2R8fChkPWIuU3RhdGUuY2FsbHNbb11bM109dC0xNik7Zm9yKHZhciBoPU1hdGgubWluKCh0LWQpL3UuZHVyYXRpb24sMSksdj0wLHg9bC5sZW5ndGg7eD52O3YrKyl7dmFyIFA9bFt2XSxWPVAuZWxlbWVudDtpZihpKFYpKXt2YXIgQz0hMTtpZih1LmRpc3BsYXkhPT1hJiZudWxsIT09dS5kaXNwbGF5JiZcIm5vbmVcIiE9PXUuZGlzcGxheSl7aWYoXCJmbGV4XCI9PT11LmRpc3BsYXkpe3ZhciBUPVtcIi13ZWJraXQtYm94XCIsXCItbW96LWJveFwiLFwiLW1zLWZsZXhib3hcIixcIi13ZWJraXQtZmxleFwiXTtmLmVhY2goVCxmdW5jdGlvbihlLHQpe1Muc2V0UHJvcGVydHlWYWx1ZShWLFwiZGlzcGxheVwiLHQpfSl9Uy5zZXRQcm9wZXJ0eVZhbHVlKFYsXCJkaXNwbGF5XCIsdS5kaXNwbGF5KX11LnZpc2liaWxpdHkhPT1hJiZcImhpZGRlblwiIT09dS52aXNpYmlsaXR5JiZTLnNldFByb3BlcnR5VmFsdWUoVixcInZpc2liaWxpdHlcIix1LnZpc2liaWxpdHkpO2Zvcih2YXIgayBpbiBQKWlmKFwiZWxlbWVudFwiIT09ayl7dmFyIEEsRj1QW2tdLGo9bS5pc1N0cmluZyhGLmVhc2luZyk/Yi5FYXNpbmdzW0YuZWFzaW5nXTpGLmVhc2luZztpZigxPT09aClBPUYuZW5kVmFsdWU7ZWxzZXt2YXIgRT1GLmVuZFZhbHVlLUYuc3RhcnRWYWx1ZTtpZihBPUYuc3RhcnRWYWx1ZStFKmooaCx1LEUpLCFnJiZBPT09Ri5jdXJyZW50VmFsdWUpY29udGludWV9aWYoRi5jdXJyZW50VmFsdWU9QSxcInR3ZWVuXCI9PT1rKXk9QTtlbHNle2lmKFMuSG9va3MucmVnaXN0ZXJlZFtrXSl7dmFyIEg9Uy5Ib29rcy5nZXRSb290KGspLE49aShWKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0hdO04mJihGLnJvb3RQcm9wZXJ0eVZhbHVlPU4pfXZhciBMPVMuc2V0UHJvcGVydHlWYWx1ZShWLGssRi5jdXJyZW50VmFsdWUrKDA9PT1wYXJzZUZsb2F0KEEpP1wiXCI6Ri51bml0VHlwZSksRi5yb290UHJvcGVydHlWYWx1ZSxGLnNjcm9sbERhdGEpO1MuSG9va3MucmVnaXN0ZXJlZFtrXSYmKGkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXT1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSF0/Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0hdKFwiZXh0cmFjdFwiLG51bGwsTFsxXSk6TFsxXSksXCJ0cmFuc2Zvcm1cIj09PUxbMF0mJihDPSEwKX19dS5tb2JpbGVIQSYmaShWKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD09PWEmJihpKFYpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkPVwiKDBweCwgMHB4LCAwcHgpXCIsQz0hMCksQyYmUy5mbHVzaFRyYW5zZm9ybUNhY2hlKFYpfX11LmRpc3BsYXkhPT1hJiZcIm5vbmVcIiE9PXUuZGlzcGxheSYmKGIuU3RhdGUuY2FsbHNbb11bMl0uZGlzcGxheT0hMSksdS52aXNpYmlsaXR5IT09YSYmXCJoaWRkZW5cIiE9PXUudmlzaWJpbGl0eSYmKGIuU3RhdGUuY2FsbHNbb11bMl0udmlzaWJpbGl0eT0hMSksdS5wcm9ncmVzcyYmdS5wcm9ncmVzcy5jYWxsKHNbMV0sc1sxXSxoLE1hdGgubWF4KDAsZCt1LmR1cmF0aW9uLXQpLGQseSksMT09PWgmJnAobyl9fWIuU3RhdGUuaXNUaWNraW5nJiZ3KGMpfWZ1bmN0aW9uIHAoZSx0KXtpZighYi5TdGF0ZS5jYWxsc1tlXSlyZXR1cm4hMTtmb3IodmFyIHI9Yi5TdGF0ZS5jYWxsc1tlXVswXSxuPWIuU3RhdGUuY2FsbHNbZV1bMV0sbz1iLlN0YXRlLmNhbGxzW2VdWzJdLHM9Yi5TdGF0ZS5jYWxsc1tlXVs0XSxsPSExLHU9MCxjPXIubGVuZ3RoO2M+dTt1Kyspe3ZhciBwPXJbdV0uZWxlbWVudDtpZih0fHxvLmxvb3B8fChcIm5vbmVcIj09PW8uZGlzcGxheSYmUy5zZXRQcm9wZXJ0eVZhbHVlKHAsXCJkaXNwbGF5XCIsby5kaXNwbGF5KSxcImhpZGRlblwiPT09by52aXNpYmlsaXR5JiZTLnNldFByb3BlcnR5VmFsdWUocCxcInZpc2liaWxpdHlcIixvLnZpc2liaWxpdHkpKSxvLmxvb3AhPT0hMCYmKGYucXVldWUocClbMV09PT1hfHwhL1xcLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcvaS50ZXN0KGYucXVldWUocClbMV0pKSYmaShwKSl7aShwKS5pc0FuaW1hdGluZz0hMSxpKHApLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU9e307dmFyIGQ9ITE7Zi5lYWNoKFMuTGlzdHMudHJhbnNmb3JtczNELGZ1bmN0aW9uKGUsdCl7dmFyIHI9L15zY2FsZS8udGVzdCh0KT8xOjAsbj1pKHApLnRyYW5zZm9ybUNhY2hlW3RdO2kocCkudHJhbnNmb3JtQ2FjaGVbdF0hPT1hJiZuZXcgUmVnRXhwKFwiXlxcXFwoXCIrcitcIlteLl1cIikudGVzdChuKSYmKGQ9ITAsZGVsZXRlIGkocCkudHJhbnNmb3JtQ2FjaGVbdF0pfSksby5tb2JpbGVIQSYmKGQ9ITAsZGVsZXRlIGkocCkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QpLGQmJlMuZmx1c2hUcmFuc2Zvcm1DYWNoZShwKSxTLlZhbHVlcy5yZW1vdmVDbGFzcyhwLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpfWlmKCF0JiZvLmNvbXBsZXRlJiYhby5sb29wJiZ1PT09Yy0xKXRyeXtvLmNvbXBsZXRlLmNhbGwobixuKX1jYXRjaChnKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZ30sMSl9cyYmby5sb29wIT09ITAmJnMobiksaShwKSYmby5sb29wPT09ITAmJiF0JiYoZi5lYWNoKGkocCkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGUsdCl7L15yb3RhdGUvLnRlc3QoZSkmJjM2MD09PXBhcnNlRmxvYXQodC5lbmRWYWx1ZSkmJih0LmVuZFZhbHVlPTAsdC5zdGFydFZhbHVlPTM2MCksL15iYWNrZ3JvdW5kUG9zaXRpb24vLnRlc3QoZSkmJjEwMD09PXBhcnNlRmxvYXQodC5lbmRWYWx1ZSkmJlwiJVwiPT09dC51bml0VHlwZSYmKHQuZW5kVmFsdWU9MCx0LnN0YXJ0VmFsdWU9MTAwKX0pLGIocCxcInJldmVyc2VcIix7bG9vcDohMCxkZWxheTpvLmRlbGF5fSkpLG8ucXVldWUhPT0hMSYmZi5kZXF1ZXVlKHAsby5xdWV1ZSl9Yi5TdGF0ZS5jYWxsc1tlXT0hMTtmb3IodmFyIG09MCx5PWIuU3RhdGUuY2FsbHMubGVuZ3RoO3k+bTttKyspaWYoYi5TdGF0ZS5jYWxsc1ttXSE9PSExKXtsPSEwO2JyZWFrfWw9PT0hMSYmKGIuU3RhdGUuaXNUaWNraW5nPSExLGRlbGV0ZSBiLlN0YXRlLmNhbGxzLGIuU3RhdGUuY2FsbHM9W10pfXZhciBmLGQ9ZnVuY3Rpb24oKXtpZihyLmRvY3VtZW50TW9kZSlyZXR1cm4gci5kb2N1bWVudE1vZGU7Zm9yKHZhciBlPTc7ZT40O2UtLSl7dmFyIHQ9ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKHQuaW5uZXJIVE1MPVwiPCEtLVtpZiBJRSBcIitlK1wiXT48c3Bhbj48L3NwYW4+PCFbZW5kaWZdLS0+XCIsdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIikubGVuZ3RoKXJldHVybiB0PW51bGwsZX1yZXR1cm4gYX0oKSxnPWZ1bmN0aW9uKCl7dmFyIGU9MDtyZXR1cm4gdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXt2YXIgcixhPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiByPU1hdGgubWF4KDAsMTYtKGEtZSkpLGU9YStyLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KGErcil9LHIpfX0oKSxtPXtpc1N0cmluZzpmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZX0saXNBcnJheTpBcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9LGlzRnVuY3Rpb246ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSxpc05vZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUubm9kZVR5cGV9LGlzTm9kZUxpc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJi9eXFxbb2JqZWN0IChIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdHxPYmplY3QpXFxdJC8udGVzdChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpJiZlLmxlbmd0aCE9PWEmJigwPT09ZS5sZW5ndGh8fFwib2JqZWN0XCI9PXR5cGVvZiBlWzBdJiZlWzBdLm5vZGVUeXBlPjApfSxpc1dyYXBwZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJihlLmpxdWVyeXx8dC5aZXB0byYmdC5aZXB0by56ZXB0by5pc1ooZSkpfSxpc1NWRzpmdW5jdGlvbihlKXtyZXR1cm4gdC5TVkdFbGVtZW50JiZlIGluc3RhbmNlb2YgdC5TVkdFbGVtZW50fSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKXJldHVybiExO3JldHVybiEwfX0seT0hMTtpZihlLmZuJiZlLmZuLmpxdWVyeT8oZj1lLHk9ITApOmY9dC5WZWxvY2l0eS5VdGlsaXRpZXMsOD49ZCYmIXkpdGhyb3cgbmV3IEVycm9yKFwiVmVsb2NpdHk6IElFOCBhbmQgYmVsb3cgcmVxdWlyZSBqUXVlcnkgdG8gYmUgbG9hZGVkIGJlZm9yZSBWZWxvY2l0eS5cIik7aWYoNz49ZClyZXR1cm4gdm9pZChqUXVlcnkuZm4udmVsb2NpdHk9alF1ZXJ5LmZuLmFuaW1hdGUpO3ZhciBoPTQwMCx2PVwic3dpbmdcIixiPXtTdGF0ZTp7aXNNb2JpbGU6L0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzQW5kcm9pZDovQW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNHaW5nZXJicmVhZDovQW5kcm9pZCAyXFwuM1xcLlszLTddL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0Nocm9tZTp0LmNocm9tZSxpc0ZpcmVmb3g6L0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHByZWZpeEVsZW1lbnQ6ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHByZWZpeE1hdGNoZXM6e30sc2Nyb2xsQW5jaG9yOm51bGwsc2Nyb2xsUHJvcGVydHlMZWZ0Om51bGwsc2Nyb2xsUHJvcGVydHlUb3A6bnVsbCxpc1RpY2tpbmc6ITEsY2FsbHM6W119LENTUzp7fSxVdGlsaXRpZXM6ZixSZWRpcmVjdHM6e30sRWFzaW5nczp7fSxQcm9taXNlOnQuUHJvbWlzZSxkZWZhdWx0czp7cXVldWU6XCJcIixkdXJhdGlvbjpoLGVhc2luZzp2LGJlZ2luOmEsY29tcGxldGU6YSxwcm9ncmVzczphLGRpc3BsYXk6YSx2aXNpYmlsaXR5OmEsbG9vcDohMSxkZWxheTohMSxtb2JpbGVIQTohMCxfY2FjaGVWYWx1ZXM6ITB9LGluaXQ6ZnVuY3Rpb24oZSl7Zi5kYXRhKGUsXCJ2ZWxvY2l0eVwiLHtpc1NWRzptLmlzU1ZHKGUpLGlzQW5pbWF0aW5nOiExLGNvbXB1dGVkU3R5bGU6bnVsbCx0d2VlbnNDb250YWluZXI6bnVsbCxyb290UHJvcGVydHlWYWx1ZUNhY2hlOnt9LHRyYW5zZm9ybUNhY2hlOnt9fSl9LGhvb2s6bnVsbCxtb2NrOiExLHZlcnNpb246e21ham9yOjEsbWlub3I6MixwYXRjaDoyfSxkZWJ1ZzohMX07dC5wYWdlWU9mZnNldCE9PWE/KGIuU3RhdGUuc2Nyb2xsQW5jaG9yPXQsYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQ9XCJwYWdlWE9mZnNldFwiLGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJwYWdlWU9mZnNldFwiKTooYi5TdGF0ZS5zY3JvbGxBbmNob3I9ci5kb2N1bWVudEVsZW1lbnR8fHIuYm9keS5wYXJlbnROb2RlfHxyLmJvZHksYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQ9XCJzY3JvbGxMZWZ0XCIsYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcD1cInNjcm9sbFRvcFwiKTt2YXIgeD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7cmV0dXJuLWUudGVuc2lvbiplLngtZS5mcmljdGlvbiplLnZ9ZnVuY3Rpb24gdCh0LHIsYSl7dmFyIG49e3g6dC54K2EuZHgqcix2OnQudithLmR2KnIsdGVuc2lvbjp0LnRlbnNpb24sZnJpY3Rpb246dC5mcmljdGlvbn07cmV0dXJue2R4Om4udixkdjplKG4pfX1mdW5jdGlvbiByKHIsYSl7dmFyIG49e2R4OnIudixkdjplKHIpfSxvPXQociwuNSphLG4pLGk9dChyLC41KmEsbykscz10KHIsYSxpKSxsPTEvNioobi5keCsyKihvLmR4K2kuZHgpK3MuZHgpLHU9MS82KihuLmR2KzIqKG8uZHYraS5kdikrcy5kdik7cmV0dXJuIHIueD1yLngrbCphLHIudj1yLnYrdSphLHJ9cmV0dXJuIGZ1bmN0aW9uIGEoZSx0LG4pe3ZhciBvLGkscyxsPXt4Oi0xLHY6MCx0ZW5zaW9uOm51bGwsZnJpY3Rpb246bnVsbH0sdT1bMF0sYz0wLHA9MWUtNCxmPS4wMTY7Zm9yKGU9cGFyc2VGbG9hdChlKXx8NTAwLHQ9cGFyc2VGbG9hdCh0KXx8MjAsbj1ufHxudWxsLGwudGVuc2lvbj1lLGwuZnJpY3Rpb249dCxvPW51bGwhPT1uLG8/KGM9YShlLHQpLGk9Yy9uKmYpOmk9ZjtzPXIoc3x8bCxpKSx1LnB1c2goMStzLngpLGMrPTE2LE1hdGguYWJzKHMueCk+cCYmTWF0aC5hYnMocy52KT5wOyk7cmV0dXJuIG8/ZnVuY3Rpb24oZSl7cmV0dXJuIHVbZSoodS5sZW5ndGgtMSl8MF19OmN9fSgpO2IuRWFzaW5ncz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LHNwcmluZzpmdW5jdGlvbihlKXtyZXR1cm4gMS1NYXRoLmNvcyg0LjUqZSpNYXRoLlBJKSpNYXRoLmV4cCg2Ki1lKX19LGYuZWFjaChbW1wiZWFzZVwiLFsuMjUsLjEsLjI1LDFdXSxbXCJlYXNlLWluXCIsWy40MiwwLDEsMV1dLFtcImVhc2Utb3V0XCIsWzAsMCwuNTgsMV1dLFtcImVhc2UtaW4tb3V0XCIsWy40MiwwLC41OCwxXV0sW1wiZWFzZUluU2luZVwiLFsuNDcsMCwuNzQ1LC43MTVdXSxbXCJlYXNlT3V0U2luZVwiLFsuMzksLjU3NSwuNTY1LDFdXSxbXCJlYXNlSW5PdXRTaW5lXCIsWy40NDUsLjA1LC41NSwuOTVdXSxbXCJlYXNlSW5RdWFkXCIsWy41NSwuMDg1LC42OCwuNTNdXSxbXCJlYXNlT3V0UXVhZFwiLFsuMjUsLjQ2LC40NSwuOTRdXSxbXCJlYXNlSW5PdXRRdWFkXCIsWy40NTUsLjAzLC41MTUsLjk1NV1dLFtcImVhc2VJbkN1YmljXCIsWy41NSwuMDU1LC42NzUsLjE5XV0sW1wiZWFzZU91dEN1YmljXCIsWy4yMTUsLjYxLC4zNTUsMV1dLFtcImVhc2VJbk91dEN1YmljXCIsWy42NDUsLjA0NSwuMzU1LDFdXSxbXCJlYXNlSW5RdWFydFwiLFsuODk1LC4wMywuNjg1LC4yMl1dLFtcImVhc2VPdXRRdWFydFwiLFsuMTY1LC44NCwuNDQsMV1dLFtcImVhc2VJbk91dFF1YXJ0XCIsWy43NywwLC4xNzUsMV1dLFtcImVhc2VJblF1aW50XCIsWy43NTUsLjA1LC44NTUsLjA2XV0sW1wiZWFzZU91dFF1aW50XCIsWy4yMywxLC4zMiwxXV0sW1wiZWFzZUluT3V0UXVpbnRcIixbLjg2LDAsLjA3LDFdXSxbXCJlYXNlSW5FeHBvXCIsWy45NSwuMDUsLjc5NSwuMDM1XV0sW1wiZWFzZU91dEV4cG9cIixbLjE5LDEsLjIyLDFdXSxbXCJlYXNlSW5PdXRFeHBvXCIsWzEsMCwwLDFdXSxbXCJlYXNlSW5DaXJjXCIsWy42LC4wNCwuOTgsLjMzNV1dLFtcImVhc2VPdXRDaXJjXCIsWy4wNzUsLjgyLC4xNjUsMV1dLFtcImVhc2VJbk91dENpcmNcIixbLjc4NSwuMTM1LC4xNSwuODZdXV0sZnVuY3Rpb24oZSx0KXtiLkVhc2luZ3NbdFswXV09bC5hcHBseShudWxsLHRbMV0pfSk7dmFyIFM9Yi5DU1M9e1JlZ0V4Ontpc0hleDovXiMoW0EtZlxcZF17M30pezEsMn0kL2ksdmFsdWVVbndyYXA6L15bQS16XStcXCgoLiopXFwpJC9pLHdyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQ6L1swLTkuXSsgWzAtOS5dKyBbMC05Ll0rKCBbMC05Ll0rKT8vLHZhbHVlU3BsaXQ6LyhbQS16XStcXCguK1xcKSl8KChbQS16MC05Iy0uXSs/KSg/PVxcc3wkKSkvZ2l9LExpc3RzOntjb2xvcnM6W1wiZmlsbFwiLFwic3Ryb2tlXCIsXCJzdG9wQ29sb3JcIixcImNvbG9yXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIixcImJvcmRlckNvbG9yXCIsXCJib3JkZXJUb3BDb2xvclwiLFwiYm9yZGVyUmlnaHRDb2xvclwiLFwiYm9yZGVyQm90dG9tQ29sb3JcIixcImJvcmRlckxlZnRDb2xvclwiLFwib3V0bGluZUNvbG9yXCJdLHRyYW5zZm9ybXNCYXNlOltcInRyYW5zbGF0ZVhcIixcInRyYW5zbGF0ZVlcIixcInNjYWxlXCIsXCJzY2FsZVhcIixcInNjYWxlWVwiLFwic2tld1hcIixcInNrZXdZXCIsXCJyb3RhdGVaXCJdLHRyYW5zZm9ybXMzRDpbXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLFwidHJhbnNsYXRlWlwiLFwic2NhbGVaXCIsXCJyb3RhdGVYXCIsXCJyb3RhdGVZXCJdfSxIb29rczp7dGVtcGxhdGVzOnt0ZXh0U2hhZG93OltcIkNvbG9yIFggWSBCbHVyXCIsXCJibGFjayAwcHggMHB4IDBweFwiXSxib3hTaGFkb3c6W1wiQ29sb3IgWCBZIEJsdXIgU3ByZWFkXCIsXCJibGFjayAwcHggMHB4IDBweCAwcHhcIl0sY2xpcDpbXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIixcIjBweCAwcHggMHB4IDBweFwiXSxiYWNrZ3JvdW5kUG9zaXRpb246W1wiWCBZXCIsXCIwJSAwJVwiXSx0cmFuc2Zvcm1PcmlnaW46W1wiWCBZIFpcIixcIjUwJSA1MCUgMHB4XCJdLHBlcnNwZWN0aXZlT3JpZ2luOltcIlggWVwiLFwiNTAlIDUwJVwiXX0scmVnaXN0ZXJlZDp7fSxyZWdpc3RlcjpmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8Uy5MaXN0cy5jb2xvcnMubGVuZ3RoO2UrKyl7dmFyIHQ9XCJjb2xvclwiPT09Uy5MaXN0cy5jb2xvcnNbZV0/XCIwIDAgMCAxXCI6XCIyNTUgMjU1IDI1NSAxXCI7Uy5Ib29rcy50ZW1wbGF0ZXNbUy5MaXN0cy5jb2xvcnNbZV1dPVtcIlJlZCBHcmVlbiBCbHVlIEFscGhhXCIsdF19dmFyIHIsYSxuO2lmKGQpZm9yKHIgaW4gUy5Ib29rcy50ZW1wbGF0ZXMpe2E9Uy5Ib29rcy50ZW1wbGF0ZXNbcl0sbj1hWzBdLnNwbGl0KFwiIFwiKTt2YXIgbz1hWzFdLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCk7XCJDb2xvclwiPT09blswXSYmKG4ucHVzaChuLnNoaWZ0KCkpLG8ucHVzaChvLnNoaWZ0KCkpLFMuSG9va3MudGVtcGxhdGVzW3JdPVtuLmpvaW4oXCIgXCIpLG8uam9pbihcIiBcIildKX1mb3IociBpbiBTLkhvb2tzLnRlbXBsYXRlcyl7YT1TLkhvb2tzLnRlbXBsYXRlc1tyXSxuPWFbMF0uc3BsaXQoXCIgXCIpO2Zvcih2YXIgZSBpbiBuKXt2YXIgaT1yK25bZV0scz1lO1MuSG9va3MucmVnaXN0ZXJlZFtpXT1bcixzXX19fSxnZXRSb290OmZ1bmN0aW9uKGUpe3ZhciB0PVMuSG9va3MucmVnaXN0ZXJlZFtlXTtyZXR1cm4gdD90WzBdOmV9LGNsZWFuUm9vdFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUy5SZWdFeC52YWx1ZVVud3JhcC50ZXN0KHQpJiYodD10Lm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdKSxTLlZhbHVlcy5pc0NTU051bGxWYWx1ZSh0KSYmKHQ9Uy5Ib29rcy50ZW1wbGF0ZXNbZV1bMV0pLHR9LGV4dHJhY3RWYWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPVMuSG9va3MucmVnaXN0ZXJlZFtlXTtpZihyKXt2YXIgYT1yWzBdLG49clsxXTtyZXR1cm4gdD1TLkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoYSx0KSx0LnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KVtuXX1yZXR1cm4gdH0saW5qZWN0VmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBhPVMuSG9va3MucmVnaXN0ZXJlZFtlXTtpZihhKXt2YXIgbixvLGk9YVswXSxzPWFbMV07cmV0dXJuIHI9Uy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGksciksbj1yLnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KSxuW3NdPXQsbz1uLmpvaW4oXCIgXCIpfXJldHVybiByfX0sTm9ybWFsaXphdGlvbnM6e3JlZ2lzdGVyZWQ6e2NsaXA6ZnVuY3Rpb24oZSx0LHIpe3N3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJjbGlwXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhO3JldHVybiBTLlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChyKT9hPXI6KGE9ci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApLGE9YT9hWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpOnIpLGE7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuXCJyZWN0KFwiK3IrXCIpXCJ9fSxibHVyOmZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVybiBiLlN0YXRlLmlzRmlyZWZveD9cImZpbHRlclwiOlwiLXdlYmtpdC1maWx0ZXJcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGE9cGFyc2VGbG9hdChyKTtpZighYSYmMCE9PWEpe3ZhciBuPXIudG9TdHJpbmcoKS5tYXRjaCgvYmx1clxcKChbMC05XStbQS16XSspXFwpL2kpO2E9bj9uWzFdOjB9cmV0dXJuIGE7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIHBhcnNlRmxvYXQocik/XCJibHVyKFwiK3IrXCIpXCI6XCJub25lXCJ9fSxvcGFjaXR5OmZ1bmN0aW9uKGUsdCxyKXtpZig4Pj1kKXN3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJmaWx0ZXJcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGE9ci50b1N0cmluZygpLm1hdGNoKC9hbHBoYVxcKG9wYWNpdHk9KC4qKVxcKS9pKTtyZXR1cm4gcj1hP2FbMV0vMTAwOjE7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIHQuc3R5bGUuem9vbT0xLHBhcnNlRmxvYXQocik+PTE/XCJcIjpcImFscGhhKG9wYWNpdHk9XCIrcGFyc2VJbnQoMTAwKnBhcnNlRmxvYXQociksMTApK1wiKVwifWVsc2Ugc3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cIm9wYWNpdHlcIjtjYXNlXCJleHRyYWN0XCI6cmV0dXJuIHI7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIHJ9fX0scmVnaXN0ZXI6ZnVuY3Rpb24oKXs5Pj1kfHxiLlN0YXRlLmlzR2luZ2VyYnJlYWR8fChTLkxpc3RzLnRyYW5zZm9ybXNCYXNlPVMuTGlzdHMudHJhbnNmb3Jtc0Jhc2UuY29uY2F0KFMuTGlzdHMudHJhbnNmb3JtczNEKSk7Zm9yKHZhciBlPTA7ZTxTLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmxlbmd0aDtlKyspIWZ1bmN0aW9uKCl7dmFyIHQ9Uy5MaXN0cy50cmFuc2Zvcm1zQmFzZVtlXTtTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdF09ZnVuY3Rpb24oZSxyLG4pe3N3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJ0cmFuc2Zvcm1cIjtjYXNlXCJleHRyYWN0XCI6cmV0dXJuIGkocik9PT1hfHxpKHIpLnRyYW5zZm9ybUNhY2hlW3RdPT09YT8vXnNjYWxlL2kudGVzdCh0KT8xOjA6aShyKS50cmFuc2Zvcm1DYWNoZVt0XS5yZXBsYWNlKC9bKCldL2csXCJcIik7Y2FzZVwiaW5qZWN0XCI6dmFyIG89ITE7c3dpdGNoKHQuc3Vic3RyKDAsdC5sZW5ndGgtMSkpe2Nhc2VcInRyYW5zbGF0ZVwiOm89IS8oJXxweHxlbXxyZW18dnd8dmh8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2VcInNjYWxcIjpjYXNlXCJzY2FsZVwiOmIuU3RhdGUuaXNBbmRyb2lkJiZpKHIpLnRyYW5zZm9ybUNhY2hlW3RdPT09YSYmMT5uJiYobj0xKSxvPSEvKFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJza2V3XCI6bz0hLyhkZWd8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2VcInJvdGF0ZVwiOm89IS8oZGVnfFxcZCkkL2kudGVzdChuKX1yZXR1cm4gb3x8KGkocikudHJhbnNmb3JtQ2FjaGVbdF09XCIoXCIrbitcIilcIiksaShyKS50cmFuc2Zvcm1DYWNoZVt0XX19fSgpO2Zvcih2YXIgZT0wO2U8Uy5MaXN0cy5jb2xvcnMubGVuZ3RoO2UrKykhZnVuY3Rpb24oKXt2YXIgdD1TLkxpc3RzLmNvbG9yc1tlXTtTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdF09ZnVuY3Rpb24oZSxyLG4pe3N3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuIHQ7Y2FzZVwiZXh0cmFjdFwiOnZhciBvO2lmKFMuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KG4pKW89bjtlbHNle3ZhciBpLHM9e2JsYWNrOlwicmdiKDAsIDAsIDApXCIsYmx1ZTpcInJnYigwLCAwLCAyNTUpXCIsZ3JheTpcInJnYigxMjgsIDEyOCwgMTI4KVwiLGdyZWVuOlwicmdiKDAsIDEyOCwgMClcIixyZWQ6XCJyZ2IoMjU1LCAwLCAwKVwiLHdoaXRlOlwicmdiKDI1NSwgMjU1LCAyNTUpXCJ9Oy9eW0Etel0rJC9pLnRlc3Qobik/aT1zW25dIT09YT9zW25dOnMuYmxhY2s6Uy5SZWdFeC5pc0hleC50ZXN0KG4pP2k9XCJyZ2IoXCIrUy5WYWx1ZXMuaGV4VG9SZ2Iobikuam9pbihcIiBcIikrXCIpXCI6L15yZ2JhP1xcKC9pLnRlc3Qobil8fChpPXMuYmxhY2spLG89KGl8fG4pLnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVVud3JhcClbMV0ucmVwbGFjZSgvLChcXHMrKT8vZyxcIiBcIil9cmV0dXJuIDg+PWR8fDMhPT1vLnNwbGl0KFwiIFwiKS5sZW5ndGh8fChvKz1cIiAxXCIpLG87Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIDg+PWQ/ND09PW4uc3BsaXQoXCIgXCIpLmxlbmd0aCYmKG49bi5zcGxpdCgvXFxzKy8pLnNsaWNlKDAsMykuam9pbihcIiBcIikpOjM9PT1uLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihuKz1cIiAxXCIpLCg4Pj1kP1wicmdiXCI6XCJyZ2JhXCIpK1wiKFwiK24ucmVwbGFjZSgvXFxzKy9nLFwiLFwiKS5yZXBsYWNlKC9cXC4oXFxkKSsoPz0sKS9nLFwiXCIpK1wiKVwifX19KCl9fSxOYW1lczp7Y2FtZWxDYXNlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLy0oXFx3KS9nLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX0pfSxTVkdBdHRyaWJ1dGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJ3aWR0aHxoZWlnaHR8eHx5fGN4fGN5fHJ8cnh8cnl8eDF8eDJ8eTF8eTJcIjtyZXR1cm4oZHx8Yi5TdGF0ZS5pc0FuZHJvaWQmJiFiLlN0YXRlLmlzQ2hyb21lKSYmKHQrPVwifHRyYW5zZm9ybVwiKSxuZXcgUmVnRXhwKFwiXihcIit0K1wiKSRcIixcImlcIikudGVzdChlKX0scHJlZml4Q2hlY2s6ZnVuY3Rpb24oZSl7aWYoYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdKXJldHVybltiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV0sITBdO2Zvcih2YXIgdD1bXCJcIixcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiLFwiT1wiXSxyPTAsYT10Lmxlbmd0aDthPnI7cisrKXt2YXIgbjtpZihuPTA9PT1yP2U6dFtyXStlLnJlcGxhY2UoL15cXHcvLGZ1bmN0aW9uKGUpe3JldHVybiBlLnRvVXBwZXJDYXNlKCl9KSxtLmlzU3RyaW5nKGIuU3RhdGUucHJlZml4RWxlbWVudC5zdHlsZVtuXSkpcmV0dXJuIGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXT1uLFtuLCEwXX1yZXR1cm5bZSwhMV19fSxWYWx1ZXM6e2hleFRvUmdiOmZ1bmN0aW9uKGUpe3ZhciB0LHI9L14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxhPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2k7cmV0dXJuIGU9ZS5yZXBsYWNlKHIsZnVuY3Rpb24oZSx0LHIsYSl7cmV0dXJuIHQrdCtyK3IrYSthfSksdD1hLmV4ZWMoZSksdD9bcGFyc2VJbnQodFsxXSwxNikscGFyc2VJbnQodFsyXSwxNikscGFyc2VJbnQodFszXSwxNildOlswLDAsMF19LGlzQ1NTTnVsbFZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiAwPT1lfHwvXihub25lfGF1dG98dHJhbnNwYXJlbnR8KHJnYmFcXCgwLCA/MCwgPzAsID8wXFwpKSkkL2kudGVzdChlKX0sZ2V0VW5pdFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuL14ocm90YXRlfHNrZXcpL2kudGVzdChlKT9cImRlZ1wiOi8oXihzY2FsZXxzY2FsZVh8c2NhbGVZfHNjYWxlWnxhbHBoYXxmbGV4R3Jvd3xmbGV4SGVpZ2h0fHpJbmRleHxmb250V2VpZ2h0KSQpfCgob3BhY2l0eXxyZWR8Z3JlZW58Ymx1ZXxhbHBoYSkkKS9pLnRlc3QoZSk/XCJcIjpcInB4XCJ9LGdldERpc3BsYXlUeXBlOmZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUudGFnTmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7cmV0dXJuL14oYnxiaWd8aXxzbWFsbHx0dHxhYmJyfGFjcm9ueW18Y2l0ZXxjb2RlfGRmbnxlbXxrYmR8c3Ryb25nfHNhbXB8dmFyfGF8YmRvfGJyfGltZ3xtYXB8b2JqZWN0fHF8c2NyaXB0fHNwYW58c3VifHN1cHxidXR0b258aW5wdXR8bGFiZWx8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KHQpP1wiaW5saW5lXCI6L14obGkpJC9pLnRlc3QodCk/XCJsaXN0LWl0ZW1cIjovXih0cikkL2kudGVzdCh0KT9cInRhYmxlLXJvd1wiOi9eKHRhYmxlKSQvaS50ZXN0KHQpP1widGFibGVcIjovXih0Ym9keSkkL2kudGVzdCh0KT9cInRhYmxlLXJvdy1ncm91cFwiOlwiYmxvY2tcIn0sYWRkQ2xhc3M6ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5hZGQodCk6ZS5jbGFzc05hbWUrPShlLmNsYXNzTmFtZS5sZW5ndGg/XCIgXCI6XCJcIikrdH0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5yZW1vdmUodCk6ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIit0LnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcc3wkKVwiLFwiZ2lcIiksXCIgXCIpfX0sZ2V0UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihlLHIsbixvKXtmdW5jdGlvbiBzKGUscil7ZnVuY3Rpb24gbigpe3UmJlMuc2V0UHJvcGVydHlWYWx1ZShlLFwiZGlzcGxheVwiLFwibm9uZVwiKX12YXIgbD0wO2lmKDg+PWQpbD1mLmNzcyhlLHIpO2Vsc2V7dmFyIHU9ITE7aWYoL14od2lkdGh8aGVpZ2h0KSQvLnRlc3QocikmJjA9PT1TLmdldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIikmJih1PSEwLFMuc2V0UHJvcGVydHlWYWx1ZShlLFwiZGlzcGxheVwiLFMuVmFsdWVzLmdldERpc3BsYXlUeXBlKGUpKSksIW8pe2lmKFwiaGVpZ2h0XCI9PT1yJiZcImJvcmRlci1ib3hcIiE9PVMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7dmFyIGM9ZS5vZmZzZXRIZWlnaHQtKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJUb3BXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyQm90dG9tV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcInBhZGRpbmdUb3BcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcInBhZGRpbmdCb3R0b21cIikpfHwwKTtyZXR1cm4gbigpLGN9aWYoXCJ3aWR0aFwiPT09ciYmXCJib3JkZXItYm94XCIhPT1TLmdldFByb3BlcnR5VmFsdWUoZSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBwPWUub2Zmc2V0V2lkdGgtKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJMZWZ0V2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcImJvcmRlclJpZ2h0V2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcInBhZGRpbmdMZWZ0XCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nUmlnaHRcIikpfHwwKTtyZXR1cm4gbigpLHB9fXZhciBnO2c9aShlKT09PWE/dC5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCk6aShlKS5jb21wdXRlZFN0eWxlP2koZSkuY29tcHV0ZWRTdHlsZTppKGUpLmNvbXB1dGVkU3R5bGU9dC5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCksXCJib3JkZXJDb2xvclwiPT09ciYmKHI9XCJib3JkZXJUb3BDb2xvclwiKSxsPTk9PT1kJiZcImZpbHRlclwiPT09cj9nLmdldFByb3BlcnR5VmFsdWUocik6Z1tyXSwoXCJcIj09PWx8fG51bGw9PT1sKSYmKGw9ZS5zdHlsZVtyXSksbigpfWlmKFwiYXV0b1wiPT09bCYmL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvaS50ZXN0KHIpKXt2YXIgbT1zKGUsXCJwb3NpdGlvblwiKTsoXCJmaXhlZFwiPT09bXx8XCJhYnNvbHV0ZVwiPT09bSYmL3RvcHxsZWZ0L2kudGVzdChyKSkmJihsPWYoZSkucG9zaXRpb24oKVtyXStcInB4XCIpfXJldHVybiBsfXZhciBsO2lmKFMuSG9va3MucmVnaXN0ZXJlZFtyXSl7dmFyIHU9cixjPVMuSG9va3MuZ2V0Um9vdCh1KTtuPT09YSYmKG49Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsUy5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSkpLFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmKG49Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiZXh0cmFjdFwiLGUsbikpLGw9Uy5Ib29rcy5leHRyYWN0VmFsdWUodSxuKX1lbHNlIGlmKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSl7dmFyIHAsZztwPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIixlKSxcInRyYW5zZm9ybVwiIT09cCYmKGc9cyhlLFMuTmFtZXMucHJlZml4Q2hlY2socClbMF0pLFMuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGcpJiZTLkhvb2tzLnRlbXBsYXRlc1tyXSYmKGc9Uy5Ib29rcy50ZW1wbGF0ZXNbcl1bMV0pKSxsPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImV4dHJhY3RcIixlLGcpfWlmKCEvXltcXGQtXS8udGVzdChsKSlpZihpKGUpJiZpKGUpLmlzU1ZHJiZTLk5hbWVzLlNWR0F0dHJpYnV0ZShyKSlpZigvXihoZWlnaHR8d2lkdGgpJC9pLnRlc3QocikpdHJ5e2w9ZS5nZXRCQm94KClbcl19Y2F0Y2gobSl7bD0wfWVsc2UgbD1lLmdldEF0dHJpYnV0ZShyKTtlbHNlIGw9cyhlLFMuTmFtZXMucHJlZml4Q2hlY2socilbMF0pO3JldHVybiBTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShsKSYmKGw9MCksYi5kZWJ1Zz49MiYmY29uc29sZS5sb2coXCJHZXQgXCIrcitcIjogXCIrbCksbH0sc2V0UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihlLHIsYSxuLG8pe3ZhciBzPXI7aWYoXCJzY3JvbGxcIj09PXIpby5jb250YWluZXI/by5jb250YWluZXJbXCJzY3JvbGxcIitvLmRpcmVjdGlvbl09YTpcIkxlZnRcIj09PW8uZGlyZWN0aW9uP3Quc2Nyb2xsVG8oYSxvLmFsdGVybmF0ZVZhbHVlKTp0LnNjcm9sbFRvKG8uYWx0ZXJuYXRlVmFsdWUsYSk7ZWxzZSBpZihTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0mJlwidHJhbnNmb3JtXCI9PT1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsZSkpUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiaW5qZWN0XCIsZSxhKSxzPVwidHJhbnNmb3JtXCIsYT1pKGUpLnRyYW5zZm9ybUNhY2hlW3JdO2Vsc2V7aWYoUy5Ib29rcy5yZWdpc3RlcmVkW3JdKXt2YXIgbD1yLHU9Uy5Ib29rcy5nZXRSb290KHIpO249bnx8Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsdSksYT1TLkhvb2tzLmluamVjdFZhbHVlKGwsYSxuKSxyPXV9aWYoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdJiYoYT1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJpbmplY3RcIixlLGEpLHI9Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLGUpKSxzPVMuTmFtZXMucHJlZml4Q2hlY2socilbMF0sOD49ZCl0cnl7ZS5zdHlsZVtzXT1hfWNhdGNoKGMpe2IuZGVidWcmJmNvbnNvbGUubG9nKFwiQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFtcIithK1wiXSBmb3IgW1wiK3MrXCJdXCIpfWVsc2UgaShlKSYmaShlKS5pc1NWRyYmUy5OYW1lcy5TVkdBdHRyaWJ1dGUocik/ZS5zZXRBdHRyaWJ1dGUocixhKTplLnN0eWxlW3NdPWE7Yi5kZWJ1Zz49MiYmY29uc29sZS5sb2coXCJTZXQgXCIrcitcIiAoXCIrcytcIik6IFwiK2EpfXJldHVybltzLGFdfSxmbHVzaFRyYW5zZm9ybUNhY2hlOmZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsdCkpfXZhciByPVwiXCI7aWYoKGR8fGIuU3RhdGUuaXNBbmRyb2lkJiYhYi5TdGF0ZS5pc0Nocm9tZSkmJmkoZSkuaXNTVkcpe3ZhciBhPXt0cmFuc2xhdGU6W3QoXCJ0cmFuc2xhdGVYXCIpLHQoXCJ0cmFuc2xhdGVZXCIpXSxza2V3WDpbdChcInNrZXdYXCIpXSxza2V3WTpbdChcInNrZXdZXCIpXSxzY2FsZToxIT09dChcInNjYWxlXCIpP1t0KFwic2NhbGVcIiksdChcInNjYWxlXCIpXTpbdChcInNjYWxlWFwiKSx0KFwic2NhbGVZXCIpXSxyb3RhdGU6W3QoXCJyb3RhdGVaXCIpLDAsMF19O2YuZWFjaChpKGUpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKGUpey9edHJhbnNsYXRlL2kudGVzdChlKT9lPVwidHJhbnNsYXRlXCI6L15zY2FsZS9pLnRlc3QoZSk/ZT1cInNjYWxlXCI6L15yb3RhdGUvaS50ZXN0KGUpJiYoZT1cInJvdGF0ZVwiKSxhW2VdJiYocis9ZStcIihcIithW2VdLmpvaW4oXCIgXCIpK1wiKSBcIixkZWxldGUgYVtlXSl9KX1lbHNle3ZhciBuLG87Zi5lYWNoKGkoZSkudHJhbnNmb3JtQ2FjaGUsZnVuY3Rpb24odCl7cmV0dXJuIG49aShlKS50cmFuc2Zvcm1DYWNoZVt0XSxcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCI9PT10PyhvPW4sITApOig5PT09ZCYmXCJyb3RhdGVaXCI9PT10JiYodD1cInJvdGF0ZVwiKSx2b2lkKHIrPXQrbitcIiBcIikpfSksbyYmKHI9XCJwZXJzcGVjdGl2ZVwiK28rXCIgXCIrcil9Uy5zZXRQcm9wZXJ0eVZhbHVlKGUsXCJ0cmFuc2Zvcm1cIixyKX19O1MuSG9va3MucmVnaXN0ZXIoKSxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyKCksYi5ob29rPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1hO3JldHVybiBlPW8oZSksZi5lYWNoKGUsZnVuY3Rpb24oZSxvKXtpZihpKG8pPT09YSYmYi5pbml0KG8pLHI9PT1hKW49PT1hJiYobj1iLkNTUy5nZXRQcm9wZXJ0eVZhbHVlKG8sdCkpO2Vsc2V7dmFyIHM9Yi5DU1Muc2V0UHJvcGVydHlWYWx1ZShvLHQscik7XCJ0cmFuc2Zvcm1cIj09PXNbMF0mJmIuQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUobyksbj1zfX0pLG59O3ZhciBQPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3JldHVybiBzP2sucHJvbWlzZXx8bnVsbDpsfWZ1bmN0aW9uIG4oKXtmdW5jdGlvbiBlKGUpe2Z1bmN0aW9uIHAoZSx0KXt2YXIgcj1hLG49YSxpPWE7cmV0dXJuIG0uaXNBcnJheShlKT8ocj1lWzBdLCFtLmlzQXJyYXkoZVsxXSkmJi9eW1xcZC1dLy50ZXN0KGVbMV0pfHxtLmlzRnVuY3Rpb24oZVsxXSl8fFMuUmVnRXguaXNIZXgudGVzdChlWzFdKT9pPWVbMV06KG0uaXNTdHJpbmcoZVsxXSkmJiFTLlJlZ0V4LmlzSGV4LnRlc3QoZVsxXSl8fG0uaXNBcnJheShlWzFdKSkmJihuPXQ/ZVsxXTp1KGVbMV0scy5kdXJhdGlvbiksZVsyXSE9PWEmJihpPWVbMl0pKSk6cj1lLHR8fChuPW58fHMuZWFzaW5nKSxtLmlzRnVuY3Rpb24ocikmJihyPXIuY2FsbChvLFYsdykpLG0uaXNGdW5jdGlvbihpKSYmKGk9aS5jYWxsKG8sVix3KSksW3J8fDAsbixpXX1mdW5jdGlvbiBkKGUsdCl7dmFyIHIsYTtyZXR1cm4gYT0odHx8XCIwXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bJUEtel0rJC8sZnVuY3Rpb24oZSl7cmV0dXJuIHI9ZSxcIlwifSkscnx8KHI9Uy5WYWx1ZXMuZ2V0VW5pdFR5cGUoZSkpLFthLHJdfWZ1bmN0aW9uIGgoKXt2YXIgZT17bXlQYXJlbnQ6by5wYXJlbnROb2RlfHxyLmJvZHkscG9zaXRpb246Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sXCJwb3NpdGlvblwiKSxmb250U2l6ZTpTLmdldFByb3BlcnR5VmFsdWUobyxcImZvbnRTaXplXCIpfSxhPWUucG9zaXRpb249PT1MLmxhc3RQb3NpdGlvbiYmZS5teVBhcmVudD09PUwubGFzdFBhcmVudCxuPWUuZm9udFNpemU9PT1MLmxhc3RGb250U2l6ZTtMLmxhc3RQYXJlbnQ9ZS5teVBhcmVudCxMLmxhc3RQb3NpdGlvbj1lLnBvc2l0aW9uLEwubGFzdEZvbnRTaXplPWUuZm9udFNpemU7dmFyIHM9MTAwLGw9e307aWYobiYmYSlsLmVtVG9QeD1MLmxhc3RFbVRvUHgsbC5wZXJjZW50VG9QeFdpZHRoPUwubGFzdFBlcmNlbnRUb1B4V2lkdGgsbC5wZXJjZW50VG9QeEhlaWdodD1MLmxhc3RQZXJjZW50VG9QeEhlaWdodDtlbHNle3ZhciB1PWkobykuaXNTVkc/ci5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwicmVjdFwiKTpyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi5pbml0KHUpLGUubXlQYXJlbnQuYXBwZW5kQ2hpbGQodSksZi5lYWNoKFtcIm92ZXJmbG93XCIsXCJvdmVyZmxvd1hcIixcIm92ZXJmbG93WVwiXSxmdW5jdGlvbihlLHQpe2IuQ1NTLnNldFByb3BlcnR5VmFsdWUodSx0LFwiaGlkZGVuXCIpfSksYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LFwicG9zaXRpb25cIixlLnBvc2l0aW9uKSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJmb250U2l6ZVwiLGUuZm9udFNpemUpLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcImJveFNpemluZ1wiLFwiY29udGVudC1ib3hcIiksZi5lYWNoKFtcIm1pbldpZHRoXCIsXCJtYXhXaWR0aFwiLFwid2lkdGhcIixcIm1pbkhlaWdodFwiLFwibWF4SGVpZ2h0XCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oZSx0KXtiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsdCxzK1wiJVwiKX0pLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcInBhZGRpbmdMZWZ0XCIscytcImVtXCIpLGwucGVyY2VudFRvUHhXaWR0aD1MLmxhc3RQZXJjZW50VG9QeFdpZHRoPShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LFwid2lkdGhcIixudWxsLCEwKSl8fDEpL3MsbC5wZXJjZW50VG9QeEhlaWdodD1MLmxhc3RQZXJjZW50VG9QeEhlaWdodD0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSxcImhlaWdodFwiLG51bGwsITApKXx8MSkvcyxsLmVtVG9QeD1MLmxhc3RFbVRvUHg9KHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsXCJwYWRkaW5nTGVmdFwiKSl8fDEpL3MsZS5teVBhcmVudC5yZW1vdmVDaGlsZCh1KX1yZXR1cm4gbnVsbD09PUwucmVtVG9QeCYmKEwucmVtVG9QeD1wYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShyLmJvZHksXCJmb250U2l6ZVwiKSl8fDE2KSxudWxsPT09TC52d1RvUHgmJihMLnZ3VG9QeD1wYXJzZUZsb2F0KHQuaW5uZXJXaWR0aCkvMTAwLEwudmhUb1B4PXBhcnNlRmxvYXQodC5pbm5lckhlaWdodCkvMTAwKSxsLnJlbVRvUHg9TC5yZW1Ub1B4LGwudndUb1B4PUwudndUb1B4LGwudmhUb1B4PUwudmhUb1B4LGIuZGVidWc+PTEmJmNvbnNvbGUubG9nKFwiVW5pdCByYXRpb3M6IFwiK0pTT04uc3RyaW5naWZ5KGwpLG8pLGx9aWYocy5iZWdpbiYmMD09PVYpdHJ5e3MuYmVnaW4uY2FsbChnLGcpfWNhdGNoKHgpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyB4fSwxKX1pZihcInNjcm9sbFwiPT09QSl7dmFyIFAsQyxULEY9L154JC9pLnRlc3Qocy5heGlzKT9cIkxlZnRcIjpcIlRvcFwiLGo9cGFyc2VGbG9hdChzLm9mZnNldCl8fDA7cy5jb250YWluZXI/bS5pc1dyYXBwZWQocy5jb250YWluZXIpfHxtLmlzTm9kZShzLmNvbnRhaW5lcik/KHMuY29udGFpbmVyPXMuY29udGFpbmVyWzBdfHxzLmNvbnRhaW5lcixQPXMuY29udGFpbmVyW1wic2Nyb2xsXCIrRl0sVD1QK2YobykucG9zaXRpb24oKVtGLnRvTG93ZXJDYXNlKCldK2opOnMuY29udGFpbmVyPW51bGw6KFA9Yi5TdGF0ZS5zY3JvbGxBbmNob3JbYi5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrRl1dLEM9Yi5TdGF0ZS5zY3JvbGxBbmNob3JbYi5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrKFwiTGVmdFwiPT09Rj9cIlRvcFwiOlwiTGVmdFwiKV1dLFQ9ZihvKS5vZmZzZXQoKVtGLnRvTG93ZXJDYXNlKCldK2opLGw9e3Njcm9sbDp7cm9vdFByb3BlcnR5VmFsdWU6ITEsc3RhcnRWYWx1ZTpQLGN1cnJlbnRWYWx1ZTpQLGVuZFZhbHVlOlQsdW5pdFR5cGU6XCJcIixlYXNpbmc6cy5lYXNpbmcsc2Nyb2xsRGF0YTp7Y29udGFpbmVyOnMuY29udGFpbmVyLGRpcmVjdGlvbjpGLGFsdGVybmF0ZVZhbHVlOkN9fSxlbGVtZW50Om99LGIuZGVidWcmJmNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChzY3JvbGwpOiBcIixsLnNjcm9sbCxvKX1lbHNlIGlmKFwicmV2ZXJzZVwiPT09QSl7aWYoIWkobykudHdlZW5zQ29udGFpbmVyKXJldHVybiB2b2lkIGYuZGVxdWV1ZShvLHMucXVldWUpO1wibm9uZVwiPT09aShvKS5vcHRzLmRpc3BsYXkmJihpKG8pLm9wdHMuZGlzcGxheT1cImF1dG9cIiksXCJoaWRkZW5cIj09PWkobykub3B0cy52aXNpYmlsaXR5JiYoaShvKS5vcHRzLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIpLGkobykub3B0cy5sb29wPSExLGkobykub3B0cy5iZWdpbj1udWxsLGkobykub3B0cy5jb21wbGV0ZT1udWxsLHYuZWFzaW5nfHxkZWxldGUgcy5lYXNpbmcsdi5kdXJhdGlvbnx8ZGVsZXRlIHMuZHVyYXRpb24scz1mLmV4dGVuZCh7fSxpKG8pLm9wdHMscyk7dmFyIEU9Zi5leHRlbmQoITAse30saShvKS50d2VlbnNDb250YWluZXIpO2Zvcih2YXIgSCBpbiBFKWlmKFwiZWxlbWVudFwiIT09SCl7dmFyIE49RVtIXS5zdGFydFZhbHVlO0VbSF0uc3RhcnRWYWx1ZT1FW0hdLmN1cnJlbnRWYWx1ZT1FW0hdLmVuZFZhbHVlLEVbSF0uZW5kVmFsdWU9TixtLmlzRW1wdHlPYmplY3Qodil8fChFW0hdLmVhc2luZz1zLmVhc2luZyksYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJyZXZlcnNlIHR3ZWVuc0NvbnRhaW5lciAoXCIrSCtcIik6IFwiK0pTT04uc3RyaW5naWZ5KEVbSF0pLG8pfWw9RX1lbHNlIGlmKFwic3RhcnRcIj09PUEpe3ZhciBFO2kobykudHdlZW5zQ29udGFpbmVyJiZpKG8pLmlzQW5pbWF0aW5nPT09ITAmJihFPWkobykudHdlZW5zQ29udGFpbmVyKSxmLmVhY2goeSxmdW5jdGlvbihlLHQpe2lmKFJlZ0V4cChcIl5cIitTLkxpc3RzLmNvbG9ycy5qb2luKFwiJHxeXCIpK1wiJFwiKS50ZXN0KGUpKXt2YXIgcj1wKHQsITApLG49clswXSxvPXJbMV0saT1yWzJdO2lmKFMuUmVnRXguaXNIZXgudGVzdChuKSl7Zm9yKHZhciBzPVtcIlJlZFwiLFwiR3JlZW5cIixcIkJsdWVcIl0sbD1TLlZhbHVlcy5oZXhUb1JnYihuKSx1PWk/Uy5WYWx1ZXMuaGV4VG9SZ2IoaSk6YSxjPTA7YzxzLmxlbmd0aDtjKyspe3ZhciBmPVtsW2NdXTtvJiZmLnB1c2gobyksdSE9PWEmJmYucHVzaCh1W2NdKSx5W2Urc1tjXV09Zn1kZWxldGUgeVtlXX19fSk7Zm9yKHZhciB6IGluIHkpe3ZhciBPPXAoeVt6XSkscT1PWzBdLCQ9T1sxXSxNPU9bMl07ej1TLk5hbWVzLmNhbWVsQ2FzZSh6KTt2YXIgST1TLkhvb2tzLmdldFJvb3QoeiksQj0hMTtpZihpKG8pLmlzU1ZHfHxcInR3ZWVuXCI9PT1JfHxTLk5hbWVzLnByZWZpeENoZWNrKEkpWzFdIT09ITF8fFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtJXSE9PWEpeyhzLmRpc3BsYXkhPT1hJiZudWxsIT09cy5kaXNwbGF5JiZcIm5vbmVcIiE9PXMuZGlzcGxheXx8cy52aXNpYmlsaXR5IT09YSYmXCJoaWRkZW5cIiE9PXMudmlzaWJpbGl0eSkmJi9vcGFjaXR5fGZpbHRlci8udGVzdCh6KSYmIU0mJjAhPT1xJiYoTT0wKSxzLl9jYWNoZVZhbHVlcyYmRSYmRVt6XT8oTT09PWEmJihNPUVbel0uZW5kVmFsdWUrRVt6XS51bml0VHlwZSksQj1pKG8pLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSV0pOlMuSG9va3MucmVnaXN0ZXJlZFt6XT9NPT09YT8oQj1TLmdldFByb3BlcnR5VmFsdWUobyxJKSxNPVMuZ2V0UHJvcGVydHlWYWx1ZShvLHosQikpOkI9Uy5Ib29rcy50ZW1wbGF0ZXNbSV1bMV06TT09PWEmJihNPVMuZ2V0UHJvcGVydHlWYWx1ZShvLHopKTt2YXIgVyxHLFksRD0hMTtpZihXPWQoeixNKSxNPVdbMF0sWT1XWzFdLFc9ZCh6LHEpLHE9V1swXS5yZXBsYWNlKC9eKFsrLVxcLypdKT0vLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIEQ9dCxcIlwifSksRz1XWzFdLE09cGFyc2VGbG9hdChNKXx8MCxxPXBhcnNlRmxvYXQocSl8fDAsXCIlXCI9PT1HJiYoL14oZm9udFNpemV8bGluZUhlaWdodCkkLy50ZXN0KHopPyhxLz0xMDAsRz1cImVtXCIpOi9ec2NhbGUvLnRlc3Qoeik/KHEvPTEwMCxHPVwiXCIpOi8oUmVkfEdyZWVufEJsdWUpJC9pLnRlc3QoeikmJihxPXEvMTAwKjI1NSxHPVwiXCIpKSwvW1xcLypdLy50ZXN0KEQpKUc9WTtlbHNlIGlmKFkhPT1HJiYwIT09TSlpZigwPT09cSlHPVk7ZWxzZXtuPW58fGgoKTt2YXIgUT0vbWFyZ2lufHBhZGRpbmd8bGVmdHxyaWdodHx3aWR0aHx0ZXh0fHdvcmR8bGV0dGVyL2kudGVzdCh6KXx8L1gkLy50ZXN0KHopfHxcInhcIj09PXo/XCJ4XCI6XCJ5XCI7c3dpdGNoKFkpe2Nhc2VcIiVcIjpNKj1cInhcIj09PVE/bi5wZXJjZW50VG9QeFdpZHRoOm4ucGVyY2VudFRvUHhIZWlnaHQ7YnJlYWs7Y2FzZVwicHhcIjpicmVhaztkZWZhdWx0Ok0qPW5bWStcIlRvUHhcIl19c3dpdGNoKEcpe2Nhc2VcIiVcIjpNKj0xLyhcInhcIj09PVE/bi5wZXJjZW50VG9QeFdpZHRoOm4ucGVyY2VudFRvUHhIZWlnaHQpO2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpNKj0xL25bRytcIlRvUHhcIl19fXN3aXRjaChEKXtjYXNlXCIrXCI6cT1NK3E7YnJlYWs7Y2FzZVwiLVwiOnE9TS1xO2JyZWFrO2Nhc2VcIipcIjpxPU0qcTticmVhaztjYXNlXCIvXCI6cT1NL3F9bFt6XT17cm9vdFByb3BlcnR5VmFsdWU6QixzdGFydFZhbHVlOk0sY3VycmVudFZhbHVlOk0sZW5kVmFsdWU6cSx1bml0VHlwZTpHLGVhc2luZzokfSxiLmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoXCIreitcIik6IFwiK0pTT04uc3RyaW5naWZ5KGxbel0pLG8pfWVsc2UgYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJTa2lwcGluZyBbXCIrSStcIl0gZHVlIHRvIGEgbGFjayBvZiBicm93c2VyIHN1cHBvcnQuXCIpfWwuZWxlbWVudD1vfWwuZWxlbWVudCYmKFMuVmFsdWVzLmFkZENsYXNzKG8sXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiksUi5wdXNoKGwpLFwiXCI9PT1zLnF1ZXVlJiYoaShvKS50d2VlbnNDb250YWluZXI9bCxpKG8pLm9wdHM9cyksaShvKS5pc0FuaW1hdGluZz0hMCxWPT09dy0xPyhiLlN0YXRlLmNhbGxzLnB1c2goW1IsZyxzLG51bGwsay5yZXNvbHZlcl0pLGIuU3RhdGUuaXNUaWNraW5nPT09ITEmJihiLlN0YXRlLmlzVGlja2luZz0hMCxjKCkpKTpWKyspfXZhciBuLG89dGhpcyxzPWYuZXh0ZW5kKHt9LGIuZGVmYXVsdHMsdiksbD17fTtzd2l0Y2goaShvKT09PWEmJmIuaW5pdChvKSxwYXJzZUZsb2F0KHMuZGVsYXkpJiZzLnF1ZXVlIT09ITEmJmYucXVldWUobyxzLnF1ZXVlLGZ1bmN0aW9uKGUpe2IudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZz0hMCxpKG8pLmRlbGF5VGltZXI9e3NldFRpbWVvdXQ6c2V0VGltZW91dChlLHBhcnNlRmxvYXQocy5kZWxheSkpLG5leHQ6ZX19KSxzLmR1cmF0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7Y2FzZVwiZmFzdFwiOnMuZHVyYXRpb249MjAwO2JyZWFrO2Nhc2VcIm5vcm1hbFwiOnMuZHVyYXRpb249aDticmVhaztjYXNlXCJzbG93XCI6cy5kdXJhdGlvbj02MDA7YnJlYWs7ZGVmYXVsdDpzLmR1cmF0aW9uPXBhcnNlRmxvYXQocy5kdXJhdGlvbil8fDF9Yi5tb2NrIT09ITEmJihiLm1vY2s9PT0hMD9zLmR1cmF0aW9uPXMuZGVsYXk9MToocy5kdXJhdGlvbio9cGFyc2VGbG9hdChiLm1vY2spfHwxLHMuZGVsYXkqPXBhcnNlRmxvYXQoYi5tb2NrKXx8MSkpLHMuZWFzaW5nPXUocy5lYXNpbmcscy5kdXJhdGlvbikscy5iZWdpbiYmIW0uaXNGdW5jdGlvbihzLmJlZ2luKSYmKHMuYmVnaW49bnVsbCkscy5wcm9ncmVzcyYmIW0uaXNGdW5jdGlvbihzLnByb2dyZXNzKSYmKHMucHJvZ3Jlc3M9bnVsbCkscy5jb21wbGV0ZSYmIW0uaXNGdW5jdGlvbihzLmNvbXBsZXRlKSYmKHMuY29tcGxldGU9bnVsbCkscy5kaXNwbGF5IT09YSYmbnVsbCE9PXMuZGlzcGxheSYmKHMuZGlzcGxheT1zLmRpc3BsYXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLFwiYXV0b1wiPT09cy5kaXNwbGF5JiYocy5kaXNwbGF5PWIuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShvKSkpLHMudmlzaWJpbGl0eSE9PWEmJm51bGwhPT1zLnZpc2liaWxpdHkmJihzLnZpc2liaWxpdHk9cy52aXNpYmlsaXR5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkscy5tb2JpbGVIQT1zLm1vYmlsZUhBJiZiLlN0YXRlLmlzTW9iaWxlJiYhYi5TdGF0ZS5pc0dpbmdlcmJyZWFkLHMucXVldWU9PT0hMT9zLmRlbGF5P3NldFRpbWVvdXQoZSxzLmRlbGF5KTplKCk6Zi5xdWV1ZShvLHMucXVldWUsZnVuY3Rpb24odCxyKXtyZXR1cm4gcj09PSEwPyhrLnByb21pc2UmJmsucmVzb2x2ZXIoZyksITApOihiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsdm9pZCBlKHQpKX0pLFwiXCIhPT1zLnF1ZXVlJiZcImZ4XCIhPT1zLnF1ZXVlfHxcImlucHJvZ3Jlc3NcIj09PWYucXVldWUobylbMF18fGYuZGVxdWV1ZShvKX12YXIgcyxsLGQsZyx5LHYseD1hcmd1bWVudHNbMF0mJihhcmd1bWVudHNbMF0ucHx8Zi5pc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSYmIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzfHxtLmlzU3RyaW5nKGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSk7aWYobS5pc1dyYXBwZWQodGhpcyk/KHM9ITEsZD0wLGc9dGhpcyxsPXRoaXMpOihzPSEwLGQ9MSxnPXg/YXJndW1lbnRzWzBdLmVsZW1lbnRzfHxhcmd1bWVudHNbMF0uZTphcmd1bWVudHNbMF0pLGc9byhnKSl7eD8oeT1hcmd1bWVudHNbMF0ucHJvcGVydGllc3x8YXJndW1lbnRzWzBdLnAsdj1hcmd1bWVudHNbMF0ub3B0aW9uc3x8YXJndW1lbnRzWzBdLm8pOih5PWFyZ3VtZW50c1tkXSx2PWFyZ3VtZW50c1tkKzFdKTt2YXIgdz1nLmxlbmd0aCxWPTA7aWYoIS9eKHN0b3B8ZmluaXNoKSQvaS50ZXN0KHkpJiYhZi5pc1BsYWluT2JqZWN0KHYpKXt2YXIgQz1kKzE7dj17fTtmb3IodmFyIFQ9QztUPGFyZ3VtZW50cy5sZW5ndGg7VCsrKW0uaXNBcnJheShhcmd1bWVudHNbVF0pfHwhL14oZmFzdHxub3JtYWx8c2xvdykkL2kudGVzdChhcmd1bWVudHNbVF0pJiYhL15cXGQvLnRlc3QoYXJndW1lbnRzW1RdKT9tLmlzU3RyaW5nKGFyZ3VtZW50c1tUXSl8fG0uaXNBcnJheShhcmd1bWVudHNbVF0pP3YuZWFzaW5nPWFyZ3VtZW50c1tUXTptLmlzRnVuY3Rpb24oYXJndW1lbnRzW1RdKSYmKHYuY29tcGxldGU9YXJndW1lbnRzW1RdKTp2LmR1cmF0aW9uPWFyZ3VtZW50c1tUXX12YXIgaz17cHJvbWlzZTpudWxsLHJlc29sdmVyOm51bGwscmVqZWN0ZXI6bnVsbH07cyYmYi5Qcm9taXNlJiYoay5wcm9taXNlPW5ldyBiLlByb21pc2UoZnVuY3Rpb24oZSx0KXtrLnJlc29sdmVyPWUsay5yZWplY3Rlcj10fSkpO3ZhciBBO3N3aXRjaCh5KXtjYXNlXCJzY3JvbGxcIjpBPVwic2Nyb2xsXCI7YnJlYWs7Y2FzZVwicmV2ZXJzZVwiOkE9XCJyZXZlcnNlXCI7YnJlYWs7Y2FzZVwiZmluaXNoXCI6Y2FzZVwic3RvcFwiOmYuZWFjaChnLGZ1bmN0aW9uKGUsdCl7aSh0KSYmaSh0KS5kZWxheVRpbWVyJiYoY2xlYXJUaW1lb3V0KGkodCkuZGVsYXlUaW1lci5zZXRUaW1lb3V0KSxpKHQpLmRlbGF5VGltZXIubmV4dCYmaSh0KS5kZWxheVRpbWVyLm5leHQoKSxkZWxldGUgaSh0KS5kZWxheVRpbWVyKX0pO3ZhciBGPVtdO3JldHVybiBmLmVhY2goYi5TdGF0ZS5jYWxscyxmdW5jdGlvbihlLHQpe3QmJmYuZWFjaCh0WzFdLGZ1bmN0aW9uKHIsbil7dmFyIG89dj09PWE/XCJcIjp2O3JldHVybiBvPT09ITB8fHRbMl0ucXVldWU9PT1vfHx2PT09YSYmdFsyXS5xdWV1ZT09PSExP3ZvaWQgZi5lYWNoKGcsZnVuY3Rpb24ocixhKXthPT09biYmKCh2PT09ITB8fG0uaXNTdHJpbmcodikpJiYoZi5lYWNoKGYucXVldWUoYSxtLmlzU3RyaW5nKHYpP3Y6XCJcIiksZnVuY3Rpb24oZSx0KXtcbm0uaXNGdW5jdGlvbih0KSYmdChudWxsLCEwKX0pLGYucXVldWUoYSxtLmlzU3RyaW5nKHYpP3Y6XCJcIixbXSkpLFwic3RvcFwiPT09eT8oaShhKSYmaShhKS50d2VlbnNDb250YWluZXImJm8hPT0hMSYmZi5lYWNoKGkoYSkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGUsdCl7dC5lbmRWYWx1ZT10LmN1cnJlbnRWYWx1ZX0pLEYucHVzaChlKSk6XCJmaW5pc2hcIj09PXkmJih0WzJdLmR1cmF0aW9uPTEpKX0pOiEwfSl9KSxcInN0b3BcIj09PXkmJihmLmVhY2goRixmdW5jdGlvbihlLHQpe3AodCwhMCl9KSxrLnByb21pc2UmJmsucmVzb2x2ZXIoZykpLGUoKTtkZWZhdWx0OmlmKCFmLmlzUGxhaW5PYmplY3QoeSl8fG0uaXNFbXB0eU9iamVjdCh5KSl7aWYobS5pc1N0cmluZyh5KSYmYi5SZWRpcmVjdHNbeV0pe3ZhciBqPWYuZXh0ZW5kKHt9LHYpLEU9ai5kdXJhdGlvbixIPWouZGVsYXl8fDA7cmV0dXJuIGouYmFja3dhcmRzPT09ITAmJihnPWYuZXh0ZW5kKCEwLFtdLGcpLnJldmVyc2UoKSksZi5lYWNoKGcsZnVuY3Rpb24oZSx0KXtwYXJzZUZsb2F0KGouc3RhZ2dlcik/ai5kZWxheT1IK3BhcnNlRmxvYXQoai5zdGFnZ2VyKSplOm0uaXNGdW5jdGlvbihqLnN0YWdnZXIpJiYoai5kZWxheT1IK2ouc3RhZ2dlci5jYWxsKHQsZSx3KSksai5kcmFnJiYoai5kdXJhdGlvbj1wYXJzZUZsb2F0KEUpfHwoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdCh5KT8xZTM6aCksai5kdXJhdGlvbj1NYXRoLm1heChqLmR1cmF0aW9uKihqLmJhY2t3YXJkcz8xLWUvdzooZSsxKS93KSwuNzUqai5kdXJhdGlvbiwyMDApKSxiLlJlZGlyZWN0c1t5XS5jYWxsKHQsdCxqfHx7fSxlLHcsZyxrLnByb21pc2U/azphKX0pLGUoKX12YXIgTj1cIlZlbG9jaXR5OiBGaXJzdCBhcmd1bWVudCAoXCIreStcIikgd2FzIG5vdCBhIHByb3BlcnR5IG1hcCwgYSBrbm93biBhY3Rpb24sIG9yIGEgcmVnaXN0ZXJlZCByZWRpcmVjdC4gQWJvcnRpbmcuXCI7cmV0dXJuIGsucHJvbWlzZT9rLnJlamVjdGVyKG5ldyBFcnJvcihOKSk6Y29uc29sZS5sb2coTiksZSgpfUE9XCJzdGFydFwifXZhciBMPXtsYXN0UGFyZW50Om51bGwsbGFzdFBvc2l0aW9uOm51bGwsbGFzdEZvbnRTaXplOm51bGwsbGFzdFBlcmNlbnRUb1B4V2lkdGg6bnVsbCxsYXN0UGVyY2VudFRvUHhIZWlnaHQ6bnVsbCxsYXN0RW1Ub1B4Om51bGwscmVtVG9QeDpudWxsLHZ3VG9QeDpudWxsLHZoVG9QeDpudWxsfSxSPVtdO2YuZWFjaChnLGZ1bmN0aW9uKGUsdCl7bS5pc05vZGUodCkmJm4uY2FsbCh0KX0pO3ZhciB6LGo9Zi5leHRlbmQoe30sYi5kZWZhdWx0cyx2KTtpZihqLmxvb3A9cGFyc2VJbnQoai5sb29wKSx6PTIqai5sb29wLTEsai5sb29wKWZvcih2YXIgTz0wO3o+TztPKyspe3ZhciBxPXtkZWxheTpqLmRlbGF5LHByb2dyZXNzOmoucHJvZ3Jlc3N9O089PT16LTEmJihxLmRpc3BsYXk9ai5kaXNwbGF5LHEudmlzaWJpbGl0eT1qLnZpc2liaWxpdHkscS5jb21wbGV0ZT1qLmNvbXBsZXRlKSxQKGcsXCJyZXZlcnNlXCIscSl9cmV0dXJuIGUoKX19O2I9Zi5leHRlbmQoUCxiKSxiLmFuaW1hdGU9UDt2YXIgdz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZztyZXR1cm4gYi5TdGF0ZS5pc01vYmlsZXx8ci5oaWRkZW49PT1hfHxyLmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtyLmhpZGRlbj8odz1mdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2UoITApfSwxNil9LGMoKSk6dz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8Z30pLGUuVmVsb2NpdHk9YixlIT09dCYmKGUuZm4udmVsb2NpdHk9UCxlLmZuLnZlbG9jaXR5LmRlZmF1bHRzPWIuZGVmYXVsdHMpLGYuZWFjaChbXCJEb3duXCIsXCJVcFwiXSxmdW5jdGlvbihlLHQpe2IuUmVkaXJlY3RzW1wic2xpZGVcIit0XT1mdW5jdGlvbihlLHIsbixvLGkscyl7dmFyIGw9Zi5leHRlbmQoe30sciksdT1sLmJlZ2luLGM9bC5jb21wbGV0ZSxwPXtoZWlnaHQ6XCJcIixtYXJnaW5Ub3A6XCJcIixtYXJnaW5Cb3R0b206XCJcIixwYWRkaW5nVG9wOlwiXCIscGFkZGluZ0JvdHRvbTpcIlwifSxkPXt9O2wuZGlzcGxheT09PWEmJihsLmRpc3BsYXk9XCJEb3duXCI9PT10P1wiaW5saW5lXCI9PT1iLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZSk/XCJpbmxpbmUtYmxvY2tcIjpcImJsb2NrXCI6XCJub25lXCIpLGwuYmVnaW49ZnVuY3Rpb24oKXt1JiZ1LmNhbGwoaSxpKTtmb3IodmFyIHIgaW4gcCl7ZFtyXT1lLnN0eWxlW3JdO3ZhciBhPWIuQ1NTLmdldFByb3BlcnR5VmFsdWUoZSxyKTtwW3JdPVwiRG93blwiPT09dD9bYSwwXTpbMCxhXX1kLm92ZXJmbG93PWUuc3R5bGUub3ZlcmZsb3csZS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwifSxsLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIGQpZS5zdHlsZVt0XT1kW3RdO2MmJmMuY2FsbChpLGkpLHMmJnMucmVzb2x2ZXIoaSl9LGIoZSxwLGwpfX0pLGYuZWFjaChbXCJJblwiLFwiT3V0XCJdLGZ1bmN0aW9uKGUsdCl7Yi5SZWRpcmVjdHNbXCJmYWRlXCIrdF09ZnVuY3Rpb24oZSxyLG4sbyxpLHMpe3ZhciBsPWYuZXh0ZW5kKHt9LHIpLHU9e29wYWNpdHk6XCJJblwiPT09dD8xOjB9LGM9bC5jb21wbGV0ZTtsLmNvbXBsZXRlPW4hPT1vLTE/bC5iZWdpbj1udWxsOmZ1bmN0aW9uKCl7YyYmYy5jYWxsKGksaSkscyYmcy5yZXNvbHZlcihpKX0sbC5kaXNwbGF5PT09YSYmKGwuZGlzcGxheT1cIkluXCI9PT10P1wiYXV0b1wiOlwibm9uZVwiKSxiKHRoaXMsdSxsKX19KSxifSh3aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG98fHdpbmRvdyx3aW5kb3csZG9jdW1lbnQpfSkpO1xuOyFmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBrKGEsYixjKXtyZXR1cm4gc2V0VGltZW91dChxKGEsYyksYil9ZnVuY3Rpb24gbChhLGIsYyl7cmV0dXJuIEFycmF5LmlzQXJyYXkoYSk/KG0oYSxjW2JdLGMpLCEwKTohMX1mdW5jdGlvbiBtKGEsYixjKXt2YXIgZTtpZihhKWlmKGEuZm9yRWFjaClhLmZvckVhY2goYixjKTtlbHNlIGlmKGEubGVuZ3RoIT09ZClmb3IoZT0wO2U8YS5sZW5ndGg7KWIuY2FsbChjLGFbZV0sZSxhKSxlKys7ZWxzZSBmb3IoZSBpbiBhKWEuaGFzT3duUHJvcGVydHkoZSkmJmIuY2FsbChjLGFbZV0sZSxhKX1mdW5jdGlvbiBuKGEsYixjKXtmb3IodmFyIGU9T2JqZWN0LmtleXMoYiksZj0wO2Y8ZS5sZW5ndGg7KSghY3x8YyYmYVtlW2ZdXT09PWQpJiYoYVtlW2ZdXT1iW2VbZl1dKSxmKys7cmV0dXJuIGF9ZnVuY3Rpb24gbyhhLGIpe3JldHVybiBuKGEsYiwhMCl9ZnVuY3Rpb24gcChhLGIsYyl7dmFyIGUsZD1iLnByb3RvdHlwZTtlPWEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZCksZS5jb25zdHJ1Y3Rvcj1hLGUuX3N1cGVyPWQsYyYmbihlLGMpfWZ1bmN0aW9uIHEoYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHIoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PWc/YS5hcHBseShiP2JbMF18fGQ6ZCxiKTphfWZ1bmN0aW9uIHMoYSxiKXtyZXR1cm4gYT09PWQ/YjphfWZ1bmN0aW9uIHQoYSxiLGMpe20oeChiKSxmdW5jdGlvbihiKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIHUoYSxiLGMpe20oeChiKSxmdW5jdGlvbihiKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIHYoYSxiKXtmb3IoO2E7KXtpZihhPT1iKXJldHVybiEwO2E9YS5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIHcoYSxiKXtyZXR1cm4gYS5pbmRleE9mKGIpPi0xfWZ1bmN0aW9uIHgoYSl7cmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpfWZ1bmN0aW9uIHkoYSxiLGMpe2lmKGEuaW5kZXhPZiYmIWMpcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoOyl7aWYoYyYmYVtkXVtjXT09Ynx8IWMmJmFbZF09PT1iKXJldHVybiBkO2QrK31yZXR1cm4tMX1mdW5jdGlvbiB6KGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLDApfWZ1bmN0aW9uIEEoYSxiLGMpe2Zvcih2YXIgZD1bXSxlPVtdLGY9MDtmPGEubGVuZ3RoOyl7dmFyIGc9Yj9hW2ZdW2JdOmFbZl07eShlLGcpPDAmJmQucHVzaChhW2ZdKSxlW2ZdPWcsZisrfXJldHVybiBjJiYoZD1iP2Quc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBhW2JdPmNbYl19KTpkLnNvcnQoKSksZH1mdW5jdGlvbiBCKGEsYil7Zm9yKHZhciBjLGYsZz1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxoPTA7aDxlLmxlbmd0aDspe2lmKGM9ZVtoXSxmPWM/YytnOmIsZiBpbiBhKXJldHVybiBmO2grK31yZXR1cm4gZH1mdW5jdGlvbiBEKCl7cmV0dXJuIEMrK31mdW5jdGlvbiBFKGEpe3ZhciBiPWEub3duZXJEb2N1bWVudDtyZXR1cm4gYi5kZWZhdWx0Vmlld3x8Yi5wYXJlbnRXaW5kb3d9ZnVuY3Rpb24gYWIoYSxiKXt2YXIgYz10aGlzO3RoaXMubWFuYWdlcj1hLHRoaXMuY2FsbGJhY2s9Yix0aGlzLmVsZW1lbnQ9YS5lbGVtZW50LHRoaXMudGFyZ2V0PWEub3B0aW9ucy5pbnB1dFRhcmdldCx0aGlzLmRvbUhhbmRsZXI9ZnVuY3Rpb24oYil7cihhLm9wdGlvbnMuZW5hYmxlLFthXSkmJmMuaGFuZGxlcihiKX0sdGhpcy5pbml0KCl9ZnVuY3Rpb24gYmIoYSl7dmFyIGIsYz1hLm9wdGlvbnMuaW5wdXRDbGFzcztyZXR1cm4gYj1jP2M6SD93YjpJP0ViOkc/R2I6cmIsbmV3IGIoYSxjYil9ZnVuY3Rpb24gY2IoYSxiLGMpe3ZhciBkPWMucG9pbnRlcnMubGVuZ3RoLGU9Yy5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoLGY9YiZPJiYwPT09ZC1lLGc9YiYoUXxSKSYmMD09PWQtZTtjLmlzRmlyc3Q9ISFmLGMuaXNGaW5hbD0hIWcsZiYmKGEuc2Vzc2lvbj17fSksYy5ldmVudFR5cGU9YixkYihhLGMpLGEuZW1pdChcImhhbW1lci5pbnB1dFwiLGMpLGEucmVjb2duaXplKGMpLGEuc2Vzc2lvbi5wcmV2SW5wdXQ9Y31mdW5jdGlvbiBkYihhLGIpe3ZhciBjPWEuc2Vzc2lvbixkPWIucG9pbnRlcnMsZT1kLmxlbmd0aDtjLmZpcnN0SW5wdXR8fChjLmZpcnN0SW5wdXQ9Z2IoYikpLGU+MSYmIWMuZmlyc3RNdWx0aXBsZT9jLmZpcnN0TXVsdGlwbGU9Z2IoYik6MT09PWUmJihjLmZpcnN0TXVsdGlwbGU9ITEpO3ZhciBmPWMuZmlyc3RJbnB1dCxnPWMuZmlyc3RNdWx0aXBsZSxoPWc/Zy5jZW50ZXI6Zi5jZW50ZXIsaT1iLmNlbnRlcj1oYihkKTtiLnRpbWVTdGFtcD1qKCksYi5kZWx0YVRpbWU9Yi50aW1lU3RhbXAtZi50aW1lU3RhbXAsYi5hbmdsZT1sYihoLGkpLGIuZGlzdGFuY2U9a2IoaCxpKSxlYihjLGIpLGIub2Zmc2V0RGlyZWN0aW9uPWpiKGIuZGVsdGFYLGIuZGVsdGFZKSxiLnNjYWxlPWc/bmIoZy5wb2ludGVycyxkKToxLGIucm90YXRpb249Zz9tYihnLnBvaW50ZXJzLGQpOjAsZmIoYyxiKTt2YXIgaz1hLmVsZW1lbnQ7dihiLnNyY0V2ZW50LnRhcmdldCxrKSYmKGs9Yi5zcmNFdmVudC50YXJnZXQpLGIudGFyZ2V0PWt9ZnVuY3Rpb24gZWIoYSxiKXt2YXIgYz1iLmNlbnRlcixkPWEub2Zmc2V0RGVsdGF8fHt9LGU9YS5wcmV2RGVsdGF8fHt9LGY9YS5wcmV2SW5wdXR8fHt9OyhiLmV2ZW50VHlwZT09PU98fGYuZXZlbnRUeXBlPT09USkmJihlPWEucHJldkRlbHRhPXt4OmYuZGVsdGFYfHwwLHk6Zi5kZWx0YVl8fDB9LGQ9YS5vZmZzZXREZWx0YT17eDpjLngseTpjLnl9KSxiLmRlbHRhWD1lLngrKGMueC1kLngpLGIuZGVsdGFZPWUueSsoYy55LWQueSl9ZnVuY3Rpb24gZmIoYSxiKXt2YXIgZixnLGgsaixjPWEubGFzdEludGVydmFsfHxiLGU9Yi50aW1lU3RhbXAtYy50aW1lU3RhbXA7aWYoYi5ldmVudFR5cGUhPVImJihlPk58fGMudmVsb2NpdHk9PT1kKSl7dmFyIGs9Yy5kZWx0YVgtYi5kZWx0YVgsbD1jLmRlbHRhWS1iLmRlbHRhWSxtPWliKGUsayxsKTtnPW0ueCxoPW0ueSxmPWkobS54KT5pKG0ueSk/bS54Om0ueSxqPWpiKGssbCksYS5sYXN0SW50ZXJ2YWw9Yn1lbHNlIGY9Yy52ZWxvY2l0eSxnPWMudmVsb2NpdHlYLGg9Yy52ZWxvY2l0eVksaj1jLmRpcmVjdGlvbjtiLnZlbG9jaXR5PWYsYi52ZWxvY2l0eVg9ZyxiLnZlbG9jaXR5WT1oLGIuZGlyZWN0aW9uPWp9ZnVuY3Rpb24gZ2IoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucG9pbnRlcnMubGVuZ3RoOyliW2NdPXtjbGllbnRYOmgoYS5wb2ludGVyc1tjXS5jbGllbnRYKSxjbGllbnRZOmgoYS5wb2ludGVyc1tjXS5jbGllbnRZKX0sYysrO3JldHVybnt0aW1lU3RhbXA6aigpLHBvaW50ZXJzOmIsY2VudGVyOmhiKGIpLGRlbHRhWDphLmRlbHRhWCxkZWx0YVk6YS5kZWx0YVl9fWZ1bmN0aW9uIGhiKGEpe3ZhciBiPWEubGVuZ3RoO2lmKDE9PT1iKXJldHVybnt4OmgoYVswXS5jbGllbnRYKSx5OmgoYVswXS5jbGllbnRZKX07Zm9yKHZhciBjPTAsZD0wLGU9MDtiPmU7KWMrPWFbZV0uY2xpZW50WCxkKz1hW2VdLmNsaWVudFksZSsrO3JldHVybnt4OmgoYy9iKSx5OmgoZC9iKX19ZnVuY3Rpb24gaWIoYSxiLGMpe3JldHVybnt4OmIvYXx8MCx5OmMvYXx8MH19ZnVuY3Rpb24gamIoYSxiKXtyZXR1cm4gYT09PWI/UzppKGEpPj1pKGIpP2E+MD9UOlU6Yj4wP1Y6V31mdW5jdGlvbiBrYihhLGIsYyl7Y3x8KGM9JCk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiBNYXRoLnNxcnQoZCpkK2UqZSl9ZnVuY3Rpb24gbGIoYSxiLGMpe2N8fChjPSQpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gMTgwKk1hdGguYXRhbjIoZSxkKS9NYXRoLlBJfWZ1bmN0aW9uIG1iKGEsYil7cmV0dXJuIGxiKGJbMV0sYlswXSxfKS1sYihhWzFdLGFbMF0sXyl9ZnVuY3Rpb24gbmIoYSxiKXtyZXR1cm4ga2IoYlswXSxiWzFdLF8pL2tiKGFbMF0sYVsxXSxfKX1mdW5jdGlvbiByYigpe3RoaXMuZXZFbD1wYix0aGlzLmV2V2luPXFiLHRoaXMuYWxsb3c9ITAsdGhpcy5wcmVzc2VkPSExLGFiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiB3Yigpe3RoaXMuZXZFbD11Yix0aGlzLmV2V2luPXZiLGFiLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnN0b3JlPXRoaXMubWFuYWdlci5zZXNzaW9uLnBvaW50ZXJFdmVudHM9W119ZnVuY3Rpb24gQWIoKXt0aGlzLmV2VGFyZ2V0PXliLHRoaXMuZXZXaW49emIsdGhpcy5zdGFydGVkPSExLGFiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBCYihhLGIpe3ZhciBjPXooYS50b3VjaGVzKSxkPXooYS5jaGFuZ2VkVG91Y2hlcyk7cmV0dXJuIGImKFF8UikmJihjPUEoYy5jb25jYXQoZCksXCJpZGVudGlmaWVyXCIsITApKSxbYyxkXX1mdW5jdGlvbiBFYigpe3RoaXMuZXZUYXJnZXQ9RGIsdGhpcy50YXJnZXRJZHM9e30sYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIEZiKGEsYil7dmFyIGM9eihhLnRvdWNoZXMpLGQ9dGhpcy50YXJnZXRJZHM7aWYoYiYoT3xQKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXooYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIHYoYS50YXJnZXQsaSl9KSxiPT09Tylmb3IoZT0wO2U8Zi5sZW5ndGg7KWRbZltlXS5pZGVudGlmaWVyXT0hMCxlKys7Zm9yKGU9MDtlPGcubGVuZ3RoOylkW2dbZV0uaWRlbnRpZmllcl0mJmgucHVzaChnW2VdKSxiJihRfFIpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W0EoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBHYigpe2FiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYT1xKHRoaXMuaGFuZGxlcix0aGlzKTt0aGlzLnRvdWNoPW5ldyBFYih0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgcmIodGhpcy5tYW5hZ2VyLGEpfWZ1bmN0aW9uIFBiKGEsYil7dGhpcy5tYW5hZ2VyPWEsdGhpcy5zZXQoYil9ZnVuY3Rpb24gUWIoYSl7aWYodyhhLE1iKSlyZXR1cm4gTWI7dmFyIGI9dyhhLE5iKSxjPXcoYSxPYik7cmV0dXJuIGImJmM/TmIrXCIgXCIrT2I6Ynx8Yz9iP05iOk9iOncoYSxMYik/TGI6S2J9ZnVuY3Rpb24gWWIoYSl7dGhpcy5pZD1EKCksdGhpcy5tYW5hZ2VyPW51bGwsdGhpcy5vcHRpb25zPW8oYXx8e30sdGhpcy5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmVuYWJsZT1zKHRoaXMub3B0aW9ucy5lbmFibGUsITApLHRoaXMuc3RhdGU9UmIsdGhpcy5zaW11bHRhbmVvdXM9e30sdGhpcy5yZXF1aXJlRmFpbD1bXX1mdW5jdGlvbiBaYihhKXtyZXR1cm4gYSZXYj9cImNhbmNlbFwiOmEmVWI/XCJlbmRcIjphJlRiP1wibW92ZVwiOmEmU2I/XCJzdGFydFwiOlwiXCJ9ZnVuY3Rpb24gJGIoYSl7cmV0dXJuIGE9PVc/XCJkb3duXCI6YT09Vj9cInVwXCI6YT09VD9cImxlZnRcIjphPT1VP1wicmlnaHRcIjpcIlwifWZ1bmN0aW9uIF9iKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gYWMoKXtZYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmMoKXthYy5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wWD1udWxsLHRoaXMucFk9bnVsbH1mdW5jdGlvbiBjYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBkYygpe1liLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGx9ZnVuY3Rpb24gZWMoKXthYy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZmMoKXthYy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZ2MoKXtZYi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wVGltZT0hMSx0aGlzLnBDZW50ZXI9ITEsdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsLHRoaXMuY291bnQ9MH1mdW5jdGlvbiBoYyhhLGIpe3JldHVybiBiPWJ8fHt9LGIucmVjb2duaXplcnM9cyhiLnJlY29nbml6ZXJzLGhjLmRlZmF1bHRzLnByZXNldCksbmV3IGtjKGEsYil9ZnVuY3Rpb24ga2MoYSxiKXtiPWJ8fHt9LHRoaXMub3B0aW9ucz1vKGIsaGMuZGVmYXVsdHMpLHRoaXMub3B0aW9ucy5pbnB1dFRhcmdldD10aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXR8fGEsdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5yZWNvZ25pemVycz1bXSx0aGlzLmVsZW1lbnQ9YSx0aGlzLmlucHV0PWJiKHRoaXMpLHRoaXMudG91Y2hBY3Rpb249bmV3IFBiKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxsYyh0aGlzLCEwKSxtKGIucmVjb2duaXplcnMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGQobmV3IGFbMF0oYVsxXSkpO2FbMl0mJmIucmVjb2duaXplV2l0aChhWzJdKSxhWzNdJiZiLnJlcXVpcmVGYWlsdXJlKGFbM10pfSx0aGlzKX1mdW5jdGlvbiBsYyhhLGIpe3ZhciBjPWEuZWxlbWVudDttKGEub3B0aW9ucy5jc3NQcm9wcyxmdW5jdGlvbihhLGQpe2Muc3R5bGVbQihjLnN0eWxlLGQpXT1iP2E6XCJcIn0pfWZ1bmN0aW9uIG1jKGEsYyl7dmFyIGQ9Yi5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2QuaW5pdEV2ZW50KGEsITAsITApLGQuZ2VzdHVyZT1jLGMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZCl9dmFyIGU9W1wiXCIsXCJ3ZWJraXRcIixcIm1velwiLFwiTVNcIixcIm1zXCIsXCJvXCJdLGY9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGc9XCJmdW5jdGlvblwiLGg9TWF0aC5yb3VuZCxpPU1hdGguYWJzLGo9RGF0ZS5ub3csQz0xLEY9L21vYmlsZXx0YWJsZXR8aXAoYWR8aG9uZXxvZCl8YW5kcm9pZC9pLEc9XCJvbnRvdWNoc3RhcnRcImluIGEsSD1CKGEsXCJQb2ludGVyRXZlbnRcIikhPT1kLEk9RyYmRi50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLEo9XCJ0b3VjaFwiLEs9XCJwZW5cIixMPVwibW91c2VcIixNPVwia2luZWN0XCIsTj0yNSxPPTEsUD0yLFE9NCxSPTgsUz0xLFQ9MixVPTQsVj04LFc9MTYsWD1UfFUsWT1WfFcsWj1YfFksJD1bXCJ4XCIsXCJ5XCJdLF89W1wiY2xpZW50WFwiLFwiY2xpZW50WVwiXTthYi5wcm90b3R5cGU9e2hhbmRsZXI6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJnQodGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJnQodGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJnQoRSh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZXZFbCYmdSh0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmdSh0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmdShFKHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfX07dmFyIG9iPXttb3VzZWRvd246Tyxtb3VzZW1vdmU6UCxtb3VzZXVwOlF9LHBiPVwibW91c2Vkb3duXCIscWI9XCJtb3VzZW1vdmUgbW91c2V1cFwiO3AocmIsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9b2JbYS50eXBlXTtiJk8mJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZQJiYxIT09YS53aGljaCYmKGI9USksdGhpcy5wcmVzc2VkJiZ0aGlzLmFsbG93JiYoYiZRJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpMLHNyY0V2ZW50OmF9KSl9fSk7dmFyIHNiPXtwb2ludGVyZG93bjpPLHBvaW50ZXJtb3ZlOlAscG9pbnRlcnVwOlEscG9pbnRlcmNhbmNlbDpSLHBvaW50ZXJvdXQ6Un0sdGI9ezI6SiwzOkssNDpMLDU6TX0sdWI9XCJwb2ludGVyZG93blwiLHZiPVwicG9pbnRlcm1vdmUgcG9pbnRlcnVwIHBvaW50ZXJjYW5jZWxcIjthLk1TUG9pbnRlckV2ZW50JiYodWI9XCJNU1BvaW50ZXJEb3duXCIsdmI9XCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSxwKHdiLGFiLHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RvcmUsYz0hMSxkPWEudHlwZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJtc1wiLFwiXCIpLGU9c2JbZF0sZj10YlthLnBvaW50ZXJUeXBlXXx8YS5wb2ludGVyVHlwZSxnPWY9PUosaD15KGIsYS5wb2ludGVySWQsXCJwb2ludGVySWRcIik7ZSZPJiYoMD09PWEuYnV0dG9ufHxnKT8wPmgmJihiLnB1c2goYSksaD1iLmxlbmd0aC0xKTplJihRfFIpJiYoYz0hMCksMD5ofHwoYltoXT1hLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGUse3BvaW50ZXJzOmIsY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpmLHNyY0V2ZW50OmF9KSxjJiZiLnNwbGljZShoLDEpKX19KTt2YXIgeGI9e3RvdWNoc3RhcnQ6Tyx0b3VjaG1vdmU6UCx0b3VjaGVuZDpRLHRvdWNoY2FuY2VsOlJ9LHliPVwidG91Y2hzdGFydFwiLHpiPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtwKEFiLGFiLHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPXhiW2EudHlwZV07aWYoYj09PU8mJih0aGlzLnN0YXJ0ZWQ9ITApLHRoaXMuc3RhcnRlZCl7dmFyIGM9QmIuY2FsbCh0aGlzLGEsYik7YiYoUXxSKSYmMD09PWNbMF0ubGVuZ3RoLWNbMV0ubGVuZ3RoJiYodGhpcy5zdGFydGVkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOkosc3JjRXZlbnQ6YX0pfX19KTt2YXIgQ2I9e3RvdWNoc3RhcnQ6Tyx0b3VjaG1vdmU6UCx0b3VjaGVuZDpRLHRvdWNoY2FuY2VsOlJ9LERiPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtwKEViLGFiLHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPUNiW2EudHlwZV0sYz1GYi5jYWxsKHRoaXMsYSxiKTtjJiZ0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOkosc3JjRXZlbnQ6YX0pfX0pLHAoR2IsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMucG9pbnRlclR5cGU9PUosZT1jLnBvaW50ZXJUeXBlPT1MO2lmKGQpdGhpcy5tb3VzZS5hbGxvdz0hMTtlbHNlIGlmKGUmJiF0aGlzLm1vdXNlLmFsbG93KXJldHVybjtiJihRfFIpJiYodGhpcy5tb3VzZS5hbGxvdz0hMCksdGhpcy5jYWxsYmFjayhhLGIsYyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnRvdWNoLmRlc3Ryb3koKSx0aGlzLm1vdXNlLmRlc3Ryb3koKX19KTt2YXIgSGI9QihmLnN0eWxlLFwidG91Y2hBY3Rpb25cIiksSWI9SGIhPT1kLEpiPVwiY29tcHV0ZVwiLEtiPVwiYXV0b1wiLExiPVwibWFuaXB1bGF0aW9uXCIsTWI9XCJub25lXCIsTmI9XCJwYW4teFwiLE9iPVwicGFuLXlcIjtQYi5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXthPT1KYiYmKGE9dGhpcy5jb21wdXRlKCkpLEliJiYodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbSGJdPWEpLHRoaXMuYWN0aW9ucz1hLnRvTG93ZXJDYXNlKCkudHJpbSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbil9LGNvbXB1dGU6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gbSh0aGlzLm1hbmFnZXIucmVjb2duaXplcnMsZnVuY3Rpb24oYil7cihiLm9wdGlvbnMuZW5hYmxlLFtiXSkmJihhPWEuY29uY2F0KGIuZ2V0VG91Y2hBY3Rpb24oKSkpfSksUWIoYS5qb2luKFwiIFwiKSl9LHByZXZlbnREZWZhdWx0czpmdW5jdGlvbihhKXtpZighSWIpe3ZhciBiPWEuc3JjRXZlbnQsYz1hLm9mZnNldERpcmVjdGlvbjtpZih0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQpcmV0dXJuIGIucHJldmVudERlZmF1bHQoKSx2b2lkIDA7dmFyIGQ9dGhpcy5hY3Rpb25zLGU9dyhkLE1iKSxmPXcoZCxPYiksZz13KGQsTmIpO3JldHVybiBlfHxmJiZjJlh8fGcmJmMmWT90aGlzLnByZXZlbnRTcmMoYik6dm9pZCAwfX0scHJldmVudFNyYzpmdW5jdGlvbihhKXt0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQ9ITAsYS5wcmV2ZW50RGVmYXVsdCgpfX07dmFyIFJiPTEsU2I9MixUYj00LFViPTgsVmI9VWIsV2I9MTYsWGI9MzI7WWIucHJvdG90eXBlPXtkZWZhdWx0czp7fSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4odGhpcy5vcHRpb25zLGEpLHRoaXMubWFuYWdlciYmdGhpcy5tYW5hZ2VyLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LHJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7aWYobChhLFwicmVjb2duaXplV2l0aFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuc2ltdWx0YW5lb3VzO3JldHVybiBhPV9iKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBsKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9X2IoYSx0aGlzKSxkZWxldGUgdGhpcy5zaW11bHRhbmVvdXNbYS5pZF0sdGhpcyl9LHJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGwoYSxcInJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5yZXF1aXJlRmFpbDtyZXR1cm4gYT1fYihhLHRoaXMpLC0xPT09eShiLGEpJiYoYi5wdXNoKGEpLGEucmVxdWlyZUZhaWx1cmUodGhpcykpLHRoaXN9LGRyb3BSZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihsKGEsXCJkcm9wUmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczthPV9iKGEsdGhpcyk7dmFyIGI9eSh0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gZChkKXtiLm1hbmFnZXIuZW1pdChiLm9wdGlvbnMuZXZlbnQrKGQ/WmIoYyk6XCJcIiksYSl9dmFyIGI9dGhpcyxjPXRoaXMuc3RhdGU7VWI+YyYmZCghMCksZCgpLGM+PVViJiZkKCEwKX0sdHJ5RW1pdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jYW5FbWl0KCk/dGhpcy5lbWl0KGEpOih0aGlzLnN0YXRlPVhiLHZvaWQgMCl9LGNhbkVtaXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoOyl7aWYoISh0aGlzLnJlcXVpcmVGYWlsW2FdLnN0YXRlJihYYnxSYikpKXJldHVybiExO2ErK31yZXR1cm4hMH0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPW4oe30sYSk7cmV0dXJuIHIodGhpcy5vcHRpb25zLmVuYWJsZSxbdGhpcyxiXSk/KHRoaXMuc3RhdGUmKFZifFdifFhiKSYmKHRoaXMuc3RhdGU9UmIpLHRoaXMuc3RhdGU9dGhpcy5wcm9jZXNzKGIpLHRoaXMuc3RhdGUmKFNifFRifFVifFdiKSYmdGhpcy50cnlFbWl0KGIpLHZvaWQgMCk6KHRoaXMucmVzZXQoKSx0aGlzLnN0YXRlPVhiLHZvaWQgMCl9LHByb2Nlc3M6ZnVuY3Rpb24oKXt9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7fSxyZXNldDpmdW5jdGlvbigpe319LHAoYWMsWWIse2RlZmF1bHRzOntwb2ludGVyczoxfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMucG9pbnRlcnM7cmV0dXJuIDA9PT1ifHxhLnBvaW50ZXJzLmxlbmd0aD09PWJ9LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdGF0ZSxjPWEuZXZlbnRUeXBlLGQ9YiYoU2J8VGIpLGU9dGhpcy5hdHRyVGVzdChhKTtyZXR1cm4gZCYmKGMmUnx8IWUpP2J8V2I6ZHx8ZT9jJlE/YnxVYjpiJlNiP2J8VGI6U2I6WGJ9fSkscChiYyxhYyx7ZGVmYXVsdHM6e2V2ZW50OlwicGFuXCIsdGhyZXNob2xkOjEwLHBvaW50ZXJzOjEsZGlyZWN0aW9uOlp9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLmRpcmVjdGlvbixiPVtdO3JldHVybiBhJlgmJmIucHVzaChPYiksYSZZJiZiLnB1c2goTmIpLGJ9LGRpcmVjdGlvblRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9ITAsZD1hLmRpc3RhbmNlLGU9YS5kaXJlY3Rpb24sZj1hLmRlbHRhWCxnPWEuZGVsdGFZO3JldHVybiBlJmIuZGlyZWN0aW9ufHwoYi5kaXJlY3Rpb24mWD8oZT0wPT09Zj9TOjA+Zj9UOlUsYz1mIT10aGlzLnBYLGQ9TWF0aC5hYnMoYS5kZWx0YVgpKTooZT0wPT09Zz9TOjA+Zz9WOlcsYz1nIT10aGlzLnBZLGQ9TWF0aC5hYnMoYS5kZWx0YVkpKSksYS5kaXJlY3Rpb249ZSxjJiZkPmIudGhyZXNob2xkJiZlJmIuZGlyZWN0aW9ufSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gYWMucHJvdG90eXBlLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKHRoaXMuc3RhdGUmU2J8fCEodGhpcy5zdGF0ZSZTYikmJnRoaXMuZGlyZWN0aW9uVGVzdChhKSl9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5wWD1hLmRlbHRhWCx0aGlzLnBZPWEuZGVsdGFZO3ZhciBiPSRiKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKX19KSxwKGNjLGFjLHtkZWZhdWx0czp7ZXZlbnQ6XCJwaW5jaFwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW01iXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEuc2NhbGUtMSk+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZTYil9LGVtaXQ6ZnVuY3Rpb24oYSl7aWYodGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSksMSE9PWEuc2NhbGUpe3ZhciBiPWEuc2NhbGU8MT9cImluXCI6XCJvdXRcIjt0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKX19fSkscChkYyxZYix7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6NTAwLHRocmVzaG9sZDo1fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltLYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxlPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKFF8UikmJiFlKXRoaXMucmVzZXQoKTtlbHNlIGlmKGEuZXZlbnRUeXBlJk8pdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWsoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPVZiLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZRKXJldHVybiBWYjtyZXR1cm4gWGJ9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnN0YXRlPT09VmImJihhJiZhLmV2ZW50VHlwZSZRP3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtcInVwXCIsYSk6KHRoaXMuX2lucHV0LnRpbWVTdGFtcD1qKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLHAoZWMsYWMse2RlZmF1bHRzOntldmVudDpcInJvdGF0ZVwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW01iXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEucm90YXRpb24pPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmU2IpfX0pLHAoZmMsYWMse2RlZmF1bHRzOntldmVudDpcInN3aXBlXCIsdGhyZXNob2xkOjEwLHZlbG9jaXR5Oi42NSxkaXJlY3Rpb246WHxZLHBvaW50ZXJzOjF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGJjLnByb3RvdHlwZS5nZXRUb3VjaEFjdGlvbi5jYWxsKHRoaXMpfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYyxiPXRoaXMub3B0aW9ucy5kaXJlY3Rpb247cmV0dXJuIGImKFh8WSk/Yz1hLnZlbG9jaXR5OmImWD9jPWEudmVsb2NpdHlYOmImWSYmKGM9YS52ZWxvY2l0eVkpLHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmYiZhLmRpcmVjdGlvbiYmYS5kaXN0YW5jZT50aGlzLm9wdGlvbnMudGhyZXNob2xkJiZpKGMpPnRoaXMub3B0aW9ucy52ZWxvY2l0eSYmYS5ldmVudFR5cGUmUX0sZW1pdDpmdW5jdGlvbihhKXt2YXIgYj0kYihhLmRpcmVjdGlvbik7YiYmdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LGEpfX0pLHAoZ2MsWWIse2RlZmF1bHRzOntldmVudDpcInRhcFwiLHBvaW50ZXJzOjEsdGFwczoxLGludGVydmFsOjMwMCx0aW1lOjI1MCx0aHJlc2hvbGQ6Mixwb3NUaHJlc2hvbGQ6MTB9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW0xiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGU9YS5kZWx0YVRpbWU8Yi50aW1lO2lmKHRoaXMucmVzZXQoKSxhLmV2ZW50VHlwZSZPJiYwPT09dGhpcy5jb3VudClyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO2lmKGQmJmUmJmMpe2lmKGEuZXZlbnRUeXBlIT1RKXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGY9dGhpcy5wVGltZT9hLnRpbWVTdGFtcC10aGlzLnBUaW1lPGIuaW50ZXJ2YWw6ITAsZz0hdGhpcy5wQ2VudGVyfHxrYih0aGlzLnBDZW50ZXIsYS5jZW50ZXIpPGIucG9zVGhyZXNob2xkO3RoaXMucFRpbWU9YS50aW1lU3RhbXAsdGhpcy5wQ2VudGVyPWEuY2VudGVyLGcmJmY/dGhpcy5jb3VudCs9MTp0aGlzLmNvdW50PTEsdGhpcy5faW5wdXQ9YTt2YXIgaD10aGlzLmNvdW50JWIudGFwcztpZigwPT09aClyZXR1cm4gdGhpcy5oYXNSZXF1aXJlRmFpbHVyZXMoKT8odGhpcy5fdGltZXI9ayhmdW5jdGlvbigpe3RoaXMuc3RhdGU9VmIsdGhpcy50cnlFbWl0KCl9LGIuaW50ZXJ2YWwsdGhpcyksU2IpOlZifXJldHVybiBYYn0sZmFpbFRpbWVvdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdGltZXI9ayhmdW5jdGlvbigpe3RoaXMuc3RhdGU9WGJ9LHRoaXMub3B0aW9ucy5pbnRlcnZhbCx0aGlzKSxYYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT09VmImJih0aGlzLl9pbnB1dC50YXBDb3VudD10aGlzLmNvdW50LHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpfX0pLGhjLlZFUlNJT049XCIyLjAuNFwiLGhjLmRlZmF1bHRzPXtkb21FdmVudHM6ITEsdG91Y2hBY3Rpb246SmIsZW5hYmxlOiEwLGlucHV0VGFyZ2V0Om51bGwsaW5wdXRDbGFzczpudWxsLHByZXNldDpbW2VjLHtlbmFibGU6ITF9XSxbY2Mse2VuYWJsZTohMX0sW1wicm90YXRlXCJdXSxbZmMse2RpcmVjdGlvbjpYfV0sW2JjLHtkaXJlY3Rpb246WH0sW1wic3dpcGVcIl1dLFtnY10sW2djLHtldmVudDpcImRvdWJsZXRhcFwiLHRhcHM6Mn0sW1widGFwXCJdXSxbZGNdXSxjc3NQcm9wczp7dXNlclNlbGVjdDpcImRlZmF1bHRcIix0b3VjaFNlbGVjdDpcIm5vbmVcIix0b3VjaENhbGxvdXQ6XCJub25lXCIsY29udGVudFpvb21pbmc6XCJub25lXCIsdXNlckRyYWc6XCJub25lXCIsdGFwSGlnaGxpZ2h0Q29sb3I6XCJyZ2JhKDAsMCwwLDApXCJ9fTt2YXIgaWM9MSxqYz0yO2tjLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe3JldHVybiBuKHRoaXMub3B0aW9ucyxhKSxhLnRvdWNoQWN0aW9uJiZ0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGEuaW5wdXRUYXJnZXQmJih0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmlucHV0LnRhcmdldD1hLmlucHV0VGFyZ2V0LHRoaXMuaW5wdXQuaW5pdCgpKSx0aGlzfSxzdG9wOmZ1bmN0aW9uKGEpe3RoaXMuc2Vzc2lvbi5zdG9wcGVkPWE/amM6aWN9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnNlc3Npb247aWYoIWIuc3RvcHBlZCl7dGhpcy50b3VjaEFjdGlvbi5wcmV2ZW50RGVmYXVsdHMoYSk7dmFyIGMsZD10aGlzLnJlY29nbml6ZXJzLGU9Yi5jdXJSZWNvZ25pemVyOyghZXx8ZSYmZS5zdGF0ZSZWYikmJihlPWIuY3VyUmVjb2duaXplcj1udWxsKTtmb3IodmFyIGY9MDtmPGQubGVuZ3RoOyljPWRbZl0sYi5zdG9wcGVkPT09amN8fGUmJmMhPWUmJiFjLmNhblJlY29nbml6ZVdpdGgoZSk/Yy5yZXNldCgpOmMucmVjb2duaXplKGEpLCFlJiZjLnN0YXRlJihTYnxUYnxVYikmJihlPWIuY3VyUmVjb2duaXplcj1jKSxmKyt9fSxnZXQ6ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIFliKXJldHVybiBhO2Zvcih2YXIgYj10aGlzLnJlY29nbml6ZXJzLGM9MDtjPGIubGVuZ3RoO2MrKylpZihiW2NdLm9wdGlvbnMuZXZlbnQ9PWEpcmV0dXJuIGJbY107cmV0dXJuIG51bGx9LGFkZDpmdW5jdGlvbihhKXtpZihsKGEsXCJhZGRcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLmdldChhLm9wdGlvbnMuZXZlbnQpO3JldHVybiBiJiZ0aGlzLnJlbW92ZShiKSx0aGlzLnJlY29nbml6ZXJzLnB1c2goYSksYS5tYW5hZ2VyPXRoaXMsdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhfSxyZW1vdmU6ZnVuY3Rpb24oYSl7aWYobChhLFwicmVtb3ZlXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5yZWNvZ25pemVycztyZXR1cm4gYT10aGlzLmdldChhKSxiLnNwbGljZSh5KGIsYSksMSksdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIG0oeChhKSxmdW5jdGlvbihhKXtjW2FdPWNbYV18fFtdLGNbYV0ucHVzaChiKX0pLHRoaXN9LG9mZjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIG0oeChhKSxmdW5jdGlvbihhKXtiP2NbYV0uc3BsaWNlKHkoY1thXSxiKSwxKTpkZWxldGUgY1thXX0pLHRoaXN9LGVtaXQ6ZnVuY3Rpb24oYSxiKXt0aGlzLm9wdGlvbnMuZG9tRXZlbnRzJiZtYyhhLGIpO3ZhciBjPXRoaXMuaGFuZGxlcnNbYV0mJnRoaXMuaGFuZGxlcnNbYV0uc2xpY2UoKTtpZihjJiZjLmxlbmd0aCl7Yi50eXBlPWEsYi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2Iuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKX07Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDspY1tkXShiKSxkKyt9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50JiZsYyh0aGlzLCExKSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmVsZW1lbnQ9bnVsbH19LG4oaGMse0lOUFVUX1NUQVJUOk8sSU5QVVRfTU9WRTpQLElOUFVUX0VORDpRLElOUFVUX0NBTkNFTDpSLFNUQVRFX1BPU1NJQkxFOlJiLFNUQVRFX0JFR0FOOlNiLFNUQVRFX0NIQU5HRUQ6VGIsU1RBVEVfRU5ERUQ6VWIsU1RBVEVfUkVDT0dOSVpFRDpWYixTVEFURV9DQU5DRUxMRUQ6V2IsU1RBVEVfRkFJTEVEOlhiLERJUkVDVElPTl9OT05FOlMsRElSRUNUSU9OX0xFRlQ6VCxESVJFQ1RJT05fUklHSFQ6VSxESVJFQ1RJT05fVVA6VixESVJFQ1RJT05fRE9XTjpXLERJUkVDVElPTl9IT1JJWk9OVEFMOlgsRElSRUNUSU9OX1ZFUlRJQ0FMOlksRElSRUNUSU9OX0FMTDpaLE1hbmFnZXI6a2MsSW5wdXQ6YWIsVG91Y2hBY3Rpb246UGIsVG91Y2hJbnB1dDpFYixNb3VzZUlucHV0OnJiLFBvaW50ZXJFdmVudElucHV0OndiLFRvdWNoTW91c2VJbnB1dDpHYixTaW5nbGVUb3VjaElucHV0OkFiLFJlY29nbml6ZXI6WWIsQXR0clJlY29nbml6ZXI6YWMsVGFwOmdjLFBhbjpiYyxTd2lwZTpmYyxQaW5jaDpjYyxSb3RhdGU6ZWMsUHJlc3M6ZGMsb246dCxvZmY6dSxlYWNoOm0sbWVyZ2U6byxleHRlbmQ6bixpbmhlcml0OnAsYmluZEZuOnEscHJlZml4ZWQ6Qn0pLHR5cGVvZiBkZWZpbmU9PWcmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGhjfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9aGM6YVtjXT1oY30od2luZG93LGRvY3VtZW50LFwiSGFtbWVyXCIpOzsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5JywgJ2hhbW1lcmpzJ10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ2hhbW1lcmpzJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5LCBIYW1tZXIpO1xuICAgIH1cbn0oZnVuY3Rpb24oJCwgSGFtbWVyKSB7XG4gICAgZnVuY3Rpb24gaGFtbWVyaWZ5KGVsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgICAgaWYoISRlbC5kYXRhKFwiaGFtbWVyXCIpKSB7XG4gICAgICAgICAgICAkZWwuZGF0YShcImhhbW1lclwiLCBuZXcgSGFtbWVyKCRlbFswXSwgb3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJC5mbi5oYW1tZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBoYW1tZXJpZnkodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBleHRlbmQgdGhlIGVtaXQgbWV0aG9kIHRvIGFsc28gdHJpZ2dlciBqUXVlcnkgZXZlbnRzXG4gICAgSGFtbWVyLk1hbmFnZXIucHJvdG90eXBlLmVtaXQgPSAoZnVuY3Rpb24ob3JpZ2luYWxFbWl0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih0eXBlLCBkYXRhKSB7XG4gICAgICAgICAgICBvcmlnaW5hbEVtaXQuY2FsbCh0aGlzLCB0eXBlLCBkYXRhKTtcbiAgICAgICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIGdlc3R1cmU6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pKEhhbW1lci5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0KTtcbn0pKTtcbjsvLyBSZXF1aXJlZCBmb3IgTWV0ZW9yIHBhY2thZ2UsIHRoZSB1c2Ugb2Ygd2luZG93IHByZXZlbnRzIGV4cG9ydCBieSBNZXRlb3JcbihmdW5jdGlvbih3aW5kb3cpe1xuICBpZih3aW5kb3cuUGFja2FnZSl7XG4gICAgTWF0ZXJpYWxpemUgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuTWF0ZXJpYWxpemUgPSB7fTtcbiAgfVxufSkod2luZG93KTtcblxuXG4vKlxuICogcmFmLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmdyeW1hbi9yYWYuanNcbiAqXG4gKiBvcmlnaW5hbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyXG4gKiBpbnNwaXJlZCBmcm9tIHBhdWxfaXJpc2ggZ2lzdCBhbmQgcG9zdFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMyBuZ3J5bWFuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIGxhc3RUaW1lID0gMCxcbiAgICB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J10sXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSxcbiAgICBpID0gdmVuZG9ycy5sZW5ndGg7XG5cbiAgLy8gdHJ5IHRvIHVuLXByZWZpeCBleGlzdGluZyByYWZcbiAgd2hpbGUgKC0taSA+PSAwICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICB9XG5cbiAgLy8gcG9seWZpbGwgd2l0aCBzZXRUaW1lb3V0IGZhbGxiYWNrXG4gIC8vIGhlYXZpbHkgaW5zcGlyZWQgZnJvbSBAZGFyaXVzIGdpc3QgbW9kOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSNjb21tZW50LTgzNzk0NVxuICBpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgdmFyIG5vdyA9ICtEYXRlLm5vdygpLFxuICAgICAgICBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XG4gICAgICB9LCBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICB9XG5cbiAgLy8gZXhwb3J0IHRvIHdpbmRvd1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcbn0od2luZG93KSk7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhcHByb3hpbWF0ZWQgc2VsZWN0b3Igc3RyaW5nIGZvciBhIGpRdWVyeSBvYmplY3RcbiAqIEBwYXJhbSB7alF1ZXJ5fSBvYmogIGpRdWVyeSBvYmplY3QgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5NYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgdGFnU3RyID0gb2JqLnByb3AoJ3RhZ05hbWUnKSB8fCAnJztcbiAgdmFyIGlkU3RyID0gb2JqLmF0dHIoJ2lkJykgfHwgJyc7XG4gIHZhciBjbGFzc1N0ciA9IG9iai5hdHRyKCdjbGFzcycpIHx8ICcnO1xuICByZXR1cm4gKHRhZ1N0ciArIGlkU3RyICsgY2xhc3NTdHIpLnJlcGxhY2UoL1xccy9nLCcnKTtcbn07XG5cblxuLy8gVW5pcXVlIFJhbmRvbSBJRFxuTWF0ZXJpYWxpemUuZ3VpZCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gczQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3Vic3RyaW5nKDEpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG4gICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG4gIH07XG59KSgpO1xuXG4vKipcbiAqIEVzY2FwZXMgaGFzaCBmcm9tIHNwZWNpYWwgY2hhcmFjdGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggIFN0cmluZyByZXR1cm5lZCBmcm9tIHRoaXMuaGFzaFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCA9IGZ1bmN0aW9uKGhhc2gpIHtcbiAgcmV0dXJuIGhhc2gucmVwbGFjZSggLyg6fFxcLnxcXFt8XFxdfCx8PSkvZywgXCJcXFxcJDFcIiApO1xufTtcblxuTWF0ZXJpYWxpemUuZWxlbWVudE9yUGFyZW50SXNGaXhlZCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHZhciAkY2hlY2tFbGVtZW50cyA9ICRlbGVtZW50LmFkZCgkZWxlbWVudC5wYXJlbnRzKCkpO1xuICAgIHZhciBpc0ZpeGVkID0gZmFsc2U7XG4gICAgJGNoZWNrRWxlbWVudHMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICBpc0ZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpc0ZpeGVkO1xufTtcblxuXG4vKipcbiAqIEdldCB0aW1lIGluIG1zXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBnZXRUaW1lID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufSk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAqIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICogYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICogYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAqIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtudW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5NYXRlcmlhbGl6ZS50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IGdldFRpbWUoKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm93ID0gZ2V0VGltZSgpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLy8gVmVsb2NpdHkgaGFzIGNvbmZsaWN0cyB3aGVuIGxvYWRlZCB3aXRoIGpRdWVyeSwgdGhpcyB3aWxsIGNoZWNrIGZvciBpdFxuLy8gRmlyc3QsIGNoZWNrIGlmIGluIG5vQ29uZmxpY3QgbW9kZVxudmFyIFZlbDtcbmlmIChqUXVlcnkpIHtcbiAgVmVsID0galF1ZXJ5LlZlbG9jaXR5O1xufSBlbHNlIGlmICgkKSB7XG4gIFZlbCA9ICQuVmVsb2NpdHk7XG59IGVsc2Uge1xuICBWZWwgPSBWZWxvY2l0eTtcbn1cbjsoZnVuY3Rpb24gKCQpIHtcbiAgJC5mbi5jb2xsYXBzaWJsZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIG1ldGhvZFBhcmFtKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgYWNjb3JkaW9uOiB1bmRlZmluZWQsXG4gICAgICBvbk9wZW46IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xvc2U6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICB2YXIgbWV0aG9kTmFtZSA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgdmFyICRwYW5lbF9oZWFkZXJzID0gJCh0aGlzKS5maW5kKCc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuXG4gICAgICB2YXIgY29sbGFwc2libGVfdHlwZSA9ICR0aGlzLmRhdGEoXCJjb2xsYXBzaWJsZVwiKTtcblxuICAgICAgLyoqKioqKioqKioqKioqKipcbiAgICAgIEhlbHBlciBGdW5jdGlvbnNcbiAgICAgICoqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8vIEFjY29yZGlvbiBPcGVuXG4gICAgICBmdW5jdGlvbiBhY2NvcmRpb25PcGVuKG9iamVjdCkge1xuICAgICAgICAkcGFuZWxfaGVhZGVycyA9ICR0aGlzLmZpbmQoJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmplY3QucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZURvd24oeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuc2xpZGVVcCh7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcGFuZWxfaGVhZGVycy5ub3Qob2JqZWN0KS5yZW1vdmVDbGFzcygnYWN0aXZlJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIENsb3NlIHByZXZpb3VzbHkgb3BlbiBhY2NvcmRpb24gZWxlbWVudHMuXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLm5vdChvYmplY3QpLnBhcmVudCgpLmNoaWxkcmVuKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zbGlkZVVwKHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDM1MCxcbiAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOlxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAgICAgICAgICAgICAgIGV4ZWNDYWxsYmFja3MoJCh0aGlzKS5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWhlYWRlcicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFeHBhbmRhYmxlIE9wZW5cbiAgICAgIGZ1bmN0aW9uIGV4cGFuZGFibGVPcGVuKG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqZWN0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuc2xpZGVEb3duKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbigpIHskKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO319KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZVVwKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbigpIHskKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO319KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPcGVuIGNvbGxhcHNpYmxlLiBvYmplY3Q6IC5jb2xsYXBzaWJsZS1oZWFkZXJcbiAgICAgIGZ1bmN0aW9uIGNvbGxhcHNpYmxlT3BlbihvYmplY3QsIG5vVG9nZ2xlKSB7XG4gICAgICAgIGlmICghbm9Ub2dnbGUpIHtcbiAgICAgICAgICBvYmplY3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYWNjb3JkaW9uIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IFwiYWNjb3JkaW9uXCIgfHwgY29sbGFwc2libGVfdHlwZSA9PT0gdW5kZWZpbmVkKSB7IC8vIEhhbmRsZSBBY2NvcmRpb25cbiAgICAgICAgICBhY2NvcmRpb25PcGVuKG9iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIEhhbmRsZSBFeHBhbmRhYmxlc1xuICAgICAgICAgIGV4cGFuZGFibGVPcGVuKG9iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBleGVjQ2FsbGJhY2tzKG9iamVjdCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSBjYWxsYmFja3NcbiAgICAgIGZ1bmN0aW9uIGV4ZWNDYWxsYmFja3Mob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uT3BlbikgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3B0aW9ucy5vbk9wZW4uY2FsbCh0aGlzLCBvYmplY3QucGFyZW50KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25DbG9zZSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcywgb2JqZWN0LnBhcmVudCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBpZiBvYmplY3QgaXMgY2hpbGRyZW4gb2YgcGFuZWwgaGVhZGVyXG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgSnF1ZXJ5IG9iamVjdFxuICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBpdCBpcyBjaGlsZHJlblxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBpc0NoaWxkcmVuT2ZQYW5lbEhlYWRlcihvYmplY3QpIHtcblxuICAgICAgICB2YXIgcGFuZWxIZWFkZXIgPSBnZXRQYW5lbEhlYWRlcihvYmplY3QpO1xuXG4gICAgICAgIHJldHVybiBwYW5lbEhlYWRlci5sZW5ndGggPiAwO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBwYW5lbCBoZWFkZXIgZnJvbSBhIGNoaWxkcmVuIGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0IEpxdWVyeSBvYmplY3RcbiAgICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFuZWwgaGVhZGVyIG9iamVjdFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBnZXRQYW5lbEhlYWRlcihvYmplY3QpIHtcblxuICAgICAgICByZXR1cm4gb2JqZWN0LmNsb3Nlc3QoJ2xpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIFR1cm4gb2ZmIGFueSBleGlzdGluZyBldmVudCBoYW5kbGVyc1xuICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgJHRoaXMub2ZmKCdjbGljay5jb2xsYXBzZScsICc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuICAgICAgfVxuXG4gICAgICAvKioqKiogIEVuZCBIZWxwZXIgRnVuY3Rpb25zICAqKioqKi9cblxuXG4gICAgICAvLyBNZXRob2RzXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChtZXRob2RQYXJhbSA+PSAwICYmXG4gICAgICAgICAgbWV0aG9kUGFyYW0gPCAkcGFuZWxfaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyICRjdXJyX2hlYWRlciA9ICRwYW5lbF9oZWFkZXJzLmVxKG1ldGhvZFBhcmFtKTtcbiAgICAgICAgaWYgKCRjdXJyX2hlYWRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIChtZXRob2ROYW1lID09PSAnb3BlbicgfHxcbiAgICAgICAgICAgIChtZXRob2ROYW1lID09PSAnY2xvc2UnICYmXG4gICAgICAgICAgICAkY3Vycl9oZWFkZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkpIHtcbiAgICAgICAgICBjb2xsYXBzaWJsZU9wZW4oJGN1cnJfaGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cblxuICAgICAgcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuXG5cbiAgICAgIC8vIEFkZCBjbGljayBoYW5kbGVyIHRvIG9ubHkgZGlyZWN0IGNvbGxhcHNpYmxlIGhlYWRlciBjaGlsZHJlblxuICAgICAgJHRoaXMub24oJ2NsaWNrLmNvbGxhcHNlJywgJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQoZS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChpc0NoaWxkcmVuT2ZQYW5lbEhlYWRlcihlbGVtZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQgPSBnZXRQYW5lbEhlYWRlcihlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxhcHNpYmxlT3BlbihlbGVtZW50KTtcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIE9wZW4gZmlyc3QgYWN0aXZlXG4gICAgICBpZiAob3B0aW9ucy5hY2NvcmRpb24gfHwgY29sbGFwc2libGVfdHlwZSA9PT0gXCJhY2NvcmRpb25cIiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSB1bmRlZmluZWQpIHsgLy8gSGFuZGxlIEFjY29yZGlvblxuICAgICAgICBjb2xsYXBzaWJsZU9wZW4oJHBhbmVsX2hlYWRlcnMuZmlsdGVyKCcuYWN0aXZlJykuZmlyc3QoKSwgdHJ1ZSk7XG5cbiAgICAgIH0gZWxzZSB7IC8vIEhhbmRsZSBFeHBhbmRhYmxlc1xuICAgICAgICAkcGFuZWxfaGVhZGVycy5maWx0ZXIoJy5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbGxhcHNpYmxlT3BlbigkKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5jb2xsYXBzaWJsZScpLmNvbGxhcHNpYmxlKCk7XG4gIH0pO1xufSggalF1ZXJ5ICkpOzsoZnVuY3Rpb24gKCQpIHtcblxuICAvLyBBZGQgcG9zaWJpbGl0eSB0byBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXG4gIC8vIHVzZWZ1bGwgZm9yIHNlbGVjdCBmb3IgZXhhbXBsZVxuICAkLmZuLnNjcm9sbFRvID0gZnVuY3Rpb24oZWxlbSkge1xuICAgICQodGhpcykuc2Nyb2xsVG9wKCQodGhpcykuc2Nyb2xsVG9wKCkgLSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQoZWxlbSkub2Zmc2V0KCkudG9wKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAkLmZuLmRyb3Bkb3duID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBpbkR1cmF0aW9uOiAzMDAsXG4gICAgICBvdXREdXJhdGlvbjogMjI1LFxuICAgICAgY29uc3RyYWluV2lkdGg6IHRydWUsIC8vIENvbnN0cmFpbnMgd2lkdGggb2YgZHJvcGRvd24gdG8gdGhlIGFjdGl2YXRvclxuICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgZ3V0dGVyOiAwLCAvLyBTcGFjaW5nIGZyb20gZWRnZVxuICAgICAgYmVsb3dPcmlnaW46IGZhbHNlLFxuICAgICAgYWxpZ25tZW50OiAnbGVmdCcsXG4gICAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIE9wZW4gZHJvcGRvd24uXG4gICAgaWYgKG9wdGlvbnMgPT09IFwib3BlblwiKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignb3BlbicpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2xvc2UgZHJvcGRvd24uXG4gICAgaWYgKG9wdGlvbnMgPT09IFwiY2xvc2VcIikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xuICAgICAgdmFyIGN1cnJfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgIC8vIERyb3Bkb3duIG1lbnVcbiAgICAgIHZhciBhY3RpdmF0ZXMgPSAkKFwiI1wiKyBvcmlnaW4uYXR0cignZGF0YS1hY3RpdmF0ZXMnKSk7XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMoKSB7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnaW5kdXJhdGlvbicpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmluRHVyYXRpb24gPSBvcmlnaW4uZGF0YSgnaW5kdXJhdGlvbicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ291dGR1cmF0aW9uJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMub3V0RHVyYXRpb24gPSBvcmlnaW4uZGF0YSgnb3V0ZHVyYXRpb24nKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdjb25zdHJhaW53aWR0aCcpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmNvbnN0cmFpbldpZHRoID0gb3JpZ2luLmRhdGEoJ2NvbnN0cmFpbndpZHRoJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnaG92ZXInKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5ob3ZlciA9IG9yaWdpbi5kYXRhKCdob3ZlcicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2d1dHRlcicpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmd1dHRlciA9IG9yaWdpbi5kYXRhKCdndXR0ZXInKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdiZWxvd29yaWdpbicpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmJlbG93T3JpZ2luID0gb3JpZ2luLmRhdGEoJ2JlbG93b3JpZ2luJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnYWxpZ25tZW50JykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuYWxpZ25tZW50ID0gb3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ3N0b3Bwcm9wYWdhdGlvbicpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLnN0b3BQcm9wYWdhdGlvbiA9IG9yaWdpbi5kYXRhKCdzdG9wcHJvcGFnYXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlT3B0aW9ucygpO1xuXG4gICAgICAvLyBBdHRhY2ggZHJvcGRvd24gdG8gaXRzIGFjdGl2YXRvclxuICAgICAgb3JpZ2luLmFmdGVyKGFjdGl2YXRlcyk7XG5cbiAgICAgIC8qXG4gICAgICAgIEhlbHBlciBmdW5jdGlvbiB0byBwb3NpdGlvbiBhbmQgcmVzaXplIGRyb3Bkb3duLlxuICAgICAgICBVc2VkIGluIGhvdmVyIGFuZCBjbGljayBoYW5kbGVyLlxuICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHBsYWNlRHJvcGRvd24oZXZlbnRUeXBlKSB7XG4gICAgICAgIC8vIENoZWNrIGZvciBzaW11bHRhbmVvdXMgZm9jdXMgYW5kIGNsaWNrIGV2ZW50cy5cbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgIGlzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBodG1sIGRhdGEgYXR0cmlidXRlc1xuICAgICAgICB1cGRhdGVPcHRpb25zKCk7XG5cbiAgICAgICAgLy8gU2V0IERyb3Bkb3duIHN0YXRlXG4gICAgICAgIGFjdGl2YXRlcy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIG9yaWdpbi5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgLy8gQ29uc3RyYWluIHdpZHRoXG4gICAgICAgIGlmIChjdXJyX29wdGlvbnMuY29uc3RyYWluV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICBhY3RpdmF0ZXMuY3NzKCd3aWR0aCcsIG9yaWdpbi5vdXRlcldpZHRoKCkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZhdGVzLmNzcygnd2hpdGUtc3BhY2UnLCAnbm93cmFwJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPZmZzY3JlZW4gZGV0ZWN0aW9uXG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBvcmlnaW5IZWlnaHQgPSBvcmlnaW4uaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgdmFyIG9mZnNldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciBjdXJyQWxpZ25tZW50ID0gY3Vycl9vcHRpb25zLmFsaWdubWVudDtcbiAgICAgICAgdmFyIGd1dHRlclNwYWNpbmcgPSAwO1xuICAgICAgICB2YXIgbGVmdFBvc2l0aW9uID0gMDtcblxuICAgICAgICAvLyBCZWxvdyBPcmlnaW5cbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5iZWxvd09yaWdpbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gb3JpZ2luSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNjcm9sbGluZyBwb3NpdGlvbmVkIGNvbnRhaW5lci5cbiAgICAgICAgdmFyIHNjcm9sbFlPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgc2Nyb2xsWE9mZnNldCA9IDA7XG4gICAgICAgIHZhciB3cmFwcGVyID0gb3JpZ2luLnBhcmVudCgpO1xuICAgICAgICBpZiAoIXdyYXBwZXIuaXMoJ2JvZHknKSkge1xuICAgICAgICAgIGlmICh3cmFwcGVyWzBdLnNjcm9sbEhlaWdodCA+IHdyYXBwZXJbMF0uY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICBzY3JvbGxZT2Zmc2V0ID0gd3JhcHBlclswXS5zY3JvbGxUb3A7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3cmFwcGVyWzBdLnNjcm9sbFdpZHRoID4gd3JhcHBlclswXS5jbGllbnRXaWR0aCkge1xuICAgICAgICAgICAgc2Nyb2xsWE9mZnNldCA9IHdyYXBwZXJbMF0uc2Nyb2xsTGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChvZmZzZXRMZWZ0ICsgYWN0aXZhdGVzLmlubmVyV2lkdGgoKSA+ICQod2luZG93KS53aWR0aCgpKSB7XG4gICAgICAgICAgLy8gRHJvcGRvd24gZ29lcyBwYXN0IHNjcmVlbiBvbiByaWdodCwgZm9yY2UgcmlnaHQgYWxpZ25tZW50XG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdyaWdodCc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRMZWZ0IC0gYWN0aXZhdGVzLmlubmVyV2lkdGgoKSArIG9yaWdpbi5pbm5lcldpZHRoKCkgPCAwKSB7XG4gICAgICAgICAgLy8gRHJvcGRvd24gZ29lcyBwYXN0IHNjcmVlbiBvbiBsZWZ0LCBmb3JjZSBsZWZ0IGFsaWdubWVudFxuICAgICAgICAgIGN1cnJBbGlnbm1lbnQgPSAnbGVmdCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVmVydGljYWwgYm90dG9tIG9mZnNjcmVlbiBkZXRlY3Rpb25cbiAgICAgICAgaWYgKG9mZnNldFRvcCArIGFjdGl2YXRlcy5pbm5lckhlaWdodCgpID4gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgLy8gSWYgZ29pbmcgdXB3YXJkcyBzdGlsbCBnb2VzIG9mZnNjcmVlbiwganVzdCBjcm9wIGhlaWdodCBvZiBkcm9wZG93bi5cbiAgICAgICAgICBpZiAob2Zmc2V0VG9wICsgb3JpZ2luSGVpZ2h0IC0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPCAwKSB7XG4gICAgICAgICAgICB2YXIgYWRqdXN0ZWRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBvZmZzZXRUb3AgLSB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ21heC1oZWlnaHQnLCBhZGp1c3RlZEhlaWdodCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZsb3cgdXB3YXJkcy5cbiAgICAgICAgICAgIGlmICghdmVydGljYWxPZmZzZXQpIHtcbiAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgKz0gb3JpZ2luSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgLT0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGVkZ2UgYWxpZ25tZW50XG4gICAgICAgIGlmIChjdXJyQWxpZ25tZW50ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBndXR0ZXJTcGFjaW5nID0gY3Vycl9vcHRpb25zLmd1dHRlcjtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgZ3V0dGVyU3BhY2luZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyQWxpZ25tZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgdmFyIG9mZnNldFJpZ2h0ID0gb3JpZ2luLnBvc2l0aW9uKCkubGVmdCArIG9yaWdpbi5vdXRlcldpZHRoKCkgLSBhY3RpdmF0ZXMub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgIGd1dHRlclNwYWNpbmcgPSAtY3Vycl9vcHRpb25zLmd1dHRlcjtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSAgb2Zmc2V0UmlnaHQgKyBndXR0ZXJTcGFjaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9zaXRpb24gZHJvcGRvd25cbiAgICAgICAgYWN0aXZhdGVzLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiBvcmlnaW4ucG9zaXRpb24oKS50b3AgKyB2ZXJ0aWNhbE9mZnNldCArIHNjcm9sbFlPZmZzZXQsXG4gICAgICAgICAgbGVmdDogbGVmdFBvc2l0aW9uICsgc2Nyb2xsWE9mZnNldFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIFNob3cgZHJvcGRvd25cbiAgICAgICAgYWN0aXZhdGVzLnN0b3AodHJ1ZSwgdHJ1ZSkuY3NzKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAuc2xpZGVEb3duKHtcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYW5pbWF0ZSgge29wYWNpdHk6IDF9LCB7cXVldWU6IGZhbHNlLCBkdXJhdGlvbjogY3Vycl9vcHRpb25zLmluRHVyYXRpb24sIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ30pO1xuXG4gICAgICAgIC8vIEFkZCBjbGljayBjbG9zZSBoYW5kbGVyIHRvIGRvY3VtZW50XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJChkb2N1bWVudCkuYmluZCgnY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJyksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGlkZURyb3Bkb3duKCkge1xuICAgICAgICAvLyBDaGVjayBmb3Igc2ltdWx0YW5lb3VzIGZvY3VzIGFuZCBjbGljayBldmVudHMuXG4gICAgICAgIGlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICBhY3RpdmF0ZXMuZmFkZU91dChjdXJyX29wdGlvbnMub3V0RHVyYXRpb24pO1xuICAgICAgICBhY3RpdmF0ZXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBvcmlnaW4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgYWN0aXZhdGVzLmNzcygnbWF4LWhlaWdodCcsICcnKTsgfSwgY3Vycl9vcHRpb25zLm91dER1cmF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gSG92ZXJcbiAgICAgIGlmIChjdXJyX29wdGlvbnMuaG92ZXIpIHtcbiAgICAgICAgdmFyIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgb3JpZ2luLnVuYmluZCgnY2xpY2suJyArIG9yaWdpbi5hdHRyKCdpZCcpKTtcbiAgICAgICAgLy8gSG92ZXIgaGFuZGxlciB0byBzaG93IGRyb3Bkb3duXG4gICAgICAgIG9yaWdpbi5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpeyAvLyBNb3VzZSBvdmVyXG4gICAgICAgICAgaWYgKG9wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwbGFjZURyb3Bkb3duKCk7XG4gICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvcmlnaW4ub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAvLyBJZiBob3ZlciBvbiBvcmlnaW4gdGhlbiB0byBzb21ldGhpbmcgb3RoZXIgdGhhbiBkcm9wZG93biBjb250ZW50LCB0aGVuIGNsb3NlXG4gICAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7IC8vIGFkZGVkIGJyb3dzZXIgY29tcGF0aWJpbGl0eSBmb3IgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICBpZighJCh0b0VsKS5jbG9zZXN0KCcuZHJvcGRvd24tY29udGVudCcpLmlzKGFjdGl2YXRlcykpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlcy5zdG9wKHRydWUsIHRydWUpO1xuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhY3RpdmF0ZXMub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXsgLy8gTW91c2Ugb3V0XG4gICAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgICAgaWYoISQodG9FbCkuY2xvc2VzdCgnLmRyb3Bkb3duLWJ1dHRvbicpLmlzKG9yaWdpbikpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlcy5zdG9wKHRydWUsIHRydWUpO1xuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDbGlja1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2xpY2sgaGFuZGxlciB0byBzaG93IGRyb3Bkb3duXG4gICAgICAgIG9yaWdpbi51bmJpbmQoJ2NsaWNrLicgKyBvcmlnaW4uYXR0cignaWQnKSk7XG4gICAgICAgIG9yaWdpbi5iaW5kKCdjbGljay4nK29yaWdpbi5hdHRyKCdpZCcpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICBpZiAoIWlzRm9jdXNlZCkge1xuICAgICAgICAgICAgaWYgKCBvcmlnaW5bMF0gPT0gZS5jdXJyZW50VGFyZ2V0ICYmXG4gICAgICAgICAgICAgICAgICFvcmlnaW4uaGFzQ2xhc3MoJ2FjdGl2ZScpICYmXG4gICAgICAgICAgICAgICAgICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tY29udGVudCcpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50cyBidXR0b24gY2xpY2sgZnJvbSBtb3Zpbmcgd2luZG93XG4gICAgICAgICAgICAgIGlmIChjdXJyX29wdGlvbnMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwbGFjZURyb3Bkb3duKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgb3JpZ2luIGlzIGNsaWNrZWQgYW5kIG1lbnUgaXMgb3BlbiwgY2xvc2UgbWVudVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZ2luLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdjbGljay4nKyBhY3RpdmF0ZXMuYXR0cignaWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfSAvLyBFbmQgZWxzZVxuXG4gICAgICAvLyBMaXN0ZW4gdG8gb3BlbiBhbmQgY2xvc2UgZXZlbnQgLSB1c2VmdWwgZm9yIHNlbGVjdCBjb21wb25lbnRcbiAgICAgIG9yaWdpbi5vbignb3BlbicsIGZ1bmN0aW9uKGUsIGV2ZW50VHlwZSkge1xuICAgICAgICBwbGFjZURyb3Bkb3duKGV2ZW50VHlwZSk7XG4gICAgICB9KTtcbiAgICAgIG9yaWdpbi5vbignY2xvc2UnLCBoaWRlRHJvcGRvd24pO1xuXG5cbiAgICB9KTtcbiAgfTsgLy8gRW5kIGRyb3Bkb3duIHBsdWdpblxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmRyb3Bkb3duLWJ1dHRvbicpLmRyb3Bkb3duKCk7XG4gIH0pO1xufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbigkKSB7XG4gIHZhciBfc3RhY2sgPSAwLFxuICBfbGFzdElEID0gMCxcbiAgX2dlbmVyYXRlSUQgPSBmdW5jdGlvbigpIHtcbiAgICBfbGFzdElEKys7XG4gICAgcmV0dXJuICdtYXRlcmlhbGl6ZS1tb2RhbC1vdmVybGF5LScgKyBfbGFzdElEO1xuICB9O1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIGluaXQgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgaW5EdXJhdGlvbjogMzUwLFxuICAgICAgICBvdXREdXJhdGlvbjogMjUwLFxuICAgICAgICByZWFkeTogdW5kZWZpbmVkLFxuICAgICAgICBjb21wbGV0ZTogdW5kZWZpbmVkLFxuICAgICAgICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgICAgICAgc3RhcnRpbmdUb3A6ICc0JScsXG4gICAgICAgIGVuZGluZ1RvcDogJzEwJSdcbiAgICAgIH07XG5cbiAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHRzXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJG1vZGFsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG1vZGFsX2lkID0gJCh0aGlzKS5hdHRyKFwiaWRcIikgfHwgJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcblxuICAgICAgICB2YXIgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBvdmVybGF5SUQgPSAkbW9kYWwuZGF0YSgnb3ZlcmxheS1pZCcpO1xuICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJyMnICsgb3ZlcmxheUlEKTtcbiAgICAgICAgICAkbW9kYWwucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgIC8vIEVuYWJsZSBzY3JvbGxpbmdcbiAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJG1vZGFsLmZpbmQoJy5tb2RhbC1jbG9zZScpLm9mZignY2xpY2suY2xvc2UnKTtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwLm1vZGFsJyArIG92ZXJsYXlJRCk7XG5cbiAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSggeyBvcGFjaXR5OiAwfSwge2R1cmF0aW9uOiBvcHRpb25zLm91dER1cmF0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2U6IFwiZWFzZU91dFF1YXJ0XCJ9KTtcblxuXG4gICAgICAgICAgLy8gRGVmaW5lIEJvdHRvbSBTaGVldCBhbmltYXRpb25cbiAgICAgICAgICB2YXIgZXhpdFZlbG9jaXR5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIixcbiAgICAgICAgICAgIC8vIEhhbmRsZSBtb2RhbCByZWFkeSBjYWxsYmFja1xuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7ZGlzcGxheTpcIm5vbmVcIn0pO1xuXG4gICAgICAgICAgICAgIC8vIENhbGwgY29tcGxldGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLmNvbXBsZXRlKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jb21wbGV0ZS5jYWxsKHRoaXMsICRtb2RhbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIF9zdGFjay0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKCRtb2RhbC5oYXNDbGFzcygnYm90dG9tLXNoZWV0JykpIHtcbiAgICAgICAgICAgICRtb2RhbC52ZWxvY2l0eSh7Ym90dG9tOiBcIi0xMDAlXCIsIG9wYWNpdHk6IDB9LCBleGl0VmVsb2NpdHlPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoXG4gICAgICAgICAgICAgIHsgdG9wOiBvcHRpb25zLnN0YXJ0aW5nVG9wLCBvcGFjaXR5OiAwLCBzY2FsZVg6IDAuN30sXG4gICAgICAgICAgICAgIGV4aXRWZWxvY2l0eU9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvcGVuTW9kYWwgPSBmdW5jdGlvbigkdHJpZ2dlcikge1xuICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICB2YXIgb2xkV2lkdGggPSAkYm9keS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAkYm9keS53aWR0aChvbGRXaWR0aCk7XG5cbiAgICAgICAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgb3ZlcmxheUlEID0gX2dlbmVyYXRlSUQoKTtcbiAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICAgIGxTdGFjayA9ICgrK19zdGFjayk7XG5cbiAgICAgICAgICAvLyBTdG9yZSBhIHJlZmVyZW5jZSBvZiB0aGUgb3ZlcmxheVxuICAgICAgICAgICRvdmVybGF5LmF0dHIoJ2lkJywgb3ZlcmxheUlEKS5jc3MoJ3otaW5kZXgnLCAxMDAwICsgbFN0YWNrICogMik7XG4gICAgICAgICAgJG1vZGFsLmRhdGEoJ292ZXJsYXktaWQnLCBvdmVybGF5SUQpLmNzcygnei1pbmRleCcsIDEwMDAgKyBsU3RhY2sgKiAyICsgMSk7XG4gICAgICAgICAgJG1vZGFsLmFkZENsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoJG92ZXJsYXkpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZGlzbWlzc2libGUpIHtcbiAgICAgICAgICAgICRvdmVybGF5LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFJldHVybiBvbiBFU0NcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cC5tb2RhbCcgKyBvdmVybGF5SUQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgICAvLyBFU0Mga2V5XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkbW9kYWwuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vbignY2xpY2suY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkb3ZlcmxheS5jc3MoeyBkaXNwbGF5IDogXCJibG9ja1wiLCBvcGFjaXR5IDogMCB9KTtcblxuICAgICAgICAgICRtb2RhbC5jc3Moe1xuICAgICAgICAgICAgZGlzcGxheSA6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiBvcHRpb25zLm9wYWNpdHl9LCB7ZHVyYXRpb246IG9wdGlvbnMuaW5EdXJhdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNlOiBcImVhc2VPdXRDdWJpY1wifSk7XG4gICAgICAgICAgJG1vZGFsLmRhdGEoJ2Fzc29jaWF0ZWQtb3ZlcmxheScsICRvdmVybGF5WzBdKTtcblxuICAgICAgICAgIC8vIERlZmluZSBCb3R0b20gU2hlZXQgYW5pbWF0aW9uXG4gICAgICAgICAgdmFyIGVudGVyVmVsb2NpdHlPcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZU91dEN1YmljXCIsXG4gICAgICAgICAgICAvLyBIYW5kbGUgbW9kYWwgcmVhZHkgY2FsbGJhY2tcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLnJlYWR5KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5yZWFkeS5jYWxsKHRoaXMsICRtb2RhbCwgJHRyaWdnZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKCdib3R0b20tc2hlZXQnKSkge1xuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KHtib3R0b206IFwiMFwiLCBvcGFjaXR5OiAxfSwgZW50ZXJWZWxvY2l0eU9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICQuVmVsb2NpdHkuaG9vaygkbW9kYWwsIFwic2NhbGVYXCIsIDAuNyk7XG4gICAgICAgICAgICAkbW9kYWwuY3NzKHsgdG9wOiBvcHRpb25zLnN0YXJ0aW5nVG9wIH0pO1xuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KHt0b3A6IG9wdGlvbnMuZW5kaW5nVG9wLCBvcGFjaXR5OiAxLCBzY2FsZVg6ICcxJ30sIGVudGVyVmVsb2NpdHlPcHRpb25zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZXNldCBoYW5kbGVyc1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLm1vZGFsVHJpZ2dlcicsICdhW2hyZWY9XCIjJyArIG1vZGFsX2lkICsgJ1wiXSwgW2RhdGEtdGFyZ2V0PVwiJyArIG1vZGFsX2lkICsgJ1wiXScpO1xuICAgICAgICAkKHRoaXMpLm9mZignb3Blbk1vZGFsJyk7XG4gICAgICAgICQodGhpcykub2ZmKCdjbG9zZU1vZGFsJyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgSGFuZGxlcnNcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm1vZGFsVHJpZ2dlcicsICdhW2hyZWY9XCIjJyArIG1vZGFsX2lkICsgJ1wiXSwgW2RhdGEtdGFyZ2V0PVwiJyArIG1vZGFsX2lkICsgJ1wiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBvcHRpb25zLnN0YXJ0aW5nVG9wID0gKCQodGhpcykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSAvMS4xNTtcbiAgICAgICAgICBvcGVuTW9kYWwoJCh0aGlzKSk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTsgLy8gZG9uZSBzZXQgb24gY2xpY2tcblxuICAgICAgICAkKHRoaXMpLm9uKCdvcGVuTW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgbW9kYWxfaWQgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpIHx8ICcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQodGhpcykub24oJ2Nsb3NlTW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIGRvbmUgcmV0dXJuXG4gICAgfSxcbiAgICBvcGVuIDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ29wZW5Nb2RhbCcpO1xuICAgIH0sXG4gICAgY2xvc2UgOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VNb2RhbCcpO1xuICAgIH1cbiAgfTtcblxuICAkLmZuLm1vZGFsID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5Lm1vZGFsJyApO1xuICAgIH1cbiAgfTtcbn0pKGpRdWVyeSk7XG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgJC5mbi5tYXRlcmlhbGJveCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpbml0aWFsaXplZCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5pdGlhbGl6ZWQnKTtcblxuICAgICAgdmFyIG92ZXJsYXlBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHZhciBkb25lQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpbkR1cmF0aW9uID0gMjc1O1xuICAgICAgdmFyIG91dER1cmF0aW9uID0gMjAwO1xuICAgICAgdmFyIG9yaWdpbiA9ICQodGhpcyk7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSAkKCc8ZGl2PjwvZGl2PicpLmFkZENsYXNzKCdtYXRlcmlhbC1wbGFjZWhvbGRlcicpO1xuICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSAwO1xuICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gMDtcbiAgICAgIHZhciBhbmNlc3RvcnNDaGFuZ2VkO1xuICAgICAgdmFyIGFuY2VzdG9yO1xuICAgICAgdmFyIG9yaWdpbklubGluZVN0eWxlcyA9IG9yaWdpbi5hdHRyKCdzdHlsZScpO1xuICAgICAgb3JpZ2luLndyYXAocGxhY2Vob2xkZXIpO1xuXG5cbiAgICAgIG9yaWdpbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gb3JpZ2luLndpZHRoKCk7XG4gICAgICAgIHZhciBvcmlnaW5hbEhlaWdodCA9IG9yaWdpbi5oZWlnaHQoKTtcblxuXG4gICAgICAgIC8vIElmIGFscmVhZHkgbW9kYWwsIHJldHVybiB0byBvcmlnaW5hbFxuICAgICAgICBpZiAoZG9uZUFuaW1hdGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG92ZXJsYXlBY3RpdmUgJiYgZG9uZUFuaW1hdGluZz09PXRydWUpIHtcbiAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBTZXQgc3RhdGVzXG4gICAgICAgIGRvbmVBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgb3JpZ2luLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheUFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gU2V0IHBvc2l0aW9uaW5nIGZvciBwbGFjZWhvbGRlclxuICAgICAgICBwbGFjZWhvbGRlci5jc3Moe1xuICAgICAgICAgIHdpZHRoOiBwbGFjZWhvbGRlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYWNlaG9sZGVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFuY2VzdG9yIHdpdGggb3ZlcmZsb3c6IGhpZGRlbjsgYW5kIHJlbW92ZSBpdFxuICAgICAgICBhbmNlc3RvcnNDaGFuZ2VkID0gdW5kZWZpbmVkO1xuICAgICAgICBhbmNlc3RvciA9IHBsYWNlaG9sZGVyWzBdLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIHdoaWxlIChhbmNlc3RvciAhPT0gbnVsbCAmJiAhJChhbmNlc3RvcikuaXMoZG9jdW1lbnQpKSB7XG4gICAgICAgICAgdmFyIGN1cnIgPSAkKGFuY2VzdG9yKTtcbiAgICAgICAgICBpZiAoY3Vyci5jc3MoJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgY3Vyci5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIGlmIChhbmNlc3RvcnNDaGFuZ2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgYW5jZXN0b3JzQ2hhbmdlZCA9IGN1cnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgYW5jZXN0b3JzQ2hhbmdlZCA9IGFuY2VzdG9yc0NoYW5nZWQuYWRkKGN1cnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgY3NzIG9uIG9yaWdpblxuICAgICAgICBvcmlnaW4uY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAnei1pbmRleCc6IDEwMDAsXG4gICAgICAgICAgJ3dpbGwtY2hhbmdlJzogJ2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCdcbiAgICAgICAgfSlcbiAgICAgICAgLmRhdGEoJ3dpZHRoJywgb3JpZ2luYWxXaWR0aClcbiAgICAgICAgLmRhdGEoJ2hlaWdodCcsIG9yaWdpbmFsSGVpZ2h0KTtcblxuICAgICAgICAvLyBBZGQgb3ZlcmxheVxuICAgICAgICB2YXIgb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJtYXRlcmlhbGJveC1vdmVybGF5XCI+PC9kaXY+JylcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvbmVBbmltYXRpbmcgPT09IHRydWUpXG4gICAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHV0IGJlZm9yZSBpbiBvcmlnaW4gaW1hZ2UgdG8gcHJlc2VydmUgei1pbmRleCBsYXllcmluZy5cbiAgICAgICAgb3JpZ2luLmJlZm9yZShvdmVybGF5KTtcblxuICAgICAgICAvLyBTZXQgZGltZW5zaW9ucyBpZiBuZWVkZWRcbiAgICAgICAgdmFyIG92ZXJsYXlPZmZzZXQgPSBvdmVybGF5WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBvdmVybGF5LmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHdpbmRvd1dpZHRoLFxuICAgICAgICAgIGhlaWdodDogd2luZG93SGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IC0xICogb3ZlcmxheU9mZnNldC5sZWZ0LFxuICAgICAgICAgIHRvcDogLTEgKiBvdmVybGF5T2Zmc2V0LnRvcFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEFuaW1hdGUgT3ZlcmxheVxuICAgICAgICBvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkdXJhdGlvbjogaW5EdXJhdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9ICk7XG5cbiAgICAgICAgLy8gQWRkIGFuZCBhbmltYXRlIGNhcHRpb24gaWYgaXQgZXhpc3RzXG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnY2FwdGlvbicpICE9PSBcIlwiKSB7XG4gICAgICAgICAgdmFyICRwaG90b19jYXB0aW9uID0gJCgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsYm94LWNhcHRpb25cIj48L2Rpdj4nKTtcbiAgICAgICAgICAkcGhvdG9fY2FwdGlvbi50ZXh0KG9yaWdpbi5kYXRhKCdjYXB0aW9uJykpO1xuICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJHBob3RvX2NhcHRpb24pO1xuICAgICAgICAgICRwaG90b19jYXB0aW9uLmNzcyh7IFwiZGlzcGxheVwiOiBcImlubGluZVwiIH0pO1xuICAgICAgICAgICRwaG90b19jYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiBpbkR1cmF0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzaXplIEltYWdlXG4gICAgICAgIHZhciByYXRpbyA9IDA7XG4gICAgICAgIHZhciB3aWR0aFBlcmNlbnQgPSBvcmlnaW5hbFdpZHRoIC8gd2luZG93V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHRQZXJjZW50ID0gb3JpZ2luYWxIZWlnaHQgLyB3aW5kb3dIZWlnaHQ7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IDA7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSAwO1xuXG4gICAgICAgIGlmICh3aWR0aFBlcmNlbnQgPiBoZWlnaHRQZXJjZW50KSB7XG4gICAgICAgICAgcmF0aW8gPSBvcmlnaW5hbEhlaWdodCAvIG9yaWdpbmFsV2lkdGg7XG4gICAgICAgICAgbmV3V2lkdGggPSB3aW5kb3dXaWR0aCAqIDAuOTtcbiAgICAgICAgICBuZXdIZWlnaHQgPSB3aW5kb3dXaWR0aCAqIDAuOSAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxXaWR0aCAvIG9yaWdpbmFsSGVpZ2h0O1xuICAgICAgICAgIG5ld1dpZHRoID0gKHdpbmRvd0hlaWdodCAqIDAuOSkgKiByYXRpbztcbiAgICAgICAgICBuZXdIZWlnaHQgPSB3aW5kb3dIZWlnaHQgKiAwLjk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRlIGltYWdlICsgc2V0IHotaW5kZXhcbiAgICAgICAgaWYob3JpZ2luLmhhc0NsYXNzKCdyZXNwb25zaXZlLWltZycpKSB7XG4gICAgICAgICAgb3JpZ2luLnZlbG9jaXR5KHsnbWF4LXdpZHRoJzogbmV3V2lkdGgsICd3aWR0aCc6IG9yaWdpbmFsV2lkdGh9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBvcmlnaW4uY3NzKHtsZWZ0OiAwLCB0b3A6IDB9KVxuICAgICAgICAgICAgICAudmVsb2NpdHkoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAkKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkgKyB3aW5kb3dXaWR0aC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkubGVmdCAtIG5ld1dpZHRoLzIsXG4gICAgICAgICAgICAgICAgICB0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgd2luZG93SGVpZ2h0LzIgLSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKS5vZmZzZXQoKS50b3AgLSBuZXdIZWlnaHQvIDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7ZG9uZUFuaW1hdGluZyA9IHRydWU7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gLy8gRW5kIENvbXBsZXRlXG4gICAgICAgICAgfSk7IC8vIEVuZCBWZWxvY2l0eVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG9yaWdpbi5jc3MoJ2xlZnQnLCAwKVxuICAgICAgICAgIC5jc3MoJ3RvcCcsIDApXG4gICAgICAgICAgLnZlbG9jaXR5KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodCxcbiAgICAgICAgICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgICAgICAgICBsZWZ0OiAkKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkgKyB3aW5kb3dXaWR0aC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkubGVmdCAtIG5ld1dpZHRoLzIsXG4gICAgICAgICAgICAgIHRvcDogJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyB3aW5kb3dIZWlnaHQvMiAtIG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpLm9mZnNldCgpLnRvcCAtIG5ld0hlaWdodC8gMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IGluRHVyYXRpb24sXG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtkb25lQW5pbWF0aW5nID0gdHJ1ZTt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApOyAvLyBFbmQgVmVsb2NpdHlcbiAgICAgICAgfVxuXG4gICAgICB9KTsgLy8gRW5kIG9yaWdpbiBvbiBjbGlja1xuXG5cbiAgICAgIC8vIFJldHVybiBvbiBzY3JvbGxcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChvdmVybGF5QWN0aXZlKSB7XG4gICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmV0dXJuIG9uIEVTQ1xuICAgICAgJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZSkge1xuXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmIGRvbmVBbmltYXRpbmcgPT09IHRydWUpIHsgICAvLyBFU0Mga2V5XG4gICAgICAgICAgaWYgKG92ZXJsYXlBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVyblRvT3JpZ2luYWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbW9kYWxlZCBpbWFnZSB0byB0aGUgb3JpZ2luYWwgc3BvdFxuICAgICAgZnVuY3Rpb24gcmV0dXJuVG9PcmlnaW5hbCgpIHtcblxuICAgICAgICBkb25lQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IG9yaWdpbi5kYXRhKCd3aWR0aCcpO1xuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSBvcmlnaW4uZGF0YSgnaGVpZ2h0Jyk7XG5cbiAgICAgICAgb3JpZ2luLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICAgICAgJCgnI21hdGVyaWFsYm94LW92ZXJsYXknKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgICAgICQoJy5tYXRlcmlhbGJveC1jYXB0aW9uJykudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuXG5cbiAgICAgICAgJCgnI21hdGVyaWFsYm94LW92ZXJsYXknKS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogb3V0RHVyYXRpb24sIC8vIERlbGF5IHByZXZlbnRzIGFuaW1hdGlvbiBvdmVybGFwcGluZ1xuICAgICAgICAgIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gUmVtb3ZlIE92ZXJsYXlcbiAgICAgICAgICAgIG92ZXJsYXlBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNpemUgSW1hZ2VcbiAgICAgICAgb3JpZ2luLnZlbG9jaXR5KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBvcmlnaW5hbFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBvcmlnaW5hbEhlaWdodCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBvdXREdXJhdGlvbixcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlci5jc3Moe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICcnXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIG9yaWdpbi5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICBvcmlnaW4uYXR0cignc3R5bGUnLCBvcmlnaW5JbmxpbmVTdHlsZXMpO1xuXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBjbGFzc1xuICAgICAgICAgICAgICBvcmlnaW4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICBkb25lQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyBSZW1vdmUgb3ZlcmZsb3cgb3ZlcnJpZGVzIG9uIGFuY2VzdG9yc1xuICAgICAgICAgICAgICBpZiAoYW5jZXN0b3JzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGFuY2VzdG9yc0NoYW5nZWQuY3NzKCdvdmVyZmxvdycsICcnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZW1vdmUgQ2FwdGlvbiArIHJlc2V0IGNzcyBzZXR0aW5ncyBvbiBpbWFnZVxuICAgICAgICAkKCcubWF0ZXJpYWxib3gtY2FwdGlvbicpLnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiBvdXREdXJhdGlvbiwgLy8gRGVsYXkgcHJldmVudHMgYW5pbWF0aW9uIG92ZXJsYXBwaW5nXG4gICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5tYXRlcmlhbGJveGVkJykubWF0ZXJpYWxib3goKTtcbiAgfSk7XG5cbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcblxuICAkLmZuLnBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAvLyBQYXJhbGxheCBTY3JpcHRzXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3BhcmFsbGF4Jyk7XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KGluaXRpYWwpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lcl9oZWlnaHQ7XG4gICAgICAgIGlmICh3aW5kb3dfd2lkdGggPCA2MDEpIHtcbiAgICAgICAgICBjb250YWluZXJfaGVpZ2h0ID0gKCR0aGlzLmhlaWdodCgpID4gMCkgPyAkdGhpcy5oZWlnaHQoKSA6ICR0aGlzLmNoaWxkcmVuKFwiaW1nXCIpLmhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lcl9oZWlnaHQgPSAoJHRoaXMuaGVpZ2h0KCkgPiAwKSA/ICR0aGlzLmhlaWdodCgpIDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkaW1nID0gJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuZmlyc3QoKTtcbiAgICAgICAgdmFyIGltZ19oZWlnaHQgPSAkaW1nLmhlaWdodCgpO1xuICAgICAgICB2YXIgcGFyYWxsYXhfZGlzdCA9IGltZ19oZWlnaHQgLSBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICB2YXIgYm90dG9tID0gJHRoaXMub2Zmc2V0KCkudG9wICsgY29udGFpbmVyX2hlaWdodDtcbiAgICAgICAgdmFyIHRvcCA9ICR0aGlzLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIHdpbmRvd0JvdHRvbSA9IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodDtcbiAgICAgICAgdmFyIHBlcmNlbnRTY3JvbGxlZCA9ICh3aW5kb3dCb3R0b20gLSB0b3ApIC8gKGNvbnRhaW5lcl9oZWlnaHQgKyB3aW5kb3dIZWlnaHQpO1xuICAgICAgICB2YXIgcGFyYWxsYXggPSBNYXRoLnJvdW5kKChwYXJhbGxheF9kaXN0ICogcGVyY2VudFNjcm9sbGVkKSk7XG5cbiAgICAgICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgICAkaW1nLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYm90dG9tID4gc2Nyb2xsVG9wKSAmJiAodG9wIDwgKHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCkpKSB7XG4gICAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM0QoLTUwJSxcIiArIHBhcmFsbGF4ICsgXCJweCwgMClcIik7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICAvLyBXYWl0IGZvciBpbWFnZSBsb2FkXG4gICAgICAkdGhpcy5jaGlsZHJlbihcImltZ1wiKS5vbmUoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVQYXJhbGxheCh0cnVlKTtcbiAgICAgIH0pLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlKSAkKHRoaXMpLnRyaWdnZXIoXCJsb2FkXCIpO1xuICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICB1cGRhdGVQYXJhbGxheChmYWxzZSk7XG4gICAgICB9KTtcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfTtcbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBvblNob3c6IG51bGwsXG4gICAgICAgIHN3aXBlYWJsZTogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmVUaHJlc2hvbGQ6IEluZmluaXR5LCAvLyBicmVha3BvaW50IGZvciBzd2lwZWFibGVcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IE1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKCQodGhpcykpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgdmFyIHVuaXF1ZU5hbWVzcGFjZSA9IG5hbWVzcGFjZStpO1xuXG4gICAgICAvLyBGb3IgZWFjaCBzZXQgb2YgdGFicywgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mXG4gICAgICAvLyB3aGljaCB0YWIgaXMgYWN0aXZlIGFuZCBpdHMgYXNzb2NpYXRlZCBjb250ZW50XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICB2YXIgJGFjdGl2ZSwgJGNvbnRlbnQsICRsaW5rcyA9ICR0aGlzLmZpbmQoJ2xpLnRhYiBhJyksXG4gICAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpLFxuICAgICAgICAgICR0YWJzX2NvbnRlbnQgPSAkKCksXG4gICAgICAgICAgJHRhYnNfd3JhcHBlcixcbiAgICAgICAgICAkdGFiX3dpZHRoID0gTWF0aC5tYXgoJHRhYnNfd2lkdGgsICR0aGlzWzBdLnNjcm9sbFdpZHRoKSAvICRsaW5rcy5sZW5ndGgsXG4gICAgICAgICAgJGluZGljYXRvcixcbiAgICAgICAgICBpbmRleCA9IHByZXZfaW5kZXggPSAwLFxuICAgICAgICAgIGNsaWNrZWQgPSBmYWxzZSxcbiAgICAgICAgICBjbGlja2VkVGltZW91dCxcbiAgICAgICAgICB0cmFuc2l0aW9uID0gMzAwO1xuXG5cbiAgICAgIC8vIEZpbmRzIHJpZ2h0IGF0dHJpYnV0ZSBmb3IgaW5kaWNhdG9yIGJhc2VkIG9uIGFjdGl2ZSB0YWIuXG4gICAgICAvLyBlbDogalF1ZXJ5IE9iamVjdFxuICAgICAgdmFyIGNhbGNSaWdodFBvcyA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoJHRhYnNfd2lkdGggLSBlbC5wb3NpdGlvbigpLmxlZnQgLSBlbC5vdXRlcldpZHRoKCkgLSAkdGhpcy5zY3JvbGxMZWZ0KCkpO1xuICAgICAgfTtcblxuICAgICAgLy8gRmluZHMgbGVmdCBhdHRyaWJ1dGUgZm9yIGluZGljYXRvciBiYXNlZCBvbiBhY3RpdmUgdGFiLlxuICAgICAgLy8gZWw6IGpRdWVyeSBPYmplY3RcbiAgICAgIHZhciBjYWxjTGVmdFBvcyA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGVsLnBvc2l0aW9uKCkubGVmdCArICR0aGlzLnNjcm9sbExlZnQoKSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBBbmltYXRlcyBJbmRpY2F0b3IgdG8gYWN0aXZlIHRhYi5cbiAgICAgIC8vIHByZXZfaW5kZXg6IE51bWJlclxuICAgICAgdmFyIGFuaW1hdGVJbmRpY2F0b3IgPSBmdW5jdGlvbihwcmV2X2luZGV4KSB7XG4gICAgICAgIGlmICgoaW5kZXggLSBwcmV2X2luZGV4KSA+PSAwKSB7XG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSwgeyBkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KHtcImxlZnRcIjogY2FsY0xlZnRQb3MoJGFjdGl2ZSkgfSwge2R1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgZGVsYXk6IDkwfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KHtcImxlZnRcIjogY2FsY0xlZnRQb3MoJGFjdGl2ZSkgfSwgeyBkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KHtcInJpZ2h0XCI6IGNhbGNSaWdodFBvcygkYWN0aXZlKSB9LCB7ZHVyYXRpb246IHRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBkZWxheTogOTB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gQ2hhbmdlIHN3aXBlYWJsZSBhY2NvcmRpbmcgdG8gcmVzcG9uc2l2ZSB0aHJlc2hvbGRcbiAgICAgIGlmIChvcHRpb25zLnN3aXBlYWJsZSkge1xuICAgICAgICBpZiAod2luZG93X3dpZHRoID4gb3B0aW9ucy5yZXNwb25zaXZlVGhyZXNob2xkKSB7XG4gICAgICAgICAgb3B0aW9ucy5zd2lwZWFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC8vIElmIHRoZSBsb2NhdGlvbi5oYXNoIG1hdGNoZXMgb25lIG9mIHRoZSBsaW5rcywgdXNlIHRoYXQgYXMgdGhlIGFjdGl2ZSB0YWIuXG4gICAgICAkYWN0aXZlID0gJCgkbGlua3MuZmlsdGVyKCdbaHJlZj1cIicrbG9jYXRpb24uaGFzaCsnXCJdJykpO1xuXG4gICAgICAvLyBJZiBubyBtYXRjaCBpcyBmb3VuZCwgdXNlIHRoZSBmaXJzdCBsaW5rIG9yIGFueSB3aXRoIGNsYXNzICdhY3RpdmUnIGFzIHRoZSBpbml0aWFsIGFjdGl2ZSB0YWIuXG4gICAgICBpZiAoJGFjdGl2ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJGFjdGl2ZSA9ICQodGhpcykuZmluZCgnbGkudGFiIGEuYWN0aXZlJykuZmlyc3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICgkYWN0aXZlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkYWN0aXZlID0gJCh0aGlzKS5maW5kKCdsaS50YWIgYScpLmZpcnN0KCk7XG4gICAgICB9XG5cbiAgICAgICRhY3RpdmUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgaW5kZXggPSAkbGlua3MuaW5kZXgoJGFjdGl2ZSk7XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCRhY3RpdmVbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkY29udGVudCA9ICQoJGFjdGl2ZVswXS5oYXNoKTtcbiAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBlbmQgaW5kaWNhdG9yIHRoZW4gc2V0IGluZGljYXRvciB3aWR0aCB0byB0YWIgd2lkdGhcbiAgICAgIGlmICghJHRoaXMuZmluZCgnLmluZGljYXRvcicpLmxlbmd0aCkge1xuICAgICAgICAkdGhpcy5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2Rpdj4nKTtcbiAgICAgIH1cbiAgICAgICRpbmRpY2F0b3IgPSAkdGhpcy5maW5kKCcuaW5kaWNhdG9yJyk7XG5cbiAgICAgIC8vIHdlIG1ha2Ugc3VyZSB0aGF0IHRoZSBpbmRpY2F0b3IgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGFic1xuICAgICAgJHRoaXMuYXBwZW5kKCRpbmRpY2F0b3IpO1xuXG4gICAgICBpZiAoJHRoaXMuaXMoXCI6dmlzaWJsZVwiKSkge1xuICAgICAgICAvLyAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiAkdGFic193aWR0aCAtICgoaW5kZXggKyAxKSAqICR0YWJfd2lkdGgpfSk7XG4gICAgICAgIC8vICRpbmRpY2F0b3IuY3NzKHtcImxlZnRcIjogaW5kZXggKiAkdGFiX3dpZHRofSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGluZGljYXRvci5jc3Moe1wicmlnaHRcIjogY2FsY1JpZ2h0UG9zKCRhY3RpdmUpIH0pO1xuICAgICAgICAgICRpbmRpY2F0b3IuY3NzKHtcImxlZnRcIjogY2FsY0xlZnRQb3MoJGFjdGl2ZSkgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnRhYnMtJyt1bmlxdWVOYW1lc3BhY2UpLm9uKCdyZXNpemUudGFicy0nK3VuaXF1ZU5hbWVzcGFjZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkdGFic193aWR0aCA9ICR0aGlzLndpZHRoKCk7XG4gICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHRhYl93aWR0aCAhPT0gMCAmJiAkdGFic193aWR0aCAhPT0gMCkge1xuICAgICAgICAgICRpbmRpY2F0b3IuY3NzKHtcInJpZ2h0XCI6IGNhbGNSaWdodFBvcygkYWN0aXZlKSB9KTtcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGNhbGNMZWZ0UG9zKCRhY3RpdmUpIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSBUYWJzIENvbnRlbnQuXG4gICAgICBpZiAob3B0aW9ucy5zd2lwZWFibGUpIHtcbiAgICAgICAgLy8gVE9ETzogRHVwbGljYXRlIGNhbGxzIHdpdGggc3dpcGVhYmxlPyBoYW5kbGUgbXVsdGlwbGUgZGl2IHdyYXBwaW5nLlxuICAgICAgICAkbGlua3MuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyICRjdXJyX2NvbnRlbnQgPSAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSk7XG4gICAgICAgICAgJGN1cnJfY29udGVudC5hZGRDbGFzcygnY2Fyb3VzZWwtaXRlbScpO1xuICAgICAgICAgICR0YWJzX2NvbnRlbnQgPSAkdGFic19jb250ZW50LmFkZCgkY3Vycl9jb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgICR0YWJzX3dyYXBwZXIgPSAkdGFic19jb250ZW50LndyYXBBbGwoJzxkaXYgY2xhc3M9XCJ0YWJzLWNvbnRlbnQgY2Fyb3VzZWxcIj48L2Rpdj4nKTtcbiAgICAgICAgJHRhYnNfY29udGVudC5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgICAgICQoJy50YWJzLWNvbnRlbnQuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7XG4gICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgIG5vV3JhcDogdHJ1ZSxcbiAgICAgICAgICBvbkN5Y2xlVG86IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghY2xpY2tlZCkge1xuICAgICAgICAgICAgICB2YXIgcHJldl9pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICBpbmRleCA9ICR0YWJzX3dyYXBwZXIuaW5kZXgoaXRlbSk7XG4gICAgICAgICAgICAgICRhY3RpdmUgPSAkbGlua3MuZXEoaW5kZXgpO1xuICAgICAgICAgICAgICBhbmltYXRlSW5kaWNhdG9yKHByZXZfaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGlkZSB0aGUgcmVtYWluaW5nIGNvbnRlbnRcbiAgICAgICAgJGxpbmtzLm5vdCgkYWN0aXZlKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgICAvLyBCaW5kIHRoZSBjbGljayBldmVudCBoYW5kbGVyXG4gICAgICAkdGhpcy5vZmYoJ2NsaWNrLnRhYnMnKS5vbignY2xpY2sudGFicycsICdhJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBY3QgYXMgcmVndWxhciBsaW5rIGlmIHRhcmdldCBhdHRyaWJ1dGUgaXMgc3BlY2lmaWVkLlxuICAgICAgICBpZiAoISEkKHRoaXMpLmF0dHIoXCJ0YXJnZXRcIikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpO1xuICAgICAgICAkdGFiX3dpZHRoID0gTWF0aC5tYXgoJHRhYnNfd2lkdGgsICR0aGlzWzBdLnNjcm9sbFdpZHRoKSAvICRsaW5rcy5sZW5ndGg7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgb2xkIHRhYiBpbmFjdGl2ZS5cbiAgICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHZhciAkb2xkQ29udGVudCA9ICRjb250ZW50XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YXJpYWJsZXMgd2l0aCB0aGUgbmV3IGxpbmsgYW5kIGNvbnRlbnRcbiAgICAgICAgJGFjdGl2ZSA9ICQodGhpcyk7XG4gICAgICAgICRjb250ZW50ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpO1xuICAgICAgICAkbGlua3MgPSAkdGhpcy5maW5kKCdsaS50YWIgYScpO1xuICAgICAgICB2YXIgYWN0aXZlUmVjdCA9ICRhY3RpdmUucG9zaXRpb24oKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSB0YWIgYWN0aXZlLlxuICAgICAgICAkYWN0aXZlLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgcHJldl9pbmRleCA9IGluZGV4O1xuICAgICAgICBpbmRleCA9ICRsaW5rcy5pbmRleCgkKHRoaXMpKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGFuZ2UgdXJsIHRvIGN1cnJlbnQgdGFiXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJGFjdGl2ZS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgLy8gU3dhcCBjb250ZW50XG4gICAgICAgIGlmIChvcHRpb25zLnN3aXBlYWJsZSkge1xuICAgICAgICAgIGlmICgkdGFic19jb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgJHRhYnNfY29udGVudC5jYXJvdXNlbCgnc2V0JywgaW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoJGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgJGNvbnRlbnQuc2hvdygpO1xuICAgICAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uU2hvdykgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBvcHRpb25zLm9uU2hvdy5jYWxsKHRoaXMsICRjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJG9sZENvbnRlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAhJG9sZENvbnRlbnQuaXMoJGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAkb2xkQ29udGVudC5oaWRlKCk7XG4gICAgICAgICAgICAkb2xkQ29udGVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgY2xpY2tlZCBzdGF0ZVxuICAgICAgICBjbGlja2VkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgY2xpY2tlZCA9IGZhbHNlOyB9LCB0cmFuc2l0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yXG4gICAgICAgIGFuaW1hdGVJbmRpY2F0b3IocHJldl9pbmRleCk7XG5cbiAgICAgICAgLy8gUHJldmVudCB0aGUgYW5jaG9yJ3MgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB9LFxuICAgIHNlbGVjdF90YWIgOiBmdW5jdGlvbiggaWQgKSB7XG4gICAgICB0aGlzLmZpbmQoJ2FbaHJlZj1cIiMnICsgaWQgKyAnXCJdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH07XG5cbiAgJC5mbi50YWJzID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhYnMnICk7XG4gICAgfVxuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgndWwudGFicycpLnRhYnMoKTtcbiAgfSk7XG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICAgJC5mbi50b29sdGlwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciB0aW1lb3V0ID0gbnVsbCxcbiAgICAgIG1hcmdpbiA9IDU7XG5cbiAgICAgIC8vIERlZmF1bHRzXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRlbGF5OiAzNTAsXG4gICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgIGh0bWw6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICAvLyBSZW1vdmUgdG9vbHRpcCBmcm9tIHRoZSBhY3RpdmF0b3JcbiAgICAgIGlmIChvcHRpb25zID09PSBcInJlbW92ZVwiKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcjJyArICQodGhpcykuYXR0cignZGF0YS10b29sdGlwLWlkJykpLnJlbW92ZSgpO1xuICAgICAgICAgICQodGhpcykub2ZmKCdtb3VzZWVudGVyLnRvb2x0aXAgbW91c2VsZWF2ZS50b29sdGlwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0b29sdGlwSWQgPSBNYXRlcmlhbGl6ZS5ndWlkKCk7XG4gICAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xuXG4gICAgICAgIC8vIERlc3Ryb3kgb2xkIHRvb2x0aXBcbiAgICAgICAgaWYgKG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkge1xuICAgICAgICAgICQoJyMnICsgb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcpKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnLCB0b29sdGlwSWQpO1xuXG4gICAgICAgIC8vIEdldCBhdHRyaWJ1dGVzLlxuICAgICAgICB2YXIgYWxsb3dIdG1sLFxuICAgICAgICAgICAgdG9vbHRpcERlbGF5LFxuICAgICAgICAgICAgdG9vbHRpcFBvc2l0aW9uLFxuICAgICAgICAgICAgdG9vbHRpcFRleHQsXG4gICAgICAgICAgICB0b29sdGlwRWwsXG4gICAgICAgICAgICBiYWNrZHJvcDtcbiAgICAgICAgdmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBhbGxvd0h0bWwgPSBvcmlnaW4uYXR0cignZGF0YS1odG1sJykgPyBvcmlnaW4uYXR0cignZGF0YS1odG1sJykgPT09ICd0cnVlJyA6IG9wdGlvbnMuaHRtbDtcbiAgICAgICAgICB0b29sdGlwRGVsYXkgPSBvcmlnaW4uYXR0cignZGF0YS1kZWxheScpO1xuICAgICAgICAgIHRvb2x0aXBEZWxheSA9ICh0b29sdGlwRGVsYXkgPT09IHVuZGVmaW5lZCB8fCB0b29sdGlwRGVsYXkgPT09ICcnKSA/XG4gICAgICAgICAgICAgIG9wdGlvbnMuZGVsYXkgOiB0b29sdGlwRGVsYXk7XG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uID0gb3JpZ2luLmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICB0b29sdGlwUG9zaXRpb24gPSAodG9vbHRpcFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcFBvc2l0aW9uID09PSAnJykgP1xuICAgICAgICAgICAgICBvcHRpb25zLnBvc2l0aW9uIDogdG9vbHRpcFBvc2l0aW9uO1xuICAgICAgICAgIHRvb2x0aXBUZXh0ID0gb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcCcpO1xuICAgICAgICAgIHRvb2x0aXBUZXh0ID0gKHRvb2x0aXBUZXh0ID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcFRleHQgPT09ICcnKSA/XG4gICAgICAgICAgICAgIG9wdGlvbnMudG9vbHRpcCA6IHRvb2x0aXBUZXh0O1xuICAgICAgICB9O1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgdmFyIHJlbmRlclRvb2x0aXBFbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0b29sdGlwID0gJCgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRvb2x0aXBcIj48L2Rpdj4nKTtcblxuICAgICAgICAgIC8vIENyZWF0ZSBUZXh0IHNwYW5cbiAgICAgICAgICBpZiAoYWxsb3dIdG1sKSB7XG4gICAgICAgICAgICB0b29sdGlwVGV4dCA9ICQoJzxzcGFuPjwvc3Bhbj4nKS5odG1sKHRvb2x0aXBUZXh0KTtcbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b29sdGlwVGV4dCA9ICQoJzxzcGFuPjwvc3Bhbj4nKS50ZXh0KHRvb2x0aXBUZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDcmVhdGUgdG9vbHRpcFxuICAgICAgICAgIHRvb2x0aXAuYXBwZW5kKHRvb2x0aXBUZXh0KVxuICAgICAgICAgICAgLmFwcGVuZFRvKCQoJ2JvZHknKSlcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIHRvb2x0aXBJZCk7XG5cbiAgICAgICAgICAvLyBDcmVhdGUgYmFja2Ryb3BcbiAgICAgICAgICBiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgICAgICAgIGJhY2tkcm9wLmFwcGVuZFRvKHRvb2x0aXApO1xuICAgICAgICAgIHJldHVybiB0b29sdGlwO1xuICAgICAgICB9O1xuICAgICAgICB0b29sdGlwRWwgPSByZW5kZXJUb29sdGlwRWwoKTtcblxuICAgICAgICAvLyBEZXN0cm95IHByZXZpb3VzbHkgYmluZGVkIGV2ZW50c1xuICAgICAgICBvcmlnaW4ub2ZmKCdtb3VzZWVudGVyLnRvb2x0aXAgbW91c2VsZWF2ZS50b29sdGlwJyk7XG4gICAgICAgIC8vIE1vdXNlIEluXG4gICAgICAgIHZhciBzdGFydGVkID0gZmFsc2UsIHRpbWVvdXRSZWY7XG4gICAgICAgIG9yaWdpbi5vbih7J21vdXNlZW50ZXIudG9vbHRpcCc6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB2YXIgc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdG9vbHRpcEVsLnZlbG9jaXR5KCdzdG9wJyk7XG4gICAgICAgICAgICBiYWNrZHJvcC52ZWxvY2l0eSgnc3RvcCcpO1xuICAgICAgICAgICAgdG9vbHRpcEVsLmNzcyh7IHZpc2liaWxpdHk6ICd2aXNpYmxlJywgbGVmdDogJzBweCcsIHRvcDogJzBweCcgfSk7XG5cbiAgICAgICAgICAgIC8vIFRvb2x0aXAgcG9zaXRpb25pbmdcbiAgICAgICAgICAgIHZhciBvcmlnaW5XaWR0aCA9IG9yaWdpbi5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICB2YXIgb3JpZ2luSGVpZ2h0ID0gb3JpZ2luLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcEhlaWdodCA9IHRvb2x0aXBFbC5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHRvb2x0aXBXaWR0aCA9IHRvb2x0aXBFbC5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQgPSAnMHB4JztcbiAgICAgICAgICAgIHZhciB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJzBweCc7XG4gICAgICAgICAgICB2YXIgYmFja2Ryb3BPZmZzZXRXaWR0aCA9IGJhY2tkcm9wWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIGJhY2tkcm9wT2Zmc2V0SGVpZ2h0ID0gYmFja2Ryb3BbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHNjYWxlWEZhY3RvciA9IDg7XG4gICAgICAgICAgICB2YXIgc2NhbGVZRmFjdG9yID0gODtcbiAgICAgICAgICAgIHZhciBzY2FsZUZhY3RvciA9IDA7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0VG9wLCB0YXJnZXRMZWZ0LCBuZXdDb29yZGluYXRlcztcblxuICAgICAgICAgICAgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJ0b3BcIikge1xuICAgICAgICAgICAgICAvLyBUb3AgUG9zaXRpb25cbiAgICAgICAgICAgICAgdGFyZ2V0VG9wID0gb3JpZ2luLm9mZnNldCgpLnRvcCAtIHRvb2x0aXBIZWlnaHQgLSBtYXJnaW47XG4gICAgICAgICAgICAgIHRhcmdldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdCArIG9yaWdpbldpZHRoLzIgLSB0b29sdGlwV2lkdGgvMjtcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcbiAgICAgICAgICAgICAgdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQgPSAnLTEwcHgnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE0cHggMTRweCAwIDAnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRvb2x0aXBIZWlnaHQsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogKHRvb2x0aXBXaWR0aC8yKSAtIChiYWNrZHJvcE9mZnNldFdpZHRoLzIpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGVmdCBQb3NpdGlvblxuICAgICAgICAgICAgZWxzZSBpZiAodG9vbHRpcFBvc2l0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luSGVpZ2h0LzIgLSB0b29sdGlwSGVpZ2h0LzI7XG4gICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgb3JpZ2luLm9mZnNldCgpLmxlZnQgLSB0b29sdGlwV2lkdGggLSBtYXJnaW47XG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XG5cbiAgICAgICAgICAgICAgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICctMTBweCc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgdG9wOiAnLTdweCcsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDAgMCAxNHB4JyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc5NSUgNTAlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRvb2x0aXBIZWlnaHQvMixcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0b29sdGlwV2lkdGhcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSaWdodCBQb3NpdGlvblxuICAgICAgICAgICAgZWxzZSBpZiAodG9vbHRpcFBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0VG9wID0gb3JpZ2luLm9mZnNldCgpLnRvcCArIG9yaWdpbkhlaWdodC8yIC0gdG9vbHRpcEhlaWdodC8yO1xuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aCArIG1hcmdpbjtcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcblxuICAgICAgICAgICAgICB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJysxMHB4JztcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgICB0b3A6ICctN3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTRweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMCAxNHB4IDE0cHggMCcsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNSUgNTAlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRvb2x0aXBIZWlnaHQvMixcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4J1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAvLyBCb3R0b20gUG9zaXRpb25cbiAgICAgICAgICAgICAgdGFyZ2V0VG9wID0gb3JpZ2luLm9mZnNldCgpLnRvcCArIG9yaWdpbi5vdXRlckhlaWdodCgpICsgbWFyZ2luO1xuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aC8yIC0gdG9vbHRpcFdpZHRoLzI7XG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XG4gICAgICAgICAgICAgIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJysxMHB4JztcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAodG9vbHRpcFdpZHRoLzIpIC0gKGJhY2tkcm9wT2Zmc2V0V2lkdGgvMilcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0b29wdGlwIGNzcyBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRvb2x0aXBFbC5jc3Moe1xuICAgICAgICAgICAgICB0b3A6IG5ld0Nvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgIGxlZnQ6IG5ld0Nvb3JkaW5hdGVzLnhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgU2NhbGUgdG8gZmlsbFxuICAgICAgICAgICAgc2NhbGVYRmFjdG9yID0gTWF0aC5TUVJUMiAqIHRvb2x0aXBXaWR0aCAvIHBhcnNlSW50KGJhY2tkcm9wT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgc2NhbGVZRmFjdG9yID0gTWF0aC5TUVJUMiAqIHRvb2x0aXBIZWlnaHQgLyBwYXJzZUludChiYWNrZHJvcE9mZnNldEhlaWdodCk7XG4gICAgICAgICAgICBzY2FsZUZhY3RvciA9IE1hdGgubWF4KHNjYWxlWEZhY3Rvciwgc2NhbGVZRmFjdG9yKTtcblxuICAgICAgICAgICAgdG9vbHRpcEVsLnZlbG9jaXR5KHsgdHJhbnNsYXRlWTogdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQsIHRyYW5zbGF0ZVg6IHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnR9LCB7IGR1cmF0aW9uOiAzNTAsIHF1ZXVlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IDMwMCwgZGVsYXk6IDUwLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7IHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KVxuICAgICAgICAgICAgICAudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOiA1NSwgZGVsYXk6IDAsIHF1ZXVlOiBmYWxzZX0pXG4gICAgICAgICAgICAgIC52ZWxvY2l0eSh7c2NhbGVYOiBzY2FsZUZhY3Rvciwgc2NhbGVZOiBzY2FsZUZhY3Rvcn0sIHtkdXJhdGlvbjogMzAwLCBkZWxheTogMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJ30pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aW1lb3V0UmVmID0gc2V0VGltZW91dChzaG93VG9vbHRpcCwgdG9vbHRpcERlbGF5KTsgLy8gRW5kIEludGVydmFsXG5cbiAgICAgICAgLy8gTW91c2UgT3V0XG4gICAgICAgIH0sXG4gICAgICAgICdtb3VzZWxlYXZlLnRvb2x0aXAnOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFJlc2V0IFN0YXRlXG4gICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0UmVmKTtcblxuICAgICAgICAgIC8vIEFuaW1hdGUgYmFja1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0b29sdGlwRWwudmVsb2NpdHkoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsIHRyYW5zbGF0ZVk6IDAsIHRyYW5zbGF0ZVg6IDB9LCB7IGR1cmF0aW9uOiAyMjUsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICBiYWNrZHJvcC52ZWxvY2l0eSh7b3BhY2l0eTogMCwgc2NhbGVYOiAxLCBzY2FsZVk6IDF9LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246MjI1LFxuICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgdG9vbHRpcEVsLmNzcyh7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO31cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwyMjUpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZXBvc2l0aW9uV2l0aGluU2NyZWVuID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBuZXdYID0geDtcbiAgICB2YXIgbmV3WSA9IHk7XG5cbiAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgIG5ld1ggPSA0O1xuICAgIH0gZWxzZSBpZiAobmV3WCArIHdpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIG5ld1ggLT0gbmV3WCArIHdpZHRoIC0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKG5ld1kgPCAwKSB7XG4gICAgICBuZXdZID0gNDtcbiAgICB9IGVsc2UgaWYgKG5ld1kgKyBoZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKSB7XG4gICAgICBuZXdZIC09IG5ld1kgKyBoZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt4OiBuZXdYLCB5OiBuZXdZfTtcbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAkKCcudG9vbHRpcHBlZCcpLnRvb2x0aXAoKTtcbiAgIH0pO1xufSggalF1ZXJ5ICkpO1xuOy8qIVxuICogV2F2ZXMgdjAuNi40XG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG47KGZ1bmN0aW9uKHdpbmRvdykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBXYXZlcyA9IFdhdmVzIHx8IHt9O1xuICAgIHZhciAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbiAgICAvLyBGaW5kIGV4YWN0IHBvc2l0aW9uIG9mIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSkge1xuICAgICAgICB2YXIgZG9jRWxlbSwgd2luLFxuICAgICAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH0sXG4gICAgICAgICAgICBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcblxuICAgICAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRTdHlsZShvYmopIHtcbiAgICAgICAgdmFyIHN0eWxlID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgYSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSAoYSArICc6JyArIG9ialthXSArICc7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgdmFyIEVmZmVjdCA9IHtcblxuICAgICAgICAvLyBFZmZlY3QgZGVsYXlcbiAgICAgICAgZHVyYXRpb246IDc1MCxcblxuICAgICAgICBzaG93OiBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgcmlnaHQgY2xpY2tcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudCB8fCB0aGlzO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcmlwcGxlXG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NOYW1lID0gJ3dhdmVzLXJpcHBsZSc7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChyaXBwbGUpO1xuXG4gICAgICAgICAgICAvLyBHZXQgY2xpY2sgY29vcmRpbmF0ZSBhbmQgZWxlbWVudCB3aXRkaFxuICAgICAgICAgICAgdmFyIHBvcyAgICAgICAgID0gb2Zmc2V0KGVsKTtcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVkgICA9IChlLnBhZ2VZIC0gcG9zLnRvcCk7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVYICAgPSAoZS5wYWdlWCAtIHBvcy5sZWZ0KTtcbiAgICAgICAgICAgIHZhciBzY2FsZSAgICAgICA9ICdzY2FsZSgnKygoZWwuY2xpZW50V2lkdGggLyAxMDApICogMTApKycpJztcblxuICAgICAgICAgICAgLy8gU3VwcG9ydCBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgICAgICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlWSAgID0gKGUudG91Y2hlc1swXS5wYWdlWSAtIHBvcy50b3ApO1xuICAgICAgICAgICAgICByZWxhdGl2ZVggICA9IChlLnRvdWNoZXNbMF0ucGFnZVggLSBwb3MubGVmdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCBkYXRhIHRvIGVsZW1lbnRcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaG9sZCcsIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zY2FsZScsIHNjYWxlKTtcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHJlbGF0aXZlWCk7XG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXknLCByZWxhdGl2ZVkpO1xuXG4gICAgICAgICAgICAvLyBTZXQgcmlwcGxlIHBvc2l0aW9uXG4gICAgICAgICAgICB2YXIgcmlwcGxlU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSsncHgnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYKydweCdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSByaXBwbGUuY2xhc3NOYW1lICsgJyB3YXZlcy1ub3RyYW5zaXRpb24nO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUocmlwcGxlU3R5bGUpKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSByaXBwbGUuY2xhc3NOYW1lLnJlcGxhY2UoJ3dhdmVzLW5vdHJhbnNpdGlvbicsICcnKTtcblxuICAgICAgICAgICAgLy8gU2NhbGUgdGhlIHJpcHBsZVxuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW1zLXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlLnRyYW5zZm9ybSA9IHNjYWxlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGUub3BhY2l0eSAgID0gJzEnO1xuXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbiddICAgID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2l0aW9uLWR1cmF0aW9uJ10gICAgICA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi1kdXJhdGlvbiddICAgICAgICAgPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddICAgICAgPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICAgICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuXG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaHVwKGUpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWwuY2xpZW50V2lkdGggKiAxLjQ7XG5cbiAgICAgICAgICAgIC8vIEdldCBmaXJzdCByaXBwbGVcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHJpcHBsZXMgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXZlcy1yaXBwbGUnKTtcbiAgICAgICAgICAgIGlmIChyaXBwbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByaXBwbGUgPSByaXBwbGVzW3JpcHBsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlbGF0aXZlWCAgID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVZICAgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcbiAgICAgICAgICAgIHZhciBzY2FsZSAgICAgICA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnKTtcblxuICAgICAgICAgICAgLy8gR2V0IGRlbGF5IGJlZXR3ZWVuIG1vdXNlZG93biBhbmQgbW91c2UgbGVhdmVcbiAgICAgICAgICAgIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIE51bWJlcihyaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnKSk7XG4gICAgICAgICAgICB2YXIgZGVsYXkgPSAzNTAgLSBkaWZmO1xuXG4gICAgICAgICAgICBpZiAoZGVsYXkgPCAwKSB7XG4gICAgICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGYWRlIG91dCByaXBwbGUgYWZ0ZXIgZGVsYXlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAndG9wJzogcmVsYXRpdmVZKydweCcsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYKydweCcsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzAnLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIER1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAgICAgJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHN0eWxlKSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBFZmZlY3QuZHVyYXRpb24pO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIExpdHRsZSBoYWNrIHRvIG1ha2UgPGlucHV0PiBjYW4gcGVyZm9ybSB3YXZlcyBlZmZlY3RcbiAgICAgICAgd3JhcElucHV0OiBmdW5jdGlvbihlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlbGVtZW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2FdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpbnB1dCBhbHJlYWR5IGhhdmUgcGFyZW50IGp1c3QgcGFzcyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaScgJiYgcGFyZW50LmNsYXNzTmFtZS5pbmRleE9mKCd3YXZlcy1lZmZlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHV0IGVsZW1lbnQgY2xhc3MgYW5kIHN0eWxlIHRvIHRoZSBzcGVjaWZpZWQgcGFyZW50XG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSArICcgd2F2ZXMtaW5wdXQtd3JhcHBlcic7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRTdHlsZSA9IGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBlbGVtZW50U3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICd3YXZlcy1idXR0b24taW5wdXQnO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHV0IGVsZW1lbnQgYXMgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBlbCk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgbW91c2Vkb3duIGV2ZW50IGZvciA1MDBtcyBkdXJpbmcgYW5kIGFmdGVyIHRvdWNoXG4gICAgICovXG4gICAgdmFyIFRvdWNoSGFuZGxlciA9IHtcbiAgICAgICAgLyogdXNlcyBhbiBpbnRlZ2VyIHJhdGhlciB0aGFuIGJvb2wgc28gdGhlcmUncyBubyBpc3N1ZXMgd2l0aFxuICAgICAgICAgKiBuZWVkaW5nIHRvIGNsZWFyIHRpbWVvdXRzIGlmIGFub3RoZXIgdG91Y2ggZXZlbnQgb2NjdXJyZWRcbiAgICAgICAgICogd2l0aGluIHRoZSA1MDBtcy4gQ2Fubm90IG1vdXNldXAgYmV0d2VlbiB0b3VjaHN0YXJ0IGFuZFxuICAgICAgICAgKiB0b3VjaGVuZCwgbm9yIGluIHRoZSA1MDBtcyBhZnRlciB0b3VjaGVuZC4gKi9cbiAgICAgICAgdG91Y2hlczogMCxcbiAgICAgICAgYWxsb3dFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGFsbG93ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgKz0gMTsgLy9wdXNoXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVG91Y2hIYW5kbGVyLnRvdWNoZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3VjaEhhbmRsZXIudG91Y2hlcyAtPSAxOyAvL3BvcCBhZnRlciA1MDBtc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiBUb3VjaEhhbmRsZXIudG91Y2hlcyA+IDApIHtcbiAgICAgICAgICAgICAgICBhbGxvdyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWxsb3c7XG4gICAgICAgIH0sXG4gICAgICAgIHRvdWNodXA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogRGVsZWdhdGVkIGNsaWNrIGhhbmRsZXIgZm9yIC53YXZlcy1lZmZlY3QgZWxlbWVudC5cbiAgICAgKiByZXR1cm5zIG51bGwgd2hlbiAud2F2ZXMtZWZmZWN0IGVsZW1lbnQgbm90IGluIFwiY2xpY2sgdHJlZVwiXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0V2F2ZXNFZmZlY3RFbGVtZW50KGUpIHtcbiAgICAgICAgaWYgKFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKHRhcmdldC5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJiB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3dhdmVzLWVmZmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnViYmxlIHRoZSBjbGljayBhbmQgc2hvdyBlZmZlY3QgaWYgLndhdmVzLWVmZmVjdCBlbGVtIHdhcyBmb3VuZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNob3dFZmZlY3QoZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGdldFdhdmVzRWZmZWN0RWxlbWVudChlKTtcblxuICAgICAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgRWZmZWN0LnNob3coZSwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBXYXZlcy5kaXNwbGF5RWZmZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoJ2R1cmF0aW9uJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBFZmZlY3QuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9XcmFwIGlucHV0IGluc2lkZSA8aT4gdGFnXG4gICAgICAgIEVmZmVjdC53cmFwSW5wdXQoJCQoJy53YXZlcy1lZmZlY3QnKSk7XG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBXYXZlcyB0byBhbiBpbnB1dCBlbGVtZW50IChvciBhbnkgZWxlbWVudCB3aGljaCBkb2Vzbid0XG4gICAgICogYnViYmxlIG1vdXNldXAvbW91c2Vkb3duIGV2ZW50cykuXG4gICAgICogICBJbnRlbmRlZCB0byBiZSB1c2VkIHdpdGggZHluYW1pY2FsbHkgbG9hZGVkIGZvcm1zL2lucHV0cywgb3JcbiAgICAgKiB3aGVyZSB0aGUgdXNlciBkb2Vzbid0IHdhbnQgYSBkZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlci5cbiAgICAgKi9cbiAgICBXYXZlcy5hdHRhY2ggPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIC8vRlVUVVJFOiBhdXRvbWF0aWNhbGx5IGFkZCB3YXZlcyBjbGFzc2VzIGFuZCBhbGxvdyB1c2Vyc1xuICAgICAgICAvLyB0byBzcGVjaWZ5IHRoZW0gd2l0aCBhbiBvcHRpb25zIHBhcmFtPyBFZy4gbGlnaHQvY2xhc3NpYy9idXR0b25cbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBFZmZlY3Qud3JhcElucHV0KFtlbGVtZW50XSk7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5XYXZlcyA9IFdhdmVzO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBXYXZlcy5kaXNwbGF5RWZmZWN0KCk7XG4gICAgfSwgZmFsc2UpO1xuXG59KSh3aW5kb3cpO1xuO01hdGVyaWFsaXplLnRvYXN0ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGRpc3BsYXlMZW5ndGgsIGNsYXNzTmFtZSwgY29tcGxldGVDYWxsYmFjaykge1xuICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgXCJcIjtcblxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0LWNvbnRhaW5lcicpO1xuXG4gIC8vIENyZWF0ZSB0b2FzdCBjb250YWluZXIgaWYgaXQgZG9lcyBub3QgZXhpc3RcbiAgaWYgKGNvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgIC8vIGNyZWF0ZSBub3RpZmljYXRpb24gY29udGFpbmVyXG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmlkID0gJ3RvYXN0LWNvbnRhaW5lcic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgLy8gU2VsZWN0IGFuZCBhcHBlbmQgdG9hc3RcbiAgdmFyIG5ld1RvYXN0ID0gY3JlYXRlVG9hc3QobWVzc2FnZSk7XG5cbiAgLy8gb25seSBhcHBlbmQgdG9hc3QgaWYgbWVzc2FnZSBpcyBub3QgdW5kZWZpbmVkXG4gIGlmKG1lc3NhZ2Upe1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2FzdCk7XG4gIH1cblxuICBuZXdUb2FzdC5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAvLyBBbmltYXRlIHRvYXN0IGluXG4gIFZlbChuZXdUb2FzdCwge3RyYW5zbGF0ZVk6ICctMzVweCcsICBvcGFjaXR5OiAxIH0sIHtkdXJhdGlvbjogMzAwLFxuICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgcXVldWU6IGZhbHNlfSk7XG5cbiAgLy8gQWxsb3dzIHRpbWVyIHRvIGJlIHBhdXNlIHdoaWxlIGJlaW5nIHBhbm5lZFxuICB2YXIgdGltZUxlZnQgPSBkaXNwbGF5TGVuZ3RoO1xuICB2YXIgY291bnRlckludGVydmFsO1xuICBpZiAodGltZUxlZnQgIT0gbnVsbCkgIHtcbiAgICBjb3VudGVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCAoZnVuY3Rpb24oKXtcbiAgICAgIGlmIChuZXdUb2FzdC5wYXJlbnROb2RlID09PSBudWxsKVxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChjb3VudGVySW50ZXJ2YWwpO1xuXG4gICAgICAvLyBJZiB0b2FzdCBpcyBub3QgYmVpbmcgZHJhZ2dlZCwgZGVjcmVhc2UgaXRzIHRpbWUgcmVtYWluaW5nXG4gICAgICBpZiAoIW5ld1RvYXN0LmNsYXNzTGlzdC5jb250YWlucygncGFubmluZycpKSB7XG4gICAgICAgIHRpbWVMZWZ0IC09IDIwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAvLyBBbmltYXRlIHRvYXN0IG91dFxuICAgICAgICBWZWwobmV3VG9hc3QsIHtcIm9wYWNpdHlcIjogMCwgbWFyZ2luVG9wOiAnLTQwcHgnfSwgeyBkdXJhdGlvbjogMzc1LFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIC8vIENhbGwgdGhlIG9wdGlvbmFsIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmKHR5cGVvZihjb21wbGV0ZUNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRvYXN0IGFmdGVyIGl0IHRpbWVzIG91dFxuICAgICAgICAgICAgICB0aGlzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGNvdW50ZXJJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSwgMjApO1xuICB9XG5cblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvYXN0KGh0bWwpIHtcblxuICAgIC8vIENyZWF0ZSB0b2FzdFxuICAgIHZhciB0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3RvYXN0Jyk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGNvdW50ID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAvLyBJZiB0eXBlIG9mIHBhcmFtZXRlciBpcyBIVE1MIEVsZW1lbnRcbiAgICBpZiAoIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IGh0bWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IGh0bWwgJiYgdHlwZW9mIGh0bWwgPT09IFwib2JqZWN0XCIgJiYgaHRtbCAhPT0gbnVsbCAmJiBodG1sLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBodG1sLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuKSB7XG4gICAgICB0b2FzdC5hcHBlbmRDaGlsZChodG1sKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaHRtbCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgalF1ZXJ5IG9iamVjdFxuICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQoaHRtbFswXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gSW5zZXJ0IGFzIHRleHQ7XG4gICAgICB0b2FzdC5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbiAgICAvLyBCaW5kIGhhbW1lclxuICAgIHZhciBoYW1tZXJIYW5kbGVyID0gbmV3IEhhbW1lcih0b2FzdCwge3ByZXZlbnRfZGVmYXVsdDogZmFsc2V9KTtcbiAgICBoYW1tZXJIYW5kbGVyLm9uKCdwYW4nLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgZGVsdGFYID0gZS5kZWx0YVg7XG4gICAgICB2YXIgYWN0aXZhdGlvbkRpc3RhbmNlID0gODA7XG5cbiAgICAgIC8vIENoYW5nZSB0b2FzdCBzdGF0ZVxuICAgICAgaWYgKCF0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bhbm5pbmcnKSl7XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3Bhbm5pbmcnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wYWNpdHlQZXJjZW50ID0gMS1NYXRoLmFicyhkZWx0YVggLyBhY3RpdmF0aW9uRGlzdGFuY2UpO1xuICAgICAgaWYgKG9wYWNpdHlQZXJjZW50IDwgMClcbiAgICAgICAgb3BhY2l0eVBlcmNlbnQgPSAwO1xuXG4gICAgICBWZWwodG9hc3QsIHtsZWZ0OiBkZWx0YVgsIG9wYWNpdHk6IG9wYWNpdHlQZXJjZW50IH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG5cbiAgICB9KTtcblxuICAgIGhhbW1lckhhbmRsZXIub24oJ3BhbmVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICAgIHZhciBhY3RpdmF0aW9uRGlzdGFuY2UgPSA4MDtcblxuICAgICAgLy8gSWYgdG9hc3QgZHJhZ2dlZCBwYXN0IGFjdGl2YXRpb24gcG9pbnRcbiAgICAgIGlmIChNYXRoLmFicyhkZWx0YVgpID4gYWN0aXZhdGlvbkRpc3RhbmNlKSB7XG4gICAgICAgIFZlbCh0b2FzdCwge21hcmdpblRvcDogJy00MHB4J30sIHsgZHVyYXRpb246IDM3NSxcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG4gICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYodHlwZW9mKGNvbXBsZXRlQ2FsbGJhY2spID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9hc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2FzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LnJlbW92ZSgncGFubmluZycpO1xuICAgICAgICAvLyBQdXQgdG9hc3QgYmFjayBpbnRvIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIFZlbCh0b2FzdCwgeyBsZWZ0OiAwLCBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG4gICAgICAgICAgcXVldWU6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9hc3Q7XG4gIH1cbn07XG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgaW5pdCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbWVudVdpZHRoOiAzMDAsXG4gICAgICAgIGVkZ2U6ICdsZWZ0JyxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBtZW51SWQgPSAkdGhpcy5hdHRyKCdkYXRhLWFjdGl2YXRlcycpO1xuICAgICAgICB2YXIgbWVudSA9ICQoXCIjXCIrIG1lbnVJZCk7XG5cbiAgICAgICAgLy8gU2V0IHRvIHdpZHRoXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVXaWR0aCAhPSAzMDApIHtcbiAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB2YXIgJGRyYWdUYXJnZXQgPSAkKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJyArIG1lbnVJZCArICdcIl0nKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgLy8gUmVnZW5lcmF0ZSBkcmFnVGFyZ2V0XG4gICAgICAgICAgaWYgKCRkcmFnVGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyYWdUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGRyYWdUYXJnZXQgPSAkKCc8ZGl2IGNsYXNzPVwiZHJhZy10YXJnZXRcIj48L2Rpdj4nKS5hdHRyKCdkYXRhLXNpZGVuYXYnLCBtZW51SWQpO1xuICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGRyYWdUYXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcmFnVGFyZ2V0ID0gJCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PSAnbGVmdCcpIHtcbiAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyk7XG4gICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsnbGVmdCc6IDB9KTsgLy8gQWRkIFRvdWNoIEFyZWFcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZW51LmFkZENsYXNzKCdyaWdodC1hbGlnbmVkJykgLy8gQ2hhbmdlIHRleHQtYWxpZ25tZW50IHRvIHJpZ2h0XG4gICAgICAgICAgICAuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7J3JpZ2h0JzogMH0pOyAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZml4ZWQgc2lkZW5hdiwgYnJpbmcgbWVudSBvdXRcbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gV2luZG93IHJlc2l6ZSB0byByZXNldCBvbiBsYXJnZSBzY3JlZW5zIGZpeGVkXG4gICAgICAgIGlmIChtZW51Lmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvc2UgbWVudSBpZiB3aW5kb3cgaXMgcmVzaXplZCBiaWdnZXIgdGhhbiA5OTIgYW5kIHVzZXIgaGFzIGZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgaWYgKCQoJyNzaWRlbmF2LW92ZXJsYXknKS5sZW5ndGggIT09IDAgJiYgbWVudU91dCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnUodHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgICAgICAvLyBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1lbnVPdXQgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKC0xMDAlKScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgY2xvc2VPbkNsaWNrLCB0aGVuIGFkZCBjbG9zZSBldmVudCBmb3IgYWxsIGEgdGFncyBpbiBzaWRlIHNpZGVOYXZcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xvc2VPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgbWVudS5vbihcImNsaWNrLml0ZW1jbGlja1wiLCBcImE6bm90KC5jb2xsYXBzaWJsZS1oZWFkZXIpXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVtb3ZlTWVudSA9IGZ1bmN0aW9uKHJlc3RvcmVOYXYpIHtcbiAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgIC8vIFJlZW5hYmxlIHNjcm9sbGluZ1xuICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgd2lkdGg6ICcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkKCcjc2lkZW5hdi1vdmVybGF5JykudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7ZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gUmVzZXQgcGhhbnRvbSBkaXZcbiAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICcnLCByaWdodDogJycsIGxlZnQ6ICcwJ30pO1xuICAgICAgICAgICAgbWVudS52ZWxvY2l0eShcbiAgICAgICAgICAgICAgeyd0cmFuc2xhdGVYJzogJy0xMDAlJ30sXG4gICAgICAgICAgICAgIHsgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzdG9yZU5hdiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIEZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgICAgICAgbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXNldCBwaGFudG9tIGRpdlxuICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJycsIHJpZ2h0OiAnMCcsIGxlZnQ6ICcnfSk7XG4gICAgICAgICAgICBtZW51LnZlbG9jaXR5KFxuICAgICAgICAgICAgICB7J3RyYW5zbGF0ZVgnOiAnMTAwJSd9LFxuICAgICAgICAgICAgICB7IGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3RvcmVOYXYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBGaXhlZCBzaWRlbmF2XG4gICAgICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cblxuICAgICAgICAvLyBUb3VjaCBFdmVudFxuICAgICAgICB2YXIgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgbWVudU91dCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZSkge1xuICAgICAgICAgICRkcmFnVGFyZ2V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAobWVudU91dCkge1xuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkZHJhZ1RhcmdldC5oYW1tZXIoe1xuICAgICAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxuICAgICAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PSBcInRvdWNoXCIpIHtcblxuICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZS5nZXN0dXJlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuY2VudGVyLng7XG4gICAgICAgICAgICAgIHZhciB5ID0gZS5nZXN0dXJlLmNlbnRlci55O1xuICAgICAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcblxuICAgICAgICAgICAgICAvLyBEaXNhYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJyNzaWRlbmF2LW92ZXJsYXknKTtcbiAgICAgICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAkYm9keS53aWR0aChvbGRXaWR0aCk7XG5cbiAgICAgICAgICAgICAgLy8gSWYgb3ZlcmxheSBkb2VzIG5vdCBleGlzdCwgY3JlYXRlIG9uZSBhbmQgaWYgaXQgaXMgY2xpY2tlZCwgY2xvc2UgbWVudVxuICAgICAgICAgICAgICBpZiAoJG92ZXJsYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkuY3NzKCdvcGFjaXR5JywgMCkuY2xpY2soIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkb3ZlcmxheSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBLZWVwIHdpdGhpbiBib3VuZGFyaWVzXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGlmICh4ID4gb3B0aW9ucy5tZW51V2lkdGgpIHsgeCA9IG9wdGlvbnMubWVudVdpZHRoOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA8IDApIHsgeCA9IDA7IH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIC8vIExlZnQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHggPCAob3B0aW9ucy5tZW51V2lkdGggLyAyKSkgeyBtZW51T3V0ID0gZmFsc2U7IH1cbiAgICAgICAgICAgICAgICAvLyBSaWdodCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID49IChvcHRpb25zLm1lbnVXaWR0aCAvIDIpKSB7IG1lbnVPdXQgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAoeCAtIG9wdGlvbnMubWVudVdpZHRoKSArICdweCknKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh4IDwgKHdpbmRvdy5pbm5lcldpZHRoIC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKSkge1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPj0gKHdpbmRvdy5pbm5lcldpZHRoIC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKSkge1xuICAgICAgICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0UG9zID0gKHggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodFBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0UG9zID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIHJpZ2h0UG9zICsgJ3B4KScpO1xuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAvLyBQZXJjZW50YWdlIG92ZXJsYXlcbiAgICAgICAgICAgICAgdmFyIG92ZXJsYXlQZXJjO1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5UGVyYyA9IHggLyBvcHRpb25zLm1lbnVXaWR0aDtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogb3ZlcmxheVBlcmMgfSwge2R1cmF0aW9uOiAxMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5UGVyYyA9IE1hdGguYWJzKCh4IC0gd2luZG93LmlubmVyV2lkdGgpIC8gb3B0aW9ucy5tZW51V2lkdGgpO1xuICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiBvdmVybGF5UGVyYyB9LCB7ZHVyYXRpb246IDEwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KS5iaW5kKCdwYW5lbmQnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJyNzaWRlbmF2LW92ZXJsYXknKTtcbiAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XG4gICAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmNlbnRlci54O1xuICAgICAgICAgICAgICB2YXIgbGVmdFBvcyA9IHggLSBvcHRpb25zLm1lbnVXaWR0aDtcbiAgICAgICAgICAgICAgdmFyIHJpZ2h0UG9zID0geCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgaWYgKGxlZnRQb3MgPiAwICkge1xuICAgICAgICAgICAgICAgIGxlZnRQb3MgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyaWdodFBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICByaWdodFBvcyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIC8vIElmIHZlbG9jaXR5WCA8PSAwLjMgdGhlbiB0aGUgdXNlciBpcyBmbGluZ2luZyB0aGUgbWVudSBjbG9zZWQgc28gaWdub3JlIG1lbnVPdXRcbiAgICAgICAgICAgICAgICBpZiAoKG1lbnVPdXQgJiYgdmVsb2NpdHlYIDw9IDAuMykgfHwgdmVsb2NpdHlYIDwgLTAuNSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxuICAgICAgICAgICAgICAgICAgaWYgKGxlZnRQb3MgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbMCwgbGVmdFBvc119LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDEgfSwge2R1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogMCwgbGVmdDogJyd9KTtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbWVudU91dCB8fCB2ZWxvY2l0eVggPiAwLjMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAvLyBTbGlkZSBtZW51IGNsb3NlZFxuICAgICAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbLTEgKiBvcHRpb25zLm1lbnVXaWR0aCAtIDEwLCBsZWZ0UG9zXX0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDAgfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICcxMHB4JywgcmlnaHQ6ICcnLCBsZWZ0OiAwfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgobWVudU91dCAmJiB2ZWxvY2l0eVggPj0gLTAuMykgfHwgdmVsb2NpdHlYID4gMC41KSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gbWVudSB0byBvcGVuXG4gICAgICAgICAgICAgICAgICBpZiAocmlnaHRQb3MgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbMCwgcmlnaHRQb3NdfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAxIH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnNTAlJywgcmlnaHQ6ICcnLCBsZWZ0OiAwfSk7XG4gICAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIW1lbnVPdXQgfHwgdmVsb2NpdHlYIDwgLTAuMykge1xuICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcnXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgLy8gU2xpZGUgbWVudSBjbG9zZWRcbiAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogW29wdGlvbnMubWVudVdpZHRoICsgMTAsIHJpZ2h0UG9zXX0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDAgfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICcxMHB4JywgcmlnaHQ6IDAsIGxlZnQ6ICcnfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICR0aGlzLm9mZignY2xpY2suc2lkZW5hdicpLm9uKCdjbGljay5zaWRlbmF2JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKG1lbnVPdXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB2YXIgb2xkV2lkdGggPSAkYm9keS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgICAvLyBQdXNoIGN1cnJlbnQgZHJhZyB0YXJnZXQgb24gdG9wIG9mIERPTSB0cmVlXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRkcmFnVGFyZ2V0KTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogMCwgbGVmdDogJyd9KTtcbiAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbMCwgLTEgKiBvcHRpb25zLm1lbnVXaWR0aF19LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnNTAlJywgcmlnaHQ6ICcnLCBsZWZ0OiAwfSk7XG4gICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWzAsIG9wdGlvbnMubWVudVdpZHRoXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkb3ZlcmxheS5jc3MoJ29wYWNpdHknLCAwKVxuICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRvdmVybGF5KTtcbiAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG5cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkb3ZlcmxheSA9ICQoJyNzaWRlbmF2LW92ZXJsYXknKTtcbiAgICAgIHZhciAkZHJhZ1RhcmdldCA9ICQoJy5kcmFnLXRhcmdldFtkYXRhLXNpZGVuYXY9XCInICsgJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2YXRlcycpICsgJ1wiXScpO1xuICAgICAgJG92ZXJsYXkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICRkcmFnVGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgJCh0aGlzKS5vZmYoJ2NsaWNrJyk7XG4gICAgICAkb3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9LFxuICAgIHNob3cgOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snKTtcbiAgICB9LFxuICAgIGhpZGUgOiBmdW5jdGlvbigpIHtcbiAgICAgICQoJyNzaWRlbmF2LW92ZXJsYXknKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfTtcblxuXG4gICQuZm4uc2lkZU5hdiA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xuICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xuICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kT3JPcHRpb25zICkge1xuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5zaWRlTmF2JyApO1xuICAgIH1cbiAgfTsgLy8gUGx1Z2luIGVuZFxufSggalF1ZXJ5ICkpO1xuOy8qKlxuICogRXh0ZW5kIGpxdWVyeSB3aXRoIGEgc2Nyb2xsc3B5IHBsdWdpbi5cbiAqIFRoaXMgd2F0Y2hlcyB0aGUgd2luZG93IHNjcm9sbCBhbmQgZmlyZXMgZXZlbnRzIHdoZW4gZWxlbWVudHMgYXJlIHNjcm9sbGVkIGludG8gdmlld3BvcnQuXG4gKlxuICogdGhyb3R0bGUoKSBhbmQgZ2V0VGltZSgpIHRha2VuIGZyb20gVW5kZXJzY29yZS5qc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlXG4gKlxuICogQGF1dGhvciBDb3B5cmlnaHQgMjAxMyBKb2huIFNtYXJ0XG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL3RoZXNtYXJ0L2pxdWVyeS1zY3JvbGxzcHkvbWFzdGVyL0xJQ0VOU0VcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZXNtYXJ0XG4gKiBAdmVyc2lvbiAwLjEuMlxuICovXG4oZnVuY3Rpb24oJCkge1xuXG5cdHZhciBqV2luZG93ID0gJCh3aW5kb3cpO1xuXHR2YXIgZWxlbWVudHMgPSBbXTtcblx0dmFyIGVsZW1lbnRzSW5WaWV3ID0gW107XG5cdHZhciBpc1NweWluZyA9IGZhbHNlO1xuXHR2YXIgdGlja3MgPSAwO1xuXHR2YXIgdW5pcXVlX2lkID0gMTtcblx0dmFyIG9mZnNldCA9IHtcblx0XHR0b3AgOiAwLFxuXHRcdHJpZ2h0IDogMCxcblx0XHRib3R0b20gOiAwLFxuXHRcdGxlZnQgOiAwLFxuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgZWxlbWVudHMgdGhhdCBhcmUgd2l0aGluIHRoZSBib3VuZGFyeVxuXHQgKiBAcGFyYW0ge251bWJlcn0gdG9wXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSByaWdodFxuXHQgKiBAcGFyYW0ge251bWJlcn0gYm90dG9tXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0XG5cdCAqIEByZXR1cm4ge2pRdWVyeX1cdFx0QSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG5cdCAqL1xuXHRmdW5jdGlvbiBmaW5kRWxlbWVudHModG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSB7XG5cdFx0dmFyIGhpdHMgPSAkKCk7XG5cdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHRpZiAoZWxlbWVudC5oZWlnaHQoKSA+IDApIHtcblx0XHRcdFx0dmFyIGVsVG9wID0gZWxlbWVudC5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdFx0ZWxMZWZ0ID0gZWxlbWVudC5vZmZzZXQoKS5sZWZ0LFxuXHRcdFx0XHRcdGVsUmlnaHQgPSBlbExlZnQgKyBlbGVtZW50LndpZHRoKCksXG5cdFx0XHRcdFx0ZWxCb3R0b20gPSBlbFRvcCArIGVsZW1lbnQuaGVpZ2h0KCk7XG5cblx0XHRcdFx0dmFyIGlzSW50ZXJzZWN0ID0gIShlbExlZnQgPiByaWdodCB8fFxuXHRcdFx0XHRcdGVsUmlnaHQgPCBsZWZ0IHx8XG5cdFx0XHRcdFx0ZWxUb3AgPiBib3R0b20gfHxcblx0XHRcdFx0XHRlbEJvdHRvbSA8IHRvcCk7XG5cblx0XHRcdFx0aWYgKGlzSW50ZXJzZWN0KSB7XG5cdFx0XHRcdFx0aGl0cy5wdXNoKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gaGl0cztcblx0fVxuXG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgdGhlIHdpbmRvd1xuXHQgKi9cblx0ZnVuY3Rpb24gb25TY3JvbGwoc2Nyb2xsT2Zmc2V0KSB7XG5cdFx0Ly8gdW5pcXVlIHRpY2sgaWRcblx0XHQrK3RpY2tzO1xuXG5cdFx0Ly8gdmlld3BvcnQgcmVjdGFuZ2xlXG5cdFx0dmFyIHRvcCA9IGpXaW5kb3cuc2Nyb2xsVG9wKCksXG5cdFx0XHRsZWZ0ID0galdpbmRvdy5zY3JvbGxMZWZ0KCksXG5cdFx0XHRyaWdodCA9IGxlZnQgKyBqV2luZG93LndpZHRoKCksXG5cdFx0XHRib3R0b20gPSB0b3AgKyBqV2luZG93LmhlaWdodCgpO1xuXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoaWNoIGVsZW1lbnRzIGFyZSBpbiB2aWV3XG5cdFx0dmFyIGludGVyc2VjdGlvbnMgPSBmaW5kRWxlbWVudHModG9wK29mZnNldC50b3AgKyBzY3JvbGxPZmZzZXQgfHwgMjAwLCByaWdodCtvZmZzZXQucmlnaHQsIGJvdHRvbStvZmZzZXQuYm90dG9tLCBsZWZ0K29mZnNldC5sZWZ0KTtcblx0XHQkLmVhY2goaW50ZXJzZWN0aW9ucywgZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXG5cdFx0XHR2YXIgbGFzdFRpY2sgPSBlbGVtZW50LmRhdGEoJ3Njcm9sbFNweTp0aWNrcycpO1xuXHRcdFx0aWYgKHR5cGVvZiBsYXN0VGljayAhPSAnbnVtYmVyJykge1xuXHRcdFx0XHQvLyBlbnRlcmVkIGludG8gdmlld1xuXHRcdFx0XHRlbGVtZW50LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxTcHk6ZW50ZXInKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gdXBkYXRlIHRpY2sgaWRcblx0XHRcdGVsZW1lbnQuZGF0YSgnc2Nyb2xsU3B5OnRpY2tzJywgdGlja3MpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoaWNoIGVsZW1lbnRzIGFyZSBubyBsb25nZXIgaW4gdmlld1xuXHRcdCQuZWFjaChlbGVtZW50c0luVmlldywgZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0dmFyIGxhc3RUaWNrID0gZWxlbWVudC5kYXRhKCdzY3JvbGxTcHk6dGlja3MnKTtcblx0XHRcdGlmICh0eXBlb2YgbGFzdFRpY2sgPT0gJ251bWJlcicgJiYgbGFzdFRpY2sgIT09IHRpY2tzKSB7XG5cdFx0XHRcdC8vIGV4aXRlZCBmcm9tIHZpZXdcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VySGFuZGxlcignc2Nyb2xsU3B5OmV4aXQnKTtcblx0XHRcdFx0ZWxlbWVudC5kYXRhKCdzY3JvbGxTcHk6dGlja3MnLCBudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIHJlbWVtYmVyIGVsZW1lbnRzIGluIHZpZXcgZm9yIG5leHQgdGlja1xuXHRcdGVsZW1lbnRzSW5WaWV3ID0gaW50ZXJzZWN0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuXHQqL1xuXHRmdW5jdGlvbiBvbldpblNpemUoKSB7XG5cdFx0aldpbmRvdy50cmlnZ2VyKCdzY3JvbGxTcHk6d2luU2l6ZScpO1xuXHR9XG5cblxuXHQvKipcblx0ICogRW5hYmxlcyBTY3JvbGxTcHkgdXNpbmcgYSBzZWxlY3RvclxuXHQgKiBAcGFyYW0ge2pRdWVyeXxzdHJpbmd9IHNlbGVjdG9yICBUaGUgZWxlbWVudHMgY29sbGVjdGlvbiwgb3IgYSBzZWxlY3RvclxuXHQgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcdE9wdGlvbmFsLlxuICAgICAgICB0aHJvdHRsZSA6IG51bWJlciAtPiBzY3JvbGxzcHkgdGhyb3R0bGluZy4gRGVmYXVsdDogMTAwIG1zXG4gICAgICAgIG9mZnNldFRvcCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSB0b3AuIERlZmF1bHQ6IDBcbiAgICAgICAgb2Zmc2V0UmlnaHQgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gcmlnaHQuIERlZmF1bHQ6IDBcbiAgICAgICAgb2Zmc2V0Qm90dG9tIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIGJvdHRvbS4gRGVmYXVsdDogMFxuICAgICAgICBvZmZzZXRMZWZ0IDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIGxlZnQuIERlZmF1bHQ6IDBcblx0ICogQHJldHVybnMge2pRdWVyeX1cblx0ICovXG5cdCQuc2Nyb2xsU3B5ID0gZnVuY3Rpb24oc2VsZWN0b3IsIG9wdGlvbnMpIHtcblx0ICB2YXIgZGVmYXVsdHMgPSB7XG5cdFx0XHR0aHJvdHRsZTogMTAwLFxuXHRcdFx0c2Nyb2xsT2Zmc2V0OiAyMDAgLy8gb2Zmc2V0IC0gMjAwIGFsbG93cyBlbGVtZW50cyBuZWFyIGJvdHRvbSBvZiBwYWdlIHRvIHNjcm9sbFxuICAgIH07XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdHZhciB2aXNpYmxlID0gW107XG5cdFx0c2VsZWN0b3IgPSAkKHNlbGVjdG9yKTtcblx0XHRzZWxlY3Rvci5lYWNoKGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnRzLnB1c2goJChlbGVtZW50KSk7XG5cdFx0XHQkKGVsZW1lbnQpLmRhdGEoXCJzY3JvbGxTcHk6aWRcIiwgaSk7XG5cdFx0XHQvLyBTbW9vdGggc2Nyb2xsIHRvIHNlY3Rpb25cblx0XHQgICQoJ2FbaHJlZj1cIiMnICsgJChlbGVtZW50KS5hdHRyKCdpZCcpICsgJ1wiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHQgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCAgICB2YXIgb2Zmc2V0ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpLm9mZnNldCgpLnRvcCArIDE7XG5cdCAgICBcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBvZmZzZXQgLSBvcHRpb25zLnNjcm9sbE9mZnNldCB9LCB7ZHVyYXRpb246IDQwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnfSk7XG5cdFx0ICB9KTtcblx0XHR9KTtcblxuXHRcdG9mZnNldC50b3AgPSBvcHRpb25zLm9mZnNldFRvcCB8fCAwO1xuXHRcdG9mZnNldC5yaWdodCA9IG9wdGlvbnMub2Zmc2V0UmlnaHQgfHwgMDtcblx0XHRvZmZzZXQuYm90dG9tID0gb3B0aW9ucy5vZmZzZXRCb3R0b20gfHwgMDtcblx0XHRvZmZzZXQubGVmdCA9IG9wdGlvbnMub2Zmc2V0TGVmdCB8fCAwO1xuXG5cdFx0dmFyIHRocm90dGxlZFNjcm9sbCA9IE1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCkge1xuXHRcdFx0b25TY3JvbGwob3B0aW9ucy5zY3JvbGxPZmZzZXQpO1xuXHRcdH0sIG9wdGlvbnMudGhyb3R0bGUgfHwgMTAwKTtcblx0XHR2YXIgcmVhZHlTY3JvbGwgPSBmdW5jdGlvbigpe1xuXHRcdFx0JChkb2N1bWVudCkucmVhZHkodGhyb3R0bGVkU2Nyb2xsKTtcblx0XHR9O1xuXG5cdFx0aWYgKCFpc1NweWluZykge1xuXHRcdFx0aldpbmRvdy5vbignc2Nyb2xsJywgcmVhZHlTY3JvbGwpO1xuXHRcdFx0aldpbmRvdy5vbigncmVzaXplJywgcmVhZHlTY3JvbGwpO1xuXHRcdFx0aXNTcHlpbmcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIHBlcmZvcm0gYSBzY2FuIG9uY2UsIGFmdGVyIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQsIGFuZCBhZnRlciBkb20gaXMgcmVhZHlcblx0XHRzZXRUaW1lb3V0KHJlYWR5U2Nyb2xsLCAwKTtcblxuXG5cdFx0c2VsZWN0b3Iub24oJ3Njcm9sbFNweTplbnRlcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmlzaWJsZSA9ICQuZ3JlcCh2aXNpYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcblx0ICAgIH0pO1xuXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRpZiAodmlzaWJsZVswXSkge1xuXHRcdFx0XHQkKCdhW2hyZWY9XCIjJyArIHZpc2libGVbMF0uYXR0cignaWQnKSArICdcIl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGlmICgkdGhpcy5kYXRhKCdzY3JvbGxTcHk6aWQnKSA8IHZpc2libGVbMF0uZGF0YSgnc2Nyb2xsU3B5OmlkJykpIHtcblx0XHRcdFx0XHR2aXNpYmxlLnVuc2hpZnQoJCh0aGlzKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dmlzaWJsZS5wdXNoKCQodGhpcykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dmlzaWJsZS5wdXNoKCQodGhpcykpO1xuXHRcdFx0fVxuXG5cblx0XHRcdCQoJ2FbaHJlZj1cIiMnICsgdmlzaWJsZVswXS5hdHRyKCdpZCcpICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHR9KTtcblx0XHRzZWxlY3Rvci5vbignc2Nyb2xsU3B5OmV4aXQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHZpc2libGUgPSAkLmdyZXAodmlzaWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcblx0ICAgICAgcmV0dXJuIHZhbHVlLmhlaWdodCgpICE9IDA7XG5cdCAgICB9KTtcblxuXHRcdFx0aWYgKHZpc2libGVbMF0pIHtcblx0XHRcdFx0JCgnYVtocmVmPVwiIycgKyB2aXNpYmxlWzBdLmF0dHIoJ2lkJykgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0XHR2aXNpYmxlID0gJC5ncmVwKHZpc2libGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdCAgICAgICAgcmV0dXJuIHZhbHVlLmF0dHIoJ2lkJykgIT0gJHRoaXMuYXR0cignaWQnKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGlmICh2aXNpYmxlWzBdKSB7IC8vIENoZWNrIGlmIGVtcHR5XG5cdFx0XHRcdFx0JCgnYVtocmVmPVwiIycgKyB2aXNpYmxlWzBdLmF0dHIoJ2lkJykgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHQgICAgICB9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gc2VsZWN0b3I7XG5cdH07XG5cblx0LyoqXG5cdCAqIExpc3RlbiBmb3Igd2luZG93IHJlc2l6ZSBldmVudHNcblx0ICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXHRcdFx0XHRcdFx0T3B0aW9uYWwuIFNldCB7IHRocm90dGxlOiBudW1iZXIgfSB0byBjaGFuZ2UgdGhyb3R0bGluZy4gRGVmYXVsdDogMTAwIG1zXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl9XHRcdCQod2luZG93KVxuXHQgKi9cblx0JC53aW5TaXplU3B5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdCQud2luU2l6ZVNweSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4galdpbmRvdzsgfTsgLy8gbG9jayBmcm9tIG11bHRpcGxlIGNhbGxzXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuXHRcdFx0dGhyb3R0bGU6IDEwMFxuXHRcdH07XG5cdFx0cmV0dXJuIGpXaW5kb3cub24oJ3Jlc2l6ZScsIE1hdGVyaWFsaXplLnRocm90dGxlKG9uV2luU2l6ZSwgb3B0aW9ucy50aHJvdHRsZSB8fCAxMDApKTtcblx0fTtcblxuXHQvKipcblx0ICogRW5hYmxlcyBTY3JvbGxTcHkgb24gYSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG5cdCAqIGUuZy4gJCgnLnNjcm9sbFNweScpLnNjcm9sbFNweSgpXG5cdCAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1x0T3B0aW9uYWwuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhyb3R0bGUgOiBudW1iZXIgLT4gc2Nyb2xsc3B5IHRocm90dGxpbmcuIERlZmF1bHQ6IDEwMCBtc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldFRvcCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSB0b3AuIERlZmF1bHQ6IDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXRSaWdodCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSByaWdodC4gRGVmYXVsdDogMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldEJvdHRvbSA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSBib3R0b20uIERlZmF1bHQ6IDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXRMZWZ0IDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIGxlZnQuIERlZmF1bHQ6IDBcblx0ICogQHJldHVybnMge2pRdWVyeX1cblx0ICovXG5cdCQuZm4uc2Nyb2xsU3B5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdHJldHVybiAkLnNjcm9sbFNweSgkKHRoaXMpLCBvcHRpb25zKTtcblx0fTtcblxufSkoalF1ZXJ5KTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgbGFiZWxzIG9mIHRleHQgZmllbGRzXG4gICAgTWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGlucHV0X3NlbGVjdG9yID0gJ2lucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYSc7XG4gICAgICAkKGlucHV0X3NlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIGlmICgkKGVsZW1lbnQpLnZhbCgpLmxlbmd0aCA+IDAgfHwgZWxlbWVudC5hdXRvZm9jdXMgfHwgJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKCQoZWxlbWVudClbMF0udmFsaWRpdHkpIHtcbiAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnbGFiZWwnKS50b2dnbGVDbGFzcygnYWN0aXZlJywgJChlbGVtZW50KVswXS52YWxpZGl0eS5iYWRJbnB1dCA9PT0gdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gVGV4dCBiYXNlZCBpbnB1dHNcbiAgICB2YXIgaW5wdXRfc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhJztcblxuICAgIC8vIEFkZCBhY3RpdmUgaWYgZm9ybSBhdXRvIGNvbXBsZXRlXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCAhPT0gMCB8fCAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIHZhbGlkYXRlX2ZpZWxkKCQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBpbnB1dCBlbGVtZW50IGhhcyBiZWVuIHByZS1wb3B1bGF0ZWQgb24gZG9jdW1lbnQgcmVhZHlcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIE1hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9KTtcblxuICAgIC8vIEhUTUwgRE9NIEZPUk0gUkVTRVQgaGFuZGxpbmdcbiAgICAkKGRvY3VtZW50KS5vbigncmVzZXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgZm9ybVJlc2V0ID0gJChlLnRhcmdldCk7XG4gICAgICBpZiAoZm9ybVJlc2V0LmlzKCdmb3JtJykpIHtcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoaW5wdXRfc2VsZWN0b3IpLnJlbW92ZUNsYXNzKCd2YWxpZCcpLnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgIGZvcm1SZXNldC5maW5kKGlucHV0X3NlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCd2YWx1ZScpID09PSAnJykge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNldCBzZWxlY3RcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoJ3NlbGVjdC5pbml0aWFsaXplZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciByZXNldF90ZXh0ID0gZm9ybVJlc2V0LmZpbmQoJ29wdGlvbltzZWxlY3RlZF0nKS50ZXh0KCk7XG4gICAgICAgICAgZm9ybVJlc2V0LnNpYmxpbmdzKCdpbnB1dC5zZWxlY3QtZHJvcGRvd24nKS52YWwocmVzZXRfdGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFjdGl2ZSB3aGVuIGVsZW1lbnQgaGFzIGZvY3VzXG4gICAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgaW5wdXRfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsLCAucHJlZml4JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2JsdXInLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRpbnB1dEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgdmFyIHNlbGVjdG9yID0gXCIucHJlZml4XCI7XG5cbiAgICAgIGlmICgkaW5wdXRFbGVtZW50LnZhbCgpLmxlbmd0aCA9PT0gMCAmJiAkaW5wdXRFbGVtZW50WzBdLnZhbGlkaXR5LmJhZElucHV0ICE9PSB0cnVlICYmICRpbnB1dEVsZW1lbnQuYXR0cigncGxhY2Vob2xkZXInKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlbGVjdG9yICs9IFwiLCBsYWJlbFwiO1xuICAgICAgfVxuXG4gICAgICAkaW5wdXRFbGVtZW50LnNpYmxpbmdzKHNlbGVjdG9yKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIHZhbGlkYXRlX2ZpZWxkKCRpbnB1dEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LnZhbGlkYXRlX2ZpZWxkID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICB2YXIgaGFzTGVuZ3RoID0gb2JqZWN0LmF0dHIoJ2RhdGEtbGVuZ3RoJykgIT09IHVuZGVmaW5lZDtcbiAgICAgIHZhciBsZW5BdHRyID0gcGFyc2VJbnQob2JqZWN0LmF0dHIoJ2RhdGEtbGVuZ3RoJykpO1xuICAgICAgdmFyIGxlbiA9IG9iamVjdC52YWwoKS5sZW5ndGg7XG5cbiAgICAgIGlmIChvYmplY3QudmFsKCkubGVuZ3RoID09PSAwICYmIG9iamVjdFswXS52YWxpZGl0eS5iYWRJbnB1dCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygndmFsaWRhdGUnKSkge1xuICAgICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ3ZhbGlkYXRlJykpIHtcbiAgICAgICAgICAvLyBDaGVjayBmb3IgY2hhcmFjdGVyIGNvdW50ZXIgYXR0cmlidXRlc1xuICAgICAgICAgIGlmICgob2JqZWN0LmlzKCc6dmFsaWQnKSAmJiBoYXNMZW5ndGggJiYgKGxlbiA8PSBsZW5BdHRyKSkgfHwgKG9iamVjdC5pcygnOnZhbGlkJykgJiYgIWhhc0xlbmd0aCkpIHtcbiAgICAgICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICAgICAgb2JqZWN0LmFkZENsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSYWRpbyBhbmQgQ2hlY2tib3ggZm9jdXMgY2xhc3NcbiAgICB2YXIgcmFkaW9fY2hlY2tib3ggPSAnaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hdJztcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAucmFkaW8nLCByYWRpb19jaGVja2JveCwgZnVuY3Rpb24oZSkge1xuICAgICAgLy8gVEFCLCBjaGVjayBpZiB0YWJiaW5nIHRvIHJhZGlvIG9yIGNoZWNrYm94LlxuICAgICAgaWYgKGUud2hpY2ggPT09IDkpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGFiYmVkJyk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLm9uZSgnYmx1cicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RhYmJlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVGV4dGFyZWEgQXV0byBSZXNpemVcbiAgICB2YXIgaGlkZGVuRGl2ID0gJCgnLmhpZGRlbmRpdicpLmZpcnN0KCk7XG4gICAgaWYgKCFoaWRkZW5EaXYubGVuZ3RoKSB7XG4gICAgICBoaWRkZW5EaXYgPSAkKCc8ZGl2IGNsYXNzPVwiaGlkZGVuZGl2IGNvbW1vblwiPjwvZGl2PicpO1xuICAgICAgJCgnYm9keScpLmFwcGVuZChoaWRkZW5EaXYpO1xuICAgIH1cbiAgICB2YXIgdGV4dF9hcmVhX3NlbGVjdG9yID0gJy5tYXRlcmlhbGl6ZS10ZXh0YXJlYSc7XG5cbiAgICBmdW5jdGlvbiB0ZXh0YXJlYUF1dG9SZXNpemUoJHRleHRhcmVhKSB7XG4gICAgICAvLyBTZXQgZm9udCBwcm9wZXJ0aWVzIG9mIGhpZGRlbkRpdlxuXG4gICAgICB2YXIgZm9udEZhbWlseSA9ICR0ZXh0YXJlYS5jc3MoJ2ZvbnQtZmFtaWx5Jyk7XG4gICAgICB2YXIgZm9udFNpemUgPSAkdGV4dGFyZWEuY3NzKCdmb250LXNpemUnKTtcbiAgICAgIHZhciBsaW5lSGVpZ2h0ID0gJHRleHRhcmVhLmNzcygnbGluZS1oZWlnaHQnKTtcblxuICAgICAgaWYgKGZvbnRTaXplKSB7IGhpZGRlbkRpdi5jc3MoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKTsgfVxuICAgICAgaWYgKGZvbnRGYW1pbHkpIHsgaGlkZGVuRGl2LmNzcygnZm9udC1mYW1pbHknLCBmb250RmFtaWx5KTsgfVxuICAgICAgaWYgKGxpbmVIZWlnaHQpIHsgaGlkZGVuRGl2LmNzcygnbGluZS1oZWlnaHQnLCBsaW5lSGVpZ2h0KTsgfVxuXG4gICAgICBpZiAoJHRleHRhcmVhLmF0dHIoJ3dyYXAnKSA9PT0gXCJvZmZcIikge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCdvdmVyZmxvdy13cmFwJywgXCJub3JtYWxcIilcbiAgICAgICAgICAgICAgICAgLmNzcygnd2hpdGUtc3BhY2UnLCBcInByZVwiKTtcbiAgICAgIH1cblxuICAgICAgaGlkZGVuRGl2LnRleHQoJHRleHRhcmVhLnZhbCgpICsgJ1xcbicpO1xuICAgICAgdmFyIGNvbnRlbnQgPSBoaWRkZW5EaXYuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpO1xuICAgICAgaGlkZGVuRGl2Lmh0bWwoY29udGVudCk7XG5cblxuICAgICAgLy8gV2hlbiB0ZXh0YXJlYSBpcyBoaWRkZW4sIHdpZHRoIGdvZXMgY3JhenkuXG4gICAgICAvLyBBcHByb3hpbWF0ZSB3aXRoIGhhbGYgb2Ygd2luZG93IHNpemVcblxuICAgICAgaWYgKCR0ZXh0YXJlYS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCd3aWR0aCcsICR0ZXh0YXJlYS53aWR0aCgpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCd3aWR0aCcsICQod2luZG93KS53aWR0aCgpLzIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2l6ZSBpZiB0aGUgbmV3IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gdGhlXG4gICAgICAgKiBvcmlnaW5hbCBoZWlnaHQgb2YgdGhlIHRleHRhcmVhXG4gICAgICAgKi9cbiAgICAgIGlmICgkdGV4dGFyZWEuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiKSA8PSBoaWRkZW5EaXYuaGVpZ2h0KCkpIHtcbiAgICAgICAgJHRleHRhcmVhLmNzcygnaGVpZ2h0JywgaGlkZGVuRGl2LmhlaWdodCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoJHRleHRhcmVhLnZhbCgpLmxlbmd0aCA8ICR0ZXh0YXJlYS5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbiBjYXNlIHRoZSBuZXcgaGVpZ2h0IGlzIGxlc3MgdGhhbiBvcmlnaW5hbCBoZWlnaHQsIGl0XG4gICAgICAgICAqIG1lYW5zIHRoZSB0ZXh0YXJlYSBoYXMgbGVzcyB0ZXh0IHRoYW4gYmVmb3JlXG4gICAgICAgICAqIFNvIHdlIHNldCB0aGUgaGVpZ2h0IHRvIHRoZSBvcmlnaW5hbCBvbmVcbiAgICAgICAgICovXG4gICAgICAgICR0ZXh0YXJlYS5jc3MoJ2hlaWdodCcsICR0ZXh0YXJlYS5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIpKTtcbiAgICAgIH1cbiAgICAgICR0ZXh0YXJlYS5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIsICR0ZXh0YXJlYS52YWwoKS5sZW5ndGgpO1xuICAgIH1cblxuICAgICQodGV4dF9hcmVhX3NlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGV4dGFyZWEgPSAkKHRoaXMpO1xuICAgICAgLyoqXG4gICAgICAgKiBJbnN0ZWFkIG9mIHJlc2l6aW5nIHRleHRhcmVhIG9uIGRvY3VtZW50IGxvYWQsXG4gICAgICAgKiBzdG9yZSB0aGUgb3JpZ2luYWwgaGVpZ2h0IGFuZCB0aGUgb3JpZ2luYWwgbGVuZ3RoXG4gICAgICAgKi9cbiAgICAgICR0ZXh0YXJlYS5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIsICR0ZXh0YXJlYS5oZWlnaHQoKSk7XG4gICAgICAkdGV4dGFyZWEuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiLCAkdGV4dGFyZWEudmFsKCkubGVuZ3RoKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbigna2V5dXAga2V5ZG93biBhdXRvcmVzaXplJywgdGV4dF9hcmVhX3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0ZXh0YXJlYUF1dG9SZXNpemUoJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAvLyBGaWxlIElucHV0IFBhdGhcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5maWxlLWZpZWxkIGlucHV0W3R5cGU9XCJmaWxlXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZpbGVfZmllbGQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5maWxlLWZpZWxkJyk7XG4gICAgICB2YXIgcGF0aF9pbnB1dCA9IGZpbGVfZmllbGQuZmluZCgnaW5wdXQuZmlsZS1wYXRoJyk7XG4gICAgICB2YXIgZmlsZXMgICAgICA9ICQodGhpcylbMF0uZmlsZXM7XG4gICAgICB2YXIgZmlsZV9uYW1lcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxlX25hbWVzLnB1c2goZmlsZXNbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBwYXRoX2lucHV0LnZhbChmaWxlX25hbWVzLmpvaW4oXCIsIFwiKSk7XG4gICAgICBwYXRoX2lucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuXG4gICAgLyoqKioqKioqKioqKioqKipcbiAgICAqICBSYW5nZSBJbnB1dCAgKlxuICAgICoqKioqKioqKioqKioqKiovXG5cbiAgICB2YXIgcmFuZ2VfdHlwZSA9ICdpbnB1dFt0eXBlPXJhbmdlXSc7XG4gICAgdmFyIHJhbmdlX21vdXNlZG93biA9IGZhbHNlO1xuICAgIHZhciBsZWZ0O1xuXG4gICAgJChyYW5nZV90eXBlKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aHVtYiA9ICQoJzxzcGFuIGNsYXNzPVwidGh1bWJcIj48c3BhbiBjbGFzcz1cInZhbHVlXCI+PC9zcGFuPjwvc3Bhbj4nKTtcbiAgICAgICQodGhpcykuYWZ0ZXIodGh1bWIpO1xuICAgIH0pO1xuXG4gICAgdmFyIHNob3dSYW5nZUJ1YmJsZSA9IGZ1bmN0aW9uKHRodW1iKSB7XG4gICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUludCh0aHVtYi5wYXJlbnQoKS5jc3MoJ3BhZGRpbmctbGVmdCcpKTtcbiAgICAgIHZhciBtYXJnaW5MZWZ0ID0gKC03ICsgcGFkZGluZ0xlZnQpICsgJ3B4JztcbiAgICAgIHRodW1iLnZlbG9jaXR5KHsgaGVpZ2h0OiBcIjMwcHhcIiwgd2lkdGg6IFwiMzBweFwiLCB0b3A6IFwiLTMwcHhcIiwgbWFyZ2luTGVmdDogbWFyZ2luTGVmdH0sIHsgZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZU91dEV4cG8nIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY2FsY1JhbmdlT2Zmc2V0ID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICAgIHZhciB3aWR0aCA9IHJhbmdlLndpZHRoKCkgLSAxNTtcbiAgICAgIHZhciBtYXggPSBwYXJzZUZsb2F0KHJhbmdlLmF0dHIoJ21heCcpKTtcbiAgICAgIHZhciBtaW4gPSBwYXJzZUZsb2F0KHJhbmdlLmF0dHIoJ21pbicpKTtcbiAgICAgIHZhciBwZXJjZW50ID0gKHBhcnNlRmxvYXQocmFuZ2UudmFsKCkpIC0gbWluKSAvIChtYXggLSBtaW4pO1xuICAgICAgcmV0dXJuIHBlcmNlbnQgKiB3aWR0aDtcbiAgICB9XG5cbiAgICB2YXIgcmFuZ2Vfd3JhcHBlciA9ICcucmFuZ2UtZmllbGQnO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCByYW5nZV90eXBlLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLnNpYmxpbmdzKCcudGh1bWInKTtcbiAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwoJCh0aGlzKS52YWwoKSk7XG5cbiAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHNob3dSYW5nZUJ1YmJsZSh0aHVtYik7XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY2FsY1JhbmdlT2Zmc2V0KCQodGhpcykpO1xuICAgICAgdGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIG9mZnNldExlZnQpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlZG93biB0b3VjaHN0YXJ0JywgcmFuZ2VfdHlwZSwgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5zaWJsaW5ncygnLnRodW1iJyk7XG5cbiAgICAgIC8vIElmIHRodW1iIGluZGljYXRvciBkb2VzIG5vdCBleGlzdCB5ZXQsIGNyZWF0ZSBpdFxuICAgICAgaWYgKHRodW1iLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHRodW1iID0gJCgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpO1xuICAgICAgICAkKHRoaXMpLmFmdGVyKHRodW1iKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGluZGljYXRvciB2YWx1ZVxuICAgICAgdGh1bWIuZmluZCgnLnZhbHVlJykuaHRtbCgkKHRoaXMpLnZhbCgpKTtcblxuICAgICAgcmFuZ2VfbW91c2Vkb3duID0gdHJ1ZTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICBpZiAoIXRodW1iLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBzaG93UmFuZ2VCdWJibGUodGh1bWIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50eXBlICE9PSAnaW5wdXQnKSB7XG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY2FsY1JhbmdlT2Zmc2V0KCQodGhpcykpO1xuICAgICAgICB0aHVtYi5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbW91c2V1cCB0b3VjaGVuZCcsIHJhbmdlX3dyYXBwZXIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmFuZ2VfbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdpbnB1dCBtb3VzZW1vdmUgdG91Y2htb3ZlJywgcmFuZ2Vfd3JhcHBlciwgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5jaGlsZHJlbignLnRodW1iJyk7XG4gICAgICB2YXIgbGVmdDtcbiAgICAgIHZhciBpbnB1dCA9ICQodGhpcykuZmluZChyYW5nZV90eXBlKTtcblxuICAgICAgaWYgKHJhbmdlX21vdXNlZG93bikge1xuICAgICAgICBpZiAoIXRodW1iLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHNob3dSYW5nZUJ1YmJsZSh0aHVtYik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGNhbGNSYW5nZU9mZnNldChpbnB1dCk7XG4gICAgICAgIHRodW1iLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0KTtcbiAgICAgICAgdGh1bWIuZmluZCgnLnZhbHVlJykuaHRtbCh0aHVtYi5zaWJsaW5ncyhyYW5nZV90eXBlKS52YWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VvdXQgdG91Y2hsZWF2ZScsIHJhbmdlX3dyYXBwZXIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFyYW5nZV9tb3VzZWRvd24pIHtcblxuICAgICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLmNoaWxkcmVuKCcudGh1bWInKTtcbiAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3BhZGRpbmctbGVmdCcpKTtcbiAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSAoNyArIHBhZGRpbmdMZWZ0KSArICdweCc7XG5cbiAgICAgICAgaWYgKHRodW1iLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHRodW1iLnZlbG9jaXR5KHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIHRvcDogJzEwcHgnLCBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0fSwgeyBkdXJhdGlvbjogMTAwIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRodW1iLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIEF1dG8gY29tcGxldGUgcGx1Z2luICAqXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgJC5mbi5hdXRvY29tcGxldGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgLy8gRGVmYXVsdHNcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGxpbWl0OiBJbmZpbml0eSxcbiAgICAgICAgb25BdXRvY29tcGxldGU6IG51bGwsXG4gICAgICAgIG1pbkxlbmd0aDogMVxuICAgICAgfTtcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhLFxuICAgICAgICAgICAgY291bnQgPSAwLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSAtMSxcbiAgICAgICAgICAgIG9sZFZhbCxcbiAgICAgICAgICAgICRpbnB1dERpdiA9ICRpbnB1dC5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKTsgLy8gRGl2IHRvIGFwcGVuZCBvblxuXG4gICAgICAgIC8vIENoZWNrIGlmIGRhdGEgaXNuJ3QgZW1wdHlcbiAgICAgICAgaWYgKCEkLmlzRW1wdHlPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICB2YXIgJGF1dG9jb21wbGV0ZSA9ICQoJzx1bCBjbGFzcz1cImF1dG9jb21wbGV0ZS1jb250ZW50IGRyb3Bkb3duLWNvbnRlbnRcIj48L3VsPicpO1xuICAgICAgICAgIHZhciAkb2xkQXV0b2NvbXBsZXRlO1xuXG4gICAgICAgICAgLy8gQXBwZW5kIGF1dG9jb21wbGV0ZSBlbGVtZW50LlxuICAgICAgICAgIC8vIFByZXZlbnQgZG91YmxlIHN0cnVjdHVyZSBpbml0LlxuICAgICAgICAgIGlmICgkaW5wdXREaXYubGVuZ3RoKSB7XG4gICAgICAgICAgICAkb2xkQXV0b2NvbXBsZXRlID0gJGlucHV0RGl2LmNoaWxkcmVuKCcuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudCcpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoISRvbGRBdXRvY29tcGxldGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICRpbnB1dERpdi5hcHBlbmQoJGF1dG9jb21wbGV0ZSk7IC8vIFNldCB1bCBpbiBib2R5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRvbGRBdXRvY29tcGxldGUgPSAkaW5wdXQubmV4dCgnLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgICAgIGlmICghJG9sZEF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgJGlucHV0LmFmdGVyKCRhdXRvY29tcGxldGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJG9sZEF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICRhdXRvY29tcGxldGUgPSAkb2xkQXV0b2NvbXBsZXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhpZ2hsaWdodCBwYXJ0aWFsIG1hdGNoLlxuICAgICAgICAgIHZhciBoaWdobGlnaHQgPSBmdW5jdGlvbihzdHJpbmcsICRlbCkge1xuICAgICAgICAgICAgdmFyIGltZyA9ICRlbC5maW5kKCdpbWcnKTtcbiAgICAgICAgICAgIHZhciBtYXRjaFN0YXJ0ID0gJGVsLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJcIiArIHN0cmluZy50b0xvd2VyQ2FzZSgpICsgXCJcIiksXG4gICAgICAgICAgICAgICAgbWF0Y2hFbmQgPSBtYXRjaFN0YXJ0ICsgc3RyaW5nLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgYmVmb3JlTWF0Y2ggPSAkZWwudGV4dCgpLnNsaWNlKDAsIG1hdGNoU3RhcnQpLFxuICAgICAgICAgICAgICAgIG1hdGNoVGV4dCA9ICRlbC50ZXh0KCkuc2xpY2UobWF0Y2hTdGFydCwgbWF0Y2hFbmQgKyAxKSxcbiAgICAgICAgICAgICAgICBhZnRlck1hdGNoID0gJGVsLnRleHQoKS5zbGljZShtYXRjaEVuZCArIDEpO1xuICAgICAgICAgICAgJGVsLmh0bWwoXCI8c3Bhbj5cIiArIGJlZm9yZU1hdGNoICsgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5cIiArIG1hdGNoVGV4dCArIFwiPC9zcGFuPlwiICsgYWZ0ZXJNYXRjaCArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgICAgIGlmIChpbWcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICRlbC5wcmVwZW5kKGltZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFJlc2V0IGN1cnJlbnQgZWxlbWVudCBwb3NpdGlvblxuICAgICAgICAgIHZhciByZXNldEN1cnJlbnRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IC0xO1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSBhdXRvY29tcGxldGUgZWxlbWVudHNcbiAgICAgICAgICB2YXIgcmVtb3ZlQXV0b2NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkYXV0b2NvbXBsZXRlLmVtcHR5KCk7XG4gICAgICAgICAgICByZXNldEN1cnJlbnRFbGVtZW50KCk7XG4gICAgICAgICAgICBvbGRWYWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgICRpbnB1dC5vZmYoJ2JsdXIuYXV0b2NvbXBsZXRlJykub24oJ2JsdXIuYXV0b2NvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVBdXRvY29tcGxldGUoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFBlcmZvcm0gc2VhcmNoXG4gICAgICAgICAgJGlucHV0Lm9mZigna2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZScpLm9uKCdrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGNvdW50LlxuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIHZhbCA9ICRpbnB1dC52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAvLyBEb24ndCBjYXB0dXJlIGVudGVyIG9yIGFycm93IGtleSB1c2FnZS5cbiAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMyB8fFxuICAgICAgICAgICAgICAgIGUud2hpY2ggPT09IDM4IHx8XG4gICAgICAgICAgICAgICAgZS53aGljaCA9PT0gNDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBpbnB1dCBpc24ndCBlbXB0eVxuICAgICAgICAgICAgaWYgKG9sZFZhbCAhPT0gdmFsKSB7XG4gICAgICAgICAgICAgIHJlbW92ZUF1dG9jb21wbGV0ZSgpO1xuXG4gICAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoID49IG9wdGlvbnMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgIGtleS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKSAhPT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEJyZWFrIGlmIHBhc3QgbGltaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IG9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGVPcHRpb24gPSAkKCc8bGk+PC9saT4nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhZGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlT3B0aW9uLmFwcGVuZCgnPGltZyBzcmM9XCInKyBkYXRhW2tleV0gKydcIiBjbGFzcz1cInJpZ2h0IGNpcmNsZVwiPjxzcGFuPicrIGtleSArJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVPcHRpb24uYXBwZW5kKCc8c3Bhbj4nKyBrZXkgKyc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAkYXV0b2NvbXBsZXRlLmFwcGVuZChhdXRvY29tcGxldGVPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQodmFsLCBhdXRvY29tcGxldGVPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgb2xkVmFsXG4gICAgICAgICAgICBvbGRWYWwgPSB2YWw7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkaW5wdXQub2ZmKCdrZXlkb3duLmF1dG9jb21wbGV0ZScpLm9uKCdrZXlkb3duLmF1dG9jb21wbGV0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBBcnJvdyBrZXlzIGFuZCBlbnRlciBrZXkgdXNhZ2VcbiAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZS53aGljaCxcbiAgICAgICAgICAgICAgICBsaUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbnVtSXRlbXMgPSAkYXV0b2NvbXBsZXRlLmNoaWxkcmVuKCdsaScpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAkYWN0aXZlID0gJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignLmFjdGl2ZScpLmZpcnN0KCk7XG5cbiAgICAgICAgICAgIC8vIHNlbGVjdCBlbGVtZW50IG9uIEVudGVyXG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMTMgJiYgYWN0aXZlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICBsaUVsZW1lbnQgPSAkYXV0b2NvbXBsZXRlLmNoaWxkcmVuKCdsaScpLmVxKGFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgaWYgKGxpRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsaUVsZW1lbnQudHJpZ2dlcignbW91c2Vkb3duLmF1dG9jb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcHR1cmUgdXAgYW5kIGRvd24ga2V5XG4gICAgICAgICAgICBpZiAoIGtleUNvZGUgPT09IDM4IHx8IGtleUNvZGUgPT09IDQwICkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDM4ICYmXG4gICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleC0tO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDQwICYmXG4gICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA8IChudW1JdGVtcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXgrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICBpZiAoYWN0aXZlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJ2xpJykuZXEoYWN0aXZlSW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gU2V0IGlucHV0IHZhbHVlXG4gICAgICAgICAgJGF1dG9jb21wbGV0ZS5vbignbW91c2Vkb3duLmF1dG9jb21wbGV0ZSB0b3VjaHN0YXJ0LmF1dG9jb21wbGV0ZScsICdsaScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCkudHJpbSgpO1xuICAgICAgICAgICAgJGlucHV0LnZhbCh0ZXh0KTtcbiAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIHJlbW92ZUF1dG9jb21wbGV0ZSgpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgb25BdXRvY29tcGxldGUgY2FsbGJhY2suXG4gICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25BdXRvY29tcGxldGUpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5vbkF1dG9jb21wbGV0ZS5jYWxsKHRoaXMsIHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gIH0pOyAvLyBFbmQgb2YgJChkb2N1bWVudCkucmVhZHlcblxuICAvKioqKioqKioqKioqKioqKioqKlxuICAgKiAgU2VsZWN0IFBsdWdpbiAgKlxuICAgKioqKioqKioqKioqKioqKioqL1xuICAkLmZuLm1hdGVyaWFsX3NlbGVjdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICQodGhpcykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoJHNlbGVjdC5oYXNDbGFzcygnYnJvd3Nlci1kZWZhdWx0JykpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBDb250aW51ZSB0byBuZXh0IChyZXR1cm4gZmFsc2UgYnJlYWtzIG91dCBvZiBlbnRpcmUgbG9vcClcbiAgICAgIH1cblxuICAgICAgdmFyIG11bHRpcGxlID0gJHNlbGVjdC5hdHRyKCdtdWx0aXBsZScpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgIGxhc3RJRCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0LWlkJyk7IC8vIFRlYXIgZG93biBzdHJ1Y3R1cmUgaWYgU2VsZWN0IG5lZWRzIHRvIGJlIHJlYnVpbHRcblxuICAgICAgaWYgKGxhc3RJRCkge1xuICAgICAgICAkc2VsZWN0LnBhcmVudCgpLmZpbmQoJ3NwYW4uY2FyZXQnKS5yZW1vdmUoKTtcbiAgICAgICAgJHNlbGVjdC5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnJlbW92ZSgpO1xuXG4gICAgICAgICRzZWxlY3QudW53cmFwKCk7XG4gICAgICAgICQoJ3VsI3NlbGVjdC1vcHRpb25zLScrbGFzdElEKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgZGVzdHJveWluZyB0aGUgc2VsZWN0LCByZW1vdmUgdGhlIHNlbGVsY3QtaWQgYW5kIHJlc2V0IGl0IHRvIGl0J3MgdW5pbml0aWFsaXplZCBzdGF0ZS5cbiAgICAgIGlmKGNhbGxiYWNrID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgJHNlbGVjdC5kYXRhKCdzZWxlY3QtaWQnLCBudWxsKS5yZW1vdmVDbGFzcygnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdW5pcXVlSUQgPSBNYXRlcmlhbGl6ZS5ndWlkKCk7XG4gICAgICAkc2VsZWN0LmRhdGEoJ3NlbGVjdC1pZCcsIHVuaXF1ZUlEKTtcbiAgICAgIHZhciB3cmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+PC9kaXY+Jyk7XG4gICAgICB3cmFwcGVyLmFkZENsYXNzKCRzZWxlY3QuYXR0cignY2xhc3MnKSk7XG4gICAgICB2YXIgb3B0aW9ucyA9ICQoJzx1bCBpZD1cInNlbGVjdC1vcHRpb25zLScgKyB1bmlxdWVJRCArJ1wiIGNsYXNzPVwiZHJvcGRvd24tY29udGVudCBzZWxlY3QtZHJvcGRvd24gJyArIChtdWx0aXBsZSA/ICdtdWx0aXBsZS1zZWxlY3QtZHJvcGRvd24nIDogJycpICsgJ1wiPjwvdWw+JyksXG4gICAgICAgICAgc2VsZWN0Q2hpbGRyZW4gPSAkc2VsZWN0LmNoaWxkcmVuKCdvcHRpb24sIG9wdGdyb3VwJyksXG4gICAgICAgICAgdmFsdWVzU2VsZWN0ZWQgPSBbXSxcbiAgICAgICAgICBvcHRpb25zSG92ZXIgPSBmYWxzZTtcblxuICAgICAgdmFyIGxhYmVsID0gJHNlbGVjdC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5odG1sKCkgfHwgJHNlbGVjdC5maW5kKCdvcHRpb246Zmlyc3QnKS5odG1sKCkgfHwgXCJcIjtcblxuICAgICAgLy8gRnVuY3Rpb24gdGhhdCByZW5kZXJzIGFuZCBhcHBlbmRzIHRoZSBvcHRpb24gdGFraW5nIGludG9cbiAgICAgIC8vIGFjY291bnQgdHlwZSBhbmQgcG9zc2libGUgaW1hZ2UgaWNvbi5cbiAgICAgIHZhciBhcHBlbmRPcHRpb25XaXRoSWNvbiA9IGZ1bmN0aW9uKHNlbGVjdCwgb3B0aW9uLCB0eXBlKSB7XG4gICAgICAgIC8vIEFkZCBkaXNhYmxlZCBhdHRyIGlmIGRpc2FibGVkXG4gICAgICAgIHZhciBkaXNhYmxlZENsYXNzID0gKG9wdGlvbi5pcygnOmRpc2FibGVkJykpID8gJ2Rpc2FibGVkICcgOiAnJztcbiAgICAgICAgdmFyIG9wdGdyb3VwQ2xhc3MgPSAodHlwZSA9PT0gJ29wdGdyb3VwLW9wdGlvbicpID8gJ29wdGdyb3VwLW9wdGlvbiAnIDogJyc7XG4gICAgICAgIHZhciBtdWx0aXBsZUNoZWNrYm94ID0gbXVsdGlwbGUgPyAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiJyArIGRpc2FibGVkQ2xhc3MgKyAnLz48bGFiZWw+PC9sYWJlbD4nIDogJyc7XG5cbiAgICAgICAgLy8gYWRkIGljb25zXG4gICAgICAgIHZhciBpY29uX3VybCA9IG9wdGlvbi5kYXRhKCdpY29uJyk7XG4gICAgICAgIHZhciBjbGFzc2VzID0gb3B0aW9uLmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgIGlmICghIWljb25fdXJsKSB7XG4gICAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gJyc7XG4gICAgICAgICAgaWYgKCEhY2xhc3NlcykgY2xhc3NTdHJpbmcgPSAnIGNsYXNzPVwiJyArIGNsYXNzZXMgKyAnXCInO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIG11bHRpcGxlIHR5cGUuXG4gICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwiJyArIGRpc2FibGVkQ2xhc3MgKyBvcHRncm91cENsYXNzICsgJ1wiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGljb25fdXJsICsgJ1wiJyArIGNsYXNzU3RyaW5nICsgJz48c3Bhbj4nICsgbXVsdGlwbGVDaGVja2JveCArIG9wdGlvbi5odG1sKCkgKyAnPC9zcGFuPjwvbGk+JykpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIG11bHRpcGxlIHR5cGUuXG4gICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIicgKyBkaXNhYmxlZENsYXNzICsgb3B0Z3JvdXBDbGFzcyArICdcIj48c3Bhbj4nICsgbXVsdGlwbGVDaGVja2JveCArIG9wdGlvbi5odG1sKCkgKyAnPC9zcGFuPjwvbGk+JykpO1xuICAgICAgfTtcblxuICAgICAgLyogQ3JlYXRlIGRyb3Bkb3duIHN0cnVjdHVyZS4gKi9cbiAgICAgIGlmIChzZWxlY3RDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Q2hpbGRyZW4uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnb3B0aW9uJykpIHtcbiAgICAgICAgICAgIC8vIERpcmVjdCBkZXNjZW5kYW50IG9wdGlvbi5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpLCAnbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXBwZW5kT3B0aW9uV2l0aEljb24oJHNlbGVjdCwgJCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICgkKHRoaXMpLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICAgICAgICAvLyBPcHRncm91cC5cbiAgICAgICAgICAgIHZhciBzZWxlY3RPcHRpb25zID0gJCh0aGlzKS5jaGlsZHJlbignb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb25zLmFwcGVuZCgkKCc8bGkgY2xhc3M9XCJvcHRncm91cFwiPjxzcGFuPicgKyAkKHRoaXMpLmF0dHIoJ2xhYmVsJykgKyAnPC9zcGFuPjwvbGk+JykpO1xuXG4gICAgICAgICAgICBzZWxlY3RPcHRpb25zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGFwcGVuZE9wdGlvbldpdGhJY29uKCRzZWxlY3QsICQodGhpcyksICdvcHRncm91cC1vcHRpb24nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZmluZCgnbGk6bm90KC5vcHRncm91cCknKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBvcHRpb24gZWxlbWVudCBpcyBkaXNhYmxlZFxuICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmdW5jdGlvbihpLCB2KSB7IHJldHVybiAhdjsgfSk7XG4gICAgICAgICAgICAgIHNlbGVjdGVkID0gdG9nZ2xlRW50cnlGcm9tQXJyYXkodmFsdWVzU2VsZWN0ZWQsIGksICRzZWxlY3QpO1xuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvcHRpb25zLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC52YWwoJCh0aGlzKS50ZXh0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCAkKHRoaXMpKTtcbiAgICAgICAgICAgICRzZWxlY3QuZmluZCgnb3B0aW9uJykuZXEoaSkucHJvcCgnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIG9uY2hhbmdlKCkgZXZlbnRcbiAgICAgICAgICAgICRzZWxlY3QudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAndW5kZWZpbmVkJykgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBXcmFwIEVsZW1lbnRzXG4gICAgICAkc2VsZWN0LndyYXAod3JhcHBlcik7XG4gICAgICAvLyBBZGQgU2VsZWN0IERpc3BsYXkgRWxlbWVudFxuICAgICAgdmFyIGRyb3Bkb3duSWNvbiA9ICQoJzxzcGFuIGNsYXNzPVwiY2FyZXRcIj4mIzk2NjA7PC9zcGFuPicpO1xuICAgICAgaWYgKCRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpKVxuICAgICAgICBkcm9wZG93bkljb24uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cbiAgICAgIC8vIGVzY2FwZSBkb3VibGUgcXVvdGVzXG4gICAgICB2YXIgc2FuaXRpemVkTGFiZWxIdG1sID0gbGFiZWwucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG4gICAgICB2YXIgJG5ld1NlbGVjdCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duXCIgcmVhZG9ubHk9XCJ0cnVlXCIgJyArICgoJHNlbGVjdC5pcygnOmRpc2FibGVkJykpID8gJ2Rpc2FibGVkJyA6ICcnKSArICcgZGF0YS1hY3RpdmF0ZXM9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKydcIiB2YWx1ZT1cIicrIHNhbml0aXplZExhYmVsSHRtbCArJ1wiLz4nKTtcbiAgICAgICRzZWxlY3QuYmVmb3JlKCRuZXdTZWxlY3QpO1xuICAgICAgJG5ld1NlbGVjdC5iZWZvcmUoZHJvcGRvd25JY29uKTtcblxuICAgICAgJG5ld1NlbGVjdC5hZnRlcihvcHRpb25zKTtcbiAgICAgIC8vIENoZWNrIGlmIHNlY3Rpb24gZWxlbWVudCBpcyBkaXNhYmxlZFxuICAgICAgaWYgKCEkc2VsZWN0LmlzKCc6ZGlzYWJsZWQnKSkge1xuICAgICAgICAkbmV3U2VsZWN0LmRyb3Bkb3duKHsnaG92ZXInOiBmYWxzZX0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDb3B5IHRhYmluZGV4XG4gICAgICBpZiAoJHNlbGVjdC5hdHRyKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICQoJG5ld1NlbGVjdFswXSkuYXR0cigndGFiaW5kZXgnLCAkc2VsZWN0LmF0dHIoJ3RhYmluZGV4JykpO1xuICAgICAgfVxuXG4gICAgICAkc2VsZWN0LmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xuXG4gICAgICAkbmV3U2VsZWN0Lm9uKHtcbiAgICAgICAgJ2ZvY3VzJzogZnVuY3Rpb24gKCl7XG4gICAgICAgICAgaWYgKCQoJ3VsLnNlbGVjdC1kcm9wZG93bicpLm5vdChvcHRpb25zWzBdKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgJCgnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ29wZW4nLCBbJ2ZvY3VzJ10pO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSAmJiBsYWJlbC5pbmRleE9mKCcsJykgPj0gMCkge1xuICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNwbGl0KCcsJylbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGknKS5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpID09PSBsYWJlbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBzZWxlY3RlZE9wdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoZSl7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRuZXdTZWxlY3Qub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcblxuICAgICAgb3B0aW9ucy5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgb3B0aW9uc0hvdmVyID0gdHJ1ZTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgJCh3aW5kb3cpLm9uKHtcbiAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG11bHRpcGxlICYmIChvcHRpb25zSG92ZXIgfHwgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBpbml0aWFsIG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgJHNlbGVjdC5maW5kKFwib3B0aW9uOnNlbGVjdGVkOm5vdCg6ZGlzYWJsZWQpXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcblxuICAgICAgICAgIHRvZ2dsZUVudHJ5RnJvbUFycmF5KHZhbHVlc1NlbGVjdGVkLCBpbmRleCwgJHNlbGVjdCk7XG4gICAgICAgICAgb3B0aW9ucy5maW5kKFwibGlcIikuZXEoaW5kZXgpLmZpbmQoXCI6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE1ha2Ugb3B0aW9uIGFzIHNlbGVjdGVkIGFuZCBzY3JvbGwgdG8gc2VsZWN0ZWQgcG9zaXRpb25cbiAgICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBjb2xsZWN0aW9uICBTZWxlY3Qgb3B0aW9ucyBqUXVlcnkgZWxlbWVudFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBuZXdPcHRpb24gIGVsZW1lbnQgb2YgdGhlIG5ldyBvcHRpb25cbiAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmlyc3RBY3RpdmF0aW9uICBJZiBvbiBmaXJzdCBhY3RpdmF0aW9uIG9mIHNlbGVjdFxuICAgICAgICovXG4gICAgICB2YXIgYWN0aXZhdGVPcHRpb24gPSBmdW5jdGlvbihjb2xsZWN0aW9uLCBuZXdPcHRpb24sIGZpcnN0QWN0aXZhdGlvbikge1xuICAgICAgICBpZiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5maW5kKCdsaS5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHZhciBvcHRpb24gPSAkKG5ld09wdGlvbik7XG4gICAgICAgICAgb3B0aW9uLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIGlmICghbXVsdGlwbGUgfHwgISFmaXJzdEFjdGl2YXRpb24pIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsVG8ob3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIEFsbG93IHVzZXIgdG8gc2VhcmNoIGJ5IHR5cGluZ1xuICAgICAgLy8gdGhpcyBhcnJheSBpcyBjbGVhcmVkIGFmdGVyIDEgc2Vjb25kXG4gICAgICB2YXIgZmlsdGVyUXVlcnkgPSBbXSxcbiAgICAgICAgICBvbktleURvd24gPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vIFRBQiAtIHN3aXRjaCB0byBhbm90aGVyIGlucHV0XG4gICAgICAgICAgICBpZihlLndoaWNoID09IDkpe1xuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQVJST1cgRE9XTiBXSEVOIFNFTEVDVCBJUyBDTE9TRUQgLSBvcGVuIHNlbGVjdCBvcHRpb25zXG4gICAgICAgICAgICBpZihlLndoaWNoID09IDQwICYmICFvcHRpb25zLmlzKCc6dmlzaWJsZScpKXtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdvcGVuJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRU5URVIgV0hFTiBTRUxFQ1QgSVMgQ0xPU0VEIC0gc3VibWl0IGZvcm1cbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT0gMTMgJiYgIW9wdGlvbnMuaXMoJzp2aXNpYmxlJykpe1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gQ0FTRSBXSEVOIFVTRVIgVFlQRSBMRVRURVJTXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIG5vbkxldHRlcnMgPSBbOSwxMywyNywzOCw0MF07XG4gICAgICAgICAgICBpZiAobGV0dGVyICYmIChub25MZXR0ZXJzLmluZGV4T2YoZS53aGljaCkgPT09IC0xKSkge1xuICAgICAgICAgICAgICBmaWx0ZXJRdWVyeS5wdXNoKGxldHRlcik7XG5cbiAgICAgICAgICAgICAgdmFyIHN0cmluZyA9IGZpbHRlclF1ZXJ5LmpvaW4oJycpLFxuICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaScpLmZpbHRlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJpbmcpID09PSAwO1xuICAgICAgICAgICAgICAgICAgfSlbMF07XG5cbiAgICAgICAgICAgICAgaWYgKG5ld09wdGlvbikge1xuICAgICAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsIG5ld09wdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRU5URVIgLSBzZWxlY3Qgb3B0aW9uIGFuZCBjbG9zZSB3aGVuIHNlbGVjdCBvcHRpb25zIGFyZSBvcGVuZWRcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDEzKSB7XG4gICAgICAgICAgICAgIHZhciBhY3RpdmVPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkOm5vdCguZGlzYWJsZWQpJylbMF07XG4gICAgICAgICAgICAgIGlmKGFjdGl2ZU9wdGlvbil7XG4gICAgICAgICAgICAgICAgJChhY3RpdmVPcHRpb24pLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBUlJPVyBET1dOIC0gbW92ZSB0byBuZXh0IG5vdCBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDQwKSB7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLm5leHQoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaTpub3QoLmRpc2FibGVkKScpWzBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsIG5ld09wdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVTQyAtIGNsb3NlIG9wdGlvbnNcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDI3KSB7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQVJST1cgVVAgLSBtb3ZlIHRvIHByZXZpb3VzIG5vdCBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDM4KSB7XG4gICAgICAgICAgICAgIG5ld09wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5wcmV2KCdsaTpub3QoLmRpc2FibGVkKScpWzBdO1xuICAgICAgICAgICAgICBpZihuZXdPcHRpb24pXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXV0b21hdGljYWx5IGNsZWFuIGZpbHRlciBxdWVyeSBzbyB1c2VyIGNhbiBzZWFyY2ggYWdhaW4gYnkgc3RhcnRpbmcgbGV0dGVyc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBmaWx0ZXJRdWVyeSA9IFtdOyB9LCAxMDAwKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAkbmV3U2VsZWN0Lm9uKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUVudHJ5RnJvbUFycmF5KGVudHJpZXNBcnJheSwgZW50cnlJbmRleCwgc2VsZWN0KSB7XG4gICAgICB2YXIgaW5kZXggPSBlbnRyaWVzQXJyYXkuaW5kZXhPZihlbnRyeUluZGV4KSxcbiAgICAgICAgICBub3RBZGRlZCA9IGluZGV4ID09PSAtMTtcblxuICAgICAgaWYgKG5vdEFkZGVkKSB7XG4gICAgICAgIGVudHJpZXNBcnJheS5wdXNoKGVudHJ5SW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW50cmllc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdC5zaWJsaW5ncygndWwuZHJvcGRvd24tY29udGVudCcpLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZXEoZW50cnlJbmRleCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAvLyB1c2Ugbm90QWRkZWQgaW5zdGVhZCBvZiB0cnVlICh0byBkZXRlY3QgaWYgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZCBvciBub3QpXG4gICAgICBzZWxlY3QuZmluZCgnb3B0aW9uJykuZXEoZW50cnlJbmRleCkucHJvcCgnc2VsZWN0ZWQnLCBub3RBZGRlZCk7XG4gICAgICBzZXRWYWx1ZVRvSW5wdXQoZW50cmllc0FycmF5LCBzZWxlY3QpO1xuXG4gICAgICByZXR1cm4gbm90QWRkZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWVUb0lucHV0KGVudHJpZXNBcnJheSwgc2VsZWN0KSB7XG4gICAgICB2YXIgdmFsdWUgPSAnJztcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGNvdW50ID0gZW50cmllc0FycmF5Lmxlbmd0aDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIHRleHQgPSBzZWxlY3QuZmluZCgnb3B0aW9uJykuZXEoZW50cmllc0FycmF5W2ldKS50ZXh0KCk7XG5cbiAgICAgICAgaSA9PT0gMCA/IHZhbHVlICs9IHRleHQgOiB2YWx1ZSArPSAnLCAnICsgdGV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICB2YWx1ZSA9IHNlbGVjdC5maW5kKCdvcHRpb246ZGlzYWJsZWQnKS5lcSgwKS50ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudmFsKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcblxuICAgIGluaXQgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGluZGljYXRvcnM6IHRydWUsXG4gICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICB0cmFuc2l0aW9uOiA1MDAsXG4gICAgICAgIGludGVydmFsOiA2MDAwXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyBGb3IgZWFjaCBzbGlkZXIsIHdlIHdhbnQgdG8ga2VlcCB0cmFjayBvZlxuICAgICAgICAvLyB3aGljaCBzbGlkZSBpcyBhY3RpdmUgYW5kIGl0cyBhc3NvY2lhdGVkIGNvbnRlbnRcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyICRzbGlkZXIgPSAkdGhpcy5maW5kKCd1bC5zbGlkZXMnKS5maXJzdCgpO1xuICAgICAgICB2YXIgJHNsaWRlcyA9ICRzbGlkZXIuZmluZCgnPiBsaScpO1xuICAgICAgICB2YXIgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgIHZhciAkYWN0aXZlLCAkaW5kaWNhdG9ycywgJGludGVydmFsO1xuICAgICAgICBpZiAoJGFjdGl2ZV9pbmRleCAhPSAtMSkgeyAkYWN0aXZlID0gJHNsaWRlcy5lcSgkYWN0aXZlX2luZGV4KTsgfVxuXG4gICAgICAgIC8vIFRyYW5zaXRpb25zIHRoZSBjYXB0aW9uIGRlcGVuZGluZyBvbiBhbGlnbm1lbnRcbiAgICAgICAgZnVuY3Rpb24gY2FwdGlvblRyYW5zaXRpb24oY2FwdGlvbiwgZHVyYXRpb24pIHtcbiAgICAgICAgICBpZiAoY2FwdGlvbi5oYXNDbGFzcyhcImNlbnRlci1hbGlnblwiKSkge1xuICAgICAgICAgICAgY2FwdGlvbi52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWTogLTEwMH0sIHtkdXJhdGlvbjogZHVyYXRpb24sIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChjYXB0aW9uLmhhc0NsYXNzKFwicmlnaHQtYWxpZ25cIikpIHtcbiAgICAgICAgICAgIGNhcHRpb24udmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDEwMH0sIHtkdXJhdGlvbjogZHVyYXRpb24sIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChjYXB0aW9uLmhhc0NsYXNzKFwibGVmdC1hbGlnblwiKSkge1xuICAgICAgICAgICAgY2FwdGlvbi52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogLTEwMH0sIHtkdXJhdGlvbjogZHVyYXRpb24sIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCB0cmFuc2l0aW9uIHRoZSBzbGlkZSB0byBhbnkgaW5kZXggb2YgdGhlIG5leHQgc2xpZGVcbiAgICAgICAgZnVuY3Rpb24gbW92ZVRvU2xpZGUoaW5kZXgpIHtcbiAgICAgICAgICAvLyBXcmFwIGFyb3VuZCBpbmRpY2VzLlxuICAgICAgICAgIGlmIChpbmRleCA+PSAkc2xpZGVzLmxlbmd0aCkgaW5kZXggPSAwO1xuICAgICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMCkgaW5kZXggPSAkc2xpZGVzLmxlbmd0aCAtMTtcblxuICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuXG4gICAgICAgICAgLy8gT25seSBkbyBpZiBpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgaWYgKCRhY3RpdmVfaW5kZXggIT0gaW5kZXgpIHtcbiAgICAgICAgICAgICRhY3RpdmUgPSAkc2xpZGVzLmVxKCRhY3RpdmVfaW5kZXgpO1xuICAgICAgICAgICAgJGNhcHRpb24gPSAkYWN0aXZlLmZpbmQoJy5jYXB0aW9uJyk7XG5cbiAgICAgICAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJGFjdGl2ZS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtkdXJhdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlcy5ub3QoJy5hY3RpdmUnKS52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMH0sIHtkdXJhdGlvbjogMCwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgY2FwdGlvblRyYW5zaXRpb24oJGNhcHRpb24sIG9wdGlvbnMudHJhbnNpdGlvbik7XG5cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgICAgJGluZGljYXRvcnMuZXEoJGFjdGl2ZV9pbmRleCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2xpZGVzLmVxKGluZGV4KS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgJHNsaWRlcy5lcShpbmRleCkuZmluZCgnLmNhcHRpb24nKS52ZWxvY2l0eSh7b3BhY2l0eTogMSwgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMH0sIHtkdXJhdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uLCBkZWxheTogb3B0aW9ucy50cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgJHNsaWRlcy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAgICRpbmRpY2F0b3JzLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGhlaWdodCBvZiBzbGlkZXJcbiAgICAgICAgLy8gSWYgZnVsbHNjcmVlbiwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoISR0aGlzLmhhc0NsYXNzKCdmdWxsc2NyZWVuJykpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAvLyBBZGQgaGVpZ2h0IGlmIGluZGljYXRvcnMgYXJlIHByZXNlbnRcbiAgICAgICAgICAgICR0aGlzLmhlaWdodChvcHRpb25zLmhlaWdodCArIDQwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy5oZWlnaHQob3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkc2xpZGVyLmhlaWdodChvcHRpb25zLmhlaWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFNldCBpbml0aWFsIHBvc2l0aW9ucyBvZiBjYXB0aW9uc1xuICAgICAgICAkc2xpZGVzLmZpbmQoJy5jYXB0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FwdGlvblRyYW5zaXRpb24oJCh0aGlzKSwgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1vdmUgaW1nIHNyYyBpbnRvIGJhY2tncm91bmQtaW1hZ2VcbiAgICAgICAgJHNsaWRlcy5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcGxhY2Vob2xkZXJCYXNlNjQgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gICAgICAgICAgaWYgKCQodGhpcykuYXR0cignc3JjJykgIT09IHBsYWNlaG9sZGVyQmFzZTY0KSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArICQodGhpcykuYXR0cignc3JjJykgKyAnKScgKTtcbiAgICAgICAgICAgICQodGhpcykuYXR0cignc3JjJywgcGxhY2Vob2xkZXJCYXNlNjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZHluYW1pY2FsbHkgYWRkIGluZGljYXRvcnNcbiAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICRpbmRpY2F0b3JzID0gJCgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+Jyk7XG4gICAgICAgICAgJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICAgICAgICAgIHZhciAkaW5kaWNhdG9yID0gJCgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgY2xpY2tzIG9uIGluZGljYXRvcnNcbiAgICAgICAgICAgICRpbmRpY2F0b3IuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgJHBhcmVudCA9ICRzbGlkZXIucGFyZW50KCk7XG4gICAgICAgICAgICAgIHZhciBjdXJyX2luZGV4ID0gJHBhcmVudC5maW5kKCQodGhpcykpLmluZGV4KCk7XG4gICAgICAgICAgICAgIG1vdmVUb1NsaWRlKGN1cnJfaW5kZXgpO1xuXG4gICAgICAgICAgICAgIC8vIHJlc2V0IGludGVydmFsXG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcbiAgICAgICAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgaWYgKCRzbGlkZXMubGVuZ3RoID09ICRhY3RpdmVfaW5kZXggKyAxKSAkYWN0aXZlX2luZGV4ID0gMDsgLy8gbG9vcCB0byBzdGFydFxuICAgICAgICAgICAgICAgICAgZWxzZSAkYWN0aXZlX2luZGV4ICs9IDE7XG5cbiAgICAgICAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy50cmFuc2l0aW9uICsgb3B0aW9ucy5pbnRlcnZhbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkaW5kaWNhdG9ycy5hcHBlbmQoJGluZGljYXRvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJHRoaXMuYXBwZW5kKCRpbmRpY2F0b3JzKTtcbiAgICAgICAgICAkaW5kaWNhdG9ycyA9ICR0aGlzLmZpbmQoJ3VsLmluZGljYXRvcnMnKS5maW5kKCdsaS5pbmRpY2F0b3ItaXRlbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhY3RpdmUpIHtcbiAgICAgICAgICAkYWN0aXZlLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAkc2xpZGVzLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG5cbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gMDtcbiAgICAgICAgICAkYWN0aXZlID0gJHNsaWRlcy5lcSgkYWN0aXZlX2luZGV4KTtcblxuICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXG4gICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgJGluZGljYXRvcnMuZXEoJGFjdGl2ZV9pbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkanVzdCBoZWlnaHQgdG8gY3VycmVudCBzbGlkZVxuICAgICAgICAkYWN0aXZlLmZpbmQoJ2ltZycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGFjdGl2ZS5maW5kKCcuY2FwdGlvbicpLnZlbG9jaXR5KHtvcGFjaXR5OiAxLCB0cmFuc2xhdGVYOiAwLCB0cmFuc2xhdGVZOiAwfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGF1dG8gc2Nyb2xsXG4gICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggKyAxKTtcblxuICAgICAgICAgIH0sIG9wdGlvbnMudHJhbnNpdGlvbiArIG9wdGlvbnMuaW50ZXJ2YWxcbiAgICAgICAgKTtcblxuXG4gICAgICAgIC8vIEhhbW1lckpTLCBTd2lwZSBuYXZpZ2F0aW9uXG5cbiAgICAgICAgLy8gVG91Y2ggRXZlbnRcbiAgICAgICAgdmFyIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICB2YXIgc3dpcGVSaWdodCA9IGZhbHNlO1xuXG4gICAgICAgICR0aGlzLmhhbW1lcih7XG4gICAgICAgICAgICBwcmV2ZW50X2RlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHtcblxuICAgICAgICAgICAgLy8gcmVzZXQgaW50ZXJ2YWxcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcblxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XG4gICAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5kZWx0YVg7XG4gICAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcbiAgICAgICAgICAgIHZhciB2ZWxvY2l0eVkgPSBlLmdlc3R1cmUudmVsb2NpdHlZO1xuXG4gICAgICAgICAgICAkY3Vycl9zbGlkZSA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZlbG9jaXR5WCkgPiBNYXRoLmFicyh2ZWxvY2l0eVkpKSB7XG4gICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogeFxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3dpcGUgTGVmdFxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gNCAmJiAoeCA+ICgkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPCAtMC42NSkpIHtcbiAgICAgICAgICAgICAgc3dpcGVSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTd2lwZSBSaWdodFxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAyICYmICh4IDwgKC0xICogJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYID4gMC42NSkpIHtcbiAgICAgICAgICAgICAgc3dpcGVMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFrZSBTbGlkZSBCZWhpbmQgYWN0aXZlIHNsaWRlIHZpc2libGVcbiAgICAgICAgICAgIHZhciBuZXh0X3NsaWRlO1xuICAgICAgICAgICAgaWYgKHN3aXBlTGVmdCkge1xuICAgICAgICAgICAgICBuZXh0X3NsaWRlID0gJGN1cnJfc2xpZGUubmV4dCgpO1xuICAgICAgICAgICAgICBpZiAobmV4dF9zbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXh0X3NsaWRlID0gJHNsaWRlcy5maXJzdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5leHRfc2xpZGUudmVsb2NpdHkoeyBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzd2lwZVJpZ2h0KSB7XG4gICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkY3Vycl9zbGlkZS5wcmV2KCk7XG4gICAgICAgICAgICAgIGlmIChuZXh0X3NsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkc2xpZGVzLmxhc3QoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXh0X3NsaWRlLnZlbG9jaXR5KHsgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIH1cblxuICAgICAgICB9KS5iaW5kKCdwYW5lbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG5cbiAgICAgICAgICAgICRjdXJyX3NsaWRlID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjdXJyX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcblxuICAgICAgICAgICAgaWYgKCFzd2lwZVJpZ2h0ICYmICFzd2lwZUxlZnQgfHwgJHNsaWRlcy5sZW5ndGggPD0xKSB7XG4gICAgICAgICAgICAgIC8vIFJldHVybiB0byBvcmlnaW5hbCBzcG90XG4gICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogMFxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzd2lwZUxlZnQpIHtcbiAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoY3Vycl9pbmRleCArIDEpO1xuICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDogLTEgKiAkdGhpcy5pbm5lcldpZHRoKCkgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogMH0sIHtkdXJhdGlvbjogMCwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3dpcGVSaWdodCkge1xuICAgICAgICAgICAgICBtb3ZlVG9TbGlkZShjdXJyX2luZGV4IC0gMSk7XG4gICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOiAkdGhpcy5pbm5lcldpZHRoKCkgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogMH0sIHtkdXJhdGlvbjogMCwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICBzd2lwZVJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFJlc3RhcnQgaW50ZXJ2YWxcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcbiAgICAgICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgIGlmICgkc2xpZGVzLmxlbmd0aCA9PSAkYWN0aXZlX2luZGV4ICsgMSkgJGFjdGl2ZV9pbmRleCA9IDA7IC8vIGxvb3AgdG8gc3RhcnRcbiAgICAgICAgICAgICAgICBlbHNlICRhY3RpdmVfaW5kZXggKz0gMTtcblxuICAgICAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXgpO1xuXG4gICAgICAgICAgICAgIH0sIG9wdGlvbnMudHJhbnNpdGlvbiArIG9wdGlvbnMuaW50ZXJ2YWxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5vbignc2xpZGVyUGF1c2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm9uKCdzbGlkZXJTdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcbiAgICAgICAgICAkaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgICBpZiAoJHNsaWRlcy5sZW5ndGggPT0gJGFjdGl2ZV9pbmRleCArIDEpICRhY3RpdmVfaW5kZXggPSAwOyAvLyBsb29wIHRvIHN0YXJ0XG4gICAgICAgICAgICAgIGVsc2UgJGFjdGl2ZV9pbmRleCArPSAxO1xuXG4gICAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXgpO1xuXG4gICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMub24oJ3NsaWRlck5leHQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4ICsgMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm9uKCdzbGlkZXJQcmV2JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCAtIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgfSk7XG5cblxuXG4gICAgfSxcbiAgICBwYXVzZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJQYXVzZScpO1xuICAgIH0sXG4gICAgc3RhcnQgOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyU3RhcnQnKTtcbiAgICB9LFxuICAgIG5leHQgOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyTmV4dCcpO1xuICAgIH0sXG4gICAgcHJldiA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJQcmV2Jyk7XG4gICAgfVxuICB9O1xuXG5cbiAgJC5mbi5zbGlkZXIgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcbiAgICBpZiAoIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSApIHtcbiAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudG9vbHRpcCcgKTtcbiAgICB9XG4gIH07IC8vIFBsdWdpbiBlbmRcbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suY2FyZCcsICcuY2FyZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoJCh0aGlzKS5maW5kKCc+IC5jYXJkLXJldmVhbCcpLmxlbmd0aCkge1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoJCgnLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlJykpIHx8ICQoZS50YXJnZXQpLmlzKCQoJy5jYXJkLXJldmVhbCAuY2FyZC10aXRsZSBpJykpKSB7XG4gICAgICAgICAgLy8gTWFrZSBSZXZlYWwgYW5pbWF0ZSBkb3duIGFuZCBkaXNwbGF5IG5vbmVcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5jYXJkLXJldmVhbCcpLnZlbG9jaXR5KFxuICAgICAgICAgICAge3RyYW5zbGF0ZVk6IDB9LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMjUsXG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHsgJCh0aGlzKS5jc3MoeyBkaXNwbGF5OiAnbm9uZSd9KTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuaXMoJCgnLmNhcmQgLmFjdGl2YXRvcicpKSB8fFxuICAgICAgICAgICAgICAgICAkKGUudGFyZ2V0KS5pcygkKCcuY2FyZCAuYWN0aXZhdG9yIGknKSkgKSB7XG4gICAgICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhcmQnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICQodGhpcykuZmluZCgnLmNhcmQtcmV2ZWFsJykuY3NzKHsgZGlzcGxheTogJ2Jsb2NrJ30pLnZlbG9jaXR5KFwic3RvcFwiLCBmYWxzZSkudmVsb2NpdHkoe3RyYW5zbGF0ZVk6ICctMTAwJSd9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJ30pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG59KCBqUXVlcnkgKSk7OyhmdW5jdGlvbiAoJCkge1xuICB2YXIgbWF0ZXJpYWxDaGlwc0RlZmF1bHRzID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogJycsXG4gICAgYXV0b2NvbXBsZXRlT3B0aW9uczoge30sXG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gSGFuZGxlIHJlbW92YWwgb2Ygc3RhdGljIGNoaXBzLlxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hpcCAuY2xvc2UnLCBmdW5jdGlvbihlKXtcbiAgICAgIHZhciAkY2hpcHMgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGlwcycpO1xuICAgICAgaWYgKCRjaGlwcy5hdHRyKCdkYXRhLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hpcCcpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICAkLmZuLm1hdGVyaWFsX2NoaXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLiRlbCA9ICQodGhpcyk7XG4gICAgdGhpcy4kZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgICB0aGlzLlNFTFMgPSB7XG4gICAgICBDSElQUzogJy5jaGlwcycsXG4gICAgICBDSElQOiAnLmNoaXAnLFxuICAgICAgSU5QVVQ6ICdpbnB1dCcsXG4gICAgICBERUxFVEU6ICcubWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgU0VMRUNURURfQ0hJUDogJy5zZWxlY3RlZCcsXG4gICAgfTtcblxuICAgIGlmICgnZGF0YScgPT09IG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbC5kYXRhKCdjaGlwcycpO1xuICAgIH1cblxuICAgIHZhciBjdXJyX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgbWF0ZXJpYWxDaGlwc0RlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBzZWxmLmhhc0F1dG9jb21wbGV0ZSA9ICEkLmlzRW1wdHlPYmplY3QoY3Vycl9vcHRpb25zLmF1dG9jb21wbGV0ZU9wdGlvbnMuZGF0YSk7XG5cbiAgICAvLyBJbml0aWFsaXplXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgY2hpcHM7XG4gICAgICBzZWxmLiRlbC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciAkY2hpcHMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgY2hpcElkID0gTWF0ZXJpYWxpemUuZ3VpZCgpO1xuICAgICAgICBzZWxmLmNoaXBJZCA9IGNoaXBJZDtcblxuICAgICAgICBpZiAoIWN1cnJfb3B0aW9ucy5kYXRhIHx8ICEoY3Vycl9vcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICBjdXJyX29wdGlvbnMuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgICRjaGlwcy5kYXRhKCdjaGlwcycsIGN1cnJfb3B0aW9ucy5kYXRhKTtcbiAgICAgICAgJGNoaXBzLmF0dHIoJ2RhdGEtaW5kZXgnLCBpKTtcbiAgICAgICAgJGNoaXBzLmF0dHIoJ2RhdGEtaW5pdGlhbGl6ZWQnLCB0cnVlKTtcblxuICAgICAgICBpZiAoISRjaGlwcy5oYXNDbGFzcyhzZWxmLlNFTFMuQ0hJUFMpKSB7XG4gICAgICAgICAgJGNoaXBzLmFkZENsYXNzKCdjaGlwcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5jaGlwcygkY2hpcHMsIGNoaXBJZCk7XG4gICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIFNFTFMgPSBzZWxmLlNFTFM7XG5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZignY2xpY2suY2hpcHMtZm9jdXMnLCBTRUxTLkNISVBTKS5vbignY2xpY2suY2hpcHMtZm9jdXMnLCBTRUxTLkNISVBTLCBmdW5jdGlvbihlKXtcbiAgICAgICAgJChlLnRhcmdldCkuZmluZChTRUxTLklOUFVUKS5mb2N1cygpO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZignY2xpY2suY2hpcHMtc2VsZWN0JywgU0VMUy5DSElQKS5vbignY2xpY2suY2hpcHMtc2VsZWN0JywgU0VMUy5DSElQLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICRjaGlwID0gJChlLnRhcmdldCk7XG4gICAgICAgIGlmICgkY2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgd2FzU2VsZWN0ZWQgPSAkY2hpcC5oYXNDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB2YXIgJGNoaXBzID0gJGNoaXAuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgICAkKFNFTFMuQ0hJUCkucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgICBpZiAoIXdhc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoJGNoaXAuaW5kZXgoKSwgJGNoaXBzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2tleWRvd24uY2hpcHMnKS5vbigna2V5ZG93bi5jaGlwcycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoJ2lucHV0LCB0ZXh0YXJlYScpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVsZXRlXG4gICAgICAgIHZhciAkY2hpcCA9IHNlbGYuJGRvY3VtZW50LmZpbmQoU0VMUy5DSElQICsgU0VMUy5TRUxFQ1RFRF9DSElQKTtcbiAgICAgICAgdmFyICRjaGlwcyA9ICRjaGlwLmNsb3Nlc3QoU0VMUy5DSElQUyk7XG4gICAgICAgIHZhciBsZW5ndGggPSAkY2hpcC5zaWJsaW5ncyhTRUxTLkNISVApLmxlbmd0aDtcbiAgICAgICAgdmFyIGluZGV4O1xuXG4gICAgICAgIGlmICghJGNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDggfHwgZS53aGljaCA9PT0gNDYpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpbmRleCA9ICRjaGlwLmluZGV4KCk7XG4gICAgICAgICAgc2VsZi5kZWxldGVDaGlwKGluZGV4LCAkY2hpcHMpO1xuXG4gICAgICAgICAgdmFyIHNlbGVjdEluZGV4ID0gbnVsbDtcbiAgICAgICAgICBpZiAoKGluZGV4ICsgMSkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gbGVuZ3RoIHx8IChpbmRleCArIDEpID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdEluZGV4ID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZWN0SW5kZXggPCAwKSBzZWxlY3RJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICBpZiAobnVsbCAhPT0gc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChzZWxlY3RJbmRleCwgJGNoaXBzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFsZW5ndGgpICRjaGlwcy5maW5kKCdpbnB1dCcpLmZvY3VzKCk7XG5cbiAgICAgICAgLy8gbGVmdFxuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDM3KSB7XG4gICAgICAgICAgaW5kZXggPSAkY2hpcC5pbmRleCgpIC0gMTtcbiAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoaW5kZXgsICRjaGlwcyk7XG5cbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSAzOSkge1xuICAgICAgICAgIGluZGV4ID0gJGNoaXAuaW5kZXgoKSArIDE7XG4gICAgICAgICAgJChTRUxTLkNISVApLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIGlmIChpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgJGNoaXBzLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zZWxlY3RDaGlwKGluZGV4LCAkY2hpcHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdmb2N1c2luLmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQpLm9uKCdmb2N1c2luLmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgJGN1cnJDaGlwcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoU0VMUy5DSElQUyk7XG4gICAgICAgICRjdXJyQ2hpcHMuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICRjdXJyQ2hpcHMuc2libGluZ3MoJ2xhYmVsLCAucHJlZml4JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKFNFTFMuQ0hJUCkucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdmb2N1c291dC5jaGlwcycsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVUKS5vbignZm9jdXNvdXQuY2hpcHMnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCwgZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciAkY3VyckNoaXBzID0gJChlLnRhcmdldCkuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgJGN1cnJDaGlwcy5yZW1vdmVDbGFzcygnZm9jdXMnKTtcblxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGlmIGVtcHR5XG4gICAgICAgIGlmICghJGN1cnJDaGlwcy5kYXRhKCdjaGlwcycpLmxlbmd0aCkge1xuICAgICAgICAgICRjdXJyQ2hpcHMuc2libGluZ3MoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgICRjdXJyQ2hpcHMuc2libGluZ3MoJy5wcmVmaXgnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdrZXlkb3duLmNoaXBzLWFkZCcsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVUKS5vbigna2V5ZG93bi5jaGlwcy1hZGQnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCwgZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICAgIHZhciAkY2hpcHMgPSAkdGFyZ2V0LmNsb3Nlc3QoU0VMUy5DSElQUyk7XG4gICAgICAgIHZhciBjaGlwc0xlbmd0aCA9ICRjaGlwcy5jaGlsZHJlbihTRUxTLkNISVApLmxlbmd0aDtcblxuICAgICAgICAvLyBlbnRlclxuICAgICAgICBpZiAoMTMgPT09IGUud2hpY2gpIHtcbiAgICAgICAgICAvLyBPdmVycmlkZSBlbnRlciBpZiBhdXRvY29tcGxldGluZy5cbiAgICAgICAgICBpZiAoc2VsZi5oYXNBdXRvY29tcGxldGUgJiZcbiAgICAgICAgICAgICAgJGNoaXBzLmZpbmQoJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoICYmXG4gICAgICAgICAgICAgICRjaGlwcy5maW5kKCcuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudCcpLmNoaWxkcmVuKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuYWRkQ2hpcCh7dGFnOiAkdGFyZ2V0LnZhbCgpfSwgJGNoaXBzKTtcbiAgICAgICAgICAkdGFyZ2V0LnZhbCgnJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVsZXRlIG9yIGxlZnRcbiAgICAgICAgaWYgKCg4ID09PSBlLmtleUNvZGUgfHwgMzcgPT09IGUua2V5Q29kZSkgJiYgJycgPT09ICR0YXJnZXQudmFsKCkgJiYgY2hpcHNMZW5ndGgpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5zZWxlY3RDaGlwKGNoaXBzTGVuZ3RoIC0gMSwgJGNoaXBzKTtcbiAgICAgICAgICAkdGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBDbGljayBvbiBkZWxldGUgaWNvbiBpbiBjaGlwLlxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdjbGljay5jaGlwcy1kZWxldGUnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5ERUxFVEUpLm9uKCdjbGljay5jaGlwcy1kZWxldGUnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5ERUxFVEUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgdmFyICRjaGlwcyA9ICR0YXJnZXQuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgdmFyICRjaGlwID0gJHRhcmdldC5jbG9zZXN0KFNFTFMuQ0hJUCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNlbGYuZGVsZXRlQ2hpcCgkY2hpcC5pbmRleCgpLCAkY2hpcHMpO1xuICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuY2hpcHMgPSBmdW5jdGlvbigkY2hpcHMsIGNoaXBJZCkge1xuICAgICAgJGNoaXBzLmVtcHR5KCk7XG4gICAgICAkY2hpcHMuZGF0YSgnY2hpcHMnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAkY2hpcHMuYXBwZW5kKHNlbGYucmVuZGVyQ2hpcChlbGVtKSk7XG4gICAgICB9KTtcbiAgICAgICRjaGlwcy5hcHBlbmQoJCgnPGlucHV0IGlkPVwiJyArIGNoaXBJZCArJ1wiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlwiPicpKTtcbiAgICAgIHNlbGYuc2V0UGxhY2Vob2xkZXIoJGNoaXBzKTtcblxuICAgICAgLy8gU2V0IGZvciBhdHRyaWJ1dGUgZm9yIGxhYmVsXG4gICAgICB2YXIgbGFiZWwgPSAkY2hpcHMubmV4dCgnbGFiZWwnKTtcbiAgICAgIGlmIChsYWJlbC5sZW5ndGgpIHtcbiAgICAgICAgbGFiZWwuYXR0cignZm9yJywgY2hpcElkKTtcblxuICAgICAgICBpZiAoJGNoaXBzLmRhdGEoJ2NoaXBzJykubGVuZ3RoKSB7XG4gICAgICAgICAgbGFiZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIGF1dG9jb21wbGV0ZSBpZiBuZWVkZWQuXG4gICAgICB2YXIgaW5wdXQgPSAkKCcjJyArIGNoaXBJZCk7XG4gICAgICBpZiAoc2VsZi5oYXNBdXRvY29tcGxldGUpIHtcbiAgICAgICAgY3Vycl9vcHRpb25zLmF1dG9jb21wbGV0ZU9wdGlvbnMub25BdXRvY29tcGxldGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICBzZWxmLmFkZENoaXAoe3RhZzogdmFsfSwgJGNoaXBzKTtcbiAgICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuYXV0b2NvbXBsZXRlKGN1cnJfb3B0aW9ucy5hdXRvY29tcGxldGVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGNoaXAgalF1ZXJ5IGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1cbiAgICAgKiBAcmV0dXJuIHtqUXVlcnl9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJDaGlwID0gZnVuY3Rpb24oZWxlbSkge1xuICAgICAgaWYgKCFlbGVtLnRhZykgcmV0dXJuO1xuXG4gICAgICB2YXIgJHJlbmRlcmVkQ2hpcCA9ICQoJzxkaXYgY2xhc3M9XCJjaGlwXCI+PC9kaXY+Jyk7XG4gICAgICAkcmVuZGVyZWRDaGlwLnRleHQoZWxlbS50YWcpO1xuICAgICAgJHJlbmRlcmVkQ2hpcC5hcHBlbmQoJCgnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjbG9zZVwiPmNsb3NlPC9pPicpKTtcbiAgICAgIHJldHVybiAkcmVuZGVyZWRDaGlwO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyID0gZnVuY3Rpb24oJGNoaXBzKSB7XG4gICAgICBpZiAoJGNoaXBzLmRhdGEoJ2NoaXBzJykubGVuZ3RoICYmIGN1cnJfb3B0aW9ucy5wbGFjZWhvbGRlcikge1xuICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5wcm9wKCdwbGFjZWhvbGRlcicsIGN1cnJfb3B0aW9ucy5wbGFjZWhvbGRlcik7XG5cbiAgICAgIH0gZWxzZSBpZiAoISRjaGlwcy5kYXRhKCdjaGlwcycpLmxlbmd0aCAmJiBjdXJyX29wdGlvbnMuc2Vjb25kYXJ5UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgJGNoaXBzLmZpbmQoJ2lucHV0JykucHJvcCgncGxhY2Vob2xkZXInLCBjdXJyX29wdGlvbnMuc2Vjb25kYXJ5UGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmlzVmFsaWQgPSBmdW5jdGlvbigkY2hpcHMsIGVsZW0pIHtcbiAgICAgIHZhciBjaGlwcyA9ICRjaGlwcy5kYXRhKCdjaGlwcycpO1xuICAgICAgdmFyIGV4aXN0cyA9IGZhbHNlO1xuICAgICAgZm9yICh2YXIgaT0wOyBpIDwgY2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaXBzW2ldLnRhZyA9PT0gZWxlbS50YWcpIHtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnJyAhPT0gZWxlbS50YWcgJiYgIWV4aXN0cztcbiAgICB9O1xuXG4gICAgdGhpcy5hZGRDaGlwID0gZnVuY3Rpb24oZWxlbSwgJGNoaXBzKSB7XG4gICAgICBpZiAoIXNlbGYuaXNWYWxpZCgkY2hpcHMsIGVsZW0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciAkcmVuZGVyZWRDaGlwID0gc2VsZi5yZW5kZXJDaGlwKGVsZW0pO1xuICAgICAgdmFyIG5ld0RhdGEgPSBbXTtcbiAgICAgIHZhciBvbGREYXRhID0gJGNoaXBzLmRhdGEoJ2NoaXBzJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3RGF0YS5wdXNoKG9sZERhdGFbaV0pO1xuICAgICAgfVxuICAgICAgbmV3RGF0YS5wdXNoKGVsZW0pO1xuXG4gICAgICAkY2hpcHMuZGF0YSgnY2hpcHMnLCBuZXdEYXRhKTtcbiAgICAgICRyZW5kZXJlZENoaXAuaW5zZXJ0QmVmb3JlKCRjaGlwcy5maW5kKCdpbnB1dCcpKTtcbiAgICAgICRjaGlwcy50cmlnZ2VyKCdjaGlwLmFkZCcsIGVsZW0pO1xuICAgICAgc2VsZi5zZXRQbGFjZWhvbGRlcigkY2hpcHMpO1xuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUNoaXAgPSBmdW5jdGlvbihjaGlwSW5kZXgsICRjaGlwcykge1xuICAgICAgdmFyIGNoaXAgPSAkY2hpcHMuZGF0YSgnY2hpcHMnKVtjaGlwSW5kZXhdO1xuICAgICAgJGNoaXBzLmZpbmQoJy5jaGlwJykuZXEoY2hpcEluZGV4KS5yZW1vdmUoKTtcblxuICAgICAgdmFyIG5ld0RhdGEgPSBbXTtcbiAgICAgIHZhciBvbGREYXRhID0gJGNoaXBzLmRhdGEoJ2NoaXBzJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgIT09IGNoaXBJbmRleCkge1xuICAgICAgICAgIG5ld0RhdGEucHVzaChvbGREYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkY2hpcHMuZGF0YSgnY2hpcHMnLCBuZXdEYXRhKTtcbiAgICAgICRjaGlwcy50cmlnZ2VyKCdjaGlwLmRlbGV0ZScsIGNoaXApO1xuICAgICAgc2VsZi5zZXRQbGFjZWhvbGRlcigkY2hpcHMpO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdENoaXAgPSBmdW5jdGlvbihjaGlwSW5kZXgsICRjaGlwcykge1xuICAgICAgdmFyICRjaGlwID0gJGNoaXBzLmZpbmQoJy5jaGlwJykuZXEoY2hpcEluZGV4KTtcbiAgICAgIGlmICgkY2hpcCAmJiBmYWxzZSA9PT0gJGNoaXAuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgJGNoaXAuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICRjaGlwcy50cmlnZ2VyKCdjaGlwLnNlbGVjdCcsICRjaGlwcy5kYXRhKCdjaGlwcycpW2NoaXBJbmRleF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmdldENoaXBzRWxlbWVudCA9IGZ1bmN0aW9uKGluZGV4LCAkY2hpcHMpIHtcbiAgICAgIHJldHVybiAkY2hpcHMuZXEoaW5kZXgpO1xuICAgIH07XG5cbiAgICAvLyBpbml0XG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLmhhbmRsZUV2ZW50cygpO1xuICB9O1xufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAkLmZuLnB1c2hwaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIC8vIERlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiBJbmZpbml0eSxcbiAgICAgIG9mZnNldDogMFxuICAgIH07XG5cbiAgICAvLyBSZW1vdmUgcHVzaHBpbiBldmVudCBhbmQgY2xhc3Nlc1xuICAgIGlmIChvcHRpb25zID09PSBcInJlbW92ZVwiKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaWQgPSAkKHRoaXMpLmRhdGEoJ3B1c2hwaW4taWQnKSkge1xuICAgICAgICAgICQod2luZG93KS5vZmYoJ3Njcm9sbC4nICsgaWQpO1xuICAgICAgICAgICQodGhpcykucmVtb3ZlRGF0YSgncHVzaHBpbi1pZCcpLnJlbW92ZUNsYXNzKCdwaW4tdG9wIHBpbm5lZCBwaW4tYm90dG9tJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuXG4gICAgJGluZGV4ID0gMDtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR1bmlxdWVJZCA9IE1hdGVyaWFsaXplLmd1aWQoKSxcbiAgICAgICAgICAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgJG9yaWdpbmFsX29mZnNldCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuXG4gICAgICBmdW5jdGlvbiByZW1vdmVQaW5DbGFzc2VzKG9iamVjdCkge1xuICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3Bpbi10b3AnKTtcbiAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdwaW5uZWQnKTtcbiAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdwaW4tYm90dG9tJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKG9iamVjdHMsIHNjcm9sbGVkKSB7XG4gICAgICAgIG9iamVjdHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQWRkIHBvc2l0aW9uIGZpeGVkIChiZWNhdXNlIGl0cyBiZXR3ZWVuIHRvcCBhbmQgYm90dG9tKVxuICAgICAgICAgIGlmIChvcHRpb25zLnRvcCA8PSBzY3JvbGxlZCAmJiBvcHRpb25zLmJvdHRvbSA+PSBzY3JvbGxlZCAmJiAhJCh0aGlzKS5oYXNDbGFzcygncGlubmVkJykpIHtcbiAgICAgICAgICAgIHJlbW92ZVBpbkNsYXNzZXMoJCh0aGlzKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgb3B0aW9ucy5vZmZzZXQpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGlubmVkJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkIHBpbi10b3AgKHdoZW4gc2Nyb2xsZWQgcG9zaXRpb24gaXMgYWJvdmUgdG9wKVxuICAgICAgICAgIGlmIChzY3JvbGxlZCA8IG9wdGlvbnMudG9wICYmICEkKHRoaXMpLmhhc0NsYXNzKCdwaW4tdG9wJykpIHtcbiAgICAgICAgICAgIHJlbW92ZVBpbkNsYXNzZXMoJCh0aGlzKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgMCk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaW4tdG9wJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkIHBpbi1ib3R0b20gKHdoZW4gc2Nyb2xsZWQgcG9zaXRpb24gaXMgYmVsb3cgYm90dG9tKVxuICAgICAgICAgIGlmIChzY3JvbGxlZCA+IG9wdGlvbnMuYm90dG9tICYmICEkKHRoaXMpLmhhc0NsYXNzKCdwaW4tYm90dG9tJykpIHtcbiAgICAgICAgICAgIHJlbW92ZVBpbkNsYXNzZXMoJCh0aGlzKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaW4tYm90dG9tJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgb3B0aW9ucy5ib3R0b20gLSAkb3JpZ2luYWxfb2Zmc2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLmRhdGEoJ3B1c2hwaW4taWQnLCAkdW5pcXVlSWQpO1xuICAgICAgdXBkYXRlRWxlbWVudHMoJHRoaXMsICQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC4nICsgJHVuaXF1ZUlkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkc2Nyb2xsZWQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyBvcHRpb25zLm9mZnNldDtcbiAgICAgICAgdXBkYXRlRWxlbWVudHMoJHRoaXMsICRzY3JvbGxlZCk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH07XG59KCBqUXVlcnkgKSk7OyhmdW5jdGlvbiAoJCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vIGpRdWVyeSByZXZlcnNlXG4gICAgJC5mbi5yZXZlcnNlID0gW10ucmV2ZXJzZTtcblxuICAgIC8vIEhvdmVyIGJlaGF2aW91cjogbWFrZSBzdXJlIHRoaXMgZG9lc24ndCB3b3JrIG9uIC5jbGljay10by10b2dnbGUgRkFCcyFcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VlbnRlci5maXhlZEFjdGlvbkJ0bicsICcuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBvcGVuRkFCTWVudSgkdGhpcyk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlbGVhdmUuZml4ZWRBY3Rpb25CdG4nLCAnLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhciknLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgY2xvc2VGQUJNZW51KCR0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZS1vbi1jbGljayBiZWhhdmlvdXIuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYkNsaWNrVG9nZ2xlJywgJy5maXhlZC1hY3Rpb24tYnRuLmNsaWNrLXRvLXRvZ2dsZSA+IGEnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgdmFyICRtZW51ID0gJHRoaXMucGFyZW50KCk7XG4gICAgICBpZiAoJG1lbnUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGNsb3NlRkFCTWVudSgkbWVudSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuRkFCTWVudSgkbWVudSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUb29sYmFyIHRyYW5zaXRpb24gYmVoYXZpb3VyLlxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5mYWJUb29sYmFyJywgJy5maXhlZC1hY3Rpb24tYnRuLnRvb2xiYXIgPiBhJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHZhciAkbWVudSA9ICR0aGlzLnBhcmVudCgpO1xuICAgICAgRkFCdG9Ub29sYmFyKCRtZW51KTtcbiAgICB9KTtcblxuICB9KTtcblxuICAkLmZuLmV4dGVuZCh7XG4gICAgb3BlbkZBQjogZnVuY3Rpb24oKSB7XG4gICAgICBvcGVuRkFCTWVudSgkKHRoaXMpKTtcbiAgICB9LFxuICAgIGNsb3NlRkFCOiBmdW5jdGlvbigpIHtcbiAgICAgIGNsb3NlRkFCTWVudSgkKHRoaXMpKTtcbiAgICB9LFxuICAgIG9wZW5Ub29sYmFyOiBmdW5jdGlvbigpIHtcbiAgICAgIEZBQnRvVG9vbGJhcigkKHRoaXMpKTtcbiAgICB9LFxuICAgIGNsb3NlVG9vbGJhcjogZnVuY3Rpb24oKSB7XG4gICAgICB0b29sYmFyVG9GQUIoJCh0aGlzKSk7XG4gICAgfVxuICB9KTtcblxuXG4gIHZhciBvcGVuRkFCTWVudSA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICB2YXIgJHRoaXMgPSBidG47XG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gZmFsc2UpIHtcblxuICAgICAgLy8gR2V0IGRpcmVjdGlvbiBvcHRpb25cbiAgICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcbiAgICAgIHZhciBvZmZzZXRZLCBvZmZzZXRYO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBvZmZzZXRYID0gNDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXRZID0gNDA7XG4gICAgICB9XG5cbiAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eShcbiAgICAgICAgeyBzY2FsZVk6IFwiLjRcIiwgc2NhbGVYOiBcIi40XCIsIHRyYW5zbGF0ZVk6IG9mZnNldFkgKyAncHgnLCB0cmFuc2xhdGVYOiBvZmZzZXRYICsgJ3B4J30sXG4gICAgICAgIHsgZHVyYXRpb246IDAgfSk7XG5cbiAgICAgIHZhciB0aW1lID0gMDtcbiAgICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS5yZXZlcnNlKCkuZWFjaCggZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnZlbG9jaXR5KFxuICAgICAgICAgIHsgb3BhY2l0eTogXCIxXCIsIHNjYWxlWDogXCIxXCIsIHNjYWxlWTogXCIxXCIsIHRyYW5zbGF0ZVk6IFwiMFwiLCB0cmFuc2xhdGVYOiAnMCd9LFxuICAgICAgICAgIHsgZHVyYXRpb246IDgwLCBkZWxheTogdGltZSB9KTtcbiAgICAgICAgdGltZSArPSA0MDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2VGQUJNZW51ID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIHZhciAkdGhpcyA9IGJ0bjtcbiAgICAvLyBHZXQgZGlyZWN0aW9uIG9wdGlvblxuICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcbiAgICB2YXIgb2Zmc2V0WSwgb2Zmc2V0WDtcblxuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBvZmZzZXRYID0gNDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldFkgPSA0MDtcbiAgICB9XG5cbiAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KFxuICAgICAgeyBvcGFjaXR5OiBcIjBcIiwgc2NhbGVYOiBcIi40XCIsIHNjYWxlWTogXCIuNFwiLCB0cmFuc2xhdGVZOiBvZmZzZXRZICsgJ3B4JywgdHJhbnNsYXRlWDogb2Zmc2V0WCArICdweCd9LFxuICAgICAgeyBkdXJhdGlvbjogODAgfVxuICAgICk7XG4gIH07XG5cblxuICAvKipcbiAgICogVHJhbnNmb3JtIEZBQiBpbnRvIHRvb2xiYXJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IGpRdWVyeSBvYmplY3RcbiAgICovXG4gIHZhciBGQUJ0b1Rvb2xiYXIgPSBmdW5jdGlvbihidG4pIHtcbiAgICBpZiAoYnRuLmF0dHIoJ2RhdGEtb3BlbicpID09PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRYLCBvZmZzZXRZLCBzY2FsZUZhY3RvcjtcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBidG5SZWN0ID0gYnRuWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBhbmNob3IgPSBidG4uZmluZCgnPiBhJykuZmlyc3QoKTtcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcbiAgICB2YXIgYmFja2Ryb3AgPSAkKCc8ZGl2IGNsYXNzPVwiZmFiLWJhY2tkcm9wXCI+PC9kaXY+Jyk7XG4gICAgdmFyIGZhYkNvbG9yID0gYW5jaG9yLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIGFuY2hvci5hcHBlbmQoYmFja2Ryb3ApO1xuXG4gICAgb2Zmc2V0WCA9IGJ0blJlY3QubGVmdCAtICh3aW5kb3dXaWR0aCAvIDIpICsgKGJ0blJlY3Qud2lkdGggLyAyKTtcbiAgICBvZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gYnRuUmVjdC5ib3R0b207XG4gICAgc2NhbGVGYWN0b3IgPSB3aW5kb3dXaWR0aCAvIGJhY2tkcm9wLndpZHRoKCk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLWJvdHRvbScsIGJ0blJlY3QuYm90dG9tKTtcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4tbGVmdCcsIGJ0blJlY3QubGVmdCk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLXdpZHRoJywgYnRuUmVjdC53aWR0aCk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgIGJ0bi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3BlbicsIHRydWUpO1xuICAgIGJ0bi5jc3Moe1xuICAgICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgb2Zmc2V0WCArICdweCknLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYW5jaG9yLmNzcyh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyAtb2Zmc2V0WSArICdweCknLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICB9KTtcblxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGJ0bi5jc3Moe1xuICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGxpbmVhciAuMnMnXG4gICAgICB9KTtcbiAgICAgIGFuY2hvci5jc3Moe1xuICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycydcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBidG4uY3NzKHtcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgICAgICB9KTtcbiAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgnICsgc2NhbGVGYWN0b3IgKyAnKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1lbnUuZmluZCgnPiBsaSA+IGEnKS5jc3Moe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIGNsb3NlLlxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0b29sYmFyVG9GQUIoYnRuKTtcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYlRvb2xiYXJDbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QobWVudSkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b29sYmFyVG9GQUIoYnRuKTtcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2suZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0b29sYmFyIGJhY2sgaW50byBGQUJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IGpRdWVyeSBvYmplY3RcbiAgICovXG4gIHZhciB0b29sYmFyVG9GQUIgPSBmdW5jdGlvbihidG4pIHtcbiAgICBpZiAoYnRuLmF0dHIoJ2RhdGEtb3BlbicpICE9PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRYLCBvZmZzZXRZLCBzY2FsZUZhY3RvcjtcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBidG5XaWR0aCA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi13aWR0aCcpO1xuICAgIHZhciBidG5Cb3R0b20gPSBidG4uYXR0cignZGF0YS1vcmlnaW4tYm90dG9tJyk7XG4gICAgdmFyIGJ0bkxlZnQgPSBidG4uYXR0cignZGF0YS1vcmlnaW4tbGVmdCcpO1xuICAgIHZhciBhbmNob3IgPSBidG4uZmluZCgnPiAuYnRuLWZsb2F0aW5nJykuZmlyc3QoKTtcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcbiAgICB2YXIgYmFja2Ryb3AgPSBidG4uZmluZCgnLmZhYi1iYWNrZHJvcCcpO1xuICAgIHZhciBmYWJDb2xvciA9IGFuY2hvci5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcblxuICAgIG9mZnNldFggPSBidG5MZWZ0IC0gKHdpbmRvd1dpZHRoIC8gMikgKyAoYnRuV2lkdGggLyAyKTtcbiAgICBvZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gYnRuQm90dG9tO1xuICAgIHNjYWxlRmFjdG9yID0gd2luZG93V2lkdGggLyBiYWNrZHJvcC53aWR0aCgpO1xuXG5cbiAgICAvLyBIaWRlIGJhY2tkcm9wXG4gICAgYnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBidG4uYXR0cignZGF0YS1vcGVuJywgZmFsc2UpO1xuICAgIGJ0bi5jc3Moe1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYW5jaG9yLmNzcyh7XG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgIH0pO1xuICAgIG1lbnUuZmluZCgnPiBsaSA+IGEnKS5jc3Moe1xuICAgICAgb3BhY2l0eTogJydcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBiYWNrZHJvcC5yZW1vdmUoKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgc3RhdGUuXG4gICAgICBidG4uY3NzKHtcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBib3R0b206ICcnLFxuICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgLW9mZnNldFggKyAncHgsMCwwKSdcbiAgICAgIH0pO1xuICAgICAgYW5jaG9yLmNzcyh7XG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwnICsgb2Zmc2V0WSArICdweCwwKSdcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBidG4uY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzJ1xuICAgICAgICB9KTtcbiAgICAgICAgYW5jaG9yLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApJ1xuICAgICAgICB9KTtcbiAgICAgIH0sIDIwKTtcbiAgICB9LCAyMDApO1xuICB9O1xuXG5cbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgLy8gSW1hZ2UgdHJhbnNpdGlvbiBmdW5jdGlvblxuICBNYXRlcmlhbGl6ZS5mYWRlSW5JbWFnZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3JFbCkge1xuICAgIHZhciBlbGVtZW50O1xuICAgIGlmICh0eXBlb2Yoc2VsZWN0b3JPckVsKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnQgPSAkKHNlbGVjdG9yT3JFbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Yoc2VsZWN0b3JPckVsKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxlbWVudC5jc3Moe29wYWNpdHk6IDB9KTtcbiAgICAkKGVsZW1lbnQpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge1xuICAgICAgZHVyYXRpb246IDY1MCxcbiAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ1xuICAgIH0pO1xuICAgICQoZWxlbWVudCkudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7XG4gICAgICBkdXJhdGlvbjogMTMwMCxcbiAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgIGVhc2luZzogJ3N3aW5nJyxcbiAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdywgZngpIHtcbiAgICAgICAgZnguc3RhcnQgPSAxMDA7XG4gICAgICAgIHZhciBncmF5c2NhbGVfc2V0dGluZyA9IG5vdy8xMDA7XG4gICAgICAgIHZhciBicmlnaHRuZXNzX3NldHRpbmcgPSAxNTAgLSAoMTAwIC0gbm93KS8xLjc1O1xuXG4gICAgICAgIGlmIChicmlnaHRuZXNzX3NldHRpbmcgPCAxMDApIHtcbiAgICAgICAgICBicmlnaHRuZXNzX3NldHRpbmcgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdyA+PSAwKSB7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgICBcIi13ZWJraXQtZmlsdGVyXCI6IFwiZ3JheXNjYWxlKFwiK2dyYXlzY2FsZV9zZXR0aW5nK1wiKVwiICsgXCJicmlnaHRuZXNzKFwiK2JyaWdodG5lc3Nfc2V0dGluZytcIiUpXCIsXG4gICAgICAgICAgICAgIFwiZmlsdGVyXCI6IFwiZ3JheXNjYWxlKFwiK2dyYXlzY2FsZV9zZXR0aW5nK1wiKVwiICsgXCJicmlnaHRuZXNzKFwiK2JyaWdodG5lc3Nfc2V0dGluZytcIiUpXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIEhvcml6b250YWwgc3RhZ2dlcmVkIGxpc3RcbiAgTWF0ZXJpYWxpemUuc2hvd1N0YWdnZXJlZExpc3QgPSBmdW5jdGlvbihzZWxlY3Rvck9yRWwpIHtcbiAgICB2YXIgZWxlbWVudDtcbiAgICBpZiAodHlwZW9mKHNlbGVjdG9yT3JFbCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbGVtZW50ID0gJChzZWxlY3Rvck9yRWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHNlbGVjdG9yT3JFbCkgPT09ICdvYmplY3QnKSB7XG4gICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lID0gMDtcbiAgICBlbGVtZW50LmZpbmQoJ2xpJykudmVsb2NpdHkoXG4gICAgICAgIHsgdHJhbnNsYXRlWDogXCItMTAwcHhcIn0sXG4gICAgICAgIHsgZHVyYXRpb246IDAgfSk7XG5cbiAgICBlbGVtZW50LmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudmVsb2NpdHkoXG4gICAgICAgIHsgb3BhY2l0eTogXCIxXCIsIHRyYW5zbGF0ZVg6IFwiMFwifSxcbiAgICAgICAgeyBkdXJhdGlvbjogODAwLCBkZWxheTogdGltZSwgZWFzaW5nOiBbNjAsIDEwXSB9KTtcbiAgICAgIHRpbWUgKz0gMTIwO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gSGFyZGNvZGVkIC5zdGFnZ2VyZWQtbGlzdCBzY3JvbGxGaXJlXG4gICAgLy8gdmFyIHN0YWdnZXJlZExpc3RPcHRpb25zID0gW107XG4gICAgLy8gJCgndWwuc3RhZ2dlcmVkLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cbiAgICAvLyAgIHZhciBsYWJlbCA9ICdzY3JvbGxGaXJlLScgKyBpO1xuICAgIC8vICAgJCh0aGlzKS5hZGRDbGFzcyhsYWJlbCk7XG4gICAgLy8gICBzdGFnZ2VyZWRMaXN0T3B0aW9ucy5wdXNoKFxuICAgIC8vICAgICB7c2VsZWN0b3I6ICd1bC5zdGFnZ2VyZWQtbGlzdC4nICsgbGFiZWwsXG4gICAgLy8gICAgICBvZmZzZXQ6IDIwMCxcbiAgICAvLyAgICAgIGNhbGxiYWNrOiAnc2hvd1N0YWdnZXJlZExpc3QoXCJ1bC5zdGFnZ2VyZWQtbGlzdC4nICsgbGFiZWwgKyAnXCIpJ30pO1xuICAgIC8vIH0pO1xuICAgIC8vIHNjcm9sbEZpcmUoc3RhZ2dlcmVkTGlzdE9wdGlvbnMpO1xuXG4gICAgLy8gSGFtbWVySlMsIFN3aXBlIG5hdmlnYXRpb25cblxuICAgIC8vIFRvdWNoIEV2ZW50XG4gICAgdmFyIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgIHZhciBzd2lwZVJpZ2h0ID0gZmFsc2U7XG5cblxuICAgIC8vIERpc21pc3NpYmxlIENvbGxlY3Rpb25zXG4gICAgJCgnLmRpc21pc3NhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykuaGFtbWVyKHtcbiAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxuICAgICAgfSkuYmluZCgncGFuJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHtcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLmdlc3R1cmUuZGlyZWN0aW9uO1xuICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmRlbHRhWDtcbiAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcblxuICAgICAgICAgICR0aGlzLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogeFxuICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuXG4gICAgICAgICAgLy8gU3dpcGUgTGVmdFxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDQgJiYgKHggPiAoJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYIDwgLTAuNzUpKSB7XG4gICAgICAgICAgICBzd2lwZUxlZnQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN3aXBlIFJpZ2h0XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMiAmJiAoeCA8ICgtMSAqICR0aGlzLmlubmVyV2lkdGgoKSAvIDIpIHx8IHZlbG9jaXR5WCA+IDAuNzUpKSB7XG4gICAgICAgICAgICBzd2lwZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmJpbmQoJ3BhbmVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gUmVzZXQgaWYgY29sbGVjdGlvbiBpcyBtb3ZlZCBiYWNrIGludG8gb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgaWYgKE1hdGguYWJzKGUuZ2VzdHVyZS5kZWx0YVgpIDwgKCQodGhpcykuaW5uZXJXaWR0aCgpIC8gMikpIHtcbiAgICAgICAgICBzd2lwZVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHtcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmIChzd2lwZUxlZnQgfHwgc3dpcGVSaWdodCkge1xuICAgICAgICAgICAgdmFyIGZ1bGxXaWR0aDtcbiAgICAgICAgICAgIGlmIChzd2lwZUxlZnQpIHsgZnVsbFdpZHRoID0gJHRoaXMuaW5uZXJXaWR0aCgpOyB9XG4gICAgICAgICAgICBlbHNlIHsgZnVsbFdpZHRoID0gLTEgKiAkdGhpcy5pbm5lcldpZHRoKCk7IH1cblxuICAgICAgICAgICAgJHRoaXMudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiBmdWxsV2lkdGgsXG4gICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMTAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgY29tcGxldGU6XG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmNzcygnYm9yZGVyJywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IGhlaWdodDogMCwgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgY29tcGxldGU6XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgeyAkdGhpcy5yZW1vdmUoKTsgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICR0aGlzLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogMCxcbiAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAxMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICAgIHN3aXBlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG4gICAgLy8gdGltZSA9IDBcbiAgICAvLyAvLyBWZXJ0aWNhbCBTdGFnZ2VyZWQgbGlzdFxuICAgIC8vICQoJ3VsLnN0YWdnZXJlZC1saXN0LnZlcnRpY2FsIGxpJykudmVsb2NpdHkoXG4gICAgLy8gICAgIHsgdHJhbnNsYXRlWTogXCIxMDBweFwifSxcbiAgICAvLyAgICAgeyBkdXJhdGlvbjogMCB9KTtcblxuICAgIC8vICQoJ3VsLnN0YWdnZXJlZC1saXN0LnZlcnRpY2FsIGxpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAvLyAgICQodGhpcykudmVsb2NpdHkoXG4gICAgLy8gICAgIHsgb3BhY2l0eTogXCIxXCIsIHRyYW5zbGF0ZVk6IFwiMFwifSxcbiAgICAvLyAgICAgeyBkdXJhdGlvbjogODAwLCBkZWxheTogdGltZSwgZWFzaW5nOiBbNjAsIDI1XSB9KTtcbiAgICAvLyAgIHRpbWUgKz0gMTIwO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gLy8gRmFkZSBpbiBhbmQgU2NhbGVcbiAgICAvLyAkKCcuZmFkZS1pbi5zY2FsZScpLnZlbG9jaXR5KFxuICAgIC8vICAgICB7IHNjYWxlWDogLjQsIHNjYWxlWTogLjQsIHRyYW5zbGF0ZVg6IC02MDB9LFxuICAgIC8vICAgICB7IGR1cmF0aW9uOiAwfSk7XG4gICAgLy8gJCgnLmZhZGUtaW4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCh0aGlzKS52ZWxvY2l0eShcbiAgICAvLyAgICAgeyBvcGFjaXR5OiBcIjFcIiwgc2NhbGVYOiAxLCBzY2FsZVk6IDEsIHRyYW5zbGF0ZVg6IDB9LFxuICAgIC8vICAgICB7IGR1cmF0aW9uOiA4MDAsIGVhc2luZzogWzYwLCAxMF0gfSk7XG4gICAgLy8gfSk7XG4gIH0pO1xufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbigkKSB7XG5cbiAgdmFyIHNjcm9sbEZpcmVFdmVudHNIYW5kbGVkID0gZmFsc2U7XG5cbiAgLy8gSW5wdXQ6IEFycmF5IG9mIEpTT04gb2JqZWN0cyB7c2VsZWN0b3IsIG9mZnNldCwgY2FsbGJhY2t9XG4gIE1hdGVyaWFsaXplLnNjcm9sbEZpcmUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCBvcHRpb25zIGZyb20gZWFjaCBsaW5lXG4gICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbaV07XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHZhbHVlLnNlbGVjdG9yLFxuICAgICAgICAgICAgb2Zmc2V0ID0gdmFsdWUub2Zmc2V0LFxuICAgICAgICAgICAgY2FsbGJhY2sgPSB2YWx1ZS5jYWxsYmFjaztcblxuICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKCBjdXJyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBlbGVtZW50T2Zmc2V0ID0gY3VycmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICAgICAgaWYgKHdpbmRvd1Njcm9sbCA+IChlbGVtZW50T2Zmc2V0ICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmRvbmUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja0Z1bmMgPSBuZXcgRnVuY3Rpb24oY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYyhjdXJyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWUuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgdmFyIHRocm90dGxlZFNjcm9sbCA9IE1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCkge1xuICAgICAgb25TY3JvbGwoKTtcbiAgICB9LCBvcHRpb25zLnRocm90dGxlIHx8IDEwMCk7XG5cbiAgICBpZiAoIXNjcm9sbEZpcmVFdmVudHNIYW5kbGVkKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aHJvdHRsZWRTY3JvbGwpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGVkU2Nyb2xsKTtcbiAgICAgIHNjcm9sbEZpcmVFdmVudHNIYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBwZXJmb3JtIGEgc2NhbiBvbmNlLCBhZnRlciBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0LCBhbmQgYWZ0ZXIgZG9tIGlzIHJlYWR5XG4gICAgc2V0VGltZW91dCh0aHJvdHRsZWRTY3JvbGwsIDApO1xuICB9O1xuXG59KShqUXVlcnkpO1xuOy8qIVxuICogcGlja2FkYXRlLmpzIHYzLjUuMCwgMjAxNC8wNC8xM1xuICogQnkgQW1zdWwsIGh0dHA6Ly9hbXN1bC5jYVxuICogSG9zdGVkIG9uIGh0dHA6Ly9hbXN1bC5naXRodWIuaW8vcGlja2FkYXRlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqL1xuXG4oZnVuY3Rpb24gKCBmYWN0b3J5ICkge1xuXG4gICAgLy8gQU1ELlxuICAgIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKVxuICAgICAgICBkZWZpbmUoICdwaWNrZXInLCBbJ2pxdWVyeSddLCBmYWN0b3J5IClcblxuICAgIC8vIE5vZGUuanMvYnJvd3NlcmlmeS5cbiAgICBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgKVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoIHJlcXVpcmUoJ2pxdWVyeScpIClcblxuICAgIC8vIEJyb3dzZXIgZ2xvYmFscy5cbiAgICBlbHNlIHRoaXMuUGlja2VyID0gZmFjdG9yeSggalF1ZXJ5IClcblxufShmdW5jdGlvbiggJCApIHtcblxudmFyICR3aW5kb3cgPSAkKCB3aW5kb3cgKVxudmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50IClcbnZhciAkaHRtbCA9ICQoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCApXG5cblxuLyoqXG4gKiBUaGUgcGlja2VyIGNvbnN0cnVjdG9yIHRoYXQgY3JlYXRlcyBhIGJsYW5rIHBpY2tlci5cbiAqL1xuZnVuY3Rpb24gUGlja2VyQ29uc3RydWN0b3IoIEVMRU1FTlQsIE5BTUUsIENPTVBPTkVOVCwgT1BUSU9OUyApIHtcblxuICAgIC8vIElmIHRoZXJl4oCZcyBubyBlbGVtZW50LCByZXR1cm4gdGhlIHBpY2tlciBjb25zdHJ1Y3Rvci5cbiAgICBpZiAoICFFTEVNRU5UICkgcmV0dXJuIFBpY2tlckNvbnN0cnVjdG9yXG5cblxuICAgIHZhclxuICAgICAgICBJU19ERUZBVUxUX1RIRU1FID0gZmFsc2UsXG5cblxuICAgICAgICAvLyBUaGUgc3RhdGUgb2YgdGhlIHBpY2tlci5cbiAgICAgICAgU1RBVEUgPSB7XG4gICAgICAgICAgICBpZDogRUxFTUVOVC5pZCB8fCAnUCcgKyBNYXRoLmFicyggfn4oTWF0aC5yYW5kb20oKSAqIG5ldyBEYXRlKCkpIClcbiAgICAgICAgfSxcblxuXG4gICAgICAgIC8vIE1lcmdlIHRoZSBkZWZhdWx0cyBhbmQgb3B0aW9ucyBwYXNzZWQuXG4gICAgICAgIFNFVFRJTkdTID0gQ09NUE9ORU5UID8gJC5leHRlbmQoIHRydWUsIHt9LCBDT01QT05FTlQuZGVmYXVsdHMsIE9QVElPTlMgKSA6IE9QVElPTlMgfHwge30sXG5cblxuICAgICAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdCBjbGFzc2VzIHdpdGggdGhlIHNldHRpbmdzIGNsYXNzZXMuXG4gICAgICAgIENMQVNTRVMgPSAkLmV4dGVuZCgge30sIFBpY2tlckNvbnN0cnVjdG9yLmtsYXNzZXMoKSwgU0VUVElOR1Mua2xhc3MgKSxcblxuXG4gICAgICAgIC8vIFRoZSBlbGVtZW50IG5vZGUgd3JhcHBlciBpbnRvIGEgalF1ZXJ5IG9iamVjdC5cbiAgICAgICAgJEVMRU1FTlQgPSAkKCBFTEVNRU5UICksXG5cblxuICAgICAgICAvLyBQc2V1ZG8gcGlja2VyIGNvbnN0cnVjdG9yLlxuICAgICAgICBQaWNrZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8gVGhlIHBpY2tlciBwcm90b3R5cGUuXG4gICAgICAgIFAgPSBQaWNrZXJJbnN0YW5jZS5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiBQaWNrZXJJbnN0YW5jZSxcblxuICAgICAgICAgICAgJG5vZGU6ICRFTEVNRU5ULFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5pdGlhbGl6ZSBldmVyeXRoaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbHJlYWR5IHN0YXJ0ZWQsIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCBTVEFURSAmJiBTVEFURS5zdGFydCApIHJldHVybiBQXG5cblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGlja2VyIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBTVEFURS5tZXRob2RzID0ge31cbiAgICAgICAgICAgICAgICBTVEFURS5zdGFydCA9IHRydWVcbiAgICAgICAgICAgICAgICBTVEFURS5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICBTVEFURS50eXBlID0gRUxFTUVOVC50eXBlXG5cblxuICAgICAgICAgICAgICAgIC8vIENvbmZpcm0gZm9jdXMgc3RhdGUsIGNvbnZlcnQgaW50byB0ZXh0IGlucHV0IHRvIHJlbW92ZSBVQSBzdHlsaW5ncyxcbiAgICAgICAgICAgICAgICAvLyBhbmQgc2V0IGFzIHJlYWRvbmx5IHRvIHByZXZlbnQga2V5Ym9hcmQgcG9wdXAuXG4gICAgICAgICAgICAgICAgRUxFTUVOVC5hdXRvZm9jdXMgPSBFTEVNRU5UID09IGdldEFjdGl2ZUVsZW1lbnQoKVxuICAgICAgICAgICAgICAgIEVMRU1FTlQucmVhZE9ubHkgPSAhU0VUVElOR1MuZWRpdGFibGVcbiAgICAgICAgICAgICAgICBFTEVNRU5ULmlkID0gRUxFTUVOVC5pZCB8fCBTVEFURS5pZFxuICAgICAgICAgICAgICAgIGlmICggRUxFTUVOVC50eXBlICE9ICd0ZXh0JyApIHtcbiAgICAgICAgICAgICAgICAgICAgRUxFTUVOVC50eXBlID0gJ3RleHQnXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGlja2VyIGNvbXBvbmVudCB3aXRoIHRoZSBzZXR0aW5ncy5cbiAgICAgICAgICAgICAgICBQLmNvbXBvbmVudCA9IG5ldyBDT01QT05FTlQoUCwgU0VUVElOR1MpXG5cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgcGlja2VyIHJvb3Qgd2l0aCBhIGhvbGRlciBhbmQgdGhlbiBwcmVwYXJlIGl0LlxuICAgICAgICAgICAgICAgIFAuJHJvb3QgPSAkKCBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoJ2RpdicsIGNyZWF0ZVdyYXBwZWRDb21wb25lbnQoKSwgQ0xBU1NFUy5waWNrZXIsICdpZD1cIicgKyBFTEVNRU5ULmlkICsgJ19yb290XCIgdGFiaW5kZXg9XCIwXCInKSApXG4gICAgICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnRSb290KClcblxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmXigJlzIGEgZm9ybWF0IGZvciB0aGUgaGlkZGVuIGlucHV0IGVsZW1lbnQsIGNyZWF0ZSB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBpZiAoIFNFVFRJTkdTLmZvcm1hdFN1Ym1pdCApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnRIaWRkZW4oKVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLy8gUHJlcGFyZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwcmVwYXJlRWxlbWVudCgpXG5cblxuICAgICAgICAgICAgICAgIC8vIEluc2VydCB0aGUgcm9vdCBhcyBzcGVjaWZpZWQgaW4gdGhlIHNldHRpbmdzLlxuICAgICAgICAgICAgICAgIGlmICggU0VUVElOR1MuY29udGFpbmVyICkgJCggU0VUVElOR1MuY29udGFpbmVyICkuYXBwZW5kKCBQLiRyb290IClcbiAgICAgICAgICAgICAgICBlbHNlICRFTEVNRU5ULmFmdGVyKCBQLiRyb290IClcblxuXG4gICAgICAgICAgICAgICAgLy8gQmluZCB0aGUgZGVmYXVsdCBjb21wb25lbnQgYW5kIHNldHRpbmdzIGV2ZW50cy5cbiAgICAgICAgICAgICAgICBQLm9uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFAuY29tcG9uZW50Lm9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogUC5jb21wb25lbnQub25SZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3A6IFAuY29tcG9uZW50Lm9uU3RvcCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogUC5jb21wb25lbnQub25PcGVuLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZTogUC5jb21wb25lbnQub25DbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBQLmNvbXBvbmVudC5vblNldFxuICAgICAgICAgICAgICAgIH0pLm9uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFNFVFRJTkdTLm9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogU0VUVElOR1Mub25SZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3A6IFNFVFRJTkdTLm9uU3RvcCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogU0VUVElOR1Mub25PcGVuLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZTogU0VUVElOR1Mub25DbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBTRVRUSU5HUy5vblNldFxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIC8vIE9uY2Ugd2XigJlyZSBhbGwgc2V0LCBjaGVjayB0aGUgdGhlbWUgaW4gdXNlLlxuICAgICAgICAgICAgICAgIElTX0RFRkFVTFRfVEhFTUUgPSBpc1VzaW5nRGVmYXVsdFRoZW1lKCBQLiRyb290LmNoaWxkcmVuKClbIDAgXSApXG5cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBhdXRvZm9jdXMsIG9wZW4gdGhlIHBpY2tlci5cbiAgICAgICAgICAgICAgICBpZiAoIEVMRU1FTlQuYXV0b2ZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBQLm9wZW4oKVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBxdWV1ZWQgdGhlIOKAnHN0YXJ04oCdIGFuZCDigJxyZW5kZXLigJ0gZXZlbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiBQLnRyaWdnZXIoICdzdGFydCcgKS50cmlnZ2VyKCAncmVuZGVyJyApXG4gICAgICAgICAgICB9LCAvL3N0YXJ0XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW5kZXIgYSBuZXcgcGlja2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oIGVudGlyZUNvbXBvbmVudCApIHtcblxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBhIG5ldyBjb21wb25lbnQgaG9sZGVyIGluIHRoZSByb290IG9yIGJveC5cbiAgICAgICAgICAgICAgICBpZiAoIGVudGlyZUNvbXBvbmVudCApIFAuJHJvb3QuaHRtbCggY3JlYXRlV3JhcHBlZENvbXBvbmVudCgpIClcbiAgICAgICAgICAgICAgICBlbHNlIFAuJHJvb3QuZmluZCggJy4nICsgQ0xBU1NFUy5ib3ggKS5odG1sKCBQLmNvbXBvbmVudC5ub2RlcyggU1RBVEUub3BlbiApIClcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxyZW5kZXLigJ0gZXZlbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiBQLnRyaWdnZXIoICdyZW5kZXInIClcbiAgICAgICAgICAgIH0sIC8vcmVuZGVyXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXN0cm95IGV2ZXJ5dGhpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBzdG9wcGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGlmICggIVNUQVRFLnN0YXJ0ICkgcmV0dXJuIFBcblxuICAgICAgICAgICAgICAgIC8vIFRoZW4gY2xvc2UgdGhlIHBpY2tlci5cbiAgICAgICAgICAgICAgICBQLmNsb3NlKClcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaGlkZGVuIGZpZWxkLlxuICAgICAgICAgICAgICAgIGlmICggUC5faGlkZGVuICkge1xuICAgICAgICAgICAgICAgICAgICBQLl9oaWRkZW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggUC5faGlkZGVuIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJvb3QuXG4gICAgICAgICAgICAgICAgUC4kcm9vdC5yZW1vdmUoKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbnB1dCBjbGFzcywgcmVtb3ZlIHRoZSBzdG9yZWQgZGF0YSwgYW5kIHVuYmluZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBldmVudHMgKGFmdGVyIGEgdGljayBmb3IgSUUgLSBzZWUgYFAuY2xvc2VgKS5cbiAgICAgICAgICAgICAgICAkRUxFTUVOVC5yZW1vdmVDbGFzcyggQ0xBU1NFUy5pbnB1dCApLnJlbW92ZURhdGEoIE5BTUUgKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5vZmYoICcuJyArIFNUQVRFLmlkIClcbiAgICAgICAgICAgICAgICB9LCAwKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgZWxlbWVudCBzdGF0ZVxuICAgICAgICAgICAgICAgIEVMRU1FTlQudHlwZSA9IFNUQVRFLnR5cGVcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnJlYWRPbmx5ID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxzdG9w4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICBQLnRyaWdnZXIoICdzdG9wJyApXG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgcGlja2VyIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBTVEFURS5tZXRob2RzID0ge31cbiAgICAgICAgICAgICAgICBTVEFURS5zdGFydCA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUFxuICAgICAgICAgICAgfSwgLy9zdG9wXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPcGVuIHVwIHRoZSBwaWNrZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGRvbnRHaXZlRm9jdXMgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBvcGVuLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGlmICggU1RBVEUub3BlbiApIHJldHVybiBQXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIOKAnGFjdGl2ZeKAnSBjbGFzcy5cbiAgICAgICAgICAgICAgICAkRUxFTUVOVC5hZGRDbGFzcyggQ0xBU1NFUy5hY3RpdmUgKVxuICAgICAgICAgICAgICAgIGFyaWEoIEVMRU1FTlQsICdleHBhbmRlZCcsIHRydWUgKVxuXG4gICAgICAgICAgICAgICAgLy8gKiBBIEZpcmVmb3ggYnVnLCB3aGVuIGBodG1sYCBoYXMgYG92ZXJmbG93OmhpZGRlbmAsIHJlc3VsdHMgaW5cbiAgICAgICAgICAgICAgICAvLyAgIGtpbGxpbmcgdHJhbnNpdGlvbnMgOiguIFNvIGFkZCB0aGUg4oCcb3BlbmVk4oCdIHN0YXRlIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgICAgICAgICAgICAgLy8gICBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYyNTI4OVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUg4oCcb3BlbmVk4oCdIGNsYXNzIHRvIHRoZSBwaWNrZXIgcm9vdC5cbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5hZGRDbGFzcyggQ0xBU1NFUy5vcGVuZWQgKVxuICAgICAgICAgICAgICAgICAgICBhcmlhKCBQLiRyb290WzBdLCAnaGlkZGVuJywgZmFsc2UgKVxuXG4gICAgICAgICAgICAgICAgfSwgMCApXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRvIGdpdmUgZm9jdXMsIGJpbmQgdGhlIGVsZW1lbnQgYW5kIGRvYyBldmVudHMuXG4gICAgICAgICAgICAgICAgaWYgKCBkb250R2l2ZUZvY3VzICE9PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaXQgYXMgb3Blbi5cbiAgICAgICAgICAgICAgICAgICAgU1RBVEUub3BlbiA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBwYWdlIGZyb20gc2Nyb2xsaW5nLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIElTX0RFRkFVTFRfVEhFTUUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdvdmVyZmxvdycsICdoaWRkZW4nICkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzKCAncGFkZGluZy1yaWdodCcsICcrPScgKyBnZXRTY3JvbGxiYXJXaWR0aCgpIClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgZm9jdXMgdG8gdGhlIHJvb3QgZWxlbWVudOKAmXMgalF1ZXJ5IG9iamVjdC5cbiAgICAgICAgICAgICAgICAgICAgLy8gKiBXb3JrYXJvdW5kIGZvciBpT1M4IHRvIGJyaW5nIHRoZSBwaWNrZXLigJlzIHJvb3QgaW50byB2aWV3LlxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcblxuICAgICAgICAgICAgICAgICAgICAvLyBCaW5kIHRoZSBkb2N1bWVudCBldmVudHMuXG4gICAgICAgICAgICAgICAgICAgICRkb2N1bWVudC5vbiggJ2NsaWNrLicgKyBTVEFURS5pZCArICcgZm9jdXNpbi4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCBldmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IG9mIHRoZSBldmVudCBpcyBub3QgdGhlIGVsZW1lbnQsIGNsb3NlIHRoZSBwaWNrZXIgcGlja2VyLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBEb27igJl0IHdvcnJ5IGFib3V0IGNsaWNrcyBvciBmb2N1c2lucyBvbiB0aGUgcm9vdCBiZWNhdXNlIHRob3NlIGRvbuKAmXQgYnViYmxlIHVwLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBBbHNvLCBmb3IgRmlyZWZveCwgYSBjbGljayBvbiBhbiBgb3B0aW9uYCBlbGVtZW50IGJ1YmJsZXMgdXAgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdG8gdGhlIGRvYy4gU28gbWFrZSBzdXJlIHRoZSB0YXJnZXQgd2Fzbid0IHRoZSBkb2MuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqIEluIEZpcmVmb3ggc3RvcFByb3BhZ2F0aW9uKCkgZG9lc27igJl0IHByZXZlbnQgcmlnaHQtY2xpY2sgZXZlbnRzIGZyb20gYnViYmxpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdoaWNoIGNhdXNlcyB0aGUgcGlja2VyIHRvIHVuZXhwZWN0ZWRseSBjbG9zZSB3aGVuIHJpZ2h0LWNsaWNraW5nIGl0LiBTbyBtYWtlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHN1cmUgdGhlIGV2ZW50IHdhc27igJl0IGEgcmlnaHQtY2xpY2suXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldCAhPSBFTEVNRU5UICYmIHRhcmdldCAhPSBkb2N1bWVudCAmJiBldmVudC53aGljaCAhPSAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCB3YXMgdGhlIGhvbGRlciB0aGF0IGNvdmVycyB0aGUgc2NyZWVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlIGVsZW1lbnQgZm9jdXNlZCB0byBtYWludGFpbiB0YWJpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0YXJnZXQgPT09IFAuJHJvb3QuY2hpbGRyZW4oKVswXSApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSkub24oICdrZXlkb3duLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGtleWNvZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Y29kZSA9IGV2ZW50LmtleUNvZGUsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc2xhdGUgdGhhdCB0byBhIHNlbGVjdGlvbiBjaGFuZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Y29kZVRvTW92ZSA9IFAuY29tcG9uZW50LmtleVsga2V5Y29kZSBdLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JhYiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIGVzY2FwZSwgY2xvc2UgdGhlIHBpY2tlciBhbmQgZ2l2ZSBmb2N1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgga2V5Y29kZSA9PSAyNyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIGtleSBtb3ZlbWVudCBvciDigJxlbnRlcuKAnSBrZXlwcmVzcyBvbiB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCB0YXJnZXQgPT0gUC4kcm9vdFswXSAmJiAoIGtleWNvZGVUb01vdmUgfHwga2V5Y29kZSA9PSAxMyApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gc3RvcCBwYWdlIG1vdmVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGtleSBtb3ZlbWVudCBhY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXljb2RlVG9Nb3ZlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIFAuY29tcG9uZW50LmtleS5nbywgUCwgWyBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGtleWNvZGVUb01vdmUgKSBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiDigJxlbnRlcuKAnSwgaWYgdGhlIGhpZ2hsaWdodGVkIGl0ZW0gaXNu4oCZdCBkaXNhYmxlZCwgc2V0IHRoZSB2YWx1ZSBhbmQgY2xvc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFQLiRyb290LmZpbmQoICcuJyArIENMQVNTRVMuaGlnaGxpZ2h0ZWQgKS5oYXNDbGFzcyggQ0xBU1NFUy5kaXNhYmxlZCApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLnNldCggJ3NlbGVjdCcsIFAuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0ICkuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIHdpdGhpbiB0aGUgcm9vdCBhbmQg4oCcZW50ZXLigJ0gaXMgcHJlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIGFuZCB0cmlnZ2VyIGEgY2xpY2sgb24gdGhlIHRhcmdldCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICQuY29udGFpbnMoIFAuJHJvb3RbMF0sIHRhcmdldCApICYmIGtleWNvZGUgPT0gMTMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcXVldWVkIOKAnG9wZW7igJ0gZXZlbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiBQLnRyaWdnZXIoICdvcGVuJyApXG4gICAgICAgICAgICB9LCAvL29wZW5cblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENsb3NlIHRoZSBwaWNrZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBnaXZlRm9jdXMgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBuZWVkIHRvIGdpdmUgZm9jdXMsIGRvIGl0IGJlZm9yZSBjaGFuZ2luZyBzdGF0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKCBnaXZlRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIC4uLi5haCB5ZXMhIEl0IHdvdWxk4oCZdmUgYmVlbiBpbmNvbXBsZXRlIHdpdGhvdXQgYSBjcmF6eSB3b3JrYXJvdW5kIGZvciBJRSA6fFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZm9jdXMgaXMgdHJpZ2dlcmVkICphZnRlciogdGhlIGNsb3NlIGhhcyBjb21wbGV0ZWQgLSBjYXVzaW5nIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIG9wZW4gYWdhaW4uIFNvIHVuYmluZCBhbmQgcmViaW5kIHRoZSBldmVudCBhdCB0aGUgbmV4dCB0aWNrLlxuICAgICAgICAgICAgICAgICAgICBQLiRyb290Lm9mZiggJ2ZvY3VzLnRvT3BlbicgKS5lcSgwKS5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5vbiggJ2ZvY3VzLnRvT3BlbicsIGhhbmRsZUZvY3VzVG9PcGVuRXZlbnQgKVxuICAgICAgICAgICAgICAgICAgICB9LCAwIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIOKAnGFjdGl2ZeKAnSBjbGFzcy5cbiAgICAgICAgICAgICAgICAkRUxFTUVOVC5yZW1vdmVDbGFzcyggQ0xBU1NFUy5hY3RpdmUgKVxuICAgICAgICAgICAgICAgIGFyaWEoIEVMRU1FTlQsICdleHBhbmRlZCcsIGZhbHNlIClcblxuICAgICAgICAgICAgICAgIC8vICogQSBGaXJlZm94IGJ1Zywgd2hlbiBgaHRtbGAgaGFzIGBvdmVyZmxvdzpoaWRkZW5gLCByZXN1bHRzIGluXG4gICAgICAgICAgICAgICAgLy8gICBraWxsaW5nIHRyYW5zaXRpb25zIDooLiBTbyByZW1vdmUgdGhlIOKAnG9wZW5lZOKAnSBzdGF0ZSBvbiB0aGUgbmV4dCB0aWNrLlxuICAgICAgICAgICAgICAgIC8vICAgQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MjUyODlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIOKAnG9wZW5lZOKAnSBhbmQg4oCcZm9jdXNlZOKAnSBjbGFzcyBmcm9tIHRoZSBwaWNrZXIgcm9vdC5cbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5yZW1vdmVDbGFzcyggQ0xBU1NFUy5vcGVuZWQgKyAnICcgKyBDTEFTU0VTLmZvY3VzZWQgKVxuICAgICAgICAgICAgICAgICAgICBhcmlhKCBQLiRyb290WzBdLCAnaGlkZGVuJywgdHJ1ZSApXG5cbiAgICAgICAgICAgICAgICB9LCAwIClcblxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbHJlYWR5IGNsb3NlZCwgZG8gbm90aGluZyBtb3JlLlxuICAgICAgICAgICAgICAgIGlmICggIVNUQVRFLm9wZW4gKSByZXR1cm4gUFxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGl0IGFzIGNsb3NlZC5cbiAgICAgICAgICAgICAgICBTVEFURS5vcGVuID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSBwYWdlIHRvIHNjcm9sbC5cbiAgICAgICAgICAgICAgICBpZiAoIElTX0RFRkFVTFRfVEhFTUUgKSB7XG4gICAgICAgICAgICAgICAgICAgICRodG1sLlxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzKCAnb3ZlcmZsb3cnLCAnJyApLlxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzKCAncGFkZGluZy1yaWdodCcsICctPScgKyBnZXRTY3JvbGxiYXJXaWR0aCgpIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVbmJpbmQgdGhlIGRvY3VtZW50IGV2ZW50cy5cbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQub2ZmKCAnLicgKyBTVEFURS5pZCApXG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBxdWV1ZWQg4oCcY2xvc2XigJ0gZXZlbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiBQLnRyaWdnZXIoICdjbG9zZScgKVxuICAgICAgICAgICAgfSwgLy9jbG9zZVxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2xlYXIgdGhlIHZhbHVlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjbGVhcjogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFAuc2V0KCAnY2xlYXInLCBudWxsLCBvcHRpb25zIClcbiAgICAgICAgICAgIH0sIC8vY2xlYXJcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldCBzb21ldGhpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiggdGhpbmcsIHZhbHVlLCBvcHRpb25zICkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoaW5nSXRlbSwgdGhpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpbmdJc09iamVjdCA9ICQuaXNQbGFpbk9iamVjdCggdGhpbmcgKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpbmdPYmplY3QgPSB0aGluZ0lzT2JqZWN0ID8gdGhpbmcgOiB7fVxuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgdXNhYmxlIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHRoaW5nSXNPYmplY3QgJiYgJC5pc1BsYWluT2JqZWN0KCB2YWx1ZSApID8gdmFsdWUgOiBvcHRpb25zIHx8IHt9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0aGluZyBpc27igJl0IGFuIG9iamVjdCwgbWFrZSBpdCBvbmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaW5nSXNPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGluZ09iamVjdFsgdGhpbmcgXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSB0aGluZ3Mgb2YgaXRlbXMgdG8gc2V0LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0aGluZ0l0ZW0gaW4gdGhpbmdPYmplY3QgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdyYWIgdGhlIHZhbHVlIG9mIHRoZSB0aGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nVmFsdWUgPSB0aGluZ09iamVjdFsgdGhpbmdJdGVtIF1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3QsIGlmIHRoZSBpdGVtIGV4aXN0cyBhbmQgdGhlcmXigJlzIGEgdmFsdWUsIHNldCBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpbmdJdGVtIGluIFAuY29tcG9uZW50Lml0ZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ1ZhbHVlID09PSB1bmRlZmluZWQgKSB0aGluZ1ZhbHVlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuY29tcG9uZW50LnNldCggdGhpbmdJdGVtLCB0aGluZ1ZhbHVlLCBvcHRpb25zIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlbiwgY2hlY2sgdG8gdXBkYXRlIHRoZSBlbGVtZW50IHZhbHVlIGFuZCBicm9hZGNhc3QgYSBjaGFuZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaW5nSXRlbSA9PSAnc2VsZWN0JyB8fCB0aGluZ0l0ZW0gPT0gJ2NsZWFyJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsKCB0aGluZ0l0ZW0gPT0gJ2NsZWFyJyA/ICcnIDogUC5nZXQoIHRoaW5nSXRlbSwgU0VUVElOR1MuZm9ybWF0ICkgKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlciggJ2NoYW5nZScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIGEgbmV3IHBpY2tlci5cbiAgICAgICAgICAgICAgICAgICAgUC5yZW5kZXIoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBpc27igJl0IG11dGVkLCB0cmlnZ2VyIHF1ZXVlZCDigJxzZXTigJ0gZXZlbnRzIGFuZCBwYXNzIHRoZSBgdGhpbmdPYmplY3RgLlxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm11dGVkID8gUCA6IFAudHJpZ2dlciggJ3NldCcsIHRoaW5nT2JqZWN0IClcbiAgICAgICAgICAgIH0sIC8vc2V0XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgc29tZXRoaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oIHRoaW5nLCBmb3JtYXQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmXigJlzIHNvbWV0aGluZyB0byBnZXQuXG4gICAgICAgICAgICAgICAgdGhpbmcgPSB0aGluZyB8fCAndmFsdWUnXG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhIHBpY2tlciBzdGF0ZSBleGlzdHMsIHJldHVybiB0aGF0LlxuICAgICAgICAgICAgICAgIGlmICggU1RBVEVbIHRoaW5nIF0gIT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNUQVRFWyB0aGluZyBdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBzdWJtaXNzaW9uIHZhbHVlLCBpZiB0aGF0LlxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgPT0gJ3ZhbHVlU3VibWl0JyApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBQLl9oaWRkZW4gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUC5faGlkZGVuLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpbmcgPSAndmFsdWUnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSwgaWYgdGhhdC5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nID09ICd2YWx1ZScgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBFTEVNRU5ULnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYSBjb21wb25lbnQgaXRlbSBleGlzdHMsIHJldHVybiB0aGF0LlxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgaW4gUC5jb21wb25lbnQuaXRlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9ybWF0ID09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoaW5nVmFsdWUgPSBQLmNvbXBvbmVudC5nZXQoIHRoaW5nIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGluZ1ZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuY29tcG9uZW50LmZvcm1hdHMudG9TdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIGZvcm1hdCwgdGhpbmdWYWx1ZSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFAuY29tcG9uZW50LmdldCggdGhpbmcgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIC8vZ2V0XG5cblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEJpbmQgZXZlbnRzIG9uIHRoZSB0aGluZ3MuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uOiBmdW5jdGlvbiggdGhpbmcsIG1ldGhvZCwgaW50ZXJuYWwgKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhpbmdOYW1lLCB0aGluZ01ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpbmdJc09iamVjdCA9ICQuaXNQbGFpbk9iamVjdCggdGhpbmcgKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpbmdPYmplY3QgPSB0aGluZ0lzT2JqZWN0ID8gdGhpbmcgOiB7fVxuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGluZyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGhpbmcgaXNu4oCZdCBhbiBvYmplY3QsIG1ha2UgaXQgb25lLlxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGluZ0lzT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdPYmplY3RbIHRoaW5nIF0gPSBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIHRoaW5ncyB0byBiaW5kIHRvLlxuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0aGluZ05hbWUgaW4gdGhpbmdPYmplY3QgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdyYWIgdGhlIG1ldGhvZCBvZiB0aGUgdGhpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGluZ01ldGhvZCA9IHRoaW5nT2JqZWN0WyB0aGluZ05hbWUgXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCB3YXMgYW4gaW50ZXJuYWwgYmluZGluZywgcHJlZml4IGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpbnRlcm5hbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGluZ05hbWUgPSAnXycgKyB0aGluZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0aGluZyBtZXRob2RzIGNvbGxlY3Rpb24gZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBVEUubWV0aG9kc1sgdGhpbmdOYW1lIF0gPSBTVEFURS5tZXRob2RzWyB0aGluZ05hbWUgXSB8fCBbXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIG1ldGhvZCB0byB0aGUgcmVsYXRpdmUgbWV0aG9kIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICBTVEFURS5tZXRob2RzWyB0aGluZ05hbWUgXS5wdXNoKCB0aGluZ01ldGhvZCApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUFxuICAgICAgICAgICAgfSwgLy9vblxuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVbmJpbmQgZXZlbnRzIG9uIHRoZSB0aGluZ3MuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9mZjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGksIHRoaW5nTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgZm9yICggaSA9IDAsIG5hbWVzQ291bnQgPSBuYW1lcy5sZW5ndGg7IGkgPCBuYW1lc0NvdW50OyBpICs9IDEgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaW5nTmFtZSA9IG5hbWVzW2ldXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpbmdOYW1lIGluIFNUQVRFLm1ldGhvZHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgU1RBVEUubWV0aG9kc1t0aGluZ05hbWVdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaXJlIG9mZiBtZXRob2QgZXZlbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiggbmFtZSwgZGF0YSApIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RyaWdnZXIgPSBmdW5jdGlvbiggbmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZExpc3QgPSBTVEFURS5tZXRob2RzWyBuYW1lIF1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXRob2RMaXN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kTGlzdC5tYXAoIGZ1bmN0aW9uKCBtZXRob2QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBtZXRob2QsIFAsIFsgZGF0YSBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RyaWdnZXIoICdfJyArIG5hbWUgKVxuICAgICAgICAgICAgICAgIF90cmlnZ2VyKCBuYW1lIClcbiAgICAgICAgICAgICAgICByZXR1cm4gUFxuICAgICAgICAgICAgfSAvL3RyaWdnZXJcbiAgICAgICAgfSAvL1BpY2tlckluc3RhbmNlLnByb3RvdHlwZVxuXG5cbiAgICAvKipcbiAgICAgKiBXcmFwIHRoZSBwaWNrZXIgaG9sZGVyIGNvbXBvbmVudHMgdG9nZXRoZXIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3JlYXRlV3JhcHBlZENvbXBvbmVudCgpIHtcblxuICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgd3JhcHBlciBob2xkZXJcbiAgICAgICAgcmV0dXJuIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSggJ2RpdicsXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBpY2tlciB3cmFwcGVyIG5vZGVcbiAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSggJ2RpdicsXG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgZnJhbWVcbiAgICAgICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoICdkaXYnLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBpY2tlciBib3ggbm9kZVxuICAgICAgICAgICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoICdkaXYnLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbXBvbmVudHMgbm9kZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudC5ub2RlcyggU1RBVEUub3BlbiApLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcGlja2VyIGJveCBjbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0xBU1NFUy5ib3hcbiAgICAgICAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBQaWNrZXIgd3JhcCBjbGFzc1xuICAgICAgICAgICAgICAgICAgICBDTEFTU0VTLndyYXBcbiAgICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgICAgLy8gUGlja2VyIGZyYW1lIGNsYXNzXG4gICAgICAgICAgICAgICAgQ0xBU1NFUy5mcmFtZVxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgLy8gUGlja2VyIGhvbGRlciBjbGFzc1xuICAgICAgICAgICAgQ0xBU1NFUy5ob2xkZXJcbiAgICAgICAgKSAvL2VuZHJldHVyblxuICAgIH0gLy9jcmVhdGVXcmFwcGVkQ29tcG9uZW50XG5cblxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aGUgaW5wdXQgZWxlbWVudCB3aXRoIGFsbCBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcmVwYXJlRWxlbWVudCgpIHtcblxuICAgICAgICAkRUxFTUVOVC5cblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHBpY2tlciBkYXRhIGJ5IGNvbXBvbmVudCBuYW1lLlxuICAgICAgICAgICAgZGF0YShOQU1FLCBQKS5cblxuICAgICAgICAgICAgLy8gQWRkIHRoZSDigJxpbnB1dOKAnSBjbGFzcyBuYW1lLlxuICAgICAgICAgICAgYWRkQ2xhc3MoQ0xBU1NFUy5pbnB1dCkuXG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdGFiaW5kZXguXG4gICAgICAgICAgICBhdHRyKCd0YWJpbmRleCcsIC0xKS5cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmXigJlzIGEgYGRhdGEtdmFsdWVgLCB1cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgdmFsKCAkRUxFTUVOVC5kYXRhKCd2YWx1ZScpID9cbiAgICAgICAgICAgICAgICBQLmdldCgnc2VsZWN0JywgU0VUVElOR1MuZm9ybWF0KSA6XG4gICAgICAgICAgICAgICAgRUxFTUVOVC52YWx1ZVxuICAgICAgICAgICAgKVxuXG5cbiAgICAgICAgLy8gT25seSBiaW5kIGtleWRvd24gZXZlbnRzIGlmIHRoZSBlbGVtZW50IGlzbuKAmXQgZWRpdGFibGUuXG4gICAgICAgIGlmICggIVNFVFRJTkdTLmVkaXRhYmxlICkge1xuXG4gICAgICAgICAgICAkRUxFTUVOVC5cblxuICAgICAgICAgICAgICAgIC8vIE9uIGZvY3VzL2NsaWNrLCBmb2N1cyBvbnRvIHRoZSByb290IHRvIG9wZW4gaXQgdXAuXG4gICAgICAgICAgICAgICAgb24oICdmb2N1cy4nICsgU1RBVEUuaWQgKyAnIGNsaWNrLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QuZXEoMCkuZm9jdXMoKVxuICAgICAgICAgICAgICAgIH0pLlxuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGtleWJvYXJkIGV2ZW50IGJhc2VkIG9uIHRoZSBwaWNrZXIgYmVpbmcgb3BlbmVkIG9yIG5vdC5cbiAgICAgICAgICAgICAgICBvbiggJ2tleWRvd24uJyArIFNUQVRFLmlkLCBoYW5kbGVLZXlkb3duRXZlbnQgKVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGFyaWEgYXR0cmlidXRlcy5cbiAgICAgICAgYXJpYShFTEVNRU5ULCB7XG4gICAgICAgICAgICBoYXNwb3B1cDogdHJ1ZSxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIG93bnM6IEVMRU1FTlQuaWQgKyAnX3Jvb3QnXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRoZSByb290IHBpY2tlciBlbGVtZW50IHdpdGggYWxsIGJpbmRpbmdzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVFbGVtZW50Um9vdCgpIHtcblxuICAgICAgICBQLiRyb290LlxuXG4gICAgICAgICAgICBvbih7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgaU9TOC5cbiAgICAgICAgICAgICAgICBrZXlkb3duOiBoYW5kbGVLZXlkb3duRXZlbnQsXG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNvbWV0aGluZyB3aXRoaW4gdGhlIHJvb3QgaXMgZm9jdXNlZCwgc3RvcCBmcm9tIGJ1YmJsaW5nXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIGRvYyBhbmQgcmVtb3ZlIHRoZSDigJxmb2N1c2Vk4oCdIHN0YXRlIGZyb20gdGhlIHJvb3QuXG4gICAgICAgICAgICAgICAgZm9jdXNpbjogZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgICAgICAgICAgICAgICBQLiRyb290LnJlbW92ZUNsYXNzKCBDTEFTU0VTLmZvY3VzZWQgKVxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNvbWV0aGluZyB3aXRoaW4gdGhlIHJvb3QgaG9sZGVyIGlzIGNsaWNrZWQsIHN0b3AgaXRcbiAgICAgICAgICAgICAgICAvLyBmcm9tIGJ1YmJsaW5nIHRvIHRoZSBkb2MuXG4gICAgICAgICAgICAgICAgJ21vdXNlZG93biBjbGljayc6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0YXJnZXQgaXNu4oCZdCB0aGUgcm9vdCBob2xkZXIgc28gaXQgY2FuIGJ1YmJsZSB1cC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXQgIT0gUC4kcm9vdC5jaGlsZHJlbigpWyAwIF0gKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICogRm9yIG1vdXNlZG93biBldmVudHMsIGNhbmNlbCB0aGUgZGVmYXVsdCBhY3Rpb24gaW4gb3JkZXIgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcHJldmVudCBjYXNlcyB3aGVyZSBmb2N1cyBpcyBzaGlmdGVkIG9udG8gZXh0ZXJuYWwgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2hlbiB1c2luZyB0aGluZ3MgbGlrZSBqUXVlcnkgbW9iaWxlIG9yIE1hZ25pZmljUG9wdXAgKHJlZjogIzI0OSAmICMxMjApLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBBbHNvLCBmb3IgRmlyZWZveCwgZG9u4oCZdCBwcmV2ZW50IGFjdGlvbiBvbiB0aGUgYG9wdGlvbmAgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJyAmJiAhJCggdGFyZ2V0ICkuaXMoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBvcHRpb24nICkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlLWZvY3VzIG9udG8gdGhlIHJvb3Qgc28gdGhhdCB1c2VycyBjYW4gY2xpY2sgYXdheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gZWxlbWVudHMgZm9jdXNlZCB3aXRoaW4gdGhlIHBpY2tlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLlxuXG4gICAgICAgICAgICAvLyBBZGQvcmVtb3ZlIHRoZSDigJx0YXJnZXTigJ0gY2xhc3Mgb24gZm9jdXMgYW5kIGJsdXIuXG4gICAgICAgICAgICBvbih7XG4gICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5hZGRDbGFzcyggQ0xBU1NFUy50YXJnZXQgKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmx1cjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICRFTEVNRU5ULnJlbW92ZUNsYXNzKCBDTEFTU0VTLnRhcmdldCApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuXG5cbiAgICAgICAgICAgIC8vIE9wZW4gdGhlIHBpY2tlciBhbmQgYWRqdXN0IHRoZSByb290IOKAnGZvY3VzZWTigJ0gc3RhdGVcbiAgICAgICAgICAgIG9uKCAnZm9jdXMudG9PcGVuJywgaGFuZGxlRm9jdXNUb09wZW5FdmVudCApLlxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZeKAmXMgYSBjbGljayBvbiBhbiBhY3Rpb25hYmxlIGVsZW1lbnQsIGNhcnJ5IG91dCB0aGUgYWN0aW9ucy5cbiAgICAgICAgICAgIG9uKCAnY2xpY2snLCAnW2RhdGEtcGlja10sIFtkYXRhLW5hdl0sIFtkYXRhLWNsZWFyXSwgW2RhdGEtY2xvc2VdJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoIHRoaXMgKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0YSA9ICR0YXJnZXQuZGF0YSgpLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXREaXNhYmxlZCA9ICR0YXJnZXQuaGFzQ2xhc3MoIENMQVNTRVMubmF2RGlzYWJsZWQgKSB8fCAkdGFyZ2V0Lmhhc0NsYXNzKCBDTEFTU0VTLmRpc2FibGVkICksXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKiBGb3IgSUUsIG5vbi1mb2N1c2FibGUgZWxlbWVudHMgY2FuIGJlIGFjdGl2ZSBlbGVtZW50cyBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2ODQ1NjEpLlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gZ2V0QWN0aXZlRWxlbWVudCgpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50ICYmICggYWN0aXZlRWxlbWVudC50eXBlIHx8IGFjdGl2ZUVsZW1lbnQuaHJlZiApXG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgZGlzYWJsZWQgb3Igbm90aGluZyBpbnNpZGUgaXMgYWN0aXZlbHkgZm9jdXNlZCwgcmUtZm9jdXMgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgaWYgKCB0YXJnZXREaXNhYmxlZCB8fCBhY3RpdmVFbGVtZW50ICYmICEkLmNvbnRhaW5zKCBQLiRyb290WzBdLCBhY3RpdmVFbGVtZW50ICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QuZXEoMCkuZm9jdXMoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBzdXBlcmZpY2lhbGx5IGNoYW5nZWQsIHVwZGF0ZSB0aGUgYGhpZ2hsaWdodGAgYmFzZWQgb24gdGhlIGBuYXZgLlxuICAgICAgICAgICAgICAgIGlmICggIXRhcmdldERpc2FibGVkICYmIHRhcmdldERhdGEubmF2ICkge1xuICAgICAgICAgICAgICAgICAgICBQLnNldCggJ2hpZ2hsaWdodCcsIFAuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0LCB7IG5hdjogdGFyZ2V0RGF0YS5uYXYgfSApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIHBpY2tlZCwgc2V0IGBzZWxlY3RgIHRoZW4gY2xvc2Ugd2l0aCBmb2N1cy5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXRhcmdldERpc2FibGVkICYmICdwaWNrJyBpbiB0YXJnZXREYXRhICkge1xuICAgICAgICAgICAgICAgICAgICBQLnNldCggJ3NlbGVjdCcsIHRhcmdldERhdGEucGljayApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgYSDigJxjbGVhcuKAnSBidXR0b24gaXMgcHJlc3NlZCwgZW1wdHkgdGhlIHZhbHVlcyBhbmQgY2xvc2Ugd2l0aCBmb2N1cy5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0RGF0YS5jbGVhciApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5jbGVhcigpLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0RGF0YS5jbG9zZSApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KSAvL1AuJHJvb3RcblxuICAgICAgICBhcmlhKCBQLiRyb290WzBdLCAnaGlkZGVuJywgdHJ1ZSApXG4gICAgfVxuXG5cbiAgICAgLyoqXG4gICAgICAqIFByZXBhcmUgdGhlIGhpZGRlbiBpbnB1dCBlbGVtZW50IGFsb25nIHdpdGggYWxsIGJpbmRpbmdzLlxuICAgICAgKi9cbiAgICBmdW5jdGlvbiBwcmVwYXJlRWxlbWVudEhpZGRlbigpIHtcblxuICAgICAgICB2YXIgbmFtZVxuXG4gICAgICAgIGlmICggU0VUVElOR1MuaGlkZGVuTmFtZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIG5hbWUgPSBFTEVNRU5ULm5hbWVcbiAgICAgICAgICAgIEVMRU1FTlQubmFtZSA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuYW1lID0gW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBTRVRUSU5HUy5oaWRkZW5QcmVmaXggPT0gJ3N0cmluZycgPyBTRVRUSU5HUy5oaWRkZW5QcmVmaXggOiAnJyxcbiAgICAgICAgICAgICAgICB0eXBlb2YgU0VUVElOR1MuaGlkZGVuU3VmZml4ID09ICdzdHJpbmcnID8gU0VUVElOR1MuaGlkZGVuU3VmZml4IDogJ19zdWJtaXQnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBuYW1lID0gbmFtZVswXSArIEVMRU1FTlQubmFtZSArIG5hbWVbMV1cbiAgICAgICAgfVxuXG4gICAgICAgIFAuX2hpZGRlbiA9ICQoXG4gICAgICAgICAgICAnPGlucHV0ICcgK1xuICAgICAgICAgICAgJ3R5cGU9aGlkZGVuICcgK1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIG5hbWUgdXNpbmcgdGhlIG9yaWdpbmFsIGlucHV04oCZcyB3aXRoIGEgcHJlZml4IGFuZCBzdWZmaXguXG4gICAgICAgICAgICAnbmFtZT1cIicgKyBuYW1lICsgJ1wiJyArXG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIHZhbHVlLCBzZXQgdGhlIGhpZGRlbiB2YWx1ZSBhcyB3ZWxsLlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICRFTEVNRU5ULmRhdGEoJ3ZhbHVlJykgfHwgRUxFTUVOVC52YWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgICcgdmFsdWU9XCInICsgUC5nZXQoJ3NlbGVjdCcsIFNFVFRJTkdTLmZvcm1hdFN1Ym1pdCkgKyAnXCInIDpcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgJz4nXG4gICAgICAgIClbMF1cblxuICAgICAgICAkRUxFTUVOVC5cblxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGNoYW5nZXMsIHVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0IHdpdGggdGhlIGNvcnJlY3QgZm9ybWF0LlxuICAgICAgICAgICAgb24oJ2NoYW5nZS4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIFAuX2hpZGRlbi52YWx1ZSA9IEVMRU1FTlQudmFsdWUgP1xuICAgICAgICAgICAgICAgICAgICBQLmdldCgnc2VsZWN0JywgU0VUVElOR1MuZm9ybWF0U3VibWl0KSA6XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gSW5zZXJ0IHRoZSBoaWRkZW4gaW5wdXQgYXMgc3BlY2lmaWVkIGluIHRoZSBzZXR0aW5ncy5cbiAgICAgICAgaWYgKCBTRVRUSU5HUy5jb250YWluZXIgKSAkKCBTRVRUSU5HUy5jb250YWluZXIgKS5hcHBlbmQoIFAuX2hpZGRlbiApXG4gICAgICAgIGVsc2UgJEVMRU1FTlQuYWZ0ZXIoIFAuX2hpZGRlbiApXG4gICAgfVxuXG5cbiAgICAvLyBGb3IgaU9TOC5cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlkb3duRXZlbnQoIGV2ZW50ICkge1xuXG4gICAgICAgIHZhciBrZXljb2RlID0gZXZlbnQua2V5Q29kZSxcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgb25lIG9mIHRoZSBkZWxldGUga2V5cyB3YXMgcHJlc3NlZC5cbiAgICAgICAgICAgIGlzS2V5Y29kZURlbGV0ZSA9IC9eKDh8NDYpJC8udGVzdChrZXljb2RlKVxuXG4gICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBJRSBjbGVhcnMgdGhlIGlucHV0IHZhbHVlIG9uIOKAnGVzY2FwZeKAnS5cbiAgICAgICAgaWYgKCBrZXljb2RlID09IDI3ICkge1xuICAgICAgICAgICAgUC5jbG9zZSgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGBzcGFjZWAgb3IgYGRlbGV0ZWAgd2FzIHByZXNzZWQgb3IgdGhlIHBpY2tlciBpcyBjbG9zZWQgd2l0aCBhIGtleSBtb3ZlbWVudC5cbiAgICAgICAgaWYgKCBrZXljb2RlID09IDMyIHx8IGlzS2V5Y29kZURlbGV0ZSB8fCAhU1RBVEUub3BlbiAmJiBQLmNvbXBvbmVudC5rZXlba2V5Y29kZV0gKSB7XG5cbiAgICAgICAgICAgIC8vIFByZXZlbnQgaXQgZnJvbSBtb3ZpbmcgdGhlIHBhZ2UgYW5kIGJ1YmJsaW5nIHRvIGRvYy5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgIC8vIElmIGBkZWxldGVgIHdhcyBwcmVzc2VkLCBjbGVhciB0aGUgdmFsdWVzIGFuZCBjbG9zZSB0aGUgcGlja2VyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIG9wZW4gdGhlIHBpY2tlci5cbiAgICAgICAgICAgIGlmICggaXNLZXljb2RlRGVsZXRlICkgeyBQLmNsZWFyKCkuY2xvc2UoKSB9XG4gICAgICAgICAgICBlbHNlIHsgUC5vcGVuKCkgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBTZXBhcmF0ZWQgZm9yIElFXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9jdXNUb09wZW5FdmVudCggZXZlbnQgKSB7XG5cbiAgICAgICAgLy8gU3RvcCB0aGUgZXZlbnQgZnJvbSBwcm9wYWdhdGluZyB0byB0aGUgZG9jLlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIC8vIElmIGl04oCZcyBhIGZvY3VzIGV2ZW50LCBhZGQgdGhlIOKAnGZvY3VzZWTigJ0gY2xhc3MgdG8gdGhlIHJvb3QuXG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PSAnZm9jdXMnICkge1xuICAgICAgICAgICAgUC4kcm9vdC5hZGRDbGFzcyggQ0xBU1NFUy5mb2N1c2VkIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZCB0aGVuIGZpbmFsbHkgb3BlbiB0aGUgcGlja2VyLlxuICAgICAgICBQLm9wZW4oKVxuICAgIH1cblxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IHBpY2tlciBpbnN0YW5jZS5cbiAgICByZXR1cm4gbmV3IFBpY2tlckluc3RhbmNlKClcbn0gLy9QaWNrZXJDb25zdHJ1Y3RvclxuXG5cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBjbGFzc2VzIGFuZCBwcmVmaXggdG8gdXNlIGZvciB0aGUgSFRNTCBjbGFzc2VzLlxuICovXG5QaWNrZXJDb25zdHJ1Y3Rvci5rbGFzc2VzID0gZnVuY3Rpb24oIHByZWZpeCApIHtcbiAgICBwcmVmaXggPSBwcmVmaXggfHwgJ3BpY2tlcidcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHBpY2tlcjogcHJlZml4LFxuICAgICAgICBvcGVuZWQ6IHByZWZpeCArICctLW9wZW5lZCcsXG4gICAgICAgIGZvY3VzZWQ6IHByZWZpeCArICctLWZvY3VzZWQnLFxuXG4gICAgICAgIGlucHV0OiBwcmVmaXggKyAnX19pbnB1dCcsXG4gICAgICAgIGFjdGl2ZTogcHJlZml4ICsgJ19faW5wdXQtLWFjdGl2ZScsXG4gICAgICAgIHRhcmdldDogcHJlZml4ICsgJ19faW5wdXQtLXRhcmdldCcsXG5cbiAgICAgICAgaG9sZGVyOiBwcmVmaXggKyAnX19ob2xkZXInLFxuXG4gICAgICAgIGZyYW1lOiBwcmVmaXggKyAnX19mcmFtZScsXG4gICAgICAgIHdyYXA6IHByZWZpeCArICdfX3dyYXAnLFxuXG4gICAgICAgIGJveDogcHJlZml4ICsgJ19fYm94J1xuICAgIH1cbn0gLy9QaWNrZXJDb25zdHJ1Y3Rvci5rbGFzc2VzXG5cblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBkZWZhdWx0IHRoZW1lIGlzIGJlaW5nIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIGlzVXNpbmdEZWZhdWx0VGhlbWUoIGVsZW1lbnQgKSB7XG5cbiAgICB2YXIgdGhlbWUsXG4gICAgICAgIHByb3AgPSAncG9zaXRpb24nXG5cbiAgICAvLyBGb3IgSUUuXG4gICAgaWYgKCBlbGVtZW50LmN1cnJlbnRTdHlsZSApIHtcbiAgICAgICAgdGhlbWUgPSBlbGVtZW50LmN1cnJlbnRTdHlsZVtwcm9wXVxuICAgIH1cblxuICAgIC8vIEZvciBub3JtYWwgYnJvd3NlcnMuXG4gICAgZWxzZSBpZiAoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICkge1xuICAgICAgICB0aGVtZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW1lbnQgKVtwcm9wXVxuICAgIH1cblxuICAgIHJldHVybiB0aGVtZSA9PSAnZml4ZWQnXG59XG5cblxuXG4vKipcbiAqIEdldCB0aGUgd2lkdGggb2YgdGhlIGJyb3dzZXLigJlzIHNjcm9sbGJhci5cbiAqIFRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9Wb2RrYUJlYXJzL1JlbW9kYWwvYmxvYi9tYXN0ZXIvc3JjL2pxdWVyeS5yZW1vZGFsLmpzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xuXG4gICAgaWYgKCAkaHRtbC5oZWlnaHQoKSA8PSAkd2luZG93LmhlaWdodCgpICkge1xuICAgICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIHZhciAkb3V0ZXIgPSAkKCAnPGRpdiBzdHlsZT1cInZpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjEwMHB4XCIgLz4nICkuXG4gICAgICAgIGFwcGVuZFRvKCAnYm9keScgKVxuXG4gICAgLy8gR2V0IHRoZSB3aWR0aCB3aXRob3V0IHNjcm9sbGJhcnMuXG4gICAgdmFyIHdpZHRoV2l0aG91dFNjcm9sbCA9ICRvdXRlclswXS5vZmZzZXRXaWR0aFxuXG4gICAgLy8gRm9yY2UgYWRkaW5nIHNjcm9sbGJhcnMuXG4gICAgJG91dGVyLmNzcyggJ292ZXJmbG93JywgJ3Njcm9sbCcgKVxuXG4gICAgLy8gQWRkIHRoZSBpbm5lciBkaXYuXG4gICAgdmFyICRpbm5lciA9ICQoICc8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJVwiIC8+JyApLmFwcGVuZFRvKCAkb3V0ZXIgKVxuXG4gICAgLy8gR2V0IHRoZSB3aWR0aCB3aXRoIHNjcm9sbGJhcnMuXG4gICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9ICRpbm5lclswXS5vZmZzZXRXaWR0aFxuXG4gICAgLy8gUmVtb3ZlIHRoZSBkaXZzLlxuICAgICRvdXRlci5yZW1vdmUoKVxuXG4gICAgLy8gUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHdpZHRocy5cbiAgICByZXR1cm4gd2lkdGhXaXRob3V0U2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsXG59XG5cblxuXG4vKipcbiAqIFBpY2tlckNvbnN0cnVjdG9yIGhlbHBlciBtZXRob2RzLlxuICovXG5QaWNrZXJDb25zdHJ1Y3Rvci5fID0ge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZ3JvdXAgb2Ygbm9kZXMuIEV4cGVjdHM6XG4gICAgICogYFxuICAgICAgICB7XG4gICAgICAgICAgICBtaW46ICAgIHtJbnRlZ2VyfSxcbiAgICAgICAgICAgIG1heDogICAge0ludGVnZXJ9LFxuICAgICAgICAgICAgaTogICAgICB7SW50ZWdlcn0sXG4gICAgICAgICAgICBub2RlOiAgIHtTdHJpbmd9LFxuICAgICAgICAgICAgaXRlbTogICB7RnVuY3Rpb259XG4gICAgICAgIH1cbiAgICAgKiBgXG4gICAgICovXG4gICAgZ3JvdXA6IGZ1bmN0aW9uKCBncm91cE9iamVjdCApIHtcblxuICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIFNjb3BlIGZvciB0aGUgbG9vcGVkIG9iamVjdFxuICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlLFxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIG5vZGVzIGxpc3RcbiAgICAgICAgICAgIG5vZGVzTGlzdCA9ICcnLFxuXG4gICAgICAgICAgICAvLyBUaGUgY291bnRlciBzdGFydHMgZnJvbSB0aGUgYG1pbmBcbiAgICAgICAgICAgIGNvdW50ZXIgPSBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGdyb3VwT2JqZWN0Lm1pbiwgZ3JvdXBPYmplY3QgKVxuXG5cbiAgICAgICAgLy8gTG9vcCBmcm9tIHRoZSBgbWluYCB0byBgbWF4YCwgaW5jcmVtZW50aW5nIGJ5IGBpYFxuICAgICAgICBmb3IgKCA7IGNvdW50ZXIgPD0gUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBncm91cE9iamVjdC5tYXgsIGdyb3VwT2JqZWN0LCBbIGNvdW50ZXIgXSApOyBjb3VudGVyICs9IGdyb3VwT2JqZWN0LmkgKSB7XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGBpdGVtYCBmdW5jdGlvbiB3aXRoaW4gc2NvcGUgb2YgdGhlIG9iamVjdFxuICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlID0gUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBncm91cE9iamVjdC5pdGVtLCBncm91cE9iamVjdCwgWyBjb3VudGVyIF0gKVxuXG4gICAgICAgICAgICAvLyBTcGxpY2UgdGhlIHN1Ymdyb3VwIGFuZCBjcmVhdGUgbm9kZXMgb3V0IG9mIHRoZSBzdWIgbm9kZXNcbiAgICAgICAgICAgIG5vZGVzTGlzdCArPSBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoXG4gICAgICAgICAgICAgICAgZ3JvdXBPYmplY3Qubm9kZSxcbiAgICAgICAgICAgICAgICBsb29wT2JqZWN0U2NvcGVbIDAgXSwgICAvLyB0aGUgbm9kZVxuICAgICAgICAgICAgICAgIGxvb3BPYmplY3RTY29wZVsgMSBdLCAgIC8vIHRoZSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlWyAyIF0gICAgLy8gdGhlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiB0aGUgbGlzdCBvZiBub2Rlc1xuICAgICAgICByZXR1cm4gbm9kZXNMaXN0XG4gICAgfSwgLy9ncm91cFxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkb20gbm9kZSBzdHJpbmdcbiAgICAgKi9cbiAgICBub2RlOiBmdW5jdGlvbiggd3JhcHBlciwgaXRlbSwga2xhc3MsIGF0dHJpYnV0ZSApIHtcblxuICAgICAgICAvLyBJZiB0aGUgaXRlbSBpcyBmYWxzZS15LCBqdXN0IHJldHVybiBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKCAhaXRlbSApIHJldHVybiAnJ1xuXG4gICAgICAgIC8vIElmIHRoZSBpdGVtIGlzIGFuIGFycmF5LCBkbyBhIGpvaW5cbiAgICAgICAgaXRlbSA9ICQuaXNBcnJheSggaXRlbSApID8gaXRlbS5qb2luKCAnJyApIDogaXRlbVxuXG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgY2xhc3NcbiAgICAgICAga2xhc3MgPSBrbGFzcyA/ICcgY2xhc3M9XCInICsga2xhc3MgKyAnXCInIDogJydcblxuICAgICAgICAvLyBDaGVjayBmb3IgYW55IGF0dHJpYnV0ZXNcbiAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlID8gJyAnICsgYXR0cmlidXRlIDogJydcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHdyYXBwZWQgaXRlbVxuICAgICAgICByZXR1cm4gJzwnICsgd3JhcHBlciArIGtsYXNzICsgYXR0cmlidXRlICsgJz4nICsgaXRlbSArICc8LycgKyB3cmFwcGVyICsgJz4nXG4gICAgfSwgLy9ub2RlXG5cblxuICAgIC8qKlxuICAgICAqIExlYWQgbnVtYmVycyBiZWxvdyAxMCB3aXRoIGEgemVyby5cbiAgICAgKi9cbiAgICBsZWFkOiBmdW5jdGlvbiggbnVtYmVyICkge1xuICAgICAgICByZXR1cm4gKCBudW1iZXIgPCAxMCA/ICcwJzogJycgKSArIG51bWJlclxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgYSBmdW5jdGlvbiBvdGhlcndpc2UgcmV0dXJuIHRoZSB2YWx1ZS5cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHNjb3BlLCBhcmdzICkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjay5hcHBseSggc2NvcGUsIGFyZ3MgfHwgW10gKSA6IGNhbGxiYWNrXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHNlY29uZCBjaGFyYWN0ZXIgaXMgYSBkaWdpdCwgbGVuZ3RoIGlzIDIgb3RoZXJ3aXNlIDEuXG4gICAgICovXG4gICAgZGlnaXRzOiBmdW5jdGlvbiggc3RyaW5nICkge1xuICAgICAgICByZXR1cm4gKCAvXFxkLyApLnRlc3QoIHN0cmluZ1sgMSBdICkgPyAyIDogMVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRlbGwgaWYgc29tZXRoaW5nIGlzIGEgZGF0ZSBvYmplY3QuXG4gICAgICovXG4gICAgaXNEYXRlOiBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKCB2YWx1ZSApLmluZGV4T2YoICdEYXRlJyApID4gLTEgJiYgdGhpcy5pc0ludGVnZXIoIHZhbHVlLmdldERhdGUoKSApXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVGVsbCBpZiBzb21ldGhpbmcgaXMgYW4gaW50ZWdlci5cbiAgICAgKi9cbiAgICBpc0ludGVnZXI6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwoIHZhbHVlICkuaW5kZXhPZiggJ051bWJlcicgKSA+IC0xICYmIHZhbHVlICUgMSA9PT0gMFxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBBUklBIGF0dHJpYnV0ZSBzdHJpbmdzLlxuICAgICAqL1xuICAgIGFyaWFBdHRyOiBhcmlhQXR0clxufSAvL1BpY2tlckNvbnN0cnVjdG9yLl9cblxuXG5cbi8qKlxuICogRXh0ZW5kIHRoZSBwaWNrZXIgd2l0aCBhIGNvbXBvbmVudCBhbmQgZGVmYXVsdHMuXG4gKi9cblBpY2tlckNvbnN0cnVjdG9yLmV4dGVuZCA9IGZ1bmN0aW9uKCBuYW1lLCBDb21wb25lbnQgKSB7XG5cbiAgICAvLyBFeHRlbmQgalF1ZXJ5LlxuICAgICQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBvcHRpb25zLCBhY3Rpb24gKSB7XG5cbiAgICAgICAgLy8gR3JhYiB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAgICAgIHZhciBjb21wb25lbnREYXRhID0gdGhpcy5kYXRhKCBuYW1lIClcblxuICAgICAgICAvLyBJZiB0aGUgcGlja2VyIGlzIHJlcXVlc3RlZCwgcmV0dXJuIHRoZSBkYXRhIG9iamVjdC5cbiAgICAgICAgaWYgKCBvcHRpb25zID09ICdwaWNrZXInICkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudERhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBjb21wb25lbnQgZGF0YSBleGlzdHMgYW5kIGBvcHRpb25zYCBpcyBhIHN0cmluZywgY2Fycnkgb3V0IHRoZSBhY3Rpb24uXG4gICAgICAgIGlmICggY29tcG9uZW50RGF0YSAmJiB0eXBlb2Ygb3B0aW9ucyA9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHJldHVybiBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGNvbXBvbmVudERhdGFbIG9wdGlvbnMgXSwgY29tcG9uZW50RGF0YSwgWyBhY3Rpb24gXSApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCBlYWNoIG1hdGNoZWQgZWxlbWVudCBhbmQgaWYgdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBkb2VzbuKAmXQgZXhpc3QsIGNyZWF0ZSBhIG5ldyBwaWNrZXIgdXNpbmcgYHRoaXNgIGVsZW1lbnRcbiAgICAgICAgLy8gYW5kIG1lcmdpbmcgdGhlIGRlZmF1bHRzIGFuZCBvcHRpb25zIHdpdGggYSBkZWVwIGNvcHkuXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCggdGhpcyApXG4gICAgICAgICAgICBpZiAoICEkdGhpcy5kYXRhKCBuYW1lICkgKSB7XG4gICAgICAgICAgICAgICAgbmV3IFBpY2tlckNvbnN0cnVjdG9yKCB0aGlzLCBuYW1lLCBDb21wb25lbnQsIG9wdGlvbnMgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMuXG4gICAgJC5mblsgbmFtZSBdLmRlZmF1bHRzID0gQ29tcG9uZW50LmRlZmF1bHRzXG59IC8vUGlja2VyQ29uc3RydWN0b3IuZXh0ZW5kXG5cblxuXG5mdW5jdGlvbiBhcmlhKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoICQuaXNQbGFpbk9iamVjdChhdHRyaWJ1dGUpICkge1xuICAgICAgICBmb3IgKCB2YXIga2V5IGluIGF0dHJpYnV0ZSApIHtcbiAgICAgICAgICAgIGFyaWFTZXQoZWxlbWVudCwga2V5LCBhdHRyaWJ1dGVba2V5XSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJpYVNldChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFyaWFTZXQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAoYXR0cmlidXRlID09ICdyb2xlJyA/ICcnIDogJ2FyaWEtJykgKyBhdHRyaWJ1dGUsXG4gICAgICAgIHZhbHVlXG4gICAgKVxufVxuZnVuY3Rpb24gYXJpYUF0dHIoYXR0cmlidXRlLCBkYXRhKSB7XG4gICAgaWYgKCAhJC5pc1BsYWluT2JqZWN0KGF0dHJpYnV0ZSkgKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IHsgYXR0cmlidXRlOiBkYXRhIH1cbiAgICB9XG4gICAgZGF0YSA9ICcnXG4gICAgZm9yICggdmFyIGtleSBpbiBhdHRyaWJ1dGUgKSB7XG4gICAgICAgIHZhciBhdHRyID0gKGtleSA9PSAncm9sZScgPyAnJyA6ICdhcmlhLScpICsga2V5LFxuICAgICAgICAgICAgYXR0clZhbCA9IGF0dHJpYnV0ZVtrZXldXG4gICAgICAgIGRhdGEgKz0gYXR0clZhbCA9PSBudWxsID8gJycgOiBhdHRyICsgJz1cIicgKyBhdHRyaWJ1dGVba2V5XSArICdcIidcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLy8gSUU4IGJ1ZyB0aHJvd3MgYW4gZXJyb3IgZm9yIGFjdGl2ZUVsZW1lbnRzIHdpdGhpbiBpZnJhbWVzLlxuZnVuY3Rpb24gZ2V0QWN0aXZlRWxlbWVudCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgIH0gY2F0Y2ggKCBlcnIgKSB7IH1cbn1cblxuXG5cbi8vIEV4cG9zZSB0aGUgcGlja2VyIGNvbnN0cnVjdG9yLlxucmV0dXJuIFBpY2tlckNvbnN0cnVjdG9yXG5cblxufSkpO1xuXG5cbjsvKiFcbiAqIERhdGUgcGlja2VyIGZvciBwaWNrYWRhdGUuanMgdjMuNS4wXG4gKiBodHRwOi8vYW1zdWwuZ2l0aHViLmlvL3BpY2thZGF0ZS5qcy9kYXRlLmh0bVxuICovXG5cbihmdW5jdGlvbiAoIGZhY3RvcnkgKSB7XG5cbiAgICAvLyBBTUQuXG4gICAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApXG4gICAgICAgIGRlZmluZSggWydwaWNrZXInLCAnanF1ZXJ5J10sIGZhY3RvcnkgKVxuXG4gICAgLy8gTm9kZS5qcy9icm93c2VyaWZ5LlxuICAgIGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyApXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggcmVxdWlyZSgnLi9waWNrZXIuanMnKSwgcmVxdWlyZSgnanF1ZXJ5JykgKVxuXG4gICAgLy8gQnJvd3NlciBnbG9iYWxzLlxuICAgIGVsc2UgZmFjdG9yeSggUGlja2VyLCBqUXVlcnkgKVxuXG59KGZ1bmN0aW9uKCBQaWNrZXIsICQgKSB7XG5cblxuLyoqXG4gKiBHbG9iYWxzIGFuZCBjb25zdGFudHNcbiAqL1xudmFyIERBWVNfSU5fV0VFSyA9IDcsXG4gICAgV0VFS1NfSU5fQ0FMRU5EQVIgPSA2LFxuICAgIF8gPSBQaWNrZXIuX1xuXG5cblxuLyoqXG4gKiBUaGUgZGF0ZSBwaWNrZXIgY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRGF0ZVBpY2tlciggcGlja2VyLCBzZXR0aW5ncyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGVsZW1lbnQgPSBwaWNrZXIuJG5vZGVbIDAgXSxcbiAgICAgICAgZWxlbWVudFZhbHVlID0gZWxlbWVudC52YWx1ZSxcbiAgICAgICAgZWxlbWVudERhdGFWYWx1ZSA9IHBpY2tlci4kbm9kZS5kYXRhKCAndmFsdWUnICksXG4gICAgICAgIHZhbHVlU3RyaW5nID0gZWxlbWVudERhdGFWYWx1ZSB8fCBlbGVtZW50VmFsdWUsXG4gICAgICAgIGZvcm1hdFN0cmluZyA9IGVsZW1lbnREYXRhVmFsdWUgPyBzZXR0aW5ncy5mb3JtYXRTdWJtaXQgOiBzZXR0aW5ncy5mb3JtYXQsXG4gICAgICAgIGlzUlRMID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmN1cnJlbnRTdHlsZSA/XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgSUUuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50U3R5bGUuZGlyZWN0aW9uID09ICdydGwnIDpcblxuICAgICAgICAgICAgICAgIC8vIEZvciBub3JtYWwgYnJvd3NlcnMuXG4gICAgICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSggcGlja2VyLiRyb290WzBdICkuZGlyZWN0aW9uID09ICdydGwnXG4gICAgICAgIH1cblxuICAgIGNhbGVuZGFyLnNldHRpbmdzID0gc2V0dGluZ3NcbiAgICBjYWxlbmRhci4kbm9kZSA9IHBpY2tlci4kbm9kZVxuXG4gICAgLy8gVGhlIHF1ZXVlIG9mIG1ldGhvZHMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gYnVpbGQgaXRlbSBvYmplY3RzLlxuICAgIGNhbGVuZGFyLnF1ZXVlID0ge1xuICAgICAgICBtaW46ICdtZWFzdXJlIGNyZWF0ZScsXG4gICAgICAgIG1heDogJ21lYXN1cmUgY3JlYXRlJyxcbiAgICAgICAgbm93OiAnbm93IGNyZWF0ZScsXG4gICAgICAgIHNlbGVjdDogJ3BhcnNlIGNyZWF0ZSB2YWxpZGF0ZScsXG4gICAgICAgIGhpZ2hsaWdodDogJ3BhcnNlIG5hdmlnYXRlIGNyZWF0ZSB2YWxpZGF0ZScsXG4gICAgICAgIHZpZXc6ICdwYXJzZSBjcmVhdGUgdmFsaWRhdGUgdmlld3NldCcsXG4gICAgICAgIGRpc2FibGU6ICdkZWFjdGl2YXRlJyxcbiAgICAgICAgZW5hYmxlOiAnYWN0aXZhdGUnXG4gICAgfVxuXG4gICAgLy8gVGhlIGNvbXBvbmVudCdzIGl0ZW0gb2JqZWN0LlxuICAgIGNhbGVuZGFyLml0ZW0gPSB7fVxuXG4gICAgY2FsZW5kYXIuaXRlbS5jbGVhciA9IG51bGxcbiAgICBjYWxlbmRhci5pdGVtLmRpc2FibGUgPSAoIHNldHRpbmdzLmRpc2FibGUgfHwgW10gKS5zbGljZSggMCApXG4gICAgY2FsZW5kYXIuaXRlbS5lbmFibGUgPSAtKGZ1bmN0aW9uKCBjb2xsZWN0aW9uRGlzYWJsZWQgKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uRGlzYWJsZWRbIDAgXSA9PT0gdHJ1ZSA/IGNvbGxlY3Rpb25EaXNhYmxlZC5zaGlmdCgpIDogLTFcbiAgICB9KSggY2FsZW5kYXIuaXRlbS5kaXNhYmxlIClcblxuICAgIGNhbGVuZGFyLlxuICAgICAgICBzZXQoICdtaW4nLCBzZXR0aW5ncy5taW4gKS5cbiAgICAgICAgc2V0KCAnbWF4Jywgc2V0dGluZ3MubWF4ICkuXG4gICAgICAgIHNldCggJ25vdycgKVxuXG4gICAgLy8gV2hlbiB0aGVyZeKAmXMgYSB2YWx1ZSwgc2V0IHRoZSBgc2VsZWN0YCwgd2hpY2ggaW4gdHVyblxuICAgIC8vIGFsc28gc2V0cyB0aGUgYGhpZ2hsaWdodGAgYW5kIGB2aWV3YC5cbiAgICBpZiAoIHZhbHVlU3RyaW5nICkge1xuICAgICAgICBjYWxlbmRhci5zZXQoICdzZWxlY3QnLCB2YWx1ZVN0cmluZywgeyBmb3JtYXQ6IGZvcm1hdFN0cmluZyB9KVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJl4oCZcyBubyB2YWx1ZSwgZGVmYXVsdCB0byBoaWdobGlnaHRpbmcg4oCcdG9kYXnigJ0uXG4gICAgZWxzZSB7XG4gICAgICAgIGNhbGVuZGFyLlxuICAgICAgICAgICAgc2V0KCAnc2VsZWN0JywgbnVsbCApLlxuICAgICAgICAgICAgc2V0KCAnaGlnaGxpZ2h0JywgY2FsZW5kYXIuaXRlbS5ub3cgKVxuICAgIH1cblxuXG4gICAgLy8gVGhlIGtleWNvZGUgdG8gbW92ZW1lbnQgbWFwcGluZy5cbiAgICBjYWxlbmRhci5rZXkgPSB7XG4gICAgICAgIDQwOiA3LCAvLyBEb3duXG4gICAgICAgIDM4OiAtNywgLy8gVXBcbiAgICAgICAgMzk6IGZ1bmN0aW9uKCkgeyByZXR1cm4gaXNSVEwoKSA/IC0xIDogMSB9LCAvLyBSaWdodFxuICAgICAgICAzNzogZnVuY3Rpb24oKSB7IHJldHVybiBpc1JUTCgpID8gMSA6IC0xIH0sIC8vIExlZnRcbiAgICAgICAgZ286IGZ1bmN0aW9uKCB0aW1lQ2hhbmdlICkge1xuICAgICAgICAgICAgdmFyIGhpZ2hsaWdodGVkT2JqZWN0ID0gY2FsZW5kYXIuaXRlbS5oaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKCBoaWdobGlnaHRlZE9iamVjdC55ZWFyLCBoaWdobGlnaHRlZE9iamVjdC5tb250aCwgaGlnaGxpZ2h0ZWRPYmplY3QuZGF0ZSArIHRpbWVDaGFuZ2UgKVxuICAgICAgICAgICAgY2FsZW5kYXIuc2V0KFxuICAgICAgICAgICAgICAgICdoaWdobGlnaHQnLFxuICAgICAgICAgICAgICAgIHRhcmdldERhdGUsXG4gICAgICAgICAgICAgICAgeyBpbnRlcnZhbDogdGltZUNoYW5nZSB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIEJpbmQgc29tZSBwaWNrZXIgZXZlbnRzLlxuICAgIHBpY2tlci5cbiAgICAgICAgb24oICdyZW5kZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RNb250aCApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci5zZXQoICdoaWdobGlnaHQnLCBbIHBpY2tlci5nZXQoICd2aWV3JyApLnllYXIsIHZhbHVlLCBwaWNrZXIuZ2V0KCAnaGlnaGxpZ2h0JyApLmRhdGUgXSApXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RNb250aCApLnRyaWdnZXIoICdmb2N1cycgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0WWVhciApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci5zZXQoICdoaWdobGlnaHQnLCBbIHZhbHVlLCBwaWNrZXIuZ2V0KCAndmlldycgKS5tb250aCwgcGlja2VyLmdldCggJ2hpZ2hsaWdodCcgKS5kYXRlIF0gKVxuICAgICAgICAgICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0WWVhciApLnRyaWdnZXIoICdmb2N1cycgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEgKS5cbiAgICAgICAgb24oICdvcGVuJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaW5jbHVkZVRvZGF5ID0gJydcbiAgICAgICAgICAgIGlmICggY2FsZW5kYXIuZGlzYWJsZWQoIGNhbGVuZGFyLmdldCgnbm93JykgKSApIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlVG9kYXkgPSAnOm5vdCguJyArIHNldHRpbmdzLmtsYXNzLmJ1dHRvblRvZGF5ICsgJyknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJ2J1dHRvbicgKyBpbmNsdWRlVG9kYXkgKyAnLCBzZWxlY3QnICkuYXR0ciggJ2Rpc2FibGVkJywgZmFsc2UgKVxuICAgICAgICB9LCAxICkuXG4gICAgICAgIG9uKCAnY2xvc2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnYnV0dG9uLCBzZWxlY3QnICkuYXR0ciggJ2Rpc2FibGVkJywgdHJ1ZSApXG4gICAgICAgIH0sIDEgKVxuXG59IC8vRGF0ZVBpY2tlclxuXG5cbi8qKlxuICogU2V0IGEgZGF0ZXBpY2tlciBpdGVtIG9iamVjdC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgY2FsZW5kYXJJdGVtID0gY2FsZW5kYXIuaXRlbVxuXG4gICAgLy8gSWYgdGhlIHZhbHVlIGlzIGBudWxsYCBqdXN0IHNldCBpdCBpbW1lZGlhdGVseS5cbiAgICBpZiAoIHZhbHVlID09PSBudWxsICkge1xuICAgICAgICBpZiAoIHR5cGUgPT0gJ2NsZWFyJyApIHR5cGUgPSAnc2VsZWN0J1xuICAgICAgICBjYWxlbmRhckl0ZW1bIHR5cGUgXSA9IHZhbHVlXG4gICAgICAgIHJldHVybiBjYWxlbmRhclxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIHRoZSBxdWV1ZSBvZiBtZXRob2RzLCBhbmQgaW52b2tlIHRoZSBmdW5jdGlvbnMuXG4gICAgLy8gVXBkYXRlIHRoaXMgYXMgdGhlIHRpbWUgdW5pdCwgYW5kIHNldCB0aGUgZmluYWwgdmFsdWUgYXMgdGhpcyBpdGVtLlxuICAgIC8vICogSW4gdGhlIGNhc2Ugb2YgYGVuYWJsZWAsIGtlZXAgdGhlIHF1ZXVlIGJ1dCBzZXQgYGRpc2FibGVgIGluc3RlYWQuXG4gICAgLy8gICBBbmQgaW4gdGhlIGNhc2Ugb2YgYGZsaXBgLCBrZWVwIHRoZSBxdWV1ZSBidXQgc2V0IGBlbmFibGVgIGluc3RlYWQuXG4gICAgY2FsZW5kYXJJdGVtWyAoIHR5cGUgPT0gJ2VuYWJsZScgPyAnZGlzYWJsZScgOiB0eXBlID09ICdmbGlwJyA/ICdlbmFibGUnIDogdHlwZSApIF0gPSBjYWxlbmRhci5xdWV1ZVsgdHlwZSBdLnNwbGl0KCAnICcgKS5tYXAoIGZ1bmN0aW9uKCBtZXRob2QgKSB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXJbIG1ldGhvZCBdKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApXG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0pLnBvcCgpXG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGNhc2NhZGUgdGhyb3VnaCBtb3JlIHVwZGF0ZXMuXG4gICAgaWYgKCB0eXBlID09ICdzZWxlY3QnICkge1xuICAgICAgICBjYWxlbmRhci5zZXQoICdoaWdobGlnaHQnLCBjYWxlbmRhckl0ZW0uc2VsZWN0LCBvcHRpb25zIClcbiAgICB9XG4gICAgZWxzZSBpZiAoIHR5cGUgPT0gJ2hpZ2hsaWdodCcgKSB7XG4gICAgICAgIGNhbGVuZGFyLnNldCggJ3ZpZXcnLCBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0LCBvcHRpb25zIClcbiAgICB9XG4gICAgZWxzZSBpZiAoIHR5cGUubWF0Y2goIC9eKGZsaXB8bWlufG1heHxkaXNhYmxlfGVuYWJsZSkkLyApICkge1xuICAgICAgICBpZiAoIGNhbGVuZGFySXRlbS5zZWxlY3QgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGNhbGVuZGFySXRlbS5zZWxlY3QgKSApIHtcbiAgICAgICAgICAgIGNhbGVuZGFyLnNldCggJ3NlbGVjdCcsIGNhbGVuZGFySXRlbS5zZWxlY3QsIG9wdGlvbnMgKVxuICAgICAgICB9XG4gICAgICAgIGlmICggY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCAmJiBjYWxlbmRhci5kaXNhYmxlZCggY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCApICkge1xuICAgICAgICAgICAgY2FsZW5kYXIuc2V0KCAnaGlnaGxpZ2h0JywgY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCwgb3B0aW9ucyApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FsZW5kYXJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5zZXRcblxuXG4vKipcbiAqIEdldCBhIGRhdGVwaWNrZXIgaXRlbSBvYmplY3QuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCB0eXBlICkge1xuICAgIHJldHVybiB0aGlzLml0ZW1bIHR5cGUgXVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmdldFxuXG5cbi8qKlxuICogQ3JlYXRlIGEgcGlja2VyIGRhdGUgb2JqZWN0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XG5cbiAgICB2YXIgaXNJbmZpbml0ZVZhbHVlLFxuICAgICAgICBjYWxlbmRhciA9IHRoaXNcblxuICAgIC8vIElmIHRoZXJl4oCZcyBubyB2YWx1ZSwgdXNlIHRoZSB0eXBlIGFzIHRoZSB2YWx1ZS5cbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyB0eXBlIDogdmFsdWVcblxuXG4gICAgLy8gSWYgaXTigJlzIGluZmluaXR5LCB1cGRhdGUgdGhlIHZhbHVlLlxuICAgIGlmICggdmFsdWUgPT0gLUluZmluaXR5IHx8IHZhbHVlID09IEluZmluaXR5ICkge1xuICAgICAgICBpc0luZmluaXRlVmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIC8vIElmIGl04oCZcyBhbiBvYmplY3QsIHVzZSB0aGUgbmF0aXZlIGRhdGUgb2JqZWN0LlxuICAgIGVsc2UgaWYgKCAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICkgJiYgXy5pc0ludGVnZXIoIHZhbHVlLnBpY2sgKSApIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5vYmpcbiAgICB9XG5cbiAgICAvLyBJZiBpdOKAmXMgYW4gYXJyYXksIGNvbnZlcnQgaXQgaW50byBhIGRhdGUgYW5kIG1ha2Ugc3VyZVxuICAgIC8vIHRoYXQgaXTigJlzIGEgdmFsaWQgZGF0ZSDigJMgb3RoZXJ3aXNlIGRlZmF1bHQgdG8gdG9kYXkuXG4gICAgZWxzZSBpZiAoICQuaXNBcnJheSggdmFsdWUgKSApIHtcbiAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSggdmFsdWVbIDAgXSwgdmFsdWVbIDEgXSwgdmFsdWVbIDIgXSApXG4gICAgICAgIHZhbHVlID0gXy5pc0RhdGUoIHZhbHVlICkgPyB2YWx1ZSA6IGNhbGVuZGFyLmNyZWF0ZSgpLm9ialxuICAgIH1cblxuICAgIC8vIElmIGl04oCZcyBhIG51bWJlciBvciBkYXRlIG9iamVjdCwgbWFrZSBhIG5vcm1hbGl6ZWQgZGF0ZS5cbiAgICBlbHNlIGlmICggXy5pc0ludGVnZXIoIHZhbHVlICkgfHwgXy5pc0RhdGUoIHZhbHVlICkgKSB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIubm9ybWFsaXplKCBuZXcgRGF0ZSggdmFsdWUgKSwgb3B0aW9ucyApXG4gICAgfVxuXG4gICAgLy8gSWYgaXTigJlzIGEgbGl0ZXJhbCB0cnVlIG9yIGFueSBvdGhlciBjYXNlLCBzZXQgaXQgdG8gbm93LlxuICAgIGVsc2UgLyppZiAoIHZhbHVlID09PSB0cnVlICkqLyB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIubm93KCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBjb21waWxlZCBvYmplY3QuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZTogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldERhdGUoKSxcbiAgICAgICAgZGF5OiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0RGF5KCksXG4gICAgICAgIG9iajogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLFxuICAgICAgICBwaWNrOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0VGltZSgpXG4gICAgfVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgcmFuZ2UgbGltaXQgb2JqZWN0IHVzaW5nIGFuIGFycmF5LCBkYXRlIG9iamVjdCxcbiAqIGxpdGVyYWwg4oCcdHJ1ZeKAnSwgb3IgaW50ZWdlciByZWxhdGl2ZSB0byBhbm90aGVyIHRpbWUuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVJhbmdlID0gZnVuY3Rpb24oIGZyb20sIHRvICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgY3JlYXRlRGF0ZSA9IGZ1bmN0aW9uKCBkYXRlICkge1xuICAgICAgICAgICAgaWYgKCBkYXRlID09PSB0cnVlIHx8ICQuaXNBcnJheSggZGF0ZSApIHx8IF8uaXNEYXRlKCBkYXRlICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGVuZGFyLmNyZWF0ZSggZGF0ZSApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgICB9XG5cbiAgICAvLyBDcmVhdGUgb2JqZWN0cyBpZiBwb3NzaWJsZS5cbiAgICBpZiAoICFfLmlzSW50ZWdlciggZnJvbSApICkge1xuICAgICAgICBmcm9tID0gY3JlYXRlRGF0ZSggZnJvbSApXG4gICAgfVxuICAgIGlmICggIV8uaXNJbnRlZ2VyKCB0byApICkge1xuICAgICAgICB0byA9IGNyZWF0ZURhdGUoIHRvIClcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcmVsYXRpdmUgZGF0ZXMuXG4gICAgaWYgKCBfLmlzSW50ZWdlciggZnJvbSApICYmICQuaXNQbGFpbk9iamVjdCggdG8gKSApIHtcbiAgICAgICAgZnJvbSA9IFsgdG8ueWVhciwgdG8ubW9udGgsIHRvLmRhdGUgKyBmcm9tIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCBfLmlzSW50ZWdlciggdG8gKSAmJiAkLmlzUGxhaW5PYmplY3QoIGZyb20gKSApIHtcbiAgICAgICAgdG8gPSBbIGZyb20ueWVhciwgZnJvbS5tb250aCwgZnJvbS5kYXRlICsgdG8gXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmcm9tOiBjcmVhdGVEYXRlKCBmcm9tICksXG4gICAgICAgIHRvOiBjcmVhdGVEYXRlKCB0byApXG4gICAgfVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVJhbmdlXG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIGRhdGUgdW5pdCBmYWxscyB3aXRoaW4gYSBkYXRlIHJhbmdlIG9iamVjdC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUud2l0aGluUmFuZ2UgPSBmdW5jdGlvbiggcmFuZ2UsIGRhdGVVbml0ICkge1xuICAgIHJhbmdlID0gdGhpcy5jcmVhdGVSYW5nZShyYW5nZS5mcm9tLCByYW5nZS50bylcbiAgICByZXR1cm4gZGF0ZVVuaXQucGljayA+PSByYW5nZS5mcm9tLnBpY2sgJiYgZGF0ZVVuaXQucGljayA8PSByYW5nZS50by5waWNrXG59XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZSByYW5nZSBvYmplY3RzIG92ZXJsYXAuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm92ZXJsYXBSYW5nZXMgPSBmdW5jdGlvbiggb25lLCB0d28gKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzXG5cbiAgICAvLyBDb252ZXJ0IHRoZSByYW5nZXMgaW50byBjb21wYXJhYmxlIGRhdGVzLlxuICAgIG9uZSA9IGNhbGVuZGFyLmNyZWF0ZVJhbmdlKCBvbmUuZnJvbSwgb25lLnRvIClcbiAgICB0d28gPSBjYWxlbmRhci5jcmVhdGVSYW5nZSggdHdvLmZyb20sIHR3by50byApXG5cbiAgICByZXR1cm4gY2FsZW5kYXIud2l0aGluUmFuZ2UoIG9uZSwgdHdvLmZyb20gKSB8fCBjYWxlbmRhci53aXRoaW5SYW5nZSggb25lLCB0d28udG8gKSB8fFxuICAgICAgICBjYWxlbmRhci53aXRoaW5SYW5nZSggdHdvLCBvbmUuZnJvbSApIHx8IGNhbGVuZGFyLndpdGhpblJhbmdlKCB0d28sIG9uZS50byApXG59XG5cblxuLyoqXG4gKiBHZXQgdGhlIGRhdGUgdG9kYXkuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm5vdyA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApIHtcbiAgICB2YWx1ZSA9IG5ldyBEYXRlKClcbiAgICBpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5yZWwgKSB7XG4gICAgICAgIHZhbHVlLnNldERhdGUoIHZhbHVlLmdldERhdGUoKSArIG9wdGlvbnMucmVsIClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCB2YWx1ZSwgb3B0aW9ucyApXG59XG5cblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byBuZXh0L3ByZXYgbW9udGguXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm5hdmlnYXRlID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xuXG4gICAgdmFyIHRhcmdldERhdGVPYmplY3QsXG4gICAgICAgIHRhcmdldFllYXIsXG4gICAgICAgIHRhcmdldE1vbnRoLFxuICAgICAgICB0YXJnZXREYXRlLFxuICAgICAgICBpc1RhcmdldEFycmF5ID0gJC5pc0FycmF5KCB2YWx1ZSApLFxuICAgICAgICBpc1RhcmdldE9iamVjdCA9ICQuaXNQbGFpbk9iamVjdCggdmFsdWUgKSxcbiAgICAgICAgdmlld3NldE9iamVjdCA9IHRoaXMuaXRlbS52aWV3LyosXG4gICAgICAgIHNhZmV0eSA9IDEwMCovXG5cblxuICAgIGlmICggaXNUYXJnZXRBcnJheSB8fCBpc1RhcmdldE9iamVjdCApIHtcblxuICAgICAgICBpZiAoIGlzVGFyZ2V0T2JqZWN0ICkge1xuICAgICAgICAgICAgdGFyZ2V0WWVhciA9IHZhbHVlLnllYXJcbiAgICAgICAgICAgIHRhcmdldE1vbnRoID0gdmFsdWUubW9udGhcbiAgICAgICAgICAgIHRhcmdldERhdGUgPSB2YWx1ZS5kYXRlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRZZWFyID0gK3ZhbHVlWzBdXG4gICAgICAgICAgICB0YXJnZXRNb250aCA9ICt2YWx1ZVsxXVxuICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9ICt2YWx1ZVsyXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2XigJlyZSBuYXZpZ2F0aW5nIG1vbnRocyBidXQgdGhlIHZpZXcgaXMgaW4gYSBkaWZmZXJlbnRcbiAgICAgICAgLy8gbW9udGgsIG5hdmlnYXRlIHRvIHRoZSB2aWV34oCZcyB5ZWFyIGFuZCBtb250aC5cbiAgICAgICAgaWYgKCBvcHRpb25zICYmIG9wdGlvbnMubmF2ICYmIHZpZXdzZXRPYmplY3QgJiYgdmlld3NldE9iamVjdC5tb250aCAhPT0gdGFyZ2V0TW9udGggKSB7XG4gICAgICAgICAgICB0YXJnZXRZZWFyID0gdmlld3NldE9iamVjdC55ZWFyXG4gICAgICAgICAgICB0YXJnZXRNb250aCA9IHZpZXdzZXRPYmplY3QubW9udGhcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIGV4cGVjdGVkIHRhcmdldCB5ZWFyIGFuZCBtb250aC5cbiAgICAgICAgdGFyZ2V0RGF0ZU9iamVjdCA9IG5ldyBEYXRlKCB0YXJnZXRZZWFyLCB0YXJnZXRNb250aCArICggb3B0aW9ucyAmJiBvcHRpb25zLm5hdiA/IG9wdGlvbnMubmF2IDogMCApLCAxIClcbiAgICAgICAgdGFyZ2V0WWVhciA9IHRhcmdldERhdGVPYmplY3QuZ2V0RnVsbFllYXIoKVxuICAgICAgICB0YXJnZXRNb250aCA9IHRhcmdldERhdGVPYmplY3QuZ2V0TW9udGgoKVxuXG4gICAgICAgIC8vIElmIHRoZSBtb250aCB3ZeKAmXJlIGdvaW5nIHRvIGRvZXNu4oCZdCBoYXZlIGVub3VnaCBkYXlzLFxuICAgICAgICAvLyBrZWVwIGRlY3JlYXNpbmcgdGhlIGRhdGUgdW50aWwgd2UgcmVhY2ggdGhlIG1vbnRo4oCZcyBsYXN0IGRhdGUuXG4gICAgICAgIHdoaWxlICggLypzYWZldHkgJiYqLyBuZXcgRGF0ZSggdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGgsIHRhcmdldERhdGUgKS5nZXRNb250aCgpICE9PSB0YXJnZXRNb250aCApIHtcbiAgICAgICAgICAgIHRhcmdldERhdGUgLT0gMVxuICAgICAgICAgICAgLypzYWZldHkgLT0gMVxuICAgICAgICAgICAgaWYgKCAhc2FmZXR5ICkge1xuICAgICAgICAgICAgICAgIHRocm93ICdGZWxsIGludG8gYW4gaW5maW5pdGUgbG9vcCB3aGlsZSBuYXZpZ2F0aW5nIHRvICcgKyBuZXcgRGF0ZSggdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGgsIHRhcmdldERhdGUgKSArICcuJ1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IFsgdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGgsIHRhcmdldERhdGUgXVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLm5hdmlnYXRlXG5cblxuLyoqXG4gKiBOb3JtYWxpemUgYSBkYXRlIGJ5IHNldHRpbmcgdGhlIGhvdXJzIHRvIG1pZG5pZ2h0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiggdmFsdWUvKiwgb3B0aW9ucyovICkge1xuICAgIHZhbHVlLnNldEhvdXJzKCAwLCAwLCAwLCAwIClcbiAgICByZXR1cm4gdmFsdWVcbn1cblxuXG4vKipcbiAqIE1lYXN1cmUgdGhlIHJhbmdlIG9mIGRhdGVzLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5tZWFzdXJlID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLyosIG9wdGlvbnMqLyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXNcblxuICAgIC8vIElmIGl04oCZcyBhbnl0aGluZyBmYWxzZS15LCByZW1vdmUgdGhlIGxpbWl0cy5cbiAgICBpZiAoICF2YWx1ZSApIHtcbiAgICAgICAgdmFsdWUgPSB0eXBlID09ICdtaW4nID8gLUluZmluaXR5IDogSW5maW5pdHlcbiAgICB9XG5cbiAgICAvLyBJZiBpdOKAmXMgYSBzdHJpbmcsIHBhcnNlIGl0LlxuICAgIGVsc2UgaWYgKCB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIucGFyc2UoIHR5cGUsIHZhbHVlIClcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGFuIGludGVnZXIsIGdldCBhIGRhdGUgcmVsYXRpdmUgdG8gdG9kYXkuXG4gICAgZWxzZSBpZiAoIF8uaXNJbnRlZ2VyKCB2YWx1ZSApICkge1xuICAgICAgICB2YWx1ZSA9IGNhbGVuZGFyLm5vdyggdHlwZSwgdmFsdWUsIHsgcmVsOiB2YWx1ZSB9IClcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbn0gLy8vRGF0ZVBpY2tlci5wcm90b3R5cGUubWVhc3VyZVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgdmlld3NldCBvYmplY3QgYmFzZWQgb24gbmF2aWdhdGlvbi5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUudmlld3NldCA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlT2JqZWN0LyosIG9wdGlvbnMqLyApIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoWyBkYXRlT2JqZWN0LnllYXIsIGRhdGVPYmplY3QubW9udGgsIDEgXSlcbn1cblxuXG4vKipcbiAqIFZhbGlkYXRlIGEgZGF0ZSBhcyBlbmFibGVkIGFuZCBzaGlmdCBpZiBuZWVkZWQuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24oIHR5cGUsIGRhdGVPYmplY3QsIG9wdGlvbnMgKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuXG4gICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGRhdGUuXG4gICAgICAgIG9yaWdpbmFsRGF0ZU9iamVjdCA9IGRhdGVPYmplY3QsXG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYW4gaW50ZXJ2YWwuXG4gICAgICAgIGludGVydmFsID0gb3B0aW9ucyAmJiBvcHRpb25zLmludGVydmFsID8gb3B0aW9ucy5pbnRlcnZhbCA6IDEsXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbGVuZGFyIGVuYWJsZWQgZGF0ZXMgYXJlIGludmVydGVkLlxuICAgICAgICBpc0ZsaXBwZWRCYXNlID0gY2FsZW5kYXIuaXRlbS5lbmFibGUgPT09IC0xLFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW55IGVuYWJsZWQgZGF0ZXMgYWZ0ZXIvYmVmb3JlIG5vdy5cbiAgICAgICAgaGFzRW5hYmxlZEJlZm9yZVRhcmdldCwgaGFzRW5hYmxlZEFmdGVyVGFyZ2V0LFxuXG4gICAgICAgIC8vIFRoZSBtaW4gJiBtYXggbGltaXRzLlxuICAgICAgICBtaW5MaW1pdE9iamVjdCA9IGNhbGVuZGFyLml0ZW0ubWluLFxuICAgICAgICBtYXhMaW1pdE9iamVjdCA9IGNhbGVuZGFyLml0ZW0ubWF4LFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdl4oCZdmUgcmVhY2hlZCB0aGUgbGltaXQgZHVyaW5nIHNoaWZ0aW5nLlxuICAgICAgICByZWFjaGVkTWluLCByZWFjaGVkTWF4LFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYWxlbmRhciBpcyBpbnZlcnRlZCBhbmQgYXQgbGVhc3Qgb25lIHdlZWtkYXkgaXMgZW5hYmxlZC5cbiAgICAgICAgaGFzRW5hYmxlZFdlZWtkYXlzID0gaXNGbGlwcGVkQmFzZSAmJiBjYWxlbmRhci5pdGVtLmRpc2FibGUuZmlsdGVyKCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGRhdGUsIGNoZWNrIHdoZXJlIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBpZiAoICQuaXNBcnJheSggdmFsdWUgKSApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVRpbWUgPSBjYWxlbmRhci5jcmVhdGUoIHZhbHVlICkucGlja1xuICAgICAgICAgICAgICAgIGlmICggZGF0ZVRpbWUgPCBkYXRlT2JqZWN0LnBpY2sgKSBoYXNFbmFibGVkQmVmb3JlVGFyZ2V0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBkYXRlVGltZSA+IGRhdGVPYmplY3QucGljayApIGhhc0VuYWJsZWRBZnRlclRhcmdldCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIG9ubHkgaW50ZWdlcnMgZm9yIGVuYWJsZWQgd2Vla2RheXMuXG4gICAgICAgICAgICByZXR1cm4gXy5pc0ludGVnZXIoIHZhbHVlIClcbiAgICAgICAgfSkubGVuZ3RoLyosXG5cbiAgICAgICAgc2FmZXR5ID0gMTAwKi9cblxuXG5cbiAgICAvLyBDYXNlcyB0byB2YWxpZGF0ZSBmb3I6XG4gICAgLy8gWzFdIE5vdCBpbnZlcnRlZCBhbmQgZGF0ZSBkaXNhYmxlZC5cbiAgICAvLyBbMl0gSW52ZXJ0ZWQgYW5kIHNvbWUgZGF0ZXMgZW5hYmxlZC5cbiAgICAvLyBbM10gTm90IGludmVydGVkIGFuZCBvdXQgb2YgcmFuZ2UuXG4gICAgLy9cbiAgICAvLyBDYXNlcyB0byAqKm5vdCoqIHZhbGlkYXRlIGZvcjpcbiAgICAvLyDigKIgTmF2aWdhdGluZyBtb250aHMuXG4gICAgLy8g4oCiIE5vdCBpbnZlcnRlZCBhbmQgZGF0ZSBlbmFibGVkLlxuICAgIC8vIOKAoiBJbnZlcnRlZCBhbmQgYWxsIGRhdGVzIGRpc2FibGVkLlxuICAgIC8vIOKAoiAuLmFuZCBhbnl0aGluZyBlbHNlLlxuICAgIGlmICggIW9wdGlvbnMgfHwgIW9wdGlvbnMubmF2ICkgaWYgKFxuICAgICAgICAvKiAxICovICggIWlzRmxpcHBlZEJhc2UgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGRhdGVPYmplY3QgKSApIHx8XG4gICAgICAgIC8qIDIgKi8gKCBpc0ZsaXBwZWRCYXNlICYmIGNhbGVuZGFyLmRpc2FibGVkKCBkYXRlT2JqZWN0ICkgJiYgKCBoYXNFbmFibGVkV2Vla2RheXMgfHwgaGFzRW5hYmxlZEJlZm9yZVRhcmdldCB8fCBoYXNFbmFibGVkQWZ0ZXJUYXJnZXQgKSApIHx8XG4gICAgICAgIC8qIDMgKi8gKCAhaXNGbGlwcGVkQmFzZSAmJiAoZGF0ZU9iamVjdC5waWNrIDw9IG1pbkxpbWl0T2JqZWN0LnBpY2sgfHwgZGF0ZU9iamVjdC5waWNrID49IG1heExpbWl0T2JqZWN0LnBpY2spIClcbiAgICApIHtcblxuXG4gICAgICAgIC8vIFdoZW4gaW52ZXJ0ZWQsIGZsaXAgdGhlIGRpcmVjdGlvbiBpZiB0aGVyZSBhcmVu4oCZdCBhbnkgZW5hYmxlZCB3ZWVrZGF5c1xuICAgICAgICAvLyBhbmQgdGhlcmUgYXJlIG5vIGVuYWJsZWQgZGF0ZXMgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgaW50ZXJ2YWwuXG4gICAgICAgIGlmICggaXNGbGlwcGVkQmFzZSAmJiAhaGFzRW5hYmxlZFdlZWtkYXlzICYmICggKCAhaGFzRW5hYmxlZEFmdGVyVGFyZ2V0ICYmIGludGVydmFsID4gMCApIHx8ICggIWhhc0VuYWJsZWRCZWZvcmVUYXJnZXQgJiYgaW50ZXJ2YWwgPCAwICkgKSApIHtcbiAgICAgICAgICAgIGludGVydmFsICo9IC0xXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEtlZXAgbG9vcGluZyB1bnRpbCB3ZSByZWFjaCBhbiBlbmFibGVkIGRhdGUuXG4gICAgICAgIHdoaWxlICggLypzYWZldHkgJiYqLyBjYWxlbmRhci5kaXNhYmxlZCggZGF0ZU9iamVjdCApICkge1xuXG4gICAgICAgICAgICAvKnNhZmV0eSAtPSAxXG4gICAgICAgICAgICBpZiAoICFzYWZldHkgKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ZlbGwgaW50byBhbiBpbmZpbml0ZSBsb29wIHdoaWxlIHZhbGlkYXRpbmcgJyArIGRhdGVPYmplY3Qub2JqICsgJy4nXG4gICAgICAgICAgICB9Ki9cblxuXG4gICAgICAgICAgICAvLyBJZiB3ZeKAmXZlIGxvb3BlZCBpbnRvIHRoZSBuZXh0L3ByZXYgbW9udGggd2l0aCBhIGxhcmdlIGludGVydmFsLCByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGRhdGUgYW5kIGZsYXR0ZW4gdGhlIGludGVydmFsLlxuICAgICAgICAgICAgaWYgKCBNYXRoLmFicyggaW50ZXJ2YWwgKSA+IDEgJiYgKCBkYXRlT2JqZWN0Lm1vbnRoIDwgb3JpZ2luYWxEYXRlT2JqZWN0Lm1vbnRoIHx8IGRhdGVPYmplY3QubW9udGggPiBvcmlnaW5hbERhdGVPYmplY3QubW9udGggKSApIHtcbiAgICAgICAgICAgICAgICBkYXRlT2JqZWN0ID0gb3JpZ2luYWxEYXRlT2JqZWN0XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCA+IDAgPyAxIDogLTFcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBJZiB3ZeKAmXZlIHJlYWNoZWQgdGhlIG1pbi9tYXggbGltaXQsIHJldmVyc2UgdGhlIGRpcmVjdGlvbiwgZmxhdHRlbiB0aGUgaW50ZXJ2YWwgYW5kIHNldCBpdCB0byB0aGUgbGltaXQuXG4gICAgICAgICAgICBpZiAoIGRhdGVPYmplY3QucGljayA8PSBtaW5MaW1pdE9iamVjdC5waWNrICkge1xuICAgICAgICAgICAgICAgIHJlYWNoZWRNaW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSAxXG4gICAgICAgICAgICAgICAgZGF0ZU9iamVjdCA9IGNhbGVuZGFyLmNyZWF0ZShbXG4gICAgICAgICAgICAgICAgICAgIG1pbkxpbWl0T2JqZWN0LnllYXIsXG4gICAgICAgICAgICAgICAgICAgIG1pbkxpbWl0T2JqZWN0Lm1vbnRoLFxuICAgICAgICAgICAgICAgICAgICBtaW5MaW1pdE9iamVjdC5kYXRlICsgKGRhdGVPYmplY3QucGljayA9PT0gbWluTGltaXRPYmplY3QucGljayA/IDAgOiAtMSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIGRhdGVPYmplY3QucGljayA+PSBtYXhMaW1pdE9iamVjdC5waWNrICkge1xuICAgICAgICAgICAgICAgIHJlYWNoZWRNYXggPSB0cnVlXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSAtMVxuICAgICAgICAgICAgICAgIGRhdGVPYmplY3QgPSBjYWxlbmRhci5jcmVhdGUoW1xuICAgICAgICAgICAgICAgICAgICBtYXhMaW1pdE9iamVjdC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBtYXhMaW1pdE9iamVjdC5tb250aCxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGltaXRPYmplY3QuZGF0ZSArIChkYXRlT2JqZWN0LnBpY2sgPT09IG1heExpbWl0T2JqZWN0LnBpY2sgPyAwIDogMSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIElmIHdl4oCZdmUgcmVhY2hlZCBib3RoIGxpbWl0cywganVzdCBicmVhayBvdXQgb2YgdGhlIGxvb3AuXG4gICAgICAgICAgICBpZiAoIHJlYWNoZWRNaW4gJiYgcmVhY2hlZE1heCApIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIGNyZWF0ZSB0aGUgc2hpZnRlZCBkYXRlIHVzaW5nIHRoZSBpbnRlcnZhbCBhbmQga2VlcCBsb29waW5nLlxuICAgICAgICAgICAgZGF0ZU9iamVjdCA9IGNhbGVuZGFyLmNyZWF0ZShbIGRhdGVPYmplY3QueWVhciwgZGF0ZU9iamVjdC5tb250aCwgZGF0ZU9iamVjdC5kYXRlICsgaW50ZXJ2YWwgXSlcbiAgICAgICAgfVxuXG4gICAgfSAvL2VuZGlmXG5cblxuICAgIC8vIFJldHVybiB0aGUgZGF0ZSBvYmplY3Qgc2V0dGxlZCBvbi5cbiAgICByZXR1cm4gZGF0ZU9iamVjdFxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLnZhbGlkYXRlXG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgZGlzYWJsZWQuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmRpc2FibGVkID0gZnVuY3Rpb24oIGRhdGVUb1ZlcmlmeSApIHtcblxuICAgIHZhclxuICAgICAgICBjYWxlbmRhciA9IHRoaXMsXG5cbiAgICAgICAgLy8gRmlsdGVyIHRocm91Z2ggdGhlIGRpc2FibGVkIGRhdGVzIHRvIGNoZWNrIGlmIHRoaXMgaXMgb25lLlxuICAgICAgICBpc0Rpc2FibGVkTWF0Y2ggPSBjYWxlbmRhci5pdGVtLmRpc2FibGUuZmlsdGVyKCBmdW5jdGlvbiggZGF0ZVRvRGlzYWJsZSApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRhdGUgaXMgYSBudW1iZXIsIG1hdGNoIHRoZSB3ZWVrZGF5IHdpdGggMGluZGV4IGFuZCBgZmlyc3REYXlgIGNoZWNrLlxuICAgICAgICAgICAgaWYgKCBfLmlzSW50ZWdlciggZGF0ZVRvRGlzYWJsZSApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlVG9WZXJpZnkuZGF5ID09PSAoIGNhbGVuZGFyLnNldHRpbmdzLmZpcnN0RGF5ID8gZGF0ZVRvRGlzYWJsZSA6IGRhdGVUb0Rpc2FibGUgLSAxICkgJSA3XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbiBhcnJheSBvciBhIG5hdGl2ZSBKUyBkYXRlLCBjcmVhdGUgYW5kIG1hdGNoIHRoZSBleGFjdCBkYXRlLlxuICAgICAgICAgICAgaWYgKCAkLmlzQXJyYXkoIGRhdGVUb0Rpc2FibGUgKSB8fCBfLmlzRGF0ZSggZGF0ZVRvRGlzYWJsZSApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlVG9WZXJpZnkucGljayA9PT0gY2FsZW5kYXIuY3JlYXRlKCBkYXRlVG9EaXNhYmxlICkucGlja1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdOKAmXMgYW4gb2JqZWN0LCBtYXRjaCBhIGRhdGUgd2l0aGluIHRoZSDigJxmcm9t4oCdIGFuZCDigJx0b+KAnSByYW5nZS5cbiAgICAgICAgICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCBkYXRlVG9EaXNhYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGVuZGFyLndpdGhpblJhbmdlKCBkYXRlVG9EaXNhYmxlLCBkYXRlVG9WZXJpZnkgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgLy8gSWYgdGhpcyBkYXRlIG1hdGNoZXMgYSBkaXNhYmxlZCBkYXRlLCBjb25maXJtIGl04oCZcyBub3QgaW52ZXJ0ZWQuXG4gICAgaXNEaXNhYmxlZE1hdGNoID0gaXNEaXNhYmxlZE1hdGNoLmxlbmd0aCAmJiAhaXNEaXNhYmxlZE1hdGNoLmZpbHRlcihmdW5jdGlvbiggZGF0ZVRvRGlzYWJsZSApIHtcbiAgICAgICAgcmV0dXJuICQuaXNBcnJheSggZGF0ZVRvRGlzYWJsZSApICYmIGRhdGVUb0Rpc2FibGVbM10gPT0gJ2ludmVydGVkJyB8fFxuICAgICAgICAgICAgJC5pc1BsYWluT2JqZWN0KCBkYXRlVG9EaXNhYmxlICkgJiYgZGF0ZVRvRGlzYWJsZS5pbnZlcnRlZFxuICAgIH0pLmxlbmd0aFxuXG4gICAgLy8gQ2hlY2sgdGhlIGNhbGVuZGFyIOKAnGVuYWJsZWTigJ0gZmxhZyBhbmQgcmVzcGVjdGl2ZWx5IGZsaXAgdGhlXG4gICAgLy8gZGlzYWJsZWQgc3RhdGUuIFRoZW4gYWxzbyBjaGVjayBpZiBpdOKAmXMgYmV5b25kIHRoZSBtaW4vbWF4IGxpbWl0cy5cbiAgICByZXR1cm4gY2FsZW5kYXIuaXRlbS5lbmFibGUgPT09IC0xID8gIWlzRGlzYWJsZWRNYXRjaCA6IGlzRGlzYWJsZWRNYXRjaCB8fFxuICAgICAgICBkYXRlVG9WZXJpZnkucGljayA8IGNhbGVuZGFyLml0ZW0ubWluLnBpY2sgfHxcbiAgICAgICAgZGF0ZVRvVmVyaWZ5LnBpY2sgPiBjYWxlbmRhci5pdGVtLm1heC5waWNrXG5cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5kaXNhYmxlZFxuXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgaW50byBhIHVzYWJsZSB0eXBlLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIHBhcnNpbmdPYmplY3QgPSB7fVxuXG4gICAgLy8gSWYgaXTigJlzIGFscmVhZHkgcGFyc2VkLCB3ZeKAmXJlIGdvb2QuXG4gICAgaWYgKCAhdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnICkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIGEgYC5mb3JtYXRgIHRvIHBhcnNlIHRoZSB2YWx1ZSB3aXRoLlxuICAgIGlmICggISggb3B0aW9ucyAmJiBvcHRpb25zLmZvcm1hdCApICkge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgICAgICBvcHRpb25zLmZvcm1hdCA9IGNhbGVuZGFyLnNldHRpbmdzLmZvcm1hdFxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIGZvcm1hdCBpbnRvIGFuIGFycmF5IGFuZCB0aGVuIG1hcCB0aHJvdWdoIGl0LlxuICAgIGNhbGVuZGFyLmZvcm1hdHMudG9BcnJheSggb3B0aW9ucy5mb3JtYXQgKS5tYXAoIGZ1bmN0aW9uKCBsYWJlbCApIHtcblxuICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIEdyYWIgdGhlIGZvcm1hdHRpbmcgbGFiZWwuXG4gICAgICAgICAgICBmb3JtYXR0aW5nTGFiZWwgPSBjYWxlbmRhci5mb3JtYXRzWyBsYWJlbCBdLFxuXG4gICAgICAgICAgICAvLyBUaGUgZm9ybWF0IGxlbmd0aCBpcyBmcm9tIHRoZSBmb3JtYXR0aW5nIGxhYmVsIGZ1bmN0aW9uIG9yIHRoZVxuICAgICAgICAgICAgLy8gbGFiZWwgbGVuZ3RoIHdpdGhvdXQgdGhlIGVzY2FwaW5nIGV4Y2xhbWF0aW9uICghKSBtYXJrLlxuICAgICAgICAgICAgZm9ybWF0TGVuZ3RoID0gZm9ybWF0dGluZ0xhYmVsID8gXy50cmlnZ2VyKCBmb3JtYXR0aW5nTGFiZWwsIGNhbGVuZGFyLCBbIHZhbHVlLCBwYXJzaW5nT2JqZWN0IF0gKSA6IGxhYmVsLnJlcGxhY2UoIC9eIS8sICcnICkubGVuZ3RoXG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIGZvcm1hdCBsYWJlbCwgc3BsaXQgdGhlIHZhbHVlIHVwIHRvIHRoZSBmb3JtYXQgbGVuZ3RoLlxuICAgICAgICAvLyBUaGVuIGFkZCBpdCB0byB0aGUgcGFyc2luZyBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSBsYWJlbC5cbiAgICAgICAgaWYgKCBmb3JtYXR0aW5nTGFiZWwgKSB7XG4gICAgICAgICAgICBwYXJzaW5nT2JqZWN0WyBsYWJlbCBdID0gdmFsdWUuc3Vic3RyKCAwLCBmb3JtYXRMZW5ndGggKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBhcyB0aGUgc3Vic3RyaW5nIGZyb20gZm9ybWF0IGxlbmd0aCB0byBlbmQuXG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKCBmb3JtYXRMZW5ndGggKVxuICAgIH0pXG5cbiAgICAvLyBDb21wZW5zYXRlIGZvciBtb250aCAwaW5kZXguXG4gICAgcmV0dXJuIFtcbiAgICAgICAgcGFyc2luZ09iamVjdC55eXl5IHx8IHBhcnNpbmdPYmplY3QueXksXG4gICAgICAgICsoIHBhcnNpbmdPYmplY3QubW0gfHwgcGFyc2luZ09iamVjdC5tICkgLSAxLFxuICAgICAgICBwYXJzaW5nT2JqZWN0LmRkIHx8IHBhcnNpbmdPYmplY3QuZFxuICAgIF1cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5wYXJzZVxuXG5cbi8qKlxuICogVmFyaW91cyBmb3JtYXRzIHRvIGRpc3BsYXkgdGhlIG9iamVjdCBpbi5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuZm9ybWF0cyA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBmaXJzdCB3b3JkIGluIGEgY29sbGVjdGlvbi5cbiAgICBmdW5jdGlvbiBnZXRXb3JkTGVuZ3RoRnJvbUNvbGxlY3Rpb24oIHN0cmluZywgY29sbGVjdGlvbiwgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAvLyBHcmFiIHRoZSBmaXJzdCB3b3JkIGZyb20gdGhlIHN0cmluZy5cbiAgICAgICAgdmFyIHdvcmQgPSBzdHJpbmcubWF0Y2goIC9cXHcrLyApWyAwIF1cblxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIG1vbnRoIGluZGV4LCBhZGQgaXQgdG8gdGhlIGRhdGUgb2JqZWN0XG4gICAgICAgIGlmICggIWRhdGVPYmplY3QubW0gJiYgIWRhdGVPYmplY3QubSApIHtcbiAgICAgICAgICAgIGRhdGVPYmplY3QubSA9IGNvbGxlY3Rpb24uaW5kZXhPZiggd29yZCApICsgMVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIHdvcmQuXG4gICAgICAgIHJldHVybiB3b3JkLmxlbmd0aFxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBmaXJzdCB3b3JkIGluIGEgc3RyaW5nLlxuICAgIGZ1bmN0aW9uIGdldEZpcnN0V29yZExlbmd0aCggc3RyaW5nICkge1xuICAgICAgICByZXR1cm4gc3RyaW5nLm1hdGNoKCAvXFx3Ky8gKVsgMCBdLmxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBkaWdpdHMgbGVuZ3RoLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBfLmRpZ2l0cyggc3RyaW5nICkgOiBkYXRlT2JqZWN0LmRhdGVcbiAgICAgICAgfSxcbiAgICAgICAgZGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgMi5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIGRhdGUgd2l0aCBhIGxlYWRpbmcgemVyby5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyAyIDogXy5sZWFkKCBkYXRlT2JqZWN0LmRhdGUgKVxuICAgICAgICB9LFxuICAgICAgICBkZGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIGZpcnN0IHdvcmQuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzaG9ydCBzZWxlY3RlZCB3ZWVrZGF5LlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldEZpcnN0V29yZExlbmd0aCggc3RyaW5nICkgOiB0aGlzLnNldHRpbmdzLndlZWtkYXlzU2hvcnRbIGRhdGVPYmplY3QuZGF5IF1cbiAgICAgICAgfSxcbiAgICAgICAgZGRkZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZC5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIGZ1bGwgc2VsZWN0ZWQgd2Vla2RheS5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBnZXRGaXJzdFdvcmRMZW5ndGgoIHN0cmluZyApIDogdGhpcy5zZXR0aW5ncy53ZWVrZGF5c0Z1bGxbIGRhdGVPYmplY3QuZGF5IF1cbiAgICAgICAgfSxcbiAgICAgICAgbTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGlnaXRzXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBtb250aCB3aXRoIDBpbmRleCBjb21wZW5zYXRpb24uXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gXy5kaWdpdHMoIHN0cmluZyApIDogZGF0ZU9iamVjdC5tb250aCArIDFcbiAgICAgICAgfSxcbiAgICAgICAgbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgMi5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIHdpdGggMGluZGV4IGFuZCBsZWFkaW5nIHplcm8uXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gMiA6IF8ubGVhZCggZGF0ZU9iamVjdC5tb250aCArIDEgKVxuICAgICAgICB9LFxuICAgICAgICBtbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5tb250aHNTaG9ydFxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCBnZXQgbGVuZ3RoIG9mIHRoZSByZWxldmFudCBtb250aCBmcm9tIHRoZSBzaG9ydFxuICAgICAgICAgICAgLy8gbW9udGhzIGNvbGxlY3Rpb24uIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIGZyb20gdGhhdCBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldFdvcmRMZW5ndGhGcm9tQ29sbGVjdGlvbiggc3RyaW5nLCBjb2xsZWN0aW9uLCBkYXRlT2JqZWN0ICkgOiBjb2xsZWN0aW9uWyBkYXRlT2JqZWN0Lm1vbnRoIF1cbiAgICAgICAgfSxcbiAgICAgICAgbW1tbTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLnNldHRpbmdzLm1vbnRoc0Z1bGxcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgZ2V0IGxlbmd0aCBvZiB0aGUgcmVsZXZhbnQgbW9udGggZnJvbSB0aGUgZnVsbFxuICAgICAgICAgICAgLy8gbW9udGhzIGNvbGxlY3Rpb24uIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIGZyb20gdGhhdCBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldFdvcmRMZW5ndGhGcm9tQ29sbGVjdGlvbiggc3RyaW5nLCBjb2xsZWN0aW9uLCBkYXRlT2JqZWN0ICkgOiBjb2xsZWN0aW9uWyBkYXRlT2JqZWN0Lm1vbnRoIF1cbiAgICAgICAgfSxcbiAgICAgICAgeXk6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgMi5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIHllYXIgYnkgc2xpY2luZyBvdXQgdGhlIGZpcnN0IDIgZGlnaXRzLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IDIgOiAoICcnICsgZGF0ZU9iamVjdC55ZWFyICkuc2xpY2UoIDIgKVxuICAgICAgICB9LFxuICAgICAgICB5eXl5OiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDQuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCB5ZWFyLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IDQgOiBkYXRlT2JqZWN0LnllYXJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgYnkgc3BsaXR0aW5nIHRoZSBmb3JtYXR0aW5nIHN0cmluZyBwYXNzZWQuXG4gICAgICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCBmb3JtYXRTdHJpbmcgKSB7IHJldHVybiBmb3JtYXRTdHJpbmcuc3BsaXQoIC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nICkgfSxcblxuICAgICAgICAvLyBGb3JtYXQgYW4gb2JqZWN0IGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIGZvcm1hdHRpbmcgb3B0aW9ucy5cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICggZm9ybWF0U3RyaW5nLCBpdGVtT2JqZWN0ICkge1xuICAgICAgICAgICAgdmFyIGNhbGVuZGFyID0gdGhpc1xuICAgICAgICAgICAgcmV0dXJuIGNhbGVuZGFyLmZvcm1hdHMudG9BcnJheSggZm9ybWF0U3RyaW5nICkubWFwKCBmdW5jdGlvbiggbGFiZWwgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJpZ2dlciggY2FsZW5kYXIuZm9ybWF0c1sgbGFiZWwgXSwgY2FsZW5kYXIsIFsgMCwgaXRlbU9iamVjdCBdICkgfHwgbGFiZWwucmVwbGFjZSggL14hLywgJycgKVxuICAgICAgICAgICAgfSkuam9pbiggJycgKVxuICAgICAgICB9XG4gICAgfVxufSkoKSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmZvcm1hdHNcblxuXG5cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZSB1bml0cyBhcmUgdGhlIGV4YWN0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5pc0RhdGVFeGFjdCA9IGZ1bmN0aW9uKCBvbmUsIHR3byApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXNcblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggd2Vla2RheXMsIGRvIGEgZGlyZWN0IGNvbXBhcmlzb24uXG4gICAgaWYgKFxuICAgICAgICAoIF8uaXNJbnRlZ2VyKCBvbmUgKSAmJiBfLmlzSW50ZWdlciggdHdvICkgKSB8fFxuICAgICAgICAoIHR5cGVvZiBvbmUgPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiB0d28gPT0gJ2Jvb2xlYW4nIClcbiAgICAgKSB7XG4gICAgICAgIHJldHVybiBvbmUgPT09IHR3b1xuICAgIH1cblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggZGF0ZSByZXByZXNlbnRhdGlvbnMsIGNvbXBhcmUgdGhlIOKAnHBpY2vigJ0gdmFsdWUuXG4gICAgaWYgKFxuICAgICAgICAoIF8uaXNEYXRlKCBvbmUgKSB8fCAkLmlzQXJyYXkoIG9uZSApICkgJiZcbiAgICAgICAgKCBfLmlzRGF0ZSggdHdvICkgfHwgJC5pc0FycmF5KCB0d28gKSApXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBjYWxlbmRhci5jcmVhdGUoIG9uZSApLnBpY2sgPT09IGNhbGVuZGFyLmNyZWF0ZSggdHdvICkucGlja1xuICAgIH1cblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggcmFuZ2Ugb2JqZWN0cywgY29tcGFyZSB0aGUg4oCcZnJvbeKAnSBhbmQg4oCcdG/igJ0uXG4gICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIG9uZSApICYmICQuaXNQbGFpbk9iamVjdCggdHdvICkgKSB7XG4gICAgICAgIHJldHVybiBjYWxlbmRhci5pc0RhdGVFeGFjdCggb25lLmZyb20sIHR3by5mcm9tICkgJiYgY2FsZW5kYXIuaXNEYXRlRXhhY3QoIG9uZS50bywgdHdvLnRvIClcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBkYXRlIHVuaXRzIG92ZXJsYXAuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmlzRGF0ZU92ZXJsYXAgPSBmdW5jdGlvbiggb25lLCB0d28gKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBmaXJzdERheSA9IGNhbGVuZGFyLnNldHRpbmdzLmZpcnN0RGF5ID8gMSA6IDBcblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggYSB3ZWVrZGF5IGluZGV4LCBjb21wYXJlIHRoZSBkYXlzLlxuICAgIGlmICggXy5pc0ludGVnZXIoIG9uZSApICYmICggXy5pc0RhdGUoIHR3byApIHx8ICQuaXNBcnJheSggdHdvICkgKSApIHtcbiAgICAgICAgb25lID0gb25lICUgNyArIGZpcnN0RGF5XG4gICAgICAgIHJldHVybiBvbmUgPT09IGNhbGVuZGFyLmNyZWF0ZSggdHdvICkuZGF5ICsgMVxuICAgIH1cbiAgICBpZiAoIF8uaXNJbnRlZ2VyKCB0d28gKSAmJiAoIF8uaXNEYXRlKCBvbmUgKSB8fCAkLmlzQXJyYXkoIG9uZSApICkgKSB7XG4gICAgICAgIHR3byA9IHR3byAlIDcgKyBmaXJzdERheVxuICAgICAgICByZXR1cm4gdHdvID09PSBjYWxlbmRhci5jcmVhdGUoIG9uZSApLmRheSArIDFcbiAgICB9XG5cbiAgICAvLyBXaGVuIHdl4oCZcmUgd29ya2luZyB3aXRoIHJhbmdlIG9iamVjdHMsIGNoZWNrIGlmIHRoZSByYW5nZXMgb3ZlcmxhcC5cbiAgICBpZiAoICQuaXNQbGFpbk9iamVjdCggb25lICkgJiYgJC5pc1BsYWluT2JqZWN0KCB0d28gKSApIHtcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyLm92ZXJsYXBSYW5nZXMoIG9uZSwgdHdvIClcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuXG4vKipcbiAqIEZsaXAgdGhlIOKAnGVuYWJsZWTigJ0gc3RhdGUuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmZsaXBFbmFibGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgaXRlbU9iamVjdCA9IHRoaXMuaXRlbVxuICAgIGl0ZW1PYmplY3QuZW5hYmxlID0gdmFsIHx8IChpdGVtT2JqZWN0LmVuYWJsZSA9PSAtMSA/IDEgOiAtMSlcbn1cblxuXG4vKipcbiAqIE1hcmsgYSBjb2xsZWN0aW9uIG9mIGRhdGVzIGFzIOKAnGRpc2FibGVk4oCdLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24oIHR5cGUsIGRhdGVzVG9EaXNhYmxlICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IGNhbGVuZGFyLml0ZW0uZGlzYWJsZS5zbGljZSgwKVxuXG5cbiAgICAvLyBJZiB3ZeKAmXJlIGZsaXBwaW5nLCB0aGF04oCZcyBhbGwgd2UgbmVlZCB0byBkby5cbiAgICBpZiAoIGRhdGVzVG9EaXNhYmxlID09ICdmbGlwJyApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgpXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoIGRhdGVzVG9EaXNhYmxlID09PSBmYWxzZSApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgxKVxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cbiAgICB9XG5cbiAgICBlbHNlIGlmICggZGF0ZXNUb0Rpc2FibGUgPT09IHRydWUgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoLTEpXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBbXVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIHRoZSBkYXRlcyB0byBkaXNhYmxlLlxuICAgIGVsc2Uge1xuXG4gICAgICAgIGRhdGVzVG9EaXNhYmxlLm1hcChmdW5jdGlvbiggdW5pdFRvRGlzYWJsZSApIHtcblxuICAgICAgICAgICAgdmFyIG1hdGNoRm91bmRcblxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIGRpc2FibGVkIGl0ZW1zLCBjaGVjayBmb3IgbWF0Y2hlcy5cbiAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBtYXRjaGVkLCBpbW1lZGlhdGVseSBicmVhayBvdXQuXG4gICAgICAgICAgICBmb3IgKCB2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXMubGVuZ3RoOyBpbmRleCArPSAxICkge1xuICAgICAgICAgICAgICAgIGlmICggY2FsZW5kYXIuaXNEYXRlRXhhY3QoIHVuaXRUb0Rpc2FibGUsIGRpc2FibGVkSXRlbXNbaW5kZXhdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCwgYWRkIHRoZSB2YWxpZGF0ZWQgdW5pdCB0byB0aGUgY29sbGVjdGlvbi5cbiAgICAgICAgICAgIGlmICggIW1hdGNoRm91bmQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBfLmlzSW50ZWdlciggdW5pdFRvRGlzYWJsZSApIHx8XG4gICAgICAgICAgICAgICAgICAgIF8uaXNEYXRlKCB1bml0VG9EaXNhYmxlICkgfHxcbiAgICAgICAgICAgICAgICAgICAgJC5pc0FycmF5KCB1bml0VG9EaXNhYmxlICkgfHxcbiAgICAgICAgICAgICAgICAgICAgKCAkLmlzUGxhaW5PYmplY3QoIHVuaXRUb0Rpc2FibGUgKSAmJiB1bml0VG9EaXNhYmxlLmZyb20gJiYgdW5pdFRvRGlzYWJsZS50byApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXMucHVzaCggdW5pdFRvRGlzYWJsZSApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgdXBkYXRlZCBjb2xsZWN0aW9uLlxuICAgIHJldHVybiBkaXNhYmxlZEl0ZW1zXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuZGVhY3RpdmF0ZVxuXG5cbi8qKlxuICogTWFyayBhIGNvbGxlY3Rpb24gb2YgZGF0ZXMgYXMg4oCcZW5hYmxlZOKAnS5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiggdHlwZSwgZGF0ZXNUb0VuYWJsZSApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBjYWxlbmRhci5pdGVtLmRpc2FibGUsXG4gICAgICAgIGRpc2FibGVkSXRlbXNDb3VudCA9IGRpc2FibGVkSXRlbXMubGVuZ3RoXG5cbiAgICAvLyBJZiB3ZeKAmXJlIGZsaXBwaW5nLCB0aGF04oCZcyBhbGwgd2UgbmVlZCB0byBkby5cbiAgICBpZiAoIGRhdGVzVG9FbmFibGUgPT0gJ2ZsaXAnICkge1xuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKClcbiAgICB9XG5cbiAgICBlbHNlIGlmICggZGF0ZXNUb0VuYWJsZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgxKVxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cbiAgICB9XG5cbiAgICBlbHNlIGlmICggZGF0ZXNUb0VuYWJsZSA9PT0gZmFsc2UgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoLTEpXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBbXVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIHRoZSBkaXNhYmxlZCBkYXRlcy5cbiAgICBlbHNlIHtcblxuICAgICAgICBkYXRlc1RvRW5hYmxlLm1hcChmdW5jdGlvbiggdW5pdFRvRW5hYmxlICkge1xuXG4gICAgICAgICAgICB2YXIgbWF0Y2hGb3VuZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFVuaXQsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgaXNFeGFjdFJhbmdlXG5cbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIGRpc2FibGVkIGl0ZW1zIGFuZCB0cnkgdG8gZmluZCBhIG1hdGNoLlxuICAgICAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXNDb3VudDsgaW5kZXggKz0gMSApIHtcblxuICAgICAgICAgICAgICAgIGRpc2FibGVkVW5pdCA9IGRpc2FibGVkSXRlbXNbaW5kZXhdXG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGFuIGV4YWN0IG1hdGNoIGlzIGZvdW5kLCByZW1vdmUgaXQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBkaXNhYmxlZFVuaXQsIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gZGlzYWJsZWRJdGVtc1tpbmRleF0gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlzRXhhY3RSYW5nZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGFuIG92ZXJsYXBwZWQgbWF0Y2ggaXMgZm91bmQsIGFkZCB0aGUg4oCcaW52ZXJ0ZWTigJ0gc3RhdGUgdG8gaXQuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGNhbGVuZGFyLmlzRGF0ZU92ZXJsYXAoIGRpc2FibGVkVW5pdCwgdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRUb0VuYWJsZS5pbnZlcnRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB1bml0VG9FbmFibGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggJC5pc0FycmF5KCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB1bml0VG9FbmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIW1hdGNoRm91bmRbM10gKSBtYXRjaEZvdW5kLnB1c2goICdpbnZlcnRlZCcgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmlzRGF0ZSggdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gWyB1bml0VG9FbmFibGUuZ2V0RnVsbFllYXIoKSwgdW5pdFRvRW5hYmxlLmdldE1vbnRoKCksIHVuaXRUb0VuYWJsZS5nZXREYXRlKCksICdpbnZlcnRlZCcgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBhIG1hdGNoIHdhcyBmb3VuZCwgcmVtb3ZlIGEgcHJldmlvdXMgZHVwbGljYXRlIGVudHJ5LlxuICAgICAgICAgICAgaWYgKCBtYXRjaEZvdW5kICkgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXNDb3VudDsgaW5kZXggKz0gMSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBkaXNhYmxlZEl0ZW1zW2luZGV4XSwgdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXNbaW5kZXhdID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW4gdGhlIGV2ZW50IHRoYXQgd2XigJlyZSBkZWFsaW5nIHdpdGggYW4gZXhhY3QgcmFuZ2Ugb2YgZGF0ZXMsXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUgYXJlIG5vIOKAnGludmVydGVk4oCdIGRhdGVzIGJlY2F1c2Ugb2YgaXQuXG4gICAgICAgICAgICBpZiAoIGlzRXhhY3RSYW5nZSApIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBkaXNhYmxlZEl0ZW1zQ291bnQ7IGluZGV4ICs9IDEgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5pc0RhdGVPdmVybGFwKCBkaXNhYmxlZEl0ZW1zW2luZGV4XSwgdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXNbaW5kZXhdID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIHN0aWxsIG1hdGNoZWQsIGFkZCBpdCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgaWYgKCBtYXRjaEZvdW5kICkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXMucHVzaCggbWF0Y2hGb3VuZCApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSB1cGRhdGVkIGNvbGxlY3Rpb24uXG4gICAgcmV0dXJuIGRpc2FibGVkSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKCB2YWwgKSB7IHJldHVybiB2YWwgIT0gbnVsbCB9KVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmFjdGl2YXRlXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHRoZSBub2RlcyBpbiB0aGUgcGlja2VyLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5ub2RlcyA9IGZ1bmN0aW9uKCBpc09wZW4gKSB7XG5cbiAgICB2YXJcbiAgICAgICAgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBzZXR0aW5ncyA9IGNhbGVuZGFyLnNldHRpbmdzLFxuICAgICAgICBjYWxlbmRhckl0ZW0gPSBjYWxlbmRhci5pdGVtLFxuICAgICAgICBub3dPYmplY3QgPSBjYWxlbmRhckl0ZW0ubm93LFxuICAgICAgICBzZWxlY3RlZE9iamVjdCA9IGNhbGVuZGFySXRlbS5zZWxlY3QsXG4gICAgICAgIGhpZ2hsaWdodGVkT2JqZWN0ID0gY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCxcbiAgICAgICAgdmlld3NldE9iamVjdCA9IGNhbGVuZGFySXRlbS52aWV3LFxuICAgICAgICBkaXNhYmxlZENvbGxlY3Rpb24gPSBjYWxlbmRhckl0ZW0uZGlzYWJsZSxcbiAgICAgICAgbWluTGltaXRPYmplY3QgPSBjYWxlbmRhckl0ZW0ubWluLFxuICAgICAgICBtYXhMaW1pdE9iamVjdCA9IGNhbGVuZGFySXRlbS5tYXgsXG5cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNhbGVuZGFyIHRhYmxlIGhlYWQgdXNpbmcgYSBjb3B5IG9mIHdlZWtkYXkgbGFiZWxzIGNvbGxlY3Rpb24uXG4gICAgICAgIC8vICogV2UgZG8gYSBjb3B5IHNvIHdlIGRvbid0IG11dGF0ZSB0aGUgb3JpZ2luYWwgYXJyYXkuXG4gICAgICAgIHRhYmxlSGVhZCA9IChmdW5jdGlvbiggY29sbGVjdGlvbiwgZnVsbENvbGxlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgc2hvdWxkIGJlIE1vbmRheSwgbW92ZSBTdW5kYXkgdG8gdGhlIGVuZC5cbiAgICAgICAgICAgIGlmICggc2V0dGluZ3MuZmlyc3REYXkgKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKCBjb2xsZWN0aW9uLnNoaWZ0KCkgKVxuICAgICAgICAgICAgICAgIGZ1bGxDb2xsZWN0aW9uLnB1c2goIGZ1bGxDb2xsZWN0aW9uLnNoaWZ0KCkgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiB0aGUgdGFibGUgaGVhZCBncm91cC5cbiAgICAgICAgICAgIHJldHVybiBfLm5vZGUoXG4gICAgICAgICAgICAgICAgJ3RoZWFkJyxcbiAgICAgICAgICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAgICAgICAgICd0cicsXG4gICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBEQVlTX0lOX1dFRUsgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6ICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiggY291bnRlciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uWyBjb3VudGVyIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLndlZWtkYXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2NvcGU9Y29sIHRpdGxlPVwiJyArIGZ1bGxDb2xsZWN0aW9uWyBjb3VudGVyIF0gKyAnXCInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgLy9lbmRyZXR1cm5cblxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICB9KSggKCBzZXR0aW5ncy5zaG93V2Vla2RheXNGdWxsID8gc2V0dGluZ3Mud2Vla2RheXNGdWxsIDogc2V0dGluZ3Mud2Vla2RheXNMZXR0ZXIgKS5zbGljZSggMCApLCBzZXR0aW5ncy53ZWVrZGF5c0Z1bGwuc2xpY2UoIDAgKSApLCAvL3RhYmxlSGVhZFxuXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBuYXYgZm9yIG5leHQvcHJldiBtb250aC5cbiAgICAgICAgY3JlYXRlTW9udGhOYXYgPSBmdW5jdGlvbiggbmV4dCApIHtcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIGNyZWF0ZWQgbW9udGggdGFnLlxuICAgICAgICAgICAgcmV0dXJuIF8ubm9kZShcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3NbICduYXYnICsgKCBuZXh0ID8gJ05leHQnIDogJ1ByZXYnICkgXSArIChcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZm9jdXNlZCBtb250aCBpcyBvdXRzaWRlIHRoZSByYW5nZSwgZGlzYWJsZWQgdGhlIGJ1dHRvbi5cbiAgICAgICAgICAgICAgICAgICAgKCBuZXh0ICYmIHZpZXdzZXRPYmplY3QueWVhciA+PSBtYXhMaW1pdE9iamVjdC55ZWFyICYmIHZpZXdzZXRPYmplY3QubW9udGggPj0gbWF4TGltaXRPYmplY3QubW9udGggKSB8fFxuICAgICAgICAgICAgICAgICAgICAoICFuZXh0ICYmIHZpZXdzZXRPYmplY3QueWVhciA8PSBtaW5MaW1pdE9iamVjdC55ZWFyICYmIHZpZXdzZXRPYmplY3QubW9udGggPD0gbWluTGltaXRPYmplY3QubW9udGggKSA/XG4gICAgICAgICAgICAgICAgICAgICcgJyArIHNldHRpbmdzLmtsYXNzLm5hdkRpc2FibGVkIDogJydcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICdkYXRhLW5hdj0nICsgKCBuZXh0IHx8IC0xICkgKyAnICcgK1xuICAgICAgICAgICAgICAgIF8uYXJpYUF0dHIoe1xuICAgICAgICAgICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZSdcbiAgICAgICAgICAgICAgICB9KSArICcgJyArXG4gICAgICAgICAgICAgICAgJ3RpdGxlPVwiJyArIChuZXh0ID8gc2V0dGluZ3MubGFiZWxNb250aE5leHQgOiBzZXR0aW5ncy5sYWJlbE1vbnRoUHJldiApICsgJ1wiJ1xuICAgICAgICAgICAgKSAvL2VuZHJldHVyblxuICAgICAgICB9LCAvL2NyZWF0ZU1vbnRoTmF2XG5cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIG1vbnRoIGxhYmVsLlxuICAgICAgICAvL01hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgIGNyZWF0ZU1vbnRoTGFiZWwgPSBmdW5jdGlvbihvdmVycmlkZSkge1xuXG4gICAgICAgICAgICB2YXIgbW9udGhzQ29sbGVjdGlvbiA9IHNldHRpbmdzLnNob3dNb250aHNTaG9ydCA/IHNldHRpbmdzLm1vbnRoc1Nob3J0IDogc2V0dGluZ3MubW9udGhzRnVsbFxuXG4gICAgICAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSA9PSBcInNob3J0X21vbnRoc1wiKSB7XG4gICAgICAgICAgICAgIG1vbnRoc0NvbGxlY3Rpb24gPSBzZXR0aW5ncy5tb250aHNTaG9ydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vbnRocyB0byBzZWxlY3QsIGFkZCBhIGRyb3Bkb3duIG1lbnUuXG4gICAgICAgICAgICBpZiAoIHNldHRpbmdzLnNlbGVjdE1vbnRocyAgJiYgb3ZlcnJpZGUgPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgXy5ncm91cCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDExLFxuICAgICAgICAgICAgICAgICAgICAgICAgaTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIGxvb3BlZE1vbnRoICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbG9vcGVkIG1vbnRoIGFuZCBubyBjbGFzc2VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aHNDb2xsZWN0aW9uWyBsb29wZWRNb250aCBdLCAwLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmFsdWUgYW5kIHNlbGVjdGVkIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWU9JyArIGxvb3BlZE1vbnRoICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB2aWV3c2V0T2JqZWN0Lm1vbnRoID09IGxvb3BlZE1vbnRoID8gJyBzZWxlY3RlZCcgOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggdmlld3NldE9iamVjdC55ZWFyID09IG1pbkxpbWl0T2JqZWN0LnllYXIgJiYgbG9vcGVkTW9udGggPCBtaW5MaW1pdE9iamVjdC5tb250aCApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB2aWV3c2V0T2JqZWN0LnllYXIgPT0gbWF4TGltaXRPYmplY3QueWVhciAmJiBsb29wZWRNb250aCA+IG1heExpbWl0T2JqZWN0Lm1vbnRoIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBkaXNhYmxlZCcgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3Muc2VsZWN0TW9udGggKyAnIGJyb3dzZXItZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICggaXNPcGVuID8gJycgOiAnZGlzYWJsZWQnICkgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICBfLmFyaWFBdHRyKHsgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZScgfSkgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICAndGl0bGU9XCInICsgc2V0dGluZ3MubGFiZWxNb250aFNlbGVjdCArICdcIidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgPT0gXCJzaG9ydF9tb250aHNcIilcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3QgIT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2JywgbW9udGhzQ29sbGVjdGlvblsgc2VsZWN0ZWRPYmplY3QubW9udGggXSApO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIF8ubm9kZSggJ2RpdicsIG1vbnRoc0NvbGxlY3Rpb25bIHZpZXdzZXRPYmplY3QubW9udGggXSApO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgbmVlZCBmb3IgYSBtb250aCBzZWxlY3RvclxuICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ2RpdicsIG1vbnRoc0NvbGxlY3Rpb25bIHZpZXdzZXRPYmplY3QubW9udGggXSwgc2V0dGluZ3Mua2xhc3MubW9udGggKVxuICAgICAgICB9LCAvL2NyZWF0ZU1vbnRoTGFiZWxcblxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgeWVhciBsYWJlbC5cbiAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgY3JlYXRlWWVhckxhYmVsID0gZnVuY3Rpb24ob3ZlcnJpZGUpIHtcblxuICAgICAgICAgICAgdmFyIGZvY3VzZWRZZWFyID0gdmlld3NldE9iamVjdC55ZWFyLFxuXG4gICAgICAgICAgICAvLyBJZiB5ZWFycyBzZWxlY3RvciBpcyBzZXQgdG8gYSBsaXRlcmFsIFwidHJ1ZVwiLCBzZXQgaXQgdG8gNS4gT3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBkaXZpZGUgaW4gaGFsZiB0byBnZXQgaGFsZiBiZWZvcmUgYW5kIGhhbGYgYWZ0ZXIgZm9jdXNlZCB5ZWFyLlxuICAgICAgICAgICAgbnVtYmVyWWVhcnMgPSBzZXR0aW5ncy5zZWxlY3RZZWFycyA9PT0gdHJ1ZSA/IDUgOiB+figgc2V0dGluZ3Muc2VsZWN0WWVhcnMgLyAyIClcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHllYXJzIHRvIHNlbGVjdCwgYWRkIGEgZHJvcGRvd24gbWVudS5cbiAgICAgICAgICAgIGlmICggbnVtYmVyWWVhcnMgKSB7XG5cbiAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICAgbWluWWVhciA9IG1pbkxpbWl0T2JqZWN0LnllYXIsXG4gICAgICAgICAgICAgICAgICAgIG1heFllYXIgPSBtYXhMaW1pdE9iamVjdC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBsb3dlc3RZZWFyID0gZm9jdXNlZFllYXIgLSBudW1iZXJZZWFycyxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFllYXIgPSBmb2N1c2VkWWVhciArIG51bWJlclllYXJzXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbWluIHllYXIgaXMgZ3JlYXRlciB0aGFuIHRoZSBsb3dlc3QgeWVhciwgaW5jcmVhc2UgdGhlIGhpZ2hlc3QgeWVhclxuICAgICAgICAgICAgICAgIC8vIGJ5IHRoZSBkaWZmZXJlbmNlIGFuZCBzZXQgdGhlIGxvd2VzdCB5ZWFyIHRvIHRoZSBtaW4geWVhci5cbiAgICAgICAgICAgICAgICBpZiAoIG1pblllYXIgPiBsb3dlc3RZZWFyICkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0WWVhciArPSBtaW5ZZWFyIC0gbG93ZXN0WWVhclxuICAgICAgICAgICAgICAgICAgICBsb3dlc3RZZWFyID0gbWluWWVhclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBtYXggeWVhciBpcyBsZXNzIHRoYW4gdGhlIGhpZ2hlc3QgeWVhciwgZGVjcmVhc2UgdGhlIGxvd2VzdCB5ZWFyXG4gICAgICAgICAgICAgICAgLy8gYnkgdGhlIGxvd2VyIG9mIHRoZSB0d286IGF2YWlsYWJsZSBhbmQgbmVlZGVkIHllYXJzLiBUaGVuIHNldCB0aGVcbiAgICAgICAgICAgICAgICAvLyBoaWdoZXN0IHllYXIgdG8gdGhlIG1heCB5ZWFyLlxuICAgICAgICAgICAgICAgIGlmICggbWF4WWVhciA8IGhpZ2hlc3RZZWFyICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmFpbGFibGVZZWFycyA9IGxvd2VzdFllYXIgLSBtaW5ZZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGVkWWVhcnMgPSBoaWdoZXN0WWVhciAtIG1heFllYXJcblxuICAgICAgICAgICAgICAgICAgICBsb3dlc3RZZWFyIC09IGF2YWlsYWJsZVllYXJzID4gbmVlZGVkWWVhcnMgPyBuZWVkZWRZZWFycyA6IGF2YWlsYWJsZVllYXJzXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RZZWFyID0gbWF4WWVhclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggc2V0dGluZ3Muc2VsZWN0WWVhcnMgICYmIG92ZXJyaWRlID09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IGxvd2VzdFllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBoaWdoZXN0WWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKCBsb29wZWRZZWFyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbG9vcGVkIHllYXIgYW5kIG5vIGNsYXNzZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wZWRZZWFyLCAwLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGFuZCBzZWxlY3RlZCBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZT0nICsgbG9vcGVkWWVhciArICggZm9jdXNlZFllYXIgPT0gbG9vcGVkWWVhciA/ICcgc2VsZWN0ZWQnIDogJycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzcy5zZWxlY3RZZWFyICsgJyBicm93c2VyLWRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCBpc09wZW4gPyAnJyA6ICdkaXNhYmxlZCcgKSArICcgJyArIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgKyAnX3RhYmxlJyB9KSArICcgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAndGl0bGU9XCInICsgc2V0dGluZ3MubGFiZWxZZWFyU2VsZWN0ICsgJ1wiJ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlID09IFwicmF3XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ2RpdicsIGZvY3VzZWRZZWFyIClcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGp1c3QgcmV0dXJuIHRoZSB5ZWFyIGZvY3VzZWRcbiAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBmb2N1c2VkWWVhciwgc2V0dGluZ3Mua2xhc3MueWVhciApXG4gICAgICAgIH0gLy9jcmVhdGVZZWFyTGFiZWxcblxuXG4gICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgIGNyZWF0ZURheUxhYmVsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBzZWxlY3RlZE9iamVjdC5kYXRlKVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIF8ubm9kZSggJ2RpdicsIG5vd09iamVjdC5kYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICBjcmVhdGVXZWVrZGF5TGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkaXNwbGF5X2RheTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgZGlzcGxheV9kYXkgPSBzZWxlY3RlZE9iamVjdC5kYXk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGlzcGxheV9kYXkgPSBub3dPYmplY3QuZGF5O1xuICAgICAgICAgICAgdmFyIHdlZWtkYXkgPSBzZXR0aW5ncy53ZWVrZGF5c0Z1bGxbIGRpc3BsYXlfZGF5IF1cbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5XG4gICAgICAgIH1cblxuXG4gICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gdGhlIGVudGlyZSBjYWxlbmRhci5cbnJldHVybiBfLm5vZGUoXG4gICAgICAgIC8vIERhdGUgcHJlc2VudGF0aW9uIFZpZXdcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgY3JlYXRlV2Vla2RheUxhYmVsKCksXG4gICAgICAgICAgICAgICAgXCJwaWNrZXJfX3dlZWtkYXktZGlzcGxheVwiXG4gICAgICAgICAgICApK1xuICAgICAgICAgICAgXy5ub2RlKFxuICAgICAgICAgICAgICAgIC8vIERpdiBmb3Igc2hvcnQgTW9udGhcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBjcmVhdGVNb250aExhYmVsKFwic2hvcnRfbW9udGhzXCIpLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLm1vbnRoX2Rpc3BsYXlcbiAgICAgICAgICAgICkrXG4gICAgICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAgICAgLy8gRGl2IGZvciBEYXlcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXlMYWJlbCgpICxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzcy5kYXlfZGlzcGxheVxuICAgICAgICAgICAgKStcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAvLyBEaXYgZm9yIFllYXJcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBjcmVhdGVZZWFyTGFiZWwoXCJyYXdcIikgLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLnllYXJfZGlzcGxheVxuICAgICAgICAgICAgKSxcbiAgICAgICAgc2V0dGluZ3Mua2xhc3MuZGF0ZV9kaXNwbGF5XG4gICAgKStcbiAgICAvLyBDYWxlbmRhciBjb250YWluZXJcbiAgICBfLm5vZGUoJ2RpdicsXG4gICAgICAgIF8ubm9kZSgnZGl2JyxcbiAgICAgICAgKCBzZXR0aW5ncy5zZWxlY3RZZWFycyA/ICBjcmVhdGVNb250aExhYmVsKCkgKyBjcmVhdGVZZWFyTGFiZWwoKSA6IGNyZWF0ZU1vbnRoTGFiZWwoKSArIGNyZWF0ZVllYXJMYWJlbCgpICkgK1xuICAgICAgICBjcmVhdGVNb250aE5hdigpICsgY3JlYXRlTW9udGhOYXYoIDEgKSxcbiAgICAgICAgc2V0dGluZ3Mua2xhc3MuaGVhZGVyXG4gICAgKSArIF8ubm9kZShcbiAgICAgICAgJ3RhYmxlJyxcbiAgICAgICAgdGFibGVIZWFkICtcbiAgICAgICAgXy5ub2RlKFxuICAgICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICAgIF8uZ3JvdXAoe1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IFdFRUtTX0lOX0NBTEVOREFSIC0gMSxcbiAgICAgICAgICAgICAgICBpOiAxLFxuICAgICAgICAgICAgICAgIG5vZGU6ICd0cicsXG4gICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIHJvd0NvdW50ZXIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgYW5kIHRoZSBtb250aCBzdGFydHMgb24gU3VuZGF5LCBzaGlmdCB0aGUgZGF0ZSBiYWNrIGEgd2Vlay5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNoaWZ0RGF0ZUJ5ID0gc2V0dGluZ3MuZmlyc3REYXkgJiYgY2FsZW5kYXIuY3JlYXRlKFsgdmlld3NldE9iamVjdC55ZWFyLCB2aWV3c2V0T2JqZWN0Lm1vbnRoLCAxIF0pLmRheSA9PT0gMCA/IC03IDogMFxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IERBWVNfSU5fV0VFSyAqIHJvd0NvdW50ZXIgLSB2aWV3c2V0T2JqZWN0LmRheSArIHNoaWZ0RGF0ZUJ5ICsgMSwgLy8gQWRkIDEgZm9yIHdlZWtkYXkgMGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWluICsgREFZU19JTl9XRUVLIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKCB0YXJnZXREYXRlICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHRpbWUgZGF0ZSBmcm9tIGEgcmVsYXRpdmUgZGF0ZSB0byBhIHRhcmdldCBkYXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlID0gY2FsZW5kYXIuY3JlYXRlKFsgdmlld3NldE9iamVjdC55ZWFyLCB2aWV3c2V0T2JqZWN0Lm1vbnRoLCB0YXJnZXREYXRlICsgKCBzZXR0aW5ncy5maXJzdERheSA/IDEgOiAwICkgXSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHNlbGVjdGVkT2JqZWN0ICYmIHNlbGVjdGVkT2JqZWN0LnBpY2sgPT0gdGFyZ2V0RGF0ZS5waWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWdobGlnaHRlZCA9IGhpZ2hsaWdodGVkT2JqZWN0ICYmIGhpZ2hsaWdodGVkT2JqZWN0LnBpY2sgPT0gdGFyZ2V0RGF0ZS5waWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZCA9IGRpc2FibGVkQ29sbGVjdGlvbiAmJiBjYWxlbmRhci5kaXNhYmxlZCggdGFyZ2V0RGF0ZSApIHx8IHRhcmdldERhdGUucGljayA8IG1pbkxpbWl0T2JqZWN0LnBpY2sgfHwgdGFyZ2V0RGF0ZS5waWNrID4gbWF4TGltaXRPYmplY3QucGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBfLnRyaWdnZXIoIGNhbGVuZGFyLmZvcm1hdHMudG9TdHJpbmcsIGNhbGVuZGFyLCBbIHNldHRpbmdzLmZvcm1hdCwgdGFyZ2V0RGF0ZSBdIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5ub2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oIGtsYXNzZXMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgaW5mb2N1c2Agb3IgYG91dGZvY3VzYCBjbGFzc2VzIGJhc2VkIG9uIG1vbnRoIGluIHZpZXcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzZXMucHVzaCggdmlld3NldE9iamVjdC5tb250aCA9PSB0YXJnZXREYXRlLm1vbnRoID8gc2V0dGluZ3Mua2xhc3MuaW5mb2N1cyA6IHNldHRpbmdzLmtsYXNzLm91dGZvY3VzIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGB0b2RheWAgY2xhc3MgaWYgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG5vd09iamVjdC5waWNrID09IHRhcmdldERhdGUucGljayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzZXMucHVzaCggc2V0dGluZ3Mua2xhc3Mubm93IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYHNlbGVjdGVkYCBjbGFzcyBpZiBzb21ldGhpbmcncyBzZWxlY3RlZCBhbmQgdGhlIHRpbWUgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpc1NlbGVjdGVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5zZWxlY3RlZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGBoaWdobGlnaHRlZGAgY2xhc3MgaWYgc29tZXRoaW5nJ3MgaGlnaGxpZ2h0ZWQgYW5kIHRoZSB0aW1lIG1hdGNoZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNIaWdobGlnaHRlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzZXMucHVzaCggc2V0dGluZ3Mua2xhc3MuaGlnaGxpZ2h0ZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgZGlzYWJsZWRgIGNsYXNzIGlmIHNvbWV0aGluZydzIGRpc2FibGVkIGFuZCB0aGUgb2JqZWN0IG1hdGNoZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNEaXNhYmxlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzZXMucHVzaCggc2V0dGluZ3Mua2xhc3MuZGlzYWJsZWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtsYXNzZXMuam9pbiggJyAnIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShbIHNldHRpbmdzLmtsYXNzLmRheSBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1waWNrPScgKyB0YXJnZXREYXRlLnBpY2sgKyAnICcgKyBfLmFyaWFBdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogJ2dyaWRjZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZvcm1hdHRlZERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkICYmIGNhbGVuZGFyLiRub2RlLnZhbCgpID09PSBmb3JtYXR0ZWREYXRlID8gdHJ1ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZWRlc2NlbmRhbnQ6IGlzSGlnaGxpZ2h0ZWQgPyB0cnVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQgPyB0cnVlIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmFyaWFBdHRyKHsgcm9sZTogJ3ByZXNlbnRhdGlvbicgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSAvL2VuZHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0gLy9lbmRyZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBzZXR0aW5ncy5rbGFzcy50YWJsZSxcbiAgICAgICAgJ2lkPVwiJyArIGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZScgKyAnXCIgJyArIF8uYXJpYUF0dHIoe1xuICAgICAgICAgICAgcm9sZTogJ2dyaWQnLFxuICAgICAgICAgICAgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkLFxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWVcbiAgICAgICAgfSlcbiAgICApXG4gICAgLCBzZXR0aW5ncy5rbGFzcy5jYWxlbmRhcl9jb250YWluZXIpIC8vIGVuZCBjYWxlbmRhclxuXG4gICAgICtcblxuICAgIC8vICogRm9yIEZpcmVmb3ggZm9ybXMgdG8gc3VibWl0LCBtYWtlIHN1cmUgdG8gc2V0IHRoZSBidXR0b25z4oCZIGB0eXBlYCBhdHRyaWJ1dGVzIGFzIOKAnGJ1dHRvbuKAnS5cbiAgICBfLm5vZGUoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfLm5vZGUoICdidXR0b24nLCBzZXR0aW5ncy50b2RheSwgXCJidG4tZmxhdCBwaWNrZXJfX3RvZGF5XCIsXG4gICAgICAgICAgICAndHlwZT1idXR0b24gZGF0YS1waWNrPScgKyBub3dPYmplY3QucGljayArXG4gICAgICAgICAgICAoIGlzT3BlbiAmJiAhY2FsZW5kYXIuZGlzYWJsZWQobm93T2JqZWN0KSA/ICcnIDogJyBkaXNhYmxlZCcgKSArICcgJyArXG4gICAgICAgICAgICBfLmFyaWFBdHRyKHsgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkIH0pICkgK1xuICAgICAgICBfLm5vZGUoICdidXR0b24nLCBzZXR0aW5ncy5jbGVhciwgXCJidG4tZmxhdCBwaWNrZXJfX2NsZWFyXCIsXG4gICAgICAgICAgICAndHlwZT1idXR0b24gZGF0YS1jbGVhcj0xJyArXG4gICAgICAgICAgICAoIGlzT3BlbiA/ICcnIDogJyBkaXNhYmxlZCcgKSArICcgJyArXG4gICAgICAgICAgICBfLmFyaWFBdHRyKHsgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkIH0pICkgK1xuICAgICAgICBfLm5vZGUoJ2J1dHRvbicsIHNldHRpbmdzLmNsb3NlLCBcImJ0bi1mbGF0IHBpY2tlcl9fY2xvc2VcIixcbiAgICAgICAgICAgICd0eXBlPWJ1dHRvbiBkYXRhLWNsb3NlPXRydWUgJyArXG4gICAgICAgICAgICAoIGlzT3BlbiA/ICcnIDogJyBkaXNhYmxlZCcgKSArICcgJyArXG4gICAgICAgICAgICBfLmFyaWFBdHRyKHsgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkIH0pICksXG4gICAgICAgIHNldHRpbmdzLmtsYXNzLmZvb3RlclxuICAgICkgLy9lbmRyZXR1cm5cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5ub2Rlc1xuXG5cblxuXG4vKipcbiAqIFRoZSBkYXRlIHBpY2tlciBkZWZhdWx0cy5cbiAqL1xuRGF0ZVBpY2tlci5kZWZhdWx0cyA9IChmdW5jdGlvbiggcHJlZml4ICkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvLyBUaGUgdGl0bGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgbW9udGggbmF2IGJ1dHRvbnNcbiAgICAgICAgbGFiZWxNb250aE5leHQ6ICdOZXh0IG1vbnRoJyxcbiAgICAgICAgbGFiZWxNb250aFByZXY6ICdQcmV2aW91cyBtb250aCcsXG5cbiAgICAgICAgLy8gVGhlIHRpdGxlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIGRyb3Bkb3duIHNlbGVjdG9yc1xuICAgICAgICBsYWJlbE1vbnRoU2VsZWN0OiAnU2VsZWN0IGEgbW9udGgnLFxuICAgICAgICBsYWJlbFllYXJTZWxlY3Q6ICdTZWxlY3QgYSB5ZWFyJyxcblxuICAgICAgICAvLyBNb250aHMgYW5kIHdlZWtkYXlzXG4gICAgICAgIG1vbnRoc0Z1bGw6IFsgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInIF0sXG4gICAgICAgIG1vbnRoc1Nob3J0OiBbICdKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYycgXSxcbiAgICAgICAgd2Vla2RheXNGdWxsOiBbICdTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScgXSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogWyAnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JyBdLFxuXG4gICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgIHdlZWtkYXlzTGV0dGVyOiBbICdTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJyBdLFxuXG4gICAgICAgIC8vIFRvZGF5IGFuZCBjbGVhclxuICAgICAgICB0b2RheTogJ1RvZGF5JyxcbiAgICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuXG4gICAgICAgIC8vIFRoZSBmb3JtYXQgdG8gc2hvdyBvbiB0aGUgYGlucHV0YCBlbGVtZW50XG4gICAgICAgIGZvcm1hdDogJ2QgbW1tbSwgeXl5eScsXG5cbiAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICBrbGFzczoge1xuXG4gICAgICAgICAgICB0YWJsZTogcHJlZml4ICsgJ3RhYmxlJyxcblxuICAgICAgICAgICAgaGVhZGVyOiBwcmVmaXggKyAnaGVhZGVyJyxcblxuXG4gICAgICAgICAgICAvLyBNYXRlcmlhbGl6ZSBBZGRlZCBrbGFzc2VzXG4gICAgICAgICAgICBkYXRlX2Rpc3BsYXk6IHByZWZpeCArICdkYXRlLWRpc3BsYXknLFxuICAgICAgICAgICAgZGF5X2Rpc3BsYXk6IHByZWZpeCArICdkYXktZGlzcGxheScsXG4gICAgICAgICAgICBtb250aF9kaXNwbGF5OiBwcmVmaXggKyAnbW9udGgtZGlzcGxheScsXG4gICAgICAgICAgICB5ZWFyX2Rpc3BsYXk6IHByZWZpeCArICd5ZWFyLWRpc3BsYXknLFxuICAgICAgICAgICAgY2FsZW5kYXJfY29udGFpbmVyOiBwcmVmaXggKyAnY2FsZW5kYXItY29udGFpbmVyJyxcbiAgICAgICAgICAgIC8vIGVuZFxuXG5cblxuICAgICAgICAgICAgbmF2UHJldjogcHJlZml4ICsgJ25hdi0tcHJldicsXG4gICAgICAgICAgICBuYXZOZXh0OiBwcmVmaXggKyAnbmF2LS1uZXh0JyxcbiAgICAgICAgICAgIG5hdkRpc2FibGVkOiBwcmVmaXggKyAnbmF2LS1kaXNhYmxlZCcsXG5cbiAgICAgICAgICAgIG1vbnRoOiBwcmVmaXggKyAnbW9udGgnLFxuICAgICAgICAgICAgeWVhcjogcHJlZml4ICsgJ3llYXInLFxuXG4gICAgICAgICAgICBzZWxlY3RNb250aDogcHJlZml4ICsgJ3NlbGVjdC0tbW9udGgnLFxuICAgICAgICAgICAgc2VsZWN0WWVhcjogcHJlZml4ICsgJ3NlbGVjdC0teWVhcicsXG5cbiAgICAgICAgICAgIHdlZWtkYXlzOiBwcmVmaXggKyAnd2Vla2RheScsXG5cbiAgICAgICAgICAgIGRheTogcHJlZml4ICsgJ2RheScsXG4gICAgICAgICAgICBkaXNhYmxlZDogcHJlZml4ICsgJ2RheS0tZGlzYWJsZWQnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHByZWZpeCArICdkYXktLXNlbGVjdGVkJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkOiBwcmVmaXggKyAnZGF5LS1oaWdobGlnaHRlZCcsXG4gICAgICAgICAgICBub3c6IHByZWZpeCArICdkYXktLXRvZGF5JyxcbiAgICAgICAgICAgIGluZm9jdXM6IHByZWZpeCArICdkYXktLWluZm9jdXMnLFxuICAgICAgICAgICAgb3V0Zm9jdXM6IHByZWZpeCArICdkYXktLW91dGZvY3VzJyxcblxuICAgICAgICAgICAgZm9vdGVyOiBwcmVmaXggKyAnZm9vdGVyJyxcblxuICAgICAgICAgICAgYnV0dG9uQ2xlYXI6IHByZWZpeCArICdidXR0b24tLWNsZWFyJyxcbiAgICAgICAgICAgIGJ1dHRvblRvZGF5OiBwcmVmaXggKyAnYnV0dG9uLS10b2RheScsXG4gICAgICAgICAgICBidXR0b25DbG9zZTogcHJlZml4ICsgJ2J1dHRvbi0tY2xvc2UnXG4gICAgICAgIH1cbiAgICB9XG59KSggUGlja2VyLmtsYXNzZXMoKS5waWNrZXIgKyAnX18nIClcblxuXG5cblxuXG4vKipcbiAqIEV4dGVuZCB0aGUgcGlja2VyIHRvIGFkZCB0aGUgZGF0ZSBwaWNrZXIuXG4gKi9cblBpY2tlci5leHRlbmQoICdwaWNrYWRhdGUnLCBEYXRlUGlja2VyIClcblxuXG59KSk7XG5cblxuOyhmdW5jdGlvbiAoJCkge1xuXG4gICQuZm4uY2hhcmFjdGVyQ291bnRlciA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICB2YXIgJGNvdW50ZXJFbGVtZW50ID0gJGlucHV0LnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpO1xuXG4gICAgICAvLyBjaGFyYWN0ZXIgY291bnRlciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICBpZiAoJGNvdW50ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdEhhc0xlbmd0aEF0dHJpYnV0ZSA9ICRpbnB1dC5hdHRyKCdkYXRhLWxlbmd0aCcpICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmKGl0SGFzTGVuZ3RoQXR0cmlidXRlKXtcbiAgICAgICAgJGlucHV0Lm9uKCdpbnB1dCcsIHVwZGF0ZUNvdW50ZXIpO1xuICAgICAgICAkaW5wdXQub24oJ2ZvY3VzJywgdXBkYXRlQ291bnRlcik7XG4gICAgICAgICRpbnB1dC5vbignYmx1cicsIHJlbW92ZUNvdW50ZXJFbGVtZW50KTtcblxuICAgICAgICBhZGRDb3VudGVyRWxlbWVudCgkaW5wdXQpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ291bnRlcigpe1xuICAgIHZhciBtYXhMZW5ndGggICAgID0gKyQodGhpcykuYXR0cignZGF0YS1sZW5ndGgnKSxcbiAgICBhY3R1YWxMZW5ndGggICAgICA9ICskKHRoaXMpLnZhbCgpLmxlbmd0aCxcbiAgICBpc1ZhbGlkTGVuZ3RoICAgICA9IGFjdHVhbExlbmd0aCA8PSBtYXhMZW5ndGg7XG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKCBhY3R1YWxMZW5ndGggKyAnLycgKyBtYXhMZW5ndGgpO1xuXG4gICAgYWRkSW5wdXRTdHlsZShpc1ZhbGlkTGVuZ3RoLCAkKHRoaXMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvdW50ZXJFbGVtZW50KCRpbnB1dCkge1xuICAgIHZhciAkY291bnRlckVsZW1lbnQgPSAkaW5wdXQucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7XG5cbiAgICBpZiAoJGNvdW50ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRjb3VudGVyRWxlbWVudCA9ICQoJzxzcGFuLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjaGFyYWN0ZXItY291bnRlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdmbG9hdCcsJ3JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ2ZvbnQtc2l6ZScsJzEycHgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnaGVpZ2h0JywgMSk7XG5cbiAgICAkaW5wdXQucGFyZW50KCkuYXBwZW5kKCRjb3VudGVyRWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDb3VudGVyRWxlbWVudCgpe1xuICAgICQodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbCgnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJbnB1dFN0eWxlKGlzVmFsaWRMZW5ndGgsICRpbnB1dCl7XG4gICAgdmFyIGlucHV0SGFzSW52YWxpZENsYXNzID0gJGlucHV0Lmhhc0NsYXNzKCdpbnZhbGlkJyk7XG4gICAgaWYgKGlzVmFsaWRMZW5ndGggJiYgaW5wdXRIYXNJbnZhbGlkQ2xhc3MpIHtcbiAgICAgICRpbnB1dC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgIH1cbiAgICBlbHNlIGlmKCFpc1ZhbGlkTGVuZ3RoICYmICFpbnB1dEhhc0ludmFsaWRDbGFzcyl7XG4gICAgICAkaW5wdXQucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAkaW5wdXQuYWRkQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJ2lucHV0LCB0ZXh0YXJlYScpLmNoYXJhY3RlckNvdW50ZXIoKTtcbiAgfSk7XG5cbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcblxuICAgIGluaXQgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsIC8vIG1zXG4gICAgICAgIGRpc3Q6IC0xMDAsIC8vIHpvb20gc2NhbGUgVE9ETzogbWFrZSB0aGlzIG1vcmUgaW50dWl0aXZlIGFzIGFuIG9wdGlvblxuICAgICAgICBzaGlmdDogMCwgLy8gc3BhY2luZyBmb3IgY2VudGVyIGltYWdlXG4gICAgICAgIHBhZGRpbmc6IDAsIC8vIFBhZGRpbmcgYmV0d2VlbiBub24gY2VudGVyIGl0ZW1zXG4gICAgICAgIGZ1bGxXaWR0aDogZmFsc2UsIC8vIENoYW5nZSB0byBmdWxsIHdpZHRoIHN0eWxlc1xuICAgICAgICBpbmRpY2F0b3JzOiBmYWxzZSwgLy8gVG9nZ2xlIGluZGljYXRvcnNcbiAgICAgICAgbm9XcmFwOiBmYWxzZSwgLy8gRG9uJ3Qgd3JhcCBhcm91bmQgYW5kIGN5Y2xlIHRocm91Z2ggaXRlbXMuXG4gICAgICAgIG9uQ3ljbGVUbzogbnVsbCAvLyBDYWxsYmFjayBmb3Igd2hlbiBhIG5ldyBzbGlkZSBpcyBjeWNsZWQgdG8uXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBNYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZygkKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHVuaXF1ZU5hbWVzcGFjZSA9IG5hbWVzcGFjZStpO1xuICAgICAgICB2YXIgaW1hZ2VzLCBpdGVtX3dpZHRoLCBpdGVtX2hlaWdodCwgb2Zmc2V0LCBjZW50ZXIsIHByZXNzZWQsIGRpbSwgY291bnQsXG4gICAgICAgICAgICByZWZlcmVuY2UsIHJlZmVyZW5jZVksIGFtcGxpdHVkZSwgdGFyZ2V0LCB2ZWxvY2l0eSwgc2Nyb2xsaW5nLFxuICAgICAgICAgICAgeGZvcm0sIGZyYW1lLCB0aW1lc3RhbXAsIHRpY2tlciwgZHJhZ2dlZCwgdmVydGljYWxfZHJhZ2dlZDtcbiAgICAgICAgdmFyICRpbmRpY2F0b3JzID0gJCgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+Jyk7XG4gICAgICAgIHZhciBzY3JvbGxpbmdUaW1lb3V0ID0gbnVsbDtcblxuXG4gICAgICAgIC8vIEluaXRpYWxpemVcbiAgICAgICAgdmFyIHZpZXcgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgc2hvd0luZGljYXRvcnMgPSB2aWV3LmF0dHIoJ2RhdGEtaW5kaWNhdG9ycycpIHx8IG9wdGlvbnMuaW5kaWNhdG9ycztcblxuXG4gICAgICAgIC8vIE9wdGlvbnNcbiAgICAgICAgdmFyIHNldENhcm91c2VsSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGZpcnN0SW1hZ2UgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtIGltZycpLmZpcnN0KCk7XG4gICAgICAgICAgaWYgKGZpcnN0SW1hZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RJbWFnZS5wcm9wKCdjb21wbGV0ZScpKSB7XG4gICAgICAgICAgICAgIHZpZXcuY3NzKCdoZWlnaHQnLCBmaXJzdEltYWdlLmhlaWdodCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpcnN0SW1hZ2Uub24oJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZpZXcuY3NzKCdoZWlnaHQnLCAkKHRoaXMpLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbWFnZUhlaWdodCA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5maXJzdCgpLmhlaWdodCgpO1xuICAgICAgICAgICAgdmlldy5jc3MoJ2hlaWdodCcsIGltYWdlSGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgb3B0aW9ucy5kaXN0ID0gMDtcbiAgICAgICAgICBzZXRDYXJvdXNlbEhlaWdodCgpO1xuXG4gICAgICAgICAgLy8gT2Zmc2V0IGZpeGVkIGl0ZW1zIHdoZW4gaW5kaWNhdG9ycy5cbiAgICAgICAgICBpZiAoc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICAgIHZpZXcuZmluZCgnLmNhcm91c2VsLWZpeGVkLWl0ZW0nKS5hZGRDbGFzcygnd2l0aC1pbmRpY2F0b3JzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBEb24ndCBkb3VibGUgaW5pdGlhbGl6ZS5cbiAgICAgICAgaWYgKHZpZXcuaGFzQ2xhc3MoJ2luaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSB2YXJpYWJsZXNcbiAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG5cbiAgICAgICAgICAvLyBSZWRyYXcgY2Fyb3VzZWwuXG4gICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbE5leHQnLCBbMC4wMDAwMDFdKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmlldy5hZGRDbGFzcygnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBvZmZzZXQgPSB0YXJnZXQgPSAwO1xuICAgICAgICBpbWFnZXMgPSBbXTtcbiAgICAgICAgaXRlbV93aWR0aCA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5maXJzdCgpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgaXRlbV9oZWlnaHQgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lckhlaWdodCgpO1xuICAgICAgICBkaW0gPSBpdGVtX3dpZHRoICogMiArIG9wdGlvbnMucGFkZGluZztcblxuICAgICAgICB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIGltYWdlcy5wdXNoKCQodGhpcylbMF0pO1xuICAgICAgICAgIGlmIChzaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgICAgdmFyICRpbmRpY2F0b3IgPSAkKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBhY3RpdmUgdG8gZmlyc3QgYnkgZGVmYXVsdC5cbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICRpbmRpY2F0b3IuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYW5kbGUgY2xpY2tzIG9uIGluZGljYXRvcnMuXG4gICAgICAgICAgICAkaW5kaWNhdG9yLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICAgICAgICBjeWNsZVRvKGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGluZGljYXRvcnMuYXBwZW5kKCRpbmRpY2F0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgdmlldy5hcHBlbmQoJGluZGljYXRvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50ID0gaW1hZ2VzLmxlbmd0aDtcblxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwRXZlbnRzKCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRhcCk7XG4gICAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWcpO1xuICAgICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHJlbGVhc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRhcCk7XG4gICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZWxlYXNlKTtcbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZWxlYXNlKTtcbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24geHBvcyhlKSB7XG4gICAgICAgICAgLy8gdG91Y2ggZXZlbnRcbiAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbW91c2UgZXZlbnRcbiAgICAgICAgICByZXR1cm4gZS5jbGllbnRYO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24geXBvcyhlKSB7XG4gICAgICAgICAgLy8gdG91Y2ggZXZlbnRcbiAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbW91c2UgZXZlbnRcbiAgICAgICAgICByZXR1cm4gZS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd3JhcCh4KSB7XG4gICAgICAgICAgcmV0dXJuICh4ID49IGNvdW50KSA/ICh4ICUgY291bnQpIDogKHggPCAwKSA/IHdyYXAoY291bnQgKyAoeCAlIGNvdW50KSkgOiB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKHgpIHtcbiAgICAgICAgICAvLyBUcmFjayBzY3JvbGxpbmcgc3RhdGVcbiAgICAgICAgICBzY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgIGlmICghdmlldy5oYXNDbGFzcygnc2Nyb2xsaW5nJykpIHtcbiAgICAgICAgICAgIHZpZXcuYWRkQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2Nyb2xsaW5nVGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHNjcm9sbGluZ1RpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZpZXcucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICAgIH0sIG9wdGlvbnMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgLy8gU3RhcnQgYWN0dWFsIHNjcm9sbFxuICAgICAgICAgIHZhciBpLCBoYWxmLCBkZWx0YSwgZGlyLCB0d2VlbiwgZWwsIGFsaWdubWVudCwgeFRyYW5zbGF0aW9uO1xuICAgICAgICAgIHZhciBsYXN0Q2VudGVyID0gY2VudGVyO1xuXG4gICAgICAgICAgb2Zmc2V0ID0gKHR5cGVvZiB4ID09PSAnbnVtYmVyJykgPyB4IDogb2Zmc2V0O1xuICAgICAgICAgIGNlbnRlciA9IE1hdGguZmxvb3IoKG9mZnNldCArIGRpbSAvIDIpIC8gZGltKTtcbiAgICAgICAgICBkZWx0YSA9IG9mZnNldCAtIGNlbnRlciAqIGRpbTtcbiAgICAgICAgICBkaXIgPSAoZGVsdGEgPCAwKSA/IDEgOiAtMTtcbiAgICAgICAgICB0d2VlbiA9IC1kaXIgKiBkZWx0YSAqIDIgLyBkaW07XG4gICAgICAgICAgaGFsZiA9IGNvdW50ID4+IDE7XG5cbiAgICAgICAgICBpZiAoIW9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPSAndHJhbnNsYXRlWCgnICsgKHZpZXdbMF0uY2xpZW50V2lkdGggLSBpdGVtX3dpZHRoKSAvIDIgKyAncHgpICc7XG4gICAgICAgICAgICBhbGlnbm1lbnQgKz0gJ3RyYW5zbGF0ZVkoJyArICh2aWV3WzBdLmNsaWVudEhlaWdodCAtIGl0ZW1faGVpZ2h0KSAvIDIgKyAncHgpJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxpZ25tZW50ID0gJ3RyYW5zbGF0ZVgoMCknO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNldCBpbmRpY2F0b3IgYWN0aXZlXG4gICAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IChjZW50ZXIgJSBjb3VudCk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlSW5kaWNhdG9yID0gJGluZGljYXRvcnMuZmluZCgnLmluZGljYXRvci1pdGVtLmFjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGljYXRvci5pbmRleCgpICE9PSBkaWZmKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICRpbmRpY2F0b3JzLmZpbmQoJy5pbmRpY2F0b3ItaXRlbScpLmVxKGRpZmYpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjZW50ZXJcbiAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCB8fCAoY2VudGVyID49IDAgJiYgY2VudGVyIDwgY291bnQpKSB7XG4gICAgICAgICAgICBlbCA9IGltYWdlc1t3cmFwKGNlbnRlcildO1xuXG4gICAgICAgICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIGNlbnRlciBpdGVtLlxuICAgICAgICAgICAgaWYgKCEkKGVsKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgJChlbCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWwuc3R5bGVbeGZvcm1dID0gYWxpZ25tZW50ICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoLWRlbHRhIC8gMikgKyAncHgpJyArXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKGRpciAqIG9wdGlvbnMuc2hpZnQgKiB0d2VlbiAqIGkpICsgJ3B4KScgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVooJyArIChvcHRpb25zLmRpc3QgKiB0d2VlbikgKyAncHgpJztcbiAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IDA7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHsgdHdlZW5lZE9wYWNpdHkgPSAxOyB9XG4gICAgICAgICAgICBlbHNlIHsgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogdHdlZW47IH1cbiAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0d2VlbmVkT3BhY2l0eTtcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaGFsZjsgKytpKSB7XG4gICAgICAgICAgICAvLyByaWdodCBzaWRlXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gb3B0aW9ucy5kaXN0O1xuICAgICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IChpID09PSBoYWxmICYmIGRlbHRhIDwgMCkgPyAxIC0gdHdlZW4gOiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gb3B0aW9ucy5kaXN0ICogKGkgKiAyICsgdHdlZW4gKiBkaXIpO1xuICAgICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IDEgLSAwLjIgKiAoaSAqIDIgKyB0d2VlbiAqIGRpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMubm9XcmFwIHx8IGNlbnRlciArIGkgPCBjb3VudCkge1xuICAgICAgICAgICAgICBlbCA9IGltYWdlc1t3cmFwKGNlbnRlciArIGkpXTtcbiAgICAgICAgICAgICAgZWwuc3R5bGVbeGZvcm1dID0gYWxpZ25tZW50ICtcbiAgICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArIChvcHRpb25zLnNoaWZ0ICsgKGRpbSAqIGkgLSBkZWx0YSkgLyAyKSArICdweCknICtcbiAgICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVooJyArIHpUcmFuc2xhdGlvbiArICdweCknO1xuICAgICAgICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAtaTtcbiAgICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IHR3ZWVuZWRPcGFjaXR5O1xuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBsZWZ0IHNpZGVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3Q7XG4gICAgICAgICAgICAgIHR3ZWVuZWRPcGFjaXR5ID0gKGkgPT09IGhhbGYgJiYgZGVsdGEgPiAwKSA/IDEgLSB0d2VlbiA6IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3QgKiAoaSAqIDIgLSB0d2VlbiAqIGRpcik7XG4gICAgICAgICAgICAgIHR3ZWVuZWRPcGFjaXR5ID0gMSAtIDAuMiAqIChpICogMiAtIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ub1dyYXAgfHwgY2VudGVyIC0gaSA+PSAwKSB7XG4gICAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyIC0gaSldO1xuICAgICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKC1vcHRpb25zLnNoaWZ0ICsgKC1kaW0gKiBpIC0gZGVsdGEpIC8gMikgKyAncHgpJyArXG4gICAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyB6VHJhbnNsYXRpb24gKyAncHgpJztcbiAgICAgICAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gLWk7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0d2VlbmVkT3BhY2l0eTtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2VudGVyXG4gICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgIGlmICghb3B0aW9ucy5ub1dyYXAgfHwgKGNlbnRlciA+PSAwICYmIGNlbnRlciA8IGNvdW50KSkge1xuICAgICAgICAgICAgZWwgPSBpbWFnZXNbd3JhcChjZW50ZXIpXTtcbiAgICAgICAgICAgIGVsLnN0eWxlW3hmb3JtXSA9IGFsaWdubWVudCArXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKC1kZWx0YSAvIDIpICsgJ3B4KScgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArIChkaXIgKiBvcHRpb25zLnNoaWZ0ICogdHdlZW4pICsgJ3B4KScgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVooJyArIChvcHRpb25zLmRpc3QgKiB0d2VlbikgKyAncHgpJztcbiAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IDA7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHsgdHdlZW5lZE9wYWNpdHkgPSAxOyB9XG4gICAgICAgICAgICBlbHNlIHsgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogdHdlZW47IH1cbiAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0d2VlbmVkT3BhY2l0eTtcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG9uQ3ljbGVUbyBjYWxsYmFja1xuICAgICAgICAgIGlmIChsYXN0Q2VudGVyICE9PSBjZW50ZXIgJiZcbiAgICAgICAgICAgICAgdHlwZW9mKG9wdGlvbnMub25DeWNsZVRvKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgJGN1cnJfaXRlbSA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5lcSh3cmFwKGNlbnRlcikpO1xuICAgICAgICAgICAgb3B0aW9ucy5vbkN5Y2xlVG8uY2FsbCh0aGlzLCAkY3Vycl9pdGVtLCBkcmFnZ2VkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0cmFjaygpIHtcbiAgICAgICAgICB2YXIgbm93LCBlbGFwc2VkLCBkZWx0YSwgdjtcblxuICAgICAgICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgZWxhcHNlZCA9IG5vdyAtIHRpbWVzdGFtcDtcbiAgICAgICAgICB0aW1lc3RhbXAgPSBub3c7XG4gICAgICAgICAgZGVsdGEgPSBvZmZzZXQgLSBmcmFtZTtcbiAgICAgICAgICBmcmFtZSA9IG9mZnNldDtcblxuICAgICAgICAgIHYgPSAxMDAwICogZGVsdGEgLyAoMSArIGVsYXBzZWQpO1xuICAgICAgICAgIHZlbG9jaXR5ID0gMC44ICogdiArIDAuMiAqIHZlbG9jaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXV0b1Njcm9sbCgpIHtcbiAgICAgICAgICB2YXIgZWxhcHNlZCwgZGVsdGE7XG5cbiAgICAgICAgICBpZiAoYW1wbGl0dWRlKSB7XG4gICAgICAgICAgICBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGRlbHRhID0gYW1wbGl0dWRlICogTWF0aC5leHAoLWVsYXBzZWQgLyBvcHRpb25zLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDIgfHwgZGVsdGEgPCAtMikge1xuICAgICAgICAgICAgICAgIHNjcm9sbCh0YXJnZXQgLSBkZWx0YSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjbGljayhlKSB7XG4gICAgICAgICAgLy8gRGlzYWJsZSBjbGlja3MgaWYgY2Fyb3VzZWwgd2FzIGRyYWdnZWQuXG4gICAgICAgICAgaWYgKGRyYWdnZWQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKCFvcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgdmFyIGNsaWNrZWRJbmRleCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jYXJvdXNlbC1pdGVtJykuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBkaWZmID0gKGNlbnRlciAlIGNvdW50KSAtIGNsaWNrZWRJbmRleDtcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSBjbGlja3MgaWYgY2Fyb3VzZWwgd2FzIHNoaWZ0ZWQgYnkgY2xpY2tcbiAgICAgICAgICAgIGlmIChkaWZmICE9PSAwKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN5Y2xlVG8oY2xpY2tlZEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjeWNsZVRvKG4pIHtcbiAgICAgICAgICB2YXIgZGlmZiA9IChjZW50ZXIgJSBjb3VudCkgLSBuO1xuXG4gICAgICAgICAgLy8gQWNjb3VudCBmb3Igd3JhcGFyb3VuZC5cbiAgICAgICAgICBpZiAoIW9wdGlvbnMubm9XcmFwKSB7XG4gICAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYgKyBjb3VudCkgPCBNYXRoLmFicyhkaWZmKSkgeyBkaWZmICs9IGNvdW50OyB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYgLSBjb3VudCkgPCBkaWZmKSB7IGRpZmYgLT0gY291bnQ7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsIHByZXYgb3IgbmV4dCBhY2NvcmRpbmdseS5cbiAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgIHZpZXcudHJpZ2dlcignY2Fyb3VzZWxOZXh0JywgW01hdGguYWJzKGRpZmYpXSk7XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICB2aWV3LnRyaWdnZXIoJ2Nhcm91c2VsUHJldicsIFtkaWZmXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdGFwKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgZHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgIHZlcnRpY2FsX2RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgICByZWZlcmVuY2UgPSB4cG9zKGUpO1xuICAgICAgICAgIHJlZmVyZW5jZVkgPSB5cG9zKGUpO1xuXG4gICAgICAgICAgdmVsb2NpdHkgPSBhbXBsaXR1ZGUgPSAwO1xuICAgICAgICAgIGZyYW1lID0gb2Zmc2V0O1xuICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aWNrZXIpO1xuICAgICAgICAgIHRpY2tlciA9IHNldEludGVydmFsKHRyYWNrLCAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICAgICAgdmFyIHgsIGRlbHRhLCBkZWx0YVk7XG4gICAgICAgICAgaWYgKHByZXNzZWQpIHtcbiAgICAgICAgICAgIHggPSB4cG9zKGUpO1xuICAgICAgICAgICAgeSA9IHlwb3MoZSk7XG4gICAgICAgICAgICBkZWx0YSA9IHJlZmVyZW5jZSAtIHg7XG4gICAgICAgICAgICBkZWx0YVkgPSBNYXRoLmFicyhyZWZlcmVuY2VZIC0geSk7XG4gICAgICAgICAgICBpZiAoZGVsdGFZIDwgMzAgJiYgIXZlcnRpY2FsX2RyYWdnZWQpIHtcbiAgICAgICAgICAgICAgLy8gSWYgdmVydGljYWwgc2Nyb2xsaW5nIGRvbid0IGFsbG93IGRyYWdnaW5nLlxuICAgICAgICAgICAgICBpZiAoZGVsdGEgPiAyIHx8IGRlbHRhIDwgLTIpIHtcbiAgICAgICAgICAgICAgICBkcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgPSB4O1xuICAgICAgICAgICAgICAgIHNjcm9sbChvZmZzZXQgKyBkZWx0YSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChkcmFnZ2VkKSB7XG4gICAgICAgICAgICAgIC8vIElmIGRyYWdnaW5nIGRvbid0IGFsbG93IHZlcnRpY2FsIHNjcm9sbC5cbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFZlcnRpY2FsIHNjcm9sbGluZy5cbiAgICAgICAgICAgICAgdmVydGljYWxfZHJhZ2dlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRyYWdnZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGRyYWdnaW5nIGRvbid0IGFsbG93IHZlcnRpY2FsIHNjcm9sbC5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVsZWFzZShlKSB7XG4gICAgICAgICAgaWYgKHByZXNzZWQpIHtcbiAgICAgICAgICAgIHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGlja2VyKTtcbiAgICAgICAgICB0YXJnZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgaWYgKHZlbG9jaXR5ID4gMTAgfHwgdmVsb2NpdHkgPCAtMTApIHtcbiAgICAgICAgICAgIGFtcGxpdHVkZSA9IDAuOSAqIHZlbG9jaXR5O1xuICAgICAgICAgICAgdGFyZ2V0ID0gb2Zmc2V0ICsgYW1wbGl0dWRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQgPSBNYXRoLnJvdW5kKHRhcmdldCAvIGRpbSkgKiBkaW07XG5cbiAgICAgICAgICAvLyBObyB3cmFwIG9mIGl0ZW1zLlxuICAgICAgICAgIGlmIChvcHRpb25zLm5vV3JhcCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA+PSBkaW0gKiAoY291bnQgLSAxKSkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSBkaW0gKiAoY291bnQgLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0IDwgMCkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbXBsaXR1ZGUgPSB0YXJnZXQgLSBvZmZzZXQ7XG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG5cbiAgICAgICAgICBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgeGZvcm0gPSAndHJhbnNmb3JtJztcbiAgICAgICAgWyd3ZWJraXQnLCAnTW96JywgJ08nLCAnbXMnXS5ldmVyeShmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICAgdmFyIGUgPSBwcmVmaXggKyAnVHJhbnNmb3JtJztcbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB4Zm9ybSA9IGU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5jYXJvdXNlbC0nK3VuaXF1ZU5hbWVzcGFjZSkub24oJ3Jlc2l6ZS5jYXJvdXNlbC0nK3VuaXF1ZU5hbWVzcGFjZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICBpdGVtX3dpZHRoID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaXRlbV9oZWlnaHQgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICAgZGltID0gaXRlbV93aWR0aCAqIDIgKyBvcHRpb25zLnBhZGRpbmc7XG4gICAgICAgICAgICBvZmZzZXQgPSBjZW50ZXIgKiAyICogaXRlbV93aWR0aDtcbiAgICAgICAgICAgIHRhcmdldCA9IG9mZnNldDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXR1cEV2ZW50cygpO1xuICAgICAgICBzY3JvbGwob2Zmc2V0KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjYXJvdXNlbE5leHQnLCBmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IChkaW0gKiBNYXRoLnJvdW5kKG9mZnNldCAvIGRpbSkpICsgKGRpbSAqIG4pO1xuICAgICAgICAgIGlmIChvZmZzZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgYW1wbGl0dWRlID0gdGFyZ2V0IC0gb2Zmc2V0O1xuICAgICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvU2Nyb2xsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQodGhpcykub24oJ2Nhcm91c2VsUHJldicsIGZ1bmN0aW9uKGUsIG4pIHtcbiAgICAgICAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0ID0gKGRpbSAqIE1hdGgucm91bmQob2Zmc2V0IC8gZGltKSkgLSAoZGltICogbik7XG4gICAgICAgICAgaWYgKG9mZnNldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBhbXBsaXR1ZGUgPSB0YXJnZXQgLSBvZmZzZXQ7XG4gICAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9TY3JvbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2Fyb3VzZWxTZXQnLCBmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbiA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN5Y2xlVG8obik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcblxuXG5cbiAgICB9LFxuICAgIG5leHQgOiBmdW5jdGlvbihuKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nhcm91c2VsTmV4dCcsIFtuXSk7XG4gICAgfSxcbiAgICBwcmV2IDogZnVuY3Rpb24obikge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbFByZXYnLCBbbl0pO1xuICAgIH0sXG4gICAgc2V0IDogZnVuY3Rpb24obikge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbFNldCcsIFtuXSk7XG4gICAgfVxuICB9O1xuXG5cbiAgICAkLmZuLmNhcm91c2VsID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgICBpZiAoIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xuICAgICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuY2Fyb3VzZWwnICk7XG4gICAgICB9XG4gICAgfTsgLy8gUGx1Z2luIGVuZFxufSggalF1ZXJ5ICkpOzsoZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcmlnaW4gPSAkKCcjJyskKHRoaXMpLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykpO1xuICAgIHZhciBzY3JlZW4gPSAkKCdib2R5Jyk7XG5cbiAgICAvLyBDcmVhdGluZyB0YXAgdGFyZ2V0XG4gICAgdmFyIHRhcFRhcmdldEVsID0gJCh0aGlzKTtcbiAgICB2YXIgdGFwVGFyZ2V0V3JhcHBlciA9IHRhcFRhcmdldEVsLnBhcmVudCgnLnRhcC10YXJnZXQtd3JhcHBlcicpO1xuICAgIHZhciB0YXBUYXJnZXRXYXZlID0gdGFwVGFyZ2V0V3JhcHBlci5maW5kKCcudGFwLXRhcmdldC13YXZlJyk7XG4gICAgdmFyIHRhcFRhcmdldE9yaWdpbkVsID0gdGFwVGFyZ2V0V3JhcHBlci5maW5kKCcudGFwLXRhcmdldC1vcmlnaW4nKTtcbiAgICB2YXIgdGFwVGFyZ2V0Q29udGVudEVsID0gdGFwVGFyZ2V0RWwuZmluZCgnLnRhcC10YXJnZXQtY29udGVudCcpO1xuXG4gICAgLy8gQ3JlYXRpbmcgd3JhcHBlclxuICAgIGlmICghdGFwVGFyZ2V0V3JhcHBlci5sZW5ndGgpIHtcbiAgICAgIHRhcFRhcmdldFdyYXBwZXIgPSB0YXBUYXJnZXRFbC53cmFwKCQoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdyYXBwZXJcIj48L2Rpdj4nKSkucGFyZW50KCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRpbmcgY29udGVudFxuICAgIGlmICghdGFwVGFyZ2V0Q29udGVudEVsLmxlbmd0aCkge1xuICAgICAgdGFwVGFyZ2V0Q29udGVudEVsID0gJCgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtY29udGVudFwiPjwvZGl2PicpO1xuICAgICAgdGFwVGFyZ2V0RWwuYXBwZW5kKHRhcFRhcmdldENvbnRlbnRFbCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRpbmcgZm9yZWdyb3VuZCB3YXZlXG4gICAgaWYgKCF0YXBUYXJnZXRXYXZlLmxlbmd0aCkge1xuICAgICAgdGFwVGFyZ2V0V2F2ZSA9ICQoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdhdmVcIj48L2Rpdj4nKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgb3JpZ2luXG4gICAgICBpZiAoIXRhcFRhcmdldE9yaWdpbkVsLmxlbmd0aCkge1xuICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbCA9IG9yaWdpbi5jbG9uZSh0cnVlLCB0cnVlKTtcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwuYWRkQ2xhc3MoJ3RhcC10YXJnZXQtb3JpZ2luJyk7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLnJlbW92ZUF0dHIoJ2lkJyk7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIHRhcFRhcmdldFdhdmUuYXBwZW5kKHRhcFRhcmdldE9yaWdpbkVsKTtcbiAgICAgIH1cblxuICAgICAgdGFwVGFyZ2V0V3JhcHBlci5hcHBlbmQodGFwVGFyZ2V0V2F2ZSk7XG4gICAgfVxuXG4gICAgLy8gT3BlblxuICAgIHZhciBvcGVuVGFwVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGFwVGFyZ2V0V3JhcHBlci5pcygnLm9wZW4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBvcGVuIGNsYXNzXG4gICAgICB0YXBUYXJnZXRXcmFwcGVyLmFkZENsYXNzKCdvcGVuJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLm9mZignY2xpY2sudGFwVGFyZ2V0Jykub24oJ2NsaWNrLnRhcFRhcmdldCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjbG9zZVRhcFRhcmdldCgpO1xuICAgICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLm9mZignY2xpY2sudGFwVGFyZ2V0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudGFwVGFyZ2V0Jykub24oJ2NsaWNrLnRhcFRhcmdldCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjbG9zZVRhcFRhcmdldCgpO1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudGFwVGFyZ2V0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB0aHJvdHRsZWRDYWxjID0gTWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsY3VsYXRlVGFwVGFyZ2V0KCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS50YXBUYXJnZXQnKS5vbigncmVzaXplLnRhcFRhcmdldCcsIHRocm90dGxlZENhbGMpO1xuICAgICAgfSwgMCk7XG4gICAgfTtcblxuICAgIC8vIENsb3NlXG4gICAgdmFyIGNsb3NlVGFwVGFyZ2V0ID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmICghdGFwVGFyZ2V0V3JhcHBlci5pcygnLm9wZW4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRhcFRhcmdldFdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgIHRhcFRhcmdldE9yaWdpbkVsLm9mZignY2xpY2sudGFwVGFyZ2V0JylcbiAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudGFwVGFyZ2V0Jyk7XG4gICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUudGFwVGFyZ2V0Jyk7XG4gICAgfTtcblxuICAgIC8vIFByZSBjYWxjdWxhdGVcbiAgICB2YXIgY2FsY3VsYXRlVGFwVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBFbGVtZW50IG9yIHBhcmVudCBpcyBmaXhlZCBwb3NpdGlvbj9cbiAgICAgIHZhciBpc0ZpeGVkID0gb3JpZ2luLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJztcbiAgICAgIGlmICghaXNGaXhlZCkge1xuICAgICAgICB2YXIgcGFyZW50cyA9IG9yaWdpbi5wYXJlbnRzKCk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNGaXhlZCA9ICQocGFyZW50c1tpXSkuY3NzKCdwb3NpdGlvbicpID09ICdmaXhlZCc7XG4gICAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDYWxjdWxhdGluZyBvcmlnaW5cbiAgICAgIHZhciBvcmlnaW5XaWR0aCA9IG9yaWdpbi5vdXRlcldpZHRoKCk7XG4gICAgICB2YXIgb3JpZ2luSGVpZ2h0ID0gb3JpZ2luLm91dGVySGVpZ2h0KCk7XG4gICAgICB2YXIgb3JpZ2luVG9wID0gaXNGaXhlZCA/IG9yaWdpbi5vZmZzZXQoKS50b3AgLSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA6IG9yaWdpbi5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgb3JpZ2luTGVmdCA9IGlzRml4ZWQgPyBvcmlnaW4ub2Zmc2V0KCkubGVmdCAtICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKSA6IG9yaWdpbi5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICAvLyBDYWxjdWxhdGluZyBzY3JlZW5cbiAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIHZhciBjZW50ZXJYID0gd2luZG93V2lkdGggLyAyO1xuICAgICAgdmFyIGNlbnRlclkgPSB3aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgdmFyIGlzTGVmdCA9IG9yaWdpbkxlZnQgPD0gY2VudGVyWDtcbiAgICAgIHZhciBpc1JpZ2h0ID0gb3JpZ2luTGVmdCA+IGNlbnRlclg7XG4gICAgICB2YXIgaXNUb3AgPSBvcmlnaW5Ub3AgPD0gY2VudGVyWTtcbiAgICAgIHZhciBpc0JvdHRvbSA9IG9yaWdpblRvcCA+IGNlbnRlclk7XG4gICAgICB2YXIgaXNDZW50ZXJYID0gb3JpZ2luTGVmdCA+PSB3aW5kb3dXaWR0aCowLjI1ICYmIG9yaWdpbkxlZnQgPD0gd2luZG93V2lkdGgqMC43NTtcbiAgICAgIHZhciBpc0NlbnRlclkgPSBvcmlnaW5Ub3AgPj0gd2luZG93SGVpZ2h0KjAuMjUgJiYgb3JpZ2luVG9wIDw9IHdpbmRvd0hlaWdodCowLjc1O1xuXG4gICAgICAvLyBDYWxjdWxhdGluZyB0YXAgdGFyZ2V0XG4gICAgICB2YXIgdGFwVGFyZ2V0V2lkdGggPSB0YXBUYXJnZXRFbC5vdXRlcldpZHRoKCk7XG4gICAgICB2YXIgdGFwVGFyZ2V0SGVpZ2h0ID0gdGFwVGFyZ2V0RWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgIHZhciB0YXBUYXJnZXRUb3AgPSBvcmlnaW5Ub3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRhcFRhcmdldEhlaWdodC8yO1xuICAgICAgdmFyIHRhcFRhcmdldExlZnQgPSBvcmlnaW5MZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRhcFRhcmdldFdpZHRoLzI7XG4gICAgICB2YXIgdGFwVGFyZ2V0UG9zaXRpb24gPSBpc0ZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIGNvbnRlbnRcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0V2lkdGggPSBpc0NlbnRlclggPyB0YXBUYXJnZXRXaWR0aCA6IHRhcFRhcmdldFdpZHRoLzIgKyBvcmlnaW5XaWR0aDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0SGVpZ2h0ID0gdGFwVGFyZ2V0SGVpZ2h0LzI7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dFRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0SGVpZ2h0LzIgOiAwO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRCb3R0b20gPSAwO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRMZWZ0ID0gaXNMZWZ0ICYmICFpc0NlbnRlclggPyB0YXBUYXJnZXRXaWR0aC8yIC0gb3JpZ2luV2lkdGggOiAwO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRSaWdodCA9IDA7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dFBhZGRpbmcgPSBvcmlnaW5XaWR0aDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0QWxpZ24gPSBpc0JvdHRvbSA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIHdhdmVcbiAgICAgIHZhciB0YXBUYXJnZXRXYXZlV2lkdGggPSBvcmlnaW5XaWR0aCA+IG9yaWdpbkhlaWdodCA/IG9yaWdpbldpZHRoKjIgOiBvcmlnaW5XaWR0aCoyO1xuICAgICAgdmFyIHRhcFRhcmdldFdhdmVIZWlnaHQgPSB0YXBUYXJnZXRXYXZlV2lkdGg7XG4gICAgICB2YXIgdGFwVGFyZ2V0V2F2ZVRvcCA9IHRhcFRhcmdldEhlaWdodC8yIC0gdGFwVGFyZ2V0V2F2ZUhlaWdodC8yO1xuICAgICAgdmFyIHRhcFRhcmdldFdhdmVMZWZ0ID0gdGFwVGFyZ2V0V2lkdGgvMiAtIHRhcFRhcmdldFdhdmVXaWR0aC8yO1xuXG4gICAgICAvLyBTZXR0aW5nIHRhcCB0YXJnZXRcbiAgICAgIHZhciB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqID0ge307XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0VG9wIDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnJpZ2h0ID0gaXNSaWdodCA/IHdpbmRvd1dpZHRoIC0gdGFwVGFyZ2V0TGVmdCAtIHRhcFRhcmdldFdpZHRoIDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmJvdHRvbSA9IGlzQm90dG9tID8gd2luZG93SGVpZ2h0IC0gdGFwVGFyZ2V0VG9wIC0gdGFwVGFyZ2V0SGVpZ2h0IDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmxlZnQgPSBpc0xlZnQgPyB0YXBUYXJnZXRMZWZ0IDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnBvc2l0aW9uID0gdGFwVGFyZ2V0UG9zaXRpb247XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyLmNzcyh0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqKTtcblxuICAgICAgLy8gU2V0dGluZyBjb250ZW50XG4gICAgICB0YXBUYXJnZXRDb250ZW50RWwuY3NzKHtcbiAgICAgICAgd2lkdGg6IHRhcFRhcmdldFRleHRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRUZXh0SGVpZ2h0LFxuICAgICAgICB0b3A6IHRhcFRhcmdldFRleHRUb3AsXG4gICAgICAgIHJpZ2h0OiB0YXBUYXJnZXRUZXh0UmlnaHQsXG4gICAgICAgIGJvdHRvbTogdGFwVGFyZ2V0VGV4dEJvdHRvbSxcbiAgICAgICAgbGVmdDogdGFwVGFyZ2V0VGV4dExlZnQsXG4gICAgICAgIHBhZGRpbmc6IHRhcFRhcmdldFRleHRQYWRkaW5nLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiB0YXBUYXJnZXRUZXh0QWxpZ25cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXR0aW5nIHdhdmVcbiAgICAgIHRhcFRhcmdldFdhdmUuY3NzKHtcbiAgICAgICAgdG9wOiB0YXBUYXJnZXRXYXZlVG9wLFxuICAgICAgICBsZWZ0OiB0YXBUYXJnZXRXYXZlTGVmdCxcbiAgICAgICAgd2lkdGg6IHRhcFRhcmdldFdhdmVXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRXYXZlSGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyA9PSAnb3BlbicpIHtcbiAgICAgIGNhbGN1bGF0ZVRhcFRhcmdldCgpO1xuICAgICAgb3BlblRhcFRhcmdldCgpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09ICdjbG9zZScpXG4gICAgICBjbG9zZVRhcFRhcmdldCgpO1xuICAgIH0pO1xuICB9LFxuICBvcGVuOiBmdW5jdGlvbigpIHt9LFxuICBjbG9zZTogZnVuY3Rpb24oKSB7fVxuICB9O1xuXG4gICQuZm4udGFwVGFyZ2V0ID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gIGlmIChtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gfHwgdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcpXG4gICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cbiAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhcC10YXJnZXQnICk7XG4gIH07XG5cbn0oIGpRdWVyeSApKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbGl6ZS1jc3MvZGlzdC9qcy9tYXRlcmlhbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2Nzc0ZjRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0V4YW1wbGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxhbWF0c3VrYVxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcRllQSlxcXFxlaWVuXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxFeGFtcGxlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEV4YW1wbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ2Nzc0ZjRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDY3NzRmNGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyB0aGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGVcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IE9iamVjdC5jcmVhdGUob3B0aW9ucy5jb21wdXRlZCB8fCBudWxsKVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgICBvcHRpb25zLmNvbXB1dGVkID0gY29tcHV0ZWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgfSwgW192bS5fdihcIkV4YW1wbGUgQ29tcG9uZW50XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ2Nzc0ZjRlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDY3NzRmNGVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==