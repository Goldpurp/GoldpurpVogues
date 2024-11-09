import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  quantity: number; 
}

interface ShippingDetails {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface CheckoutState {
  items: CheckoutItem[];
  shippingDetails: ShippingDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: CheckoutState = {
  items: [],
  shippingDetails: null,
  loading: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addItemToCheckout: (state, action: PayloadAction<CheckoutItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItemFromCheckout: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCheckout: (state) => {
      state.items = [];
      state.shippingDetails = null;
    },
    setShippingDetails: (state, action: PayloadAction<ShippingDetails>) => {
      state.shippingDetails = action.payload;
    },
    fetchCheckoutStart: (state) => {
      state.loading = true;
    },
    fetchCheckoutSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    fetchCheckoutFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addItemToCheckout,
  removeItemFromCheckout,
  clearCheckout,
  setShippingDetails,
  fetchCheckoutStart,
  fetchCheckoutSuccess,
  fetchCheckoutFailure,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;