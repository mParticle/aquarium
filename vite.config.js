import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

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
        /**
         * Running Babel on the generated code:
         *  https://github.com/rollup/plugins/blob/master/packages/babel/README.md#running-babel-on-the-generated-code
         *
         * Transforming ES6+ syntax to ES5 is not supported yet, there are two ways to do:
         *  https://github.com/evanw/esbuild/issues/1010#issuecomment-803865232
         * We choose to run Babel on the output files after esbuild.
         *
         * @vitejs/plugin-legacy does not support library mode:
         *  https://github.com/vitejs/vite/issues/1639
         */
        getBabelOutputPlugin({
          allowAllFormats: true,
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: false, // Default：false
                // Exclude transforms that make all code slower
                exclude: ["transform-typeof-symbol"],
                // https://babeljs.io/docs/en/babel-preset-env#modules
                modules: false,
              },
            ],
          ],
          plugins: [
            /**
             * Extract the helper function.
             */
            [
              "@babel/plugin-transform-runtime",
              {
                corejs: false,
                // version: require('@babel/runtime').version,
              },
            ],
          ],
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
