import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import clientsReducer from "./clients/clientsSlice";

export const store = configureStore({
  reducer: {
    client: clientsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
