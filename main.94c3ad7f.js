parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Gkth":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t,o){"object"===("undefined"==typeof exports?"undefined":n(exports))&&"undefined"!=typeof module?module.exports=o():"function"==typeof e&&e.amd?e(o):(t="undefined"!=typeof globalThis?globalThis:t||self,function(){var e=t.Cookies,n=t.Cookies=o();n.noConflict=function(){return t.Cookies=e,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var u="";for(var c in i)i[c]&&(u+="; "+c,!0!==i[c]&&(u+="="+i[c].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+u}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),u=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(o[c]=n.read(u,c),e===c)break}catch(f){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})});
},{}],"MbdA":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new G(n||[]);return i(a,"_invoke",{value:T(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var y="suspendedStart",d="suspendedYield",v="executing",g="completed",m={};function w(){}function x(){}function b(){}var L={};f(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(C([])));_&&_!==o&&a.call(_,u)&&(L=_);var j=b.prototype=w.prototype=Object.create(L);function O(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function k(e,r){function n(o,i,c,u){var s=p(e[o],e,i);if("throw"!==s.type){var h=s.arg,f=h.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(f).then(function(t){h.value=t,c(h)},function(t){return n("throw",t,c,u)})}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r(function(r,o){n(t,e,r,o)})}return o=o?o.then(a,a):a()}})}function T(t,e,n){var o=y;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?g:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function S(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=b,i(j,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,h,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},O(k.prototype),f(k.prototype,s,function(){return this}),n.AsyncIterator=k,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new k(l(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},O(j),f(j,h,"Generator"),f(j,u,function(){return this}),f(j,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{u(n.next(t))}catch(e){a(e)}}function c(t){try{u(n.throw(t))}catch(e){a(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,c)}u((n=n.apply(t,e||[])).next())})},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMessage=exports.getUser=exports.changeName=exports.sendCodeOnEmail=void 0;var o=n(require("js-cookie"));function a(t){return r(this,void 0,void 0,e().mark(function r(){var n,o;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://edu.strada.one/api/user",e.prev=1,e.next=4,fetch("https://edu.strada.one/api/user",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({email:t})});case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,console.log(o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("error");case 14:case"end":return e.stop()}},r,null,[[1,11]])}))}function i(t){return r(this,void 0,void 0,e().mark(function r(){var n;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.default.get("userToken"),e.next=3,fetch("https://edu.strada.one/api/user",{method:"PATCH",body:JSON.stringify({name:t}),headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(n)}});case 3:e.sent;case 4:case"end":return e.stop()}},r)}))}function c(){return r(this,void 0,void 0,e().mark(function t(){var r,n,a;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.default.get("userToken"),t.prev=1,t.next=4,fetch("https://edu.strada.one/api/user/me",{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(r)}});case 4:return n=t.sent,t.next=7,n.json();case 7:return a=t.sent,t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(1),console.log("error");case 14:case"end":return t.stop()}},t,null,[[1,11]])}))}function u(){return r(this,void 0,void 0,e().mark(function t(){var r,n;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.default.get("userToken"),t.prev=1,t.next=4,fetch("https://edu.strada.one/api/messages/",{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(r)}});case 4:return n=t.sent,t.abrupt("return",n.json());case 8:t.prev=8,t.t0=t.catch(1),console.log("error");case 11:case"end":return t.stop()}},t,null,[[1,8]])}))}exports.sendCodeOnEmail=a,exports.changeName=i,exports.getUser=c,exports.getMessage=u;
},{"js-cookie":"Gkth"}],"WAma":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.elements=void 0,exports.elements={settings:document.querySelector(".settings"),closeModalSettings:document.querySelector(".close_cross_settings"),closeModalAuthorization:document.querySelector(".close_cross_authorization"),popupOverlaySettings:document.querySelector(".popup-overlay_settings"),popupOverlayAuthorization:document.querySelector(".popup-overlay_authorization"),messages:document.querySelector(".messages"),template:document.querySelector("#messageI"),input:document.querySelector(".inputMessage"),formFooter:document.querySelector(".form_footer"),mistake:document.querySelector(".mistake"),authorization:document.querySelector(".close"),enterCodeButton:document.querySelector(".enter_code"),popupOverlayConfirmation:document.querySelector(".popup-overlay_confirmation"),closeModalConfirmation:document.querySelector(".close_cross_confirmation"),inputEmail:document.querySelector(".input_email"),formAuthorization:document.querySelector(".authorization_form"),inputCode:document.querySelector(".input_code"),confirmationForm:document.querySelector(".confirmation_form"),settingsForm:document.querySelector(".settings_form"),inputName:document.querySelector(".input_name")};
},{}],"EHWq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showPopupConfirmation=exports.hidePopup=exports.showPopup=void 0;var o=require("./UI");function e(o){o.style.display="block"}function p(o){o.style.display="none"}function t(){e(o.elements.popupOverlayConfirmation),p(o.elements.popupOverlayAuthorization)}exports.showPopup=e,exports.hidePopup=p,exports.showPopupConfirmation=t;
},{"./UI":"WAma"}],"QChO":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createMessage=void 0;var t=require("./UI"),n=e(require("js-cookie"));function r(e,r,i,o){var u=document.createElement("div"),l=t.elements.template.content.cloneNode(!0),d=l.querySelector(".message"),s=l.querySelector(".time"),a=l.querySelector(".sender");return d.textContent=r,a.textContent=e+":",s.innerHTML=i,u.append(l),u.classList.add("i"),n.default.get("email")===o?u.classList.add("i"):u.classList.add("it"),c(),u}function i(){var e=0;return function(){return++e}}function c(){var e=i(),t=i(),n=i(),r=i(),c=document.querySelector(".smile"),o=document.querySelector(".smile_index"),u=document.querySelector(".stars"),l=document.querySelector(".stars_index"),d=document.querySelector(".heart"),s=document.querySelector(".heart_index"),a=document.querySelector(".bomb"),m=document.querySelector(".bomb_index");null==c||c.addEventListener("click",function(){o.innerHTML=String(e())}),null==u||u.addEventListener("click",function(){l.innerHTML=String(t())}),null==d||d.addEventListener("click",function(){s.innerHTML=String(n())}),null==a||a.addEventListener("click",function(){m.innerHTML=String(r())})}exports.createMessage=r;
},{"./UI":"WAma","js-cookie":"Gkth"}],"aGCf":[function(require,module,exports) {
"use strict";function t(t){var e=new Date(t);return[e.getHours().toString().padStart(2,"0"),e.getMinutes().toString().padStart(2,"0")].join(":")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatDate=void 0,exports.formatDate=t;
},{}],"f1ZH":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new M(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};f(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(T([])));_&&_!==o&&i.call(_,u)&&(L=_);var O=x.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function S(e,r){function n(o,a,c,u){var s=p(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,u)})}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r(function(r,o){n(t,e,r,o)})}return o=o?o.then(i,i):i()}})}function k(t,e,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function P(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},j(S.prototype),f(S.prototype,s,function(){return this}),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(O),f(O,l,"Generator"),f(O,u,function(){return this}),f(O,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function c(t){try{u(n.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(a,c)}u((n=n.apply(t,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderAllMessages=void 0;var n=require("./UI"),o=require("./request"),i=require("./formatDate"),a=require("./createMessage");function c(){return r(this,void 0,void 0,e().mark(function t(){var r,c,u,s,l,f;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=0,c=20,u=0,!0,t.next=6,(0,o.getMessage)();case 6:if(s=t.sent,l=s.messages,u!==l.length){t.next=15;break}return!1,(f=document.createElement("div")).classList.add("lastMessage"),f.textContent="Вся история загружена",n.elements.messages.prepend(f),t.abrupt("return");case 15:l.slice(r,r+c).forEach(function(t){var e=t.text,r=t.user.name,o=(0,i.formatDate)(t.createdAt),c=t.user.email,s=(0,a.createMessage)(r,e,o,c);n.elements.messages.prepend(s),u+=1}),n.elements.messages.scrollTop=n.elements.messages.scrollHeight,r+=c;case 19:case"end":return t.stop()}},t)}))}exports.renderAllMessages=c;
},{"./UI":"WAma","./request":"MbdA","./formatDate":"aGCf","./createMessage":"QChO"}],"jP6t":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(){t=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(n){f=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var o=t&&t.prototype instanceof w?t:w,i=Object.create(o.prototype),s=new A(r||[]);return a(i,"_invoke",{value:M(e,n,s)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var d="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function w(){}function L(){}function x(){}var E={};f(E,u,function(){return this});var b=Object.getPrototypeOf,k=b&&b(b(D([])));k&&k!==o&&i.call(k,u)&&(E=k);var O=x.prototype=w.prototype=Object.create(E);function _(e){["next","throw","return"].forEach(function(t){f(e,t,function(e){return this._invoke(t,e)})})}function S(t,n){function r(o,a,s,u){var c=p(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==e(f)&&i.call(f,"__await")?n.resolve(f.__await).then(function(e){r("next",e,s,u)},function(e){r("throw",e,s,u)}):n.resolve(f).then(function(e){l.value=e,s(l)},function(e){return r("throw",e,s,u)})}u(c.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new n(function(n,o){r(e,t,n,o)})}return o=o?o.then(i,i):i()}})}function M(e,t,r){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=P(s,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var c=p(e,t,r);if("normal"===c.type){if(o=r.done?y:m,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=y,r.method="throw",r.arg=c.arg)}}}function P(e,t){var r=t.method,o=e.iterator[r];if(o===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return L.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:L,configurable:!0}),L.displayName=f(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,f(e,l,"GeneratorFunction")),e.prototype=Object.create(O),e},r.awrap=function(e){return{__await:e}},_(S.prototype),f(S.prototype,c,function(){return this}),r.AsyncIterator=S,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new S(h(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},_(O),f(O,l,"Generator"),f(O,u,function(){return this}),f(O,"toString",function(){return"[object Generator]"}),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=D,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return s.type="throw",s.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:D(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}u((r=r.apply(e,t||[])).next())})},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var o=r(require("js-cookie")),i=require("./request"),a=require("./UI"),s=require("./popup"),u=require("./createMessage"),c=require("./formatDate"),l=require("./renderAllMessages"),f=o.default.get("userToken"),h=new WebSocket("wss://edu.strada.one/websockets?".concat(f));function p(e){h.send(JSON.stringify({text:e}))}var d=[];function m(){return n(this,void 0,void 0,t().mark(function e(){var n;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getMessage)();case 2:n=e.sent,d=n.messages;case 4:case"end":return e.stop()}},e)}))}function v(){return n(this,void 0,void 0,t().mark(function e(){var n,r,s,l,f,h,d;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getUser)();case 2:r=e.sent,s=r.name,l=a.elements.input.value,f=(0,c.formatDate)(new Date),h=null!==(n=o.default.get("email"))&&void 0!==n?n:"",""===l?a.elements.mistake.textContent="Заполните пустое поле":(a.elements.mistake.textContent="",a.elements.input.value="",d=(0,u.createMessage)(s,l,f,h),a.elements.messages.append(d)),p(l);case 9:case"end":return e.stop()}},e)}))}function y(){return n(this,void 0,void 0,t().mark(function e(){var n;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return n=new Set,d.forEach(function(e){n.add(e.user.email)}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))}function g(){return n(this,void 0,void 0,t().mark(function e(){var n;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return n=new Set,e.next=5,y();case 5:return e.sent.forEach(function(e){var t=d.reverse().find(function(t){return t.user.email===e}).user.name;n.add({email:e,name:t})}),e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}))}function w(e){var t=!0,n=document.querySelector(".users_list"),r=document.createElement("li");r.addEventListener("click",function(){if(t){var e=r.textContent;r.style.backgroundColor="grey",x(e),t=!1}else r.style.backgroundColor="white",a.elements.messages.innerHTML="",(0,l.renderAllMessages)(),a.elements.messages.addEventListener("scroll",b),t=!0}),r.textContent=e,null==n||n.append(r)}function L(){return n(this,void 0,void 0,t().mark(function e(){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:e.sent.forEach(function(e){w(e.name)});case 4:case"end":return e.stop()}},e)}))}function x(e){return n(this,void 0,void 0,t().mark(function n(){var r,o,s,l,f;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.getMessage)();case 2:return r=t.sent,t.next=5,g();case 5:o=t.sent,s=r.messages,l=Array.from(o).find(function(t){return t.name===e}),f=s.filter(function(e){return e.user.email===l.email}),a.elements.messages.innerHTML="",f.forEach(function(e){var t=e.text,n=e.user.name,r=(0,c.formatDate)(e.createdAt),o=e.user.email,i=(0,u.createMessage)(n,t,r,o);a.elements.messages.prepend(i),a.elements.messages.removeEventListener("scroll",b)});case 11:case"end":return t.stop()}},n)}))}function E(e){e.preventDefault(),v()}function b(){0===a.elements.messages.scrollTop&&(0,l.renderAllMessages)()}function k(e){e.preventDefault();var t=a.elements.inputEmail.value;o.default.set("email",t),(0,i.sendCodeOnEmail)(t),a.elements.formAuthorization.reset(),(0,s.showPopupConfirmation)()}function O(e){e.preventDefault();var t=a.elements.inputCode.value;o.default.set("userToken",t)}function _(e){e.preventDefault();var t=a.elements.inputName.value;(0,i.changeName)(t),(0,s.hidePopup)(a.elements.popupOverlaySettings),a.elements.settingsForm.reset()}function S(){(0,s.hidePopup)(a.elements.popupOverlayConfirmation),(0,l.renderAllMessages)(),L()}document.addEventListener("DOMContentLoaded",l.renderAllMessages),document.addEventListener("DOMContentLoaded",L),a.elements.messages.addEventListener("scroll",b),a.elements.settingsForm.addEventListener("submit",_),a.elements.confirmationForm.addEventListener("click",O),a.elements.formFooter.addEventListener("submit",E),a.elements.settings.addEventListener("click",function(){return(0,s.showPopup)(a.elements.popupOverlaySettings)}),a.elements.closeModalSettings.addEventListener("click",function(){return(0,s.hidePopup)(a.elements.popupOverlaySettings)}),a.elements.authorization.addEventListener("click",function(){return(0,s.showPopup)(a.elements.popupOverlayAuthorization)}),a.elements.closeModalAuthorization.addEventListener("click",function(){return(0,s.hidePopup)(a.elements.popupOverlayAuthorization)}),a.elements.enterCodeButton.addEventListener("click",s.showPopupConfirmation),a.elements.closeModalConfirmation.addEventListener("click",S),a.elements.formAuthorization.addEventListener("submit",k);
},{"js-cookie":"Gkth","./request":"MbdA","./UI":"WAma","./popup":"EHWq","./createMessage":"QChO","./formatDate":"aGCf","./renderAllMessages":"f1ZH"}]},{},["jP6t"], null)
//# sourceMappingURL=main.94c3ad7f.js.map