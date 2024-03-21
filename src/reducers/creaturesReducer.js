import { createSlice } from "@reduxjs/toolkit";
import { getCreaturesFromDB } from "../services/creatures";

const initialState = [];

const creatureReducer = createSlice({
  name: "creatures",
  initialState,
  reducers: {
    setCreatures(state, action) {
      return action.payload;
    },
  },
});

export const { setCreatures } = creatureReducer.actions;

export const initializeCreatures = () => {
  return async (dispatch) => {
    const data = await getCreaturesFromDB();
    const creatures = data.filter((d) => d.img.length !== 0);
    dispatch(setCreatures(creatures));
  };
};

export default creatureReducer.reducer;
