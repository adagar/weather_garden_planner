// highlight{8,10}
import React from "react";
import { render, waitForElement } from "react-testing-library";
import Garden from "./Garden";

it("The garden contains notifications", async () => {
  const { getByText } = render(<Garden />);
  await waitForElement(() => getByText(/Notifications/i));
});

it("The garden contains plant list", async () => {
  const { getByText } = render(<Garden />);
  await waitForElement(() => getByText(/Plant 1/i));
});
