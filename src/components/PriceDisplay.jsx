import styles from "./CSS/buttonStyles.module.css";

export function PriceDisplay({ price, discountedPrice }) {
  const isDiscounted = discountedPrice < price;
  const discountPercentage = isDiscounted
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <div className="flex flex-col sm:flex-row items-start gap-2">
      <div className="flex items-center gap-2">
        <p
          style={{
            color: isDiscounted ? "var(--primary-red)" : "black",
          }}
          className="font-bold text-lg"
        >
          ${discountedPrice}
        </p>

        {isDiscounted && (
          <span className={`${styles["dark-grey"]} line-through`}>
            ${price}
          </span>
        )}
      </div>

      {isDiscounted && (
        <div
          className={`${styles.warning} px-2 py-1 rounded text-center text-xs font-bold flex items-center`}
        >
          {discountPercentage}% OFF
        </div>
      )}
    </div>
  );
}
