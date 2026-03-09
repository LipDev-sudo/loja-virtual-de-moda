import { useState } from "react";
import { Package, Heart, MapPin, User, LogOut, ChevronRight } from "lucide-react";

export function Account() {
  const [activeTab, setActiveTab] = useState("pedidos");

  const mockOrders = [
    {
      id: "MN-2026-4521",
      date: "28 Fev 2026",
      status: "Entregue",
      total: 2180,
      items: 3,
    },
    {
      id: "MN-2026-3892",
      date: "15 Fev 2026",
      status: "Em trânsito",
      total: 890,
      items: 1,
    },
    {
      id: "MN-2026-2103",
      date: "02 Jan 2026",
      status: "Entregue",
      total: 3380,
      items: 4,
    },
  ];

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

  const tabs = [
    { id: "pedidos", label: "Meus Pedidos", icon: Package },
    { id: "favoritos", label: "Favoritos", icon: Heart },
    { id: "enderecos", label: "Endereços", icon: MapPin },
    { id: "dados", label: "Meus Dados", icon: User },
  ];

  const inputStyle = "w-full px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:border-black transition-colors";
  const labelStyle: React.CSSProperties = { fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em" };
  const inputFont: React.CSSProperties = { fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#f8f7f5] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Minha Conta
          </h1>
          <p
            className="text-gray-500 mt-2"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
          >
            Olá, Maria! Bem-vinda de volta.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left ${
                    activeTab === tab.id
                      ? "bg-gray-50 text-black"
                      : "text-gray-500 hover:text-black hover:bg-gray-50"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
              <button
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 transition-colors text-left mt-4"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === "pedidos" && (
              <div>
                <h2
                  className="mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Meus Pedidos
                </h2>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-100 p-5 sm:p-6 hover:border-gray-200 transition-colors cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span
                              className="text-gray-900"
                              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
                            >
                              #{order.id}
                            </span>
                            <span
                              className={`px-2.5 py-0.5 text-xs ${
                                order.status === "Entregue"
                                  ? "bg-green-50 text-green-700"
                                  : "bg-amber-50 text-amber-700"
                              }`}
                              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                            {order.date} &middot; {order.items} {order.items === 1 ? "item" : "itens"}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-gray-900"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
                          >
                            {formatPrice(order.total)}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "favoritos" && (
              <div>
                <h2
                  className="mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Favoritos
                </h2>
                <div className="text-center py-12">
                  <Heart className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                    Você ainda não tem favoritos.
                  </p>
                  <p className="text-gray-400 mt-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                    Clique no coração nos produtos para salvá-los aqui.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "enderecos" && (
              <div>
                <h2
                  className="mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Endereços
                </h2>
                <div className="border border-gray-100 p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-900 mb-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
                        Casa
                      </p>
                      <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.7 }}>
                        Rua das Flores, 123 - Apto 42<br />
                        Jardins - São Paulo, SP<br />
                        CEP 01234-567
                      </p>
                    </div>
                    <span
                      className="px-2.5 py-0.5 bg-gray-50 text-gray-500"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}
                    >
                      Padrão
                    </span>
                  </div>
                </div>
                <button
                  className="mt-4 border border-gray-200 w-full py-3 text-gray-600 hover:border-black hover:text-black transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                >
                  + Adicionar novo endereço
                </button>
              </div>
            )}

            {activeTab === "dados" && (
              <div>
                <h2
                  className="mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Meus Dados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>NOME</label>
                    <input type="text" defaultValue="Maria" className={inputStyle} style={inputFont} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>SOBRENOME</label>
                    <input type="text" defaultValue="Silva" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>E-MAIL</label>
                    <input type="email" defaultValue="maria@email.com" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-1.5 text-gray-700" style={labelStyle}>TELEFONE</label>
                    <input type="tel" defaultValue="(11) 99999-9999" className={inputStyle} style={inputFont} />
                  </div>
                  <div className="sm:col-span-2 mt-2">
                    <button
                      className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors tracking-[0.15em] uppercase"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                    >
                      Salvar Alterações
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
