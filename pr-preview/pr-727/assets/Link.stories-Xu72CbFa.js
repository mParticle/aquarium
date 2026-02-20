var D=Object.defineProperty,F=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var g=(a,t,n)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,e=(a,t)=>{for(var n in t||(t={}))K.call(t,n)&&g(a,n,t[n]);if(m)for(var n of m(t))M.call(t,n)&&g(a,n,t[n]);return a},o=(a,t)=>F(a,A(t));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{a4 as O,b as s,T as H,I as W,F as U,K as V}from"./UnauthorizedTooltip-caQfJv4u.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{aw as X}from"./style-B81W5px8.js";const G={title:"Components/General/Typography/Link",component:s.Link,args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:O},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},i={args:{}},l={render:()=>r.jsx(H,{title:r.jsx(r.Fragment,{children:r.jsxs(s.Text,{tooltip:!0,children:["Help lorem ipsum"," ",r.jsx(s.Link,{href:"/",tooltip:!0,children:"Learn More"})]})}),children:r.jsx(W,{name:"help",size:"sm"})})},p={render:()=>r.jsxs(s.Paragraph,{color:"ColorTextDescription",children:["This is placeholder descriptive copy that illustrates how inline links sit alongside supporting content. The paragraph spacing demonstrates how the link remains readable even within longer bodies of narrative."," ",r.jsx(s.Link,{href:"https://mparticle.com/docs",color:"ColorTextDescription",underline:!0,target:"_blank",rel:"noopener noreferrer",children:"Explore the documentation"})," ","to learn more about this topic. Keep the surrounding text concise and focused so the call to action is easy to scan. When possible, avoid stacking multiple links within the same sentence to maintain clarity."]})},c={render:()=>r.jsx(s.Link,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.mparticle.com/",color:"ColorLink",children:r.jsxs(U,{align:"center",gap:X,children:[r.jsx("span",{children:"View documentation"}),r.jsx(W,{name:"openTab",size:"sm",color:"inherit"})]})})},d={render:()=>r.jsx(s.Link,{color:"ColorText",href:"https://docs.mparticle.com/",target:"_blank",rel:"noopener noreferrer",children:"Example Text"})},h={render:()=>r.jsx(V,{type:"error",showIcon:!0,message:r.jsxs(s.Text,{color:"ColorText",children:["Something went wrong."," ",r.jsx(s.Link,{color:"ColorText",underline:!0,href:"https://mparticle.com/support",children:"Contact support"})," ","to get help."]})})};var u,y,T;i.parameters=o(e({},i.parameters),{docs:o(e({},(u=i.parameters)==null?void 0:u.docs),{source:e({originalSource:`{
  args: {}
}`},(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source)})});var x,b,f;l.parameters=o(e({},l.parameters),{docs:o(e({},(x=l.parameters)==null?void 0:x.docs),{source:e({originalSource:`{
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
}`},(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source)})});var k,L,j;p.parameters=o(e({},p.parameters),{docs:o(e({},(k=p.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
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
}`},(j=(L=p.parameters)==null?void 0:L.docs)==null?void 0:j.source)})});var w,C,I;c.parameters=o(e({},c.parameters),{docs:o(e({},(w=c.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  render: () => {
    return <Typography.Link target="_blank" rel="noopener noreferrer" href="https://docs.mparticle.com/" color="ColorLink">
        <Flex align="center" gap={SizeXs}>
          <span>View documentation</span>
          <Icon name="openTab" size="sm" color="inherit" />
        </Flex>
      </Typography.Link>;
  }
}`},(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source)})});var S,_,v;d.parameters=o(e({},d.parameters),{docs:o(e({},(S=d.parameters)==null?void 0:S.docs),{source:e({originalSource:`{
  render: () => {
    return <Typography.Link color="ColorText" href="https://docs.mparticle.com/" target="_blank" rel="noopener noreferrer">
        Example Text
      </Typography.Link>;
  }
}`},(v=(_=d.parameters)==null?void 0:_.docs)==null?void 0:v.source)})});var z,E,P;h.parameters=o(e({},h.parameters),{docs:o(e({},(z=h.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert type="error" showIcon message={<Typography.Text color="ColorText">
            Something went wrong.{' '}
            <Typography.Link color="ColorText" underline href="https://mparticle.com/support">
              Contact support
            </Typography.Link>{' '}
            to get help.
          </Typography.Text>} />;
  }
}`},(P=(E=h.parameters)==null?void 0:E.docs)==null?void 0:P.source)})});const R=["Primary","InsideTooltip","LongDescription","WithInlineIcon","WithUnderline","InsideErrorAlert"],re=Object.freeze(Object.defineProperty({__proto__:null,InsideErrorAlert:h,InsideTooltip:l,LongDescription:p,Primary:i,WithInlineIcon:c,WithUnderline:d,__namedExportsOrder:R,default:G},Symbol.toStringTag,{value:"Module"}));export{l as I,re as L,i as P,d as W,p as a,c as b,h as c};
