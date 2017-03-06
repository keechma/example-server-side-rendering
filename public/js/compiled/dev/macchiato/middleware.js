// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware');
goog.require('cljs.core');
goog.require('clojure.set');
macchiato.middleware.update_middleware_meta = (function macchiato$middleware$update_middleware_meta(handler,handler_middleware,middleware_meta){
return cljs.core.with_meta.call(null,handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("macchiato","middleware","macchiato/middleware",-1209146585),cljs.core.conj.call(null,handler_middleware,middleware_meta)], null));
});
/**
 * middleware metadata can contain the following keys
 *   :id - id of the middleware function
 *   :required - a collection of the ids of middleware functions it requires to be present
 */
macchiato.middleware.validate = (function macchiato$middleware$validate(handler_middleware,p__30951){
var map__30954 = p__30951;
var map__30954__$1 = ((((!((map__30954 == null)))?((((map__30954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30954):map__30954);
var middleware_meta = map__30954__$1;
var id = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var required = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,required),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),handler_middleware)))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is missing required middleware: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(required)].join('')));
} else {
}

return middleware_meta;
});
macchiato.middleware.middleware_from_handler = (function macchiato$middleware$middleware_from_handler(handler){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword("macchiato","middleware","macchiato/middleware",-1209146585).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,handler))));
});
macchiato.middleware.validate_handler = (function macchiato$middleware$validate_handler(handler){
var middleware = macchiato.middleware.middleware_from_handler.call(null,handler);
var G__30969_30976 = middleware;
var vec__30970_30977 = G__30969_30976;
var seq__30971_30978 = cljs.core.seq.call(null,vec__30970_30977);
var first__30972_30979 = cljs.core.first.call(null,seq__30971_30978);
var seq__30971_30980__$1 = cljs.core.next.call(null,seq__30971_30978);
var middleware_meta_30981 = first__30972_30979;
var handler_middleware_30982 = seq__30971_30980__$1;
var G__30969_30983__$1 = G__30969_30976;
while(true){
var vec__30973_30984 = G__30969_30983__$1;
var seq__30974_30985 = cljs.core.seq.call(null,vec__30973_30984);
var first__30975_30986 = cljs.core.first.call(null,seq__30974_30985);
var seq__30974_30987__$1 = cljs.core.next.call(null,seq__30974_30985);
var middleware_meta_30988__$1 = first__30975_30986;
var handler_middleware_30989__$1 = seq__30974_30987__$1;
if(cljs.core.truth_(middleware_meta_30988__$1)){
macchiato.middleware.validate.call(null,handler_middleware_30989__$1,middleware_meta_30988__$1);

var G__30990 = handler_middleware_30989__$1;
G__30969_30983__$1 = G__30990;
continue;
} else {
}
break;
}

return handler;
});
macchiato.middleware.loaded_QMARK_ = (function macchiato$middleware$loaded_QMARK_(middleware,p__30991){
var map__30994 = p__30991;
var map__30994__$1 = ((((!((map__30994 == null)))?((((map__30994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30994):map__30994);
var id = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id], true),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),middleware));
});
macchiato.middleware.wrap = (function macchiato$middleware$wrap(var_args){
var args30996 = [];
var len__26342__auto___30999 = arguments.length;
var i__26343__auto___31000 = (0);
while(true){
if((i__26343__auto___31000 < len__26342__auto___30999)){
args30996.push((arguments[i__26343__auto___31000]));

var G__31001 = (i__26343__auto___31000 + (1));
i__26343__auto___31000 = G__31001;
continue;
} else {
}
break;
}

var G__30998 = args30996.length;
switch (G__30998) {
case 2:
return macchiato.middleware.wrap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return macchiato.middleware.wrap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30996.length)].join('')));

}
});

macchiato.middleware.wrap.cljs$core$IFn$_invoke$arity$2 = (function (handler,middleware_fn){
return macchiato.middleware.wrap.call(null,handler,middleware_fn,null);
});

