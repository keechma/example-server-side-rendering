goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44805__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44806__i = 0, G__44806__a = new Array(arguments.length -  0);
while (G__44806__i < G__44806__a.length) {G__44806__a[G__44806__i] = arguments[G__44806__i + 0]; ++G__44806__i;}
  args = new cljs.core.IndexedSeq(G__44806__a,0);
} 
return G__44805__delegate.call(this,args);};
G__44805.cljs$lang$maxFixedArity = 0;
G__44805.cljs$lang$applyTo = (function (arglist__44807){
var args = cljs.core.seq(arglist__44807);
return G__44805__delegate(args);
});
G__44805.cljs$core$IFn$_invoke$arity$variadic = G__44805__delegate;
return G__44805;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44808__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44809__i = 0, G__44809__a = new Array(arguments.length -  0);
while (G__44809__i < G__44809__a.length) {G__44809__a[G__44809__i] = arguments[G__44809__i + 0]; ++G__44809__i;}
  args = new cljs.core.IndexedSeq(G__44809__a,0);
} 
return G__44808__delegate.call(this,args);};
G__44808.cljs$lang$maxFixedArity = 0;
G__44808.cljs$lang$applyTo = (function (arglist__44810){
var args = cljs.core.seq(arglist__44810);
return G__44808__delegate(args);
});
G__44808.cljs$core$IFn$_invoke$arity$variadic = G__44808__delegate;
return G__44808;
})()
;

return null;
});
