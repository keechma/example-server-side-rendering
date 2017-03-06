// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30025 = [];
var len__26342__auto___30031 = arguments.length;
var i__26343__auto___30032 = (0);
while(true){
if((i__26343__auto___30032 < len__26342__auto___30031)){
args30025.push((arguments[i__26343__auto___30032]));

var G__30033 = (i__26343__auto___30032 + (1));
i__26343__auto___30032 = G__30033;
continue;
} else {
}
break;
}

var G__30027 = args30025.length;
switch (G__30027) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30025.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30028 = (function (f,blockable,meta30029){
this.f = f;
this.blockable = blockable;
this.meta30029 = meta30029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30030,meta30029__$1){
var self__ = this;
var _30030__$1 = this;
return (new cljs.core.async.t_cljs$core$async30028(self__.f,self__.blockable,meta30029__$1));
});

cljs.core.async.t_cljs$core$async30028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30030){
var self__ = this;
var _30030__$1 = this;
return self__.meta30029;
});

cljs.core.async.t_cljs$core$async30028.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30029","meta30029",400373047,null)], null);
});

cljs.core.async.t_cljs$core$async30028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30028";

cljs.core.async.t_cljs$core$async30028.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async30028");
});

cljs.core.async.__GT_t_cljs$core$async30028 = (function cljs$core$async$__GT_t_cljs$core$async30028(f__$1,blockable__$1,meta30029){
return (new cljs.core.async.t_cljs$core$async30028(f__$1,blockable__$1,meta30029));
});

}

return (new cljs.core.async.t_cljs$core$async30028(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30037 = [];
var len__26342__auto___30040 = arguments.length;
var i__26343__auto___30041 = (0);
while(true){
if((i__26343__auto___30041 < len__26342__auto___30040)){
args30037.push((arguments[i__26343__auto___30041]));

var G__30042 = (i__26343__auto___30041 + (1));
i__26343__auto___30041 = G__30042;
continue;
} else {
}
break;
}

var G__30039 = args30037.length;
switch (G__30039) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30037.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30044 = [];
var len__26342__auto___30047 = arguments.length;
var i__26343__auto___30048 = (0);
while(true){
if((i__26343__auto___30048 < len__26342__auto___30047)){
args30044.push((arguments[i__26343__auto___30048]));

var G__30049 = (i__26343__auto___30048 + (1));
i__26343__auto___30048 = G__30049;
continue;
} else {
}
break;
}

var G__30046 = args30044.length;
switch (G__30046) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30044.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30051 = [];
var len__26342__auto___30054 = arguments.length;
var i__26343__auto___30055 = (0);
while(true){
if((i__26343__auto___30055 < len__26342__auto___30054)){
args30051.push((arguments[i__26343__auto___30055]));

var G__30056 = (i__26343__auto___30055 + (1));
i__26343__auto___30055 = G__30056;
continue;
} else {
}
break;
}

var G__30053 = args30051.length;
switch (G__30053) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30051.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30058 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30058);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30058,ret){
return (function (){
return fn1.call(null,val_30058);
});})(val_30058,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30059 = [];
var len__26342__auto___30062 = arguments.length;
var i__26343__auto___30063 = (0);
while(true){
if((i__26343__auto___30063 < len__26342__auto___30062)){
args30059.push((arguments[i__26343__auto___30063]));

var G__30064 = (i__26343__auto___30063 + (1));
i__26343__auto___30063 = G__30064;
continue;
} else {
}
break;
}

var G__30061 = args30059.length;
switch (G__30061) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30059.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26152__auto___30066 = n;
var x_30067 = (0);
while(true){
if((x_30067 < n__26152__auto___30066)){
(a[x_30067] = (0));

var G__30068 = (x_30067 + (1));
x_30067 = G__30068;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30069 = (i + (1));
i = G__30069;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30073 = (function (flag,meta30074){
this.flag = flag;
this.meta30074 = meta30074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30075,meta30074__$1){
var self__ = this;
var _30075__$1 = this;
return (new cljs.core.async.t_cljs$core$async30073(self__.flag,meta30074__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30075){
var self__ = this;
var _30075__$1 = this;
return self__.meta30074;
});})(flag))
;

cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30073.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30074","meta30074",-697457690,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30073";

cljs.core.async.t_cljs$core$async30073.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async30073");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30073 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30073(flag__$1,meta30074){
return (new cljs.core.async.t_cljs$core$async30073(flag__$1,meta30074));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30073(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30079 = (function (flag,cb,meta30080){
this.flag = flag;
this.cb = cb;
this.meta30080 = meta30080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30081,meta30080__$1){
var self__ = this;
var _30081__$1 = this;
return (new cljs.core.async.t_cljs$core$async30079(self__.flag,self__.cb,meta30080__$1));
});

cljs.core.async.t_cljs$core$async30079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30081){
var self__ = this;
var _30081__$1 = this;
return self__.meta30080;
});

cljs.core.async.t_cljs$core$async30079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30080","meta30080",809149468,null)], null);
});

cljs.core.async.t_cljs$core$async30079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30079";

cljs.core.async.t_cljs$core$async30079.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async30079");
});

cljs.core.async.__GT_t_cljs$core$async30079 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30079(flag__$1,cb__$1,meta30080){
return (new cljs.core.async.t_cljs$core$async30079(flag__$1,cb__$1,meta30080));
});

}

