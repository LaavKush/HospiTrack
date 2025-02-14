const DashboardCard = ({ hospital }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{hospital.name}</h3>
        <p>🌍 AQI Level: <strong>{hospital.aqi}</strong></p>
        <p>🛁 Hygiene Score: <strong>{hospital.hygieneScore}/5</strong></p>
        <p>🚨 Complaints: <strong>{hospital.complaints}</strong></p>
      </div>
    );
  };
  
  export default DashboardCard;
  