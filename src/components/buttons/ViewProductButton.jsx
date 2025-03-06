import { Link } from "react-router-dom";
import styles from "../CSS/buttonStyles.module.css";

export function ViewProductButton({ productId }) {
  return (
    <Link
      to={`/product/${productId}`}
      className={`${styles.neutral} ${styles.buttonBase} px-4 py-2 mt-2 rounded block text-center`}
    >
      View Product
    </Link>
  );
}
