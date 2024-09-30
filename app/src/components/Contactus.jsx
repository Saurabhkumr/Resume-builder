// ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-8">
          We would love to hear from you! If you have any feedback or questions,
          feel free to reach out.
        </p>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 w-full rounded-lg mb-4"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 w-full rounded-lg mb-4"
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-3 w-full rounded-lg mb-4"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
