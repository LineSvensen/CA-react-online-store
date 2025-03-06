import { useFetchProducts } from "../hooks/useFetchProducts";
import { SearchBar } from "../components/Search";
import { ProductCard } from "../components/ProductCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import headingsStyles from "../components/CSS/headingsStyles.module.css";
import { Loader } from "../components/Loader";

export function HomePage() {
  const { products, loading, error } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);

  if (loading) return <Loader />;
  console.log("Loading state:", loading);
  if (error) return <p className="text-red-500">{error}</p>;

  const resetSearch = () => {
    setFilteredProducts([]);
    setSearchTriggered(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
        setSearchTriggered={setSearchTriggered}
      />

      {searchTriggered && filteredProducts.length === 0 && (
        <p className="text-gray-600 text-center mt-4 font-bold">
          No such product was found :/
        </p>
      )}

      {searchTriggered && (
        <button
          onClick={resetSearch}
          className="text-lg font-bold mt-4 text-blue-500 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Show All Products
        </button>
      )}
      <h1
        className={`${headingsStyles.h1} ${
          searchTriggered && filteredProducts.length === 0 ? "hidden" : ""
        }`}
      >
        Welcome to the world's greatest online store!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {(searchTriggered ? filteredProducts : products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
