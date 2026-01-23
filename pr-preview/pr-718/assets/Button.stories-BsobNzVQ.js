var Ge=Object.defineProperty,Ve=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var C=(s,n,i)=>n in s?Ge(s,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[n]=i,e=(s,n)=>{for(var i in n||(n={}))$e.call(n,i)&&C(s,i,n[i]);if(M)for(var i of M(n))Ke.call(n,i)&&C(s,i,n[i]);return s},a=(s,n)=>Ve(s,Xe(n));var W=(s,n,i)=>new Promise((_e,P)=>{var qe=c=>{try{D(i.next(c))}catch(F){P(F)}},Ae=c=>{try{D(i.throw(c))}catch(F){P(F)}},D=c=>c.done?_e(c.value):Promise.resolve(c.value).then(qe,Ae);D((i=i.apply(s,n)).next())});import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{c as t,K as Ze,F as d,b as v,I as o,T as O,Z as He}from"./UnauthorizedTooltip-C5Rrwfsi.js";import{u as Je}from"./index-1POLsKUh.js";import"./ErrorStateIcon-DjeLwnVX.js";import"./SuccessStateIcon-C5cLUKk4.js";import"./WarningStateIcon-BOXajeGB.js";import"./_baseClone-DwBCp-Ss.js";import{B as Qe,n as Ye,u as er,t as rr,G as R}from"./style-JrC7ZBfm.js";const ar={title:"Components/General/Button",component:s=>{var n;return r.jsx(t,a(e({},s),{children:(n=s.children)!=null?n:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},l={parameters:{docs:{source:{state:"hidden"}}},render:()=>r.jsx(Ze,{type:"info",showIcon:!1,style:{backgroundColor:er,border:`1px solid ${Ye}`,borderRadius:Qe,width:"100%",marginBottom:0},message:r.jsxs(d,{align:"center",gap:rr,children:[r.jsx(v.Text,{size:"xl",children:"💡"}),r.jsxs(v.Text,{size:"base",children:["Use the"," ",r.jsx(v.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",underline:!0,children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},p={args:{type:"primary",children:"Primary"},play:s=>W(void 0,null,function*(){const n=s.canvasElement.querySelector("button");if(n)yield Je.click(n);else throw new Error("Button not found")})},m={args:{type:"primary",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Primary"}},u={args:{type:"default",children:"Secondary"}},y={args:{type:"default",icon:r.jsx(o,{size:"sm",name:"transformation"}),children:"Secondary"}},h={args:{type:"dashed",children:"Tertiary"}},g={args:{type:"dashed",icon:r.jsx(o,{size:"sm",name:"add"}),children:"Tertiary"}},x={args:{type:"link",children:"Link"}},f={args:{type:"link",icon:r.jsx(o,{name:"add"}),children:"Link"}},j={args:{type:"text",children:"Text"}},T={args:{type:"default",danger:!0,children:"Delete"}},B={args:{type:"primary",loading:!0,children:"Loading"}},k={args:{type:"text",loading:!0,children:"Load more"}},S={render:()=>r.jsxs(d,{wrap:!0,gap:R,align:"center",children:[r.jsx(t,{type:"primary",children:"Primary"}),r.jsx(t,{type:"default",children:"Secondary"}),r.jsx(t,{type:"dashed",children:"Tertiary"}),r.jsx(t,{type:"text",children:"Text"}),r.jsx(t,{type:"link",children:"Link"})]})},b={render:()=>r.jsxs(d,{wrap:!0,gap:R,align:"center",children:[r.jsx(t,{type:"primary",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Primary"}),r.jsx(t,{type:"default",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Secondary"}),r.jsx(t,{type:"dashed",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Tertiary"}),r.jsx(t,{type:"text",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Text"}),r.jsx(t,{type:"link",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Link"})]})},z={render:()=>r.jsxs(d,{gap:R,align:"center",children:[r.jsx(t,{type:"default",size:"small",children:"Small"}),r.jsx(t,{type:"default",children:"Default"}),r.jsx(t,{type:"default",size:"large",children:"Large"})]})},L={render:()=>r.jsxs(d,{wrap:!0,gap:R,align:"center",children:[r.jsx(t,{type:"primary",icon:r.jsx(o,{name:"add"}),"aria-label":"Primary action"}),r.jsx(t,{type:"default",icon:r.jsx(o,{name:"add"}),"aria-label":"Secondary action"}),r.jsx(t,{type:"dashed",icon:r.jsx(o,{name:"add"}),"aria-label":"Tertiary action"}),r.jsx(t,{type:"text",icon:r.jsx(o,{name:"add"}),"aria-label":"Refresh"}),r.jsx(t,{type:"link",icon:r.jsx(o,{name:"add"}),"aria-label":"Navigate"})]})},I={render:()=>r.jsx(r.Fragment,{children:r.jsxs(d,{gap:"small",align:"center",children:[r.jsx(O,{title:"Fetch new data from the server",children:r.jsx(t,{type:"text",icon:r.jsx(o,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),r.jsx(O,{title:"Refresh and fetch latest data",children:r.jsx(t,{type:"text",icon:r.jsx(o,{name:"refresh",size:"sm",color:"strong"})})})]})})},w={render:()=>{const s={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:n})=>{console.log("Selected:",n)}};return r.jsx(He,{menu:s,children:r.jsx(t,{icon:r.jsx(o,{name:"refresh",size:"sm"}),children:r.jsx(v.Text,{children:"Refresh Now"})})})}};var E,N,U;l.parameters=a(e({},l.parameters),{docs:a(e({},(E=l.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
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
}`},(U=(N=l.parameters)==null?void 0:N.docs)==null?void 0:U.source)})});var _,q,A;p.parameters=a(e({},p.parameters),{docs:a(e({},(_=p.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
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
}`},(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source)})});var G,V,X;m.parameters=a(e({},m.parameters),{docs:a(e({},(G=m.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`},(X=(V=m.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var $,K,Z;u.parameters=a(e({},u.parameters),{docs:a(e({},($=u.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`},(Z=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Z.source)})});var H,J,Q;y.parameters=a(e({},y.parameters),{docs:a(e({},(H=y.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`},(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var Y,ee,re;h.parameters=a(e({},h.parameters),{docs:a(e({},(Y=h.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`},(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});var ae,ne,te;g.parameters=a(e({},g.parameters),{docs:a(e({},(ae=g.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`},(te=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:te.source)})});var se,oe,ie;x.parameters=a(e({},x.parameters),{docs:a(e({},(se=x.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`},(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source)})});var ce,de,le;f.parameters=a(e({},f.parameters),{docs:a(e({},(ce=f.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`},(le=(de=f.parameters)==null?void 0:de.docs)==null?void 0:le.source)})});var pe,me,ue;j.parameters=a(e({},j.parameters),{docs:a(e({},(pe=j.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`},(ue=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ue.source)})});var ye,he,ge;T.parameters=a(e({},T.parameters),{docs:a(e({},(ye=T.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`},(ge=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ge.source)})});var xe,fe,je;B.parameters=a(e({},B.parameters),{docs:a(e({},(xe=B.parameters)==null?void 0:xe.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`},(je=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:je.source)})});var Te,Be,ke;k.parameters=a(e({},k.parameters),{docs:a(e({},(Te=k.parameters)==null?void 0:Te.docs),{source:e({originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`},(ke=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:ke.source)})});var Se,be,ze;S.parameters=a(e({},S.parameters),{docs:a(e({},(Se=S.parameters)==null?void 0:Se.docs),{source:e({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`},(ze=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ze.source)})});var Le,Ie,we;b.parameters=a(e({},b.parameters),{docs:a(e({},(Le=b.parameters)==null?void 0:Le.docs),{source:e({originalSource:`{
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
}`},(we=(Ie=b.parameters)==null?void 0:Ie.docs)==null?void 0:we.source)})});var ve,Re,De;z.parameters=a(e({},z.parameters),{docs:a(e({},(ve=z.parameters)==null?void 0:ve.docs),{source:e({originalSource:`{
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
}`},(De=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:De.source)})});var Fe,Pe,Me;L.parameters=a(e({},L.parameters),{docs:a(e({},(Fe=L.parameters)==null?void 0:Fe.docs),{source:e({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`},(Me=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source)})});var Ce,We,Oe;I.parameters=a(e({},I.parameters),{docs:a(e({},(Ce=I.parameters)==null?void 0:Ce.docs),{source:e({originalSource:`{
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
}`},(Oe=(We=I.parameters)==null?void 0:We.docs)==null?void 0:Oe.source)})});var Ee,Ne,Ue;w.parameters=a(e({},w.parameters),{docs:a(e({},(Ee=w.parameters)==null?void 0:Ee.docs),{source:e({originalSource:`{
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
}`},(Ue=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source)})});const nr=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options"],ur=Object.freeze(Object.defineProperty({__proto__:null,Danger:T,Dashed:h,DashedWithIcon:g,Default:u,DefaultWithIcon:y,IconOnly:L,IconTypesOverview:b,Link:x,LinkUsageNote:l,LinkWithIcon:f,Loading:B,LoadingText:k,Primary:p,PrimaryWithIcon:m,Refresh:I,SizeExamples:z,Text:j,TypesOverview:S,With2Options:w,__namedExportsOrder:nr,default:ar},Symbol.toStringTag,{value:"Module"}));export{ur as B,T as D,b as I,l as L,z as S,S as T,L as a,B as b,k as c};
