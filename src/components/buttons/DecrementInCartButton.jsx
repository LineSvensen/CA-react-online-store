import { useCart } from "../../stores/cartStore";
import styles from "../CSS/buttonStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export function DecrementButton({ productId }) {
  const decrementItem = useCart((state) => state.decrementItem);

  return (
    <button
      onClick={() => decrementItem(productId)}
      className={`${styles.descrete} px-2 py-1 rounded`}
    >
      <FontAwesomeIcon icon={faMinus} />
    </button>
  );
}
