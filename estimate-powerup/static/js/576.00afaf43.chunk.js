(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[576],{1868:function(e,t,n){"use strict";n.d(t,{P:function(){return s}});n(2791);var r=n(184);function a(){return(0,r.jsxs)(r.Fragment,{children:["Served from: ",window.location.host]})}function u(){return(0,r.jsxs)(r.Fragment,{children:["Version: ","0.15.4"]})}function s(e){return(0,r.jsxs)("div",{className:e.className,children:[(0,r.jsx)("span",{className:"deploy-text",children:(0,r.jsx)(u,{})}),(0,r.jsx)("span",{className:"deploy-text",children:(0,r.jsx)(a,{})})]})}},4584:function(e,t,n){"use strict";n.d(t,{l:function(){return o}});n(2791);var r=n(6258),a=n(1166),u=n(5728),s=n(3265),i=n(184);function o(e){var t,n,o=e.summary,c=(0,r.k)(),l=(0,a.DP)(null===(t=c.value)||void 0===t?void 0:t.startDate);if(!o)return null;var f={estimateMinutes:o.estimateMinutes,updatedEstimateMinutes:o.updatedEstimateMinutes,workMinutes:o.workMinutes+l,remainingMinutes:o.remainingMinutes-l,deltaMinutes:o.deltaMinutes},d=(null!==(n=e.margin)&&void 0!==n?n:0)>0?e.margin*o.estimateMinutes:0,p=d>0&&f.deltaMinutes<0?Math.min(-f.deltaMinutes,d):0,v=d-p,m=f.updatedEstimateMinutes>0&&f.updatedEstimateMinutes!==f.estimateMinutes;return(0,i.jsxs)("div",{className:e.className,children:[(0,i.jsxs)("div",{children:[m&&"Original ","Estimate: ",(0,u.JB)(f.estimateMinutes+d),d>0?[" "," (without margin: ",(0,u.JB)(f.estimateMinutes),")"]:null]}),m?(0,i.jsxs)("div",{children:["Updated Estimate: ",(0,u.JB)(f.updatedEstimateMinutes+v)]}):null,(0,i.jsxs)("div",{children:["Work: ",(0,u.JB)(f.workMinutes)]}),(0,i.jsxs)("div",{children:["Remaining: ",(0,u.JB)(f.remainingMinutes+v),d>0&&v>0?[" "," (without margin: ",(0,u.JB)(f.remainingMinutes),")"]:null,0===v?[" "," (no margin left)"]:null]}),(0,i.jsxs)("div",{children:[(0,s.W)({delta:o.deltaMinutes>=0?o.deltaMinutes:o.deltaMinutes+Math.min(-o.deltaMinutes,v)}),p>0?[v>0?[" "," (without margin ",(0,s.W)({delta:o.deltaMinutes}),")"]:null,0===v?[" "," (no margin left)"]:null]:null]})]})}},732:function(e,t,n){"use strict";n.d(t,{b:function(){return x}});var r=n(8214),a=n(4942),u=n(1413),s=n(5861),i=(n(2791),n(6258)),o=n(4303),c=n(4305),l=n(1166),f=n(5728);function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return e.length<t?e:e.substring(0,t-3)+"..."}var p=n(146),v=n(6683),m=n(9697),h=n(8282),w=n(184);function x(e){var t,n,x,y,k=(0,p.D)(),g=(0,i.k)(),Z=(0,l.DP)(null===(t=g.value)||void 0===t?void 0:t.startDate),b=(0,o.th)("id"),M=(0,o.lg)(k,null===(n=g.value)||void 0===n?void 0:n.cardId,"id","name"),D=(0,v.K)(k,"id"),j=void 0!==(null===(x=g.value)||void 0===x?void 0:x.cardId)&&!g.isSaving;return b||j?(0,w.jsxs)("div",{className:"work-button-wrapper",children:[(0,w.jsxs)("button",{className:"work-button ".concat(j?"mod-danger":"mod-primary"),onClick:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){var i,o,l,d,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==D){t.next=2;break}return t.abrupt("return");case 2:if(j||void 0===b){t.next=7;break}g.set({cardId:b.id,startDate:new Date}),(0,h.D3)(k,{hoursPerDay:f.xZ,mouseEvent:n}),t.next=19;break;case 7:if(!j){t.next=19;break}return l=Math.round((0,m.qG)(g.value.startDate)),d=l/60,g.set(null),t.next=13,(0,c.oc)(k,g.value.cardId);case 13:return p=t.sent,t.next=16,(0,c.Eo)(k,(0,u.Z)((0,u.Z)({},p),{},{workMinutes:(0,u.Z)((0,u.Z)({},p.workMinutes),{},(0,a.Z)({},D.id,(null!==(i=p.workMinutes[D.id])&&void 0!==i?i:0)+d))}),g.value.cardId);case 16:return t.next=18,(0,h.mY)(k,{action:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0===t.workMinutes&&(t.startDate=(0,m.HH)(t.startDate,-d)),t.workMinutes+=d,e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),hoursPerDay:f.xZ,mouseEvent:n});case 18:null===(o=e.onEstimateChanged)||void 0===o||o.call(e);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[g.isSaving?"...":null,g.isSaving?null:[j?"End work":"Start work",j?" "+(0,f.yz)(Z,{zero:""}):null,j&&(null===b||void 0===b?void 0:b.id)!==(null===(y=g.value)||void 0===y?void 0:y.cardId)?" (on".concat(b?" other":""," card").concat(void 0===M?"":': "'.concat(d(M.name,8),'"'),")"):null]]}),j?(0,w.jsx)("button",{className:"cancel-work-button",onClick:function(e){return k.popup({type:"confirm",title:"Cancel work?",message:"Are you sure you want to cancel the work in progress?",confirmText:"Yes",onConfirm:function(e){return g.set(null),e.closePopup()},cancelText:"No",onCancel:function(e){return e.closePopup()},mouseEvent:e.nativeEvent})},children:"X"}):null]}):null}},4303:function(e,t,n){"use strict";n.d(t,{Fo:function(){return p},lg:function(){return w},nb:function(){return m},th:function(){return h}});var r=n(7762),a=n(885),u=n(1413),s=n(8214),i=n(5861),o=n(2791),c=n(1933),l=n(5678),f=n(146),d=n(9416);function p(e){var t="card",n=(0,c.useQueryClient)(),r=(0,c.useQuery)(t,(0,i.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.card("dueComplete");case 2:return n=t.sent,t.abrupt("return",n.dueComplete);case 4:case"end":return t.stop()}}),t)}))),{staleTime:1e3}),a=(0,o.useCallback)((function(e){return n.setQueryData(t,e)}),[n]);return(0,o.useMemo)((function(){return(0,u.Z)((0,u.Z)({},r),{},{setData:a})}),[r,a])}function v(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var u=(0,o.useState)(),c=(0,a.Z)(u,2),f=c[0],p=c[1],v=(0,o.useCallback)((0,i.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.card.apply(e,n);case 3:r=t.sent,t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),console.warn("no card in context"),t.abrupt("return");case 10:p(r);case 11:case"end":return t.stop()}}),t,null,[[0,6]])}))),l.w);return(0,d.cM)(e,v),(0,o.useMemo)((function(){return{card:f,refresh:v,setCard:p}}),[f])}function m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=v.apply(void 0,[e].concat(n)),u=a.card;return u}function h(){for(var e=(0,f.D)(),t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m.apply(void 0,[e].concat(n))}function w(e,t){for(var n=arguments.length,u=new Array(n>2?n-2:0),c=2;c<n;c++)u[c-2]=arguments[c];var l=(0,o.useState)(),f=(0,a.Z)(l,2),d=f[0],p=f[1];return(0,o.useEffect)((function(){function n(){return a.apply(this,arguments)}function a(){return(a=(0,i.Z)((0,s.Z)().mark((function n(){var a,i,o,c;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,e.cards.apply(e,u);case 4:a=n.sent,i=(0,r.Z)(a),n.prev=6,i.s();case 8:if((o=i.n()).done){n.next=15;break}if((c=o.value).id!==t){n.next=13;break}return p(c),n.abrupt("break",15);case 13:n.next=8;break;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(6),i.e(n.t0);case 20:return n.prev=20,i.f(),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[6,17,20,23]])})))).apply(this,arguments)}n(),e.render(n)}),[t]),d}},6258:function(e,t,n){"use strict";n.d(t,{k:function(){return m}});var r=n(8214),a=n(5861),u=n(885),s=n(2791),i=n(1933),o=n(4305),c=n(8286),l=n(1640),f=n(5728),d=n(146),p=n(9416),v="current_work";function m(){var e=(0,d.D)(),t=(0,i.useQueryClient)(),n=function(e){var t=(0,i.useQuery)(v,(function(){return(0,o.X8)(e)}),{staleTime:(0,f.y2)(2),cacheTime:1/0,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1});return(0,p.he)(e,{refresh:t.refetch,callImmediately:!1}),(0,l.D)((function(){var e=c.W.on(t.refetch);return function(){return c.W.off(e)}})),t}(e),m=(0,s.useState)(!1),h=(0,u.Z)(m,2),w=h[0],x=h[1],y=(0,s.useCallback)(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.next=3,(0,o.w9)(e,a);case 3:t.setQueryData(v,a),x(!1);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[e,t]);return(0,s.useMemo)((function(){return{value:n.data,isSaving:w,set:y}}),[n.data,w,y])}},1166:function(e,t,n){"use strict";n.d(t,{DP:function(){return s}});var r=n(885),a=n(2791),u=n(9697);function s(e){return i(e)/1e3/60}function i(e){var t=(0,a.useState)(0),n=(0,r.Z)(t,2),s=n[0],i=n[1];return(0,a.useEffect)((function(){if(void 0!==e){var t,n=!1;return t=requestAnimationFrame((function r(){i((0,u.ne)(e)),n||(t=requestAnimationFrame(r))})),function(){n=!0,cancelAnimationFrame(t)}}i(0)}),[e]),s}},6683:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(2982),a=n(885),u=n(2791);function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];var i=(0,u.useState)(),o=(0,a.Z)(i,2),c=o[0],l=o[1];return(0,u.useEffect)((function(){var t=void 0!==n&&n.length>0?n:["id"];e.member.apply(e,(0,r.Z)(t)).then((function(e){return l(e)}))}),[e]),c}},146:function(e,t,n){"use strict";var r;function a(){return void 0===r&&(r=window.TrelloPowerUp.iframe({appName:"Estimate",appKey:"dadac0f685db6faecaa69b90f19ba321"})),r}n.d(t,{D:function(){return a}})},9416:function(e,t,n){"use strict";n.d(t,{cM:function(){return u},he:function(){return a}});var r=n(1640);function a(e,t){(0,r.D)((function(){t.callImmediately&&t.refresh(),e.render(t.refresh)}))}function u(e,t){return a(e,{refresh:t,callImmediately:!0})}},1640:function(e,t,n){"use strict";n.d(t,{D:function(){return u}});var r=n(2791),a=n(5678);function u(e){return(0,r.useEffect)(e,a.w)}},5678:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var r=[]},1576:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(8214),a=n(5861),u=n(885),s=n(2791),i=n(4305),o=n(7762),c=n(4802),l=n.n(c),f=n(5728);function d(e){return Math.round(100*e)/100}function p(e,t){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,u,s,c,l,f,d,p,v,m,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Vc)(t,"id","name");case 2:a=e.sent,u=a.filter((function(e){return e.estimateMinutes>0})),s=[],c=(0,o.Z)(u);try{for(c.s();!(l=c.n()).done;)f=l.value,s.push({name:f.card.name,minutes:f.estimateMinutes})}catch(r){c.e(r)}finally{c.f()}d=0,p=(0,o.Z)(u);try{for(p.s();!(v=p.n()).done;)m=v.value,d+=m.estimateMinutes}catch(r){p.e(r)}finally{p.f()}return n>0&&(h=d*n,s.push({name:"margin",minutes:h}),d+=h),s.push({name:"total",minutes:d}),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,u,s,i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:a=e.sent,u="Task\tHours",s=(0,o.Z)(a);try{for(s.s();!(i=s.n()).done;)c=i.value,u+="\n"+c.name+"\t"+d(c.minutes/60)}catch(r){s.e(r)}finally{s.f()}return e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,u,s,i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:a=e.sent,u="",s=(0,o.Z)(a);try{for(s.s();!(i=s.n()).done;)c=i.value,u+=c.name+"  "+(0,f.JB)(c.minutes)+"\n"}catch(r){s.e(r)}finally{s.f()}return e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),l()(new Blob([t],{type:"text/plain;charset=utf-8"}),n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(146),Z=n(1933),b=n(9416),M="work_sessions";function D(e){var t=(0,Z.useQueryClient)(),n=function(e){return(0,Z.useQuery)(M,(function(){return(0,i.TO)(e)}),{staleTime:5e3})}(e);return(0,b.he)(e,{refresh:function(){return t.setQueryData(M,void 0)},callImmediately:!1}),n}var j=n(732),E=n(6258),S=n(1166),N=n(9697),C=n(9005),A=n(184);function T(e){var t,n=(0,g.D)(),u=e.session,s=(0,E.k)(),o=(0,S.DP)(void 0===u.endDate?null===(t=s.value)||void 0===t?void 0:t.startDate:void 0),c=u.workMinutes+o;return(0,A.jsxs)("div",{className:"work-session ".concat(e.className),children:["Start: ",(0,C.p)(u.startDate)," | ","Work: ",(0,f.JB)(c),void 0!==u.endDate?[" | ","\u2611"]:null,(0,A.jsx)("button",{className:"mod-danger",onClick:function(t){return n.popup({type:"confirm",title:"Delete session?",message:"Are you sure you want to delete this session?",confirmText:"Yes",onConfirm:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){var s,o,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.TO)(n);case 2:if(o=t.sent,!((c=o.findIndex((function(e){return(0,N.LZ)(e.startDate,u.startDate)})))>=0)){t.next=8;break}return o.splice(c,1),t.next=8,(0,i.qH)(n,o);case 8:return null===(s=e.onRefresh)||void 0===s||s.call(e),t.next=11,a.closePopup();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),cancelText:"No",onCancel:function(e){return e.closePopup()},mouseEvent:t.nativeEvent})},children:"X"})]})}function P(e){var t,n,r=D((0,g.D)()),a=(0,s.useState)(!1),i=(0,u.Z)(a,2),o=i[0],c=i[1],l=null!==(t=null===(n=r.data)||void 0===n?void 0:n.length)&&void 0!==t?t:0;return(0,A.jsxs)("div",{className:"work-sessions ".concat(e.className),children:[l>0?(0,A.jsxs)("div",{children:["Work sessions:","   ",l>1?(0,A.jsx)("span",{className:"link-like",onClick:function(){return c((function(e){return!e}))},children:o?"hide older":"show all"}):null]}):null,(0,A.jsx)("div",{className:"work-sessions-list",children:void 0===r.data?(0,A.jsx)("p",{children:"Loading..."}):o?r.data.map((function(e){return(0,A.jsx)(T,{session:e,onRefresh:r.refetch},e.startDate.toISOString())})):l>0?(0,A.jsx)(T,{session:r.data[r.data.length-1],onRefresh:r.refetch}):null})]})}var B=n(1413);function L(e){var t=(0,g.D)(),n=D(t),o=(0,s.useState)(!1),c=(0,u.Z)(o,2),l=c[0],f=c[1];return void 0===n.data||0===n.data.length||void 0!==n.data[n.data.length-1].endDate?null:(0,A.jsx)("button",{className:"end-work-session mod-danger ".concat(e.className),onClick:(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,(0,i.tm)(t,function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,B.Z)((0,B.Z)({},t),{},{endDate:new Date}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:return e.next=7,n.refetch();case 7:f(!1);case 8:case"end":return e.stop()}}),e)}))),children:l?"...":"End session"})}var R=n(1868),O="margin";function U(e){var t=function(e){return(0,Z.useQuery)(O,(function(){return(0,i.f5)(e)}),{staleTime:100})}(e),n=(0,Z.useQueryClient)();(0,b.cM)(e,t.refetch);var u=(0,s.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Uo)(e,a);case 2:n.setQueryData(O,a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[n]);return(0,s.useMemo)((function(){var e;return{value:null!==(e=t.data)&&void 0!==e?e:0,set:u}}),[t.data,u])}function I(e){var t,n,r=(0,g.D)(),a=(0,s.useState)(""),i=(0,u.Z)(a,2),o=i[0],c=i[1],l=U(r);(0,s.useEffect)((function(){return c(l.value.toString())}),[l.value]);var d=e.summary,p=(0,E.k)(),v=(0,S.DP)(null===(t=p.value)||void 0===t?void 0:t.startDate);if(!d)return null;d.estimateMinutes,d.updatedEstimateMinutes,d.workMinutes,d.remainingMinutes;var m=d.deltaMinutes,h=l.value>0?l.value*d.estimateMinutes:0,w=h>0&&m<0?Math.min(-m,h):0;return(0,A.jsxs)("div",{className:"margin-input ".concat(null!==(n=e.className)&&void 0!==n?n:""),children:[(0,A.jsx)("input",{type:"number",step:.1,value:o,onChange:function(e){return c(e.target.value)},placeholder:"insert margin multiplier..."}),(0,A.jsx)("button",{onClick:function(){var e=parseFloat(o);e>0&&l.set(e)},children:"Set Margin"}),(0,A.jsxs)("div",{children:["Margin: ",(0,f.JB)(h)," "," Used: ",(0,f.JB)(w)," "," Left: ",(0,f.JB)(h-w)]})]})}var Q=n(4584);function F(){var e=(0,g.D)(),t=(0,s.useState)(),n=(0,u.Z)(t,2),o=n[0],c=n[1],l=U(e),f=D(e),d=function(){var e=(0,g.D)(),t=(0,s.useState)(null),n=(0,u.Z)(t,2),o=n[0],c=n[1];return(0,b.cM)(e,(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.bS)(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))),o}();return(0,b.cM)(e,(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.kS)(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))),void 0===o?(0,A.jsx)("p",{children:"Loading... "}):(0,A.jsxs)("div",{className:"summary",children:[(0,A.jsx)(Q.l,{className:"section",summary:o,margin:l.value}),(0,A.jsx)(I,{className:"section",summary:o}),(0,A.jsxs)("div",{className:"section work",children:[(0,A.jsx)(P,{}),(0,A.jsxs)("div",{className:"buttons",children:[(0,A.jsx)(L,{}),(0,A.jsx)(j.b,{onEstimateChanged:function(){return f.refetch()}})]})]}),d?(0,A.jsxs)("div",{children:["Last activity: ",(0,C.p)(d,"yyyy-MM-dd hh:mm:ss")]}):null,(0,A.jsx)("div",{className:"export-section",children:(0,A.jsxs)("div",{className:"export-inputs",children:[(0,A.jsx)("button",{className:"mod-primary",onClick:(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=y,t.next=3,m(e,l.value);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1,"estimate.tsv"));case 5:case"end":return t.stop()}}),t)}))),children:"Export estimates"}),(0,A.jsx)("button",{className:"mod-primary",onClick:(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=y,t.next=3,w(e,l.value);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1,"estimate.txt"));case 5:case"end":return t.stop()}}),t)}))),children:"Export mail"})]})}),(0,A.jsx)(R.P,{className:"deploy-info"})]})}},9005:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return t.replaceAll("yyyy",e.getFullYear().toString()).replaceAll("MM",(e.getMonth()+1).toString().padStart(2,"0")).replaceAll("dd",e.getDate().toString().padStart(2,"0")).replaceAll("hh",e.getHours().toString().padStart(2,"0")).replaceAll("mm",e.getMinutes().toString().padStart(2,"0")).replaceAll("ss",e.getSeconds().toString().padStart(2,"0"))}n.d(t,{p:function(){return r}})},8282:function(e,t,n){"use strict";n.d(t,{D3:function(){return l},mY:function(){return f}});var r=n(8214),a=n(5861),u=n(4305),s=n(5728),i=n(9697);function o(e,t){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((0,r.Z)().mark((function e(t,n){var o,c,l,f,d,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.TO)(t);case 2:if(l=e.sent,void 0!==(f=l[l.length-1])&&void 0===f.endDate){e.next=6;break}return e.abrupt("return",null===(o=n.action)||void 0===o?void 0:o.call(n));case 6:if(!((d=(0,i.ne)(f.startDate))<(0,s.fg)(2*n.hoursPerDay))){e.next=9;break}return e.abrupt("return",null===(c=n.action)||void 0===c?void 0:c.call(n));case 9:return p=(0,s.yz)((0,s.do)(d),{hoursPerDay:24}),e.abrupt("return",new Promise((function(e,s){t.popup({type:"confirm",title:"Close old session?",message:"The current session looks old (".concat(p,"), do you want to close it and open a new one to save this work?"),confirmText:"Yes",onConfirm:function(){var s=(0,a.Z)((0,r.Z)().mark((function a(s){var i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return f.endDate=new Date,r.next=3,(0,u.qH)(t,l);case 3:return e(null===(i=n.action)||void 0===i?void 0:i.call(n)),r.next=6,s.closePopup();case 6:case"end":return r.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}(),cancelText:"No",onCancel:function(t){var r;return e(null===(r=n.action)||void 0===r?void 0:r.call(n)),t.closePopup()},mouseEvent:n.mouseEvent.nativeEvent})})));case 11:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function l(e,t){return o(e,{hoursPerDay:t.hoursPerDay,mouseEvent:t.mouseEvent,action:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.tm)(e,function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:null===(s=t.action)||void 0===s||s.call(t);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()})}function f(e,t){return o(e,{action:function(){return(0,u.tm)(e,t.action)},hoursPerDay:t.hoursPerDay,mouseEvent:t.mouseEvent})}},4802:function(e,t,n){var r,a,u;a=[],r=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){o(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function u(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,n){var i=s.URL||s.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener","string"==typeof e?(o.href=e,o.origin===location.origin?u(o):a(o.href)?r(e,t,n):u(o,o.target="_blank")):(o.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(o.href)}),4e4),setTimeout((function(){u(o)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(a(e))r(e,n,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){u(i)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var u="application/octet-stream"===e.type,o=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||u&&o||i)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},l.readAsDataURL(e)}else{var f=s.URL||s.webkitURL,d=f.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});s.saveAs=o.saveAs=o,e.exports=o},void 0===(u="function"===typeof r?r.apply(t,a):r)||(e.exports=u)}}]);
//# sourceMappingURL=576.00afaf43.chunk.js.map