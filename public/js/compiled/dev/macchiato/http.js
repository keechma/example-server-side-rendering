// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.http');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('macchiato.cookies');
goog.require('macchiato.middleware.session');
goog.require('cljs.nodejs');
macchiato.http.Stream = cljs.nodejs.require.call(null,"stream");
macchiato.http.url_parser = cljs.nodejs.require.call(null,"url");
macchiato.http.req__GT_map = (function macchiato$http$req__GT_map(req,res,p__29702){
var map__29705 = p__29702;
var map__29705__$1 = ((((!((map__29705 == null)))?((((map__29705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29705):map__29705);
var opts = map__29705__$1;
var scheme = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613));
var conn = req.connection;
var url = macchiato.http.url_parser.parse(req.url);
var http_version = req.httpVersion;
var headers = cljs.core.js__GT_clj.call(null,req.headers);
var address = cljs.core.js__GT_clj.call(null,conn.address(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ssl-client-cert","ssl-client-cert",661784516),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"subdomains","subdomains",-1724882297),new cljs.core.Keyword(null,"cookies","cookies",1839416329),new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),new cljs.core.Keyword(null,"secure?","secure?",-368029718),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"stale?","stale?",-42449365),new cljs.core.Keyword(null,"hostname","hostname",2105669933),new cljs.core.Keyword("node","request","node/request",1769566861),new cljs.core.Keyword(null,"xhr?","xhr?",-679718673),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"content-length","content-length",441319507),new cljs.core.Keyword(null,"signed-cookies","signed-cookies",770121651),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"fresh?","fresh?",208947929),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword("node","response","node/response",-1064504834)],[(function (){var temp__4657__auto__ = conn.getPeerCertificate;
if(cljs.core.truth_(temp__4657__auto__)){
var peer_cert_fn = temp__4657__auto__;
return peer_cert_fn.call(null);
} else {
return null;
}
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"http","http",382524695),scheme))?"HTTP/":"HTTPS/")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(http_version)].join(''),cljs.core.js__GT_clj.call(null,req.subdomains),macchiato.cookies.request_cookies.call(null,req,res,new cljs.core.Keyword(null,"cookies","cookies",1839416329).cljs$core$IFn$_invoke$arity$1(opts)),conn.remoteAddress,req.secure,cljs.core.js__GT_clj.call(null,req.params),req.state,cljs.core.first.call(null,cuerdas.core.split.call(null,req.headers.host,/:/)),req,req.xhr,headers,new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(address),cljs.core.get.call(null,headers,"content-length"),cljs.core.js__GT_clj.call(null,req.signedCookies),req.url,cljs.core.get.call(null,headers,"content-type"),url.pathname,req.fresh,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(address),(function (){var temp__4657__auto__ = url.search;
if(cljs.core.truth_(temp__4657__auto__)){
var query = temp__4657__auto__;
return query.substring((1));
} else {
return null;
}
})(),req,scheme,cljs.core.keyword.call(null,cuerdas.core.lower.call(null,req.method)),res]);
});

/**
 * @interface
 */
macchiato.http.IHTTPResponseWriter = function(){};

/**
 * Write data to a http.ServerResponse
 */
