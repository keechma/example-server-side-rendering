// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.app_state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('keechma.ui_component');
goog.require('keechma.controller_manager');
goog.require('keechma.controller');
goog.require('keechma.app_state.core');
goog.require('keechma.app_state.hashchange_router');
goog.require('keechma.app_state.react_native_router');
goog.require('keechma.app_state.history_router');
goog.require('cognitect.transit');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.AppState = (function (name,reporter,router,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns,__meta,__extmap,__hash){
this.name = name;
this.reporter = reporter;
this.router = router;
this.routes_chan = routes_chan;
this.commands_chan = commands_chan;
this.app_db = app_db;
this.subscriptions_cache = subscriptions_cache;
this.components = components;
this.controllers = controllers;
this.context = context;
this.html_element = html_element;
this.stop_fns = stop_fns;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k28590,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__28592 = (((k28590 instanceof cljs.core.Keyword))?k28590.fqn:null);
switch (G__28592) {
case "controllers":
return self__.controllers;

break;
case "router":
return self__.router;

break;
case "name":
return self__.name;

break;
case "subscriptions-cache":
return self__.subscriptions_cache;

break;
case "commands-chan":
return self__.commands_chan;

break;
case "html-element":
return self__.html_element;

break;
case "components":
return self__.components;

break;
case "reporter":
return self__.reporter;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "stop-fns":
return self__.stop_fns;

break;
case "context":
return self__.context;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28590,else__25859__auto__);

}
});

keechma.app_state.AppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma.app-state.AppState{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reporter","reporter",-805360621),self__.reporter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),self__.commands_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),self__.subscriptions_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"components","components",-1073188942),self__.components],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controllers","controllers",-1120410624),self__.controllers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"html-element","html-element",1188696850),self__.html_element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),self__.stop_fns],null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.AppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28589){
var self__ = this;
var G__28589__$1 = this;
return (new cljs.core.RecordIter((0),G__28589__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"html-element","html-element",1188696850),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.AppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.AppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
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

keechma.app_state.AppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
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

keechma.app_state.AppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),null,new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),null,new cljs.core.Keyword(null,"html-element","html-element",1188696850),null,new cljs.core.Keyword(null,"components","components",-1073188942),null,new cljs.core.Keyword(null,"reporter","reporter",-805360621),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma.app_state.AppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__28589){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__28593 = cljs.core.keyword_identical_QMARK_;
var expr__28594 = k__25864__auto__;
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__28594))){
return (new keechma.app_state.AppState(G__28589,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"reporter","reporter",-805360621),expr__28594))){
return (new keechma.app_state.AppState(self__.name,G__28589,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"router","router",1091916230),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,G__28589,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,G__28589,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,G__28589,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,G__28589,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,G__28589,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"components","components",-1073188942),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,G__28589,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,G__28589,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,G__28589,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"html-element","html-element",1188696850),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,G__28589,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28593.call(null,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),expr__28594))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,G__28589,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__28589),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

keechma.app_state.AppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reporter","reporter",-805360621),self__.reporter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),self__.commands_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),self__.subscriptions_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"components","components",-1073188942),self__.components],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controllers","controllers",-1120410624),self__.controllers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"html-element","html-element",1188696850),self__.html_element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),self__.stop_fns],null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__28589){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,G__28589,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma.app_state.AppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"reporter","reporter",835170906,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"commands-chan","commands-chan",-1415549162,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null),new cljs.core.Symbol(null,"subscriptions-cache","subscriptions-cache",-1606544750,null),new cljs.core.Symbol(null,"components","components",567342585,null),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"html-element","html-element",-1465738919,null),new cljs.core.Symbol(null,"stop-fns","stop-fns",1828592764,null)], null);
});

keechma.app_state.AppState.cljs$lang$type = true;

keechma.app_state.AppState.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.app-state/AppState");
});

keechma.app_state.AppState.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma.app-state/AppState");
});

keechma.app_state.__GT_AppState = (function keechma$app_state$__GT_AppState(name,reporter,router__$1,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns){
return (new keechma.app_state.AppState(name,reporter,router__$1,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns,null,null,null));
});

