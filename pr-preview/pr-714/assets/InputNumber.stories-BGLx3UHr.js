import{Y as t}from"./iframe-B6Y2oegk.js";const n={title:"Components/Data Entry/InputNumber",component:t,args:{max:Number.MAX_SAFE_INTEGER,min:Number.MIN_SAFE_INTEGER,placeholder:"",autoFocus:!1,controls:!0,disabled:!1,status:void 0,size:"middle",decimalSeparator:".",step:1,value:void 0,onChange:e=>{console.log("InputNumber changed: "+e)},onPressEnter:e=>{console.log("Enter key pressed:",e)},onStep:(e,r)=>{console.log("Step:",e,r)}},argTypes:{autoFocus:{control:"boolean"},size:{control:"select",options:["large","middle","small"]},status:{control:"select",options:["error","warning"]}}},o={args:{max:90,min:1,placeholder:"number",suffix:"days",style:{width:120,textAlign:"right"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const s=["Primary"],l=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{l as I,n as m};
