// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35461){
var map__35486 = p__35461;
var map__35486__$1 = ((((!((map__35486 == null)))?((((map__35486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35486):map__35486);
var m = map__35486__$1;
var n = cljs.core.get.call(null,map__35486__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35488_35510 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35489_35511 = null;
var count__35490_35512 = (0);
var i__35491_35513 = (0);
while(true){
if((i__35491_35513 < count__35490_35512)){
var f_35514 = cljs.core._nth.call(null,chunk__35489_35511,i__35491_35513);
cljs.core.println.call(null,"  ",f_35514);

var G__35515 = seq__35488_35510;
var G__35516 = chunk__35489_35511;
var G__35517 = count__35490_35512;
var G__35518 = (i__35491_35513 + (1));
seq__35488_35510 = G__35515;
chunk__35489_35511 = G__35516;
count__35490_35512 = G__35517;
i__35491_35513 = G__35518;
continue;
} else {
var temp__4657__auto___35519 = cljs.core.seq.call(null,seq__35488_35510);
if(temp__4657__auto___35519){
var seq__35488_35520__$1 = temp__4657__auto___35519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35488_35520__$1)){
var c__26048__auto___35521 = cljs.core.chunk_first.call(null,seq__35488_35520__$1);
var G__35522 = cljs.core.chunk_rest.call(null,seq__35488_35520__$1);
var G__35523 = c__26048__auto___35521;
var G__35524 = cljs.core.count.call(null,c__26048__auto___35521);
var G__35525 = (0);
seq__35488_35510 = G__35522;
chunk__35489_35511 = G__35523;
count__35490_35512 = G__35524;
i__35491_35513 = G__35525;
continue;
} else {
var f_35526 = cljs.core.first.call(null,seq__35488_35520__$1);
cljs.core.println.call(null,"  ",f_35526);

var G__35527 = cljs.core.next.call(null,seq__35488_35520__$1);
var G__35528 = null;
var G__35529 = (0);
var G__35530 = (0);
seq__35488_35510 = G__35527;
chunk__35489_35511 = G__35528;
count__35490_35512 = G__35529;
i__35491_35513 = G__35530;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35531 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25229__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25229__auto__)){
return or__25229__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35531);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35531)))?cljs.core.second.call(null,arglists_35531):arglists_35531));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35492_35532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35493_35533 = null;
var count__35494_35534 = (0);
var i__35495_35535 = (0);
while(true){
if((i__35495_35535 < count__35494_35534)){
var vec__35496_35536 = cljs.core._nth.call(null,chunk__35493_35533,i__35495_35535);
var name_35537 = cljs.core.nth.call(null,vec__35496_35536,(0),null);
var map__35499_35538 = cljs.core.nth.call(null,vec__35496_35536,(1),null);
var map__35499_35539__$1 = ((((!((map__35499_35538 == null)))?((((map__35499_35538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35499_35538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35499_35538):map__35499_35538);
var doc_35540 = cljs.core.get.call(null,map__35499_35539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35541 = cljs.core.get.call(null,map__35499_35539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35537);

cljs.core.println.call(null," ",arglists_35541);

if(cljs.core.truth_(doc_35540)){
cljs.core.println.call(null," ",doc_35540);
} else {
}

var G__35542 = seq__35492_35532;
var G__35543 = chunk__35493_35533;
var G__35544 = count__35494_35534;
var G__35545 = (i__35495_35535 + (1));
seq__35492_35532 = G__35542;
chunk__35493_35533 = G__35543;
count__35494_35534 = G__35544;
i__35495_35535 = G__35545;
continue;
} else {
var temp__4657__auto___35546 = cljs.core.seq.call(null,seq__35492_35532);
if(temp__4657__auto___35546){
var seq__35492_35547__$1 = temp__4657__auto___35546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35492_35547__$1)){
var c__26048__auto___35548 = cljs.core.chunk_first.call(null,seq__35492_35547__$1);
var G__35549 = cljs.core.chunk_rest.call(null,seq__35492_35547__$1);
var G__35550 = c__26048__auto___35548;
var G__35551 = cljs.core.count.call(null,c__26048__auto___35548);
var G__35552 = (0);
seq__35492_35532 = G__35549;
chunk__35493_35533 = G__35550;
count__35494_35534 = G__35551;
i__35495_35535 = G__35552;
continue;
} else {
var vec__35501_35553 = cljs.core.first.call(null,seq__35492_35547__$1);
var name_35554 = cljs.core.nth.call(null,vec__35501_35553,(0),null);
var map__35504_35555 = cljs.core.nth.call(null,vec__35501_35553,(1),null);
var map__35504_35556__$1 = ((((!((map__35504_35555 == null)))?((((map__35504_35555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35504_35555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35504_35555):map__35504_35555);
var doc_35557 = cljs.core.get.call(null,map__35504_35556__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35558 = cljs.core.get.call(null,map__35504_35556__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35554);

cljs.core.println.call(null," ",arglists_35558);

if(cljs.core.truth_(doc_35557)){
cljs.core.println.call(null," ",doc_35557);
} else {
}

var G__35559 = cljs.core.next.call(null,seq__35492_35547__$1);
var G__35560 = null;
var G__35561 = (0);
var G__35562 = (0);
seq__35492_35532 = G__35559;
chunk__35493_35533 = G__35560;
count__35494_35534 = G__35561;
i__35495_35535 = G__35562;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35506 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35507 = null;
var count__35508 = (0);
var i__35509 = (0);
while(true){
if((i__35509 < count__35508)){
var role = cljs.core._nth.call(null,chunk__35507,i__35509);
var temp__4657__auto___35563__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35563__$1)){
var spec_35564 = temp__4657__auto___35563__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_35564));
} else {
}

var G__35565 = seq__35506;
var G__35566 = chunk__35507;
var G__35567 = count__35508;
var G__35568 = (i__35509 + (1));
seq__35506 = G__35565;
chunk__35507 = G__35566;
count__35508 = G__35567;
i__35509 = G__35568;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35506);
if(temp__4657__auto____$1){
var seq__35506__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35506__$1)){
var c__26048__auto__ = cljs.core.chunk_first.call(null,seq__35506__$1);
var G__35569 = cljs.core.chunk_rest.call(null,seq__35506__$1);
var G__35570 = c__26048__auto__;
var G__35571 = cljs.core.count.call(null,c__26048__auto__);
var G__35572 = (0);
seq__35506 = G__35569;
chunk__35507 = G__35570;
count__35508 = G__35571;
i__35509 = G__35572;
continue;
} else {
var role = cljs.core.first.call(null,seq__35506__$1);
var temp__4657__auto___35573__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35573__$2)){
var spec_35574 = temp__4657__auto___35573__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_35574));
} else {
}

var G__35575 = cljs.core.next.call(null,seq__35506__$1);
var G__35576 = null;
var G__35577 = (0);
var G__35578 = (0);
seq__35506 = G__35575;
chunk__35507 = G__35576;
count__35508 = G__35577;
i__35509 = G__35578;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1488028161836