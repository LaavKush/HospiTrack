import { useState } from "react";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    issue: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
      <input
        type="text"
        name="issue"
        placeholder="Issue Type"
        className="w-full p-2 mb-4 border rounded"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Describe the problem"
        className="w-full p-2 mb-4 border rounded"
        onChange={handleChange}
      ></textarea>
      <input type="file" className="mb-4" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
};

export default ComplaintForm;
