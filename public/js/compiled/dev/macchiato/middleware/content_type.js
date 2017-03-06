// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.content_type');
goog.require('cljs.core');
goog.require('macchiato.util.mime_type');
goog.require('macchiato.util.response');
/**
 * Adds a content-type header to response. See: wrap-content-type.
 */
macchiato.middleware.content_type.content_type_response = (function macchiato$middleware$content_type$content_type_response(var_args){
var args30333 = [];
var len__26342__auto___30336 = arguments.length;
var i__26343__auto___30337 = (0);
while(true){
if((i__26343__auto___30337 < len__26342__auto___30336)){
args30333.push((arguments[i__26343__auto___30337]));

var G__30338 = (i__26343__auto___30337 + (1));
i__26343__auto___30337 = G__30338;
continue;
} else {
}
break;
}

var G__30335 = args30333.length;
switch (G__30335) {
case 2:
return macchiato.middleware.content_type.content_type_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return macchiato.middleware.content_type.content_type_response.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30333.length)].join('')));

}
});

macchiato.middleware.content_type.content_type_response.cljs$core$IFn$_invoke$arity$2 = (function (response,request){
return macchiato.middleware.content_type.content_type_response.call(null,response,request,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.content_type.content_type_response.cljs$core$IFn$_invoke$arity$3 = (function (response,request,options){
if(cljs.core.truth_(response)){
if(cljs.core.truth_(macchiato.util.response.get_header.call(null,response,"Content-Type"))){
return response;
} else {
var mime_type = macchiato.util.mime_type.ext_mime_type.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.Keyword(null,"mime-types","mime-types",731457503).cljs$core$IFn$_invoke$arity$1(options));
return macchiato.util.response.content_type.call(null,response,(function (){var or__25229__auto__ = mime_type;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "text/plain";
}
})());
}
} else {
return null;
}
});

macchiato.middleware.content_type.content_type_response.cljs$lang$maxFixedArity = 3;

/**
 * Middleware that adds a content-type header to the response if one is not
 *   set by the handler. Uses the macchiato.util.mime-type/ext-mime-type function to
 *   guess the content-type from the file extension in the URI. If no
 *   content-type can be found, it defaults to 'application/octet-stream'.
 * 
 *   Accepts the following options:
 * 
 *   :mime-types - a map of filename extensions to mime-types that will be
 *              used in addition to the ones defined in
 *              macchiato.util.mime-types/default-mime-types
 */
macchiato.middleware.content_type.wrap_content_type = (function macchiato$middleware$content_type$wrap_content_type(var_args){
var args30340 = [];
var len__26342__auto___30343 = arguments.length;
var i__26343__auto___30344 = (0);
while(true){
if((i__26343__auto___30344 < len__26342__auto___30343)){
args30340.push((arguments[i__26343__auto___30344]));

var G__30345 = (i__26343__auto___30344 + (1));
i__26343__auto___30344 = G__30345;
continue;
} else {
}
break;
}

var G__30342 = args30340.length;
switch (G__30342) {
case 1:
return macchiato.middleware.content_type.wrap_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.content_type.wrap_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30340.length)].join('')));

}
});

macchiato.middleware.content_type.wrap_content_type.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.content_type.wrap_content_type.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.content_type.wrap_content_type.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
return (function (request,respond,raise){
return handler.call(null,request,(function (response){
return respond.call(null,macchiato.middleware.content_type.content_type_response.call(null,response,request,options));
}),raise);
});
});

macchiato.middleware.content_type.wrap_content_type.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=content_type.js.map?rel=1488028097254