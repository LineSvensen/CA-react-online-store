import { Link } from "react-router-dom";
import { useCart } from "../../stores/cartStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "../CSS/buttonStyles.module.css";

export function CartIconButton() {
  const { cart } = useCart();

  // Calculate total quantity of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/checkout" className="relative">
      {/* Shopping Cart Icon */}
      <FontAwesomeIcon
        icon={faShoppingCart}
        className={`${styles.cart} text-2xl`}
      />

      {/* Badge showing number of items */}
      {totalItems > 0 && (
        <span
          className={` ${styles.warning} absolute -top-2 -right-2 text-xs px-1  rounded-full `}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}
