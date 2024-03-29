import { useState } from 'react';

import Header from '../../components/header/header';
import OfferItem from '../../components/offer-item/offer-item';
import SortingVariants from '../../components/sorting-variants/sorting-variants';
import CityList from '../../components/city-list/city-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { selectCity, selectOffers, selectSortingType } from '../../utils';

import { cities, DEFAULT_SORTING_TYPE } from '../../constants';
import {
  getCityOffers,
  getMapCenterCoordinates,
  sortOffers,
} from '../../utils';

function MainScreen(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | undefined>();

  const handleActivateCard = (cardId: string) => {
    setActiveCardId(cardId);
  };

  const handleCardMouseLfeave = () => {
    setActiveCardId(undefined);
  };

  const offers = useAppSelector(selectOffers);
  const city = useAppSelector(selectCity);

  const cityOffers = getCityOffers(offers, city);

  const sortingType = useAppSelector(selectSortingType);
  const sortedCityOffers =
    sortingType === DEFAULT_SORTING_TYPE
      ? cityOffers
      : sortOffers(cityOffers, sortingType);

  const mapCenterCoordinates = getMapCenterCoordinates(
    cityOffers[0].city.location
  );

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
                {sortedCityOffers.map((offer) => (
                  <OfferItem
                    key={offer.id}
                    offer={offer}
                    itemClassName="cities__card"
                    imageWrapperClassName="cities__image-wrapper"
                    onActivateCard={handleActivateCard}
                    onCardMouseLeave={handleCardMouseLfeave}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                centerCoordinates={mapCenterCoordinates}
                items={cityOffers}
                mapClassName="cities__map"
                activeCardId={activeCardId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
