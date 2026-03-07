---
name: aquarium-docs
description: Look up Aquarium and Ant Design component APIs, props, and usage examples. Use when someone asks how a component works, what props it accepts, or needs a usage example. Triggers on aquarium docs, component API, how does component work, what props, usage example, Flex props, Table columns, Modal confirm, Form validation, Select options, mparticle aquarium, antd component help.
---

# Aquarium Docs Lookup

On-demand component API reference. Fetches from Aquarium Storybook and Ant Design docs to answer "how does this component work?" and "which component should I use?"

## Core Principles

**Aquarium Storybook is primary**: Shows Aquarium-specific props, customizations, and visual demos. Check here first.
**Ant Design docs are secondary**: Complete API reference for the underlying component. Use when Storybook lacks detail.
**Always import from Aquarium**: Even when referencing Ant Design docs, all code examples must use `@mparticle/aquarium` imports — never `antd` directly.
**Aquarium 2 uses antd v6 + React 19**: Be aware of breaking changes from v5 (see migration section).

## Execution

### Step 1: Identify the component and category

| Category         | Components                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **General**      | Button, FloatButton, Icon, Typography                                                                                                                                        |
| **Layout**       | Flex, Space, Divider, Row, Col, Layout, Splitter                                                                                                                             |
| **Navigation**   | Menu, Breadcrumb, Dropdown, Pagination, Steps, Tabs, GlobalNavigation                                                                                                        |
| **Data Entry**   | Form, Input, InputNumber, Select, TreeSelect, Checkbox, Radio, Switch, Slider, DatePicker, TimePicker, Transfer, Upload, AutoComplete, ColorPicker, Rate, Cascader, Mentions |
| **Data Display** | Table, Card, Collapse, List, Descriptions, Popover, Tooltip, Tag, Badge, Avatar, Calendar, Carousel, Image, Statistic, Timeline, Tree, Segmented, QRCode, Tour               |
| **Feedback**     | Alert, Modal, Drawer, Notification, Message, Popconfirm, Progress, Result, Skeleton, Spin, Empty, Watermark                                                                  |
| **UX Patterns**  | MoreActionsButton, StatisticsCard, NavigationBar, EmptyState, StatusIcon                                                                                                     |

### Step 2: Fetch documentation

**Aquarium Storybook** (primary):

```
https://mparticle.github.io/aquarium/?path=/docs/components-<category>-<component>--documentation
```

URL examples:

- Button → `components-general-button--documentation`
- Table → `components-data-display-table--documentation`
- Modal → `components-feedback-modal--documentation`
- Select → `components-data-entry-select--documentation`
- Flex → `components-layout-flex--documentation`

**Ant Design 6 docs** (secondary):

```
https://ant.design/components/<component-lowercase>
```

**Preferred**: Use `WebFetch` to pull from both sources. Prioritize Aquarium-specific information.

**Fallback** (if WebFetch unavailable): Use Ant Design knowledge but clearly state it may not reflect Aquarium-specific customizations. Always include the Storybook and Ant Design URLs for manual verification.

### Step 3: Present the answer

```
## <ComponentName>

<One sentence description>

### Key Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|

### Aquarium-Specific
- <Custom props or behavior differences from base Ant Design>

### Example
\`\`\`tsx
import { ComponentName } from '@mparticle/aquarium'

<ComponentName prop="value">
  ...
</ComponentName>
\`\`\`

### Gotchas
- <Common mistakes>

### Docs
- Aquarium: <storybook-url>
- Ant Design: <antd-url>
```

## Aquarium 2 Breaking Changes (antd v5 → v6)

When providing examples, always use the current API. These v5 patterns are removed:

