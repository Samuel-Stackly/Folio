import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Services from "../pages/Services";
import Jobs from "../pages/Jobs";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="services" element={<Services />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;