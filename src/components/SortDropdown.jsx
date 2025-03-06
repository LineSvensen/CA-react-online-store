import { useState } from "react";

export function SortDropdown({ setSortOption }) {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    setSortOption(value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="sort" className="font-semibold mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        value={selected}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="onSale">On Sale</option>
      </select>
    </div>
  );
}
