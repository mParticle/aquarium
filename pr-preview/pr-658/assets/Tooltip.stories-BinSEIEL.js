var j=Object.defineProperty,L=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var a=(o,t,e)=>t in o?j(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,n=(o,t)=>{for(var e in t||(t={}))k.call(t,e)&&a(o,e,t[e]);if(s)for(var e of s(t))B.call(t,e)&&a(o,e,t[e]);return o},i=(o,t)=>L(o,b(t));import{j as r}from"./jsx-runtime-CVnACwZl.js";import{F as x,T as f,e as y,c}from"./NavigationItemsService-Ca6mVM7d.js";import"./ErrorStateIcon-kjHStgbV.js";import"./SuccessStateIcon-709Tdv_u.js";import"./WarningStateIcon-ZHXkKKYB.js";import"./_baseClone-CXAe4HsA.js";const _={title:"Components/Data Display/Tooltip",component:o=>r.jsx(x,{align:"center",gap:2,children:r.jsx(f,i(n({},o),{children:r.jsx(y,{children:"Tooltip element"})}))})},p={args:{title:"Tooltip content",placement:"top",trigger:"hover"},argTypes:{placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},l={render:()=>r.jsx(x,{align:"center",gap:2,children:r.jsx(f,{title:r.jsx(r.Fragment,{children:r.jsxs(c.Text,{tooltip:!0,children:["Help lorem ipsum"," ",r.jsx(c.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:r.jsx(y,{children:"Tooltip with a link"})})})};var m,g,h;p.parameters=i(n({},p.parameters),{docs:i(n({},(m=p.parameters)==null?void 0:m.docs),{source:n({originalSource:`{
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
}`},(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var T,u,d;l.parameters=i(n({},l.parameters),{docs:i(n({},(T=l.parameters)==null?void 0:T.docs),{source:n({originalSource:`{
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
}`},(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source)})});const v=["Primary","WithLink"],D=Object.freeze(Object.defineProperty({__proto__:null,Primary:p,WithLink:l,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{D as T,_ as m};