return (new cljs.core.async.t_cljs$core$async30079(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30082_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30082_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30083_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30083_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25229__auto__ = wport;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30084 = (i + (1));
i = G__30084;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25229__auto__ = ret;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25217__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25217__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25217__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26349__auto__ = [];
var len__26342__auto___30090 = arguments.length;
var i__26343__auto___30091 = (0);
while(true){
if((i__26343__auto___30091 < len__26342__auto___30090)){
args__26349__auto__.push((arguments[i__26343__auto___30091]));

var G__30092 = (i__26343__auto___30091 + (1));
i__26343__auto___30091 = G__30092;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((1) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26350__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30087){
var map__30088 = p__30087;
var map__30088__$1 = ((((!((map__30088 == null)))?((((map__30088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30088):map__30088);
var opts = map__30088__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30085){
var G__30086 = cljs.core.first.call(null,seq30085);
var seq30085__$1 = cljs.core.next.call(null,seq30085);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30086,seq30085__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30093 = [];
var len__26342__auto___30143 = arguments.length;
var i__26343__auto___30144 = (0);
while(true){
if((i__26343__auto___30144 < len__26342__auto___30143)){
args30093.push((arguments[i__26343__auto___30144]));

var G__30145 = (i__26343__auto___30144 + (1));
i__26343__auto___30144 = G__30145;
continue;
} else {
}
break;
}

var G__30095 = args30093.length;
switch (G__30095) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30093.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29980__auto___30147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___30147){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___30147){
return (function (state_30119){
var state_val_30120 = (state_30119[(1)]);
if((state_val_30120 === (7))){
var inst_30115 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30121_30148 = state_30119__$1;
(statearr_30121_30148[(2)] = inst_30115);

(statearr_30121_30148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (1))){
var state_30119__$1 = state_30119;
var statearr_30122_30149 = state_30119__$1;
(statearr_30122_30149[(2)] = null);

(statearr_30122_30149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (4))){
var inst_30098 = (state_30119[(7)]);
var inst_30098__$1 = (state_30119[(2)]);
var inst_30099 = (inst_30098__$1 == null);
var state_30119__$1 = (function (){var statearr_30123 = state_30119;
(statearr_30123[(7)] = inst_30098__$1);

return statearr_30123;
})();
if(cljs.core.truth_(inst_30099)){
var statearr_30124_30150 = state_30119__$1;
(statearr_30124_30150[(1)] = (5));

} else {
var statearr_30125_30151 = state_30119__$1;
(statearr_30125_30151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (13))){
var state_30119__$1 = state_30119;
var statearr_30126_30152 = state_30119__$1;
(statearr_30126_30152[(2)] = null);

(statearr_30126_30152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (6))){
var inst_30098 = (state_30119[(7)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30119__$1,(11),to,inst_30098);
} else {
if((state_val_30120 === (3))){
var inst_30117 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else {
if((state_val_30120 === (12))){
var state_30119__$1 = state_30119;
var statearr_30127_30153 = state_30119__$1;
(statearr_30127_30153[(2)] = null);

(statearr_30127_30153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (2))){
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(4),from);
} else {
if((state_val_30120 === (11))){
var inst_30108 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
if(cljs.core.truth_(inst_30108)){
var statearr_30128_30154 = state_30119__$1;
(statearr_30128_30154[(1)] = (12));

} else {
var statearr_30129_30155 = state_30119__$1;
(statearr_30129_30155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (9))){
var state_30119__$1 = state_30119;
var statearr_30130_30156 = state_30119__$1;
(statearr_30130_30156[(2)] = null);

(statearr_30130_30156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (5))){
var state_30119__$1 = state_30119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30131_30157 = state_30119__$1;
(statearr_30131_30157[(1)] = (8));

} else {
var statearr_30132_30158 = state_30119__$1;
(statearr_30132_30158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (14))){
var inst_30113 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30133_30159 = state_30119__$1;
(statearr_30133_30159[(2)] = inst_30113);

(statearr_30133_30159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (10))){
var inst_30105 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30134_30160 = state_30119__$1;
(statearr_30134_30160[(2)] = inst_30105);

(statearr_30134_30160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (8))){
var inst_30102 = cljs.core.async.close_BANG_.call(null,to);
var state_30119__$1 = state_30119;
var statearr_30135_30161 = state_30119__$1;
(statearr_30135_30161[(2)] = inst_30102);

(statearr_30135_30161[(1)] = (10));


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
});})(c__29980__auto___30147))
;
return ((function (switch__29868__auto__,c__29980__auto___30147){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_30139 = [null,null,null,null,null,null,null,null];
(statearr_30139[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_30139[(1)] = (1));

return statearr_30139;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_30119){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30140){if((e30140 instanceof Object)){
var ex__29872__auto__ = e30140;
var statearr_30141_30162 = state_30119;
(statearr_30141_30162[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30163 = state_30119;
state_30119 = G__30163;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___30147))
})();
var state__29982__auto__ = (function (){var statearr_30142 = f__29981__auto__.call(null);
(statearr_30142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___30147);

return statearr_30142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___30147))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30351){
var vec__30352 = p__30351;
var v = cljs.core.nth.call(null,vec__30352,(0),null);
var p = cljs.core.nth.call(null,vec__30352,(1),null);
var job = vec__30352;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29980__auto___30538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___30538,res,vec__30352,v,p,job,jobs,results){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___30538,res,vec__30352,v,p,job,jobs,results){
return (function (state_30359){
var state_val_30360 = (state_30359[(1)]);
if((state_val_30360 === (1))){
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30359__$1,(2),res,v);
} else {
if((state_val_30360 === (2))){
var inst_30356 = (state_30359[(2)]);
var inst_30357 = cljs.core.async.close_BANG_.call(null,res);
var state_30359__$1 = (function (){var statearr_30361 = state_30359;
(statearr_30361[(7)] = inst_30356);

return statearr_30361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30359__$1,inst_30357);
} else {
return null;
}
}
});})(c__29980__auto___30538,res,vec__30352,v,p,job,jobs,results))
;
return ((function (switch__29868__auto__,c__29980__auto___30538,res,vec__30352,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30365 = [null,null,null,null,null,null,null,null];
(statearr_30365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30365[(1)] = (1));

return statearr_30365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30359){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30366){if((e30366 instanceof Object)){
var ex__29872__auto__ = e30366;
var statearr_30367_30539 = state_30359;
(statearr_30367_30539[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30540 = state_30359;
state_30359 = G__30540;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___30538,res,vec__30352,v,p,job,jobs,results))
})();
var state__29982__auto__ = (function (){var statearr_30368 = f__29981__auto__.call(null);
(statearr_30368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___30538);

return statearr_30368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___30538,res,vec__30352,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30369){
var vec__30370 = p__30369;
var v = cljs.core.nth.call(null,vec__30370,(0),null);
var p = cljs.core.nth.call(null,vec__30370,(1),null);
var job = vec__30370;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26152__auto___30541 = n;
var __30542 = (0);
while(true){
if((__30542 < n__26152__auto___30541)){
var G__30373_30543 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30373_30543) {
case "compute":
var c__29980__auto___30545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30542,c__29980__auto___30545,G__30373_30543,n__26152__auto___30541,jobs,results,process,async){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (__30542,c__29980__auto___30545,G__30373_30543,n__26152__auto___30541,jobs,results,process,async){
return (function (state_30386){
var state_val_30387 = (state_30386[(1)]);
if((state_val_30387 === (1))){
var state_30386__$1 = state_30386;
var statearr_30388_30546 = state_30386__$1;
(statearr_30388_30546[(2)] = null);

(statearr_30388_30546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (2))){
var state_30386__$1 = state_30386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30386__$1,(4),jobs);
} else {
if((state_val_30387 === (3))){
var inst_30384 = (state_30386[(2)]);
var state_30386__$1 = state_30386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30386__$1,inst_30384);
} else {
if((state_val_30387 === (4))){
var inst_30376 = (state_30386[(2)]);
var inst_30377 = process.call(null,inst_30376);
var state_30386__$1 = state_30386;
if(cljs.core.truth_(inst_30377)){
var statearr_30389_30547 = state_30386__$1;
(statearr_30389_30547[(1)] = (5));

} else {
var statearr_30390_30548 = state_30386__$1;
(statearr_30390_30548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (5))){
var state_30386__$1 = state_30386;
var statearr_30391_30549 = state_30386__$1;
(statearr_30391_30549[(2)] = null);

(statearr_30391_30549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (6))){
var state_30386__$1 = state_30386;
var statearr_30392_30550 = state_30386__$1;
(statearr_30392_30550[(2)] = null);

(statearr_30392_30550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (7))){
var inst_30382 = (state_30386[(2)]);
var state_30386__$1 = state_30386;
var statearr_30393_30551 = state_30386__$1;
(statearr_30393_30551[(2)] = inst_30382);

(statearr_30393_30551[(1)] = (3));


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
});})(__30542,c__29980__auto___30545,G__30373_30543,n__26152__auto___30541,jobs,results,process,async))
;
return ((function (__30542,switch__29868__auto__,c__29980__auto___30545,G__30373_30543,n__26152__auto___30541,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30397 = [null,null,null,null,null,null,null];
(statearr_30397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30397[(1)] = (1));

return statearr_30397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30386){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30398){if((e30398 instanceof Object)){
var ex__29872__auto__ = e30398;
var statearr_30399_30552 = state_30386;
(statearr_30399_30552[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30553 = state_30386;
state_30386 = G__30553;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
;})(__30542,switch__29868__auto__,c__29980__auto___30545,G__30373_30543,n__26152__auto___30541,jobs,results,process,async))
})();
var state__29982__auto__ = (function (){var statearr_30400 = f__29981__auto__.call(null);
(statearr_30400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___30545);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(__30542,c__29980__auto___30545,G__30373_30543,n__26152__auto___30541,jobs,results,process,async))
);


break;
case "async":
var c__29980__auto___30554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30542,c__29980__auto___30554,G__30373_30543,n__26152__auto___30541,jobs,results,process,async){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (__30542,c__29980__auto___30554,G__30373_30543,n__26152__auto___30541,jobs,results,process,async){
return (function (state_30413){
var state_val_30414 = (state_30413[(1)]);
if((state_val_30414 === (1))){
var state_30413__$1 = state_30413;
var statearr_30415_30555 = state_30413__$1;
(statearr_30415_30555[(2)] = null);

(statearr_30415_30555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (2))){
var state_30413__$1 = state_30413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30413__$1,(4),jobs);
} else {
if((state_val_30414 === (3))){
var inst_30411 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30413__$1,inst_30411);
} else {
if((state_val_30414 === (4))){
var inst_30403 = (state_30413[(2)]);
var inst_30404 = async.call(null,inst_30403);
var state_30413__$1 = state_30413;
if(cljs.core.truth_(inst_30404)){
var statearr_30416_30556 = state_30413__$1;
(statearr_30416_30556[(1)] = (5));

} else {
var statearr_30417_30557 = state_30413__$1;
(statearr_30417_30557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (5))){
var state_30413__$1 = state_30413;
var statearr_30418_30558 = state_30413__$1;
(statearr_30418_30558[(2)] = null);

(statearr_30418_30558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (6))){
var state_30413__$1 = state_30413;
var statearr_30419_30559 = state_30413__$1;
(statearr_30419_30559[(2)] = null);

(statearr_30419_30559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (7))){
var inst_30409 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
var statearr_30420_30560 = state_30413__$1;
(statearr_30420_30560[(2)] = inst_30409);

(statearr_30420_30560[(1)] = (3));


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
});})(__30542,c__29980__auto___30554,G__30373_30543,n__26152__auto___30541,jobs,results,process,async))
;
return ((function (__30542,switch__29868__auto__,c__29980__auto___30554,G__30373_30543,n__26152__auto___30541,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30424 = [null,null,null,null,null,null,null];
(statearr_30424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30424[(1)] = (1));

return statearr_30424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30413){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object)){
var ex__29872__auto__ = e30425;
var statearr_30426_30561 = state_30413;
(statearr_30426_30561[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30562 = state_30413;
state_30413 = G__30562;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
;})(__30542,switch__29868__auto__,c__29980__auto___30554,G__30373_30543,n__26152__auto___30541,jobs,results,process,async))
})();
var state__29982__auto__ = (function (){var statearr_30427 = f__29981__auto__.call(null);
(statearr_30427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___30554);

return statearr_30427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(__30542,c__29980__auto___30554,G__30373_30543,n__26152__auto___30541,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__30563 = (__30542 + (1));
__30542 = G__30563;
continue;
} else {
}
break;
}

var c__29980__auto___30564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___30564,jobs,results,process,async){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___30564,jobs,results,process,async){
return (function (state_30449){
var state_val_30450 = (state_30449[(1)]);
if((state_val_30450 === (1))){
var state_30449__$1 = state_30449;
var statearr_30451_30565 = state_30449__$1;
(statearr_30451_30565[(2)] = null);

(statearr_30451_30565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (2))){
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30449__$1,(4),from);
} else {
if((state_val_30450 === (3))){
var inst_30447 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30449__$1,inst_30447);
} else {
if((state_val_30450 === (4))){
var inst_30430 = (state_30449[(7)]);
var inst_30430__$1 = (state_30449[(2)]);
var inst_30431 = (inst_30430__$1 == null);
var state_30449__$1 = (function (){var statearr_30452 = state_30449;
(statearr_30452[(7)] = inst_30430__$1);

return statearr_30452;
})();
if(cljs.core.truth_(inst_30431)){
var statearr_30453_30566 = state_30449__$1;
(statearr_30453_30566[(1)] = (5));

} else {
var statearr_30454_30567 = state_30449__$1;
(statearr_30454_30567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (5))){
var inst_30433 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30449__$1 = state_30449;
var statearr_30455_30568 = state_30449__$1;
(statearr_30455_30568[(2)] = inst_30433);

(statearr_30455_30568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (6))){
var inst_30435 = (state_30449[(8)]);
var inst_30430 = (state_30449[(7)]);
var inst_30435__$1 = cljs.core.async.chan.call(null,(1));
var inst_30436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30437 = [inst_30430,inst_30435__$1];
var inst_30438 = (new cljs.core.PersistentVector(null,2,(5),inst_30436,inst_30437,null));
var state_30449__$1 = (function (){var statearr_30456 = state_30449;
(statearr_30456[(8)] = inst_30435__$1);

return statearr_30456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30449__$1,(8),jobs,inst_30438);
} else {
if((state_val_30450 === (7))){
var inst_30445 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30457_30569 = state_30449__$1;
(statearr_30457_30569[(2)] = inst_30445);

(statearr_30457_30569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (8))){
var inst_30435 = (state_30449[(8)]);
var inst_30440 = (state_30449[(2)]);
var state_30449__$1 = (function (){var statearr_30458 = state_30449;
(statearr_30458[(9)] = inst_30440);

return statearr_30458;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30449__$1,(9),results,inst_30435);
} else {
if((state_val_30450 === (9))){
var inst_30442 = (state_30449[(2)]);
var state_30449__$1 = (function (){var statearr_30459 = state_30449;
(statearr_30459[(10)] = inst_30442);

return statearr_30459;
})();
var statearr_30460_30570 = state_30449__$1;
(statearr_30460_30570[(2)] = null);

(statearr_30460_30570[(1)] = (2));


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
});})(c__29980__auto___30564,jobs,results,process,async))
;
return ((function (switch__29868__auto__,c__29980__auto___30564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30464[(1)] = (1));

return statearr_30464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30449){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30465){if((e30465 instanceof Object)){
var ex__29872__auto__ = e30465;
var statearr_30466_30571 = state_30449;
(statearr_30466_30571[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30572 = state_30449;
state_30449 = G__30572;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___30564,jobs,results,process,async))
})();
var state__29982__auto__ = (function (){var statearr_30467 = f__29981__auto__.call(null);
(statearr_30467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___30564);

return statearr_30467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___30564,jobs,results,process,async))
);


var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__,jobs,results,process,async){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__,jobs,results,process,async){
return (function (state_30505){
var state_val_30506 = (state_30505[(1)]);
if((state_val_30506 === (7))){
var inst_30501 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30507_30573 = state_30505__$1;
(statearr_30507_30573[(2)] = inst_30501);

(statearr_30507_30573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (20))){
var state_30505__$1 = state_30505;
var statearr_30508_30574 = state_30505__$1;
(statearr_30508_30574[(2)] = null);

(statearr_30508_30574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (1))){
var state_30505__$1 = state_30505;
var statearr_30509_30575 = state_30505__$1;
(statearr_30509_30575[(2)] = null);

(statearr_30509_30575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (4))){
var inst_30470 = (state_30505[(7)]);
var inst_30470__$1 = (state_30505[(2)]);
var inst_30471 = (inst_30470__$1 == null);
var state_30505__$1 = (function (){var statearr_30510 = state_30505;
(statearr_30510[(7)] = inst_30470__$1);

return statearr_30510;
})();
if(cljs.core.truth_(inst_30471)){
var statearr_30511_30576 = state_30505__$1;
(statearr_30511_30576[(1)] = (5));

} else {
var statearr_30512_30577 = state_30505__$1;
(statearr_30512_30577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (15))){
var inst_30483 = (state_30505[(8)]);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30505__$1,(18),to,inst_30483);
} else {
if((state_val_30506 === (21))){
var inst_30496 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30513_30578 = state_30505__$1;
(statearr_30513_30578[(2)] = inst_30496);

(statearr_30513_30578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (13))){
var inst_30498 = (state_30505[(2)]);
var state_30505__$1 = (function (){var statearr_30514 = state_30505;
(statearr_30514[(9)] = inst_30498);

return statearr_30514;
})();
var statearr_30515_30579 = state_30505__$1;
(statearr_30515_30579[(2)] = null);

(statearr_30515_30579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (6))){
var inst_30470 = (state_30505[(7)]);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30505__$1,(11),inst_30470);
} else {
if((state_val_30506 === (17))){
var inst_30491 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30491)){
var statearr_30516_30580 = state_30505__$1;
(statearr_30516_30580[(1)] = (19));

} else {
var statearr_30517_30581 = state_30505__$1;
(statearr_30517_30581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (3))){
var inst_30503 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30505__$1,inst_30503);
} else {
if((state_val_30506 === (12))){
var inst_30480 = (state_30505[(10)]);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30505__$1,(14),inst_30480);
} else {
if((state_val_30506 === (2))){
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30505__$1,(4),results);
} else {
if((state_val_30506 === (19))){
var state_30505__$1 = state_30505;
var statearr_30518_30582 = state_30505__$1;
(statearr_30518_30582[(2)] = null);

(statearr_30518_30582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (11))){
var inst_30480 = (state_30505[(2)]);
var state_30505__$1 = (function (){var statearr_30519 = state_30505;
(statearr_30519[(10)] = inst_30480);

return statearr_30519;
})();
var statearr_30520_30583 = state_30505__$1;
(statearr_30520_30583[(2)] = null);

(statearr_30520_30583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (9))){
var state_30505__$1 = state_30505;
var statearr_30521_30584 = state_30505__$1;
(statearr_30521_30584[(2)] = null);

(statearr_30521_30584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (5))){
var state_30505__$1 = state_30505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30522_30585 = state_30505__$1;
(statearr_30522_30585[(1)] = (8));

} else {
var statearr_30523_30586 = state_30505__$1;
(statearr_30523_30586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (14))){
var inst_30485 = (state_30505[(11)]);
var inst_30483 = (state_30505[(8)]);
var inst_30483__$1 = (state_30505[(2)]);
var inst_30484 = (inst_30483__$1 == null);
var inst_30485__$1 = cljs.core.not.call(null,inst_30484);
var state_30505__$1 = (function (){var statearr_30524 = state_30505;
(statearr_30524[(11)] = inst_30485__$1);

(statearr_30524[(8)] = inst_30483__$1);

return statearr_30524;
})();
if(inst_30485__$1){
var statearr_30525_30587 = state_30505__$1;
(statearr_30525_30587[(1)] = (15));

} else {
var statearr_30526_30588 = state_30505__$1;
(statearr_30526_30588[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (16))){
var inst_30485 = (state_30505[(11)]);
var state_30505__$1 = state_30505;
var statearr_30527_30589 = state_30505__$1;
(statearr_30527_30589[(2)] = inst_30485);

(statearr_30527_30589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (10))){
var inst_30477 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30528_30590 = state_30505__$1;
(statearr_30528_30590[(2)] = inst_30477);

(statearr_30528_30590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (18))){
var inst_30488 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30529_30591 = state_30505__$1;
(statearr_30529_30591[(2)] = inst_30488);

(statearr_30529_30591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (8))){
var inst_30474 = cljs.core.async.close_BANG_.call(null,to);
var state_30505__$1 = state_30505;
var statearr_30530_30592 = state_30505__$1;
(statearr_30530_30592[(2)] = inst_30474);

(statearr_30530_30592[(1)] = (10));


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
});})(c__29980__auto__,jobs,results,process,async))
;
return ((function (switch__29868__auto__,c__29980__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_30534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__);

(statearr_30534[(1)] = (1));

return statearr_30534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1 = (function (state_30505){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30535){if((e30535 instanceof Object)){
var ex__29872__auto__ = e30535;
var statearr_30536_30593 = state_30505;
(statearr_30536_30593[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30594 = state_30505;
state_30505 = G__30594;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__ = function(state_30505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1.call(this,state_30505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__,jobs,results,process,async))
})();
var state__29982__auto__ = (function (){var statearr_30537 = f__29981__auto__.call(null);
(statearr_30537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__,jobs,results,process,async))
);

return c__29980__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30595 = [];
var len__26342__auto___30598 = arguments.length;
var i__26343__auto___30599 = (0);
while(true){
if((i__26343__auto___30599 < len__26342__auto___30598)){
args30595.push((arguments[i__26343__auto___30599]));

var G__30600 = (i__26343__auto___30599 + (1));
i__26343__auto___30599 = G__30600;
continue;
} else {
}
break;
}

var G__30597 = args30595.length;
switch (G__30597) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30595.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30602 = [];
var len__26342__auto___30605 = arguments.length;
var i__26343__auto___30606 = (0);
while(true){
if((i__26343__auto___30606 < len__26342__auto___30605)){
args30602.push((arguments[i__26343__auto___30606]));

var G__30607 = (i__26343__auto___30606 + (1));
i__26343__auto___30606 = G__30607;
continue;
} else {
}
break;
}

var G__30604 = args30602.length;
switch (G__30604) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30602.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30609 = [];
var len__26342__auto___30662 = arguments.length;
var i__26343__auto___30663 = (0);
while(true){
if((i__26343__auto___30663 < len__26342__auto___30662)){
args30609.push((arguments[i__26343__auto___30663]));

var G__30664 = (i__26343__auto___30663 + (1));
i__26343__auto___30663 = G__30664;
continue;
} else {
}
break;
}

var G__30611 = args30609.length;
switch (G__30611) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30609.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29980__auto___30666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___30666,tc,fc){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___30666,tc,fc){
return (function (state_30637){
var state_val_30638 = (state_30637[(1)]);
if((state_val_30638 === (7))){
var inst_30633 = (state_30637[(2)]);
var state_30637__$1 = state_30637;
var statearr_30639_30667 = state_30637__$1;
(statearr_30639_30667[(2)] = inst_30633);

(statearr_30639_30667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (1))){
var state_30637__$1 = state_30637;
var statearr_30640_30668 = state_30637__$1;
(statearr_30640_30668[(2)] = null);

(statearr_30640_30668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (4))){
var inst_30614 = (state_30637[(7)]);
var inst_30614__$1 = (state_30637[(2)]);
var inst_30615 = (inst_30614__$1 == null);
var state_30637__$1 = (function (){var statearr_30641 = state_30637;
(statearr_30641[(7)] = inst_30614__$1);

return statearr_30641;
})();
if(cljs.core.truth_(inst_30615)){
var statearr_30642_30669 = state_30637__$1;
(statearr_30642_30669[(1)] = (5));

} else {
var statearr_30643_30670 = state_30637__$1;
(statearr_30643_30670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (13))){
var state_30637__$1 = state_30637;
var statearr_30644_30671 = state_30637__$1;
(statearr_30644_30671[(2)] = null);

(statearr_30644_30671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (6))){
var inst_30614 = (state_30637[(7)]);
var inst_30620 = p.call(null,inst_30614);
var state_30637__$1 = state_30637;
if(cljs.core.truth_(inst_30620)){
var statearr_30645_30672 = state_30637__$1;
(statearr_30645_30672[(1)] = (9));

} else {
var statearr_30646_30673 = state_30637__$1;
(statearr_30646_30673[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (3))){
var inst_30635 = (state_30637[(2)]);
var state_30637__$1 = state_30637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30637__$1,inst_30635);
} else {
if((state_val_30638 === (12))){
var state_30637__$1 = state_30637;
var statearr_30647_30674 = state_30637__$1;
(statearr_30647_30674[(2)] = null);

(statearr_30647_30674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (2))){
var state_30637__$1 = state_30637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30637__$1,(4),ch);
} else {
if((state_val_30638 === (11))){
var inst_30614 = (state_30637[(7)]);
var inst_30624 = (state_30637[(2)]);
var state_30637__$1 = state_30637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30637__$1,(8),inst_30624,inst_30614);
} else {
if((state_val_30638 === (9))){
var state_30637__$1 = state_30637;
var statearr_30648_30675 = state_30637__$1;
(statearr_30648_30675[(2)] = tc);

(statearr_30648_30675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (5))){
var inst_30617 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30618 = cljs.core.async.close_BANG_.call(null,fc);
var state_30637__$1 = (function (){var statearr_30649 = state_30637;
(statearr_30649[(8)] = inst_30617);

return statearr_30649;
})();
var statearr_30650_30676 = state_30637__$1;
(statearr_30650_30676[(2)] = inst_30618);

(statearr_30650_30676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (14))){
var inst_30631 = (state_30637[(2)]);
var state_30637__$1 = state_30637;
var statearr_30651_30677 = state_30637__$1;
(statearr_30651_30677[(2)] = inst_30631);

(statearr_30651_30677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (10))){
var state_30637__$1 = state_30637;
var statearr_30652_30678 = state_30637__$1;
(statearr_30652_30678[(2)] = fc);

(statearr_30652_30678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (8))){
var inst_30626 = (state_30637[(2)]);
var state_30637__$1 = state_30637;
if(cljs.core.truth_(inst_30626)){
var statearr_30653_30679 = state_30637__$1;
(statearr_30653_30679[(1)] = (12));

} else {
var statearr_30654_30680 = state_30637__$1;
(statearr_30654_30680[(1)] = (13));

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
});})(c__29980__auto___30666,tc,fc))
;
return ((function (switch__29868__auto__,c__29980__auto___30666,tc,fc){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_30658 = [null,null,null,null,null,null,null,null,null];
(statearr_30658[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_30658[(1)] = (1));

return statearr_30658;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_30637){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30659){if((e30659 instanceof Object)){
var ex__29872__auto__ = e30659;
var statearr_30660_30681 = state_30637;
(statearr_30660_30681[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30682 = state_30637;
state_30637 = G__30682;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_30637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_30637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___30666,tc,fc))
})();
var state__29982__auto__ = (function (){var statearr_30661 = f__29981__auto__.call(null);
(statearr_30661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___30666);

return statearr_30661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___30666,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__){
return (function (state_30746){
var state_val_30747 = (state_30746[(1)]);
if((state_val_30747 === (7))){
var inst_30742 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30748_30769 = state_30746__$1;
(statearr_30748_30769[(2)] = inst_30742);

(statearr_30748_30769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (1))){
var inst_30726 = init;
var state_30746__$1 = (function (){var statearr_30749 = state_30746;
(statearr_30749[(7)] = inst_30726);

return statearr_30749;
})();
var statearr_30750_30770 = state_30746__$1;
(statearr_30750_30770[(2)] = null);

(statearr_30750_30770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (4))){
var inst_30729 = (state_30746[(8)]);
var inst_30729__$1 = (state_30746[(2)]);
var inst_30730 = (inst_30729__$1 == null);
var state_30746__$1 = (function (){var statearr_30751 = state_30746;
(statearr_30751[(8)] = inst_30729__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30730)){
var statearr_30752_30771 = state_30746__$1;
(statearr_30752_30771[(1)] = (5));

} else {
var statearr_30753_30772 = state_30746__$1;
(statearr_30753_30772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (6))){
var inst_30726 = (state_30746[(7)]);
var inst_30733 = (state_30746[(9)]);
var inst_30729 = (state_30746[(8)]);
var inst_30733__$1 = f.call(null,inst_30726,inst_30729);
var inst_30734 = cljs.core.reduced_QMARK_.call(null,inst_30733__$1);
var state_30746__$1 = (function (){var statearr_30754 = state_30746;
(statearr_30754[(9)] = inst_30733__$1);

return statearr_30754;
})();
if(inst_30734){
var statearr_30755_30773 = state_30746__$1;
(statearr_30755_30773[(1)] = (8));

} else {
var statearr_30756_30774 = state_30746__$1;
(statearr_30756_30774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (3))){
var inst_30744 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30746__$1,inst_30744);
} else {
if((state_val_30747 === (2))){
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30746__$1,(4),ch);
} else {
if((state_val_30747 === (9))){
var inst_30733 = (state_30746[(9)]);
var inst_30726 = inst_30733;
var state_30746__$1 = (function (){var statearr_30757 = state_30746;
(statearr_30757[(7)] = inst_30726);

return statearr_30757;
})();
var statearr_30758_30775 = state_30746__$1;
(statearr_30758_30775[(2)] = null);

(statearr_30758_30775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (5))){
var inst_30726 = (state_30746[(7)]);
var state_30746__$1 = state_30746;
var statearr_30759_30776 = state_30746__$1;
(statearr_30759_30776[(2)] = inst_30726);

(statearr_30759_30776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (10))){
var inst_30740 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30760_30777 = state_30746__$1;
(statearr_30760_30777[(2)] = inst_30740);

(statearr_30760_30777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (8))){
var inst_30733 = (state_30746[(9)]);
var inst_30736 = cljs.core.deref.call(null,inst_30733);
var state_30746__$1 = state_30746;
var statearr_30761_30778 = state_30746__$1;
(statearr_30761_30778[(2)] = inst_30736);

(statearr_30761_30778[(1)] = (10));


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
});})(c__29980__auto__))
;
return ((function (switch__29868__auto__,c__29980__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29869__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29869__auto____0 = (function (){
var statearr_30765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30765[(0)] = cljs$core$async$reduce_$_state_machine__29869__auto__);

(statearr_30765[(1)] = (1));

return statearr_30765;
});
var cljs$core$async$reduce_$_state_machine__29869__auto____1 = (function (state_30746){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30766){if((e30766 instanceof Object)){
var ex__29872__auto__ = e30766;
var statearr_30767_30779 = state_30746;
(statearr_30767_30779[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30780 = state_30746;
state_30746 = G__30780;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29869__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29869__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29869__auto____0;
cljs$core$async$reduce_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29869__auto____1;
return cljs$core$async$reduce_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__))
})();
var state__29982__auto__ = (function (){var statearr_30768 = f__29981__auto__.call(null);
(statearr_30768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_30768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__))
);

return c__29980__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30781 = [];
var len__26342__auto___30833 = arguments.length;
var i__26343__auto___30834 = (0);
while(true){
if((i__26343__auto___30834 < len__26342__auto___30833)){
args30781.push((arguments[i__26343__auto___30834]));

var G__30835 = (i__26343__auto___30834 + (1));
i__26343__auto___30834 = G__30835;
continue;
} else {
}
break;
}

var G__30783 = args30781.length;
switch (G__30783) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30781.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__){
return (function (state_30808){
var state_val_30809 = (state_30808[(1)]);
if((state_val_30809 === (7))){
var inst_30790 = (state_30808[(2)]);
var state_30808__$1 = state_30808;
var statearr_30810_30837 = state_30808__$1;
(statearr_30810_30837[(2)] = inst_30790);

(statearr_30810_30837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (1))){
var inst_30784 = cljs.core.seq.call(null,coll);
var inst_30785 = inst_30784;
var state_30808__$1 = (function (){var statearr_30811 = state_30808;
(statearr_30811[(7)] = inst_30785);

return statearr_30811;
})();
var statearr_30812_30838 = state_30808__$1;
(statearr_30812_30838[(2)] = null);

(statearr_30812_30838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (4))){
var inst_30785 = (state_30808[(7)]);
var inst_30788 = cljs.core.first.call(null,inst_30785);
var state_30808__$1 = state_30808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30808__$1,(7),ch,inst_30788);
} else {
if((state_val_30809 === (13))){
var inst_30802 = (state_30808[(2)]);
var state_30808__$1 = state_30808;
var statearr_30813_30839 = state_30808__$1;
(statearr_30813_30839[(2)] = inst_30802);

(statearr_30813_30839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (6))){
var inst_30793 = (state_30808[(2)]);
var state_30808__$1 = state_30808;
if(cljs.core.truth_(inst_30793)){
var statearr_30814_30840 = state_30808__$1;
(statearr_30814_30840[(1)] = (8));

} else {
var statearr_30815_30841 = state_30808__$1;
(statearr_30815_30841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (3))){
var inst_30806 = (state_30808[(2)]);
var state_30808__$1 = state_30808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30808__$1,inst_30806);
} else {
if((state_val_30809 === (12))){
var state_30808__$1 = state_30808;
var statearr_30816_30842 = state_30808__$1;
(statearr_30816_30842[(2)] = null);

(statearr_30816_30842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (2))){
var inst_30785 = (state_30808[(7)]);
var state_30808__$1 = state_30808;
if(cljs.core.truth_(inst_30785)){
var statearr_30817_30843 = state_30808__$1;
(statearr_30817_30843[(1)] = (4));

} else {
var statearr_30818_30844 = state_30808__$1;
(statearr_30818_30844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (11))){
var inst_30799 = cljs.core.async.close_BANG_.call(null,ch);
var state_30808__$1 = state_30808;
var statearr_30819_30845 = state_30808__$1;
(statearr_30819_30845[(2)] = inst_30799);

(statearr_30819_30845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (9))){
var state_30808__$1 = state_30808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30820_30846 = state_30808__$1;
(statearr_30820_30846[(1)] = (11));

} else {
var statearr_30821_30847 = state_30808__$1;
(statearr_30821_30847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (5))){
var inst_30785 = (state_30808[(7)]);
var state_30808__$1 = state_30808;
var statearr_30822_30848 = state_30808__$1;
(statearr_30822_30848[(2)] = inst_30785);

(statearr_30822_30848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (10))){
var inst_30804 = (state_30808[(2)]);
var state_30808__$1 = state_30808;
var statearr_30823_30849 = state_30808__$1;
(statearr_30823_30849[(2)] = inst_30804);

(statearr_30823_30849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30809 === (8))){
var inst_30785 = (state_30808[(7)]);
var inst_30795 = cljs.core.next.call(null,inst_30785);
var inst_30785__$1 = inst_30795;
var state_30808__$1 = (function (){var statearr_30824 = state_30808;
(statearr_30824[(7)] = inst_30785__$1);

return statearr_30824;
})();
var statearr_30825_30850 = state_30808__$1;
(statearr_30825_30850[(2)] = null);

(statearr_30825_30850[(1)] = (2));


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
});})(c__29980__auto__))
;
return ((function (switch__29868__auto__,c__29980__auto__){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_30808){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_30808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e30830){if((e30830 instanceof Object)){
var ex__29872__auto__ = e30830;
var statearr_30831_30851 = state_30808;
(statearr_30831_30851[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30852 = state_30808;
state_30808 = G__30852;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_30808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_30808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__))
})();
var state__29982__auto__ = (function (){var statearr_30832 = f__29981__auto__.call(null);
(statearr_30832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__))
);

return c__29980__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25897__auto__ = (((_ == null))?null:_);
var m__25898__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,_);
} else {
var m__25898__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25898__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m,ch);
} else {
var m__25898__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m);
} else {
var m__25898__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31078 = (function (ch,cs,meta31079){
this.ch = ch;
this.cs = cs;
this.meta31079 = meta31079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31080,meta31079__$1){
var self__ = this;
var _31080__$1 = this;
return (new cljs.core.async.t_cljs$core$async31078(self__.ch,self__.cs,meta31079__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31080){
var self__ = this;
var _31080__$1 = this;
return self__.meta31079;
});})(cs))
;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31078.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31079","meta31079",879771932,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31078";

cljs.core.async.t_cljs$core$async31078.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async31078");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31078 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31078(ch__$1,cs__$1,meta31079){
return (new cljs.core.async.t_cljs$core$async31078(ch__$1,cs__$1,meta31079));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31078(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29980__auto___31303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___31303,cs,m,dchan,dctr,done){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___31303,cs,m,dchan,dctr,done){
return (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var inst_31211 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31217_31304 = state_31215__$1;
(statearr_31217_31304[(2)] = inst_31211);

(statearr_31217_31304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (20))){
var inst_31114 = (state_31215[(7)]);
var inst_31126 = cljs.core.first.call(null,inst_31114);
var inst_31127 = cljs.core.nth.call(null,inst_31126,(0),null);
var inst_31128 = cljs.core.nth.call(null,inst_31126,(1),null);
var state_31215__$1 = (function (){var statearr_31218 = state_31215;
(statearr_31218[(8)] = inst_31127);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31128)){
var statearr_31219_31305 = state_31215__$1;
(statearr_31219_31305[(1)] = (22));

} else {
var statearr_31220_31306 = state_31215__$1;
(statearr_31220_31306[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (27))){
var inst_31083 = (state_31215[(9)]);
var inst_31163 = (state_31215[(10)]);
var inst_31158 = (state_31215[(11)]);
var inst_31156 = (state_31215[(12)]);
var inst_31163__$1 = cljs.core._nth.call(null,inst_31156,inst_31158);
var inst_31164 = cljs.core.async.put_BANG_.call(null,inst_31163__$1,inst_31083,done);
var state_31215__$1 = (function (){var statearr_31221 = state_31215;
(statearr_31221[(10)] = inst_31163__$1);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31164)){
var statearr_31222_31307 = state_31215__$1;
(statearr_31222_31307[(1)] = (30));

} else {
var statearr_31223_31308 = state_31215__$1;
(statearr_31223_31308[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var state_31215__$1 = state_31215;
var statearr_31224_31309 = state_31215__$1;
(statearr_31224_31309[(2)] = null);

(statearr_31224_31309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (24))){
var inst_31114 = (state_31215[(7)]);
var inst_31133 = (state_31215[(2)]);
var inst_31134 = cljs.core.next.call(null,inst_31114);
var inst_31092 = inst_31134;
var inst_31093 = null;
var inst_31094 = (0);
var inst_31095 = (0);
var state_31215__$1 = (function (){var statearr_31225 = state_31215;
(statearr_31225[(13)] = inst_31133);

(statearr_31225[(14)] = inst_31092);

(statearr_31225[(15)] = inst_31093);

(statearr_31225[(16)] = inst_31094);

(statearr_31225[(17)] = inst_31095);

return statearr_31225;
})();
var statearr_31226_31310 = state_31215__$1;
(statearr_31226_31310[(2)] = null);

(statearr_31226_31310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (39))){
var state_31215__$1 = state_31215;
var statearr_31230_31311 = state_31215__$1;
(statearr_31230_31311[(2)] = null);

(statearr_31230_31311[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31083 = (state_31215[(9)]);
var inst_31083__$1 = (state_31215[(2)]);
var inst_31084 = (inst_31083__$1 == null);
var state_31215__$1 = (function (){var statearr_31231 = state_31215;
(statearr_31231[(9)] = inst_31083__$1);

return statearr_31231;
})();
if(cljs.core.truth_(inst_31084)){
var statearr_31232_31312 = state_31215__$1;
(statearr_31232_31312[(1)] = (5));

} else {
var statearr_31233_31313 = state_31215__$1;
(statearr_31233_31313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var inst_31092 = (state_31215[(14)]);
var inst_31093 = (state_31215[(15)]);
var inst_31094 = (state_31215[(16)]);
var inst_31095 = (state_31215[(17)]);
var inst_31110 = (state_31215[(2)]);
var inst_31111 = (inst_31095 + (1));
var tmp31227 = inst_31092;
var tmp31228 = inst_31093;
var tmp31229 = inst_31094;
var inst_31092__$1 = tmp31227;
var inst_31093__$1 = tmp31228;
var inst_31094__$1 = tmp31229;
var inst_31095__$1 = inst_31111;
var state_31215__$1 = (function (){var statearr_31234 = state_31215;
(statearr_31234[(14)] = inst_31092__$1);

(statearr_31234[(15)] = inst_31093__$1);

(statearr_31234[(18)] = inst_31110);

(statearr_31234[(16)] = inst_31094__$1);

(statearr_31234[(17)] = inst_31095__$1);

return statearr_31234;
})();
var statearr_31235_31314 = state_31215__$1;
(statearr_31235_31314[(2)] = null);

(statearr_31235_31314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (21))){
var inst_31137 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31239_31315 = state_31215__$1;
(statearr_31239_31315[(2)] = inst_31137);

(statearr_31239_31315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (31))){
var inst_31163 = (state_31215[(10)]);
var inst_31167 = done.call(null,null);
var inst_31168 = cljs.core.async.untap_STAR_.call(null,m,inst_31163);
var state_31215__$1 = (function (){var statearr_31240 = state_31215;
(statearr_31240[(19)] = inst_31167);

return statearr_31240;
})();
var statearr_31241_31316 = state_31215__$1;
(statearr_31241_31316[(2)] = inst_31168);

(statearr_31241_31316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (32))){
var inst_31157 = (state_31215[(20)]);
var inst_31158 = (state_31215[(11)]);
var inst_31155 = (state_31215[(21)]);
var inst_31156 = (state_31215[(12)]);
var inst_31170 = (state_31215[(2)]);
var inst_31171 = (inst_31158 + (1));
var tmp31236 = inst_31157;
var tmp31237 = inst_31155;
var tmp31238 = inst_31156;
var inst_31155__$1 = tmp31237;
var inst_31156__$1 = tmp31238;
var inst_31157__$1 = tmp31236;
var inst_31158__$1 = inst_31171;
var state_31215__$1 = (function (){var statearr_31242 = state_31215;
(statearr_31242[(20)] = inst_31157__$1);

(statearr_31242[(11)] = inst_31158__$1);

(statearr_31242[(21)] = inst_31155__$1);

(statearr_31242[(12)] = inst_31156__$1);

(statearr_31242[(22)] = inst_31170);

return statearr_31242;
})();
var statearr_31243_31317 = state_31215__$1;
(statearr_31243_31317[(2)] = null);

(statearr_31243_31317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (40))){
var inst_31183 = (state_31215[(23)]);
var inst_31187 = done.call(null,null);
var inst_31188 = cljs.core.async.untap_STAR_.call(null,m,inst_31183);
var state_31215__$1 = (function (){var statearr_31244 = state_31215;
(statearr_31244[(24)] = inst_31187);

return statearr_31244;
})();
var statearr_31245_31318 = state_31215__$1;
(statearr_31245_31318[(2)] = inst_31188);

(statearr_31245_31318[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (33))){
var inst_31174 = (state_31215[(25)]);
var inst_31176 = cljs.core.chunked_seq_QMARK_.call(null,inst_31174);
var state_31215__$1 = state_31215;
if(inst_31176){
var statearr_31246_31319 = state_31215__$1;
(statearr_31246_31319[(1)] = (36));

} else {
var statearr_31247_31320 = state_31215__$1;
(statearr_31247_31320[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var inst_31104 = (state_31215[(26)]);
var inst_31107 = cljs.core.async.close_BANG_.call(null,inst_31104);
var state_31215__$1 = state_31215;
var statearr_31248_31321 = state_31215__$1;
(statearr_31248_31321[(2)] = inst_31107);

(statearr_31248_31321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (22))){
var inst_31127 = (state_31215[(8)]);
var inst_31130 = cljs.core.async.close_BANG_.call(null,inst_31127);
var state_31215__$1 = state_31215;
var statearr_31249_31322 = state_31215__$1;
(statearr_31249_31322[(2)] = inst_31130);

(statearr_31249_31322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (36))){
var inst_31174 = (state_31215[(25)]);
var inst_31178 = cljs.core.chunk_first.call(null,inst_31174);
var inst_31179 = cljs.core.chunk_rest.call(null,inst_31174);
var inst_31180 = cljs.core.count.call(null,inst_31178);
var inst_31155 = inst_31179;
var inst_31156 = inst_31178;
var inst_31157 = inst_31180;
var inst_31158 = (0);
var state_31215__$1 = (function (){var statearr_31250 = state_31215;
(statearr_31250[(20)] = inst_31157);

(statearr_31250[(11)] = inst_31158);

(statearr_31250[(21)] = inst_31155);

(statearr_31250[(12)] = inst_31156);

return statearr_31250;
})();
var statearr_31251_31323 = state_31215__$1;
(statearr_31251_31323[(2)] = null);

(statearr_31251_31323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (41))){
var inst_31174 = (state_31215[(25)]);
var inst_31190 = (state_31215[(2)]);
var inst_31191 = cljs.core.next.call(null,inst_31174);
var inst_31155 = inst_31191;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31215__$1 = (function (){var statearr_31252 = state_31215;
(statearr_31252[(27)] = inst_31190);

(statearr_31252[(20)] = inst_31157);

(statearr_31252[(11)] = inst_31158);

(statearr_31252[(21)] = inst_31155);

(statearr_31252[(12)] = inst_31156);

return statearr_31252;
})();
var statearr_31253_31324 = state_31215__$1;
(statearr_31253_31324[(2)] = null);

(statearr_31253_31324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (43))){
var state_31215__$1 = state_31215;
var statearr_31254_31325 = state_31215__$1;
(statearr_31254_31325[(2)] = null);

(statearr_31254_31325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (29))){
var inst_31199 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31255_31326 = state_31215__$1;
(statearr_31255_31326[(2)] = inst_31199);

(statearr_31255_31326[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (44))){
var inst_31208 = (state_31215[(2)]);
var state_31215__$1 = (function (){var statearr_31256 = state_31215;
(statearr_31256[(28)] = inst_31208);

return statearr_31256;
})();
var statearr_31257_31327 = state_31215__$1;
(statearr_31257_31327[(2)] = null);

(statearr_31257_31327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var inst_31147 = (state_31215[(29)]);
var inst_31146 = cljs.core.deref.call(null,cs);
var inst_31147__$1 = cljs.core.keys.call(null,inst_31146);
var inst_31148 = cljs.core.count.call(null,inst_31147__$1);
var inst_31149 = cljs.core.reset_BANG_.call(null,dctr,inst_31148);
var inst_31154 = cljs.core.seq.call(null,inst_31147__$1);
var inst_31155 = inst_31154;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31215__$1 = (function (){var statearr_31258 = state_31215;
(statearr_31258[(29)] = inst_31147__$1);

(statearr_31258[(20)] = inst_31157);

(statearr_31258[(11)] = inst_31158);

(statearr_31258[(21)] = inst_31155);

(statearr_31258[(12)] = inst_31156);

(statearr_31258[(30)] = inst_31149);

return statearr_31258;
})();
var statearr_31259_31328 = state_31215__$1;
(statearr_31259_31328[(2)] = null);

(statearr_31259_31328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (28))){
var inst_31174 = (state_31215[(25)]);
var inst_31155 = (state_31215[(21)]);
var inst_31174__$1 = cljs.core.seq.call(null,inst_31155);
var state_31215__$1 = (function (){var statearr_31260 = state_31215;
(statearr_31260[(25)] = inst_31174__$1);

return statearr_31260;
})();
if(inst_31174__$1){
var statearr_31261_31329 = state_31215__$1;
(statearr_31261_31329[(1)] = (33));

} else {
var statearr_31262_31330 = state_31215__$1;
(statearr_31262_31330[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (25))){
var inst_31157 = (state_31215[(20)]);
var inst_31158 = (state_31215[(11)]);
var inst_31160 = (inst_31158 < inst_31157);
var inst_31161 = inst_31160;
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31161)){
var statearr_31263_31331 = state_31215__$1;
(statearr_31263_31331[(1)] = (27));

} else {
var statearr_31264_31332 = state_31215__$1;
(statearr_31264_31332[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (34))){
var state_31215__$1 = state_31215;
var statearr_31265_31333 = state_31215__$1;
(statearr_31265_31333[(2)] = null);

(statearr_31265_31333[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (17))){
var state_31215__$1 = state_31215;
var statearr_31266_31334 = state_31215__$1;
(statearr_31266_31334[(2)] = null);

(statearr_31266_31334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var inst_31213 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31215__$1,inst_31213);
} else {
if((state_val_31216 === (12))){
var inst_31142 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31267_31335 = state_31215__$1;
(statearr_31267_31335[(2)] = inst_31142);

(statearr_31267_31335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (2))){
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(4),ch);
} else {
if((state_val_31216 === (23))){
var state_31215__$1 = state_31215;
var statearr_31268_31336 = state_31215__$1;
(statearr_31268_31336[(2)] = null);

(statearr_31268_31336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (35))){
var inst_31197 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31269_31337 = state_31215__$1;
(statearr_31269_31337[(2)] = inst_31197);

(statearr_31269_31337[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (19))){
var inst_31114 = (state_31215[(7)]);
var inst_31118 = cljs.core.chunk_first.call(null,inst_31114);
var inst_31119 = cljs.core.chunk_rest.call(null,inst_31114);
var inst_31120 = cljs.core.count.call(null,inst_31118);
var inst_31092 = inst_31119;
var inst_31093 = inst_31118;
var inst_31094 = inst_31120;
var inst_31095 = (0);
var state_31215__$1 = (function (){var statearr_31270 = state_31215;
(statearr_31270[(14)] = inst_31092);

(statearr_31270[(15)] = inst_31093);

(statearr_31270[(16)] = inst_31094);

(statearr_31270[(17)] = inst_31095);

return statearr_31270;
})();
var statearr_31271_31338 = state_31215__$1;
(statearr_31271_31338[(2)] = null);

(statearr_31271_31338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (11))){
var inst_31092 = (state_31215[(14)]);
var inst_31114 = (state_31215[(7)]);
var inst_31114__$1 = cljs.core.seq.call(null,inst_31092);
var state_31215__$1 = (function (){var statearr_31272 = state_31215;
(statearr_31272[(7)] = inst_31114__$1);

return statearr_31272;
})();
if(inst_31114__$1){
var statearr_31273_31339 = state_31215__$1;
(statearr_31273_31339[(1)] = (16));

} else {
var statearr_31274_31340 = state_31215__$1;
(statearr_31274_31340[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var inst_31144 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31275_31341 = state_31215__$1;
(statearr_31275_31341[(2)] = inst_31144);

(statearr_31275_31341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (5))){
var inst_31090 = cljs.core.deref.call(null,cs);
var inst_31091 = cljs.core.seq.call(null,inst_31090);
var inst_31092 = inst_31091;
var inst_31093 = null;
var inst_31094 = (0);
var inst_31095 = (0);
var state_31215__$1 = (function (){var statearr_31276 = state_31215;
(statearr_31276[(14)] = inst_31092);

(statearr_31276[(15)] = inst_31093);

(statearr_31276[(16)] = inst_31094);

(statearr_31276[(17)] = inst_31095);

return statearr_31276;
})();
var statearr_31277_31342 = state_31215__$1;
(statearr_31277_31342[(2)] = null);

(statearr_31277_31342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (14))){
var state_31215__$1 = state_31215;
var statearr_31278_31343 = state_31215__$1;
(statearr_31278_31343[(2)] = null);

(statearr_31278_31343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (45))){
var inst_31205 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31279_31344 = state_31215__$1;
(statearr_31279_31344[(2)] = inst_31205);

(statearr_31279_31344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (26))){
var inst_31147 = (state_31215[(29)]);
var inst_31201 = (state_31215[(2)]);
var inst_31202 = cljs.core.seq.call(null,inst_31147);
var state_31215__$1 = (function (){var statearr_31280 = state_31215;
(statearr_31280[(31)] = inst_31201);

return statearr_31280;
})();
if(inst_31202){
var statearr_31281_31345 = state_31215__$1;
(statearr_31281_31345[(1)] = (42));

} else {
var statearr_31282_31346 = state_31215__$1;
(statearr_31282_31346[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (16))){
var inst_31114 = (state_31215[(7)]);
var inst_31116 = cljs.core.chunked_seq_QMARK_.call(null,inst_31114);
var state_31215__$1 = state_31215;
if(inst_31116){
var statearr_31283_31347 = state_31215__$1;
(statearr_31283_31347[(1)] = (19));

} else {
var statearr_31284_31348 = state_31215__$1;
(statearr_31284_31348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (38))){
var inst_31194 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31285_31349 = state_31215__$1;
(statearr_31285_31349[(2)] = inst_31194);

(statearr_31285_31349[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (30))){
var state_31215__$1 = state_31215;
var statearr_31286_31350 = state_31215__$1;
(statearr_31286_31350[(2)] = null);

(statearr_31286_31350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31093 = (state_31215[(15)]);
var inst_31095 = (state_31215[(17)]);
var inst_31103 = cljs.core._nth.call(null,inst_31093,inst_31095);
var inst_31104 = cljs.core.nth.call(null,inst_31103,(0),null);
var inst_31105 = cljs.core.nth.call(null,inst_31103,(1),null);
var state_31215__$1 = (function (){var statearr_31287 = state_31215;
(statearr_31287[(26)] = inst_31104);

return statearr_31287;
})();
if(cljs.core.truth_(inst_31105)){
var statearr_31288_31351 = state_31215__$1;
(statearr_31288_31351[(1)] = (13));

} else {
var statearr_31289_31352 = state_31215__$1;
(statearr_31289_31352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (18))){
var inst_31140 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31290_31353 = state_31215__$1;
(statearr_31290_31353[(2)] = inst_31140);

(statearr_31290_31353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (42))){
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(45),dchan);
} else {
if((state_val_31216 === (37))){
var inst_31083 = (state_31215[(9)]);
var inst_31183 = (state_31215[(23)]);
var inst_31174 = (state_31215[(25)]);
var inst_31183__$1 = cljs.core.first.call(null,inst_31174);
var inst_31184 = cljs.core.async.put_BANG_.call(null,inst_31183__$1,inst_31083,done);
var state_31215__$1 = (function (){var statearr_31291 = state_31215;
(statearr_31291[(23)] = inst_31183__$1);

return statearr_31291;
})();
if(cljs.core.truth_(inst_31184)){
var statearr_31292_31354 = state_31215__$1;
(statearr_31292_31354[(1)] = (39));

} else {
var statearr_31293_31355 = state_31215__$1;
(statearr_31293_31355[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31094 = (state_31215[(16)]);
var inst_31095 = (state_31215[(17)]);
var inst_31097 = (inst_31095 < inst_31094);
var inst_31098 = inst_31097;
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31098)){
var statearr_31294_31356 = state_31215__$1;
(statearr_31294_31356[(1)] = (10));

} else {
var statearr_31295_31357 = state_31215__$1;
(statearr_31295_31357[(1)] = (11));

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
});})(c__29980__auto___31303,cs,m,dchan,dctr,done))
;
return ((function (switch__29868__auto__,c__29980__auto___31303,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29869__auto__ = null;
var cljs$core$async$mult_$_state_machine__29869__auto____0 = (function (){
var statearr_31299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31299[(0)] = cljs$core$async$mult_$_state_machine__29869__auto__);

(statearr_31299[(1)] = (1));

return statearr_31299;
});
var cljs$core$async$mult_$_state_machine__29869__auto____1 = (function (state_31215){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_31215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e31300){if((e31300 instanceof Object)){
var ex__29872__auto__ = e31300;
var statearr_31301_31358 = state_31215;
(statearr_31301_31358[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31359 = state_31215;
state_31215 = G__31359;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29869__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29869__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29869__auto____0;
cljs$core$async$mult_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29869__auto____1;
return cljs$core$async$mult_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___31303,cs,m,dchan,dctr,done))
})();
var state__29982__auto__ = (function (){var statearr_31302 = f__29981__auto__.call(null);
(statearr_31302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___31303);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___31303,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31360 = [];
var len__26342__auto___31363 = arguments.length;
var i__26343__auto___31364 = (0);
while(true){
if((i__26343__auto___31364 < len__26342__auto___31363)){
args31360.push((arguments[i__26343__auto___31364]));

var G__31365 = (i__26343__auto___31364 + (1));
i__26343__auto___31364 = G__31365;
continue;
} else {
}
break;
}

var G__31362 = args31360.length;
switch (G__31362) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31360.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m,ch);
} else {
var m__25898__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m,ch);
} else {
var m__25898__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m);
} else {
var m__25898__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m,state_map);
} else {
var m__25898__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25897__auto__ = (((m == null))?null:m);
var m__25898__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,m,mode);
} else {
var m__25898__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26349__auto__ = [];
var len__26342__auto___31377 = arguments.length;
var i__26343__auto___31378 = (0);
while(true){
if((i__26343__auto___31378 < len__26342__auto___31377)){
args__26349__auto__.push((arguments[i__26343__auto___31378]));

var G__31379 = (i__26343__auto___31378 + (1));
i__26343__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var argseq__26350__auto__ = ((((3) < args__26349__auto__.length))?(new cljs.core.IndexedSeq(args__26349__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26350__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31371){
var map__31372 = p__31371;
var map__31372__$1 = ((((!((map__31372 == null)))?((((map__31372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372):map__31372);
var opts = map__31372__$1;
var statearr_31374_31380 = state;
(statearr_31374_31380[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31372,map__31372__$1,opts){
return (function (val){
var statearr_31375_31381 = state;
(statearr_31375_31381[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31372,map__31372__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31376_31382 = state;
(statearr_31376_31382[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31367){
var G__31368 = cljs.core.first.call(null,seq31367);
var seq31367__$1 = cljs.core.next.call(null,seq31367);
var G__31369 = cljs.core.first.call(null,seq31367__$1);
var seq31367__$2 = cljs.core.next.call(null,seq31367__$1);
var G__31370 = cljs.core.first.call(null,seq31367__$2);
var seq31367__$3 = cljs.core.next.call(null,seq31367__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31368,G__31369,G__31370,seq31367__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31550 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31551){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31551 = meta31551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31552,meta31551__$1){
var self__ = this;
var _31552__$1 = this;
return (new cljs.core.async.t_cljs$core$async31550(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31551__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31552){
var self__ = this;
var _31552__$1 = this;
return self__.meta31551;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31551","meta31551",-630925085,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31550";

cljs.core.async.t_cljs$core$async31550.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async31550");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31550 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31550(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31551){
return (new cljs.core.async.t_cljs$core$async31550(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31551));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31550(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29980__auto___31717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___31717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___31717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31654){
var state_val_31655 = (state_31654[(1)]);
if((state_val_31655 === (7))){
var inst_31569 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31656_31718 = state_31654__$1;
(statearr_31656_31718[(2)] = inst_31569);

(statearr_31656_31718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (20))){
var inst_31581 = (state_31654[(7)]);
var state_31654__$1 = state_31654;
var statearr_31657_31719 = state_31654__$1;
(statearr_31657_31719[(2)] = inst_31581);

(statearr_31657_31719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (27))){
var state_31654__$1 = state_31654;
var statearr_31658_31720 = state_31654__$1;
(statearr_31658_31720[(2)] = null);

(statearr_31658_31720[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (1))){
var inst_31556 = (state_31654[(8)]);
var inst_31556__$1 = calc_state.call(null);
var inst_31558 = (inst_31556__$1 == null);
var inst_31559 = cljs.core.not.call(null,inst_31558);
var state_31654__$1 = (function (){var statearr_31659 = state_31654;
(statearr_31659[(8)] = inst_31556__$1);

return statearr_31659;
})();
if(inst_31559){
var statearr_31660_31721 = state_31654__$1;
(statearr_31660_31721[(1)] = (2));

} else {
var statearr_31661_31722 = state_31654__$1;
(statearr_31661_31722[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (24))){
var inst_31614 = (state_31654[(9)]);
var inst_31628 = (state_31654[(10)]);
var inst_31605 = (state_31654[(11)]);
var inst_31628__$1 = inst_31605.call(null,inst_31614);
var state_31654__$1 = (function (){var statearr_31662 = state_31654;
(statearr_31662[(10)] = inst_31628__$1);

return statearr_31662;
})();
if(cljs.core.truth_(inst_31628__$1)){
var statearr_31663_31723 = state_31654__$1;
(statearr_31663_31723[(1)] = (29));

} else {
var statearr_31664_31724 = state_31654__$1;
(statearr_31664_31724[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (4))){
var inst_31572 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31572)){
var statearr_31665_31725 = state_31654__$1;
(statearr_31665_31725[(1)] = (8));

} else {
var statearr_31666_31726 = state_31654__$1;
(statearr_31666_31726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (15))){
var inst_31599 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31599)){
var statearr_31667_31727 = state_31654__$1;
(statearr_31667_31727[(1)] = (19));

} else {
var statearr_31668_31728 = state_31654__$1;
(statearr_31668_31728[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (21))){
var inst_31604 = (state_31654[(12)]);
var inst_31604__$1 = (state_31654[(2)]);
var inst_31605 = cljs.core.get.call(null,inst_31604__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31606 = cljs.core.get.call(null,inst_31604__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31607 = cljs.core.get.call(null,inst_31604__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31654__$1 = (function (){var statearr_31669 = state_31654;
(statearr_31669[(13)] = inst_31606);

(statearr_31669[(11)] = inst_31605);

(statearr_31669[(12)] = inst_31604__$1);

return statearr_31669;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31654__$1,(22),inst_31607);
} else {
if((state_val_31655 === (31))){
var inst_31636 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31636)){
var statearr_31670_31729 = state_31654__$1;
(statearr_31670_31729[(1)] = (32));

} else {
var statearr_31671_31730 = state_31654__$1;
(statearr_31671_31730[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (32))){
var inst_31613 = (state_31654[(14)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31654__$1,(35),out,inst_31613);
} else {
if((state_val_31655 === (33))){
var inst_31604 = (state_31654[(12)]);
var inst_31581 = inst_31604;
var state_31654__$1 = (function (){var statearr_31672 = state_31654;
(statearr_31672[(7)] = inst_31581);

return statearr_31672;
})();
var statearr_31673_31731 = state_31654__$1;
(statearr_31673_31731[(2)] = null);

(statearr_31673_31731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (13))){
var inst_31581 = (state_31654[(7)]);
var inst_31588 = inst_31581.cljs$lang$protocol_mask$partition0$;
var inst_31589 = (inst_31588 & (64));
var inst_31590 = inst_31581.cljs$core$ISeq$;
var inst_31591 = (cljs.core.PROTOCOL_SENTINEL === inst_31590);
var inst_31592 = (inst_31589) || (inst_31591);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31592)){
var statearr_31674_31732 = state_31654__$1;
(statearr_31674_31732[(1)] = (16));

} else {
var statearr_31675_31733 = state_31654__$1;
(statearr_31675_31733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (22))){
var inst_31614 = (state_31654[(9)]);
var inst_31613 = (state_31654[(14)]);
var inst_31612 = (state_31654[(2)]);
var inst_31613__$1 = cljs.core.nth.call(null,inst_31612,(0),null);
var inst_31614__$1 = cljs.core.nth.call(null,inst_31612,(1),null);
var inst_31615 = (inst_31613__$1 == null);
var inst_31616 = cljs.core._EQ_.call(null,inst_31614__$1,change);
var inst_31617 = (inst_31615) || (inst_31616);
var state_31654__$1 = (function (){var statearr_31676 = state_31654;
(statearr_31676[(9)] = inst_31614__$1);

(statearr_31676[(14)] = inst_31613__$1);

return statearr_31676;
})();
if(cljs.core.truth_(inst_31617)){
var statearr_31677_31734 = state_31654__$1;
(statearr_31677_31734[(1)] = (23));

} else {
var statearr_31678_31735 = state_31654__$1;
(statearr_31678_31735[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (36))){
var inst_31604 = (state_31654[(12)]);
var inst_31581 = inst_31604;
var state_31654__$1 = (function (){var statearr_31679 = state_31654;
(statearr_31679[(7)] = inst_31581);

return statearr_31679;
})();
var statearr_31680_31736 = state_31654__$1;
(statearr_31680_31736[(2)] = null);

(statearr_31680_31736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (29))){
var inst_31628 = (state_31654[(10)]);
var state_31654__$1 = state_31654;
var statearr_31681_31737 = state_31654__$1;
(statearr_31681_31737[(2)] = inst_31628);

(statearr_31681_31737[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (6))){
var state_31654__$1 = state_31654;
var statearr_31682_31738 = state_31654__$1;
(statearr_31682_31738[(2)] = false);

(statearr_31682_31738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (28))){
var inst_31624 = (state_31654[(2)]);
var inst_31625 = calc_state.call(null);
var inst_31581 = inst_31625;
var state_31654__$1 = (function (){var statearr_31683 = state_31654;
(statearr_31683[(7)] = inst_31581);

(statearr_31683[(15)] = inst_31624);

return statearr_31683;
})();
var statearr_31684_31739 = state_31654__$1;
(statearr_31684_31739[(2)] = null);

(statearr_31684_31739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (25))){
var inst_31650 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31685_31740 = state_31654__$1;
(statearr_31685_31740[(2)] = inst_31650);

(statearr_31685_31740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (34))){
var inst_31648 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31686_31741 = state_31654__$1;
(statearr_31686_31741[(2)] = inst_31648);

(statearr_31686_31741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (17))){
var state_31654__$1 = state_31654;
var statearr_31687_31742 = state_31654__$1;
(statearr_31687_31742[(2)] = false);

(statearr_31687_31742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (3))){
var state_31654__$1 = state_31654;
var statearr_31688_31743 = state_31654__$1;
(statearr_31688_31743[(2)] = false);

(statearr_31688_31743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (12))){
var inst_31652 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31654__$1,inst_31652);
} else {
if((state_val_31655 === (2))){
var inst_31556 = (state_31654[(8)]);
var inst_31561 = inst_31556.cljs$lang$protocol_mask$partition0$;
var inst_31562 = (inst_31561 & (64));
var inst_31563 = inst_31556.cljs$core$ISeq$;
var inst_31564 = (cljs.core.PROTOCOL_SENTINEL === inst_31563);
var inst_31565 = (inst_31562) || (inst_31564);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31565)){
var statearr_31689_31744 = state_31654__$1;
(statearr_31689_31744[(1)] = (5));

} else {
var statearr_31690_31745 = state_31654__$1;
(statearr_31690_31745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (23))){
var inst_31613 = (state_31654[(14)]);
var inst_31619 = (inst_31613 == null);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31619)){
var statearr_31691_31746 = state_31654__$1;
(statearr_31691_31746[(1)] = (26));

} else {
var statearr_31692_31747 = state_31654__$1;
(statearr_31692_31747[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (35))){
var inst_31639 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31639)){
var statearr_31693_31748 = state_31654__$1;
(statearr_31693_31748[(1)] = (36));

} else {
var statearr_31694_31749 = state_31654__$1;
(statearr_31694_31749[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (19))){
var inst_31581 = (state_31654[(7)]);
var inst_31601 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31581);
var state_31654__$1 = state_31654;
var statearr_31695_31750 = state_31654__$1;
(statearr_31695_31750[(2)] = inst_31601);

(statearr_31695_31750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (11))){
var inst_31581 = (state_31654[(7)]);
var inst_31585 = (inst_31581 == null);
var inst_31586 = cljs.core.not.call(null,inst_31585);
var state_31654__$1 = state_31654;
if(inst_31586){
var statearr_31696_31751 = state_31654__$1;
(statearr_31696_31751[(1)] = (13));

} else {
var statearr_31697_31752 = state_31654__$1;
(statearr_31697_31752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (9))){
var inst_31556 = (state_31654[(8)]);
var state_31654__$1 = state_31654;
var statearr_31698_31753 = state_31654__$1;
(statearr_31698_31753[(2)] = inst_31556);

(statearr_31698_31753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (5))){
var state_31654__$1 = state_31654;
var statearr_31699_31754 = state_31654__$1;
(statearr_31699_31754[(2)] = true);

(statearr_31699_31754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (14))){
var state_31654__$1 = state_31654;
var statearr_31700_31755 = state_31654__$1;
(statearr_31700_31755[(2)] = false);

(statearr_31700_31755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (26))){
var inst_31614 = (state_31654[(9)]);
var inst_31621 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31614);
var state_31654__$1 = state_31654;
var statearr_31701_31756 = state_31654__$1;
(statearr_31701_31756[(2)] = inst_31621);

(statearr_31701_31756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (16))){
var state_31654__$1 = state_31654;
var statearr_31702_31757 = state_31654__$1;
(statearr_31702_31757[(2)] = true);

(statearr_31702_31757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (38))){
var inst_31644 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31703_31758 = state_31654__$1;
(statearr_31703_31758[(2)] = inst_31644);

(statearr_31703_31758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (30))){
var inst_31606 = (state_31654[(13)]);
var inst_31614 = (state_31654[(9)]);
var inst_31605 = (state_31654[(11)]);
var inst_31631 = cljs.core.empty_QMARK_.call(null,inst_31605);
var inst_31632 = inst_31606.call(null,inst_31614);
var inst_31633 = cljs.core.not.call(null,inst_31632);
var inst_31634 = (inst_31631) && (inst_31633);
var state_31654__$1 = state_31654;
var statearr_31704_31759 = state_31654__$1;
(statearr_31704_31759[(2)] = inst_31634);

(statearr_31704_31759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (10))){
var inst_31556 = (state_31654[(8)]);
var inst_31577 = (state_31654[(2)]);
var inst_31578 = cljs.core.get.call(null,inst_31577,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31579 = cljs.core.get.call(null,inst_31577,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31580 = cljs.core.get.call(null,inst_31577,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31581 = inst_31556;
var state_31654__$1 = (function (){var statearr_31705 = state_31654;
(statearr_31705[(16)] = inst_31578);

(statearr_31705[(17)] = inst_31580);

(statearr_31705[(7)] = inst_31581);

(statearr_31705[(18)] = inst_31579);

return statearr_31705;
})();
var statearr_31706_31760 = state_31654__$1;
(statearr_31706_31760[(2)] = null);

(statearr_31706_31760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (18))){
var inst_31596 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31707_31761 = state_31654__$1;
(statearr_31707_31761[(2)] = inst_31596);

(statearr_31707_31761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (37))){
var state_31654__$1 = state_31654;
var statearr_31708_31762 = state_31654__$1;
(statearr_31708_31762[(2)] = null);

(statearr_31708_31762[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (8))){
var inst_31556 = (state_31654[(8)]);
var inst_31574 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31556);
var state_31654__$1 = state_31654;
var statearr_31709_31763 = state_31654__$1;
(statearr_31709_31763[(2)] = inst_31574);

(statearr_31709_31763[(1)] = (10));


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
});})(c__29980__auto___31717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29868__auto__,c__29980__auto___31717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29869__auto__ = null;
var cljs$core$async$mix_$_state_machine__29869__auto____0 = (function (){
var statearr_31713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31713[(0)] = cljs$core$async$mix_$_state_machine__29869__auto__);

(statearr_31713[(1)] = (1));

return statearr_31713;
});
var cljs$core$async$mix_$_state_machine__29869__auto____1 = (function (state_31654){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_31654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e31714){if((e31714 instanceof Object)){
var ex__29872__auto__ = e31714;
var statearr_31715_31764 = state_31654;
(statearr_31715_31764[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31765 = state_31654;
state_31654 = G__31765;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29869__auto__ = function(state_31654){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29869__auto____1.call(this,state_31654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29869__auto____0;
cljs$core$async$mix_$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29869__auto____1;
return cljs$core$async$mix_$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___31717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29982__auto__ = (function (){var statearr_31716 = f__29981__auto__.call(null);
(statearr_31716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___31717);

return statearr_31716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___31717,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25897__auto__ = (((p == null))?null:p);
var m__25898__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25898__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25897__auto__ = (((p == null))?null:p);
var m__25898__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,p,v,ch);
} else {
var m__25898__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31766 = [];
var len__26342__auto___31769 = arguments.length;
var i__26343__auto___31770 = (0);
while(true){
if((i__26343__auto___31770 < len__26342__auto___31769)){
args31766.push((arguments[i__26343__auto___31770]));

var G__31771 = (i__26343__auto___31770 + (1));
i__26343__auto___31770 = G__31771;
continue;
} else {
}
break;
}

var G__31768 = args31766.length;
switch (G__31768) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31766.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25897__auto__ = (((p == null))?null:p);
var m__25898__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,p);
} else {
var m__25898__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25897__auto__ = (((p == null))?null:p);
var m__25898__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,p,v);
} else {
var m__25898__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31774 = [];
var len__26342__auto___31899 = arguments.length;
var i__26343__auto___31900 = (0);
while(true){
if((i__26343__auto___31900 < len__26342__auto___31899)){
args31774.push((arguments[i__26343__auto___31900]));

var G__31901 = (i__26343__auto___31900 + (1));
i__26343__auto___31900 = G__31901;
continue;
} else {
}
break;
}

var G__31776 = args31774.length;
switch (G__31776) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31774.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25229__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25229__auto__,mults){
return (function (p1__31773_SHARP_){
if(cljs.core.truth_(p1__31773_SHARP_.call(null,topic))){
return p1__31773_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31773_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25229__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31778 = meta31778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31779,meta31778__$1){
var self__ = this;
var _31779__$1 = this;
return (new cljs.core.async.t_cljs$core$async31777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31778__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31779){
var self__ = this;
var _31779__$1 = this;
return self__.meta31778;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31778","meta31778",-915629161,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31777";

cljs.core.async.t_cljs$core$async31777.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async31777");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31777 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31778){
return (new cljs.core.async.t_cljs$core$async31777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31778));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29980__auto___31903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___31903,mults,ensure_mult,p){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___31903,mults,ensure_mult,p){
return (function (state_31851){
var state_val_31852 = (state_31851[(1)]);
if((state_val_31852 === (7))){
var inst_31847 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31853_31904 = state_31851__$1;
(statearr_31853_31904[(2)] = inst_31847);

(statearr_31853_31904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (20))){
var state_31851__$1 = state_31851;
var statearr_31854_31905 = state_31851__$1;
(statearr_31854_31905[(2)] = null);

(statearr_31854_31905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (1))){
var state_31851__$1 = state_31851;
var statearr_31855_31906 = state_31851__$1;
(statearr_31855_31906[(2)] = null);

(statearr_31855_31906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (24))){
var inst_31830 = (state_31851[(7)]);
var inst_31839 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31830);
var state_31851__$1 = state_31851;
var statearr_31856_31907 = state_31851__$1;
(statearr_31856_31907[(2)] = inst_31839);

(statearr_31856_31907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (4))){
var inst_31782 = (state_31851[(8)]);
var inst_31782__$1 = (state_31851[(2)]);
var inst_31783 = (inst_31782__$1 == null);
var state_31851__$1 = (function (){var statearr_31857 = state_31851;
(statearr_31857[(8)] = inst_31782__$1);

return statearr_31857;
})();
if(cljs.core.truth_(inst_31783)){
var statearr_31858_31908 = state_31851__$1;
(statearr_31858_31908[(1)] = (5));

} else {
var statearr_31859_31909 = state_31851__$1;
(statearr_31859_31909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (15))){
var inst_31824 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31860_31910 = state_31851__$1;
(statearr_31860_31910[(2)] = inst_31824);

(statearr_31860_31910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (21))){
var inst_31844 = (state_31851[(2)]);
var state_31851__$1 = (function (){var statearr_31861 = state_31851;
(statearr_31861[(9)] = inst_31844);

return statearr_31861;
})();
var statearr_31862_31911 = state_31851__$1;
(statearr_31862_31911[(2)] = null);

(statearr_31862_31911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (13))){
var inst_31806 = (state_31851[(10)]);
var inst_31808 = cljs.core.chunked_seq_QMARK_.call(null,inst_31806);
var state_31851__$1 = state_31851;
if(inst_31808){
var statearr_31863_31912 = state_31851__$1;
(statearr_31863_31912[(1)] = (16));

} else {
var statearr_31864_31913 = state_31851__$1;
(statearr_31864_31913[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (22))){
var inst_31836 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31836)){
var statearr_31865_31914 = state_31851__$1;
(statearr_31865_31914[(1)] = (23));

} else {
var statearr_31866_31915 = state_31851__$1;
(statearr_31866_31915[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (6))){
var inst_31782 = (state_31851[(8)]);
var inst_31832 = (state_31851[(11)]);
var inst_31830 = (state_31851[(7)]);
var inst_31830__$1 = topic_fn.call(null,inst_31782);
var inst_31831 = cljs.core.deref.call(null,mults);
var inst_31832__$1 = cljs.core.get.call(null,inst_31831,inst_31830__$1);
var state_31851__$1 = (function (){var statearr_31867 = state_31851;
(statearr_31867[(11)] = inst_31832__$1);

(statearr_31867[(7)] = inst_31830__$1);

return statearr_31867;
})();
if(cljs.core.truth_(inst_31832__$1)){
var statearr_31868_31916 = state_31851__$1;
(statearr_31868_31916[(1)] = (19));

} else {
var statearr_31869_31917 = state_31851__$1;
(statearr_31869_31917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (25))){
var inst_31841 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31870_31918 = state_31851__$1;
(statearr_31870_31918[(2)] = inst_31841);

(statearr_31870_31918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (17))){
var inst_31806 = (state_31851[(10)]);
var inst_31815 = cljs.core.first.call(null,inst_31806);
var inst_31816 = cljs.core.async.muxch_STAR_.call(null,inst_31815);
var inst_31817 = cljs.core.async.close_BANG_.call(null,inst_31816);
var inst_31818 = cljs.core.next.call(null,inst_31806);
var inst_31792 = inst_31818;
var inst_31793 = null;
var inst_31794 = (0);
var inst_31795 = (0);
var state_31851__$1 = (function (){var statearr_31871 = state_31851;
(statearr_31871[(12)] = inst_31794);

(statearr_31871[(13)] = inst_31817);

(statearr_31871[(14)] = inst_31792);

(statearr_31871[(15)] = inst_31795);

(statearr_31871[(16)] = inst_31793);

return statearr_31871;
})();
var statearr_31872_31919 = state_31851__$1;
(statearr_31872_31919[(2)] = null);

(statearr_31872_31919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (3))){
var inst_31849 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31851__$1,inst_31849);
} else {
if((state_val_31852 === (12))){
var inst_31826 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31873_31920 = state_31851__$1;
(statearr_31873_31920[(2)] = inst_31826);

(statearr_31873_31920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (2))){
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(4),ch);
} else {
if((state_val_31852 === (23))){
var state_31851__$1 = state_31851;
var statearr_31874_31921 = state_31851__$1;
(statearr_31874_31921[(2)] = null);

(statearr_31874_31921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (19))){
var inst_31782 = (state_31851[(8)]);
var inst_31832 = (state_31851[(11)]);
var inst_31834 = cljs.core.async.muxch_STAR_.call(null,inst_31832);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31851__$1,(22),inst_31834,inst_31782);
} else {
if((state_val_31852 === (11))){
var inst_31806 = (state_31851[(10)]);
var inst_31792 = (state_31851[(14)]);
var inst_31806__$1 = cljs.core.seq.call(null,inst_31792);
var state_31851__$1 = (function (){var statearr_31875 = state_31851;
(statearr_31875[(10)] = inst_31806__$1);

return statearr_31875;
})();
if(inst_31806__$1){
var statearr_31876_31922 = state_31851__$1;
(statearr_31876_31922[(1)] = (13));

} else {
var statearr_31877_31923 = state_31851__$1;
(statearr_31877_31923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (9))){
var inst_31828 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31878_31924 = state_31851__$1;
(statearr_31878_31924[(2)] = inst_31828);

(statearr_31878_31924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (5))){
var inst_31789 = cljs.core.deref.call(null,mults);
var inst_31790 = cljs.core.vals.call(null,inst_31789);
var inst_31791 = cljs.core.seq.call(null,inst_31790);
var inst_31792 = inst_31791;
var inst_31793 = null;
var inst_31794 = (0);
var inst_31795 = (0);
var state_31851__$1 = (function (){var statearr_31879 = state_31851;
(statearr_31879[(12)] = inst_31794);

(statearr_31879[(14)] = inst_31792);

(statearr_31879[(15)] = inst_31795);

(statearr_31879[(16)] = inst_31793);

return statearr_31879;
})();
var statearr_31880_31925 = state_31851__$1;
(statearr_31880_31925[(2)] = null);

(statearr_31880_31925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (14))){
var state_31851__$1 = state_31851;
var statearr_31884_31926 = state_31851__$1;
(statearr_31884_31926[(2)] = null);

(statearr_31884_31926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (16))){
var inst_31806 = (state_31851[(10)]);
var inst_31810 = cljs.core.chunk_first.call(null,inst_31806);
var inst_31811 = cljs.core.chunk_rest.call(null,inst_31806);
var inst_31812 = cljs.core.count.call(null,inst_31810);
var inst_31792 = inst_31811;
var inst_31793 = inst_31810;
var inst_31794 = inst_31812;
var inst_31795 = (0);
var state_31851__$1 = (function (){var statearr_31885 = state_31851;
(statearr_31885[(12)] = inst_31794);

(statearr_31885[(14)] = inst_31792);

(statearr_31885[(15)] = inst_31795);

(statearr_31885[(16)] = inst_31793);

return statearr_31885;
})();
var statearr_31886_31927 = state_31851__$1;
(statearr_31886_31927[(2)] = null);

(statearr_31886_31927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (10))){
var inst_31794 = (state_31851[(12)]);
var inst_31792 = (state_31851[(14)]);
var inst_31795 = (state_31851[(15)]);
var inst_31793 = (state_31851[(16)]);
var inst_31800 = cljs.core._nth.call(null,inst_31793,inst_31795);
var inst_31801 = cljs.core.async.muxch_STAR_.call(null,inst_31800);
var inst_31802 = cljs.core.async.close_BANG_.call(null,inst_31801);
var inst_31803 = (inst_31795 + (1));
var tmp31881 = inst_31794;
var tmp31882 = inst_31792;
var tmp31883 = inst_31793;
var inst_31792__$1 = tmp31882;
var inst_31793__$1 = tmp31883;
var inst_31794__$1 = tmp31881;
var inst_31795__$1 = inst_31803;
var state_31851__$1 = (function (){var statearr_31887 = state_31851;
(statearr_31887[(17)] = inst_31802);

(statearr_31887[(12)] = inst_31794__$1);

(statearr_31887[(14)] = inst_31792__$1);

(statearr_31887[(15)] = inst_31795__$1);

(statearr_31887[(16)] = inst_31793__$1);

return statearr_31887;
})();
var statearr_31888_31928 = state_31851__$1;
(statearr_31888_31928[(2)] = null);

(statearr_31888_31928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (18))){
var inst_31821 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31889_31929 = state_31851__$1;
(statearr_31889_31929[(2)] = inst_31821);

(statearr_31889_31929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (8))){
var inst_31794 = (state_31851[(12)]);
var inst_31795 = (state_31851[(15)]);
var inst_31797 = (inst_31795 < inst_31794);
var inst_31798 = inst_31797;
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31798)){
var statearr_31890_31930 = state_31851__$1;
(statearr_31890_31930[(1)] = (10));

} else {
var statearr_31891_31931 = state_31851__$1;
(statearr_31891_31931[(1)] = (11));

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
});})(c__29980__auto___31903,mults,ensure_mult,p))
;
return ((function (switch__29868__auto__,c__29980__auto___31903,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_31895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31895[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_31895[(1)] = (1));

return statearr_31895;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_31851){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_31851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e31896){if((e31896 instanceof Object)){
var ex__29872__auto__ = e31896;
var statearr_31897_31932 = state_31851;
(statearr_31897_31932[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31933 = state_31851;
state_31851 = G__31933;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___31903,mults,ensure_mult,p))
})();
var state__29982__auto__ = (function (){var statearr_31898 = f__29981__auto__.call(null);
(statearr_31898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___31903);

return statearr_31898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___31903,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31934 = [];
var len__26342__auto___31937 = arguments.length;
var i__26343__auto___31938 = (0);
while(true){
if((i__26343__auto___31938 < len__26342__auto___31937)){
args31934.push((arguments[i__26343__auto___31938]));

var G__31939 = (i__26343__auto___31938 + (1));
i__26343__auto___31938 = G__31939;
continue;
} else {
}
break;
}

var G__31936 = args31934.length;
switch (G__31936) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31934.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31941 = [];
var len__26342__auto___31944 = arguments.length;
var i__26343__auto___31945 = (0);
while(true){
if((i__26343__auto___31945 < len__26342__auto___31944)){
args31941.push((arguments[i__26343__auto___31945]));

var G__31946 = (i__26343__auto___31945 + (1));
i__26343__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var G__31943 = args31941.length;
switch (G__31943) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31941.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31948 = [];
var len__26342__auto___32019 = arguments.length;
var i__26343__auto___32020 = (0);
while(true){
if((i__26343__auto___32020 < len__26342__auto___32019)){
args31948.push((arguments[i__26343__auto___32020]));

var G__32021 = (i__26343__auto___32020 + (1));
i__26343__auto___32020 = G__32021;
continue;
} else {
}
break;
}

var G__31950 = args31948.length;
switch (G__31950) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31948.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29980__auto___32023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___32023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___32023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31989){
var state_val_31990 = (state_31989[(1)]);
if((state_val_31990 === (7))){
var state_31989__$1 = state_31989;
var statearr_31991_32024 = state_31989__$1;
(statearr_31991_32024[(2)] = null);

(statearr_31991_32024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (1))){
var state_31989__$1 = state_31989;
var statearr_31992_32025 = state_31989__$1;
(statearr_31992_32025[(2)] = null);

(statearr_31992_32025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (4))){
var inst_31953 = (state_31989[(7)]);
var inst_31955 = (inst_31953 < cnt);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31955)){
var statearr_31993_32026 = state_31989__$1;
(statearr_31993_32026[(1)] = (6));

} else {
var statearr_31994_32027 = state_31989__$1;
(statearr_31994_32027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (15))){
var inst_31985 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_31995_32028 = state_31989__$1;
(statearr_31995_32028[(2)] = inst_31985);

(statearr_31995_32028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (13))){
var inst_31978 = cljs.core.async.close_BANG_.call(null,out);
var state_31989__$1 = state_31989;
var statearr_31996_32029 = state_31989__$1;
(statearr_31996_32029[(2)] = inst_31978);

(statearr_31996_32029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (6))){
var state_31989__$1 = state_31989;
var statearr_31997_32030 = state_31989__$1;
(statearr_31997_32030[(2)] = null);

(statearr_31997_32030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (3))){
var inst_31987 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31989__$1,inst_31987);
} else {
if((state_val_31990 === (12))){
var inst_31975 = (state_31989[(8)]);
var inst_31975__$1 = (state_31989[(2)]);
var inst_31976 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31975__$1);
var state_31989__$1 = (function (){var statearr_31998 = state_31989;
(statearr_31998[(8)] = inst_31975__$1);

return statearr_31998;
})();
if(cljs.core.truth_(inst_31976)){
var statearr_31999_32031 = state_31989__$1;
(statearr_31999_32031[(1)] = (13));

} else {
var statearr_32000_32032 = state_31989__$1;
(statearr_32000_32032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (2))){
var inst_31952 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31953 = (0);
var state_31989__$1 = (function (){var statearr_32001 = state_31989;
(statearr_32001[(7)] = inst_31953);

(statearr_32001[(9)] = inst_31952);

return statearr_32001;
})();
var statearr_32002_32033 = state_31989__$1;
(statearr_32002_32033[(2)] = null);

(statearr_32002_32033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (11))){
var inst_31953 = (state_31989[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31989,(10),Object,null,(9));
var inst_31962 = chs__$1.call(null,inst_31953);
var inst_31963 = done.call(null,inst_31953);
var inst_31964 = cljs.core.async.take_BANG_.call(null,inst_31962,inst_31963);
var state_31989__$1 = state_31989;
var statearr_32003_32034 = state_31989__$1;
(statearr_32003_32034[(2)] = inst_31964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (9))){
var inst_31953 = (state_31989[(7)]);
var inst_31966 = (state_31989[(2)]);
var inst_31967 = (inst_31953 + (1));
var inst_31953__$1 = inst_31967;
var state_31989__$1 = (function (){var statearr_32004 = state_31989;
(statearr_32004[(7)] = inst_31953__$1);

(statearr_32004[(10)] = inst_31966);

return statearr_32004;
})();
var statearr_32005_32035 = state_31989__$1;
(statearr_32005_32035[(2)] = null);

(statearr_32005_32035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (5))){
var inst_31973 = (state_31989[(2)]);
var state_31989__$1 = (function (){var statearr_32006 = state_31989;
(statearr_32006[(11)] = inst_31973);

return statearr_32006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(12),dchan);
} else {
if((state_val_31990 === (14))){
var inst_31975 = (state_31989[(8)]);
var inst_31980 = cljs.core.apply.call(null,f,inst_31975);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31989__$1,(16),out,inst_31980);
} else {
if((state_val_31990 === (16))){
var inst_31982 = (state_31989[(2)]);
var state_31989__$1 = (function (){var statearr_32007 = state_31989;
(statearr_32007[(12)] = inst_31982);

return statearr_32007;
})();
var statearr_32008_32036 = state_31989__$1;
(statearr_32008_32036[(2)] = null);

(statearr_32008_32036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (10))){
var inst_31957 = (state_31989[(2)]);
var inst_31958 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31989__$1 = (function (){var statearr_32009 = state_31989;
(statearr_32009[(13)] = inst_31957);

return statearr_32009;
})();
var statearr_32010_32037 = state_31989__$1;
(statearr_32010_32037[(2)] = inst_31958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (8))){
var inst_31971 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32011_32038 = state_31989__$1;
(statearr_32011_32038[(2)] = inst_31971);

(statearr_32011_32038[(1)] = (5));


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
});})(c__29980__auto___32023,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29868__auto__,c__29980__auto___32023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32015[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32015[(1)] = (1));

return statearr_32015;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_31989){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_31989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32016){if((e32016 instanceof Object)){
var ex__29872__auto__ = e32016;
var statearr_32017_32039 = state_31989;
(statearr_32017_32039[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32040 = state_31989;
state_31989 = G__32040;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_31989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_31989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___32023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29982__auto__ = (function (){var statearr_32018 = f__29981__auto__.call(null);
(statearr_32018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___32023);

return statearr_32018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___32023,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32042 = [];
var len__26342__auto___32100 = arguments.length;
var i__26343__auto___32101 = (0);
while(true){
if((i__26343__auto___32101 < len__26342__auto___32100)){
args32042.push((arguments[i__26343__auto___32101]));

var G__32102 = (i__26343__auto___32101 + (1));
i__26343__auto___32101 = G__32102;
continue;
} else {
}
break;
}

var G__32044 = args32042.length;
switch (G__32044) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32042.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29980__auto___32104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___32104,out){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___32104,out){
return (function (state_32076){
var state_val_32077 = (state_32076[(1)]);
if((state_val_32077 === (7))){
var inst_32056 = (state_32076[(7)]);
var inst_32055 = (state_32076[(8)]);
var inst_32055__$1 = (state_32076[(2)]);
var inst_32056__$1 = cljs.core.nth.call(null,inst_32055__$1,(0),null);
var inst_32057 = cljs.core.nth.call(null,inst_32055__$1,(1),null);
var inst_32058 = (inst_32056__$1 == null);
var state_32076__$1 = (function (){var statearr_32078 = state_32076;
(statearr_32078[(7)] = inst_32056__$1);

(statearr_32078[(9)] = inst_32057);

(statearr_32078[(8)] = inst_32055__$1);

return statearr_32078;
})();
if(cljs.core.truth_(inst_32058)){
var statearr_32079_32105 = state_32076__$1;
(statearr_32079_32105[(1)] = (8));

} else {
var statearr_32080_32106 = state_32076__$1;
(statearr_32080_32106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (1))){
var inst_32045 = cljs.core.vec.call(null,chs);
var inst_32046 = inst_32045;
var state_32076__$1 = (function (){var statearr_32081 = state_32076;
(statearr_32081[(10)] = inst_32046);

return statearr_32081;
})();
var statearr_32082_32107 = state_32076__$1;
(statearr_32082_32107[(2)] = null);

(statearr_32082_32107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (4))){
var inst_32046 = (state_32076[(10)]);
var state_32076__$1 = state_32076;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32076__$1,(7),inst_32046);
} else {
if((state_val_32077 === (6))){
var inst_32072 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32083_32108 = state_32076__$1;
(statearr_32083_32108[(2)] = inst_32072);

(statearr_32083_32108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (3))){
var inst_32074 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32076__$1,inst_32074);
} else {
if((state_val_32077 === (2))){
var inst_32046 = (state_32076[(10)]);
var inst_32048 = cljs.core.count.call(null,inst_32046);
var inst_32049 = (inst_32048 > (0));
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_32049)){
var statearr_32085_32109 = state_32076__$1;
(statearr_32085_32109[(1)] = (4));

} else {
var statearr_32086_32110 = state_32076__$1;
(statearr_32086_32110[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (11))){
var inst_32046 = (state_32076[(10)]);
var inst_32065 = (state_32076[(2)]);
var tmp32084 = inst_32046;
var inst_32046__$1 = tmp32084;
var state_32076__$1 = (function (){var statearr_32087 = state_32076;
(statearr_32087[(11)] = inst_32065);

(statearr_32087[(10)] = inst_32046__$1);

return statearr_32087;
})();
var statearr_32088_32111 = state_32076__$1;
(statearr_32088_32111[(2)] = null);

(statearr_32088_32111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (9))){
var inst_32056 = (state_32076[(7)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32076__$1,(11),out,inst_32056);
} else {
if((state_val_32077 === (5))){
var inst_32070 = cljs.core.async.close_BANG_.call(null,out);
var state_32076__$1 = state_32076;
var statearr_32089_32112 = state_32076__$1;
(statearr_32089_32112[(2)] = inst_32070);

(statearr_32089_32112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (10))){
var inst_32068 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32090_32113 = state_32076__$1;
(statearr_32090_32113[(2)] = inst_32068);

(statearr_32090_32113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (8))){
var inst_32056 = (state_32076[(7)]);
var inst_32046 = (state_32076[(10)]);
var inst_32057 = (state_32076[(9)]);
var inst_32055 = (state_32076[(8)]);
var inst_32060 = (function (){var cs = inst_32046;
var vec__32051 = inst_32055;
var v = inst_32056;
var c = inst_32057;
return ((function (cs,vec__32051,v,c,inst_32056,inst_32046,inst_32057,inst_32055,state_val_32077,c__29980__auto___32104,out){
return (function (p1__32041_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32041_SHARP_);
});
;})(cs,vec__32051,v,c,inst_32056,inst_32046,inst_32057,inst_32055,state_val_32077,c__29980__auto___32104,out))
})();
var inst_32061 = cljs.core.filterv.call(null,inst_32060,inst_32046);
var inst_32046__$1 = inst_32061;
var state_32076__$1 = (function (){var statearr_32091 = state_32076;
(statearr_32091[(10)] = inst_32046__$1);

return statearr_32091;
})();
var statearr_32092_32114 = state_32076__$1;
(statearr_32092_32114[(2)] = null);

(statearr_32092_32114[(1)] = (2));


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
});})(c__29980__auto___32104,out))
;
return ((function (switch__29868__auto__,c__29980__auto___32104,out){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32076){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_32076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32097){if((e32097 instanceof Object)){
var ex__29872__auto__ = e32097;
var statearr_32098_32115 = state_32076;
(statearr_32098_32115[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32116 = state_32076;
state_32076 = G__32116;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___32104,out))
})();
var state__29982__auto__ = (function (){var statearr_32099 = f__29981__auto__.call(null);
(statearr_32099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___32104);

return statearr_32099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___32104,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32117 = [];
var len__26342__auto___32166 = arguments.length;
var i__26343__auto___32167 = (0);
while(true){
if((i__26343__auto___32167 < len__26342__auto___32166)){
args32117.push((arguments[i__26343__auto___32167]));

var G__32168 = (i__26343__auto___32167 + (1));
i__26343__auto___32167 = G__32168;
continue;
} else {
}
break;
}

var G__32119 = args32117.length;
switch (G__32119) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32117.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29980__auto___32170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___32170,out){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___32170,out){
return (function (state_32143){
var state_val_32144 = (state_32143[(1)]);
if((state_val_32144 === (7))){
var inst_32125 = (state_32143[(7)]);
var inst_32125__$1 = (state_32143[(2)]);
var inst_32126 = (inst_32125__$1 == null);
var inst_32127 = cljs.core.not.call(null,inst_32126);
var state_32143__$1 = (function (){var statearr_32145 = state_32143;
(statearr_32145[(7)] = inst_32125__$1);

return statearr_32145;
})();
if(inst_32127){
var statearr_32146_32171 = state_32143__$1;
(statearr_32146_32171[(1)] = (8));

} else {
var statearr_32147_32172 = state_32143__$1;
(statearr_32147_32172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (1))){
var inst_32120 = (0);
var state_32143__$1 = (function (){var statearr_32148 = state_32143;
(statearr_32148[(8)] = inst_32120);

return statearr_32148;
})();
var statearr_32149_32173 = state_32143__$1;
(statearr_32149_32173[(2)] = null);

(statearr_32149_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (4))){
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32143__$1,(7),ch);
} else {
if((state_val_32144 === (6))){
var inst_32138 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32150_32174 = state_32143__$1;
(statearr_32150_32174[(2)] = inst_32138);

(statearr_32150_32174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (3))){
var inst_32140 = (state_32143[(2)]);
var inst_32141 = cljs.core.async.close_BANG_.call(null,out);
var state_32143__$1 = (function (){var statearr_32151 = state_32143;
(statearr_32151[(9)] = inst_32140);

return statearr_32151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32143__$1,inst_32141);
} else {
if((state_val_32144 === (2))){
var inst_32120 = (state_32143[(8)]);
var inst_32122 = (inst_32120 < n);
var state_32143__$1 = state_32143;
if(cljs.core.truth_(inst_32122)){
var statearr_32152_32175 = state_32143__$1;
(statearr_32152_32175[(1)] = (4));

} else {
var statearr_32153_32176 = state_32143__$1;
(statearr_32153_32176[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (11))){
var inst_32120 = (state_32143[(8)]);
var inst_32130 = (state_32143[(2)]);
var inst_32131 = (inst_32120 + (1));
var inst_32120__$1 = inst_32131;
var state_32143__$1 = (function (){var statearr_32154 = state_32143;
(statearr_32154[(10)] = inst_32130);

(statearr_32154[(8)] = inst_32120__$1);

return statearr_32154;
})();
var statearr_32155_32177 = state_32143__$1;
(statearr_32155_32177[(2)] = null);

(statearr_32155_32177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (9))){
var state_32143__$1 = state_32143;
var statearr_32156_32178 = state_32143__$1;
(statearr_32156_32178[(2)] = null);

(statearr_32156_32178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (5))){
var state_32143__$1 = state_32143;
var statearr_32157_32179 = state_32143__$1;
(statearr_32157_32179[(2)] = null);

(statearr_32157_32179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (10))){
var inst_32135 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32158_32180 = state_32143__$1;
(statearr_32158_32180[(2)] = inst_32135);

(statearr_32158_32180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (8))){
var inst_32125 = (state_32143[(7)]);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32143__$1,(11),out,inst_32125);
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
});})(c__29980__auto___32170,out))
;
return ((function (switch__29868__auto__,c__29980__auto___32170,out){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32162[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32162[(1)] = (1));

return statearr_32162;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32143){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_32143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32163){if((e32163 instanceof Object)){
var ex__29872__auto__ = e32163;
var statearr_32164_32181 = state_32143;
(statearr_32164_32181[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32182 = state_32143;
state_32143 = G__32182;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___32170,out))
})();
var state__29982__auto__ = (function (){var statearr_32165 = f__29981__auto__.call(null);
(statearr_32165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___32170);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___32170,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32190 = (function (f,ch,meta32191){
this.f = f;
this.ch = ch;
this.meta32191 = meta32191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32192,meta32191__$1){
var self__ = this;
var _32192__$1 = this;
return (new cljs.core.async.t_cljs$core$async32190(self__.f,self__.ch,meta32191__$1));
});

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32192){
var self__ = this;
var _32192__$1 = this;
return self__.meta32191;
});

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32193 = (function (f,ch,meta32191,_,fn1,meta32194){
this.f = f;
this.ch = ch;
this.meta32191 = meta32191;
this._ = _;
this.fn1 = fn1;
this.meta32194 = meta32194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32195,meta32194__$1){
var self__ = this;
var _32195__$1 = this;
return (new cljs.core.async.t_cljs$core$async32193(self__.f,self__.ch,self__.meta32191,self__._,self__.fn1,meta32194__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32195){
var self__ = this;
var _32195__$1 = this;
return self__.meta32194;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32183_SHARP_){
return f1.call(null,(((p1__32183_SHARP_ == null))?null:self__.f.call(null,p1__32183_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32193.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32191","meta32191",801371115,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32190","cljs.core.async/t_cljs$core$async32190",829568657,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32194","meta32194",807601772,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32193";

cljs.core.async.t_cljs$core$async32193.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async32193");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32193 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32193(f__$1,ch__$1,meta32191__$1,___$2,fn1__$1,meta32194){
return (new cljs.core.async.t_cljs$core$async32193(f__$1,ch__$1,meta32191__$1,___$2,fn1__$1,meta32194));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32193(self__.f,self__.ch,self__.meta32191,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25217__auto__ = ret;
if(cljs.core.truth_(and__25217__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25217__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32191","meta32191",801371115,null)], null);
});

cljs.core.async.t_cljs$core$async32190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32190";

cljs.core.async.t_cljs$core$async32190.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async32190");
});

cljs.core.async.__GT_t_cljs$core$async32190 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32190(f__$1,ch__$1,meta32191){
return (new cljs.core.async.t_cljs$core$async32190(f__$1,ch__$1,meta32191));
});

}

return (new cljs.core.async.t_cljs$core$async32190(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32199 = (function (f,ch,meta32200){
this.f = f;
this.ch = ch;
this.meta32200 = meta32200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32201,meta32200__$1){
var self__ = this;
var _32201__$1 = this;
return (new cljs.core.async.t_cljs$core$async32199(self__.f,self__.ch,meta32200__$1));
});

cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32201){
var self__ = this;
var _32201__$1 = this;
return self__.meta32200;
});

cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32200","meta32200",-623021143,null)], null);
});

cljs.core.async.t_cljs$core$async32199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32199";

cljs.core.async.t_cljs$core$async32199.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async32199");
});

cljs.core.async.__GT_t_cljs$core$async32199 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32199(f__$1,ch__$1,meta32200){
return (new cljs.core.async.t_cljs$core$async32199(f__$1,ch__$1,meta32200));
});

}

return (new cljs.core.async.t_cljs$core$async32199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32205 = (function (p,ch,meta32206){
this.p = p;
this.ch = ch;
this.meta32206 = meta32206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32207,meta32206__$1){
var self__ = this;
var _32207__$1 = this;
return (new cljs.core.async.t_cljs$core$async32205(self__.p,self__.ch,meta32206__$1));
});

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32207){
var self__ = this;
var _32207__$1 = this;
return self__.meta32206;
});

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32206","meta32206",-1073743061,null)], null);
});

cljs.core.async.t_cljs$core$async32205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32205";

cljs.core.async.t_cljs$core$async32205.cljs$lang$ctorPrWriter = (function (this__25840__auto__,writer__25841__auto__,opt__25842__auto__){
return cljs.core._write.call(null,writer__25841__auto__,"cljs.core.async/t_cljs$core$async32205");
});

cljs.core.async.__GT_t_cljs$core$async32205 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32205(p__$1,ch__$1,meta32206){
return (new cljs.core.async.t_cljs$core$async32205(p__$1,ch__$1,meta32206));
});

}

return (new cljs.core.async.t_cljs$core$async32205(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32208 = [];
var len__26342__auto___32252 = arguments.length;
var i__26343__auto___32253 = (0);
while(true){
if((i__26343__auto___32253 < len__26342__auto___32252)){
args32208.push((arguments[i__26343__auto___32253]));

var G__32254 = (i__26343__auto___32253 + (1));
i__26343__auto___32253 = G__32254;
continue;
} else {
}
break;
}

var G__32210 = args32208.length;
switch (G__32210) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32208.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29980__auto___32256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___32256,out){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___32256,out){
return (function (state_32231){
var state_val_32232 = (state_32231[(1)]);
if((state_val_32232 === (7))){
var inst_32227 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32233_32257 = state_32231__$1;
(statearr_32233_32257[(2)] = inst_32227);

(statearr_32233_32257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (1))){
var state_32231__$1 = state_32231;
var statearr_32234_32258 = state_32231__$1;
(statearr_32234_32258[(2)] = null);

(statearr_32234_32258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (4))){
var inst_32213 = (state_32231[(7)]);
var inst_32213__$1 = (state_32231[(2)]);
var inst_32214 = (inst_32213__$1 == null);
var state_32231__$1 = (function (){var statearr_32235 = state_32231;
(statearr_32235[(7)] = inst_32213__$1);

return statearr_32235;
})();
if(cljs.core.truth_(inst_32214)){
var statearr_32236_32259 = state_32231__$1;
(statearr_32236_32259[(1)] = (5));

} else {
var statearr_32237_32260 = state_32231__$1;
(statearr_32237_32260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (6))){
var inst_32213 = (state_32231[(7)]);
var inst_32218 = p.call(null,inst_32213);
var state_32231__$1 = state_32231;
if(cljs.core.truth_(inst_32218)){
var statearr_32238_32261 = state_32231__$1;
(statearr_32238_32261[(1)] = (8));

} else {
var statearr_32239_32262 = state_32231__$1;
(statearr_32239_32262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (3))){
var inst_32229 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32231__$1,inst_32229);
} else {
if((state_val_32232 === (2))){
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32231__$1,(4),ch);
} else {
if((state_val_32232 === (11))){
var inst_32221 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32240_32263 = state_32231__$1;
(statearr_32240_32263[(2)] = inst_32221);

(statearr_32240_32263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (9))){
var state_32231__$1 = state_32231;
var statearr_32241_32264 = state_32231__$1;
(statearr_32241_32264[(2)] = null);

(statearr_32241_32264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (5))){
var inst_32216 = cljs.core.async.close_BANG_.call(null,out);
var state_32231__$1 = state_32231;
var statearr_32242_32265 = state_32231__$1;
(statearr_32242_32265[(2)] = inst_32216);

(statearr_32242_32265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (10))){
var inst_32224 = (state_32231[(2)]);
var state_32231__$1 = (function (){var statearr_32243 = state_32231;
(statearr_32243[(8)] = inst_32224);

return statearr_32243;
})();
var statearr_32244_32266 = state_32231__$1;
(statearr_32244_32266[(2)] = null);

(statearr_32244_32266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (8))){
var inst_32213 = (state_32231[(7)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32231__$1,(11),out,inst_32213);
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
});})(c__29980__auto___32256,out))
;
return ((function (switch__29868__auto__,c__29980__auto___32256,out){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32248 = [null,null,null,null,null,null,null,null,null];
(statearr_32248[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32248[(1)] = (1));

return statearr_32248;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32231){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_32231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32249){if((e32249 instanceof Object)){
var ex__29872__auto__ = e32249;
var statearr_32250_32267 = state_32231;
(statearr_32250_32267[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32268 = state_32231;
state_32231 = G__32268;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___32256,out))
})();
var state__29982__auto__ = (function (){var statearr_32251 = f__29981__auto__.call(null);
(statearr_32251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___32256);

return statearr_32251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___32256,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32269 = [];
var len__26342__auto___32272 = arguments.length;
var i__26343__auto___32273 = (0);
while(true){
if((i__26343__auto___32273 < len__26342__auto___32272)){
args32269.push((arguments[i__26343__auto___32273]));

var G__32274 = (i__26343__auto___32273 + (1));
i__26343__auto___32273 = G__32274;
continue;
} else {
}
break;
}

var G__32271 = args32269.length;
switch (G__32271) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32269.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto__){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto__){
return (function (state_32441){
var state_val_32442 = (state_32441[(1)]);
if((state_val_32442 === (7))){
var inst_32437 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32443_32484 = state_32441__$1;
(statearr_32443_32484[(2)] = inst_32437);

(statearr_32443_32484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (20))){
var inst_32407 = (state_32441[(7)]);
var inst_32418 = (state_32441[(2)]);
var inst_32419 = cljs.core.next.call(null,inst_32407);
var inst_32393 = inst_32419;
var inst_32394 = null;
var inst_32395 = (0);
var inst_32396 = (0);
var state_32441__$1 = (function (){var statearr_32444 = state_32441;
(statearr_32444[(8)] = inst_32394);

(statearr_32444[(9)] = inst_32418);

(statearr_32444[(10)] = inst_32393);

(statearr_32444[(11)] = inst_32396);

(statearr_32444[(12)] = inst_32395);

return statearr_32444;
})();
var statearr_32445_32485 = state_32441__$1;
(statearr_32445_32485[(2)] = null);

(statearr_32445_32485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (1))){
var state_32441__$1 = state_32441;
var statearr_32446_32486 = state_32441__$1;
(statearr_32446_32486[(2)] = null);

(statearr_32446_32486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (4))){
var inst_32382 = (state_32441[(13)]);
var inst_32382__$1 = (state_32441[(2)]);
var inst_32383 = (inst_32382__$1 == null);
var state_32441__$1 = (function (){var statearr_32447 = state_32441;
(statearr_32447[(13)] = inst_32382__$1);

return statearr_32447;
})();
if(cljs.core.truth_(inst_32383)){
var statearr_32448_32487 = state_32441__$1;
(statearr_32448_32487[(1)] = (5));

} else {
var statearr_32449_32488 = state_32441__$1;
(statearr_32449_32488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (15))){
var state_32441__$1 = state_32441;
var statearr_32453_32489 = state_32441__$1;
(statearr_32453_32489[(2)] = null);

(statearr_32453_32489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (21))){
var state_32441__$1 = state_32441;
var statearr_32454_32490 = state_32441__$1;
(statearr_32454_32490[(2)] = null);

(statearr_32454_32490[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (13))){
var inst_32394 = (state_32441[(8)]);
var inst_32393 = (state_32441[(10)]);
var inst_32396 = (state_32441[(11)]);
var inst_32395 = (state_32441[(12)]);
var inst_32403 = (state_32441[(2)]);
var inst_32404 = (inst_32396 + (1));
var tmp32450 = inst_32394;
var tmp32451 = inst_32393;
var tmp32452 = inst_32395;
var inst_32393__$1 = tmp32451;
var inst_32394__$1 = tmp32450;
var inst_32395__$1 = tmp32452;
var inst_32396__$1 = inst_32404;
var state_32441__$1 = (function (){var statearr_32455 = state_32441;
(statearr_32455[(8)] = inst_32394__$1);

(statearr_32455[(10)] = inst_32393__$1);

(statearr_32455[(11)] = inst_32396__$1);

(statearr_32455[(12)] = inst_32395__$1);

(statearr_32455[(14)] = inst_32403);

return statearr_32455;
})();
var statearr_32456_32491 = state_32441__$1;
(statearr_32456_32491[(2)] = null);

(statearr_32456_32491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (22))){
var state_32441__$1 = state_32441;
var statearr_32457_32492 = state_32441__$1;
(statearr_32457_32492[(2)] = null);

(statearr_32457_32492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (6))){
var inst_32382 = (state_32441[(13)]);
var inst_32391 = f.call(null,inst_32382);
var inst_32392 = cljs.core.seq.call(null,inst_32391);
var inst_32393 = inst_32392;
var inst_32394 = null;
var inst_32395 = (0);
var inst_32396 = (0);
var state_32441__$1 = (function (){var statearr_32458 = state_32441;
(statearr_32458[(8)] = inst_32394);

(statearr_32458[(10)] = inst_32393);

(statearr_32458[(11)] = inst_32396);

(statearr_32458[(12)] = inst_32395);

return statearr_32458;
})();
var statearr_32459_32493 = state_32441__$1;
(statearr_32459_32493[(2)] = null);

(statearr_32459_32493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (17))){
var inst_32407 = (state_32441[(7)]);
var inst_32411 = cljs.core.chunk_first.call(null,inst_32407);
var inst_32412 = cljs.core.chunk_rest.call(null,inst_32407);
var inst_32413 = cljs.core.count.call(null,inst_32411);
var inst_32393 = inst_32412;
var inst_32394 = inst_32411;
var inst_32395 = inst_32413;
var inst_32396 = (0);
var state_32441__$1 = (function (){var statearr_32460 = state_32441;
(statearr_32460[(8)] = inst_32394);

(statearr_32460[(10)] = inst_32393);

(statearr_32460[(11)] = inst_32396);

(statearr_32460[(12)] = inst_32395);

return statearr_32460;
})();
var statearr_32461_32494 = state_32441__$1;
(statearr_32461_32494[(2)] = null);

(statearr_32461_32494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (3))){
var inst_32439 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32441__$1,inst_32439);
} else {
if((state_val_32442 === (12))){
var inst_32427 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32462_32495 = state_32441__$1;
(statearr_32462_32495[(2)] = inst_32427);

(statearr_32462_32495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (2))){
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32441__$1,(4),in$);
} else {
if((state_val_32442 === (23))){
var inst_32435 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32463_32496 = state_32441__$1;
(statearr_32463_32496[(2)] = inst_32435);

(statearr_32463_32496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (19))){
var inst_32422 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32464_32497 = state_32441__$1;
(statearr_32464_32497[(2)] = inst_32422);

(statearr_32464_32497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (11))){
var inst_32393 = (state_32441[(10)]);
var inst_32407 = (state_32441[(7)]);
var inst_32407__$1 = cljs.core.seq.call(null,inst_32393);
var state_32441__$1 = (function (){var statearr_32465 = state_32441;
(statearr_32465[(7)] = inst_32407__$1);

return statearr_32465;
})();
if(inst_32407__$1){
var statearr_32466_32498 = state_32441__$1;
(statearr_32466_32498[(1)] = (14));

} else {
var statearr_32467_32499 = state_32441__$1;
(statearr_32467_32499[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (9))){
var inst_32429 = (state_32441[(2)]);
var inst_32430 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32441__$1 = (function (){var statearr_32468 = state_32441;
(statearr_32468[(15)] = inst_32429);

return statearr_32468;
})();
if(cljs.core.truth_(inst_32430)){
var statearr_32469_32500 = state_32441__$1;
(statearr_32469_32500[(1)] = (21));

} else {
var statearr_32470_32501 = state_32441__$1;
(statearr_32470_32501[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (5))){
var inst_32385 = cljs.core.async.close_BANG_.call(null,out);
var state_32441__$1 = state_32441;
var statearr_32471_32502 = state_32441__$1;
(statearr_32471_32502[(2)] = inst_32385);

(statearr_32471_32502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (14))){
var inst_32407 = (state_32441[(7)]);
var inst_32409 = cljs.core.chunked_seq_QMARK_.call(null,inst_32407);
var state_32441__$1 = state_32441;
if(inst_32409){
var statearr_32472_32503 = state_32441__$1;
(statearr_32472_32503[(1)] = (17));

} else {
var statearr_32473_32504 = state_32441__$1;
(statearr_32473_32504[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (16))){
var inst_32425 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32474_32505 = state_32441__$1;
(statearr_32474_32505[(2)] = inst_32425);

(statearr_32474_32505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (10))){
var inst_32394 = (state_32441[(8)]);
var inst_32396 = (state_32441[(11)]);
var inst_32401 = cljs.core._nth.call(null,inst_32394,inst_32396);
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32441__$1,(13),out,inst_32401);
} else {
if((state_val_32442 === (18))){
var inst_32407 = (state_32441[(7)]);
var inst_32416 = cljs.core.first.call(null,inst_32407);
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32441__$1,(20),out,inst_32416);
} else {
if((state_val_32442 === (8))){
var inst_32396 = (state_32441[(11)]);
var inst_32395 = (state_32441[(12)]);
var inst_32398 = (inst_32396 < inst_32395);
var inst_32399 = inst_32398;
var state_32441__$1 = state_32441;
if(cljs.core.truth_(inst_32399)){
var statearr_32475_32506 = state_32441__$1;
(statearr_32475_32506[(1)] = (10));

} else {
var statearr_32476_32507 = state_32441__$1;
(statearr_32476_32507[(1)] = (11));

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
});})(c__29980__auto__))
;
return ((function (switch__29868__auto__,c__29980__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____0 = (function (){
var statearr_32480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32480[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__);

(statearr_32480[(1)] = (1));

return statearr_32480;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____1 = (function (state_32441){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_32441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32481){if((e32481 instanceof Object)){
var ex__29872__auto__ = e32481;
var statearr_32482_32508 = state_32441;
(statearr_32482_32508[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32509 = state_32441;
state_32441 = G__32509;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__ = function(state_32441){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____1.call(this,state_32441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29869__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto__))
})();
var state__29982__auto__ = (function (){var statearr_32483 = f__29981__auto__.call(null);
(statearr_32483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto__);

return statearr_32483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto__))
);

return c__29980__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32510 = [];
var len__26342__auto___32513 = arguments.length;
var i__26343__auto___32514 = (0);
while(true){
if((i__26343__auto___32514 < len__26342__auto___32513)){
args32510.push((arguments[i__26343__auto___32514]));

var G__32515 = (i__26343__auto___32514 + (1));
i__26343__auto___32514 = G__32515;
continue;
} else {
}
break;
}

var G__32512 = args32510.length;
switch (G__32512) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32510.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32517 = [];
var len__26342__auto___32520 = arguments.length;
var i__26343__auto___32521 = (0);
while(true){
if((i__26343__auto___32521 < len__26342__auto___32520)){
args32517.push((arguments[i__26343__auto___32521]));

var G__32522 = (i__26343__auto___32521 + (1));
i__26343__auto___32521 = G__32522;
continue;
} else {
}
break;
}

var G__32519 = args32517.length;
switch (G__32519) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32517.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32524 = [];
var len__26342__auto___32575 = arguments.length;
var i__26343__auto___32576 = (0);
while(true){
if((i__26343__auto___32576 < len__26342__auto___32575)){
args32524.push((arguments[i__26343__auto___32576]));

var G__32577 = (i__26343__auto___32576 + (1));
i__26343__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var G__32526 = args32524.length;
switch (G__32526) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32524.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29980__auto___32579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___32579,out){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___32579,out){
return (function (state_32550){
var state_val_32551 = (state_32550[(1)]);
if((state_val_32551 === (7))){
var inst_32545 = (state_32550[(2)]);
var state_32550__$1 = state_32550;
var statearr_32552_32580 = state_32550__$1;
(statearr_32552_32580[(2)] = inst_32545);

(statearr_32552_32580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (1))){
var inst_32527 = null;
var state_32550__$1 = (function (){var statearr_32553 = state_32550;
(statearr_32553[(7)] = inst_32527);

return statearr_32553;
})();
var statearr_32554_32581 = state_32550__$1;
(statearr_32554_32581[(2)] = null);

(statearr_32554_32581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (4))){
var inst_32530 = (state_32550[(8)]);
var inst_32530__$1 = (state_32550[(2)]);
var inst_32531 = (inst_32530__$1 == null);
var inst_32532 = cljs.core.not.call(null,inst_32531);
var state_32550__$1 = (function (){var statearr_32555 = state_32550;
(statearr_32555[(8)] = inst_32530__$1);

return statearr_32555;
})();
if(inst_32532){
var statearr_32556_32582 = state_32550__$1;
(statearr_32556_32582[(1)] = (5));

} else {
var statearr_32557_32583 = state_32550__$1;
(statearr_32557_32583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (6))){
var state_32550__$1 = state_32550;
var statearr_32558_32584 = state_32550__$1;
(statearr_32558_32584[(2)] = null);

(statearr_32558_32584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (3))){
var inst_32547 = (state_32550[(2)]);
var inst_32548 = cljs.core.async.close_BANG_.call(null,out);
var state_32550__$1 = (function (){var statearr_32559 = state_32550;
(statearr_32559[(9)] = inst_32547);

return statearr_32559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32550__$1,inst_32548);
} else {
if((state_val_32551 === (2))){
var state_32550__$1 = state_32550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32550__$1,(4),ch);
} else {
if((state_val_32551 === (11))){
var inst_32530 = (state_32550[(8)]);
var inst_32539 = (state_32550[(2)]);
var inst_32527 = inst_32530;
var state_32550__$1 = (function (){var statearr_32560 = state_32550;
(statearr_32560[(7)] = inst_32527);

(statearr_32560[(10)] = inst_32539);

return statearr_32560;
})();
var statearr_32561_32585 = state_32550__$1;
(statearr_32561_32585[(2)] = null);

(statearr_32561_32585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (9))){
var inst_32530 = (state_32550[(8)]);
var state_32550__$1 = state_32550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32550__$1,(11),out,inst_32530);
} else {
if((state_val_32551 === (5))){
var inst_32527 = (state_32550[(7)]);
var inst_32530 = (state_32550[(8)]);
var inst_32534 = cljs.core._EQ_.call(null,inst_32530,inst_32527);
var state_32550__$1 = state_32550;
if(inst_32534){
var statearr_32563_32586 = state_32550__$1;
(statearr_32563_32586[(1)] = (8));

} else {
var statearr_32564_32587 = state_32550__$1;
(statearr_32564_32587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (10))){
var inst_32542 = (state_32550[(2)]);
var state_32550__$1 = state_32550;
var statearr_32565_32588 = state_32550__$1;
(statearr_32565_32588[(2)] = inst_32542);

(statearr_32565_32588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (8))){
var inst_32527 = (state_32550[(7)]);
var tmp32562 = inst_32527;
var inst_32527__$1 = tmp32562;
var state_32550__$1 = (function (){var statearr_32566 = state_32550;
(statearr_32566[(7)] = inst_32527__$1);

return statearr_32566;
})();
var statearr_32567_32589 = state_32550__$1;
(statearr_32567_32589[(2)] = null);

(statearr_32567_32589[(1)] = (2));


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
});})(c__29980__auto___32579,out))
;
return ((function (switch__29868__auto__,c__29980__auto___32579,out){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32571[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32571[(1)] = (1));

return statearr_32571;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32550){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_32550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32572){if((e32572 instanceof Object)){
var ex__29872__auto__ = e32572;
var statearr_32573_32590 = state_32550;
(statearr_32573_32590[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32591 = state_32550;
state_32550 = G__32591;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___32579,out))
})();
var state__29982__auto__ = (function (){var statearr_32574 = f__29981__auto__.call(null);
(statearr_32574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___32579);

return statearr_32574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___32579,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32592 = [];
var len__26342__auto___32662 = arguments.length;
var i__26343__auto___32663 = (0);
while(true){
if((i__26343__auto___32663 < len__26342__auto___32662)){
args32592.push((arguments[i__26343__auto___32663]));

var G__32664 = (i__26343__auto___32663 + (1));
i__26343__auto___32663 = G__32664;
continue;
} else {
}
break;
}

var G__32594 = args32592.length;
switch (G__32594) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32592.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29980__auto___32666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___32666,out){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___32666,out){
return (function (state_32632){
var state_val_32633 = (state_32632[(1)]);
if((state_val_32633 === (7))){
var inst_32628 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32634_32667 = state_32632__$1;
(statearr_32634_32667[(2)] = inst_32628);

(statearr_32634_32667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (1))){
var inst_32595 = (new Array(n));
var inst_32596 = inst_32595;
var inst_32597 = (0);
var state_32632__$1 = (function (){var statearr_32635 = state_32632;
(statearr_32635[(7)] = inst_32597);

(statearr_32635[(8)] = inst_32596);

return statearr_32635;
})();
var statearr_32636_32668 = state_32632__$1;
(statearr_32636_32668[(2)] = null);

(statearr_32636_32668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (4))){
var inst_32600 = (state_32632[(9)]);
var inst_32600__$1 = (state_32632[(2)]);
var inst_32601 = (inst_32600__$1 == null);
var inst_32602 = cljs.core.not.call(null,inst_32601);
var state_32632__$1 = (function (){var statearr_32637 = state_32632;
(statearr_32637[(9)] = inst_32600__$1);

return statearr_32637;
})();
if(inst_32602){
var statearr_32638_32669 = state_32632__$1;
(statearr_32638_32669[(1)] = (5));

} else {
var statearr_32639_32670 = state_32632__$1;
(statearr_32639_32670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (15))){
var inst_32622 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32640_32671 = state_32632__$1;
(statearr_32640_32671[(2)] = inst_32622);

(statearr_32640_32671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (13))){
var state_32632__$1 = state_32632;
var statearr_32641_32672 = state_32632__$1;
(statearr_32641_32672[(2)] = null);

(statearr_32641_32672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (6))){
var inst_32597 = (state_32632[(7)]);
var inst_32618 = (inst_32597 > (0));
var state_32632__$1 = state_32632;
if(cljs.core.truth_(inst_32618)){
var statearr_32642_32673 = state_32632__$1;
(statearr_32642_32673[(1)] = (12));

} else {
var statearr_32643_32674 = state_32632__$1;
(statearr_32643_32674[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (3))){
var inst_32630 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32632__$1,inst_32630);
} else {
if((state_val_32633 === (12))){
var inst_32596 = (state_32632[(8)]);
var inst_32620 = cljs.core.vec.call(null,inst_32596);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32632__$1,(15),out,inst_32620);
} else {
if((state_val_32633 === (2))){
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32632__$1,(4),ch);
} else {
if((state_val_32633 === (11))){
var inst_32612 = (state_32632[(2)]);
var inst_32613 = (new Array(n));
var inst_32596 = inst_32613;
var inst_32597 = (0);
var state_32632__$1 = (function (){var statearr_32644 = state_32632;
(statearr_32644[(7)] = inst_32597);

(statearr_32644[(8)] = inst_32596);

(statearr_32644[(10)] = inst_32612);

return statearr_32644;
})();
var statearr_32645_32675 = state_32632__$1;
(statearr_32645_32675[(2)] = null);

(statearr_32645_32675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (9))){
var inst_32596 = (state_32632[(8)]);
var inst_32610 = cljs.core.vec.call(null,inst_32596);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32632__$1,(11),out,inst_32610);
} else {
if((state_val_32633 === (5))){
var inst_32597 = (state_32632[(7)]);
var inst_32605 = (state_32632[(11)]);
var inst_32596 = (state_32632[(8)]);
var inst_32600 = (state_32632[(9)]);
var inst_32604 = (inst_32596[inst_32597] = inst_32600);
var inst_32605__$1 = (inst_32597 + (1));
var inst_32606 = (inst_32605__$1 < n);
var state_32632__$1 = (function (){var statearr_32646 = state_32632;
(statearr_32646[(12)] = inst_32604);

(statearr_32646[(11)] = inst_32605__$1);

return statearr_32646;
})();
if(cljs.core.truth_(inst_32606)){
var statearr_32647_32676 = state_32632__$1;
(statearr_32647_32676[(1)] = (8));

} else {
var statearr_32648_32677 = state_32632__$1;
(statearr_32648_32677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (14))){
var inst_32625 = (state_32632[(2)]);
var inst_32626 = cljs.core.async.close_BANG_.call(null,out);
var state_32632__$1 = (function (){var statearr_32650 = state_32632;
(statearr_32650[(13)] = inst_32625);

return statearr_32650;
})();
var statearr_32651_32678 = state_32632__$1;
(statearr_32651_32678[(2)] = inst_32626);

(statearr_32651_32678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (10))){
var inst_32616 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32652_32679 = state_32632__$1;
(statearr_32652_32679[(2)] = inst_32616);

(statearr_32652_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (8))){
var inst_32605 = (state_32632[(11)]);
var inst_32596 = (state_32632[(8)]);
var tmp32649 = inst_32596;
var inst_32596__$1 = tmp32649;
var inst_32597 = inst_32605;
var state_32632__$1 = (function (){var statearr_32653 = state_32632;
(statearr_32653[(7)] = inst_32597);

(statearr_32653[(8)] = inst_32596__$1);

return statearr_32653;
})();
var statearr_32654_32680 = state_32632__$1;
(statearr_32654_32680[(2)] = null);

(statearr_32654_32680[(1)] = (2));


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
});})(c__29980__auto___32666,out))
;
return ((function (switch__29868__auto__,c__29980__auto___32666,out){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32658[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32658[(1)] = (1));

return statearr_32658;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32632){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_32632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32659){if((e32659 instanceof Object)){
var ex__29872__auto__ = e32659;
var statearr_32660_32681 = state_32632;
(statearr_32660_32681[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32632;
state_32632 = G__32682;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___32666,out))
})();
var state__29982__auto__ = (function (){var statearr_32661 = f__29981__auto__.call(null);
(statearr_32661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___32666);

return statearr_32661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___32666,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32683 = [];
var len__26342__auto___32757 = arguments.length;
var i__26343__auto___32758 = (0);
while(true){
if((i__26343__auto___32758 < len__26342__auto___32757)){
args32683.push((arguments[i__26343__auto___32758]));

var G__32759 = (i__26343__auto___32758 + (1));
i__26343__auto___32758 = G__32759;
continue;
} else {
}
break;
}

var G__32685 = args32683.length;
switch (G__32685) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32683.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29980__auto___32761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29980__auto___32761,out){
return (function (){
var f__29981__auto__ = (function (){var switch__29868__auto__ = ((function (c__29980__auto___32761,out){
return (function (state_32727){
var state_val_32728 = (state_32727[(1)]);
if((state_val_32728 === (7))){
var inst_32723 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32729_32762 = state_32727__$1;
(statearr_32729_32762[(2)] = inst_32723);

(statearr_32729_32762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (1))){
var inst_32686 = [];
var inst_32687 = inst_32686;
var inst_32688 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32727__$1 = (function (){var statearr_32730 = state_32727;
(statearr_32730[(7)] = inst_32688);

(statearr_32730[(8)] = inst_32687);

return statearr_32730;
})();
var statearr_32731_32763 = state_32727__$1;
(statearr_32731_32763[(2)] = null);

(statearr_32731_32763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (4))){
var inst_32691 = (state_32727[(9)]);
var inst_32691__$1 = (state_32727[(2)]);
var inst_32692 = (inst_32691__$1 == null);
var inst_32693 = cljs.core.not.call(null,inst_32692);
var state_32727__$1 = (function (){var statearr_32732 = state_32727;
(statearr_32732[(9)] = inst_32691__$1);

return statearr_32732;
})();
if(inst_32693){
var statearr_32733_32764 = state_32727__$1;
(statearr_32733_32764[(1)] = (5));

} else {
var statearr_32734_32765 = state_32727__$1;
(statearr_32734_32765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (15))){
var inst_32717 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32735_32766 = state_32727__$1;
(statearr_32735_32766[(2)] = inst_32717);

(statearr_32735_32766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (13))){
var state_32727__$1 = state_32727;
var statearr_32736_32767 = state_32727__$1;
(statearr_32736_32767[(2)] = null);

(statearr_32736_32767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (6))){
var inst_32687 = (state_32727[(8)]);
var inst_32712 = inst_32687.length;
var inst_32713 = (inst_32712 > (0));
var state_32727__$1 = state_32727;
if(cljs.core.truth_(inst_32713)){
var statearr_32737_32768 = state_32727__$1;
(statearr_32737_32768[(1)] = (12));

} else {
var statearr_32738_32769 = state_32727__$1;
(statearr_32738_32769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (3))){
var inst_32725 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32727__$1,inst_32725);
} else {
if((state_val_32728 === (12))){
var inst_32687 = (state_32727[(8)]);
var inst_32715 = cljs.core.vec.call(null,inst_32687);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32727__$1,(15),out,inst_32715);
} else {
if((state_val_32728 === (2))){
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32727__$1,(4),ch);
} else {
if((state_val_32728 === (11))){
var inst_32691 = (state_32727[(9)]);
var inst_32695 = (state_32727[(10)]);
var inst_32705 = (state_32727[(2)]);
var inst_32706 = [];
var inst_32707 = inst_32706.push(inst_32691);
var inst_32687 = inst_32706;
var inst_32688 = inst_32695;
var state_32727__$1 = (function (){var statearr_32739 = state_32727;
(statearr_32739[(11)] = inst_32705);

(statearr_32739[(12)] = inst_32707);

(statearr_32739[(7)] = inst_32688);

(statearr_32739[(8)] = inst_32687);

return statearr_32739;
})();
var statearr_32740_32770 = state_32727__$1;
(statearr_32740_32770[(2)] = null);

(statearr_32740_32770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (9))){
var inst_32687 = (state_32727[(8)]);
var inst_32703 = cljs.core.vec.call(null,inst_32687);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32727__$1,(11),out,inst_32703);
} else {
if((state_val_32728 === (5))){
var inst_32691 = (state_32727[(9)]);
var inst_32688 = (state_32727[(7)]);
var inst_32695 = (state_32727[(10)]);
var inst_32695__$1 = f.call(null,inst_32691);
var inst_32696 = cljs.core._EQ_.call(null,inst_32695__$1,inst_32688);
var inst_32697 = cljs.core.keyword_identical_QMARK_.call(null,inst_32688,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32698 = (inst_32696) || (inst_32697);
var state_32727__$1 = (function (){var statearr_32741 = state_32727;
(statearr_32741[(10)] = inst_32695__$1);

return statearr_32741;
})();
if(cljs.core.truth_(inst_32698)){
var statearr_32742_32771 = state_32727__$1;
(statearr_32742_32771[(1)] = (8));

} else {
var statearr_32743_32772 = state_32727__$1;
(statearr_32743_32772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (14))){
var inst_32720 = (state_32727[(2)]);
var inst_32721 = cljs.core.async.close_BANG_.call(null,out);
var state_32727__$1 = (function (){var statearr_32745 = state_32727;
(statearr_32745[(13)] = inst_32720);

return statearr_32745;
})();
var statearr_32746_32773 = state_32727__$1;
(statearr_32746_32773[(2)] = inst_32721);

(statearr_32746_32773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (10))){
var inst_32710 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32747_32774 = state_32727__$1;
(statearr_32747_32774[(2)] = inst_32710);

(statearr_32747_32774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (8))){
var inst_32691 = (state_32727[(9)]);
var inst_32695 = (state_32727[(10)]);
var inst_32687 = (state_32727[(8)]);
var inst_32700 = inst_32687.push(inst_32691);
var tmp32744 = inst_32687;
var inst_32687__$1 = tmp32744;
var inst_32688 = inst_32695;
var state_32727__$1 = (function (){var statearr_32748 = state_32727;
(statearr_32748[(14)] = inst_32700);

(statearr_32748[(7)] = inst_32688);

(statearr_32748[(8)] = inst_32687__$1);

return statearr_32748;
})();
var statearr_32749_32775 = state_32727__$1;
(statearr_32749_32775[(2)] = null);

(statearr_32749_32775[(1)] = (2));


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
});})(c__29980__auto___32761,out))
;
return ((function (switch__29868__auto__,c__29980__auto___32761,out){
return (function() {
var cljs$core$async$state_machine__29869__auto__ = null;
var cljs$core$async$state_machine__29869__auto____0 = (function (){
var statearr_32753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32753[(0)] = cljs$core$async$state_machine__29869__auto__);

(statearr_32753[(1)] = (1));

return statearr_32753;
});
var cljs$core$async$state_machine__29869__auto____1 = (function (state_32727){
while(true){
var ret_value__29870__auto__ = (function (){try{while(true){
var result__29871__auto__ = switch__29868__auto__.call(null,state_32727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29871__auto__;
}
break;
}
}catch (e32754){if((e32754 instanceof Object)){
var ex__29872__auto__ = e32754;
var statearr_32755_32776 = state_32727;
(statearr_32755_32776[(5)] = ex__29872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32777 = state_32727;
state_32727 = G__32777;
continue;
} else {
return ret_value__29870__auto__;
}
break;
}
});
cljs$core$async$state_machine__29869__auto__ = function(state_32727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29869__auto____1.call(this,state_32727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29869__auto____0;
cljs$core$async$state_machine__29869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29869__auto____1;
return cljs$core$async$state_machine__29869__auto__;
})()
;})(switch__29868__auto__,c__29980__auto___32761,out))
})();
var state__29982__auto__ = (function (){var statearr_32756 = f__29981__auto__.call(null);
(statearr_32756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29980__auto___32761);

return statearr_32756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29982__auto__);
});})(c__29980__auto___32761,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1488028159467