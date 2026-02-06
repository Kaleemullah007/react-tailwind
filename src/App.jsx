import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { DashboardLayout } from "./layouts/DashboardLayout.jsx";
import { PublicRoutes } from "./routes/PublicRoutes.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />} >
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      </Route>
    </Routes>
  );
}

export default App;
