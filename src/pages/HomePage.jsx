import { useFetchProducts } from "../hooks/useFetchProducts";
import { SearchBar } from "../components/Search";
import { ProductCard } from "../components/ProductCard";
import { useState } from "react"; // ✅ Import useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // ✅ Import this
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // ✅ Import the arrow icon
import headingsStyles from "../components/css/headingsStyles.module.css";

export function HomePage() {
  const { products, loading, error } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState([]); // ✅ Start with empty list
  const [searchTriggered, setSearchTriggered] = useState(false); // ✅ Track if search is clicked

  // ✅ Function to reset search
  const resetSearch = () => {
    setFilteredProducts([]);
    setSearchTriggered(false);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* ✅ Pass resetSearch function to SearchBar */}
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
        setSearchTriggered={setSearchTriggered}
      />

      {/* ✅ Show "No Products Found" when search is empty */}
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
      {/* ✅ Show all products by default */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {(searchTriggered ? filteredProducts : products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
