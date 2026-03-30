import { Link, useNavigate } from "react-router";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FBF7F6]/95 backdrop-blur-md shadow-[0_1px_0_rgba(183,110,121,0.15)]"
          : "bg-[#FBF7F6]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 -ml-2 text-[#1A1A1A] hover:text-[#B76E79] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Nav links - desktop */}
          <nav className="hidden sm:flex items-center gap-10 flex-1">
            {[
              { label: "Colecao", to: "/catalogo" },
              { label: "Novidades", to: "/catalogo" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="relative text-[0.7rem] tracking-[0.2em] uppercase text-[#8B7D7A] hover:text-[#B76E79] transition-colors duration-300 group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B76E79] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <h1
              className="tracking-[0.25em] uppercase text-center text-[#1A1A1A] group-hover:text-[#B76E79] transition-colors duration-500"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.7rem",
                fontWeight: 400,
                letterSpacing: "0.35em",
              }}
            >
              Maison
            </h1>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end">
            <button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#E8CFC9]/30 transition-colors duration-300">
              <Search className="w-[17px] h-[17px] text-[#8B7D7A] hover:text-[#B76E79] transition-colors" />
            </button>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#E8CFC9]/30 transition-colors duration-300"
              onClick={() => navigate("/conta")}
            >
              <User className="w-[17px] h-[17px] text-[#8B7D7A]" />
            </button>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#E8CFC9]/30 transition-colors duration-300 relative"
              onClick={() => navigate("/carrinho")}
            >
              <ShoppingBag className="w-[17px] h-[17px] text-[#8B7D7A]" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-[#B76E79] text-white rounded-full flex items-center justify-center"
                  style={{ fontSize: "9px", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative rose-gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B76E79]/25 to-transparent" />

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FBF7F6] border-t border-[#E8CFC9]/30 animate-slide-down">
          <div className="px-6 py-8 space-y-5">
            {[
              { label: "Colecao", to: "/catalogo" },
              { label: "Novidades", to: "/catalogo" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block text-[0.75rem] tracking-[0.2em] uppercase text-[#8B7D7A] hover:text-[#B76E79] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E8CFC9]/30">
              <Link
                to="/conta"
                className="block text-[0.75rem] tracking-[0.2em] uppercase text-[#8B7D7A] hover:text-[#B76E79] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Minha Conta
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
