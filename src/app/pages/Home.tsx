import { Link } from "react-router";
import { products, HERO_IMAGE, LOOKBOOK_IMAGE, CATEGORY_IMAGES } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const newProducts = products.filter((p) => p.isNew || p.isSale).slice(0, 4);
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[70vh] sm:h-[85vh] overflow-hidden">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Coleção Outono/Inverno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p
                className="text-white/80 tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
              >
                Coleção Outono/Inverno 2026
              </p>
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                Elegância em cada detalhe
              </h1>
              <p
                className="text-white/70 mb-8 max-w-md"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
              >
                Descubra peças atemporais que celebram a sofisticação e o estilo contemporâneo.
              </p>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 hover:bg-gray-100 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em" }}
              >
                EXPLORAR COLEÇÃO
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Categorias
          </h2>
          <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Vestidos", img: CATEGORY_IMAGES.vestidos },
            { name: "Blazers", img: CATEGORY_IMAGES.blazers },
            { name: "Acessórios", img: CATEGORY_IMAGES.acessorios },
            { name: "Bolsas", img: CATEGORY_IMAGES.bolsas },
          ].map((cat) => (
            <Link key={cat.name} to="/catalogo" className="group relative aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3
                  className="text-white tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#f8f7f5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                }}
              >
                Destaques
              </h2>
              <div className="w-12 h-[1px] bg-black mt-4" />
            </div>
            <Link
              to="/catalogo"
              className="hidden sm:inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
            >
              VER TUDO
              <ArrowRight className="w-4 h-4" />
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
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={LOOKBOOK_IMAGE}
          alt="Lookbook"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p
              className="text-white/80 tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
            >
              Lookbook
            </p>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
              }}
            >
              A Arte de se Vestir
            </h2>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-3 border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em" }}
            >
              DESCOBRIR
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Recém Chegados
          </h2>
          <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { title: "Envio Grátis", desc: "Em compras acima de R$ 500" },
              { title: "Qualidade Premium", desc: "Materiais selecionados com cuidado" },
              { title: "Troca Facilitada", desc: "30 dias para troca ou devolução" },
            ].map((item) => (
              <div key={item.title}>
                <h4
                  className="mb-2 tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-gray-500"
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