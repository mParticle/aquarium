var B=Object.defineProperty,R=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var u=(a,e,o)=>e in a?B(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,t=(a,e)=>{for(var o in e||(e={}))y.call(e,o)&&u(a,o,e[o]);if(p)for(var o of p(e))O.call(e,o)&&u(a,o,e[o]);return a},n=(a,e)=>R(a,b(e));import{j as r}from"./jsx-runtime-CS-_a2eV.js";import{R as i}from"./GlobalNavigation-Be6idjSk.js";import"./index-Ca44TZ0D.js";import"./ConfigProvider-aHzMMMgW.js";import"./LightTheme-BZ07JyGW.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./_baseClone-BwI25-yt.js";import"./_getPrototype-fDUIJvdn.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";const q={title:"Components/Data Entry/Radio/RadioGroup",component:i.Group,args:{buttonStyle:void 0,defaultValue:void 0,disabled:!1,name:void 0,options:void 0,optionType:void 0,size:"middle",value:void 0,onChange:void 0,children:void 0}},l={args:{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",title:"Orange"}],optionType:"default"}},d={args:{defaultValue:"a",children:[r.jsx(i.Button,{value:"a",children:"Hangzhou"},"a"),r.jsx(i.Button,{value:"b",children:"Shanghai"},"b"),r.jsx(i.Button,{value:"c",children:"Beijing"},"c"),r.jsx(i.Button,{value:"d",children:"Chengdu"},"d")]}};var s,m,c;l.parameters=n(t({},l.parameters),{docs:n(t({},(s=l.parameters)==null?void 0:s.docs),{source:t({originalSource:`{
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
}`},(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});const w=["WithOptionsAndOptionType","WithRadioButtons"];export{l as WithOptionsAndOptionType,d as WithRadioButtons,w as __namedExportsOrder,q as default};
