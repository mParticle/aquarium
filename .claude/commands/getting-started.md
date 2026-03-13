---
description: Repo onboarding guide - analyze codebase structure and conventions
---

Analyze the current repository and provide a practical onboarding guide for a developer who is new to it.

## Execute

1. **Identify the repo** - Read README.md, package.json/go.mod/pyproject.toml, and directory structure
2. **Build system** - Check for `justfile`, `Makefile`, `package.json` scripts, or other build tools
3. **Tech stack** - Identify languages, frameworks, and key dependencies
4. **Test setup** - Find test frameworks, test directories, and how to run tests
5. **Code conventions** - Check for linting config, formatting rules, and style guides
6. **Architecture** - Read `docs/ARCHITECTURE.md` if it exists, or infer from directory structure
7. **How to contribute** - Find CONTRIBUTING.md or infer the PR workflow

## Output

Present a structured onboarding guide with:

- **What This Repo Does** (1-2 sentences)
- **Quick Start** (build, test, run commands)
- **Architecture Overview** (key directories and their purpose)
- **Conventions** (naming, testing, PR process)
- **Key Files to Read First** (ranked by importance for understanding the codebase)
