import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import reactRefresh from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",

    resolve: {
      alias: {},
    },
    plugins: [tsconfigPaths(), reactRefresh()],
  });
};
