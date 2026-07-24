import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProductCard } from "../components/ProductCard";
import { LOOKBOOK_IMAGE, products } from "../data/products";

export function Home() {
  return (
    <div>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <h1 id="hero-title">Menos peças. Mais combinações.</h1>
          <p>
            Uma cápsula demonstrativa com modelagens versáteis, materiais descritos com clareza e
            combinações para a vida real.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/catalogo">
              Explorar a cápsula
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="text-link" to="/#combinacoes">
              Ver combinações
            </Link>
          </div>
          <ImageWithFallback
            src={products[0].image}
            alt="Camisa clara da cápsula demonstrativa Trama Clara"
            className="hero__supporting-image"
          />
        </div>
        <ImageWithFallback
          src={products[3].image}
          alt="Vestido preto da cápsula demonstrativa Trama Clara"
          className="hero__main-image"
        />
      </section>

      <section className="section section--capsule" aria-labelledby="capsule-title">
        <div className="section-heading section-heading--split">
          <div>
            <p className="section-label">A cápsula</p>
            <h2 id="capsule-title">Peças pensadas para combinar entre si.</h2>
          </div>
          <p>
            Oito itens fictícios formam uma seleção enxuta. Cada ficha explica modelagem, material
            demonstrativo, cores e tamanhos sem promessas comerciais inventadas.
          </p>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="section-action">
          <Link className="text-link" to="/catalogo">
            Ver as oito peças
          </Link>
        </div>
      </section>

      <section id="combinacoes" className="editorial-section" aria-labelledby="combinations-title">
        <ImageWithFallback
          src={LOOKBOOK_IMAGE}
          alt="Composição editorial de roupas em tons neutros"
          className="editorial-section__image"
        />
        <div className="editorial-section__content">
          <p className="section-label">Combinações</p>
          <h2 id="combinations-title">Uma base, diferentes contextos.</h2>
          <p>
            A mesma camisa pode acompanhar a calça reta no trabalho, funcionar aberta sobre o
            vestido ou criar contraste com o blazer argila. A demonstração prioriza decisões de
            compra legíveis, não volume de catálogo.
          </p>
          <Link className="button button--secondary" to="/catalogo">
            Montar uma combinação
          </Link>
        </div>
      </section>

      <section id="sobre-demo" className="section demo-section" aria-labelledby="demo-title">
        <div>
          <p className="section-label">Sobre a demo</p>
          <h2 id="demo-title">Um e-commerce funcional, com dados fictícios claros.</h2>
        </div>
        <p>
          Trama Clara demonstra catálogo, filtros, escolha de variação, persistência local da
          sacola e checkout simulado. Nenhum pedido é processado e nenhum dado é enviado.
        </p>
      </section>
    </div>
  );
}
