var x=Object.defineProperty,h=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))y.call(o,t)&&p(e,t,o[t]);if(i)for(var t of i(o))C.call(o,t)&&p(e,t,o[t]);return e},a=(e,o)=>h(e,v(o));import{j as l}from"./jsx-runtime-C9TrHvcC.js";import{g,h as d,i as b}from"./NavigationItemsService-MAHgzZsU.js";import"./ErrorStateIcon-CpUmdImr.js";import"./SuccessStateIcon-LWOADyaV.js";import"./WarningStateIcon-DUjK27-t.js";import"./_baseClone-DwBCp-Ss.js";const r=[{key:"1",label:"Environment",children:l.jsx(l.Fragment,{children:l.jsx(d,{style:{width:"200px"},options:[{value:"development",label:"Development"},{value:"production",label:"Production"}]})})},{key:"2",label:"Inputs",children:l.jsx(d,{mode:"tags",style:{width:"200px"},options:[{value:"Braze",label:"Braze"},{value:"mP Analytics",label:"mP Analytics"},{value:"Cortex",label:"Cortex"},{value:"Applytics",label:"Applytics"},{value:"Google Analytics",label:"Google Analytics"}]})}],j={title:"Components/Data Display/Collapse",component:e=>l.jsx(g,n({items:r},e)),args:{defaultActiveKey:void 0,ghost:!1,items:r,onChange:e=>{console.log(e)}}},s={render:()=>l.jsx(b,{theme:{components:{Collapse:{headerPadding:"2px 0",contentPadding:"0 24px"}}},children:l.jsx("div",{style:{width:"400px"},children:l.jsx(g,{ghost:!0,items:r})})})};var c,m,u;s.parameters=a(n({},s.parameters),{docs:a(n({},(c=s.parameters)==null?void 0:c.docs),{source:n({originalSource:`{
  render: () => {
    return <ConfigProvider theme={{
      components: {
        Collapse: {
          headerPadding: '2px 0',
          contentPadding: '0 24px'
        }
      }
    }}>
        <div style={{
        width: '400px'
      }}>
          <Collapse ghost items={items} />
        </div>
      </ConfigProvider>;
  }
}`},(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source)})});const P=["GhostCollapse"],D=Object.freeze(Object.defineProperty({__proto__:null,GhostCollapse:s,__namedExportsOrder:P,default:j},Symbol.toStringTag,{value:"Module"}));export{D as C,s as G};
