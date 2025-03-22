import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DailyPage from "./pages/DailyPage";

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DailyPage />} />
      </Routes>
    </Router>
  );
}

export default Root;
