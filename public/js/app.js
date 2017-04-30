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

/**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3M/YWIxNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvbWluaW1hbC5zY3NzPzhiMTciLCJ3ZWJwYWNrOi8vL0V4YW1wbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWxpemUtY3NzL2Rpc3QvanMvbWF0ZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlP2U2MGEiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsInVzZSIsIndpbmRvdyIsIlZlZVZhbGlkYXRlIiwiYXBwIiwiZWwiLCIkIiwic2lkZU5hdiIsInBhcmFsbGF4IiwiXyIsImpRdWVyeSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7O0FBTUEsbUJBQUFBLENBQVEsRUFBUjs7QUFFQTs7Ozs7O0FBTUFDLElBQUlDLFNBQUosQ0FBYyxTQUFkLEVBQXlCLG1CQUFBRixDQUFRLEVBQVIsQ0FBekI7O0FBRUFDLElBQUlFLEdBQUosQ0FBUUMsT0FBT0MsV0FBZjs7QUFFQSxJQUFNQyxNQUFNLElBQUlMLEdBQUosQ0FBUTtBQUNoQk0sTUFBSTtBQURZLENBQVIsQ0FBWjs7QUFJQTs7O0FBR0FDLEVBQUUsWUFBVztBQUNUQSxJQUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHFCQUFxQixXQUFXLEdBQUcsdUVBQXVFOztBQUUxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FB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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFpRDs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsNEVBQTRFLEdBQUcsOEJBQThCO0FBQzdJLHlCQUF5QixXQUFXLEdBQUcsdUNBQXVDO0FBQzlFLDBCQUEwQix3QkFBd0I7QUFDbEQseUJBQXlCLFVBQVUsRUFBRSxxQ0FBcUM7QUFDMUUseUJBQXlCLHlDQUF5QyxHQUFHLCtEQUErRDtBQUNwSTs7QUFFQSw2REFBNkQ7O0FBRTdEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELEdBQUcsNkJBQTZCO0FBQ3pGLGlDQUFpQyxpQ0FBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RCxpQ0FBaUMsdUJBQXVCO0FBQ3hEO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsc0NBQXNDO0FBQzNELHVCQUF1QiwwQ0FBMEM7QUFDakUsdUJBQXVCLDBDQUEwQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQXFFLEdBQUcsdUNBQXVDO0FBQ3JJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsOERBQThELEdBQUcsZ0JBQWdCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0EsaURBQWlELCtDQUErQzs7O0FBR2hHO0FBQ0EsOEJBQThCOzs7QUFHOUI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7O0FBR2pCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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OztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0IscUJBQXFCLFFBQVE7QUFDN0IscUJBQXFCLFFBQVE7QUFDN0IscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsZUFBZSxxRkFBcUY7O0FBRXBHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7Ozs7QUFJQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHVCQUF1QjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRCx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVULENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pEOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSwyQ0FBMkMsZ0NBQWdDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxhQUFhOztBQUV4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNEJBQTRCOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsNEJBQTRCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCw0QkFBNEI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGlEQUFpRCxxQkFBcUI7QUFDdEUsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGdDQUFnQyw0Q0FBNEM7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlFQUF5RSw0Q0FBNEM7QUFDckg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsZ0RBQWdELHVCQUF1QjtBQUN2RTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVILENBQUM7QUFDRCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxPQUFPOzs7O0FBSVAsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTixDQUFDLGFBQWE7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7OztBQ3htUUQ7QUFDQTtBQUNBLHdCQUFxSjtBQUNySjtBQUNBLHdCQUF5RztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMzQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xEQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0EsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdleGFtcGxlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0V4YW1wbGUudnVlJykpO1xuXG5WdWUudXNlKHdpbmRvdy5WZWVWYWxpZGF0ZSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXphdGlvbnNcbiAqL1xuJChmdW5jdGlvbigpIHtcbiAgICAkKCcuYnV0dG9uLWNvbGxhcHNlJykuc2lkZU5hdigpO1xuICAgICQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9taW5pbWFsLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkV4YW1wbGUgQ29tcG9uZW50PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEknbSBhbiBleGFtcGxlIGNvbXBvbmVudCFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgbW91bnRlZC4nKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEV4YW1wbGUudnVlPzYzYzkxZjBlIiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLy8gTWF0ZXJpYWxpemUgaXMgaW5jb21wYXRpYmxlIHdpdGggalF1ZXJ5ID4gMy54XG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdtYXRlcmlhbGl6ZS1jc3Mvbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcycpO1xucmVxdWlyZSgnbWF0ZXJpYWxpemUtY3NzL2Rpc3QvanMvbWF0ZXJpYWxpemUnKTtcblxuLy8gVnVlIGFuZCBwbHVnaW5zXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG53aW5kb3cuVmVlVmFsaWRhdGUgPSByZXF1aXJlKCd2ZWUtdmFsaWRhdGUnKTtcblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHtcbiAgICAnWC1DU1JGLVRPS0VOJzogd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuLFxuICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0Jyxcbn07XG5cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJ1xuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiLyohXG4gKiBNYXRlcmlhbGl6ZSB2MC45OC4yIChodHRwOi8vbWF0ZXJpYWxpemVjc3MuY29tKVxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSBNYXRlcmlhbGl6ZVxuICogTUlUIExpY2Vuc2UgKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL21hc3Rlci9MSUNFTlNFKVxuICovXG4vLyBDaGVjayBmb3IgalF1ZXJ5LlxuaWYgKHR5cGVvZihqUXVlcnkpID09PSAndW5kZWZpbmVkJykge1xuICB2YXIgalF1ZXJ5O1xuICAvLyBDaGVjayBpZiByZXF1aXJlIGlzIGEgZGVmaW5lZCBmdW5jdGlvbi5cbiAgaWYgKHR5cGVvZihyZXF1aXJlKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGpRdWVyeSA9ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgLy8gRWxzZSB1c2UgdGhlIGRvbGxhciBzaWduIGFsaWFzLlxuICB9IGVsc2Uge1xuICAgIGpRdWVyeSA9ICQ7XG4gIH1cbn1cbjsvKlxuICogalF1ZXJ5IEVhc2luZyB2MS4zIC0gaHR0cDovL2dzZ2QuY28udWsvc2FuZGJveC9qcXVlcnkvZWFzaW5nL1xuICpcbiAqIFVzZXMgdGhlIGJ1aWx0IGluIGVhc2luZyBjYXBhYmlsaXRpZXMgYWRkZWQgSW4galF1ZXJ5IDEuMVxuICogdG8gb2ZmZXIgbXVsdGlwbGUgZWFzaW5nIG9wdGlvbnNcbiAqXG4gKiBURVJNUyBPRiBVU0UgLSBqUXVlcnkgRWFzaW5nXG4gKlxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCDCqSAyMDA4IEdlb3JnZSBNY0dpbmxleSBTbWl0aFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdFxuICogb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHNcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZVxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZXG4gKiBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAqICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEVcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRURcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRURcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4qL1xuXG4vLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ0lubkluZyB2YWx1ZSwgYzogY2hhbmdlIEluIHZhbHVlLCBkOiBkdXJhdGlvblxualF1ZXJ5LmVhc2luZ1snanN3aW5nJ10gPSBqUXVlcnkuZWFzaW5nWydzd2luZyddO1xuXG5qUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZWFzaW5nLFxue1xuXHRkZWY6ICdlYXNlT3V0UXVhZCcsXG5cdHN3aW5nOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdC8vYWxlcnQoalF1ZXJ5LmVhc2luZy5kZWZhdWx0KTtcblx0XHRyZXR1cm4galF1ZXJ5LmVhc2luZ1tqUXVlcnkuZWFzaW5nLmRlZl0oeCwgdCwgYiwgYywgZCk7XG5cdH0sXG5cdGVhc2VJblF1YWQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQgKyBiO1xuXHR9LFxuXHRlYXNlT3V0UXVhZDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gLWMgKih0Lz1kKSoodC0yKSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dFF1YWQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQgKyBiO1xuXHRcdHJldHVybiAtYy8yICogKCgtLXQpKih0LTIpIC0gMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5DdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyoodC89ZCkqdCp0ICsgYjtcblx0fSxcblx0ZWFzZU91dEN1YmljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjKigodD10L2QtMSkqdCp0ICsgMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtcblx0XHRyZXR1cm4gYy8yKigodC09MikqdCp0ICsgMikgKyBiO1xuXHR9LFxuXHRlYXNlSW5RdWFydDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyoodC89ZCkqdCp0KnQgKyBiO1xuXHR9LFxuXHRlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIC1jICogKCh0PXQvZC0xKSp0KnQqdCAtIDEpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcblx0XHRyZXR1cm4gLWMvMiAqICgodC09MikqdCp0KnQgLSAyKSArIGI7XG5cdH0sXG5cdGVhc2VJblF1aW50OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjKih0Lz1kKSp0KnQqdCp0ICsgYjtcblx0fSxcblx0ZWFzZU91dFF1aW50OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjKigodD10L2QtMSkqdCp0KnQqdCArIDEpICsgYjtcblx0fSxcblx0ZWFzZUluT3V0UXVpbnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0KnQgKyBiO1xuXHRcdHJldHVybiBjLzIqKCh0LT0yKSp0KnQqdCp0ICsgMikgKyBiO1xuXHR9LFxuXHRlYXNlSW5TaW5lOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAtYyAqIE1hdGguY29zKHQvZCAqIChNYXRoLlBJLzIpKSArIGMgKyBiO1xuXHR9LFxuXHRlYXNlT3V0U2luZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gYyAqIE1hdGguc2luKHQvZCAqIChNYXRoLlBJLzIpKSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIC1jLzIgKiAoTWF0aC5jb3MoTWF0aC5QSSp0L2QpIC0gMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5FeHBvOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAodD09MCkgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICogKHQvZCAtIDEpKSArIGI7XG5cdH0sXG5cdGVhc2VPdXRFeHBvOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAodD09ZCkgPyBiK2MgOiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0L2QpICsgMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRFeHBvOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICh0PT0wKSByZXR1cm4gYjtcblx0XHRpZiAodD09ZCkgcmV0dXJuIGIrYztcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XG5cdFx0cmV0dXJuIGMvMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcblx0fSxcblx0ZWFzZUluQ2lyYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodC89ZCkqdCkgLSAxKSArIGI7XG5cdH0sXG5cdGVhc2VPdXRDaXJjOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSAodD10L2QtMSkqdCkgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiAtYy8yICogKE1hdGguc3FydCgxIC0gdCp0KSAtIDEpICsgYjtcblx0XHRyZXR1cm4gYy8yICogKE1hdGguc3FydCgxIC0gKHQtPTIpKnQpICsgMSkgKyBiO1xuXHR9LFxuXHRlYXNlSW5FbGFzdGljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHZhciBzPTEuNzAxNTg7dmFyIHA9MDt2YXIgYT1jO1xuXHRcdGlmICh0PT0wKSByZXR1cm4gYjsgIGlmICgodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCouMztcblx0XHRpZiAoYSA8IE1hdGguYWJzKGMpKSB7IGE9YzsgdmFyIHM9cC80OyB9XG5cdFx0ZWxzZSB2YXIgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4gKGMvYSk7XG5cdFx0cmV0dXJuIC0oYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcblx0fSxcblx0ZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0dmFyIHM9MS43MDE1ODt2YXIgcD0wO3ZhciBhPWM7XG5cdFx0aWYgKHQ9PTApIHJldHVybiBiOyAgaWYgKCh0Lz1kKT09MSkgcmV0dXJuIGIrYzsgIGlmICghcCkgcD1kKi4zO1xuXHRcdGlmIChhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyB2YXIgcz1wLzQ7IH1cblx0XHRlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcblx0XHRyZXR1cm4gYSpNYXRoLnBvdygyLC0xMCp0KSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSArIGMgKyBiO1xuXHR9LFxuXHRlYXNlSW5PdXRFbGFzdGljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdHZhciBzPTEuNzAxNTg7dmFyIHA9MDt2YXIgYT1jO1xuXHRcdGlmICh0PT0wKSByZXR1cm4gYjsgIGlmICgodC89ZC8yKT09MikgcmV0dXJuIGIrYzsgIGlmICghcCkgcD1kKiguMyoxLjUpO1xuXHRcdGlmIChhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyB2YXIgcz1wLzQ7IH1cblx0XHRlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcblx0XHRpZiAodCA8IDEpIHJldHVybiAtLjUqKGEqTWF0aC5wb3coMiwxMCoodC09MSkpICogTWF0aC5zaW4oICh0KmQtcykqKDIqTWF0aC5QSSkvcCApKSArIGI7XG5cdFx0cmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqKHQtPTEpKSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSouNSArIGMgKyBiO1xuXHR9LFxuXHRlYXNlSW5CYWNrOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCwgcykge1xuXHRcdGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQqKChzKzEpKnQgLSBzKSArIGI7XG5cdH0sXG5cdGVhc2VPdXRCYWNrOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCwgcykge1xuXHRcdGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG5cdFx0cmV0dXJuIGMqKCh0PXQvZC0xKSp0KigocysxKSp0ICsgcykgKyAxKSArIGI7XG5cdH0sXG5cdGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkLCBzKSB7XG5cdFx0aWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKih0KnQqKCgocyo9KDEuNTI1KSkrMSkqdCAtIHMpKSArIGI7XG5cdFx0cmV0dXJuIGMvMiooKHQtPTIpKnQqKCgocyo9KDEuNTI1KSkrMSkqdCArIHMpICsgMikgKyBiO1xuXHR9LFxuXHRlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIGMgLSBqUXVlcnkuZWFzaW5nLmVhc2VPdXRCb3VuY2UgKHgsIGQtdCwgMCwgYywgZCkgKyBiO1xuXHR9LFxuXHRlYXNlT3V0Qm91bmNlOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICgodC89ZCkgPCAoMS8yLjc1KSkge1xuXHRcdFx0cmV0dXJuIGMqKDcuNTYyNSp0KnQpICsgYjtcblx0XHR9IGVsc2UgaWYgKHQgPCAoMi8yLjc1KSkge1xuXHRcdFx0cmV0dXJuIGMqKDcuNTYyNSoodC09KDEuNS8yLjc1KSkqdCArIC43NSkgKyBiO1xuXHRcdH0gZWxzZSBpZiAodCA8ICgyLjUvMi43NSkpIHtcblx0XHRcdHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjI1LzIuNzUpKSp0ICsgLjkzNzUpICsgYjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGMqKDcuNTYyNSoodC09KDIuNjI1LzIuNzUpKSp0ICsgLjk4NDM3NSkgKyBiO1xuXHRcdH1cblx0fSxcblx0ZWFzZUluT3V0Qm91bmNlOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdGlmICh0IDwgZC8yKSByZXR1cm4galF1ZXJ5LmVhc2luZy5lYXNlSW5Cb3VuY2UgKHgsIHQqMiwgMCwgYywgZCkgKiAuNSArIGI7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZSAoeCwgdCoyLWQsIDAsIGMsIGQpICogLjUgKyBjKi41ICsgYjtcblx0fVxufSk7XG5cbi8qXG4gKlxuICogVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICpcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAwMSBSb2JlcnQgUGVubmVyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2ZcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0XG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFsc1xuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTllcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxuICogIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRFxuICogQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAqICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqLzsvLyBDdXN0b20gRWFzaW5nXG5qUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZWFzaW5nLFxue1xuICBlYXNlSW5PdXRNYXRlcmlhbDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcbiAgICBpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCArIGI7XG4gICAgcmV0dXJuIGMvNCooKHQtPTIpKnQqdCArIDIpICsgYjtcbiAgfVxufSk7Oy8qISBWZWxvY2l0eUpTLm9yZyAoMS4yLjMpLiAoQykgMjAxNCBKdWxpYW4gU2hhcGlyby4gTUlUIEBsaWNlbnNlOiBlbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UgKi9cbi8qISBWZWxvY2l0eUpTLm9yZyBqUXVlcnkgU2hpbSAoMS4wLjEpLiAoQykgMjAxNCBUaGUgalF1ZXJ5IEZvdW5kYXRpb24uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlLiAqL1xuLyohIE5vdGUgdGhhdCB0aGlzIGhhcyBiZWVuIG1vZGlmaWVkIGJ5IE1hdGVyaWFsaXplIHRvIGNvbmZpcm0gdGhhdCBWZWxvY2l0eSBpcyBub3QgYWxyZWFkeSBiZWluZyBpbXBvcnRlZC4gKi9cbmpRdWVyeS5WZWxvY2l0eT9jb25zb2xlLmxvZyhcIlZlbG9jaXR5IGlzIGFscmVhZHkgbG9hZGVkLiBZb3UgbWF5IGJlIG5lZWRsZXNzbHkgaW1wb3J0aW5nIFZlbG9jaXR5IGFnYWluOyBub3RlIHRoYXQgTWF0ZXJpYWxpemUgaW5jbHVkZXMgVmVsb2NpdHkuXCIpOighZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXt2YXIgdD1lLmxlbmd0aCxhPXIudHlwZShlKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1hfHxyLmlzV2luZG93KGUpPyExOjE9PT1lLm5vZGVUeXBlJiZ0PyEwOlwiYXJyYXlcIj09PWF8fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmdD4wJiZ0LTEgaW4gZX1pZighZS5qUXVlcnkpe3ZhciByPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyByLmZuLmluaXQoZSx0KX07ci5pc1dpbmRvdz1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09ZS53aW5kb3d9LHIudHlwZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bltpLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfSxyLmlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJhcnJheVwiPT09ci50eXBlKGUpfSxyLmlzUGxhaW5PYmplY3Q9ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoIWV8fFwib2JqZWN0XCIhPT1yLnR5cGUoZSl8fGUubm9kZVR5cGV8fHIuaXNXaW5kb3coZSkpcmV0dXJuITE7dHJ5e2lmKGUuY29uc3RydWN0b3ImJiFvLmNhbGwoZSxcImNvbnN0cnVjdG9yXCIpJiYhby5jYWxsKGUuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMX1jYXRjaChhKXtyZXR1cm4hMX1mb3IodCBpbiBlKTtyZXR1cm4gdm9pZCAwPT09dHx8by5jYWxsKGUsdCl9LHIuZWFjaD1mdW5jdGlvbihlLHIsYSl7dmFyIG4sbz0wLGk9ZS5sZW5ndGgscz10KGUpO2lmKGEpe2lmKHMpZm9yKDtpPm8mJihuPXIuYXBwbHkoZVtvXSxhKSxuIT09ITEpO28rKyk7ZWxzZSBmb3IobyBpbiBlKWlmKG49ci5hcHBseShlW29dLGEpLG49PT0hMSlicmVha31lbHNlIGlmKHMpZm9yKDtpPm8mJihuPXIuY2FsbChlW29dLG8sZVtvXSksbiE9PSExKTtvKyspO2Vsc2UgZm9yKG8gaW4gZSlpZihuPXIuY2FsbChlW29dLG8sZVtvXSksbj09PSExKWJyZWFrO3JldHVybiBlfSxyLmRhdGE9ZnVuY3Rpb24oZSx0LG4pe2lmKHZvaWQgMD09PW4pe3ZhciBvPWVbci5leHBhbmRvXSxpPW8mJmFbb107aWYodm9pZCAwPT09dClyZXR1cm4gaTtpZihpJiZ0IGluIGkpcmV0dXJuIGlbdF19ZWxzZSBpZih2b2lkIDAhPT10KXt2YXIgbz1lW3IuZXhwYW5kb118fChlW3IuZXhwYW5kb109KytyLnV1aWQpO3JldHVybiBhW29dPWFbb118fHt9LGFbb11bdF09bixufX0sci5yZW1vdmVEYXRhPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZVtyLmV4cGFuZG9dLG89biYmYVtuXTtvJiZyLmVhY2godCxmdW5jdGlvbihlLHQpe2RlbGV0ZSBvW3RdfSl9LHIuZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxhLG4sbyxpLHM9YXJndW1lbnRzWzBdfHx7fSxsPTEsdT1hcmd1bWVudHMubGVuZ3RoLGM9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgcyYmKGM9cyxzPWFyZ3VtZW50c1tsXXx8e30sbCsrKSxcIm9iamVjdFwiIT10eXBlb2YgcyYmXCJmdW5jdGlvblwiIT09ci50eXBlKHMpJiYocz17fSksbD09PXUmJihzPXRoaXMsbC0tKTt1Pmw7bCsrKWlmKG51bGwhPShvPWFyZ3VtZW50c1tsXSkpZm9yKG4gaW4gbyllPXNbbl0sYT1vW25dLHMhPT1hJiYoYyYmYSYmKHIuaXNQbGFpbk9iamVjdChhKXx8KHQ9ci5pc0FycmF5KGEpKSk/KHQ/KHQ9ITEsaT1lJiZyLmlzQXJyYXkoZSk/ZTpbXSk6aT1lJiZyLmlzUGxhaW5PYmplY3QoZSk/ZTp7fSxzW25dPXIuZXh0ZW5kKGMsaSxhKSk6dm9pZCAwIT09YSYmKHNbbl09YSkpO3JldHVybiBzfSxyLnF1ZXVlPWZ1bmN0aW9uKGUsYSxuKXtmdW5jdGlvbiBvKGUscil7dmFyIGE9cnx8W107cmV0dXJuIG51bGwhPWUmJih0KE9iamVjdChlKSk/IWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPSt0Lmxlbmd0aCxhPTAsbj1lLmxlbmd0aDtyPmE7KWVbbisrXT10W2ErK107aWYociE9PXIpZm9yKDt2b2lkIDAhPT10W2FdOyllW24rK109dFthKytdO3JldHVybiBlLmxlbmd0aD1uLGV9KGEsXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOltdLnB1c2guY2FsbChhLGUpKSxhfWlmKGUpe2E9KGF8fFwiZnhcIikrXCJxdWV1ZVwiO3ZhciBpPXIuZGF0YShlLGEpO3JldHVybiBuPyghaXx8ci5pc0FycmF5KG4pP2k9ci5kYXRhKGUsYSxvKG4pKTppLnB1c2gobiksaSk6aXx8W119fSxyLmRlcXVldWU9ZnVuY3Rpb24oZSx0KXtyLmVhY2goZS5ub2RlVHlwZT9bZV06ZSxmdW5jdGlvbihlLGEpe3Q9dHx8XCJmeFwiO3ZhciBuPXIucXVldWUoYSx0KSxvPW4uc2hpZnQoKTtcImlucHJvZ3Jlc3NcIj09PW8mJihvPW4uc2hpZnQoKSksbyYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksby5jYWxsKGEsZnVuY3Rpb24oKXtyLmRlcXVldWUoYSx0KX0pKX0pfSxyLmZuPXIucHJvdG90eXBlPXtpbml0OmZ1bmN0aW9uKGUpe2lmKGUubm9kZVR5cGUpcmV0dXJuIHRoaXNbMF09ZSx0aGlzO3Rocm93IG5ldyBFcnJvcihcIk5vdCBhIERPTSBub2RlLlwiKX0sb2Zmc2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTp7dG9wOjAsbGVmdDowfTtyZXR1cm57dG9wOnQudG9wKyhlLnBhZ2VZT2Zmc2V0fHxkb2N1bWVudC5zY3JvbGxUb3B8fDApLShkb2N1bWVudC5jbGllbnRUb3B8fDApLGxlZnQ6dC5sZWZ0KyhlLnBhZ2VYT2Zmc2V0fHxkb2N1bWVudC5zY3JvbGxMZWZ0fHwwKS0oZG9jdW1lbnQuY2xpZW50TGVmdHx8MCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtmb3IodmFyIGU9dGhpcy5vZmZzZXRQYXJlbnR8fGRvY3VtZW50O2UmJlwiaHRtbFwiPT09IWUubm9kZVR5cGUudG9Mb3dlckNhc2UmJlwic3RhdGljXCI9PT1lLnN0eWxlLnBvc2l0aW9uOyllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxkb2N1bWVudH12YXIgdD10aGlzWzBdLGU9ZS5hcHBseSh0KSxhPXRoaXMub2Zmc2V0KCksbj0vXig/OmJvZHl8aHRtbCkkL2kudGVzdChlLm5vZGVOYW1lKT97dG9wOjAsbGVmdDowfTpyKGUpLm9mZnNldCgpO3JldHVybiBhLnRvcC09cGFyc2VGbG9hdCh0LnN0eWxlLm1hcmdpblRvcCl8fDAsYS5sZWZ0LT1wYXJzZUZsb2F0KHQuc3R5bGUubWFyZ2luTGVmdCl8fDAsZS5zdHlsZSYmKG4udG9wKz1wYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyVG9wV2lkdGgpfHwwLG4ubGVmdCs9cGFyc2VGbG9hdChlLnN0eWxlLmJvcmRlckxlZnRXaWR0aCl8fDApLHt0b3A6YS50b3Atbi50b3AsbGVmdDphLmxlZnQtbi5sZWZ0fX19O3ZhciBhPXt9O3IuZXhwYW5kbz1cInZlbG9jaXR5XCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksci51dWlkPTA7Zm9yKHZhciBuPXt9LG89bi5oYXNPd25Qcm9wZXJ0eSxpPW4udG9TdHJpbmcscz1cIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksbD0wO2w8cy5sZW5ndGg7bCsrKW5bXCJbb2JqZWN0IFwiK3NbbF0rXCJdXCJdPXNbbF0udG9Mb3dlckNhc2UoKTtyLmZuLmluaXQucHJvdG90eXBlPXIuZm4sZS5WZWxvY2l0eT17VXRpbGl0aWVzOnJ9fX0od2luZG93KSxmdW5jdGlvbihlKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6ZSgpfShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQscixhKXtmdW5jdGlvbiBuKGUpe2Zvcih2YXIgdD0tMSxyPWU/ZS5sZW5ndGg6MCxhPVtdOysrdDxyOyl7dmFyIG49ZVt0XTtuJiZhLnB1c2gobil9cmV0dXJuIGF9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gbS5pc1dyYXBwZWQoZSk/ZT1bXS5zbGljZS5jYWxsKGUpOm0uaXNOb2RlKGUpJiYoZT1bZV0pLGV9ZnVuY3Rpb24gaShlKXt2YXIgdD1mLmRhdGEoZSxcInZlbG9jaXR5XCIpO3JldHVybiBudWxsPT09dD9hOnR9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgucm91bmQodCplKSooMS9lKX19ZnVuY3Rpb24gbChlLHIsYSxuKXtmdW5jdGlvbiBvKGUsdCl7cmV0dXJuIDEtMyp0KzMqZX1mdW5jdGlvbiBpKGUsdCl7cmV0dXJuIDMqdC02KmV9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gMyplfWZ1bmN0aW9uIGwoZSx0LHIpe3JldHVybigobyh0LHIpKmUraSh0LHIpKSplK3ModCkpKmV9ZnVuY3Rpb24gdShlLHQscil7cmV0dXJuIDMqbyh0LHIpKmUqZSsyKmkodCxyKSplK3ModCl9ZnVuY3Rpb24gYyh0LHIpe2Zvcih2YXIgbj0wO20+bjsrK24pe3ZhciBvPXUocixlLGEpO2lmKDA9PT1vKXJldHVybiByO3ZhciBpPWwocixlLGEpLXQ7ci09aS9vfXJldHVybiByfWZ1bmN0aW9uIHAoKXtmb3IodmFyIHQ9MDtiPnQ7Kyt0KXdbdF09bCh0KngsZSxhKX1mdW5jdGlvbiBmKHQscixuKXt2YXIgbyxpLHM9MDtkbyBpPXIrKG4tcikvMixvPWwoaSxlLGEpLXQsbz4wP249aTpyPWk7d2hpbGUoTWF0aC5hYnMobyk+aCYmKytzPHYpO3JldHVybiBpfWZ1bmN0aW9uIGQodCl7Zm9yKHZhciByPTAsbj0xLG89Yi0xO24hPW8mJndbbl08PXQ7KytuKXIrPXg7LS1uO3ZhciBpPSh0LXdbbl0pLyh3W24rMV0td1tuXSkscz1yK2kqeCxsPXUocyxlLGEpO3JldHVybiBsPj15P2ModCxzKTowPT1sP3M6Zih0LHIscit4KX1mdW5jdGlvbiBnKCl7Vj0hMCwoZSE9cnx8YSE9bikmJnAoKX12YXIgbT00LHk9LjAwMSxoPTFlLTcsdj0xMCxiPTExLHg9MS8oYi0xKSxTPVwiRmxvYXQzMkFycmF5XCJpbiB0O2lmKDQhPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgUD0wOzQ+UDsrK1ApaWYoXCJudW1iZXJcIiE9dHlwZW9mIGFyZ3VtZW50c1tQXXx8aXNOYU4oYXJndW1lbnRzW1BdKXx8IWlzRmluaXRlKGFyZ3VtZW50c1tQXSkpcmV0dXJuITE7ZT1NYXRoLm1pbihlLDEpLGE9TWF0aC5taW4oYSwxKSxlPU1hdGgubWF4KGUsMCksYT1NYXRoLm1heChhLDApO3ZhciB3PVM/bmV3IEZsb2F0MzJBcnJheShiKTpuZXcgQXJyYXkoYiksVj0hMSxDPWZ1bmN0aW9uKHQpe3JldHVybiBWfHxnKCksZT09PXImJmE9PT1uP3Q6MD09PXQ/MDoxPT09dD8xOmwoZCh0KSxyLG4pfTtDLmdldENvbnRyb2xQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm5be3g6ZSx5OnJ9LHt4OmEseTpufV19O3ZhciBUPVwiZ2VuZXJhdGVCZXppZXIoXCIrW2UscixhLG5dK1wiKVwiO3JldHVybiBDLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIFR9LEN9ZnVuY3Rpb24gdShlLHQpe3ZhciByPWU7cmV0dXJuIG0uaXNTdHJpbmcoZSk/Yi5FYXNpbmdzW2VdfHwocj0hMSk6cj1tLmlzQXJyYXkoZSkmJjE9PT1lLmxlbmd0aD9zLmFwcGx5KG51bGwsZSk6bS5pc0FycmF5KGUpJiYyPT09ZS5sZW5ndGg/eC5hcHBseShudWxsLGUuY29uY2F0KFt0XSkpOm0uaXNBcnJheShlKSYmND09PWUubGVuZ3RoP2wuYXBwbHkobnVsbCxlKTohMSxyPT09ITEmJihyPWIuRWFzaW5nc1tiLmRlZmF1bHRzLmVhc2luZ10/Yi5kZWZhdWx0cy5lYXNpbmc6dikscn1mdW5jdGlvbiBjKGUpe2lmKGUpe3ZhciB0PShuZXcgRGF0ZSkuZ2V0VGltZSgpLHI9Yi5TdGF0ZS5jYWxscy5sZW5ndGg7cj4xZTQmJihiLlN0YXRlLmNhbGxzPW4oYi5TdGF0ZS5jYWxscykpO2Zvcih2YXIgbz0wO3I+bztvKyspaWYoYi5TdGF0ZS5jYWxsc1tvXSl7dmFyIHM9Yi5TdGF0ZS5jYWxsc1tvXSxsPXNbMF0sdT1zWzJdLGQ9c1szXSxnPSEhZCx5PW51bGw7ZHx8KGQ9Yi5TdGF0ZS5jYWxsc1tvXVszXT10LTE2KTtmb3IodmFyIGg9TWF0aC5taW4oKHQtZCkvdS5kdXJhdGlvbiwxKSx2PTAseD1sLmxlbmd0aDt4PnY7disrKXt2YXIgUD1sW3ZdLFY9UC5lbGVtZW50O2lmKGkoVikpe3ZhciBDPSExO2lmKHUuZGlzcGxheSE9PWEmJm51bGwhPT11LmRpc3BsYXkmJlwibm9uZVwiIT09dS5kaXNwbGF5KXtpZihcImZsZXhcIj09PXUuZGlzcGxheSl7dmFyIFQ9W1wiLXdlYmtpdC1ib3hcIixcIi1tb3otYm94XCIsXCItbXMtZmxleGJveFwiLFwiLXdlYmtpdC1mbGV4XCJdO2YuZWFjaChULGZ1bmN0aW9uKGUsdCl7Uy5zZXRQcm9wZXJ0eVZhbHVlKFYsXCJkaXNwbGF5XCIsdCl9KX1TLnNldFByb3BlcnR5VmFsdWUoVixcImRpc3BsYXlcIix1LmRpc3BsYXkpfXUudmlzaWJpbGl0eSE9PWEmJlwiaGlkZGVuXCIhPT11LnZpc2liaWxpdHkmJlMuc2V0UHJvcGVydHlWYWx1ZShWLFwidmlzaWJpbGl0eVwiLHUudmlzaWJpbGl0eSk7Zm9yKHZhciBrIGluIFApaWYoXCJlbGVtZW50XCIhPT1rKXt2YXIgQSxGPVBba10saj1tLmlzU3RyaW5nKEYuZWFzaW5nKT9iLkVhc2luZ3NbRi5lYXNpbmddOkYuZWFzaW5nO2lmKDE9PT1oKUE9Ri5lbmRWYWx1ZTtlbHNle3ZhciBFPUYuZW5kVmFsdWUtRi5zdGFydFZhbHVlO2lmKEE9Ri5zdGFydFZhbHVlK0UqaihoLHUsRSksIWcmJkE9PT1GLmN1cnJlbnRWYWx1ZSljb250aW51ZX1pZihGLmN1cnJlbnRWYWx1ZT1BLFwidHdlZW5cIj09PWspeT1BO2Vsc2V7aWYoUy5Ib29rcy5yZWdpc3RlcmVkW2tdKXt2YXIgSD1TLkhvb2tzLmdldFJvb3QoayksTj1pKFYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSF07TiYmKEYucm9vdFByb3BlcnR5VmFsdWU9Til9dmFyIEw9Uy5zZXRQcm9wZXJ0eVZhbHVlKFYsayxGLmN1cnJlbnRWYWx1ZSsoMD09PXBhcnNlRmxvYXQoQSk/XCJcIjpGLnVuaXRUeXBlKSxGLnJvb3RQcm9wZXJ0eVZhbHVlLEYuc2Nyb2xsRGF0YSk7Uy5Ib29rcy5yZWdpc3RlcmVkW2tdJiYoaShWKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0hdPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtIXT9TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSF0oXCJleHRyYWN0XCIsbnVsbCxMWzFdKTpMWzFdKSxcInRyYW5zZm9ybVwiPT09TFswXSYmKEM9ITApfX11Lm1vYmlsZUhBJiZpKFYpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkPT09YSYmKGkoVikudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9XCIoMHB4LCAwcHgsIDBweClcIixDPSEwKSxDJiZTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoVil9fXUuZGlzcGxheSE9PWEmJlwibm9uZVwiIT09dS5kaXNwbGF5JiYoYi5TdGF0ZS5jYWxsc1tvXVsyXS5kaXNwbGF5PSExKSx1LnZpc2liaWxpdHkhPT1hJiZcImhpZGRlblwiIT09dS52aXNpYmlsaXR5JiYoYi5TdGF0ZS5jYWxsc1tvXVsyXS52aXNpYmlsaXR5PSExKSx1LnByb2dyZXNzJiZ1LnByb2dyZXNzLmNhbGwoc1sxXSxzWzFdLGgsTWF0aC5tYXgoMCxkK3UuZHVyYXRpb24tdCksZCx5KSwxPT09aCYmcChvKX19Yi5TdGF0ZS5pc1RpY2tpbmcmJncoYyl9ZnVuY3Rpb24gcChlLHQpe2lmKCFiLlN0YXRlLmNhbGxzW2VdKXJldHVybiExO2Zvcih2YXIgcj1iLlN0YXRlLmNhbGxzW2VdWzBdLG49Yi5TdGF0ZS5jYWxsc1tlXVsxXSxvPWIuU3RhdGUuY2FsbHNbZV1bMl0scz1iLlN0YXRlLmNhbGxzW2VdWzRdLGw9ITEsdT0wLGM9ci5sZW5ndGg7Yz51O3UrKyl7dmFyIHA9clt1XS5lbGVtZW50O2lmKHR8fG8ubG9vcHx8KFwibm9uZVwiPT09by5kaXNwbGF5JiZTLnNldFByb3BlcnR5VmFsdWUocCxcImRpc3BsYXlcIixvLmRpc3BsYXkpLFwiaGlkZGVuXCI9PT1vLnZpc2liaWxpdHkmJlMuc2V0UHJvcGVydHlWYWx1ZShwLFwidmlzaWJpbGl0eVwiLG8udmlzaWJpbGl0eSkpLG8ubG9vcCE9PSEwJiYoZi5xdWV1ZShwKVsxXT09PWF8fCEvXFwudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZy9pLnRlc3QoZi5xdWV1ZShwKVsxXSkpJiZpKHApKXtpKHApLmlzQW5pbWF0aW5nPSExLGkocCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZT17fTt2YXIgZD0hMTtmLmVhY2goUy5MaXN0cy50cmFuc2Zvcm1zM0QsZnVuY3Rpb24oZSx0KXt2YXIgcj0vXnNjYWxlLy50ZXN0KHQpPzE6MCxuPWkocCkudHJhbnNmb3JtQ2FjaGVbdF07aShwKS50cmFuc2Zvcm1DYWNoZVt0XSE9PWEmJm5ldyBSZWdFeHAoXCJeXFxcXChcIityK1wiW14uXVwiKS50ZXN0KG4pJiYoZD0hMCxkZWxldGUgaShwKS50cmFuc2Zvcm1DYWNoZVt0XSl9KSxvLm1vYmlsZUhBJiYoZD0hMCxkZWxldGUgaShwKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZCksZCYmUy5mbHVzaFRyYW5zZm9ybUNhY2hlKHApLFMuVmFsdWVzLnJlbW92ZUNsYXNzKHAsXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIil9aWYoIXQmJm8uY29tcGxldGUmJiFvLmxvb3AmJnU9PT1jLTEpdHJ5e28uY29tcGxldGUuY2FsbChuLG4pfWNhdGNoKGcpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBnfSwxKX1zJiZvLmxvb3AhPT0hMCYmcyhuKSxpKHApJiZvLmxvb3A9PT0hMCYmIXQmJihmLmVhY2goaShwKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oZSx0KXsvXnJvdGF0ZS8udGVzdChlKSYmMzYwPT09cGFyc2VGbG9hdCh0LmVuZFZhbHVlKSYmKHQuZW5kVmFsdWU9MCx0LnN0YXJ0VmFsdWU9MzYwKSwvXmJhY2tncm91bmRQb3NpdGlvbi8udGVzdChlKSYmMTAwPT09cGFyc2VGbG9hdCh0LmVuZFZhbHVlKSYmXCIlXCI9PT10LnVuaXRUeXBlJiYodC5lbmRWYWx1ZT0wLHQuc3RhcnRWYWx1ZT0xMDApfSksYihwLFwicmV2ZXJzZVwiLHtsb29wOiEwLGRlbGF5Om8uZGVsYXl9KSksby5xdWV1ZSE9PSExJiZmLmRlcXVldWUocCxvLnF1ZXVlKX1iLlN0YXRlLmNhbGxzW2VdPSExO2Zvcih2YXIgbT0wLHk9Yi5TdGF0ZS5jYWxscy5sZW5ndGg7eT5tO20rKylpZihiLlN0YXRlLmNhbGxzW21dIT09ITEpe2w9ITA7YnJlYWt9bD09PSExJiYoYi5TdGF0ZS5pc1RpY2tpbmc9ITEsZGVsZXRlIGIuU3RhdGUuY2FsbHMsYi5TdGF0ZS5jYWxscz1bXSl9dmFyIGYsZD1mdW5jdGlvbigpe2lmKHIuZG9jdW1lbnRNb2RlKXJldHVybiByLmRvY3VtZW50TW9kZTtmb3IodmFyIGU9NztlPjQ7ZS0tKXt2YXIgdD1yLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYodC5pbm5lckhUTUw9XCI8IS0tW2lmIElFIFwiK2UrXCJdPjxzcGFuPjwvc3Bhbj48IVtlbmRpZl0tLT5cIix0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKS5sZW5ndGgpcmV0dXJuIHQ9bnVsbCxlfXJldHVybiBhfSgpLGc9ZnVuY3Rpb24oKXt2YXIgZT0wO3JldHVybiB0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8dC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKHQpe3ZhciByLGE9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIHI9TWF0aC5tYXgoMCwxNi0oYS1lKSksZT1hK3Isc2V0VGltZW91dChmdW5jdGlvbigpe3QoYStyKX0scil9fSgpLG09e2lzU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX0saXNGdW5jdGlvbjpmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9LGlzTm9kZTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5ub2RlVHlwZX0saXNOb2RlTGlzdDpmdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLy50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSkmJmUubGVuZ3RoIT09YSYmKDA9PT1lLmxlbmd0aHx8XCJvYmplY3RcIj09dHlwZW9mIGVbMF0mJmVbMF0ubm9kZVR5cGU+MCl9LGlzV3JhcHBlZDpmdW5jdGlvbihlKXtyZXR1cm4gZSYmKGUuanF1ZXJ5fHx0LlplcHRvJiZ0LlplcHRvLnplcHRvLmlzWihlKSl9LGlzU1ZHOmZ1bmN0aW9uKGUpe3JldHVybiB0LlNWR0VsZW1lbnQmJmUgaW5zdGFuY2VvZiB0LlNWR0VsZW1lbnR9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9fSx5PSExO2lmKGUuZm4mJmUuZm4uanF1ZXJ5PyhmPWUseT0hMCk6Zj10LlZlbG9jaXR5LlV0aWxpdGllcyw4Pj1kJiYheSl0aHJvdyBuZXcgRXJyb3IoXCJWZWxvY2l0eTogSUU4IGFuZCBiZWxvdyByZXF1aXJlIGpRdWVyeSB0byBiZSBsb2FkZWQgYmVmb3JlIFZlbG9jaXR5LlwiKTtpZig3Pj1kKXJldHVybiB2b2lkKGpRdWVyeS5mbi52ZWxvY2l0eT1qUXVlcnkuZm4uYW5pbWF0ZSk7dmFyIGg9NDAwLHY9XCJzd2luZ1wiLGI9e1N0YXRlOntpc01vYmlsZTovQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNBbmRyb2lkOi9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0dpbmdlcmJyZWFkOi9BbmRyb2lkIDJcXC4zXFwuWzMtN10vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzQ2hyb21lOnQuY2hyb21lLGlzRmlyZWZveDovRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkscHJlZml4RWxlbWVudDpyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscHJlZml4TWF0Y2hlczp7fSxzY3JvbGxBbmNob3I6bnVsbCxzY3JvbGxQcm9wZXJ0eUxlZnQ6bnVsbCxzY3JvbGxQcm9wZXJ0eVRvcDpudWxsLGlzVGlja2luZzohMSxjYWxsczpbXX0sQ1NTOnt9LFV0aWxpdGllczpmLFJlZGlyZWN0czp7fSxFYXNpbmdzOnt9LFByb21pc2U6dC5Qcm9taXNlLGRlZmF1bHRzOntxdWV1ZTpcIlwiLGR1cmF0aW9uOmgsZWFzaW5nOnYsYmVnaW46YSxjb21wbGV0ZTphLHByb2dyZXNzOmEsZGlzcGxheTphLHZpc2liaWxpdHk6YSxsb29wOiExLGRlbGF5OiExLG1vYmlsZUhBOiEwLF9jYWNoZVZhbHVlczohMH0saW5pdDpmdW5jdGlvbihlKXtmLmRhdGEoZSxcInZlbG9jaXR5XCIse2lzU1ZHOm0uaXNTVkcoZSksaXNBbmltYXRpbmc6ITEsY29tcHV0ZWRTdHlsZTpudWxsLHR3ZWVuc0NvbnRhaW5lcjpudWxsLHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU6e30sdHJhbnNmb3JtQ2FjaGU6e319KX0saG9vazpudWxsLG1vY2s6ITEsdmVyc2lvbjp7bWFqb3I6MSxtaW5vcjoyLHBhdGNoOjJ9LGRlYnVnOiExfTt0LnBhZ2VZT2Zmc2V0IT09YT8oYi5TdGF0ZS5zY3JvbGxBbmNob3I9dCxiLlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInBhZ2VYT2Zmc2V0XCIsYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcD1cInBhZ2VZT2Zmc2V0XCIpOihiLlN0YXRlLnNjcm9sbEFuY2hvcj1yLmRvY3VtZW50RWxlbWVudHx8ci5ib2R5LnBhcmVudE5vZGV8fHIuYm9keSxiLlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInNjcm9sbExlZnRcIixiLlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwic2Nyb2xsVG9wXCIpO3ZhciB4PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXtyZXR1cm4tZS50ZW5zaW9uKmUueC1lLmZyaWN0aW9uKmUudn1mdW5jdGlvbiB0KHQscixhKXt2YXIgbj17eDp0LngrYS5keCpyLHY6dC52K2EuZHYqcix0ZW5zaW9uOnQudGVuc2lvbixmcmljdGlvbjp0LmZyaWN0aW9ufTtyZXR1cm57ZHg6bi52LGR2OmUobil9fWZ1bmN0aW9uIHIocixhKXt2YXIgbj17ZHg6ci52LGR2OmUocil9LG89dChyLC41KmEsbiksaT10KHIsLjUqYSxvKSxzPXQocixhLGkpLGw9MS82KihuLmR4KzIqKG8uZHgraS5keCkrcy5keCksdT0xLzYqKG4uZHYrMiooby5kditpLmR2KStzLmR2KTtyZXR1cm4gci54PXIueCtsKmEsci52PXIudit1KmEscn1yZXR1cm4gZnVuY3Rpb24gYShlLHQsbil7dmFyIG8saSxzLGw9e3g6LTEsdjowLHRlbnNpb246bnVsbCxmcmljdGlvbjpudWxsfSx1PVswXSxjPTAscD0xZS00LGY9LjAxNjtmb3IoZT1wYXJzZUZsb2F0KGUpfHw1MDAsdD1wYXJzZUZsb2F0KHQpfHwyMCxuPW58fG51bGwsbC50ZW5zaW9uPWUsbC5mcmljdGlvbj10LG89bnVsbCE9PW4sbz8oYz1hKGUsdCksaT1jL24qZik6aT1mO3M9cihzfHxsLGkpLHUucHVzaCgxK3MueCksYys9MTYsTWF0aC5hYnMocy54KT5wJiZNYXRoLmFicyhzLnYpPnA7KTtyZXR1cm4gbz9mdW5jdGlvbihlKXtyZXR1cm4gdVtlKih1Lmxlbmd0aC0xKXwwXX06Y319KCk7Yi5FYXNpbmdzPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sc3ByaW5nOmZ1bmN0aW9uKGUpe3JldHVybiAxLU1hdGguY29zKDQuNSplKk1hdGguUEkpKk1hdGguZXhwKDYqLWUpfX0sZi5lYWNoKFtbXCJlYXNlXCIsWy4yNSwuMSwuMjUsMV1dLFtcImVhc2UtaW5cIixbLjQyLDAsMSwxXV0sW1wiZWFzZS1vdXRcIixbMCwwLC41OCwxXV0sW1wiZWFzZS1pbi1vdXRcIixbLjQyLDAsLjU4LDFdXSxbXCJlYXNlSW5TaW5lXCIsWy40NywwLC43NDUsLjcxNV1dLFtcImVhc2VPdXRTaW5lXCIsWy4zOSwuNTc1LC41NjUsMV1dLFtcImVhc2VJbk91dFNpbmVcIixbLjQ0NSwuMDUsLjU1LC45NV1dLFtcImVhc2VJblF1YWRcIixbLjU1LC4wODUsLjY4LC41M11dLFtcImVhc2VPdXRRdWFkXCIsWy4yNSwuNDYsLjQ1LC45NF1dLFtcImVhc2VJbk91dFF1YWRcIixbLjQ1NSwuMDMsLjUxNSwuOTU1XV0sW1wiZWFzZUluQ3ViaWNcIixbLjU1LC4wNTUsLjY3NSwuMTldXSxbXCJlYXNlT3V0Q3ViaWNcIixbLjIxNSwuNjEsLjM1NSwxXV0sW1wiZWFzZUluT3V0Q3ViaWNcIixbLjY0NSwuMDQ1LC4zNTUsMV1dLFtcImVhc2VJblF1YXJ0XCIsWy44OTUsLjAzLC42ODUsLjIyXV0sW1wiZWFzZU91dFF1YXJ0XCIsWy4xNjUsLjg0LC40NCwxXV0sW1wiZWFzZUluT3V0UXVhcnRcIixbLjc3LDAsLjE3NSwxXV0sW1wiZWFzZUluUXVpbnRcIixbLjc1NSwuMDUsLjg1NSwuMDZdXSxbXCJlYXNlT3V0UXVpbnRcIixbLjIzLDEsLjMyLDFdXSxbXCJlYXNlSW5PdXRRdWludFwiLFsuODYsMCwuMDcsMV1dLFtcImVhc2VJbkV4cG9cIixbLjk1LC4wNSwuNzk1LC4wMzVdXSxbXCJlYXNlT3V0RXhwb1wiLFsuMTksMSwuMjIsMV1dLFtcImVhc2VJbk91dEV4cG9cIixbMSwwLDAsMV1dLFtcImVhc2VJbkNpcmNcIixbLjYsLjA0LC45OCwuMzM1XV0sW1wiZWFzZU91dENpcmNcIixbLjA3NSwuODIsLjE2NSwxXV0sW1wiZWFzZUluT3V0Q2lyY1wiLFsuNzg1LC4xMzUsLjE1LC44Nl1dXSxmdW5jdGlvbihlLHQpe2IuRWFzaW5nc1t0WzBdXT1sLmFwcGx5KG51bGwsdFsxXSl9KTt2YXIgUz1iLkNTUz17UmVnRXg6e2lzSGV4Oi9eIyhbQS1mXFxkXXszfSl7MSwyfSQvaSx2YWx1ZVVud3JhcDovXltBLXpdK1xcKCguKilcXCkkL2ksd3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZDovWzAtOS5dKyBbMC05Ll0rIFswLTkuXSsoIFswLTkuXSspPy8sdmFsdWVTcGxpdDovKFtBLXpdK1xcKC4rXFwpKXwoKFtBLXowLTkjLS5dKz8pKD89XFxzfCQpKS9naX0sTGlzdHM6e2NvbG9yczpbXCJmaWxsXCIsXCJzdHJva2VcIixcInN0b3BDb2xvclwiLFwiY29sb3JcIixcImJhY2tncm91bmRDb2xvclwiLFwiYm9yZGVyQ29sb3JcIixcImJvcmRlclRvcENvbG9yXCIsXCJib3JkZXJSaWdodENvbG9yXCIsXCJib3JkZXJCb3R0b21Db2xvclwiLFwiYm9yZGVyTGVmdENvbG9yXCIsXCJvdXRsaW5lQ29sb3JcIl0sdHJhbnNmb3Jtc0Jhc2U6W1widHJhbnNsYXRlWFwiLFwidHJhbnNsYXRlWVwiLFwic2NhbGVcIixcInNjYWxlWFwiLFwic2NhbGVZXCIsXCJza2V3WFwiLFwic2tld1lcIixcInJvdGF0ZVpcIl0sdHJhbnNmb3JtczNEOltcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsXCJ0cmFuc2xhdGVaXCIsXCJzY2FsZVpcIixcInJvdGF0ZVhcIixcInJvdGF0ZVlcIl19LEhvb2tzOnt0ZW1wbGF0ZXM6e3RleHRTaGFkb3c6W1wiQ29sb3IgWCBZIEJsdXJcIixcImJsYWNrIDBweCAwcHggMHB4XCJdLGJveFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1ciBTcHJlYWRcIixcImJsYWNrIDBweCAwcHggMHB4IDBweFwiXSxjbGlwOltcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiLFwiMHB4IDBweCAwcHggMHB4XCJdLGJhY2tncm91bmRQb3NpdGlvbjpbXCJYIFlcIixcIjAlIDAlXCJdLHRyYW5zZm9ybU9yaWdpbjpbXCJYIFkgWlwiLFwiNTAlIDUwJSAwcHhcIl0scGVyc3BlY3RpdmVPcmlnaW46W1wiWCBZXCIsXCI1MCUgNTAlXCJdfSxyZWdpc3RlcmVkOnt9LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxTLkxpc3RzLmNvbG9ycy5sZW5ndGg7ZSsrKXt2YXIgdD1cImNvbG9yXCI9PT1TLkxpc3RzLmNvbG9yc1tlXT9cIjAgMCAwIDFcIjpcIjI1NSAyNTUgMjU1IDFcIjtTLkhvb2tzLnRlbXBsYXRlc1tTLkxpc3RzLmNvbG9yc1tlXV09W1wiUmVkIEdyZWVuIEJsdWUgQWxwaGFcIix0XX12YXIgcixhLG47aWYoZClmb3IociBpbiBTLkhvb2tzLnRlbXBsYXRlcyl7YT1TLkhvb2tzLnRlbXBsYXRlc1tyXSxuPWFbMF0uc3BsaXQoXCIgXCIpO3ZhciBvPWFbMV0ubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KTtcIkNvbG9yXCI9PT1uWzBdJiYobi5wdXNoKG4uc2hpZnQoKSksby5wdXNoKG8uc2hpZnQoKSksUy5Ib29rcy50ZW1wbGF0ZXNbcl09W24uam9pbihcIiBcIiksby5qb2luKFwiIFwiKV0pfWZvcihyIGluIFMuSG9va3MudGVtcGxhdGVzKXthPVMuSG9va3MudGVtcGxhdGVzW3JdLG49YVswXS5zcGxpdChcIiBcIik7Zm9yKHZhciBlIGluIG4pe3ZhciBpPXIrbltlXSxzPWU7Uy5Ib29rcy5yZWdpc3RlcmVkW2ldPVtyLHNdfX19LGdldFJvb3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5Ib29rcy5yZWdpc3RlcmVkW2VdO3JldHVybiB0P3RbMF06ZX0sY2xlYW5Sb290UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiBTLlJlZ0V4LnZhbHVlVW53cmFwLnRlc3QodCkmJih0PXQubWF0Y2goUy5SZWdFeC52YWx1ZVVud3JhcClbMV0pLFMuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKHQpJiYodD1TLkhvb2tzLnRlbXBsYXRlc1tlXVsxXSksdH0sZXh0cmFjdFZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9Uy5Ib29rcy5yZWdpc3RlcmVkW2VdO2lmKHIpe3ZhciBhPXJbMF0sbj1yWzFdO3JldHVybiB0PVMuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShhLHQpLHQudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlU3BsaXQpW25dfXJldHVybiB0fSxpbmplY3RWYWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIGE9Uy5Ib29rcy5yZWdpc3RlcmVkW2VdO2lmKGEpe3ZhciBuLG8saT1hWzBdLHM9YVsxXTtyZXR1cm4gcj1TLkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoaSxyKSxuPXIudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlU3BsaXQpLG5bc109dCxvPW4uam9pbihcIiBcIil9cmV0dXJuIHJ9fSxOb3JtYWxpemF0aW9uczp7cmVnaXN0ZXJlZDp7Y2xpcDpmdW5jdGlvbihlLHQscil7c3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImNsaXBcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGE7cmV0dXJuIFMuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KHIpP2E9cjooYT1yLnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVVud3JhcCksYT1hP2FbMV0ucmVwbGFjZSgvLChcXHMrKT8vZyxcIiBcIik6ciksYTtjYXNlXCJpbmplY3RcIjpyZXR1cm5cInJlY3QoXCIrcitcIilcIn19LGJsdXI6ZnVuY3Rpb24oZSx0LHIpe3N3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuIGIuU3RhdGUuaXNGaXJlZm94P1wiZmlsdGVyXCI6XCItd2Via2l0LWZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgYT1wYXJzZUZsb2F0KHIpO2lmKCFhJiYwIT09YSl7dmFyIG49ci50b1N0cmluZygpLm1hdGNoKC9ibHVyXFwoKFswLTldK1tBLXpdKylcXCkvaSk7YT1uP25bMV06MH1yZXR1cm4gYTtjYXNlXCJpbmplY3RcIjpyZXR1cm4gcGFyc2VGbG9hdChyKT9cImJsdXIoXCIrcitcIilcIjpcIm5vbmVcIn19LG9wYWNpdHk6ZnVuY3Rpb24oZSx0LHIpe2lmKDg+PWQpc3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgYT1yLnRvU3RyaW5nKCkubWF0Y2goL2FscGhhXFwob3BhY2l0eT0oLiopXFwpL2kpO3JldHVybiByPWE/YVsxXS8xMDA6MTtjYXNlXCJpbmplY3RcIjpyZXR1cm4gdC5zdHlsZS56b29tPTEscGFyc2VGbG9hdChyKT49MT9cIlwiOlwiYWxwaGEob3BhY2l0eT1cIitwYXJzZUludCgxMDAqcGFyc2VGbG9hdChyKSwxMCkrXCIpXCJ9ZWxzZSBzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwib3BhY2l0eVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gcjtjYXNlXCJpbmplY3RcIjpyZXR1cm4gcn19fSxyZWdpc3RlcjpmdW5jdGlvbigpezk+PWR8fGIuU3RhdGUuaXNHaW5nZXJicmVhZHx8KFMuTGlzdHMudHJhbnNmb3Jtc0Jhc2U9Uy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5jb25jYXQoUy5MaXN0cy50cmFuc2Zvcm1zM0QpKTtmb3IodmFyIGU9MDtlPFMuTGlzdHMudHJhbnNmb3Jtc0Jhc2UubGVuZ3RoO2UrKykhZnVuY3Rpb24oKXt2YXIgdD1TLkxpc3RzLnRyYW5zZm9ybXNCYXNlW2VdO1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFt0XT1mdW5jdGlvbihlLHIsbil7c3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cInRyYW5zZm9ybVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gaShyKT09PWF8fGkocikudHJhbnNmb3JtQ2FjaGVbdF09PT1hPy9ec2NhbGUvaS50ZXN0KHQpPzE6MDppKHIpLnRyYW5zZm9ybUNhY2hlW3RdLnJlcGxhY2UoL1soKV0vZyxcIlwiKTtjYXNlXCJpbmplY3RcIjp2YXIgbz0hMTtzd2l0Y2godC5zdWJzdHIoMCx0Lmxlbmd0aC0xKSl7Y2FzZVwidHJhbnNsYXRlXCI6bz0hLyglfHB4fGVtfHJlbXx2d3x2aHxcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZVwic2NhbFwiOmNhc2VcInNjYWxlXCI6Yi5TdGF0ZS5pc0FuZHJvaWQmJmkocikudHJhbnNmb3JtQ2FjaGVbdF09PT1hJiYxPm4mJihuPTEpLG89IS8oXFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2VcInNrZXdcIjpvPSEvKGRlZ3xcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZVwicm90YXRlXCI6bz0hLyhkZWd8XFxkKSQvaS50ZXN0KG4pfXJldHVybiBvfHwoaShyKS50cmFuc2Zvcm1DYWNoZVt0XT1cIihcIituK1wiKVwiKSxpKHIpLnRyYW5zZm9ybUNhY2hlW3RdfX19KCk7Zm9yKHZhciBlPTA7ZTxTLkxpc3RzLmNvbG9ycy5sZW5ndGg7ZSsrKSFmdW5jdGlvbigpe3ZhciB0PVMuTGlzdHMuY29sb3JzW2VdO1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFt0XT1mdW5jdGlvbihlLHIsbil7c3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gdDtjYXNlXCJleHRyYWN0XCI6dmFyIG87aWYoUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3Qobikpbz1uO2Vsc2V7dmFyIGkscz17YmxhY2s6XCJyZ2IoMCwgMCwgMClcIixibHVlOlwicmdiKDAsIDAsIDI1NSlcIixncmF5OlwicmdiKDEyOCwgMTI4LCAxMjgpXCIsZ3JlZW46XCJyZ2IoMCwgMTI4LCAwKVwiLHJlZDpcInJnYigyNTUsIDAsIDApXCIsd2hpdGU6XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIn07L15bQS16XSskL2kudGVzdChuKT9pPXNbbl0hPT1hP3Nbbl06cy5ibGFjazpTLlJlZ0V4LmlzSGV4LnRlc3Qobik/aT1cInJnYihcIitTLlZhbHVlcy5oZXhUb1JnYihuKS5qb2luKFwiIFwiKStcIilcIjovXnJnYmE/XFwoL2kudGVzdChuKXx8KGk9cy5ibGFjayksbz0oaXx8bikudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKX1yZXR1cm4gOD49ZHx8MyE9PW8uc3BsaXQoXCIgXCIpLmxlbmd0aHx8KG8rPVwiIDFcIiksbztjYXNlXCJpbmplY3RcIjpyZXR1cm4gOD49ZD80PT09bi5zcGxpdChcIiBcIikubGVuZ3RoJiYobj1uLnNwbGl0KC9cXHMrLykuc2xpY2UoMCwzKS5qb2luKFwiIFwiKSk6Mz09PW4uc3BsaXQoXCIgXCIpLmxlbmd0aCYmKG4rPVwiIDFcIiksKDg+PWQ/XCJyZ2JcIjpcInJnYmFcIikrXCIoXCIrbi5yZXBsYWNlKC9cXHMrL2csXCIsXCIpLnJlcGxhY2UoL1xcLihcXGQpKyg/PSwpL2csXCJcIikrXCIpXCJ9fX0oKX19LE5hbWVzOntjYW1lbENhc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvLShcXHcpL2csZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfSl9LFNWR0F0dHJpYnV0ZTpmdW5jdGlvbihlKXt2YXIgdD1cIndpZHRofGhlaWdodHx4fHl8Y3h8Y3l8cnxyeHxyeXx4MXx4Mnx5MXx5MlwiO3JldHVybihkfHxiLlN0YXRlLmlzQW5kcm9pZCYmIWIuU3RhdGUuaXNDaHJvbWUpJiYodCs9XCJ8dHJhbnNmb3JtXCIpLG5ldyBSZWdFeHAoXCJeKFwiK3QrXCIpJFwiLFwiaVwiKS50ZXN0KGUpfSxwcmVmaXhDaGVjazpmdW5jdGlvbihlKXtpZihiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV0pcmV0dXJuW2IuU3RhdGUucHJlZml4TWF0Y2hlc1tlXSwhMF07Zm9yKHZhciB0PVtcIlwiLFwiV2Via2l0XCIsXCJNb3pcIixcIm1zXCIsXCJPXCJdLHI9MCxhPXQubGVuZ3RoO2E+cjtyKyspe3ZhciBuO2lmKG49MD09PXI/ZTp0W3JdK2UucmVwbGFjZSgvXlxcdy8sZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9VcHBlckNhc2UoKX0pLG0uaXNTdHJpbmcoYi5TdGF0ZS5wcmVmaXhFbGVtZW50LnN0eWxlW25dKSlyZXR1cm4gYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdPW4sW24sITBdfXJldHVybltlLCExXX19LFZhbHVlczp7aGV4VG9SZ2I6ZnVuY3Rpb24oZSl7dmFyIHQscj0vXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGE9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaTtyZXR1cm4gZT1lLnJlcGxhY2UocixmdW5jdGlvbihlLHQscixhKXtyZXR1cm4gdCt0K3IrcithK2F9KSx0PWEuZXhlYyhlKSx0P1twYXJzZUludCh0WzFdLDE2KSxwYXJzZUludCh0WzJdLDE2KSxwYXJzZUludCh0WzNdLDE2KV06WzAsMCwwXX0saXNDU1NOdWxsVmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIDA9PWV8fC9eKG5vbmV8YXV0b3x0cmFuc3BhcmVudHwocmdiYVxcKDAsID8wLCA/MCwgPzBcXCkpKSQvaS50ZXN0KGUpfSxnZXRVbml0VHlwZTpmdW5jdGlvbihlKXtyZXR1cm4vXihyb3RhdGV8c2tldykvaS50ZXN0KGUpP1wiZGVnXCI6LyheKHNjYWxlfHNjYWxlWHxzY2FsZVl8c2NhbGVafGFscGhhfGZsZXhHcm93fGZsZXhIZWlnaHR8ekluZGV4fGZvbnRXZWlnaHQpJCl8KChvcGFjaXR5fHJlZHxncmVlbnxibHVlfGFscGhhKSQpL2kudGVzdChlKT9cIlwiOlwicHhcIn0sZ2V0RGlzcGxheVR5cGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS50YWdOYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4vXihifGJpZ3xpfHNtYWxsfHR0fGFiYnJ8YWNyb255bXxjaXRlfGNvZGV8ZGZufGVtfGtiZHxzdHJvbmd8c2FtcHx2YXJ8YXxiZG98YnJ8aW1nfG1hcHxvYmplY3R8cXxzY3JpcHR8c3BhbnxzdWJ8c3VwfGJ1dHRvbnxpbnB1dHxsYWJlbHxzZWxlY3R8dGV4dGFyZWEpJC9pLnRlc3QodCk/XCJpbmxpbmVcIjovXihsaSkkL2kudGVzdCh0KT9cImxpc3QtaXRlbVwiOi9eKHRyKSQvaS50ZXN0KHQpP1widGFibGUtcm93XCI6L14odGFibGUpJC9pLnRlc3QodCk/XCJ0YWJsZVwiOi9eKHRib2R5KSQvaS50ZXN0KHQpP1widGFibGUtcm93LWdyb3VwXCI6XCJibG9ja1wifSxhZGRDbGFzczpmdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmFkZCh0KTplLmNsYXNzTmFtZSs9KGUuY2xhc3NOYW1lLmxlbmd0aD9cIiBcIjpcIlwiKSt0fSxyZW1vdmVDbGFzczpmdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LnJlbW92ZSh0KTplLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK3Quc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKFxcXFxzfCQpXCIsXCJnaVwiKSxcIiBcIil9fSxnZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGUscixuLG8pe2Z1bmN0aW9uIHMoZSxyKXtmdW5jdGlvbiBuKCl7dSYmUy5zZXRQcm9wZXJ0eVZhbHVlKGUsXCJkaXNwbGF5XCIsXCJub25lXCIpfXZhciBsPTA7aWYoOD49ZClsPWYuY3NzKGUscik7ZWxzZXt2YXIgdT0hMTtpZigvXih3aWR0aHxoZWlnaHQpJC8udGVzdChyKSYmMD09PVMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiZGlzcGxheVwiKSYmKHU9ITAsUy5zZXRQcm9wZXJ0eVZhbHVlKGUsXCJkaXNwbGF5XCIsUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZSkpKSwhbyl7aWYoXCJoZWlnaHRcIj09PXImJlwiYm9yZGVyLWJveFwiIT09Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgYz1lLm9mZnNldEhlaWdodC0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcImJvcmRlclRvcFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJCb3R0b21XaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwicGFkZGluZ1RvcFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwicGFkZGluZ0JvdHRvbVwiKSl8fDApO3JldHVybiBuKCksY31pZihcIndpZHRoXCI9PT1yJiZcImJvcmRlci1ib3hcIiE9PVMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7dmFyIHA9ZS5vZmZzZXRXaWR0aC0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcImJvcmRlckxlZnRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyUmlnaHRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwicGFkZGluZ0xlZnRcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcInBhZGRpbmdSaWdodFwiKSl8fDApO3JldHVybiBuKCkscH19dmFyIGc7Zz1pKGUpPT09YT90LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKTppKGUpLmNvbXB1dGVkU3R5bGU/aShlKS5jb21wdXRlZFN0eWxlOmkoZSkuY29tcHV0ZWRTdHlsZT10LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKSxcImJvcmRlckNvbG9yXCI9PT1yJiYocj1cImJvcmRlclRvcENvbG9yXCIpLGw9OT09PWQmJlwiZmlsdGVyXCI9PT1yP2cuZ2V0UHJvcGVydHlWYWx1ZShyKTpnW3JdLChcIlwiPT09bHx8bnVsbD09PWwpJiYobD1lLnN0eWxlW3JdKSxuKCl9aWYoXCJhdXRvXCI9PT1sJiYvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC9pLnRlc3Qocikpe3ZhciBtPXMoZSxcInBvc2l0aW9uXCIpOyhcImZpeGVkXCI9PT1tfHxcImFic29sdXRlXCI9PT1tJiYvdG9wfGxlZnQvaS50ZXN0KHIpKSYmKGw9ZihlKS5wb3NpdGlvbigpW3JdK1wicHhcIil9cmV0dXJuIGx9dmFyIGw7aWYoUy5Ib29rcy5yZWdpc3RlcmVkW3JdKXt2YXIgdT1yLGM9Uy5Ib29rcy5nZXRSb290KHUpO249PT1hJiYobj1TLmdldFByb3BlcnR5VmFsdWUoZSxTLk5hbWVzLnByZWZpeENoZWNrKGMpWzBdKSksUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdJiYobj1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJleHRyYWN0XCIsZSxuKSksbD1TLkhvb2tzLmV4dHJhY3RWYWx1ZSh1LG4pfWVsc2UgaWYoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKXt2YXIgcCxnO3A9Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLGUpLFwidHJhbnNmb3JtXCIhPT1wJiYoZz1zKGUsUy5OYW1lcy5wcmVmaXhDaGVjayhwKVswXSksUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUoZykmJlMuSG9va3MudGVtcGxhdGVzW3JdJiYoZz1TLkhvb2tzLnRlbXBsYXRlc1tyXVsxXSkpLGw9Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiZXh0cmFjdFwiLGUsZyl9aWYoIS9eW1xcZC1dLy50ZXN0KGwpKWlmKGkoZSkmJmkoZSkuaXNTVkcmJlMuTmFtZXMuU1ZHQXR0cmlidXRlKHIpKWlmKC9eKGhlaWdodHx3aWR0aCkkL2kudGVzdChyKSl0cnl7bD1lLmdldEJCb3goKVtyXX1jYXRjaChtKXtsPTB9ZWxzZSBsPWUuZ2V0QXR0cmlidXRlKHIpO2Vsc2UgbD1zKGUsUy5OYW1lcy5wcmVmaXhDaGVjayhyKVswXSk7cmV0dXJuIFMuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGwpJiYobD0wKSxiLmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIkdldCBcIityK1wiOiBcIitsKSxsfSxzZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGUscixhLG4sbyl7dmFyIHM9cjtpZihcInNjcm9sbFwiPT09cilvLmNvbnRhaW5lcj9vLmNvbnRhaW5lcltcInNjcm9sbFwiK28uZGlyZWN0aW9uXT1hOlwiTGVmdFwiPT09by5kaXJlY3Rpb24/dC5zY3JvbGxUbyhhLG8uYWx0ZXJuYXRlVmFsdWUpOnQuc2Nyb2xsVG8oby5hbHRlcm5hdGVWYWx1ZSxhKTtlbHNlIGlmKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSYmXCJ0cmFuc2Zvcm1cIj09PVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIixlKSlTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJpbmplY3RcIixlLGEpLHM9XCJ0cmFuc2Zvcm1cIixhPWkoZSkudHJhbnNmb3JtQ2FjaGVbcl07ZWxzZXtpZihTLkhvb2tzLnJlZ2lzdGVyZWRbcl0pe3ZhciBsPXIsdT1TLkhvb2tzLmdldFJvb3Qocik7bj1ufHxTLmdldFByb3BlcnR5VmFsdWUoZSx1KSxhPVMuSG9va3MuaW5qZWN0VmFsdWUobCxhLG4pLHI9dX1pZihTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0mJihhPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImluamVjdFwiLGUsYSkscj1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsZSkpLHM9Uy5OYW1lcy5wcmVmaXhDaGVjayhyKVswXSw4Pj1kKXRyeXtlLnN0eWxlW3NdPWF9Y2F0Y2goYyl7Yi5kZWJ1ZyYmY29uc29sZS5sb2coXCJCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgW1wiK2ErXCJdIGZvciBbXCIrcytcIl1cIil9ZWxzZSBpKGUpJiZpKGUpLmlzU1ZHJiZTLk5hbWVzLlNWR0F0dHJpYnV0ZShyKT9lLnNldEF0dHJpYnV0ZShyLGEpOmUuc3R5bGVbc109YTtiLmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIlNldCBcIityK1wiIChcIitzK1wiKTogXCIrYSl9cmV0dXJuW3MsYV19LGZsdXNoVHJhbnNmb3JtQ2FjaGU6ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gcGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSx0KSl9dmFyIHI9XCJcIjtpZigoZHx8Yi5TdGF0ZS5pc0FuZHJvaWQmJiFiLlN0YXRlLmlzQ2hyb21lKSYmaShlKS5pc1NWRyl7dmFyIGE9e3RyYW5zbGF0ZTpbdChcInRyYW5zbGF0ZVhcIiksdChcInRyYW5zbGF0ZVlcIildLHNrZXdYOlt0KFwic2tld1hcIildLHNrZXdZOlt0KFwic2tld1lcIildLHNjYWxlOjEhPT10KFwic2NhbGVcIik/W3QoXCJzY2FsZVwiKSx0KFwic2NhbGVcIildOlt0KFwic2NhbGVYXCIpLHQoXCJzY2FsZVlcIildLHJvdGF0ZTpbdChcInJvdGF0ZVpcIiksMCwwXX07Zi5lYWNoKGkoZSkudHJhbnNmb3JtQ2FjaGUsZnVuY3Rpb24oZSl7L150cmFuc2xhdGUvaS50ZXN0KGUpP2U9XCJ0cmFuc2xhdGVcIjovXnNjYWxlL2kudGVzdChlKT9lPVwic2NhbGVcIjovXnJvdGF0ZS9pLnRlc3QoZSkmJihlPVwicm90YXRlXCIpLGFbZV0mJihyKz1lK1wiKFwiK2FbZV0uam9pbihcIiBcIikrXCIpIFwiLGRlbGV0ZSBhW2VdKX0pfWVsc2V7dmFyIG4sbztmLmVhY2goaShlKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbih0KXtyZXR1cm4gbj1pKGUpLnRyYW5zZm9ybUNhY2hlW3RdLFwidHJhbnNmb3JtUGVyc3BlY3RpdmVcIj09PXQ/KG89biwhMCk6KDk9PT1kJiZcInJvdGF0ZVpcIj09PXQmJih0PVwicm90YXRlXCIpLHZvaWQocis9dCtuK1wiIFwiKSl9KSxvJiYocj1cInBlcnNwZWN0aXZlXCIrbytcIiBcIityKX1TLnNldFByb3BlcnR5VmFsdWUoZSxcInRyYW5zZm9ybVwiLHIpfX07Uy5Ib29rcy5yZWdpc3RlcigpLFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXIoKSxiLmhvb2s9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWE7cmV0dXJuIGU9byhlKSxmLmVhY2goZSxmdW5jdGlvbihlLG8pe2lmKGkobyk9PT1hJiZiLmluaXQobykscj09PWEpbj09PWEmJihuPWIuQ1NTLmdldFByb3BlcnR5VmFsdWUobyx0KSk7ZWxzZXt2YXIgcz1iLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKG8sdCxyKTtcInRyYW5zZm9ybVwiPT09c1swXSYmYi5DU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShvKSxuPXN9fSksbn07dmFyIFA9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cmV0dXJuIHM/ay5wcm9taXNlfHxudWxsOmx9ZnVuY3Rpb24gbigpe2Z1bmN0aW9uIGUoZSl7ZnVuY3Rpb24gcChlLHQpe3ZhciByPWEsbj1hLGk9YTtyZXR1cm4gbS5pc0FycmF5KGUpPyhyPWVbMF0sIW0uaXNBcnJheShlWzFdKSYmL15bXFxkLV0vLnRlc3QoZVsxXSl8fG0uaXNGdW5jdGlvbihlWzFdKXx8Uy5SZWdFeC5pc0hleC50ZXN0KGVbMV0pP2k9ZVsxXToobS5pc1N0cmluZyhlWzFdKSYmIVMuUmVnRXguaXNIZXgudGVzdChlWzFdKXx8bS5pc0FycmF5KGVbMV0pKSYmKG49dD9lWzFdOnUoZVsxXSxzLmR1cmF0aW9uKSxlWzJdIT09YSYmKGk9ZVsyXSkpKTpyPWUsdHx8KG49bnx8cy5lYXNpbmcpLG0uaXNGdW5jdGlvbihyKSYmKHI9ci5jYWxsKG8sVix3KSksbS5pc0Z1bmN0aW9uKGkpJiYoaT1pLmNhbGwobyxWLHcpKSxbcnx8MCxuLGldfWZ1bmN0aW9uIGQoZSx0KXt2YXIgcixhO3JldHVybiBhPSh0fHxcIjBcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1slQS16XSskLyxmdW5jdGlvbihlKXtyZXR1cm4gcj1lLFwiXCJ9KSxyfHwocj1TLlZhbHVlcy5nZXRVbml0VHlwZShlKSksW2Escl19ZnVuY3Rpb24gaCgpe3ZhciBlPXtteVBhcmVudDpvLnBhcmVudE5vZGV8fHIuYm9keSxwb3NpdGlvbjpTLmdldFByb3BlcnR5VmFsdWUobyxcInBvc2l0aW9uXCIpLGZvbnRTaXplOlMuZ2V0UHJvcGVydHlWYWx1ZShvLFwiZm9udFNpemVcIil9LGE9ZS5wb3NpdGlvbj09PUwubGFzdFBvc2l0aW9uJiZlLm15UGFyZW50PT09TC5sYXN0UGFyZW50LG49ZS5mb250U2l6ZT09PUwubGFzdEZvbnRTaXplO0wubGFzdFBhcmVudD1lLm15UGFyZW50LEwubGFzdFBvc2l0aW9uPWUucG9zaXRpb24sTC5sYXN0Rm9udFNpemU9ZS5mb250U2l6ZTt2YXIgcz0xMDAsbD17fTtpZihuJiZhKWwuZW1Ub1B4PUwubGFzdEVtVG9QeCxsLnBlcmNlbnRUb1B4V2lkdGg9TC5sYXN0UGVyY2VudFRvUHhXaWR0aCxsLnBlcmNlbnRUb1B4SGVpZ2h0PUwubGFzdFBlcmNlbnRUb1B4SGVpZ2h0O2Vsc2V7dmFyIHU9aShvKS5pc1NWRz9yLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJyZWN0XCIpOnIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtiLmluaXQodSksZS5teVBhcmVudC5hcHBlbmRDaGlsZCh1KSxmLmVhY2goW1wib3ZlcmZsb3dcIixcIm92ZXJmbG93WFwiLFwib3ZlcmZsb3dZXCJdLGZ1bmN0aW9uKGUsdCl7Yi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LHQsXCJoaWRkZW5cIil9KSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJwb3NpdGlvblwiLGUucG9zaXRpb24pLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcImZvbnRTaXplXCIsZS5mb250U2l6ZSksYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LFwiYm94U2l6aW5nXCIsXCJjb250ZW50LWJveFwiKSxmLmVhY2goW1wibWluV2lkdGhcIixcIm1heFdpZHRoXCIsXCJ3aWR0aFwiLFwibWluSGVpZ2h0XCIsXCJtYXhIZWlnaHRcIixcImhlaWdodFwiXSxmdW5jdGlvbihlLHQpe2IuQ1NTLnNldFByb3BlcnR5VmFsdWUodSx0LHMrXCIlXCIpfSksYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LFwicGFkZGluZ0xlZnRcIixzK1wiZW1cIiksbC5wZXJjZW50VG9QeFdpZHRoPUwubGFzdFBlcmNlbnRUb1B4V2lkdGg9KHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsXCJ3aWR0aFwiLG51bGwsITApKXx8MSkvcyxsLnBlcmNlbnRUb1B4SGVpZ2h0PUwubGFzdFBlcmNlbnRUb1B4SGVpZ2h0PShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LFwiaGVpZ2h0XCIsbnVsbCwhMCkpfHwxKS9zLGwuZW1Ub1B4PUwubGFzdEVtVG9QeD0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSxcInBhZGRpbmdMZWZ0XCIpKXx8MSkvcyxlLm15UGFyZW50LnJlbW92ZUNoaWxkKHUpfXJldHVybiBudWxsPT09TC5yZW1Ub1B4JiYoTC5yZW1Ub1B4PXBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHIuYm9keSxcImZvbnRTaXplXCIpKXx8MTYpLG51bGw9PT1MLnZ3VG9QeCYmKEwudndUb1B4PXBhcnNlRmxvYXQodC5pbm5lcldpZHRoKS8xMDAsTC52aFRvUHg9cGFyc2VGbG9hdCh0LmlubmVySGVpZ2h0KS8xMDApLGwucmVtVG9QeD1MLnJlbVRvUHgsbC52d1RvUHg9TC52d1RvUHgsbC52aFRvUHg9TC52aFRvUHgsYi5kZWJ1Zz49MSYmY29uc29sZS5sb2coXCJVbml0IHJhdGlvczogXCIrSlNPTi5zdHJpbmdpZnkobCksbyksbH1pZihzLmJlZ2luJiYwPT09Vil0cnl7cy5iZWdpbi5jYWxsKGcsZyl9Y2F0Y2goeCl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IHh9LDEpfWlmKFwic2Nyb2xsXCI9PT1BKXt2YXIgUCxDLFQsRj0vXngkL2kudGVzdChzLmF4aXMpP1wiTGVmdFwiOlwiVG9wXCIsaj1wYXJzZUZsb2F0KHMub2Zmc2V0KXx8MDtzLmNvbnRhaW5lcj9tLmlzV3JhcHBlZChzLmNvbnRhaW5lcil8fG0uaXNOb2RlKHMuY29udGFpbmVyKT8ocy5jb250YWluZXI9cy5jb250YWluZXJbMF18fHMuY29udGFpbmVyLFA9cy5jb250YWluZXJbXCJzY3JvbGxcIitGXSxUPVArZihvKS5wb3NpdGlvbigpW0YudG9Mb3dlckNhc2UoKV0raik6cy5jb250YWluZXI9bnVsbDooUD1iLlN0YXRlLnNjcm9sbEFuY2hvcltiLlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIitGXV0sQz1iLlN0YXRlLnNjcm9sbEFuY2hvcltiLlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIisoXCJMZWZ0XCI9PT1GP1wiVG9wXCI6XCJMZWZ0XCIpXV0sVD1mKG8pLm9mZnNldCgpW0YudG9Mb3dlckNhc2UoKV0raiksbD17c2Nyb2xsOntyb290UHJvcGVydHlWYWx1ZTohMSxzdGFydFZhbHVlOlAsY3VycmVudFZhbHVlOlAsZW5kVmFsdWU6VCx1bml0VHlwZTpcIlwiLGVhc2luZzpzLmVhc2luZyxzY3JvbGxEYXRhOntjb250YWluZXI6cy5jb250YWluZXIsZGlyZWN0aW9uOkYsYWx0ZXJuYXRlVmFsdWU6Q319LGVsZW1lbnQ6b30sYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKHNjcm9sbCk6IFwiLGwuc2Nyb2xsLG8pfWVsc2UgaWYoXCJyZXZlcnNlXCI9PT1BKXtpZighaShvKS50d2VlbnNDb250YWluZXIpcmV0dXJuIHZvaWQgZi5kZXF1ZXVlKG8scy5xdWV1ZSk7XCJub25lXCI9PT1pKG8pLm9wdHMuZGlzcGxheSYmKGkobykub3B0cy5kaXNwbGF5PVwiYXV0b1wiKSxcImhpZGRlblwiPT09aShvKS5vcHRzLnZpc2liaWxpdHkmJihpKG8pLm9wdHMudmlzaWJpbGl0eT1cInZpc2libGVcIiksaShvKS5vcHRzLmxvb3A9ITEsaShvKS5vcHRzLmJlZ2luPW51bGwsaShvKS5vcHRzLmNvbXBsZXRlPW51bGwsdi5lYXNpbmd8fGRlbGV0ZSBzLmVhc2luZyx2LmR1cmF0aW9ufHxkZWxldGUgcy5kdXJhdGlvbixzPWYuZXh0ZW5kKHt9LGkobykub3B0cyxzKTt2YXIgRT1mLmV4dGVuZCghMCx7fSxpKG8pLnR3ZWVuc0NvbnRhaW5lcik7Zm9yKHZhciBIIGluIEUpaWYoXCJlbGVtZW50XCIhPT1IKXt2YXIgTj1FW0hdLnN0YXJ0VmFsdWU7RVtIXS5zdGFydFZhbHVlPUVbSF0uY3VycmVudFZhbHVlPUVbSF0uZW5kVmFsdWUsRVtIXS5lbmRWYWx1ZT1OLG0uaXNFbXB0eU9iamVjdCh2KXx8KEVbSF0uZWFzaW5nPXMuZWFzaW5nKSxiLmRlYnVnJiZjb25zb2xlLmxvZyhcInJldmVyc2UgdHdlZW5zQ29udGFpbmVyIChcIitIK1wiKTogXCIrSlNPTi5zdHJpbmdpZnkoRVtIXSksbyl9bD1FfWVsc2UgaWYoXCJzdGFydFwiPT09QSl7dmFyIEU7aShvKS50d2VlbnNDb250YWluZXImJmkobykuaXNBbmltYXRpbmc9PT0hMCYmKEU9aShvKS50d2VlbnNDb250YWluZXIpLGYuZWFjaCh5LGZ1bmN0aW9uKGUsdCl7aWYoUmVnRXhwKFwiXlwiK1MuTGlzdHMuY29sb3JzLmpvaW4oXCIkfF5cIikrXCIkXCIpLnRlc3QoZSkpe3ZhciByPXAodCwhMCksbj1yWzBdLG89clsxXSxpPXJbMl07aWYoUy5SZWdFeC5pc0hleC50ZXN0KG4pKXtmb3IodmFyIHM9W1wiUmVkXCIsXCJHcmVlblwiLFwiQmx1ZVwiXSxsPVMuVmFsdWVzLmhleFRvUmdiKG4pLHU9aT9TLlZhbHVlcy5oZXhUb1JnYihpKTphLGM9MDtjPHMubGVuZ3RoO2MrKyl7dmFyIGY9W2xbY11dO28mJmYucHVzaChvKSx1IT09YSYmZi5wdXNoKHVbY10pLHlbZStzW2NdXT1mfWRlbGV0ZSB5W2VdfX19KTtmb3IodmFyIHogaW4geSl7dmFyIE89cCh5W3pdKSxxPU9bMF0sJD1PWzFdLE09T1syXTt6PVMuTmFtZXMuY2FtZWxDYXNlKHopO3ZhciBJPVMuSG9va3MuZ2V0Um9vdCh6KSxCPSExO2lmKGkobykuaXNTVkd8fFwidHdlZW5cIj09PUl8fFMuTmFtZXMucHJlZml4Q2hlY2soSSlbMV0hPT0hMXx8Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0ldIT09YSl7KHMuZGlzcGxheSE9PWEmJm51bGwhPT1zLmRpc3BsYXkmJlwibm9uZVwiIT09cy5kaXNwbGF5fHxzLnZpc2liaWxpdHkhPT1hJiZcImhpZGRlblwiIT09cy52aXNpYmlsaXR5KSYmL29wYWNpdHl8ZmlsdGVyLy50ZXN0KHopJiYhTSYmMCE9PXEmJihNPTApLHMuX2NhY2hlVmFsdWVzJiZFJiZFW3pdPyhNPT09YSYmKE09RVt6XS5lbmRWYWx1ZStFW3pdLnVuaXRUeXBlKSxCPWkobykucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtJXSk6Uy5Ib29rcy5yZWdpc3RlcmVkW3pdP009PT1hPyhCPVMuZ2V0UHJvcGVydHlWYWx1ZShvLEkpLE09Uy5nZXRQcm9wZXJ0eVZhbHVlKG8seixCKSk6Qj1TLkhvb2tzLnRlbXBsYXRlc1tJXVsxXTpNPT09YSYmKE09Uy5nZXRQcm9wZXJ0eVZhbHVlKG8seikpO3ZhciBXLEcsWSxEPSExO2lmKFc9ZCh6LE0pLE09V1swXSxZPVdbMV0sVz1kKHoscSkscT1XWzBdLnJlcGxhY2UoL14oWystXFwvKl0pPS8sZnVuY3Rpb24oZSx0KXtyZXR1cm4gRD10LFwiXCJ9KSxHPVdbMV0sTT1wYXJzZUZsb2F0KE0pfHwwLHE9cGFyc2VGbG9hdChxKXx8MCxcIiVcIj09PUcmJigvXihmb250U2l6ZXxsaW5lSGVpZ2h0KSQvLnRlc3Qoeik/KHEvPTEwMCxHPVwiZW1cIik6L15zY2FsZS8udGVzdCh6KT8ocS89MTAwLEc9XCJcIik6LyhSZWR8R3JlZW58Qmx1ZSkkL2kudGVzdCh6KSYmKHE9cS8xMDAqMjU1LEc9XCJcIikpLC9bXFwvKl0vLnRlc3QoRCkpRz1ZO2Vsc2UgaWYoWSE9PUcmJjAhPT1NKWlmKDA9PT1xKUc9WTtlbHNle249bnx8aCgpO3ZhciBRPS9tYXJnaW58cGFkZGluZ3xsZWZ0fHJpZ2h0fHdpZHRofHRleHR8d29yZHxsZXR0ZXIvaS50ZXN0KHopfHwvWCQvLnRlc3Qoeil8fFwieFwiPT09ej9cInhcIjpcInlcIjtzd2l0Y2goWSl7Y2FzZVwiJVwiOk0qPVwieFwiPT09UT9uLnBlcmNlbnRUb1B4V2lkdGg6bi5wZXJjZW50VG9QeEhlaWdodDticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6TSo9bltZK1wiVG9QeFwiXX1zd2l0Y2goRyl7Y2FzZVwiJVwiOk0qPTEvKFwieFwiPT09UT9uLnBlcmNlbnRUb1B4V2lkdGg6bi5wZXJjZW50VG9QeEhlaWdodCk7YnJlYWs7Y2FzZVwicHhcIjpicmVhaztkZWZhdWx0Ok0qPTEvbltHK1wiVG9QeFwiXX19c3dpdGNoKEQpe2Nhc2VcIitcIjpxPU0rcTticmVhaztjYXNlXCItXCI6cT1NLXE7YnJlYWs7Y2FzZVwiKlwiOnE9TSpxO2JyZWFrO2Nhc2VcIi9cIjpxPU0vcX1sW3pdPXtyb290UHJvcGVydHlWYWx1ZTpCLHN0YXJ0VmFsdWU6TSxjdXJyZW50VmFsdWU6TSxlbmRWYWx1ZTpxLHVuaXRUeXBlOkcsZWFzaW5nOiR9LGIuZGVidWcmJmNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChcIit6K1wiKTogXCIrSlNPTi5zdHJpbmdpZnkobFt6XSksbyl9ZWxzZSBiLmRlYnVnJiZjb25zb2xlLmxvZyhcIlNraXBwaW5nIFtcIitJK1wiXSBkdWUgdG8gYSBsYWNrIG9mIGJyb3dzZXIgc3VwcG9ydC5cIil9bC5lbGVtZW50PW99bC5lbGVtZW50JiYoUy5WYWx1ZXMuYWRkQ2xhc3MobyxcInZlbG9jaXR5LWFuaW1hdGluZ1wiKSxSLnB1c2gobCksXCJcIj09PXMucXVldWUmJihpKG8pLnR3ZWVuc0NvbnRhaW5lcj1sLGkobykub3B0cz1zKSxpKG8pLmlzQW5pbWF0aW5nPSEwLFY9PT13LTE/KGIuU3RhdGUuY2FsbHMucHVzaChbUixnLHMsbnVsbCxrLnJlc29sdmVyXSksYi5TdGF0ZS5pc1RpY2tpbmc9PT0hMSYmKGIuU3RhdGUuaXNUaWNraW5nPSEwLGMoKSkpOlYrKyl9dmFyIG4sbz10aGlzLHM9Zi5leHRlbmQoe30sYi5kZWZhdWx0cyx2KSxsPXt9O3N3aXRjaChpKG8pPT09YSYmYi5pbml0KG8pLHBhcnNlRmxvYXQocy5kZWxheSkmJnMucXVldWUhPT0hMSYmZi5xdWV1ZShvLHMucXVldWUsZnVuY3Rpb24oZSl7Yi52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLGkobykuZGVsYXlUaW1lcj17c2V0VGltZW91dDpzZXRUaW1lb3V0KGUscGFyc2VGbG9hdChzLmRlbGF5KSksbmV4dDplfX0pLHMuZHVyYXRpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXtjYXNlXCJmYXN0XCI6cy5kdXJhdGlvbj0yMDA7YnJlYWs7Y2FzZVwibm9ybWFsXCI6cy5kdXJhdGlvbj1oO2JyZWFrO2Nhc2VcInNsb3dcIjpzLmR1cmF0aW9uPTYwMDticmVhaztkZWZhdWx0OnMuZHVyYXRpb249cGFyc2VGbG9hdChzLmR1cmF0aW9uKXx8MX1iLm1vY2shPT0hMSYmKGIubW9jaz09PSEwP3MuZHVyYXRpb249cy5kZWxheT0xOihzLmR1cmF0aW9uKj1wYXJzZUZsb2F0KGIubW9jayl8fDEscy5kZWxheSo9cGFyc2VGbG9hdChiLm1vY2spfHwxKSkscy5lYXNpbmc9dShzLmVhc2luZyxzLmR1cmF0aW9uKSxzLmJlZ2luJiYhbS5pc0Z1bmN0aW9uKHMuYmVnaW4pJiYocy5iZWdpbj1udWxsKSxzLnByb2dyZXNzJiYhbS5pc0Z1bmN0aW9uKHMucHJvZ3Jlc3MpJiYocy5wcm9ncmVzcz1udWxsKSxzLmNvbXBsZXRlJiYhbS5pc0Z1bmN0aW9uKHMuY29tcGxldGUpJiYocy5jb21wbGV0ZT1udWxsKSxzLmRpc3BsYXkhPT1hJiZudWxsIT09cy5kaXNwbGF5JiYocy5kaXNwbGF5PXMuZGlzcGxheS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksXCJhdXRvXCI9PT1zLmRpc3BsYXkmJihzLmRpc3BsYXk9Yi5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKG8pKSkscy52aXNpYmlsaXR5IT09YSYmbnVsbCE9PXMudmlzaWJpbGl0eSYmKHMudmlzaWJpbGl0eT1zLnZpc2liaWxpdHkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSxzLm1vYmlsZUhBPXMubW9iaWxlSEEmJmIuU3RhdGUuaXNNb2JpbGUmJiFiLlN0YXRlLmlzR2luZ2VyYnJlYWQscy5xdWV1ZT09PSExP3MuZGVsYXk/c2V0VGltZW91dChlLHMuZGVsYXkpOmUoKTpmLnF1ZXVlKG8scy5xdWV1ZSxmdW5jdGlvbih0LHIpe3JldHVybiByPT09ITA/KGsucHJvbWlzZSYmay5yZXNvbHZlcihnKSwhMCk6KGIudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZz0hMCx2b2lkIGUodCkpfSksXCJcIiE9PXMucXVldWUmJlwiZnhcIiE9PXMucXVldWV8fFwiaW5wcm9ncmVzc1wiPT09Zi5xdWV1ZShvKVswXXx8Zi5kZXF1ZXVlKG8pfXZhciBzLGwsZCxnLHksdix4PWFyZ3VtZW50c1swXSYmKGFyZ3VtZW50c1swXS5wfHxmLmlzUGxhaW5PYmplY3QoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpJiYhYXJndW1lbnRzWzBdLnByb3BlcnRpZXMubmFtZXN8fG0uaXNTdHJpbmcoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpKTtpZihtLmlzV3JhcHBlZCh0aGlzKT8ocz0hMSxkPTAsZz10aGlzLGw9dGhpcyk6KHM9ITAsZD0xLGc9eD9hcmd1bWVudHNbMF0uZWxlbWVudHN8fGFyZ3VtZW50c1swXS5lOmFyZ3VtZW50c1swXSksZz1vKGcpKXt4Pyh5PWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzfHxhcmd1bWVudHNbMF0ucCx2PWFyZ3VtZW50c1swXS5vcHRpb25zfHxhcmd1bWVudHNbMF0ubyk6KHk9YXJndW1lbnRzW2RdLHY9YXJndW1lbnRzW2QrMV0pO3ZhciB3PWcubGVuZ3RoLFY9MDtpZighL14oc3RvcHxmaW5pc2gpJC9pLnRlc3QoeSkmJiFmLmlzUGxhaW5PYmplY3Qodikpe3ZhciBDPWQrMTt2PXt9O2Zvcih2YXIgVD1DO1Q8YXJndW1lbnRzLmxlbmd0aDtUKyspbS5pc0FycmF5KGFyZ3VtZW50c1tUXSl8fCEvXihmYXN0fG5vcm1hbHxzbG93KSQvaS50ZXN0KGFyZ3VtZW50c1tUXSkmJiEvXlxcZC8udGVzdChhcmd1bWVudHNbVF0pP20uaXNTdHJpbmcoYXJndW1lbnRzW1RdKXx8bS5pc0FycmF5KGFyZ3VtZW50c1tUXSk/di5lYXNpbmc9YXJndW1lbnRzW1RdOm0uaXNGdW5jdGlvbihhcmd1bWVudHNbVF0pJiYodi5jb21wbGV0ZT1hcmd1bWVudHNbVF0pOnYuZHVyYXRpb249YXJndW1lbnRzW1RdfXZhciBrPXtwcm9taXNlOm51bGwscmVzb2x2ZXI6bnVsbCxyZWplY3RlcjpudWxsfTtzJiZiLlByb21pc2UmJihrLnByb21pc2U9bmV3IGIuUHJvbWlzZShmdW5jdGlvbihlLHQpe2sucmVzb2x2ZXI9ZSxrLnJlamVjdGVyPXR9KSk7dmFyIEE7c3dpdGNoKHkpe2Nhc2VcInNjcm9sbFwiOkE9XCJzY3JvbGxcIjticmVhaztjYXNlXCJyZXZlcnNlXCI6QT1cInJldmVyc2VcIjticmVhaztjYXNlXCJmaW5pc2hcIjpjYXNlXCJzdG9wXCI6Zi5lYWNoKGcsZnVuY3Rpb24oZSx0KXtpKHQpJiZpKHQpLmRlbGF5VGltZXImJihjbGVhclRpbWVvdXQoaSh0KS5kZWxheVRpbWVyLnNldFRpbWVvdXQpLGkodCkuZGVsYXlUaW1lci5uZXh0JiZpKHQpLmRlbGF5VGltZXIubmV4dCgpLGRlbGV0ZSBpKHQpLmRlbGF5VGltZXIpfSk7dmFyIEY9W107cmV0dXJuIGYuZWFjaChiLlN0YXRlLmNhbGxzLGZ1bmN0aW9uKGUsdCl7dCYmZi5lYWNoKHRbMV0sZnVuY3Rpb24ocixuKXt2YXIgbz12PT09YT9cIlwiOnY7cmV0dXJuIG89PT0hMHx8dFsyXS5xdWV1ZT09PW98fHY9PT1hJiZ0WzJdLnF1ZXVlPT09ITE/dm9pZCBmLmVhY2goZyxmdW5jdGlvbihyLGEpe2E9PT1uJiYoKHY9PT0hMHx8bS5pc1N0cmluZyh2KSkmJihmLmVhY2goZi5xdWV1ZShhLG0uaXNTdHJpbmcodik/djpcIlwiKSxmdW5jdGlvbihlLHQpe1xubS5pc0Z1bmN0aW9uKHQpJiZ0KG51bGwsITApfSksZi5xdWV1ZShhLG0uaXNTdHJpbmcodik/djpcIlwiLFtdKSksXCJzdG9wXCI9PT15PyhpKGEpJiZpKGEpLnR3ZWVuc0NvbnRhaW5lciYmbyE9PSExJiZmLmVhY2goaShhKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oZSx0KXt0LmVuZFZhbHVlPXQuY3VycmVudFZhbHVlfSksRi5wdXNoKGUpKTpcImZpbmlzaFwiPT09eSYmKHRbMl0uZHVyYXRpb249MSkpfSk6ITB9KX0pLFwic3RvcFwiPT09eSYmKGYuZWFjaChGLGZ1bmN0aW9uKGUsdCl7cCh0LCEwKX0pLGsucHJvbWlzZSYmay5yZXNvbHZlcihnKSksZSgpO2RlZmF1bHQ6aWYoIWYuaXNQbGFpbk9iamVjdCh5KXx8bS5pc0VtcHR5T2JqZWN0KHkpKXtpZihtLmlzU3RyaW5nKHkpJiZiLlJlZGlyZWN0c1t5XSl7dmFyIGo9Zi5leHRlbmQoe30sdiksRT1qLmR1cmF0aW9uLEg9ai5kZWxheXx8MDtyZXR1cm4gai5iYWNrd2FyZHM9PT0hMCYmKGc9Zi5leHRlbmQoITAsW10sZykucmV2ZXJzZSgpKSxmLmVhY2goZyxmdW5jdGlvbihlLHQpe3BhcnNlRmxvYXQoai5zdGFnZ2VyKT9qLmRlbGF5PUgrcGFyc2VGbG9hdChqLnN0YWdnZXIpKmU6bS5pc0Z1bmN0aW9uKGouc3RhZ2dlcikmJihqLmRlbGF5PUgrai5zdGFnZ2VyLmNhbGwodCxlLHcpKSxqLmRyYWcmJihqLmR1cmF0aW9uPXBhcnNlRmxvYXQoRSl8fCgvXihjYWxsb3V0fHRyYW5zaXRpb24pLy50ZXN0KHkpPzFlMzpoKSxqLmR1cmF0aW9uPU1hdGgubWF4KGouZHVyYXRpb24qKGouYmFja3dhcmRzPzEtZS93OihlKzEpL3cpLC43NSpqLmR1cmF0aW9uLDIwMCkpLGIuUmVkaXJlY3RzW3ldLmNhbGwodCx0LGp8fHt9LGUsdyxnLGsucHJvbWlzZT9rOmEpfSksZSgpfXZhciBOPVwiVmVsb2NpdHk6IEZpcnN0IGFyZ3VtZW50IChcIit5K1wiKSB3YXMgbm90IGEgcHJvcGVydHkgbWFwLCBhIGtub3duIGFjdGlvbiwgb3IgYSByZWdpc3RlcmVkIHJlZGlyZWN0LiBBYm9ydGluZy5cIjtyZXR1cm4gay5wcm9taXNlP2sucmVqZWN0ZXIobmV3IEVycm9yKE4pKTpjb25zb2xlLmxvZyhOKSxlKCl9QT1cInN0YXJ0XCJ9dmFyIEw9e2xhc3RQYXJlbnQ6bnVsbCxsYXN0UG9zaXRpb246bnVsbCxsYXN0Rm9udFNpemU6bnVsbCxsYXN0UGVyY2VudFRvUHhXaWR0aDpudWxsLGxhc3RQZXJjZW50VG9QeEhlaWdodDpudWxsLGxhc3RFbVRvUHg6bnVsbCxyZW1Ub1B4Om51bGwsdndUb1B4Om51bGwsdmhUb1B4Om51bGx9LFI9W107Zi5lYWNoKGcsZnVuY3Rpb24oZSx0KXttLmlzTm9kZSh0KSYmbi5jYWxsKHQpfSk7dmFyIHosaj1mLmV4dGVuZCh7fSxiLmRlZmF1bHRzLHYpO2lmKGoubG9vcD1wYXJzZUludChqLmxvb3ApLHo9MipqLmxvb3AtMSxqLmxvb3ApZm9yKHZhciBPPTA7ej5PO08rKyl7dmFyIHE9e2RlbGF5OmouZGVsYXkscHJvZ3Jlc3M6ai5wcm9ncmVzc307Tz09PXotMSYmKHEuZGlzcGxheT1qLmRpc3BsYXkscS52aXNpYmlsaXR5PWoudmlzaWJpbGl0eSxxLmNvbXBsZXRlPWouY29tcGxldGUpLFAoZyxcInJldmVyc2VcIixxKX1yZXR1cm4gZSgpfX07Yj1mLmV4dGVuZChQLGIpLGIuYW5pbWF0ZT1QO3ZhciB3PXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxnO3JldHVybiBiLlN0YXRlLmlzTW9iaWxlfHxyLmhpZGRlbj09PWF8fHIuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpe3IuaGlkZGVuPyh3PWZ1bmN0aW9uKGUpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZSghMCl9LDE2KX0sYygpKTp3PXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxnfSksZS5WZWxvY2l0eT1iLGUhPT10JiYoZS5mbi52ZWxvY2l0eT1QLGUuZm4udmVsb2NpdHkuZGVmYXVsdHM9Yi5kZWZhdWx0cyksZi5lYWNoKFtcIkRvd25cIixcIlVwXCJdLGZ1bmN0aW9uKGUsdCl7Yi5SZWRpcmVjdHNbXCJzbGlkZVwiK3RdPWZ1bmN0aW9uKGUscixuLG8saSxzKXt2YXIgbD1mLmV4dGVuZCh7fSxyKSx1PWwuYmVnaW4sYz1sLmNvbXBsZXRlLHA9e2hlaWdodDpcIlwiLG1hcmdpblRvcDpcIlwiLG1hcmdpbkJvdHRvbTpcIlwiLHBhZGRpbmdUb3A6XCJcIixwYWRkaW5nQm90dG9tOlwiXCJ9LGQ9e307bC5kaXNwbGF5PT09YSYmKGwuZGlzcGxheT1cIkRvd25cIj09PXQ/XCJpbmxpbmVcIj09PWIuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShlKT9cImlubGluZS1ibG9ja1wiOlwiYmxvY2tcIjpcIm5vbmVcIiksbC5iZWdpbj1mdW5jdGlvbigpe3UmJnUuY2FsbChpLGkpO2Zvcih2YXIgciBpbiBwKXtkW3JdPWUuc3R5bGVbcl07dmFyIGE9Yi5DU1MuZ2V0UHJvcGVydHlWYWx1ZShlLHIpO3Bbcl09XCJEb3duXCI9PT10P1thLDBdOlswLGFdfWQub3ZlcmZsb3c9ZS5zdHlsZS5vdmVyZmxvdyxlLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9LGwuY29tcGxldGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gZCllLnN0eWxlW3RdPWRbdF07YyYmYy5jYWxsKGksaSkscyYmcy5yZXNvbHZlcihpKX0sYihlLHAsbCl9fSksZi5lYWNoKFtcIkluXCIsXCJPdXRcIl0sZnVuY3Rpb24oZSx0KXtiLlJlZGlyZWN0c1tcImZhZGVcIit0XT1mdW5jdGlvbihlLHIsbixvLGkscyl7dmFyIGw9Zi5leHRlbmQoe30sciksdT17b3BhY2l0eTpcIkluXCI9PT10PzE6MH0sYz1sLmNvbXBsZXRlO2wuY29tcGxldGU9biE9PW8tMT9sLmJlZ2luPW51bGw6ZnVuY3Rpb24oKXtjJiZjLmNhbGwoaSxpKSxzJiZzLnJlc29sdmVyKGkpfSxsLmRpc3BsYXk9PT1hJiYobC5kaXNwbGF5PVwiSW5cIj09PXQ/XCJhdXRvXCI6XCJub25lXCIpLGIodGhpcyx1LGwpfX0pLGJ9KHdpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0b3x8d2luZG93LHdpbmRvdyxkb2N1bWVudCl9KSk7XG47IWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGsoYSxiLGMpe3JldHVybiBzZXRUaW1lb3V0KHEoYSxjKSxiKX1mdW5jdGlvbiBsKGEsYixjKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKT8obShhLGNbYl0sYyksITApOiExfWZ1bmN0aW9uIG0oYSxiLGMpe3ZhciBlO2lmKGEpaWYoYS5mb3JFYWNoKWEuZm9yRWFjaChiLGMpO2Vsc2UgaWYoYS5sZW5ndGghPT1kKWZvcihlPTA7ZTxhLmxlbmd0aDspYi5jYWxsKGMsYVtlXSxlLGEpLGUrKztlbHNlIGZvcihlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmYi5jYWxsKGMsYVtlXSxlLGEpfWZ1bmN0aW9uIG4oYSxiLGMpe2Zvcih2YXIgZT1PYmplY3Qua2V5cyhiKSxmPTA7ZjxlLmxlbmd0aDspKCFjfHxjJiZhW2VbZl1dPT09ZCkmJihhW2VbZl1dPWJbZVtmXV0pLGYrKztyZXR1cm4gYX1mdW5jdGlvbiBvKGEsYil7cmV0dXJuIG4oYSxiLCEwKX1mdW5jdGlvbiBwKGEsYixjKXt2YXIgZSxkPWIucHJvdG90eXBlO2U9YS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShkKSxlLmNvbnN0cnVjdG9yPWEsZS5fc3VwZXI9ZCxjJiZuKGUsYyl9ZnVuY3Rpb24gcShhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcihhLGIpe3JldHVybiB0eXBlb2YgYT09Zz9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gcyhhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gdChhLGIsYyl7bSh4KGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gdShhLGIsYyl7bSh4KGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gdihhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gdyhhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24geChhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24geShhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHooYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gQShhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTt5KGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIEIoYSxiKXtmb3IodmFyIGMsZixnPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGg9MDtoPGUubGVuZ3RoOyl7aWYoYz1lW2hdLGY9Yz9jK2c6YixmIGluIGEpcmV0dXJuIGY7aCsrfXJldHVybiBkfWZ1bmN0aW9uIEQoKXtyZXR1cm4gQysrfWZ1bmN0aW9uIEUoYSl7dmFyIGI9YS5vd25lckRvY3VtZW50O3JldHVybiBiLmRlZmF1bHRWaWV3fHxiLnBhcmVudFdpbmRvd31mdW5jdGlvbiBhYihhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtyKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiBiYihhKXt2YXIgYixjPWEub3B0aW9ucy5pbnB1dENsYXNzO3JldHVybiBiPWM/YzpIP3diOkk/RWI6Rz9HYjpyYixuZXcgYihhLGNiKX1mdW5jdGlvbiBjYihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJk8mJjA9PT1kLWUsZz1iJihRfFIpJiYwPT09ZC1lO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLGRiKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIGRiKGEsYil7dmFyIGM9YS5zZXNzaW9uLGQ9Yi5wb2ludGVycyxlPWQubGVuZ3RoO2MuZmlyc3RJbnB1dHx8KGMuZmlyc3RJbnB1dD1nYihiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1nYihiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPWhiKGQpO2IudGltZVN0YW1wPWooKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPWxiKGgsaSksYi5kaXN0YW5jZT1rYihoLGkpLGViKGMsYiksYi5vZmZzZXREaXJlY3Rpb249amIoYi5kZWx0YVgsYi5kZWx0YVkpLGIuc2NhbGU9Zz9uYihnLnBvaW50ZXJzLGQpOjEsYi5yb3RhdGlvbj1nP21iKGcucG9pbnRlcnMsZCk6MCxmYihjLGIpO3ZhciBrPWEuZWxlbWVudDt2KGIuc3JjRXZlbnQudGFyZ2V0LGspJiYoaz1iLnNyY0V2ZW50LnRhcmdldCksYi50YXJnZXQ9a31mdW5jdGlvbiBlYihhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307KGIuZXZlbnRUeXBlPT09T3x8Zi5ldmVudFR5cGU9PT1RKSYmKGU9YS5wcmV2RGVsdGE9e3g6Zi5kZWx0YVh8fDAseTpmLmRlbHRhWXx8MH0sZD1hLm9mZnNldERlbHRhPXt4OmMueCx5OmMueX0pLGIuZGVsdGFYPWUueCsoYy54LWQueCksYi5kZWx0YVk9ZS55KyhjLnktZC55KX1mdW5jdGlvbiBmYihhLGIpe3ZhciBmLGcsaCxqLGM9YS5sYXN0SW50ZXJ2YWx8fGIsZT1iLnRpbWVTdGFtcC1jLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9UiYmKGU+Tnx8Yy52ZWxvY2l0eT09PWQpKXt2YXIgaz1jLmRlbHRhWC1iLmRlbHRhWCxsPWMuZGVsdGFZLWIuZGVsdGFZLG09aWIoZSxrLGwpO2c9bS54LGg9bS55LGY9aShtLngpPmkobS55KT9tLng6bS55LGo9amIoayxsKSxhLmxhc3RJbnRlcnZhbD1ifWVsc2UgZj1jLnZlbG9jaXR5LGc9Yy52ZWxvY2l0eVgsaD1jLnZlbG9jaXR5WSxqPWMuZGlyZWN0aW9uO2IudmVsb2NpdHk9ZixiLnZlbG9jaXR5WD1nLGIudmVsb2NpdHlZPWgsYi5kaXJlY3Rpb249an1mdW5jdGlvbiBnYihhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5wb2ludGVycy5sZW5ndGg7KWJbY109e2NsaWVudFg6aChhLnBvaW50ZXJzW2NdLmNsaWVudFgpLGNsaWVudFk6aChhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpqKCkscG9pbnRlcnM6YixjZW50ZXI6aGIoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gaGIoYSl7dmFyIGI9YS5sZW5ndGg7aWYoMT09PWIpcmV0dXJue3g6aChhWzBdLmNsaWVudFgpLHk6aChhWzBdLmNsaWVudFkpfTtmb3IodmFyIGM9MCxkPTAsZT0wO2I+ZTspYys9YVtlXS5jbGllbnRYLGQrPWFbZV0uY2xpZW50WSxlKys7cmV0dXJue3g6aChjL2IpLHk6aChkL2IpfX1mdW5jdGlvbiBpYihhLGIsYyl7cmV0dXJue3g6Yi9hfHwwLHk6Yy9hfHwwfX1mdW5jdGlvbiBqYihhLGIpe3JldHVybiBhPT09Yj9TOmkoYSk+PWkoYik/YT4wP1Q6VTpiPjA/VjpXfWZ1bmN0aW9uIGtiKGEsYixjKXtjfHwoYz0kKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkKmQrZSplKX1mdW5jdGlvbiBsYihhLGIsYyl7Y3x8KGM9JCk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiAxODAqTWF0aC5hdGFuMihlLGQpL01hdGguUEl9ZnVuY3Rpb24gbWIoYSxiKXtyZXR1cm4gbGIoYlsxXSxiWzBdLF8pLWxiKGFbMV0sYVswXSxfKX1mdW5jdGlvbiBuYihhLGIpe3JldHVybiBrYihiWzBdLGJbMV0sXykva2IoYVswXSxhWzFdLF8pfWZ1bmN0aW9uIHJiKCl7dGhpcy5ldkVsPXBiLHRoaXMuZXZXaW49cWIsdGhpcy5hbGxvdz0hMCx0aGlzLnByZXNzZWQ9ITEsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIHdiKCl7dGhpcy5ldkVsPXViLHRoaXMuZXZXaW49dmIsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBBYigpe3RoaXMuZXZUYXJnZXQ9eWIsdGhpcy5ldldpbj16Yix0aGlzLnN0YXJ0ZWQ9ITEsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIEJiKGEsYil7dmFyIGM9eihhLnRvdWNoZXMpLGQ9eihhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoUXxSKSYmKGM9QShjLmNvbmNhdChkKSxcImlkZW50aWZpZXJcIiwhMCkpLFtjLGRdfWZ1bmN0aW9uIEViKCl7dGhpcy5ldlRhcmdldD1EYix0aGlzLnRhcmdldElkcz17fSxhYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gRmIoYSxiKXt2YXIgYz16KGEudG91Y2hlcyksZD10aGlzLnRhcmdldElkcztpZihiJihPfFApJiYxPT09Yy5sZW5ndGgpcmV0dXJuIGRbY1swXS5pZGVudGlmaWVyXT0hMCxbYyxjXTt2YXIgZSxmLGc9eihhLmNoYW5nZWRUb3VjaGVzKSxoPVtdLGk9dGhpcy50YXJnZXQ7aWYoZj1jLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gdihhLnRhcmdldCxpKX0pLGI9PT1PKWZvcihlPTA7ZTxmLmxlbmd0aDspZFtmW2VdLmlkZW50aWZpZXJdPSEwLGUrKztmb3IoZT0wO2U8Zy5sZW5ndGg7KWRbZ1tlXS5pZGVudGlmaWVyXSYmaC5wdXNoKGdbZV0pLGImKFF8UikmJmRlbGV0ZSBkW2dbZV0uaWRlbnRpZmllcl0sZSsrO3JldHVybiBoLmxlbmd0aD9bQShmLmNvbmNhdChoKSxcImlkZW50aWZpZXJcIiwhMCksaF06dm9pZCAwfWZ1bmN0aW9uIEdiKCl7YWIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBhPXEodGhpcy5oYW5kbGVyLHRoaXMpO3RoaXMudG91Y2g9bmV3IEViKHRoaXMubWFuYWdlcixhKSx0aGlzLm1vdXNlPW5ldyByYih0aGlzLm1hbmFnZXIsYSl9ZnVuY3Rpb24gUGIoYSxiKXt0aGlzLm1hbmFnZXI9YSx0aGlzLnNldChiKX1mdW5jdGlvbiBRYihhKXtpZih3KGEsTWIpKXJldHVybiBNYjt2YXIgYj13KGEsTmIpLGM9dyhhLE9iKTtyZXR1cm4gYiYmYz9OYitcIiBcIitPYjpifHxjP2I/TmI6T2I6dyhhLExiKT9MYjpLYn1mdW5jdGlvbiBZYihhKXt0aGlzLmlkPUQoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnM9byhhfHx7fSx0aGlzLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuZW5hYmxlPXModGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1SYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFpiKGEpe3JldHVybiBhJldiP1wiY2FuY2VsXCI6YSZVYj9cImVuZFwiOmEmVGI/XCJtb3ZlXCI6YSZTYj9cInN0YXJ0XCI6XCJcIn1mdW5jdGlvbiAkYihhKXtyZXR1cm4gYT09Vz9cImRvd25cIjphPT1WP1widXBcIjphPT1UP1wibGVmdFwiOmE9PVU/XCJyaWdodFwiOlwiXCJ9ZnVuY3Rpb24gX2IoYSxiKXt2YXIgYz1iLm1hbmFnZXI7cmV0dXJuIGM/Yy5nZXQoYSk6YX1mdW5jdGlvbiBhYygpe1liLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBiYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIGNjKCl7YWMuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRjKCl7WWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbH1mdW5jdGlvbiBlYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBmYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBnYygpe1liLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGhjKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1zKGIucmVjb2duaXplcnMsaGMuZGVmYXVsdHMucHJlc2V0KSxuZXcga2MoYSxiKX1mdW5jdGlvbiBrYyhhLGIpe2I9Ynx8e30sdGhpcy5vcHRpb25zPW8oYixoYy5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9YmIodGhpcyksdGhpcy50b3VjaEFjdGlvbj1uZXcgUGIodGhpcyx0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pLGxjKHRoaXMsITApLG0oYi5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGxjKGEsYil7dmFyIGM9YS5lbGVtZW50O20oYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGEsZCl7Yy5zdHlsZVtCKGMuc3R5bGUsZCldPWI/YTpcIlwifSl9ZnVuY3Rpb24gbWMoYSxjKXt2YXIgZD1iLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwhMCwhMCksZC5nZXN0dXJlPWMsYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKX12YXIgZT1bXCJcIixcIndlYmtpdFwiLFwibW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0sZj1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZz1cImZ1bmN0aW9uXCIsaD1NYXRoLnJvdW5kLGk9TWF0aC5hYnMsaj1EYXRlLm5vdyxDPTEsRj0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksRz1cIm9udG91Y2hzdGFydFwiaW4gYSxIPUIoYSxcIlBvaW50ZXJFdmVudFwiKSE9PWQsST1HJiZGLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksSj1cInRvdWNoXCIsSz1cInBlblwiLEw9XCJtb3VzZVwiLE09XCJraW5lY3RcIixOPTI1LE89MSxQPTIsUT00LFI9OCxTPTEsVD0yLFU9NCxWPTgsVz0xNixYPVR8VSxZPVZ8VyxaPVh8WSwkPVtcInhcIixcInlcIl0sXz1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO2FiLnByb3RvdHlwZT17aGFuZGxlcjpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe3RoaXMuZXZFbCYmdCh0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmdCh0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmdChFKHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZ1KHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZ1KHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZ1KEUodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9fTt2YXIgb2I9e21vdXNlZG93bjpPLG1vdXNlbW92ZTpQLG1vdXNldXA6UX0scGI9XCJtb3VzZWRvd25cIixxYj1cIm1vdXNlbW92ZSBtb3VzZXVwXCI7cChyYixhYix7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1vYlthLnR5cGVdO2ImTyYmMD09PWEuYnV0dG9uJiYodGhpcy5wcmVzc2VkPSEwKSxiJlAmJjEhPT1hLndoaWNoJiYoYj1RKSx0aGlzLnByZXNzZWQmJnRoaXMuYWxsb3cmJihiJlEmJih0aGlzLnByZXNzZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOlthXSxjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOkwsc3JjRXZlbnQ6YX0pKX19KTt2YXIgc2I9e3BvaW50ZXJkb3duOk8scG9pbnRlcm1vdmU6UCxwb2ludGVydXA6USxwb2ludGVyY2FuY2VsOlIscG9pbnRlcm91dDpSfSx0Yj17MjpKLDM6Syw0OkwsNTpNfSx1Yj1cInBvaW50ZXJkb3duXCIsdmI9XCJwb2ludGVybW92ZSBwb2ludGVydXAgcG9pbnRlcmNhbmNlbFwiO2EuTVNQb2ludGVyRXZlbnQmJih1Yj1cIk1TUG9pbnRlckRvd25cIix2Yj1cIk1TUG9pbnRlck1vdmUgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCIpLHAod2IsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdG9yZSxjPSExLGQ9YS50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIm1zXCIsXCJcIiksZT1zYltkXSxmPXRiW2EucG9pbnRlclR5cGVdfHxhLnBvaW50ZXJUeXBlLGc9Zj09SixoPXkoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJk8mJigwPT09YS5idXR0b258fGcpPzA+aCYmKGIucHVzaChhKSxoPWIubGVuZ3RoLTEpOmUmKFF8UikmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciB4Yj17dG91Y2hzdGFydDpPLHRvdWNobW92ZTpQLHRvdWNoZW5kOlEsdG91Y2hjYW5jZWw6Un0seWI9XCJ0b3VjaHN0YXJ0XCIsemI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoQWIsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9eGJbYS50eXBlXTtpZihiPT09TyYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1CYi5jYWxsKHRoaXMsYSxiKTtiJihRfFIpJiYwPT09Y1swXS5sZW5ndGgtY1sxXS5sZW5ndGgmJih0aGlzLnN0YXJ0ZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6SixzcmNFdmVudDphfSl9fX0pO3ZhciBDYj17dG91Y2hzdGFydDpPLHRvdWNobW92ZTpQLHRvdWNoZW5kOlEsdG91Y2hjYW5jZWw6Un0sRGI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoRWIsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9Q2JbYS50eXBlXSxjPUZiLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6SixzcmNFdmVudDphfSl9fSkscChHYixhYix7aGFuZGxlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVyVHlwZT09SixlPWMucG9pbnRlclR5cGU9PUw7aWYoZCl0aGlzLm1vdXNlLmFsbG93PSExO2Vsc2UgaWYoZSYmIXRoaXMubW91c2UuYWxsb3cpcmV0dXJuO2ImKFF8UikmJih0aGlzLm1vdXNlLmFsbG93PSEwKSx0aGlzLmNhbGxiYWNrKGEsYixjKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMudG91Y2guZGVzdHJveSgpLHRoaXMubW91c2UuZGVzdHJveSgpfX0pO3ZhciBIYj1CKGYuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxJYj1IYiE9PWQsSmI9XCJjb21wdXRlXCIsS2I9XCJhdXRvXCIsTGI9XCJtYW5pcHVsYXRpb25cIixNYj1cIm5vbmVcIixOYj1cInBhbi14XCIsT2I9XCJwYW4teVwiO1BiLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PUpiJiYoYT10aGlzLmNvbXB1dGUoKSksSWImJih0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZVtIYl09YSksdGhpcy5hY3Rpb25zPWEudG9Mb3dlckNhc2UoKS50cmltKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2V0KHRoaXMubWFuYWdlci5vcHRpb25zLnRvdWNoQWN0aW9uKX0sY29tcHV0ZTpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBtKHRoaXMubWFuYWdlci5yZWNvZ25pemVycyxmdW5jdGlvbihiKXtyKGIub3B0aW9ucy5lbmFibGUsW2JdKSYmKGE9YS5jb25jYXQoYi5nZXRUb3VjaEFjdGlvbigpKSl9KSxRYihhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe2lmKCFJYil7dmFyIGI9YS5zcmNFdmVudCxjPWEub2Zmc2V0RGlyZWN0aW9uO2lmKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZClyZXR1cm4gYi5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgMDt2YXIgZD10aGlzLmFjdGlvbnMsZT13KGQsTWIpLGY9dyhkLE9iKSxnPXcoZCxOYik7cmV0dXJuIGV8fGYmJmMmWHx8ZyYmYyZZP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9fSxwcmV2ZW50U3JjOmZ1bmN0aW9uKGEpe3RoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZD0hMCxhLnByZXZlbnREZWZhdWx0KCl9fTt2YXIgUmI9MSxTYj0yLFRiPTQsVWI9OCxWYj1VYixXYj0xNixYYj0zMjtZYi5wcm90b3R5cGU9e2RlZmF1bHRzOnt9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gbih0aGlzLm9wdGlvbnMsYSksdGhpcy5tYW5hZ2VyJiZ0aGlzLm1hbmFnZXIudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30scmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtpZihsKGEsXCJyZWNvZ25pemVXaXRoXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5zaW11bHRhbmVvdXM7cmV0dXJuIGE9X2IoYSx0aGlzKSxiW2EuaWRdfHwoYlthLmlkXT1hLGEucmVjb2duaXplV2l0aCh0aGlzKSksdGhpc30sZHJvcFJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGwoYSxcImRyb3BSZWNvZ25pemVXaXRoXCIsdGhpcyk/dGhpczooYT1fYihhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYobChhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPV9iKGEsdGhpcyksLTE9PT15KGIsYSkmJihiLnB1c2goYSksYS5yZXF1aXJlRmFpbHVyZSh0aGlzKSksdGhpc30sZHJvcFJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGwoYSxcImRyb3BSZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO2E9X2IoYSx0aGlzKTt2YXIgYj15KHRoaXMucmVxdWlyZUZhaWwsYSk7cmV0dXJuIGI+LTEmJnRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsMSksdGhpc30saGFzUmVxdWlyZUZhaWx1cmVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoPjB9LGNhblJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXX0sZW1pdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBkKGQpe2IubWFuYWdlci5lbWl0KGIub3B0aW9ucy5ldmVudCsoZD9aYihjKTpcIlwiKSxhKX12YXIgYj10aGlzLGM9dGhpcy5zdGF0ZTtVYj5jJiZkKCEwKSxkKCksYz49VWImJmQoITApfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6KHRoaXMuc3RhdGU9WGIsdm9pZCAwKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKFhifFJiKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9bih7fSxhKTtyZXR1cm4gcih0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYoVmJ8V2J8WGIpJiYodGhpcy5zdGF0ZT1SYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdGhpcy5zdGF0ZSYoU2J8VGJ8VWJ8V2IpJiZ0aGlzLnRyeUVtaXQoYiksdm9pZCAwKToodGhpcy5yZXNldCgpLHRoaXMuc3RhdGU9WGIsdm9pZCAwKX0scHJvY2VzczpmdW5jdGlvbigpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0scChhYyxZYix7ZGVmYXVsdHM6e3BvaW50ZXJzOjF9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5wb2ludGVycztyZXR1cm4gMD09PWJ8fGEucG9pbnRlcnMubGVuZ3RoPT09Yn0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0YXRlLGM9YS5ldmVudFR5cGUsZD1iJihTYnxUYiksZT10aGlzLmF0dHJUZXN0KGEpO3JldHVybiBkJiYoYyZSfHwhZSk/YnxXYjpkfHxlP2MmUT9ifFViOmImU2I/YnxUYjpTYjpYYn19KSxwKGJjLGFjLHtkZWZhdWx0czp7ZXZlbnQ6XCJwYW5cIix0aHJlc2hvbGQ6MTAscG9pbnRlcnM6MSxkaXJlY3Rpb246Wn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLGI9W107cmV0dXJuIGEmWCYmYi5wdXNoKE9iKSxhJlkmJmIucHVzaChOYiksYn0sZGlyZWN0aW9uVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz0hMCxkPWEuZGlzdGFuY2UsZT1hLmRpcmVjdGlvbixmPWEuZGVsdGFYLGc9YS5kZWx0YVk7cmV0dXJuIGUmYi5kaXJlY3Rpb258fChiLmRpcmVjdGlvbiZYPyhlPTA9PT1mP1M6MD5mP1Q6VSxjPWYhPXRoaXMucFgsZD1NYXRoLmFicyhhLmRlbHRhWCkpOihlPTA9PT1nP1M6MD5nP1Y6VyxjPWchPXRoaXMucFksZD1NYXRoLmFicyhhLmRlbHRhWSkpKSxhLmRpcmVjdGlvbj1lLGMmJmQ+Yi50aHJlc2hvbGQmJmUmYi5kaXJlY3Rpb259LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiBhYy5wcm90b3R5cGUuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYodGhpcy5zdGF0ZSZTYnx8ISh0aGlzLnN0YXRlJlNiKSYmdGhpcy5kaXJlY3Rpb25UZXN0KGEpKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnBYPWEuZGVsdGFYLHRoaXMucFk9YS5kZWx0YVk7dmFyIGI9JGIoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLHAoY2MsYWMse2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTWJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJlNiKX0sZW1pdDpmdW5jdGlvbihhKXtpZih0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKSwxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpfX19KSxwKGRjLFliLHtkZWZhdWx0czp7ZXZlbnQ6XCJwcmVzc1wiLHBvaW50ZXJzOjEsdGltZTo1MDAsdGhyZXNob2xkOjV9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW0tiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGU9YS5kZWx0YVRpbWU+Yi50aW1lO2lmKHRoaXMuX2lucHV0PWEsIWR8fCFjfHxhLmV2ZW50VHlwZSYoUXxSKSYmIWUpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmTyl0aGlzLnJlc2V0KCksdGhpcy5fdGltZXI9ayhmdW5jdGlvbigpe3RoaXMuc3RhdGU9VmIsdGhpcy50cnlFbWl0KCl9LGIudGltZSx0aGlzKTtlbHNlIGlmKGEuZXZlbnRUeXBlJlEpcmV0dXJuIFZiO3JldHVybiBYYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMuc3RhdGU9PT1WYiYmKGEmJmEuZXZlbnRUeXBlJlE/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPWooKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKSl9fSkscChlYyxhYyx7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTWJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZTYil9fSkscChmYyxhYyx7ZGVmYXVsdHM6e2V2ZW50Olwic3dpcGVcIix0aHJlc2hvbGQ6MTAsdmVsb2NpdHk6LjY1LGRpcmVjdGlvbjpYfFkscG9pbnRlcnM6MX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gYmMucHJvdG90eXBlLmdldFRvdWNoQWN0aW9uLmNhbGwodGhpcyl9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBjLGI9dGhpcy5vcHRpb25zLmRpcmVjdGlvbjtyZXR1cm4gYiYoWHxZKT9jPWEudmVsb2NpdHk6YiZYP2M9YS52ZWxvY2l0eVg6YiZZJiYoYz1hLnZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZiJmEuZGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJmkoYyk+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZRfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPSRiKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSkscChnYyxZYix7ZGVmYXVsdHM6e2V2ZW50OlwidGFwXCIscG9pbnRlcnM6MSx0YXBzOjEsaW50ZXJ2YWw6MzAwLHRpbWU6MjUwLHRocmVzaG9sZDoyLHBvc1RocmVzaG9sZDoxMH0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTGJdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZT1hLmRlbHRhVGltZTxiLnRpbWU7aWYodGhpcy5yZXNldCgpLGEuZXZlbnRUeXBlJk8mJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZSYmYyl7aWYoYS5ldmVudFR5cGUhPVEpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZj10aGlzLnBUaW1lP2EudGltZVN0YW1wLXRoaXMucFRpbWU8Yi5pbnRlcnZhbDohMCxnPSF0aGlzLnBDZW50ZXJ8fGtiKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsZyYmZj90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBoPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1oKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1rKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1WYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxTYik6VmJ9cmV0dXJuIFhifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1rKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1YYn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLFhifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1WYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksaGMuVkVSU0lPTj1cIjIuMC40XCIsaGMuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjpKYixlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbZWMse2VuYWJsZTohMX1dLFtjYyx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtmYyx7ZGlyZWN0aW9uOlh9XSxbYmMse2RpcmVjdGlvbjpYfSxbXCJzd2lwZVwiXV0sW2djXSxbZ2Mse2V2ZW50OlwiZG91YmxldGFwXCIsdGFwczoyfSxbXCJ0YXBcIl1dLFtkY11dLGNzc1Byb3BzOnt1c2VyU2VsZWN0OlwiZGVmYXVsdFwiLHRvdWNoU2VsZWN0Olwibm9uZVwiLHRvdWNoQ2FsbG91dDpcIm5vbmVcIixjb250ZW50Wm9vbWluZzpcIm5vbmVcIix1c2VyRHJhZzpcIm5vbmVcIix0YXBIaWdobGlnaHRDb2xvcjpcInJnYmEoMCwwLDAsMClcIn19O3ZhciBpYz0xLGpjPTI7a2MucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4odGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT9qYzppY30scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJlZiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT1qY3x8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKFNifFRifFViKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgWWIpcmV0dXJuIGE7Zm9yKHZhciBiPXRoaXMucmVjb2duaXplcnMsYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGJbY10ub3B0aW9ucy5ldmVudD09YSlyZXR1cm4gYltjXTtyZXR1cm4gbnVsbH0sYWRkOmZ1bmN0aW9uKGEpe2lmKGwoYSxcImFkZFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGImJnRoaXMucmVtb3ZlKGIpLHRoaXMucmVjb2duaXplcnMucHVzaChhKSxhLm1hbmFnZXI9dGhpcyx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGF9LHJlbW92ZTpmdW5jdGlvbihhKXtpZihsKGEsXCJyZW1vdmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlY29nbml6ZXJzO3JldHVybiBhPXRoaXMuZ2V0KGEpLGIuc3BsaWNlKHkoYixhKSwxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc30sb2ZmOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLGZ1bmN0aW9uKGEpe2I/Y1thXS5zcGxpY2UoeShjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc30sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJm1jKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmxjKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0sbihoYyx7SU5QVVRfU1RBUlQ6TyxJTlBVVF9NT1ZFOlAsSU5QVVRfRU5EOlEsSU5QVVRfQ0FOQ0VMOlIsU1RBVEVfUE9TU0lCTEU6UmIsU1RBVEVfQkVHQU46U2IsU1RBVEVfQ0hBTkdFRDpUYixTVEFURV9FTkRFRDpVYixTVEFURV9SRUNPR05JWkVEOlZiLFNUQVRFX0NBTkNFTExFRDpXYixTVEFURV9GQUlMRUQ6WGIsRElSRUNUSU9OX05PTkU6UyxESVJFQ1RJT05fTEVGVDpULERJUkVDVElPTl9SSUdIVDpVLERJUkVDVElPTl9VUDpWLERJUkVDVElPTl9ET1dOOlcsRElSRUNUSU9OX0hPUklaT05UQUw6WCxESVJFQ1RJT05fVkVSVElDQUw6WSxESVJFQ1RJT05fQUxMOlosTWFuYWdlcjprYyxJbnB1dDphYixUb3VjaEFjdGlvbjpQYixUb3VjaElucHV0OkViLE1vdXNlSW5wdXQ6cmIsUG9pbnRlckV2ZW50SW5wdXQ6d2IsVG91Y2hNb3VzZUlucHV0OkdiLFNpbmdsZVRvdWNoSW5wdXQ6QWIsUmVjb2duaXplcjpZYixBdHRyUmVjb2duaXplcjphYyxUYXA6Z2MsUGFuOmJjLFN3aXBlOmZjLFBpbmNoOmNjLFJvdGF0ZTplYyxQcmVzczpkYyxvbjp0LG9mZjp1LGVhY2g6bSxtZXJnZTpvLGV4dGVuZDpuLGluaGVyaXQ6cCxiaW5kRm46cSxwcmVmaXhlZDpCfSksdHlwZW9mIGRlZmluZT09ZyYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gaGN9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1oYzphW2NdPWhjfSh3aW5kb3csZG9jdW1lbnQsXCJIYW1tZXJcIik7OyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknLCAnaGFtbWVyanMnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgnaGFtbWVyanMnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnksIEhhbW1lcik7XG4gICAgfVxufShmdW5jdGlvbigkLCBIYW1tZXIpIHtcbiAgICBmdW5jdGlvbiBoYW1tZXJpZnkoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyICRlbCA9ICQoZWwpO1xuICAgICAgICBpZighJGVsLmRhdGEoXCJoYW1tZXJcIikpIHtcbiAgICAgICAgICAgICRlbC5kYXRhKFwiaGFtbWVyXCIsIG5ldyBIYW1tZXIoJGVsWzBdLCBvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkLmZuLmhhbW1lciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGhhbW1lcmlmeSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGV4dGVuZCB0aGUgZW1pdCBtZXRob2QgdG8gYWxzbyB0cmlnZ2VyIGpRdWVyeSBldmVudHNcbiAgICBIYW1tZXIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCA9IChmdW5jdGlvbihvcmlnaW5hbEVtaXQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsRW1pdC5jYWxsKHRoaXMsIHR5cGUsIGRhdGEpO1xuICAgICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgZ2VzdHVyZTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSkoSGFtbWVyLk1hbmFnZXIucHJvdG90eXBlLmVtaXQpO1xufSkpO1xuOy8vIFJlcXVpcmVkIGZvciBNZXRlb3IgcGFja2FnZSwgdGhlIHVzZSBvZiB3aW5kb3cgcHJldmVudHMgZXhwb3J0IGJ5IE1ldGVvclxuKGZ1bmN0aW9uKHdpbmRvdyl7XG4gIGlmKHdpbmRvdy5QYWNrYWdlKXtcbiAgICBNYXRlcmlhbGl6ZSA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5NYXRlcmlhbGl6ZSA9IHt9O1xuICB9XG59KSh3aW5kb3cpO1xuXG5cbi8qXG4gKiByYWYuanNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3J5bWFuL3JhZi5qc1xuICpcbiAqIG9yaWdpbmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXJcbiAqIGluc3BpcmVkIGZyb20gcGF1bF9pcmlzaCBnaXN0IGFuZCBwb3N0XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzIG5ncnltYW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgbGFzdFRpbWUgPSAwLFxuICAgIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXSxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLFxuICAgIGkgPSB2ZW5kb3JzLmxlbmd0aDtcblxuICAvLyB0cnkgdG8gdW4tcHJlZml4IGV4aXN0aW5nIHJhZlxuICB3aGlsZSAoLS1pID49IDAgJiYgIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gIH1cblxuICAvLyBwb2x5ZmlsbCB3aXRoIHNldFRpbWVvdXQgZmFsbGJhY2tcbiAgLy8gaGVhdmlseSBpbnNwaXJlZCBmcm9tIEBkYXJpdXMgZ2lzdCBtb2Q6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxI2NvbW1lbnQtODM3OTQ1XG4gIGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICFjYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgbm93ID0gK0RhdGUubm93KCksXG4gICAgICAgIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTtcbiAgICAgIH0sIG5leHRUaW1lIC0gbm93KTtcbiAgICB9O1xuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gIH1cblxuICAvLyBleHBvcnQgdG8gd2luZG93XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufSh3aW5kb3cpKTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIGFwcHJveGltYXRlZCBzZWxlY3RvciBzdHJpbmcgZm9yIGEgalF1ZXJ5IG9iamVjdFxuICogQHBhcmFtIHtqUXVlcnl9IG9iaiAgalF1ZXJ5IG9iamVjdCB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciB0YWdTdHIgPSBvYmoucHJvcCgndGFnTmFtZScpIHx8ICcnO1xuICB2YXIgaWRTdHIgPSBvYmouYXR0cignaWQnKSB8fCAnJztcbiAgdmFyIGNsYXNzU3RyID0gb2JqLmF0dHIoJ2NsYXNzJykgfHwgJyc7XG4gIHJldHVybiAodGFnU3RyICsgaWRTdHIgKyBjbGFzc1N0cikucmVwbGFjZSgvXFxzL2csJycpO1xufTtcblxuXG4vLyBVbmlxdWUgUmFuZG9tIElEXG5NYXRlcmlhbGl6ZS5ndWlkID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzNCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgIC50b1N0cmluZygxNilcbiAgICAgIC5zdWJzdHJpbmcoMSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcbiAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogRXNjYXBlcyBoYXNoIGZyb20gc3BlY2lhbCBjaGFyYWN0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAgU3RyaW5nIHJldHVybmVkIGZyb20gdGhpcy5oYXNoXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5NYXRlcmlhbGl6ZS5lc2NhcGVIYXNoID0gZnVuY3Rpb24oaGFzaCkge1xuICByZXR1cm4gaGFzaC5yZXBsYWNlKCAvKDp8XFwufFxcW3xcXF18LHw9KS9nLCBcIlxcXFwkMVwiICk7XG59O1xuXG5NYXRlcmlhbGl6ZS5lbGVtZW50T3JQYXJlbnRJc0ZpeGVkID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgdmFyICRjaGVja0VsZW1lbnRzID0gJGVsZW1lbnQuYWRkKCRlbGVtZW50LnBhcmVudHMoKSk7XG4gICAgdmFyIGlzRml4ZWQgPSBmYWxzZTtcbiAgICAkY2hlY2tFbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICgkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIGlzRml4ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzRml4ZWQ7XG59O1xuXG5cbi8qKlxuICogR2V0IHRpbWUgaW4gbXNcbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvbWFzdGVyL0xJQ0VOU0VcbiAqIEB0eXBlIHtmdW5jdGlvbn1cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGdldFRpbWUgPSAoRGF0ZS5ub3cgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59KTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICogZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gKiBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gKiBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICogYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbk1hdGVyaWFsaXplLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICB2YXIgdGltZW91dCA9IG51bGw7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogZ2V0VGltZSgpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBub3cgPSBnZXRUaW1lKCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG4vLyBWZWxvY2l0eSBoYXMgY29uZmxpY3RzIHdoZW4gbG9hZGVkIHdpdGggalF1ZXJ5LCB0aGlzIHdpbGwgY2hlY2sgZm9yIGl0XG4vLyBGaXJzdCwgY2hlY2sgaWYgaW4gbm9Db25mbGljdCBtb2RlXG52YXIgVmVsO1xuaWYgKGpRdWVyeSkge1xuICBWZWwgPSBqUXVlcnkuVmVsb2NpdHk7XG59IGVsc2UgaWYgKCQpIHtcbiAgVmVsID0gJC5WZWxvY2l0eTtcbn0gZWxzZSB7XG4gIFZlbCA9IFZlbG9jaXR5O1xufVxuOyhmdW5jdGlvbiAoJCkge1xuICAkLmZuLmNvbGxhcHNpYmxlID0gZnVuY3Rpb24ob3B0aW9ucywgbWV0aG9kUGFyYW0pIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBhY2NvcmRpb246IHVuZGVmaW5lZCxcbiAgICAgIG9uT3BlbjogdW5kZWZpbmVkLFxuICAgICAgb25DbG9zZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIHZhciBtZXRob2ROYW1lID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICB2YXIgJHBhbmVsX2hlYWRlcnMgPSAkKHRoaXMpLmZpbmQoJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG5cbiAgICAgIHZhciBjb2xsYXBzaWJsZV90eXBlID0gJHRoaXMuZGF0YShcImNvbGxhcHNpYmxlXCIpO1xuXG4gICAgICAvKioqKioqKioqKioqKioqKlxuICAgICAgSGVscGVyIEZ1bmN0aW9uc1xuICAgICAgKioqKioqKioqKioqKioqKi9cblxuICAgICAgLy8gQWNjb3JkaW9uIE9wZW5cbiAgICAgIGZ1bmN0aW9uIGFjY29yZGlvbk9wZW4ob2JqZWN0KSB7XG4gICAgICAgICRwYW5lbF9oZWFkZXJzID0gJHRoaXMuZmluZCgnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlRG93bih7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZVVwKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbigpIHskKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO319KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLm5vdChvYmplY3QpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgcHJldmlvdXNseSBvcGVuIGFjY29yZGlvbiBlbGVtZW50cy5cbiAgICAgICAgJHBhbmVsX2hlYWRlcnMubm90KG9iamVjdCkucGFyZW50KCkuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNsaWRlVXAoe1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxuICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsXG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29tcGxldGU6XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgICAgICAgICAgZXhlY0NhbGxiYWNrcygkKHRoaXMpLnNpYmxpbmdzKCcuY29sbGFwc2libGUtaGVhZGVyJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4cGFuZGFibGUgT3BlblxuICAgICAgZnVuY3Rpb24gZXhwYW5kYWJsZU9wZW4ob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmplY3QucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZURvd24oeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlVXAoeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9wZW4gY29sbGFwc2libGUuIG9iamVjdDogLmNvbGxhcHNpYmxlLWhlYWRlclxuICAgICAgZnVuY3Rpb24gY29sbGFwc2libGVPcGVuKG9iamVjdCwgbm9Ub2dnbGUpIHtcbiAgICAgICAgaWYgKCFub1RvZ2dsZSkge1xuICAgICAgICAgIG9iamVjdC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hY2NvcmRpb24gfHwgY29sbGFwc2libGVfdHlwZSA9PT0gXCJhY2NvcmRpb25cIiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSB1bmRlZmluZWQpIHsgLy8gSGFuZGxlIEFjY29yZGlvblxuICAgICAgICAgIGFjY29yZGlvbk9wZW4ob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHsgLy8gSGFuZGxlIEV4cGFuZGFibGVzXG4gICAgICAgICAgZXhwYW5kYWJsZU9wZW4ob2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWNDYWxsYmFja3Mob2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIGNhbGxiYWNrc1xuICAgICAgZnVuY3Rpb24gZXhlY0NhbGxiYWNrcyhvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25PcGVuKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uT3Blbi5jYWxsKHRoaXMsIG9iamVjdC5wYXJlbnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbkNsb3NlKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBvYmplY3QucGFyZW50KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIG9iamVjdCBpcyBjaGlsZHJlbiBvZiBwYW5lbCBoZWFkZXJcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gIG9iamVjdCBKcXVlcnkgb2JqZWN0XG4gICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGl0IGlzIGNoaWxkcmVuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGlzQ2hpbGRyZW5PZlBhbmVsSGVhZGVyKG9iamVjdCkge1xuXG4gICAgICAgIHZhciBwYW5lbEhlYWRlciA9IGdldFBhbmVsSGVhZGVyKG9iamVjdCk7XG5cbiAgICAgICAgcmV0dXJuIHBhbmVsSGVhZGVyLmxlbmd0aCA+IDA7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHBhbmVsIGhlYWRlciBmcm9tIGEgY2hpbGRyZW4gZWxlbWVudFxuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgSnF1ZXJ5IG9iamVjdFxuICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwYW5lbCBoZWFkZXIgb2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGdldFBhbmVsSGVhZGVyKG9iamVjdCkge1xuXG4gICAgICAgIHJldHVybiBvYmplY3QuY2xvc2VzdCgnbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICB9XG5cblxuICAgICAgLy8gVHVybiBvZmYgYW55IGV4aXN0aW5nIGV2ZW50IGhhbmRsZXJzXG4gICAgICBmdW5jdGlvbiByZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAkdGhpcy5vZmYoJ2NsaWNrLmNvbGxhcHNlJywgJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKioqKiAgRW5kIEhlbHBlciBGdW5jdGlvbnMgICoqKioqL1xuXG5cbiAgICAgIC8vIE1ldGhvZHNcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZFBhcmFtID49IDAgJiZcbiAgICAgICAgICBtZXRob2RQYXJhbSA8ICRwYW5lbF9oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgJGN1cnJfaGVhZGVyID0gJHBhbmVsX2hlYWRlcnMuZXEobWV0aG9kUGFyYW0pO1xuICAgICAgICBpZiAoJGN1cnJfaGVhZGVyLmxlbmd0aCAmJlxuICAgICAgICAgICAgKG1ldGhvZE5hbWUgPT09ICdvcGVuJyB8fFxuICAgICAgICAgICAgKG1ldGhvZE5hbWUgPT09ICdjbG9zZScgJiZcbiAgICAgICAgICAgICRjdXJyX2hlYWRlci5oYXNDbGFzcygnYWN0aXZlJykpKSkge1xuICAgICAgICAgIGNvbGxhcHNpYmxlT3BlbigkY3Vycl9oZWFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG4gICAgICByZW1vdmVFdmVudEhhbmRsZXJzKCk7XG5cblxuICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgdG8gb25seSBkaXJlY3QgY29sbGFwc2libGUgaGVhZGVyIGNoaWxkcmVuXG4gICAgICAkdGhpcy5vbignY2xpY2suY29sbGFwc2UnLCAnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gJChlLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGlzQ2hpbGRyZW5PZlBhbmVsSGVhZGVyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGdldFBhbmVsSGVhZGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGFwc2libGVPcGVuKGVsZW1lbnQpO1xuICAgICAgfSk7XG5cblxuICAgICAgLy8gT3BlbiBmaXJzdCBhY3RpdmVcbiAgICAgIGlmIChvcHRpb25zLmFjY29yZGlvbiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSBcImFjY29yZGlvblwiIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IHVuZGVmaW5lZCkgeyAvLyBIYW5kbGUgQWNjb3JkaW9uXG4gICAgICAgIGNvbGxhcHNpYmxlT3BlbigkcGFuZWxfaGVhZGVycy5maWx0ZXIoJy5hY3RpdmUnKS5maXJzdCgpLCB0cnVlKTtcblxuICAgICAgfSBlbHNlIHsgLy8gSGFuZGxlIEV4cGFuZGFibGVzXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLmZpbHRlcignLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29sbGFwc2libGVPcGVuKCQodGhpcyksIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmNvbGxhcHNpYmxlJykuY29sbGFwc2libGUoKTtcbiAgfSk7XG59KCBqUXVlcnkgKSk7OyhmdW5jdGlvbiAoJCkge1xuXG4gIC8vIEFkZCBwb3NpYmlsaXR5IHRvIHNjcm9sbCB0byBzZWxlY3RlZCBvcHRpb25cbiAgLy8gdXNlZnVsbCBmb3Igc2VsZWN0IGZvciBleGFtcGxlXG4gICQuZm4uc2Nyb2xsVG8gPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgJCh0aGlzKS5zY3JvbGxUb3AoJCh0aGlzKS5zY3JvbGxUb3AoKSAtICQodGhpcykub2Zmc2V0KCkudG9wICsgJChlbGVtKS5vZmZzZXQoKS50b3ApO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gICQuZm4uZHJvcGRvd24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGluRHVyYXRpb246IDMwMCxcbiAgICAgIG91dER1cmF0aW9uOiAyMjUsXG4gICAgICBjb25zdHJhaW5XaWR0aDogdHJ1ZSwgLy8gQ29uc3RyYWlucyB3aWR0aCBvZiBkcm9wZG93biB0byB0aGUgYWN0aXZhdG9yXG4gICAgICBob3ZlcjogZmFsc2UsXG4gICAgICBndXR0ZXI6IDAsIC8vIFNwYWNpbmcgZnJvbSBlZGdlXG4gICAgICBiZWxvd09yaWdpbjogZmFsc2UsXG4gICAgICBhbGlnbm1lbnQ6ICdsZWZ0JyxcbiAgICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gT3BlbiBkcm9wZG93bi5cbiAgICBpZiAob3B0aW9ucyA9PT0gXCJvcGVuXCIpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDbG9zZSBkcm9wZG93bi5cbiAgICBpZiAob3B0aW9ucyA9PT0gXCJjbG9zZVwiKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIG9yaWdpbiA9ICQodGhpcyk7XG4gICAgICB2YXIgY3Vycl9vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICAgICAgLy8gRHJvcGRvd24gbWVudVxuICAgICAgdmFyIGFjdGl2YXRlcyA9ICQoXCIjXCIrIG9yaWdpbi5hdHRyKCdkYXRhLWFjdGl2YXRlcycpKTtcblxuICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucygpIHtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdpbmR1cmF0aW9uJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbiA9IG9yaWdpbi5kYXRhKCdpbmR1cmF0aW9uJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnb3V0ZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbiA9IG9yaWdpbi5kYXRhKCdvdXRkdXJhdGlvbicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2NvbnN0cmFpbndpZHRoJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuY29uc3RyYWluV2lkdGggPSBvcmlnaW4uZGF0YSgnY29uc3RyYWlud2lkdGgnKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdob3ZlcicpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmhvdmVyID0gb3JpZ2luLmRhdGEoJ2hvdmVyJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnZ3V0dGVyJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuZ3V0dGVyID0gb3JpZ2luLmRhdGEoJ2d1dHRlcicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2JlbG93b3JpZ2luJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuYmVsb3dPcmlnaW4gPSBvcmlnaW4uZGF0YSgnYmVsb3dvcmlnaW4nKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdhbGlnbm1lbnQnKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5hbGlnbm1lbnQgPSBvcmlnaW4uZGF0YSgnYWxpZ25tZW50Jyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuc3RvcFByb3BhZ2F0aW9uID0gb3JpZ2luLmRhdGEoJ3N0b3Bwcm9wYWdhdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVPcHRpb25zKCk7XG5cbiAgICAgIC8vIEF0dGFjaCBkcm9wZG93biB0byBpdHMgYWN0aXZhdG9yXG4gICAgICBvcmlnaW4uYWZ0ZXIoYWN0aXZhdGVzKTtcblxuICAgICAgLypcbiAgICAgICAgSGVscGVyIGZ1bmN0aW9uIHRvIHBvc2l0aW9uIGFuZCByZXNpemUgZHJvcGRvd24uXG4gICAgICAgIFVzZWQgaW4gaG92ZXIgYW5kIGNsaWNrIGhhbmRsZXIuXG4gICAgICAqL1xuICAgICAgZnVuY3Rpb24gcGxhY2VEcm9wZG93bihldmVudFR5cGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNpbXVsdGFuZW91cyBmb2N1cyBhbmQgY2xpY2sgZXZlbnRzLlxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGh0bWwgZGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgIHVwZGF0ZU9wdGlvbnMoKTtcblxuICAgICAgICAvLyBTZXQgRHJvcGRvd24gc3RhdGVcbiAgICAgICAgYWN0aXZhdGVzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgb3JpZ2luLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAvLyBDb25zdHJhaW4gd2lkdGhcbiAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5jb25zdHJhaW5XaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ3dpZHRoJywgb3JpZ2luLm91dGVyV2lkdGgoKSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmF0ZXMuY3NzKCd3aGl0ZS1zcGFjZScsICdub3dyYXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9mZnNjcmVlbiBkZXRlY3Rpb25cbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5pbm5lckhlaWdodCgpO1xuICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICB2YXIgb2Zmc2V0VG9wID0gb3JpZ2luLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIGN1cnJBbGlnbm1lbnQgPSBjdXJyX29wdGlvbnMuYWxpZ25tZW50O1xuICAgICAgICB2YXIgZ3V0dGVyU3BhY2luZyA9IDA7XG4gICAgICAgIHZhciBsZWZ0UG9zaXRpb24gPSAwO1xuXG4gICAgICAgIC8vIEJlbG93IE9yaWdpblxuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICBpZiAoY3Vycl9vcHRpb25zLmJlbG93T3JpZ2luID09PSB0cnVlKSB7XG4gICAgICAgICAgdmVydGljYWxPZmZzZXQgPSBvcmlnaW5IZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3Igc2Nyb2xsaW5nIHBvc2l0aW9uZWQgY29udGFpbmVyLlxuICAgICAgICB2YXIgc2Nyb2xsWU9mZnNldCA9IDA7XG4gICAgICAgIHZhciBzY3JvbGxYT2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBvcmlnaW4ucGFyZW50KCk7XG4gICAgICAgIGlmICghd3JhcHBlci5pcygnYm9keScpKSB7XG4gICAgICAgICAgaWYgKHdyYXBwZXJbMF0uc2Nyb2xsSGVpZ2h0ID4gd3JhcHBlclswXS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHNjcm9sbFlPZmZzZXQgPSB3cmFwcGVyWzBdLnNjcm9sbFRvcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdyYXBwZXJbMF0uc2Nyb2xsV2lkdGggPiB3cmFwcGVyWzBdLmNsaWVudFdpZHRoKSB7XG4gICAgICAgICAgICBzY3JvbGxYT2Zmc2V0ID0gd3JhcHBlclswXS5zY3JvbGxMZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKG9mZnNldExlZnQgKyBhY3RpdmF0ZXMuaW5uZXJXaWR0aCgpID4gJCh3aW5kb3cpLndpZHRoKCkpIHtcbiAgICAgICAgICAvLyBEcm9wZG93biBnb2VzIHBhc3Qgc2NyZWVuIG9uIHJpZ2h0LCBmb3JjZSByaWdodCBhbGlnbm1lbnRcbiAgICAgICAgICBjdXJyQWxpZ25tZW50ID0gJ3JpZ2h0JztcblxuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldExlZnQgLSBhY3RpdmF0ZXMuaW5uZXJXaWR0aCgpICsgb3JpZ2luLmlubmVyV2lkdGgoKSA8IDApIHtcbiAgICAgICAgICAvLyBEcm9wZG93biBnb2VzIHBhc3Qgc2NyZWVuIG9uIGxlZnQsIGZvcmNlIGxlZnQgYWxpZ25tZW50XG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICAvLyBWZXJ0aWNhbCBib3R0b20gb2Zmc2NyZWVuIGRldGVjdGlvblxuICAgICAgICBpZiAob2Zmc2V0VG9wICsgYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPiB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICAvLyBJZiBnb2luZyB1cHdhcmRzIHN0aWxsIGdvZXMgb2Zmc2NyZWVuLCBqdXN0IGNyb3AgaGVpZ2h0IG9mIGRyb3Bkb3duLlxuICAgICAgICAgIGlmIChvZmZzZXRUb3AgKyBvcmlnaW5IZWlnaHQgLSBhY3RpdmF0ZXMuaW5uZXJIZWlnaHQoKSA8IDApIHtcbiAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIG9mZnNldFRvcCAtIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICAgICAgYWN0aXZhdGVzLmNzcygnbWF4LWhlaWdodCcsIGFkanVzdGVkSGVpZ2h0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRmxvdyB1cHdhcmRzLlxuICAgICAgICAgICAgaWYgKCF2ZXJ0aWNhbE9mZnNldCkge1xuICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCArPSBvcmlnaW5IZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCAtPSBhY3RpdmF0ZXMuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgZWRnZSBhbGlnbm1lbnRcbiAgICAgICAgaWYgKGN1cnJBbGlnbm1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGd1dHRlclNwYWNpbmcgPSBjdXJyX29wdGlvbnMuZ3V0dGVyO1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IG9yaWdpbi5wb3NpdGlvbigpLmxlZnQgKyBndXR0ZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJBbGlnbm1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICB2YXIgb2Zmc2V0UmlnaHQgPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgb3JpZ2luLm91dGVyV2lkdGgoKSAtIGFjdGl2YXRlcy5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgZ3V0dGVyU3BhY2luZyA9IC1jdXJyX29wdGlvbnMuZ3V0dGVyO1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9ICBvZmZzZXRSaWdodCArIGd1dHRlclNwYWNpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3NpdGlvbiBkcm9wZG93blxuICAgICAgICBhY3RpdmF0ZXMuY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0b3A6IG9yaWdpbi5wb3NpdGlvbigpLnRvcCArIHZlcnRpY2FsT2Zmc2V0ICsgc2Nyb2xsWU9mZnNldCxcbiAgICAgICAgICBsZWZ0OiBsZWZ0UG9zaXRpb24gKyBzY3JvbGxYT2Zmc2V0XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gU2hvdyBkcm9wZG93blxuICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKS5jc3MoJ29wYWNpdHknLCAwKVxuICAgICAgICAgIC5zbGlkZURvd24oe1xuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgZHVyYXRpb246IGN1cnJfb3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5hbmltYXRlKCB7b3BhY2l0eTogMX0sIHtxdWV1ZTogZmFsc2UsIGR1cmF0aW9uOiBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbiwgZWFzaW5nOiAnZWFzZU91dFNpbmUnfSk7XG5cbiAgICAgICAgLy8gQWRkIGNsaWNrIGNsb3NlIGhhbmRsZXIgdG8gZG9jdW1lbnRcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKGRvY3VtZW50KS5iaW5kKCdjbGljay4nKyBhY3RpdmF0ZXMuYXR0cignaWQnKSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdjbGljay4nKyBhY3RpdmF0ZXMuYXR0cignaWQnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24oKSB7XG4gICAgICAgIC8vIENoZWNrIGZvciBzaW11bHRhbmVvdXMgZm9jdXMgYW5kIGNsaWNrIGV2ZW50cy5cbiAgICAgICAgaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIGFjdGl2YXRlcy5mYWRlT3V0KGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XG4gICAgICAgIGFjdGl2YXRlcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIG9yaWdpbi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBhY3RpdmF0ZXMuY3NzKCdtYXgtaGVpZ2h0JywgJycpOyB9LCBjdXJyX29wdGlvbnMub3V0RHVyYXRpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBIb3ZlclxuICAgICAgaWYgKGN1cnJfb3B0aW9ucy5ob3Zlcikge1xuICAgICAgICB2YXIgb3BlbiA9IGZhbHNlO1xuICAgICAgICBvcmlnaW4udW5iaW5kKCdjbGljay4nICsgb3JpZ2luLmF0dHIoJ2lkJykpO1xuICAgICAgICAvLyBIb3ZlciBoYW5kbGVyIHRvIHNob3cgZHJvcGRvd25cbiAgICAgICAgb3JpZ2luLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSl7IC8vIE1vdXNlIG92ZXJcbiAgICAgICAgICBpZiAob3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHBsYWNlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9yaWdpbi5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIC8vIElmIGhvdmVyIG9uIG9yaWdpbiB0aGVuIHRvIHNvbWV0aGluZyBvdGhlciB0aGFuIGRyb3Bkb3duIGNvbnRlbnQsIHRoZW4gY2xvc2VcbiAgICAgICAgICB2YXIgdG9FbCA9IGUudG9FbGVtZW50IHx8IGUucmVsYXRlZFRhcmdldDsgLy8gYWRkZWQgYnJvd3NlciBjb21wYXRpYmlsaXR5IGZvciB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgIGlmKCEkKHRvRWwpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykuaXMoYWN0aXZhdGVzKSkge1xuICAgICAgICAgICAgYWN0aXZhdGVzLnN0b3AodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFjdGl2YXRlcy5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpeyAvLyBNb3VzZSBvdXRcbiAgICAgICAgICB2YXIgdG9FbCA9IGUudG9FbGVtZW50IHx8IGUucmVsYXRlZFRhcmdldDtcbiAgICAgICAgICBpZighJCh0b0VsKS5jbG9zZXN0KCcuZHJvcGRvd24tYnV0dG9uJykuaXMob3JpZ2luKSkge1xuICAgICAgICAgICAgYWN0aXZhdGVzLnN0b3AodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDbGljayBoYW5kbGVyIHRvIHNob3cgZHJvcGRvd25cbiAgICAgICAgb3JpZ2luLnVuYmluZCgnY2xpY2suJyArIG9yaWdpbi5hdHRyKCdpZCcpKTtcbiAgICAgICAgb3JpZ2luLmJpbmQoJ2NsaWNrLicrb3JpZ2luLmF0dHIoJ2lkJyksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGlmICghaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICBpZiAoIG9yaWdpblswXSA9PSBlLmN1cnJlbnRUYXJnZXQgJiZcbiAgICAgICAgICAgICAgICAgIW9yaWdpbi5oYXNDbGFzcygnYWN0aXZlJykgJiZcbiAgICAgICAgICAgICAgICAgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnRzIGJ1dHRvbiBjbGljayBmcm9tIG1vdmluZyB3aW5kb3dcbiAgICAgICAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBsYWNlRHJvcGRvd24oJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBvcmlnaW4gaXMgY2xpY2tlZCBhbmQgbWVudSBpcyBvcGVuLCBjbG9zZSBtZW51XG4gICAgICAgICAgICBlbHNlIGlmIChvcmlnaW4uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9IC8vIEVuZCBlbHNlXG5cbiAgICAgIC8vIExpc3RlbiB0byBvcGVuIGFuZCBjbG9zZSBldmVudCAtIHVzZWZ1bCBmb3Igc2VsZWN0IGNvbXBvbmVudFxuICAgICAgb3JpZ2luLm9uKCdvcGVuJywgZnVuY3Rpb24oZSwgZXZlbnRUeXBlKSB7XG4gICAgICAgIHBsYWNlRHJvcGRvd24oZXZlbnRUeXBlKTtcbiAgICAgIH0pO1xuICAgICAgb3JpZ2luLm9uKCdjbG9zZScsIGhpZGVEcm9wZG93bik7XG5cblxuICAgIH0pO1xuICB9OyAvLyBFbmQgZHJvcGRvd24gcGx1Z2luXG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcuZHJvcGRvd24tYnV0dG9uJykuZHJvcGRvd24oKTtcbiAgfSk7XG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uKCQpIHtcbiAgdmFyIF9zdGFjayA9IDAsXG4gIF9sYXN0SUQgPSAwLFxuICBfZ2VuZXJhdGVJRCA9IGZ1bmN0aW9uKCkge1xuICAgIF9sYXN0SUQrKztcbiAgICByZXR1cm4gJ21hdGVyaWFsaXplLW1vZGFsLW92ZXJsYXktJyArIF9sYXN0SUQ7XG4gIH07XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgaW5pdCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICBpbkR1cmF0aW9uOiAzNTAsXG4gICAgICAgIG91dER1cmF0aW9uOiAyNTAsXG4gICAgICAgIHJlYWR5OiB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGRpc21pc3NpYmxlOiB0cnVlLFxuICAgICAgICBzdGFydGluZ1RvcDogJzQlJyxcbiAgICAgICAgZW5kaW5nVG9wOiAnMTAlJ1xuICAgICAgfTtcblxuICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdHNcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkbW9kYWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbW9kYWxfaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKSB8fCAnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpO1xuXG4gICAgICAgIHZhciBjbG9zZU1vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIG92ZXJsYXlJRCA9ICRtb2RhbC5kYXRhKCdvdmVybGF5LWlkJyk7XG4gICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnIycgKyBvdmVybGF5SUQpO1xuICAgICAgICAgICRtb2RhbC5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgLy8gRW5hYmxlIHNjcm9sbGluZ1xuICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgd2lkdGg6ICcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkbW9kYWwuZmluZCgnLm1vZGFsLWNsb3NlJykub2ZmKCdjbGljay5jbG9zZScpO1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAubW9kYWwnICsgb3ZlcmxheUlEKTtcblxuICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KCB7IG9wYWNpdHk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMub3V0RHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzZTogXCJlYXNlT3V0UXVhcnRcIn0pO1xuXG5cbiAgICAgICAgICAvLyBEZWZpbmUgQm90dG9tIFNoZWV0IGFuaW1hdGlvblxuICAgICAgICAgIHZhciBleGl0VmVsb2NpdHlPcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMub3V0RHVyYXRpb24sXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VPdXRDdWJpY1wiLFxuICAgICAgICAgICAgLy8gSGFuZGxlIG1vZGFsIHJlYWR5IGNhbGxiYWNrXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY3NzKHtkaXNwbGF5Olwibm9uZVwifSk7XG5cbiAgICAgICAgICAgICAgLy8gQ2FsbCBjb21wbGV0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMuY29tcGxldGUpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbXBsZXRlLmNhbGwodGhpcywgJG1vZGFsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgX3N0YWNrLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKCdib3R0b20tc2hlZXQnKSkge1xuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KHtib3R0b206IFwiLTEwMCVcIiwgb3BhY2l0eTogMH0sIGV4aXRWZWxvY2l0eU9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICRtb2RhbC52ZWxvY2l0eShcbiAgICAgICAgICAgICAgeyB0b3A6IG9wdGlvbnMuc3RhcnRpbmdUb3AsIG9wYWNpdHk6IDAsIHNjYWxlWDogMC43fSxcbiAgICAgICAgICAgICAgZXhpdFZlbG9jaXR5T3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9wZW5Nb2RhbCA9IGZ1bmN0aW9uKCR0cmlnZ2VyKSB7XG4gICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgIHZhciBvbGRXaWR0aCA9ICRib2R5LmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICRib2R5LndpZHRoKG9sZFdpZHRoKTtcblxuICAgICAgICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBvdmVybGF5SUQgPSBfZ2VuZXJhdGVJRCgpO1xuICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgbFN0YWNrID0gKCsrX3N0YWNrKTtcblxuICAgICAgICAgIC8vIFN0b3JlIGEgcmVmZXJlbmNlIG9mIHRoZSBvdmVybGF5XG4gICAgICAgICAgJG92ZXJsYXkuYXR0cignaWQnLCBvdmVybGF5SUQpLmNzcygnei1pbmRleCcsIDEwMDAgKyBsU3RhY2sgKiAyKTtcbiAgICAgICAgICAkbW9kYWwuZGF0YSgnb3ZlcmxheS1pZCcsIG92ZXJsYXlJRCkuY3NzKCd6LWluZGV4JywgMTAwMCArIGxTdGFjayAqIDIgKyAxKTtcbiAgICAgICAgICAkbW9kYWwuYWRkQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICQoXCJib2R5XCIpLmFwcGVuZCgkb3ZlcmxheSk7XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5kaXNtaXNzaWJsZSkge1xuICAgICAgICAgICAgJG92ZXJsYXkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gUmV0dXJuIG9uIEVTQ1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwLm1vZGFsJyArIG92ZXJsYXlJRCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAgIC8vIEVTQyBrZXlcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRtb2RhbC5maW5kKFwiLm1vZGFsLWNsb3NlXCIpLm9uKCdjbGljay5jbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRvdmVybGF5LmNzcyh7IGRpc3BsYXkgOiBcImJsb2NrXCIsIG9wYWNpdHkgOiAwIH0pO1xuXG4gICAgICAgICAgJG1vZGFsLmNzcyh7XG4gICAgICAgICAgICBkaXNwbGF5IDogXCJibG9ja1wiLFxuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IG9wdGlvbnMub3BhY2l0eX0sIHtkdXJhdGlvbjogb3B0aW9ucy5pbkR1cmF0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2U6IFwiZWFzZU91dEN1YmljXCJ9KTtcbiAgICAgICAgICAkbW9kYWwuZGF0YSgnYXNzb2NpYXRlZC1vdmVybGF5JywgJG92ZXJsYXlbMF0pO1xuXG4gICAgICAgICAgLy8gRGVmaW5lIEJvdHRvbSBTaGVldCBhbmltYXRpb25cbiAgICAgICAgICB2YXIgZW50ZXJWZWxvY2l0eU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIixcbiAgICAgICAgICAgIC8vIEhhbmRsZSBtb2RhbCByZWFkeSBjYWxsYmFja1xuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMucmVhZHkpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJlYWR5LmNhbGwodGhpcywgJG1vZGFsLCAkdHJpZ2dlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoJ2JvdHRvbS1zaGVldCcpKSB7XG4gICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoe2JvdHRvbTogXCIwXCIsIG9wYWNpdHk6IDF9LCBlbnRlclZlbG9jaXR5T3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJC5WZWxvY2l0eS5ob29rKCRtb2RhbCwgXCJzY2FsZVhcIiwgMC43KTtcbiAgICAgICAgICAgICRtb2RhbC5jc3MoeyB0b3A6IG9wdGlvbnMuc3RhcnRpbmdUb3AgfSk7XG4gICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoe3RvcDogb3B0aW9ucy5lbmRpbmdUb3AsIG9wYWNpdHk6IDEsIHNjYWxlWDogJzEnfSwgZW50ZXJWZWxvY2l0eU9wdGlvbnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlc2V0IGhhbmRsZXJzXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2subW9kYWxUcmlnZ2VyJywgJ2FbaHJlZj1cIiMnICsgbW9kYWxfaWQgKyAnXCJdLCBbZGF0YS10YXJnZXQ9XCInICsgbW9kYWxfaWQgKyAnXCJdJyk7XG4gICAgICAgICQodGhpcykub2ZmKCdvcGVuTW9kYWwnKTtcbiAgICAgICAgJCh0aGlzKS5vZmYoJ2Nsb3NlTW9kYWwnKTtcblxuICAgICAgICAvLyBDbG9zZSBIYW5kbGVyc1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2subW9kYWxUcmlnZ2VyJywgJ2FbaHJlZj1cIiMnICsgbW9kYWxfaWQgKyAnXCJdLCBbZGF0YS10YXJnZXQ9XCInICsgbW9kYWxfaWQgKyAnXCJdJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG9wdGlvbnMuc3RhcnRpbmdUb3AgPSAoJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkpIC8xLjE1O1xuICAgICAgICAgIG9wZW5Nb2RhbCgkKHRoaXMpKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pOyAvLyBkb25lIHNldCBvbiBjbGlja1xuXG4gICAgICAgICQodGhpcykub24oJ29wZW5Nb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBtb2RhbF9pZCA9ICQodGhpcykuYXR0cihcImhyZWZcIikgfHwgJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2xvc2VNb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gZG9uZSByZXR1cm5cbiAgICB9LFxuICAgIG9wZW4gOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignb3Blbk1vZGFsJyk7XG4gICAgfSxcbiAgICBjbG9zZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZU1vZGFsJyk7XG4gICAgfVxuICB9O1xuXG4gICQuZm4ubW9kYWwgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcbiAgICBpZiAoIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSApIHtcbiAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkubW9kYWwnICk7XG4gICAgfVxuICB9O1xufSkoalF1ZXJ5KTtcbjsoZnVuY3Rpb24gKCQpIHtcblxuICAkLmZuLm1hdGVyaWFsYm94ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2luaXRpYWxpemVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xuXG4gICAgICB2YXIgb3ZlcmxheUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdmFyIGRvbmVBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgdmFyIGluRHVyYXRpb24gPSAyNzU7XG4gICAgICB2YXIgb3V0RHVyYXRpb24gPSAyMDA7XG4gICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9ICQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ21hdGVyaWFsLXBsYWNlaG9sZGVyJyk7XG4gICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IDA7XG4gICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSAwO1xuICAgICAgdmFyIGFuY2VzdG9yc0NoYW5nZWQ7XG4gICAgICB2YXIgYW5jZXN0b3I7XG4gICAgICB2YXIgb3JpZ2luSW5saW5lU3R5bGVzID0gb3JpZ2luLmF0dHIoJ3N0eWxlJyk7XG4gICAgICBvcmlnaW4ud3JhcChwbGFjZWhvbGRlcik7XG5cblxuICAgICAgb3JpZ2luLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBvcmlnaW4ud2lkdGgoKTtcbiAgICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gb3JpZ2luLmhlaWdodCgpO1xuXG5cbiAgICAgICAgLy8gSWYgYWxyZWFkeSBtb2RhbCwgcmV0dXJuIHRvIG9yaWdpbmFsXG4gICAgICAgIGlmIChkb25lQW5pbWF0aW5nID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVyblRvT3JpZ2luYWwoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3ZlcmxheUFjdGl2ZSAmJiBkb25lQW5pbWF0aW5nPT09dHJ1ZSkge1xuICAgICAgICAgIHJldHVyblRvT3JpZ2luYWwoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFNldCBzdGF0ZXNcbiAgICAgICAgZG9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBvcmlnaW4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5QWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAvLyBTZXQgcG9zaXRpb25pbmcgZm9yIHBsYWNlaG9sZGVyXG4gICAgICAgIHBsYWNlaG9sZGVyLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHBsYWNlaG9sZGVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogcGxhY2Vob2xkZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbmQgYW5jZXN0b3Igd2l0aCBvdmVyZmxvdzogaGlkZGVuOyBhbmQgcmVtb3ZlIGl0XG4gICAgICAgIGFuY2VzdG9yc0NoYW5nZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGFuY2VzdG9yID0gcGxhY2Vob2xkZXJbMF0ucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgd2hpbGUgKGFuY2VzdG9yICE9PSBudWxsICYmICEkKGFuY2VzdG9yKS5pcyhkb2N1bWVudCkpIHtcbiAgICAgICAgICB2YXIgY3VyciA9ICQoYW5jZXN0b3IpO1xuICAgICAgICAgIGlmIChjdXJyLmNzcygnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICBjdXJyLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgaWYgKGFuY2VzdG9yc0NoYW5nZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBhbmNlc3RvcnNDaGFuZ2VkID0gY3VycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBhbmNlc3RvcnNDaGFuZ2VkID0gYW5jZXN0b3JzQ2hhbmdlZC5hZGQoY3Vycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBjc3Mgb24gb3JpZ2luXG4gICAgICAgIG9yaWdpbi5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICd6LWluZGV4JzogMTAwMCxcbiAgICAgICAgICAnd2lsbC1jaGFuZ2UnOiAnbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0J1xuICAgICAgICB9KVxuICAgICAgICAuZGF0YSgnd2lkdGgnLCBvcmlnaW5hbFdpZHRoKVxuICAgICAgICAuZGF0YSgnaGVpZ2h0Jywgb3JpZ2luYWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIEFkZCBvdmVybGF5XG4gICAgICAgIHZhciBvdmVybGF5ID0gJCgnPGRpdiBpZD1cIm1hdGVyaWFsYm94LW92ZXJsYXlcIj48L2Rpdj4nKVxuICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9uZUFuaW1hdGluZyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVyblRvT3JpZ2luYWwoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBQdXQgYmVmb3JlIGluIG9yaWdpbiBpbWFnZSB0byBwcmVzZXJ2ZSB6LWluZGV4IGxheWVyaW5nLlxuICAgICAgICBvcmlnaW4uYmVmb3JlKG92ZXJsYXkpO1xuXG4gICAgICAgIC8vIFNldCBkaW1lbnNpb25zIGlmIG5lZWRlZFxuICAgICAgICB2YXIgb3ZlcmxheU9mZnNldCA9IG92ZXJsYXlbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG92ZXJsYXkuY3NzKHtcbiAgICAgICAgICB3aWR0aDogd2luZG93V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3dIZWlnaHQsXG4gICAgICAgICAgbGVmdDogLTEgKiBvdmVybGF5T2Zmc2V0LmxlZnQsXG4gICAgICAgICAgdG9wOiAtMSAqIG92ZXJsYXlPZmZzZXQudG9wXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQW5pbWF0ZSBPdmVybGF5XG4gICAgICAgIG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAge2R1cmF0aW9uOiBpbkR1cmF0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30gKTtcblxuICAgICAgICAvLyBBZGQgYW5kIGFuaW1hdGUgY2FwdGlvbiBpZiBpdCBleGlzdHNcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdjYXB0aW9uJykgIT09IFwiXCIpIHtcbiAgICAgICAgICB2YXIgJHBob3RvX2NhcHRpb24gPSAkKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWxib3gtY2FwdGlvblwiPjwvZGl2PicpO1xuICAgICAgICAgICRwaG90b19jYXB0aW9uLnRleHQob3JpZ2luLmRhdGEoJ2NhcHRpb24nKSk7XG4gICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkcGhvdG9fY2FwdGlvbik7XG4gICAgICAgICAgJHBob3RvX2NhcHRpb24uY3NzKHsgXCJkaXNwbGF5XCI6IFwiaW5saW5lXCIgfSk7XG4gICAgICAgICAgJHBob3RvX2NhcHRpb24udmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IGluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNpemUgSW1hZ2VcbiAgICAgICAgdmFyIHJhdGlvID0gMDtcbiAgICAgICAgdmFyIHdpZHRoUGVyY2VudCA9IG9yaWdpbmFsV2lkdGggLyB3aW5kb3dXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodFBlcmNlbnQgPSBvcmlnaW5hbEhlaWdodCAvIHdpbmRvd0hlaWdodDtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gMDtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IDA7XG5cbiAgICAgICAgaWYgKHdpZHRoUGVyY2VudCA+IGhlaWdodFBlcmNlbnQpIHtcbiAgICAgICAgICByYXRpbyA9IG9yaWdpbmFsSGVpZ2h0IC8gb3JpZ2luYWxXaWR0aDtcbiAgICAgICAgICBuZXdXaWR0aCA9IHdpbmRvd1dpZHRoICogMC45O1xuICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvd1dpZHRoICogMC45ICogcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmF0aW8gPSBvcmlnaW5hbFdpZHRoIC8gb3JpZ2luYWxIZWlnaHQ7XG4gICAgICAgICAgbmV3V2lkdGggPSAod2luZG93SGVpZ2h0ICogMC45KSAqIHJhdGlvO1xuICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvd0hlaWdodCAqIDAuOTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGUgaW1hZ2UgKyBzZXQgei1pbmRleFxuICAgICAgICBpZihvcmlnaW4uaGFzQ2xhc3MoJ3Jlc3BvbnNpdmUtaW1nJykpIHtcbiAgICAgICAgICBvcmlnaW4udmVsb2NpdHkoeydtYXgtd2lkdGgnOiBuZXdXaWR0aCwgJ3dpZHRoJzogb3JpZ2luYWxXaWR0aH0sIHtkdXJhdGlvbjogMCwgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIG9yaWdpbi5jc3Moe2xlZnQ6IDAsIHRvcDogMH0pXG4gICAgICAgICAgICAgIC52ZWxvY2l0eShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKSArIHdpbmRvd1dpZHRoLzIgLSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKS5vZmZzZXQoKS5sZWZ0IC0gbmV3V2lkdGgvMixcbiAgICAgICAgICAgICAgICAgIHRvcDogJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyB3aW5kb3dIZWlnaHQvMiAtIG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpLm9mZnNldCgpLnRvcCAtIG5ld0hlaWdodC8gMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGluRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtkb25lQW5pbWF0aW5nID0gdHJ1ZTt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSAvLyBFbmQgQ29tcGxldGVcbiAgICAgICAgICB9KTsgLy8gRW5kIFZlbG9jaXR5XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb3JpZ2luLmNzcygnbGVmdCcsIDApXG4gICAgICAgICAgLmNzcygndG9wJywgMClcbiAgICAgICAgICAudmVsb2NpdHkoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0LFxuICAgICAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICAgICAgICAgIGxlZnQ6ICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKSArIHdpbmRvd1dpZHRoLzIgLSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKS5vZmZzZXQoKS5sZWZ0IC0gbmV3V2lkdGgvMixcbiAgICAgICAgICAgICAgdG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIHdpbmRvd0hlaWdodC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkudG9wIC0gbmV3SGVpZ2h0LyAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogaW5EdXJhdGlvbixcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe2RvbmVBbmltYXRpbmcgPSB0cnVlO31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7IC8vIEVuZCBWZWxvY2l0eVxuICAgICAgICB9XG5cbiAgICAgIH0pOyAvLyBFbmQgb3JpZ2luIG9uIGNsaWNrXG5cblxuICAgICAgLy8gUmV0dXJuIG9uIHNjcm9sbFxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG92ZXJsYXlBY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZXR1cm4gb24gRVNDXG4gICAgICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgZG9uZUFuaW1hdGluZyA9PT0gdHJ1ZSkgeyAgIC8vIEVTQyBrZXlcbiAgICAgICAgICBpZiAob3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBtb2RhbGVkIGltYWdlIHRvIHRoZSBvcmlnaW5hbCBzcG90XG4gICAgICBmdW5jdGlvbiByZXR1cm5Ub09yaWdpbmFsKCkge1xuXG4gICAgICAgIGRvbmVBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gb3JpZ2luLmRhdGEoJ3dpZHRoJyk7XG4gICAgICAgIHZhciBvcmlnaW5hbEhlaWdodCA9IG9yaWdpbi5kYXRhKCdoZWlnaHQnKTtcblxuICAgICAgICBvcmlnaW4udmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgICAgICAkKCcjbWF0ZXJpYWxib3gtb3ZlcmxheScpLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICAgICAgJCgnLm1hdGVyaWFsYm94LWNhcHRpb24nKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG5cblxuICAgICAgICAkKCcjbWF0ZXJpYWxib3gtb3ZlcmxheScpLnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiBvdXREdXJhdGlvbiwgLy8gRGVsYXkgcHJldmVudHMgYW5pbWF0aW9uIG92ZXJsYXBwaW5nXG4gICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBSZW1vdmUgT3ZlcmxheVxuICAgICAgICAgICAgb3ZlcmxheUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBJbWFnZVxuICAgICAgICBvcmlnaW4udmVsb2NpdHkoXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IG9yaWdpbmFsV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG9yaWdpbmFsSGVpZ2h0LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZHVyYXRpb246IG91dER1cmF0aW9uLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNzcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgICAgICAgbGVmdDogJydcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgb3JpZ2luLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgIG9yaWdpbi5hdHRyKCdzdHlsZScsIG9yaWdpbklubGluZVN0eWxlcyk7XG5cbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNsYXNzXG4gICAgICAgICAgICAgIG9yaWdpbi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGRvbmVBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBvdmVyZmxvdyBvdmVycmlkZXMgb24gYW5jZXN0b3JzXG4gICAgICAgICAgICAgIGlmIChhbmNlc3RvcnNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgYW5jZXN0b3JzQ2hhbmdlZC5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJlbW92ZSBDYXB0aW9uICsgcmVzZXQgY3NzIHNldHRpbmdzIG9uIGltYWdlXG4gICAgICAgICQoJy5tYXRlcmlhbGJveC1jYXB0aW9uJykudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IG91dER1cmF0aW9uLCAvLyBEZWxheSBwcmV2ZW50cyBhbmltYXRpb24gb3ZlcmxhcHBpbmdcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLm1hdGVyaWFsYm94ZWQnKS5tYXRlcmlhbGJveCgpO1xuICB9KTtcblxufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gICQuZm4ucGFyYWxsYXggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vIFBhcmFsbGF4IFNjcmlwdHNcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy5hZGRDbGFzcygncGFyYWxsYXgnKTtcblxuICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoaW5pdGlhbCkge1xuICAgICAgICB2YXIgY29udGFpbmVyX2hlaWdodDtcbiAgICAgICAgaWYgKHdpbmRvd193aWR0aCA8IDYwMSkge1xuICAgICAgICAgIGNvbnRhaW5lcl9oZWlnaHQgPSAoJHRoaXMuaGVpZ2h0KCkgPiAwKSA/ICR0aGlzLmhlaWdodCgpIDogJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICgkdGhpcy5oZWlnaHQoKSA+IDApID8gJHRoaXMuaGVpZ2h0KCkgOiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyICRpbWcgPSAkdGhpcy5jaGlsZHJlbihcImltZ1wiKS5maXJzdCgpO1xuICAgICAgICB2YXIgaW1nX2hlaWdodCA9ICRpbWcuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBwYXJhbGxheF9kaXN0ID0gaW1nX2hlaWdodCAtIGNvbnRhaW5lcl9oZWlnaHQ7XG4gICAgICAgIHZhciBib3R0b20gPSAkdGhpcy5vZmZzZXQoKS50b3AgKyBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICB2YXIgdG9wID0gJHRoaXMub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0O1xuICAgICAgICB2YXIgcGVyY2VudFNjcm9sbGVkID0gKHdpbmRvd0JvdHRvbSAtIHRvcCkgLyAoY29udGFpbmVyX2hlaWdodCArIHdpbmRvd0hlaWdodCk7XG4gICAgICAgIHZhciBwYXJhbGxheCA9IE1hdGgucm91bmQoKHBhcmFsbGF4X2Rpc3QgKiBwZXJjZW50U2Nyb2xsZWQpKTtcblxuICAgICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICAgICRpbWcuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChib3R0b20gPiBzY3JvbGxUb3ApICYmICh0b3AgPCAoc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0KSkpIHtcbiAgICAgICAgICAkaW1nLmNzcygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzRCgtNTAlLFwiICsgcGFyYWxsYXggKyBcInB4LCAwKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIGltYWdlIGxvYWRcbiAgICAgICR0aGlzLmNoaWxkcmVuKFwiaW1nXCIpLm9uZShcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KHRydWUpO1xuICAgICAgfSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcGxldGUpICQodGhpcykudHJpZ2dlcihcImxvYWRcIik7XG4gICAgICB9KTtcblxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9O1xufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIGluaXQgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG9uU2hvdzogbnVsbCxcbiAgICAgICAgc3dpcGVhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZVRocmVzaG9sZDogSW5maW5pdHksIC8vIGJyZWFrcG9pbnQgZm9yIHN3aXBlYWJsZVxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICB2YXIgbmFtZXNwYWNlID0gTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcoJCh0aGlzKSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICB2YXIgdW5pcXVlTmFtZXNwYWNlID0gbmFtZXNwYWNlK2k7XG5cbiAgICAgIC8vIEZvciBlYWNoIHNldCBvZiB0YWJzLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2ZcbiAgICAgIC8vIHdoaWNoIHRhYiBpcyBhY3RpdmUgYW5kIGl0cyBhc3NvY2lhdGVkIGNvbnRlbnRcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgIHZhciAkYWN0aXZlLCAkY29udGVudCwgJGxpbmtzID0gJHRoaXMuZmluZCgnbGkudGFiIGEnKSxcbiAgICAgICAgICAkdGFic193aWR0aCA9ICR0aGlzLndpZHRoKCksXG4gICAgICAgICAgJHRhYnNfY29udGVudCA9ICQoKSxcbiAgICAgICAgICAkdGFic193cmFwcGVyLFxuICAgICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aCxcbiAgICAgICAgICAkaW5kaWNhdG9yLFxuICAgICAgICAgIGluZGV4ID0gcHJldl9pbmRleCA9IDAsXG4gICAgICAgICAgY2xpY2tlZCA9IGZhbHNlLFxuICAgICAgICAgIGNsaWNrZWRUaW1lb3V0LFxuICAgICAgICAgIHRyYW5zaXRpb24gPSAzMDA7XG5cblxuICAgICAgLy8gRmluZHMgcmlnaHQgYXR0cmlidXRlIGZvciBpbmRpY2F0b3IgYmFzZWQgb24gYWN0aXZlIHRhYi5cbiAgICAgIC8vIGVsOiBqUXVlcnkgT2JqZWN0XG4gICAgICB2YXIgY2FsY1JpZ2h0UG9zID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgkdGFic193aWR0aCAtIGVsLnBvc2l0aW9uKCkubGVmdCAtIGVsLm91dGVyV2lkdGgoKSAtICR0aGlzLnNjcm9sbExlZnQoKSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBGaW5kcyBsZWZ0IGF0dHJpYnV0ZSBmb3IgaW5kaWNhdG9yIGJhc2VkIG9uIGFjdGl2ZSB0YWIuXG4gICAgICAvLyBlbDogalF1ZXJ5IE9iamVjdFxuICAgICAgdmFyIGNhbGNMZWZ0UG9zID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZWwucG9zaXRpb24oKS5sZWZ0ICsgJHRoaXMuc2Nyb2xsTGVmdCgpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEFuaW1hdGVzIEluZGljYXRvciB0byBhY3RpdmUgdGFiLlxuICAgICAgLy8gcHJldl9pbmRleDogTnVtYmVyXG4gICAgICB2YXIgYW5pbWF0ZUluZGljYXRvciA9IGZ1bmN0aW9uKHByZXZfaW5kZXgpIHtcbiAgICAgICAgaWYgKChpbmRleCAtIHByZXZfaW5kZXgpID49IDApIHtcbiAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KHtcInJpZ2h0XCI6IGNhbGNSaWdodFBvcygkYWN0aXZlKSB9LCB7IGR1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9LCB7ZHVyYXRpb246IHRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBkZWxheTogOTB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9LCB7IGR1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wicmlnaHRcIjogY2FsY1JpZ2h0UG9zKCRhY3RpdmUpIH0sIHtkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGRlbGF5OiA5MH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBDaGFuZ2Ugc3dpcGVhYmxlIGFjY29yZGluZyB0byByZXNwb25zaXZlIHRocmVzaG9sZFxuICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XG4gICAgICAgIGlmICh3aW5kb3dfd2lkdGggPiBvcHRpb25zLnJlc3BvbnNpdmVUaHJlc2hvbGQpIHtcbiAgICAgICAgICBvcHRpb25zLnN3aXBlYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLy8gSWYgdGhlIGxvY2F0aW9uLmhhc2ggbWF0Y2hlcyBvbmUgb2YgdGhlIGxpbmtzLCB1c2UgdGhhdCBhcyB0aGUgYWN0aXZlIHRhYi5cbiAgICAgICRhY3RpdmUgPSAkKCRsaW5rcy5maWx0ZXIoJ1tocmVmPVwiJytsb2NhdGlvbi5oYXNoKydcIl0nKSk7XG5cbiAgICAgIC8vIElmIG5vIG1hdGNoIGlzIGZvdW5kLCB1c2UgdGhlIGZpcnN0IGxpbmsgb3IgYW55IHdpdGggY2xhc3MgJ2FjdGl2ZScgYXMgdGhlIGluaXRpYWwgYWN0aXZlIHRhYi5cbiAgICAgIGlmICgkYWN0aXZlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkYWN0aXZlID0gJCh0aGlzKS5maW5kKCdsaS50YWIgYS5hY3RpdmUnKS5maXJzdCgpO1xuICAgICAgfVxuICAgICAgaWYgKCRhY3RpdmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICRhY3RpdmUgPSAkKHRoaXMpLmZpbmQoJ2xpLnRhYiBhJykuZmlyc3QoKTtcbiAgICAgIH1cblxuICAgICAgJGFjdGl2ZS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICBpbmRleCA9ICRsaW5rcy5pbmRleCgkYWN0aXZlKTtcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoJGFjdGl2ZVswXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICRjb250ZW50ID0gJCgkYWN0aXZlWzBdLmhhc2gpO1xuICAgICAgICAkY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFwcGVuZCBpbmRpY2F0b3IgdGhlbiBzZXQgaW5kaWNhdG9yIHdpZHRoIHRvIHRhYiB3aWR0aFxuICAgICAgaWYgKCEkdGhpcy5maW5kKCcuaW5kaWNhdG9yJykubGVuZ3RoKSB7XG4gICAgICAgICR0aGlzLmFwcGVuZCgnPGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PicpO1xuICAgICAgfVxuICAgICAgJGluZGljYXRvciA9ICR0aGlzLmZpbmQoJy5pbmRpY2F0b3InKTtcblxuICAgICAgLy8gd2UgbWFrZSBzdXJlIHRoYXQgdGhlIGluZGljYXRvciBpcyBhdCB0aGUgZW5kIG9mIHRoZSB0YWJzXG4gICAgICAkdGhpcy5hcHBlbmQoJGluZGljYXRvcik7XG5cbiAgICAgIGlmICgkdGhpcy5pcyhcIjp2aXNpYmxlXCIpKSB7XG4gICAgICAgIC8vICRpbmRpY2F0b3IuY3NzKHtcInJpZ2h0XCI6ICR0YWJzX3dpZHRoIC0gKChpbmRleCArIDEpICogJHRhYl93aWR0aCl9KTtcbiAgICAgICAgLy8gJGluZGljYXRvci5jc3Moe1wibGVmdFwiOiBpbmRleCAqICR0YWJfd2lkdGh9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSk7XG4gICAgICAgICAgJGluZGljYXRvci5jc3Moe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUudGFicy0nK3VuaXF1ZU5hbWVzcGFjZSkub24oJ3Jlc2l6ZS50YWJzLScrdW5pcXVlTmFtZXNwYWNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR0YWJzX3dpZHRoID0gJHRoaXMud2lkdGgoKTtcbiAgICAgICAgJHRhYl93aWR0aCA9IE1hdGgubWF4KCR0YWJzX3dpZHRoLCAkdGhpc1swXS5zY3JvbGxXaWR0aCkgLyAkbGlua3MubGVuZ3RoO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGFiX3dpZHRoICE9PSAwICYmICR0YWJzX3dpZHRoICE9PSAwKSB7XG4gICAgICAgICAgJGluZGljYXRvci5jc3Moe1wicmlnaHRcIjogY2FsY1JpZ2h0UG9zKCRhY3RpdmUpIH0pO1xuICAgICAgICAgICRpbmRpY2F0b3IuY3NzKHtcImxlZnRcIjogY2FsY0xlZnRQb3MoJGFjdGl2ZSkgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBJbml0aWFsaXplIFRhYnMgQ29udGVudC5cbiAgICAgIGlmIChvcHRpb25zLnN3aXBlYWJsZSkge1xuICAgICAgICAvLyBUT0RPOiBEdXBsaWNhdGUgY2FsbHMgd2l0aCBzd2lwZWFibGU/IGhhbmRsZSBtdWx0aXBsZSBkaXYgd3JhcHBpbmcuXG4gICAgICAgICRsaW5rcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJGN1cnJfY29udGVudCA9ICQoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKTtcbiAgICAgICAgICAkY3Vycl9jb250ZW50LmFkZENsYXNzKCdjYXJvdXNlbC1pdGVtJyk7XG4gICAgICAgICAgJHRhYnNfY29udGVudCA9ICR0YWJzX2NvbnRlbnQuYWRkKCRjdXJyX2NvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgJHRhYnNfd3JhcHBlciA9ICR0YWJzX2NvbnRlbnQud3JhcEFsbCgnPGRpdiBjbGFzcz1cInRhYnMtY29udGVudCBjYXJvdXNlbFwiPjwvZGl2PicpO1xuICAgICAgICAkdGFic19jb250ZW50LmNzcygnZGlzcGxheScsICcnKTtcbiAgICAgICAgJCgnLnRhYnMtY29udGVudC5jYXJvdXNlbCcpLmNhcm91c2VsKHtcbiAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgICAgbm9XcmFwOiB0cnVlLFxuICAgICAgICAgIG9uQ3ljbGVUbzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkKSB7XG4gICAgICAgICAgICAgIHZhciBwcmV2X2luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgIGluZGV4ID0gJHRhYnNfd3JhcHBlci5pbmRleChpdGVtKTtcbiAgICAgICAgICAgICAgJGFjdGl2ZSA9ICRsaW5rcy5lcShpbmRleCk7XG4gICAgICAgICAgICAgIGFuaW1hdGVJbmRpY2F0b3IocHJldl9pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIaWRlIHRoZSByZW1haW5pbmcgY29udGVudFxuICAgICAgICAkbGlua3Mubm90KCRhY3RpdmUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEJpbmQgdGhlIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAgICAgICR0aGlzLm9mZignY2xpY2sudGFicycpLm9uKCdjbGljay50YWJzJywgJ2EnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFjdCBhcyByZWd1bGFyIGxpbmsgaWYgdGFyZ2V0IGF0dHJpYnV0ZSBpcyBzcGVjaWZpZWQuXG4gICAgICAgIGlmICghISQodGhpcykuYXR0cihcInRhcmdldFwiKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAkdGFic193aWR0aCA9ICR0aGlzLndpZHRoKCk7XG4gICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aDtcblxuICAgICAgICAvLyBNYWtlIHRoZSBvbGQgdGFiIGluYWN0aXZlLlxuICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyICRvbGRDb250ZW50ID0gJGNvbnRlbnRcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHZhcmlhYmxlcyB3aXRoIHRoZSBuZXcgbGluayBhbmQgY29udGVudFxuICAgICAgICAkYWN0aXZlID0gJCh0aGlzKTtcbiAgICAgICAgJGNvbnRlbnQgPSAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSk7XG4gICAgICAgICRsaW5rcyA9ICR0aGlzLmZpbmQoJ2xpLnRhYiBhJyk7XG4gICAgICAgIHZhciBhY3RpdmVSZWN0ID0gJGFjdGl2ZS5wb3NpdGlvbigpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHRhYiBhY3RpdmUuXG4gICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBwcmV2X2luZGV4ID0gaW5kZXg7XG4gICAgICAgIGluZGV4ID0gJGxpbmtzLmluZGV4KCQodGhpcykpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoYW5nZSB1cmwgdG8gY3VycmVudCB0YWJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSAkYWN0aXZlLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAvLyBTd2FwIGNvbnRlbnRcbiAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XG4gICAgICAgICAgaWYgKCR0YWJzX2NvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAkdGFic19jb250ZW50LmNhcm91c2VsKCdzZXQnLCBpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgkY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAkY29udGVudC5zaG93KCk7XG4gICAgICAgICAgICAkY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25TaG93KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMub25TaG93LmNhbGwodGhpcywgJGNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkb2xkQ29udGVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICEkb2xkQ29udGVudC5pcygkY29udGVudCkpIHtcbiAgICAgICAgICAgICRvbGRDb250ZW50LmhpZGUoKTtcbiAgICAgICAgICAgICRvbGRDb250ZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBjbGlja2VkIHN0YXRlXG4gICAgICAgIGNsaWNrZWRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpeyBjbGlja2VkID0gZmFsc2U7IH0sIHRyYW5zaXRpb24pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JcbiAgICAgICAgYW5pbWF0ZUluZGljYXRvcihwcmV2X2luZGV4KTtcblxuICAgICAgICAvLyBQcmV2ZW50IHRoZSBhbmNob3IncyBkZWZhdWx0IGNsaWNrIGFjdGlvblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIH0sXG4gICAgc2VsZWN0X3RhYiA6IGZ1bmN0aW9uKCBpZCApIHtcbiAgICAgIHRoaXMuZmluZCgnYVtocmVmPVwiIycgKyBpZCArICdcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfTtcblxuICAkLmZuLnRhYnMgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcbiAgICBpZiAoIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSApIHtcbiAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudGFicycgKTtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCd1bC50YWJzJykudGFicygpO1xuICB9KTtcbn0oIGpRdWVyeSApKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgICAkLmZuLnRvb2x0aXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIHRpbWVvdXQgPSBudWxsLFxuICAgICAgbWFyZ2luID0gNTtcblxuICAgICAgLy8gRGVmYXVsdHNcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZGVsYXk6IDM1MCxcbiAgICAgICAgdG9vbHRpcDogJycsXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgaHRtbDogZmFsc2VcbiAgICAgIH07XG5cbiAgICAgIC8vIFJlbW92ZSB0b29sdGlwIGZyb20gdGhlIGFjdGl2YXRvclxuICAgICAgaWYgKG9wdGlvbnMgPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJyMnICsgJCh0aGlzKS5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkucmVtb3ZlKCk7XG4gICAgICAgICAgJCh0aGlzKS5vZmYoJ21vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRvb2x0aXBJZCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcbiAgICAgICAgdmFyIG9yaWdpbiA9ICQodGhpcyk7XG5cbiAgICAgICAgLy8gRGVzdHJveSBvbGQgdG9vbHRpcFxuICAgICAgICBpZiAob3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcpKSB7XG4gICAgICAgICAgJCgnIycgKyBvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJykpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcsIHRvb2x0aXBJZCk7XG5cbiAgICAgICAgLy8gR2V0IGF0dHJpYnV0ZXMuXG4gICAgICAgIHZhciBhbGxvd0h0bWwsXG4gICAgICAgICAgICB0b29sdGlwRGVsYXksXG4gICAgICAgICAgICB0b29sdGlwUG9zaXRpb24sXG4gICAgICAgICAgICB0b29sdGlwVGV4dCxcbiAgICAgICAgICAgIHRvb2x0aXBFbCxcbiAgICAgICAgICAgIGJhY2tkcm9wO1xuICAgICAgICB2YXIgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGFsbG93SHRtbCA9IG9yaWdpbi5hdHRyKCdkYXRhLWh0bWwnKSA/IG9yaWdpbi5hdHRyKCdkYXRhLWh0bWwnKSA9PT0gJ3RydWUnIDogb3B0aW9ucy5odG1sO1xuICAgICAgICAgIHRvb2x0aXBEZWxheSA9IG9yaWdpbi5hdHRyKCdkYXRhLWRlbGF5Jyk7XG4gICAgICAgICAgdG9vbHRpcERlbGF5ID0gKHRvb2x0aXBEZWxheSA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBEZWxheSA9PT0gJycpID9cbiAgICAgICAgICAgICAgb3B0aW9ucy5kZWxheSA6IHRvb2x0aXBEZWxheTtcbiAgICAgICAgICB0b29sdGlwUG9zaXRpb24gPSBvcmlnaW4uYXR0cignZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9ICh0b29sdGlwUG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCB0b29sdGlwUG9zaXRpb24gPT09ICcnKSA/XG4gICAgICAgICAgICAgIG9wdGlvbnMucG9zaXRpb24gOiB0b29sdGlwUG9zaXRpb247XG4gICAgICAgICAgdG9vbHRpcFRleHQgPSBvcmlnaW4uYXR0cignZGF0YS10b29sdGlwJyk7XG4gICAgICAgICAgdG9vbHRpcFRleHQgPSAodG9vbHRpcFRleHQgPT09IHVuZGVmaW5lZCB8fCB0b29sdGlwVGV4dCA9PT0gJycpID9cbiAgICAgICAgICAgICAgb3B0aW9ucy50b29sdGlwIDogdG9vbHRpcFRleHQ7XG4gICAgICAgIH07XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoKTtcblxuICAgICAgICB2YXIgcmVuZGVyVG9vbHRpcEVsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHRvb2x0aXAgPSAkKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiPjwvZGl2PicpO1xuXG4gICAgICAgICAgLy8gQ3JlYXRlIFRleHQgc3BhblxuICAgICAgICAgIGlmIChhbGxvd0h0bWwpIHtcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLmh0bWwodG9vbHRpcFRleHQpO1xuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLnRleHQodG9vbHRpcFRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgdG9vbHRpcC5hcHBlbmQodG9vbHRpcFRleHQpXG4gICAgICAgICAgICAuYXBwZW5kVG8oJCgnYm9keScpKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgdG9vbHRpcElkKTtcblxuICAgICAgICAgIC8vIENyZWF0ZSBiYWNrZHJvcFxuICAgICAgICAgIGJhY2tkcm9wID0gJCgnPGRpdiBjbGFzcz1cImJhY2tkcm9wXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgYmFja2Ryb3AuYXBwZW5kVG8odG9vbHRpcCk7XG4gICAgICAgICAgcmV0dXJuIHRvb2x0aXA7XG4gICAgICAgIH07XG4gICAgICAgIHRvb2x0aXBFbCA9IHJlbmRlclRvb2x0aXBFbCgpO1xuXG4gICAgICAgIC8vIERlc3Ryb3kgcHJldmlvdXNseSBiaW5kZWQgZXZlbnRzXG4gICAgICAgIG9yaWdpbi5vZmYoJ21vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXAnKTtcbiAgICAgICAgLy8gTW91c2UgSW5cbiAgICAgICAgdmFyIHN0YXJ0ZWQgPSBmYWxzZSwgdGltZW91dFJlZjtcbiAgICAgICAgb3JpZ2luLm9uKHsnbW91c2VlbnRlci50b29sdGlwJzogZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHZhciBzaG93VG9vbHRpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcygpO1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0b29sdGlwRWwudmVsb2NpdHkoJ3N0b3AnKTtcbiAgICAgICAgICAgIGJhY2tkcm9wLnZlbG9jaXR5KCdzdG9wJyk7XG4gICAgICAgICAgICB0b29sdGlwRWwuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnLCBsZWZ0OiAnMHB4JywgdG9wOiAnMHB4JyB9KTtcblxuICAgICAgICAgICAgLy8gVG9vbHRpcCBwb3NpdGlvbmluZ1xuICAgICAgICAgICAgdmFyIG9yaWdpbldpZHRoID0gb3JpZ2luLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBvcmlnaW5IZWlnaHQgPSBvcmlnaW4ub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB0b29sdGlwSGVpZ2h0ID0gdG9vbHRpcEVsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcFdpZHRoID0gdG9vbHRpcEVsLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIHZhciB0b29sdGlwVmVydGljYWxNb3ZlbWVudCA9ICcwcHgnO1xuICAgICAgICAgICAgdmFyIHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQgPSAnMHB4JztcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcE9mZnNldFdpZHRoID0gYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgYmFja2Ryb3BPZmZzZXRIZWlnaHQgPSBiYWNrZHJvcFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgc2NhbGVYRmFjdG9yID0gODtcbiAgICAgICAgICAgIHZhciBzY2FsZVlGYWN0b3IgPSA4O1xuICAgICAgICAgICAgdmFyIHNjYWxlRmFjdG9yID0gMDtcbiAgICAgICAgICAgIHZhciB0YXJnZXRUb3AsIHRhcmdldExlZnQsIG5ld0Nvb3JkaW5hdGVzO1xuXG4gICAgICAgICAgICBpZiAodG9vbHRpcFBvc2l0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICAgICAgICAgIC8vIFRvcCBQb3NpdGlvblxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wIC0gdG9vbHRpcEhlaWdodCAtIG1hcmdpbjtcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRvb2x0aXBXaWR0aC8yO1xuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuICAgICAgICAgICAgICB0b29sdGlwVmVydGljYWxNb3ZlbWVudCA9ICctMTBweCc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTRweCAxNHB4IDAgMCcsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodCxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAodG9vbHRpcFdpZHRoLzIpIC0gKGJhY2tkcm9wT2Zmc2V0V2lkdGgvMilcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMZWZ0IFBvc2l0aW9uXG4gICAgICAgICAgICBlbHNlIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRvb2x0aXBIZWlnaHQvMjtcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICBvcmlnaW4ub2Zmc2V0KCkubGVmdCAtIHRvb2x0aXBXaWR0aCAtIG1hcmdpbjtcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcblxuICAgICAgICAgICAgICB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJy0xMHB4JztcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgICB0b3A6ICctN3B4JyxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE0cHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE0cHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE0cHggMCAwIDE0cHgnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzk1JSA1MCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodC8yLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRvb2x0aXBXaWR0aFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJpZ2h0IFBvc2l0aW9uXG4gICAgICAgICAgICBlbHNlIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luSGVpZ2h0LzIgLSB0b29sdGlwSGVpZ2h0LzI7XG4gICAgICAgICAgICAgIHRhcmdldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdCArIG9yaWdpbldpZHRoICsgbWFyZ2luO1xuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuXG4gICAgICAgICAgICAgIHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQgPSAnKzEwcHgnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcwIDE0cHggMTRweCAwJyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1JSA1MCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodC8yLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEJvdHRvbSBQb3NpdGlvblxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luLm91dGVySGVpZ2h0KCkgKyBtYXJnaW47XG4gICAgICAgICAgICAgIHRhcmdldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdCArIG9yaWdpbldpZHRoLzIgLSB0b29sdGlwV2lkdGgvMjtcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcbiAgICAgICAgICAgICAgdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQgPSAnKzEwcHgnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICh0b29sdGlwV2lkdGgvMikgLSAoYmFja2Ryb3BPZmZzZXRXaWR0aC8yKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHRvb3B0aXAgY3NzIHBsYWNlbWVudFxuICAgICAgICAgICAgdG9vbHRpcEVsLmNzcyh7XG4gICAgICAgICAgICAgIHRvcDogbmV3Q29vcmRpbmF0ZXMueSxcbiAgICAgICAgICAgICAgbGVmdDogbmV3Q29vcmRpbmF0ZXMueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBTY2FsZSB0byBmaWxsXG4gICAgICAgICAgICBzY2FsZVhGYWN0b3IgPSBNYXRoLlNRUlQyICogdG9vbHRpcFdpZHRoIC8gcGFyc2VJbnQoYmFja2Ryb3BPZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICBzY2FsZVlGYWN0b3IgPSBNYXRoLlNRUlQyICogdG9vbHRpcEhlaWdodCAvIHBhcnNlSW50KGJhY2tkcm9wT2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgICAgIHNjYWxlRmFjdG9yID0gTWF0aC5tYXgoc2NhbGVYRmFjdG9yLCBzY2FsZVlGYWN0b3IpO1xuXG4gICAgICAgICAgICB0b29sdGlwRWwudmVsb2NpdHkoeyB0cmFuc2xhdGVZOiB0b29sdGlwVmVydGljYWxNb3ZlbWVudCwgdHJhbnNsYXRlWDogdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudH0sIHsgZHVyYXRpb246IDM1MCwgcXVldWU6IGZhbHNlIH0pXG4gICAgICAgICAgICAgIC52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogMzAwLCBkZWxheTogNTAsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pXG4gICAgICAgICAgICAgIC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246IDU1LCBkZWxheTogMCwgcXVldWU6IGZhbHNlfSlcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtzY2FsZVg6IHNjYWxlRmFjdG9yLCBzY2FsZVk6IHNjYWxlRmFjdG9yfSwge2R1cmF0aW9uOiAzMDAsIGRlbGF5OiAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRpbWVvdXRSZWYgPSBzZXRUaW1lb3V0KHNob3dUb29sdGlwLCB0b29sdGlwRGVsYXkpOyAvLyBFbmQgSW50ZXJ2YWxcblxuICAgICAgICAvLyBNb3VzZSBPdXRcbiAgICAgICAgfSxcbiAgICAgICAgJ21vdXNlbGVhdmUudG9vbHRpcCc6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gUmVzZXQgU3RhdGVcbiAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYpO1xuXG4gICAgICAgICAgLy8gQW5pbWF0ZSBiYWNrXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCwgdHJhbnNsYXRlWTogMCwgdHJhbnNsYXRlWDogMH0sIHsgZHVyYXRpb246IDIyNSwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCBzY2FsZVg6IDEsIHNjYWxlWTogMX0sIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjoyMjUsXG4gICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XG4gICAgICAgICAgICAgICAgICB0b29sdGlwRWwuY3NzKHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XG4gICAgICAgICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7fVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LDIyNSk7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcG9zaXRpb25XaXRoaW5TY3JlZW4gPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIG5ld1ggPSB4O1xuICAgIHZhciBuZXdZID0geTtcblxuICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgbmV3WCA9IDQ7XG4gICAgfSBlbHNlIGlmIChuZXdYICsgd2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgbmV3WCAtPSBuZXdYICsgd2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICBpZiAobmV3WSA8IDApIHtcbiAgICAgIG5ld1kgPSA0O1xuICAgIH0gZWxzZSBpZiAobmV3WSArIGhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCArICQod2luZG93KS5zY3JvbGxUb3ApIHtcbiAgICAgIG5ld1kgLT0gbmV3WSArIGhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4ge3g6IG5ld1gsIHk6IG5ld1l9O1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICQoJy50b29sdGlwcGVkJykudG9vbHRpcCgpO1xuICAgfSk7XG59KCBqUXVlcnkgKSk7XG47LyohXG4gKiBXYXZlcyB2MC42LjRcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbjsoZnVuY3Rpb24od2luZG93KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFdhdmVzID0gV2F2ZXMgfHwge307XG4gICAgdmFyICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcblxuICAgIC8vIEZpbmQgZXhhY3QgcG9zaXRpb24gb2YgZWxlbWVudFxuICAgIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbSkge1xuICAgICAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtKSB7XG4gICAgICAgIHZhciBkb2NFbGVtLCB3aW4sXG4gICAgICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfSxcbiAgICAgICAgICAgIGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG4gICAgICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luID0gZ2V0V2luZG93KGRvYyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICAgICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydFN0eWxlKG9iaikge1xuICAgICAgICB2YXIgc3R5bGUgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBhIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShhKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IChhICsgJzonICsgb2JqW2FdICsgJzsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICB2YXIgRWZmZWN0ID0ge1xuXG4gICAgICAgIC8vIEVmZmVjdCBkZWxheVxuICAgICAgICBkdXJhdGlvbjogNzUwLFxuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKGUsIGVsZW1lbnQpIHtcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSByaWdodCBjbGlja1xuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50IHx8IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSByaXBwbGVcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSAnd2F2ZXMtcmlwcGxlJztcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHJpcHBsZSk7XG5cbiAgICAgICAgICAgIC8vIEdldCBjbGljayBjb29yZGluYXRlIGFuZCBlbGVtZW50IHdpdGRoXG4gICAgICAgICAgICB2YXIgcG9zICAgICAgICAgPSBvZmZzZXQoZWwpO1xuICAgICAgICAgICAgdmFyIHJlbGF0aXZlWSAgID0gKGUucGFnZVkgLSBwb3MudG9wKTtcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVggICA9IChlLnBhZ2VYIC0gcG9zLmxlZnQpO1xuICAgICAgICAgICAgdmFyIHNjYWxlICAgICAgID0gJ3NjYWxlKCcrKChlbC5jbGllbnRXaWR0aCAvIDEwMCkgKiAxMCkrJyknO1xuXG4gICAgICAgICAgICAvLyBTdXBwb3J0IGZvciB0b3VjaCBkZXZpY2VzXG4gICAgICAgICAgICBpZiAoJ3RvdWNoZXMnIGluIGUpIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVZICAgPSAoZS50b3VjaGVzWzBdLnBhZ2VZIC0gcG9zLnRvcCk7XG4gICAgICAgICAgICAgIHJlbGF0aXZlWCAgID0gKGUudG91Y2hlc1swXS5wYWdlWCAtIHBvcy5sZWZ0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXR0YWNoIGRhdGEgdG8gZWxlbWVudFxuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1ob2xkJywgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJywgc2NhbGUpO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgcmVsYXRpdmVYKTtcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHJlbGF0aXZlWSk7XG5cbiAgICAgICAgICAgIC8vIFNldCByaXBwbGUgcG9zaXRpb25cbiAgICAgICAgICAgIHZhciByaXBwbGVTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAndG9wJzogcmVsYXRpdmVZKydweCcsXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiByZWxhdGl2ZVgrJ3B4J1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUgKyAnIHdhdmVzLW5vdHJhbnNpdGlvbic7XG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUucmVwbGFjZSgnd2F2ZXMtbm90cmFuc2l0aW9uJywgJycpO1xuXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgcmlwcGxlXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctbXMtdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGUudHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZS5vcGFjaXR5ICAgPSAnMSc7XG5cbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uJ10gICAgPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nXSAgICAgID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gICAgICAgICA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG5cbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gICAgICA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddICAgICAgICAgPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG5cbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNodXAoZSk7XG5cbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBlbC5jbGllbnRXaWR0aCAqIDEuNDtcblxuICAgICAgICAgICAgLy8gR2V0IGZpcnN0IHJpcHBsZVxuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgcmlwcGxlcyA9IGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdmVzLXJpcHBsZScpO1xuICAgICAgICAgICAgaWYgKHJpcHBsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJpcHBsZSA9IHJpcHBsZXNbcmlwcGxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVYICAgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVkgICA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICAgICAgICAgICAgdmFyIHNjYWxlICAgICAgID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS1zY2FsZScpO1xuXG4gICAgICAgICAgICAvLyBHZXQgZGVsYXkgYmVldHdlZW4gbW91c2Vkb3duIGFuZCBtb3VzZSBsZWF2ZVxuICAgICAgICAgICAgdmFyIGRpZmYgPSBEYXRlLm5vdygpIC0gTnVtYmVyKHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG9sZCcpKTtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IDM1MCAtIGRpZmY7XG5cbiAgICAgICAgICAgIGlmIChkZWxheSA8IDApIHtcbiAgICAgICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZhZGUgb3V0IHJpcHBsZSBhZnRlciBkZWxheVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiByZWxhdGl2ZVkrJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiByZWxhdGl2ZVgrJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMCcsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgICAgICctbW96LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICAgICAnLW8tdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUoc3R5bGUpKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIEVmZmVjdC5kdXJhdGlvbik7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gTGl0dGxlIGhhY2sgdG8gbWFrZSA8aW5wdXQ+IGNhbiBwZXJmb3JtIHdhdmVzIGVmZmVjdFxuICAgICAgICB3cmFwSW5wdXQ6IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGVsZW1lbnRzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudHNbYV07XG5cbiAgICAgICAgICAgICAgICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGlucHV0IGFscmVhZHkgaGF2ZSBwYXJlbnQganVzdCBwYXNzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpJyAmJiBwYXJlbnQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBQdXQgZWxlbWVudCBjbGFzcyBhbmQgc3R5bGUgdG8gdGhlIHNwZWNpZmllZCBwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyB3YXZlcy1pbnB1dC13cmFwcGVyJztcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFN0eWxlID0gZWwuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGVsZW1lbnRTdHlsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3dhdmVzLWJ1dHRvbi1pbnB1dCc7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQdXQgZWxlbWVudCBhcyBjaGlsZFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKHdyYXBwZXIsIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBtb3VzZWRvd24gZXZlbnQgZm9yIDUwMG1zIGR1cmluZyBhbmQgYWZ0ZXIgdG91Y2hcbiAgICAgKi9cbiAgICB2YXIgVG91Y2hIYW5kbGVyID0ge1xuICAgICAgICAvKiB1c2VzIGFuIGludGVnZXIgcmF0aGVyIHRoYW4gYm9vbCBzbyB0aGVyZSdzIG5vIGlzc3VlcyB3aXRoXG4gICAgICAgICAqIG5lZWRpbmcgdG8gY2xlYXIgdGltZW91dHMgaWYgYW5vdGhlciB0b3VjaCBldmVudCBvY2N1cnJlZFxuICAgICAgICAgKiB3aXRoaW4gdGhlIDUwMG1zLiBDYW5ub3QgbW91c2V1cCBiZXR3ZWVuIHRvdWNoc3RhcnQgYW5kXG4gICAgICAgICAqIHRvdWNoZW5kLCBub3IgaW4gdGhlIDUwMG1zIGFmdGVyIHRvdWNoZW5kLiAqL1xuICAgICAgICB0b3VjaGVzOiAwLFxuICAgICAgICBhbGxvd0V2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgYWxsb3cgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgICAgICAgICBUb3VjaEhhbmRsZXIudG91Y2hlcyArPSAxOyAvL3B1c2hcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUb3VjaEhhbmRsZXIudG91Y2hlcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzIC09IDE7IC8vcG9wIGFmdGVyIDUwMG1zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xuICAgICAgICAgICAgICAgIGFsbG93ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhbGxvdztcbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2h1cDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgVG91Y2hIYW5kbGVyLmFsbG93RXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBEZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlciBmb3IgLndhdmVzLWVmZmVjdCBlbGVtZW50LlxuICAgICAqIHJldHVybnMgbnVsbCB3aGVuIC53YXZlcy1lZmZlY3QgZWxlbWVudCBub3QgaW4gXCJjbGljayB0cmVlXCJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRXYXZlc0VmZmVjdEVsZW1lbnQoZSkge1xuICAgICAgICBpZiAoVG91Y2hIYW5kbGVyLmFsbG93RXZlbnQoZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgICAgICB3aGlsZSAodGFyZ2V0LnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpICYmIHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignd2F2ZXMtZWZmZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnd2F2ZXMtZWZmZWN0JykpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWJibGUgdGhlIGNsaWNrIGFuZCBzaG93IGVmZmVjdCBpZiAud2F2ZXMtZWZmZWN0IGVsZW0gd2FzIGZvdW5kXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvd0VmZmVjdChlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZ2V0V2F2ZXNFZmZlY3RFbGVtZW50KGUpO1xuXG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBFZmZlY3Quc2hvdyhlLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFdhdmVzLmRpc3BsYXlFZmZlY3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmICgnZHVyYXRpb24nIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIEVmZmVjdC5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvL1dyYXAgaW5wdXQgaW5zaWRlIDxpPiB0YWdcbiAgICAgICAgRWZmZWN0LndyYXBJbnB1dCgkJCgnLndhdmVzLWVmZmVjdCcpKTtcblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIFdhdmVzIHRvIGFuIGlucHV0IGVsZW1lbnQgKG9yIGFueSBlbGVtZW50IHdoaWNoIGRvZXNuJ3RcbiAgICAgKiBidWJibGUgbW91c2V1cC9tb3VzZWRvd24gZXZlbnRzKS5cbiAgICAgKiAgIEludGVuZGVkIHRvIGJlIHVzZWQgd2l0aCBkeW5hbWljYWxseSBsb2FkZWQgZm9ybXMvaW5wdXRzLCBvclxuICAgICAqIHdoZXJlIHRoZSB1c2VyIGRvZXNuJ3Qgd2FudCBhIGRlbGVnYXRlZCBjbGljayBoYW5kbGVyLlxuICAgICAqL1xuICAgIFdhdmVzLmF0dGFjaCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgLy9GVVRVUkU6IGF1dG9tYXRpY2FsbHkgYWRkIHdhdmVzIGNsYXNzZXMgYW5kIGFsbG93IHVzZXJzXG4gICAgICAgIC8vIHRvIHNwZWNpZnkgdGhlbSB3aXRoIGFuIG9wdGlvbnMgcGFyYW0/IEVnLiBsaWdodC9jbGFzc2ljL2J1dHRvblxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIEVmZmVjdC53cmFwSW5wdXQoW2VsZW1lbnRdKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgd2luZG93LldhdmVzID0gV2F2ZXM7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIFdhdmVzLmRpc3BsYXlFZmZlY3QoKTtcbiAgICB9LCBmYWxzZSk7XG5cbn0pKHdpbmRvdyk7XG47TWF0ZXJpYWxpemUudG9hc3QgPSBmdW5jdGlvbiAobWVzc2FnZSwgZGlzcGxheUxlbmd0aCwgY2xhc3NOYW1lLCBjb21wbGV0ZUNhbGxiYWNrKSB7XG4gIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcIlwiO1xuXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtY29udGFpbmVyJyk7XG5cbiAgLy8gQ3JlYXRlIHRvYXN0IGNvbnRhaW5lciBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICBpZiAoY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgLy8gY3JlYXRlIG5vdGlmaWNhdGlvbiBjb250YWluZXJcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAndG9hc3QtY29udGFpbmVyJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBTZWxlY3QgYW5kIGFwcGVuZCB0b2FzdFxuICB2YXIgbmV3VG9hc3QgPSBjcmVhdGVUb2FzdChtZXNzYWdlKTtcblxuICAvLyBvbmx5IGFwcGVuZCB0b2FzdCBpZiBtZXNzYWdlIGlzIG5vdCB1bmRlZmluZWRcbiAgaWYobWVzc2FnZSl7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvYXN0KTtcbiAgfVxuXG4gIG5ld1RvYXN0LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gIC8vIEFuaW1hdGUgdG9hc3QgaW5cbiAgVmVsKG5ld1RvYXN0LCB7dHJhbnNsYXRlWTogJy0zNXB4JywgIG9wYWNpdHk6IDEgfSwge2R1cmF0aW9uOiAzMDAsXG4gICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICBxdWV1ZTogZmFsc2V9KTtcblxuICAvLyBBbGxvd3MgdGltZXIgdG8gYmUgcGF1c2Ugd2hpbGUgYmVpbmcgcGFubmVkXG4gIHZhciB0aW1lTGVmdCA9IGRpc3BsYXlMZW5ndGg7XG4gIHZhciBjb3VudGVySW50ZXJ2YWw7XG4gIGlmICh0aW1lTGVmdCAhPSBudWxsKSAge1xuICAgIGNvdW50ZXJJbnRlcnZhbCA9IHNldEludGVydmFsIChmdW5jdGlvbigpe1xuICAgICAgaWYgKG5ld1RvYXN0LnBhcmVudE5vZGUgPT09IG51bGwpXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGNvdW50ZXJJbnRlcnZhbCk7XG5cbiAgICAgIC8vIElmIHRvYXN0IGlzIG5vdCBiZWluZyBkcmFnZ2VkLCBkZWNyZWFzZSBpdHMgdGltZSByZW1haW5pbmdcbiAgICAgIGlmICghbmV3VG9hc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYW5uaW5nJykpIHtcbiAgICAgICAgdGltZUxlZnQgLT0gMjA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgIC8vIEFuaW1hdGUgdG9hc3Qgb3V0XG4gICAgICAgIFZlbChuZXdUb2FzdCwge1wib3BhY2l0eVwiOiAwLCBtYXJnaW5Ub3A6ICctNDBweCd9LCB7IGR1cmF0aW9uOiAzNzUsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYodHlwZW9mKGNvbXBsZXRlQ2FsbGJhY2spID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAvLyBSZW1vdmUgdG9hc3QgYWZ0ZXIgaXQgdGltZXMgb3V0XG4gICAgICAgICAgICAgIHRoaXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoY291bnRlckludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCAyMCk7XG4gIH1cblxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9hc3QoaHRtbCkge1xuXG4gICAgLy8gQ3JlYXRlIHRvYXN0XG4gICAgdmFyIHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9hc3QuY2xhc3NMaXN0LmFkZCgndG9hc3QnKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgY291bnQgPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIC8vIElmIHR5cGUgb2YgcGFyYW1ldGVyIGlzIEhUTUwgRWxlbWVudFxuICAgIGlmICggdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gaHRtbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogaHRtbCAmJiB0eXBlb2YgaHRtbCA9PT0gXCJvYmplY3RcIiAmJiBodG1sICE9PSBudWxsICYmIGh0bWwubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIGh0bWwubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4pIHtcbiAgICAgIHRvYXN0LmFwcGVuZENoaWxkKGh0bWwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChodG1sIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAvLyBDaGVjayBpZiBpdCBpcyBqUXVlcnkgb2JqZWN0XG4gICAgICB0b2FzdC5hcHBlbmRDaGlsZChodG1sWzBdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBJbnNlcnQgYXMgdGV4dDtcbiAgICAgIHRvYXN0LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxuICAgIC8vIEJpbmQgaGFtbWVyXG4gICAgdmFyIGhhbW1lckhhbmRsZXIgPSBuZXcgSGFtbWVyKHRvYXN0LCB7cHJldmVudF9kZWZhdWx0OiBmYWxzZX0pO1xuICAgIGhhbW1lckhhbmRsZXIub24oJ3BhbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICAgIHZhciBhY3RpdmF0aW9uRGlzdGFuY2UgPSA4MDtcblxuICAgICAgLy8gQ2hhbmdlIHRvYXN0IHN0YXRlXG4gICAgICBpZiAoIXRvYXN0LmNsYXNzTGlzdC5jb250YWlucygncGFubmluZycpKXtcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LmFkZCgncGFubmluZycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3BhY2l0eVBlcmNlbnQgPSAxLU1hdGguYWJzKGRlbHRhWCAvIGFjdGl2YXRpb25EaXN0YW5jZSk7XG4gICAgICBpZiAob3BhY2l0eVBlcmNlbnQgPCAwKVxuICAgICAgICBvcGFjaXR5UGVyY2VudCA9IDA7XG5cbiAgICAgIFZlbCh0b2FzdCwge2xlZnQ6IGRlbHRhWCwgb3BhY2l0eTogb3BhY2l0eVBlcmNlbnQgfSwge2R1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcblxuICAgIH0pO1xuXG4gICAgaGFtbWVySGFuZGxlci5vbigncGFuZW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgICAgdmFyIGFjdGl2YXRpb25EaXN0YW5jZSA9IDgwO1xuXG4gICAgICAvLyBJZiB0b2FzdCBkcmFnZ2VkIHBhc3QgYWN0aXZhdGlvbiBwb2ludFxuICAgICAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiBhY3RpdmF0aW9uRGlzdGFuY2UpIHtcbiAgICAgICAgVmVsKHRvYXN0LCB7bWFyZ2luVG9wOiAnLTQwcHgnfSwgeyBkdXJhdGlvbjogMzc1LFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZih0eXBlb2YoY29tcGxldGVDYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2FzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKCdwYW5uaW5nJyk7XG4gICAgICAgIC8vIFB1dCB0b2FzdCBiYWNrIGludG8gb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgVmVsKHRvYXN0LCB7IGxlZnQ6IDAsIG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcbiAgICAgICAgICBxdWV1ZTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0b2FzdDtcbiAgfVxufTtcbjsoZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBtZW51V2lkdGg6IDMwMCxcbiAgICAgICAgZWRnZTogJ2xlZnQnLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG1lbnVJZCA9ICR0aGlzLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJyk7XG4gICAgICAgIHZhciBtZW51ID0gJChcIiNcIisgbWVudUlkKTtcblxuICAgICAgICAvLyBTZXQgdG8gd2lkdGhcbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVdpZHRoICE9IDMwMCkge1xuICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBUb3VjaCBBcmVhXG4gICAgICAgIHZhciAkZHJhZ1RhcmdldCA9ICQoJy5kcmFnLXRhcmdldFtkYXRhLXNpZGVuYXY9XCInICsgbWVudUlkICsgJ1wiXScpO1xuICAgICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAvLyBSZWdlbmVyYXRlIGRyYWdUYXJnZXRcbiAgICAgICAgICBpZiAoJGRyYWdUYXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkZHJhZ1RhcmdldCA9ICQoJzxkaXYgY2xhc3M9XCJkcmFnLXRhcmdldFwiPjwvZGl2PicpLmF0dHIoJ2RhdGEtc2lkZW5hdicsIG1lbnVJZCk7XG4gICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkZHJhZ1RhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRyYWdUYXJnZXQgPSAkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09ICdsZWZ0Jykge1xuICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgtMTAwJSknKTtcbiAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeydsZWZ0JzogMH0pOyAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG1lbnUuYWRkQ2xhc3MoJ3JpZ2h0LWFsaWduZWQnKSAvLyBDaGFuZ2UgdGV4dC1hbGlnbm1lbnQgdG8gcmlnaHRcbiAgICAgICAgICAgIC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsncmlnaHQnOiAwfSk7IC8vIEFkZCBUb3VjaCBBcmVhXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBmaXhlZCBzaWRlbmF2LCBicmluZyBtZW51IG91dFxuICAgICAgICBpZiAobWVudS5oYXNDbGFzcygnZml4ZWQnKSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XG4gICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBXaW5kb3cgcmVzaXplIHRvIHJlc2V0IG9uIGxhcmdlIHNjcmVlbnMgZml4ZWRcbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcbiAgICAgICAgICAkKHdpbmRvdykucmVzaXplKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICAgICAgICAvLyBDbG9zZSBtZW51IGlmIHdpbmRvdyBpcyByZXNpemVkIGJpZ2dlciB0aGFuIDk5MiBhbmQgdXNlciBoYXMgZml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICBpZiAoJCgnI3NpZGVuYXYtb3ZlcmxheScpLmxlbmd0aCAhPT0gMCAmJiBtZW51T3V0KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVudSh0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgICAgIC8vIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWVudU91dCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBjbG9zZU9uQ2xpY2ssIHRoZW4gYWRkIGNsb3NlIGV2ZW50IGZvciBhbGwgYSB0YWdzIGluIHNpZGUgc2lkZU5hdlxuICAgICAgICBpZiAob3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUpIHtcbiAgICAgICAgICBtZW51Lm9uKFwiY2xpY2suaXRlbWNsaWNrXCIsIFwiYTpub3QoLmNvbGxhcHNpYmxlLWhlYWRlcilcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZW1vdmVNZW51ID0gZnVuY3Rpb24ocmVzdG9yZU5hdikge1xuICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgLy8gUmVlbmFibGUgc2Nyb2xsaW5nXG4gICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJyNzaWRlbmF2LW92ZXJsYXknKS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBwaGFudG9tIGRpdlxuICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJycsIHJpZ2h0OiAnJywgbGVmdDogJzAnfSk7XG4gICAgICAgICAgICBtZW51LnZlbG9jaXR5KFxuICAgICAgICAgICAgICB7J3RyYW5zbGF0ZVgnOiAnLTEwMCUnfSxcbiAgICAgICAgICAgICAgeyBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlTmF2ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgRml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHBoYW50b20gZGl2XG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnJywgcmlnaHQ6ICcwJywgbGVmdDogJyd9KTtcbiAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoXG4gICAgICAgICAgICAgIHsndHJhbnNsYXRlWCc6ICcxMDAlJ30sXG4gICAgICAgICAgICAgIHsgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzdG9yZU5hdiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIEZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgICAgICAgbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50XG4gICAgICAgIHZhciBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBtZW51T3V0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgJGRyYWdUYXJnZXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChtZW51T3V0KSB7XG4gICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRkcmFnVGFyZ2V0LmhhbW1lcih7XG4gICAgICAgICAgICBwcmV2ZW50X2RlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSkuYmluZCgncGFuJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09IFwidG91Y2hcIikge1xuXG4gICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLmdlc3R1cmUuZGlyZWN0aW9uO1xuICAgICAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5jZW50ZXIueDtcbiAgICAgICAgICAgICAgdmFyIHkgPSBlLmdlc3R1cmUuY2VudGVyLnk7XG4gICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuXG4gICAgICAgICAgICAgIC8vIERpc2FibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnI3NpZGVuYXYtb3ZlcmxheScpO1xuICAgICAgICAgICAgICB2YXIgb2xkV2lkdGggPSAkYm9keS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICRib2R5LndpZHRoKG9sZFdpZHRoKTtcblxuICAgICAgICAgICAgICAvLyBJZiBvdmVybGF5IGRvZXMgbm90IGV4aXN0LCBjcmVhdGUgb25lIGFuZCBpZiBpdCBpcyBjbGlja2VkLCBjbG9zZSBtZW51XG4gICAgICAgICAgICAgIGlmICgkb3ZlcmxheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJzaWRlbmF2LW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS5jc3MoJ29wYWNpdHknLCAwKS5jbGljayggZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRvdmVybGF5KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kYXJpZXNcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPiBvcHRpb25zLm1lbnVXaWR0aCkgeyB4ID0gb3B0aW9ucy5tZW51V2lkdGg7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4IDwgMCkgeyB4ID0gMDsgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoeCA8IChvcHRpb25zLm1lbnVXaWR0aCAvIDIpKSB7IG1lbnVPdXQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPj0gKG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHsgbWVudU91dCA9IHRydWU7IH1cbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArICh4IC0gb3B0aW9ucy5tZW51V2lkdGgpICsgJ3B4KScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIExlZnQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHggPCAod2luZG93LmlubmVyV2lkdGggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpKSB7XG4gICAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA+PSAod2luZG93LmlubmVyV2lkdGggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpKSB7XG4gICAgICAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRQb3MgPSAoeCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgcmlnaHRQb3MgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgcmlnaHRQb3MgKyAncHgpJyk7XG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIC8vIFBlcmNlbnRhZ2Ugb3ZlcmxheVxuICAgICAgICAgICAgICB2YXIgb3ZlcmxheVBlcmM7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlQZXJjID0geCAvIG9wdGlvbnMubWVudVdpZHRoO1xuICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiBvdmVybGF5UGVyYyB9LCB7ZHVyYXRpb246IDEwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlQZXJjID0gTWF0aC5hYnMoKHggLSB3aW5kb3cuaW5uZXJXaWR0aCkgLyBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IG92ZXJsYXlQZXJjIH0sIHtkdXJhdGlvbjogMTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pLmJpbmQoJ3BhbmVuZCcsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PSBcInRvdWNoXCIpIHtcbiAgICAgICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnI3NpZGVuYXYtb3ZlcmxheScpO1xuICAgICAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcbiAgICAgICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuY2VudGVyLng7XG4gICAgICAgICAgICAgIHZhciBsZWZ0UG9zID0geCAtIG9wdGlvbnMubWVudVdpZHRoO1xuICAgICAgICAgICAgICB2YXIgcmlnaHRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyO1xuICAgICAgICAgICAgICBpZiAobGVmdFBvcyA+IDAgKSB7XG4gICAgICAgICAgICAgICAgbGVmdFBvcyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0UG9zID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdmVsb2NpdHlYIDw9IDAuMyB0aGVuIHRoZSB1c2VyIGlzIGZsaW5naW5nIHRoZSBtZW51IGNsb3NlZCBzbyBpZ25vcmUgbWVudU91dFxuICAgICAgICAgICAgICAgIGlmICgobWVudU91dCAmJiB2ZWxvY2l0eVggPD0gMC4zKSB8fCB2ZWxvY2l0eVggPCAtMC41KSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gbWVudSB0byBvcGVuXG4gICAgICAgICAgICAgICAgICBpZiAobGVmdFBvcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCBsZWZ0UG9zXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMSB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzUwJScsIHJpZ2h0OiAwLCBsZWZ0OiAnJ30pO1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFtZW51T3V0IHx8IHZlbG9jaXR5WCA+IDAuMykge1xuICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcnXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIC8vIFNsaWRlIG1lbnUgY2xvc2VkXG4gICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFstMSAqIG9wdGlvbnMubWVudVdpZHRoIC0gMTAsIGxlZnRQb3NdfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMCB9LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzEwcHgnLCByaWdodDogJycsIGxlZnQ6IDB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChtZW51T3V0ICYmIHZlbG9jaXR5WCA+PSAtMC4zKSB8fCB2ZWxvY2l0eVggPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBtZW51IHRvIG9wZW5cbiAgICAgICAgICAgICAgICAgIGlmIChyaWdodFBvcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCByaWdodFBvc119LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDEgfSwge2R1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogJycsIGxlZnQ6IDB9KTtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbWVudU91dCB8fCB2ZWxvY2l0eVggPCAtMC4zKSB7XG4gICAgICAgICAgICAgICAgICAvLyBFbmFibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAvLyBTbGlkZSBtZW51IGNsb3NlZFxuICAgICAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbb3B0aW9ucy5tZW51V2lkdGggKyAxMCwgcmlnaHRQb3NdfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMCB9LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzEwcHgnLCByaWdodDogMCwgbGVmdDogJyd9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHRoaXMub2ZmKCdjbGljay5zaWRlbmF2Jykub24oJ2NsaWNrLnNpZGVuYXYnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobWVudU91dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJzaWRlbmF2LW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgIHZhciBvbGRXaWR0aCA9ICRib2R5LmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAkYm9keS53aWR0aChvbGRXaWR0aCk7XG5cbiAgICAgICAgICAgIC8vIFB1c2ggY3VycmVudCBkcmFnIHRhcmdldCBvbiB0b3Agb2YgRE9NIHRyZWVcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGRyYWdUYXJnZXQpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzUwJScsIHJpZ2h0OiAwLCBsZWZ0OiAnJ30pO1xuICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCAtMSAqIG9wdGlvbnMubWVudVdpZHRoXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogJycsIGxlZnQ6IDB9KTtcbiAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbMCwgb3B0aW9ucy5tZW51V2lkdGhdfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRvdmVybGF5LmNzcygnb3BhY2l0eScsIDApXG4gICAgICAgICAgICAuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJG92ZXJsYXkpO1xuICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cblxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRvdmVybGF5ID0gJCgnI3NpZGVuYXYtb3ZlcmxheScpO1xuICAgICAgdmFyICRkcmFnVGFyZ2V0ID0gJCgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykgKyAnXCJdJyk7XG4gICAgICAkb3ZlcmxheS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgJGRyYWdUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAkKHRoaXMpLm9mZignY2xpY2snKTtcbiAgICAgICRvdmVybGF5LnJlbW92ZSgpO1xuICAgIH0sXG4gICAgc2hvdyA6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0sXG4gICAgaGlkZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCgnI3NpZGVuYXYtb3ZlcmxheScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9O1xuXG5cbiAgJC5mbi5zaWRlTmF2ID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZGVOYXYnICk7XG4gICAgfVxuICB9OyAvLyBQbHVnaW4gZW5kXG59KCBqUXVlcnkgKSk7XG47LyoqXG4gKiBFeHRlbmQganF1ZXJ5IHdpdGggYSBzY3JvbGxzcHkgcGx1Z2luLlxuICogVGhpcyB3YXRjaGVzIHRoZSB3aW5kb3cgc2Nyb2xsIGFuZCBmaXJlcyBldmVudHMgd2hlbiBlbGVtZW50cyBhcmUgc2Nyb2xsZWQgaW50byB2aWV3cG9ydC5cbiAqXG4gKiB0aHJvdHRsZSgpIGFuZCBnZXRUaW1lKCkgdGFrZW4gZnJvbSBVbmRlcnNjb3JlLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcbiAqXG4gKiBAYXV0aG9yIENvcHlyaWdodCAyMDEzIEpvaG4gU21hcnRcbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vdGhlc21hcnQvanF1ZXJ5LXNjcm9sbHNweS9tYXN0ZXIvTElDRU5TRVxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlc21hcnRcbiAqIEB2ZXJzaW9uIDAuMS4yXG4gKi9cbihmdW5jdGlvbigkKSB7XG5cblx0dmFyIGpXaW5kb3cgPSAkKHdpbmRvdyk7XG5cdHZhciBlbGVtZW50cyA9IFtdO1xuXHR2YXIgZWxlbWVudHNJblZpZXcgPSBbXTtcblx0dmFyIGlzU3B5aW5nID0gZmFsc2U7XG5cdHZhciB0aWNrcyA9IDA7XG5cdHZhciB1bmlxdWVfaWQgPSAxO1xuXHR2YXIgb2Zmc2V0ID0ge1xuXHRcdHRvcCA6IDAsXG5cdFx0cmlnaHQgOiAwLFxuXHRcdGJvdHRvbSA6IDAsXG5cdFx0bGVmdCA6IDAsXG5cdH1cblxuXHQvKipcblx0ICogRmluZCBlbGVtZW50cyB0aGF0IGFyZSB3aXRoaW4gdGhlIGJvdW5kYXJ5XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0b3Bcblx0ICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21cblx0ICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcblx0ICogQHJldHVybiB7alF1ZXJ5fVx0XHRBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHNcblx0ICovXG5cdGZ1bmN0aW9uIGZpbmRFbGVtZW50cyh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpIHtcblx0XHR2YXIgaGl0cyA9ICQoKTtcblx0XHQkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdGlmIChlbGVtZW50LmhlaWdodCgpID4gMCkge1xuXHRcdFx0XHR2YXIgZWxUb3AgPSBlbGVtZW50Lm9mZnNldCgpLnRvcCxcblx0XHRcdFx0XHRlbExlZnQgPSBlbGVtZW50Lm9mZnNldCgpLmxlZnQsXG5cdFx0XHRcdFx0ZWxSaWdodCA9IGVsTGVmdCArIGVsZW1lbnQud2lkdGgoKSxcblx0XHRcdFx0XHRlbEJvdHRvbSA9IGVsVG9wICsgZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0XHR2YXIgaXNJbnRlcnNlY3QgPSAhKGVsTGVmdCA+IHJpZ2h0IHx8XG5cdFx0XHRcdFx0ZWxSaWdodCA8IGxlZnQgfHxcblx0XHRcdFx0XHRlbFRvcCA+IGJvdHRvbSB8fFxuXHRcdFx0XHRcdGVsQm90dG9tIDwgdG9wKTtcblxuXHRcdFx0XHRpZiAoaXNJbnRlcnNlY3QpIHtcblx0XHRcdFx0XHRoaXRzLnB1c2goZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBoaXRzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyB0aGUgd2luZG93XG5cdCAqL1xuXHRmdW5jdGlvbiBvblNjcm9sbChzY3JvbGxPZmZzZXQpIHtcblx0XHQvLyB1bmlxdWUgdGljayBpZFxuXHRcdCsrdGlja3M7XG5cblx0XHQvLyB2aWV3cG9ydCByZWN0YW5nbGVcblx0XHR2YXIgdG9wID0galdpbmRvdy5zY3JvbGxUb3AoKSxcblx0XHRcdGxlZnQgPSBqV2luZG93LnNjcm9sbExlZnQoKSxcblx0XHRcdHJpZ2h0ID0gbGVmdCArIGpXaW5kb3cud2lkdGgoKSxcblx0XHRcdGJvdHRvbSA9IHRvcCArIGpXaW5kb3cuaGVpZ2h0KCk7XG5cblx0XHQvLyBkZXRlcm1pbmUgd2hpY2ggZWxlbWVudHMgYXJlIGluIHZpZXdcblx0XHR2YXIgaW50ZXJzZWN0aW9ucyA9IGZpbmRFbGVtZW50cyh0b3Arb2Zmc2V0LnRvcCArIHNjcm9sbE9mZnNldCB8fCAyMDAsIHJpZ2h0K29mZnNldC5yaWdodCwgYm90dG9tK29mZnNldC5ib3R0b20sIGxlZnQrb2Zmc2V0LmxlZnQpO1xuXHRcdCQuZWFjaChpbnRlcnNlY3Rpb25zLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cblx0XHRcdHZhciBsYXN0VGljayA9IGVsZW1lbnQuZGF0YSgnc2Nyb2xsU3B5OnRpY2tzJyk7XG5cdFx0XHRpZiAodHlwZW9mIGxhc3RUaWNrICE9ICdudW1iZXInKSB7XG5cdFx0XHRcdC8vIGVudGVyZWQgaW50byB2aWV3XG5cdFx0XHRcdGVsZW1lbnQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbFNweTplbnRlcicpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB1cGRhdGUgdGljayBpZFxuXHRcdFx0ZWxlbWVudC5kYXRhKCdzY3JvbGxTcHk6dGlja3MnLCB0aWNrcyk7XG5cdFx0fSk7XG5cblx0XHQvLyBkZXRlcm1pbmUgd2hpY2ggZWxlbWVudHMgYXJlIG5vIGxvbmdlciBpbiB2aWV3XG5cdFx0JC5lYWNoKGVsZW1lbnRzSW5WaWV3LCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHR2YXIgbGFzdFRpY2sgPSBlbGVtZW50LmRhdGEoJ3Njcm9sbFNweTp0aWNrcycpO1xuXHRcdFx0aWYgKHR5cGVvZiBsYXN0VGljayA9PSAnbnVtYmVyJyAmJiBsYXN0VGljayAhPT0gdGlja3MpIHtcblx0XHRcdFx0Ly8gZXhpdGVkIGZyb20gdmlld1xuXHRcdFx0XHRlbGVtZW50LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxTcHk6ZXhpdCcpO1xuXHRcdFx0XHRlbGVtZW50LmRhdGEoJ3Njcm9sbFNweTp0aWNrcycsIG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gcmVtZW1iZXIgZWxlbWVudHMgaW4gdmlldyBmb3IgbmV4dCB0aWNrXG5cdFx0ZWxlbWVudHNJblZpZXcgPSBpbnRlcnNlY3Rpb25zO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG5cdCovXG5cdGZ1bmN0aW9uIG9uV2luU2l6ZSgpIHtcblx0XHRqV2luZG93LnRyaWdnZXIoJ3Njcm9sbFNweTp3aW5TaXplJyk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBFbmFibGVzIFNjcm9sbFNweSB1c2luZyBhIHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fHN0cmluZ30gc2VsZWN0b3IgIFRoZSBlbGVtZW50cyBjb2xsZWN0aW9uLCBvciBhIHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1x0T3B0aW9uYWwuXG4gICAgICAgIHRocm90dGxlIDogbnVtYmVyIC0+IHNjcm9sbHNweSB0aHJvdHRsaW5nLiBEZWZhdWx0OiAxMDAgbXNcbiAgICAgICAgb2Zmc2V0VG9wIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHRvcC4gRGVmYXVsdDogMFxuICAgICAgICBvZmZzZXRSaWdodCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSByaWdodC4gRGVmYXVsdDogMFxuICAgICAgICBvZmZzZXRCb3R0b20gOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gYm90dG9tLiBEZWZhdWx0OiAwXG4gICAgICAgIG9mZnNldExlZnQgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gbGVmdC4gRGVmYXVsdDogMFxuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fVxuXHQgKi9cblx0JC5zY3JvbGxTcHkgPSBmdW5jdGlvbihzZWxlY3Rvciwgb3B0aW9ucykge1xuXHQgIHZhciBkZWZhdWx0cyA9IHtcblx0XHRcdHRocm90dGxlOiAxMDAsXG5cdFx0XHRzY3JvbGxPZmZzZXQ6IDIwMCAvLyBvZmZzZXQgLSAyMDAgYWxsb3dzIGVsZW1lbnRzIG5lYXIgYm90dG9tIG9mIHBhZ2UgdG8gc2Nyb2xsXG4gICAgfTtcbiAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cdFx0dmFyIHZpc2libGUgPSBbXTtcblx0XHRzZWxlY3RvciA9ICQoc2VsZWN0b3IpO1xuXHRcdHNlbGVjdG9yLmVhY2goZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudHMucHVzaCgkKGVsZW1lbnQpKTtcblx0XHRcdCQoZWxlbWVudCkuZGF0YShcInNjcm9sbFNweTppZFwiLCBpKTtcblx0XHRcdC8vIFNtb290aCBzY3JvbGwgdG8gc2VjdGlvblxuXHRcdCAgJCgnYVtocmVmPVwiIycgKyAkKGVsZW1lbnQpLmF0dHIoJ2lkJykgKyAnXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdCAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ICAgIHZhciBvZmZzZXQgPSAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkub2Zmc2V0KCkudG9wICsgMTtcblx0ICAgIFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IG9mZnNldCAtIG9wdGlvbnMuc2Nyb2xsT2Zmc2V0IH0sIHtkdXJhdGlvbjogNDAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRDdWJpYyd9KTtcblx0XHQgIH0pO1xuXHRcdH0pO1xuXG5cdFx0b2Zmc2V0LnRvcCA9IG9wdGlvbnMub2Zmc2V0VG9wIHx8IDA7XG5cdFx0b2Zmc2V0LnJpZ2h0ID0gb3B0aW9ucy5vZmZzZXRSaWdodCB8fCAwO1xuXHRcdG9mZnNldC5ib3R0b20gPSBvcHRpb25zLm9mZnNldEJvdHRvbSB8fCAwO1xuXHRcdG9mZnNldC5sZWZ0ID0gb3B0aW9ucy5vZmZzZXRMZWZ0IHx8IDA7XG5cblx0XHR2YXIgdGhyb3R0bGVkU2Nyb2xsID0gTWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKSB7XG5cdFx0XHRvblNjcm9sbChvcHRpb25zLnNjcm9sbE9mZnNldCk7XG5cdFx0fSwgb3B0aW9ucy50aHJvdHRsZSB8fCAxMDApO1xuXHRcdHZhciByZWFkeVNjcm9sbCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHQkKGRvY3VtZW50KS5yZWFkeSh0aHJvdHRsZWRTY3JvbGwpO1xuXHRcdH07XG5cblx0XHRpZiAoIWlzU3B5aW5nKSB7XG5cdFx0XHRqV2luZG93Lm9uKCdzY3JvbGwnLCByZWFkeVNjcm9sbCk7XG5cdFx0XHRqV2luZG93Lm9uKCdyZXNpemUnLCByZWFkeVNjcm9sbCk7XG5cdFx0XHRpc1NweWluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gcGVyZm9ybSBhIHNjYW4gb25jZSwgYWZ0ZXIgY3VycmVudCBleGVjdXRpb24gY29udGV4dCwgYW5kIGFmdGVyIGRvbSBpcyByZWFkeVxuXHRcdHNldFRpbWVvdXQocmVhZHlTY3JvbGwsIDApO1xuXG5cblx0XHRzZWxlY3Rvci5vbignc2Nyb2xsU3B5OmVudGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2aXNpYmxlID0gJC5ncmVwKHZpc2libGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdCAgICAgIHJldHVybiB2YWx1ZS5oZWlnaHQoKSAhPSAwO1xuXHQgICAgfSk7XG5cblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdGlmICh2aXNpYmxlWzBdKSB7XG5cdFx0XHRcdCQoJ2FbaHJlZj1cIiMnICsgdmlzaWJsZVswXS5hdHRyKCdpZCcpICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0aWYgKCR0aGlzLmRhdGEoJ3Njcm9sbFNweTppZCcpIDwgdmlzaWJsZVswXS5kYXRhKCdzY3JvbGxTcHk6aWQnKSkge1xuXHRcdFx0XHRcdHZpc2libGUudW5zaGlmdCgkKHRoaXMpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR2aXNpYmxlLnB1c2goJCh0aGlzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR2aXNpYmxlLnB1c2goJCh0aGlzKSk7XG5cdFx0XHR9XG5cblxuXHRcdFx0JCgnYVtocmVmPVwiIycgKyB2aXNpYmxlWzBdLmF0dHIoJ2lkJykgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH0pO1xuXHRcdHNlbGVjdG9yLm9uKCdzY3JvbGxTcHk6ZXhpdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmlzaWJsZSA9ICQuZ3JlcCh2aXNpYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcblx0ICAgIH0pO1xuXG5cdFx0XHRpZiAodmlzaWJsZVswXSkge1xuXHRcdFx0XHQkKCdhW2hyZWY9XCIjJyArIHZpc2libGVbMF0uYXR0cignaWQnKSArICdcIl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdHZpc2libGUgPSAkLmdyZXAodmlzaWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gdmFsdWUuYXR0cignaWQnKSAhPSAkdGhpcy5hdHRyKCdpZCcpO1xuXHQgICAgICB9KTtcblx0ICAgICAgaWYgKHZpc2libGVbMF0pIHsgLy8gQ2hlY2sgaWYgZW1wdHlcblx0XHRcdFx0XHQkKCdhW2hyZWY9XCIjJyArIHZpc2libGVbMF0uYXR0cignaWQnKSArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdCAgICAgIH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBzZWxlY3Rvcjtcblx0fTtcblxuXHQvKipcblx0ICogTGlzdGVuIGZvciB3aW5kb3cgcmVzaXplIGV2ZW50c1xuXHQgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcdFx0XHRcdFx0XHRPcHRpb25hbC4gU2V0IHsgdGhyb3R0bGU6IG51bWJlciB9IHRvIGNoYW5nZSB0aHJvdHRsaW5nLiBEZWZhdWx0OiAxMDAgbXNcblx0ICogQHJldHVybnMge2pRdWVyeX1cdFx0JCh3aW5kb3cpXG5cdCAqL1xuXHQkLndpblNpemVTcHkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0JC53aW5TaXplU3B5ID0gZnVuY3Rpb24oKSB7IHJldHVybiBqV2luZG93OyB9OyAvLyBsb2NrIGZyb20gbXVsdGlwbGUgY2FsbHNcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7XG5cdFx0XHR0aHJvdHRsZTogMTAwXG5cdFx0fTtcblx0XHRyZXR1cm4galdpbmRvdy5vbigncmVzaXplJywgTWF0ZXJpYWxpemUudGhyb3R0bGUob25XaW5TaXplLCBvcHRpb25zLnRocm90dGxlIHx8IDEwMCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbmFibGVzIFNjcm9sbFNweSBvbiBhIGNvbGxlY3Rpb24gb2YgZWxlbWVudHNcblx0ICogZS5nLiAkKCcuc2Nyb2xsU3B5Jykuc2Nyb2xsU3B5KClcblx0ICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXHRPcHRpb25hbC5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aHJvdHRsZSA6IG51bWJlciAtPiBzY3JvbGxzcHkgdGhyb3R0bGluZy4gRGVmYXVsdDogMTAwIG1zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0VG9wIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHRvcC4gRGVmYXVsdDogMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldFJpZ2h0IDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHJpZ2h0LiBEZWZhdWx0OiAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0Qm90dG9tIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIGJvdHRvbS4gRGVmYXVsdDogMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldExlZnQgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gbGVmdC4gRGVmYXVsdDogMFxuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fVxuXHQgKi9cblx0JC5mbi5zY3JvbGxTcHkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0cmV0dXJuICQuc2Nyb2xsU3B5KCQodGhpcyksIG9wdGlvbnMpO1xuXHR9O1xuXG59KShqUXVlcnkpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBsYWJlbHMgb2YgdGV4dCBmaWVsZHNcbiAgICBNYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5wdXRfc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhJztcbiAgICAgICQoaW5wdXRfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkubGVuZ3RoID4gMCB8fCBlbGVtZW50LmF1dG9mb2N1cyB8fCAkdGhpcy5hdHRyKCdwbGFjZWhvbGRlcicpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoJChlbGVtZW50KVswXS52YWxpZGl0eSkge1xuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnLCAkKGVsZW1lbnQpWzBdLnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBUZXh0IGJhc2VkIGlucHV0c1xuICAgIHZhciBpbnB1dF9zZWxlY3RvciA9ICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWEnO1xuXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBmb3JtIGF1dG8gY29tcGxldGVcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgaW5wdXRfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCQodGhpcykudmFsKCkubGVuZ3RoICE9PSAwIHx8ICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgdmFsaWRhdGVfZmllbGQoJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYWN0aXZlIGlmIGlucHV0IGVsZW1lbnQgaGFzIGJlZW4gcHJlLXBvcHVsYXRlZCBvbiBkb2N1bWVudCByZWFkeVxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgTWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcygpO1xuICAgIH0pO1xuXG4gICAgLy8gSFRNTCBET00gRk9STSBSRVNFVCBoYW5kbGluZ1xuICAgICQoZG9jdW1lbnQpLm9uKCdyZXNldCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBmb3JtUmVzZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgIGlmIChmb3JtUmVzZXQuaXMoJ2Zvcm0nKSkge1xuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ3ZhbGlkJykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoaW5wdXRfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3ZhbHVlJykgPT09ICcnKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2V0IHNlbGVjdFxuICAgICAgICBmb3JtUmVzZXQuZmluZCgnc2VsZWN0LmluaXRpYWxpemVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHJlc2V0X3RleHQgPSBmb3JtUmVzZXQuZmluZCgnb3B0aW9uW3NlbGVjdGVkXScpLnRleHQoKTtcbiAgICAgICAgICBmb3JtUmVzZXQuc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnZhbChyZXNldF90ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYWN0aXZlIHdoZW4gZWxlbWVudCBoYXMgZm9jdXNcbiAgICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwsIC5wcmVmaXgnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignYmx1cicsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGlucHV0RWxlbWVudCA9ICQodGhpcyk7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIi5wcmVmaXhcIjtcblxuICAgICAgaWYgKCRpbnB1dEVsZW1lbnQudmFsKCkubGVuZ3RoID09PSAwICYmICRpbnB1dEVsZW1lbnRbMF0udmFsaWRpdHkuYmFkSW5wdXQgIT09IHRydWUgJiYgJGlucHV0RWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2VsZWN0b3IgKz0gXCIsIGxhYmVsXCI7XG4gICAgICB9XG5cbiAgICAgICRpbnB1dEVsZW1lbnQuc2libGluZ3Moc2VsZWN0b3IpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgdmFsaWRhdGVfZmllbGQoJGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cudmFsaWRhdGVfZmllbGQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIHZhciBoYXNMZW5ndGggPSBvYmplY3QuYXR0cignZGF0YS1sZW5ndGgnKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgdmFyIGxlbkF0dHIgPSBwYXJzZUludChvYmplY3QuYXR0cignZGF0YS1sZW5ndGgnKSk7XG4gICAgICB2YXIgbGVuID0gb2JqZWN0LnZhbCgpLmxlbmd0aDtcblxuICAgICAgaWYgKG9iamVjdC52YWwoKS5sZW5ndGggPT09IDAgJiYgb2JqZWN0WzBdLnZhbGlkaXR5LmJhZElucHV0ID09PSBmYWxzZSkge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygndmFsaWRhdGUnKSkge1xuICAgICAgICAgIC8vIENoZWNrIGZvciBjaGFyYWN0ZXIgY291bnRlciBhdHRyaWJ1dGVzXG4gICAgICAgICAgaWYgKChvYmplY3QuaXMoJzp2YWxpZCcpICYmIGhhc0xlbmd0aCAmJiAobGVuIDw9IGxlbkF0dHIpKSB8fCAob2JqZWN0LmlzKCc6dmFsaWQnKSAmJiAhaGFzTGVuZ3RoKSkge1xuICAgICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICBvYmplY3QuYWRkQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgb2JqZWN0LmFkZENsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJhZGlvIGFuZCBDaGVja2JveCBmb2N1cyBjbGFzc1xuICAgIHZhciByYWRpb19jaGVja2JveCA9ICdpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF0nO1xuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cC5yYWRpbycsIHJhZGlvX2NoZWNrYm94LCBmdW5jdGlvbihlKSB7XG4gICAgICAvLyBUQUIsIGNoZWNrIGlmIHRhYmJpbmcgdG8gcmFkaW8gb3IgY2hlY2tib3guXG4gICAgICBpZiAoZS53aGljaCA9PT0gOSkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0YWJiZWQnKTtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMub25lKCdibHVyJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGFiYmVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUZXh0YXJlYSBBdXRvIFJlc2l6ZVxuICAgIHZhciBoaWRkZW5EaXYgPSAkKCcuaGlkZGVuZGl2JykuZmlyc3QoKTtcbiAgICBpZiAoIWhpZGRlbkRpdi5sZW5ndGgpIHtcbiAgICAgIGhpZGRlbkRpdiA9ICQoJzxkaXYgY2xhc3M9XCJoaWRkZW5kaXYgY29tbW9uXCI+PC9kaXY+Jyk7XG4gICAgICAkKCdib2R5JykuYXBwZW5kKGhpZGRlbkRpdik7XG4gICAgfVxuICAgIHZhciB0ZXh0X2FyZWFfc2VsZWN0b3IgPSAnLm1hdGVyaWFsaXplLXRleHRhcmVhJztcblxuICAgIGZ1bmN0aW9uIHRleHRhcmVhQXV0b1Jlc2l6ZSgkdGV4dGFyZWEpIHtcbiAgICAgIC8vIFNldCBmb250IHByb3BlcnRpZXMgb2YgaGlkZGVuRGl2XG5cbiAgICAgIHZhciBmb250RmFtaWx5ID0gJHRleHRhcmVhLmNzcygnZm9udC1mYW1pbHknKTtcbiAgICAgIHZhciBmb250U2l6ZSA9ICR0ZXh0YXJlYS5jc3MoJ2ZvbnQtc2l6ZScpO1xuICAgICAgdmFyIGxpbmVIZWlnaHQgPSAkdGV4dGFyZWEuY3NzKCdsaW5lLWhlaWdodCcpO1xuXG4gICAgICBpZiAoZm9udFNpemUpIHsgaGlkZGVuRGl2LmNzcygnZm9udC1zaXplJywgZm9udFNpemUpOyB9XG4gICAgICBpZiAoZm9udEZhbWlseSkgeyBoaWRkZW5EaXYuY3NzKCdmb250LWZhbWlseScsIGZvbnRGYW1pbHkpOyB9XG4gICAgICBpZiAobGluZUhlaWdodCkgeyBoaWRkZW5EaXYuY3NzKCdsaW5lLWhlaWdodCcsIGxpbmVIZWlnaHQpOyB9XG5cbiAgICAgIGlmICgkdGV4dGFyZWEuYXR0cignd3JhcCcpID09PSBcIm9mZlwiKSB7XG4gICAgICAgIGhpZGRlbkRpdi5jc3MoJ292ZXJmbG93LXdyYXAnLCBcIm5vcm1hbFwiKVxuICAgICAgICAgICAgICAgICAuY3NzKCd3aGl0ZS1zcGFjZScsIFwicHJlXCIpO1xuICAgICAgfVxuXG4gICAgICBoaWRkZW5EaXYudGV4dCgkdGV4dGFyZWEudmFsKCkgKyAnXFxuJyk7XG4gICAgICB2YXIgY29udGVudCA9IGhpZGRlbkRpdi5odG1sKCkucmVwbGFjZSgvXFxuL2csICc8YnI+Jyk7XG4gICAgICBoaWRkZW5EaXYuaHRtbChjb250ZW50KTtcblxuXG4gICAgICAvLyBXaGVuIHRleHRhcmVhIGlzIGhpZGRlbiwgd2lkdGggZ29lcyBjcmF6eS5cbiAgICAgIC8vIEFwcHJveGltYXRlIHdpdGggaGFsZiBvZiB3aW5kb3cgc2l6ZVxuXG4gICAgICBpZiAoJHRleHRhcmVhLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgIGhpZGRlbkRpdi5jc3MoJ3dpZHRoJywgJHRleHRhcmVhLndpZHRoKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGhpZGRlbkRpdi5jc3MoJ3dpZHRoJywgJCh3aW5kb3cpLndpZHRoKCkvMik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzaXplIGlmIHRoZSBuZXcgaGVpZ2h0IGlzIGdyZWF0ZXIgdGhhbiB0aGVcbiAgICAgICAqIG9yaWdpbmFsIGhlaWdodCBvZiB0aGUgdGV4dGFyZWFcbiAgICAgICAqL1xuICAgICAgaWYgKCR0ZXh0YXJlYS5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIpIDw9IGhpZGRlbkRpdi5oZWlnaHQoKSkge1xuICAgICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCBoaWRkZW5EaXYuaGVpZ2h0KCkpO1xuICAgICAgfSBlbHNlIGlmICgkdGV4dGFyZWEudmFsKCkubGVuZ3RoIDwgJHRleHRhcmVhLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIikpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluIGNhc2UgdGhlIG5ldyBoZWlnaHQgaXMgbGVzcyB0aGFuIG9yaWdpbmFsIGhlaWdodCwgaXRcbiAgICAgICAgICogbWVhbnMgdGhlIHRleHRhcmVhIGhhcyBsZXNzIHRleHQgdGhhbiBiZWZvcmVcbiAgICAgICAgICogU28gd2Ugc2V0IHRoZSBoZWlnaHQgdG8gdGhlIG9yaWdpbmFsIG9uZVxuICAgICAgICAgKi9cbiAgICAgICAgJHRleHRhcmVhLmNzcygnaGVpZ2h0JywgJHRleHRhcmVhLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIikpO1xuICAgICAgfVxuICAgICAgJHRleHRhcmVhLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIiwgJHRleHRhcmVhLnZhbCgpLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgJCh0ZXh0X2FyZWFfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0ZXh0YXJlYSA9ICQodGhpcyk7XG4gICAgICAvKipcbiAgICAgICAqIEluc3RlYWQgb2YgcmVzaXppbmcgdGV4dGFyZWEgb24gZG9jdW1lbnQgbG9hZCxcbiAgICAgICAqIHN0b3JlIHRoZSBvcmlnaW5hbCBoZWlnaHQgYW5kIHRoZSBvcmlnaW5hbCBsZW5ndGhcbiAgICAgICAqL1xuICAgICAgJHRleHRhcmVhLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIiwgJHRleHRhcmVhLmhlaWdodCgpKTtcbiAgICAgICR0ZXh0YXJlYS5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIsICR0ZXh0YXJlYS52YWwoKS5sZW5ndGgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdrZXl1cCBrZXlkb3duIGF1dG9yZXNpemUnLCB0ZXh0X2FyZWFfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRleHRhcmVhQXV0b1Jlc2l6ZSgkKHRoaXMpKTtcbiAgICB9KTtcblxuICAgIC8vIEZpbGUgSW5wdXQgUGF0aFxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmZpbGUtZmllbGQgaW5wdXRbdHlwZT1cImZpbGVcIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmlsZV9maWVsZCA9ICQodGhpcykuY2xvc2VzdCgnLmZpbGUtZmllbGQnKTtcbiAgICAgIHZhciBwYXRoX2lucHV0ID0gZmlsZV9maWVsZC5maW5kKCdpbnB1dC5maWxlLXBhdGgnKTtcbiAgICAgIHZhciBmaWxlcyAgICAgID0gJCh0aGlzKVswXS5maWxlcztcbiAgICAgIHZhciBmaWxlX25hbWVzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVfbmFtZXMucHVzaChmaWxlc1tpXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHBhdGhfaW5wdXQudmFsKGZpbGVfbmFtZXMuam9pbihcIiwgXCIpKTtcbiAgICAgIHBhdGhfaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG5cbiAgICAvKioqKioqKioqKioqKioqKlxuICAgICogIFJhbmdlIElucHV0ICAqXG4gICAgKioqKioqKioqKioqKioqKi9cblxuICAgIHZhciByYW5nZV90eXBlID0gJ2lucHV0W3R5cGU9cmFuZ2VdJztcbiAgICB2YXIgcmFuZ2VfbW91c2Vkb3duID0gZmFsc2U7XG4gICAgdmFyIGxlZnQ7XG5cbiAgICAkKHJhbmdlX3R5cGUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRodW1iID0gJCgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpO1xuICAgICAgJCh0aGlzKS5hZnRlcih0aHVtYik7XG4gICAgfSk7XG5cbiAgICB2YXIgc2hvd1JhbmdlQnViYmxlID0gZnVuY3Rpb24odGh1bWIpIHtcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhcnNlSW50KHRodW1iLnBhcmVudCgpLmNzcygncGFkZGluZy1sZWZ0JykpO1xuICAgICAgdmFyIG1hcmdpbkxlZnQgPSAoLTcgKyBwYWRkaW5nTGVmdCkgKyAncHgnO1xuICAgICAgdGh1bWIudmVsb2NpdHkoeyBoZWlnaHQ6IFwiMzBweFwiLCB3aWR0aDogXCIzMHB4XCIsIHRvcDogXCItMzBweFwiLCBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0fSwgeyBkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlT3V0RXhwbycgfSk7XG4gICAgfTtcblxuICAgIHZhciBjYWxjUmFuZ2VPZmZzZXQgPSBmdW5jdGlvbihyYW5nZSkge1xuICAgICAgdmFyIHdpZHRoID0gcmFuZ2Uud2lkdGgoKSAtIDE1O1xuICAgICAgdmFyIG1heCA9IHBhcnNlRmxvYXQocmFuZ2UuYXR0cignbWF4JykpO1xuICAgICAgdmFyIG1pbiA9IHBhcnNlRmxvYXQocmFuZ2UuYXR0cignbWluJykpO1xuICAgICAgdmFyIHBlcmNlbnQgPSAocGFyc2VGbG9hdChyYW5nZS52YWwoKSkgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgICByZXR1cm4gcGVyY2VudCAqIHdpZHRoO1xuICAgIH1cblxuICAgIHZhciByYW5nZV93cmFwcGVyID0gJy5yYW5nZS1maWVsZCc7XG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsIHJhbmdlX3R5cGUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuc2libGluZ3MoJy50aHVtYicpO1xuICAgICAgdGh1bWIuZmluZCgnLnZhbHVlJykuaHRtbCgkKHRoaXMpLnZhbCgpKTtcblxuICAgICAgaWYgKCF0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgc2hvd1JhbmdlQnViYmxlKHRodW1iKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoJCh0aGlzKSk7XG4gICAgICB0aHVtYi5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbW91c2Vkb3duIHRvdWNoc3RhcnQnLCByYW5nZV90eXBlLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLnNpYmxpbmdzKCcudGh1bWInKTtcblxuICAgICAgLy8gSWYgdGh1bWIgaW5kaWNhdG9yIGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0XG4gICAgICBpZiAodGh1bWIubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGh1bWIgPSAkKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICAgICQodGhpcykuYWZ0ZXIodGh1bWIpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgaW5kaWNhdG9yIHZhbHVlXG4gICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKCQodGhpcykudmFsKCkpO1xuXG4gICAgICByYW5nZV9tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHNob3dSYW5nZUJ1YmJsZSh0aHVtYik7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnR5cGUgIT09ICdpbnB1dCcpIHtcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoJCh0aGlzKSk7XG4gICAgICAgIHRodW1iLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwIHRvdWNoZW5kJywgcmFuZ2Vfd3JhcHBlciwgZnVuY3Rpb24oKSB7XG4gICAgICByYW5nZV9tb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2lucHV0IG1vdXNlbW92ZSB0b3VjaG1vdmUnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLmNoaWxkcmVuKCcudGh1bWInKTtcbiAgICAgIHZhciBsZWZ0O1xuICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5maW5kKHJhbmdlX3R5cGUpO1xuXG4gICAgICBpZiAocmFuZ2VfbW91c2Vkb3duKSB7XG4gICAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgc2hvd1JhbmdlQnViYmxlKHRodW1iKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY2FsY1JhbmdlT2Zmc2V0KGlucHV0KTtcbiAgICAgICAgdGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIG9mZnNldExlZnQpO1xuICAgICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKHRodW1iLnNpYmxpbmdzKHJhbmdlX3R5cGUpLnZhbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW91dCB0b3VjaGxlYXZlJywgcmFuZ2Vfd3JhcHBlciwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXJhbmdlX21vdXNlZG93bikge1xuXG4gICAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuY2hpbGRyZW4oJy50aHVtYicpO1xuICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUludCgkKHRoaXMpLmNzcygncGFkZGluZy1sZWZ0JykpO1xuICAgICAgICB2YXIgbWFyZ2luTGVmdCA9ICg3ICsgcGFkZGluZ0xlZnQpICsgJ3B4JztcblxuICAgICAgICBpZiAodGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgdGh1bWIudmVsb2NpdHkoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgdG9wOiAnMTBweCcsIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnR9LCB7IGR1cmF0aW9uOiAxMDAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGh1bWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQXV0byBjb21wbGV0ZSBwbHVnaW4gICpcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAkLmZuLmF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAvLyBEZWZhdWx0c1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgbGltaXQ6IEluZmluaXR5LFxuICAgICAgICBvbkF1dG9jb21wbGV0ZTogbnVsbCxcbiAgICAgICAgbWluTGVuZ3RoOiAxXG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGEsXG4gICAgICAgICAgICBjb3VudCA9IDAsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IC0xLFxuICAgICAgICAgICAgb2xkVmFsLFxuICAgICAgICAgICAgJGlucHV0RGl2ID0gJGlucHV0LmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpOyAvLyBEaXYgdG8gYXBwZW5kIG9uXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgZGF0YSBpc24ndCBlbXB0eVxuICAgICAgICBpZiAoISQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xuICAgICAgICAgIHZhciAkYXV0b2NvbXBsZXRlID0gJCgnPHVsIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRlbnQgZHJvcGRvd24tY29udGVudFwiPjwvdWw+Jyk7XG4gICAgICAgICAgdmFyICRvbGRBdXRvY29tcGxldGU7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgYXV0b2NvbXBsZXRlIGVsZW1lbnQuXG4gICAgICAgICAgLy8gUHJldmVudCBkb3VibGUgc3RydWN0dXJlIGluaXQuXG4gICAgICAgICAgaWYgKCRpbnB1dERpdi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRvbGRBdXRvY29tcGxldGUgPSAkaW5wdXREaXYuY2hpbGRyZW4oJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICghJG9sZEF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgJGlucHV0RGl2LmFwcGVuZCgkYXV0b2NvbXBsZXRlKTsgLy8gU2V0IHVsIGluIGJvZHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG9sZEF1dG9jb21wbGV0ZSA9ICRpbnB1dC5uZXh0KCcuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudCcpO1xuICAgICAgICAgICAgaWYgKCEkb2xkQXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAkaW5wdXQuYWZ0ZXIoJGF1dG9jb21wbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkb2xkQXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZSA9ICRvbGRBdXRvY29tcGxldGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGlnaGxpZ2h0IHBhcnRpYWwgbWF0Y2guXG4gICAgICAgICAgdmFyIGhpZ2hsaWdodCA9IGZ1bmN0aW9uKHN0cmluZywgJGVsKSB7XG4gICAgICAgICAgICB2YXIgaW1nID0gJGVsLmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgdmFyIG1hdGNoU3RhcnQgPSAkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIlwiICsgc3RyaW5nLnRvTG93ZXJDYXNlKCkgKyBcIlwiKSxcbiAgICAgICAgICAgICAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyBzdHJpbmcubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBiZWZvcmVNYXRjaCA9ICRlbC50ZXh0KCkuc2xpY2UoMCwgbWF0Y2hTdGFydCksXG4gICAgICAgICAgICAgICAgbWF0Y2hUZXh0ID0gJGVsLnRleHQoKS5zbGljZShtYXRjaFN0YXJ0LCBtYXRjaEVuZCArIDEpLFxuICAgICAgICAgICAgICAgIGFmdGVyTWF0Y2ggPSAkZWwudGV4dCgpLnNsaWNlKG1hdGNoRW5kICsgMSk7XG4gICAgICAgICAgICAkZWwuaHRtbChcIjxzcGFuPlwiICsgYmVmb3JlTWF0Y2ggKyBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlwiICsgbWF0Y2hUZXh0ICsgXCI8L3NwYW4+XCIgKyBhZnRlck1hdGNoICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICAgICAgaWYgKGltZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgJGVsLnByZXBlbmQoaW1nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUmVzZXQgY3VycmVudCBlbGVtZW50IHBvc2l0aW9uXG4gICAgICAgICAgdmFyIHJlc2V0Q3VycmVudEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICAgICAgICAkYXV0b2NvbXBsZXRlLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIGF1dG9jb21wbGV0ZSBlbGVtZW50c1xuICAgICAgICAgIHZhciByZW1vdmVBdXRvY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRhdXRvY29tcGxldGUuZW1wdHkoKTtcbiAgICAgICAgICAgIHJlc2V0Q3VycmVudEVsZW1lbnQoKTtcbiAgICAgICAgICAgIG9sZFZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgJGlucHV0Lm9mZignYmx1ci5hdXRvY29tcGxldGUnKS5vbignYmx1ci5hdXRvY29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gUGVyZm9ybSBzZWFyY2hcbiAgICAgICAgICAkaW5wdXQub2ZmKCdrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlJykub24oJ2tleXVwLmF1dG9jb21wbGV0ZSBmb2N1cy5hdXRvY29tcGxldGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gUmVzZXQgY291bnQuXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgdmFsID0gJGlucHV0LnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIERvbid0IGNhcHR1cmUgZW50ZXIgb3IgYXJyb3cga2V5IHVzYWdlLlxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzIHx8XG4gICAgICAgICAgICAgICAgZS53aGljaCA9PT0gMzggfHxcbiAgICAgICAgICAgICAgICBlLndoaWNoID09PSA0MCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGlucHV0IGlzbid0IGVtcHR5XG4gICAgICAgICAgICBpZiAob2xkVmFsICE9PSB2YWwpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlQXV0b2NvbXBsZXRlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPj0gb3B0aW9ucy5taW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAga2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgIGtleS50b0xvd2VyQ2FzZSgpICE9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQnJlYWsgaWYgcGFzdCBsaW1pdFxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGF1dG9jb21wbGV0ZU9wdGlvbiA9ICQoJzxsaT48L2xpPicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVPcHRpb24uYXBwZW5kKCc8aW1nIHNyYz1cIicrIGRhdGFba2V5XSArJ1wiIGNsYXNzPVwicmlnaHQgY2lyY2xlXCI+PHNwYW4+Jysga2V5ICsnPC9zcGFuPicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoJzxzcGFuPicrIGtleSArJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICRhdXRvY29tcGxldGUuYXBwZW5kKGF1dG9jb21wbGV0ZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodCh2YWwsIGF1dG9jb21wbGV0ZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBvbGRWYWxcbiAgICAgICAgICAgIG9sZFZhbCA9IHZhbDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRpbnB1dC5vZmYoJ2tleWRvd24uYXV0b2NvbXBsZXRlJykub24oJ2tleWRvd24uYXV0b2NvbXBsZXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIEFycm93IGtleXMgYW5kIGVudGVyIGtleSB1c2FnZVxuICAgICAgICAgICAgdmFyIGtleUNvZGUgPSBlLndoaWNoLFxuICAgICAgICAgICAgICAgIGxpRWxlbWVudCxcbiAgICAgICAgICAgICAgICBudW1JdGVtcyA9ICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJ2xpJykubGVuZ3RoLFxuICAgICAgICAgICAgICAgICRhY3RpdmUgPSAkYXV0b2NvbXBsZXRlLmNoaWxkcmVuKCcuYWN0aXZlJykuZmlyc3QoKTtcblxuICAgICAgICAgICAgLy8gc2VsZWN0IGVsZW1lbnQgb24gRW50ZXJcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAxMyAmJiBhY3RpdmVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGxpRWxlbWVudCA9ICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJ2xpJykuZXEoYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICBpZiAobGlFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxpRWxlbWVudC50cmlnZ2VyKCdtb3VzZWRvd24uYXV0b2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwdHVyZSB1cCBhbmQgZG93biBrZXlcbiAgICAgICAgICAgIGlmICgga2V5Q29kZSA9PT0gMzggfHwga2V5Q29kZSA9PT0gNDAgKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMzggJiZcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4LS07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNDAgJiZcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4IDwgKG51bUl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCsrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGlmIChhY3RpdmVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignbGknKS5lcShhY3RpdmVJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBTZXQgaW5wdXQgdmFsdWVcbiAgICAgICAgICAkYXV0b2NvbXBsZXRlLm9uKCdtb3VzZWRvd24uYXV0b2NvbXBsZXRlIHRvdWNoc3RhcnQuYXV0b2NvbXBsZXRlJywgJ2xpJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLnRleHQoKS50cmltKCk7XG4gICAgICAgICAgICAkaW5wdXQudmFsKHRleHQpO1xuICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgcmVtb3ZlQXV0b2NvbXBsZXRlKCk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBvbkF1dG9jb21wbGV0ZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbkF1dG9jb21wbGV0ZSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBvcHRpb25zLm9uQXV0b2NvbXBsZXRlLmNhbGwodGhpcywgdGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgfSk7IC8vIEVuZCBvZiAkKGRvY3VtZW50KS5yZWFkeVxuXG4gIC8qKioqKioqKioqKioqKioqKioqXG4gICAqICBTZWxlY3QgUGx1Z2luICAqXG4gICAqKioqKioqKioqKioqKioqKiovXG4gICQuZm4ubWF0ZXJpYWxfc2VsZWN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG5cbiAgICAgIGlmICgkc2VsZWN0Lmhhc0NsYXNzKCdicm93c2VyLWRlZmF1bHQnKSkge1xuICAgICAgICByZXR1cm47IC8vIENvbnRpbnVlIHRvIG5leHQgKHJldHVybiBmYWxzZSBicmVha3Mgb3V0IG9mIGVudGlyZSBsb29wKVxuICAgICAgfVxuXG4gICAgICB2YXIgbXVsdGlwbGUgPSAkc2VsZWN0LmF0dHIoJ211bHRpcGxlJykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgbGFzdElEID0gJHNlbGVjdC5kYXRhKCdzZWxlY3QtaWQnKTsgLy8gVGVhciBkb3duIHN0cnVjdHVyZSBpZiBTZWxlY3QgbmVlZHMgdG8gYmUgcmVidWlsdFxuXG4gICAgICBpZiAobGFzdElEKSB7XG4gICAgICAgICRzZWxlY3QucGFyZW50KCkuZmluZCgnc3Bhbi5jYXJldCcpLnJlbW92ZSgpO1xuICAgICAgICAkc2VsZWN0LnBhcmVudCgpLmZpbmQoJ2lucHV0JykucmVtb3ZlKCk7XG5cbiAgICAgICAgJHNlbGVjdC51bndyYXAoKTtcbiAgICAgICAgJCgndWwjc2VsZWN0LW9wdGlvbnMtJytsYXN0SUQpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBkZXN0cm95aW5nIHRoZSBzZWxlY3QsIHJlbW92ZSB0aGUgc2VsZWxjdC1pZCBhbmQgcmVzZXQgaXQgdG8gaXQncyB1bmluaXRpYWxpemVkIHN0YXRlLlxuICAgICAgaWYoY2FsbGJhY2sgPT09ICdkZXN0cm95Jykge1xuICAgICAgICAkc2VsZWN0LmRhdGEoJ3NlbGVjdC1pZCcsIG51bGwpLnJlbW92ZUNsYXNzKCdpbml0aWFsaXplZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB1bmlxdWVJRCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcbiAgICAgICRzZWxlY3QuZGF0YSgnc2VsZWN0LWlkJywgdW5pcXVlSUQpO1xuICAgICAgdmFyIHdyYXBwZXIgPSAkKCc8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj48L2Rpdj4nKTtcbiAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdjbGFzcycpKTtcbiAgICAgIHZhciBvcHRpb25zID0gJCgnPHVsIGlkPVwic2VsZWN0LW9wdGlvbnMtJyArIHVuaXF1ZUlEICsnXCIgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50IHNlbGVjdC1kcm9wZG93biAnICsgKG11bHRpcGxlID8gJ211bHRpcGxlLXNlbGVjdC1kcm9wZG93bicgOiAnJykgKyAnXCI+PC91bD4nKSxcbiAgICAgICAgICBzZWxlY3RDaGlsZHJlbiA9ICRzZWxlY3QuY2hpbGRyZW4oJ29wdGlvbiwgb3B0Z3JvdXAnKSxcbiAgICAgICAgICB2YWx1ZXNTZWxlY3RlZCA9IFtdLFxuICAgICAgICAgIG9wdGlvbnNIb3ZlciA9IGZhbHNlO1xuXG4gICAgICB2YXIgbGFiZWwgPSAkc2VsZWN0LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmh0bWwoKSB8fCAkc2VsZWN0LmZpbmQoJ29wdGlvbjpmaXJzdCcpLmh0bWwoKSB8fCBcIlwiO1xuXG4gICAgICAvLyBGdW5jdGlvbiB0aGF0IHJlbmRlcnMgYW5kIGFwcGVuZHMgdGhlIG9wdGlvbiB0YWtpbmcgaW50b1xuICAgICAgLy8gYWNjb3VudCB0eXBlIGFuZCBwb3NzaWJsZSBpbWFnZSBpY29uLlxuICAgICAgdmFyIGFwcGVuZE9wdGlvbldpdGhJY29uID0gZnVuY3Rpb24oc2VsZWN0LCBvcHRpb24sIHR5cGUpIHtcbiAgICAgICAgLy8gQWRkIGRpc2FibGVkIGF0dHIgaWYgZGlzYWJsZWRcbiAgICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSAob3B0aW9uLmlzKCc6ZGlzYWJsZWQnKSkgPyAnZGlzYWJsZWQgJyA6ICcnO1xuICAgICAgICB2YXIgb3B0Z3JvdXBDbGFzcyA9ICh0eXBlID09PSAnb3B0Z3JvdXAtb3B0aW9uJykgPyAnb3B0Z3JvdXAtb3B0aW9uICcgOiAnJztcbiAgICAgICAgdmFyIG11bHRpcGxlQ2hlY2tib3ggPSBtdWx0aXBsZSA/ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCInICsgZGlzYWJsZWRDbGFzcyArICcvPjxsYWJlbD48L2xhYmVsPicgOiAnJztcblxuICAgICAgICAvLyBhZGQgaWNvbnNcbiAgICAgICAgdmFyIGljb25fdXJsID0gb3B0aW9uLmRhdGEoJ2ljb24nKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBvcHRpb24uYXR0cignY2xhc3MnKTtcbiAgICAgICAgaWYgKCEhaWNvbl91cmwpIHtcbiAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSAnJztcbiAgICAgICAgICBpZiAoISFjbGFzc2VzKSBjbGFzc1N0cmluZyA9ICcgY2xhc3M9XCInICsgY2xhc3NlcyArICdcIic7XG5cbiAgICAgICAgICAvLyBDaGVjayBmb3IgbXVsdGlwbGUgdHlwZS5cbiAgICAgICAgICBvcHRpb25zLmFwcGVuZCgkKCc8bGkgY2xhc3M9XCInICsgZGlzYWJsZWRDbGFzcyArIG9wdGdyb3VwQ2xhc3MgKyAnXCI+PGltZyBhbHQ9XCJcIiBzcmM9XCInICsgaWNvbl91cmwgKyAnXCInICsgY2xhc3NTdHJpbmcgKyAnPjxzcGFuPicgKyBtdWx0aXBsZUNoZWNrYm94ICsgb3B0aW9uLmh0bWwoKSArICc8L3NwYW4+PC9saT4nKSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgbXVsdGlwbGUgdHlwZS5cbiAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwiJyArIGRpc2FibGVkQ2xhc3MgKyBvcHRncm91cENsYXNzICsgJ1wiPjxzcGFuPicgKyBtdWx0aXBsZUNoZWNrYm94ICsgb3B0aW9uLmh0bWwoKSArICc8L3NwYW4+PC9saT4nKSk7XG4gICAgICB9O1xuXG4gICAgICAvKiBDcmVhdGUgZHJvcGRvd24gc3RydWN0dXJlLiAqL1xuICAgICAgaWYgKHNlbGVjdENoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3RDaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCdvcHRpb24nKSkge1xuICAgICAgICAgICAgLy8gRGlyZWN0IGRlc2NlbmRhbnQgb3B0aW9uLlxuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgIGFwcGVuZE9wdGlvbldpdGhJY29uKCRzZWxlY3QsICQodGhpcyksICdtdWx0aXBsZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCQodGhpcykuaXMoJ29wdGdyb3VwJykpIHtcbiAgICAgICAgICAgIC8vIE9wdGdyb3VwLlxuICAgICAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIm9wdGdyb3VwXCI+PHNwYW4+JyArICQodGhpcykuYXR0cignbGFiZWwnKSArICc8L3NwYW4+PC9saT4nKSk7XG5cbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgYXBwZW5kT3B0aW9uV2l0aEljb24oJHNlbGVjdCwgJCh0aGlzKSwgJ29wdGdyb3VwLW9wdGlvbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5maW5kKCdsaTpub3QoLm9wdGdyb3VwKScpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIG9wdGlvbiBlbGVtZW50IGlzIGRpc2FibGVkXG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdkaXNhYmxlZCcpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdvcHRncm91cCcpKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgdGhpcykucHJvcCgnY2hlY2tlZCcsIGZ1bmN0aW9uKGksIHYpIHsgcmV0dXJuICF2OyB9KTtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0b2dnbGVFbnRyeUZyb21BcnJheSh2YWx1ZXNTZWxlY3RlZCwgaSwgJHNlbGVjdCk7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnZhbCgkKHRoaXMpLnRleHQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsICQodGhpcykpO1xuICAgICAgICAgICAgJHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShpKS5wcm9wKCdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgb25jaGFuZ2UoKSBldmVudFxuICAgICAgICAgICAgJHNlbGVjdC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKSBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFdyYXAgRWxlbWVudHNcbiAgICAgICRzZWxlY3Qud3JhcCh3cmFwcGVyKTtcbiAgICAgIC8vIEFkZCBTZWxlY3QgRGlzcGxheSBFbGVtZW50XG4gICAgICB2YXIgZHJvcGRvd25JY29uID0gJCgnPHNwYW4gY2xhc3M9XCJjYXJldFwiPiYjOTY2MDs8L3NwYW4+Jyk7XG4gICAgICBpZiAoJHNlbGVjdC5pcygnOmRpc2FibGVkJykpXG4gICAgICAgIGRyb3Bkb3duSWNvbi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuICAgICAgLy8gZXNjYXBlIGRvdWJsZSBxdW90ZXNcbiAgICAgIHZhciBzYW5pdGl6ZWRMYWJlbEh0bWwgPSBsYWJlbC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbiAgICAgIHZhciAkbmV3U2VsZWN0ID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIiByZWFkb25seT1cInRydWVcIiAnICsgKCgkc2VsZWN0LmlzKCc6ZGlzYWJsZWQnKSkgPyAnZGlzYWJsZWQnIDogJycpICsgJyBkYXRhLWFjdGl2YXRlcz1cInNlbGVjdC1vcHRpb25zLScgKyB1bmlxdWVJRCArJ1wiIHZhbHVlPVwiJysgc2FuaXRpemVkTGFiZWxIdG1sICsnXCIvPicpO1xuICAgICAgJHNlbGVjdC5iZWZvcmUoJG5ld1NlbGVjdCk7XG4gICAgICAkbmV3U2VsZWN0LmJlZm9yZShkcm9wZG93bkljb24pO1xuXG4gICAgICAkbmV3U2VsZWN0LmFmdGVyKG9wdGlvbnMpO1xuICAgICAgLy8gQ2hlY2sgaWYgc2VjdGlvbiBlbGVtZW50IGlzIGRpc2FibGVkXG4gICAgICBpZiAoISRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpKSB7XG4gICAgICAgICRuZXdTZWxlY3QuZHJvcGRvd24oeydob3Zlcic6IGZhbHNlfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgdGFiaW5kZXhcbiAgICAgIGlmICgkc2VsZWN0LmF0dHIoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgJCgkbmV3U2VsZWN0WzBdKS5hdHRyKCd0YWJpbmRleCcsICRzZWxlY3QuYXR0cigndGFiaW5kZXgnKSk7XG4gICAgICB9XG5cbiAgICAgICRzZWxlY3QuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG5cbiAgICAgICRuZXdTZWxlY3Qub24oe1xuICAgICAgICAnZm9jdXMnOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgICBpZiAoJCgndWwuc2VsZWN0LWRyb3Bkb3duJykubm90KG9wdGlvbnNbMF0pLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkKCdpbnB1dC5zZWxlY3QtZHJvcGRvd24nKS50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW9wdGlvbnMuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICQodGhpcykudHJpZ2dlcignb3BlbicsIFsnZm9jdXMnXSk7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgaWYgKG11bHRpcGxlICYmIGxhYmVsLmluZGV4T2YoJywnKSA+PSAwKSB7XG4gICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc3BsaXQoJywnKVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaScpLmZpbHRlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkgPT09IGxhYmVsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjbGljayc6IGZ1bmN0aW9uIChlKXtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJG5ld1NlbGVjdC5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBvcHRpb25zLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICBvcHRpb25zSG92ZXIgPSB0cnVlO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvcHRpb25zSG92ZXIgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykub24oe1xuICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbXVsdGlwbGUgJiYgKG9wdGlvbnNIb3ZlciB8fCAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIGluaXRpYWwgbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAkc2VsZWN0LmZpbmQoXCJvcHRpb246c2VsZWN0ZWQ6bm90KDpkaXNhYmxlZClcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuXG4gICAgICAgICAgdG9nZ2xlRW50cnlGcm9tQXJyYXkodmFsdWVzU2VsZWN0ZWQsIGluZGV4LCAkc2VsZWN0KTtcbiAgICAgICAgICBvcHRpb25zLmZpbmQoXCJsaVwiKS5lcShpbmRleCkuZmluZChcIjpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFrZSBvcHRpb24gYXMgc2VsZWN0ZWQgYW5kIHNjcm9sbCB0byBzZWxlY3RlZCBwb3NpdGlvblxuICAgICAgICogQHBhcmFtIHtqUXVlcnl9IGNvbGxlY3Rpb24gIFNlbGVjdCBvcHRpb25zIGpRdWVyeSBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld09wdGlvbiAgZWxlbWVudCBvZiB0aGUgbmV3IG9wdGlvblxuICAgICAgICogQHBhcmFtIHtCb29sZWFufSBmaXJzdEFjdGl2YXRpb24gIElmIG9uIGZpcnN0IGFjdGl2YXRpb24gb2Ygc2VsZWN0XG4gICAgICAgKi9cbiAgICAgIHZhciBhY3RpdmF0ZU9wdGlvbiA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24sIG5ld09wdGlvbiwgZmlyc3RBY3RpdmF0aW9uKSB7XG4gICAgICAgIGlmIChuZXdPcHRpb24pIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9ICQobmV3T3B0aW9uKTtcbiAgICAgICAgICBvcHRpb24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgaWYgKCFtdWx0aXBsZSB8fCAhIWZpcnN0QWN0aXZhdGlvbikge1xuICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxUbyhvcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gQWxsb3cgdXNlciB0byBzZWFyY2ggYnkgdHlwaW5nXG4gICAgICAvLyB0aGlzIGFycmF5IGlzIGNsZWFyZWQgYWZ0ZXIgMSBzZWNvbmRcbiAgICAgIHZhciBmaWx0ZXJRdWVyeSA9IFtdLFxuICAgICAgICAgIG9uS2V5RG93biA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy8gVEFCIC0gc3dpdGNoIHRvIGFub3RoZXIgaW5wdXRcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT0gOSl7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBUlJPVyBET1dOIFdIRU4gU0VMRUNUIElTIENMT1NFRCAtIG9wZW4gc2VsZWN0IG9wdGlvbnNcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT0gNDAgJiYgIW9wdGlvbnMuaXMoJzp2aXNpYmxlJykpe1xuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ29wZW4nKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFTlRFUiBXSEVOIFNFTEVDVCBJUyBDTE9TRUQgLSBzdWJtaXQgZm9ybVxuICAgICAgICAgICAgaWYoZS53aGljaCA9PSAxMyAmJiAhb3B0aW9ucy5pcygnOnZpc2libGUnKSl7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBDQVNFIFdIRU4gVVNFUiBUWVBFIExFVFRFUlNcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgbm9uTGV0dGVycyA9IFs5LDEzLDI3LDM4LDQwXTtcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgJiYgKG5vbkxldHRlcnMuaW5kZXhPZihlLndoaWNoKSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgIGZpbHRlclF1ZXJ5LnB1c2gobGV0dGVyKTtcblxuICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gZmlsdGVyUXVlcnkuam9pbignJyksXG4gICAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cmluZykgPT09IDA7XG4gICAgICAgICAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgICAgICBpZiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFTlRFUiAtIHNlbGVjdCBvcHRpb24gYW5kIGNsb3NlIHdoZW4gc2VsZWN0IG9wdGlvbnMgYXJlIG9wZW5lZFxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcbiAgICAgICAgICAgICAgdmFyIGFjdGl2ZU9wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQ6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICAgICAgaWYoYWN0aXZlT3B0aW9uKXtcbiAgICAgICAgICAgICAgICAkKGFjdGl2ZU9wdGlvbikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFSUk9XIERPV04gLSBtb3ZlIHRvIG5leHQgbm90IGRpc2FibGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gNDApIHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykubmV4dCgnbGk6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRVNDIC0gY2xvc2Ugb3B0aW9uc1xuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMjcpIHtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBUlJPVyBVUCAtIG1vdmUgdG8gcHJldmlvdXMgbm90IGRpc2FibGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMzgpIHtcbiAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLnByZXYoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XG4gICAgICAgICAgICAgIGlmKG5ld09wdGlvbilcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBdXRvbWF0aWNhbHkgY2xlYW4gZmlsdGVyIHF1ZXJ5IHNvIHVzZXIgY2FuIHNlYXJjaCBhZ2FpbiBieSBzdGFydGluZyBsZXR0ZXJzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGZpbHRlclF1ZXJ5ID0gW107IH0sIDEwMDApO1xuICAgICAgICAgIH07XG5cbiAgICAgICRuZXdTZWxlY3Qub24oJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRW50cnlGcm9tQXJyYXkoZW50cmllc0FycmF5LCBlbnRyeUluZGV4LCBzZWxlY3QpIHtcbiAgICAgIHZhciBpbmRleCA9IGVudHJpZXNBcnJheS5pbmRleE9mKGVudHJ5SW5kZXgpLFxuICAgICAgICAgIG5vdEFkZGVkID0gaW5kZXggPT09IC0xO1xuXG4gICAgICBpZiAobm90QWRkZWQpIHtcbiAgICAgICAgZW50cmllc0FycmF5LnB1c2goZW50cnlJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyaWVzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LnNpYmxpbmdzKCd1bC5kcm9wZG93bi1jb250ZW50JykuZmluZCgnbGk6bm90KC5vcHRncm91cCknKS5lcShlbnRyeUluZGV4KS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIC8vIHVzZSBub3RBZGRlZCBpbnN0ZWFkIG9mIHRydWUgKHRvIGRldGVjdCBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkIG9yIG5vdClcbiAgICAgIHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShlbnRyeUluZGV4KS5wcm9wKCdzZWxlY3RlZCcsIG5vdEFkZGVkKTtcbiAgICAgIHNldFZhbHVlVG9JbnB1dChlbnRyaWVzQXJyYXksIHNlbGVjdCk7XG5cbiAgICAgIHJldHVybiBub3RBZGRlZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZVRvSW5wdXQoZW50cmllc0FycmF5LCBzZWxlY3QpIHtcbiAgICAgIHZhciB2YWx1ZSA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgY291bnQgPSBlbnRyaWVzQXJyYXkubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICB2YXIgdGV4dCA9IHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShlbnRyaWVzQXJyYXlbaV0pLnRleHQoKTtcblxuICAgICAgICBpID09PSAwID8gdmFsdWUgKz0gdGV4dCA6IHZhbHVlICs9ICcsICcgKyB0ZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gc2VsZWN0LmZpbmQoJ29wdGlvbjpkaXNhYmxlZCcpLmVxKDApLnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LnNpYmxpbmdzKCdpbnB1dC5zZWxlY3QtZHJvcGRvd24nKS52YWwodmFsdWUpO1xuICAgIH1cbiAgfTtcblxufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuXG4gICAgaW5pdCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgaW5kaWNhdG9yczogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgIHRyYW5zaXRpb246IDUwMCxcbiAgICAgICAgaW50ZXJ2YWw6IDYwMDBcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIEZvciBlYWNoIHNsaWRlciwgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mXG4gICAgICAgIC8vIHdoaWNoIHNsaWRlIGlzIGFjdGl2ZSBhbmQgaXRzIGFzc29jaWF0ZWQgY29udGVudFxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgJHNsaWRlciA9ICR0aGlzLmZpbmQoJ3VsLnNsaWRlcycpLmZpcnN0KCk7XG4gICAgICAgIHZhciAkc2xpZGVzID0gJHNsaWRlci5maW5kKCc+IGxpJyk7XG4gICAgICAgIHZhciAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgdmFyICRhY3RpdmUsICRpbmRpY2F0b3JzLCAkaW50ZXJ2YWw7XG4gICAgICAgIGlmICgkYWN0aXZlX2luZGV4ICE9IC0xKSB7ICRhY3RpdmUgPSAkc2xpZGVzLmVxKCRhY3RpdmVfaW5kZXgpOyB9XG5cbiAgICAgICAgLy8gVHJhbnNpdGlvbnMgdGhlIGNhcHRpb24gZGVwZW5kaW5nIG9uIGFsaWdubWVudFxuICAgICAgICBmdW5jdGlvbiBjYXB0aW9uVHJhbnNpdGlvbihjYXB0aW9uLCBkdXJhdGlvbikge1xuICAgICAgICAgIGlmIChjYXB0aW9uLmhhc0NsYXNzKFwiY2VudGVyLWFsaWduXCIpKSB7XG4gICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiAtMTAwfSwge2R1cmF0aW9uOiBkdXJhdGlvbiwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGNhcHRpb24uaGFzQ2xhc3MoXCJyaWdodC1hbGlnblwiKSkge1xuICAgICAgICAgICAgY2FwdGlvbi52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogMTAwfSwge2R1cmF0aW9uOiBkdXJhdGlvbiwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGNhcHRpb24uaGFzQ2xhc3MoXCJsZWZ0LWFsaWduXCIpKSB7XG4gICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAtMTAwfSwge2R1cmF0aW9uOiBkdXJhdGlvbiwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIHRyYW5zaXRpb24gdGhlIHNsaWRlIHRvIGFueSBpbmRleCBvZiB0aGUgbmV4dCBzbGlkZVxuICAgICAgICBmdW5jdGlvbiBtb3ZlVG9TbGlkZShpbmRleCkge1xuICAgICAgICAgIC8vIFdyYXAgYXJvdW5kIGluZGljZXMuXG4gICAgICAgICAgaWYgKGluZGV4ID49ICRzbGlkZXMubGVuZ3RoKSBpbmRleCA9IDA7XG4gICAgICAgICAgZWxzZSBpZiAoaW5kZXggPCAwKSBpbmRleCA9ICRzbGlkZXMubGVuZ3RoIC0xO1xuXG4gICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG5cbiAgICAgICAgICAvLyBPbmx5IGRvIGlmIGluZGV4IGNoYW5nZXNcbiAgICAgICAgICBpZiAoJGFjdGl2ZV9pbmRleCAhPSBpbmRleCkge1xuICAgICAgICAgICAgJGFjdGl2ZSA9ICRzbGlkZXMuZXEoJGFjdGl2ZV9pbmRleCk7XG4gICAgICAgICAgICAkY2FwdGlvbiA9ICRhY3RpdmUuZmluZCgnLmNhcHRpb24nKTtcblxuICAgICAgICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkYWN0aXZlLnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xpZGVzLm5vdCgnLmFjdGl2ZScpLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAwLCB0cmFuc2xhdGVZOiAwfSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICBjYXB0aW9uVHJhbnNpdGlvbigkY2FwdGlvbiwgb3B0aW9ucy50cmFuc2l0aW9uKTtcblxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yc1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5lcSgkYWN0aXZlX2luZGV4KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAkc2xpZGVzLmVxKGluZGV4KS5maW5kKCcuY2FwdGlvbicpLnZlbG9jaXR5KHtvcGFjaXR5OiAxLCB0cmFuc2xhdGVYOiAwLCB0cmFuc2xhdGVZOiAwfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIGRlbGF5OiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAkc2xpZGVzLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgICAgJGluZGljYXRvcnMuZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgaGVpZ2h0IG9mIHNsaWRlclxuICAgICAgICAvLyBJZiBmdWxsc2NyZWVuLCBkbyBub3RoaW5nXG4gICAgICAgIGlmICghJHRoaXMuaGFzQ2xhc3MoJ2Z1bGxzY3JlZW4nKSkge1xuICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgIC8vIEFkZCBoZWlnaHQgaWYgaW5kaWNhdG9ycyBhcmUgcHJlc2VudFxuICAgICAgICAgICAgJHRoaXMuaGVpZ2h0KG9wdGlvbnMuaGVpZ2h0ICsgNDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICR0aGlzLmhlaWdodChvcHRpb25zLmhlaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICRzbGlkZXIuaGVpZ2h0KG9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gU2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGNhcHRpb25zXG4gICAgICAgICRzbGlkZXMuZmluZCgnLmNhcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYXB0aW9uVHJhbnNpdGlvbigkKHRoaXMpLCAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTW92ZSBpbWcgc3JjIGludG8gYmFja2dyb3VuZC1pbWFnZVxuICAgICAgICAkc2xpZGVzLmZpbmQoJ2ltZycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBwbGFjZWhvbGRlckJhc2U2NCA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQkFQLy8vd0FBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09JztcbiAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdzcmMnKSAhPT0gcGxhY2Vob2xkZXJCYXNlNjQpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgJCh0aGlzKS5hdHRyKCdzcmMnKSArICcpJyApO1xuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCBwbGFjZWhvbGRlckJhc2U2NCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkeW5hbWljYWxseSBhZGQgaW5kaWNhdG9yc1xuICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcbiAgICAgICAgICAkc2xpZGVzLmVhY2goZnVuY3Rpb24oIGluZGV4ICkge1xuICAgICAgICAgICAgdmFyICRpbmRpY2F0b3IgPSAkKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBjbGlja3Mgb24gaW5kaWNhdG9yc1xuICAgICAgICAgICAgJGluZGljYXRvci5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJHNsaWRlci5wYXJlbnQoKTtcbiAgICAgICAgICAgICAgdmFyIGN1cnJfaW5kZXggPSAkcGFyZW50LmZpbmQoJCh0aGlzKSkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoY3Vycl9pbmRleCk7XG5cbiAgICAgICAgICAgICAgLy8gcmVzZXQgaW50ZXJ2YWxcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAkaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICBpZiAoJHNsaWRlcy5sZW5ndGggPT0gJGFjdGl2ZV9pbmRleCArIDEpICRhY3RpdmVfaW5kZXggPSAwOyAvLyBsb29wIHRvIHN0YXJ0XG4gICAgICAgICAgICAgICAgICBlbHNlICRhY3RpdmVfaW5kZXggKz0gMTtcblxuICAgICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCk7XG5cbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRpbmRpY2F0b3JzLmFwcGVuZCgkaW5kaWNhdG9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkdGhpcy5hcHBlbmQoJGluZGljYXRvcnMpO1xuICAgICAgICAgICRpbmRpY2F0b3JzID0gJHRoaXMuZmluZCgndWwuaW5kaWNhdG9ycycpLmZpbmQoJ2xpLmluZGljYXRvci1pdGVtJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjdGl2ZSkge1xuICAgICAgICAgICRhY3RpdmUuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRzbGlkZXMuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJykudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcblxuICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAwO1xuICAgICAgICAgICRhY3RpdmUgPSAkc2xpZGVzLmVxKCRhY3RpdmVfaW5kZXgpO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcbiAgICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAkaW5kaWNhdG9ycy5lcSgkYWN0aXZlX2luZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRqdXN0IGhlaWdodCB0byBjdXJyZW50IHNsaWRlXG4gICAgICAgICRhY3RpdmUuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkYWN0aXZlLmZpbmQoJy5jYXB0aW9uJykudmVsb2NpdHkoe29wYWNpdHk6IDEsIHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYXV0byBzY3JvbGxcbiAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCArIDEpO1xuXG4gICAgICAgICAgfSwgb3B0aW9ucy50cmFuc2l0aW9uICsgb3B0aW9ucy5pbnRlcnZhbFxuICAgICAgICApO1xuXG5cbiAgICAgICAgLy8gSGFtbWVySlMsIFN3aXBlIG5hdmlnYXRpb25cblxuICAgICAgICAvLyBUb3VjaCBFdmVudFxuICAgICAgICB2YXIgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBzd2lwZVJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgJHRoaXMuaGFtbWVyKHtcbiAgICAgICAgICAgIHByZXZlbnRfZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSkuYmluZCgncGFuJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xuXG4gICAgICAgICAgICAvLyByZXNldCBpbnRlcnZhbFxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZS5nZXN0dXJlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmRlbHRhWDtcbiAgICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuICAgICAgICAgICAgdmFyIHZlbG9jaXR5WSA9IGUuZ2VzdHVyZS52ZWxvY2l0eVk7XG5cbiAgICAgICAgICAgICRjdXJyX3NsaWRlID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModmVsb2NpdHlYKSA+IE1hdGguYWJzKHZlbG9jaXR5WSkpIHtcbiAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiB4XG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTd2lwZSBMZWZ0XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSA0ICYmICh4ID4gKCR0aGlzLmlubmVyV2lkdGgoKSAvIDIpIHx8IHZlbG9jaXR5WCA8IC0wLjY1KSkge1xuICAgICAgICAgICAgICBzd2lwZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN3aXBlIFJpZ2h0XG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IDIgJiYgKHggPCAoLTEgKiAkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPiAwLjY1KSkge1xuICAgICAgICAgICAgICBzd2lwZUxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYWtlIFNsaWRlIEJlaGluZCBhY3RpdmUgc2xpZGUgdmlzaWJsZVxuICAgICAgICAgICAgdmFyIG5leHRfc2xpZGU7XG4gICAgICAgICAgICBpZiAoc3dpcGVMZWZ0KSB7XG4gICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkY3Vycl9zbGlkZS5uZXh0KCk7XG4gICAgICAgICAgICAgIGlmIChuZXh0X3NsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkc2xpZGVzLmZpcnN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV4dF9zbGlkZS52ZWxvY2l0eSh7IG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN3aXBlUmlnaHQpIHtcbiAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRjdXJyX3NsaWRlLnByZXYoKTtcbiAgICAgICAgICAgICAgaWYgKG5leHRfc2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRzbGlkZXMubGFzdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5leHRfc2xpZGUudmVsb2NpdHkoeyBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pLmJpbmQoJ3BhbmVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHtcblxuICAgICAgICAgICAgJGN1cnJfc2xpZGUgPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGN1cnJfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuXG4gICAgICAgICAgICBpZiAoIXN3aXBlUmlnaHQgJiYgIXN3aXBlTGVmdCB8fCAkc2xpZGVzLmxlbmd0aCA8PTEpIHtcbiAgICAgICAgICAgICAgLy8gUmV0dXJuIHRvIG9yaWdpbmFsIHNwb3RcbiAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiAwXG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN3aXBlTGVmdCkge1xuICAgICAgICAgICAgICBtb3ZlVG9TbGlkZShjdXJyX2luZGV4ICsgMSk7XG4gICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOiAtMSAqICR0aGlzLmlubmVyV2lkdGgoKSB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAwfSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzd2lwZVJpZ2h0KSB7XG4gICAgICAgICAgICAgIG1vdmVUb1NsaWRlKGN1cnJfaW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6ICR0aGlzLmlubmVyV2lkdGgoKSB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAwfSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2lwZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN3aXBlUmlnaHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gUmVzdGFydCBpbnRlcnZhbFxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuICAgICAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgaWYgKCRzbGlkZXMubGVuZ3RoID09ICRhY3RpdmVfaW5kZXggKyAxKSAkYWN0aXZlX2luZGV4ID0gMDsgLy8gbG9vcCB0byBzdGFydFxuICAgICAgICAgICAgICAgIGVsc2UgJGFjdGl2ZV9pbmRleCArPSAxO1xuXG4gICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCk7XG5cbiAgICAgICAgICAgICAgfSwgb3B0aW9ucy50cmFuc2l0aW9uICsgb3B0aW9ucy5pbnRlcnZhbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm9uKCdzbGlkZXJQYXVzZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMub24oJ3NsaWRlclN0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuICAgICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgICAgIGlmICgkc2xpZGVzLmxlbmd0aCA9PSAkYWN0aXZlX2luZGV4ICsgMSkgJGFjdGl2ZV9pbmRleCA9IDA7IC8vIGxvb3AgdG8gc3RhcnRcbiAgICAgICAgICAgICAgZWxzZSAkYWN0aXZlX2luZGV4ICs9IDE7XG5cbiAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCk7XG5cbiAgICAgICAgICAgIH0sIG9wdGlvbnMudHJhbnNpdGlvbiArIG9wdGlvbnMuaW50ZXJ2YWxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5vbignc2xpZGVyTmV4dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggKyAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMub24oJ3NsaWRlclByZXYnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4IC0gMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcblxuXG5cbiAgICB9LFxuICAgIHBhdXNlIDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3NsaWRlclBhdXNlJyk7XG4gICAgfSxcbiAgICBzdGFydCA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJTdGFydCcpO1xuICAgIH0sXG4gICAgbmV4dCA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJOZXh0Jyk7XG4gICAgfSxcbiAgICBwcmV2IDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3NsaWRlclByZXYnKTtcbiAgICB9XG4gIH07XG5cblxuICAkLmZuLnNsaWRlciA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xuICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xuICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kT3JPcHRpb25zICkge1xuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50b29sdGlwJyApO1xuICAgIH1cbiAgfTsgLy8gUGx1Z2luIGVuZFxufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5jYXJkJywgJy5jYXJkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICgkKHRoaXMpLmZpbmQoJz4gLmNhcmQtcmV2ZWFsJykubGVuZ3RoKSB7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygkKCcuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGUnKSkgfHwgJChlLnRhcmdldCkuaXMoJCgnLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlIGknKSkpIHtcbiAgICAgICAgICAvLyBNYWtlIFJldmVhbCBhbmltYXRlIGRvd24gYW5kIGRpc3BsYXkgbm9uZVxuICAgICAgICAgICQodGhpcykuZmluZCgnLmNhcmQtcmV2ZWFsJykudmVsb2NpdHkoXG4gICAgICAgICAgICB7dHJhbnNsYXRlWTogMH0sIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIyNSxcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyAkKHRoaXMpLmNzcyh7IGRpc3BsYXk6ICdub25lJ30pOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5pcygkKCcuY2FyZCAuYWN0aXZhdG9yJykpIHx8XG4gICAgICAgICAgICAgICAgICQoZS50YXJnZXQpLmlzKCQoJy5jYXJkIC5hY3RpdmF0b3IgaScpKSApIHtcbiAgICAgICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2FyZCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcuY2FyZC1yZXZlYWwnKS5jc3MoeyBkaXNwbGF5OiAnYmxvY2snfSkudmVsb2NpdHkoXCJzdG9wXCIsIGZhbHNlKS52ZWxvY2l0eSh7dHJhbnNsYXRlWTogJy0xMDAlJ30sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn0oIGpRdWVyeSApKTs7KGZ1bmN0aW9uICgkKSB7XG4gIHZhciBtYXRlcmlhbENoaXBzRGVmYXVsdHMgPSB7XG4gICAgZGF0YTogW10sXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIHNlY29uZGFyeVBsYWNlaG9sZGVyOiAnJyxcbiAgICBhdXRvY29tcGxldGVPcHRpb25zOiB7fSxcbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBIYW5kbGUgcmVtb3ZhbCBvZiBzdGF0aWMgY2hpcHMuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGlwIC5jbG9zZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgdmFyICRjaGlwcyA9ICQodGhpcykuY2xvc2VzdCgnLmNoaXBzJyk7XG4gICAgICBpZiAoJGNoaXBzLmF0dHIoJ2RhdGEtaW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGlwJykucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gICQuZm4ubWF0ZXJpYWxfY2hpcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuJGVsID0gJCh0aGlzKTtcbiAgICB0aGlzLiRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICAgIHRoaXMuU0VMUyA9IHtcbiAgICAgIENISVBTOiAnLmNoaXBzJyxcbiAgICAgIENISVA6ICcuY2hpcCcsXG4gICAgICBJTlBVVDogJ2lucHV0JyxcbiAgICAgIERFTEVURTogJy5tYXRlcmlhbC1pY29ucycsXG4gICAgICBTRUxFQ1RFRF9DSElQOiAnLnNlbGVjdGVkJyxcbiAgICB9O1xuXG4gICAgaWYgKCdkYXRhJyA9PT0gb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuJGVsLmRhdGEoJ2NoaXBzJyk7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBtYXRlcmlhbENoaXBzRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHNlbGYuaGFzQXV0b2NvbXBsZXRlID0gISQuaXNFbXB0eU9iamVjdChjdXJyX29wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucy5kYXRhKTtcblxuICAgIC8vIEluaXRpYWxpemVcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHZhciBjaGlwcztcbiAgICAgIHNlbGYuJGVsLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyICRjaGlwcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBjaGlwSWQgPSBNYXRlcmlhbGl6ZS5ndWlkKCk7XG4gICAgICAgIHNlbGYuY2hpcElkID0gY2hpcElkO1xuXG4gICAgICAgIGlmICghY3Vycl9vcHRpb25zLmRhdGEgfHwgIShjdXJyX29wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgIGN1cnJfb3B0aW9ucy5kYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgJGNoaXBzLmRhdGEoJ2NoaXBzJywgY3Vycl9vcHRpb25zLmRhdGEpO1xuICAgICAgICAkY2hpcHMuYXR0cignZGF0YS1pbmRleCcsIGkpO1xuICAgICAgICAkY2hpcHMuYXR0cignZGF0YS1pbml0aWFsaXplZCcsIHRydWUpO1xuXG4gICAgICAgIGlmICghJGNoaXBzLmhhc0NsYXNzKHNlbGYuU0VMUy5DSElQUykpIHtcbiAgICAgICAgICAkY2hpcHMuYWRkQ2xhc3MoJ2NoaXBzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmNoaXBzKCRjaGlwcywgY2hpcElkKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgU0VMUyA9IHNlbGYuU0VMUztcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdjbGljay5jaGlwcy1mb2N1cycsIFNFTFMuQ0hJUFMpLm9uKCdjbGljay5jaGlwcy1mb2N1cycsIFNFTFMuQ0hJUFMsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAkKGUudGFyZ2V0KS5maW5kKFNFTFMuSU5QVVQpLmZvY3VzKCk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdjbGljay5jaGlwcy1zZWxlY3QnLCBTRUxTLkNISVApLm9uKCdjbGljay5jaGlwcy1zZWxlY3QnLCBTRUxTLkNISVAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgJGNoaXAgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKCRjaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHZhciB3YXNTZWxlY3RlZCA9ICRjaGlwLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHZhciAkY2hpcHMgPSAkY2hpcC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgIGlmICghd2FzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcCgkY2hpcC5pbmRleCgpLCAkY2hpcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZigna2V5ZG93bi5jaGlwcycpLm9uKCdrZXlkb3duLmNoaXBzJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnaW5wdXQsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWxldGVcbiAgICAgICAgdmFyICRjaGlwID0gc2VsZi4kZG9jdW1lbnQuZmluZChTRUxTLkNISVAgKyBTRUxTLlNFTEVDVEVEX0NISVApO1xuICAgICAgICB2YXIgJGNoaXBzID0gJGNoaXAuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9ICRjaGlwLnNpYmxpbmdzKFNFTFMuQ0hJUCkubGVuZ3RoO1xuICAgICAgICB2YXIgaW5kZXg7XG5cbiAgICAgICAgaWYgKCEkY2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS53aGljaCA9PT0gOCB8fCBlLndoaWNoID09PSA0Nikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGluZGV4ID0gJGNoaXAuaW5kZXgoKTtcbiAgICAgICAgICBzZWxmLmRlbGV0ZUNoaXAoaW5kZXgsICRjaGlwcyk7XG5cbiAgICAgICAgICB2YXIgc2VsZWN0SW5kZXggPSBudWxsO1xuICAgICAgICAgIGlmICgoaW5kZXggKyAxKSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBsZW5ndGggfHwgKGluZGV4ICsgMSkgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0SW5kZXggPSBsZW5ndGggLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxlY3RJbmRleCA8IDApIHNlbGVjdEluZGV4ID0gbnVsbDtcblxuICAgICAgICAgIGlmIChudWxsICE9PSBzZWxlY3RJbmRleCkge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RDaGlwKHNlbGVjdEluZGV4LCAkY2hpcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWxlbmd0aCkgJGNoaXBzLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcblxuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIH0gZWxzZSBpZiAoZS53aGljaCA9PT0gMzcpIHtcbiAgICAgICAgICBpbmRleCA9ICRjaGlwLmluZGV4KCkgLSAxO1xuICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJChTRUxTLkNISVApLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChpbmRleCwgJGNoaXBzKTtcblxuICAgICAgICAvLyByaWdodFxuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgaW5kZXggPSAkY2hpcC5pbmRleCgpICsgMTtcbiAgICAgICAgICAkKFNFTFMuQ0hJUCkucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoaW5kZXgsICRjaGlwcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2ZvY3VzaW4uY2hpcHMnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCkub24oJ2ZvY3VzaW4uY2hpcHMnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCwgZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciAkY3VyckNoaXBzID0gJChlLnRhcmdldCkuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgJGN1cnJDaGlwcy5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgJGN1cnJDaGlwcy5zaWJsaW5ncygnbGFiZWwsIC5wcmVmaXgnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2ZvY3Vzb3V0LmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQpLm9uKCdmb2N1c291dC5jaGlwcycsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVULCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICRjdXJyQ2hpcHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICAkY3VyckNoaXBzLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhY3RpdmUgaWYgZW1wdHlcbiAgICAgICAgaWYgKCEkY3VyckNoaXBzLmRhdGEoJ2NoaXBzJykubGVuZ3RoKSB7XG4gICAgICAgICAgJGN1cnJDaGlwcy5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgJGN1cnJDaGlwcy5zaWJsaW5ncygnLnByZWZpeCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2tleWRvd24uY2hpcHMtYWRkJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQpLm9uKCdrZXlkb3duLmNoaXBzLWFkZCcsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVULCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgdmFyICRjaGlwcyA9ICR0YXJnZXQuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgdmFyIGNoaXBzTGVuZ3RoID0gJGNoaXBzLmNoaWxkcmVuKFNFTFMuQ0hJUCkubGVuZ3RoO1xuXG4gICAgICAgIC8vIGVudGVyXG4gICAgICAgIGlmICgxMyA9PT0gZS53aGljaCkge1xuICAgICAgICAgIC8vIE92ZXJyaWRlIGVudGVyIGlmIGF1dG9jb21wbGV0aW5nLlxuICAgICAgICAgIGlmIChzZWxmLmhhc0F1dG9jb21wbGV0ZSAmJlxuICAgICAgICAgICAgICAkY2hpcHMuZmluZCgnLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnQnKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgJGNoaXBzLmZpbmQoJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykuY2hpbGRyZW4oKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5hZGRDaGlwKHt0YWc6ICR0YXJnZXQudmFsKCl9LCAkY2hpcHMpO1xuICAgICAgICAgICR0YXJnZXQudmFsKCcnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWxldGUgb3IgbGVmdFxuICAgICAgICBpZiAoKDggPT09IGUua2V5Q29kZSB8fCAzNyA9PT0gZS5rZXlDb2RlKSAmJiAnJyA9PT0gJHRhcmdldC52YWwoKSAmJiBjaGlwc0xlbmd0aCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoY2hpcHNMZW5ndGggLSAxLCAkY2hpcHMpO1xuICAgICAgICAgICR0YXJnZXQuYmx1cigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENsaWNrIG9uIGRlbGV0ZSBpY29uIGluIGNoaXAuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2NsaWNrLmNoaXBzLWRlbGV0ZScsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLkRFTEVURSkub24oJ2NsaWNrLmNoaXBzLWRlbGV0ZScsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLkRFTEVURSwgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuICAgICAgICB2YXIgJGNoaXBzID0gJHRhcmdldC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICB2YXIgJGNoaXAgPSAkdGFyZ2V0LmNsb3Nlc3QoU0VMUy5DSElQKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc2VsZi5kZWxldGVDaGlwKCRjaGlwLmluZGV4KCksICRjaGlwcyk7XG4gICAgICAgICRjaGlwcy5maW5kKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5jaGlwcyA9IGZ1bmN0aW9uKCRjaGlwcywgY2hpcElkKSB7XG4gICAgICAkY2hpcHMuZW1wdHkoKTtcbiAgICAgICRjaGlwcy5kYXRhKCdjaGlwcycpLmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG4gICAgICAgICRjaGlwcy5hcHBlbmQoc2VsZi5yZW5kZXJDaGlwKGVsZW0pKTtcbiAgICAgIH0pO1xuICAgICAgJGNoaXBzLmFwcGVuZCgkKCc8aW5wdXQgaWQ9XCInICsgY2hpcElkICsnXCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiXCI+JykpO1xuICAgICAgc2VsZi5zZXRQbGFjZWhvbGRlcigkY2hpcHMpO1xuXG4gICAgICAvLyBTZXQgZm9yIGF0dHJpYnV0ZSBmb3IgbGFiZWxcbiAgICAgIHZhciBsYWJlbCA9ICRjaGlwcy5uZXh0KCdsYWJlbCcpO1xuICAgICAgaWYgKGxhYmVsLmxlbmd0aCkge1xuICAgICAgICBsYWJlbC5hdHRyKCdmb3InLCBjaGlwSWQpO1xuXG4gICAgICAgIGlmICgkY2hpcHMuZGF0YSgnY2hpcHMnKS5sZW5ndGgpIHtcbiAgICAgICAgICBsYWJlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgYXV0b2NvbXBsZXRlIGlmIG5lZWRlZC5cbiAgICAgIHZhciBpbnB1dCA9ICQoJyMnICsgY2hpcElkKTtcbiAgICAgIGlmIChzZWxmLmhhc0F1dG9jb21wbGV0ZSkge1xuICAgICAgICBjdXJyX29wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucy5vbkF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgIHNlbGYuYWRkQ2hpcCh7dGFnOiB2YWx9LCAkY2hpcHMpO1xuICAgICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5hdXRvY29tcGxldGUoY3Vycl9vcHRpb25zLmF1dG9jb21wbGV0ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgY2hpcCBqUXVlcnkgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbVxuICAgICAqIEByZXR1cm4ge2pRdWVyeX1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlckNoaXAgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgICBpZiAoIWVsZW0udGFnKSByZXR1cm47XG5cbiAgICAgIHZhciAkcmVuZGVyZWRDaGlwID0gJCgnPGRpdiBjbGFzcz1cImNoaXBcIj48L2Rpdj4nKTtcbiAgICAgICRyZW5kZXJlZENoaXAudGV4dChlbGVtLnRhZyk7XG4gICAgICAkcmVuZGVyZWRDaGlwLmFwcGVuZCgkKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNsb3NlXCI+Y2xvc2U8L2k+JykpO1xuICAgICAgcmV0dXJuICRyZW5kZXJlZENoaXA7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIgPSBmdW5jdGlvbigkY2hpcHMpIHtcbiAgICAgIGlmICgkY2hpcHMuZGF0YSgnY2hpcHMnKS5sZW5ndGggJiYgY3Vycl9vcHRpb25zLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICRjaGlwcy5maW5kKCdpbnB1dCcpLnByb3AoJ3BsYWNlaG9sZGVyJywgY3Vycl9vcHRpb25zLnBsYWNlaG9sZGVyKTtcblxuICAgICAgfSBlbHNlIGlmICghJGNoaXBzLmRhdGEoJ2NoaXBzJykubGVuZ3RoICYmIGN1cnJfb3B0aW9ucy5zZWNvbmRhcnlQbGFjZWhvbGRlcikge1xuICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5wcm9wKCdwbGFjZWhvbGRlcicsIGN1cnJfb3B0aW9ucy5zZWNvbmRhcnlQbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaXNWYWxpZCA9IGZ1bmN0aW9uKCRjaGlwcywgZWxlbSkge1xuICAgICAgdmFyIGNoaXBzID0gJGNoaXBzLmRhdGEoJ2NoaXBzJyk7XG4gICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBpPTA7IGkgPCBjaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hpcHNbaV0udGFnID09PSBlbGVtLnRhZykge1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnICE9PSBlbGVtLnRhZyAmJiAhZXhpc3RzO1xuICAgIH07XG5cbiAgICB0aGlzLmFkZENoaXAgPSBmdW5jdGlvbihlbGVtLCAkY2hpcHMpIHtcbiAgICAgIGlmICghc2VsZi5pc1ZhbGlkKCRjaGlwcywgZWxlbSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyICRyZW5kZXJlZENoaXAgPSBzZWxmLnJlbmRlckNoaXAoZWxlbSk7XG4gICAgICB2YXIgbmV3RGF0YSA9IFtdO1xuICAgICAgdmFyIG9sZERhdGEgPSAkY2hpcHMuZGF0YSgnY2hpcHMnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdEYXRhLnB1c2gob2xkRGF0YVtpXSk7XG4gICAgICB9XG4gICAgICBuZXdEYXRhLnB1c2goZWxlbSk7XG5cbiAgICAgICRjaGlwcy5kYXRhKCdjaGlwcycsIG5ld0RhdGEpO1xuICAgICAgJHJlbmRlcmVkQ2hpcC5pbnNlcnRCZWZvcmUoJGNoaXBzLmZpbmQoJ2lucHV0JykpO1xuICAgICAgJGNoaXBzLnRyaWdnZXIoJ2NoaXAuYWRkJywgZWxlbSk7XG4gICAgICBzZWxmLnNldFBsYWNlaG9sZGVyKCRjaGlwcyk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlQ2hpcCA9IGZ1bmN0aW9uKGNoaXBJbmRleCwgJGNoaXBzKSB7XG4gICAgICB2YXIgY2hpcCA9ICRjaGlwcy5kYXRhKCdjaGlwcycpW2NoaXBJbmRleF07XG4gICAgICAkY2hpcHMuZmluZCgnLmNoaXAnKS5lcShjaGlwSW5kZXgpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbmV3RGF0YSA9IFtdO1xuICAgICAgdmFyIG9sZERhdGEgPSAkY2hpcHMuZGF0YSgnY2hpcHMnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSAhPT0gY2hpcEluZGV4KSB7XG4gICAgICAgICAgbmV3RGF0YS5wdXNoKG9sZERhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRjaGlwcy5kYXRhKCdjaGlwcycsIG5ld0RhdGEpO1xuICAgICAgJGNoaXBzLnRyaWdnZXIoJ2NoaXAuZGVsZXRlJywgY2hpcCk7XG4gICAgICBzZWxmLnNldFBsYWNlaG9sZGVyKCRjaGlwcyk7XG4gICAgfTtcblxuICAgIHRoaXMuc2VsZWN0Q2hpcCA9IGZ1bmN0aW9uKGNoaXBJbmRleCwgJGNoaXBzKSB7XG4gICAgICB2YXIgJGNoaXAgPSAkY2hpcHMuZmluZCgnLmNoaXAnKS5lcShjaGlwSW5kZXgpO1xuICAgICAgaWYgKCRjaGlwICYmIGZhbHNlID09PSAkY2hpcC5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAkY2hpcC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgJGNoaXBzLnRyaWdnZXIoJ2NoaXAuc2VsZWN0JywgJGNoaXBzLmRhdGEoJ2NoaXBzJylbY2hpcEluZGV4XSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hpcHNFbGVtZW50ID0gZnVuY3Rpb24oaW5kZXgsICRjaGlwcykge1xuICAgICAgcmV0dXJuICRjaGlwcy5lcShpbmRleCk7XG4gICAgfTtcblxuICAgIC8vIGluaXRcbiAgICB0aGlzLmluaXQoKTtcblxuICAgIHRoaXMuaGFuZGxlRXZlbnRzKCk7XG4gIH07XG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICQuZm4ucHVzaHBpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgLy8gRGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IEluZmluaXR5LFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBwdXNocGluIGV2ZW50IGFuZCBjbGFzc2VzXG4gICAgaWYgKG9wdGlvbnMgPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpZCA9ICQodGhpcykuZGF0YSgncHVzaHBpbi1pZCcpKSB7XG4gICAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLicgKyBpZCk7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVEYXRhKCdwdXNocGluLWlkJykucmVtb3ZlQ2xhc3MoJ3Bpbi10b3AgcGlubmVkIHBpbi1ib3R0b20nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cbiAgICAkaW5kZXggPSAwO1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHVuaXF1ZUlkID0gTWF0ZXJpYWxpemUuZ3VpZCgpLFxuICAgICAgICAgICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAkb3JpZ2luYWxfb2Zmc2V0ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZVBpbkNsYXNzZXMob2JqZWN0KSB7XG4gICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygncGluLXRvcCcpO1xuICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3Bpbm5lZCcpO1xuICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3Bpbi1ib3R0b20nKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdXBkYXRlRWxlbWVudHMob2JqZWN0cywgc2Nyb2xsZWQpIHtcbiAgICAgICAgb2JqZWN0cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBBZGQgcG9zaXRpb24gZml4ZWQgKGJlY2F1c2UgaXRzIGJldHdlZW4gdG9wIGFuZCBib3R0b20pXG4gICAgICAgICAgaWYgKG9wdGlvbnMudG9wIDw9IHNjcm9sbGVkICYmIG9wdGlvbnMuYm90dG9tID49IHNjcm9sbGVkICYmICEkKHRoaXMpLmhhc0NsYXNzKCdwaW5uZWQnKSkge1xuICAgICAgICAgICAgcmVtb3ZlUGluQ2xhc3NlcygkKHRoaXMpKTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCBvcHRpb25zLm9mZnNldCk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaW5uZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGQgcGluLXRvcCAod2hlbiBzY3JvbGxlZCBwb3NpdGlvbiBpcyBhYm92ZSB0b3ApXG4gICAgICAgICAgaWYgKHNjcm9sbGVkIDwgb3B0aW9ucy50b3AgJiYgISQodGhpcykuaGFzQ2xhc3MoJ3Bpbi10b3AnKSkge1xuICAgICAgICAgICAgcmVtb3ZlUGluQ2xhc3NlcygkKHRoaXMpKTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCAwKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Bpbi10b3AnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGQgcGluLWJvdHRvbSAod2hlbiBzY3JvbGxlZCBwb3NpdGlvbiBpcyBiZWxvdyBib3R0b20pXG4gICAgICAgICAgaWYgKHNjcm9sbGVkID4gb3B0aW9ucy5ib3R0b20gJiYgISQodGhpcykuaGFzQ2xhc3MoJ3Bpbi1ib3R0b20nKSkge1xuICAgICAgICAgICAgcmVtb3ZlUGluQ2xhc3NlcygkKHRoaXMpKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Bpbi1ib3R0b20nKTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCBvcHRpb25zLmJvdHRvbSAtICRvcmlnaW5hbF9vZmZzZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcykuZGF0YSgncHVzaHBpbi1pZCcsICR1bmlxdWVJZCk7XG4gICAgICB1cGRhdGVFbGVtZW50cygkdGhpcywgJCh3aW5kb3cpLnNjcm9sbFRvcCgpKTtcbiAgICAgICQod2luZG93KS5vbignc2Nyb2xsLicgKyAkdW5pcXVlSWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRzY3JvbGxlZCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArIG9wdGlvbnMub2Zmc2V0O1xuICAgICAgICB1cGRhdGVFbGVtZW50cygkdGhpcywgJHNjcm9sbGVkKTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfTtcbn0oIGpRdWVyeSApKTs7KGZ1bmN0aW9uICgkKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8galF1ZXJ5IHJldmVyc2VcbiAgICAkLmZuLnJldmVyc2UgPSBbXS5yZXZlcnNlO1xuXG4gICAgLy8gSG92ZXIgYmVoYXZpb3VyOiBtYWtlIHN1cmUgdGhpcyBkb2Vzbid0IHdvcmsgb24gLmNsaWNrLXRvLXRvZ2dsZSBGQUJzIVxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWVudGVyLmZpeGVkQWN0aW9uQnRuJywgJy5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIG9wZW5GQUJNZW51KCR0aGlzKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VsZWF2ZS5maXhlZEFjdGlvbkJ0bicsICcuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBjbG9zZUZBQk1lbnUoJHRoaXMpO1xuICAgIH0pO1xuXG4gICAgLy8gVG9nZ2xlLW9uLWNsaWNrIGJlaGF2aW91ci5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suZmFiQ2xpY2tUb2dnbGUnLCAnLmZpeGVkLWFjdGlvbi1idG4uY2xpY2stdG8tdG9nZ2xlID4gYScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICB2YXIgJG1lbnUgPSAkdGhpcy5wYXJlbnQoKTtcbiAgICAgIGlmICgkbWVudS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgY2xvc2VGQUJNZW51KCRtZW51KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW5GQUJNZW51KCRtZW51KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRvb2xiYXIgdHJhbnNpdGlvbiBiZWhhdmlvdXIuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYlRvb2xiYXInLCAnLmZpeGVkLWFjdGlvbi1idG4udG9vbGJhciA+IGEnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgdmFyICRtZW51ID0gJHRoaXMucGFyZW50KCk7XG4gICAgICBGQUJ0b1Rvb2xiYXIoJG1lbnUpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG4gICQuZm4uZXh0ZW5kKHtcbiAgICBvcGVuRkFCOiBmdW5jdGlvbigpIHtcbiAgICAgIG9wZW5GQUJNZW51KCQodGhpcykpO1xuICAgIH0sXG4gICAgY2xvc2VGQUI6IGZ1bmN0aW9uKCkge1xuICAgICAgY2xvc2VGQUJNZW51KCQodGhpcykpO1xuICAgIH0sXG4gICAgb3BlblRvb2xiYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgRkFCdG9Ub29sYmFyKCQodGhpcykpO1xuICAgIH0sXG4gICAgY2xvc2VUb29sYmFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRvb2xiYXJUb0ZBQigkKHRoaXMpKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgdmFyIG9wZW5GQUJNZW51ID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIHZhciAkdGhpcyA9IGJ0bjtcbiAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpID09PSBmYWxzZSkge1xuXG4gICAgICAvLyBHZXQgZGlyZWN0aW9uIG9wdGlvblxuICAgICAgdmFyIGhvcml6b250YWwgPSAkdGhpcy5oYXNDbGFzcygnaG9yaXpvbnRhbCcpO1xuICAgICAgdmFyIG9mZnNldFksIG9mZnNldFg7XG5cbiAgICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgIG9mZnNldFggPSA0MDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldFkgPSA0MDtcbiAgICAgIH1cblxuICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KFxuICAgICAgICB7IHNjYWxlWTogXCIuNFwiLCBzY2FsZVg6IFwiLjRcIiwgdHJhbnNsYXRlWTogb2Zmc2V0WSArICdweCcsIHRyYW5zbGF0ZVg6IG9mZnNldFggKyAncHgnfSxcbiAgICAgICAgeyBkdXJhdGlvbjogMCB9KTtcblxuICAgICAgdmFyIHRpbWUgPSAwO1xuICAgICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnJldmVyc2UoKS5lYWNoKCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudmVsb2NpdHkoXG4gICAgICAgICAgeyBvcGFjaXR5OiBcIjFcIiwgc2NhbGVYOiBcIjFcIiwgc2NhbGVZOiBcIjFcIiwgdHJhbnNsYXRlWTogXCIwXCIsIHRyYW5zbGF0ZVg6ICcwJ30sXG4gICAgICAgICAgeyBkdXJhdGlvbjogODAsIGRlbGF5OiB0aW1lIH0pO1xuICAgICAgICB0aW1lICs9IDQwO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjbG9zZUZBQk1lbnUgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgdmFyICR0aGlzID0gYnRuO1xuICAgIC8vIEdldCBkaXJlY3Rpb24gb3B0aW9uXG4gICAgdmFyIGhvcml6b250YWwgPSAkdGhpcy5oYXNDbGFzcygnaG9yaXpvbnRhbCcpO1xuICAgIHZhciBvZmZzZXRZLCBvZmZzZXRYO1xuXG4gICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIG9mZnNldFggPSA0MDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0WSA9IDQwO1xuICAgIH1cblxuICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB2YXIgdGltZSA9IDA7XG4gICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICAkdGhpcy5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJykudmVsb2NpdHkoXG4gICAgICB7IG9wYWNpdHk6IFwiMFwiLCBzY2FsZVg6IFwiLjRcIiwgc2NhbGVZOiBcIi40XCIsIHRyYW5zbGF0ZVk6IG9mZnNldFkgKyAncHgnLCB0cmFuc2xhdGVYOiBvZmZzZXRYICsgJ3B4J30sXG4gICAgICB7IGR1cmF0aW9uOiA4MCB9XG4gICAgKTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gRkFCIGludG8gdG9vbGJhclxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgalF1ZXJ5IG9iamVjdFxuICAgKi9cbiAgdmFyIEZBQnRvVG9vbGJhciA9IGZ1bmN0aW9uKGJ0bikge1xuICAgIGlmIChidG4uYXR0cignZGF0YS1vcGVuJykgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldFgsIG9mZnNldFksIHNjYWxlRmFjdG9yO1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdmFyIGJ0blJlY3QgPSBidG5bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGFuY2hvciA9IGJ0bi5maW5kKCc+IGEnKS5maXJzdCgpO1xuICAgIHZhciBtZW51ID0gYnRuLmZpbmQoJz4gdWwnKS5maXJzdCgpO1xuICAgIHZhciBiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJmYWItYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICB2YXIgZmFiQ29sb3IgPSBhbmNob3IuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgYW5jaG9yLmFwcGVuZChiYWNrZHJvcCk7XG5cbiAgICBvZmZzZXRYID0gYnRuUmVjdC5sZWZ0IC0gKHdpbmRvd1dpZHRoIC8gMikgKyAoYnRuUmVjdC53aWR0aCAvIDIpO1xuICAgIG9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSBidG5SZWN0LmJvdHRvbTtcbiAgICBzY2FsZUZhY3RvciA9IHdpbmRvd1dpZHRoIC8gYmFja2Ryb3Aud2lkdGgoKTtcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4tYm90dG9tJywgYnRuUmVjdC5ib3R0b20pO1xuICAgIGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1sZWZ0JywgYnRuUmVjdC5sZWZ0KTtcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4td2lkdGgnLCBidG5SZWN0LndpZHRoKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgYnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICBidG4uYXR0cignZGF0YS1vcGVuJywgdHJ1ZSk7XG4gICAgYnRuLmNzcyh7XG4gICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKCcgKyBvZmZzZXRYICsgJ3B4KScsXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBhbmNob3IuY3NzKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoJyArIC1vZmZzZXRZICsgJ3B4KScsXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgIH0pO1xuXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgYnRuLmNzcyh7XG4gICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCksIGJhY2tncm91bmQtY29sb3IgMHMgbGluZWFyIC4ycydcbiAgICAgIH0pO1xuICAgICAgYW5jaG9yLmNzcyh7XG4gICAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzJ1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGJ0bi5jc3Moe1xuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXG4gICAgICAgIH0pO1xuICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKCcgKyBzY2FsZUZhY3RvciArICcpJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWVudS5maW5kKCc+IGxpID4gYScpLmNzcyh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTY3JvbGwgdG8gY2xvc2UuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsLmZhYlRvb2xiYXJDbG9zZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRvb2xiYXJUb0ZBQihidG4pO1xuICAgICAgICAgICQod2luZG93KS5vZmYoJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLmZhYlRvb2xiYXJDbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2suZmFiVG9vbGJhckNsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdChtZW51KS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvb2xiYXJUb0ZBQihidG4pO1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLmZhYlRvb2xiYXJDbG9zZScpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRvb2xiYXIgYmFjayBpbnRvIEZBQlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgalF1ZXJ5IG9iamVjdFxuICAgKi9cbiAgdmFyIHRvb2xiYXJUb0ZBQiA9IGZ1bmN0aW9uKGJ0bikge1xuICAgIGlmIChidG4uYXR0cignZGF0YS1vcGVuJykgIT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldFgsIG9mZnNldFksIHNjYWxlRmFjdG9yO1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdmFyIGJ0bldpZHRoID0gYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLXdpZHRoJyk7XG4gICAgdmFyIGJ0bkJvdHRvbSA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1ib3R0b20nKTtcbiAgICB2YXIgYnRuTGVmdCA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1sZWZ0Jyk7XG4gICAgdmFyIGFuY2hvciA9IGJ0bi5maW5kKCc+IC5idG4tZmxvYXRpbmcnKS5maXJzdCgpO1xuICAgIHZhciBtZW51ID0gYnRuLmZpbmQoJz4gdWwnKS5maXJzdCgpO1xuICAgIHZhciBiYWNrZHJvcCA9IGJ0bi5maW5kKCcuZmFiLWJhY2tkcm9wJyk7XG4gICAgdmFyIGZhYkNvbG9yID0gYW5jaG9yLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuXG4gICAgb2Zmc2V0WCA9IGJ0bkxlZnQgLSAod2luZG93V2lkdGggLyAyKSArIChidG5XaWR0aCAvIDIpO1xuICAgIG9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSBidG5Cb3R0b207XG4gICAgc2NhbGVGYWN0b3IgPSB3aW5kb3dXaWR0aCAvIGJhY2tkcm9wLndpZHRoKCk7XG5cblxuICAgIC8vIEhpZGUgYmFja2Ryb3BcbiAgICBidG4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGJ0bi5hdHRyKCdkYXRhLW9wZW4nLCBmYWxzZSk7XG4gICAgYnRuLmNzcyh7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBhbmNob3IuY3NzKHtcbiAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgIH0pO1xuICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXG4gICAgfSk7XG4gICAgbWVudS5maW5kKCc+IGxpID4gYScpLmNzcyh7XG4gICAgICBvcGFjaXR5OiAnJ1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGJhY2tkcm9wLnJlbW92ZSgpO1xuXG4gICAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZS5cbiAgICAgIGJ0bi5jc3Moe1xuICAgICAgICAndGV4dC1hbGlnbic6ICcnLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgIGJvdHRvbTogJycsXG4gICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJycsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyAtb2Zmc2V0WCArICdweCwwLDApJ1xuICAgICAgfSk7XG4gICAgICBhbmNob3IuY3NzKHtcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCcgKyBvZmZzZXRZICsgJ3B4LDApJ1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGJ0bi5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMnXG4gICAgICAgIH0pO1xuICAgICAgICBhbmNob3IuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCknXG4gICAgICAgIH0pO1xuICAgICAgfSwgMjApO1xuICAgIH0sIDIwMCk7XG4gIH07XG5cblxufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAvLyBJbWFnZSB0cmFuc2l0aW9uIGZ1bmN0aW9uXG4gIE1hdGVyaWFsaXplLmZhZGVJbkltYWdlID0gZnVuY3Rpb24oc2VsZWN0b3JPckVsKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudCA9ICQoc2VsZWN0b3JPckVsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnb2JqZWN0Jykge1xuICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LmNzcyh7b3BhY2l0eTogMH0pO1xuICAgICQoZWxlbWVudCkudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7XG4gICAgICBkdXJhdGlvbjogNjUwLFxuICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgZWFzaW5nOiAnZWFzZU91dFNpbmUnXG4gICAgfSk7XG4gICAgJChlbGVtZW50KS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtcbiAgICAgIGR1cmF0aW9uOiAxMzAwLFxuICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgc3RlcDogZnVuY3Rpb24obm93LCBmeCkge1xuICAgICAgICBmeC5zdGFydCA9IDEwMDtcbiAgICAgICAgdmFyIGdyYXlzY2FsZV9zZXR0aW5nID0gbm93LzEwMDtcbiAgICAgICAgdmFyIGJyaWdodG5lc3Nfc2V0dGluZyA9IDE1MCAtICgxMDAgLSBub3cpLzEuNzU7XG5cbiAgICAgICAgaWYgKGJyaWdodG5lc3Nfc2V0dGluZyA8IDEwMCkge1xuICAgICAgICAgIGJyaWdodG5lc3Nfc2V0dGluZyA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm93ID49IDApIHtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAgIFwiLXdlYmtpdC1maWx0ZXJcIjogXCJncmF5c2NhbGUoXCIrZ3JheXNjYWxlX3NldHRpbmcrXCIpXCIgKyBcImJyaWdodG5lc3MoXCIrYnJpZ2h0bmVzc19zZXR0aW5nK1wiJSlcIixcbiAgICAgICAgICAgICAgXCJmaWx0ZXJcIjogXCJncmF5c2NhbGUoXCIrZ3JheXNjYWxlX3NldHRpbmcrXCIpXCIgKyBcImJyaWdodG5lc3MoXCIrYnJpZ2h0bmVzc19zZXR0aW5nK1wiJSlcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSG9yaXpvbnRhbCBzdGFnZ2VyZWQgbGlzdFxuICBNYXRlcmlhbGl6ZS5zaG93U3RhZ2dlcmVkTGlzdCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3JFbCkge1xuICAgIHZhciBlbGVtZW50O1xuICAgIGlmICh0eXBlb2Yoc2VsZWN0b3JPckVsKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnQgPSAkKHNlbGVjdG9yT3JFbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Yoc2VsZWN0b3JPckVsKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgIGVsZW1lbnQuZmluZCgnbGknKS52ZWxvY2l0eShcbiAgICAgICAgeyB0cmFuc2xhdGVYOiBcIi0xMDBweFwifSxcbiAgICAgICAgeyBkdXJhdGlvbjogMCB9KTtcblxuICAgIGVsZW1lbnQuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS52ZWxvY2l0eShcbiAgICAgICAgeyBvcGFjaXR5OiBcIjFcIiwgdHJhbnNsYXRlWDogXCIwXCJ9LFxuICAgICAgICB7IGR1cmF0aW9uOiA4MDAsIGRlbGF5OiB0aW1lLCBlYXNpbmc6IFs2MCwgMTBdIH0pO1xuICAgICAgdGltZSArPSAxMjA7XG4gICAgfSk7XG4gIH07XG5cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBIYXJkY29kZWQgLnN0YWdnZXJlZC1saXN0IHNjcm9sbEZpcmVcbiAgICAvLyB2YXIgc3RhZ2dlcmVkTGlzdE9wdGlvbnMgPSBbXTtcbiAgICAvLyAkKCd1bC5zdGFnZ2VyZWQtbGlzdCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcblxuICAgIC8vICAgdmFyIGxhYmVsID0gJ3Njcm9sbEZpcmUtJyArIGk7XG4gICAgLy8gICAkKHRoaXMpLmFkZENsYXNzKGxhYmVsKTtcbiAgICAvLyAgIHN0YWdnZXJlZExpc3RPcHRpb25zLnB1c2goXG4gICAgLy8gICAgIHtzZWxlY3RvcjogJ3VsLnN0YWdnZXJlZC1saXN0LicgKyBsYWJlbCxcbiAgICAvLyAgICAgIG9mZnNldDogMjAwLFxuICAgIC8vICAgICAgY2FsbGJhY2s6ICdzaG93U3RhZ2dlcmVkTGlzdChcInVsLnN0YWdnZXJlZC1saXN0LicgKyBsYWJlbCArICdcIiknfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gc2Nyb2xsRmlyZShzdGFnZ2VyZWRMaXN0T3B0aW9ucyk7XG5cbiAgICAvLyBIYW1tZXJKUywgU3dpcGUgbmF2aWdhdGlvblxuXG4gICAgLy8gVG91Y2ggRXZlbnRcbiAgICB2YXIgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgdmFyIHN3aXBlUmlnaHQgPSBmYWxzZTtcblxuXG4gICAgLy8gRGlzbWlzc2libGUgQ29sbGVjdGlvbnNcbiAgICAkKCcuZGlzbWlzc2FibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5oYW1tZXIoe1xuICAgICAgICBwcmV2ZW50X2RlZmF1bHQ6IGZhbHNlXG4gICAgICB9KS5iaW5kKCdwYW4nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XG4gICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuZGVsdGFYO1xuICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuXG4gICAgICAgICAgJHRoaXMudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiB4XG4gICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG5cbiAgICAgICAgICAvLyBTd2lwZSBMZWZ0XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gNCAmJiAoeCA+ICgkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPCAtMC43NSkpIHtcbiAgICAgICAgICAgIHN3aXBlTGVmdCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3dpcGUgUmlnaHRcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAyICYmICh4IDwgKC0xICogJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYID4gMC43NSkpIHtcbiAgICAgICAgICAgIHN3aXBlUmlnaHQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuYmluZCgncGFuZW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyBSZXNldCBpZiBjb2xsZWN0aW9uIGlzIG1vdmVkIGJhY2sgaW50byBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICBpZiAoTWF0aC5hYnMoZS5nZXN0dXJlLmRlbHRhWCkgPCAoJCh0aGlzKS5pbm5lcldpZHRoKCkgLyAyKSkge1xuICAgICAgICAgIHN3aXBlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBzd2lwZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKHN3aXBlTGVmdCB8fCBzd2lwZVJpZ2h0KSB7XG4gICAgICAgICAgICB2YXIgZnVsbFdpZHRoO1xuICAgICAgICAgICAgaWYgKHN3aXBlTGVmdCkgeyBmdWxsV2lkdGggPSAkdGhpcy5pbm5lcldpZHRoKCk7IH1cbiAgICAgICAgICAgIGVsc2UgeyBmdWxsV2lkdGggPSAtMSAqICR0aGlzLmlubmVyV2lkdGgoKTsgfVxuXG4gICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IGZ1bGxXaWR0aCxcbiAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAxMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBjb21wbGV0ZTpcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuY3NzKCdib3JkZXInLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICR0aGlzLnZlbG9jaXR5KHsgaGVpZ2h0OiAwLCBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBjb21wbGV0ZTpcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7ICR0aGlzLnJlbW92ZSgpOyB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJHRoaXMudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiAwLFxuICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDEwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgc3dpcGVSaWdodCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0pO1xuXG5cbiAgICAvLyB0aW1lID0gMFxuICAgIC8vIC8vIFZlcnRpY2FsIFN0YWdnZXJlZCBsaXN0XG4gICAgLy8gJCgndWwuc3RhZ2dlcmVkLWxpc3QudmVydGljYWwgbGknKS52ZWxvY2l0eShcbiAgICAvLyAgICAgeyB0cmFuc2xhdGVZOiBcIjEwMHB4XCJ9LFxuICAgIC8vICAgICB7IGR1cmF0aW9uOiAwIH0pO1xuXG4gICAgLy8gJCgndWwuc3RhZ2dlcmVkLWxpc3QudmVydGljYWwgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCh0aGlzKS52ZWxvY2l0eShcbiAgICAvLyAgICAgeyBvcGFjaXR5OiBcIjFcIiwgdHJhbnNsYXRlWTogXCIwXCJ9LFxuICAgIC8vICAgICB7IGR1cmF0aW9uOiA4MDAsIGRlbGF5OiB0aW1lLCBlYXNpbmc6IFs2MCwgMjVdIH0pO1xuICAgIC8vICAgdGltZSArPSAxMjA7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyBGYWRlIGluIGFuZCBTY2FsZVxuICAgIC8vICQoJy5mYWRlLWluLnNjYWxlJykudmVsb2NpdHkoXG4gICAgLy8gICAgIHsgc2NhbGVYOiAuNCwgc2NhbGVZOiAuNCwgdHJhbnNsYXRlWDogLTYwMH0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDB9KTtcbiAgICAvLyAkKCcuZmFkZS1pbicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAkKHRoaXMpLnZlbG9jaXR5KFxuICAgIC8vICAgICB7IG9wYWNpdHk6IFwiMVwiLCBzY2FsZVg6IDEsIHNjYWxlWTogMSwgdHJhbnNsYXRlWDogMH0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDgwMCwgZWFzaW5nOiBbNjAsIDEwXSB9KTtcbiAgICAvLyB9KTtcbiAgfSk7XG59KCBqUXVlcnkgKSk7XG47KGZ1bmN0aW9uKCQpIHtcblxuICB2YXIgc2Nyb2xsRmlyZUV2ZW50c0hhbmRsZWQgPSBmYWxzZTtcblxuICAvLyBJbnB1dDogQXJyYXkgb2YgSlNPTiBvYmplY3RzIHtzZWxlY3Rvciwgb2Zmc2V0LCBjYWxsYmFja31cbiAgTWF0ZXJpYWxpemUuc2Nyb2xsRmlyZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgb25TY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IG9wdGlvbnMgZnJvbSBlYWNoIGxpbmVcbiAgICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tpXTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdmFsdWUuc2VsZWN0b3IsXG4gICAgICAgICAgICBvZmZzZXQgPSB2YWx1ZS5vZmZzZXQsXG4gICAgICAgICAgICBjYWxsYmFjayA9IHZhbHVlLmNhbGxiYWNrO1xuXG4gICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBpZiAoIGN1cnJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBjdXJyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICAgICAgICBpZiAod2luZG93U2Nyb2xsID4gKGVsZW1lbnRPZmZzZXQgKyBvZmZzZXQpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuZG9uZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgY3VycmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrRnVuYyA9IG5ldyBGdW5jdGlvbihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jKGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YWx1ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICB2YXIgdGhyb3R0bGVkU2Nyb2xsID0gTWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gICAgICBvblNjcm9sbCgpO1xuICAgIH0sIG9wdGlvbnMudGhyb3R0bGUgfHwgMTAwKTtcblxuICAgIGlmICghc2Nyb2xsRmlyZUV2ZW50c0hhbmRsZWQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlZFNjcm9sbCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRTY3JvbGwpO1xuICAgICAgc2Nyb2xsRmlyZUV2ZW50c0hhbmRsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHBlcmZvcm0gYSBzY2FuIG9uY2UsIGFmdGVyIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQsIGFuZCBhZnRlciBkb20gaXMgcmVhZHlcbiAgICBzZXRUaW1lb3V0KHRocm90dGxlZFNjcm9sbCwgMCk7XG4gIH07XG5cbn0pKGpRdWVyeSk7XG47LyohXG4gKiBwaWNrYWRhdGUuanMgdjMuNS4wLCAyMDE0LzA0LzEzXG4gKiBCeSBBbXN1bCwgaHR0cDovL2Ftc3VsLmNhXG4gKiBIb3N0ZWQgb24gaHR0cDovL2Ftc3VsLmdpdGh1Yi5pby9waWNrYWRhdGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICovXG5cbihmdW5jdGlvbiAoIGZhY3RvcnkgKSB7XG5cbiAgICAvLyBBTUQuXG4gICAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApXG4gICAgICAgIGRlZmluZSggJ3BpY2tlcicsIFsnanF1ZXJ5J10sIGZhY3RvcnkgKVxuXG4gICAgLy8gTm9kZS5qcy9icm93c2VyaWZ5LlxuICAgIGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyApXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggcmVxdWlyZSgnanF1ZXJ5JykgKVxuXG4gICAgLy8gQnJvd3NlciBnbG9iYWxzLlxuICAgIGVsc2UgdGhpcy5QaWNrZXIgPSBmYWN0b3J5KCBqUXVlcnkgKVxuXG59KGZ1bmN0aW9uKCAkICkge1xuXG52YXIgJHdpbmRvdyA9ICQoIHdpbmRvdyApXG52YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgKVxudmFyICRodG1sID0gJCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IClcblxuXG4vKipcbiAqIFRoZSBwaWNrZXIgY29uc3RydWN0b3IgdGhhdCBjcmVhdGVzIGEgYmxhbmsgcGlja2VyLlxuICovXG5mdW5jdGlvbiBQaWNrZXJDb25zdHJ1Y3RvciggRUxFTUVOVCwgTkFNRSwgQ09NUE9ORU5ULCBPUFRJT05TICkge1xuXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIGVsZW1lbnQsIHJldHVybiB0aGUgcGlja2VyIGNvbnN0cnVjdG9yLlxuICAgIGlmICggIUVMRU1FTlQgKSByZXR1cm4gUGlja2VyQ29uc3RydWN0b3JcblxuXG4gICAgdmFyXG4gICAgICAgIElTX0RFRkFVTFRfVEhFTUUgPSBmYWxzZSxcblxuXG4gICAgICAgIC8vIFRoZSBzdGF0ZSBvZiB0aGUgcGlja2VyLlxuICAgICAgICBTVEFURSA9IHtcbiAgICAgICAgICAgIGlkOiBFTEVNRU5ULmlkIHx8ICdQJyArIE1hdGguYWJzKCB+fihNYXRoLnJhbmRvbSgpICogbmV3IERhdGUoKSkgKVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBvcHRpb25zIHBhc3NlZC5cbiAgICAgICAgU0VUVElOR1MgPSBDT01QT05FTlQgPyAkLmV4dGVuZCggdHJ1ZSwge30sIENPTVBPTkVOVC5kZWZhdWx0cywgT1BUSU9OUyApIDogT1BUSU9OUyB8fCB7fSxcblxuXG4gICAgICAgIC8vIE1lcmdlIHRoZSBkZWZhdWx0IGNsYXNzZXMgd2l0aCB0aGUgc2V0dGluZ3MgY2xhc3Nlcy5cbiAgICAgICAgQ0xBU1NFUyA9ICQuZXh0ZW5kKCB7fSwgUGlja2VyQ29uc3RydWN0b3Iua2xhc3NlcygpLCBTRVRUSU5HUy5rbGFzcyApLFxuXG5cbiAgICAgICAgLy8gVGhlIGVsZW1lbnQgbm9kZSB3cmFwcGVyIGludG8gYSBqUXVlcnkgb2JqZWN0LlxuICAgICAgICAkRUxFTUVOVCA9ICQoIEVMRU1FTlQgKSxcblxuXG4gICAgICAgIC8vIFBzZXVkbyBwaWNrZXIgY29uc3RydWN0b3IuXG4gICAgICAgIFBpY2tlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyBUaGUgcGlja2VyIHByb3RvdHlwZS5cbiAgICAgICAgUCA9IFBpY2tlckluc3RhbmNlLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAgICAgY29uc3RydWN0b3I6IFBpY2tlckluc3RhbmNlLFxuXG4gICAgICAgICAgICAkbm9kZTogJEVMRU1FTlQsXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbml0aWFsaXplIGV2ZXJ5dGhpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFscmVhZHkgc3RhcnRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIFNUQVRFICYmIFNUQVRFLnN0YXJ0ICkgcmV0dXJuIFBcblxuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwaWNrZXIgc3RhdGVzLlxuICAgICAgICAgICAgICAgIFNUQVRFLm1ldGhvZHMgPSB7fVxuICAgICAgICAgICAgICAgIFNUQVRFLnN0YXJ0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNUQVRFLm9wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgIFNUQVRFLnR5cGUgPSBFTEVNRU5ULnR5cGVcblxuXG4gICAgICAgICAgICAgICAgLy8gQ29uZmlybSBmb2N1cyBzdGF0ZSwgY29udmVydCBpbnRvIHRleHQgaW5wdXQgdG8gcmVtb3ZlIFVBIHN0eWxpbmdzLFxuICAgICAgICAgICAgICAgIC8vIGFuZCBzZXQgYXMgcmVhZG9ubHkgdG8gcHJldmVudCBrZXlib2FyZCBwb3B1cC5cbiAgICAgICAgICAgICAgICBFTEVNRU5ULmF1dG9mb2N1cyA9IEVMRU1FTlQgPT0gZ2V0QWN0aXZlRWxlbWVudCgpXG4gICAgICAgICAgICAgICAgRUxFTUVOVC5yZWFkT25seSA9ICFTRVRUSU5HUy5lZGl0YWJsZVxuICAgICAgICAgICAgICAgIEVMRU1FTlQuaWQgPSBFTEVNRU5ULmlkIHx8IFNUQVRFLmlkXG4gICAgICAgICAgICAgICAgaWYgKCBFTEVNRU5ULnR5cGUgIT0gJ3RleHQnICkge1xuICAgICAgICAgICAgICAgICAgICBFTEVNRU5ULnR5cGUgPSAndGV4dCdcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwaWNrZXIgY29tcG9uZW50IHdpdGggdGhlIHNldHRpbmdzLlxuICAgICAgICAgICAgICAgIFAuY29tcG9uZW50ID0gbmV3IENPTVBPTkVOVChQLCBTRVRUSU5HUylcblxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBwaWNrZXIgcm9vdCB3aXRoIGEgaG9sZGVyIGFuZCB0aGVuIHByZXBhcmUgaXQuXG4gICAgICAgICAgICAgICAgUC4kcm9vdCA9ICQoIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSgnZGl2JywgY3JlYXRlV3JhcHBlZENvbXBvbmVudCgpLCBDTEFTU0VTLnBpY2tlciwgJ2lkPVwiJyArIEVMRU1FTlQuaWQgKyAnX3Jvb3RcIiB0YWJpbmRleD1cIjBcIicpIClcbiAgICAgICAgICAgICAgICBwcmVwYXJlRWxlbWVudFJvb3QoKVxuXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZeKAmXMgYSBmb3JtYXQgZm9yIHRoZSBoaWRkZW4gaW5wdXQgZWxlbWVudCwgY3JlYXRlIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIGlmICggU0VUVElOR1MuZm9ybWF0U3VibWl0ICkge1xuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlRWxlbWVudEhpZGRlbigpXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHByZXBhcmVFbGVtZW50KClcblxuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSByb290IGFzIHNwZWNpZmllZCBpbiB0aGUgc2V0dGluZ3MuXG4gICAgICAgICAgICAgICAgaWYgKCBTRVRUSU5HUy5jb250YWluZXIgKSAkKCBTRVRUSU5HUy5jb250YWluZXIgKS5hcHBlbmQoIFAuJHJvb3QgKVxuICAgICAgICAgICAgICAgIGVsc2UgJEVMRU1FTlQuYWZ0ZXIoIFAuJHJvb3QgKVxuXG5cbiAgICAgICAgICAgICAgICAvLyBCaW5kIHRoZSBkZWZhdWx0IGNvbXBvbmVudCBhbmQgc2V0dGluZ3MgZXZlbnRzLlxuICAgICAgICAgICAgICAgIFAub24oe1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogUC5jb21wb25lbnQub25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBQLmNvbXBvbmVudC5vblJlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgc3RvcDogUC5jb21wb25lbnQub25TdG9wLFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBQLmNvbXBvbmVudC5vbk9wZW4sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiBQLmNvbXBvbmVudC5vbkNsb3NlLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IFAuY29tcG9uZW50Lm9uU2V0XG4gICAgICAgICAgICAgICAgfSkub24oe1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogU0VUVElOR1Mub25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBTRVRUSU5HUy5vblJlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgc3RvcDogU0VUVElOR1Mub25TdG9wLFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBTRVRUSU5HUy5vbk9wZW4sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiBTRVRUSU5HUy5vbkNsb3NlLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IFNFVFRJTkdTLm9uU2V0XG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgLy8gT25jZSB3ZeKAmXJlIGFsbCBzZXQsIGNoZWNrIHRoZSB0aGVtZSBpbiB1c2UuXG4gICAgICAgICAgICAgICAgSVNfREVGQVVMVF9USEVNRSA9IGlzVXNpbmdEZWZhdWx0VGhlbWUoIFAuJHJvb3QuY2hpbGRyZW4oKVsgMCBdIClcblxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGF1dG9mb2N1cywgb3BlbiB0aGUgcGlja2VyLlxuICAgICAgICAgICAgICAgIGlmICggRUxFTUVOVC5hdXRvZm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAub3BlbigpXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHF1ZXVlZCB0aGUg4oCcc3RhcnTigJ0gYW5kIOKAnHJlbmRlcuKAnSBldmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFAudHJpZ2dlciggJ3N0YXJ0JyApLnRyaWdnZXIoICdyZW5kZXInIClcbiAgICAgICAgICAgIH0sIC8vc3RhcnRcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbmRlciBhIG5ldyBwaWNrZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiggZW50aXJlQ29tcG9uZW50ICkge1xuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGEgbmV3IGNvbXBvbmVudCBob2xkZXIgaW4gdGhlIHJvb3Qgb3IgYm94LlxuICAgICAgICAgICAgICAgIGlmICggZW50aXJlQ29tcG9uZW50ICkgUC4kcm9vdC5odG1sKCBjcmVhdGVXcmFwcGVkQ29tcG9uZW50KCkgKVxuICAgICAgICAgICAgICAgIGVsc2UgUC4kcm9vdC5maW5kKCAnLicgKyBDTEFTU0VTLmJveCApLmh0bWwoIFAuY29tcG9uZW50Lm5vZGVzKCBTVEFURS5vcGVuICkgKVxuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcXVldWVkIOKAnHJlbmRlcuKAnSBldmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFAudHJpZ2dlciggJ3JlbmRlcicgKVxuICAgICAgICAgICAgfSwgLy9yZW5kZXJcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlc3Ryb3kgZXZlcnl0aGluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbHJlYWR5IHN0b3BwZWQsIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCAhU1RBVEUuc3RhcnQgKSByZXR1cm4gUFxuXG4gICAgICAgICAgICAgICAgLy8gVGhlbiBjbG9zZSB0aGUgcGlja2VyLlxuICAgICAgICAgICAgICAgIFAuY2xvc2UoKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBoaWRkZW4gZmllbGQuXG4gICAgICAgICAgICAgICAgaWYgKCBQLl9oaWRkZW4gKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuX2hpZGRlbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBQLl9oaWRkZW4gKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcm9vdC5cbiAgICAgICAgICAgICAgICBQLiRyb290LnJlbW92ZSgpXG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGlucHV0IGNsYXNzLCByZW1vdmUgdGhlIHN0b3JlZCBkYXRhLCBhbmQgdW5iaW5kXG4gICAgICAgICAgICAgICAgLy8gdGhlIGV2ZW50cyAoYWZ0ZXIgYSB0aWNrIGZvciBJRSAtIHNlZSBgUC5jbG9zZWApLlxuICAgICAgICAgICAgICAgICRFTEVNRU5ULnJlbW92ZUNsYXNzKCBDTEFTU0VTLmlucHV0ICkucmVtb3ZlRGF0YSggTkFNRSApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICRFTEVNRU5ULm9mZiggJy4nICsgU1RBVEUuaWQgKVxuICAgICAgICAgICAgICAgIH0sIDApXG5cbiAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBlbGVtZW50IHN0YXRlXG4gICAgICAgICAgICAgICAgRUxFTUVOVC50eXBlID0gU1RBVEUudHlwZVxuICAgICAgICAgICAgICAgIEVMRU1FTlQucmVhZE9ubHkgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcXVldWVkIOKAnHN0b3DigJ0gZXZlbnRzLlxuICAgICAgICAgICAgICAgIFAudHJpZ2dlciggJ3N0b3AnIClcblxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBwaWNrZXIgc3RhdGVzLlxuICAgICAgICAgICAgICAgIFNUQVRFLm1ldGhvZHMgPSB7fVxuICAgICAgICAgICAgICAgIFNUQVRFLnN0YXJ0ID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIHJldHVybiBQXG4gICAgICAgICAgICB9LCAvL3N0b3BcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE9wZW4gdXAgdGhlIHBpY2tlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZG9udEdpdmVGb2N1cyApIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbHJlYWR5IG9wZW4sIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCBTVEFURS5vcGVuICkgcmV0dXJuIFBcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUg4oCcYWN0aXZl4oCdIGNsYXNzLlxuICAgICAgICAgICAgICAgICRFTEVNRU5ULmFkZENsYXNzKCBDTEFTU0VTLmFjdGl2ZSApXG4gICAgICAgICAgICAgICAgYXJpYSggRUxFTUVOVCwgJ2V4cGFuZGVkJywgdHJ1ZSApXG5cbiAgICAgICAgICAgICAgICAvLyAqIEEgRmlyZWZveCBidWcsIHdoZW4gYGh0bWxgIGhhcyBgb3ZlcmZsb3c6aGlkZGVuYCwgcmVzdWx0cyBpblxuICAgICAgICAgICAgICAgIC8vICAga2lsbGluZyB0cmFuc2l0aW9ucyA6KC4gU28gYWRkIHRoZSDigJxvcGVuZWTigJ0gc3RhdGUgb24gdGhlIG5leHQgdGljay5cbiAgICAgICAgICAgICAgICAvLyAgIEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjI1Mjg5XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSDigJxvcGVuZWTigJ0gY2xhc3MgdG8gdGhlIHBpY2tlciByb290LlxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmFkZENsYXNzKCBDTEFTU0VTLm9wZW5lZCApXG4gICAgICAgICAgICAgICAgICAgIGFyaWEoIFAuJHJvb3RbMF0sICdoaWRkZW4nLCBmYWxzZSApXG5cbiAgICAgICAgICAgICAgICB9LCAwIClcblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgdG8gZ2l2ZSBmb2N1cywgYmluZCB0aGUgZWxlbWVudCBhbmQgZG9jIGV2ZW50cy5cbiAgICAgICAgICAgICAgICBpZiAoIGRvbnRHaXZlRm9jdXMgIT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBpdCBhcyBvcGVuLlxuICAgICAgICAgICAgICAgICAgICBTVEFURS5vcGVuID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIHBhZ2UgZnJvbSBzY3JvbGxpbmcuXG4gICAgICAgICAgICAgICAgICAgIGlmICggSVNfREVGQVVMVF9USEVNRSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcyggJ292ZXJmbG93JywgJ2hpZGRlbicgKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdwYWRkaW5nLXJpZ2h0JywgJys9JyArIGdldFNjcm9sbGJhcldpZHRoKCkgKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBmb2N1cyB0byB0aGUgcm9vdCBlbGVtZW504oCZcyBqUXVlcnkgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAvLyAqIFdvcmthcm91bmQgZm9yIGlPUzggdG8gYnJpbmcgdGhlIHBpY2tlcuKAmXMgcm9vdCBpbnRvIHZpZXcuXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QuZXEoMCkuZm9jdXMoKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJpbmQgdGhlIGRvY3VtZW50IGV2ZW50cy5cbiAgICAgICAgICAgICAgICAgICAgJGRvY3VtZW50Lm9uKCAnY2xpY2suJyArIFNUQVRFLmlkICsgJyBmb2N1c2luLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50IGlzIG5vdCB0aGUgZWxlbWVudCwgY2xvc2UgdGhlIHBpY2tlciBwaWNrZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqIERvbuKAmXQgd29ycnkgYWJvdXQgY2xpY2tzIG9yIGZvY3VzaW5zIG9uIHRoZSByb290IGJlY2F1c2UgdGhvc2UgZG9u4oCZdCBidWJibGUgdXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIEFsc28sIGZvciBGaXJlZm94LCBhIGNsaWNrIG9uIGFuIGBvcHRpb25gIGVsZW1lbnQgYnViYmxlcyB1cCBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0byB0aGUgZG9jLiBTbyBtYWtlIHN1cmUgdGhlIHRhcmdldCB3YXNuJ3QgdGhlIGRvYy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICogSW4gRmlyZWZveCBzdG9wUHJvcGFnYXRpb24oKSBkb2VzbuKAmXQgcHJldmVudCByaWdodC1jbGljayBldmVudHMgZnJvbSBidWJibGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2hpY2ggY2F1c2VzIHRoZSBwaWNrZXIgdG8gdW5leHBlY3RlZGx5IGNsb3NlIHdoZW4gcmlnaHQtY2xpY2tpbmcgaXQuIFNvIG1ha2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgc3VyZSB0aGUgZXZlbnQgd2FzbuKAmXQgYSByaWdodC1jbGljay5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0ICE9IEVMRU1FTlQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50ICYmIGV2ZW50LndoaWNoICE9IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IHdhcyB0aGUgaG9sZGVyIHRoYXQgY292ZXJzIHRoZSBzY3JlZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCB0aGUgZWxlbWVudCBmb2N1c2VkIHRvIG1haW50YWluIHRhYmluZGV4LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuY2xvc2UoIHRhcmdldCA9PT0gUC4kcm9vdC5jaGlsZHJlbigpWzBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KS5vbiggJ2tleWRvd24uJyArIFNUQVRFLmlkLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUga2V5Y29kZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXljb2RlID0gZXZlbnQua2V5Q29kZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSB0aGF0IHRvIGEgc2VsZWN0aW9uIGNoYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXljb2RlVG9Nb3ZlID0gUC5jb21wb25lbnQua2V5WyBrZXljb2RlIF0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHcmFiIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gZXNjYXBlLCBjbG9zZSB0aGUgcGlja2VyIGFuZCBnaXZlIGZvY3VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXljb2RlID09IDI3ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEga2V5IG1vdmVtZW50IG9yIOKAnGVudGVy4oCdIGtleXByZXNzIG9uIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldCA9PSBQLiRyb290WzBdICYmICgga2V5Y29kZVRvTW92ZSB8fCBrZXljb2RlID09IDEzICkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiB0byBzdG9wIHBhZ2UgbW92ZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUga2V5IG1vdmVtZW50IGFjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGtleWNvZGVUb01vdmUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggUC5jb21wb25lbnQua2V5LmdvLCBQLCBbIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlcigga2V5Y29kZVRvTW92ZSApIF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIOKAnGVudGVy4oCdLCBpZiB0aGUgaGlnaGxpZ2h0ZWQgaXRlbSBpc27igJl0IGRpc2FibGVkLCBzZXQgdGhlIHZhbHVlIGFuZCBjbG9zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIVAuJHJvb3QuZmluZCggJy4nICsgQ0xBU1NFUy5oaWdobGlnaHRlZCApLmhhc0NsYXNzKCBDTEFTU0VTLmRpc2FibGVkICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuc2V0KCAnc2VsZWN0JywgUC5jb21wb25lbnQuaXRlbS5oaWdobGlnaHQgKS5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgd2l0aGluIHRoZSByb290IGFuZCDigJxlbnRlcuKAnSBpcyBwcmVzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gYW5kIHRyaWdnZXIgYSBjbGljayBvbiB0aGUgdGFyZ2V0IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggJC5jb250YWlucyggUC4kcm9vdFswXSwgdGFyZ2V0ICkgJiYga2V5Y29kZSA9PSAxMyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBxdWV1ZWQg4oCcb3BlbuKAnSBldmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFAudHJpZ2dlciggJ29wZW4nIClcbiAgICAgICAgICAgIH0sIC8vb3BlblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2xvc2UgdGhlIHBpY2tlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGdpdmVGb2N1cyApIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gZ2l2ZSBmb2N1cywgZG8gaXQgYmVmb3JlIGNoYW5naW5nIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBpZiAoIGdpdmVGb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uLmFoIHllcyEgSXQgd291bGTigJl2ZSBiZWVuIGluY29tcGxldGUgd2l0aG91dCBhIGNyYXp5IHdvcmthcm91bmQgZm9yIElFIDp8XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBmb2N1cyBpcyB0cmlnZ2VyZWQgKmFmdGVyKiB0aGUgY2xvc2UgaGFzIGNvbXBsZXRlZCAtIGNhdXNpbmcgaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gb3BlbiBhZ2Fpbi4gU28gdW5iaW5kIGFuZCByZWJpbmQgdGhlIGV2ZW50IGF0IHRoZSBuZXh0IHRpY2suXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3Qub2ZmKCAnZm9jdXMudG9PcGVuJyApLmVxKDApLmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQLiRyb290Lm9uKCAnZm9jdXMudG9PcGVuJywgaGFuZGxlRm9jdXNUb09wZW5FdmVudCApXG4gICAgICAgICAgICAgICAgICAgIH0sIDAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUg4oCcYWN0aXZl4oCdIGNsYXNzLlxuICAgICAgICAgICAgICAgICRFTEVNRU5ULnJlbW92ZUNsYXNzKCBDTEFTU0VTLmFjdGl2ZSApXG4gICAgICAgICAgICAgICAgYXJpYSggRUxFTUVOVCwgJ2V4cGFuZGVkJywgZmFsc2UgKVxuXG4gICAgICAgICAgICAgICAgLy8gKiBBIEZpcmVmb3ggYnVnLCB3aGVuIGBodG1sYCBoYXMgYG92ZXJmbG93OmhpZGRlbmAsIHJlc3VsdHMgaW5cbiAgICAgICAgICAgICAgICAvLyAgIGtpbGxpbmcgdHJhbnNpdGlvbnMgOiguIFNvIHJlbW92ZSB0aGUg4oCcb3BlbmVk4oCdIHN0YXRlIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgICAgICAgICAgICAgLy8gICBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYyNTI4OVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUg4oCcb3BlbmVk4oCdIGFuZCDigJxmb2N1c2Vk4oCdIGNsYXNzIGZyb20gdGhlIHBpY2tlciByb290LlxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LnJlbW92ZUNsYXNzKCBDTEFTU0VTLm9wZW5lZCArICcgJyArIENMQVNTRVMuZm9jdXNlZCApXG4gICAgICAgICAgICAgICAgICAgIGFyaWEoIFAuJHJvb3RbMF0sICdoaWRkZW4nLCB0cnVlIClcblxuICAgICAgICAgICAgICAgIH0sIDAgKVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFscmVhZHkgY2xvc2VkLCBkbyBub3RoaW5nIG1vcmUuXG4gICAgICAgICAgICAgICAgaWYgKCAhU1RBVEUub3BlbiApIHJldHVybiBQXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgaXQgYXMgY2xvc2VkLlxuICAgICAgICAgICAgICAgIFNUQVRFLm9wZW4gPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgLy8gQWxsb3cgdGhlIHBhZ2UgdG8gc2Nyb2xsLlxuICAgICAgICAgICAgICAgIGlmICggSVNfREVGQVVMVF9USEVNRSApIHtcbiAgICAgICAgICAgICAgICAgICAgJGh0bWwuXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdvdmVyZmxvdycsICcnICkuXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdwYWRkaW5nLXJpZ2h0JywgJy09JyArIGdldFNjcm9sbGJhcldpZHRoKCkgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgZG9jdW1lbnQgZXZlbnRzLlxuICAgICAgICAgICAgICAgICRkb2N1bWVudC5vZmYoICcuJyArIFNUQVRFLmlkIClcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxjbG9zZeKAnSBldmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFAudHJpZ2dlciggJ2Nsb3NlJyApXG4gICAgICAgICAgICB9LCAvL2Nsb3NlXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbGVhciB0aGUgdmFsdWVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUC5zZXQoICdjbGVhcicsIG51bGwsIG9wdGlvbnMgKVxuICAgICAgICAgICAgfSwgLy9jbGVhclxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0IHNvbWV0aGluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKCB0aGluZywgdmFsdWUsIG9wdGlvbnMgKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhpbmdJdGVtLCB0aGluZ1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGluZ0lzT2JqZWN0ID0gJC5pc1BsYWluT2JqZWN0KCB0aGluZyApLFxuICAgICAgICAgICAgICAgICAgICB0aGluZ09iamVjdCA9IHRoaW5nSXNPYmplY3QgPyB0aGluZyA6IHt9XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSB1c2FibGUgb3B0aW9ucy5cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gdGhpbmdJc09iamVjdCAmJiAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICkgPyB2YWx1ZSA6IG9wdGlvbnMgfHwge31cblxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRoaW5nIGlzbuKAmXQgYW4gb2JqZWN0LCBtYWtlIGl0IG9uZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpbmdJc09iamVjdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0WyB0aGluZyBdID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIHRoaW5ncyBvZiBpdGVtcyB0byBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHRoaW5nSXRlbSBpbiB0aGluZ09iamVjdCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JhYiB0aGUgdmFsdWUgb2YgdGhlIHRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdWYWx1ZSA9IHRoaW5nT2JqZWN0WyB0aGluZ0l0ZW0gXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCwgaWYgdGhlIGl0ZW0gZXhpc3RzIGFuZCB0aGVyZeKAmXMgYSB2YWx1ZSwgc2V0IGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ0l0ZW0gaW4gUC5jb21wb25lbnQuaXRlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaW5nVmFsdWUgPT09IHVuZGVmaW5lZCApIHRoaW5nVmFsdWUgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5jb21wb25lbnQuc2V0KCB0aGluZ0l0ZW0sIHRoaW5nVmFsdWUsIG9wdGlvbnMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVuLCBjaGVjayB0byB1cGRhdGUgdGhlIGVsZW1lbnQgdmFsdWUgYW5kIGJyb2FkY2FzdCBhIGNoYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpbmdJdGVtID09ICdzZWxlY3QnIHx8IHRoaW5nSXRlbSA9PSAnY2xlYXInICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRFTEVNRU5ULlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwoIHRoaW5nSXRlbSA9PSAnY2xlYXInID8gJycgOiBQLmdldCggdGhpbmdJdGVtLCBTRVRUSU5HUy5mb3JtYXQgKSApLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyKCAnY2hhbmdlJyApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgYSBuZXcgcGlja2VyLlxuICAgICAgICAgICAgICAgICAgICBQLnJlbmRlcigpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgbWV0aG9kIGlzbuKAmXQgbXV0ZWQsIHRyaWdnZXIgcXVldWVkIOKAnHNldOKAnSBldmVudHMgYW5kIHBhc3MgdGhlIGB0aGluZ09iamVjdGAuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMubXV0ZWQgPyBQIDogUC50cmlnZ2VyKCAnc2V0JywgdGhpbmdPYmplY3QgKVxuICAgICAgICAgICAgfSwgLy9zZXRcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBzb21ldGhpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiggdGhpbmcsIGZvcm1hdCApIHtcblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZeKAmXMgc29tZXRoaW5nIHRvIGdldC5cbiAgICAgICAgICAgICAgICB0aGluZyA9IHRoaW5nIHx8ICd2YWx1ZSdcblxuICAgICAgICAgICAgICAgIC8vIElmIGEgcGlja2VyIHN0YXRlIGV4aXN0cywgcmV0dXJuIHRoYXQuXG4gICAgICAgICAgICAgICAgaWYgKCBTVEFURVsgdGhpbmcgXSAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU1RBVEVbIHRoaW5nIF1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHN1Ym1pc3Npb24gdmFsdWUsIGlmIHRoYXQuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGluZyA9PSAndmFsdWVTdWJtaXQnICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIFAuX2hpZGRlbiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQLl9oaWRkZW4udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGluZyA9ICd2YWx1ZSdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHZhbHVlLCBpZiB0aGF0LlxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgPT0gJ3ZhbHVlJyApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEVMRU1FTlQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBhIGNvbXBvbmVudCBpdGVtIGV4aXN0cywgcmV0dXJuIHRoYXQuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGluZyBpbiBQLmNvbXBvbmVudC5pdGVtICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb3JtYXQgPT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGhpbmdWYWx1ZSA9IFAuY29tcG9uZW50LmdldCggdGhpbmcgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaW5nVmFsdWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5jb21wb25lbnQuZm9ybWF0cy50b1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5jb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgZm9ybWF0LCB0aGluZ1ZhbHVlIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUC5jb21wb25lbnQuZ2V0KCB0aGluZyApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgLy9nZXRcblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQmluZCBldmVudHMgb24gdGhlIHRoaW5ncy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb246IGZ1bmN0aW9uKCB0aGluZywgbWV0aG9kLCBpbnRlcm5hbCApIHtcblxuICAgICAgICAgICAgICAgIHZhciB0aGluZ05hbWUsIHRoaW5nTWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICB0aGluZ0lzT2JqZWN0ID0gJC5pc1BsYWluT2JqZWN0KCB0aGluZyApLFxuICAgICAgICAgICAgICAgICAgICB0aGluZ09iamVjdCA9IHRoaW5nSXNPYmplY3QgPyB0aGluZyA6IHt9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0aGluZyBpc27igJl0IGFuIG9iamVjdCwgbWFrZSBpdCBvbmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaW5nSXNPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGluZ09iamVjdFsgdGhpbmcgXSA9IG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR28gdGhyb3VnaCB0aGUgdGhpbmdzIHRvIGJpbmQgdG8uXG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHRoaW5nTmFtZSBpbiB0aGluZ09iamVjdCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JhYiB0aGUgbWV0aG9kIG9mIHRoZSB0aGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nTWV0aG9kID0gdGhpbmdPYmplY3RbIHRoaW5nTmFtZSBdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IHdhcyBhbiBpbnRlcm5hbCBiaW5kaW5nLCBwcmVmaXggaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGludGVybmFsICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nTmFtZSA9ICdfJyArIHRoaW5nTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHRoaW5nIG1ldGhvZHMgY29sbGVjdGlvbiBleGlzdHMuXG4gICAgICAgICAgICAgICAgICAgICAgICBTVEFURS5tZXRob2RzWyB0aGluZ05hbWUgXSA9IFNUQVRFLm1ldGhvZHNbIHRoaW5nTmFtZSBdIHx8IFtdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgbWV0aG9kIHRvIHRoZSByZWxhdGl2ZSBtZXRob2QgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNUQVRFLm1ldGhvZHNbIHRoaW5nTmFtZSBdLnB1c2goIHRoaW5nTWV0aG9kIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQXG4gICAgICAgICAgICB9LCAvL29uXG5cblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVuYmluZCBldmVudHMgb24gdGhlIHRoaW5ncy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwgdGhpbmdOYW1lLFxuICAgICAgICAgICAgICAgICAgICBuYW1lcyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICBmb3IgKCBpID0gMCwgbmFtZXNDb3VudCA9IG5hbWVzLmxlbmd0aDsgaSA8IG5hbWVzQ291bnQ7IGkgKz0gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpbmdOYW1lID0gbmFtZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ05hbWUgaW4gU1RBVEUubWV0aG9kcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBTVEFURS5tZXRob2RzW3RoaW5nTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUFxuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpcmUgb2ZmIG1ldGhvZCBldmVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKCBuYW1lLCBkYXRhICkge1xuICAgICAgICAgICAgICAgIHZhciBfdHJpZ2dlciA9IGZ1bmN0aW9uKCBuYW1lICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kTGlzdCA9IFNUQVRFLm1ldGhvZHNbIG5hbWUgXVxuICAgICAgICAgICAgICAgICAgICBpZiAoIG1ldGhvZExpc3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RMaXN0Lm1hcCggZnVuY3Rpb24oIG1ldGhvZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIG1ldGhvZCwgUCwgWyBkYXRhIF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdHJpZ2dlciggJ18nICsgbmFtZSApXG4gICAgICAgICAgICAgICAgX3RyaWdnZXIoIG5hbWUgKVxuICAgICAgICAgICAgICAgIHJldHVybiBQXG4gICAgICAgICAgICB9IC8vdHJpZ2dlclxuICAgICAgICB9IC8vUGlja2VySW5zdGFuY2UucHJvdG90eXBlXG5cblxuICAgIC8qKlxuICAgICAqIFdyYXAgdGhlIHBpY2tlciBob2xkZXIgY29tcG9uZW50cyB0b2dldGhlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVXcmFwcGVkQ29tcG9uZW50KCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIHBpY2tlciB3cmFwcGVyIGhvbGRlclxuICAgICAgICByZXR1cm4gUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcGlja2VyIHdyYXBwZXIgbm9kZVxuICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBpY2tlciBmcmFtZVxuICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSggJ2RpdicsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcGlja2VyIGJveCBub2RlXG4gICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSggJ2RpdicsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29tcG9uZW50cyBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFAuY29tcG9uZW50Lm5vZGVzKCBTVEFURS5vcGVuICksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBwaWNrZXIgYm94IGNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBDTEFTU0VTLmJveFxuICAgICAgICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFBpY2tlciB3cmFwIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIENMQVNTRVMud3JhcFxuICAgICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgICAvLyBQaWNrZXIgZnJhbWUgY2xhc3NcbiAgICAgICAgICAgICAgICBDTEFTU0VTLmZyYW1lXG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAvLyBQaWNrZXIgaG9sZGVyIGNsYXNzXG4gICAgICAgICAgICBDTEFTU0VTLmhvbGRlclxuICAgICAgICApIC8vZW5kcmV0dXJuXG4gICAgfSAvL2NyZWF0ZVdyYXBwZWRDb21wb25lbnRcblxuXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRoZSBpbnB1dCBlbGVtZW50IHdpdGggYWxsIGJpbmRpbmdzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVFbGVtZW50KCkge1xuXG4gICAgICAgICRFTEVNRU5ULlxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgcGlja2VyIGRhdGEgYnkgY29tcG9uZW50IG5hbWUuXG4gICAgICAgICAgICBkYXRhKE5BTUUsIFApLlxuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIOKAnGlucHV04oCdIGNsYXNzIG5hbWUuXG4gICAgICAgICAgICBhZGRDbGFzcyhDTEFTU0VTLmlucHV0KS5cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0YWJpbmRleC5cbiAgICAgICAgICAgIGF0dHIoJ3RhYmluZGV4JywgLTEpLlxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZeKAmXMgYSBgZGF0YS12YWx1ZWAsIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICB2YWwoICRFTEVNRU5ULmRhdGEoJ3ZhbHVlJykgP1xuICAgICAgICAgICAgICAgIFAuZ2V0KCdzZWxlY3QnLCBTRVRUSU5HUy5mb3JtYXQpIDpcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnZhbHVlXG4gICAgICAgICAgICApXG5cblxuICAgICAgICAvLyBPbmx5IGJpbmQga2V5ZG93biBldmVudHMgaWYgdGhlIGVsZW1lbnQgaXNu4oCZdCBlZGl0YWJsZS5cbiAgICAgICAgaWYgKCAhU0VUVElOR1MuZWRpdGFibGUgKSB7XG5cbiAgICAgICAgICAgICRFTEVNRU5ULlxuXG4gICAgICAgICAgICAgICAgLy8gT24gZm9jdXMvY2xpY2ssIGZvY3VzIG9udG8gdGhlIHJvb3QgdG8gb3BlbiBpdCB1cC5cbiAgICAgICAgICAgICAgICBvbiggJ2ZvY3VzLicgKyBTVEFURS5pZCArICcgY2xpY2suJyArIFNUQVRFLmlkLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5lcSgwKS5mb2N1cygpXG4gICAgICAgICAgICAgICAgfSkuXG5cbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUga2V5Ym9hcmQgZXZlbnQgYmFzZWQgb24gdGhlIHBpY2tlciBiZWluZyBvcGVuZWQgb3Igbm90LlxuICAgICAgICAgICAgICAgIG9uKCAna2V5ZG93bi4nICsgU1RBVEUuaWQsIGhhbmRsZUtleWRvd25FdmVudCApXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYXJpYSBhdHRyaWJ1dGVzLlxuICAgICAgICBhcmlhKEVMRU1FTlQsIHtcbiAgICAgICAgICAgIGhhc3BvcHVwOiB0cnVlLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgb3duczogRUxFTUVOVC5pZCArICdfcm9vdCdcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGhlIHJvb3QgcGlja2VyIGVsZW1lbnQgd2l0aCBhbGwgYmluZGluZ3MuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJlcGFyZUVsZW1lbnRSb290KCkge1xuXG4gICAgICAgIFAuJHJvb3QuXG5cbiAgICAgICAgICAgIG9uKHtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBpT1M4LlxuICAgICAgICAgICAgICAgIGtleWRvd246IGhhbmRsZUtleWRvd25FdmVudCxcblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gc29tZXRoaW5nIHdpdGhpbiB0aGUgcm9vdCBpcyBmb2N1c2VkLCBzdG9wIGZyb20gYnViYmxpbmdcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgZG9jIGFuZCByZW1vdmUgdGhlIOKAnGZvY3VzZWTigJ0gc3RhdGUgZnJvbSB0aGUgcm9vdC5cbiAgICAgICAgICAgICAgICBmb2N1c2luOiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QucmVtb3ZlQ2xhc3MoIENMQVNTRVMuZm9jdXNlZCApXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gc29tZXRoaW5nIHdpdGhpbiB0aGUgcm9vdCBob2xkZXIgaXMgY2xpY2tlZCwgc3RvcCBpdFxuICAgICAgICAgICAgICAgIC8vIGZyb20gYnViYmxpbmcgdG8gdGhlIGRvYy5cbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duIGNsaWNrJzogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXRcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHRhcmdldCBpc27igJl0IHRoZSByb290IGhvbGRlciBzbyBpdCBjYW4gYnViYmxlIHVwLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldCAhPSBQLiRyb290LmNoaWxkcmVuKClbIDAgXSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBGb3IgbW91c2Vkb3duIGV2ZW50cywgY2FuY2VsIHRoZSBkZWZhdWx0IGFjdGlvbiBpbiBvcmRlciB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBwcmV2ZW50IGNhc2VzIHdoZXJlIGZvY3VzIGlzIHNoaWZ0ZWQgb250byBleHRlcm5hbCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3aGVuIHVzaW5nIHRoaW5ncyBsaWtlIGpRdWVyeSBtb2JpbGUgb3IgTWFnbmlmaWNQb3B1cCAocmVmOiAjMjQ5ICYgIzEyMCkuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIEFsc28sIGZvciBGaXJlZm94LCBkb27igJl0IHByZXZlbnQgYWN0aW9uIG9uIHRoZSBgb3B0aW9uYCBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBldmVudC50eXBlID09ICdtb3VzZWRvd24nICYmICEkKCB0YXJnZXQgKS5pcyggJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24sIG9wdGlvbicgKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmUtZm9jdXMgb250byB0aGUgcm9vdCBzbyB0aGF0IHVzZXJzIGNhbiBjbGljayBhd2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSBlbGVtZW50cyBmb2N1c2VkIHdpdGhpbiB0aGUgcGlja2VyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuJHJvb3QuZXEoMCkuZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuXG5cbiAgICAgICAgICAgIC8vIEFkZC9yZW1vdmUgdGhlIOKAnHRhcmdldOKAnSBjbGFzcyBvbiBmb2N1cyBhbmQgYmx1ci5cbiAgICAgICAgICAgIG9uKHtcbiAgICAgICAgICAgICAgICBmb2N1czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICRFTEVNRU5ULmFkZENsYXNzKCBDTEFTU0VTLnRhcmdldCApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJEVMRU1FTlQucmVtb3ZlQ2xhc3MoIENMQVNTRVMudGFyZ2V0IClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5cblxuICAgICAgICAgICAgLy8gT3BlbiB0aGUgcGlja2VyIGFuZCBhZGp1c3QgdGhlIHJvb3Qg4oCcZm9jdXNlZOKAnSBzdGF0ZVxuICAgICAgICAgICAgb24oICdmb2N1cy50b09wZW4nLCBoYW5kbGVGb2N1c1RvT3BlbkV2ZW50ICkuXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGNsaWNrIG9uIGFuIGFjdGlvbmFibGUgZWxlbWVudCwgY2Fycnkgb3V0IHRoZSBhY3Rpb25zLlxuICAgICAgICAgICAgb24oICdjbGljaycsICdbZGF0YS1waWNrXSwgW2RhdGEtbmF2XSwgW2RhdGEtY2xlYXJdLCBbZGF0YS1jbG9zZV0nLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJCggdGhpcyApLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRhID0gJHRhcmdldC5kYXRhKCksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldERpc2FibGVkID0gJHRhcmdldC5oYXNDbGFzcyggQ0xBU1NFUy5uYXZEaXNhYmxlZCApIHx8ICR0YXJnZXQuaGFzQ2xhc3MoIENMQVNTRVMuZGlzYWJsZWQgKSxcblxuICAgICAgICAgICAgICAgICAgICAvLyAqIEZvciBJRSwgbm9uLWZvY3VzYWJsZSBlbGVtZW50cyBjYW4gYmUgYWN0aXZlIGVsZW1lbnRzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY4NDU2MSkuXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBnZXRBY3RpdmVFbGVtZW50KClcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQgJiYgKCBhY3RpdmVFbGVtZW50LnR5cGUgfHwgYWN0aXZlRWxlbWVudC5ocmVmIClcblxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBkaXNhYmxlZCBvciBub3RoaW5nIGluc2lkZSBpcyBhY3RpdmVseSBmb2N1c2VkLCByZS1mb2N1cyB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldERpc2FibGVkIHx8IGFjdGl2ZUVsZW1lbnQgJiYgISQuY29udGFpbnMoIFAuJHJvb3RbMF0sIGFjdGl2ZUVsZW1lbnQgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5lcSgwKS5mb2N1cygpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIHN1cGVyZmljaWFsbHkgY2hhbmdlZCwgdXBkYXRlIHRoZSBgaGlnaGxpZ2h0YCBiYXNlZCBvbiB0aGUgYG5hdmAuXG4gICAgICAgICAgICAgICAgaWYgKCAhdGFyZ2V0RGlzYWJsZWQgJiYgdGFyZ2V0RGF0YS5uYXYgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuc2V0KCAnaGlnaGxpZ2h0JywgUC5jb21wb25lbnQuaXRlbS5oaWdobGlnaHQsIHsgbmF2OiB0YXJnZXREYXRhLm5hdiB9IClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBzb21ldGhpbmcgaXMgcGlja2VkLCBzZXQgYHNlbGVjdGAgdGhlbiBjbG9zZSB3aXRoIGZvY3VzLlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhdGFyZ2V0RGlzYWJsZWQgJiYgJ3BpY2snIGluIHRhcmdldERhdGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuc2V0KCAnc2VsZWN0JywgdGFyZ2V0RGF0YS5waWNrIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhIOKAnGNsZWFy4oCdIGJ1dHRvbiBpcyBwcmVzc2VkLCBlbXB0eSB0aGUgdmFsdWVzIGFuZCBjbG9zZSB3aXRoIGZvY3VzLlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCB0YXJnZXREYXRhLmNsZWFyICkge1xuICAgICAgICAgICAgICAgICAgICBQLmNsZWFyKCkuY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCB0YXJnZXREYXRhLmNsb3NlICkge1xuICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pIC8vUC4kcm9vdFxuXG4gICAgICAgIGFyaWEoIFAuJHJvb3RbMF0sICdoaWRkZW4nLCB0cnVlIClcbiAgICB9XG5cblxuICAgICAvKipcbiAgICAgICogUHJlcGFyZSB0aGUgaGlkZGVuIGlucHV0IGVsZW1lbnQgYWxvbmcgd2l0aCBhbGwgYmluZGluZ3MuXG4gICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVFbGVtZW50SGlkZGVuKCkge1xuXG4gICAgICAgIHZhciBuYW1lXG5cbiAgICAgICAgaWYgKCBTRVRUSU5HUy5oaWRkZW5OYW1lID09PSB0cnVlICkge1xuICAgICAgICAgICAgbmFtZSA9IEVMRU1FTlQubmFtZVxuICAgICAgICAgICAgRUxFTUVOVC5uYW1lID0gJydcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5hbWUgPSBbXG4gICAgICAgICAgICAgICAgdHlwZW9mIFNFVFRJTkdTLmhpZGRlblByZWZpeCA9PSAnc3RyaW5nJyA/IFNFVFRJTkdTLmhpZGRlblByZWZpeCA6ICcnLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBTRVRUSU5HUy5oaWRkZW5TdWZmaXggPT0gJ3N0cmluZycgPyBTRVRUSU5HUy5oaWRkZW5TdWZmaXggOiAnX3N1Ym1pdCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lWzBdICsgRUxFTUVOVC5uYW1lICsgbmFtZVsxXVxuICAgICAgICB9XG5cbiAgICAgICAgUC5faGlkZGVuID0gJChcbiAgICAgICAgICAgICc8aW5wdXQgJyArXG4gICAgICAgICAgICAndHlwZT1oaWRkZW4gJyArXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbmFtZSB1c2luZyB0aGUgb3JpZ2luYWwgaW5wdXTigJlzIHdpdGggYSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAgICAgICAgICduYW1lPVwiJyArIG5hbWUgKyAnXCInICtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgdmFsdWUsIHNldCB0aGUgaGlkZGVuIHZhbHVlIGFzIHdlbGwuXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQuZGF0YSgndmFsdWUnKSB8fCBFTEVNRU5ULnZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgJyB2YWx1ZT1cIicgKyBQLmdldCgnc2VsZWN0JywgU0VUVElOR1MuZm9ybWF0U3VibWl0KSArICdcIicgOlxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAnPidcbiAgICAgICAgKVswXVxuXG4gICAgICAgICRFTEVNRU5ULlxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgY2hhbmdlcywgdXBkYXRlIHRoZSBoaWRkZW4gaW5wdXQgd2l0aCB0aGUgY29ycmVjdCBmb3JtYXQuXG4gICAgICAgICAgICBvbignY2hhbmdlLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgUC5faGlkZGVuLnZhbHVlID0gRUxFTUVOVC52YWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgIFAuZ2V0KCdzZWxlY3QnLCBTRVRUSU5HUy5mb3JtYXRTdWJtaXQpIDpcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAvLyBJbnNlcnQgdGhlIGhpZGRlbiBpbnB1dCBhcyBzcGVjaWZpZWQgaW4gdGhlIHNldHRpbmdzLlxuICAgICAgICBpZiAoIFNFVFRJTkdTLmNvbnRhaW5lciApICQoIFNFVFRJTkdTLmNvbnRhaW5lciApLmFwcGVuZCggUC5faGlkZGVuIClcbiAgICAgICAgZWxzZSAkRUxFTUVOVC5hZnRlciggUC5faGlkZGVuIClcbiAgICB9XG5cblxuICAgIC8vIEZvciBpT1M4LlxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleWRvd25FdmVudCggZXZlbnQgKSB7XG5cbiAgICAgICAgdmFyIGtleWNvZGUgPSBldmVudC5rZXlDb2RlLFxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBvbmUgb2YgdGhlIGRlbGV0ZSBrZXlzIHdhcyBwcmVzc2VkLlxuICAgICAgICAgICAgaXNLZXljb2RlRGVsZXRlID0gL14oOHw0NikkLy50ZXN0KGtleWNvZGUpXG5cbiAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uIElFIGNsZWFycyB0aGUgaW5wdXQgdmFsdWUgb24g4oCcZXNjYXBl4oCdLlxuICAgICAgICBpZiAoIGtleWNvZGUgPT0gMjcgKSB7XG4gICAgICAgICAgICBQLmNsb3NlKClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYHNwYWNlYCBvciBgZGVsZXRlYCB3YXMgcHJlc3NlZCBvciB0aGUgcGlja2VyIGlzIGNsb3NlZCB3aXRoIGEga2V5IG1vdmVtZW50LlxuICAgICAgICBpZiAoIGtleWNvZGUgPT0gMzIgfHwgaXNLZXljb2RlRGVsZXRlIHx8ICFTVEFURS5vcGVuICYmIFAuY29tcG9uZW50LmtleVtrZXljb2RlXSApIHtcblxuICAgICAgICAgICAgLy8gUHJldmVudCBpdCBmcm9tIG1vdmluZyB0aGUgcGFnZSBhbmQgYnViYmxpbmcgdG8gZG9jLlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgLy8gSWYgYGRlbGV0ZWAgd2FzIHByZXNzZWQsIGNsZWFyIHRoZSB2YWx1ZXMgYW5kIGNsb3NlIHRoZSBwaWNrZXIuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2Ugb3BlbiB0aGUgcGlja2VyLlxuICAgICAgICAgICAgaWYgKCBpc0tleWNvZGVEZWxldGUgKSB7IFAuY2xlYXIoKS5jbG9zZSgpIH1cbiAgICAgICAgICAgIGVsc2UgeyBQLm9wZW4oKSB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFNlcGFyYXRlZCBmb3IgSUVcbiAgICBmdW5jdGlvbiBoYW5kbGVGb2N1c1RvT3BlbkV2ZW50KCBldmVudCApIHtcblxuICAgICAgICAvLyBTdG9wIHRoZSBldmVudCBmcm9tIHByb3BhZ2F0aW5nIHRvIHRoZSBkb2MuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgLy8gSWYgaXTigJlzIGEgZm9jdXMgZXZlbnQsIGFkZCB0aGUg4oCcZm9jdXNlZOKAnSBjbGFzcyB0byB0aGUgcm9vdC5cbiAgICAgICAgaWYgKCBldmVudC50eXBlID09ICdmb2N1cycgKSB7XG4gICAgICAgICAgICBQLiRyb290LmFkZENsYXNzKCBDTEFTU0VTLmZvY3VzZWQgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5kIHRoZW4gZmluYWxseSBvcGVuIHRoZSBwaWNrZXIuXG4gICAgICAgIFAub3BlbigpXG4gICAgfVxuXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgcGlja2VyIGluc3RhbmNlLlxuICAgIHJldHVybiBuZXcgUGlja2VySW5zdGFuY2UoKVxufSAvL1BpY2tlckNvbnN0cnVjdG9yXG5cblxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGNsYXNzZXMgYW5kIHByZWZpeCB0byB1c2UgZm9yIHRoZSBIVE1MIGNsYXNzZXMuXG4gKi9cblBpY2tlckNvbnN0cnVjdG9yLmtsYXNzZXMgPSBmdW5jdGlvbiggcHJlZml4ICkge1xuICAgIHByZWZpeCA9IHByZWZpeCB8fCAncGlja2VyJ1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgcGlja2VyOiBwcmVmaXgsXG4gICAgICAgIG9wZW5lZDogcHJlZml4ICsgJy0tb3BlbmVkJyxcbiAgICAgICAgZm9jdXNlZDogcHJlZml4ICsgJy0tZm9jdXNlZCcsXG5cbiAgICAgICAgaW5wdXQ6IHByZWZpeCArICdfX2lucHV0JyxcbiAgICAgICAgYWN0aXZlOiBwcmVmaXggKyAnX19pbnB1dC0tYWN0aXZlJyxcbiAgICAgICAgdGFyZ2V0OiBwcmVmaXggKyAnX19pbnB1dC0tdGFyZ2V0JyxcblxuICAgICAgICBob2xkZXI6IHByZWZpeCArICdfX2hvbGRlcicsXG5cbiAgICAgICAgZnJhbWU6IHByZWZpeCArICdfX2ZyYW1lJyxcbiAgICAgICAgd3JhcDogcHJlZml4ICsgJ19fd3JhcCcsXG5cbiAgICAgICAgYm94OiBwcmVmaXggKyAnX19ib3gnXG4gICAgfVxufSAvL1BpY2tlckNvbnN0cnVjdG9yLmtsYXNzZXNcblxuXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGRlZmF1bHQgdGhlbWUgaXMgYmVpbmcgdXNlZC5cbiAqL1xuZnVuY3Rpb24gaXNVc2luZ0RlZmF1bHRUaGVtZSggZWxlbWVudCApIHtcblxuICAgIHZhciB0aGVtZSxcbiAgICAgICAgcHJvcCA9ICdwb3NpdGlvbidcblxuICAgIC8vIEZvciBJRS5cbiAgICBpZiAoIGVsZW1lbnQuY3VycmVudFN0eWxlICkge1xuICAgICAgICB0aGVtZSA9IGVsZW1lbnQuY3VycmVudFN0eWxlW3Byb3BdXG4gICAgfVxuXG4gICAgLy8gRm9yIG5vcm1hbCBicm93c2Vycy5cbiAgICBlbHNlIGlmICggd2luZG93LmdldENvbXB1dGVkU3R5bGUgKSB7XG4gICAgICAgIHRoZW1lID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbWVudCApW3Byb3BdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW1lID09ICdmaXhlZCdcbn1cblxuXG5cbi8qKlxuICogR2V0IHRoZSB3aWR0aCBvZiB0aGUgYnJvd3NlcuKAmXMgc2Nyb2xsYmFyLlxuICogVGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL1ZvZGthQmVhcnMvUmVtb2RhbC9ibG9iL21hc3Rlci9zcmMvanF1ZXJ5LnJlbW9kYWwuanNcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG5cbiAgICBpZiAoICRodG1sLmhlaWdodCgpIDw9ICR3aW5kb3cuaGVpZ2h0KCkgKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgdmFyICRvdXRlciA9ICQoICc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MTAwcHhcIiAvPicgKS5cbiAgICAgICAgYXBwZW5kVG8oICdib2R5JyApXG5cbiAgICAvLyBHZXQgdGhlIHdpZHRoIHdpdGhvdXQgc2Nyb2xsYmFycy5cbiAgICB2YXIgd2lkdGhXaXRob3V0U2Nyb2xsID0gJG91dGVyWzBdLm9mZnNldFdpZHRoXG5cbiAgICAvLyBGb3JjZSBhZGRpbmcgc2Nyb2xsYmFycy5cbiAgICAkb3V0ZXIuY3NzKCAnb3ZlcmZsb3cnLCAnc2Nyb2xsJyApXG5cbiAgICAvLyBBZGQgdGhlIGlubmVyIGRpdi5cbiAgICB2YXIgJGlubmVyID0gJCggJzxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz4nICkuYXBwZW5kVG8oICRvdXRlciApXG5cbiAgICAvLyBHZXQgdGhlIHdpZHRoIHdpdGggc2Nyb2xsYmFycy5cbiAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gJGlubmVyWzBdLm9mZnNldFdpZHRoXG5cbiAgICAvLyBSZW1vdmUgdGhlIGRpdnMuXG4gICAgJG91dGVyLnJlbW92ZSgpXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgd2lkdGhzLlxuICAgIHJldHVybiB3aWR0aFdpdGhvdXRTY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGxcbn1cblxuXG5cbi8qKlxuICogUGlja2VyQ29uc3RydWN0b3IgaGVscGVyIG1ldGhvZHMuXG4gKi9cblBpY2tlckNvbnN0cnVjdG9yLl8gPSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBncm91cCBvZiBub2Rlcy4gRXhwZWN0czpcbiAgICAgKiBgXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1pbjogICAge0ludGVnZXJ9LFxuICAgICAgICAgICAgbWF4OiAgICB7SW50ZWdlcn0sXG4gICAgICAgICAgICBpOiAgICAgIHtJbnRlZ2VyfSxcbiAgICAgICAgICAgIG5vZGU6ICAge1N0cmluZ30sXG4gICAgICAgICAgICBpdGVtOiAgIHtGdW5jdGlvbn1cbiAgICAgICAgfVxuICAgICAqIGBcbiAgICAgKi9cbiAgICBncm91cDogZnVuY3Rpb24oIGdyb3VwT2JqZWN0ICkge1xuXG4gICAgICAgIHZhclxuICAgICAgICAgICAgLy8gU2NvcGUgZm9yIHRoZSBsb29wZWQgb2JqZWN0XG4gICAgICAgICAgICBsb29wT2JqZWN0U2NvcGUsXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbm9kZXMgbGlzdFxuICAgICAgICAgICAgbm9kZXNMaXN0ID0gJycsXG5cbiAgICAgICAgICAgIC8vIFRoZSBjb3VudGVyIHN0YXJ0cyBmcm9tIHRoZSBgbWluYFxuICAgICAgICAgICAgY291bnRlciA9IFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggZ3JvdXBPYmplY3QubWluLCBncm91cE9iamVjdCApXG5cblxuICAgICAgICAvLyBMb29wIGZyb20gdGhlIGBtaW5gIHRvIGBtYXhgLCBpbmNyZW1lbnRpbmcgYnkgYGlgXG4gICAgICAgIGZvciAoIDsgY291bnRlciA8PSBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGdyb3VwT2JqZWN0Lm1heCwgZ3JvdXBPYmplY3QsIFsgY291bnRlciBdICk7IGNvdW50ZXIgKz0gZ3JvdXBPYmplY3QuaSApIHtcblxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgYGl0ZW1gIGZ1bmN0aW9uIHdpdGhpbiBzY29wZSBvZiB0aGUgb2JqZWN0XG4gICAgICAgICAgICBsb29wT2JqZWN0U2NvcGUgPSBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGdyb3VwT2JqZWN0Lml0ZW0sIGdyb3VwT2JqZWN0LCBbIGNvdW50ZXIgXSApXG5cbiAgICAgICAgICAgIC8vIFNwbGljZSB0aGUgc3ViZ3JvdXAgYW5kIGNyZWF0ZSBub2RlcyBvdXQgb2YgdGhlIHN1YiBub2Rlc1xuICAgICAgICAgICAgbm9kZXNMaXN0ICs9IFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZShcbiAgICAgICAgICAgICAgICBncm91cE9iamVjdC5ub2RlLFxuICAgICAgICAgICAgICAgIGxvb3BPYmplY3RTY29wZVsgMCBdLCAgIC8vIHRoZSBub2RlXG4gICAgICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlWyAxIF0sICAgLy8gdGhlIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBsb29wT2JqZWN0U2NvcGVbIDIgXSAgICAvLyB0aGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBsaXN0IG9mIG5vZGVzXG4gICAgICAgIHJldHVybiBub2Rlc0xpc3RcbiAgICB9LCAvL2dyb3VwXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRvbSBub2RlIHN0cmluZ1xuICAgICAqL1xuICAgIG5vZGU6IGZ1bmN0aW9uKCB3cmFwcGVyLCBpdGVtLCBrbGFzcywgYXR0cmlidXRlICkge1xuXG4gICAgICAgIC8vIElmIHRoZSBpdGVtIGlzIGZhbHNlLXksIGp1c3QgcmV0dXJuIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICBpZiAoICFpdGVtICkgcmV0dXJuICcnXG5cbiAgICAgICAgLy8gSWYgdGhlIGl0ZW0gaXMgYW4gYXJyYXksIGRvIGEgam9pblxuICAgICAgICBpdGVtID0gJC5pc0FycmF5KCBpdGVtICkgPyBpdGVtLmpvaW4oICcnICkgOiBpdGVtXG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRoZSBjbGFzc1xuICAgICAgICBrbGFzcyA9IGtsYXNzID8gJyBjbGFzcz1cIicgKyBrbGFzcyArICdcIicgOiAnJ1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBhbnkgYXR0cmlidXRlc1xuICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGUgPyAnICcgKyBhdHRyaWJ1dGUgOiAnJ1xuXG4gICAgICAgIC8vIFJldHVybiB0aGUgd3JhcHBlZCBpdGVtXG4gICAgICAgIHJldHVybiAnPCcgKyB3cmFwcGVyICsga2xhc3MgKyBhdHRyaWJ1dGUgKyAnPicgKyBpdGVtICsgJzwvJyArIHdyYXBwZXIgKyAnPidcbiAgICB9LCAvL25vZGVcblxuXG4gICAgLyoqXG4gICAgICogTGVhZCBudW1iZXJzIGJlbG93IDEwIHdpdGggYSB6ZXJvLlxuICAgICAqL1xuICAgIGxlYWQ6IGZ1bmN0aW9uKCBudW1iZXIgKSB7XG4gICAgICAgIHJldHVybiAoIG51bWJlciA8IDEwID8gJzAnOiAnJyApICsgbnVtYmVyXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIGZ1bmN0aW9uIG90aGVyd2lzZSByZXR1cm4gdGhlIHZhbHVlLlxuICAgICAqL1xuICAgIHRyaWdnZXI6IGZ1bmN0aW9uKCBjYWxsYmFjaywgc2NvcGUsIGFyZ3MgKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrLmFwcGx5KCBzY29wZSwgYXJncyB8fCBbXSApIDogY2FsbGJhY2tcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgc2Vjb25kIGNoYXJhY3RlciBpcyBhIGRpZ2l0LCBsZW5ndGggaXMgMiBvdGhlcndpc2UgMS5cbiAgICAgKi9cbiAgICBkaWdpdHM6IGZ1bmN0aW9uKCBzdHJpbmcgKSB7XG4gICAgICAgIHJldHVybiAoIC9cXGQvICkudGVzdCggc3RyaW5nWyAxIF0gKSA/IDIgOiAxXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVGVsbCBpZiBzb21ldGhpbmcgaXMgYSBkYXRlIG9iamVjdC5cbiAgICAgKi9cbiAgICBpc0RhdGU6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwoIHZhbHVlICkuaW5kZXhPZiggJ0RhdGUnICkgPiAtMSAmJiB0aGlzLmlzSW50ZWdlciggdmFsdWUuZ2V0RGF0ZSgpIClcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBUZWxsIGlmIHNvbWV0aGluZyBpcyBhbiBpbnRlZ2VyLlxuICAgICAqL1xuICAgIGlzSW50ZWdlcjogZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCggdmFsdWUgKS5pbmRleE9mKCAnTnVtYmVyJyApID4gLTEgJiYgdmFsdWUgJSAxID09PSAwXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIEFSSUEgYXR0cmlidXRlIHN0cmluZ3MuXG4gICAgICovXG4gICAgYXJpYUF0dHI6IGFyaWFBdHRyXG59IC8vUGlja2VyQ29uc3RydWN0b3IuX1xuXG5cblxuLyoqXG4gKiBFeHRlbmQgdGhlIHBpY2tlciB3aXRoIGEgY29tcG9uZW50IGFuZCBkZWZhdWx0cy5cbiAqL1xuUGlja2VyQ29uc3RydWN0b3IuZXh0ZW5kID0gZnVuY3Rpb24oIG5hbWUsIENvbXBvbmVudCApIHtcblxuICAgIC8vIEV4dGVuZCBqUXVlcnkuXG4gICAgJC5mblsgbmFtZSBdID0gZnVuY3Rpb24oIG9wdGlvbnMsIGFjdGlvbiApIHtcblxuICAgICAgICAvLyBHcmFiIHRoZSBjb21wb25lbnQgZGF0YS5cbiAgICAgICAgdmFyIGNvbXBvbmVudERhdGEgPSB0aGlzLmRhdGEoIG5hbWUgKVxuXG4gICAgICAgIC8vIElmIHRoZSBwaWNrZXIgaXMgcmVxdWVzdGVkLCByZXR1cm4gdGhlIGRhdGEgb2JqZWN0LlxuICAgICAgICBpZiAoIG9wdGlvbnMgPT0gJ3BpY2tlcicgKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50RGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGNvbXBvbmVudCBkYXRhIGV4aXN0cyBhbmQgYG9wdGlvbnNgIGlzIGEgc3RyaW5nLCBjYXJyeSBvdXQgdGhlIGFjdGlvbi5cbiAgICAgICAgaWYgKCBjb21wb25lbnREYXRhICYmIHR5cGVvZiBvcHRpb25zID09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgcmV0dXJuIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggY29tcG9uZW50RGF0YVsgb3B0aW9ucyBdLCBjb21wb25lbnREYXRhLCBbIGFjdGlvbiBdIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIGVhY2ggbWF0Y2hlZCBlbGVtZW50IGFuZCBpZiB0aGUgY29tcG9uZW50XG4gICAgICAgIC8vIGRvZXNu4oCZdCBleGlzdCwgY3JlYXRlIGEgbmV3IHBpY2tlciB1c2luZyBgdGhpc2AgZWxlbWVudFxuICAgICAgICAvLyBhbmQgbWVyZ2luZyB0aGUgZGVmYXVsdHMgYW5kIG9wdGlvbnMgd2l0aCBhIGRlZXAgY29weS5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKCB0aGlzIClcbiAgICAgICAgICAgIGlmICggISR0aGlzLmRhdGEoIG5hbWUgKSApIHtcbiAgICAgICAgICAgICAgICBuZXcgUGlja2VyQ29uc3RydWN0b3IoIHRoaXMsIG5hbWUsIENvbXBvbmVudCwgb3B0aW9ucyApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cy5cbiAgICAkLmZuWyBuYW1lIF0uZGVmYXVsdHMgPSBDb21wb25lbnQuZGVmYXVsdHNcbn0gLy9QaWNrZXJDb25zdHJ1Y3Rvci5leHRlbmRcblxuXG5cbmZ1bmN0aW9uIGFyaWEoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICggJC5pc1BsYWluT2JqZWN0KGF0dHJpYnV0ZSkgKSB7XG4gICAgICAgIGZvciAoIHZhciBrZXkgaW4gYXR0cmlidXRlICkge1xuICAgICAgICAgICAgYXJpYVNldChlbGVtZW50LCBrZXksIGF0dHJpYnV0ZVtrZXldKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhcmlhU2V0KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxufVxuZnVuY3Rpb24gYXJpYVNldChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIChhdHRyaWJ1dGUgPT0gJ3JvbGUnID8gJycgOiAnYXJpYS0nKSArIGF0dHJpYnV0ZSxcbiAgICAgICAgdmFsdWVcbiAgICApXG59XG5mdW5jdGlvbiBhcmlhQXR0cihhdHRyaWJ1dGUsIGRhdGEpIHtcbiAgICBpZiAoICEkLmlzUGxhaW5PYmplY3QoYXR0cmlidXRlKSApIHtcbiAgICAgICAgYXR0cmlidXRlID0geyBhdHRyaWJ1dGU6IGRhdGEgfVxuICAgIH1cbiAgICBkYXRhID0gJydcbiAgICBmb3IgKCB2YXIga2V5IGluIGF0dHJpYnV0ZSApIHtcbiAgICAgICAgdmFyIGF0dHIgPSAoa2V5ID09ICdyb2xlJyA/ICcnIDogJ2FyaWEtJykgKyBrZXksXG4gICAgICAgICAgICBhdHRyVmFsID0gYXR0cmlidXRlW2tleV1cbiAgICAgICAgZGF0YSArPSBhdHRyVmFsID09IG51bGwgPyAnJyA6IGF0dHIgKyAnPVwiJyArIGF0dHJpYnV0ZVtrZXldICsgJ1wiJ1xuICAgIH1cbiAgICByZXR1cm4gZGF0YVxufVxuXG4vLyBJRTggYnVnIHRocm93cyBhbiBlcnJvciBmb3IgYWN0aXZlRWxlbWVudHMgd2l0aGluIGlmcmFtZXMuXG5mdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgfSBjYXRjaCAoIGVyciApIHsgfVxufVxuXG5cblxuLy8gRXhwb3NlIHRoZSBwaWNrZXIgY29uc3RydWN0b3IuXG5yZXR1cm4gUGlja2VyQ29uc3RydWN0b3JcblxuXG59KSk7XG5cblxuOy8qIVxuICogRGF0ZSBwaWNrZXIgZm9yIHBpY2thZGF0ZS5qcyB2My41LjBcbiAqIGh0dHA6Ly9hbXN1bC5naXRodWIuaW8vcGlja2FkYXRlLmpzL2RhdGUuaHRtXG4gKi9cblxuKGZ1bmN0aW9uICggZmFjdG9yeSApIHtcblxuICAgIC8vIEFNRC5cbiAgICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kIClcbiAgICAgICAgZGVmaW5lKCBbJ3BpY2tlcicsICdqcXVlcnknXSwgZmFjdG9yeSApXG5cbiAgICAvLyBOb2RlLmpzL2Jyb3dzZXJpZnkuXG4gICAgZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnIClcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCByZXF1aXJlKCcuL3BpY2tlci5qcycpLCByZXF1aXJlKCdqcXVlcnknKSApXG5cbiAgICAvLyBCcm93c2VyIGdsb2JhbHMuXG4gICAgZWxzZSBmYWN0b3J5KCBQaWNrZXIsIGpRdWVyeSApXG5cbn0oZnVuY3Rpb24oIFBpY2tlciwgJCApIHtcblxuXG4vKipcbiAqIEdsb2JhbHMgYW5kIGNvbnN0YW50c1xuICovXG52YXIgREFZU19JTl9XRUVLID0gNyxcbiAgICBXRUVLU19JTl9DQUxFTkRBUiA9IDYsXG4gICAgXyA9IFBpY2tlci5fXG5cblxuXG4vKipcbiAqIFRoZSBkYXRlIHBpY2tlciBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBEYXRlUGlja2VyKCBwaWNrZXIsIHNldHRpbmdzICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgZWxlbWVudCA9IHBpY2tlci4kbm9kZVsgMCBdLFxuICAgICAgICBlbGVtZW50VmFsdWUgPSBlbGVtZW50LnZhbHVlLFxuICAgICAgICBlbGVtZW50RGF0YVZhbHVlID0gcGlja2VyLiRub2RlLmRhdGEoICd2YWx1ZScgKSxcbiAgICAgICAgdmFsdWVTdHJpbmcgPSBlbGVtZW50RGF0YVZhbHVlIHx8IGVsZW1lbnRWYWx1ZSxcbiAgICAgICAgZm9ybWF0U3RyaW5nID0gZWxlbWVudERhdGFWYWx1ZSA/IHNldHRpbmdzLmZvcm1hdFN1Ym1pdCA6IHNldHRpbmdzLmZvcm1hdCxcbiAgICAgICAgaXNSVEwgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY3VycmVudFN0eWxlID9cblxuICAgICAgICAgICAgICAgIC8vIEZvciBJRS5cbiAgICAgICAgICAgICAgICBlbGVtZW50LmN1cnJlbnRTdHlsZS5kaXJlY3Rpb24gPT0gJ3J0bCcgOlxuXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vcm1hbCBicm93c2Vycy5cbiAgICAgICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKCBwaWNrZXIuJHJvb3RbMF0gKS5kaXJlY3Rpb24gPT0gJ3J0bCdcbiAgICAgICAgfVxuXG4gICAgY2FsZW5kYXIuc2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIGNhbGVuZGFyLiRub2RlID0gcGlja2VyLiRub2RlXG5cbiAgICAvLyBUaGUgcXVldWUgb2YgbWV0aG9kcyB0aGF0IHdpbGwgYmUgdXNlZCB0byBidWlsZCBpdGVtIG9iamVjdHMuXG4gICAgY2FsZW5kYXIucXVldWUgPSB7XG4gICAgICAgIG1pbjogJ21lYXN1cmUgY3JlYXRlJyxcbiAgICAgICAgbWF4OiAnbWVhc3VyZSBjcmVhdGUnLFxuICAgICAgICBub3c6ICdub3cgY3JlYXRlJyxcbiAgICAgICAgc2VsZWN0OiAncGFyc2UgY3JlYXRlIHZhbGlkYXRlJyxcbiAgICAgICAgaGlnaGxpZ2h0OiAncGFyc2UgbmF2aWdhdGUgY3JlYXRlIHZhbGlkYXRlJyxcbiAgICAgICAgdmlldzogJ3BhcnNlIGNyZWF0ZSB2YWxpZGF0ZSB2aWV3c2V0JyxcbiAgICAgICAgZGlzYWJsZTogJ2RlYWN0aXZhdGUnLFxuICAgICAgICBlbmFibGU6ICdhY3RpdmF0ZSdcbiAgICB9XG5cbiAgICAvLyBUaGUgY29tcG9uZW50J3MgaXRlbSBvYmplY3QuXG4gICAgY2FsZW5kYXIuaXRlbSA9IHt9XG5cbiAgICBjYWxlbmRhci5pdGVtLmNsZWFyID0gbnVsbFxuICAgIGNhbGVuZGFyLml0ZW0uZGlzYWJsZSA9ICggc2V0dGluZ3MuZGlzYWJsZSB8fCBbXSApLnNsaWNlKCAwIClcbiAgICBjYWxlbmRhci5pdGVtLmVuYWJsZSA9IC0oZnVuY3Rpb24oIGNvbGxlY3Rpb25EaXNhYmxlZCApIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25EaXNhYmxlZFsgMCBdID09PSB0cnVlID8gY29sbGVjdGlvbkRpc2FibGVkLnNoaWZ0KCkgOiAtMVxuICAgIH0pKCBjYWxlbmRhci5pdGVtLmRpc2FibGUgKVxuXG4gICAgY2FsZW5kYXIuXG4gICAgICAgIHNldCggJ21pbicsIHNldHRpbmdzLm1pbiApLlxuICAgICAgICBzZXQoICdtYXgnLCBzZXR0aW5ncy5tYXggKS5cbiAgICAgICAgc2V0KCAnbm93JyApXG5cbiAgICAvLyBXaGVuIHRoZXJl4oCZcyBhIHZhbHVlLCBzZXQgdGhlIGBzZWxlY3RgLCB3aGljaCBpbiB0dXJuXG4gICAgLy8gYWxzbyBzZXRzIHRoZSBgaGlnaGxpZ2h0YCBhbmQgYHZpZXdgLlxuICAgIGlmICggdmFsdWVTdHJpbmcgKSB7XG4gICAgICAgIGNhbGVuZGFyLnNldCggJ3NlbGVjdCcsIHZhbHVlU3RyaW5nLCB7IGZvcm1hdDogZm9ybWF0U3RyaW5nIH0pXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIHZhbHVlLCBkZWZhdWx0IHRvIGhpZ2hsaWdodGluZyDigJx0b2RheeKAnS5cbiAgICBlbHNlIHtcbiAgICAgICAgY2FsZW5kYXIuXG4gICAgICAgICAgICBzZXQoICdzZWxlY3QnLCBudWxsICkuXG4gICAgICAgICAgICBzZXQoICdoaWdobGlnaHQnLCBjYWxlbmRhci5pdGVtLm5vdyApXG4gICAgfVxuXG5cbiAgICAvLyBUaGUga2V5Y29kZSB0byBtb3ZlbWVudCBtYXBwaW5nLlxuICAgIGNhbGVuZGFyLmtleSA9IHtcbiAgICAgICAgNDA6IDcsIC8vIERvd25cbiAgICAgICAgMzg6IC03LCAvLyBVcFxuICAgICAgICAzOTogZnVuY3Rpb24oKSB7IHJldHVybiBpc1JUTCgpID8gLTEgOiAxIH0sIC8vIFJpZ2h0XG4gICAgICAgIDM3OiBmdW5jdGlvbigpIHsgcmV0dXJuIGlzUlRMKCkgPyAxIDogLTEgfSwgLy8gTGVmdFxuICAgICAgICBnbzogZnVuY3Rpb24oIHRpbWVDaGFuZ2UgKSB7XG4gICAgICAgICAgICB2YXIgaGlnaGxpZ2h0ZWRPYmplY3QgPSBjYWxlbmRhci5pdGVtLmhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRlID0gbmV3IERhdGUoIGhpZ2hsaWdodGVkT2JqZWN0LnllYXIsIGhpZ2hsaWdodGVkT2JqZWN0Lm1vbnRoLCBoaWdobGlnaHRlZE9iamVjdC5kYXRlICsgdGltZUNoYW5nZSApXG4gICAgICAgICAgICBjYWxlbmRhci5zZXQoXG4gICAgICAgICAgICAgICAgJ2hpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSxcbiAgICAgICAgICAgICAgICB7IGludGVydmFsOiB0aW1lQ2hhbmdlIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gQmluZCBzb21lIHBpY2tlciBldmVudHMuXG4gICAgcGlja2VyLlxuICAgICAgICBvbiggJ3JlbmRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcGlja2VyLiRyb290LmZpbmQoICcuJyArIHNldHRpbmdzLmtsYXNzLnNlbGVjdE1vbnRoICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKCB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyLnNldCggJ2hpZ2hsaWdodCcsIFsgcGlja2VyLmdldCggJ3ZpZXcnICkueWVhciwgdmFsdWUsIHBpY2tlci5nZXQoICdoaWdobGlnaHQnICkuZGF0ZSBdIClcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyLiRyb290LmZpbmQoICcuJyArIHNldHRpbmdzLmtsYXNzLnNlbGVjdE1vbnRoICkudHJpZ2dlciggJ2ZvY3VzJyApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RZZWFyICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKCB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyLnNldCggJ2hpZ2hsaWdodCcsIFsgdmFsdWUsIHBpY2tlci5nZXQoICd2aWV3JyApLm1vbnRoLCBwaWNrZXIuZ2V0KCAnaGlnaGxpZ2h0JyApLmRhdGUgXSApXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RZZWFyICkudHJpZ2dlciggJ2ZvY3VzJyApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMSApLlxuICAgICAgICBvbiggJ29wZW4nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpbmNsdWRlVG9kYXkgPSAnJ1xuICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5kaXNhYmxlZCggY2FsZW5kYXIuZ2V0KCdub3cnKSApICkge1xuICAgICAgICAgICAgICAgIGluY2x1ZGVUb2RheSA9ICc6bm90KC4nICsgc2V0dGluZ3Mua2xhc3MuYnV0dG9uVG9kYXkgKyAnKSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnYnV0dG9uJyArIGluY2x1ZGVUb2RheSArICcsIHNlbGVjdCcgKS5hdHRyKCAnZGlzYWJsZWQnLCBmYWxzZSApXG4gICAgICAgIH0sIDEgKS5cbiAgICAgICAgb24oICdjbG9zZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcGlja2VyLiRyb290LmZpbmQoICdidXR0b24sIHNlbGVjdCcgKS5hdHRyKCAnZGlzYWJsZWQnLCB0cnVlIClcbiAgICAgICAgfSwgMSApXG5cbn0gLy9EYXRlUGlja2VyXG5cblxuLyoqXG4gKiBTZXQgYSBkYXRlcGlja2VyIGl0ZW0gb2JqZWN0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBjYWxlbmRhckl0ZW0gPSBjYWxlbmRhci5pdGVtXG5cbiAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYG51bGxgIGp1c3Qgc2V0IGl0IGltbWVkaWF0ZWx5LlxuICAgIGlmICggdmFsdWUgPT09IG51bGwgKSB7XG4gICAgICAgIGlmICggdHlwZSA9PSAnY2xlYXInICkgdHlwZSA9ICdzZWxlY3QnXG4gICAgICAgIGNhbGVuZGFySXRlbVsgdHlwZSBdID0gdmFsdWVcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyXG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggdGhlIHF1ZXVlIG9mIG1ldGhvZHMsIGFuZCBpbnZva2UgdGhlIGZ1bmN0aW9ucy5cbiAgICAvLyBVcGRhdGUgdGhpcyBhcyB0aGUgdGltZSB1bml0LCBhbmQgc2V0IHRoZSBmaW5hbCB2YWx1ZSBhcyB0aGlzIGl0ZW0uXG4gICAgLy8gKiBJbiB0aGUgY2FzZSBvZiBgZW5hYmxlYCwga2VlcCB0aGUgcXVldWUgYnV0IHNldCBgZGlzYWJsZWAgaW5zdGVhZC5cbiAgICAvLyAgIEFuZCBpbiB0aGUgY2FzZSBvZiBgZmxpcGAsIGtlZXAgdGhlIHF1ZXVlIGJ1dCBzZXQgYGVuYWJsZWAgaW5zdGVhZC5cbiAgICBjYWxlbmRhckl0ZW1bICggdHlwZSA9PSAnZW5hYmxlJyA/ICdkaXNhYmxlJyA6IHR5cGUgPT0gJ2ZsaXAnID8gJ2VuYWJsZScgOiB0eXBlICkgXSA9IGNhbGVuZGFyLnF1ZXVlWyB0eXBlIF0uc3BsaXQoICcgJyApLm1hcCggZnVuY3Rpb24oIG1ldGhvZCApIHtcbiAgICAgICAgdmFsdWUgPSBjYWxlbmRhclsgbWV0aG9kIF0oIHR5cGUsIHZhbHVlLCBvcHRpb25zIClcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSkucG9wKClcblxuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gY2FzY2FkZSB0aHJvdWdoIG1vcmUgdXBkYXRlcy5cbiAgICBpZiAoIHR5cGUgPT0gJ3NlbGVjdCcgKSB7XG4gICAgICAgIGNhbGVuZGFyLnNldCggJ2hpZ2hsaWdodCcsIGNhbGVuZGFySXRlbS5zZWxlY3QsIG9wdGlvbnMgKVxuICAgIH1cbiAgICBlbHNlIGlmICggdHlwZSA9PSAnaGlnaGxpZ2h0JyApIHtcbiAgICAgICAgY2FsZW5kYXIuc2V0KCAndmlldycsIGNhbGVuZGFySXRlbS5oaWdobGlnaHQsIG9wdGlvbnMgKVxuICAgIH1cbiAgICBlbHNlIGlmICggdHlwZS5tYXRjaCggL14oZmxpcHxtaW58bWF4fGRpc2FibGV8ZW5hYmxlKSQvICkgKSB7XG4gICAgICAgIGlmICggY2FsZW5kYXJJdGVtLnNlbGVjdCAmJiBjYWxlbmRhci5kaXNhYmxlZCggY2FsZW5kYXJJdGVtLnNlbGVjdCApICkge1xuICAgICAgICAgICAgY2FsZW5kYXIuc2V0KCAnc2VsZWN0JywgY2FsZW5kYXJJdGVtLnNlbGVjdCwgb3B0aW9ucyApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0ICYmIGNhbGVuZGFyLmRpc2FibGVkKCBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0ICkgKSB7XG4gICAgICAgICAgICBjYWxlbmRhci5zZXQoICdoaWdobGlnaHQnLCBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0LCBvcHRpb25zIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWxlbmRhclxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLnNldFxuXG5cbi8qKlxuICogR2V0IGEgZGF0ZXBpY2tlciBpdGVtIG9iamVjdC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oIHR5cGUgKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbVsgdHlwZSBdXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuZ2V0XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBwaWNrZXIgZGF0ZSBvYmplY3QuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApIHtcblxuICAgIHZhciBpc0luZmluaXRlVmFsdWUsXG4gICAgICAgIGNhbGVuZGFyID0gdGhpc1xuXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIHZhbHVlLCB1c2UgdGhlIHR5cGUgYXMgdGhlIHZhbHVlLlxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHR5cGUgOiB2YWx1ZVxuXG5cbiAgICAvLyBJZiBpdOKAmXMgaW5maW5pdHksIHVwZGF0ZSB0aGUgdmFsdWUuXG4gICAgaWYgKCB2YWx1ZSA9PSAtSW5maW5pdHkgfHwgdmFsdWUgPT0gSW5maW5pdHkgKSB7XG4gICAgICAgIGlzSW5maW5pdGVWYWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgLy8gSWYgaXTigJlzIGFuIG9iamVjdCwgdXNlIHRoZSBuYXRpdmUgZGF0ZSBvYmplY3QuXG4gICAgZWxzZSBpZiAoICQuaXNQbGFpbk9iamVjdCggdmFsdWUgKSAmJiBfLmlzSW50ZWdlciggdmFsdWUucGljayApICkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLm9ialxuICAgIH1cblxuICAgIC8vIElmIGl04oCZcyBhbiBhcnJheSwgY29udmVydCBpdCBpbnRvIGEgZGF0ZSBhbmQgbWFrZSBzdXJlXG4gICAgLy8gdGhhdCBpdOKAmXMgYSB2YWxpZCBkYXRlIOKAkyBvdGhlcndpc2UgZGVmYXVsdCB0byB0b2RheS5cbiAgICBlbHNlIGlmICggJC5pc0FycmF5KCB2YWx1ZSApICkge1xuICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKCB2YWx1ZVsgMCBdLCB2YWx1ZVsgMSBdLCB2YWx1ZVsgMiBdIClcbiAgICAgICAgdmFsdWUgPSBfLmlzRGF0ZSggdmFsdWUgKSA/IHZhbHVlIDogY2FsZW5kYXIuY3JlYXRlKCkub2JqXG4gICAgfVxuXG4gICAgLy8gSWYgaXTigJlzIGEgbnVtYmVyIG9yIGRhdGUgb2JqZWN0LCBtYWtlIGEgbm9ybWFsaXplZCBkYXRlLlxuICAgIGVsc2UgaWYgKCBfLmlzSW50ZWdlciggdmFsdWUgKSB8fCBfLmlzRGF0ZSggdmFsdWUgKSApIHtcbiAgICAgICAgdmFsdWUgPSBjYWxlbmRhci5ub3JtYWxpemUoIG5ldyBEYXRlKCB2YWx1ZSApLCBvcHRpb25zIClcbiAgICB9XG5cbiAgICAvLyBJZiBpdOKAmXMgYSBsaXRlcmFsIHRydWUgb3IgYW55IG90aGVyIGNhc2UsIHNldCBpdCB0byBub3cuXG4gICAgZWxzZSAvKmlmICggdmFsdWUgPT09IHRydWUgKSovIHtcbiAgICAgICAgdmFsdWUgPSBjYWxlbmRhci5ub3coIHR5cGUsIHZhbHVlLCBvcHRpb25zIClcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIGNvbXBpbGVkIG9iamVjdC5cbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgbW9udGg6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZS5nZXRNb250aCgpLFxuICAgICAgICBkYXRlOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0RGF0ZSgpLFxuICAgICAgICBkYXk6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZS5nZXREYXkoKSxcbiAgICAgICAgb2JqOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUsXG4gICAgICAgIHBpY2s6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZS5nZXRUaW1lKClcbiAgICB9XG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuY3JlYXRlXG5cblxuLyoqXG4gKiBDcmVhdGUgYSByYW5nZSBsaW1pdCBvYmplY3QgdXNpbmcgYW4gYXJyYXksIGRhdGUgb2JqZWN0LFxuICogbGl0ZXJhbCDigJx0cnVl4oCdLCBvciBpbnRlZ2VyIHJlbGF0aXZlIHRvIGFub3RoZXIgdGltZS5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuY3JlYXRlUmFuZ2UgPSBmdW5jdGlvbiggZnJvbSwgdG8gKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBjcmVhdGVEYXRlID0gZnVuY3Rpb24oIGRhdGUgKSB7XG4gICAgICAgICAgICBpZiAoIGRhdGUgPT09IHRydWUgfHwgJC5pc0FycmF5KCBkYXRlICkgfHwgXy5pc0RhdGUoIGRhdGUgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsZW5kYXIuY3JlYXRlKCBkYXRlIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRlXG4gICAgICAgIH1cblxuICAgIC8vIENyZWF0ZSBvYmplY3RzIGlmIHBvc3NpYmxlLlxuICAgIGlmICggIV8uaXNJbnRlZ2VyKCBmcm9tICkgKSB7XG4gICAgICAgIGZyb20gPSBjcmVhdGVEYXRlKCBmcm9tIClcbiAgICB9XG4gICAgaWYgKCAhXy5pc0ludGVnZXIoIHRvICkgKSB7XG4gICAgICAgIHRvID0gY3JlYXRlRGF0ZSggdG8gKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSByZWxhdGl2ZSBkYXRlcy5cbiAgICBpZiAoIF8uaXNJbnRlZ2VyKCBmcm9tICkgJiYgJC5pc1BsYWluT2JqZWN0KCB0byApICkge1xuICAgICAgICBmcm9tID0gWyB0by55ZWFyLCB0by5tb250aCwgdG8uZGF0ZSArIGZyb20gXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIF8uaXNJbnRlZ2VyKCB0byApICYmICQuaXNQbGFpbk9iamVjdCggZnJvbSApICkge1xuICAgICAgICB0byA9IFsgZnJvbS55ZWFyLCBmcm9tLm1vbnRoLCBmcm9tLmRhdGUgKyB0byBdO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZyb206IGNyZWF0ZURhdGUoIGZyb20gKSxcbiAgICAgICAgdG86IGNyZWF0ZURhdGUoIHRvIClcbiAgICB9XG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuY3JlYXRlUmFuZ2VcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgZGF0ZSB1bml0IGZhbGxzIHdpdGhpbiBhIGRhdGUgcmFuZ2Ugb2JqZWN0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS53aXRoaW5SYW5nZSA9IGZ1bmN0aW9uKCByYW5nZSwgZGF0ZVVuaXQgKSB7XG4gICAgcmFuZ2UgPSB0aGlzLmNyZWF0ZVJhbmdlKHJhbmdlLmZyb20sIHJhbmdlLnRvKVxuICAgIHJldHVybiBkYXRlVW5pdC5waWNrID49IHJhbmdlLmZyb20ucGljayAmJiBkYXRlVW5pdC5waWNrIDw9IHJhbmdlLnRvLnBpY2tcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBkYXRlIHJhbmdlIG9iamVjdHMgb3ZlcmxhcC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUub3ZlcmxhcFJhbmdlcyA9IGZ1bmN0aW9uKCBvbmUsIHR3byApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXNcblxuICAgIC8vIENvbnZlcnQgdGhlIHJhbmdlcyBpbnRvIGNvbXBhcmFibGUgZGF0ZXMuXG4gICAgb25lID0gY2FsZW5kYXIuY3JlYXRlUmFuZ2UoIG9uZS5mcm9tLCBvbmUudG8gKVxuICAgIHR3byA9IGNhbGVuZGFyLmNyZWF0ZVJhbmdlKCB0d28uZnJvbSwgdHdvLnRvIClcblxuICAgIHJldHVybiBjYWxlbmRhci53aXRoaW5SYW5nZSggb25lLCB0d28uZnJvbSApIHx8IGNhbGVuZGFyLndpdGhpblJhbmdlKCBvbmUsIHR3by50byApIHx8XG4gICAgICAgIGNhbGVuZGFyLndpdGhpblJhbmdlKCB0d28sIG9uZS5mcm9tICkgfHwgY2FsZW5kYXIud2l0aGluUmFuZ2UoIHR3bywgb25lLnRvIClcbn1cblxuXG4vKipcbiAqIEdldCB0aGUgZGF0ZSB0b2RheS5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUubm93ID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xuICAgIHZhbHVlID0gbmV3IERhdGUoKVxuICAgIGlmICggb3B0aW9ucyAmJiBvcHRpb25zLnJlbCApIHtcbiAgICAgICAgdmFsdWUuc2V0RGF0ZSggdmFsdWUuZ2V0RGF0ZSgpICsgb3B0aW9ucy5yZWwgKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoIHZhbHVlLCBvcHRpb25zIClcbn1cblxuXG4vKipcbiAqIE5hdmlnYXRlIHRvIG5leHQvcHJldiBtb250aC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUubmF2aWdhdGUgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XG5cbiAgICB2YXIgdGFyZ2V0RGF0ZU9iamVjdCxcbiAgICAgICAgdGFyZ2V0WWVhcixcbiAgICAgICAgdGFyZ2V0TW9udGgsXG4gICAgICAgIHRhcmdldERhdGUsXG4gICAgICAgIGlzVGFyZ2V0QXJyYXkgPSAkLmlzQXJyYXkoIHZhbHVlICksXG4gICAgICAgIGlzVGFyZ2V0T2JqZWN0ID0gJC5pc1BsYWluT2JqZWN0KCB2YWx1ZSApLFxuICAgICAgICB2aWV3c2V0T2JqZWN0ID0gdGhpcy5pdGVtLnZpZXcvKixcbiAgICAgICAgc2FmZXR5ID0gMTAwKi9cblxuXG4gICAgaWYgKCBpc1RhcmdldEFycmF5IHx8IGlzVGFyZ2V0T2JqZWN0ICkge1xuXG4gICAgICAgIGlmICggaXNUYXJnZXRPYmplY3QgKSB7XG4gICAgICAgICAgICB0YXJnZXRZZWFyID0gdmFsdWUueWVhclxuICAgICAgICAgICAgdGFyZ2V0TW9udGggPSB2YWx1ZS5tb250aFxuICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHZhbHVlLmRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFllYXIgPSArdmFsdWVbMF1cbiAgICAgICAgICAgIHRhcmdldE1vbnRoID0gK3ZhbHVlWzFdXG4gICAgICAgICAgICB0YXJnZXREYXRlID0gK3ZhbHVlWzJdXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZeKAmXJlIG5hdmlnYXRpbmcgbW9udGhzIGJ1dCB0aGUgdmlldyBpcyBpbiBhIGRpZmZlcmVudFxuICAgICAgICAvLyBtb250aCwgbmF2aWdhdGUgdG8gdGhlIHZpZXfigJlzIHllYXIgYW5kIG1vbnRoLlxuICAgICAgICBpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5uYXYgJiYgdmlld3NldE9iamVjdCAmJiB2aWV3c2V0T2JqZWN0Lm1vbnRoICE9PSB0YXJnZXRNb250aCApIHtcbiAgICAgICAgICAgIHRhcmdldFllYXIgPSB2aWV3c2V0T2JqZWN0LnllYXJcbiAgICAgICAgICAgIHRhcmdldE1vbnRoID0gdmlld3NldE9iamVjdC5tb250aFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlndXJlIG91dCB0aGUgZXhwZWN0ZWQgdGFyZ2V0IHllYXIgYW5kIG1vbnRoLlxuICAgICAgICB0YXJnZXREYXRlT2JqZWN0ID0gbmV3IERhdGUoIHRhcmdldFllYXIsIHRhcmdldE1vbnRoICsgKCBvcHRpb25zICYmIG9wdGlvbnMubmF2ID8gb3B0aW9ucy5uYXYgOiAwICksIDEgKVxuICAgICAgICB0YXJnZXRZZWFyID0gdGFyZ2V0RGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpXG4gICAgICAgIHRhcmdldE1vbnRoID0gdGFyZ2V0RGF0ZU9iamVjdC5nZXRNb250aCgpXG5cbiAgICAgICAgLy8gSWYgdGhlIG1vbnRoIHdl4oCZcmUgZ29pbmcgdG8gZG9lc27igJl0IGhhdmUgZW5vdWdoIGRheXMsXG4gICAgICAgIC8vIGtlZXAgZGVjcmVhc2luZyB0aGUgZGF0ZSB1bnRpbCB3ZSByZWFjaCB0aGUgbW9udGjigJlzIGxhc3QgZGF0ZS5cbiAgICAgICAgd2hpbGUgKCAvKnNhZmV0eSAmJiovIG5ldyBEYXRlKCB0YXJnZXRZZWFyLCB0YXJnZXRNb250aCwgdGFyZ2V0RGF0ZSApLmdldE1vbnRoKCkgIT09IHRhcmdldE1vbnRoICkge1xuICAgICAgICAgICAgdGFyZ2V0RGF0ZSAtPSAxXG4gICAgICAgICAgICAvKnNhZmV0eSAtPSAxXG4gICAgICAgICAgICBpZiAoICFzYWZldHkgKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ZlbGwgaW50byBhbiBpbmZpbml0ZSBsb29wIHdoaWxlIG5hdmlnYXRpbmcgdG8gJyArIG5ldyBEYXRlKCB0YXJnZXRZZWFyLCB0YXJnZXRNb250aCwgdGFyZ2V0RGF0ZSApICsgJy4nXG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gWyB0YXJnZXRZZWFyLCB0YXJnZXRNb250aCwgdGFyZ2V0RGF0ZSBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUubmF2aWdhdGVcblxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIGRhdGUgYnkgc2V0dGluZyB0aGUgaG91cnMgdG8gbWlkbmlnaHQuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKCB2YWx1ZS8qLCBvcHRpb25zKi8gKSB7XG4gICAgdmFsdWUuc2V0SG91cnMoIDAsIDAsIDAsIDAgKVxuICAgIHJldHVybiB2YWx1ZVxufVxuXG5cbi8qKlxuICogTWVhc3VyZSB0aGUgcmFuZ2Ugb2YgZGF0ZXMuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm1lYXN1cmUgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUvKiwgb3B0aW9ucyovICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpc1xuXG4gICAgLy8gSWYgaXTigJlzIGFueXRoaW5nIGZhbHNlLXksIHJlbW92ZSB0aGUgbGltaXRzLlxuICAgIGlmICggIXZhbHVlICkge1xuICAgICAgICB2YWx1ZSA9IHR5cGUgPT0gJ21pbicgPyAtSW5maW5pdHkgOiBJbmZpbml0eVxuICAgIH1cblxuICAgIC8vIElmIGl04oCZcyBhIHN0cmluZywgcGFyc2UgaXQuXG4gICAgZWxzZSBpZiAoIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgdmFsdWUgPSBjYWxlbmRhci5wYXJzZSggdHlwZSwgdmFsdWUgKVxuICAgIH1cblxuICAgIC8vIElmIGl0J3MgYW4gaW50ZWdlciwgZ2V0IGEgZGF0ZSByZWxhdGl2ZSB0byB0b2RheS5cbiAgICBlbHNlIGlmICggXy5pc0ludGVnZXIoIHZhbHVlICkgKSB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIubm93KCB0eXBlLCB2YWx1ZSwgeyByZWw6IHZhbHVlIH0gKVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxufSAvLy9EYXRlUGlja2VyLnByb3RvdHlwZS5tZWFzdXJlXG5cblxuLyoqXG4gKiBDcmVhdGUgYSB2aWV3c2V0IG9iamVjdCBiYXNlZCBvbiBuYXZpZ2F0aW9uLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS52aWV3c2V0ID0gZnVuY3Rpb24oIHR5cGUsIGRhdGVPYmplY3QvKiwgb3B0aW9ucyovICkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShbIGRhdGVPYmplY3QueWVhciwgZGF0ZU9iamVjdC5tb250aCwgMSBdKVxufVxuXG5cbi8qKlxuICogVmFsaWRhdGUgYSBkYXRlIGFzIGVuYWJsZWQgYW5kIHNoaWZ0IGlmIG5lZWRlZC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiggdHlwZSwgZGF0ZU9iamVjdCwgb3B0aW9ucyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG5cbiAgICAgICAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgZGF0ZS5cbiAgICAgICAgb3JpZ2luYWxEYXRlT2JqZWN0ID0gZGF0ZU9iamVjdCxcblxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhbiBpbnRlcnZhbC5cbiAgICAgICAgaW50ZXJ2YWwgPSBvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJ2YWwgPyBvcHRpb25zLmludGVydmFsIDogMSxcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FsZW5kYXIgZW5hYmxlZCBkYXRlcyBhcmUgaW52ZXJ0ZWQuXG4gICAgICAgIGlzRmxpcHBlZEJhc2UgPSBjYWxlbmRhci5pdGVtLmVuYWJsZSA9PT0gLTEsXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbnkgZW5hYmxlZCBkYXRlcyBhZnRlci9iZWZvcmUgbm93LlxuICAgICAgICBoYXNFbmFibGVkQmVmb3JlVGFyZ2V0LCBoYXNFbmFibGVkQWZ0ZXJUYXJnZXQsXG5cbiAgICAgICAgLy8gVGhlIG1pbiAmIG1heCBsaW1pdHMuXG4gICAgICAgIG1pbkxpbWl0T2JqZWN0ID0gY2FsZW5kYXIuaXRlbS5taW4sXG4gICAgICAgIG1heExpbWl0T2JqZWN0ID0gY2FsZW5kYXIuaXRlbS5tYXgsXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2XigJl2ZSByZWFjaGVkIHRoZSBsaW1pdCBkdXJpbmcgc2hpZnRpbmcuXG4gICAgICAgIHJlYWNoZWRNaW4sIHJlYWNoZWRNYXgsXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbGVuZGFyIGlzIGludmVydGVkIGFuZCBhdCBsZWFzdCBvbmUgd2Vla2RheSBpcyBlbmFibGVkLlxuICAgICAgICBoYXNFbmFibGVkV2Vla2RheXMgPSBpc0ZsaXBwZWRCYXNlICYmIGNhbGVuZGFyLml0ZW0uZGlzYWJsZS5maWx0ZXIoIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmXigJlzIGEgZGF0ZSwgY2hlY2sgd2hlcmUgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgICAgIGlmICggJC5pc0FycmF5KCB2YWx1ZSApICkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlVGltZSA9IGNhbGVuZGFyLmNyZWF0ZSggdmFsdWUgKS5waWNrXG4gICAgICAgICAgICAgICAgaWYgKCBkYXRlVGltZSA8IGRhdGVPYmplY3QucGljayApIGhhc0VuYWJsZWRCZWZvcmVUYXJnZXQgPSB0cnVlXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGRhdGVUaW1lID4gZGF0ZU9iamVjdC5waWNrICkgaGFzRW5hYmxlZEFmdGVyVGFyZ2V0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXR1cm4gb25seSBpbnRlZ2VycyBmb3IgZW5hYmxlZCB3ZWVrZGF5cy5cbiAgICAgICAgICAgIHJldHVybiBfLmlzSW50ZWdlciggdmFsdWUgKVxuICAgICAgICB9KS5sZW5ndGgvKixcblxuICAgICAgICBzYWZldHkgPSAxMDAqL1xuXG5cblxuICAgIC8vIENhc2VzIHRvIHZhbGlkYXRlIGZvcjpcbiAgICAvLyBbMV0gTm90IGludmVydGVkIGFuZCBkYXRlIGRpc2FibGVkLlxuICAgIC8vIFsyXSBJbnZlcnRlZCBhbmQgc29tZSBkYXRlcyBlbmFibGVkLlxuICAgIC8vIFszXSBOb3QgaW52ZXJ0ZWQgYW5kIG91dCBvZiByYW5nZS5cbiAgICAvL1xuICAgIC8vIENhc2VzIHRvICoqbm90KiogdmFsaWRhdGUgZm9yOlxuICAgIC8vIOKAoiBOYXZpZ2F0aW5nIG1vbnRocy5cbiAgICAvLyDigKIgTm90IGludmVydGVkIGFuZCBkYXRlIGVuYWJsZWQuXG4gICAgLy8g4oCiIEludmVydGVkIGFuZCBhbGwgZGF0ZXMgZGlzYWJsZWQuXG4gICAgLy8g4oCiIC4uYW5kIGFueXRoaW5nIGVsc2UuXG4gICAgaWYgKCAhb3B0aW9ucyB8fCAhb3B0aW9ucy5uYXYgKSBpZiAoXG4gICAgICAgIC8qIDEgKi8gKCAhaXNGbGlwcGVkQmFzZSAmJiBjYWxlbmRhci5kaXNhYmxlZCggZGF0ZU9iamVjdCApICkgfHxcbiAgICAgICAgLyogMiAqLyAoIGlzRmxpcHBlZEJhc2UgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGRhdGVPYmplY3QgKSAmJiAoIGhhc0VuYWJsZWRXZWVrZGF5cyB8fCBoYXNFbmFibGVkQmVmb3JlVGFyZ2V0IHx8IGhhc0VuYWJsZWRBZnRlclRhcmdldCApICkgfHxcbiAgICAgICAgLyogMyAqLyAoICFpc0ZsaXBwZWRCYXNlICYmIChkYXRlT2JqZWN0LnBpY2sgPD0gbWluTGltaXRPYmplY3QucGljayB8fCBkYXRlT2JqZWN0LnBpY2sgPj0gbWF4TGltaXRPYmplY3QucGljaykgKVxuICAgICkge1xuXG5cbiAgICAgICAgLy8gV2hlbiBpbnZlcnRlZCwgZmxpcCB0aGUgZGlyZWN0aW9uIGlmIHRoZXJlIGFyZW7igJl0IGFueSBlbmFibGVkIHdlZWtkYXlzXG4gICAgICAgIC8vIGFuZCB0aGVyZSBhcmUgbm8gZW5hYmxlZCBkYXRlcyBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBpbnRlcnZhbC5cbiAgICAgICAgaWYgKCBpc0ZsaXBwZWRCYXNlICYmICFoYXNFbmFibGVkV2Vla2RheXMgJiYgKCAoICFoYXNFbmFibGVkQWZ0ZXJUYXJnZXQgJiYgaW50ZXJ2YWwgPiAwICkgfHwgKCAhaGFzRW5hYmxlZEJlZm9yZVRhcmdldCAmJiBpbnRlcnZhbCA8IDAgKSApICkge1xuICAgICAgICAgICAgaW50ZXJ2YWwgKj0gLTFcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gS2VlcCBsb29waW5nIHVudGlsIHdlIHJlYWNoIGFuIGVuYWJsZWQgZGF0ZS5cbiAgICAgICAgd2hpbGUgKCAvKnNhZmV0eSAmJiovIGNhbGVuZGFyLmRpc2FibGVkKCBkYXRlT2JqZWN0ICkgKSB7XG5cbiAgICAgICAgICAgIC8qc2FmZXR5IC09IDFcbiAgICAgICAgICAgIGlmICggIXNhZmV0eSApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnRmVsbCBpbnRvIGFuIGluZmluaXRlIGxvb3Agd2hpbGUgdmFsaWRhdGluZyAnICsgZGF0ZU9iamVjdC5vYmogKyAnLidcbiAgICAgICAgICAgIH0qL1xuXG5cbiAgICAgICAgICAgIC8vIElmIHdl4oCZdmUgbG9vcGVkIGludG8gdGhlIG5leHQvcHJldiBtb250aCB3aXRoIGEgbGFyZ2UgaW50ZXJ2YWwsIHJldHVybiB0byB0aGUgb3JpZ2luYWwgZGF0ZSBhbmQgZmxhdHRlbiB0aGUgaW50ZXJ2YWwuXG4gICAgICAgICAgICBpZiAoIE1hdGguYWJzKCBpbnRlcnZhbCApID4gMSAmJiAoIGRhdGVPYmplY3QubW9udGggPCBvcmlnaW5hbERhdGVPYmplY3QubW9udGggfHwgZGF0ZU9iamVjdC5tb250aCA+IG9yaWdpbmFsRGF0ZU9iamVjdC5tb250aCApICkge1xuICAgICAgICAgICAgICAgIGRhdGVPYmplY3QgPSBvcmlnaW5hbERhdGVPYmplY3RcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGludGVydmFsID4gMCA/IDEgOiAtMVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIElmIHdl4oCZdmUgcmVhY2hlZCB0aGUgbWluL21heCBsaW1pdCwgcmV2ZXJzZSB0aGUgZGlyZWN0aW9uLCBmbGF0dGVuIHRoZSBpbnRlcnZhbCBhbmQgc2V0IGl0IHRvIHRoZSBsaW1pdC5cbiAgICAgICAgICAgIGlmICggZGF0ZU9iamVjdC5waWNrIDw9IG1pbkxpbWl0T2JqZWN0LnBpY2sgKSB7XG4gICAgICAgICAgICAgICAgcmVhY2hlZE1pbiA9IHRydWVcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IDFcbiAgICAgICAgICAgICAgICBkYXRlT2JqZWN0ID0gY2FsZW5kYXIuY3JlYXRlKFtcbiAgICAgICAgICAgICAgICAgICAgbWluTGltaXRPYmplY3QueWVhcixcbiAgICAgICAgICAgICAgICAgICAgbWluTGltaXRPYmplY3QubW9udGgsXG4gICAgICAgICAgICAgICAgICAgIG1pbkxpbWl0T2JqZWN0LmRhdGUgKyAoZGF0ZU9iamVjdC5waWNrID09PSBtaW5MaW1pdE9iamVjdC5waWNrID8gMCA6IC0xKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggZGF0ZU9iamVjdC5waWNrID49IG1heExpbWl0T2JqZWN0LnBpY2sgKSB7XG4gICAgICAgICAgICAgICAgcmVhY2hlZE1heCA9IHRydWVcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IC0xXG4gICAgICAgICAgICAgICAgZGF0ZU9iamVjdCA9IGNhbGVuZGFyLmNyZWF0ZShbXG4gICAgICAgICAgICAgICAgICAgIG1heExpbWl0T2JqZWN0LnllYXIsXG4gICAgICAgICAgICAgICAgICAgIG1heExpbWl0T2JqZWN0Lm1vbnRoLFxuICAgICAgICAgICAgICAgICAgICBtYXhMaW1pdE9iamVjdC5kYXRlICsgKGRhdGVPYmplY3QucGljayA9PT0gbWF4TGltaXRPYmplY3QucGljayA/IDAgOiAxKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gSWYgd2XigJl2ZSByZWFjaGVkIGJvdGggbGltaXRzLCBqdXN0IGJyZWFrIG91dCBvZiB0aGUgbG9vcC5cbiAgICAgICAgICAgIGlmICggcmVhY2hlZE1pbiAmJiByZWFjaGVkTWF4ICkge1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gRmluYWxseSwgY3JlYXRlIHRoZSBzaGlmdGVkIGRhdGUgdXNpbmcgdGhlIGludGVydmFsIGFuZCBrZWVwIGxvb3BpbmcuXG4gICAgICAgICAgICBkYXRlT2JqZWN0ID0gY2FsZW5kYXIuY3JlYXRlKFsgZGF0ZU9iamVjdC55ZWFyLCBkYXRlT2JqZWN0Lm1vbnRoLCBkYXRlT2JqZWN0LmRhdGUgKyBpbnRlcnZhbCBdKVxuICAgICAgICB9XG5cbiAgICB9IC8vZW5kaWZcblxuXG4gICAgLy8gUmV0dXJuIHRoZSBkYXRlIG9iamVjdCBzZXR0bGVkIG9uLlxuICAgIHJldHVybiBkYXRlT2JqZWN0XG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUudmFsaWRhdGVcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBkaXNhYmxlZC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuZGlzYWJsZWQgPSBmdW5jdGlvbiggZGF0ZVRvVmVyaWZ5ICkge1xuXG4gICAgdmFyXG4gICAgICAgIGNhbGVuZGFyID0gdGhpcyxcblxuICAgICAgICAvLyBGaWx0ZXIgdGhyb3VnaCB0aGUgZGlzYWJsZWQgZGF0ZXMgdG8gY2hlY2sgaWYgdGhpcyBpcyBvbmUuXG4gICAgICAgIGlzRGlzYWJsZWRNYXRjaCA9IGNhbGVuZGFyLml0ZW0uZGlzYWJsZS5maWx0ZXIoIGZ1bmN0aW9uKCBkYXRlVG9EaXNhYmxlICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGF0ZSBpcyBhIG51bWJlciwgbWF0Y2ggdGhlIHdlZWtkYXkgd2l0aCAwaW5kZXggYW5kIGBmaXJzdERheWAgY2hlY2suXG4gICAgICAgICAgICBpZiAoIF8uaXNJbnRlZ2VyKCBkYXRlVG9EaXNhYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVUb1ZlcmlmeS5kYXkgPT09ICggY2FsZW5kYXIuc2V0dGluZ3MuZmlyc3REYXkgPyBkYXRlVG9EaXNhYmxlIDogZGF0ZVRvRGlzYWJsZSAtIDEgKSAlIDdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFuIGFycmF5IG9yIGEgbmF0aXZlIEpTIGRhdGUsIGNyZWF0ZSBhbmQgbWF0Y2ggdGhlIGV4YWN0IGRhdGUuXG4gICAgICAgICAgICBpZiAoICQuaXNBcnJheSggZGF0ZVRvRGlzYWJsZSApIHx8IF8uaXNEYXRlKCBkYXRlVG9EaXNhYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVUb1ZlcmlmeS5waWNrID09PSBjYWxlbmRhci5jcmVhdGUoIGRhdGVUb0Rpc2FibGUgKS5waWNrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbiBvYmplY3QsIG1hdGNoIGEgZGF0ZSB3aXRoaW4gdGhlIOKAnGZyb23igJ0gYW5kIOKAnHRv4oCdIHJhbmdlLlxuICAgICAgICAgICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIGRhdGVUb0Rpc2FibGUgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsZW5kYXIud2l0aGluUmFuZ2UoIGRhdGVUb0Rpc2FibGUsIGRhdGVUb1ZlcmlmeSApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAvLyBJZiB0aGlzIGRhdGUgbWF0Y2hlcyBhIGRpc2FibGVkIGRhdGUsIGNvbmZpcm0gaXTigJlzIG5vdCBpbnZlcnRlZC5cbiAgICBpc0Rpc2FibGVkTWF0Y2ggPSBpc0Rpc2FibGVkTWF0Y2gubGVuZ3RoICYmICFpc0Rpc2FibGVkTWF0Y2guZmlsdGVyKGZ1bmN0aW9uKCBkYXRlVG9EaXNhYmxlICkge1xuICAgICAgICByZXR1cm4gJC5pc0FycmF5KCBkYXRlVG9EaXNhYmxlICkgJiYgZGF0ZVRvRGlzYWJsZVszXSA9PSAnaW52ZXJ0ZWQnIHx8XG4gICAgICAgICAgICAkLmlzUGxhaW5PYmplY3QoIGRhdGVUb0Rpc2FibGUgKSAmJiBkYXRlVG9EaXNhYmxlLmludmVydGVkXG4gICAgfSkubGVuZ3RoXG5cbiAgICAvLyBDaGVjayB0aGUgY2FsZW5kYXIg4oCcZW5hYmxlZOKAnSBmbGFnIGFuZCByZXNwZWN0aXZlbHkgZmxpcCB0aGVcbiAgICAvLyBkaXNhYmxlZCBzdGF0ZS4gVGhlbiBhbHNvIGNoZWNrIGlmIGl04oCZcyBiZXlvbmQgdGhlIG1pbi9tYXggbGltaXRzLlxuICAgIHJldHVybiBjYWxlbmRhci5pdGVtLmVuYWJsZSA9PT0gLTEgPyAhaXNEaXNhYmxlZE1hdGNoIDogaXNEaXNhYmxlZE1hdGNoIHx8XG4gICAgICAgIGRhdGVUb1ZlcmlmeS5waWNrIDwgY2FsZW5kYXIuaXRlbS5taW4ucGljayB8fFxuICAgICAgICBkYXRlVG9WZXJpZnkucGljayA+IGNhbGVuZGFyLml0ZW0ubWF4LnBpY2tcblxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmRpc2FibGVkXG5cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBpbnRvIGEgdXNhYmxlIHR5cGUuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgcGFyc2luZ09iamVjdCA9IHt9XG5cbiAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBwYXJzZWQsIHdl4oCZcmUgZ29vZC5cbiAgICBpZiAoICF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIC8vIFdlIG5lZWQgYSBgLmZvcm1hdGAgdG8gcGFyc2UgdGhlIHZhbHVlIHdpdGguXG4gICAgaWYgKCAhKCBvcHRpb25zICYmIG9wdGlvbnMuZm9ybWF0ICkgKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgICAgIG9wdGlvbnMuZm9ybWF0ID0gY2FsZW5kYXIuc2V0dGluZ3MuZm9ybWF0XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0aGUgZm9ybWF0IGludG8gYW4gYXJyYXkgYW5kIHRoZW4gbWFwIHRocm91Z2ggaXQuXG4gICAgY2FsZW5kYXIuZm9ybWF0cy50b0FycmF5KCBvcHRpb25zLmZvcm1hdCApLm1hcCggZnVuY3Rpb24oIGxhYmVsICkge1xuXG4gICAgICAgIHZhclxuICAgICAgICAgICAgLy8gR3JhYiB0aGUgZm9ybWF0dGluZyBsYWJlbC5cbiAgICAgICAgICAgIGZvcm1hdHRpbmdMYWJlbCA9IGNhbGVuZGFyLmZvcm1hdHNbIGxhYmVsIF0sXG5cbiAgICAgICAgICAgIC8vIFRoZSBmb3JtYXQgbGVuZ3RoIGlzIGZyb20gdGhlIGZvcm1hdHRpbmcgbGFiZWwgZnVuY3Rpb24gb3IgdGhlXG4gICAgICAgICAgICAvLyBsYWJlbCBsZW5ndGggd2l0aG91dCB0aGUgZXNjYXBpbmcgZXhjbGFtYXRpb24gKCEpIG1hcmsuXG4gICAgICAgICAgICBmb3JtYXRMZW5ndGggPSBmb3JtYXR0aW5nTGFiZWwgPyBfLnRyaWdnZXIoIGZvcm1hdHRpbmdMYWJlbCwgY2FsZW5kYXIsIFsgdmFsdWUsIHBhcnNpbmdPYmplY3QgXSApIDogbGFiZWwucmVwbGFjZSggL14hLywgJycgKS5sZW5ndGhcblxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgZm9ybWF0IGxhYmVsLCBzcGxpdCB0aGUgdmFsdWUgdXAgdG8gdGhlIGZvcm1hdCBsZW5ndGguXG4gICAgICAgIC8vIFRoZW4gYWRkIGl0IHRvIHRoZSBwYXJzaW5nIG9iamVjdCB3aXRoIGFwcHJvcHJpYXRlIGxhYmVsLlxuICAgICAgICBpZiAoIGZvcm1hdHRpbmdMYWJlbCApIHtcbiAgICAgICAgICAgIHBhcnNpbmdPYmplY3RbIGxhYmVsIF0gPSB2YWx1ZS5zdWJzdHIoIDAsIGZvcm1hdExlbmd0aCApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHZhbHVlIGFzIHRoZSBzdWJzdHJpbmcgZnJvbSBmb3JtYXQgbGVuZ3RoIHRvIGVuZC5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoIGZvcm1hdExlbmd0aCApXG4gICAgfSlcblxuICAgIC8vIENvbXBlbnNhdGUgZm9yIG1vbnRoIDBpbmRleC5cbiAgICByZXR1cm4gW1xuICAgICAgICBwYXJzaW5nT2JqZWN0Lnl5eXkgfHwgcGFyc2luZ09iamVjdC55eSxcbiAgICAgICAgKyggcGFyc2luZ09iamVjdC5tbSB8fCBwYXJzaW5nT2JqZWN0Lm0gKSAtIDEsXG4gICAgICAgIHBhcnNpbmdPYmplY3QuZGQgfHwgcGFyc2luZ09iamVjdC5kXG4gICAgXVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLnBhcnNlXG5cblxuLyoqXG4gKiBWYXJpb3VzIGZvcm1hdHMgdG8gZGlzcGxheSB0aGUgb2JqZWN0IGluLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5mb3JtYXRzID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGZpcnN0IHdvcmQgaW4gYSBjb2xsZWN0aW9uLlxuICAgIGZ1bmN0aW9uIGdldFdvcmRMZW5ndGhGcm9tQ29sbGVjdGlvbiggc3RyaW5nLCBjb2xsZWN0aW9uLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgIC8vIEdyYWIgdGhlIGZpcnN0IHdvcmQgZnJvbSB0aGUgc3RyaW5nLlxuICAgICAgICB2YXIgd29yZCA9IHN0cmluZy5tYXRjaCggL1xcdysvIClbIDAgXVxuXG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gbW9udGggaW5kZXgsIGFkZCBpdCB0byB0aGUgZGF0ZSBvYmplY3RcbiAgICAgICAgaWYgKCAhZGF0ZU9iamVjdC5tbSAmJiAhZGF0ZU9iamVjdC5tICkge1xuICAgICAgICAgICAgZGF0ZU9iamVjdC5tID0gY29sbGVjdGlvbi5pbmRleE9mKCB3b3JkICkgKyAxXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgd29yZC5cbiAgICAgICAgcmV0dXJuIHdvcmQubGVuZ3RoXG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggb2YgdGhlIGZpcnN0IHdvcmQgaW4gYSBzdHJpbmcuXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RXb3JkTGVuZ3RoKCBzdHJpbmcgKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcubWF0Y2goIC9cXHcrLyApWyAwIF0ubGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBkOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIHN0cmluZywgdGhlbiBnZXQgdGhlIGRpZ2l0cyBsZW5ndGguXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IF8uZGlnaXRzKCBzdHJpbmcgKSA6IGRhdGVPYmplY3QuZGF0ZVxuICAgICAgICB9LFxuICAgICAgICBkZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiB0aGUgbGVuZ3RoIGlzIGFsd2F5cyAyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgZGF0ZSB3aXRoIGEgbGVhZGluZyB6ZXJvLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IDIgOiBfLmxlYWQoIGRhdGVPYmplY3QuZGF0ZSApXG4gICAgICAgIH0sXG4gICAgICAgIGRkZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZC5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNob3J0IHNlbGVjdGVkIHdlZWtkYXkuXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gZ2V0Rmlyc3RXb3JkTGVuZ3RoKCBzdHJpbmcgKSA6IHRoaXMuc2V0dGluZ3Mud2Vla2RheXNTaG9ydFsgZGF0ZU9iamVjdC5kYXkgXVxuICAgICAgICB9LFxuICAgICAgICBkZGRkOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSBmaXJzdCB3b3JkLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgZnVsbCBzZWxlY3RlZCB3ZWVrZGF5LlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldEZpcnN0V29yZExlbmd0aCggc3RyaW5nICkgOiB0aGlzLnNldHRpbmdzLndlZWtkYXlzRnVsbFsgZGF0ZU9iamVjdC5kYXkgXVxuICAgICAgICB9LFxuICAgICAgICBtOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkaWdpdHNcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIHdpdGggMGluZGV4IGNvbXBlbnNhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBfLmRpZ2l0cyggc3RyaW5nICkgOiBkYXRlT2JqZWN0Lm1vbnRoICsgMVxuICAgICAgICB9LFxuICAgICAgICBtbTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiB0aGUgbGVuZ3RoIGlzIGFsd2F5cyAyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgbW9udGggd2l0aCAwaW5kZXggYW5kIGxlYWRpbmcgemVyby5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyAyIDogXy5sZWFkKCBkYXRlT2JqZWN0Lm1vbnRoICsgMSApXG4gICAgICAgIH0sXG4gICAgICAgIG1tbTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLnNldHRpbmdzLm1vbnRoc1Nob3J0XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIGdldCBsZW5ndGggb2YgdGhlIHJlbGV2YW50IG1vbnRoIGZyb20gdGhlIHNob3J0XG4gICAgICAgICAgICAvLyBtb250aHMgY29sbGVjdGlvbi4gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgbW9udGggZnJvbSB0aGF0IGNvbGxlY3Rpb24uXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gZ2V0V29yZExlbmd0aEZyb21Db2xsZWN0aW9uKCBzdHJpbmcsIGNvbGxlY3Rpb24sIGRhdGVPYmplY3QgKSA6IGNvbGxlY3Rpb25bIGRhdGVPYmplY3QubW9udGggXVxuICAgICAgICB9LFxuICAgICAgICBtbW1tOiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuc2V0dGluZ3MubW9udGhzRnVsbFxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCBnZXQgbGVuZ3RoIG9mIHRoZSByZWxldmFudCBtb250aCBmcm9tIHRoZSBmdWxsXG4gICAgICAgICAgICAvLyBtb250aHMgY29sbGVjdGlvbi4gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgbW9udGggZnJvbSB0aGF0IGNvbGxlY3Rpb24uXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gZ2V0V29yZExlbmd0aEZyb21Db2xsZWN0aW9uKCBzdHJpbmcsIGNvbGxlY3Rpb24sIGRhdGVPYmplY3QgKSA6IGNvbGxlY3Rpb25bIGRhdGVPYmplY3QubW9udGggXVxuICAgICAgICB9LFxuICAgICAgICB5eTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiB0aGUgbGVuZ3RoIGlzIGFsd2F5cyAyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgeWVhciBieSBzbGljaW5nIG91dCB0aGUgZmlyc3QgMiBkaWdpdHMuXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gMiA6ICggJycgKyBkYXRlT2JqZWN0LnllYXIgKS5zbGljZSggMiApXG4gICAgICAgIH0sXG4gICAgICAgIHl5eXk6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgNC5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIHllYXIuXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gNCA6IGRhdGVPYmplY3QueWVhclxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBieSBzcGxpdHRpbmcgdGhlIGZvcm1hdHRpbmcgc3RyaW5nIHBhc3NlZC5cbiAgICAgICAgdG9BcnJheTogZnVuY3Rpb24oIGZvcm1hdFN0cmluZyApIHsgcmV0dXJuIGZvcm1hdFN0cmluZy5zcGxpdCggLyhkezEsNH18bXsxLDR9fHl7NH18eXl8IS4pL2cgKSB9LFxuXG4gICAgICAgIC8vIEZvcm1hdCBhbiBvYmplY3QgaW50byBhIHN0cmluZyB1c2luZyB0aGUgZm9ybWF0dGluZyBvcHRpb25zLlxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCBmb3JtYXRTdHJpbmcsIGl0ZW1PYmplY3QgKSB7XG4gICAgICAgICAgICB2YXIgY2FsZW5kYXIgPSB0aGlzXG4gICAgICAgICAgICByZXR1cm4gY2FsZW5kYXIuZm9ybWF0cy50b0FycmF5KCBmb3JtYXRTdHJpbmcgKS5tYXAoIGZ1bmN0aW9uKCBsYWJlbCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmlnZ2VyKCBjYWxlbmRhci5mb3JtYXRzWyBsYWJlbCBdLCBjYWxlbmRhciwgWyAwLCBpdGVtT2JqZWN0IF0gKSB8fCBsYWJlbC5yZXBsYWNlKCAvXiEvLCAnJyApXG4gICAgICAgICAgICB9KS5qb2luKCAnJyApXG4gICAgICAgIH1cbiAgICB9XG59KSgpIC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuZm9ybWF0c1xuXG5cblxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBkYXRlIHVuaXRzIGFyZSB0aGUgZXhhY3QuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmlzRGF0ZUV4YWN0ID0gZnVuY3Rpb24oIG9uZSwgdHdvICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpc1xuXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCB3ZWVrZGF5cywgZG8gYSBkaXJlY3QgY29tcGFyaXNvbi5cbiAgICBpZiAoXG4gICAgICAgICggXy5pc0ludGVnZXIoIG9uZSApICYmIF8uaXNJbnRlZ2VyKCB0d28gKSApIHx8XG4gICAgICAgICggdHlwZW9mIG9uZSA9PSAnYm9vbGVhbicgJiYgdHlwZW9mIHR3byA9PSAnYm9vbGVhbicgKVxuICAgICApIHtcbiAgICAgICAgcmV0dXJuIG9uZSA9PT0gdHdvXG4gICAgfVxuXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCBkYXRlIHJlcHJlc2VudGF0aW9ucywgY29tcGFyZSB0aGUg4oCccGlja+KAnSB2YWx1ZS5cbiAgICBpZiAoXG4gICAgICAgICggXy5pc0RhdGUoIG9uZSApIHx8ICQuaXNBcnJheSggb25lICkgKSAmJlxuICAgICAgICAoIF8uaXNEYXRlKCB0d28gKSB8fCAkLmlzQXJyYXkoIHR3byApIClcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyLmNyZWF0ZSggb25lICkucGljayA9PT0gY2FsZW5kYXIuY3JlYXRlKCB0d28gKS5waWNrXG4gICAgfVxuXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCByYW5nZSBvYmplY3RzLCBjb21wYXJlIHRoZSDigJxmcm9t4oCdIGFuZCDigJx0b+KAnS5cbiAgICBpZiAoICQuaXNQbGFpbk9iamVjdCggb25lICkgJiYgJC5pc1BsYWluT2JqZWN0KCB0d28gKSApIHtcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBvbmUuZnJvbSwgdHdvLmZyb20gKSAmJiBjYWxlbmRhci5pc0RhdGVFeGFjdCggb25lLnRvLCB0d28udG8gKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxufVxuXG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIGRhdGUgdW5pdHMgb3ZlcmxhcC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuaXNEYXRlT3ZlcmxhcCA9IGZ1bmN0aW9uKCBvbmUsIHR3byApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGZpcnN0RGF5ID0gY2FsZW5kYXIuc2V0dGluZ3MuZmlyc3REYXkgPyAxIDogMFxuXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCBhIHdlZWtkYXkgaW5kZXgsIGNvbXBhcmUgdGhlIGRheXMuXG4gICAgaWYgKCBfLmlzSW50ZWdlciggb25lICkgJiYgKCBfLmlzRGF0ZSggdHdvICkgfHwgJC5pc0FycmF5KCB0d28gKSApICkge1xuICAgICAgICBvbmUgPSBvbmUgJSA3ICsgZmlyc3REYXlcbiAgICAgICAgcmV0dXJuIG9uZSA9PT0gY2FsZW5kYXIuY3JlYXRlKCB0d28gKS5kYXkgKyAxXG4gICAgfVxuICAgIGlmICggXy5pc0ludGVnZXIoIHR3byApICYmICggXy5pc0RhdGUoIG9uZSApIHx8ICQuaXNBcnJheSggb25lICkgKSApIHtcbiAgICAgICAgdHdvID0gdHdvICUgNyArIGZpcnN0RGF5XG4gICAgICAgIHJldHVybiB0d28gPT09IGNhbGVuZGFyLmNyZWF0ZSggb25lICkuZGF5ICsgMVxuICAgIH1cblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggcmFuZ2Ugb2JqZWN0cywgY2hlY2sgaWYgdGhlIHJhbmdlcyBvdmVybGFwLlxuICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCBvbmUgKSAmJiAkLmlzUGxhaW5PYmplY3QoIHR3byApICkge1xuICAgICAgICByZXR1cm4gY2FsZW5kYXIub3ZlcmxhcFJhbmdlcyggb25lLCB0d28gKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxufVxuXG5cbi8qKlxuICogRmxpcCB0aGUg4oCcZW5hYmxlZOKAnSBzdGF0ZS5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuZmxpcEVuYWJsZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBpdGVtT2JqZWN0ID0gdGhpcy5pdGVtXG4gICAgaXRlbU9iamVjdC5lbmFibGUgPSB2YWwgfHwgKGl0ZW1PYmplY3QuZW5hYmxlID09IC0xID8gMSA6IC0xKVxufVxuXG5cbi8qKlxuICogTWFyayBhIGNvbGxlY3Rpb24gb2YgZGF0ZXMgYXMg4oCcZGlzYWJsZWTigJ0uXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiggdHlwZSwgZGF0ZXNUb0Rpc2FibGUgKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gY2FsZW5kYXIuaXRlbS5kaXNhYmxlLnNsaWNlKDApXG5cblxuICAgIC8vIElmIHdl4oCZcmUgZmxpcHBpbmcsIHRoYXTigJlzIGFsbCB3ZSBuZWVkIHRvIGRvLlxuICAgIGlmICggZGF0ZXNUb0Rpc2FibGUgPT0gJ2ZsaXAnICkge1xuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKClcbiAgICB9XG5cbiAgICBlbHNlIGlmICggZGF0ZXNUb0Rpc2FibGUgPT09IGZhbHNlICkge1xuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKDEpXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBbXVxuICAgIH1cblxuICAgIGVsc2UgaWYgKCBkYXRlc1RvRGlzYWJsZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgtMSlcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IFtdXG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggdGhlIGRhdGVzIHRvIGRpc2FibGUuXG4gICAgZWxzZSB7XG5cbiAgICAgICAgZGF0ZXNUb0Rpc2FibGUubWFwKGZ1bmN0aW9uKCB1bml0VG9EaXNhYmxlICkge1xuXG4gICAgICAgICAgICB2YXIgbWF0Y2hGb3VuZFxuXG4gICAgICAgICAgICAvLyBXaGVuIHdlIGhhdmUgZGlzYWJsZWQgaXRlbXMsIGNoZWNrIGZvciBtYXRjaGVzLlxuICAgICAgICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIG1hdGNoZWQsIGltbWVkaWF0ZWx5IGJyZWFrIG91dC5cbiAgICAgICAgICAgIGZvciAoIHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGlzYWJsZWRJdGVtcy5sZW5ndGg7IGluZGV4ICs9IDEgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5pc0RhdGVFeGFjdCggdW5pdFRvRGlzYWJsZSwgZGlzYWJsZWRJdGVtc1tpbmRleF0gKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG5vdGhpbmcgd2FzIGZvdW5kLCBhZGQgdGhlIHZhbGlkYXRlZCB1bml0IHRvIHRoZSBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgaWYgKCAhbWF0Y2hGb3VuZCApIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIF8uaXNJbnRlZ2VyKCB1bml0VG9EaXNhYmxlICkgfHxcbiAgICAgICAgICAgICAgICAgICAgXy5pc0RhdGUoIHVuaXRUb0Rpc2FibGUgKSB8fFxuICAgICAgICAgICAgICAgICAgICAkLmlzQXJyYXkoIHVuaXRUb0Rpc2FibGUgKSB8fFxuICAgICAgICAgICAgICAgICAgICAoICQuaXNQbGFpbk9iamVjdCggdW5pdFRvRGlzYWJsZSApICYmIHVuaXRUb0Rpc2FibGUuZnJvbSAmJiB1bml0VG9EaXNhYmxlLnRvIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtcy5wdXNoKCB1bml0VG9EaXNhYmxlIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSB1cGRhdGVkIGNvbGxlY3Rpb24uXG4gICAgcmV0dXJuIGRpc2FibGVkSXRlbXNcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5kZWFjdGl2YXRlXG5cblxuLyoqXG4gKiBNYXJrIGEgY29sbGVjdGlvbiBvZiBkYXRlcyBhcyDigJxlbmFibGVk4oCdLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlc1RvRW5hYmxlICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IGNhbGVuZGFyLml0ZW0uZGlzYWJsZSxcbiAgICAgICAgZGlzYWJsZWRJdGVtc0NvdW50ID0gZGlzYWJsZWRJdGVtcy5sZW5ndGhcblxuICAgIC8vIElmIHdl4oCZcmUgZmxpcHBpbmcsIHRoYXTigJlzIGFsbCB3ZSBuZWVkIHRvIGRvLlxuICAgIGlmICggZGF0ZXNUb0VuYWJsZSA9PSAnZmxpcCcgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoKVxuICAgIH1cblxuICAgIGVsc2UgaWYgKCBkYXRlc1RvRW5hYmxlID09PSB0cnVlICkge1xuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKDEpXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBbXVxuICAgIH1cblxuICAgIGVsc2UgaWYgKCBkYXRlc1RvRW5hYmxlID09PSBmYWxzZSApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgtMSlcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IFtdXG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggdGhlIGRpc2FibGVkIGRhdGVzLlxuICAgIGVsc2Uge1xuXG4gICAgICAgIGRhdGVzVG9FbmFibGUubWFwKGZ1bmN0aW9uKCB1bml0VG9FbmFibGUgKSB7XG5cbiAgICAgICAgICAgIHZhciBtYXRjaEZvdW5kLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkVW5pdCxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBpc0V4YWN0UmFuZ2VcblxuICAgICAgICAgICAgLy8gR28gdGhyb3VnaCB0aGUgZGlzYWJsZWQgaXRlbXMgYW5kIHRyeSB0byBmaW5kIGEgbWF0Y2guXG4gICAgICAgICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZGlzYWJsZWRJdGVtc0NvdW50OyBpbmRleCArPSAxICkge1xuXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRVbml0ID0gZGlzYWJsZWRJdGVtc1tpbmRleF1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gYW4gZXhhY3QgbWF0Y2ggaXMgZm91bmQsIHJlbW92ZSBpdCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgICAgIGlmICggY2FsZW5kYXIuaXNEYXRlRXhhY3QoIGRpc2FibGVkVW5pdCwgdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSBkaXNhYmxlZEl0ZW1zW2luZGV4XSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgaXNFeGFjdFJhbmdlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gYW4gb3ZlcmxhcHBlZCBtYXRjaCBpcyBmb3VuZCwgYWRkIHRoZSDigJxpbnZlcnRlZOKAnSBzdGF0ZSB0byBpdC5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggY2FsZW5kYXIuaXNEYXRlT3ZlcmxhcCggZGlzYWJsZWRVbml0LCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFRvRW5hYmxlLmludmVydGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hGb3VuZCA9IHVuaXRUb0VuYWJsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAkLmlzQXJyYXkoIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hGb3VuZCA9IHVuaXRUb0VuYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhbWF0Y2hGb3VuZFszXSApIG1hdGNoRm91bmQucHVzaCggJ2ludmVydGVkJyApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uaXNEYXRlKCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSBbIHVuaXRUb0VuYWJsZS5nZXRGdWxsWWVhcigpLCB1bml0VG9FbmFibGUuZ2V0TW9udGgoKSwgdW5pdFRvRW5hYmxlLmdldERhdGUoKSwgJ2ludmVydGVkJyBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGEgbWF0Y2ggd2FzIGZvdW5kLCByZW1vdmUgYSBwcmV2aW91cyBkdXBsaWNhdGUgZW50cnkuXG4gICAgICAgICAgICBpZiAoIG1hdGNoRm91bmQgKSBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZGlzYWJsZWRJdGVtc0NvdW50OyBpbmRleCArPSAxICkge1xuICAgICAgICAgICAgICAgIGlmICggY2FsZW5kYXIuaXNEYXRlRXhhY3QoIGRpc2FibGVkSXRlbXNbaW5kZXhdLCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtc1tpbmRleF0gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbiB0aGUgZXZlbnQgdGhhdCB3ZeKAmXJlIGRlYWxpbmcgd2l0aCBhbiBleGFjdCByYW5nZSBvZiBkYXRlcyxcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8g4oCcaW52ZXJ0ZWTigJ0gZGF0ZXMgYmVjYXVzZSBvZiBpdC5cbiAgICAgICAgICAgIGlmICggaXNFeGFjdFJhbmdlICkgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXNDb3VudDsgaW5kZXggKz0gMSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmlzRGF0ZU92ZXJsYXAoIGRpc2FibGVkSXRlbXNbaW5kZXhdLCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtc1tpbmRleF0gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBzb21ldGhpbmcgaXMgc3RpbGwgbWF0Y2hlZCwgYWRkIGl0IGludG8gdGhlIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICBpZiAoIG1hdGNoRm91bmQgKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtcy5wdXNoKCBtYXRjaEZvdW5kIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIHVwZGF0ZWQgY29sbGVjdGlvbi5cbiAgICByZXR1cm4gZGlzYWJsZWRJdGVtcy5maWx0ZXIoZnVuY3Rpb24oIHZhbCApIHsgcmV0dXJuIHZhbCAhPSBudWxsIH0pXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuYWN0aXZhdGVcblxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdGhlIG5vZGVzIGluIHRoZSBwaWNrZXIuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm5vZGVzID0gZnVuY3Rpb24oIGlzT3BlbiApIHtcblxuICAgIHZhclxuICAgICAgICBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIHNldHRpbmdzID0gY2FsZW5kYXIuc2V0dGluZ3MsXG4gICAgICAgIGNhbGVuZGFySXRlbSA9IGNhbGVuZGFyLml0ZW0sXG4gICAgICAgIG5vd09iamVjdCA9IGNhbGVuZGFySXRlbS5ub3csXG4gICAgICAgIHNlbGVjdGVkT2JqZWN0ID0gY2FsZW5kYXJJdGVtLnNlbGVjdCxcbiAgICAgICAgaGlnaGxpZ2h0ZWRPYmplY3QgPSBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0LFxuICAgICAgICB2aWV3c2V0T2JqZWN0ID0gY2FsZW5kYXJJdGVtLnZpZXcsXG4gICAgICAgIGRpc2FibGVkQ29sbGVjdGlvbiA9IGNhbGVuZGFySXRlbS5kaXNhYmxlLFxuICAgICAgICBtaW5MaW1pdE9iamVjdCA9IGNhbGVuZGFySXRlbS5taW4sXG4gICAgICAgIG1heExpbWl0T2JqZWN0ID0gY2FsZW5kYXJJdGVtLm1heCxcblxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgY2FsZW5kYXIgdGFibGUgaGVhZCB1c2luZyBhIGNvcHkgb2Ygd2Vla2RheSBsYWJlbHMgY29sbGVjdGlvbi5cbiAgICAgICAgLy8gKiBXZSBkbyBhIGNvcHkgc28gd2UgZG9uJ3QgbXV0YXRlIHRoZSBvcmlnaW5hbCBhcnJheS5cbiAgICAgICAgdGFibGVIZWFkID0gKGZ1bmN0aW9uKCBjb2xsZWN0aW9uLCBmdWxsQ29sbGVjdGlvbiApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBzaG91bGQgYmUgTW9uZGF5LCBtb3ZlIFN1bmRheSB0byB0aGUgZW5kLlxuICAgICAgICAgICAgaWYgKCBzZXR0aW5ncy5maXJzdERheSApIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2goIGNvbGxlY3Rpb24uc2hpZnQoKSApXG4gICAgICAgICAgICAgICAgZnVsbENvbGxlY3Rpb24ucHVzaCggZnVsbENvbGxlY3Rpb24uc2hpZnQoKSApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHRoZSB0YWJsZSBoZWFkIGdyb3VwLlxuICAgICAgICAgICAgcmV0dXJuIF8ubm9kZShcbiAgICAgICAgICAgICAgICAndGhlYWQnLFxuICAgICAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAgICAgJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgXy5ncm91cCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IERBWVNfSU5fV0VFSyAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKCBjb3VudGVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25bIGNvdW50ZXIgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3Mud2Vla2RheXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzY29wZT1jb2wgdGl0bGU9XCInICsgZnVsbENvbGxlY3Rpb25bIGNvdW50ZXIgXSArICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSAvL2VuZHJldHVyblxuXG4gICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgIH0pKCAoIHNldHRpbmdzLnNob3dXZWVrZGF5c0Z1bGwgPyBzZXR0aW5ncy53ZWVrZGF5c0Z1bGwgOiBzZXR0aW5ncy53ZWVrZGF5c0xldHRlciApLnNsaWNlKCAwICksIHNldHRpbmdzLndlZWtkYXlzRnVsbC5zbGljZSggMCApICksIC8vdGFibGVIZWFkXG5cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5hdiBmb3IgbmV4dC9wcmV2IG1vbnRoLlxuICAgICAgICBjcmVhdGVNb250aE5hdiA9IGZ1bmN0aW9uKCBuZXh0ICkge1xuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiB0aGUgY3JlYXRlZCBtb250aCB0YWcuXG4gICAgICAgICAgICByZXR1cm4gXy5ub2RlKFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzc1sgJ25hdicgKyAoIG5leHQgPyAnTmV4dCcgOiAnUHJldicgKSBdICsgKFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBmb2N1c2VkIG1vbnRoIGlzIG91dHNpZGUgdGhlIHJhbmdlLCBkaXNhYmxlZCB0aGUgYnV0dG9uLlxuICAgICAgICAgICAgICAgICAgICAoIG5leHQgJiYgdmlld3NldE9iamVjdC55ZWFyID49IG1heExpbWl0T2JqZWN0LnllYXIgJiYgdmlld3NldE9iamVjdC5tb250aCA+PSBtYXhMaW1pdE9iamVjdC5tb250aCApIHx8XG4gICAgICAgICAgICAgICAgICAgICggIW5leHQgJiYgdmlld3NldE9iamVjdC55ZWFyIDw9IG1pbkxpbWl0T2JqZWN0LnllYXIgJiYgdmlld3NldE9iamVjdC5tb250aCA8PSBtaW5MaW1pdE9iamVjdC5tb250aCApID9cbiAgICAgICAgICAgICAgICAgICAgJyAnICsgc2V0dGluZ3Mua2xhc3MubmF2RGlzYWJsZWQgOiAnJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgJ2RhdGEtbmF2PScgKyAoIG5leHQgfHwgLTEgKSArICcgJyArXG4gICAgICAgICAgICAgICAgXy5hcmlhQXR0cih7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgKyAnX3RhYmxlJ1xuICAgICAgICAgICAgICAgIH0pICsgJyAnICtcbiAgICAgICAgICAgICAgICAndGl0bGU9XCInICsgKG5leHQgPyBzZXR0aW5ncy5sYWJlbE1vbnRoTmV4dCA6IHNldHRpbmdzLmxhYmVsTW9udGhQcmV2ICkgKyAnXCInXG4gICAgICAgICAgICApIC8vZW5kcmV0dXJuXG4gICAgICAgIH0sIC8vY3JlYXRlTW9udGhOYXZcblxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbW9udGggbGFiZWwuXG4gICAgICAgIC8vTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgY3JlYXRlTW9udGhMYWJlbCA9IGZ1bmN0aW9uKG92ZXJyaWRlKSB7XG5cbiAgICAgICAgICAgIHZhciBtb250aHNDb2xsZWN0aW9uID0gc2V0dGluZ3Muc2hvd01vbnRoc1Nob3J0ID8gc2V0dGluZ3MubW9udGhzU2hvcnQgOiBzZXR0aW5ncy5tb250aHNGdWxsXG5cbiAgICAgICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlID09IFwic2hvcnRfbW9udGhzXCIpIHtcbiAgICAgICAgICAgICAgbW9udGhzQ29sbGVjdGlvbiA9IHNldHRpbmdzLm1vbnRoc1Nob3J0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbW9udGhzIHRvIHNlbGVjdCwgYWRkIGEgZHJvcGRvd24gbWVudS5cbiAgICAgICAgICAgIGlmICggc2V0dGluZ3Muc2VsZWN0TW9udGhzICAmJiBvdmVycmlkZSA9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBfLmdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMTEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiggbG9vcGVkTW9udGggKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBsb29wZWQgbW9udGggYW5kIG5vIGNsYXNzZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoc0NvbGxlY3Rpb25bIGxvb3BlZE1vbnRoIF0sIDAsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZSBhbmQgc2VsZWN0ZWQgaW5kZXguXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZT0nICsgbG9vcGVkTW9udGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHZpZXdzZXRPYmplY3QubW9udGggPT0gbG9vcGVkTW9udGggPyAnIHNlbGVjdGVkJyA6ICcnICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB2aWV3c2V0T2JqZWN0LnllYXIgPT0gbWluTGltaXRPYmplY3QueWVhciAmJiBsb29wZWRNb250aCA8IG1pbkxpbWl0T2JqZWN0Lm1vbnRoICkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHZpZXdzZXRPYmplY3QueWVhciA9PSBtYXhMaW1pdE9iamVjdC55ZWFyICYmIGxvb3BlZE1vbnRoID4gbWF4TGltaXRPYmplY3QubW9udGggKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGRpc2FibGVkJyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzcy5zZWxlY3RNb250aCArICcgYnJvd3Nlci1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgKCBpc09wZW4gPyAnJyA6ICdkaXNhYmxlZCcgKSArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgKyAnX3RhYmxlJyB9KSArICcgJyArXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZT1cIicgKyBzZXR0aW5ncy5sYWJlbE1vbnRoU2VsZWN0ICsgJ1wiJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSA9PSBcInNob3J0X21vbnRoc1wiKVxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9iamVjdCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBtb250aHNDb2xsZWN0aW9uWyBzZWxlY3RlZE9iamVjdC5tb250aCBdICk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gXy5ub2RlKCAnZGl2JywgbW9udGhzQ29sbGVjdGlvblsgdmlld3NldE9iamVjdC5tb250aCBdICk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBuZWVkIGZvciBhIG1vbnRoIHNlbGVjdG9yXG4gICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2JywgbW9udGhzQ29sbGVjdGlvblsgdmlld3NldE9iamVjdC5tb250aCBdLCBzZXR0aW5ncy5rbGFzcy5tb250aCApXG4gICAgICAgIH0sIC8vY3JlYXRlTW9udGhMYWJlbFxuXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB5ZWFyIGxhYmVsLlxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICBjcmVhdGVZZWFyTGFiZWwgPSBmdW5jdGlvbihvdmVycmlkZSkge1xuXG4gICAgICAgICAgICB2YXIgZm9jdXNlZFllYXIgPSB2aWV3c2V0T2JqZWN0LnllYXIsXG5cbiAgICAgICAgICAgIC8vIElmIHllYXJzIHNlbGVjdG9yIGlzIHNldCB0byBhIGxpdGVyYWwgXCJ0cnVlXCIsIHNldCBpdCB0byA1LiBPdGhlcndpc2VcbiAgICAgICAgICAgIC8vIGRpdmlkZSBpbiBoYWxmIHRvIGdldCBoYWxmIGJlZm9yZSBhbmQgaGFsZiBhZnRlciBmb2N1c2VkIHllYXIuXG4gICAgICAgICAgICBudW1iZXJZZWFycyA9IHNldHRpbmdzLnNlbGVjdFllYXJzID09PSB0cnVlID8gNSA6IH5+KCBzZXR0aW5ncy5zZWxlY3RZZWFycyAvIDIgKVxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgeWVhcnMgdG8gc2VsZWN0LCBhZGQgYSBkcm9wZG93biBtZW51LlxuICAgICAgICAgICAgaWYgKCBudW1iZXJZZWFycyApIHtcblxuICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICBtaW5ZZWFyID0gbWluTGltaXRPYmplY3QueWVhcixcbiAgICAgICAgICAgICAgICAgICAgbWF4WWVhciA9IG1heExpbWl0T2JqZWN0LnllYXIsXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgPSBmb2N1c2VkWWVhciAtIG51bWJlclllYXJzLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0WWVhciA9IGZvY3VzZWRZZWFyICsgbnVtYmVyWWVhcnNcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBtaW4geWVhciBpcyBncmVhdGVyIHRoYW4gdGhlIGxvd2VzdCB5ZWFyLCBpbmNyZWFzZSB0aGUgaGlnaGVzdCB5ZWFyXG4gICAgICAgICAgICAgICAgLy8gYnkgdGhlIGRpZmZlcmVuY2UgYW5kIHNldCB0aGUgbG93ZXN0IHllYXIgdG8gdGhlIG1pbiB5ZWFyLlxuICAgICAgICAgICAgICAgIGlmICggbWluWWVhciA+IGxvd2VzdFllYXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RZZWFyICs9IG1pblllYXIgLSBsb3dlc3RZZWFyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgPSBtaW5ZZWFyXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG1heCB5ZWFyIGlzIGxlc3MgdGhhbiB0aGUgaGlnaGVzdCB5ZWFyLCBkZWNyZWFzZSB0aGUgbG93ZXN0IHllYXJcbiAgICAgICAgICAgICAgICAvLyBieSB0aGUgbG93ZXIgb2YgdGhlIHR3bzogYXZhaWxhYmxlIGFuZCBuZWVkZWQgeWVhcnMuIFRoZW4gc2V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGhpZ2hlc3QgeWVhciB0byB0aGUgbWF4IHllYXIuXG4gICAgICAgICAgICAgICAgaWYgKCBtYXhZZWFyIDwgaGlnaGVzdFllYXIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YWlsYWJsZVllYXJzID0gbG93ZXN0WWVhciAtIG1pblllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkZWRZZWFycyA9IGhpZ2hlc3RZZWFyIC0gbWF4WWVhclxuXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgLT0gYXZhaWxhYmxlWWVhcnMgPiBuZWVkZWRZZWFycyA/IG5lZWRlZFllYXJzIDogYXZhaWxhYmxlWWVhcnNcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFllYXIgPSBtYXhZZWFyXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBzZXR0aW5ncy5zZWxlY3RZZWFycyAgJiYgb3ZlcnJpZGUgPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbG93ZXN0WWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IGhpZ2hlc3RZZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIGxvb3BlZFllYXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBsb29wZWQgeWVhciBhbmQgbm8gY2xhc3Nlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BlZFllYXIsIDAsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmFsdWUgYW5kIHNlbGVjdGVkIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlPScgKyBsb29wZWRZZWFyICsgKCBmb2N1c2VkWWVhciA9PSBsb29wZWRZZWFyID8gJyBzZWxlY3RlZCcgOiAnJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLnNlbGVjdFllYXIgKyAnIGJyb3dzZXItZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGlzT3BlbiA/ICcnIDogJ2Rpc2FibGVkJyApICsgJyAnICsgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCArICdfdGFibGUnIH0pICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZT1cIicgKyBzZXR0aW5ncy5sYWJlbFllYXJTZWxlY3QgKyAnXCInXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgPT0gXCJyYXdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2JywgZm9jdXNlZFllYXIgKVxuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UganVzdCByZXR1cm4gdGhlIHllYXIgZm9jdXNlZFxuICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ2RpdicsIGZvY3VzZWRZZWFyLCBzZXR0aW5ncy5rbGFzcy55ZWFyIClcbiAgICAgICAgfSAvL2NyZWF0ZVllYXJMYWJlbFxuXG5cbiAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgY3JlYXRlRGF5TGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3QgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ2RpdicsIHNlbGVjdGVkT2JqZWN0LmRhdGUpXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gXy5ub2RlKCAnZGl2Jywgbm93T2JqZWN0LmRhdGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVdlZWtkYXlMYWJlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRpc3BsYXlfZGF5O1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3QgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBkaXNwbGF5X2RheSA9IHNlbGVjdGVkT2JqZWN0LmRheTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkaXNwbGF5X2RheSA9IG5vd09iamVjdC5kYXk7XG4gICAgICAgICAgICB2YXIgd2Vla2RheSA9IHNldHRpbmdzLndlZWtkYXlzRnVsbFsgZGlzcGxheV9kYXkgXVxuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXlcbiAgICAgICAgfVxuXG5cbiAgICAvLyBDcmVhdGUgYW5kIHJldHVybiB0aGUgZW50aXJlIGNhbGVuZGFyLlxucmV0dXJuIF8ubm9kZShcbiAgICAgICAgLy8gRGF0ZSBwcmVzZW50YXRpb24gVmlld1xuICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBjcmVhdGVXZWVrZGF5TGFiZWwoKSxcbiAgICAgICAgICAgICAgICBcInBpY2tlcl9fd2Vla2RheS1kaXNwbGF5XCJcbiAgICAgICAgICAgICkrXG4gICAgICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAgICAgLy8gRGl2IGZvciBzaG9ydCBNb250aFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZU1vbnRoTGFiZWwoXCJzaG9ydF9tb250aHNcIiksXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3MubW9udGhfZGlzcGxheVxuICAgICAgICAgICAgKStcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAvLyBEaXYgZm9yIERheVxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZURheUxhYmVsKCkgLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLmRheV9kaXNwbGF5XG4gICAgICAgICAgICApK1xuICAgICAgICAgICAgXy5ub2RlKFxuICAgICAgICAgICAgICAgIC8vIERpdiBmb3IgWWVhclxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVllYXJMYWJlbChcInJhd1wiKSAsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3MueWVhcl9kaXNwbGF5XG4gICAgICAgICAgICApLFxuICAgICAgICBzZXR0aW5ncy5rbGFzcy5kYXRlX2Rpc3BsYXlcbiAgICApK1xuICAgIC8vIENhbGVuZGFyIGNvbnRhaW5lclxuICAgIF8ubm9kZSgnZGl2JyxcbiAgICAgICAgXy5ub2RlKCdkaXYnLFxuICAgICAgICAoIHNldHRpbmdzLnNlbGVjdFllYXJzID8gIGNyZWF0ZU1vbnRoTGFiZWwoKSArIGNyZWF0ZVllYXJMYWJlbCgpIDogY3JlYXRlTW9udGhMYWJlbCgpICsgY3JlYXRlWWVhckxhYmVsKCkgKSArXG4gICAgICAgIGNyZWF0ZU1vbnRoTmF2KCkgKyBjcmVhdGVNb250aE5hdiggMSApLFxuICAgICAgICBzZXR0aW5ncy5rbGFzcy5oZWFkZXJcbiAgICApICsgXy5ub2RlKFxuICAgICAgICAndGFibGUnLFxuICAgICAgICB0YWJsZUhlYWQgK1xuICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAndGJvZHknLFxuICAgICAgICAgICAgXy5ncm91cCh7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogV0VFS1NfSU5fQ0FMRU5EQVIgLSAxLFxuICAgICAgICAgICAgICAgIGk6IDEsXG4gICAgICAgICAgICAgICAgbm9kZTogJ3RyJyxcbiAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiggcm93Q291bnRlciApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBhbmQgdGhlIG1vbnRoIHN0YXJ0cyBvbiBTdW5kYXksIHNoaWZ0IHRoZSBkYXRlIGJhY2sgYSB3ZWVrLlxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hpZnREYXRlQnkgPSBzZXR0aW5ncy5maXJzdERheSAmJiBjYWxlbmRhci5jcmVhdGUoWyB2aWV3c2V0T2JqZWN0LnllYXIsIHZpZXdzZXRPYmplY3QubW9udGgsIDEgXSkuZGF5ID09PSAwID8gLTcgOiAwXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogREFZU19JTl9XRUVLICogcm93Q291bnRlciAtIHZpZXdzZXRPYmplY3QuZGF5ICsgc2hpZnREYXRlQnkgKyAxLCAvLyBBZGQgMSBmb3Igd2Vla2RheSAwaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5taW4gKyBEQVlTX0lOX1dFRUsgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIHRhcmdldERhdGUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgdGltZSBkYXRlIGZyb20gYSByZWxhdGl2ZSBkYXRlIHRvIGEgdGFyZ2V0IGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGUgPSBjYWxlbmRhci5jcmVhdGUoWyB2aWV3c2V0T2JqZWN0LnllYXIsIHZpZXdzZXRPYmplY3QubW9udGgsIHRhcmdldERhdGUgKyAoIHNldHRpbmdzLmZpcnN0RGF5ID8gMSA6IDAgKSBdKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gc2VsZWN0ZWRPYmplY3QgJiYgc2VsZWN0ZWRPYmplY3QucGljayA9PSB0YXJnZXREYXRlLnBpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkID0gaGlnaGxpZ2h0ZWRPYmplY3QgJiYgaGlnaGxpZ2h0ZWRPYmplY3QucGljayA9PSB0YXJnZXREYXRlLnBpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkID0gZGlzYWJsZWRDb2xsZWN0aW9uICYmIGNhbGVuZGFyLmRpc2FibGVkKCB0YXJnZXREYXRlICkgfHwgdGFyZ2V0RGF0ZS5waWNrIDwgbWluTGltaXRPYmplY3QucGljayB8fCB0YXJnZXREYXRlLnBpY2sgPiBtYXhMaW1pdE9iamVjdC5waWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IF8udHJpZ2dlciggY2FsZW5kYXIuZm9ybWF0cy50b1N0cmluZywgY2FsZW5kYXIsIFsgc2V0dGluZ3MuZm9ybWF0LCB0YXJnZXREYXRlIF0gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigga2xhc3NlcyApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGBpbmZvY3VzYCBvciBgb3V0Zm9jdXNgIGNsYXNzZXMgYmFzZWQgb24gbW9udGggaW4gdmlldy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCB2aWV3c2V0T2JqZWN0Lm1vbnRoID09IHRhcmdldERhdGUubW9udGggPyBzZXR0aW5ncy5rbGFzcy5pbmZvY3VzIDogc2V0dGluZ3Mua2xhc3Mub3V0Zm9jdXMgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYHRvZGF5YCBjbGFzcyBpZiBuZWVkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbm93T2JqZWN0LnBpY2sgPT0gdGFyZ2V0RGF0ZS5waWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5ub3cgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgc2VsZWN0ZWRgIGNsYXNzIGlmIHNvbWV0aGluZydzIHNlbGVjdGVkIGFuZCB0aGUgdGltZSBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzU2VsZWN0ZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHNldHRpbmdzLmtsYXNzLnNlbGVjdGVkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYGhpZ2hsaWdodGVkYCBjbGFzcyBpZiBzb21ldGhpbmcncyBoaWdobGlnaHRlZCBhbmQgdGhlIHRpbWUgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0hpZ2hsaWdodGVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5oaWdobGlnaHRlZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGBkaXNhYmxlZGAgY2xhc3MgaWYgc29tZXRoaW5nJ3MgZGlzYWJsZWQgYW5kIHRoZSBvYmplY3QgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0Rpc2FibGVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5kaXNhYmxlZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2xhc3Nlcy5qb2luKCAnICcgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFsgc2V0dGluZ3Mua2xhc3MuZGF5IF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXBpY2s9JyArIHRhcmdldERhdGUucGljayArICcgJyArIF8uYXJpYUF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiAnZ3JpZGNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZm9ybWF0dGVkRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGlzU2VsZWN0ZWQgJiYgY2FsZW5kYXIuJG5vZGUudmFsKCkgPT09IGZvcm1hdHRlZERhdGUgPyB0cnVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlZGVzY2VuZGFudDogaXNIaWdobGlnaHRlZCA/IHRydWUgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCA/IHRydWUgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYXJpYUF0dHIoeyByb2xlOiAncHJlc2VudGF0aW9uJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIC8vZW5kcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSAvL2VuZHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIHNldHRpbmdzLmtsYXNzLnRhYmxlLFxuICAgICAgICAnaWQ9XCInICsgY2FsZW5kYXIuJG5vZGVbMF0uaWQgKyAnX3RhYmxlJyArICdcIiAnICsgXy5hcmlhQXR0cih7XG4gICAgICAgICAgICByb2xlOiAnZ3JpZCcsXG4gICAgICAgICAgICBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQsXG4gICAgICAgICAgICByZWFkb25seTogdHJ1ZVxuICAgICAgICB9KVxuICAgIClcbiAgICAsIHNldHRpbmdzLmtsYXNzLmNhbGVuZGFyX2NvbnRhaW5lcikgLy8gZW5kIGNhbGVuZGFyXG5cbiAgICAgK1xuXG4gICAgLy8gKiBGb3IgRmlyZWZveCBmb3JtcyB0byBzdWJtaXQsIG1ha2Ugc3VyZSB0byBzZXQgdGhlIGJ1dHRvbnPigJkgYHR5cGVgIGF0dHJpYnV0ZXMgYXMg4oCcYnV0dG9u4oCdLlxuICAgIF8ubm9kZShcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF8ubm9kZSggJ2J1dHRvbicsIHNldHRpbmdzLnRvZGF5LCBcImJ0bi1mbGF0IHBpY2tlcl9fdG9kYXlcIixcbiAgICAgICAgICAgICd0eXBlPWJ1dHRvbiBkYXRhLXBpY2s9JyArIG5vd09iamVjdC5waWNrICtcbiAgICAgICAgICAgICggaXNPcGVuICYmICFjYWxlbmRhci5kaXNhYmxlZChub3dPYmplY3QpID8gJycgOiAnIGRpc2FibGVkJyApICsgJyAnICtcbiAgICAgICAgICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgfSkgKSArXG4gICAgICAgIF8ubm9kZSggJ2J1dHRvbicsIHNldHRpbmdzLmNsZWFyLCBcImJ0bi1mbGF0IHBpY2tlcl9fY2xlYXJcIixcbiAgICAgICAgICAgICd0eXBlPWJ1dHRvbiBkYXRhLWNsZWFyPTEnICtcbiAgICAgICAgICAgICggaXNPcGVuID8gJycgOiAnIGRpc2FibGVkJyApICsgJyAnICtcbiAgICAgICAgICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgfSkgKSArXG4gICAgICAgIF8ubm9kZSgnYnV0dG9uJywgc2V0dGluZ3MuY2xvc2UsIFwiYnRuLWZsYXQgcGlja2VyX19jbG9zZVwiLFxuICAgICAgICAgICAgJ3R5cGU9YnV0dG9uIGRhdGEtY2xvc2U9dHJ1ZSAnICtcbiAgICAgICAgICAgICggaXNPcGVuID8gJycgOiAnIGRpc2FibGVkJyApICsgJyAnICtcbiAgICAgICAgICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgfSkgKSxcbiAgICAgICAgc2V0dGluZ3Mua2xhc3MuZm9vdGVyXG4gICAgKSAvL2VuZHJldHVyblxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLm5vZGVzXG5cblxuXG5cbi8qKlxuICogVGhlIGRhdGUgcGlja2VyIGRlZmF1bHRzLlxuICovXG5EYXRlUGlja2VyLmRlZmF1bHRzID0gKGZ1bmN0aW9uKCBwcmVmaXggKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIC8vIFRoZSB0aXRsZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBtb250aCBuYXYgYnV0dG9uc1xuICAgICAgICBsYWJlbE1vbnRoTmV4dDogJ05leHQgbW9udGgnLFxuICAgICAgICBsYWJlbE1vbnRoUHJldjogJ1ByZXZpb3VzIG1vbnRoJyxcblxuICAgICAgICAvLyBUaGUgdGl0bGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZHJvcGRvd24gc2VsZWN0b3JzXG4gICAgICAgIGxhYmVsTW9udGhTZWxlY3Q6ICdTZWxlY3QgYSBtb250aCcsXG4gICAgICAgIGxhYmVsWWVhclNlbGVjdDogJ1NlbGVjdCBhIHllYXInLFxuXG4gICAgICAgIC8vIE1vbnRocyBhbmQgd2Vla2RheXNcbiAgICAgICAgbW9udGhzRnVsbDogWyAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicgXSxcbiAgICAgICAgbW9udGhzU2hvcnQ6IFsgJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJyBdLFxuICAgICAgICB3ZWVrZGF5c0Z1bGw6IFsgJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JyBdLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBbICdTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnIF0sXG5cbiAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgd2Vla2RheXNMZXR0ZXI6IFsgJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnIF0sXG5cbiAgICAgICAgLy8gVG9kYXkgYW5kIGNsZWFyXG4gICAgICAgIHRvZGF5OiAnVG9kYXknLFxuICAgICAgICBjbGVhcjogJ0NsZWFyJyxcbiAgICAgICAgY2xvc2U6ICdDbG9zZScsXG5cbiAgICAgICAgLy8gVGhlIGZvcm1hdCB0byBzaG93IG9uIHRoZSBgaW5wdXRgIGVsZW1lbnRcbiAgICAgICAgZm9ybWF0OiAnZCBtbW1tLCB5eXl5JyxcblxuICAgICAgICAvLyBDbGFzc2VzXG4gICAgICAgIGtsYXNzOiB7XG5cbiAgICAgICAgICAgIHRhYmxlOiBwcmVmaXggKyAndGFibGUnLFxuXG4gICAgICAgICAgICBoZWFkZXI6IHByZWZpeCArICdoZWFkZXInLFxuXG5cbiAgICAgICAgICAgIC8vIE1hdGVyaWFsaXplIEFkZGVkIGtsYXNzZXNcbiAgICAgICAgICAgIGRhdGVfZGlzcGxheTogcHJlZml4ICsgJ2RhdGUtZGlzcGxheScsXG4gICAgICAgICAgICBkYXlfZGlzcGxheTogcHJlZml4ICsgJ2RheS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG1vbnRoX2Rpc3BsYXk6IHByZWZpeCArICdtb250aC1kaXNwbGF5JyxcbiAgICAgICAgICAgIHllYXJfZGlzcGxheTogcHJlZml4ICsgJ3llYXItZGlzcGxheScsXG4gICAgICAgICAgICBjYWxlbmRhcl9jb250YWluZXI6IHByZWZpeCArICdjYWxlbmRhci1jb250YWluZXInLFxuICAgICAgICAgICAgLy8gZW5kXG5cblxuXG4gICAgICAgICAgICBuYXZQcmV2OiBwcmVmaXggKyAnbmF2LS1wcmV2JyxcbiAgICAgICAgICAgIG5hdk5leHQ6IHByZWZpeCArICduYXYtLW5leHQnLFxuICAgICAgICAgICAgbmF2RGlzYWJsZWQ6IHByZWZpeCArICduYXYtLWRpc2FibGVkJyxcblxuICAgICAgICAgICAgbW9udGg6IHByZWZpeCArICdtb250aCcsXG4gICAgICAgICAgICB5ZWFyOiBwcmVmaXggKyAneWVhcicsXG5cbiAgICAgICAgICAgIHNlbGVjdE1vbnRoOiBwcmVmaXggKyAnc2VsZWN0LS1tb250aCcsXG4gICAgICAgICAgICBzZWxlY3RZZWFyOiBwcmVmaXggKyAnc2VsZWN0LS15ZWFyJyxcblxuICAgICAgICAgICAgd2Vla2RheXM6IHByZWZpeCArICd3ZWVrZGF5JyxcblxuICAgICAgICAgICAgZGF5OiBwcmVmaXggKyAnZGF5JyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcmVmaXggKyAnZGF5LS1kaXNhYmxlZCcsXG4gICAgICAgICAgICBzZWxlY3RlZDogcHJlZml4ICsgJ2RheS0tc2VsZWN0ZWQnLFxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ6IHByZWZpeCArICdkYXktLWhpZ2hsaWdodGVkJyxcbiAgICAgICAgICAgIG5vdzogcHJlZml4ICsgJ2RheS0tdG9kYXknLFxuICAgICAgICAgICAgaW5mb2N1czogcHJlZml4ICsgJ2RheS0taW5mb2N1cycsXG4gICAgICAgICAgICBvdXRmb2N1czogcHJlZml4ICsgJ2RheS0tb3V0Zm9jdXMnLFxuXG4gICAgICAgICAgICBmb290ZXI6IHByZWZpeCArICdmb290ZXInLFxuXG4gICAgICAgICAgICBidXR0b25DbGVhcjogcHJlZml4ICsgJ2J1dHRvbi0tY2xlYXInLFxuICAgICAgICAgICAgYnV0dG9uVG9kYXk6IHByZWZpeCArICdidXR0b24tLXRvZGF5JyxcbiAgICAgICAgICAgIGJ1dHRvbkNsb3NlOiBwcmVmaXggKyAnYnV0dG9uLS1jbG9zZSdcbiAgICAgICAgfVxuICAgIH1cbn0pKCBQaWNrZXIua2xhc3NlcygpLnBpY2tlciArICdfXycgKVxuXG5cblxuXG5cbi8qKlxuICogRXh0ZW5kIHRoZSBwaWNrZXIgdG8gYWRkIHRoZSBkYXRlIHBpY2tlci5cbiAqL1xuUGlja2VyLmV4dGVuZCggJ3BpY2thZGF0ZScsIERhdGVQaWNrZXIgKVxuXG5cbn0pKTtcblxuXG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgJC5mbi5jaGFyYWN0ZXJDb3VudGVyID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgIHZhciAkY291bnRlckVsZW1lbnQgPSAkaW5wdXQucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7XG5cbiAgICAgIC8vIGNoYXJhY3RlciBjb3VudGVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBjb250YWluZXJcbiAgICAgIGlmICgkY291bnRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGl0SGFzTGVuZ3RoQXR0cmlidXRlID0gJGlucHV0LmF0dHIoJ2RhdGEtbGVuZ3RoJykgIT09IHVuZGVmaW5lZDtcblxuICAgICAgaWYoaXRIYXNMZW5ndGhBdHRyaWJ1dGUpe1xuICAgICAgICAkaW5wdXQub24oJ2lucHV0JywgdXBkYXRlQ291bnRlcik7XG4gICAgICAgICRpbnB1dC5vbignZm9jdXMnLCB1cGRhdGVDb3VudGVyKTtcbiAgICAgICAgJGlucHV0Lm9uKCdibHVyJywgcmVtb3ZlQ291bnRlckVsZW1lbnQpO1xuXG4gICAgICAgIGFkZENvdW50ZXJFbGVtZW50KCRpbnB1dCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVDb3VudGVyKCl7XG4gICAgdmFyIG1heExlbmd0aCAgICAgPSArJCh0aGlzKS5hdHRyKCdkYXRhLWxlbmd0aCcpLFxuICAgIGFjdHVhbExlbmd0aCAgICAgID0gKyQodGhpcykudmFsKCkubGVuZ3RoLFxuICAgIGlzVmFsaWRMZW5ndGggICAgID0gYWN0dWFsTGVuZ3RoIDw9IG1heExlbmd0aDtcblxuICAgICQodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoIGFjdHVhbExlbmd0aCArICcvJyArIG1heExlbmd0aCk7XG5cbiAgICBhZGRJbnB1dFN0eWxlKGlzVmFsaWRMZW5ndGgsICQodGhpcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ291bnRlckVsZW1lbnQoJGlucHV0KSB7XG4gICAgdmFyICRjb3VudGVyRWxlbWVudCA9ICRpbnB1dC5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKTtcblxuICAgIGlmICgkY291bnRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJGNvdW50ZXJFbGVtZW50ID0gJCgnPHNwYW4vPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2NoYXJhY3Rlci1jb3VudGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ2Zsb2F0JywncmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnZm9udC1zaXplJywnMTJweCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdoZWlnaHQnLCAxKTtcblxuICAgICRpbnB1dC5wYXJlbnQoKS5hcHBlbmQoJGNvdW50ZXJFbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNvdW50ZXJFbGVtZW50KCl7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKS5odG1sKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZElucHV0U3R5bGUoaXNWYWxpZExlbmd0aCwgJGlucHV0KXtcbiAgICB2YXIgaW5wdXRIYXNJbnZhbGlkQ2xhc3MgPSAkaW5wdXQuaGFzQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICBpZiAoaXNWYWxpZExlbmd0aCAmJiBpbnB1dEhhc0ludmFsaWRDbGFzcykge1xuICAgICAgJGlucHV0LnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XG4gICAgfVxuICAgIGVsc2UgaWYoIWlzVmFsaWRMZW5ndGggJiYgIWlucHV0SGFzSW52YWxpZENsYXNzKXtcbiAgICAgICRpbnB1dC5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICRpbnB1dC5hZGRDbGFzcygnaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnaW5wdXQsIHRleHRhcmVhJykuY2hhcmFjdGVyQ291bnRlcigpO1xuICB9KTtcblxufSggalF1ZXJ5ICkpO1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuXG4gICAgaW5pdCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZHVyYXRpb246IDIwMCwgLy8gbXNcbiAgICAgICAgZGlzdDogLTEwMCwgLy8gem9vbSBzY2FsZSBUT0RPOiBtYWtlIHRoaXMgbW9yZSBpbnR1aXRpdmUgYXMgYW4gb3B0aW9uXG4gICAgICAgIHNoaWZ0OiAwLCAvLyBzcGFjaW5nIGZvciBjZW50ZXIgaW1hZ2VcbiAgICAgICAgcGFkZGluZzogMCwgLy8gUGFkZGluZyBiZXR3ZWVuIG5vbiBjZW50ZXIgaXRlbXNcbiAgICAgICAgZnVsbFdpZHRoOiBmYWxzZSwgLy8gQ2hhbmdlIHRvIGZ1bGwgd2lkdGggc3R5bGVzXG4gICAgICAgIGluZGljYXRvcnM6IGZhbHNlLCAvLyBUb2dnbGUgaW5kaWNhdG9yc1xuICAgICAgICBub1dyYXA6IGZhbHNlLCAvLyBEb24ndCB3cmFwIGFyb3VuZCBhbmQgY3ljbGUgdGhyb3VnaCBpdGVtcy5cbiAgICAgICAgb25DeWNsZVRvOiBudWxsIC8vIENhbGxiYWNrIGZvciB3aGVuIGEgbmV3IHNsaWRlIGlzIGN5Y2xlZCB0by5cbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IE1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKCQodGhpcykpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdW5pcXVlTmFtZXNwYWNlID0gbmFtZXNwYWNlK2k7XG4gICAgICAgIHZhciBpbWFnZXMsIGl0ZW1fd2lkdGgsIGl0ZW1faGVpZ2h0LCBvZmZzZXQsIGNlbnRlciwgcHJlc3NlZCwgZGltLCBjb3VudCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSwgcmVmZXJlbmNlWSwgYW1wbGl0dWRlLCB0YXJnZXQsIHZlbG9jaXR5LCBzY3JvbGxpbmcsXG4gICAgICAgICAgICB4Zm9ybSwgZnJhbWUsIHRpbWVzdGFtcCwgdGlja2VyLCBkcmFnZ2VkLCB2ZXJ0aWNhbF9kcmFnZ2VkO1xuICAgICAgICB2YXIgJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcbiAgICAgICAgdmFyIHNjcm9sbGluZ1RpbWVvdXQgPSBudWxsO1xuXG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZVxuICAgICAgICB2YXIgdmlldyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBzaG93SW5kaWNhdG9ycyA9IHZpZXcuYXR0cignZGF0YS1pbmRpY2F0b3JzJykgfHwgb3B0aW9ucy5pbmRpY2F0b3JzO1xuXG5cbiAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICB2YXIgc2V0Q2Fyb3VzZWxIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZmlyc3RJbWFnZSA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0gaW1nJykuZmlyc3QoKTtcbiAgICAgICAgICBpZiAoZmlyc3RJbWFnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdEltYWdlLnByb3AoJ2NvbXBsZXRlJykpIHtcbiAgICAgICAgICAgICAgdmlldy5jc3MoJ2hlaWdodCcsIGZpcnN0SW1hZ2UuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmlyc3RJbWFnZS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmlldy5jc3MoJ2hlaWdodCcsICQodGhpcykuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2aWV3LmNzcygnaGVpZ2h0JywgaW1hZ2VIZWlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICBvcHRpb25zLmRpc3QgPSAwO1xuICAgICAgICAgIHNldENhcm91c2VsSGVpZ2h0KCk7XG5cbiAgICAgICAgICAvLyBPZmZzZXQgZml4ZWQgaXRlbXMgd2hlbiBpbmRpY2F0b3JzLlxuICAgICAgICAgIGlmIChzaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgICAgdmlldy5maW5kKCcuY2Fyb3VzZWwtZml4ZWQtaXRlbScpLmFkZENsYXNzKCd3aXRoLWluZGljYXRvcnMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIERvbid0IGRvdWJsZSBpbml0aWFsaXplLlxuICAgICAgICBpZiAodmlldy5oYXNDbGFzcygnaW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIHZhcmlhYmxlc1xuICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcblxuICAgICAgICAgIC8vIFJlZHJhdyBjYXJvdXNlbC5cbiAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nhcm91c2VsTmV4dCcsIFswLjAwMDAwMV0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cblxuICAgICAgICB2aWV3LmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xuICAgICAgICBwcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIG9mZnNldCA9IHRhcmdldCA9IDA7XG4gICAgICAgIGltYWdlcyA9IFtdO1xuICAgICAgICBpdGVtX3dpZHRoID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJXaWR0aCgpO1xuICAgICAgICBpdGVtX2hlaWdodCA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5maXJzdCgpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgIGRpbSA9IGl0ZW1fd2lkdGggKiAyICsgb3B0aW9ucy5wYWRkaW5nO1xuXG4gICAgICAgIHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgaW1hZ2VzLnB1c2goJCh0aGlzKVswXSk7XG4gICAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICB2YXIgJGluZGljYXRvciA9ICQoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTtcblxuICAgICAgICAgICAgLy8gQWRkIGFjdGl2ZSB0byBmaXJzdCBieSBkZWZhdWx0LlxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgJGluZGljYXRvci5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBjbGlja3Mgb24gaW5kaWNhdG9ycy5cbiAgICAgICAgICAgICRpbmRpY2F0b3IuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgICAgICAgIGN5Y2xlVG8oaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkaW5kaWNhdG9ycy5hcHBlbmQoJGluZGljYXRvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICB2aWV3LmFwcGVuZCgkaW5kaWNhdG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQgPSBpbWFnZXMubGVuZ3RoO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBFdmVudHMoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGFwKTtcbiAgICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZyk7XG4gICAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcmVsZWFzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGFwKTtcbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHJlbGVhc2UpO1xuICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbGVhc2UpO1xuICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljayk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB4cG9zKGUpIHtcbiAgICAgICAgICAvLyB0b3VjaCBldmVudFxuICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBtb3VzZSBldmVudFxuICAgICAgICAgIHJldHVybiBlLmNsaWVudFg7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB5cG9zKGUpIHtcbiAgICAgICAgICAvLyB0b3VjaCBldmVudFxuICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBtb3VzZSBldmVudFxuICAgICAgICAgIHJldHVybiBlLmNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3cmFwKHgpIHtcbiAgICAgICAgICByZXR1cm4gKHggPj0gY291bnQpID8gKHggJSBjb3VudCkgOiAoeCA8IDApID8gd3JhcChjb3VudCArICh4ICUgY291bnQpKSA6IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzY3JvbGwoeCkge1xuICAgICAgICAgIC8vIFRyYWNrIHNjcm9sbGluZyBzdGF0ZVxuICAgICAgICAgIHNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgaWYgKCF2aWV3Lmhhc0NsYXNzKCdzY3JvbGxpbmcnKSkge1xuICAgICAgICAgICAgdmlldy5hZGRDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzY3JvbGxpbmdUaW1lb3V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsaW5nVGltZW91dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNjcm9sbGluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdmlldy5yZW1vdmVDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICAgICAgfSwgb3B0aW9ucy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAvLyBTdGFydCBhY3R1YWwgc2Nyb2xsXG4gICAgICAgICAgdmFyIGksIGhhbGYsIGRlbHRhLCBkaXIsIHR3ZWVuLCBlbCwgYWxpZ25tZW50LCB4VHJhbnNsYXRpb247XG4gICAgICAgICAgdmFyIGxhc3RDZW50ZXIgPSBjZW50ZXI7XG5cbiAgICAgICAgICBvZmZzZXQgPSAodHlwZW9mIHggPT09ICdudW1iZXInKSA/IHggOiBvZmZzZXQ7XG4gICAgICAgICAgY2VudGVyID0gTWF0aC5mbG9vcigob2Zmc2V0ICsgZGltIC8gMikgLyBkaW0pO1xuICAgICAgICAgIGRlbHRhID0gb2Zmc2V0IC0gY2VudGVyICogZGltO1xuICAgICAgICAgIGRpciA9IChkZWx0YSA8IDApID8gMSA6IC0xO1xuICAgICAgICAgIHR3ZWVuID0gLWRpciAqIGRlbHRhICogMiAvIGRpbTtcbiAgICAgICAgICBoYWxmID0gY291bnQgPj4gMTtcblxuICAgICAgICAgIGlmICghb3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIGFsaWdubWVudCA9ICd0cmFuc2xhdGVYKCcgKyAodmlld1swXS5jbGllbnRXaWR0aCAtIGl0ZW1fd2lkdGgpIC8gMiArICdweCkgJztcbiAgICAgICAgICAgIGFsaWdubWVudCArPSAndHJhbnNsYXRlWSgnICsgKHZpZXdbMF0uY2xpZW50SGVpZ2h0IC0gaXRlbV9oZWlnaHQpIC8gMiArICdweCknO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPSAndHJhbnNsYXRlWCgwKSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2V0IGluZGljYXRvciBhY3RpdmVcbiAgICAgICAgICBpZiAoc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gKGNlbnRlciAlIGNvdW50KTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJbmRpY2F0b3IgPSAkaW5kaWNhdG9ycy5maW5kKCcuaW5kaWNhdG9yLWl0ZW0uYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlSW5kaWNhdG9yLmluZGV4KCkgIT09IGRpZmYpIHtcbiAgICAgICAgICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgJGluZGljYXRvcnMuZmluZCgnLmluZGljYXRvci1pdGVtJykuZXEoZGlmZikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNlbnRlclxuICAgICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cbiAgICAgICAgICBpZiAoIW9wdGlvbnMubm9XcmFwIHx8IChjZW50ZXIgPj0gMCAmJiBjZW50ZXIgPCBjb3VudCkpIHtcbiAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyKV07XG5cbiAgICAgICAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2VudGVyIGl0ZW0uXG4gICAgICAgICAgICBpZiAoISQoZWwpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAkKGVsKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArICgtZGVsdGEgLyAyKSArICdweCknICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoZGlyICogb3B0aW9ucy5zaGlmdCAqIHR3ZWVuICogaSkgKyAncHgpJyArXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWignICsgKG9wdGlvbnMuZGlzdCAqIHR3ZWVuKSArICdweCknO1xuICAgICAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkgeyB0d2VlbmVkT3BhY2l0eSA9IDE7IH1cbiAgICAgICAgICAgIGVsc2UgeyB0d2VlbmVkT3BhY2l0eSA9IDEgLSAwLjIgKiB0d2VlbjsgfVxuICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IHR3ZWVuZWRPcGFjaXR5O1xuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChpID0gMTsgaSA8PSBoYWxmOyArK2kpIHtcbiAgICAgICAgICAgIC8vIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3Q7XG4gICAgICAgICAgICAgIHR3ZWVuZWRPcGFjaXR5ID0gKGkgPT09IGhhbGYgJiYgZGVsdGEgPCAwKSA/IDEgLSB0d2VlbiA6IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3QgKiAoaSAqIDIgKyB0d2VlbiAqIGRpcik7XG4gICAgICAgICAgICAgIHR3ZWVuZWRPcGFjaXR5ID0gMSAtIDAuMiAqIChpICogMiArIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ub1dyYXAgfHwgY2VudGVyICsgaSA8IGNvdW50KSB7XG4gICAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyICsgaSldO1xuICAgICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKG9wdGlvbnMuc2hpZnQgKyAoZGltICogaSAtIGRlbHRhKSAvIDIpICsgJ3B4KScgK1xuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWignICsgelRyYW5zbGF0aW9uICsgJ3B4KSc7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IC1pO1xuICAgICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIGxlZnQgc2lkZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdDtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAoaSA9PT0gaGFsZiAmJiBkZWx0YSA+IDApID8gMSAtIHR3ZWVuIDogMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdCAqIChpICogMiAtIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogKGkgKiAyIC0gdHdlZW4gKiBkaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCB8fCBjZW50ZXIgLSBpID49IDApIHtcbiAgICAgICAgICAgICAgZWwgPSBpbWFnZXNbd3JhcChjZW50ZXIgLSBpKV07XG4gICAgICAgICAgICAgIGVsLnN0eWxlW3hmb3JtXSA9IGFsaWdubWVudCArXG4gICAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoLW9wdGlvbnMuc2hpZnQgKyAoLWRpbSAqIGkgLSBkZWx0YSkgLyAyKSArICdweCknICtcbiAgICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVooJyArIHpUcmFuc2xhdGlvbiArICdweCknO1xuICAgICAgICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAtaTtcbiAgICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IHR3ZWVuZWRPcGFjaXR5O1xuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjZW50ZXJcbiAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCB8fCAoY2VudGVyID49IDAgJiYgY2VudGVyIDwgY291bnQpKSB7XG4gICAgICAgICAgICBlbCA9IGltYWdlc1t3cmFwKGNlbnRlcildO1xuICAgICAgICAgICAgZWwuc3R5bGVbeGZvcm1dID0gYWxpZ25tZW50ICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoLWRlbHRhIC8gMikgKyAncHgpJyArXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKGRpciAqIG9wdGlvbnMuc2hpZnQgKiB0d2VlbikgKyAncHgpJyArXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWignICsgKG9wdGlvbnMuZGlzdCAqIHR3ZWVuKSArICdweCknO1xuICAgICAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkgeyB0d2VlbmVkT3BhY2l0eSA9IDE7IH1cbiAgICAgICAgICAgIGVsc2UgeyB0d2VlbmVkT3BhY2l0eSA9IDEgLSAwLjIgKiB0d2VlbjsgfVxuICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IHR3ZWVuZWRPcGFjaXR5O1xuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gb25DeWNsZVRvIGNhbGxiYWNrXG4gICAgICAgICAgaWYgKGxhc3RDZW50ZXIgIT09IGNlbnRlciAmJlxuICAgICAgICAgICAgICB0eXBlb2Yob3B0aW9ucy5vbkN5Y2xlVG8pID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciAkY3Vycl9pdGVtID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmVxKHdyYXAoY2VudGVyKSk7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ3ljbGVUby5jYWxsKHRoaXMsICRjdXJyX2l0ZW0sIGRyYWdnZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNrKCkge1xuICAgICAgICAgIHZhciBub3csIGVsYXBzZWQsIGRlbHRhLCB2O1xuXG4gICAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBlbGFwc2VkID0gbm93IC0gdGltZXN0YW1wO1xuICAgICAgICAgIHRpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgICBkZWx0YSA9IG9mZnNldCAtIGZyYW1lO1xuICAgICAgICAgIGZyYW1lID0gb2Zmc2V0O1xuXG4gICAgICAgICAgdiA9IDEwMDAgKiBkZWx0YSAvICgxICsgZWxhcHNlZCk7XG4gICAgICAgICAgdmVsb2NpdHkgPSAwLjggKiB2ICsgMC4yICogdmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhdXRvU2Nyb2xsKCkge1xuICAgICAgICAgIHZhciBlbGFwc2VkLCBkZWx0YTtcblxuICAgICAgICAgIGlmIChhbXBsaXR1ZGUpIHtcbiAgICAgICAgICAgIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuICAgICAgICAgICAgZGVsdGEgPSBhbXBsaXR1ZGUgKiBNYXRoLmV4cCgtZWxhcHNlZCAvIG9wdGlvbnMuZHVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGRlbHRhID4gMiB8fCBkZWx0YSA8IC0yKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKHRhcmdldCAtIGRlbHRhKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrKGUpIHtcbiAgICAgICAgICAvLyBEaXNhYmxlIGNsaWNrcyBpZiBjYXJvdXNlbCB3YXMgZHJhZ2dlZC5cbiAgICAgICAgICBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICB2YXIgY2xpY2tlZEluZGV4ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhcm91c2VsLWl0ZW0nKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIGRpZmYgPSAoY2VudGVyICUgY291bnQpIC0gY2xpY2tlZEluZGV4O1xuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGNsaWNrcyBpZiBjYXJvdXNlbCB3YXMgc2hpZnRlZCBieSBjbGlja1xuICAgICAgICAgICAgaWYgKGRpZmYgIT09IDApIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3ljbGVUbyhjbGlja2VkSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGN5Y2xlVG8obikge1xuICAgICAgICAgIHZhciBkaWZmID0gKGNlbnRlciAlIGNvdW50KSAtIG47XG5cbiAgICAgICAgICAvLyBBY2NvdW50IGZvciB3cmFwYXJvdW5kLlxuICAgICAgICAgIGlmICghb3B0aW9ucy5ub1dyYXApIHtcbiAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZiArIGNvdW50KSA8IE1hdGguYWJzKGRpZmYpKSB7IGRpZmYgKz0gY291bnQ7IH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZiAtIGNvdW50KSA8IGRpZmYpIHsgZGlmZiAtPSBjb3VudDsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhbGwgcHJldiBvciBuZXh0IGFjY29yZGluZ2x5LlxuICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgdmlldy50cmlnZ2VyKCdjYXJvdXNlbE5leHQnLCBbTWF0aC5hYnMoZGlmZildKTtcblxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgICAgIHZpZXcudHJpZ2dlcignY2Fyb3VzZWxQcmV2JywgW2RpZmZdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0YXAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICBkcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgICAgdmVydGljYWxfZHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgIHJlZmVyZW5jZSA9IHhwb3MoZSk7XG4gICAgICAgICAgcmVmZXJlbmNlWSA9IHlwb3MoZSk7XG5cbiAgICAgICAgICB2ZWxvY2l0eSA9IGFtcGxpdHVkZSA9IDA7XG4gICAgICAgICAgZnJhbWUgPSBvZmZzZXQ7XG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpY2tlcik7XG4gICAgICAgICAgdGlja2VyID0gc2V0SW50ZXJ2YWwodHJhY2ssIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgICAgICB2YXIgeCwgZGVsdGEsIGRlbHRhWTtcbiAgICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgICAgeCA9IHhwb3MoZSk7XG4gICAgICAgICAgICB5ID0geXBvcyhlKTtcbiAgICAgICAgICAgIGRlbHRhID0gcmVmZXJlbmNlIC0geDtcbiAgICAgICAgICAgIGRlbHRhWSA9IE1hdGguYWJzKHJlZmVyZW5jZVkgLSB5KTtcbiAgICAgICAgICAgIGlmIChkZWx0YVkgPCAzMCAmJiAhdmVydGljYWxfZHJhZ2dlZCkge1xuICAgICAgICAgICAgICAvLyBJZiB2ZXJ0aWNhbCBzY3JvbGxpbmcgZG9uJ3QgYWxsb3cgZHJhZ2dpbmcuXG4gICAgICAgICAgICAgIGlmIChkZWx0YSA+IDIgfHwgZGVsdGEgPCAtMikge1xuICAgICAgICAgICAgICAgIGRyYWdnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHg7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKG9mZnNldCArIGRlbHRhKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRyYWdnZWQpIHtcbiAgICAgICAgICAgICAgLy8gSWYgZHJhZ2dpbmcgZG9uJ3QgYWxsb3cgdmVydGljYWwgc2Nyb2xsLlxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVmVydGljYWwgc2Nyb2xsaW5nLlxuICAgICAgICAgICAgICB2ZXJ0aWNhbF9kcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgICAgLy8gSWYgZHJhZ2dpbmcgZG9uJ3QgYWxsb3cgdmVydGljYWwgc2Nyb2xsLlxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWxlYXNlKGUpIHtcbiAgICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgICAgcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aWNrZXIpO1xuICAgICAgICAgIHRhcmdldCA9IG9mZnNldDtcbiAgICAgICAgICBpZiAodmVsb2NpdHkgPiAxMCB8fCB2ZWxvY2l0eSA8IC0xMCkge1xuICAgICAgICAgICAgYW1wbGl0dWRlID0gMC45ICogdmVsb2NpdHk7XG4gICAgICAgICAgICB0YXJnZXQgPSBvZmZzZXQgKyBhbXBsaXR1ZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IE1hdGgucm91bmQodGFyZ2V0IC8gZGltKSAqIGRpbTtcblxuICAgICAgICAgIC8vIE5vIHdyYXAgb2YgaXRlbXMuXG4gICAgICAgICAgaWYgKG9wdGlvbnMubm9XcmFwKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID49IGRpbSAqIChjb3VudCAtIDEpKSB7XG4gICAgICAgICAgICAgIHRhcmdldCA9IGRpbSAqIChjb3VudCAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPCAwKSB7XG4gICAgICAgICAgICAgIHRhcmdldCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGFtcGxpdHVkZSA9IHRhcmdldCAtIG9mZnNldDtcbiAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvU2Nyb2xsKTtcblxuICAgICAgICAgIGlmIChkcmFnZ2VkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB4Zm9ybSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICBbJ3dlYmtpdCcsICdNb3onLCAnTycsICdtcyddLmV2ZXJ5KGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgICB2YXIgZSA9IHByZWZpeCArICdUcmFuc2Zvcm0nO1xuICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVtlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHhmb3JtID0gZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLmNhcm91c2VsLScrdW5pcXVlTmFtZXNwYWNlKS5vbigncmVzaXplLmNhcm91c2VsLScrdW5pcXVlTmFtZXNwYWNlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIGl0ZW1fd2lkdGggPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBpdGVtX2hlaWdodCA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5maXJzdCgpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgICBkaW0gPSBpdGVtX3dpZHRoICogMiArIG9wdGlvbnMucGFkZGluZztcbiAgICAgICAgICAgIG9mZnNldCA9IGNlbnRlciAqIDIgKiBpdGVtX3dpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0ID0gb2Zmc2V0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldHVwRXZlbnRzKCk7XG4gICAgICAgIHNjcm9sbChvZmZzZXQpO1xuXG4gICAgICAgICQodGhpcykub24oJ2Nhcm91c2VsTmV4dCcsIGZ1bmN0aW9uKGUsIG4pIHtcbiAgICAgICAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0ID0gKGRpbSAqIE1hdGgucm91bmQob2Zmc2V0IC8gZGltKSkgKyAoZGltICogbik7XG4gICAgICAgICAgaWYgKG9mZnNldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBhbXBsaXR1ZGUgPSB0YXJnZXQgLSBvZmZzZXQ7XG4gICAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9TY3JvbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2Fyb3VzZWxQcmV2JywgZnVuY3Rpb24oZSwgbikge1xuICAgICAgICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG4gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQgPSAoZGltICogTWF0aC5yb3VuZChvZmZzZXQgLyBkaW0pKSAtIChkaW0gKiBuKTtcbiAgICAgICAgICBpZiAob2Zmc2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGFtcGxpdHVkZSA9IHRhcmdldCAtIG9mZnNldDtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjYXJvdXNlbFNldCcsIGZ1bmN0aW9uKGUsIG4pIHtcbiAgICAgICAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3ljbGVUbyhuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuXG5cblxuICAgIH0sXG4gICAgbmV4dCA6IGZ1bmN0aW9uKG4pIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2Fyb3VzZWxOZXh0JywgW25dKTtcbiAgICB9LFxuICAgIHByZXYgOiBmdW5jdGlvbihuKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nhcm91c2VsUHJldicsIFtuXSk7XG4gICAgfSxcbiAgICBzZXQgOiBmdW5jdGlvbihuKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nhcm91c2VsU2V0JywgW25dKTtcbiAgICB9XG4gIH07XG5cblxuICAgICQuZm4uY2Fyb3VzZWwgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcbiAgICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5jYXJvdXNlbCcgKTtcbiAgICAgIH1cbiAgICB9OyAvLyBQbHVnaW4gZW5kXG59KCBqUXVlcnkgKSk7OyhmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuICBpbml0OiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9yaWdpbiA9ICQoJyMnKyQodGhpcykuYXR0cignZGF0YS1hY3RpdmF0ZXMnKSk7XG4gICAgdmFyIHNjcmVlbiA9ICQoJ2JvZHknKTtcblxuICAgIC8vIENyZWF0aW5nIHRhcCB0YXJnZXRcbiAgICB2YXIgdGFwVGFyZ2V0RWwgPSAkKHRoaXMpO1xuICAgIHZhciB0YXBUYXJnZXRXcmFwcGVyID0gdGFwVGFyZ2V0RWwucGFyZW50KCcudGFwLXRhcmdldC13cmFwcGVyJyk7XG4gICAgdmFyIHRhcFRhcmdldFdhdmUgPSB0YXBUYXJnZXRXcmFwcGVyLmZpbmQoJy50YXAtdGFyZ2V0LXdhdmUnKTtcbiAgICB2YXIgdGFwVGFyZ2V0T3JpZ2luRWwgPSB0YXBUYXJnZXRXcmFwcGVyLmZpbmQoJy50YXAtdGFyZ2V0LW9yaWdpbicpO1xuICAgIHZhciB0YXBUYXJnZXRDb250ZW50RWwgPSB0YXBUYXJnZXRFbC5maW5kKCcudGFwLXRhcmdldC1jb250ZW50Jyk7XG5cbiAgICAvLyBDcmVhdGluZyB3cmFwcGVyXG4gICAgaWYgKCF0YXBUYXJnZXRXcmFwcGVyLmxlbmd0aCkge1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlciA9IHRhcFRhcmdldEVsLndyYXAoJCgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd3JhcHBlclwiPjwvZGl2PicpKS5wYXJlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGluZyBjb250ZW50XG4gICAgaWYgKCF0YXBUYXJnZXRDb250ZW50RWwubGVuZ3RoKSB7XG4gICAgICB0YXBUYXJnZXRDb250ZW50RWwgPSAkKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC1jb250ZW50XCI+PC9kaXY+Jyk7XG4gICAgICB0YXBUYXJnZXRFbC5hcHBlbmQodGFwVGFyZ2V0Q29udGVudEVsKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGluZyBmb3JlZ3JvdW5kIHdhdmVcbiAgICBpZiAoIXRhcFRhcmdldFdhdmUubGVuZ3RoKSB7XG4gICAgICB0YXBUYXJnZXRXYXZlID0gJCgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd2F2ZVwiPjwvZGl2PicpO1xuXG4gICAgICAvLyBDcmVhdGluZyBvcmlnaW5cbiAgICAgIGlmICghdGFwVGFyZ2V0T3JpZ2luRWwubGVuZ3RoKSB7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsID0gb3JpZ2luLmNsb25lKHRydWUsIHRydWUpO1xuICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbC5hZGRDbGFzcygndGFwLXRhcmdldC1vcmlnaW4nKTtcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwucmVtb3ZlQXR0cignaWQnKTtcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgdGFwVGFyZ2V0V2F2ZS5hcHBlbmQodGFwVGFyZ2V0T3JpZ2luRWwpO1xuICAgICAgfVxuXG4gICAgICB0YXBUYXJnZXRXcmFwcGVyLmFwcGVuZCh0YXBUYXJnZXRXYXZlKTtcbiAgICB9XG5cbiAgICAvLyBPcGVuXG4gICAgdmFyIG9wZW5UYXBUYXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0YXBUYXJnZXRXcmFwcGVyLmlzKCcub3BlbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIG9wZW4gY2xhc3NcbiAgICAgIHRhcFRhcmdldFdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwub2ZmKCdjbGljay50YXBUYXJnZXQnKS5vbignY2xpY2sudGFwVGFyZ2V0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNsb3NlVGFwVGFyZ2V0KCk7XG4gICAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwub2ZmKCdjbGljay50YXBUYXJnZXQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay50YXBUYXJnZXQnKS5vbignY2xpY2sudGFwVGFyZ2V0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNsb3NlVGFwVGFyZ2V0KCk7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay50YXBUYXJnZXQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRocm90dGxlZENhbGMgPSBNYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxjdWxhdGVUYXBUYXJnZXQoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnRhcFRhcmdldCcpLm9uKCdyZXNpemUudGFwVGFyZ2V0JywgdGhyb3R0bGVkQ2FsYyk7XG4gICAgICB9LCAwKTtcbiAgICB9O1xuXG4gICAgLy8gQ2xvc2VcbiAgICB2YXIgY2xvc2VUYXBUYXJnZXQgPSBmdW5jdGlvbigpe1xuICAgICAgaWYgKCF0YXBUYXJnZXRXcmFwcGVyLmlzKCcub3BlbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGFwVGFyZ2V0V3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwub2ZmKCdjbGljay50YXBUYXJnZXQnKVxuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay50YXBUYXJnZXQnKTtcbiAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS50YXBUYXJnZXQnKTtcbiAgICB9O1xuXG4gICAgLy8gUHJlIGNhbGN1bGF0ZVxuICAgIHZhciBjYWxjdWxhdGVUYXBUYXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIEVsZW1lbnQgb3IgcGFyZW50IGlzIGZpeGVkIHBvc2l0aW9uP1xuICAgICAgdmFyIGlzRml4ZWQgPSBvcmlnaW4uY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgICAgaWYgKCFpc0ZpeGVkKSB7XG4gICAgICAgIHZhciBwYXJlbnRzID0gb3JpZ2luLnBhcmVudHMoKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpc0ZpeGVkID0gJChwYXJlbnRzW2ldKS5jc3MoJ3Bvc2l0aW9uJykgPT0gJ2ZpeGVkJztcbiAgICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIG9yaWdpblxuICAgICAgdmFyIG9yaWdpbldpZHRoID0gb3JpZ2luLm91dGVyV2lkdGgoKTtcbiAgICAgIHZhciBvcmlnaW5IZWlnaHQgPSBvcmlnaW4ub3V0ZXJIZWlnaHQoKTtcbiAgICAgIHZhciBvcmlnaW5Ub3AgPSBpc0ZpeGVkID8gb3JpZ2luLm9mZnNldCgpLnRvcCAtICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIDogb3JpZ2luLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciBvcmlnaW5MZWZ0ID0gaXNGaXhlZCA/IG9yaWdpbi5vZmZzZXQoKS5sZWZ0IC0gJChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpIDogb3JpZ2luLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIHNjcmVlblxuICAgICAgdmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgdmFyIGNlbnRlclggPSB3aW5kb3dXaWR0aCAvIDI7XG4gICAgICB2YXIgY2VudGVyWSA9IHdpbmRvd0hlaWdodCAvIDI7XG4gICAgICB2YXIgaXNMZWZ0ID0gb3JpZ2luTGVmdCA8PSBjZW50ZXJYO1xuICAgICAgdmFyIGlzUmlnaHQgPSBvcmlnaW5MZWZ0ID4gY2VudGVyWDtcbiAgICAgIHZhciBpc1RvcCA9IG9yaWdpblRvcCA8PSBjZW50ZXJZO1xuICAgICAgdmFyIGlzQm90dG9tID0gb3JpZ2luVG9wID4gY2VudGVyWTtcbiAgICAgIHZhciBpc0NlbnRlclggPSBvcmlnaW5MZWZ0ID49IHdpbmRvd1dpZHRoKjAuMjUgJiYgb3JpZ2luTGVmdCA8PSB3aW5kb3dXaWR0aCowLjc1O1xuICAgICAgdmFyIGlzQ2VudGVyWSA9IG9yaWdpblRvcCA+PSB3aW5kb3dIZWlnaHQqMC4yNSAmJiBvcmlnaW5Ub3AgPD0gd2luZG93SGVpZ2h0KjAuNzU7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIHRhcCB0YXJnZXRcbiAgICAgIHZhciB0YXBUYXJnZXRXaWR0aCA9IHRhcFRhcmdldEVsLm91dGVyV2lkdGgoKTtcbiAgICAgIHZhciB0YXBUYXJnZXRIZWlnaHQgPSB0YXBUYXJnZXRFbC5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIHRhcFRhcmdldFRvcCA9IG9yaWdpblRvcCArIG9yaWdpbkhlaWdodC8yIC0gdGFwVGFyZ2V0SGVpZ2h0LzI7XG4gICAgICB2YXIgdGFwVGFyZ2V0TGVmdCA9IG9yaWdpbkxlZnQgKyBvcmlnaW5XaWR0aC8yIC0gdGFwVGFyZ2V0V2lkdGgvMjtcbiAgICAgIHZhciB0YXBUYXJnZXRQb3NpdGlvbiA9IGlzRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgY29udGVudFxuICAgICAgdmFyIHRhcFRhcmdldFRleHRXaWR0aCA9IGlzQ2VudGVyWCA/IHRhcFRhcmdldFdpZHRoIDogdGFwVGFyZ2V0V2lkdGgvMiArIG9yaWdpbldpZHRoO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRIZWlnaHQgPSB0YXBUYXJnZXRIZWlnaHQvMjtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0VG9wID0gaXNUb3AgPyB0YXBUYXJnZXRIZWlnaHQvMiA6IDA7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dEJvdHRvbSA9IDA7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dExlZnQgPSBpc0xlZnQgJiYgIWlzQ2VudGVyWCA/IHRhcFRhcmdldFdpZHRoLzIgLSBvcmlnaW5XaWR0aCA6IDA7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dFJpZ2h0ID0gMDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0UGFkZGluZyA9IG9yaWdpbldpZHRoO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRBbGlnbiA9IGlzQm90dG9tID8gJ2JvdHRvbScgOiAndG9wJztcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgd2F2ZVxuICAgICAgdmFyIHRhcFRhcmdldFdhdmVXaWR0aCA9IG9yaWdpbldpZHRoID4gb3JpZ2luSGVpZ2h0ID8gb3JpZ2luV2lkdGgqMiA6IG9yaWdpbldpZHRoKjI7XG4gICAgICB2YXIgdGFwVGFyZ2V0V2F2ZUhlaWdodCA9IHRhcFRhcmdldFdhdmVXaWR0aDtcbiAgICAgIHZhciB0YXBUYXJnZXRXYXZlVG9wID0gdGFwVGFyZ2V0SGVpZ2h0LzIgLSB0YXBUYXJnZXRXYXZlSGVpZ2h0LzI7XG4gICAgICB2YXIgdGFwVGFyZ2V0V2F2ZUxlZnQgPSB0YXBUYXJnZXRXaWR0aC8yIC0gdGFwVGFyZ2V0V2F2ZVdpZHRoLzI7XG5cbiAgICAgIC8vIFNldHRpbmcgdGFwIHRhcmdldFxuICAgICAgdmFyIHRhcFRhcmdldFdyYXBwZXJDc3NPYmogPSB7fTtcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmoudG9wID0gaXNUb3AgPyB0YXBUYXJnZXRUb3AgOiAnJztcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmoucmlnaHQgPSBpc1JpZ2h0ID8gd2luZG93V2lkdGggLSB0YXBUYXJnZXRMZWZ0IC0gdGFwVGFyZ2V0V2lkdGggOiAnJztcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmouYm90dG9tID0gaXNCb3R0b20gPyB3aW5kb3dIZWlnaHQgLSB0YXBUYXJnZXRUb3AgLSB0YXBUYXJnZXRIZWlnaHQgOiAnJztcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmoubGVmdCA9IGlzTGVmdCA/IHRhcFRhcmdldExlZnQgOiAnJztcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmoucG9zaXRpb24gPSB0YXBUYXJnZXRQb3NpdGlvbjtcbiAgICAgIHRhcFRhcmdldFdyYXBwZXIuY3NzKHRhcFRhcmdldFdyYXBwZXJDc3NPYmopO1xuXG4gICAgICAvLyBTZXR0aW5nIGNvbnRlbnRcbiAgICAgIHRhcFRhcmdldENvbnRlbnRFbC5jc3Moe1xuICAgICAgICB3aWR0aDogdGFwVGFyZ2V0VGV4dFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRhcFRhcmdldFRleHRIZWlnaHQsXG4gICAgICAgIHRvcDogdGFwVGFyZ2V0VGV4dFRvcCxcbiAgICAgICAgcmlnaHQ6IHRhcFRhcmdldFRleHRSaWdodCxcbiAgICAgICAgYm90dG9tOiB0YXBUYXJnZXRUZXh0Qm90dG9tLFxuICAgICAgICBsZWZ0OiB0YXBUYXJnZXRUZXh0TGVmdCxcbiAgICAgICAgcGFkZGluZzogdGFwVGFyZ2V0VGV4dFBhZGRpbmcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IHRhcFRhcmdldFRleHRBbGlnblxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldHRpbmcgd2F2ZVxuICAgICAgdGFwVGFyZ2V0V2F2ZS5jc3Moe1xuICAgICAgICB0b3A6IHRhcFRhcmdldFdhdmVUb3AsXG4gICAgICAgIGxlZnQ6IHRhcFRhcmdldFdhdmVMZWZ0LFxuICAgICAgICB3aWR0aDogdGFwVGFyZ2V0V2F2ZVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRhcFRhcmdldFdhdmVIZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09ICdvcGVuJykge1xuICAgICAgY2FsY3VsYXRlVGFwVGFyZ2V0KCk7XG4gICAgICBvcGVuVGFwVGFyZ2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgPT0gJ2Nsb3NlJylcbiAgICAgIGNsb3NlVGFwVGFyZ2V0KCk7XG4gICAgfSk7XG4gIH0sXG4gIG9wZW46IGZ1bmN0aW9uKCkge30sXG4gIGNsb3NlOiBmdW5jdGlvbigpIHt9XG4gIH07XG5cbiAgJC5mbi50YXBUYXJnZXQgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcbiAgaWYgKG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSB8fCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JylcbiAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblxuICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudGFwLXRhcmdldCcgKTtcbiAgfTtcblxufSggalF1ZXJ5ICkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsaXplLWNzcy9kaXN0L2pzL21hdGVyaWFsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9FeGFtcGxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDY3NzRmNGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRXhhbXBsZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXGFtYXRzdWthXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxGWVBKXFxcXGVpZW5cXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEV4YW1wbGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRXhhbXBsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDY3NzRmNGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00Njc3NGY0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zLmNvbXB1dGVkIHx8IG51bGwpXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICAgIG9wdGlvbnMuY29tcHV0ZWQgPSBjb21wdXRlZFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiRXhhbXBsZSBDb21wb25lbnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgSSdtIGFuIGV4YW1wbGUgY29tcG9uZW50IVxcbiAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDY3NzRmNGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00Njc3NGY0ZVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0V4YW1wbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9