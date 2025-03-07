import { useState } from "react";
import styles from "./CSS/borderStyles.module.css";

export function SortDropdown({ setSortOption }) {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    setSortOption(value);
  };

  return (
    <div className="flex flex-row gap-2 text-sm mt-2">
      <label htmlFor="sort" className="font-semibold text-gray-700 p-2">
        Sort by:
      </label>
      <select
        id="sort"
        value={selected}
        onChange={handleChange}
        className={`${styles.dropdown} p-2 cursor-pointer`}
      >
        <option value="">All products</option>
        <option value="low-to-high">Price: Low to High</option>{" "}
        <option value="high-to-low">Price: High to Low</option>{" "}
        <option value="on-sale">On Sale</option>
      </select>
    </div>
  );
}
