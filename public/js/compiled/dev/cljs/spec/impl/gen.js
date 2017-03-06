// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26447 = arguments.length;
var i__26343__auto___26448 = (0);
while(true){
if((i__26343__auto___26448 < len__26342__auto___26447)){
args__26349__auto__.push((arguments[i__26343__auto___26448]));

var G__26449 = (i__26343__auto___26448 + (1));
i__26343__auto___26448 = G__26449;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26446){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26446));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26451 = arguments.length;
var i__26343__auto___26452 = (0);
while(true){
if((i__26343__auto___26452 < len__26342__auto___26451)){
args__26349__auto__.push((arguments[i__26343__auto___26452]));

var G__26453 = (i__26343__auto___26452 + (1));
i__26343__auto___26452 = G__26453;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26450){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26450));
});

var g_QMARK__26454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_26455 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26454){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__26454))
,null));
var mkg_26456 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26454,g_26455){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__26454,g_26455))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26454,g_26455,mkg_26456){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26454).call(null,x);
});})(g_QMARK__26454,g_26455,mkg_26456))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26454,g_26455,mkg_26456){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26456).call(null,gfn);
});})(g_QMARK__26454,g_26455,mkg_26456))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26454,g_26455,mkg_26456){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26455).call(null,generator);
});})(g_QMARK__26454,g_26455,mkg_26456))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26418__auto___26476 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26418__auto___26476){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26477 = arguments.length;
var i__26343__auto___26478 = (0);
while(true){
if((i__26343__auto___26478 < len__26342__auto___26477)){
args__26349__auto__.push((arguments[i__26343__auto___26478]));

var G__26479 = (i__26343__auto___26478 + (1));
i__26343__auto___26478 = G__26479;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26476))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26476){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26476),args);
});})(g__26418__auto___26476))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26418__auto___26476){
return (function (seq26457){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26457));
});})(g__26418__auto___26476))
;


var g__26418__auto___26480 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26418__auto___26480){
return (function cljs$spec$impl$gen$list(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26481 = arguments.length;
var i__26343__auto___26482 = (0);
while(true){
if((i__26343__auto___26482 < len__26342__auto___26481)){
args__26349__auto__.push((arguments[i__26343__auto___26482]));

var G__26483 = (i__26343__auto___26482 + (1));
i__26343__auto___26482 = G__26483;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26480))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26480){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26480),args);
});})(g__26418__auto___26480))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26418__auto___26480){
return (function (seq26458){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26458));
});})(g__26418__auto___26480))
;


var g__26418__auto___26484 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26418__auto___26484){
return (function cljs$spec$impl$gen$map(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26485 = arguments.length;
var i__26343__auto___26486 = (0);
while(true){
if((i__26343__auto___26486 < len__26342__auto___26485)){
args__26349__auto__.push((arguments[i__26343__auto___26486]));

var G__26487 = (i__26343__auto___26486 + (1));
i__26343__auto___26486 = G__26487;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26484))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26484){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26484),args);
});})(g__26418__auto___26484))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26418__auto___26484){
return (function (seq26459){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26459));
});})(g__26418__auto___26484))
;


var g__26418__auto___26488 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26418__auto___26488){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26489 = arguments.length;
var i__26343__auto___26490 = (0);
while(true){
if((i__26343__auto___26490 < len__26342__auto___26489)){
args__26349__auto__.push((arguments[i__26343__auto___26490]));

var G__26491 = (i__26343__auto___26490 + (1));
i__26343__auto___26490 = G__26491;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26488))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26488){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26488),args);
});})(g__26418__auto___26488))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26418__auto___26488){
return (function (seq26460){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26460));
});})(g__26418__auto___26488))
;


var g__26418__auto___26492 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26418__auto___26492){
return (function cljs$spec$impl$gen$set(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26493 = arguments.length;
var i__26343__auto___26494 = (0);
while(true){
if((i__26343__auto___26494 < len__26342__auto___26493)){
args__26349__auto__.push((arguments[i__26343__auto___26494]));

var G__26495 = (i__26343__auto___26494 + (1));
i__26343__auto___26494 = G__26495;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26492))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26492){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26492),args);
});})(g__26418__auto___26492))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26418__auto___26492){
return (function (seq26461){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26461));
});})(g__26418__auto___26492))
;


