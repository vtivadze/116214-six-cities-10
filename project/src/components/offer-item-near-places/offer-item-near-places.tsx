import { Offer } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OfferItemNearPlacesProps = {
  offer: Offer;
};

function OfferItemNearPlaces({ offer }: OfferItemNearPlacesProps): JSX.Element {
  return (
    <OfferItem
      offer={offer}
      itemClassName="near-places__card"
      imageWrapperClassName="near-places__image-wrapper"
    />
  );
}

export default OfferItemNearPlaces;
