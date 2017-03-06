// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.ssl');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('macchiato.util.response');
goog.require('macchiato.util.request');
macchiato.middleware.ssl.url = cljs.nodejs.require.call(null,"url");
/**
 * The default header used in wrap-forwarded-scheme (x-forwarded-proto).
 */
macchiato.middleware.ssl.default_scheme_header = "x-forwarded-proto";
/**
 * Change the :scheme of the request to the value present in a request header.
 *   See: wrap-forwarded-scheme.
 */
macchiato.middleware.ssl.forwarded_scheme_request = (function macchiato$middleware$ssl$forwarded_scheme_request(var_args){
var args31039 = [];
var len__26342__auto___31042 = arguments.length;
var i__26343__auto___31043 = (0);
while(true){
if((i__26343__auto___31043 < len__26342__auto___31042)){
args31039.push((arguments[i__26343__auto___31043]));

var G__31044 = (i__26343__auto___31043 + (1));
i__26343__auto___31043 = G__31044;
continue;
} else {
}
break;
}

var G__31041 = args31039.length;
switch (G__31041) {
case 1:
return macchiato.middleware.ssl.forwarded_scheme_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.ssl.forwarded_scheme_request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31039.length)].join('')));

}
});

macchiato.middleware.ssl.forwarded_scheme_request.cljs$core$IFn$_invoke$arity$1 = (function (request){
return macchiato.middleware.ssl.forwarded_scheme_request.call(null,request,macchiato.middleware.ssl.default_scheme_header);
});

macchiato.middleware.ssl.forwarded_scheme_request.cljs$core$IFn$_invoke$arity$2 = (function (request,header){
var header__$1 = clojure.string.lower_case.call(null,header);
var default$ = cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(request));
var scheme = clojure.string.lower_case.call(null,cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),header__$1], null),default$));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https",null,"http",null], null), null).call(null,scheme))){
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,scheme));
} else {
return request;
}
});

macchiato.middleware.ssl.forwarded_scheme_request.cljs$lang$maxFixedArity = 2;

/**
 * Middleware that changes the :scheme of the request map to the value present
 *   in a request header. This is useful if your application sits behind a
 *   reverse proxy or load balancer that handles the SSL transport.
 * 
 *   The header defaults to x-forwarded-proto.
 */
macchiato.middleware.ssl.wrap_forwarded_scheme = (function macchiato$middleware$ssl$wrap_forwarded_scheme(var_args){
var args31046 = [];
var len__26342__auto___31049 = arguments.length;
var i__26343__auto___31050 = (0);
while(true){
if((i__26343__auto___31050 < len__26342__auto___31049)){
args31046.push((arguments[i__26343__auto___31050]));

var G__31051 = (i__26343__auto___31050 + (1));
i__26343__auto___31050 = G__31051;
continue;
} else {
}
break;
}

var G__31048 = args31046.length;
switch (G__31048) {
case 1:
return macchiato.middleware.ssl.wrap_forwarded_scheme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.ssl.wrap_forwarded_scheme.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31046.length)].join('')));

}
});

macchiato.middleware.ssl.wrap_forwarded_scheme.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.ssl.wrap_forwarded_scheme.call(null,handler,macchiato.middleware.ssl.default_scheme_header);
});

macchiato.middleware.ssl.wrap_forwarded_scheme.cljs$core$IFn$_invoke$arity$2 = (function (handler,header){
return (function (request,respond,raise){
return handler.call(null,macchiato.middleware.ssl.forwarded_scheme_request.call(null,request,header),respond,raise);
});
});

macchiato.middleware.ssl.wrap_forwarded_scheme.cljs$lang$maxFixedArity = 2;

macchiato.middleware.ssl.get_request_QMARK_ = (function macchiato$middleware$ssl$get_request_QMARK_(p__31053){
var map__31056 = p__31053;
var map__31056__$1 = ((((!((map__31056 == null)))?((((map__31056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31056):map__31056);
var method = cljs.core.get.call(null,map__31056__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
return (cljs.core._EQ_.call(null,method,new cljs.core.Keyword(null,"head","head",-771383919))) || (cljs.core._EQ_.call(null,method,new cljs.core.Keyword(null,"get","get",1683182755)));
});
macchiato.middleware.ssl.valid_url_QMARK_ = (function macchiato$middleware$ssl$valid_url_QMARK_(url_string){
return cljs.core.re_matches.call(null,/^http[s]?\:\/\/.*/,url_string);
});
macchiato.middleware.ssl.https_url = (function macchiato$middleware$ssl$https_url(url_string,port){
if(cljs.core.truth_(macchiato.middleware.ssl.valid_url_QMARK_.call(null,url_string))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid URL: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_string)].join('')));
}

var url = macchiato.middleware.ssl.url.parse(url_string);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = url.auth;
if(cljs.core.truth_(temp__4657__auto__)){
var auth = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.hostname),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.hash)].join('');
});
/**
 * Given a HTTP request, return a redirect response to the equivalent HTTPS URL.
 *   See: wrap-ssl-redirect.
 */
macchiato.middleware.ssl.ssl_redirect_response = (function macchiato$middleware$ssl$ssl_redirect_response(request,options){
return macchiato.util.response.status.call(null,macchiato.util.response.found.call(null,macchiato.middleware.ssl.https_url.call(null,macchiato.util.request.request_url.call(null,request),new cljs.core.Keyword(null,"ssl-port","ssl-port",613478143).cljs$core$IFn$_invoke$arity$1(options))),(cljs.core.truth_(macchiato.middleware.ssl.get_request_QMARK_.call(null,request))?(301):(307)));
});
/**
 * Middleware that redirects any HTTP request to the equivalent HTTPS URL.
 * 
 *   Accepts the following options:
 * 
 *   :ssl-port - the SSL port to use for redirects, defaults to 443.
 */
