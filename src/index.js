import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const themeX = createMuiTheme({
  palette: {
    type: "dark",
    grey: {
      800: "#000000", // overrides failed
      900: "#121212" // overrides success
    }
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>

      <App />

    ,
  </React.StrictMode>,
  rootElement
);
