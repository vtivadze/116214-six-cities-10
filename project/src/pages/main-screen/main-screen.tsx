import { useState } from 'react';

import { Offer } from '../../types/offer';
import Header from '../../components/header/header';
import OfferItemMain from '../../components/offer-item/offer-item-main/offer-item-main';
import LocationList from '../../components/location-list/location-list';

type MainScreenProps = {
  placeCount: number;
  offers: Offer[];
};

function MainScreen({ placeCount, offers }: MainScreenProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();
  // eslint-disable-next-line no-console
  console.log(activeCardId);

  function handleActivateCard(cardId: string) {
    setActiveCardId(cardId);
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {placeCount} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="/" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <OfferItemMain
                    key={offer.id}
                    offer={offer}
                    handleActivateCard={handleActivateCard}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
