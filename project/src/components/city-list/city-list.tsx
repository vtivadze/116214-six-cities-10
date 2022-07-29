import { useAppSelector } from '../../hooks';
import CityListItem from '../city-list-item/city-list-item';

type Prop = {
  cities: string[];
};

function CityList({ cities }: Prop): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <CityListItem key={city} city={city} activeCity={activeCity} />
      ))}
    </ul>
  );
}

export default CityList;
