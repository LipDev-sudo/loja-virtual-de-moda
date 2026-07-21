import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Link, MemoryRouter, Route, Routes } from "react-router";
import { Layout } from "../src/app/components/Layout";
import { CartProvider } from "../src/app/context/CartContext";

it("leva cada nova rota ao início da página", async () => {
  const user = userEvent.setup();
  const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);

  render(
    <MemoryRouter initialEntries={["/"]}>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Link to="/segunda">Próxima página</Link>} />
            <Route path="segunda" element={<p>Segunda página</p>} />
          </Route>
        </Routes>
      </CartProvider>
    </MemoryRouter>,
  );

  scrollTo.mockClear();
  await user.click(screen.getByRole("link", { name: "Próxima página" }));

  expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
});
