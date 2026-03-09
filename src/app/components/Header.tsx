import { Link, useNavigate } from "react-router";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Nav links - desktop */}
          <nav className="hidden sm:flex items-center gap-8 flex-1">
            <Link
              to="/catalogo"
              className="text-sm tracking-[0.15em] uppercase text-gray-600 hover:text-black transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Coleção
            </Link>
            <Link
              to="/catalogo"
              className="text-sm tracking-[0.15em] uppercase text-gray-600 hover:text-black transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Novidades
            </Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1
              className="tracking-[0.2em] uppercase text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500 }}
            >
              Maison
            </h1>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-end">
            <button className="hidden sm:block p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Search className="w-[18px] h-[18px] text-gray-700" />
            </button>
            <button
              className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              onClick={() => navigate("/conta")}
            >
              <User className="w-[18px] h-[18px] text-gray-700" />
            </button>
            <button
              className="p-2 hover:bg-gray-50 rounded-full transition-colors relative"
              onClick={() => navigate("/carrinho")}
            >
              <ShoppingBag className="w-[18px] h-[18px] text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-black text-white rounded-full flex items-center justify-center" style={{ fontSize: "10px" }}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/catalogo"
              className="block text-sm tracking-[0.15em] uppercase text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Coleção
            </Link>
            <Link
              to="/catalogo"
              className="block text-sm tracking-[0.15em] uppercase text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Novidades
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