keechma.app_state.map__GT_AppState = (function keechma$app_state$map__GT_AppState(G__28591){
return (new keechma.app_state.AppState(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"html-element","html-element",1188696850).cljs$core$IFn$_invoke$arity$1(G__28591),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237).cljs$core$IFn$_invoke$arity$1(G__28591),null,cljs.core.dissoc.call(null,G__28591,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"html-element","html-element",1188696850),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.SerializedAppState = (function (app_db,__meta,__extmap,__hash){
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k28598,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__28600 = (((k28598 instanceof cljs.core.Keyword))?k28598.fqn:null);
switch (G__28600) {
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28598,else__25859__auto__);

}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma.app-state.SerializedAppState{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.SerializedAppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28597){
var self__ = this;
var G__28597__$1 = this;
return (new cljs.core.RecordIter((0),G__28597__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
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

keechma.app_state.SerializedAppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
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

keechma.app_state.SerializedAppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__28597){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__28601 = cljs.core.keyword_identical_QMARK_;
var expr__28602 = k__25864__auto__;
if(cljs.core.truth_(pred__28601.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__28602))){
return (new keechma.app_state.SerializedAppState(G__28597,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__28597),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__28597){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,G__28597,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma.app_state.SerializedAppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.SerializedAppState.cljs$lang$type = true;

keechma.app_state.SerializedAppState.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.app-state/SerializedAppState");
});

keechma.app_state.SerializedAppState.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma.app-state/SerializedAppState");
});

keechma.app_state.__GT_SerializedAppState = (function keechma$app_state$__GT_SerializedAppState(app_db){
return (new keechma.app_state.SerializedAppState(app_db,null,null,null));
});

keechma.app_state.map__GT_SerializedAppState = (function keechma$app_state$map__GT_SerializedAppState(G__28599){
return (new keechma.app_state.SerializedAppState(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__28599),null,cljs.core.dissoc.call(null,G__28599,new cljs.core.Keyword(null,"app-db","app-db",865606302)),null));
});

keechma.app_state.get_controller_types_set = (function keechma$app_state$get_controller_types_set(app_state){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.type,cljs.core.vals.call(null,new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(app_state))));
});
keechma.app_state.prepare_for_serialization = (function keechma$app_state$prepare_for_serialization(var_args){
var args28606 = [];
var len__26342__auto___28614 = arguments.length;
var i__26343__auto___28615 = (0);
while(true){
if((i__26343__auto___28615 < len__26342__auto___28614)){
args28606.push((arguments[i__26343__auto___28615]));

var G__28616 = (i__26343__auto___28615 + (1));
i__26343__auto___28615 = G__28616;
continue;
} else {
}
break;
}

var G__28608 = args28606.length;
switch (G__28608) {
case 1:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28606.length)].join('')));

}
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.app_state.prepare_for_serialization.call(null,value,cljs.core.set.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2 = (function (value,controller_types){
if(cljs.core._EQ_.call(null,keechma.app_state.AppState,cljs.core.type.call(null,value))){
return keechma.app_state.__GT_SerializedAppState.call(null,keechma.app_state.prepare_for_serialization.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(value)),keechma.app_state.get_controller_types_set.call(null,value)));
} else {
if(((!((value == null)))?((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IDeref$)))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,value))){
return keechma.app_state.prepare_for_serialization.call(null,cljs.core.deref.call(null,value),controller_types);
} else {
if(cljs.core.contains_QMARK_.call(null,controller_types,cljs.core.type.call(null,value))){
return keechma.controller.__GT_SerializedController.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(value));
} else {
if((cljs.core._EQ_.call(null,keechma.app_state.SerializedAppState,cljs.core.type.call(null,value))) || (cljs.core._EQ_.call(null,keechma.controller.SerializedController,cljs.core.type.call(null,value)))){
return value;
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.reduce.call(null,(function (acc,p__28610){
var vec__28611 = p__28610;
var k = cljs.core.nth.call(null,vec__28611,(0),null);
var v = cljs.core.nth.call(null,vec__28611,(1),null);
return cljs.core.assoc.call(null,acc,k,keechma.app_state.prepare_for_serialization.call(null,v,controller_types));
}),cljs.core.PersistentArrayMap.EMPTY,value);
} else {
if(cljs.core.vector_QMARK_.call(null,value)){
return cljs.core.map.call(null,(function (p1__28605_SHARP_){
return keechma.app_state.prepare_for_serialization.call(null,p1__28605_SHARP_,controller_types);
}),value);
} else {
return value;

}
}
}
}
}
}
});

