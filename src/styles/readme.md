[_variables.css](https://github.com/mParticle/aquarium/blob/main/src/styles/_variables.css) is a generated file, created from the design tokens in [GlobalTokens.json](https://github.com/mParticle/aquarium/blob/main/design/GlobalToken.json).

The script in [GetGlobalToken.tsx](https://github.com/mParticle/aquarium/blob/main/src/utils/GetGlobalToken.ts) is used to create the content of Global Tokens.
Open the story `GetGlobalToken` to retrieve the latest global design token.
Then paste that into [GlobalTokens.json](https://github.com/mParticle/aquarium/blob/main/design/GlobalToken.json)
These will then be converted into css variables on push, and committed via the [github action](https://github.com/mParticle/aquarium/blob/main/.github/workflows/tokens-to-css.yml)