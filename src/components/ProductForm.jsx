import { useState } from "react";
import styles from "./ProductForm.module.css";

function ProductForm({ onSubmit }) {
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

    onSubmit({
      ...form,
      price: Number(form.price),
    });

    setForm({
      name: "",
      description: "",
      origin: "",
      price: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} name="name" placeholder="Name" onChange={handleChange} value={form.name} />
      <input className={styles.input} name="description" placeholder="Description" onChange={handleChange} value={form.description} />
      <input className={styles.input} name="origin" placeholder="Origin" onChange={handleChange} value={form.origin} />
      <input className={styles.input} name="price" placeholder="Price" onChange={handleChange} value={form.price} />

      <button className={styles.button} type="submit">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;