// highlight{8,10}
import React from "react";
import { render, waitForElement } from "react-testing-library";
import NavBar, { Navbar } from "./Navbar";

it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<NavBar />);

  await waitForElement(() => getByText(/Login/i));
});
