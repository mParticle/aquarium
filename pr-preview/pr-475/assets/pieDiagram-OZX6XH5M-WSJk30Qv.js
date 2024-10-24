var R=(t,r,p)=>new Promise((o,c)=>{var h=a=>{try{e(p.next(a))}catch(s){c(s)}},i=a=>{try{e(p.throw(a))}catch(s){c(s)}},e=a=>a.done?o(a.value):Promise.resolve(a.value).then(h,i);e((p=p.apply(t,r)).next())});import{p as j}from"./chunk-OQCM5LHU-CC33I6i4.js";import{Y as A,P as z,aE as q,F as K,q as Y,r as Z,s as H,g as J,c as Q,b as X,_ as d,l as F,t as tt,d as et,G as at,K as rt,a6 as nt,k as it}from"./Using existing ones-0e1ri9sk.js";import{p as st}from"./mermaid-parser.core-DexYc5F6.js";import{d as I}from"./arc-BBjNpILO.js";import{o as ot}from"./ordinal-Cboi1Yqb.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-6uhNawu8.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-BbvhSR1o.js";import"./_basePickBy-Bj_pwmRA.js";import"./clone-BPbwfciL.js";import"./init-Gi6I4Gst.js";function lt(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function ct(t){return t}function pt(){var t=ct,r=lt,p=null,o=A(0),c=A(z),h=A(0);function i(e){var a,s=(e=q(e)).length,u,w,y=0,g=new Array(s),n=new Array(s),f=+o.apply(this,arguments),C=Math.min(z,Math.max(-z,c.apply(this,arguments)-f)),v,$=Math.min(Math.abs(C)/s,h.apply(this,arguments)),E=$*(C<0?-1:1),m;for(a=0;a<s;++a)(m=n[g[a]=a]=+t(e[a],a,e))>0&&(y+=m);for(r!=null?g.sort(function(x,D){return r(n[x],n[D])}):p!=null&&g.sort(function(x,D){return p(e[x],e[D])}),a=0,w=y?(C-s*E)/y:0;a<s;++a,f=v)u=g[a],m=n[u],v=f+(m>0?m*w:0)+E,n[u]={data:e[u],index:a,value:m,startAngle:f,endAngle:v,padAngle:$};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:A(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,p=null,i):r},i.sort=function(e){return arguments.length?(p=e,r=null,i):p},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:A(+e),i):o},i.endAngle=function(e){return arguments.length?(c=typeof e=="function"?e:A(+e),i):c},i.padAngle=function(e){return arguments.length?(h=typeof e=="function"?e:A(+e),i):h},i}var L=K.pie,G={sections:new Map,showData:!1,config:L},k=G.sections,P=G.showData,ut=structuredClone(L),gt=d(()=>structuredClone(ut),"getConfig"),dt=d(()=>{k=new Map,P=G.showData,tt()},"clear"),ft=d(({label:t,value:r})=>{k.has(t)||(k.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=d(()=>k,"getSections"),ht=d(t=>{P=t},"setShowData"),vt=d(()=>P,"getShowData"),W={getConfig:gt,clear:dt,setDiagramTitle:Y,getDiagramTitle:Z,setAccTitle:H,getAccTitle:J,setAccDescription:Q,getAccDescription:X,addSection:ft,getSections:mt,setShowData:ht,getShowData:vt},yt=d((t,r)=>{j(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),xt={parse:d(t=>R(void 0,null,function*(){const r=yield st("pie",t);F.debug(r),yt(r,W)}),"parse")},St=d(t=>`
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
`,"getStyles"),At=St,wt=d(t=>{const r=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,c)=>c.value-o.value);return pt().value(o=>o.value)(r)},"createPieArcs"),Ct=d((t,r,p,o)=>{F.debug(`rendering pie chart
`+t);const c=o.db,h=et(),i=at(c.getConfig(),h.pie),e=40,a=18,s=4,u=450,w=u,y=rt(r),g=y.append("g");g.attr("transform","translate("+w/2+","+u/2+")");const{themeVariables:n}=h;let[f]=nt(n.pieOuterStrokeWidth);f!=null||(f=2);const C=i.textPosition,v=Math.min(w,u)/2-e,$=I().innerRadius(0).outerRadius(v),E=I().innerRadius(v*C).outerRadius(v*C);g.append("circle").attr("cx",0).attr("cy",0).attr("r",v+f/2).attr("class","pieOuterCircle");const m=c.getSections(),x=wt(m),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],T=ot(D);g.selectAll("mySlices").data(x).enter().append("path").attr("d",$).attr("fill",l=>T(l.data.label)).attr("class","pieCircle");let N=0;m.forEach(l=>{N+=l}),g.selectAll("mySlices").data(x).enter().append("text").text(l=>(l.data.value/N*100).toFixed(0)+"%").attr("transform",l=>"translate("+E.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),g.append("text").text(c.getDiagramTitle()).attr("x",0).attr("y",-(u-50)/2).attr("class","pieTitleText");const M=g.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(l,S)=>{const b=a+s,B=b*T.domain().length/2,V=12*a,U=S*b-B;return"translate("+V+","+U+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",T).style("stroke",T),M.data(x).append("text").attr("x",a+s).attr("y",a-s).text(l=>{const{label:S,value:b}=l.data;return c.getShowData()?`${S} [${b}]`:S});const _=Math.max(...M.selectAll("text").nodes().map(l=>{var S;return(S=l==null?void 0:l.getBoundingClientRect().width)!=null?S:0})),O=w+e+a+s+_;y.attr("viewBox",`0 0 ${O} ${u}`),it(y,u,O,i.useMaxWidth)},"draw"),Dt={draw:Ct},Vt={parser:xt,db:W,renderer:Dt,styles:At};export{Vt as diagram};
