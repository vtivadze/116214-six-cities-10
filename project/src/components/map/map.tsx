import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offer';
import { CITY } from '../../constants';
import useMap from '../../hooks/useMap';

import { URL_MARKER_DEFAULT } from '../../constants';

type MapProps = {
  offers: Offer[];
};

function Map({ offers }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

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
              icon: defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
