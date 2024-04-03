"use client";

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/Create/productSlice";
import productSlice from "./Features/Create/productSlice";

export interface RootState {
  product: ReturnType<typeof productReducer>;
}

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
