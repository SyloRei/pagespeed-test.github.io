(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["featured-products-tile"],{"01bc":function(o,t,e){"use strict";e.d(t,"a",(function(){return l}));var i=e("a9b8");function n(o){return Object(i["c"])("translations")in o}function l(o){function t(t,e){var i;void 0===e&&(e=void 0),i=n(o.state)?o.state.translations:o.state.context.translations;var l=i[t];return void 0===l?"!"+t+"!":(void 0!==e&&Object.keys(e).forEach((function(o){var t=new RegExp(o,"g");l=l.replace(t,e[o])})),l)}return t}},"02ac":function(o,t,e){"use strict";e.d(t,"a",(function(){return a}));var i=e("69f4");function n(o,t){var e,i,n,l,a,r,d,c,s;if(void 0===(null===t||void 0===t?void 0:t.hsl))return!0;var u=(null!==(i=null===(e=null===o||void 0===o?void 0:o.hsl)||void 0===e?void 0:e.h)&&void 0!==i?i:0).toFixed(3),v=(null!==(l=null===(n=null===o||void 0===o?void 0:o.hsl)||void 0===n?void 0:n.s)&&void 0!==l?l:0).toFixed(3),p=(null!==(r=null===(a=null===o||void 0===o?void 0:o.hsl)||void 0===a?void 0:a.l)&&void 0!==r?r:1).toFixed(3),b=null===(d=null===t||void 0===t?void 0:t.hsl)||void 0===d?void 0:d.h.toFixed(3),g=null===(c=null===t||void 0===t?void 0:t.hsl)||void 0===c?void 0:c.s.toFixed(3),f=null===(s=null===t||void 0===t?void 0:t.hsl)||void 0===s?void 0:s.l.toFixed(3);return u===b&&v===g&&p===f}function l(o){var t;return 0===(null===(t=null===o||void 0===o?void 0:o.hsl)||void 0===t?void 0:t.a)}function a(o,t){var e,a,r,d,c,s,u,v,p,b=null===o||void 0===o?void 0:o.background;switch(null===b||void 0===b?void 0:b.type){case i["b"].GRADIENT:return(l(null===(e=null===b||void 0===b?void 0:b.gradient)||void 0===e?void 0:e.fromColor)||n(null===(a=null===t||void 0===t?void 0:t.color)||void 0===a?void 0:a.background,null===(r=null===b||void 0===b?void 0:b.gradient)||void 0===r?void 0:r.fromColor))&&(l(null===(d=null===b||void 0===b?void 0:b.gradient)||void 0===d?void 0:d.toColor)||n(null===(c=null===t||void 0===t?void 0:t.color)||void 0===c?void 0:c.background,null===(s=null===b||void 0===b?void 0:b.gradient)||void 0===s?void 0:s.toColor));case i["b"].SOLID:return l(null===(u=null===b||void 0===b?void 0:b.solid)||void 0===u?void 0:u.color)||n(null===(v=null===t||void 0===t?void 0:t.color)||void 0===v?void 0:v.background,null===(p=null===b||void 0===b?void 0:b.solid)||void 0===p?void 0:p.color);default:return!1}}},"040b":function(o,t,e){"use strict";e.d(t,"a",(function(){return l}));var i=e("a6f4"),n=e("dca0");function l(o,t){var e=Object(i["F"])(0),l=Object(i["F"])(0),a=Object(i["F"])(0);function r(){void 0!==(null===o||void 0===o?void 0:o.value)&&null!==o.value&&(e.value=o.value.offsetTop,l.value=o.value.offsetHeight),void 0!==(null===t||void 0===t?void 0:t.value)&&null!==t.value&&(a.value=t.value.offsetWidth)}function d(){var o=Object(n["a"])(r,120);window.addEventListener("resize",o),r()}return{tileOffsetTop:e,tileOffsetHeight:l,wrapOffsetWidth:a,subscribeOnTileOffsetChange:d}}},1572:function(o,t,e){var i=e("fa56");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);var n=e("499e").default;n("b8903b6c",i,!0,{sourceMap:!1,shadowMode:!1})},"2dfb":function(o,t,e){"use strict";e("1572")},"4a0f":function(o,t,e){"use strict";var i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return void 0!==o.imageInfo.imageUrl?e("div",{class:{"ins-component__bg-image":!0,"ins-component__bg-image--primary":o.primary,"ins-component__bg-image--secondary":o.secondary,"ins-component__bg-image--cover":o.cover},style:[{"--image":o.imageInfo.imageUrl},{"--thumbnail-image":o.imageInfo.thumbnailImageUrl},o.imageInfo.imageBackgroundColor]}):o._e()},n=[],l=e("a6f4"),a=e("d588"),r=Object(l["g"])({props:{imageInfo:{required:!0,type:Object},primary:{required:!1,type:Boolean,default:!1},secondary:{required:!1,type:Boolean,default:!1},imagePosition:{required:!1,type:String,default:void 0}},setup:function(o){var t=Object(l["a"])((function(){return Object(a["b"])(o.imageInfo.homogeneity,o.imagePosition)}));return{cover:t}}}),d=r,c=d,s=e("2877"),u=Object(s["a"])(c,i,n,!1,null,null,null);t["a"]=u.exports},"4c2a":function(o,t,e){"use strict";var i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return o.isHeadTile?e("h1",[o._v(" "+o._s(o.title)+" ")]):e("h2",[o._v(" "+o._s(o.title)+" ")])},n=[],l=e("a6f4"),a=Object(l["g"])({props:{title:{required:!0,type:String},isHeadTile:{required:!0,type:Boolean}}}),r=a,d=r,c=e("2877"),s=Object(c["a"])(d,i,n,!1,null,null,null);t["a"]=s.exports},"52ba":function(o,t,e){"use strict";var i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{class:{"ins-component ins-component--grid-placeholder":!0,"ins-component--text-on-placeholder":o.textOnPlaceholder}},[e("div",{staticClass:"ins-component__title"},[o._v(" "+o._s(o.title)+" ")]),e("div",{staticClass:"ins-component__items"},[e("div",{staticClass:"ins-component__item"},[e("div",{staticClass:"ins-component__text"},[o._v(" "+o._s(o.text)+" ")])]),e("div",{staticClass:"ins-component__item"},[e("div",{staticClass:"ins-component__text"},[o._v(" "+o._s(o.text)+" ")])]),e("div",{staticClass:"ins-component__item"},[e("div",{staticClass:"ins-component__text"},[o._v(" "+o._s(o.text)+" ")])])])])},n=[],l=e("a6f4");const a=Object(l["g"])({props:{title:{required:!0,type:String},text:{required:!0,type:String},textOnPlaceholder:{required:!1,type:Boolean}}});var r=a,d=r,c=(e("f028"),e("2877")),s=Object(c["a"])(d,i,n,!1,null,null,null);t["a"]=s.exports},6280:function(o){o.exports=JSON.parse('{"productListTitle":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"categoriesListTitle":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"categoryName":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":true,"italic":false,"color":{"raw":"#FFF","hex":"#ffffffff","hsl":{"h":0,"s":0,"l":1,"a":1},"rgba":{"r":255,"g":255,"b":255,"a":1},"auto":false},"visible":true},"categoryImage":{"overlay":{"type":"gradient","solid":{"color":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false}},"gradient":{"fromColor":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false},"toColor":{"raw":"#0000004D","hex":"#0000004D","hsl":{"h":0,"s":0,"l":0,"a":0.3},"rgba":{"r":0,"g":0,"b":0,"a":0.3},"auto":false}}},"visible":true},"productName":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"productPrice":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":true,"italic":false,"color":"global.color.body","visible":true},"productImage":{"overlay":{"type":"none","solid":{"color":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false}},"gradient":{"fromColor":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false},"toColor":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false}}},"visible":true},"buyNowButton":{"appearance":"outline-button","font":"global.fontFamily.body","size":"small","style":"round-corner","color":"global.color.button","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},"9ec1":function(o,t,e){"use strict";e.d(t,"a",(function(){return n}));var i=e("a6f4");function n(){var o=Object(i["F"])(0);function t(){"undefined"!==typeof document&&(o.value=document.documentElement.scrollTop||document.body.scrollTop)}function e(){window.addEventListener("scroll",t),t()}return{windowScrollTop:o,subscribeOnWindowScrollChange:e}}},"9fe5":function(o,t,e){"use strict";e.r(t);var i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{ref:"tileRef",class:["ins-tile","ins-tile--products",{"ins-tile--transparent":o.hasTransparentBackground},{"ins-tile--shown":o.isTileShown}]},[e("FontLoader",{attrs:{fonts:o.fonts}}),e("style",{tag:"component"},[o._v(" "+o._s(o.styleSelector)+" ")]),e("div",{staticClass:"ins-tile__wrap ins-tile__animated"},[o.showTile&&o.hasHeadline?e("TileTitle",{staticClass:"ins-tile__headline",attrs:{title:o.content.productListTitle,"is-head-tile":o.isHeadTile}}):o._e(),o.showTile&&o.hasProducts?e("ProductListComponent",{attrs:{content:o.productsContent,design:o.productsDesign,"cp-design":o.productsCpDesign}}):o._e(),o.showPlaceholder?e("GridPlaceholderComponent",{attrs:{title:o.i18n("EmptyState.FeaturedProducts.title"),text:o.i18n("EmptyState.FeaturedProducts.Cards.placeholder")}}):o._e()],1)],1)},n=[],l=e("9ab4"),a=e("2430"),r=e("a6f4"),d=e("5303"),c=e("02ac"),s=e("6280"),u=e("7ffe"),v=e("9ec1"),p=e("040b"),b=e("a9b8"),g=e("cc48"),f=e("4c2a"),m=e("52ba"),h=e("01bc");function y(o){switch(o){case"CENTER":return s;default:return}}function _(o){var t=Object(l["b"])(Object(l["b"])(Object(l["b"])(Object(l["b"])(Object(l["b"])(Object(l["b"])([],Object(d["c"])(o.general)),Object(d["h"])("headline",o.productListTitle)),Object(d["h"])("product-name",o.productName)),Object(d["h"])("product-price",o.productPrice)),Object(d["e"])("product-image",o.productImage)),Object(d["a"])("button",o.buyNowButton));return t}var x=Object(r["g"])({components:{GridPlaceholderComponent:m["a"],ProductListComponent:a["a"],FontLoader:g["a"],TileTitle:f["a"]},props:{profile:{required:!0,type:Object},content:{required:!0,type:Object},externalContent:{required:!0,type:Object},design:{required:!0,type:Object},viewportSettings:{required:!0,type:Object},isHeadTile:{required:!0,type:Boolean}},setup:function(o,t){var e=t.attrs,i=t.root,n=t.emit,a=Object(h["a"])(i.$store),s=Object(r["F"])(),g=Object(v["a"])(),f=g.windowScrollTop,m=g.subscribeOnWindowScrollChange,x=Object(p["a"])(s),O=x.tileOffsetTop,w=x.tileOffsetHeight,j=x.subscribeOnTileOffsetChange,k=Object(r["a"])((function(){return y(o.design.layout)})),C=Object(r["a"])((function(){var t,e,i,n,a,r,d,c,s,u,v,p,b,g,f,m,h,y,_,x,O,w,j,C,z,T,L,S,I,P,B,F,N=o.design,E=Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(t=k.value)||void 0===t?void 0:t.general),N.general),{background:Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(i=null===(e=k.value)||void 0===e?void 0:e.general)||void 0===i?void 0:i.background),null===(n=N.general)||void 0===n?void 0:n.background),{solid:Object(l["a"])(Object(l["a"])({},null===(d=null===(r=null===(a=k.value)||void 0===a?void 0:a.general)||void 0===r?void 0:r.background)||void 0===d?void 0:d.solid),null===(s=null===(c=N.general)||void 0===c?void 0:c.background)||void 0===s?void 0:s.solid),gradient:Object(l["a"])(Object(l["a"])({},null===(p=null===(v=null===(u=k.value)||void 0===u?void 0:u.general)||void 0===v?void 0:v.background)||void 0===p?void 0:p.gradient),null===(g=null===(b=N.general)||void 0===b?void 0:b.background)||void 0===g?void 0:g.gradient)})}),q=Object(l["a"])(Object(l["a"])({},null===(f=k.value)||void 0===f?void 0:f.productListTitle),N.productListTitle),D=Object(l["a"])(Object(l["a"])({},null===(m=k.value)||void 0===m?void 0:m.productName),N.productName),A=Object(l["a"])(Object(l["a"])({},null===(h=k.value)||void 0===h?void 0:h.productPrice),N.productPrice),R=Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(y=k.value)||void 0===y?void 0:y.productImage),N.productImage),{overlay:Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(x=null===(_=k.value)||void 0===_?void 0:_.productImage)||void 0===x?void 0:x.overlay),null===(O=N.productImage)||void 0===O?void 0:O.overlay),{solid:Object(l["a"])(Object(l["a"])({},null===(C=null===(j=null===(w=k.value)||void 0===w?void 0:w.productImage)||void 0===j?void 0:j.overlay)||void 0===C?void 0:C.solid),null===(T=null===(z=N.productImage)||void 0===z?void 0:z.overlay)||void 0===T?void 0:T.solid),gradient:Object(l["a"])(Object(l["a"])({},null===(I=null===(S=null===(L=k.value)||void 0===L?void 0:L.productImage)||void 0===S?void 0:S.overlay)||void 0===I?void 0:I.gradient),null===(B=null===(P=N.productImage)||void 0===P?void 0:P.overlay)||void 0===B?void 0:B.gradient)})}),U=Object(l["a"])(Object(l["a"])({},null===(F=k.value)||void 0===F?void 0:F.buyNowButton),N.buyNowButton);return{layout:N.layout,productListTitle:q,productName:D,productPrice:A,productImage:R,buyNowButton:U,general:E}})),z=Object(r["F"])(!1),T=Object(r["a"])((function(){return Object(u["a"])(z,o.viewportSettings,f.value,O.value,w.value)})),L=Object(r["a"])((function(){var o,t,e,i;return[null===(o=C.value.productListTitle)||void 0===o?void 0:o.font,null===(t=C.value.productName)||void 0===t?void 0:t.font,null===(e=C.value.productPrice)||void 0===e?void 0:e.font,null===(i=C.value.buyNowButton)||void 0===i?void 0:i.font]})),S=Object(r["a"])((function(){var o=_(C.value);return Object(d["i"])("#"+e.id,o)})),I=Object(r["a"])((function(){var t;return null!==(t=o.profile.storeClosed)&&void 0!==t&&t})),P=Object(r["a"])((function(){var o,t;return Object(c["a"])(null===(o=C.value)||void 0===o?void 0:o.general,null===(t=i.$store.state.siteSettings)||void 0===t?void 0:t.design)})),B=Object(r["a"])((function(){return o.externalContent.cpDesign})),F=Object(r["a"])((function(){var t,e=null===(t=C.value.productListTitle)||void 0===t?void 0:t.visible,i=Object(b["a"])(o.content.productListTitle);return e&&i})),N=Object(r["a"])((function(){return o.externalContent.storeData.products.length>0})),E=Object(r["a"])((function(){return{productListTitle:o.content.productListTitle,buyNowButton:o.content.buyNowButton,onSaleLabel:o.content.onSaleLabel,outOfStockLabel:o.content.outOfStockLabel,soldOutLabel:o.content.soldOutLabel,products:o.externalContent.storeData.products}})),q=Object(r["a"])((function(){return{productListTitle:C.value.productListTitle,productName:C.value.productName,productPrice:C.value.productPrice,productImage:C.value.productImage,buyNowButton:C.value.buyNowButton}})),D=Object(r["a"])((function(){return{imageSize:B.value.productListImageSize,imageLayout:B.value.productListImageLayout,imagePosition:B.value.productListImagePosition,productInfoLayout:B.value.productListCardLayout,showCardFrame:B.value.productListShowCardFrame,showAdditionalImage:B.value.productListShowAdditionalImage,titleBehavior:B.value.productListTitleBehaviour,priceBehavior:B.value.productListPriceBehaviour,buyNowBehavior:B.value.productListBuyButtonBehaviour}})),A=Object(r["a"])((function(){return!I.value&&N.value})),R=i.$store.getters.isPreviewMode,U=Object(r["a"])((function(){return R&&!A.value}));return Object(r["x"])((function(){n("tile-loaded"),m(),j()})),Object(r["z"])((function(){n("tile-unloaded")})),{i18n:a,tileRef:s,productsContent:E,productsDesign:q,productsCpDesign:D,fonts:L,styleSelector:S,hasHeadline:F,hasProducts:N,hasTransparentBackground:P,isTileShown:T,showTile:A,showPlaceholder:U}}}),O=x,w=O,j=(e("2dfb"),e("2877")),k=Object(j["a"])(w,i,n,!1,null,null,null);t["default"]=k.exports},a40a:function(o,t,e){"use strict";function i(o,t,e,i){var n={};if(e){var l=null===e||void 0===e?void 0:e.red,a=null===e||void 0===e?void 0:e.green,r=null===e||void 0===e?void 0:e.blue,d=null===e||void 0===e?void 0:e.alpha;n={backgroundColor:"rgba("+l+", "+a+", "+r+", "+d+")"}}return{imageUrl:o,thumbnailImageUrl:t,imageBackgroundColor:n,homogeneity:i}}function n(o){if(o){var t=o.imageUrl;return void 0!==t?"url("+t+")":void 0}}function l(o){if(o){var t=o.thumbnailImageUrl,e=o.imageUrl;return void 0!==t?"url("+t+")":void 0!==e?"url("+e+")":void 0}}function a(o,t){return void 0===t?"ins-component__bg--color-"+o%10:""}e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"d",(function(){return l})),e.d(t,"a",(function(){return a}))},d2e0:function(o,t,e){"use strict";function i(o){return void 0===o?"ins-component--medium":"ins-component--"+o.toLowerCase()}function n(o){return void 0===o?"ins-component--layout-center":"ins-component--layout-"+o.toLowerCase()}function l(o){switch(o){case"PORTRAIT_0667":return"ins-component--portrait2";case"PORTRAIT_075":return"ins-component--portrait1";case"LANDSCAPE_1333":return"ins-component--landscape1";case"LANDSCAPE_15":return"ins-component--landscape2";case"SQUARE_1":default:return"ins-component--square"}}e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return l}))},d588:function(o,t,e){"use strict";function i(o,t){return!(void 0!==o&&!o)&&t()}function n(o,t){return void 0===t||"AUTO"===t?!o:"COVER"===t}e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return n}))},d58b:function(o,t,e){var i=e("f22a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);var n=e("499e").default;n("d7a3a44a",i,!0,{sourceMap:!1,shadowMode:!1})},f028:function(o,t,e){"use strict";e("d58b")},f22a:function(o,t,e){var i=e("24fb");t=i(!1),t.push([o.i,'.ins-component--grid-placeholder .ins-component__title{color:hsla(var(--global-title-color-h),var(--global-title-color-s),var(--global-title-color-l),.4);font-family:var(--global-title-font-family-stack);font-style:normal;font-weight:400;font-size:calc(var(--global-title-font-size)*0.5 + 8px)}@media screen and (min-width:500px){.ins-tiles--500 .ins-component--grid-placeholder .ins-component__title{font-size:calc(var(--global-title-font-size)*0.7 + 4.8px)}}@media screen and (min-width:900px){.ins-tiles--900 .ins-component--grid-placeholder .ins-component__title{font-size:calc(var(--global-title-font-size)*1)}}.ins-component--grid-placeholder .ins-component__text{color:hsla(var(--global-body-color-h),var(--global-body-color-s),var(--global-body-color-l),.4);font-family:var(--global-body-font-family-stack);font-size:var(--global-body-font-size);font-style:normal;font-weight:400;font-size:calc(var(--global-body-font-size)*0.5 + 8px)}@media screen and (min-width:500px){.ins-tiles--500 .ins-component--grid-placeholder .ins-component__text{font-size:calc(var(--global-body-font-size)*0.7 + 4.8px)}}@media screen and (min-width:900px){.ins-tiles--900 .ins-component--grid-placeholder .ins-component__text{font-size:calc(var(--global-body-font-size)*1)}}.ins-component--grid-placeholder .ins-component__item:before{background-color:hsla(var(--global-body-color-h),var(--global-body-color-s),var(--global-body-color-l),.1)}.ins-component--grid-placeholder.ins-component--text-on-placeholder .ins-component__text{position:absolute;bottom:25px}.ins-component--grid-placeholder .ins-component__title{width:100%;margin-bottom:40px;text-align:center}.ins-component--grid-placeholder .ins-component__items{display:grid;grid-column-gap:30px;grid-template-columns:1fr}@media screen and (min-width:600px){.ins-tiles--600 .ins-component--grid-placeholder .ins-component__items{grid-template-columns:1fr 1fr}}@media screen and (min-width:900px){.ins-tiles--900 .ins-component--grid-placeholder .ins-component__items{grid-template-columns:1fr 1fr 1fr}}.ins-component--grid-placeholder .ins-component__item{display:none;position:relative;text-align:center}.ins-component--grid-placeholder .ins-component__item:first-child{display:block}@media screen and (min-width:600px){.ins-tiles--600 .ins-component--grid-placeholder .ins-component__item:nth-child(2){display:block}}@media screen and (min-width:900px){.ins-tiles--900 .ins-component--grid-placeholder .ins-component__item:nth-child(3){display:block}}.ins-component--grid-placeholder .ins-component__item:before{content:"";display:block;width:100%;padding-top:100%}.ins-component--grid-placeholder .ins-component__text{width:100%;margin-top:10px}',""]),o.exports=t},fa56:function(o,t,e){var i=e("24fb");t=i(!1),t.push([o.i,".ins-tile--products{--headline-font-family:var(--global-title-font-family-stack);--headline-font-size:var(--global-title-font-size);--headline-font-style:normal;--headline-font-weight:700;--description-font-family:var(--global-body-font-family-stack);--description-font-size:var(--global-body-font-size);--description-font-style:normal;--description-font-weight:400;--product-name-font-family:var(--global-body-font-family-stack);--product-name-font-size:var(--global-body-font-size);--product-name-font-style:normal;--product-name-font-weight:400;--product-price-font-family:var(--global-body-font-family-stack);--product-price-font-size:var(--global-body-font-size);--product-price-font-style:normal;--product-price-font-weight:700;--headline-text-color-h:var(--global-title-color-h);--headline-text-color-s:var(--global-title-color-s);--headline-text-color-l:var(--global-title-color-l);--headline-text-color-a:var(--global-title-color-a);--description-text-color-h:var(--global-body-color-h);--description-text-color-s:var(--global-body-color-s);--description-text-color-l:var(--global-body-color-l);--description-text-color-a:var(--global-body-color-a);--product-name-text-color-h:var(--global-body-color-h);--product-name-text-color-s:var(--global-body-color-s);--product-name-text-color-l:var(--global-body-color-l);--product-name-text-color-a:var(--global-body-color-a);--product-price-text-color-h:var(--global-body-color-h);--product-price-text-color-s:var(--global-body-color-s);--product-price-text-color-l:var(--global-body-color-l);--product-price-text-color-a:var(--global-body-color-a);background-color:hsla(var(--background-solid-color-h),var(--background-solid-color-s),var(--background-solid-color-l),var(--background-solid-color-a));background-image:-webkit-gradient(linear,left top,left bottom,from(var(--background-gradient-angle)),color-stop(0,hsla(var(--background-gradient-color-from-h),var(--background-gradient-color-from-s),var(--background-gradient-color-from-l),var(--background-gradient-color-from-a))),to(hsla(var(--background-gradient-color-to-h),var(--background-gradient-color-to-s),var(--background-gradient-color-to-l),var(--background-gradient-color-to-a))));background-image:linear-gradient(var(--background-gradient-angle),hsla(var(--background-gradient-color-from-h),var(--background-gradient-color-from-s),var(--background-gradient-color-from-l),var(--background-gradient-color-from-a)),hsla(var(--background-gradient-color-to-h),var(--background-gradient-color-to-s),var(--background-gradient-color-to-l),var(--background-gradient-color-to-a)))}.ins-tile--products .ins-tile__headline{color:hsla(var(--headline-text-color-h),var(--headline-text-color-s),var(--headline-text-color-l),var(--headline-text-color-a));font-family:var(--headline-font-family);font-style:var(--headline-font-style);font-weight:var(--headline-font-weight);line-height:min(calc(2em - 4px),calc(.8em + 23px));font-size:calc(var(--headline-font-size)*0.5 + 8px)}@media screen and (min-width:500px){.ins-tiles--500 .ins-tile--products .ins-tile__headline{font-size:calc(var(--headline-font-size)*0.7 + 4.8px)}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--products .ins-tile__headline{font-size:calc(var(--headline-font-size)*1)}}.ins-tile--products .ins-tile__description{color:hsla(var(--description-text-color-h),var(--description-text-color-s),var(--description-text-color-l),var(--description-text-color-a));font-family:var(--description-font-family);font-style:var(--description-font-style);font-weight:var(--description-font-weight);font-size:calc(var(--description-font-size)*0.5 + 8px)}@media screen and (min-width:500px){.ins-tiles--500 .ins-tile--products .ins-tile__description{font-size:calc(var(--description-font-size)*0.7 + 4.8px)}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--products .ins-tile__description{font-size:calc(var(--description-font-size)*1)}}.ins-tile--products{padding-right:calc(var(--global-tile-padding)*1px);padding-left:calc(var(--global-tile-padding)*1px);padding-right:calc(env(safe-area-inset-right) + var(--global-tile-padding)*1px);padding-left:calc(env(safe-area-inset-left) + var(--global-tile-padding)*1px)}.ins-tile--products .ins-tile__wrap{width:100%;max-width:calc(var(--global-tile-max-width)*1px);margin:var(--computed-tile-margin) auto}.ins-tile--products .ins-tile__description,.ins-tile--products .ins-tile__headline{width:100%;margin:0 auto;text-align:center;word-break:break-word}@media screen and (min-width:500px){.ins-tiles--500 .ins-tile--products .ins-tile__description,.ins-tiles--500 .ins-tile--products .ins-tile__headline{width:87.28522%}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--products .ins-tile__description,.ins-tiles--900 .ins-tile--products .ins-tile__headline{width:74.57045%;width:61.85567%}}.ins-tile--products .ins-tile__description:nth-last-child(2),.ins-tile--products .ins-tile__headline:nth-last-child(2){margin-bottom:min(calc(1vw + 30px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 30px))}.ins-tile--products .ins-tile__description:nth-last-child(3),.ins-tile--products .ins-tile__headline:nth-last-child(3){margin-bottom:min(calc(1vw + 20px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 20px))}",""]),o.exports=t}}]);