var m=Object.defineProperty,d=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,o=(t,e)=>{for(var a in e||(e={}))T.call(e,a)&&l(t,a,e[a]);if(s)for(var a of s(e))u.call(e,a)&&l(t,a,e[a]);return t},n=(t,e)=>d(t,p(e));import{q as y}from"./ChartColors-BD6_70YP.js";const f=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2",disabled:!0},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],g={title:"Components/Data Display/Tabs",component:y,args:{}},r={args:{items:f,defaultActiveKey:"1"}};var c,i,b;r.parameters=n(o({},r.parameters),{docs:n(o({},(c=r.parameters)==null?void 0:c.docs),{source:o({originalSource:`{
  args: {
    items,
    defaultActiveKey: '1'
  }
}`},(b=(i=r.parameters)==null?void 0:i.docs)==null?void 0:b.source)})});const P=["Primary"],S=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,__namedExportsOrder:P,default:g},Symbol.toStringTag,{value:"Module"}));export{S as T,g as m};
