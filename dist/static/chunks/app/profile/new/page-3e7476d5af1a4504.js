(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796,495],{8090:function(e,t,r){Promise.resolve().then(r.bind(r,1826))},1826:function(e,t,r){"use strict";r.r(t);var n=r(6687),s=r(6840),i=r(5029),a=r(8965),u=r(4670),c=r(8648),o=r(7437),l=r(2265),f=r(4033);t.default=function(){var e,t,r,p,h,d=(0,u._)((0,l.useState)({title:"",description:""}),2),y=d[0],_=d[1],m=(0,f.useParams)(),b=(0,f.useRouter)(),x=(0,u._)((0,l.useState)(!1),2),v=(x[0],x[1]),g=(0,u._)((0,l.useState)({}),2),k=(g[0],g[1]),w=(e=(0,n._)(function(){var e;return(0,c.Jh)(this,function(t){switch(t.label){case 0:return[4,fetch("/api/tasks/".concat(m.id))];case 1:return[4,t.sent().json()];case 2:return _({title:(e=t.sent()).title,description:e.description}),[2]}})}),function(){return e.apply(this,arguments)});(0,l.useEffect)(function(){m.id&&w()},[]);var j=(t=(0,n._)(function(e){var t;return(0,c.Jh)(this,function(r){switch(r.label){case 0:if(e.preventDefault(),Object.keys(t=O()).length)return[2,k(t)];if(v(!0),!m.id)return[3,2];return[4,T()];case 1:return r.sent(),[3,4];case 2:return[4,E()];case 3:r.sent(),r.label=4;case 4:return b.push("/"),[2]}})}),function(e){return t.apply(this,arguments)}),N=function(e){return _((0,a._)((0,i._)({},y),(0,s._)({},e.target.name,e.target.value)))},O=function(){var e={};return y.title||(e.title="Title is required"),y.description||(e.description="Description is required"),e},E=(r=(0,n._)(function(){return(0,c.Jh)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,fetch("/api/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})];case 1:return e.sent(),b.push("/"),b.refresh(),[3,3];case 2:return console.error(e.sent()),[3,3];case 3:return[2]}})}),function(){return r.apply(this,arguments)}),S=(p=(0,n._)(function(){return(0,c.Jh)(this,function(e){switch(e.label){case 0:if(!window.confirm("Are you sure you want to delete this task?"))return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch("/api/tasks/".concat(m.id),{method:"DELETE"})];case 2:return e.sent(),b.push("/"),b.refresh(),[3,4];case 3:return console.error(e.sent()),[3,4];case 4:return[2]}})}),function(){return p.apply(this,arguments)}),T=(h=(0,n._)(function(){return(0,c.Jh)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,fetch("/api/tasks/".concat(m.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})];case 1:return e.sent(),b.push("/"),b.refresh(),[3,3];case 2:return console.error(e.sent()),[3,3];case 3:return[2]}})}),function(){return h.apply(this,arguments)});return(0,o.jsx)("div",{className:"min-h-[calc(100vh-7rem)] flex justify-center items-center",children:(0,o.jsxs)("form",{onSubmit:j,children:[(0,o.jsxs)("header",{className:"flex justify-between",children:[(0,o.jsx)("h1",{className:"font-bold text-3xl",children:m.id?"Update task":"Create Task"}),m.id&&(0,o.jsx)("button",{className:"bg-red-500 px-3 py-1 rounded-md",onClick:S,children:"Delete"})]}),(0,o.jsx)("input",{type:"text",placeholder:"Task title",name:"title",onChange:N,value:y.title,autoFocus:!0,className:"bg-gray-800 border-2 w-full p-4 rounded-lg my-4"}),(0,o.jsx)("textarea",{name:"description",placeholder:"Task description",onChange:N,value:y.description,className:"bg-gray-800 border-2 w-full p-4 rounded-lg my-4",rows:3}),(0,o.jsx)("button",{className:"bg-green-600 text-white font-semibold px-8 py-2 rounded-lg",children:m.id?"Update":"Save"})]})})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,i={},o=null,l=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:o,ref:l,props:i,_owner:u.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=8090)}),_N_E=e.O()}]);