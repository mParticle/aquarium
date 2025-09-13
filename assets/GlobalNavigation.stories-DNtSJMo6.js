var sn=Object.defineProperty,ln=Object.defineProperties;var cn=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var dn=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable;var Z=(t,a,i)=>a in t?sn(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,n=(t,a)=>{for(var i in a||(a={}))dn.call(a,i)&&Z(t,i,a[i]);if(F)for(var i of F(a))pn.call(a,i)&&Z(t,i,a[i]);return t},o=(t,a)=>ln(t,cn(a));var G=(t,a,i)=>new Promise((r,l)=>{var g=p=>{try{d(i.next(p))}catch(h){l(h)}},c=p=>{try{d(i.throw(p))}catch(h){l(h)}},d=p=>p.done?r(p.value):Promise.resolve(p.value).then(g,c);d((i=i.apply(t,a)).next())});import{j as e}from"./jsx-runtime-CVnACwZl.js";import{e as C,s as D,u as b,f as hn}from"./index-BU0ZtLqn.js";import{r as u}from"./index-3OP4wdng.js";import{a0 as gn,ar as m,as as un,at as mn,F as fn,e as vn,au as q,N as Ke,I as s,a as Qe,B as Ve}from"./NavigationItemsService-IhsiIOhP.js";import"./ErrorStateIcon-DUz035cB.js";import"./_baseClone-CXAe4HsA.js";function kn(t,a,i){const r=[];for(let l=0;l<t;l+=1){const g={id:`org-${l}`,label:`Org ${l}`,accounts:[]};for(let c=0;c<a;c+=1){const d={id:`account-${l}-${c}`,label:`Account ${l}-${c}`,workspaces:[]};g.accounts.push(d);for(let p=0;p<i;p+=1)d.workspaces.push({id:`workspace-${l}-${c}-${p}`,label:`Workspace ${l}-${c}-${p}`,isActive:l===0&&c===0&&p===0,onClick:()=>{alert(`Selected Workspace ${l}-${c}-${p}`)}})}r.push(g)}return r}const O={label:"Aqua",icon:e.jsx(s,{name:"alicorn",size:"xxl",color:"brand"}),type:"custom-size",onSuiteLogoClick:()=>{alert("Going to Aqua Home!")}},S=[{label:"Tool 1",isActive:!0,icon:e.jsx(s,{name:"privacy"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Tool 2",icon:e.jsx(s,{name:"favorite"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Tool 3",icon:e.jsx(s,{name:"connections"}),hrefOptions:{href:"/"}}],I=[{label:"Notifications",hideLabel:!0,icon:e.jsx(s,{name:"api"}),hrefOptions:{href:"/"}},{label:"Support",hideLabel:!0,icon:e.jsx(s,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(s,{name:"settings"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}},{label:"button",type:"button",buttonOptions:{onClick:()=>{alert("go")}}},{type:"button",label:"go",buttonOptions:{href:"/",target:"_blank"}}]}],w=[{id:"org1",label:"Org 1",accounts:[{id:"account1",label:"account 1",workspaces:[{id:"workspace1",label:"Workspace 111111111",isActive:!0,onClick:()=>{alert("Selected Workspace 1")}}]}]}],Xe={open:!1,unreadMessages:0,content:()=>e.jsx("div",{}),onClose:()=>{},onPreferencesClick:()=>{}},Cn={title:"Components/Navigation/GlobalNavigation",component:t=>e.jsx(gn,{style:{minHeight:"800px"},children:e.jsx(m,n({},t))}),args:{logo:O,tools:S,management:I,orgs:w,notificationCenter:Xe,navigationButtonItemOptions:{label:"Sign Out of mParticle",onClick:()=>{alert("signing out!")}},onMpHomeClick:()=>{alert("Going to mP!")}},argTypes:{notificationCenter:{content:{control:"string",table:{type:{summary:"ReactNode or RenderFunction to render the content"}}}}}},x={play:a=>G(void 0,[a],function*({canvasElement:t}){var c;const i=t.querySelector("li.globalNavigation__item");if(!i)throw new Error("Menu item not found");const r=i.querySelector("a");yield C(r).toBeNull();const l=t.querySelector(".globalNavigation__link");if(!l)throw new Error("Link item not found");yield C((c=l.computedStyleMap().get("cursor"))==null?void 0:c.toString()).toBe("pointer");const g=l.parentElement;yield C(g).toBeTruthy(),yield C(g).toHaveProperty("href")})},Ye={label:"Data Platform",icon:e.jsx(s,{name:"dataPlatform"})},en={label:"Overview",icon:"overview",type:"background-solid",onSuiteLogoClick:()=>{alert("Going to mP Home!")}},bn={label:"Data Platform",icon:"catalog",type:"default",onSuiteLogoClick:()=>{alert("Going to mP Home!")}};function J(t){return e.jsxs(Qe,{children:[t,e.jsx(Ve,{color:"blue",count:"Beta",className:"globalNavigation__badge"})]})}const k=[{label:"Activity",icon:e.jsx(s,{name:"trends"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Platform Trends"},{hrefOptions:{href:"/"},label:e.jsxs(Qe,{children:["System Alerts",e.jsx(Ve,{color:"red"})]})},{hrefOptions:{href:"/"},label:"Event Forwarding"},{hrefOptions:{href:"/"},label:J("Observability")}]},{label:"Data Master",icon:e.jsx(s,{name:"database"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Catalog"},{hrefOptions:{href:"/"},label:"Plans"},{hrefOptions:{href:"/"},label:"Live Stream"},{hrefOptions:{href:"/"},label:J("User Groups")},{hrefOptions:{href:"/"},label:"Calculated Attributes"},{hrefOptions:{href:"/"},label:"Rules"}]},{label:"Audiences",icon:e.jsx(s,{name:"users"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Real-time"},{hrefOptions:{href:"/"},label:"Standard"},{hrefOptions:{href:"/"},label:"Journeys"}]},{label:"Connections",icon:e.jsx(s,{name:"connections"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Connect"},{hrefOptions:{href:"/"},label:"Platform Filters"},{hrefOptions:{href:"/"},label:"Feed Filters"}]},{label:"Setup",icon:e.jsx(s,{name:"setup"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Inputs"},{hrefOptions:{href:"/"},label:"Outputs"},{hrefOptions:{href:"/"},label:"Data Warehouse"},{hrefOptions:{href:"/"},label:"CRM"}]},{label:"Directory",icon:e.jsx(s,{name:"myHub"}),hrefOptions:{href:"/"}}],f=[{isActive:!0,label:"Support",hideLabel:!0,icon:e.jsx(s,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(s,{name:"settings"}),type:"menu",children:[{hrefOptions:{href:"/"},label:"Platform Settings"},{hrefOptions:{href:"/"},label:"User Settings"},{hrefOptions:{href:"/"},type:"button",label:"Switch to Legacy UI"}]}],v=[{id:"org1",label:"Org 1",accounts:[{id:"account1",label:"Account 1",workspaces:[{id:"workspace1",label:"Workspace 1",isActive:!1,onClick:()=>{alert("Selected workspace 1")}},{id:"workspace1a",label:"Workspace 1a",isActive:!1,onClick:()=>{alert("Selected workspace 1a")}},{id:"workspace1b",label:"Workspace 1b",isActive:!1,onClick:()=>{alert("Selected workspace 1b")}}]}]},{id:"org2",label:"Org 2",accounts:[{id:"account2",label:"Account 2",workspaces:[{id:"workspace2",label:"Workspace 2",isActive:!1,onClick:()=>{alert("Selected workspace 2")}}]},{id:"account2a",label:"Account 2a",workspaces:[{id:"workspace2a",label:"Workspace 2a",isActive:!1,onClick:()=>{alert("Selected workspace 2")}},{id:"workspace2ab",label:"_Workspace 2ab",isActive:!0,onClick:()=>{alert("Selected workspace 2")}}]}]},{id:"org3",label:"Org 3",accounts:[{id:"account3",label:"Account 3",workspaces:[{id:"workspace3",label:"Workspace 3",isActive:!1,onClick:()=>{alert("Selected workspace 3")}}]}]},{id:"org4",label:"Org 4",accounts:[{id:"account4",label:"Account 4",workspaces:[{id:"workspace4",label:"Workspace 4",isActive:!1,onClick:()=>{alert("Selected workspace 4")}}]}]},{id:"org5",label:"Org 5",accounts:[{id:"account5",label:"Account 5",workspaces:[{id:"workspace5",label:"Workspace 5",isActive:!1,onClick:()=>{alert("Selected workspace 5")}}]}]},{id:"org6",label:"Org 6",accounts:[{id:"account6",label:"Account 6",workspaces:[{id:"workspace6",label:"Workspace 6",isActive:!1,onClick:()=>{alert("Selected workspace 6")}}]}]},{id:"org7",label:"Org 7",accounts:[{id:"account7",label:"Account 7",workspaces:[{id:"workspace7",label:"Workspace 7",isActive:!1,onClick:()=>{alert("Selected workspace 7")}}]}]}],j={args:{showUnifiedNavigation:!0,onSearchClick:()=>{alert("Searching!")},tools:un.navigationItems,management:f,orgs:v,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"}}},y={args:{onSearchClick:()=>{alert("Searching!")},logo:Ye,tools:k,management:f,orgs:v,suiteSelectorOptions:{overviewHref:"/",onLinkClick:t=>{alert(t.href)},onUnauthorizedClick:t=>{alert(`unauthorized ${t==null?void 0:t.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]},onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"}}},On=kn(1e3,4,4),M={render:t=>e.jsx("div",{style:{width:800},children:e.jsx(m,o(n({},t),{onSearchClick:()=>{alert("Searching!")},logo:Ye,tools:k,management:f,orgs:On,onMpHomeClick:()=>{alert("going to overview map")}}))})},nn={label:"Analytics",icon:e.jsx(s,{name:"analytics"}),onSuiteLogoClick:()=>{alert("Going to Analytics Home!")}},tn=[{label:"My Hub",icon:e.jsx(s,{name:"myHub"}),isActive:!0,hrefOptions:{href:"/"}},{label:"Saved",icon:e.jsx(s,{name:"savedProjects"}),hrefOptions:{href:"/"}},{label:"Manage Data",icon:e.jsx(s,{name:"database"}),hrefOptions:{href:"/"}}],on=[{label:"Support",hideLabel:!0,icon:e.jsx(s,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(s,{name:"settings"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]}],an=[{type:"group",label:"Dashboard"},{title:"Dashboard",description:"Create a new dashboard to organize your saved analysis.",onClick:()=>{alert("Opening New Dashboard Modal")}},{label:"Segmentation",type:"group"},{onClick:()=>{alert("clicked")},title:"Event Segmentation",description:"Measure engagement based on behaviors and attributes."},{disabled:!0,tooltip:"is disabled",onClick:()=>{alert("clicked disabled")},title:"User Segmentation",description:"Measure unique users based on behaviors and attributes."},{title:"Revenue Analysis",description:"Track revenue over time."},{title:"Frequency",description:"Analyze how many distinct times an event is performed within a given interval.",tooltip:"This feature is currently locked",onClick:()=>{alert("Opening paywall modal.")},isLocked:!0},{label:"Funnel",type:"group"},{title:"Conversion and Drop Off",description:"Identify points of friction between funnel steps."},{title:"Multipath Funnel",description:"Analyze multiple customer paths to identify the optimal path to conversion."},{title:"Conversion Over Time",description:"Track key conversion metrics over time."},{title:"Contribution",description:"Reverse the funnel to measure each step's contribution to the target action."},{label:"Journeys",type:"group"},{isLoading:!0,tooltip:"Journeys data is loading, please check back later.",title:"Journeys From an Event",description:"Discover the most common paths users take from a starting point."},{title:"Journeys To an Event",description:"Discover the most common paths users take towards a target action."},{label:"Cohort",type:"group"},{title:"Retention",description:"Analyze how often user cohorts return to engage with a target action."},{title:"Activation",description:"Analyze when user cohorts engage with a target action for the first time."},{label:"Users",type:"group"},{title:"User Lookup by ID",description:"Find a user by searching for their User ID."},{title:"User Lookup by Event",description:"Display a list of users who performed an event."},{title:"User Lookup by Segment",description:"Display a list of users who are in a particular User Segment."}],rn=[{id:"org1",label:"Org 1",accounts:[{id:"",label:"",workspaces:[{id:"project 1",label:"Project 1",isActive:!1,onClick:()=>{alert("Selected project 1")}}]}]},{id:"org2",label:"Org 2",accounts:[{id:"",label:"",workspaces:[{id:"project 2",label:"Project2Project2Project2Project2Project2Project2",isActive:!0,onClick:()=>{alert("Selected project 2")}}]}]},{id:"org3",label:"Org 3",accounts:[{id:"",label:"",workspaces:[{id:"project 3",label:"Project 3",isActive:!1,onClick:()=>{alert("Selected project 3")}}]}]},{id:"org4",label:"Org 4",accounts:[{id:"",label:"",workspaces:[{id:"project 4",label:"Project 4",isActive:!1,onClick:()=>{alert("Selected project 4")}}]}]},{id:"org5",label:"Org 5",accounts:[{id:"",label:"",workspaces:[{id:"project 5",label:"Project 5",isActive:!1,onClick:()=>{alert("Selected project 5")}}]}]},{id:"org6",label:"Org 6",accounts:[{id:"",label:"",workspaces:[{id:"project 6",label:"Project 6",isActive:!1,onClick:()=>{alert("Selected project 6")}}]}]},{id:"org7",label:"Org 7",accounts:[{id:"",label:"",workspaces:[{id:"project 7",label:"Project 7",isActive:!1,onClick:()=>{alert("Selected project 7")}}]}]}],L={args:{logo:nn,tools:tn,management:on,createItems:an,orgs:rn,navigationButtonItemOptions:{label:"Custom Signout Label",onClick:()=>{alert("Signout!")}},onMpHomeClick:()=>{alert("going to overview map")}}},P={args:{logo:nn,tools:tn,management:on,createItems:an,orgs:rn,suiteSelectorOptions:{overviewHref:"/",onLinkClick:t=>{t.linkId!=="analytics"&&alert(t.href)},links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}],activeLink:"analytics"},navigationButtonItemOptions:{label:"Custom Signout Label",onClick:()=>{alert("Signout!")}},onMpHomeClick:()=>{alert("going to overview map")}}},Sn={label:"Predictions",icon:"predictions",type:"background-solid",onSuiteLogoClick:()=>{alert("Going to Predictions Home!")}},In=[{label:"Pipelines",icon:e.jsx(s,{name:"predictions",variant:"duo-tone"}),hrefOptions:{href:"/"}},{label:"Projects",icon:e.jsx(s,{name:"journeys"}),hrefOptions:{href:"/"},isActive:!0},{label:"Data",icon:e.jsx(s,{name:"database"}),hrefOptions:{href:"/"}},{label:"API",icon:e.jsx(s,{name:"predictions",variant:"duo-tone"}),hrefOptions:{href:"/"}},{label:"Insights",icon:e.jsx(s,{name:"insights"}),hrefOptions:{href:"/"}}],wn=[{label:"Support",hideLabel:!0,icon:e.jsx(s,{name:"support"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]},{label:"Settings",hideLabel:!0,icon:e.jsx(s,{name:"settings"}),type:"menu",children:[{label:"option 1",hrefOptions:{href:"/"}},{label:"option 2",hrefOptions:{href:"/"}},{label:"option 3",hrefOptions:{href:"/"}}]}],xn=[{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 1",label:"Account 1",onClick:()=>{alert("Selected Account 1")},isActive:!1}]}]},{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 2",label:"Account 2",onClick:()=>{alert("Selected Account 2")},isActive:!0}]}]},{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 3",label:"Account 3",onClick:()=>{alert("Selected Account 3")},isActive:!1}]}]},{id:"",label:"",accounts:[{id:"",label:"",workspaces:[{id:"Account 4",label:"Account 4",onClick:()=>{alert("Selected Account 4")},isActive:!1}]}]}],N={args:{logo:Sn,tools:In,management:wn,orgs:xn,onMpHomeClick:()=>{alert("going to overview map")},navigationButtonItemOptions:{label:"Sign Out of mParticle",onClick:()=>{alert("onSignout click")}},suiteSelectorOptions:{overviewHref:"/",onLinkClick:t=>{t.linkId!=="predictions"&&alert(t.href)},links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}],activeLink:"predictions"}}},T={args:{orgs:v},play:()=>G(void 0,null,function*(){const t=D.getByText("_W2");yield b.hover(t);const a=yield D.findByPlaceholderText("Search");yield b.type(a,"123{enter}")})},A={play:()=>G(void 0,null,function*(){const t=hn().mockImplementation(()=>{});global.alert=t;const a=D.getByText("Show Notification");yield b.click(a);const i=yield D.findByText("Remind me later");yield b.click(i),yield C(t).toBeCalledWith("Remind me later"),yield b.click(a);const r=yield D.findByText("Take me there");yield b.click(r),yield C(t).toBeCalledWith("Take me there")}),render:t=>{const[a,i]=mn({onClose:()=>{alert("Notification closed")},onRemindMeLater:()=>{alert("Remind me later")},onTakeMeThere:()=>{alert("Take me there")}});return e.jsxs(fn,{style:{minHeight:800,width:600,border:"1px solid black"},justify:"space-between",vertical:!1,children:[i,e.jsx("div",{children:e.jsx(m,n({},t))}),e.jsx(vn,{onClick:a,children:"Show Notification"})]})},args:{logo:O,tools:S,management:I,orgs:w,navigationButtonItemOptions:{label:"Sign Out of mParticle",onClick:()=>{alert("signing out!")}},onMpHomeClick:()=>{alert("Going to mP!")}}},H={args:{onSearchClick:()=>{alert("Searching!")},logo:{onSuiteLogoClick:()=>{},label:""},tools:k,management:f,orgs:v,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!1}},z={args:{onSearchClick:()=>{alert("Searching!")},logo:en,tools:k,management:f,orgs:v,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!0}},B={args:{onSearchClick:()=>{alert("Searching!")},logo:bn,tools:k,management:f,orgs:v,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!0}},W={render:()=>{const[t,a]=u.useState(!1),i={label:"Sign Out of mParticle",onClick:()=>{alert("Signout!")}},r={label:"Data Platform",icon:"catalog",type:"background-solid",onSuiteLogoClick:()=>{a(l=>!l)},navSwitcherTourOptions:{open:t,onClose:()=>{a(!1)}}};return e.jsx("div",{style:{width:800},children:e.jsx(m,{onSearchClick:()=>{alert("Searching!")},logo:r,tools:k,management:f,orgs:v,onMpHomeClick:()=>{alert("going to overview map")},navigationButtonItemOptions:i})})}},E={args:{onSearchClick:()=>{alert("Searching!")},logo:en,tools:k,management:f,orgs:v,onMpHomeClick:()=>{alert("going to overview map")},avatarOptions:{alt:"avatar"},showSuiteLogo:!0,suiteSelectorOptions:{overviewHref:"/",onLinkClick:t=>{alert(t.href)},onUnauthorizedClick:t=>{alert(`unauthorized ${t==null?void 0:t.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}},U={render:t=>{const[a,i]=u.useState(!1);return e.jsx("div",{children:e.jsx(m,o(n({},t),{notificationCenter:{open:a,onOpenChange:r=>{i(r)},content:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"})]})},logo:O,tools:S,management:I,orgs:w,showSuiteLogo:!0,onSearchClick:()=>{alert("Searching!")},suiteSelectorOptions:{overviewHref:"/",onLinkClick:r=>{alert(r.href)},onUnauthorizedClick:r=>{alert(`unauthorized ${r==null?void 0:r.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}))})}},_={render:t=>{const[a,i]=u.useState(!1);return e.jsx("div",{children:e.jsx(m,o(n({},t),{notificationCenter:{open:a,onOpenChange:r=>{i(r)},content:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content End"})]})},logo:O,tools:S,management:I,orgs:w,showSuiteLogo:!0,onSearchClick:()=>{alert("Searching!")},suiteSelectorOptions:{overviewHref:"/",onLinkClick:r=>{alert(r.href)},onUnauthorizedClick:r=>{alert(`unauthorized ${r==null?void 0:r.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}))})}},$={render:t=>{const[a,i]=u.useState(!1),[r,l]=u.useState(!1),[g,c]=u.useState(q);return e.jsxs("div",{children:[e.jsx(Ke,{open:r,maskClosable:!1,destroyOnClose:!0,onCancel:()=>{l(!1)},onOk:()=>{l(!1)},afterClose:()=>{c(q)},centered:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Message Title"}),e.jsx("p",{children:"Message Description"})]})}),e.jsx(m,o(n({},t),{notificationCenter:{open:a,zIndex:g,onOpenChange:d=>{r||i(d)},content:()=>e.jsxs("div",{children:[e.jsx("div",{onClick:()=>{c(0),l(!0)},children:"Open Modal"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"})]}),onClose:()=>{i(!1)},onPreferencesClick:()=>{i(!1)}},logo:O,tools:S,management:I,orgs:w,showSuiteLogo:!0,onSearchClick:()=>{alert("Searching!")},suiteSelectorOptions:{overviewHref:"/",onLinkClick:d=>{alert(d.href)},onUnauthorizedClick:d=>{alert(`unauthorized ${d==null?void 0:d.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}))]})}},R={args:{notificationCenter:o(n({},Xe),{unreadMessages:1})},render:t=>{const[a,i]=u.useState(!1),[r,l]=u.useState(!1),[g,c]=u.useState(q),[d,p]=u.useState(1);return e.jsxs("div",{children:[e.jsx(Ke,{open:r,maskClosable:!1,destroyOnClose:!0,onCancel:()=>{l(!1)},onOk:()=>{l(!1)},afterClose:()=>{c(q)},centered:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Message Title"}),e.jsxs("p",{children:["Unread Messages: ",d]})]})}),e.jsx(m,o(n({},t),{notificationCenter:{open:a,zIndex:g,unreadMessages:d,onOpenChange:h=>{r||i(h)},content:()=>e.jsxs("div",{children:[e.jsx("div",{onClick:()=>{c(0),l(!0),p(h=>h>0?h-1:0)},children:"Open Modal"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Content"})]}),onClose:()=>{i(!1)},onPreferencesClick:()=>{i(!1)}},logo:O,tools:S,management:I,orgs:w,showSuiteLogo:!0,onSearchClick:()=>{alert("Searching!")},suiteSelectorOptions:{overviewHref:"/",onLinkClick:h=>{alert(h.href)},onUnauthorizedClick:h=>{alert(`unauthorized ${h==null?void 0:h.href} `)},unauthorizedLinks:["dataPlatform"],activeLink:"oversight",links:[{linkId:"oversight",href:"/oversight"},{linkId:"dataPlatform",href:"/data-platform"},{linkId:"customer360",href:"/customer-360"},{linkId:"predictions",href:"/predictions"},{linkId:"analytics",href:"/analytics"},{linkId:"segmentation",href:"/segmentation"}]}}))]})}};var K,Q,V;x.parameters=o(n({},x.parameters),{docs:o(n({},(K=x.parameters)==null?void 0:K.docs),{source:n({originalSource:`{
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
}`},(V=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});var X,Y,ee;j.parameters=o(n({},j.parameters),{docs:o(n({},(X=j.parameters)==null?void 0:X.docs),{source:n({originalSource:`{
  args: {
    showUnifiedNavigation: true,
    onSearchClick: () => {
      alert('Searching!');
    },
    tools: NavigationItemsService.navigationItems,
    management: mpManagement,
    orgs: mpOrgs,
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    avatarOptions: {
      alt: 'avatar'
    }
  }
}`},(ee=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:ee.source)})});var ne,te,oe;y.parameters=o(n({},y.parameters),{docs:o(n({},(ne=y.parameters)==null?void 0:ne.docs),{source:n({originalSource:`{
  args: {
    onSearchClick: () => {
      alert('Searching!');
    },
    logo: mpLogo,
    tools: mpTools,
    management: mpManagement,
    orgs: mpOrgs,
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
    },
    onMpHomeClick: () => {
      alert('going to overview map');
    },
    avatarOptions: {
      alt: 'avatar'
    }
  }
}`},(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source)})});var ie,ae,re;M.parameters=o(n({},M.parameters),{docs:o(n({},(ie=M.parameters)==null?void 0:ie.docs),{source:n({originalSource:`{
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
}`},(re=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:re.source)})});var se,le,ce;L.parameters=o(n({},L.parameters),{docs:o(n({},(se=L.parameters)==null?void 0:se.docs),{source:n({originalSource:`{
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
}`},(ce=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ce.source)})});var de,pe,he;P.parameters=o(n({},P.parameters),{docs:o(n({},(de=P.parameters)==null?void 0:de.docs),{source:n({originalSource:`{
  args: {
    logo: indLogo,
    tools: indTools,
    management: indManagement,
    createItems: indCreateItems,
    orgs: indOrgs,
    suiteSelectorOptions: {
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
}`},(he=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:he.source)})});var ge,ue,me;N.parameters=o(n({},N.parameters),{docs:o(n({},(ge=N.parameters)==null?void 0:ge.docs),{source:n({originalSource:`{
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
    suiteSelectorOptions: {
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
}`},(me=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:me.source)})});var fe,ve,ke;T.parameters=o(n({},T.parameters),{docs:o(n({},(fe=T.parameters)==null?void 0:fe.docs),{source:n({originalSource:`{
  args: {
    orgs: mpOrgs
  },
  play: async () => {
    const workspaceSelector = screen.getByText('_W2');
    await userEvent.hover(workspaceSelector);
    const searchInput = await screen.findByPlaceholderText('Search');
    await userEvent.type(searchInput, '123{enter}');
  }
}`},(ke=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:ke.source)})});var Ce,be,Oe;A.parameters=o(n({},A.parameters),{docs:o(n({},(Ce=A.parameters)==null?void 0:Ce.docs),{source:n({originalSource:`{
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
}`},(Oe=(be=A.parameters)==null?void 0:be.docs)==null?void 0:Oe.source)})});var Se,Ie,we;H.parameters=o(n({},H.parameters),{docs:o(n({},(Se=H.parameters)==null?void 0:Se.docs),{source:n({originalSource:`{
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
}`},(we=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:we.source)})});var xe,je,ye;z.parameters=o(n({},z.parameters),{docs:o(n({},(xe=z.parameters)==null?void 0:xe.docs),{source:n({originalSource:`{
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
}`},(ye=(je=z.parameters)==null?void 0:je.docs)==null?void 0:ye.source)})});var Me,Le,Pe;B.parameters=o(n({},B.parameters),{docs:o(n({},(Me=B.parameters)==null?void 0:Me.docs),{source:n({originalSource:`{
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
}`},(Pe=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source)})});var Ne,Te,Ae;W.parameters=o(n({},W.parameters),{docs:o(n({},(Ne=W.parameters)==null?void 0:Ne.docs),{source:n({originalSource:`{
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
}`},(Ae=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source)})});var He,ze,Be;E.parameters=o(n({},E.parameters),{docs:o(n({},(He=E.parameters)==null?void 0:He.docs),{source:n({originalSource:`{
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
}`},(Be=(ze=E.parameters)==null?void 0:ze.docs)==null?void 0:Be.source)})});var We,Ee,Ue;U.parameters=o(n({},U.parameters),{docs:o(n({},(We=U.parameters)==null?void 0:We.docs),{source:n({originalSource:`{
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
}`},(Ue=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:Ue.source)})});var _e,$e,Re;_.parameters=o(n({},_.parameters),{docs:o(n({},(_e=_.parameters)==null?void 0:_e.docs),{source:n({originalSource:`{
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
}`},(Re=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Re.source)})});var De,Ge,qe;$.parameters=o(n({},$.parameters),{docs:o(n({},(De=$.parameters)==null?void 0:De.docs),{source:n({originalSource:`{
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
}`},(qe=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:qe.source)})});var Fe,Ze,Je;R.parameters=o(n({},R.parameters),{docs:o(n({},(Fe=R.parameters)==null?void 0:Fe.docs),{source:n({originalSource:`{
  args: {
    notificationCenter: {
      ...defaultNotificationCenter,
      unreadMessages: 1
    }
  },
  render: props => {
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zIndex, setZIndex] = useState(NotificationCenterZIndex);
    const [unreadMessages, setUnreadMessages] = useState(1);
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
            <p>Unread Messages: {unreadMessages}</p>
          </div>
        </Modal>
        <GlobalNavigation {...props} notificationCenter={{
        open: isNotificationCenterOpen,
        zIndex: zIndex,
        unreadMessages: unreadMessages,
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
            setUnreadMessages(prev => prev > 0 ? prev - 1 : 0);
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
}`},(Je=(Ze=R.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source)})});const jn=["Primary","Unified","MP","MPThousandOrgs","Indicative","IndicativeWithSuiteSwitcher","Cortex","WorkspaceSearchWithNoResults","UseNewExperienceReminderHook","MPWithoutLogo","MPWithBackgroundLogo","MPWithoutCustomSizeLogo","MPWithNavSwitcherTour","MPWithSuiteSelector","MPWithNotificationCenter","MPWithNotificationCenterLongContent","MPWithNotificationCenterMessageModal","MPWithNotificationCenterUnreadNotifications"],Hn=Object.freeze(Object.defineProperty({__proto__:null,Cortex:N,Indicative:L,IndicativeWithSuiteSwitcher:P,MP:y,MPThousandOrgs:M,MPWithBackgroundLogo:z,MPWithNavSwitcherTour:W,MPWithNotificationCenter:U,MPWithNotificationCenterLongContent:_,MPWithNotificationCenterMessageModal:$,MPWithNotificationCenterUnreadNotifications:R,MPWithSuiteSelector:E,MPWithoutCustomSizeLogo:B,MPWithoutLogo:H,Primary:x,Unified:j,UseNewExperienceReminderHook:A,WorkspaceSearchWithNoResults:T,__namedExportsOrder:jn,default:Cn},Symbol.toStringTag,{value:"Module"}));export{Hn as G,Cn as m};
