import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface } from './productInterface';
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
  
    toggleWishlistItem: (state, action: PayloadAction<ProductInterface>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
    removeWishlistItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
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