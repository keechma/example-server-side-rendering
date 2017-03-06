// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('mount.tools.macro');
goog.require('cljs.core');
/**
 * To be used in macro definitions.
 * Handles optional docstrings and attribute maps for a name to be defined
 * in a list of macro arguments. If the first macro argument is a string,
 * it is added as a docstring to name and removed from the macro argument
 * list. If afterwards the first macro argument is a map, its entries are
 * added to the name's metadata map and the map is removed from the
 * macro argument list. The return value is a vector containing the name
 * with its extended metadata map and the list of unprocessed macro
 * arguments.
 */
mount.tools.macro.name_with_attributes = (function mount$tools$macro$name_with_attributes(name,macro_args){
var vec__28855 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__28855,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__28855,(1),null);
var vec__28858 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__28858,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__28858,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});

//# sourceMappingURL=macro.js.map?rel=1488028095412