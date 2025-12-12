var P=Object.defineProperty;var R=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var C=(r,e,a)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,I=(r,e)=>{for(var a in e||(e={}))j.call(e,a)&&C(r,a,e[a]);if(R)for(var a of R(e))X.call(e,a)&&C(r,a,e[a]);return r};import{d as N}from"./index-DrFu-skq.js";const{useEffect:B,useMemo:A}=__STORYBOOK_MODULE_PREVIEW_API__,{global:W}=__STORYBOOK_MODULE_GLOBAL__,{logger:q}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var g="backgrounds",D={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:$,window:G}=W,F=()=>{var r;return!!((r=G==null?void 0:G.matchMedia("(prefers-reduced-motion: reduce)"))!=null&&r.matches)},M=r=>{(Array.isArray(r)?r:[r]).forEach(J)},J=r=>{var a;let e=$.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},Y=(r,e)=>{let a=$.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let o=$.createElement("style");o.setAttribute("id",r),o.innerHTML=e,$.head.appendChild(o)}},H=(r,e,a)=>{var d;let o=$.getElementById(r);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let t=$.createElement("style");t.setAttribute("id",r),t.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,n=$.getElementById(i);n?(d=n.parentElement)==null||d.insertBefore(t,n):$.head.appendChild(t)}},Q={cellSize:100,cellAmount:10,opacity:.8},z="addon-backgrounds",U="addon-backgrounds-grid",Z=F()?"":"transition: background-color 0.3s;",V=(r,e)=>{let{globals:a,parameters:o,viewMode:d,id:t}=e,{options:i=D,disable:n,grid:s=Q}=o[g]||{},c=a[g]||{},u=c.value,l=u?i[u]:void 0,b=(l==null?void 0:l.value)||"transparent",f=c.grid||!1,y=!!l&&!n,k=d==="docs"?`#anchor--${t} .docs-story`:".sb-show-main",x=d==="docs"?`#anchor--${t} .docs-story`:".sb-show-main",m=o.layout===void 0||o.layout==="padded",_=d==="docs"?20:m?16:0,{cellAmount:v,cellSize:p,opacity:S,offsetX:E=_,offsetY:h=_}=s,O=d==="docs"?`${z}-docs-${t}`:`${z}-color`,w=d==="docs"?t:null;B(()=>{let L=`
    ${k} {
      background: ${b} !important;
      ${Z}
      }`;if(!y){M(O);return}H(O,L,w)},[k,O,w,y,b]);let T=d==="docs"?`${U}-docs-${t}`:`${U}`;return B(()=>{if(!f){M(T);return}let L=[`${p*v}px ${p*v}px`,`${p*v}px ${p*v}px`,`${p}px ${p}px`,`${p}px ${p}px`].join(", "),K=`
        ${x} {
          background-size: ${L} !important;
          background-position: ${E}px ${h}px, ${E}px ${h}px, ${E}px ${h}px, ${E}px ${h}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${S}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${S}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${S/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${S/2}) 1px, transparent 1px) !important;
        }
      `;Y(T,K)},[v,p,x,T,f,E,h,S]),r()},ee=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(d=>d.value===r)||r)return r;let o=e.find(d=>d.name===a);if(o)return o.value;if(a){let d=e.map(t=>t.name).join(", ");q.warn(N`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${d}.
      `)}return"transparent"},re=(r,e)=>{var u;let{globals:a,parameters:o}=e,d=(u=a[g])==null?void 0:u.value,t=o[g],i=A(()=>t.disable?"transparent":ee(d,t.values,t.default),[t,d]),n=A(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=A(()=>`
      ${s} {
        background: ${i} !important;
        ${F()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return B(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!n){M(l);return}H(l,c,e.viewMode==="docs"?e.id:null)},[n,c,e]),r()},ae=(r,e)=>{var y,k,x;let{globals:a,parameters:o}=e,d=o[g].grid,t=((y=a[g])==null?void 0:y.grid)===!0&&d.disable!==!0,{cellAmount:i,cellSize:n,opacity:s}=d,c=e.viewMode==="docs",u=o.layout===void 0||o.layout==="padded"?16:0,l=(k=d.offsetX)!=null?k:c?20:u,b=(x=d.offsetY)!=null?x:c?20:u,f=A(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${n*i}px ${n*i}px`,`${n*i}px ${n*i}px`,`${n}px ${n}px`,`${n}px ${n}px`].join(", ");return`
      ${m} {
        background-size: ${_} !important;
        background-position: ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[n]);return B(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!t){M(m);return}Y(m,f)},[t,f,e]),r()},ne=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?[V]:[ae,re],ie={[g]:I({grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1},!(FEATURES!=null&&FEATURES.backgroundsStoryGlobals)&&{values:Object.values(D)})},de={[g]:{value:void 0,grid:!1}},le=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?de:{[g]:null};export{ne as decorators,le as initialGlobals,ie as parameters};
