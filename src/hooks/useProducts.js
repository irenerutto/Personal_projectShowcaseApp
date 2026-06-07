import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localURL = "http://localhost:3001/products";
    const prodURL = "https://coffee-api-v9mq.onrender.com/products";

    fetch(localURL)
      .then((res) => {
        if (!res.ok) throw new Error("Local server not running");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        fetch(prodURL)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setLoading(false);
          })
          .catch(() => {
            setProducts([]);
            setLoading(false);
          });
      });
  }, []);

  return { products, setProducts, loading };
}