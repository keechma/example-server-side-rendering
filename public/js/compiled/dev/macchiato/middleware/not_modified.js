// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.not_modified');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs_time.core');
goog.require('macchiato.util.time');
goog.require('macchiato.util.response');
macchiato.middleware.not_modified.Stream = cljs.nodejs.require.call(null,"stream");
macchiato.middleware.not_modified.etag_match_QMARK_ = (function macchiato$middleware$not_modified$etag_match_QMARK_(request,response){
var temp__4655__auto__ = macchiato.util.response.get_header.call(null,response,"ETag");
if(cljs.core.truth_(temp__4655__auto__)){
var etag = temp__4655__auto__;
return cljs.core._EQ_.call(null,etag,macchiato.util.response.get_header.call(null,request,"if-none-match"));
} else {
return null;
}
});
macchiato.middleware.not_modified.date_header = (function macchiato$middleware$not_modified$date_header(response,header){
var temp__4657__auto__ = macchiato.util.response.get_header.call(null,response,header);
if(cljs.core.truth_(temp__4657__auto__)){
var http_date = temp__4657__auto__;
return macchiato.util.time.parse_date.call(null,http_date);
} else {
return null;
}
});
macchiato.middleware.not_modified.not_modified_since_QMARK_ = (function macchiato$middleware$not_modified$not_modified_since_QMARK_(request,response){
var modified_date = macchiato.middleware.not_modified.date_header.call(null,response,"Last-Modified");
var modified_since = macchiato.middleware.not_modified.date_header.call(null,request,"if-modified-since");
var and__25217__auto__ = modified_date;
if(cljs.core.truth_(and__25217__auto__)){
var and__25217__auto____$1 = modified_since;
if(cljs.core.truth_(and__25217__auto____$1)){
return cljs.core.not.call(null,cljs_time.core.before_QMARK_.call(null,modified_since,modified_date));
} else {
return and__25217__auto____$1;
}
} else {
return and__25217__auto__;
}
});
macchiato.middleware.not_modified.read_request_QMARK_ = (function macchiato$middleware$not_modified$read_request_QMARK_(request){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"head","head",-771383919),null], null), null).call(null,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});
macchiato.middleware.not_modified.ok_response_QMARK_ = (function macchiato$middleware$not_modified$ok_response_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),(200));
});
/**
 * Returns 304 or original response based on response and request.
 *   See: wrap-not-modified.
 */
macchiato.middleware.not_modified.not_modified_response = (function macchiato$middleware$not_modified$not_modified_response(response,request){
if(cljs.core.truth_((function (){var and__25217__auto__ = macchiato.middleware.not_modified.read_request_QMARK_.call(null,request);
if(cljs.core.truth_(and__25217__auto__)){
var and__25217__auto____$1 = macchiato.middleware.not_modified.ok_response_QMARK_.call(null,response);
if(cljs.core.truth_(and__25217__auto____$1)){
var or__25229__auto__ = macchiato.middleware.not_modified.etag_match_QMARK_.call(null,request,response);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return macchiato.middleware.not_modified.not_modified_since_QMARK_.call(null,request,response);
}
} else {
return and__25217__auto____$1;
}
} else {
return and__25217__auto__;
}
})())){
if((new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response) instanceof macchiato.middleware.not_modified.Stream)){
new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response).close();
} else {
}

return cljs.core.assoc.call(null,macchiato.util.response.header.call(null,cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status","status",-1997798413),(304)),"Content-Length",(0)),new cljs.core.Keyword(null,"body","body",-2049205669),null);
} else {
return response;
}
});
/**
 * Middleware that returns a 304 Not Modified from the wrapped handler if the
 *   handler response has an ETag or Last-Modified header, and the request has a
 *   If-None-Match or If-Modified-Since header that matches the response.
 */
macchiato.middleware.not_modified.wrap_not_modified = (function macchiato$middleware$not_modified$wrap_not_modified(handler){
return (function (request,respond,raise){
return handler.call(null,request,(function (response){
return respond.call(null,macchiato.middleware.not_modified.not_modified_response.call(null,response,request));
}),raise);
});
});

//# sourceMappingURL=not_modified.js.map?rel=1488028098375