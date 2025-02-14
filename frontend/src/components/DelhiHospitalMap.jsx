import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import hospitalData from "../data/hospitalData";

const DelhiHospitalMap = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  return (
    <div className="flex flex-col items-center">
      {/* Map Section */}
      <MapContainer center={[28.6139, 77.2090]} zoom={12} className="w-full h-[500px] rounded-lg shadow-lg">
        {/* OpenStreetMap Tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Adding Markers for Hospitals */}
        {hospitalData.map((hospital) => (
          <Marker
            key={hospital.id}
            position={hospital.location}
            eventHandlers={{
              click: () => setSelectedHospital(hospital),
            }}
          >
            <Popup>
              <strong>{hospital.name}</strong>
              <br />
              📍 {hospital.address}
              <br />
              📞 {hospital.contact}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Display Selected Hospital Details */}
      {selectedHospital && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-bold">{selectedHospital.name}</h2>
          <p>📍 {selectedHospital.address}</p>
          <p>📞 Contact: {selectedHospital.contact}</p>
          <button onClick={() => setSelectedHospital(null)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DelhiHospitalMap;
