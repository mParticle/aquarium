var B=Object.defineProperty,R=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var p=(o,e,a)=>e in o?B(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,t=(o,e)=>{for(var a in e||(e={}))y.call(e,a)&&p(o,a,e[a]);if(u)for(var a of u(e))O.call(e,a)&&p(o,a,e[a]);return o},n=(o,e)=>R(o,b(e));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{R as i}from"./GlobalNavigation-CsWFFtg2.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C-vZtyW2.js";import"./useToken-B2DZIv7q.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const H={title:"Components/Data Entry/Radio/RadioGroup",component:i.Group,args:{buttonStyle:void 0,defaultValue:void 0,disabled:!1,name:void 0,options:void 0,optionType:void 0,size:"middle",value:void 0,onChange:void 0,children:void 0}},l={args:{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",title:"Orange"}],optionType:"default"}},d={args:{defaultValue:"a",children:[r.jsx(i.Button,{value:"a",children:"Hangzhou"},"a"),r.jsx(i.Button,{value:"b",children:"Shanghai"},"b"),r.jsx(i.Button,{value:"c",children:"Beijing"},"c"),r.jsx(i.Button,{value:"d",children:"Chengdu"},"d")]}};var s,m,c;l.parameters=n(t({},l.parameters),{docs:n(t({},(s=l.parameters)==null?void 0:s.docs),{source:t({originalSource:`{
  args: {
    options: [{
      label: 'Apple',
      value: 'Apple'
    }, {
      label: 'Pear',
      value: 'Pear'
    }, {
      label: 'Orange',
      value: 'Orange',
      title: 'Orange'
    }],
    optionType: 'default'
  }
}`},(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source)})});var v,g,h;d.parameters=n(t({},d.parameters),{docs:n(t({},(v=d.parameters)==null?void 0:v.docs),{source:t({originalSource:`{
  args: {
    defaultValue: 'a',
    children: [<Radio.Button key="a" value="a">
        Hangzhou
      </Radio.Button>, <Radio.Button key="b" value="b">
        Shanghai
      </Radio.Button>, <Radio.Button key="c" value="c">
        Beijing
      </Radio.Button>, <Radio.Button key="d" value="d">
        Chengdu
      </Radio.Button>]
  }
}`},(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});const _=["WithOptionsAndOptionType","WithRadioButtons"];export{l as WithOptionsAndOptionType,d as WithRadioButtons,_ as __namedExportsOrder,H as default};
