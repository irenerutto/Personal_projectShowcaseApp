import { useState, useRef, useEffect } from "react";
import useProducts from "../hooks/useProducts";

function AddProduct() {
  const { products, setProducts } = useProducts();

  const [form, setForm] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...form,
      price: Number(form.price),
    };

    // sends new product to backend and updates global state
    const API_URL = import.meta.env.DEV
      ? "http://localhost:3001"
      : "https://coffee-api-v9mq.onrender.com";

    fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]);
      });

    // reset form after successful submission
    setForm({
      name: "",
      description: "",
      origin: "",
      price: "",
    });
  };

  return (
    <div>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="origin" placeholder="Origin" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;