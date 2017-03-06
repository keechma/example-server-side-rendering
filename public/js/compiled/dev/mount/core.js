// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('mount.core');
goog.require('cljs.core');
goog.require('mount.tools.macro');
goog.require('clojure.set');
goog.require('mount.tools.logger');
if(typeof mount.core._args !== 'undefined'){
} else {
mount.core._args = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof mount.core.state_seq !== 'undefined'){
} else {
mount.core.state_seq = cljs.core.atom.call(null,(0));
}
if(typeof mount.core.mode !== 'undefined'){
} else {
mount.core.mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428));
}
if(typeof mount.core.meta_state !== 'undefined'){
} else {
mount.core.meta_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof mount.core.running !== 'undefined'){
} else {
mount.core.running = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mount.core.make_state_seq = (function mount$core$make_state_seq(state){
var or__25229__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state));
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.swap_BANG_.call(null,mount.core.state_seq,cljs.core.inc);
}
});

/**
* @constructor
 * @implements {mount.core.Object}
*/
mount.core.NotStartedState = (function (state){
this.state = state;
})
mount.core.NotStartedState.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.state),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' is not started (to start all the states call mount/start)")].join('');
});

mount.core.NotStartedState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

mount.core.NotStartedState.cljs$lang$type = true;

mount.core.NotStartedState.cljs$lang$ctorStr = "mount.core/NotStartedState";

mount.core.NotStartedState.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"mount.core/NotStartedState");
});

mount.core.__GT_NotStartedState = (function mount$core$__GT_NotStartedState(state){
return (new mount.core.NotStartedState(state));
});

