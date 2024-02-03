"use strict";(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[383],{5209:(e,t,n)=>{n.d(t,{l:()=>c});var i=n(2791),s=n(5728),r=n(3265),a=n(6683),u=n(4305),l=n(184);function d(e){var t;const n=e.summary,[r,d]=(0,i.useState)(!1),o=(0,a.Zt)(r);return(0,l.jsxs)("div",{className:"".concat(null!==(t=e.className)&&void 0!==t?t:""),children:[n.workMinutes>0?(0,l.jsx)("span",{className:"work-details link-like",onClick:()=>d((e=>!e)),children:"details"}):null,r&&void 0!==o?[...(0,u.EB)(n)].filter((e=>e.minutes>0)).map((e=>{var t;const n=o[e.memberId];return(0,l.jsxs)("div",{children:[null!==(t=null===n||void 0===n?void 0:n.fullName)&&void 0!==t?t:"<missing>",void 0!==n?[" "," (",n.username,")"]:null,": ",(0,s.JB)(e.minutes)]},e.memberId)})):null]})}var o=n(6594);function c(e){var t;const n=e.summary,i=(0,a.xr)("id"),u=(0,o.R)(n);if(!i)return null;const c=(null!==(t=e.margin)&&void 0!==t?t:0)>0?e.margin*n.estimateMinutes:0,m=c>0&&u.deltaMinutes<0?Math.min(-u.deltaMinutes,c):0,f=c-m,v=u.updatedEstimateMinutes>0&&u.updatedEstimateMinutes!==u.estimateMinutes;return(0,l.jsxs)("div",{className:e.className,children:[(0,l.jsxs)("div",{children:[v&&"Original ","Estimate: ",(0,s.JB)(u.estimateMinutes+c),c>0?[" "," (without margin: ",(0,s.JB)(u.estimateMinutes),")"]:null]}),v?(0,l.jsxs)("div",{children:["Updated Estimate: ",(0,s.JB)(u.updatedEstimateMinutes+f)]}):null,(0,l.jsxs)("div",{className:"flex",children:["Work: ",(0,s.JB)(u.workMinutes)," ",(0,l.jsx)(d,{className:"ml-2",summary:u})]}),(0,l.jsxs)("div",{children:["Remaining: ",(0,s.JB)(u.remainingMinutes+f),c>0&&f>0?[" "," (without margin: ",(0,s.JB)(u.remainingMinutes),")"]:null,0===f?[" "," (no margin left)"]:null]}),(0,l.jsxs)("div",{children:[(0,r.W)({delta:n.deltaMinutes>=0?n.deltaMinutes:n.deltaMinutes+Math.min(-n.deltaMinutes,f)}),m>0?[f>0?[" "," (without margin ",(0,r.W)({delta:n.deltaMinutes}),")"]:null,0===f?[" "," (no margin left)"]:null]:null]})]})}},6258:(e,t,n)=>{n.d(t,{k:()=>m});var i=n(2791),s=n(1933),r=n(4305),a=n(8286),u=n(1640),l=n(5728),d=n(146),o=n(9416);const c="current_work";function m(){const e=(0,d.D)(),t=(0,s.useQueryClient)(),n=function(e){const t=(0,s.useQuery)(c,(()=>(0,r.X8)(e)),{staleTime:(0,l.y2)(2),cacheTime:1/0,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1});return(0,o.he)(e,{refresh:t.refetch,callImmediately:!1}),(0,u.D)((()=>{const e=a.W.on(t.refetch);return()=>a.W.off(e)})),t}(e),[m,f]=(0,i.useState)(!1),v=(0,i.useCallback)((async n=>{f(!0),await(0,r.w9)(e,n),t.setQueryData(c,n),f(!1)}),[e,t]);return(0,i.useMemo)((()=>({value:n.data,isSaving:m,set:v})),[n.data,m,v])}},1166:(e,t,n)=>{n.d(t,{DP:()=>r});var i=n(2791),s=n(9697);function r(e){return a(e)/1e3/60}function a(e){const[t,n]=(0,i.useState)(0);return(0,i.useEffect)((()=>{if(void 0===e)return void n(0);let t,i=!1;return t=requestAnimationFrame((function r(){n((0,s.ne)(e)),i||(t=requestAnimationFrame(r))})),()=>{i=!0,cancelAnimationFrame(t)}}),[e]),t}},6594:(e,t,n)=>{n.d(t,{R:()=>a});var i=n(6258),s=n(1166),r=n(6683);function a(e){var t;const n=(0,r.xr)(),a=(0,i.k)(),u=(0,s.DP)(null===(t=a.value)||void 0===t?void 0:t.startDate),l={estimateMinutes:e.estimateMinutes,updatedEstimateMinutes:e.updatedEstimateMinutes,workMinutes:e.workMinutes+u,workMinutesByMember:{...e.workMinutesByMember},remainingMinutes:e.remainingMinutes-u,deltaMinutes:e.deltaMinutes};var d;void 0!=n&&(l.workMinutesByMember[n.id]=(null!==(d=e.workMinutesByMember[n.id])&&void 0!==d?d:0)+u);return l}},6683:(e,t,n)=>{n.d(t,{Kb:()=>r,Zt:()=>l,xr:()=>a});var i=n(2791),s=n(146);function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];const r=(0,i.useState)(),[a,u]=r;return(0,i.useEffect)((()=>{const t=void 0!==n&&n.length>0?n:["id"];e.member(...t).then((e=>u(e)))}),[e]),a}function a(){const e=(0,s.D)();for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r(e,...n)}function u(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const[n,s]=(0,i.useState)();return(0,i.useEffect)((()=>{t||void 0!==n||e.board("members").then((e=>{const t={};for(const n of e.members)t[n.id]=n;s(t)}))}),[e,t,n]),n}function l(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=(0,s.D)();for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return u(t,e,...i)}},146:(e,t,n)=>{let i;function s(){return void 0===i&&(i=window.TrelloPowerUp.iframe({appName:"Estimate",appKey:"dadac0f685db6faecaa69b90f19ba321"})),i}n.d(t,{D:()=>s})},9416:(e,t,n)=>{n.d(t,{cM:()=>r,he:()=>s});var i=n(1640);function s(e,t){(0,i.D)((()=>{t.callImmediately&&t.refresh(),e.render(t.refresh)}))}function r(e,t){return s(e,{refresh:t,callImmediately:!0})}},1640:(e,t,n)=>{n.d(t,{D:()=>r});var i=n(2791),s=n(5678);function r(e){return(0,i.useEffect)(e,s.w)}},5678:(e,t,n)=>{n.d(t,{w:()=>i});const i=[]},2383:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var i=n(2791),s=n(4305),r=n(5209),a=n(146),u=n(1640),l=n(184);function d(){const e=(0,a.D)(),[t,n]=(0,i.useState)(""),[d,o]=(0,i.useState)();return(0,u.D)((()=>{(async()=>{const t=await e.list("id","name");n(t.name);const i=await(0,s.VS)(e);o(i)})()})),d?(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Summary for list: ",t]}),(0,l.jsx)(r.l,{summary:d})]}):(0,l.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=383.57e59dc5.chunk.js.map