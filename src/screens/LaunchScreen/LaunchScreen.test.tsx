import { render, waitFor } from "@testing-library/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { getLaunch } from "@/api/api";

import LaunchScreen from "./LaunchScreen";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { launchId: "1" },
  }),
}));

jest.mock("@/api/api", () => ({
  getLaunch: jest.fn(() =>
    Promise.resolve({
      date_local: "2022-01-01T00:00:00.000Z",
      details: "Test details",
      id: "1",
      links: {
        flickr: {
          original: [
            {
              href: "https://www.example.com/image.jpg",
              rel: "original",
            },
          ],
        },
      },
      name: "Test Launch",
    })
  ),
}));

describe("<LaunchScreen />", () => {
  let store: ReturnType<typeof configureStore>;

  const launchSlice = createSlice({
    name: "launch",
    initialState: {
      launch: {
        date_local: "",
        details: "",
        id: 0,
        links: {
          flickr: {
            original: [],
          },
        },
        name: "",
      },
      loading: false,
      auth: {
        isAuthenticated: true,
      },
    },
    reducers: {
      setLaunchSuccess: (state, action) => {
        state.launch = action.payload;
        state.loading = false;
      },
    },
  });

  beforeEach(() => {
    store = configureStore({
      reducer: launchSlice.reducer,
    });
  });

  it("should render correctly", async () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <LaunchScreen />
      </Provider>
    );

    await waitFor(() => {
      expect(getLaunch).toHaveBeenCalledWith("1");
      expect(getByText("Test details")).toBeInTheDocument();
    });
  });
});
