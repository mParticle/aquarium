![higgs_aquarium](https://github.com/user-attachments/assets/7c883814-792b-4a72-9621-94c16be6753f)

<a href="https://mparticle.github.io/aquarium/" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>
&nbsp;&nbsp;

# mParticle Aquarium

mParticle Component Library built on top of [Ant Design](https://ant.design/).

_Components That Scale_

## Installation

<a href="https://github.com/mParticle/aquarium/blob/main/LLM_SETUP_PROMPT.md" target="_blank"><img src="https://img.shields.io/badge/📋_Setup_with_LLM-blue?style=flat" alt="Setup with LLM"></a>

### Requirements

| Dependency | Version     | Notes                    |
| ---------- | ----------- | ------------------------ |
| React      | `>=17.0.2`  | React 17 or 18           |
| React DOM  | `>=17.0.2`  | Must match React version |
| Node.js    | `>=24.12.0` | For development          |

### Quick Start

```bash
yarn add @mparticle/aquarium antd@5 dayjs@1
```

Or with npm:

```bash
npm install @mparticle/aquarium antd@5 dayjs@1
```

### Setup

Add the CSS reset to your app entry point (`_app.tsx`, `layout.tsx`, or `index.tsx`):

```typescript
import 'antd/dist/reset.css'
```

### Usage

```tsx
import { Button, Space, Typography } from '@mparticle/aquarium'
import { PaddingSm } from '@mparticle/aquarium/dist/style'

export const MyComponent = () => {
  return (
    <Space direction="vertical">
      <Typography.Title level={3}>Hello Aquarium</Typography.Title>
      <Typography.Text>Successfully installed!</Typography.Text>
      <Space>
        <Button type="primary" style={{ paddingLeft: PaddingSm }}>
          Primary
        </Button>
        <Button>Default</Button>
      </Space>
    </Space>
  )
}
```

## Development

Clone the repository and install dependencies:

```bash
git clone git@github.com:mParticle/aquarium.git
cd aquarium
npm install
```

Run Storybook for local development:

```bash
npm run storybook
```

Run unit tests:

```bash
npm run test-storybook
```

## Contributing

See [CONTRIBUTING.md](https://github.com/mParticle/aquarium/blob/main/CONTRIBUTING.md).

Please make sure any new or updated components are present, tested and verified within [Storybook](https://storybook.js.org/).

## Support

<support@mparticle.com>

## License

mParticle's Aquarium is available under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0). See the LICENSE file for more info.
