// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma_ssr.client.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keechma.ui_component');
goog.require('keechma.controller');
goog.require('keechma.app_state');

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
 * @implements {keechma.controller.IController}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma_ssr.client.app.Counter = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma_ssr.client.app.Counter.prototype.keechma$controller$IController$ = cljs.core.PROTOCOL_SENTINEL;

keechma_ssr.client.app.Counter.prototype.keechma$controller$IController$params$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return true;
});

keechma_ssr.client.app.Counter.prototype.keechma$controller$IController$start$arity$3 = (function (_,params,app_db){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Hello From the Server Side!"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),(1));
});

keechma_ssr.client.app.Counter.prototype.keechma$controller$IController$handler$arity$4 = (function (_,app_db_atom,in_chan,___$1){
var self__ = this;
var ___$2 = this;
return keechma.controller.dispatcher.call(null,app_db_atom,in_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dec","dec",1888433436),((function (___$2){
return (function (){
return cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.dec);
});})(___$2))
,new cljs.core.Keyword(null,"inc","inc",-1316026094),((function (___$2){
return (function (){
return cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(___$2))
], null));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma_ssr.client.app.Counter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k29511,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__29513 = k29511;
switch (G__29513) {
default:
return cljs.core.get.call(null,self__.__extmap,k29511,else__25859__auto__);

}
});

keechma_ssr.client.app.Counter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma-ssr.client.app.Counter{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma_ssr.client.app.Counter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29510){
var self__ = this;
var G__29510__$1 = this;
return (new cljs.core.RecordIter((0),G__29510__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma_ssr.client.app.Counter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma_ssr.client.app.Counter(self__.__meta,self__.__extmap,self__.__hash));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
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

keechma_ssr.client.app.Counter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
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

keechma_ssr.client.app.Counter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma_ssr.client.app.Counter(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma_ssr.client.app.Counter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__29510){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__29514 = cljs.core.keyword_identical_QMARK_;
var expr__29515 = k__25864__auto__;
return (new keechma_ssr.client.app.Counter(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__29510),null));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__29510){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma_ssr.client.app.Counter(G__29510,self__.__extmap,self__.__hash));
});

keechma_ssr.client.app.Counter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma_ssr.client.app.Counter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma_ssr.client.app.Counter.cljs$lang$type = true;

keechma_ssr.client.app.Counter.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma-ssr.client.app/Counter");
});

keechma_ssr.client.app.Counter.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma-ssr.client.app/Counter");
});

keechma_ssr.client.app.__GT_Counter = (function keechma_ssr$client$app$__GT_Counter(){
return (new keechma_ssr.client.app.Counter(null,null,null));
});

keechma_ssr.client.app.map__GT_Counter = (function keechma_ssr$client$app$map__GT_Counter(G__29512){
return (new keechma_ssr.client.app.Counter(null,cljs.core.dissoc.call(null,G__29512),null));
});

keechma_ssr.client.app.counter_value_sub = (function keechma_ssr$client$app$counter_value_sub(app_db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null));
}));
});
keechma_ssr.client.app.message_sub = (function keechma_ssr$client$app$message_sub(app_db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"message","message",-406056002)], null));
}));
});
keechma_ssr.client.app.counter_render = (function keechma_ssr$client$app$counter_render(app_db){
var counter_sub = keechma.ui_component.subscription.call(null,app_db,new cljs.core.Keyword(null,"counter-value","counter-value",-866717862));
return ((function (counter_sub){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,keechma.ui_component.subscription.call(null,app_db,new cljs.core.Keyword(null,"message","message",-406056002)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counter_sub){
return (function (){
return keechma.ui_component.send_command.call(null,app_db,new cljs.core.Keyword(null,"dec","dec",1888433436));
});})(counter_sub))
], null),"Decrement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counter_sub){
return (function (){
return keechma.ui_component.send_command.call(null,app_db,new cljs.core.Keyword(null,"inc","inc",-1316026094));
});})(counter_sub))
], null),"Increment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Count: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,counter_sub))].join('')], null)], null);
});
;})(counter_sub))
});
keechma_ssr.client.app.counter_component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_ssr.client.app.counter_render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter-value","counter-value",-866717862),new cljs.core.Keyword(null,"message","message",-406056002)], null)], null));
keechma_ssr.client.app.definition = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.assoc.call(null,keechma_ssr.client.app.counter_component,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"Counter","Counter",-449960232))], null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Counter","Counter",-449960232),keechma_ssr.client.app.__GT_Counter.call(null)], null),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counter-value","counter-value",-866717862),keechma_ssr.client.app.counter_value_sub,new cljs.core.Keyword(null,"message","message",-406056002),keechma_ssr.client.app.message_sub], null),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"history","history",-247395220)], null);

//# sourceMappingURL=app.js.map?rel=1488783261216