"use strict";(self.webpackChunkasset=self.webpackChunkasset||[]).push([[3629],{43629:function(e,t,l){l.r(t);var a=l(1413),i=l(29439),o=l(72791),n=l(31243),s=l(15493),c=l(57689),u=l(78983),r=l(24518),d=l(5574),h=l(97123),p=l(39157),f=l(51691),g=l(65661),m=l(35527),w=l(59962),v=l.n(w),x=l(54970),b=l(17746),Z=l(44293),j=l(80184);t.default=function(){var e=(0,c.s0)(),t="",l="",w=(0,o.useState)(""),k=(0,i.Z)(w,2),C=k[0],S=k[1],y=(0,o.useState)("red"),I=(0,i.Z)(y,2),N=I[0],R=(I[1],(0,o.useState)([])),P=(0,i.Z)(R,2),E=P[0],D=P[1],V=o.useState(!1),A=(0,i.Z)(V,2),M=A[0],z=A[1],F=(0,o.useState)({}),U=(0,i.Z)(F,2),L=U[0],O=U[1];function T(){try{!function(){try{l=t=(0,Z.pe)(window.localStorage.getItem("Kgr67W@"),b.Z.secretkeylocal)}catch(a){(0,x.Z)("Error","ViewPullout","CheckRole Local Storage is tampered",a.message,t),e("/dashboard")}}(),"Admin"==l||"IT"==l?null==!window.localStorage.getItem("id")||"0"!==window.localStorage.getItem("id")?t=(0,Z.pe)(window.localStorage.getItem("id"),b.Z.secretkeylocal):e("/login"):e("/dashboard")}catch(a){e("/dashboard")}}(0,o.useEffect)((function(){T()}),[]);var Y=o.useMemo((function(){return[{field:"assetCode",headerName:"Code",width:150,editable:!1},{field:"assetName",headerName:"Name",width:200,editable:!1},{field:"statusName",headerName:"Status",width:150,editable:!1},{field:"assetCategName",headerName:"Category",width:150,editable:!1},{field:"pulloutby",headerName:"Pullout User",width:150,editable:!1},{field:"pulloutdate",headerName:"Pullout Date",width:150,editable:!1},{field:"pulloutreceive",headerName:"Receive",width:150,editable:!1},{field:"pulloutdatereceive",headerName:"Date Receive",width:150,editable:!1}]}),[]);function H(e){try{""==t&&T(),S("");var l=e;n.Z.post("http://localhost:3001/pullout/checkpulloutnotification",{rowId:l,userID:t}).then((function(a){var i=a.data.message;"Record Found"==i?function(e){try{""==t&&T();var l=e,a="http://localhost:3001/pullout/updatepulloutnotification";n.Z.post(a,{rowId:l,userID:t}).then((function(e){var a=e.data.message;"Update Success"==a&&(0,x.Z)("Message","ViewPullout","SingleCheckIn /pullout/updatepulloutnotification"," Receive Pullout \n Detail ID : "+l+" \n Purpose : Mark pullout as receive\n User : "+t,t),"Update Error"==a&&(0,x.Z)("Error","ViewPullout","SingleCheckIn /pullout/updatepulloutnotification","Selected asset not updated \n Asset ID : "+l+"\n "+e.data.message2,t)})).catch((function(e){(0,x.Z)("Error","ViewPullout","SingleCheckIn /pullout/updatepulloutnotification",e.message,t)}))}catch(i){(0,x.Z)("Error","ViewPullout","SingleCheckIn /pullout/updatepulloutnotification",i.message,t)}}(e):"No Record Found"==i&&(0,x.Z)("Message","ViewPullout","CheckAssetReceive /pullout/checkpulloutnotification ","Asset previously received ( "+l+" )",t)})).catch((function(e){(0,x.Z)("Error","ViewPullout","CheckAssetReceive /pullout/checkpulloutnotification"," Error then/catch \n "+e.message,t)}))}catch(a){(0,x.Z)("Error","ViewPullout","CheckAssetReceive /pullout/checkpulloutnotification"," Error try/catch \n "+a.message,t)}}function K(){z(!1)}return(0,o.useEffect)((function(){!function(){""==t&&T();var e="http://localhost:3001/pullout/viewallpullout";n.Z.post(e).then((function(e){var l=e.data.message;"Record Found"==l&&(console.log(t),D(e.data.result))})).catch((function(e){(0,x.Z)("Error","ViewPullout","LoadData pullout/viewallpullout",e.message,t)}))}()}),[]),(0,o.useEffect)((function(){}),[E]),(0,j.jsx)(u.b7,{xs:12,children:(0,j.jsxs)(u.xH,{className:"mb-3",size:"sm",children:[(0,j.jsx)(u.bn,{children:(0,j.jsxs)("strong",{children:["View Pullout ",(0,j.jsx)("span",{className:"message",style:{color:N},children:(0,j.jsx)("p",{children:C})})," "]})}),(0,j.jsx)(u.lx,{children:(0,j.jsx)(u.rb,{children:(0,j.jsx)(u.b7,{xs:12,children:(0,j.jsxs)(u.sl,{children:[(0,j.jsx)(u.YR,{size:"sm",className:"mb-3",children:(0,j.jsx)("div",{style:{height:400,width:"100%"},children:(0,j.jsx)(s._$,{rows:E,columns:Y,initialState:{pagination:{paginationModel:{pageSize:10}}},pageSizeOptions:[10],rowSelection:!0,getRowId:function(e){return e.id},checkboxSelection:!0,disableRowSelectionOnClick:!0,onRowSelectionModelChange:function(e){return O(e)}})})}),(0,j.jsx)("div",{className:"d-grid",children:(0,j.jsxs)(d.Z,{open:M,onClose:K,PaperComponent:function(e){return(0,j.jsx)(v(),{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:(0,j.jsx)(m.Z,(0,a.Z)({},e))})},"aria-labelledby":"draggable-dialog-title",children:[(0,j.jsx)(g.Z,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Receive Asset"}),(0,j.jsx)(p.Z,{children:(0,j.jsx)(f.Z,{children:"You acknowledge asset will be receive from user \n advice and will be checkin to IT !"})}),(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(r.Z,{autoFocus:!0,onClick:K,children:"Cancel"}),(0,j.jsx)(r.Z,{onClick:function(t){t.preventDefault;try{z(!1),L.forEach((function(e,t){t,H(e)}))}catch(l){0}finally{e("/base/assetview")}},children:" Receive"})]})]})}),(0,j.jsx)("div",{className:"d-grid",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,j.jsx)(u.u5,{style:{width:"150%"},onClick:function(){z(!0)},color:"success",children:"Process Receive"})})]})})})})]})})}}}]);
//# sourceMappingURL=3629.c941992c.chunk.js.map