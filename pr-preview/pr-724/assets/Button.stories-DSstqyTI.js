var pn=Object.defineProperty,mn=Object.defineProperties;var un=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var q=(s,o,i)=>o in s?pn(s,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[o]=i,n=(s,o)=>{for(var i in o||(o={}))$.call(o,i)&&q(s,i,o[i]);if(W)for(var i of W(o))V.call(o,i)&&q(s,i,o[i]);return s},r=(s,o)=>mn(s,un(o));var X=(s,o)=>{var i={};for(var c in s)$.call(s,c)&&o.indexOf(c)<0&&(i[c]=s[c]);if(s!=null&&W)for(var c of W(s))o.indexOf(c)<0&&V.call(s,c)&&(i[c]=s[c]);return i};var G=(s,o,i)=>new Promise((c,y)=>{var dn=l=>{try{A(i.next(l))}catch(O){y(O)}},ln=l=>{try{A(i.throw(l))}catch(O){y(O)}},A=l=>l.done?c(l.value):Promise.resolve(l.value).then(dn,ln);A((i=i.apply(s,o)).next())});import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{c as t,K as yn,F as d,b as p,I as a,T as m,Z as hn,aC as N,aD as _,aE as K}from"./UnauthorizedTooltip-7-Gmairi.js";import{u as gn}from"./index-1POLsKUh.js";import"./ErrorStateIcon-zGIgTWlr.js";import"./SuccessStateIcon-D2zieVPq.js";import"./WarningStateIcon-B3C8Ejgp.js";import"./_baseClone-DwBCp-Ss.js";import{r as Z}from"./index-3OP4wdng.js";import{ax as xn,am as fn,ay as jn,aw as Bn,aT as u}from"./style-B5-Zd2Z7.js";const C=c=>{var y=c,{size:s=24,color:o="currentColor"}=y,i=X(y,["size","color"]);return Z.createElement("svg",n({viewBox:"0 0 24 24",width:s,height:s,stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},i),Z.createElement("path",{d:"M9 3h6M3 6h18m-2 0-.701 10.52c-.105 1.578-.158 2.367-.499 2.965a3 3 0 0 1-1.298 1.215c-.62.3-1.41.3-2.993.3h-3.018c-1.582 0-2.373 0-2.993-.3A3 3 0 0 1 6.2 19.485c-.34-.598-.394-1.387-.499-2.966L5 6"}))};C.displayName="Trash04";const In={title:"Components/General/Button",component:s=>{var o;return e.jsx(t,r(n({},s),{children:(o=s.children)!=null?o:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},h={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(yn,{type:"info",showIcon:!1,style:{backgroundColor:jn,border:`1px solid ${fn}`,borderRadius:xn,width:"100%",marginBottom:0},message:e.jsxs(d,{align:"center",gap:Bn,children:[e.jsx(p.Text,{size:"xl",children:"💡"}),e.jsxs(p.Text,{size:"base",children:["Use the"," ",e.jsx(p.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",underline:!0,children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},g={args:{type:"primary",children:"Primary"},play:s=>G(void 0,null,function*(){const o=s.canvasElement.querySelector("button");if(o)yield gn.click(o);else throw new Error("Button not found")})},x={args:{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}},f={args:{type:"default",children:"Secondary"}},j={args:{type:"default",icon:e.jsx(a,{size:"sm",name:"transformation"}),children:"Secondary"}},B={args:{type:"dashed",children:"Tertiary"}},I={args:{type:"dashed",icon:e.jsx(a,{size:"sm",name:"add"}),children:"Tertiary"}},T={args:{type:"link",children:"Link"}},z={args:{type:"link",icon:e.jsx(a,{name:"add"}),children:"Link"}},S={args:{type:"text",children:"Text"}},w={args:{type:"default",danger:!0,children:"Delete"}},k={args:{type:"primary",loading:!0,children:"Loading"}},v={args:{type:"text",loading:!0,children:"Load more"}},L={render:()=>e.jsxs(d,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",children:"Primary"}),e.jsx(t,{type:"default",children:"Secondary"}),e.jsx(t,{type:"dashed",children:"Tertiary"}),e.jsx(t,{type:"text",children:"Text"}),e.jsx(t,{type:"link",children:"Link"})]})},U={render:()=>e.jsxs(d,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Secondary"}),e.jsx(t,{type:"dashed",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Tertiary"}),e.jsx(t,{type:"text",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Text"}),e.jsx(t,{type:"link",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Link"})]})},b={render:()=>e.jsxs(d,{gap:u,align:"center",children:[e.jsx(t,{type:"default",size:"small",children:"Small"}),e.jsx(t,{type:"default",children:"Default"}),e.jsx(t,{type:"default",size:"large",children:"Large"})]})},D={render:()=>e.jsxs(d,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add"}),"aria-label":"Primary action"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"add"}),"aria-label":"Secondary action"}),e.jsx(t,{type:"dashed",icon:e.jsx(a,{name:"add"}),"aria-label":"Tertiary action"}),e.jsx(t,{type:"text",icon:e.jsx(a,{name:"add"}),"aria-label":"Refresh"}),e.jsx(t,{type:"link",icon:e.jsx(a,{name:"add"}),"aria-label":"Navigate"})]})},F={render:()=>e.jsx(e.Fragment,{children:e.jsxs(d,{gap:"small",align:"center",children:[e.jsx(m,{title:"Fetch new data from the server",children:e.jsx(t,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),e.jsx(m,{title:"Refresh and fetch latest data",children:e.jsx(t,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"strong"})})})]})})},E={render:()=>{const s={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:o})=>{console.log("Selected:",o)}};return e.jsx(hn,{menu:s,children:e.jsx(t,{icon:e.jsx(a,{name:"refresh",size:"sm"}),children:e.jsx(p.Text,{children:"Refresh Now"})})})}},M={render:()=>e.jsxs(d,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:"edit",size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:"delete",size:"sm"}),children:"Delete"})]})},R={render:()=>e.jsxs(d,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:N,size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:_,size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:C,size:"sm"}),children:"Delete"})]})},P={render:()=>e.jsxs(d,{vertical:!0,gap:"large",children:[e.jsx("div",{children:e.jsx(p.Title,{level:4,children:"Buttons with Untitled UI Icons"})}),e.jsxs("div",{children:[e.jsx(p.Title,{level:5,children:"Action Buttons"}),e.jsxs(d,{wrap:!0,gap:u,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(a,{name:N,size:"sm"}),children:"Add Item"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:K,size:"sm"}),children:"Search"}),e.jsx(t,{type:"default",icon:e.jsx(a,{name:_,size:"sm"}),children:"Edit"}),e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:C,size:"sm"}),children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx(p.Title,{level:5,children:"Icon-Only Buttons"}),e.jsxs(d,{wrap:!0,gap:u,align:"center",children:[e.jsx(m,{title:"Add new item",children:e.jsx(t,{type:"primary",icon:e.jsx(a,{name:N,size:"sm"})})}),e.jsx(m,{title:"Search",children:e.jsx(t,{type:"default",icon:e.jsx(a,{name:K,size:"sm"})})}),e.jsx(m,{title:"Edit",children:e.jsx(t,{type:"default",icon:e.jsx(a,{name:_,size:"sm"})})}),e.jsx(m,{title:"Delete",children:e.jsx(t,{type:"default",danger:!0,icon:e.jsx(a,{name:C,size:"sm"})})})]})]})]})};var H,J,Q;h.parameters=r(n({},h.parameters),{docs:r(n({},(H=h.parameters)==null?void 0:H.docs),{source:n({originalSource:`{
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
}`},(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var Y,ee,ne;g.parameters=r(n({},g.parameters),{docs:r(n({},(Y=g.parameters)==null?void 0:Y.docs),{source:n({originalSource:`{
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
}`},(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source)})});var re,te,ae;x.parameters=r(n({},x.parameters),{docs:r(n({},(re=x.parameters)==null?void 0:re.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`},(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source)})});var se,oe,ie;f.parameters=r(n({},f.parameters),{docs:r(n({},(se=f.parameters)==null?void 0:se.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`},(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source)})});var ce,de,le;j.parameters=r(n({},j.parameters),{docs:r(n({},(ce=j.parameters)==null?void 0:ce.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`},(le=(de=j.parameters)==null?void 0:de.docs)==null?void 0:le.source)})});var pe,me,ue;B.parameters=r(n({},B.parameters),{docs:r(n({},(pe=B.parameters)==null?void 0:pe.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`},(ue=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ue.source)})});var ye,he,ge;I.parameters=r(n({},I.parameters),{docs:r(n({},(ye=I.parameters)==null?void 0:ye.docs),{source:n({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`},(ge=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ge.source)})});var xe,fe,je;T.parameters=r(n({},T.parameters),{docs:r(n({},(xe=T.parameters)==null?void 0:xe.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`},(je=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:je.source)})});var Be,Ie,Te;z.parameters=r(n({},z.parameters),{docs:r(n({},(Be=z.parameters)==null?void 0:Be.docs),{source:n({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`},(Te=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source)})});var ze,Se,we;S.parameters=r(n({},S.parameters),{docs:r(n({},(ze=S.parameters)==null?void 0:ze.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`},(we=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:we.source)})});var ke,ve,Le;w.parameters=r(n({},w.parameters),{docs:r(n({},(ke=w.parameters)==null?void 0:ke.docs),{source:n({originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`},(Le=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Le.source)})});var Ue,be,De;k.parameters=r(n({},k.parameters),{docs:r(n({},(Ue=k.parameters)==null?void 0:Ue.docs),{source:n({originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`},(De=(be=k.parameters)==null?void 0:be.docs)==null?void 0:De.source)})});var Fe,Ee,Me;v.parameters=r(n({},v.parameters),{docs:r(n({},(Fe=v.parameters)==null?void 0:Fe.docs),{source:n({originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`},(Me=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source)})});var Re,Pe,We;L.parameters=r(n({},L.parameters),{docs:r(n({},(Re=L.parameters)==null?void 0:Re.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`},(We=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:We.source)})});var Ce,Ae,Oe;U.parameters=r(n({},U.parameters),{docs:r(n({},(Ce=U.parameters)==null?void 0:Ce.docs),{source:n({originalSource:`{
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
}`},(Oe=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source)})});var Ne,_e,qe;b.parameters=r(n({},b.parameters),{docs:r(n({},(Ne=b.parameters)==null?void 0:Ne.docs),{source:n({originalSource:`{
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
}`},(qe=(_e=b.parameters)==null?void 0:_e.docs)==null?void 0:qe.source)})});var $e,Ve,Xe;D.parameters=r(n({},D.parameters),{docs:r(n({},($e=D.parameters)==null?void 0:$e.docs),{source:n({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`},(Xe=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source)})});var Ge,Ke,Ze;F.parameters=r(n({},F.parameters),{docs:r(n({},(Ge=F.parameters)==null?void 0:Ge.docs),{source:n({originalSource:`{
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
}`},(Ze=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source)})});var He,Je,Qe;E.parameters=r(n({},E.parameters),{docs:r(n({},(He=E.parameters)==null?void 0:He.docs),{source:n({originalSource:`{
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
}`},(Qe=(Je=E.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source)})});var Ye,en,nn;M.parameters=r(n({},M.parameters),{docs:r(n({},(Ye=M.parameters)==null?void 0:Ye.docs),{source:n({originalSource:`{
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
}`},(nn=(en=M.parameters)==null?void 0:en.docs)==null?void 0:nn.source)})});var rn,tn,an;R.parameters=r(n({},R.parameters),{docs:r(n({},(rn=R.parameters)==null?void 0:rn.docs),{source:n({originalSource:`{
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
}`},(an=(tn=R.parameters)==null?void 0:tn.docs)==null?void 0:an.source)})});var sn,on,cn;P.parameters=r(n({},P.parameters),{docs:r(n({},(sn=P.parameters)==null?void 0:sn.docs),{source:n({originalSource:`{
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
}`},(cn=(on=P.parameters)==null?void 0:on.docs)==null?void 0:cn.source)})});const Tn=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options","ButtonsWithLocalIcons","ButtonsWithUntitledUIIcons","WithUntitledUIIcons"],En=Object.freeze(Object.defineProperty({__proto__:null,ButtonsWithLocalIcons:M,ButtonsWithUntitledUIIcons:R,Danger:w,Dashed:B,DashedWithIcon:I,Default:f,DefaultWithIcon:j,IconOnly:D,IconTypesOverview:U,Link:T,LinkUsageNote:h,LinkWithIcon:z,Loading:k,LoadingText:v,Primary:g,PrimaryWithIcon:x,Refresh:F,SizeExamples:b,Text:S,TypesOverview:L,With2Options:E,WithUntitledUIIcons:P,__namedExportsOrder:Tn,default:In},Symbol.toStringTag,{value:"Module"}));export{En as B,w as D,U as I,h as L,b as S,L as T,D as a,M as b,R as c,k as d,v as e};
