import { Link } from "react-router";
import { products, HERO_IMAGE, LOOKBOOK_IMAGE, CATEGORY_IMAGES } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const newProducts = products.filter((p) => p.isNew || p.isSale).slice(0, 4);
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Banner - Full Screen Editorial */}
      <section className="relative h-screen overflow-hidden">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Colecao Outono/Inverno"
          className="w-full h-full object-cover scale-105"
          style={{ animation: "scaleIn 1.5s ease-out forwards" }}
        />
        {/* Dramatic multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/70 via-[#1A1A1A]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-[#1A1A1A]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B76E79]/5 to-[#B76E79]/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p
                className="text-[#E8CFC9] tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-in-up"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", animationDelay: "0.3s", animationFillMode: "forwards" }}
              >
                Colecao Outono/Inverno 2026
              </p>
              <h1
                className="text-white mb-8 opacity-0 animate-fade-in-up"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                Elegancia<br />
                <span className="italic" style={{ fontWeight: 300 }}>em cada</span>{" "}
                <span style={{ color: "#D4A08A" }}>detalhe</span>
              </h1>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#D4A08A] mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }} />
              <p
                className="text-white/60 mb-10 max-w-lg opacity-0 animate-fade-in-up"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.8, animationDelay: "0.9s", animationFillMode: "forwards" }}
              >
                Descubra pecas atemporais que celebram a sofisticacao e o estilo contemporaneo.
              </p>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
                <Link
                  to="/catalogo"
                  className="inline-flex items-center gap-4 bg-[#B76E79] text-white px-10 py-4 hover:bg-[#9E5A64] transition-all duration-500 group"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em" }}
                >
                  EXPLORAR COLECAO
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
          <span
            className="text-white/40 tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem" }}
          >
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-white/40 animate-bounce" />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p
            className="text-[#B76E79] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem" }}
          >
            Curadoria
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 300,
              letterSpacing: "0.03em",
            }}
          >
            Categorias
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Vestidos", img: CATEGORY_IMAGES.vestidos },
            { name: "Blazers", img: CATEGORY_IMAGES.blazers },
            { name: "Acessorios", img: CATEGORY_IMAGES.acessorios },
            { name: "Bolsas", img: CATEGORY_IMAGES.bolsas },
          ].map((cat) => (
            <Link key={cat.name} to="/catalogo" className="group relative aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-[#1A1A1A]/10 to-transparent group-hover:from-[#1A1A1A]/70 transition-all duration-700" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-8">
                <div className="w-8 h-[1px] bg-[#B76E79] mb-3 transition-all duration-500 group-hover:w-12" />
                <h3
                  className="text-white tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#FDF5F3] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p
                className="text-[#B76E79] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem" }}
              >
                Selecao Especial
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                }}
              >
                Destaques
              </h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#B76E79] to-transparent mt-5" />
            </div>
            <Link
              to="/catalogo"
              className="hidden sm:inline-flex items-center gap-2 text-[#8B7D7A] hover:text-[#B76E79] transition-colors duration-300 group"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em" }}
            >
              VER TUDO
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={LOOKBOOK_IMAGE}
          alt="Lookbook"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/50 via-[#1A1A1A]/30 to-[#B76E79]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p
              className="text-[#E8CFC9] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem" }}
            >
              Lookbook
            </p>
            <h2
              className="text-white mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                letterSpacing: "0.02em",
              }}
            >
              A Arte de se <span className="italic">Vestir</span>
            </h2>
            <p
              className="text-white/50 mb-8 max-w-md mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.8 }}
            >
              Uma jornada visual pela elegancia contemporanea
            </p>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-3 border border-[#B76E79] text-white px-10 py-3.5 hover:bg-[#B76E79] transition-all duration-500 group"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em" }}
            >
              DESCOBRIR
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p
            className="text-[#B76E79] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem" }}
          >
            Novidades
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 300,
              letterSpacing: "0.03em",
            }}
          >
            Recem Chegados
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="border-t border-[#E8CFC9]/40 py-20 bg-[#FDF5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { title: "Envio Gratis", desc: "Em compras acima de R$ 500" },
              { title: "Qualidade Premium", desc: "Materiais selecionados com cuidado" },
              { title: "Troca Facilitada", desc: "30 dias para troca ou devolucao" },
            ].map((item, i) => (
              <div key={item.title} className="relative">
                {i > 0 && (
                  <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#B76E79]/30 to-transparent" />
                )}
                <h4
                  className="mb-2 tracking-[0.15em] uppercase text-[#1A1A1A]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[#8B7D7A]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
