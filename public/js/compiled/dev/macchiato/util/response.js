// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.util.response');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('macchiato.fs');
/**
 * Looks up a header in a response (or request) case insensitively,
 *   returning the header map entry, or nil if not present.
 */
macchiato.util.response.find_header = (function macchiato$util$response$find_header(resp,header_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29896_SHARP_){
return cljs.core._EQ_.call(null,cuerdas.core.lower.call(null,header_name),cuerdas.core.lower.call(null,cljs.core.key.call(null,p1__29896_SHARP_)));
}),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(resp)));
});
/**
 * Looks up a header in a response (or request) case insensitively,
 *   returning the value of the header, or nil if not present.
 */
macchiato.util.response.get_header = (function macchiato$util$response$get_header(resp,header_name){
var G__29898 = resp;
var G__29898__$1 = (((G__29898 == null))?null:macchiato.util.response.find_header.call(null,G__29898,header_name));
if((G__29898__$1 == null)){
return null;
} else {
return cljs.core.val.call(null,G__29898__$1);
}
});
/**
 * Looks up a header in a response (or request) case insensitively,
 *   then updates the header with the supplied function and arguments in the
 *   manner of update-in.
 */
macchiato.util.response.update_header = (function macchiato$util$response$update_header(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29906 = arguments.length;
var i__26343__auto___29907 = (0);
while(true){
if((i__26343__auto___29907 < len__26342__auto___29906)){
args__26349__auto__.push((arguments[i__26343__auto___29907]));

var G__29908 = (i__26343__auto___29907 + (1));
i__26343__auto___29907 = G__29908;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((3) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((3)),(0),null)):null);
return macchiato.util.response.update_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26350__auto__);
});

macchiato.util.response.update_header.cljs$core$IFn$_invoke$arity$variadic = (function (resp,header_name,f,args){
var header_key = (function (){var or__25229__auto__ = (function (){var G__29905 = resp;
var G__29905__$1 = (((G__29905 == null))?null:macchiato.util.response.find_header.call(null,G__29905,header_name));
if((G__29905__$1 == null)){
return null;
} else {
return cljs.core.key.call(null,G__29905__$1);
}
})();
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return header_name;
}
})();
return cljs.core.update_in.call(null,resp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),header_key], null),((function (header_key){
return (function (p1__29899_SHARP_){
return cljs.core.apply.call(null,f,p1__29899_SHARP_,args);
});})(header_key))
);
});

macchiato.util.response.update_header.cljs$lang$maxFixedArity = (3);

macchiato.util.response.update_header.cljs$lang$applyTo = (function (seq29900){
var G__29901 = cljs.core.first.call(null,seq29900);
var seq29900__$1 = cljs.core.next.call(null,seq29900);
var G__29902 = cljs.core.first.call(null,seq29900__$1);
var seq29900__$2 = cljs.core.next.call(null,seq29900__$1);
var G__29903 = cljs.core.first.call(null,seq29900__$2);
var seq29900__$3 = cljs.core.next.call(null,seq29900__$2);
return macchiato.util.response.update_header.cljs$core$IFn$_invoke$arity$variadic(G__29901,G__29902,G__29903,seq29900__$3);
});

/**
 * Returns an updated response with the specified header added.
 */
macchiato.util.response.header = (function macchiato$util$response$header(resp,name,value){
return cljs.core.assoc_in.call(null,resp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),name], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
/**
 * Returns an updated response with the a Content-Type header corresponding
 *   to the given content-type.
 */
macchiato.util.response.content_type = (function macchiato$util$response$content_type(resp,content_type){
return macchiato.util.response.header.call(null,resp,"Content-Type",content_type);
});
/**
 * Returns an updated response with the supplied charset added to the
 *   Content-Type header.
 */
macchiato.util.response.charset = (function macchiato$util$response$charset(resp,charset){
return macchiato.util.response.update_header.call(null,resp,"Content-Type",(function (content_type){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.replace.call(null,(function (){var or__25229__auto__ = content_type;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "text/plain";
}
})(),/;\s*charset=[^;]*/,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("; charset="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(charset)].join('');
}));
});
/**
 * sets the status code of the response
 */
macchiato.util.response.status = (function macchiato$util$response$status(resp,status){
return cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"status","status",-1997798413),status);
});
/**
 * accepts a path to a file, and returns a response with the body set to the file stream.
 */
macchiato.util.response.file = (function macchiato$util$response$file(path){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),macchiato.fs.read_stream.call(null,path)], null);
});
/**
 * True if the supplied value is a valid response map.
 */
macchiato.util.response.response_QMARK_ = (function macchiato$util$response$response_QMARK_(resp){
return (cljs.core.map_QMARK_.call(null,resp)) && (cljs.core.integer_QMARK_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(resp))) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(resp)));
});
/**
 * 100 Continue (Informational)
 *   The server has received the request headers and the client should proceed to send the request body.
 */
macchiato.util.response.continue$ = (function macchiato$util$response$continue(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(100),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 101 Switching Protocols (Informational)
 *   The server is switching protocols because the client requested the switch.
 */
macchiato.util.response.switching_protocols = (function macchiato$util$response$switching_protocols(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(101),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 102 Processing (Informational)
 *   The server is processing the request but no response is available yet.
 */
macchiato.util.response.processing = (function macchiato$util$response$processing(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(102),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 200 OK (Success)
 *   OK
 */
macchiato.util.response.ok = (function macchiato$util$response$ok(var_args){
var args29909 = [];
var len__26342__auto___29912 = arguments.length;
var i__26343__auto___29913 = (0);
while(true){
if((i__26343__auto___29913 < len__26342__auto___29912)){
args29909.push((arguments[i__26343__auto___29913]));

var G__29914 = (i__26343__auto___29913 + (1));
i__26343__auto___29913 = G__29914;
continue;
} else {
}
break;
}

var G__29911 = args29909.length;
switch (G__29911) {
case 0:
return macchiato.util.response.ok.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.ok.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29909.length)].join('')));

}
});

macchiato.util.response.ok.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.ok.call(null,null);
});

macchiato.util.response.ok.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.ok.cljs$lang$maxFixedArity = 1;

/**
 * 201 Created (Success)
 *   The request has been fulfilled and resulted in a new resource being created.
 */
macchiato.util.response.created = (function macchiato$util$response$created(var_args){
var args29916 = [];
var len__26342__auto___29919 = arguments.length;
var i__26343__auto___29920 = (0);
while(true){
if((i__26343__auto___29920 < len__26342__auto___29919)){
args29916.push((arguments[i__26343__auto___29920]));

var G__29921 = (i__26343__auto___29920 + (1));
i__26343__auto___29920 = G__29921;
continue;
} else {
}
break;
}

var G__29918 = args29916.length;
switch (G__29918) {
case 0:
return macchiato.util.response.created.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.created.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.util.response.created.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29916.length)].join('')));

}
});

macchiato.util.response.created.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.created.call(null,null);
});

macchiato.util.response.created.cljs$core$IFn$_invoke$arity$1 = (function (url){
return macchiato.util.response.created.call(null,url,null);
});

