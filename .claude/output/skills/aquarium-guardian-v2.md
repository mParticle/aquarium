---
name: aquarium-guardian
description: Proactively enforces correct Aquarium usage in consuming apps. Catches direct antd imports, raw HTML instead of Aquarium layout components, style overrides, icon library misuse, and component duplication. Flags violations for maintainer review. Triggers on aquarium, antd import, component library, design system, Flex, Space, Button, Modal, Table, Form, Icon, mparticle, style override, div flex, ant-design.
---

# Aquarium Guardian

Runs proactively while writing or editing code in any app that consumes `@mparticle/aquarium`. Catches violations in real time — before they reach a PR.

## Core Principles

**Aquarium wraps Ant Design 6**: Every Aquarium component applies a `ConfigProvider` for consistent theming. Importing from `antd` directly bypasses this and creates visual inconsistencies.
**Components over raw HTML**: Aquarium provides layout and UI primitives. Recreating them with `<div>` and inline styles defeats the purpose.
**Tokens over hardcoded values**: All colors, spacing, and sizing should reference Aquarium design tokens so themes stay consistent.

## Violation Severity Levels

**FIX**: Stop and correct immediately. Explain what was wrong and why.
**WARN**: Pause and ask the user before proceeding. Present options.
**FLAG**: Note silently. Surface as a summary at commit/PR time.

## Execution

### Step 1: Detect violations while writing code

Scan every import statement, JSX element, and style declaration for violations as you write or edit files.

### Step 2: Apply the correct severity response

**FIX violations** — correct immediately:

- Direct `antd` imports when `@mparticle/aquarium` is in dependencies
- Direct `@ant-design/icons` or `react-icons` imports
- Raw HTML replicating Aquarium components (see substitution table)
- Custom components duplicating existing Aquarium functionality
- Deprecated Ant Design 6 APIs (see Ant6 migration table)
- Deprecated React 19 patterns (see React 19 migration table)

**WARN violations** — ask before proceeding:

- `style` prop overriding Aquarium component visual properties (background, color, border, font)
- `className` adding visual overrides (not layout/positioning)
- CSS files targeting `.ant-` class selectors
- Hardcoded color/spacing/font values instead of design tokens

**Allowed without warning**:

- `style={{ width, height, maxWidth, minWidth, maxHeight, minHeight }}` — sizing
- `style={{ margin*, position, top, left, right, bottom, zIndex }}` — layout positioning
- `className` for layout/positioning only

**FLAG violations** — collect for PR summary:

- Any `.ant-` class selectors in CSS files
- 3+ WARN violations in a single PR
- `// aquarium-override` comments being added
- Aquarium version changes in package.json

### Step 3: Handle WARN confirmations

When user confirms a style override, add a tracking comment:

```tsx
// aquarium-override: <user's reason>
<Button style={{ backgroundColor: '#custom' }}>
```

### Step 4: Surface summary at commit/PR time

```
## Aquarium Violation Summary

### Violations found: N

1. **FIX** `path/file.tsx:12` — Direct antd import: `import { Table } from 'antd'`
2. **WARN** `path/file.tsx:45` — Style override on `<Card>`: custom backgroundColor
3. **FLAG** `path/file.css:8` — CSS targeting `.ant-card-body`

### Recommendation
→ Add an Aquarium maintainer as a reviewer for Aquarium compliance.
```

## Common Patterns

**Direct antd import**:

```tsx
// FIX
import { Button } from 'antd'
import type { ButtonProps } from 'antd'

// CORRECT
import { Button } from '@mparticle/aquarium'
import type { IButtonProps } from '@mparticle/aquarium'
```

**Raw HTML instead of Aquarium components**:

