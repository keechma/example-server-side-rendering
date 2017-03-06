// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.ui_component');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.stuartsierra.dependency');
goog.require('keechma.util');
goog.require('clojure.string');
goog.require('clojure.set');

/**
 * IUIComponent protocol defines functions that can be called on
 *   the UIComponent records.
 * @interface
 */
keechma.ui_component.IUIComponent = function(){};

/**
 * Returns a URL based on the params. It will use the `:url-fn` that is injected
 *  from the outside to generate the URL based on the current app routes.
 */
keechma.ui_component.url = (function keechma$ui_component$url(this$,params){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$url$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$url$arity$2(this$,params);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.url[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,params);
} else {
var m__25898__auto____$1 = (keechma.ui_component.url["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.url",this$);
}
}
}
});

keechma.ui_component.report = (function keechma$ui_component$report(var_args){
var args27369 = [];
var len__26342__auto___27378 = arguments.length;
var i__26343__auto___27379 = (0);
while(true){
if((i__26343__auto___27379 < len__26342__auto___27378)){
args27369.push((arguments[i__26343__auto___27379]));

var G__27380 = (i__26343__auto___27379 + (1));
i__26343__auto___27379 = G__27380;
continue;
} else {
}
break;
}

var G__27371 = args27369.length;
switch (G__27371) {
case 3:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27369.length)].join('')));

}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,payload){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$3(this$,name,payload);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.report[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,name,payload);
} else {
var m__25898__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,name,payload);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4 = (function (this$,name,payload,severity){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$4 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$4(this$,name,payload,severity);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.report[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,name,payload,severity);
} else {
var m__25898__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,name,payload,severity);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$lang$maxFixedArity = 4;


/**
 * Redirects page to the URL generated from params
 */
keechma.ui_component.redirect = (function keechma$ui_component$redirect(this$,params){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$redirect$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$redirect$arity$2(this$,params);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.redirect[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,params);
} else {
var m__25898__auto____$1 = (keechma.ui_component.redirect["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.redirect",this$);
}
}
}
});

/**
 * Returns a subscription based on the key.
 */
keechma.ui_component.subscription = (function keechma$ui_component$subscription(var_args){
var args27372 = [];
var len__26342__auto___27382 = arguments.length;
var i__26343__auto___27383 = (0);
while(true){
if((i__26343__auto___27383 < len__26342__auto___27382)){
args27372.push((arguments[i__26343__auto___27383]));

var G__27384 = (i__26343__auto___27383 + (1));
i__26343__auto___27383 = G__27384;
continue;
} else {
}
break;
}

var G__27374 = args27372.length;
switch (G__27374) {
case 2:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27372.length)].join('')));

}
});

keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2 = (function (this$,key){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$subscription$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$subscription$arity$2(this$,key);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,key);
} else {
var m__25898__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.subscription",this$);
}
}
}
});

keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3 = (function (this$,key,args){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$subscription$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$subscription$arity$3(this$,key,args);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,key,args);
} else {
var m__25898__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,key,args);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.subscription",this$);
}
}
}
});

keechma.ui_component.subscription.cljs$lang$maxFixedArity = 3;


/**
 * Returns a component based on the key.
 */
keechma.ui_component.component = (function keechma$ui_component$component(this$,key){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$component$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$component$arity$2(this$,key);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.component[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,key);
} else {
var m__25898__auto____$1 = (keechma.ui_component.component["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.component",this$);
}
}
}
});

/**
 * Sends a command to the controller.
 */
keechma.ui_component.send_command = (function keechma$ui_component$send_command(var_args){
var args27375 = [];
var len__26342__auto___27386 = arguments.length;
var i__26343__auto___27387 = (0);
while(true){
if((i__26343__auto___27387 < len__26342__auto___27386)){
args27375.push((arguments[i__26343__auto___27387]));

var G__27388 = (i__26343__auto___27387 + (1));
i__26343__auto___27387 = G__27388;
continue;
} else {
}
break;
}

var G__27377 = args27375.length;
switch (G__27377) {
case 2:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27375.length)].join('')));

}
});

keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2 = (function (this$,command){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$send_command$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$send_command$arity$2(this$,command);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,command);
} else {
var m__25898__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,command);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.send-command",this$);
}
}
}
});

keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3 = (function (this$,command,args){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$send_command$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$send_command$arity$3(this$,command,args);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,command,args);
} else {
var m__25898__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,command,args);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.send-command",this$);
}
}
}
});

keechma.ui_component.send_command.cljs$lang$maxFixedArity = 3;


/**
 * Returns a component renderer function that has the component record
 *  partially applied (`ctx`) as the first argument.
 */
