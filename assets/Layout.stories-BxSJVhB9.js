var N=Object.defineProperty,E=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var x=(a,o,n)=>o in a?N(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,r=(a,o)=>{for(var n in o||(o={}))_.call(o,n)&&x(a,n,o[n]);if(m)for(var n of m(o))v.call(o,n)&&x(a,n,o[n]);return a},s=(a,o)=>E(a,P(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{af as t}from"./GlobalNavigation-ZlUbsI6R.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const c={textAlign:"center",color:"#fff",height:64,paddingInline:48,lineHeight:"64px",backgroundColor:"#4096ff"},u={textAlign:"center",minHeight:120,lineHeight:"120px",color:"#fff",backgroundColor:"#0958d9"},h={textAlign:"center",lineHeight:"120px",color:"#fff",backgroundColor:"#1677ff"},L={textAlign:"center",color:"#fff",backgroundColor:"#4096ff"},S={borderRadius:8,overflow:"hidden",width:"1000px"},T={title:"Components/Layout/Layout",component:t,args:{className:"",hasSider:!1,style:{}}},d={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:S,children:[e.jsx(t.Sider,{width:"25%",style:h,children:"Sider"}),e.jsxs(t,{children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsx(t.Content,{style:u,children:"Content"}),e.jsx(t.Footer,{style:L,children:"Footer"})]})]})})},l={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:S,children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsx(t.Content,{style:u,children:"Content"}),e.jsx(t.Footer,{style:L,children:"Footer"})]})})},y={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:S,children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsxs(t,{children:[e.jsx(t.Content,{style:u,children:"Content"}),e.jsx(t.Sider,{width:"25%",style:h,children:"Sider"})]})]})})},i={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:S,children:[e.jsx(t.Header,{style:c,children:"Header"}),e.jsxs(t,{children:[e.jsx(t.Sider,{width:"25%",style:h,children:"Sider"}),e.jsx(t.Content,{style:u,children:"Content"})]}),e.jsx(t.Footer,{style:L,children:"Footer"})]})})};var p,f,j;d.parameters=s(r({},d.parameters),{docs:s(r({},(p=d.parameters)==null?void 0:p.docs),{source:r({originalSource:`{
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
}`},(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source)})});const U=["Primary","NoSider","RightSider","ContentSider"];export{i as ContentSider,l as NoSider,d as Primary,y as RightSider,U as __namedExportsOrder,T as default};
