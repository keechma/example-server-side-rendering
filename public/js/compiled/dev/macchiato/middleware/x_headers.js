// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.x_headers');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('macchiato.util.response');
macchiato.middleware.x_headers.allow_from_QMARK_ = (function macchiato$middleware$x_headers$allow_from_QMARK_(frame_options){
return (cljs.core.map_QMARK_.call(null,frame_options)) && (cljs.core._EQ_.call(null,cljs.core.keys.call(null,frame_options),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"allow-from","allow-from",-410023930)], null))) && (typeof new cljs.core.Keyword(null,"allow-from","allow-from",-410023930).cljs$core$IFn$_invoke$arity$1(frame_options) === 'string');
});
macchiato.middleware.x_headers.format_frame_options = (function macchiato$middleware$x_headers$format_frame_options(frame_options){
if(cljs.core.map_QMARK_.call(null,frame_options)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ALLOW-FROM "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"allow-from","allow-from",-410023930).cljs$core$IFn$_invoke$arity$1(frame_options))].join('');
} else {
return cuerdas.core.upper.call(null,cljs.core.name.call(null,frame_options));
}
});
macchiato.middleware.x_headers.format_xss_protection = (function macchiato$middleware$x_headers$format_xss_protection(enable_QMARK_,mode){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(enable_QMARK_)?"1":"0")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"block","block",664686210),mode))?"; mode=block":null))].join('');
});
macchiato.middleware.x_headers.wrap_x_header = (function macchiato$middleware$x_headers$wrap_x_header(handler,header_name,header_value){
return (function (request,respond,raise){
return handler.call(null,request,(function (p1__30297_SHARP_){
return respond.call(null,(function (){var G__30299 = p1__30297_SHARP_;
if((G__30299 == null)){
return null;
} else {
return macchiato.util.response.header.call(null,G__30299,header_name,header_value);
}
})());
}),raise);
});
});
/**
 * Add the X-Frame-Options header to the response. See: wrap-frame-options.
 */
macchiato.middleware.x_headers.frame_options_response = (function macchiato$middleware$x_headers$frame_options_response(response,frame_options){
var G__30301 = response;
if((G__30301 == null)){
return null;
} else {
return macchiato.util.response.header.call(null,G__30301,"X-Frame-Options",macchiato.middleware.x_headers.format_frame_options.call(null,frame_options));
}
});
/**
 * Middleware that adds the X-Frame-Options header to the response. This governs
 *   whether your site can be rendered in a <frame>, <iframe> or <object>, and is
 *   typically used to prevent clickjacking attacks.
 *   The following frame options are allowed:
 *   :deny             - prevent any framing of the content
 *   :sameorigin       - allow only the current site to frame the content
 *   {:allow-from uri} - allow only the specified URI to frame the page
 *   The :deny and :sameorigin options are keywords, while the :allow-from option
 *   is a map consisting of one key/value pair.
 *   Note that browser support for :allow-from is incomplete. See:
 *   https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options
 */
macchiato.middleware.x_headers.wrap_frame_options = (function macchiato$middleware$x_headers$wrap_frame_options(handler,frame_options){
if(cljs.core.truth_((function (){var or__25229__auto__ = cljs.core._EQ_.call(null,frame_options,new cljs.core.Keyword(null,"deny","deny",1589338523));
if(or__25229__auto__){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = cljs.core._EQ_.call(null,frame_options,new cljs.core.Keyword(null,"sameorigin","sameorigin",-366814876));
if(or__25229__auto____$1){
return or__25229__auto____$1;
} else {
return macchiato.middleware.x_headers.allow_from_QMARK_.call(null,frame_options);
}
}
})())){
} else {
throw (new Error("Assert failed: (or (= frame-options :deny) (= frame-options :sameorigin) (allow-from? frame-options))"));
}

return macchiato.middleware.x_headers.wrap_x_header.call(null,handler,"X-Frame-Options",macchiato.middleware.x_headers.format_frame_options.call(null,frame_options));
});
/**
 * Add the X-Content-Type-Options header to the response.
 *   See: wrap-content-type-options.
 */
macchiato.middleware.x_headers.content_type_options_response = (function macchiato$middleware$x_headers$content_type_options_response(response,content_type_options){
var G__30303 = response;
if((G__30303 == null)){
return null;
} else {
return macchiato.util.response.header.call(null,G__30303,"X-Content-Type-Options",cljs.core.name.call(null,content_type_options));
}
});
/**
 * Middleware that adds the X-Content-Type-Options header to the response. This
 *   currently only accepts one option:
 *   :nosniff - prevent resources with invalid media types being loaded as
 *           stylesheets or scripts
 *   This prevents attacks based around media type confusion. See:
 *   http://msdn.microsoft.com/en-us/library/ie/gg622941(v=vs.85).aspx
 */
