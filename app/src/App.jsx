import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Ensure this path is correct
import ResumeBuilder from "./components/ResumeBuilder"; // Import the Resume Builder component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />{" "}
        {/* New route for Resume Builder */}
        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
