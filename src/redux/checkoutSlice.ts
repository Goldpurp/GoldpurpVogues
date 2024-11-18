import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "./productSlice";

interface CheckoutItem extends ProductInterface {
  checkoutQuantity: number;
}

interface CheckoutState {
  items: CheckoutItem[];
  totalPrice: number;
}

const initialState: CheckoutState = {
  items: [],
  totalPrice: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addItemToCheckout(state, action: PayloadAction<{ product: ProductInterface; quantity: number }>) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.checkoutQuantity += quantity;
      } else {
        state.items.push({ ...product, checkoutQuantity: quantity });
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.checkoutQuantity,
        0
      );
    },
    removeItemFromCheckout(state, action: PayloadAction<number>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.checkoutQuantity,
        0
      );
    },
    updateCheckoutQuantity(state, action: PayloadAction<{ productId: number; quantity: number }>) {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === productId);

      if (item) {
        item.checkoutQuantity = quantity;
        if (item.checkoutQuantity <= 0) {
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.checkoutQuantity,
        0
      );
    },
    clearCheckout(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCheckout,
  removeItemFromCheckout,
  updateCheckoutQuantity,
  clearCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