macchiato.util.response.created.cljs$core$IFn$_invoke$arity$2 = (function (url,body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(201),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.created.cljs$lang$maxFixedArity = 2;

/**
 * 202 Accepted (Success)
 *   The request has been accepted for processing but the processing has not been completed.
 */
macchiato.util.response.accepted = (function macchiato$util$response$accepted(var_args){
var args29923 = [];
var len__26342__auto___29926 = arguments.length;
var i__26343__auto___29927 = (0);
while(true){
if((i__26343__auto___29927 < len__26342__auto___29926)){
args29923.push((arguments[i__26343__auto___29927]));

var G__29928 = (i__26343__auto___29927 + (1));
i__26343__auto___29927 = G__29928;
continue;
} else {
}
break;
}

var G__29925 = args29923.length;
switch (G__29925) {
case 0:
return macchiato.util.response.accepted.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.accepted.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29923.length)].join('')));

}
});

macchiato.util.response.accepted.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.accepted.call(null,null);
});

macchiato.util.response.accepted.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(202),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.accepted.cljs$lang$maxFixedArity = 1;

/**
 * 203 Non-Authoritative Information (Success)
 *   The server successfully processed the request but is returning information that may be from another source.
 */
macchiato.util.response.non_authoritative_information = (function macchiato$util$response$non_authoritative_information(var_args){
var args29930 = [];
var len__26342__auto___29933 = arguments.length;
var i__26343__auto___29934 = (0);
while(true){
if((i__26343__auto___29934 < len__26342__auto___29933)){
args29930.push((arguments[i__26343__auto___29934]));

var G__29935 = (i__26343__auto___29934 + (1));
i__26343__auto___29934 = G__29935;
continue;
} else {
}
break;
}

var G__29932 = args29930.length;
switch (G__29932) {
case 0:
return macchiato.util.response.non_authoritative_information.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.non_authoritative_information.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29930.length)].join('')));

}
});

macchiato.util.response.non_authoritative_information.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.non_authoritative_information.call(null,null);
});

macchiato.util.response.non_authoritative_information.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(203),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.non_authoritative_information.cljs$lang$maxFixedArity = 1;

/**
 * 204 No Content (Success)
 *   The server successfully processed the request, but is not returning any content. Usually used as a response to a successful delete request.
 */
macchiato.util.response.no_content = (function macchiato$util$response$no_content(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(204),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 205 Reset Content (Success)
 *   The server successfully processed the request but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
 */
macchiato.util.response.reset_content = (function macchiato$util$response$reset_content(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(205),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 206 Partial Content (Success)
 *   The server is delivering only part of the resource due to a range header sent by the client.
 */
macchiato.util.response.partial_content = (function macchiato$util$response$partial_content(var_args){
var args29937 = [];
var len__26342__auto___29940 = arguments.length;
var i__26343__auto___29941 = (0);
while(true){
if((i__26343__auto___29941 < len__26342__auto___29940)){
args29937.push((arguments[i__26343__auto___29941]));

var G__29942 = (i__26343__auto___29941 + (1));
i__26343__auto___29941 = G__29942;
continue;
} else {
}
break;
}

var G__29939 = args29937.length;
switch (G__29939) {
case 0:
return macchiato.util.response.partial_content.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.partial_content.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29937.length)].join('')));

}
});

macchiato.util.response.partial_content.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.partial_content.call(null,null);
});

macchiato.util.response.partial_content.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(206),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.partial_content.cljs$lang$maxFixedArity = 1;

/**
 * 207 Multi-Status (Success)
 *   The message body that follows is an XML message and can contain a number of separate response codes depending on how many sub-requests were made.
 */
macchiato.util.response.multi_status = (function macchiato$util$response$multi_status(var_args){
var args29944 = [];
var len__26342__auto___29947 = arguments.length;
var i__26343__auto___29948 = (0);
while(true){
if((i__26343__auto___29948 < len__26342__auto___29947)){
args29944.push((arguments[i__26343__auto___29948]));

var G__29949 = (i__26343__auto___29948 + (1));
i__26343__auto___29948 = G__29949;
continue;
} else {
}
break;
}

var G__29946 = args29944.length;
switch (G__29946) {
case 0:
return macchiato.util.response.multi_status.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.multi_status.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29944.length)].join('')));

}
});

macchiato.util.response.multi_status.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.multi_status.call(null,null);
});

macchiato.util.response.multi_status.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(207),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.multi_status.cljs$lang$maxFixedArity = 1;

/**
 * 208 Already Reported (Success)
 *   The members of a DAV binding have already been enumerated in a previous reply to this request and are not being included again.
 */
macchiato.util.response.already_reported = (function macchiato$util$response$already_reported(var_args){
var args29951 = [];
var len__26342__auto___29954 = arguments.length;
var i__26343__auto___29955 = (0);
while(true){
if((i__26343__auto___29955 < len__26342__auto___29954)){
args29951.push((arguments[i__26343__auto___29955]));

var G__29956 = (i__26343__auto___29955 + (1));
i__26343__auto___29955 = G__29956;
continue;
} else {
}
break;
}

var G__29953 = args29951.length;
switch (G__29953) {
case 0:
return macchiato.util.response.already_reported.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.already_reported.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29951.length)].join('')));

}
});

macchiato.util.response.already_reported.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.already_reported.call(null,null);
});

macchiato.util.response.already_reported.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(208),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.already_reported.cljs$lang$maxFixedArity = 1;

/**
 * 226 IM Used (Success)
 *   The server has fulfilled a GET request for the resource and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 */
macchiato.util.response.im_used = (function macchiato$util$response$im_used(var_args){
var args29958 = [];
var len__26342__auto___29961 = arguments.length;
var i__26343__auto___29962 = (0);
while(true){
if((i__26343__auto___29962 < len__26342__auto___29961)){
args29958.push((arguments[i__26343__auto___29962]));

var G__29963 = (i__26343__auto___29962 + (1));
i__26343__auto___29962 = G__29963;
continue;
} else {
}
break;
}

var G__29960 = args29958.length;
switch (G__29960) {
case 0:
return macchiato.util.response.im_used.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.im_used.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29958.length)].join('')));

}
});

macchiato.util.response.im_used.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.im_used.call(null,null);
});

macchiato.util.response.im_used.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(226),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.im_used.cljs$lang$maxFixedArity = 1;

/**
 * 300 Multiple Choices (Redirection)
 *   There are multiple options for the resource that the client may follow.
 */
