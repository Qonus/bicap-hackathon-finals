'use client';

import { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  useEffect(() => {
    // Initialize map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add tile layer (OpenStreetMap in this case)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker
    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup('A pretty marker.<br> Easily customizable.')
      .openPopup();

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '500px',
        width: '100%',
      }}
    />
  );
};

export default LeafletMap;
