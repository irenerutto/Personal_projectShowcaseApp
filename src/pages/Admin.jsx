import { useState } from "react";
import useProducts from "../hooks/useProducts";

function Admin() {
  const { products, setProducts } = useProducts();
  const [editId, setEditId] = useState(null);
  const [newPrice, setNewPrice] = useState("");

  // DELETE product
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((p) => p.id !== id));
  };

  // START edit
  const startEdit = (product) => {
    setEditId(product.id);
    setNewPrice(product.price);
  };

  // SAVE edit (PATCH)
  const saveEdit = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: newPrice }),
    });

    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, price: newPrice } : p
      )
    );

    setEditId(null);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>{product.description}</p>

          {/* EDIT PRICE */}
          {editId === product.id ? (
            <div>
              <input
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
              <button onClick={() => saveEdit(product.id)}>
                Save
              </button>
            </div>
          ) : (
            <p>${product.price}</p>
          )}

          <button onClick={() => startEdit(product)}>
            Edit Price
          </button>

          <button onClick={() => handleDelete(product.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;