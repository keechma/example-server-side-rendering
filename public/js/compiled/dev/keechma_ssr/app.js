// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('keechma_ssr.app');
goog.require('cljs.core');
goog.require('keechma_ssr.core');
goog.require('cljs.nodejs');
goog.require('mount.core');
mount.core.in_cljc_mode.call(null);
cljs.nodejs.enable_util_print_BANG_.call(null);
process.on("uncaughtException",(function (p1__44802_SHARP_){
return console.error(p1__44802_SHARP_);
}));
cljs.core._STAR_main_cli_fn_STAR_ = keechma_ssr.core.main;

//# sourceMappingURL=app.js.map?rel=1488028110590