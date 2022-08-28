import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "./storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import layoutReducer from "../../redux/layout/slice";
import featureReducer from "../../redux/feature/slice";
// config nextjs redux wrapper
import { createWrapper } from "next-redux-wrapper";

// root config persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

// reducer toolkit
// add more reducers
const reducer = combineReducers({
  layout: layoutReducer,
  feature: featureReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

const persistor = persistStore(store());
export { persistor };
export const wrapper = createWrapper(store);
