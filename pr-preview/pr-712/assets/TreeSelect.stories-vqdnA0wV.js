var u=Object.defineProperty,c=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var i=(l,e,t)=>e in l?u(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,r=(l,e)=>{for(var t in e||(e={}))y.call(e,t)&&i(l,t,e[t]);if(d)for(var t of d(e))k.call(e,t)&&i(l,t,e[t]);return l},o=(l,e)=>c(l,m(e));import{j as v}from"./jsx-runtime-C9TrHvcC.js";import{J as n}from"./NavigationItemsService-7KzyURgV.js";const h={title:"Components/Data Entry/TreeSelect",component:n,args:{}},a={render:()=>v.jsx(n,{style:{width:"100%",minWidth:"200px"},treeDefaultExpandAll:!0,multiple:!0,dropdownStyle:{maxHeight:400,overflow:"auto"},placement:"bottomLeft",placeholder:"Select inputs",treeData:[{title:"Platforms",key:"platforms",selectable:!1,children:[{title:"iOS",key:"app-1",value:"app-1"},{title:"Android",key:"app-2",value:"app-2"},{title:"Web",key:"app-3",value:"app-3"}]},{title:"Feeds",key:"feeds",selectable:!1,children:[{title:"Braze",key:"feed-1",value:"feed-1",children:[{title:"Braze Dev",key:"feed-1-1",value:"feed-1-1"},{title:"Braze Prod",key:"feed-1-2",value:"feed-1-2"}]},{title:"Webhook",key:"feed-2",value:"feed-2",children:[{title:"Webhook test",key:"feed-2-1",value:"feed-2-2"}]}]}]})};var p,s,f;a.parameters=o(r({},a.parameters),{docs:o(r({},(p=a.parameters)==null?void 0:p.docs),{source:r({originalSource:`{
  render: () => {
    return <TreeSelect style={{
      width: '100%',
      minWidth: '200px'
    }} treeDefaultExpandAll multiple dropdownStyle={{
      maxHeight: 400,
      overflow: 'auto'
    }} placement="bottomLeft" placeholder="Select inputs" treeData={[{
      title: 'Platforms',
      key: 'platforms',
      selectable: false,
      children: [{
        title: 'iOS',
        key: 'app-1',
        value: 'app-1'
      }, {
        title: 'Android',
        key: 'app-2',
        value: 'app-2'
      }, {
        title: 'Web',
        key: 'app-3',
        value: 'app-3'
      }]
    }, {
      title: 'Feeds',
      key: 'feeds',
      selectable: false,
      children: [{
        title: 'Braze',
        key: 'feed-1',
        value: 'feed-1',
        children: [{
          title: 'Braze Dev',
          key: 'feed-1-1',
          value: 'feed-1-1'
        }, {
          title: 'Braze Prod',
          key: 'feed-1-2',
          value: 'feed-1-2'
        }]
      }, {
        title: 'Webhook',
        key: 'feed-2',
        value: 'feed-2',
        children: [{
          title: 'Webhook test',
          key: 'feed-2-1',
          value: 'feed-2-2'
        }]
      }]
    }]} />;
  }
}`},(f=(s=a.parameters)==null?void 0:s.docs)==null?void 0:f.source)})});const b=["Primary"],z=Object.freeze(Object.defineProperty({__proto__:null,Primary:a,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{z as T,h as m};