keechma.ui_component.renderer = (function keechma$ui_component$renderer(this$){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$renderer$arity$1 == null)))){
return this$.keechma$ui_component$IUIComponent$renderer$arity$1(this$);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.renderer[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$);
} else {
var m__25898__auto____$1 = (keechma.ui_component.renderer["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.renderer",this$);
}
}
}
});

/**
 * Returns a current route data. It will use the `:current-route-fn` that is
 *  injected from the outside to return the data.
 */
keechma.ui_component.current_route = (function keechma$ui_component$current_route(this$){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$current_route$arity$1 == null)))){
return this$.keechma$ui_component$IUIComponent$current_route$arity$1(this$);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.ui_component.current_route[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$);
} else {
var m__25898__auto____$1 = (keechma.ui_component.current_route["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IUIComponent.current-route",this$);
}
}
}
});

(keechma.ui_component.IUIComponent["_"] = true);

(keechma.ui_component.url["_"] = (function (this$,params){
var url_fn = new cljs.core.Keyword(null,"url-fn","url-fn",1228268268).cljs$core$IFn$_invoke$arity$1(this$);
return url_fn.call(null,params);
}));

(keechma.ui_component.report["_"] = (function() {
var G__27390 = null;
var G__27390__3 = (function (this$,name,payload){
return keechma.ui_component.report.call(null,this$,name,payload,new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__27390__4 = (function (this$,name,payload,severity){
var reporter = (function (){var or__25229__auto__ = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return ((function (or__25229__auto__){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6){
return null;
});
;})(or__25229__auto__))
}
})();
return reporter.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(this$),name], null),payload,severity);
});
G__27390 = function(this$,name,payload,severity){
switch(arguments.length){
case 3:
return G__27390__3.call(this,this$,name,payload);
case 4:
return G__27390__4.call(this,this$,name,payload,severity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27390.cljs$core$IFn$_invoke$arity$3 = G__27390__3;
G__27390.cljs$core$IFn$_invoke$arity$4 = G__27390__4;
return G__27390;
})()
);

(keechma.ui_component.redirect["_"] = (function (this$,params){
return new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(this$).call(null,params);
}));

(keechma.ui_component.current_route["_"] = (function (this$){
var current_route_fn = new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302).cljs$core$IFn$_invoke$arity$1(this$);
return current_route_fn.call(null);
}));

(keechma.ui_component.subscription["_"] = (function() {
var G__27391 = null;
var G__27391__2 = (function (this$,key){
return keechma.ui_component.subscription.call(null,this$,key,cljs.core.PersistentVector.EMPTY);
});
var G__27391__3 = (function (this$,key,args){
var subscription = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),key], null));
if((subscription == null)){
throw Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't resolve the subscription with key: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
} else {
return cljs.core.apply.call(null,subscription,args);
}
});
G__27391 = function(this$,key,args){
switch(arguments.length){
case 2:
return G__27391__2.call(this,this$,key);
case 3:
return G__27391__3.call(this,this$,key,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27391.cljs$core$IFn$_invoke$arity$2 = G__27391__2;
G__27391.cljs$core$IFn$_invoke$arity$3 = G__27391__3;
return G__27391;
})()
);

(keechma.ui_component.component["_"] = (function (this$,key){
return cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),key], null));
}));

(keechma.ui_component.send_command["_"] = (function() {
var G__27392 = null;
var G__27392__2 = (function (this$,command){
return keechma.ui_component.send_command.call(null,this$,command,null);
});
var G__27392__3 = (function (this$,command,args){
keechma.ui_component.report.call(null,this$,command,args);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(this$),command], null),args], null));

return null;
});
G__27392 = function(this$,command,args){
switch(arguments.length){
case 2:
return G__27392__2.call(this,this$,command);
case 3:
return G__27392__3.call(this,this$,command,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27392.cljs$core$IFn$_invoke$arity$2 = G__27392__2;
G__27392.cljs$core$IFn$_invoke$arity$3 = G__27392__3;
return G__27392;
})()
);

