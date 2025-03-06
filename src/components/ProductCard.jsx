import { PriceDisplay } from "./PriceDisplay";
import { ViewProductButton } from "./buttons/ViewProductButton"; // ✅ Correct Import
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

      {/* ✅ Reusable Price Component */}
      <PriceDisplay
        price={product.price}
        discountedPrice={product.discountedPrice}
      />

      <ViewProductButton productId={product.id} />
    </div>
  );
}

// import { Link } from "react-router-dom";
// import { ViewProductButton } from "./buttons/ViewProductButton"; // ✅ Correct import

// export function ProductCard({ product }) {
//   const hasDiscount = product.discountedPrice < product.price;

//   return (
//     <div className="border p-4 rounded shadow-lg">
//       <img
//         src={product.image.url}
//         alt={product.image.alt}
//         className="w-full h-40 object-cover"
//       />
//       <h2 className="text-lg font-bold">{product.title}</h2>

//       {/* ✅ Apply styles dynamically based on discount */}
//       <p className={hasDiscount ? "text-red-500 font-semibold" : "text-black"}>
//         ${product.discountedPrice}{" "}
//         {hasDiscount && (
//           <span className="line-through text-black ml-2">${product.price}</span>
//         )}
//       </p>

//       {/* ✅ Pass product.id as a prop */}
//       <ViewProductButton productId={product.id} />
//     </div>
//   );
// }
