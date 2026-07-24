import { type FormEvent, useState } from "react";
import { ChevronRight, Heart, MapPin, Package, User } from "lucide-react";

const demoOrders = [
  { id: "DEMO-014", date: "18 jul 2026", status: "Entregue", total: 687, items: 3 },
  { id: "DEMO-009", date: "03 jul 2026", status: "Em trânsito", total: 339, items: 1 },
];

const tabs = [
  { id: "pedidos", label: "Pedidos simulados", icon: Package },
  { id: "favoritos", label: "Favoritos", icon: Heart },
  { id: "enderecos", label: "Endereços", icon: MapPin },
  { id: "dados", label: "Meus dados", icon: User },
] as const;

export function Account() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("pedidos");
  const [saved, setSaved] = useState(false);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="account-page">
      <header className="page-heading">
        <div className="content-shell">
          <p className="eyebrow">Ambiente demonstrativo</p>
          <h1>Conta de demonstração</h1>
          <p>Perfil fictício de Marina Costa para explorar o pós-compra da Trama Clara.</p>
        </div>
      </header>

      <div className="content-shell account-layout">
        <nav className="account-tabs" aria-label="Áreas da conta de demonstração">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "is-active" : ""}
              aria-pressed={activeTab === tab.id}
            >
              <tab.icon aria-hidden="true" />
              {tab.label}
            </button>
          ))}
        </nav>

        <section className="account-panel" aria-live="polite">
          {activeTab === "pedidos" && (
            <div>
              <h2>Pedidos simulados</h2>
              <p className="section-note">Registros fictícios usados somente para demonstrar estados do pedido.</p>
              <div className="order-list">
                {demoOrders.map((order) => (
                  <article key={order.id} className="demo-order">
                    <div>
                      <div className="order-title">
                        <strong>{order.id}</strong>
                        <span className={order.status === "Entregue" ? "status-success" : "status-progress"}>
                          {order.status}
                        </span>
                      </div>
                      <p>{order.date} · {order.items} {order.items === 1 ? "item" : "itens"}</p>
                    </div>
                    <div className="order-total">
                      <strong>{formatPrice(order.total)}</strong>
                      <ChevronRight aria-hidden="true" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "favoritos" && (
            <div className="empty-state">
              <Heart aria-hidden="true" />
              <h2>Favoritos nesta navegação</h2>
              <p>Os corações dos produtos são interações locais desta demonstração e não formam uma lista compartilhada.</p>
            </div>
          )}

          {activeTab === "enderecos" && (
            <div>
              <h2>Endereço demonstrativo</h2>
              <p className="section-note">Este endereço é fictício e não representa uma pessoa real.</p>
              <address className="demo-address">
                <strong>Marina Costa</strong><br />
                Rua Exemplo, 120 · Apto 32<br />
                São Paulo, SP · 01000-000
              </address>
            </div>
          )}

          {activeTab === "dados" && (
            <form className="account-form" onSubmit={handleSave}>
              <h2>Meus dados</h2>
              <p className="section-note">Edite o perfil fictício para testar o formulário.</p>
              <div className="form-grid">
                <div>
                  <label htmlFor="account-name">Nome</label>
                  <input id="account-name" name="name" type="text" defaultValue="Marina" autoComplete="given-name" />
                </div>
                <div>
                  <label htmlFor="account-surname">Sobrenome</label>
                  <input id="account-surname" name="surname" type="text" defaultValue="Costa" autoComplete="family-name" />
                </div>
                <div className="form-span">
                  <label htmlFor="account-email">E-mail</label>
                  <input id="account-email" name="email" type="email" defaultValue="marina@exemplo.com" autoComplete="email" />
                </div>
                <div className="form-span">
                  <label htmlFor="account-phone">Telefone</label>
                  <input id="account-phone" name="phone" type="tel" defaultValue="(11) 90000-0000" autoComplete="tel" />
                </div>
              </div>
              <button className="button-primary" type="submit">Salvar dados da demo</button>
              {saved && <p className="form-success" role="status">Dados fictícios atualizados nesta sessão.</p>}
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
