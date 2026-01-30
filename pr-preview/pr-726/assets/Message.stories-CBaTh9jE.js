var B=Object.defineProperty,W=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var m=(e,r,o)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,n=(e,r)=>{for(var o in r||(r={}))M.call(r,o)&&m(e,o,r[o]);if(p)for(var o of p(r))R.call(r,o)&&m(e,o,r[o]);return e},a=(e,r)=>W(e,w(r));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{W as l,c as u,K as z,F as L,b as g}from"./UnauthorizedTooltip-DSQp-wln.js";import{B as h,u as _,t as P}from"./style-BbwCNso5.js";const N={title:"Components/Feedback/Message",component:l,args:{children:s.jsx(u,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},t={render:()=>s.jsx("div",{style:{padding:"1px",background:"linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.12) 100%)",borderRadius:h,width:"100%"},children:s.jsx(z,{message:s.jsxs(L,{align:"center",gap:P,children:[s.jsx(g.Text,{size:"xl",children:"💡"}),s.jsxs(g.Text,{size:"base",children:["Use an"," ",s.jsx(g.Link,{href:"?path=/docs/components-feedback-alert--docs",underline:!0,children:"Alert"})," ","if the message is critical and needs to be persistent until the user dismisses or acts on it."]})]}),showIcon:!1,type:"info",style:{backgroundColor:_,border:"none",borderRadius:h,width:"100%",marginBottom:0}})})},i={name:"Action Success",render:()=>{const e=()=>{l.success({content:"Action completed successfully",duration:3})};return s.jsx(u,{onClick:e,children:"Action Success"})}},c={name:"Action Failure",render:()=>{const e=()=>{l.error({content:"Action failed. Please try again.",duration:3})};return s.jsx(u,{onClick:e,children:"Action Failure"})}},d={name:"Action Warning",render:()=>{const e=()=>{l.warning({content:"Please review your changes before proceeding.",duration:3})};return s.jsx(u,{onClick:e,children:"Action Warning"})}};var y,b,f;t.parameters=a(n({},t.parameters),{docs:a(n({},(y=t.parameters)==null?void 0:y.docs),{source:n({originalSource:`{
  render: () => {
    return <div style={{
      padding: '1px',
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.12) 100%)',
      borderRadius: BorderRadiusLg,
      width: '100%'
    }}>
        <Alert message={<Flex align="center" gap={SizeXs}>
              <Typography.Text size="xl">💡</Typography.Text>
              <Typography.Text size="base">
                Use an{' '}
                <Typography.Link href="?path=/docs/components-feedback-alert--docs" underline>
                  Alert
                </Typography.Link>{' '}
                if the message is critical and needs to be persistent until the user dismisses or acts on it.
              </Typography.Text>
            </Flex>} showIcon={false} type="info" style={{
        backgroundColor: ColorWhite,
        border: 'none',
        borderRadius: BorderRadiusLg,
        width: '100%',
        marginBottom: 0
      }} />
      </div>;
  }
}`},(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source)})});var x,S,k;i.parameters=a(n({},i.parameters),{docs:a(n({},(x=i.parameters)==null?void 0:x.docs),{source:n({originalSource:`{
  name: 'Action Success',
  render: () => {
    const handleSuccess = () => {
      void Message.success({
        content: 'Action completed successfully',
        duration: 3
      });
    };
    return <Button onClick={handleSuccess}>Action Success</Button>;
  }
}`},(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var A,C,v;c.parameters=a(n({},c.parameters),{docs:a(n({},(A=c.parameters)==null?void 0:A.docs),{source:n({originalSource:`{
  name: 'Action Failure',
  render: () => {
    const handleFailure = () => {
      void Message.error({
        content: 'Action failed. Please try again.',
        duration: 3
      });
    };
    return <Button onClick={handleFailure}>Action Failure</Button>;
  }
}`},(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source)})});var j,F,T;d.parameters=a(n({},d.parameters),{docs:a(n({},(j=d.parameters)==null?void 0:j.docs),{source:n({originalSource:`{
  name: 'Action Warning',
  render: () => {
    const handleWarning = () => {
      void Message.warning({
        content: 'Please review your changes before proceeding.',
        duration: 3
      });
    };
    return <Button onClick={handleWarning}>Action Warning</Button>;
  }
}`},(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source)})});const O=["StorybookNote","ConfirmationSuccess","ConfirmationFailure","ConfirmationWarning"],K=Object.freeze(Object.defineProperty({__proto__:null,ConfirmationFailure:c,ConfirmationSuccess:i,ConfirmationWarning:d,StorybookNote:t,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{i as C,K as M,t as S,c as a,d as b};
