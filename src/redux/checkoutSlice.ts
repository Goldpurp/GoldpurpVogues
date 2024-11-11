import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillingInfo {
  email: string;
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

interface ShippingInfo {
  fullName: string;
  address: string;
  phoneNumber: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CheckoutState {
  billingInfo: BillingInfo;
  shippingInfo: ShippingInfo;
  useShippingAsBilling: boolean;
  selectedShipping: "pickUp" | "delivery";
}

const initialState: CheckoutState = {
  billingInfo: {
    email: "",
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  },
  shippingInfo: {
    fullName: "",
    address: "",
    phoneNumber: "",
    city: "",
    state: "",
    zipCode: "",
  },
  useShippingAsBilling: true,
  selectedShipping: "delivery",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setBillingInfo(state, action: PayloadAction<BillingInfo>) {
      state.billingInfo = action.payload;
    },
    setShippingInfo(state, action: PayloadAction<ShippingInfo>) {
      state.shippingInfo = action.payload;
    },
    setUseShippingAsBilling(state, action: PayloadAction<boolean>) {
      state.useShippingAsBilling = action.payload;
    },
    setSelectedShipping(state, action: PayloadAction<"pickUp" | "delivery">) {
      state.selectedShipping = action.payload;
    },
    resetCheckout(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setBillingInfo,
  setShippingInfo,
  setUseShippingAsBilling,
  setSelectedShipping,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
