// Compiled by ClojureScript 1.9.473 {}
goog.provide('keechma.controller');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.controller.not_implemented = new cljs.core.Keyword("keechma.controller","not-implemented","keechma.controller/not-implemented",1337990552);

/**
 * Controllers in Keechma are the place where you put the code
 *   that has side-effects. They are managed by the [[keechma.controller-manager]]
 *   which will start them or stop them based on the current route.
 * 
 *   Each controller implements the `params` function. `params` function returns
 *   a subset of the route params that are the controller is interested in.
 * 
 *   For instance let's say that you have a `UserController` which should be
 *   running only when the user is on the route `/users`:
 * 
 *   ```clojure
 *   ;; let's say that your routes are defined like this:
 *   
 *   (def routes [":page"]) ;; Routes are managed by the app-state library.
 * 
 *   ;; When user goes to the url `/users` the params function would receive
 *   ;; something that looks like this:
 * 
 *   {:data {:page "users"}}
 * 
 *   ;; `params` function returns `true` only when user is on the `:page` "users"
 *   (defrecord UserController []
 *  IController
 *  (params [_ route-params]
 *    (when (= "users" (get-in route-params [:data :page]))
 *     true)))
 *   ```
 * 
 *   When `params` function returns a non `nil` value the controller will be started:
 * 
 *   1. Controller's `start` function will be synchronously called with the current
 *   application state. This function returns a new version of the state if needed.
 *   (if the `start` function is not doing any changes to the app-state it must return
 *   the received version)
 *   2. Controller's `handler` function will be called - this function will receive
 *   application state atom, channel through which the controller receives the commands
 *   (`in-chan`) and the channel through which the controller can send commends to
 *   other controllers (`out-chan`).
 * 
 *   When `params` function returns a `nil` value that instance of the controller will
 *   be stopped:
 * 
 *   1. Controller's `stop` function will be synchronously called with the current
 *   application state. This function returns a new version of the state if needed - 
 *   use this function to clean up any data loaded by the controller (if the `stop` 
 *   function is not doing any changes to the app-state it must return the received
 *   version).
 *   2. Controller's `in-chan` (through which it can receive commands) will be closed.
 * 
 *   Controller's `start` and `stop` functions can asynchronuously send commends to the
 *   controller. Calling `(execute controller-instance :command)` will put that command
 *   on the controller's `in-chan`. Controller can react to these commands from the 
 *   `handler` function. 
 * 
 *   
 * @interface
 */
keechma.controller.IController = function(){};

/**
 * Receives the `route-params` and returns either the `params` for the controller or `nil`
 */
keechma.controller.params = (function keechma$controller$params(this$,route_params){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$params$arity$2 == null)))){
return this$.keechma$controller$IController$params$arity$2(this$,route_params);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.params[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,route_params);
} else {
var m__25898__auto____$1 = (keechma.controller.params["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,route_params);
} else {
throw cljs.core.missing_protocol.call(null,"IController.params",this$);
}
}
}
});

keechma.controller.report = (function keechma$controller$report(var_args){
var args27678 = [];
var len__26342__auto___27690 = arguments.length;
var i__26343__auto___27691 = (0);
while(true){
if((i__26343__auto___27691 < len__26342__auto___27690)){
args27678.push((arguments[i__26343__auto___27691]));

var G__27692 = (i__26343__auto___27691 + (1));
i__26343__auto___27691 = G__27692;
continue;
} else {
}
break;
}

var G__27680 = args27678.length;
switch (G__27680) {
case 4:
return keechma.controller.report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.controller.report.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27678.length)].join('')));

}
});

keechma.controller.report.cljs$core$IFn$_invoke$arity$4 = (function (this$,direction,name,payload){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$report$arity$4 == null)))){
return this$.keechma$controller$IController$report$arity$4(this$,direction,name,payload);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.report[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,direction,name,payload);
} else {
var m__25898__auto____$1 = (keechma.controller.report["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,direction,name,payload);
} else {
throw cljs.core.missing_protocol.call(null,"IController.report",this$);
}
}
}
});

