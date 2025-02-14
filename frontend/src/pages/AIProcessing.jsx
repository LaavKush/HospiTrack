import { useState, useEffect } from "react";

const AIProcessing = () => {
  const [status, setStatus] = useState("Analyzing...");
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStatus("Report Generated");
      setInsights([
        "AQI levels increased by 15% over the past week",
        "Most reported issues relate to sanitation",
        "High-priority complaints remain unresolved for 3 days",
      ]);
    }, 3000);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">AI Processing & Insights</h2>
      <div className="p-4 bg-gray-100 rounded-md shadow-md">
        <p className="text-lg font-semibold">{status}</p>
        <ul className="mt-3">
          {insights.map((insight, index) => (
            <li key={index} className="bg-white p-2 mb-2 rounded shadow-sm">
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIProcessing;
