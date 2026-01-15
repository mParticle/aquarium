var v=Object.defineProperty,P=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(i,t,o)=>t in i?v(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,r=(i,t)=>{for(var o in t||(t={}))f.call(t,o)&&l(i,o,t[o]);if(d)for(var o of d(t))C.call(t,o)&&l(i,o,t[o]);return i},c=(i,t)=>P(i,S(t));import{j as p}from"./jsx-runtime-C9TrHvcC.js";import{ag as u,a as w}from"./NavigationItemsService-CJL4LgQr.js";import{r as b}from"./index-3OP4wdng.js";import"./ErrorStateIcon-Dp1Pf6u7.js";import"./SuccessStateIcon-CTLeNL24.js";import"./WarningStateIcon-CZ4g3qF6.js";import"./_baseClone-DwBCp-Ss.js";import{E as y}from"./ExampleStory-DZ6wfbJF.js";import"./LightTheme-vAO8T2BA.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-lRxKH540.js";import"./WarningFilled-D6ijQqgK.js";const N={title:"POC/ImageCard",component:u,args:{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Sample image",size:180,selected:!1,loading:!1,title:"Image Card",description:"This is a sample image card"},argTypes:{selected:{control:"boolean"},loading:{control:"boolean"},tagColor:{control:"select",options:["default","blue","green","red","orange","purple","gold"]}}},s={render:()=>{const[i,t]=b.useState([]),o=[{id:1,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green",title:"Product A",description:"First product option"},{id:2,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",title:"Product B",description:"Second product option"},{id:3,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",tag:"Live",tagColor:"green",title:"Product C",description:"Third product option"},{id:4,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green",title:"Product D",description:"Fourth product option"},{id:5,src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",title:"Product E",description:"Fifth product option"},{id:6,src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",tag:"Live",tagColor:"green",title:"Product F",description:"Sixth product option"}],h=e=>{t(a=>a.includes(e)?a.filter(j=>j!==e):[...a,e])};return p.jsx(y,{title:"Multiple image selection",children:p.jsx(w,{size:"middle",wrap:!0,children:o.map(e=>p.jsx(u,{src:e.src,alt:e.tag,size:180,selected:i.includes(e.id),onChange:()=>{h(e.id)},tag:e.tag,tagColor:e.tagColor,title:e.title,description:e.description},e.id))})})}};var g,n,m;s.parameters=c(r({},s.parameters),{docs:c(r({},(g=s.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
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
      </ExampleStory>;
  }
}`},(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source)})});const Q=["MultipleCards"];export{s as MultipleCards,Q as __namedExportsOrder,N as default};
