// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.resource');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('macchiato.fs');
goog.require('macchiato.fs.path');
goog.require('macchiato.util.response');
macchiato.middleware.resource.file_exists_QMARK_ = (function macchiato$middleware$resource$file_exists_QMARK_(path){
if(cljs.core.truth_(path)){
try{var and__25217__auto__ = macchiato.fs.exists_QMARK_.call(null,path);
if(cljs.core.truth_(and__25217__auto__)){
return macchiato.fs.file_QMARK_.call(null,path);
} else {
return and__25217__auto__;
}
}catch (e30942){if((e30942 instanceof Error)){
var _ = e30942;
return null;
} else {
throw e30942;

}
}} else {
return null;
}
});
macchiato.middleware.resource.remove_leading_slash = (function macchiato$middleware$resource$remove_leading_slash(url){
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,url,"/"))){
return cljs.core.subs.call(null,url,(1));
} else {
return url;
}
});
macchiato.middleware.resource.uri__GT_path = (function macchiato$middleware$resource$uri__GT_path(root_path,uri){
var root = macchiato.fs.path.resolve.call(null,root_path);
var path = macchiato.fs.path.resolve.call(null,root,cuerdas.core.replace.call(null,decodeURI(macchiato.middleware.resource.remove_leading_slash.call(null,uri)),/\//,macchiato.fs.path.separator));
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,path,root))){
return path;
} else {
return null;
}
});
/**
 * Middleware that first checks to see whether the request map matches a static resource.
 */
macchiato.middleware.resource.wrap_resource = (function macchiato$middleware$resource$wrap_resource(handler,root_path){
return (function (p__30946,respond,raise){
var map__30947 = p__30946;
var map__30947__$1 = ((((!((map__30947 == null)))?((((map__30947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30947):map__30947);
var request = map__30947__$1;
var uri = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var path = macchiato.middleware.resource.uri__GT_path.call(null,root_path,uri);
if(cljs.core.truth_((function (){var and__25217__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"head","head",-771383919),null], null), null).call(null,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
if(cljs.core.truth_(and__25217__auto__)){
return macchiato.middleware.resource.file_exists_QMARK_.call(null,path);
} else {
return and__25217__auto__;
}
})())){
return respond.call(null,macchiato.util.response.file.call(null,path));
} else {
return handler.call(null,request,respond,raise);
}
});
});

//# sourceMappingURL=resource.js.map?rel=1488028098400