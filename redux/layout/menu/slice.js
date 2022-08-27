import { createAction, createSlice } from "@reduxjs/toolkit";
import storage from "../../../config/store/storage";
import { persistReducer } from "redux-persist";
// action toggleMenu
export const toggleMenu = createAction("menu/toggleMenu");

const slice = createSlice({
  name: "menu",
  initialState: {
    toggle: false,
  },
  reducers: {
    // add sync reducer action from this slice
  },
  extraReducers: {
    // add async and sync reducer action from other slice
    [toggleMenu]: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

// root config persist
const persistConfig = {
  key: "menu",
  storage,
  whitelist: [],
};
export const sidebarActions = slice.actions;
export const selectorToggleMenu = (state) => state.layout.menu.toggle;
// reducer persist
export default persistReducer(persistConfig, slice.reducer);
