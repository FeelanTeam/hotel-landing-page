import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NewsMainPage from "../pages/News/NewsMainPage";
import NotFound from "../pages/PageError/NotFound";
import MainPage from "../pages/MainPage";
import HomePage from "../pages/Home/HomePage";
import TermsAndConditions from "../pages/Terms/TermsAndConditions";
import Rooms from "../pages/Rooms/Rooms";
import NewsPage from "../pages/News/NewsPage";
import Restaurant from "../pages/Restaurant/Restaurant";
import Discounts from "../pages/Discounts/Discounts";
import Photography from "../pages/Photography/Photography";
import FacilitiesServices from "../pages/Facilities-Services/FacilitiesServices";
import Transport from "../pages/Transport/Transport";
import Contact from "../pages/Contact/Contact";

const RouteConfig: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/"); // Navigate programmatically to /dashboard
  };

  React.useEffect(() => {
    // Example: Redirect to dashboard on load
    goToDashboard();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="news" element={<NewsMainPage />} />
        <Route path="promotions" element={<NewsPage />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="exclusive-corporate-discounts" element={<Discounts />} />
        <Route path="wedding-photography" element={<Photography />} />
        <Route path="facilities-and-services" element={<FacilitiesServices />} />
        <Route path="transport" element={<Transport />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};

export default RouteConfig;
