var X=Object.defineProperty,Z=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var C=(o,r,a)=>r in o?X(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,e=(o,r)=>{for(var a in r||(r={}))ee.call(r,a)&&C(o,a,r[a]);if(j)for(var a of j(r))te.call(r,a)&&C(o,a,r[a]);return o},t=(o,r)=>Z(o,$(r));import{j as i}from"./jsx-runtime-C9TrHvcC.js";import{ad as v,a as oe}from"./NavigationItemsService-BFwOuj5Z.js";import{r as J}from"./index-3OP4wdng.js";import"./ErrorStateIcon-DXmqhBj_.js";import"./SuccessStateIcon-Bfx00OmU.js";import"./WarningStateIcon-p5L7g-e4.js";import"./_baseClone-DwBCp-Ss.js";import{E as Q}from"./ExampleStory-DVMg3NUe.js";import"./LightTheme-vAO8T2BA.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-DS1z-27R.js";import"./WarningFilled-D6ijQqgK.js";const ye={title:"Components/Data Display/ImageCard",component:v,args:{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Sample image",size:180,selected:!1,loading:!1,title:"Image Card",description:"This is a sample image card"},argTypes:{selected:{control:"boolean"},loading:{control:"boolean"},tagColor:{control:"select",options:["default","blue","green","red","orange","purple","gold"]}}},c={},l={args:{selected:!0}},n={args:{tag:"Featured",tagColor:"blue"}},d={args:{loading:!0}},p={args:{selected:!0,tag:"Premium",tagColor:"gold"}},g={args:{title:"Mountain Landscape"}},m={args:{title:"Mountain Landscape",description:"A beautiful view of mountains at sunset",selected:!0,tag:"Featured",tagColor:"blue"}},u={render:()=>{const[o,r]=J.useState(!1);return i.jsxs(Q,{title:"Click to toggle selection",children:[i.jsx(v,{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Selectable image",size:180,selected:o,onChange:r,title:"Selectable Card",description:"Click to toggle selection state"}),i.jsxs("div",{style:{marginTop:"16px"},children:["Selected: ",o?"Yes":"No"]})]})}},S={render:()=>{const[o,r]=J.useState([]),a=[{id:1,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green",title:"Product A",description:"First product option"},{id:2,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",title:"Product B",description:"Second product option"},{id:3,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green",title:"Product C",description:"Third product option"},{id:4,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green",title:"Product D",description:"Fourth product option"},{id:5,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",title:"Product E",description:"Fifth product option"},{id:6,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green",title:"Product F",description:"Sixth product option"}],U=s=>{r(h=>h.includes(s)?h.filter(V=>V!==s):[...h,s])};return i.jsxs(Q,{title:"Multiple image selection",children:[i.jsx(oe,{size:"middle",wrap:!0,children:a.map(s=>i.jsx(v,{src:s.src,alt:s.tag,size:180,selected:o.includes(s.id),onChange:()=>{U(s.id)},tag:s.tag,tagColor:s.tagColor,title:s.title,description:s.description},s.id))}),i.jsxs("div",{style:{marginTop:"16px"},children:["Selected: ",o.length>0?o.join(", "):"None"]})]})}};var f,P,b;c.parameters=t(e({},c.parameters),{docs:t(e({},(f=c.parameters)==null?void 0:f.docs),{source:e({originalSource:"{}"},(b=(P=c.parameters)==null?void 0:P.docs)==null?void 0:b.source)})});var y,w,x;l.parameters=t(e({},l.parameters),{docs:t(e({},(y=l.parameters)==null?void 0:y.docs),{source:e({originalSource:`{
  args: {
    selected: true
  }
}`},(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source)})});var z,F,K;n.parameters=t(e({},n.parameters),{docs:t(e({},(z=n.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    tag: 'Featured',
    tagColor: 'blue'
  }
}`},(K=(F=n.parameters)==null?void 0:F.docs)==null?void 0:K.source)})});var M,T,D;d.parameters=t(e({},d.parameters),{docs:t(e({},(M=d.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source)})});var L,I,k;p.parameters=t(e({},p.parameters),{docs:t(e({},(L=p.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  args: {
    selected: true,
    tag: 'Premium',
    tagColor: 'gold'
  }
}`},(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source)})});var E,R,q;g.parameters=t(e({},g.parameters),{docs:t(e({},(E=g.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    title: 'Mountain Landscape'
  }
}`},(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source)})});var G,H,W;m.parameters=t(e({},m.parameters),{docs:t(e({},(G=m.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    title: 'Mountain Landscape',
    description: 'A beautiful view of mountains at sunset',
    selected: true,
    tag: 'Featured',
    tagColor: 'blue'
  }
}`},(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source)})});var A,N,B;u.parameters=t(e({},u.parameters),{docs:t(e({},(A=u.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(false);
    return <ExampleStory title="Click to toggle selection">
        <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Selectable image" size={180} selected={selected} onChange={setSelected} title="Selectable Card" description="Click to toggle selection state" />
        <div style={{
        marginTop: '16px'
      }}>Selected: {selected ? 'Yes' : 'No'}</div>
      </ExampleStory>;
  }
}`},(B=(N=u.parameters)==null?void 0:N.docs)==null?void 0:B.source)})});var Y,_,O;S.parameters=t(e({},S.parameters),{docs:t(e({},(Y=S.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  render: () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const images = [{
      id: 1,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      tag: 'Live',
      tagColor: 'green',
      title: 'Product A',
      description: 'First product option'
    }, {
      id: 2,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      title: 'Product B',
      description: 'Second product option'
    }, {
      id: 3,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      tag: 'Live',
      tagColor: 'green',
      title: 'Product C',
      description: 'Third product option'
    }, {
      id: 4,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      tag: 'Live',
      tagColor: 'green',
      title: 'Product D',
      description: 'Fourth product option'
    }, {
      id: 5,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Product E',
      description: 'Fifth product option'
    }, {
      id: 6,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      tag: 'Live',
      tagColor: 'green',
      title: 'Product F',
      description: 'Sixth product option'
    }];
    const toggleSelection = (id: number) => {
      setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };
    return <ExampleStory title="Multiple image selection">
        <Space size="middle" wrap>
          {images.map(img => <ImageCard key={img.id} src={img.src} alt={img.tag} size={180} selected={selectedIds.includes(img.id)} onChange={() => {
          toggleSelection(img.id);
        }} tag={img.tag} tagColor={img.tagColor} title={img.title} description={img.description} />)}
        </Space>
        <div style={{
        marginTop: '16px'
      }}>Selected: {selectedIds.length > 0 ? selectedIds.join(', ') : 'None'}</div>
      </ExampleStory>;
  }
}`},(O=(_=S.parameters)==null?void 0:_.docs)==null?void 0:O.source)})});const we=["Primary","Selected","WithTag","Loading","SelectedWithTag","WithTitle","WithTitleAndDescription","ControlledSelection","MultipleCards"];export{u as ControlledSelection,d as Loading,S as MultipleCards,c as Primary,l as Selected,p as SelectedWithTag,n as WithTag,g as WithTitle,m as WithTitleAndDescription,we as __namedExportsOrder,ye as default};
