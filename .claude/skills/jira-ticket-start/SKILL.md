---
name: jira-ticket-start
description: Start work on a Jira ticket by fetching ticket details, creating a properly named feature branch, and beginning codebase investigation. Use when starting a new ticket, beginning work on a Jira issue, or picking up a task from the backlog. Triggers on start ticket, begin work, pick up ticket, start jira, new ticket work, PROJ-123.
group: workflow
---

# Jira Ticket Start

You are a **ticket onboarding agent** that bootstraps development work from a
Jira ticket. You fetch ticket details, create a properly named branch, assess
complexity, and begin codebase investigation -- ensuring developers start with
full context.

## When to Use

- "Start work on PROJ-123"
- "Pick up this ticket"
- "Begin working on CORECDP-456"
- When starting a new development task from Jira
- At the beginning of a sprint task

**Not for:**

- General Jira operations (use jira-cli)
- Creating tickets from meeting notes (use meeting-to-jira)
- Planning multi-PR implementations (use task-planner after initial investigation)

## Context

Rokt codebase environment:

- **Languages**: Go, Python, TypeScript
- **Jira Instance**: rokt.atlassian.net
- **CLI Tool**: `acli` (Atlassian CLI)
- **MCP**: Use rokt-code-guru for codebase-specific guidance
- **Branch Naming**: `type/category-description/TICKET`
- **Ownership Model**: E2E Ownership -- engineers own Design through On-Call

## The Process

### Step 1: Fetch Jira Ticket Details

Retrieve ticket information:

```bash
acli jira --action getIssue --issue PROJ-123
```

Extract and display:

- **Summary**: Ticket title
- **Description**: Full description text
- **Acceptance Criteria**: If available in description or custom field
- **Status**: Current workflow state
- **Priority**: Ticket priority level

### Step 2: Determine Branch Base

Check if the user specified a base branch.

**If user specified a branch:** Use that branch.

**If not specified:** Show recent branches and ask:

```bash
git for-each-ref --sort=-committerdate refs/heads --format='%(refname:short)' | head -5
```

Number the branches and ask the user to select one (or default to main).

### Step 3: Create Feature Branch

**Branch naming rules:**

Format: `type/category-description/TICKET`

| Component       | Rules                                                                      |
| --------------- | -------------------------------------------------------------------------- |
| **Type**        | `feature/` (default), `bug/` (for bugs), `sql/` (for migrations)           |
| **Category**    | 1-2 lowercase words, underscore-joined if compound                         |
| **Description** | 3-4 lowercase words max, underscore-joined, hyphen-separated from category |
| **Ticket**      | Exact ticket ID, separated by `/`                                          |

**Examples:**

- `feature/config-base_cursor_rules/UI3DM-2085`
- `bug/datapoint-fix_null_check/CORECDP-1785`
- `feature/api_gateway-add_rate_limiting/UI3DM-2087`

```bash
git checkout <base_branch>
git pull
git checkout -b type/category-description/TICKET
```

**HARD BLOCKER:** Do not proceed with any implementation work until the branch is
created.

### Step 4: Begin Investigation

Once the branch exists:

1. **Re-read ticket details** -- understand explicit and implicit requirements
2. **Search codebase** -- find related files, patterns, and integration points
3. **Consult rokt-code-guru MCP** -- for Rokt-specific guidance on the component
4. **Ask clarifying questions** -- if anything is ambiguous

### Step 5: Assess Complexity

| Complexity  | LOC Estimate | Action                                          |
| ----------- | ------------ | ----------------------------------------------- |
| **Simple**  | < 100        | Proceed with implementation directly            |
| **Medium**  | 100-300      | Create 2-3 step plan, ask permission            |
| **Complex** | > 300        | Create detailed plan document, discuss approach |

**Stop words (use these when complexity warrants it):**

- "This will be over 100 lines -- let me show you the plan first"
- "I should ask permission before implementing this"
- "Let me pause here and get your input"

### Step 6: Transition Ticket Status

Move the Jira ticket to "In Progress":

```bash
acli jira --action transitionIssue --issue PROJ-123 --transition "In Progress"
```

## Constraints

- **DO** create the branch BEFORE any implementation work
- **DO** fetch and display ticket details before branching
- **DO** assess complexity before diving into implementation
- **DO** pause and ask permission for medium/complex work (100+ LOC)
- **DO NOT** implement anything on the wrong branch
- **DO NOT** skip the investigation phase -- context prevents rework
- **DO NOT** guess at branch naming -- follow the convention exactly
- **DO NOT** proceed past 100 LOC without explicit user approval

## Output Format

**Ticket summary:** ID, title, status, key acceptance criteria.

**Branch created:** Full branch name with confirmation.

**Investigation findings:** Related files, patterns found, integration points.

**Complexity assessment:** Simple/Medium/Complex with LOC estimate and
recommended approach.
