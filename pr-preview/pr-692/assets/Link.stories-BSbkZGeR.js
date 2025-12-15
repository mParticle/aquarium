var z=Object.defineProperty,E=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(a,o,n)=>o in a?z(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,e=(a,o)=>{for(var n in o||(o={}))D.call(o,n)&&h(a,n,o[n]);if(m)for(var n of m(o))F.call(o,n)&&h(a,n,o[n]);return a},t=(a,o)=>E(a,P(o));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{a3 as W,c as s,T as A,I as _,F as M,J as O}from"./NavigationItemsService-BzvQO0pY.js";import"./ErrorStateIcon-tcH5z2Kq.js";import"./SuccessStateIcon--57R4X2e.js";import"./WarningStateIcon-BxWKhc6z.js";import"./_baseClone-DwBCp-Ss.js";import{n as H}from"./style-BAkx2Mzk.js";const K={title:"Components/General/Typography/Link",component:s.Link,args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:W},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},i={args:{underline:!0}},l={render:()=>r.jsx(A,{title:r.jsx(r.Fragment,{children:r.jsxs(s.Text,{tooltip:!0,children:["Help lorem ipsum"," ",r.jsx(s.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:r.jsx(_,{name:"help",size:"sm"})})},p={render:()=>r.jsxs(s.Paragraph,{color:"ColorTextDescription",children:["This is placeholder descriptive copy that illustrates how inline links sit alongside supporting content. The paragraph spacing demonstrates how the link remains readable even within longer bodies of narrative."," ",r.jsx(s.Link,{href:"https://mparticle.com/docs",color:"ColorTextDescription",underline:!0,target:"_blank",rel:"noopener noreferrer",children:"Explore the documentation"})," ","to learn more about this topic. Keep the surrounding text concise and focused so the call to action is easy to scan. When possible, avoid stacking multiple links within the same sentence to maintain clarity."]})},c={render:()=>r.jsx(s.Link,{underline:!0,target:"_blank",rel:"noopener noreferrer",href:"https://docs.mparticle.com/",color:"ColorLink",children:r.jsxs(M,{align:"center",gap:H,children:[r.jsx("span",{children:"View documentation"}),r.jsx(_,{name:"openTab",size:"sm",color:"primary"})]})})},d={render:()=>r.jsx(O,{type:"error",showIcon:!0,message:r.jsxs(s.Text,{color:"ColorText",children:["Something went wrong."," ",r.jsx(s.Link,{color:"ColorText",underline:!0,href:"https://mparticle.com/support",children:"Contact support"})," ","to get help."]})})};var u,g,y;i.parameters=t(e({},i.parameters),{docs:t(e({},(u=i.parameters)==null?void 0:u.docs),{source:e({originalSource:`{
  args: {
    underline: true
  }
}`},(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var T,x,b;l.parameters=t(e({},l.parameters),{docs:t(e({},(T=l.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  render: () => {
    return <Tooltip title={<>
            <Typography.Text tooltip>
              Help lorem ipsum{' '}
              <Typography.Link href="/" tooltip>
                Learn More
              </Typography.Link>
            </Typography.Text>
          </>}>
        <Icon name="help" size="sm" />
      </Tooltip>;
  }
}`},(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source)})});var f,k,L;p.parameters=t(e({},p.parameters),{docs:t(e({},(f=p.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  render: () => {
    return <Typography.Paragraph color="ColorTextDescription">
        This is placeholder descriptive copy that illustrates how inline links sit alongside supporting content. The
        paragraph spacing demonstrates how the link remains readable even within longer bodies of narrative.{' '}
        <Typography.Link href="https://mparticle.com/docs" color="ColorTextDescription" underline target="_blank" rel="noopener noreferrer">
          Explore the documentation
        </Typography.Link>{' '}
        to learn more about this topic. Keep the surrounding text concise and focused so the call to action is easy to
        scan. When possible, avoid stacking multiple links within the same sentence to maintain clarity.
      </Typography.Paragraph>;
  }
}`},(L=(k=p.parameters)==null?void 0:k.docs)==null?void 0:L.source)})});var j,w,I;c.parameters=t(e({},c.parameters),{docs:t(e({},(j=c.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  render: () => {
    return <Typography.Link underline target="_blank" rel="noopener noreferrer" href="https://docs.mparticle.com/" color="ColorLink">
        <Flex align="center" gap={SizeXs}>
          <span>View documentation</span>
          <Icon name="openTab" size="sm" color="primary" />
        </Flex>
      </Typography.Link>;
  }
}`},(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source)})});var C,S,v;d.parameters=t(e({},d.parameters),{docs:t(e({},(C=d.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert type="error" showIcon message={<Typography.Text color="ColorText">
            Something went wrong.{' '}
            <Typography.Link color="ColorText" underline href="https://mparticle.com/support">
              Contact support
            </Typography.Link>{' '}
            to get help.
          </Typography.Text>} />;
  }
}`},(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source)})});const V=["Primary","InsideTooltip","LongDescription","WithInlineIcon","InsideErrorAlert"],U=Object.freeze(Object.defineProperty({__proto__:null,InsideErrorAlert:d,InsideTooltip:l,LongDescription:p,Primary:i,WithInlineIcon:c,__namedExportsOrder:V,default:K},Symbol.toStringTag,{value:"Module"}));export{l as I,U as L,i as P,c as W,p as a,d as b};
