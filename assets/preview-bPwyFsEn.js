var l=(e,o,r)=>new Promise((a,i)=>{var n=t=>{try{s(r.next(t))}catch(_){i(_)}},m=t=>{try{s(r.throw(t))}catch(_){i(_)}},s=t=>t.done?a(t.value):Promise.resolve(t.value).then(n,m);s((r=r.apply(e,o)).next())});import{_ as O}from"./iframe-Dv8a82fJ.js";import"../sb-preview/runtime.js";const{global:c}=__STORYBOOK_MODULE_GLOBAL__;var d,p=Object.entries((d=c.TAGS_OPTIONS)!=null?d:{}).reduce((e,o)=>{let[r,a]=o;return a.excludeFromDocsStories&&(e[r]=!0),e},{}),D={docs:{renderer:()=>l(void 0,null,function*(){let{DocsRenderer:e}=yield O(()=>import("./DocsRenderer-CFRXHY34-Dvj1YHEG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e}),stories:{filter:e=>{var o;return(e.tags||[]).filter(r=>p[r]).length===0&&!((o=e.parameters.docs)!=null&&o.disable)}}}};export{D as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-Dvj1YHEG.js","./iframe-Dv8a82fJ.js","./index-CNk6hRaE.js","./index-CFCRt1Rg.js","./jsx-runtime-BcCOBRXo.js","./index-D-4E_f9W.js","./index-J1TP6alb.js","./extends-CF3RwP-h.js","./isNativeReflectConstruct-CWIsGhkf.js","./_baseClone-DBzvlRjn.js","./index-P2MZap72.js","./index-DrFu-skq.js","./react-18-CrJMbcCu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
