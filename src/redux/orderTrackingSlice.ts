import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  status: string; 
  items: { id: string; name: string; quantity: number; price: number }[];
  trackingNumber?: string;
  estimatedDeliveryDate?: string; 
}

interface OrderTrackingState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderTrackingState = {
  orders: [],
  loading: false,
  error: null,
};

const orderTrackingSlice = createSlice({
  name: 'orderTracking',
  initialState,
  reducers: {
    fetchOrdersStart: (state) => {
      state.loading = true;
      state.error = null; 
    },
    fetchOrdersSuccess: (state, action: PayloadAction<Order[]>) => {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateOrderStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const order = state.orders.find(order => order.id === action.payload.id);
      if (order) {
        order.status = action.payload.status; 
      }
    },
    clearOrders: (state) => {
      state.orders = [];
      state.loading = false;
      state.error = null; 
    },
  },
});

export const {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  updateOrderStatus,
  clearOrders,
} = orderTrackingSlice.actions;

export default orderTrackingSlice.reducer;