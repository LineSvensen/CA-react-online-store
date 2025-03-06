import { useState, useEffect } from "react";

const API_URL = "https://v2.api.noroff.dev/online-shop";

export function useFetchProducts() {
  const [products, setProducts] = useState([]); // ✅ Store products
  const [loading, setLoading] = useState(true); // ✅ Show loading state
  const [error, setError] = useState(null); // ✅ Handle errors

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.data); // ✅ The actual products are inside `data.data`
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // ✅ Stop loading after API call
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
