import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
};

const menuSlice = createSlice({
  name: "auth_menu",
  initialState,
  reducers: {
    dynamic_menu_bar: (state, action) => {
      state.role = action.payload;
    },
  },
});


export const {dynamic_menu_bar} = menuSlice.actions;
export default menuSlice.reducer