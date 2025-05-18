import React, { useEffect, useRef } from 'react';

interface MapProps {
  latOrigin: number;
  lngOrigin: number;
  latDestination: number;
  lngDestination: number;
}

const Map: React.FC<MapProps> = ({
  latOrigin,
  lngOrigin,
  latDestination,
  lngDestination,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const loadGoogleMapsScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyA82q2r7gN2qqfjWvLBbaxS1CFkkYdgNwQ&libraries=geometry,drawing';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject('Erro ao carregar o Google Maps');
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadGoogleMapsScript();

        if (mapRef.current && window.google) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: latOrigin, lng: lngOrigin },
            zoom: 14,
          });

          new window.google.maps.Marker({
            position: { lat: latOrigin, lng: lngOrigin },
            map,
            title: 'Origem',
          });

          new window.google.maps.Marker({
            position: { lat: latDestination, lng: lngDestination },
            map,
            title: 'Destino',
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    initMap();
  }, [latOrigin, lngOrigin, latDestination, lngDestination]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', marginTop: '20px', border: '1px solid #ccc' }}
    />
  );
};

export default Map;
