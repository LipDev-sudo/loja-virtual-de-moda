import { expect, test } from "@playwright/test";

const routes = ["/", "/catalogo", "/produto/1", "/carrinho", "/checkout", "/conta"];
const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

for (const viewport of viewports) {
  for (const route of routes) {
    test(`${viewport.name} ${route}: layout e acessibilidade básicos`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(route, { waitUntil: "domcontentloaded" });

      await page.waitForTimeout(800);
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        h1: document.querySelectorAll("h1").length,
        unnamed: [...document.querySelectorAll("button, a")]
          .filter((el) => !el.textContent?.trim() && !el.getAttribute("aria-label"))
          .map((el) => el.outerHTML.slice(0, 80)),
        deadLinks: [...document.querySelectorAll('a[href="#"]')].length,
      }));

      expect(result.overflow, "overflow horizontal").toBeLessThanOrEqual(0);
      expect(result.h1, "um único h1").toBeLessThanOrEqual(1);
      expect(result.unnamed, "controles sem nome acessível").toEqual([]);
      expect(result.deadLinks, 'links href="#"').toBe(0);
    });
  }
}

test("fluxo: categoria na home filtra o catálogo e produto vai ao carrinho", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.getByRole("link", { name: "Blazers" }).first().click();
  await expect(page).toHaveURL(/categoria=Blazers/);
  await expect(page.getByRole("heading", { level: 3 }).first()).toBeVisible();

  await page.locator("a[href^='/produto/']").first().click();
  await page.getByRole("button", { name: /^(P|M|G|GG|\d+)$/ }).first().click();
  await page.getByRole("button", { name: /adicionar ao carrinho/i }).click();
  await expect(page.getByRole("button", { name: /Carrinho, 1 item/ })).toBeVisible();
});

test("newsletter informa que é uma simulação", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.getByLabel("Seu e-mail").fill("pessoa@example.com");
  await page.getByRole("button", { name: "INSCREVER" }).click();
  await expect(page.getByText(/Inscrição simulada/)).toBeVisible();
});
