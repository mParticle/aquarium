import{j as l}from"./jsx-runtime-u17CrQMm.js";import{y as t}from"./UnauthorizedTooltip-DInzTCbR.js";const a={title:"Components/Data Entry/TreeSelect",component:t,args:{}},e={render:()=>l.jsx(t,{style:{width:"100%",minWidth:"200px"},treeDefaultExpandAll:!0,multiple:!0,dropdownStyle:{maxHeight:400,overflow:"auto"},placement:"bottomLeft",placeholder:"Select inputs",treeData:[{title:"Platforms",key:"platforms",selectable:!1,children:[{title:"iOS",key:"app-1",value:"app-1"},{title:"Android",key:"app-2",value:"app-2"},{title:"Web",key:"app-3",value:"app-3"}]},{title:"Feeds",key:"feeds",selectable:!1,children:[{title:"Braze",key:"feed-1",value:"feed-1",children:[{title:"Braze Dev",key:"feed-1-1",value:"feed-1-1"},{title:"Braze Prod",key:"feed-1-2",value:"feed-1-2"}]},{title:"Webhook",key:"feed-2",value:"feed-2",children:[{title:"Webhook test",key:"feed-2-1",value:"feed-2-2"}]}]}]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const r=["Primary"],i=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,__namedExportsOrder:r,default:a},Symbol.toStringTag,{value:"Module"}));export{i as T,a as m};
