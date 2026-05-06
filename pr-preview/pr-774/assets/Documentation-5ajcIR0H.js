import{j as n}from"./iframe-TPzgAJbn.js";import{useMDXComponents as s}from"./index-BKqCT_3N.js";import{M as i}from"./blocks-DTqzkwpG.js";import"./preload-helper-PPVm8Dsz.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Charts/Documentation"}),`
`,n.jsx(e.h1,{id:"charts",children:"Charts"}),`
`,n.jsx(e.p,{children:"A few examples of different Highcharts chart types used by mParticle Predictions."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Column Chart"})," — columns with an overlaid line and optional selection plotBand."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Stacked Area Chart"})," — stacked area series with an overlaid line on a secondary axis."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Area Chart"})," — filled background bands with an overlaid line and optional selection plotBand."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Highcharts is not exported from Aquarium — consumers install ",n.jsx(e.code,{children:"highcharts"})," themselves and can reuse Aquarium's shared ",n.jsx(e.code,{children:"ChartConfig"})," defaults."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Highcharts, { type Options } from 'highcharts'
import { ChartConfig } from '@mparticle/aquarium'

const options: Options = {
  ...ChartConfig,
  chart: { type: 'line' },
  series: [{ type: 'line', data: [1, 2, 3] }],
}

Highcharts.chart('my-container', options)
`})})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{h as default};