| Instead of                                                   | Use                                           |
| ------------------------------------------------------------ | --------------------------------------------- |
| `<div style={{ display: 'flex' }}>`                          | `<Flex>`                                      |
| `<div style={{ display: 'flex', flexDirection: 'column' }}>` | `<Flex vertical>`                             |
| `<div>` with spacing styles                                  | `<Space>` or `<Flex>` with `gap`              |
| `<h1>`, `<h2>`, `<p>`, `<span>` with styles                  | `<Typography.Title>`, `<Typography.Text>`     |
| `<a href>` styled as button                                  | `<Button type="link">` or `<Typography.Link>` |
| `<hr>`                                                       | `<Divider>`                                   |
| `<table>`                                                    | `<Table>`                                     |
| Raw `<input>`, `<select>`, `<textarea>`                      | `<Input>`, `<Select>`, `<Input.TextArea>`     |
| Custom spinner                                               | `<Spin>`                                      |
| Custom alert/banner                                          | `<Alert>`                                     |
| Custom modal/dialog                                          | `<Modal>`                                     |
| Custom tooltip                                               | `<Tooltip>`                                   |
| Custom empty state                                           | `<Empty>` or `<EmptyState>`                   |
| `window.confirm()`                                           | `Modal.confirm()` or `<Popconfirm>`           |

**Exception**: Plain `<div>` used as a wrapper for positioning, refs, portals, or test-id containers is fine.

**Icon imports**:

```tsx
// FIX
import { FiSearch } from 'react-icons/fi'
import { SearchOutlined } from '@ant-design/icons'

// CORRECT — string-based mParticle SVG icons
import { Icon } from '@mparticle/aquarium'
;<Icon name="search" size="sm" />

// CORRECT — Rokt/Untitled UI component icons
import { Icon, RoktPauseCircle } from '@mparticle/aquarium'
;<Icon name={RoktPauseCircle} size="sm" />
```

**Design tokens**:

```tsx
// WARN — hardcoded values
style={{ color: '#6E56CF', padding: '24px' }}

// FIX — wrong import path
import { ColorPrimary } from '@mparticle/aquarium'

// CORRECT — import from dist/style
import { ColorPrimary, PaddingLg } from '@mparticle/aquarium/dist/style'
style={{ color: ColorPrimary, padding: PaddingLg }}
```

**Token-to-property mapping**:

| CSS property               | Token prefix    | Example                                         |
| -------------------------- | --------------- | ----------------------------------------------- |
| `padding`                  | `Padding*`      | `PaddingXs`, `PaddingSm`, `PaddingLg`           |
| `margin`                   | `Margin*`       | `MarginXs`, `MarginSm`, `MarginLg`              |
| `gap`, `width`, `height`   | `Size*`         | `SizeSm`, `SizeMd`, `SizeXl`                    |
| `color`, `backgroundColor` | `Color*`        | `ColorPrimary`, `ColorText`, `ColorBgContainer` |
| `fontSize`                 | `FontSize*`     | `FontSize`, `FontSizeSM`, `FontSizeLG`          |
| `borderRadius`             | `BorderRadius*` | `BorderRadiusSm`, `BorderRadiusLG`              |

**Note**: `MpBrand*` tokens are deprecated. Use semantic `Color*` tokens instead.

## Ant Design 6 Migration — FIX Violations

Aquarium 2 requires Ant Design 6. These v5 APIs are removed/renamed:

| Old (antd v5)                          | New (antd v6)                                                   | Severity |
| -------------------------------------- | --------------------------------------------------------------- | -------- |
| `Carousel dotPosition`                 | `Carousel dotPlacement` — values `left`/`right` → `start`/`end` | FIX      |
| `Steps labelPlacement`                 | `Steps titlePlacement`                                          | FIX      |
| `<Dropdown.Button>`                    | `<Space.Compact>` + `<Button>` + `<Dropdown>`                   | FIX      |
| `<FloatButton.BackTop>`                | Removed — implement with `FloatButton` + scroll listener        | FIX      |
| `Space direction`                      | `Space orientation`                                             | FIX      |
| `Space split`                          | `Space separator`                                               | FIX      |
| `Divider type`                         | `Divider orientation`                                           | FIX      |
| `Table.pagination.position`            | `Table.pagination.placement`                                    | FIX      |
| `Progress gapPosition`                 | `Progress gapPlacement`                                         | FIX      |
| `Timeline.items.position`              | `Timeline.items.placement`                                      | FIX      |
| `Collapse expandIconPosition`          | `Collapse expandIconPlacement`                                  | FIX      |
| `Button iconPosition`                  | `Button iconPlacement`                                          | FIX      |
| `Table.Column fixed="left"/"right"`    | `fixed="start"/"end"`                                           | FIX      |
| `<Modal visible>` / `<Drawer visible>` | `<Modal open>` / `<Drawer open>`                                | FIX      |

**Dropdown.Button migration**:

