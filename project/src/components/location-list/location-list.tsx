import LocationItem from '../location-item/location-item';
import { locations } from '../../constants';

function LocationList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <LocationItem key={location} location={location} />
      ))}
    </ul>
  );
}

export default LocationList;
