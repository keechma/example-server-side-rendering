// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.controller_manager');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
goog.require('keechma.controller');
keechma.controller_manager.send_command_to = (function keechma$controller_manager$send_command_to(reporter,controller,command_name,args){
reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name,args,new cljs.core.Keyword(null,"info","info",-317069002));

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args], null));

return controller;
});
keechma.controller_manager.route_command_to_controller = (function keechma$controller_manager$route_command_to_controller(reporter,controllers,command_name,command_args){
var vec__27821 = command_name;
var controller_name = cljs.core.nth.call(null,vec__27821,(0),null);
var command_name__$1 = cljs.core.nth.call(null,vec__27821,(1),null);
var controller = cljs.core.get.call(null,controllers,controller_name);
if(cljs.core.truth_(controller)){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name__$1,command_args);
} else {
throw cljs.core.ex_info.call(null,"Trying to send command to a controller that is not running",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controller","controller",2013778659),controller_name,new cljs.core.Keyword(null,"command","command",-894540724),command_name__$1,new cljs.core.Keyword(null,"args","args",1315556576),command_args], null));
}
});
keechma.controller_manager.route_change_execution_plan = (function keechma$controller_manager$route_change_execution_plan(route_params,running_controllers,controllers){
var plan = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.PersistentVector.EMPTY], null);
var running_controller_keys_set = cljs.core.set.call(null,cljs.core.keys.call(null,running_controllers));
return cljs.core.reduce.call(null,((function (plan,running_controller_keys_set){
return (function (acc,p__27830){
var vec__27831 = p__27830;
var topic = cljs.core.nth.call(null,vec__27831,(0),null);
var controller = cljs.core.nth.call(null,vec__27831,(1),null);
var map__27834 = acc;
var map__27834__$1 = ((((!((map__27834 == null)))?((((map__27834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27834):map__27834);
var stop = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var new_params = keechma.controller.params.call(null,controller,route_params);
var running_controller = cljs.core.get.call(null,running_controllers,topic);
var prev_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(running_controller);
if(cljs.core._EQ_.call(null,keechma.controller.SerializedController,cljs.core.type.call(null,running_controller))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.assoc.call(null,wake,topic,new_params));
} else {
if(((prev_params == null)) && ((new_params == null))){
return acc;
} else {
if(((prev_params == null)) && (cljs.core.boolean$.call(null,new_params))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if((cljs.core.boolean$.call(null,prev_params)) && ((new_params == null))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params));
} else {
if(cljs.core.not_EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if(cljs.core._EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.conj.call(null,route_changed,topic));
} else {
return acc;

}
}
}
}
}
}
});})(plan,running_controller_keys_set))
,plan,controllers);
});
keechma.controller_manager.apply_stop_controllers = (function keechma$controller_manager$apply_stop_controllers(app_db,reporter,stop){
var running_controllers = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
var stop__$1 = stop;
var app_db__$1 = app_db;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,stop__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var vec__27839 = s;
var topic = cljs.core.nth.call(null,vec__27839,(0),null);
var params = cljs.core.nth.call(null,vec__27839,(1),null);
var controller = cljs.core.get.call(null,running_controllers,topic);
var new_app_db = keechma.util.dissoc_in.call(null,keechma.controller.stop.call(null,controller,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),null,new cljs.core.Keyword(null,"info","info",-317069002));

cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller));

var G__27842 = cljs.core.rest.call(null,stop__$1);
var G__27843 = new_app_db;
stop__$1 = G__27842;
app_db__$1 = G__27843;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_controllers = (function keechma$controller_manager$apply_start_controllers(app_db,reporter,controllers,commands_chan,get_running,start){
var start__$1 = start;
var app_db__$1 = app_db;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,start__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var vec__27847 = s;
var topic = cljs.core.nth.call(null,vec__27847,(0),null);
var params = cljs.core.nth.call(null,vec__27847,(1),null);
var controller = cljs.core.assoc.call(null,cljs.core.get.call(null,controllers,topic),new cljs.core.Keyword(null,"in-chan","in-chan",1839083771),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),commands_chan,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1),new cljs.core.Keyword(null,"name","name",1843675177),topic,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.partial.call(null,get_running,topic));
var new_app_db = cljs.core.assoc_in.call(null,keechma.controller.start.call(null,controller,params,app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null),controller);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"start","start",-355208981)], null),params,new cljs.core.Keyword(null,"info","info",-317069002));

