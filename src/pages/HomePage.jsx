import { useFetchProducts } from "../hooks/useFetchProducts";
import { SearchBar } from "../components/Search";
import { ProductCard } from "../components/ProductCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import headingsStyles from "../components/CSS/headingsStyles.module.css";
import borderStyles from "../components/CSS/borderStyles.module.css";
import { Loader } from "../components/Loader";
import { SortDropdown } from "../components/SortDropdown";
import { sortProducts } from "../utils/sortProducts";

export function HomePage() {
  const { products, loading, error } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [sortOption, setSortOption] = useState("");

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  const resetSearch = () => {
    setFilteredProducts([]);
    setSearchTriggered(false);
    setSelectedSortOption(null);
  };

  const displayedProducts = searchTriggered ? filteredProducts : products;
  const sortedProducts = sortOption
    ? sortProducts(displayedProducts, sortOption)
    : displayedProducts;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
        setSearchTriggered={setSearchTriggered}
      />

      <div className="flex justify-end mt-2 mb-2">
        <SortDropdown setSortOption={setSortOption} />
      </div>

      {searchTriggered && filteredProducts.length === 0 && (
        <p className="text-gray-600 text-center mt-4 font-bold">
          No such product was found :/
        </p>
      )}

      {(searchTriggered || sortOption) && (
        <button
          onClick={resetSearch}
          className="text-lg font-bold mt-4 text-blue-500 flex items-center cursor-pointer gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Show All Products
        </button>
      )}

      {!searchTriggered || filteredProducts.length > 0 ? (
        <h1 className={`${headingsStyles.h1}`}>
          Welcome to the world's greatest online store!
        </h1>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
