import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Checkout } from "../src/app/pages/Checkout";
import { CartProvider } from "../src/app/context/CartContext";
import { products } from "../src/app/data/products";

it("valida campos obrigatórios e preserva os dados entre as etapas", async () => {
  const user = userEvent.setup();
  localStorage.setItem(
    "lipdev-moda-cart",
    JSON.stringify([
      {
        product: products[0],
        quantity: 1,
        selectedColor: products[0].colors[0].name,
        selectedSize: products[0].sizes[0],
      },
    ]),
  );

  render(
    <MemoryRouter>
      <CartProvider>
        <Checkout />
      </CartProvider>
    </MemoryRouter>,
  );

  expect(screen.getByRole("textbox", { name: "Nome" })).toBeVisible();
  expect(screen.getByRole("textbox", { name: "E-mail" })).toBeVisible();

  await user.click(screen.getByRole("button", { name: "Continuar" }));
  expect(screen.getByRole("alert")).toHaveTextContent("Preencha os campos obrigatórios");
  expect(screen.queryByRole("textbox", { name: "CEP" })).not.toBeInTheDocument();

  await user.type(screen.getByRole("textbox", { name: "Nome" }), "Maria");
  await user.type(screen.getByRole("textbox", { name: "Sobrenome" }), "Silva");
  await user.type(screen.getByRole("textbox", { name: "E-mail" }), "maria@example.com");
  await user.type(screen.getByRole("textbox", { name: "Telefone" }), "11999999999");
  await user.click(screen.getByRole("button", { name: "Continuar" }));
  expect(screen.getByRole("textbox", { name: "CEP" })).toBeVisible();

  await user.click(screen.getByRole("button", { name: "Voltar" }));
  expect(screen.getByRole("textbox", { name: "Nome" })).toHaveValue("Maria");
});
