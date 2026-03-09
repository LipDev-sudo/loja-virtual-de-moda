import { Link } from "react-router";
import { Product } from "../data/products";
import { Heart } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {product.isNew && (
            <span
              className="absolute top-3 left-3 px-3 py-1 bg-white text-black"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em" }}
            >
              NOVO
            </span>
          )}
          {product.isSale && (
            <span
              className="absolute top-3 left-3 px-3 py-1 bg-black text-white"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em" }}
            >
              SALE
            </span>
          )}
          {/* Quick add overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 text-center transition-all duration-300"
            style={{
              transform: isHovered ? "translateY(0)" : "translateY(100%)",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase text-black"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ver Produto
            </span>
          </div>
        </div>
      </Link>

      {/* Wishlist */}
      <button
        className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        onClick={(e) => {
          e.preventDefault();
          setLiked(!liked);
        }}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`}
        />
      </button>

      <div className="mt-4 space-y-1">
        <h3
          className="text-gray-900"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className="text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
          >
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span
              className="text-gray-400 line-through"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
            >
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {/* Color dots */}
        <div className="flex gap-1.5 pt-1">
          {product.colors.map((color) => (
            <div
              key={color.name}
              className="w-3 h-3 rounded-full border border-gray-200"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
