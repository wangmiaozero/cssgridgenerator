import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./slices/gridSlice";

const store = configureStore({
  reducer: {
    grid: gridReducer
  }
});

export default store;