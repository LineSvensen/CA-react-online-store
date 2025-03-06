import { useCart } from "../../stores/cartStore";
import styles from "../CSS/buttonStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function RemoveFromCartButton({ productId }) {
  const removeFromCart = useCart((state) => state.removeFromCart);

  return (
    <button
      onClick={() => removeFromCart(productId)}
      className={`${styles.descrete} cursor-pointer px-2 py-1 rounded`}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
