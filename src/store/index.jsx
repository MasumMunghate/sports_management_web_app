// Create the centralize store

import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./MenuSlice/MenuSlice";

const store = configureStore({
  reducer: {
    side_menu: menuSlice,
  },
});

export default store;
