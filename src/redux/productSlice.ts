import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface } from './productInterface';
import { productsDatas } from './datas';

interface ProductState {
  items: ProductInterface[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: productsDatas, 
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action: PayloadAction<ProductInterface[]>) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;
export default productSlice.reducer;
