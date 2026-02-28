---
description: Monitor and address PR review comments automatically
argument-hint: [PR-number]
---

Invoke the **pr-review-handler** skill.

Fetch review comments for: $ARGUMENTS (or auto-detect from current branch)

Classify each comment (ACTIONABLE, QUESTION, NITS, APPROVAL, DISCUSSION), present classification for confirmation, then address each: apply code fixes, draft question responses, batch nit fixes, and flag discussions for user decision.
