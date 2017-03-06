// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.cookies');
goog.require('cljs.core');
goog.require('cljs.nodejs');
macchiato.cookies.Cookies = cljs.nodejs.require.call(null,"cookies");
macchiato.cookies.random_bytes = cljs.nodejs.require.call(null,"random-bytes");
macchiato.cookies.secret = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((new macchiato.cookies.random_bytes((32))))].join('');
/**
 * HTTP token: 1*<any CHAR except CTLs or tspecials>. See RFC2068
 */
macchiato.cookies.re_token = /[!#$%&'*\-+.0-9A-Z\^_`a-z\|~]+/;
/**
 * RFC6265 cookie-octet
 */
macchiato.cookies.re_cookie_octet = /[!#$%&'()*+\-.\/0-9:<=>?@A-Z\[\]\^_`a-z\{\|\}~]/;
/**
 * RFC6265 cookie-value
 */
macchiato.cookies.re_cookie_value = cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(macchiato.cookies.re_cookie_octet.source),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*\"|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(macchiato.cookies.re_cookie_octet.source),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*")].join(''));
/**
 * RFC6265 set-cookie-string
 */
macchiato.cookies.re_cookie = cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\s*("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(macchiato.cookies.re_token.source),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")=("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(macchiato.cookies.re_cookie_value.source),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")\\s*[;,]?")].join(''));

/**
 * @interface
 */
macchiato.cookies.ICookie = function(){};

/**
 * serialize cookie value
 */
macchiato.cookies._serialize_cookie = (function macchiato$cookies$_serialize_cookie(cookie){
if((!((cookie == null))) && (!((cookie.macchiato$cookies$ICookie$_serialize_cookie$arity$1 == null)))){
return cookie.macchiato$cookies$ICookie$_serialize_cookie$arity$1(cookie);
} else {
var x__25897__auto__ = (((cookie == null))?null:cookie);
var m__25898__auto__ = (macchiato.cookies._serialize_cookie[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,cookie);
} else {
var m__25898__auto____$1 = (macchiato.cookies._serialize_cookie["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,cookie);
} else {
throw cljs.core.missing_protocol.call(null,"ICookie.-serialize-cookie",cookie);
}
}
}
});

(macchiato.cookies.ICookie["null"] = true);

(macchiato.cookies._serialize_cookie["null"] = (function (_){
return null;
}));

(macchiato.cookies.ICookie["string"] = true);

(macchiato.cookies._serialize_cookie["string"] = (function (cookie){
return cookie;
}));

cljs.core.PersistentHashMap.prototype.macchiato$cookies$ICookie$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.macchiato$cookies$ICookie$_serialize_cookie$arity$1 = (function (cookie){
var cookie__$1 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,cookie__$1));
});

