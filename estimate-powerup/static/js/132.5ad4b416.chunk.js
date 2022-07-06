"use strict";(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[132],{1014:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(8214),i=n(5861),u=n(4942),a=n(1413),o=n(885),s=n(2791),c=n(5728),l=n(6683),d=n(4305),v=n(5678);var f=n(732),m=n(4303),p=n(146);var h=(0,r.Z)().mark(k);function k(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=(0,r.Z)().keys(e);case 1:if((n.t1=n.t0()).done){n.next=7;break}return t=n.t1.value,n.next=5,t;case 5:n.next=1;break;case 7:case"end":return n.stop()}}),h)}var M="https://api.trello.com/1",w="dadac0f685db6faecaa69b90f19ba321";function Z(e,t,n){var r,i=(0,a.Z)((0,a.Z)({},n),{},{key:w,token:e}),u=Array.from(k(i),(function(e){return e+"="+i[e]})).join("&");return r={url:M+"/cards/".concat(t,"?").concat(u),method:"PUT"},fetch(r.url,(0,a.Z)((0,a.Z)({},r),{},{headers:(0,a.Z)({Accept:"application/json"},null===r||void 0===r?void 0:r.headers)})).then((function(e){return e.json().then((function(t){return(0,a.Z)((0,a.Z)({},e),{},{data:t,request:r})}))}))}var b=n(184);function x(e){var t=(0,p.D)(),n=(0,m.w5)(t,"id","due","dueComplete"),r=n.card,i=n.refresh;return(0,b.jsxs)("button",{className:"complete-work ".concat(e.className),onClick:function(){void 0!==r&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"read,write";return e.getRestApi().isAuthorized().then((function(e){if(!e)throw new Error("unauthorized")})).catch((function(){return e.getRestApi().authorize({scope:t})})).then((function(){return e.getRestApi().getToken()}))}(t).then((function(e){return Z(e,r.id,{due:r.dueComplete?null:r.due?r.due:(new Date).toISOString(),dueComplete:!r.dueComplete})})).catch((function(e){console.error(e)})).then(i)},children:[void 0===r?"loading...":null,void 0!==r?[r.dueComplete?"Uncomplete card":null,r.dueComplete?null:"Complete card"]:null]})}var g=n(6258);function j(e){var t,n=(0,p.D)(),r=(0,g.k)(),i=(0,m.nb)(n,"id");return void 0===(null===(t=r.value)||void 0===t?void 0:t.cardId)||void 0===i||r.value.cardId===i.id?null:(0,b.jsx)("button",{className:"open-work ".concat(e.className),onClick:function(){return n.showCard(r.value.cardId)},children:"Open work card"})}var C=n(8282),E=n(2982),N=n(7762),y=n(1166),A=n(3265);function D(e){var t,n,r,i,u=e.estimate,a=e.member,l=(0,s.useState)(!1),v=(0,o.Z)(l,2),f=v[0],h=v[1],k=(0,s.useState)(),M=(0,o.Z)(k,2),w=M[0],Z=M[1],x=(0,p.D)(),j=(0,m.nb)(x,"id","dueComplete"),C=null!==(t=null===j||void 0===j?void 0:j.dueComplete)&&void 0!==t&&t,D=(0,g.k)(),S=(0,y.DP)((null===(n=D.value)||void 0===n?void 0:n.cardId)===(null===j||void 0===j?void 0:j.id)?null===(r=D.value)||void 0===r?void 0:r.startDate:void 0);(0,s.useEffect)((function(){f&&void 0===w&&x.board("members").then((function(e){var t,n={},r=(0,N.Z)(e.members);try{for(r.s();!(t=r.n()).done;){var i=t.value;n[i.id]=i}}catch(u){r.e(u)}finally{r.f()}Z(n)}))}),[f,w]);var I=(0,d.y7)(u)+S,B=null!==(i=S+u.workMinutes[a.id])&&void 0!==i?i:0,P=(0,d.V9)(u,C,I);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"card-label",children:["Work: ",(0,c.JB)(I)," ",B<I?["(mine: ",(0,c.JB)(B),")"]:null," ",B<I?(0,b.jsx)("span",{className:"work-details link-like",onClick:function(){return h((function(e){return!e}))},children:"details"}):null,C?null:[" | "," Remaining: ",(0,c.JB)(P)],C?[" | ",(0,A.W)({delta:(0,A.M)({cardId:null===j||void 0===j?void 0:j.id,estimate:u,totalWorkMinutes:I})})]:null]}),f&&void 0!==w?(0,b.jsx)("div",{children:(0,E.Z)((0,d.Wm)(u)).filter((function(e){return e.minutes>0})).map((function(e){var t,n=w[e.memberId];return(0,b.jsxs)("div",{children:[null!==(t=null===n||void 0===n?void 0:n.fullName)&&void 0!==t?t:"<missing>",n&&" ",void 0!==n?"(".concat(n.username,")"):"",": ",(0,c.JB)(e.minutes)]},e.memberId)}))}):null]})}var S=n(790);function I(e){var t,n,r;return(0,b.jsxs)("div",{className:"time-buttons ".concat(null!==(t=e.className)&&void 0!==t?t:""),children:[(0,b.jsx)("div",{className:"label",children:e.label}),(0,b.jsx)("button",{onClick:function(t){return e.action(t,(function(e,t){return t}))},children:null!==(n=e.setLabel)&&void 0!==n?n:"Set"}),(0,b.jsx)("button",{onClick:function(t){return e.action(t,(function(e,t){return e+t}))},children:"+"}),(0,b.jsx)("button",{onClick:function(t){return e.action(t,(function(e,t){return e-t}))},children:"-"}),(0,b.jsx)("button",{onClick:e.clearAction,children:null!==(r=e.clearLabel)&&void 0!==r?r:"Clear"})]})}function B(){var e=(0,p.D)(),t=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,s.useState)(),u=(0,o.Z)(n,2),a=u[0],c=u[1],l=(0,s.useState)(""),f=(0,o.Z)(l,2),m=f[0],p=f[1],h=(0,s.useMemo)((function(){return(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p("loading..."),t.next=3,(0,d.oc)(e);case 3:n=t.sent,c(n),p("");case 6:case"end":return t.stop()}}),t)})))}),v.w),k=(0,s.useMemo)((function(){return function(n){if(void 0!==a){var r=n(a),i={estimateMinutes:r.estimateMinutes-a.estimateMinutes,updatedEstimateMinutes:r.updatedEstimateMinutes-a.updatedEstimateMinutes,workMinutes:{}};for(var u in r.workMinutes){var o;i.workMinutes[u]=r.workMinutes[u]-(null!==(o=a.workMinutes[u])&&void 0!==o?o:0)}if(t)return p("saving..."),(0,d.oc)(e).then((function(t){var n={estimateMinutes:t.estimateMinutes+i.estimateMinutes,updatedEstimateMinutes:t.updatedEstimateMinutes+i.updatedEstimateMinutes,workMinutes:{}};for(var r in i.workMinutes){var u;n.workMinutes[r]=(null!==(u=t.workMinutes[r])&&void 0!==u?u:0)+i.workMinutes[r]}return(0,d.Eo)(e,n)})).then((function(e){return c(e),p("saved!"),setTimeout((function(){return p("")}),1e3),i})).catch((function(t){p(""),e.alert({display:"error",message:"error during save: ".concat(t)})}))}}}),[a,t]);return(0,s.useMemo)((function(){return{value:a,set:k,feedback:m,refresh:h}}),[a,m])}(e),n=(0,s.useState)(""),m=(0,o.Z)(n,2),h=m[0],k=m[1],M=(0,l.K)(e,"id");if((0,S.cM)(e,t.refresh),void 0===t.value)return(0,b.jsx)("div",{children:t.feedback});function w(t){var n=(0,c.Nw)(h);if(!isNaN(n)){var r=t(n);return k(""),r}e.alert({display:"error",message:"invalid input",duration:4})}function Z(e){return g.apply(this,arguments)}function g(){return g=(0,i.Z)((0,r.Z)().mark((function t(n){var u,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.action();case 2:if(u=t.sent){t.next=5;break}return t.abrupt("return");case 5:if(void 0!==(o=u.workMinutes[M.id])){t.next=8;break}return t.abrupt("return");case 8:e.popup({type:"confirm",title:"Add to session?",message:"Should this work change count in your work session?",confirmText:"Yes",onConfirm:function(t){return t.closePopup(),(0,C.mY)(e,{action:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,a.Z)((0,a.Z)({},t),{},{workMinutes:t.workMinutes+o}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),hoursPerDay:c.xZ,mouseEvent:n.mouseEvent})},cancelText:"No",onCancel:function(e){return e.closePopup()},mouseEvent:n.mouseEvent.nativeEvent});case 9:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}var E=0!==t.value.updatedEstimateMinutes&&t.value.updatedEstimateMinutes!==t.value.estimateMinutes;return(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"card-input-header",children:[(0,b.jsx)("input",{value:h,onChange:function(e){return k(e.target.value)},placeholder:"input for all buttons..."}),(0,b.jsx)(f.b,{onEstimateChanged:t.refresh}),(0,b.jsxs)("div",{className:"top-right",children:[(0,b.jsx)(j,{}),(0,b.jsx)(x,{})]})]}),(0,b.jsx)(I,{label:(0,b.jsxs)(b.Fragment,{children:[E&&"Original ","Estimate: ",(0,c.JB)(t.value.estimateMinutes),E?[" | ","Updated: ",(0,c.JB)(t.value.updatedEstimateMinutes)]:null]}),action:function(n,r){return w((function(i){0!==t.value.estimateMinutes||E?e.popup({type:"confirm",title:"Update estimate?",message:"Do you want to update the estimate or change the original?",confirmText:"Update",onConfirm:function(e){return t.set((function(e){return(0,a.Z)((0,a.Z)({},e),{},{updatedEstimateMinutes:r((0,d.zR)(e),i)})})),e.closePopup()},cancelText:"Change original",onCancel:function(e){return t.set((function(e){return(0,a.Z)((0,a.Z)({},e),{},{estimateMinutes:r((0,d.zR)(e),i),updatedEstimateMinutes:0})})),e.closePopup()},mouseEvent:n.nativeEvent}):t.set((function(e){return(0,a.Z)((0,a.Z)({},e),{},{estimateMinutes:r(e.estimateMinutes,i)})}))}))},clearAction:function(){return t.set((function(e){return(0,a.Z)((0,a.Z)({},e),{},{estimateMinutes:0,updatedEstimateMinutes:0})}))}}),void 0!==M?(0,b.jsx)(I,{label:(0,b.jsx)(D,{estimate:t.value,member:M}),action:function(e,n){return Z({action:function(){return function(e){return w((function(n){return t.set((function(t){var r;return(0,a.Z)((0,a.Z)({},t),{},{workMinutes:(0,a.Z)((0,a.Z)({},t.workMinutes),{},(0,u.Z)({},M.id,e(null!==(r=t.workMinutes[M.id])&&void 0!==r?r:0,n)))})}))}))}(n)},mouseEvent:e})},clearAction:function(e){return Z({action:function(){return t.set((function(e){return(0,a.Z)((0,a.Z)({},e),{},{workMinutes:(0,a.Z)((0,a.Z)({},e.workMinutes),{},(0,u.Z)({},M.id,0))})}))},mouseEvent:e})},clearLabel:"Clear mine",className:"work"}):null,Boolean(t.feedback)?(0,b.jsx)("div",{children:t.feedback}):null]})}}}]);
//# sourceMappingURL=132.5ad4b416.chunk.js.map