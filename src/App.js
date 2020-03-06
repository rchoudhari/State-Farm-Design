import React, { Component } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import MainPage from "./pages";
import gettingstarted from "./pages/gettingstarted";
import printing from "./pages/printing";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/gettingstarted" component={gettingstarted} />
        <Route exact path="/printing" component={printing} />
      </Router>
    );
  }
}
export default App;
