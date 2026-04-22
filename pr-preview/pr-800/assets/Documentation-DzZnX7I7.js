import{j as e}from"./iframe-C5_iV81x.js";import{useMDXComponents as s}from"./index-D-Bg14sb.js";import{M as i}from"./blocks-B9nqxp1B.js";import"./preload-helper-PPVm8Dsz.js";function t(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Charts/Documentation"}),`
`,e.jsx(r.h1,{id:"charts",children:"Charts"}),`
`,e.jsxs(r.p,{children:["These stories document chart examples built with ",e.jsx(r.a,{href:"https://www.highcharts.com/",rel:"nofollow",children:"Highcharts"})," and show how Aquarium's ",e.jsx(r.code,{children:"ChartConfig"})," / ",e.jsx(r.code,{children:"ChartColors"})," defaults can be applied to real-world chart patterns. The ",e.jsx(r.code,{children:"HighChart"})," wrapper and ",e.jsx(r.code,{children:"ChartTooltip"})," helper used here live alongside the stories as reference implementations — they are ",e.jsx(r.strong,{children:"not"})," exported from ",e.jsx(r.code,{children:"@mparticle/aquarium"}),". Consumers install ",e.jsx(r.code,{children:"highcharts"})," themselves and copy/adapt the patterns shown below."]}),`
`,e.jsx(r.h2,{id:"example-stories",children:"Example stories"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"FutureEventsChart"})," — percentile bins as columns, predicted CVR line with lift badges."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"NBAChart"})," — stacked area by action with a secondary CVR line."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"SimilarCustomersChart"})," — background similarity bands + predicted similarity multiplier line."]}),`
`]}),`
`,e.jsx(r.p,{children:"Each story ports the corresponding Cortex chart and replaces the live pipeline response with inline mock data so the visual behavior can be inspected without a server."}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(r.p,{children:["Install ",e.jsx(r.code,{children:"highcharts"})," in your project and reuse Aquarium's shared ",e.jsx(r.code,{children:"ChartConfig"})," defaults when building chart options:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import Highcharts, { type Options } from 'highcharts'
import { ChartConfig } from '@mparticle/aquarium'

const options: Options = {
  ...ChartConfig,
  chart: { type: 'line' },
  series: [{ type: 'line', data: [1, 2, 3] }],
}

Highcharts.chart('my-container', options)
`})}),`
`,e.jsxs(r.p,{children:["Refer to the ",e.jsx(r.a,{href:"https://api.highcharts.com/highcharts/",rel:"nofollow",children:"Highcharts docs"})," for the full options API."]})]})}function l(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{l as default};
