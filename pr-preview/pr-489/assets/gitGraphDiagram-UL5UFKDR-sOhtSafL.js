var tr=Object.defineProperty,ar=Object.defineProperties;var nr=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var sr=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable;var _=(a,r,t)=>r in a?tr(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,W=(a,r)=>{for(var t in r||(r={}))sr.call(r,t)&&_(a,t,r[t]);if(N)for(var t of N(r))or.call(r,t)&&_(a,t,r[t]);return a},V=(a,r)=>ar(a,nr(r));var J=(a,r,t)=>new Promise((s,e)=>{var n=l=>{try{o(t.next(l))}catch(d){e(d)}},c=l=>{try{o(t.throw(l))}catch(d){e(d)}},o=l=>l.done?s(l.value):Promise.resolve(l.value).then(n,c);o((t=t.apply(a,r)).next())});import{p as cr}from"./chunk-OQCM5LHU-__ScLnvw.js";import{I as ir}from"./chunk-2RYQ3QTB-DYHnCFI4.js";import{F as dr,_ as $,d as hr,G as lr,H as $r,I as fr,l as v,s as gr,g as yr,b as pr,c as xr,q as ur,r as br,e as L,t as mr,j as wr,u as vr,J as Cr}from"./Using existing ones-BXDRbIhK.js";import{p as Er}from"./mermaid-parser.core-DBhK-Su4.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-BpEomAFm.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-BNgr85Sf.js";import"./_basePickBy-BZR4Cj1a.js";import"./clone-Brx2nHWm.js";var x={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},Br=dr.gitGraph,z=$(()=>lr(W(W({},Br),$r().gitGraph)),"getConfig"),i=new ir(()=>{const a=z(),r=a.mainBranchName,t=a.mainBranchOrder;return{mainBranchName:r,commits:new Map,head:null,branchConfig:new Map([[r,{name:r,order:t}]]),branches:new Map([[r,null]]),currBranch:r,direction:"LR",seq:0,options:{}}});function A(){return fr({length:7})}$(A,"getID");function Q(a,r){const t=Object.create(null);return a.reduce((s,e)=>{const n=r(e);return t[n]||(t[n]=!0,s.push(e)),s},[])}$(Q,"uniqBy");var kr=$(function(a){i.records.direction=a},"setDirection"),Lr=$(function(a){v.debug("options str",a),a=a==null?void 0:a.trim(),a=a||"{}";try{i.records.options=JSON.parse(a)}catch(r){v.error("error while parsing gitGraph options",r.message)}},"setOptions"),Tr=$(function(){return i.records.options},"getOptions"),Mr=$(function(a){let r=a.msg,t=a.id;const s=a.type;let e=a.tags;v.info("commit",r,t,s,e),v.debug("Entering commit:",r,t,s,e);const n=z();t=L.sanitizeText(t,n),r=L.sanitizeText(r,n),e=e==null?void 0:e.map(o=>L.sanitizeText(o,n));const c={id:t||i.records.seq+"-"+A(),message:r,seq:i.records.seq++,type:s!=null?s:x.NORMAL,tags:e!=null?e:[],parents:i.records.head==null?[]:[i.records.head.id],branch:i.records.currBranch};i.records.head=c,v.info("main branch",n.mainBranchName),i.records.commits.set(c.id,c),i.records.branches.set(i.records.currBranch,c.id),v.debug("in pushCommit "+c.id)},"commit"),Rr=$(function(a){let r=a.name;const t=a.order;if(r=L.sanitizeText(r,z()),i.records.branches.has(r))throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);i.records.branches.set(r,i.records.head!=null?i.records.head.id:null),i.records.branchConfig.set(r,{name:r,order:t}),Z(r),v.debug("in createBranch")},"branch"),Ir=$(a=>{let r=a.branch,t=a.id;const s=a.type,e=a.tags,n=z();r=L.sanitizeText(r,n),t&&(t=L.sanitizeText(t,n));const c=i.records.branches.get(i.records.currBranch),o=i.records.branches.get(r),l=c?i.records.commits.get(c):void 0,d=o?i.records.commits.get(o):void 0;if(l&&d&&l.branch===r)throw new Error(`Cannot merge branch '${r}' into itself.`);if(i.records.currBranch===r){const h=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw h.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},h}if(l===void 0||!l){const h=new Error(`Incorrect usage of "merge". Current branch (${i.records.currBranch})has no commits`);throw h.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["commit"]},h}if(!i.records.branches.has(r)){const h=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw h.hash={text:`merge ${r}`,token:`merge ${r}`,expected:[`branch ${r}`]},h}if(d===void 0||!d){const h=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw h.hash={text:`merge ${r}`,token:`merge ${r}`,expected:['"commit"']},h}if(l===d){const h=new Error('Incorrect usage of "merge". Both branches have same head');throw h.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},h}if(t&&i.records.commits.has(t)){const h=new Error('Incorrect usage of "merge". Commit with id:'+t+" already exists, use different custom Id");throw h.hash={text:`merge ${r} ${t} ${s} ${e==null?void 0:e.join(" ")}`,token:`merge ${r} ${t} ${s} ${e==null?void 0:e.join(" ")}`,expected:[`merge ${r} ${t}_UNIQUE ${s} ${e==null?void 0:e.join(" ")}`]},h}const f=o||"",p={id:t||`${i.records.seq}-${A()}`,message:`merged branch ${r} into ${i.records.currBranch}`,seq:i.records.seq++,parents:i.records.head==null?[]:[i.records.head.id,f],branch:i.records.currBranch,type:x.MERGE,customType:s,customId:!!t,tags:e!=null?e:[]};i.records.head=p,i.records.commits.set(p.id,p),i.records.branches.set(i.records.currBranch,p.id),v.debug(i.records.branches),v.debug("in mergeBranch")},"merge"),qr=$(function(a){let r=a.id,t=a.targetId,s=a.tags,e=a.parent;v.debug("Entering cherryPick:",r,t,s);const n=z();if(r=L.sanitizeText(r,n),t=L.sanitizeText(t,n),s=s==null?void 0:s.map(l=>L.sanitizeText(l,n)),e=L.sanitizeText(e,n),!r||!i.records.commits.has(r)){const l=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw l.hash={text:`cherryPick ${r} ${t}`,token:`cherryPick ${r} ${t}`,expected:["cherry-pick abc"]},l}const c=i.records.commits.get(r);if(c===void 0||!c)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(e&&!(Array.isArray(c.parents)&&c.parents.includes(e)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");const o=c.branch;if(c.type===x.MERGE&&!e)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!t||!i.records.commits.has(t)){if(o===i.records.currBranch){const p=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw p.hash={text:`cherryPick ${r} ${t}`,token:`cherryPick ${r} ${t}`,expected:["cherry-pick abc"]},p}const l=i.records.branches.get(i.records.currBranch);if(l===void 0||!l){const p=new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);throw p.hash={text:`cherryPick ${r} ${t}`,token:`cherryPick ${r} ${t}`,expected:["cherry-pick abc"]},p}const d=i.records.commits.get(l);if(d===void 0||!d){const p=new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);throw p.hash={text:`cherryPick ${r} ${t}`,token:`cherryPick ${r} ${t}`,expected:["cherry-pick abc"]},p}const f={id:i.records.seq+"-"+A(),message:`cherry-picked ${c==null?void 0:c.message} into ${i.records.currBranch}`,seq:i.records.seq++,parents:i.records.head==null?[]:[i.records.head.id,c.id],branch:i.records.currBranch,type:x.CHERRY_PICK,tags:s?s.filter(Boolean):[`cherry-pick:${c.id}${c.type===x.MERGE?`|parent:${e}`:""}`]};i.records.head=f,i.records.commits.set(f.id,f),i.records.branches.set(i.records.currBranch,f.id),v.debug(i.records.branches),v.debug("in cherryPick")}},"cherryPick"),Z=$(function(a){var r;if(a=L.sanitizeText(a,z()),i.records.branches.has(a)){i.records.currBranch=a;const t=i.records.branches.get(i.records.currBranch);t===void 0||!t?i.records.head=null:i.records.head=(r=i.records.commits.get(t))!=null?r:null}else{const t=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${a}")`);throw t.hash={text:`checkout ${a}`,token:`checkout ${a}`,expected:[`branch ${a}`]},t}},"checkout");function D(a,r,t){const s=a.indexOf(r);s===-1?a.push(t):a.splice(s,1,t)}$(D,"upsert");function K(a){const r=a.reduce((e,n)=>e.seq>n.seq?e:n,a[0]);let t="";a.forEach(function(e){e===r?t+="	*":t+="	|"});const s=[t,r.id,r.seq];for(const e in i.records.branches)i.records.branches.get(e)===r.id&&s.push(e);if(v.debug(s.join(" ")),r.parents&&r.parents.length==2&&r.parents[0]&&r.parents[1]){const e=i.records.commits.get(r.parents[0]);D(a,r,e),r.parents[1]&&a.push(i.records.commits.get(r.parents[1]))}else{if(r.parents.length==0)return;if(r.parents[0]){const e=i.records.commits.get(r.parents[0]);D(a,r,e)}}a=Q(a,e=>e.id),K(a)}$(K,"prettyPrintCommitHistory");var Or=$(function(){v.debug(i.records.commits);const a=F()[0];K([a])},"prettyPrint"),zr=$(function(){i.reset(),mr()},"clear"),Gr=$(function(){return[...i.records.branchConfig.values()].map((r,t)=>r.order!==null&&r.order!==void 0?r:V(W({},r),{order:parseFloat(`0.${t}`)})).sort((r,t)=>{var s,e;return((s=r.order)!=null?s:0)-((e=t.order)!=null?e:0)}).map(({name:r})=>({name:r}))},"getBranchesAsObjArray"),Hr=$(function(){return i.records.branches},"getBranches"),Pr=$(function(){return i.records.commits},"getCommits"),F=$(function(){const a=[...i.records.commits.values()];return a.forEach(function(r){v.debug(r.id)}),a.sort((r,t)=>r.seq-t.seq),a},"getCommitsArray"),Wr=$(function(){return i.records.currBranch},"getCurrentBranch"),jr=$(function(){return i.records.direction},"getDirection"),Sr=$(function(){return i.records.head},"getHead"),U={commitType:x,getConfig:z,setDirection:kr,setOptions:Lr,getOptions:Tr,commit:Mr,branch:Rr,merge:Ir,cherryPick:qr,checkout:Z,prettyPrint:Or,clear:zr,getBranchesAsObjArray:Gr,getBranches:Hr,getCommits:Pr,getCommitsArray:F,getCurrentBranch:Wr,getDirection:jr,getHead:Sr,setAccTitle:gr,getAccTitle:yr,getAccDescription:pr,setAccDescription:xr,setDiagramTitle:ur,getDiagramTitle:br},Ar=$((a,r)=>{cr(a,r),a.dir&&r.setDirection(a.dir);for(const t of a.statements)Yr(t,r)},"populate"),Yr=$((a,r)=>{const s={Commit:$(e=>r.commit(Dr(e)),"Commit"),Branch:$(e=>r.branch(Kr(e)),"Branch"),Merge:$(e=>r.merge(Nr(e)),"Merge"),Checkout:$(e=>r.checkout(_r(e)),"Checkout"),CherryPicking:$(e=>r.cherryPick(Vr(e)),"CherryPicking")}[a.$type];s?s(a):v.error(`Unknown statement type: ${a.$type}`)},"parseStatement"),Dr=$(a=>{var t,s;return{id:a.id,msg:(t=a.message)!=null?t:"",type:a.type!==void 0?x[a.type]:x.NORMAL,tags:(s=a.tags)!=null?s:void 0}},"parseCommit"),Kr=$(a=>{var t;return{name:a.name,order:(t=a.order)!=null?t:0}},"parseBranch"),Nr=$(a=>{var t,s;return{branch:a.branch,id:(t=a.id)!=null?t:"",type:a.type!==void 0?x[a.type]:void 0,tags:(s=a.tags)!=null?s:void 0}},"parseMerge"),_r=$(a=>a.branch,"parseCheckout"),Vr=$(a=>{var t;return{id:a.id,targetId:"",tags:((t=a.tags)==null?void 0:t.length)===0?void 0:a.tags,parent:a.parent}},"parseCherryPicking"),Jr={parse:$(a=>J(void 0,null,function*(){const r=yield Er("gitGraph",a);v.debug(r),Ar(r,U)}),"parse")},Y=hr(),m=Y==null?void 0:Y.gitGraph,I=10,q=40,T=4,M=2,O=8,C=new Map,E=new Map,j=30,H=new Map,S=[],R=0,y="LR",Xr=$(()=>{C.clear(),E.clear(),H.clear(),R=0,S=[],y="LR"},"clear"),rr=$(a=>{const r=document.createElementNS("http://www.w3.org/2000/svg","text");return(typeof a=="string"?a.split(/\\n|\n|<br\s*\/?>/gi):a).forEach(s=>{const e=document.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),e.setAttribute("dy","1em"),e.setAttribute("x","0"),e.setAttribute("class","row"),e.textContent=s.trim(),r.appendChild(e)}),r},"drawText"),er=$(a=>{let r,t,s;return y==="BT"?(t=$((e,n)=>e<=n,"comparisonFunc"),s=1/0):(t=$((e,n)=>e>=n,"comparisonFunc"),s=0),a.forEach(e=>{var c,o;const n=y==="TB"||y=="BT"?(c=E.get(e))==null?void 0:c.y:(o=E.get(e))==null?void 0:o.x;n!==void 0&&t(n,s)&&(r=e,s=n)}),r},"findClosestParent"),Qr=$(a=>{let r="",t=1/0;return a.forEach(s=>{const e=E.get(s).y;e<=t&&(r=s,t=e)}),r||void 0},"findClosestParentBT"),Zr=$((a,r,t)=>{let s=t,e=t;const n=[];a.forEach(c=>{const o=r.get(c);if(!o)throw new Error(`Commit not found for key ${c}`);o.parents.length?(s=Ur(o),e=Math.max(s,e)):n.push(o),re(o,s)}),s=e,n.forEach(c=>{ee(c,s,t)}),a.forEach(c=>{const o=r.get(c);if(o!=null&&o.parents.length){const l=Qr(o.parents);s=E.get(l).y-q,s<=e&&(e=s);const d=C.get(o.branch).pos,f=s-I;E.set(o.id,{x:d,y:f})}})},"setParallelBTPos"),Fr=$(a=>{var s;const r=er(a.parents.filter(e=>e!==null));if(!r)throw new Error(`Closest parent not found for commit ${a.id}`);const t=(s=E.get(r))==null?void 0:s.y;if(t===void 0)throw new Error(`Closest parent position not found for commit ${a.id}`);return t},"findClosestParentPos"),Ur=$(a=>Fr(a)+q,"calculateCommitPosition"),re=$((a,r)=>{const t=C.get(a.branch);if(!t)throw new Error(`Branch not found for commit ${a.id}`);const s=t.pos,e=r+I;return E.set(a.id,{x:s,y:e}),{x:s,y:e}},"setCommitPosition"),ee=$((a,r,t)=>{const s=C.get(a.branch);if(!s)throw new Error(`Branch not found for commit ${a.id}`);const e=r+t,n=s.pos;E.set(a.id,{x:n,y:e})},"setRootPosition"),te=$((a,r,t,s,e,n)=>{if(n===x.HIGHLIGHT)a.append("rect").attr("x",t.x-10).attr("y",t.y-10).attr("width",20).attr("height",20).attr("class",`commit ${r.id} commit-highlight${e%O} ${s}-outer`),a.append("rect").attr("x",t.x-6).attr("y",t.y-6).attr("width",12).attr("height",12).attr("class",`commit ${r.id} commit${e%O} ${s}-inner`);else if(n===x.CHERRY_PICK)a.append("circle").attr("cx",t.x).attr("cy",t.y).attr("r",10).attr("class",`commit ${r.id} ${s}`),a.append("circle").attr("cx",t.x-3).attr("cy",t.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${s}`),a.append("circle").attr("cx",t.x+3).attr("cy",t.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${s}`),a.append("line").attr("x1",t.x+3).attr("y1",t.y+1).attr("x2",t.x).attr("y2",t.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${s}`),a.append("line").attr("x1",t.x-3).attr("y1",t.y+1).attr("x2",t.x).attr("y2",t.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${s}`);else{const c=a.append("circle");if(c.attr("cx",t.x),c.attr("cy",t.y),c.attr("r",r.type===x.MERGE?9:10),c.attr("class",`commit ${r.id} commit${e%O}`),n===x.MERGE){const o=a.append("circle");o.attr("cx",t.x),o.attr("cy",t.y),o.attr("r",6),o.attr("class",`commit ${s} ${r.id} commit${e%O}`)}n===x.REVERSE&&a.append("path").attr("d",`M ${t.x-5},${t.y-5}L${t.x+5},${t.y+5}M${t.x-5},${t.y+5}L${t.x+5},${t.y-5}`).attr("class",`commit ${s} ${r.id} commit${e%O}`)}},"drawCommitBullet"),ae=$((a,r,t,s)=>{var e;if(r.type!==x.CHERRY_PICK&&(r.customId&&r.type===x.MERGE||r.type!==x.MERGE)&&(m!=null&&m.showCommitLabel)){const n=a.append("g"),c=n.insert("rect").attr("class","commit-label-bkg"),o=n.append("text").attr("x",s).attr("y",t.y+25).attr("class","commit-label").text(r.id),l=(e=o.node())==null?void 0:e.getBBox();if(l&&(c.attr("x",t.posWithOffset-l.width/2-M).attr("y",t.y+13.5).attr("width",l.width+2*M).attr("height",l.height+2*M),y==="TB"||y==="BT"?(c.attr("x",t.x-(l.width+4*T+5)).attr("y",t.y-12),o.attr("x",t.x-(l.width+4*T)).attr("y",t.y+l.height-12)):o.attr("x",t.posWithOffset-l.width/2),m.rotateCommitLabel))if(y==="TB"||y==="BT")o.attr("transform","rotate(-45, "+t.x+", "+t.y+")"),c.attr("transform","rotate(-45, "+t.x+", "+t.y+")");else{const d=-7.5-(l.width+10)/25*9.5,f=10+l.width/25*8.5;n.attr("transform","translate("+d+", "+f+") rotate(-45, "+s+", "+t.y+")")}}},"drawCommitLabel"),ne=$((a,r,t,s)=>{var e;if(r.tags.length>0){let n=0,c=0,o=0;const l=[];for(const d of r.tags.reverse()){const f=a.insert("polygon"),p=a.append("circle"),h=a.append("text").attr("y",t.y-16-n).attr("class","tag-label").text(d),g=(e=h.node())==null?void 0:e.getBBox();if(!g)throw new Error("Tag bbox not found");c=Math.max(c,g.width),o=Math.max(o,g.height),h.attr("x",t.posWithOffset-g.width/2),l.push({tag:h,hole:p,rect:f,yOffset:n}),n+=20}for(const{tag:d,hole:f,rect:p,yOffset:h}of l){const g=o/2,u=t.y-19.2-h;if(p.attr("class","tag-label-bkg").attr("points",`
      ${s-c/2-T/2},${u+M}  
      ${s-c/2-T/2},${u-M}
      ${t.posWithOffset-c/2-T},${u-g-M}
      ${t.posWithOffset+c/2+T},${u-g-M}
      ${t.posWithOffset+c/2+T},${u+g+M}
      ${t.posWithOffset-c/2-T},${u+g+M}`),f.attr("cy",u).attr("cx",s-c/2+T/2).attr("r",1.5).attr("class","tag-hole"),y==="TB"||y==="BT"){const b=s+h;p.attr("class","tag-label-bkg").attr("points",`
        ${t.x},${b+2}
        ${t.x},${b-2}
        ${t.x+I},${b-g-2}
        ${t.x+I+c+4},${b-g-2}
        ${t.x+I+c+4},${b+g+2}
        ${t.x+I},${b+g+2}`).attr("transform","translate(12,12) rotate(45, "+t.x+","+s+")"),f.attr("cx",t.x+T/2).attr("cy",b).attr("transform","translate(12,12) rotate(45, "+t.x+","+s+")"),d.attr("x",t.x+5).attr("y",b+3).attr("transform","translate(14,14) rotate(45, "+t.x+","+s+")")}}}},"drawCommitTags"),se=$(a=>{var t;switch((t=a.customType)!=null?t:a.type){case x.NORMAL:return"commit-normal";case x.REVERSE:return"commit-reverse";case x.HIGHLIGHT:return"commit-highlight";case x.MERGE:return"commit-merge";case x.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),oe=$((a,r,t,s)=>{var n,c,o;const e={x:0,y:0};if(a.parents.length>0){const l=er(a.parents);if(l){const d=(n=s.get(l))!=null?n:e;return r==="TB"?d.y+q:r==="BT"?((c=s.get(a.id))!=null?c:e).y-q:d.x+q}}else return r==="TB"?j:r==="BT"?((o=s.get(a.id))!=null?o:e).y-q:0;return 0},"calculatePosition"),ce=$((a,r,t)=>{var c,o;const s=y==="BT"&&t?r:r+I,e=y==="TB"||y==="BT"?s:(c=C.get(a.branch))==null?void 0:c.pos,n=y==="TB"||y==="BT"?(o=C.get(a.branch))==null?void 0:o.pos:s;if(n===void 0||e===void 0)throw new Error(`Position were undefined for commit ${a.id}`);return{x:n,y:e,posWithOffset:s}},"getCommitPosition"),X=$((a,r,t)=>{var f;if(!m)throw new Error("GitGraph config not found");const s=a.append("g").attr("class","commit-bullets"),e=a.append("g").attr("class","commit-labels");let n=y==="TB"||y==="BT"?j:0;const c=[...r.keys()],o=(f=m==null?void 0:m.parallelCommits)!=null?f:!1,l=$((p,h)=>{var b,k;const g=(b=r.get(p))==null?void 0:b.seq,u=(k=r.get(h))==null?void 0:k.seq;return g!==void 0&&u!==void 0?g-u:0},"sortKeys");let d=c.sort(l);y==="BT"&&(o&&Zr(d,r,n),d=d.reverse()),d.forEach(p=>{var u,b,k;const h=r.get(p);if(!h)throw new Error(`Commit not found for key ${p}`);o&&(n=oe(h,y,n,E));const g=ce(h,n,o);if(t){const G=se(h),B=(u=h.customType)!=null?u:h.type,w=(k=(b=C.get(h.branch))==null?void 0:b.index)!=null?k:0;te(s,h,g,G,w,B),ae(e,h,g,n),ne(e,h,g,n)}y==="TB"||y==="BT"?E.set(h.id,{x:g.x,y:g.posWithOffset}):E.set(h.id,{x:g.posWithOffset,y:g.y}),n=y==="BT"&&o?n+q:n+q+I,n>R&&(R=n)})},"drawCommits"),ie=$((a,r,t,s,e)=>{const c=(y==="TB"||y==="BT"?t.x<s.x:t.y<s.y)?r.branch:a.branch,o=$(d=>d.branch===c,"isOnBranchToGetCurve"),l=$(d=>d.seq>a.seq&&d.seq<r.seq,"isBetweenCommits");return[...e.values()].some(d=>l(d)&&o(d))},"shouldRerouteArrow"),P=$((a,r,t=0)=>{const s=a+Math.abs(a-r)/2;if(t>5)return s;if(S.every(c=>Math.abs(c-s)>=10))return S.push(s),s;const n=Math.abs(a-r);return P(a,r-n/5,t+1)},"findLane"),de=$((a,r,t,s)=>{var g,u,b,k,G;const e=E.get(r.id),n=E.get(t.id);if(e===void 0||n===void 0)throw new Error(`Commit positions not found for commits ${r.id} and ${t.id}`);const c=ie(r,t,e,n,s);let o="",l="",d=0,f=0,p=(g=C.get(t.branch))==null?void 0:g.index;t.type===x.MERGE&&r.id!==t.parents[0]&&(p=(u=C.get(r.branch))==null?void 0:u.index);let h;if(c){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",d=10,f=10;const B=e.y<n.y?P(e.y,n.y):P(n.y,e.y),w=e.x<n.x?P(e.x,n.x):P(n.x,e.x);y==="TB"?e.x<n.x?h=`M ${e.x} ${e.y} L ${w-d} ${e.y} ${l} ${w} ${e.y+f} L ${w} ${n.y-d} ${o} ${w+f} ${n.y} L ${n.x} ${n.y}`:(p=(b=C.get(r.branch))==null?void 0:b.index,h=`M ${e.x} ${e.y} L ${w+d} ${e.y} ${o} ${w} ${e.y+f} L ${w} ${n.y-d} ${l} ${w-f} ${n.y} L ${n.x} ${n.y}`):y==="BT"?e.x<n.x?h=`M ${e.x} ${e.y} L ${w-d} ${e.y} ${o} ${w} ${e.y-f} L ${w} ${n.y+d} ${l} ${w+f} ${n.y} L ${n.x} ${n.y}`:(p=(k=C.get(r.branch))==null?void 0:k.index,h=`M ${e.x} ${e.y} L ${w+d} ${e.y} ${l} ${w} ${e.y-f} L ${w} ${n.y+d} ${o} ${w-f} ${n.y} L ${n.x} ${n.y}`):e.y<n.y?h=`M ${e.x} ${e.y} L ${e.x} ${B-d} ${o} ${e.x+f} ${B} L ${n.x-d} ${B} ${l} ${n.x} ${B+f} L ${n.x} ${n.y}`:(p=(G=C.get(r.branch))==null?void 0:G.index,h=`M ${e.x} ${e.y} L ${e.x} ${B+d} ${l} ${e.x+f} ${B} L ${n.x-d} ${B} ${o} ${n.x} ${B-f} L ${n.x} ${n.y}`)}else o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",d=20,f=20,y==="TB"?(e.x<n.x&&(t.type===x.MERGE&&r.id!==t.parents[0]?h=`M ${e.x} ${e.y} L ${e.x} ${n.y-d} ${o} ${e.x+f} ${n.y} L ${n.x} ${n.y}`:h=`M ${e.x} ${e.y} L ${n.x-d} ${e.y} ${l} ${n.x} ${e.y+f} L ${n.x} ${n.y}`),e.x>n.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",d=20,f=20,t.type===x.MERGE&&r.id!==t.parents[0]?h=`M ${e.x} ${e.y} L ${e.x} ${n.y-d} ${l} ${e.x-f} ${n.y} L ${n.x} ${n.y}`:h=`M ${e.x} ${e.y} L ${n.x+d} ${e.y} ${o} ${n.x} ${e.y+f} L ${n.x} ${n.y}`),e.x===n.x&&(h=`M ${e.x} ${e.y} L ${n.x} ${n.y}`)):y==="BT"?(e.x<n.x&&(t.type===x.MERGE&&r.id!==t.parents[0]?h=`M ${e.x} ${e.y} L ${e.x} ${n.y+d} ${l} ${e.x+f} ${n.y} L ${n.x} ${n.y}`:h=`M ${e.x} ${e.y} L ${n.x-d} ${e.y} ${o} ${n.x} ${e.y-f} L ${n.x} ${n.y}`),e.x>n.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",d=20,f=20,t.type===x.MERGE&&r.id!==t.parents[0]?h=`M ${e.x} ${e.y} L ${e.x} ${n.y+d} ${o} ${e.x-f} ${n.y} L ${n.x} ${n.y}`:h=`M ${e.x} ${e.y} L ${n.x-d} ${e.y} ${o} ${n.x} ${e.y-f} L ${n.x} ${n.y}`),e.x===n.x&&(h=`M ${e.x} ${e.y} L ${n.x} ${n.y}`)):(e.y<n.y&&(t.type===x.MERGE&&r.id!==t.parents[0]?h=`M ${e.x} ${e.y} L ${n.x-d} ${e.y} ${l} ${n.x} ${e.y+f} L ${n.x} ${n.y}`:h=`M ${e.x} ${e.y} L ${e.x} ${n.y-d} ${o} ${e.x+f} ${n.y} L ${n.x} ${n.y}`),e.y>n.y&&(t.type===x.MERGE&&r.id!==t.parents[0]?h=`M ${e.x} ${e.y} L ${n.x-d} ${e.y} ${o} ${n.x} ${e.y-f} L ${n.x} ${n.y}`:h=`M ${e.x} ${e.y} L ${e.x} ${n.y+d} ${l} ${e.x+f} ${n.y} L ${n.x} ${n.y}`),e.y===n.y&&(h=`M ${e.x} ${e.y} L ${n.x} ${n.y}`));if(h===void 0)throw new Error("Line definition not found");a.append("path").attr("d",h).attr("class","arrow arrow"+p%O)},"drawArrow"),he=$((a,r)=>{const t=a.append("g").attr("class","commit-arrows");[...r.keys()].forEach(s=>{const e=r.get(s);e.parents&&e.parents.length>0&&e.parents.forEach(n=>{de(t,r.get(n),e,r)})})},"drawArrows"),le=$((a,r)=>{const t=a.append("g");r.forEach((s,e)=>{var u;const n=e%O,c=(u=C.get(s.name))==null?void 0:u.pos;if(c===void 0)throw new Error(`Position not found for branch ${s.name}`);const o=t.append("line");o.attr("x1",0),o.attr("y1",c),o.attr("x2",R),o.attr("y2",c),o.attr("class","branch branch"+n),y==="TB"?(o.attr("y1",j),o.attr("x1",c),o.attr("y2",R),o.attr("x2",c)):y==="BT"&&(o.attr("y1",R),o.attr("x1",c),o.attr("y2",j),o.attr("x2",c)),S.push(c);const l=s.name,d=rr(l),f=t.insert("rect"),h=t.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);h.node().appendChild(d);const g=d.getBBox();f.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-g.width-4-((m==null?void 0:m.rotateCommitLabel)===!0?30:0)).attr("y",-g.height/2+8).attr("width",g.width+18).attr("height",g.height+4),h.attr("transform","translate("+(-g.width-14-((m==null?void 0:m.rotateCommitLabel)===!0?30:0))+", "+(c-g.height/2-1)+")"),y==="TB"?(f.attr("x",c-g.width/2-10).attr("y",0),h.attr("transform","translate("+(c-g.width/2-5)+", 0)")):y==="BT"?(f.attr("x",c-g.width/2-10).attr("y",R),h.attr("transform","translate("+(c-g.width/2-5)+", "+R+")")):f.attr("transform","translate(-19, "+(c-g.height/2)+")")})},"drawBranches"),$e=$(function(a,r,t,s,e){return C.set(a,{pos:r,index:t}),r+=50+(e?40:0)+(y==="TB"||y==="BT"?s.width/2:0),r},"setBranchPosition"),fe=$(function(a,r,t,s){var d,f;if(Xr(),v.debug("in gitgraph renderer",a+`
`,"id:",r,t),!m)throw new Error("GitGraph config not found");const e=(d=m.rotateCommitLabel)!=null?d:!1,n=s.db;H=n.getCommits();const c=n.getBranchesAsObjArray();y=n.getDirection();const o=wr(`[id="${r}"]`);let l=0;c.forEach((p,h)=>{var B;const g=rr(p.name),u=o.append("g"),b=u.insert("g").attr("class","branchLabel"),k=b.insert("g").attr("class","label branch-label");(B=k.node())==null||B.appendChild(g);const G=g.getBBox();l=$e(p.name,l,h,G,e),k.remove(),b.remove(),u.remove()}),X(o,H,!1),m.showBranches&&le(o,c),he(o,H),X(o,H,!0),vr.insertTitle(o,"gitTitleText",(f=m.titleTopMargin)!=null?f:0,n.getDiagramTitle()),Cr(void 0,o,m.diagramPadding,m.useMaxWidth)},"draw"),ge={draw:fe},ye=$(a=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(r=>`
        .branch-label${r} { fill: ${a["gitBranchLabel"+r]}; }
        .commit${r} { stroke: ${a["git"+r]}; fill: ${a["git"+r]}; }
        .commit-highlight${r} { stroke: ${a["gitInv"+r]}; fill: ${a["gitInv"+r]}; }
        .label${r}  { fill: ${a["git"+r]}; }
        .arrow${r} { stroke: ${a["git"+r]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${a.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${a.commitLabelFontSize}; fill: ${a.commitLabelColor};}
  .commit-label-bkg { font-size: ${a.commitLabelFontSize}; fill: ${a.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${a.tagLabelFontSize}; fill: ${a.tagLabelColor};}
  .tag-label-bkg { fill: ${a.tagLabelBackground}; stroke: ${a.tagLabelBorder}; }
  .tag-hole { fill: ${a.textColor}; }

  .commit-merge {
    stroke: ${a.primaryColor};
    fill: ${a.primaryColor};
  }
  .commit-reverse {
    stroke: ${a.primaryColor};
    fill: ${a.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${a.primaryColor};
    fill: ${a.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${a.textColor};
  }
`,"getStyles"),pe=ye,Oe={parser:Jr,db:U,renderer:ge,styles:pe};export{Oe as diagram};
