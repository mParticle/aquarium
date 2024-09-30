var Ve=Object.defineProperty,Xe=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var en=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var G=(n,a,i)=>a in n?Ve(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,t=(n,a)=>{for(var i in a||(a={}))en.call(a,i)&&G(n,i,a[i]);if(U)for(var i of U(a))nn.call(a,i)&&G(n,i,a[i]);return n},o=(n,a)=>Xe(n,Ye(a));var I=(n,a,i)=>new Promise((r,s)=>{var h=p=>{try{d(i.next(p))}catch(D){s(D)}},c=p=>{try{d(i.throw(p))}catch(D){s(D)}},d=p=>p.done?r(p.value):Promise.resolve(p.value).then(h,c);d((i=i.apply(n,a)).next())});import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{e as v,s as b,u as k,f as tn}from"./index-C7MMNn6a.js";import{r as C}from"./index-CNk6hRaE.js";import{af as on,as as m,at as an,F as rn,b as _e,au as q,a4 as ln,I as l,a as De,B as Ue}from"./GlobalNavigation-CjryKqRY.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import"./index-TL6_15PV.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";function sn(n,a,i){const r=[];for(let s=0;s<n;s+=1){const h={id:`org-${s}`,label:`Org ${s}`,accounts:[]};for(let c=0;c<a;c+=1){const d={id:`account-${s}-${c}`,label:`Account ${s}-${c}`,workspaces:[]};h.accounts.push(d);for(let p=0;p<i;p+=1)d.workspaces.push({id:`workspace-${s}-${c}-${p}`,label:`Workspace ${s}-${c}-${p}`,isActive:s===0&&c===0&&p===0,onClick:()=>{alert(`Selected Workspace ${s}-${c}-${p}`)}})}r.push(h)}return r}const O={label:"Aqua",icon:e.jsx(l,{name:"alicorn",size:"xxl",color:"brand"}),type:"custom-size",onSuiteLogoClick:()=>{alert("Going to Aqua Home!")}},S=[{label:"Tool 1",isActive:!0,icon:e.jsx(l,{name:"privacy"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Tool 2",icon:e.jsx(l,{name:"favorite"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Tool 3",icon:e.jsx(l,{name:"connections"}),hrefOptions:{href:"/"}}],w=[{label:"Notifications",hideLabel:!0,icon:e.jsx(l,{name:"api"}),hrefOptions:{href:"/"}},{label:"Support",hideLabel:!0,icon:e.jsx(l,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(l,{name:"settings"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}},{label:"button",type:"button",buttonOptions:{onClick:()=>{alert("go")}}},{type:"button",label:"go",buttonOptions:{href:"/",target:"_blank"}}]}],x=[{id:"org1",label:"Org 1",accounts:[{id:"account1",label:"account 1",workspaces:[{id:"workspace1",label:"Workspace 111111111",isActive:!0,onClick:()=>{alert("Selected Workspace 1")}}]}]}],cn={open:!1,content:()=>e.jsx("div",{}),onClose:()=>{},onPreferencesClick:()=>{}},Hn={title:"Components/Navigation/GlobalNavigation",component:n=>e.jsx(on,{style:{minHeight:"800px"},children:e.jsx(m,t({},n))}),args:{logo:O,tools:S,management:w,orgs:x,notificationCenter:cn,navigationButtonItemOptions:{label:"Sign Out of mParticle",onClick:()=>{alert("signing out!")}},onMpHomeClick:()=>{alert("Going to mP!")}},argTypes:{notificationCenter:{content:{control:"string",table:{type:{summary:"ReactNode or RenderFunction to render the content"}}}}}},y={play:a=>I(void 0,[a],function*({canvasElement:n}){var c;const i=n.querySelector("li.globalNavigation__item");if(!i)throw new Error("Menu item not found");const r=i.querySelector("a");yield v(r).toBeNull();const s=n.querySelector(".globalNavigation__link");if(!s)throw new Error("Link item not found");yield v((c=s.computedStyleMap().get("cursor"))==null?void 0:c.toString()).toBe("pointer");const h=s.parentElement;yield v(h).toBeTruthy(),yield v(h).toHaveProperty("href")})},Ge={label:"Data Platform",icon:e.jsx(l,{name:"dataPlatform"})},qe={label:"Overview",icon:"overview",type:"background-solid",onSuiteLogoClick:()=>{alert("Going to mP Home!")}},dn={label:"Data Platform",icon:"catalog",type:"default",onSuiteLogoClick:()=>{alert("Going to mP Home!")}};function F(n){return e.jsxs(De,{children:[n,e.jsx(Ue,{color:"blue",count:"Beta",className:"globalNavigation__badge"})]})}const g=[{label:"Activity",icon:e.jsx(l,{name:"trends"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Platform Trends"},{hrefOptions:{href:"/"},label:e.jsxs(De,{children:["System Alerts",e.jsx(Ue,{color:"red"})]})},{hrefOptions:{href:"/"},label:"Event Forwarding"},{hrefOptions:{href:"/"},label:F("Observability")}]},{label:"Data Master",icon:e.jsx(l,{name:"database"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Catalog"},{hrefOptions:{href:"/"},label:"Plans"},{hrefOptions:{href:"/"},label:"Live Stream"},{hrefOptions:{href:"/"},label:F("User Groups")},{hrefOptions:{href:"/"},label:"Calculated Attributes"},{hrefOptions:{href:"/"},label:"Rules"}]},{label:"Audiences",icon:e.jsx(l,{name:"users"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Real-time"},{hrefOptions:{href:"/"},label:"Standard"},{hrefOptions:{href:"/"},label:"Journeys"}]},{label:"Connections",icon:e.jsx(l,{name:"connections"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Connect"},{hrefOptions:{href:"/"},label:"Platform Filters"},{hrefOptions:{href:"/"},label:"Feed Filters"}]},{label:"Setup",icon:e.jsx(l,{name:"setup"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Inputs"},{hrefOptions:{href:"/"},label:"Outputs"},{hrefOptions:{href:"/"},label:"Data Warehouse"},{hrefOptions:{href:"/"},label:"CRM"}]},{label:"Directory",icon:e.jsx(l,{name:"myHub"}),hrefOptions:{href:"/"}}],u=[{isActive:!0,label:"Support",hideLabel:!0,icon:e.jsx(l,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(l,{name:"settings"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Platform Settings"},{hrefOptions:{href:"/"},label:"User Settings"},{hrefOptions:{href:"/"},label:e.jsx(_e,{type:"primary",children:"Switch to Legacy UI"})}]}],f=[{id:"org1",label:"Org 1",accounts:[{id:"account1",label:"Account 1",workspaces:[{id:"workspace1",label:"Workspace 1",isActive:!1,onClick:()=>{alert("Selected workspace 1")}},{id:"workspace1a",label:"Workspace 1a",isActive:!1,onClick:()=>{alert("Selected workspace 1a")}},{id:"workspace1b",label:"Workspace 1b",isActive:!1,onClick:()=>{alert("Selected workspace 1b")}}]}]},{id:"org2",label:"Org 2",accounts:[{id:"account2",label:"Account 2",workspaces:[{id:"workspace2",label:"Workspace 2",isActive:!1,onClick:()=>{alert("Selected workspace 2")}}]},{id:"account2a",label:"Account 2a",workspaces:[{id:"workspace2a",label:"Workspace 2a",isActive:!1,onClick:()=>{alert("Selected workspace 2")}},{id:"workspace2ab",label:"_Workspace 2ab",isActive:!0,onClick:()=>{alert("Selected workspace 2")}}]}]},{id:"org3",label:"Org 3",accounts:[{id:"account3",label:"Account 3",workspaces:[{id:"workspace3",label:"Workspace 3",isActive:!1,onClick:()=>{alert("Selected workspace 3")}}]}]},{id:"org4",label:"Org 4",accounts:[{id:"account4",label:"Account 4",workspaces:[{id:"workspace4",label:"Workspace 4",isActive:!1,onClick:()=>{alert("Selected workspace 4")}}]}]},{id:"org5",label:"Org 5",accounts:[{id:"account5",label:"Account 5",workspaces:[{id:"workspace5",label:"Workspace 5",isActive:!1,onClick:()=>{alert("Selected workspace 5")}}]}]},{id:"org6",label:"Org 6",accounts:[{id:"account6",label:"Account 6",workspaces:[{id:"workspace6",label:"Workspace 6",isActive:!1,onClick:()=>{alert("Selected workspace 6")}}]}]},{id:"org7",label:"Org 7",accounts:[{id:"account7",label:"Account 7",workspaces:[{id:"workspace7",label:"Workspace 7",isActive:!1,onClick:()=>{alert("Selected workspace 7")}}]}]}],j={args:{onSearchClick:()=>{alert("Searching!")},logo:Ge,tools:g,management:u,orgs:f,minimapOptions:{overviewHref:"/",onLinkClick:n=>{alert(n.href)},onUnauthorizedClick:n=>{alert(`unauthorized ${n==null?void 0:n.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]},onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"}}},pn=sn(1e3,4,4),L={render:n=>e.jsx("div",{style:{width:800},children:e.jsx(m,o(t({},n),{onSearchClick:()=>{alert("Searching!")},logo:Ge,tools:g,management:u,orgs:pn,onMpHomeClick:()=>{alert("going to overview map")}}))})},Fe={label:"Analytics",icon:e.jsx(l,{name:"analytics"}),onSuiteLogoClick:()=>{alert("Going to Analytics Home!")}},Ze=[{label:"My Hub",icon:e.jsx(l,{name:"myHub"}),isActive:!0,hrefOptions:{href:"/"}},{label:"Saved",icon:e.jsx(l,{name:"savedProjects"}),hrefOptions:{href:"/"}},{label:"Manage Data",icon:e.jsx(l,{name:"database"}),hrefOptions:{href:"/"}}],Je=[{label:"Support",hideLabel:!0,icon:e.jsx(l,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(l,{name:"settings"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]}],Ke=[{type:"group",label:"Dashboard"},{title:"Dashboard",description:"Create a new dashboard to organize your saved analysis.",onClick:()=>{alert("Opening New Dashboard Modal")}},{label:"Segmentation",type:"group"},{onClick:()=>{alert("clicked")},title:"Event Segmentation",description:"Measure engagement based on behaviors and attributes."},{disabled:!0,tooltip:"is disabled",onClick:()=>{alert("clicked disabled")},title:"User Segmentation",description:"Measure unique users based on behaviors and attributes."},{title:"Revenue Analysis",description:"Track revenue over time."},{title:"Frequency",description:"Analyze how many distinct times an event is performed within a given interval.",tooltip:"This feature is currently locked",onClick:()=>{alert("Opening paywall modal.")},isLocked:!0},{label:"Funnel",type:"group"},{title:"Conversion and Drop Off",description:"Identify points of friction between funnel steps."},{title:"Multipath Funnel",description:"Analyze multiple customer paths to identify the optimal path to conversion."},{title:"Conversion Over Time",description:"Track key conversion metrics over time."},{title:"Contribution",description:"Reverse the funnel to measure each step's contribution to the target action."},{label:"Journeys",type:"group"},{isLoading:!0,tooltip:"Journeys data is loading, please check back later.",title:"Journeys From an Event",description:"Discover the most common paths users take from a starting point."},{title:"Journeys To an Event",description:"Discover the most common paths users take towards a target action."},{label:"Cohort",type:"group"},{title:"Retention",description:"Analyze how often user cohorts return to engage with a target action."},{title:"Activation",description:"Analyze when user cohorts engage with a target action for the first time."},{label:"Users",type:"group"},{title:"User Lookup by ID",description:"Find a user by searching for their User ID."},{title:"User Lookup by Event",description:"Display a list of users who performed an event."},{title:"User Lookup by Segment",description:"Display a list of users who are in a particular User Segment."}],Qe=[{id:"org1",label:"Org 1",accounts:[{id:"",label:"",workspaces:[{id:"project 1",label:"Project 1",isActive:!1,onClick:()=>{alert("Selected project 1")}}]}]},{id:"org2",label:"Org 2",accounts:[{id:"",label:"",workspaces:[{id:"project 2",label:"Project2Project2Project2Project2Project2Project2",isActive:!0,onClick:()=>{alert("Selected project 2")}}]}]},{id:"org3",label:"Org 3",accounts:[{id:"",label:"",workspaces:[{id:"project 3",label:"Project 3",isActive:!1,onClick:()=>{alert("Selected project 3")}}]}]},{id:"org4",label:"Org 4",accounts:[{id:"",label:"",workspaces:[{id:"project 4",label:"Project 4",isActive:!1,onClick:()=>{alert("Selected project 4")}}]}]},{id:"org5",label:"Org 5",accounts:[{id:"",label:"",workspaces:[{id:"project 5",label:"Project 5",isActive:!1,onClick:()=>{alert("Selected project 5")}}]}]},{id:"org6",label:"Org 6",accounts:[{id:"",label:"",workspaces:[{id:"project 6",label:"Project 6",isActive:!1,onClick:()=>{alert("Selected project 6")}}]}]},{id:"org7",label:"Org 7",accounts:[{id:"",label:"",workspaces:[{id:"project 7",label:"Project 7",isActive:!1,onClick:()=>{alert("Selected project 7")}}]}]}],M={args:{logo:Fe,tools:Ze,management:Je,createItems:Ke,orgs:Qe,navigationButtonItemOptions:{label:"Custom Signout Label",onClick:()=>{alert("Signout!")}},onMpHomeClick:()=>{alert("going to overview map")}}},P={args:{logo:Fe,tools:Ze,management:Je,createItems:Ke,orgs:Qe,minimapOptions:{overviewHref:"/",onLinkClick:n=>{n.linkId!=="analytics"&&alert(n.href)},links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}],activeLink:"analytics"},navigationButtonItemOptions:{label:"Custom Signout Label",onClick:()=>{alert("Signout!")}},onMpHomeClick:()=>{alert("going to overview map")}}},hn={label:"Predictions",icon:"predictions",type:"background-solid",onSuiteLogoClick:()=>{alert("Going to Predictions Home!")}},mn=[{label:"Pipelines",icon:e.jsx(l,{name:"predictions",variant:"duo-tone"}),hrefOptions:{href:"/"}},{label:"Projects",icon:e.jsx(l,{name:"journeys"}),hrefOptions:{href:"/"},isActive:!0},{label:"Data",icon:e.jsx(l,{name:"database"}),hrefOptions:{href:"/"}},{label:"API",icon:e.jsx(l,{name:"predictions",variant:"duo-tone"}),hrefOptions:{href:"/"}},{label:"Insights",icon:e.jsx(l,{name:"insights"}),hrefOptions:{href:"/"}}],gn=[{label:"Support",hideLabel:!0,icon:e.jsx(l,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(l,{name:"settings"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]}],un=[{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 1",label:"Account 1",onClick:()=>{alert("Selected Account 1")},isActive:!1}]}]},{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 2",label:"Account 2",onClick:()=>{alert("Selected Account 2")},isActive:!0}]}]},{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 3",label:"Account 3",onClick:()=>{alert("Selected Account 3")},isActive:!1}]}]},{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 4",label:"Account 4",onClick:()=>{alert("Selected Account 4")},isActive:!1}]}]}],N={args:{logo:hn,tools:mn,management:gn,orgs:un,onMpHomeClick:()=>{alert("going to overview map")},navigationButtonItemOptions:{label:"Sign Out of mParticle",onClick:()=>{alert("onSignout click")}},minimapOptions:{overviewHref:"/",onLinkClick:n=>{n.linkId!=="predictions"&&alert(n.href)},links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}],activeLink:"predictions"}}},A={args:{orgs:f},play:()=>I(void 0,null,function*(){const n=b.getByText("_W2");yield k.hover(n);const a=yield b.findByPlaceholderText("Search");yield k.type(a,"123{enter}")})},T={play:()=>I(void 0,null,function*(){const n=tn().mockImplementation(()=>{});global.alert=n;const a=b.getByText("Show Notification");yield k.click(a);const i=yield b.findByText("Remind me later");yield k.click(i),yield v(n).toBeCalledWith("Remind me later"),yield k.click(a);const r=yield b.findByText("Take me there");yield k.click(r),yield v(n).toBeCalledWith("Take me there")}),render:n=>{const[a,i]=an({onClose:()=>{alert("Notification closed")},onRemindMeLater:()=>{alert("Remind me later")},onTakeMeThere:()=>{alert("Take me there")}});return e.jsxs(rn,{style:{minHeight:800,width:600,border:"1px solid black"},justify:"space-between",vertical:!1,children:[i,e.jsx("div",{children:e.jsx(m,t({},n))}),e.jsx(_e,{onClick:a,children:"Show Notification"})]})},args:{logo:O,tools:S,management:w,orgs:x,navigationButtonItemOptions:{label:"Sign Out of mParticle",onClick:()=>{alert("signing out!")}},onMpHomeClick:()=>{alert("Going to mP!")}}},B={args:{onSearchClick:()=>{alert("Searching!")},logo:{onSuiteLogoClick:()=>{},label:""},tools:g,management:u,orgs:f,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!1}},H={args:{onSearchClick:()=>{alert("Searching!")},logo:qe,tools:g,management:u,orgs:f,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!0}},W={args:{onSearchClick:()=>{alert("Searching!")},logo:dn,tools:g,management:u,orgs:f,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!0}},z={render:()=>{const[n,a]=C.useState(!1),i={label:"Sign Out of mParticle",onClick:()=>{alert("Signout!")}},r={label:"Data Platform",icon:"catalog",type:"background-solid",onSuiteLogoClick:()=>{a(s=>!s)},navSwitcherTourOptions:{open:n,onClose:()=>{a(!1)}}};return e.jsx("div",{style:{width:800},children:e.jsx(m,{onSearchClick:()=>{alert("Searching!")},logo:r,tools:g,management:u,orgs:f,onMpHomeClick:()=>{alert("going to overview map")},navigationButtonItemOptions:i})})}},E={args:{onSearchClick:()=>{alert("Searching!")},logo:qe,tools:g,management:u,orgs:f,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!0,suiteSelectorOptions:{overviewHref:"/",onLinkClick:n=>{alert(n.href)},onUnauthorizedClick:n=>{alert(`unauthorized ${n==null?void 0:n.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}},$={render:n=>{const[a,i]=C.useState(!1);return e.jsx("div",{children:e.jsx(m,o(t({},n),{notificationCenter:{open:a,onOpenChange:r=>{i(r)},content:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"})]})},logo:O,tools:S,management:w,orgs:x,showSuiteLogo:!0,onSearchClick:()=>{alert("Searching!")},suiteSelectorOptions:{overviewHref:"/",onLinkClick:r=>{alert(r.href)},onUnauthorizedClick:r=>{alert(`unauthorized ${r==null?void 0:r.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}))})}},R={render:n=>{const[a,i]=C.useState(!1);return e.jsx("div",{children:e.jsx(m,o(t({},n),{notificationCenter:{open:a,onOpenChange:r=>{i(r)},content:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content End"})]})},logo:O,tools:S,management:w,orgs:x,showSuiteLogo:!0,onSearchClick:()=>{alert("Searching!")},suiteSelectorOptions:{overviewHref:"/",onLinkClick:r=>{alert(r.href)},onUnauthorizedClick:r=>{alert(`unauthorized ${r==null?void 0:r.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}))})}},_={render:n=>{const[a,i]=C.useState(!1),[r,s]=C.useState(!1),[h,c]=C.useState(q);return e.jsxs("div",{children:[e.jsx(ln,{open:r,maskClosable:!1,destroyOnClose:!0,onCancel:()=>{s(!1)},onOk:()=>{s(!1)},afterClose:()=>{c(q)},centered:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Message Title"}),e.jsx("p",{children:"Message Description"})]})}),e.jsx(m,o(t({},n),{notificationCenter:{open:a,zIndex:h,onOpenChange:d=>{r||i(d)},content:()=>e.jsxs("div",{children:[e.jsx("div",{onClick:()=>{c(0),s(!0)},children:"Open Modal"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"})]}),onClose:()=>{i(!1)},onPreferencesClick:()=>{i(!1)}},logo:O,tools:S,management:w,orgs:x,showSuiteLogo:!0,onSearchClick:()=>{alert("Searching!")},suiteSelectorOptions:{overviewHref:"/",onLinkClick:d=>{alert(d.href)},onUnauthorizedClick:d=>{alert(`unauthorized ${d==null?void 0:d.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}))]})}};var Z,J,K;y.parameters=o(t({},y.parameters),{docs:o(t({},(Z=y.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
  // This would benefit from test IDs, we have a future task to do that.
  play: async ({
    canvasElement
  }) => {
    const menuItem = canvasElement.querySelector('li.globalNavigation__item');
    if (!menuItem) throw new Error('Menu item not found');
    const nullAnchorEl = menuItem.querySelector('a');
    await expect(nullAnchorEl).toBeNull();
    const linkItem = canvasElement.querySelector('.globalNavigation__link');
    if (!linkItem) throw new Error('Link item not found');
    await expect(linkItem.computedStyleMap().get('cursor')?.toString()).toBe('pointer');
    const anchorEl = linkItem.parentElement;
    await expect(anchorEl).toBeTruthy();
    await expect(anchorEl).toHaveProperty('href');
  }
}`},(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,V,X;j.parameters=o(t({},j.parameters),{docs:o(t({},(Q=j.parameters)==null?void 0:Q.docs),{source:t({originalSource:`{
  args: {
    onSearchClick: () => {
      alert('Searching!');
    },
    logo: mpLogo,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    minimapOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        alert(link.href);
      },
      onUnauthorizedClick: link => {
        alert(\`unauthorized \${link?.href} \`);
      },
      unauthorizedLinks: ['dataPlatform'],
      activeLink: 'oversight',
      links: [{
        linkId: 'oversight',
        href: '/oversight'
      }, {
        linkId: 'dataPlatform',
        href: '/data-platform'
      }, {
        linkId: 'customer360',
        href: '/customer-360'
      }, {
        linkId: 'predictions',
        href: '/predictions'
      }, {
        linkId: 'analytics',
        href: '/analytics'
      }, {
        linkId: 'segmentation',
        href: '/segmentation'
      }]
    },
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    avatarOptions: {
      alt: 'avatar'
    }
  }
}`},(X=(V=j.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Y,ee,ne;L.parameters=o(t({},L.parameters),{docs:o(t({},(Y=L.parameters)==null?void 0:Y.docs),{source:t({originalSource:`{
  render: props => {
    return <div style={{
      width: 800
    }}>
        <GlobalNavigation {...props} onSearchClick={() => {
        alert('Searching!');
      }} logo={mpLogo} tools={mpTools} management={mpManagement} orgs={thousandOrgs} onMpHomeClick={() => {
        alert('going to overview map');
      }} />
      </div>;
  }
}`},(ne=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:ne.source)})});var te,oe,ie;M.parameters=o(t({},M.parameters),{docs:o(t({},(te=M.parameters)==null?void 0:te.docs),{source:t({originalSource:`{
  args: {
    logo: indLogo,
    tools: indTools,
    management: indManagement,
    createItems: indCreateItems,
    orgs: indOrgs,
    navigationButtonItemOptions: {
      label: 'Custom Signout Label',
      onClick: () => {
        alert('Signout!');
      }
    },
    onMpHomeClick: () => {
      alert('going to overview map');
    }
  }
}`},(ie=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:ie.source)})});var ae,re,le;P.parameters=o(t({},P.parameters),{docs:o(t({},(ae=P.parameters)==null?void 0:ae.docs),{source:t({originalSource:`{
  args: {
    logo: indLogo,
    tools: indTools,
    management: indManagement,
    createItems: indCreateItems,
    orgs: indOrgs,
    minimapOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        if (link.linkId !== 'analytics') alert(link.href);
      },
      links: [{
        linkId: 'oversight',
        href: '/oversight'
      }, {
        linkId: 'dataPlatform',
        href: '/data-platform'
      }, {
        linkId: 'customer360',
        href: '/customer-360'
      }, {
        linkId: 'predictions',
        href: '/predictions'
      }, {
        linkId: 'analytics',
        href: '/analytics'
      }, {
        linkId: 'segmentation',
        href: '/segmentation'
      }],
      activeLink: 'analytics'
    },
    navigationButtonItemOptions: {
      label: 'Custom Signout Label',
      onClick: () => {
        alert('Signout!');
      }
    },
    onMpHomeClick: () => {
      alert('going to overview map');
    }
  }
}`},(le=(re=P.parameters)==null?void 0:re.docs)==null?void 0:le.source)})});var se,ce,de;N.parameters=o(t({},N.parameters),{docs:o(t({},(se=N.parameters)==null?void 0:se.docs),{source:t({originalSource:`{
  args: {
    logo: cortexLogo,
    tools: cortexTools,
    management: cortexManagement,
    orgs: cortexOrgs,
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    navigationButtonItemOptions: {
      label: 'Sign Out of mParticle',
      onClick: () => {
        alert('onSignout click');
      }
    },
    minimapOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        if (link.linkId !== 'predictions') alert(link.href);
      },
      links: [{
        linkId: 'oversight',
        href: '/oversight'
      }, {
        linkId: 'dataPlatform',
        href: '/data-platform'
      }, {
        linkId: 'customer360',
        href: '/customer-360'
      }, {
        linkId: 'predictions',
        href: '/predictions'
      }, {
        linkId: 'analytics',
        href: '/analytics'
      }, {
        linkId: 'segmentation',
        href: '/segmentation'
      }],
      activeLink: 'predictions'
    }
  }
}`},(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});var pe,he,me;A.parameters=o(t({},A.parameters),{docs:o(t({},(pe=A.parameters)==null?void 0:pe.docs),{source:t({originalSource:`{
  args: {
    orgs: mpOrgs
  },
  play: async () => {
    const workspaceSelector = screen.getByText('_W2');
    await userEvent.hover(workspaceSelector);
    const searchInput = await screen.findByPlaceholderText('Search');
    await userEvent.type(searchInput, '123{enter}');
  }
}`},(me=(he=A.parameters)==null?void 0:he.docs)==null?void 0:me.source)})});var ge,ue,fe;T.parameters=o(t({},T.parameters),{docs:o(t({},(ge=T.parameters)==null?void 0:ge.docs),{source:t({originalSource:`{
  play: async () => {
    const alert = fn().mockImplementation(() => {});
    global.alert = alert;
    const showNotificationBtn = screen.getByText('Show Notification');
    await userEvent.click(showNotificationBtn);

    // Remind me later
    const remindMeLaterBtn = await screen.findByText('Remind me later');
    await userEvent.click(remindMeLaterBtn);
    await expect(alert).toBeCalledWith('Remind me later');

    // Take me there
    await userEvent.click(showNotificationBtn);
    const takeMeThereBtn = await screen.findByText('Take me there');
    await userEvent.click(takeMeThereBtn);
    await expect(alert).toBeCalledWith('Take me there');
  },
  render: props => {
    const [openNotification, contextHolder] = useNewExperienceReminder({
      onClose: () => {
        alert('Notification closed');
      },
      onRemindMeLater: () => {
        alert('Remind me later');
      },
      onTakeMeThere: () => {
        alert('Take me there');
      }
    });
    return <Flex style={{
      minHeight: 800,
      width: 600,
      border: '1px solid black'
    }} justify="space-between" vertical={false}>
        {contextHolder}
        <div>
          <GlobalNavigation {...props}></GlobalNavigation>
        </div>
        <Button onClick={openNotification}>Show Notification</Button>
      </Flex>;
  },
  args: {
    logo: defaultLogo,
    tools: defaultTools,
    management: defaultManagement,
    orgs: defaultOrgs,
    navigationButtonItemOptions: {
      label: 'Sign Out of mParticle',
      onClick: () => {
        alert('signing out!');
      }
    },
    onMpHomeClick: () => {
      alert('Going to mP!');
    }
  }
}`},(fe=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:fe.source)})});var ve,ke,Ce;B.parameters=o(t({},B.parameters),{docs:o(t({},(ve=B.parameters)==null?void 0:ve.docs),{source:t({originalSource:`{
  args: {
    onSearchClick: () => {
      alert('Searching!');
    },
    logo: {
      onSuiteLogoClick: () => {},
      label: ''
    },
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar'
    },
    showSuiteLogo: false
  }
}`},(Ce=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source)})});var be,Oe,Se;H.parameters=o(t({},H.parameters),{docs:o(t({},(be=H.parameters)==null?void 0:be.docs),{source:t({originalSource:`{
  args: {
    onSearchClick: () => {
      alert('Searching!');
    },
    logo: mpLogoWithBackground,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar'
    },
    showSuiteLogo: true
  }
}`},(Se=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:Se.source)})});var we,xe,Ie;W.parameters=o(t({},W.parameters),{docs:o(t({},(we=W.parameters)==null?void 0:we.docs),{source:t({originalSource:`{
  args: {
    onSearchClick: () => {
      alert('Searching!');
    },
    logo: mpLogoWithoutCustomSizeLogo,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar'
    },
    showSuiteLogo: true
  }
}`},(Ie=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source)})});var ye,je,Le;z.parameters=o(t({},z.parameters),{docs:o(t({},(ye=z.parameters)==null?void 0:ye.docs),{source:t({originalSource:`{
  render: () => {
    const [open, setOpen] = useState<boolean>(false);
    const navigationButtonItemOptions = {
      label: 'Sign Out of mParticle',
      onClick: () => {
        alert('Signout!');
      }
    };
    const mpLogoWithTour: IGlobalNavigationLogo = {
      label: 'Data Platform',
      icon: 'catalog',
      type: 'background-solid',
      onSuiteLogoClick: () => {
        setOpen(currentOpen => !currentOpen);
      },
      navSwitcherTourOptions: {
        open,
        onClose: () => {
          setOpen(false);
        }
      }
    };
    return <div style={{
      width: 800
    }}>
        <GlobalNavigation onSearchClick={() => {
        alert('Searching!');
      }} logo={mpLogoWithTour} tools={mpTools} management={mpManagement} orgs={mpOrgs} onMpHomeClick={() => {
        alert('going to overview map');
      }} navigationButtonItemOptions={navigationButtonItemOptions} />
      </div>;
  }
}`},(Le=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Le.source)})});var Me,Pe,Ne;E.parameters=o(t({},E.parameters),{docs:o(t({},(Me=E.parameters)==null?void 0:Me.docs),{source:t({originalSource:`{
  args: {
    onSearchClick: () => {
      alert('Searching!');
    },
    logo: mpLogoWithBackground,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    avatarOptions: {
      // src: "https://static-qa1.qa.corp.mparticle.com/appimg/logo_af_916397d2-9732-8de6-77cc-80e3bba120ca.png",
      alt: 'avatar'
    },
    showSuiteLogo: true,
    suiteSelectorOptions: {
      overviewHref: '/',
      onLinkClick: link => {
        alert(link.href);
      },
      onUnauthorizedClick: link => {
        alert(\`unauthorized \${link?.href} \`);
      },
      unauthorizedLinks: ['dataPlatform'],
      activeLink: 'oversight',
      links: [{
        linkId: 'oversight',
        href: '/oversight'
      }, {
        linkId: 'dataPlatform',
        href: '/data-platform'
      }, {
        linkId: 'customer360',
        href: '/customer-360'
      }, {
        linkId: 'predictions',
        href: '/predictions'
      }, {
        linkId: 'analytics',
        href: '/analytics'
      }, {
        linkId: 'segmentation',
        href: '/segmentation'
      }]
    }
  }
}`},(Ne=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source)})});var Ae,Te,Be;$.parameters=o(t({},$.parameters),{docs:o(t({},(Ae=$.parameters)==null?void 0:Ae.docs),{source:t({originalSource:`{
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false);
    return <div>
        <GlobalNavigation {...props} notificationCenter={{
        open: isNotificationCenterOpen,
        onOpenChange: (newOpen: boolean) => {
          setIsNotificationCenterOpen(newOpen);
        },
        content: () => <div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
              </div>
      }} logo={defaultLogo} tools={defaultTools} management={defaultManagement} orgs={defaultOrgs} showSuiteLogo={true} onSearchClick={() => {
        alert('Searching!');
      }} suiteSelectorOptions={{
        overviewHref: '/',
        onLinkClick: link => {
          alert(link.href);
        },
        onUnauthorizedClick: link => {
          alert(\`unauthorized \${link?.href} \`);
        },
        unauthorizedLinks: ['dataPlatform'],
        activeLink: 'oversight',
        links: [{
          linkId: 'oversight',
          href: '/oversight'
        }, {
          linkId: 'dataPlatform',
          href: '/data-platform'
        }, {
          linkId: 'customer360',
          href: '/customer-360'
        }, {
          linkId: 'predictions',
          href: '/predictions'
        }, {
          linkId: 'analytics',
          href: '/analytics'
        }, {
          linkId: 'segmentation',
          href: '/segmentation'
        }]
      }} />
      </div>;
  }
}`},(Be=(Te=$.parameters)==null?void 0:Te.docs)==null?void 0:Be.source)})});var He,We,ze;R.parameters=o(t({},R.parameters),{docs:o(t({},(He=R.parameters)==null?void 0:He.docs),{source:t({originalSource:`{
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false);
    return <div>
        <GlobalNavigation {...props} notificationCenter={{
        open: isNotificationCenterOpen,
        onOpenChange: (newOpen: boolean) => {
          setIsNotificationCenterOpen(newOpen);
        },
        content: () => <div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content End</div>
              </div>
      }} logo={defaultLogo} tools={defaultTools} management={defaultManagement} orgs={defaultOrgs} showSuiteLogo={true} onSearchClick={() => {
        alert('Searching!');
      }} suiteSelectorOptions={{
        overviewHref: '/',
        onLinkClick: link => {
          alert(link.href);
        },
        onUnauthorizedClick: link => {
          alert(\`unauthorized \${link?.href} \`);
        },
        unauthorizedLinks: ['dataPlatform'],
        activeLink: 'oversight',
        links: [{
          linkId: 'oversight',
          href: '/oversight'
        }, {
          linkId: 'dataPlatform',
          href: '/data-platform'
        }, {
          linkId: 'customer360',
          href: '/customer-360'
        }, {
          linkId: 'predictions',
          href: '/predictions'
        }, {
          linkId: 'analytics',
          href: '/analytics'
        }, {
          linkId: 'segmentation',
          href: '/segmentation'
        }]
      }} />
      </div>;
  }
}`},(ze=(We=R.parameters)==null?void 0:We.docs)==null?void 0:ze.source)})});var Ee,$e,Re;_.parameters=o(t({},_.parameters),{docs:o(t({},(Ee=_.parameters)==null?void 0:Ee.docs),{source:t({originalSource:`{
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zIndex, setZIndex] = useState(NotificationCenterZIndex);
    return <div>
        <Modal open={isModalOpen} maskClosable={false} destroyOnClose={true} onCancel={() => {
        setIsModalOpen(false);
      }} onOk={() => {
        setIsModalOpen(false);
      }} afterClose={() => {
        setZIndex(NotificationCenterZIndex);
      }} centered={true}>
          <div>
            <p>Message Title</p>
            <p>Message Description</p>
          </div>
        </Modal>
        <GlobalNavigation {...props} notificationCenter={{
        open: isNotificationCenterOpen,
        zIndex: zIndex,
        onOpenChange: (newOpen: boolean) => {
          if (isModalOpen) {
            return;
          }
          setIsNotificationCenterOpen(newOpen);
        },
        content: () => <div>
                <div onClick={() => {
            setZIndex(0);
            setIsModalOpen(true);
          }}>
                  Open Modal
                </div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
              </div>,
        onClose: () => {
          setIsNotificationCenterOpen(false);
        },
        onPreferencesClick: () => {
          setIsNotificationCenterOpen(false);
        }
      }} logo={defaultLogo} tools={defaultTools} management={defaultManagement} orgs={defaultOrgs} showSuiteLogo={true} onSearchClick={() => {
        alert('Searching!');
      }} suiteSelectorOptions={{
        overviewHref: '/',
        onLinkClick: link => {
          alert(link.href);
        },
        onUnauthorizedClick: link => {
          alert(\`unauthorized \${link?.href} \`);
        },
        unauthorizedLinks: ['dataPlatform'],
        activeLink: 'oversight',
        links: [{
          linkId: 'oversight',
          href: '/oversight'
        }, {
          linkId: 'dataPlatform',
          href: '/data-platform'
        }, {
          linkId: 'customer360',
          href: '/customer-360'
        }, {
          linkId: 'predictions',
          href: '/predictions'
        }, {
          linkId: 'analytics',
          href: '/analytics'
        }, {
          linkId: 'segmentation',
          href: '/segmentation'
        }]
      }} />
      </div>;
  }
}`},(Re=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Re.source)})});const Wn=["Primary","MP","MPThousandOrgs","Indicative","IndicativeWithSuiteSwitcher","Cortex","WorkspaceSearchWithNoResults","UseNewExperienceReminderHook","MPWithoutLogo","MPWithBackgroundLogo","MPWithoutCustomSizeLogo","MPWithNavSwitcherTour","MPWithSuiteSelector","MPWithNotificationCenter","MPWithNotificationCenterLongContent","MPWithNotificationCenterMessageModal"];export{N as Cortex,M as Indicative,P as IndicativeWithSuiteSwitcher,j as MP,L as MPThousandOrgs,H as MPWithBackgroundLogo,z as MPWithNavSwitcherTour,$ as MPWithNotificationCenter,R as MPWithNotificationCenterLongContent,_ as MPWithNotificationCenterMessageModal,E as MPWithSuiteSelector,W as MPWithoutCustomSizeLogo,B as MPWithoutLogo,y as Primary,T as UseNewExperienceReminderHook,A as WorkspaceSearchWithNoResults,Wn as __namedExportsOrder,Hn as default};