macchiato.http._write_response = (function macchiato$http$_write_response(data,res,raise){
if((!((data == null))) && (!((data.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 == null)))){
return data.macchiato$http$IHTTPResponseWriter$_write_response$arity$3(data,res,raise);
} else {
var x__25897__auto__ = (((data == null))?null:data);
var m__25898__auto__ = (macchiato.http._write_response[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,data,res,raise);
} else {
var m__25898__auto____$1 = (macchiato.http._write_response["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,data,res,raise);
} else {
throw cljs.core.missing_protocol.call(null,"IHTTPResponseWriter.-write-response",data);
}
}
}
});

(macchiato.http.IHTTPResponseWriter["null"] = true);

(macchiato.http._write_response["null"] = (function (_,___$1,___$2){
return null;
}));

(macchiato.http.IHTTPResponseWriter["string"] = true);

(macchiato.http._write_response["string"] = (function (data,node_server_response,_){
node_server_response.write(data);

return node_server_response.end();
}));

cljs.core.PersistentHashMap.prototype.macchiato$http$IHTTPResponseWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 = (function (data,node_server_response,_){
var data__$1 = this;
node_server_response.write(JSON.stringify(cljs.core.clj__GT_js.call(null,data__$1)));

return node_server_response.end();
});

cljs.core.PersistentArrayMap.prototype.macchiato$http$IHTTPResponseWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 = (function (data,node_server_response,_){
var data__$1 = this;
node_server_response.write(JSON.stringify(cljs.core.clj__GT_js.call(null,data__$1)));

return node_server_response.end();
});

cljs.core.PersistentVector.prototype.macchiato$http$IHTTPResponseWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 = (function (data,node_server_response,raise){
var data__$1 = this;
var seq__29707_29719 = cljs.core.seq.call(null,data__$1);
var chunk__29708_29720 = null;
var count__29709_29721 = (0);
var i__29710_29722 = (0);
while(true){
if((i__29710_29722 < count__29709_29721)){
var i_29723 = cljs.core._nth.call(null,chunk__29708_29720,i__29710_29722);
macchiato.http._write_response.call(null,i_29723,node_server_response,raise);

var G__29724 = seq__29707_29719;
var G__29725 = chunk__29708_29720;
var G__29726 = count__29709_29721;
var G__29727 = (i__29710_29722 + (1));
seq__29707_29719 = G__29724;
chunk__29708_29720 = G__29725;
count__29709_29721 = G__29726;
i__29710_29722 = G__29727;
continue;
} else {
var temp__4657__auto___29728 = cljs.core.seq.call(null,seq__29707_29719);
if(temp__4657__auto___29728){
var seq__29707_29729__$1 = temp__4657__auto___29728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29707_29729__$1)){
var c__26048__auto___29730 = cljs.core.chunk_first.call(null,seq__29707_29729__$1);
var G__29731 = cljs.core.chunk_rest.call(null,seq__29707_29729__$1);
var G__29732 = c__26048__auto___29730;
var G__29733 = cljs.core.count.call(null,c__26048__auto___29730);
var G__29734 = (0);
seq__29707_29719 = G__29731;
chunk__29708_29720 = G__29732;
count__29709_29721 = G__29733;
i__29710_29722 = G__29734;
continue;
} else {
var i_29735 = cljs.core.first.call(null,seq__29707_29729__$1);
macchiato.http._write_response.call(null,i_29735,node_server_response,raise);

var G__29736 = cljs.core.next.call(null,seq__29707_29729__$1);
var G__29737 = null;
var G__29738 = (0);
var G__29739 = (0);
seq__29707_29719 = G__29736;
chunk__29708_29720 = G__29737;
count__29709_29721 = G__29738;
i__29710_29722 = G__29739;
continue;
}
} else {
}
}
break;
}

return node_server_response.end();
});

cljs.core.List.prototype.macchiato$http$IHTTPResponseWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 = (function (data,node_server_response,raise){
var data__$1 = this;
var seq__29711_29740 = cljs.core.seq.call(null,data__$1);
var chunk__29712_29741 = null;
var count__29713_29742 = (0);
var i__29714_29743 = (0);
while(true){
if((i__29714_29743 < count__29713_29742)){
var i_29744 = cljs.core._nth.call(null,chunk__29712_29741,i__29714_29743);
macchiato.http._write_response.call(null,i_29744,node_server_response,raise);

var G__29745 = seq__29711_29740;
var G__29746 = chunk__29712_29741;
var G__29747 = count__29713_29742;
var G__29748 = (i__29714_29743 + (1));
seq__29711_29740 = G__29745;
chunk__29712_29741 = G__29746;
count__29713_29742 = G__29747;
i__29714_29743 = G__29748;
continue;
} else {
var temp__4657__auto___29749 = cljs.core.seq.call(null,seq__29711_29740);
if(temp__4657__auto___29749){
var seq__29711_29750__$1 = temp__4657__auto___29749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29711_29750__$1)){
var c__26048__auto___29751 = cljs.core.chunk_first.call(null,seq__29711_29750__$1);
var G__29752 = cljs.core.chunk_rest.call(null,seq__29711_29750__$1);
var G__29753 = c__26048__auto___29751;
var G__29754 = cljs.core.count.call(null,c__26048__auto___29751);
var G__29755 = (0);
seq__29711_29740 = G__29752;
chunk__29712_29741 = G__29753;
count__29713_29742 = G__29754;
i__29714_29743 = G__29755;
continue;
} else {
var i_29756 = cljs.core.first.call(null,seq__29711_29750__$1);
macchiato.http._write_response.call(null,i_29756,node_server_response,raise);

var G__29757 = cljs.core.next.call(null,seq__29711_29750__$1);
var G__29758 = null;
var G__29759 = (0);
var G__29760 = (0);
seq__29711_29740 = G__29757;
chunk__29712_29741 = G__29758;
count__29713_29742 = G__29759;
i__29714_29743 = G__29760;
continue;
}
} else {
}
}
break;
}

return node_server_response.end();
});

