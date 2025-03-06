import { useParams } from "react-router-dom";
import { useFetchSingleProduct } from "../hooks/useFetchSingleProduct";
import { Loader } from "../components/Loader";
import { ProductCardSingle } from "../components/ProductCardSingle";

export function SingleProductPage() {
  const { id } = useParams();
  const { product, loading, error } = useFetchSingleProduct(id);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-red-500">Product not found</p>;

  return <ProductCardSingle product={product} />;
}
