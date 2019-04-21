// highlight{8,10}
import React from "react";
import { render, waitForElement } from "react-testing-library";
import App from "./App";

it("renders welcome message", async () => {
  const { getByText } = render(<App />);
  await waitForElement(() => getByText(/Garden Planner/i));
});
