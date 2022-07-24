"use strict";(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[953],{9225:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(1413),i=n(885),u=n(2791),a=n(5728),o=n(6683),s=n(8214),c=n(5861),l=n(4305),d=n(5678);var v=n(732),f=n(4303),m=n(146);var p=(0,s.Z)().mark(h);function h(e){var t;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=(0,s.Z)().keys(e);case 1:if((n.t1=n.t0()).done){n.next=7;break}return t=n.t1.value,n.next=5,t;case 5:n.next=1;break;case 7:case"end":return n.stop()}}),p)}var k="https://api.trello.com/1",Z="dadac0f685db6faecaa69b90f19ba321";function M(e,t,n){var i,u=(0,r.Z)((0,r.Z)({},n),{},{key:Z,token:e}),a=Array.from(h(u),(function(e){return e+"="+u[e]})).join("&");return i={url:k+"/cards/".concat(t,"?").concat(a),method:"PUT"},fetch(i.url,(0,r.Z)((0,r.Z)({},i),{},{headers:(0,r.Z)({Accept:"application/json"},null===i||void 0===i?void 0:i.headers)})).then((function(e){return e.json().then((function(t){var n=e;return n.data=t,n.request=i,n}))}))}var x=n(184);function w(e){var t=(0,m.D)(),n=(0,f.nb)(t,"id","due"),r=(0,f.Fo)(t);return(0,x.jsxs)("button",{className:"complete-work ".concat(e.className),onClick:function(){void 0!==n&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"read,write";return e.getRestApi().isAuthorized().then((function(e){if(!e)throw new Error("unauthorized")})).catch((function(){return e.getRestApi().authorize({scope:t})})).then((function(){return e.getRestApi().getToken()}))}(t).then((function(e){return M(e,n.id,{due:r.data?null:n.due?n.due:(new Date).toISOString(),dueComplete:!r.data})})).then((function(e){e.ok&&r.setData(e.data.dueComplete)})).catch((function(e){console.error(e)}))},children:[void 0===r.data?"loading...":null,void 0!==r.data?[r.data?"Uncomplete card":null,r.data?null:"Complete card"]:null]})}var b=n(6258);function j(e){var t,n=(0,m.D)(),r=(0,b.k)(),i=(0,f.nb)(n,"id");return void 0===(null===(t=r.value)||void 0===t?void 0:t.cardId)||void 0===i||r.value.cardId===i.id?null:(0,x.jsx)("button",{className:"open-work ".concat(e.className),onClick:function(){return n.showCard(r.value.cardId)},children:"Open work card"})}var E=n(790);function g(e){var t,n,r;return(0,x.jsxs)("div",{className:"time-buttons ".concat(null!==(t=e.className)&&void 0!==t?t:""),children:[(0,x.jsx)("div",{className:"label",children:e.label}),(0,x.jsx)("button",{onClick:function(t){return e.action(t,(function(e,t){return t}))},children:null!==(n=e.setLabel)&&void 0!==n?n:"Set"}),(0,x.jsx)("button",{onClick:function(t){return e.action(t,(function(e,t){return e+t}))},children:"+"}),(0,x.jsx)("button",{onClick:function(t){return e.action(t,(function(e,t){return e-t}))},children:"-"}),(0,x.jsx)("button",{onClick:e.clearAction,children:null!==(r=e.clearLabel)&&void 0!==r?r:"Clear"})]})}var C=n(4942),y=n(9697);function N(e){var t,n=(0,m.D)();return(0,x.jsx)("button",{className:"".concat(null!==(t=e.className)&&void 0!==t?t:""),onClick:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(i){var u,o,d;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.bS)(n);case 2:u=t.sent,o=[],u&&(d=(0,y.Zd)(u),o.push({text:"Add time since last input as work (".concat((0,a.JB)(d),")"),callback:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(i){var a,o,c,d,v;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.card("id");case 2:return c=t.sent,t.next=5,n.member("id");case 5:return d=t.sent,t.next=8,(0,l.oc)(n,c.id);case 8:return v=t.sent,t.next=11,(0,l.Eo)(n,(0,r.Z)((0,r.Z)({},v),{},{workMinutes:(0,r.Z)((0,r.Z)({},v.workMinutes),{},(0,C.Z)({},d.id,(null!==(a=v.workMinutes[d.id])&&void 0!==a?a:0)+(0,y.Zd)(u)))}));case 11:return null===(o=e.onRefresh)||void 0===o||o.call(e),t.next=14,i.closePopup();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),n.popup({title:"More functions",items:o,mouseEvent:i.nativeEvent});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"\u22ef"})}var S=n(8282),D=n(2982),A=n(7762),B=n(1166),I=n(3265);function P(e){var t,n,r,o,s=e.estimate,c=e.member,d=(0,u.useState)(!1),v=(0,i.Z)(d,2),p=v[0],h=v[1],k=(0,u.useState)(),Z=(0,i.Z)(k,2),M=Z[0],w=Z[1],j=(0,m.D)(),E=(0,f.nb)(j,"id"),g=null!==(t=(0,f.Fo)(j).data)&&void 0!==t&&t,C=(0,b.k)(),y=(0,B.DP)((null===(n=C.value)||void 0===n?void 0:n.cardId)===(null===E||void 0===E?void 0:E.id)?null===(r=C.value)||void 0===r?void 0:r.startDate:void 0);(0,u.useEffect)((function(){p&&void 0===M&&j.board("members").then((function(e){var t,n={},r=(0,A.Z)(e.members);try{for(r.s();!(t=r.n()).done;){var i=t.value;n[i.id]=i}}catch(u){r.e(u)}finally{r.f()}w(n)}))}),[p,M]);var N=(0,l.y7)(s)+y,S=null!==(o=y+s.workMinutes[c.id])&&void 0!==o?o:0,P=(0,l.V9)(s,g,N);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"card-label",children:["Work: ",(0,a.JB)(N)," ",S<N?["(mine: ",(0,a.JB)(S),")"]:null," ",S<N?(0,x.jsx)("span",{className:"work-details link-like",onClick:function(){return h((function(e){return!e}))},children:"details"}):null,g?null:[" | "," Remaining: ",(0,a.JB)(P)],g?[" | ",(0,I.W)({delta:(0,I.M)({cardId:null===E||void 0===E?void 0:E.id,estimate:s,totalWorkMinutes:N})})]:null]}),p&&void 0!==M?(0,x.jsx)("div",{children:(0,D.Z)((0,l.Wm)(s)).filter((function(e){return e.minutes>0})).map((function(e){var t,n=M[e.memberId];return(0,x.jsxs)("div",{children:[null!==(t=null===n||void 0===n?void 0:n.fullName)&&void 0!==t?t:"<missing>",n&&" ",void 0!==n?"(".concat(n.username,")"):"",": ",(0,a.JB)(e.minutes)]},e.memberId)}))}):null]})}function R(e){var t,n=e.estimate,i=e.member,u=(0,m.D)();if(void 0===n.value)return(0,x.jsx)("div",{children:n.feedback});var o=(0,l.y7)(n.value),d=null!==(t=n.value.workMinutes[i.id])&&void 0!==t?t:0;function v(e){return f.apply(this,arguments)}function f(){return f=(0,c.Z)((0,s.Z)().mark((function e(t){var n,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.action();case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:if(void 0!==(o=n.workMinutes[i.id])){e.next=8;break}return e.abrupt("return");case 8:u.popup({type:"confirm",title:"Add to session?",message:"Should this work change count in your work session?",confirmText:"Yes",onConfirm:function(e){return e.closePopup(),(0,S.mY)(u,{action:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,r.Z)((0,r.Z)({},t),{},{workMinutes:t.workMinutes+o}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),hoursPerDay:a.xZ,mouseEvent:t.mouseEvent})},cancelText:"No",onCancel:function(e){return e.closePopup()},mouseEvent:t.mouseEvent.nativeEvent});case 9:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}return(0,x.jsx)(g,{label:(0,x.jsx)(P,{estimate:n.value,member:i}),action:function(t,o){return v({action:function(){return(0,a.MG)(u,e.inputState,(function(e){return n.set((function(t){var n;return(0,r.Z)((0,r.Z)({},t),{},{workMinutes:(0,r.Z)((0,r.Z)({},t.workMinutes),{},(0,C.Z)({},i.id,o(null!==(n=t.workMinutes[i.id])&&void 0!==n?n:0,e)))})}))}))},mouseEvent:t})},clearAction:function(e){return v({action:function(){return n.set((function(e){return(0,r.Z)((0,r.Z)({},e),{},{workMinutes:(0,r.Z)((0,r.Z)({},e.workMinutes),{},(0,C.Z)({},i.id,0))})}))},mouseEvent:e})},setLabel:d<o?"Set mine":void 0,clearLabel:d<o?"Clear mine":void 0,className:e.className})}function J(){var e=(0,m.D)(),t=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,u.useState)(),r=(0,i.Z)(n,2),a=r[0],o=r[1],v=(0,u.useState)(""),f=(0,i.Z)(v,2),m=f[0],p=f[1],h=(0,u.useMemo)((function(){return(0,c.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p("loading..."),t.next=3,(0,l.oc)(e);case 3:n=t.sent,o(n),p("");case 6:case"end":return t.stop()}}),t)})))}),d.w),k=(0,u.useMemo)((function(){return function(n){if(void 0!==a){var r=n(a),i={estimateMinutes:r.estimateMinutes-a.estimateMinutes,updatedEstimateMinutes:r.updatedEstimateMinutes-a.updatedEstimateMinutes,workMinutes:{}};for(var u in r.workMinutes){var s;i.workMinutes[u]=r.workMinutes[u]-(null!==(s=a.workMinutes[u])&&void 0!==s?s:0)}if(t)return p("saving..."),(0,l.oc)(e).then((function(t){var n={estimateMinutes:t.estimateMinutes+i.estimateMinutes,updatedEstimateMinutes:t.updatedEstimateMinutes+i.updatedEstimateMinutes,workMinutes:{}};for(var r in i.workMinutes){var u;n.workMinutes[r]=(null!==(u=t.workMinutes[r])&&void 0!==u?u:0)+i.workMinutes[r]}return(0,l.Eo)(e,n)})).then((function(e){return o(e),p("saved!"),setTimeout((function(){return p("")}),1e3),i})).catch((function(t){p(""),e.alert({display:"error",message:"error during save: ".concat(t)})}))}}}),[a,t]);return(0,u.useMemo)((function(){return{value:a,set:k,feedback:m,refresh:h}}),[a,m])}(e),n=(0,u.useState)(""),f=(0,i.Z)(n,2),p=f[0],h=f[1],k=(0,o.K)(e,"id");if((0,E.cM)(e,t.refresh),void 0===t.value)return(0,x.jsx)("div",{children:t.feedback});var Z=0!==t.value.updatedEstimateMinutes&&t.value.updatedEstimateMinutes!==t.value.estimateMinutes;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"card-input-header",children:[(0,x.jsx)("input",{value:p,onChange:function(e){return h(e.target.value)},placeholder:"input for all buttons..."}),(0,x.jsx)(v.b,{onEstimateChanged:t.refresh}),(0,x.jsxs)("div",{className:"top-right",children:[(0,x.jsx)(j,{}),(0,x.jsx)(w,{}),(0,x.jsx)(N,{onRefresh:t.refresh})]})]}),(0,x.jsx)(g,{label:(0,x.jsxs)(x.Fragment,{children:[Z&&"Original ","Estimate: ",(0,a.JB)(t.value.estimateMinutes),Z?[" | ","Updated: ",(0,a.JB)(t.value.updatedEstimateMinutes)]:null]}),action:function(i,u){return(0,a.MG)(e,n,(function(n){0!==t.value.estimateMinutes||Z?e.popup({type:"confirm",title:"Update estimate?",message:"Do you want to update the estimate or change the original?",confirmText:"Update",onConfirm:function(e){return t.set((function(e){return(0,r.Z)((0,r.Z)({},e),{},{updatedEstimateMinutes:u((0,l.zR)(e),n)})})),e.closePopup()},cancelText:"Change original",onCancel:function(e){return t.set((function(e){return(0,r.Z)((0,r.Z)({},e),{},{estimateMinutes:u((0,l.zR)(e),n),updatedEstimateMinutes:0})})),e.closePopup()},mouseEvent:i.nativeEvent}):t.set((function(e){return(0,r.Z)((0,r.Z)({},e),{},{estimateMinutes:u(e.estimateMinutes,n)})}))}))},clearAction:function(){return t.set((function(e){return(0,r.Z)((0,r.Z)({},e),{},{estimateMinutes:0,updatedEstimateMinutes:0})}))}}),void 0!==k?(0,x.jsx)(R,{estimate:t,member:k,inputState:n,className:"work"}):null,Boolean(t.feedback)?(0,x.jsx)("div",{children:t.feedback}):null]})}}}]);
//# sourceMappingURL=953.fe6c51f1.chunk.js.map