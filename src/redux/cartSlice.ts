import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "./productSlice";

interface CartState {
  items: ProductInterface[];
  count: number; // Total number of items in the cart
  totalWithoutDiscount: number; // Total price before applying any discount
  finalTotal: number; // Total price after applying discounts
}

const initialState: CartState = {
  items: [],
  count: 0,
  totalWithoutDiscount: 0,
  finalTotal: 0,
};

const DISCOUNT_THRESHOLD = 5; // Minimum number of items for the discount to apply
const DISCOUNT_RATE = 0.05; // 5% discount

const calculateTotals = (items: ProductInterface[]) => {
  const totalWithoutDiscount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const finalTotal =
    totalItems >= DISCOUNT_THRESHOLD
      ? totalWithoutDiscount - totalWithoutDiscount * DISCOUNT_RATE
      : totalWithoutDiscount;

  return {
    totalWithoutDiscount,
    finalTotal,
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart
    addToCart(
      state,
      action: PayloadAction<ProductInterface & { selectedColor?: string; selectedSize?: string }>
    ) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize
      );

      if (!existingItem) {
        state.items.push({
          ...action.payload,
          total: action.payload.price * action.payload.quantity,
        });
      }

      const { totalWithoutDiscount, finalTotal } = calculateTotals(state.items);
      state.totalWithoutDiscount = totalWithoutDiscount;
      state.finalTotal = finalTotal;
      state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Remove item from the cart
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);

      const { totalWithoutDiscount, finalTotal } = calculateTotals(state.items);
      state.totalWithoutDiscount = totalWithoutDiscount;
      state.finalTotal = finalTotal;
      state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Update item quantity
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.total = item.price * item.quantity;
      }

      const { totalWithoutDiscount, finalTotal } = calculateTotals(state.items);
      state.totalWithoutDiscount = totalWithoutDiscount;
      state.finalTotal = finalTotal;
      state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Increment item quantity
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++; // Increment the quantity by 1
        item.total = item.price * item.quantity; // Recalculate the total
      }

      const { totalWithoutDiscount, finalTotal } = calculateTotals(state.items);
      state.totalWithoutDiscount = totalWithoutDiscount;
      state.finalTotal = finalTotal;
      state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Decrement item quantity
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--; // Decrement the quantity by 1, ensuring it doesn't go below 1
        item.total = item.price * item.quantity; // Recalculate the total
      }

      const { totalWithoutDiscount, finalTotal } = calculateTotals(state.items);
      state.totalWithoutDiscount = totalWithoutDiscount;
      state.finalTotal = finalTotal;
      state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Clear all items from the cart
    clearCart(state) {
      state.items = [];
      state.count = 0;
      state.totalWithoutDiscount = 0;
      state.finalTotal = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
