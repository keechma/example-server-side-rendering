// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.middleware.session');
goog.require('cljs.core');
goog.require('macchiato.session.memory');
goog.require('macchiato.session.store');
macchiato.middleware.session.session_options = (function macchiato$middleware$session$session_options(options){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),options.call(null,new cljs.core.Keyword(null,"store","store",1512230022),macchiato.session.memory.memory_store.call(null)),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745),options.call(null,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745),"macchiato-session"),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"http-only","http-only",-825379555),true], null),options.call(null,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946)),(function (){var temp__4655__auto__ = options.call(null,new cljs.core.Keyword(null,"root","root",-448657453));
if(cljs.core.truth_(temp__4655__auto__)){
var root = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),root], null);
} else {
return null;
}
})())], null);
});
macchiato.middleware.session.bare_session_request = (function macchiato$middleware$session$bare_session_request(request,p__29617){
var map__29620 = p__29617;
var map__29620__$1 = ((((!((map__29620 == null)))?((((map__29620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29620):map__29620);
var store = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var req_key = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookies","cookies",1839416329),cookie_name,new cljs.core.Keyword(null,"value","value",305978217)], null));
var session = macchiato.session.store.read_session.call(null,store,req_key);
var session_key = (cljs.core.truth_(session)?req_key:null);
return cljs.core.merge.call(null,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session","session",1008279103),(function (){var or__25229__auto__ = session;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("session","key","session/key",756123603),session_key], null));
});
macchiato.middleware.session.session_request = (function macchiato$middleware$session$session_request(var_args){
var args29622 = [];
var len__26342__auto___29625 = arguments.length;
var i__26343__auto___29626 = (0);
while(true){
if((i__26343__auto___29626 < len__26342__auto___29625)){
args29622.push((arguments[i__26343__auto___29626]));

var G__29627 = (i__26343__auto___29626 + (1));
i__26343__auto___29626 = G__29627;
continue;
} else {
}
break;
}

var G__29624 = args29622.length;
switch (G__29624) {
case 1:
return macchiato.middleware.session.session_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.session.session_request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29622.length)].join('')));

}
});

macchiato.middleware.session.session_request.cljs$core$IFn$_invoke$arity$1 = (function (request){
return macchiato.middleware.session.session_request.call(null,request,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.session.session_request.cljs$core$IFn$_invoke$arity$2 = (function (request,options){
return macchiato.middleware.session.bare_session_request.call(null,request,options);
});

macchiato.middleware.session.session_request.cljs$lang$maxFixedArity = 2;

macchiato.middleware.session.bare_session_response = (function macchiato$middleware$session$bare_session_response(p__29629,p__29630,p__29631){
var map__29638 = p__29629;
var map__29638__$1 = ((((!((map__29638 == null)))?((((map__29638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29638):map__29638);
var response = map__29638__$1;
var session_cookie_attrs = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706));
var map__29639 = p__29630;
var map__29639__$1 = ((((!((map__29639 == null)))?((((map__29639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29639):map__29639);
var session_key = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword("session","key","session/key",756123603));
var map__29640 = p__29631;
var map__29640__$1 = ((((!((map__29640 == null)))?((((map__29640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29640):map__29640);
var store = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var cookie_attrs = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946));
var new_session_key = ((cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103)))?(function (){var temp__4655__auto__ = response.call(null,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(temp__4655__auto__)){
var session = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"recreate","recreate",706397197).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,session)))){
macchiato.session.store.delete_session.call(null,store,session_key);

return macchiato.session.store.write_session.call(null,store,null,cljs.core.vary_meta.call(null,session,cljs.core.dissoc,new cljs.core.Keyword(null,"recreate","recreate",706397197)));
} else {
return macchiato.session.store.write_session.call(null,store,session_key,session);
}
} else {
if(cljs.core.truth_(session_key)){
return macchiato.session.store.delete_session.call(null,store,session_key);
} else {
return null;
}
}
})():null);
var cookie = cljs.core.PersistentArrayMap.createAsIfByAssoc([cookie_name,cljs.core.merge.call(null,cookie_attrs,session_cookie_attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25229__auto__ = new_session_key;
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return session_key;
}
})()], null))]);
var response__$1 = cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706));
if(cljs.core.truth_((function (){var or__25229__auto__ = (function (){var and__25217__auto__ = new_session_key;
if(cljs.core.truth_(and__25217__auto__)){
return cljs.core.not_EQ_.call(null,session_key,new_session_key);
} else {
return and__25217__auto__;
}
})();
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
var and__25217__auto__ = session_cookie_attrs;
if(cljs.core.truth_(and__25217__auto__)){
var or__25229__auto____$1 = new_session_key;
if(cljs.core.truth_(or__25229__auto____$1)){
return or__25229__auto____$1;
} else {
return session_key;
}
} else {
return and__25217__auto__;
}
}
})())){
return cljs.core.update.call(null,response__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329),cljs.core.merge,cookie);
} else {
return response__$1;
}
});
macchiato.middleware.session.session_response = (function macchiato$middleware$session$session_response(request,response,options){
return (function (response_map){
var G__29645 = response_map;
var G__29645__$1 = (((G__29645 == null))?null:macchiato.middleware.session.bare_session_response.call(null,G__29645,request,options));
if((G__29645__$1 == null)){
return null;
} else {
return response.call(null,G__29645__$1);
}
});
});
macchiato.middleware.session.wrap_session = (function macchiato$middleware$session$wrap_session(var_args){
var args29646 = [];
var len__26342__auto___29649 = arguments.length;
var i__26343__auto___29650 = (0);
while(true){
if((i__26343__auto___29650 < len__26342__auto___29649)){
args29646.push((arguments[i__26343__auto___29650]));

var G__29651 = (i__26343__auto___29650 + (1));
i__26343__auto___29650 = G__29651;
continue;
} else {
}
break;
}

var G__29648 = args29646.length;
switch (G__29648) {
case 1:
return macchiato.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29646.length)].join('')));

}
});

macchiato.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return macchiato.middleware.session.wrap_session.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
var options__$1 = macchiato.middleware.session.session_options.call(null,options);
return ((function (options__$1){
return (function (request,respond,raise){
var request__$1 = macchiato.middleware.session.session_request.call(null,request,options__$1);
return handler.call(null,request__$1,macchiato.middleware.session.session_response.call(null,request__$1,respond,options__$1),raise);
});
;})(options__$1))
});

macchiato.middleware.session.wrap_session.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=session.js.map?rel=1488028096288