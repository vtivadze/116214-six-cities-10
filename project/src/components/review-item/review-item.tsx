import { Review } from '../../types/review';
import { Offer } from '../../types/offer';

import { calculateRatingPercentage } from '../../utils';

type Props = {
  review: Review;
  offer: Offer;
};

function ReviewItem({review, offer}: Props): JSX.Element {
  return (
    <li key={review.id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.avatar}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.author}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{
                width: `${calculateRatingPercentage(offer.rating)}%`,
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.text}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {review.date}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
