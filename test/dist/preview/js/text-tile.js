(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["text-tile"],{"02ac":function(l,o,t){"use strict";t.d(o,"a",(function(){return a}));var e=t("69f4");function i(l,o){var t,e,i,n,a,r,d,c,u;if(void 0===(null===o||void 0===o?void 0:o.hsl))return!0;var s=(null!==(e=null===(t=null===l||void 0===l?void 0:l.hsl)||void 0===t?void 0:t.h)&&void 0!==e?e:0).toFixed(3),b=(null!==(n=null===(i=null===l||void 0===l?void 0:l.hsl)||void 0===i?void 0:i.s)&&void 0!==n?n:0).toFixed(3),v=(null!==(r=null===(a=null===l||void 0===l?void 0:l.hsl)||void 0===a?void 0:a.l)&&void 0!==r?r:1).toFixed(3),f=null===(d=null===o||void 0===o?void 0:o.hsl)||void 0===d?void 0:d.h.toFixed(3),g=null===(c=null===o||void 0===o?void 0:o.hsl)||void 0===c?void 0:c.s.toFixed(3),O=null===(u=null===o||void 0===o?void 0:o.hsl)||void 0===u?void 0:u.l.toFixed(3);return s===f&&b===g&&v===O}function n(l){var o;return 0===(null===(o=null===l||void 0===l?void 0:l.hsl)||void 0===o?void 0:o.a)}function a(l,o){var t,a,r,d,c,u,s,b,v,f=null===l||void 0===l?void 0:l.background;switch(null===f||void 0===f?void 0:f.type){case e["b"].GRADIENT:return(n(null===(t=null===f||void 0===f?void 0:f.gradient)||void 0===t?void 0:t.fromColor)||i(null===(a=null===o||void 0===o?void 0:o.color)||void 0===a?void 0:a.background,null===(r=null===f||void 0===f?void 0:f.gradient)||void 0===r?void 0:r.fromColor))&&(n(null===(d=null===f||void 0===f?void 0:f.gradient)||void 0===d?void 0:d.toColor)||i(null===(c=null===o||void 0===o?void 0:o.color)||void 0===c?void 0:c.background,null===(u=null===f||void 0===f?void 0:f.gradient)||void 0===u?void 0:u.toColor));case e["b"].SOLID:return n(null===(s=null===f||void 0===f?void 0:f.solid)||void 0===s?void 0:s.color)||i(null===(b=null===o||void 0===o?void 0:o.color)||void 0===b?void 0:b.background,null===(v=null===f||void 0===f?void 0:f.solid)||void 0===v?void 0:v.color);default:return!1}}},"040b":function(l,o,t){"use strict";t.d(o,"a",(function(){return n}));var e=t("a6f4"),i=t("dca0");function n(l,o){var t=Object(e["F"])(0),n=Object(e["F"])(0),a=Object(e["F"])(0);function r(){void 0!==(null===l||void 0===l?void 0:l.value)&&null!==l.value&&(t.value=l.value.offsetTop,n.value=l.value.offsetHeight),void 0!==(null===o||void 0===o?void 0:o.value)&&null!==o.value&&(a.value=o.value.offsetWidth)}function d(){var l=Object(i["a"])(r,120);window.addEventListener("resize",l),r()}return{tileOffsetTop:t,tileOffsetHeight:n,wrapOffsetWidth:a,subscribeOnTileOffsetChange:d}}},"0c34":function(l){l.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":18,"bold":false,"italic":true,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},"357c":function(l){l.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":18,"bold":false,"italic":true,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},4028:function(l){l.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":true,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},"4bf9":function(l,o,t){"use strict";t("5310")},"4c2a":function(l,o,t){"use strict";var e=function(){var l=this,o=l.$createElement,t=l._self._c||o;return l.isHeadTile?t("h1",[l._v(" "+l._s(l.title)+" ")]):t("h2",[l._v(" "+l._s(l.title)+" ")])},i=[],n=t("a6f4"),a=Object(n["g"])({props:{title:{required:!0,type:String},isHeadTile:{required:!0,type:Boolean}}}),r=a,d=r,c=t("2877"),u=Object(c["a"])(d,e,i,!1,null,null,null);o["a"]=u.exports},5310:function(l,o,t){},"9ec1":function(l,o,t){"use strict";t.d(o,"a",(function(){return i}));var e=t("a6f4");function i(){var l=Object(e["F"])(0);function o(){"undefined"!==typeof document&&(l.value=document.documentElement.scrollTop||document.body.scrollTop)}function t(){window.addEventListener("scroll",o),o()}return{windowScrollTop:l,subscribeOnWindowScrollChange:t}}},a75c:function(l){l.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":false,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},a964:function(l,o,t){"use strict";t.r(o);var e=function(){var l=this,o=l.$createElement,t=l._self._c||o;return t("main",{ref:"tileRef",class:["ins-tile","ins-tile--text",l.layoutClass,{"ins-tile--transparent":l.hasTransparentBackground},{"ins-tile--shown":!0}],attrs:{role:"main"}},[t("FontLoader",{attrs:{fonts:l.fonts}}),t("style",{tag:"component"},[l._v(" "+l._s(l.styleSelector)+" ")]),t("div",{staticClass:"ins-tile__wrap ins-tile__animated"},[l.hasTitle?t("TileTitle",{staticClass:"ins-tile__title",attrs:{title:l.content.title,"is-head-tile":l.isHeadTile}}):l._e(),l.hasSubtitle&&l.layoutHasSubtitle?t("div",{staticClass:"ins-tile__subtitle ins-tile__format",domProps:{textContent:l._s(l.content.subtitle)}}):l._e(),l.hasDescription?t("div",{staticClass:"ins-tile__description ins-tile__format",domProps:{textContent:l._s(l.content.description)}}):l._e()],1)],1)},i=[],n=t("9ab4"),a=t("a6f4"),r=t("9ec1"),d=t("040b"),c=t("a9b8"),u=t("5303"),s=t("02ac"),b=t("7ffe"),v=t("0c34"),f=t("b43e"),g=t("4028"),O=t("a75c"),p=t("357c"),y=t("db04"),j=t("cc48"),T=t("4c2a");function m(l){switch(l){case"TITLE_LEFT":return v;case"SUBTITLE_RIGHT":return f;case"ONE_COLUMN":return g;case"TWO_COLUMNS":return O;case"CENTER":return p;case"DESCRIPTION_RIGHT":return y;default:return}}function S(l){switch(l){case"TITLE_LEFT":return"title-left";case"SUBTITLE_RIGHT":return"subtitle-right";case"ONE_COLUMN":return"one-column";case"TWO_COLUMNS":return"two-columns";case"CENTER":return"center";case"DESCRIPTION_RIGHT":return"description-right";default:return"title-left"}}function h(l,o){var t=Object(n["b"])(Object(n["b"])(Object(n["b"])([],Object(u["c"])(l.general)),Object(u["h"])("title",l.title)),Object(u["h"])("description",l.description));return o&&(t=Object(n["b"])(Object(n["b"])([],t),Object(u["h"])("subtitle",l.subtitle))),t}function _(l){return"ONE_COLUMN"===l||"TITLE_LEFT"===l||"SUBTITLE_RIGHT"===l||"TWO_COLUMNS"===l||"CENTER"===l}var k=Object(a["g"])({components:{FontLoader:j["a"],TileTitle:T["a"]},props:{content:{required:!0,type:Object},design:{required:!0,type:Object},viewportSettings:{required:!0,type:Object},isHeadTile:{required:!0,type:Boolean}},setup:function(l,o){var t=o.attrs,e=o.root,i=o.emit,v=Object(a["F"])(),f=Object(r["a"])(),g=f.windowScrollTop,O=f.subscribeOnWindowScrollChange,p=Object(d["a"])(v),y=p.tileOffsetTop,j=p.tileOffsetHeight,T=p.subscribeOnTileOffsetChange,k=Object(a["a"])((function(){return"ins-tile--"+S(l.design.layout)})),C=Object(a["a"])((function(){return m(l.design.layout)})),z=Object(a["a"])((function(){var o,t,e,i,a,r,d,c,u,s,b,v,f,g,O,p,y,j=l.design,T=Object(n["a"])(Object(n["a"])(Object(n["a"])({},null===(o=C.value)||void 0===o?void 0:o.general),j.general),{background:Object(n["a"])(Object(n["a"])(Object(n["a"])({},null===(e=null===(t=C.value)||void 0===t?void 0:t.general)||void 0===e?void 0:e.background),null===(i=j.general)||void 0===i?void 0:i.background),{solid:Object(n["a"])(Object(n["a"])({},null===(d=null===(r=null===(a=C.value)||void 0===a?void 0:a.general)||void 0===r?void 0:r.background)||void 0===d?void 0:d.solid),null===(u=null===(c=j.general)||void 0===c?void 0:c.background)||void 0===u?void 0:u.solid),gradient:Object(n["a"])(Object(n["a"])({},null===(v=null===(b=null===(s=C.value)||void 0===s?void 0:s.general)||void 0===b?void 0:b.background)||void 0===v?void 0:v.gradient),null===(g=null===(f=j.general)||void 0===f?void 0:f.background)||void 0===g?void 0:g.gradient)})}),m=Object(n["a"])(Object(n["a"])({},null===(O=C.value)||void 0===O?void 0:O.title),j.title),S=Object(n["a"])(Object(n["a"])({},null===(p=C.value)||void 0===p?void 0:p.subtitle),j.subtitle),h=Object(n["a"])(Object(n["a"])({},null===(y=C.value)||void 0===y?void 0:y.description),j.description);return{layout:j.layout,general:T,title:m,subtitle:S,description:h}})),F=Object(a["F"])(!1),x=Object(a["a"])((function(){return Object(b["a"])(F,l.viewportSettings,g.value,y.value,j.value)})),w=Object(a["a"])((function(){var l,o,t;return[null===(l=z.value.title)||void 0===l?void 0:l.font,null===(o=z.value.subtitle)||void 0===o?void 0:o.font,null===(t=z.value.description)||void 0===t?void 0:t.font]})),E=Object(a["a"])((function(){return _(z.value.layout)})),N=Object(a["a"])((function(){var l=h(z.value,E.value);return Object(u["i"])("#"+t.id,l)})),L=Object(a["a"])((function(){var o,t=null===(o=z.value.title)||void 0===o?void 0:o.visible,e=Object(c["a"])(l.content.title);return t&&e})),I=Object(a["a"])((function(){var o,t=null===(o=z.value.subtitle)||void 0===o?void 0:o.visible,e=Object(c["a"])(l.content.subtitle);return t&&e})),H=Object(a["a"])((function(){var o,t=null===(o=z.value.description)||void 0===o?void 0:o.visible,e=Object(c["a"])(l.content.description);return t&&e})),R=Object(a["a"])((function(){var l,o;return Object(s["a"])(null===(l=z.value)||void 0===l?void 0:l.general,null===(o=e.$store.state.siteSettings)||void 0===o?void 0:o.design)}));return Object(a["x"])((function(){i("tile-loaded"),O(),T()})),Object(a["z"])((function(){i("tile-unloaded")})),{tileRef:v,layoutClass:k,fonts:w,styleSelector:N,hasTitle:L,hasSubtitle:I,layoutHasSubtitle:E,hasDescription:H,hasTransparentBackground:R,isTileShown:x}}}),C=k,z=C,F=(t("4bf9"),t("2877")),x=Object(F["a"])(z,e,i,!1,null,null,null);o["default"]=x.exports},b43e:function(l){l.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":false,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},db04:function(l){l.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":false,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":22,"bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')}}]);