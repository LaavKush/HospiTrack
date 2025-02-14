import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"; // Importing Navigation Bar
import AdminDashboard from "./pages/AdminDashboard";
import ComplaintPortal from "./pages/ComplaintPortal";
import MonitorDisplay from "./pages/MonitorDisplay";
import AIProcessing from "./pages/AIProcessing";
import { HospitalProvider } from "./context/HospitalContext"; // ✅ Correct import
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <HospitalProvider> {/* ✅ Wrap the entire app with context provider */}
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navigation /> {/* Persistent Navigation Bar */}
          
          <div className="flex-grow p-6">
            <Routes>
              {/* Defining routes for different pages */}
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/complaints" element={<ComplaintPortal />} />
              <Route path="/monitor" element={<MonitorDisplay />} />
              <Route path="/ai" element={<AIProcessing />} />
            </Routes>
          </div>
          
          <Footer /> {/* Add Footer at the bottom of the page */}
        </div>
      </Router>
    </HospitalProvider>
  );
}

export default App;
