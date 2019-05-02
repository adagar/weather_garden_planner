// highlight{8,10}
import React from "react";
import { render, waitForElement } from "react-testing-library";
import PlantDetails from "./PlantDetails";
import { MemoryRouter, Route } from "react-router";

const renderComponent = ({ plantId }) =>
  render(
    <MemoryRouter initialEntries={[`/plant/${plantId}`]}>
      <Route path="/plant/:id" component={PlantDetails} />
    </MemoryRouter>
  );

it("plant id appears on page", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({
    plantId: 10
  });

  await waitForElement(() => getByText(/10/i));
});

it("plant string appears on page", async () => {
  // Render new instance in every test to prevent leaking state
  const name = "Ripley";
  const { getByText } = renderComponent({
    plantId: name
  });

  await waitForElement(() => getByText(/Ripley/g));
});
