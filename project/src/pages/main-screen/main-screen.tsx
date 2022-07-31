import { useState } from 'react';

import Header from '../../components/header/header';
import OfferItem from '../../components/offer-item/offer-item';
import SortingVariants from '../../components/sorting-variants/sorting-variants';
import CityList from '../../components/city-list/city-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';

import { cities } from '../../constants';
import { getCityOffers, getMapCenterCoordinates } from '../../utils';

function MainScreen(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();
  // eslint-disable-next-line no-console
  console.log(activeCardId);

  const handleActivateCard = (cardId: string) => {
    setActiveCardId(cardId);
  };

  // while defining a function 'selectCity' in util.js
  // I get error that 'useAppSelector' is hook
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const cityOffers = getCityOffers(offers, city);
  const mapCenterCoordinates = getMapCenterCoordinates(cityOffers[0].city.location);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={cities} />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityOffers.length} places to stay in Amsterdam
              </b>
              <SortingVariants />
              <div className="cities__places-list places__list tabs__content">
                {cityOffers.map((offer) => (
                  <OfferItem
                    key={offer.id}
                    offer={offer}
                    itemClassName="cities__card"
                    imageWrapperClassName="cities__image-wrapper"
                    onActivateCard={handleActivateCard}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                centerCoordinates={mapCenterCoordinates}
                items={cityOffers}
                mapClassName="cities__map"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
