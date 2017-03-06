// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('keechma_ssr.core');
goog.require('cljs.core');
goog.require('keechma_ssr.config');
goog.require('keechma_ssr.middleware');
goog.require('keechma_ssr.routes');
goog.require('macchiato.server');
goog.require('macchiato.session.memory');
goog.require('mount.core');
goog.require('taoensso.timbre');
keechma_ssr.core.app = (function keechma_ssr$core$app(){
mount.core.start.call(null);

var host = (function (){var or__25229__auto__ = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keechma_ssr.config.env));
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return "127.0.0.1";
}
})();
var port = (function (){var or__25229__auto__ = (function (){var G__37501 = cljs.core.deref.call(null,keechma_ssr.config.env);
var G__37501__$1 = (((G__37501 == null))?null:new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__37501));
if((G__37501__$1 == null)){
return null;
} else {
return parseInt(G__37501__$1);
}
})();
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return (3000);
}
})();
return macchiato.server.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),keechma_ssr.middleware.wrap_defaults.call(null,keechma_ssr.routes.router),new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"on-success","on-success",1786904109),((function (host,port){
return (function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"keechma-ssr.core","/private/var/folders/vw/l9zr121d06gcz6ttm9wrxg7c0000gn/T/form-init5261933219096122589.clj",19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (host,port){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keechma-ssr started on",host,":",port], null);
});})(host,port))
,null)),null,302845986);
});})(host,port))
], null));
});
keechma_ssr.core.start_workers = (function keechma_ssr$core$start_workers(cluster){
var os = require("os");
var n__26152__auto___37502 = cljs.core.get_in.call(null,cljs.core.deref.call(null,keechma_ssr.config.env),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster","cluster",535175621),new cljs.core.Keyword(null,"procs","procs",-2025727913)], null),os.cpus().length);
var __37503 = (0);
while(true){
if((__37503 < n__26152__auto___37502)){
cluster.fork();

var G__37504 = (__37503 + (1));
__37503 = G__37504;
continue;
} else {
}
break;
}

return cluster.on("exit",((function (os){
return (function (worker,code,signal){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"keechma-ssr.core","/private/var/folders/vw/l9zr121d06gcz6ttm9wrxg7c0000gn/T/form-init5261933219096122589.clj",27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (os){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["worker terminated",worker.process.pid], null);
});})(os))
,null)),null,-231061851);
});})(os))
);
});
keechma_ssr.core.main = (function keechma_ssr$core$main(var_args){
var args__26349__auto__ = [];
var len__26342__auto___37506 = arguments.length;
var i__26343__auto___37507 = (0);
while(true){
if((i__26343__auto___37507 < len__26342__auto___37506)){
args__26349__auto__.push((arguments[i__26343__auto___37507]));

var G__37508 = (i__26343__auto___37507 + (1));
i__26343__auto___37507 = G__37508;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return keechma_ssr.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

keechma_ssr.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"cluster","cluster",535175621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keechma_ssr.config.env)))){
var cluster = require("cluster");
if(cljs.core.truth_(cluster.isMaster)){
return keechma_ssr.core.start_workers.call(null,cluster);
} else {
return keechma_ssr.core.app.call(null);
}
} else {
return keechma_ssr.core.app.call(null);
}
});

keechma_ssr.core.main.cljs$lang$maxFixedArity = (0);

keechma_ssr.core.main.cljs$lang$applyTo = (function (seq37505){
return keechma_ssr.core.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37505));
});


//# sourceMappingURL=core.js.map?rel=1488028105461