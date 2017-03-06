// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.app_state.react_native_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
keechma.app_state.react_native_router.initial_route = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"init","init",-1875481434)], null)], null)], null);
if(typeof keechma.app_state.react_native_router.route_atom !== 'undefined'){
} else {
keechma.app_state.react_native_router.route_atom = reagent.core.atom.call(null,keechma.app_state.react_native_router.initial_route);
}
keechma.app_state.react_native_router.update_navigation_key = (function keechma$app_state$react_native_router$update_navigation_key(route){
return cljs.core.assoc.call(null,route,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});
keechma.app_state.react_native_router.push_route = (function keechma$app_state$react_native_router$push_route(route,value){
return keechma.app_state.react_native_router.update_navigation_key.call(null,cljs.core.update.call(null,cljs.core.update.call(null,route,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc),new cljs.core.Keyword(null,"routes","routes",457900162),(function (p1__28559_SHARP_){
return cljs.core.conj.call(null,p1__28559_SHARP_,value);
})));
});
keechma.app_state.react_native_router.pop_route = (function keechma$app_state$react_native_router$pop_route(route,_){
if(((1) < cljs.core.count.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(route)))){
return keechma.app_state.react_native_router.update_navigation_key.call(null,cljs.core.update.call(null,cljs.core.update.call(null,route,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dec),new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.pop));
} else {
return route;
}
});
keechma.app_state.react_native_router.home_route = (function keechma$app_state$react_native_router$home_route(route,_){
return keechma.app_state.react_native_router.initial_route;
});
keechma.app_state.react_native_router.navigate_BANG_ = (function keechma$app_state$react_native_router$navigate_BANG_(var_args){
var args28560 = [];
var len__26342__auto___28563 = arguments.length;
var i__26343__auto___28564 = (0);
while(true){
if((i__26343__auto___28564 < len__26342__auto___28563)){
args28560.push((arguments[i__26343__auto___28564]));

var G__28565 = (i__26343__auto___28564 + (1));
i__26343__auto___28564 = G__28565;
continue;
} else {
}
break;
}

var G__28562 = args28560.length;
switch (G__28562) {
case 1:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28560.length)].join('')));

}
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (action){
return keechma.app_state.react_native_router.navigate_BANG_.call(null,action,null);
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (action,payload){
var action_fn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),keechma.app_state.react_native_router.push_route,new cljs.core.Keyword(null,"pop","pop",-1734778776),keechma.app_state.react_native_router.pop_route,new cljs.core.Keyword(null,"home","home",-74557309),keechma.app_state.react_native_router.home_route], null),action);
return cljs.core.reset_BANG_.call(null,keechma.app_state.react_native_router.route_atom,action_fn.call(null,cljs.core.deref.call(null,keechma.app_state.react_native_router.route_atom),payload));
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {keechma.app_state.core.IRouter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.react_native_router.ReactNativeRouter = (function (routes_chan,watch_id,app_db,__meta,__extmap,__hash){
this.routes_chan = routes_chan;
this.watch_id = watch_id;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k28568,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__28570 = (((k28568 instanceof cljs.core.Keyword))?k28568.fqn:null);
switch (G__28570) {
case "routes-chan":
return self__.routes_chan;

break;
case "watch-id":
return self__.watch_id;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28568,else__25859__auto__);

}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma.app-state.react-native-router.ReactNativeRouter{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),self__.watch_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28567){
var self__ = this;
var G__28567__$1 = this;
return (new cljs.core.RecordIter((0),G__28567__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var routes_chan__$1 = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(this$__$1);
var watch_id__$1 = new cljs.core.Keyword(null,"watch-id","watch-id",1539926919).cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.add_watch.call(null,keechma.app_state.react_native_router.route_atom,watch_id__$1,((function (routes_chan__$1,watch_id__$1,this$__$1){
return (function (_,___$1,___$2,route_data){
return cljs.core.async.put_BANG_.call(null,routes_chan__$1,route_data);
});})(routes_chan__$1,watch_id__$1,this$__$1))
);

cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),cljs.core.deref.call(null,keechma.app_state.react_native_router.route_atom));

return this$__$1;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.remove_watch.call(null,keechma.app_state.react_native_router.route_atom,new cljs.core.Keyword(null,"watch-id","watch-id",1539926919).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.react_native_router.navigate_BANG_.call(null,new cljs.core.Keyword(null,"push","push",799791267),params);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
var self__ = this;
var this__25851__auto____$1 = this;
var h__25669__auto__ = self__.__hash;
if(!((h__25669__auto__ == null))){
return h__25669__auto__;
} else {
var h__25669__auto____$1 = cljs.core.hash_imap.call(null,this__25851__auto____$1);
self__.__hash = h__25669__auto____$1;

return h__25669__auto____$1;
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
var self__ = this;
var this__25852__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25217__auto__ = other__25853__auto__;
if(cljs.core.truth_(and__25217__auto__)){
return ((this__25852__auto____$1.constructor === other__25853__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__25852__auto____$1,other__25853__auto__));
} else {
return and__25217__auto__;
}
})())){
return true;
} else {
return false;
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__28567){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__28571 = cljs.core.keyword_identical_QMARK_;
var expr__28572 = k__25864__auto__;
if(cljs.core.truth_(pred__28571.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__28572))){
return (new keechma.app_state.react_native_router.ReactNativeRouter(G__28567,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28571.call(null,new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),expr__28572))){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,G__28567,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28571.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__28572))){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,G__28567,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__28567),null));
}
}
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),self__.watch_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__28567){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,G__28567,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma.app_state.react_native_router.ReactNativeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"watch-id","watch-id",-1114508850,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$type = true;

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.app-state.react-native-router/ReactNativeRouter");
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma.app-state.react-native-router/ReactNativeRouter");
});

keechma.app_state.react_native_router.__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$__GT_ReactNativeRouter(routes_chan,watch_id,app_db){
return (new keechma.app_state.react_native_router.ReactNativeRouter(routes_chan,watch_id,app_db,null,null,null));
});

keechma.app_state.react_native_router.map__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$map__GT_ReactNativeRouter(G__28569){
return (new keechma.app_state.react_native_router.ReactNativeRouter(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__28569),new cljs.core.Keyword(null,"watch-id","watch-id",1539926919).cljs$core$IFn$_invoke$arity$1(G__28569),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__28569),null,cljs.core.dissoc.call(null,G__28569,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),new cljs.core.Keyword(null,"app-db","app-db",865606302)),null));
});

keechma.app_state.react_native_router.constructor$ = (function keechma$app_state$react_native_router$constructor(_,routes_chan,state){
var watch_id = cljs.core.keyword.call(null,cljs.core.gensym.call(null,new cljs.core.Keyword(null,"route-watch","route-watch",-391939416)));
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.react_native_router.__GT_ReactNativeRouter.call(null,routes_chan,watch_id,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=react_native_router.js.map?rel=1488782230625