macchiato.util.response.multiple_choices = (function macchiato$util$response$multiple_choices(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(300),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 301 Moved Permanently (Redirection)
 *   This and all future requests should be directed to the given URI.
 */
macchiato.util.response.moved_permanently = (function macchiato$util$response$moved_permanently(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(301),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 302 Found (Redirection)
 *   The resource was found but at a different URI.
 */
macchiato.util.response.found = (function macchiato$util$response$found(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(302),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 303 See Other (Redirection)
 *   The response to the request can be found under another URI using a GET method.
 */
macchiato.util.response.see_other = (function macchiato$util$response$see_other(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(303),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 304 Not Modified (Redirection)
 *   The resource has not been modified since last requested.
 */
macchiato.util.response.not_modified = (function macchiato$util$response$not_modified(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(304),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 305 Use Proxy (Redirection)
 *   This single request is to be repeated via the proxy given by the Location field.
 */
macchiato.util.response.use_proxy = (function macchiato$util$response$use_proxy(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(305),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 307 Temporary Redirect (Redirection)
 *   The request should be repeated with another URI but future requests can still use the original URI.
 */
macchiato.util.response.temporary_redirect = (function macchiato$util$response$temporary_redirect(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(307),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 308 Permanent Redirect (Redirection)
 *   The request and all future requests should be repeated using another URI.
 */
macchiato.util.response.permanent_redirect = (function macchiato$util$response$permanent_redirect(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(308),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
/**
 * 400 Bad Request (ClientError)
 *   The request contains bad syntax or cannot be fulfilled.
 */
macchiato.util.response.bad_request = (function macchiato$util$response$bad_request(var_args){
var args29965 = [];
var len__26342__auto___29968 = arguments.length;
var i__26343__auto___29969 = (0);
while(true){
if((i__26343__auto___29969 < len__26342__auto___29968)){
args29965.push((arguments[i__26343__auto___29969]));

var G__29970 = (i__26343__auto___29969 + (1));
i__26343__auto___29969 = G__29970;
continue;
} else {
}
break;
}

var G__29967 = args29965.length;
switch (G__29967) {
case 0:
return macchiato.util.response.bad_request.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.bad_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29965.length)].join('')));

}
});

macchiato.util.response.bad_request.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.bad_request.call(null,null);
});

macchiato.util.response.bad_request.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(400),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.bad_request.cljs$lang$maxFixedArity = 1;

/**
 * 401 Unauthorized (ClientError)
 *   Authentication is possible but has failed or not yet been provided.
 */
macchiato.util.response.unauthorized = (function macchiato$util$response$unauthorized(var_args){
var args29972 = [];
var len__26342__auto___29975 = arguments.length;
var i__26343__auto___29976 = (0);
while(true){
if((i__26343__auto___29976 < len__26342__auto___29975)){
args29972.push((arguments[i__26343__auto___29976]));

var G__29977 = (i__26343__auto___29976 + (1));
i__26343__auto___29976 = G__29977;
continue;
} else {
}
break;
}

var G__29974 = args29972.length;
switch (G__29974) {
case 0:
return macchiato.util.response.unauthorized.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.unauthorized.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29972.length)].join('')));

}
});

macchiato.util.response.unauthorized.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.unauthorized.call(null,null);
});

macchiato.util.response.unauthorized.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.unauthorized.cljs$lang$maxFixedArity = 1;

/**
 * 402 Payment Required (ClientError)
 *   Reserved for future use.
 */
macchiato.util.response.payment_required = (function macchiato$util$response$payment_required(var_args){
var args29979 = [];
var len__26342__auto___29982 = arguments.length;
var i__26343__auto___29983 = (0);
while(true){
if((i__26343__auto___29983 < len__26342__auto___29982)){
args29979.push((arguments[i__26343__auto___29983]));

var G__29984 = (i__26343__auto___29983 + (1));
i__26343__auto___29983 = G__29984;
continue;
} else {
}
break;
}

var G__29981 = args29979.length;
switch (G__29981) {
case 0:
return macchiato.util.response.payment_required.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.payment_required.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29979.length)].join('')));

}
});

macchiato.util.response.payment_required.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.payment_required.call(null,null);
});

macchiato.util.response.payment_required.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(402),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.payment_required.cljs$lang$maxFixedArity = 1;

/**
 * 403 Forbidden (ClientError)
 *   The request was a legal request but the server is refusing to respond to it.
 */
macchiato.util.response.forbidden = (function macchiato$util$response$forbidden(var_args){
var args29986 = [];
var len__26342__auto___29989 = arguments.length;
var i__26343__auto___29990 = (0);
while(true){
if((i__26343__auto___29990 < len__26342__auto___29989)){
args29986.push((arguments[i__26343__auto___29990]));

var G__29991 = (i__26343__auto___29990 + (1));
i__26343__auto___29990 = G__29991;
continue;
} else {
}
break;
}

var G__29988 = args29986.length;
switch (G__29988) {
case 0:
return macchiato.util.response.forbidden.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.forbidden.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29986.length)].join('')));

}
});

macchiato.util.response.forbidden.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.forbidden.call(null,null);
});

macchiato.util.response.forbidden.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.forbidden.cljs$lang$maxFixedArity = 1;

/**
 * 404 Not Found (ClientError)
 *   The requested resource could not be found but may be available again in the future.
 */
macchiato.util.response.not_found = (function macchiato$util$response$not_found(var_args){
var args29993 = [];
var len__26342__auto___29996 = arguments.length;
var i__26343__auto___29997 = (0);
while(true){
if((i__26343__auto___29997 < len__26342__auto___29996)){
args29993.push((arguments[i__26343__auto___29997]));

var G__29998 = (i__26343__auto___29997 + (1));
i__26343__auto___29997 = G__29998;
continue;
} else {
}
break;
}

var G__29995 = args29993.length;
switch (G__29995) {
case 0:
return macchiato.util.response.not_found.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.not_found.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29993.length)].join('')));

}
});

macchiato.util.response.not_found.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.not_found.call(null,null);
});

macchiato.util.response.not_found.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(404),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.not_found.cljs$lang$maxFixedArity = 1;

/**
 * 405 Method Not Allowed (ClientError)
 *   A request was made of a resource using a request method not supported by that resource;
 */
macchiato.util.response.method_not_allowed = (function macchiato$util$response$method_not_allowed(var_args){
var args30000 = [];
var len__26342__auto___30003 = arguments.length;
var i__26343__auto___30004 = (0);
while(true){
if((i__26343__auto___30004 < len__26342__auto___30003)){
args30000.push((arguments[i__26343__auto___30004]));

var G__30005 = (i__26343__auto___30004 + (1));
i__26343__auto___30004 = G__30005;
continue;
} else {
}
break;
}

var G__30002 = args30000.length;
switch (G__30002) {
case 0:
return macchiato.util.response.method_not_allowed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.method_not_allowed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30000.length)].join('')));

}
});

macchiato.util.response.method_not_allowed.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.method_not_allowed.call(null,null);
});

macchiato.util.response.method_not_allowed.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(405),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.method_not_allowed.cljs$lang$maxFixedArity = 1;

/**
 * 406 Not Acceptable (ClientError)
 *   The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.
 */
macchiato.util.response.not_acceptable = (function macchiato$util$response$not_acceptable(var_args){
var args30007 = [];
var len__26342__auto___30010 = arguments.length;
var i__26343__auto___30011 = (0);
while(true){
if((i__26343__auto___30011 < len__26342__auto___30010)){
args30007.push((arguments[i__26343__auto___30011]));

var G__30012 = (i__26343__auto___30011 + (1));
i__26343__auto___30011 = G__30012;
continue;
} else {
}
break;
}

var G__30009 = args30007.length;
switch (G__30009) {
case 0:
return macchiato.util.response.not_acceptable.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.not_acceptable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30007.length)].join('')));

}
});

macchiato.util.response.not_acceptable.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.not_acceptable.call(null,null);
});

macchiato.util.response.not_acceptable.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(406),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.not_acceptable.cljs$lang$maxFixedArity = 1;

/**
 * 407 Proxy Authentication Required (ClientError)
 *   Proxy authentication is required to access the requested resource.
 */
macchiato.util.response.proxy_authentication_required = (function macchiato$util$response$proxy_authentication_required(var_args){
var args30014 = [];
var len__26342__auto___30017 = arguments.length;
var i__26343__auto___30018 = (0);
while(true){
if((i__26343__auto___30018 < len__26342__auto___30017)){
args30014.push((arguments[i__26343__auto___30018]));

var G__30019 = (i__26343__auto___30018 + (1));
i__26343__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var G__30016 = args30014.length;
switch (G__30016) {
case 0:
return macchiato.util.response.proxy_authentication_required.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.proxy_authentication_required.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30014.length)].join('')));

}
});

