// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.fs.path');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.spec');
goog.require('cljs.nodejs');
macchiato.fs.path.js_path = cljs.nodejs.require.call(null,"path");
macchiato.fs.path.delimiter = macchiato.fs.path.js_path.delimiter;
macchiato.fs.path.separator = macchiato.fs.path.js_path.sep;
/**
 * Applies a javascript function to a 'this' context and arguments
 * args: [f this args]
 * returns: result of calling f with args
 */
macchiato.fs.path.js_apply = (function macchiato$fs$path$js_apply(f,this$,args){
return f.apply(this$,cljs.core.to_array.call(null,args));
});
macchiato.fs.path.obj__GT_map = (function macchiato$fs$path$obj__GT_map(var_args){
var args__26349__auto__ = [];
var len__26342__auto___28778 = arguments.length;
var i__26343__auto___28779 = (0);
while(true){
if((i__26343__auto___28779 < len__26342__auto___28778)){
args__26349__auto__.push((arguments[i__26343__auto___28779]));

var G__28780 = (i__26343__auto___28779 + (1));
i__26343__auto___28779 = G__28780;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((1) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((1)),(0),null)):null);
return macchiato.fs.path.obj__GT_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26350__auto__);
});

macchiato.fs.path.obj__GT_map.cljs$core$IFn$_invoke$arity$variadic = (function (o,p__28775){
var map__28776 = p__28775;
var map__28776__$1 = ((((!((map__28776 == null)))?((((map__28776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28776):map__28776);
var keywordize_QMARK_ = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),true);
var transform = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
return cljs.core.reduce.call(null,((function (map__28776,map__28776__$1,keywordize_QMARK_,transform){
return (function (props,k){
return cljs.core.assoc.call(null,props,(cljs.core.truth_(keywordize_QMARK_)?cljs.core.keyword.call(null,k):k),transform.call(null,(o[k])));
});})(map__28776,map__28776__$1,keywordize_QMARK_,transform))
,cljs.core.PersistentArrayMap.EMPTY,Object.keys(o));
});

macchiato.fs.path.obj__GT_map.cljs$lang$maxFixedArity = (1);

macchiato.fs.path.obj__GT_map.cljs$lang$applyTo = (function (seq28773){
var G__28774 = cljs.core.first.call(null,seq28773);
var seq28773__$1 = cljs.core.next.call(null,seq28773);
return macchiato.fs.path.obj__GT_map.cljs$core$IFn$_invoke$arity$variadic(G__28774,seq28773__$1);
});

/**
 * Returns the basename (file without directory) of the path
 * args: path
 * return: string
 */
macchiato.fs.path.basename = (function macchiato$fs$path$basename(path){
return macchiato.fs.path.js_path.basename(path);
});
/**
 * Returns the dirname of the path
 * args: [path]
 * return: string
 */
macchiato.fs.path.dirname = (function macchiato$fs$path$dirname(path){
return macchiato.fs.path.js_path.dirname(path);
});
/**
 * Returns the extension of the file path (dot included)
 * args: [path]
 * return: string
 */
macchiato.fs.path.extension = (function macchiato$fs$path$extension(path){
return macchiato.fs.path.js_path.extname(path);
});
/**
 * Turns a map of the form returned by `parse` into a string
 * args [map]
 * returns: string
 */
macchiato.fs.path.format = (function macchiato$fs$path$format(p__28781){
var map__28784 = p__28781;
var map__28784__$1 = ((((!((map__28784 == null)))?((((map__28784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28784):map__28784);
var dir = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var root = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var base = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"base","base",185279322));
var name = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ext = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"ext","ext",-996964541));
return macchiato.fs.path.js_path.format(({"dir": dir, "root": root, "base": base, "name": name, "ext": ext}));
});
/**
 * true if path is absolute
 * args: [path]
 * returns: bool
 */
macchiato.fs.path.absolute_QMARK_ = (function macchiato$fs$path$absolute_QMARK_(path){
return macchiato.fs.path.js_path.isAbsolute(path);
});
/**
 * Joins path segments together
 * args: [& segments]
 * returns: string
 */
macchiato.fs.path.join = (function macchiato$fs$path$join(var_args){
var args__26349__auto__ = [];
var len__26342__auto___28787 = arguments.length;
var i__26343__auto___28788 = (0);
while(true){
if((i__26343__auto___28788 < len__26342__auto___28787)){
args__26349__auto__.push((arguments[i__26343__auto___28788]));

var G__28789 = (i__26343__auto___28788 + (1));
i__26343__auto___28788 = G__28789;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return macchiato.fs.path.join.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

macchiato.fs.path.join.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return macchiato.fs.path.js_apply.call(null,macchiato.fs.path.js_path.join,null,ps);
});

macchiato.fs.path.join.cljs$lang$maxFixedArity = (0);

macchiato.fs.path.join.cljs$lang$applyTo = (function (seq28786){
return macchiato.fs.path.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28786));
});

/**
 * Resolves . and .. segments of path
 * args: [path]
 * returns: string
 */
macchiato.fs.path.normalize = (function macchiato$fs$path$normalize(path){
return macchiato.fs.path.js_path.normalize(path);
});
/**
 * Returns a map describing the file path
 * args: [path]
 * returns: map with keys (all string values):
 *   :root :dir :base :ext :name
 */
macchiato.fs.path.parse = (function macchiato$fs$path$parse(path){
return macchiato.fs.path.obj__GT_map.call(null,macchiato.fs.path.js_path.parse(path));
});
/**
 * The relative path from `from` to `to`
 * args: [from to]
 * returns: string
 */
macchiato.fs.path.relative = (function macchiato$fs$path$relative(from,to){
return macchiato.fs.path.js_path.relative(from,to);
});
/**
 * Joins the given path segments and absolutifies
 * args [& segments]
 * returns: string
 */
macchiato.fs.path.resolve = (function macchiato$fs$path$resolve(var_args){
var args__26349__auto__ = [];
var len__26342__auto___28791 = arguments.length;
var i__26343__auto___28792 = (0);
while(true){
if((i__26343__auto___28792 < len__26342__auto___28791)){
args__26349__auto__.push((arguments[i__26343__auto___28792]));

var G__28793 = (i__26343__auto___28792 + (1));
i__26343__auto___28792 = G__28793;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return macchiato.fs.path.resolve.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

macchiato.fs.path.resolve.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return macchiato.fs.path.js_apply.call(null,macchiato.fs.path.js_path.resolve,null,ps);
});

macchiato.fs.path.resolve.cljs$lang$maxFixedArity = (0);

macchiato.fs.path.resolve.cljs$lang$applyTo = (function (seq28790){
return macchiato.fs.path.resolve.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28790));
});

/**
 * Receives a path, and returns the same value if it ends in a path separator,
 *   or the path with the path separator appended at the end if otherwise.
 */
macchiato.fs.path.with_separator = (function macchiato$fs$path$with_separator(path){
if(clojure.string.ends_with_QMARK_.call(null,path,macchiato.fs.path.separator)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(macchiato.fs.path.separator)].join('');
}
});

//# sourceMappingURL=path.js.map?rel=1488028095265