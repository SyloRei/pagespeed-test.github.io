(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["featured-products-tile"],{"01bc":function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var i=o("a9b8");function n(e){return Object(i["c"])("translations")in e}function l(e){function t(t,o){var i;void 0===o&&(o=void 0),i=n(e.state)?e.state.translations:e.state.context.translations;var l=i[t];return void 0===l?"!"+t+"!":(void 0!==o&&Object.keys(o).forEach((function(e){var t=new RegExp(e,"g");l=l.replace(t,o[e])})),l)}return t}},"02ac":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var i=o("69f4");function n(e,t){var o,i,n,l,r,a,u,d,c;if(void 0===(null===t||void 0===t?void 0:t.hsl))return!0;var s=(null!==(i=null===(o=null===e||void 0===e?void 0:e.hsl)||void 0===o?void 0:o.h)&&void 0!==i?i:0).toFixed(3),v=(null!==(l=null===(n=null===e||void 0===e?void 0:e.hsl)||void 0===n?void 0:n.s)&&void 0!==l?l:0).toFixed(3),b=(null!==(a=null===(r=null===e||void 0===e?void 0:e.hsl)||void 0===r?void 0:r.l)&&void 0!==a?a:1).toFixed(3),f=null===(u=null===t||void 0===t?void 0:t.hsl)||void 0===u?void 0:u.h.toFixed(3),p=null===(d=null===t||void 0===t?void 0:t.hsl)||void 0===d?void 0:d.s.toFixed(3),g=null===(c=null===t||void 0===t?void 0:t.hsl)||void 0===c?void 0:c.l.toFixed(3);return s===f&&v===p&&b===g}function l(e){var t;return 0===(null===(t=null===e||void 0===e?void 0:e.hsl)||void 0===t?void 0:t.a)}function r(e,t){var o,r,a,u,d,c,s,v,b,f=null===e||void 0===e?void 0:e.background;switch(null===f||void 0===f?void 0:f.type){case i["b"].GRADIENT:return(l(null===(o=null===f||void 0===f?void 0:f.gradient)||void 0===o?void 0:o.fromColor)||n(null===(r=null===t||void 0===t?void 0:t.color)||void 0===r?void 0:r.background,null===(a=null===f||void 0===f?void 0:f.gradient)||void 0===a?void 0:a.fromColor))&&(l(null===(u=null===f||void 0===f?void 0:f.gradient)||void 0===u?void 0:u.toColor)||n(null===(d=null===t||void 0===t?void 0:t.color)||void 0===d?void 0:d.background,null===(c=null===f||void 0===f?void 0:f.gradient)||void 0===c?void 0:c.toColor));case i["b"].SOLID:return l(null===(s=null===f||void 0===f?void 0:f.solid)||void 0===s?void 0:s.color)||n(null===(v=null===t||void 0===t?void 0:t.color)||void 0===v?void 0:v.background,null===(b=null===f||void 0===f?void 0:f.solid)||void 0===b?void 0:b.color);default:return!1}}},"040b":function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var i=o("a6f4"),n=o("dca0");function l(e,t){var o=Object(i["F"])(0),l=Object(i["F"])(0),r=Object(i["F"])(0);function a(){void 0!==(null===e||void 0===e?void 0:e.value)&&null!==e.value&&(o.value=e.value.offsetTop,l.value=e.value.offsetHeight),void 0!==(null===t||void 0===t?void 0:t.value)&&null!==t.value&&(r.value=t.value.offsetWidth)}function u(){var e=Object(n["a"])(a,120);window.addEventListener("resize",e),a()}return{tileOffsetTop:o,tileOffsetHeight:l,wrapOffsetWidth:r,subscribeOnTileOffsetChange:u}}},"2dfb":function(e,t,o){"use strict";o("b8de")},"36e1":function(e,t,o){},"4a0f":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return void 0!==e.imageInfo.imageUrl?o("div",{class:{"ins-component__bg-image":!0,"ins-component__bg-image--primary":e.primary,"ins-component__bg-image--secondary":e.secondary,"ins-component__bg-image--cover":e.cover},style:[{"--image":e.imageInfo.imageUrl},{"--thumbnail-image":e.imageInfo.thumbnailImageUrl},e.imageInfo.imageBackgroundColor]}):e._e()},n=[],l=o("a6f4"),r=o("d588"),a=Object(l["g"])({props:{imageInfo:{required:!0,type:Object},primary:{required:!1,type:Boolean,default:!1},secondary:{required:!1,type:Boolean,default:!1},imagePosition:{required:!1,type:String,default:void 0}},setup:function(e){var t=Object(l["a"])((function(){return Object(r["b"])(e.imageInfo.homogeneity,e.imagePosition)}));return{cover:t}}}),u=a,d=u,c=o("2877"),s=Object(c["a"])(d,i,n,!1,null,null,null);t["a"]=s.exports},"4c2a":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.isHeadTile?o("h1",[e._v(" "+e._s(e.title)+" ")]):o("h2",[e._v(" "+e._s(e.title)+" ")])},n=[],l=o("a6f4"),r=Object(l["g"])({props:{title:{required:!0,type:String},isHeadTile:{required:!0,type:Boolean}}}),a=r,u=a,d=o("2877"),c=Object(d["a"])(u,i,n,!1,null,null,null);t["a"]=c.exports},"52ba":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{"ins-component ins-component--grid-placeholder":!0,"ins-component--text-on-placeholder":e.textOnPlaceholder}},[o("div",{staticClass:"ins-component__title"},[e._v(" "+e._s(e.title)+" ")]),o("div",{staticClass:"ins-component__items"},[o("div",{staticClass:"ins-component__item"},[o("div",{staticClass:"ins-component__text"},[e._v(" "+e._s(e.text)+" ")])]),o("div",{staticClass:"ins-component__item"},[o("div",{staticClass:"ins-component__text"},[e._v(" "+e._s(e.text)+" ")])]),o("div",{staticClass:"ins-component__item"},[o("div",{staticClass:"ins-component__text"},[e._v(" "+e._s(e.text)+" ")])])])])},n=[],l=o("a6f4");const r=Object(l["g"])({props:{title:{required:!0,type:String},text:{required:!0,type:String},textOnPlaceholder:{required:!1,type:Boolean}}});var a=r,u=a,d=(o("f028"),o("2877")),c=Object(d["a"])(u,i,n,!1,null,null,null);t["a"]=c.exports},6280:function(e){e.exports=JSON.parse('{"productListTitle":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"categoriesListTitle":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"categoryName":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":true,"italic":false,"color":{"raw":"#FFF","hex":"#ffffffff","hsl":{"h":0,"s":0,"l":1,"a":1},"rgba":{"r":255,"g":255,"b":255,"a":1},"auto":false},"visible":true},"categoryImage":{"overlay":{"type":"gradient","solid":{"color":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false}},"gradient":{"fromColor":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false},"toColor":{"raw":"#0000004D","hex":"#0000004D","hsl":{"h":0,"s":0,"l":0,"a":0.3},"rgba":{"r":0,"g":0,"b":0,"a":0.3},"auto":false}}},"visible":true},"productName":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"productPrice":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":true,"italic":false,"color":"global.color.body","visible":true},"productImage":{"overlay":{"type":"none","solid":{"color":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false}},"gradient":{"fromColor":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false},"toColor":{"raw":"#00000000","hex":"#00000000","hsl":{"h":0,"s":0,"l":0,"a":0},"rgba":{"r":0,"g":0,"b":0,"a":0},"auto":false}}},"visible":true},"buyNowButton":{"appearance":"outline-button","font":"global.fontFamily.body","size":"small","style":"round-corner","color":"global.color.button","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},"9ec1":function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var i=o("a6f4");function n(){var e=Object(i["F"])(0);function t(){"undefined"!==typeof document&&(e.value=document.documentElement.scrollTop||document.body.scrollTop)}function o(){window.addEventListener("scroll",t),t()}return{windowScrollTop:e,subscribeOnWindowScrollChange:o}}},"9fe5":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"tileRef",class:["ins-tile","ins-tile--products",{"ins-tile--transparent":e.hasTransparentBackground},{"ins-tile--shown":e.isTileShown}]},[o("FontLoader",{attrs:{fonts:e.fonts}}),o("style",{tag:"component"},[e._v(" "+e._s(e.styleSelector)+" ")]),o("div",{staticClass:"ins-tile__wrap ins-tile__animated"},[e.showTile&&e.hasHeadline?o("TileTitle",{staticClass:"ins-tile__headline",attrs:{title:e.content.productListTitle,"is-head-tile":e.isHeadTile}}):e._e(),e.showTile&&e.hasProducts?o("ProductListComponent",{attrs:{content:e.productsContent,design:e.productsDesign,"cp-design":e.productsCpDesign}}):e._e(),e.showPlaceholder?o("GridPlaceholderComponent",{attrs:{title:e.i18n("EmptyState.FeaturedProducts.title"),text:e.i18n("EmptyState.FeaturedProducts.Cards.placeholder")}}):e._e()],1)],1)},n=[],l=o("9ab4"),r=o("2430"),a=o("a6f4"),u=o("5303"),d=o("02ac"),c=o("6280"),s=o("7ffe"),v=o("9ec1"),b=o("040b"),f=o("a9b8"),p=o("cc48"),g=o("4c2a"),m=o("52ba"),O=o("01bc");function h(e){switch(e){case"CENTER":return c;default:return}}function j(e){var t=Object(l["b"])(Object(l["b"])(Object(l["b"])(Object(l["b"])(Object(l["b"])(Object(l["b"])([],Object(u["c"])(e.general)),Object(u["h"])("headline",e.productListTitle)),Object(u["h"])("product-name",e.productName)),Object(u["h"])("product-price",e.productPrice)),Object(u["e"])("product-image",e.productImage)),Object(u["a"])("button",e.buyNowButton));return t}var y=Object(a["g"])({components:{GridPlaceholderComponent:m["a"],ProductListComponent:r["a"],FontLoader:p["a"],TileTitle:g["a"]},props:{profile:{required:!0,type:Object},content:{required:!0,type:Object},externalContent:{required:!0,type:Object},design:{required:!0,type:Object},viewportSettings:{required:!0,type:Object},isHeadTile:{required:!0,type:Boolean}},setup:function(e,t){var o=t.attrs,i=t.root,n=t.emit,r=Object(O["a"])(i.$store),c=Object(a["F"])(),p=Object(v["a"])(),g=p.windowScrollTop,m=p.subscribeOnWindowScrollChange,y=Object(b["a"])(c),_=y.tileOffsetTop,w=y.tileOffsetHeight,C=y.subscribeOnTileOffsetChange,T=Object(a["a"])((function(){return h(e.design.layout)})),L=Object(a["a"])((function(){var t,o,i,n,r,a,u,d,c,s,v,b,f,p,g,m,O,h,j,y,_,w,C,L,x,S,I,P,B,F,k,N,E=e.design,q=Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(t=T.value)||void 0===t?void 0:t.general),E.general),{background:Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(i=null===(o=T.value)||void 0===o?void 0:o.general)||void 0===i?void 0:i.background),null===(n=E.general)||void 0===n?void 0:n.background),{solid:Object(l["a"])(Object(l["a"])({},null===(u=null===(a=null===(r=T.value)||void 0===r?void 0:r.general)||void 0===a?void 0:a.background)||void 0===u?void 0:u.solid),null===(c=null===(d=E.general)||void 0===d?void 0:d.background)||void 0===c?void 0:c.solid),gradient:Object(l["a"])(Object(l["a"])({},null===(b=null===(v=null===(s=T.value)||void 0===s?void 0:s.general)||void 0===v?void 0:v.background)||void 0===b?void 0:b.gradient),null===(p=null===(f=E.general)||void 0===f?void 0:f.background)||void 0===p?void 0:p.gradient)})}),z=Object(l["a"])(Object(l["a"])({},null===(g=T.value)||void 0===g?void 0:g.productListTitle),E.productListTitle),D=Object(l["a"])(Object(l["a"])({},null===(m=T.value)||void 0===m?void 0:m.productName),E.productName),A=Object(l["a"])(Object(l["a"])({},null===(O=T.value)||void 0===O?void 0:O.productPrice),E.productPrice),R=Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(h=T.value)||void 0===h?void 0:h.productImage),E.productImage),{overlay:Object(l["a"])(Object(l["a"])(Object(l["a"])({},null===(y=null===(j=T.value)||void 0===j?void 0:j.productImage)||void 0===y?void 0:y.overlay),null===(_=E.productImage)||void 0===_?void 0:_.overlay),{solid:Object(l["a"])(Object(l["a"])({},null===(L=null===(C=null===(w=T.value)||void 0===w?void 0:w.productImage)||void 0===C?void 0:C.overlay)||void 0===L?void 0:L.solid),null===(S=null===(x=E.productImage)||void 0===x?void 0:x.overlay)||void 0===S?void 0:S.solid),gradient:Object(l["a"])(Object(l["a"])({},null===(B=null===(P=null===(I=T.value)||void 0===I?void 0:I.productImage)||void 0===P?void 0:P.overlay)||void 0===B?void 0:B.gradient),null===(k=null===(F=E.productImage)||void 0===F?void 0:F.overlay)||void 0===k?void 0:k.gradient)})}),U=Object(l["a"])(Object(l["a"])({},null===(N=T.value)||void 0===N?void 0:N.buyNowButton),E.buyNowButton);return{layout:E.layout,productListTitle:z,productName:D,productPrice:A,productImage:R,buyNowButton:U,general:q}})),x=Object(a["F"])(!1),S=Object(a["a"])((function(){return Object(s["a"])(x,e.viewportSettings,g.value,_.value,w.value)})),I=Object(a["a"])((function(){var e,t,o,i;return[null===(e=L.value.productListTitle)||void 0===e?void 0:e.font,null===(t=L.value.productName)||void 0===t?void 0:t.font,null===(o=L.value.productPrice)||void 0===o?void 0:o.font,null===(i=L.value.buyNowButton)||void 0===i?void 0:i.font]})),P=Object(a["a"])((function(){var e=j(L.value);return Object(u["i"])("#"+o.id,e)})),B=Object(a["a"])((function(){var t;return null!==(t=e.profile.storeClosed)&&void 0!==t&&t})),F=Object(a["a"])((function(){var e,t;return Object(d["a"])(null===(e=L.value)||void 0===e?void 0:e.general,null===(t=i.$store.state.siteSettings)||void 0===t?void 0:t.design)})),k=Object(a["a"])((function(){return e.externalContent.cpDesign})),N=Object(a["a"])((function(){var t,o=null===(t=L.value.productListTitle)||void 0===t?void 0:t.visible,i=Object(f["a"])(e.content.productListTitle);return o&&i})),E=Object(a["a"])((function(){return e.externalContent.storeData.products.length>0})),q=Object(a["a"])((function(){return{productListTitle:e.content.productListTitle,buyNowButton:e.content.buyNowButton,onSaleLabel:e.content.onSaleLabel,outOfStockLabel:e.content.outOfStockLabel,soldOutLabel:e.content.soldOutLabel,products:e.externalContent.storeData.products}})),z=Object(a["a"])((function(){return{productListTitle:L.value.productListTitle,productName:L.value.productName,productPrice:L.value.productPrice,productImage:L.value.productImage,buyNowButton:L.value.buyNowButton}})),D=Object(a["a"])((function(){return{imageSize:k.value.productListImageSize,imageLayout:k.value.productListImageLayout,imagePosition:k.value.productListImagePosition,productInfoLayout:k.value.productListCardLayout,showCardFrame:k.value.productListShowCardFrame,showAdditionalImage:k.value.productListShowAdditionalImage,titleBehavior:k.value.productListTitleBehaviour,priceBehavior:k.value.productListPriceBehaviour,buyNowBehavior:k.value.productListBuyButtonBehaviour}})),A=Object(a["a"])((function(){return!B.value&&E.value})),R=i.$store.getters.isPreviewMode,U=Object(a["a"])((function(){return R&&!A.value}));return Object(a["x"])((function(){n("tile-loaded"),m(),C()})),Object(a["z"])((function(){n("tile-unloaded")})),{i18n:r,tileRef:c,productsContent:q,productsDesign:z,productsCpDesign:D,fonts:I,styleSelector:P,hasHeadline:N,hasProducts:E,hasTransparentBackground:F,isTileShown:S,showTile:A,showPlaceholder:U}}}),_=y,w=_,C=(o("2dfb"),o("2877")),T=Object(C["a"])(w,i,n,!1,null,null,null);t["default"]=T.exports},a40a:function(e,t,o){"use strict";function i(e,t,o,i){var n={};if(o){var l=null===o||void 0===o?void 0:o.red,r=null===o||void 0===o?void 0:o.green,a=null===o||void 0===o?void 0:o.blue,u=null===o||void 0===o?void 0:o.alpha;n={backgroundColor:"rgba("+l+", "+r+", "+a+", "+u+")"}}return{imageUrl:e,thumbnailImageUrl:t,imageBackgroundColor:n,homogeneity:i}}function n(e){if(e){var t=e.imageUrl;return void 0!==t?"url("+t+")":void 0}}function l(e){if(e){var t=e.thumbnailImageUrl,o=e.imageUrl;return void 0!==t?"url("+t+")":void 0!==o?"url("+o+")":void 0}}function r(e,t){return void 0===t?"ins-component__bg--color-"+e%10:""}o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"d",(function(){return l})),o.d(t,"a",(function(){return r}))},b8de:function(e,t,o){},d2e0:function(e,t,o){"use strict";function i(e){return void 0===e?"ins-component--medium":"ins-component--"+e.toLowerCase()}function n(e){return void 0===e?"ins-component--layout-center":"ins-component--layout-"+e.toLowerCase()}function l(e){switch(e){case"PORTRAIT_0667":return"ins-component--portrait2";case"PORTRAIT_075":return"ins-component--portrait1";case"LANDSCAPE_1333":return"ins-component--landscape1";case"LANDSCAPE_15":return"ins-component--landscape2";case"SQUARE_1":default:return"ins-component--square"}}o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return l}))},d588:function(e,t,o){"use strict";function i(e,t){return!(void 0!==e&&!e)&&t()}function n(e,t){return void 0===t||"AUTO"===t?!e:"COVER"===t}o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return n}))},f028:function(e,t,o){"use strict";o("36e1")}}]);
//# sourceMappingURL=featured-products-tile.js.map