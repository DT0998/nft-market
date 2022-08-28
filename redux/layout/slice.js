import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./Menu/slice";
import mywalletReducer from "./MyWallet/slice";
const reducer = combineReducers({
  menu: menuReducer,
  mywallet: mywalletReducer,
});

export default reducer;
