// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35900 = [];
var len__26342__auto___35903 = arguments.length;
var i__26343__auto___35904 = (0);
while(true){
if((i__26343__auto___35904 < len__26342__auto___35903)){
args35900.push((arguments[i__26343__auto___35904]));

var G__35905 = (i__26343__auto___35904 + (1));
i__26343__auto___35904 = G__35905;
continue;
} else {
}
break;
}

var G__35902 = args35900.length;
switch (G__35902) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35900.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26349__auto__ = [];
var len__26342__auto___35908 = arguments.length;
var i__26343__auto___35909 = (0);
while(true){
if((i__26343__auto___35909 < len__26342__auto___35908)){
args__26349__auto__.push((arguments[i__26343__auto___35909]));

var G__35910 = (i__26343__auto___35909 + (1));
i__26343__auto___35909 = G__35910;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35907){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35907));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26349__auto__ = [];
var len__26342__auto___35912 = arguments.length;
var i__26343__auto___35913 = (0);
while(true){
if((i__26343__auto___35913 < len__26342__auto___35912)){
args__26349__auto__.push((arguments[i__26343__auto___35913]));

var G__35914 = (i__26343__auto___35913 + (1));
i__26343__auto___35913 = G__35914;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35911){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35911));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35915){
var map__35918 = p__35915;
var map__35918__$1 = ((((!((map__35918 == null)))?((((map__35918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35918):map__35918);
var message = cljs.core.get.call(null,map__35918__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35918__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25229__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25217__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25217__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25217__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29980__auto___36080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___36080,ch){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___36080,ch){
return (function (state_36049){
var state_val_36050 = (state_36049[(1)]);
if((state_val_36050 === (7))){
var inst_36045 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36051_36081 = state_36049__$1;
(statearr_36051_36081[(2)] = inst_36045);

(statearr_36051_36081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (1))){
var state_36049__$1 = state_36049;
var statearr_36052_36082 = state_36049__$1;
(statearr_36052_36082[(2)] = null);

(statearr_36052_36082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (4))){
var inst_36002 = (state_36049[(7)]);
var inst_36002__$1 = (state_36049[(2)]);
var state_36049__$1 = (function (){var statearr_36053 = state_36049;
(statearr_36053[(7)] = inst_36002__$1);

return statearr_36053;
})();
if(cljs.core.truth_(inst_36002__$1)){
var statearr_36054_36083 = state_36049__$1;
(statearr_36054_36083[(1)] = (5));

} else {
var statearr_36055_36084 = state_36049__$1;
(statearr_36055_36084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (15))){
var inst_36009 = (state_36049[(8)]);
var inst_36024 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36009);
var inst_36025 = cljs.core.first.call(null,inst_36024);
var inst_36026 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36025);
var inst_36027 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36026)].join('');
var inst_36028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36027);
var state_36049__$1 = state_36049;
var statearr_36056_36085 = state_36049__$1;
(statearr_36056_36085[(2)] = inst_36028);

(statearr_36056_36085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (13))){
var inst_36033 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36057_36086 = state_36049__$1;
(statearr_36057_36086[(2)] = inst_36033);

(statearr_36057_36086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (6))){
var state_36049__$1 = state_36049;
var statearr_36058_36087 = state_36049__$1;
(statearr_36058_36087[(2)] = null);

(statearr_36058_36087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (17))){
var inst_36031 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36059_36088 = state_36049__$1;
(statearr_36059_36088[(2)] = inst_36031);

(statearr_36059_36088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (3))){
var inst_36047 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36049__$1,inst_36047);
} else {
if((state_val_36050 === (12))){
var inst_36008 = (state_36049[(9)]);
var inst_36022 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36008,opts);
var state_36049__$1 = state_36049;
if(cljs.core.truth_(inst_36022)){
var statearr_36060_36089 = state_36049__$1;
(statearr_36060_36089[(1)] = (15));

} else {
var statearr_36061_36090 = state_36049__$1;
(statearr_36061_36090[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (2))){
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36049__$1,(4),ch);
} else {
if((state_val_36050 === (11))){
var inst_36009 = (state_36049[(8)]);
var inst_36014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36015 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36009);
var inst_36016 = cljs.core.async.timeout.call(null,(1000));
var inst_36017 = [inst_36015,inst_36016];
var inst_36018 = (new cljs.core.PersistentVector(null,2,(5),inst_36014,inst_36017,null));
var state_36049__$1 = state_36049;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36049__$1,(14),inst_36018);
} else {
if((state_val_36050 === (9))){
var inst_36009 = (state_36049[(8)]);
var inst_36035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36036 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36009);
var inst_36037 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36036);
var inst_36038 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36037)].join('');
var inst_36039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36038);
var state_36049__$1 = (function (){var statearr_36062 = state_36049;
(statearr_36062[(10)] = inst_36035);

return statearr_36062;
})();
var statearr_36063_36091 = state_36049__$1;
(statearr_36063_36091[(2)] = inst_36039);

(statearr_36063_36091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (5))){
var inst_36002 = (state_36049[(7)]);
var inst_36004 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36005 = (new cljs.core.PersistentArrayMap(null,2,inst_36004,null));
var inst_36006 = (new cljs.core.PersistentHashSet(null,inst_36005,null));
var inst_36007 = figwheel.client.focus_msgs.call(null,inst_36006,inst_36002);
var inst_36008 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36007);
var inst_36009 = cljs.core.first.call(null,inst_36007);
var inst_36010 = figwheel.client.autoload_QMARK_.call(null);
var state_36049__$1 = (function (){var statearr_36064 = state_36049;
(statearr_36064[(9)] = inst_36008);

(statearr_36064[(8)] = inst_36009);

return statearr_36064;
})();
if(cljs.core.truth_(inst_36010)){
var statearr_36065_36092 = state_36049__$1;
(statearr_36065_36092[(1)] = (8));

} else {
var statearr_36066_36093 = state_36049__$1;
(statearr_36066_36093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (14))){
var inst_36020 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36067_36094 = state_36049__$1;
(statearr_36067_36094[(2)] = inst_36020);

(statearr_36067_36094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (16))){
var state_36049__$1 = state_36049;
var statearr_36068_36095 = state_36049__$1;
(statearr_36068_36095[(2)] = null);

(statearr_36068_36095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (10))){
var inst_36041 = (state_36049[(2)]);
var state_36049__$1 = (function (){var statearr_36069 = state_36049;
(statearr_36069[(11)] = inst_36041);

return statearr_36069;
})();
var statearr_36070_36096 = state_36049__$1;
(statearr_36070_36096[(2)] = null);

(statearr_36070_36096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (8))){
var inst_36008 = (state_36049[(9)]);
var inst_36012 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36008,opts);
var state_36049__$1 = state_36049;
if(cljs.core.truth_(inst_36012)){
var statearr_36071_36097 = state_36049__$1;
(statearr_36071_36097[(1)] = (11));

} else {
var statearr_36072_36098 = state_36049__$1;
(statearr_36072_36098[(1)] = (12));

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
});})(c__29980__auto___36080,ch))
;
return ((function (switch__29868__auto__,c__29980__auto___36080,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29869__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29869__auto____0 = (function (){
var statearr_36076 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36076[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29869__auto__);

(statearr_36076[(1)] = (1));

return statearr_36076;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29869__auto____1 = (function (state_36049){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_36049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e36077){if((e36077 instanceof Object)){
var ex__29872__auto__ = e36077;
var statearr_36078_36099 = state_36049;
(statearr_36078_36099[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36100 = state_36049;
state_36049 = G__36100;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29869__auto__ = function(state_36049){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29869__auto____1.call(this,state_36049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29869__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29869__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___36080,ch))
})();
var state__29982__auto__ = (function (){var statearr_36079 = f__29981__auto__.call(null);
(statearr_36079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___36080);

return statearr_36079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___36080,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36101_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36101_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36104 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36104){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36103){if((e36103 instanceof Error)){
var e = e36103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36104], null));
} else {
var e = e36103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36104))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36105){
var map__36114 = p__36105;
var map__36114__$1 = ((((!((map__36114 == null)))?((((map__36114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36114):map__36114);
var opts = map__36114__$1;
var build_id = cljs.core.get.call(null,map__36114__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36114,map__36114__$1,opts,build_id){
return (function (p__36116){
var vec__36117 = p__36116;
var seq__36118 = cljs.core.seq.call(null,vec__36117);
var first__36119 = cljs.core.first.call(null,seq__36118);
var seq__36118__$1 = cljs.core.next.call(null,seq__36118);
var map__36120 = first__36119;
var map__36120__$1 = ((((!((map__36120 == null)))?((((map__36120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36120):map__36120);
var msg = map__36120__$1;
var msg_name = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36118__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36117,seq__36118,first__36119,seq__36118__$1,map__36120,map__36120__$1,msg,msg_name,_,map__36114,map__36114__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36117,seq__36118,first__36119,seq__36118__$1,map__36120,map__36120__$1,msg,msg_name,_,map__36114,map__36114__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36114,map__36114__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36128){
var vec__36129 = p__36128;
var seq__36130 = cljs.core.seq.call(null,vec__36129);
var first__36131 = cljs.core.first.call(null,seq__36130);
var seq__36130__$1 = cljs.core.next.call(null,seq__36130);
var map__36132 = first__36131;
var map__36132__$1 = ((((!((map__36132 == null)))?((((map__36132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36132):map__36132);
var msg = map__36132__$1;
var msg_name = cljs.core.get.call(null,map__36132__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36130__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36134){
var map__36146 = p__36134;
var map__36146__$1 = ((((!((map__36146 == null)))?((((map__36146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36146):map__36146);
var on_compile_warning = cljs.core.get.call(null,map__36146__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36146__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36146,map__36146__$1,on_compile_warning,on_compile_fail){
return (function (p__36148){
var vec__36149 = p__36148;
var seq__36150 = cljs.core.seq.call(null,vec__36149);
var first__36151 = cljs.core.first.call(null,seq__36150);
var seq__36150__$1 = cljs.core.next.call(null,seq__36150);
var map__36152 = first__36151;
var map__36152__$1 = ((((!((map__36152 == null)))?((((map__36152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36152):map__36152);
var msg = map__36152__$1;
var msg_name = cljs.core.get.call(null,map__36152__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36150__$1;
var pred__36154 = cljs.core._EQ_;
var expr__36155 = msg_name;
if(cljs.core.truth_(pred__36154.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36155))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36154.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36155))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36146,map__36146__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__,msg_hist,msg_names,msg){
return (function (state_36383){
var state_val_36384 = (state_36383[(1)]);
if((state_val_36384 === (7))){
var inst_36303 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36303)){
var statearr_36385_36435 = state_36383__$1;
(statearr_36385_36435[(1)] = (8));

} else {
var statearr_36386_36436 = state_36383__$1;
(statearr_36386_36436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (20))){
var inst_36377 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36387_36437 = state_36383__$1;
(statearr_36387_36437[(2)] = inst_36377);

(statearr_36387_36437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (27))){
var inst_36373 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36388_36438 = state_36383__$1;
(statearr_36388_36438[(2)] = inst_36373);

(statearr_36388_36438[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (1))){
var inst_36296 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36296)){
var statearr_36389_36439 = state_36383__$1;
(statearr_36389_36439[(1)] = (2));

} else {
var statearr_36390_36440 = state_36383__$1;
(statearr_36390_36440[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (24))){
var inst_36375 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36391_36441 = state_36383__$1;
(statearr_36391_36441[(2)] = inst_36375);

(statearr_36391_36441[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (4))){
var inst_36381 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36383__$1,inst_36381);
} else {
if((state_val_36384 === (15))){
var inst_36379 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36392_36442 = state_36383__$1;
(statearr_36392_36442[(2)] = inst_36379);

(statearr_36392_36442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (21))){
var inst_36332 = (state_36383[(2)]);
var inst_36333 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36334 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36333);
var state_36383__$1 = (function (){var statearr_36393 = state_36383;
(statearr_36393[(7)] = inst_36332);

return statearr_36393;
})();
var statearr_36394_36443 = state_36383__$1;
(statearr_36394_36443[(2)] = inst_36334);

(statearr_36394_36443[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (31))){
var inst_36362 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36362)){
var statearr_36395_36444 = state_36383__$1;
(statearr_36395_36444[(1)] = (34));

} else {
var statearr_36396_36445 = state_36383__$1;
(statearr_36396_36445[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (32))){
var inst_36371 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36397_36446 = state_36383__$1;
(statearr_36397_36446[(2)] = inst_36371);

(statearr_36397_36446[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (33))){
var inst_36358 = (state_36383[(2)]);
var inst_36359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36360 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36359);
var state_36383__$1 = (function (){var statearr_36398 = state_36383;
(statearr_36398[(8)] = inst_36358);

return statearr_36398;
})();
var statearr_36399_36447 = state_36383__$1;
(statearr_36399_36447[(2)] = inst_36360);

(statearr_36399_36447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (13))){
var inst_36317 = figwheel.client.heads_up.clear.call(null);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(16),inst_36317);
} else {
if((state_val_36384 === (22))){
var inst_36338 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36339 = figwheel.client.heads_up.append_warning_message.call(null,inst_36338);
var state_36383__$1 = state_36383;
var statearr_36400_36448 = state_36383__$1;
(statearr_36400_36448[(2)] = inst_36339);

(statearr_36400_36448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (36))){
var inst_36369 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36401_36449 = state_36383__$1;
(statearr_36401_36449[(2)] = inst_36369);

(statearr_36401_36449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (29))){
var inst_36349 = (state_36383[(2)]);
var inst_36350 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36351 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36350);
var state_36383__$1 = (function (){var statearr_36402 = state_36383;
(statearr_36402[(9)] = inst_36349);

return statearr_36402;
})();
var statearr_36403_36450 = state_36383__$1;
(statearr_36403_36450[(2)] = inst_36351);

(statearr_36403_36450[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (6))){
var inst_36298 = (state_36383[(10)]);
var state_36383__$1 = state_36383;
var statearr_36404_36451 = state_36383__$1;
(statearr_36404_36451[(2)] = inst_36298);

(statearr_36404_36451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (28))){
var inst_36345 = (state_36383[(2)]);
var inst_36346 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36347 = figwheel.client.heads_up.display_warning.call(null,inst_36346);
var state_36383__$1 = (function (){var statearr_36405 = state_36383;
(statearr_36405[(11)] = inst_36345);

return statearr_36405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(29),inst_36347);
} else {
if((state_val_36384 === (25))){
var inst_36343 = figwheel.client.heads_up.clear.call(null);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(28),inst_36343);
} else {
if((state_val_36384 === (34))){
var inst_36364 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(37),inst_36364);
} else {
if((state_val_36384 === (17))){
var inst_36323 = (state_36383[(2)]);
var inst_36324 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36325 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36324);
var state_36383__$1 = (function (){var statearr_36406 = state_36383;
(statearr_36406[(12)] = inst_36323);

return statearr_36406;
})();
var statearr_36407_36452 = state_36383__$1;
(statearr_36407_36452[(2)] = inst_36325);

(statearr_36407_36452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (3))){
var inst_36315 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36315)){
var statearr_36408_36453 = state_36383__$1;
(statearr_36408_36453[(1)] = (13));

} else {
var statearr_36409_36454 = state_36383__$1;
(statearr_36409_36454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (12))){
var inst_36311 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36410_36455 = state_36383__$1;
(statearr_36410_36455[(2)] = inst_36311);

(statearr_36410_36455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (2))){
var inst_36298 = (state_36383[(10)]);
var inst_36298__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36383__$1 = (function (){var statearr_36411 = state_36383;
(statearr_36411[(10)] = inst_36298__$1);

return statearr_36411;
})();
if(cljs.core.truth_(inst_36298__$1)){
var statearr_36412_36456 = state_36383__$1;
(statearr_36412_36456[(1)] = (5));

} else {
var statearr_36413_36457 = state_36383__$1;
(statearr_36413_36457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (23))){
var inst_36341 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36341)){
var statearr_36414_36458 = state_36383__$1;
(statearr_36414_36458[(1)] = (25));

} else {
var statearr_36415_36459 = state_36383__$1;
(statearr_36415_36459[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (35))){
var state_36383__$1 = state_36383;
var statearr_36416_36460 = state_36383__$1;
(statearr_36416_36460[(2)] = null);

(statearr_36416_36460[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (19))){
var inst_36336 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36336)){
var statearr_36417_36461 = state_36383__$1;
(statearr_36417_36461[(1)] = (22));

} else {
var statearr_36418_36462 = state_36383__$1;
(statearr_36418_36462[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (11))){
var inst_36307 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36419_36463 = state_36383__$1;
(statearr_36419_36463[(2)] = inst_36307);

(statearr_36419_36463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (9))){
var inst_36309 = figwheel.client.heads_up.clear.call(null);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(12),inst_36309);
} else {
if((state_val_36384 === (5))){
var inst_36300 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36383__$1 = state_36383;
var statearr_36420_36464 = state_36383__$1;
(statearr_36420_36464[(2)] = inst_36300);

(statearr_36420_36464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (14))){
var inst_36327 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36327)){
var statearr_36421_36465 = state_36383__$1;
(statearr_36421_36465[(1)] = (18));

} else {
var statearr_36422_36466 = state_36383__$1;
(statearr_36422_36466[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (26))){
var inst_36353 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36353)){
var statearr_36423_36467 = state_36383__$1;
(statearr_36423_36467[(1)] = (30));

} else {
var statearr_36424_36468 = state_36383__$1;
(statearr_36424_36468[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (16))){
var inst_36319 = (state_36383[(2)]);
var inst_36320 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36321 = figwheel.client.heads_up.display_exception.call(null,inst_36320);
var state_36383__$1 = (function (){var statearr_36425 = state_36383;
(statearr_36425[(13)] = inst_36319);

return statearr_36425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(17),inst_36321);
} else {
if((state_val_36384 === (30))){
var inst_36355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36356 = figwheel.client.heads_up.display_warning.call(null,inst_36355);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(33),inst_36356);
} else {
if((state_val_36384 === (10))){
var inst_36313 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36426_36469 = state_36383__$1;
(statearr_36426_36469[(2)] = inst_36313);

(statearr_36426_36469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (18))){
var inst_36329 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36330 = figwheel.client.heads_up.display_exception.call(null,inst_36329);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(21),inst_36330);
} else {
if((state_val_36384 === (37))){
var inst_36366 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36427_36470 = state_36383__$1;
(statearr_36427_36470[(2)] = inst_36366);

(statearr_36427_36470[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (8))){
var inst_36305 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(11),inst_36305);
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
});})(c__29980__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29868__auto__,c__29980__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto____0 = (function (){
var statearr_36431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36431[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto__);

(statearr_36431[(1)] = (1));

return statearr_36431;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto____1 = (function (state_36383){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_36383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e36432){if((e36432 instanceof Object)){
var ex__29872__auto__ = e36432;
var statearr_36433_36471 = state_36383;
(statearr_36433_36471[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36472 = state_36383;
state_36383 = G__36472;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto__ = function(state_36383){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto____1.call(this,state_36383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__,msg_hist,msg_names,msg))
})();
var state__29982__auto__ = (function (){var statearr_36434 = f__29981__auto__.call(null);
(statearr_36434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_36434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__,msg_hist,msg_names,msg))
);

return c__29980__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29980__auto___36535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___36535,ch){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___36535,ch){
return (function (state_36518){
var state_val_36519 = (state_36518[(1)]);
if((state_val_36519 === (1))){
var state_36518__$1 = state_36518;
var statearr_36520_36536 = state_36518__$1;
(statearr_36520_36536[(2)] = null);

(statearr_36520_36536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (2))){
var state_36518__$1 = state_36518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36518__$1,(4),ch);
} else {
if((state_val_36519 === (3))){
var inst_36516 = (state_36518[(2)]);
var state_36518__$1 = state_36518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36518__$1,inst_36516);
} else {
if((state_val_36519 === (4))){
var inst_36506 = (state_36518[(7)]);
var inst_36506__$1 = (state_36518[(2)]);
var state_36518__$1 = (function (){var statearr_36521 = state_36518;
(statearr_36521[(7)] = inst_36506__$1);

return statearr_36521;
})();
if(cljs.core.truth_(inst_36506__$1)){
var statearr_36522_36537 = state_36518__$1;
(statearr_36522_36537[(1)] = (5));

} else {
var statearr_36523_36538 = state_36518__$1;
(statearr_36523_36538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (5))){
var inst_36506 = (state_36518[(7)]);
var inst_36508 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36506);
var state_36518__$1 = state_36518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36518__$1,(8),inst_36508);
} else {
if((state_val_36519 === (6))){
var state_36518__$1 = state_36518;
var statearr_36524_36539 = state_36518__$1;
(statearr_36524_36539[(2)] = null);

(statearr_36524_36539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (7))){
var inst_36514 = (state_36518[(2)]);
var state_36518__$1 = state_36518;
var statearr_36525_36540 = state_36518__$1;
(statearr_36525_36540[(2)] = inst_36514);

(statearr_36525_36540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (8))){
var inst_36510 = (state_36518[(2)]);
var state_36518__$1 = (function (){var statearr_36526 = state_36518;
(statearr_36526[(8)] = inst_36510);

return statearr_36526;
})();
var statearr_36527_36541 = state_36518__$1;
(statearr_36527_36541[(2)] = null);

(statearr_36527_36541[(1)] = (2));


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
});})(c__29980__auto___36535,ch))
;
return ((function (switch__29868__auto__,c__29980__auto___36535,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29869__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29869__auto____0 = (function (){
var statearr_36531 = [null,null,null,null,null,null,null,null,null];
(statearr_36531[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29869__auto__);

(statearr_36531[(1)] = (1));

return statearr_36531;
});
var figwheel$client$heads_up_plugin_$_state_machine__29869__auto____1 = (function (state_36518){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_36518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e36532){if((e36532 instanceof Object)){
var ex__29872__auto__ = e36532;
var statearr_36533_36542 = state_36518;
(statearr_36533_36542[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36543 = state_36518;
state_36518 = G__36543;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29869__auto__ = function(state_36518){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29869__auto____1.call(this,state_36518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29869__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29869__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___36535,ch))
})();
var state__29982__auto__ = (function (){var statearr_36534 = f__29981__auto__.call(null);
(statearr_36534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___36535);

return statearr_36534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___36535,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__){
return (function (state_36564){
var state_val_36565 = (state_36564[(1)]);
if((state_val_36565 === (1))){
var inst_36559 = cljs.core.async.timeout.call(null,(3000));
var state_36564__$1 = state_36564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36564__$1,(2),inst_36559);
} else {
if((state_val_36565 === (2))){
var inst_36561 = (state_36564[(2)]);
var inst_36562 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36564__$1 = (function (){var statearr_36566 = state_36564;
(statearr_36566[(7)] = inst_36561);

return statearr_36566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36564__$1,inst_36562);
} else {
return null;
}
}
});})(c__29980__auto__))
;
return ((function (switch__29868__auto__,c__29980__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29869__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29869__auto____0 = (function (){
var statearr_36570 = [null,null,null,null,null,null,null,null];
(statearr_36570[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29869__auto__);

(statearr_36570[(1)] = (1));

return statearr_36570;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29869__auto____1 = (function (state_36564){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_36564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e36571){if((e36571 instanceof Object)){
var ex__29872__auto__ = e36571;
var statearr_36572_36574 = state_36564;
(statearr_36572_36574[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36575 = state_36564;
state_36564 = G__36575;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29869__auto__ = function(state_36564){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29869__auto____1.call(this,state_36564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29869__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29869__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__))
})();
var state__29982__auto__ = (function (){var statearr_36573 = f__29981__auto__.call(null);
(statearr_36573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_36573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__))
);

return c__29980__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36598){
var state_val_36599 = (state_36598[(1)]);
if((state_val_36599 === (1))){
var inst_36592 = cljs.core.async.timeout.call(null,(2000));
var state_36598__$1 = state_36598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36598__$1,(2),inst_36592);
} else {
if((state_val_36599 === (2))){
var inst_36594 = (state_36598[(2)]);
var inst_36595 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36596 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36595);
var state_36598__$1 = (function (){var statearr_36600 = state_36598;
(statearr_36600[(7)] = inst_36594);

return statearr_36600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36598__$1,inst_36596);
} else {
return null;
}
}
});})(c__29980__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29868__auto__,c__29980__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto____0 = (function (){
var statearr_36604 = [null,null,null,null,null,null,null,null];
(statearr_36604[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto__);

(statearr_36604[(1)] = (1));

return statearr_36604;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto____1 = (function (state_36598){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_36598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e36605){if((e36605 instanceof Object)){
var ex__29872__auto__ = e36605;
var statearr_36606_36608 = state_36598;
(statearr_36606_36608[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36609 = state_36598;
state_36598 = G__36609;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto__ = function(state_36598){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto____1.call(this,state_36598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29982__auto__ = (function (){var statearr_36607 = f__29981__auto__.call(null);
(statearr_36607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_36607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__,figwheel_version,temp__4657__auto__))
);

return c__29980__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36610){
var map__36614 = p__36610;
var map__36614__$1 = ((((!((map__36614 == null)))?((((map__36614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36614):map__36614);
var file = cljs.core.get.call(null,map__36614__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36614__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36614__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36616 = "";
var G__36616__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36616),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36616);
var G__36616__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36616__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36616__$1);
if(cljs.core.truth_((function (){var and__25217__auto__ = line;
if(cljs.core.truth_(and__25217__auto__)){
return column;
} else {
return and__25217__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36616__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36616__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36617){
var map__36624 = p__36617;
var map__36624__$1 = ((((!((map__36624 == null)))?((((map__36624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36624):map__36624);
var ed = map__36624__$1;
var formatted_exception = cljs.core.get.call(null,map__36624__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36624__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36624__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36626_36630 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36627_36631 = null;
var count__36628_36632 = (0);
var i__36629_36633 = (0);
while(true){
if((i__36629_36633 < count__36628_36632)){
var msg_36634 = cljs.core._nth.call(null,chunk__36627_36631,i__36629_36633);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36634);

var G__36635 = seq__36626_36630;
var G__36636 = chunk__36627_36631;
var G__36637 = count__36628_36632;
var G__36638 = (i__36629_36633 + (1));
seq__36626_36630 = G__36635;
chunk__36627_36631 = G__36636;
count__36628_36632 = G__36637;
i__36629_36633 = G__36638;
continue;
} else {
var temp__4657__auto___36639 = cljs.core.seq.call(null,seq__36626_36630);
if(temp__4657__auto___36639){
var seq__36626_36640__$1 = temp__4657__auto___36639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36626_36640__$1)){
var c__26048__auto___36641 = cljs.core.chunk_first.call(null,seq__36626_36640__$1);
var G__36642 = cljs.core.chunk_rest.call(null,seq__36626_36640__$1);
var G__36643 = c__26048__auto___36641;
var G__36644 = cljs.core.count.call(null,c__26048__auto___36641);
var G__36645 = (0);
seq__36626_36630 = G__36642;
chunk__36627_36631 = G__36643;
count__36628_36632 = G__36644;
i__36629_36633 = G__36645;
continue;
} else {
var msg_36646 = cljs.core.first.call(null,seq__36626_36640__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36646);

var G__36647 = cljs.core.next.call(null,seq__36626_36640__$1);
var G__36648 = null;
var G__36649 = (0);
var G__36650 = (0);
seq__36626_36630 = G__36647;
chunk__36627_36631 = G__36648;
count__36628_36632 = G__36649;
i__36629_36633 = G__36650;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36651){
var map__36654 = p__36651;
var map__36654__$1 = ((((!((map__36654 == null)))?((((map__36654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36654):map__36654);
var w = map__36654__$1;
var message = cljs.core.get.call(null,map__36654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/compiled/dev/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/compiled/dev/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25217__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25217__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25217__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36666 = cljs.core.seq.call(null,plugins);
var chunk__36667 = null;
var count__36668 = (0);
var i__36669 = (0);
while(true){
if((i__36669 < count__36668)){
var vec__36670 = cljs.core._nth.call(null,chunk__36667,i__36669);
var k = cljs.core.nth.call(null,vec__36670,(0),null);
var plugin = cljs.core.nth.call(null,vec__36670,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36676 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36666,chunk__36667,count__36668,i__36669,pl_36676,vec__36670,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36676.call(null,msg_hist);
});})(seq__36666,chunk__36667,count__36668,i__36669,pl_36676,vec__36670,k,plugin))
);
} else {
}

var G__36677 = seq__36666;
var G__36678 = chunk__36667;
var G__36679 = count__36668;
var G__36680 = (i__36669 + (1));
seq__36666 = G__36677;
chunk__36667 = G__36678;
count__36668 = G__36679;
i__36669 = G__36680;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36666);
if(temp__4657__auto__){
var seq__36666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36666__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__36666__$1);
var G__36681 = cljs.core.chunk_rest.call(null,seq__36666__$1);
var G__36682 = c__26048__auto__;
var G__36683 = cljs.core.count.call(null,c__26048__auto__);
var G__36684 = (0);
seq__36666 = G__36681;
chunk__36667 = G__36682;
count__36668 = G__36683;
i__36669 = G__36684;
continue;
} else {
var vec__36673 = cljs.core.first.call(null,seq__36666__$1);
var k = cljs.core.nth.call(null,vec__36673,(0),null);
var plugin = cljs.core.nth.call(null,vec__36673,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36685 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36666,chunk__36667,count__36668,i__36669,pl_36685,vec__36673,k,plugin,seq__36666__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36685.call(null,msg_hist);
});})(seq__36666,chunk__36667,count__36668,i__36669,pl_36685,vec__36673,k,plugin,seq__36666__$1,temp__4657__auto__))
);
} else {
}

var G__36686 = cljs.core.next.call(null,seq__36666__$1);
var G__36687 = null;
var G__36688 = (0);
var G__36689 = (0);
seq__36666 = G__36686;
chunk__36667 = G__36687;
count__36668 = G__36688;
i__36669 = G__36689;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36690 = [];
var len__26342__auto___36697 = arguments.length;
var i__26343__auto___36698 = (0);
while(true){
if((i__26343__auto___36698 < len__26342__auto___36697)){
args36690.push((arguments[i__26343__auto___36698]));

var G__36699 = (i__26343__auto___36698 + (1));
i__26343__auto___36698 = G__36699;
continue;
} else {
}
break;
}

var G__36692 = args36690.length;
switch (G__36692) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36690.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36693_36701 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36694_36702 = null;
var count__36695_36703 = (0);
var i__36696_36704 = (0);
while(true){
if((i__36696_36704 < count__36695_36703)){
var msg_36705 = cljs.core._nth.call(null,chunk__36694_36702,i__36696_36704);
figwheel.client.socket.handle_incoming_message.call(null,msg_36705);

var G__36706 = seq__36693_36701;
var G__36707 = chunk__36694_36702;
var G__36708 = count__36695_36703;
var G__36709 = (i__36696_36704 + (1));
seq__36693_36701 = G__36706;
chunk__36694_36702 = G__36707;
count__36695_36703 = G__36708;
i__36696_36704 = G__36709;
continue;
} else {
var temp__4657__auto___36710 = cljs.core.seq.call(null,seq__36693_36701);
if(temp__4657__auto___36710){
var seq__36693_36711__$1 = temp__4657__auto___36710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36693_36711__$1)){
var c__26048__auto___36712 = cljs.core.chunk_first.call(null,seq__36693_36711__$1);
var G__36713 = cljs.core.chunk_rest.call(null,seq__36693_36711__$1);
var G__36714 = c__26048__auto___36712;
var G__36715 = cljs.core.count.call(null,c__26048__auto___36712);
var G__36716 = (0);
seq__36693_36701 = G__36713;
chunk__36694_36702 = G__36714;
count__36695_36703 = G__36715;
i__36696_36704 = G__36716;
continue;
} else {
var msg_36717 = cljs.core.first.call(null,seq__36693_36711__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36717);

var G__36718 = cljs.core.next.call(null,seq__36693_36711__$1);
var G__36719 = null;
var G__36720 = (0);
var G__36721 = (0);
seq__36693_36701 = G__36718;
chunk__36694_36702 = G__36719;
count__36695_36703 = G__36720;
i__36696_36704 = G__36721;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26349__auto__ = [];
var len__26342__auto___36726 = arguments.length;
var i__26343__auto___36727 = (0);
while(true){
if((i__26343__auto___36727 < len__26342__auto___36726)){
args__26349__auto__.push((arguments[i__26343__auto___36727]));

var G__36728 = (i__26343__auto___36727 + (1));
i__26343__auto___36727 = G__36728;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((0) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26350__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36723){
var map__36724 = p__36723;
var map__36724__$1 = ((((!((map__36724 == null)))?((((map__36724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36724):map__36724);
var opts = map__36724__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36722){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36722));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36730){if((e36730 instanceof Error)){
var e = e36730;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36730;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36734){
var map__36735 = p__36734;
var map__36735__$1 = ((((!((map__36735 == null)))?((((map__36735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36735):map__36735);
var msg_name = cljs.core.get.call(null,map__36735__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488028162395