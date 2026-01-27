import{j as t,F as i,u as l,i as s,T as n,v as p,w as c}from"./iframe-_QPLlW2H.js";const g={title:"Components/Data Display/Tooltip",component:a=>t.jsx(i,{align:"center",gap:2,children:t.jsx(l,{...a,children:t.jsx(s,{children:"Tooltip element"})})})},e={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},o={render:()=>t.jsx(i,{align:"center",gap:2,children:t.jsx(l,{title:t.jsx(t.Fragment,{children:t.jsxs(n.Text,{tooltip:!0,children:["Help lorem ipsum"," ",t.jsx(n.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:t.jsx(s,{children:"Tooltip with a link"})})})},r={render:()=>t.jsxs(i,{align:"center",gap:p,children:[t.jsx(n.Text,{style:{wordBreak:"initial"},children:"Strength"}),t.jsx(c,{title:"This is helpful information about strength"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const h=["Primary","WithLink","TextWithIcon"],T=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,TextWithIcon:r,WithLink:o,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{T,g as m};
