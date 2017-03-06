// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25229__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25229__auto__){
return or__25229__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25229__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34439_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34439_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34444 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34445 = null;
var count__34446 = (0);
var i__34447 = (0);
while(true){
if((i__34447 < count__34446)){
var n = cljs.core._nth.call(null,chunk__34445,i__34447);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34448 = seq__34444;
var G__34449 = chunk__34445;
var G__34450 = count__34446;
var G__34451 = (i__34447 + (1));
seq__34444 = G__34448;
chunk__34445 = G__34449;
count__34446 = G__34450;
i__34447 = G__34451;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34444);
if(temp__4657__auto__){
var seq__34444__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34444__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__34444__$1);
var G__34452 = cljs.core.chunk_rest.call(null,seq__34444__$1);
var G__34453 = c__26048__auto__;
var G__34454 = cljs.core.count.call(null,c__26048__auto__);
var G__34455 = (0);
seq__34444 = G__34452;
chunk__34445 = G__34453;
count__34446 = G__34454;
i__34447 = G__34455;
continue;
} else {
var n = cljs.core.first.call(null,seq__34444__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34456 = cljs.core.next.call(null,seq__34444__$1);
var G__34457 = null;
var G__34458 = (0);
var G__34459 = (0);
seq__34444 = G__34456;
chunk__34445 = G__34457;
count__34446 = G__34458;
i__34447 = G__34459;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34510_34521 = cljs.core.seq.call(null,deps);
var chunk__34511_34522 = null;
var count__34512_34523 = (0);
var i__34513_34524 = (0);
while(true){
if((i__34513_34524 < count__34512_34523)){
var dep_34525 = cljs.core._nth.call(null,chunk__34511_34522,i__34513_34524);
topo_sort_helper_STAR_.call(null,dep_34525,(depth + (1)),state);

var G__34526 = seq__34510_34521;
var G__34527 = chunk__34511_34522;
var G__34528 = count__34512_34523;
var G__34529 = (i__34513_34524 + (1));
seq__34510_34521 = G__34526;
chunk__34511_34522 = G__34527;
count__34512_34523 = G__34528;
i__34513_34524 = G__34529;
continue;
} else {
var temp__4657__auto___34530 = cljs.core.seq.call(null,seq__34510_34521);
if(temp__4657__auto___34530){
var seq__34510_34531__$1 = temp__4657__auto___34530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34510_34531__$1)){
var c__26048__auto___34532 = cljs.core.chunk_first.call(null,seq__34510_34531__$1);
var G__34533 = cljs.core.chunk_rest.call(null,seq__34510_34531__$1);
var G__34534 = c__26048__auto___34532;
var G__34535 = cljs.core.count.call(null,c__26048__auto___34532);
var G__34536 = (0);
seq__34510_34521 = G__34533;
chunk__34511_34522 = G__34534;
count__34512_34523 = G__34535;
i__34513_34524 = G__34536;
continue;
} else {
var dep_34537 = cljs.core.first.call(null,seq__34510_34531__$1);
topo_sort_helper_STAR_.call(null,dep_34537,(depth + (1)),state);

var G__34538 = cljs.core.next.call(null,seq__34510_34531__$1);
var G__34539 = null;
var G__34540 = (0);
var G__34541 = (0);
seq__34510_34521 = G__34538;
chunk__34511_34522 = G__34539;
count__34512_34523 = G__34540;
i__34513_34524 = G__34541;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34514){
var vec__34518 = p__34514;
var seq__34519 = cljs.core.seq.call(null,vec__34518);
var first__34520 = cljs.core.first.call(null,seq__34519);
var seq__34519__$1 = cljs.core.next.call(null,seq__34519);
var x = first__34520;
var xs = seq__34519__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34518,seq__34519,first__34520,seq__34519__$1,x,xs,get_deps__$1){
return (function (p1__34460_SHARP_){
return clojure.set.difference.call(null,p1__34460_SHARP_,x);
});})(vec__34518,seq__34519,first__34520,seq__34519__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34554 = cljs.core.seq.call(null,provides);
var chunk__34555 = null;
var count__34556 = (0);
var i__34557 = (0);
while(true){
if((i__34557 < count__34556)){
var prov = cljs.core._nth.call(null,chunk__34555,i__34557);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34558_34566 = cljs.core.seq.call(null,requires);
var chunk__34559_34567 = null;
var count__34560_34568 = (0);
var i__34561_34569 = (0);
while(true){
if((i__34561_34569 < count__34560_34568)){
var req_34570 = cljs.core._nth.call(null,chunk__34559_34567,i__34561_34569);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34570,prov);

var G__34571 = seq__34558_34566;
var G__34572 = chunk__34559_34567;
var G__34573 = count__34560_34568;
var G__34574 = (i__34561_34569 + (1));
seq__34558_34566 = G__34571;
chunk__34559_34567 = G__34572;
count__34560_34568 = G__34573;
i__34561_34569 = G__34574;
continue;
} else {
var temp__4657__auto___34575 = cljs.core.seq.call(null,seq__34558_34566);
if(temp__4657__auto___34575){
var seq__34558_34576__$1 = temp__4657__auto___34575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34558_34576__$1)){
var c__26048__auto___34577 = cljs.core.chunk_first.call(null,seq__34558_34576__$1);
var G__34578 = cljs.core.chunk_rest.call(null,seq__34558_34576__$1);
var G__34579 = c__26048__auto___34577;
var G__34580 = cljs.core.count.call(null,c__26048__auto___34577);
var G__34581 = (0);
seq__34558_34566 = G__34578;
chunk__34559_34567 = G__34579;
count__34560_34568 = G__34580;
i__34561_34569 = G__34581;
continue;
} else {
var req_34582 = cljs.core.first.call(null,seq__34558_34576__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34582,prov);

var G__34583 = cljs.core.next.call(null,seq__34558_34576__$1);
var G__34584 = null;
var G__34585 = (0);
var G__34586 = (0);
seq__34558_34566 = G__34583;
chunk__34559_34567 = G__34584;
count__34560_34568 = G__34585;
i__34561_34569 = G__34586;
continue;
}
} else {
}
}
break;
}

var G__34587 = seq__34554;
var G__34588 = chunk__34555;
var G__34589 = count__34556;
var G__34590 = (i__34557 + (1));
seq__34554 = G__34587;
chunk__34555 = G__34588;
count__34556 = G__34589;
i__34557 = G__34590;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34554);
if(temp__4657__auto__){
var seq__34554__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34554__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__34554__$1);
var G__34591 = cljs.core.chunk_rest.call(null,seq__34554__$1);
var G__34592 = c__26048__auto__;
var G__34593 = cljs.core.count.call(null,c__26048__auto__);
var G__34594 = (0);
seq__34554 = G__34591;
chunk__34555 = G__34592;
count__34556 = G__34593;
i__34557 = G__34594;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34554__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34562_34595 = cljs.core.seq.call(null,requires);
var chunk__34563_34596 = null;
var count__34564_34597 = (0);
var i__34565_34598 = (0);
while(true){
if((i__34565_34598 < count__34564_34597)){
var req_34599 = cljs.core._nth.call(null,chunk__34563_34596,i__34565_34598);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34599,prov);

var G__34600 = seq__34562_34595;
var G__34601 = chunk__34563_34596;
var G__34602 = count__34564_34597;
var G__34603 = (i__34565_34598 + (1));
seq__34562_34595 = G__34600;
chunk__34563_34596 = G__34601;
count__34564_34597 = G__34602;
i__34565_34598 = G__34603;
continue;
} else {
var temp__4657__auto___34604__$1 = cljs.core.seq.call(null,seq__34562_34595);
if(temp__4657__auto___34604__$1){
var seq__34562_34605__$1 = temp__4657__auto___34604__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34562_34605__$1)){
var c__26048__auto___34606 = cljs.core.chunk_first.call(null,seq__34562_34605__$1);
var G__34607 = cljs.core.chunk_rest.call(null,seq__34562_34605__$1);
var G__34608 = c__26048__auto___34606;
var G__34609 = cljs.core.count.call(null,c__26048__auto___34606);
var G__34610 = (0);
seq__34562_34595 = G__34607;
chunk__34563_34596 = G__34608;
count__34564_34597 = G__34609;
i__34565_34598 = G__34610;
continue;
} else {
var req_34611 = cljs.core.first.call(null,seq__34562_34605__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34611,prov);

var G__34612 = cljs.core.next.call(null,seq__34562_34605__$1);
var G__34613 = null;
var G__34614 = (0);
var G__34615 = (0);
seq__34562_34595 = G__34612;
chunk__34563_34596 = G__34613;
count__34564_34597 = G__34614;
i__34565_34598 = G__34615;
continue;
}
} else {
}
}
break;
}