(keechma.ui_component.renderer["_"] = (function (this$){
var child_renderers = cljs.core.reduce_kv.call(null,(function (c,k,v){
return cljs.core.assoc.call(null,c,k,keechma.ui_component.component__GT_renderer.call(null,this$,v));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(this$));
var subscriptions = cljs.core.reduce_kv.call(null,((function (child_renderers){
return (function (s,k,v){
return cljs.core.assoc.call(null,s,k,cljs.core.partial.call(null,v,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(this$)));
});})(child_renderers))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(this$));
return cljs.core.partial.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc.call(null,cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),subscriptions),new cljs.core.Keyword(null,"components","components",-1073188942),child_renderers));
}));

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
 * @implements {keechma.ui_component.IUIComponent}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.ui_component.UIComponent = (function (component_deps,subscription_deps,renderer,__meta,__extmap,__hash){
this.component_deps = component_deps;
this.subscription_deps = subscription_deps;
this.renderer = renderer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k27394,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__27396 = (((k27394 instanceof cljs.core.Keyword))?k27394.fqn:null);
switch (G__27396) {
case "component-deps":
return self__.component_deps;

break;
case "subscription-deps":
return self__.subscription_deps;

break;
case "renderer":
return self__.renderer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27394,else__25859__auto__);

}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma.ui-component.UIComponent{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma.ui_component.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27393){
var self__ = this;
var G__27393__$1 = this;
return (new cljs.core.RecordIter((0),G__27393__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.Keyword(null,"renderer","renderer",336841071)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
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

keechma.ui_component.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
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

keechma.ui_component.UIComponent.prototype.keechma$ui_component$IUIComponent$ = cljs.core.PROTOCOL_SENTINEL;

keechma.ui_component.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),null], null), null),k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__27393){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__27397 = cljs.core.keyword_identical_QMARK_;
var expr__27398 = k__25864__auto__;
if(cljs.core.truth_(pred__27397.call(null,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),expr__27398))){
return (new keechma.ui_component.UIComponent(G__27393,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27397.call(null,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),expr__27398))){
return (new keechma.ui_component.UIComponent(self__.component_deps,G__27393,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27397.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__27398))){
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,G__27393,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__27393),null));
}
}
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__27393){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,G__27393,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma.ui_component.UIComponent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-deps","component-deps",1234815365,null),new cljs.core.Symbol(null,"subscription-deps","subscription-deps",-856403448,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null)], null);
});

keechma.ui_component.UIComponent.cljs$lang$type = true;

keechma.ui_component.UIComponent.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.ui-component/UIComponent");
});

keechma.ui_component.UIComponent.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma.ui-component/UIComponent");
});

keechma.ui_component.__GT_UIComponent = (function keechma$ui_component$__GT_UIComponent(component_deps,subscription_deps,renderer){
return (new keechma.ui_component.UIComponent(component_deps,subscription_deps,renderer,null,null,null));
});

keechma.ui_component.map__GT_UIComponent = (function keechma$ui_component$map__GT_UIComponent(G__27395){
return (new keechma.ui_component.UIComponent(new cljs.core.Keyword(null,"component-deps","component-deps",-405716162).cljs$core$IFn$_invoke$arity$1(G__27395),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321).cljs$core$IFn$_invoke$arity$1(G__27395),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__27395),null,cljs.core.dissoc.call(null,G__27395,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.Keyword(null,"renderer","renderer",336841071)),null));
});

keechma.ui_component.component_dep_graph = (function keechma$ui_component$component_dep_graph(components){
return cljs.core.reduce_kv.call(null,(function (graph,k,v){
if(!(cljs.core.fn_QMARK_.call(null,v))){
var component_deps = new cljs.core.Keyword(null,"component-deps","component-deps",-405716162).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(keechma.util.in_QMARK_.call(null,component_deps,new cljs.core.Keyword(null,"main","main",-2117802661)))){
throw Error("Nothing can depend on the :main component!");
} else {
return cljs.core.reduce.call(null,((function (component_deps){
return (function (p1__27401_SHARP_,p2__27402_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__27401_SHARP_,k,p2__27402_SHARP_);
});})(component_deps))
,graph,component_deps);
}
} else {
return graph;
}
}),com.stuartsierra.dependency.graph.call(null),components);
});
keechma.ui_component.missing_component_deps = (function keechma$ui_component$missing_component_deps(components){
return cljs.core.reduce_kv.call(null,(function (missing,k,v){
if((v == null)){
return cljs.core.conj.call(null,missing,k);
} else {
return missing;
}
}),cljs.core.PersistentVector.EMPTY,components);
});
keechma.ui_component.component_with_deps = (function keechma$ui_component$component_with_deps(component_key,component,system){
var dep_keys = new cljs.core.Keyword(null,"component-deps","component-deps",-405716162).cljs$core$IFn$_invoke$arity$1(component);
if(!(cljs.core.empty_QMARK_.call(null,dep_keys))){
var components = cljs.core.select_keys.call(null,system,dep_keys);
var missing_deps = keechma.ui_component.missing_component_deps.call(null,components);
if(!(cljs.core.empty_QMARK_.call(null,missing_deps))){
throw Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing dependencies "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",missing_deps)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for component "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key)].join(''));
} else {
return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"components","components",-1073188942),components,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),cljs.core.PersistentVector.EMPTY);
}
} else {
return component;
}
});
/**
 * Resolves a dependency on the UIComponent record. Returns a new version
 *   of the record with the resolved dependency.
 * 
 *   ```clojure
 *   (def news-component (constructor {:component-deps [:user-profile :similar-news]
 *                                  :subscription-deps [:current-news :comments]}))
 * 
 *   (resolve-dep :subscription-deps :subscriptions news-component :current-news (fn []...))
 *   ;; Returns a new version of the `news-component` with the :current-news subscription resolved
 * 
 *   (resolve-dep :component-deps :components news-component :user-profile user-profile-component))
 *   ;; Returns a new version of the `news-component` with the :user-profile component resolved
 *   ```
 * 
 *   Two shorthand functions are defined that allow you to omit first two arguments:
 *   
 *   - `resolve-subscription-dep` - Resolves a subscription dependency
 *   - `resolve-component-dep` - Resolves a component dependency
 *   
 */
