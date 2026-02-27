- start all new branches with either fix/ feat/ chore/
- Always read CONTRIBUTING.md before executing any git action

## Branch Naming Convention

Branch format: `<type>/<short-description>`

- **type**: `feat/`, `fix/`, or `chore/` (required prefix)
- **description**: kebab-case, concise (e.g., `feat/add-tooltip-component`, `fix/button-hover-state`)
- If working from a Jira ticket, append the ticket ID: `feat/add-tooltip-AQUA-123`

This overrides the `jira-ticket-start` skill's default branch naming. Use this repo's convention instead.

## Jira Integration

- **Atlassian MCP cloud ID**: `1e01021f-8d40-42e1-a0e2-693df8252edd` (rokt.atlassian.net)
- Use the Atlassian MCP tools (`mcp__claude_ai_Atlassian__*`) for Jira operations
- When starting from a Jira ticket, create branches using the convention above

## Designer Workflow (Non-Technical Contributors)

Designers and non-technical contributors can use these slash commands to contribute:

1. `/getting-started` — Understand the repo structure and how to work in it
2. `/start-jira-ticket <TICKET-ID>` — Fetch ticket details and create a branch
3. Make your changes (update docs, icons, styles, etc.)
4. `/commit` — Stage and commit with a proper message
5. `/publish-branch` — Push and create a PR with Jira link

For Jira operations without git:

- `/jira-cli` — View, search, create, update tickets via natural language

## Styling Guidelines

### Use Component Library Components

Always prefer Aquarium components over semantic HTML with inline styles:

- ✅ `<Flex gap="md">` instead of `<div style={{ display: 'flex', gap: '20px' }}>`
- ✅ `<Space direction="vertical">` instead of `<div style={{ display: 'flex', flexDirection: 'column' }}>`
- ✅ `<Center>` instead of `<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>`

### Use Design Tokens

Always use design tokens from `src/styles/style.ts` or `src/styles/_variables.css` instead of hardcoded values:

- ✅ `style={{ padding: PaddingLg }}` instead of `padding: '24px'`
- ✅ `style={{ color: ColorPrimary }}` instead of `color: '#3600d1'`
- ✅ `style={{ borderRadius: BorderRadiusLg }}` instead of `borderRadius: '8px'`
- ✅ `style={{ margin: MarginMd }}` instead of `margin: '20px'`

Import tokens: `import { PaddingLg, ColorPrimary, BorderRadiusLg } from 'src/styles/style'`

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
