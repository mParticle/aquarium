import{j as e,F as g,b as m,T as i,k as u,I as f,i as y}from"./iframe-DVjcQFZr.js";import"./preload-helper-PPVm8Dsz.js";const s=({children:r})=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:48,padding:"48px 32px 64px",backgroundColor:"#ffffff"},children:r});try{s.displayName="PromoPage",s.__docgenInfo={description:"",displayName:"PromoPage",props:{}}}catch{}const d=({headline:r,description:n,buttons:t})=>{const a=p=>{if(p)return e.jsx(f,{name:p,size:"sm"})};return e.jsx("header",{style:{padding:"48px",borderRadius:24,background:"linear-gradient(135deg, rgba(86,104,255,0.16) 0%, rgba(159,102,255,0.24) 50%, rgba(255,137,171,0.16) 100%)"},children:e.jsxs(g,{vertical:!0,gap:24,children:[e.jsxs(m,{direction:"vertical",size:12,children:[e.jsx(i.Title,{level:2,style:{margin:0},children:r}),e.jsx(i.Paragraph,{size:"lg",style:{margin:0},children:n})]}),t?e.jsxs(m,{size:12,wrap:!0,children:[t.primaryButton?e.jsx(u,{type:"primary",size:"large",icon:a(t.primaryButton.iconName),onClick:t.primaryButton.onClick,children:t.primaryButton.label}):null,t.defaultButton?e.jsx(u,{size:"large",icon:a(t.defaultButton.iconName),onClick:t.defaultButton.onClick,children:t.defaultButton.label}):null]}):null]})})};try{d.displayName="PromoPageHero",d.__docgenInfo={description:"",displayName:"PromoPageHero",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"{ defaultButton?: PromoPageHeroButton; primaryButton?: PromoPageHeroButton; } | undefined"}}}}}catch{}const c=({title:r,children:n})=>e.jsx("section",{children:e.jsxs(g,{vertical:!0,gap:32,children:[e.jsx(i.Title,{level:3,style:{margin:0},children:r}),e.jsx("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))"},children:n})]})});try{c.displayName="PromoPageBenefits",c.__docgenInfo={description:"",displayName:"PromoPageBenefits",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const o=({title:r,description:n,displayOptions:t})=>{const a=()=>t?t.type==="link"?e.jsx(i.Link,{href:t.src,target:"_blank",rel:"noreferrer",children:t.text}):e.jsx(u,{type:t.variant??"default",icon:t.iconName?e.jsx(f,{name:t.iconName,size:"sm"}):void 0,onClick:t.onClick,children:t.text}):null;return e.jsxs(y,{style:{borderRadius:16,minHeight:220,display:"flex",flexDirection:"column",gap:16,padding:24},children:[e.jsxs("div",{children:[e.jsx(i.Title,{level:4,style:{margin:0},children:r}),e.jsx(i.Paragraph,{size:"lg",style:{marginTop:12},children:n})]}),e.jsx("div",{style:{marginTop:"auto"},children:a()})]})};try{o.displayName="PromoPageCard",o.__docgenInfo={description:"",displayName:"PromoPageCard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},displayOptions:{defaultValue:null,description:"",name:"displayOptions",required:!1,type:{name:"PromoPageCardDisplayOptions"}}}}}catch{}const h={title:"UX Patterns/Landing Page/Promo Page",component:s},l={render:function(){return e.jsxs(s,{children:[e.jsx(d,{headline:"Create your new feature",description:"Transform your workflow with our innovative solution designed to boost productivity and streamline your processes.",buttons:{defaultButton:{label:"Read Docs",onClick:()=>console.log("Read Docs clicked!")},primaryButton:{label:"Create new feature",iconName:"add",onClick:()=>console.log("Create new feature clicked!")}}}),e.jsxs(c,{title:"Key Benefits",children:[e.jsx(o,{title:"Value #1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien.",displayOptions:{type:"link",src:"#",text:"Button"}}),e.jsx(o,{title:"Value #2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien.",displayOptions:{type:"link",src:"#",text:"Button"}}),e.jsx(o,{title:"Value #3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien.",displayOptions:{type:"link",src:"#",text:"Button"}})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <PromoPage>
        <PromoPageHero headline="Create your new feature" description="Transform your workflow with our innovative solution designed to boost productivity and streamline your processes." buttons={{
        defaultButton: {
          label: 'Read Docs',
          onClick: () => console.log('Read Docs clicked!')
        },
        primaryButton: {
          label: 'Create new feature',
          iconName: 'add',
          onClick: () => console.log('Create new feature clicked!')
        }
      }} />

        <PromoPageBenefits title="Key Benefits">
          <PromoPageCard title="Value #1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien." displayOptions={{
          type: 'link',
          src: '#',
          text: 'Button'
        }} />
          <PromoPageCard title="Value #2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien." displayOptions={{
          type: 'link',
          src: '#',
          text: 'Button'
        }} />
          <PromoPageCard title="Value #3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien." displayOptions={{
          type: 'link',
          src: '#',
          text: 'Button'
        }} />
        </PromoPageBenefits>
      </PromoPage>;
  }
}`,...l.parameters?.docs?.source}}};const _=["DefaultPromoPage"];export{l as DefaultPromoPage,_ as __namedExportsOrder,h as default};
