import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OfferListProp = {
  offers: Offer[];
  pageName: string;
};

function OfferList({ offers, pageName }: OfferListProp): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();

  // eslint-disable-next-line no-console
  console.log(activeCardId);

  function handleActivateCard(cardId: string) {
    setActiveCardId(cardId);
  }

  return (
    <>
      {offers.map((offer) => (
        <OfferItem key={offer.id} offer={offer} pageName={pageName} onActivateCard={handleActivateCard} />
      ))}
    </>
  );
}

export default OfferList;
