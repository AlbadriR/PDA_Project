import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    theme={{ colorScheme: "dark" }}
    withGlobalStyles
    withNormalizeCSS
  >
    <Router>
      <App />
    </Router>
  </MantineProvider>
);
