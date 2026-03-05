---
name: add-aquarium-component
description: Scaffold a new Aquarium component with all required files following Aquarium 2 conventions (Ant Design 6, React 19, Storybook 10). Generates the component, Storybook story with interaction tests, MDX docs stub, and wires up the export chain. Triggers on add component, new component, scaffold component, create component, aquarium component.
group: aquarium
---

# Add Aquarium Component

Scaffold a production-ready Aquarium component following all Aquarium 2 conventions.

## What This Skill Does

Creates all required files and wires them into the export chain:

1. `src/components/<category>/<Name>/<Name>.tsx` — wraps antd, custom props interface
2. `src/components/<category>/<Name>/<Name>.stories.tsx` — Storybook 10 with interaction tests
3. `docs/components/<Category>/<Name>/Documentation.mdx` — MDX doc stub
4. Updates `src/components/index.ts` — adds named export

## Conversation Flow

### Step 1: Gather requirements

Ask the user:

- Component name (PascalCase, e.g. `Tooltip`, `StatusCard`)
- Category: `general` | `layout` | `navigation` | `data-entry` | `data-display` | `feedback` | `UXPatterns` | `not-prod-ready`
- Which antd component it wraps (if any) — e.g. "wraps `Tooltip` from `antd`"
- Key custom props to add beyond antd's interface

### Step 2: Check for conflicts

Before generating:

- Search `src/components/index.ts` for an existing export with that name
- Check if the category folder already has a matching subfolder
- If conflict found, surface it and ask how to proceed

### Step 3: Generate files

#### Component file (`<Name>.tsx`)

```tsx
import React from 'react'
import { <AntName> as Ant<Name>, type <AntName>Props as Ant<Name>Props } from 'antd'

export interface I<Name>Props extends Ant<Name>Props {
  // custom props here
}

export const <Name> = (props: I<Name>Props) => {
  return <Ant<Name> {...props} />
}
```

**React 19 rules (enforce strictly):**

- NO `React.forwardRef` — accept `ref` as a plain prop: `({ ref, ...props }: I<Name>Props & { ref?: React.Ref<HTMLElement> })`
- NO `propTypes` — TypeScript interfaces only
- NO `defaultProps` — use default parameter values in destructuring
- Import React only when JSX is used (React 19 doesn't require it but Aquarium style includes it)

**Ant Design 6 rules:**

- Wrap with `ConfigProvider` only if the component requires theme token overrides (check existing components)
- Use `open` not `visible` for overlay/modal components
- `dotPlacement` not `dotPosition` (Carousel)
- `titlePlacement` not `labelPlacement` (Steps)
- No `Dropdown.Button` — use `Space.Compact` + `Button` + `Dropdown`
- No `FloatButton.BackTop` — use `FloatButton` with scroll-to-top logic

**Props interface rules:**

- Always `I` prefix: `IButtonProps`, `IModalProps`, `ITooltipProps`
- Extend the antd props type: `extends AntTooltipProps`
- Export both the component AND the interface

#### Story file (`<Name>.stories.tsx`)

```tsx
import { <Name> } from 'src/components/<category>/<Name>/<Name>'
import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof <Name>> = {
  title: 'Components/<StorybookCategory>/<Name>',
  component: <Name>,
  args: {
    // sensible defaults matching antd defaults
  },
  argTypes: {
    // control types for interactive props
  },
}
export default meta

type Story = StoryObj<typeof <Name>>

export const Default: Story = {}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    // use @storybook/test utilities for interaction tests
    // import { within, userEvent, expect } from 'storybook/test'
  },
}
```

**Storybook 10 rules:**

- Import from `storybook/test` (not `@storybook/testing-library`)
- Use `userEvent` from `storybook/test`
- Title format: `'Components/<Category>/<Name>'` matching the folder structure
- Always include a `Default` story and at least one story with a `play` function for key interactions

#### Storybook category → title mapping:

| Folder           | Storybook title segment |
| ---------------- | ----------------------- |
| `general`        | `General`               |
| `layout`         | `Layout`                |
| `navigation`     | `Navigation`            |
| `data-entry`     | `Data Entry`            |
| `data-display`   | `Data Display`          |
| `feedback`       | `Feedback`              |
| `UXPatterns`     | `UX Patterns`           |
| `not-prod-ready` | `Not Prod Ready`        |

#### MDX docs stub

```mdx
import { Meta, Canvas, Controls } from '@storybook/blocks'
import * as <Name>Stories from './<Name>.stories'

<Meta of={<Name>Stories} />

# <Name>

<one-line description of what the component does>

## Usage

<Canvas of={<Name>Stories.Default} />
<Controls />

## When to Use

- <use case 1>
- <use case 2>

## Props

<Controls />
```

Place at: `docs/components/<TitleCase Category>/<Name>/Documentation.mdx`

#### Export chain update

Add to `src/components/index.ts` (maintain alphabetical order within section):

```ts
export { <Name>, type I<Name>Props } from './<category>/<Name>/<Name>'
```

### Step 4: Verify

Run after generating:

```
npm run build
```

Flag any TypeScript errors. Do not skip — type safety is non-negotiable.

## Success Criteria

- [ ] Component renders without errors in Storybook
- [ ] No `antd` types leaked into the public API without explicit re-export
- [ ] `npm run build` passes with zero errors
- [ ] At least one `play` function story tests a user interaction
- [ ] Export visible in `src/components/index.ts`
- [ ] No `forwardRef`, `propTypes`, or `defaultProps` on function components
- [ ] All hardcoded values use tokens from `src/styles/style`

## Design Token Reference

Import inside the Aquarium repo:

```ts
import { ColorPrimary, PaddingLg, MarginMd, SizeSm, BorderRadiusLg } from 'src/styles/style'
```

| CSS property               | Token prefix    | Examples                                        |
| -------------------------- | --------------- | ----------------------------------------------- |
| `padding`                  | `Padding*`      | `PaddingXs`, `PaddingSm`, `PaddingLg`           |
| `margin`                   | `Margin*`       | `MarginXs`, `MarginSm`, `MarginLg`              |
| `gap`, `width`, `height`   | `Size*`         | `SizeSm`, `SizeMd`, `SizeXl`                    |
| `color`, `backgroundColor` | `Color*`        | `ColorPrimary`, `ColorText`, `ColorBgContainer` |
| `fontSize`                 | `FontSize*`     | `FontSize`, `FontSizeSM`, `FontSizeLG`          |
| `borderRadius`             | `BorderRadius*` | `BorderRadiusSm`, `BorderRadiusLG`              |
