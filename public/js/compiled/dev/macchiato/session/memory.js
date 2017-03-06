// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.session.memory');
goog.require('cljs.core');
goog.require('macchiato.session.store');

/**
* @constructor
 * @implements {macchiato.session.store.SessionStore}
*/
macchiato.session.memory.MemoryStore = (function (session_map){
this.session_map = session_map;
})
macchiato.session.memory.MemoryStore.prototype.macchiato$session$store$SessionStore$ = cljs.core.PROTOCOL_SENTINEL;

macchiato.session.memory.MemoryStore.prototype.macchiato$session$store$SessionStore$read_session$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.session_map).call(null,key);
});

macchiato.session.memory.MemoryStore.prototype.macchiato$session$store$SessionStore$write_session$arity$3 = (function (_,key,data){
var self__ = this;
var ___$1 = this;
var key__$1 = (function (){var or__25229__auto__ = key;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null))].join('');
}
})();
cljs.core.swap_BANG_.call(null,self__.session_map,cljs.core.assoc,key__$1,data);

return key__$1;
});

macchiato.session.memory.MemoryStore.prototype.macchiato$session$store$SessionStore$delete_session$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.session_map,cljs.core.dissoc,key);

return null;
});

macchiato.session.memory.MemoryStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-map","session-map",-691443532,null)], null);
});

macchiato.session.memory.MemoryStore.cljs$lang$type = true;

macchiato.session.memory.MemoryStore.cljs$lang$ctorStr = "macchiato.session.memory/MemoryStore";

macchiato.session.memory.MemoryStore.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"macchiato.session.memory/MemoryStore");
});

macchiato.session.memory.__GT_MemoryStore = (function macchiato$session$memory$__GT_MemoryStore(session_map){
return (new macchiato.session.memory.MemoryStore(session_map));
});

/**
 * Creates an in-memory session storage engine. Accepts an atom as an optional
 *   argument; if supplied, the atom is used to hold the session data.
 */
macchiato.session.memory.memory_store = (function macchiato$session$memory$memory_store(var_args){
var args29608 = [];
var len__26342__auto___29611 = arguments.length;
var i__26343__auto___29612 = (0);
while(true){
if((i__26343__auto___29612 < len__26342__auto___29611)){
args29608.push((arguments[i__26343__auto___29612]));

var G__29613 = (i__26343__auto___29612 + (1));
i__26343__auto___29612 = G__29613;
continue;
} else {
}
break;
}

var G__29610 = args29608.length;
switch (G__29610) {
case 0:
return macchiato.session.memory.memory_store.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.session.memory.memory_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29608.length)].join('')));

}
});

macchiato.session.memory.memory_store.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.session.memory.memory_store.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

macchiato.session.memory.memory_store.cljs$core$IFn$_invoke$arity$1 = (function (session_atom){
return (new macchiato.session.memory.MemoryStore(session_atom));
});

macchiato.session.memory.memory_store.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=memory.js.map?rel=1488028096229