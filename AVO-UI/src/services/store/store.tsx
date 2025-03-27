import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../slices/auth/signUpSlice";
import businessSlice from "../slices/business/businessSlice";
export const store = configureStore({
  reducer: {
    auth: signUpSlice,
    business: businessSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
