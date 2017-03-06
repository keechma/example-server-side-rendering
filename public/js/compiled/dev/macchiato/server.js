// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.server');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('macchiato.fs');
goog.require('macchiato.http');
macchiato.server.ws = cljs.nodejs.require.call(null,"ws");
/**
 * :host - hostname to bind
 *   :port - HTTP port the server will listen on
 *   :handler - Macchiato handler function for handling request/response
 *   :on-success - success callback that's called when server starts listening
 */
macchiato.server.http_server = (function macchiato$server$http_server(p__29794){
var map__29797 = p__29794;
var map__29797__$1 = ((((!((map__29797 == null)))?((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29797):map__29797);
var opts = map__29797__$1;
var handler = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var host = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var on_success = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var websockets_QMARK_ = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"websockets?","websockets?",2140962121));
var http_handler = macchiato.http.handler.call(null,handler,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"http","http",382524695)));
var server = cljs.nodejs.require.call(null,"http").createServer(http_handler);
server.listen(port,host,on_success);

return server;
});
/**
 * :host - hostname to bind
 *   :port - HTTP port the server will listen on
 *   :handler - Macchiato handler function for handling request/response
 *   :on-success - success callback that's called when server starts listening
 *   :private-key - path to the private key
 *   :certificate - path to the certificate for the key
 */
macchiato.server.https_server = (function macchiato$server$https_server(p__29799){
var map__29802 = p__29799;
var map__29802__$1 = ((((!((map__29802 == null)))?((((map__29802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29802):map__29802);
var opts = map__29802__$1;
var handler = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var host = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var on_success = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var private_key = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"private-key","private-key",426483388));
var certificate = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"certificate","certificate",-1722392944));
var pk = macchiato.fs.slurp.call(null,private_key);
var pc = macchiato.fs.slurp.call(null,certificate);
var http_handler = macchiato.http.handler.call(null,handler,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"https","https",-1983909665)));
var server = cljs.nodejs.require.call(null,"https").createServer(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),pk,new cljs.core.Keyword(null,"cert","cert",648499243),pc], null)),http_handler);
server.listen(port,host,on_success);

return server;
});
/**
 * :host - hostname to bind (default 0.0.0.0)
 *   :port - HTTP port the server will listen on
 *   :protocol - :http or :https  (default :http)
 *   :handler - Macchiato handler function for handling request/response
 *   :on-success - success callback that's called when server starts listening
 *   :private-key - path to the private key (only used when protocol is :https)
 *   :websockets? - boolean for enabling websockets
 *   :certificate - path to the certificate for the key (only used when protocol is :https)
 */
macchiato.server.start = (function macchiato$server$start(p__29804){
var map__29808 = p__29804;
var map__29808__$1 = ((((!((map__29808 == null)))?((((map__29808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29808):map__29808);
var opts = map__29808__$1;
var handler = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var host = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"host","host",-1558485167),"0.0.0.0");
var port = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var protocol = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"http","http",382524695));
var G__29810 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__29810) {
case "http":
return macchiato.server.http_server.call(null,opts);

break;
case "https":
return macchiato.server.https_server.call(null,opts);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unrecognized protocol: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" must be either :http or :https")].join('')));

}
});
/**
 * starts a WebSocket server given a handler and a Node server instance
 */
macchiato.server.start_ws = (function macchiato$server$start_ws(server,handler){
var wss = (new macchiato.server.ws.Server(({"server": server})));
return wss.on("connection",((function (wss){
return (function (p1__29812_SHARP_){
return macchiato.http.ws_handler.call(null,handler,p1__29812_SHARP_);
});})(wss))
);
});

//# sourceMappingURL=server.js.map?rel=1488028096529