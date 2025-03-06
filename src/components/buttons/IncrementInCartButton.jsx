import { useCart } from "../../stores/cartStore";
import styles from "../CSS/buttonStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function IncrementButton({ productId }) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart({ id: productId })}
      className={`${styles.descrete} px-2 py-1 rounded`}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}
