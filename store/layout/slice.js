import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menu/slice";
const reducer = combineReducers({
  menu: menuReducer,
});

export default reducer;