keechma.ui_component.resolve_dep = (function keechma$ui_component$resolve_dep(dep_kw,coll_kw,component,key,component_dep){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_kw,key], null),component_dep),dep_kw,keechma.util.without.call(null,dep_kw.call(null,component),key));
});
/**
 * See [[resolve-dep]].
 */
keechma.ui_component.resolve_subscription_dep = cljs.core.partial.call(null,keechma.ui_component.resolve_dep,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
/**
 * See [[resolve-dep]]
 */
keechma.ui_component.resolve_component_dep = cljs.core.partial.call(null,keechma.ui_component.resolve_dep,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.Keyword(null,"components","components",-1073188942));
keechma.ui_component.resolved_system = (function keechma$ui_component$resolved_system(components,sorted_keys){
return cljs.core.reduce.call(null,(function (system,key){
var component = cljs.core.get.call(null,system,key);
if(cljs.core.fn_QMARK_.call(null,component)){
return cljs.core.assoc.call(null,system,key,component);
} else {
return cljs.core.assoc.call(null,system,key,keechma.ui_component.component_with_deps.call(null,key,component,system));
}
}),components,sorted_keys);
});
keechma.ui_component.resolve_component_subscriptions = (function keechma$ui_component$resolve_component_subscriptions(component,subscriptions){
return cljs.core.reduce.call(null,(function (c,dep){
var sub = cljs.core.get.call(null,subscriptions,dep);
if((sub == null)){
throw Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing subscription: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''));
} else {
return keechma.ui_component.resolve_subscription_dep.call(null,c,dep,sub);
}
}),component,(function (){var or__25229__auto__ = new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});
keechma.ui_component.resolve_subscriptions = (function keechma$ui_component$resolve_subscriptions(components,subscriptions){
return cljs.core.reduce_kv.call(null,(function (components__$1,k,c){
return cljs.core.assoc.call(null,components__$1,k,keechma.ui_component.resolve_component_subscriptions.call(null,c,subscriptions));
}),cljs.core.PersistentArrayMap.EMPTY,components);
});
keechma.ui_component.assoc_name = (function keechma$ui_component$assoc_name(components){
return cljs.core.reduce_kv.call(null,(function (components__$1,k,c){
return cljs.core.assoc.call(null,components__$1,k,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"name","name",1843675177),k));
}),cljs.core.PersistentArrayMap.EMPTY,components);
});
keechma.ui_component.component__GT_renderer = (function keechma$ui_component$component__GT_renderer(parent,component){
return keechma.ui_component.renderer.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973),new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"url-fn","url-fn",1228268268),new cljs.core.Keyword(null,"url-fn","url-fn",1228268268).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302),new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(parent)));
});
/**
 * Creates a component system.
 * 
 *   Component system is a group of components that are interdependent. Each component
 *   system must define a `:main` component which will be returned from the `system`
 *   function.
 * 
 *   `system` function resolves dependencies between components.
 * 
 *   For example, let's say that your application consists of three components:
 * 
 *   - layout
 *   - sidebar
 *   - chat room list
 * 
 *   Layout is rendering the sidebar component and sidebar component is rendering the 
 *   chat room list component.
 * 
 *   Chat room list component has a subscription dependency on `:chat-rooms` which will
 *   return the list of chat rooms to render.
 * 
 *   Usually you would either pass the chat rooms subscription from layout to sidebar to the
 *   chat room list component, or the chat room list component would have a dependency
 *   on a global `:chat-rooms` subscription.
 * 
 *   Keechma allows you to avoid both of these problems:
 * 
 *   - only the chat room list component will know about it's dependencies
 *   - the dependencies will be injected from the outside by the `system` function 
 * 
 *   ```clojure
 *   (defn layout-renderer [ctx] ;; ctx is `layout-component` record with resolved dependencies
 *   [:div.main
 *   [:div.sidebar [(component ctx :sidebar)]]]) ;; Resolve the `:sidebar` component
 * 
 *   (def layout-component (constructor {:component-deps [:sidebar]
 *   :renderer layout-renderer}))
 * 
 *   (defn sidebar-renderer [ctx]
 *   [:div.sidebar
 *   [(component ctx :chat-room-list)]) ;; Resolve the `:chat-room-list` component
 * 
 *   (def sidebar-component (constructor {:component-deps [:chat-room-list]
 *   :renderer sidebar-renderer}))
 * 
 *   (defn chat-room-list-renderer [ctx]
 *   (let [chat-rooms (subscription ctx :chat-rooms)])) ;; Resolve the `:chat-rooms` subscription
 * 
 *   (def chat-room-list-component (constructor {:subscription-deps [:chat-rooms]}))
 * 
 *   (def main-component (system {:main layout-component ;; Map compnents to keys
 *   :sidebar sidebar-component
 *   :chat-room-list chat-room-list-component}
 *   {:chat-rooms (fn [app-state-atom])})) ;; Map subscriptions to keys
 *   ```
 *   
 *   In the example above `main-component` will be a Reagent component that can be mounted
 *   into the DOM, with all of the dependencies between components resolved.
 * 
 *   `system` function provided everything that components need from the outside, and all of the 
 *   components are reusable by design.
 *   
 */
