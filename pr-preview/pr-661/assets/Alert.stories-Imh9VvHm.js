var L=Object.defineProperty,N=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(o,n,r)=>n in o?L(o,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[n]=r,e=(o,n)=>{for(var r in n||(n={}))U.call(n,r)&&x(o,r,n[r]);if(y)for(var r of y(n))Y.call(n,r)&&x(o,r,n[r]);return o},s=(o,n)=>N(o,Q(n));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{r as Z}from"./index-3OP4wdng.js";import{y as q,z as $,G as J,H as K}from"./NavigationItemsService-YeOdRdLJ.js";import{f as a,F as h,l as S,m as ee}from"./style-C11LJCJh.js";import{C as se}from"./SuccessStateIcon-BWqCdJgP.js";const oe={title:"Components/Feedback/Alert",component:q,args:{banner:!1,showIcon:!1,type:"info",onClose:o=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},i={args:{type:"info",message:"This is an informational message.",showIcon:!0,icon:t.jsx($,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},c={args:{type:"success",message:"This is a success message.",showIcon:!0,icon:t.jsx(se,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},l={args:{message:"This is a warning message.",type:"warning",showIcon:!0,icon:t.jsx(J,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},m={args:{message:"This is an error message.",type:"error",showIcon:!0,icon:t.jsx(K,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"}}},p={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"600px"}}},d={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"600px"}}},g={render:()=>{const[o,n]=Z.useState(!1),r=()=>{n(!o)};return t.jsx(q,{message:t.jsxs("span",{style:{fontSize:h},children:["This is an error message."," ",!o&&t.jsx("a",{onClick:r,style:{cursor:"pointer",textDecoration:"underline",color:S},onMouseDown:f=>f.preventDefault(),children:"View details"})]}),description:o?t.jsxs("div",{style:{fontSize:h},children:[t.jsx("div",{style:{fontSize:h},children:"Error details go here"}),t.jsx("div",{style:{marginTop:ee},children:t.jsx("a",{onClick:r,style:{cursor:"pointer",textDecoration:"underline",color:S,fontSize:h},onMouseDown:f=>f.preventDefault(),children:"Hide details"})})]}):null,type:"error",showIcon:!0,icon:t.jsx(K,{style:{fontSize:a}}),style:{marginBottom:0,width:"600px"},afterClose:()=>{},onClose:()=>{}})}},u={args:{type:"warning",message:"This is a warning message.",showIcon:!0,icon:t.jsx(J,{style:{fontSize:a}}),closable:!0,style:{marginBottom:0,width:"600px"}}};var w,I,C;i.parameters=s(e({},i.parameters),{docs:s(e({},(w=i.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
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
}`},(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source)})});var z,E,T;c.parameters=s(e({},c.parameters),{docs:s(e({},(z=c.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
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
}`},(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source)})});var B,j,F;l.parameters=s(e({},l.parameters),{docs:s(e({},(B=l.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
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
}`},(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source)})});var v,M,D;m.parameters=s(e({},m.parameters),{docs:s(e({},(v=m.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
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
}`},(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source)})});var W,A,b;p.parameters=s(e({},p.parameters),{docs:s(e({},(W=p.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(b=(A=p.parameters)==null?void 0:A.docs)==null?void 0:b.source)})});var k,_,O;d.parameters=s(e({},d.parameters),{docs:s(e({},(k=d.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '600px'
    }
  }
}`},(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source)})});var H,V,X;g.parameters=s(e({},g.parameters),{docs:s(e({},(H=g.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
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
}`},(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var G,P,R;u.parameters=s(e({},u.parameters),{docs:s(e({},(G=u.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
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
}`},(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source)})});const ne=["Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton"],me=Object.freeze(Object.defineProperty({__proto__:null,Error:m,ErrorWithExpandCollapse:g,ErrorWithoutIcon:d,Info:i,InfoWithoutIcon:p,Success:c,Warning:l,WithCloseButton:u,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{me as A,m as E,p as I,c as S,l as W,u as a,g as b};
