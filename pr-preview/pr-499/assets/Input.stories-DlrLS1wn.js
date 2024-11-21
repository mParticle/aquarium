var Se=Object.defineProperty,be=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var I=(s,a,t)=>a in s?Se(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,e=(s,a)=>{for(var t in a||(a={}))ve.call(a,t)&&I(s,t,a[t]);if(j)for(var t of j(a))Ee.call(a,t)&&I(s,t,a[t]);return s},r=(s,a)=>be(s,ye(a));var W=(s,a,t)=>new Promise((n,v)=>{var E=c=>{try{w(t.next(c))}catch(C){v(C)}},xe=c=>{try{w(t.throw(c))}catch(C){v(C)}},w=c=>c.done?n(c.value):Promise.resolve(c.value).then(E,xe);w((t=t.apply(s,a)).next())});import{j as o}from"./jsx-runtime-BcCOBRXo.js";import{u as he,b as F,c as B}from"./GlobalNavigation-C2FIOLeq.js";import"./_baseClone-DBzvlRjn.js";import{E as we}from"./ExampleStory-D5cAudWt.js";import{r as Ce}from"./index-CNk6hRaE.js";import{e as A,u as Be}from"./index-BU0ZtLqn.js";const Ae={title:"Components/Data Entry/Input",component:he,args:{placeholder:"Input Placeholder",addonAfter:void 0,addonBefore:void 0,allowClear:!1,bordered:!0,classNames:{},count:void 0,defaultValue:"",disabled:!1,id:void 0,maxLength:void 0,prefix:void 0,showCount:!1,status:void 0,styles:{},size:"middle",suffix:void 0,type:"text",value:"",onChange:s=>{console.log("Input changed: "+s.target.value)},onPressEnter:s=>{console.log("Enter key pressed: "+String(s))}},argTypes:{status:{control:"select",options:["warning","error"]},size:{control:"select",options:["small","medium","large"]}}},l={args:{status:"error"}},u={args:{type:"textarea"}},i={args:{size:"large"}},p={args:{size:"middle"}},d={args:{size:"small"}},m={},g={args:{addonBefore:"https://",placeholder:"Enter URL"}},f={args:{addonAfter:".com",placeholder:"Domain"}},h={args:{allowClear:!0,placeholder:"Clearable Input"}},x={args:{disabled:!0}},S={args:{maxLength:10,placeholder:"Max 10 characters"}},b={args:{prefix:"@",suffix:".com",placeholder:"Email"}},y={args:{value:"Test value"},render:(s,a)=>{const t=Ce.useRef(null),n=(v="start")=>{var E;(E=t.current)==null||E.focus({cursor:v})};return o.jsx(we,{title:a.name,children:o.jsxs(F,{direction:"vertical",style:{width:"100%"},children:[o.jsxs(F,{wrap:!0,children:[o.jsx(B,{onClick:()=>{n("start")},children:"Focus at start"}),o.jsx(B,{onClick:()=>{n("end")},children:"Focus at last"}),o.jsx(B,{onClick:()=>{n("all")},children:"Focus to select all"})]}),o.jsx("br",{}),o.jsx(he,r(e({},s),{defaultValue:"Welcome to the Aquarium",ref:t}))]})})},play:s=>W(void 0,null,function*(){const a=s.canvasElement.querySelector("input");yield A(a).toBeInTheDocument();const t=s.canvasElement.querySelectorAll("button");yield A(t.length).toBe(3);for(const n of t)a==null||a.blur(),yield Be.click(n),yield A(a).toHaveFocus(),a==null||a.blur()})};var R,k,z;l.parameters=r(e({},l.parameters),{docs:r(e({},(R=l.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    status: 'error'
  }
}`},(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source)})});var D,L,M;u.parameters=r(e({},u.parameters),{docs:r(e({},(D=u.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    type: 'textarea'
  }
}`},(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source)})});var T,P,q;i.parameters=r(e({},i.parameters),{docs:r(e({},(T=i.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(q=(P=i.parameters)==null?void 0:P.docs)==null?void 0:q.source)})});var _,H,O;p.parameters=r(e({},p.parameters),{docs:r(e({},(_=p.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    size: 'middle'
  }
}`},(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source)})});var V,U,N;d.parameters=r(e({},d.parameters),{docs:r(e({},(V=d.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(N=(U=d.parameters)==null?void 0:U.docs)==null?void 0:N.source)})});var G,J,K;m.parameters=r(e({},m.parameters),{docs:r(e({},(G=m.parameters)==null?void 0:G.docs),{source:e({originalSource:"{}"},(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Y;g.parameters=r(e({},g.parameters),{docs:r(e({},(Q=g.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    addonBefore: 'https://',
    placeholder: 'Enter URL'
  }
}`},(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;f.parameters=r(e({},f.parameters),{docs:r(e({},(Z=f.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  args: {
    addonAfter: '.com',
    placeholder: 'Domain'
  }
}`},(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var re,ae,te;h.parameters=r(e({},h.parameters),{docs:r(e({},(re=h.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    allowClear: true,
    placeholder: 'Clearable Input'
  }
}`},(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var se,oe,ne;x.parameters=r(e({},x.parameters),{docs:r(e({},(se=x.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source)})});var ce,le,ue;S.parameters=r(e({},S.parameters),{docs:r(e({},(ce=S.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters'
  }
}`},(ue=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ue.source)})});var ie,pe,de;b.parameters=r(e({},b.parameters),{docs:r(e({},(ie=b.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    prefix: '@',
    suffix: '.com',
    placeholder: 'Email'
  }
}`},(de=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:de.source)})});var me,ge,fe;y.parameters=r(e({},y.parameters),{docs:r(e({},(me=y.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
  args: {
    value: 'Test value'
  },
  render: (props, meta) => {
    const inputRef = useRef<InputRef>(null);
    const focus = (cursor: 'start' | 'end' | 'all' = 'start') => {
      inputRef.current?.focus({
        cursor
      });
    };
    return <ExampleStory title={meta.name}>
        <Space direction="vertical" style={{
        width: '100%'
      }}>
          <Space wrap>
            <Button onClick={() => {
            focus('start');
          }}>
              Focus at start
            </Button>
            <Button onClick={() => {
            focus('end');
          }}>
              Focus at last
            </Button>
            <Button onClick={() => {
            focus('all');
          }}>
              Focus to select all
            </Button>
          </Space>
          <br />
          <Input {...props} defaultValue="Welcome to the Aquarium" ref={inputRef} />
        </Space>
      </ExampleStory>;
  },
  play: async story => {
    const input = story.canvasElement.querySelector('input');
    await expect(input).toBeInTheDocument();
    const buttons = story.canvasElement.querySelectorAll('button');
    await expect(buttons.length).toBe(3);
    for (const button of buttons) {
      input?.blur();
      await userEvent.click(button);
      await expect(input).toHaveFocus();
      input?.blur();
    }
  }
}`},(fe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:fe.source)})});const je=["Error","TextArea","Large","Middle","Small","Primary","WithHttpsBefore","WithDotComAfter","AllowClear","Disabled","WithMaxLength","WithPrefixAndSuffix","WithFocusManagement"],Le=Object.freeze(Object.defineProperty({__proto__:null,AllowClear:h,Disabled:x,Error:l,Large:i,Middle:p,Primary:m,Small:d,TextArea:u,WithDotComAfter:f,WithFocusManagement:y,WithHttpsBefore:g,WithMaxLength:S,WithPrefixAndSuffix:b,__namedExportsOrder:je,default:Ae},Symbol.toStringTag,{value:"Module"}));export{Le as I,Ae as m};
