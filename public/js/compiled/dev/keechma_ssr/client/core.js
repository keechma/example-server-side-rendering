// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma_ssr.client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keechma.ui_component');
goog.require('keechma.controller');
goog.require('keechma.app_state');
goog.require('keechma_ssr.client.app');
if(typeof keechma_ssr.client.core.debug_QMARK_ !== 'undefined'){
} else {
keechma_ssr.client.core.debug_QMARK_ = goog.DEBUG;
}
keechma_ssr.client.core.app_definition = cljs.core.assoc.call(null,keechma_ssr.client.app.definition,new cljs.core.Keyword(null,"html-element","html-element",1188696850),document.getElementById("app"));
if(typeof keechma_ssr.client.core.running_app !== 'undefined'){
} else {
keechma_ssr.client.core.running_app = cljs.core.atom.call(null);
}
keechma_ssr.client.core.start_app_BANG_ = (function keechma_ssr$client$core$start_app_BANG_(){
return cljs.core.reset_BANG_.call(null,keechma_ssr.client.core.running_app,keechma.app_state.start_BANG_.call(null,cljs.core.assoc.call(null,keechma_ssr.client.core.app_definition,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),keechma.app_state.deserialize_app_state.call(null,cljs.core.PersistentArrayMap.EMPTY,window.STATE))));
});
keechma_ssr.client.core.dev_setup = (function keechma_ssr$client$core$dev_setup(){
if(cljs.core.truth_(keechma_ssr.client.core.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
keechma_ssr.client.core.reload = (function keechma_ssr$client$core$reload(){
var current = cljs.core.deref.call(null,keechma_ssr.client.core.running_app);
if(cljs.core.truth_(current)){
return keechma.app_state.stop_BANG_.call(null,current,keechma_ssr.client.core.start_app_BANG_);
} else {
return keechma_ssr.client.core.start_app_BANG_.call(null);
}
});
keechma_ssr.client.core.main = (function keechma_ssr$client$core$main(){
keechma_ssr.client.core.dev_setup.call(null);

return keechma_ssr.client.core.start_app_BANG_.call(null);
});
goog.exportSymbol('keechma_ssr.client.core.main', keechma_ssr.client.core.main);

//# sourceMappingURL=core.js.map?rel=1488783261258