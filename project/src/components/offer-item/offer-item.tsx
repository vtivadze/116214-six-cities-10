import { Link } from 'react-router-dom';

import { Offer } from '../../types/offer';

import { calculateRatingPercentage } from '../../utils';

type OfferItemProps = {
  offer: Offer;
  itemClassName: string;
  imageWrapperClassName: string;
  cardInfoClassName?: string;
  onActivateCard?: (offerId: string) => void;
};

function OfferItem({
  offer,
  itemClassName,
  imageWrapperClassName,
  cardInfoClassName,
  onActivateCard,
}: OfferItemProps): JSX.Element {

  function handleMouseOver(evt: React.MouseEvent<HTMLElement>): void {
    onActivateCard && onActivateCard(offer.id.toString());
  }

  return (
    <article
      className={`${itemClassName} place-card`}
      id={offer.id.toString(10)}
      onMouseOver={onActivateCard && handleMouseOver}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClassName} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={`place-card__info ${cardInfoClassName}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`${
              offer.isFavorite && 'place-card__bookmark-button--active'
            } place-card__bookmark-button button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{ width: `${calculateRatingPercentage(offer.rating)}%` }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferItem;
