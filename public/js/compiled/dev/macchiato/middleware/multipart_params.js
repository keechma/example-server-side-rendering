// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.multipart_params');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('macchiato.middleware.nested_params');
goog.require('macchiato.util.request');
macchiato.middleware.multipart_params.multiparty = cljs.nodejs.require.call(null,"multiparty");
/**
 * Does a request have a multipart form?
 */
macchiato.middleware.multipart_params.multipart_form_QMARK_ = (function macchiato$middleware$multipart_params$multipart_form_QMARK_(request){
return cljs.core._EQ_.call(null,macchiato.util.request.content_type.call(null,request),"multipart/form-data");
});
macchiato.middleware.multipart_params.parse_opts = (function macchiato$middleware$multipart_params$parse_opts(p__29869){
var map__29872 = p__29869;
var map__29872__$1 = ((((!((map__29872 == null)))?((((map__29872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29872):map__29872);
var encoding = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var max_fields_size = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"max-fields-size","max-fields-size",-1841908038));
var max_fields = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"max-fields","max-fields",1566177472));
var max_files_size = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"max-files-size","max-files-size",490577435));
var upload_dir = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"upload-dir","upload-dir",916196479));
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"autoFields","autoFields",1195841071),true,new cljs.core.Keyword(null,"autoFiles","autoFiles",-467880023),true], null),(cljs.core.truth_(encoding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),encoding], null):null),(cljs.core.truth_(max_fields_size)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxFieldsSize","maxFieldsSize",982080104),max_fields_size], null):null),(cljs.core.truth_(max_fields)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxFields","maxFields",-866686327),max_fields], null):null),(cljs.core.truth_(max_files_size)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxFilesSize","maxFilesSize",-1650948381),max_files_size], null):null),(cljs.core.truth_(upload_dir)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uploadDir","uploadDir",149188635),upload_dir], null):null)));
});
macchiato.middleware.multipart_params.parse_params = (function macchiato$middleware$multipart_params$parse_params(fields){
return macchiato.middleware.nested_params.nest_params.call(null,cljs.core.reduce.call(null,(function (params,k){
return cljs.core.assoc.call(null,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.js__GT_clj.call(null,(fields[k])));
}),cljs.core.PersistentArrayMap.EMPTY,Object.keys(fields)),cljs.core.identity);
});
macchiato.middleware.multipart_params.parse_file_param = (function macchiato$middleware$multipart_params$parse_file_param(file_param){
var map__29876 = cljs.core.js__GT_clj.call(null,file_param,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__29876__$1 = ((((!((map__29876 == null)))?((((map__29876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29876):map__29876);
var originalFilename = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"originalFilename","originalFilename",-86221381));
var path = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var size = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var headers = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filename","filename",-1428840783),originalFilename,new cljs.core.Keyword(null,"tempfile","tempfile",-478552036),path,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(headers)], null);
});
macchiato.middleware.multipart_params.parse_file_params = (function macchiato$middleware$multipart_params$parse_file_params(files){
return cljs.core.reduce.call(null,(function (params,k){
return cljs.core.assoc.call(null,params,k,cljs.core.map.call(null,macchiato.middleware.multipart_params.parse_file_param,(files[k])));
}),cljs.core.PersistentArrayMap.EMPTY,Object.keys(files));
});
macchiato.middleware.multipart_params.multipart_request = (function macchiato$middleware$multipart_params$multipart_request(handler,request,respond,raise,p__29878){
var map__29881 = p__29878;
var map__29881__$1 = ((((!((map__29881 == null)))?((((map__29881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29881):map__29881);
var opts = map__29881__$1;
var progress_fn = cljs.core.get.call(null,map__29881__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var form = (new macchiato.middleware.multipart_params.multiparty.Form(macchiato.middleware.multipart_params.parse_opts.call(null,opts)));
if(cljs.core.truth_(progress_fn)){
form.on("progress",progress_fn);
} else {
}

return form.parse(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(request),((function (form,map__29881,map__29881__$1,opts,progress_fn){
return (function (err,fields,files){
var params = cljs.core.merge.call(null,macchiato.middleware.multipart_params.parse_file_params.call(null,files),macchiato.middleware.multipart_params.parse_params.call(null,fields));
if(cljs.core.truth_(err)){
return raise.call(null,err);
} else {
return handler.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),params,new cljs.core.Keyword(null,"params","params",710516235),params),respond,raise);
}
});})(form,map__29881,map__29881__$1,opts,progress_fn))
);
});
/**
 * :encoding - sets encoding for the incoming form fields. Defaults to utf8.
 *   :max-fields-size - Limits the amount of memory all fields (not files) can allocate in bytes. If this value is exceeded, an error event is emitted. The default size is 2MB.
 *   :max-fields - Limits the number of fields that will be parsed before emitting an error event. A file counts as a field in this case. Defaults to 1000.
 *   :max-files-size - Only relevant when autoFiles is true. Limits the total bytes accepted for all files combined. If this value is exceeded, an error event is emitted. The default is Infinity.
 *   :upload-dir - Only relevant when autoFiles is true. The directory for placing file uploads in. Defaults to (.tmpDir os).
 *   :progress-fn - function that will be called when bytes are received, should expect two fields: bytes-eeceived, bytes-expected
 */
macchiato.middleware.multipart_params.wrap_multipart = (function macchiato$middleware$multipart_params$wrap_multipart(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29889 = arguments.length;
var i__26343__auto___29890 = (0);
while(true){
if((i__26343__auto___29890 < len__26342__auto___29889)){
args__26349__auto__.push((arguments[i__26343__auto___29890]));

var G__29891 = (i__26343__auto___29890 + (1));
i__26343__auto___29890 = G__29891;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((1) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((1)),(0),null)):null);
return macchiato.middleware.multipart_params.wrap_multipart.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26350__auto__);
});

macchiato.middleware.multipart_params.wrap_multipart.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__29885){
var vec__29886 = p__29885;
var opts = cljs.core.nth.call(null,vec__29886,(0),null);
return ((function (vec__29886,opts){
return (function (request,respond,raise){
if(cljs.core.truth_(macchiato.middleware.multipart_params.multipart_form_QMARK_.call(null,request))){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"encoding","encoding",1728578272),(function (){var or__25229__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = macchiato.util.request.character_encoding.call(null,request);
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
return "utf8";
}
}
})());
return macchiato.middleware.multipart_params.multipart_request.call(null,handler,request,respond,raise,opts__$1);
} else {
return handler.call(null,request,respond,raise);
}
});
;})(vec__29886,opts))
});

macchiato.middleware.multipart_params.wrap_multipart.cljs$lang$maxFixedArity = (1);

macchiato.middleware.multipart_params.wrap_multipart.cljs$lang$applyTo = (function (seq29883){
var G__29884 = cljs.core.first.call(null,seq29883);
var seq29883__$1 = cljs.core.next.call(null,seq29883);
return macchiato.middleware.multipart_params.wrap_multipart.cljs$core$IFn$_invoke$arity$variadic(G__29884,seq29883__$1);
});


//# sourceMappingURL=multipart_params.js.map?rel=1488028096678