mount.core.validate = (function mount$core$validate(p__29107){
var map__29110 = p__29107;
var map__29110__$1 = ((((!((map__29110 == null)))?((((map__29110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29110):map__29110);
var lifecycle = map__29110__$1;
var start = cljs.core.get.call(null,map__29110__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__29110__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var suspend = cljs.core.get.call(null,map__29110__$1,new cljs.core.Keyword(null,"suspend","suspend",849690959));
var resume = cljs.core.get.call(null,map__29110__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
if(cljs.core.not.call(null,start)){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1("can't start a stateful thing without a start function. (i.e. missing :start fn)")].join('');
} else {
if(cljs.core.truth_((function (){var or__25229__auto__ = suspend;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return resume;
}
})())){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1("suspend / resume lifecycle support was removed in \"0.1.10\" in favor of (mount/stop-except)")].join('');
} else {
return null;
}
}
});
mount.core.with_ns = (function mount$core$with_ns(ns,name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
mount.core.pounded_QMARK_ = (function mount$core$pounded_QMARK_(f){
var pound = "(fn* [] ";
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('').startsWith(pound);
});
mount.core.unpound = (function mount$core$unpound(f){
if(cljs.core.truth_(mount.core.pounded_QMARK_.call(null,f))){
return cljs.core.nth.call(null,f,(2));
} else {
return f;
}
});
/**
 * in case a namespace is recompiled without calling (mount/stop),
 * a running state instance will still be running.
 * this function stops this 'lost' state instance.
 * it is meant to be called by defstate before defining a new state
 */
mount.core.cleanup_if_dirty = (function mount$core$cleanup_if_dirty(state,reason){
var temp__4657__auto__ = cljs.core.deref.call(null,mount.core.running).call(null,state);
if(cljs.core.truth_(temp__4657__auto__)){
var map__29114 = temp__4657__auto__;
var map__29114__$1 = ((((!((map__29114 == null)))?((((map__29114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29114):map__29114);
var up = map__29114__$1;
var stop = cljs.core.get.call(null,map__29114__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(stop)){
mount.tools.logger.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<< stopping.. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reason)].join(''));

stop.call(null);
} else {
}

return cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);
} else {
return null;
}
});
mount.core.current_state = (function mount$core$current_state(state){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"inst","inst",645962501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)));
});
mount.core.alter_state_BANG_ = (function mount$core$alter_state_BANG_(p__29116,value){
var map__29119 = p__29116;
var map__29119__$1 = ((((!((map__29119 == null)))?((((map__29119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29119):map__29119);
var inst = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
return cljs.core.reset_BANG_.call(null,inst,value);
});
mount.core.update_meta_BANG_ = (function mount$core$update_meta_BANG_(path,v){
return cljs.core.swap_BANG_.call(null,mount.core.meta_state,cljs.core.assoc_in,path,v);
});
mount.core.record_BANG_ = (function mount$core$record_BANG_(state_name,f,done){
var state = f.call(null);
cljs.core.swap_BANG_.call(null,done,cljs.core.conj,state_name);

return state;
});
mount.core.up = (function mount$core$up(state,p__29121,done){
var map__29125 = p__29121;
var map__29125__$1 = ((((!((map__29125 == null)))?((((map__29125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29125):map__29125);
var current = map__29125__$1;
var start = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
return null;
} else {
var s = (function (){try{return mount.core.record_BANG_.call(null,state,start,done);
}catch (e29127){var t__28832__auto__ = e29127;
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("could not start ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1("] due to")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__28832__auto__)].join('');
}})();
mount.core.alter_state_BANG_.call(null,current,s);

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.assoc,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),stop], null));

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null));
}
});
mount.core.down = (function mount$core$down(state,p__29128,done){
var map__29132 = p__29128;
var map__29132__$1 = ((((!((map__29132 == null)))?((((map__29132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29132):map__29132);
var current = map__29132__$1;
var stop = cljs.core.get.call(null,map__29132__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__29132__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(cljs.core.some.call(null,status,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null)))){
if(cljs.core.truth_(stop)){
try{mount.core.record_BANG_.call(null,state,stop,done);
}catch (e29134){var t__28832__auto___29135 = e29134;
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("could not stop ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1("] due to")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__28832__auto___29135)].join('');
}} else {
}

mount.core.alter_state_BANG_.call(null,current,(new mount.core.NotStartedState(state)));

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
mount.core.DerefableState = (function (name){
this.name = name;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mount.core.DerefableState.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__29136 = cljs.core.deref.call(null,mount.core.meta_state).call(null,self__.name);
var map__29136__$1 = ((((!((map__29136 == null)))?((((map__29136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29136):map__29136);
var state = map__29136__$1;
var status = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
} else {
mount.core.up.call(null,self__.name,state,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));
}

return cljs.core.deref.call(null,inst);
});

mount.core.DerefableState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

mount.core.DerefableState.cljs$lang$type = true;

mount.core.DerefableState.cljs$lang$ctorStr = "mount.core/DerefableState";

mount.core.DerefableState.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"mount.core/DerefableState");
});

mount.core.__GT_DerefableState = (function mount$core$__GT_DerefableState(name){
return (new mount.core.DerefableState(name));
});

mount.core.on_reload_meta = (function mount$core$on_reload_meta(s_var){
var or__25229__auto__ = new cljs.core.Keyword(null,"on-reload","on-reload",869927793).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s_var));
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return new cljs.core.Keyword(null,"restart","restart",-1779883612);
}
});
mount.core.mount_it = (function mount$core$mount_it(s_var,s_name,s_meta){
var with_inst = cljs.core.assoc.call(null,s_meta,new cljs.core.Keyword(null,"inst","inst",645962501),cljs.core.atom.call(null,(new mount.core.NotStartedState(s_name))),new cljs.core.Keyword(null,"var","var",-769682797),s_var);
var on_reload = mount.core.on_reload_meta.call(null,s_var);
var existing_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noop","noop",-673731258),on_reload))?null:mount.core.cleanup_if_dirty.call(null,s_name,"(namespace was recompiled)"));
mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name], null),with_inst);

if(cljs.core.truth_((function (){var and__25217__auto__ = existing_QMARK_;
if(cljs.core.truth_(and__25217__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"restart","restart",-1779883612),on_reload);
} else {
return and__25217__auto__;
}
})())){
mount.tools.logger.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(">> starting.. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (namespace was recompiled)")].join(''));

return mount.core.up.call(null,s_name,with_inst,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));
} else {
return null;
}
});
mount.core.in_cljc_mode = (function mount$core$in_cljc_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"cljc","cljc",-1728400583));
});
mount.core.in_clj_mode = (function mount$core$in_clj_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"clj","clj",-660495428));
});
mount.core.args = (function mount$core$args(){
return cljs.core.deref.call(null,mount.core._args);
});
mount.core.find_all_states = (function mount$core$find_all_states(){
return cljs.core.keys.call(null,cljs.core.deref.call(null,mount.core.meta_state));
});
mount.core.var_to_str = (function mount$core$var_to_str(v){
if((v instanceof cljs.core.Var)){
var map__29140 = cljs.core.meta.call(null,v);
var map__29140__$1 = ((((!((map__29140 == null)))?((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29140):map__29140);
var ns = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return mount.core.with_ns.call(null,ns,name);
} else {
return v;
}
});
mount.core.running_states = (function mount$core$running_states(){
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,mount.core.running)));
});
mount.core.unvar_state = (function mount$core$unvar_state(s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(2),s));
});
mount.core.bring = (function mount$core$bring(states,fun,order){
var done = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var $_29162 = states;
var $_29163__$1 = cljs.core.map.call(null,mount.core.var_to_str,$_29162);
var $_29164__$2 = cljs.core.select_keys.call(null,cljs.core.deref.call(null,mount.core.meta_state),$_29163__$1);
var $_29165__$3 = cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.val),order,$_29164__$2);
var seq__29152_29166 = cljs.core.seq.call(null,$_29165__$3);
var chunk__29153_29167 = null;
var count__29154_29168 = (0);
var i__29155_29169 = (0);
while(true){
if((i__29155_29169 < count__29154_29168)){
var vec__29156_29170 = cljs.core._nth.call(null,chunk__29153_29167,i__29155_29169);
var k_29171 = cljs.core.nth.call(null,vec__29156_29170,(0),null);
var v_29172 = cljs.core.nth.call(null,vec__29156_29170,(1),null);
fun.call(null,k_29171,v_29172,done);

var G__29173 = seq__29152_29166;
var G__29174 = chunk__29153_29167;
var G__29175 = count__29154_29168;
var G__29176 = (i__29155_29169 + (1));
seq__29152_29166 = G__29173;
chunk__29153_29167 = G__29174;
count__29154_29168 = G__29175;
i__29155_29169 = G__29176;
continue;
} else {
var temp__4657__auto___29177 = cljs.core.seq.call(null,seq__29152_29166);
if(temp__4657__auto___29177){
var seq__29152_29178__$1 = temp__4657__auto___29177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29152_29178__$1)){
var c__26048__auto___29179 = cljs.core.chunk_first.call(null,seq__29152_29178__$1);
var G__29180 = cljs.core.chunk_rest.call(null,seq__29152_29178__$1);
var G__29181 = c__26048__auto___29179;
var G__29182 = cljs.core.count.call(null,c__26048__auto___29179);
var G__29183 = (0);
seq__29152_29166 = G__29180;
chunk__29153_29167 = G__29181;
count__29154_29168 = G__29182;
i__29155_29169 = G__29183;
continue;
} else {
var vec__29159_29184 = cljs.core.first.call(null,seq__29152_29178__$1);
var k_29185 = cljs.core.nth.call(null,vec__29159_29184,(0),null);
var v_29186 = cljs.core.nth.call(null,vec__29159_29184,(1),null);
fun.call(null,k_29185,v_29186,done);

var G__29187 = cljs.core.next.call(null,seq__29152_29178__$1);
var G__29188 = null;
var G__29189 = (0);
var G__29190 = (0);
seq__29152_29166 = G__29187;
chunk__29153_29167 = G__29188;
count__29154_29168 = G__29189;
i__29155_29169 = G__29190;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,done);
});
/**
 * merges with overriding _certain_ non existing keys.
 * i.e. :stop is in a 'state', but not in a 'substitute': it should be overriden with nil
 *      however other keys of 'state' (such as :ns,:name,:order) should not be overriden
 */
