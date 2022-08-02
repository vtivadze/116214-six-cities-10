import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offer';
import { MapCoordinates } from '../../types/location-coordinates';
import useMap from '../../hooks/useMap';
import {
  URL_MARKER_DEFAULT,
  URL_MARKER_ACTIVE,
  ZOOM_LEVEL,
} from '../../constants';

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type Props = {
  centerCoordinates: MapCoordinates;
  items: Offer[];
  mapClassName: string;
  activeCardId?: string | undefined;
};

function Map({
  centerCoordinates,
  items,
  mapClassName,
  activeCardId,
}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.setView(centerCoordinates, ZOOM_LEVEL);
    const markerGroup = leaflet.layerGroup().addTo(map);

    if (markerGroup) {
      items.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id.toString(10) === activeCardId
                  ? activeIcon
                  : defaultIcon,
            }
          )
          .addTo(markerGroup);
      });
    }

    return () => {
      markerGroup?.clearLayers();
    };
  }, [map, items, centerCoordinates, activeCardId]);

  return <section className={`${mapClassName} map`} ref={mapRef} />;
}

export default Map;
