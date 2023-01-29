import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import launchesListReducer from "./launchSlice/launchesListSlice";
import oneLaunchReducer from "./launchSlice/launchSlice";
import notificationReducer from "./notificationSlice/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    launch: oneLaunchReducer,
    launchesList: launchesListReducer,
    notification: notificationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