mount.core.merge_lifecycles = (function mount$core$merge_lifecycles(var_args){
var args29191 = [];
var len__26342__auto___29197 = arguments.length;
var i__26343__auto___29198 = (0);
while(true){
if((i__26343__auto___29198 < len__26342__auto___29197)){
args29191.push((arguments[i__26343__auto___29198]));

var G__29199 = (i__26343__auto___29198 + (1));
i__26343__auto___29198 = G__29199;
continue;
} else {
}
break;
}

var G__29193 = args29191.length;
switch (G__29193) {
case 2:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29191.length)].join('')));

}
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2 = (function (state,sub){
return mount.core.merge_lifecycles.call(null,state,null,sub);
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3 = (function (state,origin,p__29194){
var map__29195 = p__29194;
var map__29195__$1 = ((((!((map__29195 == null)))?((((map__29195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);
var start = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop);
});

mount.core.merge_lifecycles.cljs$lang$maxFixedArity = 3;

mount.core.rollback_BANG_ = (function mount$core$rollback_BANG_(state){
var map__29203 = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var map__29203__$1 = ((((!((map__29203 == null)))?((((map__29203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var sub = map__29203__$1;
var origin = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core.truth_(origin)){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,sub,origin));
} else {
return null;
}
});
mount.core.substitute_BANG_ = (function mount$core$substitute_BANG_(state,with$,mode){
var lifecycle_fns = (function (p1__29205_SHARP_){
return cljs.core.select_keys.call(null,p1__29205_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"status","status",-1997798413)], null));
});
var origin = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var sub = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217),mode))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),((function (lifecycle_fns,origin){
return (function (){
return with$;
});})(lifecycle_fns,origin))
,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null):cljs.core.assoc.call(null,with$,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)));
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,origin,lifecycle_fns.call(null,origin),sub));
});
mount.core.unsub = (function mount$core$unsub(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sub?","sub?",768712042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)))){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"sub?","sub?",768712042)], null),null);
} else {
return null;
}
});
mount.core.all_without_subs = (function mount$core$all_without_subs(){
return cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"sub?","sub?",768712042),cljs.core.deref.call(null,mount.core.meta_state)),mount.core.find_all_states.call(null));
});
mount.core.start = (function mount$core$start(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29207 = arguments.length;
var i__26343__auto___29208 = (0);
while(true){
if((i__26343__auto___29208 < len__26342__auto___29207)){
args__26349__auto__.push((arguments[i__26343__auto___29208]));

var G__29209 = (i__26343__auto___29208 + (1));
i__26343__auto___29208 = G__29209;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return mount.core.start.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

mount.core.start.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first.call(null,states);
if(cljs.core.coll_QMARK_.call(null,fs)){
if(!(cljs.core.empty_QMARK_.call(null,fs))){
return cljs.core.apply.call(null,mount.core.start,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__25229__auto__ = cljs.core.seq.call(null,states);
if(or__25229__auto__){
return or__25229__auto__;
} else {
return mount.core.all_without_subs.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),mount.core.bring.call(null,states__$1,mount.core.up,cljs.core._LT_)], null);
}
});

mount.core.start.cljs$lang$maxFixedArity = (0);

mount.core.start.cljs$lang$applyTo = (function (seq29206){
return mount.core.start.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29206));
});

