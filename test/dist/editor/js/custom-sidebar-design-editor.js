(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["custom-sidebar-design-editor"],{d018:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ine-block ine-mb20"},[o("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n(t.label))+" ")]),o("ColorBoxEditorControl",{attrs:{"default-value":t.defaultColor,"alpha-enabled":t.alphaColorEnabled,"auto-enabled":t.autoColorEnabled,preset:t.colorList},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)},l=[],n=o("9ab4"),i=o("a6f4"),a=o("04c8"),u=o("f252"),c=o("01bc");function d(t,e){function o(o){e("editor-action",Object(n["a"])(Object(n["a"])({},t.value),{color:o}))}return o}var s=Object(i["g"])({components:{ColorBoxEditorControl:a["d"]},props:{label:{required:!0,type:String},value:{required:!1,default:void 0,type:Object},defaults:{required:!0,type:Object},siteSettings:{required:!1,default:void 0,type:Object},colorList:{required:!0,type:Array},autoColorEnabled:{required:!0,type:Boolean},alphaColorEnabled:{required:!0,type:Boolean}},setup:function(t,e){var o=e.root,r=e.emit,l=Object(c["a"])(o.$store),n=Object(i["a"])((function(){var e;return{color:null===(e=t.value)||void 0===e?void 0:e.color}})),a=Object(i["a"])((function(){return Object(u["a"])(t.defaults.color,t.siteSettings)})),s=Object(i["a"])({get:function(){return n.value.color},set:d(n,r)});return{i18n:l,defaultColor:a,color:s}}}),b=s,v=b,f=o("2877"),p=Object(f["a"])(v,r,l,!1,null,null,null);e["default"]=p.exports},f252:function(t,e,o){"use strict";o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var r=o("2151");function l(t,e){return(null===t||void 0===t?void 0:t.startsWith("global."))?Object(r["c"])(t,e):t}function n(t,e){var o;return(null===(o=null===t||void 0===t?void 0:t.toString())||void 0===o?void 0:o.startsWith("global."))?Object(r["d"])(t,e):t}function i(t,e){var o;return(null===(o=null===t||void 0===t?void 0:t.toString())||void 0===o?void 0:o.startsWith("global."))?Object(r["a"])(t,e):t}}}]);