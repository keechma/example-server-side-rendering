// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.anti_forgery');
goog.require('cljs.core');
goog.require('macchiato.crypto');
macchiato.middleware.anti_forgery.new_token = (function macchiato$middleware$anti_forgery$new_token(){
return macchiato.crypto.random_base64.call(null,(60));
});
macchiato.middleware.anti_forgery.session_token = (function macchiato$middleware$anti_forgery$session_token(request){
return cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("macchiato.middleware.anti-forgery","anti-forgery-token","macchiato.middleware.anti-forgery/anti-forgery-token",1563813937)], null));
});
macchiato.middleware.anti_forgery.find_or_create_token = (function macchiato$middleware$anti_forgery$find_or_create_token(request){
var or__25229__auto__ = macchiato.middleware.anti_forgery.session_token.call(null,request);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return macchiato.middleware.anti_forgery.new_token.call(null);
}
});
macchiato.middleware.anti_forgery.add_session_token = (function macchiato$middleware$anti_forgery$add_session_token(response,request,token){
if(cljs.core.truth_(response)){
var old_token = macchiato.middleware.anti_forgery.session_token.call(null,request);
if(cljs.core._EQ_.call(null,old_token,token)){
return response;
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(request))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("macchiato.middleware.anti-forgery","anti-forgery-token","macchiato.middleware.anti-forgery/anti-forgery-token",1563813937)], null),token);
}
} else {
return null;
}
});
macchiato.middleware.anti_forgery.form_params = (function macchiato$middleware$anti_forgery$form_params(request){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"form-params","form-params",1884296467).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707).cljs$core$IFn$_invoke$arity$1(request));
});
macchiato.middleware.anti_forgery.default_request_token = (function macchiato$middleware$anti_forgery$default_request_token(request){
var or__25229__auto__ = cljs.core.get.call(null,macchiato.middleware.anti_forgery.form_params.call(null,request),"__anti-forgery-token");
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request),"x-csrf-token");
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
return cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request),"x-xsrf-token");
}
}
});
macchiato.middleware.anti_forgery.valid_token_QMARK_ = (function macchiato$middleware$anti_forgery$valid_token_QMARK_(request,read_token){
var user_token = read_token.call(null,request);
var stored_token = macchiato.middleware.anti_forgery.session_token.call(null,request);
var and__25217__auto__ = user_token;
if(cljs.core.truth_(and__25217__auto__)){
var and__25217__auto____$1 = stored_token;
if(cljs.core.truth_(and__25217__auto____$1)){
return macchiato.crypto.eq_QMARK_.call(null,user_token,stored_token);
} else {
return and__25217__auto____$1;
}
} else {
return and__25217__auto__;
}
});
macchiato.middleware.anti_forgery.get_request_QMARK_ = (function macchiato$middleware$anti_forgery$get_request_QMARK_(p__28800){
var map__28803 = p__28800;
var map__28803__$1 = ((((!((map__28803 == null)))?((((map__28803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28803):map__28803);
var method = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
return (cljs.core._EQ_.call(null,method,new cljs.core.Keyword(null,"head","head",-771383919))) || (cljs.core._EQ_.call(null,method,new cljs.core.Keyword(null,"get","get",1683182755))) || (cljs.core._EQ_.call(null,method,new cljs.core.Keyword(null,"options","options",99638489)));
});
macchiato.middleware.anti_forgery.valid_request_QMARK_ = (function macchiato$middleware$anti_forgery$valid_request_QMARK_(request,read_token){
var or__25229__auto__ = macchiato.middleware.anti_forgery.get_request_QMARK_.call(null,request);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return macchiato.middleware.anti_forgery.valid_token_QMARK_.call(null,request,read_token);
}
});
macchiato.middleware.anti_forgery.default_error_response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/html"], null),new cljs.core.Keyword(null,"body","body",-2049205669),"<h1>Invalid anti-forgery token</h1>"], null);
macchiato.middleware.anti_forgery.constant_handler = (function macchiato$middleware$anti_forgery$constant_handler(response){
return (function() {
var G__28805 = null;
var G__28805__1 = (function (_){
return response;
});
var G__28805__3 = (function (_,respond,___$1){
return respond.call(null,response);
});
G__28805 = function(_,respond,___$1){
switch(arguments.length){
case 1:
return G__28805__1.call(this,_);
case 3:
return G__28805__3.call(this,_,respond,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28805.cljs$core$IFn$_invoke$arity$1 = G__28805__1;
G__28805.cljs$core$IFn$_invoke$arity$3 = G__28805__3;
return G__28805;
})()
});
macchiato.middleware.anti_forgery.make_error_handler = (function macchiato$middleware$anti_forgery$make_error_handler(options){
var or__25229__auto__ = new cljs.core.Keyword(null,"error-handler","error-handler",-484945776).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return macchiato.middleware.anti_forgery.constant_handler.call(null,new cljs.core.Keyword(null,"error-response","error-response",-2125312957).cljs$core$IFn$_invoke$arity$2(options,macchiato.middleware.anti_forgery.default_error_response));
}
});
/**
 * Middleware that prevents CSRF attacks. Any POST request to the handler
 *   returned by this function must contain a valid anti-forgery token, or else an
 *   access-denied response is returned.
 * 
 *   The anti-forgery token can be placed into a HTML page via the
 *   *anti-forgery-token* var, which is bound to a random key unique to the
 *   current session. By default, the token is expected to be in a form field
 *   named '__anti-forgery-token', or in the 'X-CSRF-Token' or 'X-XSRF-Token'
 *   headers.
 * 
 *   Accepts the following options:
 * 
 *   :read-token     - a function that takes a request and returns an anti-forgery
 *                  token, or nil if the token does not exist
 * 
 *   :error-response - the response to return if the anti-forgery token is
 *                  incorrect or missing
 * 
 *   :error-handler  - a handler function to call if the anti-forgery token is
 *                  incorrect or missing.
 * 
 *   Only one of :error-response, :error-handler may be specified.
 */
macchiato.middleware.anti_forgery.wrap_anti_forgery = (function macchiato$middleware$anti_forgery$wrap_anti_forgery(var_args){
var args28807 = [];
var len__26342__auto___28811 = arguments.length;
var i__26343__auto___28812 = (0);
while(true){
if((i__26343__auto___28812 < len__26342__auto___28811)){
args28807.push((arguments[i__26343__auto___28812]));

var G__28813 = (i__26343__auto___28812 + (1));
i__26343__auto___28812 = G__28813;
continue;
} else {
}
break;
}

var G__28809 = args28807.length;
switch (G__28809) {
case 1:
return macchiato.middleware.anti_forgery.wrap_anti_forgery.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.anti_forgery.wrap_anti_forgery.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28807.length)].join('')));

}
});

macchiato.middleware.anti_forgery.wrap_anti_forgery.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.anti_forgery.wrap_anti_forgery.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.anti_forgery.wrap_anti_forgery.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
if(cljs.core.not.call(null,(function (){var and__25217__auto__ = new cljs.core.Keyword(null,"error-response","error-response",-2125312957).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(and__25217__auto__)){
return new cljs.core.Keyword(null,"error-handler","error-handler",-484945776).cljs$core$IFn$_invoke$arity$1(options);
} else {
return and__25217__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (not (and (:error-response options) (:error-handler options)))"));
}

var read_token = new cljs.core.Keyword(null,"read-token","read-token",-1247906900).cljs$core$IFn$_invoke$arity$2(options,macchiato.middleware.anti_forgery.default_request_token);
var error_handler = macchiato.middleware.anti_forgery.make_error_handler.call(null,options);
return ((function (read_token,error_handler){
return (function (request,respond,raise){
var token = macchiato.middleware.anti_forgery.find_or_create_token.call(null,request);
var _STAR_anti_forgery_token_STAR_28810 = macchiato.middleware.anti_forgery._STAR_anti_forgery_token_STAR_;
macchiato.middleware.anti_forgery._STAR_anti_forgery_token_STAR_ = token;

try{if(cljs.core.truth_(macchiato.middleware.anti_forgery.valid_request_QMARK_.call(null,request,read_token))){
return handler.call(null,request,((function (_STAR_anti_forgery_token_STAR_28810,token,read_token,error_handler){
return (function (p1__28806_SHARP_){
return respond.call(null,macchiato.middleware.anti_forgery.add_session_token.call(null,p1__28806_SHARP_,request,token));
});})(_STAR_anti_forgery_token_STAR_28810,token,read_token,error_handler))
,raise);
} else {
return error_handler.call(null,request,respond,raise);
}
}finally {macchiato.middleware.anti_forgery._STAR_anti_forgery_token_STAR_ = _STAR_anti_forgery_token_STAR_28810;
}});
;})(read_token,error_handler))
});

macchiato.middleware.anti_forgery.wrap_anti_forgery.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=anti_forgery.js.map?rel=1488028095360