mount.core.stop = (function mount$core$stop(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29211 = arguments.length;
var i__26343__auto___29212 = (0);
while(true){
if((i__26343__auto___29212 < len__26342__auto___29211)){
args__26349__auto__.push((arguments[i__26343__auto___29212]));

var G__29213 = (i__26343__auto___29212 + (1));
i__26343__auto___29212 = G__29213;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return mount.core.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

mount.core.stop.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first.call(null,states);
if(cljs.core.coll_QMARK_.call(null,fs)){
if(!(cljs.core.empty_QMARK_.call(null,fs))){
return cljs.core.apply.call(null,mount.core.stop,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__25229__auto__ = cljs.core.seq.call(null,states);
if(or__25229__auto__){
return or__25229__auto__;
} else {
return mount.core.find_all_states.call(null);
}
})();
var _ = cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.unsub,states__$1));
var stopped = mount.core.bring.call(null,states__$1,mount.core.down,cljs.core._GT_);
cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.rollback_BANG_,states__$1));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),stopped], null);
}
});

mount.core.stop.cljs$lang$maxFixedArity = (0);

mount.core.stop.cljs$lang$applyTo = (function (seq29210){
return mount.core.stop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29210));
});

mount.core.mapset = (function mount$core$mapset(f,xs){
return cljs.core.set.call(null,cljs.core.map.call(null,f,xs));
});
mount.core.only = (function mount$core$only(var_args){
var args29214 = [];
var len__26342__auto___29217 = arguments.length;
var i__26343__auto___29218 = (0);
while(true){
if((i__26343__auto___29218 < len__26342__auto___29217)){
args29214.push((arguments[i__26343__auto___29218]));

var G__29219 = (i__26343__auto___29218 + (1));
i__26343__auto___29218 = G__29219;
continue;
} else {
}
break;
}

var G__29216 = args29214.length;
switch (G__29216) {
case 1:
return mount.core.only.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.only.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29214.length)].join('')));

}
});

mount.core.only.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.only.call(null,mount.core.find_all_states.call(null),states);
});

mount.core.only.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return clojure.set.intersection.call(null,mount.core.mapset.call(null,mount.core.var_to_str,these),mount.core.mapset.call(null,mount.core.var_to_str,states));
});

mount.core.only.cljs$lang$maxFixedArity = 2;

mount.core.with_args = (function mount$core$with_args(var_args){
var args29221 = [];
var len__26342__auto___29224 = arguments.length;
var i__26343__auto___29225 = (0);
while(true){
if((i__26343__auto___29225 < len__26342__auto___29224)){
args29221.push((arguments[i__26343__auto___29225]));

var G__29226 = (i__26343__auto___29225 + (1));
i__26343__auto___29225 = G__29226;
continue;
} else {
}
break;
}

var G__29223 = args29221.length;
switch (G__29223) {
case 1:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29221.length)].join('')));

}
});

mount.core.with_args.cljs$core$IFn$_invoke$arity$1 = (function (args){
return mount.core.with_args.call(null,mount.core.find_all_states.call(null),args);
});

mount.core.with_args.cljs$core$IFn$_invoke$arity$2 = (function (states,args){
cljs.core.reset_BANG_.call(null,mount.core._args,args);

return states;
});

mount.core.with_args.cljs$lang$maxFixedArity = 2;

mount.core.except = (function mount$core$except(var_args){
var args29228 = [];
var len__26342__auto___29231 = arguments.length;
var i__26343__auto___29232 = (0);
while(true){
if((i__26343__auto___29232 < len__26342__auto___29231)){
args29228.push((arguments[i__26343__auto___29232]));

var G__29233 = (i__26343__auto___29232 + (1));
i__26343__auto___29232 = G__29233;
continue;
} else {
}
break;
}

var G__29230 = args29228.length;
switch (G__29230) {
case 1:
return mount.core.except.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.except.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29228.length)].join('')));

}
});

mount.core.except.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.except.call(null,mount.core.find_all_states.call(null),states);
});

mount.core.except.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return cljs.core.remove.call(null,mount.core.mapset.call(null,mount.core.var_to_str,these),mount.core.mapset.call(null,mount.core.var_to_str,states));
});

mount.core.except.cljs$lang$maxFixedArity = 2;

mount.core.swap = (function mount$core$swap(var_args){
var args29235 = [];
var len__26342__auto___29248 = arguments.length;
var i__26343__auto___29249 = (0);
while(true){
if((i__26343__auto___29249 < len__26342__auto___29248)){
args29235.push((arguments[i__26343__auto___29249]));

var G__29250 = (i__26343__auto___29249 + (1));
i__26343__auto___29249 = G__29250;
continue;
} else {
}
break;
}

var G__29237 = args29235.length;
switch (G__29237) {
case 1:
return mount.core.swap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29235.length)].join('')));

}
});

