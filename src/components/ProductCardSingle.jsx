import { PriceDisplay } from "./PriceDisplay";
import { AddToCartButton } from "./buttons/AddToCartButton";
import { ReviewsList } from "./ReviewsList";

export function ProductCardSingle({ product }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p>{product.description}</p>

      {/* ✅ Reusable Price Component */}
      <PriceDisplay
        price={product.price}
        discountedPrice={product.discountedPrice}
      />

      <AddToCartButton product={product} />
      <ReviewsList reviews={product.reviews} />
    </div>
  );
}
