import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../slices/auth/signUpSlice";
import businessSlice from "../slices/business/businessSlice";
import activitySlice from "../slices/activity/activitySlice";
export const store = configureStore({
  reducer: {
    auth: signUpSlice,
    business: businessSlice,
    activity: activitySlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
