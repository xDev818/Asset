"use strict";(self.webpackChunkasset=self.webpackChunkasset||[]).push([[1650],{41650:function(e,t,s){s.r(t);var a=s(4942),r=s(1413),o=s(12860),n=s(29439),c=s(72791),i=s(31243),l=s(78983),d=s(27391),g=s(57689),u=s(17746),m=s(44293),h=s(54970),y=s(80184);t.default=function(){var e=(0,g.s0)(),t=(0,g.TH)().state,s="",p="";try{s=t.params}catch(z){e("/dashboard")}var f=(0,c.useState)(""),C=(0,n.Z)(f,2),b=C[0],x=(C[1],(0,c.useState)("")),Z=(0,n.Z)(x,2),j=Z[0],S=Z[1],w=(0,c.useState)("red"),I=(0,n.Z)(w,2),A=I[0],E=I[1],v=(0,c.useState)({assetid:"",name:"",description:""}),N=(0,n.Z)(v,2),D=N[0],k=N[1];function R(){try{!function(){try{p=(0,m.pe)(window.localStorage.getItem("Kgr67W@"),u.Z.secretkeylocal)}catch(z){(0,h.Z)("Error","AssetCategory","CheckRole Local Storage is tampered",z.message,b),e("/dashboard")}}(),"Admin"==p||"IT"==p?null==!window.localStorage.getItem("id")||"0"!==window.localStorage.getItem("id")?((0,m.pe)(window.localStorage.getItem("id"),u.Z.secretkeylocal),(0,o.Z)("userID")):e("/login"):e("/dashboard")}catch(z){e("/dashboard")}}function U(e){k((0,r.Z)((0,r.Z)({},D),{},(0,a.Z)({},e.target.name,e.target.value)))}return(0,c.useEffect)((function(){R()}),[]),(0,c.useEffect)((function(){if(""==b&&R(),""==!s){i.Z.post("http://localhost:3001/category/getAssetCategorybyID",{rowId:s}).then((function(e){var t=e.data.message;"Record Found"==t?k((0,r.Z)((0,r.Z)({},D),{},{assetid:e.data.result[0].assetCategID,name:e.data.result[0].assetCategName,description:e.data.result[0].description})):"No Record Found"==t&&(S(t),E("red"),(0,h.Z)("Error","AssetCategory","useEffect /category/getAssetCategorybyID",e.data.message,b))})).catch((function(e){(0,h.Z)("Error","AssetCategory","useEffect /category/getAssetCategorybyID"," Error in try/catch \n"+e.message,b)}))}}),[]),(0,y.jsx)(l.b7,{xs:12,children:(0,y.jsxs)(l.xH,{className:"mb-3",size:"sm",children:[(0,y.jsx)(l.bn,{children:(0,y.jsxs)("h6",{children:[(0,y.jsxs)("span",{className:"message",style:{color:"#5da4f5"},children:[" ",(0,y.jsx)(y.Fragment,{children:" Asset Category "})]}),(0,y.jsx)("br",{}),(0,y.jsxs)("strong",{children:[(0,y.jsx)("span",{className:"message",style:{color:A},children:(0,y.jsx)("p",{children:j})})," "]})]})}),(0,y.jsx)(l.lx,{onSubmit:function(t){try{t.preventDefault(),""==b&&R();var a=D.name,r=D.description;if(""==!a&&""==!r)if(""==s){i.Z.post("http://localhost:3001/category/putCategory",{name:a,description:r,userID:b}).then((function(t){var s=t.data.message;"Insert Success"==s?((0,h.Z)("Message","AssetCategory","handleSubmit /category/putCategory"," New Category \n Name: "+a+"\n Desc  :  "+r+"\n User : "+b,b),e("/configurations/categoryview")):"Insert Error"==s&&((0,h.Z)("Error","AssetCategory","handleSubmit /category/putCategory",t.data.message,b),S(s),E("red"))})).catch((function(t){(0,h.Z)("Error","AssetCategory","handleSubmit /category/putCategory",t.message,b),e("/500")}))}else{i.Z.post("http://localhost:3001/category/updateCategory",{name:a,description:r,userID:b,rowId:s}).then((function(t){var o=t.data.message;"Update Success"==o?((0,h.Z)("Message","AssetCategory","handleSubmit /category/updateCategory"," New Category \n AssetID : "+s+"\n Name: "+a+"\n Desc  :  "+r+"\n User : "+b,b),e("/configurations/categoryview")):"Update Error"==o&&((0,h.Z)("Error","AssetCategory","handleSubmit /category/updateCategory",t.data.message,b),S(o),E("red"))})).catch((function(t){(0,h.Z)("Error","AssetCategory","handleSubmit /category/updateCategory",t.message,b),e("/500")}))}else S("All fields must not be emtpy"),E("red")}catch(z){(0,h.Z)("Error","AssetCategory","handleSubmit"," Error in try/catch",b)}},children:(0,y.jsxs)(l.rb,{children:[(0,y.jsx)(l.b7,{children:(0,y.jsxs)(l.sl,{children:[(0,y.jsx)(l.YR,{size:"sm",className:"mb-3",children:(0,y.jsx)(d.Z,{onChange:function(e){return U(e)},name:"name",id:"outlined-textarea",value:D.name,fullWidth:!0,label:"Category Name",placeholder:"Notes"})}),(0,y.jsx)(l.YR,{size:"sm",className:"mb-3",children:(0,y.jsx)(d.Z,{onChange:U,name:"description",id:"outlined-textarea",value:D.description,fullWidth:!0,label:"Description",placeholder:"Description",multiline:!0,rows:5})})]})}),(0,y.jsx)(l.b7,{}),(0,y.jsx)("div",{className:"d-grid",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)(l.u5,{style:{margin:"5px",width:"120%"},color:"success",type:"submit",children:"Save"})})]})})]})})}}}]);
//# sourceMappingURL=1650.08e20d35.chunk.js.map