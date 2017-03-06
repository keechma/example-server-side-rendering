// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('macchiato.crypto');
goog.require('cljs.core');
goog.require('cljs.nodejs');
macchiato.crypto.crypto = cljs.nodejs.require.call(null,"crypto");
macchiato.crypto.encryptor = cljs.nodejs.require.call(null,"simple-encryptor");
macchiato.crypto.encrypt = (function macchiato$crypto$encrypt(key,data){
return (new macchiato.crypto.encryptor(key)).encrypt(data);
});
macchiato.crypto.decrypt = (function macchiato$crypto$decrypt(key,data){
return (new macchiato.crypto.encryptor(key)).decrypt(data);
});
macchiato.crypto.hmac = (function macchiato$crypto$hmac(key,data){
return (new macchiato.crypto.encryptor(key)).hmac(data);
});
/**
 * Test whether two sequences of characters or bytes are equal in a way that
 *   protects against timing attacks. Note that this does not prevent an attacker
 *   from discovering the *length* of the data being compared.
 */
macchiato.crypto.eq_QMARK_ = (function macchiato$crypto$eq_QMARK_(a,b){
var a__$1 = cljs.core.map.call(null,(function (p1__28796_SHARP_){
return p1__28796_SHARP_.charCodeAt();
}),a);
var b__$1 = cljs.core.map.call(null,((function (a__$1){
return (function (p1__28797_SHARP_){
return p1__28797_SHARP_.charCodeAt();
});})(a__$1))
,b);
if(cljs.core.truth_((function (){var and__25217__auto__ = a__$1;
if(cljs.core.truth_(and__25217__auto__)){
var and__25217__auto____$1 = b__$1;
if(cljs.core.truth_(and__25217__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,a__$1),cljs.core.count.call(null,b__$1));
} else {
return and__25217__auto____$1;
}
} else {
return and__25217__auto__;
}
})())){
return (cljs.core.reduce.call(null,cljs.core.bit_or,cljs.core.map.call(null,cljs.core.bit_xor,a__$1,b__$1)) === (0));
} else {
return false;
}
});
/**
 * generates a random base64 string of length n
 */
macchiato.crypto.random_base64 = (function macchiato$crypto$random_base64(n){
return macchiato.crypto.crypto.randomBytes(n).toString("base64");
});

//# sourceMappingURL=crypto.js.map?rel=1488028095296