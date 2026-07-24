import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  expect(errors, "a página não deve registrar erros no console").toEqual([]);
});

test("apresenta identidade, metadata e layout sem overflow", async ({ page }) => {
  await expect(page).toHaveTitle("Trama Clara — Cápsula de moda versátil");
  await expect(page.getByRole("heading", { name: "Menos peças. Mais combinações." })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://loja-virtual-de-moda.vercel.app/");
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(hasOverflow).toBe(false);
});

test("percorre catálogo, variação, sacola e checkout simulado", async ({ page }) => {
  await page.getByRole("link", { name: "Explorar a cápsula" }).click();
  await expect(page).toHaveURL(/\/catalogo$/);
  await page.getByRole("link", { name: /Camisa Ampla Areia/ }).first().click();
  await page.getByRole("button", { name: "M", exact: true }).click();
  await page.getByRole("button", { name: "Adicionar à sacola" }).click();
  await page.getByRole("button", { name: /Abrir sacola/ }).click();
  await expect(page.getByRole("heading", { name: "Sacola" })).toBeVisible();
  await page.getByRole("link", { name: "Continuar para o checkout" }).click();
  await expect(page.getByRole("heading", { name: "Checkout demonstrativo" })).toBeVisible();
  await page.reload();
  await expect(page.getByText("Camisa Ampla Areia")).toBeVisible();
  await page.getByRole("button", { name: "Continuar" }).click();
  await expect(page.getByRole("alert")).toContainText("Preencha os campos obrigatórios");
  await expect(page.getByRole("textbox", { name: "CEP" })).toHaveCount(0);
});
