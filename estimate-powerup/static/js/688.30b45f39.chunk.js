"use strict";(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[688,577],{1868:(t,e,a)=>{a.d(e,{P:()=>r});a(2791);var n=a(184);function i(){return(0,n.jsxs)(n.Fragment,{children:["Served from: ",window.location.host]})}function o(){return(0,n.jsxs)(n.Fragment,{children:["Version: ","0.15.5"]})}function r(t){return(0,n.jsxs)("div",{className:t.className,children:[(0,n.jsx)("span",{className:"deploy-text",children:(0,n.jsx)(o,{})}),(0,n.jsx)("span",{className:"deploy-text",children:(0,n.jsx)(i,{})})]})}},9688:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var n=a(2431),i=a(1675);var o=a(4305),r=a(5728),l=a(9697),s=a(3265);function c(t,e){return[{dynamic:()=>async function(t,e){const a=await t.card("id","dueComplete"),n=await(0,o.oc)(t),i=await(0,o.X8)(t);let c=(0,o.y7)(n),d=(0,o.V9)(n,a.dueComplete,c);if(0===n.estimateMinutes&&0===c&&(null===i||void 0===i?void 0:i.cardId)!==a.id)throw t.NotHandled();if((null===i||void 0===i?void 0:i.cardId)===a.id){const t=(0,l.Zd)(i.startDate);c+=t,d-=t}const u=c>0?"| W: ".concat((0,r.JB)(c)):"",p=(0,s.M)({cardId:a.id,estimate:n,totalWorkMinutes:c}),m=a.dueComplete?0!==p?"| ".concat((0,s.W)({delta:p,short:!0})):"":"| R: ".concat((0,r.JB)(d));return{text:"E: ".concat((0,r.JB)(n.updatedEstimateMinutes||n.estimateMinutes)," ").concat(u," ").concat(m),icon:e,color:a.id===(null===i||void 0===i?void 0:i.cardId)?"red":a.dueComplete?p>=0?"green":"yellow":void 0,refresh:10}}(t,e.icon.light)}]}const d={icon:{dark:(0,n.G)("/logo192.png",{absolute:!0}),light:(0,n.G)("/logo192.png",{absolute:!0})}};var u=a(2168),p=a(2577);console.log("initializing capabilities"),window.TrelloPowerUp.initialize({"board-buttons":t=>{return[{icon:{dark:(e=d).icon.dark,light:e.icon.light},text:"Estimate",callback:t=>t.modal({title:"Estimate",url:t.signUrl((0,i.u)("/board-page")),fullscreen:!1,height:400}),condition:"edit"}];var e},"card-back-section":t=>function(t,e){return{title:"Estimate",icon:e.icon.dark,content:{type:"iframe",url:t.signUrl((0,i.u)("/card-back-section",{absolute:!0})),height:210}}}(t,d),"card-badges":t=>c(t,d),"list-actions":t=>async function(t,e){return[{text:"Show list estimate summary",callback:async t=>t.popup({title:"List estimate summary",url:t.signUrl((0,i.u)("/list-summary"))})}]}()}),(0,u.Q)();const m=p.default},2577:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});a(2791),a(657);var n=a(7861),i=a(7807),o=a(1868),r=a(184);function l(){return(0,r.jsx)("div",{className:"App",children:(0,r.jsxs)("header",{className:"App-header",children:[(0,r.jsx)("img",{src:n,className:"App-logo",alt:"logo"}),(0,r.jsx)("p",{children:"This is the Estimate Trello Powerup welcome page."}),(0,r.jsx)(o.P,{}),(0,r.jsx)(i.F,{to:"/dummy",children:"Dummy page"}),(0,r.jsx)(i.F,{to:"/board-page",children:"Board page"}),(0,r.jsx)(i.F,{to:"/card-back-section",children:"Card back section page"})]})})}},7807:(t,e,a)=>{a.d(e,{F:()=>o});a(2791);var n=a(1675),i=a(184);function o(t){return(0,i.jsx)("a",{...t,href:(0,n.u)(t.to),children:t.children})}},1675:(t,e,a)=>{a.d(e,{u:()=>i});var n=a(2431);function i(t,e){return(0,n.G)("?path="+t,e)}},9005:(t,e,a)=>{function n(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return e.replaceAll("yyyy",t.getFullYear().toString()).replaceAll("MM",(t.getMonth()+1).toString().padStart(2,"0")).replaceAll("dd",t.getDate().toString().padStart(2,"0")).replaceAll("hh",t.getHours().toString().padStart(2,"0")).replaceAll("mm",t.getMinutes().toString().padStart(2,"0")).replaceAll("ss",t.getSeconds().toString().padStart(2,"0"))}a.d(e,{p:()=>n})},2168:(t,e,a)=>{a.d(e,{Q:()=>o,b:()=>r});var n=a(9005);const i="exit.datetime";function o(){window.addEventListener("pagehide",(t=>{localStorage.setItem(i,JSON.stringify(new Date))}));const t=r();console.log(i+": "+(t?(0,n.p)(t,"yyyy-MM-dd hh:mm:ss"):"null"))}function r(){const t=JSON.parse(localStorage.getItem(i));return t?new Date(t):null}},2431:(t,e,a)=>{function n(t,e){const a="/estimate-powerup"+t;return null!==e&&void 0!==e&&e.absolute?window.location.origin+a:a}a.d(e,{G:()=>n})},657:()=>{},7861:(t,e,a)=>{t.exports=a.p+"static/media/e.9f14f730419b76f670f5.png"}}]);
//# sourceMappingURL=688.30b45f39.chunk.js.map