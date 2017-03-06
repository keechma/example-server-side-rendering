// Compiled by ClojureScript 1.9.473 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25229__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_36854 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_36854){
return (function (){
var _STAR_always_update_STAR_36855 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36855;
}});})(_STAR_always_update_STAR_36854))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36854;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args36856 = [];
var len__26342__auto___36859 = arguments.length;
var i__26343__auto___36860 = (0);
while(true){
if((i__26343__auto___36860 < len__26342__auto___36859)){
args36856.push((arguments[i__26343__auto___36860]));

var G__36861 = (i__26343__auto___36860 + (1));
i__26343__auto___36860 = G__36861;
continue;
} else {
}
break;
}

var G__36858 = args36856.length;
switch (G__36858) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36856.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__36867_36871 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__36868_36872 = null;
var count__36869_36873 = (0);
var i__36870_36874 = (0);
while(true){
if((i__36870_36874 < count__36869_36873)){
var v_36875 = cljs.core._nth.call(null,chunk__36868_36872,i__36870_36874);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36875);

var G__36876 = seq__36867_36871;
var G__36877 = chunk__36868_36872;
var G__36878 = count__36869_36873;
var G__36879 = (i__36870_36874 + (1));
seq__36867_36871 = G__36876;
chunk__36868_36872 = G__36877;
count__36869_36873 = G__36878;
i__36870_36874 = G__36879;
continue;
} else {
var temp__4657__auto___36880 = cljs.core.seq.call(null,seq__36867_36871);
if(temp__4657__auto___36880){
var seq__36867_36881__$1 = temp__4657__auto___36880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36867_36881__$1)){
var c__26048__auto___36882 = cljs.core.chunk_first.call(null,seq__36867_36881__$1);
var G__36883 = cljs.core.chunk_rest.call(null,seq__36867_36881__$1);
var G__36884 = c__26048__auto___36882;
var G__36885 = cljs.core.count.call(null,c__26048__auto___36882);
var G__36886 = (0);
seq__36867_36871 = G__36883;
chunk__36868_36872 = G__36884;
count__36869_36873 = G__36885;
i__36870_36874 = G__36886;
continue;
} else {
var v_36887 = cljs.core.first.call(null,seq__36867_36881__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36887);

var G__36888 = cljs.core.next.call(null,seq__36867_36881__$1);
var G__36889 = null;
var G__36890 = (0);
var G__36891 = (0);
seq__36867_36871 = G__36888;
chunk__36868_36872 = G__36889;
count__36869_36873 = G__36890;
i__36870_36874 = G__36891;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1488028162736