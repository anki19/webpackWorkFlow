!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n),t(0);var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.buttonCssClass="hello-world-button"}var n,t;return n=e,(t=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add("hello-world-button");var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),n.appendChild(e)},e.classList.add("hthis/buttonCssClass"),n.appendChild(e)}}])&&r(n.prototype,t),e}();function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t(1),(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,(t=[{key:"render",value:function(){var e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="Webpack is awsome",n.appendChild(e)}}])&&u(n.prototype,t),e}())).render();var l=new o;l.render(),console.log("Production mode"),l.methodThatDoesNotExist()}]);