var f=Object.defineProperty,g=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))T.call(e,t)&&i(o,t,e[t]);if(l)for(var t of l(e))_.call(e,t)&&i(o,t,e[t]);return o},a=(o,e)=>g(o,P(e));import{o as h}from"./UnauthorizedTooltip-C5-ru9Sh.js";const u=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2",disabled:!0},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],v={title:"Components/Data Display/Tabs",component:h,args:{}},s={args:{items:u,defaultActiveKey:"1",type:"line",size:"middle",tabPosition:"top",centered:!1},argTypes:{type:{control:"select",options:["line","card","editable-card"]},size:{control:"select",options:["large","middle","small"]},tabPosition:{control:"select",options:["top","right","bottom","left"]},centered:{control:"select",options:[!1,!0]}}},r={args:{items:u,defaultActiveKey:"1"}};var c,d,p;s.parameters=a(n({},s.parameters),{docs:a(n({},(c=s.parameters)==null?void 0:c.docs),{source:n({originalSource:`{
  args: {
    items,
    defaultActiveKey: '1',
    type: 'line',
    size: 'middle',
    tabPosition: 'top',
    centered: false
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card']
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small']
    },
    tabPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left']
    },
    centered: {
      control: 'select',
      options: [false, true]
    }
  }
}`},(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source)})});var m,b,y;r.parameters=a(n({},r.parameters),{docs:a(n({},(m=r.parameters)==null?void 0:m.docs),{source:n({originalSource:`{
  args: {
    items,
    defaultActiveKey: '1'
  }
}`},(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source)})});const z=["Playground","Primary"],C=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,Primary:r,__namedExportsOrder:z,default:v},Symbol.toStringTag,{value:"Module"}));export{r as P,C as T,s as a};
