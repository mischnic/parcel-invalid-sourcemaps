// rollup.config.js
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: [
    {
      sourcemap: true,
      file: "rollup/index.js",
      format: "iife",
    },
  ],
};
