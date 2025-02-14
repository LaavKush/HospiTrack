import React, { useContext, useMemo } from "react";
import HospitalContext from "../context/HospitalContext";
import IssueTracker from "../components/IssueTracker";
import AIProcessing from "../pages/AIProcessing";
import MonitorDisplay from "../pages/MonitorDisplay";
import hospitalData from "../data/hospitalData";
import DashboardCard from "../components/DashboardCard";
import DelhiHospitalMap from "../components/DelhiHospitalMap";
import HospitalFilter from "../components/HospitalFilter";
import Dashboard from "../components/Dashboard"; // Import your new Dashboard component

const AdminDashboard = () => {
  const { selectedHospital } = useContext(HospitalContext);

  // Dummy data for AQI, Hygiene, and Complaints
  const hospitalStats = useMemo(() => ({
    "AIIMS Delhi": { aqi: "Good (50)", hygiene: "4.5/5", complaints: 2 },
    "Safdarjung Hospital": { aqi: "Moderate (80)", hygiene: "3.8/5", complaints: 5 },
    "Lok Nayak Jai Prakash Narayan Hospital": { aqi: "Poor (120)", hygiene: "3.2/5", complaints: 8 },
    "Guru Teg Bahadur Hospital": { aqi: "Moderate (95)", hygiene: "3.9/5", complaints: 4 },
    "Dr. Ram Manohar Lohia Hospital": { aqi: "Good (45)", hygiene: "4.7/5", complaints: 1 },
    "Sardar Vallabh Bhai Patel Hospital": { aqi: "Moderate (85)", hygiene: "3.5/5", complaints: 3 },
  }), []);

  // Memoized selected hospital statistics
  const selectedStats = useMemo(() => {
    return hospitalStats[selectedHospital] || { aqi: "N/A", hygiene: "N/A", complaints: "N/A" };
  }, [selectedHospital, hospitalStats]);

  // UseMemo to filter hospital data only when selectedHospital changes
  const filteredData = useMemo(() => {
    return selectedHospital === "All"
      ? hospitalData
      : hospitalData.filter((hospital) => hospital.name !== selectedHospital); // Exclude selected hospital
  }, [selectedHospital]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🏥 Hospitals Dashboard</h2>

      {/* Hospital Filter */}
      <HospitalFilter />

      {/* Display Selected Hospital Details */}
      {selectedHospital !== "All" && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">{selectedHospital}</h3>
          <p>🌍 AQI Level: <strong>{selectedStats.aqi}</strong></p>
          <p>🛁 Hygiene Score: <strong>{selectedStats.hygiene}</strong></p>
          <p>🚨 Complaints: <strong>{selectedStats.complaints}</strong></p>
        </div>
      )}

      {/* Dashboard Section */}
      <Dashboard /> {/* Add Dashboard here */}

      {/* Dashboard Cards (Showing Filtered Data) */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredData.map((hospital, index) => (
          <DashboardCard key={index} hospital={hospital} />
        ))}
      </div> */}

    
      {/* Issue Tracker & AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Issue Tracker</h2>
          <IssueTracker selectedHospital={selectedHospital} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">AI Insights</h2>
          <AIProcessing selectedHospital={selectedHospital} />
        </div>
      </div>

      {/* Real-Time Monitoring */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Real-Time Monitoring</h2>
        <MonitorDisplay selectedHospital={selectedHospital} />
      </div>
        {/* Delhi Hospitals Map */}
        <div className="mb-6">
        <DelhiHospitalMap />
      </div>

    </div>
    
  );
};

export default AdminDashboard;
