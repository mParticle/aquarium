var B=Object.defineProperty,R=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var u=(o,e,a)=>e in o?B(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,n=(o,e)=>{for(var a in e||(e={}))y.call(e,a)&&u(o,a,e[a]);if(p)for(var a of p(e))O.call(e,a)&&u(o,a,e[a]);return o},t=(o,e)=>R(o,b(e));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{R as i}from"./GlobalNavigation-DgsMOKTE.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-4dnY1EES.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-0c7aa-qo.js";import"./_baseClone-u1J3oOXU.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const _={title:"Components/Data Entry/Radio/RadioGroup",component:i.Group,args:{buttonStyle:void 0,defaultValue:void 0,disabled:!1,name:void 0,options:void 0,optionType:void 0,size:"middle",value:void 0,onChange:void 0,children:void 0}},l={args:{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",title:"Orange"}],optionType:"default"}},d={args:{defaultValue:"a",children:[r.jsx(i.Button,{value:"a",children:"Hangzhou"},"a"),r.jsx(i.Button,{value:"b",children:"Shanghai"},"b"),r.jsx(i.Button,{value:"c",children:"Beijing"},"c"),r.jsx(i.Button,{value:"d",children:"Chengdu"},"d")]}};var s,m,c;l.parameters=t(n({},l.parameters),{docs:t(n({},(s=l.parameters)==null?void 0:s.docs),{source:n({originalSource:`{
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
}`},(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source)})});var v,g,h;d.parameters=t(n({},d.parameters),{docs:t(n({},(v=d.parameters)==null?void 0:v.docs),{source:n({originalSource:`{
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
}`},(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});const D=["WithOptionsAndOptionType","WithRadioButtons"];export{l as WithOptionsAndOptionType,d as WithRadioButtons,D as __namedExportsOrder,_ as default};
