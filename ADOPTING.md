# Adopting Aquarium

A step-by-step guide for Rokt teams adopting Aquarium as their UI component library.

## Why Aquarium?

Aquarium is Rokt's shared React component library built on [Ant Design](https://ant.design/). It provides:

- **76+ production-ready components** — from buttons to complex data tables
- **Rokt design tokens** — consistent colors, spacing, typography across products
- **Storybook documentation** — live examples and API references at [mparticle.github.io/aquarium](https://mparticle.github.io/aquarium/)
- **AI-native development** — Claude Code skills, LLM setup prompts, and Figma-to-code workflows built in

Using Aquarium instead of raw Ant Design or ad hoc components means fixes propagate everywhere, onboarding is faster, and AI tools generate Rokt-standard code instead of generic patterns.

## Step 1: Install

```bash
npm install @mparticle/aquarium antd@6 dayjs@1
```

Add the CSS reset in your app entry point:

```typescript
import 'antd/dist/reset.css'
```

## Step 2: Set Up AI Tooling

Aquarium is designed for AI-assisted development. Set up your tools to default to Aquarium components instead of raw HTML or generic libraries.

### Claude Code

If your project uses Claude Code, add this to your project's `CLAUDE.md`:

```markdown
## UI Components

Use `@mparticle/aquarium` for all UI components. Do NOT import directly from `antd`.

- Components: `import { Button, Table, Select } from '@mparticle/aquarium'`
- Design tokens: `import { PaddingLg, ColorPrimary } from '@mparticle/aquarium/dist/style'`
- Icons: `import { RoktPauseCircle } from '@mparticle/aquarium'` for Rokt icons
- Layout: Use `<Flex>`, `<Center>`, `<Space>` instead of `<div>` with inline styles
- Reference: https://mparticle.github.io/aquarium/
```

### Cursor

Add the same guidance to your `.cursor/rules/` directory so Cursor AI generates Aquarium imports.

### LLM Setup Prompt

For any AI tool, paste the contents of [LLM_SETUP_PROMPT.md](LLM_SETUP_PROMPT.md) into your project context. This teaches the model about Aquarium's API surface and conventions.

## Step 3: Migrate from Raw Ant Design

If your project already imports from `antd` directly, migrate incrementally:

```diff
- import { Button, Table } from 'antd'
+ import { Button, Table } from '@mparticle/aquarium'
```

Most Aquarium components are thin wrappers around Ant Design with Rokt theming applied, so the API is the same. Check [Storybook](https://mparticle.github.io/aquarium/) for any Aquarium-specific props.

### Common replacements

| Instead of                                                    | Use                                      |
| ------------------------------------------------------------- | ---------------------------------------- |
| `<div style={{ display: 'flex' }}>`                           | `<Flex>`                                 |
| `<div style={{ display: 'flex', justifyContent: 'center' }}>` | `<Center>`                               |
| `padding: '24px'`                                             | `PaddingLg` from design tokens           |
| `color: '#3600d1'`                                            | `ColorPrimary` from design tokens        |
| Custom modal wrapper                                          | `<DeleteConfirmModal>` or `<ErrorModal>` |

## Step 4: Request Missing Components

If Aquarium doesn't have a component you need:

1. **Check first** — browse [Storybook](https://mparticle.github.io/aquarium/) and [Ant Design docs](https://ant.design/components/overview/) to see if an existing component can be configured for your use case
2. **Open a request** — [Component Request](https://github.com/mParticle/aquarium/issues/new?template=component-request.yml) on GitHub Issues
3. **Include context** — Figma link, use case, and which product needs it

Requests are triaged automatically and prioritized by impact across teams.

## Step 5: Stay Connected

- **GChat**: [Aquarium space](https://chat.google.com/room/AAQADRm8Au8?cls=7) for weekly updates
- **GitHub Issues**: [Request components](https://github.com/mParticle/aquarium/issues/new/choose), report bugs, ask questions
- **Storybook**: [Browse docs](https://mparticle.github.io/aquarium/) for API references and live examples

## FAQ

### Can I still use Ant Design components directly?

Yes, `antd` is a peer dependency. But prefer Aquarium's wrapped version when available — it includes Rokt theming and design tokens. If you need a component Aquarium doesn't wrap yet, use `antd` directly and [open a request](https://github.com/mParticle/aquarium/issues/new?template=component-request.yml) so it can be added.

### How do I contribute a component back?

See [CONTRIBUTING.md](CONTRIBUTING.md). The fastest path is:

```
/implement-ticket <JIRA-ID>
```

This uses Claude Code to handle branching, implementation, testing, and PR creation end-to-end.

### What if I need a component urgently?

Mark your [Component Request](https://github.com/mParticle/aquarium/issues/new?template=component-request.yml) as "Blocking — can't ship without it" and note your timeline. Adoption blockers get priority triage.
