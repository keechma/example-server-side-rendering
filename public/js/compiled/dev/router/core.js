// Compiled by ClojureScript 1.9.473 {}
goog.provide('router.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('secretary.core');
goog.require('cuerdas.core');
router.core.encode = encodeURIComponent;
router.core.process_route_part = (function router$core$process_route_part(default_keys,part){
var is_placeholder_QMARK_ = cljs.core._EQ_.call(null,":",cljs.core.first.call(null,part));
var key = ((is_placeholder_QMARK_)?cljs.core.keyword.call(null,cljs.core.subs.call(null,part,(1))):null);
var has_default_QMARK_ = cljs.core.contains_QMARK_.call(null,default_keys,key);
var min_matches = ((has_default_QMARK_)?"*":"+");
var re_match = ((is_placeholder_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1("[^/]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_matches),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''):part);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"is-placeholder?","is-placeholder?",-641611539),is_placeholder_QMARK_,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"has-default","has-default",1740663669),has_default_QMARK_,new cljs.core.Keyword(null,"re-match","re-match",-1115405482),re_match], null);
});
router.core.route_regex = (function router$core$route_regex(parts){
var base_regex = clojure.string.join.call(null,"/",cljs.core.map.call(null,(function (p){
return new cljs.core.Keyword(null,"re-match","re-match",-1115405482).cljs$core$IFn$_invoke$arity$1(p);
}),parts));
var full_regex = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_regex),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
return cljs.core.re_pattern.call(null,full_regex);
});
router.core.route_placeholders = (function router$core$route_placeholders(parts){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p);
}),parts));
});
router.core.add_default_params = (function router$core$add_default_params(route){
if(typeof route === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return route;
}
});
router.core.strip_slashes = (function router$core$strip_slashes(var_args){
var args28580 = [];
var len__26342__auto___28584 = arguments.length;
var i__26343__auto___28585 = (0);
while(true){
if((i__26343__auto___28585 < len__26342__auto___28584)){
args28580.push((arguments[i__26343__auto___28585]));

var G__28586 = (i__26343__auto___28585 + (1));
i__26343__auto___28585 = G__28586;
continue;
} else {
}
break;
}

var G__28582 = args28580.length;
switch (G__28582) {
case 1:
return router.core.strip_slashes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return router.core.strip_slashes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28580.length)].join('')));

}
});

router.core.strip_slashes.cljs$core$IFn$_invoke$arity$1 = (function (route){
return clojure.string.replace.call(null,clojure.string.trim.call(null,(function (){var or__25229__auto__ = route;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "";
}
})()),/^\/+|\/+$/,"");
});

router.core.strip_slashes.cljs$core$IFn$_invoke$arity$2 = (function (side,route){
var G__28583 = (((side instanceof cljs.core.Keyword))?side.fqn:null);
switch (G__28583) {
case "left":
return clojure.string.replace.call(null,clojure.string.trim.call(null,(function (){var or__25229__auto__ = route;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "";
}
})()),/^\/+/,"");

break;
case "right":
return clojure.string.replace.call(null,clojure.string.trim.call(null,(function (){var or__25229__auto__ = route;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "";
}
})()),/\/+$/,"");

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(side)].join('')));

}
});

router.core.strip_slashes.cljs$lang$maxFixedArity = 2;