var g__26418__auto___26496 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26418__auto___26496){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26497 = arguments.length;
var i__26343__auto___26498 = (0);
while(true){
if((i__26343__auto___26498 < len__26342__auto___26497)){
args__26349__auto__.push((arguments[i__26343__auto___26498]));

var G__26499 = (i__26343__auto___26498 + (1));
i__26343__auto___26498 = G__26499;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26496))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26496){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26496),args);
});})(g__26418__auto___26496))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26418__auto___26496){
return (function (seq26462){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26462));
});})(g__26418__auto___26496))
;


var g__26418__auto___26500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26418__auto___26500){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26501 = arguments.length;
var i__26343__auto___26502 = (0);
while(true){
if((i__26343__auto___26502 < len__26342__auto___26501)){
args__26349__auto__.push((arguments[i__26343__auto___26502]));

var G__26503 = (i__26343__auto___26502 + (1));
i__26343__auto___26502 = G__26503;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26500))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26500){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26500),args);
});})(g__26418__auto___26500))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26418__auto___26500){
return (function (seq26463){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26463));
});})(g__26418__auto___26500))
;


var g__26418__auto___26504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26418__auto___26504){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26505 = arguments.length;
var i__26343__auto___26506 = (0);
while(true){
if((i__26343__auto___26506 < len__26342__auto___26505)){
args__26349__auto__.push((arguments[i__26343__auto___26506]));

var G__26507 = (i__26343__auto___26506 + (1));
i__26343__auto___26506 = G__26507;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26504))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26504),args);
});})(g__26418__auto___26504))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26418__auto___26504){
return (function (seq26464){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26464));
});})(g__26418__auto___26504))
;


var g__26418__auto___26508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26418__auto___26508){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26509 = arguments.length;
var i__26343__auto___26510 = (0);
while(true){
if((i__26343__auto___26510 < len__26342__auto___26509)){
args__26349__auto__.push((arguments[i__26343__auto___26510]));

var G__26511 = (i__26343__auto___26510 + (1));
i__26343__auto___26510 = G__26511;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26508))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26508),args);
});})(g__26418__auto___26508))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26418__auto___26508){
return (function (seq26465){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26465));
});})(g__26418__auto___26508))
;


var g__26418__auto___26512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26418__auto___26512){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26513 = arguments.length;
var i__26343__auto___26514 = (0);
while(true){
if((i__26343__auto___26514 < len__26342__auto___26513)){
args__26349__auto__.push((arguments[i__26343__auto___26514]));

var G__26515 = (i__26343__auto___26514 + (1));
i__26343__auto___26514 = G__26515;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26512))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26512),args);
});})(g__26418__auto___26512))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26418__auto___26512){
return (function (seq26466){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26466));
});})(g__26418__auto___26512))
;


var g__26418__auto___26516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26418__auto___26516){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26517 = arguments.length;
var i__26343__auto___26518 = (0);
while(true){
if((i__26343__auto___26518 < len__26342__auto___26517)){
args__26349__auto__.push((arguments[i__26343__auto___26518]));

var G__26519 = (i__26343__auto___26518 + (1));
i__26343__auto___26518 = G__26519;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26516))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26516),args);
});})(g__26418__auto___26516))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26418__auto___26516){
return (function (seq26467){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26467));
});})(g__26418__auto___26516))
;


var g__26418__auto___26520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26418__auto___26520){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26521 = arguments.length;
var i__26343__auto___26522 = (0);
while(true){
if((i__26343__auto___26522 < len__26342__auto___26521)){
args__26349__auto__.push((arguments[i__26343__auto___26522]));

var G__26523 = (i__26343__auto___26522 + (1));
i__26343__auto___26522 = G__26523;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26520))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26520),args);
});})(g__26418__auto___26520))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26418__auto___26520){
return (function (seq26468){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26468));
});})(g__26418__auto___26520))
;


