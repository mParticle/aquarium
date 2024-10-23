var l=(e,o,r)=>new Promise((a,i)=>{var n=t=>{try{s(r.next(t))}catch(_){i(_)}},m=t=>{try{s(r.throw(t))}catch(_){i(_)}},s=t=>t.done?a(t.value):Promise.resolve(t.value).then(n,m);s((r=r.apply(e,o)).next())});import{_ as O}from"./iframe-CTkNTj1I.js";import"../sb-preview/runtime.js";const{global:c}=__STORYBOOK_MODULE_GLOBAL__;var d,p=Object.entries((d=c.TAGS_OPTIONS)!=null?d:{}).reduce((e,o)=>{let[r,a]=o;return a.excludeFromDocsStories&&(e[r]=!0),e},{}),D={docs:{renderer:()=>l(void 0,null,function*(){let{DocsRenderer:e}=yield O(()=>import("./DocsRenderer-K4EAMTCU-vnaZDTuM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e}),stories:{filter:e=>{var o;return(e.tags||[]).filter(r=>p[r]).length===0&&!((o=e.parameters.docs)!=null&&o.disable)}}}};export{D as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-vnaZDTuM.js","./iframe-CTkNTj1I.js","./index-CNk6hRaE.js","./react-18-CptRw6kM.js","./index-D-4E_f9W.js","./index-zrkc5eiU.js","./extends-CF3RwP-h.js","./index-DYADbu9O.js","./isNativeReflectConstruct-0c7aa-qo.js","./_baseClone-u1J3oOXU.js","./_getPrototype-CAOE_2rY.js","./index-eS13M_ii.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
