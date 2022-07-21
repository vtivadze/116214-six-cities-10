import leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Offer } from '../../types/offer';
import { CITY } from '../../constants';

type MapProps = {
  offers: Offer[];
}

function Map({offers}: MapProps): JSX.Element {
  return (
    <section className="cities__map map"></section>
  );
}

export default Map;