keechma.controller.report.cljs$core$IFn$_invoke$arity$5 = (function (this$,direction,name,payload,severity){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$report$arity$5 == null)))){
return this$.keechma$controller$IController$report$arity$5(this$,direction,name,payload,severity);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.report[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,direction,name,payload,severity);
} else {
var m__25898__auto____$1 = (keechma.controller.report["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,direction,name,payload,severity);
} else {
throw cljs.core.missing_protocol.call(null,"IController.report",this$);
}
}
}
});

keechma.controller.report.cljs$lang$maxFixedArity = 5;


/**
 * Return the context passed to application.
 */
keechma.controller.context = (function keechma$controller$context(var_args){
var args27681 = [];
var len__26342__auto___27694 = arguments.length;
var i__26343__auto___27695 = (0);
while(true){
if((i__26343__auto___27695 < len__26342__auto___27694)){
args27681.push((arguments[i__26343__auto___27695]));

var G__27696 = (i__26343__auto___27695 + (1));
i__26343__auto___27695 = G__27696;
continue;
} else {
}
break;
}

var G__27683 = args27681.length;
switch (G__27683) {
case 1:
return keechma.controller.context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.controller.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27681.length)].join('')));

}
});

keechma.controller.context.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$context$arity$1 == null)))){
return this$.keechma$controller$IController$context$arity$1(this$);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.context[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$);
} else {
var m__25898__auto____$1 = (keechma.controller.context["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IController.context",this$);
}
}
}
});

keechma.controller.context.cljs$core$IFn$_invoke$arity$2 = (function (this$,key){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$context$arity$2 == null)))){
return this$.keechma$controller$IController$context$arity$2(this$,key);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.context[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,key);
} else {
var m__25898__auto____$1 = (keechma.controller.context["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"IController.context",this$);
}
}
}
});

keechma.controller.context.cljs$lang$maxFixedArity = 2;


/**
 * Called when the controller is started. Receives the controller `params` (returned by the
 *  `params` function) and the application state. It must return the application state.
 */
keechma.controller.start = (function keechma$controller$start(this$,params,app_db){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$start$arity$3 == null)))){
return this$.keechma$controller$IController$start$arity$3(this$,params,app_db);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.start[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,params,app_db);
} else {
var m__25898__auto____$1 = (keechma.controller.start["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,params,app_db);
} else {
throw cljs.core.missing_protocol.call(null,"IController.start",this$);
}
}
}
});

/**
 * Called when the controller is started from the saved state stored on the server. It will be
 *   called instead of the `start` function if the `ssr-handler` function is implemented. This
 *   allows you to manually revive the serialized data if needed. Usually this function is not
 *   needed, but if you for instance start the inner application from the controller, you can
 *   use this function to wake the inner app.
 */
keechma.controller.wake = (function keechma$controller$wake(this$,params,app_db){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$wake$arity$3 == null)))){
return this$.keechma$controller$IController$wake$arity$3(this$,params,app_db);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.wake[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,params,app_db);
} else {
var m__25898__auto____$1 = (keechma.controller.wake["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,params,app_db);
} else {
throw cljs.core.missing_protocol.call(null,"IController.wake",this$);
}
}
}
});

/**
 * Called when the controller is stopped. Receives the controller `params` (returned by the
 *  `params` function) and the application state. It must return the application state.
 */
keechma.controller.stop = (function keechma$controller$stop(this$,params,app_db){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$stop$arity$3 == null)))){
return this$.keechma$controller$IController$stop$arity$3(this$,params,app_db);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.stop[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,params,app_db);
} else {
var m__25898__auto____$1 = (keechma.controller.stop["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,params,app_db);
} else {
throw cljs.core.missing_protocol.call(null,"IController.stop",this$);
}
}
}
});

