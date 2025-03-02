import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowsweRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowsweRouter>
      <App />
    </BrowsweRouter>
  </StrictMode>
);
