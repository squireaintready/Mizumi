(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),s=(n(68),n(69),n(109)),l=n(112),o=n(114),u=n(115),m=n(5),b=Object(s.a)((function(e){return{root:{flexGrow:1,maxWidth:"100%"},name:{flexGrow:1,color:"#fac8cf",font:"italic normal 16px/30px Georgia, serif"},company:{flexGrow:1,color:"#fac8cf",font:"italic bold 30px/30px Georgia, serif"}}})),j=function(){var e=b();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsx)(l.a,{position:"static",style:{display:"flex",justifyContent:"space-between",backgroundColor:"#db0050"},children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(u.a,{variant:"h6",className:e.name,children:"Sam Jo's Calculator"}),Object(m.jsx)(u.a,{variant:"h4",className:e.company,children:"MIZUMI"})]})})})},p=n(47),d=n(54),x=n(116),f=n(118),v=n(48),O=n.n(v),h=n(49),g=n.n(h),y=Object(s.a)((function(e){return{container:{display:"flex",alignItems:"center",justifyContent:"center"},fab:{margin:"0px"},textField:{marginBottom:".8rem",marginLeft:"1rem",marginRight:"1rem",maxWidth:"5rem",textAlign:"center","& input[type=number]":{"-moz-appearance":"textfield"},"& input[type=number]::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0},"& input[type=number]::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0}}}}));var w,k=function(e){var t=e.title,n=e.value,r=y(),i=Object(a.useState)(),c=Object(d.a)(i,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){l(n)}),[n]),Object(m.jsx)("div",{className:r.container,children:Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{size:"small",className:r.fab,onClick:function(){s>0&&l((function(){return parseFloat(s)-1}))},children:Object(m.jsx)(O.a,{color:"secondary"})}),Object(m.jsx)(f.a,{type:"number",pattern:"^\\d*(\\.\\d{0,2})?$",onChange:function(e){l(e.target.value)},value:s||"",label:t,className:r.textField}),Object(m.jsx)(x.a,{size:"small",onClick:function(){l((function(){return parseFloat(s)+1}))},children:Object(m.jsx)(g.a,{color:"primary"})})]})})},N=n(50),B=n(117),C=[{name:"Servers",value:0},{name:"Bus boys",value:0},{name:"Bus girls",value:0},{name:"Total Tips",value:0}];var F=function(){return Object(m.jsx)(G,{children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("calculating")},children:[C.map((function(e){return Object(m.jsx)(k,{title:e.name,value:e.value},e.name)})),Object(m.jsx)(B.a,{variant:"contained",color:"primary",type:"submit",children:"Lets Go"})]})})},G=N.a.div(w||(w=Object(p.a)(["\n  margin-top: 1.5rem;\n"]))),S=Object(s.a)((function(e){return{textField:{marginBottom:".8rem",marginLeft:"1rem",marginRight:"1rem",maxWidth:"5rem",textAlign:"center","& input[type=number]":{"-moz-appearance":"textfield"},"& input[type=number]::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0},"& input[type=number]::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0}}}}));var z=function(e){var t=e.result,n=S();return Object(m.jsx)("div",{children:Object(m.jsx)(f.a,{type:"number",pattern:"^\\d*(\\.\\d{0,2})?$",value:t.value||"",label:t.name,className:n.textField})})};var I=function(e){var t=e.results;return Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsx)(z,{result:e},e.name)}))})},A=[{name:"Servers",value:0},{name:"Bus boys",value:0},{name:"Bus girls",value:0},{name:"Return",value:0}];var J=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(F,{}),A[0].value>0?Object(m.jsx)(I,{results:A}):null]})};var L=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{}),Object(m.jsx)(J,{})]})};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.5acd1bdb.chunk.js.map