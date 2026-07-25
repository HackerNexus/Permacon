import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

import Login from "./admin/login";
import Layout from "./admin/layout";
import Dashboard from "./admin/dashboard";
import Bookings from "./admin/bookings";
import Testimonials from "./admin/testimonials";
import Settings from "./admin/settings";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ==========================
            PUBLIC WEBSITE
        ========================== */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* ==========================
            ADMIN LOGIN
        ========================== */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* ==========================
            ADMIN DASHBOARD
        ========================== */}

        <Route path="/admin/dashboard" element={<Layout />}>

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="bookings"
            element={<Bookings />}
          />

          <Route
            path="testimonials"
            element={<Testimonials />}
          />
          <Route path="settings" element={<Settings />} 
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;