var g__26418__auto___26524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26418__auto___26524){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26525 = arguments.length;
var i__26343__auto___26526 = (0);
while(true){
if((i__26343__auto___26526 < len__26342__auto___26525)){
args__26349__auto__.push((arguments[i__26343__auto___26526]));

var G__26527 = (i__26343__auto___26526 + (1));
i__26343__auto___26526 = G__26527;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26524))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26524),args);
});})(g__26418__auto___26524))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26418__auto___26524){
return (function (seq26469){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26469));
});})(g__26418__auto___26524))
;


var g__26418__auto___26528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26418__auto___26528){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26529 = arguments.length;
var i__26343__auto___26530 = (0);
while(true){
if((i__26343__auto___26530 < len__26342__auto___26529)){
args__26349__auto__.push((arguments[i__26343__auto___26530]));

var G__26531 = (i__26343__auto___26530 + (1));
i__26343__auto___26530 = G__26531;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26528))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26528),args);
});})(g__26418__auto___26528))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26418__auto___26528){
return (function (seq26470){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26470));
});})(g__26418__auto___26528))
;


var g__26418__auto___26532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26418__auto___26532){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26533 = arguments.length;
var i__26343__auto___26534 = (0);
while(true){
if((i__26343__auto___26534 < len__26342__auto___26533)){
args__26349__auto__.push((arguments[i__26343__auto___26534]));

var G__26535 = (i__26343__auto___26534 + (1));
i__26343__auto___26534 = G__26535;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26532))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26532),args);
});})(g__26418__auto___26532))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26418__auto___26532){
return (function (seq26471){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26471));
});})(g__26418__auto___26532))
;


var g__26418__auto___26536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26418__auto___26536){
return (function cljs$spec$impl$gen$return(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26537 = arguments.length;
var i__26343__auto___26538 = (0);
while(true){
if((i__26343__auto___26538 < len__26342__auto___26537)){
args__26349__auto__.push((arguments[i__26343__auto___26538]));

var G__26539 = (i__26343__auto___26538 + (1));
i__26343__auto___26538 = G__26539;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26536))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26536),args);
});})(g__26418__auto___26536))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26418__auto___26536){
return (function (seq26472){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26472));
});})(g__26418__auto___26536))
;


var g__26418__auto___26540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26418__auto___26540){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26541 = arguments.length;
var i__26343__auto___26542 = (0);
while(true){
if((i__26343__auto___26542 < len__26342__auto___26541)){
args__26349__auto__.push((arguments[i__26343__auto___26542]));

var G__26543 = (i__26343__auto___26542 + (1));
i__26343__auto___26542 = G__26543;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26540))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26540),args);
});})(g__26418__auto___26540))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26418__auto___26540){
return (function (seq26473){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26473));
});})(g__26418__auto___26540))
;


var g__26418__auto___26544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26418__auto___26544){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26545 = arguments.length;
var i__26343__auto___26546 = (0);
while(true){
if((i__26343__auto___26546 < len__26342__auto___26545)){
args__26349__auto__.push((arguments[i__26343__auto___26546]));

var G__26547 = (i__26343__auto___26546 + (1));
i__26343__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26544))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26544),args);
});})(g__26418__auto___26544))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26418__auto___26544){
return (function (seq26474){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26474));
});})(g__26418__auto___26544))
;


var g__26418__auto___26548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__26418__auto___26548){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26549 = arguments.length;
var i__26343__auto___26550 = (0);
while(true){
if((i__26343__auto___26550 < len__26342__auto___26549)){
args__26349__auto__.push((arguments[i__26343__auto___26550]));

var G__26551 = (i__26343__auto___26550 + (1));
i__26343__auto___26550 = G__26551;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26418__auto___26548))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26418__auto___26548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26418__auto___26548),args);
});})(g__26418__auto___26548))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__26418__auto___26548){
return (function (seq26475){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26475));
});})(g__26418__auto___26548))
;

