import{ac as c,T as r,j as e,w as h,I as p,F as d,W as m,a3 as g}from"./iframe-DMsmmNLL.js";const u={title:"Components/General/Typography/Link",component:r.Link,args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:c},hoverColor:{control:"select",options:c},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},o={args:{}},t={render:()=>e.jsx(h,{title:e.jsx(e.Fragment,{children:e.jsxs(r.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(r.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(p,{name:"help",size:"sm"})})},n={render:()=>e.jsxs(r.Paragraph,{color:"ColorTextDescription",children:["This is placeholder descriptive copy that illustrates how inline links sit alongside supporting content. The paragraph spacing demonstrates how the link remains readable even within longer bodies of narrative."," ",e.jsx(r.Link,{href:"https://mparticle.com/docs",color:"ColorTextDescription",underline:!0,target:"_blank",rel:"noopener noreferrer",children:"Explore the documentation"})," ","to learn more about this topic. Keep the surrounding text concise and focused so the call to action is easy to scan. When possible, avoid stacking multiple links within the same sentence to maintain clarity."]})},a={render:()=>e.jsx(r.Link,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.mparticle.com/",color:"ColorLink",children:e.jsxs(d,{align:"center",gap:m,children:[e.jsx("span",{children:"View documentation"}),e.jsx(p,{name:"openTab",size:"sm",color:"inherit"})]})})},s={render:()=>e.jsx(r.Link,{color:"ColorText",href:"https://docs.mparticle.com/",target:"_blank",rel:"noopener noreferrer",children:"Example Text"})},i={render:()=>e.jsxs(r.Text,{color:"ColorTextSecondary",children:["This is secondary text with an"," ",e.jsx(r.Link,{href:"https://mparticle.com/docs",color:"inherit",hoverColor:"ColorPrimaryText",underline:!0,target:"_blank",rel:"noopener noreferrer",children:"inline link"})," ","that turns primary on hover."]})},l={render:()=>e.jsx(g,{type:"error",showIcon:!0,message:e.jsxs(r.Text,{color:"ColorText",children:["Something went wrong."," ",e.jsx(r.Link,{color:"ColorText",underline:!0,href:"https://mparticle.com/support",children:"Contact support"})," ","to get help."]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tooltip title={<>
            <Typography.Text tooltip>
              Help lorem ipsum{' '}
              <Typography.Link href="/" tooltip>
                Learn More
              </Typography.Link>
            </Typography.Text>
          </>}>
        <Icon name="help" size="sm" />
      </Tooltip>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Typography.Paragraph color="ColorTextDescription">
        This is placeholder descriptive copy that illustrates how inline links sit alongside supporting content. The
        paragraph spacing demonstrates how the link remains readable even within longer bodies of narrative.{' '}
        <Typography.Link href="https://mparticle.com/docs" color="ColorTextDescription" underline target="_blank" rel="noopener noreferrer">
          Explore the documentation
        </Typography.Link>{' '}
        to learn more about this topic. Keep the surrounding text concise and focused so the call to action is easy to
        scan. When possible, avoid stacking multiple links within the same sentence to maintain clarity.
      </Typography.Paragraph>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Typography.Link target="_blank" rel="noopener noreferrer" href="https://docs.mparticle.com/" color="ColorLink">
        <Flex align="center" gap={SizeXs}>
          <span>View documentation</span>
          <Icon name="openTab" size="sm" color="inherit" />
        </Flex>
      </Typography.Link>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Typography.Link color="ColorText" href="https://docs.mparticle.com/" target="_blank" rel="noopener noreferrer">
        Example Text
      </Typography.Link>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Typography.Text color="ColorTextSecondary">
        This is secondary text with an{' '}
        <Typography.Link href="https://mparticle.com/docs" color="inherit" hoverColor="ColorPrimaryText" underline target="_blank" rel="noopener noreferrer">
          inline link
        </Typography.Link>{' '}
        that turns primary on hover.
      </Typography.Text>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert type="error" showIcon message={<Typography.Text color="ColorText">
            Something went wrong.{' '}
            <Typography.Link color="ColorText" underline href="https://mparticle.com/support">
              Contact support
            </Typography.Link>{' '}
            to get help.
          </Typography.Text>} />;
  }
}`,...l.parameters?.docs?.source}}};const y=["Primary","InsideTooltip","LongDescription","WithInlineIcon","WithUnderline","InheritedColorWithHover","InsideErrorAlert"],x=Object.freeze(Object.defineProperty({__proto__:null,InheritedColorWithHover:i,InsideErrorAlert:l,InsideTooltip:t,LongDescription:n,Primary:o,WithInlineIcon:a,WithUnderline:s,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{t as I,x as L,o as P,s as W,n as a,a as b,l as c};
