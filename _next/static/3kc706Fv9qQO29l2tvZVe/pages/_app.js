(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(t,e,n){n("3Ckp"),t.exports=n("bBV7")},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("LkAs"),o=n("Moms"),i=n("bMj6"),u=n("hZod"),a=n("tEuJ"),c=n("mXGw"),s=n.n(c),f=n("o42t"),l=n.n(f),p=n("/m4v"),d=n("hHgk"),v=n.n(d),h=n("wuQJ"),_=n.n(h),m=n("UthY"),y=n.n(m),b=n("tvLF"),w=n.n(b),g=n("s4hn"),x=n.n(g),O=n("1qCV"),S=n.n(O),k=n("z3IF"),E=n("UrUy"),j=n.n(E),C=n("azxR"),P=n("gTDC"),M=n.n(P),T=n("T5cu"),A=n.n(T),I=n("cnbf");function X(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"===typeof o?o(n,r,t):e(o)}}}}var D=X();D.withExtraArgument=X;var G=D,q=n("PTAR"),B=n("uCW7"),U=n("7R8V"),H=n("zp/s"),V=n("qkCi"),Z=n("ZQwM"),K=n("8WVE"),R=Object(I.c)({core:q.e,portfolio:B.a,exchanges:H.a,apiKeys:U.d,priceData:V.d,modals:Z.b}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(K.e)()||t,n=Object(I.e)(R,e,z(Object(I.a)(G)));return n.subscribe(A()((function(){var t=n.getState(),e=t.portfolio,r=t.core,o=t.apiKeys,i=t.priceData;Object(K.f)({portfolio:e,core:M()(r,["init","quoteSymbol"]),priceData:M()(i,["timeframe"]),apiKeys:o})}),500)),n},J=s.a.createElement;function N(t,e){var n=S()(t);if(x.a){var r=x()(t);e&&(r=r.filter((function(e){return w()(t,e).enumerable}))),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){Object(C.a)(t,e,n[e])})):y.a?_()(t,y()(n)):N(Object(n)).forEach((function(e){v()(t,e,w()(n,e))}))}return t}var Y=!1,L="__REDUX_STORE__";function Q(t){return Y?F(t):(window[L]||(window[L]=F(t)),window[L])}var $,tt=n("9fEB"),et=n.n(tt),nt=(n("lbcf"),s.a.createElement),rt=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(a.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.reduxStore;return nt(s.a.Fragment,null,nt(et.a,null,nt("title",null,"hodl.watch")),nt(p.a,{store:r},nt(e,n)))}}]),e}(l.a);e.default=($=rt,function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).reduxStore=Q(t.initialReduxState),n}return Object(a.a)(e,t),Object(o.a)(e,null,[{key:"getInitialProps",value:function(t){var e,n;return j.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=Q(),t.ctx.reduxStore=e,n={},!$.getInitialProps){r.next=7;break}return r.next=6,j.a.awrap($.getInitialProps(t));case 6:n=r.sent;case 7:return r.abrupt("return",W({},n,{initialReduxState:e.getState()}));case 8:case"end":return r.stop()}}))}}]),Object(o.a)(e,[{key:"render",value:function(){return J($,Object(k.a)({},this.props,{reduxStore:this.reduxStore}))}}]),e}(s.a.Component))},"3Ckp":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"3esu":function(t,e,n){var r=n("NluH"),o=n("oS/Z");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},"4hjl":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"6jsY":function(t,e,n){"use strict";var r=n("x9yg"),o=n("KBEF"),i=n("J/q3"),u=n("3esu"),a=n("8m4E"),c=n("Od8a"),s=n("UrUy"),f=n("PL1w");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=h,e.default=void 0;var l=f(n("mXGw")),p=n("z4BS");function d(t){var e,n,r;return s.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,s.awrap((0,p.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}e.AppInitialProps=p.AppInitialProps;var v=function(t){function e(){return o(this,e),u(this,a(e).apply(this,arguments))}return c(e,t),i(e,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,o=t.pageProps,i=h(e);return l.default.createElement(n,r({},o,{url:i}))}}]),e}(l.default.Component);function h(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=v,v.origGetInitialProps=d,v.getInitialProps=d},"8m4E":function(t,e,n){var r=n("jDdP"),o=n("OKNm");function i(e){return t.exports=i=o?r:function(t){return t.__proto__||r(t)},i(e)}t.exports=i},"8qpp":function(t,e,n){var r=n("s20r");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"9fEB":function(t,e,n){"use strict";var r=n("OAWj"),o=n("hHgk"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var u=i(n("mXGw")),a=i(n("GlZI")),c=n("9rrO"),s=n("bxxT"),f=n("vI6Y");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var u=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(i.type){case"title":case"base":e.has(i.type)?u=!1:e.add(i.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var f=d[c];if(i.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=i.props[f],p=o[f]||new r;p.has(l)?u=!1:(p.add(l),o[f]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})}))}var h=a.default();function _(t){var e=t.children;return u.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return u.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}_.rewind=h.rewind,e.default=_},"9rrO":function(t,e,n){"use strict";var r=n("hHgk"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("mXGw"));e.AmpStateContext=i.createContext({})},BGbK:function(t,e,n){var r=n("/1nD"),o=n("lyqB");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},GlZI:function(t,e,n){"use strict";var r=n("KBEF"),o=n("3esu"),i=n("8m4E"),u=n("oS/Z"),a=n("J/q3"),c=n("Od8a"),s=n("fvvH"),f=n("OAWj");n("hHgk")(e,"__esModule",{value:!0});var l=n("mXGw"),p=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function f(t){var a;return r(this,f),a=o(this,i(f).call(this,t)),p&&(e.add(u(a)),n(u(a))),a}return c(f,s),a(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},"IXD+":function(t,e,n){"use strict";var r=n("Yvct"),o=n("O/tV");t.exports=n("VX2v")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},OAWj:function(t,e,n){t.exports=n("bdJ0")},Od8a:function(t,e,n){var r=n("6Ndq"),o=n("g9SA");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=r(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},XZM3:function(t,e,n){n("pFlO")("Set")},Yvct:function(t,e,n){"use strict";var r=n("eOWL").f,o=n("G+Zn"),i=n("IUx0"),u=n("8Xl/"),a=n("LuVv"),c=n("s9UB"),s=n("gMWQ"),f=n("TTxG"),l=n("hXZv"),p=n("lBnu"),d=n("hYpR").fastKey,v=n("O/tV"),h=p?"_s":"size",_=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t((function(t,r){a(t,f,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&c(r,n,t[s],t)}));return i(f.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=v(this,e),r=_(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[h]--}return!!r},forEach:function(t){v(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(v(this,e),t)}}),p&&r(f.prototype,"size",{get:function(){return v(this,e)[h]}}),f},def:function(t,e,n){var r,o,i=_(t,e);return i?i.v=n:(t._l=i={i:o=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,e,n){s(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},bdJ0:function(t,e,n){n("iKhv"),n("WwSA"),n("k/kI"),n("IXD+"),n("mVXz"),n("XZM3"),n("mPQl"),t.exports=n("TaGV").Set},bxxT:function(t,e,n){"use strict";var r=n("hHgk"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("mXGw"));e.HeadManagerContext=i.createContext(null)},fvvH:function(t,e,n){var r=n("8qpp"),o=n("itsi"),i=n("4hjl");t.exports=function(t){return r(t)||o(t)||i()}},itsi:function(t,e,n){var r=n("8ET1"),o=n("7X5e");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},lyqB:function(t,e,n){var r=n("s9UB");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},mPQl:function(t,e,n){n("+9rI")("Set")},mVXz:function(t,e,n){var r=n("/6KZ");r(r.P+r.R,"Set",{toJSON:n("BGbK")("Set")})},o42t:function(t,e,n){t.exports=n("6jsY")},"oS/Z":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},vI6Y:function(t,e,n){"use strict";var r=n("hHgk"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("mXGw")),u=n("9rrO");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(i.default.useContext(u.AmpStateContext))}}},[[0,1,2,9,0,3,6,7]]]);