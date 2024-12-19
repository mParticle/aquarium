var g=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(o,t,e)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,r=(o,t)=>{for(var e in t||(t={}))T.call(t,e)&&l(o,e,t[e]);if(p)for(var e of p(t))u.call(t,e)&&l(o,e,t[e]);return o},i=(o,t)=>f(o,h(t));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{T as d,o as b}from"./GlobalNavigation-ByoW-fgh.js";import"./_baseClone-DBzvlRjn.js";const x={title:"Components/Data Display/Tooltip",component:o=>s.jsx(d,i(r({},o),{children:s.jsx(b,{children:"Tooltip element"})}))},n={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}};var c,m,a;n.parameters=i(r({},n.parameters),{docs:i(r({},(c=n.parameters)==null?void 0:c.docs),{source:r({originalSource:`{
  args: {
    title: 'Tooltip content',
    placement: 'top',
    trigger: 'hover'
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']
    },
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'click', 'contextMenu']
    }
  }
}`},(a=(m=n.parameters)==null?void 0:m.docs)==null?void 0:a.source)})});const y=["Primary"],R=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{R as T,x as m};
