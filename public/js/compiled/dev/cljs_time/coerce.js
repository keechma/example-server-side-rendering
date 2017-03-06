// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__25897__auto__ = (((obj == null))?null:obj);
var m__25898__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__25897__auto__)]);
if(!((m__25898__auto__ == null))){
return m__25898__auto__.call(null,obj);
} else {
var m__25898__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__25898__auto____$1 == null))){
return m__25898__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__30901 = millis;
if((G__30901 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__30901);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__26017__auto__ = (function cljs_time$coerce$from_string_$_iter__30910(s__30911){
return (new cljs.core.LazySeq(null,(function (){
var s__30911__$1 = s__30911;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30911__$1);
if(temp__4657__auto__){
var s__30911__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30911__$2)){
var c__26015__auto__ = cljs.core.chunk_first.call(null,s__30911__$2);
var size__26016__auto__ = cljs.core.count.call(null,c__26015__auto__);
var b__30913 = cljs.core.chunk_buffer.call(null,size__26016__auto__);
if((function (){var i__30912 = (0);
while(true){
if((i__30912 < size__26016__auto__)){
var f = cljs.core._nth.call(null,c__26015__auto__,i__30912);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e30916){if((e30916 instanceof Error)){
var _ = e30916;
return null;
} else {
throw e30916;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__30913,d);

var G__30918 = (i__30912 + (1));
i__30912 = G__30918;
continue;
} else {
var G__30919 = (i__30912 + (1));
i__30912 = G__30919;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30913),cljs_time$coerce$from_string_$_iter__30910.call(null,cljs.core.chunk_rest.call(null,s__30911__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30913),null);
}
} else {
var f = cljs.core.first.call(null,s__30911__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e30917){if((e30917 instanceof Error)){
var _ = e30917;
return null;
} else {
throw e30917;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__30910.call(null,cljs.core.rest.call(null,s__30911__$2)));
} else {
var G__30920 = cljs.core.rest.call(null,s__30911__$2);
s__30911__$1 = G__30920;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26017__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__30922 = date;
var G__30922__$1 = (((G__30922 == null))?null:G__30922.getTime());
if((G__30922__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__30922__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__30924 = obj;
var G__30924__$1 = (((G__30924 == null))?null:cljs_time.coerce.to_date_time.call(null,G__30924));
if((G__30924__$1 == null)){
return null;
} else {
return G__30924__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__30926 = obj;
var G__30926__$1 = (((G__30926 == null))?null:cljs_time.coerce.to_long.call(null,G__30926));
if((G__30926__$1 == null)){
return null;
} else {
return (G__30926__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__30928 = obj;
var G__30928__$1 = (((G__30928 == null))?null:cljs_time.coerce.to_date_time.call(null,G__30928));
var G__30928__$2 = (((G__30928__$1 == null))?null:G__30928__$1.getTime());
if((G__30928__$2 == null)){
return null;
} else {
return (new Date(G__30928__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__30930 = obj;
var G__30930__$1 = (((G__30930 == null))?null:cljs_time.coerce.to_date_time.call(null,G__30930));
if((G__30930__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__30930__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__30932 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__30932.setHours(dt.getHours());

G__30932.setMinutes(dt.getMinutes());

G__30932.setSeconds(dt.getSeconds());

G__30932.setMilliseconds(dt.getMilliseconds());

return G__30932;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
var G__30933 = (new goog.date.UtcDateTime());
G__30933.set(local_date__$1);

return G__30933;
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
var G__30934 = (new goog.date.UtcDateTime());
G__30934.setTime(local_date_time__$1.getTime());

return G__30934;
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map?rel=1488028098322