(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["action-link-content-editor"],{"8f72":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ine-block ine-mb30"},[e("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n(t.label))+" ")]),t.value.title?t._e():e("div",{staticClass:"ine-control ine-control--button ine-control--secondary ine-control--large ine-control--flexible"},[e("button",{staticClass:"ine-control__button",on:{click:function(n){return t.$emit("editor-action")}}},[e("div",{staticClass:"ine-control__wrap"},[e("div",{staticClass:"ine-control__icon"},[e("PlusIcon")],1),e("div",{staticClass:"ine-control__text"},[t._v(" "+t._s(t.i18n("CommonLabels.ActionLink.Add.button"))+" ")])])])]),t.value.title?e("a",{staticClass:"ine-control ine-control--menu ine-control--large ine-control--flexible",attrs:{tabindex:"0",role:"button"},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.$emit("editor-action")},click:function(n){return t.$emit("editor-action")}}},[e("div",{staticClass:"ine-control__wrap"},[e("div",{staticClass:"ine-control__text"},[e("div",{staticClass:"ine-control__text-inner"},[t._v(" "+t._s(t.value.title)+" ")])]),e("div",{staticClass:"ine-control__icon"},[e("ArrowRightIcon")],1)])]):t._e()])},o=[],l=e("a6f4"),c=e("9350"),r=e("01bc"),s=Object(l["g"])({components:{ArrowRightIcon:c["a"].ArrowRightIcon,PlusIcon:c["a"].PlusIcon},props:{label:{required:!0,type:String},value:{required:!1,default:void 0,type:Object}},setup:function(t,n){var e=n.root,i=Object(r["a"])(e.$store);return{i18n:i}}}),a=s,u=a,d=e("2877"),_=Object(d["a"])(u,i,o,!1,null,null,null);n["default"]=_.exports}}]);