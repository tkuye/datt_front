(this.webpackJsonpdatt=this.webpackJsonpdatt||[]).push([[9],{193:function(t,e,i){},194:function(t,e,i){},312:function(t,e,i){"use strict";i.r(e);var l=i(7),o=i(1),c=i(14),n=i(11),a=i.n(n),d=i(162),s=i(16),b=i(0),u=function(t){var e=t.title,i=t.date,n=t.image,u=t.id,j=t.url,r=t.name,g=t.returnBlog,O=Object(o.useState)(""),v=Object(l.a)(O,2),h=v[0],m=v[1],x=Object(o.useState)(""),f=Object(l.a)(x,2),p=f[0],_=f[1];Object(o.useEffect)((function(){a.a.get(j).then((function(t){try{m(Object(d.htmlToText)(t.data.slice(0,80),{tags:{h1:{options:{uppercase:!1}}}})+"...")}catch(e){m("")}_(t.data)}))}));Object(o.useContext)(c.c);return Object(b.jsx)(s.c,{to:"blogs/blog/".concat(u),style:{textDecoration:"none",color:"black"},onClick:function(){g(p,n,e,i,r)},children:Object(b.jsxs)("div",{className:"blog",children:[Object(b.jsx)("h2",{className:"blog-title",children:e}),Object(b.jsx)("img",{src:n,alt:"used for the blog in question"}),Object(b.jsxs)("div",{className:"date-name",children:[Object(b.jsx)("p",{children:i}),Object(b.jsxs)("p",{children:["By ",r]})]}),Object(b.jsx)("div",{className:"preview",children:h})]})})},j=(i(193),i(2)),r=(i(194),function(t){var e=t.data,i=Object(o.useState)(e),n=Object(l.a)(i,2),d=n[0],s=n[1],u=Object(o.useState)(null===e||void 0===e?void 0:e.blog),j=Object(l.a)(u,2),r=j[0],g=j[1],O=Object(o.useContext)(c.a);return Object(o.useEffect)((function(){var t=Number(document.location.href.split("/").slice(-1)[0]);if(document.body.scrollTop=0,"LOADED"===(null===O||void 0===O?void 0:O.status)){var e,i=null===(e=O.blogs)||void 0===e?void 0:e.filter((function(e){return e.blog_id===t}))[0];i||O.set404(!0),s({image:null===i||void 0===i?void 0:i.image,title:null===i||void 0===i?void 0:i.blog_title,date:new Date(null===i||void 0===i?void 0:i.blog_date).toDateString(),blog_name:null===i||void 0===i?void 0:i.name}),a.a.get(null===i||void 0===i?void 0:i.url).then((function(t){g(t.data)}))}return function(){}}),[O]),Object(b.jsxs)("div",{className:"blog-post",children:[Object(b.jsx)("h2",{id:"blog-title",children:null===d||void 0===d?void 0:d.title}),Object(b.jsx)("img",{src:null===d||void 0===d?void 0:d.image,id:"blog-image",alt:"for the blog"}),Object(b.jsx)("h3",{id:"blog-date",children:null===d||void 0===d?void 0:d.date}),Object(b.jsxs)("h4",{id:"blog-name",children:["By ",null===d||void 0===d?void 0:d.blog_name]}),Object(b.jsx)("div",{id:"show-blog",dangerouslySetInnerHTML:{__html:r}})]})}),g=i(20);e.default=function(){var t=Object(o.useState)([]),e=Object(l.a)(t,2),i=e[0],n=e[1],a=Object(o.useState)(""),d=Object(l.a)(a,2),s=(d[0],d[1],Object(o.useState)("")),O=Object(l.a)(s,2),v=(O[0],O[1],Object(o.useState)(void 0)),h=Object(l.a)(v,2),m=h[0],x=h[1],f=Object(o.useContext)(c.a),p=function(t,e,i,l,o){x({blog:t,image:e,title:i,date:l,blog_name:o})};return Object(o.useEffect)((function(){var t,e;"LOADED"===(null===f||void 0===f?void 0:f.status)&&(null===(t=f.blogs)||void 0===t||t.sort((function(t,e){return t.blog_date<e.blog_date?1:-1})),n(null===(e=f.blogs)||void 0===e?void 0:e.map((function(t){return Object(b.jsx)(u,{title:t.blog_title,url:t.url,image:t.image,id:t.blog_id,date:new Date(t.blog_date).toDateString(),name:t.name,returnBlog:p},t.blog_id)}))))}),[f]),Object(b.jsx)("div",{children:Object(b.jsxs)(j.c,{children:[Object(b.jsxs)(j.a,{exact:!0,path:"/blogs",children:[Object(b.jsx)("h1",{id:"head-blog",children:"Read Our Blogs"}),Object(b.jsx)("div",{id:"blog-container",children:i})]}),Object(b.jsx)(j.a,{exact:!0,path:"/blogs/blog/:id",children:Object(b.jsx)(r,{data:m})}),Object(b.jsx)(j.a,{component:g.a})]})})}}}]);
//# sourceMappingURL=9.3c0fe0de.chunk.js.map