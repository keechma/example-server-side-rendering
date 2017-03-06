// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.connect.dev_client');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('keechma_ssr.client.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29522__delegate = function (x){
if(cljs.core.truth_(keechma_ssr.client.core.reload)){
return cljs.core.apply.call(null,keechma_ssr.client.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'keechma-ssr.client.core/reload' is missing");
}
};
var G__29522 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29523__i = 0, G__29523__a = new Array(arguments.length -  0);
while (G__29523__i < G__29523__a.length) {G__29523__a[G__29523__i] = arguments[G__29523__i + 0]; ++G__29523__i;}
  x = new cljs.core.IndexedSeq(G__29523__a,0);
} 
return G__29522__delegate.call(this,x);};
G__29522.cljs$lang$maxFixedArity = 0;
G__29522.cljs$lang$applyTo = (function (arglist__29524){
var x = cljs.core.seq(arglist__29524);
return G__29522__delegate(x);
});
G__29522.cljs$core$IFn$_invoke$arity$variadic = G__29522__delegate;
return G__29522;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev-client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3450/figwheel-ws"], null));

//# sourceMappingURL=dev_client.js.map?rel=1488783261274