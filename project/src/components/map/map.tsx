import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, ZOOM_LEVEL } from '../../constants';

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type Props = {
  offers: Offer[];
  mapClassName: string;
};

function Map({offers, mapClassName }: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    const initialCoordinates = {
      lat: offers[0].city.location.latitude,
      lng: offers[0].city.location.longitude,
    };

    map && map.setView(initialCoordinates, ZOOM_LEVEL);
    const markerGroup = map && leaflet.layerGroup().addTo(map);

    if (markerGroup) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: defaultIcon,
            }
          )
          .addTo(markerGroup);
      });
    }

    // This row clears old markers
    // While uncomment I get error
    // return () => markerGroup?.clearLayers();
  }, [map, offers]);

  return (
    <section
      className={`${mapClassName} map`}
      ref={mapRef}
    />
  );
}

export default Map;
