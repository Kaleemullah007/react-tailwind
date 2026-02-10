import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { DashboardLayout } from "./layouts/DashboardLayout.jsx";
import { PublicRoutes } from "./routes/PublicRoutes.jsx";
import { Gallery } from "./pages/Gallery.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
