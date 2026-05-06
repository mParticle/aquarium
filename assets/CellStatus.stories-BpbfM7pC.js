import{ar as r,j as e,B as i,F as c,T as m,aR as p,aK as y}from"./iframe-7ESLDSeu.js";import"./preload-helper-PPVm8Dsz.js";const l=[{key:"1",name:"Cortex pipeline",status:"running",lastRun:"Last run 2 min ago"},{key:"2",name:"Audience sync",status:"paused",lastRun:"Paused yesterday"},{key:"3",name:"Data export",status:"failed",lastRun:"Failed 5 min ago"},{key:"4",name:"New journey",status:"draft",lastRun:"Never run"}],d={running:{status:"success",label:"Running"},paused:{status:"warning",label:"Paused"},failed:{status:"error",label:"Failed"},draft:{status:"default",label:"Draft"}},h={title:"UX Patterns/Data Exploration/Table/Cell Types/Status",component:r,parameters:{docs:{description:{component:"Use `Badge` for system status (running, failed, draft). Reserve `Tag` for labels and environments. Status cells are left-aligned and may include a secondary line for context like timestamps."}}}},f=[{title:"Name",dataIndex:"name",key:"name"},{title:"Status",dataIndex:"status",key:"status",render:o=>{const{status:a,label:n}=d[o];return e.jsx(i,{status:a,text:n})}}],t={render:()=>e.jsx(r,{columns:f,dataSource:l,pagination:!1})},x=[{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"status",render:(o,a)=>{const{status:n,label:u}=d[a.status];return e.jsxs(c,{vertical:!0,children:[e.jsx(i,{status:n,text:u}),e.jsx(m.Text,{type:"secondary",style:{fontSize:y,paddingLeft:14,color:p},children:a.lastRun})]})}}],s={name:"With secondary line",parameters:{docs:{description:{story:"Pair the badge with a secondary line for run timing, error reason, or other contextual detail."}}},render:()=>e.jsx(r,{columns:x,dataSource:l,pagination:!1})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Table<Row> columns={statusColumns} dataSource={data} pagination={false} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With secondary line',
  parameters: {
    docs: {
      description: {
        story: 'Pair the badge with a secondary line for run timing, error reason, or other contextual detail.'
      }
    }
  },
  render: () => <Table<Row> columns={statusWithSecondaryColumns} dataSource={data} pagination={false} />
}`,...s.parameters?.docs?.source}}};const b=["Default","WithSecondaryLine"];export{t as Default,s as WithSecondaryLine,b as __namedExportsOrder,h as default};
