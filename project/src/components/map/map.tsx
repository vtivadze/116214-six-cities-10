import { Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[];
}

function Map({offers}: MapProps): JSX.Element {
  return (
    <section className="cities__map map"></section>
  );
}

export default Map;
