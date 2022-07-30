import { MouseEvent } from 'react';

import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type Prop = {
  city: string;
  activeCity: string;
};

function CityListItem({ city, activeCity }: Prop): JSX.Element {
  const dispatch = useAppDispatch();

  const clickHandler = (event: MouseEvent) => {
    event.preventDefault();
    dispatch(changeCity(city));
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          city === activeCity ? 'tabs__item--active' : ''
        }`}
        href="/#"
        onClick={clickHandler}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityListItem;