macchiato.middleware.wrap.cljs$core$IFn$_invoke$arity$3 = (function (handler,middleware_fn,opts){
var handler_middleware = macchiato.middleware.middleware_from_handler.call(null,handler);
var middleware_meta = cljs.core.meta.call(null,middleware_fn);
var middleware_info = (function (){var or__25229__auto__ = new cljs.core.Keyword("macchiato","middleware","macchiato/middleware",-1209146585).cljs$core$IFn$_invoke$arity$1(middleware_meta);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(middleware_meta))], null);
}
})();
if(cljs.core.truth_(macchiato.middleware.loaded_QMARK_.call(null,handler_middleware,middleware_info))){
return handler;
} else {
return macchiato.middleware.update_middleware_meta.call(null,(cljs.core.truth_(opts)?middleware_fn.call(null,handler,opts):middleware_fn.call(null,handler)),handler_middleware,middleware_info);
}
});

macchiato.middleware.wrap.cljs$lang$maxFixedArity = 3;

macchiato.middleware.middleware_id = (function macchiato$middleware$middleware_id(middleware){
return new cljs.core.Keyword("macchiato","middleware","macchiato/middleware",-1209146585).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,((cljs.core.coll_QMARK_.call(null,middleware))?cljs.core.first.call(null,middleware):middleware)));
});
macchiato.middleware.check_conflicting_middleware = (function macchiato$middleware$check_conflicting_middleware(handler_middleware,middleware){
var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__31003_SHARP_){
return macchiato.middleware.loaded_QMARK_.call(null,handler_middleware,macchiato.middleware.middleware_id.call(null,p1__31003_SHARP_));
}),middleware));
if(cljs.core.truth_(temp__4657__auto__)){
var conflicting_middleware = temp__4657__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("following middleware has already been wrapped:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,((function (conflicting_middleware,temp__4657__auto__){
return (function (p1__31004_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(macchiato.middleware.middleware_id.call(null,p1__31004_SHARP_));
});})(conflicting_middleware,temp__4657__auto__))
,conflicting_middleware))].join('')));
} else {
return null;
}
});
macchiato.middleware.wrap_middleware = (function macchiato$middleware$wrap_middleware(var_args){
var args__26349__auto__ = [];
var len__26342__auto___31010 = arguments.length;
var i__26343__auto___31011 = (0);
while(true){
if((i__26343__auto___31011 < len__26342__auto___31010)){
args__26349__auto__.push((arguments[i__26343__auto___31011]));

var G__31012 = (i__26343__auto___31011 + (1));
i__26343__auto___31011 = G__31012;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((1) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((1)),(0),null)):null);
return macchiato.middleware.wrap_middleware.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26350__auto__);
});

macchiato.middleware.wrap_middleware.cljs$core$IFn$_invoke$arity$variadic = (function (handler,middleware){
macchiato.middleware.check_conflicting_middleware.call(null,macchiato.middleware.middleware_from_handler.call(null,handler),middleware);

return macchiato.middleware.validate_handler.call(null,cljs.core.reduce.call(null,(function (handler__$1,middleware_fn){
var vec__31007 = ((cljs.core.coll_QMARK_.call(null,middleware_fn))?middleware_fn:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware_fn], null));
var middleware_fn__$1 = cljs.core.nth.call(null,vec__31007,(0),null);
var opts = cljs.core.nth.call(null,vec__31007,(1),null);
return macchiato.middleware.wrap.call(null,handler__$1,middleware_fn__$1,opts);
}),handler,middleware));
});

macchiato.middleware.wrap_middleware.cljs$lang$maxFixedArity = (1);

macchiato.middleware.wrap_middleware.cljs$lang$applyTo = (function (seq31005){
var G__31006 = cljs.core.first.call(null,seq31005);
var seq31005__$1 = cljs.core.next.call(null,seq31005);
return macchiato.middleware.wrap_middleware.cljs$core$IFn$_invoke$arity$variadic(G__31006,seq31005__$1);
});


//# sourceMappingURL=middleware.js.map?rel=1488028098453