mount.core.swap.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap.call(null,mount.core.find_all_states.call(null),with$);
});

mount.core.swap.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__29238_29252 = cljs.core.seq.call(null,with$);
var chunk__29239_29253 = null;
var count__29240_29254 = (0);
var i__29241_29255 = (0);
while(true){
if((i__29241_29255 < count__29240_29254)){
var vec__29242_29256 = cljs.core._nth.call(null,chunk__29239_29253,i__29241_29255);
var from_29257 = cljs.core.nth.call(null,vec__29242_29256,(0),null);
var to_29258 = cljs.core.nth.call(null,vec__29242_29256,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29257),to_29258,new cljs.core.Keyword(null,"value","value",305978217));

var G__29259 = seq__29238_29252;
var G__29260 = chunk__29239_29253;
var G__29261 = count__29240_29254;
var G__29262 = (i__29241_29255 + (1));
seq__29238_29252 = G__29259;
chunk__29239_29253 = G__29260;
count__29240_29254 = G__29261;
i__29241_29255 = G__29262;
continue;
} else {
var temp__4657__auto___29263 = cljs.core.seq.call(null,seq__29238_29252);
if(temp__4657__auto___29263){
var seq__29238_29264__$1 = temp__4657__auto___29263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29238_29264__$1)){
var c__26048__auto___29265 = cljs.core.chunk_first.call(null,seq__29238_29264__$1);
var G__29266 = cljs.core.chunk_rest.call(null,seq__29238_29264__$1);
var G__29267 = c__26048__auto___29265;
var G__29268 = cljs.core.count.call(null,c__26048__auto___29265);
var G__29269 = (0);
seq__29238_29252 = G__29266;
chunk__29239_29253 = G__29267;
count__29240_29254 = G__29268;
i__29241_29255 = G__29269;
continue;
} else {
var vec__29245_29270 = cljs.core.first.call(null,seq__29238_29264__$1);
var from_29271 = cljs.core.nth.call(null,vec__29245_29270,(0),null);
var to_29272 = cljs.core.nth.call(null,vec__29245_29270,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29271),to_29272,new cljs.core.Keyword(null,"value","value",305978217));

var G__29273 = cljs.core.next.call(null,seq__29238_29264__$1);
var G__29274 = null;
var G__29275 = (0);
var G__29276 = (0);
seq__29238_29252 = G__29273;
chunk__29239_29253 = G__29274;
count__29240_29254 = G__29275;
i__29241_29255 = G__29276;
continue;
}
} else {
}
}
break;
}

return states;
});

mount.core.swap.cljs$lang$maxFixedArity = 2;

mount.core.swap_states = (function mount$core$swap_states(var_args){
var args29277 = [];
var len__26342__auto___29290 = arguments.length;
var i__26343__auto___29291 = (0);
while(true){
if((i__26343__auto___29291 < len__26342__auto___29290)){
args29277.push((arguments[i__26343__auto___29291]));

var G__29292 = (i__26343__auto___29291 + (1));
i__26343__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var G__29279 = args29277.length;
switch (G__29279) {
case 1:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29277.length)].join('')));

}
});

mount.core.swap_states.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap_states.call(null,mount.core.find_all_states.call(null),with$);
});

mount.core.swap_states.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__29280_29294 = cljs.core.seq.call(null,with$);
var chunk__29281_29295 = null;
var count__29282_29296 = (0);
var i__29283_29297 = (0);
while(true){
if((i__29283_29297 < count__29282_29296)){
var vec__29284_29298 = cljs.core._nth.call(null,chunk__29281_29295,i__29283_29297);
var from_29299 = cljs.core.nth.call(null,vec__29284_29298,(0),null);
var to_29300 = cljs.core.nth.call(null,vec__29284_29298,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29299),to_29300,new cljs.core.Keyword(null,"state","state",-1988618099));

var G__29301 = seq__29280_29294;
var G__29302 = chunk__29281_29295;
var G__29303 = count__29282_29296;
var G__29304 = (i__29283_29297 + (1));
seq__29280_29294 = G__29301;
chunk__29281_29295 = G__29302;
count__29282_29296 = G__29303;
i__29283_29297 = G__29304;
continue;
} else {
var temp__4657__auto___29305 = cljs.core.seq.call(null,seq__29280_29294);
if(temp__4657__auto___29305){
var seq__29280_29306__$1 = temp__4657__auto___29305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29280_29306__$1)){
var c__26048__auto___29307 = cljs.core.chunk_first.call(null,seq__29280_29306__$1);
var G__29308 = cljs.core.chunk_rest.call(null,seq__29280_29306__$1);
var G__29309 = c__26048__auto___29307;
var G__29310 = cljs.core.count.call(null,c__26048__auto___29307);
var G__29311 = (0);
seq__29280_29294 = G__29308;
chunk__29281_29295 = G__29309;
count__29282_29296 = G__29310;
i__29283_29297 = G__29311;
continue;
} else {
var vec__29287_29312 = cljs.core.first.call(null,seq__29280_29306__$1);
var from_29313 = cljs.core.nth.call(null,vec__29287_29312,(0),null);
var to_29314 = cljs.core.nth.call(null,vec__29287_29312,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29313),to_29314,new cljs.core.Keyword(null,"state","state",-1988618099));

