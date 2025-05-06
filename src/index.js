import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeWrapper from "./context/themecontext"; // ✅ Default import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeWrapper>
);

reportWebVitals();
