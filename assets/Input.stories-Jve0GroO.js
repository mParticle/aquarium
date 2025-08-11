var T=Object.defineProperty,y=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,r,a)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,o=(e,r)=>{for(var a in r||(r={}))b.call(r,a)&&h(e,a,r[a]);if(m)for(var a of m(r))w.call(r,a)&&h(e,a,r[a]);return e},t=(e,r)=>y(e,A(r));import{j as c}from"./jsx-runtime-BcCOBRXo.js";import{r as E}from"./index-CNk6hRaE.js";import{x as u,b as _,I as P}from"./NavigationItemsService-D42eRfnf.js";import"./_baseClone-DBzvlRjn.js";const B={title:"Components/Data Entry/Input",component:u,args:{placeholder:"Input Placeholder",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:e=>{console.log("Input changed: "+e.target.value)},onPressEnter:e=>{console.log("Enter key pressed: "+String(e))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},n={args:{value:""},render:e=>{var d;const[r,a]=E.useState((d=e.value)!=null?d:"");return c.jsx(u,t(o({},e),{value:r,onChange:p=>{var i;a(p.target.value),(i=e.onChange)==null||i.call(e,p)}}))}},s={render:()=>c.jsx(u.TextArea,{size:"middle",autoSize:{minRows:2},placeholder:"Description (optional)",children:"Test"})},l={render:()=>c.jsx(_,{children:c.jsx(u,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:c.jsx(P,{name:"search",size:"sm",color:"default"})})})};var g,x,S;n.parameters=t(o({},n.parameters),{docs:t(o({},(g=n.parameters)==null?void 0:g.docs),{source:o({originalSource:`{
  args: {
    value: ''
  },
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <Input {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  }
}`},(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source)})});var v,f,I;s.parameters=t(o({},s.parameters),{docs:t(o({},(v=s.parameters)==null?void 0:v.docs),{source:o({originalSource:`{
  render: () => {
    return <Input.TextArea size="middle" autoSize={{
      minRows: 2
    }} placeholder="Description (optional)">
        Test
      </Input.TextArea>;
  }
}`},(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source)})});var j,z,C;l.parameters=t(o({},l.parameters),{docs:t(o({},(j=l.parameters)==null?void 0:j.docs),{source:o({originalSource:`{
  render: () => {
    return <Space>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} />
      </Space>;
  }
}`},(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source)})});const D=["Primary","TextArea","WithSearchAddon"],W=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,TextArea:s,WithSearchAddon:l,__namedExportsOrder:D,default:B},Symbol.toStringTag,{value:"Module"}));export{W as I,B as m};
