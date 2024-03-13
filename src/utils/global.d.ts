// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />
// for importing svg files...
declare module '*.svg' {
  const value: any
  export default value
}
