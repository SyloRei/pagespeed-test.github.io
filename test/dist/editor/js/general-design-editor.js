(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["general-design-editor"],{7222:function(o,e,t){"use strict";t.r(e);var a=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("div",{staticClass:"ine-block ine-mb20"},[t("div",{staticClass:"ine-title ine-title--h3"},[o._v(" "+o._s(o.i18n("CommonLabels.General.Background.Style"))+" ")]),t("ComboBoxEditorControl",{attrs:{choices:o.backgroundTypeChoices},model:{value:o.backgroundType,callback:function(e){o.backgroundType=e},expression:"backgroundType"}})],1),"solid"===o.backgroundType?t("div",{staticClass:"ine-switch"},[t("div",{staticClass:"ine-block ine-mb20"},[t("div",{staticClass:"ine-title ine-title--h3"},[o._v(" "+o._s(o.i18n("CommonLabels.General.Color"))+" ")]),t("ColorBoxEditorControl",{attrs:{"default-value":o.defaultSolidBackgroundColor,"alpha-enabled":o.alphaColorEnabled,"auto-enabled":o.autoColorEnabled,"reset-color-enabled":!0,preset:o.colorList},model:{value:o.solidBackgroundColor,callback:function(e){o.solidBackgroundColor=e},expression:"solidBackgroundColor"}})],1)]):o._e(),"gradient"===o.backgroundType?t("div",{staticClass:"ine-switch"},[t("div",{staticClass:"ine-block ine-mb20"},[t("div",{staticClass:"ine-group"},[t("div",{staticClass:"ine-group__cell ine-group__cell--3"},[t("div",{staticClass:"ine-title ine-title--h3"},[o._v(" "+o._s(o.i18n("CommonLabels.General.GradientStart"))+" ")]),t("ColorBoxEditorControl",{attrs:{"default-value":o.defaultGradientBackgroundFromColor,"alpha-enabled":o.alphaColorEnabled,"auto-enabled":o.autoColorEnabled,"reset-color-enabled":!0,preset:o.colorList},model:{value:o.gradientFromColor,callback:function(e){o.gradientFromColor=e},expression:"gradientFromColor"}})],1),t("div",{staticClass:"ine-group__cell ine-group__cell--3"},[t("div",{staticClass:"ine-title ine-title--h3"},[o._v(" "+o._s(o.i18n("CommonLabels.General.GradientEnd"))+" ")]),t("ColorBoxEditorControl",{attrs:{"default-value":o.defaultGradientBackgroundToColor,"alpha-enabled":o.alphaColorEnabled,"auto-enabled":o.autoColorEnabled,"reset-color-enabled":!0,preset:o.colorList},model:{value:o.gradientToColor,callback:function(e){o.gradientToColor=e},expression:"gradientToColor"}})],1)])])]):o._e()])},n=[],l=t("9ab4"),r=t("a6f4"),i=t("04c8"),d=t("69f4"),u=t("f252"),c=t("01bc");function b(o){function e(){o("change-active")}return e}function s(o,e){function t(t){if(void 0!==t){var a=Object(l["a"])(Object(l["a"])({},o.value.background),{type:t}),n=Object(l["a"])(Object(l["a"])({},o.value),{background:a});e("editor-action",n)}else{var r=Object(l["a"])(Object(l["a"])({},o.value),{background:void 0});e("editor-action",r)}}return t}function v(o,e){function t(t){var a,n=Object(l["a"])(Object(l["a"])({},null===(a=o.value.background)||void 0===a?void 0:a.solid),{color:t}),r=Object(l["a"])(Object(l["a"])({},o.value.background),{solid:n}),i=Object(l["a"])(Object(l["a"])({},o.value),{background:r});e("editor-action",i)}return t}function g(o,e){function t(t){var a,n=Object(l["a"])(Object(l["a"])({},null===(a=o.value.background)||void 0===a?void 0:a.gradient),{fromColor:t}),r=Object(l["a"])(Object(l["a"])({},o.value.background),{gradient:n}),i=Object(l["a"])(Object(l["a"])({},o.value),{background:r});e("editor-action",i)}return t}function C(o,e){function t(t){var a,n=Object(l["a"])(Object(l["a"])({},null===(a=o.value.background)||void 0===a?void 0:a.gradient),{toColor:t}),r=Object(l["a"])(Object(l["a"])({},o.value.background),{gradient:n}),i=Object(l["a"])(Object(l["a"])({},o.value),{background:r});e("editor-action",i)}return t}function f(o,e){var t,a,n=[{key:d["b"].SOLID,label:e("CommonLabels.General.Background.SolidColor")},{key:d["b"].GRADIENT,label:e("CommonLabels.General.Background.Gradient")}],r=null!==(a=null===(t=n.find((function(e){return o===e.key})))||void 0===t?void 0:t.label)&&void 0!==a?a:"",i=e("CommonLabels.General.Background.Default").replace("{backgroundType}",r);return Object(l["d"])([{key:void 0,label:i}],n)}var k=Object(r["g"])({components:{ComboBoxEditorControl:i["e"],ColorBoxEditorControl:i["d"]},props:{value:{required:!1,default:void 0,type:Object},defaults:{required:!0,type:Object},siteSettings:{required:!1,default:void 0,type:Object},colorList:{required:!0,type:Array},autoColorEnabled:{required:!0,type:Boolean},alphaColorEnabled:{required:!0,type:Boolean}},setup:function(o,e){var t=e.root,a=e.emit,n=Object(c["a"])(t.$store),l=Object(r["a"])((function(){var e,t,a,n,l,r;return{background:{type:null===(t=null===(e=o.value)||void 0===e?void 0:e.background)||void 0===t?void 0:t.type,solid:null===(n=null===(a=o.value)||void 0===a?void 0:a.background)||void 0===n?void 0:n.solid,gradient:null===(r=null===(l=o.value)||void 0===l?void 0:l.background)||void 0===r?void 0:r.gradient}}})),i=b(a),d=Object(r["a"])((function(){var e;return f(null===(e=o.defaults.background)||void 0===e?void 0:e.type,n)})),k=Object(r["a"])({get:function(){return l.value.background.type},set:s(l,a)}),p=Object(r["a"])((function(){var e,t;return Object(u["a"])(null===(t=null===(e=o.defaults.background)||void 0===e?void 0:e.solid)||void 0===t?void 0:t.color,o.siteSettings)})),O=Object(r["a"])({get:function(){var o;return null===(o=l.value.background.solid)||void 0===o?void 0:o.color},set:v(l,a)}),j=Object(r["a"])((function(){var e,t;return Object(u["a"])(null===(t=null===(e=o.defaults.background)||void 0===e?void 0:e.gradient)||void 0===t?void 0:t.fromColor,o.siteSettings)})),m=Object(r["a"])({get:function(){var o;return null===(o=l.value.background.gradient)||void 0===o?void 0:o.fromColor},set:g(l,a)}),y=Object(r["a"])((function(){var e,t;return Object(u["a"])(null===(t=null===(e=o.defaults.background)||void 0===e?void 0:e.gradient)||void 0===t?void 0:t.toColor,o.siteSettings)})),h=Object(r["a"])({get:function(){var o;return null===(o=l.value.background.gradient)||void 0===o?void 0:o.toColor},set:C(l,a)});return{i18n:n,backgroundType:k,backgroundTypeChoices:d,defaultGradientBackgroundFromColor:j,gradientFromColor:m,defaultGradientBackgroundToColor:y,gradientToColor:h,headerClickHandler:i,defaultSolidBackgroundColor:p,solidBackgroundColor:O}}}),p=k,O=p,j=t("2877"),m=Object(j["a"])(O,a,n,!1,null,null,null);e["default"]=m.exports},f252:function(o,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return r}));var a=t("2151");function n(o,e){return(null===o||void 0===o?void 0:o.startsWith("global."))?Object(a["c"])(o,e):o}function l(o,e){var t;return(null===(t=null===o||void 0===o?void 0:o.toString())||void 0===t?void 0:t.startsWith("global."))?Object(a["d"])(o,e):o}function r(o,e){var t;return(null===(t=null===o||void 0===o?void 0:o.toString())||void 0===t?void 0:t.startsWith("global."))?Object(a["a"])(o,e):o}}}]);