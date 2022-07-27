import { City } from '../../types/city';

type Prop = {
  cities: City[];
};

function CityList({ cities }: Prop): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.name} className="locations__item">
          <a className="locations__item-link tabs__item" href="/#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
