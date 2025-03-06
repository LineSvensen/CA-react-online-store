import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./CSS/buttonStyles.module.css";
import borderStyles from "./CSS/borderStyles.module.css";

export function SearchBar({
  products,
  setFilteredProducts,
  setSearchTriggered,
}) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setSearchTriggered(true); // ✅ Mark that search was triggered
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowResults(false); // ✅ Hide search suggestions after clicking
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // ✅ NEW: Prevents default form submission
      handleSearch(); // ✅ NEW: Triggers search when Enter is pressed
    }
  };

  return (
    <div className="relative max-w-lg mx-auto">
      <div
        className={`flex ${borderStyles.borders} items-center overflow-hidden`}
      >
        <input
          type="text"
          placeholder="Search for products..."
          className="p-2 flex-1 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowResults(true)} // ✅ Show dropdown when typing
        />

        {/* ✅ Search Button (Hides dropdown when clicked) */}
        <button
          onClick={handleSearch}
          className={`${styles.buttonBase} ${styles.neutral}`}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* ✅ Search Suggestions (Hidden after clicking search) */}
      {query && showResults && (
        <ul className="absolute top-full left-0 w-full bg-white mt-1 rounded shadow-lg z-10">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((product) => (
              <li
                key={product.id}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setQuery(product.title);
                  setSearchTriggered(true);
                  setFilteredProducts([product]); // ✅ Only show selected product
                  setShowResults(false);
                }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="block w-full h-full p-2"
                >
                  {product.title}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