macchiato.util.response.proxy_authentication_required.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.proxy_authentication_required.call(null,null);
});

macchiato.util.response.proxy_authentication_required.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(407),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.proxy_authentication_required.cljs$lang$maxFixedArity = 1;

/**
 * 408 Request Timeout (ClientError)
 *   The server timed out waiting for the request.
 */
macchiato.util.response.request_timeout = (function macchiato$util$response$request_timeout(var_args){
var args30021 = [];
var len__26342__auto___30024 = arguments.length;
var i__26343__auto___30025 = (0);
while(true){
if((i__26343__auto___30025 < len__26342__auto___30024)){
args30021.push((arguments[i__26343__auto___30025]));

var G__30026 = (i__26343__auto___30025 + (1));
i__26343__auto___30025 = G__30026;
continue;
} else {
}
break;
}

var G__30023 = args30021.length;
switch (G__30023) {
case 0:
return macchiato.util.response.request_timeout.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.request_timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30021.length)].join('')));

}
});

macchiato.util.response.request_timeout.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.request_timeout.call(null,null);
});

macchiato.util.response.request_timeout.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(408),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.request_timeout.cljs$lang$maxFixedArity = 1;

/**
 * 409 Conflict (ClientError)
 *   The request could not be processed because of conflict in the request such as an edit conflict.
 */
macchiato.util.response.conflict = (function macchiato$util$response$conflict(var_args){
var args30028 = [];
var len__26342__auto___30031 = arguments.length;
var i__26343__auto___30032 = (0);
while(true){
if((i__26343__auto___30032 < len__26342__auto___30031)){
args30028.push((arguments[i__26343__auto___30032]));

var G__30033 = (i__26343__auto___30032 + (1));
i__26343__auto___30032 = G__30033;
continue;
} else {
}
break;
}

var G__30030 = args30028.length;
switch (G__30030) {
case 0:
return macchiato.util.response.conflict.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.conflict.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30028.length)].join('')));

}
});

macchiato.util.response.conflict.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.conflict.call(null,null);
});

macchiato.util.response.conflict.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(409),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.conflict.cljs$lang$maxFixedArity = 1;

/**
 * 410 Gone (ClientError)
 *   The resource requested is no longer available and will not be available again.
 */
macchiato.util.response.gone = (function macchiato$util$response$gone(var_args){
var args30035 = [];
var len__26342__auto___30038 = arguments.length;
var i__26343__auto___30039 = (0);
while(true){
if((i__26343__auto___30039 < len__26342__auto___30038)){
args30035.push((arguments[i__26343__auto___30039]));

var G__30040 = (i__26343__auto___30039 + (1));
i__26343__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var G__30037 = args30035.length;
switch (G__30037) {
case 0:
return macchiato.util.response.gone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.gone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30035.length)].join('')));

}
});

macchiato.util.response.gone.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.gone.call(null,null);
});

macchiato.util.response.gone.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(410),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.gone.cljs$lang$maxFixedArity = 1;

/**
 * 411 Length Required (ClientError)
 *   The request did not specify the length of its content which is required by the requested resource.
 */
macchiato.util.response.length_required = (function macchiato$util$response$length_required(var_args){
var args30042 = [];
var len__26342__auto___30045 = arguments.length;
var i__26343__auto___30046 = (0);
while(true){
if((i__26343__auto___30046 < len__26342__auto___30045)){
args30042.push((arguments[i__26343__auto___30046]));

var G__30047 = (i__26343__auto___30046 + (1));
i__26343__auto___30046 = G__30047;
continue;
} else {
}
break;
}

var G__30044 = args30042.length;
switch (G__30044) {
case 0:
return macchiato.util.response.length_required.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.length_required.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30042.length)].join('')));

}
});

macchiato.util.response.length_required.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.length_required.call(null,null);
});

macchiato.util.response.length_required.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(411),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.length_required.cljs$lang$maxFixedArity = 1;

/**
 * 412 Precondition Failed (ClientError)
 *   The server does not meet one of the preconditions that the requester put on the request.
 */
macchiato.util.response.precondition_failed = (function macchiato$util$response$precondition_failed(var_args){
var args30049 = [];
var len__26342__auto___30052 = arguments.length;
var i__26343__auto___30053 = (0);
while(true){
if((i__26343__auto___30053 < len__26342__auto___30052)){
args30049.push((arguments[i__26343__auto___30053]));

var G__30054 = (i__26343__auto___30053 + (1));
i__26343__auto___30053 = G__30054;
continue;
} else {
}
break;
}

var G__30051 = args30049.length;
switch (G__30051) {
case 0:
return macchiato.util.response.precondition_failed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.precondition_failed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30049.length)].join('')));

}
});

macchiato.util.response.precondition_failed.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.precondition_failed.call(null,null);
});

macchiato.util.response.precondition_failed.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(412),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.precondition_failed.cljs$lang$maxFixedArity = 1;

/**
 * 413 Request Entity Too Large (ClientError)
 *   The request is larger than the server is willing or able to process.
 */
macchiato.util.response.request_entity_too_large = (function macchiato$util$response$request_entity_too_large(var_args){
var args30056 = [];
var len__26342__auto___30059 = arguments.length;
var i__26343__auto___30060 = (0);
while(true){
if((i__26343__auto___30060 < len__26342__auto___30059)){
args30056.push((arguments[i__26343__auto___30060]));

var G__30061 = (i__26343__auto___30060 + (1));
i__26343__auto___30060 = G__30061;
continue;
} else {
}
break;
}

var G__30058 = args30056.length;
switch (G__30058) {
case 0:
return macchiato.util.response.request_entity_too_large.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.request_entity_too_large.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30056.length)].join('')));

}
});

macchiato.util.response.request_entity_too_large.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.request_entity_too_large.call(null,null);
});

macchiato.util.response.request_entity_too_large.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(413),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.request_entity_too_large.cljs$lang$maxFixedArity = 1;

/**
 * 414 Request-URI Too Long (ClientError)
 *   The URI provided was too long for the server to process.
 */
macchiato.util.response.request_uri_too_long = (function macchiato$util$response$request_uri_too_long(var_args){
var args30063 = [];
var len__26342__auto___30066 = arguments.length;
var i__26343__auto___30067 = (0);
while(true){
if((i__26343__auto___30067 < len__26342__auto___30066)){
args30063.push((arguments[i__26343__auto___30067]));

var G__30068 = (i__26343__auto___30067 + (1));
i__26343__auto___30067 = G__30068;
continue;
} else {
}
break;
}

var G__30065 = args30063.length;
switch (G__30065) {
case 0:
return macchiato.util.response.request_uri_too_long.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.request_uri_too_long.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30063.length)].join('')));

}
});

macchiato.util.response.request_uri_too_long.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.request_uri_too_long.call(null,null);
});

macchiato.util.response.request_uri_too_long.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(414),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.request_uri_too_long.cljs$lang$maxFixedArity = 1;

/**
 * 415 Unsupported Media Type (ClientError)
 *   The request entity has a media type which the server or resource does not support.
 */
