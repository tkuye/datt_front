(this.webpackJsonpdatt=this.webpackJsonpdatt||[]).push([[20],{310:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t);var o=n(8),s=n(1),a=n(11),l=n.n(a),b=n(20),d=n(0);t.default=function(e){var t=e.item,n=e.getData,c=Object(s.useState)(!1),i=Object(o.a)(c,2),a=i[0],j=i[1],O=Object(s.useState)("none"),u=Object(o.a)(O,2),h=u[0],p=u[1],v=Object(s.useState)(Object(d.jsx)("div",{})),f=Object(o.a)(v,2),g=f[0],m=f[1],x=Object(s.useState)(Object(d.jsx)("div",{})),w=Object(o.a)(x,2),y=(w[0],w[1],Object(s.useContext)(b.a)),D=Object(s.useContext)(b.e);var k;return Object(d.jsxs)("div",{className:"admin-getter",children:[Object(d.jsx)("h1",{children:(k=t,k.charAt(0).toUpperCase()+k.slice(1))}),Object(d.jsxs)("p",{onClick:function(){if(console.log(t),!a){switch(p("block"),t){case"events":var e;if("LOADED"===(null===D||void 0===D?void 0:D.status))console.log(D.events),m(null===(e=D.events)||void 0===e?void 0:e.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"clickable",onClick:function(){l.a.get(e.url).then((function(c){n(r(r({},e),{},{html:c.data}),t)}))},children:decodeURIComponent(e.event_name)}),Object(d.jsx)("h3",{children:new Date(e.event_date).toDateString()}),Object(d.jsx)("img",{src:e.image,alt:"preview",id:"detail-photo"})]})})));break;case"blogs":var c;if("LOADED"===(null===y||void 0===y?void 0:y.status))console.log(y.blogs),m(null===(c=y.blogs)||void 0===c?void 0:c.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"clickable",onClick:function(){l.a.get(e.url).then((function(c){n(r(r({},e),{},{html:c.data}),t)}))},children:decodeURIComponent(e.blog_title)}),Object(d.jsx)("h3",{children:new Date(e.blog_date).toDateString()}),Object(d.jsx)("img",{src:e.image,alt:"preview",id:"detail-photo"})]})})))}j(!0)}},id:"show",children:["Click here to show all the ",t,"."]}),Object(d.jsx)("div",{id:"line-display",style:{display:h},children:Object(d.jsx)("div",{id:"inserted-content"})}),Object(d.jsx)("div",{id:"inserted-content",style:{marginBottom:"20px"},children:g})]})}}}]);
//# sourceMappingURL=20.bb19b963.chunk.js.map