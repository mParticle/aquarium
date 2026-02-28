var W=Object.defineProperty,v=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var x=(r,o,i)=>o in r?W(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,t=(r,o)=>{for(var i in o||(o={}))P.call(o,i)&&x(r,i,o[i]);if(T)for(var i of T(o))_.call(o,i)&&x(r,i,o[i]);return r},n=(r,o)=>v(r,H(o));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{F as s,T as R,c as I,b as a,k as g}from"./UnauthorizedTooltip-BP3vU_2e.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{i as d}from"./HelpCircle-suXMuS68.js";import{at as m,au as z}from"./style-B81W5px8.js";const C={title:"Components/Data Display/Tooltip",component:r=>e.jsx(s,{align:"center",gap:2,children:e.jsx(R,n(t({},r),{children:e.jsx(I,{children:"Tooltip element"})}))})},l={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},p={render:()=>e.jsx(s,{align:"center",gap:2,children:e.jsx(R,{title:e.jsx(e.Fragment,{children:e.jsxs(a.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(I,{children:"Tooltip with a link"})})})},c={render:()=>e.jsxs(s,{align:"center",gap:m,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Strength"}),e.jsx(g,{title:"This is helpful information about strength"})]})},h={render:()=>e.jsxs(s,{align:"center",gap:z,children:[e.jsxs(s,{align:"center",gap:m,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Audience Size"}),e.jsx(g,{title:"The total number of users who match the targeting criteria for this segment.",iconProps:{name:d}})]}),e.jsxs(s,{align:"center",gap:m,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Conversion Rate"}),e.jsx(g,{title:e.jsxs(a.Text,{tooltip:!0,children:["The percentage of users who completed the desired action."," ",e.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]}),iconProps:{name:d}})]})]})};var u,y,f;l.parameters=n(t({},l.parameters),{docs:n(t({},(u=l.parameters)==null?void 0:u.docs),{source:t({originalSource:`{
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
}`},(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source)})});var j,k,L;p.parameters=n(t({},p.parameters),{docs:n(t({},(j=p.parameters)==null?void 0:j.docs),{source:t({originalSource:`{
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
}`},(L=(k=p.parameters)==null?void 0:k.docs)==null?void 0:L.source)})});var S,b,B;c.parameters=n(t({},c.parameters),{docs:n(t({},(S=c.parameters)==null?void 0:S.docs),{source:t({originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>;
  }
}`},(B=(b=c.parameters)==null?void 0:b.docs)==null?void 0:B.source)})});var F,w,M;h.parameters=n(t({},h.parameters),{docs:n(t({},(F=h.parameters)==null?void 0:F.docs),{source:t({originalSource:`{
  render: () => {
    return <Flex align="center" gap={SizeSm}>
        <Flex align="center" gap={MarginXxs}>
          <Typography.Text style={{
          wordBreak: 'initial'
        }}>Audience Size</Typography.Text>
          <IconWithTooltip title="The total number of users who match the targeting criteria for this segment." iconProps={{
          name: RoktHelpCircle
        }} />
        </Flex>
        <Flex align="center" gap={MarginXxs}>
          <Typography.Text style={{
          wordBreak: 'initial'
        }}>Conversion Rate</Typography.Text>
          <IconWithTooltip title={<Typography.Text tooltip>
                The percentage of users who completed the desired action.{' '}
                <Typography.Link href="/" tooltip>
                  Learn More
                </Typography.Link>
              </Typography.Text>} iconProps={{
          name: RoktHelpCircle
        }} />
        </Flex>
      </Flex>;
  }
}`},(M=(w=h.parameters)==null?void 0:w.docs)==null?void 0:M.source)})});const X=["Primary","WithLink","TextWithIcon","HelpIcon"],U=Object.freeze(Object.defineProperty({__proto__:null,HelpIcon:h,Primary:l,TextWithIcon:c,WithLink:p,__namedExportsOrder:X,default:C},Symbol.toStringTag,{value:"Module"}));export{h as H,U as T,C as m};
