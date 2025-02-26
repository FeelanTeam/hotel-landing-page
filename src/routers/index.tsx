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
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="news" element={<NewsMainPage />} />
        <Route path="news-page" element={<NewsPage />} />
        <Route path="restaurant" element={<Restaurant />} />
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};

export default RouteConfig;
