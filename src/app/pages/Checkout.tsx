import { useEffect, useState } from "react";
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

  const shipping = 29.9;
  const total = totalPrice + shipping;

  useEffect(() => {
    if (items.length === 0 && !orderPlaced) {
      navigate("/carrinho", { replace: true });
    }
  }, [items.length, navigate, orderPlaced]);

  if (items.length === 0 && !orderPlaced) {
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
          Demonstração concluída
        </h1>
        <p
          className="text-gray-500 mb-2 max-w-md"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.7 }}
        >
          O fluxo foi concluído localmente. Nenhum pedido, pagamento ou dado foi enviado.
        </p>
        <p
          className="text-gray-400 mb-8"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
        >
          Referência fictícia #TRAMA-DEMO
        </p>
        <Link
          to="/"
          className="bg-black text-white px-8 py-3.5 hover:bg-gray-800 transition-colors tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
        >
          Voltar à cápsula
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
        <div className="text-center mb-10">
          <p className="eyebrow">Fluxo local e fictício</p>
          <h1 className="mt-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 500 }}>
            Checkout demonstrativo
          </h1>
          <p className="text-gray-500 mt-2">Nenhum dado ou pagamento será processado.</p>
        </div>
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
                    <label htmlFor="checkout-name" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Nome</label>
                    <input id="checkout-name" name="name" autoComplete="given-name" type="text" placeholder="Maria" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label htmlFor="checkout-last-name" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Sobrenome</label>
                    <input id="checkout-last-name" name="lastName" autoComplete="family-name" type="text" placeholder="Silva" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="checkout-email" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>E-mail</label>
                    <input id="checkout-email" name="email" autoComplete="email" type="email" placeholder="maria@email.com" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="checkout-phone" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Telefone</label>
                    <input id="checkout-phone" name="phone" autoComplete="tel" type="tel" placeholder="(11) 99999-9999" className={inputStyle} style={inputFont} />
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
                    <label htmlFor="checkout-postal-code" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>CEP</label>
                    <input id="checkout-postal-code" name="postalCode" autoComplete="postal-code" inputMode="numeric" type="text" placeholder="01234-567" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="checkout-address" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Endereço</label>
                    <input id="checkout-address" name="address" autoComplete="street-address" type="text" placeholder="Rua das Flores, 123" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label htmlFor="checkout-complement" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Complemento</label>
                    <input id="checkout-complement" name="complement" autoComplete="address-line2" type="text" placeholder="Apto 42" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label htmlFor="checkout-district" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Bairro</label>
                    <input id="checkout-district" name="district" type="text" placeholder="Jardins" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label htmlFor="checkout-city" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Cidade</label>
                    <input id="checkout-city" name="city" autoComplete="address-level2" type="text" placeholder="São Paulo" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label htmlFor="checkout-state" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Estado</label>
                    <input id="checkout-state" name="state" autoComplete="address-level1" type="text" placeholder="SP" className={inputStyle} style={inputFont} />
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
                      <label htmlFor="checkout-card-number" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Número do cartão</label>
                      <input id="checkout-card-number" name="cardNumber" autoComplete="cc-number" inputMode="numeric" type="text" placeholder="0000 0000 0000 0000" className={inputStyle} style={inputFont} />
                    </div>
                    <div>
                      <label htmlFor="checkout-card-name" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Nome no cartão</label>
                      <input id="checkout-card-name" name="cardName" autoComplete="cc-name" type="text" placeholder="MARIA SILVA" className={inputStyle} style={inputFont} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="checkout-card-expiry" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>Validade</label>
                        <input id="checkout-card-expiry" name="cardExpiry" autoComplete="cc-exp" inputMode="numeric" type="text" placeholder="MM/AA" className={inputStyle} style={inputFont} />
                      </div>
                      <div>
                        <label htmlFor="checkout-card-cvv" className="block mb-1.5 text-gray-700 uppercase" style={labelStyle}>CVV</label>
                        <input id="checkout-card-cvv" name="cardCvv" autoComplete="cc-csc" inputMode="numeric" type="text" placeholder="123" className={inputStyle} style={inputFont} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 pt-2">
                    <Lock className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}>
                      Campos demonstrativos: não use dados reais.
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
                {step === 3 ? "Concluir demonstração" : "Continuar"}
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
                Resumo da demonstração
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
                        {item.selectedColor} / {item.selectedSize} / Qtd.: {item.quantity}
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
                    Entrega simulada
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                    {formatPrice(shipping)}
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
