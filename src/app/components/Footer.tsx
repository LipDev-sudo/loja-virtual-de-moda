import { Link } from "react-router";
import { toast } from "sonner";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-xl mx-auto text-center">
            <p
              className="text-[#D08A95] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
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
              className="text-white/60 mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.9 }}
            >
              Receba em primeira mão nossas novidades, coleções exclusivas e convites para eventos especiais.
            </p>
            <form
              className="flex max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Inscrição simulada: este é um projeto de demonstração e nenhum e-mail é armazenado.");
                e.currentTarget.reset();
              }}
            >
              <input
                type="email"
                required
                aria-label="Seu e-mail"
                autoComplete="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 min-w-0 px-4 sm:px-5 py-3.5 bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#B76E79] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              />
              <button
                type="submit"
                className="px-4 sm:px-8 py-3.5 bg-[#9E5A64] text-white hover:bg-[#85495A] transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  fontWeight: 500,
                }}
              >
                INSCREVER
              </button>
            </form>
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
              className="text-white/60"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.9 }}
            >
              Moda contemporânea com elegância atemporal. Peças cuidadosamente selecionadas para quem valoriza qualidade e estilo refinado.
            </p>
          </div>

          <div>
            <h4
              className="text-[0.75rem] tracking-[0.3em] uppercase mb-6 text-[#D08A95]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Compras
            </h4>
            <ul className="space-y-3.5">
              {["Novidades", "Coleção", "Sale", "Lookbook"].map((item) => (
                <li key={item}>
                  <Link
                    to="/catalogo"
                    className="text-white/60 hover:text-[#B76E79] transition-colors duration-300"
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
              className="text-[0.75rem] tracking-[0.3em] uppercase mb-6 text-[#D08A95]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Atendimento
            </h4>
            <ul className="space-y-3.5">
              {["Contato", "Trocas e Devoluções", "Guia de Tamanhos", "FAQ"].map((item) => (
                <li key={item}>
                  <span
                    className="text-white/60"
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
              className="text-[0.75rem] tracking-[0.3em] uppercase mb-6 text-[#D08A95]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Informações
            </h4>
            <ul className="space-y-3.5">
              {["Sobre Nós", "Sustentabilidade", "Carreiras", "Termos de Uso"].map((item) => (
                <li key={item}>
                  <span
                    className="text-white/60"
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
              className="text-white/50"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.05em" }}
            >
              &copy; 2026 Maison. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {["Privacidade", "Termos", "Cookies"].map((item) => (
                <span
                  key={item}
                  className="text-white/50"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
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
