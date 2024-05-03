[\_variables.css](https://github.com/mParticle/aquarium/blob/main/src/styles/_variables.css) is a generated file, created from the design tokens in [GlobalTokens.json](https://github.com/mParticle/aquarium/blob/main/design/GlobalToken.json)

When design updates the source-of-truth variables in figma, run the `Theme Buddy for Ant Design` plugin, which exports the Config Provider diff between our styles and the ant default

The plugin should be run with settings - version 5.15, Use Ant Design Algorithm all Unchecked

Paste that into [LightTheme.ts](https://github.com/mParticle/aquarium/blob/main/design/LightTheme.ts) to update our existing theme

Then open the story `GetGlobalToken` to retrieve the latest global design token. The script in [GetGlobalToken.tsx](https://github.com/mParticle/aquarium/blob/main/src/utils/GetGlobalToken.ts) is used to create the content of `GlobalTokens.json`

Then paste that into [GlobalTokens.json](https://github.com/mParticle/aquarium/blob/main/design/GlobalToken.json)

These will then be converted into css variables on push, and committed via the [github action](https://github.com/mParticle/aquarium/blob/main/.github/workflows/tokens-to-css.yml)
If you need these new tokens immediately for local development, run `npm run tokens-to-css`.