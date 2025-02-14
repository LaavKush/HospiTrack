import { useState } from "react";

const IssueTracker = () => {
  const [issues, setIssues] = useState([
    { id: 1, issue: "Unhygienic ICU", status: "Pending", priority: "High" },
    { id: 2, issue: "Sanitization Required", status: "In Progress", priority: "Medium" },
    { id: 3, issue: "Faulty Ventilation", status: "Resolved", priority: "Low" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Issue Tracker</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Issue</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-b">
              <td className="border p-2">{issue.issue}</td>
              <td className="border p-2">
                <span className={`px-2 py-1 rounded ${issue.status === "Pending" ? "bg-red-500 text-white" : issue.status === "In Progress" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"}`}>
                  {issue.status}
                </span>
              </td>
              <td className="border p-2">{issue.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTracker;
