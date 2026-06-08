import { useEffect, useState } from "react";

export default function useProducts() {
   // Stores all products fetched from the API
  const [products, setProducts] = useState([]);

  // Tracks loading state while data is being fetched
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localURL = "http://localhost:3001/products";
    const prodURL = "https://coffee-api-v9mq.onrender.com/products";
 // Try local JSON server first
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
         // Fallback to deployed API if local server is unavailable
        fetch(prodURL)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setLoading(false);
          })
          .catch(() => {
            // If both requests fail, return an empty array
            setProducts([]);
            setLoading(false);
          });
      });
  }, []);

  return { products, setProducts, loading };
}