keechma.app_state.prepare_for_serialization.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {keechma.app_state.Object}
*/
keechma.app_state.ControllerWriteHandler = (function (){
})
keechma.app_state.ControllerWriteHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "controller";
});

keechma.app_state.ControllerWriteHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return ({"params": new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(v)});
});

keechma.app_state.ControllerWriteHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
});

keechma.app_state.ControllerWriteHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma.app_state.ControllerWriteHandler.cljs$lang$type = true;

keechma.app_state.ControllerWriteHandler.cljs$lang$ctorStr = "keechma.app-state/ControllerWriteHandler";

keechma.app_state.ControllerWriteHandler.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"keechma.app-state/ControllerWriteHandler");
});

keechma.app_state.__GT_ControllerWriteHandler = (function keechma$app_state$__GT_ControllerWriteHandler(){
return (new keechma.app_state.ControllerWriteHandler());
});


/**
* @constructor
 * @implements {keechma.app_state.Object}
*/
keechma.app_state.AppStateWriteHandler = (function (){
})
keechma.app_state.AppStateWriteHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "app-state";
});

keechma.app_state.AppStateWriteHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return ({"appdb": new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(v)});
});

keechma.app_state.AppStateWriteHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
});

keechma.app_state.AppStateWriteHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma.app_state.AppStateWriteHandler.cljs$lang$type = true;

keechma.app_state.AppStateWriteHandler.cljs$lang$ctorStr = "keechma.app-state/AppStateWriteHandler";

keechma.app_state.AppStateWriteHandler.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"keechma.app-state/AppStateWriteHandler");
});

keechma.app_state.__GT_AppStateWriteHandler = (function keechma$app_state$__GT_AppStateWriteHandler(){
return (new keechma.app_state.AppStateWriteHandler());
});

