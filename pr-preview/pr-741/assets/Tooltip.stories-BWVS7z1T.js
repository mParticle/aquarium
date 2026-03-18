var P=Object.defineProperty,_=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var u=(o,i,n)=>i in o?P(o,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[i]=n,t=(o,i)=>{for(var n in i||(i={}))X.call(i,n)&&u(o,n,i[n]);if(T)for(var n of T(i))O.call(i,n)&&u(o,n,i[n]);return o},r=(o,i)=>_(o,C(i));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{F as l,T as m,c as d,b as a,k as A,I as f}from"./UnauthorizedTooltip-B2ryQ72p.js";import"./ErrorStateIcon-DssSzTVb.js";import"./SuccessStateIcon-CEeqETPx.js";import"./WarningStateIcon-DsIsb8Zb.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{i as y}from"./HelpCircle-suXMuS68.js";import{at as x,au as D}from"./style-DXf4Rsq5.js";const E={title:"Components/Data Display/Tooltip",component:o=>e.jsx(l,{align:"center",gap:2,children:e.jsx(m,r(t({},o),{children:e.jsx(d,{children:"Tooltip element"})}))})},s={args:{title:"Tooltip content",placement:"top",trigger:"hover",arrow:!0},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]},arrow:{control:"select",options:[!1,!0]}},render:o=>e.jsx(l,{align:"center",gap:2,children:e.jsx(m,r(t({},o),{children:e.jsx(d,{children:"Hover me"})}))})},p={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},c={render:()=>e.jsx(l,{align:"center",gap:2,children:e.jsx(m,{title:e.jsx(e.Fragment,{children:e.jsxs(a.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(d,{children:"Tooltip with a link"})})})},g={render:()=>e.jsxs(l,{align:"center",gap:x,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Strength"}),e.jsx(A,{title:"This is helpful information about strength"})]})},h={render:()=>e.jsxs(l,{align:"center",gap:D,children:[e.jsxs(l,{align:"center",gap:x,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Audience Size"}),e.jsx(m,{title:"The total number of users who match the targeting criteria for this segment.",children:e.jsx(l,{align:"center",justify:"center",children:e.jsx(f,{name:y,size:"sm",color:"default"})})})]}),e.jsxs(l,{align:"center",gap:x,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Conversion Rate"}),e.jsx(m,{title:e.jsxs(a.Text,{tooltip:!0,children:["The percentage of users who completed the desired action."," ",e.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]}),children:e.jsx(l,{align:"center",justify:"center",children:e.jsx(f,{name:y,size:"sm",color:"default"})})})]})]})};var j,k,b;s.parameters=r(t({},s.parameters),{docs:r(t({},(j=s.parameters)==null?void 0:j.docs),{source:t({originalSource:`{
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
}`},(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source)})});var L,B,F;p.parameters=r(t({},p.parameters),{docs:r(t({},(L=p.parameters)==null?void 0:L.docs),{source:t({originalSource:`{
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
}`},(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source)})});var w,S,v;c.parameters=r(t({},c.parameters),{docs:r(t({},(w=c.parameters)==null?void 0:w.docs),{source:t({originalSource:`{
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
}`},(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source)})});var M,R,I;g.parameters=r(t({},g.parameters),{docs:r(t({},(M=g.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>;
  }
}`},(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source)})});var z,H,W;h.parameters=r(t({},h.parameters),{docs:r(t({},(z=h.parameters)==null?void 0:z.docs),{source:t({originalSource:`{
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
}`},(W=(H=h.parameters)==null?void 0:H.docs)==null?void 0:W.source)})});const q=["Playground","Primary","WithLink","TextWithIcon","HelpIcon"],ee=Object.freeze(Object.defineProperty({__proto__:null,HelpIcon:h,Playground:s,Primary:p,TextWithIcon:g,WithLink:c,__namedExportsOrder:q,default:E},Symbol.toStringTag,{value:"Module"}));export{h as H,p as P,ee as T,c as W,g as a,s as b};
