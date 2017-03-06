// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.fs');
goog.require('cljs.core');
goog.require('cljs.nodejs');
macchiato.fs.fs = cljs.nodejs.require.call(null,"fs");
macchiato.fs.obj__GT_clj = (function macchiato$fs$obj__GT_clj(obj){
return cljs.core.reduce.call(null,(function (props,k){
return cljs.core.assoc.call(null,props,cljs.core.keyword.call(null,k),(obj[k]));
}),cljs.core.PersistentArrayMap.EMPTY,Object.keys(obj));
});
macchiato.fs.exists_QMARK_ = (function macchiato$fs$exists_QMARK_(path){
return macchiato.fs.fs.existsSync(path);
});
macchiato.fs.file_QMARK_ = (function macchiato$fs$file_QMARK_(path){
return macchiato.fs.fs.lstatSync(path).isFile();
});
macchiato.fs.directory_QMARK_ = (function macchiato$fs$directory_QMARK_(path){
return macchiato.fs.fs.lstatSync(path).isDirectory();
});
/**
 * Reads a folder synchronously and returns the file names as a Clojure vector.
 */
macchiato.fs.read_dir_sync = (function macchiato$fs$read_dir_sync(path){
return cljs.core.js__GT_clj.call(null,macchiato.fs.fs.readdirSync(path));
});
macchiato.fs.slurp = (function macchiato$fs$slurp(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29573 = arguments.length;
var i__26343__auto___29574 = (0);
while(true){
if((i__26343__auto___29574 < len__26342__auto___29573)){
args__26349__auto__.push((arguments[i__26343__auto___29574]));

var G__29575 = (i__26343__auto___29574 + (1));
i__26343__auto___29574 = G__29575;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((1) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((1)),(0),null)):null);
return macchiato.fs.slurp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26350__auto__);
});

