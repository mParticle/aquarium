var Y=Object.defineProperty,Z=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var w=(o,r,t)=>r in o?Y(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,e=(o,r)=>{for(var t in r||(r={}))ee.call(r,t)&&w(o,t,r[t]);if(x)for(var t of x(r))se.call(r,t)&&w(o,t,r[t]);return o},s=(o,r)=>Z(o,$(r));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{r as oe}from"./index-3OP4wdng.js";import{y as Q,z as re,G as U,H as S}from"./NavigationItemsService-COcuOoGx.js";import{f as a,F as y,l as I,m as ne}from"./style-C11LJCJh.js";import{C as te}from"./SuccessStateIcon-BWqCdJgP.js";const ae={title:"Components/Feedback/Alert",component:Q,args:{banner:!1,showIcon:!1,type:"info",onClose:o=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},i={args:{type:"info",message:"This is an informational message.",showIcon:!0,icon:n.jsx(re,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},c={args:{type:"success",message:"This is a success message.",showIcon:!0,icon:n.jsx(te,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},l={args:{message:"This is a warning message.",type:"warning",showIcon:!0,icon:n.jsx(U,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},m={args:{message:"This is an error message.",type:"error",showIcon:!0,icon:n.jsx(S,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},p={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"600px"}}},d={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"600px"}}},g={args:{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0,icon:n.jsx(S,{style:{fontSize:a}}),style:{marginBottom:0}}},u={render:()=>{const[o,r]=oe.useState(!1),t=()=>{r(!o)};return n.jsx(Q,{message:n.jsxs("span",{style:{fontSize:y},children:["This is an error message."," ",!o&&n.jsx("a",{onClick:t,style:{cursor:"pointer",textDecoration:"underline",color:I},onMouseDown:f=>f.preventDefault(),children:"View details"})]}),description:o?n.jsxs("div",{style:{fontSize:y},children:[n.jsx("div",{style:{fontSize:y},children:"Error details go here"}),n.jsx("div",{style:{marginTop:ne},children:n.jsx("a",{onClick:t,style:{cursor:"pointer",textDecoration:"underline",color:I,fontSize:y},onMouseDown:f=>f.preventDefault(),children:"Hide details"})})]}):null,type:"error",showIcon:!0,icon:n.jsx(S,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"},afterClose:()=>{},onClose:()=>{}})}},h={args:{type:"warning",message:"This is a warning message.",showIcon:!0,icon:n.jsx(U,{style:{fontSize:a}}),closable:!0,style:{marginBottom:0,width:"600px"}}};var C,z,E;i.parameters=s(e({},i.parameters),{docs:s(e({},(C=i.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    icon: <InfoCircleFilled style={{
      fontSize: MpIconSizeSm
    }} />,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source)})});var T,B,j;c.parameters=s(e({},c.parameters),{docs:s(e({},(T=c.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    icon: <CheckCircleFilled style={{
      fontSize: MpIconSizeSm
    }} />,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(j=(B=c.parameters)==null?void 0:B.docs)==null?void 0:j.source)})});var F,M,v;l.parameters=s(e({},l.parameters),{docs:s(e({},(F=l.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    icon: <ExclamationCircleFilled style={{
      fontSize: MpIconSizeSm
    }} />,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(v=(M=l.parameters)==null?void 0:M.docs)==null?void 0:v.source)})});var W,D,b;m.parameters=s(e({},m.parameters),{docs:s(e({},(W=m.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    icon: <CloseCircleFilled style={{
      fontSize: MpIconSizeSm
    }} />,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(b=(D=m.parameters)==null?void 0:D.docs)==null?void 0:b.source)})});var A,k,_;p.parameters=s(e({},p.parameters),{docs:s(e({},(A=p.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source)})});var O,H,V;d.parameters=s(e({},d.parameters),{docs:s(e({},(O=d.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source)})});var X,G,P;g.parameters=s(e({},g.parameters),{docs:s(e({},(X=g.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    message: 'Error',
    description: 'This is an error message about copywriting.',
    type: 'error',
    showIcon: true,
    icon: <CloseCircleFilled style={{
      fontSize: MpIconSizeSm
    }} />,
    style: {
      marginBottom: 0
    }
  }
}`},(P=(G=g.parameters)==null?void 0:G.docs)==null?void 0:P.source)})});var R,q,J;u.parameters=s(e({},u.parameters),{docs:s(e({},(R=u.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  render: () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
    return <Alert message={<span style={{
      fontSize: FontSize
    }}>
            This is an error message.{' '}
            {!isExpanded && <a onClick={toggleExpand} style={{
        cursor: 'pointer',
        textDecoration: 'underline',
        color: ColorText
      }} onMouseDown={e => e.preventDefault()}>
                View details
              </a>}
          </span>} description={isExpanded ? <div style={{
      fontSize: FontSize
    }}>
              <div style={{
        fontSize: FontSize
      }}>Error details go here</div>
              <div style={{
        marginTop: MarginXs
      }}>
                <a onClick={toggleExpand} style={{
          cursor: 'pointer',
          textDecoration: 'underline',
          color: ColorText,
          fontSize: FontSize
        }} onMouseDown={e => e.preventDefault()}>
                  Hide details
                </a>
              </div>
            </div> : null} type="error" showIcon icon={<CloseCircleFilled style={{
      fontSize: MpIconSizeSm
    }} />} style={{
      marginBottom: 0,
      width: '600px'
    }} afterClose={() => {}} onClose={() => {}} />;
  }
}`},(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source)})});var K,L,N;h.parameters=s(e({},h.parameters),{docs:s(e({},(K=h.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    showIcon: true,
    icon: <ExclamationCircleFilled style={{
      fontSize: MpIconSizeSm
    }} />,
    closable: true,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source)})});const ie=["Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithTitle","ErrorWithExpandCollapse","WithCloseButton"],ue=Object.freeze(Object.defineProperty({__proto__:null,Error:m,ErrorWithExpandCollapse:u,ErrorWithTitle:g,ErrorWithoutIcon:d,Info:i,InfoWithoutIcon:p,Success:c,Warning:l,WithCloseButton:h,__namedExportsOrder:ie,default:ae},Symbol.toStringTag,{value:"Module"}));export{ue as A,m as E,p as I,c as S,l as W,h as a,u as b};