```tsx
// FIX — Dropdown.Button removed in antd v6
;<Dropdown.Button menu={menuProps}>Click me</Dropdown.Button>

// CORRECT
import { Space } from '@mparticle/aquarium'
;<Space.Compact>
  <Button>Click me</Button>
  <Dropdown menu={menuProps}>
    <Button icon={<Icon name={RoktChevronDown} />} />
  </Dropdown>
</Space.Compact>
```

## React 19 Migration — FIX Violations

Aquarium 2 uses React 19. These patterns are deprecated/removed:

| Pattern                                                 | Fix                             | Severity |
| ------------------------------------------------------- | ------------------------------- | -------- |
| `React.forwardRef(Component)`                           | Accept `ref` as a regular prop  | FIX      |
| `Component.propTypes = {...}`                           | Use TypeScript interface        | FIX      |
| `Component.defaultProps = {...}` on function components | Use default parameter values    | FIX      |
| `import { useFormState } from 'react-dom'`              | `useActionState` from `'react'` | FIX      |

**forwardRef migration**:

```tsx
// FIX — forwardRef deprecated in React 19
const MyComponent = React.forwardRef<HTMLDivElement, IMyProps>((props, ref) => {
  return <div ref={ref} {...props} />
})

// CORRECT — ref is a plain prop in React 19
function MyComponent({ ref, ...props }: IMyProps & { ref?: React.Ref<HTMLDivElement> }) {
  return <div ref={ref} {...props} />
}
```

## Component API Gotchas

**Modal/Drawer**: Use `open` prop, not `visible` (removed in antd v6):

```tsx
// FIX
<Modal visible={isOpen}>

// CORRECT
<Modal open={isOpen}>
```

**Button loading**: When `loading={true}`, also set `disabled={true}`:

```tsx
// WARN — allows clicks while loading
<Button loading={isSubmitting}>Submit</Button>

// CORRECT
<Button loading={isSubmitting} disabled={isSubmitting}>Submit</Button>
```

**Typography**: Never use raw `<span>`, `<p>`, `<h1>`–`<h6>` for text display. Use `Typography.Text`, `Typography.Title`, `Typography.Paragraph`.

**Component duplication**:

```tsx
// FIX — Aquarium already has this
const ConfirmDialog = ({ title, onOk, onCancel }) => <div className="overlay">...</div>

// CORRECT
Modal.confirm({ title, onOk, onCancel })
```

## Available Aquarium Components

**General**: Button, FloatButton, Icon, Typography (Title, Text, Paragraph, Link)
**Layout**: Flex, Space, Divider, Row, Col, Layout (Header, Content, Footer, Sider)
**Navigation**: Menu, Breadcrumb, Dropdown, Pagination, Steps, Tabs, GlobalNavigation
**Data Entry**: Form, Input, InputNumber, Select, TreeSelect, Checkbox, Radio, Switch, Slider, DatePicker, TimePicker, Transfer, Upload, AutoComplete, ColorPicker, Rate, Cascader
**Data Display**: Table, Card, Collapse, List, Descriptions, Popover, Tooltip, Tag, Badge, Avatar, Calendar, Carousel, Image, Statistic, Timeline, Tree, Segmented, QRCode
**Feedback**: Alert, Modal, Drawer, Notification, Message, Popconfirm, Progress, Result, Skeleton, Spin, Empty, Watermark
**UX Patterns**: MoreActionsButton, StatisticsCard, NavigationBar, EmptyState, StatusIcon

**Component not in Aquarium?** Suggest requesting it be added to Aquarium rather than importing from `antd` directly.

**Not sure how a component works?** Use `/aquarium-docs` to look up props, usage examples, and gotchas.

## Success Criteria

- [ ] No direct `antd` or `@ant-design/icons` imports in changed files
- [ ] No raw HTML replicating Aquarium components
- [ ] All style overrides have `// aquarium-override: <reason>` comments
- [ ] Hardcoded values replaced with design tokens
- [ ] No deprecated antd v5 APIs
- [ ] No deprecated React 19 patterns (`forwardRef`, `propTypes`, `defaultProps`)
- [ ] Violation summary presented before commit/PR

## Self-Improvement

**Update triggers**:

- New components added to Aquarium — update Available Components list
- Aquarium version bump in consuming app — re-check migration tables
- New common anti-patterns discovered during PR reviews — add to FIX list
