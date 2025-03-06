import { useParams } from "react-router-dom";
import { useFetchSingleProduct } from "../hooks/useFetchSingleProduct";
import { ProductCardSingle } from "../components/ProductCardSingle.jsx";

export function SingleProductPage() {
  const { id } = useParams(); // ✅ Get product ID from URL
  const { product, loading, error } = useFetchSingleProduct(id); // ✅ Fetch product

  if (loading) return <p>Loading product...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-red-500">Product not found</p>;

  return <ProductCardSingle product={product} />;
}

