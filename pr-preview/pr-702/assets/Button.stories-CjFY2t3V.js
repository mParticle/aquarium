var Ke=Object.defineProperty,Ze=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var W=(o,a,i)=>a in o?Ke(o,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[a]=i,r=(o,a)=>{for(var i in a||(a={}))Je.call(a,i)&&W(o,i,a[i]);if(P)for(var i of P(a))Qe.call(a,i)&&W(o,i,a[i]);return o},n=(o,a)=>Ze(o,He(a));var O=(o,a,i)=>new Promise((Ve,M)=>{var Xe=l=>{try{D(i.next(l))}catch(F){M(F)}},$e=l=>{try{D(i.throw(l))}catch(F){M(F)}},D=l=>l.done?Ve(l.value):Promise.resolve(l.value).then(Xe,$e);D((i=i.apply(o,a)).next())});import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{e as t,K as Ye,F as d,c,I as s,T as E,Z as er}from"./NavigationItemsService-Dx7qdCN0.js";import{u as rr}from"./index-9E5VwD_6.js";import"./ErrorStateIcon-CpUmdImr.js";import"./SuccessStateIcon-LWOADyaV.js";import"./WarningStateIcon-DUjK27-t.js";import"./_baseClone-DwBCp-Ss.js";import{B as nr,m as tr,n as ar,o as or,x as C}from"./style-Pm6nqJ4t.js";const sr={title:"Components/General/Button",component:o=>{var a;return e.jsx(t,n(r({},o),{children:(a=o.children)!=null?a:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},p={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(Ye,{type:"info",showIcon:!1,style:{backgroundColor:ar,border:`1px solid ${tr}`,borderRadius:nr,width:"100%",marginBottom:0},message:e.jsxs(d,{align:"center",gap:or,children:[e.jsx(c.Text,{size:"xl",children:"💡"}),e.jsxs(c.Text,{size:"base",children:["Use the"," ",e.jsx(c.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",underline:!0,children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},u={args:{type:"primary",children:"Primary"},play:o=>O(void 0,null,function*(){const a=o.canvasElement.querySelector("button");if(a)yield rr.click(a);else throw new Error("Button not found")})},m={args:{type:"primary",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Primary"}},y={args:{type:"default",children:"Secondary"}},h={args:{type:"default",icon:e.jsx(s,{size:"sm",name:"transformation"}),children:"Secondary"}},g={args:{type:"dashed",children:"Tertiary"}},x={args:{type:"dashed",icon:e.jsx(s,{size:"sm",name:"add"}),children:"Tertiary"}},f={args:{type:"link",children:"Link"}},T={args:{type:"link",icon:e.jsx(s,{name:"add"}),children:"Link"}},j={args:{type:"text",children:"Text"}},B={args:{type:"default",danger:!0,children:"Delete"}},k={args:{type:"primary",loading:!0,children:"Loading"}},S={args:{type:"text",loading:!0,children:"Load more"}},I={render:()=>e.jsxs(d,{wrap:!0,gap:C,align:"center",children:[e.jsx(t,{type:"primary",children:"Primary"}),e.jsx(t,{type:"default",children:"Secondary"}),e.jsx(t,{type:"dashed",children:"Tertiary"}),e.jsx(t,{type:"text",children:"Text"}),e.jsx(t,{type:"link",children:"Link"})]})},b={render:()=>e.jsxs(d,{wrap:!0,gap:C,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Primary"}),e.jsx(t,{type:"default",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Secondary"}),e.jsx(t,{type:"dashed",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Tertiary"}),e.jsx(t,{type:"text",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Text"}),e.jsx(t,{type:"link",icon:e.jsx(s,{name:"add",size:"sm"}),children:"Link"})]})},L={render:()=>e.jsxs(d,{gap:C,align:"center",children:[e.jsx(t,{type:"default",size:"small",children:"Small"}),e.jsx(t,{type:"default",children:"Default"}),e.jsx(t,{type:"default",size:"large",children:"Large"})]})},z={render:()=>e.jsxs(d,{wrap:!0,gap:C,align:"center",children:[e.jsx(t,{type:"primary",icon:e.jsx(s,{name:"add"}),"aria-label":"Primary action"}),e.jsx(t,{type:"default",icon:e.jsx(s,{name:"add"}),"aria-label":"Secondary action"}),e.jsx(t,{type:"dashed",icon:e.jsx(s,{name:"add"}),"aria-label":"Tertiary action"}),e.jsx(t,{type:"text",icon:e.jsx(s,{name:"add"}),"aria-label":"Refresh"}),e.jsx(t,{type:"link",icon:e.jsx(s,{name:"add"}),"aria-label":"Navigate"})]})},v={render:()=>e.jsx(e.Fragment,{children:e.jsxs(d,{gap:"small",align:"center",children:[e.jsx(E,{title:"Fetch new data from the server",children:e.jsx(t,{type:"text",icon:e.jsx(s,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),e.jsx(E,{title:"Refresh and fetch latest data",children:e.jsx(t,{type:"text",icon:e.jsx(s,{name:"refresh",size:"sm",color:"strong"})})})]})})},w={render:()=>{const o={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:a})=>{console.log("Selected:",a)}};return e.jsx(er,{menu:o,children:e.jsx(t,{icon:e.jsx(s,{name:"refresh",size:"sm"}),children:e.jsx(c.Text,{children:"Refresh Now"})})})}},R={render:()=>e.jsxs(d,{vertical:!0,gap:C,children:[e.jsxs("div",{style:{color:"#52c41a"},children:[e.jsx(c.Text,{children:"Button link inside green text container:"}),e.jsx(t,{type:"link",color:"inherit",children:"Inherits Green Color"})]}),e.jsxs("div",{style:{color:"#ff4d4f"},children:[e.jsx(c.Text,{children:"Button link inside red text container:"}),e.jsx(t,{type:"link",color:"inherit",children:"Inherits Red Color"})]}),e.jsxs("div",{style:{color:"#1677ff"},children:[e.jsx(c.Text,{children:"Button link inside blue text container:"}),e.jsx(t,{type:"link",color:"inherit",children:"Inherits Blue Color"})]}),e.jsxs(c.Text,{type:"secondary",children:["Without color prop (uses default link color):",e.jsx(t,{type:"link",children:"Default Link Color"})]})]})};var N,U,_;p.parameters=n(r({},p.parameters),{docs:n(r({},(N=p.parameters)==null?void 0:N.docs),{source:r({originalSource:`{
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
}`},(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source)})});var q,G,A;u.parameters=n(r({},u.parameters),{docs:n(r({},(q=u.parameters)==null?void 0:q.docs),{source:r({originalSource:`{
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
}`},(A=(G=u.parameters)==null?void 0:G.docs)==null?void 0:A.source)})});var V,X,$;m.parameters=n(r({},m.parameters),{docs:n(r({},(V=m.parameters)==null?void 0:V.docs),{source:r({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`},($=(X=m.parameters)==null?void 0:X.docs)==null?void 0:$.source)})});var K,Z,H;y.parameters=n(r({},y.parameters),{docs:n(r({},(K=y.parameters)==null?void 0:K.docs),{source:r({originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`},(H=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:H.source)})});var J,Q,Y;h.parameters=n(r({},h.parameters),{docs:n(r({},(J=h.parameters)==null?void 0:J.docs),{source:r({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`},(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source)})});var ee,re,ne;g.parameters=n(r({},g.parameters),{docs:n(r({},(ee=g.parameters)==null?void 0:ee.docs),{source:r({originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`},(ne=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ne.source)})});var te,ae,oe;x.parameters=n(r({},x.parameters),{docs:n(r({},(te=x.parameters)==null?void 0:te.docs),{source:r({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`},(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source)})});var se,ie,ce;f.parameters=n(r({},f.parameters),{docs:n(r({},(se=f.parameters)==null?void 0:se.docs),{source:r({originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`},(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var le,de,pe;T.parameters=n(r({},T.parameters),{docs:n(r({},(le=T.parameters)==null?void 0:le.docs),{source:r({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`},(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source)})});var ue,me,ye;j.parameters=n(r({},j.parameters),{docs:n(r({},(ue=j.parameters)==null?void 0:ue.docs),{source:r({originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`},(ye=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ye.source)})});var he,ge,xe;B.parameters=n(r({},B.parameters),{docs:n(r({},(he=B.parameters)==null?void 0:he.docs),{source:r({originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`},(xe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:xe.source)})});var fe,Te,je;k.parameters=n(r({},k.parameters),{docs:n(r({},(fe=k.parameters)==null?void 0:fe.docs),{source:r({originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`},(je=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:je.source)})});var Be,ke,Se;S.parameters=n(r({},S.parameters),{docs:n(r({},(Be=S.parameters)==null?void 0:Be.docs),{source:r({originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`},(Se=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Se.source)})});var Ie,be,Le;I.parameters=n(r({},I.parameters),{docs:n(r({},(Ie=I.parameters)==null?void 0:Ie.docs),{source:r({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`},(Le=(be=I.parameters)==null?void 0:be.docs)==null?void 0:Le.source)})});var ze,ve,we;b.parameters=n(r({},b.parameters),{docs:n(r({},(ze=b.parameters)==null?void 0:ze.docs),{source:r({originalSource:`{
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
}`},(we=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:we.source)})});var Re,Ce,De;L.parameters=n(r({},L.parameters),{docs:n(r({},(Re=L.parameters)==null?void 0:Re.docs),{source:r({originalSource:`{
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
}`},(De=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:De.source)})});var Fe,Me,Pe;z.parameters=n(r({},z.parameters),{docs:n(r({},(Fe=z.parameters)==null?void 0:Fe.docs),{source:r({originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`},(Pe=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source)})});var We,Oe,Ee;v.parameters=n(r({},v.parameters),{docs:n(r({},(We=v.parameters)==null?void 0:We.docs),{source:r({originalSource:`{
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
}`},(Ee=(Oe=v.parameters)==null?void 0:Oe.docs)==null?void 0:Ee.source)})});var Ne,Ue,_e;w.parameters=n(r({},w.parameters),{docs:n(r({},(Ne=w.parameters)==null?void 0:Ne.docs),{source:r({originalSource:`{
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
}`},(_e=(Ue=w.parameters)==null?void 0:Ue.docs)==null?void 0:_e.source)})});var qe,Ge,Ae;R.parameters=n(r({},R.parameters),{docs:n(r({},(qe=R.parameters)==null?void 0:qe.docs),{source:r({originalSource:`{
  render: () => {
    return <Flex vertical gap={MarginMd}>
        <div style={{
        color: '#52c41a'
      }}>
          <Typography.Text>Button link inside green text container:</Typography.Text>
          <Button type="link" color="inherit">
            Inherits Green Color
          </Button>
        </div>

        <div style={{
        color: '#ff4d4f'
      }}>
          <Typography.Text>Button link inside red text container:</Typography.Text>
          <Button type="link" color="inherit">
            Inherits Red Color
          </Button>
        </div>

        <div style={{
        color: '#1677ff'
      }}>
          <Typography.Text>Button link inside blue text container:</Typography.Text>
          <Button type="link" color="inherit">
            Inherits Blue Color
          </Button>
        </div>

        <Typography.Text type="secondary">
          Without color prop (uses default link color):
          <Button type="link">Default Link Color</Button>
        </Typography.Text>
      </Flex>;
  }
}`},(Ae=(Ge=R.parameters)==null?void 0:Ge.docs)==null?void 0:Ae.source)})});const ir=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options","LinkColorInheritance"],xr=Object.freeze(Object.defineProperty({__proto__:null,Danger:B,Dashed:g,DashedWithIcon:x,Default:y,DefaultWithIcon:h,IconOnly:z,IconTypesOverview:b,Link:f,LinkColorInheritance:R,LinkUsageNote:p,LinkWithIcon:T,Loading:k,LoadingText:S,Primary:u,PrimaryWithIcon:m,Refresh:v,SizeExamples:L,Text:j,TypesOverview:I,With2Options:w,__namedExportsOrder:ir,default:sr},Symbol.toStringTag,{value:"Module"}));export{xr as B,B as D,b as I,p as L,L as S,I as T,z as a,k as b,S as c};
