import { Link } from "react-router-dom";
import styles from "../CSS/buttonStyles.module.css";

export function ViewProductButton({ productId }) {
  // ✅ Accept productId as prop
  return (
    <Link
      to={`/product/${productId}`} // ✅ Use productId prop
      className={`${styles.neutral} ${styles.buttonBase} px-4 py-2 mt-2 rounded block text-center`}
    >
      View Product
    </Link>
  );
}
