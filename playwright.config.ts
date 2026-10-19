import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  retries: 0,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:4176",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1 --port 4176",
    url: "http://127.0.0.1:4176",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
