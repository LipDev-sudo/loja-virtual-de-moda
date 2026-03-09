import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { ChevronRight, Lock, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

  const shipping = totalPrice >= 500 ? 0 : 29.9;
  const total = totalPrice + shipping;

  if (items.length === 0 && !orderPlaced) {
    navigate("/carrinho");
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h1
          className="mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 400 }}
        >
          Pedido Confirmado!
        </h1>
        <p
          className="text-gray-500 mb-2 max-w-md"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.7 }}
        >
          Obrigada pela sua compra. Você receberá um e-mail com os detalhes do seu pedido.
        </p>
        <p
          className="text-gray-400 mb-8"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
        >
          Pedido #MN-2026-{Math.floor(Math.random() * 9000 + 1000)}
        </p>
        <Link
          to="/"
          className="bg-black text-white px-8 py-3.5 hover:bg-gray-800 transition-colors tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
        >
          Voltar à Loja
        </Link>
      </div>
    );
  }

  const handleSubmit = () => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    clearCart();
    setOrderPlaced(true);
  };

  const steps = [
    { num: 1, label: "Dados" },
    { num: 2, label: "Entrega" },
    { num: 3, label: "Pagamento" },
  ];

  const inputStyle = "w-full px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:border-black transition-colors";
  const labelStyle: React.CSSProperties = { fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em" };
  const inputFont: React.CSSProperties = { fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Steps */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    step >= s.num ? "bg-black text-white" : "bg-gray-100 text-gray-400"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}
                >
                  {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                </div>
                <span
                  className={`hidden sm:inline ${step >= s.num ? "text-black" : "text-gray-400"}`}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-300" />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div>
                <h2
                  className="mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Seus Dados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>NOME</label>
                    <input type="text" placeholder="Maria" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>SOBRENOME</label>
                    <input type="text" placeholder="Silva" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>E-MAIL</label>
                    <input type="email" placeholder="maria@email.com" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>TELEFONE</label>
                    <input type="tel" placeholder="(11) 99999-9999" className={inputStyle} style={inputFont} />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2
                  className="mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Endereço de Entrega
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>CEP</label>
                    <input type="text" placeholder="01234-567" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>ENDEREÇO</label>
                    <input type="text" placeholder="Rua das Flores, 123" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>COMPLEMENTO</label>
                    <input type="text" placeholder="Apto 42" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>BAIRRO</label>
                    <input type="text" placeholder="Jardins" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>CIDADE</label>
                    <input type="text" placeholder="São Paulo" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>ESTADO</label>
                    <input type="text" placeholder="SP" className={inputStyle} style={inputFont} />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2
                  className="mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Pagamento
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block mb-1.5 text-gray-700" style={labelStyle}>NÚMERO DO CARTÃO</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className={inputStyle} style={inputFont} />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-gray-700" style={labelStyle}>NOME NO CARTÃO</label>
                      <input type="text" placeholder="MARIA SILVA" className={inputStyle} style={inputFont} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1.5 text-gray-700" style={labelStyle}>VALIDADE</label>
                        <input type="text" placeholder="MM/AA" className={inputStyle} style={inputFont} />
                      </div>
                      <div>
                        <label className="block mb-1.5 text-gray-700" style={labelStyle}>CVV</label>
                        <input type="text" placeholder="123" className={inputStyle} style={inputFont} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 pt-2">
                    <Lock className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}>
                      Pagamento seguro com criptografia SSL
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-gray-500 hover:text-black transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                >
                  Voltar
                </button>
              ) : (
                <Link
                  to="/carrinho"
                  className="text-gray-500 hover:text-black transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                >
                  Voltar ao carrinho
                </Link>
              )}
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-8 py-3.5 hover:bg-gray-800 transition-colors tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              >
                {step === 3 ? "Confirmar Pedido" : "Continuar"}
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#f8f7f5] p-6 sm:p-8 sticky top-28">
              <h3
                className="mb-6 tracking-[0.1em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
              >
                Seu Pedido
              </h3>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex gap-3"
                  >
                    <div className="w-14 h-18 flex-shrink-0 bg-white overflow-hidden">
                      <ImageWithFallback
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-gray-900 truncate"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                      >
                        {item.product.name}
                      </p>
                      <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}>
                        {item.selectedColor} / {item.selectedSize} / Qty: {item.quantity}
                      </p>
                    </div>
                    <span
                      className="text-gray-900 flex-shrink-0"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                    >
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
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

              <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
