(this.webpackJsonpdatt=this.webpackJsonpdatt||[]).push([[16],{313:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(130),c=n.n(a),o=n(131),r=n(8),s=n(9),d=n(78),u=n(75),l=n(11),j=n.n(l),p=n(74),b=n(132),f=n(0),O=function(e){var t=e.dname,n=e.ddescription,a=e.dlocation,l=Object(i.useState)(t),O=Object(r.a)(l,2),h=O[0],g=O[1],m=Object(i.useState)(n),x=Object(r.a)(m,2),y=x[0],v=x[1],C=Object(i.useState)(null),k=Object(r.a)(C,2),w=k[0],S=k[1],R=Object(i.useState)(""),U=Object(r.a)(R,2),I=U[0],T=U[1],B=Object(i.useState)(""),D=Object(r.a)(B,2),E=D[0],F=D[1],V=Object(i.useState)(null),A=Object(r.a)(V,2),H=A[0],J=A[1],L=Object(i.useState)(""),N=Object(r.a)(L,2),Y=N[0],z=N[1],G=Object(i.useState)(""),M=Object(r.a)(G,2),P=M[0],q=M[1],K=Object(i.useRef)(Object(f.jsx)("input",{type:"file"})),Q=Object(i.useContext)(p.a),W=Object(i.useRef)(Object(f.jsx)("input",{type:"file"}));console.log(a);var X={maxSizeMB:.1},Z=function(){var e=Object(o.a)(c.a.mark((function e(t,n){var i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=new FileReader,t.target.files[0].type.includes("image")){e.next=6;break}return q("That file is not an image."),e.abrupt("return");case 6:q("");case 7:return T(t.target.files[0].type),e.next=10,Object(b.a)(t.target.files[0],X);case 10:return o=e.sent,e.next=13,S(o);case 13:console.log(t.target.files[0]),i.onloadend=function(e){var t=document.getElementById(n);t.src=i.result,""===a&&(t.style.display="block")},i.readAsDataURL(t.target.files[0]);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)(u.a,{}),Object(f.jsxs)("div",{id:"edit-user",children:[Object(f.jsx)("h3",{children:"Name"}),Object(f.jsx)("input",{type:"text",id:"title",value:h,onChange:function(e){return g(e.target.value)}}),Object(f.jsx)("h3",{children:"Description"}),Object(f.jsx)("textarea",{id:"details",value:y,onChange:function(e){return v(e.target.value)}}),Object(f.jsx)("h3",{children:"Image File"}),Object(f.jsx)("input",{type:"file",name:"image",style:{display:"none"},id:"image",onChange:function(e){return Z(e,"detail-photo")},ref:K}),Object(f.jsx)("button",{style:{color:"black",width:"fit-content",padding:"10px",marginBottom:"20px"},onClick:function(){K.current.click()},children:"Upload Your Image"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"file",name:"video",style:{display:"none"},id:"video",onChange:function(e){return function(e){if(z("Video successfully loaded."),console.log(e.target.files[0]),e.target.files[0].type.includes("video")){var t=new FileReader;F(e.target.files[0].type),J(e.target.files[0]),t.onloadend=function(e){console.log(e)},t.readAsDataURL(e.target.files[0])}else z("That file is not a video.")}(e)},ref:W}),""!==a?Object(f.jsx)("img",{src:a,alt:"preview",id:"detail-photo"}):Object(f.jsx)("img",{src:"",alt:"preview",id:"detail-photo",style:{display:"none"}}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{style:{color:"black",width:"fit-content",padding:"10px",marginBottom:"20px"},onClick:function(){W.current.click()},children:"Upload Your Video"}),Object(f.jsx)("h4",{children:Y}),Object(f.jsx)("input",{type:"submit",value:"Set Description",id:"submit",onClick:function(){if("Video successfully loaded."===Y&&""===P){var e=Object(d.a)("userid");w||H?!w&&H?s.a.post("/user",{name:h,description:y,id:e,key:encodeURIComponent(h),vidtype:E}).then((function(e){var t={headers:{"Content-Type":E}};j.a.put(e.data,H,t).then((function(){Q.running()}))})):w&&!H?s.a.post("/user",{name:h,description:y,id:e,key:encodeURIComponent(h),imgtype:I}).then((function(e){var t={headers:{"Content-Type":I}};j.a.put(e.data,w,t).then((function(){Q.running()}))})):s.a.post("/user",{name:h,description:y,id:e,key:encodeURIComponent(h),imgtype:I,vidtype:E}).then((function(e){var t={headers:{"Content-Type":I}},n={headers:{"Content-Type":E}};console.log(e.data),Promise.all([j.a.put(e.data.image,w,t),j.a.put(e.data.video,H,n)]).then((function(){Q.running()}))})).catch((function(e){console.log(e)})):s.a.post("/user",{name:h,description:y,id:e}).then((function(){Q.running()}))}}})]})]})};t.default=function(e){var t=e.getUserEdit;return Object(f.jsx)("div",{className:"user-admin",onClick:function(){return function(){var e=Object(d.a)("userid");s.a.get("/user",{params:{id:e}}).then((function(e){if(console.log(e.data.url),""!==e.data.rows){var n=e.data.rows[0];t(Object(f.jsx)(O,{dname:n.name,ddescription:n.description,dlocation:e.data.url}))}else t(Object(f.jsx)(O,{dname:"",ddescription:"",dlocation:""}))}))}()},children:Object(f.jsx)("h2",{children:"Click Here to Edit User"})})}},75:function(e,t,n){"use strict";n(1);var i=n(74),a=n(0);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(i.a.Consumer,{children:function(e){return Object(a.jsx)("h3",{onClick:function(){return e.running()},id:"home",children:"Go Home"})}})})}}}]);
//# sourceMappingURL=16.b1ed9cc2.chunk.js.map