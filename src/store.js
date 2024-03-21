import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./reducers/indexReducer";
import creaturesReducer from "./reducers/creaturesReducer";

const store = configureStore({
  reducer: {
    imageIndex: indexReducer,
    creatures: creaturesReducer,
  },
});

export default store;
