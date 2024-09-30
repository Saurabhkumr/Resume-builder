import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const templates = [
  {
    id: 1,
    name: "Classic",
    description: "A clean and professional layout.",
  },
  {
    id: 2,
    name: "Modern",
    description: "A stylish design with a creative touch.",
  },
];

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [resumeVisible, setResumeVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTemplateChange = (e) => {
    const templateId = parseInt(e.target.value, 10);
    const selected = templates.find((template) => template.id === templateId);
    setSelectedTemplate(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeVisible(true); // Show the resume after submitting
  };

  const downloadResumeAsPDF = () => {
    const resumeElement = document.getElementById("resume");

    html2canvas(resumeElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save(`${formData.name}_Resume.pdf`);
    });
  };

  const renderTemplate = () => {
    switch (selectedTemplate.id) {
      case 1:
        return (
          <div
            id="resume"
            className="p-6 bg-white shadow-lg rounded-lg text-gray-800 font-light leading-relaxed"
          >
            <h2 className="text-4xl font-semibold mb-4 border-b pb-2 text-blue-800">
              {formData.name}
            </h2>
            <div className="mb-4">
              <p className="text-lg">Email: {formData.email}</p>
              <p className="text-lg">Phone: {formData.phone}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-1">
                Education
              </h3>
              <p>{formData.education}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-1">
                Experience
              </h3>
              <p>{formData.experience}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-1">
                Skills
              </h3>
              <p>{formData.skills}</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div
            id="resume"
            className="p-8 bg-blue-50 shadow-lg rounded-lg text-blue-900 font-light"
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-4 border-b pb-2">
              {formData.name}
            </h2>
            <div className="mb-6">
              <p className="text-lg">Email: {formData.email}</p>
              <p className="text-lg">Phone: {formData.phone}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Education
              </h3>
              <p>{formData.education}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Experience
              </h3>
              <p>{formData.experience}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Skills
              </h3>
              <p>{formData.skills}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 sm:px-0">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
        Professional Resume Builder
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-lg mb-10 max-w-3xl mx-auto"
      >
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="education"
            placeholder="Education (e.g., BSc in Computer Science)"
            value={formData.education}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="experience"
            placeholder="Work Experience (e.g., Software Developer at XYZ Corp)"
            value={formData.experience}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (e.g., JavaScript, React, Node.js)"
            value={formData.skills}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Template Selection */}
          <div className="space-y-2">
            <label className="font-semibold text-gray-700">
              Select a Template:
            </label>
            <select
              onChange={handleTemplateChange}
              className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {templates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name} - {template.description}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
          >
            Generate Resume
          </button>
        </div>
      </form>

      {resumeVisible && (
        <div className="max-w-4xl mx-auto">
          {renderTemplate()}
          <button
            onClick={downloadResumeAsPDF}
            className="mt-8 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition"
          >
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
