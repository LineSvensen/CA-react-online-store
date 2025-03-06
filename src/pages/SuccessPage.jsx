import { useEffect } from "react";
import { useCart } from "../stores/cartStore";
import { Link } from "react-router-dom";

export function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-center p-8">
      <h1 className="text-3xl font-bold text-green-600">
        Purchase Successful! 🎉
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        Thank you for your purchase! Your order has been processed successfully.
      </p>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
