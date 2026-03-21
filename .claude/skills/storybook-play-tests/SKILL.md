---
name: storybook-play-tests
description: Generate Storybook play tests for Aquarium components. Covers user interactions, portal-aware Ant Design queries, and async assertions. Use for add play test, write play test, generate play test, interaction test, story testing, user event testing. Triggers on play test, storybook test, interaction test, story interaction, component test.
group: storybook
---

# Storybook Play Tests — Aquarium

Generate reliable interaction tests for Aquarium component stories using Storybook 10 + React 19 patterns.

## When to Use

- "Add play tests to this story"
- "Write interaction tests for this component"
- Adding or updating `.stories.tsx` files with interaction requirements

**Not for:**

- Standalone Vitest unit tests — Aquarium doesn't use per-component spec files
- Non-interactive stories (visual-only)

## Aquarium Environment

- **Storybook**: 10.2.0
- **Test runner**: `@storybook/test-runner` 0.24.2
- **React**: 19
- **Components**: Wrap Ant Design 6 — many elements render in portals

## Story Structure

```tsx
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, screen, userEvent, within } from 'storybook/test'
import { ComponentName } from 'src/components'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/<Category>/<Name>',
  tags: ['play-test-validation'],
  component: ComponentName,
  args: {
    /* defaults */
  },
}
export default meta

type Story = StoryObj<typeof ComponentName>

export const StoryName: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Arrange — query elements
    const input = canvas.getByRole('combobox')

    // Act — interact
    await userEvent.type(input, 'search term')

    // Assert — verify (use waitFor for async)
    const option = await screen.findByText('Expected Option')
    await expect(option).toBeInTheDocument()
  },
}
```

## Import — CRITICAL

```tsx
// CORRECT — Aquarium uses this path
import { expect, screen, userEvent, within } from 'storybook/test'

// WRONG — do not use
import { expect, userEvent } from '@storybook/test'
```

## Selector Hierarchy

Since Aquarium wraps Ant Design, most elements don't have `data-testid`. Use semantic queries:

1. **`getByRole()`** — primary choice for interactive elements
2. **`getByLabelText()`** — for labelled form inputs
3. **`getByPlaceholderText()`** — for inputs with placeholder
4. **`screen.findByText()`** — for portal-rendered content (dropdowns, menus)
5. **`querySelector('.ant-*')`** — last resort for Ant Design internals with no semantic selector

Never reach for `data-testid` unless you're adding it to a custom Aquarium component that has no semantic query.

## Ant Design Portal Pattern

Ant Design Select, Dropdown, and similar components render their options **outside the component tree** in a document-level portal. Always use `screen` (not `canvas`) for these:

```tsx
// Select / AutoComplete / Dropdown options — use screen, not canvas
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  // Open the dropdown (click the ant-select wrapper)
  const selectEl = canvasElement.querySelector('.ant-select')!
  await userEvent.click(selectEl)

  // Options are in a portal — use screen.findByText
  const option = await screen.findByText('Prod')
  await expect(option).toBeInTheDocument()
  await userEvent.click(option)
},
```

For `AutoComplete`:

```tsx
const input = canvas.getByRole('combobox')
await userEvent.type(input, 'quick')
const option = await screen.findByText('The quick brown fox...')
await userEvent.click(option)
```

## Tags

Add `tags: ['play-test-validation']` to the `meta` object when adding play tests to a story file. Not all existing stories have this yet — add it when you touch a file:

```tsx
const meta: Meta<typeof Select> = {
  title: 'Components/Data Entry/Select',
  tags: ['play-test-validation'],
  component: Select,
  ...
}
```

## Story Title Format

Match the folder structure exactly:

| Component folder  | Story title                                     |
| ----------------- | ----------------------------------------------- |
| `general/`        | `'Components/General/<Name>'`                   |
| `layout/`         | `'Components/Layout/<Name>'`                    |
| `navigation/`     | `'Components/Navigation/<Name>'`                |
| `data-entry/`     | `'Components/Data Entry/<Name>'`                |
| `data-display/`   | `'Components/Data Display/<Name>'`              |
| `feedback/`       | `'Components/Feedback/<Name>'`                  |
| `UXPatterns/`     | `'Components/UX Patterns/<Name>'`               |
| `not-prod-ready/` | `'Components/Not Prod Ready/<Category>/<Name>'` |

## DO NOT Use

- `userEvent.setup()` — not needed in Aquarium stories
- `PointerEventsCheckLevel` — not used here
- `step()` function — Aquarium stories use flat AAA, not step blocks
- `createStorybookForm` decorator — not in this codebase

## Async Assertions

```tsx
// Async DOM changes — use findBy* (includes built-in wait)
const el = await canvas.findByRole('button', { name: 'Submit' })

// State changes after interaction — use waitFor
await waitFor(() => expect(canvas.getByText('Success')).toBeInTheDocument())
```

Import `waitFor` from `storybook/test` if needed.

## Running Tests

```bash
npm run test-storybook           # requires Storybook running on :6006
npm run test-storybook:ci        # builds + serves + runs (CI mode)
```

## Coverage Per Component Type

| Component type       | Minimum coverage                            |
| -------------------- | ------------------------------------------- |
| Simple toggle/button | Default state + click interaction           |
| Input / form field   | Type input + validation feedback            |
| Select / dropdown    | Open + option select + value reflected      |
| Multi-step / wizard  | Each step transition + final submission     |
| Async (data loading) | Loading state + success state + error state |

## Output Format

Deliver the complete updated `.stories.tsx` file with:

- `tags: ['play-test-validation']` added to meta
- All necessary imports from `storybook/test`
- `play` functions using inline AAA pattern (no `step()` blocks)
- Portal-aware queries (`screen` for dropdowns, `canvas` for everything else)
