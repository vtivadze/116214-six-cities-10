import { Offer } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type Props = {
  offer: Offer;
};

function OfferItemFavorite({ offer }: Props): JSX.Element {
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
