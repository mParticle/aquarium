var mr=Object.defineProperty,dr=Object.defineProperties;var pr=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var ur=Object.prototype.hasOwnProperty,lr=Object.prototype.propertyIsEnumerable;var y=(a,s,o)=>s in a?mr(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,r=(a,s)=>{for(var o in s||(s={}))ur.call(s,o)&&y(a,o,s[o]);if(x)for(var o of x(s))lr.call(s,o)&&y(a,o,s[o]);return a},e=(a,s)=>dr(a,pr(s));import{x as gr}from"./GlobalNavigation-O2-Vk2ha.js";const Sr={title:"Components/Data Entry/InputNumber",component:gr,args:{addonAfter:void 0,addonBefore:void 0,autoFocus:!1,bordered:!0,changeOnBlur:!0,controls:!0,decimalSeparator:".",placeholder:"Enter a number",defaultValue:void 0,disabled:!1,formatter:void 0,keyboard:!0,max:Number.MAX_SAFE_INTEGER,min:Number.MIN_SAFE_INTEGER,parser:void 0,precision:void 0,readOnly:!1,status:void 0,prefix:void 0,size:"middle",step:1,stringMode:!1,value:void 0,onChange:a=>{alert("InputNumber changed: "+a)},onPressEnter:a=>{console.log("Enter key pressed:",a)},onStep:(a,s)=>{console.log("Step:",a,s)}},argTypes:{size:{control:"select",options:["large","middle","small"]},status:{control:"select",options:["error","warning"]}}},t={},n={args:{size:"small"}},c={args:{size:"large"}},i={args:{status:"warning"}},m={args:{status:"error"}},d={args:{disabled:!0,value:42}},p={args:{readOnly:!0,value:123}},u={args:{prefix:"$"}},l={args:{stringMode:!0,value:"42.50"}},g={args:{controls:!0,precision:2}},S={args:{decimalSeparator:","}},f={args:{formatter:(a,s)=>`$${a}`}},v={args:{min:10,max:100}},b={args:{step:.5}};var E,M,_;t.parameters=e(r({},t.parameters),{docs:e(r({},(E=t.parameters)==null?void 0:E.docs),{source:r({originalSource:"{}"},(_=(M=t.parameters)==null?void 0:M.docs)==null?void 0:_.source)})});var N,O,h;n.parameters=e(r({},n.parameters),{docs:e(r({},(N=n.parameters)==null?void 0:N.docs),{source:r({originalSource:`{
  args: {
    size: 'small'
  }
}`},(h=(O=n.parameters)==null?void 0:O.docs)==null?void 0:h.source)})});var C,I,P;c.parameters=e(r({},c.parameters),{docs:e(r({},(C=c.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    size: 'large'
  }
}`},(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source)})});var $,z,A;i.parameters=e(r({},i.parameters),{docs:e(r({},($=i.parameters)==null?void 0:$.docs),{source:r({originalSource:`{
  args: {
    status: 'warning'
  }
}`},(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source)})});var W,D,F;m.parameters=e(r({},m.parameters),{docs:e(r({},(W=m.parameters)==null?void 0:W.docs),{source:r({originalSource:`{
  args: {
    status: 'error'
  }
}`},(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source)})});var R,T,w;d.parameters=e(r({},d.parameters),{docs:e(r({},(R=d.parameters)==null?void 0:R.docs),{source:r({originalSource:`{
  args: {
    disabled: true,
    value: 42
  }
}`},(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source)})});var j,k,B;p.parameters=e(r({},p.parameters),{docs:e(r({},(j=p.parameters)==null?void 0:j.docs),{source:r({originalSource:`{
  args: {
    readOnly: true,
    value: 123
  }
}`},(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source)})});var G,L,V;u.parameters=e(r({},u.parameters),{docs:e(r({},(G=u.parameters)==null?void 0:G.docs),{source:r({originalSource:`{
  args: {
    prefix: '$'
  }
}`},(V=(L=u.parameters)==null?void 0:L.docs)==null?void 0:V.source)})});var X,q,H;l.parameters=e(r({},l.parameters),{docs:e(r({},(X=l.parameters)==null?void 0:X.docs),{source:r({originalSource:`{
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
}`},(ir=(cr=b.parameters)==null?void 0:cr.docs)==null?void 0:ir.source)})});const fr=["Primary","Small","Large","Warning","Error","Disabled","ReadOnly","$Prefix","StringMode","WithControlsAndPrecision","DecimalSeparatorComma","WithFormatter","MinMaxConstraints","Step05"],xr=Object.freeze(Object.defineProperty({__proto__:null,$Prefix:u,DecimalSeparatorComma:S,Disabled:d,Error:m,Large:c,MinMaxConstraints:v,Primary:t,ReadOnly:p,Small:n,Step05:b,StringMode:l,Warning:i,WithControlsAndPrecision:g,WithFormatter:f,__namedExportsOrder:fr,default:Sr},Symbol.toStringTag,{value:"Module"}));export{xr as I,Sr as m};
