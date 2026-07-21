import { expect, test } from "@playwright/test";

test("registra a interface e preserva foco visível", async ({ page }, testInfo) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.keyboard.press("Tab");

  const focused = page.locator(":focus-visible");
  await expect(focused).toBeVisible();
  expect(await focused.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");
  expect(consoleErrors).toEqual([]);

  const suffix = testInfo.project.name === "mobile" ? "mobile" : "desktop";
  await page.screenshot({ path: `docs/screenshots/trama-clara-home-${suffix}.png`, fullPage: true });
});
