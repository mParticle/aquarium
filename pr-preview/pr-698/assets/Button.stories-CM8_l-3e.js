var _e=Object.defineProperty,qe=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var M=(s,t,i)=>t in s?_e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,e=(s,t)=>{for(var i in t||(t={}))Ae.call(t,i)&&M(s,i,t[i]);if(R)for(var i of R(t))Xe.call(t,i)&&M(s,i,t[i]);return s},a=(s,t)=>qe(s,Ne(t));var E=(s,t,i)=>new Promise((Oe,P)=>{var Ce=c=>{try{v(i.next(c))}catch(F){P(F)}},Ue=c=>{try{v(i.throw(c))}catch(F){P(F)}},v=c=>c.done?Oe(c.value):Promise.resolve(c.value).then(Ce,Ue);v((i=i.apply(s,t)).next())});import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{e as n,J as $e,F as d,c as D,I as o,T as W}from"./NavigationItemsService-AURVABgv.js";import{u as Ge}from"./index-9E5VwD_6.js";import"./ErrorStateIcon-BAZ3JLG4.js";import"./SuccessStateIcon-BZRJwWZf.js";import"./WarningStateIcon-DA5locek.js";import"./_baseClone-DwBCp-Ss.js";import{B as Je,l as He,m as Ke,n as Qe,w}from"./style-CWQo_erP.js";const Ve={title:"Components/General/Button",component:s=>{var t;return r.jsx(n,a(e({},s),{children:(t=s.children)!=null?t:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},l={parameters:{docs:{source:{state:"hidden"}}},render:()=>r.jsx($e,{type:"info",showIcon:!1,style:{backgroundColor:Ke,border:`1px solid ${He}`,borderRadius:Je,width:"100%",marginBottom:0},message:r.jsxs(d,{align:"center",gap:Qe,children:[r.jsx(D.Text,{size:"xl",children:"💡"}),r.jsxs(D.Text,{size:"base",children:["Use the"," ",r.jsx(D.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",underline:!0,children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},p={args:{type:"primary",children:"Primary"},play:s=>E(void 0,null,function*(){const t=s.canvasElement.querySelector("button");if(t)yield Ge.click(t);else throw new Error("Button not found")})},m={args:{type:"primary",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Primary"}},u={args:{type:"default",children:"Secondary"}},y={args:{type:"default",icon:r.jsx(o,{size:"sm",name:"transformation"}),children:"Secondary"}},g={args:{type:"dashed",children:"Tertiary"}},h={args:{type:"dashed",icon:r.jsx(o,{size:"sm",name:"add"}),children:"Tertiary"}},x={args:{type:"link",children:"Link"}},f={args:{type:"link",icon:r.jsx(o,{name:"add"}),children:"Link"}},j={args:{type:"text",children:"Text"}},B={args:{type:"default",danger:!0,children:"Delete"}},T={args:{type:"primary",loading:!0,children:"Loading"}},S={args:{type:"text",loading:!0,children:"Load more"}},k={render:()=>r.jsxs(d,{wrap:!0,gap:w,align:"center",children:[r.jsx(n,{type:"primary",children:"Primary"}),r.jsx(n,{type:"default",children:"Secondary"}),r.jsx(n,{type:"dashed",children:"Tertiary"}),r.jsx(n,{type:"text",children:"Text"}),r.jsx(n,{type:"link",children:"Link"})]})},z={render:()=>r.jsxs(d,{wrap:!0,gap:w,align:"center",children:[r.jsx(n,{type:"primary",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Primary"}),r.jsx(n,{type:"default",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Secondary"}),r.jsx(n,{type:"dashed",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Tertiary"}),r.jsx(n,{type:"text",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Text"}),r.jsx(n,{type:"link",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Link"})]})},L={render:()=>r.jsxs(d,{gap:w,align:"center",children:[r.jsx(n,{type:"default",size:"small",children:"Small"}),r.jsx(n,{type:"default",children:"Default"}),r.jsx(n,{type:"default",size:"large",children:"Large"})]})},b={render:()=>r.jsxs(d,{wrap:!0,gap:w,align:"center",children:[r.jsx(n,{type:"primary",icon:r.jsx(o,{name:"add"}),"aria-label":"Primary action"}),r.jsx(n,{type:"default",icon:r.jsx(o,{name:"add"}),"aria-label":"Secondary action"}),r.jsx(n,{type:"dashed",icon:r.jsx(o,{name:"add"}),"aria-label":"Tertiary action"}),r.jsx(n,{type:"text",icon:r.jsx(o,{name:"add"}),"aria-label":"Refresh"}),r.jsx(n,{type:"link",icon:r.jsx(o,{name:"add"}),"aria-label":"Navigate"})]})},I={render:()=>r.jsx(r.Fragment,{children:r.jsxs(d,{gap:"small",align:"center",children:[r.jsx(W,{title:"Fetch new data from the server",children:r.jsx(n,{type:"text",icon:r.jsx(o,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),r.jsx(W,{title:"Refresh and fetch latest data",children:r.jsx(n,{type:"text",icon:r.jsx(o,{name:"refresh",size:"sm",color:"strong"})})})]})})};var O,C,U;l.parameters=a(e({},l.parameters),{docs:a(e({},(O=l.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
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
}`},(U=(C=l.parameters)==null?void 0:C.docs)==null?void 0:U.source)})});var _,q,N;p.parameters=a(e({},p.parameters),{docs:a(e({},(_=p.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
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
}`},(N=(q=p.parameters)==null?void 0:q.docs)==null?void 0:N.source)})});var A,X,$;m.parameters=a(e({},m.parameters),{docs:a(e({},(A=m.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`},($=(X=m.parameters)==null?void 0:X.docs)==null?void 0:$.source)})});var G,J,H;u.parameters=a(e({},u.parameters),{docs:a(e({},(G=u.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`},(H=(J=u.parameters)==null?void 0:J.docs)==null?void 0:H.source)})});var K,Q,V;y.parameters=a(e({},y.parameters),{docs:a(e({},(K=y.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`},(V=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});var Y,Z,ee;g.parameters=a(e({},g.parameters),{docs:a(e({},(Y=g.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`},(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var re,ae,ne;h.parameters=a(e({},h.parameters),{docs:a(e({},(re=h.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`},(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source)})});var te,se,oe;x.parameters=a(e({},x.parameters),{docs:a(e({},(te=x.parameters)==null?void 0:te.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`},(oe=(se=x.parameters)==null?void 0:se.docs)==null?void 0:oe.source)})});var ie,ce,de;f.parameters=a(e({},f.parameters),{docs:a(e({},(ie=f.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`},(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});var le,pe,me;j.parameters=a(e({},j.parameters),{docs:a(e({},(le=j.parameters)==null?void 0:le.docs),{source:e({originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`},(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var ue,ye,ge;B.parameters=a(e({},B.parameters),{docs:a(e({},(ue=B.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`},(ge=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:ge.source)})});var he,xe,fe;T.parameters=a(e({},T.parameters),{docs:a(e({},(he=T.parameters)==null?void 0:he.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`},(fe=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:fe.source)})});var je,Be,Te;S.parameters=a(e({},S.parameters),{docs:a(e({},(je=S.parameters)==null?void 0:je.docs),{source:e({originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`},(Te=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Te.source)})});var Se,ke,ze;k.parameters=a(e({},k.parameters),{docs:a(e({},(Se=k.parameters)==null?void 0:Se.docs),{source:e({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`},(ze=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:ze.source)})});var Le,be,Ie;z.parameters=a(e({},z.parameters),{docs:a(e({},(Le=z.parameters)==null?void 0:Le.docs),{source:e({originalSource:`{
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
}`},(Ie=(be=z.parameters)==null?void 0:be.docs)==null?void 0:Ie.source)})});var we,ve,Fe;L.parameters=a(e({},L.parameters),{docs:a(e({},(we=L.parameters)==null?void 0:we.docs),{source:e({originalSource:`{
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
}`},(Fe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source)})});var De,Pe,Re;b.parameters=a(e({},b.parameters),{docs:a(e({},(De=b.parameters)==null?void 0:De.docs),{source:e({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`},(Re=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source)})});var Me,Ee,We;I.parameters=a(e({},I.parameters),{docs:a(e({},(Me=I.parameters)==null?void 0:Me.docs),{source:e({originalSource:`{
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
}`},(We=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:We.source)})});const Ye=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","IconTypesOverview","SizeExamples","IconOnly","Refresh"],cr=Object.freeze(Object.defineProperty({__proto__:null,Danger:B,Dashed:g,DashedWithIcon:h,Default:u,DefaultWithIcon:y,IconOnly:b,IconTypesOverview:z,Link:x,LinkUsageNote:l,LinkWithIcon:f,Loading:T,LoadingText:S,Primary:p,PrimaryWithIcon:m,Refresh:I,SizeExamples:L,Text:j,TypesOverview:k,__namedExportsOrder:Ye,default:Ve},Symbol.toStringTag,{value:"Module"}));export{cr as B,B as D,z as I,l as L,L as S,k as T,b as a,T as b,S as c};
