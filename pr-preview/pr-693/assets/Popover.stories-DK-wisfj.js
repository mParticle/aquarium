var d=Object.defineProperty,u=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var a=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&a(e,t,r[t]);if(c)for(var t of c(r))j.call(r,t)&&a(e,t,r[t]);return e},i=(e,r)=>u(e,h(r));import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{P as g,e as v}from"./NavigationItemsService-CdJZ0KYq.js";const x={title:"Components/Data Display/Popover",component:g,args:{}},y=e=>{const r=o.jsx("div",{children:o.jsx("p",{children:"Content"})});return o.jsx(o.Fragment,{children:o.jsx(g,{content:r,title:"Title",trigger:e.trigger,children:o.jsx(v,{children:e.children})})})},n={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:y};var l,p,m;n.parameters=i(s({},n.parameters),{docs:i(s({},(l=n.parameters)==null?void 0:l.docs),{source:s({originalSource:`{
  args: {
    trigger: 'click',
    children: 'Button with popover'
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus']
    }
  },
  render: PrimaryTemplate
}`},(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});const f=["Primary"],S=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{S as P,x as m};