var G__29315 = cljs.core.next.call(null,seq__29280_29306__$1);
var G__29316 = null;
var G__29317 = (0);
var G__29318 = (0);
seq__29280_29294 = G__29315;
chunk__29281_29295 = G__29316;
count__29282_29296 = G__29317;
i__29283_29297 = G__29318;
continue;
}
} else {
}
}
break;
}

return states;
});

mount.core.swap_states.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
mount.core.ChangeListener = function(){};

mount.core.add_watcher = (function mount$core$add_watcher(this$,ks,watcher){
if((!((this$ == null))) && (!((this$.mount$core$ChangeListener$add_watcher$arity$3 == null)))){
return this$.mount$core$ChangeListener$add_watcher$arity$3(this$,ks,watcher);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (mount.core.add_watcher[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,ks,watcher);
} else {
var m__25898__auto____$1 = (mount.core.add_watcher["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,ks,watcher);
} else {
throw cljs.core.missing_protocol.call(null,"ChangeListener.add-watcher",this$);
}
}
}
});

mount.core.on_change = (function mount$core$on_change(this$,k){
if((!((this$ == null))) && (!((this$.mount$core$ChangeListener$on_change$arity$2 == null)))){
return this$.mount$core$ChangeListener$on_change$arity$2(this$,k);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (mount.core.on_change[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,k);
} else {
var m__25898__auto____$1 = (mount.core.on_change["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,k);
} else {
throw cljs.core.missing_protocol.call(null,"ChangeListener.on-change",this$);
}
}
}
});


/**
* @constructor
 * @implements {mount.core.ChangeListener}
*/
mount.core.RestartListener = (function (watchers){
this.watchers = watchers;
})
mount.core.RestartListener.prototype.mount$core$ChangeListener$ = cljs.core.PROTOCOL_SENTINEL;

mount.core.RestartListener.prototype.mount$core$ChangeListener$add_watcher$arity$3 = (function (_,ks,state){
var self__ = this;
var ___$1 = this;
var seq__29319 = cljs.core.seq.call(null,ks);
var chunk__29320 = null;
var count__29321 = (0);
var i__29322 = (0);
while(true){
if((i__29322 < count__29321)){
var k = cljs.core._nth.call(null,chunk__29320,i__29322);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__29319,chunk__29320,count__29321,i__29322,k,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__29319,chunk__29320,count__29321,i__29322,k,___$1))
);

var G__29327 = seq__29319;
var G__29328 = chunk__29320;
var G__29329 = count__29321;
var G__29330 = (i__29322 + (1));
seq__29319 = G__29327;
chunk__29320 = G__29328;
count__29321 = G__29329;
i__29322 = G__29330;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29319);
if(temp__4657__auto__){
var seq__29319__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29319__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__29319__$1);
var G__29331 = cljs.core.chunk_rest.call(null,seq__29319__$1);
var G__29332 = c__26048__auto__;
var G__29333 = cljs.core.count.call(null,c__26048__auto__);
var G__29334 = (0);
seq__29319 = G__29331;
chunk__29320 = G__29332;
count__29321 = G__29333;
i__29322 = G__29334;
continue;
} else {
var k = cljs.core.first.call(null,seq__29319__$1);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__29319,chunk__29320,count__29321,i__29322,k,seq__29319__$1,temp__4657__auto__,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__29319,chunk__29320,count__29321,i__29322,k,seq__29319__$1,temp__4657__auto__,___$1))
);

var G__29335 = cljs.core.next.call(null,seq__29319__$1);
var G__29336 = null;
var G__29337 = (0);
var G__29338 = (0);
seq__29319 = G__29335;
chunk__29320 = G__29336;
count__29321 = G__29337;
i__29322 = G__29338;
continue;
}
} else {
return null;
}
}
break;
}
});

mount.core.RestartListener.prototype.mount$core$ChangeListener$on_change$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
var seq__29323 = cljs.core.seq.call(null,ks);
var chunk__29324 = null;
var count__29325 = (0);
var i__29326 = (0);
while(true){
if((i__29326 < count__29325)){
var k = cljs.core._nth.call(null,chunk__29324,i__29326);
var temp__4657__auto___29339 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__4657__auto___29339){
var states_29340 = temp__4657__auto___29339;
cljs.core.apply.call(null,mount.core.stop,states_29340);

cljs.core.apply.call(null,mount.core.start,states_29340);
} else {
}

var G__29341 = seq__29323;
var G__29342 = chunk__29324;
var G__29343 = count__29325;
var G__29344 = (i__29326 + (1));
seq__29323 = G__29341;
chunk__29324 = G__29342;
count__29325 = G__29343;
i__29326 = G__29344;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29323);
if(temp__4657__auto__){
var seq__29323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29323__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__29323__$1);
var G__29345 = cljs.core.chunk_rest.call(null,seq__29323__$1);
var G__29346 = c__26048__auto__;
var G__29347 = cljs.core.count.call(null,c__26048__auto__);
var G__29348 = (0);
seq__29323 = G__29345;
chunk__29324 = G__29346;
count__29325 = G__29347;
i__29326 = G__29348;
continue;
} else {
var k = cljs.core.first.call(null,seq__29323__$1);
var temp__4657__auto___29349__$1 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__4657__auto___29349__$1){
var states_29350 = temp__4657__auto___29349__$1;
cljs.core.apply.call(null,mount.core.stop,states_29350);

cljs.core.apply.call(null,mount.core.start,states_29350);
} else {
}

