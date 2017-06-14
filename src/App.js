import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./common/Header";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <Header />
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
