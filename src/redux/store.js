import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import timeReducer from "./slices/timeSlice";

export default configureStore({
  reducer: {
    order: orderReducer,
    time: timeReducer,
  },
});
