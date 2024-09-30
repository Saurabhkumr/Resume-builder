import React from "react";
import { useNavigate } from "react-router-dom";
import HowItWorks from "./HowItWorks";
import ContactUs from "./ContactUs";
import Feedback from "./Feedback";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/resume-builder"); // Redirects to the Resume Builder page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#how-it-works" className="hover:underline">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:underline">
                  Feedback
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Build Your Professional Resume in Minutes
            </h2>
            <p className="text-xl mb-8">
              Create a polished resume that stands out from the crowd with ease.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Sections */}
        <HowItWorks />
        <ContactUs />
        <Feedback />
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Resume Builder. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
