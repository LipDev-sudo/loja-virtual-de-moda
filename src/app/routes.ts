import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Account } from "./pages/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "catalogo", Component: Catalog },
      { path: "produto/:id", Component: ProductDetail },
      { path: "carrinho", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "conta", Component: Account },
    ],
  },
]);
