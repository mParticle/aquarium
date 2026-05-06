import{ar as r,j as e,s,F as m,aN as u}from"./iframe-DcPIhfmk.js";import"./preload-helper-PPVm8Dsz.js";const l=[{key:"1",name:"Welcome Series",environment:"production",outputs:["Braze","Cortex"]},{key:"2",name:"Black Friday",environment:"staging",outputs:["Braze"]},{key:"3",name:"Onboarding Quiz",environment:"development",outputs:["mP Analytics","Google Analytics"]}],c={production:{color:"blue",label:"Prod"},staging:{color:"gold",label:"Staging"},development:{color:"purple",label:"Dev"}},f={title:"UX Patterns/Data Exploration/Table/Cell Types/Tag",component:r,parameters:{docs:{description:{component:"Use `Tag` for categorical labels (environment, type, output destination). Map the enum value to a stable color and label so the same value always renders the same way across screens."}}}},d=[{title:"Name",dataIndex:"name",key:"name"},{title:"Environment",dataIndex:"environment",key:"environment",render:o=>{const{color:a,label:i}=c[o];return e.jsx(s,{color:a,children:i})}}],t={name:"Single tag from enum",render:()=>e.jsx(r,{columns:d,dataSource:l,pagination:!1})},p=[{title:"Name",dataIndex:"name",key:"name"},{title:"Outputs",dataIndex:"outputs",key:"outputs",render:o=>e.jsx(m,{gap:u,wrap:!0,children:o.map(a=>e.jsx(s,{color:"default",children:a},a))})}],n={name:"Multiple tags",parameters:{docs:{description:{story:"Render a list of tags for multi-value attributes. Wrap the list so it reflows on narrow columns."}}},render:()=>e.jsx(r,{columns:p,dataSource:l,pagination:!1})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Single tag from enum',
  render: () => <Table<Row> columns={enumTagColumns} dataSource={data} pagination={false} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Multiple tags',
  parameters: {
    docs: {
      description: {
        story: 'Render a list of tags for multi-value attributes. Wrap the list so it reflows on narrow columns.'
      }
    }
  },
  render: () => <Table<Row> columns={tagListColumns} dataSource={data} pagination={false} />
}`,...n.parameters?.docs?.source}}};const y=["EnumTag","TagList"];export{t as EnumTag,n as TagList,y as __namedExportsOrder,f as default};
