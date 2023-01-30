import { createSlice } from "@reduxjs/toolkit";
import { NotificationState } from "../../interfaces/Launch";

const initialState: NotificationState = {
  message: "",
  isVisible: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    hideNotification: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
