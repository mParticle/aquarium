# Contributing

Thanks for contributing! Please read this document to follow our conventions for contributing to the mParticle Aquarium Library.

## Setting Up

- Clone the repository and run `npm install`
- Run `npm start` to start storybook

## Testing in the platforms using linking

In order to test your changes, you will need to link the local version of the library. To do this, run the following commands:

- Make sure to have the library built by running `npm run build`. The linked version will use the build files from _dist/_ folder.
  **A new build is required whenever you make changes** to the library code!
- `yarn link` for Nancy, `npm link` Indicative, in the root of the library
- `yarn link @mparticle/aquarium` for Nancy, `npm link @mparticle/aquarium` for Indicative in the root of the platforms
- Make sure your _/node_modules/@mparticle/aquarium_ folder contains all of the Aquarium code

## Testing by installing from a branch

Another way to test your changes is by installing the library from a branch. To do this, we need to push the _dist/_ folder to the remote
and install it directly from there with the following command:

```
yarn add https://github.com/mParticle/aquarium#<branch-name>
```

## Testing by releasing an ad-hoc version

To test ad-hoc versions of the Aquarium we use `feat/`, `fix/` or `chore/` branchs on Github and their corresponding distribution channels on npm.
This allows us to release specific versions for testing specific features and install them on the platforms. To release it,
just run the Github Action from the the branch you want to release.

### Release Process

We use semantic-release for releasing new versions of the library. You can use the Github Release Aquarium action from the `main` to release from it.

> [!IMPORTANT]  
> Before releasing a version from main, send a message in the #aquarium Slack channel to align it and sync on other changes that can/should be included in the release.

## Commit conventions and PR titles

- We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to help automating the release process. Both PR titles and commit messages should follow this convention.
- [This repo is commitizen friendly](https://github.com/commitizen/cz-cli?tab=readme-ov-file#using-the-command-line-tool) so we can use `git cz` to commit changes.
  `npx cz` is also available if you don't have commitizen installed globally.
- We also have a [commitlint](https://commitlint.js.org/) setup to enforce the commit message format.

The standard format for commit messages is as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

The following lists the different `types` allowed in the commit message:

- feat: A new feature (automatic minor release)
- fix: A bug fix (automatic patch release)
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes that don't modify src or test files, such as automatic documentation generation, or building latest assets
- ci: Changes to CI configuration files/scripts
- revert: Revert commit
- build: Changes that affect the build system or other dependencies

In the footer, if there is a breaking change, start your footer with `BREAKING CHANGE:` followed by a description.

## Editor configuration

- **Prettier**: For configuring your editor to play nicely with Prettier, take a look at the [Editors doc page](https://prettier.io/docs/en/editors).
  - Also, if you're using VSCode you might want to set prettier as the default formatter and also turn on "Format on Save" option.
- **ESLint**: Check [Integrations doc page](https://eslint.org/docs/latest/use/integrations)
- **Stylelint**: Check [Editor integrations doc page](https://stylelint.io/awesome-stylelint/#editor-integrations)

## Contributing with the release process

To make changes to the release process, you can use the `--dry-run` from semantic-release flag to test the release
process without actually publishing a new version.

You will need two environment variables to run the release process locally:

- NPM_TOKEN: You can create a personal npm account and use a personal token.
  Since we are using `--dry-run` it won't try to publish anything so having a valid read-only npm token works.

- GITHUB_TOKEN: Create a [github personal access token (classic)](https://github.com/settings/tokens)
  and give it access to the mParticle organization via "Configure SSO" button.

After settings both variables locally, run the following locally:

```
npx semantic-release --dry-run
```

## Additional readings:

- [Semantic Release Workflow Configuration](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/workflow-configuration.md#workflow-configuration)
- [Understanding npm distribution channels](https://docs.npmjs.com/cli/v8/commands/npm-dist-tag#purpose)