keechma.app_state.serialize_app_state = (function keechma$app_state$serialize_app_state(transit_writers,state){
var running_controllers = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
var handlers = cljs.core.assoc.call(null,transit_writers,keechma.app_state.SerializedAppState,(new keechma.app_state.AppStateWriteHandler()),keechma.controller.SerializedController,(new keechma.app_state.ControllerWriteHandler()));
var writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null));
var prepared_state = keechma.app_state.prepare_for_serialization.call(null,state);
return cognitect.transit.write.call(null,writer,prepared_state);
});
keechma.app_state.deserialize_app_state = (function keechma$app_state$deserialize_app_state(transit_readers,serialized_state){
var handlers = cljs.core.assoc.call(null,transit_readers,"controller",(function (data){
return keechma.controller.__GT_SerializedController.call(null,cljs.core.get.call(null,data,"params"));
}),"app-state",(function (data){
return keechma.app_state.__GT_SerializedAppState.call(null,cljs.core.get.call(null,data,"appdb"));
}));
var reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null));
return cognitect.transit.read.call(null,reader,serialized_state);
});
keechma.app_state.app_db = (function keechma$app_state$app_db(initial_data){
return reagent.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"route","route",329891309),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"kv","kv",-1099920440),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.PersistentArrayMap.EMPTY], null),initial_data));
});
keechma.app_state.default_config = (function keechma$app_state$default_config(initial_data){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"html-element","html-element",1188696850),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"app-db","app-db",865606302)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hashchange","hashchange",1795201042),new cljs.core.Keyword(null,"application","application",551185447),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.async.chan.call(null),null,cljs.core.PersistentArrayMap.EMPTY,(function (app_name,type,direction,topic,name,payload,severity){
return null;
}),cljs.core.async.chan.call(null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keechma.app_state.app_db.call(null,initial_data)]);
});
keechma.app_state.process_config = (function keechma$app_state$process_config(config){
var name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(config),cljs.core.keyword.call(null,cljs.core.gensym.call(null,"v"))], null);
var reporter = cljs.core.partial.call(null,new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(config),name);
return cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter);
});
keechma.app_state.add_reporter_to_controllers = (function keechma$app_state$add_reporter_to_controllers(controllers,reporter){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_redirect_fn_to_controllers = (function keechma$app_state$add_redirect_fn_to_controllers(controllers,router__$1){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973),cljs.core.partial.call(null,keechma.app_state.core.redirect_BANG_,router__$1)));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_context_to_controllers = (function keechma$app_state$add_context_to_controllers(controllers,context){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"context","context",-830191113),context));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_stop_fn = (function keechma$app_state$add_stop_fn(state,stop_fn){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237).cljs$core$IFn$_invoke$arity$1(state),stop_fn));
});
keechma.app_state.start_selected_router_BANG_ = (function keechma$app_state$start_selected_router_BANG_(state,constructor$){
var routes = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(state);
var routes_chan = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(state);
var router__$1 = constructor$.call(null,routes,routes_chan,state);
return keechma.app_state.add_stop_fn.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"router","router",1091916230),router__$1),((function (routes,routes_chan,router__$1){
return (function (s){
keechma.app_state.core.stop_BANG_.call(null,router__$1);

return s;
});})(routes,routes_chan,router__$1))
);
});
keechma.app_state.start_router_BANG_ = (function keechma$app_state$start_router_BANG_(state){
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var G__28619 = (((router__$1 instanceof cljs.core.Keyword))?router__$1.fqn:null);
switch (G__28619) {
case "hashchange":
return keechma.app_state.start_selected_router_BANG_.call(null,state,keechma.app_state.hashchange_router.constructor$);

break;
case "react-native":
return keechma.app_state.start_selected_router_BANG_.call(null,state,keechma.app_state.react_native_router.constructor$);

break;
case "history":
return keechma.app_state.start_selected_router_BANG_.call(null,state,keechma.app_state.history_router.constructor$);

break;
default:
return state;

}
});
keechma.app_state.resolve_main_component = (function keechma$app_state$resolve_main_component(state){
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var current_route_reaction = reagent.ratom.make_reaction.call(null,((function (router__$1){
return (function (){
return new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});})(router__$1))
);
var resolved = cljs.core.partial.call(null,keechma.ui_component.component__GT_renderer,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"reporter","reporter",-805360621),cljs.core.partial.call(null,new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"out","out",-910545517)),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"url-fn","url-fn",1228268268),cljs.core.partial.call(null,keechma.app_state.core.url,router__$1),new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973),cljs.core.partial.call(null,keechma.app_state.core.redirect_BANG_,router__$1),new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302),((function (router__$1,current_route_reaction){
return (function (){
return current_route_reaction;
});})(router__$1,current_route_reaction))
], null));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"main-component","main-component",-1680547783),resolved.call(null,keechma.ui_component.system.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state),(function (){var or__25229__auto__ = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));
});
keechma.app_state.app_renderer = (function keechma$app_state$app_renderer(state){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var main_component = new cljs.core.Keyword(null,"main-component","main-component",-1680547783).cljs$core$IFn$_invoke$arity$1(state);
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var route_wrap_component = keechma.app_state.core.wrap_component.call(null,router__$1);
if(cljs.core.truth_(route_wrap_component)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_wrap_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_component], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_component], null);
}
})], null);
});
keechma.app_state.mount_to_element_BANG_ = (function keechma$app_state$mount_to_element_BANG_(state){
var main_component = new cljs.core.Keyword(null,"main-component","main-component",-1680547783).cljs$core$IFn$_invoke$arity$1(state);
var container = new cljs.core.Keyword(null,"html-element","html-element",1188696850).cljs$core$IFn$_invoke$arity$1(state);
reagent.core.render_component.call(null,keechma.app_state.app_renderer.call(null,state),container);

return keechma.app_state.add_stop_fn.call(null,state,((function (main_component,container){
return (function (s){
return reagent.core.unmount_component_at_node.call(null,container);
});})(main_component,container))
);
});
keechma.app_state.start_controllers = (function keechma$app_state$start_controllers(state){
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var reporter = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(state);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(state);
var controllers = keechma.app_state.add_redirect_fn_to_controllers.call(null,keechma.app_state.add_reporter_to_controllers.call(null,keechma.app_state.add_context_to_controllers.call(null,new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(state),context),reporter),router__$1);
var routes_chan = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(state);
var commands_chan = new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(state);
var app_db = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state);
var manager = keechma.controller_manager.start.call(null,routes_chan,commands_chan,app_db,controllers,reporter);
return keechma.app_state.add_stop_fn.call(null,state,((function (router__$1,reporter,context,controllers,routes_chan,commands_chan,app_db,manager){
return (function (s){
new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(manager).call(null);

return s;
});})(router__$1,reporter,context,controllers,routes_chan,commands_chan,app_db,manager))
);
});
keechma.app_state.add_sub_cache = (function keechma$app_state$add_sub_cache(cache,p__28621){
var vec__28625 = p__28621;
var key = cljs.core.nth.call(null,vec__28625,(0),null);
var sub = cljs.core.nth.call(null,vec__28625,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((function (vec__28625,key,sub){
return (function() { 
var G__28628__delegate = function (app_db_atom,args){
var cached = cljs.core.get.call(null,cljs.core.deref.call(null,cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,args], null));
if(cljs.core.truth_(cached)){
return cached;
} else {
var sub_reaction = cljs.core.apply.call(null,sub,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_atom], null),cljs.core.vec.call(null,args)));
cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,args], null),sub_reaction);

return sub_reaction;
}
};
var G__28628 = function (app_db_atom,var_args){
var args = null;
if (arguments.length > 1) {
var G__28629__i = 0, G__28629__a = new Array(arguments.length -  1);
while (G__28629__i < G__28629__a.length) {G__28629__a[G__28629__i] = arguments[G__28629__i + 1]; ++G__28629__i;}
  args = new cljs.core.IndexedSeq(G__28629__a,0);
} 
return G__28628__delegate.call(this,app_db_atom,args);};
G__28628.cljs$lang$maxFixedArity = 1;
G__28628.cljs$lang$applyTo = (function (arglist__28630){
var app_db_atom = cljs.core.first(arglist__28630);
var args = cljs.core.rest(arglist__28630);
return G__28628__delegate(app_db_atom,args);
});
G__28628.cljs$core$IFn$_invoke$arity$variadic = G__28628__delegate;
return G__28628;
})()
;})(vec__28625,key,sub))
], null);
});
keechma.app_state.start_subs_cache = (function keechma$app_state$start_subs_cache(state){
var subscriptions = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(state);
var subs_cache = new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019).cljs$core$IFn$_invoke$arity$1(state);
var cached_subscriptions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (subscriptions,subs_cache){
return (function (p1__28631_SHARP_){
return keechma.app_state.add_sub_cache.call(null,subs_cache,p1__28631_SHARP_);
});})(subscriptions,subs_cache))
,subscriptions));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cached_subscriptions);
});
keechma.app_state.restore_app_db = (function keechma$app_state$restore_app_db(old_app,new_app){
var old_app_db = cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(old_app));
var new_app_db_atom = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(new_app);
return cljs.core.reset_BANG_.call(null,new_app_db_atom,cljs.core.merge.call(null,cljs.core.deref.call(null,new_app_db_atom),cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,old_app_db,new cljs.core.Keyword(null,"internal","internal",-854870097)),new cljs.core.Keyword(null,"route","route",329891309))));
});
keechma.app_state.get_initial_data = (function keechma$app_state$get_initial_data(config){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core._EQ_.call(null,keechma.app_state.SerializedAppState,cljs.core.type.call(null,initial_data))){
return new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(initial_data);
} else {
if((initial_data == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return initial_data;

}
}
});
/**
 * Starts the application. It receives the application config `map` as the first argument.
 *   It receives `boolean` `should-mount?` as the second element. Default value for `should-mount?`
 *   is `true`.
 * 
 *   You can pass false to the `should-mount?` argument if you want to start the app,
 *   but you want to manually mount the application (for instance another app could manage mounting
 *   and unmounting). In that case you can get the main app component at the `:main-component` of the
 *   map returned from the `start!` function.
 * 
 *   Application config contains all the parts needed to run the application:
 * 
 *   - Route defintions
 *   - Controllers
 *   - UI subscriptions
 *   - UI components 
 *   - HTML element to which the component should be mounted
 *   - Routes chan (through which the route changes will be communicated)
 *   - Commands chan (through which the UI sends the commands to the controllers)
 * 
 *   `start!` function returns the updated config map which can be passed to the `stop!`
 *   function to stop the application.
 * 
 *   Example:
 * 
 *   ```clojure
 *   (def app-config {:controllers {:users (->users/Controller)}
 *                 :subscriptions {:user-list (fn [app-db-atom])}
 *                 :components {:main layout/component
 *                              :users users/component}
 *                 :html-element (.getElementById js/document "app")})
 *   ```
 * 
 *   If any of the params is missing, the defaults will be used.
 * 
 *   When the application is started, the following happens:
 * 
 *   1. Routes are expanded (converted to regexps, etc.)
 *   2. Application binds the listener the history change event
 *   3. Controller manager is started
 *   4. Application is (optionally) mounted into the DOM
 *   
 *   
 */
