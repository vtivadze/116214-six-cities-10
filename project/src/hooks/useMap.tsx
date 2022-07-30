import { MutableRefObject, useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import { Map } from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current);

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export default useMap;
