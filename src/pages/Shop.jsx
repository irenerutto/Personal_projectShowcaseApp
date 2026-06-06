import { useState } from "react";
import useProducts from "../hooks/useProducts";
import SearchBar from "../components/SearchBar";

function Shop() {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");

  if (loading) return <p>Loading products...</p>;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Shop</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Origin: {product.origin}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;