var h=Object.defineProperty,b=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var c=(n,e,o)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,l=(n,e)=>{for(var o in e||(e={}))g.call(e,o)&&c(n,o,e[o]);if(s)for(var o of s(e))z.call(e,o)&&c(n,o,e[o]);return n},r=(n,e)=>b(n,f(e));import{j as D}from"./UnauthorizedTooltip-CEYl6V1S.js";const k={title:"Components/Data Display/Descriptions",component:D,args:{items:[{label:"Item 1",children:"Value 1"}]}},t={args:{title:"User Info",bordered:!1,column:3,size:"default",layout:"horizontal",items:[{key:"1",label:"Name",children:"John Doe"},{key:"2",label:"Email",children:"john@example.com"},{key:"3",label:"Role",children:"Admin"}]},argTypes:{bordered:{control:"select",options:[!1,!0]},column:{control:"select",options:[1,2,3,4]},size:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},a={};var i,m,d;t.parameters=r(l({},t.parameters),{docs:r(l({},(i=t.parameters)==null?void 0:i.docs),{source:l({originalSource:`{
  args: {
    title: 'User Info',
    bordered: false,
    column: 3,
    size: 'default',
    layout: 'horizontal',
    items: [{
      key: '1',
      label: 'Name',
      children: 'John Doe'
    }, {
      key: '2',
      label: 'Email',
      children: 'john@example.com'
    }, {
      key: '3',
      label: 'Role',
      children: 'Admin'
    }]
  },
  argTypes: {
    bordered: {
      control: 'select',
      options: [false, true]
    },
    column: {
      control: 'select',
      options: [1, 2, 3, 4]
    },
    size: {
      control: 'select',
      options: ['default', 'middle', 'small']
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
}`},(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source)})});var p,u,y;a.parameters=r(l({},a.parameters),{docs:r(l({},(p=a.parameters)==null?void 0:p.docs),{source:l({originalSource:"{}"},(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source)})});const P=["Playground","Primary"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,Primary:a,__namedExportsOrder:P,default:k},Symbol.toStringTag,{value:"Module"}));export{S as D,a as P,t as a};
