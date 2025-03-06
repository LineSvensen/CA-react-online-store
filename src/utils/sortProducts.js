export function sortProducts(products, sortBy) {
  if (!products || !Array.isArray(products)) return [];

  return [...products].sort((a, b) => {
    switch (sortBy) {
      case "low-to-high":
        return a.discountedPrice - b.discountedPrice;
      case "high-to-low":
        return b.discountedPrice - a.discountedPrice;
      case "on-sale":
        return a.discountedPrice < a.price ? -1 : 1;
      default:
        return 0;
    }
  });
}
