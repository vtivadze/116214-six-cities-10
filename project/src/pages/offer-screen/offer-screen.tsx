import { useParams } from 'react-router-dom';

import { Offer } from '../../types/offer';

import { offers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

import Header from '../../components/header/header';
import CommentForm from '../../components/comment-form/comment-form';
import OfferItem from '../../components/offer-item/offer-item';
import ReviewItem from '../../components/review-item/review-item';
import Map from '../../components/map/map';

import { calculateRatingPercentage, getMapCenterCoordinates } from '../../utils';

const REVIEWS_COUNT = 10;
const NEAR_PLACES_COUNT = 3;

function OfferScreen(): JSX.Element {
  const params = useParams();
  const id = params.id as string;
  const offer = offers.find((item: Offer) => item.id === +id) as Offer;

  const reviewsToDisplay = [...reviews]
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, REVIEWS_COUNT);

  const nearPlaces = offers
    .filter((item) => item.id !== +id)
    .slice(0, NEAR_PLACES_COUNT);

  const mapCenterCoordinates = getMapCenterCoordinates(nearPlaces[0].city.location);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image: string) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{
                      width: `${calculateRatingPercentage(offer.rating)}%`,
                    }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {offer.goods.length > 0 && (
                  <ul className="property__inside-list">
                    {offer.goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                {reviews.length > 0 && (
                  <ul className="reviews__list">
                    {reviewsToDisplay.map((review) => (
                      <ReviewItem
                        key={review.id}
                        review={review}
                        offer={offer}
                      />
                    ))}
                  </ul>
                )}
                <CommentForm />
              </section>
            </div>
          </div>
          <Map
            centerCoordinates={mapCenterCoordinates}
            items={nearPlaces}
            mapClassName="property__map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearPlaces.map((item) => (
                <OfferItem
                  key={item.id}
                  offer={item}
                  itemClassName="near-places__card"
                  imageWrapperClassName="near-places__image-wrapper"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
