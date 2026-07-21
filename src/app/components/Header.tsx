import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const navigation = [
  { label: "Cápsula", to: "/catalogo" },
  { label: "Combinações", to: "/#combinacoes" },
  { label: "Sobre a demo", to: "/#sobre-demo" },
];

export function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <button
          type="button"
          className="icon-button site-header__menu"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className="site-header__navigation" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="wordmark" to="/" aria-label="Trama Clara">
          Trama Clara
        </Link>

        <div className="site-header__utilities">
          <button type="button" className="icon-button icon-button--desktop" aria-label="Buscar">
            <Search aria-hidden="true" />
          </button>
          <button
            type="button"
            className="icon-button icon-button--desktop"
            aria-label="Abrir conta demonstrativa"
            onClick={() => navigate("/conta")}
          >
            <User aria-hidden="true" />
          </button>
          <button
            type="button"
            className="icon-button icon-button--bag"
            aria-label={`Abrir sacola${totalItems > 0 ? `, ${totalItems} ${totalItems === 1 ? "item" : "itens"}` : ""}`}
            onClick={() => navigate("/carrinho")}
          >
            <ShoppingBag aria-hidden="true" />
            {totalItems > 0 ? <span aria-hidden="true">{totalItems}</span> : null}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navegação móvel">
          {navigation.map((item) => (
            <Link key={item.label} to={item.to} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/conta" onClick={() => setMobileMenuOpen(false)}>
            Conta demonstrativa
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