macchiato.middleware.x_headers.wrap_content_type_options = (function macchiato$middleware$x_headers$wrap_content_type_options(handler,content_type_options){
if(cljs.core._EQ_.call(null,content_type_options,new cljs.core.Keyword(null,"nosniff","nosniff",-794034758))){
} else {
throw (new Error("Assert failed: (= content-type-options :nosniff)"));
}

return macchiato.middleware.x_headers.wrap_x_header.call(null,handler,"X-Content-Type-Options",cljs.core.name.call(null,content_type_options));
});
/**
 * Add the X-XSS-Protection header to the response. See: wrap-xss-protection.
 */
macchiato.middleware.x_headers.xss_protection_response = (function macchiato$middleware$x_headers$xss_protection_response(var_args){
var args30304 = [];
var len__26342__auto___30308 = arguments.length;
var i__26343__auto___30309 = (0);
while(true){
if((i__26343__auto___30309 < len__26342__auto___30308)){
args30304.push((arguments[i__26343__auto___30309]));

var G__30310 = (i__26343__auto___30309 + (1));
i__26343__auto___30309 = G__30310;
continue;
} else {
}
break;
}

var G__30306 = args30304.length;
switch (G__30306) {
case 2:
return macchiato.middleware.x_headers.xss_protection_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return macchiato.middleware.x_headers.xss_protection_response.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30304.length)].join('')));

}
});

macchiato.middleware.x_headers.xss_protection_response.cljs$core$IFn$_invoke$arity$2 = (function (response,enable_QMARK_){
return macchiato.middleware.x_headers.xss_protection_response.call(null,response,enable_QMARK_,null);
});

macchiato.middleware.x_headers.xss_protection_response.cljs$core$IFn$_invoke$arity$3 = (function (response,enable_QMARK_,options){
var G__30307 = response;
if((G__30307 == null)){
return null;
} else {
return macchiato.util.response.header.call(null,G__30307,"X-XSS-Protection",macchiato.middleware.x_headers.format_xss_protection.call(null,enable_QMARK_,options));
}
});

macchiato.middleware.x_headers.xss_protection_response.cljs$lang$maxFixedArity = 3;

/**
 * Middleware that adds the X-XSS-Protection header to the response. This header
 *   enables a heuristic filter in browsers for detecting cross-site scripting
 *   attacks. Usually on by default.
 *   The :enable? key determines whether the filter should be turned on.
 *   :mode - currently accepts only :block
 *   See: http://msdn.microsoft.com/en-us/library/dd565647(v=vs.85).aspx
 */
macchiato.middleware.x_headers.wrap_xss_protection = (function macchiato$middleware$x_headers$wrap_xss_protection(var_args){
var args30312 = [];
var len__26342__auto___30318 = arguments.length;
var i__26343__auto___30319 = (0);
while(true){
if((i__26343__auto___30319 < len__26342__auto___30318)){
args30312.push((arguments[i__26343__auto___30319]));

var G__30320 = (i__26343__auto___30319 + (1));
i__26343__auto___30319 = G__30320;
continue;
} else {
}
break;
}

var G__30314 = args30312.length;
switch (G__30314) {
case 1:
return macchiato.middleware.x_headers.wrap_xss_protection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.x_headers.wrap_xss_protection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30312.length)].join('')));

}
});

macchiato.middleware.x_headers.wrap_xss_protection.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.x_headers.wrap_xss_protection.call(null,handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enable?","enable?",-407239694),true], null));
});

macchiato.middleware.x_headers.wrap_xss_protection.cljs$core$IFn$_invoke$arity$2 = (function (handler,p__30315){
var map__30316 = p__30315;
var map__30316__$1 = ((((!((map__30316 == null)))?((((map__30316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30316):map__30316);
var enable_QMARK_ = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"enable?","enable?",-407239694));
var mode = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return macchiato.middleware.x_headers.wrap_x_header.call(null,handler,"X-XSS-Protection",macchiato.middleware.x_headers.format_xss_protection.call(null,enable_QMARK_,mode));
});

macchiato.middleware.x_headers.wrap_xss_protection.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=x_headers.js.map?rel=1488028097206