import { Link } from "react-router";
import { Product } from "../data/products";
import { Heart } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EDEB]">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          {/* Elegant overlay gradient on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/25 via-transparent to-[#B76E79]/5 transition-opacity duration-700"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
          {product.isNew && (
            <span
              className="absolute top-4 left-4 px-3 py-1.5 bg-[#B76E79] text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                fontWeight: 500,
              }}
            >
              NOVO
            </span>
          )}
          {product.isSale && (
            <span
              className="absolute top-4 left-4 px-3 py-1.5 bg-[#9E5A64] text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                fontWeight: 500,
              }}
            >
              SALE
            </span>
          )}
          {/* Quick view overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-[#1A1A1A]/80 backdrop-blur-sm py-3.5 text-center transition-all duration-400"
            style={{
              transform: isHovered ? "translateY(0)" : "translateY(100%)",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <span
              className="text-[0.65rem] tracking-[0.25em] uppercase text-white"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Ver Produto
            </span>
          </div>
        </div>
      </Link>

      {/* Wishlist */}
      <button
        className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          setLiked(!liked);
        }}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${liked ? "fill-[#B76E79] text-[#B76E79]" : "text-[#8B7D7A]"}`}
        />
      </button>

      <div className="mt-4 space-y-1.5">
        {/* Brand name */}
        <p
          className="text-[#B76E79] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", fontWeight: 500 }}
        >
          Maison
        </p>
        <h3
          className="text-[#1A1A1A] group-hover:text-[#9E5A64] transition-colors duration-300"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2.5 pt-0.5">
          <span
            className="text-[#B76E79]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span
              className="text-[#8B7D7A] line-through"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}
            >
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {/* Color dots */}
        <div className="flex gap-1.5 pt-1.5">
          {product.colors.map((color) => (
            <div
              key={color.name}
              className="w-3 h-3 rounded-full border border-[#E8CFC9]"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