/**
 * Puts the command on the controller's `in-chan` which is passed as an argument to the 
 *  `handler` function. Can be called from the `start` and `stop` functions.
 */
keechma.controller.execute = (function keechma$controller$execute(var_args){
var args27684 = [];
var len__26342__auto___27698 = arguments.length;
var i__26343__auto___27699 = (0);
while(true){
if((i__26343__auto___27699 < len__26342__auto___27698)){
args27684.push((arguments[i__26343__auto___27699]));

var G__27700 = (i__26343__auto___27699 + (1));
i__26343__auto___27699 = G__27700;
continue;
} else {
}
break;
}

var G__27686 = args27684.length;
switch (G__27686) {
case 2:
return keechma.controller.execute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.controller.execute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27684.length)].join('')));

}
});

keechma.controller.execute.cljs$core$IFn$_invoke$arity$2 = (function (this$,command_name){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$execute$arity$2 == null)))){
return this$.keechma$controller$IController$execute$arity$2(this$,command_name);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.execute[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,command_name);
} else {
var m__25898__auto____$1 = (keechma.controller.execute["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,command_name);
} else {
throw cljs.core.missing_protocol.call(null,"IController.execute",this$);
}
}
}
});

keechma.controller.execute.cljs$core$IFn$_invoke$arity$3 = (function (this$,command_name,args){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$execute$arity$3 == null)))){
return this$.keechma$controller$IController$execute$arity$3(this$,command_name,args);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.execute[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,command_name,args);
} else {
var m__25898__auto____$1 = (keechma.controller.execute["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,command_name,args);
} else {
throw cljs.core.missing_protocol.call(null,"IController.execute",this$);
}
}
}
});

keechma.controller.execute.cljs$lang$maxFixedArity = 3;


/**
 * Called after the `start` function. You can listen to the commands on the `in-chan` 
 *  inside the `go` block. This is the function in which you implement anything that reacts
 *  to the user commands (coming from the UI).
 */
keechma.controller.handler = (function keechma$controller$handler(this$,app_db_atom,in_chan,out_chan){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$handler$arity$4 == null)))){
return this$.keechma$controller$IController$handler$arity$4(this$,app_db_atom,in_chan,out_chan);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.handler[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,app_db_atom,in_chan,out_chan);
} else {
var m__25898__auto____$1 = (keechma.controller.handler["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,app_db_atom,in_chan,out_chan);
} else {
throw cljs.core.missing_protocol.call(null,"IController.handler",this$);
}
}
}
});

/**
 * Called in after the `start` (instead of the `handler` function) function in the server
 *   side context. This function should call the `done` callback when it has completed the 
 *   server side data loading. Returning `::not-implemented` which is a default behavior will
 *   mark the controller as non server side.
 */
keechma.controller.ssr_handler = (function keechma$controller$ssr_handler(this$,app_db_atom,done,in_chan,out_chan){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$ssr_handler$arity$5 == null)))){
return this$.keechma$controller$IController$ssr_handler$arity$5(this$,app_db_atom,done,in_chan,out_chan);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.ssr_handler[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,app_db_atom,done,in_chan,out_chan);
} else {
var m__25898__auto____$1 = (keechma.controller.ssr_handler["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,app_db_atom,done,in_chan,out_chan);
} else {
throw cljs.core.missing_protocol.call(null,"IController.ssr-handler",this$);
}
}
}
});

/**
 * Sends a command to another controller
 */
keechma.controller.send_command = (function keechma$controller$send_command(var_args){
var args27687 = [];
var len__26342__auto___27702 = arguments.length;
var i__26343__auto___27703 = (0);
while(true){
if((i__26343__auto___27703 < len__26342__auto___27702)){
args27687.push((arguments[i__26343__auto___27703]));

var G__27704 = (i__26343__auto___27703 + (1));
i__26343__auto___27703 = G__27704;
continue;
} else {
}
break;
}

var G__27689 = args27687.length;
switch (G__27689) {
case 2:
return keechma.controller.send_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27687.length)].join('')));

}
});

