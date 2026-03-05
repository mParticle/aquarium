- Always read CONTRIBUTING.md before executing any git action

## Tech Stack

- **Ant Design**: v6 (peer dep)
- **React**: 19. No `forwardRef`, `propTypes`, or `defaultProps` on function components.
- **Testing**: Storybook 8 interaction tests (`play` functions with `storybook/test`) — NOT separate Vitest spec files per component.
- **Build**: `npm run build` must pass before committing. Output in `dist/`.

### React 19 — Component Pattern

```tsx
export function MyComp({ ref, ...props }: IProps & { ref?: React.Ref<HTMLDivElement> }) { ... }
```

### New Component Checklist

Use `/add-aquarium-component` to scaffold. Files required:

1. `src/components/<category>/<Name>/<Name>.tsx` — wraps antd, `I<Name>Props extends Ant<Name>Props`
2. `src/components/<category>/<Name>/<Name>.stories.tsx` — Storybook 8 `Meta` + `StoryObj` + `play` function
3. `docs/components/<Category>/<Name>/Documentation.mdx` — MDX doc
4. Add named export to `src/components/index.ts`

## Branch Naming Convention

Branch format: `<type>/<short-description>`

- **type**: `feat/`, `fix/`, or `chore/` (required prefix)
- **description**: kebab-case, concise (e.g., `feat/add-tooltip-component`, `fix/button-hover-state`)
- If working from a Jira ticket, append the ticket ID: `feat/add-tooltip-AQUA-123`

This overrides the `jira-ticket-start` skill's default branch naming. Use this repo's convention instead.

## Jira Integration

- Use `/jira-cli` skill for all Jira operations (view, search, create, update, comment, transition)
- Fallback only: Atlassian MCP (`mcp__claude_ai_Atlassian__*`) cloud ID `1e01021f-8d40-42e1-a0e2-693df8252edd`
- When starting from a Jira ticket, create branches using the convention above

## Designer Workflow (Non-Technical Contributors)

### One command (recommended)

```
/implement-ticket MPD-74
```

This handles everything end-to-end: fetches Jira ticket, creates branch, implements changes, verifies build, commits, pushes, and creates a PR.

### Step-by-step (manual control)

1. `/getting-started` — Understand the repo structure and how to work in it
2. `/start-jira-ticket <TICKET-ID>` — Fetch ticket details and create a branch
3. Make your changes (update docs, icons, styles, etc.)
4. `/commit` — Stage and commit with a proper message
5. `/publish-branch` — Push and create a PR with Jira link

### Other useful commands

- `/jira-cli` — View, search, create, update tickets via natural language
- `/handle-reviews` — Address PR review feedback automatically

## Styling Guidelines

### Use Component Library Components

Always prefer Aquarium components over semantic HTML with inline styles:

- ✅ `<Flex gap="md">` instead of `<div style={{ display: 'flex', gap: '20px' }}>`
- ✅ `<Flex vertical>` instead of `<div style={{ display: 'flex', flexDirection: 'column' }}>`
- ✅ `<Center>` instead of `<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>`

### Use Design Tokens

Always use design tokens from `src/styles/style.ts` or `src/styles/_variables.css` instead of hardcoded values:

- ✅ `style={{ padding: PaddingLg }}` instead of `padding: '24px'`
- ✅ `style={{ color: ColorPrimary }}` instead of `color: '#3600d1'`
- ✅ `style={{ borderRadius: BorderRadiusLg }}` instead of `borderRadius: '8px'`
- ✅ `style={{ margin: MarginMd }}` instead of `margin: '20px'`
- ✅ `<Flex gap={SizeSm}>` instead of `<Flex gap="12px">` — use tokens in JSX props too, not just inline styles

Import tokens: `import { PaddingLg, ColorPrimary, BorderRadiusLg } from 'src/styles/style'`

### Comments

Only add comments for non-obvious logic, business context, or to help other engineers/LLMs understand intent. Do not add comments that restate what the code already says:

- ✅ `// Portal renders outside component tree, so we query document.body instead`
- ❌ `/** Tooltip content displayed on hover */ title: ReactNode`
- ❌ `/** Icon size */ size?: IconSize`

## Adding Icons

### Rokt/Untitled UI Icons

When adding icons from @untitledui/icons, follow the detailed guide at `.cursor/rules/add-untitled-ui-icon.mdc`

Quick checklist:

1. Import with `Rokt` prefix in `src/components/icons/index.ts` (e.g., `PauseCircle as RoktPauseCircle`)
2. Export it in the same file
3. Re-export from `src/components/index.ts`
4. Add to documentation in `docs/Foundations/Icons/Rokt Icons.mdx` for visibility
5. Run `npm run build` to verify

Note: Rokt icons use component references (e.g., `<Icon name={RoktPauseCircle} />`) not strings
