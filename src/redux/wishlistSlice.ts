import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface } from './productSlice';
// import { ProductInterface } from './productInterface';

interface WishlistState {
  items: ProductInterface[];
  loading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  items: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Toggle the item in the wishlist
    toggleWishlistItem: (state, action: PayloadAction<ProductInterface>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        // Remove item if it exists
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        // Add item if it does not exist
        state.items.push(action.payload);
      }
    },
    // Remove a specific item from the wishlist
    removeWishlistItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Clear the entire wishlist
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  toggleWishlistItem,
  removeWishlistItem,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