cljs.core.PersistentArrayMap.prototype.macchiato$cookies$ICookie$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.macchiato$cookies$ICookie$_serialize_cookie$arity$1 = (function (cookie){
var cookie__$1 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,cookie__$1));
});
macchiato.cookies.translate_cookie_opts = (function macchiato$cookies$translate_cookie_opts(p__29655){
var map__29658 = p__29655;
var map__29658__$1 = ((((!((map__29658 == null)))?((((map__29658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29658):map__29658);
var secure = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"secure","secure",176883900));
var max_age = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"max-age","max-age",-270129271));
var expires = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"expires","expires",1393008816));
var http_only = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"http-only","http-only",-825379555));
var path = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var domain = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var overwrite_QMARK_ = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"overwrite?","overwrite?",544824547));
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,(cljs.core.truth_(secure)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"signed","signed",305517343),true], null):null),(cljs.core.truth_(max_age)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxAge","maxAge",868089807),max_age], null):null),(cljs.core.truth_(path)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null):null),(cljs.core.truth_(domain)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),domain], null):null),(cljs.core.truth_(expires)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expires","expires",1393008816),expires], null):null),(cljs.core.truth_(http_only)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-only","http-only",-825379555),http_only], null):null),(cljs.core.truth_(overwrite_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overwrite","overwrite",1291442417),overwrite_QMARK_], null):null)));
});
macchiato.cookies.gen_keys = (function macchiato$cookies$gen_keys(cookie_opts){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),(function (){var or__25229__auto__ = new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(cookie_opts);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [macchiato.cookies.secret], null);
}
})()], null));
});
macchiato.cookies.signed = (function macchiato$cookies$signed(opts){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"signed","signed",305517343),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"signed?","signed?",288520857).cljs$core$IFn$_invoke$arity$1(opts))], null));
});
macchiato.cookies.set_cookies = (function macchiato$cookies$set_cookies(cookies,req,res,cookie_opts){
var cookie_manager = (new macchiato.cookies.Cookies(req,res,cljs.core.clj__GT_js.call(null,macchiato.cookies.gen_keys.call(null,cookie_opts))));
var seq__29674 = cljs.core.seq.call(null,cookies);
var chunk__29675 = null;
var count__29676 = (0);
var i__29677 = (0);
while(true){
if((i__29677 < count__29676)){
var vec__29678 = cljs.core._nth.call(null,chunk__29675,i__29677);
var k = cljs.core.nth.call(null,vec__29678,(0),null);
var map__29681 = cljs.core.nth.call(null,vec__29678,(1),null);
var map__29681__$1 = ((((!((map__29681 == null)))?((((map__29681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29681):map__29681);
var opts = map__29681__$1;
var value = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"value","value",305978217));
cookie_manager.set(cljs.core.name.call(null,k),macchiato.cookies._serialize_cookie.call(null,value),macchiato.cookies.translate_cookie_opts.call(null,opts));

var G__29688 = seq__29674;
var G__29689 = chunk__29675;
var G__29690 = count__29676;
var G__29691 = (i__29677 + (1));
seq__29674 = G__29688;
chunk__29675 = G__29689;
count__29676 = G__29690;
i__29677 = G__29691;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29674);
if(temp__4657__auto__){
var seq__29674__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29674__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__29674__$1);
var G__29692 = cljs.core.chunk_rest.call(null,seq__29674__$1);
var G__29693 = c__26048__auto__;
var G__29694 = cljs.core.count.call(null,c__26048__auto__);
var G__29695 = (0);
seq__29674 = G__29692;
chunk__29675 = G__29693;
count__29676 = G__29694;
i__29677 = G__29695;
continue;
} else {
var vec__29683 = cljs.core.first.call(null,seq__29674__$1);
var k = cljs.core.nth.call(null,vec__29683,(0),null);
var map__29686 = cljs.core.nth.call(null,vec__29683,(1),null);
var map__29686__$1 = ((((!((map__29686 == null)))?((((map__29686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);
var opts = map__29686__$1;
var value = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"value","value",305978217));
cookie_manager.set(cljs.core.name.call(null,k),macchiato.cookies._serialize_cookie.call(null,value),macchiato.cookies.translate_cookie_opts.call(null,opts));

var G__29696 = cljs.core.next.call(null,seq__29674__$1);
var G__29697 = null;
var G__29698 = (0);
var G__29699 = (0);
seq__29674 = G__29696;
chunk__29675 = G__29697;
count__29676 = G__29698;
i__29677 = G__29699;
continue;
}
} else {
return null;
}
}
break;
}
});
macchiato.cookies.request_cookies = (function macchiato$cookies$request_cookies(req,res,opts){
var temp__4657__auto__ = (req.headers["cookie"]);
if(cljs.core.truth_(temp__4657__auto__)){
var cookies = temp__4657__auto__;
var cookie_manager = (new macchiato.cookies.Cookies(req,res,macchiato.cookies.gen_keys.call(null,opts)));
return cljs.core.reduce.call(null,((function (cookie_manager,cookies,temp__4657__auto__){
return (function (cookies__$1,k){
return cljs.core.assoc.call(null,cookies__$1,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cookie_manager.get(cljs.core.name.call(null,k),macchiato.cookies.signed.call(null,opts))], null));
});})(cookie_manager,cookies,temp__4657__auto__))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,macchiato.cookies.re_cookie,cookies)));
} else {
return null;
}
});

//# sourceMappingURL=cookies.js.map?rel=1488028096379