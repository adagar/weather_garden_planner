import React, { Component } from "react";
import Notifications from "./Notifications";
import PlantList from "../plants/PlantList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <PlantList />
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
