(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["text-tile"],{"02ac":function(t,i,l){"use strict";l.d(i,"a",(function(){return a}));var e=l("69f4");function o(t,i){var l,e,o,n,a,r,s,c,d;if(void 0===(null===i||void 0===i?void 0:i.hsl))return!0;var u=(null!==(e=null===(l=null===t||void 0===t?void 0:t.hsl)||void 0===l?void 0:l.h)&&void 0!==e?e:0).toFixed(3),b=(null!==(n=null===(o=null===t||void 0===t?void 0:t.hsl)||void 0===o?void 0:o.s)&&void 0!==n?n:0).toFixed(3),g=(null!==(r=null===(a=null===t||void 0===t?void 0:t.hsl)||void 0===a?void 0:a.l)&&void 0!==r?r:1).toFixed(3),v=null===(s=null===i||void 0===i?void 0:i.hsl)||void 0===s?void 0:s.h.toFixed(3),f=null===(c=null===i||void 0===i?void 0:i.hsl)||void 0===c?void 0:c.s.toFixed(3),p=null===(d=null===i||void 0===i?void 0:i.hsl)||void 0===d?void 0:d.l.toFixed(3);return u===v&&b===f&&g===p}function n(t){var i;return 0===(null===(i=null===t||void 0===t?void 0:t.hsl)||void 0===i?void 0:i.a)}function a(t,i){var l,a,r,s,c,d,u,b,g,v=null===t||void 0===t?void 0:t.background;switch(null===v||void 0===v?void 0:v.type){case e["b"].GRADIENT:return(n(null===(l=null===v||void 0===v?void 0:v.gradient)||void 0===l?void 0:l.fromColor)||o(null===(a=null===i||void 0===i?void 0:i.color)||void 0===a?void 0:a.background,null===(r=null===v||void 0===v?void 0:v.gradient)||void 0===r?void 0:r.fromColor))&&(n(null===(s=null===v||void 0===v?void 0:v.gradient)||void 0===s?void 0:s.toColor)||o(null===(c=null===i||void 0===i?void 0:i.color)||void 0===c?void 0:c.background,null===(d=null===v||void 0===v?void 0:v.gradient)||void 0===d?void 0:d.toColor));case e["b"].SOLID:return n(null===(u=null===v||void 0===v?void 0:v.solid)||void 0===u?void 0:u.color)||o(null===(b=null===i||void 0===i?void 0:i.color)||void 0===b?void 0:b.background,null===(g=null===v||void 0===v?void 0:v.solid)||void 0===g?void 0:g.color);default:return!1}}},"040b":function(t,i,l){"use strict";l.d(i,"a",(function(){return n}));var e=l("a6f4"),o=l("dca0");function n(t,i){var l=Object(e["F"])(0),n=Object(e["F"])(0),a=Object(e["F"])(0);function r(){void 0!==(null===t||void 0===t?void 0:t.value)&&null!==t.value&&(l.value=t.value.offsetTop,n.value=t.value.offsetHeight),void 0!==(null===i||void 0===i?void 0:i.value)&&null!==i.value&&(a.value=i.value.offsetWidth)}function s(){var t=Object(o["a"])(r,120);window.addEventListener("resize",t),r()}return{tileOffsetTop:l,tileOffsetHeight:n,wrapOffsetWidth:a,subscribeOnTileOffsetChange:s}}},"0c34":function(t){t.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":18,"bold":false,"italic":true,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},"357c":function(t){t.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":18,"bold":false,"italic":true,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},4028:function(t){t.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":true,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},"4bf9":function(t,i,l){"use strict";l("af0e")},"4c2a":function(t,i,l){"use strict";var e=function(){var t=this,i=t.$createElement,l=t._self._c||i;return t.isHeadTile?l("h1",[t._v(" "+t._s(t.title)+" ")]):l("h2",[t._v(" "+t._s(t.title)+" ")])},o=[],n=l("a6f4"),a=Object(n["g"])({props:{title:{required:!0,type:String},isHeadTile:{required:!0,type:Boolean}}}),r=a,s=r,c=l("2877"),d=Object(c["a"])(s,e,o,!1,null,null,null);i["a"]=d.exports},"809d":function(t,i,l){var e=l("24fb");i=e(!1),i.push([t.i,'.ins-tile--text{--title-font-family:var(--global-title-font-family-stack);--title-font-size:var(--global-title-font-size);--title-font-style:normal;--title-font-weight:700;--subtitle-font-family:var(--global-body-font-family-stack);--subtitle-font-size:var(--global-subtitle-font-size);--subtitle-font-style:normal;--subtitle-font-weight:400;--description-font-family:var(--global-body-font-family-stack);--description-font-size:var(--global-body-font-size);--description-font-style:normal;--description-font-weight:400;--title-text-color-h:var(--global-title-color-h);--title-text-color-s:var(--global-title-color-s);--title-text-color-l:var(--global-title-color-l);--title-text-color-a:var(--global-title-color-a);--subtitle-text-color-h:var(--global-body-color-h);--subtitle-text-color-s:var(--global-body-color-s);--subtitle-text-color-l:var(--global-body-color-l);--subtitle-text-color-a:var(--global-body-color-a);--description-text-color-h:var(--global-body-color-h);--description-text-color-s:var(--global-body-color-s);--description-text-color-l:var(--global-body-color-l);--description-text-color-a:var(--global-body-color-a);background-color:hsla(var(--background-solid-color-h),var(--background-solid-color-s),var(--background-solid-color-l),var(--background-solid-color-a));background-image:-webkit-gradient(linear,left top,left bottom,from(var(--background-gradient-angle)),color-stop(0,hsla(var(--background-gradient-color-from-h),var(--background-gradient-color-from-s),var(--background-gradient-color-from-l),var(--background-gradient-color-from-a))),to(hsla(var(--background-gradient-color-to-h),var(--background-gradient-color-to-s),var(--background-gradient-color-to-l),var(--background-gradient-color-to-a))));background-image:linear-gradient(var(--background-gradient-angle),hsla(var(--background-gradient-color-from-h),var(--background-gradient-color-from-s),var(--background-gradient-color-from-l),var(--background-gradient-color-from-a)),hsla(var(--background-gradient-color-to-h),var(--background-gradient-color-to-s),var(--background-gradient-color-to-l),var(--background-gradient-color-to-a)))}.ins-tile--text .ins-tile__title{color:hsla(var(--title-text-color-h),var(--title-text-color-s),var(--title-text-color-l),var(--title-text-color-a));font-family:var(--title-font-family);font-style:var(--title-font-style);font-weight:var(--title-font-weight);line-height:min(calc(2em - 4px),calc(.8em + 23px));font-size:calc(var(--title-font-size)*0.5 + 8px)}@media screen and (min-width:500px){.ins-tiles--500 .ins-tile--text .ins-tile__title{font-size:calc(var(--title-font-size)*0.7 + 4.8px)}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text .ins-tile__title{font-size:calc(var(--title-font-size)*1)}}.ins-tile--text .ins-tile__subtitle{color:hsla(var(--subtitle-text-color-h),var(--subtitle-text-color-s),var(--subtitle-text-color-l),var(--subtitle-text-color-a));font-family:var(--subtitle-font-family);font-style:var(--subtitle-font-style);font-weight:var(--subtitle-font-weight);font-size:calc(var(--subtitle-font-size)*0.5 + 8px)}@media screen and (min-width:500px){.ins-tiles--500 .ins-tile--text .ins-tile__subtitle{font-size:calc(var(--subtitle-font-size)*0.7 + 4.8px)}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text .ins-tile__subtitle{font-size:calc(var(--subtitle-font-size)*1)}}.ins-tile--text .ins-tile__description{color:hsla(var(--description-text-color-h),var(--description-text-color-s),var(--description-text-color-l),var(--description-text-color-a));font-family:var(--description-font-family);font-style:var(--description-font-style);font-weight:var(--description-font-weight);font-size:calc(var(--description-font-size)*0.5 + 8px)}@media screen and (min-width:500px){.ins-tiles--500 .ins-tile--text .ins-tile__description{font-size:calc(var(--description-font-size)*0.7 + 4.8px)}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text .ins-tile__description{font-size:calc(var(--description-font-size)*1)}}.ins-tile--text{padding-right:calc(var(--global-tile-padding)*1px);padding-left:calc(var(--global-tile-padding)*1px);padding-right:calc(env(safe-area-inset-right) + var(--global-tile-padding)*1px);padding-left:calc(env(safe-area-inset-left) + var(--global-tile-padding)*1px)}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--title-left .ins-tile__wrap{grid-gap:0 8.0756%;grid-template-columns:30.06873% 61.85567%;grid-template-rows:auto 1fr}}.ins-tile--text.ins-tile--title-left .ins-tile__title:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}@media screen and (max-width:899px){.ins-tile--text.ins-tile--title-left .ins-tile__subtitle:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}}.ins-tiles:not(.ins-tiles--900) .ins-tile--text.ins-tile--title-left .ins-tile__subtitle:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--title-left .ins-tile__description:first-child{grid-column:1/span 2}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--title-left .ins-tile__description{grid-column:2;grid-row:1/span 2}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--subtitle-right .ins-tile__wrap{grid-gap:0 8.0756%;grid-template-columns:61.85567% 30.06873%;grid-template-rows:auto 1fr}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--subtitle-right .ins-tile__title{grid-column:1/span 2}}.ins-tile--text.ins-tile--subtitle-right .ins-tile__title:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--subtitle-right .ins-tile__title:nth-last-child(2){width:61.85567%;margin-right:auto;margin-left:auto}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--subtitle-right .ins-tile__subtitle{grid-column:2;grid-row:2}}@media screen and (max-width:899px){.ins-tile--text.ins-tile--subtitle-right .ins-tile__subtitle:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}}.ins-tiles:not(.ins-tiles--900) .ins-tile--text.ins-tile--subtitle-right .ins-tile__subtitle:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--subtitle-right .ins-tile__subtitle:last-child{grid-column:1/span 2;width:61.85567%;margin-right:auto;margin-left:auto}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--subtitle-right .ins-tile__subtitle+.ins-tile__description{grid-column:1;grid-row:2;width:100%}}.ins-tile--text.ins-tile--subtitle-right .ins-tile__subtitle:after{content:"";display:block;width:80px;height:0;padding-top:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px));border-bottom:1px solid currentColor}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--subtitle-right .ins-tile__description{grid-column:1/span 2;grid-row:2;width:61.85567%;margin-right:auto;margin-left:auto}}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--one-column .ins-tile__description,.ins-tiles--900 .ins-tile--text.ins-tile--one-column .ins-tile__subtitle,.ins-tiles--900 .ins-tile--text.ins-tile--one-column .ins-tile__title{width:61.85567%;margin:0 auto}}.ins-tile--text.ins-tile--one-column .ins-tile__description:not(:first-child),.ins-tile--text.ins-tile--one-column .ins-tile__subtitle:not(:first-child){margin-top:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}.ins-tile--text.ins-tile--two-columns .ins-tile__subtitle:not(:first-child){margin-top:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--two-columns .ins-tile__description{-webkit-column-gap:3.43643%;-moz-column-gap:3.43643%;column-gap:3.43643%;-webkit-column-count:2;-moz-column-count:2;column-count:2}}.ins-tile--text.ins-tile--two-columns .ins-tile__description:not(:first-child){margin-top:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}.ins-tile--text.ins-tile--center .ins-tile__description,.ins-tile--text.ins-tile--center .ins-tile__subtitle,.ins-tile--text.ins-tile--center .ins-tile__title{text-align:center}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--center .ins-tile__description,.ins-tiles--900 .ins-tile--text.ins-tile--center .ins-tile__subtitle,.ins-tiles--900 .ins-tile--text.ins-tile--center .ins-tile__title{width:61.85567%;margin:0 auto}}.ins-tile--text.ins-tile--center .ins-tile__title{grid-row:1}.ins-tile--text.ins-tile--center .ins-tile__title:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}.ins-tile--text.ins-tile--center .ins-tile__subtitle{grid-row:3}.ins-tile--text.ins-tile--center .ins-tile__subtitle+.ins-tile__description{margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}.ins-tile--text.ins-tile--center .ins-tile__description{grid-row:2}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--description-right .ins-tile__title{width:74.57045%}}.ins-tile--text.ins-tile--description-right .ins-tile__title:not(:last-child){margin-bottom:min(calc(1vw + 10px),calc(var(--global-tile-max-width)*1px*0.01 + var(--global-tile-padding)*2px*0.01 + 10px))}@media screen and (min-width:900px){.ins-tiles--900 .ins-tile--text.ins-tile--description-right .ins-tile__description{margin-left:25.42955%}}.ins-tile--text .ins-tile__wrap{display:grid;grid-template-columns:1fr;width:100%;max-width:calc(var(--global-tile-max-width)*1px);margin:var(--computed-tile-margin) auto}.ins-tile--text .ins-tile__description,.ins-tile--text .ins-tile__subtitle,.ins-tile--text .ins-tile__title{grid-column:1;max-width:100%;word-wrap:break-word}',""]),t.exports=i},"9ec1":function(t,i,l){"use strict";l.d(i,"a",(function(){return o}));var e=l("a6f4");function o(){var t=Object(e["F"])(0);function i(){"undefined"!==typeof document&&(t.value=document.documentElement.scrollTop||document.body.scrollTop)}function l(){window.addEventListener("scroll",i),i()}return{windowScrollTop:t,subscribeOnWindowScrollChange:l}}},a75c:function(t){t.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":false,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},a964:function(t,i,l){"use strict";l.r(i);var e=function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("main",{ref:"tileRef",class:["ins-tile","ins-tile--text",t.layoutClass,{"ins-tile--transparent":t.hasTransparentBackground},{"ins-tile--shown":t.isTileShown}],attrs:{role:"main"}},[l("FontLoader",{attrs:{fonts:t.fonts}}),l("style",{tag:"component"},[t._v(" "+t._s(t.styleSelector)+" ")]),l("div",{staticClass:"ins-tile__wrap ins-tile__animated"},[t.hasTitle?l("TileTitle",{staticClass:"ins-tile__title",attrs:{title:t.content.title,"is-head-tile":t.isHeadTile}}):t._e(),t.hasSubtitle&&t.layoutHasSubtitle?l("div",{staticClass:"ins-tile__subtitle ins-tile__format",domProps:{textContent:t._s(t.content.subtitle)}}):t._e(),t.hasDescription?l("div",{staticClass:"ins-tile__description ins-tile__format",domProps:{textContent:t._s(t.content.description)}}):t._e()],1)],1)},o=[],n=l("9ab4"),a=l("a6f4"),r=l("9ec1"),s=l("040b"),c=l("a9b8"),d=l("5303"),u=l("02ac"),b=l("7ffe"),g=l("0c34"),v=l("b43e"),f=l("4028"),p=l("a75c"),x=l("357c"),m=l("db04"),h=l("cc48"),_=l("4c2a");function w(t){switch(t){case"TITLE_LEFT":return g;case"SUBTITLE_RIGHT":return v;case"ONE_COLUMN":return f;case"TWO_COLUMNS":return p;case"CENTER":return x;case"DESCRIPTION_RIGHT":return m;default:return}}function y(t){switch(t){case"TITLE_LEFT":return"title-left";case"SUBTITLE_RIGHT":return"subtitle-right";case"ONE_COLUMN":return"one-column";case"TWO_COLUMNS":return"two-columns";case"CENTER":return"center";case"DESCRIPTION_RIGHT":return"description-right";default:return"title-left"}}function O(t,i){var l=Object(n["b"])(Object(n["b"])(Object(n["b"])([],Object(d["c"])(t.general)),Object(d["h"])("title",t.title)),Object(d["h"])("description",t.description));return i&&(l=Object(n["b"])(Object(n["b"])([],l),Object(d["h"])("subtitle",t.subtitle))),l}function k(t){return"ONE_COLUMN"===t||"TITLE_LEFT"===t||"SUBTITLE_RIGHT"===t||"TWO_COLUMNS"===t||"CENTER"===t}var z=Object(a["g"])({components:{FontLoader:h["a"],TileTitle:_["a"]},props:{content:{required:!0,type:Object},design:{required:!0,type:Object},viewportSettings:{required:!0,type:Object},isHeadTile:{required:!0,type:Boolean}},setup:function(t,i){var l=i.attrs,e=i.root,o=i.emit,g=Object(a["F"])(),v=Object(r["a"])(),f=v.windowScrollTop,p=v.subscribeOnWindowScrollChange,x=Object(s["a"])(g),m=x.tileOffsetTop,h=x.tileOffsetHeight,_=x.subscribeOnTileOffsetChange,z=Object(a["a"])((function(){return"ins-tile--"+y(t.design.layout)})),j=Object(a["a"])((function(){return w(t.design.layout)})),T=Object(a["a"])((function(){var i,l,e,o,a,r,s,c,d,u,b,g,v,f,p,x,m,h=t.design,_=Object(n["a"])(Object(n["a"])(Object(n["a"])({},null===(i=j.value)||void 0===i?void 0:i.general),h.general),{background:Object(n["a"])(Object(n["a"])(Object(n["a"])({},null===(e=null===(l=j.value)||void 0===l?void 0:l.general)||void 0===e?void 0:e.background),null===(o=h.general)||void 0===o?void 0:o.background),{solid:Object(n["a"])(Object(n["a"])({},null===(s=null===(r=null===(a=j.value)||void 0===a?void 0:a.general)||void 0===r?void 0:r.background)||void 0===s?void 0:s.solid),null===(d=null===(c=h.general)||void 0===c?void 0:c.background)||void 0===d?void 0:d.solid),gradient:Object(n["a"])(Object(n["a"])({},null===(g=null===(b=null===(u=j.value)||void 0===u?void 0:u.general)||void 0===b?void 0:b.background)||void 0===g?void 0:g.gradient),null===(f=null===(v=h.general)||void 0===v?void 0:v.background)||void 0===f?void 0:f.gradient)})}),w=Object(n["a"])(Object(n["a"])({},null===(p=j.value)||void 0===p?void 0:p.title),h.title),y=Object(n["a"])(Object(n["a"])({},null===(x=j.value)||void 0===x?void 0:x.subtitle),h.subtitle),O=Object(n["a"])(Object(n["a"])({},null===(m=j.value)||void 0===m?void 0:m.description),h.description);return{layout:h.layout,general:_,title:w,subtitle:y,description:O}})),S=Object(a["F"])(!1),C=Object(a["a"])((function(){return Object(b["a"])(S,t.viewportSettings,f.value,m.value,h.value)})),F=Object(a["a"])((function(){var t,i,l;return[null===(t=T.value.title)||void 0===t?void 0:t.font,null===(i=T.value.subtitle)||void 0===i?void 0:i.font,null===(l=T.value.description)||void 0===l?void 0:l.font]})),E=Object(a["a"])((function(){return k(T.value.layout)})),N=Object(a["a"])((function(){var t=O(T.value,E.value);return Object(d["i"])("#"+l.id,t)})),L=Object(a["a"])((function(){var i,l=null===(i=T.value.title)||void 0===i?void 0:i.visible,e=Object(c["a"])(t.content.title);return l&&e})),I=Object(a["a"])((function(){var i,l=null===(i=T.value.subtitle)||void 0===i?void 0:i.visible,e=Object(c["a"])(t.content.subtitle);return l&&e})),H=Object(a["a"])((function(){var i,l=null===(i=T.value.description)||void 0===i?void 0:i.visible,e=Object(c["a"])(t.content.description);return l&&e})),R=Object(a["a"])((function(){var t,i;return Object(u["a"])(null===(t=T.value)||void 0===t?void 0:t.general,null===(i=e.$store.state.siteSettings)||void 0===i?void 0:i.design)}));return Object(a["x"])((function(){o("tile-loaded"),p(),_()})),Object(a["z"])((function(){o("tile-unloaded")})),{tileRef:g,layoutClass:z,fonts:F,styleSelector:N,hasTitle:L,hasSubtitle:I,layoutHasSubtitle:E,hasDescription:H,hasTransparentBackground:R,isTileShown:C}}}),j=z,T=j,S=(l("4bf9"),l("2877")),C=Object(S["a"])(T,e,o,!1,null,null,null);i["default"]=C.exports},af0e:function(t,i,l){var e=l("809d");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=l("499e").default;o("62c32fe1",e,!0,{sourceMap:!1,shadowMode:!1})},b43e:function(t){t.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":false,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":"global.textSize.body","bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')},db04:function(t){t.exports=JSON.parse('{"title":{"font":"global.fontFamily.title","size":"global.textSize.title","bold":true,"italic":false,"color":"global.color.title","visible":true},"subtitle":{"font":"global.fontFamily.body","size":"global.textSize.subtitle","bold":false,"italic":false,"color":"global.color.body","visible":true},"description":{"font":"global.fontFamily.body","size":22,"bold":false,"italic":false,"color":"global.color.body","visible":true},"general":{"background":{"type":"solid","solid":{"color":"global.color.background"},"gradient":{"fromColor":"global.color.background","toColor":"global.color.background"}}}}')}}]);
//# sourceMappingURL=text-tile.js.map