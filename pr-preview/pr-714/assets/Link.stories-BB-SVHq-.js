import{ab as l,T as r,j as e,u as c,I as i,F as p,V as d,a3 as h}from"./iframe-D7Ys59RG.js";const m={title:"Components/General/Typography/Link",component:r.Link,args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:l},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},o={args:{underline:!0}},n={render:()=>e.jsx(c,{title:e.jsx(e.Fragment,{children:e.jsxs(r.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(r.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(i,{name:"help",size:"sm"})})},t={render:()=>e.jsxs(r.Paragraph,{color:"ColorTextDescription",children:["This is placeholder descriptive copy that illustrates how inline links sit alongside supporting content. The paragraph spacing demonstrates how the link remains readable even within longer bodies of narrative."," ",e.jsx(r.Link,{href:"https://mparticle.com/docs",color:"ColorTextDescription",underline:!0,target:"_blank",rel:"noopener noreferrer",children:"Explore the documentation"})," ","to learn more about this topic. Keep the surrounding text concise and focused so the call to action is easy to scan. When possible, avoid stacking multiple links within the same sentence to maintain clarity."]})},a={render:()=>e.jsx(r.Link,{underline:!0,target:"_blank",rel:"noopener noreferrer",href:"https://docs.mparticle.com/",color:"ColorLink",children:e.jsxs(p,{align:"center",gap:d,children:[e.jsx("span",{children:"View documentation"}),e.jsx(i,{name:"openTab",size:"sm",color:"primary"})]})})},s={render:()=>e.jsx(h,{type:"error",showIcon:!0,message:e.jsxs(r.Text,{color:"ColorText",children:["Something went wrong."," ",e.jsx(r.Link,{color:"ColorText",underline:!0,href:"https://mparticle.com/support",children:"Contact support"})," ","to get help."]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    underline: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Typography.Link underline target="_blank" rel="noopener noreferrer" href="https://docs.mparticle.com/" color="ColorLink">
        <Flex align="center" gap={SizeXs}>
          <span>View documentation</span>
          <Icon name="openTab" size="sm" color="primary" />
        </Flex>
      </Typography.Link>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert type="error" showIcon message={<Typography.Text color="ColorText">
            Something went wrong.{' '}
            <Typography.Link color="ColorText" underline href="https://mparticle.com/support">
              Contact support
            </Typography.Link>{' '}
            to get help.
          </Typography.Text>} />;
  }
}`,...s.parameters?.docs?.source}}};const u=["Primary","InsideTooltip","LongDescription","WithInlineIcon","InsideErrorAlert"],y=Object.freeze(Object.defineProperty({__proto__:null,InsideErrorAlert:s,InsideTooltip:n,LongDescription:t,Primary:o,WithInlineIcon:a,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{n as I,y as L,o as P,a as W,t as a,s as b};
