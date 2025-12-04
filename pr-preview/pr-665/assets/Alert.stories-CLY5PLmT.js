var G=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var x=(o,r,a)=>r in o?G(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,e=(o,r)=>{for(var a in r||(r={}))K.call(r,a)&&x(o,a,r[a]);if(y)for(var a of y(r))Q.call(r,a)&&x(o,a,r[a]);return o},s=(o,r)=>H(o,J(r));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{y as D,F as V,c as u}from"./NavigationItemsService-MKdfSE0_.js";import{B as Y,l as Z,m as ee,S as se}from"./style-BvWo89XW.js";const re={title:"Components/Feedback/Alert",component:D,args:{banner:!1,showIcon:!1,type:"info",onClose:o=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},n={render:()=>t.jsx(D,{message:t.jsxs(V,{align:"center",gap:se,children:[t.jsx(u.Text,{size:"xl",children:"💡"}),t.jsxs(u.Text,{size:"base",children:["Use the"," ",t.jsx(u.Link,{href:"?path=/docs/components-feedback-message--docs",underline:!0,children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:ee,border:`1px solid ${Z}`,borderRadius:Y,width:"100%",marginBottom:0}})},i={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"600px"}}},c={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"600px"}}},m={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"600px"}}},g={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"600px"}}},p={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"600px"}}},l={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"600px"}}},d={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:t.jsx(u.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"600px"}}},h={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"600px"}}};var w,f,T;n.parameters=s(e({},n.parameters),{docs:s(e({},(w=n.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
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
}`},(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source)})});var b,I,B;i.parameters=s(e({},i.parameters),{docs:s(e({},(b=i.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(B=(I=i.parameters)==null?void 0:I.docs)==null?void 0:B.source)})});var S,C,E;c.parameters=s(e({},c.parameters),{docs:s(e({},(S=c.parameters)==null?void 0:S.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source)})});var W,j,k;m.parameters=s(e({},m.parameters),{docs:s(e({},(W=m.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source)})});var A,z,_;g.parameters=s(e({},g.parameters),{docs:s(e({},(A=g.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(_=(z=g.parameters)==null?void 0:z.docs)==null?void 0:_.source)})});var F,L,R;p.parameters=s(e({},p.parameters),{docs:s(e({},(F=p.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source)})});var O,M,N;l.parameters=s(e({},l.parameters),{docs:s(e({},(O=l.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(N=(M=l.parameters)==null?void 0:M.docs)==null?void 0:N.source)})});var U,X,$;d.parameters=s(e({},d.parameters),{docs:s(e({},(U=d.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
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
}`},($=(X=d.parameters)==null?void 0:X.docs)==null?void 0:$.source)})});var v,P,q;h.parameters=s(e({},h.parameters),{docs:s(e({},(v=h.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
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
}`},(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source)})});const oe=["StorybookNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton"],ce=Object.freeze(Object.defineProperty({__proto__:null,Error:g,ErrorWithExpandCollapse:d,ErrorWithoutIcon:l,Info:i,InfoWithoutIcon:p,StorybookNote:n,Success:c,Warning:m,WithCloseButton:h,__namedExportsOrder:oe,default:re},Symbol.toStringTag,{value:"Module"}));export{ce as A,g as E,p as I,n as S,m as W,c as a,h as b,d as c};
