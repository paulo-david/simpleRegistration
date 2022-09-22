import store from "./store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
