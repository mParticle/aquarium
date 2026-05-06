import{aw as o,j as e,aJ as r,E as s,I as l}from"./iframe-TPzgAJbn.js";import"./preload-helper-PPVm8Dsz.js";const n=[{title:"Name",dataIndex:"name",key:"name"},{title:"Type",dataIndex:"type",key:"type"}],i={title:"UX Patterns/Data Exploration/Table/Patterns/Empty State",component:o,parameters:{docs:{description:{component:"Use `locale.emptyText` to show an `<Empty>` block when the table has no rows. Provide a primary CTA that gets the user past the empty state, and a default button for context (docs, learn more)."}}}},t={name:"No data yet",render:()=>e.jsx(o,{columns:n,dataSource:[],pagination:!1,locale:{emptyText:e.jsx(r,{style:{minHeight:320},children:e.jsx(s,{title:"No data models yet.",description:"Create a data model to sync your data from the warehouse.",primaryButton:{text:"Add Data Model",icon:e.jsx(l,{name:"add",size:"sm"}),onClick:()=>console.log("add clicked")},defaultButton:{text:"Learn More",onClick:()=>console.log("learn more clicked")}})})}})},a={name:"No results from search",parameters:{docs:{description:{story:"When a search or filter returns no rows, use distinct copy. The user already has data — this state is about helping them adjust their query."}}},render:()=>e.jsx(o,{columns:n,dataSource:[],pagination:!1,locale:{emptyText:e.jsx(r,{style:{minHeight:320},children:e.jsx(s,{title:"No results found",description:"Try adjusting your search or clear the filters."})})}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'No data yet',
  render: () => <Table<Row> columns={columns} dataSource={[]} pagination={false} locale={{
    emptyText: <Center style={{
      minHeight: 320
    }}>
            <Empty title="No data models yet." description="Create a data model to sync your data from the warehouse." primaryButton={{
        text: 'Add Data Model',
        icon: <Icon name="add" size="sm" />,
        onClick: () => console.log('add clicked')
      }} defaultButton={{
        text: 'Learn More',
        onClick: () => console.log('learn more clicked')
      }} />
          </Center>
  }} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'No results from search',
  parameters: {
    docs: {
      description: {
        story: 'When a search or filter returns no rows, use distinct copy. The user already has data — this state is about helping them adjust their query.'
      }
    }
  },
  render: () => <Table<Row> columns={columns} dataSource={[]} pagination={false} locale={{
    emptyText: <Center style={{
      minHeight: 320
    }}>
            <Empty title="No results found" description="Try adjusting your search or clear the filters." />
          </Center>
  }} />
}`,...a.parameters?.docs?.source}}};const m=["NoData","NoResults"];export{t as NoData,a as NoResults,m as __namedExportsOrder,i as default};
