// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.app_state.hashchange_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
keechma.app_state.hashchange_router.hashchange_listener = (function keechma$app_state$hashchange_router$hashchange_listener(routes,routes_chan,e){
var clean_route = cljs.core.subs.call(null,e.token,(1));
var route_params = router.core.url__GT_map.call(null,routes,clean_route);
return cljs.core.async.put_BANG_.call(null,routes_chan,route_params);
});
keechma.app_state.hashchange_router.get_history = (function keechma$app_state$hashchange_router$get_history(){
return (new goog.History(false,null,document.getElementById("history_state0"),document.getElementById("history_iframe0")));
});

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
keechma.app_state.hashchange_router.HashchangeRouter = (function (routes,routes_chan,hashchange_listener,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.hashchange_listener = hashchange_listener;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k28578,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__28580 = (((k28578 instanceof cljs.core.Keyword))?k28578.fqn:null);
switch (G__28580) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "hashchange-listener":
return self__.hashchange_listener;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28578,else__25859__auto__);

}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma.app-state.hashchange-router.HashchangeRouter{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28577){
var self__ = this;
var G__28577__$1 = this;
return (new cljs.core.RecordIter((0),G__28577__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history = keechma.app_state.hashchange_router.get_history.call(null);
var current_route_params = router.core.url__GT_map.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.subs.call(null,window.location.hash,(2)));
goog.events.listen(history,goog.history.EventType.NAVIGATE,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(this$__$1));

var G__28581_28586 = history;
G__28581_28586.setEnabled(true);


cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),current_route_params);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"history","history",-247395220),history);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.events.unlisten(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(this$__$1),goog.history.EventType.NAVIGATE,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return location.hash = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
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

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
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

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),null], null), null),k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__28577){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__28582 = cljs.core.keyword_identical_QMARK_;
var expr__28583 = k__25864__auto__;
if(cljs.core.truth_(pred__28582.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__28583))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(G__28577,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28582.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__28583))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,G__28577,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28582.call(null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),expr__28583))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,G__28577,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28582.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__28583))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,G__28577,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__28577),null));
}
}
}
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__28577){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,G__28577,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma.app_state.hashchange_router.HashchangeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"hashchange-listener","hashchange-listener",405542726,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$type = true;

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.app-state.hashchange-router/HashchangeRouter");
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma.app-state.hashchange-router/HashchangeRouter");
});

keechma.app_state.hashchange_router.__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$__GT_HashchangeRouter(routes,routes_chan,hashchange_listener,app_db){
return (new keechma.app_state.hashchange_router.HashchangeRouter(routes,routes_chan,hashchange_listener,app_db,null,null,null));
});

keechma.app_state.hashchange_router.map__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$map__GT_HashchangeRouter(G__28579){
return (new keechma.app_state.hashchange_router.HashchangeRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__28579),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__28579),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(G__28579),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__28579),null,cljs.core.dissoc.call(null,G__28579,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"app-db","app-db",865606302)),null));
});

keechma.app_state.hashchange_router.constructor$ = (function keechma$app_state$hashchange_router$constructor(routes,routes_chan,state){
var listener = cljs.core.partial.call(null,keechma.app_state.hashchange_router.hashchange_listener,router.core.expand_routes.call(null,routes),routes_chan);
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.hashchange_router.__GT_HashchangeRouter.call(null,router.core.expand_routes.call(null,routes),routes_chan,listener,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=hashchange_router.js.map?rel=1488782230740