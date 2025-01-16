var d=Object.defineProperty,g=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(i,e,t)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,n=(i,e)=>{for(var t in e||(e={}))y.call(e,t)&&l(i,t,e[t]);if(c)for(var t of c(e))f.call(e,t)&&l(i,t,e[t]);return i},r=(i,e)=>g(i,u(e));import{j as a}from"./jsx-runtime-BcCOBRXo.js";import{N as x,g as s,O as b,b as w}from"./GlobalNavigation-CodoGa1z.js";import"./_baseClone-DBzvlRjn.js";const k={title:"Components/Feedback/Notification",component:x,args:{children:a.jsx(s,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,key:void 0,placement:"topRight",role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},o={args:{placement:"bottomLeft",message:a.jsx("span",{style:{fontWeight:b},children:"Join the new mParticle Experience!"}),description:"Managing your data is easier than ever with the new mParticle experience. Try out the latest features with ease, and switch back to the classic experience anytime from the side navigation.",btn:a.jsxs(w,{children:[a.jsx(s,{type:"link",size:"small",children:"Remind me later"}),a.jsx(s,{type:"primary",size:"small",children:"Take me there"})]})}};var m,p,h;o.parameters=r(n({},o.parameters),{docs:r(n({},(m=o.parameters)==null?void 0:m.docs),{source:n({originalSource:`{
  args: {
    placement: 'bottomLeft',
    message: <span style={{
      fontWeight: FontWeightStrong
    }}>Join the new mParticle Experience!</span>,
    description: 'Managing your data is easier than ever with the new mParticle experience. Try out the latest features with ease, and switch back to the classic experience anytime from the side navigation.',
    btn: <Space>
        <Button type="link" size="small">
          Remind me later
        </Button>
        <Button type="primary" size="small">
          Take me there
        </Button>
      </Space>
  }
}`},(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source)})});const S=["Primary"],T=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:S,default:k},Symbol.toStringTag,{value:"Module"}));export{T as N,k as m};
