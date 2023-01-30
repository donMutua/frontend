import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LaunchesScreen from "./LauncheListScreen";

const mockStore = configureStore();
const store = mockStore({
  launches: {
    data: [],
    isLoading: false,
    error: null,
  },
});

describe("LaunchesScreen", () => {
  it("should render the component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LaunchesScreen />
      </Provider>
    );

    expect(getByTestId("launches-screen")).toBeInTheDocument();
  });

  it("should dispatch an action on button click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LaunchesScreen />
      </Provider>
    );

    fireEvent.click(getByTestId("load-launches-button"));

    expect(store.getActions()).toHaveLength(1);
    expect(store.getActions()[0].type).toEqual("FETCH_LAUNCHES");
  });
});

export {};
