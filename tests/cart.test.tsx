import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useCart, CartProvider } from "../src/app/context/CartContext";
import { products } from "../src/app/data/products";

function CartProbe() {
  const { addItem, totalItems, totalPrice } = useCart();
  const product = products[0];

  return (
    <>
      <button
        type="button"
        onClick={() => addItem(product, product.colors[0].name, product.sizes[0], 3)}
      >
        Adicionar três
      </button>
      <p>Itens: {totalItems}</p>
      <p>Total: {totalPrice}</p>
    </>
  );
}

it("preserva a quantidade escolhida ao adicionar uma peça à sacola", async () => {
  const user = userEvent.setup();
  render(
    <CartProvider>
      <CartProbe />
    </CartProvider>,
  );

  await user.click(screen.getByRole("button", { name: "Adicionar três" }));

  expect(screen.getByText("Itens: 3")).toBeVisible();
  expect(screen.getByText(`Total: ${products[0].price * 3}`)).toBeVisible();
});
