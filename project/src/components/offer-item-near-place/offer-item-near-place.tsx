import { Offer } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OfferItemNearPlaceProps = {
  offer: Offer;
};

function OfferItemNearPlace({ offer }: OfferItemNearPlaceProps): JSX.Element {
  return (
    <OfferItem
      offer={offer}
      itemClassName="near-places__card"
      imageWrapperClassName="near-places__image-wrapper"
    />
  );
}

export default OfferItemNearPlace;
