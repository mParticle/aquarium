var mr=Object.defineProperty,pr=Object.defineProperties;var dr=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var ur=Object.prototype.hasOwnProperty,lr=Object.prototype.propertyIsEnumerable;var x=(a,s,o)=>s in a?mr(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,r=(a,s)=>{for(var o in s||(s={}))ur.call(s,o)&&x(a,o,s[o]);if(E)for(var o of E(s))lr.call(s,o)&&x(a,o,s[o]);return a},e=(a,s)=>pr(a,dr(s));import{u as gr}from"./NavigationItemsService-Bp3UoOk-.js";import"./jsx-runtime-CVnACwZl.js";import"./index-3OP4wdng.js";import"./ErrorStateIcon-BNR7v0T1.js";import"./style-B9rgtfuS.js";import"./WarningFilled-BnDVOXXO.js";import"./extends-CF3RwP-h.js";import"./AntdIcon-Dzuf-ABm.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-CAdhMOb6.js";import"./WarningStateIcon-Cj4q4kYq.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";const Dr={title:"Components/Not Prod Ready/Data Entry/InputNumber",component:gr,args:{addonAfter:void 0,addonBefore:void 0,autoFocus:!1,bordered:!0,changeOnBlur:!0,controls:!0,decimalSeparator:".",placeholder:"Enter a number",defaultValue:void 0,disabled:!1,formatter:void 0,keyboard:!0,max:Number.MAX_SAFE_INTEGER,min:Number.MIN_SAFE_INTEGER,parser:void 0,precision:void 0,readOnly:!1,status:void 0,prefix:void 0,size:"middle",step:1,stringMode:!1,value:void 0,onChange:a=>{alert("InputNumber changed: "+a)},onPressEnter:a=>{console.log("Enter key pressed:",a)},onStep:(a,s)=>{console.log("Step:",a,s)}},argTypes:{size:{control:"select",options:["large","middle","small"]},status:{control:"select",options:["error","warning"]}}},t={},n={args:{size:"small"}},c={args:{size:"large"}},i={args:{status:"warning"}},m={args:{status:"error"}},p={args:{disabled:!0,value:42}},d={args:{readOnly:!0,value:123}},u={args:{prefix:"$"}},l={args:{stringMode:!0,value:"42.50"}},g={args:{controls:!0,precision:2}},S={args:{decimalSeparator:","}},f={args:{formatter:(a,s)=>`$${a}`}},v={args:{min:10,max:100}},b={args:{step:.5}};var y,M,N;t.parameters=e(r({},t.parameters),{docs:e(r({},(y=t.parameters)==null?void 0:y.docs),{source:r({originalSource:"{}"},(N=(M=t.parameters)==null?void 0:M.docs)==null?void 0:N.source)})});var h,C,P;n.parameters=e(r({},n.parameters),{docs:e(r({},(h=n.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    size: 'small'
  }
}`},(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source)})});var $,O,z;c.parameters=e(r({},c.parameters),{docs:e(r({},($=c.parameters)==null?void 0:$.docs),{source:r({originalSource:`{
  args: {
    size: 'large'
  }
}`},(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source)})});var A,I,W;i.parameters=e(r({},i.parameters),{docs:e(r({},(A=i.parameters)==null?void 0:A.docs),{source:r({originalSource:`{
  args: {
    status: 'warning'
  }
}`},(W=(I=i.parameters)==null?void 0:I.docs)==null?void 0:W.source)})});var _,D,F;m.parameters=e(r({},m.parameters),{docs:e(r({},(_=m.parameters)==null?void 0:_.docs),{source:r({originalSource:`{
  args: {
    status: 'error'
  }
}`},(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source)})});var R,w,T;p.parameters=e(r({},p.parameters),{docs:e(r({},(R=p.parameters)==null?void 0:R.docs),{source:r({originalSource:`{
  args: {
    disabled: true,
    value: 42
  }
}`},(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source)})});var k,B,G;d.parameters=e(r({},d.parameters),{docs:e(r({},(k=d.parameters)==null?void 0:k.docs),{source:r({originalSource:`{
  args: {
    readOnly: true,
    value: 123
  }
}`},(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source)})});var L,V,X;u.parameters=e(r({},u.parameters),{docs:e(r({},(L=u.parameters)==null?void 0:L.docs),{source:r({originalSource:`{
  args: {
    prefix: '$'
  }
}`},(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var j,q,H;l.parameters=e(r({},l.parameters),{docs:e(r({},(j=l.parameters)==null?void 0:j.docs),{source:r({originalSource:`{
  args: {
    stringMode: true,
    value: '42.50'
  }
}`},(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source)})});var J,K,Q;g.parameters=e(r({},g.parameters),{docs:e(r({},(J=g.parameters)==null?void 0:J.docs),{source:r({originalSource:`{
  args: {
    controls: true,
    precision: 2
  }
}`},(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var U,Y,Z;S.parameters=e(r({},S.parameters),{docs:e(r({},(U=S.parameters)==null?void 0:U.docs),{source:r({originalSource:`{
  args: {
    decimalSeparator: ','
  }
}`},(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var rr,er,ar;f.parameters=e(r({},f.parameters),{docs:e(r({},(rr=f.parameters)==null?void 0:rr.docs),{source:r({originalSource:`{
  args: {
    formatter: (value, info) => \`$\${value}\`
  }
}`},(ar=(er=f.parameters)==null?void 0:er.docs)==null?void 0:ar.source)})});var sr,or,tr;v.parameters=e(r({},v.parameters),{docs:e(r({},(sr=v.parameters)==null?void 0:sr.docs),{source:r({originalSource:`{
  args: {
    min: 10,
    max: 100
  }
}`},(tr=(or=v.parameters)==null?void 0:or.docs)==null?void 0:tr.source)})});var nr,cr,ir;b.parameters=e(r({},b.parameters),{docs:e(r({},(nr=b.parameters)==null?void 0:nr.docs),{source:r({originalSource:`{
  args: {
    step: 0.5
  }
}`},(ir=(cr=b.parameters)==null?void 0:cr.docs)==null?void 0:ir.source)})});const Fr=["Primary","Small","Large","Warning","Error","Disabled","ReadOnly","$Prefix","StringMode","WithControlsAndPrecision","DecimalSeparatorComma","WithFormatter","MinMaxConstraints","Step05"];export{u as $Prefix,S as DecimalSeparatorComma,p as Disabled,m as Error,c as Large,v as MinMaxConstraints,t as Primary,d as ReadOnly,n as Small,b as Step05,l as StringMode,i as Warning,g as WithControlsAndPrecision,f as WithFormatter,Fr as __namedExportsOrder,Dr as default};
