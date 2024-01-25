`_variables.css` is a generated file, created from the design tokens in [GlobalTokens.json](https://github.com/mParticle/aquarium/blob/main/design/GlobalToken.json).

Use the script in [GetGlobalToken.ts](https://github.com/mParticle/aquarium/blob/main/src/utils/GetGlobalToken.ts) to create the content of Global Tokens

These will then be converted into css variables and commited via the [github action](https://github.com/mParticle/aquarium/blob/main/.github/workflows/tokens-to-css.yml)