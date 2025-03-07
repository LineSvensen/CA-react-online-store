import { PriceDisplay } from "../components/PriceDisplay";
import { useCart } from "../stores/cartStore";
import { RemoveFromCartButton } from "../components/buttons/RemoveFromCartButton";
import { DecrementButton } from "../components/buttons/DecrementInCartButton";
import { IncrementButton } from "../components/buttons/IncrementInCartButton";
import { Link } from "react-router-dom";
import { CheckoutButton } from "../components/buttons/CheckoutButton";

export function CheckoutPage() {
  const { cart } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout Page</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap justify-between items-center border-b py-4 gap-4"
            >
              {/* ✅ Image on Left */}
              <Link to={`/product/${item.id}`} className="w-20 h-20 sm:w-auto">
                <img
                  src={item.image?.url || "/placeholder-image.jpg"}
                  alt={item.image?.alt || "Product image"}
                  className="w-20 h-20 object-cover rounded"
                />
              </Link>

              <div className="flex-1 flex flex-col items-start text-left">
                <p className="font-semibold">{item.title}</p>

                <PriceDisplay
                  price={item.price}
                  discountedPrice={item.discountedPrice}
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex gap-2">
                  <DecrementButton productId={item.id} />
                  <p className="text-lg">{item.quantity}</p>
                  <IncrementButton productId={item.id} />
                </div>
                <RemoveFromCartButton productId={item.id} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="font-bold mt-6 text-xl flex flex-col sm:flex-row justify-between items-center">
          <span>
            Total: $
            {cart
              .reduce(
                (sum, item) => sum + item.discountedPrice * item.quantity,
                0
              )
              .toFixed(2)}
          </span>
          <CheckoutButton />
        </div>
      )}
    </div>
  );
}