var G__27850 = cljs.core.rest.call(null,start__$1);
var G__27851 = new_app_db;
start__$1 = G__27850;
app_db__$1 = G__27851;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_wake_controllers = (function keechma$controller_manager$apply_wake_controllers(app_db,reporter,controllers,commands_chan,get_running,wake){
var wake__$1 = wake;
var app_db__$1 = app_db;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,wake__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var vec__27855 = s;
var topic = cljs.core.nth.call(null,vec__27855,(0),null);
var params = cljs.core.nth.call(null,vec__27855,(1),null);
var controller = cljs.core.assoc.call(null,cljs.core.get.call(null,controllers,topic),new cljs.core.Keyword(null,"in-chan","in-chan",1839083771),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),commands_chan,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1),new cljs.core.Keyword(null,"name","name",1843675177),topic,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.partial.call(null,get_running,topic));
var new_app_db = cljs.core.assoc_in.call(null,keechma.controller.wake.call(null,controller,params,app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null),controller);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"wake","wake",1262361182)], null),params,new cljs.core.Keyword(null,"info","info",-317069002));

var G__27858 = cljs.core.rest.call(null,wake__$1);
var G__27859 = new_app_db;
wake__$1 = G__27858;
app_db__$1 = G__27859;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.call_handler_on_started_controllers = (function keechma$controller_manager$call_handler_on_started_controllers(app_db_atom,reporter,start){
var seq__27870 = cljs.core.seq.call(null,start);
var chunk__27871 = null;
var count__27872 = (0);
var i__27873 = (0);
while(true){
if((i__27873 < count__27872)){
var vec__27874 = cljs.core._nth.call(null,chunk__27871,i__27873);
var topic = cljs.core.nth.call(null,vec__27874,(0),null);
var _ = cljs.core.nth.call(null,vec__27874,(1),null);
var controller_27880 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_27880,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_27880),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_27880));

var G__27881 = seq__27870;
var G__27882 = chunk__27871;
var G__27883 = count__27872;
var G__27884 = (i__27873 + (1));
seq__27870 = G__27881;
chunk__27871 = G__27882;
count__27872 = G__27883;
i__27873 = G__27884;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27870);
if(temp__4657__auto__){
var seq__27870__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27870__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__27870__$1);
var G__27885 = cljs.core.chunk_rest.call(null,seq__27870__$1);
var G__27886 = c__26048__auto__;
var G__27887 = cljs.core.count.call(null,c__26048__auto__);
var G__27888 = (0);
seq__27870 = G__27885;
chunk__27871 = G__27886;
count__27872 = G__27887;
i__27873 = G__27888;
continue;
} else {
var vec__27877 = cljs.core.first.call(null,seq__27870__$1);
var topic = cljs.core.nth.call(null,vec__27877,(0),null);
var _ = cljs.core.nth.call(null,vec__27877,(1),null);
var controller_27889 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_27889,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_27889),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_27889));

var G__27890 = cljs.core.next.call(null,seq__27870__$1);
var G__27891 = null;
var G__27892 = (0);
var G__27893 = (0);
seq__27870 = G__27890;
chunk__27871 = G__27891;
count__27872 = G__27892;
i__27873 = G__27893;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.send_route_changed_to_surviving_controllers = (function keechma$controller_manager$send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed,route_params){
var seq__27898 = cljs.core.seq.call(null,route_changed);
var chunk__27899 = null;
var count__27900 = (0);
var i__27901 = (0);
while(true){
if((i__27901 < count__27900)){
var topic = cljs.core._nth.call(null,chunk__27899,i__27901);
var controller_27902 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_27902,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);

var G__27903 = seq__27898;
var G__27904 = chunk__27899;
var G__27905 = count__27900;
var G__27906 = (i__27901 + (1));
seq__27898 = G__27903;
chunk__27899 = G__27904;
count__27900 = G__27905;
i__27901 = G__27906;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27898);
if(temp__4657__auto__){
var seq__27898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27898__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__27898__$1);
var G__27907 = cljs.core.chunk_rest.call(null,seq__27898__$1);
var G__27908 = c__26048__auto__;
var G__27909 = cljs.core.count.call(null,c__26048__auto__);
var G__27910 = (0);
seq__27898 = G__27907;
chunk__27899 = G__27908;
count__27900 = G__27909;
i__27901 = G__27910;
continue;
} else {
var topic = cljs.core.first.call(null,seq__27898__$1);
var controller_27911 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_27911,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);

