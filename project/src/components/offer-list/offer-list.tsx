import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OfferListProp = {
  offers: Offer[];
};

function OfferList({ offers }: OfferListProp): JSX.Element {
  const [activeCardId, setActiveCardId] = useState();

  function onActiveCard(cardId: string) {
    setActiveCardId(cardId);
  }

  return (
    <>
      {offers.map((offer) => (
        <OfferItem key={offer.id} offer={offer} onActiveCard={onActiveCard} />
      ))}
    </>
  );
}

export default OfferList;
