"use strict";(self.webpackChunkasset=self.webpackChunkasset||[]).push([[3677],{73677:function(e,t,i){i.r(t);var n=i(4942),a=i(1413),o=i(29439),s=i(72791),r=i(31243),c=i(78983),d=i(27391),l=i(94925),u=i(68096),p=i(23786),m=i(64415),h=i(57689),f=i(17746),g=i(44293),v=i(54970),Z=i(80184);t.default=function(){var e=(0,h.s0)(),t=(0,h.TH)().state,i="";try{i=t.params}catch(z){e("/dashboard")}var b="",x="",y=(0,s.useState)(""),I=(0,o.Z)(y,2),P=I[0],w=I[1],j=(0,s.useState)("red"),S=(0,o.Z)(j,2),C=S[0],D=S[1],M=(0,s.useState)([]),N=(0,o.Z)(M,2),k=N[0],E=N[1],F=(0,s.useState)({positionid:"",name:"",description:"",departmentid:"",departmentname:""}),O=(0,o.Z)(F,2),R=O[0],L=O[1];function V(){try{!function(){try{x=(0,g.pe)(window.localStorage.getItem("Kgr67W@"),f.Z.secretkeylocal)}catch(z){(0,v.Z)("Error","Position","CheckRole Local Storage is tampered",z.message,b),e("/dashboard")}}(),"Admin"==x||"IT"==x?null==!window.localStorage.getItem("id")||"0"!==window.localStorage.getItem("id")?b=(0,g.pe)(window.localStorage.getItem("id"),f.Z.secretkeylocal):e("/login"):e("/dashboard")}catch(z){e("/dashboard")}}function T(e){L((0,a.Z)((0,a.Z)({},R),{},(0,n.Z)({},e.target.name,e.target.value)))}return(0,s.useEffect)((function(){V()}),[]),(0,s.useEffect)((function(){if(""==b&&V(),""==!i){r.Z.post("http://localhost:3001/position/getPositionID",{rowId:i}).then((function(e){var t=e.data.message;"Record Found"==t?L((0,a.Z)((0,a.Z)({},R),{},{positionid:e.data.result[0].positionDisplayID,name:e.data.result[0].positionName,description:e.data.result[0].description,departmentid:e.data.result[0].departmentDisplayID,departmentname:e.data.result[0].departmentName})):"No Record Found"==t&&(0,v.Z)("Message","Position","useEffect /position/getPositionID",t,b)})).catch((function(e){(0,v.Z)("Error","Position","useEffect /position/getPositionID",e.message,b)}))}}),[]),(0,s.useEffect)((function(){""==b&&V();r.Z.post("http://localhost:3001/department/viewalldepartment").then((function(e){var t=e.data.message;"Record Found"==t?E(e.data.result):"No Record Found"==t&&((0,v.Z)("Message","Position","useEffect /position/viewalldepartment",t,b),w("No Department"),D("red"))})).catch((function(e){(0,v.Z)("Message","Position","useEffect /position/viewalldepartment",e.message,b),w("Error in Fetching All Department"),D("red")}))}),[]),(0,s.useEffect)((function(){console.log("")}),[k]),(0,Z.jsx)(c.b7,{xs:12,children:(0,Z.jsxs)(c.xH,{className:"mb-3",size:"sm",children:[(0,Z.jsx)(c.bn,{children:(0,Z.jsxs)("h6",{children:[(0,Z.jsxs)("span",{className:"message",style:{color:"#5da4f5"},children:[" ",(0,Z.jsx)(Z.Fragment,{children:" Position "})]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("strong",{children:[(0,Z.jsx)("span",{className:"message",style:{color:C},children:(0,Z.jsx)("p",{children:P})})," "]})]})}),(0,Z.jsxs)(c.lx,{onSubmit:function(t){try{t.preventDefault(),""==b&&V();var n=R.name,a=R.description,o=R.departmentid;if(""==!n&&""==!a)if(""==i){r.Z.post("http://localhost:3001/position/putPosition",{name:n,description:a,deptid:o,userID:b}).then((function(t){var i=t.data.message;"Insert Success"==i?((0,v.Z)("Message","Position","handleSubmit /position/putPosition"," New Position \n Name: "+n+"\n Desc  :  "+a+"\n DeptID : "+o+"\n User : "+b,b),e("/configurations/positionview")):"Insert Error"==i&&((0,v.Z)("Message","Position","handleSubmit /position/putPosition",t.data.message2,b),w("Error in Inserting new Position"),D("red"))})).catch((function(t){(0,v.Z)("Message","Position","handleSubmit /position/putPosition",t.message,b),e("/500")}))}else{r.Z.post("http://localhost:3001/position/updatePosition",{name:n,description:a,deptid:o,userID:b,rowId:i}).then((function(t){var s=t.data.message;"Update Success"==s?((0,v.Z)("Message","Position","handleSubmit /position/updatePosition"," Update Position  Position ID : "+i+"\n Name: "+n+"\n Desc  :  "+a+"\n DeptID : "+o+"\n User : "+b,b),e("/configurations/positionview")):"Update Error"==s&&((0,v.Z)("Message","Position","handleSubmit /position/updatePosition",t.data.message2,b),w("Error in Updating Position"),D("red"))})).catch((function(e){(0,v.Z)("Message","Position","handleSubmit /position/updatePosition",e.message,b)}))}else w("All fields must not be emtpy"),D("red")}catch(z){(0,v.Z)("Message","Position","handleSubmit ","Error in try/catch  "+z.message,b)}},children:[(0,Z.jsxs)(c.rb,{children:[(0,Z.jsx)(c.b7,{children:(0,Z.jsxs)(c.sl,{children:[(0,Z.jsx)(c.YR,{size:"sm",children:(0,Z.jsxs)(u.Z,{fullWidth:!0,children:[(0,Z.jsx)(l.Z,{children:"Department"}),(0,Z.jsx)(m.Z,{size:"sm",className:"mb-3","aria-label":"Small select example",name:"departmentid",onChange:T,value:R.departmentid,children:k.map((function(e){return(0,Z.jsx)(p.Z,{value:e.id,children:e.departmentName},e.id)}))})]})}),(0,Z.jsx)(c.YR,{size:"sm",className:"mb-3",children:(0,Z.jsx)(d.Z,{onChange:function(e){return T(e)},name:"name",id:"outlined-textarea",value:R.name,fullWidth:!0,label:"Position Name",placeholder:"Position Name"})}),(0,Z.jsx)(c.YR,{size:"sm",className:"mb-3",children:(0,Z.jsx)(d.Z,{onChange:T,name:"description",id:"outlined-textarea",value:R.description,fullWidth:!0,label:"Description",placeholder:"Description",multiline:!0,rows:5})})]})}),(0,Z.jsx)(c.b7,{})]}),(0,Z.jsx)("div",{className:"d-grid",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Z.jsx)(c.u5,{style:{width:"150%"},color:"success",type:"submit",children:"Save"})})]})]})})}},90133:function(e,t,i){i.d(t,{V:function(){return o}});var n=i(75878),a=i(21217);function o(e){return(0,a.Z)("MuiDivider",e)}var s=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=s},96014:function(e,t,i){i.d(t,{f:function(){return o}});var n=i(75878),a=i(21217);function o(e){return(0,a.Z)("MuiListItemIcon",e)}var s=(0,n.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=s},29849:function(e,t,i){i.d(t,{L:function(){return o}});var n=i(75878),a=i(21217);function o(e){return(0,a.Z)("MuiListItemText",e)}var s=(0,n.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=s},23786:function(e,t,i){i.d(t,{Z:function(){return S}});var n=i(4942),a=i(63366),o=i(87462),s=i(72791),r=i(63733),c=i(94419),d=i(12065),l=i(66934),u=i(31402),p=i(66199),m=i(95080),h=i(40162),f=i(42071),g=i(90133),v=i(96014),Z=i(29849),b=i(75878),x=i(21217);function y(e){return(0,x.Z)("MuiMenuItem",e)}var I=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),P=i(80184),w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],j=(0,l.ZP)(m.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,i.dense&&t.dense,i.divider&&t.divider,!i.disableGutters&&t.gutters]}})((function(e){var t,i=e.theme,a=e.ownerState;return(0,o.Z)({},i.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((i.vars||i).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(i.vars||i).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,n.Z)(t,"&.".concat(I.selected),(0,n.Z)({backgroundColor:i.vars?"rgba(".concat(i.vars.palette.primary.mainChannel," / ").concat(i.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity)},"&.".concat(I.focusVisible),{backgroundColor:i.vars?"rgba(".concat(i.vars.palette.primary.mainChannel," / calc(").concat(i.vars.palette.action.selectedOpacity," + ").concat(i.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity+i.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(I.selected,":hover"),{backgroundColor:i.vars?"rgba(".concat(i.vars.palette.primary.mainChannel," / calc(").concat(i.vars.palette.action.selectedOpacity," + ").concat(i.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity+i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:i.vars?"rgba(".concat(i.vars.palette.primary.mainChannel," / ").concat(i.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity)}}),(0,n.Z)(t,"&.".concat(I.focusVisible),{backgroundColor:(i.vars||i).palette.action.focus}),(0,n.Z)(t,"&.".concat(I.disabled),{opacity:(i.vars||i).palette.action.disabledOpacity}),(0,n.Z)(t,"& + .".concat(g.Z.root),{marginTop:i.spacing(1),marginBottom:i.spacing(1)}),(0,n.Z)(t,"& + .".concat(g.Z.inset),{marginLeft:52}),(0,n.Z)(t,"& .".concat(Z.Z.root),{marginTop:0,marginBottom:0}),(0,n.Z)(t,"& .".concat(Z.Z.inset),{paddingLeft:36}),(0,n.Z)(t,"& .".concat(v.Z.root),{minWidth:36}),t),!a.dense&&(0,n.Z)({},i.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},i.typography.body2,(0,n.Z)({},"& .".concat(v.Z.root," svg"),{fontSize:"1.25rem"})))})),S=s.forwardRef((function(e,t){var i=(0,u.Z)({props:e,name:"MuiMenuItem"}),n=i.autoFocus,d=void 0!==n&&n,l=i.component,m=void 0===l?"li":l,g=i.dense,v=void 0!==g&&g,Z=i.divider,b=void 0!==Z&&Z,x=i.disableGutters,I=void 0!==x&&x,S=i.focusVisibleClassName,C=i.role,D=void 0===C?"menuitem":C,M=i.tabIndex,N=i.className,k=(0,a.Z)(i,w),E=s.useContext(p.Z),F=s.useMemo((function(){return{dense:v||E.dense||!1,disableGutters:I}}),[E.dense,v,I]),O=s.useRef(null);(0,h.Z)((function(){d&&O.current&&O.current.focus()}),[d]);var R,L=(0,o.Z)({},i,{dense:F.dense,divider:b,disableGutters:I}),V=function(e){var t=e.disabled,i=e.dense,n=e.divider,a=e.disableGutters,s=e.selected,r=e.classes,d={root:["root",i&&"dense",t&&"disabled",!a&&"gutters",n&&"divider",s&&"selected"]},l=(0,c.Z)(d,y,r);return(0,o.Z)({},r,l)}(i),T=(0,f.Z)(O,t);return i.disabled||(R=void 0!==M?M:-1),(0,P.jsx)(p.Z.Provider,{value:F,children:(0,P.jsx)(j,(0,o.Z)({ref:T,role:D,tabIndex:R,component:m,focusVisibleClassName:(0,r.Z)(V.focusVisible,S),className:(0,r.Z)(V.root,N)},k,{ownerState:L,classes:V}))})}))}}]);
//# sourceMappingURL=3677.5e935c51.chunk.js.map