import"./graph-94TtpgVn.js";import{i as o}from"./_baseUniq-D8JVazKQ.js";import{c as d}from"./clone-BoBF9QHj.js";import{m as t}from"./_basePickBy-DxYI0uEt.js";function v(e){var r={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:u(e),edges:p(e)};return o(e.graph())||(r.value=d(e.graph())),r}function u(e){return t(e.nodes(),function(r){var i=e.node(r),n=e.parent(r),a={v:r};return o(i)||(a.value=i),o(n)||(a.parent=n),a})}function p(e){return t(e.edges(),function(r){var i=e.edge(r),n={v:r.v,w:r.w};return o(r.name)||(n.name=r.name),o(i)||(n.value=i),n})}export{v as w};
