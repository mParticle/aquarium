var N=Object.defineProperty,E=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(a,o,n)=>o in a?N(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,r=(a,o)=>{for(var n in o||(o={}))_.call(o,n)&&p(a,n,o[n]);if(L)for(var n of L(o))v.call(o,n)&&p(a,n,o[n]);return a},s=(a,o)=>E(a,P(o));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{ai as t}from"./NavigationItemsService-Bmz5XzuU.js";import"./index-3OP4wdng.js";import"./ErrorStateIcon-BS17_6tf.js";import"./style-BAkx2Mzk.js";import"./WarningFilled-D6ijQqgK.js";import"./extends-CF3RwP-h.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-HuPZrMr2.js";import"./WarningStateIcon-Duz4utQS.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";const c={textAlign:"center",color:"#fff",height:64,paddingInline:48,lineHeight:"64px",backgroundColor:"#4096ff"},u={textAlign:"center",minHeight:120,lineHeight:"120px",color:"#fff",backgroundColor:"#0958d9"},S={textAlign:"center",lineHeight:"120px",color:"#fff",backgroundColor:"#1677ff"},h={textAlign:"center",color:"#fff",backgroundColor:"#4096ff"},m={borderRadius:8,overflow:"hidden",width:"1000px"},ee={title:"Components/Layout/Layout",component:t,args:{className:"",hasSider:!1,style:{}}},d={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:m,children:[e.jsx(t.Sider,{width:"25%",style:S,children:"Sider"}),e.jsxs(t,{children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsx(t.Content,{style:u,children:"Content"}),e.jsx(t.Footer,{style:h,children:"Footer"})]})]})})},l={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:m,children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsx(t.Content,{style:u,children:"Content"}),e.jsx(t.Footer,{style:h,children:"Footer"})]})})},y={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:m,children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsxs(t,{children:[e.jsx(t.Content,{style:u,children:"Content"}),e.jsx(t.Sider,{width:"25%",style:S,children:"Sider"})]})]})})},i={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:m,children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsxs(t,{children:[e.jsx(t.Sider,{width:"25%",style:S,children:"Sider"}),e.jsx(t.Content,{style:u,children:"Content"})]}),e.jsx(t.Footer,{style:h,children:"Footer"})]})})};var x,f,j;d.parameters=s(r({},d.parameters),{docs:s(r({},(x=d.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  render: () => <>
      <Layout style={layoutStyle}>
        <Layout.Sider width="25%" style={siderStyle}>
          Sider
        </Layout.Sider>
        <Layout>
          <Layout.Header style={headerStyle}>Header</Layout.Header>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
          <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
        </Layout>
      </Layout>
    </>
}`},(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source)})});var C,g,H;l.parameters=s(r({},l.parameters),{docs:s(r({},(C=l.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  render: () => <>
      <Layout style={layoutStyle}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
    </>
}`},(H=(g=l.parameters)==null?void 0:g.docs)==null?void 0:H.source)})});var F,w,b;y.parameters=s(r({},y.parameters),{docs:s(r({},(F=y.parameters)==null?void 0:F.docs),{source:r({originalSource:`{
  render: () => <>
      <Layout style={layoutStyle}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
          <Layout.Sider width="25%" style={siderStyle}>
            Sider
          </Layout.Sider>
        </Layout>
      </Layout>
    </>
}`},(b=(w=y.parameters)==null?void 0:w.docs)==null?void 0:b.source)})});var k,A,R;i.parameters=s(r({},i.parameters),{docs:s(r({},(k=i.parameters)==null?void 0:k.docs),{source:r({originalSource:`{
  render: () => <>
      <Layout style={layoutStyle}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout>
          <Layout.Sider width="25%" style={siderStyle}>
            Sider
          </Layout.Sider>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
    </>
}`},(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source)})});const te=["Primary","NoSider","RightSider","ContentSider"];export{i as ContentSider,l as NoSider,d as Primary,y as RightSider,te as __namedExportsOrder,ee as default};
