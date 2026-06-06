import { useState } from "react";
import useProducts from "../hooks/useProducts";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function Shop() {
  const { products, loading } = useProducts();
   // state for search input value
  const [search, setSearch] = useState("");

  // show loading state while fetching data
  if (loading) return <p>Loading products...</p>;

// filters products in real-time based on user search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Shop</h1>
      {/* search bar for filtering products */}
      <SearchBar search={search} setSearch={setSearch} />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Shop;