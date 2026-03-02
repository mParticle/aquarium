---
description: Push branch to remote and generate PR content
---

Invoke the **publish-branch** skill.

Push the current branch to origin, analyze commit history, generate a PR title from the branch name convention, create a PR description with Jira ticket link and test plan, then create the PR via `gh pr create`.