macchiato.util.response.unsupported_media_type = (function macchiato$util$response$unsupported_media_type(var_args){
var args30070 = [];
var len__26342__auto___30073 = arguments.length;
var i__26343__auto___30074 = (0);
while(true){
if((i__26343__auto___30074 < len__26342__auto___30073)){
args30070.push((arguments[i__26343__auto___30074]));

var G__30075 = (i__26343__auto___30074 + (1));
i__26343__auto___30074 = G__30075;
continue;
} else {
}
break;
}

var G__30072 = args30070.length;
switch (G__30072) {
case 0:
return macchiato.util.response.unsupported_media_type.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.unsupported_media_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30070.length)].join('')));

}
});

macchiato.util.response.unsupported_media_type.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.unsupported_media_type.call(null,null);
});

macchiato.util.response.unsupported_media_type.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(415),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.unsupported_media_type.cljs$lang$maxFixedArity = 1;

/**
 * 416 Requested Range Not Satisfiable (ClientError)
 *   The client has asked for a portion of the file but the server cannot supply that portion.
 */
macchiato.util.response.requested_range_not_satisfiable = (function macchiato$util$response$requested_range_not_satisfiable(var_args){
var args30077 = [];
var len__26342__auto___30080 = arguments.length;
var i__26343__auto___30081 = (0);
while(true){
if((i__26343__auto___30081 < len__26342__auto___30080)){
args30077.push((arguments[i__26343__auto___30081]));

var G__30082 = (i__26343__auto___30081 + (1));
i__26343__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var G__30079 = args30077.length;
switch (G__30079) {
case 0:
return macchiato.util.response.requested_range_not_satisfiable.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.requested_range_not_satisfiable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30077.length)].join('')));

}
});

macchiato.util.response.requested_range_not_satisfiable.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.requested_range_not_satisfiable.call(null,null);
});

macchiato.util.response.requested_range_not_satisfiable.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(416),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.requested_range_not_satisfiable.cljs$lang$maxFixedArity = 1;

/**
 * 417 Expectation Failed (ClientError)
 *   The server cannot meet the requirements of the Expect request-header field.
 */
macchiato.util.response.expectation_failed = (function macchiato$util$response$expectation_failed(var_args){
var args30084 = [];
var len__26342__auto___30087 = arguments.length;
var i__26343__auto___30088 = (0);
while(true){
if((i__26343__auto___30088 < len__26342__auto___30087)){
args30084.push((arguments[i__26343__auto___30088]));

var G__30089 = (i__26343__auto___30088 + (1));
i__26343__auto___30088 = G__30089;
continue;
} else {
}
break;
}

var G__30086 = args30084.length;
switch (G__30086) {
case 0:
return macchiato.util.response.expectation_failed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.expectation_failed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30084.length)].join('')));

}
});

macchiato.util.response.expectation_failed.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.expectation_failed.call(null,null);
});

macchiato.util.response.expectation_failed.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(417),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.expectation_failed.cljs$lang$maxFixedArity = 1;

/**
 * 420 Enhance Your Calm (ClientError)
 *   You are being rate-limited.
 */
macchiato.util.response.enhance_your_calm = (function macchiato$util$response$enhance_your_calm(var_args){
var args30091 = [];
var len__26342__auto___30094 = arguments.length;
var i__26343__auto___30095 = (0);
while(true){
if((i__26343__auto___30095 < len__26342__auto___30094)){
args30091.push((arguments[i__26343__auto___30095]));

var G__30096 = (i__26343__auto___30095 + (1));
i__26343__auto___30095 = G__30096;
continue;
} else {
}
break;
}

var G__30093 = args30091.length;
switch (G__30093) {
case 0:
return macchiato.util.response.enhance_your_calm.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.enhance_your_calm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30091.length)].join('')));

}
});

macchiato.util.response.enhance_your_calm.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.enhance_your_calm.call(null,null);
});

macchiato.util.response.enhance_your_calm.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(420),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.enhance_your_calm.cljs$lang$maxFixedArity = 1;

/**
 * 422 Unprocessable Entity (ClientError)
 *   The request was well-formed but was unable to be followed due to semantic errors.
 */
macchiato.util.response.unprocessable_entity = (function macchiato$util$response$unprocessable_entity(var_args){
var args30098 = [];
var len__26342__auto___30101 = arguments.length;
var i__26343__auto___30102 = (0);
while(true){
if((i__26343__auto___30102 < len__26342__auto___30101)){
args30098.push((arguments[i__26343__auto___30102]));

var G__30103 = (i__26343__auto___30102 + (1));
i__26343__auto___30102 = G__30103;
continue;
} else {
}
break;
}

var G__30100 = args30098.length;
switch (G__30100) {
case 0:
return macchiato.util.response.unprocessable_entity.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.unprocessable_entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30098.length)].join('')));

}
});

macchiato.util.response.unprocessable_entity.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.unprocessable_entity.call(null,null);
});

macchiato.util.response.unprocessable_entity.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(422),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.unprocessable_entity.cljs$lang$maxFixedArity = 1;

/**
 * 423 Locked (ClientError)
 *   The resource that is being accessed is locked.
 */
macchiato.util.response.locked = (function macchiato$util$response$locked(var_args){
var args30105 = [];
var len__26342__auto___30108 = arguments.length;
var i__26343__auto___30109 = (0);
while(true){
if((i__26343__auto___30109 < len__26342__auto___30108)){
args30105.push((arguments[i__26343__auto___30109]));

var G__30110 = (i__26343__auto___30109 + (1));
i__26343__auto___30109 = G__30110;
continue;
} else {
}
break;
}

var G__30107 = args30105.length;
switch (G__30107) {
case 0:
return macchiato.util.response.locked.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.locked.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30105.length)].join('')));

}
});

macchiato.util.response.locked.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.locked.call(null,null);
});

macchiato.util.response.locked.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(423),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.locked.cljs$lang$maxFixedArity = 1;

/**
 * 424 Failed Dependency (ClientError)
 *   The request failed due to failure of a previous request.
 */
macchiato.util.response.failed_dependency = (function macchiato$util$response$failed_dependency(var_args){
var args30112 = [];
var len__26342__auto___30115 = arguments.length;
var i__26343__auto___30116 = (0);
while(true){
if((i__26343__auto___30116 < len__26342__auto___30115)){
args30112.push((arguments[i__26343__auto___30116]));

var G__30117 = (i__26343__auto___30116 + (1));
i__26343__auto___30116 = G__30117;
continue;
} else {
}
break;
}

var G__30114 = args30112.length;
switch (G__30114) {
case 0:
return macchiato.util.response.failed_dependency.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.failed_dependency.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30112.length)].join('')));

}
});

macchiato.util.response.failed_dependency.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.failed_dependency.call(null,null);
});

macchiato.util.response.failed_dependency.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(424),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.failed_dependency.cljs$lang$maxFixedArity = 1;

/**
 * 425 Unordered Collection (ClientError)
 *   The collection is unordered.
 */
macchiato.util.response.unordered_collection = (function macchiato$util$response$unordered_collection(var_args){
var args30119 = [];
var len__26342__auto___30122 = arguments.length;
var i__26343__auto___30123 = (0);
while(true){
if((i__26343__auto___30123 < len__26342__auto___30122)){
args30119.push((arguments[i__26343__auto___30123]));

var G__30124 = (i__26343__auto___30123 + (1));
i__26343__auto___30123 = G__30124;
continue;
} else {
}
break;
}

var G__30121 = args30119.length;
switch (G__30121) {
case 0:
return macchiato.util.response.unordered_collection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.unordered_collection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30119.length)].join('')));

}
});

