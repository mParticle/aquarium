All icons are managed and approved by the design team. Do not add any assets that have not been reviewed by them.

When adding a new svg:

- ensure that the viewbox is a square [0 0 24 24]
  - and that there is some internal padding so the image does not touch the edges of the box
- ensure there are no hardcoded colors [unless otherwise desired]
  - and all `fill` has the value `"currentColor"`.
- ensure the svg should not set a `height` or `width` attribute

Add the new asset to src/assets/svg, with a semantic name (one that describes the function and not the shape)
Then add the icon as an import and export in src/components/icons/index.ts
Then add the icon to src/constants/Icons.ts to allow usage in as the `<Icon />` component `name` prop

If a color is required and not yet available to the `<Icon/>` component, it should be added to both `icon.css` file and the `IconColor` type
