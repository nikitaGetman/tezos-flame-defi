(this["webpackJsonptezos-flame-defi"]=this["webpackJsonptezos-flame-defi"]||[]).push([[0],{179:function(e,t){},284:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},294:function(e,t){},296:function(e,t){},306:function(e,t){},308:function(e,t){},335:function(e,t){},336:function(e,t){},341:function(e,t){},343:function(e,t){},350:function(e,t){},369:function(e,t){},426:function(e,t){},455:function(e,t,n){},456:function(e,t,n){},457:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},525:function(e,t,n){},526:function(e,t,n){},527:function(e,t,n){},528:function(e,t,n){},529:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(62),r=n.n(i),s=n(60),o=n(22),l=(n(284),n(11)),u=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header__logo"}),Object(l.jsxs)("div",{className:"header__nav",children:[Object(l.jsx)(s.b,{to:"/",children:"Home"}),Object(l.jsx)(s.b,{to:"/create",children:"Create link"}),Object(l.jsx)(s.b,{to:"/plugin",children:"Use our plugin"})]})]})},d=(n(286),function(){return Object(l.jsxs)("div",{className:"base-layout",children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"base-layout__main",children:Object(l.jsx)(o.a,{})}),Object(l.jsx)("div",{className:"base-layout__footer"})]})}),j=n(8),b=n(9),h=n(19),m=n(276),O=(n(287),["children"]),f=function(e){var t=e.children,n=Object(h.a)(e,O);return Object(l.jsx)(m.a,Object(j.a)(Object(j.a)({shape:"round",size:"large",type:"default"},n),{},{children:t}))},v=n(68),p=n(3),x=n(4),k=n(0),_=n.n(k),g=n(273),N=n(176),w=n(28),y="Test app",S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w.o.MAINNET;Object(p.a)(this,e),this.network=void 0,this.wallet=void 0,this.accountAddress="",this.signature="",this.network=t;var n={name:y,iconUrl:"".concat(window.location.origin,"/favicon.ico"),preferredNetwork:this.network};this.wallet=new g.a(n)}return Object(x.a)(e,[{key:"getAccountAddress",value:function(){return this.accountAddress}},{key:"getSignature",value:function(){return this.signature}},{key:"loadActiveAccount",value:function(){var e=this;return this.wallet.client.getActiveAccount().then((function(t){return t&&(e.accountAddress=t.address),t}))}},{key:"clearActiveAccount",value:function(){var e=this;return this.wallet.client.clearActiveAccount().then((function(){e.accountAddress=""}))}},{key:"connectWallet",value:function(){var e=Object(v.a)(_.a.mark((function e(){var t,n,c,a,i,r=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],n=r.length>1&&void 0!==r[1]?r[1]:this.network,c={network:{type:n}},e.next=5,this.loadActiveAccount();case 5:if(!(a=e.sent)){e.next=11;break}if(t){e.next=9;break}return e.abrupt("return",a.address);case 9:return e.next=11,this.clearActiveAccount();case 11:return e.prev=11,e.next=14,this.wallet.client.requestPermissions(c);case 14:return i=e.sent,this.accountAddress=i.accountInfo.address,e.abrupt("return",this.accountAddress);case 19:throw e.prev=19,e.t0=e.catch(11),console.log(e.t0),null===e.t0||void 0===e.t0?void 0:e.t0.title;case 23:case"end":return e.stop()}}),e,this,[[11,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"requestSign",value:function(){var e=Object(v.a)(_.a.mark((function e(){var t,n,c,a,i,r,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).toISOString(),n=["Tezos Signed Message:",y,t,"Hello!"].join(" "),c=Object(N.a)(n),a="0501"+Object(N.a)(String(c.length))+c,i={signingType:w.B.MICHELINE,payload:a,sourceAddress:this.accountAddress},e.prev=6,e.next=9,this.wallet.client.requestSignPayload(i);case 9:return r=e.sent,s=r.signature,this.signature=s,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(6),console.error(e.t0),null===e.t0||void 0===e.t0?void 0:e.t0.title;case 19:case"end":return e.stop()}}),e,this,[[6,15]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),C=(new S,n(265)),A=n.n(C).a.create({baseURL:"http://84.201.184.103:5000/api",timeout:6e5});var I={get:A.get,delete:A.delete,post:A.post,put:A.put,patch:A.patch,request:A.request};function T(e){var t=e.link;return I.get("/link",{params:{link:t}})}function z(e){var t=e.q;return I.get("/tokens",{params:{q:t}})}function M(e){var t=e.contract;return I.get("/token",{params:{contract:t}})}function E(e){return I.post("/link",e)}var L=n(537),q=n(84),F=n(535),B=function(e){var t=Object(l.jsx)(q.a,{style:{fontSize:24},spin:!0});return Object(l.jsx)(F.a,Object(j.a)({indicator:t},e))},P=(n(455),["steps","current","status","error"]),U=L.a.Step,D=function(e){var t=e.steps,n=e.current,c=e.status,a=e.error,i=Object(h.a)(e,P);return Object(l.jsx)(L.a,Object(j.a)(Object(j.a)({},i),{},{current:n,status:c,direction:"vertical",className:"authorization-steps",children:t.map((function(e,t){var i=e.title,r=e.description;return Object(l.jsx)(U,{title:i,description:t===n?a:r,className:"authorization-steps__step",subTitle:t===n&&"process"===c&&Object(l.jsx)(B,{})},i)}))}))},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=Object(c.useState)(t),i=Object(b.a)(a,2),r=i[0],s=i[1],o=Object(c.useState)(!1),l=Object(b.a)(o,2),u=l[0],d=l[1],h=Object(c.useState)(),m=Object(b.a)(h,2),O=m[0],f=m[1],v=Object(c.useState)(!1),p=Object(b.a)(v,2),x=p[0],k=p[1],_=Object(c.useState)(!1),g=Object(b.a)(_,2),N=g[0],w=g[1],y=Object(c.useState)(""),S=Object(b.a)(y,2),C=S[0],A=S[1],I=Object(c.useState)(0),T=Object(b.a)(I,2),z=T[0],M=T[1],E=function(){return M((function(e){return e+1}))},L=Object(c.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d(!0),e(Object(j.a)(Object(j.a)({},r),t)).then((function(e){return 200===e.status?f(e.data):(k(!0),A(e.data)),e.data})).catch((function(e){k(!0),A(null===e||void 0===e?void 0:e.message)})).finally((function(){d(!1),w(!0)}))}),[d,e,r,f,k,A]);return Object(c.useEffect)((function(){n&&L()}),[L,n,z]),{fetch:L,data:O,isLoading:u,isDone:N,hasError:x,errorMessage:C,updateParams:s,refetch:E}},H=(n(456),function(e){var t,n,c=e.title,a=e.links,i=e.token,r=a.length>1,s=parseInt(a[0].minBalance||"");return Object(l.jsxs)("div",{className:"rule",children:[c&&Object(l.jsx)("div",{className:"rule__title",children:c}),Object(l.jsxs)("div",{className:"rule__description",children:["You need to have",!r&&Object(l.jsx)("span",{className:"rule__balance",children:s||"any"}),Object(l.jsx)("span",{className:"rule__token",children:(null===(t=i.metadata)||void 0===t?void 0:t.name)||(null===(n=i.contract)||void 0===n?void 0:n.address)}),"to access"]})]})}),R=(n(457),new S),Y=[{title:"Connect wallet"},{title:"Sign data"},{title:"Check wallet balance"},{title:"Success!"}],Z=function(){var e,t,n,a,i,r,s=Object(o.h)().linkId,u=function(e){var t=Object(c.useMemo)((function(){return e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{status:"wait"})}))}),[e]),n=Object(c.useState)(0),a=Object(b.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(t),o=Object(b.a)(s,2),l=o[0],u=(o[1],Object(c.useState)("wait")),d=Object(b.a)(u,2),h=d[0],m=d[1],O=Object(c.useState)(""),f=Object(b.a)(O,2),v=f[0],p=f[1];return{steps:l,current:i,status:h,error:v,setCurrent:r,setStatus:m,setError:function(e){m("error"),p(e)},nextStep:function(){m(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"finish"),r((function(e){return e+1}))}}}(Y),d=u.steps,h=u.current,m=u.status,O=u.error,v=u.setCurrent,p=u.setStatus,x=u.setError,k=u.nextStep,_=Object(c.useState)([]),g=Object(b.a)(_,2),N=g[0],w=g[1],y=(Object(c.useRef)(!1),G(T,{link:s||""},!0)),S=Object(c.useMemo)((function(){return y.hasError||y.data&&!y.data.title}),[y]),C=(null===y||void 0===y||null===(e=y.data)||void 0===e||null===(t=e.token)||void 0===t||null===(n=t.metadata)||void 0===n?void 0:n.name)||(null===y||void 0===y||null===(a=y.data)||void 0===a||null===(i=a.token)||void 0===i||null===(r=i.metadata)||void 0===r?void 0:r.symbol)||"",A=Object(c.useCallback)((function(e){if(p("process"),w(e),1===e.length){var t=e[0].link;setTimeout((function(){p("finish"),window.open(t)}),2e3)}}),[p,w]),z=Object(c.useCallback)((function(){p("process"),function(e){var t=e.account,n=e.signature,c=e.link;return I.post("/link/check",{account:t,signature:n,link:c})}({account:R.getAccountAddress()||"",signature:R.getSignature()||"",link:s||""}).then((function(e){"ok"===e.data.status?(k(),A(e.data.links)):x(e.data.message)})).catch((function(e){var t;x((null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)||(null===e||void 0===e?void 0:e.message))}))}),[k,p,x,A,s]),M=Object(c.useCallback)((function(){p("process"),R.requestSign().then((function(){k(),z()})).catch((function(e){x(e)}))}),[k,p,x,z]),E=Object(c.useCallback)((function(){v(0),x(""),p("process"),R.connectWallet(!0).then((function(){k(),M()})).catch((function(e){x(e)}))}),[k,p,x,v,M]);return Object(l.jsxs)("div",{className:"authorize",children:[Object(l.jsx)("h2",{className:"authorize__title",children:"Connect wallet to get access"}),y.isLoading&&Object(l.jsx)(B,{}),S&&Object(l.jsxs)("span",{className:"authorize__error",children:["404 Link not found - ",Object(l.jsxs)("span",{className:"authorize__error-link",children:["/",s]})]}),N.length>0&&Object(l.jsxs)("div",{className:"authorize__links",children:[Object(l.jsx)("h4",{className:"authorize__link-title",children:"You can access to:"}),N.map((function(e,t){return Object(l.jsxs)("span",{children:["".concat(t+1,". "),Object(l.jsx)("a",{className:"authorize__link",href:e.link,target:"_blank",rel:"noreferrer",children:e.link},t),!!e.minBalance&&" - ".concat(e.minBalance," ").concat(C," tokens")]},t)}))]}),y.data&&Object(l.jsxs)("div",{className:"authorize__data authorize__data--hidden-".concat(N.length>0),children:[Object(l.jsx)(H,Object(j.a)({},y.data)),Object(l.jsx)("div",{className:"authorize__steps",children:Object(l.jsx)(D,{steps:d,current:h,error:O,status:m})}),Object(l.jsx)(f,{type:"primary",onClick:E,children:"Connect wallet"})]})]})},$=n(5),J=n(536),W=n(538),K=n(541),V=(n(458),n(540));function Q(e){return e.replace("ipfs://","https://ipfs.io/ipfs/")}n(459);var X=function(e){var t=e.metadata,n=t&&Q(t.image||t.thumbnailUri||t.displayUri||""),c=(null===t||void 0===t?void 0:t.name)||"",a=(null===t||void 0===t?void 0:t.symbol)||"",i=e.contract.address,r=!a&&!c;return Object(l.jsxs)("div",{className:"link-option",children:[n&&Object(l.jsx)("span",{className:"link-option__icon",style:{backgroundImage:"url(".concat(n,")")}}),a&&Object(l.jsx)("span",{className:"link-option__symbol",children:a}),c&&Object(l.jsx)("span",{className:"link-option__title",children:c}),r&&Object(l.jsx)("span",{className:"link-option__contract",children:i})]})},ee=function(e){var t=e.onSelect,n=Object(c.useState)(""),a=Object(b.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)([]),o=Object(b.a)(s,2),u=o[0],d=o[1],j=Object(c.useState)(),h=Object(b.a)(j,2),m=h[0],O=h[1],f=G(z),v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=Object(c.useRef)();function i(){a.current&&(clearTimeout(a.current),a.current=void 0)}return Object(c.useEffect)((function(){return n?i:void 0}),[n]),function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return i(),new Promise((function(n){a.current=setTimeout((function(){n(e.apply(void 0,c))}),t)}))}}(f.fetch,300),p=G(M),x=Object(c.useCallback)((function(e){r(e),e?v({q:e}).then((function(e){d(e.list||[])})):d([])}),[v,d,r]),k=Object(c.useMemo)((function(){return function(e){return e.map((function(e){return{value:String(e.id),label:X(e)}}))}(u)}),[u]),_=Object(c.useCallback)((function(e){var n=u.find((function(t){return String(t.id)===e})),c=(null===n||void 0===n?void 0:n.contract.address)||"";O(n),c&&p.fetch({contract:c}).then((function(e){t(e)}))}),[u,O,p,t]),g=Object(c.useCallback)((function(){r(""),d([]),O(void 0),t(null)}),[r,d,O,t]);return Object(l.jsxs)("div",{className:"token-complete",children:[Object(l.jsx)(V.a,{options:k,placeholder:"Token name or contract address",notFoundContent:(f.isLoading?"Loading...":i&&"Token not found")||"Type something to search",onSearch:x,onSelect:_,allowClear:!0,onClear:g,children:m&&Object(l.jsx)("div",{className:"token-complete__selection",children:X(m)})}),p.isLoading&&Object(l.jsx)(B,{})]})};var te=n(539),ne=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,ce=/^(https:\/\/)?t\.me\/[\S]+$/;n(525);var ae={http:{link:"https://greenknight.com/secret"},telegram:{link:"https://t.me/GreenKnight_secret"}},ie=function(e){var t=e.token,n=e.withHeader,a=void 0!==n&&n,i=Object(c.useState)("http"),r=Object(b.a)(i,2),s=r[0],o=r[1],u=t.tokenId,d=t.metadata,j=t.totalSupply,h=Object(c.useMemo)((function(){return parseInt((null===d||void 0===d?void 0:d.decimals)||"0")}),[d]),m=Object(c.useMemo)((function(){return Q((null===d||void 0===d?void 0:d.image)||(null===d||void 0===d?void 0:d.thumbnailUri)||(null===d||void 0===d?void 0:d.displayUri)||(null===d||void 0===d?void 0:d.artifactUri)||"")}),[d]),O=Object(c.useMemo)((function(){return parseInt(j||"0")/Math.pow(10,h)}),[j,h]),f=Object(c.useMemo)((function(){return O>1||h>0}),[O,h]),v=Object(c.useCallback)((function(e){o(e.target.value)}),[o]);return Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsx)(J.a.Item,{wrapperCol:{offset:7},children:Object(l.jsxs)("div",{className:"link-token-balance__header",children:[Object(l.jsx)("div",{className:"link-token-balance__icon",style:{backgroundImage:"url(".concat(m,")")}}),Object(l.jsxs)("div",{className:"link-token-balance__data",children:[Object(l.jsxs)("div",{children:["Token ID: ",Object(l.jsx)("b",{children:u})]}),Object(l.jsxs)("div",{children:["Supply: ",Object(l.jsx)("b",{children:O})]})]})]})}),f&&Object(l.jsx)(J.a.Item,{label:"Min balance",name:["minBalance",u],tooltip:"Minimal balance of tokens,         if not specified then any quantity will be sufficient, decimals is ".concat(h),children:Object(l.jsx)(W.a,{placeholder:"any",type:"number"})}),Object(l.jsx)(J.a.Item,{label:"Link type",name:["linkType",u],initialValue:"http",children:Object(l.jsxs)(te.a.Group,{optionType:"button",buttonStyle:"outline",onChange:v,value:s,children:[Object(l.jsx)(te.a.Button,{value:"http",children:"HTTP"}),Object(l.jsx)(te.a.Button,{value:"telegram",children:"Telegram"}),Object(l.jsx)(te.a.Button,{value:"discord",disabled:!0,children:"Discord"})]})}),Object(l.jsx)(J.a.Item,{name:["link",u],label:"Link",tooltip:"Link to resource, which you want to protect",rules:[{validator:function(e,t){return t?(n=t,("http"===(c=s)?ne.test(n):"telegram"===c&&ce.test(n))?Promise.resolve():Promise.reject(new Error("Incorrect link"))):Promise.reject(new Error("Link is required"));var n,c}}],children:Object(l.jsx)(W.a,{placeholder:ae[s].link})})]})},re=window.location.origin,se=function(){var e,t,n=J.a.useForm(),a=Object(b.a)(n,1)[0],i=Object(c.useState)(),r=Object(b.a)(i,2),o=r[0],u=r[1],d=Object(c.useState)(!1),j=Object(b.a)(d,2),h=j[0],m=j[1],O=Object(c.useCallback)((function(e){var t=null===e||void 0===e?void 0:e.sort((function(e,t){return parseInt(e.tokenId)-parseInt(t.tokenId)}));u(t)}),[u]),v=Object(c.useMemo)((function(){return null!==(e=o)&&void 0!==e&&e.standard?"fa1.2"===e.standard:(null===e||void 0===e?void 0:e.length)&&"fa1.2"===e[0].standard;var e}),[o]),p=Object(c.useMemo)((function(){return null!==(e=o)&&void 0!==e&&e.standard?"fa2"===e.standard:(null===e||void 0===e?void 0:e.length)&&"fa2"===e[0].standard;var e}),[o]),x=Object(c.useCallback)((function(e){return m(e.target.checked)}),[m]),k=Object(c.useCallback)((function(){return a.submit()}),[a]),_=G(E),g=Object(c.useCallback)((function(e){if(o){var t=e.title,n=e.linkType,c=e.link,a=e.minBalance,i=Object.entries(n).reduce((function(e,t){var n=Object(b.a)(t,2),i=n[0],r=n[1];return[].concat(Object($.a)(e),[{linkType:r,tokenId:i,link:c[i],minBalance:(null===a||void 0===a?void 0:a[i])||0}])}),[]),r={title:t,token:o[0],links:i};_.fetch(r)}}),[o,_]);return Object(c.useEffect)((function(){return function(){try{window.scroll({top:0,left:0,behavior:"smooth"})}catch(e){window.scrollTo(0,0)}}}),[_.isDone]),Object(l.jsxs)("div",{className:"create-link",children:[Object(l.jsx)("h2",{className:"create-link__title",children:"Create secure link to resource to grant access for you loyal audience"}),_.isDone&&!_.hasError&&Object(l.jsxs)("div",{className:"create-link__result",children:[Object(l.jsx)("div",{children:"Link is protected, for authorization use:"}),Object(l.jsx)("div",{children:Object(l.jsxs)("a",{href:"".concat(re,"/").concat(null===(e=_.data)||void 0===e?void 0:e.code),target:"_blank",rel:"noreferrer",children:[re,"/",Object(l.jsx)("b",{children:null===(t=_.data)||void 0===t?void 0:t.code})]})})]}),_.hasError&&Object(l.jsx)("div",{className:"create-link__result",children:Object(l.jsx)("div",{className:"create-link__error",children:_.errorMessage})}),Object(l.jsx)("div",{className:"create-link__form create-link__form--submitted-".concat(_.isDone),children:Object(l.jsxs)(J.a,{layout:"horizontal",labelCol:{span:7},form:a,onFinish:g,requiredMark:!1,size:"large",scrollToFirstError:!0,children:[Object(l.jsx)(J.a.Item,{name:"title",label:"Title",tooltip:"Title that users will see when authorizing",rules:[{required:!0,message:"Title is required"}],children:Object(l.jsx)(W.a,{placeholder:"Some secret resource"})}),Object(l.jsx)(J.a.Item,{label:"Token",tooltip:"Name, symbol or contract address of FA1.2 or FA2 token",rules:[{validator:function(){return o?Promise.resolve():Promise.reject(new Error("Please choose token"))}}],children:Object(l.jsx)(ee,{onSelect:O})}),o?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(J.a.Item,{wrapperCol:{offset:7},children:Object(l.jsxs)("div",{className:"create-link__token-description",children:[v&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:"FA1.2 token"}),Object(l.jsx)("div",{children:"You can specify minimal balance of tokens for access"})]}),p&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:"FA2 token"}),Object(l.jsx)("div",{className:"create-link__separate-text",children:"You can specify a separate link for each token ID or use one link for all"}),Object(l.jsxs)(K.a,{onChange:x,checked:h,children:["Separate links (",Object(l.jsx)("b",{children:o.length})," tokenId found)"]})]})]})}),h?o.map((function(e){return Object(l.jsx)(ie,{token:e,withHeader:!0},e.tokenId)})):Object(l.jsx)(ie,{token:o[0]}),Object(l.jsx)(J.a.Item,{className:"create-link__submit",children:Object(l.jsx)(f,{type:"primary",onClick:k,loading:_.isLoading,children:"Create secure link"})})]}):Object(l.jsx)("div",{className:"create-link__tip",children:"select token"}),Object(l.jsxs)("div",{className:"create-link__info",children:[Object(l.jsxs)("div",{children:["Use",Object(l.jsx)("a",{href:"https://github.com/nikitaGetman/tezos-flame-defi/blob/master/telegram-bot/readme.md",target:"_blank",style:{marginLeft:4,marginRight:4},rel:"noreferrer",children:"Telegram bot"}),"to protect your chats."]}),Object(l.jsxs)("div",{children:["Use",Object(l.jsx)(s.b,{to:"/plugin",target:"_blank",style:{marginLeft:4,marginRight:4},children:"Plugin"}),"to protect your http resources."]})]})]})})]})},oe=(n(526),n(527),["\ud83e\uddb8\ud83c\udffc","\ud83e\udddd","\ud83d\udcbb","\ud83e\udd16","\ud83d\ude07","\ud83d\ude0e","\ud83d\ude4c\ud83c\udffb","\ud83e\uddbe","\ud83e\udd84","\ud83d\udc28","\ud83e\udd91","\ud83e\udd96","\ud83d\udc0a","\ud83d\udc22","\ud83c\udf39","\ud83c\udf32","\ud83c\udf08","\ud83d\udd25","\ud83e\udd66","\ud83c\udf52","\ud83c\udfc6","\ud83d\udd11"]),le=function(){var e=Object(c.useState)(oe[0]),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){var e=Math.floor(Math.random()*oe.length);a(oe[e])}),4e3);return function(){clearInterval(e)}}),[a]),Object(l.jsx)("span",{className:"emoji",children:n})},ue=function(){var e=Object(o.g)(),t=Object(c.useCallback)((function(){e("/create")}),[e]);return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("h1",{className:"main__title",children:["Grant access to special resources",Object(l.jsx)("br",{})," to your loyal users",Object(l.jsx)(le,{})]}),Object(l.jsx)(f,{type:"primary",onClick:t,children:"Create secure resource link"}),Object(l.jsxs)("div",{className:"main__list",children:[Object(l.jsxs)("div",{className:"main__sublist",children:[Object(l.jsxs)("div",{className:"main__item",onClick:t,children:[Object(l.jsx)("div",{className:"main__number main__number--1",children:"1."}),Object(l.jsx)("div",{className:"main__text",children:"Offer additional content to the owners of your NFT"})]}),Object(l.jsxs)("div",{className:"main__item",onClick:t,children:[Object(l.jsx)("div",{className:"main__number main__number--2",children:"2."}),Object(l.jsx)("div",{className:"main__text",children:"Grant special access to your dedicated users"})]}),Object(l.jsxs)("div",{className:"main__item",onClick:t,children:[Object(l.jsx)("div",{className:"main__number main__number--3",children:"3."}),Object(l.jsx)("div",{className:"main__text",children:"Unite your users in Telegram and Discord communities"})]})]}),Object(l.jsxs)("div",{className:"main__sublist",children:[Object(l.jsxs)("div",{className:"main__item",onClick:t,children:[Object(l.jsx)("div",{className:"main__number main__number--4",children:"4."}),Object(l.jsx)("div",{className:"main__text",children:"Develop a community around your product"})]}),Object(l.jsxs)("div",{className:"main__item",onClick:t,children:[Object(l.jsx)("div",{className:"main__number main__number--5",children:"5."}),Object(l.jsx)("div",{className:"main__text",children:"Communicate with your loyal audience"})]})]})]})]})},de=function(){return Object(c.useEffect)((function(){window.location.href="https://github.com/nikitaGetman/tezos-flame-defi/blob/master/plugin/readme.md"}),[]),Object(l.jsx)("div",{className:"plugin",children:Object(l.jsx)("p",{children:"How to use plugin"})})},je=function(){return Object(l.jsx)("div",{children:"TELEGRAM BOT"})},be=function(){return Object(l.jsx)(o.d,{children:Object(l.jsxs)(o.b,{path:"/",element:Object(l.jsx)(d,{}),children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(ue,{})}),Object(l.jsx)(o.b,{path:"create",element:Object(l.jsx)(se,{})}),Object(l.jsx)(o.b,{path:"plugin",element:Object(l.jsx)(de,{})}),Object(l.jsx)(o.b,{path:":linkId",element:Object(l.jsx)(Z,{})}),Object(l.jsx)(o.b,{path:"telegram-bot",element:Object(l.jsx)(je,{})})]})})};n(528);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(be,{})})}),document.getElementById("root"))}},[[529,1,2]]]);
//# sourceMappingURL=main.8d530090.chunk.js.map