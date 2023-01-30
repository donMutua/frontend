import { createSlice } from "@reduxjs/toolkit";
import { LaunchState } from "@/interfaces/Launch";

const initialState: LaunchState = {
  launch: null,
  loading: false,
  error: null,
};

const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    setLaunchStart: (state) => {
      state.loading = true;
    },
    setLaunchSuccess: (state, action) => {
      state.loading = false;
      state.launch = action.payload;
    },
    setLaunchFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setLaunchStart, setLaunchFail, setLaunchSuccess } =
  launchSlice.actions;
export default launchSlice.reducer;
