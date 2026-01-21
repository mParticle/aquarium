import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BdjsESbt.js";import{M as l}from"./blocks-p0hkTQkD.js";import{T as o}from"./Table.stories-CZ88Vk2j.js";import"./iframe-ZAwtOOsv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./style-BLGxefMg.js";import"./WarningFilled-DrGq8YeO.js";import"./AntdIcon-CLyLtIX5.js";import"./Context-D1vOXvMD.js";import"./presets-C7IxLGBr.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./useToken-xerQhSdt.js";import"./client-D5Z-HDZA.js";import"./DatePicker.stories-W1xQ_oLJ.js";import"./SelectWithRangePicker-DAmZcqHO.js";function t(i){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"table-cells-types",children:"Table Cells Types"}),`
`,e.jsx(n.h3,{id:"text",children:"Text"}),`
`,e.jsx(n.p,{children:"Text cells support 1 or 2 lines of text. Single-line text cells are typically used for concise information like names, identifiers, or short labels. Two-line text cells are used when additional context is needed and can include entry type or ID, allowing for more detailed information without consuming excessive space."}),`
`,e.jsx(n.p,{children:"[Insert 2 lines example]"}),`
`,e.jsx(n.h4,{id:"case",children:"Case"}),`
`,e.jsx(n.p,{children:"We use sentence case for everything except for titles, which use title case. Exceptions are allowed based on a specific project requirements."}),`
`,e.jsx(n.h4,{id:"truncating-long-names",children:"Truncating Long names"}),`
`,e.jsx(n.p,{children:"Column with most dynamic and longest copy to typically have flexible. When needed implement cell truncation by ending the text with ellipses and display the full text in a tooltip upon hovering."}),`
`,e.jsx(n.p,{children:"[Insert Example]"}),`
`,e.jsx(n.h4,{id:"cell-alligment",children:"Cell Alligment"}),`
`,e.jsx(n.p,{children:"Text content within table cells is typically left-aligned to enhance readability and allow for easier scanning of information."}),`
`,e.jsx(n.h3,{id:"date-and-time",children:"Date and Time"}),`
`,e.jsx(n.p,{children:"To ensure clarity for both US and EU audiences, all dates and times should follow a standard global format. All times are displayed in UTC."}),`
`,e.jsx(n.h4,{id:"do",children:"Do"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Date: MMM DD, YYYY (e.g., Sep 12, 2024), which removes any ambiguity between US (MM/DD) and EU (DD/MM) formats."}),`
`,e.jsx(n.li,{children:"Time Zone: UTC (displayed once, somewhere visible on the screen)."}),`
`]}),`
`,e.jsx(n.p,{children:`| Event          | Start Date (UTC) | End Date (UTC) |
| -------------- | ---------------- | -------------- |
| Product Launch | Sep 12, 2024     | Sep 14, 2024   |
| Black Friday   | Nov 29, 2024     | Nov 29, 2024   |`}),`
`,e.jsx(n.p,{children:"[Insert link: Displaying a link in a date picker]"}),`
`,e.jsx(n.h4,{id:"dont",children:"Don't"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mix Date Formats"}),": Do not use different formats such as ",e.jsx(n.code,{children:"MM/DD/YYYY"})," (e.g., 09/12/2024, which could be interpreted as either September 12 or December 9) or ",e.jsx(n.code,{children:"DD/MM/YYYY"})," (e.g., 12/09/2024, which can also cause confusion). Stick to the global format ",e.jsx(n.code,{children:"MMM DD, YYYY"})," (e.g., Sep 12, 2024)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Omit the Time Zone"}),': Never omit the time zone when displaying times, especially when it might lead to user confusion. Example: Instead of just showing "14:30", show "14:30 UTC".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Repeat UTC for Each Entry"}),': Avoid repeating "UTC" in every row of a table or list. Example: Instead of labeling every row "Sep 12, 2024 (UTC)", use a clear table header like ',e.jsx(n.code,{children:"Date (UTC)"})," to indicate the time zone for all rows."]}),`
`]}),`
`,e.jsx(n.h3,{id:"status",children:"Status"}),`
`,e.jsx(n.p,{children:"Always use badge components for system status. Reserve tags for actual tags, labels, and environment descriptions (e.g., prod, dev). This ensures clear visual distinction between different information types."}),`
`,e.jsx(n.p,{children:"-> Insert Example"}),`
`,e.jsx(n.h4,{id:"cell-aligment",children:"Cell Aligment"}),`
`,e.jsx(n.p,{children:"Statuses are left-aligned to create a cohesive and organized table layout."}),`
`,e.jsx(n.h3,{id:"links",children:"Links"}),`
`,e.jsx(n.h4,{id:"when-to-use",children:"When to use:"}),`
`,e.jsx(n.h5,{id:"text-links",children:"Text Links:"}),`
`,e.jsx(n.p,{children:"Use the Link component [Insert Link] to navigate to other pages, sections, or external resources."}),`
`,e.jsx(n.h5,{id:"call-to-actions-ctas",children:"Call-to-Actions (CTAs):"}),`
`,e.jsx(n.p,{children:'Links that serve as action triggers, like "Activate", should also follow these styles.'}),`
`,e.jsx(n.h5,{id:"buttons-vs-links",children:"Buttons vs Links:"}),`
`,e.jsx(n.p,{children:'Use links for navigation and "More Actions" menu or a buttons for actions.'}),`
`,e.jsx(n.h1,{id:"more-actions-menu",children:"More Actions Menu"}),`
`,e.jsx(n.h4,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The Actions Menu provides a consolidated interface for row-specific operations, such as delete, duplicate, download, and archive, all grouped within a single menu."}),`
`,e.jsx(n.h4,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Highlight destructive actions in red to ensure emphasis and user caution."}),`
`,e.jsx(n.li,{children:"Omit icons from menu items to maintain a clean, easy-to-read menu."}),`
`,e.jsx(n.li,{children:'Display the "More Actions" menu even when only one option is available.'}),`
`]}),`
`,e.jsx(n.h4,{id:"examples",children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Disabled menu item (Coming Soon)"}),`
`]})]})}function S(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{S as default};