var g__26431__auto___26573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__26431__auto___26573){
return (function cljs$spec$impl$gen$any(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26574 = arguments.length;
var i__26343__auto___26575 = (0);
while(true){
if((i__26343__auto___26575 < len__26342__auto___26574)){
args__26349__auto__.push((arguments[i__26343__auto___26575]));

var G__26576 = (i__26343__auto___26575 + (1));
i__26343__auto___26575 = G__26576;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26573))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26573){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26573);
});})(g__26431__auto___26573))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__26431__auto___26573){
return (function (seq26552){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26552));
});})(g__26431__auto___26573))
;


var g__26431__auto___26577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__26431__auto___26577){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26578 = arguments.length;
var i__26343__auto___26579 = (0);
while(true){
if((i__26343__auto___26579 < len__26342__auto___26578)){
args__26349__auto__.push((arguments[i__26343__auto___26579]));

var G__26580 = (i__26343__auto___26579 + (1));
i__26343__auto___26579 = G__26580;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26577))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26577){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26577);
});})(g__26431__auto___26577))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__26431__auto___26577){
return (function (seq26553){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26553));
});})(g__26431__auto___26577))
;


var g__26431__auto___26581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__26431__auto___26581){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26582 = arguments.length;
var i__26343__auto___26583 = (0);
while(true){
if((i__26343__auto___26583 < len__26342__auto___26582)){
args__26349__auto__.push((arguments[i__26343__auto___26583]));

var G__26584 = (i__26343__auto___26583 + (1));
i__26343__auto___26583 = G__26584;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26581))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26581){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26581);
});})(g__26431__auto___26581))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__26431__auto___26581){
return (function (seq26554){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26554));
});})(g__26431__auto___26581))
;


var g__26431__auto___26585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__26431__auto___26585){
return (function cljs$spec$impl$gen$char(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26586 = arguments.length;
var i__26343__auto___26587 = (0);
while(true){
if((i__26343__auto___26587 < len__26342__auto___26586)){
args__26349__auto__.push((arguments[i__26343__auto___26587]));

var G__26588 = (i__26343__auto___26587 + (1));
i__26343__auto___26587 = G__26588;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26585))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26585){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26585);
});})(g__26431__auto___26585))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__26431__auto___26585){
return (function (seq26555){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26555));
});})(g__26431__auto___26585))
;


var g__26431__auto___26589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__26431__auto___26589){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26590 = arguments.length;
var i__26343__auto___26591 = (0);
while(true){
if((i__26343__auto___26591 < len__26342__auto___26590)){
args__26349__auto__.push((arguments[i__26343__auto___26591]));

var G__26592 = (i__26343__auto___26591 + (1));
i__26343__auto___26591 = G__26592;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26589))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26589){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26589);
});})(g__26431__auto___26589))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__26431__auto___26589){
return (function (seq26556){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26556));
});})(g__26431__auto___26589))
;


var g__26431__auto___26593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__26431__auto___26593){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26594 = arguments.length;
var i__26343__auto___26595 = (0);
while(true){
if((i__26343__auto___26595 < len__26342__auto___26594)){
args__26349__auto__.push((arguments[i__26343__auto___26595]));

var G__26596 = (i__26343__auto___26595 + (1));
i__26343__auto___26595 = G__26596;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26593))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26593){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26593);
});})(g__26431__auto___26593))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__26431__auto___26593){
return (function (seq26557){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26557));
});})(g__26431__auto___26593))
;


var g__26431__auto___26597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__26431__auto___26597){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26598 = arguments.length;
var i__26343__auto___26599 = (0);
while(true){
if((i__26343__auto___26599 < len__26342__auto___26598)){
args__26349__auto__.push((arguments[i__26343__auto___26599]));

var G__26600 = (i__26343__auto___26599 + (1));
i__26343__auto___26599 = G__26600;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26597))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26597){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26597);
});})(g__26431__auto___26597))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__26431__auto___26597){
return (function (seq26558){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26558));
});})(g__26431__auto___26597))
;


var g__26431__auto___26601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__26431__auto___26601){
return (function cljs$spec$impl$gen$double(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26602 = arguments.length;
var i__26343__auto___26603 = (0);
while(true){
if((i__26343__auto___26603 < len__26342__auto___26602)){
args__26349__auto__.push((arguments[i__26343__auto___26603]));

var G__26604 = (i__26343__auto___26603 + (1));
i__26343__auto___26603 = G__26604;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26601))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26601){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26601);
});})(g__26431__auto___26601))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__26431__auto___26601){
return (function (seq26559){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26559));
});})(g__26431__auto___26601))
;


