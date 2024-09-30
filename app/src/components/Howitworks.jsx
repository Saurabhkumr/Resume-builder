// HowItWorks.js
import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
        <p className="text-lg mb-8">
          Follow these simple steps to create your resume:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-2xl font-semibold mb-4">
              Step 1: Fill Out Your Information
            </h3>
            <p>
              Enter your personal details, education, work experience, and
              skills.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-2xl font-semibold mb-4">
              Step 2: Choose a Template
            </h3>
            <p>Select a professional template that suits your style.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-2xl font-semibold mb-4">
              Step 3: Download Your Resume
            </h3>
            <p>Generate and download your polished resume in PDF format.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
