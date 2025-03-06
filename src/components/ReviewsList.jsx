import styles from "./CSS/buttonStyles.module.css";
import borderStyles from "./CSS/borderStyles.module.css";

export function ReviewsList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>; // ✅ Show message if no reviews
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Customer Reviews</h3>
      <ul className="space-y-3">
        {reviews.map((review) => (
          <li
            key={review.id}
            className={`${borderStyles.border} ${borderStyles.dark} p-3 rounded shadow`}
          >
            <p className="font-semibold">{review.username}</p>
            <p className={`${styles.rating}`}>⭐ {review.rating}/5</p>
            <p className={`${styles.rating}`}>{review.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
