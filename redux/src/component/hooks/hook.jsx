import { useDispatch,useSelector } from "react-redux";

// ✅ Ab direct ye hooks export kar do (custom hooks ki zarurat nahi)
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;