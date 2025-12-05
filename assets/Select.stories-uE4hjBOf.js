var m=Object.defineProperty,i=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var s=(a,e,l)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,n=(a,e)=>{for(var l in e||(e={}))v.call(e,l)&&s(a,l,e[l]);if(o)for(var l of o(e))S.call(e,l)&&s(a,l,e[l]);return a},t=(a,e)=>i(a,u(e));import{h as b}from"./NavigationItemsService-CPA2tgby.js";const y={title:"Components/Data Entry/Select",component:b,args:{}},r={args:{placeholder:"Select Environment",options:[{label:"All",value:"all"},{label:"Prod",value:"prod"},{label:"Dev",value:"dev"}],style:{width:"180px"}}};var c,p,d;r.parameters=t(n({},r.parameters),{docs:t(n({},(c=r.parameters)==null?void 0:c.docs),{source:n({originalSource:`{
  args: {
    placeholder: 'Select Environment',
    options: [{
      label: 'All',
      value: 'all'
    }, {
      label: 'Prod',
      value: 'prod'
    }, {
      label: 'Dev',
      value: 'dev'
    }],
    style: {
      width: '180px'
    }
  }
}`},(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source)})});const g=["Primary"],P=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{P as S,y as m};
