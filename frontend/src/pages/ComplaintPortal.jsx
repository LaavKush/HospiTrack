import { useState } from "react";

const ComplaintPortal = () => {
  const [complaint, setComplaint] = useState("");
  const [category, setCategory] = useState("Sanitation");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", { complaint, category });
    setSubmitted(true);
    setComplaint(""); // Clear form
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Complaint Portal</h1>
      {submitted ? (
        <p className="text-green-600 font-semibold">Your complaint has been submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
          <label className="block mb-2 font-semibold">Complaint Category:</label>
          <select
            className="w-full border rounded p-2 mb-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Sanitation">Sanitation</option>
            <option value="Ventilation">Ventilation</option>
            <option value="Medical Equipment">Medical Equipment</option>
            <option value="Staff Behavior">Staff Behavior</option>
          </select>

          <label className="block mb-2 font-semibold">Complaint Details:</label>
          <textarea
            className="w-full border rounded p-2 mb-4"
            rows="4"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe the issue..."
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Complaint
          </button>
        </form>
      )}
    </div>
  );
};

export default ComplaintPortal;
