/// <reference types="vitest/config" />
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    projects: [
      {
        extends: true,
        test: {
          name: "TS",
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                name: "Chromium (Light)",
                browser: "chromium",
                context: {
                  colorScheme: "light",
                },
              },
              {
                name: "Chromium (Dark)",
                browser: "chromium",
                context: {
                  colorScheme: "dark",
                },
              },
              // {
              //   name: "Firefox",
              //   browser: "firefox",
              // },
              // {
              //   name: "Webkit",
              //   browser: "webkit",
              // },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
