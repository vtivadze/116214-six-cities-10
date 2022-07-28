import { MutableRefObject, useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import { Map } from 'leaflet';

import { useAppSelector } from './';

import { ZOOM_LEVEL } from '../constants';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>
): Map | null {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sampleCity = offers.find((offer) => offer.city.name === city);

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    const initialCoordinates = {
      lat: sampleCity ? sampleCity.city.location.latitude : 0,
      lng: sampleCity ? sampleCity.city.location.longitude : 0,
    };

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet
        .map(mapRef.current)
        .setView(initialCoordinates, ZOOM_LEVEL);

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
  }, [mapRef, sampleCity]);

  return map;
}

export default useMap;
