import React from "react";
import PlantSummary from "./PlantSummary";

const PlantList = () => {
  return (
    <div data-testid="plant-list">
      <div className="project-list section">
        <PlantSummary />
        <PlantSummary />
        <PlantSummary />
      </div>
    </div>
  );
};

export default PlantList;
