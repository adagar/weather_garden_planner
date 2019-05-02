import React from "react";

const PlantDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Plant {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            nostrum natus recusandae provident ducimus eius minus nesciunt,
            blanditiis in assumenda facilis illum similique non et ex reiciendis
            impedit delectus. Deserunt!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          Planted on June 5th
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
