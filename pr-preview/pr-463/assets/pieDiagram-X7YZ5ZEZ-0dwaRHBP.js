var R=(t,r,p)=>new Promise((o,c)=>{var h=a=>{try{e(p.next(a))}catch(s){c(s)}},i=a=>{try{e(p.throw(a))}catch(s){c(s)}},e=a=>a.done?o(a.value):Promise.resolve(a.value).then(h,i);e((p=p.apply(t,r)).next())});import{p as j}from"./chunk-RYO7GUH3-By9Dp6M6.js";import{W as A,N as z,aG as q,B as H,q as Z,r as J,s as K,g as Q,c as X,b as Y,_ as d,l as G,v as tt,d as et,D as at,H as rt,a4 as nt,k as it}from"./Using existing ones-N4pmeWqs.js";import{p as st}from"./mermaid-parser.core-CaLlKA9q.js";import{d as W}from"./arc-BQXVC_xk.js";import{o as ot}from"./ordinal-Cboi1Yqb.js";import"./jsx-runtime-CVnACwZl.js";import"./index-3OP4wdng.js";import"./index-CkQzTg6q.js";import"./iframe-BIOeh-cI.js";import"../sb-preview/runtime.js";import"./dayjs.min-FTgVsUrW.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-D7dKsYsu.js";import"./_basePickBy-CPoF9C-c.js";import"./clone-C1OSUy-J.js";import"./init-Gi6I4Gst.js";function lt(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function ct(t){return t}function pt(){var t=ct,r=lt,p=null,o=A(0),c=A(z),h=A(0);function i(e){var a,s=(e=q(e)).length,u,w,y=0,g=new Array(s),n=new Array(s),f=+o.apply(this,arguments),D=Math.min(z,Math.max(-z,c.apply(this,arguments)-f)),v,$=Math.min(Math.abs(D)/s,h.apply(this,arguments)),E=$*(D<0?-1:1),m;for(a=0;a<s;++a)(m=n[g[a]=a]=+t(e[a],a,e))>0&&(y+=m);for(r!=null?g.sort(function(x,C){return r(n[x],n[C])}):p!=null&&g.sort(function(x,C){return p(e[x],e[C])}),a=0,w=y?(D-s*E)/y:0;a<s;++a,f=v)u=g[a],m=n[u],v=f+(m>0?m*w:0)+E,n[u]={data:e[u],index:a,value:m,startAngle:f,endAngle:v,padAngle:$};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:A(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,p=null,i):r},i.sort=function(e){return arguments.length?(p=e,r=null,i):p},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:A(+e),i):o},i.endAngle=function(e){return arguments.length?(c=typeof e=="function"?e:A(+e),i):c},i.padAngle=function(e){return arguments.length?(h=typeof e=="function"?e:A(+e),i):h},i}var I=H.pie,F={sections:new Map,showData:!1,config:I},k=F.sections,N=F.showData,ut=structuredClone(I),gt=d(()=>structuredClone(ut),"getConfig"),dt=d(()=>{k=new Map,N=F.showData,tt()},"clear"),ft=d(({label:t,value:r})=>{k.has(t)||(k.set(t,r),G.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=d(()=>k,"getSections"),ht=d(t=>{N=t},"setShowData"),vt=d(()=>N,"getShowData"),L={getConfig:gt,clear:dt,setDiagramTitle:Z,getDiagramTitle:J,setAccTitle:K,getAccTitle:Q,setAccDescription:X,getAccDescription:Y,addSection:ft,getSections:mt,setShowData:ht,getShowData:vt},yt=d((t,r)=>{j(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),xt={parse:d(t=>R(void 0,null,function*(){const r=yield st("pie",t);G.debug(r),yt(r,L)}),"parse")},St=d(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),At=St,wt=d(t=>{const r=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,c)=>c.value-o.value);return pt().value(o=>o.value)(r)},"createPieArcs"),Dt=d((t,r,p,o)=>{G.debug(`rendering pie chart
`+t);const c=o.db,h=et(),i=at(c.getConfig(),h.pie),e=40,a=18,s=4,u=450,w=u,y=rt(r),g=y.append("g");g.attr("transform","translate("+w/2+","+u/2+")");const{themeVariables:n}=h;let[f]=nt(n.pieOuterStrokeWidth);f!=null||(f=2);const D=i.textPosition,v=Math.min(w,u)/2-e,$=W().innerRadius(0).outerRadius(v),E=W().innerRadius(v*D).outerRadius(v*D);g.append("circle").attr("cx",0).attr("cy",0).attr("r",v+f/2).attr("class","pieOuterCircle");const m=c.getSections(),x=wt(m),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],T=ot(C);g.selectAll("mySlices").data(x).enter().append("path").attr("d",$).attr("fill",l=>T(l.data.label)).attr("class","pieCircle");let O=0;m.forEach(l=>{O+=l}),g.selectAll("mySlices").data(x).enter().append("text").text(l=>(l.data.value/O*100).toFixed(0)+"%").attr("transform",l=>"translate("+E.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),g.append("text").text(c.getDiagramTitle()).attr("x",0).attr("y",-(u-50)/2).attr("class","pieTitleText");const M=g.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(l,S)=>{const b=a+s,B=b*T.domain().length/2,V=12*a,U=S*b-B;return"translate("+V+","+U+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",T).style("stroke",T),M.data(x).append("text").attr("x",a+s).attr("y",a-s).text(l=>{const{label:S,value:b}=l.data;return c.getShowData()?`${S} [${b}]`:S});const _=Math.max(...M.selectAll("text").nodes().map(l=>{var S;return(S=l==null?void 0:l.getBoundingClientRect().width)!=null?S:0})),P=w+e+a+s+_;y.attr("viewBox",`0 0 ${P} ${u}`),it(y,u,P,i.useMaxWidth)},"draw"),Ct={draw:Dt},Vt={parser:xt,db:L,renderer:Ct,styles:At};export{Vt as diagram};
