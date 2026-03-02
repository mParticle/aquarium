# Engineering Standards

Rokt engineering standards are installed to `~/.<ide>/standards/`.
Read the relevant file(s) before generating or reviewing code.

## Core Standards (quality gates)

| File                         | Scope                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| `coding-standards.md`        | Readability, modularity, naming, DRY, OOP design, PR limits                            |
| `testing-standards.md`       | Three Pillars (Fidelity/Resilience/Precision), pyramid (70/20/10), test doubles, SMURF |
| `documentation_standards.md` | Two-Track docs (Track 1 = Google Drive "why", Track 2 = GitHub `/docs` "how")          |
| `ownership_manifesto.md`     | E2E ownership, defensive engineering, observability, SLO accountability                |

## Engineering Handbook (context)

| File                           | Scope                                                                  |
| ------------------------------ | ---------------------------------------------------------------------- |
| `welcome.md`                   | Culture, Builder DNA, ownership model                                  |
| `onboarding.md`                | First-week checklist, setup, finding work                              |
| `quick-reference.md`           | Links to essential tools and resources                                 |
| `business-context.md`          | OKRs, core metrics (APT, CoPI, VPT, YER), product descriptions         |
| `architecture-principles.md`   | Radical encapsulation, System of Record, anti-patterns                 |
| `boundaries-and-engagement.md` | Service boundaries, architecture team engagement                       |
| `standards-paved-road.md`      | CI/CD, observability baseline, security/privacy baselines              |
| `development-lifecycle.md`     | Plan/Build/Ship/Operate/Learn, Shape Up, DeployKit, definition of done |
| `service-ownership.md`         | Cortex catalog, SoR compliance, tech debt ratio, on-call               |
| `production-operations.md`     | Readiness checklist, monitoring setup, troubleshooting                 |
| `incident-response.md`         | Severity levels (SEV-1–5), service tiers (T0–T3), post-mortem process  |
| `approved-tooling.md`          | Approved languages, frameworks, IDEs, agentic systems                  |
| `glossary.md`                  | Complete engineering glossary                                          |

## When to Consult

- **Writing code** → `coding-standards.md`
- **Writing tests** → `testing-standards.md`
- **Writing docs** → `documentation_standards.md`
- **Adding monitoring/alerts** → `ownership_manifesto.md`, `production-operations.md`
- **Reviewing PRs** → `coding-standards.md`, `testing-standards.md`
- **Investigating incidents** → `incident-response.md`, `service-ownership.md`
- **Architecture decisions** → `architecture-principles.md`, `boundaries-and-engagement.md`
- **Onboarding context** → `welcome.md`, `onboarding.md`, `glossary.md`
