// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('keechma_ssr.client.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44797__delegate = function (x){
if(cljs.core.truth_(keechma_ssr.client.core.reload)){
return cljs.core.apply.call(null,keechma_ssr.client.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'keechma-ssr.client.core/reload' is missing");
}
};
var G__44797 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44798__i = 0, G__44798__a = new Array(arguments.length -  0);
while (G__44798__i < G__44798__a.length) {G__44798__a[G__44798__i] = arguments[G__44798__i + 0]; ++G__44798__i;}
  x = new cljs.core.IndexedSeq(G__44798__a,0);
} 
return G__44797__delegate.call(this,x);};
G__44797.cljs$lang$maxFixedArity = 0;
G__44797.cljs$lang$applyTo = (function (arglist__44799){
var x = cljs.core.seq(arglist__44799);
return G__44797__delegate(x);
});
G__44797.cljs$core$IFn$_invoke$arity$variadic = G__44797__delegate;
return G__44797;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3450/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1488028110582