// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('mount.tools.logger');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.debug.Console');
if(typeof mount.tools.logger._STAR_logger_STAR_ !== 'undefined'){
} else {
mount.tools.logger._STAR_logger_STAR_ = (function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("mount");
})()
;
}
mount.tools.logger.log = (function mount$tools$logger$log(msg){
return goog.log.info(mount.tools.logger._STAR_logger_STAR_,msg);
});

//# sourceMappingURL=logger.js.map?rel=1488028095380