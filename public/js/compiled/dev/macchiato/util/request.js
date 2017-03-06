// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.util.request');
goog.require('cljs.core');
/**
 * HTTP token: 1*<any CHAR except CTLs or tspecials>. See RFC2068
 */
macchiato.util.request.re_token = /[!#$%&'*\-+.0-9A-Z\^_`a-z\|~]+/;
/**
 * HTTP quoted-string: <"> *<any TEXT except "> <">. See RFC2068.
 */
macchiato.util.request.re_quoted = /\"(\\\"|[^\"])*\"/;
/**
 * HTTP value: token | quoted-string. See RFC2109
 */
macchiato.util.request.re_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(macchiato.util.request.re_token),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(macchiato.util.request.re_quoted)].join('');
/**
 * Return the full URL of the request.
 */
macchiato.util.request.request_url = (function macchiato$util$request$request_url(request){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(request))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"host"], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var query = temp__4655__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
} else {
return null;
}
})())].join('');
});
/**
 * Return the content-type of the request, or nil if no content-type is set.
 */
macchiato.util.request.content_type = (function macchiato$util$request$content_type(request){
var temp__4655__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null));
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return cljs.core.second.call(null,cljs.core.re_find.call(null,/^(.*?)(?:;|$)/,type));
} else {
return null;
}
});
/**
 * Return the content-length of the request, or nil no content-length is set.
 */
macchiato.util.request.content_length = (function macchiato$util$request$content_length(request){
var temp__4655__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-length"], null));
if(cljs.core.truth_(temp__4655__auto__)){
var length = temp__4655__auto__;
return parseFloat(length);
} else {
return null;
}
});
/**
 * Return the character encoding for the request, or nil if it is not set.
 */
macchiato.util.request.character_encoding = (function macchiato$util$request$character_encoding(request){
var temp__4655__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null));
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return cljs.core.second.call(null,type.split("charset="));
} else {
return null;
}
});
/**
 * True if a request contains a urlencoded form in the body.
 */
macchiato.util.request.urlencoded_form_QMARK_ = (function macchiato$util$request$urlencoded_form_QMARK_(request){
var temp__4655__auto__ = macchiato.util.request.content_type.call(null,request);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return type.startsWith("application/x-www-form-urlencoded");
} else {
return null;
}
});
if(typeof macchiato.util.request.body_string !== 'undefined'){
} else {
/**
 * Return the request body as a string.
 */
macchiato.util.request.body_string = (function (){var method_table__26162__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26163__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26164__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26165__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26166__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"macchiato.util.request","body-string"),((function (method_table__26162__auto__,prefer_table__26163__auto__,method_cache__26164__auto__,cached_hierarchy__26165__auto__,hierarchy__26166__auto__){
return (function (p__26396){
var map__26397 = p__26396;
var map__26397__$1 = ((((!((map__26397 == null)))?((((map__26397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26397):map__26397);
var body = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var t = cljs.core.type.call(null,body);
if(cljs.core._EQ_.call(null,t,cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core._EQ_.call(null,t,String)){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if(((!((body == null)))?((((body.cljs$lang$protocol_mask$partition0$ & (8))) || ((cljs.core.PROTOCOL_SENTINEL === body.cljs$core$ICollection$)))?true:(((!body.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,body):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,body))){
return new cljs.core.Keyword(null,"coll","coll",1647737163);
} else {
if(cljs.core.nil_QMARK_){
return new cljs.core.Keyword(null,"nil","nil",99600501);
} else {
return null;
}
}
}
}
});})(method_table__26162__auto__,prefer_table__26163__auto__,method_cache__26164__auto__,cached_hierarchy__26165__auto__,hierarchy__26166__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26166__auto__,method_table__26162__auto__,prefer_table__26163__auto__,method_cache__26164__auto__,cached_hierarchy__26165__auto__));
})();
}
cljs.core._add_method.call(null,macchiato.util.request.body_string,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_){
return null;
}));
cljs.core._add_method.call(null,macchiato.util.request.body_string,new cljs.core.Keyword(null,"string","string",-1989541586),(function (request){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(request);
}));
cljs.core._add_method.call(null,macchiato.util.request.body_string,new cljs.core.Keyword(null,"string","string",-1989541586),(function (request){
return cljs.core.apply.call(null,cljs.core.str,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(request));
}));
/**
 * Returns the relative path of the request.
 */
macchiato.util.request.path_info = (function macchiato$util$request$path_info(request){
var or__25229__auto__ = new cljs.core.Keyword(null,"path-info","path-info",-1932254250).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request);
}
});
/**
 * Returns true if the URI of the request is a subpath of the supplied context.
 */
macchiato.util.request.in_context_QMARK_ = (function macchiato$util$request$in_context_QMARK_(request,context){
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request).startsWith(context);
});
/**
 * Associate a context and path-info with the  request. The request URI must be
 *   a subpath of the supplied context.
 */
macchiato.util.request.set_context = (function macchiato$util$request$set_context(request,context){
if(cljs.core.truth_(macchiato.util.request.in_context_QMARK_.call(null,request,context))){
} else {
throw (new Error("Assert failed: (in-context? request context)"));
}

return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"path-info","path-info",-1932254250),cljs.core.subs.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),context.length));
});

//# sourceMappingURL=request.js.map?rel=1488028090747