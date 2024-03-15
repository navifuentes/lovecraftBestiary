import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndex(state, action) {
      return action.payload;
    },
  },
});

export const { setIndex } = indexSlice.actions;

export const setImageIndex = (indexNumber) => {
  return (dispatch) => {
    dispatch(setIndex(indexNumber));
  };
};

export default indexSlice.reducer;
