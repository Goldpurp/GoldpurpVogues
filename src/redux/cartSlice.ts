import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "./productInterface";
interface CartState {
  items: ProductInterface[];
  count: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductInterface & { selectedColor?: string; selectedSize?: string }>) {
      const existingItem = state.items.find(item => item.id === action.payload.id &&
        item.selectedColor === action.payload.selectedColor && 
        item.selectedSize === action.payload.selectedSize);
        
      if (!existingItem) {
        state.items.push({ 
          ...action.payload, 
          total: action.payload.price * action.payload.quantity
        });
      }
      state.count = state.items.reduce((sum, item) => sum + item.total, 0);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.count -= itemToRemove.total;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.total = item.price * item.quantity;
      }
    },

    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.total = item.price * item.quantity;
      }
    },

    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.total = item.price * item.quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.count = 0;
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
