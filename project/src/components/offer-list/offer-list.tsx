import {Offer} from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OfferListProp = {
  offers: Offer[];
}

function OfferList({offers}: OfferListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferItem key={offer.id} offer={offer} />)}
    </div>
  );
}

export default OfferList;
