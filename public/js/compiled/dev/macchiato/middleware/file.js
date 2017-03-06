// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.file');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs_time.core');
goog.require('macchiato.fs');
goog.require('macchiato.util.response');
goog.require('macchiato.util.mime_type');
macchiato.middleware.file.Stream = cljs.nodejs.require.call(null,"stream");
macchiato.middleware.file.etag = cljs.nodejs.require.call(null,"etag");
/**
 * Returns a String corresponding to the guessed mime type for the given file,
 *   or application/octet-stream if a type cannot be guessed.
 */
macchiato.middleware.file.guess_mime_type = (function macchiato$middleware$file$guess_mime_type(file,mime_types){
var or__25229__auto__ = macchiato.util.mime_type.ext_mime_type.call(null,file.path,mime_types);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "application/octet-stream";
}
});
macchiato.middleware.file.file_stats = (function macchiato$middleware$file$file_stats(stream,mime_types){
var stats = macchiato.fs.stat.call(null,stream.path);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"etag","etag",-329255476),macchiato.middleware.file.etag.call(null,stats),new cljs.core.Keyword(null,"lmodified","lmodified",1458019696),(new Date(new cljs.core.Keyword(null,"mtime","mtime",963165087).cljs$core$IFn$_invoke$arity$1(stats).getTime())).toUTCString(),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(stats),new cljs.core.Keyword(null,"type","type",1174270348),macchiato.middleware.file.guess_mime_type.call(null,stream,mime_types)], null);
});
/**
 * Adds headers to response as described in wrap-file-info.
 */
macchiato.middleware.file.file_info_response = (function macchiato$middleware$file$file_info_response(var_args){
var args31021 = [];
var len__26342__auto___31026 = arguments.length;
var i__26343__auto___31027 = (0);
while(true){
if((i__26343__auto___31027 < len__26342__auto___31026)){
args31021.push((arguments[i__26343__auto___31027]));

var G__31028 = (i__26343__auto___31027 + (1));
i__26343__auto___31027 = G__31028;
continue;
} else {
}
break;
}

var G__31023 = args31021.length;
switch (G__31023) {
case 2:
return macchiato.middleware.file.file_info_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return macchiato.middleware.file.file_info_response.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31021.length)].join('')));

}
});

macchiato.middleware.file.file_info_response.cljs$core$IFn$_invoke$arity$2 = (function (response,request){
return macchiato.middleware.file.file_info_response.call(null,response,request,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.file.file_info_response.cljs$core$IFn$_invoke$arity$3 = (function (response,request,mime_types){
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
if((body instanceof macchiato.middleware.file.Stream)){
var map__31024 = macchiato.middleware.file.file_stats.call(null,body,mime_types);
var map__31024__$1 = ((((!((map__31024 == null)))?((((map__31024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31024):map__31024);
var etag = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"etag","etag",-329255476));
var lmodified = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"lmodified","lmodified",1458019696));
var size = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var response__$1 = macchiato.util.response.header.call(null,macchiato.util.response.header.call(null,macchiato.util.response.content_type.call(null,response,type),"ETag",etag),"Last-Modified",lmodified);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"if-none-match","if-none-match",-1406592404)], null)),etag)){
return cljs.core.assoc.call(null,macchiato.util.response.header.call(null,macchiato.util.response.status.call(null,response__$1,(304)),"Content-Length",(0)),new cljs.core.Keyword(null,"body","body",-2049205669),"");
} else {
return macchiato.util.response.header.call(null,response__$1,"Content-Length",size);
}
} else {
return response;
}
});

macchiato.middleware.file.file_info_response.cljs$lang$maxFixedArity = 3;

/**
 * Wrap a handler such that responses with a file for a body will have
 *   corresponding Content-Type, Content-Length, and Last Modified headers added if
 *   they can be determined from the file.
 *   If the request specifies a If-Modified-Since header that matches the last
 *   modification date of the file, a 304 Not Modified response is returned.
 *   If two arguments are given, the second is taken to be a map of file extensions
 *   to content types that will supplement the default, built-in map.
 */
macchiato.middleware.file.wrap_file = (function macchiato$middleware$file$wrap_file(var_args){
var args31030 = [];
var len__26342__auto___31033 = arguments.length;
var i__26343__auto___31034 = (0);
while(true){
if((i__26343__auto___31034 < len__26342__auto___31033)){
args31030.push((arguments[i__26343__auto___31034]));

var G__31035 = (i__26343__auto___31034 + (1));
i__26343__auto___31034 = G__31035;
continue;
} else {
}
break;
}

var G__31032 = args31030.length;
switch (G__31032) {
case 1:
return macchiato.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31030.length)].join('')));

}
});

macchiato.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.file.wrap_file.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$2 = (function (handler,mime_types){
return (function (request,respond,raise){
return handler.call(null,request,(function (response){
return respond.call(null,macchiato.middleware.file.file_info_response.call(null,response,request,mime_types));
}),raise);
});
});

macchiato.middleware.file.wrap_file.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=file.js.map?rel=1488028098504