import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import RentFinancingPage from "./components/RentFinancingPage";
import RentToOwnPage from "./components/RentToOwnPage";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rent-financing" element={<RentFinancingPage />} />
        <Route path="/rent-to-own" element={<RentToOwnPage />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;