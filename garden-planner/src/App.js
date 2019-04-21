import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Garden from "./components/dashboard/Garden";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Garden} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
