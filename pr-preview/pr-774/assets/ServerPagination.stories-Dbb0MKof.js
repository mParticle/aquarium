import{aw as g,X as r,j as h}from"./iframe-FEOso3HU.js";import"./preload-helper-PPVm8Dsz.js";const p=87,w=(t,a)=>{const e=(t-1)*a;return Array.from({length:Math.min(a,p-e)}).map((u,c)=>{const n=e+c+1;return{key:`row-${n}`,name:`Pipeline ${n}`,type:n%2===0?"Journey":"Campaign",owner:`user${n}@example.com`}})},x=(t,a)=>new Promise(e=>{setTimeout(()=>e({items:w(t,a),total:p}),400)}),y=[{title:"Name",dataIndex:"name",key:"name"},{title:"Type",dataIndex:"type",key:"type"},{title:"Owner",dataIndex:"owner",key:"owner"}],z={title:"UX Patterns/Data Exploration/Table/Patterns/Server Pagination",component:g,parameters:{docs:{description:{component:"When the dataset is too large to fetch in one request, paginate on the server. Pass `pagination.total` from the response and update `current`/`pageSize` via `pagination.onChange`. With TanStack Query, set `placeholderData: keepPreviousData` so the previous page stays visible during the next fetch instead of flashing a skeleton."}}}},i={render:()=>{const[t,a]=r.useState(1),[e,u]=r.useState(10),[c,n]=r.useState([]),[d,m]=r.useState(0),[S,l]=r.useState(!1);return r.useEffect(()=>{let s=!0;return l(!0),x(t,e).then(({items:o,total:f})=>{s&&(n(o),m(f),l(!1))}),()=>{s=!1}},[t,e]),h.jsx(g,{columns:y,dataSource:c,rowKey:"key",loading:S,pagination:{current:t,pageSize:e,total:d,showSizeChanger:!0,showTotal:(s,o)=>`${o[0]}-${o[1]} of ${s}`,onChange:(s,o)=>{a(s),u(o)}}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [rows, setRows] = useState<Row[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      let active = true;
      setLoading(true);
      fakeFetch(page, pageSize).then(({
        items,
        total: t
      }) => {
        if (!active) return;
        setRows(items);
        setTotal(t);
        setLoading(false);
      });
      return () => {
        active = false;
      };
    }, [page, pageSize]);
    return <Table<Row> columns={columns} dataSource={rows} rowKey="key" loading={loading} pagination={{
      current: page,
      pageSize,
      total,
      showSizeChanger: true,
      showTotal: (t, range) => \`\${range[0]}-\${range[1]} of \${t}\`,
      onChange: (next, nextSize) => {
        setPage(next);
        setPageSize(nextSize);
      }
    }} />;
  }
}`,...i.parameters?.docs?.source}}};const k=["Default"];export{i as Default,k as __namedExportsOrder,z as default};
