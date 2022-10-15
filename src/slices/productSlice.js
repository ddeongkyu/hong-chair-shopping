import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../db/data.json";
export const getProducts = createAsyncThunk("getProduct", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return data.data;
});

const initialState = {
  filter: "All",
  shoppingCart: [],
  selectedColor: "",
  isLoading: false,
  searchedProducts: [],
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload;
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    setSearchedProducts: (state, action) => {
      state.searchedProducts = action.payload;
    },
  },

  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setFilter,
  setShoppingCart,
  setSelectedColor,
  setSearchedProducts,
} = productSlice.actions;

export default productSlice.reducer;
