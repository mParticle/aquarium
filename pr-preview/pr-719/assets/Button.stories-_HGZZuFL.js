var cn=Object.defineProperty,ln=Object.defineProperties;var dn=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var pn=Object.prototype.hasOwnProperty,mn=Object.prototype.propertyIsEnumerable;var q=(o,a,i)=>a in o?cn(o,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[a]=i,n=(o,a)=>{for(var i in a||(a={}))pn.call(a,i)&&q(o,i,a[i]);if(_)for(var i of _(a))mn.call(a,i)&&q(o,i,a[i]);return o},r=(o,a)=>ln(o,dn(a));var $=(o,a,i)=>new Promise((an,N)=>{var sn=d=>{try{P(i.next(d))}catch(W){N(W)}},on=d=>{try{P(i.throw(d))}catch(W){N(W)}},P=d=>d.done?an(d.value):Promise.resolve(d.value).then(sn,on);P((i=i.apply(o,a)).next())});import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{c as t,K as un,F as l,b as p,I as s,T as m,Z as hn,a4 as c}from"./UnauthorizedTooltip-1ZRAhzDH.js";import{u as yn}from"./index-1POLsKUh.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import{B as gn,n as xn,u as fn,t as jn,G as u}from"./style-BbwCNso5.js";import"./index-3OP4wdng.js";import{s as O,i as A,a as C,b as G}from"./Trash04-BKnMg25G.js";const Bn={title:"Components/General/Button",component:o=>{var a;return e.jsx(t,r(n({},o),{children:(a=o.children)!=null?a:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},h={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(un,{type:"info",showIcon:!1,style:{backgroundColor:fn,border:`1px solid ${xn}`,borderRadius:gn,width:"100%",marginBottom:0},message:e.jsxs(l,{align:"center",gap:jn,children:[e.jsx(p.Text,{size:"xl",children:"💡"}),e.jsxs(p.Text,{size:"base",children:["Use the"," ",e.jsx(p.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",underline:!0,children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},y={args:{type:"primary",children:"Primary"},play:o=>$(void 0,null,function*(){const a=o.canvasElement.querySelector("button");if(a)yield yn.click(a);else throw new Error("Button not found")})},g={args:{type:"primary",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Primary"}},x={args:{type:"default",children:"Secondary"}},f={args:{type:"default",icon:e.jsx(s,{size:"sm",name:"transformation"}),children:"Secondary"}},j={args:{type:"dashed",children:"Tertiary"}},B={args:{type:"dashed",icon:e.jsx(s,{size:"sm",name:"add"}),children:"Tertiary"}},I={args:{type:"link",children:"Link"}},T={args:{type:"link",icon:e.jsx(s,{name:"add"}),children:"Link"}},z={args:{type:"text",children:"Text"}},S={args:{type:"default",danger:!0,children:"Delete"}},U={args:{type:"primary",loading:!0,children:"Loading"}},w={args:{type:"text",loading:!0,children:"Load more"}},k={render:()=>e.jsxs(l,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",children:"Primary"}),e.jsx(t,{type:"default",children:"Secondary"}),e.jsx(t,{type:"dashed",children:"Tertiary"}),e.jsx(t,{type:"text",children:"Text"}),e.jsx(t,{type:"link",children:"Link"})]})},b={render:()=>e.jsxs(l,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Primary"}),e.jsx(t,{type:"default",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Secondary"}),e.jsx(t,{type:"dashed",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Tertiary"}),e.jsx(t,{type:"text",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Text"}),e.jsx(t,{type:"link",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Link"})]})},v={render:()=>e.jsxs(l,{gap:u,align:"center",children:[e.jsx(t,{type:"default",size:"small",children:"Small"}),e.jsx(t,{type:"default",children:"Default"}),e.jsx(t,{type:"default",size:"large",children:"Large"})]})},L={render:()=>e.jsxs(l,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(s,{name:"add"}),"aria-label":"Primary action"}),e.jsx(t,{type:"default",icon:e.jsx(s,{name:"add"}),"aria-label":"Secondary action"}),e.jsx(t,{type:"dashed",icon:e.jsx(s,{name:"add"}),"aria-label":"Tertiary action"}),e.jsx(t,{type:"text",icon:e.jsx(s,{name:"add"}),"aria-label":"Refresh"}),e.jsx(t,{type:"link",icon:e.jsx(s,{name:"add"}),"aria-label":"Navigate"})]})},F={render:()=>e.jsx(e.Fragment,{children:e.jsxs(l,{gap:"small",align:"center",children:[e.jsx(m,{title:"Fetch new data from the server",children:e.jsx(t,{type:"text",icon:e.jsx(s,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),e.jsx(m,{title:"Refresh and fetch latest data",children:e.jsx(t,{type:"text",icon:e.jsx(s,{name:"refresh",size:"sm",color:"strong"})})})]})})},D={render:()=>{const o={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:a})=>{console.log("Selected:",a)}};return e.jsx(hn,{menu:o,children:e.jsx(t,{icon:e.jsx(s,{name:"refresh",size:"sm"}),children:e.jsx(p.Text,{children:"Refresh Now"})})})}},E={render:()=>e.jsxs(l,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(s,{name:"edit",size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(s,{name:"delete",size:"sm"}),children:"Delete"})]})},R={render:()=>e.jsxs(l,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(c,{name:O,size:"sm",color:"inherit"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(c,{name:A,size:"sm",color:"inherit"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(c,{name:C,size:"sm",color:"inherit"}),children:"Delete"})]})},M={render:()=>e.jsxs(l,{vertical:!0,gap:"large",children:[e.jsx("div",{children:e.jsx(p.Title,{level:4,children:"Buttons with Untitled UI Icons"})}),e.jsxs("div",{children:[e.jsx(p.Title,{level:5,children:"Action Buttons"}),e.jsxs(l,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(c,{name:O,size:"sm",color:"inherit"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(c,{name:G,size:"sm",color:"inherit"}),children:"Search"}),e.jsx(t,{type:"default",icon:e.jsx(c,{name:A,size:"sm",color:"inherit"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(c,{name:C,size:"sm",color:"inherit"}),children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx(p.Title,{level:5,children:"Icon-Only Buttons"}),e.jsxs(l,{wrap:!0,gap:u,align:"center",children:[e.jsx(m,{title:"Add new item",children:e.jsx(t,{type:"primary",icon:e.jsx(c,{name:O,size:"sm",color:"inherit"})})}),e.jsx(m,{title:"Search",children:e.jsx(t,{type:"default",icon:e.jsx(c,{name:G,size:"sm",color:"inherit"})})}),e.jsx(m,{title:"Edit",children:e.jsx(t,{type:"default",icon:e.jsx(c,{name:A,size:"sm",color:"inherit"})})}),e.jsx(m,{title:"Delete",children:e.jsx(t,{type:"default",danger:!0,icon:e.jsx(c,{name:C,size:"sm",color:"inherit"})})})]})]})]})};var V,X,K;h.parameters=r(n({},h.parameters),{docs:r(n({},(V=h.parameters)==null?void 0:V.docs),{source:n({originalSource:`{
  parameters: {
    docs: {
      source: {
        state: 'hidden'
      }
    }
  },
  render: () => {
    return <Alert type="info" showIcon={false} style={{
      backgroundColor: ColorWhite,
      border: \`1px solid \${ColorBorderSecondary}\`,
      borderRadius: BorderRadiusLg,
      width: '100%',
      marginBottom: 0
    }} message={<Flex align="center" gap={SizeXs}>
            <Typography.Text size="xl">💡</Typography.Text>
            <Typography.Text size="base">
              Use the{' '}
              <Typography.Link href="https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary" underline>
                Typography.Link
              </Typography.Link>{' '}
              when navigating to a new URL or external page.
            </Typography.Text>
          </Flex>} />;
  }
}`},(K=(X=h.parameters)==null?void 0:X.docs)==null?void 0:K.source)})});var Z,H,J;y.parameters=r(n({},y.parameters),{docs:r(n({},(Z=y.parameters)==null?void 0:Z.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary'
  },
  play: async context => {
    const button = context.canvasElement.querySelector('button');
    if (button) {
      await userEvent.click(button); // Click the button
    } else {
      throw new Error('Button not found');
    }
  }
}`},(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var Q,Y,ee;g.parameters=r(n({},g.parameters),{docs:r(n({},(Q=g.parameters)==null?void 0:Q.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`},(ee=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:ee.source)})});var ne,re,te;x.parameters=r(n({},x.parameters),{docs:r(n({},(ne=x.parameters)==null?void 0:ne.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`},(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source)})});var ae,se,oe;f.parameters=r(n({},f.parameters),{docs:r(n({},(ae=f.parameters)==null?void 0:ae.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`},(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source)})});var ie,ce,le;j.parameters=r(n({},j.parameters),{docs:r(n({},(ie=j.parameters)==null?void 0:ie.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`},(le=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:le.source)})});var de,pe,me;B.parameters=r(n({},B.parameters),{docs:r(n({},(de=B.parameters)==null?void 0:de.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`},(me=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var ue,he,ye;I.parameters=r(n({},I.parameters),{docs:r(n({},(ue=I.parameters)==null?void 0:ue.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`},(ye=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ye.source)})});var ge,xe,fe;T.parameters=r(n({},T.parameters),{docs:r(n({},(ge=T.parameters)==null?void 0:ge.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`},(fe=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:fe.source)})});var je,Be,Ie;z.parameters=r(n({},z.parameters),{docs:r(n({},(je=z.parameters)==null?void 0:je.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`},(Ie=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source)})});var Te,ze,Se;S.parameters=r(n({},S.parameters),{docs:r(n({},(Te=S.parameters)==null?void 0:Te.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`},(Se=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:Se.source)})});var Ue,we,ke;U.parameters=r(n({},U.parameters),{docs:r(n({},(Ue=U.parameters)==null?void 0:Ue.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`},(ke=(we=U.parameters)==null?void 0:we.docs)==null?void 0:ke.source)})});var be,ve,Le;w.parameters=r(n({},w.parameters),{docs:r(n({},(be=w.parameters)==null?void 0:be.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`},(Le=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Le.source)})});var Fe,De,Ee;k.parameters=r(n({},k.parameters),{docs:r(n({},(Fe=k.parameters)==null?void 0:Fe.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`},(Ee=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Ee.source)})});var Re,Me,Pe;b.parameters=r(n({},b.parameters),{docs:r(n({},(Re=b.parameters)==null?void 0:Re.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" size="sm" />}>
          Primary
        </Button>
        <Button type="default" icon={<Icon name="add" size="sm" />}>
          Secondary
        </Button>
        <Button type="dashed" icon={<Icon name="add" size="sm" />}>
          Tertiary
        </Button>
        <Button type="text" icon={<Icon name="add" size="sm" />}>
          Text
        </Button>
        <Button type="link" icon={<Icon name="add" size="sm" />}>
          Link
        </Button>
      </Flex>;
  }
}`},(Pe=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source)})});var We,Oe,Ae;v.parameters=r(n({},v.parameters),{docs:r(n({},(We=v.parameters)==null?void 0:We.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex gap={MarginMd} align="center">
        <Button type="default" size="small">
          Small
        </Button>
        <Button type="default">Default</Button>
        <Button type="default" size="large">
          Large
        </Button>
      </Flex>;
  }
}`},(Ae=(Oe=v.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source)})});var Ce,Ne,_e;L.parameters=r(n({},L.parameters),{docs:r(n({},(Ce=L.parameters)==null?void 0:Ce.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`},(_e=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source)})});var qe,$e,Ge;F.parameters=r(n({},F.parameters),{docs:r(n({},(qe=F.parameters)==null?void 0:qe.docs),{source:n({originalSource:`{
  render: () => {
    return <>
        <Flex gap="small" align="center">
          <Tooltip title="Fetch new data from the server">
            <Button type="text" icon={<Icon name="refresh" size="sm" color="text" />}>
              Refresh
            </Button>
          </Tooltip>

          <Tooltip title="Refresh and fetch latest data">
            <Button type="text" icon={<Icon name="refresh" size="sm" color="strong" />} />
          </Tooltip>
        </Flex>
      </>;
  }
}`},(Ge=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source)})});var Ve,Xe,Ke;D.parameters=r(n({},D.parameters),{docs:r(n({},(Ve=D.parameters)==null?void 0:Ve.docs),{source:n({originalSource:`{
  render: () => {
    const refreshMenu: MenuProps = {
      items: [{
        key: 'refresh-columns',
        label: 'Refresh Columns'
      }, {
        key: 'refresh-values',
        label: 'Refresh Values'
      }],
      onClick: ({
        key
      }) => {
        console.log('Selected:', key);
      }
    };
    return <Dropdown menu={refreshMenu}>
        <Button icon={<Icon name="refresh" size="sm" />}>
          <Typography.Text>Refresh Now</Typography.Text>
        </Button>
      </Dropdown>;
  }
}`},(Ke=(Xe=D.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source)})});var Ze,He,Je;E.parameters=r(n({},E.parameters),{docs:r(n({},(Ze=E.parameters)==null?void 0:Ze.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex gap="middle" align="center" wrap="wrap">
        <Button type="primary" icon={<Icon name="add" size="sm" />}>
          Add Item
        </Button>
        <Button type="default" icon={<Icon name="edit" size="sm" />}>
          Edit
        </Button>
        <Button type="default" danger icon={<Icon name="delete" size="sm" />}>
          Delete
        </Button>
      </Flex>;
  }
}`},(Je=(He=E.parameters)==null?void 0:He.docs)==null?void 0:Je.source)})});var Qe,Ye,en;R.parameters=r(n({},R.parameters),{docs:r(n({},(Qe=R.parameters)==null?void 0:Qe.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex gap="middle" align="center" wrap="wrap">
        <Button type="primary" icon={<UntitledIcon name={UUIPlus} size="sm" color="inherit" />}>
          Add Item
        </Button>
        <Button type="default" icon={<UntitledIcon name={UUIEdit} size="sm" color="inherit" />}>
          Edit
        </Button>
        <Button type="default" danger icon={<UntitledIcon name={UUITrash} size="sm" color="inherit" />}>
          Delete
        </Button>
      </Flex>;
  }
}`},(en=(Ye=R.parameters)==null?void 0:Ye.docs)==null?void 0:en.source)})});var nn,rn,tn;M.parameters=r(n({},M.parameters),{docs:r(n({},(nn=M.parameters)==null?void 0:nn.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex vertical gap="large">
        <div>
          <Typography.Title level={4}>Buttons with Untitled UI Icons</Typography.Title>
        </div>

        <div>
          <Typography.Title level={5}>Action Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Button type="primary" icon={<UntitledIcon name={UUIPlus} size="sm" color="inherit" />}>
              Add Item
            </Button>
            <Button type="default" icon={<UntitledIcon name={UUISearch} size="sm" color="inherit" />}>
              Search
            </Button>
            <Button type="default" icon={<UntitledIcon name={UUIEdit} size="sm" color="inherit" />}>
              Edit
            </Button>
            <Button type="default" danger icon={<UntitledIcon name={UUITrash} size="sm" color="inherit" />}>
              Delete
            </Button>
          </Flex>
        </div>

        <div>
          <Typography.Title level={5}>Icon-Only Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Tooltip title="Add new item">
              <Button type="primary" icon={<UntitledIcon name={UUIPlus} size="sm" color="inherit" />} />
            </Tooltip>
            <Tooltip title="Search">
              <Button type="default" icon={<UntitledIcon name={UUISearch} size="sm" color="inherit" />} />
            </Tooltip>
            <Tooltip title="Edit">
              <Button type="default" icon={<UntitledIcon name={UUIEdit} size="sm" color="inherit" />} />
            </Tooltip>
            <Tooltip title="Delete">
              <Button type="default" danger icon={<UntitledIcon name={UUITrash} size="sm" color="inherit" />} />
            </Tooltip>
          </Flex>
        </div>
      </Flex>;
  }
}`},(tn=(rn=M.parameters)==null?void 0:rn.docs)==null?void 0:tn.source)})});const In=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options","ButtonsWithLocalIcons","ButtonsWithUntitledUIIcons","WithUntitledUIIcons"],En=Object.freeze(Object.defineProperty({__proto__:null,ButtonsWithLocalIcons:E,ButtonsWithUntitledUIIcons:R,Danger:S,Dashed:j,DashedWithIcon:B,Default:x,DefaultWithIcon:f,IconOnly:L,IconTypesOverview:b,Link:I,LinkUsageNote:h,LinkWithIcon:T,Loading:U,LoadingText:w,Primary:y,PrimaryWithIcon:g,Refresh:F,SizeExamples:v,Text:z,TypesOverview:k,With2Options:D,WithUntitledUIIcons:M,__namedExportsOrder:In,default:Bn},Symbol.toStringTag,{value:"Module"}));export{En as B,S as D,b as I,h as L,v as S,k as T,L as a,E as b,R as c,U as d,w as e};
