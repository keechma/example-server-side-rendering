// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.env');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('macchiato.fs');
macchiato.env.k__GT_path = (function macchiato$env$k__GT_path(k,dash,level){
var $ = k;
var $__$1 = clojure.string.lower_case.call(null,$);
var $__$2 = clojure.string.split.call(null,$__$1,level);
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,((function ($,$__$1,$__$2){
return (function (p1__29815_SHARP_){
return clojure.string.replace.call(null,p1__29815_SHARP_,dash,"-");
});})($,$__$1,$__$2))
),$__$2);
});
macchiato.env.parse_boolean = (function macchiato$env$parse_boolean(s){
return cljs.core.boolean$.call(null,(function (){var G__29817 = s;
var G__29817__$1 = (((G__29817 == null))?null:G__29817.trim());
var G__29817__$2 = (((G__29817__$1 == null))?null:G__29817__$1.toLowerCase());
if((G__29817__$2 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__29817__$2,"true");
}
})());
});
macchiato.env.str__GT_value = (function macchiato$env$str__GT_value(v){

if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]+/,v))){
return parseFloat(v);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^(true|false)$/i,v))){
return macchiato.env.parse_boolean.call(null,v);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\w+/,v))){
return v;
} else {
try{var parsed = cljs.reader.read_string.call(null,v);
if((parsed instanceof cljs.core.Symbol)){
return v;
} else {
return parsed;
}
}catch (e29819){if((e29819 instanceof Error)){
var _ = e29819;
return v;
} else {
throw e29819;

}
}
}
}
}
});
macchiato.env.env__GT_path = (function macchiato$env$env__GT_path(k){
return macchiato.env.k__GT_path.call(null,k,"_",/__/);
});
macchiato.env.env_props = (function macchiato$env$env_props(){
var env = process.env;
return cljs.core.reduce.call(null,((function (env){
return (function (props,k){
return cljs.core.assoc_in.call(null,props,macchiato.env.env__GT_path.call(null,k),macchiato.env.str__GT_value.call(null,(env[k])));
});})(env))
,cljs.core.PersistentArrayMap.EMPTY,Object.keys(env));
});
macchiato.env.file_props = (function macchiato$env$file_props(filename){
var G__29821 = filename;
var G__29821__$1 = (((G__29821 == null))?null:macchiato.fs.slurp.call(null,G__29821));
if((G__29821__$1 == null)){
return null;
} else {
return cljs.reader.read_string.call(null,G__29821__$1);
}
});
macchiato.env.deep_merge = (function macchiato$env$deep_merge(a,b){
return cljs.core.merge_with.call(null,(function (x,y){
if(cljs.core.map_QMARK_.call(null,y)){
return macchiato.env.deep_merge.call(null,x,y);
} else {
if(cljs.core.vector_QMARK_.call(null,y)){
return cljs.core.concat.call(null,x,y);
} else {
return y;

}
}
}),a,b);
});
macchiato.env.env = (function macchiato$env$env(var_args){
var args__26349__auto__ = [];
var len__26342__auto___29827 = arguments.length;
var i__26343__auto___29828 = (0);
while(true){
if((i__26343__auto___29828 < len__26342__auto___29827)){
args__26349__auto__.push((arguments[i__26343__auto___29828]));

var G__29829 = (i__26343__auto___29828 + (1));
i__26343__auto___29828 = G__29829;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return macchiato.env.env.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

macchiato.env.env.cljs$core$IFn$_invoke$arity$variadic = (function (p__29823){
var vec__29824 = p__29823;
var filename = cljs.core.nth.call(null,vec__29824,(0),null);
var env_config = macchiato.env.env_props.call(null);
return macchiato.env.deep_merge.call(null,env_config,macchiato.env.file_props.call(null,(function (){var or__25229__auto__ = new cljs.core.Keyword(null,"conf","conf",-983921284).cljs$core$IFn$_invoke$arity$1(env_config);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = filename;
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
return "config.edn";
}
}
})()));
});

macchiato.env.env.cljs$lang$maxFixedArity = (0);

macchiato.env.env.cljs$lang$applyTo = (function (seq29822){
return macchiato.env.env.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29822));
});


//# sourceMappingURL=env.js.map?rel=1488028096572