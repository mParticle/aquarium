var Se=Object.defineProperty,ye=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var R=(o,t,a)=>t in o?Se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,e=(o,t)=>{for(var a in t||(t={}))be.call(t,a)&&R(o,a,t[a]);if(W)for(var a of W(t))Ee.call(t,a)&&R(o,a,t[a]);return o},r=(o,t)=>ye(o,ve(t));var j=(o,t,a)=>new Promise((n,l)=>{var i=c=>{try{w(a.next(c))}catch(C){l(C)}},xe=c=>{try{w(a.throw(c))}catch(C){l(C)}},w=c=>c.done?n(c.value):Promise.resolve(c.value).then(i,xe);w((a=a.apply(o,t)).next())});import{j as s}from"./jsx-runtime-GRP_BLAX.js";import{t as he,a as F,e as B}from"./NavigationItemsService-bN03Ttq5.js";import"./ErrorStateIcon-BDqumtIe.js";import"./SuccessStateIcon-CaXEMaF4.js";import"./WarningStateIcon-Z0wE8OWa.js";import"./_baseClone-BJQa_8Hx.js";import{E as we}from"./ExampleStory-BDhlP4za.js";import{r as Ce}from"./index-CNk6hRaE.js";import{e as A,u as Be}from"./index-9E5VwD_6.js";import"./LightTheme-BtoaoHMG.js";import"./row-M_82l6gX.js";import"./Context-BUSkoOJ1.js";import"./useToken-ZHvy9ttm.js";import"./presets-vy2ytAcW.js";import"./index-DN1Ck1Y5.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Bm4W6gxM.js";import"./style-C9UL_bK6.js";import"./client-CgpM46-k.js";import"./WarningFilled-KKNPfhjt.js";const Je={title:"Components/Not Prod Ready/Data Entry/Input",component:he,args:{placeholder:"Input Placeholder",addonAfter:void 0,addonBefore:void 0,allowClear:!1,bordered:!0,classNames:{},count:void 0,defaultValue:"",disabled:!1,id:void 0,maxLength:void 0,prefix:void 0,showCount:!1,status:void 0,styles:{},size:"middle",suffix:void 0,type:"text",value:"",onChange:o=>{console.log("Input changed: "+o.target.value)},onPressEnter:o=>{console.log("Enter key pressed: "+String(o))}},argTypes:{status:{control:"select",options:["warning","error"]},size:{control:"select",options:["small","medium","large"]}}},u={args:{status:"error"}},p={args:{type:"textarea"}},m={args:{size:"large"}},d={args:{size:"middle"}},g={args:{size:"small"}},f={},h={args:{addonBefore:"https://",placeholder:"Enter URL"}},x={args:{addonAfter:".com",placeholder:"Domain"}},S={args:{allowClear:!0,placeholder:"Clearable Input"}},y={args:{disabled:!0}},v={args:{maxLength:10,placeholder:"Max 10 characters"}},b={args:{prefix:"@",suffix:".com",placeholder:"Email"}},E={args:{value:"Test value"},render:(o,t)=>{const a=Ce.useRef(null),n=(l="start")=>{var i;(i=a.current)==null||i.focus({cursor:l})};return s.jsx(we,{title:t.name,children:s.jsxs(F,{orientation:"vertical",style:{width:"100%"},children:[s.jsxs(F,{wrap:!0,children:[s.jsx(B,{onClick:()=>{n("start")},children:"Focus at start"}),s.jsx(B,{onClick:()=>{n("end")},children:"Focus at last"}),s.jsx(B,{onClick:()=>{n("all")},children:"Focus to select all"})]}),s.jsx("br",{}),s.jsx(he,r(e({},o),{defaultValue:"Welcome to the Aquarium",ref:a}))]})})},play:o=>j(void 0,null,function*(){const t=o.canvasElement.querySelector("input");yield A(t).toBeInTheDocument();const a=o.canvasElement.querySelectorAll("button");yield A(a.length).toBe(3);for(const n of a)t==null||t.blur(),yield Be.click(n),yield A(t).toHaveFocus(),t==null||t.blur()})};var I,k,D;u.parameters=r(e({},u.parameters),{docs:r(e({},(I=u.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    status: 'error'
  }
}`},(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.source)})});var L,z,M;p.parameters=r(e({},p.parameters),{docs:r(e({},(L=p.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  args: {
    type: 'textarea'
  }
}`},(M=(z=p.parameters)==null?void 0:z.docs)==null?void 0:M.source)})});var P,T,q;m.parameters=r(e({},m.parameters),{docs:r(e({},(P=m.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source)})});var H,V,N;d.parameters=r(e({},d.parameters),{docs:r(e({},(H=d.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    size: 'middle'
  }
}`},(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source)})});var U,_,O;g.parameters=r(e({},g.parameters),{docs:r(e({},(U=g.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source)})});var G,J,K;f.parameters=r(e({},f.parameters),{docs:r(e({},(G=f.parameters)==null?void 0:G.docs),{source:e({originalSource:"{}"},(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Y;h.parameters=r(e({},h.parameters),{docs:r(e({},(Q=h.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    addonBefore: 'https://',
    placeholder: 'Enter URL'
  }
}`},(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;x.parameters=r(e({},x.parameters),{docs:r(e({},(Z=x.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  args: {
    addonAfter: '.com',
    placeholder: 'Domain'
  }
}`},(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var re,te,ae;S.parameters=r(e({},S.parameters),{docs:r(e({},(re=S.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    allowClear: true,
    placeholder: 'Clearable Input'
  }
}`},(ae=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ae.source)})});var oe,se,ne;y.parameters=r(e({},y.parameters),{docs:r(e({},(oe=y.parameters)==null?void 0:oe.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(ne=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ne.source)})});var ce,le,ie;v.parameters=r(e({},v.parameters),{docs:r(e({},(ce=v.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters'
  }
}`},(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source)})});var ue,pe,me;b.parameters=r(e({},b.parameters),{docs:r(e({},(ue=b.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  args: {
    prefix: '@',
    suffix: '.com',
    placeholder: 'Email'
  }
}`},(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var de,ge,fe;E.parameters=r(e({},E.parameters),{docs:r(e({},(de=E.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
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
        <Space orientation="vertical" style={{
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
}`},(fe=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:fe.source)})});const Ke=["Error","TextArea","Large","Middle","Small","Primary","WithHttpsBefore","WithDotComAfter","AllowClear","Disabled","WithMaxLength","WithPrefixAndSuffix","WithFocusManagement"];export{S as AllowClear,y as Disabled,u as Error,m as Large,d as Middle,f as Primary,g as Small,p as TextArea,x as WithDotComAfter,E as WithFocusManagement,h as WithHttpsBefore,v as WithMaxLength,b as WithPrefixAndSuffix,Ke as __namedExportsOrder,Je as default};
