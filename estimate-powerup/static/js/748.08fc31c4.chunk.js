"use strict";(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[748],{9748:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(4942),i=t(1413),u=t(8214),o=t(5861),s=t(885),a=t(2791),c=t(5728),d=t(6683),l=t(4305),f=t(5678);var v=t(1880),m=t(4303),p=t(146);var h=(0,u.Z)().mark(k);function k(e){var n;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=(0,u.Z)().keys(e);case 1:if((t.t1=t.t0()).done){t.next=7;break}return n=t.t1.value,t.next=5,n;case 5:t.next=1;break;case 7:case"end":return t.stop()}}),h)}var w="https://api.trello.com/1",Z="dadac0f685db6faecaa69b90f19ba321";function x(e,n,t){var r,u=(0,i.Z)((0,i.Z)({},t),{},{key:Z,token:e}),o=Array.from(k(u),(function(e){return e+"="+u[e]})).join("&");return r={url:w+"/cards/".concat(n,"?").concat(o),method:"PUT"},fetch(r.url,(0,i.Z)((0,i.Z)({},r),{},{headers:(0,i.Z)({Accept:"application/json"},null===r||void 0===r?void 0:r.headers)})).then((function(e){return e.json().then((function(n){return(0,i.Z)((0,i.Z)({},e),{},{data:n,request:r})}))}))}var b=t(184);function C(e){var n=(0,p.D)(),t=(0,m.w5)(n,"id","due","dueComplete"),r=t.card,i=t.refresh;return(0,b.jsx)("button",{className:"complete-work ".concat(e.className),onClick:function(){void 0!==r&&function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"read,write";return e.getRestApi().isAuthorized().then((function(e){if(!e)throw new Error("unauthorized")})).catch((function(){return e.getRestApi().authorize({scope:n})})).then((function(){return e.getRestApi().getToken()}))}(n).then((function(e){return x(e,r.id,{due:r.dueComplete?null:r.due?r.due:(new Date).toISOString(),dueComplete:!r.dueComplete})})).catch((function(e){console.error(e)})).then(i)},children:void 0===r?"loading...":r.dueComplete?"Uncomplete card":"Complete card"})}var j=t(6258);function M(e){var n,t=(0,p.D)(),r=(0,j.k)(),i=(0,m.nb)(t,"id");return void 0===(null===(n=r.value)||void 0===n?void 0:n.cardId)||void 0===i||r.value.cardId===i.id?null:(0,b.jsx)("button",{className:"open-work ".concat(e.className),onClick:function(){return t.showCard(r.value.cardId)},children:"Open work card"})}var g=t(8282),N=t(2982),E=t(7762),y=t(1166);function S(e){var n,t,r,i,u=(0,p.D)(),o=e.estimate,d=e.member,f=(0,a.useState)(!1),v=(0,s.Z)(f,2),h=v[0],k=v[1],w=(0,a.useState)(),Z=(0,s.Z)(w,2),x=Z[0],C=Z[1],M=(0,m.nb)(u,"id","dueComplete"),g=(0,j.k)(),S=(0,y.DP)(null===(n=g.value)||void 0===n?void 0:n.startDate);(null===(t=g.value)||void 0===t?void 0:t.cardId)!==(null===M||void 0===M?void 0:M.id)&&(S=0),(0,a.useEffect)((function(){h&&void 0===x&&u.board("members").then((function(e){var n,t={},r=(0,E.Z)(e.members);try{for(r.s();!(n=r.n()).done;){var i=n.value;t[i.id]=i}}catch(u){r.e(u)}finally{r.f()}C(t)}))}),[h,x]);var D=(0,l.y7)(o)+S,A=null!==(r=S+o.workMinutes[d.id])&&void 0!==r?r:0,I=(0,l.V9)(o,null!==(i=null===M||void 0===M?void 0:M.dueComplete)&&void 0!==i&&i,D);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"card-label",children:["Work: ",(0,c.JB)(D)," ",A<D&&"(mine: ".concat((0,c.JB)(A),")")," ",A<D&&(0,b.jsx)("span",{className:"work-details link-like",onClick:function(){return k((function(e){return!e}))},children:"details"})," | "," Remaining: ",(0,c.JB)(I)]}),h&&void 0!==x&&(0,b.jsx)("div",{children:(0,N.Z)((0,l.Wm)(o)).filter((function(e){return e.minutes>0})).map((function(e){var n,t=x[e.memberId];return(0,b.jsxs)("div",{children:[null!==(n=null===t||void 0===t?void 0:t.fullName)&&void 0!==n?n:"<missing>",t&&" ",void 0!==t?"(".concat(t.username,")"):"",": ",(0,c.JB)(e.minutes)]},e.memberId)}))})]})}var D=t(1640);function A(){var e=(0,p.D)(),n=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,a.useState)(),r=(0,s.Z)(t,2),i=r[0],c=r[1],d=(0,a.useState)(""),v=(0,s.Z)(d,2),m=v[0],p=v[1],h=(0,a.useMemo)((function(){return(0,o.Z)((0,u.Z)().mark((function n(){var t;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.oc)(e);case 2:t=n.sent,c(t);case 4:case"end":return n.stop()}}),n)})))}),f.w),k=(0,a.useMemo)((function(){return function(t){if(void 0!==i){var r=t(i),u={estimateMinutes:r.estimateMinutes-i.estimateMinutes,workMinutes:{}};for(var o in r.workMinutes){var s;u.workMinutes[o]=r.workMinutes[o]-(null!==(s=i.workMinutes[o])&&void 0!==s?s:0)}if(n)return p("saving..."),(0,l.oc)(e).then((function(n){var t={estimateMinutes:n.estimateMinutes+u.estimateMinutes,workMinutes:{}};for(var r in u.workMinutes){var i;t.workMinutes[r]=(null!==(i=n.workMinutes[r])&&void 0!==i?i:0)+u.workMinutes[r]}return(0,l.Eo)(e,t)})).then((function(e){return c(e),p("saved!"),setTimeout((function(){return p("")}),1e3),u})).catch((function(n){p(""),e.alert({display:"error",message:"error during save: ".concat(n)})}))}}}),[i,n]);return(0,a.useMemo)((function(){return{value:i,set:k,feedback:m,refresh:h}}),[i,m])}(e),t=(0,a.useState)(""),m=(0,s.Z)(t,2),h=m[0],k=m[1],w=(0,d.K)(e,"id");function Z(n){var t=(0,c.Nw)(h);if(!isNaN(t)){var r=n(t);return k(""),r}e.alert({display:"error",message:"invalid input",duration:4})}function x(e){Z((function(t){n.set((function(n){return(0,i.Z)((0,i.Z)({},n),{},{estimateMinutes:e(n.estimateMinutes,t)})}))}))}function j(e){N({action:function(){return t=e.computeNewWork,Z((function(e){return n.set((function(n){var u;return(0,i.Z)((0,i.Z)({},n),{},{workMinutes:(0,i.Z)((0,i.Z)({},n.workMinutes),{},(0,r.Z)({},w.id,t(null!==(u=n.workMinutes[w.id])&&void 0!==u?u:0,e)))})}))}));var t},askConfirm:e.askConfirm,mouseEvent:e.mouseEvent})}function N(e){return E.apply(this,arguments)}function E(){return E=(0,o.Z)((0,u.Z)().mark((function n(t){var r,s,a;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=function(){return(0,g.m)(e,{action:function(){var e=(0,o.Z)((0,u.Z)().mark((function e(n){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.Z)((0,i.Z)({},n),{},{workMinutes:n.workMinutes+s}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),hoursPerDay:c.xZ,mouseEvent:t.mouseEvent})},n.next=3,t.action();case 3:if(r=n.sent){n.next=6;break}return n.abrupt("return");case 6:if(void 0!==(s=r.workMinutes[w.id])){n.next=9;break}return n.abrupt("return");case 9:t.askConfirm?e.popup({type:"confirm",title:"Add to session?",message:"Should this work change count in your work session?",confirmText:"Yes",onConfirm:function(e){return e.closePopup(),a()},cancelText:"No",onCancel:function(e){return e.closePopup()},mouseEvent:t.mouseEvent.nativeEvent}):a();case 10:case"end":return n.stop()}}),n)}))),E.apply(this,arguments)}return(0,D.D)((function(){n.refresh(),e.render((0,o.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.refresh());case 1:case"end":return e.stop()}}),e)}))))})),(0,b.jsxs)("div",{children:[void 0===n.value&&(0,b.jsx)("p",{children:"Loading..."}),void 0!==n.value&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"card-input-header",children:[(0,b.jsx)("input",{value:h,onChange:function(e){return k(e.target.value)},placeholder:"input for all buttons..."}),(0,b.jsx)(v.b,{onEstimateChanged:n.refresh}),(0,b.jsxs)("div",{className:"top-right",children:[(0,b.jsx)(M,{}),(0,b.jsx)(C,{})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"card-label",children:["Estimate: ",(0,c.JB)(n.value.estimateMinutes)]}),(0,b.jsx)("button",{onClick:function(){return x((function(e,n){return n}))},children:"Set"}),(0,b.jsx)("button",{onClick:function(){return x((function(e,n){return e+n}))},children:"+"}),(0,b.jsx)("button",{onClick:function(){return x((function(e,n){return e-n}))},children:"-"}),(0,b.jsx)("button",{onClick:function(){return n.set((function(e){return(0,i.Z)((0,i.Z)({},e),{},{estimateMinutes:0})}))},children:"Clear"})]}),void 0!==w&&(0,b.jsxs)("div",{children:[(0,b.jsx)(S,{estimate:n.value,member:w}),(0,b.jsx)("button",{onClick:function(e){return j({computeNewWork:function(e,n){return n},askConfirm:!0,mouseEvent:e})},children:"Set"}),(0,b.jsx)("button",{onClick:function(e){return j({computeNewWork:function(e,n){return e+n},askConfirm:!1,mouseEvent:e})},children:"+"}),(0,b.jsx)("button",{onClick:function(e){return j({computeNewWork:function(e,n){return e-n},askConfirm:!0,mouseEvent:e})},children:"-"}),(0,b.jsx)("button",{onClick:function(e){return N({action:function(){return n.set((function(e){return(0,i.Z)((0,i.Z)({},e),{},{workMinutes:(0,i.Z)((0,i.Z)({},e.workMinutes),{},(0,r.Z)({},w.id,0))})}))},askConfirm:!0,mouseEvent:e})},children:"Clear mine"})]}),n.feedback&&(0,b.jsx)("div",{children:n.feedback})]})]})}}}]);
//# sourceMappingURL=748.08fc31c4.chunk.js.map