import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsDatas } from "./productData";

export interface Color {
  name: string;
  value: string;
}

export interface ProductInterface {
  id: number;
  label: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  colors: Color[];
  sizes: string[];
  discount: number;
  details: string[];
  src: string[];
  total: number;
  selectedColor?: string;
  selectedSize?: string;
  category?: string;
  collection?: string;
  subCategory?: string;
  rating: number;
  reviews: number;
}

interface ProductState {
  products: ProductInterface[];
  filteredProducts: ProductInterface[];
  selectedCategory: string | null;
  selectedSubCategory: string | null;
  selectedCollection: string | null;
  searchTerm: string;
}

const initialState: ProductState = {
  products: productsDatas,
  filteredProducts: productsDatas,
  selectedCategory: null,
  selectedSubCategory: null,
  selectedCollection: null,
  searchTerm: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductInterface[]>) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.category?.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterBySubCategory: (
      state,
      action: PayloadAction<{ category: string; subCategory: string }>
    ) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.category === action.payload.category &&
          product.subCategory === action.payload.subCategory
      );
    },
    filterByCollection(state, action: PayloadAction<string>) {
      state.selectedCollection = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.collection?.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterBySearch: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      state.filteredProducts = state.products.filter(
        (product) =>
          product.label.toLowerCase().includes(searchTerm) ||
          product.category?.toLowerCase().includes(searchTerm) ||
          product.subCategory?.toLowerCase().includes(searchTerm) ||
          product.collection?.toLowerCase().includes(searchTerm)
      );
    },
    filterByPriceRange(state, action: PayloadAction<{ min: number; max: number }>) {
      const { min, max } = action.payload;
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    },
    filterByColor(state, action: PayloadAction<string>) {
      const color = action.payload.toLowerCase();
      state.filteredProducts = state.filteredProducts.filter((product) =>
        product.colors.some((c) => c.name.toLowerCase() === color)
      );
    },
    filterByDiscount(state) {
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product.discount > 0
      );
    },
    clearFilters(state) {
      state.selectedCategory = null;
      state.selectedCollection = null;
      state.searchTerm = "";
      state.filteredProducts = state.products;
    },
  },
});

export const {
  setProducts,
  filterByCategory,
  filterBySubCategory,
  filterByCollection,
  filterBySearch,
  filterByPriceRange,
  filterByColor,
  filterByDiscount,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;