var G__29351 = cljs.core.next.call(null,seq__29323__$1);
var G__29352 = null;
var G__29353 = (0);
var G__29354 = (0);
seq__29323 = G__29351;
chunk__29324 = G__29352;
count__29325 = G__29353;
i__29326 = G__29354;
continue;
}
} else {
return null;
}
}
break;
}
});

mount.core.RestartListener.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watchers","watchers",-1799060888,null)], null);
});

mount.core.RestartListener.cljs$lang$type = true;

mount.core.RestartListener.cljs$lang$ctorStr = "mount.core/RestartListener";

mount.core.RestartListener.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"mount.core/RestartListener");
});

mount.core.__GT_RestartListener = (function mount$core$__GT_RestartListener(watchers){
return (new mount.core.RestartListener(watchers));
});

mount.core.restart_listener = (function mount$core$restart_listener(var_args){
var args29355 = [];
var len__26342__auto___29358 = arguments.length;
var i__26343__auto___29359 = (0);
while(true){
if((i__26343__auto___29359 < len__26342__auto___29358)){
args29355.push((arguments[i__26343__auto___29359]));

var G__29360 = (i__26343__auto___29359 + (1));
i__26343__auto___29359 = G__29360;
continue;
} else {
}
break;
}

var G__29357 = args29355.length;
switch (G__29357) {
case 0:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29355.length)].join('')));

}
});

mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0 = (function (){
return mount.core.restart_listener.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1 = (function (watchers){
return (new mount.core.RestartListener(cljs.core.atom.call(null,watchers)));
});

mount.core.restart_listener.cljs$lang$maxFixedArity = 1;

mount.core.stop_except = (function mount$core$stop_except(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29363 = arguments.length;
var i__26343__auto___29364 = (0);
while(true){
if((i__26343__auto___29364 < len__26342__auto___29363)){
args__26349__auto__.push((arguments[i__26343__auto___29364]));

var G__29365 = (i__26343__auto___29364 + (1));
i__26343__auto___29364 = G__29365;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var all = cljs.core.set.call(null,mount.core.find_all_states.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var states__$2 = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),all);
return cljs.core.apply.call(null,mount.core.stop,states__$2);
});

mount.core.stop_except.cljs$lang$maxFixedArity = (0);

mount.core.stop_except.cljs$lang$applyTo = (function (seq29362){
return mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29362));
});

mount.core.start_with_args = (function mount$core$start_with_args(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29368 = arguments.length;
var i__26343__auto___29369 = (0);
while(true){
if((i__26343__auto___29369 < len__26342__auto___29368)){
args__26349__auto__.push((arguments[i__26343__auto___29369]));

var G__29370 = (i__26343__auto___29369 + (1));
i__26343__auto___29369 = G__29370;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((1) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((1)),(0),null)):null);
return mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26350__auto__);
});

mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic = (function (xs,states){
cljs.core.reset_BANG_.call(null,mount.core._args,xs);

if(cljs.core.truth_(cljs.core.first.call(null,states))){
return cljs.core.apply.call(null,mount.core.start,states);
} else {
return mount.core.start.call(null);
}
});

mount.core.start_with_args.cljs$lang$maxFixedArity = (1);

mount.core.start_with_args.cljs$lang$applyTo = (function (seq29366){
var G__29367 = cljs.core.first.call(null,seq29366);
var seq29366__$1 = cljs.core.next.call(null,seq29366);
return mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic(G__29367,seq29366__$1);
});

