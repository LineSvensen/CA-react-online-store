import { useCart } from "../../stores/cartStore";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/buttonStyles.module.css";

export function CheckoutButton() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    clearCart(); // ✅ Clears the cart before navigating
    navigate("/success"); // ✅ Redirect to success page
  };

  return (
    <button
      onClick={handleCheckout}
      className={`${styles.positive} ${styles.buttonBase} text-md px-8 py-2 ml-4 rounded`}
    >
      Checkout
    </button>
  );
}
