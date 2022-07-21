import { Offer } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OfferItemMainProps = {
  offer: Offer;
  handleActivateCard: (offerId: string) => void;
};

function OfferItemMain({ offer, handleActivateCard }: OfferItemMainProps): JSX.Element {
  return (
    <OfferItem
      offer={offer}
      itemClassName="cities__card"
      imageWrapperClassName="cities__image-wrapper"
      onActivateCard={handleActivateCard}
    />
  );
}

export default OfferItemMain;
