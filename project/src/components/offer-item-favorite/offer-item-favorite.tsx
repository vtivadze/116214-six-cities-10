import { Offer } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OfferItemFavoriteProps = {
  offer: Offer;
};

function OfferItemFavorite({ offer }: OfferItemFavoriteProps): JSX.Element {
  return (
    <OfferItem
      offer={offer}
      itemClassName="favorites__card"
      imageWrapperClassName="favorites__image-wrapper"
      cardInfoClassName="favorites__card-info"
    />
  );
}

export default OfferItemFavorite;