keechma.controller.send_command.cljs$core$IFn$_invoke$arity$2 = (function (this$,command_name){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$send_command$arity$2 == null)))){
return this$.keechma$controller$IController$send_command$arity$2(this$,command_name);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.send_command[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,command_name);
} else {
var m__25898__auto____$1 = (keechma.controller.send_command["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,command_name);
} else {
throw cljs.core.missing_protocol.call(null,"IController.send-command",this$);
}
}
}
});

keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3 = (function (this$,command_name,args){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$send_command$arity$3 == null)))){
return this$.keechma$controller$IController$send_command$arity$3(this$,command_name,args);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.send_command[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,command_name,args);
} else {
var m__25898__auto____$1 = (keechma.controller.send_command["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,command_name,args);
} else {
throw cljs.core.missing_protocol.call(null,"IController.send-command",this$);
}
}
}
});

keechma.controller.send_command.cljs$lang$maxFixedArity = 3;


/**
 * Returns `true` if this controller is still running. You can use this if you have some
 *  kind of async action, and you want to make sure that the controller is still running 
 *  when you receive the results.
 */
keechma.controller.is_running_QMARK_ = (function keechma$controller$is_running_QMARK_(this$){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$is_running_QMARK_$arity$1 == null)))){
return this$.keechma$controller$IController$is_running_QMARK_$arity$1(this$);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.is_running_QMARK_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$);
} else {
var m__25898__auto____$1 = (keechma.controller.is_running_QMARK_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IController.is-running?",this$);
}
}
}
});

/**
 * Redirects the page to the URL based on the params.
 */
keechma.controller.redirect = (function keechma$controller$redirect(this$,params){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$redirect$arity$2 == null)))){
return this$.keechma$controller$IController$redirect$arity$2(this$,params);
} else {
var x__25897__auto__ = (((this$ == null))?null:this$);
var m__25898__auto__ = (keechma.controller.redirect[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,this$,params);
} else {
var m__25898__auto____$1 = (keechma.controller.redirect["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IController.redirect",this$);
}
}
}
});

(keechma.controller.IController["_"] = true);

(keechma.controller.params["_"] = (function (_,route_params){
return route_params;
}));

(keechma.controller.start["_"] = (function (_,params,app_db){
return app_db;
}));

(keechma.controller.wake["_"] = (function (_,params,app_db){
return app_db;
}));

(keechma.controller.stop["_"] = (function (_,params,app_db){
return app_db;
}));

(keechma.controller.handler["_"] = (function (_,___$1,___$2,___$3){
return null;
}));

(keechma.controller.ssr_handler["_"] = (function (_,___$1,___$2,___$3,___$4){
return keechma.controller.not_implemented;
}));

