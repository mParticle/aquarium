import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  resolve: {
    alias: {
      src: "/src",
    },
  },
  plugins: [dts({ include: "src", rollupTypes: true })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "aquarium",
      formats: ["es"],
      fileName: "aquarium",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      plugins: [
        babel({
          babelHelpers: "runtime",
          extensions: [".js", ".jsx", ".es6", ".es", ".mjs", "ts"],
        }),
      ],
      output: {
        globals: {
          antd: "antd",
          react: "React",
        },
      },
    },
  },
});
