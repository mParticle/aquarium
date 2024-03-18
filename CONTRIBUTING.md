# Contributing

Thanks for contributing! Please read this document to follow our conventions for contributing to the mParticle Aquarium Library.

## Setting Up

- Clone the repository and run `npm install`
- Run `npm start` to start storybook

## Testing in Nancy

In order to test your changes, you will need to link the local version of the library. To do this, run the following commands:

- Make sure to have the library built by running `npx vite build`. The linked version will use the build files from _dist/_ folder.
- Make sure the `resolve.symlinks` property in you webpack config is set to `false`
- `yarn link` in the root of the library
- `yarn link @mparticle/aquarium` in the root of Nancy
- Make sure your _/node_modules/@mparticle/aquarium_ folder contains all of the Aquarium code

## Testing by installing from a branch

Another way to test your changes is by installing the library from a branch. To do this, we need to push the _dist/_ folder to the remote
and install it directly from there with the following command:

```
yarn add https://github.com/mParticle/aquarium#<branch-name>
```

## Releasing

We use semantic-release for releasing new versions of the library.

## Releasing beta versions

[TODO](https://mparticle-eng.atlassian.net/browse/UNI-264)

## Commit conventions and PR titles

- We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to help automating the release process. Both PR titles and commit messages should follow this convention.
- [This repo is commitizen friendly](https://github.com/commitizen/cz-cli?tab=readme-ov-file#using-the-command-line-tool) so we can use `git cz` to commit changes.
  `npx cz` is also available if you don't have commitizen installed globally.

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
