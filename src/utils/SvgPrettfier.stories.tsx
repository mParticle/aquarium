import { type Meta, type StoryObj } from '@storybook/react'
import { SVGPrettifier } from './SvgPrettifier'

// SVG Prettifier Documentation
const svgPrettifierDocumentation = `
### SVG Prettifier Documentation

The \`SVGPrettifier\` component is used to upload and prettify SVG files. Each SVG must follow the project's styling guidelines and must have a **unique name** to avoid overwriting existing icons.
This only works locally

#### Starting the Server
To process the uploaded SVGs, a server must be running. You can start the server by following these steps:

1. Navigate to the project root folder.
2. Run the following command to start the server:
   \`\`\`bash
   npm run icons-prettifier
   \`\`\`
3. The server will start on **port 8000**. Ensure this port is available or update the port configuration in the server script.
4. The server handles the uploaded SVG files and saves the prettified versions to the designated folder.

For more information on the icon component and usage, please refer to the [Icons Documentation](?path=/docs/aquarium-general-icons--documentation).
`
const meta: Meta<typeof SVGPrettifier> = {
  title: 'Aquarium/Other/SVGPrettifier',
  component: SVGPrettifier,
  parameters: {
    docs: {
      description: {
        component: svgPrettifierDocumentation,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof SVGPrettifier>

// Primary story for SVG Prettifier
export const Primary: Story = {}
