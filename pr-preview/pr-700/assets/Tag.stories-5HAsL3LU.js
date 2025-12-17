var F=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var x=(l,n,c)=>n in l?F(l,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[n]=c,e=(l,n)=>{for(var c in n||(n={}))Q.call(n,c)&&x(l,c,n[c]);if(h)for(var c of h(n))X.call(n,c)&&x(l,c,n[c]);return l},a=(l,n)=>J(l,K(n));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{n as o,a as s,R as Y}from"./NavigationItemsService-TIeGqD4L.js";import"./ErrorStateIcon-CFRZUseq.js";import"./SuccessStateIcon-Beh0MlUq.js";import"./WarningStateIcon-BsxCnJCe.js";import"./_baseClone-DwBCp-Ss.js";const Z={title:"Components/Data Display/Tag",component:l=>r.jsx(o,a(e({},l),{children:"Tag"})),parameters:{docs:{description:{component:`The Tag component displays small, labeled elements used to categorize, identify, or highlight content.
Tags are versatile for indicating types or other identifiers and can include text, icons, or color coding to enhance readability and organization.`}}}},d={args:{color:"default",bordered:!0},argTypes:{color:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>r.jsxs(s,{direction:"vertical",children:[r.jsx(o,{color:"blue",children:"Prod"}),r.jsx(o,{color:"purple",children:"Dev"}),r.jsx(o,{color:"default",children:"Default"})]})},t={render:()=>r.jsxs(s,{size:[24,24],wrap:!0,children:[r.jsx(o,{bordered:!0,color:"default",children:"New"}),r.jsx(o,{bordered:!0,color:"default",children:"Beta"})]})},i={render:()=>r.jsxs(s,{size:[24,24],wrap:!0,children:[r.jsx(o,{bordered:!0,color:"success",children:"Strong"}),r.jsx(o,{bordered:!0,color:"warning",children:"Moderate"}),r.jsx(o,{bordered:!0,color:"error",children:"Weak"})]})},u={render:()=>{const l=[{color:"default",label:"Default"},{color:"magenta",label:"Magenta"},{color:"blue",label:"Blue"},{color:"cyan",label:"Cyan"},{color:"geekblue",label:"Geekblue"},{color:"gold",label:"Gold"},{color:"green",label:"Green"},{color:"lime",label:"Lime"},{color:"orange",label:"Orange"},{color:"purple",label:"Purple"},{color:"red",label:"Red"},{color:"volcano",label:"Volcano"}];return r.jsx(s,{size:[16,16],wrap:!0,children:l.map(n=>r.jsx(o,{bordered:!0,color:n.color,children:n.label},n.label))})}},g={render:()=>r.jsx(o,{color:"default",bordered:!1,children:"Borderless Tag"})},p={parameters:{docs:{source:{state:"hidden"}}},render:()=>r.jsx(o,{bordered:!0,color:"default",icon:r.jsx(Y,{}),children:"Tag with icon"})},b={render:()=>r.jsx(o,{bordered:!0,color:"default",closable:!0,children:"Closable Tag"})},m={render:()=>r.jsxs(s,{size:[16,16],children:[r.jsx(o.CheckableTag,{bordered:!0,checked:!0,children:"Checked Tag"}),r.jsx(o.CheckableTag,{bordered:!0,checked:!1,children:"Unchecked Tag"})]})},T={render:()=>r.jsxs(s,{size:[16,16],children:[r.jsx(o,{bordered:!0,color:"blue",children:"Prod"}),r.jsx(o,{bordered:!0,color:"purple",children:"Dev"})]})};var f,j,S;d.parameters=a(e({},d.parameters),{docs:a(e({},(f=d.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    color: 'default',
    bordered: true
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <Space direction="vertical">
        <Tag color="blue">Prod</Tag>
        <Tag color="purple">Dev</Tag>
        <Tag color="default">Default</Tag>
      </Space>;
  }
}`},(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source)})});var k,C,v;t.parameters=a(e({},t.parameters),{docs:a(e({},(k=t.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[24, 24]} wrap>
        <Tag bordered color="default">
          New
        </Tag>
        <Tag bordered color="default">
          Beta
        </Tag>
      </Space>;
  }
}`},(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source)})});var w,y,E;i.parameters=a(e({},i.parameters),{docs:a(e({},(w=i.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[24, 24]} wrap>
        <Tag bordered color="success">
          Strong
        </Tag>
        <Tag bordered color="warning">
          Moderate
        </Tag>
        <Tag bordered color="error">
          Weak
        </Tag>
      </Space>;
  }
}`},(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source)})});var z,D,B;u.parameters=a(e({},u.parameters),{docs:a(e({},(z=u.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  render: () => {
    const tags = [{
      color: 'default',
      label: 'Default'
    }, {
      color: 'magenta',
      label: 'Magenta'
    }, {
      color: 'blue',
      label: 'Blue'
    }, {
      color: 'cyan',
      label: 'Cyan'
    }, {
      color: 'geekblue',
      label: 'Geekblue'
    }, {
      color: 'gold',
      label: 'Gold'
    }, {
      color: 'green',
      label: 'Green'
    }, {
      color: 'lime',
      label: 'Lime'
    }, {
      color: 'orange',
      label: 'Orange'
    }, {
      color: 'purple',
      label: 'Purple'
    }, {
      color: 'red',
      label: 'Red'
    }, {
      color: 'volcano',
      label: 'Volcano'
    }] as const;
    return <Space size={[16, 16]} wrap>
        {tags.map(tag => <Tag key={tag.label} bordered color={tag.color}>
            {tag.label}
          </Tag>)}
      </Space>;
  }
}`},(B=(D=u.parameters)==null?void 0:D.docs)==null?void 0:B.source)})});var P,O,G;g.parameters=a(e({},g.parameters),{docs:a(e({},(P=g.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  render: () => {
    return <Tag color="default" bordered={false}>
        Borderless Tag
      </Tag>;
  }
}`},(G=(O=g.parameters)==null?void 0:O.docs)==null?void 0:G.source)})});var I,_,M;p.parameters=a(e({},p.parameters),{docs:a(e({},(I=p.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  parameters: {
    docs: {
      source: {
        state: 'hidden'
      }
    }
  },
  render: () => {
    return <Tag bordered color="default" icon={<ClockCircleOutlined />}>
        Tag with icon
      </Tag>;
  }
}`},(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.source)})});var R,W,H;b.parameters=a(e({},b.parameters),{docs:a(e({},(R=b.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  render: () => {
    return <Tag bordered color="default" closable>
        Closable Tag
      </Tag>;
  }
}`},(H=(W=b.parameters)==null?void 0:W.docs)==null?void 0:H.source)})});var L,N,U;m.parameters=a(e({},m.parameters),{docs:a(e({},(L=m.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[16, 16]}>
        <Tag.CheckableTag bordered checked>
          Checked Tag
        </Tag.CheckableTag>
        <Tag.CheckableTag bordered checked={false}>
          Unchecked Tag
        </Tag.CheckableTag>
      </Space>;
  }
}`},(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source)})});var V,q,A;T.parameters=a(e({},T.parameters),{docs:a(e({},(V=T.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[16, 16]}>
        <Tag bordered color="blue">
          Prod
        </Tag>
        <Tag bordered color="purple">
          Dev
        </Tag>
      </Space>;
  }
}`},(A=(q=T.parameters)==null?void 0:q.docs)==null?void 0:A.source)})});const $=["Primary","InfoTags","HealthTags","TagOverviewCards","BorderlessTagExample","TagWithIconExample","ClosableTagExample","ClickableTagExample","EnvironmentTagsExample"],se=Object.freeze(Object.defineProperty({__proto__:null,BorderlessTagExample:g,ClickableTagExample:m,ClosableTagExample:b,EnvironmentTagsExample:T,HealthTags:i,InfoTags:t,Primary:d,TagOverviewCards:u,TagWithIconExample:p,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{g as B,b as C,T as E,i as H,t as I,se as T,u as a,p as b,m as c};
