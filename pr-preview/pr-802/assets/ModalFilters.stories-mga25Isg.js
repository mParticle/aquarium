import{ar as I,G as c,j as t,F as r,z as h,i as S,aN as n,I as b,s as T,V as j,ag as O,af as P,T as p,o as f,v as g,J as E}from"./iframe-CJHsXdCQ.js";import"./preload-helper-PPVm8Dsz.js";const $=[{key:"1",name:"Welcome Series",status:"active",environment:"production",outputs:["Braze"],mpId:"1234"},{key:"2",name:"Black Friday",status:"paused",environment:"staging",outputs:["Braze","Cortex"],mpId:"5678"},{key:"3",name:"Onboarding Quiz",status:"active",environment:"development",outputs:["mP Analytics"],mpId:"9012"},{key:"4",name:"Cortex Pipeline",status:"archived",environment:"production",outputs:["Google Analytics"],mpId:"3456"},{key:"5",name:"Cart Abandonment",status:"draft",environment:"production",outputs:["Braze","mP Analytics"],mpId:"7890"}],C={status:[],environments:[],outputs:[],mpId:"",sort:"recent"},B=[{title:"Name",dataIndex:"name",key:"name"},{title:"Status",dataIndex:"status",key:"status"},{title:"Environment",dataIndex:"environment",key:"environment"},{title:"Outputs",dataIndex:"outputs",key:"outputs",render:y=>t.jsx(r,{gap:n,wrap:!0,children:y.map(o=>t.jsx(T,{color:"default",children:o},o))})},{title:"mPID",dataIndex:"mpId",key:"mpId"}],L={title:"UX Patterns/Data Exploration/Table/Patterns/Modal Filters",component:I,parameters:{docs:{description:{component:"Escape hatch for tables with many filter dimensions (5+) where an inline toolbar would be too crowded. The modal collects sort + filter state behind an Apply button. Always pair with visible filter chips beneath the toolbar so users can see what is currently applied without re-opening the modal."}}}},x={render:()=>{const[y,o]=c.useState(!1),[a,v]=c.useState(C),[s,i]=c.useState(C),[u,k]=c.useState(""),w=()=>{i(a),o(!0)},A=()=>{v(s),o(!1)},z=()=>o(!1),d=e=>v({...a,...e}),F=c.useMemo(()=>$.filter(e=>!(u&&!e.name.toLowerCase().includes(u.toLowerCase())||a.status.length&&!a.status.includes(e.status)||a.environments.length&&!a.environments.includes(e.environment)||a.outputs.length&&!e.outputs.some(l=>a.outputs.includes(l))||a.mpId&&!e.mpId.includes(a.mpId))).sort((e,l)=>a.sort==="oldest"?e.name.localeCompare(l.name):l.name.localeCompare(e.name)),[a,u]),m=[...a.status.map(e=>({key:`status-${e}`,label:`Status: ${e}`,onClose:()=>d({status:a.status.filter(l=>l!==e)})})),...a.environments.map(e=>({key:`env-${e}`,label:`Env: ${e}`,onClose:()=>d({environments:a.environments.filter(l=>l!==e)})})),...a.outputs.map(e=>({key:`out-${e}`,label:`Output: ${e}`,onClose:()=>d({outputs:a.outputs.filter(l=>l!==e)})})),...a.mpId?[{key:"mpId",label:`mPID: ${a.mpId}`,onClose:()=>d({mpId:""})}]:[]];return t.jsxs(t.Fragment,{children:[t.jsxs(r,{vertical:!0,gap:h,children:[t.jsxs(r,{align:"center",justify:"space-between",gap:h,children:[t.jsx(S,{onClick:w,children:t.jsxs(r,{align:"center",gap:n,children:[t.jsx(b,{color:"inherit",name:"filter",size:"sm"}),t.jsx("span",{children:"Sort & Filters"}),m.length>0&&t.jsx(T,{color:"blue",children:m.length})]})}),t.jsx(j,{allowClear:!0,prefix:t.jsx(b,{size:"sm",color:"brand",name:"search"}),placeholder:"Search by name",style:{width:240},value:u,onChange:e=>k(e.target.value)})]}),m.length>0&&t.jsxs(r,{gap:n,wrap:!0,style:{marginTop:O},children:[m.map(e=>t.jsx(T,{closable:!0,onClose:e.onClose,color:"default",children:e.label},e.key)),t.jsx(S,{type:"link",size:"small",onClick:()=>v(C),children:"Clear all"})]}),t.jsx(I,{columns:B,dataSource:F,pagination:!1,rowKey:"key"})]}),t.jsx(P,{open:y,onCancel:z,onOk:A,okText:"Apply",cancelText:"Cancel",width:520,title:t.jsx(p.Text,{strong:!0,size:"lg",children:"Sort & Filters"}),children:t.jsxs(r,{vertical:!0,gap:h,children:[t.jsxs("section",{children:[t.jsx(p.Text,{strong:!0,children:"Sort"}),t.jsx(f,{style:{width:"100%",marginTop:n},value:s.sort,onChange:e=>i({...s,sort:e}),options:[{value:"recent",label:"Recent first"},{value:"oldest",label:"Oldest first"}]})]}),t.jsx(g,{style:{margin:0}}),t.jsxs("section",{children:[t.jsx(p.Text,{strong:!0,children:"Status"}),t.jsx(r,{gap:h,wrap:!0,style:{marginTop:n},children:["draft","active","paused","archived"].map(e=>t.jsx(E,{checked:s.status.includes(e),onChange:l=>i({...s,status:l.target.checked?[...s.status,e]:s.status.filter(D=>D!==e)}),children:e},e))})]}),t.jsx(g,{style:{margin:0}}),t.jsxs("section",{children:[t.jsx(p.Text,{strong:!0,children:"Environment"}),t.jsx(f,{mode:"multiple",style:{width:"100%",marginTop:n},placeholder:"Any",value:s.environments,onChange:e=>i({...s,environments:e}),options:[{value:"production",label:"Production"},{value:"staging",label:"Staging"},{value:"development",label:"Development"}]})]}),t.jsx(g,{style:{margin:0}}),t.jsxs("section",{children:[t.jsx(p.Text,{strong:!0,children:"Outputs"}),t.jsx(f,{mode:"multiple",style:{width:"100%",marginTop:n},placeholder:"Any",value:s.outputs,onChange:e=>i({...s,outputs:e}),options:[{value:"Braze",label:"Braze"},{value:"Cortex",label:"Cortex"},{value:"mP Analytics",label:"mP Analytics"},{value:"Google Analytics",label:"Google Analytics"}]})]}),t.jsx(g,{style:{margin:0}}),t.jsxs("section",{children:[t.jsx(p.Text,{strong:!0,children:"mPID"}),t.jsx(j,{allowClear:!0,style:{marginTop:n},placeholder:"e.g. 1234",value:s.mpId,onChange:e=>i({...s,mpId:e.target.value})})]})]})})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [applied, setApplied] = useState<Filters>(DEFAULTS);
    const [draft, setDraft] = useState<Filters>(DEFAULTS);
    const [search, setSearch] = useState('');
    const showModal = () => {
      setDraft(applied);
      setOpen(true);
    };
    const handleApply = () => {
      setApplied(draft);
      setOpen(false);
    };
    const handleCancel = () => setOpen(false);
    const clearOne = (patch: Partial<Filters>) => setApplied({
      ...applied,
      ...patch
    });
    const filtered = useMemo(() => data.filter(row => {
      if (search && !row.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (applied.status.length && !applied.status.includes(row.status)) return false;
      if (applied.environments.length && !applied.environments.includes(row.environment)) return false;
      if (applied.outputs.length && !row.outputs.some(o => applied.outputs.includes(o))) return false;
      if (applied.mpId && !row.mpId.includes(applied.mpId)) return false;
      return true;
    }).sort((a, b) => applied.sort === 'oldest' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)), [applied, search]);
    const activeChips = [...applied.status.map(s => ({
      key: \`status-\${s}\`,
      label: \`Status: \${s}\`,
      onClose: () => clearOne({
        status: applied.status.filter(x => x !== s)
      })
    })), ...applied.environments.map(e => ({
      key: \`env-\${e}\`,
      label: \`Env: \${e}\`,
      onClose: () => clearOne({
        environments: applied.environments.filter(x => x !== e)
      })
    })), ...applied.outputs.map(o => ({
      key: \`out-\${o}\`,
      label: \`Output: \${o}\`,
      onClose: () => clearOne({
        outputs: applied.outputs.filter(x => x !== o)
      })
    })), ...(applied.mpId ? [{
      key: 'mpId',
      label: \`mPID: \${applied.mpId}\`,
      onClose: () => clearOne({
        mpId: ''
      })
    }] : [])];
    return <>
        <Flex vertical gap={SizeSm}>
          <Flex align="center" justify="space-between" gap={SizeSm}>
            <Button onClick={showModal}>
              <Flex align="center" gap={SizeXxs}>
                <Icon color="inherit" name="filter" size="sm" />
                <span>Sort &amp; Filters</span>
                {activeChips.length > 0 && <Tag color="blue">{activeChips.length}</Tag>}
              </Flex>
            </Button>
            <Input allowClear prefix={<Icon size="sm" color="brand" name="search" />} placeholder="Search by name" style={{
            width: 240
          }} value={search} onChange={e => setSearch(e.target.value)} />
          </Flex>

          {activeChips.length > 0 && <Flex gap={SizeXxs} wrap style={{
          marginTop: MarginXs
        }}>
              {activeChips.map(c => <Tag key={c.key} closable onClose={c.onClose} color="default">
                  {c.label}
                </Tag>)}
              <Button type="link" size="small" onClick={() => setApplied(DEFAULTS)}>
                Clear all
              </Button>
            </Flex>}

          <Table<Row> columns={columns} dataSource={filtered} pagination={false} rowKey="key" />
        </Flex>

        <Modal open={open} onCancel={handleCancel} onOk={handleApply} okText="Apply" cancelText="Cancel" width={520} title={<Typography.Text strong size="lg">
              Sort &amp; Filters
            </Typography.Text>}>
          <Flex vertical gap={SizeSm}>
            <section>
              <Typography.Text strong>Sort</Typography.Text>
              <Select<SortOrder> style={{
              width: '100%',
              marginTop: SizeXxs
            }} value={draft.sort} onChange={v => setDraft({
              ...draft,
              sort: v
            })} options={[{
              value: 'recent',
              label: 'Recent first'
            }, {
              value: 'oldest',
              label: 'Oldest first'
            }]} />
            </section>
            <Divider style={{
            margin: 0
          }} />
            <section>
              <Typography.Text strong>Status</Typography.Text>
              <Flex gap={SizeSm} wrap style={{
              marginTop: SizeXxs
            }}>
                {(['draft', 'active', 'paused', 'archived'] as Status[]).map(s => <Checkbox key={s} checked={draft.status.includes(s)} onChange={e => setDraft({
                ...draft,
                status: e.target.checked ? [...draft.status, s] : draft.status.filter(x => x !== s)
              })}>
                    {s}
                  </Checkbox>)}
              </Flex>
            </section>
            <Divider style={{
            margin: 0
          }} />
            <section>
              <Typography.Text strong>Environment</Typography.Text>
              <Select<Environment[]> mode="multiple" style={{
              width: '100%',
              marginTop: SizeXxs
            }} placeholder="Any" value={draft.environments} onChange={v => setDraft({
              ...draft,
              environments: v
            })} options={[{
              value: 'production',
              label: 'Production'
            }, {
              value: 'staging',
              label: 'Staging'
            }, {
              value: 'development',
              label: 'Development'
            }]} />
            </section>
            <Divider style={{
            margin: 0
          }} />
            <section>
              <Typography.Text strong>Outputs</Typography.Text>
              <Select<Output[]> mode="multiple" style={{
              width: '100%',
              marginTop: SizeXxs
            }} placeholder="Any" value={draft.outputs} onChange={v => setDraft({
              ...draft,
              outputs: v
            })} options={[{
              value: 'Braze',
              label: 'Braze'
            }, {
              value: 'Cortex',
              label: 'Cortex'
            }, {
              value: 'mP Analytics',
              label: 'mP Analytics'
            }, {
              value: 'Google Analytics',
              label: 'Google Analytics'
            }]} />
            </section>
            <Divider style={{
            margin: 0
          }} />
            <section>
              <Typography.Text strong>mPID</Typography.Text>
              <Input allowClear style={{
              marginTop: SizeXxs
            }} placeholder="e.g. 1234" value={draft.mpId} onChange={e => setDraft({
              ...draft,
              mpId: e.target.value
            })} />
            </section>
          </Flex>
        </Modal>
      </>;
  }
}`,...x.parameters?.docs?.source}}};const G=["Default"];export{x as Default,G as __namedExportsOrder,L as default};
