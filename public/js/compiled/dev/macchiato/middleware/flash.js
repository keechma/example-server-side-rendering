// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.flash');
goog.require('cljs.core');
/**
 * Adds :flash key to request from :_flash in session.
 */
macchiato.middleware.flash.flash_request = (function macchiato$middleware$flash$flash_request(request){
var session = new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(request);
var flash = new cljs.core.Keyword(null,"_flash","_flash",-1348788472).cljs$core$IFn$_invoke$arity$1(session);
var session__$1 = cljs.core.dissoc.call(null,session,new cljs.core.Keyword(null,"_flash","_flash",-1348788472));
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"session","session",1008279103),session__$1,new cljs.core.Keyword(null,"flash","flash",934660619),flash);
});
/**
 * If response has a :flash key, saves it in :_flash of session for next
 *   request.
 */
macchiato.middleware.flash.flash_response = (function macchiato$middleware$flash$flash_response(response,request){
var map__31017 = request;
var map__31017__$1 = ((((!((map__31017 == null)))?((((map__31017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31017):map__31017);
var session = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"session","session",1008279103));
var flash = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"flash","flash",934660619));
if(cljs.core.truth_(response)){
var session__$1 = ((cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103)))?response.call(null,new cljs.core.Keyword(null,"session","session",1008279103)):session);
var session__$2 = (function (){var temp__4655__auto__ = response.call(null,new cljs.core.Keyword(null,"flash","flash",934660619));
if(cljs.core.truth_(temp__4655__auto__)){
var flash__$1 = temp__4655__auto__;
return cljs.core.assoc.call(null,response.call(null,new cljs.core.Keyword(null,"session","session",1008279103),session__$1),new cljs.core.Keyword(null,"_flash","_flash",-1348788472),flash__$1);
} else {
return session__$1;
}
})();
if(cljs.core.truth_((function (){var or__25229__auto__ = flash;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = response.call(null,new cljs.core.Keyword(null,"flash","flash",934660619));
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
return cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103));
}
}
})())){
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),session__$2);
} else {
return response;
}
} else {
return null;
}
});
/**
 * If a :flash key is set on the response by the handler, a :flash key with
 *   the same value will be set on the next request that shares the same session.
 *   This is useful for small messages that persist across redirects.
 */
macchiato.middleware.flash.wrap_flash = (function macchiato$middleware$flash$wrap_flash(handler){
return (function (request,respond,raise){
var request__$1 = macchiato.middleware.flash.flash_request.call(null,request);
return handler.call(null,request__$1,((function (request__$1){
return (function (response){
return respond.call(null,macchiato.middleware.flash.flash_response.call(null,response,request__$1));
});})(request__$1))
,raise);
});
});

//# sourceMappingURL=flash.js.map?rel=1488028098474