import { configureStore } from "@reduxjs/toolkit";
import NameReducer from "../slice/name.jsx";

export const Store = configureStore({
  reducer: {
    User: NameReducer,
  },
});
