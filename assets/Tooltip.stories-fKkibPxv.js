import{j as e,F as t,aN as s,k as g,T as o,aO as p,aP as x,aQ as d,I as h}from"./iframe-Ckpg-7BW.js";import{i as m}from"./HelpCircle-_fCQFB_s.js";const T={title:"Components/Data Display/Tooltip",component:c=>e.jsx(t,{align:"center",gap:2,children:e.jsx(s,{...c,children:e.jsx(g,{children:"Tooltip element"})})})},r={args:{title:"Tooltip content",placement:"top",trigger:"hover",arrow:!0},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]},arrow:{control:"select",options:[!1,!0]}},render:c=>e.jsx(t,{align:"center",gap:2,children:e.jsx(s,{...c,children:e.jsx(g,{children:"Hover me"})})})},n={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},i={render:()=>e.jsx(t,{align:"center",gap:2,children:e.jsx(s,{title:e.jsx(e.Fragment,{children:e.jsxs(o.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(o.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(g,{children:"Tooltip with a link"})})})},l={render:()=>e.jsxs(t,{align:"center",gap:p,children:[e.jsx(o.Text,{style:{wordBreak:"initial"},children:"Strength"}),e.jsx(x,{title:"This is helpful information about strength"})]})},a={render:()=>e.jsxs(t,{align:"center",gap:d,children:[e.jsxs(t,{align:"center",gap:p,children:[e.jsx(o.Text,{style:{wordBreak:"initial"},children:"Audience Size"}),e.jsx(s,{title:"The total number of users who match the targeting criteria for this segment.",children:e.jsx(t,{align:"center",justify:"center",children:e.jsx(h,{name:m,size:"sm",color:"default"})})})]}),e.jsxs(t,{align:"center",gap:p,children:[e.jsx(o.Text,{style:{wordBreak:"initial"},children:"Conversion Rate"}),e.jsx(s,{title:e.jsxs(o.Text,{tooltip:!0,children:["The percentage of users who completed the desired action."," ",e.jsx(o.Link,{href:"/",tooltip:!0,children:"Learn More"})]}),children:e.jsx(t,{align:"center",justify:"center",children:e.jsx(h,{name:m,size:"sm",color:"default"})})})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip content',
    placement: 'top',
    trigger: 'hover',
    arrow: true
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']
    },
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'click', 'contextMenu']
    },
    arrow: {
      control: 'select',
      options: [false, true]
    }
  },
  render: args => <Flex align="center" gap={2}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Flex>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const u=["Playground","Primary","WithLink","TextWithIcon","HelpIcon"],j=Object.freeze(Object.defineProperty({__proto__:null,HelpIcon:a,Playground:r,Primary:n,TextWithIcon:l,WithLink:i,__namedExportsOrder:u,default:T},Symbol.toStringTag,{value:"Module"}));export{a as H,n as P,j as T,i as W,l as a,r as b};