keechma.ui_component.system = (function keechma$ui_component$system(var_args){
var args27403 = [];
var len__26342__auto___27406 = arguments.length;
var i__26343__auto___27407 = (0);
while(true){
if((i__26343__auto___27407 < len__26342__auto___27406)){
args27403.push((arguments[i__26343__auto___27407]));

var G__27408 = (i__26343__auto___27407 + (1));
i__26343__auto___27407 = G__27408;
continue;
} else {
}
break;
}

var G__27405 = args27403.length;
switch (G__27405) {
case 1:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27403.length)].join('')));

}
});

keechma.ui_component.system.cljs$core$IFn$_invoke$arity$1 = (function (components){
return keechma.ui_component.system.call(null,components,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2 = (function (components,subscriptions){
if((new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(components) == null)){
throw Error("System must have a :main component!");
} else {
var graph = keechma.ui_component.component_dep_graph.call(null,components);
var sorted_keys = com.stuartsierra.dependency.topo_sort.call(null,graph);
var components_with_resolved_deps = keechma.ui_component.resolve_subscriptions.call(null,keechma.ui_component.assoc_name.call(null,components),subscriptions);
return new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(keechma.ui_component.resolved_system.call(null,components_with_resolved_deps,sorted_keys));
}
});

keechma.ui_component.system.cljs$lang$maxFixedArity = 2;

/**
 * Createas a UIComponent record. Accepts `opts` as the argument. `opts` is
 *   a map that can have the following params:
 * 
 *   - `:component-deps` - Which child component is this component dependent on
 *   - `:subscription-deps` - Which subscriptions is this component dependent on
 *   - `:topic` - On which topic should this component send commands (to the controller)
 *   - `:renderer` - A renderer function (Reagent component)
 * 
 *   The UIComponent record is a way to list all the dependencies for a component. When
 *   the application is started each component's renderer function will be partiall 
 *   applied with a verion of it's UIComponent that has the component and subscription
 *   dependencies resolved.
 * 
 *   This allows you to write components that are completely decoupled from the rest
 *   of the application.
 * 
 *   When you want to resolve injected component or subscription dependencies, you can
 *   use the functions defined on the `UIComponent` protocol:
 * 
 *   ```clojure
 *   (def render [ctx] ;; `ctx` is a UIComponent with resolved dependencies
 *  (let [child-component (component ctx :component-key)
 *        subscription (subscription ctx :subscription-key)])
 * 
 *   (def component (constructor {:renderer render
 *                             :component-deps [:component-key]
 *                             :subscription-deps [:subscription-key]))
 *   ```
 *   
 */
keechma.ui_component.constructor$ = (function keechma$ui_component$constructor(opts){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MISSING RENDERER!"], null);
})], null);
return keechma.ui_component.map__GT_UIComponent.call(null,cljs.core.merge.call(null,defaults,opts));
});

//# sourceMappingURL=ui_component.js.map?rel=1488782228513