var G__27912 = cljs.core.next.call(null,seq__27898__$1);
var G__27913 = null;
var G__27914 = (0);
var G__27915 = (0);
seq__27898 = G__27912;
chunk__27899 = G__27913;
count__27900 = G__27914;
i__27901 = G__27915;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.apply_route_change = (function keechma$controller_manager$apply_route_change(reporter,route_params,app_db_atom,commands_chan,controllers){
var app_db = cljs.core.deref.call(null,app_db_atom);
var execution_plan = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)),controllers);
var map__27918 = execution_plan;
var map__27918__$1 = ((((!((map__27918 == null)))?((((map__27918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27918):map__27918);
var stop = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var get_running = ((function (app_db,execution_plan,map__27918,map__27918__$1,stop,start,wake,route_changed){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db,execution_plan,map__27918,map__27918__$1,stop,start,wake,route_changed))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_wake_controllers.call(null,keechma.controller_manager.apply_start_controllers.call(null,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.assoc.call(null,app_db,new cljs.core.Keyword(null,"route","route",329891309),route_params),reporter,stop),reporter,controllers,commands_chan,get_running,start),reporter,controllers,commands_chan,get_running,wake));

keechma.controller_manager.call_handler_on_started_controllers.call(null,app_db_atom,reporter,cljs.core.concat.call(null,start,wake));

return keechma.controller_manager.send_route_changed_to_surviving_controllers.call(null,app_db_atom,reporter,route_changed,route_params);
});
keechma.controller_manager.call_ssr_handler_on_started_controllers = (function keechma$controller_manager$call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb){
var wait_chan = cljs.core.async.chan.call(null);
var wait_count = (function (){var wait_count = (0);
var start__$1 = start;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,start__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var vec__27963 = s;
var topic = cljs.core.nth.call(null,vec__27963,(0),null);
var _ = cljs.core.nth.call(null,vec__27963,(1),null);
var controller = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"ssr-handler","ssr-handler",1473540493)], null),null,new cljs.core.Keyword(null,"info","info",-317069002));

var ret_val = keechma.controller.ssr_handler.call(null,controller,app_db_atom,((function (wait_count,start__$1,vec__27963,topic,_,controller,s,temp__4655__auto__,wait_chan){
return (function (){
return cljs.core.async.put_BANG_.call(null,wait_chan,true);
});})(wait_count,start__$1,vec__27963,topic,_,controller,s,temp__4655__auto__,wait_chan))
,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller));
if(cljs.core._EQ_.call(null,keechma.controller.not_implemented,ret_val)){
var G__28006 = wait_count;
var G__28007 = cljs.core.rest.call(null,start__$1);
wait_count = G__28006;
start__$1 = G__28007;
continue;
} else {
var G__28008 = (wait_count + (1));
var G__28009 = cljs.core.rest.call(null,start__$1);
wait_count = G__28008;
start__$1 = G__28009;
continue;
}
} else {
return wait_count;
}
break;
}
})();
var c__27297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27297__auto__,wait_chan,wait_count){
return (function (){
var f__27298__auto__ = (function (){var switch__27276__auto__ = ((function (c__27297__auto__,wait_chan,wait_count){
return (function (state_27985){
var state_val_27986 = (state_27985[(1)]);
if((state_val_27986 === (7))){
var inst_27973 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
if(cljs.core.truth_(inst_27973)){
var statearr_27987_28010 = state_27985__$1;
(statearr_27987_28010[(1)] = (8));

} else {
var statearr_27988_28011 = state_27985__$1;
(statearr_27988_28011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (1))){
var inst_27966 = wait_count;
var state_27985__$1 = (function (){var statearr_27989 = state_27985;
(statearr_27989[(7)] = inst_27966);

return statearr_27989;
})();
var statearr_27990_28012 = state_27985__$1;
(statearr_27990_28012[(2)] = null);

(statearr_27990_28012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (4))){
var inst_27970 = ssr_handler_done_cb.call(null);
var state_27985__$1 = state_27985;
var statearr_27991_28013 = state_27985__$1;
(statearr_27991_28013[(2)] = inst_27970);

(statearr_27991_28013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (6))){
var inst_27981 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_27992_28014 = state_27985__$1;
(statearr_27992_28014[(2)] = inst_27981);

(statearr_27992_28014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (3))){
var inst_27983 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27985__$1,inst_27983);
} else {
if((state_val_27986 === (2))){
var inst_27966 = (state_27985[(7)]);
var inst_27968 = cljs.core._EQ_.call(null,(0),inst_27966);
var state_27985__$1 = state_27985;
if(inst_27968){
var statearr_27993_28015 = state_27985__$1;
(statearr_27993_28015[(1)] = (4));

} else {
var statearr_27994_28016 = state_27985__$1;
(statearr_27994_28016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (9))){
var state_27985__$1 = state_27985;
var statearr_27995_28017 = state_27985__$1;
(statearr_27995_28017[(2)] = null);

(statearr_27995_28017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (5))){
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27985__$1,(7),wait_chan);
} else {
if((state_val_27986 === (10))){
var inst_27979 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_27996_28018 = state_27985__$1;
(statearr_27996_28018[(2)] = inst_27979);

(statearr_27996_28018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (8))){
var inst_27966 = (state_27985[(7)]);
var inst_27975 = (inst_27966 - (1));
var inst_27966__$1 = inst_27975;
var state_27985__$1 = (function (){var statearr_27997 = state_27985;
(statearr_27997[(7)] = inst_27966__$1);

return statearr_27997;
})();
var statearr_27998_28019 = state_27985__$1;
(statearr_27998_28019[(2)] = null);

(statearr_27998_28019[(1)] = (2));


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
});})(c__27297__auto__,wait_chan,wait_count))
;
return ((function (switch__27276__auto__,c__27297__auto__,wait_chan,wait_count){
return (function() {
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto__ = null;
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto____0 = (function (){
var statearr_28002 = [null,null,null,null,null,null,null,null];
(statearr_28002[(0)] = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto__);

(statearr_28002[(1)] = (1));

return statearr_28002;
});
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto____1 = (function (state_27985){
while(true){
var ret_value__27278__auto__ = (function (){try{while(true){
var result__27279__auto__ = switch__27276__auto__.call(null,state_27985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27279__auto__;
}
break;
}
}catch (e28003){if((e28003 instanceof Object)){
var ex__27280__auto__ = e28003;
var statearr_28004_28020 = state_27985;
(statearr_28004_28020[(5)] = ex__27280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28021 = state_27985;
state_27985 = G__28021;
continue;
} else {
return ret_value__27278__auto__;
}
break;
}
});
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto__ = function(state_27985){
switch(arguments.length){
case 0:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto____0.call(this);
case 1:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto____1.call(this,state_27985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto____0;
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto____1;
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__27277__auto__;
})()
;})(switch__27276__auto__,c__27297__auto__,wait_chan,wait_count))
})();
var state__27299__auto__ = (function (){var statearr_28005 = f__27298__auto__.call(null);
(statearr_28005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27297__auto__);

return statearr_28005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27299__auto__);
});})(c__27297__auto__,wait_chan,wait_count))
);

return c__27297__auto__;
});
keechma.controller_manager.start_ssr = (function keechma$controller_manager$start_ssr(routes_chan,commands_chan,app_db_atom,controllers,reporter,done_cb){
var app_db = cljs.core.deref.call(null,app_db_atom);
var route_params = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db);
var execution_plan = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.PersistentArrayMap.EMPTY,controllers);
var map__28063 = execution_plan;
var map__28063__$1 = ((((!((map__28063 == null)))?((((map__28063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28063):map__28063);
var start = cljs.core.get.call(null,map__28063__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var get_running = ((function (app_db,route_params,execution_plan,map__28063,map__28063__$1,start){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db,route_params,execution_plan,map__28063,map__28063__$1,start))
;
var ssr_handler_done_cb = ((function (app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running){
return (function (){
cljs.core.async.close_BANG_.call(null,commands_chan);

return done_cb.call(null);
});})(app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_start_controllers.call(null,app_db,reporter,controllers,commands_chan,get_running,start));

var c__27297__auto___28104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27297__auto___28104,app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running,ssr_handler_done_cb){
return (function (){
var f__27298__auto__ = (function (){var switch__27276__auto__ = ((function (c__27297__auto___28104,app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running,ssr_handler_done_cb){
return (function (state_28087){
var state_val_28088 = (state_28087[(1)]);
if((state_val_28088 === (1))){
var state_28087__$1 = state_28087;
var statearr_28089_28105 = state_28087__$1;
(statearr_28089_28105[(2)] = null);

(statearr_28089_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (2))){
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28087__$1,(4),commands_chan);
} else {
if((state_val_28088 === (3))){
var inst_28085 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28087__$1,inst_28085);
} else {
if((state_val_28088 === (4))){
var inst_28067 = (state_28087[(7)]);
var inst_28067__$1 = (state_28087[(2)]);
var state_28087__$1 = (function (){var statearr_28090 = state_28087;
(statearr_28090[(7)] = inst_28067__$1);

return statearr_28090;
})();
if(cljs.core.truth_(inst_28067__$1)){
var statearr_28091_28106 = state_28087__$1;
(statearr_28091_28106[(1)] = (5));

} else {
var statearr_28092_28107 = state_28087__$1;
(statearr_28092_28107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (5))){
var inst_28067 = (state_28087[(7)]);
var inst_28072 = cljs.core.nth.call(null,inst_28067,(0),null);
var inst_28073 = cljs.core.nth.call(null,inst_28067,(1),null);
var inst_28074 = cljs.core.deref.call(null,app_db_atom);
var inst_28075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28076 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_28077 = (new cljs.core.PersistentVector(null,2,(5),inst_28075,inst_28076,null));
var inst_28078 = cljs.core.get_in.call(null,inst_28074,inst_28077);
var inst_28079 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_28078,inst_28072,inst_28073);
var state_28087__$1 = (function (){var statearr_28093 = state_28087;
(statearr_28093[(8)] = inst_28079);

return statearr_28093;
})();
var statearr_28094_28108 = state_28087__$1;
(statearr_28094_28108[(2)] = null);

(statearr_28094_28108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (6))){
var state_28087__$1 = state_28087;
var statearr_28095_28109 = state_28087__$1;
(statearr_28095_28109[(2)] = null);

(statearr_28095_28109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (7))){
var inst_28083 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
var statearr_28096_28110 = state_28087__$1;
(statearr_28096_28110[(2)] = inst_28083);

(statearr_28096_28110[(1)] = (3));


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
});})(c__27297__auto___28104,app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running,ssr_handler_done_cb))
;
return ((function (switch__27276__auto__,c__27297__auto___28104,app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running,ssr_handler_done_cb){
return (function() {
var keechma$controller_manager$start_ssr_$_state_machine__27277__auto__ = null;
var keechma$controller_manager$start_ssr_$_state_machine__27277__auto____0 = (function (){
var statearr_28100 = [null,null,null,null,null,null,null,null,null];
(statearr_28100[(0)] = keechma$controller_manager$start_ssr_$_state_machine__27277__auto__);

(statearr_28100[(1)] = (1));

return statearr_28100;
});
var keechma$controller_manager$start_ssr_$_state_machine__27277__auto____1 = (function (state_28087){
while(true){
var ret_value__27278__auto__ = (function (){try{while(true){
var result__27279__auto__ = switch__27276__auto__.call(null,state_28087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27279__auto__;
}
break;
}
}catch (e28101){if((e28101 instanceof Object)){
var ex__27280__auto__ = e28101;
var statearr_28102_28111 = state_28087;
(statearr_28102_28111[(5)] = ex__27280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28112 = state_28087;
state_28087 = G__28112;
continue;
} else {
return ret_value__27278__auto__;
}
break;
}
});
keechma$controller_manager$start_ssr_$_state_machine__27277__auto__ = function(state_28087){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_ssr_$_state_machine__27277__auto____0.call(this);
case 1:
return keechma$controller_manager$start_ssr_$_state_machine__27277__auto____1.call(this,state_28087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_ssr_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_ssr_$_state_machine__27277__auto____0;
keechma$controller_manager$start_ssr_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_ssr_$_state_machine__27277__auto____1;
return keechma$controller_manager$start_ssr_$_state_machine__27277__auto__;
})()
;})(switch__27276__auto__,c__27297__auto___28104,app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running,ssr_handler_done_cb))
})();
var state__27299__auto__ = (function (){var statearr_28103 = f__27298__auto__.call(null);
(statearr_28103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27297__auto___28104);

return statearr_28103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27299__auto__);
});})(c__27297__auto___28104,app_db,route_params,execution_plan,map__28063,map__28063__$1,start,get_running,ssr_handler_done_cb))
);


return keechma.controller_manager.call_ssr_handler_on_started_controllers.call(null,app_db_atom,reporter,start,ssr_handler_done_cb);
});
/**
 * Starts the controller manager. Controller manager is the central part
 *   of the application that manages the lifecycle of the controllers and routes
 *   the messages sent to them.
 * 
 *   `start` function receives the following parameters:
 *   
 *   - `route-chan` - Route changes will communicated through this channel
 *   - `commands-chan` - User (UI) commands will be sent through this channel
 *   - `app-db` - application state atom
 *   - `controllers` map of controllers registered for the app
 * 
 *   Each time when the new route data comes through the `route-chan` controller
 *   manager will do the following:
 * 
 *   - call the `params` function on each registered controller
 *   - compare the value returned by the `params` function with the value that
 *   was returned last time when the route changes
 *   - based on the comparison it will do one of the following:
 *  - if the last value was `nil` and the current value is `nil` - do nothing
 *  - if the last value was `nil` and the current value is not `nil` - start the controller
 *  - if the last value was not `nil` and the current value is `nil` - stop the controller
 *  - if the last value was not `nil` and the current value is not `nil` and these values are the same - do nothing
 *  - if the last value was not `nil` and the current value is not `nil` and these values are different - restart the controller (stop the current instance and start the new one)
 * 
 *   Controller manager also acts as a command router. Each time a command comes - through the `commands-chan`
 *   the name of the command should look like this `[:controlnler-key :command-name]`. Controller manager will route the `:command-name` command to the appropriate controller based on the `:controller-key`. Controller key is the key under which the controller was registered in the `controllers` argument.
 *   
 */
keechma.controller_manager.start = (function keechma$controller_manager$start(route_chan,commands_chan,app_db_atom,controllers,reporter){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller_manager.apply_route_change.call(null,reporter,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom)),app_db_atom,commands_chan,controllers);

var stop_route_block = cljs.core.async.chan.call(null);
var stop_command_block = cljs.core.async.chan.call(null);
var running_chans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__27297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27297__auto__,stop_route_block,stop_command_block){
return (function (){
var f__27298__auto__ = (function (){var switch__27276__auto__ = ((function (c__27297__auto__,stop_route_block,stop_command_block){
return (function (state_28269){
var state_val_28270 = (state_28269[(1)]);
if((state_val_28270 === (7))){
var inst_28252 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28252)){
var statearr_28271_28361 = state_28269__$1;
(statearr_28271_28361[(1)] = (8));

} else {
var statearr_28272_28362 = state_28269__$1;
(statearr_28272_28362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (1))){
var state_28269__$1 = state_28269;
var statearr_28273_28363 = state_28269__$1;
(statearr_28273_28363[(2)] = null);

(statearr_28273_28363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (4))){
var inst_28248 = (state_28269[(7)]);
var inst_28245 = (state_28269[(2)]);
var inst_28246 = cljs.core.nth.call(null,inst_28245,(0),null);
var inst_28247 = cljs.core.nth.call(null,inst_28245,(1),null);
var inst_28248__$1 = cljs.core.not_EQ_.call(null,inst_28247,stop_route_block);
var state_28269__$1 = (function (){var statearr_28274 = state_28269;
(statearr_28274[(8)] = inst_28246);

(statearr_28274[(7)] = inst_28248__$1);

return statearr_28274;
})();
if(inst_28248__$1){
var statearr_28275_28364 = state_28269__$1;
(statearr_28275_28364[(1)] = (5));

} else {
var statearr_28276_28365 = state_28269__$1;
(statearr_28276_28365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (13))){
var inst_28261 = (state_28269[(2)]);
var state_28269__$1 = (function (){var statearr_28277 = state_28269;
(statearr_28277[(9)] = inst_28261);

return statearr_28277;
})();
var statearr_28278_28366 = state_28269__$1;
(statearr_28278_28366[(2)] = null);

(statearr_28278_28366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (6))){
var inst_28248 = (state_28269[(7)]);
var state_28269__$1 = state_28269;
var statearr_28279_28367 = state_28269__$1;
(statearr_28279_28367[(2)] = inst_28248);

(statearr_28279_28367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (3))){
var inst_28267 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28269__$1,inst_28267);
} else {
if((state_val_28270 === (12))){
var state_28269__$1 = state_28269;
var statearr_28280_28368 = state_28269__$1;
(statearr_28280_28368[(2)] = null);

(statearr_28280_28368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (2))){
var inst_28241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28242 = [stop_route_block,route_chan];
var inst_28243 = (new cljs.core.PersistentVector(null,2,(5),inst_28241,inst_28242,null));
var state_28269__$1 = state_28269;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28269__$1,(4),inst_28243);
} else {
if((state_val_28270 === (11))){
var inst_28246 = (state_28269[(8)]);
var inst_28258 = keechma.controller_manager.apply_route_change.call(null,reporter,inst_28246,app_db_atom,commands_chan,controllers);
var state_28269__$1 = state_28269;
var statearr_28281_28369 = state_28269__$1;
(statearr_28281_28369[(2)] = inst_28258);

(statearr_28281_28369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (9))){
var state_28269__$1 = state_28269;
var statearr_28282_28370 = state_28269__$1;
(statearr_28282_28370[(2)] = null);

(statearr_28282_28370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (5))){
var inst_28246 = (state_28269[(8)]);
var state_28269__$1 = state_28269;
var statearr_28283_28371 = state_28269__$1;
(statearr_28283_28371[(2)] = inst_28246);

(statearr_28283_28371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (10))){
var inst_28265 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28284_28372 = state_28269__$1;
(statearr_28284_28372[(2)] = inst_28265);

(statearr_28284_28372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (8))){
var inst_28246 = (state_28269[(8)]);
var inst_28254 = cljs.core.deref.call(null,app_db_atom);
var inst_28255 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(inst_28254);
var inst_28256 = cljs.core.not_EQ_.call(null,inst_28246,inst_28255);
var state_28269__$1 = state_28269;
if(inst_28256){
var statearr_28285_28373 = state_28269__$1;
(statearr_28285_28373[(1)] = (11));

} else {
var statearr_28286_28374 = state_28269__$1;
(statearr_28286_28374[(1)] = (12));

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
});})(c__27297__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__27276__auto__,c__27297__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__27277__auto__ = null;
var keechma$controller_manager$start_$_state_machine__27277__auto____0 = (function (){
var statearr_28290 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28290[(0)] = keechma$controller_manager$start_$_state_machine__27277__auto__);

(statearr_28290[(1)] = (1));

return statearr_28290;
});
var keechma$controller_manager$start_$_state_machine__27277__auto____1 = (function (state_28269){
while(true){
var ret_value__27278__auto__ = (function (){try{while(true){
var result__27279__auto__ = switch__27276__auto__.call(null,state_28269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27279__auto__;
}
break;
}
}catch (e28291){if((e28291 instanceof Object)){
var ex__27280__auto__ = e28291;
var statearr_28292_28375 = state_28269;
(statearr_28292_28375[(5)] = ex__27280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28376 = state_28269;
state_28269 = G__28376;
continue;
} else {
return ret_value__27278__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__27277__auto__ = function(state_28269){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__27277__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__27277__auto____1.call(this,state_28269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__27277__auto____0;
keechma$controller_manager$start_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__27277__auto____1;
return keechma$controller_manager$start_$_state_machine__27277__auto__;
})()
;})(switch__27276__auto__,c__27297__auto__,stop_route_block,stop_command_block))
})();
var state__27299__auto__ = (function (){var statearr_28293 = f__27298__auto__.call(null);
(statearr_28293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27297__auto__);

return statearr_28293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27299__auto__);
});})(c__27297__auto__,stop_route_block,stop_command_block))
);

return c__27297__auto__;
})(),(function (){var c__27297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27297__auto__,stop_route_block,stop_command_block){
return (function (){
var f__27298__auto__ = (function (){var switch__27276__auto__ = ((function (c__27297__auto__,stop_route_block,stop_command_block){
return (function (state_28331){
var state_val_28332 = (state_28331[(1)]);
if((state_val_28332 === (7))){
var inst_28327 = (state_28331[(2)]);
var state_28331__$1 = state_28331;
var statearr_28333_28377 = state_28331__$1;
(statearr_28333_28377[(2)] = inst_28327);

(statearr_28333_28377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28332 === (1))){
var state_28331__$1 = state_28331;
var statearr_28334_28378 = state_28331__$1;
(statearr_28334_28378[(2)] = null);

(statearr_28334_28378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28332 === (4))){
var inst_28302 = (state_28331[(2)]);
var inst_28303 = cljs.core.nth.call(null,inst_28302,(0),null);
var inst_28304 = cljs.core.nth.call(null,inst_28302,(1),null);
var inst_28305 = cljs.core._EQ_.call(null,inst_28304,stop_command_block);
var state_28331__$1 = (function (){var statearr_28335 = state_28331;
(statearr_28335[(7)] = inst_28303);

return statearr_28335;
})();
if(inst_28305){
var statearr_28336_28379 = state_28331__$1;
(statearr_28336_28379[(1)] = (5));

} else {
var statearr_28337_28380 = state_28331__$1;
(statearr_28337_28380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28332 === (6))){
var inst_28303 = (state_28331[(7)]);
var inst_28311 = (state_28331[(8)]);
var inst_28311__$1 = cljs.core.nth.call(null,inst_28303,(0),null);
var inst_28312 = cljs.core.nth.call(null,inst_28303,(1),null);
var inst_28313 = cljs.core.deref.call(null,app_db_atom);
var inst_28314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28315 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_28316 = (new cljs.core.PersistentVector(null,2,(5),inst_28314,inst_28315,null));
var inst_28317 = cljs.core.get_in.call(null,inst_28313,inst_28316);
var inst_28318 = (inst_28311__$1 == null);
var inst_28319 = cljs.core.not.call(null,inst_28318);
var state_28331__$1 = (function (){var statearr_28338 = state_28331;
(statearr_28338[(9)] = inst_28317);

(statearr_28338[(10)] = inst_28312);

(statearr_28338[(8)] = inst_28311__$1);

return statearr_28338;
})();
if(inst_28319){
var statearr_28339_28381 = state_28331__$1;
(statearr_28339_28381[(1)] = (8));

} else {
var statearr_28340_28382 = state_28331__$1;
(statearr_28340_28382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28332 === (3))){
var inst_28329 = (state_28331[(2)]);
var state_28331__$1 = state_28331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28331__$1,inst_28329);
} else {
if((state_val_28332 === (2))){
var inst_28298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28299 = [stop_command_block,commands_chan];
var inst_28300 = (new cljs.core.PersistentVector(null,2,(5),inst_28298,inst_28299,null));
var state_28331__$1 = state_28331;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28331__$1,(4),inst_28300);
} else {
if((state_val_28332 === (9))){
var state_28331__$1 = state_28331;
var statearr_28341_28383 = state_28331__$1;
(statearr_28341_28383[(2)] = null);

(statearr_28341_28383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28332 === (5))){
var state_28331__$1 = state_28331;
var statearr_28342_28384 = state_28331__$1;
(statearr_28342_28384[(2)] = null);

(statearr_28342_28384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28332 === (10))){
var inst_28324 = (state_28331[(2)]);
var state_28331__$1 = (function (){var statearr_28343 = state_28331;
(statearr_28343[(11)] = inst_28324);

return statearr_28343;
})();
var statearr_28344_28385 = state_28331__$1;
(statearr_28344_28385[(2)] = null);

(statearr_28344_28385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28332 === (8))){
var inst_28317 = (state_28331[(9)]);
var inst_28312 = (state_28331[(10)]);
var inst_28311 = (state_28331[(8)]);
var inst_28321 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_28317,inst_28311,inst_28312);
var state_28331__$1 = state_28331;
var statearr_28345_28386 = state_28331__$1;
(statearr_28345_28386[(2)] = inst_28321);

(statearr_28345_28386[(1)] = (10));


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
});})(c__27297__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__27276__auto__,c__27297__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__27277__auto__ = null;
var keechma$controller_manager$start_$_state_machine__27277__auto____0 = (function (){
var statearr_28349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28349[(0)] = keechma$controller_manager$start_$_state_machine__27277__auto__);

(statearr_28349[(1)] = (1));

return statearr_28349;
});
var keechma$controller_manager$start_$_state_machine__27277__auto____1 = (function (state_28331){
while(true){
var ret_value__27278__auto__ = (function (){try{while(true){
var result__27279__auto__ = switch__27276__auto__.call(null,state_28331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27279__auto__;
}
break;
}
}catch (e28350){if((e28350 instanceof Object)){
var ex__27280__auto__ = e28350;
var statearr_28351_28387 = state_28331;
(statearr_28351_28387[(5)] = ex__27280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28388 = state_28331;
state_28331 = G__28388;
continue;
} else {
return ret_value__27278__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__27277__auto__ = function(state_28331){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__27277__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__27277__auto____1.call(this,state_28331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__27277__auto____0;
keechma$controller_manager$start_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__27277__auto____1;
return keechma$controller_manager$start_$_state_machine__27277__auto__;
})()
;})(switch__27276__auto__,c__27297__auto__,stop_route_block,stop_command_block))
})();
var state__27299__auto__ = (function (){var statearr_28352 = f__27298__auto__.call(null);
(statearr_28352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27297__auto__);

return statearr_28352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27299__auto__);
});})(c__27297__auto__,stop_route_block,stop_command_block))
);

return c__27297__auto__;
})()], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388),running_chans,new cljs.core.Keyword(null,"stop","stop",-2140911342),((function (stop_route_block,stop_command_block,running_chans){
return (function (){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"stop","stop",-2140911342),null,new cljs.core.Keyword(null,"info","info",-317069002));

var controllers__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
cljs.core.async.close_BANG_.call(null,stop_route_block);

cljs.core.async.close_BANG_.call(null,stop_command_block);

var seq__28353_28389 = cljs.core.seq.call(null,running_chans);
var chunk__28354_28390 = null;
var count__28355_28391 = (0);
var i__28356_28392 = (0);
while(true){
if((i__28356_28392 < count__28355_28391)){
var running_28393 = cljs.core._nth.call(null,chunk__28354_28390,i__28356_28392);
cljs.core.async.close_BANG_.call(null,running_28393);

var G__28394 = seq__28353_28389;
var G__28395 = chunk__28354_28390;
var G__28396 = count__28355_28391;
var G__28397 = (i__28356_28392 + (1));
seq__28353_28389 = G__28394;
chunk__28354_28390 = G__28395;
count__28355_28391 = G__28396;
i__28356_28392 = G__28397;
continue;
} else {
var temp__4657__auto___28398 = cljs.core.seq.call(null,seq__28353_28389);
if(temp__4657__auto___28398){
var seq__28353_28399__$1 = temp__4657__auto___28398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28353_28399__$1)){
var c__26048__auto___28400 = cljs.core.chunk_first.call(null,seq__28353_28399__$1);
var G__28401 = cljs.core.chunk_rest.call(null,seq__28353_28399__$1);
var G__28402 = c__26048__auto___28400;
var G__28403 = cljs.core.count.call(null,c__26048__auto___28400);
var G__28404 = (0);
seq__28353_28389 = G__28401;
chunk__28354_28390 = G__28402;
count__28355_28391 = G__28403;
i__28356_28392 = G__28404;
continue;
} else {
var running_28405 = cljs.core.first.call(null,seq__28353_28399__$1);
cljs.core.async.close_BANG_.call(null,running_28405);

var G__28406 = cljs.core.next.call(null,seq__28353_28399__$1);
var G__28407 = null;
var G__28408 = (0);
var G__28409 = (0);
seq__28353_28389 = G__28406;
chunk__28354_28390 = G__28407;
count__28355_28391 = G__28408;
i__28356_28392 = G__28409;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.deref.call(null,app_db_atom),reporter,cljs.core.reduce.call(null,((function (controllers__$1,stop_route_block,stop_command_block,running_chans){
return (function (acc,p__28357){
var vec__28358 = p__28357;
var key = cljs.core.nth.call(null,vec__28358,(0),null);
var controller = cljs.core.nth.call(null,vec__28358,(1),null);
return cljs.core.assoc.call(null,acc,key,cljs.core.PersistentArrayMap.EMPTY);
});})(controllers__$1,stop_route_block,stop_command_block,running_chans))
,cljs.core.PersistentArrayMap.EMPTY,controllers__$1)));
});})(stop_route_block,stop_command_block,running_chans))
], null);
});

//# sourceMappingURL=controller_manager.js.map?rel=1488782230183