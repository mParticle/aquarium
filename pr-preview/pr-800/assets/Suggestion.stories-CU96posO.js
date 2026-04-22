import{cQ as U,aD as m,c_ as R,c$ as P,d0 as z,cU as F,cS as T,aj as G,j as b,p as M,G as Q}from"./iframe-DHNzjgti.js";import{g as J,u as Y,a as Z}from"./genStyleUtils-CFPj1Yc3.js";import{S as ee}from"./index-DCTbmdId.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2_VwOCh.js";import"./pickAttrs-6g13qgN3.js";import"./use-proxy-imperative-handle-CZmBh3qs.js";import"./useLocale-BEySuCBw.js";import"./RecordingIcon-BcCkOl9j.js";const te=e=>{const{componentCls:o,antCls:c}=e;return{[o]:{[`${c}-cascader-menus ${c}-cascader-menu`]:{height:"auto"},[`${o}-item`]:{"&-icon":{marginInlineEnd:e.paddingXXS},"&-extra":{marginInlineStart:e.padding}},[`&${o}-block`]:{[`${o}-item-extra`]:{marginInlineStart:"auto"}}}}},ne=()=>({}),se=J("Suggestion",e=>{const o=U(e,{});return te(o)},ne);function oe(e,o,c,f){const[t,a]=m.useState([]),h=(n,u=t)=>{let i=e;for(let p=0;p<n-1;p+=1){const d=u[p],r=i.find(g=>g.value===d);if(!r)break;i=r.children||[]}return i},v=n=>{const u=t.length||1,i=h(u),p=i.findIndex(g=>g.value===t[u-1]),d=i.length,r=i[(p+n+d)%d];a([...t.slice(0,u-1),r.value])},x=()=>{t.length>1&&a(t.slice(0,t.length-1))},C=()=>{const n=h(t.length+1);n.length&&a([...t,n[0].value])},l=R(n=>{if(o)switch(n.key){case"ArrowDown":v(1),n.preventDefault();break;case"ArrowUp":v(-1),n.preventDefault();break;case"ArrowRight":c?x():C(),n.preventDefault();break;case"ArrowLeft":c?C():x(),n.preventDefault();break;case"Enter":return n.preventDefault(),!1;case"Escape":f(),n.preventDefault();break}});return m.useEffect(()=>{o&&Array.isArray(e)&&e.length>0&&a([e[0].value])},[o,e]),[t,l]}function j(e){const{prefixCls:o,className:c,rootClassName:f,classNames:t={},styles:a={},style:h,children:v,open:x,onOpenChange:C,items:l,onSelect:n,block:u,...i}=e,{direction:p,getPrefixCls:d}=Y(),r=d("suggestion",o),g=`${r}-item`,k=p==="rtl",w=Z("suggestion"),[D,E]=se(r),[I,O]=P(!1,x),[N,V]=P(typeof l=="function"?l():l,typeof l=="function"?void 0:l),S=s=>{O(s),C?.(s)},K=R(s=>{s===!1?S(!1):(typeof l=="function"&&V(l(s)),S(!0))}),A=()=>{S(!1)},L=s=>m.createElement(G,{className:g},s.icon&&m.createElement("div",{className:`${g}-icon`},s.icon),s.label,s.extra&&m.createElement("div",{className:`${g}-extra`},s.extra)),q=(s,B)=>{n&&n(s[s.length-1],B),S(!1)},[X,_]=oe(N,I,k,A),H=v?.({onTrigger:K,onKeyDown:_,open:I}),W=s=>{s||A()},$={};return $.onOpenChange=W,m.createElement(z,F({},i,{options:N,open:I,value:X,multiple:!1,placement:k?"topRight":"topLeft"},$,{optionRender:L,rootClassName:T(f,c,t.root,r,D,E,{[`${r}-block`]:u}),classNames:{root:t.root,popup:{root:t.popup}},styles:{popup:{root:a.popup}},style:{...w.style,...a.root,...h},onChange:q,popupMatchSelectWidth:u}),m.createElement("div",{className:T(r,f,w.classNames.content,t.content,`${r}-content`,D,E),style:{...w.styles.content,...a.content}},H))}const fe={title:"Components/AI/Suggestion",component:j,decorators:[e=>b.jsx(M,{children:b.jsx(e,{})})]},y={render:e=>{const[o,c]=Q.useState("");return b.jsx(j,{...e,children:({onTrigger:f,onKeyDown:t})=>b.jsx(ee,{value:o,onChange:a=>{c(a),f(a.startsWith("/")?a:!1)},onKeyDown:t,placeholder:'Type "/" to trigger suggestions'})})},args:{items:[{label:"Tell me about Aquarium",value:"tell-aquarium"},{label:"How to add a component?",value:"add-component"},{label:"Show design tokens",value:"show-tokens"}]}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Suggestion {...args}>
        {({
        onTrigger,
        onKeyDown
      }) => <Sender value={value} onChange={nextValue => {
        setValue(nextValue);
        onTrigger(nextValue.startsWith('/') ? nextValue : false);
      }} onKeyDown={onKeyDown} placeholder='Type "/" to trigger suggestions' />}
      </Suggestion>;
  },
  args: {
    items: [{
      label: 'Tell me about Aquarium',
      value: 'tell-aquarium'
    }, {
      label: 'How to add a component?',
      value: 'add-component'
    }, {
      label: 'Show design tokens',
      value: 'show-tokens'
    }]
  }
}`,...y.parameters?.docs?.source}}};const de=["Basic"];export{y as Basic,de as __namedExportsOrder,fe as default};
