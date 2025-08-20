var y=Object.defineProperty,S=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,i=(t,e)=>{for(var a in e||(e={}))v.call(e,a)&&c(t,a,e[a]);if(o)for(var a of o(e))j.call(e,a)&&c(t,a,e[a]);return t},d=(t,e)=>S(t,m(e));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{a4 as s,a5 as k}from"./NavigationItemsService-5z9DhF0U.js";const x={title:"Components/Layout/Splitter",component:s,args:{}},l={args:{children:[r.jsx(s.Panel,{defaultSize:"50%",style:{paddingLeft:k},children:r.jsx("div",{style:{padding:16,height:200,background:"#f0f0f0"},children:"Panel 1"})},"1"),r.jsx(s.Panel,{children:r.jsx("div",{style:{padding:16,height:200,background:"#e6f4ff"},children:"Panel 2"})},"2")]}},n={args:{layout:"vertical",children:[r.jsx(s.Panel,{defaultSize:"50%",children:r.jsx("div",{style:{padding:16,height:100,background:"#f0f0f0"},children:"Panel 1"})},"1"),r.jsx(s.Panel,{children:r.jsx("div",{style:{padding:16,height:100,background:"#e6f4ff"},children:"Panel 2"})},"2")]}};var p,g,f;l.parameters=d(i({},l.parameters),{docs:d(i({},(p=l.parameters)==null?void 0:p.docs),{source:i({originalSource:`{
  args: {
    children: [<Splitter.Panel key="1" defaultSize="50%" style={{
      paddingLeft: PaddingMd
    }}>
        <div style={{
        padding: 16,
        height: 200,
        background: '#f0f0f0'
      }}>Panel 1</div>
      </Splitter.Panel>, <Splitter.Panel key="2">
        <div style={{
        padding: 16,
        height: 200,
        background: '#e6f4ff'
      }}>Panel 2</div>
      </Splitter.Panel>]
  }
}`},(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source)})});var h,u,P;n.parameters=d(i({},n.parameters),{docs:d(i({},(h=n.parameters)==null?void 0:h.docs),{source:i({originalSource:`{
  args: {
    layout: 'vertical',
    children: [<Splitter.Panel key="1" defaultSize="50%">
        <div style={{
        padding: 16,
        height: 100,
        background: '#f0f0f0'
      }}>Panel 1</div>
      </Splitter.Panel>, <Splitter.Panel key="2">
        <div style={{
        padding: 16,
        height: 100,
        background: '#e6f4ff'
      }}>Panel 2</div>
      </Splitter.Panel>]
  }
}`},(P=(u=n.parameters)==null?void 0:u.docs)==null?void 0:P.source)})});const b=["Primary","Vertical"],M=Object.freeze(Object.defineProperty({__proto__:null,Primary:l,Vertical:n,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{l as P,M as S,n as V};
