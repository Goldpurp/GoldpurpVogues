import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WishlistItem {
  id: number;
  src: string;
  label: string;
  price: number;
  oldPrice: number;
  bonus: string;
  description: string;
  quantity: number;
  total: number;
}

interface WishlistState {
  items: WishlistItem[];
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
  
    toggleWishlistItem: (state, action: PayloadAction<WishlistItem>) => {
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