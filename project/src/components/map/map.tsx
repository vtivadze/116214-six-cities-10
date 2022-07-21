import { useRef } from 'react';
import leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offer';
import { CITY } from '../../constants';

type MapProps = {
  offers: Offer[];
}

function Map({offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
