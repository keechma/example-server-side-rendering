// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.proxy_headers');
goog.require('cljs.core');
goog.require('cuerdas.core');
/**
 * Change the :remote-addr key of the request map to the last value present in
 *   the X-Forwarded-For header. See: wrap-forwarded-remote-addr.
 */
macchiato.middleware.proxy_headers.forwarded_remote_addr_request = (function macchiato$middleware$proxy_headers$forwarded_remote_addr_request(request){
var temp__4655__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-forwarded-for"], null));
if(cljs.core.truth_(temp__4655__auto__)){
var forwarded_for = temp__4655__auto__;
var remote_addr = cuerdas.core.trim.call(null,cljs.core.re_find.call(null,/[^,]*$/,forwarded_for));
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),remote_addr);
} else {
return request;
}
});
/**
 * Middleware that changes the :remote-addr of the request map to the
 *   last value present in the X-Forwarded-For header.
 */
macchiato.middleware.proxy_headers.wrap_forwarded_remote_addr = (function macchiato$middleware$proxy_headers$wrap_forwarded_remote_addr(handler){
return (function (request,respond,raise){
return handler.call(null,macchiato.middleware.proxy_headers.forwarded_remote_addr_request.call(null,request),respond,raise);
});
});

//# sourceMappingURL=proxy_headers.js.map?rel=1488028096693