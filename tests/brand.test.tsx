import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Header } from "../src/app/components/Header";
import { CartProvider } from "../src/app/context/CartContext";
import { products } from "../src/app/data/products";

function renderHeader() {
  render(
    <MemoryRouter>
      <CartProvider>
        <Header />
      </CartProvider>
    </MemoryRouter>,
  );
}

describe("identidade Trama Clara", () => {
  it("apresenta a marca e a navegação da cápsula", () => {
    renderHeader();

    expect(screen.getByRole("link", { name: "Trama Clara" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Cápsula" })).toBeVisible();
  });

  it("nomeia os controles utilitários para leitores de tela", () => {
    renderHeader();

    expect(screen.getByRole("button", { name: "Abrir conta demonstrativa" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Abrir sacola" })).toBeVisible();
  });

  it("mantém oito peças demonstrativas sem promoções artificiais", () => {
    expect(products).toHaveLength(8);
    expect(products.every((product) => !("originalPrice" in product) && !("isSale" in product))).toBe(true);
  });
});
