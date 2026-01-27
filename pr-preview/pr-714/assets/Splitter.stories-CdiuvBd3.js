import{ax as r,j as e,ay as i}from"./iframe-_QPLlW2H.js";const d={title:"Components/Layout/Splitter",component:r,args:{}},a={args:{children:[e.jsx(r.Panel,{defaultSize:"50%",style:{paddingLeft:i},children:e.jsx("div",{style:{padding:16,height:200,background:"#f0f0f0"},children:"Panel 1"})},"1"),e.jsx(r.Panel,{children:e.jsx("div",{style:{padding:16,height:200,background:"#e6f4ff"},children:"Panel 2"})},"2")]}},t={args:{layout:"vertical",children:[e.jsx(r.Panel,{defaultSize:"50%",children:e.jsx("div",{style:{padding:16,height:100,background:"#f0f0f0"},children:"Panel 1"})},"1"),e.jsx(r.Panel,{children:e.jsx("div",{style:{padding:16,height:100,background:"#e6f4ff"},children:"Panel 2"})},"2")]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const l=["Primary","Vertical"],s=Object.freeze(Object.defineProperty({__proto__:null,Primary:a,Vertical:t,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{a as P,s as S,t as V};
