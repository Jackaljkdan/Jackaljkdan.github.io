"use strict";(self.webpackChunkestimate_powerup=self.webpackChunkestimate_powerup||[]).push([[834],{4305:function(n,t,e){e.d(t,{Eo:function(){return h},TO:function(){return g},Uo:function(){return I},V9:function(){return f},Vc:function(){return w},Wm:function(){return l},X8:function(){return x},f5:function(){return z},kS:function(){return y},oc:function(){return d},qH:function(){return _},tm:function(){return P},w9:function(){return M},y7:function(){return s},zR:function(){return p}});var r=e(7762),u=e(1413),a=e(2982),i=e(8214),o=e(5861),c=(0,i.Z)().mark(l);function s(n){var t=0;for(var e in n.workMinutes)t+=n.workMinutes[e];return t}function f(n,t,e){return t?0:(void 0===e&&(e=s(n)),(n.updatedEstimateMinutes||n.estimateMinutes)-e)}function l(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=(0,i.Z)().keys(n.workMinutes);case 1:if((e.t1=e.t0()).done){e.next=7;break}return t=e.t1.value,e.next=5,{memberId:t,minutes:n.workMinutes[t]};case 5:e.next=1;break;case 7:case"end":return e.stop()}}),c)}function p(n){return 0!==n.updatedEstimateMinutes?n.updatedEstimateMinutes:n.estimateMinutes}function d(n,t){return v.apply(this,arguments)}function v(){return(v=(0,o.Z)((0,i.Z)().mark((function n(t,e){var r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=JSON,n.next=3,t.get(null!==e&&void 0!==e?e:"card","shared","estimate","null");case 3:if(n.t1=n.sent,null!==(r=n.t0.parse.call(n.t0,n.t1))){n.next=7;break}return n.abrupt("return",{estimateMinutes:0,updatedEstimateMinutes:0,workMinutes:{}});case 7:return n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t,e){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,i.Z)().mark((function n(t,e,r){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.set(null!==r&&void 0!==r?r:"card","shared","estimate",JSON.stringify(e));case 2:return n.abrupt("return",e);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return Z.apply(this,arguments)}function Z(){return Z=(0,o.Z)((0,i.Z)().mark((function n(t){var e,r,o,c,s=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(e=s.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=s[o];return void 0!==r&&0!==r.length||(r=["id"]),n.next=4,t.cards.apply(t,(0,a.Z)(r));case 4:return c=n.sent,n.next=7,Promise.all(c.map((function(n){return d(t,n.id).then((function(t){return(0,u.Z)((0,u.Z)({},t),{},{card:n})}))})));case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)}))),Z.apply(this,arguments)}function y(n){return k.apply(this,arguments)}function k(){return(k=(0,o.Z)((0,i.Z)().mark((function n(t){var e,u,a,o,c,l,p;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w(t,"id","dueComplete");case 2:e=n.sent,u={estimateMinutes:0,updatedEstimateMinutes:0,workMinutes:0,remainingMinutes:0,deltaMinutes:0},a=(0,r.Z)(e);try{for(a.s();!(o=a.n()).done;)c=o.value,u.estimateMinutes+=c.estimateMinutes,u.updatedEstimateMinutes+=c.updatedEstimateMinutes||c.estimateMinutes,l=s(c),u.workMinutes+=l,p=f(c,c.card.dueComplete),u.remainingMinutes+=p>0?p:0,(c.card.dueComplete||l>c.estimateMinutes)&&(u.deltaMinutes+=c.estimateMinutes-l)}catch(i){a.e(i)}finally{a.f()}return n.abrupt("return",u);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return(b=(0,o.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=JSON,n.next=3,t.get("board","private","work","null");case 3:return n.t1=n.sent,null!==(e=n.t0.parse.call(n.t0,n.t1))&&(e.startDate=new Date(e.startDate)),n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(n,t){return D.apply(this,arguments)}function D(){return(D=(0,o.Z)((0,i.Z)().mark((function n(t,e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.set("board","private","work",JSON.stringify(null!==e&&void 0!==e?e:null));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return N.apply(this,arguments)}function N(){return(N=(0,o.Z)((0,i.Z)().mark((function n(t){var e,u,a,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=JSON,n.next=3,t.get("board","private","work_sessions","[]");case 3:n.t1=n.sent,e=n.t0.parse.call(n.t0,n.t1),u=(0,r.Z)(e);try{for(u.s();!(a=u.n()).done;)(o=a.value).startDate=new Date(o.startDate),void 0!==o.endDate&&(o.endDate=new Date(o.endDate))}catch(i){u.e(i)}finally{u.f()}return n.abrupt("return",e);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n,t){return E.apply(this,arguments)}function E(){return(E=(0,o.Z)((0,i.Z)().mark((function n(t,e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.set("board","private","work_sessions",JSON.stringify(e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(n){n.length>=5&&n.shift();var t={startDate:new Date,workMinutes:0};return n.push(t),t}function P(n,t){return C.apply(this,arguments)}function C(){return(C=(0,o.Z)((0,i.Z)().mark((function n(t,e){var r,u;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(t);case 2:return r=n.sent,void 0!==(u=r[r.length-1])&&void 0===u.endDate||(u=S(r)),n.next=7,e(u);case 7:return r[r.length-1]=n.sent,n.next=10,_(t,r);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(n){return A.apply(this,arguments)}function A(){return(A=(0,o.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get("board","shared","margin",.2);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n,t){return J.apply(this,arguments)}function J(){return(J=(0,o.Z)((0,i.Z)().mark((function n(t,e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.set("board","shared","margin",e);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},732:function(n,t,e){e.d(t,{b:function(){return Z}});var r=e(8214),u=e(4942),a=e(1413),i=e(5861),o=(e(2791),e(6258)),c=e(4303),s=e(4305),f=e(1166),l=e(5728);function p(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return n.length<t?n:n.substring(0,t-3)+"..."}var d=e(146),v=e(6683),h=e(9697),m=e(8282),w=e(184);function Z(n){var t,e,Z,y,k=(0,d.D)(),x=(0,o.k)(),b=(0,f.DP)(null===(t=x.value)||void 0===t?void 0:t.startDate),M=(0,c.th)("id"),D=(0,c.lg)(k,null===(e=x.value)||void 0===e?void 0:e.cardId,"id","name"),g=(0,v.K)(k,"id"),N=void 0!==(null===(Z=x.value)||void 0===Z?void 0:Z.cardId)&&!x.isSaving;return M||N?(0,w.jsxs)("button",{className:"work-button ".concat(N?"mod-danger":"mod-primary"),onClick:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var o,c,f,p,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==g){t.next=2;break}return t.abrupt("return");case 2:if(N||void 0===M){t.next=7;break}x.set({cardId:M.id,startDate:new Date}),(0,m.D3)(k,{hoursPerDay:l.xZ,mouseEvent:e}),t.next=19;break;case 7:if(!N){t.next=19;break}return f=Math.round((0,h.qG)(x.value.startDate)),p=f/60,x.set(null),t.next=13,(0,s.oc)(k,x.value.cardId);case 13:return d=t.sent,t.next=16,(0,s.Eo)(k,(0,a.Z)((0,a.Z)({},d),{},{workMinutes:(0,a.Z)((0,a.Z)({},d.workMinutes),{},(0,u.Z)({},g.id,(null!==(o=d.workMinutes[g.id])&&void 0!==o?o:0)+p))}),x.value.cardId);case 16:return t.next=18,(0,m.mY)(k,{action:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return 0===t.workMinutes&&(t.startDate=(0,h.HH)(t.startDate,-p)),t.workMinutes+=p,n.abrupt("return",t);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),hoursPerDay:l.xZ,mouseEvent:e});case 18:null===(c=n.onEstimateChanged)||void 0===c||c.call(n);case 19:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),children:[x.isSaving?"...":null,x.isSaving?null:[N?"End work":"Start work",N?" "+(0,l.yz)(b,{zero:""}):null,N&&(null===M||void 0===M?void 0:M.id)!==(null===(y=x.value)||void 0===y?void 0:y.cardId)?" (on".concat(M?" other":""," card").concat(void 0===D?"":': "'.concat(p(D.name,8),'"'),")"):null]]}):null}},4303:function(n,t,e){e.d(t,{lg:function(){return v},nb:function(){return p},th:function(){return d},w5:function(){return l}});var r=e(7762),u=e(8214),a=e(5861),i=e(885),o=e(2791),c=e(5678),s=e(146),f=e(790);function l(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var s=(0,o.useState)(),l=(0,i.Z)(s,2),p=l[0],d=l[1],v=(0,o.useCallback)((0,a.Z)((0,u.Z)().mark((function t(){var r;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.card.apply(n,e);case 3:r=t.sent,t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),console.warn("no card in context"),t.abrupt("return");case 10:d(r);case 11:case"end":return t.stop()}}),t,null,[[0,6]])}))),c.w);return(0,f.cM)(n,v),(0,o.useMemo)((function(){return{card:p,refresh:v}}),[p])}function p(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var u=l.apply(void 0,[n].concat(e)),a=u.card;return a}function d(){for(var n=(0,s.D)(),t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return p.apply(void 0,[n].concat(e))}function v(n,t){for(var e=arguments.length,c=new Array(e>2?e-2:0),s=2;s<e;s++)c[s-2]=arguments[s];var f=(0,o.useState)(),l=(0,i.Z)(f,2),p=l[0],d=l[1];return(0,o.useEffect)((function(){function e(){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,u.Z)().mark((function e(){var a,i,o,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.cards.apply(n,c);case 4:a=e.sent,i=(0,r.Z)(a),e.prev=6,i.s();case 8:if((o=i.n()).done){e.next=15;break}if((s=o.value).id!==t){e.next=13;break}return d(s),e.abrupt("break",15);case 13:e.next=8;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),i.e(e.t0);case 20:return e.prev=20,i.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[6,17,20,23]])})))).apply(this,arguments)}e(),n.render(e)}),[t]),p}},6258:function(n,t,e){e.d(t,{k:function(){return d}});var r=e(8214),u=e(5861),a=e(885),i=e(2791),o=e(1933),c=e(4305),s=e(5728),f=e(146),l=e(790),p="current_work";function d(){var n=(0,f.D)(),t=(0,o.useQueryClient)(),e=function(n){return(0,o.useQuery)(p,(function(){return(0,c.X8)(n)}),{staleTime:(0,s.y2)(2),cacheTime:1/0,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1})}(n),d=(0,i.useState)(!1),v=(0,a.Z)(d,2),h=v[0],m=v[1];(0,l.he)(n,{refresh:e.refetch,callImmediately:!1});var w=(0,i.useCallback)(function(){var e=(0,u.Z)((0,r.Z)().mark((function e(u){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,(0,c.w9)(n,u);case 3:t.setQueryData(p,u),m(!1);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[n,t]);return(0,i.useMemo)((function(){return{value:e.data,isSaving:h,set:w}}),[e.data,h,w])}},1166:function(n,t,e){e.d(t,{DP:function(){return i}});var r=e(885),u=e(2791),a=e(9697);function i(n){return o(n)/1e3/60}function o(n){var t=(0,u.useState)(0),e=(0,r.Z)(t,2),i=e[0],o=e[1];return(0,u.useEffect)((function(){if(void 0!==n){var t,e=!1;return t=requestAnimationFrame((function r(){o((0,a.ne)(n)),e||(t=requestAnimationFrame(r))})),function(){e=!0,cancelAnimationFrame(t)}}o(0)}),[n]),i}},6683:function(n,t,e){e.d(t,{K:function(){return i}});var r=e(2982),u=e(885),a=e(2791);function i(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];var o=(0,a.useState)(),c=(0,u.Z)(o,2),s=c[0],f=c[1];return(0,a.useEffect)((function(){var t=void 0!==e&&e.length>0?e:["id"];n.member.apply(n,(0,r.Z)(t)).then((function(n){return f(n)}))}),[n]),s}},146:function(n,t,e){var r;function u(){return void 0===r&&(r=window.TrelloPowerUp.iframe({appName:"Estimate",appKey:"dadac0f685db6faecaa69b90f19ba321"})),r}e.d(t,{D:function(){return u}})},790:function(n,t,e){e.d(t,{cM:function(){return i},he:function(){return a}});var r=e(2791),u=e(5678);function a(n,t){var e;e=function(){t.callImmediately&&t.refresh(),n.render(t.refresh)},(0,r.useEffect)(e,u.w)}function i(n,t){return a(n,{refresh:t,callImmediately:!0})}},5678:function(n,t,e){e.d(t,{w:function(){return r}});var r=[]},9697:function(n,t,e){e.d(t,{HH:function(){return u},Zd:function(){return o},ne:function(){return a},qG:function(){return i}});var r=e(5728);function u(n,t){return new Date(n.getTime()+(0,r.y2)(t))}function a(n){return Date.now()-n.getTime()}function i(n){return a(n)/1e3}function o(n){return a(n)/1e3/60}},6733:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function evaluateMathExpression(expression){if(!/^[0-9.()+*-/]+$/.test(expression))return NaN;try{return eval(expression)}catch(error){return NaN}}__webpack_require__.d(__webpack_exports__,{K:function(){return evaluateMathExpression}})},5728:function(n,t,e){e.d(t,{JB:function(){return c},Nw:function(){return i},do:function(){return p},fg:function(){return l},xZ:function(){return a},y2:function(){return f},yz:function(){return s}});var r=e(7762),u=e(6733),a=8;function i(n){if(n=(n=(n=n.replaceAll(" ","")).replaceAll(",",".")).toLowerCase(),!/^([^a-z]+[a-z]+)+$/.test(n))return NaN;var t,e=0,i=(0,r.Z)(n.matchAll(/([^a-z]+)([a-z]+)/g));try{for(i.s();!(t=i.n()).done;){var o=t.value,c=o[2];if(1!==c.length)return NaN;var s=void 0;if("m"===c)s=1;else if("h"===c)s=60;else{if("d"!==c)return NaN;s=60*a}var f=(0,u.K)(o[1]);if(isNaN(f))return NaN;e+=s*f}}catch(l){i.e(l)}finally{i.f()}return e<=0?NaN:e}var o={zero:"none",negative:"?",hoursPerDay:8};function c(n){return s(n)}function s(n){var t,e,r,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;if(isNaN(n))return"NaN";if(n<0)return null!==(t=u.negative)&&void 0!==t?t:o.negative;if(0===n)return null!==(e=u.zero)&&void 0!==e?e:o.zero;var a=null!==(r=u.hoursPerDay)&&void 0!==r?r:o.hoursPerDay,i=Math.floor(n%60),c=Math.floor(n/60),s=c%a,f=Math.floor(c/a),l=0;n<1&&(l=Math.round(60*n),i=0);var p="";return f>0&&(p+=f+"d"),s>0&&(p+=s+"h"),i>0&&(p+=i+"m"),l>0&&(p+=l+"s"),p}function f(n){return 60*n*1e3}function l(n){return f(60*n)}function p(n){return n/1e3/60}},3265:function(n,t,e){e.d(t,{M:function(){return i},W:function(){return o}});var r=e(4305),u=e(9697),a=e(5728);function i(n){var t,e=null!==(t=n.totalWorkMinutes)&&void 0!==t?t:(0,r.y7)(n.estimate);return null!=n.currentWork&&n.currentWork.cardId===n.cardId&&(e+=(0,u.Zd)(n.currentWork.startDate)),n.estimate.estimateMinutes-e}function o(n){var t=n.delta,e=n.short;return t>=0?e?"S: "+(0,a.JB)(t):"Saved: "+(0,a.JB)(t):e?"S: -"+(0,a.JB)(-t):"Spent: "+(0,a.JB)(-t)}},8282:function(n,t,e){e.d(t,{D3:function(){return f},mY:function(){return l}});var r=e(8214),u=e(5861),a=e(4305),i=e(5728),o=e(9697);function c(n,t){return s.apply(this,arguments)}function s(){return s=(0,u.Z)((0,r.Z)().mark((function n(t,e){var c,s,f,l,p,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.TO)(t);case 2:if(f=n.sent,void 0!==(l=f[f.length-1])&&void 0===l.endDate){n.next=6;break}return n.abrupt("return",null===(c=e.action)||void 0===c?void 0:c.call(e));case 6:if(!((p=(0,o.ne)(l.startDate))<(0,i.fg)(2*e.hoursPerDay))){n.next=9;break}return n.abrupt("return",null===(s=e.action)||void 0===s?void 0:s.call(e));case 9:return d=(0,i.yz)((0,i.do)(p),{hoursPerDay:24}),n.abrupt("return",new Promise((function(n,i){t.popup({type:"confirm",title:"Close old session?",message:"The current session looks old (".concat(d,"), do you want to close it and open a new one to save this work?"),confirmText:"Yes",onConfirm:function(){var i=(0,u.Z)((0,r.Z)().mark((function u(i){var o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l.endDate=new Date,r.next=3,(0,a.qH)(t,f);case 3:return n(null===(o=e.action)||void 0===o?void 0:o.call(e)),r.next=6,i.closePopup();case 6:case"end":return r.stop()}}),u)})));return function(n){return i.apply(this,arguments)}}(),cancelText:"No",onCancel:function(t){var r;return n(null===(r=e.action)||void 0===r?void 0:r.call(e)),t.closePopup()},mouseEvent:e.mouseEvent.nativeEvent})})));case 11:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(n,t){return c(n,{hoursPerDay:t.hoursPerDay,mouseEvent:t.mouseEvent,action:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.tm)(n,function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());case 2:null===(i=t.action)||void 0===i||i.call(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})}function l(n,t){return c(n,{action:function(){return(0,a.tm)(n,t.action)},hoursPerDay:t.hoursPerDay,mouseEvent:t.mouseEvent})}}}]);
//# sourceMappingURL=834.843b67ff.chunk.js.map