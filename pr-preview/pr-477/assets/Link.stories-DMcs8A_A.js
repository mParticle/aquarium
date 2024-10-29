var xe=Object.defineProperty,Ae=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var j=(n,o,t)=>o in n?xe(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,e=(n,o)=>{for(var t in o||(o={}))fe.call(o,t)&&j(n,t,o[t]);if(A)for(var t of A(o))Ce.call(o,t)&&j(n,t,o[t]);return n},r=(n,o)=>Ae(n,je(o));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{d as a,b as Ee}from"./GlobalNavigation-OEstHWb2.js";import"./_baseClone-DBzvlRjn.js";import{E as we}from"./ExampleStory-CUfy9v5U.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const Be={title:"Components/General/Link",component:n=>s.jsx(a.Link,r(e({},n),{children:"Example Link"})),args:{code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,keyboard:!1,mark:!1,strong:!1,italic:!1,type:void 0,underline:!1,onClick:n=>{console.log("Link Clicked")}},argTypes:{type:{control:"select",options:["secondary","success","warning","danger"]}}},i={},c={args:{code:!0}},p={args:{copyable:!0}},d={args:{delete:!0}},g={args:{disabled:!0}},l={args:{editable:!0}},m={args:{keyboard:!0}},u={args:{mark:!0}},y={args:{strong:!0}},k={args:{italic:!0}},L={args:{type:"success"}},h={args:{type:"secondary"}},D={args:{type:"warning"}},b={args:{type:"danger"}},S={args:{underline:!0}},T={args:{onClick:n=>{alert("Custom Click Handler")}}},x={render:()=>s.jsx(we,{title:s.jsx(s.Fragment,{children:" "}),children:s.jsxs(Ee,{direction:"vertical",children:[s.jsx(a.Link,{children:"Ant Design (default)"}),s.jsx(a.Link,{type:"secondary",children:"Ant Design (secondary)"}),s.jsx(a.Link,{type:"success",children:"Ant Design (success)"}),s.jsx(a.Link,{type:"warning",children:"Ant Design (warning)"}),s.jsx(a.Link,{type:"danger",children:"Ant Design (danger)"}),s.jsx(a.Link,{disabled:!0,children:"Ant Design (disabled)"}),s.jsx(a.Link,{mark:!0,children:"Ant Design (mark)"}),s.jsx(a.Link,{code:!0,children:"Ant Design (code)"}),s.jsx(a.Link,{keyboard:!0,children:"Ant Design (keyboard)"}),s.jsx(a.Link,{underline:!0,children:"Ant Design (underline)"}),s.jsx(a.Link,{delete:!0,children:"Ant Design (delete)"}),s.jsx(a.Link,{strong:!0,children:"Ant Design (strong)"}),s.jsx(a.Link,{italic:!0,children:"Ant Design (italic)"})]})})};var f,C,E;i.parameters=r(e({},i.parameters),{docs:r(e({},(f=i.parameters)==null?void 0:f.docs),{source:e({originalSource:"{}"},(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source)})});var w,v,O;c.parameters=r(e({},c.parameters),{docs:r(e({},(w=c.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  args: {
    code: true
  }
}`},(O=(v=c.parameters)==null?void 0:v.docs)==null?void 0:O.source)})});var H,I,K;p.parameters=r(e({},p.parameters),{docs:r(e({},(H=p.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    copyable: true
  }
}`},(K=(I=p.parameters)==null?void 0:I.docs)==null?void 0:K.source)})});var M,P,U;d.parameters=r(e({},d.parameters),{docs:r(e({},(M=d.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    delete: true
  }
}`},(U=(P=d.parameters)==null?void 0:P.docs)==null?void 0:U.source)})});var W,_,F;g.parameters=r(e({},g.parameters),{docs:r(e({},(W=g.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source)})});var G,R,q;l.parameters=r(e({},l.parameters),{docs:r(e({},(G=l.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    editable: true
  }
}`},(q=(R=l.parameters)==null?void 0:R.docs)==null?void 0:q.source)})});var z,B,J;m.parameters=r(e({},m.parameters),{docs:r(e({},(z=m.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    keyboard: true
  }
}`},(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source)})});var N,Q,V;u.parameters=r(e({},u.parameters),{docs:r(e({},(N=u.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    mark: true
  }
}`},(V=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});var X,Y,Z;y.parameters=r(e({},y.parameters),{docs:r(e({},(X=y.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    strong: true
  }
}`},(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var $,ee,re;k.parameters=r(e({},k.parameters),{docs:r(e({},($=k.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    italic: true
  }
}`},(re=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});var se,ae,ne;L.parameters=r(e({},L.parameters),{docs:r(e({},(se=L.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    type: 'success'
  }
}`},(ne=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:ne.source)})});var oe,te,ie;h.parameters=r(e({},h.parameters),{docs:r(e({},(oe=h.parameters)==null?void 0:oe.docs),{source:e({originalSource:`{
  args: {
    type: 'secondary'
  }
}`},(ie=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ie.source)})});var ce,pe,de;D.parameters=r(e({},D.parameters),{docs:r(e({},(ce=D.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(de=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:de.source)})});var ge,le,me;b.parameters=r(e({},b.parameters),{docs:r(e({},(ge=b.parameters)==null?void 0:ge.docs),{source:e({originalSource:`{
  args: {
    type: 'danger'
  }
}`},(me=(le=b.parameters)==null?void 0:le.docs)==null?void 0:me.source)})});var ue,ye,ke;S.parameters=r(e({},S.parameters),{docs:r(e({},(ue=S.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  args: {
    underline: true
  }
}`},(ke=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:ke.source)})});var Le,he,De;T.parameters=r(e({},T.parameters),{docs:r(e({},(Le=T.parameters)==null?void 0:Le.docs),{source:e({originalSource:`{
  args: {
    onClick: event => {
      alert('Custom Click Handler');
    }
  }
}`},(De=(he=T.parameters)==null?void 0:he.docs)==null?void 0:De.source)})});var be,Se,Te;x.parameters=r(e({},x.parameters),{docs:r(e({},(be=x.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Link>Ant Design (default)</Typography.Link>
          <Typography.Link type="secondary">Ant Design (secondary)</Typography.Link>
          <Typography.Link type="success">Ant Design (success)</Typography.Link>
          <Typography.Link type="warning">Ant Design (warning)</Typography.Link>
          <Typography.Link type="danger">Ant Design (danger)</Typography.Link>
          <Typography.Link disabled>Ant Design (disabled)</Typography.Link>
          <Typography.Link mark>Ant Design (mark)</Typography.Link>
          <Typography.Link code>Ant Design (code)</Typography.Link>
          <Typography.Link keyboard>Ant Design (keyboard)</Typography.Link>
          <Typography.Link underline>Ant Design (underline)</Typography.Link>
          <Typography.Link delete>Ant Design (delete)</Typography.Link>
          <Typography.Link strong>Ant Design (strong)</Typography.Link>
          <Typography.Link italic>Ant Design (italic)</Typography.Link>
        </Space>
      </ExampleStory>;
  }
}`},(Te=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:Te.source)})});const Je=["Primary","Code","Copyable","Deleted","Disabled","Editable","Keyboard","Marked","Strong","Italic","Success","Secondary","Warning","Danger","Underline","CustomOnClick","ExampleLinks"];export{c as Code,p as Copyable,T as CustomOnClick,b as Danger,d as Deleted,g as Disabled,l as Editable,x as ExampleLinks,k as Italic,m as Keyboard,u as Marked,i as Primary,h as Secondary,y as Strong,L as Success,S as Underline,D as Warning,Je as __namedExportsOrder,Be as default};
