(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/CF2":function(e,t,r){"use strict";r("ANjH").compose;var o=r("cnnm");t.__esModule=!0,t.composeWithDevTools=o.composeWithDevTools,t.devToolsEnhancer=o.devToolsEnhancer},"/TnQ":function(e,t,r){"use strict";var o=r("ANjH").compose;t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"===typeof arguments[0]?o:o.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}},"2qu3":function(e,t,r){"use strict";var o=r("oI91");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.default=void 0;var i,c=(i=r("q1tI"))&&i.__esModule?i:{default:i},s=r("8L3h"),l=r("jwwS");const u=[],d=[];let p=!1;function f(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}function b(e){let t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach(o=>{let n=f(e[o]);n.loading?t.loading=!0:(t.loaded[o]=n.loaded,t.error=n.error),r.push(n.promise),n.promise.then(e=>{t.loaded[o]=e}).catch(e=>{t.error=e})})}catch(o){t.error=o}return t.promise=Promise.all(r).then(e=>(t.loading=!1,e)).catch(e=>{throw t.loading=!1,e}),t}function h(e,t){return c.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function O(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:h,webpack:null,modules:null},t),o=null;function n(){if(!o){const t=new y(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!p&&"function"===typeof r.webpack){const e=r.webpack();d.push(t=>{for(const r of e)if(-1!==t.indexOf(r))return n()})}const a=(e,t)=>{n();const a=c.default.useContext(l.LoadableContext),i=(0,s.useSubscription)(o);return c.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach(e=>{a(e)}),c.default.useMemo(()=>i.loading||i.error?c.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?r.render(i.loaded,e):null,[e,i])};return a.preload=()=>n(),a.displayName="LoadableComponent",c.default.forwardRef(a)}class y{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:e,_opts:t}=this;e.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function _(e){return O(f,e)}function m(e,t){let r=[];for(;e.length;){let o=e.pop();r.push(o(t))}return Promise.all(r).then(()=>{if(e.length)return m(e,t)})}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(b,e)},_.preloadAll=()=>new Promise((e,t)=>{m(u).then(e,t)}),_.preloadReady=(e=[])=>new Promise(t=>{const r=()=>(p=!0,t());m(d,e).then(r,r)}),window.__NEXT_PRELOADREADY=_.preloadReady;var j=_;t.default=j},GwQT:function(e,t,r){"use strict";(function(e){var o=r("cpVT"),n=r("SbWC");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=t=>(r={},o)=>{switch(o.type){case n.HYDRATE:return e.log("HYDRATE",{state:r,action:o}),i(i({},r),o.payload);case"INIT":default:return t(r,o)}}}).call(this,r("ziTh"))},S9By:function(e,t){var r=Object.keys||function(e){var t=[];for(var r in e)({}).hasOwnProperty.call(e,r)&&t.push(r);return t};e.exports=function(e,t,o){for(var n=r(e),a={},i=0,c=n.length;i<c;i++){var s=n[i];a[s]=e[s]}return a[t]=o,a}},a6RD:function(e,t,r){"use strict";var o=r("oI91");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){let r=i.default,o={loading:({error:e,isLoading:t,pastDelay:r})=>null};e instanceof Promise?o.loader=()=>e:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a(a({},o),e));if(o=a(a({},o),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(o.render=(t,r)=>e.render(r,t)),e.modules)){r=i.default.Map;const t={},n=e.modules();Object.keys(n).forEach(e=>{const r=n[e];"function"!==typeof r.then?t[e]=r:t[e]=()=>r.then(e=>e.default||e)}),o.loader=t}o.loadableGenerated&&(o=a(a({},o),o.loadableGenerated),delete o.loadableGenerated);if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,s(r,o);delete o.ssr}return r(o)};c(r("q1tI"));var i=c(r("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},cnnm:function(e,t,r){"use strict";var o=r("S9By"),n=r("ANjH").compose;function a(){var e=arguments[0]||{};return e.features={pause:!0,export:!0,test:!0},e.type="redux",void 0===e.autoPause&&(e.autoPause=!0),void 0===e.latency&&(e.latency=500),function(t){return function(r,n,a){var i=t(r,n,a),c=i.dispatch,s=window.__REDUX_DEVTOOLS_EXTENSION__.connect(e);s.init(i.getState());var l=function(e){var t=c(e);return s.send(e,i.getState()),t};return Object.assign?Object.assign(i,{dispatch:l}):o(i,"dispatch",l)}}}function i(e){return function(){return n(n.apply(null,arguments),a(e))}}t.__esModule=!0,t.composeWithDevTools=function(){return"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?0===arguments.length?a():"object"===typeof arguments[0]?i(arguments[0]):i().apply(null,arguments):0!==arguments.length?"object"===typeof arguments[0]?n:n.apply(null,arguments):void 0},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?a:function(){return function(e){return e}}},jwwS:function(e,t,r){"use strict";var o;t.__esModule=!0,t.LoadableContext=void 0;const n=((o=r("q1tI"))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=n},kQFM:function(e,t,r){"use strict";(function(e){var o=r("cpVT"),n=r("ANjH"),a=r("26FU"),i=r("psW0"),c=r("9Z1F"),s=r("lk2u"),l=r("moZ3"),u=r("GwQT");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const{APP_ENV:f}=Object({ALGOLIA_APPLICATION_ID:"B0ML7G848R",ALGOLIA_SEARCH_API:"8cfd7a7912d56eac7b425fb2ccf7a5d4",APP_ENV:"production",LIMITED_SITE_URL:"https://limited.saatchiart.com",SITE_URL:"https://www.saatchiart.com",STRIPE_KEY:"pk_live_xPgufS8u2WdK5IKXi7akeg97",TOAF_SITE_URL:"https://www.saatchiart.com/theotherartfair",VISII_TOKEN:"6cAH-jEr8oqKGPcs3vatGQHYEI0F1pFggoe6CnOVTZI=",EASEL_BETA:"/easel_beta"}),b="production"===f,h=t=>{const{initialState:o,rootReducer:d,rootEpic:p}=t;let h;{const t=Object(s.a)(),{shared:{disableEpics:O}}=o||{shared:{disableEpics:!1}},y=new a.a(Object(l.a)(p)),_=(t,r)=>y.pipe(Object(i.a)(e=>e(t,r))).pipe(Object(c.a)((t,r)=>(e.error({epicError:t}),r)));h=Object(n.createStore)(Object(u.a)(d),o,O?Object(n.applyMiddleware)():(e=>{try{if(!b){if("development"===f){const{composeWithDevTools:t}=r("/TnQ");return t(e)}{const{composeWithDevTools:t}=r("/CF2");return t(e)}}return e}catch(t){return e}})(Object(n.applyMiddleware)(t))),h.addEpics=e=>{Array.isArray(e)?e.forEach(e=>y.next(e)):y.next(e)},t.run(_)}return h};t.a=e=>(t={})=>h(p(p({},e),{},{initialState:t}))}).call(this,r("ziTh"))}}]);
//# sourceMappingURL=e9546bda33c4d92772bd40f626d49666ddff0023.027613d9cb91488c14ed.js.map