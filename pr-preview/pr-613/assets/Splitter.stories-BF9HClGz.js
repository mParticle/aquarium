var S=Object.defineProperty,m=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var c=(a,e,r)=>e in a?S(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,i=(a,e)=>{for(var r in e||(e={}))v.call(e,r)&&c(a,r,e[r]);if(o)for(var r of o(e))j.call(e,r)&&c(a,r,e[r]);return a},l=(a,e)=>m(a,y(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{_ as s}from"./NavigationItemsService-CPJPZyUP.js";const k={title:"Components/General/Splitter",component:s,args:{}},n={args:{children:[t.jsx(s.Panel,{defaultSize:"50%",children:t.jsx("div",{style:{padding:16,height:200,background:"#f0f0f0"},children:"Panel 1"})},"1"),t.jsx(s.Panel,{children:t.jsx("div",{style:{padding:16,height:200,background:"#e6f4ff"},children:"Panel 2"})},"2")]}},d={args:{layout:"vertical",children:[t.jsx(s.Panel,{defaultSize:"50%",children:t.jsx("div",{style:{padding:16,height:100,background:"#f0f0f0"},children:"Panel 1"})},"1"),t.jsx(s.Panel,{children:t.jsx("div",{style:{padding:16,height:100,background:"#e6f4ff"},children:"Panel 2"})},"2")]}};var p,f,g;n.parameters=l(i({},n.parameters),{docs:l(i({},(p=n.parameters)==null?void 0:p.docs),{source:i({originalSource:`{
  args: {
    children: [<Splitter.Panel key="1" defaultSize="50%">
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
}`},(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source)})});var h,u,P;d.parameters=l(i({},d.parameters),{docs:l(i({},(h=d.parameters)==null?void 0:h.docs),{source:i({originalSource:`{
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
}`},(P=(u=d.parameters)==null?void 0:u.docs)==null?void 0:P.source)})});const x=["Primary","Vertical"],O=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,Vertical:d,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{n as P,O as S,d as V};
