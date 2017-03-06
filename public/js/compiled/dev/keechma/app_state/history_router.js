// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.app_state.history_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
keechma.app_state.history_router.make_urlchange_dispatcher = (function keechma$app_state$history_router$make_urlchange_dispatcher(){
var handlers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var main_handler = ((function (handlers){
return (function (_){
var seq__27462 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__27463 = null;
var count__27464 = (0);
var i__27465 = (0);
while(true){
if((i__27465 < count__27464)){
var h = cljs.core._nth.call(null,chunk__27463,i__27465);
h.call(null,location.href);

var G__27470 = seq__27462;
var G__27471 = chunk__27463;
var G__27472 = count__27464;
var G__27473 = (i__27465 + (1));
seq__27462 = G__27470;
chunk__27463 = G__27471;
count__27464 = G__27472;
i__27465 = G__27473;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27462);
if(temp__4657__auto__){
var seq__27462__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27462__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__27462__$1);
var G__27474 = cljs.core.chunk_rest.call(null,seq__27462__$1);
var G__27475 = c__26048__auto__;
var G__27476 = cljs.core.count.call(null,c__26048__auto__);
var G__27477 = (0);
seq__27462 = G__27474;
chunk__27463 = G__27475;
count__27464 = G__27476;
i__27465 = G__27477;
continue;
} else {
var h = cljs.core.first.call(null,seq__27462__$1);
h.call(null,location.href);

var G__27478 = cljs.core.next.call(null,seq__27462__$1);
var G__27479 = null;
var G__27480 = (0);
var G__27481 = (0);
seq__27462 = G__27478;
chunk__27463 = G__27479;
count__27464 = G__27480;
i__27465 = G__27481;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers))
;
var bind_main_handler = ((function (handlers,main_handler){
return (function (){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,handlers)))){
return window.addEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler))
;
var unbind_main_handler = ((function (handlers,main_handler,bind_main_handler){
return (function (){
if((cljs.core.count.call(null,cljs.core.deref.call(null,handlers)) === (0))){
return window.removeEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler,bind_main_handler))
;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers-count","handlers-count",70073577),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,handlers));
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"bind","bind",-113428417),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.call(null,handlers,cljs.core.conj,handler);

return bind_main_handler.call(null);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"unbind","unbind",716905720),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.call(null,handlers,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (h){
return cljs.core.filter.call(null,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (p1__27453_SHARP_){
return cljs.core.not_EQ_.call(null,handler,p1__27453_SHARP_);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,h);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
);

return unbind_main_handler.call(null);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"go","go",-146946655),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (href){
history.pushState(null,"",href);

var seq__27466 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__27467 = null;
var count__27468 = (0);
var i__27469 = (0);
while(true){
if((i__27469 < count__27468)){
var h = cljs.core._nth.call(null,chunk__27467,i__27469);
h.call(null,href);

var G__27482 = seq__27466;
var G__27483 = chunk__27467;
var G__27484 = count__27468;
var G__27485 = (i__27469 + (1));
seq__27466 = G__27482;
chunk__27467 = G__27483;
count__27468 = G__27484;
i__27469 = G__27485;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27466);
if(temp__4657__auto__){
var seq__27466__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27466__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__27466__$1);
var G__27486 = cljs.core.chunk_rest.call(null,seq__27466__$1);
var G__27487 = c__26048__auto__;
var G__27488 = cljs.core.count.call(null,c__26048__auto__);
var G__27489 = (0);
seq__27466 = G__27486;
chunk__27467 = G__27487;
count__27468 = G__27488;
i__27469 = G__27489;
continue;
} else {
var h = cljs.core.first.call(null,seq__27466__$1);
h.call(null,href);

var G__27490 = cljs.core.next.call(null,seq__27466__$1);
var G__27491 = null;
var G__27492 = (0);
var G__27493 = (0);
seq__27466 = G__27490;
chunk__27467 = G__27491;
count__27468 = G__27492;
i__27469 = G__27493;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
], null);
});
keechma.app_state.history_router.urlchange_dispatcher = keechma.app_state.history_router.make_urlchange_dispatcher.call(null);
keechma.app_state.history_router.url_prefix = (function keechma$app_state$history_router$url_prefix(base_href){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
});
keechma.app_state.history_router.route_url = (function keechma$app_state$history_router$route_url(url,base_href){
var prefix = keechma.app_state.history_router.url_prefix.call(null,base_href);
return cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,url,cljs.core.count.call(null,prefix),cljs.core.count.call(null,url)),/#/));
});
keechma.app_state.history_router.link_QMARK_ = (function keechma$app_state$history_router$link_QMARK_(el){
var and__25217__auto__ = el.href;
if(cljs.core.truth_(and__25217__auto__)){
return cljs.core._EQ_.call(null,"a",clojure.string.lower_case.call(null,el.tagName));
} else {
return and__25217__auto__;
}
});
keechma.app_state.history_router.link_el = (function keechma$app_state$history_router$link_el(el){
var current_el = el;
while(true){
if(cljs.core.truth_(keechma.app_state.history_router.link_QMARK_.call(null,current_el))){
return current_el;
} else {
var temp__4657__auto__ = current_el.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__27494 = parent;
current_el = G__27494;
continue;
} else {
return null;
}
}
break;
}
});
keechma.app_state.history_router.current_target_self_QMARK_ = (function keechma$app_state$history_router$current_target_self_QMARK_(el){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null),el.target);
});
keechma.app_state.history_router.left_button_clicked_QMARK_ = (function keechma$app_state$history_router$left_button_clicked_QMARK_(e){
return cljs.core._EQ_.call(null,(0),e.button);
});
keechma.app_state.history_router.mod_key_pressed_QMARK_ = (function keechma$app_state$history_router$mod_key_pressed_QMARK_(e){
var or__25229__auto__ = e.altKey;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
var or__25229__auto____$2 = e.ctrlKey;
if(cljs.core.truth_(or__25229__auto____$2)){
return or__25229__auto____$2;
} else {
return e.metaKey;
}
}
}
});
keechma.app_state.history_router.link_has_prefixed_url_QMARK_ = (function keechma$app_state$history_router$link_has_prefixed_url_QMARK_(el,base_href){
return clojure.string.starts_with_QMARK_.call(null,el.href,keechma.app_state.history_router.url_prefix.call(null,base_href));
});
keechma.app_state.history_router.same_href_QMARK_ = (function keechma$app_state$history_router$same_href_QMARK_(el){
return cljs.core._EQ_.call(null,el.href,location.href);
});
keechma.app_state.history_router.should_href_pass_through_QMARK_ = (function keechma$app_state$history_router$should_href_pass_through_QMARK_(href){
var vec__27501 = clojure.string.split.call(null,location.href,/#/);
var current = cljs.core.nth.call(null,vec__27501,(0),null);
var current_hash = cljs.core.nth.call(null,vec__27501,(1),null);
var vec__27504 = clojure.string.split.call(null,href,/#/);
var next = cljs.core.nth.call(null,vec__27504,(0),null);
var next_hash = cljs.core.nth.call(null,vec__27504,(1),null);
return (cljs.core._EQ_.call(null,current,next)) && (cljs.core.not_EQ_.call(null,current_hash,next_hash));
});
keechma.app_state.history_router.make_url = (function keechma$app_state$history_router$make_url(routes,base_href,params){
var hash = location.hash;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,routes,params)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
});
keechma.app_state.history_router.add_trailing_slash = (function keechma$app_state$history_router$add_trailing_slash(base_href){
if(clojure.string.ends_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
}
});
keechma.app_state.history_router.add_leading_slash = (function keechma$app_state$history_router$add_leading_slash(base_href){
if(clojure.string.starts_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
}
});
keechma.app_state.history_router.process_base_href = (function keechma$app_state$history_router$process_base_href(base_href){
return keechma.app_state.history_router.add_leading_slash.call(null,keechma.app_state.history_router.add_trailing_slash.call(null,base_href));
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
keechma.app_state.history_router.HistoryRouter = (function (routes,routes_chan,base_href,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.base_href = base_href;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k27508,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__27510 = (((k27508 instanceof cljs.core.Keyword))?k27508.fqn:null);
switch (G__27510) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "base-href":
return self__.base_href;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27508,else__25859__auto__);

}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma.app-state.history-router.HistoryRouter{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27507){
var self__ = this;
var G__27507__$1 = this;
return (new cljs.core.RecordIter((0),G__27507__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = ((function (this$__$1){
return (function (href){
return cljs.core.async.put_BANG_.call(null,self__.routes_chan,router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,href,self__.base_href)));
});})(this$__$1))
;
new cljs.core.Keyword(null,"bind","bind",-113428417).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,handler);

cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,location.href,self__.base_href)));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863),handler);
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"unbind","unbind",716905720).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"go","go",-146946655).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params))].join(''));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var click_handler = ((function (this$__$1){
return (function (e){
var temp__4657__auto__ = keechma.app_state.history_router.link_el.call(null,e.target);
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
var href = el.href;
if(cljs.core.truth_((function (){var and__25217__auto__ = keechma.app_state.history_router.current_target_self_QMARK_.call(null,el);
if(cljs.core.truth_(and__25217__auto__)){
var and__25217__auto____$1 = keechma.app_state.history_router.left_button_clicked_QMARK_.call(null,e);
if(cljs.core.truth_(and__25217__auto____$1)){
var and__25217__auto____$2 = cljs.core.not.call(null,keechma.app_state.history_router.mod_key_pressed_QMARK_.call(null,e));
if(and__25217__auto____$2){
return keechma.app_state.history_router.link_has_prefixed_url_QMARK_.call(null,el,self__.base_href);
} else {
return and__25217__auto____$2;
}
} else {
return and__25217__auto____$1;
}
} else {
return and__25217__auto__;
}
})())){
if(cljs.core.truth_(keechma.app_state.history_router.should_href_pass_through_QMARK_.call(null,href))){
return null;
} else {
new cljs.core.Keyword(null,"go","go",-146946655).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,href);

e.preventDefault();

return e.stopPropagation();
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1))
;
return ((function (click_handler,this$__$1){
return (function() { 
var G__27515__delegate = function (children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null)], null),children);
};
var G__27515 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__27516__i = 0, G__27516__a = new Array(arguments.length -  0);
while (G__27516__i < G__27516__a.length) {G__27516__a[G__27516__i] = arguments[G__27516__i + 0]; ++G__27516__i;}
  children = new cljs.core.IndexedSeq(G__27516__a,0);
} 
return G__27515__delegate.call(this,children);};
G__27515.cljs$lang$maxFixedArity = 0;
G__27515.cljs$lang$applyTo = (function (arglist__27517){
var children = cljs.core.seq(arglist__27517);
return G__27515__delegate(children);
});
G__27515.cljs$core$IFn$_invoke$arity$variadic = G__27515__delegate;
return G__27515;
})()
;
;})(click_handler,this$__$1))
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
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

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
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

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"base-href","base-href",564187357),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__27507){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__27511 = cljs.core.keyword_identical_QMARK_;
var expr__27512 = k__25864__auto__;
if(cljs.core.truth_(pred__27511.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__27512))){
return (new keechma.app_state.history_router.HistoryRouter(G__27507,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27511.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__27512))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,G__27507,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27511.call(null,new cljs.core.Keyword(null,"base-href","base-href",564187357),expr__27512))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,G__27507,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27511.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__27512))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,G__27507,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__27507),null));
}
}
}
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__27507){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,G__27507,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma.app_state.history_router.HistoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"base-href","base-href",-2090248412,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$type = true;

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.__GT_HistoryRouter = (function keechma$app_state$history_router$__GT_HistoryRouter(routes,routes_chan,base_href,app_db){
return (new keechma.app_state.history_router.HistoryRouter(routes,routes_chan,base_href,app_db,null,null,null));
});

keechma.app_state.history_router.map__GT_HistoryRouter = (function keechma$app_state$history_router$map__GT_HistoryRouter(G__27509){
return (new keechma.app_state.history_router.HistoryRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__27509),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__27509),new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(G__27509),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__27509),null,cljs.core.dissoc.call(null,G__27509,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302)),null));
});

keechma.app_state.history_router.constructor$ = (function keechma$app_state$history_router$constructor(routes,routes_chan,state){
var base_href = keechma.app_state.history_router.process_base_href.call(null,(function (){var or__25229__auto__ = new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "/";
}
})());
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.history_router.__GT_HistoryRouter.call(null,router.core.expand_routes.call(null,routes),routes_chan,base_href,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=history_router.js.map?rel=1488782228983