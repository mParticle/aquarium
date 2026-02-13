var U=Object.defineProperty,F=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var g=(r,t,o)=>t in r?U(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,s=(r,t)=>{for(var o in t||(t={}))_.call(t,o)&&g(r,o,t[o]);if(T)for(var o of T(t))O.call(t,o)&&g(r,o,t[o]);return r},i=(r,t)=>F(r,G(t));var h=(r,t,o)=>new Promise((z,x)=>{var I=n=>{try{y(o.next(n))}catch(m){x(m)}},L=n=>{try{y(o.throw(n))}catch(m){x(m)}},y=n=>n.done?z(n.value):Promise.resolve(n.value).then(I,L);y((o=o.apply(r,t)).next())});import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{a4 as Q,b as a,a as P,G as R}from"./UnauthorizedTooltip-BH5xib4c.js";import"./ErrorStateIcon-CvYuCikd.js";import"./SuccessStateIcon-BTFHFKqX.js";import"./WarningStateIcon-Bi8H3qJC.js";import"./_baseClone-DwBCp-Ss.js";import{r as B}from"./index-3OP4wdng.js";import{aQ as H}from"./style-B81W5px8.js";import{E as u}from"./ExampleStory-hTDAqORU.js";import{e as J}from"./index-1POLsKUh.js";import"./LightTheme-BagmM0Bf.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./WarningFilled-D6ijQqgK.js";const ye={title:"Components/General/Typography/Text",component:r=>e.jsx(a.Text,i(s({},r),{children:r.children})),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:Q},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},l={play:r=>h(void 0,null,function*(){const t=r.canvasElement.querySelector("span");J(t==null?void 0:t.textContent).toEqual("Example Text")})},p={render:()=>e.jsx(u,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsxs(P,{direction:"vertical",children:[e.jsx(a.Text,{children:"Aquarium (default)"}),e.jsx(a.Text,{type:"secondary",children:"Aquarium (secondary)"}),e.jsx(a.Text,{type:"success",children:"Aquarium (success)"}),e.jsx(a.Text,{type:"warning",children:"Aquarium (warning)"}),e.jsx(a.Text,{type:"danger",children:"Aquarium (danger)"}),e.jsx(a.Text,{disabled:!0,children:"Aquarium (disabled)"}),e.jsx(a.Text,{mark:!0,children:"Aquarium (mark)"}),e.jsx(a.Text,{code:!0,children:"Aquarium (code)"}),e.jsx(a.Text,{keyboard:!0,children:"Aquarium (keyboard)"}),e.jsx(a.Text,{underline:!0,children:"Aquarium (underline)"}),e.jsx(a.Text,{delete:!0,children:"Aquarium (delete)"}),e.jsx(a.Text,{strong:!0,children:"Aquarium (strong)"}),e.jsx(a.Text,{italic:!0,children:"Aquarium (italic)"})]})})},c={render:()=>e.jsx(u,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsx(P,{direction:"vertical",children:e.jsx(a.Text,{size:"sm",color:"ColorPrimaryText",style:{paddingLeft:H},children:"Aquarium props test"})})})},d={render:()=>{const[r,t]=B.useState(!0);return e.jsxs(u,{title:"Toggle ellipsis on and off.",children:[e.jsx(R,{checked:r,onChange:()=>{t(!r)}}),e.jsx(a.Text,{style:r?{width:200}:void 0,ellipsis:r?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."}),e.jsx(a.Text,{code:!0,style:r?{width:200}:void 0,ellipsis:r?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}};var f,A,b;l.parameters=i(s({},l.parameters),{docs:i(s({},(f=l.parameters)==null?void 0:f.docs),{source:s({originalSource:`{
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
}`},(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source)})});const me=["Primary","ExampleTexts","ExampleProps","ExampleEllipsis"];export{d as ExampleEllipsis,c as ExampleProps,p as ExampleTexts,l as Primary,me as __namedExportsOrder,ye as default};
