var K=Object.defineProperty,F=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var m=(e,t,i)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,s=(e,t)=>{for(var i in t||(t={}))I.call(t,i)&&m(e,i,t[i]);if(g)for(var i of g(t))M.call(t,i)&&m(e,i,t[i]);return e},r=(e,t)=>F(e,D(t));import{j as a}from"./jsx-runtime-C9TrHvcC.js";import{ae as n,a as k}from"./NavigationItemsService-TIeGqD4L.js";import{r as b}from"./index-3OP4wdng.js";import"./ErrorStateIcon-CFRZUseq.js";import"./SuccessStateIcon-Beh0MlUq.js";import"./WarningStateIcon-BsxCnJCe.js";import"./_baseClone-DwBCp-Ss.js";import{E as w}from"./ExampleStory-BXc3_4x9.js";import"./LightTheme-vAO8T2BA.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BCoF0-gZ.js";import"./WarningFilled-D6ijQqgK.js";const $={title:"Components/Data Display/ImageCard",component:n,args:{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Sample image",size:180,selected:!1,loading:!1,title:"Image Card",description:"This is a sample image card"},argTypes:{selected:{control:"boolean"},loading:{control:"boolean"},tagColor:{control:"select",options:["default","blue","green","red","orange","purple","gold"]}}},c={},l={render:()=>{const[e,t]=b.useState(!1);return a.jsxs(w,{title:"Click to toggle selection",children:[a.jsx(n,{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Selectable image",size:180,selected:e,onChange:t,title:"Selectable Card",description:"Click to toggle selection state"}),a.jsxs("div",{style:{marginTop:"16px"},children:["Selected: ",e?"Yes":"No"]})]})}},d={render:()=>{const[e,t]=b.useState([]),i=[{id:1,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green",title:"Product A",description:"First product option"},{id:2,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",title:"Product B",description:"Second product option"},{id:3,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green",title:"Product C",description:"Third product option"},{id:4,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green",title:"Product D",description:"Fourth product option"},{id:5,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",title:"Product E",description:"Fifth product option"},{id:6,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green",title:"Product F",description:"Sixth product option"}],x=o=>{t(p=>p.includes(o)?p.filter(z=>z!==o):[...p,o])};return a.jsxs(w,{title:"Multiple image selection",children:[a.jsx(k,{size:"middle",wrap:!0,children:i.map(o=>a.jsx(n,{src:o.src,alt:o.tag,size:180,selected:e.includes(o.id),onChange:()=>{x(o.id)},tag:o.tag,tagColor:o.tagColor,title:o.title,description:o.description},o.id))}),a.jsxs("div",{style:{marginTop:"16px"},children:["Selected: ",e.length>0?e.join(", "):"None"]})]})}};var u,S,h;c.parameters=r(s({},c.parameters),{docs:r(s({},(u=c.parameters)==null?void 0:u.docs),{source:s({originalSource:"{}"},(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source)})});var j,v,C;l.parameters=r(s({},l.parameters),{docs:r(s({},(j=l.parameters)==null?void 0:j.docs),{source:s({originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(false);
    return <ExampleStory title="Click to toggle selection">
        <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Selectable image" size={180} selected={selected} onChange={setSelected} title="Selectable Card" description="Click to toggle selection state" />
        <div style={{
        marginTop: '16px'
      }}>Selected: {selected ? 'Yes' : 'No'}</div>
      </ExampleStory>;
  }
}`},(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source)})});var f,y,P;d.parameters=r(s({},d.parameters),{docs:r(s({},(f=d.parameters)==null?void 0:f.docs),{source:s({originalSource:`{
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
    const toggleSelection = (id: number): void => {
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
}`},(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source)})});const ee=["Primary","ControlledSelection","MultipleCards"];export{l as ControlledSelection,d as MultipleCards,c as Primary,ee as __namedExportsOrder,$ as default};
