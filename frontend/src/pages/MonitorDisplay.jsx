import { useState, useEffect } from "react";

const MonitorDisplay = () => {
  const [airQuality, setAirQuality] = useState(60);
  const [hygieneLevel, setHygieneLevel] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      setAirQuality((prev) => prev + (Math.random() * 5 - 2.5)); // Random fluctuation
      setHygieneLevel((prev) => prev + (Math.random() * 5 - 2.5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Real-Time Monitoring</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-100 rounded-md shadow-md">
          <h3 className="font-semibold">Air Quality Index (AQI)</h3>
          <p className={`text-2xl font-bold ${airQuality > 70 ? "text-red-600" : "text-green-600"}`}>{Math.round(airQuality)}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-md shadow-md">
          <h3 className="font-semibold">Hygiene Level</h3>
          <p className={`text-2xl font-bold ${hygieneLevel < 75 ? "text-red-600" : "text-green-600"}`}>{Math.round(hygieneLevel)}%</p>
        </div>
      </div>
    </div>
  );
};

export default MonitorDisplay;
