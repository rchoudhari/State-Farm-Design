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

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/gettingstarted" component={gettingstarted} />
      </Router>
    );
  }
}
export default App;
