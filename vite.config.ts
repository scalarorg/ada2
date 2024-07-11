import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import devNodePolyfills from "vite-plugin-node-polyfills";
import nodePolyfills from "rollup-plugin-polyfill-node";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.KV_REST_API_URL": env.KV_REST_API_URL,
      "process.env.KV_URL": env.KV_URL,
      "process.env.KV_REST_API_TOKEN": env.KV_REST_API_TOKEN,
      "process.env.KV_REST_API_READ_ONLY_TOKEN":
        env.KV_REST_API_READ_ONLY_TOKEN,
    },
    plugins: [
      devNodePolyfills.nodePolyfills({
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
      vue(),
    ],
    esbuild: {
      drop: ["console", "debugger"], // warn: to comment in dev mode to show logs in .ts files
    },
    build: {
      target: "esnext",
      rollupOptions: {
        plugins: [
          // ↓ Needed for build
          nodePolyfills(),
        ],
      },
      // ↓ Needed for build if using WalletConnect and other providers
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "sass:math";
          @import "./src/assets/styles/_variables.scss";
          @import "./src/assets/styles/_mixins.scss";
        `,
        },
      },
    },
  };
});
