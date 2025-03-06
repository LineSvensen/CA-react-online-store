import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function useFetchSingleProduct(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch(`${API_URL}/${productId}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSingleProduct();
  }, [productId]);

  return { product, loading, error };
}
