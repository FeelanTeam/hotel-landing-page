import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from "./routers";

const App: React.FC = () => {
  return (
    <Router>
      <RouteConfig />
    </Router>
  );
};

export default App;
