(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{9318:function(e,a,s){Promise.resolve().then(s.bind(s,4051))},4051:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return p}});var t=s(6687),r=s(6840),l=s(5029),n=s(8965),o=s(4670),m=s(8648),c=s(7437),i=s(2265),d=s(4033),u=s(2173);function p(){var e,a=(0,o._)((0,i.useState)({email:"",password:"",remember:!1}),2),s=a[0],p=a[1],h=(0,o._)((0,i.useState)(!1),2),g=h[0],f=h[1],b=(0,o._)((0,i.useState)({}),2),x=b[0],w=b[1],j=(0,d.useRouter)(),y=function(e){return p((0,n._)((0,l._)({},s),(0,r._)({},e.target.name,e.target.value)))},N=(e=(0,t._)(function(e){var a;return(0,m.Jh)(this,function(t){return(e.preventDefault(),Object.keys(a=_()).length)?[2,w(a)]:(f(!0),u.Z.post("/api/login",s).then(function(e){!0==s.remember?(localStorage.setItem("myapp-email",s.email),localStorage.setItem("myapp-password",s.password)):(localStorage.setItem("myapp-email",""),localStorage.setItem("myapp-password","")),localStorage.setItem("userData",JSON.stringify(e.data)),j.push("/movies")}).catch(function(e){console.log(e.response.data.error),f(!1),w((0,n._)((0,l._)({},x),{common:e.response.data.error}))}),[2])})}),function(a){return e.apply(this,arguments)}),_=function(){var e={};return s.email||(e.email="Email is required."),s.password||(e.password="Password is required."),e},v=function(){(localStorage.getItem("userData")?JSON.parse(localStorage.getItem("userData")):"")&&j.push("/movies")};return(0,i.useEffect)(function(){p({email:localStorage.getItem("myapp-email")||"",password:localStorage.getItem("myapp-password")||"",remember:!!localStorage.getItem("myapp-email")}),v()},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"min-h-[calc(100vh-7rem)] flex justify-center items-center",children:(0,c.jsxs)("div",{className:"sigInForm",children:[(0,c.jsx)("header",{className:"flex justify-center",children:(0,c.jsx)("h1",{className:"text-5xl mb-4",children:"Sign in"})}),(0,c.jsxs)("div",{className:"my-5",children:[(0,c.jsx)("input",{autoComplete:"nope",type:"email",placeholder:"Email",name:"email",onChange:y,value:s.email,autoFocus:!0,className:"border-2 w-full p-4 rounded-lg InputFieldStyle"}),(0,c.jsx)("span",{className:"text-danger fw-bold mt-2 d-block",children:x.email?x.email:""})]}),(0,c.jsxs)("div",{className:"my-5",children:[(0,c.jsx)("input",{autocomplete:"new-password",type:"password",placeholder:"Password",name:"password",onChange:y,value:s.password,autoFocus:!0,className:"border-2 w-full p-4 rounded-lg InputFieldStyle"}),(0,c.jsx)("span",{className:"text-danger fw-bold mt-2 d-block",children:x.password?x.password:""})]}),(0,c.jsxs)("div",{className:"flex justify-center items-center mb-4 remember_me_box",children:[(0,c.jsx)("input",{type:"checkbox",checked:s.remember,onChange:function(e){p((0,n._)((0,l._)({},s),(0,r._)({},"remember",e.target.checked)))},className:"Remember"}),(0,c.jsx)("label",{children:"Remember me"})]}),(0,c.jsx)("p",{className:"mb-2 text-rose-600 h5",children:x.common?x.common:""}),(0,c.jsx)("button",{disabled:g,onClick:N,className:"bg-green-400 padded w-full text-white font-semibold py-3 rounded-lg h3",children:"Login"})]})}),(0,c.jsx)("div",{className:"bottomImage",children:(0,c.jsx)("img",{src:"./Vector2.png",width:"100%"})})]})}}},function(e){e.O(0,[630,971,596,744],function(){return e(e.s=9318)}),_N_E=e.O()}]);