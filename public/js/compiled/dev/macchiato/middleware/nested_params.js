// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.nested_params');
goog.require('cljs.core');
/**
 * Associate a key with a value in a map. If the key already exists in the map,
 *   a vector of values is associated with the key.
 */
macchiato.middleware.nested_params.assoc_conj = (function macchiato$middleware$nested_params$assoc_conj(map,key,val){
return cljs.core.assoc.call(null,map,key,(function (){var temp__4655__auto__ = cljs.core.get.call(null,map,key);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,val);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,val], null);
}
} else {
return val;
}
})());
});
/**
 * Parse a parameter name into a list of keys using a 'C'-like index
 *   notation.
 *   For example:
 *  "foo[bar][][baz]"
 *  => ["foo" "bar" "" "baz"]
 */
macchiato.middleware.nested_params.parse_nested_keys = (function macchiato$middleware$nested_params$parse_nested_keys(param_name){
var vec__27269 = cljs.core.re_find.call(null,/^([\s\S]*?)((?:\[[\s\S]*?\])*)$/,cljs.core.name.call(null,param_name));
var _ = cljs.core.nth.call(null,vec__27269,(0),null);
var k = cljs.core.nth.call(null,vec__27269,(1),null);
var ks = cljs.core.nth.call(null,vec__27269,(2),null);
var keys = (cljs.core.truth_(ks)?cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/\[(.*?)\]/,ks)):null);
return cljs.core.cons.call(null,k,keys);
});
macchiato.middleware.nested_params.assoc_vec = (function macchiato$middleware$nested_params$assoc_vec(m,k,v){
var m__$1 = ((cljs.core.contains_QMARK_.call(null,m,k))?m:cljs.core.assoc.call(null,m,k,cljs.core.PersistentVector.EMPTY));
return macchiato.middleware.nested_params.assoc_conj.call(null,m__$1,k,v);
});
/**
 * Similar to assoc-in, but treats values of blank keys as elements in a
 *   list.
 */
macchiato.middleware.nested_params.assoc_nested = (function macchiato$middleware$nested_params$assoc_nested(m,p__27272,v){
var vec__27279 = p__27272;
var seq__27280 = cljs.core.seq.call(null,vec__27279);
var first__27281 = cljs.core.first.call(null,seq__27280);
var seq__27280__$1 = cljs.core.next.call(null,seq__27280);
var k = first__27281;
var ks = seq__27280__$1;
if(cljs.core.truth_(k)){
if(ks){
var vec__27282 = ks;
var seq__27283 = cljs.core.seq.call(null,vec__27282);
var first__27284 = cljs.core.first.call(null,seq__27283);
var seq__27283__$1 = cljs.core.next.call(null,seq__27283);
var j = first__27284;
var js = seq__27283__$1;
if(cljs.core._EQ_.call(null,j,"")){
return macchiato.middleware.nested_params.assoc_vec.call(null,m,k,macchiato.middleware.nested_params.assoc_nested.call(null,cljs.core.PersistentArrayMap.EMPTY,js,v));
} else {
return cljs.core.assoc.call(null,m,k,macchiato.middleware.nested_params.assoc_nested.call(null,cljs.core.get.call(null,m,k,cljs.core.PersistentArrayMap.EMPTY),ks,v));
}
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return macchiato.middleware.nested_params.assoc_conj.call(null,m,k,v);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
}
}
} else {
return v;
}
});
/**
 * Return a list of name-value pairs for a parameter map.
 */
macchiato.middleware.nested_params.param_pairs = (function macchiato$middleware$nested_params$param_pairs(params){
return cljs.core.mapcat.call(null,(function (p__27293){
var vec__27294 = p__27293;
var name = cljs.core.nth.call(null,vec__27294,(0),null);
var value = cljs.core.nth.call(null,vec__27294,(1),null);
if((cljs.core.sequential_QMARK_.call(null,value)) && (!(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,value))))){
var iter__26017__auto__ = ((function (vec__27294,name,value){
return (function macchiato$middleware$nested_params$param_pairs_$_iter__27297(s__27298){
return (new cljs.core.LazySeq(null,((function (vec__27294,name,value){
return (function (){
var s__27298__$1 = s__27298;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27298__$1);
if(temp__4657__auto__){
var s__27298__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27298__$2)){
var c__26015__auto__ = cljs.core.chunk_first.call(null,s__27298__$2);
var size__26016__auto__ = cljs.core.count.call(null,c__26015__auto__);
var b__27300 = cljs.core.chunk_buffer.call(null,size__26016__auto__);
if((function (){var i__27299 = (0);
while(true){
if((i__27299 < size__26016__auto__)){
var v = cljs.core._nth.call(null,c__26015__auto__,i__27299);
cljs.core.chunk_append.call(null,b__27300,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,v], null));

var G__27301 = (i__27299 + (1));
i__27299 = G__27301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27300),macchiato$middleware$nested_params$param_pairs_$_iter__27297.call(null,cljs.core.chunk_rest.call(null,s__27298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27300),null);
}
} else {
var v = cljs.core.first.call(null,s__27298__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,v], null),macchiato$middleware$nested_params$param_pairs_$_iter__27297.call(null,cljs.core.rest.call(null,s__27298__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27294,name,value))
,null,null));
});})(vec__27294,name,value))
;
return iter__26017__auto__.call(null,value);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null)], null);
}
}),params);
});
/**
 * Takes a flat map of parameters and turns it into a nested map of
 *   parameters, using the function parse to split the parameter names
 *   into keys.
 */
