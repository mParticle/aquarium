import{aw as t,j as e}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const s={textAlign:"center",color:"#fff",height:64,paddingInline:48,lineHeight:"64px",backgroundColor:"#4096ff"},d={textAlign:"center",minHeight:120,lineHeight:"120px",color:"#fff",backgroundColor:"#0958d9"},y={textAlign:"center",lineHeight:"120px",color:"#fff",backgroundColor:"#1677ff"},i={textAlign:"center",color:"#fff",backgroundColor:"#4096ff"},l={borderRadius:8,overflow:"hidden",width:"1000px"},S={title:"Components/Layout/Layout",component:t,args:{className:"",hasSider:!1,style:{}}},r={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:l,children:[e.jsx(t.Sider,{width:"25%",style:y,children:"Sider"}),e.jsxs(t,{children:[e.jsx(t.Header,{style:s,children:"Header"}),e.jsx(t.Content,{style:d,children:"Content"}),e.jsx(t.Footer,{style:i,children:"Footer"})]})]})})},o={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:l,children:[e.jsx(t.Header,{style:s,children:"Header"}),e.jsx(t.Content,{style:d,children:"Content"}),e.jsx(t.Footer,{style:i,children:"Footer"})]})})},n={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:l,children:[e.jsx(t.Header,{style:s,children:"Header"}),e.jsxs(t,{children:[e.jsx(t.Content,{style:d,children:"Content"}),e.jsx(t.Sider,{width:"25%",style:y,children:"Sider"})]})]})})},a={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{style:l,children:[e.jsx(t.Header,{style:s,children:"Header"}),e.jsxs(t,{children:[e.jsx(t.Sider,{width:"25%",style:y,children:"Sider"}),e.jsx(t.Content,{style:d,children:"Content"})]}),e.jsx(t.Footer,{style:i,children:"Footer"})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Layout style={layoutStyle}>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
    </>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const h=["Primary","NoSider","RightSider","ContentSider"];export{a as ContentSider,o as NoSider,r as Primary,n as RightSider,h as __namedExportsOrder,S as default};
