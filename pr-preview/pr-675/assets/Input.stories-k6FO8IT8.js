var T=Object.defineProperty,y=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var h=(e,r,a)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,t=(e,r)=>{for(var a in r||(r={}))w.call(r,a)&&h(e,a,r[a]);if(m)for(var a of m(r))E.call(r,a)&&h(e,a,r[a]);return e},o=(e,r)=>y(e,A(r));import{j as c}from"./jsx-runtime-C9TrHvcC.js";import{r as _}from"./index-3OP4wdng.js";import{t as u,a as b,I as P}from"./NavigationItemsService-PqRv3HGK.js";import"./ErrorStateIcon-BS17_6tf.js";import"./SuccessStateIcon-HuPZrMr2.js";import"./WarningStateIcon-Duz4utQS.js";import"./_baseClone-DwBCp-Ss.js";const B={title:"Components/Data Entry/Input",component:u,args:{placeholder:"Input Placeholder",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:e=>{console.log("Input changed: "+e.target.value)},onPressEnter:e=>{console.log("Enter key pressed: "+String(e))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},n={args:{value:""},render:e=>{var d;const[r,a]=_.useState((d=e.value)!=null?d:"");return c.jsx(u,o(t({},e),{value:r,onChange:p=>{var i;a(p.target.value),(i=e.onChange)==null||i.call(e,p)}}))}},s={render:()=>c.jsx(u.TextArea,{size:"middle",autoSize:{minRows:2},placeholder:"Description (optional)",children:"Test"})},l={render:()=>c.jsx(b,{children:c.jsx(u,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:c.jsx(P,{name:"search",size:"sm",color:"default"})})})};var g,x,S;n.parameters=o(t({},n.parameters),{docs:o(t({},(g=n.parameters)==null?void 0:g.docs),{source:t({originalSource:`{
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
}`},(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source)})});var v,f,I;s.parameters=o(t({},s.parameters),{docs:o(t({},(v=s.parameters)==null?void 0:v.docs),{source:t({originalSource:`{
  render: () => {
    return <Input.TextArea size="middle" autoSize={{
      minRows: 2
    }} placeholder="Description (optional)">
        Test
      </Input.TextArea>;
  }
}`},(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source)})});var j,z,C;l.parameters=o(t({},l.parameters),{docs:o(t({},(j=l.parameters)==null?void 0:j.docs),{source:t({originalSource:`{
  render: () => {
    return <Space>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} />
      </Space>;
  }
}`},(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source)})});const D=["Primary","TextArea","WithSearchAddon"],q=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,TextArea:s,WithSearchAddon:l,__namedExportsOrder:D,default:B},Symbol.toStringTag,{value:"Module"}));export{q as I,B as m};
