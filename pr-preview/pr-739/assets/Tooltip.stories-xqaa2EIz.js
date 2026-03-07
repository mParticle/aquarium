import{j as e,F as t,aM as l,k as h,T as r,aN as s,aO as m,aP as x,I as p}from"./iframe-DNXJpBL5.js";import{i as c}from"./HelpCircle-CK5Fhcbu.js";const d={title:"Components/Data Display/Tooltip",component:g=>e.jsx(t,{align:"center",gap:2,children:e.jsx(l,{...g,children:e.jsx(h,{children:"Tooltip element"})})})},o={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},i={render:()=>e.jsx(t,{align:"center",gap:2,children:e.jsx(l,{title:e.jsx(e.Fragment,{children:e.jsxs(r.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(r.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(h,{children:"Tooltip with a link"})})})},n={render:()=>e.jsxs(t,{align:"center",gap:s,children:[e.jsx(r.Text,{style:{wordBreak:"initial"},children:"Strength"}),e.jsx(m,{title:"This is helpful information about strength"})]})},a={render:()=>e.jsxs(t,{align:"center",gap:x,children:[e.jsxs(t,{align:"center",gap:s,children:[e.jsx(r.Text,{style:{wordBreak:"initial"},children:"Audience Size"}),e.jsx(l,{title:"The total number of users who match the targeting criteria for this segment.",children:e.jsx(t,{align:"center",justify:"center",children:e.jsx(p,{name:c,size:"sm",color:"default"})})})]}),e.jsxs(t,{align:"center",gap:s,children:[e.jsx(r.Text,{style:{wordBreak:"initial"},children:"Conversion Rate"}),e.jsx(l,{title:e.jsxs(r.Text,{tooltip:!0,children:["The percentage of users who completed the desired action."," ",e.jsx(r.Link,{href:"/",tooltip:!0,children:"Learn More"})]}),children:e.jsx(t,{align:"center",justify:"center",children:e.jsx(p,{name:c,size:"sm",color:"default"})})})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip content',
    placement: 'top',
    trigger: 'hover'
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']
    },
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'click', 'contextMenu']
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex align="center" gap={2}>
        <Tooltip title={<>
              <Typography.Text tooltip>
                Help lorem ipsum{' '}
                <Typography.Link href="/" tooltip>
                  Learn More
                </Typography.Link>
              </Typography.Text>
            </>}>
          <Button>Tooltip with a link</Button>
        </Tooltip>
      </Flex>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex align="center" gap={SizeSm}>
        <Flex align="center" gap={MarginXxs}>
          <Typography.Text style={{
          wordBreak: 'initial'
        }}>Audience Size</Typography.Text>
          <Tooltip title="The total number of users who match the targeting criteria for this segment.">
            <Flex align="center" justify="center">
              <Icon name={RoktHelpCircle} size="sm" color="default" />
            </Flex>
          </Tooltip>
        </Flex>
        <Flex align="center" gap={MarginXxs}>
          <Typography.Text style={{
          wordBreak: 'initial'
        }}>Conversion Rate</Typography.Text>
          <Tooltip title={<Typography.Text tooltip>
                The percentage of users who completed the desired action.{' '}
                <Typography.Link href="/" tooltip>
                  Learn More
                </Typography.Link>
              </Typography.Text>}>
            <Flex align="center" justify="center">
              <Icon name={RoktHelpCircle} size="sm" color="default" />
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>;
  }
}`,...a.parameters?.docs?.source}}};const T=["Primary","WithLink","TextWithIcon","HelpIcon"],f=Object.freeze(Object.defineProperty({__proto__:null,HelpIcon:a,Primary:o,TextWithIcon:n,WithLink:i,__namedExportsOrder:T,default:d},Symbol.toStringTag,{value:"Module"}));export{a as H,f as T,d as m};
