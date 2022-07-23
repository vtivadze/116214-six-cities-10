import {MutableRefObject, useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';
import {Map} from 'leaflet';

import {ZOOM_LEVEL} from '../constants';

type Coordinates = {
  lat: number;
  lng: number;
}

function useMap(mapRef: MutableRefObject<HTMLElement | null>, initialCoordinates: Coordinates): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: initialCoordinates.lat,
          lng: initialCoordinates.lng,
        },
        zoom: ZOOM_LEVEL,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, initialCoordinates]);

  return map;
}

export default useMap;
