(this["webpackJsonpassignment-two"]=this["webpackJsonpassignment-two"]||[]).push([[0],{66:function(e,a,t){e.exports=t(95)},71:function(e,a,t){},91:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),c=(t(71),t(16)),s=t.n(c),i=t(11);t(73);var u=function(e){return l.a.createElement(n.Fragment,null,e.auth?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"navBar"},l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark navBarr"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"ShoppingList"),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"nav-content"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-link"},l.a.createElement("b",null,"Welcome ",localStorage.getItem("username"))),l.a.createElement("li",{className:"nav-link",onClick:e.logout},"Logout")))))):l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"navBar"},l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark navBarr"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"ShoppingList"),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"nav-content"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-link",onClick:e.rOpen},"Register"),l.a.createElement("li",{className:"nav-link",onClick:e.lOpen},"Login")))))))},m=t(18),d=t.n(m);t(91);var p=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)(!0),u=Object(i.a)(c,2),m=u[0],p=u[1];Object(n.useEffect)((function(){e.auth,d.a.get("https://assignmentforoffice.herokuapp.com/api/items").then((function(e){return o(e.data),p(!1)}))}));var b=r.map((function(e){return l.a.createElement("li",{key:e._id,className:"list-group-item"},e.name)})),g=r.map((function(e){return l.a.createElement("li",{key:e._id,className:"list-group-item"},l.a.createElement("button",{onClick:function(){return function(e){var a,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),a={headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")}},n.next=4,s.a.awrap(d.a.delete("https://assignmentforoffice.herokuapp.com/api/items/".concat(e),a));case 4:n.sent,t=r.filter((function(a){return a._id!==e})),o(t);case 7:case"end":return n.stop()}}))}(e._id)},className:"btn btn-danger mr-3"},"Delete"),e.name)}));return l.a.createElement(n.Fragment,null,e.auth?l.a.createElement("div",{className:"list"},l.a.createElement("button",{className:"btn btn-primary",onClick:e.iOpen},"Add Item"),l.a.createElement("br",null),l.a.createElement("br",null),m?l.a.createElement("h5",null,"Loading...."):l.a.createElement("ul",{className:"list-group"},g)):l.a.createElement("div",{className:"list"},l.a.createElement("h4",{className:"pl-4"},"Please Login to manage Items"),m?l.a.createElement("h5",null,"Loading...."):l.a.createElement("ul",{className:"list-group"},b)))},b=t(128),g=t(129),h=t(132),v=t(127),E=t(133);function f(e){return l.a.createElement(h.a,{style:{margin:"-100px 0px 0 0px"},open:e.ropen,onClose:e.rclose,"aria-labelledby":"form-dialog-title"},l.a.createElement(E.a,{id:"form-dialog-title"},"Register",l.a.createElement("button",{onClick:e.rclose,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement(v.a,{style:{width:"500px",minHeight:"380px"}},e.error&&l.a.createElement("div",{className:"bg bg-danger",style:{color:"white"}},e.error),l.a.createElement("br",null),l.a.createElement("div",null,"Name"),l.a.createElement(g.a,{autoFocus:!0,margin:"dense",variant:"outlined",id:"name",value:e.name,onChange:e.handlename,placeholder:"Enter Name",type:"text",fullWidth:!0}),l.a.createElement("div",null,"Email"),l.a.createElement(g.a,{autoFocus:!0,margin:"dense",variant:"outlined",id:"email",value:e.email,onChange:e.handleemail,placeholder:"Email Address",type:"email",fullWidth:!0}),l.a.createElement("div",null,"Password"),l.a.createElement(g.a,{autoFocus:!0,margin:"dense",variant:"outlined",id:"password",value:e.password,onChange:e.handlepassword,placeholder:"Enter Password",type:"password",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"contained",color:"primary",onClick:e.handlesubmit},"Register")))}var k=t(130);function w(e){return l.a.createElement(h.a,{style:{margin:"-100px 0px 0px 0px"},open:e.lopen,onClose:e.lclose,"aria-labelledby":"form-dialog-title"},l.a.createElement(E.a,{id:"form-dialog-title"},"Login",l.a.createElement("button",{onClick:e.lclose,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement(v.a,{style:{width:"500px",minHeight:"340px"}},e.error&&l.a.createElement("div",{className:"bg bg-danger",style:{color:"white"}},e.error),l.a.createElement("div",null,"Email"),l.a.createElement(g.a,{autoFocus:!0,margin:"dense",variant:"outlined",id:"email",name:"lemail",value:e.lemail,onChange:e.handleemail,placeholder:"Email Address",type:"email",fullWidth:!0}),l.a.createElement("div",null,"Password"),l.a.createElement(g.a,{autoFocus:!0,margin:"dense",variant:"outlined",id:"password",value:e.lpassword,name:"lpassword",onChange:e.handlepassword,placeholder:"Enter Password",type:"password",fullWidth:!0}),l.a.createElement(k.a,{onChange:e.change,value:e.checked,checked:e.checked,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),l.a.createElement("span",null,"Keep me login"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"contained",color:"primary",onClick:e.handlesubmit},"Login")))}function x(e){return l.a.createElement(h.a,{style:{margin:"-100px 0px 0 0px"},open:e.iopen,onClose:e.iclose,"aria-labelledby":"form-dialog-title"},l.a.createElement(E.a,{id:"form-dialog-title"},"Add To Shopping List",l.a.createElement("button",{onClick:e.iclose,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement(v.a,{style:{width:"500px",minHeight:"250px"}},e.error&&l.a.createElement("div",{className:"bg bg-danger",style:{color:"white"}},e.error),l.a.createElement("br",null),l.a.createElement("div",null,"Item"),l.a.createElement(g.a,{autoFocus:!0,margin:"dense",variant:"outlined",id:"name",value:e.iname,onChange:e.handleitem,placeholder:"Enter Name",type:"text",fullWidth:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"contained",color:"primary",onClick:e.handlesubmit},"Add Item")))}var y=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),m=c[0],b=c[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),v=h[0],E=h[1],k=Object(n.useState)(!1),y=Object(i.a)(k,2),O=y[0],j=y[1],N=Object(n.useState)(null),C=Object(i.a)(N,2),S=C[0],I=C[1],F=Object(n.useState)(null),L=Object(i.a)(F,2),P=L[0],W=L[1],B=Object(n.useState)(null),A=Object(i.a)(B,2),D=A[0],z=A[1],T=Object(n.useState)(""),_=Object(i.a)(T,2),H=_[0],R=_[1],J=Object(n.useState)(""),K=Object(i.a)(J,2),$=K[0],q=K[1],G=Object(n.useState)(""),M=Object(i.a)(G,2),Q=M[0],U=M[1],V=Object(n.useState)(""),X=Object(i.a)(V,2),Y=X[0],Z=X[1],ee=Object(n.useState)(null),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],le=Object(n.useState)(""),re=Object(i.a)(le,2),oe=re[0],ce=re[1],se=Object(n.useState)(!1),ie=Object(i.a)(se,2),ue=ie[0],me=ie[1];Object(n.useEffect)((function(){if(localStorage.getItem("token")){!function(){var e,a;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")}},t.next=4,s.a.awrap(d.a.get("https://assignmentforoffice.herokuapp.com/api/auth/user",e));case 4:a=t.sent,console.log(a.data),j(!0),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),null,null,[[0,9]])}()}}),[]);var de=function(){r(!1),U(null),z(null),W(null),I(null)},pe=function(){E(!1),ce(null),ne(null)},be=function(){b(!1),Z(null),R(null),q(null)},ge="plz provide all value";return l.a.createElement("div",null,l.a.createElement(u,{rOpen:function(){r(!0)},lOpen:function(){b(!0)},rClose:de,lClose:be,auth:O,logout:function(e){e.preventDefault(),console.log("working"),localStorage.clear(),j(!1)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p,{auth:O,iOpen:function(){E(!0)}}),l.a.createElement(f,{ropen:t,rclose:de,auth:j,handlename:function(e){I(e.target.value)},handleemail:function(e){W(e.target.value)},handlepassword:function(e){z(e.target.value)},handlesubmit:function(e){var a,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),S){n.next=3;break}return n.abrupt("return",U("Plz Enter your Name"));case 3:if(P){n.next=5;break}return n.abrupt("return",U("Plz Enter your Email"));case 5:if(D){n.next=7;break}return n.abrupt("return",U("Plz Enter your Password"));case 7:return a={name:S,email:P,password:D},n.prev=8,n.next=11,s.a.awrap(d.a.post("https://assignmentforoffice.herokuapp.com/api/users",a));case 11:t=n.sent,localStorage.setItem("username",t.data.user.name),t.data&&(j(!0),de(),console.log(t.data)),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(8),U(n.t0.response.data.msg);case 19:case"end":return n.stop()}}),null,null,[[8,16]])},name:S,email:P,password:D,error:Q}),l.a.createElement(w,{lopen:m,lclose:be,email:H,password:$,handleemail:function(e){console.log(e.target.value),R(e.target.value)},handlepassword:function(e){q(e.target.value)},error:Y,auth:j,handlesubmit:function(e){var a,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),""!==H&&""!==$){n.next=5;break}Z(ge),n.next=17;break;case 5:return a={email:H,password:$},n.prev=6,n.next=9,s.a.awrap(d.a.post("https://assignmentforoffice.herokuapp.com/api/auth",a));case 9:t=n.sent,ue?(localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.user.name)):localStorage.setItem("username",t.data.user.name),t&&(j(!0),be()),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(6),Z(n.t0.response.data.msg);case 17:case"end":return n.stop()}}),null,null,[[6,14]])},change:function(e){ue?(me(!1),console.log("not checked")):(me(e.target.checked),console.log(" checked"))},check:ue}),l.a.createElement(x,{iopen:v,iclose:pe,iname:te,handleitem:function(e){ne(e.target.value)},handlesubmit:function(e){var a,t,n;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.preventDefault(),""!=te){l.next=3;break}return l.abrupt("return",ce(ge));case 3:return a={itemName:te},l.prev=4,t={headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")}},console.log("sent"),l.next=9,s.a.awrap(d.a.post("https://assignmentforoffice.herokuapp.com/api/items",a,t));case 9:n=l.sent,console.log(n.data),n.data&&pe(),l.next=18;break;case 14:l.prev=14,l.t0=l.catch(4),console.log(l.t0),Z(l.t0.response);case 18:case"end":return l.stop()}}),null,null,[[4,14]])},error:oe}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.6ff77dac.chunk.js.map