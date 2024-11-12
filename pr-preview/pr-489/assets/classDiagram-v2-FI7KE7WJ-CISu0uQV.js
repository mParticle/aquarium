var ct=Object.defineProperty,dt=Object.defineProperties;var ft=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var W=(e,t,i)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,B=(e,t)=>{for(var i in t||(t={}))ut.call(t,i)&&W(e,i,t[i]);if(z)for(var i of z(t))ht.call(t,i)&&W(e,i,t[i]);return e},q=(e,t)=>dt(e,ft(t));var C=(e,t,i)=>new Promise((l,n)=>{var a=o=>{try{f(i.next(o))}catch(h){n(h)}},r=o=>{try{f(i.throw(o))}catch(h){n(h)}},f=o=>o.done?l(o.value):Promise.resolve(o.value).then(a,r);f((i=i.apply(e,t)).next())});import{m as gt,c as wt,i as yt,a as bt,p as mt}from"./chunk-UGV5ZQQN-CHJgdYCG.js";import{c as pt,a as V,s as vt}from"./chunk-BAVOGKFW-9hA1CzS2.js";import{c as xt,u as St,s as Nt,i as Et,p as j,a as K,b as A}from"./chunk-YWFND7JV-B8mYYdMj.js";import{_ as g,l as s,d as m,j as D,u as Ct,aa as Tt,ab as Q,ac as U,ad as Y,v as kt,e as Z,ae as G,A as R,D as Dt}from"./Using existing ones-BXDRbIhK.js";import{G as I}from"./graph-B1qoUvdO.js";import{l as Xt}from"./layout-gGmsoxuB.js";import{w as S}from"./json-y4rVVpxp.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-BpEomAFm.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-BNgr85Sf.js";import"./_basePickBy-BZR4Cj1a.js";import"./clone-Brx2nHWm.js";var u={},x={},tt={},Bt=g(()=>{x={},tt={},u={}},"clear"),_=g((e,t)=>(s.trace("In isDescendant",t," ",e," = ",x[t].includes(e)),!!x[t].includes(e)),"isDescendant"),Lt=g((e,t)=>(s.info("Descendants of ",t," is ",x[t]),s.info("Edge is ",e),e.v===t||e.w===t?!1:x[t]?x[t].includes(e.v)||_(e.v,t)||_(e.w,t)||x[t].includes(e.w):(s.debug("Tilt, ",t,",not in descendants"),!1)),"edgeInCluster"),et=g((e,t,i,l)=>{s.warn("Copying children of ",e,"root",l,"data",t.node(e),l);const n=t.children(e)||[];e!==l&&n.push(e),s.warn("Copying (nodes) clusterId",e,"nodes",n),n.forEach(a=>{if(t.children(a).length>0)et(a,t,i,l);else{const r=t.node(a);s.info("cp ",a," to ",l," with parent ",e),i.setNode(a,r),l!==t.parent(a)&&(s.warn("Setting parent",a,t.parent(a)),i.setParent(a,t.parent(a))),e!==l&&a!==e?(s.debug("Setting parent",a,e),i.setParent(a,e)):(s.info("In copy ",e,"root",l,"data",t.node(e),l),s.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==l,"node!==clusterId",a!==e));const f=t.edges(a);s.debug("Copying Edges",f),f.forEach(o=>{s.info("Edge",o);const h=t.edge(o.v,o.w,o.name);s.info("Edge data",h,l);try{Lt(o,l)?(s.info("Copying as ",o.v,o.w,h,o.name),i.setEdge(o.v,o.w,h,o.name),s.info("newGraph edges ",i.edges(),i.edge(i.edges()[0]))):s.info("Skipping copy of edge ",o.v,"-->",o.w," rootId: ",l," clusterId:",e)}catch(b){s.error(b)}})}s.debug("Removing node",a),t.removeNode(a)})},"copy"),it=g((e,t)=>{const i=t.children(e);let l=[...i];for(const n of i)tt[n]=e,l=[...l,...it(n,t)];return l},"extractDescendants"),X=g((e,t)=>{s.trace("Searching",e);const i=t.children(e);if(s.trace("Searching children of id ",e,i),i.length<1)return s.trace("This is a valid node",e),e;for(const l of i){const n=X(l,t);if(n)return s.trace("Found replacement for",e," => ",n),n}},"findNonClusterChild"),L=g(e=>!u[e]||!u[e].externalConnections?e:u[e]?u[e].id:e,"getAnchorId"),Rt=g((e,t)=>{if(!e||t>10){s.debug("Opting out, no graph ");return}else s.debug("Opting in, graph ");e.nodes().forEach(function(i){e.children(i).length>0&&(s.warn("Cluster identified",i," Replacement id in edges: ",X(i,e)),x[i]=it(i,e),u[i]={id:X(i,e),clusterData:e.node(i)})}),e.nodes().forEach(function(i){const l=e.children(i),n=e.edges();l.length>0?(s.debug("Cluster identified",i,x),n.forEach(a=>{if(a.v!==i&&a.w!==i){const r=_(a.v,i),f=_(a.w,i);r^f&&(s.warn("Edge: ",a," leaves cluster ",i),s.warn("Descendants of XXX ",i,": ",x[i]),u[i].externalConnections=!0)}})):s.debug("Not a cluster ",i,x)});for(let i of Object.keys(u)){const l=u[i].id,n=e.parent(l);n!==i&&u[n]&&!u[n].externalConnections&&(u[i].id=n)}e.edges().forEach(function(i){const l=e.edge(i);s.warn("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(i)),s.warn("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(e.edge(i)));let n=i.v,a=i.w;if(s.warn("Fix XXX",u,"ids:",i.v,i.w,"Translating: ",u[i.v]," --- ",u[i.w]),u[i.v]&&u[i.w]&&u[i.v]===u[i.w]){s.warn("Fixing and trixing link to self - removing XXX",i.v,i.w,i.name),s.warn("Fixing and trixing - removing XXX",i.v,i.w,i.name),n=L(i.v),a=L(i.w),e.removeEdge(i.v,i.w,i.name);const r=i.w+"---"+i.v;e.setNode(r,{domId:r,id:r,labelStyle:"",labelText:l.label,padding:0,shape:"labelRect",style:""});const f=structuredClone(l),o=structuredClone(l);f.label="",f.arrowTypeEnd="none",o.label="",f.fromCluster=i.v,o.toCluster=i.v,e.setEdge(n,r,f,i.name+"-cyclic-special"),e.setEdge(r,a,o,i.name+"-cyclic-special")}else if(u[i.v]||u[i.w]){if(s.warn("Fixing and trixing - removing XXX",i.v,i.w,i.name),n=L(i.v),a=L(i.w),e.removeEdge(i.v,i.w,i.name),n!==i.v){const r=e.parent(n);u[r].externalConnections=!0,l.fromCluster=i.v}if(a!==i.w){const r=e.parent(a);u[r].externalConnections=!0,l.toCluster=i.w}s.warn("Fix Replacing with XXX",n,a,i.name),e.setEdge(n,a,l,i.name)}}),s.warn("Adjusted Graph",S(e)),nt(e,0),s.trace(u)},"adjustClustersAndEdges"),nt=g((e,t)=>{var n,a;if(s.warn("extractor - ",t,S(e),e.children("D")),t>10){s.error("Bailing out");return}let i=e.nodes(),l=!1;for(const r of i){const f=e.children(r);l=l||f.length>0}if(!l){s.debug("Done, no node has children",e.nodes());return}s.debug("Nodes = ",i,t);for(const r of i)if(s.debug("Extracting node",r,u,u[r]&&!u[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),!u[r])s.debug("Not a cluster",r,t);else if(!u[r].externalConnections&&e.children(r)&&e.children(r).length>0){s.warn("Cluster without external connections, without a parent and with children",r,t);let o=e.graph().rankdir==="TB"?"LR":"TB";(a=(n=u[r])==null?void 0:n.clusterData)!=null&&a.dir&&(o=u[r].clusterData.dir,s.warn("Fixing dir",u[r].clusterData.dir,o));const h=new I({multigraph:!0,compound:!0}).setGraph({rankdir:o,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});s.warn("Old graph before copy",S(e)),et(r,e,h,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:u[r].clusterData,labelText:u[r].labelText,graph:h}),s.warn("New graph after copy node: (",r,")",S(h)),s.debug("Old graph after copy",S(e))}else s.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!u[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),s.debug(u);i=e.nodes(),s.warn("New list of nodes",i);for(const r of i){const f=e.node(r);s.warn(" Now next level",r,f),f.clusterNode&&nt(f.graph,t+1)}},"extractor"),st=g((e,t)=>{if(t.length===0)return[];let i=Object.assign(t);return t.forEach(l=>{const n=e.children(l),a=st(e,n);i=[...i,...a]}),i},"sorter"),_t=g(e=>st(e,e.children()),"sortNodesByHierarchy"),At=g((e,t)=>{s.info("Creating subgraph rect for ",t.id,t);const i=m(),l=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),n=l.insert("rect",":first-child"),a=R(i.flowchart.htmlLabels),r=l.insert("g").attr("class","cluster-label"),f=t.labelType==="markdown"?Dt(r,t.labelText,{style:t.labelStyle,useHtmlLabels:a},i):r.node().appendChild(K(t.labelText,t.labelStyle,void 0,!0));let o=f.getBBox();if(R(i.flowchart.htmlLabels)){const d=f.children[0],c=D(f);o=d.getBoundingClientRect(),c.attr("width",o.width),c.attr("height",o.height)}const h=0*t.padding,b=h/2,y=t.width<=o.width+h?o.width+h:t.width;t.width<=o.width+h?t.diff=(o.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,s.trace("Data ",t,JSON.stringify(t)),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-y/2).attr("y",t.y-t.height/2-b).attr("width",y).attr("height",t.height+h);const{subGraphTitleTopMargin:p}=G(i);a?r.attr("transform",`translate(${t.x-o.width/2}, ${t.y-t.height/2+p})`):r.attr("transform",`translate(${t.x}, ${t.y-t.height/2+p})`);const w=n.node().getBBox();return t.width=w.width,t.height=w.height,t.intersect=function(d){return A(t,d)},l},"rect"),Jt=g((e,t)=>{const i=e.insert("g").attr("class","note-cluster").attr("id",t.id),l=i.insert("rect",":first-child"),n=0*t.padding,a=n/2;l.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+n).attr("height",t.height+n).attr("fill","none");const r=l.node().getBBox();return t.width=r.width,t.height=r.height,t.intersect=function(f){return A(t,f)},i},"noteGroup"),Ot=g((e,t)=>{const i=m(),l=e.insert("g").attr("class",t.classes).attr("id",t.id),n=l.insert("rect",":first-child"),a=l.insert("g").attr("class","cluster-label"),r=l.append("rect"),f=a.node().appendChild(K(t.labelText,t.labelStyle,void 0,!0));let o=f.getBBox();if(R(i.flowchart.htmlLabels)){const d=f.children[0],c=D(f);o=d.getBoundingClientRect(),c.attr("width",o.width),c.attr("height",o.height)}o=f.getBBox();const h=0*t.padding,b=h/2,y=t.width<=o.width+t.padding?o.width+t.padding:t.width;t.width<=o.width+t.padding?t.diff=(o.width+t.padding*0-t.width)/2:t.diff=-t.padding/2,n.attr("class","outer").attr("x",t.x-y/2-b).attr("y",t.y-t.height/2-b).attr("width",y+h).attr("height",t.height+h),r.attr("class","inner").attr("x",t.x-y/2-b).attr("y",t.y-t.height/2-b+o.height-1).attr("width",y+h).attr("height",t.height+h-o.height-3);const{subGraphTitleTopMargin:p}=G(i);a.attr("transform",`translate(${t.x-o.width/2}, ${t.y-t.height/2-t.padding/3+(R(i.flowchart.htmlLabels)?5:3)+p})`);const w=n.node().getBBox();return t.height=w.height,t.intersect=function(d){return A(t,d)},l},"roundedWithTitle"),Pt=g((e,t)=>{const i=e.insert("g").attr("class",t.classes).attr("id",t.id),l=i.insert("rect",":first-child"),n=0*t.padding,a=n/2;l.attr("class","divider").attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2).attr("width",t.width+n).attr("height",t.height+n);const r=l.node().getBBox();return t.width=r.width,t.height=r.height,t.diff=-t.padding/2,t.intersect=function(f){return A(t,f)},i},"divider"),Gt={rect:At,roundedWithTitle:Ot,noteGroup:Jt,divider:Pt},at={},Mt=g((e,t)=>{s.trace("Inserting cluster");const i=t.shape||"rect";at[t.id]=Gt[i](e,t)},"insertCluster"),Ft=g(()=>{at={}},"clear"),rt=g((e,t,i,l,n,a)=>C(void 0,null,function*(){s.info("Graph in recursive render: XXX",S(t),n);const r=t.graph().rankdir;s.trace("Dir in recursive render - dir:",r);const f=e.insert("g").attr("class","root");t.nodes()?s.info("Recursive render XXX",t.nodes()):s.info("No nodes found for",t),t.edges().length>0&&s.trace("Recursive edges",t.edge(t.edges()[0]));const o=f.insert("g").attr("class","clusters"),h=f.insert("g").attr("class","edgePaths"),b=f.insert("g").attr("class","edgeLabels"),y=f.insert("g").attr("class","nodes");yield Promise.all(t.nodes().map(function(d){return C(this,null,function*(){const c=t.node(d);if(n!==void 0){const v=JSON.parse(JSON.stringify(n.clusterData));s.info("Setting data for cluster XXX (",d,") ",v,n),t.setNode(n.id,v),t.parent(d)||(s.trace("Setting parent",d,n.id),t.setParent(d,n.id,v))}if(s.info("(Insert) Node XXX"+d+": "+JSON.stringify(t.node(d))),c!=null&&c.clusterNode){s.info("Cluster identified",d,c.width,t.node(d));const{ranksep:v,nodesep:N}=t.graph();c.graph.setGraph(q(B({},c.graph.graph()),{ranksep:v,nodesep:N}));const T=yield rt(y,c.graph,i,l,t.node(d),a),E=T.elem;St(c,E),c.diff=T.diff||0,s.info("Node bounds (abc123)",d,c,c.width,c.x,c.y),Nt(E,c),s.warn("Recursive render complete ",E,c)}else t.children(d).length>0?(s.info("Cluster - the non recursive path XXX",d,c.id,c,t),s.info(X(c.id,t)),u[c.id]={id:X(c.id,t),node:c}):(s.info("Node - the non recursive path",d,c.id,c),yield Et(y,t.node(d),r))})})),t.edges().forEach(function(d){return C(this,null,function*(){const c=t.edge(d.v,d.w,d.name);s.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(d)),s.info("Edge "+d.v+" -> "+d.w+": ",d," ",JSON.stringify(t.edge(d))),s.info("Fix",u,"ids:",d.v,d.w,"Translating: ",u[d.v],u[d.w]),yield yt(b,c)})}),t.edges().forEach(function(d){s.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(d))}),s.info("Graph before layout:",JSON.stringify(S(t))),s.info("#############################################"),s.info("###                Layout                 ###"),s.info("#############################################"),s.info(t),Xt(t),s.info("Graph after layout:",JSON.stringify(S(t)));let p=0;const{subGraphTitleTotalMargin:w}=G(a);return _t(t).forEach(function(d){const c=t.node(d);s.info("Position "+d+": "+JSON.stringify(t.node(d))),s.info("Position "+d+": ("+c.x,","+c.y,") width: ",c.width," height: ",c.height),c!=null&&c.clusterNode?(c.y+=w,j(c)):t.children(d).length>0?(c.height+=w,Mt(o,c),u[c.id].node=c):(c.y+=w/2,j(c))}),t.edges().forEach(function(d){const c=t.edge(d);s.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(c),c),c.points.forEach(N=>N.y+=w/2);const v=bt(h,d,c,u,i,t,l);mt(c,v)}),t.nodes().forEach(function(d){const c=t.node(d);s.info(d,c.type,c.diff),c.type==="group"&&(p=c.diff)}),{elem:f,diff:p}}),"recursiveRender"),$t=g((e,t,i,l,n)=>C(void 0,null,function*(){gt(e,i,l,n),xt(),wt(),Ft(),Bt(),s.warn("Graph at first:",JSON.stringify(S(t))),Rt(t),s.warn("Graph after:",JSON.stringify(S(t)));const a=m();yield rt(e,t,l,n,void 0,a)}),"render"),M=g(e=>Z.sanitizeText(e,m()),"sanitizeText"),O={dividerMargin:10,padding:5,textHeight:10,curve:void 0},Ht=g(function(e,t,i,l){s.info("keys:",[...e.keys()]),s.info(e),e.forEach(function(n){var f,o,h;const r={shape:"rect",id:n.id,domId:n.domId,labelText:M(n.id),labelStyle:"",style:"fill: none; stroke: black",padding:(h=(f=m().flowchart)==null?void 0:f.padding)!=null?h:(o=m().class)==null?void 0:o.padding};t.setNode(n.id,r),lt(n.classes,t,i,l,n.id),s.info("setNode",r)})},"addNamespaces"),lt=g(function(e,t,i,l,n){s.info("keys:",[...e.keys()]),s.info(e),[...e.values()].filter(a=>a.parent===n).forEach(function(a){var p,w,d,c;const r=a.cssClasses.join(" "),f=Q(a.styles),o=(p=a.label)!=null?p:a.id,h=0,y={labelStyle:f.labelStyle,shape:"class_box",labelText:M(o),classData:a,rx:h,ry:h,class:r,style:f.style,id:a.id,domId:a.domId,tooltip:l.db.getTooltip(a.id,n)||"",haveCallback:a.haveCallback,link:a.link,width:a.type==="group"?500:void 0,type:a.type,padding:(c=(w=m().flowchart)==null?void 0:w.padding)!=null?c:(d=m().class)==null?void 0:d.padding};t.setNode(a.id,y),n&&t.setParent(a.id,n),s.info("setNode",y)})},"addClasses"),zt=g(function(e,t,i,l){s.info(e),e.forEach(function(n,a){var c,v,N;const r=n,f="",o={labelStyle:"",style:""},h=r.text,b=0,p={labelStyle:o.labelStyle,shape:"note",labelText:M(h),noteData:r,rx:b,ry:b,class:f,style:o.style,id:r.id,domId:r.id,tooltip:"",type:"note",padding:(N=(c=m().flowchart)==null?void 0:c.padding)!=null?N:(v=m().class)==null?void 0:v.padding};if(t.setNode(r.id,p),s.info("setNode",p),!r.class||!l.has(r.class))return;const w=i+a,d={id:`edgeNote${w}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:U(O.curve,Y)};t.setEdge(r.id,r.class,d,w)})},"addNotes"),Wt=g(function(e,t){const i=m().flowchart;let l=0;e.forEach(function(n){var r,f;l++;const a={classes:"relation",pattern:n.relation.lineType==1?"dashed":"solid",id:kt(n.id1,n.id2,{prefix:"id",counter:l}),arrowhead:n.type==="arrow_open"?"none":"normal",startLabelRight:n.relationTitle1==="none"?"":n.relationTitle1,endLabelLeft:n.relationTitle2==="none"?"":n.relationTitle2,arrowTypeStart:P(n.relation.type1),arrowTypeEnd:P(n.relation.type2),style:"fill:none",labelStyle:"",curve:U(i==null?void 0:i.curve,Y)};if(s.info(a,n),n.style!==void 0){const o=Q(n.style);a.style=o.style,a.labelStyle=o.labelStyle}n.text=n.title,n.text===void 0?n.style!==void 0&&(a.arrowheadStyle="fill: #333"):(a.arrowheadStyle="fill: #333",a.labelpos="c",((f=(r=m().flowchart)==null?void 0:r.htmlLabels)!=null?f:m().htmlLabels)?(a.labelType="html",a.label='<span class="edgeLabel">'+n.text+"</span>"):(a.labelType="text",a.label=n.text.replace(Z.lineBreakRegex,`
`),n.style===void 0&&(a.style=a.style||"stroke: #333; stroke-width: 1.5px;fill:none"),a.labelStyle=a.labelStyle.replace("color:","fill:"))),t.setEdge(n.id1,n.id2,a,l)})},"addRelations"),qt=g(function(e){O=B(B({},O),e)},"setConf"),Vt=g(function(e,t,i,l){return C(this,null,function*(){var N,T,E,F;s.info("Drawing class - ",t);const n=(N=m().flowchart)!=null?N:m().class,a=m().securityLevel;s.info("config:",n);const r=(T=n==null?void 0:n.nodeSpacing)!=null?T:50,f=(E=n==null?void 0:n.rankSpacing)!=null?E:50,o=new I({multigraph:!0,compound:!0}).setGraph({rankdir:l.db.getDirection(),nodesep:r,ranksep:f,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),h=l.db.getNamespaces(),b=l.db.getClasses(),y=l.db.getRelations(),p=l.db.getNotes();s.info(y),Ht(h,o,t,l),lt(b,o,t,l),Wt(y,o),zt(p,o,y.length+1,b);let w;a==="sandbox"&&(w=D("#i"+t));const d=a==="sandbox"?D(w.nodes()[0].contentDocument.body):D("body"),c=d.select(`[id="${t}"]`),v=d.select("#"+t+" g");if(yield $t(v,o,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),Ct.insertTitle(c,"classTitleText",(F=n==null?void 0:n.titleTopMargin)!=null?F:5,l.db.getDiagramTitle()),Tt(o,c,n==null?void 0:n.diagramPadding,n==null?void 0:n.useMaxWidth),!(n!=null&&n.htmlLabels)){const $=a==="sandbox"?w.nodes()[0].contentDocument:document,ot=$.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const J of ot){const H=J.getBBox(),k=$.createElementNS("http://www.w3.org/2000/svg","rect");k.setAttribute("rx",0),k.setAttribute("ry",0),k.setAttribute("width",H.width),k.setAttribute("height",H.height),J.insertBefore(k,J.firstChild)}}})},"draw");function P(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}g(P,"getArrowMarker");var jt={setConf:qt,draw:Vt},he={parser:pt,db:V,renderer:jt,styles:vt,init:g(e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,V.clear()},"init")};export{he as diagram};
