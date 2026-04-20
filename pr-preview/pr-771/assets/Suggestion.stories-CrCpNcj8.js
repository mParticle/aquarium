import{cv as F,c3 as m,cB as R,cC as T,cD as M,cz as U,cx as $,bh as W,j as b,q as G,aE as J}from"./iframe-DrqXyfjT.js";import{g as Q,u as Y,a as Z}from"./genStyleUtils-DqTPqg_3.js";import{S as ee}from"./index-CP7T_hsr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Do47xzsd.js";import"./pickAttrs-Cwb8ZjVK.js";import"./use-proxy-imperative-handle-CPAhKyJ3.js";import"./useLocale-CvppY2Xq.js";import"./RecordingIcon-Cqrcqn5p.js";const te=e=>{const{componentCls:s,antCls:c}=e;return{[s]:{[`${c}-cascader-menus ${c}-cascader-menu`]:{height:"auto"},[`${s}-item`]:{"&-icon":{marginInlineEnd:e.paddingXXS},"&-extra":{marginInlineStart:e.padding}},[`&${s}-block`]:{[`${s}-item-extra`]:{marginInlineStart:"auto"}}}}},ne=()=>({}),oe=Q("Suggestion",e=>{const s=F(e,{});return te(s)},ne);function se(e,s,c,f){const[t,a]=m.useState([]),h=(n,u=t)=>{let i=e;for(let p=0;p<n-1;p+=1){const d=u[p],r=i.find(g=>g.value===d);if(!r)break;i=r.children||[]}return i},v=n=>{const u=t.length||1,i=h(u),p=i.findIndex(g=>g.value===t[u-1]),d=i.length,r=i[(p+n+d)%d];a([...t.slice(0,u-1),r.value])},x=()=>{t.length>1&&a(t.slice(0,t.length-1))},C=()=>{const n=h(t.length+1);n.length&&a([...t,n[0].value])},l=R(n=>{if(s)switch(n.key){case"ArrowDown":v(1),n.preventDefault();break;case"ArrowUp":v(-1),n.preventDefault();break;case"ArrowRight":c?x():C(),n.preventDefault();break;case"ArrowLeft":c?C():x(),n.preventDefault();break;case"Enter":return n.preventDefault(),!1;case"Escape":f(),n.preventDefault();break}});return m.useEffect(()=>{s&&Array.isArray(e)&&e.length>0&&a([e[0].value])},[s,e]),[t,l]}function j(e){const{prefixCls:s,className:c,rootClassName:f,classNames:t={},styles:a={},style:h,children:v,open:x,onOpenChange:C,items:l,onSelect:n,block:u,...i}=e,{direction:p,getPrefixCls:d}=Y(),r=d("suggestion",s),g=`${r}-item`,k=p==="rtl",w=Z("suggestion"),[E,D]=oe(r),[I,O]=T(!1,x),[N,V]=T(typeof l=="function"?l():l,typeof l=="function"?void 0:l),S=o=>{O(o),C?.(o)},q=R(o=>{o===!1?S(!1):(typeof l=="function"&&V(l(o)),S(!0))}),A=()=>{S(!1)},K=o=>m.createElement(W,{className:g},o.icon&&m.createElement("div",{className:`${g}-icon`},o.icon),o.label,o.extra&&m.createElement("div",{className:`${g}-extra`},o.extra)),L=(o,z)=>{n&&n(o[o.length-1],z),S(!1)},[X,B]=se(N,I,k,A),H=v?.({onTrigger:q,onKeyDown:B,open:I}),_=o=>{o||A()},P={};return P.onOpenChange=_,m.createElement(M,U({},i,{options:N,open:I,value:X,multiple:!1,placement:k?"topRight":"topLeft"},P,{optionRender:K,rootClassName:$(f,c,t.root,r,E,D,{[`${r}-block`]:u}),classNames:{root:t.root,popup:{root:t.popup}},styles:{popup:{root:a.popup}},style:{...w.style,...a.root,...h},onChange:L,popupMatchSelectWidth:u}),m.createElement("div",{className:$(r,f,w.classNames.content,t.content,`${r}-content`,E,D),style:{...w.styles.content,...a.content}},H))}const fe={title:"Components/AI/Suggestion",component:j,decorators:[e=>b.jsx(G,{children:b.jsx(e,{})})]},y={render:e=>{const[s,c]=J.useState("");return b.jsx(j,{...e,children:({onTrigger:f,onKeyDown:t})=>b.jsx(ee,{value:s,onChange:a=>{c(a),f(a==="/")},onKeyDown:t,placeholder:'Type "/" to trigger suggestions'})})},args:{items:[{label:"Tell me about Aquarium",value:"tell-aquarium"},{label:"How to add a component?",value:"add-component"},{label:"Show design tokens",value:"show-tokens"}]}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Suggestion {...args}>
        {({
        onTrigger,
        onKeyDown
      }) => <Sender value={value} onChange={nextValue => {
        setValue(nextValue);
        onTrigger(nextValue === '/');
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
