type LocationItemProps = {
  location: string;
}

function LocationItem({location}: LocationItemProps): JSX.Element {
  let className = 'locations__item-link tabs__item';
  //TODO: Manage by NavLink
  if (location === 'Amsterdam') {
    className += ' tabs__item--active';
  }

  return (
    <li className="locations__item">
      <a className={className} href="/">
        <span>{location}</span>
      </a>
    </li>
  );
}

export default LocationItem;
