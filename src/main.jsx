import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainRoutes from "./MainRoutes"; // <-- use the routing file
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRoutes />
  </StrictMode>
);