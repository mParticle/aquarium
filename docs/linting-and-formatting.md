# Linting and Formatting

<hr />

## Change Management

In order to propose changes to linting and formatting, open an issue or a pull request in this repo.

## Formatting

### Prettier

[Here's our current config file for prettier](https://github.com/mParticle/aquarium/blob/main/.prettierrc)

Since we are coming from two large printWidth codebases we decided on 120 printWidth for the Aquarium to make it more
similar.

## Linting

### ESLint

[Our current ESLint config file](https://github.com/mParticle/aquarium/blob/main/.eslintrc.js#L19) customizes some rules. Here's the rational behind them.

- [@typescript-eslint/explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)

We believe it's important to make function return types explicit but since we are in a component library a lot of our
returns will be components so we exempt them from this rule.

- [@typescript-eslint/strict-boolean-expressions](@typescript-eslint/strict-boolean-expressions)

This rules requires us to keep including explicit null checks in conditionals. Things like the examples below would need
explicit comparisons, so we decided to turn this rule 'off'.

```js
if (error) {
  throw error
}
```

and

```js
alert(`Tag ${checked ? 'Checked' : 'Unchecked'}`)
```

- [@typescript-eslint/consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)

Although they are basically the same per the most recent documentation, we choose to be able to use both.

See both
the [official docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
and [this stackoverflow](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220)
for references.

- [@typescript-eslint/no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define/#:~:text=Disallow%20the%20use%20of%20variables,type%20%2C%20interface%20and%20enum%20declarations.)

Preference for allowing exports to be made before usage since everything gets hoisted in JS.

[react/react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

We don't need it cause we include globally in _vite.config.js_.

- [import/no-duplicates](https://eslint.org/docs/latest/rules/no-duplicate-imports)

We sometimes choose to duplicate imports for better non-IDE dependent refactoring capabilities in the future.

### Stylelint

Our stylelint config was based
on [this one from Indicative](https://git.corp.mparticle.com/mParticle/indicative-web/blob/development/.stylelintrc)
but we removed some of the stylistic rules that [were deprecated on v15](https://stylelint.io/migration-guide/to-15)
cause Prettier already takes care of that
