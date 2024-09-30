// Feedback.js
import React from "react";

const Feedback = () => {
  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Feedback</h2>
        <p className="text-lg mb-8">
          Your opinion matters! Please share your feedback to help us improve.
        </p>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <textarea
            placeholder="Your Feedback"
            className="border border-gray-300 p-3 w-full rounded-lg mb-4"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
