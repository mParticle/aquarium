var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var x=(l,n,c)=>n in l?X(l,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[n]=c,e=(l,n)=>{for(var c in n||(n={}))$.call(n,c)&&x(l,c,n[c]);if(f)for(var c of f(n))ee.call(n,c)&&x(l,c,n[c]);return l},o=(l,n)=>Y(l,Z(n));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{m as a,a as s,R as re}from"./UnauthorizedTooltip-CEPhmEk3.js";import"./ErrorStateIcon-8BB9p4tv.js";import"./SuccessStateIcon-fN8ivNoK.js";import"./WarningStateIcon-DpS0_2CM.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";const oe={title:"Components/Data Display/Tag",component:l=>r.jsx(a,o(e({},l),{children:"Tag"})),parameters:{docs:{description:{component:`The Tag component displays small, labeled elements used to categorize, identify, or highlight content.
Tags are versatile for indicating types or other identifiers and can include text, icons, or color coding to enhance readability and organization.`}}}},t={args:{color:"default",bordered:!0,closable:!1,children:"Tag Label"},argTypes:{color:{control:"select",options:["default","success","processing","error","warning","magenta","blue","cyan","geekblue","gold","green","lime","orange","purple","red","volcano"]},bordered:{control:"select",options:[!1,!0]},closable:{control:"select",options:[!1,!0]}}},d={args:{color:"default",bordered:!0},argTypes:{color:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>r.jsxs(s,{direction:"vertical",children:[r.jsx(a,{color:"blue",children:"Prod"}),r.jsx(a,{color:"purple",children:"Dev"}),r.jsx(a,{color:"default",children:"Default"})]})},u={render:()=>r.jsxs(s,{size:[24,24],wrap:!0,children:[r.jsx(a,{bordered:!0,color:"default",children:"New"}),r.jsx(a,{bordered:!0,color:"default",children:"Beta"})]})},g={render:()=>r.jsxs(s,{size:[24,24],wrap:!0,children:[r.jsx(a,{bordered:!0,color:"success",children:"Strong"}),r.jsx(a,{bordered:!0,color:"warning",children:"Moderate"}),r.jsx(a,{bordered:!0,color:"error",children:"Weak"})]})},i={render:()=>{const l=[{color:"default",label:"Default"},{color:"magenta",label:"Magenta"},{color:"blue",label:"Blue"},{color:"cyan",label:"Cyan"},{color:"geekblue",label:"Geekblue"},{color:"gold",label:"Gold"},{color:"green",label:"Green"},{color:"lime",label:"Lime"},{color:"orange",label:"Orange"},{color:"purple",label:"Purple"},{color:"red",label:"Red"},{color:"volcano",label:"Volcano"}];return r.jsx(s,{size:[16,16],wrap:!0,children:l.map(n=>r.jsx(a,{bordered:!0,color:n.color,children:n.label},n.label))})}},p={render:()=>r.jsx(a,{color:"default",bordered:!1,children:"Borderless Tag"})},b={parameters:{docs:{source:{state:"hidden"}}},render:()=>r.jsx(a,{bordered:!0,color:"default",icon:r.jsx(re,{}),children:"Tag with icon"})},m={render:()=>r.jsx(a,{bordered:!0,color:"default",closable:!0,children:"Closable Tag"})},T={render:()=>r.jsxs(s,{size:[16,16],children:[r.jsx(a.CheckableTag,{bordered:!0,checked:!0,children:"Checked Tag"}),r.jsx(a.CheckableTag,{bordered:!0,checked:!1,children:"Unchecked Tag"})]})},h={render:()=>r.jsxs(s,{size:[16,16],children:[r.jsx(a,{bordered:!0,color:"blue",children:"Prod"}),r.jsx(a,{bordered:!0,color:"purple",children:"Dev"})]})};var j,S,k;t.parameters=o(e({},t.parameters),{docs:o(e({},(j=t.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    color: 'default',
    bordered: true,
    closable: false,
    children: 'Tag Label'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'success', 'processing', 'error', 'warning', 'magenta', 'blue', 'cyan', 'geekblue', 'gold', 'green', 'lime', 'orange', 'purple', 'red', 'volcano']
    },
    bordered: {
      control: 'select',
      options: [false, true]
    },
    closable: {
      control: 'select',
      options: [false, true]
    }
  }
}`},(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var y,C,v;d.parameters=o(e({},d.parameters),{docs:o(e({},(y=d.parameters)==null?void 0:y.docs),{source:e({originalSource:`{
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
}`},(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source)})});var w,E,z;u.parameters=o(e({},u.parameters),{docs:o(e({},(w=u.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
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
}`},(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source)})});var P,D,B;g.parameters=o(e({},g.parameters),{docs:o(e({},(P=g.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
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
}`},(B=(D=g.parameters)==null?void 0:D.docs)==null?void 0:B.source)})});var O,G,I;i.parameters=o(e({},i.parameters),{docs:o(e({},(O=i.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
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
}`},(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source)})});var _,M,R;p.parameters=o(e({},p.parameters),{docs:o(e({},(_=p.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  render: () => {
    return <Tag color="default" bordered={false}>
        Borderless Tag
      </Tag>;
  }
}`},(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source)})});var L,W,H;b.parameters=o(e({},b.parameters),{docs:o(e({},(L=b.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
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
}`},(H=(W=b.parameters)==null?void 0:W.docs)==null?void 0:H.source)})});var N,U,V;m.parameters=o(e({},m.parameters),{docs:o(e({},(N=m.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  render: () => {
    return <Tag bordered color="default" closable>
        Closable Tag
      </Tag>;
  }
}`},(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var q,A,F;T.parameters=o(e({},T.parameters),{docs:o(e({},(q=T.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
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
}`},(F=(A=T.parameters)==null?void 0:A.docs)==null?void 0:F.source)})});var J,K,Q;h.parameters=o(e({},h.parameters),{docs:o(e({},(J=h.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
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
}`},(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});const ae=["Playground","Primary","InfoTags","HealthTags","TagOverviewCards","BorderlessTagExample","TagWithIconExample","ClosableTagExample","ClickableTagExample","EnvironmentTagsExample"],ie=Object.freeze(Object.defineProperty({__proto__:null,BorderlessTagExample:p,ClickableTagExample:T,ClosableTagExample:m,EnvironmentTagsExample:h,HealthTags:g,InfoTags:u,Playground:t,Primary:d,TagOverviewCards:i,TagWithIconExample:b,__namedExportsOrder:ae,default:oe},Symbol.toStringTag,{value:"Module"}));export{p as B,m as C,h as E,g as H,u as I,t as P,ie as T,i as a,b,T as c};
