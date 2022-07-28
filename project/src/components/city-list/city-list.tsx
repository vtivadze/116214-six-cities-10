import { MouseEvent } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type Prop = {
  cities: string[];
};

function CityList({ cities }: Prop): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const clickHandler = (event: MouseEvent) => {
    event.preventDefault();
    // How to avoid using DOM
    const city = event.currentTarget.getElementsByTagName('SPAN')[0].textContent;
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${
              city === activeCity ? 'tabs__item--active' : ''
            }`}
            href="/#"
            // While using bind get TypeScript error
            // onClick={clickHandler.bind(null, city)}
            onClick={clickHandler}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
