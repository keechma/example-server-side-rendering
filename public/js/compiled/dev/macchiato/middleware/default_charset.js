// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.default_charset');
goog.require('cljs.core');
goog.require('macchiato.util.response');
macchiato.middleware.default_charset.text_based_content_type_QMARK_ = (function macchiato$middleware$default_charset$text_based_content_type_QMARK_(content_type){
var or__25229__auto__ = cljs.core.re_find.call(null,/text\//,content_type);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.re_find.call(null,/application\/xml/,content_type);
}
});
macchiato.middleware.default_charset.contains_charset_QMARK_ = (function macchiato$middleware$default_charset$contains_charset_QMARK_(content_type){
return cljs.core.re_find.call(null,/;\s*charset=[^;]*/,content_type);
});
/**
 * Add a default charset to a response if the response has no charset and
 *   requires one. See: wrap-default-charset.
 */
macchiato.middleware.default_charset.default_charset_response = (function macchiato$middleware$default_charset$default_charset_response(response,charset){
if(cljs.core.truth_(response)){
var temp__4655__auto__ = macchiato.util.response.get_header.call(null,response,"Content-Type");
if(cljs.core.truth_(temp__4655__auto__)){
var content_type = temp__4655__auto__;
if(cljs.core.truth_((function (){var and__25217__auto__ = macchiato.middleware.default_charset.text_based_content_type_QMARK_.call(null,content_type);
if(cljs.core.truth_(and__25217__auto__)){
return cljs.core.not.call(null,macchiato.middleware.default_charset.contains_charset_QMARK_.call(null,content_type));
} else {
return and__25217__auto__;
}
})())){
return macchiato.util.response.charset.call(null,response,charset);
} else {
return response;
}
} else {
return response;
}
} else {
return null;
}
});
/**
 * Middleware that adds a charset to the content-type header of the response if
 *   one was not set by the handler.
 */
macchiato.middleware.default_charset.wrap_default_charset = (function macchiato$middleware$default_charset$wrap_default_charset(handler,charset){
return (function (request,respond,raise){
return handler.call(null,request,(function (p1__30275_SHARP_){
return respond.call(null,macchiato.middleware.default_charset.default_charset_response.call(null,p1__30275_SHARP_,charset));
}),raise);
});
});

//# sourceMappingURL=default_charset.js.map?rel=1488028097114