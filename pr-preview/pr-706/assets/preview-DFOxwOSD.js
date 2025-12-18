var l=(e,o,r)=>new Promise((a,i)=>{var n=t=>{try{s(r.next(t))}catch(_){i(_)}},m=t=>{try{s(r.throw(t))}catch(_){i(_)}},s=t=>t.done?a(t.value):Promise.resolve(t.value).then(n,m);s((r=r.apply(e,o)).next())});import{_ as O}from"./iframe-C--rtrtJ.js";import"../sb-preview/runtime.js";const{global:c}=__STORYBOOK_MODULE_GLOBAL__;var d,p=Object.entries((d=c.TAGS_OPTIONS)!=null?d:{}).reduce((e,o)=>{let[r,a]=o;return a.excludeFromDocsStories&&(e[r]=!0),e},{}),D={docs:{renderer:()=>l(void 0,null,function*(){let{DocsRenderer:e}=yield O(()=>import("./DocsRenderer-CFRXHY34-Kwt6ynNg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e}),stories:{filter:e=>{var o;return(e.tags||[]).filter(r=>p[r]).length===0&&!((o=e.parameters.docs)!=null&&o.disable)}}}};export{D as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-Kwt6ynNg.js","./iframe-C--rtrtJ.js","./index-CNk6hRaE.js","./index-COSAY2Qq.js","./jsx-runtime-GRP_BLAX.js","./index-DN1Ck1Y5.js","./index-Cu4lwwaE.js","./_baseClone-BJQa_8Hx.js","./isNativeReflectConstruct-CWIsGhkf.js","./index-BlT-hUEV.js","./index-DrFu-skq.js","./react-18-BJUJxCud.js","./client-CgpM46-k.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
