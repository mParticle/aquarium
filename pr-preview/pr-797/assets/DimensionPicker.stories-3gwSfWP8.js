import{aK as o,j as e,G as i,F as v,aL as k,T as c,aM as b,aN as w}from"./iframe-CcEJbbNh.js";import"./preload-helper-PPVm8Dsz.js";const n=[{key:"campaign",label:"Campaign",icon:"flag"},{key:"creative",label:"Creative",icon:"edit"},{key:"geographic",label:"Geographic",icon:"placeholder"},{key:"layout",label:"Layout",icon:"grid"},{key:"page",label:"Page",icon:"openTab"},{key:"partner",label:"Partner",icon:"organization"},{key:"user",label:"User",icon:"user"},{key:"additional",label:"Additional Dimensions",icon:"add"}],a=[{key:"campaign-1",label:"Campaign ID",categoryKey:"campaign",description:"Unique identifier for the campaign."},{key:"campaign-2",label:"Campaign Name",categoryKey:"campaign",description:"The display name of the campaign."},{key:"campaign-3",label:"Campaign Status",categoryKey:"campaign",description:"Current status of the campaign (active, paused, completed)."},{key:"creative-1",label:"Creative ID",categoryKey:"creative",description:"Unique identifier for the creative asset."},{key:"creative-2",label:"Creative Name",categoryKey:"creative",description:"The display name of the creative."},{key:"geo-1",label:"Country",categoryKey:"geographic",description:"The country where the user is located."},{key:"geo-2",label:"Region",categoryKey:"geographic",description:"Geographic region or state."},{key:"geo-3",label:"City",categoryKey:"geographic",description:"City where the user is located."},{key:"layout-1",label:"Layout ID",categoryKey:"layout",description:"Unique identifier for the layout configuration."},{key:"layout-2",label:"Layout Name",categoryKey:"layout",description:"Display name of the layout."},...Array.from({length:15},(t,r)=>({key:`page-${r+1}`,label:r===0?"Dimension menu item lorem":"Lorem dimension menu item",categoryKey:"page",description:"Mauris enim cursus tristique et consequat ultricies amet luctus."})),{key:"partner-1",label:"Partner ID",categoryKey:"partner",description:"Unique identifier for the partner."},{key:"partner-2",label:"Partner Name",categoryKey:"partner",description:"Display name of the partner organization."},{key:"user-1",label:"User ID",categoryKey:"user",description:"Unique identifier for the user."},{key:"user-2",label:"User Segment",categoryKey:"user",description:"Audience segment the user belongs to."},{key:"add-1",label:"Custom Dimension 1",categoryKey:"additional",description:"Custom dimension defined by the user."}],P={title:"UX Patterns/Data Exploration/Dimension Picker",component:o,parameters:{layout:"centered"},args:{categories:n,items:a}},T=()=>{const[t,r]=i.useState(["page-3","page-7"]);return e.jsx(o,{categories:n,items:a,value:t,onChange:r,onApply:s=>alert(`Applied ${s.length} dimensions`)})},D=()=>{const[t,r]=i.useState(["campaign-1"]);return e.jsx(o,{categories:n,items:a,value:t,onChange:r,onApply:s=>console.log("Applied:",s)})},l={render:()=>e.jsx(T,{}),parameters:{docs:{description:{story:"Default picker with pre-selected items. Navigate categories, use the search box to filter, and hover items to see descriptions."}}}},p={args:{showDescriptionPanel:!1},parameters:{docs:{description:{story:"Omit the description panel when items are self-explanatory or space is limited."}}}},d={args:{showApplyButton:!1,showClearAllButton:!1},parameters:{docs:{description:{story:"Remove the footer when selection changes should apply immediately via `onChange` without an explicit confirm step."}}}},m={render:()=>e.jsx(D,{}),parameters:{docs:{description:{story:"Fully controlled mode — the parent owns the selection state and the picker is kept in sync via `value` and `onChange`."}}}},y={args:{loading:!0},parameters:{docs:{description:{story:"Show a loading state while category items are being fetched asynchronously."}}}},g={render:()=>{const[t,r]=i.useState([]);return e.jsx(o,{categories:n,items:a,size:"compact",value:t,onChange:r})},parameters:{docs:{description:{story:"Compact size reduces panel heights and padding — useful in space-constrained layouts."}}}},S={campaign:2,geographic:1,page:7},u={render:()=>{const[t,r]=i.useState([]);return e.jsx(o,{categories:n,items:a,value:t,onChange:r,renderCategory:(s,C)=>e.jsxs(v,{align:"center",style:{flex:1,gap:k},children:[e.jsx(c.Text,{size:"sm",style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.label}),S[s.key]&&e.jsx(c.Text,{size:"sm",style:{color:C?b:w},children:S[s.key]})]})})},parameters:{docs:{description:{story:"Use `renderCategory` to add selection counts, badges, or any custom content alongside each category label."}}}},h={render:()=>{const[t,r]=i.useState([]);return e.jsx(o,{categories:n,items:a,value:t,onChange:r,renderDescription:s=>e.jsxs(v,{vertical:!0,style:{gap:k},children:[e.jsx(c.Text,{size:"sm",strong:!0,children:s?s.label:"No selection"}),e.jsx(c.Text,{size:"sm",type:"secondary",children:s?.description??"Hover a dimension to preview it here."}),s&&e.jsxs(c.Text,{size:"sm",type:"secondary",children:["Category: ",s.categoryKey]})]})})},parameters:{docs:{description:{story:"Use `renderDescription` to replace the default description panel with custom content — useful for rich previews, links, or structured metadata."}}}},j=()=>{const[t,r]=i.useState(""),s=a.filter(C=>C.label.toLowerCase().includes(t.toLowerCase()));return e.jsx(o,{categories:n,items:s,searchValue:t,onSearch:r})},f={render:()=>e.jsx(j,{}),parameters:{docs:{description:{story:"Use `searchValue` + `onSearch` to drive filtering externally — pass in pre-filtered `items` from an API call or local state."}}}},x={render:()=>{const[t,r]=i.useState([]);return e.jsx(o,{categories:n,items:a,value:t,onChange:r,footerContent:e.jsxs(c.Text,{size:"sm",type:"secondary",children:[t.length," of ",a.length," selected"]})})},parameters:{docs:{description:{story:"Use `footerContent` to inject content on the left side of the footer — useful for selection counts, hints, or secondary actions."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <DefaultExample />,
  parameters: {
    docs: {
      description: {
        story: 'Default picker with pre-selected items. Navigate categories, use the search box to filter, and hover items to see descriptions.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showDescriptionPanel: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Omit the description panel when items are self-explanatory or space is limited.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showApplyButton: false,
    showClearAllButton: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Remove the footer when selection changes should apply immediately via \`onChange\` without an explicit confirm step.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: 'Fully controlled mode — the parent owns the selection state and the picker is kept in sync via \`value\` and \`onChange\`.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Show a loading state while category items are being fetched asynchronously.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <DimensionPicker categories={sampleCategories} items={sampleItems} size="compact" value={selected} onChange={setSelected} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact size reduces panel heights and padding — useful in space-constrained layouts.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <DimensionPicker categories={sampleCategories} items={sampleItems} value={selected} onChange={setSelected} renderCategory={(category, isSelected) => <Flex align="center" style={{
      flex: 1,
      gap: SizeXxs
    }}>
            <Typography.Text size="sm" style={{
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}>
              {category.label}
            </Typography.Text>
            {itemSelectionCounts[category.key] && <Typography.Text size="sm" style={{
        color: isSelected ? RoktBrand7 : ColorTextSecondary
      }}>
                {itemSelectionCounts[category.key]}
              </Typography.Text>}
          </Flex>} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`renderCategory\` to add selection counts, badges, or any custom content alongside each category label.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <DimensionPicker categories={sampleCategories} items={sampleItems} value={selected} onChange={setSelected} renderDescription={item => <Flex vertical style={{
      gap: SizeXxs
    }}>
            <Typography.Text size="sm" strong>
              {item ? item.label : 'No selection'}
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              {item?.description ?? 'Hover a dimension to preview it here.'}
            </Typography.Text>
            {item && <Typography.Text size="sm" type="secondary">
                Category: {item.categoryKey}
              </Typography.Text>}
          </Flex>} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`renderDescription\` to replace the default description panel with custom content — useful for rich previews, links, or structured metadata.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ServerSearchExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`searchValue\` + \`onSearch\` to drive filtering externally — pass in pre-filtered \`items\` from an API call or local state.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <DimensionPicker categories={sampleCategories} items={sampleItems} value={selected} onChange={setSelected} footerContent={<Typography.Text size="sm" type="secondary">
            {selected.length} of {sampleItems.length} selected
          </Typography.Text>} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`footerContent\` to inject content on the left side of the footer — useful for selection counts, hints, or secondary actions.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const U=["Primary","WithoutDescriptionPanel","WithoutFooter","Controlled","Loading","Compact","CustomCategoryRender","CustomDescriptionRender","ControlledSearch","WithFooterContent"];export{g as Compact,m as Controlled,f as ControlledSearch,u as CustomCategoryRender,h as CustomDescriptionRender,y as Loading,l as Primary,x as WithFooterContent,p as WithoutDescriptionPanel,d as WithoutFooter,U as __namedExportsOrder,P as default};
