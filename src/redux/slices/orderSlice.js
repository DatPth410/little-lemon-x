import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    value: undefined,
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add } = orderSlice.actions;

export default orderSlice.reducer;
