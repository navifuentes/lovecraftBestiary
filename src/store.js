import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./reducers/indexReducer";

const store = configureStore({
  reducer: {
    imageIndex: indexReducer,
  },
});

export default store;
