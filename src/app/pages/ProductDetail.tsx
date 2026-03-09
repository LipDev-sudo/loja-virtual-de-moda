import { useParams, Link } from "react-router";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Minus, Plus, Heart, ChevronRight, Check } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { toast, Toaster } from "sonner";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p style={{ fontFamily: "'Inter', sans-serif" }}>Produto não encontrado.</p>
      </div>
    );
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

  const handleAddToCart = () => {
    if (selectedSize === null) {
      toast.error("Selecione um tamanho");
      return;
    }
    addItem(product, product.colors[selectedColor].name, product.sizes[selectedSize]);
    toast.success("Adicionado ao carrinho!");
  };

  const relatedProducts = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const showRelated = relatedProducts.length > 0 ? relatedProducts : products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/catalogo" className="hover:text-black transition-colors">Coleção</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-700">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-black" : "border-transparent"
                    }`}
                  >
                    <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <div className="sticky top-28">
              {product.isNew && (
                <span
                  className="inline-block mb-4 text-gray-500 tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}
                >
                  Novidade
                </span>
              )}
              <h1
                className="mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                }}
              >
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-gray-900"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", fontWeight: 500 }}
                >
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span
                    className="text-gray-400 line-through"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                  >
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p
                className="text-gray-600 mb-8"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.8 }}
              >
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <label
                  className="block mb-3 text-gray-900 tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                >
                  Cor: <span className="text-gray-500 normal-case tracking-normal">{product.colors[selectedColor].name}</span>
                </label>
                <div className="flex gap-2.5">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(i)}
                      className={`w-8 h-8 rounded-full relative transition-all ${
                        selectedColor === i ? "ring-2 ring-black ring-offset-2" : "ring-1 ring-gray-200"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === i && (
                        <Check className={`w-3.5 h-3.5 absolute inset-0 m-auto ${color.hex === "#1a1a1a" || color.hex === "#722f37" || color.hex === "#556b2f" ? "text-white" : "text-black"}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label
                    className="text-gray-900 tracking-[0.1em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                  >
                    Tamanho
                  </label>
                  <button
                    className="text-gray-500 underline underline-offset-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
                  >
                    Guia de tamanhos
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(i)}
                      className={`min-w-[48px] h-11 px-4 border transition-all ${
                        selectedSize === i
                          ? "bg-black text-white border-black"
                          : "border-gray-200 text-gray-700 hover:border-black"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-3 mb-6">
                <div className="flex items-center border border-gray-200">
                  <button
                    className="p-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span
                    className="w-10 text-center"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
                  >
                    {quantity}
                  </span>
                  <button
                    className="p-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white hover:bg-gray-800 transition-colors tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                >
                  Adicionar ao Carrinho
                </button>

                <button
                  onClick={() => setLiked(!liked)}
                  className="p-3 border border-gray-200 hover:border-black transition-colors"
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </button>
              </div>

              {/* Details */}
              <div className="border-t border-gray-100 pt-6">
                <h4
                  className="mb-3 tracking-[0.1em] uppercase text-gray-900"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                >
                  Detalhes do Produto
                </h4>
                <ul className="space-y-2">
                  {product.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-gray-500 flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                    >
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
              }}
            >
              Você também pode gostar
            </h2>
            <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {showRelated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