(keechma.controller.context["_"] = (function() {
var G__27706 = null;
var G__27706__1 = (function (this$){
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(this$);
});
var G__27706__2 = (function (this$,key){
var key_vec = ((cljs.core.vector_QMARK_.call(null,key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.get_in.call(null,this$,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),key_vec));
});
G__27706 = function(this$,key){
switch(arguments.length){
case 1:
return G__27706__1.call(this,this$);
case 2:
return G__27706__2.call(this,this$,key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27706.cljs$core$IFn$_invoke$arity$1 = G__27706__1;
G__27706.cljs$core$IFn$_invoke$arity$2 = G__27706__2;
return G__27706;
})()
);

(keechma.controller.report["_"] = (function() {
var G__27707 = null;
var G__27707__4 = (function (this$,direction,name,payload){
return keechma.controller.report.call(null,this$,direction,name,payload,new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__27707__5 = (function (this$,direction,name,payload,severity){
var reporter = (function (){var or__25229__auto__ = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return ((function (or__25229__auto__){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6){
return null;
});
;})(or__25229__auto__))
}
})();
var topic = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this$);
return reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),direction,topic,name,payload,severity);
});
G__27707 = function(this$,direction,name,payload,severity){
switch(arguments.length){
case 4:
return G__27707__4.call(this,this$,direction,name,payload);
case 5:
return G__27707__5.call(this,this$,direction,name,payload,severity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27707.cljs$core$IFn$_invoke$arity$4 = G__27707__4;
G__27707.cljs$core$IFn$_invoke$arity$5 = G__27707__5;
return G__27707;
})()
);

(keechma.controller.execute["_"] = (function() {
var G__27708 = null;
var G__27708__2 = (function (this$,command_name){
return keechma.controller.execute.call(null,this$,command_name,null);
});
var G__27708__3 = (function (this$,command_name,args){
keechma.controller.report.call(null,this$,new cljs.core.Keyword(null,"in","in",-1531184865),command_name,args);

return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args], null));
});
G__27708 = function(this$,command_name,args){
switch(arguments.length){
case 2:
return G__27708__2.call(this,this$,command_name);
case 3:
return G__27708__3.call(this,this$,command_name,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27708.cljs$core$IFn$_invoke$arity$2 = G__27708__2;
G__27708.cljs$core$IFn$_invoke$arity$3 = G__27708__3;
return G__27708;
})()
);

(keechma.controller.send_command["_"] = (function() {
var G__27709 = null;
var G__27709__2 = (function (this$,command_name){
return keechma.controller.send_command.call(null,this$,command_name,null);
});
var G__27709__3 = (function (this$,command_name,args){
var out_chan = new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(this$);
keechma.controller.report.call(null,this$,new cljs.core.Keyword(null,"out","out",-910545517),command_name,args);

cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args], null));

return this$;
});
G__27709 = function(this$,command_name,args){
switch(arguments.length){
case 2:
return G__27709__2.call(this,this$,command_name);
case 3:
return G__27709__3.call(this,this$,command_name,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27709.cljs$core$IFn$_invoke$arity$2 = G__27709__2;
G__27709.cljs$core$IFn$_invoke$arity$3 = G__27709__3;
return G__27709;
})()
);

(keechma.controller.is_running_QMARK_["_"] = (function (this$){
return cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(this$).call(null));
}));

(keechma.controller.redirect["_"] = (function (this$,params){
return new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(this$).call(null,params);
}));
/**
 * Helper function to dispatch commands from the `handler` function.
 * 
 *   Most of the time, handler function will just dispatch the commands
 *   to other functions. This functions provides a shortcut for that case.
 * 
 *   ```clojure
 *   (defrecord Controller []
 *  IController
 *  (handler [_ app-db-atom in-chan _]
 *    (dispatcher app-db-atom in-chan {:command-name some-fn})))
 *   ```
 */
keechma.controller.dispatcher = (function keechma$controller$dispatcher(app_db_atom,in_chan,actions){
var c__27297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27297__auto__){
return (function (){
var f__27298__auto__ = (function (){var switch__27276__auto__ = ((function (c__27297__auto__){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (7))){
var inst_27759 = (state_27775[(7)]);
var inst_27766 = (state_27775[(2)]);
var state_27775__$1 = (function (){var statearr_27777 = state_27775;
(statearr_27777[(8)] = inst_27766);

return statearr_27777;
})();
if(cljs.core.truth_(inst_27759)){
var statearr_27778_27796 = state_27775__$1;
(statearr_27778_27796[(1)] = (8));

} else {
var statearr_27779_27797 = state_27775__$1;
(statearr_27779_27797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (1))){
var state_27775__$1 = state_27775;
var statearr_27780_27798 = state_27775__$1;
(statearr_27780_27798[(2)] = null);

(statearr_27780_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (4))){
var inst_27761 = (state_27775[(9)]);
var inst_27759 = (state_27775[(7)]);
var inst_27758 = (state_27775[(2)]);
var inst_27759__$1 = cljs.core.nth.call(null,inst_27758,(0),null);
var inst_27760 = cljs.core.nth.call(null,inst_27758,(1),null);
var inst_27761__$1 = cljs.core.get.call(null,actions,inst_27759__$1);
var state_27775__$1 = (function (){var statearr_27781 = state_27775;
(statearr_27781[(10)] = inst_27760);

(statearr_27781[(9)] = inst_27761__$1);

(statearr_27781[(7)] = inst_27759__$1);

return statearr_27781;
})();
if(cljs.core.truth_(inst_27761__$1)){
var statearr_27782_27799 = state_27775__$1;
(statearr_27782_27799[(1)] = (5));

} else {
var statearr_27783_27800 = state_27775__$1;
(statearr_27783_27800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (6))){
var state_27775__$1 = state_27775;
var statearr_27784_27801 = state_27775__$1;
(statearr_27784_27801[(2)] = null);

(statearr_27784_27801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (3))){
var inst_27773 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27775__$1,inst_27773);
} else {
if((state_val_27776 === (2))){
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(4),in_chan);
} else {
if((state_val_27776 === (9))){
var state_27775__$1 = state_27775;
var statearr_27785_27802 = state_27775__$1;
(statearr_27785_27802[(2)] = null);

(statearr_27785_27802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (5))){
var inst_27760 = (state_27775[(10)]);
var inst_27761 = (state_27775[(9)]);
var inst_27763 = inst_27761.call(null,app_db_atom,inst_27760);
var state_27775__$1 = state_27775;
var statearr_27786_27803 = state_27775__$1;
(statearr_27786_27803[(2)] = inst_27763);

(statearr_27786_27803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (10))){
var inst_27771 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27787_27804 = state_27775__$1;
(statearr_27787_27804[(2)] = inst_27771);

(statearr_27787_27804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (8))){
var state_27775__$1 = state_27775;
var statearr_27788_27805 = state_27775__$1;
(statearr_27788_27805[(2)] = null);

(statearr_27788_27805[(1)] = (2));


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
});})(c__27297__auto__))
;
return ((function (switch__27276__auto__,c__27297__auto__){
return (function() {
var keechma$controller$dispatcher_$_state_machine__27277__auto__ = null;
var keechma$controller$dispatcher_$_state_machine__27277__auto____0 = (function (){
var statearr_27792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27792[(0)] = keechma$controller$dispatcher_$_state_machine__27277__auto__);

(statearr_27792[(1)] = (1));

return statearr_27792;
});
var keechma$controller$dispatcher_$_state_machine__27277__auto____1 = (function (state_27775){
while(true){
var ret_value__27278__auto__ = (function (){try{while(true){
var result__27279__auto__ = switch__27276__auto__.call(null,state_27775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27279__auto__;
}
break;
}
}catch (e27793){if((e27793 instanceof Object)){
var ex__27280__auto__ = e27793;
var statearr_27794_27806 = state_27775;
(statearr_27794_27806[(5)] = ex__27280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27807 = state_27775;
state_27775 = G__27807;
continue;
} else {
return ret_value__27278__auto__;
}
break;
}
});
keechma$controller$dispatcher_$_state_machine__27277__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return keechma$controller$dispatcher_$_state_machine__27277__auto____0.call(this);
case 1:
return keechma$controller$dispatcher_$_state_machine__27277__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller$dispatcher_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller$dispatcher_$_state_machine__27277__auto____0;
keechma$controller$dispatcher_$_state_machine__27277__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller$dispatcher_$_state_machine__27277__auto____1;
return keechma$controller$dispatcher_$_state_machine__27277__auto__;
})()
;})(switch__27276__auto__,c__27297__auto__))
})();
var state__27299__auto__ = (function (){var statearr_27795 = f__27298__auto__.call(null);
(statearr_27795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27297__auto__);

return statearr_27795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27299__auto__);
});})(c__27297__auto__))
);

return c__27297__auto__;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.controller.SerializedController = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25856__auto__,k__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
return this__25856__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25857__auto__,null);
});

keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25858__auto__,k27809,else__25859__auto__){
var self__ = this;
var this__25858__auto____$1 = this;
var G__27811 = (((k27809 instanceof cljs.core.Keyword))?k27809.fqn:null);
switch (G__27811) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27809,else__25859__auto__);

}
});

