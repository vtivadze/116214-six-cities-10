import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type OfferItemProps = {
  offer: Offer;
  pageName: string;
  onActivateCard?: (offerId: string) => void;
};

function OfferItem({
  offer,
  onActivateCard,
  pageName
}: OfferItemProps): JSX.Element {

  const classNamePrefix = pageName === 'main' ? 'cities' : 'favorites';

  function handleMouseOver(evt: React.MouseEvent<HTMLElement>): void {
    const cardId = evt.currentTarget.id;
    onActivateCard && onActivateCard(cardId);
  }

  return (
    <article
      className={`${classNamePrefix}__card place-card`}
      id={offer.id.toString(10)}
      onMouseOver={pageName === 'main' ? handleMouseOver : undefined}
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={`place-card__info ${pageName === 'favorites' ? 'favorites__card-info' : null}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${offer.isFavorite ? 'place-card__bookmark-button--active' : null} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
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
