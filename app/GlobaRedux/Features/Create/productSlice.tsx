"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: any;
  title: string;
  price: number;
  taxes: number;
  ads: number;
  discount: number;
  count: number;
  category: string;
}

interface ProductState {
  products: Product[];
}

let initialState: ProductState;

if (typeof window !== "undefined") {
  const storedProducts = localStorage.getItem("products");
  const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
  initialState = {
    products: parsedProducts,
  };
} else {
  initialState = {
    products: [],
  };
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    deleteProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (product) => product.id != action.payload.id
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    deleteAll: (state, action: PayloadAction<Product>) => {
      state.products = [];
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    updateProduct: (state, action) => {
      const { id, title, price, taxes, ads, discount, category, count } =
        action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.title = title;
        product.price = price;
        product.taxes = taxes;
        product.ads = ads;
        product.discount = discount;
        product.category = category;
        product.count = count;
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
  },
});

export const { addProduct, deleteProduct, deleteAll, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