macchiato.fs.slurp.cljs$core$IFn$_invoke$arity$variadic = (function (filename,p__29570){
var map__29571 = p__29570;
var map__29571__$1 = ((((!((map__29571 == null)))?((((map__29571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29571):map__29571);
var encoding = cljs.core.get.call(null,map__29571__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
if(cljs.core.truth_(macchiato.fs.exists_QMARK_.call(null,filename))){
return (cljs.core.truth_(encoding)?macchiato.fs.fs.readFileSync(filename,encoding):macchiato.fs.fs.readFileSync(filename)).toString();
} else {
return null;
}
});

macchiato.fs.slurp.cljs$lang$maxFixedArity = (1);

macchiato.fs.slurp.cljs$lang$applyTo = (function (seq29568){
var G__29569 = cljs.core.first.call(null,seq29568);
var seq29568__$1 = cljs.core.next.call(null,seq29568);
return macchiato.fs.slurp.cljs$core$IFn$_invoke$arity$variadic(G__29569,seq29568__$1);
});

macchiato.fs.slurp_async = (function macchiato$fs$slurp_async(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29582 = arguments.length;
var i__26343__auto___29583 = (0);
while(true){
if((i__26343__auto___29583 < len__26342__auto___29582)){
args__26349__auto__.push((arguments[i__26343__auto___29583]));

var G__29584 = (i__26343__auto___29583 + (1));
i__26343__auto___29583 = G__29584;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((2) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((2)),(0),null)):null);
return macchiato.fs.slurp_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26350__auto__);
});

macchiato.fs.slurp_async.cljs$core$IFn$_invoke$arity$variadic = (function (filename,cb,p__29579){
var map__29580 = p__29579;
var map__29580__$1 = ((((!((map__29580 == null)))?((((map__29580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);
var encoding = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
if(cljs.core.truth_(macchiato.fs.exists_QMARK_.call(null,filename))){
var str_cb = ((function (map__29580,map__29580__$1,encoding){
return (function (err,data){
return cb.call(null,err,data.toString());
});})(map__29580,map__29580__$1,encoding))
;
if(cljs.core.truth_(encoding)){
return macchiato.fs.fs.readFile(filename,encoding,str_cb);
} else {
return macchiato.fs.fs.readFile(filename,str_cb);
}
} else {
return null;
}
});

macchiato.fs.slurp_async.cljs$lang$maxFixedArity = (2);

macchiato.fs.slurp_async.cljs$lang$applyTo = (function (seq29576){
var G__29577 = cljs.core.first.call(null,seq29576);
var seq29576__$1 = cljs.core.next.call(null,seq29576);
var G__29578 = cljs.core.first.call(null,seq29576__$1);
var seq29576__$2 = cljs.core.next.call(null,seq29576__$1);
return macchiato.fs.slurp_async.cljs$core$IFn$_invoke$arity$variadic(G__29577,G__29578,seq29576__$2);
});

macchiato.fs.spit = (function macchiato$fs$spit(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29591 = arguments.length;
var i__26343__auto___29592 = (0);
while(true){
if((i__26343__auto___29592 < len__26342__auto___29591)){
args__26349__auto__.push((arguments[i__26343__auto___29592]));

var G__29593 = (i__26343__auto___29592 + (1));
i__26343__auto___29592 = G__29593;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((2) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((2)),(0),null)):null);
return macchiato.fs.spit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26350__auto__);
});

macchiato.fs.spit.cljs$core$IFn$_invoke$arity$variadic = (function (filename,data,p__29588){
var map__29589 = p__29588;
var map__29589__$1 = ((((!((map__29589 == null)))?((((map__29589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29589):map__29589);
var encoding = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8");
var mode = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"0o666");
var flag = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"flag","flag",1088647881),"w");
var data__$1 = ((typeof data === 'string')?data:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''));
return macchiato.fs.fs.writeFileSync(filename,data__$1,encoding,mode,flag);
});

macchiato.fs.spit.cljs$lang$maxFixedArity = (2);

macchiato.fs.spit.cljs$lang$applyTo = (function (seq29585){
var G__29586 = cljs.core.first.call(null,seq29585);
var seq29585__$1 = cljs.core.next.call(null,seq29585);
var G__29587 = cljs.core.first.call(null,seq29585__$1);
var seq29585__$2 = cljs.core.next.call(null,seq29585__$1);
return macchiato.fs.spit.cljs$core$IFn$_invoke$arity$variadic(G__29586,G__29587,seq29585__$2);
});

macchiato.fs.spit_async = (function macchiato$fs$spit_async(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29601 = arguments.length;
var i__26343__auto___29602 = (0);
while(true){
if((i__26343__auto___29602 < len__26342__auto___29601)){
args__26349__auto__.push((arguments[i__26343__auto___29602]));

var G__29603 = (i__26343__auto___29602 + (1));
i__26343__auto___29602 = G__29603;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((3) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((3)),(0),null)):null);
return macchiato.fs.spit_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26350__auto__);
});

macchiato.fs.spit_async.cljs$core$IFn$_invoke$arity$variadic = (function (filename,data,on_error,p__29598){
var map__29599 = p__29598;
var map__29599__$1 = ((((!((map__29599 == null)))?((((map__29599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29599):map__29599);
var opts = map__29599__$1;
var encoding = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8");
var mode = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"0o666");
var flag = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"flag","flag",1088647881),"w");
return macchiato.fs.fs.writeFile(filename,data,cljs.core.clj__GT_js.call(null,opts),on_error);
});

macchiato.fs.spit_async.cljs$lang$maxFixedArity = (3);

macchiato.fs.spit_async.cljs$lang$applyTo = (function (seq29594){
var G__29595 = cljs.core.first.call(null,seq29594);
var seq29594__$1 = cljs.core.next.call(null,seq29594);
var G__29596 = cljs.core.first.call(null,seq29594__$1);
var seq29594__$2 = cljs.core.next.call(null,seq29594__$1);
var G__29597 = cljs.core.first.call(null,seq29594__$2);
var seq29594__$3 = cljs.core.next.call(null,seq29594__$2);
return macchiato.fs.spit_async.cljs$core$IFn$_invoke$arity$variadic(G__29595,G__29596,G__29597,seq29594__$3);
});

macchiato.fs.delete$ = (function macchiato$fs$delete(file){
return macchiato.fs.fs.unlinkSync(file);
});
macchiato.fs.delete_async = (function macchiato$fs$delete_async(file,on_error){
return macchiato.fs.fs.unlink(file,on_error);
});
macchiato.fs.stat = (function macchiato$fs$stat(path){
if(cljs.core.truth_(macchiato.fs.exists_QMARK_.call(null,path))){
return macchiato.fs.obj__GT_clj.call(null,macchiato.fs.fs.statSync(path));
} else {
return null;
}
});
macchiato.fs.stat_async = (function macchiato$fs$stat_async(path,cb){
if(cljs.core.truth_(macchiato.fs.exists_QMARK_.call(null,path))){
return macchiato.fs.fs.stat(path,(function (err,stats){
return cb.call(null,err,macchiato.fs.obj__GT_clj.call(null,stats));
}));
} else {
return null;
}
});
macchiato.fs.read_stream = (function macchiato$fs$read_stream(path){
return macchiato.fs.fs.createReadStream(path);
});
macchiato.fs.write_stream = (function macchiato$fs$write_stream(path){
return macchiato.fs.fs.createReadStream(path);
});
macchiato.fs.pipe = (function macchiato$fs$pipe(input_stream,output_stream){
return macchiato.fs.fs.pipe(input_stream,output_stream);
});

//# sourceMappingURL=fs.js.map?rel=1488028096183