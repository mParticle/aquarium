var u=Object.defineProperty,x=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,n=(r,e)=>{for(var t in e||(e={}))b.call(e,t)&&m(r,t,e[t]);if(p)for(var t of p(e))v.call(e,t)&&m(r,t,e[t]);return r},a=(r,e)=>x(r,D(e));import{j as i}from"./jsx-runtime-BcCOBRXo.js";import{d as l}from"./GlobalNavigation-CgXhFj8z.js";import{E as A}from"./ExampleStory-BX8rZA0M.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-4dnY1EES.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-0c7aa-qo.js";import"./_baseClone-u1J3oOXU.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const F={title:"Components/General/Title",component:l.Title,args:{}},s={},o={render:()=>i.jsxs(A,{title:"Different Headings.",children:[i.jsx(l.Title,{editable:!0,level:1,style:{margin:0},children:"h1. Ant Design"}),i.jsx(l.Title,{editable:!0,level:2,style:{margin:0},children:"h2. Ant Design"}),i.jsx(l.Title,{editable:!0,level:3,style:{margin:0},children:"h3. Ant Design"}),i.jsx(l.Title,{editable:!0,level:4,style:{margin:0},children:"h4. Ant Design"}),i.jsx(l.Title,{editable:!0,level:5,style:{margin:0},children:"h5. Ant Design"})]})};var g,y,d;s.parameters=a(n({},s.parameters),{docs:a(n({},(g=s.parameters)==null?void 0:g.docs),{source:n({originalSource:"{}"},(d=(y=s.parameters)==null?void 0:y.docs)==null?void 0:d.source)})});var T,h,c;o.parameters=a(n({},o.parameters),{docs:a(n({},(T=o.parameters)==null?void 0:T.docs),{source:n({originalSource:`{
  render: () => {
    return <ExampleStory title="Different Headings.">
        <Typography.Title editable level={1} style={{
        margin: 0
      }}>
          h1. Ant Design
        </Typography.Title>
        <Typography.Title editable level={2} style={{
        margin: 0
      }}>
          h2. Ant Design
        </Typography.Title>
        <Typography.Title editable level={3} style={{
        margin: 0
      }}>
          h3. Ant Design
        </Typography.Title>
        <Typography.Title editable level={4} style={{
        margin: 0
      }}>
          h4. Ant Design
        </Typography.Title>
        <Typography.Title editable level={5} style={{
        margin: 0
      }}>
          h5. Ant Design
        </Typography.Title>
      </ExampleStory>;
  }
}`},(c=(h=o.parameters)==null?void 0:h.docs)==null?void 0:c.source)})});const I=["Primary","ExampleHeadings"];export{o as ExampleHeadings,s as Primary,I as __namedExportsOrder,F as default};