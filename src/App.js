import React, { Component } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import ParticleComponent from "./pages/ParticlesComponent";

import MainPage from "./pages";
import gettingstarted from "./pages/gettingstarted";
import printing from "./pages/printing";

class App extends Component {
  render() {
    return (
      <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticleComponent />
        <div
        >
          <Route exact path="/" component={MainPage} />
          <Route exact path="/gettingstarted" component={gettingstarted} />
          <Route exact path="/printing" component={printing} />
        </div>
      </div>

      </Router>
    );
  }
}
export default App;