var G__34616 = cljs.core.next.call(null,seq__34554__$1);
var G__34617 = null;
var G__34618 = (0);
var G__34619 = (0);
seq__34554 = G__34616;
chunk__34555 = G__34617;
count__34556 = G__34618;
i__34557 = G__34619;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34624_34628 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34625_34629 = null;
var count__34626_34630 = (0);
var i__34627_34631 = (0);
while(true){
if((i__34627_34631 < count__34626_34630)){
var ns_34632 = cljs.core._nth.call(null,chunk__34625_34629,i__34627_34631);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34632);

var G__34633 = seq__34624_34628;
var G__34634 = chunk__34625_34629;
var G__34635 = count__34626_34630;
var G__34636 = (i__34627_34631 + (1));
seq__34624_34628 = G__34633;
chunk__34625_34629 = G__34634;
count__34626_34630 = G__34635;
i__34627_34631 = G__34636;
continue;
} else {
var temp__4657__auto___34637 = cljs.core.seq.call(null,seq__34624_34628);
if(temp__4657__auto___34637){
var seq__34624_34638__$1 = temp__4657__auto___34637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34624_34638__$1)){
var c__26048__auto___34639 = cljs.core.chunk_first.call(null,seq__34624_34638__$1);
var G__34640 = cljs.core.chunk_rest.call(null,seq__34624_34638__$1);
var G__34641 = c__26048__auto___34639;
var G__34642 = cljs.core.count.call(null,c__26048__auto___34639);
var G__34643 = (0);
seq__34624_34628 = G__34640;
chunk__34625_34629 = G__34641;
count__34626_34630 = G__34642;
i__34627_34631 = G__34643;
continue;
} else {
var ns_34644 = cljs.core.first.call(null,seq__34624_34638__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34644);

var G__34645 = cljs.core.next.call(null,seq__34624_34638__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__34624_34628 = G__34645;
chunk__34625_34629 = G__34646;
count__34626_34630 = G__34647;
i__34627_34631 = G__34648;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25229__auto__ = goog.require__;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34649__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34650__i = 0, G__34650__a = new Array(arguments.length -  0);
while (G__34650__i < G__34650__a.length) {G__34650__a[G__34650__i] = arguments[G__34650__i + 0]; ++G__34650__i;}
  args = new cljs.core.IndexedSeq(G__34650__a,0);
} 
return G__34649__delegate.call(this,args);};
G__34649.cljs$lang$maxFixedArity = 0;
G__34649.cljs$lang$applyTo = (function (arglist__34651){
var args = cljs.core.seq(arglist__34651);
return G__34649__delegate(args);
});
G__34649.cljs$core$IFn$_invoke$arity$variadic = G__34649__delegate;
return G__34649;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34652 = cljs.core._EQ_;
var expr__34653 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34652.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34653))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34652,expr__34653){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34652,expr__34653))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34652,expr__34653){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34655){if((e34655 instanceof Error)){
var e = e34655;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34655;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34652,expr__34653))
} else {
if(cljs.core.truth_(pred__34652.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34653))){
return ((function (pred__34652,expr__34653){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34652,expr__34653){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34652,expr__34653))
);

return deferred.addErrback(((function (deferred,pred__34652,expr__34653){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34652,expr__34653))
);
});
;})(pred__34652,expr__34653))
} else {
if(cljs.core.truth_(pred__34652.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34653))){
return ((function (pred__34652,expr__34653){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34656){if((e34656 instanceof Error)){
var e = e34656;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34656;

}
}})());
});
;})(pred__34652,expr__34653))
} else {
return ((function (pred__34652,expr__34653){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34652,expr__34653))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34657,callback){
var map__34660 = p__34657;
var map__34660__$1 = ((((!((map__34660 == null)))?((((map__34660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34660):map__34660);
var file_msg = map__34660__$1;
var request_url = cljs.core.get.call(null,map__34660__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34660,map__34660__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34660,map__34660__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__){
return (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_34706 = state_34684__$1;
(statearr_34686_34706[(2)] = inst_34680);

(statearr_34686_34706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34687_34707 = state_34684__$1;
(statearr_34687_34707[(2)] = null);

(statearr_34687_34707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34664 = (state_34684[(7)]);
var inst_34664__$1 = (state_34684[(2)]);
var state_34684__$1 = (function (){var statearr_34688 = state_34684;
(statearr_34688[(7)] = inst_34664__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34664__$1)){
var statearr_34689_34708 = state_34684__$1;
(statearr_34689_34708[(1)] = (5));

} else {
var statearr_34690_34709 = state_34684__$1;
(statearr_34690_34709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var state_34684__$1 = state_34684;
var statearr_34691_34710 = state_34684__$1;
(statearr_34691_34710[(2)] = null);

(statearr_34691_34710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (3))){
var inst_34682 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34684__$1,inst_34682);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34684__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34685 === (11))){
var inst_34676 = (state_34684[(2)]);
var state_34684__$1 = (function (){var statearr_34692 = state_34684;
(statearr_34692[(8)] = inst_34676);

return statearr_34692;
})();
var statearr_34693_34711 = state_34684__$1;
(statearr_34693_34711[(2)] = null);

(statearr_34693_34711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (9))){
var inst_34668 = (state_34684[(9)]);
var inst_34670 = (state_34684[(10)]);
var inst_34672 = inst_34670.call(null,inst_34668);
var state_34684__$1 = state_34684;
var statearr_34694_34712 = state_34684__$1;
(statearr_34694_34712[(2)] = inst_34672);

(statearr_34694_34712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = (state_34684[(7)]);
var inst_34666 = figwheel.client.file_reloading.blocking_load.call(null,inst_34664);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34684__$1,(8),inst_34666);
} else {
if((state_val_34685 === (10))){
var inst_34668 = (state_34684[(9)]);
var inst_34674 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34668);
var state_34684__$1 = state_34684;
var statearr_34695_34713 = state_34684__$1;
(statearr_34695_34713[(2)] = inst_34674);

(statearr_34695_34713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34664 = (state_34684[(7)]);
var inst_34670 = (state_34684[(10)]);
var inst_34668 = (state_34684[(2)]);
var inst_34669 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34670__$1 = cljs.core.get.call(null,inst_34669,inst_34664);
var state_34684__$1 = (function (){var statearr_34696 = state_34684;
(statearr_34696[(9)] = inst_34668);

(statearr_34696[(10)] = inst_34670__$1);

return statearr_34696;
})();
if(cljs.core.truth_(inst_34670__$1)){
var statearr_34697_34714 = state_34684__$1;
(statearr_34697_34714[(1)] = (9));

} else {
var statearr_34698_34715 = state_34684__$1;
(statearr_34698_34715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29980__auto__))
;
return ((function (switch__29868__auto__,c__29980__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29869__auto__ = null;
var figwheel$client$file_reloading$state_machine__29869__auto____0 = (function (){
var statearr_34702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34702[(0)] = figwheel$client$file_reloading$state_machine__29869__auto__);

(statearr_34702[(1)] = (1));

return statearr_34702;
});
var figwheel$client$file_reloading$state_machine__29869__auto____1 = (function (state_34684){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_34684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e34703){if((e34703 instanceof Object)){
var ex__29872__auto__ = e34703;
var statearr_34704_34716 = state_34684;
(statearr_34704_34716[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34717 = state_34684;
state_34684 = G__34717;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29869__auto__ = function(state_34684){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29869__auto____1.call(this,state_34684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29869__auto____0;
figwheel$client$file_reloading$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29869__auto____1;
return figwheel$client$file_reloading$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__))
})();
var state__29982__auto__ = (function (){var statearr_34705 = f__29981__auto__.call(null);
(statearr_34705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_34705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__))
);

return c__29980__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34718,callback){
var map__34721 = p__34718;
var map__34721__$1 = ((((!((map__34721 == null)))?((((map__34721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34721):map__34721);
var file_msg = map__34721__$1;
var namespace = cljs.core.get.call(null,map__34721__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34721,map__34721__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34721,map__34721__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34723){
var map__34726 = p__34723;
var map__34726__$1 = ((((!((map__34726 == null)))?((((map__34726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34726):map__34726);
var file_msg = map__34726__$1;
var namespace = cljs.core.get.call(null,map__34726__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34728){
var map__34731 = p__34728;
var map__34731__$1 = ((((!((map__34731 == null)))?((((map__34731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34731):map__34731);
var file_msg = map__34731__$1;
var namespace = cljs.core.get.call(null,map__34731__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25217__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25217__auto__){
var or__25229__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var or__25229__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25217__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34733,callback){
var map__34736 = p__34733;
var map__34736__$1 = ((((!((map__34736 == null)))?((((map__34736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34736):map__34736);
var file_msg = map__34736__$1;
var request_url = cljs.core.get.call(null,map__34736__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29980__auto___34840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___34840,out){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___34840,out){
return (function (state_34822){
var state_val_34823 = (state_34822[(1)]);
if((state_val_34823 === (1))){
var inst_34796 = cljs.core.seq.call(null,files);
var inst_34797 = cljs.core.first.call(null,inst_34796);
var inst_34798 = cljs.core.next.call(null,inst_34796);
var inst_34799 = files;
var state_34822__$1 = (function (){var statearr_34824 = state_34822;
(statearr_34824[(7)] = inst_34798);

(statearr_34824[(8)] = inst_34797);

(statearr_34824[(9)] = inst_34799);

return statearr_34824;
})();
var statearr_34825_34841 = state_34822__$1;
(statearr_34825_34841[(2)] = null);

(statearr_34825_34841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (2))){
var inst_34805 = (state_34822[(10)]);
var inst_34799 = (state_34822[(9)]);
var inst_34804 = cljs.core.seq.call(null,inst_34799);
var inst_34805__$1 = cljs.core.first.call(null,inst_34804);
var inst_34806 = cljs.core.next.call(null,inst_34804);
var inst_34807 = (inst_34805__$1 == null);
var inst_34808 = cljs.core.not.call(null,inst_34807);
var state_34822__$1 = (function (){var statearr_34826 = state_34822;
(statearr_34826[(10)] = inst_34805__$1);

(statearr_34826[(11)] = inst_34806);

return statearr_34826;
})();
if(inst_34808){
var statearr_34827_34842 = state_34822__$1;
(statearr_34827_34842[(1)] = (4));

} else {
var statearr_34828_34843 = state_34822__$1;
(statearr_34828_34843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (3))){
var inst_34820 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34822__$1,inst_34820);
} else {
if((state_val_34823 === (4))){
var inst_34805 = (state_34822[(10)]);
var inst_34810 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34805);
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34822__$1,(7),inst_34810);
} else {
if((state_val_34823 === (5))){
var inst_34816 = cljs.core.async.close_BANG_.call(null,out);
var state_34822__$1 = state_34822;
var statearr_34829_34844 = state_34822__$1;
(statearr_34829_34844[(2)] = inst_34816);

(statearr_34829_34844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (6))){
var inst_34818 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34830_34845 = state_34822__$1;
(statearr_34830_34845[(2)] = inst_34818);

(statearr_34830_34845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (7))){
var inst_34806 = (state_34822[(11)]);
var inst_34812 = (state_34822[(2)]);
var inst_34813 = cljs.core.async.put_BANG_.call(null,out,inst_34812);
var inst_34799 = inst_34806;
var state_34822__$1 = (function (){var statearr_34831 = state_34822;
(statearr_34831[(12)] = inst_34813);

(statearr_34831[(9)] = inst_34799);

return statearr_34831;
})();
var statearr_34832_34846 = state_34822__$1;
(statearr_34832_34846[(2)] = null);

(statearr_34832_34846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29980__auto___34840,out))
;
return ((function (switch__29868__auto__,c__29980__auto___34840,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto____0 = (function (){
var statearr_34836 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34836[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto__);

(statearr_34836[(1)] = (1));

return statearr_34836;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto____1 = (function (state_34822){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_34822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e34837){if((e34837 instanceof Object)){
var ex__29872__auto__ = e34837;
var statearr_34838_34847 = state_34822;
(statearr_34838_34847[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34848 = state_34822;
state_34822 = G__34848;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto__ = function(state_34822){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto____1.call(this,state_34822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___34840,out))
})();
var state__29982__auto__ = (function (){var statearr_34839 = f__29981__auto__.call(null);
(statearr_34839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___34840);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___34840,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34849,opts){
var map__34853 = p__34849;
var map__34853__$1 = ((((!((map__34853 == null)))?((((map__34853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34853):map__34853);
var eval_body = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25217__auto__ = eval_body;
if(cljs.core.truth_(and__25217__auto__)){
return typeof eval_body === 'string';
} else {
return and__25217__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34855){var e = e34855;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34856_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34856_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34865){
var vec__34866 = p__34865;
var k = cljs.core.nth.call(null,vec__34866,(0),null);
var v = cljs.core.nth.call(null,vec__34866,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34869){
var vec__34870 = p__34869;
var k = cljs.core.nth.call(null,vec__34870,(0),null);
var v = cljs.core.nth.call(null,vec__34870,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34876,p__34877){
var map__35125 = p__34876;
var map__35125__$1 = ((((!((map__35125 == null)))?((((map__35125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35125):map__35125);
var opts = map__35125__$1;
var before_jsload = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35126 = p__34877;
var map__35126__$1 = ((((!((map__35126 == null)))?((((map__35126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35126):map__35126);
var msg = map__35126__$1;
var files = cljs.core.get.call(null,map__35126__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35126__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35126__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35280){
var state_val_35281 = (state_35280[(1)]);
if((state_val_35281 === (7))){
var inst_35142 = (state_35280[(7)]);
var inst_35140 = (state_35280[(8)]);
var inst_35143 = (state_35280[(9)]);
var inst_35141 = (state_35280[(10)]);
var inst_35148 = cljs.core._nth.call(null,inst_35141,inst_35143);
var inst_35149 = figwheel.client.file_reloading.eval_body.call(null,inst_35148,opts);
var inst_35150 = (inst_35143 + (1));
var tmp35282 = inst_35142;
var tmp35283 = inst_35140;
var tmp35284 = inst_35141;
var inst_35140__$1 = tmp35283;
var inst_35141__$1 = tmp35284;
var inst_35142__$1 = tmp35282;
var inst_35143__$1 = inst_35150;
var state_35280__$1 = (function (){var statearr_35285 = state_35280;
(statearr_35285[(7)] = inst_35142__$1);

(statearr_35285[(11)] = inst_35149);

(statearr_35285[(8)] = inst_35140__$1);

(statearr_35285[(9)] = inst_35143__$1);

(statearr_35285[(10)] = inst_35141__$1);

return statearr_35285;
})();
var statearr_35286_35372 = state_35280__$1;
(statearr_35286_35372[(2)] = null);

(statearr_35286_35372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (20))){
var inst_35183 = (state_35280[(12)]);
var inst_35191 = figwheel.client.file_reloading.sort_files.call(null,inst_35183);
var state_35280__$1 = state_35280;
var statearr_35287_35373 = state_35280__$1;
(statearr_35287_35373[(2)] = inst_35191);

(statearr_35287_35373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (27))){
var state_35280__$1 = state_35280;
var statearr_35288_35374 = state_35280__$1;
(statearr_35288_35374[(2)] = null);

(statearr_35288_35374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (1))){
var inst_35132 = (state_35280[(13)]);
var inst_35129 = before_jsload.call(null,files);
var inst_35130 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35131 = (function (){return ((function (inst_35132,inst_35129,inst_35130,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34873_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34873_SHARP_);
});
;})(inst_35132,inst_35129,inst_35130,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35132__$1 = cljs.core.filter.call(null,inst_35131,files);
var inst_35133 = cljs.core.not_empty.call(null,inst_35132__$1);
var state_35280__$1 = (function (){var statearr_35289 = state_35280;
(statearr_35289[(14)] = inst_35130);

(statearr_35289[(15)] = inst_35129);

(statearr_35289[(13)] = inst_35132__$1);

return statearr_35289;
})();
if(cljs.core.truth_(inst_35133)){
var statearr_35290_35375 = state_35280__$1;
(statearr_35290_35375[(1)] = (2));

} else {
var statearr_35291_35376 = state_35280__$1;
(statearr_35291_35376[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (24))){
var state_35280__$1 = state_35280;
var statearr_35292_35377 = state_35280__$1;
(statearr_35292_35377[(2)] = null);

(statearr_35292_35377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (39))){
var inst_35233 = (state_35280[(16)]);
var state_35280__$1 = state_35280;
var statearr_35293_35378 = state_35280__$1;
(statearr_35293_35378[(2)] = inst_35233);

(statearr_35293_35378[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (46))){
var inst_35275 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35294_35379 = state_35280__$1;
(statearr_35294_35379[(2)] = inst_35275);

(statearr_35294_35379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (4))){
var inst_35177 = (state_35280[(2)]);
var inst_35178 = cljs.core.List.EMPTY;
var inst_35179 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35178);
var inst_35180 = (function (){return ((function (inst_35177,inst_35178,inst_35179,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34874_SHARP_){
var and__25217__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34874_SHARP_);
if(cljs.core.truth_(and__25217__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34874_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34874_SHARP_)));
} else {
return and__25217__auto__;
}
});
;})(inst_35177,inst_35178,inst_35179,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35181 = cljs.core.filter.call(null,inst_35180,files);
var inst_35182 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35183 = cljs.core.concat.call(null,inst_35181,inst_35182);
var state_35280__$1 = (function (){var statearr_35295 = state_35280;
(statearr_35295[(17)] = inst_35177);

(statearr_35295[(18)] = inst_35179);

(statearr_35295[(12)] = inst_35183);

return statearr_35295;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35296_35380 = state_35280__$1;
(statearr_35296_35380[(1)] = (16));

} else {
var statearr_35297_35381 = state_35280__$1;
(statearr_35297_35381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (15))){
var inst_35167 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35298_35382 = state_35280__$1;
(statearr_35298_35382[(2)] = inst_35167);

(statearr_35298_35382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (21))){
var inst_35193 = (state_35280[(19)]);
var inst_35193__$1 = (state_35280[(2)]);
var inst_35194 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35193__$1);
var state_35280__$1 = (function (){var statearr_35299 = state_35280;
(statearr_35299[(19)] = inst_35193__$1);

return statearr_35299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35280__$1,(22),inst_35194);
} else {
if((state_val_35281 === (31))){
var inst_35278 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35280__$1,inst_35278);
} else {
if((state_val_35281 === (32))){
var inst_35233 = (state_35280[(16)]);
var inst_35238 = inst_35233.cljs$lang$protocol_mask$partition0$;
var inst_35239 = (inst_35238 & (64));
var inst_35240 = inst_35233.cljs$core$ISeq$;
var inst_35241 = (cljs.core.PROTOCOL_SENTINEL === inst_35240);
var inst_35242 = (inst_35239) || (inst_35241);
var state_35280__$1 = state_35280;
if(cljs.core.truth_(inst_35242)){
var statearr_35300_35383 = state_35280__$1;
(statearr_35300_35383[(1)] = (35));

} else {
var statearr_35301_35384 = state_35280__$1;
(statearr_35301_35384[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (40))){
var inst_35255 = (state_35280[(20)]);
var inst_35254 = (state_35280[(2)]);
var inst_35255__$1 = cljs.core.get.call(null,inst_35254,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35256 = cljs.core.get.call(null,inst_35254,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35257 = cljs.core.not_empty.call(null,inst_35255__$1);
var state_35280__$1 = (function (){var statearr_35302 = state_35280;
(statearr_35302[(20)] = inst_35255__$1);

(statearr_35302[(21)] = inst_35256);

return statearr_35302;
})();
if(cljs.core.truth_(inst_35257)){
var statearr_35303_35385 = state_35280__$1;
(statearr_35303_35385[(1)] = (41));

} else {
var statearr_35304_35386 = state_35280__$1;
(statearr_35304_35386[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (33))){
var state_35280__$1 = state_35280;
var statearr_35305_35387 = state_35280__$1;
(statearr_35305_35387[(2)] = false);

(statearr_35305_35387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (13))){
var inst_35153 = (state_35280[(22)]);
var inst_35157 = cljs.core.chunk_first.call(null,inst_35153);
var inst_35158 = cljs.core.chunk_rest.call(null,inst_35153);
var inst_35159 = cljs.core.count.call(null,inst_35157);
var inst_35140 = inst_35158;
var inst_35141 = inst_35157;
var inst_35142 = inst_35159;
var inst_35143 = (0);
var state_35280__$1 = (function (){var statearr_35306 = state_35280;
(statearr_35306[(7)] = inst_35142);

(statearr_35306[(8)] = inst_35140);

(statearr_35306[(9)] = inst_35143);

(statearr_35306[(10)] = inst_35141);

return statearr_35306;
})();
var statearr_35307_35388 = state_35280__$1;
(statearr_35307_35388[(2)] = null);

(statearr_35307_35388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (22))){
var inst_35193 = (state_35280[(19)]);
var inst_35201 = (state_35280[(23)]);
var inst_35196 = (state_35280[(24)]);
var inst_35197 = (state_35280[(25)]);
var inst_35196__$1 = (state_35280[(2)]);
var inst_35197__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35196__$1);
var inst_35198 = (function (){var all_files = inst_35193;
var res_SINGLEQUOTE_ = inst_35196__$1;
var res = inst_35197__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35193,inst_35201,inst_35196,inst_35197,inst_35196__$1,inst_35197__$1,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34875_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34875_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35193,inst_35201,inst_35196,inst_35197,inst_35196__$1,inst_35197__$1,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35199 = cljs.core.filter.call(null,inst_35198,inst_35196__$1);
var inst_35200 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35201__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35200);
var inst_35202 = cljs.core.not_empty.call(null,inst_35201__$1);
var state_35280__$1 = (function (){var statearr_35308 = state_35280;
(statearr_35308[(23)] = inst_35201__$1);

(statearr_35308[(24)] = inst_35196__$1);

(statearr_35308[(26)] = inst_35199);

(statearr_35308[(25)] = inst_35197__$1);

return statearr_35308;
})();
if(cljs.core.truth_(inst_35202)){
var statearr_35309_35389 = state_35280__$1;
(statearr_35309_35389[(1)] = (23));

} else {
var statearr_35310_35390 = state_35280__$1;
(statearr_35310_35390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (36))){
var state_35280__$1 = state_35280;
var statearr_35311_35391 = state_35280__$1;
(statearr_35311_35391[(2)] = false);

(statearr_35311_35391[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (41))){
var inst_35255 = (state_35280[(20)]);
var inst_35259 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35260 = cljs.core.map.call(null,inst_35259,inst_35255);
var inst_35261 = cljs.core.pr_str.call(null,inst_35260);
var inst_35262 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35261)].join('');
var inst_35263 = figwheel.client.utils.log.call(null,inst_35262);
var state_35280__$1 = state_35280;
var statearr_35312_35392 = state_35280__$1;
(statearr_35312_35392[(2)] = inst_35263);

(statearr_35312_35392[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (43))){
var inst_35256 = (state_35280[(21)]);
var inst_35266 = (state_35280[(2)]);
var inst_35267 = cljs.core.not_empty.call(null,inst_35256);
var state_35280__$1 = (function (){var statearr_35313 = state_35280;
(statearr_35313[(27)] = inst_35266);

return statearr_35313;
})();
if(cljs.core.truth_(inst_35267)){
var statearr_35314_35393 = state_35280__$1;
(statearr_35314_35393[(1)] = (44));

} else {
var statearr_35315_35394 = state_35280__$1;
(statearr_35315_35394[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (29))){
var inst_35193 = (state_35280[(19)]);
var inst_35201 = (state_35280[(23)]);
var inst_35196 = (state_35280[(24)]);
var inst_35199 = (state_35280[(26)]);
var inst_35233 = (state_35280[(16)]);
var inst_35197 = (state_35280[(25)]);
var inst_35229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35232 = (function (){var all_files = inst_35193;
var res_SINGLEQUOTE_ = inst_35196;
var res = inst_35197;
var files_not_loaded = inst_35199;
var dependencies_that_loaded = inst_35201;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35233,inst_35197,inst_35229,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35231){
var map__35316 = p__35231;
var map__35316__$1 = ((((!((map__35316 == null)))?((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var namespace = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35233,inst_35197,inst_35229,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35233__$1 = cljs.core.group_by.call(null,inst_35232,inst_35199);
var inst_35235 = (inst_35233__$1 == null);
var inst_35236 = cljs.core.not.call(null,inst_35235);
var state_35280__$1 = (function (){var statearr_35318 = state_35280;
(statearr_35318[(16)] = inst_35233__$1);

(statearr_35318[(28)] = inst_35229);

return statearr_35318;
})();
if(inst_35236){
var statearr_35319_35395 = state_35280__$1;
(statearr_35319_35395[(1)] = (32));

} else {
var statearr_35320_35396 = state_35280__$1;
(statearr_35320_35396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (44))){
var inst_35256 = (state_35280[(21)]);
var inst_35269 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35256);
var inst_35270 = cljs.core.pr_str.call(null,inst_35269);
var inst_35271 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35270)].join('');
var inst_35272 = figwheel.client.utils.log.call(null,inst_35271);
var state_35280__$1 = state_35280;
var statearr_35321_35397 = state_35280__$1;
(statearr_35321_35397[(2)] = inst_35272);

(statearr_35321_35397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (6))){
var inst_35174 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35322_35398 = state_35280__$1;
(statearr_35322_35398[(2)] = inst_35174);

(statearr_35322_35398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (28))){
var inst_35199 = (state_35280[(26)]);
var inst_35226 = (state_35280[(2)]);
var inst_35227 = cljs.core.not_empty.call(null,inst_35199);
var state_35280__$1 = (function (){var statearr_35323 = state_35280;
(statearr_35323[(29)] = inst_35226);

return statearr_35323;
})();
if(cljs.core.truth_(inst_35227)){
var statearr_35324_35399 = state_35280__$1;
(statearr_35324_35399[(1)] = (29));

} else {
var statearr_35325_35400 = state_35280__$1;
(statearr_35325_35400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (25))){
var inst_35197 = (state_35280[(25)]);
var inst_35213 = (state_35280[(2)]);
var inst_35214 = cljs.core.not_empty.call(null,inst_35197);
var state_35280__$1 = (function (){var statearr_35326 = state_35280;
(statearr_35326[(30)] = inst_35213);

return statearr_35326;
})();
if(cljs.core.truth_(inst_35214)){
var statearr_35327_35401 = state_35280__$1;
(statearr_35327_35401[(1)] = (26));

} else {
var statearr_35328_35402 = state_35280__$1;
(statearr_35328_35402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (34))){
var inst_35249 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
if(cljs.core.truth_(inst_35249)){
var statearr_35329_35403 = state_35280__$1;
(statearr_35329_35403[(1)] = (38));

} else {
var statearr_35330_35404 = state_35280__$1;
(statearr_35330_35404[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (17))){
var state_35280__$1 = state_35280;
var statearr_35331_35405 = state_35280__$1;
(statearr_35331_35405[(2)] = recompile_dependents);

(statearr_35331_35405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (3))){
var state_35280__$1 = state_35280;
var statearr_35332_35406 = state_35280__$1;
(statearr_35332_35406[(2)] = null);

(statearr_35332_35406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (12))){
var inst_35170 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35333_35407 = state_35280__$1;
(statearr_35333_35407[(2)] = inst_35170);

(statearr_35333_35407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (2))){
var inst_35132 = (state_35280[(13)]);
var inst_35139 = cljs.core.seq.call(null,inst_35132);
var inst_35140 = inst_35139;
var inst_35141 = null;
var inst_35142 = (0);
var inst_35143 = (0);
var state_35280__$1 = (function (){var statearr_35334 = state_35280;
(statearr_35334[(7)] = inst_35142);

(statearr_35334[(8)] = inst_35140);

(statearr_35334[(9)] = inst_35143);

(statearr_35334[(10)] = inst_35141);

return statearr_35334;
})();
var statearr_35335_35408 = state_35280__$1;
(statearr_35335_35408[(2)] = null);

(statearr_35335_35408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (23))){
var inst_35193 = (state_35280[(19)]);
var inst_35201 = (state_35280[(23)]);
var inst_35196 = (state_35280[(24)]);
var inst_35199 = (state_35280[(26)]);
var inst_35197 = (state_35280[(25)]);
var inst_35204 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35206 = (function (){var all_files = inst_35193;
var res_SINGLEQUOTE_ = inst_35196;
var res = inst_35197;
var files_not_loaded = inst_35199;
var dependencies_that_loaded = inst_35201;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35197,inst_35204,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35205){
var map__35336 = p__35205;
var map__35336__$1 = ((((!((map__35336 == null)))?((((map__35336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35336):map__35336);
var request_url = cljs.core.get.call(null,map__35336__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35197,inst_35204,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35207 = cljs.core.reverse.call(null,inst_35201);
var inst_35208 = cljs.core.map.call(null,inst_35206,inst_35207);
var inst_35209 = cljs.core.pr_str.call(null,inst_35208);
var inst_35210 = figwheel.client.utils.log.call(null,inst_35209);
var state_35280__$1 = (function (){var statearr_35338 = state_35280;
(statearr_35338[(31)] = inst_35204);

return statearr_35338;
})();
var statearr_35339_35409 = state_35280__$1;
(statearr_35339_35409[(2)] = inst_35210);

(statearr_35339_35409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (35))){
var state_35280__$1 = state_35280;
var statearr_35340_35410 = state_35280__$1;
(statearr_35340_35410[(2)] = true);

(statearr_35340_35410[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (19))){
var inst_35183 = (state_35280[(12)]);
var inst_35189 = figwheel.client.file_reloading.expand_files.call(null,inst_35183);
var state_35280__$1 = state_35280;
var statearr_35341_35411 = state_35280__$1;
(statearr_35341_35411[(2)] = inst_35189);

(statearr_35341_35411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (11))){
var state_35280__$1 = state_35280;
var statearr_35342_35412 = state_35280__$1;
(statearr_35342_35412[(2)] = null);

(statearr_35342_35412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (9))){
var inst_35172 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35343_35413 = state_35280__$1;
(statearr_35343_35413[(2)] = inst_35172);

(statearr_35343_35413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (5))){
var inst_35142 = (state_35280[(7)]);
var inst_35143 = (state_35280[(9)]);
var inst_35145 = (inst_35143 < inst_35142);
var inst_35146 = inst_35145;
var state_35280__$1 = state_35280;
if(cljs.core.truth_(inst_35146)){
var statearr_35344_35414 = state_35280__$1;
(statearr_35344_35414[(1)] = (7));

} else {
var statearr_35345_35415 = state_35280__$1;
(statearr_35345_35415[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (14))){
var inst_35153 = (state_35280[(22)]);
var inst_35162 = cljs.core.first.call(null,inst_35153);
var inst_35163 = figwheel.client.file_reloading.eval_body.call(null,inst_35162,opts);
var inst_35164 = cljs.core.next.call(null,inst_35153);
var inst_35140 = inst_35164;
var inst_35141 = null;
var inst_35142 = (0);
var inst_35143 = (0);
var state_35280__$1 = (function (){var statearr_35346 = state_35280;
(statearr_35346[(7)] = inst_35142);

(statearr_35346[(32)] = inst_35163);

(statearr_35346[(8)] = inst_35140);

(statearr_35346[(9)] = inst_35143);

(statearr_35346[(10)] = inst_35141);

return statearr_35346;
})();
var statearr_35347_35416 = state_35280__$1;
(statearr_35347_35416[(2)] = null);

(statearr_35347_35416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (45))){
var state_35280__$1 = state_35280;
var statearr_35348_35417 = state_35280__$1;
(statearr_35348_35417[(2)] = null);

(statearr_35348_35417[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (26))){
var inst_35193 = (state_35280[(19)]);
var inst_35201 = (state_35280[(23)]);
var inst_35196 = (state_35280[(24)]);
var inst_35199 = (state_35280[(26)]);
var inst_35197 = (state_35280[(25)]);
var inst_35216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35218 = (function (){var all_files = inst_35193;
var res_SINGLEQUOTE_ = inst_35196;
var res = inst_35197;
var files_not_loaded = inst_35199;
var dependencies_that_loaded = inst_35201;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35197,inst_35216,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35217){
var map__35349 = p__35217;
var map__35349__$1 = ((((!((map__35349 == null)))?((((map__35349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35349):map__35349);
var namespace = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35197,inst_35216,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35219 = cljs.core.map.call(null,inst_35218,inst_35197);
var inst_35220 = cljs.core.pr_str.call(null,inst_35219);
var inst_35221 = figwheel.client.utils.log.call(null,inst_35220);
var inst_35222 = (function (){var all_files = inst_35193;
var res_SINGLEQUOTE_ = inst_35196;
var res = inst_35197;
var files_not_loaded = inst_35199;
var dependencies_that_loaded = inst_35201;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35197,inst_35216,inst_35218,inst_35219,inst_35220,inst_35221,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35193,inst_35201,inst_35196,inst_35199,inst_35197,inst_35216,inst_35218,inst_35219,inst_35220,inst_35221,state_val_35281,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35223 = setTimeout(inst_35222,(10));
var state_35280__$1 = (function (){var statearr_35351 = state_35280;
(statearr_35351[(33)] = inst_35221);

(statearr_35351[(34)] = inst_35216);

return statearr_35351;
})();
var statearr_35352_35418 = state_35280__$1;
(statearr_35352_35418[(2)] = inst_35223);

(statearr_35352_35418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (16))){
var state_35280__$1 = state_35280;
var statearr_35353_35419 = state_35280__$1;
(statearr_35353_35419[(2)] = reload_dependents);

(statearr_35353_35419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (38))){
var inst_35233 = (state_35280[(16)]);
var inst_35251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35233);
var state_35280__$1 = state_35280;
var statearr_35354_35420 = state_35280__$1;
(statearr_35354_35420[(2)] = inst_35251);

(statearr_35354_35420[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (30))){
var state_35280__$1 = state_35280;
var statearr_35355_35421 = state_35280__$1;
(statearr_35355_35421[(2)] = null);

(statearr_35355_35421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (10))){
var inst_35153 = (state_35280[(22)]);
var inst_35155 = cljs.core.chunked_seq_QMARK_.call(null,inst_35153);
var state_35280__$1 = state_35280;
if(inst_35155){
var statearr_35356_35422 = state_35280__$1;
(statearr_35356_35422[(1)] = (13));

} else {
var statearr_35357_35423 = state_35280__$1;
(statearr_35357_35423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (18))){
var inst_35187 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
if(cljs.core.truth_(inst_35187)){
var statearr_35358_35424 = state_35280__$1;
(statearr_35358_35424[(1)] = (19));

} else {
var statearr_35359_35425 = state_35280__$1;
(statearr_35359_35425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (42))){
var state_35280__$1 = state_35280;
var statearr_35360_35426 = state_35280__$1;
(statearr_35360_35426[(2)] = null);

(statearr_35360_35426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (37))){
var inst_35246 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35361_35427 = state_35280__$1;
(statearr_35361_35427[(2)] = inst_35246);

(statearr_35361_35427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (8))){
var inst_35153 = (state_35280[(22)]);
var inst_35140 = (state_35280[(8)]);
var inst_35153__$1 = cljs.core.seq.call(null,inst_35140);
var state_35280__$1 = (function (){var statearr_35362 = state_35280;
(statearr_35362[(22)] = inst_35153__$1);

return statearr_35362;
})();
if(inst_35153__$1){
var statearr_35363_35428 = state_35280__$1;
(statearr_35363_35428[(1)] = (10));

} else {
var statearr_35364_35429 = state_35280__$1;
(statearr_35364_35429[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29868__auto__,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto____0 = (function (){
var statearr_35368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35368[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto__);

(statearr_35368[(1)] = (1));

return statearr_35368;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto____1 = (function (state_35280){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_35280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e35369){if((e35369 instanceof Object)){
var ex__29872__auto__ = e35369;
var statearr_35370_35430 = state_35280;
(statearr_35370_35430[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35431 = state_35280;
state_35280 = G__35431;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto__ = function(state_35280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto____1.call(this,state_35280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29982__auto__ = (function (){var statearr_35371 = f__29981__auto__.call(null);
(statearr_35371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_35371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__,map__35125,map__35125__$1,opts,before_jsload,on_jsload,reload_dependents,map__35126,map__35126__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29980__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35434,link){
var map__35437 = p__35434;
var map__35437__$1 = ((((!((map__35437 == null)))?((((map__35437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35437):map__35437);
var file = cljs.core.get.call(null,map__35437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35437,map__35437__$1,file){
return (function (p1__35432_SHARP_,p2__35433_SHARP_){
if(cljs.core._EQ_.call(null,p1__35432_SHARP_,p2__35433_SHARP_)){
return p1__35432_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35437,map__35437__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35443){
var map__35444 = p__35443;
var map__35444__$1 = ((((!((map__35444 == null)))?((((map__35444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35444):map__35444);
var match_length = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35439_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35439_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35446_SHARP_,p2__35447_SHARP_){
return cljs.core.assoc.call(null,p1__35446_SHARP_,cljs.core.get.call(null,p2__35447_SHARP_,key),p2__35447_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35448 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35448);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35448);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35449,p__35450){
var map__35455 = p__35449;
var map__35455__$1 = ((((!((map__35455 == null)))?((((map__35455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35455):map__35455);
var on_cssload = cljs.core.get.call(null,map__35455__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35456 = p__35450;
var map__35456__$1 = ((((!((map__35456 == null)))?((((map__35456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35456):map__35456);
var files_msg = map__35456__$1;
var files = cljs.core.get.call(null,map__35456__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1488028161766