var g__26431__auto___26605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__26431__auto___26605){
return (function cljs$spec$impl$gen$int(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26606 = arguments.length;
var i__26343__auto___26607 = (0);
while(true){
if((i__26343__auto___26607 < len__26342__auto___26606)){
args__26349__auto__.push((arguments[i__26343__auto___26607]));

var G__26608 = (i__26343__auto___26607 + (1));
i__26343__auto___26607 = G__26608;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26605))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26605){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26605);
});})(g__26431__auto___26605))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__26431__auto___26605){
return (function (seq26560){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26560));
});})(g__26431__auto___26605))
;


var g__26431__auto___26609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__26431__auto___26609){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26610 = arguments.length;
var i__26343__auto___26611 = (0);
while(true){
if((i__26343__auto___26611 < len__26342__auto___26610)){
args__26349__auto__.push((arguments[i__26343__auto___26611]));

var G__26612 = (i__26343__auto___26611 + (1));
i__26343__auto___26611 = G__26612;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26609))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26609){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26609);
});})(g__26431__auto___26609))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__26431__auto___26609){
return (function (seq26561){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26561));
});})(g__26431__auto___26609))
;


var g__26431__auto___26613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__26431__auto___26613){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26614 = arguments.length;
var i__26343__auto___26615 = (0);
while(true){
if((i__26343__auto___26615 < len__26342__auto___26614)){
args__26349__auto__.push((arguments[i__26343__auto___26615]));

var G__26616 = (i__26343__auto___26615 + (1));
i__26343__auto___26615 = G__26616;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26613))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26613){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26613);
});})(g__26431__auto___26613))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__26431__auto___26613){
return (function (seq26562){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26562));
});})(g__26431__auto___26613))
;


var g__26431__auto___26617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__26431__auto___26617){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26618 = arguments.length;
var i__26343__auto___26619 = (0);
while(true){
if((i__26343__auto___26619 < len__26342__auto___26618)){
args__26349__auto__.push((arguments[i__26343__auto___26619]));

var G__26620 = (i__26343__auto___26619 + (1));
i__26343__auto___26619 = G__26620;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26617))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26617){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26617);
});})(g__26431__auto___26617))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__26431__auto___26617){
return (function (seq26563){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26563));
});})(g__26431__auto___26617))
;


var g__26431__auto___26621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__26431__auto___26621){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26622 = arguments.length;
var i__26343__auto___26623 = (0);
while(true){
if((i__26343__auto___26623 < len__26342__auto___26622)){
args__26349__auto__.push((arguments[i__26343__auto___26623]));

var G__26624 = (i__26343__auto___26623 + (1));
i__26343__auto___26623 = G__26624;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26621))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26621){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26621);
});})(g__26431__auto___26621))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__26431__auto___26621){
return (function (seq26564){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26564));
});})(g__26431__auto___26621))
;


var g__26431__auto___26625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__26431__auto___26625){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26626 = arguments.length;
var i__26343__auto___26627 = (0);
while(true){
if((i__26343__auto___26627 < len__26342__auto___26626)){
args__26349__auto__.push((arguments[i__26343__auto___26627]));

var G__26628 = (i__26343__auto___26627 + (1));
i__26343__auto___26627 = G__26628;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26625))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26625){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26625);
});})(g__26431__auto___26625))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__26431__auto___26625){
return (function (seq26565){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26565));
});})(g__26431__auto___26625))
;


var g__26431__auto___26629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__26431__auto___26629){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26630 = arguments.length;
var i__26343__auto___26631 = (0);
while(true){
if((i__26343__auto___26631 < len__26342__auto___26630)){
args__26349__auto__.push((arguments[i__26343__auto___26631]));

var G__26632 = (i__26343__auto___26631 + (1));
i__26343__auto___26631 = G__26632;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26629))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26629){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26629);
});})(g__26431__auto___26629))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__26431__auto___26629){
return (function (seq26566){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26566));
});})(g__26431__auto___26629))
;