| Old (v5)                            | New (v6)                                               | Component     |
| ----------------------------------- | ------------------------------------------------------ | ------------- |
| `dotPosition`                       | `dotPlacement` (values `left`/`right` → `start`/`end`) | Carousel      |
| `labelPlacement`                    | `titlePlacement`                                       | Steps         |
| `<Dropdown.Button>`                 | `<Space.Compact>` + `<Button>` + `<Dropdown>`          | Dropdown      |
| `<FloatButton.BackTop>`             | Removed — use `FloatButton` with scroll listener       | FloatButton   |
| `Space direction`                   | `Space orientation`                                    | Space         |
| `Space split`                       | `Space separator`                                      | Space         |
| `Divider type`                      | `Divider orientation`                                  | Divider       |
| `Modal/Drawer visible`              | `Modal/Drawer open`                                    | Modal, Drawer |
| `Table.Column fixed="left"/"right"` | `fixed="start"/"end"`                                  | Table         |
| `Button iconPosition`               | `Button iconPlacement`                                 | Button        |

## React 19 Patterns

All Aquarium code and example code should follow React 19:

- No `React.forwardRef` — accept `ref` as a plain prop
- No `propTypes` — use TypeScript interfaces
- No `defaultProps` on function components — use default parameter values
- `useActionState` (not deprecated `useFormState`)

## Common Patterns

**"Which component should I use?"** — map UI patterns to components:

| UI pattern                  | Component                                                       |
| --------------------------- | --------------------------------------------------------------- |
| Confirmation before action  | `Popconfirm` (inline) or `Modal.confirm()` (dialog)             |
| Form with validation        | `Form` + `Form.Item` with `rules`                               |
| Searchable dropdown         | `Select` with `showSearch`                                      |
| Multi-select tags           | `Select` with `mode="multiple"`                                 |
| Data table with sort/filter | `Table` with `columns` config                                   |
| Expandable sections         | `Collapse`                                                      |
| Step-by-step wizard         | `Steps` + conditional content                                   |
| Toast notification          | `message.success()` (brief) or `notification.open()` (detailed) |
| Inline editable text        | `Typography.Paragraph` with `editable`                          |
| Loading skeleton            | `Skeleton` (layout) or `Spin` (action)                          |
| Empty state                 | `Empty` or Aquarium's `EmptyState`                              |
| Side panel                  | `Drawer`                                                        |
| Overflow action menu        | `MoreActionsButton` (Aquarium UX Pattern)                       |
| Status indicator            | `Badge` or `StatusIcon` (Aquarium UX Pattern)                   |
| Key-value display           | `Descriptions`                                                  |
| Split layout panes          | `Splitter` (new in antd v6)                                     |
| Timeline / activity log     | `Timeline`                                                      |
| Tree hierarchy              | `Tree` or `TreeSelect`                                          |
| Button + dropdown combo     | `Space.Compact` + `Button` + `Dropdown` (not `Dropdown.Button`) |

**Component not in Aquarium?**: Say so explicitly. Suggest requesting it be added rather than importing from `antd` directly.

**Aquarium props naming**: Props interfaces use `I` prefix: `IButtonProps`, `IModalProps`, `ITableProps`. Types are exported alongside components.

**Token import** (for consuming apps):

```tsx
import { ColorPrimary, PaddingLg, MarginMd } from '@mparticle/aquarium/dist/style'
```

**Compound components**: Always document sub-components:

- `Form.Item`, `Form.List`, `Form.useForm`, `Form.useWatch`
- `Input.Search`, `Input.Password`, `Input.TextArea`, `Input.OTP`
- `Modal.confirm`, `Modal.info`, `Modal.success`, `Modal.warning`
- `Typography.Title`, `Typography.Text`, `Typography.Paragraph`, `Typography.Link`
- `Card.Meta`, `Card.Grid`
- `Space.Compact` (replaces `Dropdown.Button`)
- `Splitter.Panel`

## Success Criteria

- [ ] Correct component identified for the user's use case
- [ ] Props table includes commonly used props with types
- [ ] Code example uses `@mparticle/aquarium` imports (never `antd`)
- [ ] antd v6 API used (not deprecated v5 patterns)
- [ ] Aquarium-specific differences from Ant Design highlighted
- [ ] Links to both Storybook and Ant Design 6 docs provided

## Self-Improvement

**Update triggers**:

- New components added to Aquarium — update category table
- Aquarium version upgrade — review migration tables
- New compound components discovered — add to compound components list
- Common "which component" questions not in the pattern table — add them
