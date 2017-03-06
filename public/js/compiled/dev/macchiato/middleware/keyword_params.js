// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.keyword_params');
goog.require('cljs.core');
macchiato.middleware.keyword_params.keyword_syntax_QMARK_ = (function macchiato$middleware$keyword_params$keyword_syntax_QMARK_(s){
return cljs.core.re_matches.call(null,/[A-Za-z*+!_?-][A-Za-z0-9*+!_?-]*/,s);
});
macchiato.middleware.keyword_params.keyify_params = (function macchiato$middleware$keyword_params$keyify_params(target){
if(cljs.core.map_QMARK_.call(null,target)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26017__auto__ = (function macchiato$middleware$keyword_params$keyify_params_$_iter__29850(s__29851){
return (new cljs.core.LazySeq(null,(function (){
var s__29851__$1 = s__29851;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29851__$1);
if(temp__4657__auto__){
var s__29851__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29851__$2)){
var c__26015__auto__ = cljs.core.chunk_first.call(null,s__29851__$2);
var size__26016__auto__ = cljs.core.count.call(null,c__26015__auto__);
var b__29853 = cljs.core.chunk_buffer.call(null,size__26016__auto__);
if((function (){var i__29852 = (0);
while(true){
if((i__29852 < size__26016__auto__)){
var vec__29860 = cljs.core._nth.call(null,c__26015__auto__,i__29852);
var k = cljs.core.nth.call(null,vec__29860,(0),null);
var v = cljs.core.nth.call(null,vec__29860,(1),null);
cljs.core.chunk_append.call(null,b__29853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__25217__auto__ = typeof k === 'string';
if(and__25217__auto__){
return macchiato.middleware.keyword_params.keyword_syntax_QMARK_.call(null,k);
} else {
return and__25217__auto__;
}
})())?cljs.core.keyword.call(null,k):k),macchiato.middleware.keyword_params.keyify_params.call(null,v)], null));

var G__29866 = (i__29852 + (1));
i__29852 = G__29866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29853),macchiato$middleware$keyword_params$keyify_params_$_iter__29850.call(null,cljs.core.chunk_rest.call(null,s__29851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29853),null);
}
} else {
var vec__29863 = cljs.core.first.call(null,s__29851__$2);
var k = cljs.core.nth.call(null,vec__29863,(0),null);
var v = cljs.core.nth.call(null,vec__29863,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__25217__auto__ = typeof k === 'string';
if(and__25217__auto__){
return macchiato.middleware.keyword_params.keyword_syntax_QMARK_.call(null,k);
} else {
return and__25217__auto__;
}
})())?cljs.core.keyword.call(null,k):k),macchiato.middleware.keyword_params.keyify_params.call(null,v)], null),macchiato$middleware$keyword_params$keyify_params_$_iter__29850.call(null,cljs.core.rest.call(null,s__29851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26017__auto__.call(null,target);
})());
} else {
if(cljs.core.vector_QMARK_.call(null,target)){
return cljs.core.vec.call(null,cljs.core.map.call(null,macchiato.middleware.keyword_params.keyify_params,target));
} else {
return target;

}
}
});
/**
 * Converts string keys in :params map to keywords. See: wrap-keyword-params.
 */
macchiato.middleware.keyword_params.keyword_params_request = (function macchiato$middleware$keyword_params$keyword_params_request(request){
return cljs.core.update_in.call(null,request,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),macchiato.middleware.keyword_params.keyify_params);
});
/**
 * Middleware that converts the any string keys in the :params map to keywords.
 *   Only keys that can be turned into valid keywords are converted.
 *   This middleware does not alter the maps under :*-params keys. These are left
 *   as strings.
 */
macchiato.middleware.keyword_params.wrap_keyword_params = (function macchiato$middleware$keyword_params$wrap_keyword_params(handler){
return (function (request,respond,raise){
return handler.call(null,macchiato.middleware.keyword_params.keyword_params_request.call(null,request),respond,raise);
});
});

//# sourceMappingURL=keyword_params.js.map?rel=1488028096628