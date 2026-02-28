# Conventional Commit Types Reference

## Format

```
type(scope): description

[optional body]

[optional footer(s)]
```

## Types

| Type         | When to Use                                           | Example                                        |
| ------------ | ----------------------------------------------------- | ---------------------------------------------- |
| **feat**     | New feature or capability                             | `feat(auth): add OAuth2 login flow`            |
| **fix**      | Bug fix                                               | `fix(api): handle null response from upstream` |
| **docs**     | Documentation only changes                            | `docs(readme): update setup instructions`      |
| **style**    | Formatting, whitespace, semicolons (no logic change)  | `style(lint): fix trailing whitespace`         |
| **refactor** | Code restructuring without behavior change            | `refactor(bid): extract pricing logic`         |
| **perf**     | Performance improvement                               | `perf(query): add index for auction lookup`    |
| **test**     | Adding or correcting tests                            | `test(budget): add edge case for zero balance` |
| **build**    | Build system or external dependency changes           | `build(deps): upgrade go to 1.22`              |
| **ci**       | CI configuration changes                              | `ci(buildkite): add coverage step`             |
| **chore**    | Maintenance tasks, tooling, no production code change | `chore(scripts): update check-pr.py`           |
| **revert**   | Reverts a previous commit                             | `revert: feat(auth): add OAuth2 login flow`    |

## Scope

Optional. Identifies the component or module affected.

- Use lowercase
- Use the component/module name (e.g., `auth`, `api`, `bid`, `dashboard`)
- Omit when the change spans multiple components

## Breaking Changes

Add `!` after the type/scope or include `BREAKING CHANGE:` in the footer:

```
feat(api)!: change response format for /v2/bids

BREAKING CHANGE: response field "bid_amount" renamed to "amount_micros"
```

## Rules

- Subject line: imperative mood, lowercase, no period, max 72 characters
- Body: explain "what" and "why", not "how" (wrap at 72 characters)
- Footer: reference Jira tickets (`Refs: PROJ-123`) or breaking changes
- One logical change per commit

## Examples

```
feat(auction): add budget cap enforcement

Apply budget caps during bid calculation to prevent overspend.
Caps are checked per-campaign and per-account with fallback
to account-level when campaign cap is not set.

Refs: COMP-456
```

```
fix(api): return 400 for malformed placement IDs

Previously returned 500 when placement ID contained non-numeric
characters. Now validates format and returns 400 Bad Request
with descriptive error message.

Refs: COMP-789
```
