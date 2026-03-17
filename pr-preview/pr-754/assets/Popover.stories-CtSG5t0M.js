var T=Object.defineProperty,L=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(e,r,o)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,n=(e,r)=>{for(var o in r||(r={}))E.call(r,o)&&m(e,o,r[o]);if(g)for(var o of g(r))w.call(r,o)&&m(e,o,r[o]);return e},s=(e,r)=>L(e,b(r));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{P as a,c as y,m as S,F as _,b as p}from"./UnauthorizedTooltip-im5yXLuZ.js";const B={title:"Components/Data Display/Popover",component:a,args:{}},c={args:{title:"Popover Title",content:"Popover content goes here",trigger:"click",placement:"top",arrow:!0},argTypes:{trigger:{control:"select",options:["click","hover","focus"]},placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight"]},arrow:{control:"select",options:[!1,!0]}},render:e=>t.jsx(a,s(n({},e),{children:t.jsx(y,{children:"Click me"})}))},R=e=>{const r=t.jsx("div",{children:t.jsx("p",{children:"Content"})});return t.jsx(t.Fragment,{children:t.jsx(a,{content:r,title:"Title",trigger:e.trigger,children:t.jsx(y,{children:e.children})})})},i={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:R},C=e=>{var o;const r=t.jsxs(_,{gap:"small",vertical:!0,children:[t.jsx(p.Link,{href:"#link1",children:"Link Example 1"}),t.jsx(p.Link,{href:"#link2",children:"Link Example 2"}),t.jsx(p.Link,{href:"#link3",children:"Link Example 3"})]});return t.jsx(t.Fragment,{children:t.jsx(a,{content:r,title:"Details",trigger:e.trigger,children:t.jsx(S,{style:{margin:"0",cursor:"pointer"},children:(o=e.children)!=null?o:"3"})})})},l={args:{trigger:"click",children:"3"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:C};var h,d,u;c.parameters=s(n({},c.parameters),{docs:s(n({},(h=c.parameters)==null?void 0:h.docs),{source:n({originalSource:`{
  args: {
    title: 'Popover Title',
    content: 'Popover content goes here',
    trigger: 'click',
    placement: 'top',
    arrow: true
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus']
    },
    placement: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
    },
    arrow: {
      control: 'select',
      options: [false, true]
    }
  },
  render: args => <Popover {...args}>
      <Button>Click me</Button>
    </Popover>
}`},(u=(d=c.parameters)==null?void 0:d.docs)==null?void 0:u.source)})});var k,x,f;i.parameters=s(n({},i.parameters),{docs:s(n({},(k=i.parameters)==null?void 0:k.docs),{source:n({originalSource:`{
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
}`},(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source)})});var v,P,j;l.parameters=s(n({},l.parameters),{docs:s(n({},(v=l.parameters)==null?void 0:v.docs),{source:n({originalSource:`{
  args: {
    trigger: 'click',
    children: '3'
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus']
    }
  },
  render: PopoverWithLinksTemplate
}`},(j=(P=l.parameters)==null?void 0:P.docs)==null?void 0:j.source)})});const F=["Playground","Primary","ExampleWithLinks"],z=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithLinks:l,Playground:c,Primary:i,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{l as E,z as P,i as a,c as b};
