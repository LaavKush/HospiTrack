import { createContext, useState } from "react";

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [selectedHospital, setSelectedHospital] = useState("All"); // Default to 'All'

  return (
    <HospitalContext.Provider value={{ selectedHospital, setSelectedHospital }}>
      {children}
    </HospitalContext.Provider>
  );
};

export default HospitalContext;
