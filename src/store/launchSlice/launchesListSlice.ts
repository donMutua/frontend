import { createSlice } from "@reduxjs/toolkit";
import { Launch } from "@/interfaces/Launch";

interface LaunchesListState {
  launches: Launch[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: LaunchesListState = {
  launches: [],
  loading: false,
  error: null,
};

const launchesListSlice = createSlice({
  name: "launchesList",
  initialState,
  reducers: {
    setLaunchesListStart: (state) => {
      state.loading = true;
    },
    setLaunchesListSuccess: (state, action) => {
      state.loading = false;
      state.launches = action.payload;
    },
    setLaunchesListError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setLaunchesListStart,
  setLaunchesListSuccess,
  setLaunchesListError,
} = launchesListSlice.actions;
export default launchesListSlice.reducer;
