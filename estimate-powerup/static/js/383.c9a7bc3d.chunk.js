"use strict";(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[383],{4584:function(e,n,t){t.d(n,{l:function(){return c}});t(2791);var i=t(6258),r=t(1166),u=t(5728),a=t(3265),s=t(184);function c(e){var n,t,c=e.summary,o=(0,i.k)(),f=(0,r.DP)(null===(n=o.value)||void 0===n?void 0:n.startDate);if(!c)return null;var l={estimateMinutes:c.estimateMinutes,updatedEstimateMinutes:c.updatedEstimateMinutes,workMinutes:c.workMinutes+f,remainingMinutes:c.remainingMinutes-f,deltaMinutes:c.deltaMinutes},d=(null!==(t=e.margin)&&void 0!==t?t:0)>0?e.margin*c.estimateMinutes:0,m=d>0&&l.deltaMinutes<0?Math.min(-l.deltaMinutes,d):0,v=d-m,h=l.updatedEstimateMinutes>0&&l.updatedEstimateMinutes!==l.estimateMinutes;return(0,s.jsxs)("div",{className:e.className,children:[(0,s.jsxs)("div",{children:[h&&"Original ","Estimate: ",(0,u.JB)(l.estimateMinutes+d),d>0?[" "," (without margin: ",(0,u.JB)(l.estimateMinutes),")"]:null]}),h?(0,s.jsxs)("div",{children:["Updated Estimate: ",(0,u.JB)(l.updatedEstimateMinutes+v)]}):null,(0,s.jsxs)("div",{children:["Work: ",(0,u.JB)(l.workMinutes)]}),(0,s.jsxs)("div",{children:["Remaining: ",(0,u.JB)(l.remainingMinutes+v),d>0&&v>0?[" "," (without margin: ",(0,u.JB)(l.remainingMinutes),")"]:null,0===v?[" "," (no margin left)"]:null]}),(0,s.jsxs)("div",{children:[(0,a.W)({delta:c.deltaMinutes>=0?c.deltaMinutes:c.deltaMinutes+Math.min(-c.deltaMinutes,v)}),m>0?[v>0?[" "," (without margin ",(0,a.W)({delta:c.deltaMinutes}),")"]:null,0===v?[" "," (no margin left)"]:null]:null]})]})}},6258:function(e,n,t){t.d(n,{k:function(){return h}});var i=t(8214),r=t(5861),u=t(885),a=t(2791),s=t(1933),c=t(4305),o=t(8286),f=t(1640),l=t(5728),d=t(146),m=t(9416),v="current_work";function h(){var e=(0,d.D)(),n=(0,s.useQueryClient)(),t=function(e){var n=(0,s.useQuery)(v,(function(){return(0,c.X8)(e)}),{staleTime:(0,l.y2)(2),cacheTime:1/0,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1});return(0,m.he)(e,{refresh:n.refetch,callImmediately:!1}),(0,f.D)((function(){var e=o.W.on(n.refetch);return function(){return o.W.off(e)}})),n}(e),h=(0,a.useState)(!1),M=(0,u.Z)(h,2),p=M[0],w=M[1],g=(0,a.useCallback)(function(){var t=(0,r.Z)((0,i.Z)().mark((function t(r){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,(0,c.w9)(e,r);case 3:n.setQueryData(v,r),w(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e,n]);return(0,a.useMemo)((function(){return{value:t.data,isSaving:p,set:g}}),[t.data,p,g])}},1166:function(e,n,t){t.d(n,{DP:function(){return a}});var i=t(885),r=t(2791),u=t(9697);function a(e){return s(e)/1e3/60}function s(e){var n=(0,r.useState)(0),t=(0,i.Z)(n,2),a=t[0],s=t[1];return(0,r.useEffect)((function(){if(void 0!==e){var n,t=!1;return n=requestAnimationFrame((function i(){s((0,u.ne)(e)),t||(n=requestAnimationFrame(i))})),function(){t=!0,cancelAnimationFrame(n)}}s(0)}),[e]),a}},146:function(e,n,t){var i;function r(){return void 0===i&&(i=window.TrelloPowerUp.iframe({appName:"Estimate",appKey:"dadac0f685db6faecaa69b90f19ba321"})),i}t.d(n,{D:function(){return r}})},9416:function(e,n,t){t.d(n,{cM:function(){return u},he:function(){return r}});var i=t(1640);function r(e,n){(0,i.D)((function(){n.callImmediately&&n.refresh(),e.render(n.refresh)}))}function u(e,n){return r(e,{refresh:n,callImmediately:!0})}},1640:function(e,n,t){t.d(n,{D:function(){return u}});var i=t(2791),r=t(5678);function u(e){return(0,i.useEffect)(e,r.w)}},5678:function(e,n,t){t.d(n,{w:function(){return i}});var i=[]},2383:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var i=t(8214),r=t(5861),u=t(885),a=t(2791),s=t(4305),c=t(4584),o=t(146),f=t(1640),l=t(184);function d(){var e=(0,o.D)(),n=(0,a.useState)(""),t=(0,u.Z)(n,2),d=t[0],m=t[1],v=(0,a.useState)(),h=(0,u.Z)(v,2),M=h[0],p=h[1];return(0,f.D)((function(){(0,r.Z)((0,i.Z)().mark((function n(){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.list("id","name");case 2:return t=n.sent,m(t.name),n.next=6,(0,s.VS)(e);case 6:r=n.sent,p(r);case 8:case"end":return n.stop()}}),n)})))()})),M?(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Summary for list: ",d]}),(0,l.jsx)(c.l,{summary:M})]}):(0,l.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=383.c9a7bc3d.chunk.js.map