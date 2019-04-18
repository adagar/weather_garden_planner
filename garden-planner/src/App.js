import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Garden Planner</h1>
          <h2>Looks like rain</h2>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
