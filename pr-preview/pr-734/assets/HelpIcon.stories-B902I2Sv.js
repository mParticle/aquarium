var I=Object.defineProperty,F=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(s,r,o)=>r in s?I(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o,e=(s,r)=>{for(var o in r||(r={}))B.call(r,o)&&g(s,o,r[o]);if(d)for(var o of d(r))_.call(r,o)&&g(s,o,r[o]);return s},i=(s,r)=>F(s,M(r));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{H as a,F as x,b as m}from"./UnauthorizedTooltip-WVahUyPg.js";import"./ErrorStateIcon-CvYuCikd.js";import"./SuccessStateIcon-BTFHFKqX.js";import"./WarningStateIcon-Bi8H3qJC.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{at as w}from"./style-B81W5px8.js";const R={title:"Components/Data Display/HelpIcon",component:a,argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},size:{control:"select",options:["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"]},color:{control:"select",options:["default","primary","success","warning","error","info","white","black","text","strong","brand","inherit"]}}},n={args:{title:"This is helpful information",placement:"top",size:"sm",color:"default"}},l={render:()=>t.jsxs(x,{align:"center",gap:w,children:[t.jsx(m.Text,{style:{wordBreak:"initial"},children:"Audience Size"}),t.jsx(a,{title:"The total number of users who match the targeting criteria for this segment."})]})},p={render:()=>t.jsxs(x,{align:"center",gap:w,children:[t.jsx(m.Text,{style:{wordBreak:"initial"},children:"Conversion Rate"}),t.jsx(a,{title:t.jsxs(m.Text,{tooltip:!0,children:["The percentage of users who completed the desired action."," ",t.jsx(m.Link,{href:"/",tooltip:!0,children:"Learn More"})]})})]})},c={render:()=>t.jsxs(x,{align:"center",gap:"12px",children:[t.jsx(a,{title:"Extra small",size:"xs"}),t.jsx(a,{title:"Small (default)",size:"sm"}),t.jsx(a,{title:"Medium",size:"md"}),t.jsx(a,{title:"Large",size:"lg"})]})};var h,u,f;n.parameters=i(e({},n.parameters),{docs:i(e({},(h=n.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
  args: {
    title: 'This is helpful information',
    placement: 'top',
    size: 'sm',
    color: 'default'
  }
}`},(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source)})});var y,T,j;l.parameters=i(e({},l.parameters),{docs:i(e({},(y=l.parameters)==null?void 0:y.docs),{source:e({originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Audience Size</Typography.Text>
        <HelpIcon title="The total number of users who match the targeting criteria for this segment." />
      </Flex>;
  }
}`},(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source)})});var z,b,L;p.parameters=i(e({},p.parameters),{docs:i(e({},(z=p.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Conversion Rate</Typography.Text>
        <HelpIcon title={<Typography.Text tooltip>
              The percentage of users who completed the desired action.{' '}
              <Typography.Link href="/" tooltip>
                Learn More
              </Typography.Link>
            </Typography.Text>} />
      </Flex>;
  }
}`},(L=(b=p.parameters)==null?void 0:b.docs)==null?void 0:L.source)})});var S,H,k;c.parameters=i(e({},c.parameters),{docs:i(e({},(S=c.parameters)==null?void 0:S.docs),{source:e({originalSource:`{
  render: () => {
    return <Flex align="center" gap="12px">
        <HelpIcon title="Extra small" size="xs" />
        <HelpIcon title="Small (default)" size="sm" />
        <HelpIcon title="Medium" size="md" />
        <HelpIcon title="Large" size="lg" />
      </Flex>;
  }
}`},(k=(H=c.parameters)==null?void 0:H.docs)==null?void 0:k.source)})});const E=["Primary","WithLabel","WithLink","Sizes"],G=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,Sizes:c,WithLabel:l,WithLink:p,__namedExportsOrder:E,default:R},Symbol.toStringTag,{value:"Module"}));export{G as H,R as m};
