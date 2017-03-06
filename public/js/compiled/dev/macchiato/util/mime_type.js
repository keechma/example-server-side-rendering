// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.util.mime_type');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * A map of file extensions to mime-types.
 */
macchiato.util.mime_type.default_mime_types = cljs.core.PersistentHashMap.fromArrays(["mp4","iso","json","ttf","gif","webm","js","flv","tiff","qt","xml","mpe","ogg","dmg","flac","crt","pdf","dll","xpm","cer","class","tar","deb","ps","xwd","css","mp3","csv","svg","sgml","woff","lzh","jpeg","eps","gz","exe","ogv","appcache","avi","mpeg","tif","sgm","wmv","xbm","ico","pnm","atom","xls","htm","ppt","swf","m4v","eot","bin","crl","ras","rd","jar","asc","ai","mov","oga","7z","bz2","png","txt","dart","dvi","rar","aac","pbm","jpe","ppm","html","pgm","edn","etx","jpg","lha","rss","zip","doc","rtf","rb","dms","mpg","bmp"],["video/mp4","application/x-iso9660-image","application/json","application/x-font-ttf","image/gif","video/webm","text/javascript","video/x-flv","image/tiff","video/quicktime","text/xml","video/mpeg","audio/ogg","application/octet-stream","audio/flac","application/x-x509-ca-cert","application/pdf","application/octet-stream","image/x-xpixmap","application/pkix-cert","application/octet-stream","application/x-tar","application/x-deb","application/postscript","image/x-xwindowdump","text/css","audio/mpeg","text/csv","image/svg+xml","text/sgml","application/font-woff","application/octet-stream","image/jpeg","application/postscript","application/gzip","application/octet-stream","video/ogg","text/cache-manifest","video/x-msvideo","video/mpeg","image/tiff","text/sgml","video/x-ms-wmv","image/x-xbitmap","image/x-icon","image/x-portable-anymap","application/atom+xml","application/vnd.ms-excel","text/html","application/vnd.ms-powerpoint","application/x-shockwave-flash","video/mp4","application/vnd.ms-fontobject","application/octet-stream","application/pkix-crl","image/x-cmu-raster","text/plain","application/java-archive","text/plain","application/postscript","video/quicktime","audio/ogg","application/x-7z-compressed","application/x-bzip","image/png","text/plain","application/dart","application/x-dvi","application/x-rar-compressed","audio/aac","image/x-portable-bitmap","image/jpeg","image/x-portable-pixmap","text/html","image/x-portable-graymap","application/edn","text/x-setext","image/jpeg","application/octet-stream","application/rss+xml","application/zip","application/msword","application/rtf","text/plain","application/octet-stream","video/mpeg","image/bmp"]);
/**
 * Returns the file extension of a filename or filepath.
 */
macchiato.util.mime_type.filename_ext = (function macchiato$util$mime_type$filename_ext(filename){
var temp__4655__auto__ = cljs.core.second.call(null,cljs.core.re_find.call(null,/\.([^.\/\\]+)$/,filename));
if(cljs.core.truth_(temp__4655__auto__)){
var ext = temp__4655__auto__;
return clojure.string.lower_case.call(null,ext);
} else {
return null;
}
});
/**
 * Get the mimetype from the filename extension. Takes an optional map of
 *   extensions to mimetypes that overrides values in the default-mime-types map.
 */
macchiato.util.mime_type.ext_mime_type = (function macchiato$util$mime_type$ext_mime_type(var_args){
var args30324 = [];
var len__26342__auto___30327 = arguments.length;
var i__26343__auto___30328 = (0);
while(true){
if((i__26343__auto___30328 < len__26342__auto___30327)){
args30324.push((arguments[i__26343__auto___30328]));

var G__30329 = (i__26343__auto___30328 + (1));
i__26343__auto___30328 = G__30329;
continue;
} else {
}
break;
}

var G__30326 = args30324.length;
switch (G__30326) {
case 1:
return macchiato.util.mime_type.ext_mime_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return macchiato.util.mime_type.ext_mime_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30324.length)].join('')));

}
});

macchiato.util.mime_type.ext_mime_type.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return macchiato.util.mime_type.ext_mime_type.call(null,filename,cljs.core.PersistentArrayMap.EMPTY);
});

macchiato.util.mime_type.ext_mime_type.cljs$core$IFn$_invoke$arity$2 = (function (filename,mime_types){
var mime_types__$1 = cljs.core.merge.call(null,macchiato.util.mime_type.default_mime_types,mime_types);
return mime_types__$1.call(null,macchiato.util.mime_type.filename_ext.call(null,filename));
});

macchiato.util.mime_type.ext_mime_type.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=mime_type.js.map?rel=1488028097226