import{ar as v,G as r,j as e,F as o,z as c,t as f,o as S,V as b,I as x,ag as y,aN as w,s as u}from"./iframe-DcPIhfmk.js";import"./preload-helper-PPVm8Dsz.js";const p={production:{color:"blue",label:"Prod"},staging:{color:"gold",label:"Staging"},development:{color:"purple",label:"Dev"}},C=[{key:"1",name:"Welcome Series",status:"active",environment:"production"},{key:"2",name:"Black Friday",status:"paused",environment:"staging"},{key:"3",name:"Onboarding Quiz",status:"active",environment:"development"},{key:"4",name:"Cortex Pipeline",status:"archived",environment:"production"},{key:"5",name:"Cart Abandonment",status:"active",environment:"production"}],j=[{title:"Name",dataIndex:"name",key:"name"},{title:"Status",dataIndex:"status",key:"status",render:a=>a.charAt(0).toUpperCase()+a.slice(1)},{title:"Environment",dataIndex:"environment",key:"environment",render:a=>{const{color:s,label:t}=p[a];return e.jsx(u,{color:s,children:t})}}],T={title:"UX Patterns/Data Exploration/Table/Patterns/Inline Toolbar Filters",component:v,parameters:{docs:{description:{component:"Recommended default. Surface high-value filters inline in a toolbar above the table: search on the right, 1–3 frequent filters on the left. Active filter state stays visible at all times. Reach for the Modal Filters pattern only when there are too many filter dimensions to fit in the toolbar."}}}},i={render:()=>{const[a,s]=r.useState(""),[t,d]=r.useState("all"),[l,m]=r.useState([]),h=r.useMemo(()=>C.filter(n=>!(a&&!n.name.toLowerCase().includes(a.toLowerCase())||t!=="all"&&n.status!==t||l.length>0&&!l.includes(n.environment))),[a,t,l]);return e.jsxs(o,{vertical:!0,gap:c,children:[e.jsxs(o,{align:"center",justify:"space-between",gap:c,wrap:!0,children:[e.jsxs(o,{align:"center",gap:c,wrap:!0,children:[e.jsx(f,{value:t,onChange:d,options:[{label:"All",value:"all"},{label:"Active",value:"active"},{label:"Paused",value:"paused"},{label:"Archived",value:"archived"}]}),e.jsx(S,{mode:"multiple",allowClear:!0,placeholder:"Environment",style:{minWidth:220},value:l,onChange:m,options:[{label:"Production",value:"production"},{label:"Staging",value:"staging"},{label:"Development",value:"development"}]})]}),e.jsx(b,{allowClear:!0,prefix:e.jsx(x,{size:"sm",color:"brand",name:"search"}),placeholder:"Search by name",style:{width:240},value:a,onChange:n=>s(n.target.value)})]}),(t!=="all"||l.length>0||a)&&e.jsxs(o,{gap:w,wrap:!0,style:{marginTop:y},children:[t!=="all"&&e.jsxs(u,{closable:!0,onClose:()=>d("all"),color:"default",children:["Status: ",t]}),l.map(n=>e.jsxs(u,{closable:!0,onClose:()=>m(l.filter(g=>g!==n)),color:"default",children:["Env: ",p[n].label]},n)),a&&e.jsxs(u,{closable:!0,onClose:()=>s(""),color:"default",children:["Search: “",a,"”"]})]}),e.jsx(v,{columns:j,dataSource:h,pagination:!1,rowKey:"key"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState<Status>('all');
    const [environments, setEnvironments] = useState<Environment[]>([]);
    const filtered = useMemo(() => data.filter(row => {
      if (search && !row.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (status !== 'all' && row.status !== status) return false;
      if (environments.length > 0 && !environments.includes(row.environment)) return false;
      return true;
    }), [search, status, environments]);
    return <Flex vertical gap={SizeSm}>
        <Flex align="center" justify="space-between" gap={SizeSm} wrap>
          <Flex align="center" gap={SizeSm} wrap>
            <Segmented value={status} onChange={setStatus as ISegmentedProps['onChange']} options={[{
            label: 'All',
            value: 'all'
          }, {
            label: 'Active',
            value: 'active'
          }, {
            label: 'Paused',
            value: 'paused'
          }, {
            label: 'Archived',
            value: 'archived'
          }]} />
            <Select<Environment[]> mode="multiple" allowClear placeholder="Environment" style={{
            minWidth: 220
          }} value={environments} onChange={setEnvironments} options={[{
            label: 'Production',
            value: 'production'
          }, {
            label: 'Staging',
            value: 'staging'
          }, {
            label: 'Development',
            value: 'development'
          }]} />
          </Flex>
          <Input allowClear prefix={<Icon size="sm" color="brand" name="search" />} placeholder="Search by name" style={{
          width: 240
        }} value={search} onChange={e => setSearch(e.target.value)} />
        </Flex>

        {(status !== 'all' || environments.length > 0 || search) && <Flex gap={SizeXxs} wrap style={{
        marginTop: MarginXs
      }}>
            {status !== 'all' && <Tag closable onClose={() => setStatus('all')} color="default">
                Status: {status}
              </Tag>}
            {environments.map(env => <Tag key={env} closable onClose={() => setEnvironments(environments.filter(e => e !== env))} color="default">
                Env: {ENV_MAP[env].label}
              </Tag>)}
            {search && <Tag closable onClose={() => setSearch('')} color="default">
                Search: &ldquo;{search}&rdquo;
              </Tag>}
          </Flex>}

        <Table<Row> columns={columns} dataSource={filtered} pagination={false} rowKey="key" />
      </Flex>;
  }
}`,...i.parameters?.docs?.source}}};const k=["Default"];export{i as Default,k as __namedExportsOrder,T as default};
