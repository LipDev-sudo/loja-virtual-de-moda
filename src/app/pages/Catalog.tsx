import { useMemo, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { categories, products } from "../data/products";

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("versatility");

  const sortedProducts = useMemo(() => {
    const filtered =
      selectedCategory === "Todas"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name, "pt-BR");
      return Number(a.id) - Number(b.id);
    });
  }, [selectedCategory, sortBy]);

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <p className="section-label">Demonstração de produto</p>
        <h1>Cápsula essencial</h1>
        <p>Oito peças demonstrativas escolhidas para multiplicar combinações.</p>
      </header>

      <div className="catalog-toolbar">
        <div className="category-tabs" role="group" aria-label="Filtrar por categoria">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <label className="sort-control">
          <span className="sr-only">Ordenar catálogo</span>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="versatility">Mais versáteis</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="name">Nome de A a Z</option>
          </select>
        </label>
      </div>

      <p className="catalog-result" aria-live="polite">
        {sortedProducts.length} {sortedProducts.length === 1 ? "peça" : "peças"}
      </p>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sortedProducts.length === 0 ? (
        <p className="empty-state">Nenhuma peça demonstrativa nesta categoria.</p>
      ) : null}
    </div>
  );
}