router.core.process_route = (function router$core$process_route(p__28589){
var vec__28593 = p__28589;
var route = cljs.core.nth.call(null,vec__28593,(0),null);
var defaults = cljs.core.nth.call(null,vec__28593,(1),null);
var parts = clojure.string.split.call(null,route,/\//);
var processed_parts = cljs.core.map.call(null,cljs.core.partial.call(null,router.core.process_route_part,cljs.core.set.call(null,cljs.core.keys.call(null,defaults))),parts);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"parts","parts",849007691),processed_parts,new cljs.core.Keyword(null,"regex","regex",939488856),router.core.route_regex.call(null,processed_parts),new cljs.core.Keyword(null,"placeholders","placeholders",1819747205),cljs.core.set.call(null,router.core.route_placeholders.call(null,processed_parts)),new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"defaults","defaults",976027214),(function (){var or__25229__auto__ = defaults;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
});
router.core.remove_empty_matches = (function router$core$remove_empty_matches(matches){
return cljs.core.apply.call(null,cljs.core.dissoc,matches,(function (){var iter__26017__auto__ = (function router$core$remove_empty_matches_$_iter__28612(s__28613){
return (new cljs.core.LazySeq(null,(function (){
var s__28613__$1 = s__28613;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28613__$1);
if(temp__4657__auto__){
var s__28613__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28613__$2)){
var c__26015__auto__ = cljs.core.chunk_first.call(null,s__28613__$2);
var size__26016__auto__ = cljs.core.count.call(null,c__26015__auto__);
var b__28615 = cljs.core.chunk_buffer.call(null,size__26016__auto__);
if((function (){var i__28614 = (0);
while(true){
if((i__28614 < size__26016__auto__)){
var vec__28622 = cljs.core._nth.call(null,c__26015__auto__,i__28614);
var k = cljs.core.nth.call(null,vec__28622,(0),null);
var v = cljs.core.nth.call(null,vec__28622,(1),null);
if((cljs.core._EQ_.call(null,v,"null")) || (cljs.core.empty_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__28615,k);

var G__28628 = (i__28614 + (1));
i__28614 = G__28628;
continue;
} else {
var G__28629 = (i__28614 + (1));
i__28614 = G__28629;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28615),router$core$remove_empty_matches_$_iter__28612.call(null,cljs.core.chunk_rest.call(null,s__28613__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28615),null);
}
} else {
var vec__28625 = cljs.core.first.call(null,s__28613__$2);
var k = cljs.core.nth.call(null,vec__28625,(0),null);
var v = cljs.core.nth.call(null,vec__28625,(1),null);
if((cljs.core._EQ_.call(null,v,"null")) || (cljs.core.empty_QMARK_.call(null,v))){
return cljs.core.cons.call(null,k,router$core$remove_empty_matches_$_iter__28612.call(null,cljs.core.rest.call(null,s__28613__$2)));
} else {
var G__28630 = cljs.core.rest.call(null,s__28613__$2);
s__28613__$1 = G__28630;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26017__auto__.call(null,matches);
})());
});
router.core.expand_route = (function router$core$expand_route(route){
var strip_slashes = (function (p__28635){
var vec__28636 = p__28635;
var route__$1 = cljs.core.nth.call(null,vec__28636,(0),null);
var defaults = cljs.core.nth.call(null,vec__28636,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [router.core.strip_slashes.call(null,route__$1),defaults], null);
});
return router.core.process_route.call(null,strip_slashes.call(null,router.core.add_default_params.call(null,route)));
});
router.core.potential_route_QMARK_ = (function router$core$potential_route_QMARK_(data_keys,route){
return clojure.set.superset_QMARK_.call(null,data_keys,new cljs.core.Keyword(null,"placeholders","placeholders",1819747205).cljs$core$IFn$_invoke$arity$1(route));
});
router.core.intersect_maps = (function router$core$intersect_maps(map1,map2){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,map2,k),v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,map1);
});
router.core.extract_query_param = (function router$core$extract_query_param(default_keys,placeholders,m,k,v){
if(!((cljs.core.contains_QMARK_.call(null,default_keys,k)) || (cljs.core.contains_QMARK_.call(null,placeholders,k)))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});
router.core.add_url_segment = (function router$core$add_url_segment(defaults,data,url,k){
var val = cljs.core.get.call(null,data,k);
var placeholder = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('');
var is_default_QMARK_ = cljs.core._EQ_.call(null,cljs.core.get.call(null,defaults,k),val);
var default_val = (cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,url,placeholder))?"":"");
var replacement = ((is_default_QMARK_)?default_val:router.core.encode.call(null,val));
return clojure.string.replace.call(null,url,placeholder,replacement);
});
router.core.build_url = (function router$core$build_url(route,data){
var defaults = new cljs.core.Keyword(null,"defaults","defaults",976027214).cljs$core$IFn$_invoke$arity$1(route);
var default_keys = cljs.core.set.call(null,cljs.core.keys.call(null,defaults));
var placeholders = new cljs.core.Keyword(null,"placeholders","placeholders",1819747205).cljs$core$IFn$_invoke$arity$1(route);
var query_params = cljs.core.reduce_kv.call(null,cljs.core.partial.call(null,router.core.extract_query_param,default_keys,placeholders),cljs.core.PersistentArrayMap.EMPTY,data);
var base_url = cljs.core.reduce.call(null,cljs.core.partial.call(null,router.core.add_url_segment,defaults,data),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(route),placeholders);
if(cljs.core.empty_QMARK_.call(null,query_params)){
if(cljs.core._EQ_.call(null,"/",base_url)){
return "";
} else {
return base_url;
}
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.encode_query_params.call(null,query_params))].join('');
}
});
router.core.route_score = (function router$core$route_score(data,route){
var matched = cljs.core.PersistentVector.EMPTY;
var default_matches = ((function (matched){
return (function (matched__$1){
return cljs.core.into.call(null,matched__$1,cljs.core.keys.call(null,router.core.intersect_maps.call(null,data,new cljs.core.Keyword(null,"defaults","defaults",976027214).cljs$core$IFn$_invoke$arity$1(route))));
});})(matched))
;
var placeholder_matches = ((function (matched,default_matches){
return (function (matched__$1){
return cljs.core.into.call(null,matched__$1,clojure.set.union.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"placeholders","placeholders",1819747205).cljs$core$IFn$_invoke$arity$1(route)),cljs.core.set.call(null,cljs.core.keys.call(null,data))));
});})(matched,default_matches))
;
return cljs.core.count.call(null,cljs.core.distinct.call(null,placeholder_matches.call(null,default_matches.call(null,matched))));
});
router.core.match_path_with_route = (function router$core$match_path_with_route(route,url){
var matches = cljs.core.first.call(null,cljs.core.re_seq.call(null,new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(route),url));
if((matches == null)){
return null;
} else {
return cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"placeholders","placeholders",1819747205).cljs$core$IFn$_invoke$arity$1(route),cljs.core.rest.call(null,matches));
}
});
router.core.match_path = (function router$core$match_path(processed_routes,path){
var route_count = cljs.core.count.call(null,processed_routes);
var max_index = (route_count - (1));
if((route_count > (0))){
var index = (0);
while(true){
var route = cljs.core.get.call(null,processed_routes,index);
var matches = router.core.match_path_with_route.call(null,route,path);
var end_QMARK_ = cljs.core._EQ_.call(null,max_index,index);
if(cljs.core.truth_(matches)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge.call(null,new cljs.core.Keyword(null,"defaults","defaults",976027214).cljs$core$IFn$_invoke$arity$1(route),router.core.remove_empty_matches.call(null,matches))], null);
} else {
if(end_QMARK_){
return null;
} else {
var G__28639 = (index + (1));
index = G__28639;
continue;

}
}
break;
}
} else {
return null;
}
});
/**
 * Accepts `expanded-routes` vector (returned by the `expand-routes` function)
 *   and a string as arguments. Returns a map which contains the data represented
 *   by the route.
 * 
 *   ```clojure
 *   ;; define routes
 *   (def routes [[":page", {:page "index"}]
 *              ":page/:id"
 *              ":page/:id/:action"]) 
 * 
 *   (def expanded-routes (expand-routes routes))
 * 
 *   (url->map expanded-routes "foo")
 *   ;; {:page "foo"}
 * 
 *   (url->map expanded-routes "foo/1")
 *   ;; {:page "foo" :id 1}
 * 
 *   (url->map expanded-routes "foo?bar=baz")
 *   ;; {:page "foo" :bar "baz"}
 *   ```
 *   
 */
