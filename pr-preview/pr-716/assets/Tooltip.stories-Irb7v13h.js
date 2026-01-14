var B=Object.defineProperty,S=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var g=(o,e,n)=>e in o?B(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,r=(o,e)=>{for(var n in e||(e={}))M.call(e,n)&&g(o,n,e[n]);if(m)for(var n of m(e))W.call(e,n)&&g(o,n,e[n]);return o},i=(o,e)=>S(o,F(e));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{F as c,T as k,c as L,b as a,o as _}from"./NavigationItemsService-B90JvV8j.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import{q as v}from"./style-BbwCNso5.js";const R={title:"Components/Data Display/Tooltip",component:o=>t.jsx(c,{align:"center",gap:2,children:t.jsx(k,i(r({},o),{children:t.jsx(L,{children:"Tooltip element"})}))})},p={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},l={render:()=>t.jsx(c,{align:"center",gap:2,children:t.jsx(k,{title:t.jsx(t.Fragment,{children:t.jsxs(a.Text,{tooltip:!0,children:["Help lorem ipsum"," ",t.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:t.jsx(L,{children:"Tooltip with a link"})})})},s={render:()=>t.jsxs(c,{align:"center",gap:v,children:[t.jsx(a.Text,{style:{wordBreak:"initial"},children:"Strength"}),t.jsx(_,{title:"This is helpful information about strength"})]})};var h,T,u;p.parameters=i(r({},p.parameters),{docs:i(r({},(h=p.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
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
}`},(u=(T=p.parameters)==null?void 0:T.docs)==null?void 0:u.source)})});var x,d,f;l.parameters=i(r({},l.parameters),{docs:i(r({},(x=l.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
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
}`},(f=(d=l.parameters)==null?void 0:d.docs)==null?void 0:f.source)})});var y,j,b;s.parameters=i(r({},s.parameters),{docs:i(r({},(y=s.parameters)==null?void 0:y.docs),{source:r({originalSource:`{
  render: () => {
    return <Flex align="center" gap={MarginXxs}>
        <Typography.Text style={{
        wordBreak: 'initial'
      }}>Strength</Typography.Text>
        <IconWithTooltip title="This is helpful information about strength" />
      </Flex>;
  }
}`},(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source)})});const w=["Primary","WithLink","TextWithIcon"],z=Object.freeze(Object.defineProperty({__proto__:null,Primary:p,TextWithIcon:s,WithLink:l,__namedExportsOrder:w,default:R},Symbol.toStringTag,{value:"Module"}));export{z as T,R as m};
