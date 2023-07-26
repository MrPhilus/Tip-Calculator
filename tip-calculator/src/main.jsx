import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import TipContextProvider from "./components/context/TipContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TipContextProvider>
      <App />
    </TipContextProvider>
  </React.StrictMode>
);