router.core.url__GT_map = (function router$core$url__GT_map(expanded_routes,url){
var vec__28643 = clojure.string.split.call(null,url,/\?/);
var u = cljs.core.nth.call(null,vec__28643,(0),null);
var q = cljs.core.nth.call(null,vec__28643,(1),null);
var path = ((cljs.core._EQ_.call(null,u,"/"))?u:router.core.strip_slashes.call(null,new cljs.core.Keyword(null,"left","left",-399115937),u));
var query = router.core.remove_empty_matches.call(null,clojure.walk.keywordize_keys.call(null,secretary.core.decode_query_params.call(null,(function (){var or__25229__auto__ = q;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "";
}
})())));
var matched_path = router.core.match_path.call(null,expanded_routes,path);
if(cljs.core.truth_(matched_path)){
return cljs.core.assoc.call(null,matched_path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge.call(null,query,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(matched_path)));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),query], null);
}
});
/**
 * Accepts `expanded-routes` vector (returned by the `expand-routes` function)
 *   and a map as arguments. Returns a URL part which is the closest representatation
 *   of the data contained in the map (based on the `expanded-routes` argument).
 * 
 *   ```clojure
 *   ;; define routes
 *   (def routes [[":page", {:page "index"}]
 *              ":page/:id"
 *              ":page/:id/:action"]) 
 * 
 *   (def expanded-routes (expand-routes routes))
 * 
 *   (map->url expanded-routes {:page "foo"})
 *   ;; "foo"
 * 
 *   (map->url expanded-routes {:page "foo" :id 1})
 *   ;; "foo/1"
 * 
 *   (map->url expanded-routes {:page "foo" :id 1 :action "bar" :qux "baz"})
 *   ;; "foo/1/bar?qux=baz"
 *   ```
 *   
 */
