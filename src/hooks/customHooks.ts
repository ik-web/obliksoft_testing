import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "./../store/index";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