macchiato.middleware.nested_params.nest_params = (function macchiato$middleware$nested_params$nest_params(params,parse){
return cljs.core.reduce.call(null,(function (m,p__27306){
var vec__27307 = p__27306;
var k = cljs.core.nth.call(null,vec__27307,(0),null);
var v = cljs.core.nth.call(null,vec__27307,(1),null);
return macchiato.middleware.nested_params.assoc_nested.call(null,m,parse.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,macchiato.middleware.nested_params.param_pairs.call(null,params));
});
/**
 * Converts a request with a flat map of parameters to a nested map.
 *   See: wrap-nested-params.
 */
macchiato.middleware.nested_params.nested_params_request = (function macchiato$middleware$nested_params$nested_params_request(var_args){
var args27310 = [];
var len__26342__auto___27313 = arguments.length;
var i__26343__auto___27314 = (0);
while(true){
if((i__26343__auto___27314 < len__26342__auto___27313)){
args27310.push((arguments[i__26343__auto___27314]));

var G__27315 = (i__26343__auto___27314 + (1));
i__26343__auto___27314 = G__27315;
continue;
} else {
}
break;
}

var G__27312 = args27310.length;
switch (G__27312) {
case 1:
return macchiato.middleware.nested_params.nested_params_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.nested_params.nested_params_request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27310.length)].join('')));

}
});

macchiato.middleware.nested_params.nested_params_request.cljs$core$IFn$_invoke$arity$1 = (function (request){
return macchiato.middleware.nested_params.nested_params_request.call(null,request,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.nested_params.nested_params_request.cljs$core$IFn$_invoke$arity$2 = (function (request,options){
var parse = new cljs.core.Keyword(null,"key-parser","key-parser",-766020347).cljs$core$IFn$_invoke$arity$2(options,macchiato.middleware.nested_params.parse_nested_keys);
return cljs.core.update_in.call(null,request,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),macchiato.middleware.nested_params.nest_params,parse);
});

macchiato.middleware.nested_params.nested_params_request.cljs$lang$maxFixedArity = 2;

/**
 * Middleware to converts a flat map of parameters into a nested map.
 *   Accepts the following options:
 *   :key-parser - the function to use to parse the parameter names into a list
 *              of keys. Keys that are empty strings are treated as elements in
 *              a vector, non-empty keys are treated as elements in a map.
 *              Defaults to the parse-nested-keys function.
 *   For example:
 *  {"foo[bar]" "baz"}
 *  => {"foo" {"bar" "baz"}}
 *  {"foo[]" "bar"}
 *  => {"foo" ["bar"]}
 */
macchiato.middleware.nested_params.wrap_nested_params = (function macchiato$middleware$nested_params$wrap_nested_params(var_args){
var args27317 = [];
var len__26342__auto___27320 = arguments.length;
var i__26343__auto___27321 = (0);
while(true){
if((i__26343__auto___27321 < len__26342__auto___27320)){
args27317.push((arguments[i__26343__auto___27321]));

var G__27322 = (i__26343__auto___27321 + (1));
i__26343__auto___27321 = G__27322;
continue;
} else {
}
break;
}

var G__27319 = args27317.length;
switch (G__27319) {
case 1:
return macchiato.middleware.nested_params.wrap_nested_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.nested_params.wrap_nested_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27317.length)].join('')));

}
});

macchiato.middleware.nested_params.wrap_nested_params.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.nested_params.wrap_nested_params.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.nested_params.wrap_nested_params.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
return (function (request,respond,raise){
return handler.call(null,macchiato.middleware.nested_params.nested_params_request.call(null,request,options),respond,raise);
});
});

macchiato.middleware.nested_params.wrap_nested_params.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=nested_params.js.map?rel=1488028092750