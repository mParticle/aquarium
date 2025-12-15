var _=Object.defineProperty,O=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var v=(t,a,s)=>a in t?_(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,e=(t,a)=>{for(var s in a||(a={}))B.call(a,s)&&v(t,s,a[s]);if(S)for(var s of S(a))J.call(a,s)&&v(t,s,a[s]);return t},r=(t,a)=>O(t,A(a));import{j as c}from"./jsx-runtime-C9TrHvcC.js";import{ad as h,a as Q}from"./NavigationItemsService-CdJZ0KYq.js";import{r as F}from"./index-3OP4wdng.js";import"./ErrorStateIcon-BnGyV_sP.js";import"./SuccessStateIcon-aaXjqmy_.js";import"./WarningStateIcon-BVxbHRJN.js";import"./_baseClone-DwBCp-Ss.js";import{E as N}from"./ExampleStory-gWghTTb-.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-CqSREjI8.js";import"./WarningFilled-D6ijQqgK.js";const he={title:"Components/Data Display/ImageCard",component:h,args:{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Sample image",width:200,height:200,selected:!1,loading:!1},argTypes:{selected:{control:"boolean"},loading:{control:"boolean"},tagColor:{control:"select",options:["default","blue","green","red","orange","purple","gold"]}}},i={},g={args:{selected:!0}},l={args:{tag:"Featured",tagColor:"blue"}},d={args:{loading:!0}},n={args:{selected:!0,tag:"Premium",tagColor:"gold"}},p={render:()=>{const[t,a]=F.useState(!1);return c.jsxs(N,{title:"Click to toggle selection",children:[c.jsx(h,{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Selectable image",width:200,height:200,selected:t,onChange:a}),c.jsxs("div",{style:{marginTop:"16px"},children:["Selected: ",t?"Yes":"No"]})]})}},m={render:()=>{const[t,a]=F.useState([]),s=[{id:1,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green"},{id:2,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green"},{id:3,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green"},{id:4,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green"},{id:5,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green"},{id:6,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green"}],W=o=>{a(u=>u.includes(o)?u.filter(Y=>Y!==o):[...u,o])};return c.jsxs(N,{title:"Multiple image selection",children:[c.jsx(Q,{size:"middle",wrap:!0,children:s.map(o=>c.jsx(h,{src:o.src,alt:o.tag,width:200,height:200,selected:t.includes(o.id),onChange:()=>{W(o.id)},tag:o.tag,tagColor:o.tagColor},o.id))}),c.jsxs("div",{style:{marginTop:"16px"},children:["Selected: ",t.length>0?t.join(", "):"None"]})]})}};var j,C,y;i.parameters=r(e({},i.parameters),{docs:r(e({},(j=i.parameters)==null?void 0:j.docs),{source:e({originalSource:"{}"},(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source)})});var w,f,b;g.parameters=r(e({},g.parameters),{docs:r(e({},(w=g.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  args: {
    selected: true
  }
}`},(b=(f=g.parameters)==null?void 0:f.docs)==null?void 0:b.source)})});var x,P,K;l.parameters=r(e({},l.parameters),{docs:r(e({},(x=l.parameters)==null?void 0:x.docs),{source:e({originalSource:`{
  args: {
    tag: 'Featured',
    tagColor: 'blue'
  }
}`},(K=(P=l.parameters)==null?void 0:P.docs)==null?void 0:K.source)})});var z,L,M;d.parameters=r(e({},d.parameters),{docs:r(e({},(z=d.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source)})});var I,D,R;n.parameters=r(e({},n.parameters),{docs:r(e({},(I=n.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    selected: true,
    tag: 'Premium',
    tagColor: 'gold'
  }
}`},(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source)})});var k,q,E;p.parameters=r(e({},p.parameters),{docs:r(e({},(k=p.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(false);
    return <ExampleStory title="Click to toggle selection">
        <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Selectable image" width={200} height={200} selected={selected} onChange={setSelected} />
        <div style={{
        marginTop: '16px'
      }}>Selected: {selected ? 'Yes' : 'No'}</div>
      </ExampleStory>;
  }
}`},(E=(q=p.parameters)==null?void 0:q.docs)==null?void 0:E.source)})});var G,H,T;m.parameters=r(e({},m.parameters),{docs:r(e({},(G=m.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  render: () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const images = [{
      id: 1,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      tag: 'Live',
      tagColor: 'green'
    }, {
      id: 2,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      tag: 'Live',
      tagColor: 'green'
    }, {
      id: 3,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      tag: 'Live',
      tagColor: 'green'
    }, {
      id: 4,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      tag: 'Live',
      tagColor: 'green'
    }, {
      id: 5,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      tag: 'Live',
      tagColor: 'green'
    }, {
      id: 6,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      tag: 'Live',
      tagColor: 'green'
    }];
    const toggleSelection = (id: number) => {
      setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };
    return <ExampleStory title="Multiple image selection">
        <Space size="middle" wrap>
          {images.map(img => <ImageCard key={img.id} src={img.src} alt={img.tag} width={200} height={200} selected={selectedIds.includes(img.id)} onChange={() => {
          toggleSelection(img.id);
        }} tag={img.tag} tagColor={img.tagColor} />)}
        </Space>
        <div style={{
        marginTop: '16px'
      }}>Selected: {selectedIds.length > 0 ? selectedIds.join(', ') : 'None'}</div>
      </ExampleStory>;
  }
}`},(T=(H=m.parameters)==null?void 0:H.docs)==null?void 0:T.source)})});const Se=["Primary","Selected","WithTag","Loading","SelectedWithTag","ControlledSelection","MultipleCards"];export{p as ControlledSelection,d as Loading,m as MultipleCards,i as Primary,g as Selected,n as SelectedWithTag,l as WithTag,Se as __namedExportsOrder,he as default};
