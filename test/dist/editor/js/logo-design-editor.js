(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["logo-design-editor"],{c04c:function(t,e,i){"use strict";i.r(e);var o,l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isTextLogo?i("div",[i("div",{staticClass:"ine-block ine-mb20"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Font"))+" ")]),i("ComboBoxEditorControl",{attrs:{choices:t.fontChoices},model:{value:t.font,callback:function(e){t.font=e},expression:"font"}})],1),i("div",{staticClass:"ine-block ine-mb20"},[i("div",{staticClass:"ine-group"},[i("div",{staticClass:"ine-group__cell ine-group__cell--3"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Size"))+" ")]),i("ComboBoxEditorControl",{attrs:{choices:t.sizeChoices},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),i("div",{staticClass:"ine-group__cell ine-group__cell--3"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Style"))+" ")]),i("CheckboxButtonGroupEditorControl",[i("CheckboxButtonEditorControl",{attrs:{label:t.i18n("CommonLabels.Logo.Style.Bold"),bold:""},model:{value:t.bold,callback:function(e){t.bold=e},expression:"bold"}}),i("CheckboxButtonEditorControl",{attrs:{label:t.i18n("CommonLabels.Logo.Style.Italic"),italic:""},model:{value:t.italic,callback:function(e){t.italic=e},expression:"italic"}})],1)],1)])]),i("div",{staticClass:"ine-block ine-mb20"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Color"))+" ")]),i("ColorBoxEditorControl",{attrs:{"default-value":t.defaultColor,"alpha-enabled":t.alphaColorEnabled,"auto-enabled":t.autoColorEnabled,preset:t.colorList},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),i("div",{staticClass:"ine-block ine-mb20"},[i("div",{staticClass:"ine-group"},[i("div",{staticClass:"ine-group__cell ine-group__cell--3"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Spacing"))+" ")]),i("ComboBoxEditorControl",{attrs:{choices:t.spacingChoices},model:{value:t.spacing,callback:function(e){t.spacing=e},expression:"spacing"}})],1),i("div",{staticClass:"ine-group__cell ine-group__cell--3"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Capitalization"))+" ")]),i("ComboBoxEditorControl",{attrs:{choices:t.capitalizationChoices},model:{value:t.capitalization,callback:function(e){t.capitalization=e},expression:"capitalization"}})],1)])]),i("div",{staticClass:"ine-block ine-mb20"},[i("div",{staticClass:"ine-line"},[i("CheckboxToggleEditorControl",{attrs:{label:t.i18n("CommonLabels.Logo.Frame.visible")},model:{value:t.frameVisibility,callback:function(e){t.frameVisibility=e},expression:"frameVisibility"}})],1)]),i("div",{staticClass:"ine-switch"},[t.frameVisibility?i("div",{staticClass:"ine-block ine-mb20"},[i("div",{staticClass:"ine-group"},[i("div",{staticClass:"ine-group__cell ine-group__cell--3"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Frame.Width"))+" ")]),i("ComboBoxEditorControl",{attrs:{choices:t.frameWidthChoices},model:{value:t.frameWidth,callback:function(e){t.frameWidth=e},expression:"frameWidth"}})],1),i("div",{staticClass:"ine-group__cell ine-group__cell--3"},[i("div",{staticClass:"ine-title ine-title--h3"},[t._v(" "+t._s(t.i18n("CommonLabels.Logo.Frame.Color"))+" ")]),i("ColorBoxEditorControl",{attrs:{"default-value":t.defaultFrameColor,"alpha-enabled":t.alphaColorEnabled,"auto-enabled":t.autoColorEnabled,preset:t.colorList},model:{value:t.frameColor,callback:function(e){t.frameColor=e},expression:"frameColor"}})],1)])]):t._e()]),i("div",{staticClass:"ine-block ine-mb20"},[i("div",{staticClass:"ine-line"},[i("CheckboxToggleEditorControl",{attrs:{label:t.i18n("CommonLabels.ShowElement.toggle")},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}})],1)])]):t._e(),t.isImageLogo?i("div",[i("div",{staticClass:"ine-block ine-mb10"},[i("CheckboxToggleEditorControl",{attrs:{label:t.i18n("CommonLabels.ShowElement.toggle")},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}})],1)]):t._e()])},a=[],n=i("9ab4"),c=i("a6f4"),r=i("04c8"),s=i("f252"),u=i("2b42"),d=i("01bc");(function(t){t["NONE"]="none",t["ALL"]="all",t["SMALL"]="small"})(o||(o={}));var b=i("a9b8"),v=i("c605");function f(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{font:i});e("editor-action",o)}return i}function C(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{size:i});e("editor-action",o)}return i}function m(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{bold:i});e("editor-action",o)}return i}function g(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{italic:i});e("editor-action",o)}return i}function p(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{color:i});e("editor-action",o)}return i}function O(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{spacing:i});e("editor-action",o)}return i}function j(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{capitalization:i});e("editor-action",o)}return i}function h(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value.frame),{visible:i}),l=Object(n["a"])(Object(n["a"])({},t.value),{frame:o});e("editor-action",l)}return i}function L(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value.frame),{width:i}),l=Object(n["a"])(Object(n["a"])({},t.value),{frame:o});e("editor-action",l)}return i}function _(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value.frame),{color:i}),l=Object(n["a"])(Object(n["a"])({},t.value),{frame:o});e("editor-action",l)}return i}function k(t,e){function i(i){var o=Object(n["a"])(Object(n["a"])({},t.value),{visible:i});e("editor-action",o)}return i}var x=Object(c["g"])({components:{CheckboxButtonEditorControl:r["a"],CheckboxButtonGroupEditorControl:r["b"],CheckboxToggleEditorControl:r["c"],ColorBoxEditorControl:r["d"],ComboBoxEditorControl:r["e"]},props:{value:{required:!1,default:void 0,type:Object},content:{required:!1,default:void 0,type:Object},defaults:{required:!0,type:Object},siteSettings:{required:!1,default:void 0,type:Object},textSizeList:{required:!0,type:Array},colorList:{required:!0,type:Array},autoColorEnabled:{required:!0,type:Boolean},alphaColorEnabled:{required:!0,type:Boolean}},setup:function(t,e){var i=e.root,l=e.emit,a=Object(d["a"])(i.$store),r=Object(c["a"])((function(){var e,i,o,l,a,n,c,r,s,u,d,b,v,f,C,m,g,p,O,j,h,L,_;return{font:null===(e=t.value)||void 0===e?void 0:e.font,size:null===(i=t.value)||void 0===i?void 0:i.size,bold:null!==(l=null===(o=t.value)||void 0===o?void 0:o.bold)&&void 0!==l?l:t.defaults.bold,italic:null!==(n=null===(a=t.value)||void 0===a?void 0:a.italic)&&void 0!==n?n:t.defaults.italic,color:null===(c=t.value)||void 0===c?void 0:c.color,spacing:null!==(s=null===(r=t.value)||void 0===r?void 0:r.spacing)&&void 0!==s?s:t.defaults.spacing,capitalization:null!==(d=null===(u=t.value)||void 0===u?void 0:u.capitalization)&&void 0!==d?d:t.defaults.capitalization,frame:{visible:null!==(f=null===(v=null===(b=t.value)||void 0===b?void 0:b.frame)||void 0===v?void 0:v.visible)&&void 0!==f?f:null===(C=t.defaults.frame)||void 0===C?void 0:C.visible,width:null!==(p=null===(g=null===(m=t.value)||void 0===m?void 0:m.frame)||void 0===g?void 0:g.width)&&void 0!==p?p:null===(O=t.defaults.frame)||void 0===O?void 0:O.width,color:null===(h=null===(j=t.value)||void 0===j?void 0:j.frame)||void 0===h?void 0:h.color},visible:null!==(_=null===(L=t.value)||void 0===L?void 0:L.visible)&&void 0!==_?_:t.defaults.visible}})),x=Object(c["a"])((function(){var e;return(null===(e=t.content)||void 0===e?void 0:e.type)===v["a"].TEXT})),y=Object(c["a"])((function(){var e;return(null===(e=t.content)||void 0===e?void 0:e.type)===v["a"].IMAGE})),z=Object(c["a"])({get:function(){return Object(u["d"])(r.value.font)},set:f(r,l)}),E=Object(c["a"])((function(){var e,i=Object(s["b"])(t.defaults.font,t.siteSettings),o=a("CommonLabels.Logo.Font.Default").replace("{fontName}",null!==(e=Object(u["a"])(Object(u["c"])(i)))&&void 0!==e?e:"");return Object(n["d"])([{key:void 0,label:o}],Object(u["b"])())})),S=Object(c["a"])({get:function(){return r.value.size},set:C(r,l)}),B=Object(c["a"])((function(){var e,i=Object(s["c"])(t.defaults.size,t.siteSettings),o=a("CommonLabels.Logo.Size.Default").replace("{sizeInPixels}",null!==(e=null===i||void 0===i?void 0:i.toString())&&void 0!==e?e:""),l=t.textSizeList.map((function(t){return{key:t,label:t.toString()}}));return Object(n["d"])([{key:void 0,label:o}],l)})),w=Object(c["a"])({get:function(){return r.value.bold},set:m(r,l)}),W=Object(c["a"])({get:function(){return r.value.italic},set:g(r,l)}),q=Object(c["a"])((function(){return Object(s["a"])(t.defaults.color,t.siteSettings)})),A=Object(c["a"])({get:function(){return r.value.color},set:p(r,l)}),T=Object(c["a"])({get:function(){return r.value.spacing},set:O(r,l)}),F=Object(b["d"])(0,21).map((function(t){return{key:t,label:t.toString()}})),N=Object(c["a"])({get:function(){return r.value.capitalization},set:j(r,l)}),I=[{key:o.NONE,label:a("CommonLabels.Logo.Capitalization.None")},{key:o.ALL,label:a("CommonLabels.Logo.Capitalization.All")},{key:o.SMALL,label:a("CommonLabels.Logo.Capitalization.Small")}],V=Object(c["a"])({get:function(){return r.value.frame.visible},set:h(r,l)}),G=Object(c["a"])({get:function(){return r.value.frame.width},set:L(r,l)}),M=Object(b["d"])(1,6).map((function(t){return{key:t,label:t.toString()}})),D=Object(c["a"])((function(){var e;return Object(s["a"])(null===(e=t.defaults.frame)||void 0===e?void 0:e.color,t.siteSettings)})),J=Object(c["a"])({get:function(){return r.value.frame.color},set:_(r,l)}),$=Object(c["a"])({get:function(){return r.value.visible},set:k(r,l)});return{i18n:a,isTextLogo:x,isImageLogo:y,bold:w,italic:W,defaultColor:q,color:A,size:S,sizeChoices:B,font:z,fontChoices:E,spacing:T,spacingChoices:F,capitalization:N,capitalizationChoices:I,frameVisibility:V,frameWidth:G,frameWidthChoices:M,defaultFrameColor:D,frameColor:J,visibility:$}}}),y=x,z=y,E=i("2877"),S=Object(E["a"])(z,l,a,!1,null,null,null);e["default"]=S.exports},f252:function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=i("2151");function l(t,e){return(null===t||void 0===t?void 0:t.startsWith("global."))?Object(o["c"])(t,e):t}function a(t,e){var i;return(null===(i=null===t||void 0===t?void 0:t.toString())||void 0===i?void 0:i.startsWith("global."))?Object(o["d"])(t,e):t}function n(t,e){var i;return(null===(i=null===t||void 0===t?void 0:t.toString())||void 0===i?void 0:i.startsWith("global."))?Object(o["a"])(t,e):t}}}]);