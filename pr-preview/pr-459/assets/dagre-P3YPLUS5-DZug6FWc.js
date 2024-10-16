var H=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var B=(n,t,e)=>t in n?H(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,O=(n,t)=>{for(var e in t||(t={}))K.call(t,e)&&B(n,e,t[e]);if(k)for(var e of k(t))Q.call(t,e)&&B(n,e,t[e]);return n},A=(n,t)=>q(n,z(t));var b=(n,t,e)=>new Promise((c,d)=>{var a=o=>{try{u(e.next(o))}catch(w){d(w)}},r=o=>{try{u(e.throw(o))}catch(w){d(w)}},u=o=>o.done?c(o.value):Promise.resolve(o.value).then(a,r);u((e=e.apply(n,t)).next())});import{_ as X,am as U,an as V,ao as W,ap as Z,l as i,d as $,aq as I,ar as L,as as ee,ae as ne,at as J,au as te,av as se,aw as ie,ax as re}from"./Using existing ones-BG1-5418.js";import{G as R}from"./graph-BZVRFcT1.js";import{l as oe}from"./layout-_yBJcPEq.js";import{w as p}from"./json-BKdjU7H8.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-D_9D-wHs.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-Df8CL3Q6.js";import"./_basePickBy-Dwjo-avD.js";import"./clone-CVuogQSD.js";var f=new Map,C=new Map,T=new Map,ce=X(()=>{C.clear(),T.clear(),f.clear()},"clear"),P=X((n,t)=>{const e=C.get(t)||[];return i.trace("In isDescendant",t," ",n," = ",e.includes(n)),e.includes(n)},"isDescendant"),ae=X((n,t)=>{const e=C.get(t)||[];return i.info("Descendants of ",t," is ",e),i.info("Edge is ",n),n.v===t||n.w===t?!1:e?e.includes(n.v)||P(n.v,t)||P(n.w,t)||e.includes(n.w):(i.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),M=X((n,t,e,c)=>{i.warn("Copying children of ",n,"root",c,"data",t.node(n),c);const d=t.children(n)||[];n!==c&&d.push(n),i.warn("Copying (nodes) clusterId",n,"nodes",d),d.forEach(a=>{if(t.children(a).length>0)M(a,t,e,c);else{const r=t.node(a);i.info("cp ",a," to ",c," with parent ",n),e.setNode(a,r),c!==t.parent(a)&&(i.warn("Setting parent",a,t.parent(a)),e.setParent(a,t.parent(a))),n!==c&&a!==n?(i.debug("Setting parent",a,n),e.setParent(a,n)):(i.info("In copy ",n,"root",c,"data",t.node(n),c),i.debug("Not Setting parent for node=",a,"cluster!==rootId",n!==c,"node!==clusterId",a!==n));const u=t.edges(a);i.debug("Copying Edges",u),u.forEach(o=>{i.info("Edge",o);const w=t.edge(o.v,o.w,o.name);i.info("Edge data",w,c);try{ae(o,c)?(i.info("Copying as ",o.v,o.w,w,o.name),e.setEdge(o.v,o.w,w,o.name),i.info("newGraph edges ",e.edges(),e.edge(e.edges()[0]))):i.info("Skipping copy of edge ",o.v,"-->",o.w," rootId: ",c," clusterId:",n)}catch(x){i.error(x)}})}i.debug("Removing node",a),t.removeNode(a)})},"copy"),F=X((n,t)=>{const e=t.children(n);let c=[...e];for(const d of e)T.set(d,n),c=[...c,...F(d,t)];return c},"extractDescendants"),de=X((n,t,e)=>{const c=n.edges().filter(o=>o.v===t||o.w===t),d=n.edges().filter(o=>o.v===e||o.w===e),a=c.map(o=>({v:o.v===t?e:o.v,w:o.w===t?t:o.w})),r=d.map(o=>({v:o.v,w:o.w}));return a.filter(o=>r.some(w=>o.v===w.v&&o.w===w.w))},"findCommonEdges"),D=X((n,t,e)=>{const c=t.children(n);if(i.trace("Searching children of id ",n,c),c.length<1)return n;let d;for(const a of c){const r=D(a,t,e),u=de(t,e,r);if(r)if(u.length>0)d=r;else return r}return d},"findNonClusterChild"),G=X(n=>!f.has(n)||!f.get(n).externalConnections?n:f.has(n)?f.get(n).id:n,"getAnchorId"),le=X((n,t)=>{if(!n||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");n.nodes().forEach(function(e){n.children(e).length>0&&(i.warn("Cluster identified",e," Replacement id in edges: ",D(e,n,e)),C.set(e,F(e,n)),f.set(e,{id:D(e,n,e),clusterData:n.node(e)}))}),n.nodes().forEach(function(e){const c=n.children(e),d=n.edges();c.length>0?(i.debug("Cluster identified",e,C),d.forEach(a=>{const r=P(a.v,e),u=P(a.w,e);r^u&&(i.warn("Edge: ",a," leaves cluster ",e),i.warn("Descendants of XXX ",e,": ",C.get(e)),f.get(e).externalConnections=!0)})):i.debug("Not a cluster ",e,C)});for(let e of f.keys()){const c=f.get(e).id,d=n.parent(c);d!==e&&f.has(d)&&!f.get(d).externalConnections&&(f.get(e).id=d)}n.edges().forEach(function(e){const c=n.edge(e);i.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),i.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(n.edge(e)));let d=e.v,a=e.w;if(i.warn("Fix XXX",f,"ids:",e.v,e.w,"Translating: ",f.get(e.v)," --- ",f.get(e.w)),f.get(e.v)||f.get(e.w)){if(i.warn("Fixing and trying - removing XXX",e.v,e.w,e.name),d=G(e.v),a=G(e.w),n.removeEdge(e.v,e.w,e.name),d!==e.v){const r=n.parent(d);f.get(r).externalConnections=!0,c.fromCluster=e.v}if(a!==e.w){const r=n.parent(a);f.get(r).externalConnections=!0,c.toCluster=e.w}i.warn("Fix Replacing with XXX",d,a,e.name),n.setEdge(d,a,c,e.name)}}),i.warn("Adjusted Graph",p(n)),Y(n,0),i.trace(f)},"adjustClustersAndEdges"),Y=X((n,t)=>{var d,a;if(i.warn("extractor - ",t,p(n),n.children("D")),t>10){i.error("Bailing out");return}let e=n.nodes(),c=!1;for(const r of e){const u=n.children(r);c=c||u.length>0}if(!c){i.debug("Done, no node has children",n.nodes());return}i.debug("Nodes = ",e,t);for(const r of e)if(i.debug("Extracting node",r,f,f.has(r)&&!f.get(r).externalConnections,!n.parent(r),n.node(r),n.children("D")," Depth ",t),!f.has(r))i.debug("Not a cluster",r,t);else if(!f.get(r).externalConnections&&n.children(r)&&n.children(r).length>0){i.warn("Cluster without external connections, without a parent and with children",r,t);let o=n.graph().rankdir==="TB"?"LR":"TB";(a=(d=f.get(r))==null?void 0:d.clusterData)!=null&&a.dir&&(o=f.get(r).clusterData.dir,i.warn("Fixing dir",f.get(r).clusterData.dir,o));const w=new R({multigraph:!0,compound:!0}).setGraph({rankdir:o,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",p(n)),M(r,n,w,r),n.setNode(r,{clusterNode:!0,id:r,clusterData:f.get(r).clusterData,label:f.get(r).label,graph:w}),i.warn("New graph after copy node: (",r,")",p(w)),i.debug("Old graph after copy",p(n))}else i.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!f.get(r).externalConnections," no parent: ",!n.parent(r)," children ",n.children(r)&&n.children(r).length>0,n.children("D"),t),i.debug(f);e=n.nodes(),i.warn("New list of nodes",e);for(const r of e){const u=n.node(r);i.warn(" Now next level",r,u),u!=null&&u.clusterNode&&Y(u.graph,t+1)}},"extractor"),_=X((n,t)=>{if(t.length===0)return[];let e=Object.assign([],t);return t.forEach(c=>{const d=n.children(c),a=_(n,d);e=[...e,...a]}),e},"sorter"),fe=X(n=>_(n,n.children()),"sortNodesByHierarchy"),j=X((n,t,e,c,d,a)=>b(void 0,null,function*(){i.warn("Graph in recursive render:XAX",p(t),d);const r=t.graph().rankdir;i.trace("Dir in recursive render - dir:",r);const u=n.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.info("Recursive edges",t.edge(t.edges()[0]));const o=u.insert("g").attr("class","clusters"),w=u.insert("g").attr("class","edgePaths"),x=u.insert("g").attr("class","edgeLabels"),g=u.insert("g").attr("class","nodes");yield Promise.all(t.nodes().map(function(l){return b(this,null,function*(){const s=t.node(l);if(d!==void 0){const h=JSON.parse(JSON.stringify(d.clusterData));i.trace(`Setting data for parent cluster XXX
 Node.id = `,l,`
 data=`,h.height,`
Parent cluster`,d.height),t.setNode(d.id,h),t.parent(l)||(i.trace("Setting parent",l,d.id),t.setParent(l,d.id,h))}if(i.info("(Insert) Node XXX"+l+": "+JSON.stringify(t.node(l))),s!=null&&s.clusterNode){i.info("Cluster identified XBX",l,s.width,t.node(l));const{ranksep:h,nodesep:v}=t.graph();s.graph.setGraph(A(O({},s.graph.graph()),{ranksep:h+25,nodesep:v}));const N=yield j(g,s.graph,e,c,t.node(l),a),S=N.elem;I(s,S),s.diff=N.diff||0,i.info("New compound node after recursive render XAX",l,"width",s.width,"height",s.height),L(S,s)}else t.children(l).length>0?(i.trace("Cluster - the non recursive path XBX",l,s.id,s,s.width,"Graph:",t),i.trace(D(s.id,t)),f.set(s.id,{id:D(s.id,t),node:s})):(i.trace("Node - the non recursive path XAX",l,g,t.node(l),r),yield ee(g,t.node(l),r))})})),yield X(()=>b(void 0,null,function*(){const l=t.edges().map(function(s){return b(this,null,function*(){const h=t.edge(s.v,s.w,s.name);i.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s)),i.info("Edge "+s.v+" -> "+s.w+": ",s," ",JSON.stringify(t.edge(s))),i.info("Fix",f,"ids:",s.v,s.w,"Translating: ",f.get(s.v),f.get(s.w)),yield re(x,h)})});yield Promise.all(l)}),"processEdges")(),i.info("Graph before layout:",JSON.stringify(p(t))),i.info("############################################# XXX"),i.info("###                Layout                 ### XXX"),i.info("############################################# XXX"),oe(t),i.info("Graph after layout:",JSON.stringify(p(t)));let E=0,{subGraphTitleTotalMargin:y}=ne(a);return yield Promise.all(fe(t).map(function(l){return b(this,null,function*(){var h;const s=t.node(l);if(i.info("Position XBX => "+l+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s!=null&&s.clusterNode)s.y+=y,i.info("A tainted cluster node XBX1",l,s.id,s.width,s.height,s.x,s.y,t.parent(l)),f.get(s.id).node=s,J(s);else if(t.children(l).length>0){i.info("A pure cluster node XBX1",l,s.id,s.x,s.y,s.width,s.height,t.parent(l)),s.height+=y,t.node(s.parentId);const v=(s==null?void 0:s.padding)/2||0,N=((h=s==null?void 0:s.labelBBox)==null?void 0:h.height)||0,S=N-v||0;i.debug("OffsetY",S,"labelHeight",N,"halfPadding",v),yield te(o,s),f.get(s.id).node=s}else{const v=t.node(s.parentId);s.y+=y/2,i.info("A regular node XBX1 - using the padding",s.id,"parent",s.parentId,s.width,s.height,s.x,s.y,"offsetY",s.offsetY,"parent",v,v==null?void 0:v.offsetY,s),J(s)}})})),t.edges().forEach(function(l){const s=t.edge(l);i.info("Edge "+l.v+" -> "+l.w+": "+JSON.stringify(s),s),s.points.forEach(S=>S.y+=y/2);const h=t.node(l.v);var v=t.node(l.w);const N=se(w,s,f,e,h,v,c);ie(s,N)}),t.nodes().forEach(function(l){const s=t.node(l);i.info(l,s.type,s.diff),s.isGroup&&(E=s.diff)}),i.warn("Returning from recursive render XAX",u,E),{elem:u,diff:E}}),"recursiveRender"),Oe=X((n,t)=>b(void 0,null,function*(){var a,r,u,o,w,x;const e=new R({multigraph:!0,compound:!0}).setGraph({rankdir:n.direction,nodesep:((a=n.config)==null?void 0:a.nodeSpacing)||((u=(r=n.config)==null?void 0:r.flowchart)==null?void 0:u.nodeSpacing)||n.nodeSpacing,ranksep:((o=n.config)==null?void 0:o.rankSpacing)||((x=(w=n.config)==null?void 0:w.flowchart)==null?void 0:x.rankSpacing)||n.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),c=t.select("g");U(c,n.markers,n.type,n.diagramId),V(),W(),Z(),ce(),n.nodes.forEach(g=>{e.setNode(g.id,O({},g)),g.parentId&&e.setParent(g.id,g.parentId)}),i.debug("Edges:",n.edges),n.edges.forEach(g=>{if(g.start===g.end){const m=g.start,E=m+"---"+m+"---1",y=m+"---"+m+"---2",l=e.node(m);e.setNode(E,{domId:E,id:E,parentId:l.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),e.setParent(E,l.parentId),e.setNode(y,{domId:y,id:y,parentId:l.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),e.setParent(y,l.parentId);const s=structuredClone(g),h=structuredClone(g),v=structuredClone(g);s.label="",s.arrowTypeEnd="none",s.id=m+"-cyclic-special-1",h.arrowTypeEnd="none",h.id=m+"-cyclic-special-mid",v.label="",l.isGroup&&(s.fromCluster=m,v.toCluster=m),v.id=m+"-cyclic-special-2",e.setEdge(m,E,s,m+"-cyclic-special-0"),e.setEdge(E,y,h,m+"-cyclic-special-1"),e.setEdge(y,m,v,m+"-cyc<lic-special-2")}else e.setEdge(g.start,g.end,O({},g),g.id)}),i.warn("Graph at first:",JSON.stringify(p(e))),le(e),i.warn("Graph after XAX:",JSON.stringify(p(e)));const d=$();yield j(c,e,n.type,n.diagramId,void 0,d)}),"render");export{Oe as render};
