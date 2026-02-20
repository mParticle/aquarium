var Lr=Object.defineProperty,Dr=Object.defineProperties;var Er=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var Ir=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var L=(o,a,s)=>a in o?Lr(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,r=(o,a)=>{for(var s in a||(a={}))Ir.call(a,s)&&L(o,s,a[s]);if(z)for(var s of z(a))Pr.call(a,s)&&L(o,s,a[s]);return o},e=(o,a)=>Dr(o,Er(a));var D=(o,a,s)=>new Promise((Cr,v)=>{var vr=t=>{try{w(s.next(t))}catch(B){v(B)}},zr=t=>{try{w(s.throw(t))}catch(B){v(B)}},w=t=>t.done?Cr(t.value):Promise.resolve(t.value).then(vr,zr);w((s=s.apply(o,a)).next())});import{j as C}from"./jsx-runtime-C9TrHvcC.js";import{c as Rr,I as Br}from"./UnauthorizedTooltip-FdjMmKil.js";import{u as Wr}from"./index-1POLsKUh.js";import"./ErrorStateIcon-CynPGnEf.js";import"./SuccessStateIcon-CR1tLlGy.js";import"./WarningStateIcon-Dl7G0kQK.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-CRGKMnX3.js";import"./WarningFilled-D6ijQqgK.js";const re={title:"Components/Not Prod Ready/General/Button",component:o=>{var a;return C.jsx(Rr,e(r({},o),{children:(a=o.children)!=null?a:"Button Label"}))},args:{block:!1,danger:!1,disabled:!1,ghost:!1,href:void 0,htmlType:"button",icon:void 0,loading:!1,shape:"default",size:"middle",target:void 0,type:"primary",onClick:void 0},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},n={play:o=>D(void 0,null,function*(){const a=o.canvasElement.querySelector("button");if(a)yield Wr.click(a);else throw new Error("Button not found")})},c={args:{type:"dashed"}},i={args:{type:"text"}},m={args:{type:"link"}},p={args:{danger:!0}},d={args:{disabled:!0}},l={args:{ghost:!0}},u={args:{block:!0}},g={args:{type:"default",icon:C.jsx(Br,{name:"mpLogo",size:"sm",color:"default"}),variant:"with-new-icon"}},h={args:{icon:C.jsx(Br,{name:"dataPlatform",size:"xl"}),children:" ",type:"default",shape:"round",variant:"with-new-icon"}},f={args:{loading:!0}},y={args:{shape:"circle"}},S={args:{shape:"round"}},k={args:{size:"large"}},b={args:{size:"small"}},x={args:{onClick:o=>{alert("Button Clicked")}}};var E,I,P;n.parameters=e(r({},n.parameters),{docs:e(r({},(E=n.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  play: async context => {
    const button = context.canvasElement.querySelector('button');
    if (button) {
      await userEvent.click(button); // Click the button
    } else {
      throw new Error('Button not found');
    }
  }
}`},(P=(I=n.parameters)==null?void 0:I.docs)==null?void 0:P.source)})});var R,W,j;c.parameters=e(r({},c.parameters),{docs:e(r({},(R=c.parameters)==null?void 0:R.docs),{source:r({originalSource:`{
  args: {
    type: 'dashed'
  }
}`},(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source)})});var T,G,q;i.parameters=e(r({},i.parameters),{docs:e(r({},(T=i.parameters)==null?void 0:T.docs),{source:r({originalSource:`{
  args: {
    type: 'text'
  }
}`},(q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:q.source)})});var M,_,N;m.parameters=e(r({},m.parameters),{docs:e(r({},(M=m.parameters)==null?void 0:M.docs),{source:r({originalSource:`{
  args: {
    type: 'link'
  }
}`},(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source)})});var O,A,F;p.parameters=e(r({},p.parameters),{docs:e(r({},(O=p.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    danger: true
  }
}`},(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source)})});var H,J,K;d.parameters=e(r({},d.parameters),{docs:e(r({},(H=d.parameters)==null?void 0:H.docs),{source:r({originalSource:`{
  args: {
    disabled: true
  }
}`},(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,U,V;l.parameters=e(r({},l.parameters),{docs:e(r({},(Q=l.parameters)==null?void 0:Q.docs),{source:r({originalSource:`{
  args: {
    ghost: true
  }
}`},(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var X,Y,Z;u.parameters=e(r({},u.parameters),{docs:e(r({},(X=u.parameters)==null?void 0:X.docs),{source:r({originalSource:`{
  args: {
    block: true
  }
}`},(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var $,rr,er;g.parameters=e(r({},g.parameters),{docs:e(r({},($=g.parameters)==null?void 0:$.docs),{source:r({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon name="mpLogo" size="sm" color="default" />,
    variant: 'with-new-icon'
  }
}`},(er=(rr=g.parameters)==null?void 0:rr.docs)==null?void 0:er.source)})});var ar,or,sr;h.parameters=e(r({},h.parameters),{docs:e(r({},(ar=h.parameters)==null?void 0:ar.docs),{source:r({originalSource:`{
  args: {
    icon: <Icon name="dataPlatform" size="xl" />,
    children: ' ',
    type: 'default',
    shape: 'round',
    variant: 'with-new-icon'
  }
}`},(sr=(or=h.parameters)==null?void 0:or.docs)==null?void 0:sr.source)})});var tr,nr,cr;f.parameters=e(r({},f.parameters),{docs:e(r({},(tr=f.parameters)==null?void 0:tr.docs),{source:r({originalSource:`{
  args: {
    loading: true
  }
}`},(cr=(nr=f.parameters)==null?void 0:nr.docs)==null?void 0:cr.source)})});var ir,mr,pr;y.parameters=e(r({},y.parameters),{docs:e(r({},(ir=y.parameters)==null?void 0:ir.docs),{source:r({originalSource:`{
  args: {
    shape: 'circle'
  }
}`},(pr=(mr=y.parameters)==null?void 0:mr.docs)==null?void 0:pr.source)})});var dr,lr,ur;S.parameters=e(r({},S.parameters),{docs:e(r({},(dr=S.parameters)==null?void 0:dr.docs),{source:r({originalSource:`{
  args: {
    shape: 'round'
  }
}`},(ur=(lr=S.parameters)==null?void 0:lr.docs)==null?void 0:ur.source)})});var gr,hr,fr;k.parameters=e(r({},k.parameters),{docs:e(r({},(gr=k.parameters)==null?void 0:gr.docs),{source:r({originalSource:`{
  args: {
    size: 'large'
  }
}`},(fr=(hr=k.parameters)==null?void 0:hr.docs)==null?void 0:fr.source)})});var yr,Sr,kr;b.parameters=e(r({},b.parameters),{docs:e(r({},(yr=b.parameters)==null?void 0:yr.docs),{source:r({originalSource:`{
  args: {
    size: 'small'
  }
}`},(kr=(Sr=b.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source)})});var br,xr,wr;x.parameters=e(r({},x.parameters),{docs:e(r({},(br=x.parameters)==null?void 0:br.docs),{source:r({originalSource:`{
  args: {
    onClick: e => {
      alert('Button Clicked');
    }
  }
}`},(wr=(xr=x.parameters)==null?void 0:xr.docs)==null?void 0:wr.source)})});const ee=["Primary","Dashed","Text","Link","WithDanger","Disabled","Ghost","Block","WithIconDefaultColorSM","RoundIconButton","Loading","Circle","Round","Large","Small","PrimaryButtonWithClick"];export{u as Block,y as Circle,c as Dashed,d as Disabled,l as Ghost,k as Large,m as Link,f as Loading,n as Primary,x as PrimaryButtonWithClick,S as Round,h as RoundIconButton,b as Small,i as Text,p as WithDanger,g as WithIconDefaultColorSM,ee as __namedExportsOrder,re as default};
