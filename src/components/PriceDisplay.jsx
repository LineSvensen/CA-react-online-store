import styles from "./CSS/buttonStyles.module.css";

export function PriceDisplay({ price, discountedPrice }) {
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100
  );

  return (
    <div className="flex flex-col sm:flex-row items-start gap-2">
      <div className="flex items-center gap-2">
        <p
          style={{ color: "var(--primary-red)" }}
          className="font-bold text-lg"
        >
          ${discountedPrice}
        </p>
        {discountedPrice < price && (
          <span className={`${styles["dark-grey"]} line-through`}>
            ${price}
          </span>
        )}
      </div>

      {discountedPrice < price && (
        <div
          className={`${styles.warning} px-2 py-1 rounded text-center text-xs font-bold flex items-center`}
        >
          {discountPercentage}% OFF
        </div>
      )}
    </div>
  );
}