keechma.app_state.start_BANG_ = (function keechma$app_state$start_BANG_(var_args){
var args28632 = [];
var len__26342__auto___28635 = arguments.length;
var i__26343__auto___28636 = (0);
while(true){
if((i__26343__auto___28636 < len__26342__auto___28635)){
args28632.push((arguments[i__26343__auto___28636]));

var G__28637 = (i__26343__auto___28636 + (1));
i__26343__auto___28636 = G__28637;
continue;
} else {
}
break;
}

var G__28634 = args28632.length;
switch (G__28634) {
case 1:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28632.length)].join('')));

}
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return keechma.app_state.start_BANG_.call(null,config,true);
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (config,should_mount_QMARK_){
var initial_data = keechma.app_state.get_initial_data.call(null,config);
var config__$1 = keechma.app_state.map__GT_AppState.call(null,keechma.app_state.process_config.call(null,cljs.core.merge.call(null,keechma.app_state.default_config.call(null,initial_data),config)));
var mount = (cljs.core.truth_(should_mount_QMARK_)?keechma.app_state.mount_to_element_BANG_:cljs.core.identity);
return mount.call(null,keechma.app_state.resolve_main_component.call(null,keechma.app_state.start_controllers.call(null,keechma.app_state.start_router_BANG_.call(null,keechma.app_state.start_subs_cache.call(null,config__$1)))));
});

