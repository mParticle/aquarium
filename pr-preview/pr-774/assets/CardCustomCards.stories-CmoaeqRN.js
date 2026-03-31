import{j as t,C as f,B as C,a as S,M as s,b as w,c as j,d as T,e as $,I as k,F as n,f as L,T as o,g as E,h as i,i as l,k as M,l as c}from"./iframe-BPPWs4QB.js";import{s as R,a as v,t as A,i as F,b as I,c as P,d as W,e as z,f as D,g as O,n as X,h as _,j as G,k as H,l as U,m as q}from"./User01-DQhs6dJV.js";import{E as d}from"./ExampleStory-BwR4qQP0.js";import"./preload-helper-PPVm8Dsz.js";const u={Truck:q,Announcement:U,Building:H,CheckCircle:G,Clock:_,CoinsHand:X,Globe:O,Lightbulb:D,Mail:z,MarkerPin:W,Monitor:P,PackageSearch:I,ShoppingCart:F,Stars:A,Tag:v,User:R};function p({icon:e,eyebrow:m,title:x,secondaryText:y,showButtons:g,primaryButtonLabel:h,defaultButtonLabel:B}){const b=u[e];return t.jsxs("div",{style:{background:j,padding:w,display:"flex",flexDirection:"column",gap:s,borderRadius:S,boxShadow:C,border:`1px solid ${f}`,width:250},children:[t.jsx("div",{style:{background:$,padding:s,borderRadius:T,display:"flex",alignSelf:"flex-start",alignItems:"center"},children:t.jsx(k,{name:b,color:"info"})}),t.jsxs(n,{vertical:!0,gap:L,children:[t.jsx(o.Text,{style:{fontSize:l,color:i,fontWeight:E,textTransform:"uppercase"},children:m}),t.jsx(o.Title,{level:4,style:{margin:0},children:x}),t.jsx(o.Text,{style:{fontSize:l,color:i},children:y})]}),g&&t.jsxs(n,{gap:M,children:[t.jsx(c,{type:"primary",children:h}),t.jsx(c,{children:B})]})]})}const J={icon:"Truck",eyebrow:"Eyebrow line",title:"Card title",secondaryText:"Secondary text",showButtons:!1,primaryButtonLabel:"Button",defaultButtonLabel:"Button"},K={icon:{control:"select",options:Object.keys(u)},eyebrow:{control:"text"},title:{control:"text"},secondaryText:{control:"text"},showButtons:{control:"boolean"},primaryButtonLabel:{control:"text"},defaultButtonLabel:{control:"text"}},Z={title:"Components/Data Display/Card/Custom Cards",args:J,argTypes:K},r={render:e=>t.jsx(d,{title:"A card with an icon, eyebrow label, title, and supporting secondary text.",children:t.jsx(p,{...e,showButtons:!1})})},a={args:{primaryButtonLabel:`Primary
`,defaultButtonLabel:"Secondary",showButtons:!0},render:e=>t.jsx(d,{title:"Custom card with primary and secondary action buttons.",children:t.jsx(p,{...e,showButtons:!0})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <ExampleStory title="A card with an icon, eyebrow label, title, and supporting secondary text.">
      <CustomCard {...args} showButtons={false} />
    </ExampleStory>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    primaryButtonLabel: 'Primary\\n',
    defaultButtonLabel: 'Secondary',
    showButtons: true
  },
  render: args => <ExampleStory title="Custom card with primary and secondary action buttons.">
      <CustomCard {...args} showButtons={true} />
    </ExampleStory>
}`,...a.parameters?.docs?.source}}};const tt=["Basic","WithButtons"];export{r as Basic,a as WithButtons,tt as __namedExportsOrder,Z as default};
