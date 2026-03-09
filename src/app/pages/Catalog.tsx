import { useState } from "react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[#f8f7f5] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Coleção Completa
          </h1>
          <p
            className="text-gray-500 mt-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
          >
            {sortedProducts.length} {sortedProducts.length === 1 ? "produto" : "produtos"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <button
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            FILTROS
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-gray-600 focus:outline-none cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", letterSpacing: "0.05em" }}
            >
              <option value="relevance">Relevância</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="name">Nome A-Z</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="mb-8 pb-6 border-b border-gray-100">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 transition-all ${
                    selectedCategory === cat
                      ? "bg-black text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Always show categories as tabs on desktop */}
        <div className="hidden sm:flex gap-6 mb-10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pb-2 transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "text-black border-b border-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p
              className="text-gray-400"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
            >
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
