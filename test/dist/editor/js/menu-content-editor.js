(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["menu-content-editor"],{"0431":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ine-block ine-mb30"},[e("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n(t.label))+" ")]),t.atLeastOneMenuItem?t._e():e("div",{staticClass:"ine-control ine-control--button ine-control--secondary ine-control--large ine-control--flexible"},[e("button",{staticClass:"ine-control__button",on:{click:t.addMenuItem}},[e("div",{staticClass:"ine-control__wrap"},[e("div",{staticClass:"ine-control__icon"},[e("PlusIcon")],1),e("div",{staticClass:"ine-control__text"},[t._v(" "+t._s(t.i18n("Block.Header.Content.Menu.Add.button"))+" ")])])])]),t.atLeastOneMenuItem?e("a",{staticClass:"ine-control ine-control--menu ine-control--large ine-control--flexible",attrs:{tabindex:"0",role:"button"},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.navigateToEditor(n)},click:t.navigateToEditor}},[e("div",{staticClass:"ine-control__wrap"},[e("div",{staticClass:"ine-control__text"},[e("div",{staticClass:"ine-control__text-inner"},t._l(t.menuButtonTextList,(function(n,i){return e("span",{key:i},[0!==i?e("span",{staticClass:"ine-control__delimiter"},[t._v("|")]):t._e(),t._v(" "+t._s(n)+" ")])})),0)]),e("div",{staticClass:"ine-control__icon"},[e("ArrowRightIcon")],1)])]):t._e()])},o=[],a=e("a6f4"),r=e("9350"),c=e("01bc"),l=e("049a"),s=e("a9b8");function u(t){function n(){t("editor-action",{type:l["a"].NAVIGATE_TO_EDITOR})}return n}function d(t){function n(){t("editor-action",{type:l["a"].ADD_MENU_ITEM})}return n}var _=Object(a["g"])({components:{ArrowRightIcon:r["a"].ArrowRightIcon,PlusIcon:r["a"].PlusIcon},props:{label:{required:!0,type:String},value:{required:!1,default:void 0,type:Object}},setup:function(t,n){var e=n.root,i=n.emit,o=Object(c["a"])(e.$store),r=Object(a["a"])((function(){var n,e,i=null!==(e=null===(n=t.value)||void 0===n?void 0:n.items)&&void 0!==e?e:[];return i.filter((function(t){return Object(s["a"])(t.title)}))})),l=Object(a["a"])((function(){return r.value.length>0})),_=Object(a["a"])((function(){return r.value.map((function(t){return t.title}))})),v=u(i),b=d(i);return{i18n:o,menuButtonTextList:_,atLeastOneMenuItem:l,navigateToEditor:v,addMenuItem:b}}}),v=_,b=v,f=e("2877"),p=Object(f["a"])(b,i,o,!1,null,null,null);n["default"]=p.exports}}]);