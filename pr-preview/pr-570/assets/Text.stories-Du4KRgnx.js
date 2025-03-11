var U=Object.defineProperty,F=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var g=(r,t,o)=>t in r?U(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,s=(r,t)=>{for(var o in t||(t={}))G.call(t,o)&&g(r,o,t[o]);if(T)for(var o of T(t))O.call(t,o)&&g(r,o,t[o]);return r},i=(r,t)=>F(r,_(t));var h=(r,t,o)=>new Promise((z,m)=>{var I=n=>{try{y(o.next(n))}catch(u){m(u)}},L=n=>{try{y(o.throw(n))}catch(u){m(u)}},y=n=>n.done?z(n.value):Promise.resolve(n.value).then(I,L);y((o=o.apply(r,t)).next())});import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{f as a,ac as R,b as P,ae as B,z as H}from"./NavigationItemsService-CwdiiEdA.js";import"./_baseClone-DBzvlRjn.js";import{E as x}from"./ExampleStory-Drhtk6tb.js";import{r as J}from"./index-CNk6hRaE.js";import{e as K}from"./index-BU0ZtLqn.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const oe={title:"Components/General/Typography/Text",component:r=>e.jsx(a.Text,i(s({},r),{children:r.children})),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:R},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},l={play:r=>h(void 0,null,function*(){const t=r.canvasElement.querySelector("span");K(t==null?void 0:t.textContent).toEqual("Example Text")})},p={render:()=>e.jsx(x,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsxs(P,{direction:"vertical",children:[e.jsx(a.Text,{children:"Aquarium (default)"}),e.jsx(a.Text,{type:"secondary",children:"Aquarium (secondary)"}),e.jsx(a.Text,{type:"success",children:"Aquarium (success)"}),e.jsx(a.Text,{type:"warning",children:"Aquarium (warning)"}),e.jsx(a.Text,{type:"danger",children:"Aquarium (danger)"}),e.jsx(a.Text,{disabled:!0,children:"Aquarium (disabled)"}),e.jsx(a.Text,{mark:!0,children:"Aquarium (mark)"}),e.jsx(a.Text,{code:!0,children:"Aquarium (code)"}),e.jsx(a.Text,{keyboard:!0,children:"Aquarium (keyboard)"}),e.jsx(a.Text,{underline:!0,children:"Aquarium (underline)"}),e.jsx(a.Text,{delete:!0,children:"Aquarium (delete)"}),e.jsx(a.Text,{strong:!0,children:"Aquarium (strong)"}),e.jsx(a.Text,{italic:!0,children:"Aquarium (italic)"})]})})},c={render:()=>e.jsx(x,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsx(P,{direction:"vertical",children:e.jsx(a.Text,{size:"sm",color:"ColorPrimaryText",style:{paddingLeft:B},children:"Aquarium props test"})})})},d={render:()=>{const[r,t]=J.useState(!0);return e.jsxs(x,{title:"Toggle ellipsis on and off.",children:[e.jsx(H,{checked:r,onChange:()=>{t(!r)}}),e.jsx(a.Text,{style:r?{width:200}:void 0,ellipsis:r?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."}),e.jsx(a.Text,{code:!0,style:r?{width:200}:void 0,ellipsis:r?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}};var f,A,b;l.parameters=i(s({},l.parameters),{docs:i(s({},(f=l.parameters)==null?void 0:f.docs),{source:s({originalSource:`{
  play: async context => {
    const text = context.canvasElement.querySelector('span');
    void expect(text?.textContent).toEqual('Example Text');
  }
}`},(b=(A=l.parameters)==null?void 0:A.docs)==null?void 0:b.source)})});var E,q,j;p.parameters=i(s({},p.parameters),{docs:i(s({},(E=p.parameters)==null?void 0:E.docs),{source:s({originalSource:`{
  render: () => {
    return <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Text>Aquarium (default)</Typography.Text>
          <Typography.Text type="secondary">Aquarium (secondary)</Typography.Text>
          <Typography.Text type="success">Aquarium (success)</Typography.Text>
          <Typography.Text type="warning">Aquarium (warning)</Typography.Text>
          <Typography.Text type="danger">Aquarium (danger)</Typography.Text>
          <Typography.Text disabled>Aquarium (disabled)</Typography.Text>
          <Typography.Text mark>Aquarium (mark)</Typography.Text>
          <Typography.Text code>Aquarium (code)</Typography.Text>
          <Typography.Text keyboard>Aquarium (keyboard)</Typography.Text>
          <Typography.Text underline>Aquarium (underline)</Typography.Text>
          <Typography.Text delete>Aquarium (delete)</Typography.Text>
          <Typography.Text strong>Aquarium (strong)</Typography.Text>
          <Typography.Text italic>Aquarium (italic)</Typography.Text>
        </Space>
      </ExampleStory>;
  }
}`},(j=(q=p.parameters)==null?void 0:q.docs)==null?void 0:j.source)})});var S,k,w;c.parameters=i(s({},c.parameters),{docs:i(s({},(S=c.parameters)==null?void 0:S.docs),{source:s({originalSource:`{
  render: () => {
    return <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Text size="sm" color="ColorPrimaryText" style={{
          paddingLeft: PaddingLg
        }}>
            Aquarium props test
          </Typography.Text>
        </Space>
      </ExampleStory>;
  }
}`},(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source)})});var v,C,D;d.parameters=i(s({},d.parameters),{docs:i(s({},(v=d.parameters)==null?void 0:v.docs),{source:s({originalSource:`{
  render: () => {
    const [ellipsis, setEllipsis] = useState(true);
    return <ExampleStory title="Toggle ellipsis on and off.">
        <Switch checked={ellipsis} onChange={() => {
        setEllipsis(!ellipsis);
      }} />
        <Typography.Text style={ellipsis ? {
        width: 200
      } : undefined} ellipsis={ellipsis ? {
        tooltip: 'I am ellipsis now!'
      } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
        <Typography.Text code style={ellipsis ? {
        width: 200
      } : undefined} ellipsis={ellipsis ? {
        tooltip: 'I am ellipsis now!'
      } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
      </ExampleStory>;
  }
}`},(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source)})});const se=["Primary","ExampleTexts","ExampleProps","ExampleEllipsis"];export{d as ExampleEllipsis,c as ExampleProps,p as ExampleTexts,l as Primary,se as __namedExportsOrder,oe as default};
