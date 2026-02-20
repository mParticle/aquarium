var pn=Object.defineProperty,mn=Object.defineProperties;var un=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var yn=Object.prototype.hasOwnProperty,hn=Object.prototype.propertyIsEnumerable;var q=(o,s,i)=>s in o?pn(o,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[s]=i,n=(o,s)=>{for(var i in s||(s={}))yn.call(s,i)&&q(o,i,s[i]);if(_)for(var i of _(s))hn.call(s,i)&&q(o,i,s[i]);return o},r=(o,s)=>mn(o,un(s));var $=(o,s,i)=>new Promise((cn,N)=>{var dn=d=>{try{U(i.next(d))}catch(W){N(W)}},ln=d=>{try{U(i.throw(d))}catch(W){N(W)}},U=d=>d.done?cn(d.value):Promise.resolve(d.value).then(dn,ln);U((i=i.apply(o,s)).next())});import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{c as t,K as gn,F as c,b as l,I as a,T as m,Z as xn}from"./UnauthorizedTooltip-BTO5bBVD.js";import{u as fn}from"./index-1POLsKUh.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{s as C,i as O,a as A,b as G}from"./Trash01-1xR_L0dD.js";import{ax as jn,am as Bn,ay as Tn,aw as In,aG as p}from"./style-B81W5px8.js";const zn={title:"Components/General/Button",component:o=>{var s;return e.jsx(t,r(n({},o),{children:(s=o.children)!=null?s:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},u={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(gn,{type:"info",showIcon:!1,style:{backgroundColor:Tn,border:`1px solid ${Bn}`,borderRadius:jn,width:"100%",marginBottom:0},message:e.jsxs(c,{align:"center",gap:In,children:[e.jsx(l.Text,{size:"xl",children:"💡"}),e.jsxs(l.Text,{size:"base",children:["Use the"," ",e.jsx(l.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",color:"ColorText",children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},y={args:{type:"primary",children:"Primary"},play:o=>$(void 0,null,function*(){const s=o.canvasElement.querySelector("button");if(s)yield fn.click(s);else throw new Error("Button not found")})},h={args:{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}},g={args:{type:"default",children:"Secondary"}},x={args:{type:"default",icon:e.jsx(a,{size:"sm",name:"transformation"}),children:"Secondary"}},f={args:{type:"dashed",children:"Tertiary"}},j={args:{type:"dashed",icon:e.jsx(a,{size:"sm",name:"add"}),children:"Tertiary"}},B={args:{type:"link",children:"Link"}},T={args:{type:"link",icon:e.jsx(a,{name:"add"}),children:"Link"}},I={args:{type:"text",children:"Text"}},z={args:{type:"default",danger:!0,children:"Delete"}},k={args:{type:"primary",loading:!0,children:"Loading"}},S={args:{type:"text",loading:!0,children:"Load more"}},w={render:()=>e.jsxs(c,{wrap:!0,gap:p,align:"center",children:[e.jsx(t,{type:"primary",children:"Primary"}),e.jsx(t,{type:"default",children:"Secondary"}),e.jsx(t,{type:"dashed",children:"Tertiary"}),e.jsx(t,{type:"text",children:"Text"}),e.jsx(t,{type:"link",children:"Link"})]})},v={render:()=>e.jsxs(c,{wrap:!0,gap:p,align:"center",children:[e.jsx(t,{color:"default",variant:"solid",children:"Dark"}),e.jsx(t,{color:"default",variant:"solid",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Dark with Icon"}),e.jsx(t,{color:"default",variant:"solid",disabled:!0,children:"Dark Disabled"})]})},b={render:()=>e.jsxs(c,{wrap:!0,gap:p,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Secondary"}),e.jsx(t,{type:"dashed",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Tertiary"}),e.jsx(t,{type:"text",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Text"}),e.jsx(t,{type:"link",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Link"})]})},L={render:()=>e.jsxs(c,{gap:p,align:"center",children:[e.jsx(t,{type:"default",size:"small",children:"Small"}),e.jsx(t,{type:"default",children:"Default"}),e.jsx(t,{type:"default",size:"large",children:"Large"})]})},D={render:()=>e.jsxs(c,{wrap:!0,gap:p,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add"}),"aria-label":"Primary action"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"add"}),"aria-label":"Secondary action"}),e.jsx(t,{type:"dashed",icon:e.jsx(a,{name:"add"}),"aria-label":"Tertiary action"}),e.jsx(t,{type:"text",icon:e.jsx(a,{name:"add"}),"aria-label":"Refresh"}),e.jsx(t,{type:"link",icon:e.jsx(a,{name:"add"}),"aria-label":"Navigate"})]})},R={render:()=>e.jsx(e.Fragment,{children:e.jsxs(c,{gap:"small",align:"center",children:[e.jsx(m,{title:"Fetch new data from the server",children:e.jsx(t,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),e.jsx(m,{title:"Refresh and fetch latest data",children:e.jsx(t,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"strong"})})})]})})},F={render:()=>{const o={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:s})=>{console.log("Selected:",s)}};return e.jsx(xn,{menu:o,children:e.jsx(t,{icon:e.jsx(a,{name:"refresh",size:"sm"}),children:e.jsx(l.Text,{children:"Refresh Now"})})})}},E={render:()=>e.jsxs(c,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"edit",size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:"delete",size:"sm"}),children:"Delete"})]})},M={render:()=>e.jsxs(c,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:C,size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:O,size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:A,size:"sm"}),children:"Delete"})]})},P={render:()=>e.jsxs(c,{vertical:!0,gap:"large",children:[e.jsx("div",{children:e.jsx(l.Title,{level:4,children:"Buttons with Rokt/Untitled UI Icons"})}),e.jsxs("div",{children:[e.jsx(l.Title,{level:5,children:"Action Buttons"}),e.jsxs(c,{wrap:!0,gap:p,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:C,size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:G,size:"sm"}),children:"Search"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:O,size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:A,size:"sm"}),children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx(l.Title,{level:5,children:"Icon-Only Buttons"}),e.jsxs(c,{wrap:!0,gap:p,align:"center",children:[e.jsx(m,{title:"Add new item",children:e.jsx(t,{type:"primary",icon:e.jsx(a,{name:C,size:"sm"})})}),e.jsx(m,{title:"Search",children:e.jsx(t,{type:"default",icon:e.jsx(a,{name:G,size:"sm"})})}),e.jsx(m,{title:"Edit",children:e.jsx(t,{type:"default",icon:e.jsx(a,{name:O,size:"sm"})})}),e.jsx(m,{title:"Delete",children:e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:A,size:"sm"})})})]})]})]})};var V,X,K;u.parameters=r(n({},u.parameters),{docs:r(n({},(V=u.parameters)==null?void 0:V.docs),{source:n({originalSource:`{
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
              <Typography.Link href="https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary" color="ColorText">
                Typography.Link
              </Typography.Link>{' '}
              when navigating to a new URL or external page.
            </Typography.Text>
          </Flex>} />;
  }
}`},(K=(X=u.parameters)==null?void 0:X.docs)==null?void 0:K.source)})});var Z,H,J;y.parameters=r(n({},y.parameters),{docs:r(n({},(Z=y.parameters)==null?void 0:Z.docs),{source:n({originalSource:`{
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
}`},(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var Q,Y,ee;h.parameters=r(n({},h.parameters),{docs:r(n({},(Q=h.parameters)==null?void 0:Q.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`},(ee=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:ee.source)})});var ne,re,te;g.parameters=r(n({},g.parameters),{docs:r(n({},(ne=g.parameters)==null?void 0:ne.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`},(te=(re=g.parameters)==null?void 0:re.docs)==null?void 0:te.source)})});var ae,se,oe;x.parameters=r(n({},x.parameters),{docs:r(n({},(ae=x.parameters)==null?void 0:ae.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`},(oe=(se=x.parameters)==null?void 0:se.docs)==null?void 0:oe.source)})});var ie,ce,de;f.parameters=r(n({},f.parameters),{docs:r(n({},(ie=f.parameters)==null?void 0:ie.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`},(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});var le,pe,me;j.parameters=r(n({},j.parameters),{docs:r(n({},(le=j.parameters)==null?void 0:le.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`},(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var ue,ye,he;B.parameters=r(n({},B.parameters),{docs:r(n({},(ue=B.parameters)==null?void 0:ue.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`},(he=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:he.source)})});var ge,xe,fe;T.parameters=r(n({},T.parameters),{docs:r(n({},(ge=T.parameters)==null?void 0:ge.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`},(fe=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:fe.source)})});var je,Be,Te;I.parameters=r(n({},I.parameters),{docs:r(n({},(je=I.parameters)==null?void 0:je.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`},(Te=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:Te.source)})});var Ie,ze,ke;z.parameters=r(n({},z.parameters),{docs:r(n({},(Ie=z.parameters)==null?void 0:Ie.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`},(ke=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:ke.source)})});var Se,we,ve;k.parameters=r(n({},k.parameters),{docs:r(n({},(Se=k.parameters)==null?void 0:Se.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`},(ve=(we=k.parameters)==null?void 0:we.docs)==null?void 0:ve.source)})});var be,Le,De;S.parameters=r(n({},S.parameters),{docs:r(n({},(be=S.parameters)==null?void 0:be.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`},(De=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:De.source)})});var Re,Fe,Ee;w.parameters=r(n({},w.parameters),{docs:r(n({},(Re=w.parameters)==null?void 0:Re.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`},(Ee=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source)})});var Me,Pe,Ue;v.parameters=r(n({},v.parameters),{docs:r(n({},(Me=v.parameters)==null?void 0:Me.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button color="default" variant="solid">
          Dark
        </Button>
        <Button color="default" variant="solid" icon={<Icon name="add" size="sm" />}>
          Dark with Icon
        </Button>
        <Button color="default" variant="solid" disabled>
          Dark Disabled
        </Button>
      </Flex>;
  }
}`},(Ue=(Pe=v.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source)})});var We,Ce,Oe;b.parameters=r(n({},b.parameters),{docs:r(n({},(We=b.parameters)==null?void 0:We.docs),{source:n({originalSource:`{
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
}`},(Oe=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source)})});var Ae,Ne,_e;L.parameters=r(n({},L.parameters),{docs:r(n({},(Ae=L.parameters)==null?void 0:Ae.docs),{source:n({originalSource:`{
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
}`},(_e=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source)})});var qe,$e,Ge;D.parameters=r(n({},D.parameters),{docs:r(n({},(qe=D.parameters)==null?void 0:qe.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`},(Ge=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source)})});var Ve,Xe,Ke;R.parameters=r(n({},R.parameters),{docs:r(n({},(Ve=R.parameters)==null?void 0:Ve.docs),{source:n({originalSource:`{
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
}`},(Ke=(Xe=R.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source)})});var Ze,He,Je;F.parameters=r(n({},F.parameters),{docs:r(n({},(Ze=F.parameters)==null?void 0:Ze.docs),{source:n({originalSource:`{
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
}`},(Je=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Je.source)})});var Qe,Ye,en;E.parameters=r(n({},E.parameters),{docs:r(n({},(Qe=E.parameters)==null?void 0:Qe.docs),{source:n({originalSource:`{
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
}`},(en=(Ye=E.parameters)==null?void 0:Ye.docs)==null?void 0:en.source)})});var nn,rn,tn;M.parameters=r(n({},M.parameters),{docs:r(n({},(nn=M.parameters)==null?void 0:nn.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex gap="middle" align="center" wrap="wrap">
        <Button type="primary" icon={<Icon name={RoktPlus} size="sm" />}>
          Add Item
        </Button>
        <Button type="default" icon={<Icon name={RoktEdit} size="sm" />}>
          Edit
        </Button>
        <Button type="default" danger icon={<Icon name={RoktTrash} size="sm" />}>
          Delete
        </Button>
      </Flex>;
  }
}`},(tn=(rn=M.parameters)==null?void 0:rn.docs)==null?void 0:tn.source)})});var an,sn,on;P.parameters=r(n({},P.parameters),{docs:r(n({},(an=P.parameters)==null?void 0:an.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex vertical gap="large">
        <div>
          <Typography.Title level={4}>Buttons with Rokt/Untitled UI Icons</Typography.Title>
        </div>

        <div>
          <Typography.Title level={5}>Action Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Button type="primary" icon={<Icon name={RoktPlus} size="sm" />}>
              Add Item
            </Button>
            <Button type="default" icon={<Icon name={RoktSearch} size="sm" />}>
              Search
            </Button>
            <Button type="default" icon={<Icon name={RoktEdit} size="sm" />}>
              Edit
            </Button>
            <Button type="default" danger icon={<Icon name={RoktTrash} size="sm" />}>
              Delete
            </Button>
          </Flex>
        </div>

        <div>
          <Typography.Title level={5}>Icon-Only Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Tooltip title="Add new item">
              <Button type="primary" icon={<Icon name={RoktPlus} size="sm" />} />
            </Tooltip>
            <Tooltip title="Search">
              <Button type="default" icon={<Icon name={RoktSearch} size="sm" />} />
            </Tooltip>
            <Tooltip title="Edit">
              <Button type="default" icon={<Icon name={RoktEdit} size="sm" />} />
            </Tooltip>
            <Tooltip title="Delete">
              <Button type="default" danger icon={<Icon name={RoktTrash} size="sm" />} />
            </Tooltip>
          </Flex>
        </div>
      </Flex>;
  }
}`},(on=(sn=P.parameters)==null?void 0:sn.docs)==null?void 0:on.source)})});const kn=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","DarkButton","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options","ButtonsWithLocalIcons","ButtonsWithUntitledUIIcons","WithUntitledUIIcons"],Un=Object.freeze(Object.defineProperty({__proto__:null,ButtonsWithLocalIcons:E,ButtonsWithUntitledUIIcons:M,Danger:z,DarkButton:v,Dashed:f,DashedWithIcon:j,Default:g,DefaultWithIcon:x,IconOnly:D,IconTypesOverview:b,Link:B,LinkUsageNote:u,LinkWithIcon:T,Loading:k,LoadingText:S,Primary:y,PrimaryWithIcon:h,Refresh:R,SizeExamples:L,Text:I,TypesOverview:w,With2Options:F,WithUntitledUIIcons:P,__namedExportsOrder:kn,default:zn},Symbol.toStringTag,{value:"Module"}));export{Un as B,v as D,b as I,u as L,L as S,w as T,D as a,E as b,M as c,k as d,S as e,z as f};
