export const loadGoogleMapsScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        resolve();
        return;
      }
  
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA82q2r7gN2qqfjWvLBbaxS1CFkkYdgNwQ&libraries=geometry,drawing`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject('Erro ao carregar o Google Maps');
      document.head.appendChild(script);
    });
  };
  