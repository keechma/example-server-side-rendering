var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="/js/compiled/dev/goog/base.js"></script>');
document.write('<script src="/js/compiled/dev/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.dev_client\"); }</script>");
document.write('<script>goog.require("keechma_ssr.client.core");</script>');