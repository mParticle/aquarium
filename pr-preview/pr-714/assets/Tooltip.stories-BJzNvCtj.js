import{j as t}from"./jsx-runtime-u17CrQMm.js";import{F as i,T as l,c as p,b as n,o as a}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{q as c}from"./style-BLGxefMg.js";const m={title:"Components/Data Display/Tooltip",component:s=>t.jsx(i,{align:"center",gap:2,children:t.jsx(l,{...s,children:t.jsx(p,{children:"Tooltip element"})})})},e={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},o={render:()=>t.jsx(i,{align:"center",gap:2,children:t.jsx(l,{title:t.jsx(t.Fragment,{children:t.jsxs(n.Text,{tooltip:!0,children:["Help lorem ipsum"," ",t.jsx(n.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:t.jsx(p,{children:"Tooltip with a link"})})})},r={render:()=>t.jsxs(i,{align:"center",gap:c,children:[t.jsx(n.Text,{style:{wordBreak:"initial"},children:"Strength"}),t.jsx(a,{title:"This is helpful information about strength"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>;
  }
}`,...r.parameters?.docs?.source}}};const g=["Primary","WithLink","TextWithIcon"],y=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,TextWithIcon:r,WithLink:o,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{y as T,m};
