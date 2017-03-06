// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('keechma_ssr.middleware');
goog.require('cljs.core');
goog.require('macchiato.middleware.defaults');
keechma_ssr.middleware.wrap_defaults = (function keechma_ssr$middleware$wrap_defaults(handler){
return macchiato.middleware.defaults.wrap_defaults.call(null,handler,macchiato.middleware.defaults.site_defaults);
});

//# sourceMappingURL=middleware.js.map?rel=1488028098652