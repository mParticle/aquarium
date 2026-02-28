var R=Object.defineProperty,v=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(o,r,i)=>r in o?R(o,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[r]=i,t=(o,r)=>{for(var i in r||(r={}))W.call(r,i)&&d(o,i,r[i]);if(x)for(var i of x(r))_.call(r,i)&&d(o,i,r[i]);return o},n=(o,r)=>v(o,H(r));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{F as l,T as g,c as z,b as a,k as C,I as T}from"./UnauthorizedTooltip-C9_su0TB.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{i as u}from"./HelpCircle-suXMuS68.js";import{at as m,au as X}from"./style-B81W5px8.js";const O={title:"Components/Data Display/Tooltip",component:o=>e.jsx(l,{align:"center",gap:2,children:e.jsx(g,n(t({},o),{children:e.jsx(z,{children:"Tooltip element"})}))})},s={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},p={render:()=>e.jsx(l,{align:"center",gap:2,children:e.jsx(g,{title:e.jsx(e.Fragment,{children:e.jsxs(a.Text,{tooltip:!0,children:["Help lorem ipsum"," ",e.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:e.jsx(z,{children:"Tooltip with a link"})})})},c={render:()=>e.jsxs(l,{align:"center",gap:m,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Strength"}),e.jsx(C,{title:"This is helpful information about strength"})]})},h={render:()=>e.jsxs(l,{align:"center",gap:X,children:[e.jsxs(l,{align:"center",gap:m,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Audience Size"}),e.jsx(g,{title:"The total number of users who match the targeting criteria for this segment.",children:e.jsx(l,{align:"center",justify:"center",children:e.jsx(T,{name:u,size:"sm",color:"default"})})})]}),e.jsxs(l,{align:"center",gap:m,children:[e.jsx(a.Text,{style:{wordBreak:"initial"},children:"Conversion Rate"}),e.jsx(g,{title:e.jsxs(a.Text,{tooltip:!0,children:["The percentage of users who completed the desired action."," ",e.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]}),children:e.jsx(l,{align:"center",justify:"center",children:e.jsx(T,{name:u,size:"sm",color:"default"})})})]})]})};var y,f,j;s.parameters=n(t({},s.parameters),{docs:n(t({},(y=s.parameters)==null?void 0:y.docs),{source:t({originalSource:`{
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
}`},(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source)})});var k,F,L;p.parameters=n(t({},p.parameters),{docs:n(t({},(k=p.parameters)==null?void 0:k.docs),{source:t({originalSource:`{
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
}`},(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source)})});var S,b,B;c.parameters=n(t({},c.parameters),{docs:n(t({},(S=c.parameters)==null?void 0:S.docs),{source:t({originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>;
  }
}`},(B=(b=c.parameters)==null?void 0:b.docs)==null?void 0:B.source)})});var w,M,I;h.parameters=n(t({},h.parameters),{docs:n(t({},(w=h.parameters)==null?void 0:w.docs),{source:t({originalSource:`{
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
}`},(I=(M=h.parameters)==null?void 0:M.docs)==null?void 0:I.source)})});const P=["Primary","WithLink","TextWithIcon","HelpIcon"],V=Object.freeze(Object.defineProperty({__proto__:null,HelpIcon:h,Primary:s,TextWithIcon:c,WithLink:p,__namedExportsOrder:P,default:O},Symbol.toStringTag,{value:"Module"}));export{h as H,V as T,O as m};