var g__26431__auto___26633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__26431__auto___26633){
return (function cljs$spec$impl$gen$string(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26634 = arguments.length;
var i__26343__auto___26635 = (0);
while(true){
if((i__26343__auto___26635 < len__26342__auto___26634)){
args__26349__auto__.push((arguments[i__26343__auto___26635]));

var G__26636 = (i__26343__auto___26635 + (1));
i__26343__auto___26635 = G__26636;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26633))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26633){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26633);
});})(g__26431__auto___26633))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__26431__auto___26633){
return (function (seq26567){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26567));
});})(g__26431__auto___26633))
;


var g__26431__auto___26637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__26431__auto___26637){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26638 = arguments.length;
var i__26343__auto___26639 = (0);
while(true){
if((i__26343__auto___26639 < len__26342__auto___26638)){
args__26349__auto__.push((arguments[i__26343__auto___26639]));

var G__26640 = (i__26343__auto___26639 + (1));
i__26343__auto___26639 = G__26640;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26637))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26637){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26637);
});})(g__26431__auto___26637))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__26431__auto___26637){
return (function (seq26568){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26568));
});})(g__26431__auto___26637))
;


var g__26431__auto___26641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__26431__auto___26641){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26642 = arguments.length;
var i__26343__auto___26643 = (0);
while(true){
if((i__26343__auto___26643 < len__26342__auto___26642)){
args__26349__auto__.push((arguments[i__26343__auto___26643]));

var G__26644 = (i__26343__auto___26643 + (1));
i__26343__auto___26643 = G__26644;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26641))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26641){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26641);
});})(g__26431__auto___26641))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__26431__auto___26641){
return (function (seq26569){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26569));
});})(g__26431__auto___26641))
;


var g__26431__auto___26645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__26431__auto___26645){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26646 = arguments.length;
var i__26343__auto___26647 = (0);
while(true){
if((i__26343__auto___26647 < len__26342__auto___26646)){
args__26349__auto__.push((arguments[i__26343__auto___26647]));

var G__26648 = (i__26343__auto___26647 + (1));
i__26343__auto___26647 = G__26648;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26645))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26645){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26645);
});})(g__26431__auto___26645))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__26431__auto___26645){
return (function (seq26570){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26570));
});})(g__26431__auto___26645))
;


var g__26431__auto___26649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__26431__auto___26649){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26650 = arguments.length;
var i__26343__auto___26651 = (0);
while(true){
if((i__26343__auto___26651 < len__26342__auto___26650)){
args__26349__auto__.push((arguments[i__26343__auto___26651]));

var G__26652 = (i__26343__auto___26651 + (1));
i__26343__auto___26651 = G__26652;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26649))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26649){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26649);
});})(g__26431__auto___26649))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__26431__auto___26649){
return (function (seq26571){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26571));
});})(g__26431__auto___26649))
;


var g__26431__auto___26653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__26431__auto___26653){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26654 = arguments.length;
var i__26343__auto___26655 = (0);
while(true){
if((i__26343__auto___26655 < len__26342__auto___26654)){
args__26349__auto__.push((arguments[i__26343__auto___26655]));

var G__26656 = (i__26343__auto___26655 + (1));
i__26343__auto___26655 = G__26656;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});})(g__26431__auto___26653))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26431__auto___26653){
return (function (args){
return cljs.core.deref.call(null,g__26431__auto___26653);
});})(g__26431__auto___26653))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__26431__auto___26653){
return (function (seq26572){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26572));
});})(g__26431__auto___26653))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26349__auto__ = [];
var len__26342__auto___26659 = arguments.length;
var i__26343__auto___26660 = (0);
while(true){
if((i__26343__auto___26660 < len__26342__auto___26659)){
args__26349__auto__.push((arguments[i__26343__auto___26660]));

var G__26661 = (i__26343__auto___26660 + (1));
i__26343__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26657_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26657_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26658){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26658));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26662_SHARP_){
return (new Date(p1__26662_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1488028153844