cljs.core.LazySeq.prototype.macchiato$http$IHTTPResponseWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 = (function (data,node_server_response,raise){
var data__$1 = this;
var seq__29715_29761 = cljs.core.seq.call(null,data__$1);
var chunk__29716_29762 = null;
var count__29717_29763 = (0);
var i__29718_29764 = (0);
while(true){
if((i__29718_29764 < count__29717_29763)){
var i_29765 = cljs.core._nth.call(null,chunk__29716_29762,i__29718_29764);
macchiato.http._write_response.call(null,i_29765,node_server_response,raise);

var G__29766 = seq__29715_29761;
var G__29767 = chunk__29716_29762;
var G__29768 = count__29717_29763;
var G__29769 = (i__29718_29764 + (1));
seq__29715_29761 = G__29766;
chunk__29716_29762 = G__29767;
count__29717_29763 = G__29768;
i__29718_29764 = G__29769;
continue;
} else {
var temp__4657__auto___29770 = cljs.core.seq.call(null,seq__29715_29761);
if(temp__4657__auto___29770){
var seq__29715_29771__$1 = temp__4657__auto___29770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29715_29771__$1)){
var c__26048__auto___29772 = cljs.core.chunk_first.call(null,seq__29715_29771__$1);
var G__29773 = cljs.core.chunk_rest.call(null,seq__29715_29771__$1);
var G__29774 = c__26048__auto___29772;
var G__29775 = cljs.core.count.call(null,c__26048__auto___29772);
var G__29776 = (0);
seq__29715_29761 = G__29773;
chunk__29716_29762 = G__29774;
count__29717_29763 = G__29775;
i__29718_29764 = G__29776;
continue;
} else {
var i_29777 = cljs.core.first.call(null,seq__29715_29771__$1);
macchiato.http._write_response.call(null,i_29777,node_server_response,raise);

var G__29778 = cljs.core.next.call(null,seq__29715_29771__$1);
var G__29779 = null;
var G__29780 = (0);
var G__29781 = (0);
seq__29715_29761 = G__29778;
chunk__29716_29762 = G__29779;
count__29717_29763 = G__29780;
i__29718_29764 = G__29781;
continue;
}
} else {
}
}
break;
}

return node_server_response.end();
});

Buffer.prototype.macchiato$http$IHTTPResponseWriter$ = cljs.core.PROTOCOL_SENTINEL;

Buffer.prototype.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 = (function (data,node_server_response,_){
var data__$1 = this;
node_server_response.write(data__$1);

return node_server_response.end();
});

macchiato.http.Stream.prototype.macchiato$http$IHTTPResponseWriter$ = cljs.core.PROTOCOL_SENTINEL;

macchiato.http.Stream.prototype.macchiato$http$IHTTPResponseWriter$_write_response$arity$3 = (function (data,node_server_response,raise){
var data__$1 = this;
data__$1.on("error",raise);

return data__$1.pipe(node_server_response);
});
macchiato.http.response = (function macchiato$http$response(request_map,node_server_response,raise,opts){
return (function (p__29786){
var map__29787 = p__29786;
var map__29787__$1 = ((((!((map__29787 == null)))?((((map__29787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29787):map__29787);
var cookies = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329));
var headers = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
try{macchiato.cookies.set_cookies.call(null,cookies,request_map,node_server_response,new cljs.core.Keyword(null,"cookies","cookies",1839416329).cljs$core$IFn$_invoke$arity$1(opts));

node_server_response.writeHead(status,cljs.core.clj__GT_js.call(null,headers));

return macchiato.http._write_response.call(null,body,node_server_response,raise);
}catch (e29789){if((e29789 instanceof Error)){
var e = e29789;
return raise.call(null,e);
} else {
throw e29789;

}
}});
});
macchiato.http.error_handler = (function macchiato$http$error_handler(node_server_response){
return (function (error){
var G__29791 = node_server_response;
G__29791.writeHead((500),({"content-type": "text/html"}));

G__29791.write(error.message);

G__29791.end();

return G__29791;
});
});
macchiato.http.handler = (function macchiato$http$handler(http_handler,opts){
var opts__$1 = cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookies","cookies",1839416329),new cljs.core.Keyword(null,"signed?","signed?",288520857)], null),cljs.core.fnil.call(null,cljs.core.identity,true));
return ((function (opts__$1){
return (function (node_client_request,node_server_response){
return http_handler.call(null,macchiato.http.req__GT_map.call(null,node_client_request,node_server_response,opts__$1),macchiato.http.response.call(null,node_client_request,node_server_response,macchiato.http.error_handler,opts__$1),macchiato.http.error_handler.call(null,node_server_response));
});
;})(opts__$1))
});
macchiato.http.ws_handler = (function macchiato$http$ws_handler(handler,websocket){
var upgrade_req = websocket.upgradeReq;
var url = macchiato.http.url_parser.parse(upgrade_req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,upgrade_req.headers);
var conn = upgrade_req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
return handler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"server-port","server-port",663745648),address.call(null,"port"),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),address.call(null,"address"),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket,new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true,new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null));
});

//# sourceMappingURL=http.js.map?rel=1488028096480