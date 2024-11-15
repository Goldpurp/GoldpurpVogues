export interface ProductInterface {
  id: number; // Unique ID for the item
  label: string; // Product name or label
  price: number; // Current price of the product
  oldPrice: number; // Original price before discount
  quantity: number; // Quantity of the product
  color: {
    // Array of colors with name and value
    name: string; // Color name (e.g., "Black")
    value: string; // Color value in hex (e.g., "#000000")
  }[]; // Array of colors for the product
  size: string[]; // Array of sizes available for the product
  discount: number; // Discount percentage (e.g., 40)
  details: string[]; // Array of promotional details
  src: string[]; // Array of image sources for the product
  total: number; // Total cost (price * quantity after discount)
  selectedColor?: string; // Selected color for the item
  selectedSize?: string; // Selected size for the item
}
