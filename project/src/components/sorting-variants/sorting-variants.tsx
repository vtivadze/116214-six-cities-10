import { useState } from 'react';

import SortingItem from '../sorting-item/sorting-item';
import { useAppSelector } from '../../hooks';
import { SortingType } from '../../constants';
import { selectSortingType } from '../../utils';

function SortingVariants(): JSX.Element {
  const [sortingOpened, setSortingOpened] = useState(false);
  const currentSortingType = useAppSelector(selectSortingType);

  const handleSortingOpenedChange = () => {
    setSortingOpened((prevState) => !prevState);
  };

  const handleSortingTypeChange = () => {
    setSortingOpened(false);
  };

  return (
    <form className="places__sorting" action="/" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingOpenedChange}
      >
        {currentSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          sortingOpened ? 'places__options--opened' : ''
        }`}
      >
        {Object.values(SortingType).map((item) => (
          <SortingItem
            key={item}
            itemSortingType={item}
            currentSortingType={currentSortingType}
            handleSortingTypeChange={handleSortingTypeChange}
          />
        ))}
      </ul>
    </form>
  );
}

export default SortingVariants;
