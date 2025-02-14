import React, { useContext } from "react";
import HospitalContext from "../context/HospitalContext";

const HospitalFilter = () => {
  const { selectedHospital, setSelectedHospital } = useContext(HospitalContext);

  const hospitals = [
    "All",
    "AIIMS Delhi",
    "Safdarjung Hospital",
    "Lok Nayak Jai Prakash Narayan Hospital",
    "Guru Teg Bahadur Hospital",
    "Dr. Ram Manohar Lohia Hospital",
    "Sardar Vallabh Bhai Patel Hospital",
    "Rajiv Gandhi Super Speciality Hospital",
    "Sanjay Gandhi Memorial Hospital",
    "Deen Dayal Upadhyay Hospital",
    "Acharya Shree Bhikshu Hospital",
    "Sir Ganga Ram Hospital",
    "Indraprastha Apollo Hospital",
    "Maharaja Agrasen Hospital",
    "Max Super Speciality Hospital",
    "Fortis Escorts Heart Institute",
    "BLK Super Speciality Hospital",
    "Vardhman Mahavir Medical College & Safdarjung Hospital",
    "Lady Hardinge Medical College & Associated Hospitals",
    "Batra Hospital & Medical Research Centre",
    "Holy Family Hospital"
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Select a Hospital:</label>
      <select
        value={selectedHospital}
        onChange={(e) => setSelectedHospital(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        {hospitals.map((hospital, index) => (
          <option key={index} value={hospital}>
            {hospital}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HospitalFilter;

