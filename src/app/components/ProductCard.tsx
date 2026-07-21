import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import type { Product } from "../data/products";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function ProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="product-card">
      <div className="product-card__media">
        <Link to={`/produto/${product.id}`} aria-label={`Ver ${product.name}`}>
          <ImageWithFallback src={product.image} alt="" loading="lazy" />
        </Link>
        <button
          type="button"
          className="product-card__save"
          aria-label={`${saved ? "Remover" : "Salvar"} ${product.name}`}
          aria-pressed={saved}
          onClick={() => setSaved((current) => !current)}
        >
          <Heart aria-hidden="true" fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="product-card__content">
        <p>{product.category}</p>
        <h3>
          <Link to={`/produto/${product.id}`}>{product.name}</Link>
        </h3>
        <strong>{priceFormatter.format(product.price)}</strong>
        <span>{product.details[0]}</span>
      </div>
    </article>
  );
}
