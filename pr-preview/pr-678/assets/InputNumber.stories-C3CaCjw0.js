var u=Object.defineProperty,d=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var l=(e,o,r)=>o in e?u(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,n=(e,o)=>{for(var r in o||(o={}))g.call(o,r)&&l(e,r,o[r]);if(a)for(var r of a(o))b.call(o,r)&&l(e,r,o[r]);return e},s=(e,o)=>d(e,p(o));import{w as y}from"./NavigationItemsService-Ds_xsp8-.js";const f={title:"Components/Data Entry/InputNumber",component:y,args:{max:Number.MAX_SAFE_INTEGER,min:Number.MIN_SAFE_INTEGER,placeholder:"",autoFocus:!1,controls:!0,disabled:!1,status:void 0,size:"middle",decimalSeparator:".",step:1,value:void 0,onChange:e=>{console.log("InputNumber changed: "+e)},onPressEnter:e=>{console.log("Enter key pressed:",e)},onStep:(e,o)=>{console.log("Step:",e,o)}},argTypes:{autoFocus:{control:"boolean"},size:{control:"select",options:["large","middle","small"]},status:{control:"select",options:["error","warning"]}}},t={args:{max:90,min:1,placeholder:"number",suffix:"days",style:{width:120,textAlign:"right"}}};var m,i,c;t.parameters=s(n({},t.parameters),{docs:s(n({},(m=t.parameters)==null?void 0:m.docs),{source:n({originalSource:`{
  args: {
    max: 90,
    min: 1,
    placeholder: 'number',
    suffix: 'days',
    style: {
      width: 120,
      textAlign: 'right'
    }
  }
}`},(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source)})});const E=["Primary"],x=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,__namedExportsOrder:E,default:f},Symbol.toStringTag,{value:"Module"}));export{x as I,f as m};
