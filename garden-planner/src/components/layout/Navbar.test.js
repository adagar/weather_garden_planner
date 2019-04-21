// highlight{8,10}
import React from "react";
import { render, waitForElement } from "react-testing-library";
import NavBar, { Navbar } from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(
    <Router>
      <NavBar />
    </Router>
  );

  await waitForElement(() => getByText(/Login/i));
});
