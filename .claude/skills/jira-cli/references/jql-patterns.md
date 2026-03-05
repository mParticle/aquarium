# JQL Patterns Reference

Common JQL queries for Rokt Jira operations, organized by use case.

## My Work

| Natural Language              | JQL                                                                 |
| ----------------------------- | ------------------------------------------------------------------- |
| My open tickets               | `assignee = currentUser() AND status != Done ORDER BY updated DESC` |
| My open bugs                  | `assignee = currentUser() AND type = Bug AND status != Done`        |
| My in-progress work           | `assignee = currentUser() AND status = "In Progress"`               |
| My tickets updated this week  | `assignee = currentUser() AND updated >= startOfWeek()`             |
| My tickets created this month | `assignee = currentUser() AND created >= startOfMonth()`            |

## Sprint & Board

| Natural Language          | JQL                                                                   |
| ------------------------- | --------------------------------------------------------------------- |
| Current sprint tickets    | `sprint in openSprints() AND assignee = currentUser()`                |
| Sprint backlog            | `sprint in openSprints() AND status = "To Do"`                        |
| Unfinished sprint work    | `sprint in openSprints() AND status != Done`                          |
| Previous sprint carryover | `sprint in closedSprints() AND status != Done ORDER BY priority DESC` |

## Project Queries

| Natural Language      | JQL                                                                                |
| --------------------- | ---------------------------------------------------------------------------------- |
| Unresolved in project | `project = PROJ AND resolution = Unresolved`                                       |
| High priority bugs    | `project = PROJ AND type = Bug AND priority in (Highest, High) AND status != Done` |
| Recently created      | `project = PROJ AND created >= -7d ORDER BY created DESC`                          |
| Blockers              | `project = PROJ AND type = Bug AND priority = Highest AND status != Done`          |

## Cross-Project

| Natural Language            | JQL                                                                               |
| --------------------------- | --------------------------------------------------------------------------------- |
| All my open across projects | `assignee = currentUser() AND resolution = Unresolved ORDER BY project, priority` |
| Mentioned in comments       | `text ~ "currentUser()" AND status != Done`                                       |
| Watched tickets             | `watcher = currentUser() AND status != Done`                                      |
| Tickets linked to mine      | `issueFunction in linkedIssuesOf("assignee = currentUser()")`                     |

## Date-Based

| Natural Language | JQL                                                              |
| ---------------- | ---------------------------------------------------------------- |
| Created today    | `project = PROJ AND created >= startOfDay()`                     |
| Due this week    | `project = PROJ AND due >= startOfWeek() AND due <= endOfWeek()` |
| Overdue          | `project = PROJ AND due < now() AND status != Done`              |
