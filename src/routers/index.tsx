import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NewsMainPage from "../pages/News/NewsMainPage";
import NotFound from "../pages/PageError/NotFound";
import MainPage from "../pages/MainPage";
import HomePage from "../pages/Home/HomePage";

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
        <Route path="news" element={<NewsMainPage />} />
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};

export default RouteConfig;
