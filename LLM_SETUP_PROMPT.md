**Task:** Install mParticle Aquarium component library in my React/Next.js project.

**Package Information:**

- Repository: https://github.com/mParticle/aquarium
- npm Package: `@mparticle/aquarium`
- Base Framework: Ant Design (antd) v5

**Required Dependencies:**

```bash
yarn add @mparticle/aquarium antd@5 dayjs@1
```

**Dependency Matrix:**
| Package | Required | Purpose |
|---------|----------|---------|
| `@mparticle/aquarium` | ✅ Yes | Main Aquarium component library |
| `antd` | ✅ Yes | Peer dependency - Ant Design UI framework |
| `dayjs` | ✅ Yes | Peer dependency - Date handling for DatePicker, Calendar, etc. |
| `react` | ✅ Yes | Peer dependency (>=17.0.2) |
| `react-dom` | ✅ Yes | Peer dependency (>=17.0.2) |

**Post-Installation:**

1. Add CSS reset to app entry point (`_app.tsx`, `layout.tsx`, or global entry):

```typescript
import 'antd/dist/reset.css'
```

2. Verify with test component:

```tsx
import { Button } from '@mparticle/aquarium'
;<Button type="primary">Test</Button>
```

**Troubleshooting:**
| Issue | Solution |
|-------|----------|
| Styles not loading | Ensure `antd/dist/reset.css` is imported |
| Date components fail | Verify `dayjs` is installed |
| Type errors | Install `@types/react` if not present |

**Self-Learning:**

> Add new pitfalls and gotchas below as you encounter them:

| Issue                         | Solution | Added By |
| ----------------------------- | -------- | -------- |
| <!-- Add new entries here --> |          |          |
