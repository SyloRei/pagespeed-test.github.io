(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["logo-content-editor"],{f01c:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ine-block ine-mb30"},[i("div",{staticClass:"ine-title ine-title--h3"},[e._v(" "+e._s(e.i18n(e.label))+" ")]),i("div",{staticClass:"ine-image-loader"},[e.hasLogo||e.isUploadingLogoImage?e._e():i("div",{staticClass:"ine-group"},[i("div",{staticClass:"ine-group__cell ine-group__cell--6"},[i("div",{staticClass:"ine-control ine-control--button ine-control--secondary ine-control--large ine-control--flexible"},[i("button",{staticClass:"ine-control__button",on:{click:function(t){return e.$emit("editor-action")}}},[i("div",{staticClass:"ine-control__wrap"},[i("div",{staticClass:"ine-control__icon"},[i("PlusIcon")],1),i("div",{staticClass:"ine-control__text"},[e._v(" "+e._s(e.i18n("CommonLabels.Logo.Add.button"))+" ")])])])])])]),e.hasLogo||e.isUploadingLogoImage?i("div",{staticClass:"ine-group"},[i("div",{staticClass:"ine-group__cell ine-group__cell--2"},[e.isTextLogo?i("div",{staticClass:"ine-image-loader__thumbnail ine-image-loader__thumbnail--light",on:{click:function(t){return e.$emit("editor-action")}}},[i("span",{staticClass:"ine-image-loader__text"},[e._v(" "+e._s(e.logoText)+" ")])]):e._e(),e.isImageLogo?i("div",{class:["ine-image-loader__thumbnail ine-image-loader__thumbnail--contain ine-image-loader__thumbnail--light",{"ine-image-loader__thumbnail--loading":e.isUploadingLogoImage}],on:{click:function(t){return e.$emit("editor-action")}}},[i("div",{staticClass:"ine-image-loader__image",style:{backgroundImage:"url("+e.logoImage+")"}})]):e._e()]),i("div",{staticClass:"ine-group__cell ine-group__cell--4"},[i("div",{staticClass:"ine-control ine-control--button ine-control--secondary ine-control--medium ine-control--flexible"},[i("button",{staticClass:"ine-control__button",on:{click:function(t){return e.$emit("editor-action")}}},[i("div",{staticClass:"ine-control__wrap"},[i("div",{staticClass:"ine-control__text"},[e._v(" "+e._s(e.i18n("CommonLabels.Logo.Change.button"))+" ")])])])])])]):e._e()])])},n=[],a=i("a6f4"),l=i("a9b8"),c=i("9350"),s=i("01bc"),r=i("c605"),u=i("d30e"),d=i("ad00"),v=Object(a["g"])({components:{PlusIcon:c["a"].PlusIcon},props:{tileId:{required:!0,type:String},label:{required:!0,type:String},value:{required:!1,default:void 0,type:Object}},setup:function(e,t){var i=t.root,o=i.$store,n=Object(s["a"])(o),c=Object(a["a"])((function(){var t;return(null===(t=e.value)||void 0===t?void 0:t.type)===r["a"].TEXT})),v=Object(a["a"])((function(){var t;return(null===(t=e.value)||void 0===t?void 0:t.type)===r["a"].IMAGE})),g=Object(a["a"])((function(){var t,i;return c.value?Object(l["a"])(null===(t=e.value)||void 0===t?void 0:t.text):!!v.value&&void 0!==(null===(i=e.value)||void 0===i?void 0:i.image)})),_=Object(a["a"])((function(){var t=o.state.imageListInUploadingState;return Object(d["a"])(t,e.tileId,"logo-image")})),b=Object(a["a"])((function(){return void 0!==_.value})),m=Object(a["a"])((function(){var t;return null===(t=e.value)||void 0===t?void 0:t.text})),p=Object(a["a"])((function(){var t,o,n;if(void 0!==_.value)return _.value.rawImage;var a=null===(t=e.value)||void 0===t?void 0:t.image,l=null===a||void 0===a?void 0:a.bucket,c=null===(n=null===(o=null===a||void 0===a?void 0:a.set)||void 0===o?void 0:o["default-200x200"])||void 0===n?void 0:n.url;return Object(u["a"])(c,l,i.$store.state.context.bucketUrls)}));return{i18n:n,isTextLogo:c,isImageLogo:v,hasLogo:g,isUploadingLogoImage:b,logoText:m,logoImage:p}}}),g=v,_=g,b=i("2877"),m=Object(b["a"])(_,o,n,!1,null,null,null);t["default"]=m.exports}}]);