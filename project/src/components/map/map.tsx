import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap';

import { initialCoordinates } from '../../constants';
import { URL_MARKER_DEFAULT } from '../../constants';

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type Props = {
  offers: Offer[];
  mapClassName: string;
};

function Map({ offers, mapClassName }: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, initialCoordinates);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.city.location.latitude,
              lng: offer.city.location.longitude,
            },
            {
              icon: defaultIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers ]);

  return <section className={`${mapClassName} map`} ref={mapRef} />;
}

export default Map;