macchiato.util.response.unordered_collection.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.unordered_collection.call(null,null);
});

macchiato.util.response.unordered_collection.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(425),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.unordered_collection.cljs$lang$maxFixedArity = 1;

/**
 * 426 Upgrade Required (ClientError)
 *   The client should switch to a different protocol.
 */
macchiato.util.response.upgrade_required = (function macchiato$util$response$upgrade_required(var_args){
var args30126 = [];
var len__26342__auto___30129 = arguments.length;
var i__26343__auto___30130 = (0);
while(true){
if((i__26343__auto___30130 < len__26342__auto___30129)){
args30126.push((arguments[i__26343__auto___30130]));

var G__30131 = (i__26343__auto___30130 + (1));
i__26343__auto___30130 = G__30131;
continue;
} else {
}
break;
}

var G__30128 = args30126.length;
switch (G__30128) {
case 0:
return macchiato.util.response.upgrade_required.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.upgrade_required.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30126.length)].join('')));

}
});

macchiato.util.response.upgrade_required.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.upgrade_required.call(null,null);
});

macchiato.util.response.upgrade_required.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(426),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.upgrade_required.cljs$lang$maxFixedArity = 1;

/**
 * 428 Precondition Required (ClientError)
 *   The server requires the request to be conditional.
 */
macchiato.util.response.precondition_required = (function macchiato$util$response$precondition_required(var_args){
var args30133 = [];
var len__26342__auto___30136 = arguments.length;
var i__26343__auto___30137 = (0);
while(true){
if((i__26343__auto___30137 < len__26342__auto___30136)){
args30133.push((arguments[i__26343__auto___30137]));

var G__30138 = (i__26343__auto___30137 + (1));
i__26343__auto___30137 = G__30138;
continue;
} else {
}
break;
}

var G__30135 = args30133.length;
switch (G__30135) {
case 0:
return macchiato.util.response.precondition_required.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.precondition_required.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30133.length)].join('')));

}
});

macchiato.util.response.precondition_required.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.precondition_required.call(null,null);
});

macchiato.util.response.precondition_required.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(428),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.precondition_required.cljs$lang$maxFixedArity = 1;

/**
 * 429 Too Many Requests (ClientError)
 *   The user has sent too many requests in a given amount of time.
 */
macchiato.util.response.too_many_requests = (function macchiato$util$response$too_many_requests(var_args){
var args30140 = [];
var len__26342__auto___30143 = arguments.length;
var i__26343__auto___30144 = (0);
while(true){
if((i__26343__auto___30144 < len__26342__auto___30143)){
args30140.push((arguments[i__26343__auto___30144]));

var G__30145 = (i__26343__auto___30144 + (1));
i__26343__auto___30144 = G__30145;
continue;
} else {
}
break;
}

var G__30142 = args30140.length;
switch (G__30142) {
case 0:
return macchiato.util.response.too_many_requests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.too_many_requests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30140.length)].join('')));

}
});

macchiato.util.response.too_many_requests.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.too_many_requests.call(null,null);
});

macchiato.util.response.too_many_requests.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(429),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.too_many_requests.cljs$lang$maxFixedArity = 1;

/**
 * 431 Request Header Fields Too Large (ClientError)
 *   The server is unwilling to process the request because either an individual header field or all the header fields collectively are too large.
 */
macchiato.util.response.request_header_fields_too_large = (function macchiato$util$response$request_header_fields_too_large(var_args){
var args30147 = [];
var len__26342__auto___30150 = arguments.length;
var i__26343__auto___30151 = (0);
while(true){
if((i__26343__auto___30151 < len__26342__auto___30150)){
args30147.push((arguments[i__26343__auto___30151]));

var G__30152 = (i__26343__auto___30151 + (1));
i__26343__auto___30151 = G__30152;
continue;
} else {
}
break;
}

var G__30149 = args30147.length;
switch (G__30149) {
case 0:
return macchiato.util.response.request_header_fields_too_large.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.request_header_fields_too_large.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30147.length)].join('')));

}
});

macchiato.util.response.request_header_fields_too_large.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.request_header_fields_too_large.call(null,null);
});

macchiato.util.response.request_header_fields_too_large.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(431),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.request_header_fields_too_large.cljs$lang$maxFixedArity = 1;

/**
 * 449 Retry With (ClientError)
 *   The request should be retried after doing the appropriate action.
 */
macchiato.util.response.retry_with = (function macchiato$util$response$retry_with(var_args){
var args30154 = [];
var len__26342__auto___30157 = arguments.length;
var i__26343__auto___30158 = (0);
while(true){
if((i__26343__auto___30158 < len__26342__auto___30157)){
args30154.push((arguments[i__26343__auto___30158]));

var G__30159 = (i__26343__auto___30158 + (1));
i__26343__auto___30158 = G__30159;
continue;
} else {
}
break;
}

var G__30156 = args30154.length;
switch (G__30156) {
case 0:
return macchiato.util.response.retry_with.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.retry_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30154.length)].join('')));

}
});

macchiato.util.response.retry_with.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.retry_with.call(null,null);
});

macchiato.util.response.retry_with.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(449),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.retry_with.cljs$lang$maxFixedArity = 1;

/**
 * 450 Blocked by Windows Parental Controls (ClientError)
 *   Windows Parental Controls are turned on and are blocking access to the given webpage.
 */
macchiato.util.response.blocked_by_windows_parental_controls = (function macchiato$util$response$blocked_by_windows_parental_controls(var_args){
var args30161 = [];
var len__26342__auto___30164 = arguments.length;
var i__26343__auto___30165 = (0);
while(true){
if((i__26343__auto___30165 < len__26342__auto___30164)){
args30161.push((arguments[i__26343__auto___30165]));

var G__30166 = (i__26343__auto___30165 + (1));
i__26343__auto___30165 = G__30166;
continue;
} else {
}
break;
}

var G__30163 = args30161.length;
switch (G__30163) {
case 0:
return macchiato.util.response.blocked_by_windows_parental_controls.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.blocked_by_windows_parental_controls.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30161.length)].join('')));

}
});

macchiato.util.response.blocked_by_windows_parental_controls.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.blocked_by_windows_parental_controls.call(null,null);
});

macchiato.util.response.blocked_by_windows_parental_controls.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(450),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.blocked_by_windows_parental_controls.cljs$lang$maxFixedArity = 1;

/**
 * 451 Unavailable For Legal Reasons (ClientError)
 *   Resource access is denied for legal reasons.
 */
macchiato.util.response.unavailable_for_legal_reasons = (function macchiato$util$response$unavailable_for_legal_reasons(var_args){
var args30168 = [];
var len__26342__auto___30171 = arguments.length;
var i__26343__auto___30172 = (0);
while(true){
if((i__26343__auto___30172 < len__26342__auto___30171)){
args30168.push((arguments[i__26343__auto___30172]));

var G__30173 = (i__26343__auto___30172 + (1));
i__26343__auto___30172 = G__30173;
continue;
} else {
}
break;
}

var G__30170 = args30168.length;
switch (G__30170) {
case 0:
return macchiato.util.response.unavailable_for_legal_reasons.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.unavailable_for_legal_reasons.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30168.length)].join('')));

}
});

