import{ar as a,j as t,aE as o,E as r}from"./iframe-7ESLDSeu.js";import"./preload-helper-PPVm8Dsz.js";const n=[{title:"Name",dataIndex:"name",key:"name"},{title:"Type",dataIndex:"type",key:"type"}],l={title:"UX Patterns/Data Exploration/Table/Patterns/Error State",component:a,parameters:{docs:{description:{component:'When the fetch fails, replace the table contents with `<Empty state="error">` plus a Retry button. Use the upstream error message when it is human-readable; fall back to a generic message otherwise. Avoid showing partial/stale rows mixed with an error banner.'}}}},e={render:()=>t.jsx(a,{columns:n,dataSource:[],pagination:!1,locale:{emptyText:t.jsx(o,{style:{minHeight:320},children:t.jsx(r,{state:"error",title:"Oops! Something went wrong.",description:"We couldn't load data models. Try again, or contact support if the issue continues.",defaultButton:{text:"Retry",onClick:()=>console.log("retry clicked")}})})}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Table<Row> columns={columns} dataSource={[]} pagination={false} locale={{
    emptyText: <Center style={{
      minHeight: 320
    }}>
            <Empty state="error" title="Oops! Something went wrong." description="We couldn't load data models. Try again, or contact support if the issue continues." defaultButton={{
        text: 'Retry',
        onClick: () => console.log('retry clicked')
      }} />
          </Center>
  }} />
}`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,l as default};
