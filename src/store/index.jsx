// Create the centralize store

import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./MenuSlice/MenuSlice";

const store = configureStore({
  reducer: {
    side_menu: menuSlice, //name of first slice (sidebar)
  },
});

export default store;
