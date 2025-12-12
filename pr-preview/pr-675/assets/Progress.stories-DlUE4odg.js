var i=Object.defineProperty,g=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(r,e,t)=>e in r?i(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,a=(r,e)=>{for(var t in e||(e={}))u.call(e,t)&&n(r,t,e[t]);if(c)for(var t of c(e))f.call(e,t)&&n(r,t,e[t]);return r},s=(r,e)=>g(r,d(e));import{_ as P}from"./NavigationItemsService-CoyEKvRk.js";const _={title:"Components/Feedback/Progress",component:P,args:{percent:0,format:r=>`${r}%`}},o={args:{percent:50,size:14,type:"circle",format:()=>"Calculating: 50% complete"}};var m,p,l;o.parameters=s(a({},o.parameters),{docs:s(a({},(m=o.parameters)==null?void 0:m.docs),{source:a({originalSource:`{
  args: {
    percent: 50,
    size: 14,
    type: 'circle',
    format: () => \`Calculating: 50% complete\`
  }
}`},(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source)})});const y=["Primary"],z=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{z as P,_ as m};
