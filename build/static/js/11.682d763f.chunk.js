(this.webpackJsonpdatt=this.webpackJsonpdatt||[]).push([[11],{160:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n(1),r=(n(160),n(23)),s=n(9),o=n(81),a=n(0),u=function(e){var t=e.id,n=Object(i.useState)(!1),r=Object(c.a)(n,2),u=r[0],d=r[1],l=Object(i.useState)(-1),j=Object(c.a)(l,2),b=j[0],v=j[1],f=Object(i.useState)(""),O=Object(c.a)(f,2),h=O[0],m=O[1];return Object(i.useEffect)((function(){s.a.get("/int-number",{params:{id:t}}).then((function(e){v(e.data.int_total)})),""!==Object(o.a)("event-".concat(t))&&d(!0),m(b>1||0===b?"There are currently ".concat(b," people interested."):" There is currently ".concat(b," person interested."))}),[b,t]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"interest",children:[Object(a.jsx)("p",{children:h}),u?Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Thanks for showing your interest!"})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Let us know you're interested in this event by clicking below."}),Object(a.jsx)("button",{className:"click-here",onClick:function(e){return function(e){s.a.put("/new-interest",{id:t}).then((function(e){v(e.data.int_total)}));var n=new Date;n.setTime(n.getTime()+432e9),document.cookie="event-".concat(t,"=").concat(t,";expires=").concat(n.toUTCString()),d(!0)}()},children:"I am Interested!"})]})]})})};t.default=function(e){var t=e.data,n=Object(i.useState)(null),s=Object(c.a)(n,2),o=s[0],d=s[1],l=Object(i.useState)(""),j=Object(c.a)(l,2),b=j[0],v=(j[1],Object(i.useState)(0)),f=Object(c.a)(v,2),O=(f[0],f[1],Object(i.useRef)(null));return Object(i.useEffect)((function(){document.body.scrollTop=0,""===O.current.innerHTML&&"LOADED"===t.status&&(d(t.event),O.current.innerHTML=t.urlData)}),[o,t]),Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("img",{src:null===o||void 0===o?void 0:o.image,alt:"event"}),Object(a.jsx)("h2",{id:"event-name",children:null===o||void 0===o?void 0:o.event_name}),Object(a.jsx)("div",{id:"event-data",ref:O,dangerouslySetInnerHTML:{__html:b}}),Object(a.jsx)("h3",{style:{display:""===(null===o||void 0===o?void 0:o.iframe_form)?"none":"block"},children:"Are you interested in this event? Complete our survey form!"}),Object(a.jsx)("iframe",{title:"donation page",style:{display:""===(null===o||void 0===o?void 0:o.iframe_form)?"none":"block"},src:null===o||void 0===o?void 0:o.iframe_form}),Object(a.jsx)(u,{id:null===o||void 0===o?void 0:o.event_id}),Object(a.jsx)(r.default,{})]})}},81:function(e,t,n){"use strict";function c(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),c=0;c<n.length;c++){for(var i=n[c];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=11.682d763f.chunk.js.map