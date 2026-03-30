import { Link } from "react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-xl mx-auto text-center">
            <p
              className="text-[#B76E79] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem" }}
            >
              Newsletter
            </p>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              Fique por <span className="italic">Dentro</span>
            </h3>
            <p
              className="text-white/40 mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.9 }}
            >
              Receba em primeira mao nossas novidades, colecoes exclusivas e convites para eventos especiais.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#B76E79] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              />
              <button
                className="px-8 py-3.5 bg-[#B76E79] text-white hover:bg-[#9E5A64] transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  fontWeight: 500,
                }}
              >
                INSCREVER
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3
              className="tracking-[0.35em] uppercase mb-6 text-white"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 300,
              }}
            >
              Maison
            </h3>
            <p
              className="text-white/35"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.9 }}
            >
              Moda contemporanea com elegancia atemporal. Pecas cuidadosamente selecionadas para quem valoriza qualidade e estilo refinado.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#B76E79] hover:text-[#B76E79] transition-all duration-300 text-white/40"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-[0.6rem] tracking-[0.3em] uppercase mb-6 text-[#B76E79]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Compras
            </h4>
            <ul className="space-y-3.5">
              {["Novidades", "Colecao", "Sale", "Lookbook"].map((item) => (
                <li key={item}>
                  <Link
                    to="/catalogo"
                    className="text-white/35 hover:text-[#B76E79] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[0.6rem] tracking-[0.3em] uppercase mb-6 text-[#B76E79]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Atendimento
            </h4>
            <ul className="space-y-3.5">
              {["Contato", "Trocas e Devolucoes", "Guia de Tamanhos", "FAQ"].map((item) => (
                <li key={item}>
                  <span
                    className="text-white/35 hover:text-[#B76E79] transition-colors duration-300 cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[0.6rem] tracking-[0.3em] uppercase mb-6 text-[#B76E79]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Informacoes
            </h4>
            <ul className="space-y-3.5">
              {["Sobre Nos", "Sustentabilidade", "Carreiras", "Termos de Uso"].map((item) => (
                <li key={item}>
                  <span
                    className="text-white/35 hover:text-[#B76E79] transition-colors duration-300 cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-white/20"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.05em" }}
            >
              &copy; 2026 Maison. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {["Privacidade", "Termos", "Cookies"].map((item) => (
                <span
                  key={item}
                  className="text-white/20 hover:text-[#B76E79]/60 cursor-pointer transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
