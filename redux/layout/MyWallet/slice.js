import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storage from "../../../config/store/storage";
import { persistReducer } from "redux-persist";
// action toggleMenu

export const loginMetamask = createAsyncThunk("wallet/connect", async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  return accounts[0];
});

const slice = createSlice({
  name: "myWallet",
  initialState: {
    account: [],
  },
  reducers: {
    // add sync reducer action from this slice
  },
  extraReducers: {
    // add async and sync reducer action from other slice
    [loginMetamask.fulfilled]: (state, action) => {
      state.account = action.payload;
    },
  },
});

// root config persist
const persistConfig = {
  key: "myWallet",
  storage,
  whitelist: [],
};
export const authActions = slice.actions;
export const selectorAccounts = (state) => state.layout.mywallet.account;
// reducer persist
export default persistReducer(persistConfig, slice.reducer);

