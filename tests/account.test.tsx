import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Account } from "../src/app/pages/Account";

it("deixa explícito que a conta e seus dados são demonstrativos", async () => {
  const user = userEvent.setup();
  render(<Account />);

  expect(screen.getByText(/perfil fictício/i)).toBeVisible();

  await user.click(screen.getByRole("button", { name: "Meus dados" }));
  expect(screen.getByRole("textbox", { name: "Nome" })).toBeVisible();
  expect(screen.getByRole("textbox", { name: "E-mail" })).toBeVisible();
});
