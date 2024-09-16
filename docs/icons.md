## Icons Documentation

### Adding and Updating Icons

The Design team provides SVG files with the final icon names. These SVG files must be minified and follow the project's styling guidelines. You can prettify them using the `SVGPrettifier` tool, which ensures the correct size and properties are applied to the SVG.

#### Steps to Add a New Icon:

1. **Prettify the SVG**:  
   Use the `SVGPrettifier` script or UI to clean up the SVG file and ensure it meets the necessary formatting standards (size, properties, etc.). This feature will be available soon within the Aquarium project.

2. **Update the Icon Type**:  
   Add the new icon name to the TypeScript type definition in the [src/types/icons](https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/types/icons.ts) file.

3. **Update Icon Components**:  
   Add the icon components in the [src/components/icons](https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/components/icons/index.ts) directory, where all icon components are stored.

4. **Update the Icons Object**:  
   Ensure the new icons are included in the `Icons` object located in [src/constants/Icons](https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/constants/Icons.ts). This object is used across the project to reference all available icons.

### The `IconTable` Component

The `IconTable` component is used to display a table of all available icons in the project.

### Using the `SVGPrettifier` Tool

The `SVGPrettifier` component is used to upload and prettify SVG files. Each SVG must follow the project's styling guidelines and have a unique name to avoid overwriting existing icons.

### Starting the Server

To process the uploaded SVGs with the `SVGPrettifier`, a server must be running locally. Follow these steps to start the server:

1. Navigate to the root of the project directory.
2. Run the following command to start the server:

   ```bash
   npm run icons-prettifier
   ```
