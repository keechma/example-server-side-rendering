// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27377__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27378__i = 0, G__27378__a = new Array(arguments.length -  0);
while (G__27378__i < G__27378__a.length) {G__27378__a[G__27378__i] = arguments[G__27378__i + 0]; ++G__27378__i;}
  args = new cljs.core.IndexedSeq(G__27378__a,0);
} 
return G__27377__delegate.call(this,args);};
G__27377.cljs$lang$maxFixedArity = 0;
G__27377.cljs$lang$applyTo = (function (arglist__27379){
var args = cljs.core.seq(arglist__27379);
return G__27377__delegate(args);
});
G__27377.cljs$core$IFn$_invoke$arity$variadic = G__27377__delegate;
return G__27377;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27380__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27381__i = 0, G__27381__a = new Array(arguments.length -  0);
while (G__27381__i < G__27381__a.length) {G__27381__a[G__27381__i] = arguments[G__27381__i + 0]; ++G__27381__i;}
  args = new cljs.core.IndexedSeq(G__27381__a,0);
} 
return G__27380__delegate.call(this,args);};
G__27380.cljs$lang$maxFixedArity = 0;
G__27380.cljs$lang$applyTo = (function (arglist__27382){
var args = cljs.core.seq(arglist__27382);
return G__27380__delegate(args);
});
G__27380.cljs$core$IFn$_invoke$arity$variadic = G__27380__delegate;
return G__27380;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1488028093064