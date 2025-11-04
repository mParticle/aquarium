var J=Object.defineProperty,K=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(o,r,a)=>r in o?J(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,e=(o,r)=>{for(var a in r||(r={}))Q.call(r,a)&&y(o,a,r[a]);if(u)for(var a of u(r))V.call(r,a)&&y(o,a,r[a]);return o},s=(o,r)=>K(o,L(r));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{y as H,c as X}from"./NavigationItemsService-Bu-5F8sr.js";const Y={title:"Components/Feedback/Alert",component:H,args:{banner:!1,showIcon:!1,type:"info",onClose:o=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},n={render:()=>t.jsx(H,{message:t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{style:{fontSize:"20px"},children:"💡"}),t.jsxs("span",{children:["Use the"," ",t.jsx("a",{href:"?path=/docs/components-feedback-message--docs",style:{textDecoration:"underline"},children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:"#ffffff",border:"1px solid #d9d9d9",borderRadius:"8px",width:"100%",marginBottom:0}})},i={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"600px"}}},c={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"600px"}}},m={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"600px"}}},p={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"600px"}}},g={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"600px"}}},l={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"600px"}}},d={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:t.jsx(X.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"600px"}}},h={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"600px"}}};var f,x,w;n.parameters=s(e({},n.parameters),{docs:s(e({},(f=n.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert message={<span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
            <span style={{
        fontSize: '20px'
      }}>💡</span>
            <span>
              Use the{' '}
              <a href="?path=/docs/components-feedback-message--docs" style={{
          textDecoration: 'underline'
        }}>
                Message component
              </a>{' '}
              if the notification should dismiss automatically.
            </span>
          </span>} showIcon={false} type="info" style={{
      backgroundColor: '#ffffff',
      border: '1px solid #d9d9d9',
      borderRadius: '8px',
      width: '100%',
      marginBottom: 0
    }} />;
  }
}`},(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source)})});var I,b,T;i.parameters=s(e({},i.parameters),{docs:s(e({},(I=i.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source)})});var B,S,C;c.parameters=s(e({},c.parameters),{docs:s(e({},(B=c.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source)})});var E,W,j;m.parameters=s(e({},m.parameters),{docs:s(e({},(E=m.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source)})});var A,k,_;p.parameters=s(e({},p.parameters),{docs:s(e({},(A=p.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source)})});var z,O,M;g.parameters=s(e({},g.parameters),{docs:s(e({},(z=g.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(M=(O=g.parameters)==null?void 0:O.docs)==null?void 0:M.source)})});var R,D,N;l.parameters=s(e({},l.parameters),{docs:s(e({},(R=l.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source)})});var U,v,F;d.parameters=s(e({},d.parameters),{docs:s(e({},(U=d.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
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
}`},(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.source)})});var P,q,G;h.parameters=s(e({},h.parameters),{docs:s(e({},(P=h.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
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
}`},(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});const Z=["StorybookNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton"],re=Object.freeze(Object.defineProperty({__proto__:null,Error:p,ErrorWithExpandCollapse:d,ErrorWithoutIcon:l,Info:i,InfoWithoutIcon:g,StorybookNote:n,Success:c,Warning:m,WithCloseButton:h,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{re as A,p as E,g as I,n as S,m as W,c as a,h as b,d as c};
