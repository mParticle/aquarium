import{cT as z,aL as m,d1 as R,d2 as P,d3 as F,cX as G,cV as $,al as M,j as b,p as U,G as J}from"./iframe-CeL89nAb.js";import{g as Q,u as Y,a as Z}from"./genStyleUtils-BWcNulH1.js";import{S as ee}from"./index-Brn96LGr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVL1kLYE.js";import"./pickAttrs-BQUZbHI5.js";import"./use-proxy-imperative-handle-D-LGbeRZ.js";import"./useLocale-D0M7hg-R.js";import"./RecordingIcon-Vb5HUPID.js";const te=e=>{const{componentCls:o,antCls:l}=e;return{[o]:{[`${l}-cascader-menus ${l}-cascader-menu`]:{height:"auto"},[`${o}-item`]:{"&-icon":{marginInlineEnd:e.paddingXXS},"&-extra":{marginInlineStart:e.padding}},[`&${o}-block`]:{[`${o}-item-extra`]:{marginInlineStart:"auto"}}}}},ne=()=>({}),se=Q("Suggestion",e=>{const o=z(e,{});return te(o)},ne);function oe(e,o,l,f){const[t,a]=m.useState([]),h=(n,u=t)=>{let i=e;for(let p=0;p<n-1;p+=1){const d=u[p],r=i.find(g=>g.value===d);if(!r)break;i=r.children||[]}return i},v=n=>{const u=t.length||1,i=h(u),p=i.findIndex(g=>g.value===t[u-1]),d=i.length,r=i[(p+n+d)%d];a([...t.slice(0,u-1),r.value])},x=()=>{t.length>1&&a(t.slice(0,t.length-1))},C=()=>{const n=h(t.length+1);n.length&&a([...t,n[0].value])},c=R(n=>{if(o)switch(n.key){case"ArrowDown":v(1),n.preventDefault();break;case"ArrowUp":v(-1),n.preventDefault();break;case"ArrowRight":l?x():C(),n.preventDefault();break;case"ArrowLeft":l?C():x(),n.preventDefault();break;case"Enter":return n.preventDefault(),!1;case"Escape":f(),n.preventDefault();break}});return m.useEffect(()=>{o&&Array.isArray(e)&&e.length>0&&a([e[0].value])},[o,e]),[t,c]}function V(e){const{prefixCls:o,className:l,rootClassName:f,classNames:t={},styles:a={},style:h,children:v,open:x,onOpenChange:C,items:c,onSelect:n,block:u,...i}=e,{direction:p,getPrefixCls:d}=Y(),r=d("suggestion",o),g=`${r}-item`,k=p==="rtl",w=Z("suggestion"),[E,D]=se(r),[I,j]=P(!1,x),[N,L]=P(typeof c=="function"?c():c,typeof c=="function"?void 0:c),S=s=>{j(s),C?.(s)},O=R(s=>{s===!1?S(!1):(typeof c=="function"&&L(c(s)),S(!0))}),A=()=>{S(!1)},K=s=>m.createElement(M,{className:g},s.icon&&m.createElement("div",{className:`${g}-icon`},s.icon),s.label,s.extra&&m.createElement("div",{className:`${g}-extra`},s.extra)),X=(s,B)=>{n&&n(s[s.length-1],B),S(!1)},[q,H]=oe(N,I,k,A),W=v?.({onTrigger:O,onKeyDown:H,open:I}),_=s=>{s||A()},T={};return T.onOpenChange=_,m.createElement(F,G({},i,{options:N,open:I,value:q,multiple:!1,placement:k?"topRight":"topLeft"},T,{optionRender:K,rootClassName:$(f,l,t.root,r,E,D,{[`${r}-block`]:u}),classNames:{root:t.root,popup:{root:t.popup}},styles:{popup:{root:a.popup}},style:{...w.style,...a.root,...h},onChange:X,popupMatchSelectWidth:u}),m.createElement("div",{className:$(r,f,w.classNames.content,t.content,`${r}-content`,E,D),style:{...w.styles.content,...a.content}},W))}const fe={title:"Components/AI/Suggestion",component:V,decorators:[e=>b.jsx(U,{children:b.jsx(e,{})})]},y={render:e=>{const[o,l]=J.useState("");return b.jsx(V,{...e,children:({onTrigger:f,onKeyDown:t})=>b.jsx(ee,{value:o,onChange:a=>{l(a),f(a.startsWith("/")?a:!1)},onKeyDown:t,placeholder:'Type "/" to trigger suggestions'})})},args:{items:[{label:"Tell me about Aquarium",value:"tell-aquarium"},{label:"How to add a component?",value:"add-component"},{label:"Show design tokens",value:"show-tokens"}]}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
