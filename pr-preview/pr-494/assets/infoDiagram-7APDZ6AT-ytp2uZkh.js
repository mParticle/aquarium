var m=(a,e,t)=>new Promise((o,i)=>{var v=r=>{try{s(t.next(r))}catch(p){i(p)}},d=r=>{try{s(t.throw(r))}catch(p){i(p)}},s=r=>r.done?o(r.value):Promise.resolve(r.value).then(v,d);s((t=t.apply(a,e)).next())});import{_ as n,l as g,K as c,k as l,L as f}from"./Using existing ones-DVPdRNro.js";import{p as u}from"./mermaid-parser.core-CqGvbpn6.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-BOD-g_4B.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-BuacsSRU.js";import"./_basePickBy-cUT0NfD1.js";import"./clone-BteuqAln.js";var x={parse:n(a=>m(void 0,null,function*(){const e=yield u("info",a);g.debug(e)}),"parse")},_={version:f},b=n(()=>_.version,"getVersion"),w={getVersion:b},y=n((a,e,t)=>{g.debug(`rendering info diagram
`+a);const o=c(e);l(o,100,400,!0),o.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${t}`)},"draw"),S={draw:y},T={parser:x,db:w,renderer:S};export{T as diagram};