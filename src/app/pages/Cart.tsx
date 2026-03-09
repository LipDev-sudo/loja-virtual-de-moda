import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Cart() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

  const shipping = totalPrice >= 500 ? 0 : 29.9;
  const total = totalPrice + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <ShoppingBag className="w-16 h-16 text-gray-200 mb-6" />
        <h1
          className="mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400 }}
        >
          Seu carrinho está vazio
        </h1>
        <p
          className="text-gray-500 mb-8"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
        >
          Explore nossa coleção e encontre peças incríveis.
        </p>
        <Link
          to="/catalogo"
          className="bg-black text-white px-8 py-3.5 hover:bg-gray-800 transition-colors tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
        >
          Explorar Coleção
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1
          className="mb-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem",
            fontWeight: 400,
            letterSpacing: "0.05em",
          }}
        >
          Carrinho ({items.length} {items.length === 1 ? "item" : "itens"})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-0">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                className="flex gap-4 sm:gap-6 py-6 border-b border-gray-100"
              >
                <Link to={`/produto/${item.product.id}`} className="w-24 sm:w-32 aspect-[3/4] flex-shrink-0 bg-gray-50 overflow-hidden">
                  <ImageWithFallback
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <Link to={`/produto/${item.product.id}`}>
                        <h3
                          className="text-gray-900 hover:underline"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 400 }}
                        >
                          {item.product.name}
                        </h3>
                      </Link>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor, item.selectedSize)}
                        className="p-1 text-gray-400 hover:text-black transition-colors flex-shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                        Cor: {item.selectedColor}
                      </p>
                      <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                        Tamanho: {item.selectedSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-gray-200">
                      <button
                        className="p-2 hover:bg-gray-50"
                        onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span
                        className="w-8 text-center"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        className="p-2 hover:bg-gray-50"
                        onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span
                      className="text-gray-900"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
                    >
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#f8f7f5] p-6 sm:p-8 sticky top-28">
              <h3
                className="mb-6 tracking-[0.1em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
              >
                Resumo do Pedido
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                    Subtotal
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                    Envio
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                    {shipping === 0 ? "Grátis" : formatPrice(shipping)}
                  </span>
                </div>
              </div>

              {shipping > 0 && (
                <p className="text-gray-500 mb-4 pb-4 border-b border-gray-200" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}>
                  Faltam {formatPrice(500 - totalPrice)} para frete grátis
                </p>
              )}

              <div className="flex justify-between mb-6 pt-3 border-t border-gray-200">
                <span
                  className="tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
                >
                  Total
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500 }}>
                  {formatPrice(total)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-3.5 hover:bg-gray-800 transition-colors tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              >
                Finalizar Compra
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/catalogo"
                className="block text-center mt-4 text-gray-500 hover:text-black transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
              >
                Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