keechma.app_state.start_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Stops the application. `stop!` function receives the following as the arguments:
 * 
 *   - `config` - App config map returned from the `start!` function
 *   - `done` - An optional callback function that will be called when the application
 *   is stopped.
 * 
 *   Purpose of the `stop!` function is to completely clean up after the application. When the
 *   application is stopped, the following happens:
 * 
 *   1. History change event listener is unbound
 *   2. Controller manager and any running controllers are stopped
 *   3. Any channels used by the app (`routes-chan`, `commands-chan`,...) are closed
 *   4. Application is unmounted and removed from the DOM
 *   
 */
keechma.app_state.stop_BANG_ = (function keechma$app_state$stop_BANG_(var_args){
var args28639 = [];
var len__26342__auto___28719 = arguments.length;
var i__26343__auto___28720 = (0);
while(true){
if((i__26343__auto___28720 < len__26342__auto___28719)){
args28639.push((arguments[i__26343__auto___28720]));

var G__28721 = (i__26343__auto___28720 + (1));
i__26343__auto___28720 = G__28721;
continue;
} else {
}
break;
}

var G__28641 = args28639.length;
switch (G__28641) {
case 1:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28639.length)].join('')));

}
});

keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return keechma.app_state.stop_BANG_.call(null,config,(function (){
return null;
}));
});

keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (config,done){
var routes_chan = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(config);
var commands_chan = new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(config);
var c__27297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27297__auto__,routes_chan,commands_chan){
return (function (){
var f__27298__auto__ = (function (){var switch__27276__auto__ = ((function (c__27297__auto__,routes_chan,commands_chan){
return (function (state_28687){
var state_val_28688 = (state_28687[(1)]);
if((state_val_28688 === (7))){
var inst_28661 = (state_28687[(7)]);
var inst_28663 = cljs.core.chunked_seq_QMARK_.call(null,inst_28661);
var state_28687__$1 = state_28687;
if(inst_28663){
var statearr_28692_28723 = state_28687__$1;
(statearr_28692_28723[(1)] = (10));

} else {
var statearr_28693_28724 = state_28687__$1;
(statearr_28693_28724[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (1))){
var inst_28646 = new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237).cljs$core$IFn$_invoke$arity$1(config);
var inst_28647 = cljs.core.seq.call(null,inst_28646);
var inst_28648 = inst_28647;
var inst_28649 = null;
var inst_28650 = (0);
var inst_28651 = (0);
var state_28687__$1 = (function (){var statearr_28694 = state_28687;
(statearr_28694[(8)] = inst_28648);

(statearr_28694[(9)] = inst_28650);

(statearr_28694[(10)] = inst_28649);

(statearr_28694[(11)] = inst_28651);

return statearr_28694;
})();
var statearr_28695_28725 = state_28687__$1;
(statearr_28695_28725[(2)] = null);

(statearr_28695_28725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (4))){
var inst_28648 = (state_28687[(8)]);
var inst_28650 = (state_28687[(9)]);
var inst_28649 = (state_28687[(10)]);
var inst_28651 = (state_28687[(11)]);
var inst_28656 = cljs.core._nth.call(null,inst_28649,inst_28651);
var inst_28657 = inst_28656.call(null,config);
var inst_28658 = (inst_28651 + (1));
var tmp28689 = inst_28648;
var tmp28690 = inst_28650;
var tmp28691 = inst_28649;
var inst_28648__$1 = tmp28689;
var inst_28649__$1 = tmp28691;
var inst_28650__$1 = tmp28690;
var inst_28651__$1 = inst_28658;
var state_28687__$1 = (function (){var statearr_28696 = state_28687;
(statearr_28696[(8)] = inst_28648__$1);

(statearr_28696[(9)] = inst_28650__$1);

(statearr_28696[(10)] = inst_28649__$1);

(statearr_28696[(12)] = inst_28657);

(statearr_28696[(11)] = inst_28651__$1);

return statearr_28696;
})();
var statearr_28697_28726 = state_28687__$1;
(statearr_28697_28726[(2)] = null);

(statearr_28697_28726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (6))){
var inst_28680 = (state_28687[(2)]);
var state_28687__$1 = state_28687;
var statearr_28698_28727 = state_28687__$1;
(statearr_28698_28727[(2)] = inst_28680);

(statearr_28698_28727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (3))){
var inst_28682 = (state_28687[(2)]);
var inst_28683 = cljs.core.async.close_BANG_.call(null,commands_chan);
var inst_28684 = cljs.core.async.close_BANG_.call(null,routes_chan);
var inst_28685 = done.call(null);
var state_28687__$1 = (function (){var statearr_28699 = state_28687;
(statearr_28699[(13)] = inst_28684);

(statearr_28699[(14)] = inst_28682);

(statearr_28699[(15)] = inst_28683);

return statearr_28699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28687__$1,inst_28685);
} else {
if((state_val_28688 === (12))){
var inst_28675 = (state_28687[(2)]);
var state_28687__$1 = state_28687;
var statearr_28700_28728 = state_28687__$1;
(statearr_28700_28728[(2)] = inst_28675);

(statearr_28700_28728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (2))){
var inst_28650 = (state_28687[(9)]);
var inst_28651 = (state_28687[(11)]);
var inst_28653 = (inst_28651 < inst_28650);
var inst_28654 = inst_28653;
var state_28687__$1 = state_28687;
if(cljs.core.truth_(inst_28654)){
var statearr_28701_28729 = state_28687__$1;
(statearr_28701_28729[(1)] = (4));

} else {
var statearr_28702_28730 = state_28687__$1;
(statearr_28702_28730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (11))){
var inst_28661 = (state_28687[(7)]);
var inst_28670 = cljs.core.first.call(null,inst_28661);
var inst_28671 = inst_28670.call(null,config);
var inst_28672 = cljs.core.next.call(null,inst_28661);
var inst_28648 = inst_28672;
var inst_28649 = null;
var inst_28650 = (0);
var inst_28651 = (0);
var state_28687__$1 = (function (){var statearr_28703 = state_28687;
(statearr_28703[(8)] = inst_28648);

(statearr_28703[(16)] = inst_28671);

(statearr_28703[(9)] = inst_28650);

(statearr_28703[(10)] = inst_28649);

(statearr_28703[(11)] = inst_28651);

return statearr_28703;
})();
var statearr_28704_28731 = state_28687__$1;
(statearr_28704_28731[(2)] = null);

(statearr_28704_28731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (9))){
var inst_28678 = (state_28687[(2)]);
var state_28687__$1 = state_28687;
var statearr_28705_28732 = state_28687__$1;
(statearr_28705_28732[(2)] = inst_28678);

(statearr_28705_28732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (5))){
var inst_28648 = (state_28687[(8)]);
var inst_28661 = (state_28687[(7)]);
var inst_28661__$1 = cljs.core.seq.call(null,inst_28648);
var state_28687__$1 = (function (){var statearr_28706 = state_28687;
(statearr_28706[(7)] = inst_28661__$1);

return statearr_28706;
})();
if(inst_28661__$1){
var statearr_28707_28733 = state_28687__$1;
(statearr_28707_28733[(1)] = (7));

} else {
var statearr_28708_28734 = state_28687__$1;
(statearr_28708_28734[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (10))){
var inst_28661 = (state_28687[(7)]);
var inst_28665 = cljs.core.chunk_first.call(null,inst_28661);
var inst_28666 = cljs.core.chunk_rest.call(null,inst_28661);
var inst_28667 = cljs.core.count.call(null,inst_28665);
var inst_28648 = inst_28666;
var inst_28649 = inst_28665;
var inst_28650 = inst_28667;
var inst_28651 = (0);
var state_28687__$1 = (function (){var statearr_28709 = state_28687;
(statearr_28709[(8)] = inst_28648);

(statearr_28709[(9)] = inst_28650);

(statearr_28709[(10)] = inst_28649);

(statearr_28709[(11)] = inst_28651);

return statearr_28709;
})();
var statearr_28710_28735 = state_28687__$1;
(statearr_28710_28735[(2)] = null);

(statearr_28710_28735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28688 === (8))){
var state_28687__$1 = state_28687;
var statearr_28711_28736 = state_28687__$1;
(statearr_28711_28736[(2)] = null);

(statearr_28711_28736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27297__auto__,routes_chan,commands_chan))
;
return ((function (switch__27276__auto__,c__27297__auto__,routes_chan,commands_chan){
return (function() {
var keechma$app_state$state_machine__27277__auto__ = null;
var keechma$app_state$state_machine__27277__auto____0 = (function (){
var statearr_28715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28715[(0)] = keechma$app_state$state_machine__27277__auto__);

(statearr_28715[(1)] = (1));

return statearr_28715;
});
var keechma$app_state$state_machine__27277__auto____1 = (function (state_28687){
while(true){
var ret_value__27278__auto__ = (function (){try{while(true){
var result__27279__auto__ = switch__27276__auto__.call(null,state_28687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27279__auto__;
}
break;
}
}catch (e28716){if((e28716 instanceof Object)){
var ex__27280__auto__ = e28716;
var statearr_28717_28737 = state_28687;
(statearr_28717_28737[(5)] = ex__27280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28738 = state_28687;
state_28687 = G__28738;
continue;
} else {
return ret_value__27278__auto__;
}
break;
}
});
keechma$app_state$state_machine__27277__auto__ = function(state_28687){
switch(arguments.length){
case 0:
return keechma$app_state$state_machine__27277__auto____0.call(this);
case 1:
return keechma$app_state$state_machine__27277__auto____1.call(this,state_28687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$app_state$state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$app_state$state_machine__27277__auto____0;
keechma$app_state$state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$app_state$state_machine__27277__auto____1;
return keechma$app_state$state_machine__27277__auto__;
})()
;})(switch__27276__auto__,c__27297__auto__,routes_chan,commands_chan))
})();
var state__27299__auto__ = (function (){var statearr_28718 = f__27298__auto__.call(null);
(statearr_28718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27297__auto__);

return statearr_28718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27299__auto__);
});})(c__27297__auto__,routes_chan,commands_chan))
);

return c__27297__auto__;
});

keechma.app_state.stop_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=app_state.js.map?rel=1488782231203