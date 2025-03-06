import { PriceDisplay } from "./PriceDisplay";
import { ViewProductButton } from "./buttons/ViewProductButton";
import styles from "./CSS/cardStyles.module.css";

export function ProductCard({ product }) {
  return (
    <div className={`${styles.card}`}>
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="w-full h-40 object-cover"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>

      <PriceDisplay
        price={product.price}
        discountedPrice={product.discountedPrice}
      />

      <ViewProductButton productId={product.id} />
    </div>
  );
}