keechma.controller.SerializedController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25870__auto__,writer__25871__auto__,opts__25872__auto__){
var self__ = this;
var this__25870__auto____$1 = this;
var pr_pair__25873__auto__ = ((function (this__25870__auto____$1){
return (function (keyval__25874__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,cljs.core.pr_writer,""," ","",opts__25872__auto__,keyval__25874__auto__);
});})(this__25870__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25871__auto__,pr_pair__25873__auto__,"#keechma.controller.SerializedController{",", ","}",opts__25872__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

keechma.controller.SerializedController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27808){
var self__ = this;
var G__27808__$1 = this;
return (new cljs.core.RecordIter((0),G__27808__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.controller.SerializedController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25854__auto__){
var self__ = this;
var this__25854__auto____$1 = this;
return self__.__meta;
});

keechma.controller.SerializedController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25850__auto__){
var self__ = this;
var this__25850__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25860__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25851__auto__){
var self__ = this;
var this__25851__auto____$1 = this;
var h__25669__auto__ = self__.__hash;
if(!((h__25669__auto__ == null))){
return h__25669__auto__;
} else {
var h__25669__auto____$1 = cljs.core.hash_imap.call(null,this__25851__auto____$1);
self__.__hash = h__25669__auto____$1;

return h__25669__auto____$1;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25852__auto__,other__25853__auto__){
var self__ = this;
var this__25852__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25217__auto__ = other__25853__auto__;
if(cljs.core.truth_(and__25217__auto__)){
return ((this__25852__auto____$1.constructor === other__25853__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__25852__auto____$1,other__25853__auto__));
} else {
return and__25217__auto__;
}
})())){
return true;
} else {
return false;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25865__auto__,k__25866__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__25866__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25865__auto____$1),self__.__meta),k__25866__auto__);
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25866__auto__)),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25863__auto__,k__25864__auto__,G__27808){
var self__ = this;
var this__25863__auto____$1 = this;
var pred__27812 = cljs.core.keyword_identical_QMARK_;
var expr__27813 = k__25864__auto__;
if(cljs.core.truth_(pred__27812.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__27813))){
return (new keechma.controller.SerializedController(G__27808,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25864__auto__,G__27808),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25868__auto__){
var self__ = this;
var this__25868__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25855__auto__,G__27808){
var self__ = this;
var this__25855__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,G__27808,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25861__auto__,entry__25862__auto__){
var self__ = this;
var this__25861__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25862__auto__)){
return this__25861__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25862__auto__,(0)),cljs.core._nth.call(null,entry__25862__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25861__auto____$1,entry__25862__auto__);
}
});

keechma.controller.SerializedController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

keechma.controller.SerializedController.cljs$lang$type = true;

keechma.controller.SerializedController.cljs$lang$ctorPrSeq = (function (this__25890__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.controller/SerializedController");
});

keechma.controller.SerializedController.cljs$lang$ctorPrWriter = (function (this__25890__auto__,writer__25891__auto__){
return cljs.core._write.call(null,writer__25891__auto__,"keechma.controller/SerializedController");
});

keechma.controller.__GT_SerializedController = (function keechma$controller$__GT_SerializedController(params){
return (new keechma.controller.SerializedController(params,null,null,null));
});

keechma.controller.map__GT_SerializedController = (function keechma$controller$map__GT_SerializedController(G__27810){
return (new keechma.controller.SerializedController(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__27810),null,cljs.core.dissoc.call(null,G__27810,new cljs.core.Keyword(null,"params","params",710516235)),null));
});


//# sourceMappingURL=controller.js.map?rel=1488782229767