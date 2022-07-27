import { useState } from 'react';

import { offers } from '../../mocks/offers';
import { PLACE_COUNT, cities } from '../../constants';

import Header from '../../components/header/header';
import OfferItem from '../../components/offer-item/offer-item';
import CityList from '../../components/city-list/city-list';
import Map from '../../components/map/map';

function MainScreen(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();
  // eslint-disable-next-line no-console
  console.log(activeCardId);

  const handleActivateCard = (cardId: string) => {
    setActiveCardId(cardId);
  };

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
                {PLACE_COUNT} places to stay in Amsterdam
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
              <Map offers={offers} mapClassName="cities__map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
