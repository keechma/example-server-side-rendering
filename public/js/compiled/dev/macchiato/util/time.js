// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.util.time');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
macchiato.util.time.trim_quotes = (function macchiato$util$time$trim_quotes(s){
return cuerdas.core.replace.call(null,s,/^'|'$/,"");
});
/**
 * Attempt to parse a HTTP date. Returns nil if unsuccessful.
 */
macchiato.util.time.parse_date = (function macchiato$util$time$parse_date(http_date){
return cljs_time.coerce.from_date.call(null,(new Date(macchiato.util.time.trim_quotes.call(null,http_date))));
});
/**
 * Format a date as RFC1123 format.
 */
macchiato.util.time.format_date = (function macchiato$util$time$format_date(date){
return date.toUTCString();
});

//# sourceMappingURL=time.js.map?rel=1488028098339