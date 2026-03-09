import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#f8f7f5] border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3
              className="tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 500 }}
            >
              Maison
            </h3>
            <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.8 }}>
              Moda contemporânea com elegância atemporal. Peças cuidadosamente selecionadas para mulheres que valorizam qualidade e estilo.
            </p>
          </div>

          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-6 text-gray-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Compras
            </h4>
            <ul className="space-y-3">
              {["Novidades", "Coleção", "Sale", "Lookbook"].map((item) => (
                <li key={item}>
                  <Link
                    to="/catalogo"
                    className="text-gray-500 hover:text-black transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-6 text-gray-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Atendimento
            </h4>
            <ul className="space-y-3">
              {["Contato", "Trocas e Devoluções", "Guia de Tamanhos", "FAQ"].map((item) => (
                <li key={item}>
                  <span
                    className="text-gray-500 hover:text-black transition-colors cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-6 text-gray-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Newsletter
            </h4>
            <p className="text-gray-500 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.8 }}>
              Receba novidades e ofertas exclusivas.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2.5 border border-gray-300 bg-white focus:outline-none focus:border-black transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              />
              <button
                className="px-5 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}
              >
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
            &copy; 2026 Maison. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
