// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('keechma_ssr.routes');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('hiccups.runtime');
goog.require('macchiato.util.response');
keechma_ssr.routes.home = (function keechma_ssr$routes$home(req,res,raise){
return res.call(null,macchiato.util.response.content_type.call(null,macchiato.util.response.ok.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<html"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<body"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h2>Hello World!</h2>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Your user-agent is: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"user-agent"], null)))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</p>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</body>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</html>")].join('')),"text/html"));
});
keechma_ssr.routes.not_found = (function keechma_ssr$routes$not_found(req,res,raise){
return res.call(null,macchiato.util.response.content_type.call(null,macchiato.util.response.not_found.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<html"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<body"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs37491 = new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.map_QMARK_.call(null,attrs37491)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h2"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs37491))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" was not found"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h2>")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h2>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs37491)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" was not found"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h2>")].join('');
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</body>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</html>")].join('')),"text/html"));
});
keechma_ssr.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get","get",1683182755),keechma_ssr.routes.home], null)], null);
keechma_ssr.routes.router = (function keechma_ssr$routes$router(req,res,raise){
var temp__4655__auto__ = bidi.bidi.match_route_STAR_.call(null,keechma_ssr.routes.routes,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(req),req);
if(cljs.core.truth_(temp__4655__auto__)){
var map__37494 = temp__4655__auto__;
var map__37494__$1 = ((((!((map__37494 == null)))?((((map__37494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37494):map__37494);
var handler = cljs.core.get.call(null,map__37494__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__37494__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return handler.call(null,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params),res,raise);
} else {
return keechma_ssr.routes.not_found.call(null,req,res,raise);
}
});

//# sourceMappingURL=routes.js.map?rel=1488028105431