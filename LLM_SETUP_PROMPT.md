**Task:** Install mParticle Aquarium component library in my React project.

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

1. Add aquarium CSS to app styles entry point (ex `main.scss`, `style.less`, or global entry):
   examples:

```less
@import (inline) '../aurelia/node_modules/@mparticle/aquarium/dist/style.css';
```

```scss
@import '../../node_modules/@mparticle/aquarium/dist/style.css';
```

2. Verify with test component:

```tsx
import { Button } from '@mparticle/aquarium'
;<Button type="primary">Hello Aquarium World</Button>
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
