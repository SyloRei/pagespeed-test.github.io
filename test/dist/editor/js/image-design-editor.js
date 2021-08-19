(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["image-design-editor"],{7322:function(e,o,l){"use strict";l.r(o);var a=function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",[l("div",{staticClass:"ine-block ine-mb20"},[l("div",{staticClass:"ine-title ine-title--h3"},[e._v(" "+e._s(e.i18n("CommonLabels.StandardImage.Overlay"))+" ")]),l("ComboBoxEditorControl",{attrs:{choices:e.overlayTypeChoices},model:{value:e.overlayType,callback:function(o){e.overlayType=o},expression:"overlayType"}})],1),"solid"==e.overlayType?l("div",{staticClass:"ine-switch"},[l("div",{staticClass:"ine-block ine-mb20"},[l("div",{staticClass:"ine-title ine-title--h3"},[e._v(" "+e._s(e.i18n("CommonLabels.StandardImage.Overlay.Color"))+" ")]),l("ColorBoxEditorControl",{attrs:{"default-value":e.defaultSolidOverlayColor,"alpha-enabled":e.alphaColorEnabled,"auto-enabled":e.autoColorEnabled,"reset-color-enabled":!1,preset:e.colorList},model:{value:e.solidOverlayColor,callback:function(o){e.solidOverlayColor=o},expression:"solidOverlayColor"}})],1)]):e._e(),"gradient"==e.overlayType?l("div",{staticClass:"ine-switch"},[l("div",{staticClass:"ine-block ine-mb20"},[l("div",{staticClass:"ine-group"},[l("div",{staticClass:"ine-group__cell ine-group__cell--3"},[l("div",{staticClass:"ine-title ine-title--h3"},[e._v(" "+e._s(e.i18n("CommonLabels.StandardImage.Overlay.GradientStart"))+" ")]),l("ColorBoxEditorControl",{attrs:{"default-value":e.defaultGradientOverlayFromColor,"alpha-enabled":e.alphaColorEnabled,"auto-enabled":e.autoColorEnabled,"reset-color-enabled":!1,preset:e.colorList},model:{value:e.gradientOverlayFromColor,callback:function(o){e.gradientOverlayFromColor=o},expression:"gradientOverlayFromColor"}})],1),l("div",{staticClass:"ine-group__cell ine-group__cell--3"},[l("div",{staticClass:"ine-title ine-title--h3"},[e._v(" "+e._s(e.i18n("CommonLabels.StandardImage.Overlay.GradientEnd"))+" ")]),l("ColorBoxEditorControl",{attrs:{"default-value":e.defaultGradientOverlayToColor,"alpha-enabled":e.alphaColorEnabled,"auto-enabled":e.autoColorEnabled,"reset-color-enabled":!1,preset:e.colorList},model:{value:e.gradientOverlayToColor,callback:function(o){e.gradientOverlayToColor=o},expression:"gradientOverlayToColor"}})],1)])])]):e._e(),l("div",{staticClass:"ine-block ine-mb20"},[l("div",{staticClass:"ine-line"},[l("CheckboxToggleEditorControl",{attrs:{label:e.i18n("CommonLabels.ShowElement.toggle")},model:{value:e.visibility,callback:function(o){e.visibility=o},expression:"visibility"}})],1)])])},t=[],i=l("9ab4"),r=l("a6f4"),n=l("04c8"),d=l("8ce8"),v=l("f252"),u=l("01bc");function c(e,o){function l(l){if(void 0!==l){var a=Object(i["a"])(Object(i["a"])({},e.value.overlay),{type:l}),t=Object(i["a"])(Object(i["a"])({},e.value),{overlay:a});o("editor-action",t)}else{var r=Object(i["a"])(Object(i["a"])({},e.value),{overlay:void 0});o("editor-action",r)}}return l}function s(e,o){function l(l){var a,t=Object(i["a"])(Object(i["a"])({},null===(a=e.value.overlay)||void 0===a?void 0:a.solid),{color:l}),r=Object(i["a"])(Object(i["a"])({},e.value.overlay),{solid:t}),n=Object(i["a"])(Object(i["a"])({},e.value),{overlay:r});o("editor-action",n)}return l}function b(e,o){function l(l){var a,t=Object(i["a"])(Object(i["a"])({},null===(a=e.value.overlay)||void 0===a?void 0:a.gradient),{fromColor:l}),r=Object(i["a"])(Object(i["a"])({},e.value.overlay),{gradient:t}),n=Object(i["a"])(Object(i["a"])({},e.value),{overlay:r});o("editor-action",n)}return l}function y(e,o){function l(l){var a,t=Object(i["a"])(Object(i["a"])({},null===(a=e.value.overlay)||void 0===a?void 0:a.gradient),{toColor:l}),r=Object(i["a"])(Object(i["a"])({},e.value.overlay),{gradient:t}),n=Object(i["a"])(Object(i["a"])({},e.value),{overlay:r});o("editor-action",n)}return l}function O(e,o){function l(l){var a=Object(i["a"])(Object(i["a"])({},e.value),{visible:l});o("editor-action",a)}return l}function C(e,o){var l,a,t=[{key:d["a"].SOLID,label:o("CommonLabels.StandardImage.Overlay.Solid")},{key:d["a"].GRADIENT,label:o("CommonLabels.StandardImage.Overlay.Gradient")},{key:d["a"].NONE,label:o("CommonLabels.StandardImage.Overlay.None")}],r=null!==(a=null===(l=t.find((function(o){return e===o.key})))||void 0===l?void 0:l.label)&&void 0!==a?a:"",n=o("CommonLabels.StandardImage.Overlay.Default").replace("{overlayType}",r);return Object(i["d"])(Object(i["d"])([],t),[{key:void 0,label:n}])}var f=Object(r["g"])({components:{ComboBoxEditorControl:n["e"],ColorBoxEditorControl:n["d"],CheckboxToggleEditorControl:n["c"]},props:{value:{required:!1,default:void 0,type:Object},defaults:{required:!0,type:Object},siteSettings:{required:!1,default:void 0,type:Object},colorList:{required:!0,type:Array},autoColorEnabled:{required:!0,type:Boolean},alphaColorEnabled:{required:!0,type:Boolean}},setup:function(e,o){var l=o.root,a=o.emit,t=Object(u["a"])(l.$store),i=Object(r["a"])((function(){var o,l,a,t,i,r,n,d,v;return{overlay:{type:null===(l=null===(o=e.value)||void 0===o?void 0:o.overlay)||void 0===l?void 0:l.type,solid:null===(t=null===(a=e.value)||void 0===a?void 0:a.overlay)||void 0===t?void 0:t.solid,gradient:null===(r=null===(i=e.value)||void 0===i?void 0:i.overlay)||void 0===r?void 0:r.gradient},visible:null!==(d=null===(n=e.value)||void 0===n?void 0:n.visible)&&void 0!==d?d:null===(v=e.defaults)||void 0===v?void 0:v.visible}})),n=Object(r["a"])({get:function(){return i.value.overlay.type},set:c(i,a)}),d=Object(r["a"])((function(){var o;return C(null===(o=e.defaults.overlay)||void 0===o?void 0:o.type,t)})),f=Object(r["a"])((function(){var o,l;return Object(v["a"])(null===(l=null===(o=e.defaults.overlay)||void 0===o?void 0:o.solid)||void 0===l?void 0:l.color,e.siteSettings)})),g=Object(r["a"])({get:function(){var e,o;return null===(o=null===(e=i.value.overlay)||void 0===e?void 0:e.solid)||void 0===o?void 0:o.color},set:s(i,a)}),m=Object(r["a"])((function(){var o,l;return Object(v["a"])(null===(l=null===(o=e.defaults.overlay)||void 0===o?void 0:o.gradient)||void 0===l?void 0:l.fromColor,e.siteSettings)})),p=Object(r["a"])({get:function(){var e,o;return null===(o=null===(e=i.value.overlay)||void 0===e?void 0:e.gradient)||void 0===o?void 0:o.fromColor},set:b(i,a)}),j=Object(r["a"])((function(){var o,l;return Object(v["a"])(null===(l=null===(o=e.defaults.overlay)||void 0===o?void 0:o.gradient)||void 0===l?void 0:l.toColor,e.siteSettings)})),E=Object(r["a"])({get:function(){var e,o;return null===(o=null===(e=i.value.overlay)||void 0===e?void 0:e.gradient)||void 0===o?void 0:o.toColor},set:y(i,a)}),h=Object(r["a"])({get:function(){return i.value.visible},set:O(i,a)});return{i18n:t,overlayType:n,overlayTypeChoices:d,defaultSolidOverlayColor:f,solidOverlayColor:g,defaultGradientOverlayFromColor:m,gradientOverlayFromColor:p,defaultGradientOverlayToColor:j,gradientOverlayToColor:E,visibility:h}}}),g=f,m=g,p=l("2877"),j=Object(p["a"])(m,a,t,!1,null,null,null);o["default"]=j.exports},"8ce8":function(e,o,l){"use strict";var a,t;l.d(o,"a",(function(){return a})),l.d(o,"b",(function(){return t})),function(e){e["SOLID"]="solid",e["GRADIENT"]="gradient",e["NONE"]="none"}(a||(a={})),function(e){e["NONE"]="none",e["PARALLAX"]="parallax",e["FIXED"]="fixed",e["ZOOM_OUT"]="zoom_out"}(t||(t={}))},f252:function(e,o,l){"use strict";l.d(o,"b",(function(){return t})),l.d(o,"c",(function(){return i})),l.d(o,"a",(function(){return r}));var a=l("2151");function t(e,o){return(null===e||void 0===e?void 0:e.startsWith("global."))?Object(a["c"])(e,o):e}function i(e,o){var l;return(null===(l=null===e||void 0===e?void 0:e.toString())||void 0===l?void 0:l.startsWith("global."))?Object(a["d"])(e,o):e}function r(e,o){var l;return(null===(l=null===e||void 0===e?void 0:e.toString())||void 0===l?void 0:l.startsWith("global."))?Object(a["a"])(e,o):e}}}]);