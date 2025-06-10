var S=Object.defineProperty,m=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var c=(r,e,a)=>e in r?S(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,i=(r,e)=>{for(var a in e||(e={}))v.call(e,a)&&c(r,a,e[a]);if(o)for(var a of o(e))j.call(e,a)&&c(r,a,e[a]);return r},d=(r,e)=>m(r,y(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{_ as s,$ as k}from"./NavigationItemsService-DIaCrZvX.js";const x={title:"Components/General/Splitter",component:s,args:{}},l={args:{children:[t.jsx(s.Panel,{defaultSize:"50%",style:{paddingLeft:k},children:t.jsx("div",{style:{padding:16,height:200,background:"#f0f0f0"},children:"Panel 1"})},"1"),t.jsx(s.Panel,{children:t.jsx("div",{style:{padding:16,height:200,background:"#e6f4ff"},children:"Panel 2"})},"2")]}},n={args:{layout:"vertical",children:[t.jsx(s.Panel,{defaultSize:"50%",children:t.jsx("div",{style:{padding:16,height:100,background:"#f0f0f0"},children:"Panel 1"})},"1"),t.jsx(s.Panel,{children:t.jsx("div",{style:{padding:16,height:100,background:"#e6f4ff"},children:"Panel 2"})},"2")]}};var p,g,f;l.parameters=d(i({},l.parameters),{docs:d(i({},(p=l.parameters)==null?void 0:p.docs),{source:i({originalSource:`{
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
}`},(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source)})});var h,P,u;n.parameters=d(i({},n.parameters),{docs:d(i({},(h=n.parameters)==null?void 0:h.docs),{source:i({originalSource:`{
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
}`},(u=(P=n.parameters)==null?void 0:P.docs)==null?void 0:u.source)})});const b=["Primary","Vertical"],O=Object.freeze(Object.defineProperty({__proto__:null,Primary:l,Vertical:n,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{l as P,O as S,n as V};
