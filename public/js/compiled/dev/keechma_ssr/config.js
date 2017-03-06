// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('keechma_ssr.config');
goog.require('cljs.core');
goog.require('macchiato.env');
goog.require('mount.core');
if(typeof keechma_ssr.config.env !== 'undefined'){
} else {
keechma_ssr.config.env = (new mount.core.DerefableState("#'keechma-ssr.config/env"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return keechma_ssr.config.env;},new cljs.core.Symbol("keechma-ssr.config","env","keechma-ssr.config/env",-518875059,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"keechma-ssr.config","keechma-ssr.config",377016393,null),new cljs.core.Symbol(null,"env","env",-175281708,null),"/Users/retro/Projects/keechma-ssr/src/keechma_ssr/config.cljs",14,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(keechma_ssr.config.env)?keechma_ssr.config.env.cljs$lang$test:null)])),"#'keechma-ssr.config/env",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"order","order",-1254677256),(1),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return macchiato.env.env.call(null);
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null)], null));

new cljs.core.Var(function(){return keechma_ssr.config.env;},new cljs.core.Symbol("keechma-ssr.config","env","keechma-ssr.config/env",-518875059,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"keechma-ssr.config","keechma-ssr.config",377016393,null),new cljs.core.Symbol(null,"env","env",-175281708,null),"/Users/retro/Projects/keechma-ssr/src/keechma_ssr/config.cljs",14,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(keechma_ssr.config.env)?keechma_ssr.config.env.cljs$lang$test:null)]));

//# sourceMappingURL=config.js.map?rel=1488028096591