router.core.map__GT_url = (function router$core$map__GT_url(expanded_routes,data){
var data_keys = cljs.core.set.call(null,cljs.core.keys.call(null,data));
var potential_routes = cljs.core.filter.call(null,cljs.core.partial.call(null,router.core.potential_route_QMARK_,data_keys),expanded_routes);
if(cljs.core.empty_QMARK_.call(null,potential_routes)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.encode_query_params.call(null,data))].join('');
} else {
var sorted_routes = cljs.core.sort_by.call(null,((function (data_keys,potential_routes){
return (function (r){
return (- router.core.route_score.call(null,data,r));
});})(data_keys,potential_routes))
,potential_routes);
var best_match = cljs.core.first.call(null,sorted_routes);
return router.core.build_url.call(null,best_match,data);
}
});
/**
 * Accepts a vector of routes as the argument. Returnes the expanded version
 *   of routes that can be passed to `url->map` and `map->url` functions.
 * 
 *   Elements in the route vector must be string (pattern) or vectors that contain
 *   the string pattern and default values for that route.
 * 
 *   ```clojure
 *   (def route ":page")
 *   ;; This route will not be matched by an empty string
 * 
 *   (def route-with-defaults [":page", {:page "index"}])
 *   ;; This route will match an empty string and the :page key will hold 
 *   ;; the value "index"
 * 
 *   (expand-routes [[":page" {:page "index"}]
 *                ":page/:action"])
 *   ;; "" will be matched as {:page "index"}
 *   ;; "foo/bar" will be matched as {:page "foo" :action "bar"}
 *   ```
 *   
 */
router.core.expand_routes = (function router$core$expand_routes(routes){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.call(null,(function (r){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"placeholders","placeholders",1819747205).cljs$core$IFn$_invoke$arity$1(r)));
}),cljs.core.map.call(null,router.core.expand_route,routes)));
});

//# sourceMappingURL=core.js.map?rel=1488028156798