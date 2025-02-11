var C=Object.defineProperty,I=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var m=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,s=(e,t)=>{for(var o in t||(t={}))z.call(t,o)&&m(e,o,t[o]);if(x)for(var o of x(t))P.call(t,o)&&m(e,o,t[o]);return e},i=(e,t)=>I(e,U(t));var T=(e,t,o)=>new Promise((w,u)=>{var v=n=>{try{d(o.next(n))}catch(y){u(y)}},D=n=>{try{d(o.throw(n))}catch(y){u(y)}},d=n=>n.done?w(n.value):Promise.resolve(n.value).then(v,D);d((o=o.apply(e,t)).next())});import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{f as a,ad as _,b as F,z as G}from"./ChartColors-1uWlxQ7A.js";import"./_baseClone-DBzvlRjn.js";import{E as k}from"./ExampleStory-8XJEQthh.js";import{r as O}from"./index-CNk6hRaE.js";import{e as R}from"./index-BU0ZtLqn.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const $={title:"Components/General/Typography/Text",component:e=>r.jsx(a.Text,i(s({},e),{children:e.children})),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:_},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},l={play:e=>T(void 0,null,function*(){const t=e.canvasElement.querySelector("span");R(t==null?void 0:t.textContent).toEqual("Example Text")})},p={render:()=>r.jsx(k,{title:r.jsx(r.Fragment,{children:" "}),children:r.jsxs(F,{direction:"vertical",children:[r.jsx(a.Text,{children:"Aquarium (default)"}),r.jsx(a.Text,{type:"secondary",children:"Aquarium (secondary)"}),r.jsx(a.Text,{type:"success",children:"Aquarium (success)"}),r.jsx(a.Text,{type:"warning",children:"Aquarium (warning)"}),r.jsx(a.Text,{type:"danger",children:"Aquarium (danger)"}),r.jsx(a.Text,{disabled:!0,children:"Aquarium (disabled)"}),r.jsx(a.Text,{mark:!0,children:"Aquarium (mark)"}),r.jsx(a.Text,{code:!0,children:"Aquarium (code)"}),r.jsx(a.Text,{keyboard:!0,children:"Aquarium (keyboard)"}),r.jsx(a.Text,{underline:!0,children:"Aquarium (underline)"}),r.jsx(a.Text,{delete:!0,children:"Aquarium (delete)"}),r.jsx(a.Text,{strong:!0,children:"Aquarium (strong)"}),r.jsx(a.Text,{italic:!0,children:"Aquarium (italic)"})]})})},c={render:()=>{const[e,t]=O.useState(!0);return r.jsxs(k,{title:"Toggle ellipsis on and off.",children:[r.jsx(G,{checked:e,onChange:()=>{t(!e)}}),r.jsx(a.Text,{style:e?{width:200}:void 0,ellipsis:e?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."}),r.jsx(a.Text,{code:!0,style:e?{width:200}:void 0,ellipsis:e?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}};var g,h,f;l.parameters=i(s({},l.parameters),{docs:i(s({},(g=l.parameters)==null?void 0:g.docs),{source:s({originalSource:`{
  play: async context => {
    const text = context.canvasElement.querySelector('span');
    void expect(text?.textContent).toEqual('Example Text');
  }
}`},(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source)})});var b,A,q;p.parameters=i(s({},p.parameters),{docs:i(s({},(b=p.parameters)==null?void 0:b.docs),{source:s({originalSource:`{
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
}`},(q=(A=p.parameters)==null?void 0:A.docs)==null?void 0:q.source)})});var E,j,S;c.parameters=i(s({},c.parameters),{docs:i(s({},(E=c.parameters)==null?void 0:E.docs),{source:s({originalSource:`{
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
}`},(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source)})});const ee=["Primary","ExampleTexts","ExampleEllipsis"];export{c as ExampleEllipsis,p as ExampleTexts,l as Primary,ee as __namedExportsOrder,$ as default};
