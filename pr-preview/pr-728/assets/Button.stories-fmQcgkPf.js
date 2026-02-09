var on=Object.defineProperty,cn=Object.defineProperties;var dn=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ln=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable;var _=(o,s,i)=>s in o?on(o,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[s]=i,n=(o,s)=>{for(var i in s||(s={}))ln.call(s,i)&&_(o,i,s[i]);if(N)for(var i of N(s))pn.call(s,i)&&_(o,i,s[i]);return o},r=(o,s)=>cn(o,dn(s));var q=(o,s,i)=>new Promise((tn,C)=>{var an=d=>{try{M(i.next(d))}catch(P){C(P)}},sn=d=>{try{M(i.throw(d))}catch(P){C(P)}},M=d=>d.done?tn(d.value):Promise.resolve(d.value).then(an,sn);M((i=i.apply(o,s)).next())});import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{c as t,K as mn,F as c,b as l,I as a,T as p,Z as un}from"./UnauthorizedTooltip-wmCCn_34.js";import{u as yn}from"./index-1POLsKUh.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{s as W,i as O,a as A,b as $}from"./Trash04-7_s1Rvvf.js";import{B as hn,n as gn,u as xn,t as fn,G as m}from"./style-BbwCNso5.js";const jn={title:"Components/General/Button",component:o=>{var s;return e.jsx(t,r(n({},o),{children:(s=o.children)!=null?s:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},u={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(mn,{type:"info",showIcon:!1,style:{backgroundColor:xn,border:`1px solid ${gn}`,borderRadius:hn,width:"100%",marginBottom:0},message:e.jsxs(c,{align:"center",gap:fn,children:[e.jsx(l.Text,{size:"xl",children:"💡"}),e.jsxs(l.Text,{size:"base",children:["Use the"," ",e.jsx(l.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",underline:!0,children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},y={args:{type:"primary",children:"Primary"},play:o=>q(void 0,null,function*(){const s=o.canvasElement.querySelector("button");if(s)yield yn.click(s);else throw new Error("Button not found")})},h={args:{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}},g={args:{type:"default",children:"Secondary"}},x={args:{type:"default",icon:e.jsx(a,{size:"sm",name:"transformation"}),children:"Secondary"}},f={args:{type:"dashed",children:"Tertiary"}},j={args:{type:"dashed",icon:e.jsx(a,{size:"sm",name:"add"}),children:"Tertiary"}},B={args:{type:"link",children:"Link"}},I={args:{type:"link",icon:e.jsx(a,{name:"add"}),children:"Link"}},T={args:{type:"text",children:"Text"}},z={args:{type:"default",danger:!0,children:"Delete"}},S={args:{type:"primary",loading:!0,children:"Loading"}},w={args:{type:"text",loading:!0,children:"Load more"}},k={render:()=>e.jsxs(c,{wrap:!0,gap:m,align:"center",children:[e.jsx(t,{type:"primary",children:"Primary"}),e.jsx(t,{type:"default",children:"Secondary"}),e.jsx(t,{type:"dashed",children:"Tertiary"}),e.jsx(t,{type:"text",children:"Text"}),e.jsx(t,{type:"link",children:"Link"})]})},U={render:()=>e.jsxs(c,{wrap:!0,gap:m,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Secondary"}),e.jsx(t,{type:"dashed",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Tertiary"}),e.jsx(t,{type:"text",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Text"}),e.jsx(t,{type:"link",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Link"})]})},b={render:()=>e.jsxs(c,{gap:m,align:"center",children:[e.jsx(t,{type:"default",size:"small",children:"Small"}),e.jsx(t,{type:"default",children:"Default"}),e.jsx(t,{type:"default",size:"large",children:"Large"})]})},v={render:()=>e.jsxs(c,{wrap:!0,gap:m,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add"}),"aria-label":"Primary action"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"add"}),"aria-label":"Secondary action"}),e.jsx(t,{type:"dashed",icon:e.jsx(a,{name:"add"}),"aria-label":"Tertiary action"}),e.jsx(t,{type:"text",icon:e.jsx(a,{name:"add"}),"aria-label":"Refresh"}),e.jsx(t,{type:"link",icon:e.jsx(a,{name:"add"}),"aria-label":"Navigate"})]})},L={render:()=>e.jsx(e.Fragment,{children:e.jsxs(c,{gap:"small",align:"center",children:[e.jsx(p,{title:"Fetch new data from the server",children:e.jsx(t,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),e.jsx(p,{title:"Refresh and fetch latest data",children:e.jsx(t,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"strong"})})})]})})},F={render:()=>{const o={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:s})=>{console.log("Selected:",s)}};return e.jsx(un,{menu:o,children:e.jsx(t,{icon:e.jsx(a,{name:"refresh",size:"sm"}),children:e.jsx(l.Text,{children:"Refresh Now"})})})}},D={render:()=>e.jsxs(c,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"edit",size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:"delete",size:"sm"}),children:"Delete"})]})},E={render:()=>e.jsxs(c,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:W,size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:O,size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:A,size:"sm"}),children:"Delete"})]})},R={render:()=>e.jsxs(c,{vertical:!0,gap:"large",children:[e.jsx("div",{children:e.jsx(l.Title,{level:4,children:"Buttons with Untitled UI Icons"})}),e.jsxs("div",{children:[e.jsx(l.Title,{level:5,children:"Action Buttons"}),e.jsxs(c,{wrap:!0,gap:m,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:W,size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:$,size:"sm"}),children:"Search"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:O,size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:A,size:"sm"}),children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx(l.Title,{level:5,children:"Icon-Only Buttons"}),e.jsxs(c,{wrap:!0,gap:m,align:"center",children:[e.jsx(p,{title:"Add new item",children:e.jsx(t,{type:"primary",icon:e.jsx(a,{name:W,size:"sm"})})}),e.jsx(p,{title:"Search",children:e.jsx(t,{type:"default",icon:e.jsx(a,{name:$,size:"sm"})})}),e.jsx(p,{title:"Edit",children:e.jsx(t,{type:"default",icon:e.jsx(a,{name:O,size:"sm"})})}),e.jsx(p,{title:"Delete",children:e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:A,size:"sm"})})})]})]})]})};var G,V,X;u.parameters=r(n({},u.parameters),{docs:r(n({},(G=u.parameters)==null?void 0:G.docs),{source:n({originalSource:`{
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
}`},(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var K,Z,H;y.parameters=r(n({},y.parameters),{docs:r(n({},(K=y.parameters)==null?void 0:K.docs),{source:n({originalSource:`{
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
}`},(H=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:H.source)})});var J,Q,Y;h.parameters=r(n({},h.parameters),{docs:r(n({},(J=h.parameters)==null?void 0:J.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`},(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source)})});var ee,ne,re;g.parameters=r(n({},g.parameters),{docs:r(n({},(ee=g.parameters)==null?void 0:ee.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`},(re=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:re.source)})});var te,ae,se;x.parameters=r(n({},x.parameters),{docs:r(n({},(te=x.parameters)==null?void 0:te.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`},(se=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:se.source)})});var oe,ie,ce;f.parameters=r(n({},f.parameters),{docs:r(n({},(oe=f.parameters)==null?void 0:oe.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`},(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var de,le,pe;j.parameters=r(n({},j.parameters),{docs:r(n({},(de=j.parameters)==null?void 0:de.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`},(pe=(le=j.parameters)==null?void 0:le.docs)==null?void 0:pe.source)})});var me,ue,ye;B.parameters=r(n({},B.parameters),{docs:r(n({},(me=B.parameters)==null?void 0:me.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`},(ye=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ye.source)})});var he,ge,xe;I.parameters=r(n({},I.parameters),{docs:r(n({},(he=I.parameters)==null?void 0:he.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`},(xe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:xe.source)})});var fe,je,Be;T.parameters=r(n({},T.parameters),{docs:r(n({},(fe=T.parameters)==null?void 0:fe.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`},(Be=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Be.source)})});var Ie,Te,ze;z.parameters=r(n({},z.parameters),{docs:r(n({},(Ie=z.parameters)==null?void 0:Ie.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`},(ze=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:ze.source)})});var Se,we,ke;S.parameters=r(n({},S.parameters),{docs:r(n({},(Se=S.parameters)==null?void 0:Se.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`},(ke=(we=S.parameters)==null?void 0:we.docs)==null?void 0:ke.source)})});var Ue,be,ve;w.parameters=r(n({},w.parameters),{docs:r(n({},(Ue=w.parameters)==null?void 0:Ue.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`},(ve=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ve.source)})});var Le,Fe,De;k.parameters=r(n({},k.parameters),{docs:r(n({},(Le=k.parameters)==null?void 0:Le.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`},(De=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:De.source)})});var Ee,Re,Me;U.parameters=r(n({},U.parameters),{docs:r(n({},(Ee=U.parameters)==null?void 0:Ee.docs),{source:n({originalSource:`{
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
}`},(Me=(Re=U.parameters)==null?void 0:Re.docs)==null?void 0:Me.source)})});var Pe,We,Oe;b.parameters=r(n({},b.parameters),{docs:r(n({},(Pe=b.parameters)==null?void 0:Pe.docs),{source:n({originalSource:`{
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
}`},(Oe=(We=b.parameters)==null?void 0:We.docs)==null?void 0:Oe.source)})});var Ae,Ce,Ne;v.parameters=r(n({},v.parameters),{docs:r(n({},(Ae=v.parameters)==null?void 0:Ae.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`},(Ne=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source)})});var _e,qe,$e;L.parameters=r(n({},L.parameters),{docs:r(n({},(_e=L.parameters)==null?void 0:_e.docs),{source:n({originalSource:`{
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
}`},($e=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:$e.source)})});var Ge,Ve,Xe;F.parameters=r(n({},F.parameters),{docs:r(n({},(Ge=F.parameters)==null?void 0:Ge.docs),{source:n({originalSource:`{
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
}`},(Xe=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source)})});var Ke,Ze,He;D.parameters=r(n({},D.parameters),{docs:r(n({},(Ke=D.parameters)==null?void 0:Ke.docs),{source:n({originalSource:`{
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
}`},(He=(Ze=D.parameters)==null?void 0:Ze.docs)==null?void 0:He.source)})});var Je,Qe,Ye;E.parameters=r(n({},E.parameters),{docs:r(n({},(Je=E.parameters)==null?void 0:Je.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex gap="middle" align="center" wrap="wrap">
        <Button type="primary" icon={<Icon name={UUIPlus} size="sm" />}>
          Add Item
        </Button>
        <Button type="default" icon={<Icon name={UUIEdit} size="sm" />}>
          Edit
        </Button>
        <Button type="default" danger icon={<Icon name={UUITrash} size="sm" />}>
          Delete
        </Button>
      </Flex>;
  }
}`},(Ye=(Qe=E.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source)})});var en,nn,rn;R.parameters=r(n({},R.parameters),{docs:r(n({},(en=R.parameters)==null?void 0:en.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex vertical gap="large">
        <div>
          <Typography.Title level={4}>Buttons with Untitled UI Icons</Typography.Title>
        </div>

        <div>
          <Typography.Title level={5}>Action Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Button type="primary" icon={<Icon name={UUIPlus} size="sm" />}>
              Add Item
            </Button>
            <Button type="default" icon={<Icon name={UUISearch} size="sm" />}>
              Search
            </Button>
            <Button type="default" icon={<Icon name={UUIEdit} size="sm" />}>
              Edit
            </Button>
            <Button type="default" danger icon={<Icon name={UUITrash} size="sm" />}>
              Delete
            </Button>
          </Flex>
        </div>

        <div>
          <Typography.Title level={5}>Icon-Only Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Tooltip title="Add new item">
              <Button type="primary" icon={<Icon name={UUIPlus} size="sm" />} />
            </Tooltip>
            <Tooltip title="Search">
              <Button type="default" icon={<Icon name={UUISearch} size="sm" />} />
            </Tooltip>
            <Tooltip title="Edit">
              <Button type="default" icon={<Icon name={UUIEdit} size="sm" />} />
            </Tooltip>
            <Tooltip title="Delete">
              <Button type="default" danger icon={<Icon name={UUITrash} size="sm" />} />
            </Tooltip>
          </Flex>
        </div>
      </Flex>;
  }
}`},(rn=(nn=R.parameters)==null?void 0:nn.docs)==null?void 0:rn.source)})});const Bn=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options","ButtonsWithLocalIcons","ButtonsWithUntitledUIIcons","WithUntitledUIIcons"],Dn=Object.freeze(Object.defineProperty({__proto__:null,ButtonsWithLocalIcons:D,ButtonsWithUntitledUIIcons:E,Danger:z,Dashed:f,DashedWithIcon:j,Default:g,DefaultWithIcon:x,IconOnly:v,IconTypesOverview:U,Link:B,LinkUsageNote:u,LinkWithIcon:I,Loading:S,LoadingText:w,Primary:y,PrimaryWithIcon:h,Refresh:L,SizeExamples:b,Text:T,TypesOverview:k,With2Options:F,WithUntitledUIIcons:R,__namedExportsOrder:Bn,default:jn},Symbol.toStringTag,{value:"Module"}));export{Dn as B,z as D,U as I,u as L,b as S,k as T,v as a,D as b,E as c,S as d,w as e};
