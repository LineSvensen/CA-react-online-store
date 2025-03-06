import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],

      // ✅ Add item to cart (or increment quantity if it exists)
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }
        }),

      // ✅ Remove a product completely
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      // ✅ Decrease quantity (or remove if quantity is 1)
      decrementItem: (productId) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === productId);

          if (!existingItem) return { cart: state.cart };

          if (existingItem.quantity > 1) {
            return {
              cart: state.cart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          } else {
            return {
              cart: state.cart.filter((item) => item.id !== productId),
            };
          }
        }),

      // ✅ Clear the cart
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
