import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-extrabold text-light-blue-400">Smart Hospital Dashboard</h1>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-light-blue-300 transition duration-300 ease-in-out transform hover:scale-105">
          Dashboard
        </Link>
        <Link to="/complaints" className="hover:text-light-blue-300 transition duration-300 ease-in-out transform hover:scale-105">
          Complaints
        </Link>
        <Link to="/monitor" className="hover:text-light-blue-300 transition duration-300 ease-in-out transform hover:scale-105">
          Monitor
        </Link>
        <Link to="/ai" className="hover:text-light-blue-300 transition duration-300 ease-in-out transform hover:scale-105">
          AI Insights
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
