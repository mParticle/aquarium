- Always read CONTRIBUTING.md before executing any git action

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