mount.core.start_with = (function mount$core$start_with(with$){
var seq__29381_29391 = cljs.core.seq.call(null,with$);
var chunk__29382_29392 = null;
var count__29383_29393 = (0);
var i__29384_29394 = (0);
while(true){
if((i__29384_29394 < count__29383_29393)){
var vec__29385_29395 = cljs.core._nth.call(null,chunk__29382_29392,i__29384_29394);
var from_29396 = cljs.core.nth.call(null,vec__29385_29395,(0),null);
var to_29397 = cljs.core.nth.call(null,vec__29385_29395,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29396),to_29397,new cljs.core.Keyword(null,"value","value",305978217));

var G__29398 = seq__29381_29391;
var G__29399 = chunk__29382_29392;
var G__29400 = count__29383_29393;
var G__29401 = (i__29384_29394 + (1));
seq__29381_29391 = G__29398;
chunk__29382_29392 = G__29399;
count__29383_29393 = G__29400;
i__29384_29394 = G__29401;
continue;
} else {
var temp__4657__auto___29402 = cljs.core.seq.call(null,seq__29381_29391);
if(temp__4657__auto___29402){
var seq__29381_29403__$1 = temp__4657__auto___29402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29381_29403__$1)){
var c__26048__auto___29404 = cljs.core.chunk_first.call(null,seq__29381_29403__$1);
var G__29405 = cljs.core.chunk_rest.call(null,seq__29381_29403__$1);
var G__29406 = c__26048__auto___29404;
var G__29407 = cljs.core.count.call(null,c__26048__auto___29404);
var G__29408 = (0);
seq__29381_29391 = G__29405;
chunk__29382_29392 = G__29406;
count__29383_29393 = G__29407;
i__29384_29394 = G__29408;
continue;
} else {
var vec__29388_29409 = cljs.core.first.call(null,seq__29381_29403__$1);
var from_29410 = cljs.core.nth.call(null,vec__29388_29409,(0),null);
var to_29411 = cljs.core.nth.call(null,vec__29388_29409,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29410),to_29411,new cljs.core.Keyword(null,"value","value",305978217));

var G__29412 = cljs.core.next.call(null,seq__29381_29403__$1);
var G__29413 = null;
var G__29414 = (0);
var G__29415 = (0);
seq__29381_29391 = G__29412;
chunk__29382_29392 = G__29413;
count__29383_29393 = G__29414;
i__29384_29394 = G__29415;
continue;
}
} else {
}
}
break;
}

return mount.core.start.call(null);
});
mount.core.start_with_states = (function mount$core$start_with_states(with$){
var seq__29426_29436 = cljs.core.seq.call(null,with$);
var chunk__29427_29437 = null;
var count__29428_29438 = (0);
var i__29429_29439 = (0);
while(true){
if((i__29429_29439 < count__29428_29438)){
var vec__29430_29440 = cljs.core._nth.call(null,chunk__29427_29437,i__29429_29439);
var from_29441 = cljs.core.nth.call(null,vec__29430_29440,(0),null);
var to_29442 = cljs.core.nth.call(null,vec__29430_29440,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29441),to_29442,new cljs.core.Keyword(null,"state","state",-1988618099));

var G__29443 = seq__29426_29436;
var G__29444 = chunk__29427_29437;
var G__29445 = count__29428_29438;
var G__29446 = (i__29429_29439 + (1));
seq__29426_29436 = G__29443;
chunk__29427_29437 = G__29444;
count__29428_29438 = G__29445;
i__29429_29439 = G__29446;
continue;
} else {
var temp__4657__auto___29447 = cljs.core.seq.call(null,seq__29426_29436);
if(temp__4657__auto___29447){
var seq__29426_29448__$1 = temp__4657__auto___29447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29426_29448__$1)){
var c__26048__auto___29449 = cljs.core.chunk_first.call(null,seq__29426_29448__$1);
var G__29450 = cljs.core.chunk_rest.call(null,seq__29426_29448__$1);
var G__29451 = c__26048__auto___29449;
var G__29452 = cljs.core.count.call(null,c__26048__auto___29449);
var G__29453 = (0);
seq__29426_29436 = G__29450;
chunk__29427_29437 = G__29451;
count__29428_29438 = G__29452;
i__29429_29439 = G__29453;
continue;
} else {
var vec__29433_29454 = cljs.core.first.call(null,seq__29426_29448__$1);
var from_29455 = cljs.core.nth.call(null,vec__29433_29454,(0),null);
var to_29456 = cljs.core.nth.call(null,vec__29433_29454,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_29455),to_29456,new cljs.core.Keyword(null,"state","state",-1988618099));

var G__29457 = cljs.core.next.call(null,seq__29426_29448__$1);
var G__29458 = null;
var G__29459 = (0);
var G__29460 = (0);
seq__29426_29436 = G__29457;
chunk__29427_29437 = G__29458;
count__29428_29438 = G__29459;
i__29429_29439 = G__29460;
continue;
}
} else {
}
}
break;
}

return mount.core.start.call(null);
});
mount.core.start_without = (function mount$core$start_without(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29462 = arguments.length;
var i__26343__auto___29463 = (0);
while(true){
if((i__26343__auto___29463 < len__26342__auto___29462)){
args__26349__auto__.push((arguments[i__26343__auto___29463]));

var G__29464 = (i__26343__auto___29463 + (1));
i__26343__auto___29463 = G__29464;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic = (function (states){
if(cljs.core.truth_(cljs.core.first.call(null,states))){
var app = cljs.core.set.call(null,mount.core.all_without_subs.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var without = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),app);
return cljs.core.apply.call(null,mount.core.start,without);
} else {
return mount.core.start.call(null);
}
});

mount.core.start_without.cljs$lang$maxFixedArity = (0);

mount.core.start_without.cljs$lang$applyTo = (function (seq29461){
return mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29461));
});


//# sourceMappingURL=core.js.map?rel=1488028095784