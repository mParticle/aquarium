var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var C=(t,e,a)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))P.call(e,a)&&C(t,a,e[a]);if(x)for(var a of x(e))W.call(e,a)&&C(t,a,e[a]);return t};var $=(t,e,a)=>new Promise((n,s)=>{var o=l=>{try{c(a.next(l))}catch(i){s(i)}},r=l=>{try{c(a.throw(l))}catch(i){s(i)}},c=l=>l.done?n(l.value):Promise.resolve(l.value).then(o,r);c((a=a.apply(t,e)).next())});import{p as D}from"./chunk-RYO7GUH3-By9Dp6M6.js";import{B as T,s as E,g as _,q as A,r as N,b as L,c as Y,_ as p,l as y,D as w,E as H,v as I,H as M,k as O}from"./Using existing ones-N4pmeWqs.js";import{p as q}from"./mermaid-parser.core-CaLlKA9q.js";import"./jsx-runtime-CVnACwZl.js";import"./index-3OP4wdng.js";import"./index-CkQzTg6q.js";import"./iframe-BIOeh-cI.js";import"../sb-preview/runtime.js";import"./dayjs.min-FTgVsUrW.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-D7dKsYsu.js";import"./_basePickBy-CPoF9C-c.js";import"./clone-C1OSUy-J.js";var B={packet:[]},v=structuredClone(B),G=T.packet,K=p(()=>{const t=w(h(h({},G),H().packet));return t.showBits&&(t.paddingY+=10),t},"getConfig"),R=p(()=>v.packet,"getPacket"),U=p(t=>{t.length>0&&v.packet.push(t)},"pushWord"),X=p(()=>{I(),v=structuredClone(B)},"clear"),u={pushWord:U,getPacket:R,getConfig:K,clear:X,setAccTitle:E,getAccTitle:_,setDiagramTitle:A,getDiagramTitle:N,getAccDescription:L,setAccDescription:Y},j=1e4,J=p(t=>{D(t,u);let e=-1,a=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:o,end:r,label:c}of t.blocks){if(r&&r<o)throw new Error(`Packet block ${o} - ${r} is invalid. End must be greater than start.`);if(o!==e+1)throw new Error(`Packet block ${o} - ${r!=null?r:o} is not contiguous. It should start from ${e+1}.`);for(e=r!=null?r:o,y.debug(`Packet block ${o} - ${e} with label ${c}`);a.length<=s+1&&u.getPacket().length<j;){const[l,i]=Q({start:o,end:r,label:c},n,s);if(a.push(l),l.end+1===n*s&&(u.pushWord(a),a=[],n++),!i)break;({start:o,end:r,label:c}=i)}}u.pushWord(a)},"populate"),Q=p((t,e,a)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),V={parse:p(t=>$(void 0,null,function*(){const e=yield q("packet",t);y.debug(e),J(e)}),"parse")},Z=p((t,e,a,n)=>{const s=n.db,o=s.getConfig(),{rowHeight:r,paddingY:c,bitWidth:l,bitsPerRow:i}=o,m=s.getPacket(),d=s.getDiagramTitle(),k=r+c,g=k*(m.length+1)-(d?0:r),f=l*i+2,b=M(e);b.attr("viewbox",`0 0 ${f} ${g}`),O(b,g,f,o.useMaxWidth);for(const[S,F]of m.entries())tt(b,F,S,o);b.append("text").text(d).attr("x",f/2).attr("y",g-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),tt=p((t,e,a,{rowHeight:n,paddingX:s,paddingY:o,bitWidth:r,bitsPerRow:c,showBits:l})=>{const i=t.append("g"),m=a*(n+o)+o;for(const d of e){const k=d.start%c*r+1,g=(d.end-d.start+1)*r-s;if(i.append("rect").attr("x",k).attr("y",m).attr("width",g).attr("height",n).attr("class","packetBlock"),i.append("text").attr("x",k+g/2).attr("y",m+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(d.label),!l)continue;const f=d.end===d.start,b=m-2;i.append("text").attr("x",k+(f?g/2:0)).attr("y",b).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",f?"middle":"start").text(d.start),f||i.append("text").attr("x",k+g).attr("y",b).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(d.end)}},"drawWord"),et={draw:Z},at={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},rt=p(({packet:t}={})=>{const e=w(at,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),vt={parser:V,db:u,renderer:et,styles:rt};export{vt as diagram};
