(this["webpackJsonptezos-flame-defi"]=this["webpackJsonptezos-flame-defi"]||[]).push([[0],{133:function(e,t){},211:function(e){e.exports=JSON.parse('{"/rule":{"type":"telegram","title":"Tezos Ukraine - Secret telegram","token":{"name":"TEZ","icon":""},"balance":100}}')},219:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},229:function(e,t){},231:function(e,t){},241:function(e,t){},243:function(e,t){},270:function(e,t){},271:function(e,t){},276:function(e,t){},278:function(e,t){},285:function(e,t){},304:function(e,t){},361:function(e,t){},376:function(e,t,n){},377:function(e,t,n){},378:function(e,t,n){},379:function(e,t,n){},380:function(e,t,n){},381:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(99),r=n.n(a),i=n(48),u=n(18),o=(n(219),n(8)),l=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"header__logo"}),Object(o.jsxs)("div",{className:"header__nav",children:[Object(o.jsx)(i.b,{to:"/",children:"Home"}),Object(o.jsx)(i.b,{to:"/create",children:"Create access"}),Object(o.jsx)(i.b,{to:"/plugin",children:"Use our plugin"})]})]})},j=(n(221),function(){return Object(o.jsxs)("div",{className:"base-layout",children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"base-layout__main",children:Object(o.jsx)(u.a,{})})]})}),d=n(10),b=n(34),h=n(390),O=(n(222),["children"]),m=function(e){var t=e.children,n=Object(b.a)(e,O);return Object(o.jsx)(h.a,Object(d.a)(Object(d.a)({shape:"round",size:"large",type:"default"},n),{},{children:t}))},f=n(89),v=n(3),x=n(4),p=n(0),_=n.n(p),g=n(212),N=n(128),k=n(24),w="Test app",y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.o.HANGZHOUNET;Object(v.a)(this,e),this.network=void 0,this.wallet=void 0,this.accountAddress="",this.signature="",this.network=t;var n={name:w,iconUrl:"".concat("localhost:3000","/favicon.ico"),preferredNetwork:this.network};this.wallet=new g.a(n)}return Object(x.a)(e,[{key:"getAccountAddress",value:function(){return this.accountAddress}},{key:"getSignature",value:function(){return this.signature}},{key:"loadActiveAccount",value:function(){var e=this;return this.wallet.client.getActiveAccount().then((function(t){return t&&(e.accountAddress=t.address),t}))}},{key:"clearActiveAccount",value:function(){var e=this;return this.wallet.client.clearActiveAccount().then((function(){e.accountAddress=""}))}},{key:"connectWallet",value:function(){var e=Object(f.a)(_.a.mark((function e(){var t,n,c,s,a,r=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],n=r.length>1&&void 0!==r[1]?r[1]:this.network,c={network:{type:n}},e.next=5,this.loadActiveAccount();case 5:if(!(s=e.sent)){e.next=11;break}if(t){e.next=9;break}return e.abrupt("return",s.address);case 9:return e.next=11,this.clearActiveAccount();case 11:return e.prev=11,e.next=14,this.wallet.client.requestPermissions(c);case 14:return a=e.sent,this.accountAddress=a.accountInfo.address,e.abrupt("return",this.accountAddress);case 19:throw e.prev=19,e.t0=e.catch(11),console.log(e.t0),null===e.t0||void 0===e.t0?void 0:e.t0.title;case 23:case"end":return e.stop()}}),e,this,[[11,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"requestSign",value:function(){var e=Object(f.a)(_.a.mark((function e(){var t,n,c,s,a,r,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).toISOString(),n=["Tezos Signed Message:",w,t,"Hello!"].join(" "),c=Object(N.a)(n),s="0501"+Object(N.a)(String(c.length))+c,a={signingType:k.B.MICHELINE,payload:s,sourceAddress:this.accountAddress},e.prev=6,e.next=9,this.wallet.client.requestSignPayload(a);case 9:return r=e.sent,i=r.signature,this.signature=i,e.abrupt("return",i);case 15:throw e.prev=15,e.t0=e.catch(6),console.error(e.t0),null===e.t0||void 0===e.t0?void 0:e.t0.title;case 19:case"end":return e.stop()}}),e,this,[[6,15]])})));return function(){return e.apply(this,arguments)}}()}]),e}();new y;var S=n(389),A=n(129),C=n(388),z=function(e){var t=Object(o.jsx)(A.a,{style:{fontSize:24},spin:!0});return Object(o.jsx)(C.a,Object(d.a)({indicator:t},e))},T=(n(376),["steps","current","status","error"]),E=S.a.Step,I=function(e){var t=e.steps,n=e.current,c=e.status,s=e.error,a=Object(b.a)(e,T);return Object(o.jsx)(S.a,Object(d.a)(Object(d.a)({},a),{},{current:n,status:c,direction:"vertical",className:"authorization-steps",children:t.map((function(e,t){var a=e.title,r=e.description;return Object(o.jsx)(E,{title:a,description:t===n?s:r,className:"authorization-steps__step",subTitle:t===n&&"process"===c&&Object(o.jsx)(z,{})},a)}))}))},U=n(9),M=n(211),H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Object(c.useState)(e),a=Object(U.a)(s,2),r=a[0],i=a[1],u=Object(c.useState)(t),o=Object(U.a)(u,2),l=o[0],j=o[1],d=Object(c.useState)(!1),b=Object(U.a)(d,2),h=b[0],O=b[1],m=Object(c.useState)(null),v=Object(U.a)(m,2),x=v[0],p=v[1],g=Object(c.useState)(!1),N=Object(U.a)(g,2),k=N[0],w=N[1],y=Object(c.useState)(""),S=Object(U.a)(y,2),A=S[0],C=S[1],z=Object(c.useState)(0),T=Object(U.a)(z,2),E=T[0],I=T[1],H=function(){return I((function(e){return e+1}))},q=Object(c.useCallback)(Object(f.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0);try{t={status:200,data:M[r]},console.log(r,l,t),200===t.status?p(t.data):(w(!0),C(t.data))}catch(n){w(!0),C(null===n||void 0===n?void 0:n.message)}finally{O(!1)}case 2:case"end":return e.stop()}}),e)}))),[O,r,l,p,w,C]);return Object(c.useEffect)((function(){n||q()}),[q,n,E]),{fetch:q,data:x,isLoading:h,hasError:k,errorMessage:A,updateUrl:i,updateParams:j,refetch:H}},q=(n(377),function(e){var t=e.title,n=e.balance,c=e.token;return Object(o.jsxs)("div",{className:"rule",children:[t&&Object(o.jsx)("div",{className:"rule__title",children:t}),Object(o.jsxs)("div",{className:"rule__description",children:["You need to have",Object(o.jsx)("span",{className:"rule__balance",children:n}),Object(o.jsx)("span",{className:"rule__token",children:null===c||void 0===c?void 0:c.name}),"to access"]})]})}),L=(n(378),new y),P=[{title:"Connect wallet"},{title:"Sign data"},{title:"Check wallet balance"},{title:"Success!"}],D=function(){var e=Object(u.h)().ruleId,t=function(e){var t=Object(c.useMemo)((function(){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{status:"wait"})}))}),[e]),n=Object(c.useState)(0),s=Object(U.a)(n,2),a=s[0],r=s[1],i=Object(c.useState)(t),u=Object(U.a)(i,2),o=u[0],l=(u[1],Object(c.useState)("wait")),j=Object(U.a)(l,2),b=j[0],h=j[1],O=Object(c.useState)(""),m=Object(U.a)(O,2),f=m[0],v=m[1];return{steps:o,current:a,status:b,error:f,setCurrent:r,setStatus:h,setError:function(e){h("error"),v(e)},nextStep:function(){h(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"finish"),r((function(e){return e+1}))}}}(P),n=t.steps,s=t.current,a=t.status,r=(t.setCurrent,t.error),i=t.setStatus,l=t.setError,j=t.nextStep,b=H("/rule",{rule:e||""}),h=Object(c.useCallback)((function(e){i("process");var t=e.href;setTimeout((function(){i("finish"),window.open(t)}),2e3)}),[i]),O=Object(c.useCallback)((function(){i("process");L.getAccountAddress(),L.getSignature();new Promise((function(e,t){setTimeout((function(){e({type:"telegram",href:"https://t.me/TezosUkraine"})}),2e3)})).then((function(e){j(),h(e)})).catch((function(e){l(e)}))}),[j,i,l,h,e]),f=Object(c.useCallback)((function(){i("process"),L.requestSign().then((function(){j(),O()})).catch((function(e){l(e)}))}),[j,i,l,O]),v=Object(c.useCallback)((function(){i("process"),L.connectWallet(!0).then((function(){j(),f()})).catch((function(e){l(e)}))}),[j,i,l,f]);return Object(o.jsxs)("div",{className:"authorize",children:[Object(o.jsx)("h2",{className:"authorize__title",children:"Authorize to get access"}),b.isLoading&&Object(o.jsx)(z,{}),b.hasError&&Object(o.jsx)("span",{className:"authorize__error",children:"Incorrect URL"}),b.data&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(q,Object(d.a)({},b.data)),Object(o.jsx)("div",{className:"authorize__steps",children:Object(o.jsx)(I,{steps:n,current:s,error:r,status:a})}),Object(o.jsx)(m,{onClick:v,children:"Connect wallet"})]})]})},G=function(){return Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("p",{children:"Create page"}),Object(o.jsx)(m,{children:"Create"})]})},J=(n(379),n(380),["\ud83e\uddb8\ud83c\udffc","\ud83e\udddd","\ud83d\udcbb","\ud83e\udd16","\ud83d\ude07","\ud83d\ude0e","\ud83d\ude4c\ud83c\udffb","\ud83e\uddbe","\ud83e\udd84","\ud83d\udc28","\ud83e\udd91","\ud83e\udd96","\ud83d\udc0a","\ud83d\udc22","\ud83c\udf39","\ud83c\udf32","\ud83c\udf08","\ud83d\udd25","\ud83e\udd66","\ud83c\udf52","\ud83c\udfc6","\ud83d\udd11"]),B=function(){var e=Object(c.useState)(J[0]),t=Object(U.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){var e=Math.floor(Math.random()*J.length);s(J[e])}),4e3);return function(){clearInterval(e)}}),[s]),Object(o.jsx)("span",{className:"emoji",children:n})},F=function(){var e=Object(u.g)(),t=Object(c.useCallback)((function(){e("/create")}),[e]);return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsxs)("h1",{className:"main__title",children:["Grant access to special resources",Object(o.jsx)("br",{})," to your loyal users",Object(o.jsx)(B,{})]}),Object(o.jsx)(m,{type:"primary",onClick:t,children:"Create secure resource link"}),Object(o.jsxs)("div",{className:"main__list",children:[Object(o.jsxs)("div",{className:"main__sublist",children:[Object(o.jsxs)("div",{className:"main__item",onClick:t,children:[Object(o.jsx)("div",{className:"main__number main__number--1",children:"1."}),Object(o.jsx)("div",{className:"main__text",children:"Offer additional content to the owners of your NFT"})]}),Object(o.jsxs)("div",{className:"main__item",onClick:t,children:[Object(o.jsx)("div",{className:"main__number main__number--2",children:"2."}),Object(o.jsx)("div",{className:"main__text",children:"Grant special access to your dedicated users"})]}),Object(o.jsxs)("div",{className:"main__item",onClick:t,children:[Object(o.jsx)("div",{className:"main__number main__number--3",children:"3."}),Object(o.jsx)("div",{className:"main__text",children:"Unite your users in Telegram and Discord communities"})]})]}),Object(o.jsxs)("div",{className:"main__sublist",children:[Object(o.jsxs)("div",{className:"main__item",onClick:t,children:[Object(o.jsx)("div",{className:"main__number main__number--4",children:"4."}),Object(o.jsx)("div",{className:"main__text",children:"Develop a community around your product"})]}),Object(o.jsxs)("div",{className:"main__item",onClick:t,children:[Object(o.jsx)("div",{className:"main__number main__number--5",children:"5."}),Object(o.jsx)("div",{className:"main__text",children:"Communicate with your loyal audience"})]})]})]})]})},W=function(){return Object(o.jsx)("div",{className:"plugin",children:Object(o.jsx)("p",{children:"How to use plugin"})})},Z=function(){return Object(o.jsx)(u.d,{children:Object(o.jsxs)(u.b,{path:"/",element:Object(o.jsx)(j,{}),children:[Object(o.jsx)(u.b,{index:!0,element:Object(o.jsx)(F,{})}),Object(o.jsx)(u.b,{path:"create",element:Object(o.jsx)(G,{})}),Object(o.jsx)(u.b,{path:"plugin",element:Object(o.jsx)(W,{})}),Object(o.jsx)(u.b,{path:":ruleId",element:Object(o.jsx)(D,{})})]})})};n(381);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(Z,{})})}),document.getElementById("root"))}},[[382,1,2]]]);
//# sourceMappingURL=main.d37fc012.chunk.js.map