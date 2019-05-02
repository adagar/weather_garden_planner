import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Garden from "./components/dashboard/Garden";
import PlantDetails from "./components/plants/PlantDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Garden} />
            <Route path="/plant/:id" component={PlantDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
