import { useEffect } from "react";
import { useCart } from "../stores/cartStore";
import styles from "../components/CSS/buttonStyles.module.css";
import { Link } from "react-router-dom";

export function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-center p-8">
      <h1 className="text-3xl font-bold text-green-600">
        Purchase Successful! 🎉
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        Thank you for your purchase! Your order has been processed successfully.
      </p>
      <Link
        to="/"
        className={`${styles.buttonBase} ${styles.neutral} mt-4 inline-block px-4 py-2  `}
      >
        Continue Shopping
      </Link>
    </div>
  );
}
