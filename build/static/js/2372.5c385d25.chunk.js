"use strict";(self.webpackChunkasset=self.webpackChunkasset||[]).push([[2372],{72372:function(t,s,e){e.r(s);var a=e(4942),r=e(1413),n=e(29439),u=e(72791),c=e(31243),i=e(78983),o=e(27391),d=e(57689),l=e(17746),h=e(44293),m=e(54970),S=e(80184);s.default=function(){var t=(0,d.s0)(),s=(0,d.TH)().state,e="",p="";try{e=s.params}catch(R){t("/dashboard")}var f="",g=(0,u.useState)(""),b=(0,n.Z)(g,2),x=b[0],Z=b[1],j=(0,u.useState)("red"),y=(0,n.Z)(j,2),w=y[0],E=y[1],I=(0,u.useState)({statusid:"",name:"",description:""}),v=(0,n.Z)(I,2),N=v[0],A=v[1];function D(){try{!function(){try{p=(0,h.pe)(window.localStorage.getItem("Kgr67W@"),l.Z.secretkeylocal)}catch(R){(0,m.Z)("Error","AssetStatus","CheckRole Local Storage is tampered",R.message,f),t("/dashboard")}}(),"Admin"==p||"IT"==p?null==!window.localStorage.getItem("id")||"0"!==window.localStorage.getItem("id")?f=(0,h.pe)(window.localStorage.getItem("id"),l.Z.secretkeylocal):t("/login"):t("/dashboard")}catch(R){t("/dashboard")}}function k(t){A((0,r.Z)((0,r.Z)({},N),{},(0,a.Z)({},t.target.name,t.target.value)))}return(0,u.useEffect)((function(){D()}),[]),(0,u.useEffect)((function(){if(""==f&&D(),""==!e){c.Z.post("http://localhost:3001/status/getStatusbyID",{rowId:e}).then((function(t){var s=t.data.message;"Record Found"==s?A((0,r.Z)((0,r.Z)({},N),{},{statusid:t.data.result[0].assetStatusID,name:t.data.result[0].statusName,description:t.data.result[0].statusDescription})):"No Record Found"==s&&(Z("No Record Found"),E("red"),(0,m.Z)("Error","AssetStatus","useEffect /status/getStatusbyID",t.data.message2,f))})).catch((function(t){(0,m.Z)("Error","AssetStatus","useEffect /status/getStatusbyID","Load error in then/catch \n"+t.message,f)}))}}),[]),(0,S.jsx)(i.b7,{xs:12,children:(0,S.jsxs)(i.xH,{className:"mb-3",size:"sm",children:[(0,S.jsx)(i.bn,{children:(0,S.jsxs)("h6",{children:[(0,S.jsxs)("span",{className:"message",style:{color:"#5da4f5"},children:[" ",(0,S.jsx)(S.Fragment,{children:" Asset Status "})]}),(0,S.jsx)("br",{}),(0,S.jsxs)("strong",{children:[(0,S.jsx)("span",{className:"message",style:{color:w},children:(0,S.jsx)("p",{children:x})})," "]})]})}),(0,S.jsx)(i.lx,{onSubmit:function(s){try{s.preventDefault(),""==f&&D();var a=N.name,r=N.description;if(""==!a&&""==!r)if(""==e){c.Z.post("http://localhost:3001/status/putStatus",{name:a,description:r,userID:f}).then((function(s){var e=s.data.message;"Insert Success"==e?((0,m.Z)("Message","AssetStatus","handleSubmit /status/putStatus"," New Status \n Name: "+a+"\n Desc  :  "+r+"\n User : "+f,f),t("/configurations/statusview")):"Insert Error"==e&&((0,m.Z)("Error","AssetStatus","handleSubmit /status/putStatus",s.data.message2,f),Z("dataResponse"),E("red"),t("/500"))})).catch((function(s){(0,m.Z)("Error","AssetStatus","handleSubmit /status/putStatus","Error in then/catch \n"+s.message,f),t("/500")}))}else{c.Z.post("http://localhost:3001/status/updateStatus",{name:a,description:r,userID:f,rowId:e}).then((function(s){var n=s.data.message;"Update Success"==n?((0,m.Z)("Message","AssetStatus","handleSubmit /status/updateStatus"," New Status  AssetID : "+e+"\n Name: "+a+"\n Desc  :  "+r+"\n User : "+f,f),t("/configurations/statusview")):"Update Error"==n&&((0,m.Z)("Error","AssetStatus","handleSubmit /status/updateStatus",s.data.message2,f),Z(n),E("red"),t("/500"))})).catch((function(s){(0,m.Z)("Error","AssetStatus","handleSubmit /status/updateStatus","Error in then/catch \n"+s.message,f),t("/500")}))}else Z("All fields must not be emtpy"),E("red")}catch(R){(0,m.Z)("Error","AssetStatus","handleSubmit try/catch","Error in try/catch",f)}},children:(0,S.jsxs)(i.rb,{children:[(0,S.jsx)(i.b7,{children:(0,S.jsxs)(i.sl,{children:[(0,S.jsx)(i.YR,{size:"sm",className:"mb-3",children:(0,S.jsx)(o.Z,{onChange:function(t){return k(t)},name:"name",id:"outlined-textarea",value:N.name,fullWidth:!0,label:"Status Name",placeholder:"Status Name"})}),(0,S.jsx)(i.YR,{size:"sm",className:"mb-3",children:(0,S.jsx)(o.Z,{onChange:k,name:"description",id:"outlined-textarea",value:N.description,fullWidth:!0,label:"Description",placeholder:"Description",multiline:!0,rows:5})})]})}),(0,S.jsx)(i.b7,{}),(0,S.jsx)("div",{className:"d-grid",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,S.jsx)(i.u5,{style:{width:"120%"},color:"success",type:"submit",children:"Save"})})]})})]})})}}}]);
//# sourceMappingURL=2372.5c385d25.chunk.js.map