import { useEffect, useRef } from "react";

const HospitalMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 28.6139, lng: 77.2090 },
      zoom: 12,
    });

    new window.google.maps.Marker({
      position: { lat: 28.6139, lng: 77.2090 },
      map,
      title: "Hospital",
    });
  }, []);

  return <div ref={mapRef} className="h-96 w-full" />;
};

export default HospitalMap;
