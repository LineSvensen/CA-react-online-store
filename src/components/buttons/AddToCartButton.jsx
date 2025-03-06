import { useState } from "react";
import { useCart } from "../../stores/cartStore";
import styles from "../CSS/buttonStyles.module.css";

export function AddToCartButton({ product }) {
  const addToCart = useCart((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);

    // Reset back to "Add to Cart" after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        styles.buttonBase
      } mt-4 rounded transition-all duration-300 ${
        added ? styles.added : styles.positive
      }`}
    >
      {added ? "Item Added!" : "Add to Cart"}
    </button>
  );
}
