import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offer';
import { defaultCity } from '../../constants';
import useMap from '../../hooks/useMap';

import { URL_MARKER_DEFAULT } from '../../constants';

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  offers: Offer[];
};

function Map({ offers }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);

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

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