macchiato.util.response.unavailable_for_legal_reasons.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.unavailable_for_legal_reasons.call(null,null);
});

macchiato.util.response.unavailable_for_legal_reasons.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(451),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.unavailable_for_legal_reasons.cljs$lang$maxFixedArity = 1;

/**
 * 500 Internal Server Error (ServerError)
 *   There was an internal server error.
 */
macchiato.util.response.internal_server_error = (function macchiato$util$response$internal_server_error(var_args){
var args30175 = [];
var len__26342__auto___30178 = arguments.length;
var i__26343__auto___30179 = (0);
while(true){
if((i__26343__auto___30179 < len__26342__auto___30178)){
args30175.push((arguments[i__26343__auto___30179]));

var G__30180 = (i__26343__auto___30179 + (1));
i__26343__auto___30179 = G__30180;
continue;
} else {
}
break;
}

var G__30177 = args30175.length;
switch (G__30177) {
case 0:
return macchiato.util.response.internal_server_error.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.internal_server_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30175.length)].join('')));

}
});

macchiato.util.response.internal_server_error.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.internal_server_error.call(null,null);
});

macchiato.util.response.internal_server_error.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.internal_server_error.cljs$lang$maxFixedArity = 1;

/**
 * 501 Not Implemented (ServerError)
 *   The server either does not recognize the request method or it lacks the ability to fulfill the request.
 */
macchiato.util.response.not_implemented = (function macchiato$util$response$not_implemented(var_args){
var args30182 = [];
var len__26342__auto___30185 = arguments.length;
var i__26343__auto___30186 = (0);
while(true){
if((i__26343__auto___30186 < len__26342__auto___30185)){
args30182.push((arguments[i__26343__auto___30186]));

var G__30187 = (i__26343__auto___30186 + (1));
i__26343__auto___30186 = G__30187;
continue;
} else {
}
break;
}

var G__30184 = args30182.length;
switch (G__30184) {
case 0:
return macchiato.util.response.not_implemented.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.not_implemented.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30182.length)].join('')));

}
});

macchiato.util.response.not_implemented.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.not_implemented.call(null,null);
});

macchiato.util.response.not_implemented.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(501),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.not_implemented.cljs$lang$maxFixedArity = 1;

/**
 * 502 Bad Gateway (ServerError)
 *   The server was acting as a gateway or proxy and received an invalid response from the upstream server.
 */
macchiato.util.response.bad_gateway = (function macchiato$util$response$bad_gateway(var_args){
var args30189 = [];
var len__26342__auto___30192 = arguments.length;
var i__26343__auto___30193 = (0);
while(true){
if((i__26343__auto___30193 < len__26342__auto___30192)){
args30189.push((arguments[i__26343__auto___30193]));

var G__30194 = (i__26343__auto___30193 + (1));
i__26343__auto___30193 = G__30194;
continue;
} else {
}
break;
}

var G__30191 = args30189.length;
switch (G__30191) {
case 0:
return macchiato.util.response.bad_gateway.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.bad_gateway.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30189.length)].join('')));

}
});

macchiato.util.response.bad_gateway.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.bad_gateway.call(null,null);
});

macchiato.util.response.bad_gateway.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(502),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.bad_gateway.cljs$lang$maxFixedArity = 1;

/**
 * 503 Service Unavailable (ServerError)
 *   The server is currently unavailable (because it is overloaded or down for maintenance).
 */
macchiato.util.response.service_unavailable = (function macchiato$util$response$service_unavailable(var_args){
var args30196 = [];
var len__26342__auto___30199 = arguments.length;
var i__26343__auto___30200 = (0);
while(true){
if((i__26343__auto___30200 < len__26342__auto___30199)){
args30196.push((arguments[i__26343__auto___30200]));

var G__30201 = (i__26343__auto___30200 + (1));
i__26343__auto___30200 = G__30201;
continue;
} else {
}
break;
}

var G__30198 = args30196.length;
switch (G__30198) {
case 0:
return macchiato.util.response.service_unavailable.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.service_unavailable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30196.length)].join('')));

}
});

macchiato.util.response.service_unavailable.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.service_unavailable.call(null,null);
});

macchiato.util.response.service_unavailable.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(503),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.service_unavailable.cljs$lang$maxFixedArity = 1;

/**
 * 504 Gateway Timeout (ServerError)
 *   The server was acting as a gateway or proxy and did not receive a timely request from the upstream server.
 */
macchiato.util.response.gateway_timeout = (function macchiato$util$response$gateway_timeout(var_args){
var args30203 = [];
var len__26342__auto___30206 = arguments.length;
var i__26343__auto___30207 = (0);
while(true){
if((i__26343__auto___30207 < len__26342__auto___30206)){
args30203.push((arguments[i__26343__auto___30207]));

var G__30208 = (i__26343__auto___30207 + (1));
i__26343__auto___30207 = G__30208;
continue;
} else {
}
break;
}

var G__30205 = args30203.length;
switch (G__30205) {
case 0:
return macchiato.util.response.gateway_timeout.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.gateway_timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30203.length)].join('')));

}
});

macchiato.util.response.gateway_timeout.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.gateway_timeout.call(null,null);
});

macchiato.util.response.gateway_timeout.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(504),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.gateway_timeout.cljs$lang$maxFixedArity = 1;

/**
 * 505 HTTP Version Not Supported (ServerError)
 *   The server does not support the HTTP protocol version used in the request.
 */
macchiato.util.response.http_version_not_supported = (function macchiato$util$response$http_version_not_supported(var_args){
var args30210 = [];
var len__26342__auto___30213 = arguments.length;
var i__26343__auto___30214 = (0);
while(true){
if((i__26343__auto___30214 < len__26342__auto___30213)){
args30210.push((arguments[i__26343__auto___30214]));

var G__30215 = (i__26343__auto___30214 + (1));
i__26343__auto___30214 = G__30215;
continue;
} else {
}
break;
}

var G__30212 = args30210.length;
switch (G__30212) {
case 0:
return macchiato.util.response.http_version_not_supported.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.http_version_not_supported.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30210.length)].join('')));

}
});

macchiato.util.response.http_version_not_supported.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.http_version_not_supported.call(null,null);
});

macchiato.util.response.http_version_not_supported.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(505),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.http_version_not_supported.cljs$lang$maxFixedArity = 1;

/**
 * 506 Variant Also Negotiates (ServerError)
 *   Transparent content negotiation for the request results in a circular reference.
 */
macchiato.util.response.variant_also_negotiates = (function macchiato$util$response$variant_also_negotiates(var_args){
var args30217 = [];
var len__26342__auto___30220 = arguments.length;
var i__26343__auto___30221 = (0);
while(true){
if((i__26343__auto___30221 < len__26342__auto___30220)){
args30217.push((arguments[i__26343__auto___30221]));

var G__30222 = (i__26343__auto___30221 + (1));
i__26343__auto___30221 = G__30222;
continue;
} else {
}
break;
}

var G__30219 = args30217.length;
switch (G__30219) {
case 0:
return macchiato.util.response.variant_also_negotiates.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.variant_also_negotiates.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30217.length)].join('')));

}
});

macchiato.util.response.variant_also_negotiates.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.variant_also_negotiates.call(null,null);
});

