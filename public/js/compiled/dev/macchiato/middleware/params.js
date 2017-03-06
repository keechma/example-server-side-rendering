// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.params');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('macchiato.util.request');
macchiato.middleware.params.qs = cljs.nodejs.require.call(null,"qs");
macchiato.middleware.params.concat_stream = cljs.nodejs.require.call(null,"concat-stream");
macchiato.middleware.params.decode = (function macchiato$middleware$params$decode(s){
return cljs.core.js__GT_clj.call(null,macchiato.middleware.params.qs.parse(s));
});
macchiato.middleware.params.parse_params = (function macchiato$middleware$params$parse_params(params){
var params__$1 = macchiato.middleware.params.decode.call(null,params);
if(cljs.core.map_QMARK_.call(null,params__$1)){
return params__$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Parse and assoc parameters from the query string with the request.
 */
macchiato.middleware.params.assoc_query_params = (function macchiato$middleware$params$assoc_query_params(request){
return cljs.core.merge_with.call(null,cljs.core.merge,request,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var query_string = temp__4655__auto__;
var params = macchiato.middleware.params.parse_params.call(null,query_string);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),params,new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null);
}
})());
});
/**
 * Parse and assoc parameters from the request body with the request.
 */
macchiato.middleware.params.assoc_form_params = (function macchiato$middleware$params$assoc_form_params(request){
return cljs.core.merge_with.call(null,cljs.core.merge,request,(function (){var temp__4655__auto__ = (function (){var and__25217__auto__ = macchiato.util.request.urlencoded_form_QMARK_.call(null,request);
if(cljs.core.truth_(and__25217__auto__)){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(request);
} else {
return and__25217__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var body = temp__4655__auto__;
var params = macchiato.middleware.params.parse_params.call(null,body);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),params,new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null);
}
})());
});
/**
 * Adds parameters from the query string and the request body to the request
 *   map. See: wrap-params.
 */
macchiato.middleware.params.params_request = (function macchiato$middleware$params$params_request(var_args){
var args30278 = [];
var len__26342__auto___30281 = arguments.length;
var i__26343__auto___30282 = (0);
while(true){
if((i__26343__auto___30282 < len__26342__auto___30281)){
args30278.push((arguments[i__26343__auto___30282]));

var G__30283 = (i__26343__auto___30282 + (1));
i__26343__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var G__30280 = args30278.length;
switch (G__30280) {
case 1:
return macchiato.middleware.params.params_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.params.params_request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30278.length)].join('')));

}
});

macchiato.middleware.params.params_request.cljs$core$IFn$_invoke$arity$1 = (function (request){
return macchiato.middleware.params.params_request.call(null,request,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.params.params_request.cljs$core$IFn$_invoke$arity$2 = (function (request,options){
var request__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"form-params","form-params",1884296467).cljs$core$IFn$_invoke$arity$1(request))?request:macchiato.middleware.params.assoc_form_params.call(null,request));
if(cljs.core.truth_(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(request__$1))){
return request__$1;
} else {
return macchiato.middleware.params.assoc_query_params.call(null,request__$1);
}
});

macchiato.middleware.params.params_request.cljs$lang$maxFixedArity = 2;

/**
 * Middleware to parse urlencoded parameters from the query string and form
 *   body (if the request is a url-encoded form). Adds the following keys to
 *   the request map:
 *   :query-params - a map of parameters from the query string
 *   :form-params  - a map of parameters from the body
 *   :params       - a merged map of all types of parameter
 *   Accepts the following options:
 *   :encoding - encoding to use for url-decoding. If not specified, uses
 *            the request character encoding, or "UTF-8" if no request
 *            character encoding is set.
 */
macchiato.middleware.params.wrap_params = (function macchiato$middleware$params$wrap_params(var_args){
var args30285 = [];
var len__26342__auto___30291 = arguments.length;
var i__26343__auto___30292 = (0);
while(true){
if((i__26343__auto___30292 < len__26342__auto___30291)){
args30285.push((arguments[i__26343__auto___30292]));

var G__30293 = (i__26343__auto___30292 + (1));
i__26343__auto___30292 = G__30293;
continue;
} else {
}
break;
}

var G__30287 = args30285.length;
switch (G__30287) {
case 1:
return macchiato.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30285.length)].join('')));

}
});

macchiato.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.params.wrap_params.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
return (function (p__30288,respond,raise){
var map__30289 = p__30288;
var map__30289__$1 = ((((!((map__30289 == null)))?((((map__30289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);
var request = map__30289__$1;
var body = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(macchiato.util.request.urlencoded_form_QMARK_.call(null,request))){
if(typeof body === 'string'){
return handler.call(null,macchiato.middleware.params.params_request.call(null,request,options),respond,raise);
} else {
return body.pipe((function (){var encoding = (function (){var or__25229__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = macchiato.util.request.character_encoding.call(null,request);
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
return "utf8";
}
}
})();
return (new macchiato.middleware.params.concat_stream(((function (encoding,map__30289,map__30289__$1,request,body){
return (function (body__$1){
return handler.call(null,macchiato.middleware.params.params_request.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1.toString(encoding)),options),respond,raise);
});})(encoding,map__30289,map__30289__$1,request,body))
));
})());
}
} else {
return handler.call(null,macchiato.middleware.params.params_request.call(null,request,options),respond,raise);
}
});
});

macchiato.middleware.params.wrap_params.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=params.js.map?rel=1488028097156