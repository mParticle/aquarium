var Se=Object.defineProperty,Ce=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var C=(t,o,n)=>o in t?Se(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,e=(t,o)=>{for(var n in o||(o={}))ke.call(o,n)&&C(t,n,o[n]);if(S)for(var n of S(o))Le.call(o,n)&&C(t,n,o[n]);return t},s=(t,o)=>Ce(t,We(o));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{y as Ie,F as je,c as a}from"./NavigationItemsService-CDu-Yt3X.js";import{B as ze,l as Ee,m as Ae,S as ve}from"./style-BvWo89XW.js";const Re={title:"Components/Feedback/Alert",component:Ie,args:{banner:!1,showIcon:!1,type:"info",onClose:t=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},i={render:()=>r.jsx(Ie,{message:r.jsxs(je,{align:"center",gap:ve,children:[r.jsx(a.Text,{size:"xl",children:"💡"}),r.jsxs(a.Text,{size:"base",children:["Use the"," ",r.jsx(a.Link,{href:"?path=/docs/components-feedback-message--docs",underline:!0,children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:Ae,border:`1px solid ${Ee}`,borderRadius:ze,width:"100%",marginBottom:0}})},c={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"600px"}}},m={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"600px"}}},g={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"600px"}}},p={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"600px"}}},l={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"600px"}}},h={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"600px"}}},u={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:r.jsx(a.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"600px"}}},d={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"600px"}}},y={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"600px"}}},x={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"600px"}}},w={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"600px"}}},T={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"600px"}}},f={args:{type:"success",message:r.jsxs(a.Text,{size:"base",children:["Your changes have been saved successfully."," ",r.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"600px"}}},B={args:{type:"info",message:r.jsxs(a.Text,{size:"base",children:["This is an informational message."," ",r.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"600px"}}},b={args:{type:"warning",message:r.jsxs(a.Text,{size:"base",children:["This is a warning message."," ",r.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"600px"}}},I={args:{type:"error",message:r.jsxs(a.Text,{size:"base",children:["An error occurred processing your request."," ",r.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"600px"}}};var W,k,L;i.parameters=s(e({},i.parameters),{docs:s(e({},(W=i.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
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
      width: '100%',
      marginBottom: 0
    }} />;
  }
}`},(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source)})});var j,z,E;c.parameters=s(e({},c.parameters),{docs:s(e({},(j=c.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source)})});var A,v,R;m.parameters=s(e({},m.parameters),{docs:s(e({},(A=m.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(R=(v=m.parameters)==null?void 0:v.docs)==null?void 0:R.source)})});var _,F,O;g.parameters=s(e({},g.parameters),{docs:s(e({},(_=g.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source)})});var M,q,N;p.parameters=s(e({},p.parameters),{docs:s(e({},(M=p.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(N=(q=p.parameters)==null?void 0:q.docs)==null?void 0:N.source)})});var U,V,X;l.parameters=s(e({},l.parameters),{docs:s(e({},(U=l.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(X=(V=l.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Y,$,P;h.parameters=s(e({},h.parameters),{docs:s(e({},(Y=h.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(P=($=h.parameters)==null?void 0:$.docs)==null?void 0:P.source)})});var D,G,H;u.parameters=s(e({},u.parameters),{docs:s(e({},(D=u.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    expandable: true,
    closable: true,
    message: 'This is an error message.',
    expandableContent: <Typography.Text size="base">Error details go here</Typography.Text>,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var J,K,Q;d.parameters=s(e({},d.parameters),{docs:s(e({},(J=d.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var Z,ee,se;y.parameters=s(e({},y.parameters),{docs:s(e({},(Z=y.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(se=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:se.source)})});var re,oe,ae;x.parameters=s(e({},x.parameters),{docs:s(e({},(re=x.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source)})});var te,ne,ie;w.parameters=s(e({},w.parameters),{docs:s(e({},(te=w.parameters)==null?void 0:te.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(ie=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ie.source)})});var ce,me,ge;T.parameters=s(e({},T.parameters),{docs:s(e({},(ce=T.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    message: 'This is an error message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(ge=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ge.source)})});var pe,le,he;f.parameters=s(e({},f.parameters),{docs:s(e({},(pe=f.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
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
      width: '600px'
    }
  }
}`},(he=(le=f.parameters)==null?void 0:le.docs)==null?void 0:he.source)})});var ue,de,ye;B.parameters=s(e({},B.parameters),{docs:s(e({},(ue=B.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
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
      width: '600px'
    }
  }
}`},(ye=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ye.source)})});var xe,we,Te;b.parameters=s(e({},b.parameters),{docs:s(e({},(xe=b.parameters)==null?void 0:xe.docs),{source:e({originalSource:`{
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
      width: '600px'
    }
  }
}`},(Te=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Te.source)})});var fe,Be,be;I.parameters=s(e({},I.parameters),{docs:s(e({},(fe=I.parameters)==null?void 0:fe.docs),{source:e({originalSource:`{
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
      width: '600px'
    }
  }
}`},(be=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:be.source)})});const _e=["StorybookNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Error:p,ErrorWithCloseButton:T,ErrorWithExpandCollapse:u,ErrorWithLink:I,ErrorWithoutIcon:h,Info:c,InfoWithCloseButton:x,InfoWithLink:B,InfoWithoutIcon:l,StorybookNote:i,Success:m,SuccessWithCloseButton:y,SuccessWithLink:f,Warning:g,WarningWithCloseButton:w,WarningWithLink:b,WithCloseButton:d,__namedExportsOrder:_e,default:Re},Symbol.toStringTag,{value:"Module"}));export{Ne as A,p as E,c as I,i as S,g as W,m as a,y as b,x as c,w as d,T as e,f,B as g,b as h,I as i,u as j};