macchiato.util.response.variant_also_negotiates.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(506),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.variant_also_negotiates.cljs$lang$maxFixedArity = 1;

/**
 * 507 Insufficient Storage (ServerError)
 *   Insufficient storage to complete the request.
 */
macchiato.util.response.insufficient_storage = (function macchiato$util$response$insufficient_storage(var_args){
var args30224 = [];
var len__26342__auto___30227 = arguments.length;
var i__26343__auto___30228 = (0);
while(true){
if((i__26343__auto___30228 < len__26342__auto___30227)){
args30224.push((arguments[i__26343__auto___30228]));

var G__30229 = (i__26343__auto___30228 + (1));
i__26343__auto___30228 = G__30229;
continue;
} else {
}
break;
}

var G__30226 = args30224.length;
switch (G__30226) {
case 0:
return macchiato.util.response.insufficient_storage.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.insufficient_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30224.length)].join('')));

}
});

macchiato.util.response.insufficient_storage.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.insufficient_storage.call(null,null);
});

macchiato.util.response.insufficient_storage.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(507),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.insufficient_storage.cljs$lang$maxFixedArity = 1;

/**
 * 508 Loop Detected (ServerError)
 *   The server detected an infinite loop while processing the request.
 */
macchiato.util.response.loop_detected = (function macchiato$util$response$loop_detected(var_args){
var args30231 = [];
var len__26342__auto___30234 = arguments.length;
var i__26343__auto___30235 = (0);
while(true){
if((i__26343__auto___30235 < len__26342__auto___30234)){
args30231.push((arguments[i__26343__auto___30235]));

var G__30236 = (i__26343__auto___30235 + (1));
i__26343__auto___30235 = G__30236;
continue;
} else {
}
break;
}

var G__30233 = args30231.length;
switch (G__30233) {
case 0:
return macchiato.util.response.loop_detected.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.loop_detected.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30231.length)].join('')));

}
});

macchiato.util.response.loop_detected.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.loop_detected.call(null,null);
});

macchiato.util.response.loop_detected.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(508),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.loop_detected.cljs$lang$maxFixedArity = 1;

/**
 * 509 Bandwidth Limit Exceeded (ServerError)
 *   Bandwidth limit has been exceeded.
 */
macchiato.util.response.bandwidth_limit_exceeded = (function macchiato$util$response$bandwidth_limit_exceeded(var_args){
var args30238 = [];
var len__26342__auto___30241 = arguments.length;
var i__26343__auto___30242 = (0);
while(true){
if((i__26343__auto___30242 < len__26342__auto___30241)){
args30238.push((arguments[i__26343__auto___30242]));

var G__30243 = (i__26343__auto___30242 + (1));
i__26343__auto___30242 = G__30243;
continue;
} else {
}
break;
}

var G__30240 = args30238.length;
switch (G__30240) {
case 0:
return macchiato.util.response.bandwidth_limit_exceeded.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.bandwidth_limit_exceeded.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30238.length)].join('')));

}
});

macchiato.util.response.bandwidth_limit_exceeded.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.bandwidth_limit_exceeded.call(null,null);
});

macchiato.util.response.bandwidth_limit_exceeded.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(509),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.bandwidth_limit_exceeded.cljs$lang$maxFixedArity = 1;

/**
 * 510 Not Extended (ServerError)
 *   Further extensions to the request are required for the server to fulfill it.
 */
macchiato.util.response.not_extended = (function macchiato$util$response$not_extended(var_args){
var args30245 = [];
var len__26342__auto___30248 = arguments.length;
var i__26343__auto___30249 = (0);
while(true){
if((i__26343__auto___30249 < len__26342__auto___30248)){
args30245.push((arguments[i__26343__auto___30249]));

var G__30250 = (i__26343__auto___30249 + (1));
i__26343__auto___30249 = G__30250;
continue;
} else {
}
break;
}

var G__30247 = args30245.length;
switch (G__30247) {
case 0:
return macchiato.util.response.not_extended.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.not_extended.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30245.length)].join('')));

}
});

macchiato.util.response.not_extended.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.not_extended.call(null,null);
});

macchiato.util.response.not_extended.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(510),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.not_extended.cljs$lang$maxFixedArity = 1;

/**
 * 511 Network Authentication Required (ServerError)
 *   The client needs to authenticate to gain network access.
 */
macchiato.util.response.network_authentication_required = (function macchiato$util$response$network_authentication_required(var_args){
var args30252 = [];
var len__26342__auto___30255 = arguments.length;
var i__26343__auto___30256 = (0);
while(true){
if((i__26343__auto___30256 < len__26342__auto___30255)){
args30252.push((arguments[i__26343__auto___30256]));

var G__30257 = (i__26343__auto___30256 + (1));
i__26343__auto___30256 = G__30257;
continue;
} else {
}
break;
}

var G__30254 = args30252.length;
switch (G__30254) {
case 0:
return macchiato.util.response.network_authentication_required.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.network_authentication_required.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30252.length)].join('')));

}
});

macchiato.util.response.network_authentication_required.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.network_authentication_required.call(null,null);
});

macchiato.util.response.network_authentication_required.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(511),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.network_authentication_required.cljs$lang$maxFixedArity = 1;

/**
 * 598 Network read timeout (ServerError)
 *   
 */
macchiato.util.response.network_read_timeout = (function macchiato$util$response$network_read_timeout(var_args){
var args30259 = [];
var len__26342__auto___30262 = arguments.length;
var i__26343__auto___30263 = (0);
while(true){
if((i__26343__auto___30263 < len__26342__auto___30262)){
args30259.push((arguments[i__26343__auto___30263]));

var G__30264 = (i__26343__auto___30263 + (1));
i__26343__auto___30263 = G__30264;
continue;
} else {
}
break;
}

var G__30261 = args30259.length;
switch (G__30261) {
case 0:
return macchiato.util.response.network_read_timeout.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.network_read_timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30259.length)].join('')));

}
});

macchiato.util.response.network_read_timeout.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.network_read_timeout.call(null,null);
});

macchiato.util.response.network_read_timeout.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(598),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.network_read_timeout.cljs$lang$maxFixedArity = 1;

/**
 * 599 Network connect timeout (ServerError)
 *   
 */
macchiato.util.response.network_connect_timeout = (function macchiato$util$response$network_connect_timeout(var_args){
var args30266 = [];
var len__26342__auto___30269 = arguments.length;
var i__26343__auto___30270 = (0);
while(true){
if((i__26343__auto___30270 < len__26342__auto___30269)){
args30266.push((arguments[i__26343__auto___30270]));

var G__30271 = (i__26343__auto___30270 + (1));
i__26343__auto___30270 = G__30271;
continue;
} else {
}
break;
}

var G__30268 = args30266.length;
switch (G__30268) {
case 0:
return macchiato.util.response.network_connect_timeout.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return macchiato.util.response.network_connect_timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30266.length)].join('')));

}
});

macchiato.util.response.network_connect_timeout.cljs$core$IFn$_invoke$arity$0 = (function (){
return macchiato.util.response.network_connect_timeout.call(null,null);
});

macchiato.util.response.network_connect_timeout.cljs$core$IFn$_invoke$arity$1 = (function (body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(599),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

macchiato.util.response.network_connect_timeout.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=response.js.map?rel=1488028097045