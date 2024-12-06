import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/landpage/App";
import { Reset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preload" href="./assets/images/VRwithBorder/VRgirl.webp" />
    </Helmet>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
