// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.util.update_values = (function keechma$util$update_values(var_args){
var args__26349__auto__ = [];
var len__26342__auto___27349 = arguments.length;
var i__26343__auto___27350 = (0);
while(true){
if((i__26343__auto___27350 < len__26342__auto___27349)){
args__26349__auto__.push((arguments[i__26343__auto___27350]));

var G__27351 = (i__26343__auto___27350 + (1));
i__26343__auto___27350 = G__27351;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((2) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((2)),(0),null)):null);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26350__auto__);
});

keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__27345){
var vec__27346 = p__27345;
var k = cljs.core.nth.call(null,vec__27346,(0),null);
var v = cljs.core.nth.call(null,vec__27346,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

keechma.util.update_values.cljs$lang$maxFixedArity = (2);

keechma.util.update_values.cljs$lang$applyTo = (function (seq27342){
var G__27343 = cljs.core.first.call(null,seq27342);
var seq27342__$1 = cljs.core.next.call(null,seq27342);
var G__27344 = cljs.core.first.call(null,seq27342__$1);
var seq27342__$2 = cljs.core.next.call(null,seq27342__$1);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic(G__27343,G__27344,seq27342__$2);
});

/**
 * true if seq contains elm
 */
keechma.util.in_QMARK_ = (function keechma$util$in_QMARK_(seq,elm){
return cljs.core.some.call(null,(function (p1__27352_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__27352_SHARP_);
}),seq);
});
keechma.util.without = (function keechma$util$without(list,val){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (ls_val){
return cljs.core._EQ_.call(null,val,ls_val);
}),list));
});
/**
 * Return a channel which will close on the nth next animation frame.
 */
keechma.util.animation_frame = (function keechma$util$animation_frame(var_args){
var args27353 = [];
var len__26342__auto___27356 = arguments.length;
var i__26343__auto___27357 = (0);
while(true){
if((i__26343__auto___27357 < len__26342__auto___27356)){
args27353.push((arguments[i__26343__auto___27357]));

var G__27358 = (i__26343__auto___27357 + (1));
i__26343__auto___27357 = G__27358;
continue;
} else {
}
break;
}

var G__27355 = args27353.length;
switch (G__27355) {
case 0:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27353.length)].join('')));

}
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.util.animation_frame.call(null,(1));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1 = (function (n){
return keechma.util.animation_frame.call(null,n,cljs.core.async.chan.call(null,(1)));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2 = (function (n,out){
window.requestAnimationFrame((function (timestamp){
if(cljs.core._EQ_.call(null,n,(1))){
cljs.core.async.put_BANG_.call(null,out,timestamp);

return cljs.core.async.close_BANG_.call(null,out);
} else {
return keechma.util.animation_frame.call(null,(n - (1)),out);
}
}));

return out;
});

keechma.util.animation_frame.cljs$lang$maxFixedArity = 2;

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
keechma.util.dissoc_in = (function keechma$util$dissoc_in(m,p__27360){
var vec__27364 = p__27360;
var seq__27365 = cljs.core.seq.call(null,vec__27364);
var first__27366 = cljs.core.first.call(null,seq__27365);
var seq__27365__$1 = cljs.core.next.call(null,seq__27365);
var k = first__27366;
var ks = seq__27365__$1;
var keys = vec__27364;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = keechma.util.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});

//# sourceMappingURL=util.js.map?rel=1488782228046