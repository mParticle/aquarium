var b=Object.defineProperty,A=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(o,r,t)=>r in o?b(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,i=(o,r)=>{for(var t in r||(r={}))f.call(r,t)&&y(o,t,r[t]);if(c)for(var t of c(r))E.call(r,t)&&y(o,t,r[t]);return o},a=(o,r)=>A(o,D(r));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{e as n,aa as S,F as v,T as F,I as w,b as I}from"./NavigationItemsService-DO2029OX.js";import"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";import{E as j}from"./ExampleStory-Dj5C_htg.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const U={title:"Components/General/Typography/Link",component:o=>e.jsx(n.Link,a(i({},o),{children:"Example Link"})),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:S},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},s={},p={render:()=>e.jsx(j,{title:"Link inside a Tooltip",children:e.jsxs(v,{align:"center",gap:2,children:[e.jsx(n.Text,{children:"Typography inside of a tooltip, hover icon to see"}),e.jsx(F,{title:e.jsx(e.Fragment,{children:e.jsxs(n.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(n.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(w,{name:"help",size:"sm"})})]})})},l={render:()=>e.jsx(j,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsxs(I,{direction:"vertical",children:[e.jsx(n.Link,{children:"Ant Design (default)"}),e.jsx(n.Link,{type:"secondary",children:"Ant Design (secondary)"}),e.jsx(n.Link,{type:"success",children:"Ant Design (success)"}),e.jsx(n.Link,{type:"warning",children:"Ant Design (warning)"}),e.jsx(n.Link,{type:"danger",children:"Ant Design (danger)"}),e.jsx(n.Link,{disabled:!0,children:"Ant Design (disabled)"}),e.jsx(n.Link,{mark:!0,children:"Ant Design (mark)"}),e.jsx(n.Link,{code:!0,children:"Ant Design (code)"}),e.jsx(n.Link,{keyboard:!0,children:"Ant Design (keyboard)"}),e.jsx(n.Link,{underline:!0,children:"Ant Design (underline)"}),e.jsx(n.Link,{delete:!0,children:"Ant Design (delete)"}),e.jsx(n.Link,{strong:!0,children:"Ant Design (strong)"}),e.jsx(n.Link,{italic:!0,children:"Ant Design (italic)"})]})})};var d,g,h;s.parameters=a(i({},s.parameters),{docs:a(i({},(d=s.parameters)==null?void 0:d.docs),{source:i({originalSource:"{}"},(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var m,k,T;p.parameters=a(i({},p.parameters),{docs:a(i({},(m=p.parameters)==null?void 0:m.docs),{source:i({originalSource:`{
  render: () => {
    return <ExampleStory title="Link inside a Tooltip">
        <Flex align="center" gap={2}>
          <Typography.Text>Typography inside of a tooltip, hover icon to see</Typography.Text>
          <Tooltip title={<>
                <Typography.Text tooltip>
                  Help lorem ipsum{' '}
                  <Typography.Link href="/" tooltip>
                    Learn More
                  </Typography.Link>
                </Typography.Text>
              </>}>
            <Icon name="help" size="sm" />
          </Tooltip>
        </Flex>
      </ExampleStory>;
  }
}`},(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source)})});var x,L,u;l.parameters=a(i({},l.parameters),{docs:a(i({},(x=l.parameters)==null?void 0:x.docs),{source:i({originalSource:`{
  render: () => {
    return <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Link>Ant Design (default)</Typography.Link>
          <Typography.Link type="secondary">Ant Design (secondary)</Typography.Link>
          <Typography.Link type="success">Ant Design (success)</Typography.Link>
          <Typography.Link type="warning">Ant Design (warning)</Typography.Link>
          <Typography.Link type="danger">Ant Design (danger)</Typography.Link>
          <Typography.Link disabled>Ant Design (disabled)</Typography.Link>
          <Typography.Link mark>Ant Design (mark)</Typography.Link>
          <Typography.Link code>Ant Design (code)</Typography.Link>
          <Typography.Link keyboard>Ant Design (keyboard)</Typography.Link>
          <Typography.Link underline>Ant Design (underline)</Typography.Link>
          <Typography.Link delete>Ant Design (delete)</Typography.Link>
          <Typography.Link strong>Ant Design (strong)</Typography.Link>
          <Typography.Link italic>Ant Design (italic)</Typography.Link>
        </Space>
      </ExampleStory>;
  }
}`},(u=(L=l.parameters)==null?void 0:L.docs)==null?void 0:u.source)})});const V=["Primary","InsideTooltip","ExampleLinks"];export{l as ExampleLinks,p as InsideTooltip,s as Primary,V as __namedExportsOrder,U as default};
