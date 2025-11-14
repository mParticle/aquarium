var Re=Object.defineProperty,ve=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var k=(t,a,n)=>a in t?Re(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,e=(t,a)=>{for(var n in a||(a={}))Ne.call(a,n)&&k(t,n,a[n]);if(W)for(var n of W(a))Oe.call(a,n)&&k(t,n,a[n]);return t},s=(t,a)=>ve(t,Fe(a));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{y as S,F as Le,c as o}from"./NavigationItemsService-BeUgPi48.js";import{B as je,l as ze,m as Ee,S as Ae}from"./style-BvWo89XW.js";const _e={title:"Components/Feedback/Alert",component:S,args:{banner:!1,showIcon:!1,type:"info",onClose:t=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},i={render:()=>r.jsx(S,{message:r.jsxs(Le,{align:"center",gap:Ae,children:[r.jsx(o.Text,{size:"xl",children:"💡"}),r.jsxs(o.Text,{size:"base",children:["Use the"," ",r.jsx(o.Link,{href:"?path=/docs/components-feedback-message--docs",underline:!0,children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:Ee,border:`1px solid ${ze}`,borderRadius:je,width:"860px",marginBottom:0}})},c={render:()=>r.jsx(S,{message:r.jsxs(Le,{align:"center",gap:Ae,children:[r.jsx(o.Text,{size:"xl",children:"💡"}),r.jsx(o.Text,{size:"base",children:"We don't use bolding or titles for our alerts."})]}),showIcon:!1,type:"info",style:{backgroundColor:Ee,border:`1px solid ${ze}`,borderRadius:je,width:"860px",marginBottom:0}})},g={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},p={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},m={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"860px"}}},l={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"860px"}}},h={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},d={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"860px"}}},u={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:r.jsx(o.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"860px"}}},y={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},x={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},T={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},w={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},f={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},b={args:{type:"success",message:r.jsxs(o.Text,{size:"base",children:["Your changes have been saved successfully."," ",r.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},B={args:{type:"info",message:r.jsxs(o.Text,{size:"base",children:["This is an informational message."," ",r.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},I={args:{type:"warning",message:r.jsxs(o.Text,{size:"base",children:["This is a warning message."," ",r.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},C={args:{type:"error",message:r.jsxs(o.Text,{size:"base",children:["An error occurred processing your request."," ",r.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}};var L,j,z;i.parameters=s(e({},i.parameters),{docs:s(e({},(L=i.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert message={<Flex align="center" gap={SizeXs}>
            <Typography.Text size="xl">💡</Typography.Text>
            <Typography.Text size="base">
              Use the{' '}
              <Typography.Link href="?path=/docs/components-feedback-message--docs" underline>
                Message component
              </Typography.Link>{' '}
              if the notification should dismiss automatically.
            </Typography.Text>
          </Flex>} showIcon={false} type="info" style={{
      backgroundColor: ColorWhite,
      border: \`1px solid \${ColorBorderSecondary}\`,
      borderRadius: BorderRadiusLg,
      width: '860px',
      marginBottom: 0
    }} />;
  }
}`},(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source)})});var E,A,R;c.parameters=s(e({},c.parameters),{docs:s(e({},(E=c.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert message={<Flex align="center" gap={SizeXs}>
            <Typography.Text size="xl">💡</Typography.Text>
            <Typography.Text size="base">We don&apos;t use bolding or titles for our alerts.</Typography.Text>
          </Flex>} showIcon={false} type="info" style={{
      backgroundColor: ColorWhite,
      border: \`1px solid \${ColorBorderSecondary}\`,
      borderRadius: BorderRadiusLg,
      width: '860px',
      marginBottom: 0
    }} />;
  }
}`},(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source)})});var v,F,N;g.parameters=s(e({},g.parameters),{docs:s(e({},(v=g.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(N=(F=g.parameters)==null?void 0:F.docs)==null?void 0:N.source)})});var O,_,$;p.parameters=s(e({},p.parameters),{docs:s(e({},(O=p.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source)})});var M,X,q;m.parameters=s(e({},m.parameters),{docs:s(e({},(M=m.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(q=(X=m.parameters)==null?void 0:X.docs)==null?void 0:q.source)})});var U,V,Y;l.parameters=s(e({},l.parameters),{docs:s(e({},(U=l.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Y.source)})});var P,D,G;h.parameters=s(e({},h.parameters),{docs:s(e({},(P=h.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(G=(D=h.parameters)==null?void 0:D.docs)==null?void 0:G.source)})});var H,J,K;d.parameters=s(e({},d.parameters),{docs:s(e({},(H=d.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,Z,ee;u.parameters=s(e({},u.parameters),{docs:s(e({},(Q=u.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    expandable: true,
    closable: true,
    message: 'This is an error message.',
    expandableContent: <Typography.Text size="base">Error details go here</Typography.Text>,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var se,re,oe;y.parameters=s(e({},y.parameters),{docs:s(e({},(se=y.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(oe=(re=y.parameters)==null?void 0:re.docs)==null?void 0:oe.source)})});var ae,te,ne;x.parameters=s(e({},x.parameters),{docs:s(e({},(ae=x.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source)})});var ie,ce,ge;T.parameters=s(e({},T.parameters),{docs:s(e({},(ie=T.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ge=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ge.source)})});var pe,me,le;w.parameters=s(e({},w.parameters),{docs:s(e({},(pe=w.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(le=(me=w.parameters)==null?void 0:me.docs)==null?void 0:le.source)})});var he,de,ue;f.parameters=s(e({},f.parameters),{docs:s(e({},(he=f.parameters)==null?void 0:he.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    message: 'This is an error message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source)})});var ye,xe,Te;b.parameters=s(e({},b.parameters),{docs:s(e({},(ye=b.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: <Typography.Text size="base">
        Your changes have been saved successfully.{' '}
        <Typography.Link color="ColorText" underline href="#">
          View details
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Te=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:Te.source)})});var we,fe,be;B.parameters=s(e({},B.parameters),{docs:s(e({},(we=B.parameters)==null?void 0:we.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: <Typography.Text size="base">
        This is an informational message.{' '}
        <Typography.Link color="ColorText" underline href="#">
          Learn more
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(be=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:be.source)})});var Be,Ie,Ce;I.parameters=s(e({},I.parameters),{docs:s(e({},(Be=I.parameters)==null?void 0:Be.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: <Typography.Text size="base">
        This is a warning message.{' '}
        <Typography.Link color="ColorText" underline href="#">
          Review settings
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Ce=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source)})});var Se,We,ke;C.parameters=s(e({},C.parameters),{docs:s(e({},(Se=C.parameters)==null?void 0:Se.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    message: <Typography.Text size="base">
        An error occurred processing your request.{' '}
        <Typography.Link color="ColorText" underline href="#">
          Try again
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ke=(We=C.parameters)==null?void 0:We.docs)==null?void 0:ke.source)})});const $e=["StorybookNote","NoBoldingOrTitlesNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Error:l,ErrorWithCloseButton:f,ErrorWithExpandCollapse:u,ErrorWithLink:C,ErrorWithoutIcon:d,Info:g,InfoWithCloseButton:T,InfoWithLink:B,InfoWithoutIcon:h,NoBoldingOrTitlesNote:c,StorybookNote:i,Success:p,SuccessWithCloseButton:x,SuccessWithLink:b,Warning:m,WarningWithCloseButton:w,WarningWithLink:I,WithCloseButton:y,__namedExportsOrder:$e,default:_e},Symbol.toStringTag,{value:"Module"}));export{Ve as A,l as E,g as I,c as N,i as S,m as W,p as a,f as b,b as c,B as d,I as e,C as f};
