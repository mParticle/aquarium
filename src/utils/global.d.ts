// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}