macchiato.middleware.ssl.wrap_ssl_redirect = (function macchiato$middleware$ssl$wrap_ssl_redirect(var_args){
var args31058 = [];
var len__26342__auto___31062 = arguments.length;
var i__26343__auto___31063 = (0);
while(true){
if((i__26343__auto___31063 < len__26342__auto___31062)){
args31058.push((arguments[i__26343__auto___31063]));

var G__31064 = (i__26343__auto___31063 + (1));
i__26343__auto___31063 = G__31064;
continue;
} else {
}
break;
}

var G__31060 = args31058.length;
switch (G__31060) {
case 1:
return macchiato.middleware.ssl.wrap_ssl_redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.ssl.wrap_ssl_redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31058.length)].join('')));

}
});

macchiato.middleware.ssl.wrap_ssl_redirect.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.ssl.wrap_ssl_redirect.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.ssl.wrap_ssl_redirect.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
return (function (request,respond,raise){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.Keyword(null,"https","https",-1983909665))){
return handler.call(null,request,respond,raise);
} else {
try{return respond.call(null,macchiato.middleware.ssl.ssl_redirect_response.call(null,request,options));
}catch (e31061){if((e31061 instanceof Error)){
var e = e31061;
return raise.call(null,e);
} else {
throw e31061;

}
}}
});
});

macchiato.middleware.ssl.wrap_ssl_redirect.cljs$lang$maxFixedArity = 2;

macchiato.middleware.ssl.build_hsts_header = (function macchiato$middleware$ssl$build_hsts_header(p__31066){
var map__31069 = p__31066;
var map__31069__$1 = ((((!((map__31069 == null)))?((((map__31069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31069):map__31069);
var max_age = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"max-age","max-age",-270129271),(31536000));
var include_subdomains_QMARK_ = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"include-subdomains?","include-subdomains?",-607408897),true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("max-age="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_age),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(include_subdomains_QMARK_)?"; includeSubDomains":null))].join('');
});
/**
 * Add the Strict-Transport-Security header to the response. See: wrap-hsts.
 */
macchiato.middleware.ssl.hsts_response = (function macchiato$middleware$ssl$hsts_response(var_args){
var args31071 = [];
var len__26342__auto___31075 = arguments.length;
var i__26343__auto___31076 = (0);
while(true){
if((i__26343__auto___31076 < len__26342__auto___31075)){
args31071.push((arguments[i__26343__auto___31076]));

var G__31077 = (i__26343__auto___31076 + (1));
i__26343__auto___31076 = G__31077;
continue;
} else {
}
break;
}

var G__31073 = args31071.length;
switch (G__31073) {
case 1:
return macchiato.middleware.ssl.hsts_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.ssl.hsts_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31071.length)].join('')));

}
});

macchiato.middleware.ssl.hsts_response.cljs$core$IFn$_invoke$arity$1 = (function (response){
return macchiato.middleware.ssl.hsts_response.call(null,response,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.ssl.hsts_response.cljs$core$IFn$_invoke$arity$2 = (function (response,options){
var G__31074 = response;
if((G__31074 == null)){
return null;
} else {
return macchiato.util.response.header.call(null,G__31074,"Strict-Transport-Security",macchiato.middleware.ssl.build_hsts_header.call(null,options));
}
});

macchiato.middleware.ssl.hsts_response.cljs$lang$maxFixedArity = 2;

/**
 * Middleware that adds the Strict-Transport-Security header to the response
 *   from the handler. This ensures the browser will only use HTTPS for future
 *   requests to the domain.
 * 
 *   Accepts the following options:
 * 
 *   :max-age             - the max time in seconds the HSTS policy applies
 *                       (defaults to 31536000 seconds, or 1 year)
 * 
 *   :include-subdomains? - true if subdomains should be included in the HSTS
 *                       policy (defaults to true)
 * 
 *   See RFC 6797 for more information (https://tools.ietf.org/html/rfc6797).
 */
macchiato.middleware.ssl.wrap_hsts = (function macchiato$middleware$ssl$wrap_hsts(var_args){
var args31080 = [];
var len__26342__auto___31083 = arguments.length;
var i__26343__auto___31084 = (0);
while(true){
if((i__26343__auto___31084 < len__26342__auto___31083)){
args31080.push((arguments[i__26343__auto___31084]));

var G__31085 = (i__26343__auto___31084 + (1));
i__26343__auto___31084 = G__31085;
continue;
} else {
}
break;
}

var G__31082 = args31080.length;
switch (G__31082) {
case 1:
return macchiato.middleware.ssl.wrap_hsts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.ssl.wrap_hsts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31080.length)].join('')));

}
});

macchiato.middleware.ssl.wrap_hsts.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.ssl.wrap_hsts.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.ssl.wrap_hsts.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
return (function (request,respond,raise){
return handler.call(null,request,(function (p1__31079_SHARP_){
return respond.call(null,macchiato.middleware.ssl.hsts_response.call(null,p1__31079_SHARP_,options));
}),raise);
});
});

macchiato.middleware.ssl.wrap_hsts.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=ssl.js.map?rel=1488028098559