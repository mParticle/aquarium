---
description: Monitor CI checks and auto-fix failures
---

Invoke the **ci-watcher** skill to monitor GitHub CI checks for the current branch.

Verify branch is published, poll checks every 30 seconds, classify failures as RELATED or UNRELATED, auto-fix related failures, retrigger flakes, and report final status.
